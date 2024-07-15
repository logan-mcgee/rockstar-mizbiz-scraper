! function() {
  try {
    var t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      e = (new Error).stack;
    e && (t._sentryDebugIds = t._sentryDebugIds || {}, t._sentryDebugIds[e] = "3d730f80-55b3-4a93-992f-b0dfb4d2cb33", t._sentryDebugIdIdentifier = "sentry-dbid-3d730f80-55b3-4a93-992f-b0dfb4d2cb33")
  } catch (t) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/modules-core-newswire-article",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_newswire_article = self.webpackChunk_rockstargames_modules_core_newswire_article || []).push([
  [752], {
    43924: (t, e, n) => {
      "use strict";
      n.d(e, {
        cp: () => Mt
      });
      var r = n(31632),
        i = n(82795),
        a = n(51664),
        s = n.n(a),
        o = "data-focus-lock",
        l = "data-focus-lock-disabled",
        u = n(92634),
        h = {
          width: "1px",
          height: "0px",
          padding: 0,
          overflow: "hidden",
          position: "fixed",
          top: "1px",
          left: "1px"
        },
        c = function(t) {
          var e = t.children;
          return a.createElement(a.Fragment, null, a.createElement("div", {
            key: "guard-first",
            "data-focus-guard": !0,
            "data-focus-auto-guard": !0,
            style: h
          }), e, e && a.createElement("div", {
            key: "guard-last",
            "data-focus-guard": !0,
            "data-focus-auto-guard": !0,
            style: h
          }))
        };
      c.propTypes = {}, c.defaultProps = {
        children: null
      };
      var p = n(35045),
        f = (0, p.W)({}, (function(t) {
          return {
            target: t.target,
            currentTarget: t.currentTarget
          }
        })),
        d = (0, p.W)(),
        m = (0, p.W)(),
        v = (0, p.Y)({
          async: !0
        }),
        g = [],
        y = a.forwardRef((function(t, e) {
          var n, r = a.useState(),
            s = r[0],
            c = r[1],
            p = a.useRef(),
            m = a.useRef(!1),
            y = a.useRef(null),
            b = t.children,
            x = t.disabled,
            S = t.noFocusGuards,
            E = t.persistentFocus,
            P = t.crossFrame,
            C = t.autoFocus,
            w = (t.allowTextSelection, t.group),
            M = t.className,
            T = t.whiteList,
            A = t.hasPositiveIndices,
            k = t.shards,
            _ = void 0 === k ? g : k,
            D = t.as,
            I = void 0 === D ? "div" : D,
            F = t.lockProps,
            O = void 0 === F ? {} : F,
            V = t.sideCar,
            R = t.returnFocus,
            L = t.focusOptions,
            B = t.onActivation,
            N = t.onDeactivation,
            j = a.useState({})[0],
            z = a.useCallback((function() {
              y.current = y.current || document && document.activeElement, p.current && B && B(p.current), m.current = !0
            }), [B]),
            G = a.useCallback((function() {
              m.current = !1, N && N(p.current)
            }), [N]);
          (0, a.useEffect)((function() {
            x || (y.current = null)
          }), []);
          var H = a.useCallback((function(t) {
              var e = y.current;
              if (e && e.focus) {
                var n = "function" == typeof R ? R(e) : R;
                if (n) {
                  var r = "object" == typeof n ? n : void 0;
                  y.current = null, t ? Promise.resolve().then((function() {
                    return e.focus(r)
                  })) : e.focus(r)
                }
              }
            }), [R]),
            W = a.useCallback((function(t) {
              m.current && f.useMedium(t)
            }), []),
            U = d.useMedium,
            q = a.useCallback((function(t) {
              p.current !== t && (p.current = t, c(t))
            }), []),
            Y = (0, i.c)(((n = {})[l] = x && "disabled", n[o] = w, n), O),
            $ = !0 !== S,
            K = $ && "tail" !== S,
            X = (0, u.m)([e, q]);
          return a.createElement(a.Fragment, null, $ && [a.createElement("div", {
            key: "guard-first",
            "data-focus-guard": !0,
            tabIndex: x ? -1 : 0,
            style: h
          }), A ? a.createElement("div", {
            key: "guard-nearest",
            "data-focus-guard": !0,
            tabIndex: x ? -1 : 1,
            style: h
          }) : null], !x && a.createElement(V, {
            id: j,
            sideCar: v,
            observed: s,
            disabled: x,
            persistentFocus: E,
            crossFrame: P,
            autoFocus: C,
            whiteList: T,
            shards: _,
            onActivation: z,
            onDeactivation: G,
            returnFocus: H,
            focusOptions: L
          }), a.createElement(I, (0, i.c)({
            ref: X
          }, Y, {
            className: M,
            onBlur: U,
            onFocus: W
          }), b), K && a.createElement("div", {
            "data-focus-guard": !0,
            tabIndex: x ? -1 : 0,
            style: h
          }))
        }));
      y.propTypes = {}, y.defaultProps = {
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
      const b = y;
      var x = n(74848),
        S = n(62504);
      var E = function(t) {
          for (var e = Array(t.length), n = 0; n < t.length; ++n) e[n] = t[n];
          return e
        },
        P = function(t) {
          return Array.isArray(t) ? t : [t]
        },
        C = function(t) {
          return Array.isArray(t) ? t[0] : t
        },
        w = function(t) {
          return t.parentNode && t.parentNode.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? t.parentNode.host : t.parentNode
        },
        M = function(t) {
          return t === document || t && t.nodeType === Node.DOCUMENT_NODE
        },
        T = function(t, e) {
          var n = t.get(e);
          if (void 0 !== n) return n;
          var r = function(t, e) {
            return !t || M(t) || ! function(t) {
              if (t.nodeType !== Node.ELEMENT_NODE) return !1;
              var e = window.getComputedStyle(t, null);
              return !(!e || !e.getPropertyValue || "none" !== e.getPropertyValue("display") && "hidden" !== e.getPropertyValue("visibility"))
            }(t) && e(w(t))
          }(e, T.bind(void 0, t));
          return t.set(e, r), r
        },
        A = function(t, e) {
          var n = t.get(e);
          if (void 0 !== n) return n;
          var r = function(t, e) {
            return !(t && !M(t)) || !!I(t) && e(w(t))
          }(e, A.bind(void 0, t));
          return t.set(e, r), r
        },
        k = function(t) {
          return t.dataset
        },
        _ = function(t) {
          return "INPUT" === t.tagName
        },
        D = function(t) {
          return _(t) && "radio" === t.type
        },
        I = function(t) {
          var e = t.getAttribute("data-no-autofocus");
          return ![!0, "true", ""].includes(e)
        },
        F = function(t) {
          var e;
          return Boolean(t && (null === (e = k(t)) || void 0 === e ? void 0 : e.focusGuard))
        },
        O = function(t) {
          return !F(t)
        },
        V = function(t) {
          return Boolean(t)
        },
        R = function(t, e) {
          var n = t.tabIndex - e.tabIndex,
            r = t.index - e.index;
          if (n) {
            if (!t.tabIndex) return 1;
            if (!e.tabIndex) return -1
          }
          return n || r
        },
        L = function(t, e, n) {
          return E(t).map((function(t, e) {
            return {
              node: t,
              index: e,
              tabIndex: n && -1 === t.tabIndex ? (t.dataset || {}).focusGuard ? 0 : -1 : t.tabIndex
            }
          })).filter((function(t) {
            return !e || t.tabIndex >= 0
          })).sort(R)
        },
        B = ["button:enabled", "select:enabled", "textarea:enabled", "input:enabled", "a[href]", "area[href]", "summary", "iframe", "object", "embed", "audio[controls]", "video[controls]", "[tabindex]", "[contenteditable]", "[autofocus]"].join(","),
        N = "".concat(B, ", [data-focus-guard]"),
        j = function(t, e) {
          return E((t.shadowRoot || t).children).reduce((function(t, n) {
            return t.concat(n.matches(e ? N : B) ? [n] : [], j(n))
          }), [])
        },
        z = function(t, e) {
          return t.reduce((function(t, n) {
            var r, i = j(n, e),
              a = (r = []).concat.apply(r, i.map((function(t) {
                return function(t, e) {
                  var n;
                  return t instanceof HTMLIFrameElement && (null === (n = t.contentDocument) || void 0 === n ? void 0 : n.body) ? z([t.contentDocument.body], e) : [t]
                }(t, e)
              })));
            return t.concat(a, n.parentNode ? E(n.parentNode.querySelectorAll(B)).filter((function(t) {
              return t === n
            })) : [])
          }), [])
        },
        G = function(t, e) {
          return E(t).filter((function(t) {
            return T(e, t)
          })).filter((function(t) {
            return function(t) {
              return !((_(t) || function(t) {
                return "BUTTON" === t.tagName
              }(t)) && ("hidden" === t.type || t.disabled))
            }(t)
          }))
        },
        H = function(t, e) {
          return void 0 === e && (e = new Map), E(t).filter((function(t) {
            return A(e, t)
          }))
        },
        W = function(t, e, n) {
          return L(G(z(t, n), e), !0, n)
        },
        U = function(t, e) {
          return L(G(z(t), e), !1)
        },
        q = function(t, e) {
          return t.shadowRoot ? q(t.shadowRoot, e) : !(void 0 === Object.getPrototypeOf(t).contains || !Object.getPrototypeOf(t).contains.call(t, e)) || E(t.children).some((function(t) {
            var n;
            if (t instanceof HTMLIFrameElement) {
              var r = null === (n = t.contentDocument) || void 0 === n ? void 0 : n.body;
              return !!r && q(r, e)
            }
            return q(t, e)
          }))
        },
        Y = function(t) {
          if (void 0 === t && (t = document), t && t.activeElement) {
            var e = t.activeElement;
            return e.shadowRoot ? Y(e.shadowRoot) : e instanceof HTMLIFrameElement && function(t) {
              try {
                return e.contentWindow.document
              } catch (t) {
                return
              }
            }() ? Y(e.contentWindow.document) : e
          }
        },
        $ = function(t) {
          return t.parentNode ? $(t.parentNode) : t
        },
        K = function(t) {
          return P(t).filter(Boolean).reduce((function(t, e) {
            var n = e.getAttribute(o);
            return t.push.apply(t, n ? function(t) {
              for (var e = new Set, n = t.length, r = 0; r < n; r += 1)
                for (var i = r + 1; i < n; i += 1) {
                  var a = t[r].compareDocumentPosition(t[i]);
                  (a & Node.DOCUMENT_POSITION_CONTAINED_BY) > 0 && e.add(i), (a & Node.DOCUMENT_POSITION_CONTAINS) > 0 && e.add(r)
                }
              return t.filter((function(t, n) {
                return !e.has(n)
              }))
            }(E($(e).querySelectorAll("[".concat(o, '="').concat(n, '"]:not([').concat(l, '="disabled"])')))) : [e]), t
          }), [])
        },
        X = function(t, e) {
          return void 0 === e && (e = Y(C(t).ownerDocument)), !(!e || e.dataset && e.dataset.focusGuard) && K(t).some((function(t) {
            return q(t, e) || function(t, e) {
              return Boolean(E(t.querySelectorAll("iframe")).some((function(t) {
                return function(t, e) {
                  return t === e
                }(t, e)
              })))
            }(t, e)
          }))
        },
        Z = function(t, e) {
          return D(t) && t.name ? function(t, e) {
            return e.filter(D).filter((function(e) {
              return e.name === t.name
            })).filter((function(t) {
              return t.checked
            }))[0] || t
          }(t, e) : t
        },
        J = function(t) {
          return t[0] && t.length > 1 ? Z(t[0], t) : t[0]
        },
        Q = function(t, e) {
          return t.length > 1 ? t.indexOf(Z(t[e], t)) : e
        },
        tt = "NEW_FOCUS",
        et = function(t, e) {
          return void 0 === e && (e = []), e.push(t), t.parentNode && et(t.parentNode.host || t.parentNode, e), e
        },
        nt = function(t, e) {
          for (var n = et(t), r = et(e), i = 0; i < n.length; i += 1) {
            var a = n[i];
            if (r.indexOf(a) >= 0) return a
          }
          return !1
        },
        rt = function(t, e, n) {
          var r = P(t),
            i = P(e),
            a = r[0],
            s = !1;
          return i.filter(Boolean).forEach((function(t) {
            s = nt(s || t, t) || s, n.filter(Boolean).forEach((function(t) {
              var e = nt(a, t);
              e && (s = !s || q(e, s) ? e : nt(e, s))
            }))
          })), s
        },
        it = function(t, e) {
          var n, r, i, a, s, o, l = Y(P(t).length > 0 ? document : C(t).ownerDocument),
            u = K(t).filter(O),
            h = rt(l || t, t, u),
            c = new Map,
            p = U(u, c),
            f = W(u, c).filter((function(t) {
              var e = t.node;
              return O(e)
            }));
          if (f[0] || (f = p)[0]) {
            var d, m, v, g = U([h], c).map((function(t) {
                return t.node
              })),
              y = (d = g, m = f, v = new Map, m.forEach((function(t) {
                return v.set(t.node, t)
              })), d.map((function(t) {
                return v.get(t)
              })).filter(V)),
              b = y.map((function(t) {
                return t.node
              })),
              x = function(t, e, n, r) {
                var i = t.length,
                  a = t[0],
                  s = t[i - 1],
                  o = F(n);
                if (!(n && t.indexOf(n) >= 0)) {
                  var l, u, h = void 0 !== n ? e.indexOf(n) : -1,
                    c = r ? e.indexOf(r) : h,
                    p = r ? t.indexOf(r) : -1,
                    f = h - c,
                    d = e.indexOf(a),
                    m = e.indexOf(s),
                    v = (l = e, u = new Set, l.forEach((function(t) {
                      return u.add(Z(t, l))
                    })), l.filter((function(t) {
                      return u.has(t)
                    }))),
                    g = (void 0 !== n ? v.indexOf(n) : -1) - (r ? v.indexOf(r) : h),
                    y = Q(t, 0),
                    b = Q(t, i - 1);
                  return -1 === h || -1 === p ? tt : !f && p >= 0 ? p : h <= d && o && Math.abs(f) > 1 ? b : h >= m && o && Math.abs(f) > 1 ? y : f && Math.abs(g) > 1 ? p : h <= d ? b : h > m ? y : f ? Math.abs(f) > 1 ? p : (i + p + f) % i : void 0
                }
              }(b, g, l, e);
            if (x === tt) {
              var S = (n = p, r = b, i = function(t, e) {
                return t.reduce((function(t, n) {
                  return t.concat(function(t, e) {
                    return G((n = t.querySelectorAll("[".concat("data-autofocus-inside", "]")), E(n).map((function(t) {
                      return z([t])
                    })).reduce((function(t, e) {
                      return t.concat(e)
                    }), [])), e);
                    var n
                  }(n, e))
                }), [])
              }(u, c), s = n.map((function(t) {
                return t.node
              })), (o = H(s.filter((a = i, function(t) {
                var e, n = null === (e = k(t)) || void 0 === e ? void 0 : e.autofocus;
                return t.autofocus || void 0 !== n && "false" !== n || a.indexOf(t) >= 0
              })))) && o.length ? J(o) : J(H(r)));
              return S ? {
                node: S
              } : void console.warn("focus-lock: cannot find any node to move focus into")
            }
            return void 0 === x ? x : y[x]
          }
        },
        at = 0,
        st = !1,
        ot = function(t, e, n) {
          void 0 === n && (n = {});
          var r, i, a = it(t, e);
          if (!st && a) {
            if (at > 2) return console.error("FocusLock: focus-fighting detected. Only one focus management system could be active. See https://github.com/theKashey/focus-lock/#focus-fighting"), st = !0, void setTimeout((function() {
              st = !1
            }), 1);
            at++, r = a.node, i = n.focusOptions, "focus" in r && r.focus(i), "contentWindow" in r && r.contentWindow && r.contentWindow.focus(), at--
          }
        };

      function lt(t) {
        setTimeout(t, 1)
      }
      var ut = null,
        ht = null,
        ct = null,
        pt = !1,
        ft = function() {
          return !0
        };

      function dt(t, e, n, r) {
        var i = null,
          a = t;
        do {
          var s = r[a];
          if (s.guard) s.node.dataset.focusAutoGuard && (i = s);
          else {
            if (!s.lockItem) break;
            if (a !== t) return;
            i = null
          }
        } while ((a += n) !== e);
        i && (i.node.tabIndex = 0)
      }
      var mt = function(t) {
          return t && "current" in t ? t.current : t
        },
        vt = function t(e, n, r) {
          return n && (n.host === e && (!n.activeElement || r.contains(n.activeElement)) || n.parentNode && t(e, n.parentNode, r))
        },
        gt = function() {
          var t, e, n, r, i, a, s, o = !1;
          if (ut) {
            var l = ut,
              u = l.observed,
              h = l.persistentFocus,
              c = l.autoFocus,
              p = l.shards,
              f = l.crossFrame,
              d = l.focusOptions,
              m = u || ct && ct.portaledElement,
              v = document && document.activeElement;
            if (m) {
              var g = [m].concat(p.map(mt).filter(Boolean));
              if (v && ! function(t) {
                  return (ut.whiteList || ft)(t)
                }(v) || (h || (f ? Boolean(pt) : "meanwhile" === pt) || !(document && document.activeElement === document.body || function(t) {
                  void 0 === t && (t = document);
                  var e = Y(t);
                  return !!e && E(t.querySelectorAll("[".concat("data-no-focus-lock", "]"))).some((function(t) {
                    return q(t, e)
                  }))
                }()) || !ht && c) && (m && !(X(g) || v && function(t, e) {
                  return e.some((function(e) {
                    return vt(t, e, e)
                  }))
                }(v, g) || (s = v, ct && ct.portaledElement === s)) && (document && !ht && v && !c ? (v.blur && v.blur(), document.body.focus()) : (o = ot(g, ht, {
                  focusOptions: d
                }), ct = {})), pt = !1, ht = document && document.activeElement), document) {
                var y = document && document.activeElement,
                  b = (e = K(t = g).filter(O), n = rt(t, t, e), r = new Map, i = W([n], r, !0), a = W(e, r).filter((function(t) {
                    var e = t.node;
                    return O(e)
                  })).map((function(t) {
                    return t.node
                  })), i.map((function(t) {
                    var e = t.node;
                    return {
                      node: e,
                      index: t.index,
                      lockItem: a.indexOf(e) >= 0,
                      guard: F(e)
                    }
                  }))),
                  x = b.map((function(t) {
                    return t.node
                  })).indexOf(y);
                x > -1 && (b.filter((function(t) {
                  var e = t.guard,
                    n = t.node;
                  return e && n.dataset.focusAutoGuard
                })).forEach((function(t) {
                  return t.node.removeAttribute("tabIndex")
                })), dt(x, b.length, 1, b), dt(x, -1, -1, b))
              }
            }
          }
          return o
        },
        yt = function(t) {
          gt() && t && (t.stopPropagation(), t.preventDefault())
        },
        bt = function() {
          return lt(gt)
        },
        xt = function() {
          pt = "just", lt((function() {
            pt = "meanwhile"
          }))
        };
      f.assignSyncMedium((function(t) {
        var e = t.target,
          n = t.currentTarget;
        n.contains(e) || (ct = {
          observerNode: n,
          portaledElement: e
        })
      })), d.assignMedium(bt), m.assignMedium((function(t) {
        return t({
          moveFocusInside: ot,
          focusInside: X
        })
      }));
      const St = (Et = function(t) {
        return t.filter((function(t) {
          return !t.disabled
        }))
      }, Pt = function(t) {
        var e = t.slice(-1)[0];
        e && !ut && (document.addEventListener("focusin", yt), document.addEventListener("focusout", bt), window.addEventListener("blur", xt));
        var n = ut,
          r = n && e && e.id === n.id;
        ut = e, n && !r && (n.onDeactivation(), t.filter((function(t) {
          return t.id === n.id
        })).length || n.returnFocus(!e)), e ? (ht = null, r && n.observed === e.observed || e.onActivation(), gt(), lt(gt)) : (document.removeEventListener("focusin", yt), document.removeEventListener("focusout", bt), window.removeEventListener("blur", xt), ht = null)
      }, function(t) {
        var e, n = [];

        function r() {
          e = Et(n.map((function(t) {
            return t.props
          }))), Pt(e)
        }
        var i = function(i) {
          var a, o;

          function l() {
            return i.apply(this, arguments) || this
          }
          o = i, (a = l).prototype = Object.create(o.prototype), a.prototype.constructor = a, (0, x.c)(a, o), l.peek = function() {
            return e
          };
          var u = l.prototype;
          return u.componentDidMount = function() {
            n.push(this), r()
          }, u.componentDidUpdate = function() {
            r()
          }, u.componentWillUnmount = function() {
            var t = n.indexOf(this);
            n.splice(t, 1), r()
          }, u.render = function() {
            return s().createElement(t, this.props)
          }, l
        }(a.PureComponent);
        return (0, S.c)(i, "displayName", "SideEffect(" + function(t) {
          return t.displayName || t.name || "Component"
        }(t) + ")"), i
      })((function() {
        return null
      }));
      var Et, Pt, Ct = a.forwardRef((function(t, e) {
          return a.createElement(b, (0, i.c)({
            sideCar: St,
            ref: e
          }, t))
        })),
        wt = b.propTypes || {};
      wt.sideCar, (0, r.c)(wt, ["sideCar"]), Ct.propTypes = {};
      const Mt = Ct
    },
    45164: (t, e, n) => {
      "use strict";
      var r = p(n(67032)),
        i = p(n(4616)),
        a = p(n(65908)),
        s = p(n(272)),
        o = p(n(44136)),
        l = p(n(92392)),
        u = p(n(51664)),
        h = p(n(71424)),
        c = p(n(86352));

      function p(t) {
        return t && t.__esModule ? t : {
          default: t
        }
      }
      var f = function(t) {
        function e() {
          var t, n, r, s;
          (0, a.default)(this, e);
          for (var l = arguments.length, u = Array(l), h = 0; h < l; h++) u[h] = arguments[h];
          return n = r = (0, o.default)(this, (t = e.__proto__ || (0, i.default)(e)).call.apply(t, [this].concat(u))), r.handleClickToPause = function() {
            r.anim.isPaused ? r.anim.play() : r.anim.pause()
          }, s = n, (0, o.default)(r, s)
        }
        return (0, l.default)(e, t), (0, s.default)(e, [{
          key: "componentDidMount",
          value: function() {
            var t = this.props,
              e = t.options,
              n = t.eventListeners,
              i = e.loop,
              a = e.autoplay,
              s = e.animationData,
              o = e.rendererSettings,
              l = e.segments;
            this.options = {
              container: this.el,
              renderer: "svg",
              loop: !1 !== i,
              autoplay: !1 !== a,
              segments: !1 !== l,
              animationData: s,
              rendererSettings: o
            }, this.options = (0, r.default)({}, this.options, e), this.anim = c.default.loadAnimation(this.options), this.registerEvents(n)
          }
        }, {
          key: "componentWillUpdate",
          value: function(t) {
            this.options.animationData !== t.options.animationData && (this.deRegisterEvents(this.props.eventListeners), this.destroy(), this.options = (0, r.default)({}, this.options, t.options), this.anim = c.default.loadAnimation(this.options), this.registerEvents(t.eventListeners))
          }
        }, {
          key: "componentDidUpdate",
          value: function() {
            this.props.isStopped ? this.stop() : this.props.segments ? this.playSegments() : this.play(), this.pause(), this.setSpeed(), this.setDirection()
          }
        }, {
          key: "componentWillUnmount",
          value: function() {
            this.deRegisterEvents(this.props.eventListeners), this.destroy(), this.options.animationData = null, this.anim = null
          }
        }, {
          key: "setSpeed",
          value: function() {
            this.anim.setSpeed(this.props.speed)
          }
        }, {
          key: "setDirection",
          value: function() {
            this.anim.setDirection(this.props.direction)
          }
        }, {
          key: "play",
          value: function() {
            this.anim.play()
          }
        }, {
          key: "playSegments",
          value: function() {
            this.anim.playSegments(this.props.segments)
          }
        }, {
          key: "stop",
          value: function() {
            this.anim.stop()
          }
        }, {
          key: "pause",
          value: function() {
            (this.props.isPaused && !this.anim.isPaused || !this.props.isPaused && this.anim.isPaused) && this.anim.pause()
          }
        }, {
          key: "destroy",
          value: function() {
            this.anim.destroy()
          }
        }, {
          key: "registerEvents",
          value: function(t) {
            var e = this;
            t.forEach((function(t) {
              e.anim.addEventListener(t.eventName, t.callback)
            }))
          }
        }, {
          key: "deRegisterEvents",
          value: function(t) {
            var e = this;
            t.forEach((function(t) {
              e.anim.removeEventListener(t.eventName, t.callback)
            }))
          }
        }, {
          key: "render",
          value: function() {
            var t = this,
              e = this.props,
              n = e.width,
              i = e.height,
              a = e.ariaRole,
              s = e.ariaLabel,
              o = e.isClickToPauseDisabled,
              l = e.title,
              h = function(t) {
                return "number" == typeof t ? t + "px" : t || "100%"
              },
              c = (0, r.default)({
                width: h(n),
                height: h(i),
                overflow: "hidden",
                margin: "0 auto",
                outline: "none"
              }, this.props.style),
              p = o ? function() {
                return null
              } : this.handleClickToPause;
            return u.default.createElement("div", {
              ref: function(e) {
                t.el = e
              },
              style: c,
              onClick: p,
              title: l,
              role: a,
              "aria-label": s,
              tabIndex: "0"
            })
          }
        }]), e
      }(u.default.Component);
      e.c = f, f.propTypes = {
        eventListeners: h.default.arrayOf(h.default.object),
        options: h.default.object.isRequired,
        height: h.default.oneOfType([h.default.string, h.default.number]),
        width: h.default.oneOfType([h.default.string, h.default.number]),
        isStopped: h.default.bool,
        isPaused: h.default.bool,
        speed: h.default.number,
        segments: h.default.arrayOf(h.default.number),
        direction: h.default.number,
        ariaRole: h.default.string,
        ariaLabel: h.default.string,
        isClickToPauseDisabled: h.default.bool,
        title: h.default.string,
        style: h.default.string
      }, f.defaultProps = {
        eventListeners: [],
        isStopped: !1,
        isPaused: !1,
        speed: 1,
        ariaRole: "button",
        ariaLabel: "animation",
        isClickToPauseDisabled: !1,
        title: ""
      }
    },
    92104: (t, e, n) => {
      "use strict";
      n.d(e, {
        c: () => V
      });
      var r = n(87672),
        i = n(51664),
        a = "right-scroll-bar-position",
        s = "width-before-scroll-bar",
        o = n(92634),
        l = (0, n(35045).Y)(),
        u = function() {},
        h = i.forwardRef((function(t, e) {
          var n = i.useRef(null),
            a = i.useState({
              onScrollCapture: u,
              onWheelCapture: u,
              onTouchMoveCapture: u
            }),
            s = a[0],
            h = a[1],
            c = t.forwardProps,
            p = t.children,
            f = t.className,
            d = t.removeScrollBar,
            m = t.enabled,
            v = t.shards,
            g = t.sideCar,
            y = t.noIsolation,
            b = t.inert,
            x = t.allowPinchZoom,
            S = t.as,
            E = void 0 === S ? "div" : S,
            P = t.gapMode,
            C = (0, r.sX)(t, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]),
            w = g,
            M = (0, o.m)([n, e]),
            T = (0, r.C3)((0, r.C3)({}, C), s);
          return i.createElement(i.Fragment, null, m && i.createElement(w, {
            sideCar: l,
            removeScrollBar: d,
            shards: v,
            noIsolation: y,
            inert: b,
            setCallbacks: h,
            allowPinchZoom: !!x,
            lockRef: n,
            gapMode: P
          }), c ? i.cloneElement(i.Children.only(p), (0, r.C3)((0, r.C3)({}, T), {
            ref: M
          })) : i.createElement(E, (0, r.C3)({}, T, {
            className: f,
            ref: M
          }), p))
        }));
      h.defaultProps = {
        enabled: !0,
        removeScrollBar: !0,
        inert: !1
      }, h.classNames = {
        fullWidth: s,
        zeroRight: a
      };
      var c = function(t) {
        var e = t.sideCar,
          n = (0, r.sX)(t, ["sideCar"]);
        if (!e) throw new Error("Sidecar: please provide `sideCar` property to import the right car");
        var a = e.read();
        if (!a) throw new Error("Sidecar medium not found");
        return i.createElement(a, (0, r.C3)({}, n))
      };
      c.isSideCarExport = !0;
      var p = function() {
          var t = 0,
            e = null;
          return {
            add: function(r) {
              var i, a;
              0 == t && (e = function() {
                if (!document) return null;
                var t = document.createElement("style");
                t.type = "text/css";
                var e = n.nc;
                return e && t.setAttribute("nonce", e), t
              }()) && (a = r, (i = e).styleSheet ? i.styleSheet.cssText = a : i.appendChild(document.createTextNode(a)), function(t) {
                (document.head || document.getElementsByTagName("head")[0]).appendChild(t)
              }(e)), t++
            },
            remove: function() {
              !--t && e && (e.parentNode && e.parentNode.removeChild(e), e = null)
            }
          }
        },
        f = function() {
          var t, e = (t = p(), function(e, n) {
            i.useEffect((function() {
              return t.add(e),
                function() {
                  t.remove()
                }
            }), [e && n])
          });
          return function(t) {
            var n = t.styles,
              r = t.dynamic;
            return e(n, r), null
          }
        },
        d = {
          left: 0,
          top: 0,
          right: 0,
          gap: 0
        },
        m = function(t) {
          return parseInt(t || "", 10) || 0
        },
        v = f(),
        g = function(t, e, n, r) {
          var i = t.left,
            o = t.top,
            l = t.right,
            u = t.gap;
          return void 0 === n && (n = "margin"), "\n  .".concat("with-scroll-bars-hidden", " {\n   overflow: hidden ").concat(r, ";\n   padding-right: ").concat(u, "px ").concat(r, ";\n  }\n  body {\n    overflow: hidden ").concat(r, ";\n    overscroll-behavior: contain;\n    ").concat([e && "position: relative ".concat(r, ";"), "margin" === n && "\n    padding-left: ".concat(i, "px;\n    padding-top: ").concat(o, "px;\n    padding-right: ").concat(l, "px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ").concat(u, "px ").concat(r, ";\n    "), "padding" === n && "padding-right: ".concat(u, "px ").concat(r, ";")].filter(Boolean).join(""), "\n  }\n  \n  .").concat(a, " {\n    right: ").concat(u, "px ").concat(r, ";\n  }\n  \n  .").concat(s, " {\n    margin-right: ").concat(u, "px ").concat(r, ";\n  }\n  \n  .").concat(a, " .").concat(a, " {\n    right: 0 ").concat(r, ";\n  }\n  \n  .").concat(s, " .").concat(s, " {\n    margin-right: 0 ").concat(r, ";\n  }\n  \n  body {\n    ").concat("--removed-body-scroll-bar-size", ": ").concat(u, "px;\n  }\n")
        },
        y = function(t) {
          var e = t.noRelative,
            n = t.noImportant,
            r = t.gapMode,
            a = void 0 === r ? "margin" : r,
            s = i.useMemo((function() {
              return function(t) {
                if (void 0 === t && (t = "margin"), "undefined" == typeof window) return d;
                var e = function(t) {
                    var e = window.getComputedStyle(document.body),
                      n = e["padding" === t ? "paddingLeft" : "marginLeft"],
                      r = e["padding" === t ? "paddingTop" : "marginTop"],
                      i = e["padding" === t ? "paddingRight" : "marginRight"];
                    return [m(n), m(r), m(i)]
                  }(t),
                  n = document.documentElement.clientWidth,
                  r = window.innerWidth;
                return {
                  left: e[0],
                  top: e[1],
                  right: e[2],
                  gap: Math.max(0, r - n + e[2] - e[0])
                }
              }(a)
            }), [a]);
          return i.createElement(v, {
            styles: g(s, !e, a, n ? "" : "!important")
          })
        },
        b = !1;
      if ("undefined" != typeof window) try {
        var x = Object.defineProperty({}, "passive", {
          get: function() {
            return b = !0, !0
          }
        });
        window.addEventListener("test", x, x), window.removeEventListener("test", x, x)
      } catch (t) {
        b = !1
      }
      var S = !!b && {
          passive: !1
        },
        E = function(t, e) {
          var n = window.getComputedStyle(t);
          return "hidden" !== n[e] && !(n.overflowY === n.overflowX && ! function(t) {
            return "TEXTAREA" === t.tagName
          }(t) && "visible" === n[e])
        },
        P = function(t, e) {
          var n = e.ownerDocument,
            r = e;
          do {
            if ("undefined" != typeof ShadowRoot && r instanceof ShadowRoot && (r = r.host), C(t, r)) {
              var i = w(t, r);
              if (i[1] > i[2]) return !0
            }
            r = r.parentNode
          } while (r && r !== n.body);
          return !1
        },
        C = function(t, e) {
          return "v" === t ? function(t) {
            return E(t, "overflowY")
          }(e) : function(t) {
            return E(t, "overflowX")
          }(e)
        },
        w = function(t, e) {
          return "v" === t ? [(n = e).scrollTop, n.scrollHeight, n.clientHeight] : function(t) {
            return [t.scrollLeft, t.scrollWidth, t.clientWidth]
          }(e);
          var n
        },
        M = function(t) {
          return "changedTouches" in t ? [t.changedTouches[0].clientX, t.changedTouches[0].clientY] : [0, 0]
        },
        T = function(t) {
          return [t.deltaX, t.deltaY]
        },
        A = function(t) {
          return t && "current" in t ? t.current : t
        },
        k = function(t) {
          return "\n  .block-interactivity-".concat(t, " {pointer-events: none;}\n  .allow-interactivity-").concat(t, " {pointer-events: all;}\n")
        },
        _ = 0,
        D = [];

      function I(t) {
        for (var e = null; null !== t;) t instanceof ShadowRoot && (e = t.host, t = t.host), t = t.parentNode;
        return e
      }
      const F = (l.useMedium((function(t) {
        var e = i.useRef([]),
          n = i.useRef([0, 0]),
          a = i.useRef(),
          s = i.useState(_++)[0],
          o = i.useState(f)[0],
          l = i.useRef(t);
        i.useEffect((function() {
          l.current = t
        }), [t]), i.useEffect((function() {
          if (t.inert) {
            document.body.classList.add("block-interactivity-".concat(s));
            var e = (0, r.Mt)([t.lockRef.current], (t.shards || []).map(A), !0).filter(Boolean);
            return e.forEach((function(t) {
                return t.classList.add("allow-interactivity-".concat(s))
              })),
              function() {
                document.body.classList.remove("block-interactivity-".concat(s)), e.forEach((function(t) {
                  return t.classList.remove("allow-interactivity-".concat(s))
                }))
              }
          }
        }), [t.inert, t.lockRef.current, t.shards]);
        var u = i.useCallback((function(t, e) {
            if ("touches" in t && 2 === t.touches.length) return !l.current.allowPinchZoom;
            var r, i = M(t),
              s = n.current,
              o = "deltaX" in t ? t.deltaX : s[0] - i[0],
              u = "deltaY" in t ? t.deltaY : s[1] - i[1],
              h = t.target,
              c = Math.abs(o) > Math.abs(u) ? "h" : "v";
            if ("touches" in t && "h" === c && "range" === h.type) return !1;
            var p = P(c, h);
            if (!p) return !0;
            if (p ? r = c : (r = "v" === c ? "h" : "v", p = P(c, h)), !p) return !1;
            if (!a.current && "changedTouches" in t && (o || u) && (a.current = r), !r) return !0;
            var f = a.current || r;
            return function(t, e, n, r, i) {
              var a = function(t, e) {
                  return "h" === t && "rtl" === e ? -1 : 1
                }(t, window.getComputedStyle(e).direction),
                s = a * r,
                o = n.target,
                l = e.contains(o),
                u = !1,
                h = s > 0,
                c = 0,
                p = 0;
              do {
                var f = w(t, o),
                  d = f[0],
                  m = f[1] - f[2] - a * d;
                (d || m) && C(t, o) && (c += m, p += d), o = o instanceof ShadowRoot ? o.host : o.parentNode
              } while (!l && o !== document.body || l && (e.contains(o) || e === o));
              return (h && (i && Math.abs(c) < 1 || !i && s > c) || !h && (i && Math.abs(p) < 1 || !i && -s > p)) && (u = !0), u
            }(f, e, t, "h" === f ? o : u, !0)
          }), []),
          h = i.useCallback((function(t) {
            var n = t;
            if (D.length && D[D.length - 1] === o) {
              var r = "deltaY" in n ? T(n) : M(n),
                i = e.current.filter((function(t) {
                  return t.name === n.type && (t.target === n.target || n.target === t.shadowParent) && (e = t.delta, i = r, e[0] === i[0] && e[1] === i[1]);
                  var e, i
                }))[0];
              if (i && i.should) n.cancelable && n.preventDefault();
              else if (!i) {
                var a = (l.current.shards || []).map(A).filter(Boolean).filter((function(t) {
                  return t.contains(n.target)
                }));
                (a.length > 0 ? u(n, a[0]) : !l.current.noIsolation) && n.cancelable && n.preventDefault()
              }
            }
          }), []),
          c = i.useCallback((function(t, n, r, i) {
            var a = {
              name: t,
              delta: n,
              target: r,
              should: i,
              shadowParent: I(r)
            };
            e.current.push(a), setTimeout((function() {
              e.current = e.current.filter((function(t) {
                return t !== a
              }))
            }), 1)
          }), []),
          p = i.useCallback((function(t) {
            n.current = M(t), a.current = void 0
          }), []),
          d = i.useCallback((function(e) {
            c(e.type, T(e), e.target, u(e, t.lockRef.current))
          }), []),
          m = i.useCallback((function(e) {
            c(e.type, M(e), e.target, u(e, t.lockRef.current))
          }), []);
        i.useEffect((function() {
          return D.push(o), t.setCallbacks({
              onScrollCapture: d,
              onWheelCapture: d,
              onTouchMoveCapture: m
            }), document.addEventListener("wheel", h, S), document.addEventListener("touchmove", h, S), document.addEventListener("touchstart", p, S),
            function() {
              D = D.filter((function(t) {
                return t !== o
              })), document.removeEventListener("wheel", h, S), document.removeEventListener("touchmove", h, S), document.removeEventListener("touchstart", p, S)
            }
        }), []);
        var v = t.removeScrollBar,
          g = t.inert;
        return i.createElement(i.Fragment, null, g ? i.createElement(o, {
          styles: k(s)
        }) : null, v ? i.createElement(y, {
          gapMode: t.gapMode
        }) : null)
      })), c);
      var O = i.forwardRef((function(t, e) {
        return i.createElement(h, (0, r.C3)({}, t, {
          ref: e,
          sideCar: F
        }))
      }));
      O.classNames = h.classNames;
      const V = O
    },
    95364: (t, e) => {
      "use strict";
      Object.defineProperty(e, "__esModule", {
        value: !0
      }), e.default = void 0;
      e.default = function t(e, n, r) {
        ! function(t, e) {
          if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }(this, t);
        var i = n.y0,
          a = n.y1,
          s = n.x1,
          o = n.x0,
          l = "%" === a.unit && "%" === i.unit,
          u = i.value,
          h = a.value;
        if (l) {
          var c = e.height / 100;
          u = i.value * c, h = a.value * c
        }
        var p = "%" === s.unit && "%" === o.unit,
          f = o.value,
          d = s.value;
        if (p) {
          var m = e.width / 100;
          f = o.value * m, d = s.value * m
        }
        var v = Math.abs(u) + Math.abs(h);
        this.totalDistY = r.height + e.height + v;
        var g = r.height + e.height + (h > u ? -1 * v : v),
          y = Math.abs(f) + Math.abs(d);
        this.totalDistX = r.width + e.width + y;
        var b = r.width + e.width + (d > f ? -1 * y : y),
          x = e.originTotalDistY / g,
          S = e.originTotalDistX / b;
        this.top = e.top, this.bottom = e.bottom, u < 0 && (this.top = this.top + u * x), h > 0 && (this.bottom = this.bottom + h * x), this.left = e.left, this.right = e.right, f < 0 && (this.left = this.left + f * S), d > 0 && (this.right = this.right + d * S)
      }
    },
    9560: (t, e, n) => {
      "use strict";
      Object.defineProperty(e, "__esModule", {
        value: !0
      }), e.Element = void 0;
      var r = n(89932),
        i = n(44964),
        a = n(57892),
        s = l(n(95364)),
        o = l(n(73100));

      function l(t) {
        return t && t.__esModule ? t : {
          default: t
        }
      }

      function u(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e && (r = r.filter((function(e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable
          }))), n.push.apply(n, r)
        }
        return n
      }

      function h(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2 ? u(Object(n), !0).forEach((function(e) {
            c(t, e, n[e])
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : u(Object(n)).forEach((function(e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
          }))
        }
        return t
      }

      function c(t, e, n) {
        return e in t ? Object.defineProperty(t, e, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : t[e] = n, t
      }

      function p(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
        }
      }
      var f = function() {
        function t(e) {
          ! function(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
          }(this, t), this.elInner = e.elInner, this.elOuter = e.elOuter, this.props = e.props, this.scrollAxis = e.scrollAxis, this.id = (0, r.createId)(), this.offsets = (0, i.getOffsets)(this.props), this.isInView = null, this.percent = 0, this.updatePosition = e.scrollAxis === a.VERTICAL ? this._updatePositionVertical : this._updatePositionHorizontal
        }
        var e, n;
        return e = t, (n = [{
          key: "updateProps",
          value: function(t) {
            return this.props = h(h({}, this.props), t), this.offsets = (0, i.getOffsets)(t), this
          }
        }, {
          key: "setCachedAttributes",
          value: function(t, e) {
            return this.rect = new o.default(this.elOuter, t, e), this.bounds = new s.default(this.rect, this.offsets, t), this
          }
        }, {
          key: "_updatePositionHorizontal",
          value: function(t, e) {
            return this.isInView = (0, i.isElementInView)(this.bounds.left, this.bounds.right, t.width, e.x), this.isInView ? (this.percent = (0, i.percentMoved)(this.rect.left, this.rect.originTotalDistX, t.width, e.x), (0, i.setParallaxStyles)(this.elInner, this.offsets, this.percent), this) : this
          }
        }, {
          key: "_updatePositionVertical",
          value: function(t, e) {
            return this.isInView = (0, i.isElementInView)(this.bounds.top, this.bounds.bottom, t.height, e.y), this.isInView ? (this.percent = (0, i.percentMoved)(this.rect.top, this.rect.originTotalDistY, t.height, e.y), (0, i.setParallaxStyles)(this.elInner, this.offsets, this.percent), this) : this
          }
        }]) && p(e.prototype, n), t
      }();
      e.Element = f
    },
    48708: (t, e, n) => {
      "use strict";
      Object.defineProperty(e, "__esModule", {
        value: !0
      }), e.default = void 0;
      var r = n(89932),
        i = n(44964),
        a = n(39820),
        s = n(34779),
        o = n(9560),
        l = n(57892);

      function u(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
        return r
      }

      function h(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e && (r = r.filter((function(e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable
          }))), n.push.apply(n, r)
        }
        return n
      }

      function c(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2 ? h(Object(n), !0).forEach((function(e) {
            p(t, e, n[e])
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : h(Object(n)).forEach((function(e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
          }))
        }
        return t
      }

      function p(t, e, n) {
        return e in t ? Object.defineProperty(t, e, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : t[e] = n, t
      }

      function f(t) {
        var e = t.scrollAxis,
          n = void 0 === e ? l.VERTICAL : e,
          h = t.scrollContainer,
          p = [],
          f = !!h,
          d = h || window,
          m = f ? d.scrollLeft : window.pageXOffset,
          v = f ? d.scrollTop : window.pageYOffset,
          g = new s.Scroll(m, v),
          y = new a.View({
            width: 0,
            height: 0,
            scrollContainer: h
          }),
          b = !1,
          x = (0, r.testForPassiveScroll)();

        function S(t) {
          t.addEventListener("scroll", P, !!x && {
            passive: !0
          }), window.addEventListener("resize", C, !1)
        }

        function E(t) {
          t.removeEventListener("scroll", P, !!x && {
            passive: !0
          }), window.removeEventListener("resize", C, !1)
        }

        function P() {
          var t = f ? d.scrollLeft : window.pageXOffset,
            e = f ? d.scrollTop : window.pageYOffset;
          g.setScroll(t, e), !b && p.length > 0 && (b = !0, window.requestAnimationFrame(w))
        }

        function C() {
          T(), w({
            updateCache: !0
          })
        }

        function w() {
          var t = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).updateCache;
          p && p.forEach((function(e) {
            M(e), t && e.setCachedAttributes(y, g)
          })), b = !1
        }

        function M(t) {
          t.props.disabled || t.updatePosition(y, g)
        }

        function T() {
          if (f) {
            var t = d.offsetWidth,
              e = d.offsetHeight;
            return y.setSize(t, e)
          }
          var n = document.documentElement,
            r = window.innerWidth || n.clientWidth,
            i = window.innerHeight || n.clientHeight;
          return y.setSize(r, i)
        }
        S(d), T(), this.getElements = function() {
          return p
        }, this.createElement = function(t) {
          var e, r = new o.Element(c(c({}, t), {}, {
            scrollAxis: n
          }));
          return r.setCachedAttributes(y, g), p = p ? [].concat(function(t) {
            if (Array.isArray(t)) return u(t)
          }(e = p) || function(t) {
            if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t)
          }(e) || function(t, e) {
            if (t) {
              if ("string" == typeof t) return u(t, e);
              var n = Object.prototype.toString.call(t).slice(8, -1);
              return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? u(t, e) : void 0
            }
          }(e) || function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
          }(), [r]) : [r], M(r), r
        }, this.removeElementById = function(t) {
          p && (p = p.filter((function(e) {
            return e.id !== t
          })))
        }, this.updateElementPropsById = function(t, e) {
          p && (p = p.map((function(n) {
            return n.id === t ? n.updateProps(e) : n
          }))), this.update()
        }, this.resetElementStyles = function(t) {
          (0, i.resetStyles)(t)
        }, this.update = function() {
          var t = f ? d.scrollLeft : window.pageXOffset,
            e = f ? d.scrollTop : window.pageYOffset;
          g.setScroll(t, e), T(), w({
            updateCache: !0
          })
        }, this.updateScrollContainer = function(t) {
          E(d), d = t, f = !!t, y = new a.View({
            width: 0,
            height: 0,
            scrollContainer: t
          }), T(), S(d), w({
            updateCache: !0
          })
        }, this.destroy = function() {
          E(d), p && p.forEach((function(t) {
            return (0, i.resetStyles)(t)
          })), p = void 0
        }
      }
      f.init = function(t) {
        if ("undefined" == typeof window) throw new Error("Looks like ParallaxController.init() was called on the server. This method must be called on the client.");
        return new f(t)
      };
      var d = f;
      e.default = d
    },
    73100: (t, e) => {
      "use strict";
      Object.defineProperty(e, "__esModule", {
        value: !0
      }), e.default = void 0;
      e.default = function t(e, n, r) {
        ! function(t, e) {
          if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }(this, t);
        var i = e.getBoundingClientRect();
        if (n.scrollContainer) {
          var a = n.scrollContainer.getBoundingClientRect();
          i = {
            top: i.top - a.top,
            right: i.right - a.left,
            bottom: i.bottom - a.top,
            left: i.left - a.left
          }
        }
        this.height = e.offsetHeight, this.width = e.offsetWidth, this.left = i.left + r.x, this.right = i.right + r.x, this.top = i.top + r.y, this.bottom = i.bottom + r.y, this.originTotalDistY = n.height + this.height, this.originTotalDistX = n.width + this.width
      }
    },
    34779: (t, e) => {
      "use strict";

      function n(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
        }
      }
      Object.defineProperty(e, "__esModule", {
        value: !0
      }), e.Scroll = void 0;
      var r = function() {
        function t() {
          ! function(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
          }(this, t), this.setScroll.apply(this, arguments)
        }
        var e, r;
        return e = t, (r = [{
          key: "setScroll",
          value: function(t, e) {
            return this.x = t, this.y = e, this
          }
        }]) && n(e.prototype, r), t
      }();
      e.Scroll = r
    },
    39820: (t, e) => {
      "use strict";

      function n(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
        }
      }
      Object.defineProperty(e, "__esModule", {
        value: !0
      }), e.View = void 0;
      var r = function() {
        function t(e) {
          var n = e.width,
            r = e.height,
            i = e.scrollContainer;
          ! function(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
          }(this, t), this.scrollContainer = i, this.setSize(n, r)
        }
        var e, r;
        return e = t, (r = [{
          key: "setSize",
          value: function(t, e) {
            return this.width = t, this.height = e, this
          }
        }]) && n(e.prototype, r), t
      }();
      e.View = r
    },
    91520: (t, e, n) => {
      "use strict";

      function r(t) {
        return r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
          return typeof t
        } : function(t) {
          return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }, r(t)
      }
      Object.defineProperty(e, "__esModule", {
        value: !0
      }), e.default = void 0;
      var i = function(t) {
          if (t && t.__esModule) return t;
          if (null === t || "object" !== r(t) && "function" != typeof t) return {
            default: t
          };
          var e = u();
          if (e && e.has(t)) return e.get(t);
          var n = {},
            i = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var a in t)
            if (Object.prototype.hasOwnProperty.call(t, a)) {
              var s = i ? Object.getOwnPropertyDescriptor(t, a) : null;
              s && (s.get || s.set) ? Object.defineProperty(n, a, s) : n[a] = t[a]
            } return n.default = t, e && e.set(t, n), n
        }(n(51664)),
        a = l(n(71424)),
        s = l(n(48708)),
        o = l(n(92320));

      function l(t) {
        return t && t.__esModule ? t : {
          default: t
        }
      }

      function u() {
        if ("function" != typeof WeakMap) return null;
        var t = new WeakMap;
        return u = function() {
          return t
        }, t
      }

      function h(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
        }
      }

      function c(t, e) {
        return c = Object.setPrototypeOf || function(t, e) {
          return t.__proto__ = e, t
        }, c(t, e)
      }

      function p(t) {
        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t
      }

      function f(t) {
        return f = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
          return t.__proto__ || Object.getPrototypeOf(t)
        }, f(t)
      }

      function d(t, e, n) {
        return e in t ? Object.defineProperty(t, e, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : t[e] = n, t
      }
      var m = function(t) {
        ! function(t, e) {
          if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
          t.prototype = Object.create(e && e.prototype, {
            constructor: {
              value: t,
              writable: !0,
              configurable: !0
            }
          }), e && c(t, e)
        }(u, t);
        var e, n, a, o, l = (a = u, o = function() {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
          } catch (t) {
            return !1
          }
        }(), function() {
          var t, e = f(a);
          if (o) {
            var n = f(this).constructor;
            t = Reflect.construct(e, arguments, n)
          } else t = e.apply(this, arguments);
          return function(t, e) {
            return !e || "object" !== r(e) && "function" != typeof e ? p(t) : e
          }(this, t)
        });

        function u() {
          var t;
          ! function(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
          }(this, u);
          for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++) n[r] = arguments[r];
          return d(p(t = l.call.apply(l, [this].concat(n))), "mapRefOuter", (function(e) {
            t._outer = e
          })), d(p(t), "mapRefInner", (function(e) {
            t._inner = e
          })), t
        }
        return e = u, (n = [{
          key: "componentDidMount",
          value: function() {
            var t = this.controller instanceof s.default;
            if (!this.controller && !t) throw new Error("Must wrap your application's <Parallax /> components in a <ParallaxProvider />.");
            this.element = this.controller.createElement(this._getElementOptions())
          }
        }, {
          key: "componentDidUpdate",
          value: function(t) {
            this.props.disabled === t.disabled && this.props.x[0] === t.x[0] && this.props.x[1] === t.x[1] && this.props.y[0] === t.y[0] && this.props.y[1] === t.y[1] || this.controller.updateElementPropsById(this.element.id, this._getElementOptions().props), this.props.disabled !== t.disabled && this.props.disabled && this.controller.resetElementStyles(this.element)
          }
        }, {
          key: "componentWillUnmount",
          value: function() {
            this.controller.removeElementById(this.element.id)
          }
        }, {
          key: "_getElementOptions",
          value: function() {
            return {
              elInner: this._inner,
              elOuter: this._outer,
              props: {
                disabled: this.props.disabled,
                x0: this.props.x[0],
                x1: this.props.x[1],
                y0: this.props.y[0],
                y1: this.props.y[1]
              }
            }
          }
        }, {
          key: "controller",
          get: function() {
            return this.props.parallaxController
          }
        }, {
          key: "render",
          value: function() {
            var t = this.props,
              e = t.children,
              n = t.className,
              r = t.tagOuter,
              a = t.tagInner,
              s = t.styleOuter,
              o = t.styleInner,
              l = "parallax-outer" + (n ? " ".concat(n) : "");
            return i.default.createElement(r, {
              className: l,
              ref: this.mapRefOuter,
              style: s
            }, i.default.createElement(a, {
              className: "parallax-inner",
              ref: this.mapRefInner,
              style: o
            }, e))
          }
        }]) && h(e.prototype, n), u
      }(i.Component);
      d(m, "defaultProps", {
        disabled: !1,
        tagInner: "div",
        tagOuter: "div",
        x: [0, 0],
        y: [0, 0]
      }), d(m, "propTypes", {
        children: a.default.node,
        className: a.default.string,
        disabled: a.default.bool.isRequired,
        parallaxController: a.default.object,
        styleInner: a.default.object,
        styleOuter: a.default.object,
        tagInner: a.default.string.isRequired,
        tagOuter: a.default.string.isRequired,
        x: a.default.arrayOf(a.default.oneOfType([a.default.string, a.default.number])),
        y: a.default.arrayOf(a.default.oneOfType([a.default.string, a.default.number]))
      });
      var v = (0, o.default)(m);
      e.default = v
    },
    13708: (t, e, n) => {
      "use strict";
      Object.defineProperty(e, "__esModule", {
        value: !0
      }), e.default = void 0;
      var r = s(n(51664)),
        i = s(n(71424)),
        a = s(n(91520));

      function s(t) {
        return t && t.__esModule ? t : {
          default: t
        }
      }

      function o() {
        return o = Object.assign || function(t) {
          for (var e = 1; e < arguments.length; e++) {
            var n = arguments[e];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
          }
          return t
        }, o.apply(this, arguments)
      }

      function l(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e && (r = r.filter((function(e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable
          }))), n.push.apply(n, r)
        }
        return n
      }

      function u(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2 ? l(Object(n), !0).forEach((function(e) {
            h(t, e, n[e])
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : l(Object(n)).forEach((function(e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
          }))
        }
        return t
      }

      function h(t, e, n) {
        return e in t ? Object.defineProperty(t, e, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : t[e] = n, t
      }
      var c = {
          position: "relative",
          overflow: "hidden",
          width: "100%",
          height: "50vh"
        },
        p = {
          position: "absolute",
          top: 0,
          right: 0,
          bottom: 0,
          left: 0
        },
        f = function(t) {
          var e = t.children,
            n = t.className,
            i = t.layers,
            s = t.style,
            l = t.disabled;
          return r.default.createElement("div", {
            style: u(u({}, c), s),
            className: "parallax-banner" + (n ? " ".concat(n) : "")
          }, i.map((function(t, e) {
            var n = t.amount,
              i = t.children,
              s = t.expanded,
              h = void 0 === s || s,
              c = t.image,
              f = t.props,
              d = void 0 === f ? {} : f,
              m = d.style || {},
              v = d.className || "";
            delete d.style, delete d.className;
            var g = "parallax-banner-layer-".concat(e).concat(v ? " ".concat(v) : ""),
              y = h ? {
                top: 100 * Math.abs(n) * -1 + "%",
                bottom: 100 * Math.abs(n) * -1 + "%"
              } : {},
              b = c ? {
                backgroundImage: "url(".concat(c, ")"),
                backgroundPosition: "center",
                backgroundSize: "cover"
              } : {};
            return r.default.createElement(a.default, {
              key: "layer-".concat(e),
              y: [-1 * n * 100 + "%", 100 * n + "%"],
              styleInner: p,
              styleOuter: p,
              disabled: l
            }, r.default.createElement("div", o({
              className: g,
              style: u(u(u(u({}, b), p), y), m)
            }, d), i))
          })), e)
        };
      f.defaultProps = {
        disabled: !1
      }, f.propTypes = {
        children: i.default.node,
        className: i.default.string,
        disabled: i.default.bool.isRequired,
        layers: i.default.arrayOf(i.default.shape({
          amount: i.default.number.isRequired,
          children: i.default.oneOfType([i.default.node, i.default.func]),
          expanded: i.default.bool,
          image: i.default.string,
          props: i.default.object
        })),
        style: i.default.object
      };
      var d = f;
      e.default = d
    },
    40648: (t, e, n) => {
      "use strict";

      function r(t) {
        return r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
          return typeof t
        } : function(t) {
          return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }, r(t)
      }
      Object.defineProperty(e, "__esModule", {
        value: !0
      }), e.default = void 0;
      var i = function(t) {
          if (t && t.__esModule) return t;
          if (null === t || "object" !== r(t) && "function" != typeof t) return {
            default: t
          };
          var e = c();
          if (e && e.has(t)) return e.get(t);
          var n = {},
            i = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var a in t)
            if (Object.prototype.hasOwnProperty.call(t, a)) {
              var s = i ? Object.getOwnPropertyDescriptor(t, a) : null;
              s && (s.get || s.set) ? Object.defineProperty(n, a, s) : n[a] = t[a]
            } return n.default = t, e && e.set(t, n), n
        }(n(51664)),
        a = h(n(71424)),
        s = h(n(92752)),
        o = h(n(48708)),
        l = n(57892),
        u = h(n(86569));

      function h(t) {
        return t && t.__esModule ? t : {
          default: t
        }
      }

      function c() {
        if ("function" != typeof WeakMap) return null;
        var t = new WeakMap;
        return c = function() {
          return t
        }, t
      }

      function p(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
        }
      }

      function f(t, e) {
        return f = Object.setPrototypeOf || function(t, e) {
          return t.__proto__ = e, t
        }, f(t, e)
      }

      function d(t) {
        return d = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
          return t.__proto__ || Object.getPrototypeOf(t)
        }, d(t)
      }

      function m(t, e, n) {
        return e in t ? Object.defineProperty(t, e, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : t[e] = n, t
      }
      var v = function(t) {
        ! function(t, e) {
          if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
          t.prototype = Object.create(e && e.prototype, {
            constructor: {
              value: t,
              writable: !0,
              configurable: !0
            }
          }), e && f(t, e)
        }(h, t);
        var e, n, a, l, u = (a = h, l = function() {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
          } catch (t) {
            return !1
          }
        }(), function() {
          var t, e = d(a);
          if (l) {
            var n = d(this).constructor;
            t = Reflect.construct(e, arguments, n)
          } else t = e.apply(this, arguments);
          return function(t, e) {
            return !e || "object" !== r(e) && "function" != typeof e ? function(t) {
              if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              return t
            }(t) : e
          }(this, t)
        });

        function h(t) {
          var e, n;
          return function(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
          }(this, h), (e = u.call(this, t)).controller = (n = {
            scrollAxis: t.scrollAxis,
            scrollContainer: t.scrollContainer
          }, "undefined" == typeof window ? null : o.default.init(n)), e
        }
        return e = h, (n = [{
          key: "componentDidUpdate",
          value: function(t) {
            t.scrollContainer !== this.props.scrollContainer && this.controller.updateScrollContainer(this.props.scrollContainer)
          }
        }, {
          key: "componentWillUnmount",
          value: function() {
            this.controller = this.controller.destroy()
          }
        }, {
          key: "render",
          value: function() {
            var t = this.props.children;
            return i.default.createElement(s.default.Provider, {
              value: this.controller
            }, t)
          }
        }]) && p(e.prototype, n), h
      }(i.Component);
      e.default = v, m(v, "defaultProps", {
        scrollAxis: l.VERTICAL
      }), m(v, "propTypes", {
        children: a.default.node.isRequired,
        scrollAxis: a.default.oneOf([l.VERTICAL, l.HORIZONTAL]),
        scrollContainer: u.default
      })
    },
    98784: (t, e, n) => {
      "use strict";
      Object.defineProperty(e, "__esModule", {
        value: !0
      }), e.default = void 0;
      var r, i = n(51664),
        a = (r = n(92752)) && r.__esModule ? r : {
          default: r
        };
      e.default = function() {
        var t = (0, i.useContext)(a.default);
        if ("undefined" == typeof window) return null;
        if (!t) throw new Error("Could not find `react-scroll-parallax` context value. Please ensure the component is wrapped in a <ParallaxProvider>");
        return {
          parallaxController: t
        }
      }
    },
    92320: (t, e, n) => {
      "use strict";

      function r(t) {
        return r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
          return typeof t
        } : function(t) {
          return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }, r(t)
      }
      Object.defineProperty(e, "__esModule", {
        value: !0
      }), e.default = void 0;
      var i = function(t) {
          if (t && t.__esModule) return t;
          if (null === t || "object" !== r(t) && "function" != typeof t) return {
            default: t
          };
          var e = l();
          if (e && e.has(t)) return e.get(t);
          var n = {},
            i = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var a in t)
            if (Object.prototype.hasOwnProperty.call(t, a)) {
              var s = i ? Object.getOwnPropertyDescriptor(t, a) : null;
              s && (s.get || s.set) ? Object.defineProperty(n, a, s) : n[a] = t[a]
            } return n.default = t, e && e.set(t, n), n
        }(n(51664)),
        a = o(n(71424)),
        s = o(n(92752));

      function o(t) {
        return t && t.__esModule ? t : {
          default: t
        }
      }

      function l() {
        if ("function" != typeof WeakMap) return null;
        var t = new WeakMap;
        return l = function() {
          return t
        }, t
      }

      function u() {
        return u = Object.assign || function(t) {
          for (var e = 1; e < arguments.length; e++) {
            var n = arguments[e];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
          }
          return t
        }, u.apply(this, arguments)
      }

      function h(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
        }
      }

      function c(t, e) {
        return c = Object.setPrototypeOf || function(t, e) {
          return t.__proto__ = e, t
        }, c(t, e)
      }

      function p(t) {
        return p = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
          return t.__proto__ || Object.getPrototypeOf(t)
        }, p(t)
      }
      e.default = function(t) {
        var e, n, o, l = function(e) {
          ! function(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
            t.prototype = Object.create(e && e.prototype, {
              constructor: {
                value: t,
                writable: !0,
                configurable: !0
              }
            }), e && c(t, e)
          }(d, e);
          var n, a, o, l, f = (o = d, l = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
              return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
            } catch (t) {
              return !1
            }
          }(), function() {
            var t, e = p(o);
            if (l) {
              var n = p(this).constructor;
              t = Reflect.construct(e, arguments, n)
            } else t = e.apply(this, arguments);
            return function(t, e) {
              return !e || "object" !== r(e) && "function" != typeof e ? function(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
              }(t) : e
            }(this, t)
          });

          function d() {
            return function(t, e) {
              if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, d), f.apply(this, arguments)
          }
          return n = d, (a = [{
            key: "render",
            value: function() {
              var e = this;
              return i.default.createElement(s.default.Consumer, null, (function(n) {
                return i.default.createElement(t, u({
                  parallaxController: n
                }, e.props))
              }))
            }
          }]) && h(n.prototype, a), d
        }(i.Component);
        return e = l, n = "propTypes", o = {
          parallaxController: a.default.object
        }, n in e ? Object.defineProperty(e, n, {
          value: o,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[n] = o, l
      }
    },
    57892: (t, e) => {
      "use strict";
      Object.defineProperty(e, "__esModule", {
        value: !0
      }), e.HORIZONTAL = e.VERTICAL = void 0, e.VERTICAL = "vertical", e.HORIZONTAL = "horizontal"
    },
    92752: (t, e, n) => {
      "use strict";
      var r;
      Object.defineProperty(e, "__esModule", {
        value: !0
      }), e.default = void 0;
      var i = ((r = n(51664)) && r.__esModule ? r : {
        default: r
      }).default.createContext(null);
      e.default = i
    },
    29837: (t, e, n) => {
      "use strict";
      Object.defineProperty(e, "__esModule", {
        value: !0
      }), e.setParallaxStyles = function(t, e, n) {
        var i = (0, r.getParallaxOffsets)(e, n),
          a = i.x,
          s = a.value,
          o = a.unit,
          l = i.y,
          u = l.value,
          h = l.unit;
        t.style.transform = "translate3d(".concat(s).concat(o, ", ").concat(u).concat(h, ", 0)")
      }, e.resetStyles = function(t) {
        t.elInner.style.transform = ""
      };
      var r = n(29864)
    },
    26516: (t, e, n) => {
      "use strict";
      Object.defineProperty(e, "__esModule", {
        value: !0
      }), e.default = function(t) {
        var e = t.y0,
          n = t.y1,
          i = t.x1,
          a = t.x0,
          s = (0, r.parseValueAndUnit)(e),
          o = (0, r.parseValueAndUnit)(n),
          l = (0, r.parseValueAndUnit)(a),
          u = (0, r.parseValueAndUnit)(i);
        if (l.unit !== u.unit || s.unit !== o.unit) throw new Error("Must provide matching units for the min and max offset values of each axis.");
        return {
          xUnit: l.unit || "%",
          yUnit: s.unit || "%",
          y0: s,
          y1: o,
          x0: l,
          x1: u
        }
      };
      var r = n(89932)
    },
    29864: (t, e, n) => {
      "use strict";
      Object.defineProperty(e, "__esModule", {
        value: !0
      }), e.getParallaxOffsets = function(t, e) {
        var n = t.y0,
          i = t.y1,
          a = t.x0,
          s = t.x1,
          o = i.unit,
          l = s.unit;
        return {
          x: {
            value: (0, r.scaleBetween)(e, a.value, s.value, 0, 100),
            unit: l
          },
          y: {
            value: (0, r.scaleBetween)(e, n.value, i.value, 0, 100),
            unit: o
          }
        }
      };
      var r = n(89932)
    },
    44964: (t, e, n) => {
      "use strict";
      Object.defineProperty(e, "__esModule", {
        value: !0
      }), Object.defineProperty(e, "ParallaxContext", {
        enumerable: !0,
        get: function() {
          return r.default
        }
      }), Object.defineProperty(e, "percentMoved", {
        enumerable: !0,
        get: function() {
          return i.percentMoved
        }
      }), Object.defineProperty(e, "setParallaxStyles", {
        enumerable: !0,
        get: function() {
          return a.setParallaxStyles
        }
      }), Object.defineProperty(e, "resetStyles", {
        enumerable: !0,
        get: function() {
          return a.resetStyles
        }
      }), Object.defineProperty(e, "getParallaxOffsets", {
        enumerable: !0,
        get: function() {
          return s.getParallaxOffsets
        }
      }), Object.defineProperty(e, "isElementInView", {
        enumerable: !0,
        get: function() {
          return o.isElementInView
        }
      }), Object.defineProperty(e, "getOffsets", {
        enumerable: !0,
        get: function() {
          return l.default
        }
      });
      var r = u(n(92752)),
        i = n(31288),
        a = n(29837),
        s = n(29864),
        o = n(59352),
        l = u(n(26516));

      function u(t) {
        return t && t.__esModule ? t : {
          default: t
        }
      }
    },
    59352: (t, e) => {
      "use strict";
      Object.defineProperty(e, "__esModule", {
        value: !0
      }), e.isElementInView = function(t, e, n, r) {
        var i = t - r,
          a = e - r;
        return i >= 0 && i <= n || a >= 0 && a <= n || i <= 0 && a >= n
      }
    },
    31288: (t, e) => {
      "use strict";
      Object.defineProperty(e, "__esModule", {
        value: !0
      }), e.percentMoved = function(t, e, n, r) {
        return (-1 * (t - r) + n) / e * 100
      }
    },
    77616: (t, e, n) => {
      "use strict";
      Object.defineProperty(e, "oZ", {
        enumerable: !0,
        get: function() {
          return r.default
        }
      }), Object.defineProperty(e, "mw", {
        enumerable: !0,
        get: function() {
          return i.default
        }
      }), Object.defineProperty(e, "qK", {
        enumerable: !0,
        get: function() {
          return a.default
        }
      }), Object.defineProperty(e, "Sr", {
        enumerable: !0,
        get: function() {
          return s.default
        }
      });
      var r = o(n(98784)),
        i = (o(n(92320)), o(n(91520))),
        a = o(n(40648)),
        s = o(n(13708));
      o(n(92752));

      function o(t) {
        return t && t.__esModule ? t : {
          default: t
        }
      }
    },
    98357: (t, e) => {
      "use strict";
      Object.defineProperty(e, "__esModule", {
        value: !0
      }), e.createId = function() {
        return ++n
      };
      var n = 0
    },
    89932: (t, e, n) => {
      "use strict";
      Object.defineProperty(e, "__esModule", {
        value: !0
      }), Object.defineProperty(e, "parseValueAndUnit", {
        enumerable: !0,
        get: function() {
          return r.default
        }
      }), Object.defineProperty(e, "scaleBetween", {
        enumerable: !0,
        get: function() {
          return i.default
        }
      }), Object.defineProperty(e, "testForPassiveScroll", {
        enumerable: !0,
        get: function() {
          return a.default
        }
      }), Object.defineProperty(e, "createId", {
        enumerable: !0,
        get: function() {
          return s.createId
        }
      });
      var r = o(n(25536)),
        i = o(n(16512)),
        a = o(n(45560)),
        s = n(98357);

      function o(t) {
        return t && t.__esModule ? t : {
          default: t
        }
      }
    },
    25536: (t, e) => {
      "use strict";
      Object.defineProperty(e, "__esModule", {
        value: !0
      }), e.default = function(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
          value: 0,
          unit: "px"
        };
        if ("number" != typeof t && "string" != typeof t) throw new Error("Invalid value provided. Must provide a value as a string or number");
        if (t = String(t), e.value = parseFloat(t, 10), e.unit = t.match(/[\d.\-\+]*\s*(.*)/)[1] || "%", !["px", "%"].find((function(t) {
            return t === e.unit
          }))) throw new Error("Invalid unit provided. Must provide a unit of px in or %");
        return e
      }
    },
    16512: (t, e) => {
      "use strict";
      Object.defineProperty(e, "__esModule", {
        value: !0
      }), e.default = function(t, e, n, r, i) {
        return (n - e) * (t - r) / (i - r) + e
      }
    },
    45560: (t, e) => {
      "use strict";
      Object.defineProperty(e, "__esModule", {
        value: !0
      }), e.default = function() {
        var t = !1;
        try {
          var e = Object.defineProperty({}, "passive", {
            get: function() {
              t = !0
            }
          });
          window.addEventListener("test", null, e), window.removeEventListener("test", null, e)
        } catch (t) {}
        return t
      }
    },
    86569: (t, e) => {
      "use strict";
      Object.defineProperty(e, "__esModule", {
        value: !0
      }), e.default = function(t, e) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "ANONYMOUS";
        return "undefined" == typeof window || !t[e] || t[e] instanceof window.Element ? null : new Error('Prop name "'.concat(e, '" in <').concat(n, "> must be an HTML DOM element."))
      }
    },
    30300: (t, e, n) => {
      "use strict";
      n.d(e, {
        cp: () => ur
      });
      var r = n(62504);

      function i(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e && (r = r.filter((function(e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable
          }))), n.push.apply(n, r)
        }
        return n
      }

      function a(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2 ? i(Object(n), !0).forEach((function(e) {
            (0, r.c)(t, e, n[e])
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : i(Object(n)).forEach((function(e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
          }))
        }
        return t
      }

      function s(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
        return r
      }

      function o(t, e) {
        if (t) {
          if ("string" == typeof t) return s(t, e);
          var n = Object.prototype.toString.call(t).slice(8, -1);
          return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? s(t, e) : void 0
        }
      }

      function l(t, e) {
        return function(t) {
          if (Array.isArray(t)) return t
        }(t) || function(t, e) {
          var n = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
          if (null != n) {
            var r, i, a, s, o = [],
              l = !0,
              u = !1;
            try {
              if (a = (n = n.call(t)).next, 0 === e) {
                if (Object(n) !== n) return;
                l = !1
              } else
                for (; !(l = (r = a.call(n)).done) && (o.push(r.value), o.length !== e); l = !0);
            } catch (t) {
              u = !0, i = t
            } finally {
              try {
                if (!l && null != n.return && (s = n.return(), Object(s) !== s)) return
              } finally {
                if (u) throw i
              }
            }
            return o
          }
        }(t, e) || o(t, e) || function() {
          throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
      }
      var u = n(31632);

      function h(t, e) {
        if (null == t) return {};
        var n, r, i = (0, u.c)(t, e);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(t);
          for (r = 0; r < a.length; r++) n = a[r], e.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(t, n) && (i[n] = t[n])
        }
        return i
      }
      var c = n(51664),
        p = ["defaultInputValue", "defaultMenuIsOpen", "defaultValue", "inputValue", "menuIsOpen", "onChange", "onInputChange", "onMenuClose", "onMenuOpen", "value"],
        f = n(82795),
        d = n(53952);

      function m(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, (0, d.c)(r.key), r)
        }
      }
      var v = n(74848);

      function g(t) {
        return g = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
          return t.__proto__ || Object.getPrototypeOf(t)
        }, g(t)
      }
      var y = n(28792);

      function b(t) {
        var e = function() {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
          } catch (t) {
            return !1
          }
        }();
        return function() {
          var n, r = g(t);
          if (e) {
            var i = g(this).constructor;
            n = Reflect.construct(r, arguments, i)
          } else n = r.apply(this, arguments);
          return function(t, e) {
            if (e && ("object" === (0, y.c)(e) || "function" == typeof e)) return e;
            if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
            return function(t) {
              if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              return t
            }(t)
          }(this, n)
        }
      }

      function x(t) {
        return function(t) {
          if (Array.isArray(t)) return s(t)
        }(t) || function(t) {
          if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t)
        }(t) || o(t) || function() {
          throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
      }
      var S = function() {
          function t(t) {
            var e = this;
            this._insertTag = function(t) {
              var n;
              n = 0 === e.tags.length ? e.insertionPoint ? e.insertionPoint.nextSibling : e.prepend ? e.container.firstChild : e.before : e.tags[e.tags.length - 1].nextSibling, e.container.insertBefore(t, n), e.tags.push(t)
            }, this.isSpeedy = void 0 === t.speedy || t.speedy, this.tags = [], this.ctr = 0, this.nonce = t.nonce, this.key = t.key, this.container = t.container, this.prepend = t.prepend, this.insertionPoint = t.insertionPoint, this.before = null
          }
          var e = t.prototype;
          return e.hydrate = function(t) {
            t.forEach(this._insertTag)
          }, e.insert = function(t) {
            this.ctr % (this.isSpeedy ? 65e3 : 1) == 0 && this._insertTag(function(t) {
              var e = document.createElement("style");
              return e.setAttribute("data-emotion", t.key), void 0 !== t.nonce && e.setAttribute("nonce", t.nonce), e.appendChild(document.createTextNode("")), e.setAttribute("data-s", ""), e
            }(this));
            var e = this.tags[this.tags.length - 1];
            if (this.isSpeedy) {
              var n = function(t) {
                if (t.sheet) return t.sheet;
                for (var e = 0; e < document.styleSheets.length; e++)
                  if (document.styleSheets[e].ownerNode === t) return document.styleSheets[e]
              }(e);
              try {
                n.insertRule(t, n.cssRules.length)
              } catch (t) {}
            } else e.appendChild(document.createTextNode(t));
            this.ctr++
          }, e.flush = function() {
            this.tags.forEach((function(t) {
              return t.parentNode && t.parentNode.removeChild(t)
            })), this.tags = [], this.ctr = 0
          }, t
        }(),
        E = Math.abs,
        P = String.fromCharCode,
        C = Object.assign;

      function w(t) {
        return t.trim()
      }

      function M(t, e, n) {
        return t.replace(e, n)
      }

      function T(t, e) {
        return t.indexOf(e)
      }

      function A(t, e) {
        return 0 | t.charCodeAt(e)
      }

      function k(t, e, n) {
        return t.slice(e, n)
      }

      function _(t) {
        return t.length
      }

      function D(t) {
        return t.length
      }

      function I(t, e) {
        return e.push(t), t
      }
      var F = 1,
        O = 1,
        V = 0,
        R = 0,
        L = 0,
        B = "";

      function N(t, e, n, r, i, a, s) {
        return {
          value: t,
          root: e,
          parent: n,
          type: r,
          props: i,
          children: a,
          line: F,
          column: O,
          length: s,
          return: ""
        }
      }

      function j(t, e) {
        return C(N("", null, null, "", null, null, 0), t, {
          length: -t.length
        }, e)
      }

      function z() {
        return L = R > 0 ? A(B, --R) : 0, O--, 10 === L && (O = 1, F--), L
      }

      function G() {
        return L = R < V ? A(B, R++) : 0, O++, 10 === L && (O = 1, F++), L
      }

      function H() {
        return A(B, R)
      }

      function W() {
        return R
      }

      function U(t, e) {
        return k(B, t, e)
      }

      function q(t) {
        switch (t) {
          case 0:
          case 9:
          case 10:
          case 13:
          case 32:
            return 5;
          case 33:
          case 43:
          case 44:
          case 47:
          case 62:
          case 64:
          case 126:
          case 59:
          case 123:
          case 125:
            return 4;
          case 58:
            return 3;
          case 34:
          case 39:
          case 40:
          case 91:
            return 2;
          case 41:
          case 93:
            return 1
        }
        return 0
      }

      function Y(t) {
        return F = O = 1, V = _(B = t), R = 0, []
      }

      function $(t) {
        return B = "", t
      }

      function K(t) {
        return w(U(R - 1, J(91 === t ? t + 2 : 40 === t ? t + 1 : t)))
      }

      function X(t) {
        for (;
          (L = H()) && L < 33;) G();
        return q(t) > 2 || q(L) > 3 ? "" : " "
      }

      function Z(t, e) {
        for (; --e && G() && !(L < 48 || L > 102 || L > 57 && L < 65 || L > 70 && L < 97););
        return U(t, W() + (e < 6 && 32 == H() && 32 == G()))
      }

      function J(t) {
        for (; G();) switch (L) {
          case t:
            return R;
          case 34:
          case 39:
            34 !== t && 39 !== t && J(L);
            break;
          case 40:
            41 === t && J(t);
            break;
          case 92:
            G()
        }
        return R
      }

      function Q(t, e) {
        for (; G() && t + L !== 57 && (t + L !== 84 || 47 !== H()););
        return "/*" + U(e, R - 1) + "*" + P(47 === t ? t : G())
      }

      function tt(t) {
        for (; !q(H());) G();
        return U(t, R)
      }
      var et = "-ms-",
        nt = "-moz-",
        rt = "-webkit-",
        it = "comm",
        at = "rule",
        st = "decl",
        ot = "@keyframes";

      function lt(t, e) {
        for (var n = "", r = D(t), i = 0; i < r; i++) n += e(t[i], i, t, e) || "";
        return n
      }

      function ut(t, e, n, r) {
        switch (t.type) {
          case "@layer":
            if (t.children.length) break;
          case "@import":
          case st:
            return t.return = t.return || t.value;
          case it:
            return "";
          case ot:
            return t.return = t.value + "{" + lt(t.children, r) + "}";
          case at:
            t.value = t.props.join(",")
        }
        return _(n = lt(t.children, r)) ? t.return = t.value + "{" + n + "}" : ""
      }

      function ht(t) {
        return $(ct("", null, null, null, [""], t = Y(t), 0, [0], t))
      }

      function ct(t, e, n, r, i, a, s, o, l) {
        for (var u = 0, h = 0, c = s, p = 0, f = 0, d = 0, m = 1, v = 1, g = 1, y = 0, b = "", x = i, S = a, E = r, C = b; v;) switch (d = y, y = G()) {
          case 40:
            if (108 != d && 58 == A(C, c - 1)) {
              -1 != T(C += M(K(y), "&", "&\f"), "&\f") && (g = -1);
              break
            }
          case 34:
          case 39:
          case 91:
            C += K(y);
            break;
          case 9:
          case 10:
          case 13:
          case 32:
            C += X(d);
            break;
          case 92:
            C += Z(W() - 1, 7);
            continue;
          case 47:
            switch (H()) {
              case 42:
              case 47:
                I(ft(Q(G(), W()), e, n), l);
                break;
              default:
                C += "/"
            }
            break;
          case 123 * m:
            o[u++] = _(C) * g;
          case 125 * m:
          case 59:
          case 0:
            switch (y) {
              case 0:
              case 125:
                v = 0;
              case 59 + h:
                -1 == g && (C = M(C, /\f/g, "")), f > 0 && _(C) - c && I(f > 32 ? dt(C + ";", r, n, c - 1) : dt(M(C, " ", "") + ";", r, n, c - 2), l);
                break;
              case 59:
                C += ";";
              default:
                if (I(E = pt(C, e, n, u, h, i, o, b, x = [], S = [], c), a), 123 === y)
                  if (0 === h) ct(C, e, E, E, x, a, c, o, S);
                  else switch (99 === p && 110 === A(C, 3) ? 100 : p) {
                    case 100:
                    case 108:
                    case 109:
                    case 115:
                      ct(t, E, E, r && I(pt(t, E, E, 0, 0, i, o, b, i, x = [], c), S), i, S, c, o, r ? x : S);
                      break;
                    default:
                      ct(C, E, E, E, [""], S, 0, o, S)
                  }
            }
            u = h = f = 0, m = g = 1, b = C = "", c = s;
            break;
          case 58:
            c = 1 + _(C), f = d;
          default:
            if (m < 1)
              if (123 == y) --m;
              else if (125 == y && 0 == m++ && 125 == z()) continue;
            switch (C += P(y), y * m) {
              case 38:
                g = h > 0 ? 1 : (C += "\f", -1);
                break;
              case 44:
                o[u++] = (_(C) - 1) * g, g = 1;
                break;
              case 64:
                45 === H() && (C += K(G())), p = H(), h = c = _(b = C += tt(W())), y++;
                break;
              case 45:
                45 === d && 2 == _(C) && (m = 0)
            }
        }
        return a
      }

      function pt(t, e, n, r, i, a, s, o, l, u, h) {
        for (var c = i - 1, p = 0 === i ? a : [""], f = D(p), d = 0, m = 0, v = 0; d < r; ++d)
          for (var g = 0, y = k(t, c + 1, c = E(m = s[d])), b = t; g < f; ++g)(b = w(m > 0 ? p[g] + " " + y : M(y, /&\f/g, p[g]))) && (l[v++] = b);
        return N(t, e, n, 0 === i ? at : o, l, u, h)
      }

      function ft(t, e, n) {
        return N(t, e, n, it, P(L), k(t, 2, -2), 0)
      }

      function dt(t, e, n, r) {
        return N(t, e, n, st, k(t, 0, r), k(t, r + 1, -1), r)
      }
      var mt = function(t, e, n) {
          for (var r = 0, i = 0; r = i, i = H(), 38 === r && 12 === i && (e[n] = 1), !q(i);) G();
          return U(t, R)
        },
        vt = new WeakMap,
        gt = function(t) {
          if ("rule" === t.type && t.parent && !(t.length < 1)) {
            for (var e = t.value, n = t.parent, r = t.column === n.column && t.line === n.line;
              "rule" !== n.type;)
              if (!(n = n.parent)) return;
            if ((1 !== t.props.length || 58 === e.charCodeAt(0) || vt.get(n)) && !r) {
              vt.set(t, !0);
              for (var i = [], a = function(t, e) {
                  return $(function(t, e) {
                    var n = -1,
                      r = 44;
                    do {
                      switch (q(r)) {
                        case 0:
                          38 === r && 12 === H() && (e[n] = 1), t[n] += mt(R - 1, e, n);
                          break;
                        case 2:
                          t[n] += K(r);
                          break;
                        case 4:
                          if (44 === r) {
                            t[++n] = 58 === H() ? "&\f" : "", e[n] = t[n].length;
                            break
                          }
                        default:
                          t[n] += P(r)
                      }
                    } while (r = G());
                    return t
                  }(Y(t), e))
                }(e, i), s = n.props, o = 0, l = 0; o < a.length; o++)
                for (var u = 0; u < s.length; u++, l++) t.props[l] = i[o] ? a[o].replace(/&\f/g, s[u]) : s[u] + " " + a[o]
            }
          }
        },
        yt = function(t) {
          if ("decl" === t.type) {
            var e = t.value;
            108 === e.charCodeAt(0) && 98 === e.charCodeAt(2) && (t.return = "", t.value = "")
          }
        };

      function bt(t, e) {
        switch (function(t, e) {
            return 45 ^ A(t, 0) ? (((e << 2 ^ A(t, 0)) << 2 ^ A(t, 1)) << 2 ^ A(t, 2)) << 2 ^ A(t, 3) : 0
          }(t, e)) {
          case 5103:
            return rt + "print-" + t + t;
          case 5737:
          case 4201:
          case 3177:
          case 3433:
          case 1641:
          case 4457:
          case 2921:
          case 5572:
          case 6356:
          case 5844:
          case 3191:
          case 6645:
          case 3005:
          case 6391:
          case 5879:
          case 5623:
          case 6135:
          case 4599:
          case 4855:
          case 4215:
          case 6389:
          case 5109:
          case 5365:
          case 5621:
          case 3829:
            return rt + t + t;
          case 5349:
          case 4246:
          case 4810:
          case 6968:
          case 2756:
            return rt + t + nt + t + et + t + t;
          case 6828:
          case 4268:
            return rt + t + et + t + t;
          case 6165:
            return rt + t + et + "flex-" + t + t;
          case 5187:
            return rt + t + M(t, /(\w+).+(:[^]+)/, rt + "box-$1$2" + et + "flex-$1$2") + t;
          case 5443:
            return rt + t + et + "flex-item-" + M(t, /flex-|-self/, "") + t;
          case 4675:
            return rt + t + et + "flex-line-pack" + M(t, /align-content|flex-|-self/, "") + t;
          case 5548:
            return rt + t + et + M(t, "shrink", "negative") + t;
          case 5292:
            return rt + t + et + M(t, "basis", "preferred-size") + t;
          case 6060:
            return rt + "box-" + M(t, "-grow", "") + rt + t + et + M(t, "grow", "positive") + t;
          case 4554:
            return rt + M(t, /([^-])(transform)/g, "$1" + rt + "$2") + t;
          case 6187:
            return M(M(M(t, /(zoom-|grab)/, rt + "$1"), /(image-set)/, rt + "$1"), t, "") + t;
          case 5495:
          case 3959:
            return M(t, /(image-set\([^]*)/, rt + "$1$`$1");
          case 4968:
            return M(M(t, /(.+:)(flex-)?(.*)/, rt + "box-pack:$3" + et + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + rt + t + t;
          case 4095:
          case 3583:
          case 4068:
          case 2532:
            return M(t, /(.+)-inline(.+)/, rt + "$1$2") + t;
          case 8116:
          case 7059:
          case 5753:
          case 5535:
          case 5445:
          case 5701:
          case 4933:
          case 4677:
          case 5533:
          case 5789:
          case 5021:
          case 4765:
            if (_(t) - 1 - e > 6) switch (A(t, e + 1)) {
              case 109:
                if (45 !== A(t, e + 4)) break;
              case 102:
                return M(t, /(.+:)(.+)-([^]+)/, "$1" + rt + "$2-$3$1" + nt + (108 == A(t, e + 3) ? "$3" : "$2-$3")) + t;
              case 115:
                return ~T(t, "stretch") ? bt(M(t, "stretch", "fill-available"), e) + t : t
            }
            break;
          case 4949:
            if (115 !== A(t, e + 1)) break;
          case 6444:
            switch (A(t, _(t) - 3 - (~T(t, "!important") && 10))) {
              case 107:
                return M(t, ":", ":" + rt) + t;
              case 101:
                return M(t, /(.+:)([^;!]+)(;|!.+)?/, "$1" + rt + (45 === A(t, 14) ? "inline-" : "") + "box$3$1" + rt + "$2$3$1" + et + "$2box$3") + t
            }
            break;
          case 5936:
            switch (A(t, e + 11)) {
              case 114:
                return rt + t + et + M(t, /[svh]\w+-[tblr]{2}/, "tb") + t;
              case 108:
                return rt + t + et + M(t, /[svh]\w+-[tblr]{2}/, "tb-rl") + t;
              case 45:
                return rt + t + et + M(t, /[svh]\w+-[tblr]{2}/, "lr") + t
            }
            return rt + t + et + t + t
        }
        return t
      }
      var xt = [function(t, e, n, r) {
          if (t.length > -1 && !t.return) switch (t.type) {
            case st:
              t.return = bt(t.value, t.length);
              break;
            case ot:
              return lt([j(t, {
                value: M(t.value, "@", "@" + rt)
              })], r);
            case at:
              if (t.length) return function(t, e) {
                return t.map(e).join("")
              }(t.props, (function(e) {
                switch (function(t, e) {
                    return (t = /(::plac\w+|:read-\w+)/.exec(t)) ? t[0] : t
                  }(e)) {
                  case ":read-only":
                  case ":read-write":
                    return lt([j(t, {
                      props: [M(e, /:(read-\w+)/, ":-moz-$1")]
                    })], r);
                  case "::placeholder":
                    return lt([j(t, {
                      props: [M(e, /:(plac\w+)/, ":" + rt + "input-$1")]
                    }), j(t, {
                      props: [M(e, /:(plac\w+)/, ":-moz-$1")]
                    }), j(t, {
                      props: [M(e, /:(plac\w+)/, et + "input-$1")]
                    })], r)
                }
                return ""
              }))
          }
        }],
        St = function(t) {
          var e = t.key;
          if ("css" === e) {
            var n = document.querySelectorAll("style[data-emotion]:not([data-s])");
            Array.prototype.forEach.call(n, (function(t) {
              -1 !== t.getAttribute("data-emotion").indexOf(" ") && (document.head.appendChild(t), t.setAttribute("data-s", ""))
            }))
          }
          var r, i, a = t.stylisPlugins || xt,
            s = {},
            o = [];
          r = t.container || document.head, Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="' + e + ' "]'), (function(t) {
            for (var e = t.getAttribute("data-emotion").split(" "), n = 1; n < e.length; n++) s[e[n]] = !0;
            o.push(t)
          }));
          var l, u, h, c, p = [ut, (c = function(t) {
              l.insert(t)
            }, function(t) {
              t.root || (t = t.return) && c(t)
            })],
            f = (u = [gt, yt].concat(a, p), h = D(u), function(t, e, n, r) {
              for (var i = "", a = 0; a < h; a++) i += u[a](t, e, n, r) || "";
              return i
            });
          i = function(t, e, n, r) {
            l = n, lt(ht(t ? t + "{" + e.styles + "}" : e.styles), f), r && (d.inserted[e.name] = !0)
          };
          var d = {
            key: e,
            sheet: new S({
              key: e,
              container: r,
              nonce: t.nonce,
              speedy: t.speedy,
              prepend: t.prepend,
              insertionPoint: t.insertionPoint
            }),
            nonce: t.nonce,
            inserted: s,
            registered: {},
            insert: i
          };
          return d.sheet.hydrate(o), d
        },
        Et = function(t, e, n) {
          var r = t.key + "-" + e.name;
          !1 === n && void 0 === t.registered[r] && (t.registered[r] = e.styles)
        },
        Pt = {
          animationIterationCount: 1,
          aspectRatio: 1,
          borderImageOutset: 1,
          borderImageSlice: 1,
          borderImageWidth: 1,
          boxFlex: 1,
          boxFlexGroup: 1,
          boxOrdinalGroup: 1,
          columnCount: 1,
          columns: 1,
          flex: 1,
          flexGrow: 1,
          flexPositive: 1,
          flexShrink: 1,
          flexNegative: 1,
          flexOrder: 1,
          gridRow: 1,
          gridRowEnd: 1,
          gridRowSpan: 1,
          gridRowStart: 1,
          gridColumn: 1,
          gridColumnEnd: 1,
          gridColumnSpan: 1,
          gridColumnStart: 1,
          msGridRow: 1,
          msGridRowSpan: 1,
          msGridColumn: 1,
          msGridColumnSpan: 1,
          fontWeight: 1,
          lineHeight: 1,
          opacity: 1,
          order: 1,
          orphans: 1,
          tabSize: 1,
          widows: 1,
          zIndex: 1,
          zoom: 1,
          WebkitLineClamp: 1,
          fillOpacity: 1,
          floodOpacity: 1,
          stopOpacity: 1,
          strokeDasharray: 1,
          strokeDashoffset: 1,
          strokeMiterlimit: 1,
          strokeOpacity: 1,
          strokeWidth: 1
        };

      function Ct(t) {
        var e = Object.create(null);
        return function(n) {
          return void 0 === e[n] && (e[n] = t(n)), e[n]
        }
      }
      var wt = /[A-Z]|^ms/g,
        Mt = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
        Tt = function(t) {
          return 45 === t.charCodeAt(1)
        },
        At = function(t) {
          return null != t && "boolean" != typeof t
        },
        kt = Ct((function(t) {
          return Tt(t) ? t : t.replace(wt, "-$&").toLowerCase()
        })),
        _t = function(t, e) {
          switch (t) {
            case "animation":
            case "animationName":
              if ("string" == typeof e) return e.replace(Mt, (function(t, e, n) {
                return It = {
                  name: e,
                  styles: n,
                  next: It
                }, e
              }))
          }
          return 1 === Pt[t] || Tt(t) || "number" != typeof e || 0 === e ? e : e + "px"
        };

      function Dt(t, e, n) {
        if (null == n) return "";
        if (void 0 !== n.__emotion_styles) return n;
        switch (typeof n) {
          case "boolean":
            return "";
          case "object":
            if (1 === n.anim) return It = {
              name: n.name,
              styles: n.styles,
              next: It
            }, n.name;
            if (void 0 !== n.styles) {
              var r = n.next;
              if (void 0 !== r)
                for (; void 0 !== r;) It = {
                  name: r.name,
                  styles: r.styles,
                  next: It
                }, r = r.next;
              return n.styles + ";"
            }
            return function(t, e, n) {
              var r = "";
              if (Array.isArray(n))
                for (var i = 0; i < n.length; i++) r += Dt(t, e, n[i]) + ";";
              else
                for (var a in n) {
                  var s = n[a];
                  if ("object" != typeof s) null != e && void 0 !== e[s] ? r += a + "{" + e[s] + "}" : At(s) && (r += kt(a) + ":" + _t(a, s) + ";");
                  else if (!Array.isArray(s) || "string" != typeof s[0] || null != e && void 0 !== e[s[0]]) {
                    var o = Dt(t, e, s);
                    switch (a) {
                      case "animation":
                      case "animationName":
                        r += kt(a) + ":" + o + ";";
                        break;
                      default:
                        r += a + "{" + o + "}"
                    }
                  } else
                    for (var l = 0; l < s.length; l++) At(s[l]) && (r += kt(a) + ":" + _t(a, s[l]) + ";")
                }
              return r
            }(t, e, n);
          case "function":
            if (void 0 !== t) {
              var i = It,
                a = n(t);
              return It = i, Dt(t, e, a)
            }
        }
        if (null == e) return n;
        var s = e[n];
        return void 0 !== s ? s : n
      }
      var It, Ft = /label:\s*([^\s;\n{]+)\s*(;|$)/g,
        Ot = function(t, e, n) {
          if (1 === t.length && "object" == typeof t[0] && null !== t[0] && void 0 !== t[0].styles) return t[0];
          var r = !0,
            i = "";
          It = void 0;
          var a = t[0];
          null == a || void 0 === a.raw ? (r = !1, i += Dt(n, e, a)) : i += a[0];
          for (var s = 1; s < t.length; s++) i += Dt(n, e, t[s]), r && (i += a[s]);
          Ft.lastIndex = 0;
          for (var o, l = ""; null !== (o = Ft.exec(i));) l += "-" + o[1];
          var u = function(t) {
            for (var e, n = 0, r = 0, i = t.length; i >= 4; ++r, i -= 4) e = 1540483477 * (65535 & (e = 255 & t.charCodeAt(r) | (255 & t.charCodeAt(++r)) << 8 | (255 & t.charCodeAt(++r)) << 16 | (255 & t.charCodeAt(++r)) << 24)) + (59797 * (e >>> 16) << 16), n = 1540483477 * (65535 & (e ^= e >>> 24)) + (59797 * (e >>> 16) << 16) ^ 1540483477 * (65535 & n) + (59797 * (n >>> 16) << 16);
            switch (i) {
              case 3:
                n ^= (255 & t.charCodeAt(r + 2)) << 16;
              case 2:
                n ^= (255 & t.charCodeAt(r + 1)) << 8;
              case 1:
                n = 1540483477 * (65535 & (n ^= 255 & t.charCodeAt(r))) + (59797 * (n >>> 16) << 16)
            }
            return (((n = 1540483477 * (65535 & (n ^= n >>> 13)) + (59797 * (n >>> 16) << 16)) ^ n >>> 15) >>> 0).toString(36)
          }(i) + l;
          return {
            name: u,
            styles: i,
            next: It
          }
        },
        Vt = !!c.useInsertionEffect && c.useInsertionEffect,
        Rt = Vt || function(t) {
          return t()
        },
        Lt = (Vt || c.useLayoutEffect, {}.hasOwnProperty),
        Bt = c.createContext("undefined" != typeof HTMLElement ? St({
          key: "css"
        }) : null);
      Bt.Provider;
      var Nt = function(t) {
          return (0, c.forwardRef)((function(e, n) {
            var r = (0, c.useContext)(Bt);
            return t(e, r, n)
          }))
        },
        jt = c.createContext({}),
        zt = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__",
        Gt = function(t) {
          var e = t.cache,
            n = t.serialized,
            r = t.isStringTag;
          return Et(e, n, r), Rt((function() {
            return function(t, e, n) {
              Et(t, e, n);
              var r = t.key + "-" + e.name;
              if (void 0 === t.inserted[e.name]) {
                var i = e;
                do {
                  t.insert(e === i ? "." + r : "", i, t.sheet, !0), i = i.next
                } while (void 0 !== i)
              }
            }(e, n, r)
          })), null
        },
        Ht = Nt((function(t, e, n) {
          var r = t.css;
          "string" == typeof r && void 0 !== e.registered[r] && (r = e.registered[r]);
          var i = t[zt],
            a = [r],
            s = "";
          "string" == typeof t.className ? s = function(t, e, n) {
            var r = "";
            return n.split(" ").forEach((function(n) {
              void 0 !== t[n] ? e.push(t[n] + ";") : r += n + " "
            })), r
          }(e.registered, a, t.className) : null != t.className && (s = t.className + " ");
          var o = Ot(a, void 0, c.useContext(jt));
          s += e.key + "-" + o.name;
          var l = {};
          for (var u in t) Lt.call(t, u) && "css" !== u && u !== zt && (l[u] = t[u]);
          return l.ref = n, l.className = s, c.createElement(c.Fragment, null, c.createElement(Gt, {
            cache: e,
            serialized: o,
            isStringTag: "string" == typeof i
          }), c.createElement(i, l))
        })),
        Wt = Ht,
        Ut = (n(39216), function(t, e) {
          var n = arguments;
          if (null == e || !Lt.call(e, "css")) return c.createElement.apply(void 0, n);
          var r = n.length,
            i = new Array(r);
          i[0] = Wt, i[1] = function(t, e) {
            var n = {};
            for (var r in e) Lt.call(e, r) && (n[r] = e[r]);
            return n[zt] = t, n
          }(t, e);
          for (var a = 2; a < r; a++) i[a] = n[a];
          return c.createElement.apply(null, i)
        });

      function qt() {
        for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
        return Ot(e)
      }
      var Yt = n(77364);
      const $t = Math.min,
        Kt = Math.max,
        Xt = Math.round,
        Zt = Math.floor,
        Jt = t => ({
          x: t,
          y: t
        });

      function Qt(t) {
        return ne(t) ? (t.nodeName || "").toLowerCase() : "#document"
      }

      function te(t) {
        var e;
        return (null == t || null == (e = t.ownerDocument) ? void 0 : e.defaultView) || window
      }

      function ee(t) {
        var e;
        return null == (e = (ne(t) ? t.ownerDocument : t.document) || window.document) ? void 0 : e.documentElement
      }

      function ne(t) {
        return t instanceof Node || t instanceof te(t).Node
      }

      function re(t) {
        return t instanceof Element || t instanceof te(t).Element
      }

      function ie(t) {
        return t instanceof HTMLElement || t instanceof te(t).HTMLElement
      }

      function ae(t) {
        return "undefined" != typeof ShadowRoot && (t instanceof ShadowRoot || t instanceof te(t).ShadowRoot)
      }

      function se(t) {
        const {
          overflow: e,
          overflowX: n,
          overflowY: r,
          display: i
        } = oe(t);
        return /auto|scroll|overlay|hidden|clip/.test(e + r + n) && !["inline", "contents"].includes(i)
      }

      function oe(t) {
        return te(t).getComputedStyle(t)
      }

      function le(t) {
        const e = function(t) {
          if ("html" === Qt(t)) return t;
          const e = t.assignedSlot || t.parentNode || ae(t) && t.host || ee(t);
          return ae(e) ? e.host : e
        }(t);
        return function(t) {
          return ["html", "body", "#document"].includes(Qt(t))
        }(e) ? t.ownerDocument ? t.ownerDocument.body : t.body : ie(e) && se(e) ? e : le(e)
      }

      function ue(t, e, n) {
        var r;
        void 0 === e && (e = []), void 0 === n && (n = !0);
        const i = le(t),
          a = i === (null == (r = t.ownerDocument) ? void 0 : r.body),
          s = te(i);
        return a ? e.concat(s, s.visualViewport || [], se(i) ? i : [], s.frameElement && n ? ue(s.frameElement) : []) : e.concat(i, ue(i, [], n))
      }

      function he(t) {
        return re(t) ? t : t.contextElement
      }

      function ce(t) {
        const e = he(t);
        if (!ie(e)) return Jt(1);
        const n = e.getBoundingClientRect(),
          {
            width: r,
            height: i,
            $: a
          } = function(t) {
            const e = oe(t);
            let n = parseFloat(e.width) || 0,
              r = parseFloat(e.height) || 0;
            const i = ie(t),
              a = i ? t.offsetWidth : n,
              s = i ? t.offsetHeight : r,
              o = Xt(n) !== a || Xt(r) !== s;
            return o && (n = a, r = s), {
              width: n,
              height: r,
              $: o
            }
          }(e);
        let s = (a ? Xt(n.width) : n.width) / r,
          o = (a ? Xt(n.height) : n.height) / i;
        return s && Number.isFinite(s) || (s = 1), o && Number.isFinite(o) || (o = 1), {
          x: s,
          y: o
        }
      }
      const pe = Jt(0);

      function fe(t) {
        const e = te(t);
        return "undefined" != typeof CSS && CSS.supports && CSS.supports("-webkit-backdrop-filter", "none") && e.visualViewport ? {
          x: e.visualViewport.offsetLeft,
          y: e.visualViewport.offsetTop
        } : pe
      }

      function de(t, e, n, r) {
        void 0 === e && (e = !1), void 0 === n && (n = !1);
        const i = t.getBoundingClientRect(),
          a = he(t);
        let s = Jt(1);
        e && (r ? re(r) && (s = ce(r)) : s = ce(t));
        const o = function(t, e, n) {
          return void 0 === e && (e = !1), !(!n || e && n !== te(t)) && e
        }(a, n, r) ? fe(a) : Jt(0);
        let l = (i.left + o.x) / s.x,
          u = (i.top + o.y) / s.y,
          h = i.width / s.x,
          c = i.height / s.y;
        if (a) {
          const t = te(a),
            e = r && re(r) ? te(r) : r;
          let n = t.frameElement;
          for (; n && r && e !== t;) {
            const t = ce(n),
              e = n.getBoundingClientRect(),
              r = oe(n),
              i = e.left + (n.clientLeft + parseFloat(r.paddingLeft)) * t.x,
              a = e.top + (n.clientTop + parseFloat(r.paddingTop)) * t.y;
            l *= t.x, u *= t.y, h *= t.x, c *= t.y, l += i, u += a, n = te(n).frameElement
          }
        }
        return p = {
          width: h,
          height: c,
          x: l,
          y: u
        }, {
          ...p,
          top: p.y,
          left: p.x,
          right: p.x + p.width,
          bottom: p.y + p.height
        };
        var p
      }
      const me = c.useLayoutEffect;
      var ve = ["className", "clearValue", "cx", "getStyles", "getClassNames", "getValue", "hasValue", "isMulti", "isRtl", "options", "selectOption", "selectProps", "setValue", "theme"],
        ge = function() {};

      function ye(t, e) {
        return e ? "-" === e[0] ? t + e : t + "__" + e : t
      }

      function be(t, e) {
        for (var n = arguments.length, r = new Array(n > 2 ? n - 2 : 0), i = 2; i < n; i++) r[i - 2] = arguments[i];
        var a = [].concat(r);
        if (e && t)
          for (var s in e) e.hasOwnProperty(s) && e[s] && a.push("".concat(ye(t, s)));
        return a.filter((function(t) {
          return t
        })).map((function(t) {
          return String(t).trim()
        })).join(" ")
      }
      var xe = function(t) {
          return e = t, Array.isArray(e) ? t.filter(Boolean) : "object" === (0, y.c)(t) && null !== t ? [t] : [];
          var e
        },
        Se = function(t) {
          return t.className, t.clearValue, t.cx, t.getStyles, t.getClassNames, t.getValue, t.hasValue, t.isMulti, t.isRtl, t.options, t.selectOption, t.selectProps, t.setValue, t.theme, a({}, h(t, ve))
        },
        Ee = function(t, e, n) {
          var r = t.cx,
            i = t.getStyles,
            a = t.getClassNames,
            s = t.className;
          return {
            css: i(e, t),
            className: r(null != n ? n : {}, a(e, t), s)
          }
        };

      function Pe(t) {
        return [document.documentElement, document.body, window].indexOf(t) > -1
      }

      function Ce(t) {
        return Pe(t) ? window.pageYOffset : t.scrollTop
      }

      function we(t, e) {
        Pe(t) ? window.scrollTo(0, e) : t.scrollTop = e
      }

      function Me(t, e) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 200,
          r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : ge,
          i = Ce(t),
          a = e - i,
          s = 0;
        ! function e() {
          var o, l = a * ((o = (o = s += 10) / n - 1) * o * o + 1) + i;
          we(t, l), s < n ? window.requestAnimationFrame(e) : r(t)
        }()
      }

      function Te(t, e) {
        var n = t.getBoundingClientRect(),
          r = e.getBoundingClientRect(),
          i = e.offsetHeight / 3;
        r.bottom + i > n.bottom ? we(t, Math.min(e.offsetTop + e.clientHeight - t.offsetHeight + i, t.scrollHeight)) : r.top - i < n.top && we(t, Math.max(e.offsetTop - i, 0))
      }

      function Ae() {
        try {
          return document.createEvent("TouchEvent"), !0
        } catch (t) {
          return !1
        }
      }
      var ke = !1,
        _e = {
          get passive() {
            return ke = !0
          }
        },
        De = "undefined" != typeof window ? window : {};
      De.addEventListener && De.removeEventListener && (De.addEventListener("p", ge, _e), De.removeEventListener("p", ge, !1));
      var Ie = ke;

      function Fe(t) {
        return null != t
      }

      function Oe(t, e, n) {
        return t ? e : n
      }
      var Ve = ["children", "innerProps"],
        Re = ["children", "innerProps"];
      var Le, Be, Ne, je = function(t) {
          return "auto" === t ? "bottom" : t
        },
        ze = (0, c.createContext)(null),
        Ge = function(t) {
          var e = t.children,
            n = t.minMenuHeight,
            r = t.maxMenuHeight,
            i = t.menuPlacement,
            s = t.menuPosition,
            o = t.menuShouldScrollIntoView,
            u = t.theme,
            h = ((0, c.useContext)(ze) || {}).setPortalPlacement,
            p = (0, c.useRef)(null),
            f = l((0, c.useState)(r), 2),
            d = f[0],
            m = f[1],
            v = l((0, c.useState)(null), 2),
            g = v[0],
            y = v[1],
            b = u.spacing.controlHeight;
          return me((function() {
            var t = p.current;
            if (t) {
              var e = "fixed" === s,
                a = function(t) {
                  var e = t.maxHeight,
                    n = t.menuEl,
                    r = t.minHeight,
                    i = t.placement,
                    a = t.shouldScroll,
                    s = t.isFixedPosition,
                    o = t.controlHeight,
                    l = function(t) {
                      var e = getComputedStyle(t),
                        n = "absolute" === e.position,
                        r = /(auto|scroll)/;
                      if ("fixed" === e.position) return document.documentElement;
                      for (var i = t; i = i.parentElement;)
                        if (e = getComputedStyle(i), (!n || "static" !== e.position) && r.test(e.overflow + e.overflowY + e.overflowX)) return i;
                      return document.documentElement
                    }(n),
                    u = {
                      placement: "bottom",
                      maxHeight: e
                    };
                  if (!n || !n.offsetParent) return u;
                  var h, c = l.getBoundingClientRect().height,
                    p = n.getBoundingClientRect(),
                    f = p.bottom,
                    d = p.height,
                    m = p.top,
                    v = n.offsetParent.getBoundingClientRect().top,
                    g = s || Pe(h = l) ? window.innerHeight : h.clientHeight,
                    y = Ce(l),
                    b = parseInt(getComputedStyle(n).marginBottom, 10),
                    x = parseInt(getComputedStyle(n).marginTop, 10),
                    S = v - x,
                    E = g - m,
                    P = S + y,
                    C = c - y - m,
                    w = f - g + y + b,
                    M = y + m - x,
                    T = 160;
                  switch (i) {
                    case "auto":
                    case "bottom":
                      if (E >= d) return {
                        placement: "bottom",
                        maxHeight: e
                      };
                      if (C >= d && !s) return a && Me(l, w, T), {
                        placement: "bottom",
                        maxHeight: e
                      };
                      if (!s && C >= r || s && E >= r) return a && Me(l, w, T), {
                        placement: "bottom",
                        maxHeight: s ? E - b : C - b
                      };
                      if ("auto" === i || s) {
                        var A = e,
                          k = s ? S : P;
                        return k >= r && (A = Math.min(k - b - o, e)), {
                          placement: "top",
                          maxHeight: A
                        }
                      }
                      if ("bottom" === i) return a && we(l, w), {
                        placement: "bottom",
                        maxHeight: e
                      };
                      break;
                    case "top":
                      if (S >= d) return {
                        placement: "top",
                        maxHeight: e
                      };
                      if (P >= d && !s) return a && Me(l, M, T), {
                        placement: "top",
                        maxHeight: e
                      };
                      if (!s && P >= r || s && S >= r) {
                        var _ = e;
                        return (!s && P >= r || s && S >= r) && (_ = s ? S - x : P - x), a && Me(l, M, T), {
                          placement: "top",
                          maxHeight: _
                        }
                      }
                      return {
                        placement: "bottom", maxHeight: e
                      };
                    default:
                      throw new Error('Invalid placement provided "'.concat(i, '".'))
                  }
                  return u
                }({
                  maxHeight: r,
                  menuEl: t,
                  minHeight: n,
                  placement: i,
                  shouldScroll: o && !e,
                  isFixedPosition: e,
                  controlHeight: b
                });
              m(a.maxHeight), y(a.placement), null == h || h(a.placement)
            }
          }), [r, i, s, o, n, h, b]), e({
            ref: p,
            placerProps: a(a({}, t), {}, {
              placement: g || je(i),
              maxHeight: d
            })
          })
        },
        He = function(t, e) {
          var n = t.theme,
            r = n.spacing.baseUnit,
            i = n.colors;
          return a({
            textAlign: "center"
          }, e ? {} : {
            color: i.neutral40,
            padding: "".concat(2 * r, "px ").concat(3 * r, "px")
          })
        },
        We = He,
        Ue = He,
        qe = ["size"],
        Ye = ["innerProps", "isRtl", "size"],
        $e = {
          name: "8mmkcg",
          styles: "display:inline-block;fill:currentColor;line-height:1;stroke:currentColor;stroke-width:0"
        },
        Ke = function(t) {
          var e = t.size,
            n = h(t, qe);
          return Ut("svg", (0, f.c)({
            height: e,
            width: e,
            viewBox: "0 0 20 20",
            "aria-hidden": "true",
            focusable: "false",
            css: $e
          }, n))
        },
        Xe = function(t) {
          return Ut(Ke, (0, f.c)({
            size: 20
          }, t), Ut("path", {
            d: "M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"
          }))
        },
        Ze = function(t) {
          return Ut(Ke, (0, f.c)({
            size: 20
          }, t), Ut("path", {
            d: "M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"
          }))
        },
        Je = function(t, e) {
          var n = t.isFocused,
            r = t.theme,
            i = r.spacing.baseUnit,
            s = r.colors;
          return a({
            label: "indicatorContainer",
            display: "flex",
            transition: "color 150ms"
          }, e ? {} : {
            color: n ? s.neutral60 : s.neutral20,
            padding: 2 * i,
            ":hover": {
              color: n ? s.neutral80 : s.neutral40
            }
          })
        },
        Qe = Je,
        tn = Je,
        en = function() {
          var t = qt.apply(void 0, arguments),
            e = "animation-" + t.name;
          return {
            name: e,
            styles: "@keyframes " + e + "{" + t.styles + "}",
            anim: 1,
            toString: function() {
              return "_EMO_" + this.name + "_" + this.styles + "_EMO_"
            }
          }
        }(Le || (Be = ["\n  0%, 80%, 100% { opacity: 0; }\n  40% { opacity: 1; }\n"], Ne || (Ne = Be.slice(0)), Le = Object.freeze(Object.defineProperties(Be, {
          raw: {
            value: Object.freeze(Ne)
          }
        })))),
        nn = function(t) {
          var e = t.delay,
            n = t.offset;
          return Ut("span", {
            css: qt({
              animation: "".concat(en, " 1s ease-in-out ").concat(e, "ms infinite;"),
              backgroundColor: "currentColor",
              borderRadius: "1em",
              display: "inline-block",
              marginLeft: n ? "1em" : void 0,
              height: "1em",
              verticalAlign: "top",
              width: "1em"
            }, "", "")
          })
        },
        rn = ["data"],
        an = ["innerRef", "isDisabled", "isHidden", "inputClassName"],
        sn = {
          gridArea: "1 / 2",
          font: "inherit",
          minWidth: "2px",
          border: 0,
          margin: 0,
          outline: 0,
          padding: 0
        },
        on = {
          flex: "1 1 auto",
          display: "inline-grid",
          gridArea: "1 / 1 / 2 / 3",
          gridTemplateColumns: "0 min-content",
          "&:after": a({
            content: 'attr(data-value) " "',
            visibility: "hidden",
            whiteSpace: "pre"
          }, sn)
        },
        ln = function(t) {
          return a({
            label: "input",
            color: "inherit",
            background: 0,
            opacity: t ? 0 : 1,
            width: "100%"
          }, sn)
        },
        un = function(t) {
          var e = t.children,
            n = t.innerProps;
          return Ut("div", n, e)
        },
        hn = {
          ClearIndicator: function(t) {
            var e = t.children,
              n = t.innerProps;
            return Ut("div", (0, f.c)({}, Ee(t, "clearIndicator", {
              indicator: !0,
              "clear-indicator": !0
            }), n), e || Ut(Xe, null))
          },
          Control: function(t) {
            var e = t.children,
              n = t.isDisabled,
              r = t.isFocused,
              i = t.innerRef,
              a = t.innerProps,
              s = t.menuIsOpen;
            return Ut("div", (0, f.c)({
              ref: i
            }, Ee(t, "control", {
              control: !0,
              "control--is-disabled": n,
              "control--is-focused": r,
              "control--menu-is-open": s
            }), a, {
              "aria-disabled": n || void 0
            }), e)
          },
          DropdownIndicator: function(t) {
            var e = t.children,
              n = t.innerProps;
            return Ut("div", (0, f.c)({}, Ee(t, "dropdownIndicator", {
              indicator: !0,
              "dropdown-indicator": !0
            }), n), e || Ut(Ze, null))
          },
          DownChevron: Ze,
          CrossIcon: Xe,
          Group: function(t) {
            var e = t.children,
              n = t.cx,
              r = t.getStyles,
              i = t.getClassNames,
              a = t.Heading,
              s = t.headingProps,
              o = t.innerProps,
              l = t.label,
              u = t.theme,
              h = t.selectProps;
            return Ut("div", (0, f.c)({}, Ee(t, "group", {
              group: !0
            }), o), Ut(a, (0, f.c)({}, s, {
              selectProps: h,
              theme: u,
              getStyles: r,
              getClassNames: i,
              cx: n
            }), l), Ut("div", null, e))
          },
          GroupHeading: function(t) {
            var e = Se(t);
            e.data;
            var n = h(e, rn);
            return Ut("div", (0, f.c)({}, Ee(t, "groupHeading", {
              "group-heading": !0
            }), n))
          },
          IndicatorsContainer: function(t) {
            var e = t.children,
              n = t.innerProps;
            return Ut("div", (0, f.c)({}, Ee(t, "indicatorsContainer", {
              indicators: !0
            }), n), e)
          },
          IndicatorSeparator: function(t) {
            var e = t.innerProps;
            return Ut("span", (0, f.c)({}, e, Ee(t, "indicatorSeparator", {
              "indicator-separator": !0
            })))
          },
          Input: function(t) {
            var e = t.cx,
              n = t.value,
              r = Se(t),
              i = r.innerRef,
              a = r.isDisabled,
              s = r.isHidden,
              o = r.inputClassName,
              l = h(r, an);
            return Ut("div", (0, f.c)({}, Ee(t, "input", {
              "input-container": !0
            }), {
              "data-value": n || ""
            }), Ut("input", (0, f.c)({
              className: e({
                input: !0
              }, o),
              ref: i,
              style: ln(s),
              disabled: a
            }, l)))
          },
          LoadingIndicator: function(t) {
            var e = t.innerProps,
              n = t.isRtl,
              r = t.size,
              i = void 0 === r ? 4 : r,
              s = h(t, Ye);
            return Ut("div", (0, f.c)({}, Ee(a(a({}, s), {}, {
              innerProps: e,
              isRtl: n,
              size: i
            }), "loadingIndicator", {
              indicator: !0,
              "loading-indicator": !0
            }), e), Ut(nn, {
              delay: 0,
              offset: n
            }), Ut(nn, {
              delay: 160,
              offset: !0
            }), Ut(nn, {
              delay: 320,
              offset: !n
            }))
          },
          Menu: function(t) {
            var e = t.children,
              n = t.innerRef,
              r = t.innerProps;
            return Ut("div", (0, f.c)({}, Ee(t, "menu", {
              menu: !0
            }), {
              ref: n
            }, r), e)
          },
          MenuList: function(t) {
            var e = t.children,
              n = t.innerProps,
              r = t.innerRef,
              i = t.isMulti;
            return Ut("div", (0, f.c)({}, Ee(t, "menuList", {
              "menu-list": !0,
              "menu-list--is-multi": i
            }), {
              ref: r
            }, n), e)
          },
          MenuPortal: function(t) {
            var e = t.appendTo,
              n = t.children,
              r = t.controlElement,
              i = t.innerProps,
              s = t.menuPlacement,
              o = t.menuPosition,
              u = (0, c.useRef)(null),
              h = (0, c.useRef)(null),
              p = l((0, c.useState)(je(s)), 2),
              d = p[0],
              m = p[1],
              v = (0, c.useMemo)((function() {
                return {
                  setPortalPlacement: m
                }
              }), []),
              g = l((0, c.useState)(null), 2),
              y = g[0],
              b = g[1],
              x = (0, c.useCallback)((function() {
                if (r) {
                  var t = function(t) {
                      var e = t.getBoundingClientRect();
                      return {
                        bottom: e.bottom,
                        height: e.height,
                        left: e.left,
                        right: e.right,
                        top: e.top,
                        width: e.width
                      }
                    }(r),
                    e = "fixed" === o ? 0 : window.pageYOffset,
                    n = t[d] + e;
                  n === (null == y ? void 0 : y.offset) && t.left === (null == y ? void 0 : y.rect.left) && t.width === (null == y ? void 0 : y.rect.width) || b({
                    offset: n,
                    rect: t
                  })
                }
              }), [r, o, d, null == y ? void 0 : y.offset, null == y ? void 0 : y.rect.left, null == y ? void 0 : y.rect.width]);
            me((function() {
              x()
            }), [x]);
            var S = (0, c.useCallback)((function() {
              "function" == typeof h.current && (h.current(), h.current = null), r && u.current && (h.current = function(t, e, n, r) {
                void 0 === r && (r = {});
                const {
                  ancestorScroll: i = !0,
                  ancestorResize: a = !0,
                  elementResize: s = "function" == typeof ResizeObserver,
                  layoutShift: o = "function" == typeof IntersectionObserver,
                  animationFrame: l = !1
                } = r, u = he(t), h = i || a ? [...u ? ue(u) : [], ...ue(e)] : [];
                h.forEach((t => {
                  i && t.addEventListener("scroll", n, {
                    passive: !0
                  }), a && t.addEventListener("resize", n)
                }));
                const c = u && o ? function(t, e) {
                  let n, r = null;
                  const i = ee(t);

                  function a() {
                    clearTimeout(n), r && r.disconnect(), r = null
                  }
                  return function s(o, l) {
                    void 0 === o && (o = !1), void 0 === l && (l = 1), a();
                    const {
                      left: u,
                      top: h,
                      width: c,
                      height: p
                    } = t.getBoundingClientRect();
                    if (o || e(), !c || !p) return;
                    const f = {
                      rootMargin: -Zt(h) + "px " + -Zt(i.clientWidth - (u + c)) + "px " + -Zt(i.clientHeight - (h + p)) + "px " + -Zt(u) + "px",
                      threshold: Kt(0, $t(1, l)) || 1
                    };
                    let d = !0;

                    function m(t) {
                      const e = t[0].intersectionRatio;
                      if (e !== l) {
                        if (!d) return s();
                        e ? s(!1, e) : n = setTimeout((() => {
                          s(!1, 1e-7)
                        }), 100)
                      }
                      d = !1
                    }
                    try {
                      r = new IntersectionObserver(m, {
                        ...f,
                        root: i.ownerDocument
                      })
                    } catch (t) {
                      r = new IntersectionObserver(m, f)
                    }
                    r.observe(t)
                  }(!0), a
                }(u, n) : null;
                let p, f = -1,
                  d = null;
                s && (d = new ResizeObserver((t => {
                  let [r] = t;
                  r && r.target === u && d && (d.unobserve(e), cancelAnimationFrame(f), f = requestAnimationFrame((() => {
                    d && d.observe(e)
                  }))), n()
                })), u && !l && d.observe(u), d.observe(e));
                let m = l ? de(t) : null;
                return l && function e() {
                  const r = de(t);
                  !m || r.x === m.x && r.y === m.y && r.width === m.width && r.height === m.height || n(), m = r, p = requestAnimationFrame(e)
                }(), n(), () => {
                  h.forEach((t => {
                    i && t.removeEventListener("scroll", n), a && t.removeEventListener("resize", n)
                  })), c && c(), d && d.disconnect(), d = null, l && cancelAnimationFrame(p)
                }
              }(r, u.current, x, {
                elementResize: "ResizeObserver" in window
              }))
            }), [r, x]);
            me((function() {
              S()
            }), [S]);
            var E = (0, c.useCallback)((function(t) {
              u.current = t, S()
            }), [S]);
            if (!e && "fixed" !== o || !y) return null;
            var P = Ut("div", (0, f.c)({
              ref: E
            }, Ee(a(a({}, t), {}, {
              offset: y.offset,
              position: o,
              rect: y.rect
            }), "menuPortal", {
              "menu-portal": !0
            }), i), n);
            return Ut(ze.Provider, {
              value: v
            }, e ? (0, Yt.createPortal)(P, e) : P)
          },
          LoadingMessage: function(t) {
            var e = t.children,
              n = void 0 === e ? "Loading..." : e,
              r = t.innerProps,
              i = h(t, Re);
            return Ut("div", (0, f.c)({}, Ee(a(a({}, i), {}, {
              children: n,
              innerProps: r
            }), "loadingMessage", {
              "menu-notice": !0,
              "menu-notice--loading": !0
            }), r), n)
          },
          NoOptionsMessage: function(t) {
            var e = t.children,
              n = void 0 === e ? "No options" : e,
              r = t.innerProps,
              i = h(t, Ve);
            return Ut("div", (0, f.c)({}, Ee(a(a({}, i), {}, {
              children: n,
              innerProps: r
            }), "noOptionsMessage", {
              "menu-notice": !0,
              "menu-notice--no-options": !0
            }), r), n)
          },
          MultiValue: function(t) {
            var e = t.children,
              n = t.components,
              r = t.data,
              i = t.innerProps,
              s = t.isDisabled,
              o = t.removeProps,
              l = t.selectProps,
              u = n.Container,
              h = n.Label,
              c = n.Remove;
            return Ut(u, {
              data: r,
              innerProps: a(a({}, Ee(t, "multiValue", {
                "multi-value": !0,
                "multi-value--is-disabled": s
              })), i),
              selectProps: l
            }, Ut(h, {
              data: r,
              innerProps: a({}, Ee(t, "multiValueLabel", {
                "multi-value__label": !0
              })),
              selectProps: l
            }, e), Ut(c, {
              data: r,
              innerProps: a(a({}, Ee(t, "multiValueRemove", {
                "multi-value__remove": !0
              })), {}, {
                "aria-label": "Remove ".concat(e || "option")
              }, o),
              selectProps: l
            }))
          },
          MultiValueContainer: un,
          MultiValueLabel: un,
          MultiValueRemove: function(t) {
            var e = t.children,
              n = t.innerProps;
            return Ut("div", (0, f.c)({
              role: "button"
            }, n), e || Ut(Xe, {
              size: 14
            }))
          },
          Option: function(t) {
            var e = t.children,
              n = t.isDisabled,
              r = t.isFocused,
              i = t.isSelected,
              a = t.innerRef,
              s = t.innerProps;
            return Ut("div", (0, f.c)({}, Ee(t, "option", {
              option: !0,
              "option--is-disabled": n,
              "option--is-focused": r,
              "option--is-selected": i
            }), {
              ref: a,
              "aria-disabled": n
            }, s), e)
          },
          Placeholder: function(t) {
            var e = t.children,
              n = t.innerProps;
            return Ut("div", (0, f.c)({}, Ee(t, "placeholder", {
              placeholder: !0
            }), n), e)
          },
          SelectContainer: function(t) {
            var e = t.children,
              n = t.innerProps,
              r = t.isDisabled,
              i = t.isRtl;
            return Ut("div", (0, f.c)({}, Ee(t, "container", {
              "--is-disabled": r,
              "--is-rtl": i
            }), n), e)
          },
          SingleValue: function(t) {
            var e = t.children,
              n = t.isDisabled,
              r = t.innerProps;
            return Ut("div", (0, f.c)({}, Ee(t, "singleValue", {
              "single-value": !0,
              "single-value--is-disabled": n
            }), r), e)
          },
          ValueContainer: function(t) {
            var e = t.children,
              n = t.innerProps,
              r = t.isMulti,
              i = t.hasValue;
            return Ut("div", (0, f.c)({}, Ee(t, "valueContainer", {
              "value-container": !0,
              "value-container--is-multi": r,
              "value-container--has-value": i
            }), n), e)
          }
        },
        cn = Number.isNaN || function(t) {
          return "number" == typeof t && t != t
        };

      function pn(t, e) {
        if (t.length !== e.length) return !1;
        for (var n = 0; n < t.length; n++)
          if (!((r = t[n]) === (i = e[n]) || cn(r) && cn(i))) return !1;
        var r, i;
        return !0
      }
      for (var fn = {
          name: "7pg0cj-a11yText",
          styles: "label:a11yText;z-index:9999;border:0;clip:rect(1px, 1px, 1px, 1px);height:1px;width:1px;position:absolute;overflow:hidden;padding:0;white-space:nowrap"
        }, dn = function(t) {
          return Ut("span", (0, f.c)({
            css: fn
          }, t))
        }, mn = {
          guidance: function(t) {
            var e = t.isSearchable,
              n = t.isMulti,
              r = t.tabSelectsValue,
              i = t.context,
              a = t.isInitialFocus;
            switch (i) {
              case "menu":
                return "Use Up and Down to choose options, press Enter to select the currently focused option, press Escape to exit the menu".concat(r ? ", press Tab to select the option and exit the menu" : "", ".");
              case "input":
                return a ? "".concat(t["aria-label"] || "Select", " is focused ").concat(e ? ",type to refine list" : "", ", press Down to open the menu, ").concat(n ? " press left to focus selected values" : "") : "";
              case "value":
                return "Use left and right to toggle between focused values, press Backspace to remove the currently focused value";
              default:
                return ""
            }
          },
          onChange: function(t) {
            var e = t.action,
              n = t.label,
              r = void 0 === n ? "" : n,
              i = t.labels,
              a = t.isDisabled;
            switch (e) {
              case "deselect-option":
              case "pop-value":
              case "remove-value":
                return "option ".concat(r, ", deselected.");
              case "clear":
                return "All selected options have been cleared.";
              case "initial-input-focus":
                return "option".concat(i.length > 1 ? "s" : "", " ").concat(i.join(","), ", selected.");
              case "select-option":
                return "option ".concat(r, a ? " is disabled. Select another option." : ", selected.");
              default:
                return ""
            }
          },
          onFocus: function(t) {
            var e = t.context,
              n = t.focused,
              r = t.options,
              i = t.label,
              a = void 0 === i ? "" : i,
              s = t.selectValue,
              o = t.isDisabled,
              l = t.isSelected,
              u = t.isAppleDevice,
              h = function(t, e) {
                return t && t.length ? "".concat(t.indexOf(e) + 1, " of ").concat(t.length) : ""
              };
            if ("value" === e && s) return "value ".concat(a, " focused, ").concat(h(s, n), ".");
            if ("menu" === e && u) {
              var c = o ? " disabled" : "",
                p = "".concat(l ? " selected" : "").concat(c);
              return "".concat(a).concat(p, ", ").concat(h(r, n), ".")
            }
            return ""
          },
          onFilter: function(t) {
            var e = t.inputValue,
              n = t.resultsMessage;
            return "".concat(n).concat(e ? " for search term " + e : "", ".")
          }
        }, vn = function(t) {
          var e = t.ariaSelection,
            n = t.focusedOption,
            r = t.focusedValue,
            i = t.focusableOptions,
            s = t.isFocused,
            o = t.selectValue,
            l = t.selectProps,
            u = t.id,
            h = t.isAppleDevice,
            p = l.ariaLiveMessages,
            f = l.getOptionLabel,
            d = l.inputValue,
            m = l.isMulti,
            v = l.isOptionDisabled,
            g = l.isSearchable,
            y = l.menuIsOpen,
            b = l.options,
            x = l.screenReaderStatus,
            S = l.tabSelectsValue,
            E = l.isLoading,
            P = l["aria-label"],
            C = l["aria-live"],
            w = (0, c.useMemo)((function() {
              return a(a({}, mn), p || {})
            }), [p]),
            M = (0, c.useMemo)((function() {
              var t, n = "";
              if (e && w.onChange) {
                var r = e.option,
                  i = e.options,
                  s = e.removedValue,
                  l = e.removedValues,
                  u = e.value,
                  h = s || r || (t = u, Array.isArray(t) ? null : t),
                  c = h ? f(h) : "",
                  p = i || l || void 0,
                  d = p ? p.map(f) : [],
                  m = a({
                    isDisabled: h && v(h, o),
                    label: c,
                    labels: d
                  }, e);
                n = w.onChange(m)
              }
              return n
            }), [e, w, v, o, f]),
            T = (0, c.useMemo)((function() {
              var t = "",
                e = n || r,
                a = !!(n && o && o.includes(n));
              if (e && w.onFocus) {
                var s = {
                  focused: e,
                  label: f(e),
                  isDisabled: v(e, o),
                  isSelected: a,
                  options: i,
                  context: e === n ? "menu" : "value",
                  selectValue: o,
                  isAppleDevice: h
                };
                t = w.onFocus(s)
              }
              return t
            }), [n, r, f, v, w, i, o, h]),
            A = (0, c.useMemo)((function() {
              var t = "";
              if (y && b.length && !E && w.onFilter) {
                var e = x({
                  count: i.length
                });
                t = w.onFilter({
                  inputValue: d,
                  resultsMessage: e
                })
              }
              return t
            }), [i, d, y, w, b, x, E]),
            k = "initial-input-focus" === (null == e ? void 0 : e.action),
            _ = (0, c.useMemo)((function() {
              var t = "";
              if (w.guidance) {
                var e = r ? "value" : y ? "menu" : "input";
                t = w.guidance({
                  "aria-label": P,
                  context: e,
                  isDisabled: n && v(n, o),
                  isMulti: m,
                  isSearchable: g,
                  tabSelectsValue: S,
                  isInitialFocus: k
                })
              }
              return t
            }), [P, n, r, m, v, g, y, w, o, S, k]),
            D = Ut(c.Fragment, null, Ut("span", {
              id: "aria-selection"
            }, M), Ut("span", {
              id: "aria-focused"
            }, T), Ut("span", {
              id: "aria-results"
            }, A), Ut("span", {
              id: "aria-guidance"
            }, _));
          return Ut(c.Fragment, null, Ut(dn, {
            id: u
          }, k && D), Ut(dn, {
            "aria-live": C,
            "aria-atomic": "false",
            "aria-relevant": "additions text",
            role: "log"
          }, s && !k && D))
        }, gn = [{
          base: "A",
          letters: "AⒶＡÀÁÂẦẤẪẨÃĀĂẰẮẴẲȦǠÄǞẢÅǺǍȀȂẠẬẶḀĄȺⱯ"
        }, {
          base: "AA",
          letters: "Ꜳ"
        }, {
          base: "AE",
          letters: "ÆǼǢ"
        }, {
          base: "AO",
          letters: "Ꜵ"
        }, {
          base: "AU",
          letters: "Ꜷ"
        }, {
          base: "AV",
          letters: "ꜸꜺ"
        }, {
          base: "AY",
          letters: "Ꜽ"
        }, {
          base: "B",
          letters: "BⒷＢḂḄḆɃƂƁ"
        }, {
          base: "C",
          letters: "CⒸＣĆĈĊČÇḈƇȻꜾ"
        }, {
          base: "D",
          letters: "DⒹＤḊĎḌḐḒḎĐƋƊƉꝹ"
        }, {
          base: "DZ",
          letters: "ǱǄ"
        }, {
          base: "Dz",
          letters: "ǲǅ"
        }, {
          base: "E",
          letters: "EⒺＥÈÉÊỀẾỄỂẼĒḔḖĔĖËẺĚȄȆẸỆȨḜĘḘḚƐƎ"
        }, {
          base: "F",
          letters: "FⒻＦḞƑꝻ"
        }, {
          base: "G",
          letters: "GⒼＧǴĜḠĞĠǦĢǤƓꞠꝽꝾ"
        }, {
          base: "H",
          letters: "HⒽＨĤḢḦȞḤḨḪĦⱧⱵꞍ"
        }, {
          base: "I",
          letters: "IⒾＩÌÍÎĨĪĬİÏḮỈǏȈȊỊĮḬƗ"
        }, {
          base: "J",
          letters: "JⒿＪĴɈ"
        }, {
          base: "K",
          letters: "KⓀＫḰǨḲĶḴƘⱩꝀꝂꝄꞢ"
        }, {
          base: "L",
          letters: "LⓁＬĿĹĽḶḸĻḼḺŁȽⱢⱠꝈꝆꞀ"
        }, {
          base: "LJ",
          letters: "Ǉ"
        }, {
          base: "Lj",
          letters: "ǈ"
        }, {
          base: "M",
          letters: "MⓂＭḾṀṂⱮƜ"
        }, {
          base: "N",
          letters: "NⓃＮǸŃÑṄŇṆŅṊṈȠƝꞐꞤ"
        }, {
          base: "NJ",
          letters: "Ǌ"
        }, {
          base: "Nj",
          letters: "ǋ"
        }, {
          base: "O",
          letters: "OⓄＯÒÓÔỒỐỖỔÕṌȬṎŌṐṒŎȮȰÖȪỎŐǑȌȎƠỜỚỠỞỢỌỘǪǬØǾƆƟꝊꝌ"
        }, {
          base: "OI",
          letters: "Ƣ"
        }, {
          base: "OO",
          letters: "Ꝏ"
        }, {
          base: "OU",
          letters: "Ȣ"
        }, {
          base: "P",
          letters: "PⓅＰṔṖƤⱣꝐꝒꝔ"
        }, {
          base: "Q",
          letters: "QⓆＱꝖꝘɊ"
        }, {
          base: "R",
          letters: "RⓇＲŔṘŘȐȒṚṜŖṞɌⱤꝚꞦꞂ"
        }, {
          base: "S",
          letters: "SⓈＳẞŚṤŜṠŠṦṢṨȘŞⱾꞨꞄ"
        }, {
          base: "T",
          letters: "TⓉＴṪŤṬȚŢṰṮŦƬƮȾꞆ"
        }, {
          base: "TZ",
          letters: "Ꜩ"
        }, {
          base: "U",
          letters: "UⓊＵÙÚÛŨṸŪṺŬÜǛǗǕǙỦŮŰǓȔȖƯỪỨỮỬỰỤṲŲṶṴɄ"
        }, {
          base: "V",
          letters: "VⓋＶṼṾƲꝞɅ"
        }, {
          base: "VY",
          letters: "Ꝡ"
        }, {
          base: "W",
          letters: "WⓌＷẀẂŴẆẄẈⱲ"
        }, {
          base: "X",
          letters: "XⓍＸẊẌ"
        }, {
          base: "Y",
          letters: "YⓎＹỲÝŶỸȲẎŸỶỴƳɎỾ"
        }, {
          base: "Z",
          letters: "ZⓏＺŹẐŻŽẒẔƵȤⱿⱫꝢ"
        }, {
          base: "a",
          letters: "aⓐａẚàáâầấẫẩãāăằắẵẳȧǡäǟảåǻǎȁȃạậặḁąⱥɐ"
        }, {
          base: "aa",
          letters: "ꜳ"
        }, {
          base: "ae",
          letters: "æǽǣ"
        }, {
          base: "ao",
          letters: "ꜵ"
        }, {
          base: "au",
          letters: "ꜷ"
        }, {
          base: "av",
          letters: "ꜹꜻ"
        }, {
          base: "ay",
          letters: "ꜽ"
        }, {
          base: "b",
          letters: "bⓑｂḃḅḇƀƃɓ"
        }, {
          base: "c",
          letters: "cⓒｃćĉċčçḉƈȼꜿↄ"
        }, {
          base: "d",
          letters: "dⓓｄḋďḍḑḓḏđƌɖɗꝺ"
        }, {
          base: "dz",
          letters: "ǳǆ"
        }, {
          base: "e",
          letters: "eⓔｅèéêềếễểẽēḕḗĕėëẻěȅȇẹệȩḝęḙḛɇɛǝ"
        }, {
          base: "f",
          letters: "fⓕｆḟƒꝼ"
        }, {
          base: "g",
          letters: "gⓖｇǵĝḡğġǧģǥɠꞡᵹꝿ"
        }, {
          base: "h",
          letters: "hⓗｈĥḣḧȟḥḩḫẖħⱨⱶɥ"
        }, {
          base: "hv",
          letters: "ƕ"
        }, {
          base: "i",
          letters: "iⓘｉìíîĩīĭïḯỉǐȉȋịįḭɨı"
        }, {
          base: "j",
          letters: "jⓙｊĵǰɉ"
        }, {
          base: "k",
          letters: "kⓚｋḱǩḳķḵƙⱪꝁꝃꝅꞣ"
        }, {
          base: "l",
          letters: "lⓛｌŀĺľḷḹļḽḻſłƚɫⱡꝉꞁꝇ"
        }, {
          base: "lj",
          letters: "ǉ"
        }, {
          base: "m",
          letters: "mⓜｍḿṁṃɱɯ"
        }, {
          base: "n",
          letters: "nⓝｎǹńñṅňṇņṋṉƞɲŉꞑꞥ"
        }, {
          base: "nj",
          letters: "ǌ"
        }, {
          base: "o",
          letters: "oⓞｏòóôồốỗổõṍȭṏōṑṓŏȯȱöȫỏőǒȍȏơờớỡởợọộǫǭøǿɔꝋꝍɵ"
        }, {
          base: "oi",
          letters: "ƣ"
        }, {
          base: "ou",
          letters: "ȣ"
        }, {
          base: "oo",
          letters: "ꝏ"
        }, {
          base: "p",
          letters: "pⓟｐṕṗƥᵽꝑꝓꝕ"
        }, {
          base: "q",
          letters: "qⓠｑɋꝗꝙ"
        }, {
          base: "r",
          letters: "rⓡｒŕṙřȑȓṛṝŗṟɍɽꝛꞧꞃ"
        }, {
          base: "s",
          letters: "sⓢｓßśṥŝṡšṧṣṩșşȿꞩꞅẛ"
        }, {
          base: "t",
          letters: "tⓣｔṫẗťṭțţṱṯŧƭʈⱦꞇ"
        }, {
          base: "tz",
          letters: "ꜩ"
        }, {
          base: "u",
          letters: "uⓤｕùúûũṹūṻŭüǜǘǖǚủůűǔȕȗưừứữửựụṳųṷṵʉ"
        }, {
          base: "v",
          letters: "vⓥｖṽṿʋꝟʌ"
        }, {
          base: "vy",
          letters: "ꝡ"
        }, {
          base: "w",
          letters: "wⓦｗẁẃŵẇẅẘẉⱳ"
        }, {
          base: "x",
          letters: "xⓧｘẋẍ"
        }, {
          base: "y",
          letters: "yⓨｙỳýŷỹȳẏÿỷẙỵƴɏỿ"
        }, {
          base: "z",
          letters: "zⓩｚźẑżžẓẕƶȥɀⱬꝣ"
        }], yn = new RegExp("[" + gn.map((function(t) {
          return t.letters
        })).join("") + "]", "g"), bn = {}, xn = 0; xn < gn.length; xn++)
        for (var Sn = gn[xn], En = 0; En < Sn.letters.length; En++) bn[Sn.letters[En]] = Sn.base;
      var Pn = function(t) {
          return t.replace(yn, (function(t) {
            return bn[t]
          }))
        },
        Cn = function(t, e) {
          void 0 === e && (e = pn);
          var n = null;

          function r() {
            for (var r = [], i = 0; i < arguments.length; i++) r[i] = arguments[i];
            if (n && n.lastThis === this && e(r, n.lastArgs)) return n.lastResult;
            var a = t.apply(this, r);
            return n = {
              lastResult: a,
              lastArgs: r,
              lastThis: this
            }, a
          }
          return r.clear = function() {
            n = null
          }, r
        }(Pn),
        wn = function(t) {
          return t.replace(/^\s+|\s+$/g, "")
        },
        Mn = function(t) {
          return "".concat(t.label, " ").concat(t.value)
        },
        Tn = ["innerRef"];

      function An(t) {
        var e = t.innerRef,
          n = function(t) {
            for (var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), r = 1; r < e; r++) n[r - 1] = arguments[r];
            var i = Object.entries(t).filter((function(t) {
              var e = l(t, 1)[0];
              return !n.includes(e)
            }));
            return i.reduce((function(t, e) {
              var n = l(e, 2),
                r = n[0],
                i = n[1];
              return t[r] = i, t
            }), {})
          }(h(t, Tn), "onExited", "in", "enter", "exit", "appear");
        return Ut("input", (0, f.c)({
          ref: e
        }, n, {
          css: qt({
            label: "dummyInput",
            background: 0,
            border: 0,
            caretColor: "transparent",
            fontSize: "inherit",
            gridArea: "1 / 1 / 2 / 3",
            outline: 0,
            padding: 0,
            width: 1,
            color: "transparent",
            left: -100,
            opacity: 0,
            position: "relative",
            transform: "scale(.01)"
          }, "", "")
        }))
      }
      var kn = ["boxSizing", "height", "overflow", "paddingRight", "position"],
        _n = {
          boxSizing: "border-box",
          overflow: "hidden",
          position: "relative",
          height: "100%"
        };

      function Dn(t) {
        t.preventDefault()
      }

      function In(t) {
        t.stopPropagation()
      }

      function Fn() {
        var t = this.scrollTop,
          e = this.scrollHeight,
          n = t + this.offsetHeight;
        0 === t ? this.scrollTop = 1 : n === e && (this.scrollTop = t - 1)
      }

      function On() {
        return "ontouchstart" in window || navigator.maxTouchPoints
      }
      var Vn = !("undefined" == typeof window || !window.document || !window.document.createElement),
        Rn = 0,
        Ln = {
          capture: !1,
          passive: !1
        },
        Bn = function(t) {
          var e = t.target;
          return e.ownerDocument.activeElement && e.ownerDocument.activeElement.blur()
        },
        Nn = {
          name: "1kfdb0e",
          styles: "position:fixed;left:0;bottom:0;right:0;top:0"
        };

      function jn(t) {
        var e = t.children,
          n = t.lockEnabled,
          r = t.captureEnabled,
          i = function(t) {
            var e = t.isEnabled,
              n = t.onBottomArrive,
              r = t.onBottomLeave,
              i = t.onTopArrive,
              a = t.onTopLeave,
              s = (0, c.useRef)(!1),
              o = (0, c.useRef)(!1),
              l = (0, c.useRef)(0),
              u = (0, c.useRef)(null),
              h = (0, c.useCallback)((function(t, e) {
                if (null !== u.current) {
                  var l = u.current,
                    h = l.scrollTop,
                    c = l.scrollHeight,
                    p = l.clientHeight,
                    f = u.current,
                    d = e > 0,
                    m = c - p - h,
                    v = !1;
                  m > e && s.current && (r && r(t), s.current = !1), d && o.current && (a && a(t), o.current = !1), d && e > m ? (n && !s.current && n(t), f.scrollTop = c, v = !0, s.current = !0) : !d && -e > h && (i && !o.current && i(t), f.scrollTop = 0, v = !0, o.current = !0), v && function(t) {
                    t.cancelable && t.preventDefault(), t.stopPropagation()
                  }(t)
                }
              }), [n, r, i, a]),
              p = (0, c.useCallback)((function(t) {
                h(t, t.deltaY)
              }), [h]),
              f = (0, c.useCallback)((function(t) {
                l.current = t.changedTouches[0].clientY
              }), []),
              d = (0, c.useCallback)((function(t) {
                var e = l.current - t.changedTouches[0].clientY;
                h(t, e)
              }), [h]),
              m = (0, c.useCallback)((function(t) {
                if (t) {
                  var e = !!Ie && {
                    passive: !1
                  };
                  t.addEventListener("wheel", p, e), t.addEventListener("touchstart", f, e), t.addEventListener("touchmove", d, e)
                }
              }), [d, f, p]),
              v = (0, c.useCallback)((function(t) {
                t && (t.removeEventListener("wheel", p, !1), t.removeEventListener("touchstart", f, !1), t.removeEventListener("touchmove", d, !1))
              }), [d, f, p]);
            return (0, c.useEffect)((function() {
                if (e) {
                  var t = u.current;
                  return m(t),
                    function() {
                      v(t)
                    }
                }
              }), [e, m, v]),
              function(t) {
                u.current = t
              }
          }({
            isEnabled: void 0 === r || r,
            onBottomArrive: t.onBottomArrive,
            onBottomLeave: t.onBottomLeave,
            onTopArrive: t.onTopArrive,
            onTopLeave: t.onTopLeave
          }),
          a = function(t) {
            var e = t.isEnabled,
              n = t.accountForScrollbars,
              r = void 0 === n || n,
              i = (0, c.useRef)({}),
              a = (0, c.useRef)(null),
              s = (0, c.useCallback)((function(t) {
                if (Vn) {
                  var e = document.body,
                    n = e && e.style;
                  if (r && kn.forEach((function(t) {
                      var e = n && n[t];
                      i.current[t] = e
                    })), r && Rn < 1) {
                    var a = parseInt(i.current.paddingRight, 10) || 0,
                      s = document.body ? document.body.clientWidth : 0,
                      o = window.innerWidth - s + a || 0;
                    Object.keys(_n).forEach((function(t) {
                      var e = _n[t];
                      n && (n[t] = e)
                    })), n && (n.paddingRight = "".concat(o, "px"))
                  }
                  e && On() && (e.addEventListener("touchmove", Dn, Ln), t && (t.addEventListener("touchstart", Fn, Ln), t.addEventListener("touchmove", In, Ln))), Rn += 1
                }
              }), [r]),
              o = (0, c.useCallback)((function(t) {
                if (Vn) {
                  var e = document.body,
                    n = e && e.style;
                  Rn = Math.max(Rn - 1, 0), r && Rn < 1 && kn.forEach((function(t) {
                    var e = i.current[t];
                    n && (n[t] = e)
                  })), e && On() && (e.removeEventListener("touchmove", Dn, Ln), t && (t.removeEventListener("touchstart", Fn, Ln), t.removeEventListener("touchmove", In, Ln)))
                }
              }), [r]);
            return (0, c.useEffect)((function() {
                if (e) {
                  var t = a.current;
                  return s(t),
                    function() {
                      o(t)
                    }
                }
              }), [e, s, o]),
              function(t) {
                a.current = t
              }
          }({
            isEnabled: n
          });
        return Ut(c.Fragment, null, n && Ut("div", {
          onClick: Bn,
          css: Nn
        }), e((function(t) {
          i(t), a(t)
        })))
      }
      var zn = {
          name: "1a0ro4n-requiredInput",
          styles: "label:requiredInput;opacity:0;pointer-events:none;position:absolute;bottom:0;left:0;right:0;width:100%"
        },
        Gn = function(t) {
          var e = t.name,
            n = t.onFocus;
          return Ut("input", {
            required: !0,
            name: e,
            tabIndex: -1,
            "aria-hidden": "true",
            onFocus: n,
            css: zn,
            value: "",
            onChange: function() {}
          })
        };

      function Hn(t) {
        var e;
        return "undefined" != typeof window && null != window.navigator && t.test((null === (e = window.navigator.userAgentData) || void 0 === e ? void 0 : e.platform) || window.navigator.platform)
      }

      function Wn() {
        return Hn(/^Mac/i)
      }
      var Un = {
          clearIndicator: tn,
          container: function(t) {
            var e = t.isDisabled;
            return {
              label: "container",
              direction: t.isRtl ? "rtl" : void 0,
              pointerEvents: e ? "none" : void 0,
              position: "relative"
            }
          },
          control: function(t, e) {
            var n = t.isDisabled,
              r = t.isFocused,
              i = t.theme,
              s = i.colors,
              o = i.borderRadius;
            return a({
              label: "control",
              alignItems: "center",
              cursor: "default",
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
              minHeight: i.spacing.controlHeight,
              outline: "0 !important",
              position: "relative",
              transition: "all 100ms"
            }, e ? {} : {
              backgroundColor: n ? s.neutral5 : s.neutral0,
              borderColor: n ? s.neutral10 : r ? s.primary : s.neutral20,
              borderRadius: o,
              borderStyle: "solid",
              borderWidth: 1,
              boxShadow: r ? "0 0 0 1px ".concat(s.primary) : void 0,
              "&:hover": {
                borderColor: r ? s.primary : s.neutral30
              }
            })
          },
          dropdownIndicator: Qe,
          group: function(t, e) {
            var n = t.theme.spacing;
            return e ? {} : {
              paddingBottom: 2 * n.baseUnit,
              paddingTop: 2 * n.baseUnit
            }
          },
          groupHeading: function(t, e) {
            var n = t.theme,
              r = n.colors,
              i = n.spacing;
            return a({
              label: "group",
              cursor: "default",
              display: "block"
            }, e ? {} : {
              color: r.neutral40,
              fontSize: "75%",
              fontWeight: 500,
              marginBottom: "0.25em",
              paddingLeft: 3 * i.baseUnit,
              paddingRight: 3 * i.baseUnit,
              textTransform: "uppercase"
            })
          },
          indicatorsContainer: function() {
            return {
              alignItems: "center",
              alignSelf: "stretch",
              display: "flex",
              flexShrink: 0
            }
          },
          indicatorSeparator: function(t, e) {
            var n = t.isDisabled,
              r = t.theme,
              i = r.spacing.baseUnit,
              s = r.colors;
            return a({
              label: "indicatorSeparator",
              alignSelf: "stretch",
              width: 1
            }, e ? {} : {
              backgroundColor: n ? s.neutral10 : s.neutral20,
              marginBottom: 2 * i,
              marginTop: 2 * i
            })
          },
          input: function(t, e) {
            var n = t.isDisabled,
              r = t.value,
              i = t.theme,
              s = i.spacing,
              o = i.colors;
            return a(a({
              visibility: n ? "hidden" : "visible",
              transform: r ? "translateZ(0)" : ""
            }, on), e ? {} : {
              margin: s.baseUnit / 2,
              paddingBottom: s.baseUnit / 2,
              paddingTop: s.baseUnit / 2,
              color: o.neutral80
            })
          },
          loadingIndicator: function(t, e) {
            var n = t.isFocused,
              r = t.size,
              i = t.theme,
              s = i.colors,
              o = i.spacing.baseUnit;
            return a({
              label: "loadingIndicator",
              display: "flex",
              transition: "color 150ms",
              alignSelf: "center",
              fontSize: r,
              lineHeight: 1,
              marginRight: r,
              textAlign: "center",
              verticalAlign: "middle"
            }, e ? {} : {
              color: n ? s.neutral60 : s.neutral20,
              padding: 2 * o
            })
          },
          loadingMessage: Ue,
          menu: function(t, e) {
            var n, i = t.placement,
              s = t.theme,
              o = s.borderRadius,
              l = s.spacing,
              u = s.colors;
            return a((n = {
              label: "menu"
            }, (0, r.c)(n, function(t) {
              return t ? {
                bottom: "top",
                top: "bottom"
              } [t] : "bottom"
            }(i), "100%"), (0, r.c)(n, "position", "absolute"), (0, r.c)(n, "width", "100%"), (0, r.c)(n, "zIndex", 1), n), e ? {} : {
              backgroundColor: u.neutral0,
              borderRadius: o,
              boxShadow: "0 0 0 1px hsla(0, 0%, 0%, 0.1), 0 4px 11px hsla(0, 0%, 0%, 0.1)",
              marginBottom: l.menuGutter,
              marginTop: l.menuGutter
            })
          },
          menuList: function(t, e) {
            var n = t.maxHeight,
              r = t.theme.spacing.baseUnit;
            return a({
              maxHeight: n,
              overflowY: "auto",
              position: "relative",
              WebkitOverflowScrolling: "touch"
            }, e ? {} : {
              paddingBottom: r,
              paddingTop: r
            })
          },
          menuPortal: function(t) {
            var e = t.rect,
              n = t.offset,
              r = t.position;
            return {
              left: e.left,
              position: r,
              top: n,
              width: e.width,
              zIndex: 1
            }
          },
          multiValue: function(t, e) {
            var n = t.theme,
              r = n.spacing,
              i = n.borderRadius,
              s = n.colors;
            return a({
              label: "multiValue",
              display: "flex",
              minWidth: 0
            }, e ? {} : {
              backgroundColor: s.neutral10,
              borderRadius: i / 2,
              margin: r.baseUnit / 2
            })
          },
          multiValueLabel: function(t, e) {
            var n = t.theme,
              r = n.borderRadius,
              i = n.colors,
              s = t.cropWithEllipsis;
            return a({
              overflow: "hidden",
              textOverflow: s || void 0 === s ? "ellipsis" : void 0,
              whiteSpace: "nowrap"
            }, e ? {} : {
              borderRadius: r / 2,
              color: i.neutral80,
              fontSize: "85%",
              padding: 3,
              paddingLeft: 6
            })
          },
          multiValueRemove: function(t, e) {
            var n = t.theme,
              r = n.spacing,
              i = n.borderRadius,
              s = n.colors,
              o = t.isFocused;
            return a({
              alignItems: "center",
              display: "flex"
            }, e ? {} : {
              borderRadius: i / 2,
              backgroundColor: o ? s.dangerLight : void 0,
              paddingLeft: r.baseUnit,
              paddingRight: r.baseUnit,
              ":hover": {
                backgroundColor: s.dangerLight,
                color: s.danger
              }
            })
          },
          noOptionsMessage: We,
          option: function(t, e) {
            var n = t.isDisabled,
              r = t.isFocused,
              i = t.isSelected,
              s = t.theme,
              o = s.spacing,
              l = s.colors;
            return a({
              label: "option",
              cursor: "default",
              display: "block",
              fontSize: "inherit",
              width: "100%",
              userSelect: "none",
              WebkitTapHighlightColor: "rgba(0, 0, 0, 0)"
            }, e ? {} : {
              backgroundColor: i ? l.primary : r ? l.primary25 : "transparent",
              color: n ? l.neutral20 : i ? l.neutral0 : "inherit",
              padding: "".concat(2 * o.baseUnit, "px ").concat(3 * o.baseUnit, "px"),
              ":active": {
                backgroundColor: n ? void 0 : i ? l.primary : l.primary50
              }
            })
          },
          placeholder: function(t, e) {
            var n = t.theme,
              r = n.spacing,
              i = n.colors;
            return a({
              label: "placeholder",
              gridArea: "1 / 1 / 2 / 3"
            }, e ? {} : {
              color: i.neutral50,
              marginLeft: r.baseUnit / 2,
              marginRight: r.baseUnit / 2
            })
          },
          singleValue: function(t, e) {
            var n = t.isDisabled,
              r = t.theme,
              i = r.spacing,
              s = r.colors;
            return a({
              label: "singleValue",
              gridArea: "1 / 1 / 2 / 3",
              maxWidth: "100%",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap"
            }, e ? {} : {
              color: n ? s.neutral40 : s.neutral80,
              marginLeft: i.baseUnit / 2,
              marginRight: i.baseUnit / 2
            })
          },
          valueContainer: function(t, e) {
            var n = t.theme.spacing,
              r = t.isMulti,
              i = t.hasValue,
              s = t.selectProps.controlShouldRenderValue;
            return a({
              alignItems: "center",
              display: r && i && s ? "flex" : "grid",
              flex: 1,
              flexWrap: "wrap",
              WebkitOverflowScrolling: "touch",
              position: "relative",
              overflow: "hidden"
            }, e ? {} : {
              padding: "".concat(n.baseUnit / 2, "px ").concat(2 * n.baseUnit, "px")
            })
          }
        },
        qn = {
          borderRadius: 4,
          colors: {
            primary: "#2684FF",
            primary75: "#4C9AFF",
            primary50: "#B2D4FF",
            primary25: "#DEEBFF",
            danger: "#DE350B",
            dangerLight: "#FFBDAD",
            neutral0: "hsl(0, 0%, 100%)",
            neutral5: "hsl(0, 0%, 95%)",
            neutral10: "hsl(0, 0%, 90%)",
            neutral20: "hsl(0, 0%, 80%)",
            neutral30: "hsl(0, 0%, 70%)",
            neutral40: "hsl(0, 0%, 60%)",
            neutral50: "hsl(0, 0%, 50%)",
            neutral60: "hsl(0, 0%, 40%)",
            neutral70: "hsl(0, 0%, 30%)",
            neutral80: "hsl(0, 0%, 20%)",
            neutral90: "hsl(0, 0%, 10%)"
          },
          spacing: {
            baseUnit: 4,
            controlHeight: 38,
            menuGutter: 8
          }
        },
        Yn = {
          "aria-live": "polite",
          backspaceRemovesValue: !0,
          blurInputOnSelect: Ae(),
          captureMenuScroll: !Ae(),
          classNames: {},
          closeMenuOnSelect: !0,
          closeMenuOnScroll: !1,
          components: {},
          controlShouldRenderValue: !0,
          escapeClearsValue: !1,
          filterOption: function(t, e) {
            if (t.data.__isNew__) return !0;
            var n = a({
                ignoreCase: !0,
                ignoreAccents: !0,
                stringify: Mn,
                trim: !0,
                matchFrom: "any"
              }, undefined),
              r = n.ignoreCase,
              i = n.ignoreAccents,
              s = n.stringify,
              o = n.trim,
              l = n.matchFrom,
              u = o ? wn(e) : e,
              h = o ? wn(s(t)) : s(t);
            return r && (u = u.toLowerCase(), h = h.toLowerCase()), i && (u = Cn(u), h = Pn(h)), "start" === l ? h.substr(0, u.length) === u : h.indexOf(u) > -1
          },
          formatGroupLabel: function(t) {
            return t.label
          },
          getOptionLabel: function(t) {
            return t.label
          },
          getOptionValue: function(t) {
            return t.value
          },
          isDisabled: !1,
          isLoading: !1,
          isMulti: !1,
          isRtl: !1,
          isSearchable: !0,
          isOptionDisabled: function(t) {
            return !!t.isDisabled
          },
          loadingMessage: function() {
            return "Loading..."
          },
          maxMenuHeight: 300,
          minMenuHeight: 140,
          menuIsOpen: !1,
          menuPlacement: "bottom",
          menuPosition: "absolute",
          menuShouldBlockScroll: !1,
          menuShouldScrollIntoView: ! function() {
            try {
              return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
            } catch (t) {
              return !1
            }
          }(),
          noOptionsMessage: function() {
            return "No options"
          },
          openMenuOnFocus: !1,
          openMenuOnClick: !0,
          options: [],
          pageSize: 5,
          placeholder: "Select...",
          screenReaderStatus: function(t) {
            var e = t.count;
            return "".concat(e, " result").concat(1 !== e ? "s" : "", " available")
          },
          styles: {},
          tabIndex: 0,
          tabSelectsValue: !0,
          unstyled: !1
        };

      function $n(t, e, n, r) {
        return {
          type: "option",
          data: e,
          isDisabled: nr(t, e, n),
          isSelected: rr(t, e, n),
          label: tr(t, e),
          value: er(t, e),
          index: r
        }
      }

      function Kn(t, e) {
        return t.options.map((function(n, r) {
          if ("options" in n) {
            var i = n.options.map((function(n, r) {
              return $n(t, n, e, r)
            })).filter((function(e) {
              return Jn(t, e)
            }));
            return i.length > 0 ? {
              type: "group",
              data: n,
              options: i,
              index: r
            } : void 0
          }
          var a = $n(t, n, e, r);
          return Jn(t, a) ? a : void 0
        })).filter(Fe)
      }

      function Xn(t) {
        return t.reduce((function(t, e) {
          return "group" === e.type ? t.push.apply(t, x(e.options.map((function(t) {
            return t.data
          })))) : t.push(e.data), t
        }), [])
      }

      function Zn(t, e) {
        return t.reduce((function(t, n) {
          return "group" === n.type ? t.push.apply(t, x(n.options.map((function(t) {
            return {
              data: t.data,
              id: "".concat(e, "-").concat(n.index, "-").concat(t.index)
            }
          })))) : t.push({
            data: n.data,
            id: "".concat(e, "-").concat(n.index)
          }), t
        }), [])
      }

      function Jn(t, e) {
        var n = t.inputValue,
          r = void 0 === n ? "" : n,
          i = e.data,
          a = e.isSelected,
          s = e.label,
          o = e.value;
        return (!ar(t) || !a) && ir(t, {
          label: s,
          value: o,
          data: i
        }, r)
      }
      var Qn = function(t, e) {
          var n;
          return (null === (n = t.find((function(t) {
            return t.data === e
          }))) || void 0 === n ? void 0 : n.id) || null
        },
        tr = function(t, e) {
          return t.getOptionLabel(e)
        },
        er = function(t, e) {
          return t.getOptionValue(e)
        };

      function nr(t, e, n) {
        return "function" == typeof t.isOptionDisabled && t.isOptionDisabled(e, n)
      }

      function rr(t, e, n) {
        if (n.indexOf(e) > -1) return !0;
        if ("function" == typeof t.isOptionSelected) return t.isOptionSelected(e, n);
        var r = er(t, e);
        return n.some((function(e) {
          return er(t, e) === r
        }))
      }

      function ir(t, e, n) {
        return !t.filterOption || t.filterOption(e, n)
      }
      var ar = function(t) {
          var e = t.hideSelectedOptions,
            n = t.isMulti;
          return void 0 === e ? n : e
        },
        sr = 1,
        or = function(t) {
          ! function(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
            t.prototype = Object.create(e && e.prototype, {
              constructor: {
                value: t,
                writable: !0,
                configurable: !0
              }
            }), Object.defineProperty(t, "prototype", {
              writable: !1
            }), e && (0, v.c)(t, e)
          }(s, t);
          var e, n, r, i = b(s);

          function s(t) {
            var e;
            if (function(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
              }(this, s), (e = i.call(this, t)).state = {
                ariaSelection: null,
                focusedOption: null,
                focusedOptionId: null,
                focusableOptionsWithIds: [],
                focusedValue: null,
                inputIsHidden: !1,
                isFocused: !1,
                selectValue: [],
                clearFocusValueOnUpdate: !1,
                prevWasFocused: !1,
                inputIsHiddenAfterUpdate: void 0,
                prevProps: void 0,
                instancePrefix: ""
              }, e.blockOptionHover = !1, e.isComposing = !1, e.commonProps = void 0, e.initialTouchX = 0, e.initialTouchY = 0, e.openAfterFocus = !1, e.scrollToFocusedOptionOnUpdate = !1, e.userIsDragging = void 0, e.isAppleDevice = Wn() || Hn(/^iPhone/i) || Hn(/^iPad/i) || Wn() && navigator.maxTouchPoints > 1, e.controlRef = null, e.getControlRef = function(t) {
                e.controlRef = t
              }, e.focusedOptionRef = null, e.getFocusedOptionRef = function(t) {
                e.focusedOptionRef = t
              }, e.menuListRef = null, e.getMenuListRef = function(t) {
                e.menuListRef = t
              }, e.inputRef = null, e.getInputRef = function(t) {
                e.inputRef = t
              }, e.focus = e.focusInput, e.blur = e.blurInput, e.onChange = function(t, n) {
                var r = e.props,
                  i = r.onChange,
                  a = r.name;
                n.name = a, e.ariaOnChange(t, n), i(t, n)
              }, e.setValue = function(t, n, r) {
                var i = e.props,
                  a = i.closeMenuOnSelect,
                  s = i.isMulti,
                  o = i.inputValue;
                e.onInputChange("", {
                  action: "set-value",
                  prevInputValue: o
                }), a && (e.setState({
                  inputIsHiddenAfterUpdate: !s
                }), e.onMenuClose()), e.setState({
                  clearFocusValueOnUpdate: !0
                }), e.onChange(t, {
                  action: n,
                  option: r
                })
              }, e.selectOption = function(t) {
                var n = e.props,
                  r = n.blurInputOnSelect,
                  i = n.isMulti,
                  a = n.name,
                  s = e.state.selectValue,
                  o = i && e.isOptionSelected(t, s),
                  l = e.isOptionDisabled(t, s);
                if (o) {
                  var u = e.getOptionValue(t);
                  e.setValue(s.filter((function(t) {
                    return e.getOptionValue(t) !== u
                  })), "deselect-option", t)
                } else {
                  if (l) return void e.ariaOnChange(t, {
                    action: "select-option",
                    option: t,
                    name: a
                  });
                  i ? e.setValue([].concat(x(s), [t]), "select-option", t) : e.setValue(t, "select-option")
                }
                r && e.blurInput()
              }, e.removeValue = function(t) {
                var n = e.props.isMulti,
                  r = e.state.selectValue,
                  i = e.getOptionValue(t),
                  a = r.filter((function(t) {
                    return e.getOptionValue(t) !== i
                  })),
                  s = Oe(n, a, a[0] || null);
                e.onChange(s, {
                  action: "remove-value",
                  removedValue: t
                }), e.focusInput()
              }, e.clearValue = function() {
                var t = e.state.selectValue;
                e.onChange(Oe(e.props.isMulti, [], null), {
                  action: "clear",
                  removedValues: t
                })
              }, e.popValue = function() {
                var t = e.props.isMulti,
                  n = e.state.selectValue,
                  r = n[n.length - 1],
                  i = n.slice(0, n.length - 1),
                  a = Oe(t, i, i[0] || null);
                e.onChange(a, {
                  action: "pop-value",
                  removedValue: r
                })
              }, e.getFocusedOptionId = function(t) {
                return Qn(e.state.focusableOptionsWithIds, t)
              }, e.getFocusableOptionsWithIds = function() {
                return Zn(Kn(e.props, e.state.selectValue), e.getElementId("option"))
              }, e.getValue = function() {
                return e.state.selectValue
              }, e.cx = function() {
                for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                return be.apply(void 0, [e.props.classNamePrefix].concat(n))
              }, e.getOptionLabel = function(t) {
                return tr(e.props, t)
              }, e.getOptionValue = function(t) {
                return er(e.props, t)
              }, e.getStyles = function(t, n) {
                var r = e.props.unstyled,
                  i = Un[t](n, r);
                i.boxSizing = "border-box";
                var a = e.props.styles[t];
                return a ? a(i, n) : i
              }, e.getClassNames = function(t, n) {
                var r, i;
                return null === (r = (i = e.props.classNames)[t]) || void 0 === r ? void 0 : r.call(i, n)
              }, e.getElementId = function(t) {
                return "".concat(e.state.instancePrefix, "-").concat(t)
              }, e.getComponents = function() {
                return t = e.props, a(a({}, hn), t.components);
                var t
              }, e.buildCategorizedOptions = function() {
                return Kn(e.props, e.state.selectValue)
              }, e.getCategorizedOptions = function() {
                return e.props.menuIsOpen ? e.buildCategorizedOptions() : []
              }, e.buildFocusableOptions = function() {
                return Xn(e.buildCategorizedOptions())
              }, e.getFocusableOptions = function() {
                return e.props.menuIsOpen ? e.buildFocusableOptions() : []
              }, e.ariaOnChange = function(t, n) {
                e.setState({
                  ariaSelection: a({
                    value: t
                  }, n)
                })
              }, e.onMenuMouseDown = function(t) {
                0 === t.button && (t.stopPropagation(), t.preventDefault(), e.focusInput())
              }, e.onMenuMouseMove = function(t) {
                e.blockOptionHover = !1
              }, e.onControlMouseDown = function(t) {
                if (!t.defaultPrevented) {
                  var n = e.props.openMenuOnClick;
                  e.state.isFocused ? e.props.menuIsOpen ? "INPUT" !== t.target.tagName && "TEXTAREA" !== t.target.tagName && e.onMenuClose() : n && e.openMenu("first") : (n && (e.openAfterFocus = !0), e.focusInput()), "INPUT" !== t.target.tagName && "TEXTAREA" !== t.target.tagName && t.preventDefault()
                }
              }, e.onDropdownIndicatorMouseDown = function(t) {
                if (!(t && "mousedown" === t.type && 0 !== t.button || e.props.isDisabled)) {
                  var n = e.props,
                    r = n.isMulti,
                    i = n.menuIsOpen;
                  e.focusInput(), i ? (e.setState({
                    inputIsHiddenAfterUpdate: !r
                  }), e.onMenuClose()) : e.openMenu("first"), t.preventDefault()
                }
              }, e.onClearIndicatorMouseDown = function(t) {
                t && "mousedown" === t.type && 0 !== t.button || (e.clearValue(), t.preventDefault(), e.openAfterFocus = !1, "touchend" === t.type ? e.focusInput() : setTimeout((function() {
                  return e.focusInput()
                })))
              }, e.onScroll = function(t) {
                "boolean" == typeof e.props.closeMenuOnScroll ? t.target instanceof HTMLElement && Pe(t.target) && e.props.onMenuClose() : "function" == typeof e.props.closeMenuOnScroll && e.props.closeMenuOnScroll(t) && e.props.onMenuClose()
              }, e.onCompositionStart = function() {
                e.isComposing = !0
              }, e.onCompositionEnd = function() {
                e.isComposing = !1
              }, e.onTouchStart = function(t) {
                var n = t.touches,
                  r = n && n.item(0);
                r && (e.initialTouchX = r.clientX, e.initialTouchY = r.clientY, e.userIsDragging = !1)
              }, e.onTouchMove = function(t) {
                var n = t.touches,
                  r = n && n.item(0);
                if (r) {
                  var i = Math.abs(r.clientX - e.initialTouchX),
                    a = Math.abs(r.clientY - e.initialTouchY);
                  e.userIsDragging = i > 5 || a > 5
                }
              }, e.onTouchEnd = function(t) {
                e.userIsDragging || (e.controlRef && !e.controlRef.contains(t.target) && e.menuListRef && !e.menuListRef.contains(t.target) && e.blurInput(), e.initialTouchX = 0, e.initialTouchY = 0)
              }, e.onControlTouchEnd = function(t) {
                e.userIsDragging || e.onControlMouseDown(t)
              }, e.onClearIndicatorTouchEnd = function(t) {
                e.userIsDragging || e.onClearIndicatorMouseDown(t)
              }, e.onDropdownIndicatorTouchEnd = function(t) {
                e.userIsDragging || e.onDropdownIndicatorMouseDown(t)
              }, e.handleInputChange = function(t) {
                var n = e.props.inputValue,
                  r = t.currentTarget.value;
                e.setState({
                  inputIsHiddenAfterUpdate: !1
                }), e.onInputChange(r, {
                  action: "input-change",
                  prevInputValue: n
                }), e.props.menuIsOpen || e.onMenuOpen()
              }, e.onInputFocus = function(t) {
                e.props.onFocus && e.props.onFocus(t), e.setState({
                  inputIsHiddenAfterUpdate: !1,
                  isFocused: !0
                }), (e.openAfterFocus || e.props.openMenuOnFocus) && e.openMenu("first"), e.openAfterFocus = !1
              }, e.onInputBlur = function(t) {
                var n = e.props.inputValue;
                e.menuListRef && e.menuListRef.contains(document.activeElement) ? e.inputRef.focus() : (e.props.onBlur && e.props.onBlur(t), e.onInputChange("", {
                  action: "input-blur",
                  prevInputValue: n
                }), e.onMenuClose(), e.setState({
                  focusedValue: null,
                  isFocused: !1
                }))
              }, e.onOptionHover = function(t) {
                if (!e.blockOptionHover && e.state.focusedOption !== t) {
                  var n = e.getFocusableOptions().indexOf(t);
                  e.setState({
                    focusedOption: t,
                    focusedOptionId: n > -1 ? e.getFocusedOptionId(t) : null
                  })
                }
              }, e.shouldHideSelectedOptions = function() {
                return ar(e.props)
              }, e.onValueInputFocus = function(t) {
                t.preventDefault(), t.stopPropagation(), e.focus()
              }, e.onKeyDown = function(t) {
                var n = e.props,
                  r = n.isMulti,
                  i = n.backspaceRemovesValue,
                  a = n.escapeClearsValue,
                  s = n.inputValue,
                  o = n.isClearable,
                  l = n.isDisabled,
                  u = n.menuIsOpen,
                  h = n.onKeyDown,
                  c = n.tabSelectsValue,
                  p = n.openMenuOnFocus,
                  f = e.state,
                  d = f.focusedOption,
                  m = f.focusedValue,
                  v = f.selectValue;
                if (!(l || "function" == typeof h && (h(t), t.defaultPrevented))) {
                  switch (e.blockOptionHover = !0, t.key) {
                    case "ArrowLeft":
                      if (!r || s) return;
                      e.focusValue("previous");
                      break;
                    case "ArrowRight":
                      if (!r || s) return;
                      e.focusValue("next");
                      break;
                    case "Delete":
                    case "Backspace":
                      if (s) return;
                      if (m) e.removeValue(m);
                      else {
                        if (!i) return;
                        r ? e.popValue() : o && e.clearValue()
                      }
                      break;
                    case "Tab":
                      if (e.isComposing) return;
                      if (t.shiftKey || !u || !c || !d || p && e.isOptionSelected(d, v)) return;
                      e.selectOption(d);
                      break;
                    case "Enter":
                      if (229 === t.keyCode) break;
                      if (u) {
                        if (!d) return;
                        if (e.isComposing) return;
                        e.selectOption(d);
                        break
                      }
                      return;
                    case "Escape":
                      u ? (e.setState({
                        inputIsHiddenAfterUpdate: !1
                      }), e.onInputChange("", {
                        action: "menu-close",
                        prevInputValue: s
                      }), e.onMenuClose()) : o && a && e.clearValue();
                      break;
                    case " ":
                      if (s) return;
                      if (!u) {
                        e.openMenu("first");
                        break
                      }
                      if (!d) return;
                      e.selectOption(d);
                      break;
                    case "ArrowUp":
                      u ? e.focusOption("up") : e.openMenu("last");
                      break;
                    case "ArrowDown":
                      u ? e.focusOption("down") : e.openMenu("first");
                      break;
                    case "PageUp":
                      if (!u) return;
                      e.focusOption("pageup");
                      break;
                    case "PageDown":
                      if (!u) return;
                      e.focusOption("pagedown");
                      break;
                    case "Home":
                      if (!u) return;
                      e.focusOption("first");
                      break;
                    case "End":
                      if (!u) return;
                      e.focusOption("last");
                      break;
                    default:
                      return
                  }
                  t.preventDefault()
                }
              }, e.state.instancePrefix = "react-select-" + (e.props.instanceId || ++sr), e.state.selectValue = xe(t.value), t.menuIsOpen && e.state.selectValue.length) {
              var n = e.getFocusableOptionsWithIds(),
                r = e.buildFocusableOptions(),
                o = r.indexOf(e.state.selectValue[0]);
              e.state.focusableOptionsWithIds = n, e.state.focusedOption = r[o], e.state.focusedOptionId = Qn(n, r[o])
            }
            return e
          }
          return e = s, n = [{
            key: "componentDidMount",
            value: function() {
              this.startListeningComposition(), this.startListeningToTouch(), this.props.closeMenuOnScroll && document && document.addEventListener && document.addEventListener("scroll", this.onScroll, !0), this.props.autoFocus && this.focusInput(), this.props.menuIsOpen && this.state.focusedOption && this.menuListRef && this.focusedOptionRef && Te(this.menuListRef, this.focusedOptionRef)
            }
          }, {
            key: "componentDidUpdate",
            value: function(t) {
              var e = this.props,
                n = e.isDisabled,
                r = e.menuIsOpen,
                i = this.state.isFocused;
              (i && !n && t.isDisabled || i && r && !t.menuIsOpen) && this.focusInput(), i && n && !t.isDisabled ? this.setState({
                isFocused: !1
              }, this.onMenuClose) : i || n || !t.isDisabled || this.inputRef !== document.activeElement || this.setState({
                isFocused: !0
              }), this.menuListRef && this.focusedOptionRef && this.scrollToFocusedOptionOnUpdate && (Te(this.menuListRef, this.focusedOptionRef), this.scrollToFocusedOptionOnUpdate = !1)
            }
          }, {
            key: "componentWillUnmount",
            value: function() {
              this.stopListeningComposition(), this.stopListeningToTouch(), document.removeEventListener("scroll", this.onScroll, !0)
            }
          }, {
            key: "onMenuOpen",
            value: function() {
              this.props.onMenuOpen()
            }
          }, {
            key: "onMenuClose",
            value: function() {
              this.onInputChange("", {
                action: "menu-close",
                prevInputValue: this.props.inputValue
              }), this.props.onMenuClose()
            }
          }, {
            key: "onInputChange",
            value: function(t, e) {
              this.props.onInputChange(t, e)
            }
          }, {
            key: "focusInput",
            value: function() {
              this.inputRef && this.inputRef.focus()
            }
          }, {
            key: "blurInput",
            value: function() {
              this.inputRef && this.inputRef.blur()
            }
          }, {
            key: "openMenu",
            value: function(t) {
              var e = this,
                n = this.state,
                r = n.selectValue,
                i = n.isFocused,
                a = this.buildFocusableOptions(),
                s = "first" === t ? 0 : a.length - 1;
              if (!this.props.isMulti) {
                var o = a.indexOf(r[0]);
                o > -1 && (s = o)
              }
              this.scrollToFocusedOptionOnUpdate = !(i && this.menuListRef), this.setState({
                inputIsHiddenAfterUpdate: !1,
                focusedValue: null,
                focusedOption: a[s],
                focusedOptionId: this.getFocusedOptionId(a[s])
              }, (function() {
                return e.onMenuOpen()
              }))
            }
          }, {
            key: "focusValue",
            value: function(t) {
              var e = this.state,
                n = e.selectValue,
                r = e.focusedValue;
              if (this.props.isMulti) {
                this.setState({
                  focusedOption: null
                });
                var i = n.indexOf(r);
                r || (i = -1);
                var a = n.length - 1,
                  s = -1;
                if (n.length) {
                  switch (t) {
                    case "previous":
                      s = 0 === i ? 0 : -1 === i ? a : i - 1;
                      break;
                    case "next":
                      i > -1 && i < a && (s = i + 1)
                  }
                  this.setState({
                    inputIsHidden: -1 !== s,
                    focusedValue: n[s]
                  })
                }
              }
            }
          }, {
            key: "focusOption",
            value: function() {
              var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "first",
                e = this.props.pageSize,
                n = this.state.focusedOption,
                r = this.getFocusableOptions();
              if (r.length) {
                var i = 0,
                  a = r.indexOf(n);
                n || (a = -1), "up" === t ? i = a > 0 ? a - 1 : r.length - 1 : "down" === t ? i = (a + 1) % r.length : "pageup" === t ? (i = a - e) < 0 && (i = 0) : "pagedown" === t ? (i = a + e) > r.length - 1 && (i = r.length - 1) : "last" === t && (i = r.length - 1), this.scrollToFocusedOptionOnUpdate = !0, this.setState({
                  focusedOption: r[i],
                  focusedValue: null,
                  focusedOptionId: this.getFocusedOptionId(r[i])
                })
              }
            }
          }, {
            key: "getTheme",
            value: function() {
              return this.props.theme ? "function" == typeof this.props.theme ? this.props.theme(qn) : a(a({}, qn), this.props.theme) : qn
            }
          }, {
            key: "getCommonProps",
            value: function() {
              var t = this.clearValue,
                e = this.cx,
                n = this.getStyles,
                r = this.getClassNames,
                i = this.getValue,
                a = this.selectOption,
                s = this.setValue,
                o = this.props,
                l = o.isMulti,
                u = o.isRtl,
                h = o.options;
              return {
                clearValue: t,
                cx: e,
                getStyles: n,
                getClassNames: r,
                getValue: i,
                hasValue: this.hasValue(),
                isMulti: l,
                isRtl: u,
                options: h,
                selectOption: a,
                selectProps: o,
                setValue: s,
                theme: this.getTheme()
              }
            }
          }, {
            key: "hasValue",
            value: function() {
              return this.state.selectValue.length > 0
            }
          }, {
            key: "hasOptions",
            value: function() {
              return !!this.getFocusableOptions().length
            }
          }, {
            key: "isClearable",
            value: function() {
              var t = this.props,
                e = t.isClearable,
                n = t.isMulti;
              return void 0 === e ? n : e
            }
          }, {
            key: "isOptionDisabled",
            value: function(t, e) {
              return nr(this.props, t, e)
            }
          }, {
            key: "isOptionSelected",
            value: function(t, e) {
              return rr(this.props, t, e)
            }
          }, {
            key: "filterOption",
            value: function(t, e) {
              return ir(this.props, t, e)
            }
          }, {
            key: "formatOptionLabel",
            value: function(t, e) {
              if ("function" == typeof this.props.formatOptionLabel) {
                var n = this.props.inputValue,
                  r = this.state.selectValue;
                return this.props.formatOptionLabel(t, {
                  context: e,
                  inputValue: n,
                  selectValue: r
                })
              }
              return this.getOptionLabel(t)
            }
          }, {
            key: "formatGroupLabel",
            value: function(t) {
              return this.props.formatGroupLabel(t)
            }
          }, {
            key: "startListeningComposition",
            value: function() {
              document && document.addEventListener && (document.addEventListener("compositionstart", this.onCompositionStart, !1), document.addEventListener("compositionend", this.onCompositionEnd, !1))
            }
          }, {
            key: "stopListeningComposition",
            value: function() {
              document && document.removeEventListener && (document.removeEventListener("compositionstart", this.onCompositionStart), document.removeEventListener("compositionend", this.onCompositionEnd))
            }
          }, {
            key: "startListeningToTouch",
            value: function() {
              document && document.addEventListener && (document.addEventListener("touchstart", this.onTouchStart, !1), document.addEventListener("touchmove", this.onTouchMove, !1), document.addEventListener("touchend", this.onTouchEnd, !1))
            }
          }, {
            key: "stopListeningToTouch",
            value: function() {
              document && document.removeEventListener && (document.removeEventListener("touchstart", this.onTouchStart), document.removeEventListener("touchmove", this.onTouchMove), document.removeEventListener("touchend", this.onTouchEnd))
            }
          }, {
            key: "renderInput",
            value: function() {
              var t = this.props,
                e = t.isDisabled,
                n = t.isSearchable,
                r = t.inputId,
                i = t.inputValue,
                s = t.tabIndex,
                o = t.form,
                l = t.menuIsOpen,
                u = t.required,
                h = this.getComponents().Input,
                p = this.state,
                d = p.inputIsHidden,
                m = p.ariaSelection,
                v = this.commonProps,
                g = r || this.getElementId("input"),
                y = a(a(a({
                  "aria-autocomplete": "list",
                  "aria-expanded": l,
                  "aria-haspopup": !0,
                  "aria-errormessage": this.props["aria-errormessage"],
                  "aria-invalid": this.props["aria-invalid"],
                  "aria-label": this.props["aria-label"],
                  "aria-labelledby": this.props["aria-labelledby"],
                  "aria-required": u,
                  role: "combobox",
                  "aria-activedescendant": this.isAppleDevice ? void 0 : this.state.focusedOptionId || ""
                }, l && {
                  "aria-controls": this.getElementId("listbox")
                }), !n && {
                  "aria-readonly": !0
                }), this.hasValue() ? "initial-input-focus" === (null == m ? void 0 : m.action) && {
                  "aria-describedby": this.getElementId("live-region")
                } : {
                  "aria-describedby": this.getElementId("placeholder")
                });
              return n ? c.createElement(h, (0, f.c)({}, v, {
                autoCapitalize: "none",
                autoComplete: "off",
                autoCorrect: "off",
                id: g,
                innerRef: this.getInputRef,
                isDisabled: e,
                isHidden: d,
                onBlur: this.onInputBlur,
                onChange: this.handleInputChange,
                onFocus: this.onInputFocus,
                spellCheck: "false",
                tabIndex: s,
                form: o,
                type: "text",
                value: i
              }, y)) : c.createElement(An, (0, f.c)({
                id: g,
                innerRef: this.getInputRef,
                onBlur: this.onInputBlur,
                onChange: ge,
                onFocus: this.onInputFocus,
                disabled: e,
                tabIndex: s,
                inputMode: "none",
                form: o,
                value: ""
              }, y))
            }
          }, {
            key: "renderPlaceholderOrValue",
            value: function() {
              var t = this,
                e = this.getComponents(),
                n = e.MultiValue,
                r = e.MultiValueContainer,
                i = e.MultiValueLabel,
                a = e.MultiValueRemove,
                s = e.SingleValue,
                o = e.Placeholder,
                l = this.commonProps,
                u = this.props,
                h = u.controlShouldRenderValue,
                p = u.isDisabled,
                d = u.isMulti,
                m = u.inputValue,
                v = u.placeholder,
                g = this.state,
                y = g.selectValue,
                b = g.focusedValue,
                x = g.isFocused;
              if (!this.hasValue() || !h) return m ? null : c.createElement(o, (0, f.c)({}, l, {
                key: "placeholder",
                isDisabled: p,
                isFocused: x,
                innerProps: {
                  id: this.getElementId("placeholder")
                }
              }), v);
              if (d) return y.map((function(e, s) {
                var o = e === b,
                  u = "".concat(t.getOptionLabel(e), "-").concat(t.getOptionValue(e));
                return c.createElement(n, (0, f.c)({}, l, {
                  components: {
                    Container: r,
                    Label: i,
                    Remove: a
                  },
                  isFocused: o,
                  isDisabled: p,
                  key: u,
                  index: s,
                  removeProps: {
                    onClick: function() {
                      return t.removeValue(e)
                    },
                    onTouchEnd: function() {
                      return t.removeValue(e)
                    },
                    onMouseDown: function(t) {
                      t.preventDefault()
                    }
                  },
                  data: e
                }), t.formatOptionLabel(e, "value"))
              }));
              if (m) return null;
              var S = y[0];
              return c.createElement(s, (0, f.c)({}, l, {
                data: S,
                isDisabled: p
              }), this.formatOptionLabel(S, "value"))
            }
          }, {
            key: "renderClearIndicator",
            value: function() {
              var t = this.getComponents().ClearIndicator,
                e = this.commonProps,
                n = this.props,
                r = n.isDisabled,
                i = n.isLoading,
                a = this.state.isFocused;
              if (!this.isClearable() || !t || r || !this.hasValue() || i) return null;
              var s = {
                onMouseDown: this.onClearIndicatorMouseDown,
                onTouchEnd: this.onClearIndicatorTouchEnd,
                "aria-hidden": "true"
              };
              return c.createElement(t, (0, f.c)({}, e, {
                innerProps: s,
                isFocused: a
              }))
            }
          }, {
            key: "renderLoadingIndicator",
            value: function() {
              var t = this.getComponents().LoadingIndicator,
                e = this.commonProps,
                n = this.props,
                r = n.isDisabled,
                i = n.isLoading,
                a = this.state.isFocused;
              return t && i ? c.createElement(t, (0, f.c)({}, e, {
                innerProps: {
                  "aria-hidden": "true"
                },
                isDisabled: r,
                isFocused: a
              })) : null
            }
          }, {
            key: "renderIndicatorSeparator",
            value: function() {
              var t = this.getComponents(),
                e = t.DropdownIndicator,
                n = t.IndicatorSeparator;
              if (!e || !n) return null;
              var r = this.commonProps,
                i = this.props.isDisabled,
                a = this.state.isFocused;
              return c.createElement(n, (0, f.c)({}, r, {
                isDisabled: i,
                isFocused: a
              }))
            }
          }, {
            key: "renderDropdownIndicator",
            value: function() {
              var t = this.getComponents().DropdownIndicator;
              if (!t) return null;
              var e = this.commonProps,
                n = this.props.isDisabled,
                r = this.state.isFocused,
                i = {
                  onMouseDown: this.onDropdownIndicatorMouseDown,
                  onTouchEnd: this.onDropdownIndicatorTouchEnd,
                  "aria-hidden": "true"
                };
              return c.createElement(t, (0, f.c)({}, e, {
                innerProps: i,
                isDisabled: n,
                isFocused: r
              }))
            }
          }, {
            key: "renderMenu",
            value: function() {
              var t = this,
                e = this.getComponents(),
                n = e.Group,
                r = e.GroupHeading,
                i = e.Menu,
                a = e.MenuList,
                s = e.MenuPortal,
                o = e.LoadingMessage,
                l = e.NoOptionsMessage,
                u = e.Option,
                h = this.commonProps,
                p = this.state.focusedOption,
                d = this.props,
                m = d.captureMenuScroll,
                v = d.inputValue,
                g = d.isLoading,
                y = d.loadingMessage,
                b = d.minMenuHeight,
                x = d.maxMenuHeight,
                S = d.menuIsOpen,
                E = d.menuPlacement,
                P = d.menuPosition,
                C = d.menuPortalTarget,
                w = d.menuShouldBlockScroll,
                M = d.menuShouldScrollIntoView,
                T = d.noOptionsMessage,
                A = d.onMenuScrollToTop,
                k = d.onMenuScrollToBottom;
              if (!S) return null;
              var _, D = function(e, n) {
                var r = e.type,
                  i = e.data,
                  a = e.isDisabled,
                  s = e.isSelected,
                  o = e.label,
                  l = e.value,
                  d = p === i,
                  m = a ? void 0 : function() {
                    return t.onOptionHover(i)
                  },
                  v = a ? void 0 : function() {
                    return t.selectOption(i)
                  },
                  g = "".concat(t.getElementId("option"), "-").concat(n),
                  y = {
                    id: g,
                    onClick: v,
                    onMouseMove: m,
                    onMouseOver: m,
                    tabIndex: -1,
                    role: "option",
                    "aria-selected": t.isAppleDevice ? void 0 : s
                  };
                return c.createElement(u, (0, f.c)({}, h, {
                  innerProps: y,
                  data: i,
                  isDisabled: a,
                  isSelected: s,
                  key: g,
                  label: o,
                  type: r,
                  value: l,
                  isFocused: d,
                  innerRef: d ? t.getFocusedOptionRef : void 0
                }), t.formatOptionLabel(e.data, "menu"))
              };
              if (this.hasOptions()) _ = this.getCategorizedOptions().map((function(e) {
                if ("group" === e.type) {
                  var i = e.data,
                    a = e.options,
                    s = e.index,
                    o = "".concat(t.getElementId("group"), "-").concat(s),
                    l = "".concat(o, "-heading");
                  return c.createElement(n, (0, f.c)({}, h, {
                    key: o,
                    data: i,
                    options: a,
                    Heading: r,
                    headingProps: {
                      id: l,
                      data: e.data
                    },
                    label: t.formatGroupLabel(e.data)
                  }), e.options.map((function(t) {
                    return D(t, "".concat(s, "-").concat(t.index))
                  })))
                }
                if ("option" === e.type) return D(e, "".concat(e.index))
              }));
              else if (g) {
                var I = y({
                  inputValue: v
                });
                if (null === I) return null;
                _ = c.createElement(o, h, I)
              } else {
                var F = T({
                  inputValue: v
                });
                if (null === F) return null;
                _ = c.createElement(l, h, F)
              }
              var O = {
                  minMenuHeight: b,
                  maxMenuHeight: x,
                  menuPlacement: E,
                  menuPosition: P,
                  menuShouldScrollIntoView: M
                },
                V = c.createElement(Ge, (0, f.c)({}, h, O), (function(e) {
                  var n = e.ref,
                    r = e.placerProps,
                    s = r.placement,
                    o = r.maxHeight;
                  return c.createElement(i, (0, f.c)({}, h, O, {
                    innerRef: n,
                    innerProps: {
                      onMouseDown: t.onMenuMouseDown,
                      onMouseMove: t.onMenuMouseMove
                    },
                    isLoading: g,
                    placement: s
                  }), c.createElement(jn, {
                    captureEnabled: m,
                    onTopArrive: A,
                    onBottomArrive: k,
                    lockEnabled: w
                  }, (function(e) {
                    return c.createElement(a, (0, f.c)({}, h, {
                      innerRef: function(n) {
                        t.getMenuListRef(n), e(n)
                      },
                      innerProps: {
                        role: "listbox",
                        "aria-multiselectable": h.isMulti,
                        id: t.getElementId("listbox")
                      },
                      isLoading: g,
                      maxHeight: o,
                      focusedOption: p
                    }), _)
                  })))
                }));
              return C || "fixed" === P ? c.createElement(s, (0, f.c)({}, h, {
                appendTo: C,
                controlElement: this.controlRef,
                menuPlacement: E,
                menuPosition: P
              }), V) : V
            }
          }, {
            key: "renderFormField",
            value: function() {
              var t = this,
                e = this.props,
                n = e.delimiter,
                r = e.isDisabled,
                i = e.isMulti,
                a = e.name,
                s = e.required,
                o = this.state.selectValue;
              if (s && !this.hasValue() && !r) return c.createElement(Gn, {
                name: a,
                onFocus: this.onValueInputFocus
              });
              if (a && !r) {
                if (i) {
                  if (n) {
                    var l = o.map((function(e) {
                      return t.getOptionValue(e)
                    })).join(n);
                    return c.createElement("input", {
                      name: a,
                      type: "hidden",
                      value: l
                    })
                  }
                  var u = o.length > 0 ? o.map((function(e, n) {
                    return c.createElement("input", {
                      key: "i-".concat(n),
                      name: a,
                      type: "hidden",
                      value: t.getOptionValue(e)
                    })
                  })) : c.createElement("input", {
                    name: a,
                    type: "hidden",
                    value: ""
                  });
                  return c.createElement("div", null, u)
                }
                var h = o[0] ? this.getOptionValue(o[0]) : "";
                return c.createElement("input", {
                  name: a,
                  type: "hidden",
                  value: h
                })
              }
            }
          }, {
            key: "renderLiveRegion",
            value: function() {
              var t = this.commonProps,
                e = this.state,
                n = e.ariaSelection,
                r = e.focusedOption,
                i = e.focusedValue,
                a = e.isFocused,
                s = e.selectValue,
                o = this.getFocusableOptions();
              return c.createElement(vn, (0, f.c)({}, t, {
                id: this.getElementId("live-region"),
                ariaSelection: n,
                focusedOption: r,
                focusedValue: i,
                isFocused: a,
                selectValue: s,
                focusableOptions: o,
                isAppleDevice: this.isAppleDevice
              }))
            }
          }, {
            key: "render",
            value: function() {
              var t = this.getComponents(),
                e = t.Control,
                n = t.IndicatorsContainer,
                r = t.SelectContainer,
                i = t.ValueContainer,
                a = this.props,
                s = a.className,
                o = a.id,
                l = a.isDisabled,
                u = a.menuIsOpen,
                h = this.state.isFocused,
                p = this.commonProps = this.getCommonProps();
              return c.createElement(r, (0, f.c)({}, p, {
                className: s,
                innerProps: {
                  id: o,
                  onKeyDown: this.onKeyDown
                },
                isDisabled: l,
                isFocused: h
              }), this.renderLiveRegion(), c.createElement(e, (0, f.c)({}, p, {
                innerRef: this.getControlRef,
                innerProps: {
                  onMouseDown: this.onControlMouseDown,
                  onTouchEnd: this.onControlTouchEnd
                },
                isDisabled: l,
                isFocused: h,
                menuIsOpen: u
              }), c.createElement(i, (0, f.c)({}, p, {
                isDisabled: l
              }), this.renderPlaceholderOrValue(), this.renderInput()), c.createElement(n, (0, f.c)({}, p, {
                isDisabled: l
              }), this.renderClearIndicator(), this.renderLoadingIndicator(), this.renderIndicatorSeparator(), this.renderDropdownIndicator())), this.renderMenu(), this.renderFormField())
            }
          }], r = [{
            key: "getDerivedStateFromProps",
            value: function(t, e) {
              var n = e.prevProps,
                r = e.clearFocusValueOnUpdate,
                i = e.inputIsHiddenAfterUpdate,
                s = e.ariaSelection,
                o = e.isFocused,
                l = e.prevWasFocused,
                u = e.instancePrefix,
                h = t.options,
                c = t.value,
                p = t.menuIsOpen,
                f = t.inputValue,
                d = t.isMulti,
                m = xe(c),
                v = {};
              if (n && (c !== n.value || h !== n.options || p !== n.menuIsOpen || f !== n.inputValue)) {
                var g = p ? function(t, e) {
                    return Xn(Kn(t, e))
                  }(t, m) : [],
                  y = p ? Zn(Kn(t, m), "".concat(u, "-option")) : [],
                  b = r ? function(t, e) {
                    var n = t.focusedValue,
                      r = t.selectValue.indexOf(n);
                    if (r > -1) {
                      if (e.indexOf(n) > -1) return n;
                      if (r < e.length) return e[r]
                    }
                    return null
                  }(e, m) : null,
                  x = function(t, e) {
                    var n = t.focusedOption;
                    return n && e.indexOf(n) > -1 ? n : e[0]
                  }(e, g);
                v = {
                  selectValue: m,
                  focusedOption: x,
                  focusedOptionId: Qn(y, x),
                  focusableOptionsWithIds: y,
                  focusedValue: b,
                  clearFocusValueOnUpdate: !1
                }
              }
              var S = null != i && t !== n ? {
                  inputIsHidden: i,
                  inputIsHiddenAfterUpdate: void 0
                } : {},
                E = s,
                P = o && l;
              return o && !P && (E = {
                value: Oe(d, m, m[0] || null),
                options: m,
                action: "initial-input-focus"
              }, P = !l), "initial-input-focus" === (null == s ? void 0 : s.action) && (E = null), a(a(a({}, v), S), {}, {
                prevProps: t,
                ariaSelection: E,
                prevWasFocused: P
              })
            }
          }], n && m(e.prototype, n), r && m(e, r), Object.defineProperty(e, "prototype", {
            writable: !1
          }), s
        }(c.Component);
      or.defaultProps = Yn;
      var lr = (0, c.forwardRef)((function(t, e) {
          var n = function(t) {
            var e = t.defaultInputValue,
              n = void 0 === e ? "" : e,
              r = t.defaultMenuIsOpen,
              i = void 0 !== r && r,
              s = t.defaultValue,
              o = void 0 === s ? null : s,
              u = t.inputValue,
              f = t.menuIsOpen,
              d = t.onChange,
              m = t.onInputChange,
              v = t.onMenuClose,
              g = t.onMenuOpen,
              y = t.value,
              b = h(t, p),
              x = l((0, c.useState)(void 0 !== u ? u : n), 2),
              S = x[0],
              E = x[1],
              P = l((0, c.useState)(void 0 !== f ? f : i), 2),
              C = P[0],
              w = P[1],
              M = l((0, c.useState)(void 0 !== y ? y : o), 2),
              T = M[0],
              A = M[1],
              k = (0, c.useCallback)((function(t, e) {
                "function" == typeof d && d(t, e), A(t)
              }), [d]),
              _ = (0, c.useCallback)((function(t, e) {
                var n;
                "function" == typeof m && (n = m(t, e)), E(void 0 !== n ? n : t)
              }), [m]),
              D = (0, c.useCallback)((function() {
                "function" == typeof g && g(), w(!0)
              }), [g]),
              I = (0, c.useCallback)((function() {
                "function" == typeof v && v(), w(!1)
              }), [v]),
              F = void 0 !== u ? u : S,
              O = void 0 !== f ? f : C,
              V = void 0 !== y ? y : T;
            return a(a({}, b), {}, {
              inputValue: F,
              menuIsOpen: O,
              onChange: k,
              onInputChange: _,
              onMenuClose: I,
              onMenuOpen: D,
              value: V
            })
          }(t);
          return c.createElement(or, (0, f.c)({
            ref: e
          }, n))
        })),
        ur = lr
    },
    16728: (t, e, n) => {
      "use strict";
      Object.defineProperty(e, "__esModule", {
        value: !0
      });
      var r = Object.assign || function(t) {
          for (var e = 1; e < arguments.length; e++) {
            var n = arguments[e];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
          }
          return t
        },
        i = function() {
          function t(t, e) {
            for (var n = 0; n < e.length; n++) {
              var r = e[n];
              r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
            }
          }
          return function(e, n, r) {
            return n && t(e.prototype, n), r && t(e, r), e
          }
        }(),
        a = f(n(51664)),
        s = f(n(71424)),
        o = f(n(35459)),
        l = f(n(34332)),
        u = f(n(17368)),
        h = f(n(31792)),
        c = f(n(54080)),
        p = n(57884);

      function f(t) {
        return t && t.__esModule ? t : {
          default: t
        }
      }

      function d(t, e) {
        return t.scrollWidth - 1 <= e
      }

      function m(t, e) {
        return t.scrollHeight - 1 <= e
      }
      var v = function(t) {
        function e(t) {
          ! function(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
          }(this, e);
          var n = function(t, e) {
            if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" != typeof e && "function" != typeof e ? t : e
          }(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t));
          return n.state = {
            fontSize: null,
            ready: !1
          }, n.handleWindowResize = function() {
            n.process()
          }, "perfectFit" in t && console.warn("TextFit property perfectFit has been removed."), n.handleWindowResize = (0, h.default)(n.handleWindowResize, t.throttle), n
        }
        return function(t, e) {
          if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
          t.prototype = Object.create(e && e.prototype, {
            constructor: {
              value: t,
              enumerable: !1,
              writable: !0,
              configurable: !0
            }
          }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }(e, t), i(e, [{
          key: "componentDidMount",
          value: function() {
            this.props.autoResize && window.addEventListener("resize", this.handleWindowResize), this.process()
          }
        }, {
          key: "componentDidUpdate",
          value: function(t) {
            this.state.ready && ((0, o.default)(this.props, t) || this.process())
          }
        }, {
          key: "componentWillUnmount",
          value: function() {
            this.props.autoResize && window.removeEventListener("resize", this.handleWindowResize), this.pid = (0, c.default)()
          }
        }, {
          key: "process",
          value: function() {
            var t = this,
              e = this.props,
              n = e.min,
              r = e.max,
              i = e.mode,
              a = e.forceSingleModeWidth,
              s = e.onReady,
              o = this._parent,
              h = this._child,
              f = (0, p.innerWidth)(o),
              v = (0, p.innerHeight)(o);
            if (v <= 0 || isNaN(v)) console.warn("Can not process element without height. Make sure the element is displayed and has a static height.");
            else if (f <= 0 || isNaN(f)) console.warn("Can not process element without width. Make sure the element is displayed and has a static width.");
            else {
              var g = (0, c.default)();
              this.pid = g;
              var y = function() {
                  return g !== t.pid
                },
                b = "multi" === i ? function() {
                  return m(h, v)
                } : function() {
                  return d(h, f)
                },
                x = "multi" === i ? function() {
                  return d(h, f)
                } : function() {
                  return m(h, v)
                },
                S = void 0,
                E = n,
                P = r;
              this.setState({
                ready: !1
              }), (0, l.default)([function(e) {
                return (0, u.default)((function() {
                  return E <= P
                }), (function(e) {
                  if (y()) return e(!0);
                  S = parseInt((E + P) / 2, 10), t.setState({
                    fontSize: S
                  }, (function() {
                    return y() ? e(!0) : (b() ? E = S + 1 : P = S - 1, e())
                  }))
                }), e)
              }, function(e) {
                return "single" === i && a || x() ? e() : (E = n, P = S, (0, u.default)((function() {
                  return E < P
                }), (function(e) {
                  if (y()) return e(!0);
                  S = parseInt((E + P) / 2, 10), t.setState({
                    fontSize: S
                  }, (function() {
                    return g !== t.pid ? e(!0) : (x() ? E = S + 1 : P = S - 1, e())
                  }))
                }), e))
              }, function(e) {
                if (S = Math.min(E, P), S = Math.max(S, n), S = Math.min(S, r), S = Math.max(S, 0), y()) return e(!0);
                t.setState({
                  fontSize: S
                }, e)
              }], (function(e) {
                e || y() || t.setState({
                  ready: !0
                }, (function() {
                  return s(S)
                }))
              }))
            }
          }
        }, {
          key: "render",
          value: function() {
            var t = this,
              e = this.props,
              n = e.children,
              i = e.text,
              s = e.style,
              o = (e.min, e.max, e.mode),
              l = (e.forceWidth, e.forceSingleModeWidth, e.throttle, e.autoResize, e.onReady, function(t, e) {
                var n = {};
                for (var r in t) e.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(t, r) && (n[r] = t[r]);
                return n
              }(e, ["children", "text", "style", "min", "max", "mode", "forceWidth", "forceSingleModeWidth", "throttle", "autoResize", "onReady"])),
              u = this.state,
              h = u.fontSize,
              c = u.ready,
              p = r({}, s, {
                fontSize: h
              }),
              f = {
                display: c ? "block" : "inline-block"
              };
            return "single" === o && (f.whiteSpace = "nowrap"), a.default.createElement("div", r({
              ref: function(e) {
                return t._parent = e
              },
              style: p
            }, l), a.default.createElement("div", {
              ref: function(e) {
                return t._child = e
              },
              style: f
            }, i && "function" == typeof n ? c ? n(i) : i : n))
          }
        }]), e
      }(a.default.Component);
      v.propTypes = {
        children: s.default.node,
        text: s.default.string,
        min: s.default.number,
        max: s.default.number,
        mode: s.default.oneOf(["single", "multi"]),
        forceSingleModeWidth: s.default.bool,
        throttle: s.default.number,
        onReady: s.default.func
      }, v.defaultProps = {
        min: 1,
        max: 100,
        mode: "multi",
        forceSingleModeWidth: !0,
        throttle: 50,
        autoResize: !0,
        onReady: function() {}
      }, e.default = v
    },
    58936: (t, e, n) => {
      "use strict";
      e.cR = void 0;
      var r, i = (r = n(16728)) && r.__esModule ? r : {
        default: r
      };
      e.cR = i.default, i.default
    },
    57884: (t, e) => {
      "use strict";
      Object.defineProperty(e, "__esModule", {
        value: !0
      }), e.innerHeight = function(t) {
        var e = window.getComputedStyle(t, null);
        return e ? t.clientHeight - parseInt(e.getPropertyValue("padding-top"), 10) - parseInt(e.getPropertyValue("padding-bottom"), 10) : t.clientHeight
      }, e.innerWidth = function(t) {
        var e = window.getComputedStyle(t, null);
        return e ? t.clientWidth - parseInt(e.getPropertyValue("padding-left"), 10) - parseInt(e.getPropertyValue("padding-right"), 10) : t.clientWidth
      }
    },
    34332: (t, e, n) => {
      "use strict";
      Object.defineProperty(e, "__esModule", {
        value: !0
      }), e.default = function(t, e) {
        var n = [],
          r = 0,
          a = !0;

        function s(t) {
          function r() {
            e && e(t, n)
          }
          a ? i.default.nextTick(r) : r()
        }
        t.length > 0 ? t[0]((function e(i, a) {
          n.push(a), ++r >= t.length || i ? s(i) : t[r](e)
        })) : s(null), a = !1
      };
      var r, i = (r = n(44392)) && r.__esModule ? r : {
        default: r
      }
    },
    35459: (t, e) => {
      "use strict";
      Object.defineProperty(e, "__esModule", {
        value: !0
      }), e.default = function(t, e) {
        if (t === e) return !0;
        var n = Object.keys(t),
          r = Object.keys(e);
        if (n.length !== r.length) return !1;
        for (var i = Object.prototype.hasOwnProperty, a = 0; a < n.length; a++)
          if (!i.call(e, n[a]) || t[n[a]] !== e[n[a]]) return !1;
        return !0
      }
    },
    31792: (t, e) => {
      "use strict";
      Object.defineProperty(e, "__esModule", {
        value: !0
      }), e.default = function(t, e) {
        var n = void 0,
          r = void 0,
          i = void 0,
          a = void 0,
          s = 0;

        function o() {
          a = 0, s = +new Date, i = t.apply(n, r), n = null, r = null
        }
        return function() {
          n = this, r = arguments;
          var t = new Date - s;
          return a || (t >= e ? o() : a = setTimeout(o, e - t)), i
        }
      }
    },
    54080: (t, e) => {
      "use strict";
      Object.defineProperty(e, "__esModule", {
        value: !0
      }), e.default = function() {
        return n++
      };
      var n = 0
    },
    17368: (t, e) => {
      "use strict";
      Object.defineProperty(e, "__esModule", {
        value: !0
      }), e.default = function(t, e) {
        var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : n;
        t() ? e((function n(i) {
          for (var a = arguments.length, s = Array(a > 1 ? a - 1 : 0), o = 1; o < a; o++) s[o - 1] = arguments[o];
          i ? r(i) : t.apply(this, s) ? e(n) : r(null)
        })) : r(null)
      };
      var n = function() {}
    },
    92634: (t, e, n) => {
      "use strict";
      n.d(e, {
        m: () => i
      });
      var r = n(51664);

      function i(t, e) {
        return n = e || null, i = function(e) {
          return t.forEach((function(t) {
            return function(t, e) {
              return "function" == typeof t ? t(e) : t && (t.current = e), t
            }(t, e)
          }))
        }, (a = (0, r.useState)((function() {
          return {
            value: n,
            callback: i,
            facade: {
              get current() {
                return a.value
              },
              set current(t) {
                var e = a.value;
                e !== t && (a.value = t, a.callback(t, e))
              }
            }
          }
        }))[0]).callback = i, a.facade;
        var n, i, a
      }
    },
    35045: (t, e, n) => {
      "use strict";
      n.d(e, {
        W: () => s,
        Y: () => o
      });
      var r = n(87672);

      function i(t) {
        return t
      }

      function a(t, e) {
        void 0 === e && (e = i);
        var n = [],
          r = !1;
        return {
          read: function() {
            if (r) throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
            return n.length ? n[n.length - 1] : t
          },
          useMedium: function(t) {
            var i = e(t, r);
            return n.push(i),
              function() {
                n = n.filter((function(t) {
                  return t !== i
                }))
              }
          },
          assignSyncMedium: function(t) {
            for (r = !0; n.length;) {
              var e = n;
              n = [], e.forEach(t)
            }
            n = {
              push: function(e) {
                return t(e)
              },
              filter: function() {
                return n
              }
            }
          },
          assignMedium: function(t) {
            r = !0;
            var e = [];
            if (n.length) {
              var i = n;
              n = [], i.forEach(t), e = n
            }
            var a = function() {
                var n = e;
                e = [], n.forEach(t)
              },
              s = function() {
                return Promise.resolve().then(a)
              };
            s(), n = {
              push: function(t) {
                e.push(t), s()
              },
              filter: function(t) {
                return e = e.filter(t), n
              }
            }
          }
        }
      }

      function s(t, e) {
        return void 0 === e && (e = i), a(t, e)
      }

      function o(t) {
        void 0 === t && (t = {});
        var e = a(null);
        return e.options = (0, r.C3)({
          async: !0,
          ssr: !1
        }, t), e
      }
    },
    84296: (t, e, n) => {
      "use strict";
      n.d(e, {
        Q: () => h
      });
      var r = n(51664),
        i = n(77100);
      let a = "undefined" != typeof window ? r.useLayoutEffect : r.useEffect,
        s = t => t && !Array.isArray(t) && "object" == typeof t,
        o = [],
        l = {},
        u = i.cp;
      const h = function(t) {
        let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : o,
          n = l;
        s(t) ? (n = t, t = null, e = "dependencies" in n ? n.dependencies : o) : s(e) && (n = e, e = "dependencies" in n ? n.dependencies : o);
        let {
          scope: i,
          revertOnUpdate: h
        } = n, [c, p] = (0, r.useState)(!1);
        t && "function" != typeof t && console.warn("First parameter must be a function or config object");
        const f = u.context((() => {}), i),
          d = () => f.revert(),
          m = e && e.length && !h;
        return a((() => {
          if (t && f.add(t, i), !m || !c) return d
        }), e), m && a((() => (p(!0), d)), o), {
          context: f,
          contextSafe: t => f.add(null, t)
        }
      };
      h.register = t => {
        u = t
      }, h.headless = !0
    },
    62748: (t, e, n) => {
      "use strict";
      n.d(e, {
        U1: () => f
      });
      const r = function(t) {
          return "string" != typeof t || "" === t ? (console.error("The namespace must be a non-empty string."), !1) : !!/^[a-zA-Z][a-zA-Z0-9_.\-\/]*$/.test(t) || (console.error("The namespace can only contain numbers, letters, dashes, periods, underscores and slashes."), !1)
        },
        i = function(t) {
          return "string" != typeof t || "" === t ? (console.error("The hook name must be a non-empty string."), !1) : /^__/.test(t) ? (console.error("The hook name cannot begin with `__`."), !1) : !!/^[a-zA-Z][a-zA-Z0-9_.-]*$/.test(t) || (console.error("The hook name can only contain numbers, letters, dashes, periods and underscores."), !1)
        },
        a = function(t, e) {
          return function(n, a, s) {
            let o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 10;
            const l = t[e];
            if (!i(n)) return;
            if (!r(a)) return;
            if ("function" != typeof s) return void console.error("The hook callback must be a function.");
            if ("number" != typeof o) return void console.error("If specified, the hook priority must be a number.");
            const u = {
              callback: s,
              priority: o,
              namespace: a
            };
            if (l[n]) {
              const t = l[n].handlers;
              let e;
              for (e = t.length; e > 0 && !(o >= t[e - 1].priority); e--);
              e === t.length ? t[e] = u : t.splice(e, 0, u), l.__current.forEach((t => {
                t.name === n && t.currentIndex >= e && t.currentIndex++
              }))
            } else l[n] = {
              handlers: [u],
              runs: 0
            };
            "hookAdded" !== n && t.doAction("hookAdded", n, a, s, o)
          }
        },
        s = function(t, e) {
          let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          return function(a, s) {
            const o = t[e];
            if (!i(a)) return;
            if (!n && !r(s)) return;
            if (!o[a]) return 0;
            let l = 0;
            if (n) l = o[a].handlers.length, o[a] = {
              runs: o[a].runs,
              handlers: []
            };
            else {
              const t = o[a].handlers;
              for (let e = t.length - 1; e >= 0; e--) t[e].namespace === s && (t.splice(e, 1), l++, o.__current.forEach((t => {
                t.name === a && t.currentIndex >= e && t.currentIndex--
              })))
            }
            return "hookRemoved" !== a && t.doAction("hookRemoved", a, s), l
          }
        },
        o = function(t, e) {
          return function(n, r) {
            const i = t[e];
            return void 0 !== r ? n in i && i[n].handlers.some((t => t.namespace === r)) : n in i
          }
        },
        l = function(t, e) {
          let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          return function(r) {
            const i = t[e];
            i[r] || (i[r] = {
              handlers: [],
              runs: 0
            }), i[r].runs++;
            const a = i[r].handlers;
            for (var s = arguments.length, o = new Array(s > 1 ? s - 1 : 0), l = 1; l < s; l++) o[l - 1] = arguments[l];
            if (!a || !a.length) return n ? o[0] : void 0;
            const u = {
              name: r,
              currentIndex: 0
            };
            for (i.__current.push(u); u.currentIndex < a.length;) {
              const t = a[u.currentIndex].callback.apply(null, o);
              n && (o[0] = t), u.currentIndex++
            }
            return i.__current.pop(), n ? o[0] : void 0
          }
        },
        u = function(t, e) {
          return function() {
            var n;
            const r = t[e];
            return null !== (n = r.__current[r.__current.length - 1]?.name) && void 0 !== n ? n : null
          }
        },
        h = function(t, e) {
          return function(n) {
            const r = t[e];
            return void 0 === n ? void 0 !== r.__current[0] : !!r.__current[0] && n === r.__current[0].name
          }
        },
        c = function(t, e) {
          return function(n) {
            const r = t[e];
            if (i(n)) return r[n] && r[n].runs ? r[n].runs : 0
          }
        };
      class p {
        constructor() {
          this.actions = Object.create(null), this.actions.__current = [], this.filters = Object.create(null), this.filters.__current = [], this.addAction = a(this, "actions"), this.addFilter = a(this, "filters"), this.removeAction = s(this, "actions"), this.removeFilter = s(this, "filters"), this.hasAction = o(this, "actions"), this.hasFilter = o(this, "filters"), this.removeAllActions = s(this, "actions", !0), this.removeAllFilters = s(this, "filters", !0), this.doAction = l(this, "actions"), this.applyFilters = l(this, "filters", !0), this.currentAction = u(this, "actions"), this.currentFilter = u(this, "filters"), this.doingAction = h(this, "actions"), this.doingFilter = h(this, "filters"), this.didAction = c(this, "actions"), this.didFilter = c(this, "filters")
        }
      }
      const f = function() {
          return new p
        },
        d = f(),
        {
          addAction: m,
          addFilter: v,
          removeAction: g,
          removeFilter: y,
          hasAction: b,
          hasFilter: x,
          removeAllActions: S,
          removeAllFilters: E,
          doAction: P,
          applyFilters: C,
          currentAction: w,
          currentFilter: M,
          doingAction: T,
          doingFilter: A,
          didAction: k,
          didFilter: _,
          actions: D,
          filters: I
        } = d
    },
    86016: (t, e, n) => {
      t.exports = {
        default: n(40684),
        __esModule: !0
      }
    },
    18276: (t, e, n) => {
      t.exports = {
        default: n(41248),
        __esModule: !0
      }
    },
    2016: (t, e, n) => {
      t.exports = {
        default: n(47952),
        __esModule: !0
      }
    },
    4616: (t, e, n) => {
      t.exports = {
        default: n(37488),
        __esModule: !0
      }
    },
    48844: (t, e, n) => {
      t.exports = {
        default: n(46760),
        __esModule: !0
      }
    },
    48011: (t, e, n) => {
      t.exports = {
        default: n(90020),
        __esModule: !0
      }
    },
    70224: (t, e, n) => {
      t.exports = {
        default: n(32784),
        __esModule: !0
      }
    },
    65908: (t, e) => {
      "use strict";
      e.__esModule = !0, e.default = function(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
      }
    },
    272: (t, e, n) => {
      "use strict";
      e.__esModule = !0;
      var r, i = (r = n(2016)) && r.__esModule ? r : {
        default: r
      };
      e.default = function() {
        function t(t, e) {
          for (var n = 0; n < e.length; n++) {
            var r = e[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), (0, i.default)(t, r.key, r)
          }
        }
        return function(e, n, r) {
          return n && t(e.prototype, n), r && t(e, r), e
        }
      }()
    },
    67032: (t, e, n) => {
      "use strict";
      e.__esModule = !0;
      var r, i = (r = n(86016)) && r.__esModule ? r : {
        default: r
      };
      e.default = i.default || function(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = arguments[e];
          for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
        }
        return t
      }
    },
    92392: (t, e, n) => {
      "use strict";
      e.__esModule = !0;
      var r = s(n(48844)),
        i = s(n(18276)),
        a = s(n(83528));

      function s(t) {
        return t && t.__esModule ? t : {
          default: t
        }
      }
      e.default = function(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + (void 0 === e ? "undefined" : (0, a.default)(e)));
        t.prototype = (0, i.default)(e && e.prototype, {
          constructor: {
            value: t,
            enumerable: !1,
            writable: !0,
            configurable: !0
          }
        }), e && (r.default ? (0, r.default)(t, e) : t.__proto__ = e)
      }
    },
    44136: (t, e, n) => {
      "use strict";
      e.__esModule = !0;
      var r, i = (r = n(83528)) && r.__esModule ? r : {
        default: r
      };
      e.default = function(t, e) {
        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" !== (void 0 === e ? "undefined" : (0, i.default)(e)) && "function" != typeof e ? t : e
      }
    },
    83528: (t, e, n) => {
      "use strict";
      e.__esModule = !0;
      var r = s(n(70224)),
        i = s(n(48011)),
        a = "function" == typeof i.default && "symbol" == typeof r.default ? function(t) {
          return typeof t
        } : function(t) {
          return t && "function" == typeof i.default && t.constructor === i.default && t !== i.default.prototype ? "symbol" : typeof t
        };

      function s(t) {
        return t && t.__esModule ? t : {
          default: t
        }
      }
      e.default = "function" == typeof i.default && "symbol" === a(r.default) ? function(t) {
        return void 0 === t ? "undefined" : a(t)
      } : function(t) {
        return t && "function" == typeof i.default && t.constructor === i.default && t !== i.default.prototype ? "symbol" : void 0 === t ? "undefined" : a(t)
      }
    },
    65772: (t, e, n) => {
      var r;
      ! function(i, a, s, o) {
        "use strict";
        var l, u = ["", "webkit", "Moz", "MS", "ms", "o"],
          h = a.createElement("div"),
          c = "function",
          p = Math.round,
          f = Math.abs,
          d = Date.now;

        function m(t, e, n) {
          return setTimeout(E(t, n), e)
        }

        function v(t, e, n) {
          return !!Array.isArray(t) && (g(t, n[e], n), !0)
        }

        function g(t, e, n) {
          var r;
          if (t)
            if (t.forEach) t.forEach(e, n);
            else if (t.length !== o)
            for (r = 0; r < t.length;) e.call(n, t[r], r, t), r++;
          else
            for (r in t) t.hasOwnProperty(r) && e.call(n, t[r], r, t)
        }

        function y(t, e, n) {
          var r = "DEPRECATED METHOD: " + e + "\n" + n + " AT \n";
          return function() {
            var e = new Error("get-stack-trace"),
              n = e && e.stack ? e.stack.replace(/^[^\(]+?[\n$]/gm, "").replace(/^\s+at\s+/gm, "").replace(/^Object.<anonymous>\s*\(/gm, "{anonymous}()@") : "Unknown Stack Trace",
              a = i.console && (i.console.warn || i.console.log);
            return a && a.call(i.console, r, n), t.apply(this, arguments)
          }
        }
        l = "function" != typeof Object.assign ? function(t) {
          if (t === o || null === t) throw new TypeError("Cannot convert undefined or null to object");
          for (var e = Object(t), n = 1; n < arguments.length; n++) {
            var r = arguments[n];
            if (r !== o && null !== r)
              for (var i in r) r.hasOwnProperty(i) && (e[i] = r[i])
          }
          return e
        } : Object.assign;
        var b = y((function(t, e, n) {
            for (var r = Object.keys(e), i = 0; i < r.length;)(!n || n && t[r[i]] === o) && (t[r[i]] = e[r[i]]), i++;
            return t
          }), "extend", "Use `assign`."),
          x = y((function(t, e) {
            return b(t, e, !0)
          }), "merge", "Use `assign`.");

        function S(t, e, n) {
          var r, i = e.prototype;
          (r = t.prototype = Object.create(i)).constructor = t, r._super = i, n && l(r, n)
        }

        function E(t, e) {
          return function() {
            return t.apply(e, arguments)
          }
        }

        function P(t, e) {
          return typeof t == c ? t.apply(e && e[0] || o, e) : t
        }

        function C(t, e) {
          return t === o ? e : t
        }

        function w(t, e, n) {
          g(k(e), (function(e) {
            t.addEventListener(e, n, !1)
          }))
        }

        function M(t, e, n) {
          g(k(e), (function(e) {
            t.removeEventListener(e, n, !1)
          }))
        }

        function T(t, e) {
          for (; t;) {
            if (t == e) return !0;
            t = t.parentNode
          }
          return !1
        }

        function A(t, e) {
          return t.indexOf(e) > -1
        }

        function k(t) {
          return t.trim().split(/\s+/g)
        }

        function _(t, e, n) {
          if (t.indexOf && !n) return t.indexOf(e);
          for (var r = 0; r < t.length;) {
            if (n && t[r][n] == e || !n && t[r] === e) return r;
            r++
          }
          return -1
        }

        function D(t) {
          return Array.prototype.slice.call(t, 0)
        }

        function I(t, e, n) {
          for (var r = [], i = [], a = 0; a < t.length;) {
            var s = e ? t[a][e] : t[a];
            _(i, s) < 0 && r.push(t[a]), i[a] = s, a++
          }
          return n && (r = e ? r.sort((function(t, n) {
            return t[e] > n[e]
          })) : r.sort()), r
        }

        function F(t, e) {
          for (var n, r, i = e[0].toUpperCase() + e.slice(1), a = 0; a < u.length;) {
            if ((r = (n = u[a]) ? n + i : e) in t) return r;
            a++
          }
          return o
        }
        var O = 1;

        function V(t) {
          var e = t.ownerDocument || t;
          return e.defaultView || e.parentWindow || i
        }
        var R = "ontouchstart" in i,
          L = F(i, "PointerEvent") !== o,
          B = R && /mobile|tablet|ip(ad|hone|od)|android/i.test(navigator.userAgent),
          N = "touch",
          j = "mouse",
          z = 25,
          G = 1,
          H = 4,
          W = 8,
          U = 1,
          q = 2,
          Y = 4,
          $ = 8,
          K = 16,
          X = q | Y,
          Z = $ | K,
          J = X | Z,
          Q = ["x", "y"],
          tt = ["clientX", "clientY"];

        function et(t, e) {
          var n = this;
          this.manager = t, this.callback = e, this.element = t.element, this.target = t.options.inputTarget, this.domHandler = function(e) {
            P(t.options.enable, [t]) && n.handler(e)
          }, this.init()
        }

        function nt(t, e, n) {
          var r = n.pointers.length,
            i = n.changedPointers.length,
            a = e & G && r - i == 0,
            s = e & (H | W) && r - i == 0;
          n.isFirst = !!a, n.isFinal = !!s, a && (t.session = {}), n.eventType = e,
            function(t, e) {
              var n = t.session,
                r = e.pointers,
                i = r.length;
              n.firstInput || (n.firstInput = rt(e)), i > 1 && !n.firstMultiple ? n.firstMultiple = rt(e) : 1 === i && (n.firstMultiple = !1);
              var a = n.firstInput,
                s = n.firstMultiple,
                l = s ? s.center : a.center,
                u = e.center = it(r);
              e.timeStamp = d(), e.deltaTime = e.timeStamp - a.timeStamp, e.angle = lt(l, u), e.distance = ot(l, u),
                function(t, e) {
                  var n = e.center,
                    r = t.offsetDelta || {},
                    i = t.prevDelta || {},
                    a = t.prevInput || {};
                  e.eventType !== G && a.eventType !== H || (i = t.prevDelta = {
                    x: a.deltaX || 0,
                    y: a.deltaY || 0
                  }, r = t.offsetDelta = {
                    x: n.x,
                    y: n.y
                  }), e.deltaX = i.x + (n.x - r.x), e.deltaY = i.y + (n.y - r.y)
                }(n, e), e.offsetDirection = st(e.deltaX, e.deltaY);
              var h, c, p = at(e.deltaTime, e.deltaX, e.deltaY);
              e.overallVelocityX = p.x, e.overallVelocityY = p.y, e.overallVelocity = f(p.x) > f(p.y) ? p.x : p.y, e.scale = s ? (h = s.pointers, ot((c = r)[0], c[1], tt) / ot(h[0], h[1], tt)) : 1, e.rotation = s ? function(t, e) {
                  return lt(e[1], e[0], tt) + lt(t[1], t[0], tt)
                }(s.pointers, r) : 0, e.maxPointers = n.prevInput ? e.pointers.length > n.prevInput.maxPointers ? e.pointers.length : n.prevInput.maxPointers : e.pointers.length,
                function(t, e) {
                  var n, r, i, a, s = t.lastInterval || e,
                    l = e.timeStamp - s.timeStamp;
                  if (e.eventType != W && (l > z || s.velocity === o)) {
                    var u = e.deltaX - s.deltaX,
                      h = e.deltaY - s.deltaY,
                      c = at(l, u, h);
                    r = c.x, i = c.y, n = f(c.x) > f(c.y) ? c.x : c.y, a = st(u, h), t.lastInterval = e
                  } else n = s.velocity, r = s.velocityX, i = s.velocityY, a = s.direction;
                  e.velocity = n, e.velocityX = r, e.velocityY = i, e.direction = a
                }(n, e);
              var m = t.element;
              T(e.srcEvent.target, m) && (m = e.srcEvent.target), e.target = m
            }(t, n), t.emit("hammer.input", n), t.recognize(n), t.session.prevInput = n
        }

        function rt(t) {
          for (var e = [], n = 0; n < t.pointers.length;) e[n] = {
            clientX: p(t.pointers[n].clientX),
            clientY: p(t.pointers[n].clientY)
          }, n++;
          return {
            timeStamp: d(),
            pointers: e,
            center: it(e),
            deltaX: t.deltaX,
            deltaY: t.deltaY
          }
        }

        function it(t) {
          var e = t.length;
          if (1 === e) return {
            x: p(t[0].clientX),
            y: p(t[0].clientY)
          };
          for (var n = 0, r = 0, i = 0; i < e;) n += t[i].clientX, r += t[i].clientY, i++;
          return {
            x: p(n / e),
            y: p(r / e)
          }
        }

        function at(t, e, n) {
          return {
            x: e / t || 0,
            y: n / t || 0
          }
        }

        function st(t, e) {
          return t === e ? U : f(t) >= f(e) ? t < 0 ? q : Y : e < 0 ? $ : K
        }

        function ot(t, e, n) {
          n || (n = Q);
          var r = e[n[0]] - t[n[0]],
            i = e[n[1]] - t[n[1]];
          return Math.sqrt(r * r + i * i)
        }

        function lt(t, e, n) {
          n || (n = Q);
          var r = e[n[0]] - t[n[0]],
            i = e[n[1]] - t[n[1]];
          return 180 * Math.atan2(i, r) / Math.PI
        }
        et.prototype = {
          handler: function() {},
          init: function() {
            this.evEl && w(this.element, this.evEl, this.domHandler), this.evTarget && w(this.target, this.evTarget, this.domHandler), this.evWin && w(V(this.element), this.evWin, this.domHandler)
          },
          destroy: function() {
            this.evEl && M(this.element, this.evEl, this.domHandler), this.evTarget && M(this.target, this.evTarget, this.domHandler), this.evWin && M(V(this.element), this.evWin, this.domHandler)
          }
        };
        var ut = {
            mousedown: G,
            mousemove: 2,
            mouseup: H
          },
          ht = "mousedown",
          ct = "mousemove mouseup";

        function pt() {
          this.evEl = ht, this.evWin = ct, this.pressed = !1, et.apply(this, arguments)
        }
        S(pt, et, {
          handler: function(t) {
            var e = ut[t.type];
            e & G && 0 === t.button && (this.pressed = !0), 2 & e && 1 !== t.which && (e = H), this.pressed && (e & H && (this.pressed = !1), this.callback(this.manager, e, {
              pointers: [t],
              changedPointers: [t],
              pointerType: j,
              srcEvent: t
            }))
          }
        });
        var ft = {
            pointerdown: G,
            pointermove: 2,
            pointerup: H,
            pointercancel: W,
            pointerout: W
          },
          dt = {
            2: N,
            3: "pen",
            4: j,
            5: "kinect"
          },
          mt = "pointerdown",
          vt = "pointermove pointerup pointercancel";

        function gt() {
          this.evEl = mt, this.evWin = vt, et.apply(this, arguments), this.store = this.manager.session.pointerEvents = []
        }
        i.MSPointerEvent && !i.PointerEvent && (mt = "MSPointerDown", vt = "MSPointerMove MSPointerUp MSPointerCancel"), S(gt, et, {
          handler: function(t) {
            var e = this.store,
              n = !1,
              r = t.type.toLowerCase().replace("ms", ""),
              i = ft[r],
              a = dt[t.pointerType] || t.pointerType,
              s = a == N,
              o = _(e, t.pointerId, "pointerId");
            i & G && (0 === t.button || s) ? o < 0 && (e.push(t), o = e.length - 1) : i & (H | W) && (n = !0), o < 0 || (e[o] = t, this.callback(this.manager, i, {
              pointers: e,
              changedPointers: [t],
              pointerType: a,
              srcEvent: t
            }), n && e.splice(o, 1))
          }
        });
        var yt = {
          touchstart: G,
          touchmove: 2,
          touchend: H,
          touchcancel: W
        };

        function bt() {
          this.evTarget = "touchstart", this.evWin = "touchstart touchmove touchend touchcancel", this.started = !1, et.apply(this, arguments)
        }

        function xt(t, e) {
          var n = D(t.touches),
            r = D(t.changedTouches);
          return e & (H | W) && (n = I(n.concat(r), "identifier", !0)), [n, r]
        }
        S(bt, et, {
          handler: function(t) {
            var e = yt[t.type];
            if (e === G && (this.started = !0), this.started) {
              var n = xt.call(this, t, e);
              e & (H | W) && n[0].length - n[1].length == 0 && (this.started = !1), this.callback(this.manager, e, {
                pointers: n[0],
                changedPointers: n[1],
                pointerType: N,
                srcEvent: t
              })
            }
          }
        });
        var St = {
            touchstart: G,
            touchmove: 2,
            touchend: H,
            touchcancel: W
          },
          Et = "touchstart touchmove touchend touchcancel";

        function Pt() {
          this.evTarget = Et, this.targetIds = {}, et.apply(this, arguments)
        }

        function Ct(t, e) {
          var n = D(t.touches),
            r = this.targetIds;
          if (e & (2 | G) && 1 === n.length) return r[n[0].identifier] = !0, [n, n];
          var i, a, s = D(t.changedTouches),
            o = [],
            l = this.target;
          if (a = n.filter((function(t) {
              return T(t.target, l)
            })), e === G)
            for (i = 0; i < a.length;) r[a[i].identifier] = !0, i++;
          for (i = 0; i < s.length;) r[s[i].identifier] && o.push(s[i]), e & (H | W) && delete r[s[i].identifier], i++;
          return o.length ? [I(a.concat(o), "identifier", !0), o] : void 0
        }
        S(Pt, et, {
          handler: function(t) {
            var e = St[t.type],
              n = Ct.call(this, t, e);
            n && this.callback(this.manager, e, {
              pointers: n[0],
              changedPointers: n[1],
              pointerType: N,
              srcEvent: t
            })
          }
        });
        var wt = 2500;

        function Mt() {
          et.apply(this, arguments);
          var t = E(this.handler, this);
          this.touch = new Pt(this.manager, t), this.mouse = new pt(this.manager, t), this.primaryTouch = null, this.lastTouches = []
        }

        function Tt(t, e) {
          t & G ? (this.primaryTouch = e.changedPointers[0].identifier, At.call(this, e)) : t & (H | W) && At.call(this, e)
        }

        function At(t) {
          var e = t.changedPointers[0];
          if (e.identifier === this.primaryTouch) {
            var n = {
              x: e.clientX,
              y: e.clientY
            };
            this.lastTouches.push(n);
            var r = this.lastTouches;
            setTimeout((function() {
              var t = r.indexOf(n);
              t > -1 && r.splice(t, 1)
            }), wt)
          }
        }

        function kt(t) {
          for (var e = t.srcEvent.clientX, n = t.srcEvent.clientY, r = 0; r < this.lastTouches.length; r++) {
            var i = this.lastTouches[r],
              a = Math.abs(e - i.x),
              s = Math.abs(n - i.y);
            if (a <= 25 && s <= 25) return !0
          }
          return !1
        }
        S(Mt, et, {
          handler: function(t, e, n) {
            var r = n.pointerType == N,
              i = n.pointerType == j;
            if (!(i && n.sourceCapabilities && n.sourceCapabilities.firesTouchEvents)) {
              if (r) Tt.call(this, e, n);
              else if (i && kt.call(this, n)) return;
              this.callback(t, e, n)
            }
          },
          destroy: function() {
            this.touch.destroy(), this.mouse.destroy()
          }
        });
        var _t = F(h.style, "touchAction"),
          Dt = _t !== o,
          It = "compute",
          Ft = "auto",
          Ot = "manipulation",
          Vt = "none",
          Rt = "pan-x",
          Lt = "pan-y",
          Bt = function() {
            if (!Dt) return !1;
            var t = {},
              e = i.CSS && i.CSS.supports;
            return ["auto", "manipulation", "pan-y", "pan-x", "pan-x pan-y", "none"].forEach((function(n) {
              t[n] = !e || i.CSS.supports("touch-action", n)
            })), t
          }();

        function Nt(t, e) {
          this.manager = t, this.set(e)
        }
        Nt.prototype = {
          set: function(t) {
            t == It && (t = this.compute()), Dt && this.manager.element.style && Bt[t] && (this.manager.element.style[_t] = t), this.actions = t.toLowerCase().trim()
          },
          update: function() {
            this.set(this.manager.options.touchAction)
          },
          compute: function() {
            var t = [];
            return g(this.manager.recognizers, (function(e) {
                P(e.options.enable, [e]) && (t = t.concat(e.getTouchAction()))
              })),
              function(t) {
                if (A(t, Vt)) return Vt;
                var e = A(t, Rt),
                  n = A(t, Lt);
                return e && n ? Vt : e || n ? e ? Rt : Lt : A(t, Ot) ? Ot : Ft
              }(t.join(" "))
          },
          preventDefaults: function(t) {
            var e = t.srcEvent,
              n = t.offsetDirection;
            if (this.manager.session.prevented) e.preventDefault();
            else {
              var r = this.actions,
                i = A(r, Vt) && !Bt[Vt],
                a = A(r, Lt) && !Bt[Lt],
                s = A(r, Rt) && !Bt[Rt];
              if (i) {
                var o = 1 === t.pointers.length,
                  l = t.distance < 2,
                  u = t.deltaTime < 250;
                if (o && l && u) return
              }
              if (!s || !a) return i || a && n & X || s && n & Z ? this.preventSrc(e) : void 0
            }
          },
          preventSrc: function(t) {
            this.manager.session.prevented = !0, t.preventDefault()
          }
        };
        var jt = 1,
          zt = 32;

        function Gt(t) {
          this.options = l({}, this.defaults, t || {}), this.id = O++, this.manager = null, this.options.enable = C(this.options.enable, !0), this.state = jt, this.simultaneous = {}, this.requireFail = []
        }

        function Ht(t) {
          return 16 & t ? "cancel" : 8 & t ? "end" : 4 & t ? "move" : 2 & t ? "start" : ""
        }

        function Wt(t) {
          return t == K ? "down" : t == $ ? "up" : t == q ? "left" : t == Y ? "right" : ""
        }

        function Ut(t, e) {
          var n = e.manager;
          return n ? n.get(t) : t
        }

        function qt() {
          Gt.apply(this, arguments)
        }

        function Yt() {
          qt.apply(this, arguments), this.pX = null, this.pY = null
        }

        function $t() {
          qt.apply(this, arguments)
        }

        function Kt() {
          Gt.apply(this, arguments), this._timer = null, this._input = null
        }

        function Xt() {
          qt.apply(this, arguments)
        }

        function Zt() {
          qt.apply(this, arguments)
        }

        function Jt() {
          Gt.apply(this, arguments), this.pTime = !1, this.pCenter = !1, this._timer = null, this._input = null, this.count = 0
        }

        function Qt(t, e) {
          return (e = e || {}).recognizers = C(e.recognizers, Qt.defaults.preset), new te(t, e)
        }

        function te(t, e) {
          this.options = l({}, Qt.defaults, e || {}), this.options.inputTarget = this.options.inputTarget || t, this.handlers = {}, this.session = {}, this.recognizers = [], this.oldCssProps = {}, this.element = t, this.input = new(this.options.inputClass || (L ? gt : B ? Pt : R ? Mt : pt))(this, nt), this.touchAction = new Nt(this, this.options.touchAction), ee(this, !0), g(this.options.recognizers, (function(t) {
            var e = this.add(new t[0](t[1]));
            t[2] && e.recognizeWith(t[2]), t[3] && e.requireFailure(t[3])
          }), this)
        }

        function ee(t, e) {
          var n, r = t.element;
          r.style && (g(t.options.cssProps, (function(i, a) {
            n = F(r.style, a), e ? (t.oldCssProps[n] = r.style[n], r.style[n] = i) : r.style[n] = t.oldCssProps[n] || ""
          })), e || (t.oldCssProps = {}))
        }
        Gt.prototype = {
          defaults: {},
          set: function(t) {
            return l(this.options, t), this.manager && this.manager.touchAction.update(), this
          },
          recognizeWith: function(t) {
            if (v(t, "recognizeWith", this)) return this;
            var e = this.simultaneous;
            return e[(t = Ut(t, this)).id] || (e[t.id] = t, t.recognizeWith(this)), this
          },
          dropRecognizeWith: function(t) {
            return v(t, "dropRecognizeWith", this) || (t = Ut(t, this), delete this.simultaneous[t.id]), this
          },
          requireFailure: function(t) {
            if (v(t, "requireFailure", this)) return this;
            var e = this.requireFail;
            return -1 === _(e, t = Ut(t, this)) && (e.push(t), t.requireFailure(this)), this
          },
          dropRequireFailure: function(t) {
            if (v(t, "dropRequireFailure", this)) return this;
            t = Ut(t, this);
            var e = _(this.requireFail, t);
            return e > -1 && this.requireFail.splice(e, 1), this
          },
          hasRequireFailures: function() {
            return this.requireFail.length > 0
          },
          canRecognizeWith: function(t) {
            return !!this.simultaneous[t.id]
          },
          emit: function(t) {
            var e = this,
              n = this.state;

            function r(n) {
              e.manager.emit(n, t)
            }
            n < 8 && r(e.options.event + Ht(n)), r(e.options.event), t.additionalEvent && r(t.additionalEvent), n >= 8 && r(e.options.event + Ht(n))
          },
          tryEmit: function(t) {
            if (this.canEmit()) return this.emit(t);
            this.state = zt
          },
          canEmit: function() {
            for (var t = 0; t < this.requireFail.length;) {
              if (!(this.requireFail[t].state & (zt | jt))) return !1;
              t++
            }
            return !0
          },
          recognize: function(t) {
            var e = l({}, t);
            if (!P(this.options.enable, [this, e])) return this.reset(), void(this.state = zt);
            56 & this.state && (this.state = jt), this.state = this.process(e), 30 & this.state && this.tryEmit(e)
          },
          process: function(t) {},
          getTouchAction: function() {},
          reset: function() {}
        }, S(qt, Gt, {
          defaults: {
            pointers: 1
          },
          attrTest: function(t) {
            var e = this.options.pointers;
            return 0 === e || t.pointers.length === e
          },
          process: function(t) {
            var e = this.state,
              n = t.eventType,
              r = 6 & e,
              i = this.attrTest(t);
            return r && (n & W || !i) ? 16 | e : r || i ? n & H ? 8 | e : 2 & e ? 4 | e : 2 : zt
          }
        }), S(Yt, qt, {
          defaults: {
            event: "pan",
            threshold: 10,
            pointers: 1,
            direction: J
          },
          getTouchAction: function() {
            var t = this.options.direction,
              e = [];
            return t & X && e.push(Lt), t & Z && e.push(Rt), e
          },
          directionTest: function(t) {
            var e = this.options,
              n = !0,
              r = t.distance,
              i = t.direction,
              a = t.deltaX,
              s = t.deltaY;
            return i & e.direction || (e.direction & X ? (i = 0 === a ? U : a < 0 ? q : Y, n = a != this.pX, r = Math.abs(t.deltaX)) : (i = 0 === s ? U : s < 0 ? $ : K, n = s != this.pY, r = Math.abs(t.deltaY))), t.direction = i, n && r > e.threshold && i & e.direction
          },
          attrTest: function(t) {
            return qt.prototype.attrTest.call(this, t) && (2 & this.state || !(2 & this.state) && this.directionTest(t))
          },
          emit: function(t) {
            this.pX = t.deltaX, this.pY = t.deltaY;
            var e = Wt(t.direction);
            e && (t.additionalEvent = this.options.event + e), this._super.emit.call(this, t)
          }
        }), S($t, qt, {
          defaults: {
            event: "pinch",
            threshold: 0,
            pointers: 2
          },
          getTouchAction: function() {
            return [Vt]
          },
          attrTest: function(t) {
            return this._super.attrTest.call(this, t) && (Math.abs(t.scale - 1) > this.options.threshold || 2 & this.state)
          },
          emit: function(t) {
            if (1 !== t.scale) {
              var e = t.scale < 1 ? "in" : "out";
              t.additionalEvent = this.options.event + e
            }
            this._super.emit.call(this, t)
          }
        }), S(Kt, Gt, {
          defaults: {
            event: "press",
            pointers: 1,
            time: 251,
            threshold: 9
          },
          getTouchAction: function() {
            return [Ft]
          },
          process: function(t) {
            var e = this.options,
              n = t.pointers.length === e.pointers,
              r = t.distance < e.threshold,
              i = t.deltaTime > e.time;
            if (this._input = t, !r || !n || t.eventType & (H | W) && !i) this.reset();
            else if (t.eventType & G) this.reset(), this._timer = m((function() {
              this.state = 8, this.tryEmit()
            }), e.time, this);
            else if (t.eventType & H) return 8;
            return zt
          },
          reset: function() {
            clearTimeout(this._timer)
          },
          emit: function(t) {
            8 === this.state && (t && t.eventType & H ? this.manager.emit(this.options.event + "up", t) : (this._input.timeStamp = d(), this.manager.emit(this.options.event, this._input)))
          }
        }), S(Xt, qt, {
          defaults: {
            event: "rotate",
            threshold: 0,
            pointers: 2
          },
          getTouchAction: function() {
            return [Vt]
          },
          attrTest: function(t) {
            return this._super.attrTest.call(this, t) && (Math.abs(t.rotation) > this.options.threshold || 2 & this.state)
          }
        }), S(Zt, qt, {
          defaults: {
            event: "swipe",
            threshold: 10,
            velocity: .3,
            direction: X | Z,
            pointers: 1
          },
          getTouchAction: function() {
            return Yt.prototype.getTouchAction.call(this)
          },
          attrTest: function(t) {
            var e, n = this.options.direction;
            return n & (X | Z) ? e = t.overallVelocity : n & X ? e = t.overallVelocityX : n & Z && (e = t.overallVelocityY), this._super.attrTest.call(this, t) && n & t.offsetDirection && t.distance > this.options.threshold && t.maxPointers == this.options.pointers && f(e) > this.options.velocity && t.eventType & H
          },
          emit: function(t) {
            var e = Wt(t.offsetDirection);
            e && this.manager.emit(this.options.event + e, t), this.manager.emit(this.options.event, t)
          }
        }), S(Jt, Gt, {
          defaults: {
            event: "tap",
            pointers: 1,
            taps: 1,
            interval: 300,
            time: 250,
            threshold: 9,
            posThreshold: 10
          },
          getTouchAction: function() {
            return [Ot]
          },
          process: function(t) {
            var e = this.options,
              n = t.pointers.length === e.pointers,
              r = t.distance < e.threshold,
              i = t.deltaTime < e.time;
            if (this.reset(), t.eventType & G && 0 === this.count) return this.failTimeout();
            if (r && i && n) {
              if (t.eventType != H) return this.failTimeout();
              var a = !this.pTime || t.timeStamp - this.pTime < e.interval,
                s = !this.pCenter || ot(this.pCenter, t.center) < e.posThreshold;
              if (this.pTime = t.timeStamp, this.pCenter = t.center, s && a ? this.count += 1 : this.count = 1, this._input = t, 0 == this.count % e.taps) return this.hasRequireFailures() ? (this._timer = m((function() {
                this.state = 8, this.tryEmit()
              }), e.interval, this), 2) : 8
            }
            return zt
          },
          failTimeout: function() {
            return this._timer = m((function() {
              this.state = zt
            }), this.options.interval, this), zt
          },
          reset: function() {
            clearTimeout(this._timer)
          },
          emit: function() {
            8 == this.state && (this._input.tapCount = this.count, this.manager.emit(this.options.event, this._input))
          }
        }), Qt.VERSION = "2.0.7", Qt.defaults = {
          domEvents: !1,
          touchAction: It,
          enable: !0,
          inputTarget: null,
          inputClass: null,
          preset: [
            [Xt, {
              enable: !1
            }],
            [$t, {
                enable: !1
              },
              ["rotate"]
            ],
            [Zt, {
              direction: X
            }],
            [Yt, {
                direction: X
              },
              ["swipe"]
            ],
            [Jt],
            [Jt, {
                event: "doubletap",
                taps: 2
              },
              ["tap"]
            ],
            [Kt]
          ],
          cssProps: {
            userSelect: "none",
            touchSelect: "none",
            touchCallout: "none",
            contentZooming: "none",
            userDrag: "none",
            tapHighlightColor: "rgba(0,0,0,0)"
          }
        }, te.prototype = {
          set: function(t) {
            return l(this.options, t), t.touchAction && this.touchAction.update(), t.inputTarget && (this.input.destroy(), this.input.target = t.inputTarget, this.input.init()), this
          },
          stop: function(t) {
            this.session.stopped = t ? 2 : 1
          },
          recognize: function(t) {
            var e = this.session;
            if (!e.stopped) {
              var n;
              this.touchAction.preventDefaults(t);
              var r = this.recognizers,
                i = e.curRecognizer;
              (!i || i && 8 & i.state) && (i = e.curRecognizer = null);
              for (var a = 0; a < r.length;) n = r[a], 2 === e.stopped || i && n != i && !n.canRecognizeWith(i) ? n.reset() : n.recognize(t), !i && 14 & n.state && (i = e.curRecognizer = n), a++
            }
          },
          get: function(t) {
            if (t instanceof Gt) return t;
            for (var e = this.recognizers, n = 0; n < e.length; n++)
              if (e[n].options.event == t) return e[n];
            return null
          },
          add: function(t) {
            if (v(t, "add", this)) return this;
            var e = this.get(t.options.event);
            return e && this.remove(e), this.recognizers.push(t), t.manager = this, this.touchAction.update(), t
          },
          remove: function(t) {
            if (v(t, "remove", this)) return this;
            if (t = this.get(t)) {
              var e = this.recognizers,
                n = _(e, t); - 1 !== n && (e.splice(n, 1), this.touchAction.update())
            }
            return this
          },
          on: function(t, e) {
            if (t !== o && e !== o) {
              var n = this.handlers;
              return g(k(t), (function(t) {
                n[t] = n[t] || [], n[t].push(e)
              })), this
            }
          },
          off: function(t, e) {
            if (t !== o) {
              var n = this.handlers;
              return g(k(t), (function(t) {
                e ? n[t] && n[t].splice(_(n[t], e), 1) : delete n[t]
              })), this
            }
          },
          emit: function(t, e) {
            this.options.domEvents && function(t, e) {
              var n = a.createEvent("Event");
              n.initEvent(t, !0, !0), n.gesture = e, e.target.dispatchEvent(n)
            }(t, e);
            var n = this.handlers[t] && this.handlers[t].slice();
            if (n && n.length) {
              e.type = t, e.preventDefault = function() {
                e.srcEvent.preventDefault()
              };
              for (var r = 0; r < n.length;) n[r](e), r++
            }
          },
          destroy: function() {
            this.element && ee(this, !1), this.handlers = {}, this.session = {}, this.input.destroy(), this.element = null
          }
        }, l(Qt, {
          INPUT_START: G,
          INPUT_MOVE: 2,
          INPUT_END: H,
          INPUT_CANCEL: W,
          STATE_POSSIBLE: jt,
          STATE_BEGAN: 2,
          STATE_CHANGED: 4,
          STATE_ENDED: 8,
          STATE_RECOGNIZED: 8,
          STATE_CANCELLED: 16,
          STATE_FAILED: zt,
          DIRECTION_NONE: U,
          DIRECTION_LEFT: q,
          DIRECTION_RIGHT: Y,
          DIRECTION_UP: $,
          DIRECTION_DOWN: K,
          DIRECTION_HORIZONTAL: X,
          DIRECTION_VERTICAL: Z,
          DIRECTION_ALL: J,
          Manager: te,
          Input: et,
          TouchAction: Nt,
          TouchInput: Pt,
          MouseInput: pt,
          PointerEventInput: gt,
          TouchMouseInput: Mt,
          SingleTouchInput: bt,
          Recognizer: Gt,
          AttrRecognizer: qt,
          Tap: Jt,
          Pan: Yt,
          Swipe: Zt,
          Pinch: $t,
          Rotate: Xt,
          Press: Kt,
          on: w,
          off: M,
          each: g,
          merge: x,
          extend: b,
          assign: l,
          inherit: S,
          bindFn: E,
          prefixed: F
        }), (void 0 !== i ? i : "undefined" != typeof self ? self : {}).Hammer = Qt, (r = function() {
          return Qt
        }.call(e, n, e, t)) === o || (t.exports = r)
      }(window, document)
    },
    97064: (t, e, n) => {
      "use strict";
      n.d(e, {
        O: () => i,
        s: () => r
      });
      var r = function() {},
        i = function() {}
    },
    31580: (t, e, n) => {
      var r = n(36056).Symbol;
      t.exports = r
    },
    95992: (t, e, n) => {
      var r = n(31580),
        i = n(78584),
        a = n(49176),
        s = r ? r.toStringTag : void 0;
      t.exports = function(t) {
        return null == t ? void 0 === t ? "[object Undefined]" : "[object Null]" : s && s in Object(t) ? i(t) : a(t)
      }
    },
    96096: (t, e, n) => {
      var r = n(57520),
        i = /^\s+/;
      t.exports = function(t) {
        return t ? t.slice(0, r(t) + 1).replace(i, "") : t
      }
    },
    81044: (t, e, n) => {
      var r = "object" == typeof n.g && n.g && n.g.Object === Object && n.g;
      t.exports = r
    },
    78584: (t, e, n) => {
      var r = n(31580),
        i = Object.prototype,
        a = i.hasOwnProperty,
        s = i.toString,
        o = r ? r.toStringTag : void 0;
      t.exports = function(t) {
        var e = a.call(t, o),
          n = t[o];
        try {
          t[o] = void 0;
          var r = !0
        } catch (t) {}
        var i = s.call(t);
        return r && (e ? t[o] = n : delete t[o]), i
      }
    },
    49176: t => {
      var e = Object.prototype.toString;
      t.exports = function(t) {
        return e.call(t)
      }
    },
    36056: (t, e, n) => {
      var r = n(81044),
        i = "object" == typeof self && self && self.Object === Object && self,
        a = r || i || Function("return this")();
      t.exports = a
    },
    57520: t => {
      var e = /\s/;
      t.exports = function(t) {
        for (var n = t.length; n-- && e.test(t.charAt(n)););
        return n
      }
    },
    69760: (t, e, n) => {
      var r = n(89048),
        i = n(12721),
        a = n(80088),
        s = Math.max,
        o = Math.min;
      t.exports = function(t, e, n) {
        var l, u, h, c, p, f, d = 0,
          m = !1,
          v = !1,
          g = !0;
        if ("function" != typeof t) throw new TypeError("Expected a function");

        function y(e) {
          var n = l,
            r = u;
          return l = u = void 0, d = e, c = t.apply(r, n)
        }

        function b(t) {
          var n = t - f;
          return void 0 === f || n >= e || n < 0 || v && t - d >= h
        }

        function x() {
          var t = i();
          if (b(t)) return S(t);
          p = setTimeout(x, function(t) {
            var n = e - (t - f);
            return v ? o(n, h - (t - d)) : n
          }(t))
        }

        function S(t) {
          return p = void 0, g && l ? y(t) : (l = u = void 0, c)
        }

        function E() {
          var t = i(),
            n = b(t);
          if (l = arguments, u = this, f = t, n) {
            if (void 0 === p) return function(t) {
              return d = t, p = setTimeout(x, e), m ? y(t) : c
            }(f);
            if (v) return clearTimeout(p), p = setTimeout(x, e), y(f)
          }
          return void 0 === p && (p = setTimeout(x, e)), c
        }
        return e = a(e) || 0, r(n) && (m = !!n.leading, h = (v = "maxWait" in n) ? s(a(n.maxWait) || 0, e) : h, g = "trailing" in n ? !!n.trailing : g), E.cancel = function() {
          void 0 !== p && clearTimeout(p), d = 0, l = f = u = p = void 0
        }, E.flush = function() {
          return void 0 === p ? c : S(i())
        }, E
      }
    },
    89048: t => {
      t.exports = function(t) {
        var e = typeof t;
        return null != t && ("object" == e || "function" == e)
      }
    },
    72316: t => {
      t.exports = function(t) {
        return null != t && "object" == typeof t
      }
    },
    99464: (t, e, n) => {
      var r = n(95992),
        i = n(72316);
      t.exports = function(t) {
        return "symbol" == typeof t || i(t) && "[object Symbol]" == r(t)
      }
    },
    12721: (t, e, n) => {
      var r = n(36056);
      t.exports = function() {
        return r.Date.now()
      }
    },
    80088: (t, e, n) => {
      var r = n(96096),
        i = n(89048),
        a = n(99464),
        s = /^[-+]0x[0-9a-f]+$/i,
        o = /^0b[01]+$/i,
        l = /^0o[0-7]+$/i,
        u = parseInt;
      t.exports = function(t) {
        if ("number" == typeof t) return t;
        if (a(t)) return NaN;
        if (i(t)) {
          var e = "function" == typeof t.valueOf ? t.valueOf() : t;
          t = i(e) ? e + "" : e
        }
        if ("string" != typeof t) return 0 === t ? t : +t;
        t = r(t);
        var n = o.test(t);
        return n || l.test(t) ? u(t.slice(2), n ? 2 : 8) : s.test(t) ? NaN : +t
      }
    },
    86352: function(module, exports, __webpack_require__) {
      var factory;
      "undefined" != typeof navigator && (factory = function() {
        "use strict";
        var svgNS = "http://www.w3.org/2000/svg",
          locationHref = "",
          _useWebWorker = !1,
          initialDefaultFrame = -999999,
          setWebWorker = function(t) {
            _useWebWorker = !!t
          },
          getWebWorker = function() {
            return _useWebWorker
          },
          setLocationHref = function(t) {
            locationHref = t
          },
          getLocationHref = function() {
            return locationHref
          };

        function createTag(t) {
          return document.createElement(t)
        }

        function extendPrototype(t, e) {
          var n, r, i = t.length;
          for (n = 0; n < i; n += 1)
            for (var a in r = t[n].prototype) Object.prototype.hasOwnProperty.call(r, a) && (e.prototype[a] = r[a])
        }

        function getDescriptor(t, e) {
          return Object.getOwnPropertyDescriptor(t, e)
        }

        function createProxyFunction(t) {
          function e() {}
          return e.prototype = t, e
        }
        var audioControllerFactory = function() {
            function t(t) {
              this.audios = [], this.audioFactory = t, this._volume = 1, this._isMuted = !1
            }
            return t.prototype = {
                addAudio: function(t) {
                  this.audios.push(t)
                },
                pause: function() {
                  var t, e = this.audios.length;
                  for (t = 0; t < e; t += 1) this.audios[t].pause()
                },
                resume: function() {
                  var t, e = this.audios.length;
                  for (t = 0; t < e; t += 1) this.audios[t].resume()
                },
                setRate: function(t) {
                  var e, n = this.audios.length;
                  for (e = 0; e < n; e += 1) this.audios[e].setRate(t)
                },
                createAudio: function(t) {
                  return this.audioFactory ? this.audioFactory(t) : window.Howl ? new window.Howl({
                    src: [t]
                  }) : {
                    isPlaying: !1,
                    play: function() {
                      this.isPlaying = !0
                    },
                    seek: function() {
                      this.isPlaying = !1
                    },
                    playing: function() {},
                    rate: function() {},
                    setVolume: function() {}
                  }
                },
                setAudioFactory: function(t) {
                  this.audioFactory = t
                },
                setVolume: function(t) {
                  this._volume = t, this._updateVolume()
                },
                mute: function() {
                  this._isMuted = !0, this._updateVolume()
                },
                unmute: function() {
                  this._isMuted = !1, this._updateVolume()
                },
                getVolume: function() {
                  return this._volume
                },
                _updateVolume: function() {
                  var t, e = this.audios.length;
                  for (t = 0; t < e; t += 1) this.audios[t].volume(this._volume * (this._isMuted ? 0 : 1))
                }
              },
              function() {
                return new t
              }
          }(),
          createTypedArray = function() {
            function t(t, e) {
              var n, r = 0,
                i = [];
              switch (t) {
                case "int16":
                case "uint8c":
                  n = 1;
                  break;
                default:
                  n = 1.1
              }
              for (r = 0; r < e; r += 1) i.push(n);
              return i
            }
            return "function" == typeof Uint8ClampedArray && "function" == typeof Float32Array ? function(e, n) {
              return "float32" === e ? new Float32Array(n) : "int16" === e ? new Int16Array(n) : "uint8c" === e ? new Uint8ClampedArray(n) : t(e, n)
            } : t
          }();

        function createSizedArray(t) {
          return Array.apply(null, {
            length: t
          })
        }

        function _typeof$6(t) {
          return _typeof$6 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
          } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
          }, _typeof$6(t)
        }
        var subframeEnabled = !0,
          expressionsPlugin = null,
          expressionsInterfaces = null,
          idPrefix$1 = "",
          isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent),
          _shouldRoundValues = !1,
          bmPow = Math.pow,
          bmSqrt = Math.sqrt,
          bmFloor = Math.floor,
          bmMax = Math.max,
          bmMin = Math.min,
          BMMath = {};

        function ProjectInterface$1() {
          return {}
        }! function() {
          var t, e = ["abs", "acos", "acosh", "asin", "asinh", "atan", "atanh", "atan2", "ceil", "cbrt", "expm1", "clz32", "cos", "cosh", "exp", "floor", "fround", "hypot", "imul", "log", "log1p", "log2", "log10", "max", "min", "pow", "random", "round", "sign", "sin", "sinh", "sqrt", "tan", "tanh", "trunc", "E", "LN10", "LN2", "LOG10E", "LOG2E", "PI", "SQRT1_2", "SQRT2"],
            n = e.length;
          for (t = 0; t < n; t += 1) BMMath[e[t]] = Math[e[t]]
        }(), BMMath.random = Math.random, BMMath.abs = function(t) {
          if ("object" === _typeof$6(t) && t.length) {
            var e, n = createSizedArray(t.length),
              r = t.length;
            for (e = 0; e < r; e += 1) n[e] = Math.abs(t[e]);
            return n
          }
          return Math.abs(t)
        };
        var defaultCurveSegments = 150,
          degToRads = Math.PI / 180,
          roundCorner = .5519;

        function roundValues(t) {
          _shouldRoundValues = !!t
        }

        function bmRnd(t) {
          return _shouldRoundValues ? Math.round(t) : t
        }

        function styleDiv(t) {
          t.style.position = "absolute", t.style.top = 0, t.style.left = 0, t.style.display = "block", t.style.transformOrigin = "0 0", t.style.webkitTransformOrigin = "0 0", t.style.backfaceVisibility = "visible", t.style.webkitBackfaceVisibility = "visible", t.style.transformStyle = "preserve-3d", t.style.webkitTransformStyle = "preserve-3d", t.style.mozTransformStyle = "preserve-3d"
        }

        function BMEnterFrameEvent(t, e, n, r) {
          this.type = t, this.currentTime = e, this.totalTime = n, this.direction = r < 0 ? -1 : 1
        }

        function BMCompleteEvent(t, e) {
          this.type = t, this.direction = e < 0 ? -1 : 1
        }

        function BMCompleteLoopEvent(t, e, n, r) {
          this.type = t, this.currentLoop = n, this.totalLoops = e, this.direction = r < 0 ? -1 : 1
        }

        function BMSegmentStartEvent(t, e, n) {
          this.type = t, this.firstFrame = e, this.totalFrames = n
        }

        function BMDestroyEvent(t, e) {
          this.type = t, this.target = e
        }

        function BMRenderFrameErrorEvent(t, e) {
          this.type = "renderFrameError", this.nativeError = t, this.currentTime = e
        }

        function BMConfigErrorEvent(t) {
          this.type = "configError", this.nativeError = t
        }

        function BMAnimationConfigErrorEvent(t, e) {
          this.type = t, this.nativeError = e
        }
        var createElementID = (_count = 0, function() {
            return idPrefix$1 + "__lottie_element_" + (_count += 1)
          }),
          _count;

        function HSVtoRGB(t, e, n) {
          var r, i, a, s, o, l, u, h;
          switch (l = n * (1 - e), u = n * (1 - (o = 6 * t - (s = Math.floor(6 * t))) * e), h = n * (1 - (1 - o) * e), s % 6) {
            case 0:
              r = n, i = h, a = l;
              break;
            case 1:
              r = u, i = n, a = l;
              break;
            case 2:
              r = l, i = n, a = h;
              break;
            case 3:
              r = l, i = u, a = n;
              break;
            case 4:
              r = h, i = l, a = n;
              break;
            case 5:
              r = n, i = l, a = u
          }
          return [r, i, a]
        }

        function RGBtoHSV(t, e, n) {
          var r, i = Math.max(t, e, n),
            a = Math.min(t, e, n),
            s = i - a,
            o = 0 === i ? 0 : s / i,
            l = i / 255;
          switch (i) {
            case a:
              r = 0;
              break;
            case t:
              r = e - n + s * (e < n ? 6 : 0), r /= 6 * s;
              break;
            case e:
              r = n - t + 2 * s, r /= 6 * s;
              break;
            case n:
              r = t - e + 4 * s, r /= 6 * s
          }
          return [r, o, l]
        }

        function addSaturationToRGB(t, e) {
          var n = RGBtoHSV(255 * t[0], 255 * t[1], 255 * t[2]);
          return n[1] += e, n[1] > 1 ? n[1] = 1 : n[1] <= 0 && (n[1] = 0), HSVtoRGB(n[0], n[1], n[2])
        }

        function addBrightnessToRGB(t, e) {
          var n = RGBtoHSV(255 * t[0], 255 * t[1], 255 * t[2]);
          return n[2] += e, n[2] > 1 ? n[2] = 1 : n[2] < 0 && (n[2] = 0), HSVtoRGB(n[0], n[1], n[2])
        }

        function addHueToRGB(t, e) {
          var n = RGBtoHSV(255 * t[0], 255 * t[1], 255 * t[2]);
          return n[0] += e / 360, n[0] > 1 ? n[0] -= 1 : n[0] < 0 && (n[0] += 1), HSVtoRGB(n[0], n[1], n[2])
        }
        var rgbToHex = function() {
            var t, e, n = [];
            for (t = 0; t < 256; t += 1) e = t.toString(16), n[t] = 1 === e.length ? "0" + e : e;
            return function(t, e, r) {
              return t < 0 && (t = 0), e < 0 && (e = 0), r < 0 && (r = 0), "#" + n[t] + n[e] + n[r]
            }
          }(),
          setSubframeEnabled = function(t) {
            subframeEnabled = !!t
          },
          getSubframeEnabled = function() {
            return subframeEnabled
          },
          setExpressionsPlugin = function(t) {
            expressionsPlugin = t
          },
          getExpressionsPlugin = function() {
            return expressionsPlugin
          },
          setExpressionInterfaces = function(t) {
            expressionsInterfaces = t
          },
          getExpressionInterfaces = function() {
            return expressionsInterfaces
          },
          setDefaultCurveSegments = function(t) {
            defaultCurveSegments = t
          },
          getDefaultCurveSegments = function() {
            return defaultCurveSegments
          },
          setIdPrefix = function(t) {
            idPrefix$1 = t
          },
          getIdPrefix = function() {
            return idPrefix$1
          };

        function createNS(t) {
          return document.createElementNS(svgNS, t)
        }

        function _typeof$5(t) {
          return _typeof$5 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
          } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
          }, _typeof$5(t)
        }
        var dataManager = function() {
            var t, e, n = 1,
              r = [],
              i = {
                onmessage: function() {},
                postMessage: function(e) {
                  t({
                    data: e
                  })
                }
              },
              a = {
                postMessage: function(t) {
                  i.onmessage({
                    data: t
                  })
                }
              };

            function s() {
              e || (e = function(e) {
                if (window.Worker && window.Blob && getWebWorker()) {
                  var n = new Blob(["var _workerSelf = self; self.onmessage = ", e.toString()], {
                      type: "text/javascript"
                    }),
                    r = URL.createObjectURL(n);
                  return new Worker(r)
                }
                return t = e, i
              }((function(t) {
                if (a.dataManager || (a.dataManager = function() {
                    function t(i, a) {
                      var s, o, l, u, h, c, p, f = i.length;
                      for (o = 0; o < f; o += 1)
                        if ("ks" in (s = i[o]) && !s.completed) {
                          if (s.completed = !0, s.hasMask) {
                            var d = s.masksProperties;
                            for (u = d.length, l = 0; l < u; l += 1)
                              if (d[l].pt.k.i) r(d[l].pt.k);
                              else
                                for (c = d[l].pt.k.length, h = 0; h < c; h += 1) d[l].pt.k[h].s && r(d[l].pt.k[h].s[0]), d[l].pt.k[h].e && r(d[l].pt.k[h].e[0])
                          }
                          0 === s.ty ? (s.layers = e(s.refId, a), t(s.layers, a)) : 4 === s.ty ? n(s.shapes) : 5 === s.ty && (0 === (p = s).t.a.length && p.t.p)
                        }
                    }

                    function e(t, e) {
                      var n = function(t, e) {
                        for (var n = 0, r = e.length; n < r;) {
                          if (e[n].id === t) return e[n];
                          n += 1
                        }
                        return null
                      }(t, e);
                      return n ? n.layers.__used ? JSON.parse(JSON.stringify(n.layers)) : (n.layers.__used = !0, n.layers) : null
                    }

                    function n(t) {
                      var e, i, a;
                      for (e = t.length - 1; e >= 0; e -= 1)
                        if ("sh" === t[e].ty)
                          if (t[e].ks.k.i) r(t[e].ks.k);
                          else
                            for (a = t[e].ks.k.length, i = 0; i < a; i += 1) t[e].ks.k[i].s && r(t[e].ks.k[i].s[0]), t[e].ks.k[i].e && r(t[e].ks.k[i].e[0]);
                      else "gr" === t[e].ty && n(t[e].it)
                    }

                    function r(t) {
                      var e, n = t.i.length;
                      for (e = 0; e < n; e += 1) t.i[e][0] += t.v[e][0], t.i[e][1] += t.v[e][1], t.o[e][0] += t.v[e][0], t.o[e][1] += t.v[e][1]
                    }

                    function i(t, e) {
                      var n = e ? e.split(".") : [100, 100, 100];
                      return t[0] > n[0] || !(n[0] > t[0]) && (t[1] > n[1] || !(n[1] > t[1]) && (t[2] > n[2] || !(n[2] > t[2]) && null))
                    }
                    var a, s = function() {
                        var t = [4, 4, 14];

                        function e(t) {
                          var e, n, r, i = t.length;
                          for (e = 0; e < i; e += 1) 5 === t[e].ty && (void 0, r = (n = t[e]).t.d, n.t.d = {
                            k: [{
                              s: r,
                              t: 0
                            }]
                          })
                        }
                        return function(n) {
                          if (i(t, n.v) && (e(n.layers), n.assets)) {
                            var r, a = n.assets.length;
                            for (r = 0; r < a; r += 1) n.assets[r].layers && e(n.assets[r].layers)
                          }
                        }
                      }(),
                      o = (a = [4, 7, 99], function(t) {
                        if (t.chars && !i(a, t.v)) {
                          var e, r = t.chars.length;
                          for (e = 0; e < r; e += 1) {
                            var s = t.chars[e];
                            s.data && s.data.shapes && (n(s.data.shapes), s.data.ip = 0, s.data.op = 99999, s.data.st = 0, s.data.sr = 1, s.data.ks = {
                              p: {
                                k: [0, 0],
                                a: 0
                              },
                              s: {
                                k: [100, 100],
                                a: 0
                              },
                              a: {
                                k: [0, 0],
                                a: 0
                              },
                              r: {
                                k: 0,
                                a: 0
                              },
                              o: {
                                k: 100,
                                a: 0
                              }
                            }, t.chars[e].t || (s.data.shapes.push({
                              ty: "no"
                            }), s.data.shapes[0].it.push({
                              p: {
                                k: [0, 0],
                                a: 0
                              },
                              s: {
                                k: [100, 100],
                                a: 0
                              },
                              a: {
                                k: [0, 0],
                                a: 0
                              },
                              r: {
                                k: 0,
                                a: 0
                              },
                              o: {
                                k: 100,
                                a: 0
                              },
                              sk: {
                                k: 0,
                                a: 0
                              },
                              sa: {
                                k: 0,
                                a: 0
                              },
                              ty: "tr"
                            })))
                          }
                        }
                      }),
                      l = function() {
                        var t = [5, 7, 15];

                        function e(t) {
                          var e, n, r = t.length;
                          for (e = 0; e < r; e += 1) 5 === t[e].ty && (n = void 0, "number" == typeof(n = t[e].t.p).a && (n.a = {
                            a: 0,
                            k: n.a
                          }), "number" == typeof n.p && (n.p = {
                            a: 0,
                            k: n.p
                          }), "number" == typeof n.r && (n.r = {
                            a: 0,
                            k: n.r
                          }))
                        }
                        return function(n) {
                          if (i(t, n.v) && (e(n.layers), n.assets)) {
                            var r, a = n.assets.length;
                            for (r = 0; r < a; r += 1) n.assets[r].layers && e(n.assets[r].layers)
                          }
                        }
                      }(),
                      u = function() {
                        var t = [4, 1, 9];

                        function e(t) {
                          var n, r, i, a = t.length;
                          for (n = 0; n < a; n += 1)
                            if ("gr" === t[n].ty) e(t[n].it);
                            else if ("fl" === t[n].ty || "st" === t[n].ty)
                            if (t[n].c.k && t[n].c.k[0].i)
                              for (i = t[n].c.k.length, r = 0; r < i; r += 1) t[n].c.k[r].s && (t[n].c.k[r].s[0] /= 255, t[n].c.k[r].s[1] /= 255, t[n].c.k[r].s[2] /= 255, t[n].c.k[r].s[3] /= 255), t[n].c.k[r].e && (t[n].c.k[r].e[0] /= 255, t[n].c.k[r].e[1] /= 255, t[n].c.k[r].e[2] /= 255, t[n].c.k[r].e[3] /= 255);
                            else t[n].c.k[0] /= 255, t[n].c.k[1] /= 255, t[n].c.k[2] /= 255, t[n].c.k[3] /= 255
                        }

                        function n(t) {
                          var n, r = t.length;
                          for (n = 0; n < r; n += 1) 4 === t[n].ty && e(t[n].shapes)
                        }
                        return function(e) {
                          if (i(t, e.v) && (n(e.layers), e.assets)) {
                            var r, a = e.assets.length;
                            for (r = 0; r < a; r += 1) e.assets[r].layers && n(e.assets[r].layers)
                          }
                        }
                      }(),
                      h = function() {
                        var t = [4, 4, 18];

                        function e(t) {
                          var n, r, i;
                          for (n = t.length - 1; n >= 0; n -= 1)
                            if ("sh" === t[n].ty)
                              if (t[n].ks.k.i) t[n].ks.k.c = t[n].closed;
                              else
                                for (i = t[n].ks.k.length, r = 0; r < i; r += 1) t[n].ks.k[r].s && (t[n].ks.k[r].s[0].c = t[n].closed), t[n].ks.k[r].e && (t[n].ks.k[r].e[0].c = t[n].closed);
                          else "gr" === t[n].ty && e(t[n].it)
                        }

                        function n(t) {
                          var n, r, i, a, s, o, l = t.length;
                          for (r = 0; r < l; r += 1) {
                            if ((n = t[r]).hasMask) {
                              var u = n.masksProperties;
                              for (a = u.length, i = 0; i < a; i += 1)
                                if (u[i].pt.k.i) u[i].pt.k.c = u[i].cl;
                                else
                                  for (o = u[i].pt.k.length, s = 0; s < o; s += 1) u[i].pt.k[s].s && (u[i].pt.k[s].s[0].c = u[i].cl), u[i].pt.k[s].e && (u[i].pt.k[s].e[0].c = u[i].cl)
                            }
                            4 === n.ty && e(n.shapes)
                          }
                        }
                        return function(e) {
                          if (i(t, e.v) && (n(e.layers), e.assets)) {
                            var r, a = e.assets.length;
                            for (r = 0; r < a; r += 1) e.assets[r].layers && n(e.assets[r].layers)
                          }
                        }
                      }();
                    var c = {
                      completeData: function(n) {
                        n.__complete || (u(n), s(n), o(n), l(n), h(n), t(n.layers, n.assets), function(n, r) {
                          if (n) {
                            var i = 0,
                              a = n.length;
                            for (i = 0; i < a; i += 1) 1 === n[i].t && (n[i].data.layers = e(n[i].data.refId, r), t(n[i].data.layers, r))
                          }
                        }(n.chars, n.assets), n.__complete = !0)
                      }
                    };
                    return c.checkColors = u, c.checkChars = o, c.checkPathProperties = l, c.checkShapes = h, c.completeLayers = t, c
                  }()), a.assetLoader || (a.assetLoader = function() {
                    function t(t) {
                      var e = t.getResponseHeader("content-type");
                      return e && "json" === t.responseType && -1 !== e.indexOf("json") || t.response && "object" === _typeof$5(t.response) ? t.response : t.response && "string" == typeof t.response ? JSON.parse(t.response) : t.responseText ? JSON.parse(t.responseText) : null
                    }
                    return {
                      load: function(e, n, r, i) {
                        var a, s = new XMLHttpRequest;
                        try {
                          s.responseType = "json"
                        } catch (t) {}
                        s.onreadystatechange = function() {
                          if (4 === s.readyState)
                            if (200 === s.status) a = t(s), r(a);
                            else try {
                              a = t(s), r(a)
                            } catch (t) {
                              i && i(t)
                            }
                        };
                        try {
                          s.open(["G", "E", "T"].join(""), e, !0)
                        } catch (t) {
                          s.open(["G", "E", "T"].join(""), n + "/" + e, !0)
                        }
                        s.send()
                      }
                    }
                  }()), "loadAnimation" === t.data.type) a.assetLoader.load(t.data.path, t.data.fullPath, (function(e) {
                  a.dataManager.completeData(e), a.postMessage({
                    id: t.data.id,
                    payload: e,
                    status: "success"
                  })
                }), (function() {
                  a.postMessage({
                    id: t.data.id,
                    status: "error"
                  })
                }));
                else if ("complete" === t.data.type) {
                  var e = t.data.animation;
                  a.dataManager.completeData(e), a.postMessage({
                    id: t.data.id,
                    payload: e,
                    status: "success"
                  })
                } else "loadData" === t.data.type && a.assetLoader.load(t.data.path, t.data.fullPath, (function(e) {
                  a.postMessage({
                    id: t.data.id,
                    payload: e,
                    status: "success"
                  })
                }), (function() {
                  a.postMessage({
                    id: t.data.id,
                    status: "error"
                  })
                }))
              })), e.onmessage = function(t) {
                var e = t.data,
                  n = e.id,
                  i = r[n];
                r[n] = null, "success" === e.status ? i.onComplete(e.payload) : i.onError && i.onError()
              })
            }

            function o(t, e) {
              var i = "processId_" + (n += 1);
              return r[i] = {
                onComplete: t,
                onError: e
              }, i
            }
            return {
              loadAnimation: function(t, n, r) {
                s();
                var i = o(n, r);
                e.postMessage({
                  type: "loadAnimation",
                  path: t,
                  fullPath: window.location.origin + window.location.pathname,
                  id: i
                })
              },
              loadData: function(t, n, r) {
                s();
                var i = o(n, r);
                e.postMessage({
                  type: "loadData",
                  path: t,
                  fullPath: window.location.origin + window.location.pathname,
                  id: i
                })
              },
              completeAnimation: function(t, n, r) {
                s();
                var i = o(n, r);
                e.postMessage({
                  type: "complete",
                  animation: t,
                  id: i
                })
              }
            }
          }(),
          ImagePreloader = function() {
            var t = function() {
              var t = createTag("canvas");
              t.width = 1, t.height = 1;
              var e = t.getContext("2d");
              return e.fillStyle = "rgba(0,0,0,0)", e.fillRect(0, 0, 1, 1), t
            }();

            function e() {
              this.loadedAssets += 1, this.loadedAssets === this.totalImages && this.loadedFootagesCount === this.totalFootages && this.imagesLoadedCb && this.imagesLoadedCb(null)
            }

            function n() {
              this.loadedFootagesCount += 1, this.loadedAssets === this.totalImages && this.loadedFootagesCount === this.totalFootages && this.imagesLoadedCb && this.imagesLoadedCb(null)
            }

            function r(t, e, n) {
              var r = "";
              if (t.e) r = t.p;
              else if (e) {
                var i = t.p; - 1 !== i.indexOf("images/") && (i = i.split("/")[1]), r = e + i
              } else r = n, r += t.u ? t.u : "", r += t.p;
              return r
            }

            function i(t) {
              var e = 0,
                n = setInterval(function() {
                  (t.getBBox().width || e > 500) && (this._imageLoaded(), clearInterval(n)), e += 1
                }.bind(this), 50)
            }

            function a(t) {
              var e = {
                  assetData: t
                },
                n = r(t, this.assetsPath, this.path);
              return dataManager.loadData(n, function(t) {
                e.img = t, this._footageLoaded()
              }.bind(this), function() {
                e.img = {}, this._footageLoaded()
              }.bind(this)), e
            }

            function s() {
              this._imageLoaded = e.bind(this), this._footageLoaded = n.bind(this), this.testImageLoaded = i.bind(this), this.createFootageData = a.bind(this), this.assetsPath = "", this.path = "", this.totalImages = 0, this.totalFootages = 0, this.loadedAssets = 0, this.loadedFootagesCount = 0, this.imagesLoadedCb = null, this.images = []
            }
            return s.prototype = {
              loadAssets: function(t, e) {
                var n;
                this.imagesLoadedCb = e;
                var r = t.length;
                for (n = 0; n < r; n += 1) t[n].layers || (t[n].t && "seq" !== t[n].t ? 3 === t[n].t && (this.totalFootages += 1, this.images.push(this.createFootageData(t[n]))) : (this.totalImages += 1, this.images.push(this._createImageData(t[n]))))
              },
              setAssetsPath: function(t) {
                this.assetsPath = t || ""
              },
              setPath: function(t) {
                this.path = t || ""
              },
              loadedImages: function() {
                return this.totalImages === this.loadedAssets
              },
              loadedFootages: function() {
                return this.totalFootages === this.loadedFootagesCount
              },
              destroy: function() {
                this.imagesLoadedCb = null, this.images.length = 0
              },
              getAsset: function(t) {
                for (var e = 0, n = this.images.length; e < n;) {
                  if (this.images[e].assetData === t) return this.images[e].img;
                  e += 1
                }
                return null
              },
              createImgData: function(e) {
                var n = r(e, this.assetsPath, this.path),
                  i = createTag("img");
                i.crossOrigin = "anonymous", i.addEventListener("load", this._imageLoaded, !1), i.addEventListener("error", function() {
                  a.img = t, this._imageLoaded()
                }.bind(this), !1), i.src = n;
                var a = {
                  img: i,
                  assetData: e
                };
                return a
              },
              createImageData: function(e) {
                var n = r(e, this.assetsPath, this.path),
                  i = createNS("image");
                isSafari ? this.testImageLoaded(i) : i.addEventListener("load", this._imageLoaded, !1), i.addEventListener("error", function() {
                  a.img = t, this._imageLoaded()
                }.bind(this), !1), i.setAttributeNS("http://www.w3.org/1999/xlink", "href", n), this._elementHelper.append ? this._elementHelper.append(i) : this._elementHelper.appendChild(i);
                var a = {
                  img: i,
                  assetData: e
                };
                return a
              },
              imageLoaded: e,
              footageLoaded: n,
              setCacheType: function(t, e) {
                "svg" === t ? (this._elementHelper = e, this._createImageData = this.createImageData.bind(this)) : this._createImageData = this.createImgData.bind(this)
              }
            }, s
          }();

        function BaseEvent() {}
        BaseEvent.prototype = {
          triggerEvent: function(t, e) {
            if (this._cbs[t])
              for (var n = this._cbs[t], r = 0; r < n.length; r += 1) n[r](e)
          },
          addEventListener: function(t, e) {
            return this._cbs[t] || (this._cbs[t] = []), this._cbs[t].push(e),
              function() {
                this.removeEventListener(t, e)
              }.bind(this)
          },
          removeEventListener: function(t, e) {
            if (e) {
              if (this._cbs[t]) {
                for (var n = 0, r = this._cbs[t].length; n < r;) this._cbs[t][n] === e && (this._cbs[t].splice(n, 1), n -= 1, r -= 1), n += 1;
                this._cbs[t].length || (this._cbs[t] = null)
              }
            } else this._cbs[t] = null
          }
        };
        var markerParser = function() {
            function t(t) {
              for (var e, n = t.split("\r\n"), r = {}, i = 0, a = 0; a < n.length; a += 1) 2 === (e = n[a].split(":")).length && (r[e[0]] = e[1].trim(), i += 1);
              if (0 === i) throw new Error;
              return r
            }
            return function(e) {
              for (var n = [], r = 0; r < e.length; r += 1) {
                var i = e[r],
                  a = {
                    time: i.tm,
                    duration: i.dr
                  };
                try {
                  a.payload = JSON.parse(e[r].cm)
                } catch (n) {
                  try {
                    a.payload = t(e[r].cm)
                  } catch (t) {
                    a.payload = {
                      name: e[r].cm
                    }
                  }
                }
                n.push(a)
              }
              return n
            }
          }(),
          ProjectInterface = function() {
            function t(t) {
              this.compositions.push(t)
            }
            return function() {
              function e(t) {
                for (var e = 0, n = this.compositions.length; e < n;) {
                  if (this.compositions[e].data && this.compositions[e].data.nm === t) return this.compositions[e].prepareFrame && this.compositions[e].data.xt && this.compositions[e].prepareFrame(this.currentFrame), this.compositions[e].compInterface;
                  e += 1
                }
                return null
              }
              return e.compositions = [], e.currentFrame = 0, e.registerComposition = t, e
            }
          }(),
          renderers = {},
          registerRenderer = function(t, e) {
            renderers[t] = e
          };

        function getRenderer(t) {
          return renderers[t]
        }

        function getRegisteredRenderer() {
          if (renderers.canvas) return "canvas";
          for (var t in renderers)
            if (renderers[t]) return t;
          return ""
        }

        function _typeof$4(t) {
          return _typeof$4 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
          } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
          }, _typeof$4(t)
        }
        var AnimationItem = function() {
          this._cbs = [], this.name = "", this.path = "", this.isLoaded = !1, this.currentFrame = 0, this.currentRawFrame = 0, this.firstFrame = 0, this.totalFrames = 0, this.frameRate = 0, this.frameMult = 0, this.playSpeed = 1, this.playDirection = 1, this.playCount = 0, this.animationData = {}, this.assets = [], this.isPaused = !0, this.autoplay = !1, this.loop = !0, this.renderer = null, this.animationID = createElementID(), this.assetsPath = "", this.timeCompleted = 0, this.segmentPos = 0, this.isSubframeEnabled = getSubframeEnabled(), this.segments = [], this._idle = !0, this._completedLoop = !1, this.projectInterface = ProjectInterface(), this.imagePreloader = new ImagePreloader, this.audioController = audioControllerFactory(), this.markers = [], this.configAnimation = this.configAnimation.bind(this), this.onSetupError = this.onSetupError.bind(this), this.onSegmentComplete = this.onSegmentComplete.bind(this), this.drawnFrameEvent = new BMEnterFrameEvent("drawnFrame", 0, 0, 0), this.expressionsPlugin = getExpressionsPlugin()
        };
        extendPrototype([BaseEvent], AnimationItem), AnimationItem.prototype.setParams = function(t) {
          (t.wrapper || t.container) && (this.wrapper = t.wrapper || t.container);
          var e = "svg";
          t.animType ? e = t.animType : t.renderer && (e = t.renderer);
          var n = getRenderer(e);
          this.renderer = new n(this, t.rendererSettings), this.imagePreloader.setCacheType(e, this.renderer.globalData.defs), this.renderer.setProjectInterface(this.projectInterface), this.animType = e, "" === t.loop || null === t.loop || void 0 === t.loop || !0 === t.loop ? this.loop = !0 : !1 === t.loop ? this.loop = !1 : this.loop = parseInt(t.loop, 10), this.autoplay = !("autoplay" in t) || t.autoplay, this.name = t.name ? t.name : "", this.autoloadSegments = !Object.prototype.hasOwnProperty.call(t, "autoloadSegments") || t.autoloadSegments, this.assetsPath = t.assetsPath, this.initialSegment = t.initialSegment, t.audioFactory && this.audioController.setAudioFactory(t.audioFactory), t.animationData ? this.setupAnimation(t.animationData) : t.path && (-1 !== t.path.lastIndexOf("\\") ? this.path = t.path.substr(0, t.path.lastIndexOf("\\") + 1) : this.path = t.path.substr(0, t.path.lastIndexOf("/") + 1), this.fileName = t.path.substr(t.path.lastIndexOf("/") + 1), this.fileName = this.fileName.substr(0, this.fileName.lastIndexOf(".json")), dataManager.loadAnimation(t.path, this.configAnimation, this.onSetupError))
        }, AnimationItem.prototype.onSetupError = function() {
          this.trigger("data_failed")
        }, AnimationItem.prototype.setupAnimation = function(t) {
          dataManager.completeAnimation(t, this.configAnimation)
        }, AnimationItem.prototype.setData = function(t, e) {
          e && "object" !== _typeof$4(e) && (e = JSON.parse(e));
          var n = {
              wrapper: t,
              animationData: e
            },
            r = t.attributes;
          n.path = r.getNamedItem("data-animation-path") ? r.getNamedItem("data-animation-path").value : r.getNamedItem("data-bm-path") ? r.getNamedItem("data-bm-path").value : r.getNamedItem("bm-path") ? r.getNamedItem("bm-path").value : "", n.animType = r.getNamedItem("data-anim-type") ? r.getNamedItem("data-anim-type").value : r.getNamedItem("data-bm-type") ? r.getNamedItem("data-bm-type").value : r.getNamedItem("bm-type") ? r.getNamedItem("bm-type").value : r.getNamedItem("data-bm-renderer") ? r.getNamedItem("data-bm-renderer").value : r.getNamedItem("bm-renderer") ? r.getNamedItem("bm-renderer").value : getRegisteredRenderer() || "canvas";
          var i = r.getNamedItem("data-anim-loop") ? r.getNamedItem("data-anim-loop").value : r.getNamedItem("data-bm-loop") ? r.getNamedItem("data-bm-loop").value : r.getNamedItem("bm-loop") ? r.getNamedItem("bm-loop").value : "";
          "false" === i ? n.loop = !1 : "true" === i ? n.loop = !0 : "" !== i && (n.loop = parseInt(i, 10));
          var a = r.getNamedItem("data-anim-autoplay") ? r.getNamedItem("data-anim-autoplay").value : r.getNamedItem("data-bm-autoplay") ? r.getNamedItem("data-bm-autoplay").value : !r.getNamedItem("bm-autoplay") || r.getNamedItem("bm-autoplay").value;
          n.autoplay = "false" !== a, n.name = r.getNamedItem("data-name") ? r.getNamedItem("data-name").value : r.getNamedItem("data-bm-name") ? r.getNamedItem("data-bm-name").value : r.getNamedItem("bm-name") ? r.getNamedItem("bm-name").value : "", "false" === (r.getNamedItem("data-anim-prerender") ? r.getNamedItem("data-anim-prerender").value : r.getNamedItem("data-bm-prerender") ? r.getNamedItem("data-bm-prerender").value : r.getNamedItem("bm-prerender") ? r.getNamedItem("bm-prerender").value : "") && (n.prerender = !1), n.path ? this.setParams(n) : this.trigger("destroy")
        }, AnimationItem.prototype.includeLayers = function(t) {
          t.op > this.animationData.op && (this.animationData.op = t.op, this.totalFrames = Math.floor(t.op - this.animationData.ip));
          var e, n, r = this.animationData.layers,
            i = r.length,
            a = t.layers,
            s = a.length;
          for (n = 0; n < s; n += 1)
            for (e = 0; e < i;) {
              if (r[e].id === a[n].id) {
                r[e] = a[n];
                break
              }
              e += 1
            }
          if ((t.chars || t.fonts) && (this.renderer.globalData.fontManager.addChars(t.chars), this.renderer.globalData.fontManager.addFonts(t.fonts, this.renderer.globalData.defs)), t.assets)
            for (i = t.assets.length, e = 0; e < i; e += 1) this.animationData.assets.push(t.assets[e]);
          this.animationData.__complete = !1, dataManager.completeAnimation(this.animationData, this.onSegmentComplete)
        }, AnimationItem.prototype.onSegmentComplete = function(t) {
          this.animationData = t;
          var e = getExpressionsPlugin();
          e && e.initExpressions(this), this.loadNextSegment()
        }, AnimationItem.prototype.loadNextSegment = function() {
          var t = this.animationData.segments;
          if (!t || 0 === t.length || !this.autoloadSegments) return this.trigger("data_ready"), void(this.timeCompleted = this.totalFrames);
          var e = t.shift();
          this.timeCompleted = e.time * this.frameRate;
          var n = this.path + this.fileName + "_" + this.segmentPos + ".json";
          this.segmentPos += 1, dataManager.loadData(n, this.includeLayers.bind(this), function() {
            this.trigger("data_failed")
          }.bind(this))
        }, AnimationItem.prototype.loadSegments = function() {
          this.animationData.segments || (this.timeCompleted = this.totalFrames), this.loadNextSegment()
        }, AnimationItem.prototype.imagesLoaded = function() {
          this.trigger("loaded_images"), this.checkLoaded()
        }, AnimationItem.prototype.preloadImages = function() {
          this.imagePreloader.setAssetsPath(this.assetsPath), this.imagePreloader.setPath(this.path), this.imagePreloader.loadAssets(this.animationData.assets, this.imagesLoaded.bind(this))
        }, AnimationItem.prototype.configAnimation = function(t) {
          if (this.renderer) try {
            this.animationData = t, this.initialSegment ? (this.totalFrames = Math.floor(this.initialSegment[1] - this.initialSegment[0]), this.firstFrame = Math.round(this.initialSegment[0])) : (this.totalFrames = Math.floor(this.animationData.op - this.animationData.ip), this.firstFrame = Math.round(this.animationData.ip)), this.renderer.configAnimation(t), t.assets || (t.assets = []), this.assets = this.animationData.assets, this.frameRate = this.animationData.fr, this.frameMult = this.animationData.fr / 1e3, this.renderer.searchExtraCompositions(t.assets), this.markers = markerParser(t.markers || []), this.trigger("config_ready"), this.preloadImages(), this.loadSegments(), this.updaFrameModifier(), this.waitForFontsLoaded(), this.isPaused && this.audioController.pause()
          } catch (t) {
            this.triggerConfigError(t)
          }
        }, AnimationItem.prototype.waitForFontsLoaded = function() {
          this.renderer && (this.renderer.globalData.fontManager.isLoaded ? this.checkLoaded() : setTimeout(this.waitForFontsLoaded.bind(this), 20))
        }, AnimationItem.prototype.checkLoaded = function() {
          if (!this.isLoaded && this.renderer.globalData.fontManager.isLoaded && (this.imagePreloader.loadedImages() || "canvas" !== this.renderer.rendererType) && this.imagePreloader.loadedFootages()) {
            this.isLoaded = !0;
            var t = getExpressionsPlugin();
            t && t.initExpressions(this), this.renderer.initItems(), setTimeout(function() {
              this.trigger("DOMLoaded")
            }.bind(this), 0), this.gotoFrame(), this.autoplay && this.play()
          }
        }, AnimationItem.prototype.resize = function(t, e) {
          var n = "number" == typeof t ? t : void 0,
            r = "number" == typeof e ? e : void 0;
          this.renderer.updateContainerSize(n, r)
        }, AnimationItem.prototype.setSubframe = function(t) {
          this.isSubframeEnabled = !!t
        }, AnimationItem.prototype.gotoFrame = function() {
          this.currentFrame = this.isSubframeEnabled ? this.currentRawFrame : ~~this.currentRawFrame, this.timeCompleted !== this.totalFrames && this.currentFrame > this.timeCompleted && (this.currentFrame = this.timeCompleted), this.trigger("enterFrame"), this.renderFrame(), this.trigger("drawnFrame")
        }, AnimationItem.prototype.renderFrame = function() {
          if (!1 !== this.isLoaded && this.renderer) try {
            this.expressionsPlugin && this.expressionsPlugin.resetFrame(), this.renderer.renderFrame(this.currentFrame + this.firstFrame)
          } catch (t) {
            this.triggerRenderFrameError(t)
          }
        }, AnimationItem.prototype.play = function(t) {
          t && this.name !== t || !0 === this.isPaused && (this.isPaused = !1, this.trigger("_play"), this.audioController.resume(), this._idle && (this._idle = !1, this.trigger("_active")))
        }, AnimationItem.prototype.pause = function(t) {
          t && this.name !== t || !1 === this.isPaused && (this.isPaused = !0, this.trigger("_pause"), this._idle = !0, this.trigger("_idle"), this.audioController.pause())
        }, AnimationItem.prototype.togglePause = function(t) {
          t && this.name !== t || (!0 === this.isPaused ? this.play() : this.pause())
        }, AnimationItem.prototype.stop = function(t) {
          t && this.name !== t || (this.pause(), this.playCount = 0, this._completedLoop = !1, this.setCurrentRawFrameValue(0))
        }, AnimationItem.prototype.getMarkerData = function(t) {
          for (var e, n = 0; n < this.markers.length; n += 1)
            if ((e = this.markers[n]).payload && e.payload.name === t) return e;
          return null
        }, AnimationItem.prototype.goToAndStop = function(t, e, n) {
          if (!n || this.name === n) {
            var r = Number(t);
            if (isNaN(r)) {
              var i = this.getMarkerData(t);
              i && this.goToAndStop(i.time, !0)
            } else e ? this.setCurrentRawFrameValue(t) : this.setCurrentRawFrameValue(t * this.frameModifier);
            this.pause()
          }
        }, AnimationItem.prototype.goToAndPlay = function(t, e, n) {
          if (!n || this.name === n) {
            var r = Number(t);
            if (isNaN(r)) {
              var i = this.getMarkerData(t);
              i && (i.duration ? this.playSegments([i.time, i.time + i.duration], !0) : this.goToAndStop(i.time, !0))
            } else this.goToAndStop(r, e, n);
            this.play()
          }
        }, AnimationItem.prototype.advanceTime = function(t) {
          if (!0 !== this.isPaused && !1 !== this.isLoaded) {
            var e = this.currentRawFrame + t * this.frameModifier,
              n = !1;
            e >= this.totalFrames - 1 && this.frameModifier > 0 ? this.loop && this.playCount !== this.loop ? e >= this.totalFrames ? (this.playCount += 1, this.checkSegments(e % this.totalFrames) || (this.setCurrentRawFrameValue(e % this.totalFrames), this._completedLoop = !0, this.trigger("loopComplete"))) : this.setCurrentRawFrameValue(e) : this.checkSegments(e > this.totalFrames ? e % this.totalFrames : 0) || (n = !0, e = this.totalFrames - 1) : e < 0 ? this.checkSegments(e % this.totalFrames) || (!this.loop || this.playCount-- <= 0 && !0 !== this.loop ? (n = !0, e = 0) : (this.setCurrentRawFrameValue(this.totalFrames + e % this.totalFrames), this._completedLoop ? this.trigger("loopComplete") : this._completedLoop = !0)) : this.setCurrentRawFrameValue(e), n && (this.setCurrentRawFrameValue(e), this.pause(), this.trigger("complete"))
          }
        }, AnimationItem.prototype.adjustSegment = function(t, e) {
          this.playCount = 0, t[1] < t[0] ? (this.frameModifier > 0 && (this.playSpeed < 0 ? this.setSpeed(-this.playSpeed) : this.setDirection(-1)), this.totalFrames = t[0] - t[1], this.timeCompleted = this.totalFrames, this.firstFrame = t[1], this.setCurrentRawFrameValue(this.totalFrames - .001 - e)) : t[1] > t[0] && (this.frameModifier < 0 && (this.playSpeed < 0 ? this.setSpeed(-this.playSpeed) : this.setDirection(1)), this.totalFrames = t[1] - t[0], this.timeCompleted = this.totalFrames, this.firstFrame = t[0], this.setCurrentRawFrameValue(.001 + e)), this.trigger("segmentStart")
        }, AnimationItem.prototype.setSegment = function(t, e) {
          var n = -1;
          this.isPaused && (this.currentRawFrame + this.firstFrame < t ? n = t : this.currentRawFrame + this.firstFrame > e && (n = e - t)), this.firstFrame = t, this.totalFrames = e - t, this.timeCompleted = this.totalFrames, -1 !== n && this.goToAndStop(n, !0)
        }, AnimationItem.prototype.playSegments = function(t, e) {
          if (e && (this.segments.length = 0), "object" === _typeof$4(t[0])) {
            var n, r = t.length;
            for (n = 0; n < r; n += 1) this.segments.push(t[n])
          } else this.segments.push(t);
          this.segments.length && e && this.adjustSegment(this.segments.shift(), 0), this.isPaused && this.play()
        }, AnimationItem.prototype.resetSegments = function(t) {
          this.segments.length = 0, this.segments.push([this.animationData.ip, this.animationData.op]), t && this.checkSegments(0)
        }, AnimationItem.prototype.checkSegments = function(t) {
          return !!this.segments.length && (this.adjustSegment(this.segments.shift(), t), !0)
        }, AnimationItem.prototype.destroy = function(t) {
          t && this.name !== t || !this.renderer || (this.renderer.destroy(), this.imagePreloader.destroy(), this.trigger("destroy"), this._cbs = null, this.onEnterFrame = null, this.onLoopComplete = null, this.onComplete = null, this.onSegmentStart = null, this.onDestroy = null, this.renderer = null, this.expressionsPlugin = null, this.imagePreloader = null, this.projectInterface = null)
        }, AnimationItem.prototype.setCurrentRawFrameValue = function(t) {
          this.currentRawFrame = t, this.gotoFrame()
        }, AnimationItem.prototype.setSpeed = function(t) {
          this.playSpeed = t, this.updaFrameModifier()
        }, AnimationItem.prototype.setDirection = function(t) {
          this.playDirection = t < 0 ? -1 : 1, this.updaFrameModifier()
        }, AnimationItem.prototype.setLoop = function(t) {
          this.loop = t
        }, AnimationItem.prototype.setVolume = function(t, e) {
          e && this.name !== e || this.audioController.setVolume(t)
        }, AnimationItem.prototype.getVolume = function() {
          return this.audioController.getVolume()
        }, AnimationItem.prototype.mute = function(t) {
          t && this.name !== t || this.audioController.mute()
        }, AnimationItem.prototype.unmute = function(t) {
          t && this.name !== t || this.audioController.unmute()
        }, AnimationItem.prototype.updaFrameModifier = function() {
          this.frameModifier = this.frameMult * this.playSpeed * this.playDirection, this.audioController.setRate(this.playSpeed * this.playDirection)
        }, AnimationItem.prototype.getPath = function() {
          return this.path
        }, AnimationItem.prototype.getAssetsPath = function(t) {
          var e = "";
          if (t.e) e = t.p;
          else if (this.assetsPath) {
            var n = t.p; - 1 !== n.indexOf("images/") && (n = n.split("/")[1]), e = this.assetsPath + n
          } else e = this.path, e += t.u ? t.u : "", e += t.p;
          return e
        }, AnimationItem.prototype.getAssetData = function(t) {
          for (var e = 0, n = this.assets.length; e < n;) {
            if (t === this.assets[e].id) return this.assets[e];
            e += 1
          }
          return null
        }, AnimationItem.prototype.hide = function() {
          this.renderer.hide()
        }, AnimationItem.prototype.show = function() {
          this.renderer.show()
        }, AnimationItem.prototype.getDuration = function(t) {
          return t ? this.totalFrames : this.totalFrames / this.frameRate
        }, AnimationItem.prototype.updateDocumentData = function(t, e, n) {
          try {
            this.renderer.getElementByPath(t).updateDocumentData(e, n)
          } catch (t) {}
        }, AnimationItem.prototype.trigger = function(t) {
          if (this._cbs && this._cbs[t]) switch (t) {
            case "enterFrame":
              this.triggerEvent(t, new BMEnterFrameEvent(t, this.currentFrame, this.totalFrames, this.frameModifier));
              break;
            case "drawnFrame":
              this.drawnFrameEvent.currentTime = this.currentFrame, this.drawnFrameEvent.totalTime = this.totalFrames, this.drawnFrameEvent.direction = this.frameModifier, this.triggerEvent(t, this.drawnFrameEvent);
              break;
            case "loopComplete":
              this.triggerEvent(t, new BMCompleteLoopEvent(t, this.loop, this.playCount, this.frameMult));
              break;
            case "complete":
              this.triggerEvent(t, new BMCompleteEvent(t, this.frameMult));
              break;
            case "segmentStart":
              this.triggerEvent(t, new BMSegmentStartEvent(t, this.firstFrame, this.totalFrames));
              break;
            case "destroy":
              this.triggerEvent(t, new BMDestroyEvent(t, this));
              break;
            default:
              this.triggerEvent(t)
          }
          "enterFrame" === t && this.onEnterFrame && this.onEnterFrame.call(this, new BMEnterFrameEvent(t, this.currentFrame, this.totalFrames, this.frameMult)), "loopComplete" === t && this.onLoopComplete && this.onLoopComplete.call(this, new BMCompleteLoopEvent(t, this.loop, this.playCount, this.frameMult)), "complete" === t && this.onComplete && this.onComplete.call(this, new BMCompleteEvent(t, this.frameMult)), "segmentStart" === t && this.onSegmentStart && this.onSegmentStart.call(this, new BMSegmentStartEvent(t, this.firstFrame, this.totalFrames)), "destroy" === t && this.onDestroy && this.onDestroy.call(this, new BMDestroyEvent(t, this))
        }, AnimationItem.prototype.triggerRenderFrameError = function(t) {
          var e = new BMRenderFrameErrorEvent(t, this.currentFrame);
          this.triggerEvent("error", e), this.onError && this.onError.call(this, e)
        }, AnimationItem.prototype.triggerConfigError = function(t) {
          var e = new BMConfigErrorEvent(t, this.currentFrame);
          this.triggerEvent("error", e), this.onError && this.onError.call(this, e)
        };
        var animationManager = function() {
            var t = {},
              e = [],
              n = 0,
              r = 0,
              i = 0,
              a = !0,
              s = !1;

            function o(t) {
              for (var n = 0, i = t.target; n < r;) e[n].animation === i && (e.splice(n, 1), n -= 1, r -= 1, i.isPaused || h()), n += 1
            }

            function l(t, n) {
              if (!t) return null;
              for (var i = 0; i < r;) {
                if (e[i].elem === t && null !== e[i].elem) return e[i].animation;
                i += 1
              }
              var a = new AnimationItem;
              return c(a, t), a.setData(t, n), a
            }

            function u() {
              i += 1, d()
            }

            function h() {
              i -= 1
            }

            function c(t, n) {
              t.addEventListener("destroy", o), t.addEventListener("_active", u), t.addEventListener("_idle", h), e.push({
                elem: n,
                animation: t
              }), r += 1
            }

            function p(t) {
              var o, l = t - n;
              for (o = 0; o < r; o += 1) e[o].animation.advanceTime(l);
              n = t, i && !s ? window.requestAnimationFrame(p) : a = !0
            }

            function f(t) {
              n = t, window.requestAnimationFrame(p)
            }

            function d() {
              !s && i && a && (window.requestAnimationFrame(f), a = !1)
            }
            return t.registerAnimation = l, t.loadAnimation = function(t) {
              var e = new AnimationItem;
              return c(e, null), e.setParams(t), e
            }, t.setSpeed = function(t, n) {
              var i;
              for (i = 0; i < r; i += 1) e[i].animation.setSpeed(t, n)
            }, t.setDirection = function(t, n) {
              var i;
              for (i = 0; i < r; i += 1) e[i].animation.setDirection(t, n)
            }, t.play = function(t) {
              var n;
              for (n = 0; n < r; n += 1) e[n].animation.play(t)
            }, t.pause = function(t) {
              var n;
              for (n = 0; n < r; n += 1) e[n].animation.pause(t)
            }, t.stop = function(t) {
              var n;
              for (n = 0; n < r; n += 1) e[n].animation.stop(t)
            }, t.togglePause = function(t) {
              var n;
              for (n = 0; n < r; n += 1) e[n].animation.togglePause(t)
            }, t.searchAnimations = function(t, e, n) {
              var r, i = [].concat([].slice.call(document.getElementsByClassName("lottie")), [].slice.call(document.getElementsByClassName("bodymovin"))),
                a = i.length;
              for (r = 0; r < a; r += 1) n && i[r].setAttribute("data-bm-type", n), l(i[r], t);
              if (e && 0 === a) {
                n || (n = "svg");
                var s = document.getElementsByTagName("body")[0];
                s.innerText = "";
                var o = createTag("div");
                o.style.width = "100%", o.style.height = "100%", o.setAttribute("data-bm-type", n), s.appendChild(o), l(o, t)
              }
            }, t.resize = function() {
              var t;
              for (t = 0; t < r; t += 1) e[t].animation.resize()
            }, t.goToAndStop = function(t, n, i) {
              var a;
              for (a = 0; a < r; a += 1) e[a].animation.goToAndStop(t, n, i)
            }, t.destroy = function(t) {
              var n;
              for (n = r - 1; n >= 0; n -= 1) e[n].animation.destroy(t)
            }, t.freeze = function() {
              s = !0
            }, t.unfreeze = function() {
              s = !1, d()
            }, t.setVolume = function(t, n) {
              var i;
              for (i = 0; i < r; i += 1) e[i].animation.setVolume(t, n)
            }, t.mute = function(t) {
              var n;
              for (n = 0; n < r; n += 1) e[n].animation.mute(t)
            }, t.unmute = function(t) {
              var n;
              for (n = 0; n < r; n += 1) e[n].animation.unmute(t)
            }, t.getRegisteredAnimations = function() {
              var t, n = e.length,
                r = [];
              for (t = 0; t < n; t += 1) r.push(e[t].animation);
              return r
            }, t
          }(),
          BezierFactory = function() {
            var t = {
                getBezierEasing: function(t, n, r, i, a) {
                  var s = a || ("bez_" + t + "_" + n + "_" + r + "_" + i).replace(/\./g, "p");
                  if (e[s]) return e[s];
                  var o = new h([t, n, r, i]);
                  return e[s] = o, o
                }
              },
              e = {},
              n = 11,
              r = 1 / (n - 1),
              i = "function" == typeof Float32Array;

            function a(t, e) {
              return 1 - 3 * e + 3 * t
            }

            function s(t, e) {
              return 3 * e - 6 * t
            }

            function o(t) {
              return 3 * t
            }

            function l(t, e, n) {
              return ((a(e, n) * t + s(e, n)) * t + o(e)) * t
            }

            function u(t, e, n) {
              return 3 * a(e, n) * t * t + 2 * s(e, n) * t + o(e)
            }

            function h(t) {
              this._p = t, this._mSampleValues = i ? new Float32Array(n) : new Array(n), this._precomputed = !1, this.get = this.get.bind(this)
            }
            return h.prototype = {
              get: function(t) {
                var e = this._p[0],
                  n = this._p[1],
                  r = this._p[2],
                  i = this._p[3];
                return this._precomputed || this._precompute(), e === n && r === i ? t : 0 === t ? 0 : 1 === t ? 1 : l(this._getTForX(t), n, i)
              },
              _precompute: function() {
                var t = this._p[0],
                  e = this._p[1],
                  n = this._p[2],
                  r = this._p[3];
                this._precomputed = !0, t === e && n === r || this._calcSampleValues()
              },
              _calcSampleValues: function() {
                for (var t = this._p[0], e = this._p[2], i = 0; i < n; ++i) this._mSampleValues[i] = l(i * r, t, e)
              },
              _getTForX: function(t) {
                for (var e = this._p[0], i = this._p[2], a = this._mSampleValues, s = 0, o = 1, h = n - 1; o !== h && a[o] <= t; ++o) s += r;
                var c = s + (t - a[--o]) / (a[o + 1] - a[o]) * r,
                  p = u(c, e, i);
                return p >= .001 ? function(t, e, n, r) {
                  for (var i = 0; i < 4; ++i) {
                    var a = u(e, n, r);
                    if (0 === a) return e;
                    e -= (l(e, n, r) - t) / a
                  }
                  return e
                }(t, c, e, i) : 0 === p ? c : function(t, e, n, r, i) {
                  var a, s, o = 0;
                  do {
                    (a = l(s = e + (n - e) / 2, r, i) - t) > 0 ? n = s : e = s
                  } while (Math.abs(a) > 1e-7 && ++o < 10);
                  return s
                }(t, s, s + r, e, i)
              }
            }, t
          }(),
          pooling = {
            double: function(t) {
              return t.concat(createSizedArray(t.length))
            }
          },
          poolFactory = function(t, e, n) {
            var r = 0,
              i = t,
              a = createSizedArray(i);
            return {
              newElement: function() {
                return r ? a[r -= 1] : e()
              },
              release: function(t) {
                r === i && (a = pooling.double(a), i *= 2), n && n(t), a[r] = t, r += 1
              }
            }
          },
          bezierLengthPool = poolFactory(8, (function() {
            return {
              addedLength: 0,
              percents: createTypedArray("float32", getDefaultCurveSegments()),
              lengths: createTypedArray("float32", getDefaultCurveSegments())
            }
          })),
          segmentsLengthPool = poolFactory(8, (function() {
            return {
              lengths: [],
              totalLength: 0
            }
          }), (function(t) {
            var e, n = t.lengths.length;
            for (e = 0; e < n; e += 1) bezierLengthPool.release(t.lengths[e]);
            t.lengths.length = 0
          }));

        function bezFunction() {
          var t = Math;

          function e(t, e, n, r, i, a) {
            var s = t * r + e * i + n * a - i * r - a * t - n * e;
            return s > -.001 && s < .001
          }
          var n = function(t, e, n, r) {
            var i, a, s, o, l, u, h = getDefaultCurveSegments(),
              c = 0,
              p = [],
              f = [],
              d = bezierLengthPool.newElement();
            for (s = n.length, i = 0; i < h; i += 1) {
              for (l = i / (h - 1), u = 0, a = 0; a < s; a += 1) o = bmPow(1 - l, 3) * t[a] + 3 * bmPow(1 - l, 2) * l * n[a] + 3 * (1 - l) * bmPow(l, 2) * r[a] + bmPow(l, 3) * e[a], p[a] = o, null !== f[a] && (u += bmPow(p[a] - f[a], 2)), f[a] = p[a];
              u && (c += u = bmSqrt(u)), d.percents[i] = l, d.lengths[i] = c
            }
            return d.addedLength = c, d
          };

          function r(t) {
            this.segmentLength = 0, this.points = new Array(t)
          }

          function i(t, e) {
            this.partialLength = t, this.point = e
          }
          var a, s = (a = {}, function(t, n, s, o) {
            var l = (t[0] + "_" + t[1] + "_" + n[0] + "_" + n[1] + "_" + s[0] + "_" + s[1] + "_" + o[0] + "_" + o[1]).replace(/\./g, "p");
            if (!a[l]) {
              var u, h, c, p, f, d, m, v = getDefaultCurveSegments(),
                g = 0,
                y = null;
              2 === t.length && (t[0] !== n[0] || t[1] !== n[1]) && e(t[0], t[1], n[0], n[1], t[0] + s[0], t[1] + s[1]) && e(t[0], t[1], n[0], n[1], n[0] + o[0], n[1] + o[1]) && (v = 2);
              var b = new r(v);
              for (c = s.length, u = 0; u < v; u += 1) {
                for (m = createSizedArray(c), f = u / (v - 1), d = 0, h = 0; h < c; h += 1) p = bmPow(1 - f, 3) * t[h] + 3 * bmPow(1 - f, 2) * f * (t[h] + s[h]) + 3 * (1 - f) * bmPow(f, 2) * (n[h] + o[h]) + bmPow(f, 3) * n[h], m[h] = p, null !== y && (d += bmPow(m[h] - y[h], 2));
                g += d = bmSqrt(d), b.points[u] = new i(d, m), y = m
              }
              b.segmentLength = g, a[l] = b
            }
            return a[l]
          });

          function o(t, e) {
            var n = e.percents,
              r = e.lengths,
              i = n.length,
              a = bmFloor((i - 1) * t),
              s = t * e.addedLength,
              o = 0;
            if (a === i - 1 || 0 === a || s === r[a]) return n[a];
            for (var l = r[a] > s ? -1 : 1, u = !0; u;)
              if (r[a] <= s && r[a + 1] > s ? (o = (s - r[a]) / (r[a + 1] - r[a]), u = !1) : a += l, a < 0 || a >= i - 1) {
                if (a === i - 1) return n[a];
                u = !1
              } return n[a] + (n[a + 1] - n[a]) * o
          }
          var l = createTypedArray("float32", 8);
          return {
            getSegmentsLength: function(t) {
              var e, r = segmentsLengthPool.newElement(),
                i = t.c,
                a = t.v,
                s = t.o,
                o = t.i,
                l = t._length,
                u = r.lengths,
                h = 0;
              for (e = 0; e < l - 1; e += 1) u[e] = n(a[e], a[e + 1], s[e], o[e + 1]), h += u[e].addedLength;
              return i && l && (u[e] = n(a[e], a[0], s[e], o[0]), h += u[e].addedLength), r.totalLength = h, r
            },
            getNewSegment: function(e, n, r, i, a, s, u) {
              a < 0 ? a = 0 : a > 1 && (a = 1);
              var h, c = o(a, u),
                p = o(s = s > 1 ? 1 : s, u),
                f = e.length,
                d = 1 - c,
                m = 1 - p,
                v = d * d * d,
                g = c * d * d * 3,
                y = c * c * d * 3,
                b = c * c * c,
                x = d * d * m,
                S = c * d * m + d * c * m + d * d * p,
                E = c * c * m + d * c * p + c * d * p,
                P = c * c * p,
                C = d * m * m,
                w = c * m * m + d * p * m + d * m * p,
                M = c * p * m + d * p * p + c * m * p,
                T = c * p * p,
                A = m * m * m,
                k = p * m * m + m * p * m + m * m * p,
                _ = p * p * m + m * p * p + p * m * p,
                D = p * p * p;
              for (h = 0; h < f; h += 1) l[4 * h] = t.round(1e3 * (v * e[h] + g * r[h] + y * i[h] + b * n[h])) / 1e3, l[4 * h + 1] = t.round(1e3 * (x * e[h] + S * r[h] + E * i[h] + P * n[h])) / 1e3, l[4 * h + 2] = t.round(1e3 * (C * e[h] + w * r[h] + M * i[h] + T * n[h])) / 1e3, l[4 * h + 3] = t.round(1e3 * (A * e[h] + k * r[h] + _ * i[h] + D * n[h])) / 1e3;
              return l
            },
            getPointInSegment: function(e, n, r, i, a, s) {
              var l = o(a, s),
                u = 1 - l;
              return [t.round(1e3 * (u * u * u * e[0] + (l * u * u + u * l * u + u * u * l) * r[0] + (l * l * u + u * l * l + l * u * l) * i[0] + l * l * l * n[0])) / 1e3, t.round(1e3 * (u * u * u * e[1] + (l * u * u + u * l * u + u * u * l) * r[1] + (l * l * u + u * l * l + l * u * l) * i[1] + l * l * l * n[1])) / 1e3]
            },
            buildBezierData: s,
            pointOnLine2D: e,
            pointOnLine3D: function(n, r, i, a, s, o, l, u, h) {
              if (0 === i && 0 === o && 0 === h) return e(n, r, a, s, l, u);
              var c, p = t.sqrt(t.pow(a - n, 2) + t.pow(s - r, 2) + t.pow(o - i, 2)),
                f = t.sqrt(t.pow(l - n, 2) + t.pow(u - r, 2) + t.pow(h - i, 2)),
                d = t.sqrt(t.pow(l - a, 2) + t.pow(u - s, 2) + t.pow(h - o, 2));
              return (c = p > f ? p > d ? p - f - d : d - f - p : d > f ? d - f - p : f - p - d) > -1e-4 && c < 1e-4
            }
          }
        }
        var bez = bezFunction(),
          initFrame = initialDefaultFrame,
          mathAbs = Math.abs;

        function interpolateValue(t, e) {
          var n, r = this.offsetTime;
          "multidimensional" === this.propType && (n = createTypedArray("float32", this.pv.length));
          for (var i, a, s, o, l, u, h, c, p, f = e.lastIndex, d = f, m = this.keyframes.length - 1, v = !0; v;) {
            if (i = this.keyframes[d], a = this.keyframes[d + 1], d === m - 1 && t >= a.t - r) {
              i.h && (i = a), f = 0;
              break
            }
            if (a.t - r > t) {
              f = d;
              break
            }
            d < m - 1 ? d += 1 : (f = 0, v = !1)
          }
          s = this.keyframesMetadata[d] || {};
          var g, y = a.t - r,
            b = i.t - r;
          if (i.to) {
            s.bezierData || (s.bezierData = bez.buildBezierData(i.s, a.s || i.e, i.to, i.ti));
            var x = s.bezierData;
            if (t >= y || t < b) {
              var S = t >= y ? x.points.length - 1 : 0;
              for (l = x.points[S].point.length, o = 0; o < l; o += 1) n[o] = x.points[S].point[o]
            } else {
              s.__fnct ? p = s.__fnct : (p = BezierFactory.getBezierEasing(i.o.x, i.o.y, i.i.x, i.i.y, i.n).get, s.__fnct = p), u = p((t - b) / (y - b));
              var E, P = x.segmentLength * u,
                C = e.lastFrame < t && e._lastKeyframeIndex === d ? e._lastAddedLength : 0;
              for (c = e.lastFrame < t && e._lastKeyframeIndex === d ? e._lastPoint : 0, v = !0, h = x.points.length; v;) {
                if (C += x.points[c].partialLength, 0 === P || 0 === u || c === x.points.length - 1) {
                  for (l = x.points[c].point.length, o = 0; o < l; o += 1) n[o] = x.points[c].point[o];
                  break
                }
                if (P >= C && P < C + x.points[c + 1].partialLength) {
                  for (E = (P - C) / x.points[c + 1].partialLength, l = x.points[c].point.length, o = 0; o < l; o += 1) n[o] = x.points[c].point[o] + (x.points[c + 1].point[o] - x.points[c].point[o]) * E;
                  break
                }
                c < h - 1 ? c += 1 : v = !1
              }
              e._lastPoint = c, e._lastAddedLength = C - x.points[c].partialLength, e._lastKeyframeIndex = d
            }
          } else {
            var w, M, T, A, k;
            if (m = i.s.length, g = a.s || i.e, this.sh && 1 !== i.h) t >= y ? (n[0] = g[0], n[1] = g[1], n[2] = g[2]) : t <= b ? (n[0] = i.s[0], n[1] = i.s[1], n[2] = i.s[2]) : quaternionToEuler(n, slerp(createQuaternion(i.s), createQuaternion(g), (t - b) / (y - b)));
            else
              for (d = 0; d < m; d += 1) 1 !== i.h && (t >= y ? u = 1 : t < b ? u = 0 : (i.o.x.constructor === Array ? (s.__fnct || (s.__fnct = []), s.__fnct[d] ? p = s.__fnct[d] : (w = void 0 === i.o.x[d] ? i.o.x[0] : i.o.x[d], M = void 0 === i.o.y[d] ? i.o.y[0] : i.o.y[d], T = void 0 === i.i.x[d] ? i.i.x[0] : i.i.x[d], A = void 0 === i.i.y[d] ? i.i.y[0] : i.i.y[d], p = BezierFactory.getBezierEasing(w, M, T, A).get, s.__fnct[d] = p)) : s.__fnct ? p = s.__fnct : (w = i.o.x, M = i.o.y, T = i.i.x, A = i.i.y, p = BezierFactory.getBezierEasing(w, M, T, A).get, i.keyframeMetadata = p), u = p((t - b) / (y - b)))), g = a.s || i.e, k = 1 === i.h ? i.s[d] : i.s[d] + (g[d] - i.s[d]) * u, "multidimensional" === this.propType ? n[d] = k : n = k
          }
          return e.lastIndex = f, n
        }

        function slerp(t, e, n) {
          var r, i, a, s, o, l = [],
            u = t[0],
            h = t[1],
            c = t[2],
            p = t[3],
            f = e[0],
            d = e[1],
            m = e[2],
            v = e[3];
          return (i = u * f + h * d + c * m + p * v) < 0 && (i = -i, f = -f, d = -d, m = -m, v = -v), 1 - i > 1e-6 ? (r = Math.acos(i), a = Math.sin(r), s = Math.sin((1 - n) * r) / a, o = Math.sin(n * r) / a) : (s = 1 - n, o = n), l[0] = s * u + o * f, l[1] = s * h + o * d, l[2] = s * c + o * m, l[3] = s * p + o * v, l
        }

        function quaternionToEuler(t, e) {
          var n = e[0],
            r = e[1],
            i = e[2],
            a = e[3],
            s = Math.atan2(2 * r * a - 2 * n * i, 1 - 2 * r * r - 2 * i * i),
            o = Math.asin(2 * n * r + 2 * i * a),
            l = Math.atan2(2 * n * a - 2 * r * i, 1 - 2 * n * n - 2 * i * i);
          t[0] = s / degToRads, t[1] = o / degToRads, t[2] = l / degToRads
        }

        function createQuaternion(t) {
          var e = t[0] * degToRads,
            n = t[1] * degToRads,
            r = t[2] * degToRads,
            i = Math.cos(e / 2),
            a = Math.cos(n / 2),
            s = Math.cos(r / 2),
            o = Math.sin(e / 2),
            l = Math.sin(n / 2),
            u = Math.sin(r / 2);
          return [o * l * s + i * a * u, o * a * s + i * l * u, i * l * s - o * a * u, i * a * s - o * l * u]
        }

        function getValueAtCurrentTime() {
          var t = this.comp.renderedFrame - this.offsetTime,
            e = this.keyframes[0].t - this.offsetTime,
            n = this.keyframes[this.keyframes.length - 1].t - this.offsetTime;
          if (!(t === this._caching.lastFrame || this._caching.lastFrame !== initFrame && (this._caching.lastFrame >= n && t >= n || this._caching.lastFrame < e && t < e))) {
            this._caching.lastFrame >= t && (this._caching._lastKeyframeIndex = -1, this._caching.lastIndex = 0);
            var r = this.interpolateValue(t, this._caching);
            this.pv = r
          }
          return this._caching.lastFrame = t, this.pv
        }

        function setVValue(t) {
          var e;
          if ("unidimensional" === this.propType) e = t * this.mult, mathAbs(this.v - e) > 1e-5 && (this.v = e, this._mdf = !0);
          else
            for (var n = 0, r = this.v.length; n < r;) e = t[n] * this.mult, mathAbs(this.v[n] - e) > 1e-5 && (this.v[n] = e, this._mdf = !0), n += 1
        }

        function processEffectsSequence() {
          if (this.elem.globalData.frameId !== this.frameId && this.effectsSequence.length)
            if (this.lock) this.setVValue(this.pv);
            else {
              var t;
              this.lock = !0, this._mdf = this._isFirstFrame;
              var e = this.effectsSequence.length,
                n = this.kf ? this.pv : this.data.k;
              for (t = 0; t < e; t += 1) n = this.effectsSequence[t](n);
              this.setVValue(n), this._isFirstFrame = !1, this.lock = !1, this.frameId = this.elem.globalData.frameId
            }
        }

        function addEffect(t) {
          this.effectsSequence.push(t), this.container.addDynamicProperty(this)
        }

        function ValueProperty(t, e, n, r) {
          this.propType = "unidimensional", this.mult = n || 1, this.data = e, this.v = n ? e.k * n : e.k, this.pv = e.k, this._mdf = !1, this.elem = t, this.container = r, this.comp = t.comp, this.k = !1, this.kf = !1, this.vel = 0, this.effectsSequence = [], this._isFirstFrame = !0, this.getValue = processEffectsSequence, this.setVValue = setVValue, this.addEffect = addEffect
        }

        function MultiDimensionalProperty(t, e, n, r) {
          var i;
          this.propType = "multidimensional", this.mult = n || 1, this.data = e, this._mdf = !1, this.elem = t, this.container = r, this.comp = t.comp, this.k = !1, this.kf = !1, this.frameId = -1;
          var a = e.k.length;
          for (this.v = createTypedArray("float32", a), this.pv = createTypedArray("float32", a), this.vel = createTypedArray("float32", a), i = 0; i < a; i += 1) this.v[i] = e.k[i] * this.mult, this.pv[i] = e.k[i];
          this._isFirstFrame = !0, this.effectsSequence = [], this.getValue = processEffectsSequence, this.setVValue = setVValue, this.addEffect = addEffect
        }

        function KeyframedValueProperty(t, e, n, r) {
          this.propType = "unidimensional", this.keyframes = e.k, this.keyframesMetadata = [], this.offsetTime = t.data.st, this.frameId = -1, this._caching = {
            lastFrame: initFrame,
            lastIndex: 0,
            value: 0,
            _lastKeyframeIndex: -1
          }, this.k = !0, this.kf = !0, this.data = e, this.mult = n || 1, this.elem = t, this.container = r, this.comp = t.comp, this.v = initFrame, this.pv = initFrame, this._isFirstFrame = !0, this.getValue = processEffectsSequence, this.setVValue = setVValue, this.interpolateValue = interpolateValue, this.effectsSequence = [getValueAtCurrentTime.bind(this)], this.addEffect = addEffect
        }

        function KeyframedMultidimensionalProperty(t, e, n, r) {
          var i;
          this.propType = "multidimensional";
          var a, s, o, l, u = e.k.length;
          for (i = 0; i < u - 1; i += 1) e.k[i].to && e.k[i].s && e.k[i + 1] && e.k[i + 1].s && (a = e.k[i].s, s = e.k[i + 1].s, o = e.k[i].to, l = e.k[i].ti, (2 === a.length && (a[0] !== s[0] || a[1] !== s[1]) && bez.pointOnLine2D(a[0], a[1], s[0], s[1], a[0] + o[0], a[1] + o[1]) && bez.pointOnLine2D(a[0], a[1], s[0], s[1], s[0] + l[0], s[1] + l[1]) || 3 === a.length && (a[0] !== s[0] || a[1] !== s[1] || a[2] !== s[2]) && bez.pointOnLine3D(a[0], a[1], a[2], s[0], s[1], s[2], a[0] + o[0], a[1] + o[1], a[2] + o[2]) && bez.pointOnLine3D(a[0], a[1], a[2], s[0], s[1], s[2], s[0] + l[0], s[1] + l[1], s[2] + l[2])) && (e.k[i].to = null, e.k[i].ti = null), a[0] === s[0] && a[1] === s[1] && 0 === o[0] && 0 === o[1] && 0 === l[0] && 0 === l[1] && (2 === a.length || a[2] === s[2] && 0 === o[2] && 0 === l[2]) && (e.k[i].to = null, e.k[i].ti = null));
          this.effectsSequence = [getValueAtCurrentTime.bind(this)], this.data = e, this.keyframes = e.k, this.keyframesMetadata = [], this.offsetTime = t.data.st, this.k = !0, this.kf = !0, this._isFirstFrame = !0, this.mult = n || 1, this.elem = t, this.container = r, this.comp = t.comp, this.getValue = processEffectsSequence, this.setVValue = setVValue, this.interpolateValue = interpolateValue, this.frameId = -1;
          var h = e.k[0].s.length;
          for (this.v = createTypedArray("float32", h), this.pv = createTypedArray("float32", h), i = 0; i < h; i += 1) this.v[i] = initFrame, this.pv[i] = initFrame;
          this._caching = {
            lastFrame: initFrame,
            lastIndex: 0,
            value: createTypedArray("float32", h)
          }, this.addEffect = addEffect
        }
        var PropertyFactory = {
          getProp: function(t, e, n, r, i) {
            var a;
            if (e.sid && (e = t.globalData.slotManager.getProp(e)), e.k.length)
              if ("number" == typeof e.k[0]) a = new MultiDimensionalProperty(t, e, r, i);
              else switch (n) {
                case 0:
                  a = new KeyframedValueProperty(t, e, r, i);
                  break;
                case 1:
                  a = new KeyframedMultidimensionalProperty(t, e, r, i)
              } else a = new ValueProperty(t, e, r, i);
            return a.effectsSequence.length && i.addDynamicProperty(a), a
          }
        };

        function DynamicPropertyContainer() {}
        DynamicPropertyContainer.prototype = {
          addDynamicProperty: function(t) {
            -1 === this.dynamicProperties.indexOf(t) && (this.dynamicProperties.push(t), this.container.addDynamicProperty(this), this._isAnimated = !0)
          },
          iterateDynamicProperties: function() {
            var t;
            this._mdf = !1;
            var e = this.dynamicProperties.length;
            for (t = 0; t < e; t += 1) this.dynamicProperties[t].getValue(), this.dynamicProperties[t]._mdf && (this._mdf = !0)
          },
          initDynamicPropertyContainer: function(t) {
            this.container = t, this.dynamicProperties = [], this._mdf = !1, this._isAnimated = !1
          }
        };
        var pointPool = poolFactory(8, (function() {
          return createTypedArray("float32", 2)
        }));

        function ShapePath() {
          this.c = !1, this._length = 0, this._maxLength = 8, this.v = createSizedArray(this._maxLength), this.o = createSizedArray(this._maxLength), this.i = createSizedArray(this._maxLength)
        }
        ShapePath.prototype.setPathData = function(t, e) {
          this.c = t, this.setLength(e);
          for (var n = 0; n < e;) this.v[n] = pointPool.newElement(), this.o[n] = pointPool.newElement(), this.i[n] = pointPool.newElement(), n += 1
        }, ShapePath.prototype.setLength = function(t) {
          for (; this._maxLength < t;) this.doubleArrayLength();
          this._length = t
        }, ShapePath.prototype.doubleArrayLength = function() {
          this.v = this.v.concat(createSizedArray(this._maxLength)), this.i = this.i.concat(createSizedArray(this._maxLength)), this.o = this.o.concat(createSizedArray(this._maxLength)), this._maxLength *= 2
        }, ShapePath.prototype.setXYAt = function(t, e, n, r, i) {
          var a;
          switch (this._length = Math.max(this._length, r + 1), this._length >= this._maxLength && this.doubleArrayLength(), n) {
            case "v":
              a = this.v;
              break;
            case "i":
              a = this.i;
              break;
            case "o":
              a = this.o;
              break;
            default:
              a = []
          }(!a[r] || a[r] && !i) && (a[r] = pointPool.newElement()), a[r][0] = t, a[r][1] = e
        }, ShapePath.prototype.setTripleAt = function(t, e, n, r, i, a, s, o) {
          this.setXYAt(t, e, "v", s, o), this.setXYAt(n, r, "o", s, o), this.setXYAt(i, a, "i", s, o)
        }, ShapePath.prototype.reverse = function() {
          var t = new ShapePath;
          t.setPathData(this.c, this._length);
          var e = this.v,
            n = this.o,
            r = this.i,
            i = 0;
          this.c && (t.setTripleAt(e[0][0], e[0][1], r[0][0], r[0][1], n[0][0], n[0][1], 0, !1), i = 1);
          var a, s = this._length - 1,
            o = this._length;
          for (a = i; a < o; a += 1) t.setTripleAt(e[s][0], e[s][1], r[s][0], r[s][1], n[s][0], n[s][1], a, !1), s -= 1;
          return t
        }, ShapePath.prototype.length = function() {
          return this._length
        };
        var shapePool = (factory = poolFactory(4, (function() {
            return new ShapePath
          }), (function(t) {
            var e, n = t._length;
            for (e = 0; e < n; e += 1) pointPool.release(t.v[e]), pointPool.release(t.i[e]), pointPool.release(t.o[e]), t.v[e] = null, t.i[e] = null, t.o[e] = null;
            t._length = 0, t.c = !1
          })), factory.clone = function(t) {
            var e, n = factory.newElement(),
              r = void 0 === t._length ? t.v.length : t._length;
            for (n.setLength(r), n.c = t.c, e = 0; e < r; e += 1) n.setTripleAt(t.v[e][0], t.v[e][1], t.o[e][0], t.o[e][1], t.i[e][0], t.i[e][1], e);
            return n
          }, factory),
          factory;

        function ShapeCollection() {
          this._length = 0, this._maxLength = 4, this.shapes = createSizedArray(this._maxLength)
        }
        ShapeCollection.prototype.addShape = function(t) {
          this._length === this._maxLength && (this.shapes = this.shapes.concat(createSizedArray(this._maxLength)), this._maxLength *= 2), this.shapes[this._length] = t, this._length += 1
        }, ShapeCollection.prototype.releaseShapes = function() {
          var t;
          for (t = 0; t < this._length; t += 1) shapePool.release(this.shapes[t]);
          this._length = 0
        };
        var shapeCollectionPool = (ob = {
            newShapeCollection: function() {
              return _length ? pool[_length -= 1] : new ShapeCollection
            },
            release: function(t) {
              var e, n = t._length;
              for (e = 0; e < n; e += 1) shapePool.release(t.shapes[e]);
              t._length = 0, _length === _maxLength && (pool = pooling.double(pool), _maxLength *= 2), pool[_length] = t, _length += 1
            }
          }, _length = 0, _maxLength = 4, pool = createSizedArray(_maxLength), ob),
          ob, _length, _maxLength, pool, ShapePropertyFactory = function() {
            var t = -999999;

            function e(t, e, n) {
              var r, i, a, s, o, l, u, h, c, p = n.lastIndex,
                f = this.keyframes;
              if (t < f[0].t - this.offsetTime) r = f[0].s[0], a = !0, p = 0;
              else if (t >= f[f.length - 1].t - this.offsetTime) r = f[f.length - 1].s ? f[f.length - 1].s[0] : f[f.length - 2].e[0], a = !0;
              else {
                for (var d, m, v, g = p, y = f.length - 1, b = !0; b && (d = f[g], !((m = f[g + 1]).t - this.offsetTime > t));) g < y - 1 ? g += 1 : b = !1;
                if (v = this.keyframesMetadata[g] || {}, p = g, !(a = 1 === d.h)) {
                  if (t >= m.t - this.offsetTime) h = 1;
                  else if (t < d.t - this.offsetTime) h = 0;
                  else {
                    var x;
                    v.__fnct ? x = v.__fnct : (x = BezierFactory.getBezierEasing(d.o.x, d.o.y, d.i.x, d.i.y).get, v.__fnct = x), h = x((t - (d.t - this.offsetTime)) / (m.t - this.offsetTime - (d.t - this.offsetTime)))
                  }
                  i = m.s ? m.s[0] : d.e[0]
                }
                r = d.s[0]
              }
              for (l = e._length, u = r.i[0].length, n.lastIndex = p, s = 0; s < l; s += 1)
                for (o = 0; o < u; o += 1) c = a ? r.i[s][o] : r.i[s][o] + (i.i[s][o] - r.i[s][o]) * h, e.i[s][o] = c, c = a ? r.o[s][o] : r.o[s][o] + (i.o[s][o] - r.o[s][o]) * h, e.o[s][o] = c, c = a ? r.v[s][o] : r.v[s][o] + (i.v[s][o] - r.v[s][o]) * h, e.v[s][o] = c
            }

            function n() {
              var e = this.comp.renderedFrame - this.offsetTime,
                n = this.keyframes[0].t - this.offsetTime,
                r = this.keyframes[this.keyframes.length - 1].t - this.offsetTime,
                i = this._caching.lastFrame;
              return i !== t && (i < n && e < n || i > r && e > r) || (this._caching.lastIndex = i < e ? this._caching.lastIndex : 0, this.interpolateShape(e, this.pv, this._caching)), this._caching.lastFrame = e, this.pv
            }

            function r() {
              this.paths = this.localShapeCollection
            }

            function i(t) {
              (function(t, e) {
                if (t._length !== e._length || t.c !== e.c) return !1;
                var n, r = t._length;
                for (n = 0; n < r; n += 1)
                  if (t.v[n][0] !== e.v[n][0] || t.v[n][1] !== e.v[n][1] || t.o[n][0] !== e.o[n][0] || t.o[n][1] !== e.o[n][1] || t.i[n][0] !== e.i[n][0] || t.i[n][1] !== e.i[n][1]) return !1;
                return !0
              })(this.v, t) || (this.v = shapePool.clone(t), this.localShapeCollection.releaseShapes(), this.localShapeCollection.addShape(this.v), this._mdf = !0, this.paths = this.localShapeCollection)
            }

            function a() {
              if (this.elem.globalData.frameId !== this.frameId)
                if (this.effectsSequence.length)
                  if (this.lock) this.setVValue(this.pv);
                  else {
                    var t, e;
                    this.lock = !0, this._mdf = !1, t = this.kf ? this.pv : this.data.ks ? this.data.ks.k : this.data.pt.k;
                    var n = this.effectsSequence.length;
                    for (e = 0; e < n; e += 1) t = this.effectsSequence[e](t);
                    this.setVValue(t), this.lock = !1, this.frameId = this.elem.globalData.frameId
                  }
              else this._mdf = !1
            }

            function s(t, e, n) {
              this.propType = "shape", this.comp = t.comp, this.container = t, this.elem = t, this.data = e, this.k = !1, this.kf = !1, this._mdf = !1;
              var i = 3 === n ? e.pt.k : e.ks.k;
              this.v = shapePool.clone(i), this.pv = shapePool.clone(this.v), this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.paths = this.localShapeCollection, this.paths.addShape(this.v), this.reset = r, this.effectsSequence = []
            }

            function o(t) {
              this.effectsSequence.push(t), this.container.addDynamicProperty(this)
            }

            function l(e, i, a) {
              this.propType = "shape", this.comp = e.comp, this.elem = e, this.container = e, this.offsetTime = e.data.st, this.keyframes = 3 === a ? i.pt.k : i.ks.k, this.keyframesMetadata = [], this.k = !0, this.kf = !0;
              var s = this.keyframes[0].s[0].i.length;
              this.v = shapePool.newElement(), this.v.setPathData(this.keyframes[0].s[0].c, s), this.pv = shapePool.clone(this.v), this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.paths = this.localShapeCollection, this.paths.addShape(this.v), this.lastFrame = t, this.reset = r, this._caching = {
                lastFrame: t,
                lastIndex: 0
              }, this.effectsSequence = [n.bind(this)]
            }
            s.prototype.interpolateShape = e, s.prototype.getValue = a, s.prototype.setVValue = i, s.prototype.addEffect = o, l.prototype.getValue = a, l.prototype.interpolateShape = e, l.prototype.setVValue = i, l.prototype.addEffect = o;
            var u = function() {
                var t = roundCorner;

                function e(t, e) {
                  this.v = shapePool.newElement(), this.v.setPathData(!0, 4), this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.paths = this.localShapeCollection, this.localShapeCollection.addShape(this.v), this.d = e.d, this.elem = t, this.comp = t.comp, this.frameId = -1, this.initDynamicPropertyContainer(t), this.p = PropertyFactory.getProp(t, e.p, 1, 0, this), this.s = PropertyFactory.getProp(t, e.s, 1, 0, this), this.dynamicProperties.length ? this.k = !0 : (this.k = !1, this.convertEllToPath())
                }
                return e.prototype = {
                  reset: r,
                  getValue: function() {
                    this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertEllToPath())
                  },
                  convertEllToPath: function() {
                    var e = this.p.v[0],
                      n = this.p.v[1],
                      r = this.s.v[0] / 2,
                      i = this.s.v[1] / 2,
                      a = 3 !== this.d,
                      s = this.v;
                    s.v[0][0] = e, s.v[0][1] = n - i, s.v[1][0] = a ? e + r : e - r, s.v[1][1] = n, s.v[2][0] = e, s.v[2][1] = n + i, s.v[3][0] = a ? e - r : e + r, s.v[3][1] = n, s.i[0][0] = a ? e - r * t : e + r * t, s.i[0][1] = n - i, s.i[1][0] = a ? e + r : e - r, s.i[1][1] = n - i * t, s.i[2][0] = a ? e + r * t : e - r * t, s.i[2][1] = n + i, s.i[3][0] = a ? e - r : e + r, s.i[3][1] = n + i * t, s.o[0][0] = a ? e + r * t : e - r * t, s.o[0][1] = n - i, s.o[1][0] = a ? e + r : e - r, s.o[1][1] = n + i * t, s.o[2][0] = a ? e - r * t : e + r * t, s.o[2][1] = n + i, s.o[3][0] = a ? e - r : e + r, s.o[3][1] = n - i * t
                  }
                }, extendPrototype([DynamicPropertyContainer], e), e
              }(),
              h = function() {
                function t(t, e) {
                  this.v = shapePool.newElement(), this.v.setPathData(!0, 0), this.elem = t, this.comp = t.comp, this.data = e, this.frameId = -1, this.d = e.d, this.initDynamicPropertyContainer(t), 1 === e.sy ? (this.ir = PropertyFactory.getProp(t, e.ir, 0, 0, this), this.is = PropertyFactory.getProp(t, e.is, 0, .01, this), this.convertToPath = this.convertStarToPath) : this.convertToPath = this.convertPolygonToPath, this.pt = PropertyFactory.getProp(t, e.pt, 0, 0, this), this.p = PropertyFactory.getProp(t, e.p, 1, 0, this), this.r = PropertyFactory.getProp(t, e.r, 0, degToRads, this), this.or = PropertyFactory.getProp(t, e.or, 0, 0, this), this.os = PropertyFactory.getProp(t, e.os, 0, .01, this), this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.localShapeCollection.addShape(this.v), this.paths = this.localShapeCollection, this.dynamicProperties.length ? this.k = !0 : (this.k = !1, this.convertToPath())
                }
                return t.prototype = {
                  reset: r,
                  getValue: function() {
                    this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertToPath())
                  },
                  convertStarToPath: function() {
                    var t, e, n, r, i = 2 * Math.floor(this.pt.v),
                      a = 2 * Math.PI / i,
                      s = !0,
                      o = this.or.v,
                      l = this.ir.v,
                      u = this.os.v,
                      h = this.is.v,
                      c = 2 * Math.PI * o / (2 * i),
                      p = 2 * Math.PI * l / (2 * i),
                      f = -Math.PI / 2;
                    f += this.r.v;
                    var d = 3 === this.data.d ? -1 : 1;
                    for (this.v._length = 0, t = 0; t < i; t += 1) {
                      n = s ? u : h, r = s ? c : p;
                      var m = (e = s ? o : l) * Math.cos(f),
                        v = e * Math.sin(f),
                        g = 0 === m && 0 === v ? 0 : v / Math.sqrt(m * m + v * v),
                        y = 0 === m && 0 === v ? 0 : -m / Math.sqrt(m * m + v * v);
                      m += +this.p.v[0], v += +this.p.v[1], this.v.setTripleAt(m, v, m - g * r * n * d, v - y * r * n * d, m + g * r * n * d, v + y * r * n * d, t, !0), s = !s, f += a * d
                    }
                  },
                  convertPolygonToPath: function() {
                    var t, e = Math.floor(this.pt.v),
                      n = 2 * Math.PI / e,
                      r = this.or.v,
                      i = this.os.v,
                      a = 2 * Math.PI * r / (4 * e),
                      s = .5 * -Math.PI,
                      o = 3 === this.data.d ? -1 : 1;
                    for (s += this.r.v, this.v._length = 0, t = 0; t < e; t += 1) {
                      var l = r * Math.cos(s),
                        u = r * Math.sin(s),
                        h = 0 === l && 0 === u ? 0 : u / Math.sqrt(l * l + u * u),
                        c = 0 === l && 0 === u ? 0 : -l / Math.sqrt(l * l + u * u);
                      l += +this.p.v[0], u += +this.p.v[1], this.v.setTripleAt(l, u, l - h * a * i * o, u - c * a * i * o, l + h * a * i * o, u + c * a * i * o, t, !0), s += n * o
                    }
                    this.paths.length = 0, this.paths[0] = this.v
                  }
                }, extendPrototype([DynamicPropertyContainer], t), t
              }(),
              c = function() {
                function t(t, e) {
                  this.v = shapePool.newElement(), this.v.c = !0, this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.localShapeCollection.addShape(this.v), this.paths = this.localShapeCollection, this.elem = t, this.comp = t.comp, this.frameId = -1, this.d = e.d, this.initDynamicPropertyContainer(t), this.p = PropertyFactory.getProp(t, e.p, 1, 0, this), this.s = PropertyFactory.getProp(t, e.s, 1, 0, this), this.r = PropertyFactory.getProp(t, e.r, 0, 0, this), this.dynamicProperties.length ? this.k = !0 : (this.k = !1, this.convertRectToPath())
                }
                return t.prototype = {
                  convertRectToPath: function() {
                    var t = this.p.v[0],
                      e = this.p.v[1],
                      n = this.s.v[0] / 2,
                      r = this.s.v[1] / 2,
                      i = bmMin(n, r, this.r.v),
                      a = i * (1 - roundCorner);
                    this.v._length = 0, 2 === this.d || 1 === this.d ? (this.v.setTripleAt(t + n, e - r + i, t + n, e - r + i, t + n, e - r + a, 0, !0), this.v.setTripleAt(t + n, e + r - i, t + n, e + r - a, t + n, e + r - i, 1, !0), 0 !== i ? (this.v.setTripleAt(t + n - i, e + r, t + n - i, e + r, t + n - a, e + r, 2, !0), this.v.setTripleAt(t - n + i, e + r, t - n + a, e + r, t - n + i, e + r, 3, !0), this.v.setTripleAt(t - n, e + r - i, t - n, e + r - i, t - n, e + r - a, 4, !0), this.v.setTripleAt(t - n, e - r + i, t - n, e - r + a, t - n, e - r + i, 5, !0), this.v.setTripleAt(t - n + i, e - r, t - n + i, e - r, t - n + a, e - r, 6, !0), this.v.setTripleAt(t + n - i, e - r, t + n - a, e - r, t + n - i, e - r, 7, !0)) : (this.v.setTripleAt(t - n, e + r, t - n + a, e + r, t - n, e + r, 2), this.v.setTripleAt(t - n, e - r, t - n, e - r + a, t - n, e - r, 3))) : (this.v.setTripleAt(t + n, e - r + i, t + n, e - r + a, t + n, e - r + i, 0, !0), 0 !== i ? (this.v.setTripleAt(t + n - i, e - r, t + n - i, e - r, t + n - a, e - r, 1, !0), this.v.setTripleAt(t - n + i, e - r, t - n + a, e - r, t - n + i, e - r, 2, !0), this.v.setTripleAt(t - n, e - r + i, t - n, e - r + i, t - n, e - r + a, 3, !0), this.v.setTripleAt(t - n, e + r - i, t - n, e + r - a, t - n, e + r - i, 4, !0), this.v.setTripleAt(t - n + i, e + r, t - n + i, e + r, t - n + a, e + r, 5, !0), this.v.setTripleAt(t + n - i, e + r, t + n - a, e + r, t + n - i, e + r, 6, !0), this.v.setTripleAt(t + n, e + r - i, t + n, e + r - i, t + n, e + r - a, 7, !0)) : (this.v.setTripleAt(t - n, e - r, t - n + a, e - r, t - n, e - r, 1, !0), this.v.setTripleAt(t - n, e + r, t - n, e + r - a, t - n, e + r, 2, !0), this.v.setTripleAt(t + n, e + r, t + n - a, e + r, t + n, e + r, 3, !0)))
                  },
                  getValue: function() {
                    this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertRectToPath())
                  },
                  reset: r
                }, extendPrototype([DynamicPropertyContainer], t), t
              }();
            return {
              getShapeProp: function(t, e, n) {
                var r;
                return 3 === n || 4 === n ? r = (3 === n ? e.pt : e.ks).k.length ? new l(t, e, n) : new s(t, e, n) : 5 === n ? r = new c(t, e) : 6 === n ? r = new u(t, e) : 7 === n && (r = new h(t, e)), r.k && t.addDynamicProperty(r), r
              },
              getConstructorFunction: function() {
                return s
              },
              getKeyframedConstructorFunction: function() {
                return l
              }
            }
          }(),
          Matrix = function() {
            var t = Math.cos,
              e = Math.sin,
              n = Math.tan,
              r = Math.round;

            function i() {
              return this.props[0] = 1, this.props[1] = 0, this.props[2] = 0, this.props[3] = 0, this.props[4] = 0, this.props[5] = 1, this.props[6] = 0, this.props[7] = 0, this.props[8] = 0, this.props[9] = 0, this.props[10] = 1, this.props[11] = 0, this.props[12] = 0, this.props[13] = 0, this.props[14] = 0, this.props[15] = 1, this
            }

            function a(n) {
              if (0 === n) return this;
              var r = t(n),
                i = e(n);
              return this._t(r, -i, 0, 0, i, r, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
            }

            function s(n) {
              if (0 === n) return this;
              var r = t(n),
                i = e(n);
              return this._t(1, 0, 0, 0, 0, r, -i, 0, 0, i, r, 0, 0, 0, 0, 1)
            }

            function o(n) {
              if (0 === n) return this;
              var r = t(n),
                i = e(n);
              return this._t(r, 0, i, 0, 0, 1, 0, 0, -i, 0, r, 0, 0, 0, 0, 1)
            }

            function l(n) {
              if (0 === n) return this;
              var r = t(n),
                i = e(n);
              return this._t(r, -i, 0, 0, i, r, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
            }

            function u(t, e) {
              return this._t(1, e, t, 1, 0, 0)
            }

            function h(t, e) {
              return this.shear(n(t), n(e))
            }

            function c(r, i) {
              var a = t(i),
                s = e(i);
              return this._t(a, s, 0, 0, -s, a, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)._t(1, 0, 0, 0, n(r), 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)._t(a, -s, 0, 0, s, a, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
            }

            function p(t, e, n) {
              return n || 0 === n || (n = 1), 1 === t && 1 === e && 1 === n ? this : this._t(t, 0, 0, 0, 0, e, 0, 0, 0, 0, n, 0, 0, 0, 0, 1)
            }

            function f(t, e, n, r, i, a, s, o, l, u, h, c, p, f, d, m) {
              return this.props[0] = t, this.props[1] = e, this.props[2] = n, this.props[3] = r, this.props[4] = i, this.props[5] = a, this.props[6] = s, this.props[7] = o, this.props[8] = l, this.props[9] = u, this.props[10] = h, this.props[11] = c, this.props[12] = p, this.props[13] = f, this.props[14] = d, this.props[15] = m, this
            }

            function d(t, e, n) {
              return n = n || 0, 0 !== t || 0 !== e || 0 !== n ? this._t(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, t, e, n, 1) : this
            }

            function m(t, e, n, r, i, a, s, o, l, u, h, c, p, f, d, m) {
              var v = this.props;
              if (1 === t && 0 === e && 0 === n && 0 === r && 0 === i && 1 === a && 0 === s && 0 === o && 0 === l && 0 === u && 1 === h && 0 === c) return v[12] = v[12] * t + v[15] * p, v[13] = v[13] * a + v[15] * f, v[14] = v[14] * h + v[15] * d, v[15] *= m, this._identityCalculated = !1, this;
              var g = v[0],
                y = v[1],
                b = v[2],
                x = v[3],
                S = v[4],
                E = v[5],
                P = v[6],
                C = v[7],
                w = v[8],
                M = v[9],
                T = v[10],
                A = v[11],
                k = v[12],
                _ = v[13],
                D = v[14],
                I = v[15];
              return v[0] = g * t + y * i + b * l + x * p, v[1] = g * e + y * a + b * u + x * f, v[2] = g * n + y * s + b * h + x * d, v[3] = g * r + y * o + b * c + x * m, v[4] = S * t + E * i + P * l + C * p, v[5] = S * e + E * a + P * u + C * f, v[6] = S * n + E * s + P * h + C * d, v[7] = S * r + E * o + P * c + C * m, v[8] = w * t + M * i + T * l + A * p, v[9] = w * e + M * a + T * u + A * f, v[10] = w * n + M * s + T * h + A * d, v[11] = w * r + M * o + T * c + A * m, v[12] = k * t + _ * i + D * l + I * p, v[13] = k * e + _ * a + D * u + I * f, v[14] = k * n + _ * s + D * h + I * d, v[15] = k * r + _ * o + D * c + I * m, this._identityCalculated = !1, this
            }

            function v(t) {
              var e = t.props;
              return this.transform(e[0], e[1], e[2], e[3], e[4], e[5], e[6], e[7], e[8], e[9], e[10], e[11], e[12], e[13], e[14], e[15])
            }

            function g() {
              return this._identityCalculated || (this._identity = !(1 !== this.props[0] || 0 !== this.props[1] || 0 !== this.props[2] || 0 !== this.props[3] || 0 !== this.props[4] || 1 !== this.props[5] || 0 !== this.props[6] || 0 !== this.props[7] || 0 !== this.props[8] || 0 !== this.props[9] || 1 !== this.props[10] || 0 !== this.props[11] || 0 !== this.props[12] || 0 !== this.props[13] || 0 !== this.props[14] || 1 !== this.props[15]), this._identityCalculated = !0), this._identity
            }

            function y(t) {
              for (var e = 0; e < 16;) {
                if (t.props[e] !== this.props[e]) return !1;
                e += 1
              }
              return !0
            }

            function b(t) {
              var e;
              for (e = 0; e < 16; e += 1) t.props[e] = this.props[e];
              return t
            }

            function x(t) {
              var e;
              for (e = 0; e < 16; e += 1) this.props[e] = t[e]
            }

            function S(t, e, n) {
              return {
                x: t * this.props[0] + e * this.props[4] + n * this.props[8] + this.props[12],
                y: t * this.props[1] + e * this.props[5] + n * this.props[9] + this.props[13],
                z: t * this.props[2] + e * this.props[6] + n * this.props[10] + this.props[14]
              }
            }

            function E(t, e, n) {
              return t * this.props[0] + e * this.props[4] + n * this.props[8] + this.props[12]
            }

            function P(t, e, n) {
              return t * this.props[1] + e * this.props[5] + n * this.props[9] + this.props[13]
            }

            function C(t, e, n) {
              return t * this.props[2] + e * this.props[6] + n * this.props[10] + this.props[14]
            }

            function w() {
              var t = this.props[0] * this.props[5] - this.props[1] * this.props[4],
                e = this.props[5] / t,
                n = -this.props[1] / t,
                r = -this.props[4] / t,
                i = this.props[0] / t,
                a = (this.props[4] * this.props[13] - this.props[5] * this.props[12]) / t,
                s = -(this.props[0] * this.props[13] - this.props[1] * this.props[12]) / t,
                o = new Matrix;
              return o.props[0] = e, o.props[1] = n, o.props[4] = r, o.props[5] = i, o.props[12] = a, o.props[13] = s, o
            }

            function M(t) {
              return this.getInverseMatrix().applyToPointArray(t[0], t[1], t[2] || 0)
            }

            function T(t) {
              var e, n = t.length,
                r = [];
              for (e = 0; e < n; e += 1) r[e] = M(t[e]);
              return r
            }

            function A(t, e, n) {
              var r = createTypedArray("float32", 6);
              if (this.isIdentity()) r[0] = t[0], r[1] = t[1], r[2] = e[0], r[3] = e[1], r[4] = n[0], r[5] = n[1];
              else {
                var i = this.props[0],
                  a = this.props[1],
                  s = this.props[4],
                  o = this.props[5],
                  l = this.props[12],
                  u = this.props[13];
                r[0] = t[0] * i + t[1] * s + l, r[1] = t[0] * a + t[1] * o + u, r[2] = e[0] * i + e[1] * s + l, r[3] = e[0] * a + e[1] * o + u, r[4] = n[0] * i + n[1] * s + l, r[5] = n[0] * a + n[1] * o + u
              }
              return r
            }

            function k(t, e, n) {
              return this.isIdentity() ? [t, e, n] : [t * this.props[0] + e * this.props[4] + n * this.props[8] + this.props[12], t * this.props[1] + e * this.props[5] + n * this.props[9] + this.props[13], t * this.props[2] + e * this.props[6] + n * this.props[10] + this.props[14]]
            }

            function _(t, e) {
              if (this.isIdentity()) return t + "," + e;
              var n = this.props;
              return Math.round(100 * (t * n[0] + e * n[4] + n[12])) / 100 + "," + Math.round(100 * (t * n[1] + e * n[5] + n[13])) / 100
            }

            function D() {
              for (var t = 0, e = this.props, n = "matrix3d("; t < 16;) n += r(1e4 * e[t]) / 1e4, n += 15 === t ? ")" : ",", t += 1;
              return n
            }

            function I(t) {
              return t < 1e-6 && t > 0 || t > -1e-6 && t < 0 ? r(1e4 * t) / 1e4 : t
            }

            function F() {
              var t = this.props;
              return "matrix(" + I(t[0]) + "," + I(t[1]) + "," + I(t[4]) + "," + I(t[5]) + "," + I(t[12]) + "," + I(t[13]) + ")"
            }
            return function() {
              this.reset = i, this.rotate = a, this.rotateX = s, this.rotateY = o, this.rotateZ = l, this.skew = h, this.skewFromAxis = c, this.shear = u, this.scale = p, this.setTransform = f, this.translate = d, this.transform = m, this.multiply = v, this.applyToPoint = S, this.applyToX = E, this.applyToY = P, this.applyToZ = C, this.applyToPointArray = k, this.applyToTriplePoints = A, this.applyToPointStringified = _, this.toCSS = D, this.to2dCSS = F, this.clone = b, this.cloneFromProps = x, this.equals = y, this.inversePoints = T, this.inversePoint = M, this.getInverseMatrix = w, this._t = this.transform, this.isIdentity = g, this._identity = !0, this._identityCalculated = !1, this.props = createTypedArray("float32", 16), this.reset()
            }
          }();

        function _typeof$3(t) {
          return _typeof$3 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
          } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
          }, _typeof$3(t)
        }
        var lottie = {},
          standalone = "__[STANDALONE]__",
          animationData = "__[ANIMATIONDATA]__",
          renderer = "";

        function setLocation(t) {
          setLocationHref(t)
        }

        function searchAnimations() {
          !0 === standalone ? animationManager.searchAnimations(animationData, standalone, renderer) : animationManager.searchAnimations()
        }

        function setSubframeRendering(t) {
          setSubframeEnabled(t)
        }

        function setPrefix(t) {
          setIdPrefix(t)
        }

        function loadAnimation(t) {
          return !0 === standalone && (t.animationData = JSON.parse(animationData)), animationManager.loadAnimation(t)
        }

        function setQuality(t) {
          if ("string" == typeof t) switch (t) {
            case "high":
              setDefaultCurveSegments(200);
              break;
            default:
            case "medium":
              setDefaultCurveSegments(50);
              break;
            case "low":
              setDefaultCurveSegments(10)
          } else !isNaN(t) && t > 1 && setDefaultCurveSegments(t);
          getDefaultCurveSegments() >= 50 ? roundValues(!1) : roundValues(!0)
        }

        function inBrowser() {
          return "undefined" != typeof navigator
        }

        function installPlugin(t, e) {
          "expressions" === t && setExpressionsPlugin(e)
        }

        function getFactory(t) {
          switch (t) {
            case "propertyFactory":
              return PropertyFactory;
            case "shapePropertyFactory":
              return ShapePropertyFactory;
            case "matrix":
              return Matrix;
            default:
              return null
          }
        }

        function checkReady() {
          "complete" === document.readyState && (clearInterval(readyStateCheckInterval), searchAnimations())
        }

        function getQueryVariable(t) {
          for (var e = queryString.split("&"), n = 0; n < e.length; n += 1) {
            var r = e[n].split("=");
            if (decodeURIComponent(r[0]) == t) return decodeURIComponent(r[1])
          }
          return null
        }
        lottie.play = animationManager.play, lottie.pause = animationManager.pause, lottie.setLocationHref = setLocation, lottie.togglePause = animationManager.togglePause, lottie.setSpeed = animationManager.setSpeed, lottie.setDirection = animationManager.setDirection, lottie.stop = animationManager.stop, lottie.searchAnimations = searchAnimations, lottie.registerAnimation = animationManager.registerAnimation, lottie.loadAnimation = loadAnimation, lottie.setSubframeRendering = setSubframeRendering, lottie.resize = animationManager.resize, lottie.goToAndStop = animationManager.goToAndStop, lottie.destroy = animationManager.destroy, lottie.setQuality = setQuality, lottie.inBrowser = inBrowser, lottie.installPlugin = installPlugin, lottie.freeze = animationManager.freeze, lottie.unfreeze = animationManager.unfreeze, lottie.setVolume = animationManager.setVolume, lottie.mute = animationManager.mute, lottie.unmute = animationManager.unmute, lottie.getRegisteredAnimations = animationManager.getRegisteredAnimations, lottie.useWebWorker = setWebWorker, lottie.setIDPrefix = setPrefix, lottie.__getFactory = getFactory, lottie.version = "5.12.2";
        var queryString = "";
        if (standalone) {
          var scripts = document.getElementsByTagName("script"),
            index = scripts.length - 1,
            myScript = scripts[index] || {
              src: ""
            };
          queryString = myScript.src ? myScript.src.replace(/^[^\?]+\??/, "") : "", renderer = getQueryVariable("renderer")
        }
        var readyStateCheckInterval = setInterval(checkReady, 100);
        try {
          "object" !== _typeof$3(exports) && __webpack_require__.amdO
        } catch (t) {}
        var ShapeModifiers = function() {
          var t = {},
            e = {};
          return t.registerModifier = function(t, n) {
            e[t] || (e[t] = n)
          }, t.getModifier = function(t, n, r) {
            return new e[t](n, r)
          }, t
        }();

        function ShapeModifier() {}

        function TrimModifier() {}

        function PuckerAndBloatModifier() {}
        ShapeModifier.prototype.initModifierProperties = function() {}, ShapeModifier.prototype.addShapeToModifier = function() {}, ShapeModifier.prototype.addShape = function(t) {
          if (!this.closed) {
            t.sh.container.addDynamicProperty(t.sh);
            var e = {
              shape: t.sh,
              data: t,
              localShapeCollection: shapeCollectionPool.newShapeCollection()
            };
            this.shapes.push(e), this.addShapeToModifier(e), this._isAnimated && t.setAsAnimated()
          }
        }, ShapeModifier.prototype.init = function(t, e) {
          this.shapes = [], this.elem = t, this.initDynamicPropertyContainer(t), this.initModifierProperties(t, e), this.frameId = initialDefaultFrame, this.closed = !1, this.k = !1, this.dynamicProperties.length ? this.k = !0 : this.getValue(!0)
        }, ShapeModifier.prototype.processKeys = function() {
          this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties())
        }, extendPrototype([DynamicPropertyContainer], ShapeModifier), extendPrototype([ShapeModifier], TrimModifier), TrimModifier.prototype.initModifierProperties = function(t, e) {
          this.s = PropertyFactory.getProp(t, e.s, 0, .01, this), this.e = PropertyFactory.getProp(t, e.e, 0, .01, this), this.o = PropertyFactory.getProp(t, e.o, 0, 0, this), this.sValue = 0, this.eValue = 0, this.getValue = this.processKeys, this.m = e.m, this._isAnimated = !!this.s.effectsSequence.length || !!this.e.effectsSequence.length || !!this.o.effectsSequence.length
        }, TrimModifier.prototype.addShapeToModifier = function(t) {
          t.pathsData = []
        }, TrimModifier.prototype.calculateShapeEdges = function(t, e, n, r, i) {
          var a = [];
          e <= 1 ? a.push({
            s: t,
            e
          }) : t >= 1 ? a.push({
            s: t - 1,
            e: e - 1
          }) : (a.push({
            s: t,
            e: 1
          }), a.push({
            s: 0,
            e: e - 1
          }));
          var s, o, l = [],
            u = a.length;
          for (s = 0; s < u; s += 1) {
            var h, c;
            (o = a[s]).e * i < r || o.s * i > r + n || (h = o.s * i <= r ? 0 : (o.s * i - r) / n, c = o.e * i >= r + n ? 1 : (o.e * i - r) / n, l.push([h, c]))
          }
          return l.length || l.push([0, 0]), l
        }, TrimModifier.prototype.releasePathsData = function(t) {
          var e, n = t.length;
          for (e = 0; e < n; e += 1) segmentsLengthPool.release(t[e]);
          return t.length = 0, t
        }, TrimModifier.prototype.processShapes = function(t) {
          var e, n, r, i;
          if (this._mdf || t) {
            var a = this.o.v % 360 / 360;
            if (a < 0 && (a += 1), (e = this.s.v > 1 ? 1 + a : this.s.v < 0 ? 0 + a : this.s.v + a) > (n = this.e.v > 1 ? 1 + a : this.e.v < 0 ? 0 + a : this.e.v + a)) {
              var s = e;
              e = n, n = s
            }
            e = 1e-4 * Math.round(1e4 * e), n = 1e-4 * Math.round(1e4 * n), this.sValue = e, this.eValue = n
          } else e = this.sValue, n = this.eValue;
          var o, l, u, h, c, p = this.shapes.length,
            f = 0;
          if (n === e)
            for (i = 0; i < p; i += 1) this.shapes[i].localShapeCollection.releaseShapes(), this.shapes[i].shape._mdf = !0, this.shapes[i].shape.paths = this.shapes[i].localShapeCollection, this._mdf && (this.shapes[i].pathsData.length = 0);
          else if (1 === n && 0 === e || 0 === n && 1 === e) {
            if (this._mdf)
              for (i = 0; i < p; i += 1) this.shapes[i].pathsData.length = 0, this.shapes[i].shape._mdf = !0
          } else {
            var d, m, v = [];
            for (i = 0; i < p; i += 1)
              if ((d = this.shapes[i]).shape._mdf || this._mdf || t || 2 === this.m) {
                if (l = (r = d.shape.paths)._length, c = 0, !d.shape._mdf && d.pathsData.length) c = d.totalShapeLength;
                else {
                  for (u = this.releasePathsData(d.pathsData), o = 0; o < l; o += 1) h = bez.getSegmentsLength(r.shapes[o]), u.push(h), c += h.totalLength;
                  d.totalShapeLength = c, d.pathsData = u
                }
                f += c, d.shape._mdf = !0
              } else d.shape.paths = d.localShapeCollection;
            var g, y = e,
              b = n,
              x = 0;
            for (i = p - 1; i >= 0; i -= 1)
              if ((d = this.shapes[i]).shape._mdf) {
                for ((m = d.localShapeCollection).releaseShapes(), 2 === this.m && p > 1 ? (g = this.calculateShapeEdges(e, n, d.totalShapeLength, x, f), x += d.totalShapeLength) : g = [
                    [y, b]
                  ], l = g.length, o = 0; o < l; o += 1) {
                  y = g[o][0], b = g[o][1], v.length = 0, b <= 1 ? v.push({
                    s: d.totalShapeLength * y,
                    e: d.totalShapeLength * b
                  }) : y >= 1 ? v.push({
                    s: d.totalShapeLength * (y - 1),
                    e: d.totalShapeLength * (b - 1)
                  }) : (v.push({
                    s: d.totalShapeLength * y,
                    e: d.totalShapeLength
                  }), v.push({
                    s: 0,
                    e: d.totalShapeLength * (b - 1)
                  }));
                  var S = this.addShapes(d, v[0]);
                  if (v[0].s !== v[0].e) {
                    if (v.length > 1)
                      if (d.shape.paths.shapes[d.shape.paths._length - 1].c) {
                        var E = S.pop();
                        this.addPaths(S, m), S = this.addShapes(d, v[1], E)
                      } else this.addPaths(S, m), S = this.addShapes(d, v[1]);
                    this.addPaths(S, m)
                  }
                }
                d.shape.paths = m
              }
          }
        }, TrimModifier.prototype.addPaths = function(t, e) {
          var n, r = t.length;
          for (n = 0; n < r; n += 1) e.addShape(t[n])
        }, TrimModifier.prototype.addSegment = function(t, e, n, r, i, a, s) {
          i.setXYAt(e[0], e[1], "o", a), i.setXYAt(n[0], n[1], "i", a + 1), s && i.setXYAt(t[0], t[1], "v", a), i.setXYAt(r[0], r[1], "v", a + 1)
        }, TrimModifier.prototype.addSegmentFromArray = function(t, e, n, r) {
          e.setXYAt(t[1], t[5], "o", n), e.setXYAt(t[2], t[6], "i", n + 1), r && e.setXYAt(t[0], t[4], "v", n), e.setXYAt(t[3], t[7], "v", n + 1)
        }, TrimModifier.prototype.addShapes = function(t, e, n) {
          var r, i, a, s, o, l, u, h, c = t.pathsData,
            p = t.shape.paths.shapes,
            f = t.shape.paths._length,
            d = 0,
            m = [],
            v = !0;
          for (n ? (o = n._length, h = n._length) : (n = shapePool.newElement(), o = 0, h = 0), m.push(n), r = 0; r < f; r += 1) {
            for (l = c[r].lengths, n.c = p[r].c, a = p[r].c ? l.length : l.length + 1, i = 1; i < a; i += 1)
              if (d + (s = l[i - 1]).addedLength < e.s) d += s.addedLength, n.c = !1;
              else {
                if (d > e.e) {
                  n.c = !1;
                  break
                }
                e.s <= d && e.e >= d + s.addedLength ? (this.addSegment(p[r].v[i - 1], p[r].o[i - 1], p[r].i[i], p[r].v[i], n, o, v), v = !1) : (u = bez.getNewSegment(p[r].v[i - 1], p[r].v[i], p[r].o[i - 1], p[r].i[i], (e.s - d) / s.addedLength, (e.e - d) / s.addedLength, l[i - 1]), this.addSegmentFromArray(u, n, o, v), v = !1, n.c = !1), d += s.addedLength, o += 1
              } if (p[r].c && l.length) {
              if (s = l[i - 1], d <= e.e) {
                var g = l[i - 1].addedLength;
                e.s <= d && e.e >= d + g ? (this.addSegment(p[r].v[i - 1], p[r].o[i - 1], p[r].i[0], p[r].v[0], n, o, v), v = !1) : (u = bez.getNewSegment(p[r].v[i - 1], p[r].v[0], p[r].o[i - 1], p[r].i[0], (e.s - d) / g, (e.e - d) / g, l[i - 1]), this.addSegmentFromArray(u, n, o, v), v = !1, n.c = !1)
              } else n.c = !1;
              d += s.addedLength, o += 1
            }
            if (n._length && (n.setXYAt(n.v[h][0], n.v[h][1], "i", h), n.setXYAt(n.v[n._length - 1][0], n.v[n._length - 1][1], "o", n._length - 1)), d > e.e) break;
            r < f - 1 && (n = shapePool.newElement(), v = !0, m.push(n), o = 0)
          }
          return m
        }, extendPrototype([ShapeModifier], PuckerAndBloatModifier), PuckerAndBloatModifier.prototype.initModifierProperties = function(t, e) {
          this.getValue = this.processKeys, this.amount = PropertyFactory.getProp(t, e.a, 0, null, this), this._isAnimated = !!this.amount.effectsSequence.length
        }, PuckerAndBloatModifier.prototype.processPath = function(t, e) {
          var n = e / 100,
            r = [0, 0],
            i = t._length,
            a = 0;
          for (a = 0; a < i; a += 1) r[0] += t.v[a][0], r[1] += t.v[a][1];
          r[0] /= i, r[1] /= i;
          var s, o, l, u, h, c, p = shapePool.newElement();
          for (p.c = t.c, a = 0; a < i; a += 1) s = t.v[a][0] + (r[0] - t.v[a][0]) * n, o = t.v[a][1] + (r[1] - t.v[a][1]) * n, l = t.o[a][0] + (r[0] - t.o[a][0]) * -n, u = t.o[a][1] + (r[1] - t.o[a][1]) * -n, h = t.i[a][0] + (r[0] - t.i[a][0]) * -n, c = t.i[a][1] + (r[1] - t.i[a][1]) * -n, p.setTripleAt(s, o, l, u, h, c, a);
          return p
        }, PuckerAndBloatModifier.prototype.processShapes = function(t) {
          var e, n, r, i, a, s, o = this.shapes.length,
            l = this.amount.v;
          if (0 !== l)
            for (n = 0; n < o; n += 1) {
              if (s = (a = this.shapes[n]).localShapeCollection, a.shape._mdf || this._mdf || t)
                for (s.releaseShapes(), a.shape._mdf = !0, e = a.shape.paths.shapes, i = a.shape.paths._length, r = 0; r < i; r += 1) s.addShape(this.processPath(e[r], l));
              a.shape.paths = a.localShapeCollection
            }
          this.dynamicProperties.length || (this._mdf = !1)
        };
        var TransformPropertyFactory = function() {
          var t = [0, 0];

          function e(t, e, n) {
            if (this.elem = t, this.frameId = -1, this.propType = "transform", this.data = e, this.v = new Matrix, this.pre = new Matrix, this.appliedTransformations = 0, this.initDynamicPropertyContainer(n || t), e.p && e.p.s ? (this.px = PropertyFactory.getProp(t, e.p.x, 0, 0, this), this.py = PropertyFactory.getProp(t, e.p.y, 0, 0, this), e.p.z && (this.pz = PropertyFactory.getProp(t, e.p.z, 0, 0, this))) : this.p = PropertyFactory.getProp(t, e.p || {
                k: [0, 0, 0]
              }, 1, 0, this), e.rx) {
              if (this.rx = PropertyFactory.getProp(t, e.rx, 0, degToRads, this), this.ry = PropertyFactory.getProp(t, e.ry, 0, degToRads, this), this.rz = PropertyFactory.getProp(t, e.rz, 0, degToRads, this), e.or.k[0].ti) {
                var r, i = e.or.k.length;
                for (r = 0; r < i; r += 1) e.or.k[r].to = null, e.or.k[r].ti = null
              }
              this.or = PropertyFactory.getProp(t, e.or, 1, degToRads, this), this.or.sh = !0
            } else this.r = PropertyFactory.getProp(t, e.r || {
              k: 0
            }, 0, degToRads, this);
            e.sk && (this.sk = PropertyFactory.getProp(t, e.sk, 0, degToRads, this), this.sa = PropertyFactory.getProp(t, e.sa, 0, degToRads, this)), this.a = PropertyFactory.getProp(t, e.a || {
              k: [0, 0, 0]
            }, 1, 0, this), this.s = PropertyFactory.getProp(t, e.s || {
              k: [100, 100, 100]
            }, 1, .01, this), e.o ? this.o = PropertyFactory.getProp(t, e.o, 0, .01, t) : this.o = {
              _mdf: !1,
              v: 1
            }, this._isDirty = !0, this.dynamicProperties.length || this.getValue(!0)
          }
          return e.prototype = {
            applyToMatrix: function(t) {
              var e = this._mdf;
              this.iterateDynamicProperties(), this._mdf = this._mdf || e, this.a && t.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.s && t.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.sk && t.skewFromAxis(-this.sk.v, this.sa.v), this.r ? t.rotate(-this.r.v) : t.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.data.p.s ? this.data.p.z ? t.translate(this.px.v, this.py.v, -this.pz.v) : t.translate(this.px.v, this.py.v, 0) : t.translate(this.p.v[0], this.p.v[1], -this.p.v[2])
            },
            getValue: function(e) {
              if (this.elem.globalData.frameId !== this.frameId) {
                if (this._isDirty && (this.precalculateMatrix(), this._isDirty = !1), this.iterateDynamicProperties(), this._mdf || e) {
                  var n;
                  if (this.v.cloneFromProps(this.pre.props), this.appliedTransformations < 1 && this.v.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.appliedTransformations < 2 && this.v.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.sk && this.appliedTransformations < 3 && this.v.skewFromAxis(-this.sk.v, this.sa.v), this.r && this.appliedTransformations < 4 ? this.v.rotate(-this.r.v) : !this.r && this.appliedTransformations < 4 && this.v.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.autoOriented) {
                    var r, i;
                    if (n = this.elem.globalData.frameRate, this.p && this.p.keyframes && this.p.getValueAtTime) this.p._caching.lastFrame + this.p.offsetTime <= this.p.keyframes[0].t ? (r = this.p.getValueAtTime((this.p.keyframes[0].t + .01) / n, 0), i = this.p.getValueAtTime(this.p.keyframes[0].t / n, 0)) : this.p._caching.lastFrame + this.p.offsetTime >= this.p.keyframes[this.p.keyframes.length - 1].t ? (r = this.p.getValueAtTime(this.p.keyframes[this.p.keyframes.length - 1].t / n, 0), i = this.p.getValueAtTime((this.p.keyframes[this.p.keyframes.length - 1].t - .05) / n, 0)) : (r = this.p.pv, i = this.p.getValueAtTime((this.p._caching.lastFrame + this.p.offsetTime - .01) / n, this.p.offsetTime));
                    else if (this.px && this.px.keyframes && this.py.keyframes && this.px.getValueAtTime && this.py.getValueAtTime) {
                      r = [], i = [];
                      var a = this.px,
                        s = this.py;
                      a._caching.lastFrame + a.offsetTime <= a.keyframes[0].t ? (r[0] = a.getValueAtTime((a.keyframes[0].t + .01) / n, 0), r[1] = s.getValueAtTime((s.keyframes[0].t + .01) / n, 0), i[0] = a.getValueAtTime(a.keyframes[0].t / n, 0), i[1] = s.getValueAtTime(s.keyframes[0].t / n, 0)) : a._caching.lastFrame + a.offsetTime >= a.keyframes[a.keyframes.length - 1].t ? (r[0] = a.getValueAtTime(a.keyframes[a.keyframes.length - 1].t / n, 0), r[1] = s.getValueAtTime(s.keyframes[s.keyframes.length - 1].t / n, 0), i[0] = a.getValueAtTime((a.keyframes[a.keyframes.length - 1].t - .01) / n, 0), i[1] = s.getValueAtTime((s.keyframes[s.keyframes.length - 1].t - .01) / n, 0)) : (r = [a.pv, s.pv], i[0] = a.getValueAtTime((a._caching.lastFrame + a.offsetTime - .01) / n, a.offsetTime), i[1] = s.getValueAtTime((s._caching.lastFrame + s.offsetTime - .01) / n, s.offsetTime))
                    } else r = i = t;
                    this.v.rotate(-Math.atan2(r[1] - i[1], r[0] - i[0]))
                  }
                  this.data.p && this.data.p.s ? this.data.p.z ? this.v.translate(this.px.v, this.py.v, -this.pz.v) : this.v.translate(this.px.v, this.py.v, 0) : this.v.translate(this.p.v[0], this.p.v[1], -this.p.v[2])
                }
                this.frameId = this.elem.globalData.frameId
              }
            },
            precalculateMatrix: function() {
              if (this.appliedTransformations = 0, this.pre.reset(), !this.a.effectsSequence.length && (this.pre.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.appliedTransformations = 1, !this.s.effectsSequence.length)) {
                if (this.pre.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.appliedTransformations = 2, this.sk) {
                  if (this.sk.effectsSequence.length || this.sa.effectsSequence.length) return;
                  this.pre.skewFromAxis(-this.sk.v, this.sa.v), this.appliedTransformations = 3
                }
                this.r ? this.r.effectsSequence.length || (this.pre.rotate(-this.r.v), this.appliedTransformations = 4) : this.rz.effectsSequence.length || this.ry.effectsSequence.length || this.rx.effectsSequence.length || this.or.effectsSequence.length || (this.pre.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.appliedTransformations = 4)
              }
            },
            autoOrient: function() {}
          }, extendPrototype([DynamicPropertyContainer], e), e.prototype.addDynamicProperty = function(t) {
            this._addDynamicProperty(t), this.elem.addDynamicProperty(t), this._isDirty = !0
          }, e.prototype._addDynamicProperty = DynamicPropertyContainer.prototype.addDynamicProperty, {
            getTransformProperty: function(t, n, r) {
              return new e(t, n, r)
            }
          }
        }();

        function RepeaterModifier() {}

        function RoundCornersModifier() {}

        function floatEqual(t, e) {
          return 1e5 * Math.abs(t - e) <= Math.min(Math.abs(t), Math.abs(e))
        }

        function floatZero(t) {
          return Math.abs(t) <= 1e-5
        }

        function lerp(t, e, n) {
          return t * (1 - n) + e * n
        }

        function lerpPoint(t, e, n) {
          return [lerp(t[0], e[0], n), lerp(t[1], e[1], n)]
        }

        function quadRoots(t, e, n) {
          if (0 === t) return [];
          var r = e * e - 4 * t * n;
          if (r < 0) return [];
          var i = -e / (2 * t);
          if (0 === r) return [i];
          var a = Math.sqrt(r) / (2 * t);
          return [i - a, i + a]
        }

        function polynomialCoefficients(t, e, n, r) {
          return [3 * e - t - 3 * n + r, 3 * t - 6 * e + 3 * n, -3 * t + 3 * e, t]
        }

        function singlePoint(t) {
          return new PolynomialBezier(t, t, t, t, !1)
        }

        function PolynomialBezier(t, e, n, r, i) {
          i && pointEqual(t, e) && (e = lerpPoint(t, r, 1 / 3)), i && pointEqual(n, r) && (n = lerpPoint(t, r, 2 / 3));
          var a = polynomialCoefficients(t[0], e[0], n[0], r[0]),
            s = polynomialCoefficients(t[1], e[1], n[1], r[1]);
          this.a = [a[0], s[0]], this.b = [a[1], s[1]], this.c = [a[2], s[2]], this.d = [a[3], s[3]], this.points = [t, e, n, r]
        }

        function extrema(t, e) {
          var n = t.points[0][e],
            r = t.points[t.points.length - 1][e];
          if (n > r) {
            var i = r;
            r = n, n = i
          }
          for (var a = quadRoots(3 * t.a[e], 2 * t.b[e], t.c[e]), s = 0; s < a.length; s += 1)
            if (a[s] > 0 && a[s] < 1) {
              var o = t.point(a[s])[e];
              o < n ? n = o : o > r && (r = o)
            } return {
            min: n,
            max: r
          }
        }

        function intersectData(t, e, n) {
          var r = t.boundingBox();
          return {
            cx: r.cx,
            cy: r.cy,
            width: r.width,
            height: r.height,
            bez: t,
            t: (e + n) / 2,
            t1: e,
            t2: n
          }
        }

        function splitData(t) {
          var e = t.bez.split(.5);
          return [intersectData(e[0], t.t1, t.t), intersectData(e[1], t.t, t.t2)]
        }

        function boxIntersect(t, e) {
          return 2 * Math.abs(t.cx - e.cx) < t.width + e.width && 2 * Math.abs(t.cy - e.cy) < t.height + e.height
        }

        function intersectsImpl(t, e, n, r, i, a) {
          if (boxIntersect(t, e))
            if (n >= a || t.width <= r && t.height <= r && e.width <= r && e.height <= r) i.push([t.t, e.t]);
            else {
              var s = splitData(t),
                o = splitData(e);
              intersectsImpl(s[0], o[0], n + 1, r, i, a), intersectsImpl(s[0], o[1], n + 1, r, i, a), intersectsImpl(s[1], o[0], n + 1, r, i, a), intersectsImpl(s[1], o[1], n + 1, r, i, a)
            }
        }

        function crossProduct(t, e) {
          return [t[1] * e[2] - t[2] * e[1], t[2] * e[0] - t[0] * e[2], t[0] * e[1] - t[1] * e[0]]
        }

        function lineIntersection(t, e, n, r) {
          var i = [t[0], t[1], 1],
            a = [e[0], e[1], 1],
            s = [n[0], n[1], 1],
            o = [r[0], r[1], 1],
            l = crossProduct(crossProduct(i, a), crossProduct(s, o));
          return floatZero(l[2]) ? null : [l[0] / l[2], l[1] / l[2]]
        }

        function polarOffset(t, e, n) {
          return [t[0] + Math.cos(e) * n, t[1] - Math.sin(e) * n]
        }

        function pointDistance(t, e) {
          return Math.hypot(t[0] - e[0], t[1] - e[1])
        }

        function pointEqual(t, e) {
          return floatEqual(t[0], e[0]) && floatEqual(t[1], e[1])
        }

        function ZigZagModifier() {}

        function setPoint(t, e, n, r, i, a, s) {
          var o = n - Math.PI / 2,
            l = n + Math.PI / 2,
            u = e[0] + Math.cos(n) * r * i,
            h = e[1] - Math.sin(n) * r * i;
          t.setTripleAt(u, h, u + Math.cos(o) * a, h - Math.sin(o) * a, u + Math.cos(l) * s, h - Math.sin(l) * s, t.length())
        }

        function getPerpendicularVector(t, e) {
          var n = [e[0] - t[0], e[1] - t[1]],
            r = .5 * -Math.PI;
          return [Math.cos(r) * n[0] - Math.sin(r) * n[1], Math.sin(r) * n[0] + Math.cos(r) * n[1]]
        }

        function getProjectingAngle(t, e) {
          var n = 0 === e ? t.length() - 1 : e - 1,
            r = (e + 1) % t.length(),
            i = getPerpendicularVector(t.v[n], t.v[r]);
          return Math.atan2(0, 1) - Math.atan2(i[1], i[0])
        }

        function zigZagCorner(t, e, n, r, i, a, s) {
          var o = getProjectingAngle(e, n),
            l = e.v[n % e._length],
            u = e.v[0 === n ? e._length - 1 : n - 1],
            h = e.v[(n + 1) % e._length],
            c = 2 === a ? Math.sqrt(Math.pow(l[0] - u[0], 2) + Math.pow(l[1] - u[1], 2)) : 0,
            p = 2 === a ? Math.sqrt(Math.pow(l[0] - h[0], 2) + Math.pow(l[1] - h[1], 2)) : 0;
          setPoint(t, e.v[n % e._length], o, s, r, p / (2 * (i + 1)), c / (2 * (i + 1)), a)
        }

        function zigZagSegment(t, e, n, r, i, a) {
          for (var s = 0; s < r; s += 1) {
            var o = (s + 1) / (r + 1),
              l = 2 === i ? Math.sqrt(Math.pow(e.points[3][0] - e.points[0][0], 2) + Math.pow(e.points[3][1] - e.points[0][1], 2)) : 0,
              u = e.normalAngle(o);
            setPoint(t, e.point(o), u, a, n, l / (2 * (r + 1)), l / (2 * (r + 1)), i), a = -a
          }
          return a
        }

        function linearOffset(t, e, n) {
          var r = Math.atan2(e[0] - t[0], e[1] - t[1]);
          return [polarOffset(t, r, n), polarOffset(e, r, n)]
        }

        function offsetSegment(t, e) {
          var n, r, i, a, s, o, l;
          n = (l = linearOffset(t.points[0], t.points[1], e))[0], r = l[1], i = (l = linearOffset(t.points[1], t.points[2], e))[0], a = l[1], s = (l = linearOffset(t.points[2], t.points[3], e))[0], o = l[1];
          var u = lineIntersection(n, r, i, a);
          null === u && (u = r);
          var h = lineIntersection(s, o, i, a);
          return null === h && (h = s), new PolynomialBezier(n, u, h, o)
        }

        function joinLines(t, e, n, r, i) {
          var a = e.points[3],
            s = n.points[0];
          if (3 === r) return a;
          if (pointEqual(a, s)) return a;
          if (2 === r) {
            var o = -e.tangentAngle(1),
              l = -n.tangentAngle(0) + Math.PI,
              u = lineIntersection(a, polarOffset(a, o + Math.PI / 2, 100), s, polarOffset(s, o + Math.PI / 2, 100)),
              h = u ? pointDistance(u, a) : pointDistance(a, s) / 2,
              c = polarOffset(a, o, 2 * h * roundCorner);
            return t.setXYAt(c[0], c[1], "o", t.length() - 1), c = polarOffset(s, l, 2 * h * roundCorner), t.setTripleAt(s[0], s[1], s[0], s[1], c[0], c[1], t.length()), s
          }
          var p = lineIntersection(pointEqual(a, e.points[2]) ? e.points[0] : e.points[2], a, s, pointEqual(s, n.points[1]) ? n.points[3] : n.points[1]);
          return p && pointDistance(p, a) < i ? (t.setTripleAt(p[0], p[1], p[0], p[1], p[0], p[1], t.length()), p) : a
        }

        function getIntersection(t, e) {
          var n = t.intersections(e);
          return n.length && floatEqual(n[0][0], 1) && n.shift(), n.length ? n[0] : null
        }

        function pruneSegmentIntersection(t, e) {
          var n = t.slice(),
            r = e.slice(),
            i = getIntersection(t[t.length - 1], e[0]);
          return i && (n[t.length - 1] = t[t.length - 1].split(i[0])[0], r[0] = e[0].split(i[1])[1]), t.length > 1 && e.length > 1 && (i = getIntersection(t[0], e[e.length - 1])) ? [
            [t[0].split(i[0])[0]],
            [e[e.length - 1].split(i[1])[1]]
          ] : [n, r]
        }

        function pruneIntersections(t) {
          for (var e, n = 1; n < t.length; n += 1) e = pruneSegmentIntersection(t[n - 1], t[n]), t[n - 1] = e[0], t[n] = e[1];
          return t.length > 1 && (e = pruneSegmentIntersection(t[t.length - 1], t[0]), t[t.length - 1] = e[0], t[0] = e[1]), t
        }

        function offsetSegmentSplit(t, e) {
          var n, r, i, a, s = t.inflectionPoints();
          if (0 === s.length) return [offsetSegment(t, e)];
          if (1 === s.length || floatEqual(s[1], 1)) return n = (i = t.split(s[0]))[0], r = i[1], [offsetSegment(n, e), offsetSegment(r, e)];
          n = (i = t.split(s[0]))[0];
          var o = (s[1] - s[0]) / (1 - s[0]);
          return a = (i = i[1].split(o))[0], r = i[1], [offsetSegment(n, e), offsetSegment(a, e), offsetSegment(r, e)]
        }

        function OffsetPathModifier() {}

        function getFontProperties(t) {
          for (var e = t.fStyle ? t.fStyle.split(" ") : [], n = "normal", r = "normal", i = e.length, a = 0; a < i; a += 1) switch (e[a].toLowerCase()) {
            case "italic":
              r = "italic";
              break;
            case "bold":
              n = "700";
              break;
            case "black":
              n = "900";
              break;
            case "medium":
              n = "500";
              break;
            case "regular":
            case "normal":
              n = "400";
              break;
            case "light":
            case "thin":
              n = "200"
          }
          return {
            style: r,
            weight: t.fWeight || n
          }
        }
        extendPrototype([ShapeModifier], RepeaterModifier), RepeaterModifier.prototype.initModifierProperties = function(t, e) {
          this.getValue = this.processKeys, this.c = PropertyFactory.getProp(t, e.c, 0, null, this), this.o = PropertyFactory.getProp(t, e.o, 0, null, this), this.tr = TransformPropertyFactory.getTransformProperty(t, e.tr, this), this.so = PropertyFactory.getProp(t, e.tr.so, 0, .01, this), this.eo = PropertyFactory.getProp(t, e.tr.eo, 0, .01, this), this.data = e, this.dynamicProperties.length || this.getValue(!0), this._isAnimated = !!this.dynamicProperties.length, this.pMatrix = new Matrix, this.rMatrix = new Matrix, this.sMatrix = new Matrix, this.tMatrix = new Matrix, this.matrix = new Matrix
        }, RepeaterModifier.prototype.applyTransforms = function(t, e, n, r, i, a) {
          var s = a ? -1 : 1,
            o = r.s.v[0] + (1 - r.s.v[0]) * (1 - i),
            l = r.s.v[1] + (1 - r.s.v[1]) * (1 - i);
          t.translate(r.p.v[0] * s * i, r.p.v[1] * s * i, r.p.v[2]), e.translate(-r.a.v[0], -r.a.v[1], r.a.v[2]), e.rotate(-r.r.v * s * i), e.translate(r.a.v[0], r.a.v[1], r.a.v[2]), n.translate(-r.a.v[0], -r.a.v[1], r.a.v[2]), n.scale(a ? 1 / o : o, a ? 1 / l : l), n.translate(r.a.v[0], r.a.v[1], r.a.v[2])
        }, RepeaterModifier.prototype.init = function(t, e, n, r) {
          for (this.elem = t, this.arr = e, this.pos = n, this.elemsData = r, this._currentCopies = 0, this._elements = [], this._groups = [], this.frameId = -1, this.initDynamicPropertyContainer(t), this.initModifierProperties(t, e[n]); n > 0;) n -= 1, this._elements.unshift(e[n]);
          this.dynamicProperties.length ? this.k = !0 : this.getValue(!0)
        }, RepeaterModifier.prototype.resetElements = function(t) {
          var e, n = t.length;
          for (e = 0; e < n; e += 1) t[e]._processed = !1, "gr" === t[e].ty && this.resetElements(t[e].it)
        }, RepeaterModifier.prototype.cloneElements = function(t) {
          var e = JSON.parse(JSON.stringify(t));
          return this.resetElements(e), e
        }, RepeaterModifier.prototype.changeGroupRender = function(t, e) {
          var n, r = t.length;
          for (n = 0; n < r; n += 1) t[n]._render = e, "gr" === t[n].ty && this.changeGroupRender(t[n].it, e)
        }, RepeaterModifier.prototype.processShapes = function(t) {
          var e, n, r, i, a, s = !1;
          if (this._mdf || t) {
            var o, l = Math.ceil(this.c.v);
            if (this._groups.length < l) {
              for (; this._groups.length < l;) {
                var u = {
                  it: this.cloneElements(this._elements),
                  ty: "gr"
                };
                u.it.push({
                  a: {
                    a: 0,
                    ix: 1,
                    k: [0, 0]
                  },
                  nm: "Transform",
                  o: {
                    a: 0,
                    ix: 7,
                    k: 100
                  },
                  p: {
                    a: 0,
                    ix: 2,
                    k: [0, 0]
                  },
                  r: {
                    a: 1,
                    ix: 6,
                    k: [{
                      s: 0,
                      e: 0,
                      t: 0
                    }, {
                      s: 0,
                      e: 0,
                      t: 1
                    }]
                  },
                  s: {
                    a: 0,
                    ix: 3,
                    k: [100, 100]
                  },
                  sa: {
                    a: 0,
                    ix: 5,
                    k: 0
                  },
                  sk: {
                    a: 0,
                    ix: 4,
                    k: 0
                  },
                  ty: "tr"
                }), this.arr.splice(0, 0, u), this._groups.splice(0, 0, u), this._currentCopies += 1
              }
              this.elem.reloadShapes(), s = !0
            }
            for (a = 0, r = 0; r <= this._groups.length - 1; r += 1) {
              if (o = a < l, this._groups[r]._render = o, this.changeGroupRender(this._groups[r].it, o), !o) {
                var h = this.elemsData[r].it,
                  c = h[h.length - 1];
                0 !== c.transform.op.v ? (c.transform.op._mdf = !0, c.transform.op.v = 0) : c.transform.op._mdf = !1
              }
              a += 1
            }
            this._currentCopies = l;
            var p = this.o.v,
              f = p % 1,
              d = p > 0 ? Math.floor(p) : Math.ceil(p),
              m = this.pMatrix.props,
              v = this.rMatrix.props,
              g = this.sMatrix.props;
            this.pMatrix.reset(), this.rMatrix.reset(), this.sMatrix.reset(), this.tMatrix.reset(), this.matrix.reset();
            var y, b, x = 0;
            if (p > 0) {
              for (; x < d;) this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !1), x += 1;
              f && (this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, f, !1), x += f)
            } else if (p < 0) {
              for (; x > d;) this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !0), x -= 1;
              f && (this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, -f, !0), x -= f)
            }
            for (r = 1 === this.data.m ? 0 : this._currentCopies - 1, i = 1 === this.data.m ? 1 : -1, a = this._currentCopies; a;) {
              if (b = (n = (e = this.elemsData[r].it)[e.length - 1].transform.mProps.v.props).length, e[e.length - 1].transform.mProps._mdf = !0, e[e.length - 1].transform.op._mdf = !0, e[e.length - 1].transform.op.v = 1 === this._currentCopies ? this.so.v : this.so.v + (this.eo.v - this.so.v) * (r / (this._currentCopies - 1)), 0 !== x) {
                for ((0 !== r && 1 === i || r !== this._currentCopies - 1 && -1 === i) && this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !1), this.matrix.transform(v[0], v[1], v[2], v[3], v[4], v[5], v[6], v[7], v[8], v[9], v[10], v[11], v[12], v[13], v[14], v[15]), this.matrix.transform(g[0], g[1], g[2], g[3], g[4], g[5], g[6], g[7], g[8], g[9], g[10], g[11], g[12], g[13], g[14], g[15]), this.matrix.transform(m[0], m[1], m[2], m[3], m[4], m[5], m[6], m[7], m[8], m[9], m[10], m[11], m[12], m[13], m[14], m[15]), y = 0; y < b; y += 1) n[y] = this.matrix.props[y];
                this.matrix.reset()
              } else
                for (this.matrix.reset(), y = 0; y < b; y += 1) n[y] = this.matrix.props[y];
              x += 1, a -= 1, r += i
            }
          } else
            for (a = this._currentCopies, r = 0, i = 1; a;) n = (e = this.elemsData[r].it)[e.length - 1].transform.mProps.v.props, e[e.length - 1].transform.mProps._mdf = !1, e[e.length - 1].transform.op._mdf = !1, a -= 1, r += i;
          return s
        }, RepeaterModifier.prototype.addShape = function() {}, extendPrototype([ShapeModifier], RoundCornersModifier), RoundCornersModifier.prototype.initModifierProperties = function(t, e) {
          this.getValue = this.processKeys, this.rd = PropertyFactory.getProp(t, e.r, 0, null, this), this._isAnimated = !!this.rd.effectsSequence.length
        }, RoundCornersModifier.prototype.processPath = function(t, e) {
          var n, r = shapePool.newElement();
          r.c = t.c;
          var i, a, s, o, l, u, h, c, p, f, d, m, v = t._length,
            g = 0;
          for (n = 0; n < v; n += 1) i = t.v[n], s = t.o[n], a = t.i[n], i[0] === s[0] && i[1] === s[1] && i[0] === a[0] && i[1] === a[1] ? 0 !== n && n !== v - 1 || t.c ? (o = 0 === n ? t.v[v - 1] : t.v[n - 1], u = (l = Math.sqrt(Math.pow(i[0] - o[0], 2) + Math.pow(i[1] - o[1], 2))) ? Math.min(l / 2, e) / l : 0, h = d = i[0] + (o[0] - i[0]) * u, c = m = i[1] - (i[1] - o[1]) * u, p = h - (h - i[0]) * roundCorner, f = c - (c - i[1]) * roundCorner, r.setTripleAt(h, c, p, f, d, m, g), g += 1, o = n === v - 1 ? t.v[0] : t.v[n + 1], u = (l = Math.sqrt(Math.pow(i[0] - o[0], 2) + Math.pow(i[1] - o[1], 2))) ? Math.min(l / 2, e) / l : 0, h = p = i[0] + (o[0] - i[0]) * u, c = f = i[1] + (o[1] - i[1]) * u, d = h - (h - i[0]) * roundCorner, m = c - (c - i[1]) * roundCorner, r.setTripleAt(h, c, p, f, d, m, g), g += 1) : (r.setTripleAt(i[0], i[1], s[0], s[1], a[0], a[1], g), g += 1) : (r.setTripleAt(t.v[n][0], t.v[n][1], t.o[n][0], t.o[n][1], t.i[n][0], t.i[n][1], g), g += 1);
          return r
        }, RoundCornersModifier.prototype.processShapes = function(t) {
          var e, n, r, i, a, s, o = this.shapes.length,
            l = this.rd.v;
          if (0 !== l)
            for (n = 0; n < o; n += 1) {
              if (s = (a = this.shapes[n]).localShapeCollection, a.shape._mdf || this._mdf || t)
                for (s.releaseShapes(), a.shape._mdf = !0, e = a.shape.paths.shapes, i = a.shape.paths._length, r = 0; r < i; r += 1) s.addShape(this.processPath(e[r], l));
              a.shape.paths = a.localShapeCollection
            }
          this.dynamicProperties.length || (this._mdf = !1)
        }, PolynomialBezier.prototype.point = function(t) {
          return [((this.a[0] * t + this.b[0]) * t + this.c[0]) * t + this.d[0], ((this.a[1] * t + this.b[1]) * t + this.c[1]) * t + this.d[1]]
        }, PolynomialBezier.prototype.derivative = function(t) {
          return [(3 * t * this.a[0] + 2 * this.b[0]) * t + this.c[0], (3 * t * this.a[1] + 2 * this.b[1]) * t + this.c[1]]
        }, PolynomialBezier.prototype.tangentAngle = function(t) {
          var e = this.derivative(t);
          return Math.atan2(e[1], e[0])
        }, PolynomialBezier.prototype.normalAngle = function(t) {
          var e = this.derivative(t);
          return Math.atan2(e[0], e[1])
        }, PolynomialBezier.prototype.inflectionPoints = function() {
          var t = this.a[1] * this.b[0] - this.a[0] * this.b[1];
          if (floatZero(t)) return [];
          var e = -.5 * (this.a[1] * this.c[0] - this.a[0] * this.c[1]) / t,
            n = e * e - 1 / 3 * (this.b[1] * this.c[0] - this.b[0] * this.c[1]) / t;
          if (n < 0) return [];
          var r = Math.sqrt(n);
          return floatZero(r) ? r > 0 && r < 1 ? [e] : [] : [e - r, e + r].filter((function(t) {
            return t > 0 && t < 1
          }))
        }, PolynomialBezier.prototype.split = function(t) {
          if (t <= 0) return [singlePoint(this.points[0]), this];
          if (t >= 1) return [this, singlePoint(this.points[this.points.length - 1])];
          var e = lerpPoint(this.points[0], this.points[1], t),
            n = lerpPoint(this.points[1], this.points[2], t),
            r = lerpPoint(this.points[2], this.points[3], t),
            i = lerpPoint(e, n, t),
            a = lerpPoint(n, r, t),
            s = lerpPoint(i, a, t);
          return [new PolynomialBezier(this.points[0], e, i, s, !0), new PolynomialBezier(s, a, r, this.points[3], !0)]
        }, PolynomialBezier.prototype.bounds = function() {
          return {
            x: extrema(this, 0),
            y: extrema(this, 1)
          }
        }, PolynomialBezier.prototype.boundingBox = function() {
          var t = this.bounds();
          return {
            left: t.x.min,
            right: t.x.max,
            top: t.y.min,
            bottom: t.y.max,
            width: t.x.max - t.x.min,
            height: t.y.max - t.y.min,
            cx: (t.x.max + t.x.min) / 2,
            cy: (t.y.max + t.y.min) / 2
          }
        }, PolynomialBezier.prototype.intersections = function(t, e, n) {
          void 0 === e && (e = 2), void 0 === n && (n = 7);
          var r = [];
          return intersectsImpl(intersectData(this, 0, 1), intersectData(t, 0, 1), 0, e, r, n), r
        }, PolynomialBezier.shapeSegment = function(t, e) {
          var n = (e + 1) % t.length();
          return new PolynomialBezier(t.v[e], t.o[e], t.i[n], t.v[n], !0)
        }, PolynomialBezier.shapeSegmentInverted = function(t, e) {
          var n = (e + 1) % t.length();
          return new PolynomialBezier(t.v[n], t.i[n], t.o[e], t.v[e], !0)
        }, extendPrototype([ShapeModifier], ZigZagModifier), ZigZagModifier.prototype.initModifierProperties = function(t, e) {
          this.getValue = this.processKeys, this.amplitude = PropertyFactory.getProp(t, e.s, 0, null, this), this.frequency = PropertyFactory.getProp(t, e.r, 0, null, this), this.pointsType = PropertyFactory.getProp(t, e.pt, 0, null, this), this._isAnimated = 0 !== this.amplitude.effectsSequence.length || 0 !== this.frequency.effectsSequence.length || 0 !== this.pointsType.effectsSequence.length
        }, ZigZagModifier.prototype.processPath = function(t, e, n, r) {
          var i = t._length,
            a = shapePool.newElement();
          if (a.c = t.c, t.c || (i -= 1), 0 === i) return a;
          var s = -1,
            o = PolynomialBezier.shapeSegment(t, 0);
          zigZagCorner(a, t, 0, e, n, r, s);
          for (var l = 0; l < i; l += 1) s = zigZagSegment(a, o, e, n, r, -s), o = l !== i - 1 || t.c ? PolynomialBezier.shapeSegment(t, (l + 1) % i) : null, zigZagCorner(a, t, l + 1, e, n, r, s);
          return a
        }, ZigZagModifier.prototype.processShapes = function(t) {
          var e, n, r, i, a, s, o = this.shapes.length,
            l = this.amplitude.v,
            u = Math.max(0, Math.round(this.frequency.v)),
            h = this.pointsType.v;
          if (0 !== l)
            for (n = 0; n < o; n += 1) {
              if (s = (a = this.shapes[n]).localShapeCollection, a.shape._mdf || this._mdf || t)
                for (s.releaseShapes(), a.shape._mdf = !0, e = a.shape.paths.shapes, i = a.shape.paths._length, r = 0; r < i; r += 1) s.addShape(this.processPath(e[r], l, u, h));
              a.shape.paths = a.localShapeCollection
            }
          this.dynamicProperties.length || (this._mdf = !1)
        }, extendPrototype([ShapeModifier], OffsetPathModifier), OffsetPathModifier.prototype.initModifierProperties = function(t, e) {
          this.getValue = this.processKeys, this.amount = PropertyFactory.getProp(t, e.a, 0, null, this), this.miterLimit = PropertyFactory.getProp(t, e.ml, 0, null, this), this.lineJoin = e.lj, this._isAnimated = 0 !== this.amount.effectsSequence.length
        }, OffsetPathModifier.prototype.processPath = function(t, e, n, r) {
          var i = shapePool.newElement();
          i.c = t.c;
          var a, s, o, l = t.length();
          t.c || (l -= 1);
          var u = [];
          for (a = 0; a < l; a += 1) o = PolynomialBezier.shapeSegment(t, a), u.push(offsetSegmentSplit(o, e));
          if (!t.c)
            for (a = l - 1; a >= 0; a -= 1) o = PolynomialBezier.shapeSegmentInverted(t, a), u.push(offsetSegmentSplit(o, e));
          u = pruneIntersections(u);
          var h = null,
            c = null;
          for (a = 0; a < u.length; a += 1) {
            var p = u[a];
            for (c && (h = joinLines(i, c, p[0], n, r)), c = p[p.length - 1], s = 0; s < p.length; s += 1) o = p[s], h && pointEqual(o.points[0], h) ? i.setXYAt(o.points[1][0], o.points[1][1], "o", i.length() - 1) : i.setTripleAt(o.points[0][0], o.points[0][1], o.points[1][0], o.points[1][1], o.points[0][0], o.points[0][1], i.length()), i.setTripleAt(o.points[3][0], o.points[3][1], o.points[3][0], o.points[3][1], o.points[2][0], o.points[2][1], i.length()), h = o.points[3]
          }
          return u.length && joinLines(i, c, u[0][0], n, r), i
        }, OffsetPathModifier.prototype.processShapes = function(t) {
          var e, n, r, i, a, s, o = this.shapes.length,
            l = this.amount.v,
            u = this.miterLimit.v,
            h = this.lineJoin;
          if (0 !== l)
            for (n = 0; n < o; n += 1) {
              if (s = (a = this.shapes[n]).localShapeCollection, a.shape._mdf || this._mdf || t)
                for (s.releaseShapes(), a.shape._mdf = !0, e = a.shape.paths.shapes, i = a.shape.paths._length, r = 0; r < i; r += 1) s.addShape(this.processPath(e[r], l, h, u));
              a.shape.paths = a.localShapeCollection
            }
          this.dynamicProperties.length || (this._mdf = !1)
        };
        var FontManager = function() {
          var t = {
              w: 0,
              size: 0,
              shapes: [],
              data: {
                shapes: []
              }
            },
            e = [];
          e = e.concat([2304, 2305, 2306, 2307, 2362, 2363, 2364, 2364, 2366, 2367, 2368, 2369, 2370, 2371, 2372, 2373, 2374, 2375, 2376, 2377, 2378, 2379, 2380, 2381, 2382, 2383, 2387, 2388, 2389, 2390, 2391, 2402, 2403]);
          var n = 127988,
            r = ["d83cdffb", "d83cdffc", "d83cdffd", "d83cdffe", "d83cdfff"];

          function i(t, e) {
            var n = createTag("span");
            n.setAttribute("aria-hidden", !0), n.style.fontFamily = e;
            var r = createTag("span");
            r.innerText = "giItT1WQy@!-/#", n.style.position = "absolute", n.style.left = "-10000px", n.style.top = "-10000px", n.style.fontSize = "300px", n.style.fontVariant = "normal", n.style.fontStyle = "normal", n.style.fontWeight = "normal", n.style.letterSpacing = "0", n.appendChild(r), document.body.appendChild(n);
            var i = r.offsetWidth;
            return r.style.fontFamily = function(t) {
              var e, n = t.split(","),
                r = n.length,
                i = [];
              for (e = 0; e < r; e += 1) "sans-serif" !== n[e] && "monospace" !== n[e] && i.push(n[e]);
              return i.join(",")
            }(t) + ", " + e, {
              node: r,
              w: i,
              parent: n
            }
          }

          function a(t, e) {
            var n, r = document.body && e ? "svg" : "canvas",
              i = getFontProperties(t);
            if ("svg" === r) {
              var a = createNS("text");
              a.style.fontSize = "100px", a.setAttribute("font-family", t.fFamily), a.setAttribute("font-style", i.style), a.setAttribute("font-weight", i.weight), a.textContent = "1", t.fClass ? (a.style.fontFamily = "inherit", a.setAttribute("class", t.fClass)) : a.style.fontFamily = t.fFamily, e.appendChild(a), n = a
            } else {
              var s = new OffscreenCanvas(500, 500).getContext("2d");
              s.font = i.style + " " + i.weight + " 100px " + t.fFamily, n = s
            }
            return {
              measureText: function(t) {
                return "svg" === r ? (n.textContent = t, n.getComputedTextLength()) : n.measureText(t).width
              }
            }
          }

          function s(t) {
            var e = 0,
              n = t.charCodeAt(0);
            if (n >= 55296 && n <= 56319) {
              var r = t.charCodeAt(1);
              r >= 56320 && r <= 57343 && (e = 1024 * (n - 55296) + r - 56320 + 65536)
            }
            return e
          }

          function o(t) {
            var e = s(t);
            return e >= 127462 && e <= 127487
          }
          var l = function() {
            this.fonts = [], this.chars = null, this.typekitLoaded = 0, this.isLoaded = !1, this._warned = !1, this.initTime = Date.now(), this.setIsLoadedBinded = this.setIsLoaded.bind(this), this.checkLoadedFontsBinded = this.checkLoadedFonts.bind(this)
          };
          l.isModifier = function(t, e) {
            var n = t.toString(16) + e.toString(16);
            return -1 !== r.indexOf(n)
          }, l.isZeroWidthJoiner = function(t) {
            return 8205 === t
          }, l.isFlagEmoji = function(t) {
            return o(t.substr(0, 2)) && o(t.substr(2, 2))
          }, l.isRegionalCode = o, l.isCombinedCharacter = function(t) {
            return -1 !== e.indexOf(t)
          }, l.isRegionalFlag = function(t, e) {
            var r = s(t.substr(e, 2));
            if (r !== n) return !1;
            var i = 0;
            for (e += 2; i < 5;) {
              if ((r = s(t.substr(e, 2))) < 917601 || r > 917626) return !1;
              i += 1, e += 2
            }
            return 917631 === s(t.substr(e, 2))
          }, l.isVariationSelector = function(t) {
            return 65039 === t
          }, l.BLACK_FLAG_CODE_POINT = n;
          var u = {
            addChars: function(t) {
              if (t) {
                var e;
                this.chars || (this.chars = []);
                var n, r, i = t.length,
                  a = this.chars.length;
                for (e = 0; e < i; e += 1) {
                  for (n = 0, r = !1; n < a;) this.chars[n].style === t[e].style && this.chars[n].fFamily === t[e].fFamily && this.chars[n].ch === t[e].ch && (r = !0), n += 1;
                  r || (this.chars.push(t[e]), a += 1)
                }
              }
            },
            addFonts: function(t, e) {
              if (t) {
                if (this.chars) return this.isLoaded = !0, void(this.fonts = t.list);
                if (!document.body) return this.isLoaded = !0, t.list.forEach((function(t) {
                  t.helper = a(t), t.cache = {}
                })), void(this.fonts = t.list);
                var n, r = t.list,
                  s = r.length,
                  o = s;
                for (n = 0; n < s; n += 1) {
                  var l, u, h = !0;
                  if (r[n].loaded = !1, r[n].monoCase = i(r[n].fFamily, "monospace"), r[n].sansCase = i(r[n].fFamily, "sans-serif"), r[n].fPath) {
                    if ("p" === r[n].fOrigin || 3 === r[n].origin) {
                      if ((l = document.querySelectorAll('style[f-forigin="p"][f-family="' + r[n].fFamily + '"], style[f-origin="3"][f-family="' + r[n].fFamily + '"]')).length > 0 && (h = !1), h) {
                        var c = createTag("style");
                        c.setAttribute("f-forigin", r[n].fOrigin), c.setAttribute("f-origin", r[n].origin), c.setAttribute("f-family", r[n].fFamily), c.type = "text/css", c.innerText = "@font-face {font-family: " + r[n].fFamily + "; font-style: normal; src: url('" + r[n].fPath + "');}", e.appendChild(c)
                      }
                    } else if ("g" === r[n].fOrigin || 1 === r[n].origin) {
                      for (l = document.querySelectorAll('link[f-forigin="g"], link[f-origin="1"]'), u = 0; u < l.length; u += 1) - 1 !== l[u].href.indexOf(r[n].fPath) && (h = !1);
                      if (h) {
                        var p = createTag("link");
                        p.setAttribute("f-forigin", r[n].fOrigin), p.setAttribute("f-origin", r[n].origin), p.type = "text/css", p.rel = "stylesheet", p.href = r[n].fPath, document.body.appendChild(p)
                      }
                    } else if ("t" === r[n].fOrigin || 2 === r[n].origin) {
                      for (l = document.querySelectorAll('script[f-forigin="t"], script[f-origin="2"]'), u = 0; u < l.length; u += 1) r[n].fPath === l[u].src && (h = !1);
                      if (h) {
                        var f = createTag("link");
                        f.setAttribute("f-forigin", r[n].fOrigin), f.setAttribute("f-origin", r[n].origin), f.setAttribute("rel", "stylesheet"), f.setAttribute("href", r[n].fPath), e.appendChild(f)
                      }
                    }
                  } else r[n].loaded = !0, o -= 1;
                  r[n].helper = a(r[n], e), r[n].cache = {}, this.fonts.push(r[n])
                }
                0 === o ? this.isLoaded = !0 : setTimeout(this.checkLoadedFonts.bind(this), 100)
              } else this.isLoaded = !0
            },
            getCharData: function(e, n, r) {
              for (var i = 0, a = this.chars.length; i < a;) {
                if (this.chars[i].ch === e && this.chars[i].style === n && this.chars[i].fFamily === r) return this.chars[i];
                i += 1
              }
              return ("string" == typeof e && 13 !== e.charCodeAt(0) || !e) && console && console.warn && !this._warned && (this._warned = !0, console.warn("Missing character from exported characters list: ", e, n, r)), t
            },
            getFontByName: function(t) {
              for (var e = 0, n = this.fonts.length; e < n;) {
                if (this.fonts[e].fName === t) return this.fonts[e];
                e += 1
              }
              return this.fonts[0]
            },
            measureText: function(t, e, n) {
              var r = this.getFontByName(e),
                i = t;
              if (!r.cache[i]) {
                var a = r.helper;
                if (" " === t) {
                  var s = a.measureText("|" + t + "|"),
                    o = a.measureText("||");
                  r.cache[i] = (s - o) / 100
                } else r.cache[i] = a.measureText(t) / 100
              }
              return r.cache[i] * n
            },
            checkLoadedFonts: function() {
              var t, e, n, r = this.fonts.length,
                i = r;
              for (t = 0; t < r; t += 1) this.fonts[t].loaded ? i -= 1 : "n" === this.fonts[t].fOrigin || 0 === this.fonts[t].origin ? this.fonts[t].loaded = !0 : (e = this.fonts[t].monoCase.node, n = this.fonts[t].monoCase.w, e.offsetWidth !== n ? (i -= 1, this.fonts[t].loaded = !0) : (e = this.fonts[t].sansCase.node, n = this.fonts[t].sansCase.w, e.offsetWidth !== n && (i -= 1, this.fonts[t].loaded = !0)), this.fonts[t].loaded && (this.fonts[t].sansCase.parent.parentNode.removeChild(this.fonts[t].sansCase.parent), this.fonts[t].monoCase.parent.parentNode.removeChild(this.fonts[t].monoCase.parent)));
              0 !== i && Date.now() - this.initTime < 5e3 ? setTimeout(this.checkLoadedFontsBinded, 20) : setTimeout(this.setIsLoadedBinded, 10)
            },
            setIsLoaded: function() {
              this.isLoaded = !0
            }
          };
          return l.prototype = u, l
        }();

        function SlotManager(t) {
          this.animationData = t
        }

        function slotFactory(t) {
          return new SlotManager(t)
        }

        function RenderableElement() {}
        SlotManager.prototype.getProp = function(t) {
          return this.animationData.slots && this.animationData.slots[t.sid] ? Object.assign(t, this.animationData.slots[t.sid].p) : t
        }, RenderableElement.prototype = {
          initRenderable: function() {
            this.isInRange = !1, this.hidden = !1, this.isTransparent = !1, this.renderableComponents = []
          },
          addRenderableComponent: function(t) {
            -1 === this.renderableComponents.indexOf(t) && this.renderableComponents.push(t)
          },
          removeRenderableComponent: function(t) {
            -1 !== this.renderableComponents.indexOf(t) && this.renderableComponents.splice(this.renderableComponents.indexOf(t), 1)
          },
          prepareRenderableFrame: function(t) {
            this.checkLayerLimits(t)
          },
          checkTransparency: function() {
            this.finalTransform.mProp.o.v <= 0 ? !this.isTransparent && this.globalData.renderConfig.hideOnTransparent && (this.isTransparent = !0, this.hide()) : this.isTransparent && (this.isTransparent = !1, this.show())
          },
          checkLayerLimits: function(t) {
            this.data.ip - this.data.st <= t && this.data.op - this.data.st > t ? !0 !== this.isInRange && (this.globalData._mdf = !0, this._mdf = !0, this.isInRange = !0, this.show()) : !1 !== this.isInRange && (this.globalData._mdf = !0, this.isInRange = !1, this.hide())
          },
          renderRenderable: function() {
            var t, e = this.renderableComponents.length;
            for (t = 0; t < e; t += 1) this.renderableComponents[t].renderFrame(this._isFirstFrame)
          },
          sourceRectAtTime: function() {
            return {
              top: 0,
              left: 0,
              width: 100,
              height: 100
            }
          },
          getLayerSize: function() {
            return 5 === this.data.ty ? {
              w: this.data.textData.width,
              h: this.data.textData.height
            } : {
              w: this.data.width,
              h: this.data.height
            }
          }
        };
        var getBlendMode = (blendModeEnums = {
            0: "source-over",
            1: "multiply",
            2: "screen",
            3: "overlay",
            4: "darken",
            5: "lighten",
            6: "color-dodge",
            7: "color-burn",
            8: "hard-light",
            9: "soft-light",
            10: "difference",
            11: "exclusion",
            12: "hue",
            13: "saturation",
            14: "color",
            15: "luminosity"
          }, function(t) {
            return blendModeEnums[t] || ""
          }),
          blendModeEnums;

        function SliderEffect(t, e, n) {
          this.p = PropertyFactory.getProp(e, t.v, 0, 0, n)
        }

        function AngleEffect(t, e, n) {
          this.p = PropertyFactory.getProp(e, t.v, 0, 0, n)
        }

        function ColorEffect(t, e, n) {
          this.p = PropertyFactory.getProp(e, t.v, 1, 0, n)
        }

        function PointEffect(t, e, n) {
          this.p = PropertyFactory.getProp(e, t.v, 1, 0, n)
        }

        function LayerIndexEffect(t, e, n) {
          this.p = PropertyFactory.getProp(e, t.v, 0, 0, n)
        }

        function MaskIndexEffect(t, e, n) {
          this.p = PropertyFactory.getProp(e, t.v, 0, 0, n)
        }

        function CheckboxEffect(t, e, n) {
          this.p = PropertyFactory.getProp(e, t.v, 0, 0, n)
        }

        function NoValueEffect() {
          this.p = {}
        }

        function EffectsManager(t, e) {
          var n, r = t.ef || [];
          this.effectElements = [];
          var i, a = r.length;
          for (n = 0; n < a; n += 1) i = new GroupEffect(r[n], e), this.effectElements.push(i)
        }

        function GroupEffect(t, e) {
          this.init(t, e)
        }

        function BaseElement() {}

        function FrameElement() {}

        function FootageElement(t, e, n) {
          this.initFrame(), this.initRenderable(), this.assetData = e.getAssetData(t.refId), this.footageData = e.imageLoader.getAsset(this.assetData), this.initBaseData(t, e, n)
        }

        function AudioElement(t, e, n) {
          this.initFrame(), this.initRenderable(), this.assetData = e.getAssetData(t.refId), this.initBaseData(t, e, n), this._isPlaying = !1, this._canPlay = !1;
          var r = this.globalData.getAssetsPath(this.assetData);
          this.audio = this.globalData.audioController.createAudio(r), this._currentTime = 0, this.globalData.audioController.addAudio(this), this._volumeMultiplier = 1, this._volume = 1, this._previousVolume = null, this.tm = t.tm ? PropertyFactory.getProp(this, t.tm, 0, e.frameRate, this) : {
            _placeholder: !0
          }, this.lv = PropertyFactory.getProp(this, t.au && t.au.lv ? t.au.lv : {
            k: [100]
          }, 1, .01, this)
        }

        function BaseRenderer() {}
        extendPrototype([DynamicPropertyContainer], GroupEffect), GroupEffect.prototype.getValue = GroupEffect.prototype.iterateDynamicProperties, GroupEffect.prototype.init = function(t, e) {
          var n;
          this.data = t, this.effectElements = [], this.initDynamicPropertyContainer(e);
          var r, i = this.data.ef.length,
            a = this.data.ef;
          for (n = 0; n < i; n += 1) {
            switch (r = null, a[n].ty) {
              case 0:
                r = new SliderEffect(a[n], e, this);
                break;
              case 1:
                r = new AngleEffect(a[n], e, this);
                break;
              case 2:
                r = new ColorEffect(a[n], e, this);
                break;
              case 3:
                r = new PointEffect(a[n], e, this);
                break;
              case 4:
              case 7:
                r = new CheckboxEffect(a[n], e, this);
                break;
              case 10:
                r = new LayerIndexEffect(a[n], e, this);
                break;
              case 11:
                r = new MaskIndexEffect(a[n], e, this);
                break;
              case 5:
                r = new EffectsManager(a[n], e, this);
                break;
              default:
                r = new NoValueEffect(a[n], e, this)
            }
            r && this.effectElements.push(r)
          }
        }, BaseElement.prototype = {
          checkMasks: function() {
            if (!this.data.hasMask) return !1;
            for (var t = 0, e = this.data.masksProperties.length; t < e;) {
              if ("n" !== this.data.masksProperties[t].mode && !1 !== this.data.masksProperties[t].cl) return !0;
              t += 1
            }
            return !1
          },
          initExpressions: function() {
            var t = getExpressionInterfaces();
            if (t) {
              var e = t("layer"),
                n = t("effects"),
                r = t("shape"),
                i = t("text"),
                a = t("comp");
              this.layerInterface = e(this), this.data.hasMask && this.maskManager && this.layerInterface.registerMaskInterface(this.maskManager);
              var s = n.createEffectsInterface(this, this.layerInterface);
              this.layerInterface.registerEffectsInterface(s), 0 === this.data.ty || this.data.xt ? this.compInterface = a(this) : 4 === this.data.ty ? (this.layerInterface.shapeInterface = r(this.shapesData, this.itemsData, this.layerInterface), this.layerInterface.content = this.layerInterface.shapeInterface) : 5 === this.data.ty && (this.layerInterface.textInterface = i(this), this.layerInterface.text = this.layerInterface.textInterface)
            }
          },
          setBlendMode: function() {
            var t = getBlendMode(this.data.bm);
            (this.baseElement || this.layerElement).style["mix-blend-mode"] = t
          },
          initBaseData: function(t, e, n) {
            this.globalData = e, this.comp = n, this.data = t, this.layerId = createElementID(), this.data.sr || (this.data.sr = 1), this.effectsManager = new EffectsManager(this.data, this, this.dynamicProperties)
          },
          getType: function() {
            return this.type
          },
          sourceRectAtTime: function() {}
        }, FrameElement.prototype = {
          initFrame: function() {
            this._isFirstFrame = !1, this.dynamicProperties = [], this._mdf = !1
          },
          prepareProperties: function(t, e) {
            var n, r = this.dynamicProperties.length;
            for (n = 0; n < r; n += 1)(e || this._isParent && "transform" === this.dynamicProperties[n].propType) && (this.dynamicProperties[n].getValue(), this.dynamicProperties[n]._mdf && (this.globalData._mdf = !0, this._mdf = !0))
          },
          addDynamicProperty: function(t) {
            -1 === this.dynamicProperties.indexOf(t) && this.dynamicProperties.push(t)
          }
        }, FootageElement.prototype.prepareFrame = function() {}, extendPrototype([RenderableElement, BaseElement, FrameElement], FootageElement), FootageElement.prototype.getBaseElement = function() {
          return null
        }, FootageElement.prototype.renderFrame = function() {}, FootageElement.prototype.destroy = function() {}, FootageElement.prototype.initExpressions = function() {
          var t = getExpressionInterfaces();
          if (t) {
            var e = t("footage");
            this.layerInterface = e(this)
          }
        }, FootageElement.prototype.getFootageData = function() {
          return this.footageData
        }, AudioElement.prototype.prepareFrame = function(t) {
          if (this.prepareRenderableFrame(t, !0), this.prepareProperties(t, !0), this.tm._placeholder) this._currentTime = t / this.data.sr;
          else {
            var e = this.tm.v;
            this._currentTime = e
          }
          this._volume = this.lv.v[0];
          var n = this._volume * this._volumeMultiplier;
          this._previousVolume !== n && (this._previousVolume = n, this.audio.volume(n))
        }, extendPrototype([RenderableElement, BaseElement, FrameElement], AudioElement), AudioElement.prototype.renderFrame = function() {
          this.isInRange && this._canPlay && (this._isPlaying ? (!this.audio.playing() || Math.abs(this._currentTime / this.globalData.frameRate - this.audio.seek()) > .1) && this.audio.seek(this._currentTime / this.globalData.frameRate) : (this.audio.play(), this.audio.seek(this._currentTime / this.globalData.frameRate), this._isPlaying = !0))
        }, AudioElement.prototype.show = function() {}, AudioElement.prototype.hide = function() {
          this.audio.pause(), this._isPlaying = !1
        }, AudioElement.prototype.pause = function() {
          this.audio.pause(), this._isPlaying = !1, this._canPlay = !1
        }, AudioElement.prototype.resume = function() {
          this._canPlay = !0
        }, AudioElement.prototype.setRate = function(t) {
          this.audio.rate(t)
        }, AudioElement.prototype.volume = function(t) {
          this._volumeMultiplier = t, this._previousVolume = t * this._volume, this.audio.volume(this._previousVolume)
        }, AudioElement.prototype.getBaseElement = function() {
          return null
        }, AudioElement.prototype.destroy = function() {}, AudioElement.prototype.sourceRectAtTime = function() {}, AudioElement.prototype.initExpressions = function() {}, BaseRenderer.prototype.checkLayers = function(t) {
          var e, n, r = this.layers.length;
          for (this.completeLayers = !0, e = r - 1; e >= 0; e -= 1) this.elements[e] || (n = this.layers[e]).ip - n.st <= t - this.layers[e].st && n.op - n.st > t - this.layers[e].st && this.buildItem(e), this.completeLayers = !!this.elements[e] && this.completeLayers;
          this.checkPendingElements()
        }, BaseRenderer.prototype.createItem = function(t) {
          switch (t.ty) {
            case 2:
              return this.createImage(t);
            case 0:
              return this.createComp(t);
            case 1:
              return this.createSolid(t);
            case 3:
            default:
              return this.createNull(t);
            case 4:
              return this.createShape(t);
            case 5:
              return this.createText(t);
            case 6:
              return this.createAudio(t);
            case 13:
              return this.createCamera(t);
            case 15:
              return this.createFootage(t)
          }
        }, BaseRenderer.prototype.createCamera = function() {
          throw new Error("You're using a 3d camera. Try the html renderer.")
        }, BaseRenderer.prototype.createAudio = function(t) {
          return new AudioElement(t, this.globalData, this)
        }, BaseRenderer.prototype.createFootage = function(t) {
          return new FootageElement(t, this.globalData, this)
        }, BaseRenderer.prototype.buildAllItems = function() {
          var t, e = this.layers.length;
          for (t = 0; t < e; t += 1) this.buildItem(t);
          this.checkPendingElements()
        }, BaseRenderer.prototype.includeLayers = function(t) {
          var e;
          this.completeLayers = !1;
          var n, r = t.length,
            i = this.layers.length;
          for (e = 0; e < r; e += 1)
            for (n = 0; n < i;) {
              if (this.layers[n].id === t[e].id) {
                this.layers[n] = t[e];
                break
              }
              n += 1
            }
        }, BaseRenderer.prototype.setProjectInterface = function(t) {
          this.globalData.projectInterface = t
        }, BaseRenderer.prototype.initItems = function() {
          this.globalData.progressiveLoad || this.buildAllItems()
        }, BaseRenderer.prototype.buildElementParenting = function(t, e, n) {
          for (var r = this.elements, i = this.layers, a = 0, s = i.length; a < s;) i[a].ind == e && (r[a] && !0 !== r[a] ? (n.push(r[a]), r[a].setAsParent(), void 0 !== i[a].parent ? this.buildElementParenting(t, i[a].parent, n) : t.setHierarchy(n)) : (this.buildItem(a), this.addPendingElement(t))), a += 1
        }, BaseRenderer.prototype.addPendingElement = function(t) {
          this.pendingElements.push(t)
        }, BaseRenderer.prototype.searchExtraCompositions = function(t) {
          var e, n = t.length;
          for (e = 0; e < n; e += 1)
            if (t[e].xt) {
              var r = this.createComp(t[e]);
              r.initExpressions(), this.globalData.projectInterface.registerComposition(r)
            }
        }, BaseRenderer.prototype.getElementById = function(t) {
          var e, n = this.elements.length;
          for (e = 0; e < n; e += 1)
            if (this.elements[e].data.ind === t) return this.elements[e];
          return null
        }, BaseRenderer.prototype.getElementByPath = function(t) {
          var e, n = t.shift();
          if ("number" == typeof n) e = this.elements[n];
          else {
            var r, i = this.elements.length;
            for (r = 0; r < i; r += 1)
              if (this.elements[r].data.nm === n) {
                e = this.elements[r];
                break
              }
          }
          return 0 === t.length ? e : e.getElementByPath(t)
        }, BaseRenderer.prototype.setupGlobalData = function(t, e) {
          this.globalData.fontManager = new FontManager, this.globalData.slotManager = slotFactory(t), this.globalData.fontManager.addChars(t.chars), this.globalData.fontManager.addFonts(t.fonts, e), this.globalData.getAssetData = this.animationItem.getAssetData.bind(this.animationItem), this.globalData.getAssetsPath = this.animationItem.getAssetsPath.bind(this.animationItem), this.globalData.imageLoader = this.animationItem.imagePreloader, this.globalData.audioController = this.animationItem.audioController, this.globalData.frameId = 0, this.globalData.frameRate = t.fr, this.globalData.nm = t.nm, this.globalData.compSize = {
            w: t.w,
            h: t.h
          }
        };
        var effectTypes = {
          TRANSFORM_EFFECT: "transformEFfect"
        };

        function TransformElement() {}

        function MaskElement(t, e, n) {
          this.data = t, this.element = e, this.globalData = n, this.storedData = [], this.masksProperties = this.data.masksProperties || [], this.maskElement = null;
          var r, i, a = this.globalData.defs,
            s = this.masksProperties ? this.masksProperties.length : 0;
          this.viewData = createSizedArray(s), this.solidPath = "";
          var o, l, u, h, c, p, f = this.masksProperties,
            d = 0,
            m = [],
            v = createElementID(),
            g = "clipPath",
            y = "clip-path";
          for (r = 0; r < s; r += 1)
            if (("a" !== f[r].mode && "n" !== f[r].mode || f[r].inv || 100 !== f[r].o.k || f[r].o.x) && (g = "mask", y = "mask"), "s" !== f[r].mode && "i" !== f[r].mode || 0 !== d ? u = null : ((u = createNS("rect")).setAttribute("fill", "#ffffff"), u.setAttribute("width", this.element.comp.data.w || 0), u.setAttribute("height", this.element.comp.data.h || 0), m.push(u)), i = createNS("path"), "n" === f[r].mode) this.viewData[r] = {
              op: PropertyFactory.getProp(this.element, f[r].o, 0, .01, this.element),
              prop: ShapePropertyFactory.getShapeProp(this.element, f[r], 3),
              elem: i,
              lastPath: ""
            }, a.appendChild(i);
            else {
              var b;
              if (d += 1, i.setAttribute("fill", "s" === f[r].mode ? "#000000" : "#ffffff"), i.setAttribute("clip-rule", "nonzero"), 0 !== f[r].x.k ? (g = "mask", y = "mask", p = PropertyFactory.getProp(this.element, f[r].x, 0, null, this.element), b = createElementID(), (h = createNS("filter")).setAttribute("id", b), (c = createNS("feMorphology")).setAttribute("operator", "erode"), c.setAttribute("in", "SourceGraphic"), c.setAttribute("radius", "0"), h.appendChild(c), a.appendChild(h), i.setAttribute("stroke", "s" === f[r].mode ? "#000000" : "#ffffff")) : (c = null, p = null), this.storedData[r] = {
                  elem: i,
                  x: p,
                  expan: c,
                  lastPath: "",
                  lastOperator: "",
                  filterId: b,
                  lastRadius: 0
                }, "i" === f[r].mode) {
                l = m.length;
                var x = createNS("g");
                for (o = 0; o < l; o += 1) x.appendChild(m[o]);
                var S = createNS("mask");
                S.setAttribute("mask-type", "alpha"), S.setAttribute("id", v + "_" + d), S.appendChild(i), a.appendChild(S), x.setAttribute("mask", "url(" + getLocationHref() + "#" + v + "_" + d + ")"), m.length = 0, m.push(x)
              } else m.push(i);
              f[r].inv && !this.solidPath && (this.solidPath = this.createLayerSolidPath()), this.viewData[r] = {
                elem: i,
                lastPath: "",
                op: PropertyFactory.getProp(this.element, f[r].o, 0, .01, this.element),
                prop: ShapePropertyFactory.getShapeProp(this.element, f[r], 3),
                invRect: u
              }, this.viewData[r].prop.k || this.drawPath(f[r], this.viewData[r].prop.v, this.viewData[r])
            } for (this.maskElement = createNS(g), s = m.length, r = 0; r < s; r += 1) this.maskElement.appendChild(m[r]);
          d > 0 && (this.maskElement.setAttribute("id", v), this.element.maskedElement.setAttribute(y, "url(" + getLocationHref() + "#" + v + ")"), a.appendChild(this.maskElement)), this.viewData.length && this.element.addRenderableComponent(this)
        }
        TransformElement.prototype = {
          initTransform: function() {
            var t = new Matrix;
            this.finalTransform = {
              mProp: this.data.ks ? TransformPropertyFactory.getTransformProperty(this, this.data.ks, this) : {
                o: 0
              },
              _matMdf: !1,
              _localMatMdf: !1,
              _opMdf: !1,
              mat: t,
              localMat: t,
              localOpacity: 1
            }, this.data.ao && (this.finalTransform.mProp.autoOriented = !0), this.data.ty
          },
          renderTransform: function() {
            if (this.finalTransform._opMdf = this.finalTransform.mProp.o._mdf || this._isFirstFrame, this.finalTransform._matMdf = this.finalTransform.mProp._mdf || this._isFirstFrame, this.hierarchy) {
              var t, e = this.finalTransform.mat,
                n = 0,
                r = this.hierarchy.length;
              if (!this.finalTransform._matMdf)
                for (; n < r;) {
                  if (this.hierarchy[n].finalTransform.mProp._mdf) {
                    this.finalTransform._matMdf = !0;
                    break
                  }
                  n += 1
                }
              if (this.finalTransform._matMdf)
                for (t = this.finalTransform.mProp.v.props, e.cloneFromProps(t), n = 0; n < r; n += 1) e.multiply(this.hierarchy[n].finalTransform.mProp.v)
            }
            this.finalTransform._matMdf && (this.finalTransform._localMatMdf = this.finalTransform._matMdf), this.finalTransform._opMdf && (this.finalTransform.localOpacity = this.finalTransform.mProp.o.v)
          },
          renderLocalTransform: function() {
            if (this.localTransforms) {
              var t = 0,
                e = this.localTransforms.length;
              if (this.finalTransform._localMatMdf = this.finalTransform._matMdf, !this.finalTransform._localMatMdf || !this.finalTransform._opMdf)
                for (; t < e;) this.localTransforms[t]._mdf && (this.finalTransform._localMatMdf = !0), this.localTransforms[t]._opMdf && !this.finalTransform._opMdf && (this.finalTransform.localOpacity = this.finalTransform.mProp.o.v, this.finalTransform._opMdf = !0), t += 1;
              if (this.finalTransform._localMatMdf) {
                var n = this.finalTransform.localMat;
                for (this.localTransforms[0].matrix.clone(n), t = 1; t < e; t += 1) {
                  var r = this.localTransforms[t].matrix;
                  n.multiply(r)
                }
                n.multiply(this.finalTransform.mat)
              }
              if (this.finalTransform._opMdf) {
                var i = this.finalTransform.localOpacity;
                for (t = 0; t < e; t += 1) i *= .01 * this.localTransforms[t].opacity;
                this.finalTransform.localOpacity = i
              }
            }
          },
          searchEffectTransforms: function() {
            if (this.renderableEffectsManager) {
              var t = this.renderableEffectsManager.getEffects(effectTypes.TRANSFORM_EFFECT);
              if (t.length) {
                this.localTransforms = [], this.finalTransform.localMat = new Matrix;
                var e = 0,
                  n = t.length;
                for (e = 0; e < n; e += 1) this.localTransforms.push(t[e])
              }
            }
          },
          globalToLocal: function(t) {
            var e = [];
            e.push(this.finalTransform);
            for (var n, r = !0, i = this.comp; r;) i.finalTransform ? (i.data.hasMask && e.splice(0, 0, i.finalTransform), i = i.comp) : r = !1;
            var a, s = e.length;
            for (n = 0; n < s; n += 1) a = e[n].mat.applyToPointArray(0, 0, 0), t = [t[0] - a[0], t[1] - a[1], 0];
            return t
          },
          mHelper: new Matrix
        }, MaskElement.prototype.getMaskProperty = function(t) {
          return this.viewData[t].prop
        }, MaskElement.prototype.renderFrame = function(t) {
          var e, n = this.element.finalTransform.mat,
            r = this.masksProperties.length;
          for (e = 0; e < r; e += 1)
            if ((this.viewData[e].prop._mdf || t) && this.drawPath(this.masksProperties[e], this.viewData[e].prop.v, this.viewData[e]), (this.viewData[e].op._mdf || t) && this.viewData[e].elem.setAttribute("fill-opacity", this.viewData[e].op.v), "n" !== this.masksProperties[e].mode && (this.viewData[e].invRect && (this.element.finalTransform.mProp._mdf || t) && this.viewData[e].invRect.setAttribute("transform", n.getInverseMatrix().to2dCSS()), this.storedData[e].x && (this.storedData[e].x._mdf || t))) {
              var i = this.storedData[e].expan;
              this.storedData[e].x.v < 0 ? ("erode" !== this.storedData[e].lastOperator && (this.storedData[e].lastOperator = "erode", this.storedData[e].elem.setAttribute("filter", "url(" + getLocationHref() + "#" + this.storedData[e].filterId + ")")), i.setAttribute("radius", -this.storedData[e].x.v)) : ("dilate" !== this.storedData[e].lastOperator && (this.storedData[e].lastOperator = "dilate", this.storedData[e].elem.setAttribute("filter", null)), this.storedData[e].elem.setAttribute("stroke-width", 2 * this.storedData[e].x.v))
            }
        }, MaskElement.prototype.getMaskelement = function() {
          return this.maskElement
        }, MaskElement.prototype.createLayerSolidPath = function() {
          var t = "M0,0 ";
          return t += " h" + this.globalData.compSize.w, t += " v" + this.globalData.compSize.h, (t += " h-" + this.globalData.compSize.w) + " v-" + this.globalData.compSize.h + " "
        }, MaskElement.prototype.drawPath = function(t, e, n) {
          var r, i, a = " M" + e.v[0][0] + "," + e.v[0][1];
          for (i = e._length, r = 1; r < i; r += 1) a += " C" + e.o[r - 1][0] + "," + e.o[r - 1][1] + " " + e.i[r][0] + "," + e.i[r][1] + " " + e.v[r][0] + "," + e.v[r][1];
          if (e.c && i > 1 && (a += " C" + e.o[r - 1][0] + "," + e.o[r - 1][1] + " " + e.i[0][0] + "," + e.i[0][1] + " " + e.v[0][0] + "," + e.v[0][1]), n.lastPath !== a) {
            var s = "";
            n.elem && (e.c && (s = t.inv ? this.solidPath + a : a), n.elem.setAttribute("d", s)), n.lastPath = a
          }
        }, MaskElement.prototype.destroy = function() {
          this.element = null, this.globalData = null, this.maskElement = null, this.data = null, this.masksProperties = null
        };
        var filtersFactory = {
            createFilter: function(t, e) {
              var n = createNS("filter");
              return n.setAttribute("id", t), !0 !== e && (n.setAttribute("filterUnits", "objectBoundingBox"), n.setAttribute("x", "0%"), n.setAttribute("y", "0%"), n.setAttribute("width", "100%"), n.setAttribute("height", "100%")), n
            },
            createAlphaToLuminanceFilter: function() {
              var t = createNS("feColorMatrix");
              return t.setAttribute("type", "matrix"), t.setAttribute("color-interpolation-filters", "sRGB"), t.setAttribute("values", "0 0 0 1 0  0 0 0 1 0  0 0 0 1 0  0 0 0 1 1"), t
            }
          },
          featureSupport = function() {
            var t = {
              maskType: !0,
              svgLumaHidden: !0,
              offscreenCanvas: "undefined" != typeof OffscreenCanvas
            };
            return (/MSIE 10/i.test(navigator.userAgent) || /MSIE 9/i.test(navigator.userAgent) || /rv:11.0/i.test(navigator.userAgent) || /Edge\/\d./i.test(navigator.userAgent)) && (t.maskType = !1), /firefox/i.test(navigator.userAgent) && (t.svgLumaHidden = !1), t
          }(),
          registeredEffects$1 = {},
          idPrefix = "filter_result_";

        function SVGEffects(t) {
          var e, n, r = "SourceGraphic",
            i = t.data.ef ? t.data.ef.length : 0,
            a = createElementID(),
            s = filtersFactory.createFilter(a, !0),
            o = 0;
          for (this.filters = [], e = 0; e < i; e += 1) {
            n = null;
            var l = t.data.ef[e].ty;
            registeredEffects$1[l] && (n = new(0, registeredEffects$1[l].effect)(s, t.effectsManager.effectElements[e], t, idPrefix + o, r), r = idPrefix + o, registeredEffects$1[l].countsAsEffect && (o += 1)), n && this.filters.push(n)
          }
          o && (t.globalData.defs.appendChild(s), t.layerElement.setAttribute("filter", "url(" + getLocationHref() + "#" + a + ")")), this.filters.length && t.addRenderableComponent(this)
        }

        function registerEffect$1(t, e, n) {
          registeredEffects$1[t] = {
            effect: e,
            countsAsEffect: n
          }
        }

        function SVGBaseElement() {}

        function HierarchyElement() {}

        function RenderableDOMElement() {}

        function IImageElement(t, e, n) {
          this.assetData = e.getAssetData(t.refId), this.assetData && this.assetData.sid && (this.assetData = e.slotManager.getProp(this.assetData)), this.initElement(t, e, n), this.sourceRect = {
            top: 0,
            left: 0,
            width: this.assetData.w,
            height: this.assetData.h
          }
        }

        function ProcessedElement(t, e) {
          this.elem = t, this.pos = e
        }

        function IShapeElement() {}
        SVGEffects.prototype.renderFrame = function(t) {
          var e, n = this.filters.length;
          for (e = 0; e < n; e += 1) this.filters[e].renderFrame(t)
        }, SVGEffects.prototype.getEffects = function(t) {
          var e, n = this.filters.length,
            r = [];
          for (e = 0; e < n; e += 1) this.filters[e].type === t && r.push(this.filters[e]);
          return r
        }, SVGBaseElement.prototype = {
          initRendererElement: function() {
            this.layerElement = createNS("g")
          },
          createContainerElements: function() {
            this.matteElement = createNS("g"), this.transformedElement = this.layerElement, this.maskedElement = this.layerElement, this._sizeChanged = !1;
            var t = null;
            if (this.data.td) {
              this.matteMasks = {};
              var e = createNS("g");
              e.setAttribute("id", this.layerId), e.appendChild(this.layerElement), t = e, this.globalData.defs.appendChild(e)
            } else this.data.tt ? (this.matteElement.appendChild(this.layerElement), t = this.matteElement, this.baseElement = this.matteElement) : this.baseElement = this.layerElement;
            if (this.data.ln && this.layerElement.setAttribute("id", this.data.ln), this.data.cl && this.layerElement.setAttribute("class", this.data.cl), 0 === this.data.ty && !this.data.hd) {
              var n = createNS("clipPath"),
                r = createNS("path");
              r.setAttribute("d", "M0,0 L" + this.data.w + ",0 L" + this.data.w + "," + this.data.h + " L0," + this.data.h + "z");
              var i = createElementID();
              if (n.setAttribute("id", i), n.appendChild(r), this.globalData.defs.appendChild(n), this.checkMasks()) {
                var a = createNS("g");
                a.setAttribute("clip-path", "url(" + getLocationHref() + "#" + i + ")"), a.appendChild(this.layerElement), this.transformedElement = a, t ? t.appendChild(this.transformedElement) : this.baseElement = this.transformedElement
              } else this.layerElement.setAttribute("clip-path", "url(" + getLocationHref() + "#" + i + ")")
            }
            0 !== this.data.bm && this.setBlendMode()
          },
          renderElement: function() {
            this.finalTransform._localMatMdf && this.transformedElement.setAttribute("transform", this.finalTransform.localMat.to2dCSS()), this.finalTransform._opMdf && this.transformedElement.setAttribute("opacity", this.finalTransform.localOpacity)
          },
          destroyBaseElement: function() {
            this.layerElement = null, this.matteElement = null, this.maskManager.destroy()
          },
          getBaseElement: function() {
            return this.data.hd ? null : this.baseElement
          },
          createRenderableComponents: function() {
            this.maskManager = new MaskElement(this.data, this, this.globalData), this.renderableEffectsManager = new SVGEffects(this), this.searchEffectTransforms()
          },
          getMatte: function(t) {
            if (this.matteMasks || (this.matteMasks = {}), !this.matteMasks[t]) {
              var e, n, r, i, a = this.layerId + "_" + t;
              if (1 === t || 3 === t) {
                var s = createNS("mask");
                s.setAttribute("id", a), s.setAttribute("mask-type", 3 === t ? "luminance" : "alpha"), (r = createNS("use")).setAttributeNS("http://www.w3.org/1999/xlink", "href", "#" + this.layerId), s.appendChild(r), this.globalData.defs.appendChild(s), featureSupport.maskType || 1 !== t || (s.setAttribute("mask-type", "luminance"), e = createElementID(), n = filtersFactory.createFilter(e), this.globalData.defs.appendChild(n), n.appendChild(filtersFactory.createAlphaToLuminanceFilter()), (i = createNS("g")).appendChild(r), s.appendChild(i), i.setAttribute("filter", "url(" + getLocationHref() + "#" + e + ")"))
              } else if (2 === t) {
                var o = createNS("mask");
                o.setAttribute("id", a), o.setAttribute("mask-type", "alpha");
                var l = createNS("g");
                o.appendChild(l), e = createElementID(), n = filtersFactory.createFilter(e);
                var u = createNS("feComponentTransfer");
                u.setAttribute("in", "SourceGraphic"), n.appendChild(u);
                var h = createNS("feFuncA");
                h.setAttribute("type", "table"), h.setAttribute("tableValues", "1.0 0.0"), u.appendChild(h), this.globalData.defs.appendChild(n);
                var c = createNS("rect");
                c.setAttribute("width", this.comp.data.w), c.setAttribute("height", this.comp.data.h), c.setAttribute("x", "0"), c.setAttribute("y", "0"), c.setAttribute("fill", "#ffffff"), c.setAttribute("opacity", "0"), l.setAttribute("filter", "url(" + getLocationHref() + "#" + e + ")"), l.appendChild(c), (r = createNS("use")).setAttributeNS("http://www.w3.org/1999/xlink", "href", "#" + this.layerId), l.appendChild(r), featureSupport.maskType || (o.setAttribute("mask-type", "luminance"), n.appendChild(filtersFactory.createAlphaToLuminanceFilter()), i = createNS("g"), l.appendChild(c), i.appendChild(this.layerElement), l.appendChild(i)), this.globalData.defs.appendChild(o)
              }
              this.matteMasks[t] = a
            }
            return this.matteMasks[t]
          },
          setMatte: function(t) {
            this.matteElement && this.matteElement.setAttribute("mask", "url(" + getLocationHref() + "#" + t + ")")
          }
        }, HierarchyElement.prototype = {
          initHierarchy: function() {
            this.hierarchy = [], this._isParent = !1, this.checkParenting()
          },
          setHierarchy: function(t) {
            this.hierarchy = t
          },
          setAsParent: function() {
            this._isParent = !0
          },
          checkParenting: function() {
            void 0 !== this.data.parent && this.comp.buildElementParenting(this, this.data.parent, [])
          }
        }, extendPrototype([RenderableElement, createProxyFunction({
          initElement: function(t, e, n) {
            this.initFrame(), this.initBaseData(t, e, n), this.initTransform(t, e, n), this.initHierarchy(), this.initRenderable(), this.initRendererElement(), this.createContainerElements(), this.createRenderableComponents(), this.createContent(), this.hide()
          },
          hide: function() {
            this.hidden || this.isInRange && !this.isTransparent || ((this.baseElement || this.layerElement).style.display = "none", this.hidden = !0)
          },
          show: function() {
            this.isInRange && !this.isTransparent && (this.data.hd || ((this.baseElement || this.layerElement).style.display = "block"), this.hidden = !1, this._isFirstFrame = !0)
          },
          renderFrame: function() {
            this.data.hd || this.hidden || (this.renderTransform(), this.renderRenderable(), this.renderLocalTransform(), this.renderElement(), this.renderInnerContent(), this._isFirstFrame && (this._isFirstFrame = !1))
          },
          renderInnerContent: function() {},
          prepareFrame: function(t) {
            this._mdf = !1, this.prepareRenderableFrame(t), this.prepareProperties(t, this.isInRange), this.checkTransparency()
          },
          destroy: function() {
            this.innerElem = null, this.destroyBaseElement()
          }
        })], RenderableDOMElement), extendPrototype([BaseElement, TransformElement, SVGBaseElement, HierarchyElement, FrameElement, RenderableDOMElement], IImageElement), IImageElement.prototype.createContent = function() {
          var t = this.globalData.getAssetsPath(this.assetData);
          this.innerElem = createNS("image"), this.innerElem.setAttribute("width", this.assetData.w + "px"), this.innerElem.setAttribute("height", this.assetData.h + "px"), this.innerElem.setAttribute("preserveAspectRatio", this.assetData.pr || this.globalData.renderConfig.imagePreserveAspectRatio), this.innerElem.setAttributeNS("http://www.w3.org/1999/xlink", "href", t), this.layerElement.appendChild(this.innerElem)
        }, IImageElement.prototype.sourceRectAtTime = function() {
          return this.sourceRect
        }, IShapeElement.prototype = {
          addShapeToModifiers: function(t) {
            var e, n = this.shapeModifiers.length;
            for (e = 0; e < n; e += 1) this.shapeModifiers[e].addShape(t)
          },
          isShapeInAnimatedModifiers: function(t) {
            for (var e = this.shapeModifiers.length; 0 < e;)
              if (this.shapeModifiers[0].isAnimatedWithShape(t)) return !0;
            return !1
          },
          renderModifiers: function() {
            if (this.shapeModifiers.length) {
              var t, e = this.shapes.length;
              for (t = 0; t < e; t += 1) this.shapes[t].sh.reset();
              for (t = (e = this.shapeModifiers.length) - 1; t >= 0 && !this.shapeModifiers[t].processShapes(this._isFirstFrame); t -= 1);
            }
          },
          searchProcessedElement: function(t) {
            for (var e = this.processedElements, n = 0, r = e.length; n < r;) {
              if (e[n].elem === t) return e[n].pos;
              n += 1
            }
            return 0
          },
          addProcessedElement: function(t, e) {
            for (var n = this.processedElements, r = n.length; r;)
              if (n[r -= 1].elem === t) return void(n[r].pos = e);
            n.push(new ProcessedElement(t, e))
          },
          prepareFrame: function(t) {
            this.prepareRenderableFrame(t), this.prepareProperties(t, this.isInRange)
          }
        };
        var lineCapEnum = {
            1: "butt",
            2: "round",
            3: "square"
          },
          lineJoinEnum = {
            1: "miter",
            2: "round",
            3: "bevel"
          };

        function SVGShapeData(t, e, n) {
          this.caches = [], this.styles = [], this.transformers = t, this.lStr = "", this.sh = n, this.lvl = e, this._isAnimated = !!n.k;
          for (var r = 0, i = t.length; r < i;) {
            if (t[r].mProps.dynamicProperties.length) {
              this._isAnimated = !0;
              break
            }
            r += 1
          }
        }

        function SVGStyleData(t, e) {
          this.data = t, this.type = t.ty, this.d = "", this.lvl = e, this._mdf = !1, this.closed = !0 === t.hd, this.pElem = createNS("path"), this.msElem = null
        }

        function DashProperty(t, e, n, r) {
          var i;
          this.elem = t, this.frameId = -1, this.dataProps = createSizedArray(e.length), this.renderer = n, this.k = !1, this.dashStr = "", this.dashArray = createTypedArray("float32", e.length ? e.length - 1 : 0), this.dashoffset = createTypedArray("float32", 1), this.initDynamicPropertyContainer(r);
          var a, s = e.length || 0;
          for (i = 0; i < s; i += 1) a = PropertyFactory.getProp(t, e[i].v, 0, 0, this), this.k = a.k || this.k, this.dataProps[i] = {
            n: e[i].n,
            p: a
          };
          this.k || this.getValue(!0), this._isAnimated = this.k
        }

        function SVGStrokeStyleData(t, e, n) {
          this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.o = PropertyFactory.getProp(t, e.o, 0, .01, this), this.w = PropertyFactory.getProp(t, e.w, 0, null, this), this.d = new DashProperty(t, e.d || {}, "svg", this), this.c = PropertyFactory.getProp(t, e.c, 1, 255, this), this.style = n, this._isAnimated = !!this._isAnimated
        }

        function SVGFillStyleData(t, e, n) {
          this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.o = PropertyFactory.getProp(t, e.o, 0, .01, this), this.c = PropertyFactory.getProp(t, e.c, 1, 255, this), this.style = n
        }

        function SVGNoStyleData(t, e, n) {
          this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.style = n
        }

        function GradientProperty(t, e, n) {
          this.data = e, this.c = createTypedArray("uint8c", 4 * e.p);
          var r = e.k.k[0].s ? e.k.k[0].s.length - 4 * e.p : e.k.k.length - 4 * e.p;
          this.o = createTypedArray("float32", r), this._cmdf = !1, this._omdf = !1, this._collapsable = this.checkCollapsable(), this._hasOpacity = r, this.initDynamicPropertyContainer(n), this.prop = PropertyFactory.getProp(t, e.k, 1, null, this), this.k = this.prop.k, this.getValue(!0)
        }

        function SVGGradientFillStyleData(t, e, n) {
          this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.initGradientData(t, e, n)
        }

        function SVGGradientStrokeStyleData(t, e, n) {
          this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.w = PropertyFactory.getProp(t, e.w, 0, null, this), this.d = new DashProperty(t, e.d || {}, "svg", this), this.initGradientData(t, e, n), this._isAnimated = !!this._isAnimated
        }

        function ShapeGroupData() {
          this.it = [], this.prevViewData = [], this.gr = createNS("g")
        }

        function SVGTransformData(t, e, n) {
          this.transform = {
            mProps: t,
            op: e,
            container: n
          }, this.elements = [], this._isAnimated = this.transform.mProps.dynamicProperties.length || this.transform.op.effectsSequence.length
        }
        SVGShapeData.prototype.setAsAnimated = function() {
          this._isAnimated = !0
        }, SVGStyleData.prototype.reset = function() {
          this.d = "", this._mdf = !1
        }, DashProperty.prototype.getValue = function(t) {
          if ((this.elem.globalData.frameId !== this.frameId || t) && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf = this._mdf || t, this._mdf)) {
            var e = 0,
              n = this.dataProps.length;
            for ("svg" === this.renderer && (this.dashStr = ""), e = 0; e < n; e += 1) "o" !== this.dataProps[e].n ? "svg" === this.renderer ? this.dashStr += " " + this.dataProps[e].p.v : this.dashArray[e] = this.dataProps[e].p.v : this.dashoffset[0] = this.dataProps[e].p.v
          }
        }, extendPrototype([DynamicPropertyContainer], DashProperty), extendPrototype([DynamicPropertyContainer], SVGStrokeStyleData), extendPrototype([DynamicPropertyContainer], SVGFillStyleData), extendPrototype([DynamicPropertyContainer], SVGNoStyleData), GradientProperty.prototype.comparePoints = function(t, e) {
          for (var n = 0, r = this.o.length / 2; n < r;) {
            if (Math.abs(t[4 * n] - t[4 * e + 2 * n]) > .01) return !1;
            n += 1
          }
          return !0
        }, GradientProperty.prototype.checkCollapsable = function() {
          if (this.o.length / 2 != this.c.length / 4) return !1;
          if (this.data.k.k[0].s)
            for (var t = 0, e = this.data.k.k.length; t < e;) {
              if (!this.comparePoints(this.data.k.k[t].s, this.data.p)) return !1;
              t += 1
            } else if (!this.comparePoints(this.data.k.k, this.data.p)) return !1;
          return !0
        }, GradientProperty.prototype.getValue = function(t) {
          if (this.prop.getValue(), this._mdf = !1, this._cmdf = !1, this._omdf = !1, this.prop._mdf || t) {
            var e, n, r, i = 4 * this.data.p;
            for (e = 0; e < i; e += 1) n = e % 4 == 0 ? 100 : 255, r = Math.round(this.prop.v[e] * n), this.c[e] !== r && (this.c[e] = r, this._cmdf = !t);
            if (this.o.length)
              for (i = this.prop.v.length, e = 4 * this.data.p; e < i; e += 1) n = e % 2 == 0 ? 100 : 1, r = e % 2 == 0 ? Math.round(100 * this.prop.v[e]) : this.prop.v[e], this.o[e - 4 * this.data.p] !== r && (this.o[e - 4 * this.data.p] = r, this._omdf = !t);
            this._mdf = !t
          }
        }, extendPrototype([DynamicPropertyContainer], GradientProperty), SVGGradientFillStyleData.prototype.initGradientData = function(t, e, n) {
          this.o = PropertyFactory.getProp(t, e.o, 0, .01, this), this.s = PropertyFactory.getProp(t, e.s, 1, null, this), this.e = PropertyFactory.getProp(t, e.e, 1, null, this), this.h = PropertyFactory.getProp(t, e.h || {
            k: 0
          }, 0, .01, this), this.a = PropertyFactory.getProp(t, e.a || {
            k: 0
          }, 0, degToRads, this), this.g = new GradientProperty(t, e.g, this), this.style = n, this.stops = [], this.setGradientData(n.pElem, e), this.setGradientOpacity(e, n), this._isAnimated = !!this._isAnimated
        }, SVGGradientFillStyleData.prototype.setGradientData = function(t, e) {
          var n = createElementID(),
            r = createNS(1 === e.t ? "linearGradient" : "radialGradient");
          r.setAttribute("id", n), r.setAttribute("spreadMethod", "pad"), r.setAttribute("gradientUnits", "userSpaceOnUse");
          var i, a, s, o = [];
          for (s = 4 * e.g.p, a = 0; a < s; a += 4) i = createNS("stop"), r.appendChild(i), o.push(i);
          t.setAttribute("gf" === e.ty ? "fill" : "stroke", "url(" + getLocationHref() + "#" + n + ")"), this.gf = r, this.cst = o
        }, SVGGradientFillStyleData.prototype.setGradientOpacity = function(t, e) {
          if (this.g._hasOpacity && !this.g._collapsable) {
            var n, r, i, a = createNS("mask"),
              s = createNS("path");
            a.appendChild(s);
            var o = createElementID(),
              l = createElementID();
            a.setAttribute("id", l);
            var u = createNS(1 === t.t ? "linearGradient" : "radialGradient");
            u.setAttribute("id", o), u.setAttribute("spreadMethod", "pad"), u.setAttribute("gradientUnits", "userSpaceOnUse"), i = t.g.k.k[0].s ? t.g.k.k[0].s.length : t.g.k.k.length;
            var h = this.stops;
            for (r = 4 * t.g.p; r < i; r += 2)(n = createNS("stop")).setAttribute("stop-color", "rgb(255,255,255)"), u.appendChild(n), h.push(n);
            s.setAttribute("gf" === t.ty ? "fill" : "stroke", "url(" + getLocationHref() + "#" + o + ")"), "gs" === t.ty && (s.setAttribute("stroke-linecap", lineCapEnum[t.lc || 2]), s.setAttribute("stroke-linejoin", lineJoinEnum[t.lj || 2]), 1 === t.lj && s.setAttribute("stroke-miterlimit", t.ml)), this.of = u, this.ms = a, this.ost = h, this.maskId = l, e.msElem = s
          }
        }, extendPrototype([DynamicPropertyContainer], SVGGradientFillStyleData), extendPrototype([SVGGradientFillStyleData, DynamicPropertyContainer], SVGGradientStrokeStyleData);
        var buildShapeString = function(t, e, n, r) {
            if (0 === e) return "";
            var i, a = t.o,
              s = t.i,
              o = t.v,
              l = " M" + r.applyToPointStringified(o[0][0], o[0][1]);
            for (i = 1; i < e; i += 1) l += " C" + r.applyToPointStringified(a[i - 1][0], a[i - 1][1]) + " " + r.applyToPointStringified(s[i][0], s[i][1]) + " " + r.applyToPointStringified(o[i][0], o[i][1]);
            return n && e && (l += " C" + r.applyToPointStringified(a[i - 1][0], a[i - 1][1]) + " " + r.applyToPointStringified(s[0][0], s[0][1]) + " " + r.applyToPointStringified(o[0][0], o[0][1]), l += "z"), l
          },
          SVGElementsRenderer = function() {
            var t = new Matrix,
              e = new Matrix;

            function n(t, e, n) {
              (n || e.transform.op._mdf) && e.transform.container.setAttribute("opacity", e.transform.op.v), (n || e.transform.mProps._mdf) && e.transform.container.setAttribute("transform", e.transform.mProps.v.to2dCSS())
            }

            function r() {}

            function i(n, r, i) {
              var a, s, o, l, u, h, c, p, f, d, m = r.styles.length,
                v = r.lvl;
              for (h = 0; h < m; h += 1) {
                if (l = r.sh._mdf || i, r.styles[h].lvl < v) {
                  for (p = e.reset(), f = v - r.styles[h].lvl, d = r.transformers.length - 1; !l && f > 0;) l = r.transformers[d].mProps._mdf || l, f -= 1, d -= 1;
                  if (l)
                    for (f = v - r.styles[h].lvl, d = r.transformers.length - 1; f > 0;) p.multiply(r.transformers[d].mProps.v), f -= 1, d -= 1
                } else p = t;
                if (s = (c = r.sh.paths)._length, l) {
                  for (o = "", a = 0; a < s; a += 1)(u = c.shapes[a]) && u._length && (o += buildShapeString(u, u._length, u.c, p));
                  r.caches[h] = o
                } else o = r.caches[h];
                r.styles[h].d += !0 === n.hd ? "" : o, r.styles[h]._mdf = l || r.styles[h]._mdf
              }
            }

            function a(t, e, n) {
              var r = e.style;
              (e.c._mdf || n) && r.pElem.setAttribute("fill", "rgb(" + bmFloor(e.c.v[0]) + "," + bmFloor(e.c.v[1]) + "," + bmFloor(e.c.v[2]) + ")"), (e.o._mdf || n) && r.pElem.setAttribute("fill-opacity", e.o.v)
            }

            function s(t, e, n) {
              o(t, e, n), l(0, e, n)
            }

            function o(t, e, n) {
              var r, i, a, s, o, l = e.gf,
                u = e.g._hasOpacity,
                h = e.s.v,
                c = e.e.v;
              if (e.o._mdf || n) {
                var p = "gf" === t.ty ? "fill-opacity" : "stroke-opacity";
                e.style.pElem.setAttribute(p, e.o.v)
              }
              if (e.s._mdf || n) {
                var f = 1 === t.t ? "x1" : "cx",
                  d = "x1" === f ? "y1" : "cy";
                l.setAttribute(f, h[0]), l.setAttribute(d, h[1]), u && !e.g._collapsable && (e.of.setAttribute(f, h[0]), e.of.setAttribute(d, h[1]))
              }
              if (e.g._cmdf || n) {
                r = e.cst;
                var m = e.g.c;
                for (a = r.length, i = 0; i < a; i += 1)(s = r[i]).setAttribute("offset", m[4 * i] + "%"), s.setAttribute("stop-color", "rgb(" + m[4 * i + 1] + "," + m[4 * i + 2] + "," + m[4 * i + 3] + ")")
              }
              if (u && (e.g._omdf || n)) {
                var v = e.g.o;
                for (a = (r = e.g._collapsable ? e.cst : e.ost).length, i = 0; i < a; i += 1) s = r[i], e.g._collapsable || s.setAttribute("offset", v[2 * i] + "%"), s.setAttribute("stop-opacity", v[2 * i + 1])
              }
              if (1 === t.t)(e.e._mdf || n) && (l.setAttribute("x2", c[0]), l.setAttribute("y2", c[1]), u && !e.g._collapsable && (e.of.setAttribute("x2", c[0]), e.of.setAttribute("y2", c[1])));
              else if ((e.s._mdf || e.e._mdf || n) && (o = Math.sqrt(Math.pow(h[0] - c[0], 2) + Math.pow(h[1] - c[1], 2)), l.setAttribute("r", o), u && !e.g._collapsable && e.of.setAttribute("r", o)), e.e._mdf || e.h._mdf || e.a._mdf || n) {
                o || (o = Math.sqrt(Math.pow(h[0] - c[0], 2) + Math.pow(h[1] - c[1], 2)));
                var g = Math.atan2(c[1] - h[1], c[0] - h[0]),
                  y = e.h.v;
                y >= 1 ? y = .99 : y <= -1 && (y = -.99);
                var b = o * y,
                  x = Math.cos(g + e.a.v) * b + h[0],
                  S = Math.sin(g + e.a.v) * b + h[1];
                l.setAttribute("fx", x), l.setAttribute("fy", S), u && !e.g._collapsable && (e.of.setAttribute("fx", x), e.of.setAttribute("fy", S))
              }
            }

            function l(t, e, n) {
              var r = e.style,
                i = e.d;
              i && (i._mdf || n) && i.dashStr && (r.pElem.setAttribute("stroke-dasharray", i.dashStr), r.pElem.setAttribute("stroke-dashoffset", i.dashoffset[0])), e.c && (e.c._mdf || n) && r.pElem.setAttribute("stroke", "rgb(" + bmFloor(e.c.v[0]) + "," + bmFloor(e.c.v[1]) + "," + bmFloor(e.c.v[2]) + ")"), (e.o._mdf || n) && r.pElem.setAttribute("stroke-opacity", e.o.v), (e.w._mdf || n) && (r.pElem.setAttribute("stroke-width", e.w.v), r.msElem && r.msElem.setAttribute("stroke-width", e.w.v))
            }
            return {
              createRenderFunction: function(t) {
                switch (t.ty) {
                  case "fl":
                    return a;
                  case "gf":
                    return o;
                  case "gs":
                    return s;
                  case "st":
                    return l;
                  case "sh":
                  case "el":
                  case "rc":
                  case "sr":
                    return i;
                  case "tr":
                    return n;
                  case "no":
                    return r;
                  default:
                    return null
                }
              }
            }
          }();

        function SVGShapeElement(t, e, n) {
          this.shapes = [], this.shapesData = t.shapes, this.stylesList = [], this.shapeModifiers = [], this.itemsData = [], this.processedElements = [], this.animatedContents = [], this.initElement(t, e, n), this.prevViewData = []
        }

        function LetterProps(t, e, n, r, i, a) {
          this.o = t, this.sw = e, this.sc = n, this.fc = r, this.m = i, this.p = a, this._mdf = {
            o: !0,
            sw: !!e,
            sc: !!n,
            fc: !!r,
            m: !0,
            p: !0
          }
        }

        function TextProperty(t, e) {
          this._frameId = initialDefaultFrame, this.pv = "", this.v = "", this.kf = !1, this._isFirstFrame = !0, this._mdf = !1, e.d && e.d.sid && (e.d = t.globalData.slotManager.getProp(e.d)), this.data = e, this.elem = t, this.comp = this.elem.comp, this.keysIndex = 0, this.canResize = !1, this.minimumFontSize = 1, this.effectsSequence = [], this.currentData = {
            ascent: 0,
            boxWidth: this.defaultBoxWidth,
            f: "",
            fStyle: "",
            fWeight: "",
            fc: "",
            j: "",
            justifyOffset: "",
            l: [],
            lh: 0,
            lineWidths: [],
            ls: "",
            of: "",
            s: "",
            sc: "",
            sw: 0,
            t: 0,
            tr: 0,
            sz: 0,
            ps: null,
            fillColorAnim: !1,
            strokeColorAnim: !1,
            strokeWidthAnim: !1,
            yOffset: 0,
            finalSize: 0,
            finalText: [],
            finalLineHeight: 0,
            __complete: !1
          }, this.copyData(this.currentData, this.data.d.k[0].s), this.searchProperty() || this.completeTextData(this.currentData)
        }
        extendPrototype([BaseElement, TransformElement, SVGBaseElement, IShapeElement, HierarchyElement, FrameElement, RenderableDOMElement], SVGShapeElement), SVGShapeElement.prototype.initSecondaryElement = function() {}, SVGShapeElement.prototype.identityMatrix = new Matrix, SVGShapeElement.prototype.buildExpressionInterface = function() {}, SVGShapeElement.prototype.createContent = function() {
          this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.layerElement, 0, [], !0), this.filterUniqueShapes()
        }, SVGShapeElement.prototype.filterUniqueShapes = function() {
          var t, e, n, r, i = this.shapes.length,
            a = this.stylesList.length,
            s = [],
            o = !1;
          for (n = 0; n < a; n += 1) {
            for (r = this.stylesList[n], o = !1, s.length = 0, t = 0; t < i; t += 1) - 1 !== (e = this.shapes[t]).styles.indexOf(r) && (s.push(e), o = e._isAnimated || o);
            s.length > 1 && o && this.setShapesAsAnimated(s)
          }
        }, SVGShapeElement.prototype.setShapesAsAnimated = function(t) {
          var e, n = t.length;
          for (e = 0; e < n; e += 1) t[e].setAsAnimated()
        }, SVGShapeElement.prototype.createStyleElement = function(t, e) {
          var n, r = new SVGStyleData(t, e),
            i = r.pElem;
          return "st" === t.ty ? n = new SVGStrokeStyleData(this, t, r) : "fl" === t.ty ? n = new SVGFillStyleData(this, t, r) : "gf" === t.ty || "gs" === t.ty ? (n = new("gf" === t.ty ? SVGGradientFillStyleData : SVGGradientStrokeStyleData)(this, t, r), this.globalData.defs.appendChild(n.gf), n.maskId && (this.globalData.defs.appendChild(n.ms), this.globalData.defs.appendChild(n.of), i.setAttribute("mask", "url(" + getLocationHref() + "#" + n.maskId + ")"))) : "no" === t.ty && (n = new SVGNoStyleData(this, t, r)), "st" !== t.ty && "gs" !== t.ty || (i.setAttribute("stroke-linecap", lineCapEnum[t.lc || 2]), i.setAttribute("stroke-linejoin", lineJoinEnum[t.lj || 2]), i.setAttribute("fill-opacity", "0"), 1 === t.lj && i.setAttribute("stroke-miterlimit", t.ml)), 2 === t.r && i.setAttribute("fill-rule", "evenodd"), t.ln && i.setAttribute("id", t.ln), t.cl && i.setAttribute("class", t.cl), t.bm && (i.style["mix-blend-mode"] = getBlendMode(t.bm)), this.stylesList.push(r), this.addToAnimatedContents(t, n), n
        }, SVGShapeElement.prototype.createGroupElement = function(t) {
          var e = new ShapeGroupData;
          return t.ln && e.gr.setAttribute("id", t.ln), t.cl && e.gr.setAttribute("class", t.cl), t.bm && (e.gr.style["mix-blend-mode"] = getBlendMode(t.bm)), e
        }, SVGShapeElement.prototype.createTransformElement = function(t, e) {
          var n = TransformPropertyFactory.getTransformProperty(this, t, this),
            r = new SVGTransformData(n, n.o, e);
          return this.addToAnimatedContents(t, r), r
        }, SVGShapeElement.prototype.createShapeElement = function(t, e, n) {
          var r = 4;
          "rc" === t.ty ? r = 5 : "el" === t.ty ? r = 6 : "sr" === t.ty && (r = 7);
          var i = new SVGShapeData(e, n, ShapePropertyFactory.getShapeProp(this, t, r, this));
          return this.shapes.push(i), this.addShapeToModifiers(i), this.addToAnimatedContents(t, i), i
        }, SVGShapeElement.prototype.addToAnimatedContents = function(t, e) {
          for (var n = 0, r = this.animatedContents.length; n < r;) {
            if (this.animatedContents[n].element === e) return;
            n += 1
          }
          this.animatedContents.push({
            fn: SVGElementsRenderer.createRenderFunction(t),
            element: e,
            data: t
          })
        }, SVGShapeElement.prototype.setElementStyles = function(t) {
          var e, n = t.styles,
            r = this.stylesList.length;
          for (e = 0; e < r; e += 1) this.stylesList[e].closed || n.push(this.stylesList[e])
        }, SVGShapeElement.prototype.reloadShapes = function() {
          var t;
          this._isFirstFrame = !0;
          var e = this.itemsData.length;
          for (t = 0; t < e; t += 1) this.prevViewData[t] = this.itemsData[t];
          for (this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.layerElement, 0, [], !0), this.filterUniqueShapes(), e = this.dynamicProperties.length, t = 0; t < e; t += 1) this.dynamicProperties[t].getValue();
          this.renderModifiers()
        }, SVGShapeElement.prototype.searchShapes = function(t, e, n, r, i, a, s) {
          var o, l, u, h, c, p, f = [].concat(a),
            d = t.length - 1,
            m = [],
            v = [];
          for (o = d; o >= 0; o -= 1) {
            if ((p = this.searchProcessedElement(t[o])) ? e[o] = n[p - 1] : t[o]._render = s, "fl" === t[o].ty || "st" === t[o].ty || "gf" === t[o].ty || "gs" === t[o].ty || "no" === t[o].ty) p ? e[o].style.closed = !1 : e[o] = this.createStyleElement(t[o], i), t[o]._render && e[o].style.pElem.parentNode !== r && r.appendChild(e[o].style.pElem), m.push(e[o].style);
            else if ("gr" === t[o].ty) {
              if (p)
                for (u = e[o].it.length, l = 0; l < u; l += 1) e[o].prevViewData[l] = e[o].it[l];
              else e[o] = this.createGroupElement(t[o]);
              this.searchShapes(t[o].it, e[o].it, e[o].prevViewData, e[o].gr, i + 1, f, s), t[o]._render && e[o].gr.parentNode !== r && r.appendChild(e[o].gr)
            } else "tr" === t[o].ty ? (p || (e[o] = this.createTransformElement(t[o], r)), h = e[o].transform, f.push(h)) : "sh" === t[o].ty || "rc" === t[o].ty || "el" === t[o].ty || "sr" === t[o].ty ? (p || (e[o] = this.createShapeElement(t[o], f, i)), this.setElementStyles(e[o])) : "tm" === t[o].ty || "rd" === t[o].ty || "ms" === t[o].ty || "pb" === t[o].ty || "zz" === t[o].ty || "op" === t[o].ty ? (p ? (c = e[o]).closed = !1 : ((c = ShapeModifiers.getModifier(t[o].ty)).init(this, t[o]), e[o] = c, this.shapeModifiers.push(c)), v.push(c)) : "rp" === t[o].ty && (p ? (c = e[o]).closed = !0 : (c = ShapeModifiers.getModifier(t[o].ty), e[o] = c, c.init(this, t, o, e), this.shapeModifiers.push(c), s = !1), v.push(c));
            this.addProcessedElement(t[o], o + 1)
          }
          for (d = m.length, o = 0; o < d; o += 1) m[o].closed = !0;
          for (d = v.length, o = 0; o < d; o += 1) v[o].closed = !0
        }, SVGShapeElement.prototype.renderInnerContent = function() {
          var t;
          this.renderModifiers();
          var e = this.stylesList.length;
          for (t = 0; t < e; t += 1) this.stylesList[t].reset();
          for (this.renderShape(), t = 0; t < e; t += 1)(this.stylesList[t]._mdf || this._isFirstFrame) && (this.stylesList[t].msElem && (this.stylesList[t].msElem.setAttribute("d", this.stylesList[t].d), this.stylesList[t].d = "M0 0" + this.stylesList[t].d), this.stylesList[t].pElem.setAttribute("d", this.stylesList[t].d || "M0 0"))
        }, SVGShapeElement.prototype.renderShape = function() {
          var t, e, n = this.animatedContents.length;
          for (t = 0; t < n; t += 1) e = this.animatedContents[t], (this._isFirstFrame || e.element._isAnimated) && !0 !== e.data && e.fn(e.data, e.element, this._isFirstFrame)
        }, SVGShapeElement.prototype.destroy = function() {
          this.destroyBaseElement(), this.shapesData = null, this.itemsData = null
        }, LetterProps.prototype.update = function(t, e, n, r, i, a) {
          this._mdf.o = !1, this._mdf.sw = !1, this._mdf.sc = !1, this._mdf.fc = !1, this._mdf.m = !1, this._mdf.p = !1;
          var s = !1;
          return this.o !== t && (this.o = t, this._mdf.o = !0, s = !0), this.sw !== e && (this.sw = e, this._mdf.sw = !0, s = !0), this.sc !== n && (this.sc = n, this._mdf.sc = !0, s = !0), this.fc !== r && (this.fc = r, this._mdf.fc = !0, s = !0), this.m !== i && (this.m = i, this._mdf.m = !0, s = !0), !a.length || this.p[0] === a[0] && this.p[1] === a[1] && this.p[4] === a[4] && this.p[5] === a[5] && this.p[12] === a[12] && this.p[13] === a[13] || (this.p = a, this._mdf.p = !0, s = !0), s
        }, TextProperty.prototype.defaultBoxWidth = [0, 0], TextProperty.prototype.copyData = function(t, e) {
          for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
          return t
        }, TextProperty.prototype.setCurrentData = function(t) {
          t.__complete || this.completeTextData(t), this.currentData = t, this.currentData.boxWidth = this.currentData.boxWidth || this.defaultBoxWidth, this._mdf = !0
        }, TextProperty.prototype.searchProperty = function() {
          return this.searchKeyframes()
        }, TextProperty.prototype.searchKeyframes = function() {
          return this.kf = this.data.d.k.length > 1, this.kf && this.addEffect(this.getKeyframeValue.bind(this)), this.kf
        }, TextProperty.prototype.addEffect = function(t) {
          this.effectsSequence.push(t), this.elem.addDynamicProperty(this)
        }, TextProperty.prototype.getValue = function(t) {
          if (this.elem.globalData.frameId !== this.frameId && this.effectsSequence.length || t) {
            this.currentData.t = this.data.d.k[this.keysIndex].s.t;
            var e = this.currentData,
              n = this.keysIndex;
            if (this.lock) this.setCurrentData(this.currentData);
            else {
              var r;
              this.lock = !0, this._mdf = !1;
              var i = this.effectsSequence.length,
                a = t || this.data.d.k[this.keysIndex].s;
              for (r = 0; r < i; r += 1) a = n !== this.keysIndex ? this.effectsSequence[r](a, a.t) : this.effectsSequence[r](this.currentData, a.t);
              e !== a && this.setCurrentData(a), this.v = this.currentData, this.pv = this.v, this.lock = !1, this.frameId = this.elem.globalData.frameId
            }
          }
        }, TextProperty.prototype.getKeyframeValue = function() {
          for (var t = this.data.d.k, e = this.elem.comp.renderedFrame, n = 0, r = t.length; n <= r - 1 && !(n === r - 1 || t[n + 1].t > e);) n += 1;
          return this.keysIndex !== n && (this.keysIndex = n), this.data.d.k[this.keysIndex].s
        }, TextProperty.prototype.buildFinalText = function(t) {
          for (var e, n, r = [], i = 0, a = t.length, s = !1, o = !1, l = ""; i < a;) s = o, o = !1, e = t.charCodeAt(i), l = t.charAt(i), FontManager.isCombinedCharacter(e) ? s = !0 : e >= 55296 && e <= 56319 ? FontManager.isRegionalFlag(t, i) ? l = t.substr(i, 14) : (n = t.charCodeAt(i + 1)) >= 56320 && n <= 57343 && (FontManager.isModifier(e, n) ? (l = t.substr(i, 2), s = !0) : l = FontManager.isFlagEmoji(t.substr(i, 4)) ? t.substr(i, 4) : t.substr(i, 2)) : e > 56319 ? (n = t.charCodeAt(i + 1), FontManager.isVariationSelector(e) && (s = !0)) : FontManager.isZeroWidthJoiner(e) && (s = !0, o = !0), s ? (r[r.length - 1] += l, s = !1) : r.push(l), i += l.length;
          return r
        }, TextProperty.prototype.completeTextData = function(t) {
          t.__complete = !0;
          var e, n, r, i, a, s, o, l = this.elem.globalData.fontManager,
            u = this.data,
            h = [],
            c = 0,
            p = u.m.g,
            f = 0,
            d = 0,
            m = 0,
            v = [],
            g = 0,
            y = 0,
            b = l.getFontByName(t.f),
            x = 0,
            S = getFontProperties(b);
          t.fWeight = S.weight, t.fStyle = S.style, t.finalSize = t.s, t.finalText = this.buildFinalText(t.t), n = t.finalText.length, t.finalLineHeight = t.lh;
          var E, P = t.tr / 1e3 * t.finalSize;
          if (t.sz)
            for (var C, w, M = !0, T = t.sz[0], A = t.sz[1]; M;) {
              C = 0, g = 0, n = (w = this.buildFinalText(t.t)).length, P = t.tr / 1e3 * t.finalSize;
              var k = -1;
              for (e = 0; e < n; e += 1) E = w[e].charCodeAt(0), r = !1, " " === w[e] ? k = e : 13 !== E && 3 !== E || (g = 0, r = !0, C += t.finalLineHeight || 1.2 * t.finalSize), l.chars ? (o = l.getCharData(w[e], b.fStyle, b.fFamily), x = r ? 0 : o.w * t.finalSize / 100) : x = l.measureText(w[e], t.f, t.finalSize), g + x > T && " " !== w[e] ? (-1 === k ? n += 1 : e = k, C += t.finalLineHeight || 1.2 * t.finalSize, w.splice(e, k === e ? 1 : 0, "\r"), k = -1, g = 0) : (g += x, g += P);
              C += b.ascent * t.finalSize / 100, this.canResize && t.finalSize > this.minimumFontSize && A < C ? (t.finalSize -= 1, t.finalLineHeight = t.finalSize * t.lh / t.s) : (t.finalText = w, n = t.finalText.length, M = !1)
            }
          g = -P, x = 0;
          var _, D = 0;
          for (e = 0; e < n; e += 1)
            if (r = !1, 13 === (E = (_ = t.finalText[e]).charCodeAt(0)) || 3 === E ? (D = 0, v.push(g), y = g > y ? g : y, g = -2 * P, i = "", r = !0, m += 1) : i = _, l.chars ? (o = l.getCharData(_, b.fStyle, l.getFontByName(t.f).fFamily), x = r ? 0 : o.w * t.finalSize / 100) : x = l.measureText(i, t.f, t.finalSize), " " === _ ? D += x + P : (g += x + P + D, D = 0), h.push({
                l: x,
                an: x,
                add: f,
                n: r,
                anIndexes: [],
                val: i,
                line: m,
                animatorJustifyOffset: 0
              }), 2 == p) {
              if (f += x, "" === i || " " === i || e === n - 1) {
                for ("" !== i && " " !== i || (f -= x); d <= e;) h[d].an = f, h[d].ind = c, h[d].extra = x, d += 1;
                c += 1, f = 0
              }
            } else if (3 == p) {
            if (f += x, "" === i || e === n - 1) {
              for ("" === i && (f -= x); d <= e;) h[d].an = f, h[d].ind = c, h[d].extra = x, d += 1;
              f = 0, c += 1
            }
          } else h[c].ind = c, h[c].extra = 0, c += 1;
          if (t.l = h, y = g > y ? g : y, v.push(g), t.sz) t.boxWidth = t.sz[0], t.justifyOffset = 0;
          else switch (t.boxWidth = y, t.j) {
            case 1:
              t.justifyOffset = -t.boxWidth;
              break;
            case 2:
              t.justifyOffset = -t.boxWidth / 2;
              break;
            default:
              t.justifyOffset = 0
          }
          t.lineWidths = v;
          var I, F, O, V, R = u.a;
          s = R.length;
          var L = [];
          for (a = 0; a < s; a += 1) {
            for ((I = R[a]).a.sc && (t.strokeColorAnim = !0), I.a.sw && (t.strokeWidthAnim = !0), (I.a.fc || I.a.fh || I.a.fs || I.a.fb) && (t.fillColorAnim = !0), V = 0, O = I.s.b, e = 0; e < n; e += 1)(F = h[e]).anIndexes[a] = V, (1 == O && "" !== F.val || 2 == O && "" !== F.val && " " !== F.val || 3 == O && (F.n || " " == F.val || e == n - 1) || 4 == O && (F.n || e == n - 1)) && (1 === I.s.rn && L.push(V), V += 1);
            u.a[a].s.totalChars = V;
            var B, N = -1;
            if (1 === I.s.rn)
              for (e = 0; e < n; e += 1) N != (F = h[e]).anIndexes[a] && (N = F.anIndexes[a], B = L.splice(Math.floor(Math.random() * L.length), 1)[0]), F.anIndexes[a] = B
          }
          t.yOffset = t.finalLineHeight || 1.2 * t.finalSize, t.ls = t.ls || 0, t.ascent = b.ascent * t.finalSize / 100
        }, TextProperty.prototype.updateDocumentData = function(t, e) {
          e = void 0 === e ? this.keysIndex : e;
          var n = this.copyData({}, this.data.d.k[e].s);
          n = this.copyData(n, t), this.data.d.k[e].s = n, this.recalculate(e), this.setCurrentData(n), this.elem.addDynamicProperty(this)
        }, TextProperty.prototype.recalculate = function(t) {
          var e = this.data.d.k[t].s;
          e.__complete = !1, this.keysIndex = 0, this._isFirstFrame = !0, this.getValue(e)
        }, TextProperty.prototype.canResizeFont = function(t) {
          this.canResize = t, this.recalculate(this.keysIndex), this.elem.addDynamicProperty(this)
        }, TextProperty.prototype.setMinimumFontSize = function(t) {
          this.minimumFontSize = Math.floor(t) || 1, this.recalculate(this.keysIndex), this.elem.addDynamicProperty(this)
        };
        var TextSelectorProp = function() {
          var t = Math.max,
            e = Math.min,
            n = Math.floor;

          function r(t, e) {
            this._currentTextLength = -1, this.k = !1, this.data = e, this.elem = t, this.comp = t.comp, this.finalS = 0, this.finalE = 0, this.initDynamicPropertyContainer(t), this.s = PropertyFactory.getProp(t, e.s || {
              k: 0
            }, 0, 0, this), this.e = "e" in e ? PropertyFactory.getProp(t, e.e, 0, 0, this) : {
              v: 100
            }, this.o = PropertyFactory.getProp(t, e.o || {
              k: 0
            }, 0, 0, this), this.xe = PropertyFactory.getProp(t, e.xe || {
              k: 0
            }, 0, 0, this), this.ne = PropertyFactory.getProp(t, e.ne || {
              k: 0
            }, 0, 0, this), this.sm = PropertyFactory.getProp(t, e.sm || {
              k: 100
            }, 0, 0, this), this.a = PropertyFactory.getProp(t, e.a, 0, .01, this), this.dynamicProperties.length || this.getValue()
          }
          return r.prototype = {
            getMult: function(r) {
              this._currentTextLength !== this.elem.textProperty.currentData.l.length && this.getValue();
              var i = 0,
                a = 0,
                s = 1,
                o = 1;
              this.ne.v > 0 ? i = this.ne.v / 100 : a = -this.ne.v / 100, this.xe.v > 0 ? s = 1 - this.xe.v / 100 : o = 1 + this.xe.v / 100;
              var l = BezierFactory.getBezierEasing(i, a, s, o).get,
                u = 0,
                h = this.finalS,
                c = this.finalE,
                p = this.data.sh;
              if (2 === p) u = l(u = c === h ? r >= c ? 1 : 0 : t(0, e(.5 / (c - h) + (r - h) / (c - h), 1)));
              else if (3 === p) u = l(u = c === h ? r >= c ? 0 : 1 : 1 - t(0, e(.5 / (c - h) + (r - h) / (c - h), 1)));
              else if (4 === p) c === h ? u = 0 : (u = t(0, e(.5 / (c - h) + (r - h) / (c - h), 1))) < .5 ? u *= 2 : u = 1 - 2 * (u - .5), u = l(u);
              else if (5 === p) {
                if (c === h) u = 0;
                else {
                  var f = c - h,
                    d = -f / 2 + (r = e(t(0, r + .5 - h), c - h)),
                    m = f / 2;
                  u = Math.sqrt(1 - d * d / (m * m))
                }
                u = l(u)
              } else 6 === p ? (c === h ? u = 0 : (r = e(t(0, r + .5 - h), c - h), u = (1 + Math.cos(Math.PI + 2 * Math.PI * r / (c - h))) / 2), u = l(u)) : (r >= n(h) && (u = t(0, e(r - h < 0 ? e(c, 1) - (h - r) : c - r, 1))), u = l(u));
              if (100 !== this.sm.v) {
                var v = .01 * this.sm.v;
                0 === v && (v = 1e-8);
                var g = .5 - .5 * v;
                u < g ? u = 0 : (u = (u - g) / v) > 1 && (u = 1)
              }
              return u * this.a.v
            },
            getValue: function(t) {
              this.iterateDynamicProperties(), this._mdf = t || this._mdf, this._currentTextLength = this.elem.textProperty.currentData.l.length || 0, t && 2 === this.data.r && (this.e.v = this._currentTextLength);
              var e = 2 === this.data.r ? 1 : 100 / this.data.totalChars,
                n = this.o.v / e,
                r = this.s.v / e + n,
                i = this.e.v / e + n;
              if (r > i) {
                var a = r;
                r = i, i = a
              }
              this.finalS = r, this.finalE = i
            }
          }, extendPrototype([DynamicPropertyContainer], r), {
            getTextSelectorProp: function(t, e, n) {
              return new r(t, e, n)
            }
          }
        }();

        function TextAnimatorDataProperty(t, e, n) {
          var r = {
              propType: !1
            },
            i = PropertyFactory.getProp,
            a = e.a;
          this.a = {
            r: a.r ? i(t, a.r, 0, degToRads, n) : r,
            rx: a.rx ? i(t, a.rx, 0, degToRads, n) : r,
            ry: a.ry ? i(t, a.ry, 0, degToRads, n) : r,
            sk: a.sk ? i(t, a.sk, 0, degToRads, n) : r,
            sa: a.sa ? i(t, a.sa, 0, degToRads, n) : r,
            s: a.s ? i(t, a.s, 1, .01, n) : r,
            a: a.a ? i(t, a.a, 1, 0, n) : r,
            o: a.o ? i(t, a.o, 0, .01, n) : r,
            p: a.p ? i(t, a.p, 1, 0, n) : r,
            sw: a.sw ? i(t, a.sw, 0, 0, n) : r,
            sc: a.sc ? i(t, a.sc, 1, 0, n) : r,
            fc: a.fc ? i(t, a.fc, 1, 0, n) : r,
            fh: a.fh ? i(t, a.fh, 0, 0, n) : r,
            fs: a.fs ? i(t, a.fs, 0, .01, n) : r,
            fb: a.fb ? i(t, a.fb, 0, .01, n) : r,
            t: a.t ? i(t, a.t, 0, 0, n) : r
          }, this.s = TextSelectorProp.getTextSelectorProp(t, e.s, n), this.s.t = e.s.t
        }

        function TextAnimatorProperty(t, e, n) {
          this._isFirstFrame = !0, this._hasMaskedPath = !1, this._frameId = -1, this._textData = t, this._renderType = e, this._elem = n, this._animatorsData = createSizedArray(this._textData.a.length), this._pathData = {}, this._moreOptions = {
            alignment: {}
          }, this.renderedLetters = [], this.lettersChangedFlag = !1, this.initDynamicPropertyContainer(n)
        }

        function ITextElement() {}
        TextAnimatorProperty.prototype.searchProperties = function() {
          var t, e, n = this._textData.a.length,
            r = PropertyFactory.getProp;
          for (t = 0; t < n; t += 1) e = this._textData.a[t], this._animatorsData[t] = new TextAnimatorDataProperty(this._elem, e, this);
          this._textData.p && "m" in this._textData.p ? (this._pathData = {
            a: r(this._elem, this._textData.p.a, 0, 0, this),
            f: r(this._elem, this._textData.p.f, 0, 0, this),
            l: r(this._elem, this._textData.p.l, 0, 0, this),
            r: r(this._elem, this._textData.p.r, 0, 0, this),
            p: r(this._elem, this._textData.p.p, 0, 0, this),
            m: this._elem.maskManager.getMaskProperty(this._textData.p.m)
          }, this._hasMaskedPath = !0) : this._hasMaskedPath = !1, this._moreOptions.alignment = r(this._elem, this._textData.m.a, 1, 0, this)
        }, TextAnimatorProperty.prototype.getMeasures = function(t, e) {
          if (this.lettersChangedFlag = e, this._mdf || this._isFirstFrame || e || this._hasMaskedPath && this._pathData.m._mdf) {
            this._isFirstFrame = !1;
            var n, r, i, a, s, o, l, u, h, c, p, f, d, m, v, g, y, b, x, S = this._moreOptions.alignment.v,
              E = this._animatorsData,
              P = this._textData,
              C = this.mHelper,
              w = this._renderType,
              M = this.renderedLetters.length,
              T = t.l;
            if (this._hasMaskedPath) {
              if (x = this._pathData.m, !this._pathData.n || this._pathData._mdf) {
                var A, k = x.v;
                for (this._pathData.r.v && (k = k.reverse()), s = {
                    tLength: 0,
                    segments: []
                  }, a = k._length - 1, g = 0, i = 0; i < a; i += 1) A = bez.buildBezierData(k.v[i], k.v[i + 1], [k.o[i][0] - k.v[i][0], k.o[i][1] - k.v[i][1]], [k.i[i + 1][0] - k.v[i + 1][0], k.i[i + 1][1] - k.v[i + 1][1]]), s.tLength += A.segmentLength, s.segments.push(A), g += A.segmentLength;
                i = a, x.v.c && (A = bez.buildBezierData(k.v[i], k.v[0], [k.o[i][0] - k.v[i][0], k.o[i][1] - k.v[i][1]], [k.i[0][0] - k.v[0][0], k.i[0][1] - k.v[0][1]]), s.tLength += A.segmentLength, s.segments.push(A), g += A.segmentLength), this._pathData.pi = s
              }
              if (s = this._pathData.pi, o = this._pathData.f.v, p = 0, c = 1, u = 0, h = !0, m = s.segments, o < 0 && x.v.c)
                for (s.tLength < Math.abs(o) && (o = -Math.abs(o) % s.tLength), c = (d = m[p = m.length - 1].points).length - 1; o < 0;) o += d[c].partialLength, (c -= 1) < 0 && (c = (d = m[p -= 1].points).length - 1);
              f = (d = m[p].points)[c - 1], v = (l = d[c]).partialLength
            }
            a = T.length, n = 0, r = 0;
            var _, D, I, F, O, V = 1.2 * t.finalSize * .714,
              R = !0;
            I = E.length;
            var L, B, N, j, z, G, H, W, U, q, Y, $, K = -1,
              X = o,
              Z = p,
              J = c,
              Q = -1,
              tt = "",
              et = this.defaultPropsArray;
            if (2 === t.j || 1 === t.j) {
              var nt = 0,
                rt = 0,
                it = 2 === t.j ? -.5 : -1,
                at = 0,
                st = !0;
              for (i = 0; i < a; i += 1)
                if (T[i].n) {
                  for (nt && (nt += rt); at < i;) T[at].animatorJustifyOffset = nt, at += 1;
                  nt = 0, st = !0
                } else {
                  for (D = 0; D < I; D += 1)(_ = E[D].a).t.propType && (st && 2 === t.j && (rt += _.t.v * it), (O = E[D].s.getMult(T[i].anIndexes[D], P.a[D].s.totalChars)).length ? nt += _.t.v * O[0] * it : nt += _.t.v * O * it);
                  st = !1
                } for (nt && (nt += rt); at < i;) T[at].animatorJustifyOffset = nt, at += 1
            }
            for (i = 0; i < a; i += 1) {
              if (C.reset(), j = 1, T[i].n) n = 0, r += t.yOffset, r += R ? 1 : 0, o = X, R = !1, this._hasMaskedPath && (c = J, f = (d = m[p = Z].points)[c - 1], v = (l = d[c]).partialLength, u = 0), tt = "", Y = "", U = "", $ = "", et = this.defaultPropsArray;
              else {
                if (this._hasMaskedPath) {
                  if (Q !== T[i].line) {
                    switch (t.j) {
                      case 1:
                        o += g - t.lineWidths[T[i].line];
                        break;
                      case 2:
                        o += (g - t.lineWidths[T[i].line]) / 2
                    }
                    Q = T[i].line
                  }
                  K !== T[i].ind && (T[K] && (o += T[K].extra), o += T[i].an / 2, K = T[i].ind), o += S[0] * T[i].an * .005;
                  var ot = 0;
                  for (D = 0; D < I; D += 1)(_ = E[D].a).p.propType && ((O = E[D].s.getMult(T[i].anIndexes[D], P.a[D].s.totalChars)).length ? ot += _.p.v[0] * O[0] : ot += _.p.v[0] * O), _.a.propType && ((O = E[D].s.getMult(T[i].anIndexes[D], P.a[D].s.totalChars)).length ? ot += _.a.v[0] * O[0] : ot += _.a.v[0] * O);
                  for (h = !0, this._pathData.a.v && (o = .5 * T[0].an + (g - this._pathData.f.v - .5 * T[0].an - .5 * T[T.length - 1].an) * K / (a - 1), o += this._pathData.f.v); h;) u + v >= o + ot || !d ? (y = (o + ot - u) / l.partialLength, B = f.point[0] + (l.point[0] - f.point[0]) * y, N = f.point[1] + (l.point[1] - f.point[1]) * y, C.translate(-S[0] * T[i].an * .005, -S[1] * V * .01), h = !1) : d && (u += l.partialLength, (c += 1) >= d.length && (c = 0, m[p += 1] ? d = m[p].points : x.v.c ? (c = 0, d = m[p = 0].points) : (u -= l.partialLength, d = null)), d && (f = l, v = (l = d[c]).partialLength));
                  L = T[i].an / 2 - T[i].add, C.translate(-L, 0, 0)
                } else L = T[i].an / 2 - T[i].add, C.translate(-L, 0, 0), C.translate(-S[0] * T[i].an * .005, -S[1] * V * .01, 0);
                for (D = 0; D < I; D += 1)(_ = E[D].a).t.propType && (O = E[D].s.getMult(T[i].anIndexes[D], P.a[D].s.totalChars), 0 === n && 0 === t.j || (this._hasMaskedPath ? O.length ? o += _.t.v * O[0] : o += _.t.v * O : O.length ? n += _.t.v * O[0] : n += _.t.v * O));
                for (t.strokeWidthAnim && (G = t.sw || 0), t.strokeColorAnim && (z = t.sc ? [t.sc[0], t.sc[1], t.sc[2]] : [0, 0, 0]), t.fillColorAnim && t.fc && (H = [t.fc[0], t.fc[1], t.fc[2]]), D = 0; D < I; D += 1)(_ = E[D].a).a.propType && ((O = E[D].s.getMult(T[i].anIndexes[D], P.a[D].s.totalChars)).length ? C.translate(-_.a.v[0] * O[0], -_.a.v[1] * O[1], _.a.v[2] * O[2]) : C.translate(-_.a.v[0] * O, -_.a.v[1] * O, _.a.v[2] * O));
                for (D = 0; D < I; D += 1)(_ = E[D].a).s.propType && ((O = E[D].s.getMult(T[i].anIndexes[D], P.a[D].s.totalChars)).length ? C.scale(1 + (_.s.v[0] - 1) * O[0], 1 + (_.s.v[1] - 1) * O[1], 1) : C.scale(1 + (_.s.v[0] - 1) * O, 1 + (_.s.v[1] - 1) * O, 1));
                for (D = 0; D < I; D += 1) {
                  if (_ = E[D].a, O = E[D].s.getMult(T[i].anIndexes[D], P.a[D].s.totalChars), _.sk.propType && (O.length ? C.skewFromAxis(-_.sk.v * O[0], _.sa.v * O[1]) : C.skewFromAxis(-_.sk.v * O, _.sa.v * O)), _.r.propType && (O.length ? C.rotateZ(-_.r.v * O[2]) : C.rotateZ(-_.r.v * O)), _.ry.propType && (O.length ? C.rotateY(_.ry.v * O[1]) : C.rotateY(_.ry.v * O)), _.rx.propType && (O.length ? C.rotateX(_.rx.v * O[0]) : C.rotateX(_.rx.v * O)), _.o.propType && (O.length ? j += (_.o.v * O[0] - j) * O[0] : j += (_.o.v * O - j) * O), t.strokeWidthAnim && _.sw.propType && (O.length ? G += _.sw.v * O[0] : G += _.sw.v * O), t.strokeColorAnim && _.sc.propType)
                    for (W = 0; W < 3; W += 1) O.length ? z[W] += (_.sc.v[W] - z[W]) * O[0] : z[W] += (_.sc.v[W] - z[W]) * O;
                  if (t.fillColorAnim && t.fc) {
                    if (_.fc.propType)
                      for (W = 0; W < 3; W += 1) O.length ? H[W] += (_.fc.v[W] - H[W]) * O[0] : H[W] += (_.fc.v[W] - H[W]) * O;
                    _.fh.propType && (H = O.length ? addHueToRGB(H, _.fh.v * O[0]) : addHueToRGB(H, _.fh.v * O)), _.fs.propType && (H = O.length ? addSaturationToRGB(H, _.fs.v * O[0]) : addSaturationToRGB(H, _.fs.v * O)), _.fb.propType && (H = O.length ? addBrightnessToRGB(H, _.fb.v * O[0]) : addBrightnessToRGB(H, _.fb.v * O))
                  }
                }
                for (D = 0; D < I; D += 1)(_ = E[D].a).p.propType && (O = E[D].s.getMult(T[i].anIndexes[D], P.a[D].s.totalChars), this._hasMaskedPath ? O.length ? C.translate(0, _.p.v[1] * O[0], -_.p.v[2] * O[1]) : C.translate(0, _.p.v[1] * O, -_.p.v[2] * O) : O.length ? C.translate(_.p.v[0] * O[0], _.p.v[1] * O[1], -_.p.v[2] * O[2]) : C.translate(_.p.v[0] * O, _.p.v[1] * O, -_.p.v[2] * O));
                if (t.strokeWidthAnim && (U = G < 0 ? 0 : G), t.strokeColorAnim && (q = "rgb(" + Math.round(255 * z[0]) + "," + Math.round(255 * z[1]) + "," + Math.round(255 * z[2]) + ")"), t.fillColorAnim && t.fc && (Y = "rgb(" + Math.round(255 * H[0]) + "," + Math.round(255 * H[1]) + "," + Math.round(255 * H[2]) + ")"), this._hasMaskedPath) {
                  if (C.translate(0, -t.ls), C.translate(0, S[1] * V * .01 + r, 0), this._pathData.p.v) {
                    b = (l.point[1] - f.point[1]) / (l.point[0] - f.point[0]);
                    var lt = 180 * Math.atan(b) / Math.PI;
                    l.point[0] < f.point[0] && (lt += 180), C.rotate(-lt * Math.PI / 180)
                  }
                  C.translate(B, N, 0), o -= S[0] * T[i].an * .005, T[i + 1] && K !== T[i + 1].ind && (o += T[i].an / 2, o += .001 * t.tr * t.finalSize)
                } else {
                  switch (C.translate(n, r, 0), t.ps && C.translate(t.ps[0], t.ps[1] + t.ascent, 0), t.j) {
                    case 1:
                      C.translate(T[i].animatorJustifyOffset + t.justifyOffset + (t.boxWidth - t.lineWidths[T[i].line]), 0, 0);
                      break;
                    case 2:
                      C.translate(T[i].animatorJustifyOffset + t.justifyOffset + (t.boxWidth - t.lineWidths[T[i].line]) / 2, 0, 0)
                  }
                  C.translate(0, -t.ls), C.translate(L, 0, 0), C.translate(S[0] * T[i].an * .005, S[1] * V * .01, 0), n += T[i].l + .001 * t.tr * t.finalSize
                }
                "html" === w ? tt = C.toCSS() : "svg" === w ? tt = C.to2dCSS() : et = [C.props[0], C.props[1], C.props[2], C.props[3], C.props[4], C.props[5], C.props[6], C.props[7], C.props[8], C.props[9], C.props[10], C.props[11], C.props[12], C.props[13], C.props[14], C.props[15]], $ = j
              }
              M <= i ? (F = new LetterProps($, U, q, Y, tt, et), this.renderedLetters.push(F), M += 1, this.lettersChangedFlag = !0) : (F = this.renderedLetters[i], this.lettersChangedFlag = F.update($, U, q, Y, tt, et) || this.lettersChangedFlag)
            }
          }
        }, TextAnimatorProperty.prototype.getValue = function() {
          this._elem.globalData.frameId !== this._frameId && (this._frameId = this._elem.globalData.frameId, this.iterateDynamicProperties())
        }, TextAnimatorProperty.prototype.mHelper = new Matrix, TextAnimatorProperty.prototype.defaultPropsArray = [], extendPrototype([DynamicPropertyContainer], TextAnimatorProperty), ITextElement.prototype.initElement = function(t, e, n) {
          this.lettersChangedFlag = !0, this.initFrame(), this.initBaseData(t, e, n), this.textProperty = new TextProperty(this, t.t, this.dynamicProperties), this.textAnimator = new TextAnimatorProperty(t.t, this.renderType, this), this.initTransform(t, e, n), this.initHierarchy(), this.initRenderable(), this.initRendererElement(), this.createContainerElements(), this.createRenderableComponents(), this.createContent(), this.hide(), this.textAnimator.searchProperties(this.dynamicProperties)
        }, ITextElement.prototype.prepareFrame = function(t) {
          this._mdf = !1, this.prepareRenderableFrame(t), this.prepareProperties(t, this.isInRange)
        }, ITextElement.prototype.createPathShape = function(t, e) {
          var n, r, i = e.length,
            a = "";
          for (n = 0; n < i; n += 1) "sh" === e[n].ty && (r = e[n].ks.k, a += buildShapeString(r, r.i.length, !0, t));
          return a
        }, ITextElement.prototype.updateDocumentData = function(t, e) {
          this.textProperty.updateDocumentData(t, e)
        }, ITextElement.prototype.canResizeFont = function(t) {
          this.textProperty.canResizeFont(t)
        }, ITextElement.prototype.setMinimumFontSize = function(t) {
          this.textProperty.setMinimumFontSize(t)
        }, ITextElement.prototype.applyTextPropertiesToMatrix = function(t, e, n, r, i) {
          switch (t.ps && e.translate(t.ps[0], t.ps[1] + t.ascent, 0), e.translate(0, -t.ls, 0), t.j) {
            case 1:
              e.translate(t.justifyOffset + (t.boxWidth - t.lineWidths[n]), 0, 0);
              break;
            case 2:
              e.translate(t.justifyOffset + (t.boxWidth - t.lineWidths[n]) / 2, 0, 0)
          }
          e.translate(r, i, 0)
        }, ITextElement.prototype.buildColor = function(t) {
          return "rgb(" + Math.round(255 * t[0]) + "," + Math.round(255 * t[1]) + "," + Math.round(255 * t[2]) + ")"
        }, ITextElement.prototype.emptyProp = new LetterProps, ITextElement.prototype.destroy = function() {}, ITextElement.prototype.validateText = function() {
          (this.textProperty._mdf || this.textProperty._isFirstFrame) && (this.buildNewText(), this.textProperty._isFirstFrame = !1, this.textProperty._mdf = !1)
        };
        var emptyShapeData = {
          shapes: []
        };

        function SVGTextLottieElement(t, e, n) {
          this.textSpans = [], this.renderType = "svg", this.initElement(t, e, n)
        }

        function ISolidElement(t, e, n) {
          this.initElement(t, e, n)
        }

        function NullElement(t, e, n) {
          this.initFrame(), this.initBaseData(t, e, n), this.initFrame(), this.initTransform(t, e, n), this.initHierarchy()
        }

        function SVGRendererBase() {}

        function ICompElement() {}

        function SVGCompElement(t, e, n) {
          this.layers = t.layers, this.supports3d = !0, this.completeLayers = !1, this.pendingElements = [], this.elements = this.layers ? createSizedArray(this.layers.length) : [], this.initElement(t, e, n), this.tm = t.tm ? PropertyFactory.getProp(this, t.tm, 0, e.frameRate, this) : {
            _placeholder: !0
          }
        }

        function SVGRenderer(t, e) {
          this.animationItem = t, this.layers = null, this.renderedFrame = -1, this.svgElement = createNS("svg");
          var n = "";
          if (e && e.title) {
            var r = createNS("title"),
              i = createElementID();
            r.setAttribute("id", i), r.textContent = e.title, this.svgElement.appendChild(r), n += i
          }
          if (e && e.description) {
            var a = createNS("desc"),
              s = createElementID();
            a.setAttribute("id", s), a.textContent = e.description, this.svgElement.appendChild(a), n += " " + s
          }
          n && this.svgElement.setAttribute("aria-labelledby", n);
          var o = createNS("defs");
          this.svgElement.appendChild(o);
          var l = createNS("g");
          this.svgElement.appendChild(l), this.layerElement = l, this.renderConfig = {
            preserveAspectRatio: e && e.preserveAspectRatio || "xMidYMid meet",
            imagePreserveAspectRatio: e && e.imagePreserveAspectRatio || "xMidYMid slice",
            contentVisibility: e && e.contentVisibility || "visible",
            progressiveLoad: e && e.progressiveLoad || !1,
            hideOnTransparent: !(e && !1 === e.hideOnTransparent),
            viewBoxOnly: e && e.viewBoxOnly || !1,
            viewBoxSize: e && e.viewBoxSize || !1,
            className: e && e.className || "",
            id: e && e.id || "",
            focusable: e && e.focusable,
            filterSize: {
              width: e && e.filterSize && e.filterSize.width || "100%",
              height: e && e.filterSize && e.filterSize.height || "100%",
              x: e && e.filterSize && e.filterSize.x || "0%",
              y: e && e.filterSize && e.filterSize.y || "0%"
            },
            width: e && e.width,
            height: e && e.height,
            runExpressions: !e || void 0 === e.runExpressions || e.runExpressions
          }, this.globalData = {
            _mdf: !1,
            frameNum: -1,
            defs: o,
            renderConfig: this.renderConfig
          }, this.elements = [], this.pendingElements = [], this.destroyed = !1, this.rendererType = "svg"
        }

        function ShapeTransformManager() {
          this.sequences = {}, this.sequenceList = [], this.transform_key_count = 0
        }
        extendPrototype([BaseElement, TransformElement, SVGBaseElement, HierarchyElement, FrameElement, RenderableDOMElement, ITextElement], SVGTextLottieElement), SVGTextLottieElement.prototype.createContent = function() {
          this.data.singleShape && !this.globalData.fontManager.chars && (this.textContainer = createNS("text"))
        }, SVGTextLottieElement.prototype.buildTextContents = function(t) {
          for (var e = 0, n = t.length, r = [], i = ""; e < n;) t[e] === String.fromCharCode(13) || t[e] === String.fromCharCode(3) ? (r.push(i), i = "") : i += t[e], e += 1;
          return r.push(i), r
        }, SVGTextLottieElement.prototype.buildShapeData = function(t, e) {
          if (t.shapes && t.shapes.length) {
            var n = t.shapes[0];
            if (n.it) {
              var r = n.it[n.it.length - 1];
              r.s && (r.s.k[0] = e, r.s.k[1] = e)
            }
          }
          return t
        }, SVGTextLottieElement.prototype.buildNewText = function() {
          var t, e;
          this.addDynamicProperty(this);
          var n = this.textProperty.currentData;
          this.renderedLetters = createSizedArray(n ? n.l.length : 0), n.fc ? this.layerElement.setAttribute("fill", this.buildColor(n.fc)) : this.layerElement.setAttribute("fill", "rgba(0,0,0,0)"), n.sc && (this.layerElement.setAttribute("stroke", this.buildColor(n.sc)), this.layerElement.setAttribute("stroke-width", n.sw)), this.layerElement.setAttribute("font-size", n.finalSize);
          var r = this.globalData.fontManager.getFontByName(n.f);
          if (r.fClass) this.layerElement.setAttribute("class", r.fClass);
          else {
            this.layerElement.setAttribute("font-family", r.fFamily);
            var i = n.fWeight,
              a = n.fStyle;
            this.layerElement.setAttribute("font-style", a), this.layerElement.setAttribute("font-weight", i)
          }
          this.layerElement.setAttribute("aria-label", n.t);
          var s, o = n.l || [],
            l = !!this.globalData.fontManager.chars;
          e = o.length;
          var u = this.mHelper,
            h = this.data.singleShape,
            c = 0,
            p = 0,
            f = !0,
            d = .001 * n.tr * n.finalSize;
          if (!h || l || n.sz) {
            var m, v = this.textSpans.length;
            for (t = 0; t < e; t += 1) {
              if (this.textSpans[t] || (this.textSpans[t] = {
                  span: null,
                  childSpan: null,
                  glyph: null
                }), !l || !h || 0 === t) {
                if (s = v > t ? this.textSpans[t].span : createNS(l ? "g" : "text"), v <= t) {
                  if (s.setAttribute("stroke-linecap", "butt"), s.setAttribute("stroke-linejoin", "round"), s.setAttribute("stroke-miterlimit", "4"), this.textSpans[t].span = s, l) {
                    var g = createNS("g");
                    s.appendChild(g), this.textSpans[t].childSpan = g
                  }
                  this.textSpans[t].span = s, this.layerElement.appendChild(s)
                }
                s.style.display = "inherit"
              }
              if (u.reset(), h && (o[t].n && (c = -d, p += n.yOffset, p += f ? 1 : 0, f = !1), this.applyTextPropertiesToMatrix(n, u, o[t].line, c, p), c += o[t].l || 0, c += d), l) {
                var y;
                if (1 === (m = this.globalData.fontManager.getCharData(n.finalText[t], r.fStyle, this.globalData.fontManager.getFontByName(n.f).fFamily)).t) y = new SVGCompElement(m.data, this.globalData, this);
                else {
                  var b = emptyShapeData;
                  m.data && m.data.shapes && (b = this.buildShapeData(m.data, n.finalSize)), y = new SVGShapeElement(b, this.globalData, this)
                }
                if (this.textSpans[t].glyph) {
                  var x = this.textSpans[t].glyph;
                  this.textSpans[t].childSpan.removeChild(x.layerElement), x.destroy()
                }
                this.textSpans[t].glyph = y, y._debug = !0, y.prepareFrame(0), y.renderFrame(), this.textSpans[t].childSpan.appendChild(y.layerElement), 1 === m.t && this.textSpans[t].childSpan.setAttribute("transform", "scale(" + n.finalSize / 100 + "," + n.finalSize / 100 + ")")
              } else h && s.setAttribute("transform", "translate(" + u.props[12] + "," + u.props[13] + ")"), s.textContent = o[t].val, s.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve")
            }
            h && s && s.setAttribute("d", "")
          } else {
            var S = this.textContainer,
              E = "start";
            switch (n.j) {
              case 1:
                E = "end";
                break;
              case 2:
                E = "middle";
                break;
              default:
                E = "start"
            }
            S.setAttribute("text-anchor", E), S.setAttribute("letter-spacing", d);
            var P = this.buildTextContents(n.finalText);
            for (e = P.length, p = n.ps ? n.ps[1] + n.ascent : 0, t = 0; t < e; t += 1)(s = this.textSpans[t].span || createNS("tspan")).textContent = P[t], s.setAttribute("x", 0), s.setAttribute("y", p), s.style.display = "inherit", S.appendChild(s), this.textSpans[t] || (this.textSpans[t] = {
              span: null,
              glyph: null
            }), this.textSpans[t].span = s, p += n.finalLineHeight;
            this.layerElement.appendChild(S)
          }
          for (; t < this.textSpans.length;) this.textSpans[t].span.style.display = "none", t += 1;
          this._sizeChanged = !0
        }, SVGTextLottieElement.prototype.sourceRectAtTime = function() {
          if (this.prepareFrame(this.comp.renderedFrame - this.data.st), this.renderInnerContent(), this._sizeChanged) {
            this._sizeChanged = !1;
            var t = this.layerElement.getBBox();
            this.bbox = {
              top: t.y,
              left: t.x,
              width: t.width,
              height: t.height
            }
          }
          return this.bbox
        }, SVGTextLottieElement.prototype.getValue = function() {
          var t, e, n = this.textSpans.length;
          for (this.renderedFrame = this.comp.renderedFrame, t = 0; t < n; t += 1)(e = this.textSpans[t].glyph) && (e.prepareFrame(this.comp.renderedFrame - this.data.st), e._mdf && (this._mdf = !0))
        }, SVGTextLottieElement.prototype.renderInnerContent = function() {
          if (this.validateText(), (!this.data.singleShape || this._mdf) && (this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag), this.lettersChangedFlag || this.textAnimator.lettersChangedFlag)) {
            var t, e;
            this._sizeChanged = !0;
            var n, r, i, a = this.textAnimator.renderedLetters,
              s = this.textProperty.currentData.l;
            for (e = s.length, t = 0; t < e; t += 1) s[t].n || (n = a[t], r = this.textSpans[t].span, (i = this.textSpans[t].glyph) && i.renderFrame(), n._mdf.m && r.setAttribute("transform", n.m), n._mdf.o && r.setAttribute("opacity", n.o), n._mdf.sw && r.setAttribute("stroke-width", n.sw), n._mdf.sc && r.setAttribute("stroke", n.sc), n._mdf.fc && r.setAttribute("fill", n.fc))
          }
        }, extendPrototype([IImageElement], ISolidElement), ISolidElement.prototype.createContent = function() {
          var t = createNS("rect");
          t.setAttribute("width", this.data.sw), t.setAttribute("height", this.data.sh), t.setAttribute("fill", this.data.sc), this.layerElement.appendChild(t)
        }, NullElement.prototype.prepareFrame = function(t) {
          this.prepareProperties(t, !0)
        }, NullElement.prototype.renderFrame = function() {}, NullElement.prototype.getBaseElement = function() {
          return null
        }, NullElement.prototype.destroy = function() {}, NullElement.prototype.sourceRectAtTime = function() {}, NullElement.prototype.hide = function() {}, extendPrototype([BaseElement, TransformElement, HierarchyElement, FrameElement], NullElement), extendPrototype([BaseRenderer], SVGRendererBase), SVGRendererBase.prototype.createNull = function(t) {
          return new NullElement(t, this.globalData, this)
        }, SVGRendererBase.prototype.createShape = function(t) {
          return new SVGShapeElement(t, this.globalData, this)
        }, SVGRendererBase.prototype.createText = function(t) {
          return new SVGTextLottieElement(t, this.globalData, this)
        }, SVGRendererBase.prototype.createImage = function(t) {
          return new IImageElement(t, this.globalData, this)
        }, SVGRendererBase.prototype.createSolid = function(t) {
          return new ISolidElement(t, this.globalData, this)
        }, SVGRendererBase.prototype.configAnimation = function(t) {
          this.svgElement.setAttribute("xmlns", "http://www.w3.org/2000/svg"), this.svgElement.setAttribute("xmlns:xlink", "http://www.w3.org/1999/xlink"), this.renderConfig.viewBoxSize ? this.svgElement.setAttribute("viewBox", this.renderConfig.viewBoxSize) : this.svgElement.setAttribute("viewBox", "0 0 " + t.w + " " + t.h), this.renderConfig.viewBoxOnly || (this.svgElement.setAttribute("width", t.w), this.svgElement.setAttribute("height", t.h), this.svgElement.style.width = "100%", this.svgElement.style.height = "100%", this.svgElement.style.transform = "translate3d(0,0,0)", this.svgElement.style.contentVisibility = this.renderConfig.contentVisibility), this.renderConfig.width && this.svgElement.setAttribute("width", this.renderConfig.width), this.renderConfig.height && this.svgElement.setAttribute("height", this.renderConfig.height), this.renderConfig.className && this.svgElement.setAttribute("class", this.renderConfig.className), this.renderConfig.id && this.svgElement.setAttribute("id", this.renderConfig.id), void 0 !== this.renderConfig.focusable && this.svgElement.setAttribute("focusable", this.renderConfig.focusable), this.svgElement.setAttribute("preserveAspectRatio", this.renderConfig.preserveAspectRatio), this.animationItem.wrapper.appendChild(this.svgElement);
          var e = this.globalData.defs;
          this.setupGlobalData(t, e), this.globalData.progressiveLoad = this.renderConfig.progressiveLoad, this.data = t;
          var n = createNS("clipPath"),
            r = createNS("rect");
          r.setAttribute("width", t.w), r.setAttribute("height", t.h), r.setAttribute("x", 0), r.setAttribute("y", 0);
          var i = createElementID();
          n.setAttribute("id", i), n.appendChild(r), this.layerElement.setAttribute("clip-path", "url(" + getLocationHref() + "#" + i + ")"), e.appendChild(n), this.layers = t.layers, this.elements = createSizedArray(t.layers.length)
        }, SVGRendererBase.prototype.destroy = function() {
          var t;
          this.animationItem.wrapper && (this.animationItem.wrapper.innerText = ""), this.layerElement = null, this.globalData.defs = null;
          var e = this.layers ? this.layers.length : 0;
          for (t = 0; t < e; t += 1) this.elements[t] && this.elements[t].destroy && this.elements[t].destroy();
          this.elements.length = 0, this.destroyed = !0, this.animationItem = null
        }, SVGRendererBase.prototype.updateContainerSize = function() {}, SVGRendererBase.prototype.findIndexByInd = function(t) {
          var e = 0,
            n = this.layers.length;
          for (e = 0; e < n; e += 1)
            if (this.layers[e].ind === t) return e;
          return -1
        }, SVGRendererBase.prototype.buildItem = function(t) {
          var e = this.elements;
          if (!e[t] && 99 !== this.layers[t].ty) {
            e[t] = !0;
            var n = this.createItem(this.layers[t]);
            if (e[t] = n, getExpressionsPlugin() && (0 === this.layers[t].ty && this.globalData.projectInterface.registerComposition(n), n.initExpressions()), this.appendElementInPos(n, t), this.layers[t].tt) {
              var r = "tp" in this.layers[t] ? this.findIndexByInd(this.layers[t].tp) : t - 1;
              if (-1 === r) return;
              if (this.elements[r] && !0 !== this.elements[r]) {
                var i = e[r].getMatte(this.layers[t].tt);
                n.setMatte(i)
              } else this.buildItem(r), this.addPendingElement(n)
            }
          }
        }, SVGRendererBase.prototype.checkPendingElements = function() {
          for (; this.pendingElements.length;) {
            var t = this.pendingElements.pop();
            if (t.checkParenting(), t.data.tt)
              for (var e = 0, n = this.elements.length; e < n;) {
                if (this.elements[e] === t) {
                  var r = "tp" in t.data ? this.findIndexByInd(t.data.tp) : e - 1,
                    i = this.elements[r].getMatte(this.layers[e].tt);
                  t.setMatte(i);
                  break
                }
                e += 1
              }
          }
        }, SVGRendererBase.prototype.renderFrame = function(t) {
          if (this.renderedFrame !== t && !this.destroyed) {
            var e;
            null === t ? t = this.renderedFrame : this.renderedFrame = t, this.globalData.frameNum = t, this.globalData.frameId += 1, this.globalData.projectInterface.currentFrame = t, this.globalData._mdf = !1;
            var n = this.layers.length;
            for (this.completeLayers || this.checkLayers(t), e = n - 1; e >= 0; e -= 1)(this.completeLayers || this.elements[e]) && this.elements[e].prepareFrame(t - this.layers[e].st);
            if (this.globalData._mdf)
              for (e = 0; e < n; e += 1)(this.completeLayers || this.elements[e]) && this.elements[e].renderFrame()
          }
        }, SVGRendererBase.prototype.appendElementInPos = function(t, e) {
          var n = t.getBaseElement();
          if (n) {
            for (var r, i = 0; i < e;) this.elements[i] && !0 !== this.elements[i] && this.elements[i].getBaseElement() && (r = this.elements[i].getBaseElement()), i += 1;
            r ? this.layerElement.insertBefore(n, r) : this.layerElement.appendChild(n)
          }
        }, SVGRendererBase.prototype.hide = function() {
          this.layerElement.style.display = "none"
        }, SVGRendererBase.prototype.show = function() {
          this.layerElement.style.display = "block"
        }, extendPrototype([BaseElement, TransformElement, HierarchyElement, FrameElement, RenderableDOMElement], ICompElement), ICompElement.prototype.initElement = function(t, e, n) {
          this.initFrame(), this.initBaseData(t, e, n), this.initTransform(t, e, n), this.initRenderable(), this.initHierarchy(), this.initRendererElement(), this.createContainerElements(), this.createRenderableComponents(), !this.data.xt && e.progressiveLoad || this.buildAllItems(), this.hide()
        }, ICompElement.prototype.prepareFrame = function(t) {
          if (this._mdf = !1, this.prepareRenderableFrame(t), this.prepareProperties(t, this.isInRange), this.isInRange || this.data.xt) {
            if (this.tm._placeholder) this.renderedFrame = t / this.data.sr;
            else {
              var e = this.tm.v;
              e === this.data.op && (e = this.data.op - 1), this.renderedFrame = e
            }
            var n, r = this.elements.length;
            for (this.completeLayers || this.checkLayers(this.renderedFrame), n = r - 1; n >= 0; n -= 1)(this.completeLayers || this.elements[n]) && (this.elements[n].prepareFrame(this.renderedFrame - this.layers[n].st), this.elements[n]._mdf && (this._mdf = !0))
          }
        }, ICompElement.prototype.renderInnerContent = function() {
          var t, e = this.layers.length;
          for (t = 0; t < e; t += 1)(this.completeLayers || this.elements[t]) && this.elements[t].renderFrame()
        }, ICompElement.prototype.setElements = function(t) {
          this.elements = t
        }, ICompElement.prototype.getElements = function() {
          return this.elements
        }, ICompElement.prototype.destroyElements = function() {
          var t, e = this.layers.length;
          for (t = 0; t < e; t += 1) this.elements[t] && this.elements[t].destroy()
        }, ICompElement.prototype.destroy = function() {
          this.destroyElements(), this.destroyBaseElement()
        }, extendPrototype([SVGRendererBase, ICompElement, SVGBaseElement], SVGCompElement), SVGCompElement.prototype.createComp = function(t) {
          return new SVGCompElement(t, this.globalData, this)
        }, extendPrototype([SVGRendererBase], SVGRenderer), SVGRenderer.prototype.createComp = function(t) {
          return new SVGCompElement(t, this.globalData, this)
        }, ShapeTransformManager.prototype = {
          addTransformSequence: function(t) {
            var e, n = t.length,
              r = "_";
            for (e = 0; e < n; e += 1) r += t[e].transform.key + "_";
            var i = this.sequences[r];
            return i || (i = {
              transforms: [].concat(t),
              finalTransform: new Matrix,
              _mdf: !1
            }, this.sequences[r] = i, this.sequenceList.push(i)), i
          },
          processSequence: function(t, e) {
            for (var n = 0, r = t.transforms.length, i = e; n < r && !e;) {
              if (t.transforms[n].transform.mProps._mdf) {
                i = !0;
                break
              }
              n += 1
            }
            if (i)
              for (t.finalTransform.reset(), n = r - 1; n >= 0; n -= 1) t.finalTransform.multiply(t.transforms[n].transform.mProps.v);
            t._mdf = i
          },
          processSequences: function(t) {
            var e, n = this.sequenceList.length;
            for (e = 0; e < n; e += 1) this.processSequence(this.sequenceList[e], t)
          },
          getNewKey: function() {
            return this.transform_key_count += 1, "_" + this.transform_key_count
          }
        };
        var lumaLoader = function() {
          var t = "__lottie_element_luma_buffer",
            e = null,
            n = null,
            r = null;

          function i() {
            var i, a, s;
            e || (i = createNS("svg"), a = createNS("filter"), s = createNS("feColorMatrix"), a.setAttribute("id", t), s.setAttribute("type", "matrix"), s.setAttribute("color-interpolation-filters", "sRGB"), s.setAttribute("values", "0.3, 0.3, 0.3, 0, 0, 0.3, 0.3, 0.3, 0, 0, 0.3, 0.3, 0.3, 0, 0, 0.3, 0.3, 0.3, 0, 0"), a.appendChild(s), i.appendChild(a), i.setAttribute("id", t + "_svg"), featureSupport.svgLumaHidden && (i.style.display = "none"), r = i, document.body.appendChild(r), e = createTag("canvas"), (n = e.getContext("2d")).filter = "url(#" + t + ")", n.fillStyle = "rgba(0,0,0,0)", n.fillRect(0, 0, 1, 1))
          }
          return {
            load: i,
            get: function(r) {
              return e || i(), e.width = r.width, e.height = r.height, n.filter = "url(#" + t + ")", e
            }
          }
        };

        function createCanvas(t, e) {
          if (featureSupport.offscreenCanvas) return new OffscreenCanvas(t, e);
          var n = createTag("canvas");
          return n.width = t, n.height = e, n
        }
        var assetLoader = {
            loadLumaCanvas: lumaLoader.load,
            getLumaCanvas: lumaLoader.get,
            createCanvas
          },
          registeredEffects = {};

        function CVEffects(t) {
          var e, n, r = t.data.ef ? t.data.ef.length : 0;
          for (this.filters = [], e = 0; e < r; e += 1) {
            n = null;
            var i = t.data.ef[e].ty;
            registeredEffects[i] && (n = new(0, registeredEffects[i].effect)(t.effectsManager.effectElements[e], t)), n && this.filters.push(n)
          }
          this.filters.length && t.addRenderableComponent(this)
        }

        function registerEffect(t, e) {
          registeredEffects[t] = {
            effect: e
          }
        }

        function CVMaskElement(t, e) {
          var n;
          this.data = t, this.element = e, this.masksProperties = this.data.masksProperties || [], this.viewData = createSizedArray(this.masksProperties.length);
          var r = this.masksProperties.length,
            i = !1;
          for (n = 0; n < r; n += 1) "n" !== this.masksProperties[n].mode && (i = !0), this.viewData[n] = ShapePropertyFactory.getShapeProp(this.element, this.masksProperties[n], 3);
          this.hasMasks = i, i && this.element.addRenderableComponent(this)
        }

        function CVBaseElement() {}
        CVEffects.prototype.renderFrame = function(t) {
          var e, n = this.filters.length;
          for (e = 0; e < n; e += 1) this.filters[e].renderFrame(t)
        }, CVEffects.prototype.getEffects = function(t) {
          var e, n = this.filters.length,
            r = [];
          for (e = 0; e < n; e += 1) this.filters[e].type === t && r.push(this.filters[e]);
          return r
        }, CVMaskElement.prototype.renderFrame = function() {
          if (this.hasMasks) {
            var t, e, n, r, i = this.element.finalTransform.mat,
              a = this.element.canvasContext,
              s = this.masksProperties.length;
            for (a.beginPath(), t = 0; t < s; t += 1)
              if ("n" !== this.masksProperties[t].mode) {
                var o;
                this.masksProperties[t].inv && (a.moveTo(0, 0), a.lineTo(this.element.globalData.compSize.w, 0), a.lineTo(this.element.globalData.compSize.w, this.element.globalData.compSize.h), a.lineTo(0, this.element.globalData.compSize.h), a.lineTo(0, 0)), r = this.viewData[t].v, e = i.applyToPointArray(r.v[0][0], r.v[0][1], 0), a.moveTo(e[0], e[1]);
                var l = r._length;
                for (o = 1; o < l; o += 1) n = i.applyToTriplePoints(r.o[o - 1], r.i[o], r.v[o]), a.bezierCurveTo(n[0], n[1], n[2], n[3], n[4], n[5]);
                n = i.applyToTriplePoints(r.o[o - 1], r.i[0], r.v[0]), a.bezierCurveTo(n[0], n[1], n[2], n[3], n[4], n[5])
              } this.element.globalData.renderer.save(!0), a.clip()
          }
        }, CVMaskElement.prototype.getMaskProperty = MaskElement.prototype.getMaskProperty, CVMaskElement.prototype.destroy = function() {
          this.element = null
        };
        var operationsMap = {
          1: "source-in",
          2: "source-out",
          3: "source-in",
          4: "source-out"
        };

        function CVShapeData(t, e, n, r) {
          this.styledShapes = [], this.tr = [0, 0, 0, 0, 0, 0];
          var i, a = 4;
          "rc" === e.ty ? a = 5 : "el" === e.ty ? a = 6 : "sr" === e.ty && (a = 7), this.sh = ShapePropertyFactory.getShapeProp(t, e, a, t);
          var s, o = n.length;
          for (i = 0; i < o; i += 1) n[i].closed || (s = {
            transforms: r.addTransformSequence(n[i].transforms),
            trNodes: []
          }, this.styledShapes.push(s), n[i].elements.push(s))
        }

        function CVShapeElement(t, e, n) {
          this.shapes = [], this.shapesData = t.shapes, this.stylesList = [], this.itemsData = [], this.prevViewData = [], this.shapeModifiers = [], this.processedElements = [], this.transformsManager = new ShapeTransformManager, this.initElement(t, e, n)
        }

        function CVTextElement(t, e, n) {
          this.textSpans = [], this.yOffset = 0, this.fillColorAnim = !1, this.strokeColorAnim = !1, this.strokeWidthAnim = !1, this.stroke = !1, this.fill = !1, this.justifyOffset = 0, this.currentRender = null, this.renderType = "canvas", this.values = {
            fill: "rgba(0,0,0,0)",
            stroke: "rgba(0,0,0,0)",
            sWidth: 0,
            fValue: ""
          }, this.initElement(t, e, n)
        }

        function CVImageElement(t, e, n) {
          this.assetData = e.getAssetData(t.refId), this.img = e.imageLoader.getAsset(this.assetData), this.initElement(t, e, n)
        }

        function CVSolidElement(t, e, n) {
          this.initElement(t, e, n)
        }

        function CanvasRendererBase() {}

        function CanvasContext() {
          this.opacity = -1, this.transform = createTypedArray("float32", 16), this.fillStyle = "", this.strokeStyle = "", this.lineWidth = "", this.lineCap = "", this.lineJoin = "", this.miterLimit = "", this.id = Math.random()
        }

        function CVContextData() {
          var t;
          for (this.stack = [], this.cArrPos = 0, this.cTr = new Matrix, t = 0; t < 15; t += 1) {
            var e = new CanvasContext;
            this.stack[t] = e
          }
          this._length = 15, this.nativeContext = null, this.transformMat = new Matrix, this.currentOpacity = 1, this.currentFillStyle = "", this.appliedFillStyle = "", this.currentStrokeStyle = "", this.appliedStrokeStyle = "", this.currentLineWidth = "", this.appliedLineWidth = "", this.currentLineCap = "", this.appliedLineCap = "", this.currentLineJoin = "", this.appliedLineJoin = "", this.appliedMiterLimit = "", this.currentMiterLimit = ""
        }

        function CVCompElement(t, e, n) {
          this.completeLayers = !1, this.layers = t.layers, this.pendingElements = [], this.elements = createSizedArray(this.layers.length), this.initElement(t, e, n), this.tm = t.tm ? PropertyFactory.getProp(this, t.tm, 0, e.frameRate, this) : {
            _placeholder: !0
          }
        }

        function CanvasRenderer(t, e) {
          this.animationItem = t, this.renderConfig = {
            clearCanvas: !e || void 0 === e.clearCanvas || e.clearCanvas,
            context: e && e.context || null,
            progressiveLoad: e && e.progressiveLoad || !1,
            preserveAspectRatio: e && e.preserveAspectRatio || "xMidYMid meet",
            imagePreserveAspectRatio: e && e.imagePreserveAspectRatio || "xMidYMid slice",
            contentVisibility: e && e.contentVisibility || "visible",
            className: e && e.className || "",
            id: e && e.id || "",
            runExpressions: !e || void 0 === e.runExpressions || e.runExpressions
          }, this.renderConfig.dpr = e && e.dpr || 1, this.animationItem.wrapper && (this.renderConfig.dpr = e && e.dpr || window.devicePixelRatio || 1), this.renderedFrame = -1, this.globalData = {
            frameNum: -1,
            _mdf: !1,
            renderConfig: this.renderConfig,
            currentGlobalAlpha: -1
          }, this.contextData = new CVContextData, this.elements = [], this.pendingElements = [], this.transformMat = new Matrix, this.completeLayers = !1, this.rendererType = "canvas", this.renderConfig.clearCanvas && (this.ctxTransform = this.contextData.transform.bind(this.contextData), this.ctxOpacity = this.contextData.opacity.bind(this.contextData), this.ctxFillStyle = this.contextData.fillStyle.bind(this.contextData), this.ctxStrokeStyle = this.contextData.strokeStyle.bind(this.contextData), this.ctxLineWidth = this.contextData.lineWidth.bind(this.contextData), this.ctxLineCap = this.contextData.lineCap.bind(this.contextData), this.ctxLineJoin = this.contextData.lineJoin.bind(this.contextData), this.ctxMiterLimit = this.contextData.miterLimit.bind(this.contextData), this.ctxFill = this.contextData.fill.bind(this.contextData), this.ctxFillRect = this.contextData.fillRect.bind(this.contextData), this.ctxStroke = this.contextData.stroke.bind(this.contextData), this.save = this.contextData.save.bind(this.contextData))
        }

        function HBaseElement() {}

        function HSolidElement(t, e, n) {
          this.initElement(t, e, n)
        }

        function HShapeElement(t, e, n) {
          this.shapes = [], this.shapesData = t.shapes, this.stylesList = [], this.shapeModifiers = [], this.itemsData = [], this.processedElements = [], this.animatedContents = [], this.shapesContainer = createNS("g"), this.initElement(t, e, n), this.prevViewData = [], this.currentBBox = {
            x: 999999,
            y: -999999,
            h: 0,
            w: 0
          }
        }

        function HTextElement(t, e, n) {
          this.textSpans = [], this.textPaths = [], this.currentBBox = {
            x: 999999,
            y: -999999,
            h: 0,
            w: 0
          }, this.renderType = "svg", this.isMasked = !1, this.initElement(t, e, n)
        }

        function HCameraElement(t, e, n) {
          this.initFrame(), this.initBaseData(t, e, n), this.initHierarchy();
          var r = PropertyFactory.getProp;
          if (this.pe = r(this, t.pe, 0, 0, this), t.ks.p.s ? (this.px = r(this, t.ks.p.x, 1, 0, this), this.py = r(this, t.ks.p.y, 1, 0, this), this.pz = r(this, t.ks.p.z, 1, 0, this)) : this.p = r(this, t.ks.p, 1, 0, this), t.ks.a && (this.a = r(this, t.ks.a, 1, 0, this)), t.ks.or.k.length && t.ks.or.k[0].to) {
            var i, a = t.ks.or.k.length;
            for (i = 0; i < a; i += 1) t.ks.or.k[i].to = null, t.ks.or.k[i].ti = null
          }
          this.or = r(this, t.ks.or, 1, degToRads, this), this.or.sh = !0, this.rx = r(this, t.ks.rx, 0, degToRads, this), this.ry = r(this, t.ks.ry, 0, degToRads, this), this.rz = r(this, t.ks.rz, 0, degToRads, this), this.mat = new Matrix, this._prevMat = new Matrix, this._isFirstFrame = !0, this.finalTransform = {
            mProp: this
          }
        }

        function HImageElement(t, e, n) {
          this.assetData = e.getAssetData(t.refId), this.initElement(t, e, n)
        }

        function HybridRendererBase(t, e) {
          this.animationItem = t, this.layers = null, this.renderedFrame = -1, this.renderConfig = {
            className: e && e.className || "",
            imagePreserveAspectRatio: e && e.imagePreserveAspectRatio || "xMidYMid slice",
            hideOnTransparent: !(e && !1 === e.hideOnTransparent),
            filterSize: {
              width: e && e.filterSize && e.filterSize.width || "400%",
              height: e && e.filterSize && e.filterSize.height || "400%",
              x: e && e.filterSize && e.filterSize.x || "-100%",
              y: e && e.filterSize && e.filterSize.y || "-100%"
            }
          }, this.globalData = {
            _mdf: !1,
            frameNum: -1,
            renderConfig: this.renderConfig
          }, this.pendingElements = [], this.elements = [], this.threeDElements = [], this.destroyed = !1, this.camera = null, this.supports3d = !0, this.rendererType = "html"
        }

        function HCompElement(t, e, n) {
          this.layers = t.layers, this.supports3d = !t.hasMask, this.completeLayers = !1, this.pendingElements = [], this.elements = this.layers ? createSizedArray(this.layers.length) : [], this.initElement(t, e, n), this.tm = t.tm ? PropertyFactory.getProp(this, t.tm, 0, e.frameRate, this) : {
            _placeholder: !0
          }
        }

        function HybridRenderer(t, e) {
          this.animationItem = t, this.layers = null, this.renderedFrame = -1, this.renderConfig = {
            className: e && e.className || "",
            imagePreserveAspectRatio: e && e.imagePreserveAspectRatio || "xMidYMid slice",
            hideOnTransparent: !(e && !1 === e.hideOnTransparent),
            filterSize: {
              width: e && e.filterSize && e.filterSize.width || "400%",
              height: e && e.filterSize && e.filterSize.height || "400%",
              x: e && e.filterSize && e.filterSize.x || "-100%",
              y: e && e.filterSize && e.filterSize.y || "-100%"
            },
            runExpressions: !e || void 0 === e.runExpressions || e.runExpressions
          }, this.globalData = {
            _mdf: !1,
            frameNum: -1,
            renderConfig: this.renderConfig
          }, this.pendingElements = [], this.elements = [], this.threeDElements = [], this.destroyed = !1, this.camera = null, this.supports3d = !0, this.rendererType = "html"
        }
        CVBaseElement.prototype = {
          createElements: function() {},
          initRendererElement: function() {},
          createContainerElements: function() {
            if (this.data.tt >= 1) {
              this.buffers = [];
              var t = this.globalData.canvasContext,
                e = assetLoader.createCanvas(t.canvas.width, t.canvas.height);
              this.buffers.push(e);
              var n = assetLoader.createCanvas(t.canvas.width, t.canvas.height);
              this.buffers.push(n), this.data.tt >= 3 && !document._isProxy && assetLoader.loadLumaCanvas()
            }
            this.canvasContext = this.globalData.canvasContext, this.transformCanvas = this.globalData.transformCanvas, this.renderableEffectsManager = new CVEffects(this), this.searchEffectTransforms()
          },
          createContent: function() {},
          setBlendMode: function() {
            var t = this.globalData;
            if (t.blendMode !== this.data.bm) {
              t.blendMode = this.data.bm;
              var e = getBlendMode(this.data.bm);
              t.canvasContext.globalCompositeOperation = e
            }
          },
          createRenderableComponents: function() {
            this.maskManager = new CVMaskElement(this.data, this), this.transformEffects = this.renderableEffectsManager.getEffects(effectTypes.TRANSFORM_EFFECT)
          },
          hideElement: function() {
            this.hidden || this.isInRange && !this.isTransparent || (this.hidden = !0)
          },
          showElement: function() {
            this.isInRange && !this.isTransparent && (this.hidden = !1, this._isFirstFrame = !0, this.maskManager._isFirstFrame = !0)
          },
          clearCanvas: function(t) {
            t.clearRect(this.transformCanvas.tx, this.transformCanvas.ty, this.transformCanvas.w * this.transformCanvas.sx, this.transformCanvas.h * this.transformCanvas.sy)
          },
          prepareLayer: function() {
            if (this.data.tt >= 1) {
              var t = this.buffers[0].getContext("2d");
              this.clearCanvas(t), t.drawImage(this.canvasContext.canvas, 0, 0), this.currentTransform = this.canvasContext.getTransform(), this.canvasContext.setTransform(1, 0, 0, 1, 0, 0), this.clearCanvas(this.canvasContext), this.canvasContext.setTransform(this.currentTransform)
            }
          },
          exitLayer: function() {
            if (this.data.tt >= 1) {
              var t = this.buffers[1],
                e = t.getContext("2d");
              if (this.clearCanvas(e), e.drawImage(this.canvasContext.canvas, 0, 0), this.canvasContext.setTransform(1, 0, 0, 1, 0, 0), this.clearCanvas(this.canvasContext), this.canvasContext.setTransform(this.currentTransform), this.comp.getElementById("tp" in this.data ? this.data.tp : this.data.ind - 1).renderFrame(!0), this.canvasContext.setTransform(1, 0, 0, 1, 0, 0), this.data.tt >= 3 && !document._isProxy) {
                var n = assetLoader.getLumaCanvas(this.canvasContext.canvas);
                n.getContext("2d").drawImage(this.canvasContext.canvas, 0, 0), this.clearCanvas(this.canvasContext), this.canvasContext.drawImage(n, 0, 0)
              }
              this.canvasContext.globalCompositeOperation = operationsMap[this.data.tt], this.canvasContext.drawImage(t, 0, 0), this.canvasContext.globalCompositeOperation = "destination-over", this.canvasContext.drawImage(this.buffers[0], 0, 0), this.canvasContext.setTransform(this.currentTransform), this.canvasContext.globalCompositeOperation = "source-over"
            }
          },
          renderFrame: function(t) {
            if (!this.hidden && !this.data.hd && (1 !== this.data.td || t)) {
              this.renderTransform(), this.renderRenderable(), this.renderLocalTransform(), this.setBlendMode();
              var e = 0 === this.data.ty;
              this.prepareLayer(), this.globalData.renderer.save(e), this.globalData.renderer.ctxTransform(this.finalTransform.localMat.props), this.globalData.renderer.ctxOpacity(this.finalTransform.localOpacity), this.renderInnerContent(), this.globalData.renderer.restore(e), this.exitLayer(), this.maskManager.hasMasks && this.globalData.renderer.restore(!0), this._isFirstFrame && (this._isFirstFrame = !1)
            }
          },
          destroy: function() {
            this.canvasContext = null, this.data = null, this.globalData = null, this.maskManager.destroy()
          },
          mHelper: new Matrix
        }, CVBaseElement.prototype.hide = CVBaseElement.prototype.hideElement, CVBaseElement.prototype.show = CVBaseElement.prototype.showElement, CVShapeData.prototype.setAsAnimated = SVGShapeData.prototype.setAsAnimated, extendPrototype([BaseElement, TransformElement, CVBaseElement, IShapeElement, HierarchyElement, FrameElement, RenderableElement], CVShapeElement), CVShapeElement.prototype.initElement = RenderableDOMElement.prototype.initElement, CVShapeElement.prototype.transformHelper = {
          opacity: 1,
          _opMdf: !1
        }, CVShapeElement.prototype.dashResetter = [], CVShapeElement.prototype.createContent = function() {
          this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, !0, [])
        }, CVShapeElement.prototype.createStyleElement = function(t, e) {
          var n = {
              data: t,
              type: t.ty,
              preTransforms: this.transformsManager.addTransformSequence(e),
              transforms: [],
              elements: [],
              closed: !0 === t.hd
            },
            r = {};
          if ("fl" === t.ty || "st" === t.ty ? (r.c = PropertyFactory.getProp(this, t.c, 1, 255, this), r.c.k || (n.co = "rgb(" + bmFloor(r.c.v[0]) + "," + bmFloor(r.c.v[1]) + "," + bmFloor(r.c.v[2]) + ")")) : "gf" !== t.ty && "gs" !== t.ty || (r.s = PropertyFactory.getProp(this, t.s, 1, null, this), r.e = PropertyFactory.getProp(this, t.e, 1, null, this), r.h = PropertyFactory.getProp(this, t.h || {
              k: 0
            }, 0, .01, this), r.a = PropertyFactory.getProp(this, t.a || {
              k: 0
            }, 0, degToRads, this), r.g = new GradientProperty(this, t.g, this)), r.o = PropertyFactory.getProp(this, t.o, 0, .01, this), "st" === t.ty || "gs" === t.ty) {
            if (n.lc = lineCapEnum[t.lc || 2], n.lj = lineJoinEnum[t.lj || 2], 1 == t.lj && (n.ml = t.ml), r.w = PropertyFactory.getProp(this, t.w, 0, null, this), r.w.k || (n.wi = r.w.v), t.d) {
              var i = new DashProperty(this, t.d, "canvas", this);
              r.d = i, r.d.k || (n.da = r.d.dashArray, n.do = r.d.dashoffset[0])
            }
          } else n.r = 2 === t.r ? "evenodd" : "nonzero";
          return this.stylesList.push(n), r.style = n, r
        }, CVShapeElement.prototype.createGroupElement = function() {
          return {
            it: [],
            prevViewData: []
          }
        }, CVShapeElement.prototype.createTransformElement = function(t) {
          return {
            transform: {
              opacity: 1,
              _opMdf: !1,
              key: this.transformsManager.getNewKey(),
              op: PropertyFactory.getProp(this, t.o, 0, .01, this),
              mProps: TransformPropertyFactory.getTransformProperty(this, t, this)
            }
          }
        }, CVShapeElement.prototype.createShapeElement = function(t) {
          var e = new CVShapeData(this, t, this.stylesList, this.transformsManager);
          return this.shapes.push(e), this.addShapeToModifiers(e), e
        }, CVShapeElement.prototype.reloadShapes = function() {
          var t;
          this._isFirstFrame = !0;
          var e = this.itemsData.length;
          for (t = 0; t < e; t += 1) this.prevViewData[t] = this.itemsData[t];
          for (this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, !0, []), e = this.dynamicProperties.length, t = 0; t < e; t += 1) this.dynamicProperties[t].getValue();
          this.renderModifiers(), this.transformsManager.processSequences(this._isFirstFrame)
        }, CVShapeElement.prototype.addTransformToStyleList = function(t) {
          var e, n = this.stylesList.length;
          for (e = 0; e < n; e += 1) this.stylesList[e].closed || this.stylesList[e].transforms.push(t)
        }, CVShapeElement.prototype.removeTransformFromStyleList = function() {
          var t, e = this.stylesList.length;
          for (t = 0; t < e; t += 1) this.stylesList[t].closed || this.stylesList[t].transforms.pop()
        }, CVShapeElement.prototype.closeStyles = function(t) {
          var e, n = t.length;
          for (e = 0; e < n; e += 1) t[e].closed = !0
        }, CVShapeElement.prototype.searchShapes = function(t, e, n, r, i) {
          var a, s, o, l, u, h, c = t.length - 1,
            p = [],
            f = [],
            d = [].concat(i);
          for (a = c; a >= 0; a -= 1) {
            if ((l = this.searchProcessedElement(t[a])) ? e[a] = n[l - 1] : t[a]._shouldRender = r, "fl" === t[a].ty || "st" === t[a].ty || "gf" === t[a].ty || "gs" === t[a].ty) l ? e[a].style.closed = !1 : e[a] = this.createStyleElement(t[a], d), p.push(e[a].style);
            else if ("gr" === t[a].ty) {
              if (l)
                for (o = e[a].it.length, s = 0; s < o; s += 1) e[a].prevViewData[s] = e[a].it[s];
              else e[a] = this.createGroupElement(t[a]);
              this.searchShapes(t[a].it, e[a].it, e[a].prevViewData, r, d)
            } else "tr" === t[a].ty ? (l || (h = this.createTransformElement(t[a]), e[a] = h), d.push(e[a]), this.addTransformToStyleList(e[a])) : "sh" === t[a].ty || "rc" === t[a].ty || "el" === t[a].ty || "sr" === t[a].ty ? l || (e[a] = this.createShapeElement(t[a])) : "tm" === t[a].ty || "rd" === t[a].ty || "pb" === t[a].ty || "zz" === t[a].ty || "op" === t[a].ty ? (l ? (u = e[a]).closed = !1 : ((u = ShapeModifiers.getModifier(t[a].ty)).init(this, t[a]), e[a] = u, this.shapeModifiers.push(u)), f.push(u)) : "rp" === t[a].ty && (l ? (u = e[a]).closed = !0 : (u = ShapeModifiers.getModifier(t[a].ty), e[a] = u, u.init(this, t, a, e), this.shapeModifiers.push(u), r = !1), f.push(u));
            this.addProcessedElement(t[a], a + 1)
          }
          for (this.removeTransformFromStyleList(), this.closeStyles(p), c = f.length, a = 0; a < c; a += 1) f[a].closed = !0
        }, CVShapeElement.prototype.renderInnerContent = function() {
          this.transformHelper.opacity = 1, this.transformHelper._opMdf = !1, this.renderModifiers(), this.transformsManager.processSequences(this._isFirstFrame), this.renderShape(this.transformHelper, this.shapesData, this.itemsData, !0)
        }, CVShapeElement.prototype.renderShapeTransform = function(t, e) {
          (t._opMdf || e.op._mdf || this._isFirstFrame) && (e.opacity = t.opacity, e.opacity *= e.op.v, e._opMdf = !0)
        }, CVShapeElement.prototype.drawLayer = function() {
          var t, e, n, r, i, a, s, o, l, u = this.stylesList.length,
            h = this.globalData.renderer,
            c = this.globalData.canvasContext;
          for (t = 0; t < u; t += 1)
            if (("st" !== (o = (l = this.stylesList[t]).type) && "gs" !== o || 0 !== l.wi) && l.data._shouldRender && 0 !== l.coOp && 0 !== this.globalData.currentGlobalAlpha) {
              for (h.save(), a = l.elements, "st" === o || "gs" === o ? (h.ctxStrokeStyle("st" === o ? l.co : l.grd), h.ctxLineWidth(l.wi), h.ctxLineCap(l.lc), h.ctxLineJoin(l.lj), h.ctxMiterLimit(l.ml || 0)) : h.ctxFillStyle("fl" === o ? l.co : l.grd), h.ctxOpacity(l.coOp), "st" !== o && "gs" !== o && c.beginPath(), h.ctxTransform(l.preTransforms.finalTransform.props), n = a.length, e = 0; e < n; e += 1) {
                for ("st" !== o && "gs" !== o || (c.beginPath(), l.da && (c.setLineDash(l.da), c.lineDashOffset = l.do)), i = (s = a[e].trNodes).length, r = 0; r < i; r += 1) "m" === s[r].t ? c.moveTo(s[r].p[0], s[r].p[1]) : "c" === s[r].t ? c.bezierCurveTo(s[r].pts[0], s[r].pts[1], s[r].pts[2], s[r].pts[3], s[r].pts[4], s[r].pts[5]) : c.closePath();
                "st" !== o && "gs" !== o || (h.ctxStroke(), l.da && c.setLineDash(this.dashResetter))
              }
              "st" !== o && "gs" !== o && this.globalData.renderer.ctxFill(l.r), h.restore()
            }
        }, CVShapeElement.prototype.renderShape = function(t, e, n, r) {
          var i, a;
          for (a = t, i = e.length - 1; i >= 0; i -= 1) "tr" === e[i].ty ? (a = n[i].transform, this.renderShapeTransform(t, a)) : "sh" === e[i].ty || "el" === e[i].ty || "rc" === e[i].ty || "sr" === e[i].ty ? this.renderPath(e[i], n[i]) : "fl" === e[i].ty ? this.renderFill(e[i], n[i], a) : "st" === e[i].ty ? this.renderStroke(e[i], n[i], a) : "gf" === e[i].ty || "gs" === e[i].ty ? this.renderGradientFill(e[i], n[i], a) : "gr" === e[i].ty ? this.renderShape(a, e[i].it, n[i].it) : e[i].ty;
          r && this.drawLayer()
        }, CVShapeElement.prototype.renderStyledShape = function(t, e) {
          if (this._isFirstFrame || e._mdf || t.transforms._mdf) {
            var n, r, i, a = t.trNodes,
              s = e.paths,
              o = s._length;
            a.length = 0;
            var l = t.transforms.finalTransform;
            for (i = 0; i < o; i += 1) {
              var u = s.shapes[i];
              if (u && u.v) {
                for (r = u._length, n = 1; n < r; n += 1) 1 === n && a.push({
                  t: "m",
                  p: l.applyToPointArray(u.v[0][0], u.v[0][1], 0)
                }), a.push({
                  t: "c",
                  pts: l.applyToTriplePoints(u.o[n - 1], u.i[n], u.v[n])
                });
                1 === r && a.push({
                  t: "m",
                  p: l.applyToPointArray(u.v[0][0], u.v[0][1], 0)
                }), u.c && r && (a.push({
                  t: "c",
                  pts: l.applyToTriplePoints(u.o[n - 1], u.i[0], u.v[0])
                }), a.push({
                  t: "z"
                }))
              }
            }
            t.trNodes = a
          }
        }, CVShapeElement.prototype.renderPath = function(t, e) {
          if (!0 !== t.hd && t._shouldRender) {
            var n, r = e.styledShapes.length;
            for (n = 0; n < r; n += 1) this.renderStyledShape(e.styledShapes[n], e.sh)
          }
        }, CVShapeElement.prototype.renderFill = function(t, e, n) {
          var r = e.style;
          (e.c._mdf || this._isFirstFrame) && (r.co = "rgb(" + bmFloor(e.c.v[0]) + "," + bmFloor(e.c.v[1]) + "," + bmFloor(e.c.v[2]) + ")"), (e.o._mdf || n._opMdf || this._isFirstFrame) && (r.coOp = e.o.v * n.opacity)
        }, CVShapeElement.prototype.renderGradientFill = function(t, e, n) {
          var r, i = e.style;
          if (!i.grd || e.g._mdf || e.s._mdf || e.e._mdf || 1 !== t.t && (e.h._mdf || e.a._mdf)) {
            var a, s = this.globalData.canvasContext,
              o = e.s.v,
              l = e.e.v;
            if (1 === t.t) r = s.createLinearGradient(o[0], o[1], l[0], l[1]);
            else {
              var u = Math.sqrt(Math.pow(o[0] - l[0], 2) + Math.pow(o[1] - l[1], 2)),
                h = Math.atan2(l[1] - o[1], l[0] - o[0]),
                c = e.h.v;
              c >= 1 ? c = .99 : c <= -1 && (c = -.99);
              var p = u * c,
                f = Math.cos(h + e.a.v) * p + o[0],
                d = Math.sin(h + e.a.v) * p + o[1];
              r = s.createRadialGradient(f, d, 0, o[0], o[1], u)
            }
            var m = t.g.p,
              v = e.g.c,
              g = 1;
            for (a = 0; a < m; a += 1) e.g._hasOpacity && e.g._collapsable && (g = e.g.o[2 * a + 1]), r.addColorStop(v[4 * a] / 100, "rgba(" + v[4 * a + 1] + "," + v[4 * a + 2] + "," + v[4 * a + 3] + "," + g + ")");
            i.grd = r
          }
          i.coOp = e.o.v * n.opacity
        }, CVShapeElement.prototype.renderStroke = function(t, e, n) {
          var r = e.style,
            i = e.d;
          i && (i._mdf || this._isFirstFrame) && (r.da = i.dashArray, r.do = i.dashoffset[0]), (e.c._mdf || this._isFirstFrame) && (r.co = "rgb(" + bmFloor(e.c.v[0]) + "," + bmFloor(e.c.v[1]) + "," + bmFloor(e.c.v[2]) + ")"), (e.o._mdf || n._opMdf || this._isFirstFrame) && (r.coOp = e.o.v * n.opacity), (e.w._mdf || this._isFirstFrame) && (r.wi = e.w.v)
        }, CVShapeElement.prototype.destroy = function() {
          this.shapesData = null, this.globalData = null, this.canvasContext = null, this.stylesList.length = 0, this.itemsData.length = 0
        }, extendPrototype([BaseElement, TransformElement, CVBaseElement, HierarchyElement, FrameElement, RenderableElement, ITextElement], CVTextElement), CVTextElement.prototype.tHelper = createTag("canvas").getContext("2d"), CVTextElement.prototype.buildNewText = function() {
          var t = this.textProperty.currentData;
          this.renderedLetters = createSizedArray(t.l ? t.l.length : 0);
          var e = !1;
          t.fc ? (e = !0, this.values.fill = this.buildColor(t.fc)) : this.values.fill = "rgba(0,0,0,0)", this.fill = e;
          var n = !1;
          t.sc && (n = !0, this.values.stroke = this.buildColor(t.sc), this.values.sWidth = t.sw);
          var r, i, a, s, o, l, u, h, c, p, f, d, m = this.globalData.fontManager.getFontByName(t.f),
            v = t.l,
            g = this.mHelper;
          this.stroke = n, this.values.fValue = t.finalSize + "px " + this.globalData.fontManager.getFontByName(t.f).fFamily, i = t.finalText.length;
          var y = this.data.singleShape,
            b = .001 * t.tr * t.finalSize,
            x = 0,
            S = 0,
            E = !0,
            P = 0;
          for (r = 0; r < i; r += 1) {
            s = (a = this.globalData.fontManager.getCharData(t.finalText[r], m.fStyle, this.globalData.fontManager.getFontByName(t.f).fFamily)) && a.data || {}, g.reset(), y && v[r].n && (x = -b, S += t.yOffset, S += E ? 1 : 0, E = !1), c = (u = s.shapes ? s.shapes[0].it : []).length, g.scale(t.finalSize / 100, t.finalSize / 100), y && this.applyTextPropertiesToMatrix(t, g, v[r].line, x, S), f = createSizedArray(c - 1);
            var C = 0;
            for (h = 0; h < c; h += 1)
              if ("sh" === u[h].ty) {
                for (l = u[h].ks.k.i.length, p = u[h].ks.k, d = [], o = 1; o < l; o += 1) 1 === o && d.push(g.applyToX(p.v[0][0], p.v[0][1], 0), g.applyToY(p.v[0][0], p.v[0][1], 0)), d.push(g.applyToX(p.o[o - 1][0], p.o[o - 1][1], 0), g.applyToY(p.o[o - 1][0], p.o[o - 1][1], 0), g.applyToX(p.i[o][0], p.i[o][1], 0), g.applyToY(p.i[o][0], p.i[o][1], 0), g.applyToX(p.v[o][0], p.v[o][1], 0), g.applyToY(p.v[o][0], p.v[o][1], 0));
                d.push(g.applyToX(p.o[o - 1][0], p.o[o - 1][1], 0), g.applyToY(p.o[o - 1][0], p.o[o - 1][1], 0), g.applyToX(p.i[0][0], p.i[0][1], 0), g.applyToY(p.i[0][0], p.i[0][1], 0), g.applyToX(p.v[0][0], p.v[0][1], 0), g.applyToY(p.v[0][0], p.v[0][1], 0)), f[C] = d, C += 1
              } y && (x += v[r].l, x += b), this.textSpans[P] ? this.textSpans[P].elem = f : this.textSpans[P] = {
              elem: f
            }, P += 1
          }
        }, CVTextElement.prototype.renderInnerContent = function() {
          var t, e, n, r, i, a;
          this.validateText(), this.canvasContext.font = this.values.fValue, this.globalData.renderer.ctxLineCap("butt"), this.globalData.renderer.ctxLineJoin("miter"), this.globalData.renderer.ctxMiterLimit(4), this.data.singleShape || this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag);
          var s, o = this.textAnimator.renderedLetters,
            l = this.textProperty.currentData.l;
          e = l.length;
          var u, h, c = null,
            p = null,
            f = null,
            d = this.globalData.renderer;
          for (t = 0; t < e; t += 1)
            if (!l[t].n) {
              if ((s = o[t]) && (d.save(), d.ctxTransform(s.p), d.ctxOpacity(s.o)), this.fill) {
                for (s && s.fc ? c !== s.fc && (d.ctxFillStyle(s.fc), c = s.fc) : c !== this.values.fill && (c = this.values.fill, d.ctxFillStyle(this.values.fill)), r = (u = this.textSpans[t].elem).length, this.globalData.canvasContext.beginPath(), n = 0; n < r; n += 1)
                  for (a = (h = u[n]).length, this.globalData.canvasContext.moveTo(h[0], h[1]), i = 2; i < a; i += 6) this.globalData.canvasContext.bezierCurveTo(h[i], h[i + 1], h[i + 2], h[i + 3], h[i + 4], h[i + 5]);
                this.globalData.canvasContext.closePath(), d.ctxFill()
              }
              if (this.stroke) {
                for (s && s.sw ? f !== s.sw && (f = s.sw, d.ctxLineWidth(s.sw)) : f !== this.values.sWidth && (f = this.values.sWidth, d.ctxLineWidth(this.values.sWidth)), s && s.sc ? p !== s.sc && (p = s.sc, d.ctxStrokeStyle(s.sc)) : p !== this.values.stroke && (p = this.values.stroke, d.ctxStrokeStyle(this.values.stroke)), r = (u = this.textSpans[t].elem).length, this.globalData.canvasContext.beginPath(), n = 0; n < r; n += 1)
                  for (a = (h = u[n]).length, this.globalData.canvasContext.moveTo(h[0], h[1]), i = 2; i < a; i += 6) this.globalData.canvasContext.bezierCurveTo(h[i], h[i + 1], h[i + 2], h[i + 3], h[i + 4], h[i + 5]);
                this.globalData.canvasContext.closePath(), d.ctxStroke()
              }
              s && this.globalData.renderer.restore()
            }
        }, extendPrototype([BaseElement, TransformElement, CVBaseElement, HierarchyElement, FrameElement, RenderableElement], CVImageElement), CVImageElement.prototype.initElement = SVGShapeElement.prototype.initElement, CVImageElement.prototype.prepareFrame = IImageElement.prototype.prepareFrame, CVImageElement.prototype.createContent = function() {
          if (this.img.width && (this.assetData.w !== this.img.width || this.assetData.h !== this.img.height)) {
            var t = createTag("canvas");
            t.width = this.assetData.w, t.height = this.assetData.h;
            var e, n, r = t.getContext("2d"),
              i = this.img.width,
              a = this.img.height,
              s = i / a,
              o = this.assetData.w / this.assetData.h,
              l = this.assetData.pr || this.globalData.renderConfig.imagePreserveAspectRatio;
            s > o && "xMidYMid slice" === l || s < o && "xMidYMid slice" !== l ? e = (n = a) * o : n = (e = i) / o, r.drawImage(this.img, (i - e) / 2, (a - n) / 2, e, n, 0, 0, this.assetData.w, this.assetData.h), this.img = t
          }
        }, CVImageElement.prototype.renderInnerContent = function() {
          this.canvasContext.drawImage(this.img, 0, 0)
        }, CVImageElement.prototype.destroy = function() {
          this.img = null
        }, extendPrototype([BaseElement, TransformElement, CVBaseElement, HierarchyElement, FrameElement, RenderableElement], CVSolidElement), CVSolidElement.prototype.initElement = SVGShapeElement.prototype.initElement, CVSolidElement.prototype.prepareFrame = IImageElement.prototype.prepareFrame, CVSolidElement.prototype.renderInnerContent = function() {
          this.globalData.renderer.ctxFillStyle(this.data.sc), this.globalData.renderer.ctxFillRect(0, 0, this.data.sw, this.data.sh)
        }, extendPrototype([BaseRenderer], CanvasRendererBase), CanvasRendererBase.prototype.createShape = function(t) {
          return new CVShapeElement(t, this.globalData, this)
        }, CanvasRendererBase.prototype.createText = function(t) {
          return new CVTextElement(t, this.globalData, this)
        }, CanvasRendererBase.prototype.createImage = function(t) {
          return new CVImageElement(t, this.globalData, this)
        }, CanvasRendererBase.prototype.createSolid = function(t) {
          return new CVSolidElement(t, this.globalData, this)
        }, CanvasRendererBase.prototype.createNull = SVGRenderer.prototype.createNull, CanvasRendererBase.prototype.ctxTransform = function(t) {
          1 === t[0] && 0 === t[1] && 0 === t[4] && 1 === t[5] && 0 === t[12] && 0 === t[13] || this.canvasContext.transform(t[0], t[1], t[4], t[5], t[12], t[13])
        }, CanvasRendererBase.prototype.ctxOpacity = function(t) {
          this.canvasContext.globalAlpha *= t < 0 ? 0 : t
        }, CanvasRendererBase.prototype.ctxFillStyle = function(t) {
          this.canvasContext.fillStyle = t
        }, CanvasRendererBase.prototype.ctxStrokeStyle = function(t) {
          this.canvasContext.strokeStyle = t
        }, CanvasRendererBase.prototype.ctxLineWidth = function(t) {
          this.canvasContext.lineWidth = t
        }, CanvasRendererBase.prototype.ctxLineCap = function(t) {
          this.canvasContext.lineCap = t
        }, CanvasRendererBase.prototype.ctxLineJoin = function(t) {
          this.canvasContext.lineJoin = t
        }, CanvasRendererBase.prototype.ctxMiterLimit = function(t) {
          this.canvasContext.miterLimit = t
        }, CanvasRendererBase.prototype.ctxFill = function(t) {
          this.canvasContext.fill(t)
        }, CanvasRendererBase.prototype.ctxFillRect = function(t, e, n, r) {
          this.canvasContext.fillRect(t, e, n, r)
        }, CanvasRendererBase.prototype.ctxStroke = function() {
          this.canvasContext.stroke()
        }, CanvasRendererBase.prototype.reset = function() {
          this.renderConfig.clearCanvas ? this.contextData.reset() : this.canvasContext.restore()
        }, CanvasRendererBase.prototype.save = function() {
          this.canvasContext.save()
        }, CanvasRendererBase.prototype.restore = function(t) {
          this.renderConfig.clearCanvas ? (t && (this.globalData.blendMode = "source-over"), this.contextData.restore(t)) : this.canvasContext.restore()
        }, CanvasRendererBase.prototype.configAnimation = function(t) {
          if (this.animationItem.wrapper) {
            this.animationItem.container = createTag("canvas");
            var e = this.animationItem.container.style;
            e.width = "100%", e.height = "100%";
            var n = "0px 0px 0px";
            e.transformOrigin = n, e.mozTransformOrigin = n, e.webkitTransformOrigin = n, e["-webkit-transform"] = n, e.contentVisibility = this.renderConfig.contentVisibility, this.animationItem.wrapper.appendChild(this.animationItem.container), this.canvasContext = this.animationItem.container.getContext("2d"), this.renderConfig.className && this.animationItem.container.setAttribute("class", this.renderConfig.className), this.renderConfig.id && this.animationItem.container.setAttribute("id", this.renderConfig.id)
          } else this.canvasContext = this.renderConfig.context;
          this.contextData.setContext(this.canvasContext), this.data = t, this.layers = t.layers, this.transformCanvas = {
            w: t.w,
            h: t.h,
            sx: 0,
            sy: 0,
            tx: 0,
            ty: 0
          }, this.setupGlobalData(t, document.body), this.globalData.canvasContext = this.canvasContext, this.globalData.renderer = this, this.globalData.isDashed = !1, this.globalData.progressiveLoad = this.renderConfig.progressiveLoad, this.globalData.transformCanvas = this.transformCanvas, this.elements = createSizedArray(t.layers.length), this.updateContainerSize()
        }, CanvasRendererBase.prototype.updateContainerSize = function(t, e) {
          var n, r, i, a;
          if (this.reset(), t ? (n = t, r = e, this.canvasContext.canvas.width = n, this.canvasContext.canvas.height = r) : (this.animationItem.wrapper && this.animationItem.container ? (n = this.animationItem.wrapper.offsetWidth, r = this.animationItem.wrapper.offsetHeight) : (n = this.canvasContext.canvas.width, r = this.canvasContext.canvas.height), this.canvasContext.canvas.width = n * this.renderConfig.dpr, this.canvasContext.canvas.height = r * this.renderConfig.dpr), -1 !== this.renderConfig.preserveAspectRatio.indexOf("meet") || -1 !== this.renderConfig.preserveAspectRatio.indexOf("slice")) {
            var s = this.renderConfig.preserveAspectRatio.split(" "),
              o = s[1] || "meet",
              l = s[0] || "xMidYMid",
              u = l.substr(0, 4),
              h = l.substr(4);
            i = n / r, (a = this.transformCanvas.w / this.transformCanvas.h) > i && "meet" === o || a < i && "slice" === o ? (this.transformCanvas.sx = n / (this.transformCanvas.w / this.renderConfig.dpr), this.transformCanvas.sy = n / (this.transformCanvas.w / this.renderConfig.dpr)) : (this.transformCanvas.sx = r / (this.transformCanvas.h / this.renderConfig.dpr), this.transformCanvas.sy = r / (this.transformCanvas.h / this.renderConfig.dpr)), this.transformCanvas.tx = "xMid" === u && (a < i && "meet" === o || a > i && "slice" === o) ? (n - this.transformCanvas.w * (r / this.transformCanvas.h)) / 2 * this.renderConfig.dpr : "xMax" === u && (a < i && "meet" === o || a > i && "slice" === o) ? (n - this.transformCanvas.w * (r / this.transformCanvas.h)) * this.renderConfig.dpr : 0, this.transformCanvas.ty = "YMid" === h && (a > i && "meet" === o || a < i && "slice" === o) ? (r - this.transformCanvas.h * (n / this.transformCanvas.w)) / 2 * this.renderConfig.dpr : "YMax" === h && (a > i && "meet" === o || a < i && "slice" === o) ? (r - this.transformCanvas.h * (n / this.transformCanvas.w)) * this.renderConfig.dpr : 0
          } else "none" === this.renderConfig.preserveAspectRatio ? (this.transformCanvas.sx = n / (this.transformCanvas.w / this.renderConfig.dpr), this.transformCanvas.sy = r / (this.transformCanvas.h / this.renderConfig.dpr), this.transformCanvas.tx = 0, this.transformCanvas.ty = 0) : (this.transformCanvas.sx = this.renderConfig.dpr, this.transformCanvas.sy = this.renderConfig.dpr, this.transformCanvas.tx = 0, this.transformCanvas.ty = 0);
          this.transformCanvas.props = [this.transformCanvas.sx, 0, 0, 0, 0, this.transformCanvas.sy, 0, 0, 0, 0, 1, 0, this.transformCanvas.tx, this.transformCanvas.ty, 0, 1], this.ctxTransform(this.transformCanvas.props), this.canvasContext.beginPath(), this.canvasContext.rect(0, 0, this.transformCanvas.w, this.transformCanvas.h), this.canvasContext.closePath(), this.canvasContext.clip(), this.renderFrame(this.renderedFrame, !0)
        }, CanvasRendererBase.prototype.destroy = function() {
          var t;
          for (this.renderConfig.clearCanvas && this.animationItem.wrapper && (this.animationItem.wrapper.innerText = ""), t = (this.layers ? this.layers.length : 0) - 1; t >= 0; t -= 1) this.elements[t] && this.elements[t].destroy && this.elements[t].destroy();
          this.elements.length = 0, this.globalData.canvasContext = null, this.animationItem.container = null, this.destroyed = !0
        }, CanvasRendererBase.prototype.renderFrame = function(t, e) {
          if ((this.renderedFrame !== t || !0 !== this.renderConfig.clearCanvas || e) && !this.destroyed && -1 !== t) {
            var n;
            this.renderedFrame = t, this.globalData.frameNum = t - this.animationItem._isFirstFrame, this.globalData.frameId += 1, this.globalData._mdf = !this.renderConfig.clearCanvas || e, this.globalData.projectInterface.currentFrame = t;
            var r = this.layers.length;
            for (this.completeLayers || this.checkLayers(t), n = r - 1; n >= 0; n -= 1)(this.completeLayers || this.elements[n]) && this.elements[n].prepareFrame(t - this.layers[n].st);
            if (this.globalData._mdf) {
              for (!0 === this.renderConfig.clearCanvas ? this.canvasContext.clearRect(0, 0, this.transformCanvas.w, this.transformCanvas.h) : this.save(), n = r - 1; n >= 0; n -= 1)(this.completeLayers || this.elements[n]) && this.elements[n].renderFrame();
              !0 !== this.renderConfig.clearCanvas && this.restore()
            }
          }
        }, CanvasRendererBase.prototype.buildItem = function(t) {
          var e = this.elements;
          if (!e[t] && 99 !== this.layers[t].ty) {
            var n = this.createItem(this.layers[t], this, this.globalData);
            e[t] = n, n.initExpressions()
          }
        }, CanvasRendererBase.prototype.checkPendingElements = function() {
          for (; this.pendingElements.length;) this.pendingElements.pop().checkParenting()
        }, CanvasRendererBase.prototype.hide = function() {
          this.animationItem.container.style.display = "none"
        }, CanvasRendererBase.prototype.show = function() {
          this.animationItem.container.style.display = "block"
        }, CVContextData.prototype.duplicate = function() {
          var t = 2 * this._length,
            e = 0;
          for (e = this._length; e < t; e += 1) this.stack[e] = new CanvasContext;
          this._length = t
        }, CVContextData.prototype.reset = function() {
          this.cArrPos = 0, this.cTr.reset(), this.stack[this.cArrPos].opacity = 1
        }, CVContextData.prototype.restore = function(t) {
          this.cArrPos -= 1;
          var e, n = this.stack[this.cArrPos],
            r = n.transform,
            i = this.cTr.props;
          for (e = 0; e < 16; e += 1) i[e] = r[e];
          if (t) {
            this.nativeContext.restore();
            var a = this.stack[this.cArrPos + 1];
            this.appliedFillStyle = a.fillStyle, this.appliedStrokeStyle = a.strokeStyle, this.appliedLineWidth = a.lineWidth, this.appliedLineCap = a.lineCap, this.appliedLineJoin = a.lineJoin, this.appliedMiterLimit = a.miterLimit
          }
          this.nativeContext.setTransform(r[0], r[1], r[4], r[5], r[12], r[13]), (t || -1 !== n.opacity && this.currentOpacity !== n.opacity) && (this.nativeContext.globalAlpha = n.opacity, this.currentOpacity = n.opacity), this.currentFillStyle = n.fillStyle, this.currentStrokeStyle = n.strokeStyle, this.currentLineWidth = n.lineWidth, this.currentLineCap = n.lineCap, this.currentLineJoin = n.lineJoin, this.currentMiterLimit = n.miterLimit
        }, CVContextData.prototype.save = function(t) {
          t && this.nativeContext.save();
          var e = this.cTr.props;
          this._length <= this.cArrPos && this.duplicate();
          var n, r = this.stack[this.cArrPos];
          for (n = 0; n < 16; n += 1) r.transform[n] = e[n];
          this.cArrPos += 1;
          var i = this.stack[this.cArrPos];
          i.opacity = r.opacity, i.fillStyle = r.fillStyle, i.strokeStyle = r.strokeStyle, i.lineWidth = r.lineWidth, i.lineCap = r.lineCap, i.lineJoin = r.lineJoin, i.miterLimit = r.miterLimit
        }, CVContextData.prototype.setOpacity = function(t) {
          this.stack[this.cArrPos].opacity = t
        }, CVContextData.prototype.setContext = function(t) {
          this.nativeContext = t
        }, CVContextData.prototype.fillStyle = function(t) {
          this.stack[this.cArrPos].fillStyle !== t && (this.currentFillStyle = t, this.stack[this.cArrPos].fillStyle = t)
        }, CVContextData.prototype.strokeStyle = function(t) {
          this.stack[this.cArrPos].strokeStyle !== t && (this.currentStrokeStyle = t, this.stack[this.cArrPos].strokeStyle = t)
        }, CVContextData.prototype.lineWidth = function(t) {
          this.stack[this.cArrPos].lineWidth !== t && (this.currentLineWidth = t, this.stack[this.cArrPos].lineWidth = t)
        }, CVContextData.prototype.lineCap = function(t) {
          this.stack[this.cArrPos].lineCap !== t && (this.currentLineCap = t, this.stack[this.cArrPos].lineCap = t)
        }, CVContextData.prototype.lineJoin = function(t) {
          this.stack[this.cArrPos].lineJoin !== t && (this.currentLineJoin = t, this.stack[this.cArrPos].lineJoin = t)
        }, CVContextData.prototype.miterLimit = function(t) {
          this.stack[this.cArrPos].miterLimit !== t && (this.currentMiterLimit = t, this.stack[this.cArrPos].miterLimit = t)
        }, CVContextData.prototype.transform = function(t) {
          this.transformMat.cloneFromProps(t);
          var e = this.cTr;
          this.transformMat.multiply(e), e.cloneFromProps(this.transformMat.props);
          var n = e.props;
          this.nativeContext.setTransform(n[0], n[1], n[4], n[5], n[12], n[13])
        }, CVContextData.prototype.opacity = function(t) {
          var e = this.stack[this.cArrPos].opacity;
          e *= t < 0 ? 0 : t, this.stack[this.cArrPos].opacity !== e && (this.currentOpacity !== t && (this.nativeContext.globalAlpha = t, this.currentOpacity = t), this.stack[this.cArrPos].opacity = e)
        }, CVContextData.prototype.fill = function(t) {
          this.appliedFillStyle !== this.currentFillStyle && (this.appliedFillStyle = this.currentFillStyle, this.nativeContext.fillStyle = this.appliedFillStyle), this.nativeContext.fill(t)
        }, CVContextData.prototype.fillRect = function(t, e, n, r) {
          this.appliedFillStyle !== this.currentFillStyle && (this.appliedFillStyle = this.currentFillStyle, this.nativeContext.fillStyle = this.appliedFillStyle), this.nativeContext.fillRect(t, e, n, r)
        }, CVContextData.prototype.stroke = function() {
          this.appliedStrokeStyle !== this.currentStrokeStyle && (this.appliedStrokeStyle = this.currentStrokeStyle, this.nativeContext.strokeStyle = this.appliedStrokeStyle), this.appliedLineWidth !== this.currentLineWidth && (this.appliedLineWidth = this.currentLineWidth, this.nativeContext.lineWidth = this.appliedLineWidth), this.appliedLineCap !== this.currentLineCap && (this.appliedLineCap = this.currentLineCap, this.nativeContext.lineCap = this.appliedLineCap), this.appliedLineJoin !== this.currentLineJoin && (this.appliedLineJoin = this.currentLineJoin, this.nativeContext.lineJoin = this.appliedLineJoin), this.appliedMiterLimit !== this.currentMiterLimit && (this.appliedMiterLimit = this.currentMiterLimit, this.nativeContext.miterLimit = this.appliedMiterLimit), this.nativeContext.stroke()
        }, extendPrototype([CanvasRendererBase, ICompElement, CVBaseElement], CVCompElement), CVCompElement.prototype.renderInnerContent = function() {
          var t, e = this.canvasContext;
          for (e.beginPath(), e.moveTo(0, 0), e.lineTo(this.data.w, 0), e.lineTo(this.data.w, this.data.h), e.lineTo(0, this.data.h), e.lineTo(0, 0), e.clip(), t = this.layers.length - 1; t >= 0; t -= 1)(this.completeLayers || this.elements[t]) && this.elements[t].renderFrame()
        }, CVCompElement.prototype.destroy = function() {
          var t;
          for (t = this.layers.length - 1; t >= 0; t -= 1) this.elements[t] && this.elements[t].destroy();
          this.layers = null, this.elements = null
        }, CVCompElement.prototype.createComp = function(t) {
          return new CVCompElement(t, this.globalData, this)
        }, extendPrototype([CanvasRendererBase], CanvasRenderer), CanvasRenderer.prototype.createComp = function(t) {
          return new CVCompElement(t, this.globalData, this)
        }, HBaseElement.prototype = {
          checkBlendMode: function() {},
          initRendererElement: function() {
            this.baseElement = createTag(this.data.tg || "div"), this.data.hasMask ? (this.svgElement = createNS("svg"), this.layerElement = createNS("g"), this.maskedElement = this.layerElement, this.svgElement.appendChild(this.layerElement), this.baseElement.appendChild(this.svgElement)) : this.layerElement = this.baseElement, styleDiv(this.baseElement)
          },
          createContainerElements: function() {
            this.renderableEffectsManager = new CVEffects(this), this.transformedElement = this.baseElement, this.maskedElement = this.layerElement, this.data.ln && this.layerElement.setAttribute("id", this.data.ln), this.data.cl && this.layerElement.setAttribute("class", this.data.cl), 0 !== this.data.bm && this.setBlendMode()
          },
          renderElement: function() {
            var t = this.transformedElement ? this.transformedElement.style : {};
            if (this.finalTransform._matMdf) {
              var e = this.finalTransform.mat.toCSS();
              t.transform = e, t.webkitTransform = e
            }
            this.finalTransform._opMdf && (t.opacity = this.finalTransform.mProp.o.v)
          },
          renderFrame: function() {
            this.data.hd || this.hidden || (this.renderTransform(), this.renderRenderable(), this.renderElement(), this.renderInnerContent(), this._isFirstFrame && (this._isFirstFrame = !1))
          },
          destroy: function() {
            this.layerElement = null, this.transformedElement = null, this.matteElement && (this.matteElement = null), this.maskManager && (this.maskManager.destroy(), this.maskManager = null)
          },
          createRenderableComponents: function() {
            this.maskManager = new MaskElement(this.data, this, this.globalData)
          },
          addEffects: function() {},
          setMatte: function() {}
        }, HBaseElement.prototype.getBaseElement = SVGBaseElement.prototype.getBaseElement, HBaseElement.prototype.destroyBaseElement = HBaseElement.prototype.destroy, HBaseElement.prototype.buildElementParenting = BaseRenderer.prototype.buildElementParenting, extendPrototype([BaseElement, TransformElement, HBaseElement, HierarchyElement, FrameElement, RenderableDOMElement], HSolidElement), HSolidElement.prototype.createContent = function() {
          var t;
          this.data.hasMask ? ((t = createNS("rect")).setAttribute("width", this.data.sw), t.setAttribute("height", this.data.sh), t.setAttribute("fill", this.data.sc), this.svgElement.setAttribute("width", this.data.sw), this.svgElement.setAttribute("height", this.data.sh)) : ((t = createTag("div")).style.width = this.data.sw + "px", t.style.height = this.data.sh + "px", t.style.backgroundColor = this.data.sc), this.layerElement.appendChild(t)
        }, extendPrototype([BaseElement, TransformElement, HSolidElement, SVGShapeElement, HBaseElement, HierarchyElement, FrameElement, RenderableElement], HShapeElement), HShapeElement.prototype._renderShapeFrame = HShapeElement.prototype.renderInnerContent, HShapeElement.prototype.createContent = function() {
          var t;
          if (this.baseElement.style.fontSize = 0, this.data.hasMask) this.layerElement.appendChild(this.shapesContainer), t = this.svgElement;
          else {
            t = createNS("svg");
            var e = this.comp.data ? this.comp.data : this.globalData.compSize;
            t.setAttribute("width", e.w), t.setAttribute("height", e.h), t.appendChild(this.shapesContainer), this.layerElement.appendChild(t)
          }
          this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.shapesContainer, 0, [], !0), this.filterUniqueShapes(), this.shapeCont = t
        }, HShapeElement.prototype.getTransformedPoint = function(t, e) {
          var n, r = t.length;
          for (n = 0; n < r; n += 1) e = t[n].mProps.v.applyToPointArray(e[0], e[1], 0);
          return e
        }, HShapeElement.prototype.calculateShapeBoundingBox = function(t, e) {
          var n, r, i, a, s, o = t.sh.v,
            l = t.transformers,
            u = o._length;
          if (!(u <= 1)) {
            for (n = 0; n < u - 1; n += 1) r = this.getTransformedPoint(l, o.v[n]), i = this.getTransformedPoint(l, o.o[n]), a = this.getTransformedPoint(l, o.i[n + 1]), s = this.getTransformedPoint(l, o.v[n + 1]), this.checkBounds(r, i, a, s, e);
            o.c && (r = this.getTransformedPoint(l, o.v[n]), i = this.getTransformedPoint(l, o.o[n]), a = this.getTransformedPoint(l, o.i[0]), s = this.getTransformedPoint(l, o.v[0]), this.checkBounds(r, i, a, s, e))
          }
        }, HShapeElement.prototype.checkBounds = function(t, e, n, r, i) {
          this.getBoundsOfCurve(t, e, n, r);
          var a = this.shapeBoundingBox;
          i.x = bmMin(a.left, i.x), i.xMax = bmMax(a.right, i.xMax), i.y = bmMin(a.top, i.y), i.yMax = bmMax(a.bottom, i.yMax)
        }, HShapeElement.prototype.shapeBoundingBox = {
          left: 0,
          right: 0,
          top: 0,
          bottom: 0
        }, HShapeElement.prototype.tempBoundingBox = {
          x: 0,
          xMax: 0,
          y: 0,
          yMax: 0,
          width: 0,
          height: 0
        }, HShapeElement.prototype.getBoundsOfCurve = function(t, e, n, r) {
          for (var i, a, s, o, l, u, h, c = [
              [t[0], r[0]],
              [t[1], r[1]]
            ], p = 0; p < 2; ++p) a = 6 * t[p] - 12 * e[p] + 6 * n[p], i = -3 * t[p] + 9 * e[p] - 9 * n[p] + 3 * r[p], s = 3 * e[p] - 3 * t[p], a |= 0, s |= 0, 0 == (i |= 0) && 0 === a || (0 === i ? (o = -s / a) > 0 && o < 1 && c[p].push(this.calculateF(o, t, e, n, r, p)) : (l = a * a - 4 * s * i) >= 0 && ((u = (-a + bmSqrt(l)) / (2 * i)) > 0 && u < 1 && c[p].push(this.calculateF(u, t, e, n, r, p)), (h = (-a - bmSqrt(l)) / (2 * i)) > 0 && h < 1 && c[p].push(this.calculateF(h, t, e, n, r, p))));
          this.shapeBoundingBox.left = bmMin.apply(null, c[0]), this.shapeBoundingBox.top = bmMin.apply(null, c[1]), this.shapeBoundingBox.right = bmMax.apply(null, c[0]), this.shapeBoundingBox.bottom = bmMax.apply(null, c[1])
        }, HShapeElement.prototype.calculateF = function(t, e, n, r, i, a) {
          return bmPow(1 - t, 3) * e[a] + 3 * bmPow(1 - t, 2) * t * n[a] + 3 * (1 - t) * bmPow(t, 2) * r[a] + bmPow(t, 3) * i[a]
        }, HShapeElement.prototype.calculateBoundingBox = function(t, e) {
          var n, r = t.length;
          for (n = 0; n < r; n += 1) t[n] && t[n].sh ? this.calculateShapeBoundingBox(t[n], e) : t[n] && t[n].it ? this.calculateBoundingBox(t[n].it, e) : t[n] && t[n].style && t[n].w && this.expandStrokeBoundingBox(t[n].w, e)
        }, HShapeElement.prototype.expandStrokeBoundingBox = function(t, e) {
          var n = 0;
          if (t.keyframes) {
            for (var r = 0; r < t.keyframes.length; r += 1) {
              var i = t.keyframes[r].s;
              i > n && (n = i)
            }
            n *= t.mult
          } else n = t.v * t.mult;
          e.x -= n, e.xMax += n, e.y -= n, e.yMax += n
        }, HShapeElement.prototype.currentBoxContains = function(t) {
          return this.currentBBox.x <= t.x && this.currentBBox.y <= t.y && this.currentBBox.width + this.currentBBox.x >= t.x + t.width && this.currentBBox.height + this.currentBBox.y >= t.y + t.height
        }, HShapeElement.prototype.renderInnerContent = function() {
          if (this._renderShapeFrame(), !this.hidden && (this._isFirstFrame || this._mdf)) {
            var t = this.tempBoundingBox,
              e = 999999;
            if (t.x = e, t.xMax = -e, t.y = e, t.yMax = -e, this.calculateBoundingBox(this.itemsData, t), t.width = t.xMax < t.x ? 0 : t.xMax - t.x, t.height = t.yMax < t.y ? 0 : t.yMax - t.y, this.currentBoxContains(t)) return;
            var n = !1;
            if (this.currentBBox.w !== t.width && (this.currentBBox.w = t.width, this.shapeCont.setAttribute("width", t.width), n = !0), this.currentBBox.h !== t.height && (this.currentBBox.h = t.height, this.shapeCont.setAttribute("height", t.height), n = !0), n || this.currentBBox.x !== t.x || this.currentBBox.y !== t.y) {
              this.currentBBox.w = t.width, this.currentBBox.h = t.height, this.currentBBox.x = t.x, this.currentBBox.y = t.y, this.shapeCont.setAttribute("viewBox", this.currentBBox.x + " " + this.currentBBox.y + " " + this.currentBBox.w + " " + this.currentBBox.h);
              var r = this.shapeCont.style,
                i = "translate(" + this.currentBBox.x + "px," + this.currentBBox.y + "px)";
              r.transform = i, r.webkitTransform = i
            }
          }
        }, extendPrototype([BaseElement, TransformElement, HBaseElement, HierarchyElement, FrameElement, RenderableDOMElement, ITextElement], HTextElement), HTextElement.prototype.createContent = function() {
          if (this.isMasked = this.checkMasks(), this.isMasked) {
            this.renderType = "svg", this.compW = this.comp.data.w, this.compH = this.comp.data.h, this.svgElement.setAttribute("width", this.compW), this.svgElement.setAttribute("height", this.compH);
            var t = createNS("g");
            this.maskedElement.appendChild(t), this.innerElem = t
          } else this.renderType = "html", this.innerElem = this.layerElement;
          this.checkParenting()
        }, HTextElement.prototype.buildNewText = function() {
          var t = this.textProperty.currentData;
          this.renderedLetters = createSizedArray(t.l ? t.l.length : 0);
          var e = this.innerElem.style,
            n = t.fc ? this.buildColor(t.fc) : "rgba(0,0,0,0)";
          e.fill = n, e.color = n, t.sc && (e.stroke = this.buildColor(t.sc), e.strokeWidth = t.sw + "px");
          var r, i, a = this.globalData.fontManager.getFontByName(t.f);
          if (!this.globalData.fontManager.chars)
            if (e.fontSize = t.finalSize + "px", e.lineHeight = t.finalSize + "px", a.fClass) this.innerElem.className = a.fClass;
            else {
              e.fontFamily = a.fFamily;
              var s = t.fWeight,
                o = t.fStyle;
              e.fontStyle = o, e.fontWeight = s
            } var l, u, h, c = t.l;
          i = c.length;
          var p, f = this.mHelper,
            d = "",
            m = 0;
          for (r = 0; r < i; r += 1) {
            if (this.globalData.fontManager.chars ? (this.textPaths[m] ? l = this.textPaths[m] : ((l = createNS("path")).setAttribute("stroke-linecap", lineCapEnum[1]), l.setAttribute("stroke-linejoin", lineJoinEnum[2]), l.setAttribute("stroke-miterlimit", "4")), this.isMasked || (this.textSpans[m] ? h = (u = this.textSpans[m]).children[0] : ((u = createTag("div")).style.lineHeight = 0, (h = createNS("svg")).appendChild(l), styleDiv(u)))) : this.isMasked ? l = this.textPaths[m] ? this.textPaths[m] : createNS("text") : this.textSpans[m] ? (u = this.textSpans[m], l = this.textPaths[m]) : (styleDiv(u = createTag("span")), styleDiv(l = createTag("span")), u.appendChild(l)), this.globalData.fontManager.chars) {
              var v, g = this.globalData.fontManager.getCharData(t.finalText[r], a.fStyle, this.globalData.fontManager.getFontByName(t.f).fFamily);
              if (v = g ? g.data : null, f.reset(), v && v.shapes && v.shapes.length && (p = v.shapes[0].it, f.scale(t.finalSize / 100, t.finalSize / 100), d = this.createPathShape(f, p), l.setAttribute("d", d)), this.isMasked) this.innerElem.appendChild(l);
              else {
                if (this.innerElem.appendChild(u), v && v.shapes) {
                  document.body.appendChild(h);
                  var y = h.getBBox();
                  h.setAttribute("width", y.width + 2), h.setAttribute("height", y.height + 2), h.setAttribute("viewBox", y.x - 1 + " " + (y.y - 1) + " " + (y.width + 2) + " " + (y.height + 2));
                  var b = h.style,
                    x = "translate(" + (y.x - 1) + "px," + (y.y - 1) + "px)";
                  b.transform = x, b.webkitTransform = x, c[r].yOffset = y.y - 1
                } else h.setAttribute("width", 1), h.setAttribute("height", 1);
                u.appendChild(h)
              }
            } else if (l.textContent = c[r].val, l.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve"), this.isMasked) this.innerElem.appendChild(l);
            else {
              this.innerElem.appendChild(u);
              var S = l.style,
                E = "translate3d(0," + -t.finalSize / 1.2 + "px,0)";
              S.transform = E, S.webkitTransform = E
            }
            this.isMasked ? this.textSpans[m] = l : this.textSpans[m] = u, this.textSpans[m].style.display = "block", this.textPaths[m] = l, m += 1
          }
          for (; m < this.textSpans.length;) this.textSpans[m].style.display = "none", m += 1
        }, HTextElement.prototype.renderInnerContent = function() {
          var t;
          if (this.validateText(), this.data.singleShape) {
            if (!this._isFirstFrame && !this.lettersChangedFlag) return;
            if (this.isMasked && this.finalTransform._matMdf) {
              this.svgElement.setAttribute("viewBox", -this.finalTransform.mProp.p.v[0] + " " + -this.finalTransform.mProp.p.v[1] + " " + this.compW + " " + this.compH), t = this.svgElement.style;
              var e = "translate(" + -this.finalTransform.mProp.p.v[0] + "px," + -this.finalTransform.mProp.p.v[1] + "px)";
              t.transform = e, t.webkitTransform = e
            }
          }
          if (this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag), this.lettersChangedFlag || this.textAnimator.lettersChangedFlag) {
            var n, r, i, a, s, o = 0,
              l = this.textAnimator.renderedLetters,
              u = this.textProperty.currentData.l;
            for (r = u.length, n = 0; n < r; n += 1) u[n].n ? o += 1 : (a = this.textSpans[n], s = this.textPaths[n], i = l[o], o += 1, i._mdf.m && (this.isMasked ? a.setAttribute("transform", i.m) : (a.style.webkitTransform = i.m, a.style.transform = i.m)), a.style.opacity = i.o, i.sw && i._mdf.sw && s.setAttribute("stroke-width", i.sw), i.sc && i._mdf.sc && s.setAttribute("stroke", i.sc), i.fc && i._mdf.fc && (s.setAttribute("fill", i.fc), s.style.color = i.fc));
            if (this.innerElem.getBBox && !this.hidden && (this._isFirstFrame || this._mdf)) {
              var h = this.innerElem.getBBox();
              if (this.currentBBox.w !== h.width && (this.currentBBox.w = h.width, this.svgElement.setAttribute("width", h.width)), this.currentBBox.h !== h.height && (this.currentBBox.h = h.height, this.svgElement.setAttribute("height", h.height)), this.currentBBox.w !== h.width + 2 || this.currentBBox.h !== h.height + 2 || this.currentBBox.x !== h.x - 1 || this.currentBBox.y !== h.y - 1) {
                this.currentBBox.w = h.width + 2, this.currentBBox.h = h.height + 2, this.currentBBox.x = h.x - 1, this.currentBBox.y = h.y - 1, this.svgElement.setAttribute("viewBox", this.currentBBox.x + " " + this.currentBBox.y + " " + this.currentBBox.w + " " + this.currentBBox.h), t = this.svgElement.style;
                var c = "translate(" + this.currentBBox.x + "px," + this.currentBBox.y + "px)";
                t.transform = c, t.webkitTransform = c
              }
            }
          }
        }, extendPrototype([BaseElement, FrameElement, HierarchyElement], HCameraElement), HCameraElement.prototype.setup = function() {
          var t, e, n, r, i = this.comp.threeDElements.length;
          for (t = 0; t < i; t += 1)
            if ("3d" === (e = this.comp.threeDElements[t]).type) {
              n = e.perspectiveElem.style, r = e.container.style;
              var a = this.pe.v + "px",
                s = "0px 0px 0px",
                o = "matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)";
              n.perspective = a, n.webkitPerspective = a, r.transformOrigin = s, r.mozTransformOrigin = s, r.webkitTransformOrigin = s, n.transform = o, n.webkitTransform = o
            }
        }, HCameraElement.prototype.createElements = function() {}, HCameraElement.prototype.hide = function() {}, HCameraElement.prototype.renderFrame = function() {
          var t, e, n = this._isFirstFrame;
          if (this.hierarchy)
            for (e = this.hierarchy.length, t = 0; t < e; t += 1) n = this.hierarchy[t].finalTransform.mProp._mdf || n;
          if (n || this.pe._mdf || this.p && this.p._mdf || this.px && (this.px._mdf || this.py._mdf || this.pz._mdf) || this.rx._mdf || this.ry._mdf || this.rz._mdf || this.or._mdf || this.a && this.a._mdf) {
            if (this.mat.reset(), this.hierarchy)
              for (t = e = this.hierarchy.length - 1; t >= 0; t -= 1) {
                var r = this.hierarchy[t].finalTransform.mProp;
                this.mat.translate(-r.p.v[0], -r.p.v[1], r.p.v[2]), this.mat.rotateX(-r.or.v[0]).rotateY(-r.or.v[1]).rotateZ(r.or.v[2]), this.mat.rotateX(-r.rx.v).rotateY(-r.ry.v).rotateZ(r.rz.v), this.mat.scale(1 / r.s.v[0], 1 / r.s.v[1], 1 / r.s.v[2]), this.mat.translate(r.a.v[0], r.a.v[1], r.a.v[2])
              }
            if (this.p ? this.mat.translate(-this.p.v[0], -this.p.v[1], this.p.v[2]) : this.mat.translate(-this.px.v, -this.py.v, this.pz.v), this.a) {
              var i;
              i = this.p ? [this.p.v[0] - this.a.v[0], this.p.v[1] - this.a.v[1], this.p.v[2] - this.a.v[2]] : [this.px.v - this.a.v[0], this.py.v - this.a.v[1], this.pz.v - this.a.v[2]];
              var a = Math.sqrt(Math.pow(i[0], 2) + Math.pow(i[1], 2) + Math.pow(i[2], 2)),
                s = [i[0] / a, i[1] / a, i[2] / a],
                o = Math.sqrt(s[2] * s[2] + s[0] * s[0]),
                l = Math.atan2(s[1], o),
                u = Math.atan2(s[0], -s[2]);
              this.mat.rotateY(u).rotateX(-l)
            }
            this.mat.rotateX(-this.rx.v).rotateY(-this.ry.v).rotateZ(this.rz.v), this.mat.rotateX(-this.or.v[0]).rotateY(-this.or.v[1]).rotateZ(this.or.v[2]), this.mat.translate(this.globalData.compSize.w / 2, this.globalData.compSize.h / 2, 0), this.mat.translate(0, 0, this.pe.v);
            var h = !this._prevMat.equals(this.mat);
            if ((h || this.pe._mdf) && this.comp.threeDElements) {
              var c, p, f;
              for (e = this.comp.threeDElements.length, t = 0; t < e; t += 1)
                if ("3d" === (c = this.comp.threeDElements[t]).type) {
                  if (h) {
                    var d = this.mat.toCSS();
                    (f = c.container.style).transform = d, f.webkitTransform = d
                  }
                  this.pe._mdf && ((p = c.perspectiveElem.style).perspective = this.pe.v + "px", p.webkitPerspective = this.pe.v + "px")
                } this.mat.clone(this._prevMat)
            }
          }
          this._isFirstFrame = !1
        }, HCameraElement.prototype.prepareFrame = function(t) {
          this.prepareProperties(t, !0)
        }, HCameraElement.prototype.destroy = function() {}, HCameraElement.prototype.getBaseElement = function() {
          return null
        }, extendPrototype([BaseElement, TransformElement, HBaseElement, HSolidElement, HierarchyElement, FrameElement, RenderableElement], HImageElement), HImageElement.prototype.createContent = function() {
          var t = this.globalData.getAssetsPath(this.assetData),
            e = new Image;
          this.data.hasMask ? (this.imageElem = createNS("image"), this.imageElem.setAttribute("width", this.assetData.w + "px"), this.imageElem.setAttribute("height", this.assetData.h + "px"), this.imageElem.setAttributeNS("http://www.w3.org/1999/xlink", "href", t), this.layerElement.appendChild(this.imageElem), this.baseElement.setAttribute("width", this.assetData.w), this.baseElement.setAttribute("height", this.assetData.h)) : this.layerElement.appendChild(e), e.crossOrigin = "anonymous", e.src = t, this.data.ln && this.baseElement.setAttribute("id", this.data.ln)
        }, extendPrototype([BaseRenderer], HybridRendererBase), HybridRendererBase.prototype.buildItem = SVGRenderer.prototype.buildItem, HybridRendererBase.prototype.checkPendingElements = function() {
          for (; this.pendingElements.length;) this.pendingElements.pop().checkParenting()
        }, HybridRendererBase.prototype.appendElementInPos = function(t, e) {
          var n = t.getBaseElement();
          if (n) {
            var r = this.layers[e];
            if (r.ddd && this.supports3d) this.addTo3dContainer(n, e);
            else if (this.threeDElements) this.addTo3dContainer(n, e);
            else {
              for (var i, a, s = 0; s < e;) this.elements[s] && !0 !== this.elements[s] && this.elements[s].getBaseElement && (a = this.elements[s], i = (this.layers[s].ddd ? this.getThreeDContainerByPos(s) : a.getBaseElement()) || i), s += 1;
              i ? r.ddd && this.supports3d || this.layerElement.insertBefore(n, i) : r.ddd && this.supports3d || this.layerElement.appendChild(n)
            }
          }
        }, HybridRendererBase.prototype.createShape = function(t) {
          return this.supports3d ? new HShapeElement(t, this.globalData, this) : new SVGShapeElement(t, this.globalData, this)
        }, HybridRendererBase.prototype.createText = function(t) {
          return this.supports3d ? new HTextElement(t, this.globalData, this) : new SVGTextLottieElement(t, this.globalData, this)
        }, HybridRendererBase.prototype.createCamera = function(t) {
          return this.camera = new HCameraElement(t, this.globalData, this), this.camera
        }, HybridRendererBase.prototype.createImage = function(t) {
          return this.supports3d ? new HImageElement(t, this.globalData, this) : new IImageElement(t, this.globalData, this)
        }, HybridRendererBase.prototype.createSolid = function(t) {
          return this.supports3d ? new HSolidElement(t, this.globalData, this) : new ISolidElement(t, this.globalData, this)
        }, HybridRendererBase.prototype.createNull = SVGRenderer.prototype.createNull, HybridRendererBase.prototype.getThreeDContainerByPos = function(t) {
          for (var e = 0, n = this.threeDElements.length; e < n;) {
            if (this.threeDElements[e].startPos <= t && this.threeDElements[e].endPos >= t) return this.threeDElements[e].perspectiveElem;
            e += 1
          }
          return null
        }, HybridRendererBase.prototype.createThreeDContainer = function(t, e) {
          var n, r, i = createTag("div");
          styleDiv(i);
          var a = createTag("div");
          if (styleDiv(a), "3d" === e) {
            (n = i.style).width = this.globalData.compSize.w + "px", n.height = this.globalData.compSize.h + "px";
            var s = "50% 50%";
            n.webkitTransformOrigin = s, n.mozTransformOrigin = s, n.transformOrigin = s;
            var o = "matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)";
            (r = a.style).transform = o, r.webkitTransform = o
          }
          i.appendChild(a);
          var l = {
            container: a,
            perspectiveElem: i,
            startPos: t,
            endPos: t,
            type: e
          };
          return this.threeDElements.push(l), l
        }, HybridRendererBase.prototype.build3dContainers = function() {
          var t, e, n = this.layers.length,
            r = "";
          for (t = 0; t < n; t += 1) this.layers[t].ddd && 3 !== this.layers[t].ty ? ("3d" !== r && (r = "3d", e = this.createThreeDContainer(t, "3d")), e.endPos = Math.max(e.endPos, t)) : ("2d" !== r && (r = "2d", e = this.createThreeDContainer(t, "2d")), e.endPos = Math.max(e.endPos, t));
          for (t = (n = this.threeDElements.length) - 1; t >= 0; t -= 1) this.resizerElem.appendChild(this.threeDElements[t].perspectiveElem)
        }, HybridRendererBase.prototype.addTo3dContainer = function(t, e) {
          for (var n = 0, r = this.threeDElements.length; n < r;) {
            if (e <= this.threeDElements[n].endPos) {
              for (var i, a = this.threeDElements[n].startPos; a < e;) this.elements[a] && this.elements[a].getBaseElement && (i = this.elements[a].getBaseElement()), a += 1;
              i ? this.threeDElements[n].container.insertBefore(t, i) : this.threeDElements[n].container.appendChild(t);
              break
            }
            n += 1
          }
        }, HybridRendererBase.prototype.configAnimation = function(t) {
          var e = createTag("div"),
            n = this.animationItem.wrapper,
            r = e.style;
          r.width = t.w + "px", r.height = t.h + "px", this.resizerElem = e, styleDiv(e), r.transformStyle = "flat", r.mozTransformStyle = "flat", r.webkitTransformStyle = "flat", this.renderConfig.className && e.setAttribute("class", this.renderConfig.className), n.appendChild(e), r.overflow = "hidden";
          var i = createNS("svg");
          i.setAttribute("width", "1"), i.setAttribute("height", "1"), styleDiv(i), this.resizerElem.appendChild(i);
          var a = createNS("defs");
          i.appendChild(a), this.data = t, this.setupGlobalData(t, i), this.globalData.defs = a, this.layers = t.layers, this.layerElement = this.resizerElem, this.build3dContainers(), this.updateContainerSize()
        }, HybridRendererBase.prototype.destroy = function() {
          var t;
          this.animationItem.wrapper && (this.animationItem.wrapper.innerText = ""), this.animationItem.container = null, this.globalData.defs = null;
          var e = this.layers ? this.layers.length : 0;
          for (t = 0; t < e; t += 1) this.elements[t] && this.elements[t].destroy && this.elements[t].destroy();
          this.elements.length = 0, this.destroyed = !0, this.animationItem = null
        }, HybridRendererBase.prototype.updateContainerSize = function() {
          var t, e, n, r, i = this.animationItem.wrapper.offsetWidth,
            a = this.animationItem.wrapper.offsetHeight,
            s = i / a;
          this.globalData.compSize.w / this.globalData.compSize.h > s ? (t = i / this.globalData.compSize.w, e = i / this.globalData.compSize.w, n = 0, r = (a - this.globalData.compSize.h * (i / this.globalData.compSize.w)) / 2) : (t = a / this.globalData.compSize.h, e = a / this.globalData.compSize.h, n = (i - this.globalData.compSize.w * (a / this.globalData.compSize.h)) / 2, r = 0);
          var o = this.resizerElem.style;
          o.webkitTransform = "matrix3d(" + t + ",0,0,0,0," + e + ",0,0,0,0,1,0," + n + "," + r + ",0,1)", o.transform = o.webkitTransform
        }, HybridRendererBase.prototype.renderFrame = SVGRenderer.prototype.renderFrame, HybridRendererBase.prototype.hide = function() {
          this.resizerElem.style.display = "none"
        }, HybridRendererBase.prototype.show = function() {
          this.resizerElem.style.display = "block"
        }, HybridRendererBase.prototype.initItems = function() {
          if (this.buildAllItems(), this.camera) this.camera.setup();
          else {
            var t, e = this.globalData.compSize.w,
              n = this.globalData.compSize.h,
              r = this.threeDElements.length;
            for (t = 0; t < r; t += 1) {
              var i = this.threeDElements[t].perspectiveElem.style;
              i.webkitPerspective = Math.sqrt(Math.pow(e, 2) + Math.pow(n, 2)) + "px", i.perspective = i.webkitPerspective
            }
          }
        }, HybridRendererBase.prototype.searchExtraCompositions = function(t) {
          var e, n = t.length,
            r = createTag("div");
          for (e = 0; e < n; e += 1)
            if (t[e].xt) {
              var i = this.createComp(t[e], r, this.globalData.comp, null);
              i.initExpressions(), this.globalData.projectInterface.registerComposition(i)
            }
        }, extendPrototype([HybridRendererBase, ICompElement, HBaseElement], HCompElement), HCompElement.prototype._createBaseContainerElements = HCompElement.prototype.createContainerElements, HCompElement.prototype.createContainerElements = function() {
          this._createBaseContainerElements(), this.data.hasMask ? (this.svgElement.setAttribute("width", this.data.w), this.svgElement.setAttribute("height", this.data.h), this.transformedElement = this.baseElement) : this.transformedElement = this.layerElement
        }, HCompElement.prototype.addTo3dContainer = function(t, e) {
          for (var n, r = 0; r < e;) this.elements[r] && this.elements[r].getBaseElement && (n = this.elements[r].getBaseElement()), r += 1;
          n ? this.layerElement.insertBefore(t, n) : this.layerElement.appendChild(t)
        }, HCompElement.prototype.createComp = function(t) {
          return this.supports3d ? new HCompElement(t, this.globalData, this) : new SVGCompElement(t, this.globalData, this)
        }, extendPrototype([HybridRendererBase], HybridRenderer), HybridRenderer.prototype.createComp = function(t) {
          return this.supports3d ? new HCompElement(t, this.globalData, this) : new SVGCompElement(t, this.globalData, this)
        };
        var CompExpressionInterface = function(t) {
          function e(e) {
            for (var n = 0, r = t.layers.length; n < r;) {
              if (t.layers[n].nm === e || t.layers[n].ind === e) return t.elements[n].layerInterface;
              n += 1
            }
            return null
          }
          return Object.defineProperty(e, "_name", {
            value: t.data.nm
          }), e.layer = e, e.pixelAspect = 1, e.height = t.data.h || t.globalData.compSize.h, e.width = t.data.w || t.globalData.compSize.w, e.pixelAspect = 1, e.frameDuration = 1 / t.globalData.frameRate, e.displayStartTime = 0, e.numLayers = t.layers.length, e
        };

        function _typeof$2(t) {
          return _typeof$2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
          } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
          }, _typeof$2(t)
        }

        function seedRandom(t, e) {
          var n, r = this,
            i = 256,
            a = "random",
            s = e.pow(i, 6),
            o = e.pow(2, 52),
            l = 2 * o,
            u = 255;

          function h(t) {
            var e, n = t.length,
              r = this,
              a = 0,
              s = r.i = r.j = 0,
              o = r.S = [];
            for (n || (t = [n++]); a < i;) o[a] = a++;
            for (a = 0; a < i; a++) o[a] = o[s = u & s + t[a % n] + (e = o[a])], o[s] = e;
            r.g = function(t) {
              for (var e, n = 0, a = r.i, s = r.j, o = r.S; t--;) e = o[a = u & a + 1], n = n * i + o[u & (o[a] = o[s = u & s + e]) + (o[s] = e)];
              return r.i = a, r.j = s, n
            }
          }

          function c(t, e) {
            return e.i = t.i, e.j = t.j, e.S = t.S.slice(), e
          }

          function p(t, e) {
            var n, r = [],
              i = _typeof$2(t);
            if (e && "object" == i)
              for (n in t) try {
                r.push(p(t[n], e - 1))
              } catch (t) {}
            return r.length ? r : "string" == i ? t : t + "\0"
          }

          function f(t, e) {
            for (var n, r = t + "", i = 0; i < r.length;) e[u & i] = u & (n ^= 19 * e[u & i]) + r.charCodeAt(i++);
            return d(e)
          }

          function d(t) {
            return String.fromCharCode.apply(0, t)
          }
          e["seed" + a] = function(u, m, v) {
            var g = [],
              y = f(p((m = !0 === m ? {
                entropy: !0
              } : m || {}).entropy ? [u, d(t)] : null === u ? function() {
                try {
                  n;
                  var e = new Uint8Array(i);
                  return (r.crypto || r.msCrypto).getRandomValues(e), d(e)
                } catch (e) {
                  var a = r.navigator,
                    s = a && a.plugins;
                  return [+new Date, r, s, r.screen, d(t)]
                }
              }() : u, 3), g),
              b = new h(g),
              x = function() {
                for (var t = b.g(6), e = s, n = 0; t < o;) t = (t + n) * i, e *= i, n = b.g(1);
                for (; t >= l;) t /= 2, e /= 2, n >>>= 1;
                return (t + n) / e
              };
            return x.int32 = function() {
              return 0 | b.g(4)
            }, x.quick = function() {
              return b.g(4) / 4294967296
            }, x.double = x, f(d(b.S), t), (m.pass || v || function(t, n, r, i) {
              return i && (i.S && c(i, b), t.state = function() {
                return c(b, {})
              }), r ? (e[a] = t, n) : t
            })(x, y, "global" in m ? m.global : this == e, m.state)
          }, f(e.random(), t)
        }

        function initialize$2(t) {
          seedRandom([], t)
        }
        var propTypes = {
          SHAPE: "shape"
        };

        function _typeof$1(t) {
          return _typeof$1 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
          } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
          }, _typeof$1(t)
        }
        var ExpressionManager = function() {
            var ob = {},
              Math = BMMath,
              window = null,
              document = null,
              XMLHttpRequest = null,
              fetch = null,
              frames = null,
              _lottieGlobal = {};

            function resetFrame() {
              _lottieGlobal = {}
            }

            function $bm_isInstanceOfArray(t) {
              return t.constructor === Array || t.constructor === Float32Array
            }

            function isNumerable(t, e) {
              return "number" === t || e instanceof Number || "boolean" === t || "string" === t
            }

            function $bm_neg(t) {
              var e = _typeof$1(t);
              if ("number" === e || t instanceof Number || "boolean" === e) return -t;
              if ($bm_isInstanceOfArray(t)) {
                var n, r = t.length,
                  i = [];
                for (n = 0; n < r; n += 1) i[n] = -t[n];
                return i
              }
              return t.propType ? t.v : -t
            }
            initialize$2(BMMath);
            var easeInBez = BezierFactory.getBezierEasing(.333, 0, .833, .833, "easeIn").get,
              easeOutBez = BezierFactory.getBezierEasing(.167, .167, .667, 1, "easeOut").get,
              easeInOutBez = BezierFactory.getBezierEasing(.33, 0, .667, 1, "easeInOut").get;

            function sum(t, e) {
              var n = _typeof$1(t),
                r = _typeof$1(e);
              if (isNumerable(n, t) && isNumerable(r, e) || "string" === n || "string" === r) return t + e;
              if ($bm_isInstanceOfArray(t) && isNumerable(r, e)) return (t = t.slice(0))[0] += e, t;
              if (isNumerable(n, t) && $bm_isInstanceOfArray(e)) return (e = e.slice(0))[0] = t + e[0], e;
              if ($bm_isInstanceOfArray(t) && $bm_isInstanceOfArray(e)) {
                for (var i = 0, a = t.length, s = e.length, o = []; i < a || i < s;)("number" == typeof t[i] || t[i] instanceof Number) && ("number" == typeof e[i] || e[i] instanceof Number) ? o[i] = t[i] + e[i] : o[i] = void 0 === e[i] ? t[i] : t[i] || e[i], i += 1;
                return o
              }
              return 0
            }
            var add = sum;

            function sub(t, e) {
              var n = _typeof$1(t),
                r = _typeof$1(e);
              if (isNumerable(n, t) && isNumerable(r, e)) return "string" === n && (t = parseInt(t, 10)), "string" === r && (e = parseInt(e, 10)), t - e;
              if ($bm_isInstanceOfArray(t) && isNumerable(r, e)) return (t = t.slice(0))[0] -= e, t;
              if (isNumerable(n, t) && $bm_isInstanceOfArray(e)) return (e = e.slice(0))[0] = t - e[0], e;
              if ($bm_isInstanceOfArray(t) && $bm_isInstanceOfArray(e)) {
                for (var i = 0, a = t.length, s = e.length, o = []; i < a || i < s;)("number" == typeof t[i] || t[i] instanceof Number) && ("number" == typeof e[i] || e[i] instanceof Number) ? o[i] = t[i] - e[i] : o[i] = void 0 === e[i] ? t[i] : t[i] || e[i], i += 1;
                return o
              }
              return 0
            }

            function mul(t, e) {
              var n, r, i, a = _typeof$1(t),
                s = _typeof$1(e);
              if (isNumerable(a, t) && isNumerable(s, e)) return t * e;
              if ($bm_isInstanceOfArray(t) && isNumerable(s, e)) {
                for (i = t.length, n = createTypedArray("float32", i), r = 0; r < i; r += 1) n[r] = t[r] * e;
                return n
              }
              if (isNumerable(a, t) && $bm_isInstanceOfArray(e)) {
                for (i = e.length, n = createTypedArray("float32", i), r = 0; r < i; r += 1) n[r] = t * e[r];
                return n
              }
              return 0
            }

            function div(t, e) {
              var n, r, i, a = _typeof$1(t),
                s = _typeof$1(e);
              if (isNumerable(a, t) && isNumerable(s, e)) return t / e;
              if ($bm_isInstanceOfArray(t) && isNumerable(s, e)) {
                for (i = t.length, n = createTypedArray("float32", i), r = 0; r < i; r += 1) n[r] = t[r] / e;
                return n
              }
              if (isNumerable(a, t) && $bm_isInstanceOfArray(e)) {
                for (i = e.length, n = createTypedArray("float32", i), r = 0; r < i; r += 1) n[r] = t / e[r];
                return n
              }
              return 0
            }

            function mod(t, e) {
              return "string" == typeof t && (t = parseInt(t, 10)), "string" == typeof e && (e = parseInt(e, 10)), t % e
            }
            var $bm_sum = sum,
              $bm_sub = sub,
              $bm_mul = mul,
              $bm_div = div,
              $bm_mod = mod;

            function clamp(t, e, n) {
              if (e > n) {
                var r = n;
                n = e, e = r
              }
              return Math.min(Math.max(t, e), n)
            }

            function radiansToDegrees(t) {
              return t / degToRads
            }
            var radians_to_degrees = radiansToDegrees;

            function degreesToRadians(t) {
              return t * degToRads
            }
            var degrees_to_radians = radiansToDegrees,
              helperLengthArray = [0, 0, 0, 0, 0, 0];

            function length(t, e) {
              if ("number" == typeof t || t instanceof Number) return e = e || 0, Math.abs(t - e);
              var n;
              e || (e = helperLengthArray);
              var r = Math.min(t.length, e.length),
                i = 0;
              for (n = 0; n < r; n += 1) i += Math.pow(e[n] - t[n], 2);
              return Math.sqrt(i)
            }

            function normalize(t) {
              return div(t, length(t))
            }

            function rgbToHsl(t) {
              var e, n, r = t[0],
                i = t[1],
                a = t[2],
                s = Math.max(r, i, a),
                o = Math.min(r, i, a),
                l = (s + o) / 2;
              if (s === o) e = 0, n = 0;
              else {
                var u = s - o;
                switch (n = l > .5 ? u / (2 - s - o) : u / (s + o), s) {
                  case r:
                    e = (i - a) / u + (i < a ? 6 : 0);
                    break;
                  case i:
                    e = (a - r) / u + 2;
                    break;
                  case a:
                    e = (r - i) / u + 4
                }
                e /= 6
              }
              return [e, n, l, t[3]]
            }

            function hue2rgb(t, e, n) {
              return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? t + 6 * (e - t) * n : n < .5 ? e : n < 2 / 3 ? t + (e - t) * (2 / 3 - n) * 6 : t
            }

            function hslToRgb(t) {
              var e, n, r, i = t[0],
                a = t[1],
                s = t[2];
              if (0 === a) e = s, r = s, n = s;
              else {
                var o = s < .5 ? s * (1 + a) : s + a - s * a,
                  l = 2 * s - o;
                e = hue2rgb(l, o, i + 1 / 3), n = hue2rgb(l, o, i), r = hue2rgb(l, o, i - 1 / 3)
              }
              return [e, n, r, t[3]]
            }

            function linear(t, e, n, r, i) {
              if (void 0 !== r && void 0 !== i || (r = e, i = n, e = 0, n = 1), n < e) {
                var a = n;
                n = e, e = a
              }
              if (t <= e) return r;
              if (t >= n) return i;
              var s, o = n === e ? 0 : (t - e) / (n - e);
              if (!r.length) return r + (i - r) * o;
              var l = r.length,
                u = createTypedArray("float32", l);
              for (s = 0; s < l; s += 1) u[s] = r[s] + (i[s] - r[s]) * o;
              return u
            }

            function random(t, e) {
              if (void 0 === e && (void 0 === t ? (t = 0, e = 1) : (e = t, t = void 0)), e.length) {
                var n, r = e.length;
                t || (t = createTypedArray("float32", r));
                var i = createTypedArray("float32", r),
                  a = BMMath.random();
                for (n = 0; n < r; n += 1) i[n] = t[n] + a * (e[n] - t[n]);
                return i
              }
              return void 0 === t && (t = 0), t + BMMath.random() * (e - t)
            }

            function createPath(t, e, n, r) {
              var i, a = t.length,
                s = shapePool.newElement();
              s.setPathData(!!r, a);
              var o, l, u = [0, 0];
              for (i = 0; i < a; i += 1) o = e && e[i] ? e[i] : u, l = n && n[i] ? n[i] : u, s.setTripleAt(t[i][0], t[i][1], l[0] + t[i][0], l[1] + t[i][1], o[0] + t[i][0], o[1] + t[i][1], i, !0);
              return s
            }

            function initiateExpression(elem, data, property) {
              function noOp(t) {
                return t
              }
              if (!elem.globalData.renderConfig.runExpressions) return noOp;
              var val = data.x,
                needsVelocity = /velocity(?![\w\d])/.test(val),
                _needsRandom = -1 !== val.indexOf("random"),
                elemType = elem.data.ty,
                transform, $bm_transform, content, effect, thisProperty = property;
              thisProperty.valueAtTime = thisProperty.getValueAtTime, Object.defineProperty(thisProperty, "value", {
                get: function() {
                  return thisProperty.v
                }
              }), elem.comp.frameDuration = 1 / elem.comp.globalData.frameRate, elem.comp.displayStartTime = 0;
              var inPoint = elem.data.ip / elem.comp.globalData.frameRate,
                outPoint = elem.data.op / elem.comp.globalData.frameRate,
                width = elem.data.sw ? elem.data.sw : 0,
                height = elem.data.sh ? elem.data.sh : 0,
                name = elem.data.nm,
                loopIn, loop_in, loopOut, loop_out, smooth, toWorld, fromWorld, fromComp, toComp, fromCompToSurface, position, rotation, anchorPoint, scale, thisLayer, thisComp, mask, valueAtTime, velocityAtTime, scoped_bm_rt, expression_function = eval("[function _expression_function(){" + val + ";scoped_bm_rt=$bm_rt}]")[0],
                numKeys = property.kf ? data.k.length : 0,
                active = !this.data || !0 !== this.data.hd,
                wiggle = function(t, e) {
                  var n, r, i = this.pv.length ? this.pv.length : 1,
                    a = createTypedArray("float32", i),
                    s = Math.floor(5 * time);
                  for (n = 0, r = 0; n < s;) {
                    for (r = 0; r < i; r += 1) a[r] += -e + 2 * e * BMMath.random();
                    n += 1
                  }
                  var o = 5 * time,
                    l = o - Math.floor(o),
                    u = createTypedArray("float32", i);
                  if (i > 1) {
                    for (r = 0; r < i; r += 1) u[r] = this.pv[r] + a[r] + (-e + 2 * e * BMMath.random()) * l;
                    return u
                  }
                  return this.pv + a[0] + (-e + 2 * e * BMMath.random()) * l
                }.bind(this);

              function loopInDuration(t, e) {
                return loopIn(t, e, !0)
              }

              function loopOutDuration(t, e) {
                return loopOut(t, e, !0)
              }
              thisProperty.loopIn && (loopIn = thisProperty.loopIn.bind(thisProperty), loop_in = loopIn), thisProperty.loopOut && (loopOut = thisProperty.loopOut.bind(thisProperty), loop_out = loopOut), thisProperty.smooth && (smooth = thisProperty.smooth.bind(thisProperty)), this.getValueAtTime && (valueAtTime = this.getValueAtTime.bind(this)), this.getVelocityAtTime && (velocityAtTime = this.getVelocityAtTime.bind(this));
              var comp = elem.comp.globalData.projectInterface.bind(elem.comp.globalData.projectInterface),
                time, velocity, value, text, textIndex, textTotal, selectorValue;

              function lookAt(t, e) {
                var n = [e[0] - t[0], e[1] - t[1], e[2] - t[2]],
                  r = Math.atan2(n[0], Math.sqrt(n[1] * n[1] + n[2] * n[2])) / degToRads;
                return [-Math.atan2(n[1], n[2]) / degToRads, r, 0]
              }

              function easeOut(t, e, n, r, i) {
                return applyEase(easeOutBez, t, e, n, r, i)
              }

              function easeIn(t, e, n, r, i) {
                return applyEase(easeInBez, t, e, n, r, i)
              }

              function ease(t, e, n, r, i) {
                return applyEase(easeInOutBez, t, e, n, r, i)
              }

              function applyEase(t, e, n, r, i, a) {
                void 0 === i ? (i = n, a = r) : e = (e - n) / (r - n), e > 1 ? e = 1 : e < 0 && (e = 0);
                var s = t(e);
                if ($bm_isInstanceOfArray(i)) {
                  var o, l = i.length,
                    u = createTypedArray("float32", l);
                  for (o = 0; o < l; o += 1) u[o] = (a[o] - i[o]) * s + i[o];
                  return u
                }
                return (a - i) * s + i
              }

              function nearestKey(t) {
                var e, n, r, i = data.k.length;
                if (data.k.length && "number" != typeof data.k[0])
                  if (n = -1, (t *= elem.comp.globalData.frameRate) < data.k[0].t) n = 1, r = data.k[0].t;
                  else {
                    for (e = 0; e < i - 1; e += 1) {
                      if (t === data.k[e].t) {
                        n = e + 1, r = data.k[e].t;
                        break
                      }
                      if (t > data.k[e].t && t < data.k[e + 1].t) {
                        t - data.k[e].t > data.k[e + 1].t - t ? (n = e + 2, r = data.k[e + 1].t) : (n = e + 1, r = data.k[e].t);
                        break
                      }
                    } - 1 === n && (n = e + 1, r = data.k[e].t)
                  }
                else n = 0, r = 0;
                var a = {};
                return a.index = n, a.time = r / elem.comp.globalData.frameRate, a
              }

              function key(t) {
                var e, n, r;
                if (!data.k.length || "number" == typeof data.k[0]) throw new Error("The property has no keyframe at index " + t);
                t -= 1, e = {
                  time: data.k[t].t / elem.comp.globalData.frameRate,
                  value: []
                };
                var i = Object.prototype.hasOwnProperty.call(data.k[t], "s") ? data.k[t].s : data.k[t - 1].e;
                for (r = i.length, n = 0; n < r; n += 1) e[n] = i[n], e.value[n] = i[n];
                return e
              }

              function framesToTime(t, e) {
                return e || (e = elem.comp.globalData.frameRate), t / e
              }

              function timeToFrames(t, e) {
                return t || 0 === t || (t = time), e || (e = elem.comp.globalData.frameRate), t * e
              }

              function seedRandom(t) {
                BMMath.seedrandom(randSeed + t)
              }

              function sourceRectAtTime() {
                return elem.sourceRectAtTime()
              }

              function substring(t, e) {
                return "string" == typeof value ? void 0 === e ? value.substring(t) : value.substring(t, e) : ""
              }

              function substr(t, e) {
                return "string" == typeof value ? void 0 === e ? value.substr(t) : value.substr(t, e) : ""
              }

              function posterizeTime(t) {
                time = 0 === t ? 0 : Math.floor(time * t) / t, value = valueAtTime(time)
              }
              var index = elem.data.ind,
                hasParent = !(!elem.hierarchy || !elem.hierarchy.length),
                parent, randSeed = Math.floor(1e6 * Math.random()),
                globalData = elem.globalData;

              function executeExpression(t) {
                return value = t, this.frameExpressionId === elem.globalData.frameId && "textSelector" !== this.propType ? value : ("textSelector" === this.propType && (textIndex = this.textIndex, textTotal = this.textTotal, selectorValue = this.selectorValue), thisLayer || (text = elem.layerInterface.text, thisLayer = elem.layerInterface, thisComp = elem.comp.compInterface, toWorld = thisLayer.toWorld.bind(thisLayer), fromWorld = thisLayer.fromWorld.bind(thisLayer), fromComp = thisLayer.fromComp.bind(thisLayer), toComp = thisLayer.toComp.bind(thisLayer), mask = thisLayer.mask ? thisLayer.mask.bind(thisLayer) : null, fromCompToSurface = fromComp), transform || (transform = elem.layerInterface("ADBE Transform Group"), $bm_transform = transform, transform && (anchorPoint = transform.anchorPoint)), 4 !== elemType || content || (content = thisLayer("ADBE Root Vectors Group")), effect || (effect = thisLayer(4)), (hasParent = !(!elem.hierarchy || !elem.hierarchy.length)) && !parent && (parent = elem.hierarchy[0].layerInterface), time = this.comp.renderedFrame / this.comp.globalData.frameRate, _needsRandom && seedRandom(randSeed + time), needsVelocity && (velocity = velocityAtTime(time)), expression_function(), this.frameExpressionId = elem.globalData.frameId, scoped_bm_rt = scoped_bm_rt.propType === propTypes.SHAPE ? scoped_bm_rt.v : scoped_bm_rt)
              }
              return executeExpression.__preventDeadCodeRemoval = [$bm_transform, anchorPoint, time, velocity, inPoint, outPoint, width, height, name, loop_in, loop_out, smooth, toComp, fromCompToSurface, toWorld, fromWorld, mask, position, rotation, scale, thisComp, numKeys, active, wiggle, loopInDuration, loopOutDuration, comp, lookAt, easeOut, easeIn, ease, nearestKey, key, text, textIndex, textTotal, selectorValue, framesToTime, timeToFrames, sourceRectAtTime, substring, substr, posterizeTime, index, globalData], executeExpression
            }
            return ob.initiateExpression = initiateExpression, ob.__preventDeadCodeRemoval = [window, document, XMLHttpRequest, fetch, frames, $bm_neg, add, $bm_sum, $bm_sub, $bm_mul, $bm_div, $bm_mod, clamp, radians_to_degrees, degreesToRadians, degrees_to_radians, normalize, rgbToHsl, hslToRgb, linear, random, createPath, _lottieGlobal], ob.resetFrame = resetFrame, ob
          }(),
          Expressions = function() {
            var t = {
              initExpressions: function(t) {
                var e = 0,
                  n = [];
                t.renderer.compInterface = CompExpressionInterface(t.renderer), t.renderer.globalData.projectInterface.registerComposition(t.renderer), t.renderer.globalData.pushExpression = function() {
                  e += 1
                }, t.renderer.globalData.popExpression = function() {
                  0 == (e -= 1) && function() {
                    var t, e = n.length;
                    for (t = 0; t < e; t += 1) n[t].release();
                    n.length = 0
                  }()
                }, t.renderer.globalData.registerExpressionProperty = function(t) {
                  -1 === n.indexOf(t) && n.push(t)
                }
              }
            };
            return t.resetFrame = ExpressionManager.resetFrame, t
          }(),
          MaskManagerInterface = function() {
            function t(t, e) {
              this._mask = t, this._data = e
            }
            return Object.defineProperty(t.prototype, "maskPath", {
                get: function() {
                  return this._mask.prop.k && this._mask.prop.getValue(), this._mask.prop
                }
              }), Object.defineProperty(t.prototype, "maskOpacity", {
                get: function() {
                  return this._mask.op.k && this._mask.op.getValue(), 100 * this._mask.op.v
                }
              }),
              function(e) {
                var n, r = createSizedArray(e.viewData.length),
                  i = e.viewData.length;
                for (n = 0; n < i; n += 1) r[n] = new t(e.viewData[n], e.masksProperties[n]);
                return function(t) {
                  for (n = 0; n < i;) {
                    if (e.masksProperties[n].nm === t) return r[n];
                    n += 1
                  }
                  return null
                }
              }
          }(),
          ExpressionPropertyInterface = function() {
            var t = {
                pv: 0,
                v: 0,
                mult: 1
              },
              e = {
                pv: [0, 0, 0],
                v: [0, 0, 0],
                mult: 1
              };

            function n(t, e, n) {
              Object.defineProperty(t, "velocity", {
                get: function() {
                  return e.getVelocityAtTime(e.comp.currentFrame)
                }
              }), t.numKeys = e.keyframes ? e.keyframes.length : 0, t.key = function(r) {
                if (!t.numKeys) return 0;
                var i;
                i = "s" in e.keyframes[r - 1] ? e.keyframes[r - 1].s : "e" in e.keyframes[r - 2] ? e.keyframes[r - 2].e : e.keyframes[r - 2].s;
                var a = "unidimensional" === n ? new Number(i) : Object.assign({}, i);
                return a.time = e.keyframes[r - 1].t / e.elem.comp.globalData.frameRate, a.value = "unidimensional" === n ? i[0] : i, a
              }, t.valueAtTime = e.getValueAtTime, t.speedAtTime = e.getSpeedAtTime, t.velocityAtTime = e.getVelocityAtTime, t.propertyGroup = e.propertyGroup
            }

            function r() {
              return t
            }
            return function(i) {
              return i ? "unidimensional" === i.propType ? function(e) {
                e && "pv" in e || (e = t);
                var r = 1 / e.mult,
                  i = e.pv * r,
                  a = new Number(i);
                return a.value = i, n(a, e, "unidimensional"),
                  function() {
                    return e.k && e.getValue(), i = e.v * r, a.value !== i && ((a = new Number(i)).value = i, n(a, e, "unidimensional")), a
                  }
              }(i) : function(t) {
                t && "pv" in t || (t = e);
                var r = 1 / t.mult,
                  i = t.data && t.data.l || t.pv.length,
                  a = createTypedArray("float32", i),
                  s = createTypedArray("float32", i);
                return a.value = s, n(a, t, "multidimensional"),
                  function() {
                    t.k && t.getValue();
                    for (var e = 0; e < i; e += 1) s[e] = t.v[e] * r, a[e] = s[e];
                    return a
                  }
              }(i) : r
            }
          }(),
          TransformExpressionInterface = function(t) {
            function e(t) {
              switch (t) {
                case "scale":
                case "Scale":
                case "ADBE Scale":
                case 6:
                  return e.scale;
                case "rotation":
                case "Rotation":
                case "ADBE Rotation":
                case "ADBE Rotate Z":
                case 10:
                  return e.rotation;
                case "ADBE Rotate X":
                  return e.xRotation;
                case "ADBE Rotate Y":
                  return e.yRotation;
                case "position":
                case "Position":
                case "ADBE Position":
                case 2:
                  return e.position;
                case "ADBE Position_0":
                  return e.xPosition;
                case "ADBE Position_1":
                  return e.yPosition;
                case "ADBE Position_2":
                  return e.zPosition;
                case "anchorPoint":
                case "AnchorPoint":
                case "Anchor Point":
                case "ADBE AnchorPoint":
                case 1:
                  return e.anchorPoint;
                case "opacity":
                case "Opacity":
                case 11:
                  return e.opacity;
                default:
                  return null
              }
            }
            var n, r, i, a;
            return Object.defineProperty(e, "rotation", {
              get: ExpressionPropertyInterface(t.r || t.rz)
            }), Object.defineProperty(e, "zRotation", {
              get: ExpressionPropertyInterface(t.rz || t.r)
            }), Object.defineProperty(e, "xRotation", {
              get: ExpressionPropertyInterface(t.rx)
            }), Object.defineProperty(e, "yRotation", {
              get: ExpressionPropertyInterface(t.ry)
            }), Object.defineProperty(e, "scale", {
              get: ExpressionPropertyInterface(t.s)
            }), t.p ? a = ExpressionPropertyInterface(t.p) : (n = ExpressionPropertyInterface(t.px), r = ExpressionPropertyInterface(t.py), t.pz && (i = ExpressionPropertyInterface(t.pz))), Object.defineProperty(e, "position", {
              get: function() {
                return t.p ? a() : [n(), r(), i ? i() : 0]
              }
            }), Object.defineProperty(e, "xPosition", {
              get: ExpressionPropertyInterface(t.px)
            }), Object.defineProperty(e, "yPosition", {
              get: ExpressionPropertyInterface(t.py)
            }), Object.defineProperty(e, "zPosition", {
              get: ExpressionPropertyInterface(t.pz)
            }), Object.defineProperty(e, "anchorPoint", {
              get: ExpressionPropertyInterface(t.a)
            }), Object.defineProperty(e, "opacity", {
              get: ExpressionPropertyInterface(t.o)
            }), Object.defineProperty(e, "skew", {
              get: ExpressionPropertyInterface(t.sk)
            }), Object.defineProperty(e, "skewAxis", {
              get: ExpressionPropertyInterface(t.sa)
            }), Object.defineProperty(e, "orientation", {
              get: ExpressionPropertyInterface(t.or)
            }), e
          },
          LayerExpressionInterface = function() {
            function t(t) {
              var e = new Matrix;
              return void 0 !== t ? this._elem.finalTransform.mProp.getValueAtTime(t).clone(e) : this._elem.finalTransform.mProp.applyToMatrix(e), e
            }

            function e(t, e) {
              var n = this.getMatrix(e);
              return n.props[12] = 0, n.props[13] = 0, n.props[14] = 0, this.applyPoint(n, t)
            }

            function n(t, e) {
              var n = this.getMatrix(e);
              return this.applyPoint(n, t)
            }

            function r(t, e) {
              var n = this.getMatrix(e);
              return n.props[12] = 0, n.props[13] = 0, n.props[14] = 0, this.invertPoint(n, t)
            }

            function i(t, e) {
              var n = this.getMatrix(e);
              return this.invertPoint(n, t)
            }

            function a(t, e) {
              if (this._elem.hierarchy && this._elem.hierarchy.length) {
                var n, r = this._elem.hierarchy.length;
                for (n = 0; n < r; n += 1) this._elem.hierarchy[n].finalTransform.mProp.applyToMatrix(t)
              }
              return t.applyToPointArray(e[0], e[1], e[2] || 0)
            }

            function s(t, e) {
              if (this._elem.hierarchy && this._elem.hierarchy.length) {
                var n, r = this._elem.hierarchy.length;
                for (n = 0; n < r; n += 1) this._elem.hierarchy[n].finalTransform.mProp.applyToMatrix(t)
              }
              return t.inversePoint(e)
            }

            function o(t) {
              var e = new Matrix;
              if (e.reset(), this._elem.finalTransform.mProp.applyToMatrix(e), this._elem.hierarchy && this._elem.hierarchy.length) {
                var n, r = this._elem.hierarchy.length;
                for (n = 0; n < r; n += 1) this._elem.hierarchy[n].finalTransform.mProp.applyToMatrix(e);
                return e.inversePoint(t)
              }
              return e.inversePoint(t)
            }

            function l() {
              return [1, 1, 1, 1]
            }
            return function(u) {
              var h;

              function c(t) {
                switch (t) {
                  case "ADBE Root Vectors Group":
                  case "Contents":
                  case 2:
                    return c.shapeInterface;
                  case 1:
                  case 6:
                  case "Transform":
                  case "transform":
                  case "ADBE Transform Group":
                    return h;
                  case 4:
                  case "ADBE Effect Parade":
                  case "effects":
                  case "Effects":
                    return c.effect;
                  case "ADBE Text Properties":
                    return c.textInterface;
                  default:
                    return null
                }
              }
              c.getMatrix = t, c.invertPoint = s, c.applyPoint = a, c.toWorld = n, c.toWorldVec = e, c.fromWorld = i, c.fromWorldVec = r, c.toComp = n, c.fromComp = o, c.sampleImage = l, c.sourceRectAtTime = u.sourceRectAtTime.bind(u), c._elem = u;
              var p = getDescriptor(h = TransformExpressionInterface(u.finalTransform.mProp), "anchorPoint");
              return Object.defineProperties(c, {
                hasParent: {
                  get: function() {
                    return u.hierarchy.length
                  }
                },
                parent: {
                  get: function() {
                    return u.hierarchy[0].layerInterface
                  }
                },
                rotation: getDescriptor(h, "rotation"),
                scale: getDescriptor(h, "scale"),
                position: getDescriptor(h, "position"),
                opacity: getDescriptor(h, "opacity"),
                anchorPoint: p,
                anchor_point: p,
                transform: {
                  get: function() {
                    return h
                  }
                },
                active: {
                  get: function() {
                    return u.isInRange
                  }
                }
              }), c.startTime = u.data.st, c.index = u.data.ind, c.source = u.data.refId, c.height = 0 === u.data.ty ? u.data.h : 100, c.width = 0 === u.data.ty ? u.data.w : 100, c.inPoint = u.data.ip / u.comp.globalData.frameRate, c.outPoint = u.data.op / u.comp.globalData.frameRate, c._name = u.data.nm, c.registerMaskInterface = function(t) {
                c.mask = new MaskManagerInterface(t, u)
              }, c.registerEffectsInterface = function(t) {
                c.effect = t
              }, c
            }
          }(),
          propertyGroupFactory = function(t, e) {
            return function(n) {
              return (n = void 0 === n ? 1 : n) <= 0 ? t : e(n - 1)
            }
          },
          PropertyInterface = function(t, e) {
            var n = {
              _name: t
            };
            return function(t) {
              return (t = void 0 === t ? 1 : t) <= 0 ? n : e(t - 1)
            }
          },
          EffectsExpressionInterface = function() {
            function t(n, r, i, a) {
              function s(t) {
                for (var e = n.ef, r = 0, i = e.length; r < i;) {
                  if (t === e[r].nm || t === e[r].mn || t === e[r].ix) return 5 === e[r].ty ? u[r] : u[r]();
                  r += 1
                }
                throw new Error
              }
              var o, l = propertyGroupFactory(s, i),
                u = [],
                h = n.ef.length;
              for (o = 0; o < h; o += 1) 5 === n.ef[o].ty ? u.push(t(n.ef[o], r.effectElements[o], r.effectElements[o].propertyGroup, a)) : u.push(e(r.effectElements[o], n.ef[o].ty, a, l));
              return "ADBE Color Control" === n.mn && Object.defineProperty(s, "color", {
                get: function() {
                  return u[0]()
                }
              }), Object.defineProperties(s, {
                numProperties: {
                  get: function() {
                    return n.np
                  }
                },
                _name: {
                  value: n.nm
                },
                propertyGroup: {
                  value: l
                }
              }), s.enabled = 0 !== n.en, s.active = s.enabled, s
            }

            function e(t, e, n, r) {
              var i = ExpressionPropertyInterface(t.p);
              return t.p.setGroupProperty && t.p.setGroupProperty(PropertyInterface("", r)),
                function() {
                  return 10 === e ? n.comp.compInterface(t.p.v) : i()
                }
            }
            return {
              createEffectsInterface: function(e, n) {
                if (e.effectsManager) {
                  var r, i = [],
                    a = e.data.ef,
                    s = e.effectsManager.effectElements.length;
                  for (r = 0; r < s; r += 1) i.push(t(a[r], e.effectsManager.effectElements[r], n, e));
                  var o = e.data.ef || [],
                    l = function(t) {
                      for (r = 0, s = o.length; r < s;) {
                        if (t === o[r].nm || t === o[r].mn || t === o[r].ix) return i[r];
                        r += 1
                      }
                      return null
                    };
                  return Object.defineProperty(l, "numProperties", {
                    get: function() {
                      return o.length
                    }
                  }), l
                }
                return null
              }
            }
          }(),
          ShapePathInterface = function(t, e, n) {
            var r = e.sh;

            function i(t) {
              return "Shape" === t || "shape" === t || "Path" === t || "path" === t || "ADBE Vector Shape" === t || 2 === t ? i.path : null
            }
            var a = propertyGroupFactory(i, n);
            return r.setGroupProperty(PropertyInterface("Path", a)), Object.defineProperties(i, {
              path: {
                get: function() {
                  return r.k && r.getValue(), r
                }
              },
              shape: {
                get: function() {
                  return r.k && r.getValue(), r
                }
              },
              _name: {
                value: t.nm
              },
              ix: {
                value: t.ix
              },
              propertyIndex: {
                value: t.ix
              },
              mn: {
                value: t.mn
              },
              propertyGroup: {
                value: n
              }
            }), i
          },
          ShapeExpressionInterface = function() {
            function t(t, s, p) {
              var f, d = [],
                m = t ? t.length : 0;
              for (f = 0; f < m; f += 1) "gr" === t[f].ty ? d.push(e(t[f], s[f], p)) : "fl" === t[f].ty ? d.push(n(t[f], s[f], p)) : "st" === t[f].ty ? d.push(i(t[f], s[f], p)) : "tm" === t[f].ty ? d.push(a(t[f], s[f], p)) : "tr" === t[f].ty || ("el" === t[f].ty ? d.push(o(t[f], s[f], p)) : "sr" === t[f].ty ? d.push(l(t[f], s[f], p)) : "sh" === t[f].ty ? d.push(ShapePathInterface(t[f], s[f], p)) : "rc" === t[f].ty ? d.push(u(t[f], s[f], p)) : "rd" === t[f].ty ? d.push(h(t[f], s[f], p)) : "rp" === t[f].ty ? d.push(c(t[f], s[f], p)) : "gf" === t[f].ty ? d.push(r(t[f], s[f], p)) : d.push((t[f], s[f], function() {
                return null
              })));
              return d
            }

            function e(e, n, r) {
              var i = function(t) {
                switch (t) {
                  case "ADBE Vectors Group":
                  case "Contents":
                  case 2:
                    return i.content;
                  default:
                    return i.transform
                }
              };
              i.propertyGroup = propertyGroupFactory(i, r);
              var a = function(e, n, r) {
                  var i, a = function(t) {
                    for (var e = 0, n = i.length; e < n;) {
                      if (i[e]._name === t || i[e].mn === t || i[e].propertyIndex === t || i[e].ix === t || i[e].ind === t) return i[e];
                      e += 1
                    }
                    return "number" == typeof t ? i[t - 1] : null
                  };
                  a.propertyGroup = propertyGroupFactory(a, r), i = t(e.it, n.it, a.propertyGroup), a.numProperties = i.length;
                  var o = s(e.it[e.it.length - 1], n.it[n.it.length - 1], a.propertyGroup);
                  return a.transform = o, a.propertyIndex = e.cix, a._name = e.nm, a
                }(e, n, i.propertyGroup),
                o = s(e.it[e.it.length - 1], n.it[n.it.length - 1], i.propertyGroup);
              return i.content = a, i.transform = o, Object.defineProperty(i, "_name", {
                get: function() {
                  return e.nm
                }
              }), i.numProperties = e.np, i.propertyIndex = e.ix, i.nm = e.nm, i.mn = e.mn, i
            }

            function n(t, e, n) {
              function r(t) {
                return "Color" === t || "color" === t ? r.color : "Opacity" === t || "opacity" === t ? r.opacity : null
              }
              return Object.defineProperties(r, {
                color: {
                  get: ExpressionPropertyInterface(e.c)
                },
                opacity: {
                  get: ExpressionPropertyInterface(e.o)
                },
                _name: {
                  value: t.nm
                },
                mn: {
                  value: t.mn
                }
              }), e.c.setGroupProperty(PropertyInterface("Color", n)), e.o.setGroupProperty(PropertyInterface("Opacity", n)), r
            }

            function r(t, e, n) {
              function r(t) {
                return "Start Point" === t || "start point" === t ? r.startPoint : "End Point" === t || "end point" === t ? r.endPoint : "Opacity" === t || "opacity" === t ? r.opacity : null
              }
              return Object.defineProperties(r, {
                startPoint: {
                  get: ExpressionPropertyInterface(e.s)
                },
                endPoint: {
                  get: ExpressionPropertyInterface(e.e)
                },
                opacity: {
                  get: ExpressionPropertyInterface(e.o)
                },
                type: {
                  get: function() {
                    return "a"
                  }
                },
                _name: {
                  value: t.nm
                },
                mn: {
                  value: t.mn
                }
              }), e.s.setGroupProperty(PropertyInterface("Start Point", n)), e.e.setGroupProperty(PropertyInterface("End Point", n)), e.o.setGroupProperty(PropertyInterface("Opacity", n)), r
            }

            function i(t, e, n) {
              var r, i = propertyGroupFactory(u, n),
                a = propertyGroupFactory(l, i);

              function s(n) {
                Object.defineProperty(l, t.d[n].nm, {
                  get: ExpressionPropertyInterface(e.d.dataProps[n].p)
                })
              }
              var o = t.d ? t.d.length : 0,
                l = {};
              for (r = 0; r < o; r += 1) s(r), e.d.dataProps[r].p.setGroupProperty(a);

              function u(t) {
                return "Color" === t || "color" === t ? u.color : "Opacity" === t || "opacity" === t ? u.opacity : "Stroke Width" === t || "stroke width" === t ? u.strokeWidth : null
              }
              return Object.defineProperties(u, {
                color: {
                  get: ExpressionPropertyInterface(e.c)
                },
                opacity: {
                  get: ExpressionPropertyInterface(e.o)
                },
                strokeWidth: {
                  get: ExpressionPropertyInterface(e.w)
                },
                dash: {
                  get: function() {
                    return l
                  }
                },
                _name: {
                  value: t.nm
                },
                mn: {
                  value: t.mn
                }
              }), e.c.setGroupProperty(PropertyInterface("Color", i)), e.o.setGroupProperty(PropertyInterface("Opacity", i)), e.w.setGroupProperty(PropertyInterface("Stroke Width", i)), u
            }

            function a(t, e, n) {
              function r(e) {
                return e === t.e.ix || "End" === e || "end" === e ? r.end : e === t.s.ix ? r.start : e === t.o.ix ? r.offset : null
              }
              var i = propertyGroupFactory(r, n);
              return r.propertyIndex = t.ix, e.s.setGroupProperty(PropertyInterface("Start", i)), e.e.setGroupProperty(PropertyInterface("End", i)), e.o.setGroupProperty(PropertyInterface("Offset", i)), r.propertyIndex = t.ix, r.propertyGroup = n, Object.defineProperties(r, {
                start: {
                  get: ExpressionPropertyInterface(e.s)
                },
                end: {
                  get: ExpressionPropertyInterface(e.e)
                },
                offset: {
                  get: ExpressionPropertyInterface(e.o)
                },
                _name: {
                  value: t.nm
                }
              }), r.mn = t.mn, r
            }

            function s(t, e, n) {
              function r(e) {
                return t.a.ix === e || "Anchor Point" === e ? r.anchorPoint : t.o.ix === e || "Opacity" === e ? r.opacity : t.p.ix === e || "Position" === e ? r.position : t.r.ix === e || "Rotation" === e || "ADBE Vector Rotation" === e ? r.rotation : t.s.ix === e || "Scale" === e ? r.scale : t.sk && t.sk.ix === e || "Skew" === e ? r.skew : t.sa && t.sa.ix === e || "Skew Axis" === e ? r.skewAxis : null
              }
              var i = propertyGroupFactory(r, n);
              return e.transform.mProps.o.setGroupProperty(PropertyInterface("Opacity", i)), e.transform.mProps.p.setGroupProperty(PropertyInterface("Position", i)), e.transform.mProps.a.setGroupProperty(PropertyInterface("Anchor Point", i)), e.transform.mProps.s.setGroupProperty(PropertyInterface("Scale", i)), e.transform.mProps.r.setGroupProperty(PropertyInterface("Rotation", i)), e.transform.mProps.sk && (e.transform.mProps.sk.setGroupProperty(PropertyInterface("Skew", i)), e.transform.mProps.sa.setGroupProperty(PropertyInterface("Skew Angle", i))), e.transform.op.setGroupProperty(PropertyInterface("Opacity", i)), Object.defineProperties(r, {
                opacity: {
                  get: ExpressionPropertyInterface(e.transform.mProps.o)
                },
                position: {
                  get: ExpressionPropertyInterface(e.transform.mProps.p)
                },
                anchorPoint: {
                  get: ExpressionPropertyInterface(e.transform.mProps.a)
                },
                scale: {
                  get: ExpressionPropertyInterface(e.transform.mProps.s)
                },
                rotation: {
                  get: ExpressionPropertyInterface(e.transform.mProps.r)
                },
                skew: {
                  get: ExpressionPropertyInterface(e.transform.mProps.sk)
                },
                skewAxis: {
                  get: ExpressionPropertyInterface(e.transform.mProps.sa)
                },
                _name: {
                  value: t.nm
                }
              }), r.ty = "tr", r.mn = t.mn, r.propertyGroup = n, r
            }

            function o(t, e, n) {
              function r(e) {
                return t.p.ix === e ? r.position : t.s.ix === e ? r.size : null
              }
              var i = propertyGroupFactory(r, n);
              r.propertyIndex = t.ix;
              var a = "tm" === e.sh.ty ? e.sh.prop : e.sh;
              return a.s.setGroupProperty(PropertyInterface("Size", i)), a.p.setGroupProperty(PropertyInterface("Position", i)), Object.defineProperties(r, {
                size: {
                  get: ExpressionPropertyInterface(a.s)
                },
                position: {
                  get: ExpressionPropertyInterface(a.p)
                },
                _name: {
                  value: t.nm
                }
              }), r.mn = t.mn, r
            }

            function l(t, e, n) {
              function r(e) {
                return t.p.ix === e ? r.position : t.r.ix === e ? r.rotation : t.pt.ix === e ? r.points : t.or.ix === e || "ADBE Vector Star Outer Radius" === e ? r.outerRadius : t.os.ix === e ? r.outerRoundness : !t.ir || t.ir.ix !== e && "ADBE Vector Star Inner Radius" !== e ? t.is && t.is.ix === e ? r.innerRoundness : null : r.innerRadius
              }
              var i = propertyGroupFactory(r, n),
                a = "tm" === e.sh.ty ? e.sh.prop : e.sh;
              return r.propertyIndex = t.ix, a.or.setGroupProperty(PropertyInterface("Outer Radius", i)), a.os.setGroupProperty(PropertyInterface("Outer Roundness", i)), a.pt.setGroupProperty(PropertyInterface("Points", i)), a.p.setGroupProperty(PropertyInterface("Position", i)), a.r.setGroupProperty(PropertyInterface("Rotation", i)), t.ir && (a.ir.setGroupProperty(PropertyInterface("Inner Radius", i)), a.is.setGroupProperty(PropertyInterface("Inner Roundness", i))), Object.defineProperties(r, {
                position: {
                  get: ExpressionPropertyInterface(a.p)
                },
                rotation: {
                  get: ExpressionPropertyInterface(a.r)
                },
                points: {
                  get: ExpressionPropertyInterface(a.pt)
                },
                outerRadius: {
                  get: ExpressionPropertyInterface(a.or)
                },
                outerRoundness: {
                  get: ExpressionPropertyInterface(a.os)
                },
                innerRadius: {
                  get: ExpressionPropertyInterface(a.ir)
                },
                innerRoundness: {
                  get: ExpressionPropertyInterface(a.is)
                },
                _name: {
                  value: t.nm
                }
              }), r.mn = t.mn, r
            }

            function u(t, e, n) {
              function r(e) {
                return t.p.ix === e ? r.position : t.r.ix === e ? r.roundness : t.s.ix === e || "Size" === e || "ADBE Vector Rect Size" === e ? r.size : null
              }
              var i = propertyGroupFactory(r, n),
                a = "tm" === e.sh.ty ? e.sh.prop : e.sh;
              return r.propertyIndex = t.ix, a.p.setGroupProperty(PropertyInterface("Position", i)), a.s.setGroupProperty(PropertyInterface("Size", i)), a.r.setGroupProperty(PropertyInterface("Rotation", i)), Object.defineProperties(r, {
                position: {
                  get: ExpressionPropertyInterface(a.p)
                },
                roundness: {
                  get: ExpressionPropertyInterface(a.r)
                },
                size: {
                  get: ExpressionPropertyInterface(a.s)
                },
                _name: {
                  value: t.nm
                }
              }), r.mn = t.mn, r
            }

            function h(t, e, n) {
              function r(e) {
                return t.r.ix === e || "Round Corners 1" === e ? r.radius : null
              }
              var i = propertyGroupFactory(r, n),
                a = e;
              return r.propertyIndex = t.ix, a.rd.setGroupProperty(PropertyInterface("Radius", i)), Object.defineProperties(r, {
                radius: {
                  get: ExpressionPropertyInterface(a.rd)
                },
                _name: {
                  value: t.nm
                }
              }), r.mn = t.mn, r
            }

            function c(t, e, n) {
              function r(e) {
                return t.c.ix === e || "Copies" === e ? r.copies : t.o.ix === e || "Offset" === e ? r.offset : null
              }
              var i = propertyGroupFactory(r, n),
                a = e;
              return r.propertyIndex = t.ix, a.c.setGroupProperty(PropertyInterface("Copies", i)), a.o.setGroupProperty(PropertyInterface("Offset", i)), Object.defineProperties(r, {
                copies: {
                  get: ExpressionPropertyInterface(a.c)
                },
                offset: {
                  get: ExpressionPropertyInterface(a.o)
                },
                _name: {
                  value: t.nm
                }
              }), r.mn = t.mn, r
            }
            return function(e, n, r) {
              var i;

              function a(t) {
                if ("number" == typeof t) return 0 === (t = void 0 === t ? 1 : t) ? r : i[t - 1];
                for (var e = 0, n = i.length; e < n;) {
                  if (i[e]._name === t) return i[e];
                  e += 1
                }
                return null
              }
              return a.propertyGroup = propertyGroupFactory(a, (function() {
                return r
              })), i = t(e, n, a.propertyGroup), a.numProperties = i.length, a._name = "Contents", a
            }
          }(),
          TextExpressionInterface = function(t) {
            var e;

            function n(t) {
              return "ADBE Text Document" === t ? n.sourceText : null
            }
            return Object.defineProperty(n, "sourceText", {
              get: function() {
                t.textProperty.getValue();
                var n = t.textProperty.currentData.t;
                return e && n === e.value || ((e = new String(n)).value = n || new String(n), Object.defineProperty(e, "style", {
                  get: function() {
                    return {
                      fillColor: t.textProperty.currentData.fc
                    }
                  }
                })), e
              }
            }), n
          };

        function _typeof(t) {
          return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
          } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
          }, _typeof(t)
        }
        var FootageInterface = (dataInterfaceFactory = function(t) {
            function e(t) {
              return "Outline" === t ? e.outlineInterface() : null
            }
            return e._name = "Outline", e.outlineInterface = function(t) {
              var e = "",
                n = t.getFootageData();

              function r(t) {
                if (n[t]) return e = t, "object" === _typeof(n = n[t]) ? r : n;
                var i = t.indexOf(e);
                if (-1 !== i) {
                  var a = parseInt(t.substr(i + e.length), 10);
                  return "object" === _typeof(n = n[a]) ? r : n
                }
                return ""
              }
              return function() {
                return e = "", n = t.getFootageData(), r
              }
            }(t), e
          }, function(t) {
            function e(t) {
              return "Data" === t ? e.dataInterface : null
            }
            return e._name = "Data", e.dataInterface = dataInterfaceFactory(t), e
          }),
          dataInterfaceFactory, interfaces = {
            layer: LayerExpressionInterface,
            effects: EffectsExpressionInterface,
            comp: CompExpressionInterface,
            shape: ShapeExpressionInterface,
            text: TextExpressionInterface,
            footage: FootageInterface
          };

        function getInterface(t) {
          return interfaces[t] || null
        }
        var expressionHelpers = {
          searchExpressions: function(t, e, n) {
            e.x && (n.k = !0, n.x = !0, n.initiateExpression = ExpressionManager.initiateExpression, n.effectsSequence.push(n.initiateExpression(t, e, n).bind(n)))
          },
          getSpeedAtTime: function(t) {
            var e = this.getValueAtTime(t),
              n = this.getValueAtTime(t + -.01),
              r = 0;
            if (e.length) {
              var i;
              for (i = 0; i < e.length; i += 1) r += Math.pow(n[i] - e[i], 2);
              r = 100 * Math.sqrt(r)
            } else r = 0;
            return r
          },
          getVelocityAtTime: function(t) {
            if (void 0 !== this.vel) return this.vel;
            var e, n, r = -.001,
              i = this.getValueAtTime(t),
              a = this.getValueAtTime(t + r);
            if (i.length)
              for (e = createTypedArray("float32", i.length), n = 0; n < i.length; n += 1) e[n] = (a[n] - i[n]) / r;
            else e = (a - i) / r;
            return e
          },
          getValueAtTime: function(t) {
            return t *= this.elem.globalData.frameRate, (t -= this.offsetTime) !== this._cachingAtTime.lastFrame && (this._cachingAtTime.lastIndex = this._cachingAtTime.lastFrame < t ? this._cachingAtTime.lastIndex : 0, this._cachingAtTime.value = this.interpolateValue(t, this._cachingAtTime), this._cachingAtTime.lastFrame = t), this._cachingAtTime.value
          },
          getStaticValueAtTime: function() {
            return this.pv
          },
          setGroupProperty: function(t) {
            this.propertyGroup = t
          }
        };

        function addPropertyDecorator() {
          function t(t, e, n) {
            if (!this.k || !this.keyframes) return this.pv;
            t = t ? t.toLowerCase() : "";
            var r, i, a, s, o, l = this.comp.renderedFrame,
              u = this.keyframes,
              h = u[u.length - 1].t;
            if (l <= h) return this.pv;
            if (n ? i = h - (r = e ? Math.abs(h - this.elem.comp.globalData.frameRate * e) : Math.max(0, h - this.elem.data.ip)) : ((!e || e > u.length - 1) && (e = u.length - 1), r = h - (i = u[u.length - 1 - e].t)), "pingpong" === t) {
              if (Math.floor((l - i) / r) % 2 != 0) return this.getValueAtTime((r - (l - i) % r + i) / this.comp.globalData.frameRate, 0)
            } else {
              if ("offset" === t) {
                var c = this.getValueAtTime(i / this.comp.globalData.frameRate, 0),
                  p = this.getValueAtTime(h / this.comp.globalData.frameRate, 0),
                  f = this.getValueAtTime(((l - i) % r + i) / this.comp.globalData.frameRate, 0),
                  d = Math.floor((l - i) / r);
                if (this.pv.length) {
                  for (s = (o = new Array(c.length)).length, a = 0; a < s; a += 1) o[a] = (p[a] - c[a]) * d + f[a];
                  return o
                }
                return (p - c) * d + f
              }
              if ("continue" === t) {
                var m = this.getValueAtTime(h / this.comp.globalData.frameRate, 0),
                  v = this.getValueAtTime((h - .001) / this.comp.globalData.frameRate, 0);
                if (this.pv.length) {
                  for (s = (o = new Array(m.length)).length, a = 0; a < s; a += 1) o[a] = m[a] + (m[a] - v[a]) * ((l - h) / this.comp.globalData.frameRate) / 5e-4;
                  return o
                }
                return m + (l - h) / .001 * (m - v)
              }
            }
            return this.getValueAtTime(((l - i) % r + i) / this.comp.globalData.frameRate, 0)
          }

          function e(t, e, n) {
            if (!this.k) return this.pv;
            t = t ? t.toLowerCase() : "";
            var r, i, a, s, o, l = this.comp.renderedFrame,
              u = this.keyframes,
              h = u[0].t;
            if (l >= h) return this.pv;
            if (n ? i = h + (r = e ? Math.abs(this.elem.comp.globalData.frameRate * e) : Math.max(0, this.elem.data.op - h)) : ((!e || e > u.length - 1) && (e = u.length - 1), r = (i = u[e].t) - h), "pingpong" === t) {
              if (Math.floor((h - l) / r) % 2 == 0) return this.getValueAtTime(((h - l) % r + h) / this.comp.globalData.frameRate, 0)
            } else {
              if ("offset" === t) {
                var c = this.getValueAtTime(h / this.comp.globalData.frameRate, 0),
                  p = this.getValueAtTime(i / this.comp.globalData.frameRate, 0),
                  f = this.getValueAtTime((r - (h - l) % r + h) / this.comp.globalData.frameRate, 0),
                  d = Math.floor((h - l) / r) + 1;
                if (this.pv.length) {
                  for (s = (o = new Array(c.length)).length, a = 0; a < s; a += 1) o[a] = f[a] - (p[a] - c[a]) * d;
                  return o
                }
                return f - (p - c) * d
              }
              if ("continue" === t) {
                var m = this.getValueAtTime(h / this.comp.globalData.frameRate, 0),
                  v = this.getValueAtTime((h + .001) / this.comp.globalData.frameRate, 0);
                if (this.pv.length) {
                  for (s = (o = new Array(m.length)).length, a = 0; a < s; a += 1) o[a] = m[a] + (m[a] - v[a]) * (h - l) / .001;
                  return o
                }
                return m + (m - v) * (h - l) / .001
              }
            }
            return this.getValueAtTime((r - ((h - l) % r + h)) / this.comp.globalData.frameRate, 0)
          }

          function n(t, e) {
            if (!this.k) return this.pv;
            if (t = .5 * (t || .4), (e = Math.floor(e || 5)) <= 1) return this.pv;
            var n, r, i = this.comp.renderedFrame / this.comp.globalData.frameRate,
              a = i - t,
              s = e > 1 ? (i + t - a) / (e - 1) : 1,
              o = 0,
              l = 0;
            for (n = this.pv.length ? createTypedArray("float32", this.pv.length) : 0; o < e;) {
              if (r = this.getValueAtTime(a + o * s), this.pv.length)
                for (l = 0; l < this.pv.length; l += 1) n[l] += r[l];
              else n += r;
              o += 1
            }
            if (this.pv.length)
              for (l = 0; l < this.pv.length; l += 1) n[l] /= e;
            else n /= e;
            return n
          }

          function r(t) {
            this._transformCachingAtTime || (this._transformCachingAtTime = {
              v: new Matrix
            });
            var e = this._transformCachingAtTime.v;
            if (e.cloneFromProps(this.pre.props), this.appliedTransformations < 1) {
              var n = this.a.getValueAtTime(t);
              e.translate(-n[0] * this.a.mult, -n[1] * this.a.mult, n[2] * this.a.mult)
            }
            if (this.appliedTransformations < 2) {
              var r = this.s.getValueAtTime(t);
              e.scale(r[0] * this.s.mult, r[1] * this.s.mult, r[2] * this.s.mult)
            }
            if (this.sk && this.appliedTransformations < 3) {
              var i = this.sk.getValueAtTime(t),
                a = this.sa.getValueAtTime(t);
              e.skewFromAxis(-i * this.sk.mult, a * this.sa.mult)
            }
            if (this.r && this.appliedTransformations < 4) {
              var s = this.r.getValueAtTime(t);
              e.rotate(-s * this.r.mult)
            } else if (!this.r && this.appliedTransformations < 4) {
              var o = this.rz.getValueAtTime(t),
                l = this.ry.getValueAtTime(t),
                u = this.rx.getValueAtTime(t),
                h = this.or.getValueAtTime(t);
              e.rotateZ(-o * this.rz.mult).rotateY(l * this.ry.mult).rotateX(u * this.rx.mult).rotateZ(-h[2] * this.or.mult).rotateY(h[1] * this.or.mult).rotateX(h[0] * this.or.mult)
            }
            if (this.data.p && this.data.p.s) {
              var c = this.px.getValueAtTime(t),
                p = this.py.getValueAtTime(t);
              if (this.data.p.z) {
                var f = this.pz.getValueAtTime(t);
                e.translate(c * this.px.mult, p * this.py.mult, -f * this.pz.mult)
              } else e.translate(c * this.px.mult, p * this.py.mult, 0)
            } else {
              var d = this.p.getValueAtTime(t);
              e.translate(d[0] * this.p.mult, d[1] * this.p.mult, -d[2] * this.p.mult)
            }
            return e
          }

          function i() {
            return this.v.clone(new Matrix)
          }
          var a = TransformPropertyFactory.getTransformProperty;
          TransformPropertyFactory.getTransformProperty = function(t, e, n) {
            var s = a(t, e, n);
            return s.dynamicProperties.length ? s.getValueAtTime = r.bind(s) : s.getValueAtTime = i.bind(s), s.setGroupProperty = expressionHelpers.setGroupProperty, s
          };
          var s = PropertyFactory.getProp;
          PropertyFactory.getProp = function(r, i, a, o, l) {
            var u = s(r, i, a, o, l);
            u.kf ? u.getValueAtTime = expressionHelpers.getValueAtTime.bind(u) : u.getValueAtTime = expressionHelpers.getStaticValueAtTime.bind(u), u.setGroupProperty = expressionHelpers.setGroupProperty, u.loopOut = t, u.loopIn = e, u.smooth = n, u.getVelocityAtTime = expressionHelpers.getVelocityAtTime.bind(u), u.getSpeedAtTime = expressionHelpers.getSpeedAtTime.bind(u), u.numKeys = 1 === i.a ? i.k.length : 0, u.propertyIndex = i.ix;
            var h = 0;
            return 0 !== a && (h = createTypedArray("float32", 1 === i.a ? i.k[0].s.length : i.k.length)), u._cachingAtTime = {
              lastFrame: initialDefaultFrame,
              lastIndex: 0,
              value: h
            }, expressionHelpers.searchExpressions(r, i, u), u.k && l.addDynamicProperty(u), u
          };
          var o = ShapePropertyFactory.getConstructorFunction(),
            l = ShapePropertyFactory.getKeyframedConstructorFunction();

          function u() {}
          u.prototype = {
            vertices: function(t, e) {
              this.k && this.getValue();
              var n, r = this.v;
              void 0 !== e && (r = this.getValueAtTime(e, 0));
              var i = r._length,
                a = r[t],
                s = r.v,
                o = createSizedArray(i);
              for (n = 0; n < i; n += 1) o[n] = "i" === t || "o" === t ? [a[n][0] - s[n][0], a[n][1] - s[n][1]] : [a[n][0], a[n][1]];
              return o
            },
            points: function(t) {
              return this.vertices("v", t)
            },
            inTangents: function(t) {
              return this.vertices("i", t)
            },
            outTangents: function(t) {
              return this.vertices("o", t)
            },
            isClosed: function() {
              return this.v.c
            },
            pointOnPath: function(t, e) {
              var n = this.v;
              void 0 !== e && (n = this.getValueAtTime(e, 0)), this._segmentsLength || (this._segmentsLength = bez.getSegmentsLength(n));
              for (var r, i = this._segmentsLength, a = i.lengths, s = i.totalLength * t, o = 0, l = a.length, u = 0; o < l;) {
                if (u + a[o].addedLength > s) {
                  var h = o,
                    c = n.c && o === l - 1 ? 0 : o + 1,
                    p = (s - u) / a[o].addedLength;
                  r = bez.getPointInSegment(n.v[h], n.v[c], n.o[h], n.i[c], p, a[o]);
                  break
                }
                u += a[o].addedLength, o += 1
              }
              return r || (r = n.c ? [n.v[0][0], n.v[0][1]] : [n.v[n._length - 1][0], n.v[n._length - 1][1]]), r
            },
            vectorOnPath: function(t, e, n) {
              1 == t ? t = this.v.c : 0 == t && (t = .999);
              var r = this.pointOnPath(t, e),
                i = this.pointOnPath(t + .001, e),
                a = i[0] - r[0],
                s = i[1] - r[1],
                o = Math.sqrt(Math.pow(a, 2) + Math.pow(s, 2));
              return 0 === o ? [0, 0] : "tangent" === n ? [a / o, s / o] : [-s / o, a / o]
            },
            tangentOnPath: function(t, e) {
              return this.vectorOnPath(t, e, "tangent")
            },
            normalOnPath: function(t, e) {
              return this.vectorOnPath(t, e, "normal")
            },
            setGroupProperty: expressionHelpers.setGroupProperty,
            getValueAtTime: expressionHelpers.getStaticValueAtTime
          }, extendPrototype([u], o), extendPrototype([u], l), l.prototype.getValueAtTime = function(t) {
            return this._cachingAtTime || (this._cachingAtTime = {
              shapeValue: shapePool.clone(this.pv),
              lastIndex: 0,
              lastTime: initialDefaultFrame
            }), t *= this.elem.globalData.frameRate, (t -= this.offsetTime) !== this._cachingAtTime.lastTime && (this._cachingAtTime.lastIndex = this._cachingAtTime.lastTime < t ? this._caching.lastIndex : 0, this._cachingAtTime.lastTime = t, this.interpolateShape(t, this._cachingAtTime.shapeValue, this._cachingAtTime)), this._cachingAtTime.shapeValue
          }, l.prototype.initiateExpression = ExpressionManager.initiateExpression;
          var h = ShapePropertyFactory.getShapeProp;
          ShapePropertyFactory.getShapeProp = function(t, e, n, r, i) {
            var a = h(t, e, n, r, i);
            return a.propertyIndex = e.ix, a.lock = !1, 3 === n ? expressionHelpers.searchExpressions(t, e.pt, a) : 4 === n && expressionHelpers.searchExpressions(t, e.ks, a), a.k && t.addDynamicProperty(a), a
          }
        }

        function initialize$1() {
          addPropertyDecorator()
        }

        function addDecorator() {
          TextProperty.prototype.getExpressionValue = function(t, e) {
            var n = this.calculateExpression(e);
            if (t.t !== n) {
              var r = {};
              return this.copyData(r, t), r.t = n.toString(), r.__complete = !1, r
            }
            return t
          }, TextProperty.prototype.searchProperty = function() {
            var t = this.searchKeyframes(),
              e = this.searchExpressions();
            return this.kf = t || e, this.kf
          }, TextProperty.prototype.searchExpressions = function() {
            return this.data.d.x ? (this.calculateExpression = ExpressionManager.initiateExpression.bind(this)(this.elem, this.data.d, this), this.addEffect(this.getExpressionValue.bind(this)), !0) : null
          }
        }

        function initialize() {
          addDecorator()
        }

        function SVGComposableEffect() {}
        SVGComposableEffect.prototype = {
          createMergeNode: function(t, e) {
            var n, r, i = createNS("feMerge");
            for (i.setAttribute("result", t), r = 0; r < e.length; r += 1)(n = createNS("feMergeNode")).setAttribute("in", e[r]), i.appendChild(n), i.appendChild(n);
            return i
          }
        };
        var linearFilterValue = "0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0";

        function SVGTintFilter(t, e, n, r, i) {
          this.filterManager = e;
          var a = createNS("feColorMatrix");
          a.setAttribute("type", "matrix"), a.setAttribute("color-interpolation-filters", "linearRGB"), a.setAttribute("values", linearFilterValue + " 1 0"), this.linearFilter = a, a.setAttribute("result", r + "_tint_1"), t.appendChild(a), (a = createNS("feColorMatrix")).setAttribute("type", "matrix"), a.setAttribute("color-interpolation-filters", "sRGB"), a.setAttribute("values", "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"), a.setAttribute("result", r + "_tint_2"), t.appendChild(a), this.matrixFilter = a;
          var s = this.createMergeNode(r, [i, r + "_tint_1", r + "_tint_2"]);
          t.appendChild(s)
        }

        function SVGFillFilter(t, e, n, r) {
          this.filterManager = e;
          var i = createNS("feColorMatrix");
          i.setAttribute("type", "matrix"), i.setAttribute("color-interpolation-filters", "sRGB"), i.setAttribute("values", "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"), i.setAttribute("result", r), t.appendChild(i), this.matrixFilter = i
        }

        function SVGStrokeEffect(t, e, n) {
          this.initialized = !1, this.filterManager = e, this.elem = n, this.paths = []
        }

        function SVGTritoneFilter(t, e, n, r) {
          this.filterManager = e;
          var i = createNS("feColorMatrix");
          i.setAttribute("type", "matrix"), i.setAttribute("color-interpolation-filters", "linearRGB"), i.setAttribute("values", "0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0"), t.appendChild(i);
          var a = createNS("feComponentTransfer");
          a.setAttribute("color-interpolation-filters", "sRGB"), a.setAttribute("result", r), this.matrixFilter = a;
          var s = createNS("feFuncR");
          s.setAttribute("type", "table"), a.appendChild(s), this.feFuncR = s;
          var o = createNS("feFuncG");
          o.setAttribute("type", "table"), a.appendChild(o), this.feFuncG = o;
          var l = createNS("feFuncB");
          l.setAttribute("type", "table"), a.appendChild(l), this.feFuncB = l, t.appendChild(a)
        }

        function SVGProLevelsFilter(t, e, n, r) {
          this.filterManager = e;
          var i = this.filterManager.effectElements,
            a = createNS("feComponentTransfer");
          (i[10].p.k || 0 !== i[10].p.v || i[11].p.k || 1 !== i[11].p.v || i[12].p.k || 1 !== i[12].p.v || i[13].p.k || 0 !== i[13].p.v || i[14].p.k || 1 !== i[14].p.v) && (this.feFuncR = this.createFeFunc("feFuncR", a)), (i[17].p.k || 0 !== i[17].p.v || i[18].p.k || 1 !== i[18].p.v || i[19].p.k || 1 !== i[19].p.v || i[20].p.k || 0 !== i[20].p.v || i[21].p.k || 1 !== i[21].p.v) && (this.feFuncG = this.createFeFunc("feFuncG", a)), (i[24].p.k || 0 !== i[24].p.v || i[25].p.k || 1 !== i[25].p.v || i[26].p.k || 1 !== i[26].p.v || i[27].p.k || 0 !== i[27].p.v || i[28].p.k || 1 !== i[28].p.v) && (this.feFuncB = this.createFeFunc("feFuncB", a)), (i[31].p.k || 0 !== i[31].p.v || i[32].p.k || 1 !== i[32].p.v || i[33].p.k || 1 !== i[33].p.v || i[34].p.k || 0 !== i[34].p.v || i[35].p.k || 1 !== i[35].p.v) && (this.feFuncA = this.createFeFunc("feFuncA", a)), (this.feFuncR || this.feFuncG || this.feFuncB || this.feFuncA) && (a.setAttribute("color-interpolation-filters", "sRGB"), t.appendChild(a)), (i[3].p.k || 0 !== i[3].p.v || i[4].p.k || 1 !== i[4].p.v || i[5].p.k || 1 !== i[5].p.v || i[6].p.k || 0 !== i[6].p.v || i[7].p.k || 1 !== i[7].p.v) && ((a = createNS("feComponentTransfer")).setAttribute("color-interpolation-filters", "sRGB"), a.setAttribute("result", r), t.appendChild(a), this.feFuncRComposed = this.createFeFunc("feFuncR", a), this.feFuncGComposed = this.createFeFunc("feFuncG", a), this.feFuncBComposed = this.createFeFunc("feFuncB", a))
        }

        function SVGDropShadowEffect(t, e, n, r, i) {
          var a = e.container.globalData.renderConfig.filterSize,
            s = e.data.fs || a;
          t.setAttribute("x", s.x || a.x), t.setAttribute("y", s.y || a.y), t.setAttribute("width", s.width || a.width), t.setAttribute("height", s.height || a.height), this.filterManager = e;
          var o = createNS("feGaussianBlur");
          o.setAttribute("in", "SourceAlpha"), o.setAttribute("result", r + "_drop_shadow_1"), o.setAttribute("stdDeviation", "0"), this.feGaussianBlur = o, t.appendChild(o);
          var l = createNS("feOffset");
          l.setAttribute("dx", "25"), l.setAttribute("dy", "0"), l.setAttribute("in", r + "_drop_shadow_1"), l.setAttribute("result", r + "_drop_shadow_2"), this.feOffset = l, t.appendChild(l);
          var u = createNS("feFlood");
          u.setAttribute("flood-color", "#00ff00"), u.setAttribute("flood-opacity", "1"), u.setAttribute("result", r + "_drop_shadow_3"), this.feFlood = u, t.appendChild(u);
          var h = createNS("feComposite");
          h.setAttribute("in", r + "_drop_shadow_3"), h.setAttribute("in2", r + "_drop_shadow_2"), h.setAttribute("operator", "in"), h.setAttribute("result", r + "_drop_shadow_4"), t.appendChild(h);
          var c = this.createMergeNode(r, [r + "_drop_shadow_4", i]);
          t.appendChild(c)
        }
        extendPrototype([SVGComposableEffect], SVGTintFilter), SVGTintFilter.prototype.renderFrame = function(t) {
          if (t || this.filterManager._mdf) {
            var e = this.filterManager.effectElements[0].p.v,
              n = this.filterManager.effectElements[1].p.v,
              r = this.filterManager.effectElements[2].p.v / 100;
            this.linearFilter.setAttribute("values", linearFilterValue + " " + r + " 0"), this.matrixFilter.setAttribute("values", n[0] - e[0] + " 0 0 0 " + e[0] + " " + (n[1] - e[1]) + " 0 0 0 " + e[1] + " " + (n[2] - e[2]) + " 0 0 0 " + e[2] + " 0 0 0 1 0")
          }
        }, SVGFillFilter.prototype.renderFrame = function(t) {
          if (t || this.filterManager._mdf) {
            var e = this.filterManager.effectElements[2].p.v,
              n = this.filterManager.effectElements[6].p.v;
            this.matrixFilter.setAttribute("values", "0 0 0 0 " + e[0] + " 0 0 0 0 " + e[1] + " 0 0 0 0 " + e[2] + " 0 0 0 " + n + " 0")
          }
        }, SVGStrokeEffect.prototype.initialize = function() {
          var t, e, n, r, i = this.elem.layerElement.children || this.elem.layerElement.childNodes;
          for (1 === this.filterManager.effectElements[1].p.v ? (r = this.elem.maskManager.masksProperties.length, n = 0) : r = 1 + (n = this.filterManager.effectElements[0].p.v - 1), (e = createNS("g")).setAttribute("fill", "none"), e.setAttribute("stroke-linecap", "round"), e.setAttribute("stroke-dashoffset", 1); n < r; n += 1) t = createNS("path"), e.appendChild(t), this.paths.push({
            p: t,
            m: n
          });
          if (3 === this.filterManager.effectElements[10].p.v) {
            var a = createNS("mask"),
              s = createElementID();
            a.setAttribute("id", s), a.setAttribute("mask-type", "alpha"), a.appendChild(e), this.elem.globalData.defs.appendChild(a);
            var o = createNS("g");
            for (o.setAttribute("mask", "url(" + getLocationHref() + "#" + s + ")"); i[0];) o.appendChild(i[0]);
            this.elem.layerElement.appendChild(o), this.masker = a, e.setAttribute("stroke", "#fff")
          } else if (1 === this.filterManager.effectElements[10].p.v || 2 === this.filterManager.effectElements[10].p.v) {
            if (2 === this.filterManager.effectElements[10].p.v)
              for (i = this.elem.layerElement.children || this.elem.layerElement.childNodes; i.length;) this.elem.layerElement.removeChild(i[0]);
            this.elem.layerElement.appendChild(e), this.elem.layerElement.removeAttribute("mask"), e.setAttribute("stroke", "#fff")
          }
          this.initialized = !0, this.pathMasker = e
        }, SVGStrokeEffect.prototype.renderFrame = function(t) {
          var e;
          this.initialized || this.initialize();
          var n, r, i = this.paths.length;
          for (e = 0; e < i; e += 1)
            if (-1 !== this.paths[e].m && (n = this.elem.maskManager.viewData[this.paths[e].m], r = this.paths[e].p, (t || this.filterManager._mdf || n.prop._mdf) && r.setAttribute("d", n.lastPath), t || this.filterManager.effectElements[9].p._mdf || this.filterManager.effectElements[4].p._mdf || this.filterManager.effectElements[7].p._mdf || this.filterManager.effectElements[8].p._mdf || n.prop._mdf)) {
              var a;
              if (0 !== this.filterManager.effectElements[7].p.v || 100 !== this.filterManager.effectElements[8].p.v) {
                var s = .01 * Math.min(this.filterManager.effectElements[7].p.v, this.filterManager.effectElements[8].p.v),
                  o = .01 * Math.max(this.filterManager.effectElements[7].p.v, this.filterManager.effectElements[8].p.v),
                  l = r.getTotalLength();
                a = "0 0 0 " + l * s + " ";
                var u, h = l * (o - s),
                  c = 1 + 2 * this.filterManager.effectElements[4].p.v * this.filterManager.effectElements[9].p.v * .01,
                  p = Math.floor(h / c);
                for (u = 0; u < p; u += 1) a += "1 " + 2 * this.filterManager.effectElements[4].p.v * this.filterManager.effectElements[9].p.v * .01 + " ";
                a += "0 " + 10 * l + " 0 0"
              } else a = "1 " + 2 * this.filterManager.effectElements[4].p.v * this.filterManager.effectElements[9].p.v * .01;
              r.setAttribute("stroke-dasharray", a)
            } if ((t || this.filterManager.effectElements[4].p._mdf) && this.pathMasker.setAttribute("stroke-width", 2 * this.filterManager.effectElements[4].p.v), (t || this.filterManager.effectElements[6].p._mdf) && this.pathMasker.setAttribute("opacity", this.filterManager.effectElements[6].p.v), (1 === this.filterManager.effectElements[10].p.v || 2 === this.filterManager.effectElements[10].p.v) && (t || this.filterManager.effectElements[3].p._mdf)) {
            var f = this.filterManager.effectElements[3].p.v;
            this.pathMasker.setAttribute("stroke", "rgb(" + bmFloor(255 * f[0]) + "," + bmFloor(255 * f[1]) + "," + bmFloor(255 * f[2]) + ")")
          }
        }, SVGTritoneFilter.prototype.renderFrame = function(t) {
          if (t || this.filterManager._mdf) {
            var e = this.filterManager.effectElements[0].p.v,
              n = this.filterManager.effectElements[1].p.v,
              r = this.filterManager.effectElements[2].p.v,
              i = r[0] + " " + n[0] + " " + e[0],
              a = r[1] + " " + n[1] + " " + e[1],
              s = r[2] + " " + n[2] + " " + e[2];
            this.feFuncR.setAttribute("tableValues", i), this.feFuncG.setAttribute("tableValues", a), this.feFuncB.setAttribute("tableValues", s)
          }
        }, SVGProLevelsFilter.prototype.createFeFunc = function(t, e) {
          var n = createNS(t);
          return n.setAttribute("type", "table"), e.appendChild(n), n
        }, SVGProLevelsFilter.prototype.getTableValue = function(t, e, n, r, i) {
          for (var a, s, o = 0, l = Math.min(t, e), u = Math.max(t, e), h = Array.call(null, {
              length: 256
            }), c = 0, p = i - r, f = e - t; o <= 256;) s = (a = o / 256) <= l ? f < 0 ? i : r : a >= u ? f < 0 ? r : i : r + p * Math.pow((a - t) / f, 1 / n), h[c] = s, c += 1, o += 256 / 255;
          return h.join(" ")
        }, SVGProLevelsFilter.prototype.renderFrame = function(t) {
          if (t || this.filterManager._mdf) {
            var e, n = this.filterManager.effectElements;
            this.feFuncRComposed && (t || n[3].p._mdf || n[4].p._mdf || n[5].p._mdf || n[6].p._mdf || n[7].p._mdf) && (e = this.getTableValue(n[3].p.v, n[4].p.v, n[5].p.v, n[6].p.v, n[7].p.v), this.feFuncRComposed.setAttribute("tableValues", e), this.feFuncGComposed.setAttribute("tableValues", e), this.feFuncBComposed.setAttribute("tableValues", e)), this.feFuncR && (t || n[10].p._mdf || n[11].p._mdf || n[12].p._mdf || n[13].p._mdf || n[14].p._mdf) && (e = this.getTableValue(n[10].p.v, n[11].p.v, n[12].p.v, n[13].p.v, n[14].p.v), this.feFuncR.setAttribute("tableValues", e)), this.feFuncG && (t || n[17].p._mdf || n[18].p._mdf || n[19].p._mdf || n[20].p._mdf || n[21].p._mdf) && (e = this.getTableValue(n[17].p.v, n[18].p.v, n[19].p.v, n[20].p.v, n[21].p.v), this.feFuncG.setAttribute("tableValues", e)), this.feFuncB && (t || n[24].p._mdf || n[25].p._mdf || n[26].p._mdf || n[27].p._mdf || n[28].p._mdf) && (e = this.getTableValue(n[24].p.v, n[25].p.v, n[26].p.v, n[27].p.v, n[28].p.v), this.feFuncB.setAttribute("tableValues", e)), this.feFuncA && (t || n[31].p._mdf || n[32].p._mdf || n[33].p._mdf || n[34].p._mdf || n[35].p._mdf) && (e = this.getTableValue(n[31].p.v, n[32].p.v, n[33].p.v, n[34].p.v, n[35].p.v), this.feFuncA.setAttribute("tableValues", e))
          }
        }, extendPrototype([SVGComposableEffect], SVGDropShadowEffect), SVGDropShadowEffect.prototype.renderFrame = function(t) {
          if (t || this.filterManager._mdf) {
            if ((t || this.filterManager.effectElements[4].p._mdf) && this.feGaussianBlur.setAttribute("stdDeviation", this.filterManager.effectElements[4].p.v / 4), t || this.filterManager.effectElements[0].p._mdf) {
              var e = this.filterManager.effectElements[0].p.v;
              this.feFlood.setAttribute("flood-color", rgbToHex(Math.round(255 * e[0]), Math.round(255 * e[1]), Math.round(255 * e[2])))
            }
            if ((t || this.filterManager.effectElements[1].p._mdf) && this.feFlood.setAttribute("flood-opacity", this.filterManager.effectElements[1].p.v / 255), t || this.filterManager.effectElements[2].p._mdf || this.filterManager.effectElements[3].p._mdf) {
              var n = this.filterManager.effectElements[3].p.v,
                r = (this.filterManager.effectElements[2].p.v - 90) * degToRads,
                i = n * Math.cos(r),
                a = n * Math.sin(r);
              this.feOffset.setAttribute("dx", i), this.feOffset.setAttribute("dy", a)
            }
          }
        };
        var _svgMatteSymbols = [];

        function SVGMatte3Effect(t, e, n) {
          this.initialized = !1, this.filterManager = e, this.filterElem = t, this.elem = n, n.matteElement = createNS("g"), n.matteElement.appendChild(n.layerElement), n.matteElement.appendChild(n.transformedElement), n.baseElement = n.matteElement
        }

        function SVGGaussianBlurEffect(t, e, n, r) {
          t.setAttribute("x", "-100%"), t.setAttribute("y", "-100%"), t.setAttribute("width", "300%"), t.setAttribute("height", "300%"), this.filterManager = e;
          var i = createNS("feGaussianBlur");
          i.setAttribute("result", r), t.appendChild(i), this.feGaussianBlur = i
        }

        function TransformEffect() {}

        function SVGTransformEffect(t, e) {
          this.init(e)
        }

        function CVTransformEffect(t) {
          this.init(t)
        }
        return SVGMatte3Effect.prototype.findSymbol = function(t) {
          for (var e = 0, n = _svgMatteSymbols.length; e < n;) {
            if (_svgMatteSymbols[e] === t) return _svgMatteSymbols[e];
            e += 1
          }
          return null
        }, SVGMatte3Effect.prototype.replaceInParent = function(t, e) {
          var n = t.layerElement.parentNode;
          if (n) {
            for (var r, i = n.children, a = 0, s = i.length; a < s && i[a] !== t.layerElement;) a += 1;
            a <= s - 2 && (r = i[a + 1]);
            var o = createNS("use");
            o.setAttribute("href", "#" + e), r ? n.insertBefore(o, r) : n.appendChild(o)
          }
        }, SVGMatte3Effect.prototype.setElementAsMask = function(t, e) {
          if (!this.findSymbol(e)) {
            var n = createElementID(),
              r = createNS("mask");
            r.setAttribute("id", e.layerId), r.setAttribute("mask-type", "alpha"), _svgMatteSymbols.push(e);
            var i = t.globalData.defs;
            i.appendChild(r);
            var a = createNS("symbol");
            a.setAttribute("id", n), this.replaceInParent(e, n), a.appendChild(e.layerElement), i.appendChild(a);
            var s = createNS("use");
            s.setAttribute("href", "#" + n), r.appendChild(s), e.data.hd = !1, e.show()
          }
          t.setMatte(e.layerId)
        }, SVGMatte3Effect.prototype.initialize = function() {
          for (var t = this.filterManager.effectElements[0].p.v, e = this.elem.comp.elements, n = 0, r = e.length; n < r;) e[n] && e[n].data.ind === t && this.setElementAsMask(this.elem, e[n]), n += 1;
          this.initialized = !0
        }, SVGMatte3Effect.prototype.renderFrame = function() {
          this.initialized || this.initialize()
        }, SVGGaussianBlurEffect.prototype.renderFrame = function(t) {
          if (t || this.filterManager._mdf) {
            var e = .3 * this.filterManager.effectElements[0].p.v,
              n = this.filterManager.effectElements[1].p.v,
              r = 3 == n ? 0 : e,
              i = 2 == n ? 0 : e;
            this.feGaussianBlur.setAttribute("stdDeviation", r + " " + i);
            var a = 1 == this.filterManager.effectElements[2].p.v ? "wrap" : "duplicate";
            this.feGaussianBlur.setAttribute("edgeMode", a)
          }
        }, TransformEffect.prototype.init = function(t) {
          this.effectsManager = t, this.type = effectTypes.TRANSFORM_EFFECT, this.matrix = new Matrix, this.opacity = -1, this._mdf = !1, this._opMdf = !1
        }, TransformEffect.prototype.renderFrame = function(t) {
          if (this._opMdf = !1, this._mdf = !1, t || this.effectsManager._mdf) {
            var e = this.effectsManager.effectElements,
              n = e[0].p.v,
              r = e[1].p.v,
              i = 1 === e[2].p.v,
              a = e[3].p.v,
              s = i ? a : e[4].p.v,
              o = e[5].p.v,
              l = e[6].p.v,
              u = e[7].p.v;
            this.matrix.reset(), this.matrix.translate(-n[0], -n[1], n[2]), this.matrix.scale(.01 * s, .01 * a, 1), this.matrix.rotate(-u * degToRads), this.matrix.skewFromAxis(-o * degToRads, (l + 90) * degToRads), this.matrix.translate(r[0], r[1], 0), this._mdf = !0, this.opacity !== e[8].p.v && (this.opacity = e[8].p.v, this._opMdf = !0)
          }
        }, extendPrototype([TransformEffect], SVGTransformEffect), extendPrototype([TransformEffect], CVTransformEffect), registerRenderer("canvas", CanvasRenderer), registerRenderer("html", HybridRenderer), registerRenderer("svg", SVGRenderer), ShapeModifiers.registerModifier("tm", TrimModifier), ShapeModifiers.registerModifier("pb", PuckerAndBloatModifier), ShapeModifiers.registerModifier("rp", RepeaterModifier), ShapeModifiers.registerModifier("rd", RoundCornersModifier), ShapeModifiers.registerModifier("zz", ZigZagModifier), ShapeModifiers.registerModifier("op", OffsetPathModifier), setExpressionsPlugin(Expressions), setExpressionInterfaces(getInterface), initialize$1(), initialize(), registerEffect$1(20, SVGTintFilter, !0), registerEffect$1(21, SVGFillFilter, !0), registerEffect$1(22, SVGStrokeEffect, !1), registerEffect$1(23, SVGTritoneFilter, !0), registerEffect$1(24, SVGProLevelsFilter, !0), registerEffect$1(25, SVGDropShadowEffect, !0), registerEffect$1(28, SVGMatte3Effect, !1), registerEffect$1(29, SVGGaussianBlurEffect, !0), registerEffect$1(35, SVGTransformEffect, !1), registerEffect(35, CVTransformEffect), lottie
      }, module.exports = factory())
    },
    44392: t => {
      var e, n, r = t.exports = {};

      function i() {
        throw new Error("setTimeout has not been defined")
      }

      function a() {
        throw new Error("clearTimeout has not been defined")
      }

      function s(t) {
        if (e === setTimeout) return setTimeout(t, 0);
        if ((e === i || !e) && setTimeout) return e = setTimeout, setTimeout(t, 0);
        try {
          return e(t, 0)
        } catch (n) {
          try {
            return e.call(null, t, 0)
          } catch (n) {
            return e.call(this, t, 0)
          }
        }
      }! function() {
        try {
          e = "function" == typeof setTimeout ? setTimeout : i
        } catch (t) {
          e = i
        }
        try {
          n = "function" == typeof clearTimeout ? clearTimeout : a
        } catch (t) {
          n = a
        }
      }();
      var o, l = [],
        u = !1,
        h = -1;

      function c() {
        u && o && (u = !1, o.length ? l = o.concat(l) : h = -1, l.length && p())
      }

      function p() {
        if (!u) {
          var t = s(c);
          u = !0;
          for (var e = l.length; e;) {
            for (o = l, l = []; ++h < e;) o && o[h].run();
            h = -1, e = l.length
          }
          o = null, u = !1,
            function(t) {
              if (n === clearTimeout) return clearTimeout(t);
              if ((n === a || !n) && clearTimeout) return n = clearTimeout, clearTimeout(t);
              try {
                return n(t)
              } catch (e) {
                try {
                  return n.call(null, t)
                } catch (e) {
                  return n.call(this, t)
                }
              }
            }(t)
        }
      }

      function f(t, e) {
        this.fun = t, this.array = e
      }

      function d() {}
      r.nextTick = function(t) {
        var e = new Array(arguments.length - 1);
        if (arguments.length > 1)
          for (var n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
        l.push(new f(t, e)), 1 !== l.length || u || s(p)
      }, f.prototype.run = function() {
        this.fun.apply(null, this.array)
      }, r.title = "browser", r.browser = !0, r.env = {}, r.argv = [], r.version = "", r.versions = {}, r.on = d, r.addListener = d, r.once = d, r.off = d, r.removeListener = d, r.removeAllListeners = d, r.emit = d, r.prependListener = d, r.prependOnceListener = d, r.listeners = function(t) {
        return []
      }, r.binding = function(t) {
        throw new Error("process.binding is not supported")
      }, r.cwd = function() {
        return "/"
      }, r.chdir = function(t) {
        throw new Error("process.chdir is not supported")
      }, r.umask = function() {
        return 0
      }
    },
    54280: (t, e, n) => {
      "use strict";
      var r = n(75004);

      function i() {}

      function a() {}
      a.resetWarningCache = i, t.exports = function() {
        function t(t, e, n, i, a, s) {
          if (s !== r) {
            var o = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
            throw o.name = "Invariant Violation", o
          }
        }

        function e() {
          return t
        }
        t.isRequired = t;
        var n = {
          array: t,
          bigint: t,
          bool: t,
          func: t,
          number: t,
          object: t,
          string: t,
          symbol: t,
          any: t,
          arrayOf: e,
          element: t,
          elementType: t,
          instanceOf: e,
          node: t,
          objectOf: e,
          oneOf: e,
          oneOfType: e,
          shape: e,
          exact: e,
          checkPropTypes: a,
          resetWarningCache: i
        };
        return n.PropTypes = n, n
      }
    },
    71424: (t, e, n) => {
      t.exports = n(54280)()
    },
    75004: t => {
      "use strict";
      t.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
    },
    44236: function(t, e, n) {
      class r {
        constructor() {
          this.data = n(82396), this.labelMap = {}, this.valueMap = {}, this.data.forEach((t => {
            this.labelMap[t.label.toLowerCase()] = t.value, this.valueMap[t.value.toLowerCase()] = t.label
          }))
        }
        getValue(t) {
          return this.labelMap[t.toLowerCase()]
        }
        getLabel(t) {
          return this.valueMap[t.toLowerCase()]
        }
        getLabels() {
          return this.data.map((t => t.label))
        }
        getValues() {
          return this.data.map((t => t.value))
        }
        getLabelList() {
          return this.labelMap
        }
        getValueList() {
          return this.valueMap
        }
        getData() {
          return this.data
        }
        setLabel(t, e) {
          return this.data.forEach((n => {
            n.value === t && (n.label = e, this.valueMap[n.value.toLowerCase()] = n.label)
          })), this
        }
        setEmpty(t) {
          return this.data.unshift({
            value: "",
            label: t
          }), this.valueMap[""] = t, this.labelMap[t] = "", this
        }
        native() {
          return this.nativeData = n(78048), this.nativeData.forEach((t => {
            this.labelMap[t.label.toLowerCase()] = t.value, this.valueMap[t.value.toLowerCase()] = t.label
          })), this
        }
      }
      t.exports = () => {
        if (!(this instanceof r)) return new r
      }
    },
    12231: (t, e, n) => {
      "use strict";
      n.d(e, {
        c: () => l
      });
      const r = {
        randomUUID: "undefined" != typeof crypto && crypto.randomUUID && crypto.randomUUID.bind(crypto)
      };
      let i;
      const a = new Uint8Array(16);

      function s() {
        if (!i && (i = "undefined" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !i)) throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
        return i(a)
      }
      const o = [];
      for (let t = 0; t < 256; ++t) o.push((t + 256).toString(16).slice(1));
      const l = function(t, e, n) {
        if (r.randomUUID && !e && !t) return r.randomUUID();
        const i = (t = t || {}).random || (t.rng || s)();
        if (i[6] = 15 & i[6] | 64, i[8] = 63 & i[8] | 128, e) {
          n = n || 0;
          for (let t = 0; t < 16; ++t) e[n + t] = i[t];
          return e
        }
        return function(t) {
          let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          return o[t[e + 0]] + o[t[e + 1]] + o[t[e + 2]] + o[t[e + 3]] + "-" + o[t[e + 4]] + o[t[e + 5]] + "-" + o[t[e + 6]] + o[t[e + 7]] + "-" + o[t[e + 8]] + o[t[e + 9]] + "-" + o[t[e + 10]] + o[t[e + 11]] + o[t[e + 12]] + o[t[e + 13]] + o[t[e + 14]] + o[t[e + 15]]
        }(i)
      }
    },
    40684: (t, e, n) => {
      n(19808), t.exports = n(37208).Object.assign
    },
    41248: (t, e, n) => {
      n(47779);
      var r = n(37208).Object;
      t.exports = function(t, e) {
        return r.create(t, e)
      }
    },
    47952: (t, e, n) => {
      n(19652);
      var r = n(37208).Object;
      t.exports = function(t, e, n) {
        return r.defineProperty(t, e, n)
      }
    },
    37488: (t, e, n) => {
      n(24048), t.exports = n(37208).Object.getPrototypeOf
    },
    46760: (t, e, n) => {
      n(16200), t.exports = n(37208).Object.setPrototypeOf
    },
    90020: (t, e, n) => {
      n(37104), n(14788), n(71284), n(93696), t.exports = n(37208).Symbol
    },
    32784: (t, e, n) => {
      n(41852), n(63624), t.exports = n(33728).f("iterator")
    },
    18416: t => {
      t.exports = function(t) {
        if ("function" != typeof t) throw TypeError(t + " is not a function!");
        return t
      }
    },
    62016: t => {
      t.exports = function() {}
    },
    83060: (t, e, n) => {
      var r = n(93536);
      t.exports = function(t) {
        if (!r(t)) throw TypeError(t + " is not an object!");
        return t
      }
    },
    43572: (t, e, n) => {
      var r = n(28828),
        i = n(49344),
        a = n(82752);
      t.exports = function(t) {
        return function(e, n, s) {
          var o, l = r(e),
            u = i(l.length),
            h = a(s, u);
          if (t && n != n) {
            for (; u > h;)
              if ((o = l[h++]) != o) return !0
          } else
            for (; u > h; h++)
              if ((t || h in l) && l[h] === n) return t || h || 0;
          return !t && -1
        }
      }
    },
    79683: t => {
      var e = {}.toString;
      t.exports = function(t) {
        return e.call(t).slice(8, -1)
      }
    },
    37208: t => {
      var e = t.exports = {
        version: "2.6.12"
      };
      "number" == typeof __e && (__e = e)
    },
    76040: (t, e, n) => {
      var r = n(18416);
      t.exports = function(t, e, n) {
        if (r(t), void 0 === e) return t;
        switch (n) {
          case 1:
            return function(n) {
              return t.call(e, n)
            };
          case 2:
            return function(n, r) {
              return t.call(e, n, r)
            };
          case 3:
            return function(n, r, i) {
              return t.call(e, n, r, i)
            }
        }
        return function() {
          return t.apply(e, arguments)
        }
      }
    },
    69396: t => {
      t.exports = function(t) {
        if (null == t) throw TypeError("Can't call method on  " + t);
        return t
      }
    },
    65168: (t, e, n) => {
      t.exports = !n(65032)((function() {
        return 7 != Object.defineProperty({}, "a", {
          get: function() {
            return 7
          }
        }).a
      }))
    },
    76440: (t, e, n) => {
      var r = n(93536),
        i = n(56384).document,
        a = r(i) && r(i.createElement);
      t.exports = function(t) {
        return a ? i.createElement(t) : {}
      }
    },
    21608: t => {
      t.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
    },
    9684: (t, e, n) => {
      var r = n(37108),
        i = n(70716),
        a = n(9520);
      t.exports = function(t) {
        var e = r(t),
          n = i.f;
        if (n)
          for (var s, o = n(t), l = a.f, u = 0; o.length > u;) l.call(t, s = o[u++]) && e.push(s);
        return e
      }
    },
    96604: (t, e, n) => {
      var r = n(56384),
        i = n(37208),
        a = n(76040),
        s = n(11480),
        o = n(58868),
        l = "prototype",
        u = function(t, e, n) {
          var h, c, p, f = t & u.F,
            d = t & u.G,
            m = t & u.S,
            v = t & u.P,
            g = t & u.B,
            y = t & u.W,
            b = d ? i : i[e] || (i[e] = {}),
            x = b[l],
            S = d ? r : m ? r[e] : (r[e] || {})[l];
          for (h in d && (n = e), n)(c = !f && S && void 0 !== S[h]) && o(b, h) || (p = c ? S[h] : n[h], b[h] = d && "function" != typeof S[h] ? n[h] : g && c ? a(p, r) : y && S[h] == p ? function(t) {
            var e = function(e, n, r) {
              if (this instanceof t) {
                switch (arguments.length) {
                  case 0:
                    return new t;
                  case 1:
                    return new t(e);
                  case 2:
                    return new t(e, n)
                }
                return new t(e, n, r)
              }
              return t.apply(this, arguments)
            };
            return e[l] = t[l], e
          }(p) : v && "function" == typeof p ? a(Function.call, p) : p, v && ((b.virtual || (b.virtual = {}))[h] = p, t & u.R && x && !x[h] && s(x, h, p)))
        };
      u.F = 1, u.G = 2, u.S = 4, u.P = 8, u.B = 16, u.W = 32, u.U = 64, u.R = 128, t.exports = u
    },
    65032: t => {
      t.exports = function(t) {
        try {
          return !!t()
        } catch (t) {
          return !0
        }
      }
    },
    56384: t => {
      var e = t.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
      "number" == typeof __g && (__g = e)
    },
    58868: t => {
      var e = {}.hasOwnProperty;
      t.exports = function(t, n) {
        return e.call(t, n)
      }
    },
    11480: (t, e, n) => {
      var r = n(56008),
        i = n(15196);
      t.exports = n(65168) ? function(t, e, n) {
        return r.f(t, e, i(1, n))
      } : function(t, e, n) {
        return t[e] = n, t
      }
    },
    82176: (t, e, n) => {
      var r = n(56384).document;
      t.exports = r && r.documentElement
    },
    50160: (t, e, n) => {
      t.exports = !n(65168) && !n(65032)((function() {
        return 7 != Object.defineProperty(n(76440)("div"), "a", {
          get: function() {
            return 7
          }
        }).a
      }))
    },
    45760: (t, e, n) => {
      var r = n(79683);
      t.exports = Object("z").propertyIsEnumerable(0) ? Object : function(t) {
        return "String" == r(t) ? t.split("") : Object(t)
      }
    },
    44244: (t, e, n) => {
      var r = n(79683);
      t.exports = Array.isArray || function(t) {
        return "Array" == r(t)
      }
    },
    93536: t => {
      t.exports = function(t) {
        return "object" == typeof t ? null !== t : "function" == typeof t
      }
    },
    27e3: (t, e, n) => {
      "use strict";
      var r = n(75069),
        i = n(15196),
        a = n(76572),
        s = {};
      n(11480)(s, n(42516)("iterator"), (function() {
        return this
      })), t.exports = function(t, e, n) {
        t.prototype = r(s, {
          next: i(1, n)
        }), a(t, e + " Iterator")
      }
    },
    65708: (t, e, n) => {
      "use strict";
      var r = n(41380),
        i = n(96604),
        a = n(50496),
        s = n(11480),
        o = n(71148),
        l = n(27e3),
        u = n(76572),
        h = n(88872),
        c = n(42516)("iterator"),
        p = !([].keys && "next" in [].keys()),
        f = "keys",
        d = "values",
        m = function() {
          return this
        };
      t.exports = function(t, e, n, v, g, y, b) {
        l(n, e, v);
        var x, S, E, P = function(t) {
            if (!p && t in T) return T[t];
            switch (t) {
              case f:
              case d:
                return function() {
                  return new n(this, t)
                }
            }
            return function() {
              return new n(this, t)
            }
          },
          C = e + " Iterator",
          w = g == d,
          M = !1,
          T = t.prototype,
          A = T[c] || T["@@iterator"] || g && T[g],
          k = A || P(g),
          _ = g ? w ? P("entries") : k : void 0,
          D = "Array" == e && T.entries || A;
        if (D && (E = h(D.call(new t))) !== Object.prototype && E.next && (u(E, C, !0), r || "function" == typeof E[c] || s(E, c, m)), w && A && A.name !== d && (M = !0, k = function() {
            return A.call(this)
          }), r && !b || !p && !M && T[c] || s(T, c, k), o[e] = k, o[C] = m, g)
          if (x = {
              values: w ? k : P(d),
              keys: y ? k : P(f),
              entries: _
            }, b)
            for (S in x) S in T || a(T, S, x[S]);
          else i(i.P + i.F * (p || M), e, x);
        return x
      }
    },
    9980: t => {
      t.exports = function(t, e) {
        return {
          value: e,
          done: !!t
        }
      }
    },
    71148: t => {
      t.exports = {}
    },
    41380: t => {
      t.exports = !0
    },
    60528: (t, e, n) => {
      var r = n(63540)("meta"),
        i = n(93536),
        a = n(58868),
        s = n(56008).f,
        o = 0,
        l = Object.isExtensible || function() {
          return !0
        },
        u = !n(65032)((function() {
          return l(Object.preventExtensions({}))
        })),
        h = function(t) {
          s(t, r, {
            value: {
              i: "O" + ++o,
              w: {}
            }
          })
        },
        c = t.exports = {
          KEY: r,
          NEED: !1,
          fastKey: function(t, e) {
            if (!i(t)) return "symbol" == typeof t ? t : ("string" == typeof t ? "S" : "P") + t;
            if (!a(t, r)) {
              if (!l(t)) return "F";
              if (!e) return "E";
              h(t)
            }
            return t[r].i
          },
          getWeak: function(t, e) {
            if (!a(t, r)) {
              if (!l(t)) return !0;
              if (!e) return !1;
              h(t)
            }
            return t[r].w
          },
          onFreeze: function(t) {
            return u && c.NEED && l(t) && !a(t, r) && h(t), t
          }
        }
    },
    43492: (t, e, n) => {
      "use strict";
      var r = n(65168),
        i = n(37108),
        a = n(70716),
        s = n(9520),
        o = n(47380),
        l = n(45760),
        u = Object.assign;
      t.exports = !u || n(65032)((function() {
        var t = {},
          e = {},
          n = Symbol(),
          r = "abcdefghijklmnopqrst";
        return t[n] = 7, r.split("").forEach((function(t) {
          e[t] = t
        })), 7 != u({}, t)[n] || Object.keys(u({}, e)).join("") != r
      })) ? function(t, e) {
        for (var n = o(t), u = arguments.length, h = 1, c = a.f, p = s.f; u > h;)
          for (var f, d = l(arguments[h++]), m = c ? i(d).concat(c(d)) : i(d), v = m.length, g = 0; v > g;) f = m[g++], r && !p.call(d, f) || (n[f] = d[f]);
        return n
      } : u
    },
    75069: (t, e, n) => {
      var r = n(83060),
        i = n(23876),
        a = n(21608),
        s = n(7448)("IE_PROTO"),
        o = function() {},
        l = "prototype",
        u = function() {
          var t, e = n(76440)("iframe"),
            r = a.length;
          for (e.style.display = "none", n(82176).appendChild(e), e.src = "javascript:", (t = e.contentWindow.document).open(), t.write("<script>document.F=Object<\/script>"), t.close(), u = t.F; r--;) delete u[l][a[r]];
          return u()
        };
      t.exports = Object.create || function(t, e) {
        var n;
        return null !== t ? (o[l] = r(t), n = new o, o[l] = null, n[s] = t) : n = u(), void 0 === e ? n : i(n, e)
      }
    },
    56008: (t, e, n) => {
      var r = n(83060),
        i = n(50160),
        a = n(94800),
        s = Object.defineProperty;
      e.f = n(65168) ? Object.defineProperty : function(t, e, n) {
        if (r(t), e = a(e, !0), r(n), i) try {
          return s(t, e, n)
        } catch (t) {}
        if ("get" in n || "set" in n) throw TypeError("Accessors not supported!");
        return "value" in n && (t[e] = n.value), t
      }
    },
    23876: (t, e, n) => {
      var r = n(56008),
        i = n(83060),
        a = n(37108);
      t.exports = n(65168) ? Object.defineProperties : function(t, e) {
        i(t);
        for (var n, s = a(e), o = s.length, l = 0; o > l;) r.f(t, n = s[l++], e[n]);
        return t
      }
    },
    34096: (t, e, n) => {
      var r = n(9520),
        i = n(15196),
        a = n(28828),
        s = n(94800),
        o = n(58868),
        l = n(50160),
        u = Object.getOwnPropertyDescriptor;
      e.f = n(65168) ? u : function(t, e) {
        if (t = a(t), e = s(e, !0), l) try {
          return u(t, e)
        } catch (t) {}
        if (o(t, e)) return i(!r.f.call(t, e), t[e])
      }
    },
    49920: (t, e, n) => {
      var r = n(28828),
        i = n(57203).f,
        a = {}.toString,
        s = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
      t.exports.f = function(t) {
        return s && "[object Window]" == a.call(t) ? function(t) {
          try {
            return i(t)
          } catch (t) {
            return s.slice()
          }
        }(t) : i(r(t))
      }
    },
    57203: (t, e, n) => {
      var r = n(67988),
        i = n(21608).concat("length", "prototype");
      e.f = Object.getOwnPropertyNames || function(t) {
        return r(t, i)
      }
    },
    70716: (t, e) => {
      e.f = Object.getOwnPropertySymbols
    },
    88872: (t, e, n) => {
      var r = n(58868),
        i = n(47380),
        a = n(7448)("IE_PROTO"),
        s = Object.prototype;
      t.exports = Object.getPrototypeOf || function(t) {
        return t = i(t), r(t, a) ? t[a] : "function" == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype : t instanceof Object ? s : null
      }
    },
    67988: (t, e, n) => {
      var r = n(58868),
        i = n(28828),
        a = n(43572)(!1),
        s = n(7448)("IE_PROTO");
      t.exports = function(t, e) {
        var n, o = i(t),
          l = 0,
          u = [];
        for (n in o) n != s && r(o, n) && u.push(n);
        for (; e.length > l;) r(o, n = e[l++]) && (~a(u, n) || u.push(n));
        return u
      }
    },
    37108: (t, e, n) => {
      var r = n(67988),
        i = n(21608);
      t.exports = Object.keys || function(t) {
        return r(t, i)
      }
    },
    9520: (t, e) => {
      e.f = {}.propertyIsEnumerable
    },
    91040: (t, e, n) => {
      var r = n(96604),
        i = n(37208),
        a = n(65032);
      t.exports = function(t, e) {
        var n = (i.Object || {})[t] || Object[t],
          s = {};
        s[t] = e(n), r(r.S + r.F * a((function() {
          n(1)
        })), "Object", s)
      }
    },
    15196: t => {
      t.exports = function(t, e) {
        return {
          enumerable: !(1 & t),
          configurable: !(2 & t),
          writable: !(4 & t),
          value: e
        }
      }
    },
    50496: (t, e, n) => {
      t.exports = n(11480)
    },
    46935: (t, e, n) => {
      var r = n(93536),
        i = n(83060),
        a = function(t, e) {
          if (i(t), !r(e) && null !== e) throw TypeError(e + ": can't set as prototype!")
        };
      t.exports = {
        set: Object.setPrototypeOf || ("__proto__" in {} ? function(t, e, r) {
          try {
            (r = n(76040)(Function.call, n(34096).f(Object.prototype, "__proto__").set, 2))(t, []), e = !(t instanceof Array)
          } catch (t) {
            e = !0
          }
          return function(t, n) {
            return a(t, n), e ? t.__proto__ = n : r(t, n), t
          }
        }({}, !1) : void 0),
        check: a
      }
    },
    76572: (t, e, n) => {
      var r = n(56008).f,
        i = n(58868),
        a = n(42516)("toStringTag");
      t.exports = function(t, e, n) {
        t && !i(t = n ? t : t.prototype, a) && r(t, a, {
          configurable: !0,
          value: e
        })
      }
    },
    7448: (t, e, n) => {
      var r = n(13332)("keys"),
        i = n(63540);
      t.exports = function(t) {
        return r[t] || (r[t] = i(t))
      }
    },
    13332: (t, e, n) => {
      var r = n(37208),
        i = n(56384),
        a = "__core-js_shared__",
        s = i[a] || (i[a] = {});
      (t.exports = function(t, e) {
        return s[t] || (s[t] = void 0 !== e ? e : {})
      })("versions", []).push({
        version: r.version,
        mode: n(41380) ? "pure" : "global",
        copyright: "© 2020 Denis Pushkarev (zloirock.ru)"
      })
    },
    66268: (t, e, n) => {
      var r = n(9592),
        i = n(69396);
      t.exports = function(t) {
        return function(e, n) {
          var a, s, o = String(i(e)),
            l = r(n),
            u = o.length;
          return l < 0 || l >= u ? t ? "" : void 0 : (a = o.charCodeAt(l)) < 55296 || a > 56319 || l + 1 === u || (s = o.charCodeAt(l + 1)) < 56320 || s > 57343 ? t ? o.charAt(l) : a : t ? o.slice(l, l + 2) : s - 56320 + (a - 55296 << 10) + 65536
        }
      }
    },
    82752: (t, e, n) => {
      var r = n(9592),
        i = Math.max,
        a = Math.min;
      t.exports = function(t, e) {
        return (t = r(t)) < 0 ? i(t + e, 0) : a(t, e)
      }
    },
    9592: t => {
      var e = Math.ceil,
        n = Math.floor;
      t.exports = function(t) {
        return isNaN(t = +t) ? 0 : (t > 0 ? n : e)(t)
      }
    },
    28828: (t, e, n) => {
      var r = n(45760),
        i = n(69396);
      t.exports = function(t) {
        return r(i(t))
      }
    },
    49344: (t, e, n) => {
      var r = n(9592),
        i = Math.min;
      t.exports = function(t) {
        return t > 0 ? i(r(t), 9007199254740991) : 0
      }
    },
    47380: (t, e, n) => {
      var r = n(69396);
      t.exports = function(t) {
        return Object(r(t))
      }
    },
    94800: (t, e, n) => {
      var r = n(93536);
      t.exports = function(t, e) {
        if (!r(t)) return t;
        var n, i;
        if (e && "function" == typeof(n = t.toString) && !r(i = n.call(t))) return i;
        if ("function" == typeof(n = t.valueOf) && !r(i = n.call(t))) return i;
        if (!e && "function" == typeof(n = t.toString) && !r(i = n.call(t))) return i;
        throw TypeError("Can't convert object to primitive value")
      }
    },
    63540: t => {
      var e = 0,
        n = Math.random();
      t.exports = function(t) {
        return "Symbol(".concat(void 0 === t ? "" : t, ")_", (++e + n).toString(36))
      }
    },
    66152: (t, e, n) => {
      var r = n(56384),
        i = n(37208),
        a = n(41380),
        s = n(33728),
        o = n(56008).f;
      t.exports = function(t) {
        var e = i.Symbol || (i.Symbol = a ? {} : r.Symbol || {});
        "_" == t.charAt(0) || t in e || o(e, t, {
          value: s.f(t)
        })
      }
    },
    33728: (t, e, n) => {
      e.f = n(42516)
    },
    42516: (t, e, n) => {
      var r = n(13332)("wks"),
        i = n(63540),
        a = n(56384).Symbol,
        s = "function" == typeof a;
      (t.exports = function(t) {
        return r[t] || (r[t] = s && a[t] || (s ? a : i)("Symbol." + t))
      }).store = r
    },
    2084: (t, e, n) => {
      "use strict";
      var r = n(62016),
        i = n(9980),
        a = n(71148),
        s = n(28828);
      t.exports = n(65708)(Array, "Array", (function(t, e) {
        this._t = s(t), this._i = 0, this._k = e
      }), (function() {
        var t = this._t,
          e = this._k,
          n = this._i++;
        return !t || n >= t.length ? (this._t = void 0, i(1)) : i(0, "keys" == e ? n : "values" == e ? t[n] : [n, t[n]])
      }), "values"), a.Arguments = a.Array, r("keys"), r("values"), r("entries")
    },
    19808: (t, e, n) => {
      var r = n(96604);
      r(r.S + r.F, "Object", {
        assign: n(43492)
      })
    },
    47779: (t, e, n) => {
      var r = n(96604);
      r(r.S, "Object", {
        create: n(75069)
      })
    },
    19652: (t, e, n) => {
      var r = n(96604);
      r(r.S + r.F * !n(65168), "Object", {
        defineProperty: n(56008).f
      })
    },
    24048: (t, e, n) => {
      var r = n(47380),
        i = n(88872);
      n(91040)("getPrototypeOf", (function() {
        return function(t) {
          return i(r(t))
        }
      }))
    },
    16200: (t, e, n) => {
      var r = n(96604);
      r(r.S, "Object", {
        setPrototypeOf: n(46935).set
      })
    },
    14788: () => {},
    41852: (t, e, n) => {
      "use strict";
      var r = n(66268)(!0);
      n(65708)(String, "String", (function(t) {
        this._t = String(t), this._i = 0
      }), (function() {
        var t, e = this._t,
          n = this._i;
        return n >= e.length ? {
          value: void 0,
          done: !0
        } : (t = r(e, n), this._i += t.length, {
          value: t,
          done: !1
        })
      }))
    },
    37104: (t, e, n) => {
      "use strict";
      var r = n(56384),
        i = n(58868),
        a = n(65168),
        s = n(96604),
        o = n(50496),
        l = n(60528).KEY,
        u = n(65032),
        h = n(13332),
        c = n(76572),
        p = n(63540),
        f = n(42516),
        d = n(33728),
        m = n(66152),
        v = n(9684),
        g = n(44244),
        y = n(83060),
        b = n(93536),
        x = n(47380),
        S = n(28828),
        E = n(94800),
        P = n(15196),
        C = n(75069),
        w = n(49920),
        M = n(34096),
        T = n(70716),
        A = n(56008),
        k = n(37108),
        _ = M.f,
        D = A.f,
        I = w.f,
        F = r.Symbol,
        O = r.JSON,
        V = O && O.stringify,
        R = "prototype",
        L = f("_hidden"),
        B = f("toPrimitive"),
        N = {}.propertyIsEnumerable,
        j = h("symbol-registry"),
        z = h("symbols"),
        G = h("op-symbols"),
        H = Object[R],
        W = "function" == typeof F && !!T.f,
        U = r.QObject,
        q = !U || !U[R] || !U[R].findChild,
        Y = a && u((function() {
          return 7 != C(D({}, "a", {
            get: function() {
              return D(this, "a", {
                value: 7
              }).a
            }
          })).a
        })) ? function(t, e, n) {
          var r = _(H, e);
          r && delete H[e], D(t, e, n), r && t !== H && D(H, e, r)
        } : D,
        $ = function(t) {
          var e = z[t] = C(F[R]);
          return e._k = t, e
        },
        K = W && "symbol" == typeof F.iterator ? function(t) {
          return "symbol" == typeof t
        } : function(t) {
          return t instanceof F
        },
        X = function(t, e, n) {
          return t === H && X(G, e, n), y(t), e = E(e, !0), y(n), i(z, e) ? (n.enumerable ? (i(t, L) && t[L][e] && (t[L][e] = !1), n = C(n, {
            enumerable: P(0, !1)
          })) : (i(t, L) || D(t, L, P(1, {})), t[L][e] = !0), Y(t, e, n)) : D(t, e, n)
        },
        Z = function(t, e) {
          y(t);
          for (var n, r = v(e = S(e)), i = 0, a = r.length; a > i;) X(t, n = r[i++], e[n]);
          return t
        },
        J = function(t) {
          var e = N.call(this, t = E(t, !0));
          return !(this === H && i(z, t) && !i(G, t)) && (!(e || !i(this, t) || !i(z, t) || i(this, L) && this[L][t]) || e)
        },
        Q = function(t, e) {
          if (t = S(t), e = E(e, !0), t !== H || !i(z, e) || i(G, e)) {
            var n = _(t, e);
            return !n || !i(z, e) || i(t, L) && t[L][e] || (n.enumerable = !0), n
          }
        },
        tt = function(t) {
          for (var e, n = I(S(t)), r = [], a = 0; n.length > a;) i(z, e = n[a++]) || e == L || e == l || r.push(e);
          return r
        },
        et = function(t) {
          for (var e, n = t === H, r = I(n ? G : S(t)), a = [], s = 0; r.length > s;) !i(z, e = r[s++]) || n && !i(H, e) || a.push(z[e]);
          return a
        };
      W || (o((F = function() {
        if (this instanceof F) throw TypeError("Symbol is not a constructor!");
        var t = p(arguments.length > 0 ? arguments[0] : void 0),
          e = function(n) {
            this === H && e.call(G, n), i(this, L) && i(this[L], t) && (this[L][t] = !1), Y(this, t, P(1, n))
          };
        return a && q && Y(H, t, {
          configurable: !0,
          set: e
        }), $(t)
      })[R], "toString", (function() {
        return this._k
      })), M.f = Q, A.f = X, n(57203).f = w.f = tt, n(9520).f = J, T.f = et, a && !n(41380) && o(H, "propertyIsEnumerable", J, !0), d.f = function(t) {
        return $(f(t))
      }), s(s.G + s.W + s.F * !W, {
        Symbol: F
      });
      for (var nt = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), rt = 0; nt.length > rt;) f(nt[rt++]);
      for (var it = k(f.store), at = 0; it.length > at;) m(it[at++]);
      s(s.S + s.F * !W, "Symbol", {
        for: function(t) {
          return i(j, t += "") ? j[t] : j[t] = F(t)
        },
        keyFor: function(t) {
          if (!K(t)) throw TypeError(t + " is not a symbol!");
          for (var e in j)
            if (j[e] === t) return e
        },
        useSetter: function() {
          q = !0
        },
        useSimple: function() {
          q = !1
        }
      }), s(s.S + s.F * !W, "Object", {
        create: function(t, e) {
          return void 0 === e ? C(t) : Z(C(t), e)
        },
        defineProperty: X,
        defineProperties: Z,
        getOwnPropertyDescriptor: Q,
        getOwnPropertyNames: tt,
        getOwnPropertySymbols: et
      });
      var st = u((function() {
        T.f(1)
      }));
      s(s.S + s.F * st, "Object", {
        getOwnPropertySymbols: function(t) {
          return T.f(x(t))
        }
      }), O && s(s.S + s.F * (!W || u((function() {
        var t = F();
        return "[null]" != V([t]) || "{}" != V({
          a: t
        }) || "{}" != V(Object(t))
      }))), "JSON", {
        stringify: function(t) {
          for (var e, n, r = [t], i = 1; arguments.length > i;) r.push(arguments[i++]);
          if (n = e = r[1], (b(e) || void 0 !== t) && !K(t)) return g(e) || (e = function(t, e) {
            if ("function" == typeof n && (e = n.call(this, t, e)), !K(e)) return e
          }), r[1] = e, V.apply(O, r)
        }
      }), F[R][B] || n(11480)(F[R], B, F[R].valueOf), c(F, "Symbol"), c(Math, "Math", !0), c(r.JSON, "JSON", !0)
    },
    71284: (t, e, n) => {
      n(66152)("asyncIterator")
    },
    93696: (t, e, n) => {
      n(66152)("observable")
    },
    63624: (t, e, n) => {
      n(2084);
      for (var r = n(56384), i = n(11480), a = n(71148), s = n(42516)("toStringTag"), o = "CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","), l = 0; l < o.length; l++) {
        var u = o[l],
          h = r[u],
          c = h && h.prototype;
        c && !c[s] && i(c, s, u), a[u] = a.Array
      }
    },
    89772: (t, e) => {
      var n;
      ! function() {
        "use strict";
        var r = {}.hasOwnProperty;

        function i() {
          for (var t = "", e = 0; e < arguments.length; e++) {
            var n = arguments[e];
            n && (t = s(t, a(n)))
          }
          return t
        }

        function a(t) {
          if ("string" == typeof t || "number" == typeof t) return t;
          if ("object" != typeof t) return "";
          if (Array.isArray(t)) return i.apply(null, t);
          if (t.toString !== Object.prototype.toString && !t.toString.toString().includes("[native code]")) return t.toString();
          var e = "";
          for (var n in t) r.call(t, n) && t[n] && (e = s(e, n));
          return e
        }

        function s(t, e) {
          return e ? t ? t + " " + e : t + e : t
        }
        t.exports ? (i.default = i, t.exports = i) : void 0 === (n = function() {
          return i
        }.apply(e, [])) || (t.exports = n)
      }()
    },
    62504: (t, e, n) => {
      "use strict";
      n.d(e, {
        c: () => i
      });
      var r = n(53952);

      function i(t, e, n) {
        return (e = (0, r.c)(e)) in t ? Object.defineProperty(t, e, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : t[e] = n, t
      }
    },
    82795: (t, e, n) => {
      "use strict";

      function r() {
        return r = Object.assign ? Object.assign.bind() : function(t) {
          for (var e = 1; e < arguments.length; e++) {
            var n = arguments[e];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
          }
          return t
        }, r.apply(this, arguments)
      }
      n.d(e, {
        c: () => r
      })
    },
    31632: (t, e, n) => {
      "use strict";

      function r(t, e) {
        if (null == t) return {};
        var n, r, i = {},
          a = Object.keys(t);
        for (r = 0; r < a.length; r++) n = a[r], e.indexOf(n) >= 0 || (i[n] = t[n]);
        return i
      }
      n.d(e, {
        c: () => r
      })
    },
    74848: (t, e, n) => {
      "use strict";

      function r(t, e) {
        return r = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
          return t.__proto__ = e, t
        }, r(t, e)
      }
      n.d(e, {
        c: () => r
      })
    },
    53952: (t, e, n) => {
      "use strict";
      n.d(e, {
        c: () => i
      });
      var r = n(28792);

      function i(t) {
        var e = function(t, e) {
          if ("object" !== (0, r.c)(t) || null === t) return t;
          var n = t[Symbol.toPrimitive];
          if (void 0 !== n) {
            var i = n.call(t, "string");
            if ("object" !== (0, r.c)(i)) return i;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(t)
        }(t);
        return "symbol" === (0, r.c)(e) ? e : String(e)
      }
    },
    28792: (t, e, n) => {
      "use strict";

      function r(t) {
        return r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
          return typeof t
        } : function(t) {
          return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }, r(t)
      }
      n.d(e, {
        c: () => r
      })
    },
    93428: (t, e, n) => {
      "use strict";
      n.d(e, {
        c: () => Pt
      });
      var r = n(97064),
        i = n(99880);
      var a = n(8600),
        s = n(39860),
        o = n(3904);
      const l = t => t * t,
        u = (0, o._)(l),
        h = (0, s.Y)(l);
      var c = n(69032),
        p = n(85584),
        f = n(6764);

      function d(t, e, n) {
        return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? t + 6 * (e - t) * n : n < .5 ? e : n < 2 / 3 ? t + (e - t) * (2 / 3 - n) * 6 : t
      }
      var m = n(44776),
        v = n(70588),
        g = n(30440);
      const y = (t, e, n) => {
          const r = t * t;
          return Math.sqrt(Math.max(0, n * (e * e - r) + r))
        },
        b = [m.c, v.M, g.u];

      function x(t) {
        const e = (n = t, b.find((t => t.test(n))));
        var n;
        (0, r.O)(Boolean(e), `'${t}' is not an animatable color. Use the equivalent color code instead.`);
        let i = e.parse(t);
        return e === g.u && (i = function({
          hue: t,
          saturation: e,
          lightness: n,
          alpha: r
        }) {
          t /= 360, n /= 100;
          let i = 0,
            a = 0,
            s = 0;
          if (e /= 100) {
            const r = n < .5 ? n * (1 + e) : n + e - n * e,
              o = 2 * n - r;
            i = d(o, r, t + 1 / 3), a = d(o, r, t), s = d(o, r, t - 1 / 3)
          } else i = a = s = n;
          return {
            red: Math.round(255 * i),
            green: Math.round(255 * a),
            blue: Math.round(255 * s),
            alpha: r
          }
        }(i)), i
      }
      const S = (t, e) => {
        const n = x(t),
          r = x(e),
          i = {
            ...n
          };
        return t => (i.red = y(n.red, r.red, t), i.green = y(n.green, r.green, t), i.blue = y(n.blue, r.blue, t), i.alpha = (0, f.C)(n.alpha, r.alpha, t), v.M.transform(i))
      };
      var E = n(51672),
        P = n(67700);

      function C(t, e) {
        return "number" == typeof t ? n => (0, f.C)(t, e, n) : c.I.test(t) ? S(t, e) : T(t, e)
      }
      const w = (t, e) => {
          const n = [...t],
            r = n.length,
            i = t.map(((t, n) => C(t, e[n])));
          return t => {
            for (let e = 0; e < r; e++) n[e] = i[e](t);
            return n
          }
        },
        M = (t, e) => {
          const n = {
              ...t,
              ...e
            },
            r = {};
          for (const i in n) void 0 !== t[i] && void 0 !== e[i] && (r[i] = C(t[i], e[i]));
          return t => {
            for (const e in r) n[e] = r[e](t);
            return n
          }
        },
        T = (t, e) => {
          const n = P.c.createTransformer(e),
            i = (0, P.Y)(t),
            a = (0, P.Y)(e);
          return i.numColors === a.numColors && i.numNumbers >= a.numNumbers ? (0, E.W)(w(i.values, a.values), n) : ((0, r.s)(!0, `Complex values '${t}' and '${e}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`), n => `${n>0?e:t}`)
        };
      var A = n(67368);
      const k = (t, e) => n => (0, f.C)(t, e, n);

      function _(t, e, {
        clamp: n = !0,
        ease: i,
        mixer: a
      } = {}) {
        const s = t.length;
        (0, r.O)(s === e.length, "Both input and output ranges must be the same length"), (0, r.O)(!i || !Array.isArray(i) || i.length === s - 1, "Array of easing functions must be of length `input.length - 1`, as it applies to the transitions **between** the defined values."), t[0] > t[s - 1] && (t = [...t].reverse(), e = [...e].reverse());
        const o = function(t, e, n) {
            const r = [],
              i = n || ("number" == typeof(a = t[0]) ? k : "string" == typeof a ? c.I.test(a) ? S : T : Array.isArray(a) ? w : "object" == typeof a ? M : k);
            var a;
            const s = t.length - 1;
            for (let n = 0; n < s; n++) {
              let a = i(t[n], t[n + 1]);
              if (e) {
                const t = Array.isArray(e) ? e[n] : e;
                a = (0, E.W)(t, a)
              }
              r.push(a)
            }
            return r
          }(e, i, a),
          l = o.length,
          u = e => {
            let n = 0;
            if (l > 1)
              for (; n < t.length - 2 && !(e < t[n + 1]); n++);
            const r = (0, A.o)(t[n], t[n + 1], e);
            return o[n](r)
          };
        return n ? e => u((0, p.q)(t[0], t[s - 1], e)) : u
      }
      var D = n(97768);
      const I = (t, e, n) => (((1 - 3 * n + 3 * e) * t + (3 * n - 6 * e)) * t + 3 * e) * t;

      function F(t, e, n, r) {
        if (t === e && n === r) return D.K;
        return i => 0 === i || 1 === i ? i : I(function(t, e, n, r, i) {
          let a, s, o = 0;
          do {
            s = e + (n - e) / 2, a = I(s, r, i) - t, a > 0 ? n = s : e = s
          } while (Math.abs(a) > 1e-7 && ++o < 12);
          return s
        }(i, 0, 1, t, n), e, r)
      }
      var O = n(25632);
      const V = F(.33, 1.53, .69, .99),
        R = (0, o._)(V),
        L = (0, s.Y)(R),
        B = {
          linear: D.K,
          easeIn: l,
          easeInOut: h,
          easeOut: u,
          circIn: O.wJ,
          circInOut: O.i6,
          circOut: O.Q7,
          backIn: R,
          backInOut: L,
          backOut: V,
          anticipate: t => (t *= 2) < 1 ? .5 * R(t) : .5 * (2 - Math.pow(2, -10 * (t - 1)))
        },
        N = t => {
          if (Array.isArray(t)) {
            (0, r.O)(4 === t.length, "Cubic bezier arrays must contain four numerical values.");
            const [e, n, i, a] = t;
            return F(e, n, i, a)
          }
          return "string" == typeof t ? ((0, r.O)(void 0 !== B[t], `Invalid easing type '${t}'`), B[t]) : t
        };

      function j({
        keyframes: t,
        ease: e = h,
        times: n,
        duration: r = 300
      }) {
        t = [...t];
        const i = j[0],
          a = (t => Array.isArray(t) && "number" != typeof t[0])(e) ? e.map(N) : N(e),
          s = {
            done: !1,
            value: i
          },
          o = function(t, e) {
            return t.map((t => t * e))
          }(n && n.length === j.length ? n : function(t) {
            const e = t.length;
            return t.map(((t, n) => 0 !== n ? n / (e - 1) : 0))
          }(t), r);

        function l() {
          return _(o, t, {
            ease: Array.isArray(a) ? a : (e = t, n = a, e.map((() => n || h)).splice(0, e.length - 1))
          });
          var e, n
        }
        let u = l();
        return {
          next: t => (s.value = u(t), s.done = t >= r, s),
          flipTarget: () => {
            t.reverse(), u = l()
          }
        }
      }
      const z = .001,
        G = .01,
        H = 10,
        W = .05,
        U = 1;
      const q = 12;

      function Y(t, e) {
        return t * Math.sqrt(1 - e * e)
      }
      var $ = n(72216);
      const K = ["duration", "bounce"],
        X = ["stiffness", "damping", "mass"];

      function Z(t, e) {
        return e.some((e => void 0 !== t[e]))
      }

      function J({
        keyframes: t,
        restSpeed: e = 2,
        restDelta: n = .01,
        ...i
      }) {
        let a = t[0],
          s = t[t.length - 1];
        const o = {
            done: !1,
            value: a
          },
          {
            stiffness: l,
            damping: u,
            mass: h,
            velocity: c,
            duration: f,
            isResolvedFromDuration: d
          } = function(t) {
            let e = {
              velocity: 0,
              stiffness: 100,
              damping: 10,
              mass: 1,
              isResolvedFromDuration: !1,
              ...t
            };
            if (!Z(t, X) && Z(t, K)) {
              const n = function({
                duration: t = 800,
                bounce: e = .25,
                velocity: n = 0,
                mass: i = 1
              }) {
                let a, s;
                (0, r.s)(t <= 1e3 * H, "Spring duration must be 10 seconds or less");
                let o = 1 - e;
                o = (0, p.q)(W, U, o), t = (0, p.q)(G, H, t / 1e3), o < 1 ? (a = e => {
                  const r = e * o,
                    i = r * t,
                    a = r - n,
                    s = Y(e, o),
                    l = Math.exp(-i);
                  return z - a / s * l
                }, s = e => {
                  const r = e * o * t,
                    i = r * n + n,
                    s = Math.pow(o, 2) * Math.pow(e, 2) * t,
                    l = Math.exp(-r),
                    u = Y(Math.pow(e, 2), o);
                  return (-a(e) + z > 0 ? -1 : 1) * ((i - s) * l) / u
                }) : (a = e => Math.exp(-e * t) * ((e - n) * t + 1) - z, s = e => Math.exp(-e * t) * (t * t * (n - e)));
                const l = function(t, e, n) {
                  let r = n;
                  for (let n = 1; n < q; n++) r -= t(r) / e(r);
                  return r
                }(a, s, 5 / t);
                if (t *= 1e3, isNaN(l)) return {
                  stiffness: 100,
                  damping: 10,
                  duration: t
                }; {
                  const e = Math.pow(l, 2) * i;
                  return {
                    stiffness: e,
                    damping: 2 * o * Math.sqrt(i * e),
                    duration: t
                  }
                }
              }(t);
              e = {
                ...e,
                ...n,
                velocity: 0,
                mass: 1
              }, e.isResolvedFromDuration = !0
            }
            return e
          }(i);
        let m = Q,
          v = c ? -c / 1e3 : 0;
        const g = u / (2 * Math.sqrt(l * h));

        function y() {
          const t = s - a,
            e = Math.sqrt(l / h) / 1e3;
          if (void 0 === n && (n = Math.min(Math.abs(s - a) / 100, .4)), g < 1) {
            const n = Y(e, g);
            m = r => {
              const i = Math.exp(-g * e * r);
              return s - i * ((v + g * e * t) / n * Math.sin(n * r) + t * Math.cos(n * r))
            }
          } else if (1 === g) m = n => s - Math.exp(-e * n) * (t + (v + e * t) * n);
          else {
            const n = e * Math.sqrt(g * g - 1);
            m = r => {
              const i = Math.exp(-g * e * r),
                a = Math.min(n * r, 300);
              return s - i * ((v + g * e * t) * Math.sinh(a) + n * t * Math.cosh(a)) / n
            }
          }
        }
        return y(), {
          next: t => {
            const r = m(t);
            if (d) o.done = t >= f;
            else {
              let i = v;
              if (0 !== t)
                if (g < 1) {
                  const e = Math.max(0, t - 5);
                  i = (0, $.G)(r - m(e), t - e)
                } else i = 0;
              const a = Math.abs(i) <= e,
                l = Math.abs(s - r) <= n;
              o.done = a && l
            }
            return o.value = o.done ? s : r, o
          },
          flipTarget: () => {
            v = -v, [a, s] = [s, a], y()
          }
        }
      }
      J.needsInterpolation = (t, e) => "string" == typeof t || "string" == typeof e;
      const Q = t => 0,
        tt = {
          decay: function({
            keyframes: t = [0],
            velocity: e = 0,
            power: n = .8,
            timeConstant: r = 350,
            restDelta: i = .5,
            modifyTarget: a
          }) {
            const s = t[0],
              o = {
                done: !1,
                value: s
              };
            let l = n * e;
            const u = s + l,
              h = void 0 === a ? u : a(u);
            return h !== u && (l = h - s), {
              next: t => {
                const e = -l * Math.exp(-t / r);
                return o.done = !(e > i || e < -i), o.value = o.done ? h : h + e, o
              },
              flipTarget: () => {}
            }
          },
          keyframes: j,
          tween: j,
          spring: J
        };

      function et(t, e, n = 0) {
        return t - e - n
      }
      const nt = t => {
        const e = ({
          delta: e
        }) => t(e);
        return {
          start: () => a.du.update(e, !0),
          stop: () => a.Qz.update(e)
        }
      };

      function rt({
        duration: t,
        driver: e = nt,
        elapsed: n = 0,
        repeat: r = 0,
        repeatType: i = "loop",
        repeatDelay: a = 0,
        keyframes: s,
        autoplay: o = !0,
        onPlay: l,
        onStop: u,
        onComplete: h,
        onRepeat: c,
        onUpdate: p,
        type: f = "keyframes",
        ...d
      }) {
        var m, v;
        let g, y, b, x = 0,
          S = t,
          E = !1,
          P = !0;
        const C = tt[s.length > 2 ? "keyframes" : f],
          w = s[0],
          M = s[s.length - 1];
        (null === (v = (m = C).needsInterpolation) || void 0 === v ? void 0 : v.call(m, w, M)) && (b = _([0, 100], [w, M], {
          clamp: !1
        }), s = [0, 100]);
        const T = C({
          ...d,
          duration: t,
          keyframes: s
        });
        return o && (l && l(), g = e((function(t) {
          if (P || (t = -t), n += t, !E) {
            const t = T.next(Math.max(0, n));
            y = t.value, b && (y = b(y)), E = P ? t.done : n <= 0
          }
          p && p(y), E && (0 === x && (S = void 0 !== S ? S : n), x < r ? function(t, e, n, r) {
            return r ? t >= e + n : t <= -n
          }(n, S, a, P) && (x++, "reverse" === i ? (P = x % 2 == 0, n = function(t, e = 0, n = 0, r = !0) {
            return r ? et(e + -t, e, n) : e - (t - e) + n
          }(n, S, a, P)) : (n = et(n, S, a), "mirror" === i && T.flipTarget()), E = !1, c && c()) : (g.stop(), h && h()))
        })), g.start()), {
          stop: () => {
            u && u(), g.stop()
          },
          sample: t => T.next(Math.max(0, t))
        }
      }
      const it = ([t, e, n, r]) => `cubic-bezier(${t}, ${e}, ${n}, ${r})`,
        at = {
          linear: "linear",
          ease: "ease",
          easeIn: "ease-in",
          easeOut: "ease-out",
          easeInOut: "ease-in-out",
          circIn: it([0, .65, .55, 1]),
          circOut: it([.55, 0, 1, .45]),
          backIn: it([.31, .01, .66, -.59]),
          backOut: it([.33, 1.53, .69, .99])
        };

      function st(t) {
        if (t) return Array.isArray(t) ? it(t) : at[t]
      }
      var ot = n(512);

      function lt({
        keyframes: t,
        elapsed: e,
        onUpdate: n,
        onComplete: r
      }) {
        const i = () => (n && n(t[t.length - 1]), r && r(), () => {});
        return e ? (0, ot.o)(i, -e) : i()
      }
      var ut = n(50900);
      const ht = () => ({
          type: "spring",
          stiffness: 500,
          damping: 25,
          restSpeed: 10
        }),
        ct = t => ({
          type: "spring",
          stiffness: 550,
          damping: 0 === t ? 2 * Math.sqrt(550) : 30,
          restSpeed: 10
        }),
        pt = () => ({
          type: "keyframes",
          ease: "linear",
          duration: .3
        }),
        ft = {
          type: "keyframes",
          duration: .8
        },
        dt = {
          x: ht,
          y: ht,
          z: ht,
          rotate: ht,
          rotateX: ht,
          rotateY: ht,
          rotateZ: ht,
          scaleX: ct,
          scaleY: ct,
          scale: ct,
          opacity: pt,
          backgroundColor: pt,
          color: pt,
          default: ct
        },
        mt = (t, {
          keyframes: e
        }) => e.length > 2 ? ft : (dt[t] || dt.default)(e[1]),
        vt = (t, e) => !("zIndex" === t || "number" != typeof e && !Array.isArray(e) && ("string" != typeof e || !P.c.test(e) || e.startsWith("url(")));
      var gt = n(41080),
        yt = n(60224);
      const bt = {
          waapi: () => Object.hasOwnProperty.call(Element.prototype, "animate")
        },
        xt = {},
        St = {};
      for (const t in bt) St[t] = () => (void 0 === xt[t] && (xt[t] = bt[t]()), xt[t]);
      const Et = new Set(["opacity"]),
        Pt = (t, e, n, s = {}) => o => {
          const l = (0, yt.qC)(s, t) || {},
            u = l.delay || s.delay || 0;
          let {
            elapsed: h = 0
          } = s;
          h -= (0, i.c)(u);
          const c = function(t, e, n, r) {
              const i = vt(e, n);
              let a = void 0 !== r.from ? r.from : t.get();
              return "none" === a && i && "string" == typeof n ? a = (0, gt.S)(e, n) : (0, yt.a4)(a) && "string" == typeof n ? a = (0, yt.sn)(n) : !Array.isArray(n) && (0, yt.a4)(n) && "string" == typeof a && (n = (0, yt.sn)(a)), Array.isArray(n) ? (null === n[0] && (n[0] = a), n) : [a, n]
            }(e, t, n, l),
            p = c[0],
            f = c[c.length - 1],
            d = vt(t, p),
            m = vt(t, f);
          (0, r.s)(d === m, `You are trying to animate ${t} from "${p}" to "${f}". ${p} is not an animatable value - to enable this animation set ${p} to a value animatable to ${f} via the \`style\` property.`);
          let v = {
            keyframes: c,
            velocity: e.getVelocity(),
            ...l,
            elapsed: h,
            onUpdate: t => {
              e.set(t), l.onUpdate && l.onUpdate(t)
            },
            onComplete: () => {
              o(), l.onComplete && l.onComplete()
            }
          };
          if (!d || !m || !1 === l.type) return lt(v);
          if ("inertia" === l.type) {
            const t = function({
              keyframes: t,
              velocity: e = 0,
              min: n,
              max: r,
              power: i = .8,
              timeConstant: a = 750,
              bounceStiffness: s = 500,
              bounceDamping: o = 10,
              restDelta: l = 1,
              modifyTarget: u,
              driver: h,
              onUpdate: c,
              onComplete: p,
              onStop: f
            }) {
              const d = t[0];
              let m;

              function v(t) {
                return void 0 !== n && t < n || void 0 !== r && t > r
              }

              function g(t) {
                return void 0 === n ? r : void 0 === r || Math.abs(n - t) < Math.abs(r - t) ? n : r
              }

              function y(t) {
                null == m || m.stop(), m = rt({
                  keyframes: [0, 1],
                  velocity: 0,
                  ...t,
                  driver: h,
                  onUpdate: e => {
                    var n;
                    null == c || c(e), null === (n = t.onUpdate) || void 0 === n || n.call(t, e)
                  },
                  onComplete: p,
                  onStop: f
                })
              }

              function b(t) {
                y({
                  type: "spring",
                  stiffness: s,
                  damping: o,
                  restDelta: l,
                  ...t
                })
              }
              if (v(d)) b({
                velocity: e,
                keyframes: [d, g(d)]
              });
              else {
                let t = i * e + d;
                void 0 !== u && (t = u(t));
                const r = g(t),
                  s = r === n ? -1 : 1;
                let o, h;
                const c = t => {
                  o = h, h = t, e = (0, $.G)(t - o, ut.frameData.delta), (1 === s && t > r || -1 === s && t < r) && b({
                    keyframes: [t, r],
                    velocity: e
                  })
                };
                y({
                  type: "decay",
                  keyframes: [d, 0],
                  velocity: e,
                  timeConstant: a,
                  power: i,
                  restDelta: l,
                  modifyTarget: u,
                  onUpdate: v(t) ? c : void 0
                })
              }
              return {
                stop: () => null == m ? void 0 : m.stop()
              }
            }(v);
            return () => t.stop()
          }(0, yt.ii)(l) || (v = {
            ...v,
            ...mt(t, v)
          }), v.duration && (v.duration = (0, i.c)(v.duration)), v.repeatDelay && (v.repeatDelay = (0, i.c)(v.repeatDelay));
          const g = e.owner,
            y = g && g.current;
          if (St.waapi() && Et.has(t) && !v.repeatDelay && "mirror" !== v.repeatType && 0 !== v.damping && g && y instanceof HTMLElement && !g.getProps().onUpdate) return function(t, e, {
            onUpdate: n,
            onComplete: r,
            ...i
          }) {
            let {
              keyframes: s,
              duration: o = .3,
              elapsed: l = 0,
              ease: u
            } = i;
            if ("spring" === i.type || !(!(h = i.ease) || Array.isArray(h) || "string" == typeof h && at[h])) {
              const t = rt(i);
              let e = {
                done: !1,
                value: s[0]
              };
              const n = [];
              let r = 0;
              for (; !e.done;) e = t.sample(r), n.push(e.value), r += 10;
              s = n, o = r - 10, u = "linear"
            }
            var h;
            const c = function(t, e, n, {
              delay: r = 0,
              duration: i,
              repeat: a = 0,
              repeatType: s = "loop",
              ease: o,
              times: l
            } = {}) {
              return t.animate({
                [e]: n,
                offset: l
              }, {
                delay: r,
                duration: i,
                easing: st(o),
                fill: "both",
                iterations: a + 1,
                direction: "reverse" === s ? "alternate" : "normal"
              })
            }(t.owner.current, e, s, {
              ...i,
              delay: -l,
              duration: o,
              ease: u
            });
            return c.onfinish = () => {
              t.set(s[s.length - 1]), r && r()
            }, () => {
              const {
                currentTime: e
              } = c;
              if (e) {
                const n = rt(i);
                t.setWithVelocity(n.sample(e - 10).value, n.sample(e).value, 10)
              }
              a.du.update((() => c.cancel()))
            }
          }(e, t, v); {
            const t = rt(v);
            return () => t.stop()
          }
        }
    },
    17216: (t, e, n) => {
      "use strict";

      function r(t) {
        return "object" == typeof t && "function" == typeof t.start
      }
      n.d(e, {
        M: () => r
      })
    },
    11408: (t, e, n) => {
      "use strict";
      n.d(e, {
        U: () => r
      });
      const r = t => Array.isArray(t)
    },
    60224: (t, e, n) => {
      "use strict";
      n.d(e, {
        a4: () => a,
        ii: () => i,
        qC: () => o,
        sn: () => s
      });
      var r = n(41080);

      function i({
        when: t,
        delay: e,
        delayChildren: n,
        staggerChildren: r,
        staggerDirection: i,
        repeat: a,
        repeatType: s,
        repeatDelay: o,
        from: l,
        ...u
      }) {
        return !!Object.keys(u).length
      }

      function a(t) {
        return 0 === t || "string" == typeof t && 0 === parseFloat(t) && -1 === t.indexOf(" ")
      }

      function s(t) {
        return "number" == typeof t ? 0 : (0, r.S)("", t)
      }

      function o(t, e) {
        return t[e] || t.default || t
      }
    },
    72012: (t, e, n) => {
      "use strict";
      n.d(e, {
        OK: () => a
      });
      var r = n(51664),
        i = n(92216);

      function a() {
        const t = (0, r.useContext)(i.i);
        if (null === t) return [!0, null];
        const {
          isPresent: e,
          onExitComplete: n,
          register: a
        } = t, s = (0, r.useId)();
        return (0, r.useEffect)((() => a(s)), []), !e && n ? [!1, () => n && n(s)] : [!0]
      }
    },
    20688: (t, e, n) => {
      "use strict";
      n.d(e, {
        O: () => s
      });
      var r = n(51664),
        i = n(6628),
        a = n(56612);

      function s({
        children: t,
        features: e,
        strict: n = !1
      }) {
        const [, s] = (0, r.useState)(!o(e)), l = (0, r.useRef)(void 0);
        if (!o(e)) {
          const {
            renderer: t,
            ...n
          } = e;
          l.current = t, (0, a.M)(n)
        }
        return (0, r.useEffect)((() => {
          o(e) && e().then((({
            renderer: t,
            ...e
          }) => {
            (0, a.M)(e), l.current = t, s(!0)
          }))
        }), []), r.createElement(i.Y.Provider, {
          value: {
            renderer: l.current,
            strict: n
          }
        }, t)
      }

      function o(t) {
        return "function" == typeof t
      }
    },
    60300: (t, e, n) => {
      "use strict";
      n.d(e, {
        m: () => r
      });
      const r = (0, n(51664).createContext)({})
    },
    6628: (t, e, n) => {
      "use strict";
      n.d(e, {
        Y: () => r
      });
      const r = (0, n(51664).createContext)({
        strict: !1
      })
    },
    54528: (t, e, n) => {
      "use strict";
      n.d(e, {
        K: () => r
      });
      const r = (0, n(51664).createContext)({
        transformPagePoint: t => t,
        isStatic: !1,
        reducedMotion: "never"
      })
    },
    68312: (t, e, n) => {
      "use strict";
      n.d(e, {
        c: () => a,
        i: () => i
      });
      var r = n(51664);
      const i = (0, r.createContext)({});

      function a() {
        return (0, r.useContext)(i).visualElement
      }
    },
    92216: (t, e, n) => {
      "use strict";
      n.d(e, {
        i: () => r
      });
      const r = (0, n(51664).createContext)(null)
    },
    64356: (t, e, n) => {
      "use strict";
      n.d(e, {
        O: () => r
      });
      const r = (0, n(51664).createContext)({})
    },
    25632: (t, e, n) => {
      "use strict";
      n.d(e, {
        Q7: () => s,
        i6: () => o,
        wJ: () => a
      });
      var r = n(39860),
        i = n(3904);
      const a = t => 1 - Math.sin(Math.acos(t)),
        s = (0, i._)(a),
        o = (0, r.Y)(s)
    },
    39860: (t, e, n) => {
      "use strict";
      n.d(e, {
        Y: () => r
      });
      const r = t => e => e <= .5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2
    },
    3904: (t, e, n) => {
      "use strict";
      n.d(e, {
        _: () => r
      });
      const r = t => e => 1 - t(1 - e)
    },
    97736: (t, e, n) => {
      "use strict";
      n.d(e, {
        M: () => l,
        u: () => o
      });
      var r = n(40756);
      const i = {
        pageX: 0,
        pageY: 0
      };

      function a(t, e = "page") {
        const n = t.touches[0] || t.changedTouches[0] || i;
        return {
          x: n[e + "X"],
          y: n[e + "Y"]
        }
      }

      function s(t, e = "page") {
        return {
          x: t[e + "X"],
          y: t[e + "Y"]
        }
      }

      function o(t, e = "page") {
        return {
          point: (0, r.e)(t) ? a(t, e) : s(t, e)
        }
      }
      const l = (t, e = !1) => {
        const n = e => t(e, o(e));
        return e ? (r = n, t => {
          const e = t instanceof MouseEvent;
          (!e || e && 0 === t.button) && r(t)
        }) : n;
        var r
      }
    },
    3428: (t, e, n) => {
      "use strict";
      n.d(e, {
        s: () => a,
        y: () => i
      });
      var r = n(51664);

      function i(t, e, n, r = {
        passive: !0
      }) {
        return t.addEventListener(e, n, r), () => t.removeEventListener(e, n)
      }

      function a(t, e, n, a) {
        (0, r.useEffect)((() => {
          const r = t.current;
          if (n && r) return i(r, e, n, a)
        }), [t, e, n, a])
      }
    },
    38496: (t, e, n) => {
      "use strict";
      n.d(e, {
        S: () => p,
        W: () => f
      });
      var r = n(3428),
        i = n(97736),
        a = n(70520);
      const s = () => a.u && null === window.onpointerdown,
        o = () => a.u && null === window.ontouchstart,
        l = () => a.u && null === window.onmousedown,
        u = {
          pointerdown: "mousedown",
          pointermove: "mousemove",
          pointerup: "mouseup",
          pointercancel: "mousecancel",
          pointerover: "mouseover",
          pointerout: "mouseout",
          pointerenter: "mouseenter",
          pointerleave: "mouseleave"
        },
        h = {
          pointerdown: "touchstart",
          pointermove: "touchmove",
          pointerup: "touchend",
          pointercancel: "touchcancel"
        };

      function c(t) {
        return s() ? t : o() ? h[t] : l() ? u[t] : t
      }

      function p(t, e, n, a) {
        return (0, r.y)(t, c(e), (0, i.M)(n, "pointerdown" === e), a)
      }

      function f(t, e, n, a) {
        return (0, r.s)(t, c(e), n && (0, i.M)(n, "pointerdown" === e), a)
      }
    },
    50900: (t, e, n) => {
      "use strict";
      n.d(e, {
        frameData: () => r
      });
      const r = {
        delta: 0,
        timestamp: 0
      }
    },
    8600: (t, e, n) => {
      "use strict";
      n.d(e, {
        Qz: () => f,
        Wi: () => d,
        du: () => p
      });
      const r = 1 / 60 * 1e3,
        i = "undefined" != typeof performance ? () => performance.now() : () => Date.now(),
        a = "undefined" != typeof window ? t => window.requestAnimationFrame(t) : t => setTimeout((() => t(i())), r);
      var s = n(50900);
      let o = !0,
        l = !1,
        u = !1;
      const h = ["read", "update", "preRender", "render", "postRender"],
        c = h.reduce(((t, e) => (t[e] = function(t) {
          let e = [],
            n = [],
            r = 0,
            i = !1,
            a = !1;
          const s = new WeakSet,
            o = {
              schedule: (t, a = !1, o = !1) => {
                const l = o && i,
                  u = l ? e : n;
                return a && s.add(t), -1 === u.indexOf(t) && (u.push(t), l && i && (r = e.length)), t
              },
              cancel: t => {
                const e = n.indexOf(t); - 1 !== e && n.splice(e, 1), s.delete(t)
              },
              process: l => {
                if (i) a = !0;
                else {
                  if (i = !0, [e, n] = [n, e], n.length = 0, r = e.length, r)
                    for (let n = 0; n < r; n++) {
                      const r = e[n];
                      r(l), s.has(r) && (o.schedule(r), t())
                    }
                  i = !1, a && (a = !1, o.process(l))
                }
              }
            };
          return o
        }((() => l = !0)), t)), {}),
        p = h.reduce(((t, e) => {
          const n = c[e];
          return t[e] = (t, e = !1, r = !1) => (l || g(), n.schedule(t, e, r)), t
        }), {}),
        f = h.reduce(((t, e) => (t[e] = c[e].cancel, t)), {}),
        d = h.reduce(((t, e) => (t[e] = () => c[e].process(s.frameData), t)), {}),
        m = t => c[t].process(s.frameData),
        v = t => {
          l = !1, s.frameData.delta = o ? r : Math.max(Math.min(t - s.frameData.timestamp, 40), 1), s.frameData.timestamp = t, u = !0, h.forEach(m), u = !1, l && (o = !1, a(v))
        },
        g = () => {
          l = !0, o = !0, u || a(v)
        }
    },
    74136: (t, e, n) => {
      "use strict";

      function r(t) {
        let e = null;
        return () => null === e && (e = t, () => {
          e = null
        })
      }
      n.d(e, {
        A1: () => s,
        E5: () => o
      });
      const i = r("dragHorizontal"),
        a = r("dragVertical");

      function s(t) {
        let e = !1;
        if ("y" === t) e = a();
        else if ("x" === t) e = i();
        else {
          const t = i(),
            n = a();
          t && n ? e = () => {
            t(), n()
          } : (t && t(), n && n())
        }
        return e
      }

      function o() {
        const t = s(!0);
        return !t || (t(), !1)
      }
    },
    40756: (t, e, n) => {
      "use strict";

      function r(t) {
        return "undefined" != typeof PointerEvent && t instanceof PointerEvent ? !("mouse" !== t.pointerType) : t instanceof MouseEvent
      }

      function i(t) {
        return !!t.touches
      }
      n.d(e, {
        N: () => r,
        e: () => i
      })
    },
    51376: (t, e, n) => {
      "use strict";
      n.d(e, {
        w: () => h
      });
      var r = n(51664),
        i = n(17216),
        a = n(72012),
        s = n(92216),
        o = n(91892),
        l = n(19856),
        u = n(48188);
      const h = {
        animation: (0, u.E)((({
          visualElement: t,
          animate: e
        }) => {
          t.animationState || (t.animationState = (0, o.Kw)(t)), (0, i.M)(e) && (0, r.useEffect)((() => e.subscribe(t)), [e])
        })),
        exit: (0, u.E)((t => {
          const {
            custom: e,
            visualElement: n
          } = t, [i, o] = (0, a.OK)(), u = (0, r.useContext)(s.i);
          (0, r.useEffect)((() => {
            n.isPresent = i;
            const t = n.animationState && n.animationState.setActive(l.w.Exit, !i, {
              custom: u && u.custom || e
            });
            t && !i && t.then(o)
          }), [i])
        }))
      }
    },
    32709: (t, e, n) => {
      "use strict";
      n.d(e, {
        S: () => i
      });
      const r = t => ({
          isEnabled: e => t.some((t => !!e[t]))
        }),
        i = {
          measureLayout: r(["layout", "layoutId", "drag"]),
          animation: r(["animate", "exit", "variants", "whileHover", "whileTap", "whileFocus", "whileDrag", "whileInView"]),
          exit: r(["exit"]),
          drag: r(["drag", "dragControls"]),
          focus: r(["whileFocus"]),
          hover: r(["whileHover", "onHoverStart", "onHoverEnd"]),
          tap: r(["whileTap", "onTap", "onTapStart", "onTapCancel"]),
          pan: r(["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"]),
          inView: r(["whileInView", "onViewportEnter", "onViewportLeave"])
        }
    },
    94624: (t, e, n) => {
      "use strict";
      n.d(e, {
        g: () => P
      });
      var r = n(19856),
        i = n(3428),
        a = n(40756),
        s = n(38496),
        o = n(74136);

      function l(t, e, n) {
        return (i, s) => {
          (0, a.N)(i) && !(0, o.E5)() && (t.animationState && t.animationState.setActive(r.w.Hover, e), n && n(i, s))
        }
      }
      var u = n(51664);
      const h = (t, e) => !!e && (t === e || h(t, e.parentElement));
      var c = n(76344),
        p = n(51672),
        f = n(78243);
      const d = new Set,
        m = new WeakMap,
        v = new WeakMap,
        g = t => {
          const e = m.get(t.target);
          e && e(t)
        },
        y = t => {
          t.forEach(g)
        };
      const b = {
        some: 0,
        all: 1
      };

      function x(t, e, n, {
        root: i,
        margin: a,
        amount: s = "some",
        once: o
      }) {
        (0, u.useEffect)((() => {
          if (!t || !n.current) return;
          const l = {
            root: null == i ? void 0 : i.current,
            rootMargin: a,
            threshold: "number" == typeof s ? s : b[s]
          };
          return function(t, e, n) {
            const r = function({
              root: t,
              ...e
            }) {
              const n = t || document;
              v.has(n) || v.set(n, {});
              const r = v.get(n),
                i = JSON.stringify(e);
              return r[i] || (r[i] = new IntersectionObserver(y, {
                root: t,
                ...e
              })), r[i]
            }(e);
            return m.set(t, n), r.observe(t), () => {
              m.delete(t), r.unobserve(t)
            }
          }(n.current, l, (t => {
            const {
              isIntersecting: i
            } = t;
            if (e.isInView === i) return;
            if (e.isInView = i, o && !i && e.hasEnteredView) return;
            i && (e.hasEnteredView = !0), n.animationState && n.animationState.setActive(r.w.InView, i);
            const a = n.getProps(),
              s = i ? a.onViewportEnter : a.onViewportLeave;
            s && s(t)
          }))
        }), [t, i, a, s])
      }

      function S(t, e, n, {
        fallback: i = !0
      }) {
        (0, u.useEffect)((() => {
          var a;
          t && i && ("production" !== f._ && (a = "IntersectionObserver not available on this device. whileInView animations will trigger on mount.", d.has(a) || (console.warn(a), d.add(a))), requestAnimationFrame((() => {
            e.hasEnteredView = !0;
            const {
              onViewportEnter: t
            } = n.getProps();
            t && t(null), n.animationState && n.animationState.setActive(r.w.InView, !0)
          })))
        }), [t])
      }
      var E = n(48188);
      const P = {
        inView: (0, E.E)((function({
          visualElement: t,
          whileInView: e,
          onViewportEnter: n,
          onViewportLeave: r,
          viewport: i = {}
        }) {
          const a = (0, u.useRef)({
            hasEnteredView: !1,
            isInView: !1
          });
          let s = Boolean(e || n || r);
          i.once && a.current.hasEnteredView && (s = !1), ("undefined" == typeof IntersectionObserver ? S : x)(s, a.current, t, i)
        })),
        tap: (0, E.E)((function({
          onTap: t,
          onTapStart: e,
          onTapCancel: n,
          whileTap: i,
          visualElement: a
        }) {
          const l = t || e || n || i,
            f = (0, u.useRef)(!1),
            d = (0, u.useRef)(null),
            m = {
              passive: !(e || t || n || x)
            };

          function v() {
            d.current && d.current(), d.current = null
          }

          function g() {
            return v(), f.current = !1, a.animationState && a.animationState.setActive(r.w.Tap, !1), !(0, o.E5)()
          }

          function y(e, r) {
            g() && (h(a.current, e.target) ? t && t(e, r) : n && n(e, r))
          }

          function b(t, e) {
            g() && n && n(t, e)
          }

          function x(t, n) {
            v(), f.current || (f.current = !0, d.current = (0, p.W)((0, s.S)(window, "pointerup", y, m), (0, s.S)(window, "pointercancel", b, m)), a.animationState && a.animationState.setActive(r.w.Tap, !0), e && e(t, n))
          }(0, s.W)(a, "pointerdown", l ? x : void 0, m), (0, c.u)(v)
        })),
        focus: (0, E.E)((function({
          whileFocus: t,
          visualElement: e
        }) {
          const {
            animationState: n
          } = e;
          (0, i.s)(e, "focus", t ? () => {
            n && n.setActive(r.w.Focus, !0)
          } : void 0), (0, i.s)(e, "blur", t ? () => {
            n && n.setActive(r.w.Focus, !1)
          } : void 0)
        })),
        hover: (0, E.E)((function({
          onHoverStart: t,
          onHoverEnd: e,
          whileHover: n,
          visualElement: r
        }) {
          (0, s.W)(r, "pointerenter", t || n ? l(r, !0, t) : void 0, {
            passive: !t
          }), (0, s.W)(r, "pointerleave", e || n ? l(r, !1, e) : void 0, {
            passive: !e
          })
        }))
      }
    },
    56612: (t, e, n) => {
      "use strict";
      n.d(e, {
        M: () => i
      });
      var r = n(32709);

      function i(t) {
        for (const e in t) "projectionNodeConstructor" === e ? r.S.projectionNodeConstructor = t[e] : r.S[e].Component = t[e]
      }
    },
    39960: (t, e, n) => {
      "use strict";
      n.d(e, {
        e: () => a
      });
      var r = n(72401),
        i = n(97096);

      function a(t, {
        layout: e,
        layoutId: n
      }) {
        return i._.has(t) || t.startsWith("origin") || (e || void 0 !== n) && (!!r.K[t] || "opacity" === t)
      }
    },
    48188: (t, e, n) => {
      "use strict";
      n.d(e, {
        E: () => r
      });
      const r = t => e => (t(e), null)
    },
    23820: (t, e, n) => {
      "use strict";

      function r({
        top: t,
        left: e,
        right: n,
        bottom: r
      }) {
        return {
          x: {
            min: e,
            max: n
          },
          y: {
            min: t,
            max: r
          }
        }
      }

      function i({
        x: t,
        y: e
      }) {
        return {
          top: e.min,
          right: t.max,
          bottom: e.max,
          left: t.min
        }
      }

      function a(t, e) {
        if (!e) return t;
        const n = e({
            x: t.left,
            y: t.top
          }),
          r = e({
            x: t.right,
            y: t.bottom
          });
        return {
          top: n.y,
          left: n.x,
          bottom: r.y,
          right: r.x
        }
      }
      n.d(e, {
        aC: () => a,
        aM: () => r,
        wl: () => i
      })
    },
    4096: (t, e, n) => {
      "use strict";
      n.d(e, {
        CU: () => l,
        aA: () => m,
        cL: () => a,
        iI: () => u,
        yq: () => c
      });
      var r = n(6764),
        i = n(70272);

      function a(t, e, n) {
        return n + e * (t - n)
      }

      function s(t, e, n, r, i) {
        return void 0 !== i && (t = a(t, i, r)), a(t, n, r) + e
      }

      function o(t, e = 0, n = 1, r, i) {
        t.min = s(t.min, e, n, r, i), t.max = s(t.max, e, n, r, i)
      }

      function l(t, {
        x: e,
        y: n
      }) {
        o(t.x, e.translate, e.scale, e.originPoint), o(t.y, n.translate, n.scale, n.originPoint)
      }

      function u(t, e, n, r = !1) {
        var a, s;
        const o = n.length;
        if (!o) return;
        let u, c;
        e.x = e.y = 1;
        for (let h = 0; h < o; h++) u = n[h], c = u.projectionDelta, "contents" !== (null === (s = null === (a = u.instance) || void 0 === a ? void 0 : a.style) || void 0 === s ? void 0 : s.display) && (r && u.options.layoutScroll && u.scroll && u !== u.root && m(t, {
          x: -u.scroll.offset.x,
          y: -u.scroll.offset.y
        }), c && (e.x *= c.x.scale, e.y *= c.y.scale, l(t, c)), r && (0, i.Ml)(u.latestValues) && m(t, u.latestValues));
        e.x = h(e.x), e.y = h(e.y)
      }

      function h(t) {
        return Number.isInteger(t) || t > 1.0000000000001 || t < .999999999999 ? t : 1
      }

      function c(t, e) {
        t.min = t.min + e, t.max = t.max + e
      }

      function p(t, e, [n, i, a]) {
        const s = void 0 !== e[a] ? e[a] : .5,
          l = (0, r.C)(t.min, t.max, s);
        o(t, e[n], e[i], l, e.scale)
      }
      const f = ["x", "scaleX", "originX"],
        d = ["y", "scaleY", "originY"];

      function m(t, e) {
        p(t.x, e, f), p(t.y, e, d)
      }
    },
    95944: (t, e, n) => {
      "use strict";
      n.d(e, {
        Ww: () => r,
        kZ: () => i
      });
      const r = () => ({
          x: {
            translate: 0,
            scale: 1,
            origin: 0,
            originPoint: 0
          },
          y: {
            translate: 0,
            scale: 1,
            origin: 0,
            originPoint: 0
          }
        }),
        i = () => ({
          x: {
            min: 0,
            max: 0
          },
          y: {
            min: 0,
            max: 0
          }
        })
    },
    44640: (t, e, n) => {
      "use strict";
      n.d(e, {
        C: () => r
      });
      const r = {
        hasAnimatedSinceResize: !0,
        hasEverUpdated: !1
      }
    },
    72401: (t, e, n) => {
      "use strict";
      n.d(e, {
        K: () => r,
        o: () => i
      });
      const r = {};

      function i(t) {
        Object.assign(r, t)
      }
    },
    70272: (t, e, n) => {
      "use strict";

      function r(t) {
        return void 0 === t || 1 === t
      }

      function i({
        scale: t,
        scaleX: e,
        scaleY: n
      }) {
        return !r(t) || !r(e) || !r(n)
      }

      function a(t) {
        return i(t) || s(t) || t.z || t.rotate || t.rotateX || t.rotateY
      }

      function s(t) {
        return o(t.x) || o(t.y)
      }

      function o(t) {
        return t && "0%" !== t
      }
      n.d(e, {
        Ki: () => s,
        Ml: () => a,
        cb: () => i
      })
    },
    88280: (t, e, n) => {
      "use strict";
      n.d(e, {
        G: () => a,
        q: () => s
      });
      var r = n(23820),
        i = n(4096);

      function a(t, e) {
        return (0, r.aM)((0, r.aC)(t.getBoundingClientRect(), e))
      }

      function s(t, e, n) {
        const r = a(t, n),
          {
            scroll: s
          } = e;
        return s && ((0, i.yq)(r.x, s.offset.x), (0, i.yq)(r.y, s.offset.y)), r
      }
    },
    29284: (t, e, n) => {
      "use strict";
      n.d(e, {
        U: () => ot
      });
      var r = n(26896),
        i = n(10192),
        a = n(97096),
        s = n(65324),
        o = n(20132),
        l = n(31992),
        u = n(88280),
        h = n(28480),
        c = n(72996),
        p = n(11408),
        f = n(97064),
        d = n(18308),
        m = n(70520),
        v = n(78976),
        g = n(45852);
      const y = new Set(["width", "height", "top", "left", "right", "bottom", "x", "y"]),
        b = t => y.has(t),
        x = (t, e) => {
          t.set(e, !1), t.set(e)
        },
        S = t => t === v.CQ || t === g.px;
      var E;
      ! function(t) {
        t.width = "width", t.height = "height", t.left = "left", t.right = "right", t.top = "top", t.bottom = "bottom"
      }(E || (E = {}));
      const P = (t, e) => parseFloat(t.split(", ")[e]),
        C = (t, e) => (n, {
          transform: r
        }) => {
          if ("none" === r || !r) return 0;
          const i = r.match(/^matrix3d\((.+)\)$/);
          if (i) return P(i[1], e); {
            const e = r.match(/^matrix\((.+)\)$/);
            return e ? P(e[1], t) : 0
          }
        },
        w = new Set(["x", "y", "z"]),
        M = a.I.filter((t => !w.has(t))),
        T = {
          width: ({
            x: t
          }, {
            paddingLeft: e = "0",
            paddingRight: n = "0"
          }) => t.max - t.min - parseFloat(e) - parseFloat(n),
          height: ({
            y: t
          }, {
            paddingTop: e = "0",
            paddingBottom: n = "0"
          }) => t.max - t.min - parseFloat(e) - parseFloat(n),
          top: (t, {
            top: e
          }) => parseFloat(e),
          left: (t, {
            left: e
          }) => parseFloat(e),
          bottom: ({
            y: t
          }, {
            top: e
          }) => parseFloat(e) + (t.max - t.min),
          right: ({
            x: t
          }, {
            left: e
          }) => parseFloat(e) + (t.max - t.min),
          x: C(4, 13),
          y: C(5, 14)
        };

      function A(t, e, n, r) {
        return (t => Object.keys(t).some(b))(e) ? ((t, e, n = {}, r = {}) => {
          e = {
            ...e
          }, r = {
            ...r
          };
          const i = Object.keys(e).filter(b);
          let a = [],
            s = !1;
          const o = [];
          if (i.forEach((i => {
              const l = t.getValue(i);
              if (!t.hasValue(i)) return;
              let u = n[i],
                h = (0, d.C)(u);
              const c = e[i];
              let m;
              if ((0, p.U)(c)) {
                const t = c.length,
                  e = null === c[0] ? 1 : 0;
                u = c[e], h = (0, d.C)(u);
                for (let n = e; n < t; n++) m ? (0, f.O)((0, d.C)(c[n]) === m, "All keyframes must be of the same type") : (m = (0, d.C)(c[n]), (0, f.O)(m === h || S(h) && S(m), "Keyframes must be of the same dimension as the current value"))
              } else m = (0, d.C)(c);
              if (h !== m)
                if (S(h) && S(m)) {
                  const t = l.get();
                  "string" == typeof t && l.set(parseFloat(t)), "string" == typeof c ? e[i] = parseFloat(c) : Array.isArray(c) && m === g.px && (e[i] = c.map(parseFloat))
                } else(null == h ? void 0 : h.transform) && (null == m ? void 0 : m.transform) && (0 === u || 0 === c) ? 0 === u ? l.set(m.transform(u)) : e[i] = h.transform(c) : (s || (a = function(t) {
                  const e = [];
                  return M.forEach((n => {
                    const r = t.getValue(n);
                    void 0 !== r && (e.push([n, r.get()]), r.set(n.startsWith("scale") ? 1 : 0))
                  })), e.length && t.render(), e
                }(t), s = !0), o.push(i), r[i] = void 0 !== r[i] ? r[i] : e[i], x(l, c))
            })), o.length) {
            const n = o.indexOf("height") >= 0 ? window.pageYOffset : null,
              i = ((t, e, n) => {
                const r = e.measureViewportBox(),
                  i = e.current,
                  a = getComputedStyle(i),
                  {
                    display: s
                  } = a,
                  o = {};
                "none" === s && e.setStaticValue("display", t.display || "block"), n.forEach((t => {
                  o[t] = T[t](r, a)
                })), e.render();
                const l = e.measureViewportBox();
                return n.forEach((n => {
                  const r = e.getValue(n);
                  x(r, o[n]), t[n] = T[n](l, a)
                })), t
              })(e, t, o);
            return a.length && a.forEach((([e, n]) => {
              t.getValue(e).set(n)
            })), t.render(), m.u && null !== n && window.scrollTo({
              top: n
            }), {
              target: i,
              transitionEnd: r
            }
          }
          return {
            target: e,
            transitionEnd: r
          }
        })(t, e, n, r) : {
          target: e,
          transitionEnd: r
        }
      }
      var k = n(8600),
        _ = n(51664),
        D = n(32709),
        I = n(95944),
        F = n(83840),
        O = n(78243);
      const V = {
          current: null
        },
        R = {
          current: !1
        };
      var L = n(14716),
        B = n(63016),
        N = n(85200),
        j = n(26364),
        z = n(91892),
        G = n(82912),
        H = n(29955),
        W = n(93456);
      const U = Object.keys(D.S),
        q = U.length,
        Y = ["AnimationStart", "AnimationComplete", "Update", "Unmount", "BeforeLayoutMeasure", "LayoutMeasure", "LayoutAnimationStart", "LayoutAnimationComplete"];
      class $ {
        constructor({
          parent: t,
          props: e,
          reducedMotionConfig: n,
          visualState: r
        }, i = {}) {
          this.current = null, this.children = new Set, this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.values = new Map, this.isPresent = !0, this.valueSubscriptions = new Map, this.prevMotionValues = {}, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
            this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection))
          }, this.scheduleRender = () => k.du.render(this.render, !1, !0);
          const {
            latestValues: a,
            renderState: s
          } = r;
          this.latestValues = a, this.baseTarget = {
            ...a
          }, this.initialValues = e.initial ? {
            ...a
          } : {}, this.renderState = s, this.parent = t, this.props = e, this.depth = t ? t.depth + 1 : 0, this.reducedMotionConfig = n, this.options = i, this.isControllingVariants = (0, G.K)(e), this.isVariantNode = (0, G.U)(e), this.isVariantNode && (this.variantChildren = new Set), this.manuallyAnimateOnMount = Boolean(t && t.current);
          const {
            willChange: o,
            ...l
          } = this.scrapeMotionValuesFromProps(e);
          for (const t in l) {
            const e = l[t];
            void 0 !== a[t] && (0, j.Y)(e) && (e.set(a[t], !1), (0, N.u)(o) && o.add(t))
          }
        }
        scrapeMotionValuesFromProps(t) {
          return {}
        }
        mount(t) {
          var e;
          this.current = t, this.projection && this.projection.mount(t), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = null === (e = this.parent) || void 0 === e ? void 0 : e.addVariantChild(this)), this.values.forEach(((t, e) => this.bindToMotionValue(e, t))), R.current || function() {
            if (R.current = !0, m.u)
              if (window.matchMedia) {
                const t = window.matchMedia("(prefers-reduced-motion)"),
                  e = () => V.current = t.matches;
                t.addListener(e), e()
              } else V.current = !1
          }(), this.shouldReduceMotion = "never" !== this.reducedMotionConfig && ("always" === this.reducedMotionConfig || V.current), this.parent && this.parent.children.add(this), this.setProps(this.props)
        }
        unmount() {
          var t, e, n;
          null === (t = this.projection) || void 0 === t || t.unmount(), k.Qz.update(this.notifyUpdate), k.Qz.render(this.render), this.valueSubscriptions.forEach((t => t())), null === (e = this.removeFromVariantTree) || void 0 === e || e.call(this), null === (n = this.parent) || void 0 === n || n.children.delete(this);
          for (const t in this.events) this.events[t].clear();
          this.current = null
        }
        bindToMotionValue(t, e) {
          const n = a._.has(t),
            r = e.on("change", (e => {
              this.latestValues[t] = e, this.props.onUpdate && k.du.update(this.notifyUpdate, !1, !0), n && this.projection && (this.projection.isTransformDirty = !0)
            })),
            i = e.on("renderRequest", this.scheduleRender);
          this.valueSubscriptions.set(t, (() => {
            r(), i()
          }))
        }
        sortNodePosition(t) {
          return this.current && this.sortInstanceNodePosition && this.type === t.type ? this.sortInstanceNodePosition(this.current, t.current) : 0
        }
        loadFeatures(t, e, n, r, i, a) {
          const s = [];
          "production" !== O._ && n && e && (0, f.O)(!1, "You have rendered a `motion` component within a `LazyMotion` component. This will break tree shaking. Import and render a `m` component instead.");
          for (let e = 0; e < q; e++) {
            const n = U[e],
              {
                isEnabled: r,
                Component: i
              } = D.S[n];
            r(t) && i && s.push((0, _.createElement)(i, {
              key: n,
              ...t,
              visualElement: this
            }))
          }
          if (!this.projection && i) {
            this.projection = new i(r, this.latestValues, this.parent && this.parent.projection);
            const {
              layoutId: e,
              layout: n,
              drag: s,
              dragConstraints: o,
              layoutScroll: l
            } = t;
            this.projection.setOptions({
              layoutId: e,
              layout: n,
              alwaysMeasureLayout: Boolean(s) || o && (0, F.U)(o),
              visualElement: this,
              scheduleRender: () => this.scheduleRender(),
              animationType: "string" == typeof n ? n : "both",
              initialPromotionConfig: a,
              layoutScroll: l
            })
          }
          return s
        }
        triggerBuild() {
          this.build(this.renderState, this.latestValues, this.options, this.props)
        }
        measureViewportBox() {
          return this.current ? this.measureInstanceViewportBox(this.current, this.props) : (0, I.kZ)()
        }
        getStaticValue(t) {
          return this.latestValues[t]
        }
        setStaticValue(t, e) {
          this.latestValues[t] = e
        }
        makeTargetAnimatable(t, e = !0) {
          return this.makeTargetAnimatableFromInstance(t, this.props, e)
        }
        setProps(t) {
          (t.transformTemplate || this.props.transformTemplate) && this.scheduleRender(), this.props = t;
          for (let e = 0; e < Y.length; e++) {
            const n = Y[e];
            this.propEventSubscriptions[n] && (this.propEventSubscriptions[n](), delete this.propEventSubscriptions[n]);
            const r = t["on" + n];
            r && (this.propEventSubscriptions[n] = this.on(n, r))
          }
          this.prevMotionValues = function(t, e, n) {
            const {
              willChange: r
            } = e;
            for (const i in e) {
              const a = e[i],
                s = n[i];
              if ((0, j.Y)(a)) t.addValue(i, a), (0, N.u)(r) && r.add(i);
              else if ((0, j.Y)(s)) t.addValue(i, (0, B.w)(a, {
                owner: t
              })), (0, N.u)(r) && r.remove(i);
              else if (s !== a)
                if (t.hasValue(i)) {
                  const e = t.getValue(i);
                  !e.hasAnimated && e.set(a)
                } else {
                  const e = t.getStaticValue(i);
                  t.addValue(i, (0, B.w)(void 0 !== e ? e : a))
                }
            }
            for (const r in n) void 0 === e[r] && t.removeValue(r);
            return e
          }(this, this.scrapeMotionValuesFromProps(t), this.prevMotionValues)
        }
        getProps() {
          return this.props
        }
        getVariant(t) {
          var e;
          return null === (e = this.props.variants) || void 0 === e ? void 0 : e[t]
        }
        getDefaultTransition() {
          return this.props.transition
        }
        getTransformPagePoint() {
          return this.props.transformPagePoint
        }
        getClosestVariantNode() {
          var t;
          return this.isVariantNode ? this : null === (t = this.parent) || void 0 === t ? void 0 : t.getClosestVariantNode()
        }
        getVariantContext(t = !1) {
          var e, n;
          if (t) return null === (e = this.parent) || void 0 === e ? void 0 : e.getVariantContext();
          if (!this.isControllingVariants) {
            const t = (null === (n = this.parent) || void 0 === n ? void 0 : n.getVariantContext()) || {};
            return void 0 !== this.props.initial && (t.initial = this.props.initial), t
          }
          const r = {};
          for (let t = 0; t < X; t++) {
            const e = K[t],
              n = this.props[e];
            ((0, H.o)(n) || !1 === n) && (r[e] = n)
          }
          return r
        }
        addVariantChild(t) {
          var e;
          const n = this.getClosestVariantNode();
          if (n) return null === (e = n.variantChildren) || void 0 === e || e.add(t), () => n.variantChildren.delete(t)
        }
        addValue(t, e) {
          this.hasValue(t) && this.removeValue(t), this.values.set(t, e), this.latestValues[t] = e.get(), this.bindToMotionValue(t, e)
        }
        removeValue(t) {
          var e;
          this.values.delete(t), null === (e = this.valueSubscriptions.get(t)) || void 0 === e || e(), this.valueSubscriptions.delete(t), delete this.latestValues[t], this.removeValueFromRenderState(t, this.renderState)
        }
        hasValue(t) {
          return this.values.has(t)
        }
        getValue(t, e) {
          if (this.props.values && this.props.values[t]) return this.props.values[t];
          let n = this.values.get(t);
          return void 0 === n && void 0 !== e && (n = (0, B.w)(e, {
            owner: this
          }), this.addValue(t, n)), n
        }
        readValue(t) {
          return void 0 === this.latestValues[t] && this.current ? this.readValueFromInstance(this.current, t, this.options) : this.latestValues[t]
        }
        setBaseTarget(t, e) {
          this.baseTarget[t] = e
        }
        getBaseTarget(t) {
          var e;
          const {
            initial: n
          } = this.props, r = "string" == typeof n || "object" == typeof n ? null === (e = (0, W.Q)(this.props, n)) || void 0 === e ? void 0 : e[t] : void 0;
          if (n && void 0 !== r) return r;
          const i = this.getBaseTargetFromProps(this.props, t);
          return void 0 === i || (0, j.Y)(i) ? void 0 !== this.initialValues[t] && void 0 === r ? void 0 : this.baseTarget[t] : i
        }
        on(t, e) {
          return this.events[t] || (this.events[t] = new L._), this.events[t].add(e)
        }
        notify(t, ...e) {
          var n;
          null === (n = this.events[t]) || void 0 === n || n.notify(...e)
        }
      }
      const K = ["initial", ...z.qq],
        X = K.length;
      class Z extends $ {
        sortInstanceNodePosition(t, e) {
          return 2 & t.compareDocumentPosition(e) ? 1 : -1
        }
        getBaseTargetFromProps(t, e) {
          var n;
          return null === (n = t.style) || void 0 === n ? void 0 : n[e]
        }
        removeValueFromRenderState(t, {
          vars: e,
          style: n
        }) {
          delete e[t], delete n[t]
        }
        makeTargetAnimatableFromInstance({
          transition: t,
          transitionEnd: e,
          ...n
        }, {
          transformValues: r
        }, i) {
          let a = (0, h.iK)(n, t || {}, this);
          if (r && (e && (e = r(e)), n && (n = r(n)), a && (a = r(a))), i) {
            (0, h.AH)(this, n, a);
            const t = ((t, e, n, r) => {
              const i = (0, c.eE)(t, e, r);
              return A(t, e = i.target, n, r = i.transitionEnd)
            })(this, n, a, e);
            e = t.transitionEnd, n = t.target
          }
          return {
            transition: t,
            transitionEnd: e,
            ...n
          }
        }
      }
      class J extends Z {
        readValueFromInstance(t, e) {
          if (a._.has(e)) {
            const t = (0, l.k)(e);
            return t && t.default || 0
          } {
            const r = (n = t, window.getComputedStyle(n)),
              a = ((0, i.U)(e) ? r.getPropertyValue(e) : r[e]) || 0;
            return "string" == typeof a ? a.trim() : a
          }
          var n
        }
        measureInstanceViewportBox(t, {
          transformPagePoint: e
        }) {
          return (0, u.G)(t, e)
        }
        build(t, e, n, i) {
          (0, r.q)(t, e, n, i.transformTemplate)
        }
        scrapeMotionValuesFromProps(t) {
          return (0, s.s)(t)
        }
        renderInstance(t, e, n, r) {
          (0, o.K)(t, e, n, r)
        }
      }
      var Q = n(30720),
        tt = n(15384),
        et = n(59256),
        nt = n(45923),
        rt = n(90388),
        it = n(27336);
      class at extends Z {
        constructor() {
          super(...arguments), this.isSVGTag = !1
        }
        getBaseTargetFromProps(t, e) {
          return t[e]
        }
        readValueFromInstance(t, e) {
          var n;
          return a._.has(e) ? (null === (n = (0, l.k)(e)) || void 0 === n ? void 0 : n.default) || 0 : (e = nt.K.has(e) ? e : (0, et.k)(e), t.getAttribute(e))
        }
        measureInstanceViewportBox() {
          return (0, I.kZ)()
        }
        scrapeMotionValuesFromProps(t) {
          return (0, Q.s)(t)
        }
        build(t, e, n, r) {
          (0, tt.m)(t, e, n, this.isSVGTag, r.transformTemplate)
        }
        renderInstance(t, e, n, r) {
          (0, rt.H)(t, e, n, r)
        }
        mount(t) {
          this.isSVGTag = (0, it.s)(t.tagName), super.mount(t)
        }
      }
      var st = n(29180);
      const ot = (t, e) => (0, st.C)(t) ? new at(e, {
        enableHardwareAcceleration: !1
      }) : new J(e, {
        enableHardwareAcceleration: !0
      })
    },
    48016: (t, e, n) => {
      "use strict";
      n.d(e, {
        i: () => a
      });
      var r = n(51376),
        i = n(94624);
      const a = {
        renderer: n(29284).U,
        ...r.w,
        ...i.g
      }
    },
    1267: (t, e, n) => {
      "use strict";
      n.d(e, {
        m: () => a
      });
      var r = n(84312),
        i = n(52468);
      const a = (0, r.y)(i.G)
    },
    84312: (t, e, n) => {
      "use strict";
      n.d(e, {
        y: () => w
      });
      var r = n(51664),
        i = n(54528),
        a = n(68312),
        s = n(92216),
        o = n(70520);
      const l = o.u ? r.useLayoutEffect : r.useEffect;
      var u = n(6628),
        h = n(83840),
        c = n(29955),
        p = n(82912);

      function f(t) {
        return Array.isArray(t) ? t.join(" ") : t
      }
      var d = n(32709),
        m = n(56612),
        v = n(28552),
        g = n(44640);
      let y = 1;
      var b = n(60300);
      class x extends r.Component {
        getSnapshotBeforeUpdate() {
          const {
            visualElement: t,
            props: e
          } = this.props;
          return t && t.setProps(e), null
        }
        componentDidUpdate() {}
        render() {
          return this.props.children
        }
      }
      var S = n(64356);
      const E = Symbol.for("motionComponentSymbol");

      function P({
        preloadedFeatures: t,
        createVisualElement: e,
        projectionNodeConstructor: n,
        useRender: b,
        useVisualState: P,
        Component: w
      }) {
        t && (0, m.M)(t);
        const M = (0, r.forwardRef)((function(m, E) {
          const M = {
              ...(0, r.useContext)(i.K),
              ...m,
              layoutId: C(m)
            },
            {
              isStatic: T
            } = M;
          let A = null;
          const k = function(t) {
              const {
                initial: e,
                animate: n
              } = function(t, e) {
                if ((0, p.K)(t)) {
                  const {
                    initial: e,
                    animate: n
                  } = t;
                  return {
                    initial: !1 === e || (0, c.o)(e) ? e : void 0,
                    animate: (0, c.o)(n) ? n : void 0
                  }
                }
                return !1 !== t.inherit ? e : {}
              }(t, (0, r.useContext)(a.i));
              return (0, r.useMemo)((() => ({
                initial: e,
                animate: n
              })), [f(e), f(n)])
            }(m),
            _ = T ? void 0 : (0, v._)((() => {
              if (g.C.hasEverUpdated) return y++
            })),
            D = P(m, T);
          if (!T && o.u) {
            k.visualElement = function(t, e, n, o) {
              const h = (0, a.c)(),
                c = (0, r.useContext)(u.Y),
                p = (0, r.useContext)(s.i),
                f = (0, r.useContext)(i.K).reducedMotion,
                d = (0, r.useRef)();
              o = o || c.renderer, !d.current && o && (d.current = o(t, {
                visualState: e,
                parent: h,
                props: n,
                presenceId: p ? p.id : void 0,
                blockInitialAnimation: !!p && !1 === p.initial,
                reducedMotionConfig: f
              }));
              const m = d.current;
              return l((() => {
                m && m.render()
              })), l((() => {
                m && m.animationState && m.animationState.animateChanges()
              })), l((() => () => m && m.notify("Unmount")), []), m
            }(w, D, M, e);
            const o = (0, r.useContext)(u.Y).strict,
              h = (0, r.useContext)(S.O);
            k.visualElement && (A = k.visualElement.loadFeatures(M, o, t, _, n || d.S.projectionNodeConstructor, h))
          }
          return r.createElement(x, {
            visualElement: k.visualElement,
            props: M
          }, A, r.createElement(a.i.Provider, {
            value: k
          }, b(w, m, _, function(t, e, n) {
            return (0, r.useCallback)((r => {
              r && t.mount && t.mount(r), e && (r ? e.mount(r) : e.unmount()), n && ("function" == typeof n ? n(r) : (0, h.U)(n) && (n.current = r))
            }), [e])
          }(D, k.visualElement, E), D, T, k.visualElement)))
        }));
        return M[E] = w, M
      }

      function C({
        layoutId: t
      }) {
        const e = (0, r.useContext)(b.m).id;
        return e && void 0 !== t ? e + "-" + t : t
      }

      function w(t) {
        function e(e, n = {}) {
          return P(t(e, n))
        }
        if ("undefined" == typeof Proxy) return e;
        const n = new Map;
        return new Proxy(e, {
          get: (t, r) => (n.has(r) || n.set(r, e(r)), n.get(r))
        })
      }
    },
    21388: (t, e, n) => {
      "use strict";
      n.d(e, {
        q: () => Pe
      });
      var r = n(84312),
        i = n(52468),
        a = n(94624),
        s = n(51376),
        o = n(51664),
        l = n(97064),
        u = n(40756),
        h = n(97736),
        c = n(8600),
        p = n(99880),
        f = n(38496),
        d = n(51672);
      const m = (t, e) => Math.abs(t - e);
      var v = n(50900);
      class g {
        constructor(t, e, {
          transformPagePoint: n
        } = {}) {
          if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.updatePoint = () => {
              if (!this.lastMoveEvent || !this.lastMoveEventInfo) return;
              const t = x(this.lastMoveEventInfo, this.history),
                e = null !== this.startEvent,
                n = function(t, e) {
                  const n = m(t.x, e.x),
                    r = m(t.y, e.y);
                  return Math.sqrt(n ** 2 + r ** 2)
                }(t.offset, {
                  x: 0,
                  y: 0
                }) >= 3;
              if (!e && !n) return;
              const {
                point: r
              } = t, {
                timestamp: i
              } = v.frameData;
              this.history.push({
                ...r,
                timestamp: i
              });
              const {
                onStart: a,
                onMove: s
              } = this.handlers;
              e || (a && a(this.lastMoveEvent, t), this.startEvent = this.lastMoveEvent), s && s(this.lastMoveEvent, t)
            }, this.handlePointerMove = (t, e) => {
              this.lastMoveEvent = t, this.lastMoveEventInfo = y(e, this.transformPagePoint), (0, u.N)(t) && 0 === t.buttons ? this.handlePointerUp(t, e) : c.du.update(this.updatePoint, !0)
            }, this.handlePointerUp = (t, e) => {
              this.end();
              const {
                onEnd: n,
                onSessionEnd: r
              } = this.handlers, i = x(y(e, this.transformPagePoint), this.history);
              this.startEvent && n && n(t, i), r && r(t, i)
            }, (0, u.e)(t) && t.touches.length > 1) return;
          this.handlers = e, this.transformPagePoint = n;
          const r = y((0, h.u)(t), this.transformPagePoint),
            {
              point: i
            } = r,
            {
              timestamp: a
            } = v.frameData;
          this.history = [{
            ...i,
            timestamp: a
          }];
          const {
            onSessionStart: s
          } = e;
          s && s(t, x(r, this.history)), this.removeListeners = (0, d.W)((0, f.S)(window, "pointermove", this.handlePointerMove), (0, f.S)(window, "pointerup", this.handlePointerUp), (0, f.S)(window, "pointercancel", this.handlePointerUp))
        }
        updateHandlers(t) {
          this.handlers = t
        }
        end() {
          this.removeListeners && this.removeListeners(), c.Qz.update(this.updatePoint)
        }
      }

      function y(t, e) {
        return e ? {
          point: e(t.point)
        } : t
      }

      function b(t, e) {
        return {
          x: t.x - e.x,
          y: t.y - e.y
        }
      }

      function x({
        point: t
      }, e) {
        return {
          point: t,
          delta: b(t, E(e)),
          offset: b(t, S(e)),
          velocity: P(e, .1)
        }
      }

      function S(t) {
        return t[0]
      }

      function E(t) {
        return t[t.length - 1]
      }

      function P(t, e) {
        if (t.length < 2) return {
          x: 0,
          y: 0
        };
        let n = t.length - 1,
          r = null;
        const i = E(t);
        for (; n >= 0 && (r = t[n], !(i.timestamp - r.timestamp > (0, p.c)(e)));) n--;
        if (!r) return {
          x: 0,
          y: 0
        };
        const a = (i.timestamp - r.timestamp) / 1e3;
        if (0 === a) return {
          x: 0,
          y: 0
        };
        const s = {
          x: (i.x - r.x) / a,
          y: (i.y - r.y) / a
        };
        return s.x === 1 / 0 && (s.x = 0), s.y === 1 / 0 && (s.y = 0), s
      }
      var C = n(74136),
        w = n(83840),
        M = n(67368),
        T = n(6764);

      function A(t) {
        return t.max - t.min
      }

      function k(t, e = 0, n = .01) {
        return Math.abs(t - e) <= n
      }

      function _(t, e, n, r = .5) {
        t.origin = r, t.originPoint = (0, T.C)(e.min, e.max, t.origin), t.scale = A(n) / A(e), (k(t.scale, 1, 1e-4) || isNaN(t.scale)) && (t.scale = 1), t.translate = (0, T.C)(n.min, n.max, t.origin) - t.originPoint, (k(t.translate) || isNaN(t.translate)) && (t.translate = 0)
      }

      function D(t, e, n, r) {
        _(t.x, e.x, n.x, null == r ? void 0 : r.originX), _(t.y, e.y, n.y, null == r ? void 0 : r.originY)
      }

      function I(t, e, n) {
        t.min = n.min + e.min, t.max = t.min + A(e)
      }

      function F(t, e, n) {
        t.min = e.min - n.min, t.max = t.min + A(e)
      }

      function O(t, e, n) {
        F(t.x, e.x, n.x), F(t.y, e.y, n.y)
      }
      var V = n(85584);

      function R(t, e, n) {
        return {
          min: void 0 !== e ? t.min + e : void 0,
          max: void 0 !== n ? t.max + n - (t.max - t.min) : void 0
        }
      }

      function L(t, e) {
        let n = e.min - t.min,
          r = e.max - t.max;
        return e.max - e.min < t.max - t.min && ([n, r] = [r, n]), {
          min: n,
          max: r
        }
      }
      const B = .35;

      function N(t, e, n) {
        return {
          min: j(t, e),
          max: j(t, n)
        }
      }

      function j(t, e) {
        return "number" == typeof t ? t : t[e] || 0
      }
      var z = n(19856),
        G = n(95944);

      function H(t) {
        return [t("x"), t("y")]
      }
      var W = n(88280),
        U = n(23820),
        q = n(3428),
        Y = n(45852),
        $ = n(93428);
      const K = new WeakMap;
      class X {
        constructor(t) {
          this.openGlobalLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = {
            x: 0,
            y: 0
          }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = (0, G.kZ)(), this.visualElement = t
        }
        start(t, {
          snapToCursor: e = !1
        } = {}) {
          !1 !== this.visualElement.isPresent && (this.panSession = new g(t, {
            onSessionStart: t => {
              this.stopAnimation(), e && this.snapToCursor((0, h.u)(t, "page").point)
            },
            onStart: (t, e) => {
              var n;
              const {
                drag: r,
                dragPropagation: i,
                onDragStart: a
              } = this.getProps();
              (!r || i || (this.openGlobalLock && this.openGlobalLock(), this.openGlobalLock = (0, C.A1)(r), this.openGlobalLock)) && (this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), H((t => {
                var e, n;
                let r = this.getAxisMotionValue(t).get() || 0;
                if (Y.WI.test(r)) {
                  const i = null === (n = null === (e = this.visualElement.projection) || void 0 === e ? void 0 : e.layout) || void 0 === n ? void 0 : n.layoutBox[t];
                  i && (r = A(i) * (parseFloat(r) / 100))
                }
                this.originPoint[t] = r
              })), null == a || a(t, e), null === (n = this.visualElement.animationState) || void 0 === n || n.setActive(z.w.Drag, !0))
            },
            onMove: (t, e) => {
              const {
                dragPropagation: n,
                dragDirectionLock: r,
                onDirectionLock: i,
                onDrag: a
              } = this.getProps();
              if (!n && !this.openGlobalLock) return;
              const {
                offset: s
              } = e;
              if (r && null === this.currentDirection) return this.currentDirection = function(t, e = 10) {
                let n = null;
                return Math.abs(t.y) > e ? n = "y" : Math.abs(t.x) > e && (n = "x"), n
              }(s), void(null !== this.currentDirection && (null == i || i(this.currentDirection)));
              this.updateAxis("x", e.point, s), this.updateAxis("y", e.point, s), this.visualElement.render(), null == a || a(t, e)
            },
            onSessionEnd: (t, e) => this.stop(t, e)
          }, {
            transformPagePoint: this.visualElement.getTransformPagePoint()
          }))
        }
        stop(t, e) {
          const n = this.isDragging;
          if (this.cancel(), !n) return;
          const {
            velocity: r
          } = e;
          this.startAnimation(r);
          const {
            onDragEnd: i
          } = this.getProps();
          null == i || i(t, e)
        }
        cancel() {
          var t, e;
          this.isDragging = !1, this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !1), null === (t = this.panSession) || void 0 === t || t.end(), this.panSession = void 0;
          const {
            dragPropagation: n
          } = this.getProps();
          !n && this.openGlobalLock && (this.openGlobalLock(), this.openGlobalLock = null), null === (e = this.visualElement.animationState) || void 0 === e || e.setActive(z.w.Drag, !1)
        }
        updateAxis(t, e, n) {
          const {
            drag: r
          } = this.getProps();
          if (!n || !Z(t, r, this.currentDirection)) return;
          const i = this.getAxisMotionValue(t);
          let a = this.originPoint[t] + n[t];
          this.constraints && this.constraints[t] && (a = function(t, {
            min: e,
            max: n
          }, r) {
            return void 0 !== e && t < e ? t = r ? (0, T.C)(e, t, r.min) : Math.max(t, e) : void 0 !== n && t > n && (t = r ? (0, T.C)(n, t, r.max) : Math.min(t, n)), t
          }(a, this.constraints[t], this.elastic[t])), i.set(a)
        }
        resolveConstraints() {
          const {
            dragConstraints: t,
            dragElastic: e
          } = this.getProps(), {
            layout: n
          } = this.visualElement.projection || {}, r = this.constraints;
          t && (0, w.U)(t) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : this.constraints = !(!t || !n) && function(t, {
            top: e,
            left: n,
            bottom: r,
            right: i
          }) {
            return {
              x: R(t.x, n, i),
              y: R(t.y, e, r)
            }
          }(n.layoutBox, t), this.elastic = function(t = B) {
            return !1 === t ? t = 0 : !0 === t && (t = B), {
              x: N(t, "left", "right"),
              y: N(t, "top", "bottom")
            }
          }(e), r !== this.constraints && n && this.constraints && !this.hasMutatedConstraints && H((t => {
            this.getAxisMotionValue(t) && (this.constraints[t] = function(t, e) {
              const n = {};
              return void 0 !== e.min && (n.min = e.min - t.min), void 0 !== e.max && (n.max = e.max - t.min), n
            }(n.layoutBox[t], this.constraints[t]))
          }))
        }
        resolveRefConstraints() {
          const {
            dragConstraints: t,
            onMeasureDragConstraints: e
          } = this.getProps();
          if (!t || !(0, w.U)(t)) return !1;
          const n = t.current;
          (0, l.O)(null !== n, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.");
          const {
            projection: r
          } = this.visualElement;
          if (!r || !r.layout) return !1;
          const i = (0, W.q)(n, r.root, this.visualElement.getTransformPagePoint());
          let a = function(t, e) {
            return {
              x: L(t.x, e.x),
              y: L(t.y, e.y)
            }
          }(r.layout.layoutBox, i);
          if (e) {
            const t = e((0, U.wl)(a));
            this.hasMutatedConstraints = !!t, t && (a = (0, U.aM)(t))
          }
          return a
        }
        startAnimation(t) {
          const {
            drag: e,
            dragMomentum: n,
            dragElastic: r,
            dragTransition: i,
            dragSnapToOrigin: a,
            onDragTransitionEnd: s
          } = this.getProps(), o = this.constraints || {}, l = H((s => {
            if (!Z(s, e, this.currentDirection)) return;
            let l = (null == o ? void 0 : o[s]) || {};
            a && (l = {
              min: 0,
              max: 0
            });
            const u = r ? 200 : 1e6,
              h = r ? 40 : 1e7,
              c = {
                type: "inertia",
                velocity: n ? t[s] : 0,
                bounceStiffness: u,
                bounceDamping: h,
                timeConstant: 750,
                restDelta: 1,
                restSpeed: 10,
                ...i,
                ...l
              };
            return this.startAxisValueAnimation(s, c)
          }));
          return Promise.all(l).then(s)
        }
        startAxisValueAnimation(t, e) {
          const n = this.getAxisMotionValue(t);
          return n.start((0, $.c)(t, n, 0, e))
        }
        stopAnimation() {
          H((t => this.getAxisMotionValue(t).stop()))
        }
        getAxisMotionValue(t) {
          var e;
          const n = "_drag" + t.toUpperCase();
          return this.visualElement.getProps()[n] || this.visualElement.getValue(t, (null === (e = this.visualElement.getProps().initial) || void 0 === e ? void 0 : e[t]) || 0)
        }
        snapToCursor(t) {
          H((e => {
            const {
              drag: n
            } = this.getProps();
            if (!Z(e, n, this.currentDirection)) return;
            const {
              projection: r
            } = this.visualElement, i = this.getAxisMotionValue(e);
            if (r && r.layout) {
              const {
                min: n,
                max: a
              } = r.layout.layoutBox[e];
              i.set(t[e] - (0, T.C)(n, a, .5))
            }
          }))
        }
        scalePositionWithinConstraints() {
          var t;
          if (!this.visualElement.current) return;
          const {
            drag: e,
            dragConstraints: n
          } = this.getProps(), {
            projection: r
          } = this.visualElement;
          if (!(0, w.U)(n) || !r || !this.constraints) return;
          this.stopAnimation();
          const i = {
            x: 0,
            y: 0
          };
          H((t => {
            const e = this.getAxisMotionValue(t);
            if (e) {
              const n = e.get();
              i[t] = function(t, e) {
                let n = .5;
                const r = A(t),
                  i = A(e);
                return i > r ? n = (0, M.o)(e.min, e.max - r, t.min) : r > i && (n = (0, M.o)(t.min, t.max - i, e.min)), (0, V.q)(0, 1, n)
              }({
                min: n,
                max: n
              }, this.constraints[t])
            }
          }));
          const {
            transformTemplate: a
          } = this.visualElement.getProps();
          this.visualElement.current.style.transform = a ? a({}, "") : "none", null === (t = r.root) || void 0 === t || t.updateScroll(), r.updateLayout(), this.resolveConstraints(), H((t => {
            if (!Z(t, e, null)) return;
            const n = this.getAxisMotionValue(t),
              {
                min: r,
                max: a
              } = this.constraints[t];
            n.set((0, T.C)(r, a, i[t]))
          }))
        }
        addListeners() {
          var t;
          if (!this.visualElement.current) return;
          K.set(this.visualElement, this);
          const e = this.visualElement.current,
            n = (0, f.S)(e, "pointerdown", (t => {
              const {
                drag: e,
                dragListener: n = !0
              } = this.getProps();
              e && n && this.start(t)
            })),
            r = () => {
              const {
                dragConstraints: t
              } = this.getProps();
              (0, w.U)(t) && (this.constraints = this.resolveRefConstraints())
            },
            {
              projection: i
            } = this.visualElement,
            a = i.addEventListener("measure", r);
          i && !i.layout && (null === (t = i.root) || void 0 === t || t.updateScroll(), i.updateLayout()), r();
          const s = (0, q.y)(window, "resize", (() => this.scalePositionWithinConstraints())),
            o = i.addEventListener("didUpdate", (({
              delta: t,
              hasLayoutChanged: e
            }) => {
              this.isDragging && e && (H((e => {
                const n = this.getAxisMotionValue(e);
                n && (this.originPoint[e] += t[e].translate, n.set(n.get() + t[e].translate))
              })), this.visualElement.render())
            }));
          return () => {
            s(), n(), a(), null == o || o()
          }
        }
        getProps() {
          const t = this.visualElement.getProps(),
            {
              drag: e = !1,
              dragDirectionLock: n = !1,
              dragPropagation: r = !1,
              dragConstraints: i = !1,
              dragElastic: a = B,
              dragMomentum: s = !0
            } = t;
          return {
            ...t,
            drag: e,
            dragDirectionLock: n,
            dragPropagation: r,
            dragConstraints: i,
            dragElastic: a,
            dragMomentum: s
          }
        }
      }

      function Z(t, e, n) {
        return !(!0 !== e && e !== t || null !== n && n !== t)
      }
      var J = n(28552),
        Q = n(54528),
        tt = n(76344),
        et = n(48188);
      const nt = {
        pan: (0, et.E)((function({
          onPan: t,
          onPanStart: e,
          onPanEnd: n,
          onPanSessionStart: r,
          visualElement: i
        }) {
          const a = t || e || n || r,
            s = (0, o.useRef)(null),
            {
              transformPagePoint: l
            } = (0, o.useContext)(Q.K),
            u = {
              onSessionStart: r,
              onStart: e,
              onMove: t,
              onEnd: (t, e) => {
                s.current = null, n && n(t, e)
              }
            };
          (0, o.useEffect)((() => {
            null !== s.current && s.current.updateHandlers(u)
          })), (0, f.W)(i, "pointerdown", a && function(t) {
            s.current = new g(t, u, {
              transformPagePoint: l
            })
          }), (0, tt.u)((() => s.current && s.current.end()))
        })),
        drag: (0, et.E)((function(t) {
          const {
            dragControls: e,
            visualElement: n
          } = t, r = (0, J._)((() => new X(n)));
          (0, o.useEffect)((() => e && e.subscribe(r)), [r, e]), (0, o.useEffect)((() => r.addListeners()), [r])
        }))
      };
      var rt = n(29284),
        it = n(72012),
        at = n(60300),
        st = n(64356),
        ot = n(44640);

      function lt(t, e) {
        return e.max === e.min ? 0 : t / (e.max - e.min) * 100
      }
      const ut = {
        correct: (t, e) => {
          if (!e.target) return t;
          if ("string" == typeof t) {
            if (!Y.px.test(t)) return t;
            t = parseFloat(t)
          }
          return `${lt(t,e.target.x)}% ${lt(t,e.target.y)}%`
        }
      };
      var ht = n(72996),
        ct = n(67700);
      const pt = "_$css",
        ft = {
          correct: (t, {
            treeScale: e,
            projectionDelta: n
          }) => {
            const r = t,
              i = t.includes("var("),
              a = [];
            i && (t = t.replace(ht.CO, (t => (a.push(t), pt))));
            const s = ct.c.parse(t);
            if (s.length > 5) return r;
            const o = ct.c.createTransformer(t),
              l = "number" != typeof s[0] ? 1 : 0,
              u = n.x.scale * e.x,
              h = n.y.scale * e.y;
            s[0 + l] /= u, s[1 + l] /= h;
            const c = (0, T.C)(u, h, .5);
            "number" == typeof s[2 + l] && (s[2 + l] /= c), "number" == typeof s[3 + l] && (s[3 + l] /= c);
            let p = o(s);
            if (i) {
              let t = 0;
              p = p.replace(pt, (() => {
                const e = a[t];
                return t++, e
              }))
            }
            return p
          }
        };
      var dt = n(72401);
      class mt extends o.Component {
        componentDidMount() {
          const {
            visualElement: t,
            layoutGroup: e,
            switchLayoutGroup: n,
            layoutId: r
          } = this.props, {
            projection: i
          } = t;
          (0, dt.o)(vt), i && (e.group && e.group.add(i), n && n.register && r && n.register(i), i.root.didUpdate(), i.addEventListener("animationComplete", (() => {
            this.safeToRemove()
          })), i.setOptions({
            ...i.options,
            onExitComplete: () => this.safeToRemove()
          })), ot.C.hasEverUpdated = !0
        }
        getSnapshotBeforeUpdate(t) {
          const {
            layoutDependency: e,
            visualElement: n,
            drag: r,
            isPresent: i
          } = this.props, a = n.projection;
          return a ? (a.isPresent = i, r || t.layoutDependency !== e || void 0 === e ? a.willUpdate() : this.safeToRemove(), t.isPresent !== i && (i ? a.promote() : a.relegate() || c.du.postRender((() => {
            var t;
            (null === (t = a.getStack()) || void 0 === t ? void 0 : t.members.length) || this.safeToRemove()
          }))), null) : null
        }
        componentDidUpdate() {
          const {
            projection: t
          } = this.props.visualElement;
          t && (t.root.didUpdate(), !t.currentAnimation && t.isLead() && this.safeToRemove())
        }
        componentWillUnmount() {
          const {
            visualElement: t,
            layoutGroup: e,
            switchLayoutGroup: n
          } = this.props, {
            projection: r
          } = t;
          r && (r.scheduleCheckAfterUnmount(), (null == e ? void 0 : e.group) && e.group.remove(r), (null == n ? void 0 : n.deregister) && n.deregister(r))
        }
        safeToRemove() {
          const {
            safeToRemove: t
          } = this.props;
          null == t || t()
        }
        render() {
          return null
        }
      }
      const vt = {
          borderRadius: {
            ...ut,
            applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"]
          },
          borderTopLeftRadius: ut,
          borderTopRightRadius: ut,
          borderBottomLeftRadius: ut,
          borderBottomRightRadius: ut,
          boxShadow: ft
        },
        gt = {
          measureLayout: function(t) {
            const [e, n] = (0, it.OK)(), r = (0, o.useContext)(at.m);
            return o.createElement(mt, {
              ...t,
              layoutGroup: r,
              switchLayoutGroup: (0, o.useContext)(st.O),
              isPresent: e,
              safeToRemove: n
            })
          }
        };
      var yt = n(63016),
        bt = n(26364),
        xt = n(14716),
        St = n(25632),
        Et = n(97768);
      const Pt = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
        Ct = Pt.length,
        wt = t => "string" == typeof t ? parseFloat(t) : t,
        Mt = t => "number" == typeof t || Y.px.test(t);

      function Tt(t, e) {
        return void 0 !== t[e] ? t[e] : t.borderRadius
      }
      const At = _t(0, .5, St.Q7),
        kt = _t(.5, .95, Et.K);

      function _t(t, e, n) {
        return r => r < t ? 0 : r > e ? 1 : n((0, M.o)(t, e, r))
      }

      function Dt(t, e) {
        t.min = e.min, t.max = e.max
      }

      function It(t, e) {
        Dt(t.x, e.x), Dt(t.y, e.y)
      }
      var Ft = n(4096);

      function Ot(t, e, n, r, i) {
        return t -= e, t = (0, Ft.cL)(t, 1 / n, r), void 0 !== i && (t = (0, Ft.cL)(t, 1 / i, r)), t
      }

      function Vt(t, e, [n, r, i], a, s) {
        ! function(t, e = 0, n = 1, r = .5, i, a = t, s = t) {
          if (Y.WI.test(e) && (e = parseFloat(e), e = (0, T.C)(s.min, s.max, e / 100) - s.min), "number" != typeof e) return;
          let o = (0, T.C)(a.min, a.max, r);
          t === a && (o -= e), t.min = Ot(t.min, e, n, o, i), t.max = Ot(t.max, e, n, o, i)
        }(t, e[n], e[r], e[i], e.scale, a, s)
      }
      const Rt = ["x", "scaleX", "originX"],
        Lt = ["y", "scaleY", "originY"];

      function Bt(t, e, n, r) {
        Vt(t.x, e, Rt, null == n ? void 0 : n.x, null == r ? void 0 : r.x), Vt(t.y, e, Lt, null == n ? void 0 : n.y, null == r ? void 0 : r.y)
      }
      var Nt = n(60224);

      function jt(t) {
        return 0 === t.translate && 1 === t.scale
      }

      function zt(t) {
        return jt(t.x) && jt(t.y)
      }

      function Gt(t, e) {
        return t.x.min === e.x.min && t.x.max === e.x.max && t.y.min === e.y.min && t.y.max === e.y.max
      }

      function Ht(t) {
        return A(t.x) / A(t.y)
      }
      var Wt = n(14628);
      class Ut {
        constructor() {
          this.members = []
        }
        add(t) {
          (0, Wt.wV)(this.members, t), t.scheduleRender()
        }
        remove(t) {
          if ((0, Wt.sd)(this.members, t), t === this.prevLead && (this.prevLead = void 0), t === this.lead) {
            const t = this.members[this.members.length - 1];
            t && this.promote(t)
          }
        }
        relegate(t) {
          const e = this.members.findIndex((e => t === e));
          if (0 === e) return !1;
          let n;
          for (let t = e; t >= 0; t--) {
            const e = this.members[t];
            if (!1 !== e.isPresent) {
              n = e;
              break
            }
          }
          return !!n && (this.promote(n), !0)
        }
        promote(t, e) {
          var n;
          const r = this.lead;
          if (t !== r && (this.prevLead = r, this.lead = t, t.show(), r)) {
            r.instance && r.scheduleRender(), t.scheduleRender(), t.resumeFrom = r, e && (t.resumeFrom.preserveOpacity = !0), r.snapshot && (t.snapshot = r.snapshot, t.snapshot.latestValues = r.animationValues || r.latestValues), (null === (n = t.root) || void 0 === n ? void 0 : n.isUpdating) && (t.isLayoutDirty = !0);
            const {
              crossfade: i
            } = t.options;
            !1 === i && r.hide()
          }
        }
        exitAnimationComplete() {
          this.members.forEach((t => {
            var e, n, r, i, a;
            null === (n = (e = t.options).onExitComplete) || void 0 === n || n.call(e), null === (a = null === (r = t.resumingFrom) || void 0 === r ? void 0 : (i = r.options).onExitComplete) || void 0 === a || a.call(i)
          }))
        }
        scheduleRender() {
          this.members.forEach((t => {
            t.instance && t.scheduleRender(!1)
          }))
        }
        removeLeadSnapshot() {
          this.lead && this.lead.snapshot && (this.lead.snapshot = void 0)
        }
      }

      function qt(t, e, n) {
        let r = "";
        const i = t.x.translate / e.x,
          a = t.y.translate / e.y;
        if ((i || a) && (r = `translate3d(${i}px, ${a}px, 0) `), 1 === e.x && 1 === e.y || (r += `scale(${1/e.x}, ${1/e.y}) `), n) {
          const {
            rotate: t,
            rotateX: e,
            rotateY: i
          } = n;
          t && (r += `rotate(${t}deg) `), e && (r += `rotateX(${e}deg) `), i && (r += `rotateY(${i}deg) `)
        }
        const s = t.x.scale * e.x,
          o = t.y.scale * e.y;
        return 1 === s && 1 === o || (r += `scale(${s}, ${o})`), r || "none"
      }
      var Yt = n(70272);
      const $t = (t, e) => t.depth - e.depth;
      class Kt {
        constructor() {
          this.children = [], this.isDirty = !1
        }
        add(t) {
          (0, Wt.wV)(this.children, t), this.isDirty = !0
        }
        remove(t) {
          (0, Wt.sd)(this.children, t), this.isDirty = !0
        }
        forEach(t) {
          this.isDirty && this.children.sort($t), this.isDirty = !1, this.children.forEach(t)
        }
      }
      var Xt = n(46e3),
        Zt = n(512);
      const Jt = ["", "X", "Y", "Z"];
      let Qt = 0;

      function te({
        attachResizeListener: t,
        defaultParent: e,
        measureScroll: n,
        checkIsScrollRoot: r,
        resetTransform: i
      }) {
        return class {
          constructor(t, n = {}, r = (null == e ? void 0 : e())) {
            this.id = Qt++, this.animationId = 0, this.children = new Set, this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isTransformDirty = !1, this.isProjectionDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.treeScale = {
              x: 1,
              y: 1
            }, this.eventHandlers = new Map, this.potentialNodes = new Map, this.checkUpdateFailed = () => {
              this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots())
            }, this.updateProjection = () => {
              this.nodes.forEach(re), this.nodes.forEach(le), this.nodes.forEach(ue)
            }, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = new Map, this.elementId = t, this.latestValues = n, this.root = r ? r.root || r : this, this.path = r ? [...r.path, r] : [], this.parent = r, this.depth = r ? r.depth + 1 : 0, t && this.root.registerPotentialNode(t, this);
            for (let t = 0; t < this.path.length; t++) this.path[t].shouldResetTransform = !0;
            this.root === this && (this.nodes = new Kt)
          }
          addEventListener(t, e) {
            return this.eventHandlers.has(t) || this.eventHandlers.set(t, new xt._), this.eventHandlers.get(t).add(e)
          }
          notifyListeners(t, ...e) {
            const n = this.eventHandlers.get(t);
            null == n || n.notify(...e)
          }
          hasListeners(t) {
            return this.eventHandlers.has(t)
          }
          registerPotentialNode(t, e) {
            this.potentialNodes.set(t, e)
          }
          mount(e, n = !1) {
            var r;
            if (this.instance) return;
            this.isSVG = e instanceof SVGElement && "svg" !== e.tagName, this.instance = e;
            const {
              layoutId: i,
              layout: a,
              visualElement: s
            } = this.options;
            if (s && !s.current && s.mount(e), this.root.nodes.add(this), null === (r = this.parent) || void 0 === r || r.children.add(this), this.elementId && this.root.potentialNodes.delete(this.elementId), n && (a || i) && (this.isLayoutDirty = !0), t) {
              let n;
              const r = () => this.root.updateBlockedByResize = !1;
              t(e, (() => {
                this.root.updateBlockedByResize = !0, n && n(), n = (0, Zt.o)(r, 250), ot.C.hasAnimatedSinceResize && (ot.C.hasAnimatedSinceResize = !1, this.nodes.forEach(oe))
              }))
            }
            i && this.root.registerSharedNode(i, this), !1 !== this.options.animate && s && (i || a) && this.addEventListener("didUpdate", (({
              delta: t,
              hasLayoutChanged: e,
              hasRelativeTargetChanged: n,
              layout: r
            }) => {
              var i, a, o, l, u;
              if (this.isTreeAnimationBlocked()) return this.target = void 0, void(this.relativeTarget = void 0);
              const h = null !== (a = null !== (i = this.options.transition) && void 0 !== i ? i : s.getDefaultTransition()) && void 0 !== a ? a : me,
                {
                  onLayoutAnimationStart: c,
                  onLayoutAnimationComplete: p
                } = s.getProps(),
                f = !this.targetLayout || !Gt(this.targetLayout, r) || n,
                d = !e && n;
              if ((null === (o = this.resumeFrom) || void 0 === o ? void 0 : o.instance) || d || e && (f || !this.currentAnimation)) {
                this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0), this.setAnimationOrigin(t, d);
                const e = {
                  ...(0, Nt.qC)(h, "layout"),
                  onPlay: c,
                  onComplete: p
                };
                s.shouldReduceMotion && (e.delay = 0, e.type = !1), this.startAnimation(e)
              } else e || 0 !== this.animationProgress || oe(this), this.isLead() && (null === (u = (l = this.options).onExitComplete) || void 0 === u || u.call(l));
              this.targetLayout = r
            }))
          }
          unmount() {
            var t, e;
            this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this), null === (t = this.getStack()) || void 0 === t || t.remove(this), null === (e = this.parent) || void 0 === e || e.children.delete(this), this.instance = void 0, c.Qz.preRender(this.updateProjection)
          }
          blockUpdate() {
            this.updateManuallyBlocked = !0
          }
          unblockUpdate() {
            this.updateManuallyBlocked = !1
          }
          isUpdateBlocked() {
            return this.updateManuallyBlocked || this.updateBlockedByResize
          }
          isTreeAnimationBlocked() {
            var t;
            return this.isAnimationBlocked || (null === (t = this.parent) || void 0 === t ? void 0 : t.isTreeAnimationBlocked()) || !1
          }
          startUpdate() {
            var t;
            this.isUpdateBlocked() || (this.isUpdating = !0, null === (t = this.nodes) || void 0 === t || t.forEach(he), this.animationId++)
          }
          willUpdate(t = !0) {
            var e, n, r;
            if (this.root.isUpdateBlocked()) return void(null === (n = (e = this.options).onExitComplete) || void 0 === n || n.call(e));
            if (!this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty) return;
            this.isLayoutDirty = !0;
            for (let t = 0; t < this.path.length; t++) {
              const e = this.path[t];
              e.shouldResetTransform = !0, e.updateScroll("snapshot")
            }
            const {
              layoutId: i,
              layout: a
            } = this.options;
            if (void 0 === i && !a) return;
            const s = null === (r = this.options.visualElement) || void 0 === r ? void 0 : r.getProps().transformTemplate;
            this.prevTransformTemplateValue = null == s ? void 0 : s(this.latestValues, ""), this.updateSnapshot(), t && this.notifyListeners("willUpdate")
          }
          didUpdate() {
            if (this.isUpdateBlocked()) return this.unblockUpdate(), this.clearAllSnapshots(), void this.nodes.forEach(ae);
            this.isUpdating && (this.isUpdating = !1, this.potentialNodes.size && (this.potentialNodes.forEach(ve), this.potentialNodes.clear()), this.nodes.forEach(se), this.nodes.forEach(ee), this.nodes.forEach(ne), this.clearAllSnapshots(), c.Wi.update(), c.Wi.preRender(), c.Wi.render())
          }
          clearAllSnapshots() {
            this.nodes.forEach(ie), this.sharedNodes.forEach(ce)
          }
          scheduleUpdateProjection() {
            c.du.preRender(this.updateProjection, !1, !0)
          }
          scheduleCheckAfterUnmount() {
            c.du.postRender((() => {
              this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed()
            }))
          }
          updateSnapshot() {
            !this.snapshot && this.instance && (this.snapshot = this.measure())
          }
          updateLayout() {
            var t;
            if (!this.instance) return;
            if (this.updateScroll(), !(this.options.alwaysMeasureLayout && this.isLead() || this.isLayoutDirty)) return;
            if (this.resumeFrom && !this.resumeFrom.instance)
              for (let t = 0; t < this.path.length; t++) this.path[t].updateScroll();
            const e = this.layout;
            this.layout = this.measure(!1), this.layoutCorrected = (0, G.kZ)(), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox), null === (t = this.options.visualElement) || void 0 === t || t.notify("LayoutMeasure", this.layout.layoutBox, null == e ? void 0 : e.layoutBox)
          }
          updateScroll(t = "measure") {
            let e = Boolean(this.options.layoutScroll && this.instance);
            this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === t && (e = !1), e && (this.scroll = {
              animationId: this.root.animationId,
              phase: t,
              isRoot: r(this.instance),
              offset: n(this.instance)
            })
          }
          resetTransform() {
            var t;
            if (!i) return;
            const e = this.isLayoutDirty || this.shouldResetTransform,
              n = this.projectionDelta && !zt(this.projectionDelta),
              r = null === (t = this.options.visualElement) || void 0 === t ? void 0 : t.getProps().transformTemplate,
              a = null == r ? void 0 : r(this.latestValues, ""),
              s = a !== this.prevTransformTemplateValue;
            e && (n || (0, Yt.Ml)(this.latestValues) || s) && (i(this.instance, a), this.shouldResetTransform = !1, this.scheduleRender())
          }
          measure(t = !0) {
            const e = this.measurePageBox();
            let n = this.removeElementScroll(e);
            var r;
            return t && (n = this.removeTransform(n)), ge((r = n).x), ge(r.y), {
              animationId: this.root.animationId,
              measuredBox: e,
              layoutBox: n,
              latestValues: {},
              source: this.id
            }
          }
          measurePageBox() {
            const {
              visualElement: t
            } = this.options;
            if (!t) return (0, G.kZ)();
            const e = t.measureViewportBox(),
              {
                scroll: n
              } = this.root;
            return n && ((0, Ft.yq)(e.x, n.offset.x), (0, Ft.yq)(e.y, n.offset.y)), e
          }
          removeElementScroll(t) {
            const e = (0, G.kZ)();
            It(e, t);
            for (let n = 0; n < this.path.length; n++) {
              const r = this.path[n],
                {
                  scroll: i,
                  options: a
                } = r;
              if (r !== this.root && i && a.layoutScroll) {
                if (i.isRoot) {
                  It(e, t);
                  const {
                    scroll: n
                  } = this.root;
                  n && ((0, Ft.yq)(e.x, -n.offset.x), (0, Ft.yq)(e.y, -n.offset.y))
                }(0, Ft.yq)(e.x, i.offset.x), (0, Ft.yq)(e.y, i.offset.y)
              }
            }
            return e
          }
          applyTransform(t, e = !1) {
            const n = (0, G.kZ)();
            It(n, t);
            for (let t = 0; t < this.path.length; t++) {
              const r = this.path[t];
              !e && r.options.layoutScroll && r.scroll && r !== r.root && (0, Ft.aA)(n, {
                x: -r.scroll.offset.x,
                y: -r.scroll.offset.y
              }), (0, Yt.Ml)(r.latestValues) && (0, Ft.aA)(n, r.latestValues)
            }
            return (0, Yt.Ml)(this.latestValues) && (0, Ft.aA)(n, this.latestValues), n
          }
          removeTransform(t) {
            var e;
            const n = (0, G.kZ)();
            It(n, t);
            for (let t = 0; t < this.path.length; t++) {
              const r = this.path[t];
              if (!r.instance) continue;
              if (!(0, Yt.Ml)(r.latestValues)) continue;
              (0, Yt.cb)(r.latestValues) && r.updateSnapshot();
              const i = (0, G.kZ)();
              It(i, r.measurePageBox()), Bt(n, r.latestValues, null === (e = r.snapshot) || void 0 === e ? void 0 : e.layoutBox, i)
            }
            return (0, Yt.Ml)(this.latestValues) && Bt(n, this.latestValues), n
          }
          setTargetDelta(t) {
            this.targetDelta = t, this.isProjectionDirty = !0, this.root.scheduleUpdateProjection()
          }
          setOptions(t) {
            this.options = {
              ...this.options,
              ...t,
              crossfade: void 0 === t.crossfade || t.crossfade
            }
          }
          clearMeasurements() {
            this.scroll = void 0, this.layout = void 0, this.snapshot = void 0, this.prevTransformTemplateValue = void 0, this.targetDelta = void 0, this.target = void 0, this.isLayoutDirty = !1
          }
          resolveTargetDelta() {
            var t;
            const e = this.getLead();
            if (this.isProjectionDirty || (this.isProjectionDirty = e.isProjectionDirty), this.isTransformDirty || (this.isTransformDirty = e.isTransformDirty), !this.isProjectionDirty && !this.attemptToResolveRelativeTarget) return;
            const {
              layout: n,
              layoutId: r
            } = this.options;
            if (this.layout && (n || r)) {
              if (!this.targetDelta && !this.relativeTarget) {
                const t = this.getClosestProjectingParent();
                t && t.layout ? (this.relativeParent = t, this.relativeTarget = (0, G.kZ)(), this.relativeTargetOrigin = (0, G.kZ)(), O(this.relativeTargetOrigin, this.layout.layoutBox, t.layout.layoutBox), It(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
              }
              var i, a, s;
              if ((this.relativeTarget || this.targetDelta) && (this.target || (this.target = (0, G.kZ)(), this.targetWithTransforms = (0, G.kZ)()), this.relativeTarget && this.relativeTargetOrigin && (null === (t = this.relativeParent) || void 0 === t ? void 0 : t.target) ? (i = this.target, a = this.relativeTarget, s = this.relativeParent.target, I(i.x, a.x, s.x), I(i.y, a.y, s.y)) : this.targetDelta ? (Boolean(this.resumingFrom) ? this.target = this.applyTransform(this.layout.layoutBox) : It(this.target, this.layout.layoutBox), (0, Ft.CU)(this.target, this.targetDelta)) : It(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget)) {
                this.attemptToResolveRelativeTarget = !1;
                const t = this.getClosestProjectingParent();
                t && Boolean(t.resumingFrom) === Boolean(this.resumingFrom) && !t.options.layoutScroll && t.target ? (this.relativeParent = t, this.relativeTarget = (0, G.kZ)(), this.relativeTargetOrigin = (0, G.kZ)(), O(this.relativeTargetOrigin, this.target, t.target), It(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
              }
            }
          }
          getClosestProjectingParent() {
            if (this.parent && !(0, Yt.cb)(this.parent.latestValues) && !(0, Yt.Ki)(this.parent.latestValues)) return (this.parent.relativeTarget || this.parent.targetDelta) && this.parent.layout ? this.parent : this.parent.getClosestProjectingParent()
          }
          calcProjection() {
            var t;
            const {
              isProjectionDirty: e,
              isTransformDirty: n
            } = this;
            this.isProjectionDirty = this.isTransformDirty = !1;
            const r = this.getLead(),
              i = Boolean(this.resumingFrom) || this !== r;
            let a = !0;
            if (e && (a = !1), i && n && (a = !1), a) return;
            const {
              layout: s,
              layoutId: o
            } = this.options;
            if (this.isTreeAnimating = Boolean((null === (t = this.parent) || void 0 === t ? void 0 : t.isTreeAnimating) || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !s && !o) return;
            It(this.layoutCorrected, this.layout.layoutBox), (0, Ft.iI)(this.layoutCorrected, this.treeScale, this.path, i);
            const {
              target: l
            } = r;
            if (!l) return;
            this.projectionDelta || (this.projectionDelta = (0, G.Ww)(), this.projectionDeltaWithTransform = (0, G.Ww)());
            const u = this.treeScale.x,
              h = this.treeScale.y,
              c = this.projectionTransform;
            D(this.projectionDelta, this.layoutCorrected, l, this.latestValues), this.projectionTransform = qt(this.projectionDelta, this.treeScale), this.projectionTransform === c && this.treeScale.x === u && this.treeScale.y === h || (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", l))
          }
          hide() {
            this.isVisible = !1
          }
          show() {
            this.isVisible = !0
          }
          scheduleRender(t = !0) {
            var e, n, r;
            null === (n = (e = this.options).scheduleRender) || void 0 === n || n.call(e), t && (null === (r = this.getStack()) || void 0 === r || r.scheduleRender()), this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0)
          }
          setAnimationOrigin(t, e = !1) {
            var n, r;
            const i = this.snapshot,
              a = (null == i ? void 0 : i.latestValues) || {},
              s = {
                ...this.latestValues
              },
              o = (0, G.Ww)();
            this.relativeTarget = this.relativeTargetOrigin = void 0, this.attemptToResolveRelativeTarget = !e;
            const l = (0, G.kZ)(),
              u = (null == i ? void 0 : i.source) !== (null === (n = this.layout) || void 0 === n ? void 0 : n.source),
              h = ((null === (r = this.getStack()) || void 0 === r ? void 0 : r.members.length) || 0) <= 1,
              c = Boolean(u && !h && !0 === this.options.crossfade && !this.path.some(de));
            this.animationProgress = 0, this.mixTargetDelta = e => {
              var n;
              const r = e / 1e3;
              var i, p, f, d;
              pe(o.x, t.x, r), pe(o.y, t.y, r), this.setTargetDelta(o), this.relativeTarget && this.relativeTargetOrigin && this.layout && (null === (n = this.relativeParent) || void 0 === n ? void 0 : n.layout) && (O(l, this.layout.layoutBox, this.relativeParent.layout.layoutBox), i = this.relativeTarget, p = this.relativeTargetOrigin, f = l, d = r, fe(i.x, p.x, f.x, d), fe(i.y, p.y, f.y, d)), u && (this.animationValues = s, function(t, e, n, r, i, a) {
                i ? (t.opacity = (0, T.C)(0, void 0 !== n.opacity ? n.opacity : 1, At(r)), t.opacityExit = (0, T.C)(void 0 !== e.opacity ? e.opacity : 1, 0, kt(r))) : a && (t.opacity = (0, T.C)(void 0 !== e.opacity ? e.opacity : 1, void 0 !== n.opacity ? n.opacity : 1, r));
                for (let i = 0; i < Ct; i++) {
                  const a = `border${Pt[i]}Radius`;
                  let s = Tt(e, a),
                    o = Tt(n, a);
                  void 0 === s && void 0 === o || (s || (s = 0), o || (o = 0), 0 === s || 0 === o || Mt(s) === Mt(o) ? (t[a] = Math.max((0, T.C)(wt(s), wt(o), r), 0), (Y.WI.test(o) || Y.WI.test(s)) && (t[a] += "%")) : t[a] = o)
                }(e.rotate || n.rotate) && (t.rotate = (0, T.C)(e.rotate || 0, n.rotate || 0, r))
              }(s, a, this.latestValues, r, c, h)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = r
            }, this.mixTargetDelta(0)
          }
          startAnimation(t) {
            var e, n;
            this.notifyListeners("animationStart"), null === (e = this.currentAnimation) || void 0 === e || e.stop(), this.resumingFrom && (null === (n = this.resumingFrom.currentAnimation) || void 0 === n || n.stop()), this.pendingAnimation && (c.Qz.update(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = c.du.update((() => {
              ot.C.hasAnimatedSinceResize = !0, this.currentAnimation = function(t, e, n = {}) {
                const r = (0, bt.Y)(t) ? t : (0, yt.w)(t);
                return r.start((0, $.c)("", r, e, n)), {
                  stop: () => r.stop(),
                  isAnimating: () => r.isAnimating()
                }
              }(0, 1e3, {
                ...t,
                onUpdate: e => {
                  var n;
                  this.mixTargetDelta(e), null === (n = t.onUpdate) || void 0 === n || n.call(t, e)
                },
                onComplete: () => {
                  var e;
                  null === (e = t.onComplete) || void 0 === e || e.call(t), this.completeAnimation()
                }
              }), this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation), this.pendingAnimation = void 0
            }))
          }
          completeAnimation() {
            var t;
            this.resumingFrom && (this.resumingFrom.currentAnimation = void 0, this.resumingFrom.preserveOpacity = void 0), null === (t = this.getStack()) || void 0 === t || t.exitAnimationComplete(), this.resumingFrom = this.currentAnimation = this.animationValues = void 0, this.notifyListeners("animationComplete")
          }
          finishAnimation() {
            var t;
            this.currentAnimation && (null === (t = this.mixTargetDelta) || void 0 === t || t.call(this, 1e3), this.currentAnimation.stop()), this.completeAnimation()
          }
          applyTransformsToTarget() {
            const t = this.getLead();
            let {
              targetWithTransforms: e,
              target: n,
              layout: r,
              latestValues: i
            } = t;
            if (e && n && r) {
              if (this !== t && this.layout && r && ye(this.options.animationType, this.layout.layoutBox, r.layoutBox)) {
                n = this.target || (0, G.kZ)();
                const e = A(this.layout.layoutBox.x);
                n.x.min = t.target.x.min, n.x.max = n.x.min + e;
                const r = A(this.layout.layoutBox.y);
                n.y.min = t.target.y.min, n.y.max = n.y.min + r
              }
              It(e, n), (0, Ft.aA)(e, i), D(this.projectionDeltaWithTransform, this.layoutCorrected, e, i)
            }
          }
          registerSharedNode(t, e) {
            var n, r, i;
            this.sharedNodes.has(t) || this.sharedNodes.set(t, new Ut), this.sharedNodes.get(t).add(e), e.promote({
              transition: null === (n = e.options.initialPromotionConfig) || void 0 === n ? void 0 : n.transition,
              preserveFollowOpacity: null === (i = null === (r = e.options.initialPromotionConfig) || void 0 === r ? void 0 : r.shouldPreserveFollowOpacity) || void 0 === i ? void 0 : i.call(r, e)
            })
          }
          isLead() {
            const t = this.getStack();
            return !t || t.lead === this
          }
          getLead() {
            var t;
            const {
              layoutId: e
            } = this.options;
            return e && (null === (t = this.getStack()) || void 0 === t ? void 0 : t.lead) || this
          }
          getPrevLead() {
            var t;
            const {
              layoutId: e
            } = this.options;
            return e ? null === (t = this.getStack()) || void 0 === t ? void 0 : t.prevLead : void 0
          }
          getStack() {
            const {
              layoutId: t
            } = this.options;
            if (t) return this.root.sharedNodes.get(t)
          }
          promote({
            needsReset: t,
            transition: e,
            preserveFollowOpacity: n
          } = {}) {
            const r = this.getStack();
            r && r.promote(this, n), t && (this.projectionDelta = void 0, this.needsReset = !0), e && this.setOptions({
              transition: e
            })
          }
          relegate() {
            const t = this.getStack();
            return !!t && t.relegate(this)
          }
          resetRotation() {
            const {
              visualElement: t
            } = this.options;
            if (!t) return;
            let e = !1;
            const {
              latestValues: n
            } = t;
            if ((n.rotate || n.rotateX || n.rotateY || n.rotateZ) && (e = !0), !e) return;
            const r = {};
            for (let e = 0; e < Jt.length; e++) {
              const i = "rotate" + Jt[e];
              n[i] && (r[i] = n[i], t.setStaticValue(i, 0))
            }
            null == t || t.render();
            for (const e in r) t.setStaticValue(e, r[e]);
            t.scheduleRender()
          }
          getProjectionStyles(t = {}) {
            var e, n, r;
            const i = {};
            if (!this.instance || this.isSVG) return i;
            if (!this.isVisible) return {
              visibility: "hidden"
            };
            i.visibility = "";
            const a = null === (e = this.options.visualElement) || void 0 === e ? void 0 : e.getProps().transformTemplate;
            if (this.needsReset) return this.needsReset = !1, i.opacity = "", i.pointerEvents = (0, Xt.I)(t.pointerEvents) || "", i.transform = a ? a(this.latestValues, "") : "none", i;
            const s = this.getLead();
            if (!this.projectionDelta || !this.layout || !s.target) {
              const e = {};
              return this.options.layoutId && (e.opacity = void 0 !== this.latestValues.opacity ? this.latestValues.opacity : 1, e.pointerEvents = (0, Xt.I)(t.pointerEvents) || ""), this.hasProjected && !(0, Yt.Ml)(this.latestValues) && (e.transform = a ? a({}, "") : "none", this.hasProjected = !1), e
            }
            const o = s.animationValues || s.latestValues;
            this.applyTransformsToTarget(), i.transform = qt(this.projectionDeltaWithTransform, this.treeScale, o), a && (i.transform = a(o, i.transform));
            const {
              x: l,
              y: u
            } = this.projectionDelta;
            i.transformOrigin = `${100*l.origin}% ${100*u.origin}% 0`, s.animationValues ? i.opacity = s === this ? null !== (r = null !== (n = o.opacity) && void 0 !== n ? n : this.latestValues.opacity) && void 0 !== r ? r : 1 : this.preserveOpacity ? this.latestValues.opacity : o.opacityExit : i.opacity = s === this ? void 0 !== o.opacity ? o.opacity : "" : void 0 !== o.opacityExit ? o.opacityExit : 0;
            for (const t in dt.K) {
              if (void 0 === o[t]) continue;
              const {
                correct: e,
                applyTo: n
              } = dt.K[t], r = e(o[t], s);
              if (n) {
                const t = n.length;
                for (let e = 0; e < t; e++) i[n[e]] = r
              } else i[t] = r
            }
            return this.options.layoutId && (i.pointerEvents = s === this ? (0, Xt.I)(t.pointerEvents) || "" : "none"), i
          }
          clearSnapshot() {
            this.resumeFrom = this.snapshot = void 0
          }
          resetTree() {
            this.root.nodes.forEach((t => {
              var e;
              return null === (e = t.currentAnimation) || void 0 === e ? void 0 : e.stop()
            })), this.root.nodes.forEach(ae), this.root.sharedNodes.clear()
          }
        }
      }

      function ee(t) {
        t.updateLayout()
      }

      function ne(t) {
        var e, n, r;
        const i = (null === (e = t.resumeFrom) || void 0 === e ? void 0 : e.snapshot) || t.snapshot;
        if (t.isLead() && t.layout && i && t.hasListeners("didUpdate")) {
          const {
            layoutBox: e,
            measuredBox: n
          } = t.layout, {
            animationType: r
          } = t.options, a = i.source !== t.layout.source;
          "size" === r ? H((t => {
            const n = a ? i.measuredBox[t] : i.layoutBox[t],
              r = A(n);
            n.min = e[t].min, n.max = n.min + r
          })) : ye(r, i.layoutBox, e) && H((t => {
            const n = a ? i.measuredBox[t] : i.layoutBox[t],
              r = A(e[t]);
            n.max = n.min + r
          }));
          const s = (0, G.Ww)();
          D(s, e, i.layoutBox);
          const o = (0, G.Ww)();
          a ? D(o, t.applyTransform(n, !0), i.measuredBox) : D(o, e, i.layoutBox);
          const l = !zt(s);
          let u = !1;
          if (!t.resumeFrom) {
            const n = t.getClosestProjectingParent();
            if (n && !n.resumeFrom) {
              const {
                snapshot: t,
                layout: r
              } = n;
              if (t && r) {
                const n = (0, G.kZ)();
                O(n, i.layoutBox, t.layoutBox);
                const a = (0, G.kZ)();
                O(a, e, r.layoutBox), Gt(n, a) || (u = !0)
              }
            }
          }
          t.notifyListeners("didUpdate", {
            layout: e,
            snapshot: i,
            delta: o,
            layoutDelta: s,
            hasLayoutChanged: l,
            hasRelativeTargetChanged: u
          })
        } else t.isLead() && (null === (r = (n = t.options).onExitComplete) || void 0 === r || r.call(n));
        t.options.transition = void 0
      }

      function re(t) {
        t.isProjectionDirty || (t.isProjectionDirty = Boolean(t.parent && t.parent.isProjectionDirty)), t.isTransformDirty || (t.isTransformDirty = Boolean(t.parent && t.parent.isTransformDirty))
      }

      function ie(t) {
        t.clearSnapshot()
      }

      function ae(t) {
        t.clearMeasurements()
      }

      function se(t) {
        const {
          visualElement: e
        } = t.options;
        (null == e ? void 0 : e.getProps().onBeforeLayoutMeasure) && e.notify("BeforeLayoutMeasure"), t.resetTransform()
      }

      function oe(t) {
        t.finishAnimation(), t.targetDelta = t.relativeTarget = t.target = void 0
      }

      function le(t) {
        t.resolveTargetDelta()
      }

      function ue(t) {
        t.calcProjection()
      }

      function he(t) {
        t.resetRotation()
      }

      function ce(t) {
        t.removeLeadSnapshot()
      }

      function pe(t, e, n) {
        t.translate = (0, T.C)(e.translate, 0, n), t.scale = (0, T.C)(e.scale, 1, n), t.origin = e.origin, t.originPoint = e.originPoint
      }

      function fe(t, e, n, r) {
        t.min = (0, T.C)(e.min, n.min, r), t.max = (0, T.C)(e.max, n.max, r)
      }

      function de(t) {
        return t.animationValues && void 0 !== t.animationValues.opacityExit
      }
      const me = {
        duration: .45,
        ease: [.4, 0, .1, 1]
      };

      function ve(t, e) {
        let n = t.root;
        for (let e = t.path.length - 1; e >= 0; e--)
          if (Boolean(t.path[e].instance)) {
            n = t.path[e];
            break
          } const r = (n && n !== t.root ? n.instance : document).querySelector(`[data-projection-id="${e}"]`);
        r && t.mount(r, !0)
      }

      function ge(t) {
        t.min = Math.round(t.min), t.max = Math.round(t.max)
      }

      function ye(t, e, n) {
        return "position" === t || "preserve-aspect" === t && !k(Ht(e), Ht(n), .2)
      }
      const be = te({
          attachResizeListener: (t, e) => (0, q.y)(t, "resize", e),
          measureScroll: () => ({
            x: document.documentElement.scrollLeft || document.body.scrollLeft,
            y: document.documentElement.scrollTop || document.body.scrollTop
          }),
          checkIsScrollRoot: () => !0
        }),
        xe = {
          current: void 0
        },
        Se = te({
          measureScroll: t => ({
            x: t.scrollLeft,
            y: t.scrollTop
          }),
          defaultParent: () => {
            if (!xe.current) {
              const t = new be(0, {});
              t.mount(window), t.setOptions({
                layoutScroll: !0
              }), xe.current = t
            }
            return xe.current
          },
          resetTransform: (t, e) => {
            t.style.transform = void 0 !== e ? e : "none"
          },
          checkIsScrollRoot: t => Boolean("fixed" === window.getComputedStyle(t).position)
        }),
        Ee = {
          ...s.w,
          ...a.g,
          ...nt,
          ...gt
        },
        Pe = (0, r.y)(((t, e) => (0, i.G)(t, e, Ee, rt.U, Se)))
    },
    59256: (t, e, n) => {
      "use strict";
      n.d(e, {
        k: () => r
      });
      const r = t => t.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()
    },
    52468: (t, e, n) => {
      "use strict";
      n.d(e, {
        G: () => F
      });
      var r = n(29180),
        i = n(51664),
        a = n(39960),
        s = n(26364),
        o = n(26896);
      const l = () => ({
        style: {},
        transform: {},
        transformKeys: [],
        transformOrigin: {},
        vars: {}
      });

      function u(t, e, n) {
        for (const r in e)(0, s.Y)(e[r]) || (0, a.e)(r, n) || (t[r] = e[r])
      }

      function h(t, e, n) {
        const r = {},
          a = function(t, e, n) {
            const r = {};
            return u(r, t.style || {}, t), Object.assign(r, function({
              transformTemplate: t
            }, e, n) {
              return (0, i.useMemo)((() => {
                const r = l();
                return (0, o.q)(r, e, {
                  enableHardwareAcceleration: !n
                }, t), Object.assign({}, r.vars, r.style)
              }), [e])
            }(t, e, n)), t.transformValues ? t.transformValues(r) : r
          }(t, e, n);
        return t.drag && !1 !== t.dragListener && (r.draggable = !1, a.userSelect = a.WebkitUserSelect = a.WebkitTouchCallout = "none", a.touchAction = !0 === t.drag ? "none" : "pan-" + ("x" === t.drag ? "y" : "x")), r.style = a, r
      }
      const c = new Set(["initial", "style", "values", "variants", "transition", "transformTemplate", "transformValues", "custom", "inherit", "layout", "layoutId", "layoutDependency", "onLayoutAnimationStart", "onLayoutAnimationComplete", "onLayoutMeasure", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "drag", "dragControls", "dragListener", "dragConstraints", "dragDirectionLock", "dragSnapToOrigin", "_dragX", "_dragY", "dragElastic", "dragMomentum", "dragPropagation", "dragTransition", "onHoverStart", "onHoverEnd", "layoutScroll", "whileInView", "onViewportEnter", "onViewportLeave", "viewport", "whileTap", "onTap", "onTapStart", "onTapCancel", "animate", "exit", "variants", "whileHover", "whileTap", "whileFocus", "whileDrag", "whileInView", "onPan", "onPanStart", "onPanSessionStart", "onPanEnd"]);

      function p(t) {
        return c.has(t)
      }
      let f = t => !p(t);
      try {
        (d = require("@emotion/is-prop-valid").default) && (f = t => t.startsWith("on") ? !p(t) : d(t))
      } catch (t) {}
      var d, m = n(15384);
      const v = () => ({
        ...l(),
        attrs: {}
      });
      var g = n(27336);

      function y(t, e, n, r) {
        const a = (0, i.useMemo)((() => {
          const n = v();
          return (0, m.m)(n, e, {
            enableHardwareAcceleration: !1
          }, (0, g.s)(r), t.transformTemplate), {
            ...n.attrs,
            style: {
              ...n.style
            }
          }
        }), [e]);
        if (t.style) {
          const e = {};
          u(e, t.style, t), a.style = {
            ...e,
            ...a.style
          }
        }
        return a
      }

      function b(t = !1) {
        return (e, n, a, s, {
          latestValues: o
        }, l) => {
          const u = ((0, r.C)(e) ? y : h)(n, o, l, e),
            c = function(t, e, n) {
              const r = {};
              for (const i in t)(f(i) || !0 === n && p(i) || !e && !p(i) || t.draggable && i.startsWith("onDrag")) && (r[i] = t[i]);
              return r
            }(n, "string" == typeof e, t),
            d = {
              ...c,
              ...u,
              ref: s
            };
          return a && (d["data-projection-id"] = a), (0, i.createElement)(e, d)
        }
      }
      var x = n(90388),
        S = n(30720),
        E = n(17216),
        P = n(92216),
        C = n(93456),
        w = n(28552),
        M = n(46e3),
        T = n(68312),
        A = n(82912);
      const k = t => (e, n) => {
        const r = (0, i.useContext)(T.i),
          a = (0, i.useContext)(P.i),
          s = () => function({
            scrapeMotionValuesFromProps: t,
            createRenderState: e,
            onMount: n
          }, r, i, a) {
            const s = {
              latestValues: _(r, i, a, t),
              renderState: e()
            };
            return n && (s.mount = t => n(r, t, s)), s
          }(t, e, r, a);
        return n ? s() : (0, w._)(s)
      };

      function _(t, e, n, r) {
        const i = {},
          a = r(t);
        for (const t in a) i[t] = (0, M.I)(a[t]);
        let {
          initial: s,
          animate: o
        } = t;
        const l = (0, A.K)(t),
          u = (0, A.U)(t);
        e && u && !l && !1 !== t.inherit && (void 0 === s && (s = e.initial), void 0 === o && (o = e.animate));
        let h = !!n && !1 === n.initial;
        h = h || !1 === s;
        const c = h ? o : s;
        return c && "boolean" != typeof c && !(0, E.M)(c) && (Array.isArray(c) ? c : [c]).forEach((e => {
          const n = (0, C.Q)(t, e);
          if (!n) return;
          const {
            transitionEnd: r,
            transition: a,
            ...s
          } = n;
          for (const t in s) {
            let e = s[t];
            Array.isArray(e) && (e = e[h ? e.length - 1 : 0]), null !== e && (i[t] = e)
          }
          for (const t in r) i[t] = r[t]
        })), i
      }
      const D = {
          useVisualState: k({
            scrapeMotionValuesFromProps: S.s,
            createRenderState: v,
            onMount: (t, e, {
              renderState: n,
              latestValues: r
            }) => {
              try {
                n.dimensions = "function" == typeof e.getBBox ? e.getBBox() : e.getBoundingClientRect()
              } catch (t) {
                n.dimensions = {
                  x: 0,
                  y: 0,
                  width: 0,
                  height: 0
                }
              }(0, m.m)(n, r, {
                enableHardwareAcceleration: !1
              }, (0, g.s)(e.tagName), t.transformTemplate), (0, x.H)(e, n)
            }
          })
        },
        I = {
          useVisualState: k({
            scrapeMotionValuesFromProps: n(65324).s,
            createRenderState: l
          })
        };

      function F(t, {
        forwardMotionProps: e = !1
      }, n, i, a) {
        return {
          ...(0, r.C)(t) ? D : I,
          preloadedFeatures: n,
          useRender: b(e),
          createVisualElement: i,
          projectionNodeConstructor: a,
          Component: t
        }
      }
    },
    72996: (t, e, n) => {
      "use strict";
      n.d(e, {
        CO: () => a,
        eE: () => l
      });
      var r = n(97064);

      function i(t) {
        return "string" == typeof t && t.startsWith("var(--")
      }
      const a = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/,
        s = 4;

      function o(t, e, n = 1) {
        (0, r.O)(n <= s, `Max CSS variable fallback depth detected in property "${t}". This may indicate a circular fallback dependency.`);
        const [l, u] = function(t) {
          const e = a.exec(t);
          if (!e) return [, ];
          const [, n, r] = e;
          return [n, r]
        }(t);
        if (!l) return;
        const h = window.getComputedStyle(e).getPropertyValue(l);
        return h ? h.trim() : i(u) ? o(u, e, n + 1) : u
      }

      function l(t, {
        ...e
      }, n) {
        const r = t.current;
        if (!(r instanceof Element)) return {
          target: e,
          transitionEnd: n
        };
        n && (n = {
          ...n
        }), t.values.forEach((t => {
          const e = t.get();
          if (!i(e)) return;
          const n = o(e, r);
          n && t.set(n)
        }));
        for (const t in e) {
          const a = e[t];
          if (!i(a)) continue;
          const s = o(a, r);
          s && (e[t] = s, n && void 0 === n[t] && (n[t] = a))
        }
        return {
          target: e,
          transitionEnd: n
        }
      }
    },
    10192: (t, e, n) => {
      "use strict";

      function r(t) {
        return t.startsWith("--")
      }
      n.d(e, {
        U: () => r
      })
    },
    29180: (t, e, n) => {
      "use strict";
      n.d(e, {
        C: () => i
      });
      const r = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "switch", "symbol", "svg", "text", "tspan", "use", "view"];

      function i(t) {
        return "string" == typeof t && !t.includes("-") && !!(r.indexOf(t) > -1 || /[A-Z]/.test(t))
      }
    },
    41080: (t, e, n) => {
      "use strict";
      n.d(e, {
        S: () => s
      });
      var r = n(67700),
        i = n(24488),
        a = n(31992);

      function s(t, e) {
        var n;
        let s = (0, a.k)(t);
        return s !== i.I && (s = r.c), null === (n = s.getAnimatableNone) || void 0 === n ? void 0 : n.call(s, e)
      }
    },
    31992: (t, e, n) => {
      "use strict";
      n.d(e, {
        k: () => s
      });
      var r = n(69032),
        i = n(24488);
      const a = {
          ...n(82904).i,
          color: r.I,
          backgroundColor: r.I,
          outlineColor: r.I,
          fill: r.I,
          stroke: r.I,
          borderColor: r.I,
          borderTopColor: r.I,
          borderRightColor: r.I,
          borderBottomColor: r.I,
          borderLeftColor: r.I,
          filter: i.I,
          WebkitFilter: i.I
        },
        s = t => a[t]
    },
    18308: (t, e, n) => {
      "use strict";
      n.d(e, {
        q: () => s,
        C: () => o
      });
      var r = n(78976),
        i = n(45852),
        a = n(75520);
      const s = [r.CQ, i.px, i.WI, i.oh, i.vw, i.vh, {
          test: t => "auto" === t,
          parse: t => t
        }],
        o = t => s.find((0, a.o)(t))
    },
    82904: (t, e, n) => {
      "use strict";
      n.d(e, {
        i: () => s
      });
      var r = n(78976),
        i = n(45852);
      const a = {
          ...r.CQ,
          transform: Math.round
        },
        s = {
          borderWidth: i.px,
          borderTopWidth: i.px,
          borderRightWidth: i.px,
          borderBottomWidth: i.px,
          borderLeftWidth: i.px,
          borderRadius: i.px,
          radius: i.px,
          borderTopLeftRadius: i.px,
          borderTopRightRadius: i.px,
          borderBottomRightRadius: i.px,
          borderBottomLeftRadius: i.px,
          width: i.px,
          maxWidth: i.px,
          height: i.px,
          maxHeight: i.px,
          size: i.px,
          top: i.px,
          right: i.px,
          bottom: i.px,
          left: i.px,
          padding: i.px,
          paddingTop: i.px,
          paddingRight: i.px,
          paddingBottom: i.px,
          paddingLeft: i.px,
          margin: i.px,
          marginTop: i.px,
          marginRight: i.px,
          marginBottom: i.px,
          marginLeft: i.px,
          rotate: i.oh,
          rotateX: i.oh,
          rotateY: i.oh,
          rotateZ: i.oh,
          scale: r.aU,
          scaleX: r.aU,
          scaleY: r.aU,
          scaleZ: r.aU,
          skew: i.oh,
          skewX: i.oh,
          skewY: i.oh,
          distance: i.px,
          translateX: i.px,
          translateY: i.px,
          translateZ: i.px,
          x: i.px,
          y: i.px,
          z: i.px,
          perspective: i.px,
          transformPerspective: i.px,
          opacity: r.W4,
          originX: i._e,
          originY: i._e,
          originZ: i.px,
          zIndex: a,
          fillOpacity: r.W4,
          strokeOpacity: r.W4,
          numOctaves: a
        }
    },
    75520: (t, e, n) => {
      "use strict";
      n.d(e, {
        o: () => r
      });
      const r = t => e => e.test(t)
    },
    26896: (t, e, n) => {
      "use strict";
      n.d(e, {
        q: () => u
      });
      var r = n(97096);
      const i = {
          x: "translateX",
          y: "translateY",
          z: "translateZ",
          transformPerspective: "perspective"
        },
        a = (t, e) => r.I.indexOf(t) - r.I.indexOf(e);
      var s = n(10192);
      const o = (t, e) => e && "number" == typeof t ? e.transform(t) : t;
      var l = n(82904);

      function u(t, e, n, u) {
        const {
          style: h,
          vars: c,
          transform: p,
          transformKeys: f,
          transformOrigin: d
        } = t;
        f.length = 0;
        let m = !1,
          v = !1,
          g = !0;
        for (const t in e) {
          const n = e[t];
          if ((0, s.U)(t)) {
            c[t] = n;
            continue
          }
          const i = l.i[t],
            a = o(n, i);
          if (r._.has(t)) {
            if (m = !0, p[t] = a, f.push(t), !g) continue;
            n !== (i.default || 0) && (g = !1)
          } else t.startsWith("origin") ? (v = !0, d[t] = a) : h[t] = a
        }
        if (e.transform || (m || u ? h.transform = function({
            transform: t,
            transformKeys: e
          }, {
            enableHardwareAcceleration: n = !0,
            allowTransformNone: r = !0
          }, s, o) {
            let l = "";
            e.sort(a);
            for (const n of e) l += `${i[n]||n}(${t[n]}) `;
            return n && !t.z && (l += "translateZ(0)"), l = l.trim(), o ? l = o(t, s ? "" : l) : r && s && (l = "none"), l
          }(t, n, g, u) : h.transform && (h.transform = "none")), v) {
          const {
            originX: t = "50%",
            originY: e = "50%",
            originZ: n = 0
          } = d;
          h.transformOrigin = `${t} ${e} ${n}`
        }
      }
    },
    20132: (t, e, n) => {
      "use strict";

      function r(t, {
        style: e,
        vars: n
      }, r, i) {
        Object.assign(t.style, e, i && i.getProjectionStyles(r));
        for (const e in n) t.style.setProperty(e, n[e])
      }
      n.d(e, {
        K: () => r
      })
    },
    65324: (t, e, n) => {
      "use strict";
      n.d(e, {
        s: () => a
      });
      var r = n(39960),
        i = n(26364);

      function a(t) {
        const {
          style: e
        } = t, n = {};
        for (const a in e)((0, i.Y)(e[a]) || (0, r.e)(a, t)) && (n[a] = e[a]);
        return n
      }
    },
    97096: (t, e, n) => {
      "use strict";
      n.d(e, {
        I: () => r,
        _: () => i
      });
      const r = ["transformPerspective", "x", "y", "z", "translateX", "translateY", "translateZ", "scale", "scaleX", "scaleY", "rotate", "rotateX", "rotateY", "rotateZ", "skew", "skewX", "skewY"],
        i = new Set(r)
    },
    15384: (t, e, n) => {
      "use strict";
      n.d(e, {
        m: () => l
      });
      var r = n(26896),
        i = n(45852);

      function a(t, e, n) {
        return "string" == typeof t ? t : i.px.transform(e + n * t)
      }
      const s = {
          offset: "stroke-dashoffset",
          array: "stroke-dasharray"
        },
        o = {
          offset: "strokeDashoffset",
          array: "strokeDasharray"
        };

      function l(t, {
        attrX: e,
        attrY: n,
        originX: l,
        originY: u,
        pathLength: h,
        pathSpacing: c = 1,
        pathOffset: p = 0,
        ...f
      }, d, m, v) {
        if ((0, r.q)(t, f, d, v), m) return void(t.style.viewBox && (t.attrs.viewBox = t.style.viewBox));
        t.attrs = t.style, t.style = {};
        const {
          attrs: g,
          style: y,
          dimensions: b
        } = t;
        g.transform && (b && (y.transform = g.transform), delete g.transform), b && (void 0 !== l || void 0 !== u || y.transform) && (y.transformOrigin = function(t, e, n) {
          return `${a(e,t.x,t.width)} ${a(n,t.y,t.height)}`
        }(b, void 0 !== l ? l : .5, void 0 !== u ? u : .5)), void 0 !== e && (g.x = e), void 0 !== n && (g.y = n), void 0 !== h && function(t, e, n = 1, r = 0, a = !0) {
          t.pathLength = 1;
          const l = a ? s : o;
          t[l.offset] = i.px.transform(-r);
          const u = i.px.transform(e),
            h = i.px.transform(n);
          t[l.array] = `${u} ${h}`
        }(g, h, c, p, !1)
      }
    },
    45923: (t, e, n) => {
      "use strict";
      n.d(e, {
        K: () => r
      });
      const r = new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength", "startOffset", "textLength", "lengthAdjust"])
    },
    27336: (t, e, n) => {
      "use strict";
      n.d(e, {
        s: () => r
      });
      const r = t => "string" == typeof t && "svg" === t.toLowerCase()
    },
    90388: (t, e, n) => {
      "use strict";
      n.d(e, {
        H: () => s
      });
      var r = n(59256),
        i = n(20132),
        a = n(45923);

      function s(t, e, n, s) {
        (0, i.K)(t, e, void 0, s);
        for (const n in e.attrs) t.setAttribute(a.K.has(n) ? n : (0, r.k)(n), e.attrs[n])
      }
    },
    30720: (t, e, n) => {
      "use strict";
      n.d(e, {
        s: () => a
      });
      var r = n(26364),
        i = n(65324);

      function a(t) {
        const e = (0, i.s)(t);
        for (const n in t)(0, r.Y)(t[n]) && (e["x" === n || "y" === n ? "attr" + n.toUpperCase() : n] = t[n]);
        return e
      }
    },
    91892: (t, e, n) => {
      "use strict";
      n.d(e, {
        Kw: () => C,
        qq: () => S
      });
      var r = n(17216),
        i = n(11408);

      function a(t, e) {
        if (!Array.isArray(e)) return !1;
        const n = e.length;
        if (n !== t.length) return !1;
        for (let r = 0; r < n; r++)
          if (e[r] !== t[r]) return !1;
        return !0
      }
      var s = n(28480),
        o = n(62436),
        l = n(97096),
        u = n(85200),
        h = n(8600);
      const c = (t, e) => `${t}: ${e}`;

      function p(t, e) {
        const {
          MotionAppearAnimations: n
        } = window, r = c(t, l._.has(e) ? "transform" : e), i = n && n.get(r);
        return i ? (h.du.render((() => {
          try {
            i.cancel(), n.delete(r)
          } catch (t) {}
        })), i.currentTime || 0) : 0
      }
      const f = "data-" + (0, n(59256).k)("framerAppearId");
      var d = n(93428);

      function m(t, e, n = {}) {
        var r;
        const i = (0, o.K)(t, e, n.custom);
        let {
          transition: a = t.getDefaultTransition() || {}
        } = i || {};
        n.transitionOverride && (a = n.transitionOverride);
        const s = i ? () => v(t, i, n) : () => Promise.resolve(),
          l = (null === (r = t.variantChildren) || void 0 === r ? void 0 : r.size) ? (r = 0) => {
            const {
              delayChildren: i = 0,
              staggerChildren: s,
              staggerDirection: o
            } = a;
            return function(t, e, n = 0, r = 0, i = 1, a) {
              const s = [],
                o = (t.variantChildren.size - 1) * r,
                l = 1 === i ? (t = 0) => t * r : (t = 0) => o - t * r;
              return Array.from(t.variantChildren).sort(g).forEach(((t, r) => {
                s.push(m(t, e, {
                  ...a,
                  delay: n + l(r)
                }).then((() => t.notify("AnimationComplete", e))))
              })), Promise.all(s)
            }(t, e, i + r, s, o, n)
          } : () => Promise.resolve(),
          {
            when: u
          } = a;
        if (u) {
          const [t, e] = "beforeChildren" === u ? [s, l] : [l, s];
          return t().then(e)
        }
        return Promise.all([s(), l(n.delay)])
      }

      function v(t, e, {
        delay: n = 0,
        transitionOverride: r,
        type: i
      } = {}) {
        var a;
        let {
          transition: o = t.getDefaultTransition(),
          transitionEnd: h,
          ...c
        } = t.makeTargetAnimatable(e);
        const m = t.getValue("willChange");
        r && (o = r);
        const v = [],
          g = i && (null === (a = t.animationState) || void 0 === a ? void 0 : a.getState()[i]);
        for (const e in c) {
          const r = t.getValue(e),
            i = c[e];
          if (!r || void 0 === i || g && y(g, e)) continue;
          let a = {
            delay: n,
            elapsed: 0,
            ...o
          };
          if (t.shouldReduceMotion && l._.has(e) && (a = {
              ...a,
              type: !1,
              delay: 0
            }), !r.hasAnimated) {
            const n = t.getProps()[f];
            n && (a.elapsed = p(n, e))
          }
          let s = r.start((0, d.c)(e, r, i, a));
          (0, u.u)(m) && (m.add(e), s = s.then((() => m.remove(e)))), v.push(s)
        }
        return Promise.all(v).then((() => {
          h && (0, s.OE)(t, h)
        }))
      }

      function g(t, e) {
        return t.sortNodePosition(e)
      }

      function y({
        protectedKeys: t,
        needsAnimating: e
      }, n) {
        const r = t.hasOwnProperty(n) && !0 !== e[n];
        return e[n] = !1, r
      }
      var b = n(29955),
        x = n(19856);
      const S = [x.w.Animate, x.w.InView, x.w.Focus, x.w.Hover, x.w.Tap, x.w.Drag, x.w.Exit],
        E = [...S].reverse(),
        P = S.length;

      function C(t) {
        let e = function(t) {
          return e => Promise.all(e.map((({
            animation: e,
            options: n
          }) => function(t, e, n = {}) {
            let r;
            if (t.notify("AnimationStart", e), Array.isArray(e)) {
              const i = e.map((e => m(t, e, n)));
              r = Promise.all(i)
            } else if ("string" == typeof e) r = m(t, e, n);
            else {
              const i = "function" == typeof e ? (0, o.K)(t, e, n.custom) : e;
              r = v(t, i, n)
            }
            return r.then((() => t.notify("AnimationComplete", e)))
          }(t, e, n))))
        }(t);
        const n = {
          [x.w.Animate]: w(!0),
          [x.w.InView]: w(),
          [x.w.Hover]: w(),
          [x.w.Tap]: w(),
          [x.w.Drag]: w(),
          [x.w.Focus]: w(),
          [x.w.Exit]: w()
        };
        let s = !0;
        const l = (e, n) => {
          const r = (0, o.K)(t, n);
          if (r) {
            const {
              transition: t,
              transitionEnd: n,
              ...i
            } = r;
            e = {
              ...e,
              ...i,
              ...n
            }
          }
          return e
        };

        function u(o, u) {
          const h = t.getProps(),
            c = t.getVariantContext(!0) || {},
            p = [],
            f = new Set;
          let d = {},
            m = 1 / 0;
          for (let e = 0; e < P; e++) {
            const y = E[e],
              x = n[y],
              S = void 0 !== h[y] ? h[y] : c[y],
              P = (0, b.o)(S),
              C = y === u ? x.isActive : null;
            !1 === C && (m = e);
            let w = S === c[y] && S !== h[y] && P;
            if (w && s && t.manuallyAnimateOnMount && (w = !1), x.protectedKeys = {
                ...d
              }, !x.isActive && null === C || !S && !x.prevProp || (0, r.M)(S) || "boolean" == typeof S) continue;
            const M = (v = x.prevProp, "string" == typeof(g = S) ? g !== v : !!Array.isArray(g) && !a(g, v));
            let T = M || y === u && x.isActive && !w && P || e > m && P;
            const A = Array.isArray(S) ? S : [S];
            let k = A.reduce(l, {});
            !1 === C && (k = {});
            const {
              prevResolvedValues: _ = {}
            } = x, D = {
              ..._,
              ...k
            }, I = t => {
              T = !0, f.delete(t), x.needsAnimating[t] = !0
            };
            for (const t in D) {
              const e = k[t],
                n = _[t];
              d.hasOwnProperty(t) || (e !== n ? (0, i.U)(e) && (0, i.U)(n) ? !a(e, n) || M ? I(t) : x.protectedKeys[t] = !0 : void 0 !== e ? I(t) : f.add(t) : void 0 !== e && f.has(t) ? I(t) : x.protectedKeys[t] = !0)
            }
            x.prevProp = S, x.prevResolvedValues = k, x.isActive && (d = {
              ...d,
              ...k
            }), s && t.blockInitialAnimation && (T = !1), T && !w && p.push(...A.map((t => ({
              animation: t,
              options: {
                type: y,
                ...o
              }
            }))))
          }
          var v, g;
          if (f.size) {
            const e = {};
            f.forEach((n => {
              const r = t.getBaseTarget(n);
              void 0 !== r && (e[n] = r)
            })), p.push({
              animation: e
            })
          }
          let y = Boolean(p.length);
          return s && !1 === h.initial && !t.manuallyAnimateOnMount && (y = !1), s = !1, y ? e(p) : Promise.resolve()
        }
        return {
          animateChanges: u,
          setActive: function(e, r, i) {
            var a;
            if (n[e].isActive === r) return Promise.resolve();
            null === (a = t.variantChildren) || void 0 === a || a.forEach((t => {
              var n;
              return null === (n = t.animationState) || void 0 === n ? void 0 : n.setActive(e, r)
            })), n[e].isActive = r;
            const s = u(i, e);
            for (const t in n) n[t].protectedKeys = {};
            return s
          },
          setAnimateFunction: function(n) {
            e = n(t)
          },
          getState: () => n
        }
      }

      function w(t = !1) {
        return {
          isActive: t,
          protectedKeys: {},
          needsAnimating: {},
          prevResolvedValues: {}
        }
      }
    },
    82912: (t, e, n) => {
      "use strict";
      n.d(e, {
        K: () => s,
        U: () => o
      });
      var r = n(17216),
        i = n(29955);
      const a = ["initial", "animate", "exit", "whileHover", "whileDrag", "whileTap", "whileFocus", "whileInView"];

      function s(t) {
        return (0, r.M)(t.animate) || a.some((e => (0, i.o)(t[e])))
      }

      function o(t) {
        return Boolean(s(t) || t.variants)
      }
    },
    29955: (t, e, n) => {
      "use strict";

      function r(t) {
        return "string" == typeof t || Array.isArray(t)
      }
      n.d(e, {
        o: () => r
      })
    },
    62436: (t, e, n) => {
      "use strict";
      n.d(e, {
        K: () => i
      });
      var r = n(93456);

      function i(t, e, n) {
        const i = t.getProps();
        return (0, r.Q)(i, e, void 0 !== n ? n : i.custom, function(t) {
          const e = {};
          return t.values.forEach(((t, n) => e[n] = t.get())), e
        }(t), function(t) {
          const e = {};
          return t.values.forEach(((t, n) => e[n] = t.getVelocity())), e
        }(t))
      }
    },
    93456: (t, e, n) => {
      "use strict";

      function r(t, e, n, r = {}, i = {}) {
        return "function" == typeof e && (e = e(void 0 !== n ? n : t.custom, r, i)), "string" == typeof e && (e = t.variants && t.variants[e]), "function" == typeof e && (e = e(void 0 !== n ? n : t.custom, r, i)), e
      }
      n.d(e, {
        Q: () => r
      })
    },
    28480: (t, e, n) => {
      "use strict";
      n.d(e, {
        AH: () => g,
        iK: () => b,
        OE: () => v
      });
      const r = t => /^\-?\d*\.?\d+$/.test(t),
        i = t => /^0[^.\s]+$/.test(t);
      var a = n(37240),
        s = n(63016),
        o = n(67700),
        l = n(41080),
        u = n(69032),
        h = n(18308),
        c = n(75520);
      const p = [...h.q, u.I, o.c],
        f = t => p.find((0, c.o)(t));
      var d = n(62436);

      function m(t, e, n) {
        t.hasValue(e) ? t.getValue(e).set(n) : t.addValue(e, (0, s.w)(n))
      }

      function v(t, e) {
        const n = (0, d.K)(t, e);
        let {
          transitionEnd: r = {},
          transition: i = {},
          ...s
        } = n ? t.makeTargetAnimatable(n, !1) : {};
        s = {
          ...s,
          ...r
        };
        for (const e in s) m(t, e, (0, a.y)(s[e]))
      }

      function g(t, e, n) {
        var a, u;
        const h = Object.keys(e).filter((e => !t.hasValue(e))),
          c = h.length;
        if (c)
          for (let p = 0; p < c; p++) {
            const c = h[p],
              d = e[c];
            let m = null;
            Array.isArray(d) && (m = d[0]), null === m && (m = null !== (u = null !== (a = n[c]) && void 0 !== a ? a : t.readValue(c)) && void 0 !== u ? u : e[c]), null != m && ("string" == typeof m && (r(m) || i(m)) ? m = parseFloat(m) : !f(m) && o.c.test(d) && (m = (0, l.S)(c, d)), t.addValue(c, (0, s.w)(m, {
              owner: t
            })), void 0 === n[c] && (n[c] = m), null !== m && t.setBaseTarget(c, m))
          }
      }

      function y(t, e) {
        if (e) return (e[t] || e.default || e).from
      }

      function b(t, e, n) {
        var r;
        const i = {};
        for (const a in t) {
          const t = y(a, e);
          i[a] = void 0 !== t ? t : null === (r = n.getValue(a)) || void 0 === r ? void 0 : r.get()
        }
        return i
      }
    },
    19856: (t, e, n) => {
      "use strict";
      var r;
      n.d(e, {
          w: () => r
        }),
        function(t) {
          t.Animate = "animate", t.Hover = "whileHover", t.Tap = "whileTap", t.Drag = "whileDrag", t.Focus = "whileFocus", t.InView = "whileInView", t.Exit = "exit"
        }(r || (r = {}))
    },
    14628: (t, e, n) => {
      "use strict";

      function r(t, e) {
        -1 === t.indexOf(e) && t.push(e)
      }

      function i(t, e) {
        const n = t.indexOf(e);
        n > -1 && t.splice(n, 1)
      }
      n.d(e, {
        sd: () => i,
        wV: () => r
      })
    },
    85584: (t, e, n) => {
      "use strict";
      n.d(e, {
        q: () => r
      });
      const r = (t, e, n) => Math.min(Math.max(n, t), e)
    },
    512: (t, e, n) => {
      "use strict";
      n.d(e, {
        o: () => i
      });
      var r = n(8600);

      function i(t, e) {
        const n = performance.now(),
          i = ({
            timestamp: a
          }) => {
            const s = a - n;
            s >= e && (r.Qz.read(i), t(s - e))
          };
        return r.du.read(i, !0), () => r.Qz.read(i)
      }
    },
    70520: (t, e, n) => {
      "use strict";
      n.d(e, {
        u: () => r
      });
      const r = "undefined" != typeof document
    },
    83840: (t, e, n) => {
      "use strict";

      function r(t) {
        return "object" == typeof t && Object.prototype.hasOwnProperty.call(t, "current")
      }
      n.d(e, {
        U: () => r
      })
    },
    6764: (t, e, n) => {
      "use strict";
      n.d(e, {
        C: () => r
      });
      const r = (t, e, n) => -n * t + n * e + t
    },
    97768: (t, e, n) => {
      "use strict";
      n.d(e, {
        K: () => r
      });
      const r = t => t
    },
    51672: (t, e, n) => {
      "use strict";
      n.d(e, {
        W: () => i
      });
      const r = (t, e) => n => e(t(n)),
        i = (...t) => t.reduce(r)
    },
    78243: (t, e, n) => {
      "use strict";
      n.d(e, {
        _: () => i
      });
      var r = n(44392);
      const i = (void 0 === r || r.env, "production")
    },
    67368: (t, e, n) => {
      "use strict";
      n.d(e, {
        o: () => r
      });
      const r = (t, e, n) => {
        const r = e - t;
        return 0 === r ? 1 : (n - t) / r
      }
    },
    37240: (t, e, n) => {
      "use strict";
      n.d(e, {
        O: () => i,
        y: () => a
      });
      var r = n(11408);
      const i = t => Boolean(t && "object" == typeof t && t.mix && t.toValue),
        a = t => (0, r.U)(t) ? t[t.length - 1] || 0 : t
    },
    14716: (t, e, n) => {
      "use strict";
      n.d(e, {
        _: () => i
      });
      var r = n(14628);
      class i {
        constructor() {
          this.subscriptions = []
        }
        add(t) {
          return (0, r.wV)(this.subscriptions, t), () => (0, r.sd)(this.subscriptions, t)
        }
        notify(t, e, n) {
          const r = this.subscriptions.length;
          if (r)
            if (1 === r) this.subscriptions[0](t, e, n);
            else
              for (let i = 0; i < r; i++) {
                const r = this.subscriptions[i];
                r && r(t, e, n)
              }
        }
        getSize() {
          return this.subscriptions.length
        }
        clear() {
          this.subscriptions.length = 0
        }
      }
    },
    99880: (t, e, n) => {
      "use strict";
      n.d(e, {
        c: () => r
      });
      const r = t => 1e3 * t
    },
    28552: (t, e, n) => {
      "use strict";
      n.d(e, {
        _: () => i
      });
      var r = n(51664);

      function i(t) {
        const e = (0, r.useRef)(null);
        return null === e.current && (e.current = t()), e.current
      }
    },
    76344: (t, e, n) => {
      "use strict";
      n.d(e, {
        u: () => i
      });
      var r = n(51664);

      function i(t) {
        return (0, r.useEffect)((() => () => t()), [])
      }
    },
    72216: (t, e, n) => {
      "use strict";

      function r(t, e) {
        return e ? t * (1e3 / e) : 0
      }
      n.d(e, {
        G: () => r
      })
    },
    63016: (t, e, n) => {
      "use strict";
      n.d(e, {
        w: () => l
      });
      var r = n(50900),
        i = n(8600),
        a = n(14716),
        s = n(72216);
      class o {
        constructor(t, e = {}) {
          var n;
          this.version = "7.10.3", this.timeDelta = 0, this.lastUpdated = 0, this.canTrackVelocity = !1, this.events = {}, this.updateAndNotify = (t, e = !0) => {
            this.prev = this.current, this.current = t;
            const {
              delta: n,
              timestamp: a
            } = r.frameData;
            this.lastUpdated !== a && (this.timeDelta = n, this.lastUpdated = a, i.du.postRender(this.scheduleVelocityCheck)), this.prev !== this.current && this.events.change && this.events.change.notify(this.current), this.events.velocityChange && this.events.velocityChange.notify(this.getVelocity()), e && this.events.renderRequest && this.events.renderRequest.notify(this.current)
          }, this.scheduleVelocityCheck = () => i.du.postRender(this.velocityCheck), this.velocityCheck = ({
            timestamp: t
          }) => {
            t !== this.lastUpdated && (this.prev = this.current, this.events.velocityChange && this.events.velocityChange.notify(this.getVelocity()))
          }, this.hasAnimated = !1, this.prev = this.current = t, this.canTrackVelocity = (n = this.current, !isNaN(parseFloat(n))), this.owner = e.owner
        }
        onChange(t) {
          return this.on("change", t)
        }
        on(t, e) {
          return this.events[t] || (this.events[t] = new a._), this.events[t].add(e)
        }
        clearListeners() {
          for (const t in this.events) this.events[t].clear()
        }
        attach(t) {
          this.passiveEffect = t
        }
        set(t, e = !0) {
          e && this.passiveEffect ? this.passiveEffect(t, this.updateAndNotify) : this.updateAndNotify(t, e)
        }
        setWithVelocity(t, e, n) {
          this.set(e), this.prev = t, this.timeDelta = n
        }
        get() {
          return this.current
        }
        getPrevious() {
          return this.prev
        }
        getVelocity() {
          return this.canTrackVelocity ? (0, s.G)(parseFloat(this.current) - parseFloat(this.prev), this.timeDelta) : 0
        }
        start(t) {
          return this.stop(), new Promise((e => {
            this.hasAnimated = !0, this.stopAnimation = t(e), this.events.animationStart && this.events.animationStart.notify()
          })).then((() => {
            this.events.animationComplete && this.events.animationComplete.notify(), this.clearAnimation()
          }))
        }
        stop() {
          this.stopAnimation && (this.stopAnimation(), this.events.animationCancel && this.events.animationCancel.notify()), this.clearAnimation()
        }
        isAnimating() {
          return !!this.stopAnimation
        }
        clearAnimation() {
          this.stopAnimation = null
        }
        destroy() {
          this.clearListeners(), this.stop()
        }
      }

      function l(t, e) {
        return new o(t, e)
      }
    },
    44776: (t, e, n) => {
      "use strict";
      n.d(e, {
        c: () => i
      });
      var r = n(70588);
      const i = {
        test: (0, n(34160).W)("#"),
        parse: function(t) {
          let e = "",
            n = "",
            r = "",
            i = "";
          return t.length > 5 ? (e = t.substring(1, 3), n = t.substring(3, 5), r = t.substring(5, 7), i = t.substring(7, 9)) : (e = t.substring(1, 2), n = t.substring(2, 3), r = t.substring(3, 4), i = t.substring(4, 5), e += e, n += n, r += r, i += i), {
            red: parseInt(e, 16),
            green: parseInt(n, 16),
            blue: parseInt(r, 16),
            alpha: i ? parseInt(i, 16) / 255 : 1
          }
        },
        transform: r.M.transform
      }
    },
    30440: (t, e, n) => {
      "use strict";
      n.d(e, {
        u: () => o
      });
      var r = n(78976),
        i = n(45852),
        a = n(91120),
        s = n(34160);
      const o = {
        test: (0, s.W)("hsl", "hue"),
        parse: (0, s.G)("hue", "saturation", "lightness"),
        transform: ({
          hue: t,
          saturation: e,
          lightness: n,
          alpha: s = 1
        }) => "hsla(" + Math.round(t) + ", " + i.WI.transform((0, a.Ok)(e)) + ", " + i.WI.transform((0, a.Ok)(n)) + ", " + (0, a.Ok)(r.W4.transform(s)) + ")"
      }
    },
    69032: (t, e, n) => {
      "use strict";
      n.d(e, {
        I: () => o
      });
      var r = n(91120),
        i = n(44776),
        a = n(30440),
        s = n(70588);
      const o = {
        test: t => s.M.test(t) || i.c.test(t) || a.u.test(t),
        parse: t => s.M.test(t) ? s.M.parse(t) : a.u.test(t) ? a.u.parse(t) : i.c.parse(t),
        transform: t => (0, r.ct)(t) ? t : t.hasOwnProperty("red") ? s.M.transform(t) : a.u.transform(t)
      }
    },
    70588: (t, e, n) => {
      "use strict";
      n.d(e, {
        M: () => l
      });
      var r = n(85584),
        i = n(78976),
        a = n(91120),
        s = n(34160);
      const o = {
          ...i.CQ,
          transform: t => Math.round((t => (0, r.q)(0, 255, t))(t))
        },
        l = {
          test: (0, s.W)("rgb", "red"),
          parse: (0, s.G)("red", "green", "blue"),
          transform: ({
            red: t,
            green: e,
            blue: n,
            alpha: r = 1
          }) => "rgba(" + o.transform(t) + ", " + o.transform(e) + ", " + o.transform(n) + ", " + (0, a.Ok)(i.W4.transform(r)) + ")"
        }
    },
    34160: (t, e, n) => {
      "use strict";
      n.d(e, {
        G: () => a,
        W: () => i
      });
      var r = n(91120);
      const i = (t, e) => n => Boolean((0, r.ct)(n) && r.CC.test(n) && n.startsWith(t) || e && Object.prototype.hasOwnProperty.call(n, e)),
        a = (t, e, n) => i => {
          if (!(0, r.ct)(i)) return i;
          const [a, s, o, l] = i.match(r.au);
          return {
            [t]: parseFloat(a),
            [e]: parseFloat(s),
            [n]: parseFloat(o),
            alpha: void 0 !== l ? parseFloat(l) : 1
          }
        }
    },
    24488: (t, e, n) => {
      "use strict";
      n.d(e, {
        I: () => l
      });
      var r = n(67700),
        i = n(91120);
      const a = new Set(["brightness", "contrast", "saturate", "opacity"]);

      function s(t) {
        const [e, n] = t.slice(0, -1).split("(");
        if ("drop-shadow" === e) return t;
        const [r] = n.match(i.au) || [];
        if (!r) return t;
        const s = n.replace(r, "");
        let o = a.has(e) ? 1 : 0;
        return r !== n && (o *= 100), e + "(" + o + s + ")"
      }
      const o = /([a-z-]*)\(.*?\)/g,
        l = {
          ...r.c,
          getAnimatableNone: t => {
            const e = t.match(o);
            return e ? e.map(s).join(" ") : t
          }
        }
    },
    67700: (t, e, n) => {
      "use strict";
      n.d(e, {
        Y: () => l,
        c: () => p
      });
      var r = n(69032),
        i = n(78976),
        a = n(91120);
      const s = "${c}",
        o = "${n}";

      function l(t) {
        "number" == typeof t && (t = `${t}`);
        const e = [];
        let n = 0,
          l = 0;
        const u = t.match(a.iO);
        u && (n = u.length, t = t.replace(a.iO, s), e.push(...u.map(r.I.parse)));
        const h = t.match(a.au);
        return h && (l = h.length, t = t.replace(a.au, o), e.push(...h.map(i.CQ.parse))), {
          values: e,
          numColors: n,
          numNumbers: l,
          tokenised: t
        }
      }

      function u(t) {
        return l(t).values
      }

      function h(t) {
        const {
          values: e,
          numColors: n,
          tokenised: i
        } = l(t), u = e.length;
        return t => {
          let e = i;
          for (let i = 0; i < u; i++) e = e.replace(i < n ? s : o, i < n ? r.I.transform(t[i]) : (0, a.Ok)(t[i]));
          return e
        }
      }
      const c = t => "number" == typeof t ? 0 : t,
        p = {
          test: function(t) {
            var e, n;
            return isNaN(t) && (0, a.ct)(t) && ((null === (e = t.match(a.au)) || void 0 === e ? void 0 : e.length) || 0) + ((null === (n = t.match(a.iO)) || void 0 === n ? void 0 : n.length) || 0) > 0
          },
          parse: u,
          createTransformer: h,
          getAnimatableNone: function(t) {
            const e = u(t);
            return h(t)(e.map(c))
          }
        }
    },
    78976: (t, e, n) => {
      "use strict";
      n.d(e, {
        CQ: () => i,
        W4: () => a,
        aU: () => s
      });
      var r = n(85584);
      const i = {
          test: t => "number" == typeof t,
          parse: parseFloat,
          transform: t => t
        },
        a = {
          ...i,
          transform: t => (0, r.q)(0, 1, t)
        },
        s = {
          ...i,
          default: 1
        }
    },
    45852: (t, e, n) => {
      "use strict";
      n.d(e, {
        WI: () => s,
        _e: () => h,
        oh: () => a,
        px: () => o,
        vh: () => l,
        vw: () => u
      });
      var r = n(91120);
      const i = t => ({
          test: e => (0, r.ct)(e) && e.endsWith(t) && 1 === e.split(" ").length,
          parse: parseFloat,
          transform: e => `${e}${t}`
        }),
        a = i("deg"),
        s = i("%"),
        o = i("px"),
        l = i("vh"),
        u = i("vw"),
        h = {
          ...s,
          parse: t => s.parse(t) / 100,
          transform: t => s.transform(100 * t)
        }
    },
    91120: (t, e, n) => {
      "use strict";
      n.d(e, {
        CC: () => s,
        Ok: () => r,
        au: () => i,
        ct: () => o,
        iO: () => a
      });
      const r = t => Math.round(1e5 * t) / 1e5,
        i = /(-)?([\d]*\.?[\d])+/g,
        a = /(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,
        s = /^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;

      function o(t) {
        return "string" == typeof t
      }
    },
    85200: (t, e, n) => {
      "use strict";
      n.d(e, {
        u: () => i
      });
      var r = n(26364);

      function i(t) {
        return Boolean((0, r.Y)(t) && t.add)
      }
    },
    26364: (t, e, n) => {
      "use strict";
      n.d(e, {
        Y: () => r
      });
      const r = t => !!(null == t ? void 0 : t.getVelocity)
    },
    46e3: (t, e, n) => {
      "use strict";
      n.d(e, {
        I: () => a
      });
      var r = n(37240),
        i = n(26364);

      function a(t) {
        const e = (0, i.Y)(t) ? t.get() : t;
        return (0, r.O)(e) ? e.toValue() : e
      }
    },
    37960: (t, e, n) => {
      "use strict";
      n.d(e, {
        Ws: () => c,
        cD: () => p
      });
      var r = n(51664),
        i = Object.defineProperty,
        a = (t, e, n) => (((t, e, n) => {
          e in t ? i(t, e, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: n
          }) : t[e] = n
        })(t, "symbol" != typeof e ? e + "" : e, n), n),
        s = new Map,
        o = new WeakMap,
        l = 0,
        u = void 0;

      function h(t, e, n = {}, r = u) {
        if (void 0 === window.IntersectionObserver && void 0 !== r) {
          const i = t.getBoundingClientRect();
          return e(r, {
            isIntersecting: r,
            target: t,
            intersectionRatio: "number" == typeof n.threshold ? n.threshold : 0,
            time: 0,
            boundingClientRect: i,
            intersectionRect: i,
            rootBounds: i
          }), () => {}
        }
        const {
          id: i,
          observer: a,
          elements: h
        } = function(t) {
          const e = function(t) {
            return Object.keys(t).sort().filter((e => void 0 !== t[e])).map((e => {
              return `${e}_${"root"===e?(n=t.root,n?(o.has(n)||(l+=1,o.set(n,l.toString())),o.get(n)):"0"):t[e]}`;
              var n
            })).toString()
          }(t);
          let n = s.get(e);
          if (!n) {
            const r = new Map;
            let i;
            const a = new IntersectionObserver((e => {
              e.forEach((e => {
                var n;
                const a = e.isIntersecting && i.some((t => e.intersectionRatio >= t));
                t.trackVisibility && void 0 === e.isVisible && (e.isVisible = a), null == (n = r.get(e.target)) || n.forEach((t => {
                  t(a, e)
                }))
              }))
            }), t);
            i = a.thresholds || (Array.isArray(t.threshold) ? t.threshold : [t.threshold || 0]), n = {
              id: e,
              observer: a,
              elements: r
            }, s.set(e, n)
          }
          return n
        }(n), c = h.get(t) || [];
        return h.has(t) || h.set(t, c), c.push(e), a.observe(t),
          function() {
            c.splice(c.indexOf(e), 1), 0 === c.length && (h.delete(t), a.unobserve(t)), 0 === h.size && (a.disconnect(), s.delete(i))
          }
      }
      var c = class extends r.Component {
        constructor(t) {
          super(t), a(this, "node", null), a(this, "_unobserveCb", null), a(this, "handleNode", (t => {
            this.node && (this.unobserve(), t || this.props.triggerOnce || this.props.skip || this.setState({
              inView: !!this.props.initialInView,
              entry: void 0
            })), this.node = t || null, this.observeNode()
          })), a(this, "handleChange", ((t, e) => {
            t && this.props.triggerOnce && this.unobserve(),
              function(t) {
                return "function" != typeof t.children
              }(this.props) || this.setState({
                inView: t,
                entry: e
              }), this.props.onChange && this.props.onChange(t, e)
          })), this.state = {
            inView: !!t.initialInView,
            entry: void 0
          }
        }
        componentDidMount() {
          this.unobserve(), this.observeNode()
        }
        componentDidUpdate(t) {
          t.rootMargin === this.props.rootMargin && t.root === this.props.root && t.threshold === this.props.threshold && t.skip === this.props.skip && t.trackVisibility === this.props.trackVisibility && t.delay === this.props.delay || (this.unobserve(), this.observeNode())
        }
        componentWillUnmount() {
          this.unobserve()
        }
        observeNode() {
          if (!this.node || this.props.skip) return;
          const {
            threshold: t,
            root: e,
            rootMargin: n,
            trackVisibility: r,
            delay: i,
            fallbackInView: a
          } = this.props;
          this._unobserveCb = h(this.node, this.handleChange, {
            threshold: t,
            root: e,
            rootMargin: n,
            trackVisibility: r,
            delay: i
          }, a)
        }
        unobserve() {
          this._unobserveCb && (this._unobserveCb(), this._unobserveCb = null)
        }
        render() {
          const {
            children: t
          } = this.props;
          if ("function" == typeof t) {
            const {
              inView: e,
              entry: n
            } = this.state;
            return t({
              inView: e,
              entry: n,
              ref: this.handleNode
            })
          }
          const {
            as: e,
            triggerOnce: n,
            threshold: i,
            root: a,
            rootMargin: s,
            onChange: o,
            skip: l,
            trackVisibility: u,
            delay: h,
            initialInView: c,
            fallbackInView: p,
            ...f
          } = this.props;
          return r.createElement(e || "div", {
            ref: this.handleNode,
            ...f
          }, t)
        }
      };

      function p({
        threshold: t,
        delay: e,
        trackVisibility: n,
        rootMargin: i,
        root: a,
        triggerOnce: s,
        skip: o,
        initialInView: l,
        fallbackInView: u,
        onChange: c
      } = {}) {
        var p;
        const [f, d] = r.useState(null), m = r.useRef(), [v, g] = r.useState({
          inView: !!l,
          entry: void 0
        });
        m.current = c, r.useEffect((() => {
          if (o || !f) return;
          let r;
          return r = h(f, ((t, e) => {
            g({
              inView: t,
              entry: e
            }), m.current && m.current(t, e), e.isIntersecting && s && r && (r(), r = void 0)
          }), {
            root: a,
            rootMargin: i,
            threshold: t,
            trackVisibility: n,
            delay: e
          }, u), () => {
            r && r()
          }
        }), [Array.isArray(t) ? t.toString() : t, f, a, i, s, o, n, u, e]);
        const y = null == (p = v.entry) ? void 0 : p.target,
          b = r.useRef();
        f || !y || s || o || b.current === y || (b.current = y, g({
          inView: !!l,
          entry: void 0
        }));
        const x = [d, v.inView, v.entry];
        return x.ref = x[0], x.inView = x[1], x.entry = x[2], x
      }
    },
    78048: t => {
      "use strict";
      t.exports = JSON.parse('[{"value":"AF","label":"افغانستان"},{"value":"AX","label":"Åland"},{"value":"AL","label":"Shqipëria"},{"value":"DZ","label":"الجزائر"},{"value":"AS","label":"American Samoa"},{"value":"AD","label":"Andorra"},{"value":"AO","label":"Angola"},{"value":"AI","label":"Anguilla"},{"value":"AQ","label":"Antarctica"},{"value":"AG","label":"Antigua and Barbuda"},{"value":"AR","label":"Argentina"},{"value":"AM","label":"Հայաստան"},{"value":"AW","label":"Aruba"},{"value":"AU","label":"Australia"},{"value":"AT","label":"Österreich"},{"value":"AZ","label":"Azərbaycan"},{"value":"BS","label":"Bahamas"},{"value":"BH","label":"‏البحرين"},{"value":"BD","label":"Bangladesh"},{"value":"BB","label":"Barbados"},{"value":"BY","label":"Белару́сь"},{"value":"BE","label":"België"},{"value":"BZ","label":"Belize"},{"value":"BJ","label":"Bénin"},{"value":"BM","label":"Bermuda"},{"value":"BT","label":"ʼbrug-yul"},{"value":"BO","label":"Bolivia"},{"value":"BQ","label":"Bonaire"},{"value":"BA","label":"Bosna i Hercegovina"},{"value":"BW","label":"Botswana"},{"value":"BV","label":"Bouvetøya"},{"value":"BR","label":"Brasil"},{"value":"IO","label":"British Indian Ocean Territory"},{"value":"BN","label":"Negara Brunei Darussalam"},{"value":"BG","label":"България"},{"value":"BF","label":"Burkina Faso"},{"value":"BI","label":"Burundi"},{"value":"KH","label":"Kâmpŭchéa"},{"value":"CM","label":"Cameroon"},{"value":"CA","label":"Canada"},{"value":"CV","label":"Cabo Verde"},{"value":"KY","label":"Cayman Islands"},{"value":"CF","label":"Ködörösêse tî Bêafrîka"},{"value":"TD","label":"Tchad"},{"value":"CL","label":"Chile"},{"value":"CN","label":"中国"},{"value":"CX","label":"Christmas Island"},{"value":"CC","label":"Cocos (Keeling) Islands"},{"value":"CO","label":"Colombia"},{"value":"KM","label":"Komori"},{"value":"CG","label":"République du Congo"},{"value":"CD","label":"République démocratique du Congo"},{"value":"CK","label":"Cook Islands"},{"value":"CR","label":"Costa Rica"},{"value":"CI","label":"Côte d\'Ivoire"},{"value":"HR","label":"Hrvatska"},{"value":"CU","label":"Cuba"},{"value":"CW","label":"Curaçao"},{"value":"CY","label":"Κύπρος"},{"value":"CZ","label":"Česká republika"},{"value":"DK","label":"Danmark"},{"value":"DJ","label":"Djibouti"},{"value":"DM","label":"Dominica"},{"value":"DO","label":"República Dominicana"},{"value":"EC","label":"Ecuador"},{"value":"EG","label":"مصر‎"},{"value":"SV","label":"El Salvador"},{"value":"GQ","label":"Guinea Ecuatorial"},{"value":"ER","label":"ኤርትራ"},{"value":"EE","label":"Eesti"},{"value":"ET","label":"ኢትዮጵያ"},{"value":"FK","label":"Falkland Islands"},{"value":"FO","label":"Føroyar"},{"value":"FJ","label":"Fiji"},{"value":"FI","label":"Suomi"},{"value":"FR","label":"France"},{"value":"GF","label":"Guyane française"},{"value":"PF","label":"Polynésie française"},{"value":"TF","label":"Territoire des Terres australes et antarctiques fr"},{"value":"GA","label":"Gabon"},{"value":"GM","label":"Gambia"},{"value":"GE","label":"საქართველო"},{"value":"DE","label":"Deutschland"},{"value":"GH","label":"Ghana"},{"value":"GI","label":"Gibraltar"},{"value":"GR","label":"Ελλάδα"},{"value":"GL","label":"Kalaallit Nunaat"},{"value":"GD","label":"Grenada"},{"value":"GP","label":"Guadeloupe"},{"value":"GU","label":"Guam"},{"value":"GT","label":"Guatemala"},{"value":"GG","label":"Guernsey"},{"value":"GN","label":"Guinée"},{"value":"GW","label":"Guiné-Bissau"},{"value":"GY","label":"Guyana"},{"value":"HT","label":"Haïti"},{"value":"HM","label":"Heard Island and McDonald Islands"},{"value":"VA","label":"Vaticano"},{"value":"HN","label":"Honduras"},{"value":"HK","label":"香港"},{"value":"HU","label":"Magyarország"},{"value":"IS","label":"Ísland"},{"value":"IN","label":"भारत"},{"value":"ID","label":"Indonesia"},{"value":"IR","label":"ایران"},{"value":"IQ","label":"العراق"},{"value":"IE","label":"Éire"},{"value":"IM","label":"Isle of Man"},{"value":"IL","label":"יִשְׂרָאֵל"},{"value":"IT","label":"Italia"},{"value":"JM","label":"Jamaica"},{"value":"JP","label":"日本"},{"value":"JE","label":"Jersey"},{"value":"JO","label":"الأردن"},{"value":"KZ","label":"Қазақстан"},{"value":"KE","label":"Kenya"},{"value":"KI","label":"Kiribati"},{"value":"KP","label":"북한"},{"value":"KR","label":"대한민국"},{"value":"KW","label":"الكويت"},{"value":"KG","label":"Кыргызстан"},{"value":"LA","label":"ສປປລາວ"},{"value":"LV","label":"Latvija"},{"value":"LB","label":"لبنان"},{"value":"LS","label":"Lesotho"},{"value":"LR","label":"Liberia"},{"value":"LY","label":"‏ليبيا"},{"value":"LI","label":"Liechtenstein"},{"value":"LT","label":"Lietuva"},{"value":"LU","label":"Luxembourg"},{"value":"MO","label":"澳門"},{"value":"MK","label":"Северна Македонија"},{"value":"MG","label":"Madagasikara"},{"value":"MW","label":"Malawi"},{"value":"MY","label":"Malaysia"},{"value":"MV","label":"Maldives"},{"value":"ML","label":"Mali"},{"value":"MT","label":"Malta"},{"value":"MH","label":"M̧ajeļ"},{"value":"MQ","label":"Martinique"},{"value":"MR","label":"موريتانيا"},{"value":"MU","label":"Maurice"},{"value":"YT","label":"Mayotte"},{"value":"MX","label":"México"},{"value":"FM","label":"Micronesia"},{"value":"MD","label":"Moldova"},{"value":"MC","label":"Monaco"},{"value":"MN","label":"Монгол улс"},{"value":"ME","label":"Црна Гора"},{"value":"MS","label":"Montserrat"},{"value":"MA","label":"المغرب"},{"value":"MZ","label":"Moçambique"},{"value":"MM","label":"မြန်မာ"},{"value":"NA","label":"Namibia"},{"value":"NR","label":"Nauru"},{"value":"NP","label":"नपल"},{"value":"NL","label":"Nederland"},{"value":"NC","label":"Nouvelle-Calédonie"},{"value":"NZ","label":"New Zealand"},{"value":"NI","label":"Nicaragua"},{"value":"NE","label":"Niger"},{"value":"NG","label":"Nigeria"},{"value":"NU","label":"Niuē"},{"value":"NF","label":"Norfolk Island"},{"value":"MP","label":"Northern Mariana Islands"},{"value":"NO","label":"Norge"},{"value":"OM","label":"عمان"},{"value":"PK","label":"Pakistan"},{"value":"PW","label":"Palau"},{"value":"PS","label":"فلسطين"},{"value":"PA","label":"Panamá"},{"value":"PG","label":"Papua Niugini"},{"value":"PY","label":"Paraguay"},{"value":"PE","label":"Perú"},{"value":"PH","label":"Pilipinas"},{"value":"PN","label":"Pitcairn Islands"},{"value":"PL","label":"Polska"},{"value":"PT","label":"Portugal"},{"value":"PR","label":"Puerto Rico"},{"value":"QA","label":"قطر"},{"value":"RE","label":"La Réunion"},{"value":"RO","label":"România"},{"value":"RU","label":"Россия"},{"value":"RW","label":"Rwanda"},{"value":"BL","label":"Saint-Barthélemy"},{"value":"SH","label":"Saint Helena"},{"value":"KN","label":"Saint Kitts and Nevis"},{"value":"LC","label":"Saint Lucia"},{"value":"MF","label":"Saint-Martin"},{"value":"PM","label":"Saint-Pierre-et-Miquelon"},{"value":"VC","label":"Saint Vincent and the Grenadines"},{"value":"WS","label":"Samoa"},{"value":"SM","label":"San Marino"},{"value":"ST","label":"São Tomé e Príncipe"},{"value":"SA","label":"العربية السعودية"},{"value":"SN","label":"Sénégal"},{"value":"RS","label":"Србија"},{"value":"SC","label":"Seychelles"},{"value":"SL","label":"Sierra Leone"},{"value":"SG","label":"Singapore"},{"value":"SX","label":"Sint Maarten"},{"value":"SK","label":"Slovensko"},{"value":"SI","label":"Slovenija"},{"value":"SB","label":"Solomon Islands"},{"value":"SO","label":"Soomaaliya"},{"value":"ZA","label":"South Africa"},{"value":"GS","label":"South Georgia"},{"value":"SS","label":"South Sudan"},{"value":"ES","label":"España"},{"value":"LK","label":"śrī laṃkāva"},{"value":"SD","label":"السودان"},{"value":"SR","label":"Suriname"},{"value":"SJ","label":"Svalbard og Jan Mayen"},{"value":"SZ","label":"Swaziland"},{"value":"SE","label":"Sverige"},{"value":"CH","label":"Schweiz"},{"value":"SY","label":"سوريا"},{"value":"TW","label":"臺灣"},{"value":"TJ","label":"Тоҷикистон"},{"value":"TZ","label":"Tanzania"},{"value":"TH","label":"ประเทศไทย"},{"value":"TL","label":"Timor-Leste"},{"value":"TG","label":"Togo"},{"value":"TK","label":"Tokelau"},{"value":"TO","label":"Tonga"},{"value":"TT","label":"Trinidad and Tobago"},{"value":"TN","label":"تونس"},{"value":"TR","label":"Türkiye"},{"value":"TM","label":"Türkmenistan"},{"value":"TC","label":"Turks and Caicos Islands"},{"value":"TV","label":"Tuvalu"},{"value":"UG","label":"Uganda"},{"value":"UA","label":"Україна"},{"value":"AE","label":"دولة الإمارات العربية المتحدة"},{"value":"GB","label":"United Kingdom"},{"value":"US","label":"United States"},{"value":"UM","label":"United States Minor Outlying Islands"},{"value":"UY","label":"Uruguay"},{"value":"UZ","label":"O‘zbekiston"},{"value":"VU","label":"Vanuatu"},{"value":"VE","label":"Venezuela"},{"value":"VN","label":"Việt Nam"},{"value":"VG","label":"British Virgin Islands"},{"value":"VI","label":"United States Virgin Islands"},{"value":"WF","label":"Wallis et Futuna"},{"value":"EH","label":"الصحراء الغربية"},{"value":"YE","label":"اليَمَن"},{"value":"ZM","label":"Zambia"},{"value":"ZW","label":"Zimbabwe"}]')
    },
    82396: t => {
      "use strict";
      t.exports = JSON.parse('[{"value":"AF","label":"Afghanistan"},{"value":"AX","label":"Åland Islands"},{"value":"AL","label":"Albania"},{"value":"DZ","label":"Algeria"},{"value":"AS","label":"American Samoa"},{"value":"AD","label":"Andorra"},{"value":"AO","label":"Angola"},{"value":"AI","label":"Anguilla"},{"value":"AQ","label":"Antarctica"},{"value":"AG","label":"Antigua and Barbuda"},{"value":"AR","label":"Argentina"},{"value":"AM","label":"Armenia"},{"value":"AW","label":"Aruba"},{"value":"AU","label":"Australia"},{"value":"AT","label":"Austria"},{"value":"AZ","label":"Azerbaijan"},{"value":"BS","label":"Bahamas"},{"value":"BH","label":"Bahrain"},{"value":"BD","label":"Bangladesh"},{"value":"BB","label":"Barbados"},{"value":"BY","label":"Belarus"},{"value":"BE","label":"Belgium"},{"value":"BZ","label":"Belize"},{"value":"BJ","label":"Benin"},{"value":"BM","label":"Bermuda"},{"value":"BT","label":"Bhutan"},{"value":"BO","label":"Bolivia, Plurinational State of"},{"value":"BQ","label":"Bonaire, Sint Eustatius and Saba"},{"value":"BA","label":"Bosnia and Herzegovina"},{"value":"BW","label":"Botswana"},{"value":"BV","label":"Bouvet Island"},{"value":"BR","label":"Brazil"},{"value":"IO","label":"British Indian Ocean Territory"},{"value":"BN","label":"Brunei Darussalam"},{"value":"BG","label":"Bulgaria"},{"value":"BF","label":"Burkina Faso"},{"value":"BI","label":"Burundi"},{"value":"CV","label":"Cabo Verde"},{"value":"KH","label":"Cambodia"},{"value":"CM","label":"Cameroon"},{"value":"CA","label":"Canada"},{"value":"KY","label":"Cayman Islands"},{"value":"CF","label":"Central African Republic"},{"value":"TD","label":"Chad"},{"value":"CL","label":"Chile"},{"value":"CN","label":"China"},{"value":"CX","label":"Christmas Island"},{"value":"CC","label":"Cocos (Keeling) Islands"},{"value":"CO","label":"Colombia"},{"value":"KM","label":"Comoros"},{"value":"CG","label":"Congo"},{"value":"CD","label":"Congo, Democratic Republic of the"},{"value":"CK","label":"Cook Islands"},{"value":"CR","label":"Costa Rica"},{"value":"HR","label":"Croatia"},{"value":"CU","label":"Cuba"},{"value":"CW","label":"Curaçao"},{"value":"CY","label":"Cyprus"},{"value":"CZ","label":"Czechia"},{"value":"CI","label":"Côte d\'Ivoire"},{"value":"DK","label":"Denmark"},{"value":"DJ","label":"Djibouti"},{"value":"DM","label":"Dominica"},{"value":"DO","label":"Dominican Republic"},{"value":"EC","label":"Ecuador"},{"value":"EG","label":"Egypt"},{"value":"SV","label":"El Salvador"},{"value":"GQ","label":"Equatorial Guinea"},{"value":"ER","label":"Eritrea"},{"value":"EE","label":"Estonia"},{"value":"SZ","label":"Eswatini"},{"value":"ET","label":"Ethiopia"},{"value":"FK","label":"Falkland Islands (Malvinas)"},{"value":"FO","label":"Faroe Islands"},{"value":"FJ","label":"Fiji"},{"value":"FI","label":"Finland"},{"value":"FR","label":"France"},{"value":"GF","label":"French Guiana"},{"value":"PF","label":"French Polynesia"},{"value":"TF","label":"French Southern Territories"},{"value":"GA","label":"Gabon"},{"value":"GM","label":"Gambia"},{"value":"GE","label":"Georgia"},{"value":"DE","label":"Germany"},{"value":"GH","label":"Ghana"},{"value":"GI","label":"Gibraltar"},{"value":"GR","label":"Greece"},{"value":"GL","label":"Greenland"},{"value":"GD","label":"Grenada"},{"value":"GP","label":"Guadeloupe"},{"value":"GU","label":"Guam"},{"value":"GT","label":"Guatemala"},{"value":"GG","label":"Guernsey"},{"value":"GN","label":"Guinea"},{"value":"GW","label":"Guinea-Bissau"},{"value":"GY","label":"Guyana"},{"value":"HT","label":"Haiti"},{"value":"HM","label":"Heard Island and McDonald Islands"},{"value":"VA","label":"Holy See"},{"value":"HN","label":"Honduras"},{"value":"HK","label":"Hong Kong"},{"value":"HU","label":"Hungary"},{"value":"IS","label":"Iceland"},{"value":"IN","label":"India"},{"value":"ID","label":"Indonesia"},{"value":"IR","label":"Iran, Islamic Republic of"},{"value":"IQ","label":"Iraq"},{"value":"IE","label":"Ireland"},{"value":"IM","label":"Isle of Man"},{"value":"IL","label":"Israel"},{"value":"IT","label":"Italy"},{"value":"JM","label":"Jamaica"},{"value":"JP","label":"Japan"},{"value":"JE","label":"Jersey"},{"value":"JO","label":"Jordan"},{"value":"KZ","label":"Kazakhstan"},{"value":"KE","label":"Kenya"},{"value":"KI","label":"Kiribati"},{"value":"KP","label":"Korea, Democratic People\'s Republic of"},{"value":"KR","label":"Korea, Republic of"},{"value":"KW","label":"Kuwait"},{"value":"KG","label":"Kyrgyzstan"},{"value":"LA","label":"Lao People\'s Democratic Republic"},{"value":"LV","label":"Latvia"},{"value":"LB","label":"Lebanon"},{"value":"LS","label":"Lesotho"},{"value":"LR","label":"Liberia"},{"value":"LY","label":"Libya"},{"value":"LI","label":"Liechtenstein"},{"value":"LT","label":"Lithuania"},{"value":"LU","label":"Luxembourg"},{"value":"MO","label":"Macao"},{"value":"MG","label":"Madagascar"},{"value":"MW","label":"Malawi"},{"value":"MY","label":"Malaysia"},{"value":"MV","label":"Maldives"},{"value":"ML","label":"Mali"},{"value":"MT","label":"Malta"},{"value":"MH","label":"Marshall Islands"},{"value":"MQ","label":"Martinique"},{"value":"MR","label":"Mauritania"},{"value":"MU","label":"Mauritius"},{"value":"YT","label":"Mayotte"},{"value":"MX","label":"Mexico"},{"value":"FM","label":"Micronesia, Federated States of"},{"value":"MD","label":"Moldova, Republic of"},{"value":"MC","label":"Monaco"},{"value":"MN","label":"Mongolia"},{"value":"ME","label":"Montenegro"},{"value":"MS","label":"Montserrat"},{"value":"MA","label":"Morocco"},{"value":"MZ","label":"Mozambique"},{"value":"MM","label":"Myanmar"},{"value":"NA","label":"Namibia"},{"value":"NR","label":"Nauru"},{"value":"NP","label":"Nepal"},{"value":"NL","label":"Netherlands"},{"value":"NC","label":"New Caledonia"},{"value":"NZ","label":"New Zealand"},{"value":"NI","label":"Nicaragua"},{"value":"NE","label":"Niger"},{"value":"NG","label":"Nigeria"},{"value":"NU","label":"Niue"},{"value":"NF","label":"Norfolk Island"},{"value":"MK","label":"North Macedonia"},{"value":"MP","label":"Northern Mariana Islands"},{"value":"NO","label":"Norway"},{"value":"OM","label":"Oman"},{"value":"PK","label":"Pakistan"},{"value":"PW","label":"Palau"},{"value":"PS","label":"Palestine, State of"},{"value":"PA","label":"Panama"},{"value":"PG","label":"Papua New Guinea"},{"value":"PY","label":"Paraguay"},{"value":"PE","label":"Peru"},{"value":"PH","label":"Philippines"},{"value":"PN","label":"Pitcairn"},{"value":"PL","label":"Poland"},{"value":"PT","label":"Portugal"},{"value":"PR","label":"Puerto Rico"},{"value":"QA","label":"Qatar"},{"value":"RO","label":"Romania"},{"value":"RU","label":"Russian Federation"},{"value":"RW","label":"Rwanda"},{"value":"RE","label":"Réunion"},{"value":"BL","label":"Saint Barthélemy"},{"value":"SH","label":"Saint Helena, Ascension and Tristan da Cunha"},{"value":"KN","label":"Saint Kitts and Nevis"},{"value":"LC","label":"Saint Lucia"},{"value":"MF","label":"Saint Martin (French part)"},{"value":"PM","label":"Saint Pierre and Miquelon"},{"value":"VC","label":"Saint Vincent and the Grenadines"},{"value":"WS","label":"Samoa"},{"value":"SM","label":"San Marino"},{"value":"ST","label":"Sao Tome and Principe"},{"value":"SA","label":"Saudi Arabia"},{"value":"SN","label":"Senegal"},{"value":"RS","label":"Serbia"},{"value":"SC","label":"Seychelles"},{"value":"SL","label":"Sierra Leone"},{"value":"SG","label":"Singapore"},{"value":"SX","label":"Sint Maarten (Dutch part)"},{"value":"SK","label":"Slovakia"},{"value":"SI","label":"Slovenia"},{"value":"SB","label":"Solomon Islands"},{"value":"SO","label":"Somalia"},{"value":"ZA","label":"South Africa"},{"value":"GS","label":"South Georgia and the South Sandwich Islands"},{"value":"SS","label":"South Sudan"},{"value":"ES","label":"Spain"},{"value":"LK","label":"Sri Lanka"},{"value":"SD","label":"Sudan"},{"value":"SR","label":"Suriname"},{"value":"SJ","label":"Svalbard and Jan Mayen"},{"value":"SE","label":"Sweden"},{"value":"CH","label":"Switzerland"},{"value":"SY","label":"Syrian Arab Republic"},{"value":"TW","label":"Taiwan, Province of China"},{"value":"TJ","label":"Tajikistan"},{"value":"TZ","label":"Tanzania, United Republic of"},{"value":"TH","label":"Thailand"},{"value":"TL","label":"Timor-Leste"},{"value":"TG","label":"Togo"},{"value":"TK","label":"Tokelau"},{"value":"TO","label":"Tonga"},{"value":"TT","label":"Trinidad and Tobago"},{"value":"TN","label":"Tunisia"},{"value":"TR","label":"Turkey"},{"value":"TM","label":"Turkmenistan"},{"value":"TC","label":"Turks and Caicos Islands"},{"value":"TV","label":"Tuvalu"},{"value":"UG","label":"Uganda"},{"value":"UA","label":"Ukraine"},{"value":"AE","label":"United Arab Emirates"},{"value":"GB","label":"United Kingdom"},{"value":"UM","label":"United States Minor Outlying Islands"},{"value":"US","label":"United States"},{"value":"UY","label":"Uruguay"},{"value":"UZ","label":"Uzbekistan"},{"value":"VU","label":"Vanuatu"},{"value":"VE","label":"Venezuela, Bolivarian Republic of"},{"value":"VN","label":"Viet Nam"},{"value":"VG","label":"Virgin Islands, British"},{"value":"VI","label":"Virgin Islands, U.S."},{"value":"WF","label":"Wallis and Futuna"},{"value":"EH","label":"Western Sahara"},{"value":"YE","label":"Yemen"},{"value":"ZM","label":"Zambia"},{"value":"ZW","label":"Zimbabwe"}]')
    }
  }
]);