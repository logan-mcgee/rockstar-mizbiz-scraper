! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "cf63b7f4-73b0-4bb5-a15f-667c694fde20", e._sentryDebugIdIdentifier = "sentry-dbid-cf63b7f4-73b0-4bb5-a15f-667c694fde20")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/modules-core-card",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_card = self.webpackChunk_rockstargames_modules_core_card || []).push([
  [924], {
    4072: (e, t, r) => {
      "use strict";
      r.d(t, {
        cp: () => _e
      });
      var i = r(1632),
        n = r(2795),
        a = r(1664),
        s = r.n(a),
        o = "data-focus-lock",
        l = "data-focus-lock-disabled";
      var u = {
          width: "1px",
          height: "0px",
          padding: 0,
          overflow: "hidden",
          position: "fixed",
          top: "1px",
          left: "1px"
        },
        c = function(e) {
          var t = e.children;
          return a.createElement(a.Fragment, null, a.createElement("div", {
            key: "guard-first",
            "data-focus-guard": !0,
            "data-focus-auto-guard": !0,
            style: u
          }), t, t && a.createElement("div", {
            key: "guard-last",
            "data-focus-guard": !0,
            "data-focus-auto-guard": !0,
            style: u
          }))
        };
      c.propTypes = {}, c.defaultProps = {
        children: null
      };
      var h = r(7672);

      function p(e) {
        return e
      }

      function d(e, t) {
        void 0 === t && (t = p);
        var r = [],
          i = !1;
        return {
          read: function() {
            if (i) throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
            return r.length ? r[r.length - 1] : e
          },
          useMedium: function(e) {
            var n = t(e, i);
            return r.push(n),
              function() {
                r = r.filter((function(e) {
                  return e !== n
                }))
              }
          },
          assignSyncMedium: function(e) {
            for (i = !0; r.length;) {
              var t = r;
              r = [], t.forEach(e)
            }
            r = {
              push: function(t) {
                return e(t)
              },
              filter: function() {
                return r
              }
            }
          },
          assignMedium: function(e) {
            i = !0;
            var t = [];
            if (r.length) {
              var n = r;
              r = [], n.forEach(e), t = r
            }
            var a = function() {
                var r = t;
                t = [], r.forEach(e)
              },
              s = function() {
                return Promise.resolve().then(a)
              };
            s(), r = {
              push: function(e) {
                t.push(e), s()
              },
              filter: function(e) {
                return t = t.filter(e), r
              }
            }
          }
        }
      }

      function f(e, t) {
        return void 0 === t && (t = p), d(e, t)
      }
      var m = f({}, (function(e) {
          return {
            target: e.target,
            currentTarget: e.currentTarget
          }
        })),
        v = f(),
        g = f(),
        y = function(e) {
          void 0 === e && (e = {});
          var t = d(null);
          return t.options = (0, h.C3)({
            async: !0,
            ssr: !1
          }, e), t
        }({
          async: !0
        }),
        b = [],
        S = a.forwardRef((function(e, t) {
          var r, i = a.useState(),
            s = i[0],
            c = i[1],
            h = a.useRef(),
            p = a.useRef(!1),
            d = a.useRef(null),
            f = e.children,
            g = e.disabled,
            S = e.noFocusGuards,
            x = e.persistentFocus,
            E = e.crossFrame,
            P = e.autoFocus,
            w = (e.allowTextSelection, e.group),
            C = e.className,
            T = e.whiteList,
            M = e.hasPositiveIndices,
            _ = e.shards,
            A = void 0 === _ ? b : _,
            k = e.as,
            I = void 0 === k ? "div" : k,
            D = e.lockProps,
            O = void 0 === D ? {} : D,
            F = e.sideCar,
            L = e.returnFocus,
            V = e.focusOptions,
            R = e.onActivation,
            B = e.onDeactivation,
            N = a.useState({})[0],
            z = a.useCallback((function() {
              d.current = d.current || document && document.activeElement, h.current && R && R(h.current), p.current = !0
            }), [R]),
            G = a.useCallback((function() {
              p.current = !1, B && B(h.current)
            }), [B]);
          (0, a.useEffect)((function() {
            g || (d.current = null)
          }), []);
          var j, H, W, q, $, U = a.useCallback((function(e) {
              var t = d.current;
              if (t && t.focus) {
                var r = "function" == typeof L ? L(t) : L;
                if (r) {
                  var i = "object" == typeof r ? r : void 0;
                  d.current = null, e ? Promise.resolve().then((function() {
                    return t.focus(i)
                  })) : t.focus(i)
                }
              }
            }), [L]),
            Y = a.useCallback((function(e) {
              p.current && m.useMedium(e)
            }), []),
            X = v.useMedium,
            K = a.useCallback((function(e) {
              h.current !== e && (h.current = e, c(e))
            }), []),
            Z = (0, n.c)(((r = {})[l] = g && "disabled", r[o] = w, r), O),
            J = !0 !== S,
            Q = J && "tail" !== S,
            ee = (j = [t, K], W = H || null, q = function(e) {
              return j.forEach((function(t) {
                return function(e, t) {
                  return "function" == typeof e ? e(t) : e && (e.current = t), e
                }(t, e)
              }))
            }, ($ = (0, a.useState)((function() {
              return {
                value: W,
                callback: q,
                facade: {
                  get current() {
                    return $.value
                  },
                  set current(e) {
                    var t = $.value;
                    t !== e && ($.value = e, $.callback(e, t))
                  }
                }
              }
            }))[0]).callback = q, $.facade);
          return a.createElement(a.Fragment, null, J && [a.createElement("div", {
            key: "guard-first",
            "data-focus-guard": !0,
            tabIndex: g ? -1 : 0,
            style: u
          }), M ? a.createElement("div", {
            key: "guard-nearest",
            "data-focus-guard": !0,
            tabIndex: g ? -1 : 1,
            style: u
          }) : null], !g && a.createElement(F, {
            id: N,
            sideCar: y,
            observed: s,
            disabled: g,
            persistentFocus: x,
            crossFrame: E,
            autoFocus: P,
            whiteList: T,
            shards: A,
            onActivation: z,
            onDeactivation: G,
            returnFocus: U,
            focusOptions: V
          }), a.createElement(I, (0, n.c)({
            ref: ee
          }, Z, {
            className: C,
            onBlur: X,
            onFocus: Y
          }), f), Q && a.createElement("div", {
            "data-focus-guard": !0,
            tabIndex: g ? -1 : 0,
            style: u
          }))
        }));
      S.propTypes = {}, S.defaultProps = {
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
      const x = S;
      var E = r(4848),
        P = r(2504);
      var w = function(e) {
          for (var t = Array(e.length), r = 0; r < e.length; ++r) t[r] = e[r];
          return t
        },
        C = function(e) {
          return Array.isArray(e) ? e : [e]
        },
        T = function(e) {
          return Array.isArray(e) ? e[0] : e
        },
        M = function(e) {
          return e.parentNode && e.parentNode.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? e.parentNode.host : e.parentNode
        },
        _ = function(e) {
          return e === document || e && e.nodeType === Node.DOCUMENT_NODE
        },
        A = function(e, t) {
          var r = e.get(t);
          if (void 0 !== r) return r;
          var i = function(e, t) {
            return !e || _(e) || ! function(e) {
              if (e.nodeType !== Node.ELEMENT_NODE) return !1;
              var t = window.getComputedStyle(e, null);
              return !(!t || !t.getPropertyValue || "none" !== t.getPropertyValue("display") && "hidden" !== t.getPropertyValue("visibility"))
            }(e) && t(M(e))
          }(t, A.bind(void 0, e));
          return e.set(t, i), i
        },
        k = function(e, t) {
          var r = e.get(t);
          if (void 0 !== r) return r;
          var i = function(e, t) {
            return !(e && !_(e)) || !!F(e) && t(M(e))
          }(t, k.bind(void 0, e));
          return e.set(t, i), i
        },
        I = function(e) {
          return e.dataset
        },
        D = function(e) {
          return "INPUT" === e.tagName
        },
        O = function(e) {
          return D(e) && "radio" === e.type
        },
        F = function(e) {
          var t = e.getAttribute("data-no-autofocus");
          return ![!0, "true", ""].includes(t)
        },
        L = function(e) {
          var t;
          return Boolean(e && (null === (t = I(e)) || void 0 === t ? void 0 : t.focusGuard))
        },
        V = function(e) {
          return !L(e)
        },
        R = function(e) {
          return Boolean(e)
        },
        B = function(e, t) {
          var r = e.tabIndex - t.tabIndex,
            i = e.index - t.index;
          if (r) {
            if (!e.tabIndex) return 1;
            if (!t.tabIndex) return -1
          }
          return r || i
        },
        N = function(e, t, r) {
          return w(e).map((function(e, t) {
            return {
              node: e,
              index: t,
              tabIndex: r && -1 === e.tabIndex ? (e.dataset || {}).focusGuard ? 0 : -1 : e.tabIndex
            }
          })).filter((function(e) {
            return !t || e.tabIndex >= 0
          })).sort(B)
        },
        z = ["button:enabled", "select:enabled", "textarea:enabled", "input:enabled", "a[href]", "area[href]", "summary", "iframe", "object", "embed", "audio[controls]", "video[controls]", "[tabindex]", "[contenteditable]", "[autofocus]"].join(","),
        G = "".concat(z, ", [data-focus-guard]"),
        j = function(e, t) {
          return w((e.shadowRoot || e).children).reduce((function(e, r) {
            return e.concat(r.matches(t ? G : z) ? [r] : [], j(r))
          }), [])
        },
        H = function(e, t) {
          return e.reduce((function(e, r) {
            var i, n = j(r, t),
              a = (i = []).concat.apply(i, n.map((function(e) {
                return function(e, t) {
                  var r;
                  return e instanceof HTMLIFrameElement && (null === (r = e.contentDocument) || void 0 === r ? void 0 : r.body) ? H([e.contentDocument.body], t) : [e]
                }(e, t)
              })));
            return e.concat(a, r.parentNode ? w(r.parentNode.querySelectorAll(z)).filter((function(e) {
              return e === r
            })) : [])
          }), [])
        },
        W = function(e, t) {
          return w(e).filter((function(e) {
            return A(t, e)
          })).filter((function(e) {
            return function(e) {
              return !((D(e) || function(e) {
                return "BUTTON" === e.tagName
              }(e)) && ("hidden" === e.type || e.disabled))
            }(e)
          }))
        },
        q = function(e, t) {
          return void 0 === t && (t = new Map), w(e).filter((function(e) {
            return k(t, e)
          }))
        },
        $ = function(e, t, r) {
          return N(W(H(e, r), t), !0, r)
        },
        U = function(e, t) {
          return N(W(H(e), t), !1)
        },
        Y = function(e, t) {
          return e.shadowRoot ? Y(e.shadowRoot, t) : !(void 0 === Object.getPrototypeOf(e).contains || !Object.getPrototypeOf(e).contains.call(e, t)) || w(e.children).some((function(e) {
            var r;
            if (e instanceof HTMLIFrameElement) {
              var i = null === (r = e.contentDocument) || void 0 === r ? void 0 : r.body;
              return !!i && Y(i, t)
            }
            return Y(e, t)
          }))
        },
        X = function(e) {
          if (void 0 === e && (e = document), e && e.activeElement) {
            var t = e.activeElement;
            return t.shadowRoot ? X(t.shadowRoot) : t instanceof HTMLIFrameElement && function(e) {
              try {
                return t.contentWindow.document
              } catch (e) {
                return
              }
            }() ? X(t.contentWindow.document) : t
          }
        },
        K = function(e) {
          return e.parentNode ? K(e.parentNode) : e
        },
        Z = function(e) {
          return C(e).filter(Boolean).reduce((function(e, t) {
            var r = t.getAttribute(o);
            return e.push.apply(e, r ? function(e) {
              for (var t = new Set, r = e.length, i = 0; i < r; i += 1)
                for (var n = i + 1; n < r; n += 1) {
                  var a = e[i].compareDocumentPosition(e[n]);
                  (a & Node.DOCUMENT_POSITION_CONTAINED_BY) > 0 && t.add(n), (a & Node.DOCUMENT_POSITION_CONTAINS) > 0 && t.add(i)
                }
              return e.filter((function(e, r) {
                return !t.has(r)
              }))
            }(w(K(t).querySelectorAll("[".concat(o, '="').concat(r, '"]:not([').concat(l, '="disabled"])')))) : [t]), e
          }), [])
        },
        J = function(e, t) {
          return void 0 === t && (t = X(T(e).ownerDocument)), !(!t || t.dataset && t.dataset.focusGuard) && Z(e).some((function(e) {
            return Y(e, t) || function(e, t) {
              return Boolean(w(e.querySelectorAll("iframe")).some((function(e) {
                return function(e, t) {
                  return e === t
                }(e, t)
              })))
            }(e, t)
          }))
        },
        Q = function(e, t) {
          return O(e) && e.name ? function(e, t) {
            return t.filter(O).filter((function(t) {
              return t.name === e.name
            })).filter((function(e) {
              return e.checked
            }))[0] || e
          }(e, t) : e
        },
        ee = function(e) {
          return e[0] && e.length > 1 ? Q(e[0], e) : e[0]
        },
        te = function(e, t) {
          return e.length > 1 ? e.indexOf(Q(e[t], e)) : t
        },
        re = "NEW_FOCUS",
        ie = function(e, t) {
          return void 0 === t && (t = []), t.push(e), e.parentNode && ie(e.parentNode.host || e.parentNode, t), t
        },
        ne = function(e, t) {
          for (var r = ie(e), i = ie(t), n = 0; n < r.length; n += 1) {
            var a = r[n];
            if (i.indexOf(a) >= 0) return a
          }
          return !1
        },
        ae = function(e, t, r) {
          var i = C(e),
            n = C(t),
            a = i[0],
            s = !1;
          return n.filter(Boolean).forEach((function(e) {
            s = ne(s || e, e) || s, r.filter(Boolean).forEach((function(e) {
              var t = ne(a, e);
              t && (s = !s || Y(t, s) ? t : ne(t, s))
            }))
          })), s
        },
        se = function(e, t) {
          var r, i, n, a, s, o, l = X(C(e).length > 0 ? document : T(e).ownerDocument),
            u = Z(e).filter(V),
            c = ae(l || e, e, u),
            h = new Map,
            p = U(u, h),
            d = $(u, h).filter((function(e) {
              var t = e.node;
              return V(t)
            }));
          if (d[0] || (d = p)[0]) {
            var f, m, v, g = U([c], h).map((function(e) {
                return e.node
              })),
              y = (f = g, m = d, v = new Map, m.forEach((function(e) {
                return v.set(e.node, e)
              })), f.map((function(e) {
                return v.get(e)
              })).filter(R)),
              b = y.map((function(e) {
                return e.node
              })),
              S = function(e, t, r, i) {
                var n = e.length,
                  a = e[0],
                  s = e[n - 1],
                  o = L(r);
                if (!(r && e.indexOf(r) >= 0)) {
                  var l, u, c = void 0 !== r ? t.indexOf(r) : -1,
                    h = i ? t.indexOf(i) : c,
                    p = i ? e.indexOf(i) : -1,
                    d = c - h,
                    f = t.indexOf(a),
                    m = t.indexOf(s),
                    v = (l = t, u = new Set, l.forEach((function(e) {
                      return u.add(Q(e, l))
                    })), l.filter((function(e) {
                      return u.has(e)
                    }))),
                    g = (void 0 !== r ? v.indexOf(r) : -1) - (i ? v.indexOf(i) : c),
                    y = te(e, 0),
                    b = te(e, n - 1);
                  return -1 === c || -1 === p ? re : !d && p >= 0 ? p : c <= f && o && Math.abs(d) > 1 ? b : c >= m && o && Math.abs(d) > 1 ? y : d && Math.abs(g) > 1 ? p : c <= f ? b : c > m ? y : d ? Math.abs(d) > 1 ? p : (n + p + d) % n : void 0
                }
              }(b, g, l, t);
            if (S === re) {
              var x = (r = p, i = b, n = function(e, t) {
                return e.reduce((function(e, r) {
                  return e.concat(function(e, t) {
                    return W((r = e.querySelectorAll("[".concat("data-autofocus-inside", "]")), w(r).map((function(e) {
                      return H([e])
                    })).reduce((function(e, t) {
                      return e.concat(t)
                    }), [])), t);
                    var r
                  }(r, t))
                }), [])
              }(u, h), s = r.map((function(e) {
                return e.node
              })), (o = q(s.filter((a = n, function(e) {
                var t, r = null === (t = I(e)) || void 0 === t ? void 0 : t.autofocus;
                return e.autofocus || void 0 !== r && "false" !== r || a.indexOf(e) >= 0
              })))) && o.length ? ee(o) : ee(q(i)));
              return x ? {
                node: x
              } : void console.warn("focus-lock: cannot find any node to move focus into")
            }
            return void 0 === S ? S : y[S]
          }
        },
        oe = 0,
        le = !1,
        ue = function(e, t, r) {
          void 0 === r && (r = {});
          var i, n, a = se(e, t);
          if (!le && a) {
            if (oe > 2) return console.error("FocusLock: focus-fighting detected. Only one focus management system could be active. See https://github.com/theKashey/focus-lock/#focus-fighting"), le = !0, void setTimeout((function() {
              le = !1
            }), 1);
            oe++, i = a.node, n = r.focusOptions, "focus" in i && i.focus(n), "contentWindow" in i && i.contentWindow && i.contentWindow.focus(), oe--
          }
        };

      function ce(e) {
        setTimeout(e, 1)
      }
      var he = null,
        pe = null,
        de = null,
        fe = !1,
        me = function() {
          return !0
        };

      function ve(e, t, r, i) {
        var n = null,
          a = e;
        do {
          var s = i[a];
          if (s.guard) s.node.dataset.focusAutoGuard && (n = s);
          else {
            if (!s.lockItem) break;
            if (a !== e) return;
            n = null
          }
        } while ((a += r) !== t);
        n && (n.node.tabIndex = 0)
      }
      var ge = function(e) {
          return e && "current" in e ? e.current : e
        },
        ye = function e(t, r, i) {
          return r && (r.host === t && (!r.activeElement || i.contains(r.activeElement)) || r.parentNode && e(t, r.parentNode, i))
        },
        be = function() {
          var e, t, r, i, n, a, s, o = !1;
          if (he) {
            var l = he,
              u = l.observed,
              c = l.persistentFocus,
              h = l.autoFocus,
              p = l.shards,
              d = l.crossFrame,
              f = l.focusOptions,
              m = u || de && de.portaledElement,
              v = document && document.activeElement;
            if (m) {
              var g = [m].concat(p.map(ge).filter(Boolean));
              if (v && ! function(e) {
                  return (he.whiteList || me)(e)
                }(v) || (c || (d ? Boolean(fe) : "meanwhile" === fe) || !(document && document.activeElement === document.body || function(e) {
                  void 0 === e && (e = document);
                  var t = X(e);
                  return !!t && w(e.querySelectorAll("[".concat("data-no-focus-lock", "]"))).some((function(e) {
                    return Y(e, t)
                  }))
                }()) || !pe && h) && (m && !(J(g) || v && function(e, t) {
                  return t.some((function(t) {
                    return ye(e, t, t)
                  }))
                }(v, g) || (s = v, de && de.portaledElement === s)) && (document && !pe && v && !h ? (v.blur && v.blur(), document.body.focus()) : (o = ue(g, pe, {
                  focusOptions: f
                }), de = {})), fe = !1, pe = document && document.activeElement), document) {
                var y = document && document.activeElement,
                  b = (t = Z(e = g).filter(V), r = ae(e, e, t), i = new Map, n = $([r], i, !0), a = $(t, i).filter((function(e) {
                    var t = e.node;
                    return V(t)
                  })).map((function(e) {
                    return e.node
                  })), n.map((function(e) {
                    var t = e.node;
                    return {
                      node: t,
                      index: e.index,
                      lockItem: a.indexOf(t) >= 0,
                      guard: L(t)
                    }
                  }))),
                  S = b.map((function(e) {
                    return e.node
                  })).indexOf(y);
                S > -1 && (b.filter((function(e) {
                  var t = e.guard,
                    r = e.node;
                  return t && r.dataset.focusAutoGuard
                })).forEach((function(e) {
                  return e.node.removeAttribute("tabIndex")
                })), ve(S, b.length, 1, b), ve(S, -1, -1, b))
              }
            }
          }
          return o
        },
        Se = function(e) {
          be() && e && (e.stopPropagation(), e.preventDefault())
        },
        xe = function() {
          return ce(be)
        },
        Ee = function() {
          fe = "just", ce((function() {
            fe = "meanwhile"
          }))
        };
      m.assignSyncMedium((function(e) {
        var t = e.target,
          r = e.currentTarget;
        r.contains(t) || (de = {
          observerNode: r,
          portaledElement: t
        })
      })), v.assignMedium(xe), g.assignMedium((function(e) {
        return e({
          moveFocusInside: ue,
          focusInside: J
        })
      }));
      const Pe = (we = function(e) {
        return e.filter((function(e) {
          return !e.disabled
        }))
      }, Ce = function(e) {
        var t = e.slice(-1)[0];
        t && !he && (document.addEventListener("focusin", Se), document.addEventListener("focusout", xe), window.addEventListener("blur", Ee));
        var r = he,
          i = r && t && t.id === r.id;
        he = t, r && !i && (r.onDeactivation(), e.filter((function(e) {
          return e.id === r.id
        })).length || r.returnFocus(!t)), t ? (pe = null, i && r.observed === t.observed || t.onActivation(), be(), ce(be)) : (document.removeEventListener("focusin", Se), document.removeEventListener("focusout", xe), window.removeEventListener("blur", Ee), pe = null)
      }, function(e) {
        var t, r = [];

        function i() {
          t = we(r.map((function(e) {
            return e.props
          }))), Ce(t)
        }
        var n = function(n) {
          var a, o;

          function l() {
            return n.apply(this, arguments) || this
          }
          o = n, (a = l).prototype = Object.create(o.prototype), a.prototype.constructor = a, (0, E.c)(a, o), l.peek = function() {
            return t
          };
          var u = l.prototype;
          return u.componentDidMount = function() {
            r.push(this), i()
          }, u.componentDidUpdate = function() {
            i()
          }, u.componentWillUnmount = function() {
            var e = r.indexOf(this);
            r.splice(e, 1), i()
          }, u.render = function() {
            return s().createElement(e, this.props)
          }, l
        }(a.PureComponent);
        return (0, P.c)(n, "displayName", "SideEffect(" + function(e) {
          return e.displayName || e.name || "Component"
        }(e) + ")"), n
      })((function() {
        return null
      }));
      var we, Ce, Te = a.forwardRef((function(e, t) {
          return a.createElement(x, (0, n.c)({
            sideCar: Pe,
            ref: t
          }, e))
        })),
        Me = x.propTypes || {};
      Me.sideCar, (0, i.c)(Me, ["sideCar"]), Te.propTypes = {};
      const _e = Te
    },
    544: (e, t, r) => {
      "use strict";
      var i = p(r(7032)),
        n = p(r(4616)),
        a = p(r(5908)),
        s = p(r(272)),
        o = p(r(4136)),
        l = p(r(2392)),
        u = p(r(1664)),
        c = p(r(1424)),
        h = p(r(6352));

      function p(e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }
      var d = function(e) {
        function t() {
          var e, r, i, s;
          (0, a.default)(this, t);
          for (var l = arguments.length, u = Array(l), c = 0; c < l; c++) u[c] = arguments[c];
          return r = i = (0, o.default)(this, (e = t.__proto__ || (0, n.default)(t)).call.apply(e, [this].concat(u))), i.handleClickToPause = function() {
            i.anim.isPaused ? i.anim.play() : i.anim.pause()
          }, s = r, (0, o.default)(i, s)
        }
        return (0, l.default)(t, e), (0, s.default)(t, [{
          key: "componentDidMount",
          value: function() {
            var e = this.props,
              t = e.options,
              r = e.eventListeners,
              n = t.loop,
              a = t.autoplay,
              s = t.animationData,
              o = t.rendererSettings,
              l = t.segments;
            this.options = {
              container: this.el,
              renderer: "svg",
              loop: !1 !== n,
              autoplay: !1 !== a,
              segments: !1 !== l,
              animationData: s,
              rendererSettings: o
            }, this.options = (0, i.default)({}, this.options, t), this.anim = h.default.loadAnimation(this.options), this.registerEvents(r)
          }
        }, {
          key: "componentWillUpdate",
          value: function(e) {
            this.options.animationData !== e.options.animationData && (this.deRegisterEvents(this.props.eventListeners), this.destroy(), this.options = (0, i.default)({}, this.options, e.options), this.anim = h.default.loadAnimation(this.options), this.registerEvents(e.eventListeners))
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
          value: function(e) {
            var t = this;
            e.forEach((function(e) {
              t.anim.addEventListener(e.eventName, e.callback)
            }))
          }
        }, {
          key: "deRegisterEvents",
          value: function(e) {
            var t = this;
            e.forEach((function(e) {
              t.anim.removeEventListener(e.eventName, e.callback)
            }))
          }
        }, {
          key: "render",
          value: function() {
            var e = this,
              t = this.props,
              r = t.width,
              n = t.height,
              a = t.ariaRole,
              s = t.ariaLabel,
              o = t.isClickToPauseDisabled,
              l = t.title,
              c = function(e) {
                return "number" == typeof e ? e + "px" : e || "100%"
              },
              h = (0, i.default)({
                width: c(r),
                height: c(n),
                overflow: "hidden",
                margin: "0 auto",
                outline: "none"
              }, this.props.style),
              p = o ? function() {
                return null
              } : this.handleClickToPause;
            return u.default.createElement("div", {
              ref: function(t) {
                e.el = t
              },
              style: h,
              onClick: p,
              title: l,
              role: a,
              "aria-label": s,
              tabIndex: "0"
            })
          }
        }]), t
      }(u.default.Component);
      t.c = d, d.propTypes = {
        eventListeners: c.default.arrayOf(c.default.object),
        options: c.default.object.isRequired,
        height: c.default.oneOfType([c.default.string, c.default.number]),
        width: c.default.oneOfType([c.default.string, c.default.number]),
        isStopped: c.default.bool,
        isPaused: c.default.bool,
        speed: c.default.number,
        segments: c.default.arrayOf(c.default.number),
        direction: c.default.number,
        ariaRole: c.default.string,
        ariaLabel: c.default.string,
        isClickToPauseDisabled: c.default.bool,
        title: c.default.string
      }, d.defaultProps = {
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
    5364: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      t.default = function e(t, r, i) {
        ! function(e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }(this, e);
        var n = r.y0,
          a = r.y1,
          s = r.x1,
          o = r.x0,
          l = "%" === a.unit && "%" === n.unit,
          u = n.value,
          c = a.value;
        if (l) {
          var h = t.height / 100;
          u = n.value * h, c = a.value * h
        }
        var p = "%" === s.unit && "%" === o.unit,
          d = o.value,
          f = s.value;
        if (p) {
          var m = t.width / 100;
          d = o.value * m, f = s.value * m
        }
        var v = Math.abs(u) + Math.abs(c);
        this.totalDistY = i.height + t.height + v;
        var g = i.height + t.height + (c > u ? -1 * v : v),
          y = Math.abs(d) + Math.abs(f);
        this.totalDistX = i.width + t.width + y;
        var b = i.width + t.width + (f > d ? -1 * y : y),
          S = t.originTotalDistY / g,
          x = t.originTotalDistX / b;
        this.top = t.top, this.bottom = t.bottom, u < 0 && (this.top = this.top + u * S), c > 0 && (this.bottom = this.bottom + c * S), this.left = t.left, this.right = t.right, d < 0 && (this.left = this.left + d * x), f > 0 && (this.right = this.right + f * x)
      }
    },
    9560: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.Element = void 0;
      var i = r(9932),
        n = r(4964),
        a = r(7892),
        s = l(r(5364)),
        o = l(r(3100));

      function l(e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }

      function u(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          t && (i = i.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), r.push.apply(r, i)
        }
        return r
      }

      function c(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? u(Object(r), !0).forEach((function(t) {
            h(e, t, r[t])
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : u(Object(r)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          }))
        }
        return e
      }

      function h(e, t, r) {
        return t in e ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[t] = r, e
      }

      function p(e, t) {
        for (var r = 0; r < t.length; r++) {
          var i = t[r];
          i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
        }
      }
      var d = function() {
        function e(t) {
          ! function(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
          }(this, e), this.elInner = t.elInner, this.elOuter = t.elOuter, this.props = t.props, this.scrollAxis = t.scrollAxis, this.id = (0, i.createId)(), this.offsets = (0, n.getOffsets)(this.props), this.isInView = null, this.percent = 0, this.updatePosition = t.scrollAxis === a.VERTICAL ? this._updatePositionVertical : this._updatePositionHorizontal
        }
        var t, r;
        return t = e, (r = [{
          key: "updateProps",
          value: function(e) {
            return this.props = c(c({}, this.props), e), this.offsets = (0, n.getOffsets)(e), this
          }
        }, {
          key: "setCachedAttributes",
          value: function(e, t) {
            return this.rect = new o.default(this.elOuter, e, t), this.bounds = new s.default(this.rect, this.offsets, e), this
          }
        }, {
          key: "_updatePositionHorizontal",
          value: function(e, t) {
            return this.isInView = (0, n.isElementInView)(this.bounds.left, this.bounds.right, e.width, t.x), this.isInView ? (this.percent = (0, n.percentMoved)(this.rect.left, this.rect.originTotalDistX, e.width, t.x), (0, n.setParallaxStyles)(this.elInner, this.offsets, this.percent), this) : this
          }
        }, {
          key: "_updatePositionVertical",
          value: function(e, t) {
            return this.isInView = (0, n.isElementInView)(this.bounds.top, this.bounds.bottom, e.height, t.y), this.isInView ? (this.percent = (0, n.percentMoved)(this.rect.top, this.rect.originTotalDistY, e.height, t.y), (0, n.setParallaxStyles)(this.elInner, this.offsets, this.percent), this) : this
          }
        }]) && p(t.prototype, r), e
      }();
      t.Element = d
    },
    8708: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      var i = r(9932),
        n = r(4964),
        a = r(9820),
        s = r(4779),
        o = r(9560),
        l = r(7892);

      function u(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, i = new Array(t); r < t; r++) i[r] = e[r];
        return i
      }

      function c(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          t && (i = i.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), r.push.apply(r, i)
        }
        return r
      }

      function h(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? c(Object(r), !0).forEach((function(t) {
            p(e, t, r[t])
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : c(Object(r)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          }))
        }
        return e
      }

      function p(e, t, r) {
        return t in e ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[t] = r, e
      }

      function d(e) {
        var t = e.scrollAxis,
          r = void 0 === t ? l.VERTICAL : t,
          c = e.scrollContainer,
          p = [],
          d = !!c,
          f = c || window,
          m = d ? f.scrollLeft : window.pageXOffset,
          v = d ? f.scrollTop : window.pageYOffset,
          g = new s.Scroll(m, v),
          y = new a.View({
            width: 0,
            height: 0,
            scrollContainer: c
          }),
          b = !1,
          S = (0, i.testForPassiveScroll)();

        function x(e) {
          e.addEventListener("scroll", P, !!S && {
            passive: !0
          }), window.addEventListener("resize", w, !1)
        }

        function E(e) {
          e.removeEventListener("scroll", P, !!S && {
            passive: !0
          }), window.removeEventListener("resize", w, !1)
        }

        function P() {
          var e = d ? f.scrollLeft : window.pageXOffset,
            t = d ? f.scrollTop : window.pageYOffset;
          g.setScroll(e, t), !b && p.length > 0 && (b = !0, window.requestAnimationFrame(C))
        }

        function w() {
          M(), C({
            updateCache: !0
          })
        }

        function C() {
          var e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).updateCache;
          p && p.forEach((function(t) {
            T(t), e && t.setCachedAttributes(y, g)
          })), b = !1
        }

        function T(e) {
          e.props.disabled || e.updatePosition(y, g)
        }

        function M() {
          if (d) {
            var e = f.offsetWidth,
              t = f.offsetHeight;
            return y.setSize(e, t)
          }
          var r = document.documentElement,
            i = window.innerWidth || r.clientWidth,
            n = window.innerHeight || r.clientHeight;
          return y.setSize(i, n)
        }
        x(f), M(), this.getElements = function() {
          return p
        }, this.createElement = function(e) {
          var t, i = new o.Element(h(h({}, e), {}, {
            scrollAxis: r
          }));
          return i.setCachedAttributes(y, g), p = p ? [].concat(function(e) {
            if (Array.isArray(e)) return u(e)
          }(t = p) || function(e) {
            if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
          }(t) || function(e, t) {
            if (e) {
              if ("string" == typeof e) return u(e, t);
              var r = Object.prototype.toString.call(e).slice(8, -1);
              return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? u(e, t) : void 0
            }
          }(t) || function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
          }(), [i]) : [i], T(i), i
        }, this.removeElementById = function(e) {
          p && (p = p.filter((function(t) {
            return t.id !== e
          })))
        }, this.updateElementPropsById = function(e, t) {
          p && (p = p.map((function(r) {
            return r.id === e ? r.updateProps(t) : r
          }))), this.update()
        }, this.resetElementStyles = function(e) {
          (0, n.resetStyles)(e)
        }, this.update = function() {
          var e = d ? f.scrollLeft : window.pageXOffset,
            t = d ? f.scrollTop : window.pageYOffset;
          g.setScroll(e, t), M(), C({
            updateCache: !0
          })
        }, this.updateScrollContainer = function(e) {
          E(f), f = e, d = !!e, y = new a.View({
            width: 0,
            height: 0,
            scrollContainer: e
          }), M(), x(f), C({
            updateCache: !0
          })
        }, this.destroy = function() {
          E(f), p && p.forEach((function(e) {
            return (0, n.resetStyles)(e)
          })), p = void 0
        }
      }
      d.init = function(e) {
        if ("undefined" == typeof window) throw new Error("Looks like ParallaxController.init() was called on the server. This method must be called on the client.");
        return new d(e)
      };
      var f = d;
      t.default = f
    },
    3100: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      t.default = function e(t, r, i) {
        ! function(e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }(this, e);
        var n = t.getBoundingClientRect();
        if (r.scrollContainer) {
          var a = r.scrollContainer.getBoundingClientRect();
          n = {
            top: n.top - a.top,
            right: n.right - a.left,
            bottom: n.bottom - a.top,
            left: n.left - a.left
          }
        }
        this.height = t.offsetHeight, this.width = t.offsetWidth, this.left = n.left + i.x, this.right = n.right + i.x, this.top = n.top + i.y, this.bottom = n.bottom + i.y, this.originTotalDistY = r.height + this.height, this.originTotalDistX = r.width + this.width
      }
    },
    4779: (e, t) => {
      "use strict";

      function r(e, t) {
        for (var r = 0; r < t.length; r++) {
          var i = t[r];
          i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
        }
      }
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.Scroll = void 0;
      var i = function() {
        function e() {
          ! function(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
          }(this, e), this.setScroll.apply(this, arguments)
        }
        var t, i;
        return t = e, (i = [{
          key: "setScroll",
          value: function(e, t) {
            return this.x = e, this.y = t, this
          }
        }]) && r(t.prototype, i), e
      }();
      t.Scroll = i
    },
    9820: (e, t) => {
      "use strict";

      function r(e, t) {
        for (var r = 0; r < t.length; r++) {
          var i = t[r];
          i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
        }
      }
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.View = void 0;
      var i = function() {
        function e(t) {
          var r = t.width,
            i = t.height,
            n = t.scrollContainer;
          ! function(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
          }(this, e), this.scrollContainer = n, this.setSize(r, i)
        }
        var t, i;
        return t = e, (i = [{
          key: "setSize",
          value: function(e, t) {
            return this.width = e, this.height = t, this
          }
        }]) && r(t.prototype, i), e
      }();
      t.View = i
    },
    1520: (e, t, r) => {
      "use strict";

      function i(e) {
        return i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
          return typeof e
        } : function(e) {
          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }, i(e)
      }
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      var n = function(e) {
          if (e && e.__esModule) return e;
          if (null === e || "object" !== i(e) && "function" != typeof e) return {
            default: e
          };
          var t = u();
          if (t && t.has(e)) return t.get(e);
          var r = {},
            n = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var a in e)
            if (Object.prototype.hasOwnProperty.call(e, a)) {
              var s = n ? Object.getOwnPropertyDescriptor(e, a) : null;
              s && (s.get || s.set) ? Object.defineProperty(r, a, s) : r[a] = e[a]
            } return r.default = e, t && t.set(e, r), r
        }(r(1664)),
        a = l(r(1424)),
        s = l(r(8708)),
        o = l(r(2320));

      function l(e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }

      function u() {
        if ("function" != typeof WeakMap) return null;
        var e = new WeakMap;
        return u = function() {
          return e
        }, e
      }

      function c(e, t) {
        for (var r = 0; r < t.length; r++) {
          var i = t[r];
          i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
        }
      }

      function h(e, t) {
        return h = Object.setPrototypeOf || function(e, t) {
          return e.__proto__ = t, e
        }, h(e, t)
      }

      function p(e) {
        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
      }

      function d(e) {
        return d = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
          return e.__proto__ || Object.getPrototypeOf(e)
        }, d(e)
      }

      function f(e, t, r) {
        return t in e ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[t] = r, e
      }
      var m = function(e) {
        ! function(e, t) {
          if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
          e.prototype = Object.create(t && t.prototype, {
            constructor: {
              value: e,
              writable: !0,
              configurable: !0
            }
          }), t && h(e, t)
        }(u, e);
        var t, r, a, o, l = (a = u, o = function() {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
          } catch (e) {
            return !1
          }
        }(), function() {
          var e, t = d(a);
          if (o) {
            var r = d(this).constructor;
            e = Reflect.construct(t, arguments, r)
          } else e = t.apply(this, arguments);
          return function(e, t) {
            return !t || "object" !== i(t) && "function" != typeof t ? p(e) : t
          }(this, e)
        });

        function u() {
          var e;
          ! function(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
          }(this, u);
          for (var t = arguments.length, r = new Array(t), i = 0; i < t; i++) r[i] = arguments[i];
          return f(p(e = l.call.apply(l, [this].concat(r))), "mapRefOuter", (function(t) {
            e._outer = t
          })), f(p(e), "mapRefInner", (function(t) {
            e._inner = t
          })), e
        }
        return t = u, (r = [{
          key: "componentDidMount",
          value: function() {
            var e = this.controller instanceof s.default;
            if (!this.controller && !e) throw new Error("Must wrap your application's <Parallax /> components in a <ParallaxProvider />.");
            this.element = this.controller.createElement(this._getElementOptions())
          }
        }, {
          key: "componentDidUpdate",
          value: function(e) {
            this.props.disabled === e.disabled && this.props.x[0] === e.x[0] && this.props.x[1] === e.x[1] && this.props.y[0] === e.y[0] && this.props.y[1] === e.y[1] || this.controller.updateElementPropsById(this.element.id, this._getElementOptions().props), this.props.disabled !== e.disabled && this.props.disabled && this.controller.resetElementStyles(this.element)
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
            var e = this.props,
              t = e.children,
              r = e.className,
              i = e.tagOuter,
              a = e.tagInner,
              s = e.styleOuter,
              o = e.styleInner,
              l = "parallax-outer" + (r ? " ".concat(r) : "");
            return n.default.createElement(i, {
              className: l,
              ref: this.mapRefOuter,
              style: s
            }, n.default.createElement(a, {
              className: "parallax-inner",
              ref: this.mapRefInner,
              style: o
            }, t))
          }
        }]) && c(t.prototype, r), u
      }(n.Component);
      f(m, "defaultProps", {
        disabled: !1,
        tagInner: "div",
        tagOuter: "div",
        x: [0, 0],
        y: [0, 0]
      }), f(m, "propTypes", {
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
      t.default = v
    },
    3708: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      var i = s(r(1664)),
        n = s(r(1424)),
        a = s(r(1520));

      function s(e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }

      function o() {
        return o = Object.assign || function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i])
          }
          return e
        }, o.apply(this, arguments)
      }

      function l(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          t && (i = i.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), r.push.apply(r, i)
        }
        return r
      }

      function u(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? l(Object(r), !0).forEach((function(t) {
            c(e, t, r[t])
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : l(Object(r)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          }))
        }
        return e
      }

      function c(e, t, r) {
        return t in e ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[t] = r, e
      }
      var h = {
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
        d = function(e) {
          var t = e.children,
            r = e.className,
            n = e.layers,
            s = e.style,
            l = e.disabled;
          return i.default.createElement("div", {
            style: u(u({}, h), s),
            className: "parallax-banner" + (r ? " ".concat(r) : "")
          }, n.map((function(e, t) {
            var r = e.amount,
              n = e.children,
              s = e.expanded,
              c = void 0 === s || s,
              h = e.image,
              d = e.props,
              f = void 0 === d ? {} : d,
              m = f.style || {},
              v = f.className || "";
            delete f.style, delete f.className;
            var g = "parallax-banner-layer-".concat(t).concat(v ? " ".concat(v) : ""),
              y = c ? {
                top: 100 * Math.abs(r) * -1 + "%",
                bottom: 100 * Math.abs(r) * -1 + "%"
              } : {},
              b = h ? {
                backgroundImage: "url(".concat(h, ")"),
                backgroundPosition: "center",
                backgroundSize: "cover"
              } : {};
            return i.default.createElement(a.default, {
              key: "layer-".concat(t),
              y: [-1 * r * 100 + "%", 100 * r + "%"],
              styleInner: p,
              styleOuter: p,
              disabled: l
            }, i.default.createElement("div", o({
              className: g,
              style: u(u(u(u({}, b), p), y), m)
            }, f), n))
          })), t)
        };
      d.defaultProps = {
        disabled: !1
      }, d.propTypes = {
        children: n.default.node,
        className: n.default.string,
        disabled: n.default.bool.isRequired,
        layers: n.default.arrayOf(n.default.shape({
          amount: n.default.number.isRequired,
          children: n.default.oneOfType([n.default.node, n.default.func]),
          expanded: n.default.bool,
          image: n.default.string,
          props: n.default.object
        })),
        style: n.default.object
      };
      var f = d;
      t.default = f
    },
    648: (e, t, r) => {
      "use strict";

      function i(e) {
        return i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
          return typeof e
        } : function(e) {
          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }, i(e)
      }
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      var n = function(e) {
          if (e && e.__esModule) return e;
          if (null === e || "object" !== i(e) && "function" != typeof e) return {
            default: e
          };
          var t = h();
          if (t && t.has(e)) return t.get(e);
          var r = {},
            n = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var a in e)
            if (Object.prototype.hasOwnProperty.call(e, a)) {
              var s = n ? Object.getOwnPropertyDescriptor(e, a) : null;
              s && (s.get || s.set) ? Object.defineProperty(r, a, s) : r[a] = e[a]
            } return r.default = e, t && t.set(e, r), r
        }(r(1664)),
        a = c(r(1424)),
        s = c(r(2752)),
        o = c(r(8708)),
        l = r(7892),
        u = c(r(6569));

      function c(e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }

      function h() {
        if ("function" != typeof WeakMap) return null;
        var e = new WeakMap;
        return h = function() {
          return e
        }, e
      }

      function p(e, t) {
        for (var r = 0; r < t.length; r++) {
          var i = t[r];
          i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
        }
      }

      function d(e, t) {
        return d = Object.setPrototypeOf || function(e, t) {
          return e.__proto__ = t, e
        }, d(e, t)
      }

      function f(e) {
        return f = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
          return e.__proto__ || Object.getPrototypeOf(e)
        }, f(e)
      }

      function m(e, t, r) {
        return t in e ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[t] = r, e
      }
      var v = function(e) {
        ! function(e, t) {
          if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
          e.prototype = Object.create(t && t.prototype, {
            constructor: {
              value: e,
              writable: !0,
              configurable: !0
            }
          }), t && d(e, t)
        }(c, e);
        var t, r, a, l, u = (a = c, l = function() {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
          } catch (e) {
            return !1
          }
        }(), function() {
          var e, t = f(a);
          if (l) {
            var r = f(this).constructor;
            e = Reflect.construct(t, arguments, r)
          } else e = t.apply(this, arguments);
          return function(e, t) {
            return !t || "object" !== i(t) && "function" != typeof t ? function(e) {
              if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              return e
            }(e) : t
          }(this, e)
        });

        function c(e) {
          var t, r;
          return function(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
          }(this, c), (t = u.call(this, e)).controller = (r = {
            scrollAxis: e.scrollAxis,
            scrollContainer: e.scrollContainer
          }, "undefined" == typeof window ? null : o.default.init(r)), t
        }
        return t = c, (r = [{
          key: "componentDidUpdate",
          value: function(e) {
            e.scrollContainer !== this.props.scrollContainer && this.controller.updateScrollContainer(this.props.scrollContainer)
          }
        }, {
          key: "componentWillUnmount",
          value: function() {
            this.controller = this.controller.destroy()
          }
        }, {
          key: "render",
          value: function() {
            var e = this.props.children;
            return n.default.createElement(s.default.Provider, {
              value: this.controller
            }, e)
          }
        }]) && p(t.prototype, r), c
      }(n.Component);
      t.default = v, m(v, "defaultProps", {
        scrollAxis: l.VERTICAL
      }), m(v, "propTypes", {
        children: a.default.node.isRequired,
        scrollAxis: a.default.oneOf([l.VERTICAL, l.HORIZONTAL]),
        scrollContainer: u.default
      })
    },
    8784: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      var i, n = r(1664),
        a = (i = r(2752)) && i.__esModule ? i : {
          default: i
        };
      t.default = function() {
        var e = (0, n.useContext)(a.default);
        if ("undefined" == typeof window) return null;
        if (!e) throw new Error("Could not find `react-scroll-parallax` context value. Please ensure the component is wrapped in a <ParallaxProvider>");
        return {
          parallaxController: e
        }
      }
    },
    2320: (e, t, r) => {
      "use strict";

      function i(e) {
        return i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
          return typeof e
        } : function(e) {
          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }, i(e)
      }
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      var n = function(e) {
          if (e && e.__esModule) return e;
          if (null === e || "object" !== i(e) && "function" != typeof e) return {
            default: e
          };
          var t = l();
          if (t && t.has(e)) return t.get(e);
          var r = {},
            n = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var a in e)
            if (Object.prototype.hasOwnProperty.call(e, a)) {
              var s = n ? Object.getOwnPropertyDescriptor(e, a) : null;
              s && (s.get || s.set) ? Object.defineProperty(r, a, s) : r[a] = e[a]
            } return r.default = e, t && t.set(e, r), r
        }(r(1664)),
        a = o(r(1424)),
        s = o(r(2752));

      function o(e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }

      function l() {
        if ("function" != typeof WeakMap) return null;
        var e = new WeakMap;
        return l = function() {
          return e
        }, e
      }

      function u() {
        return u = Object.assign || function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i])
          }
          return e
        }, u.apply(this, arguments)
      }

      function c(e, t) {
        for (var r = 0; r < t.length; r++) {
          var i = t[r];
          i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
        }
      }

      function h(e, t) {
        return h = Object.setPrototypeOf || function(e, t) {
          return e.__proto__ = t, e
        }, h(e, t)
      }

      function p(e) {
        return p = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
          return e.__proto__ || Object.getPrototypeOf(e)
        }, p(e)
      }
      t.default = function(e) {
        var t, r, o, l = function(t) {
          ! function(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
              constructor: {
                value: e,
                writable: !0,
                configurable: !0
              }
            }), t && h(e, t)
          }(f, t);
          var r, a, o, l, d = (o = f, l = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
              return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
            } catch (e) {
              return !1
            }
          }(), function() {
            var e, t = p(o);
            if (l) {
              var r = p(this).constructor;
              e = Reflect.construct(t, arguments, r)
            } else e = t.apply(this, arguments);
            return function(e, t) {
              return !t || "object" !== i(t) && "function" != typeof t ? function(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
              }(e) : t
            }(this, e)
          });

          function f() {
            return function(e, t) {
              if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, f), d.apply(this, arguments)
          }
          return r = f, (a = [{
            key: "render",
            value: function() {
              var t = this;
              return n.default.createElement(s.default.Consumer, null, (function(r) {
                return n.default.createElement(e, u({
                  parallaxController: r
                }, t.props))
              }))
            }
          }]) && c(r.prototype, a), f
        }(n.Component);
        return t = l, r = "propTypes", o = {
          parallaxController: a.default.object
        }, r in t ? Object.defineProperty(t, r, {
          value: o,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : t[r] = o, l
      }
    },
    7892: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.HORIZONTAL = t.VERTICAL = void 0, t.VERTICAL = "vertical", t.HORIZONTAL = "horizontal"
    },
    2752: (e, t, r) => {
      "use strict";
      var i;
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      var n = ((i = r(1664)) && i.__esModule ? i : {
        default: i
      }).default.createContext(null);
      t.default = n
    },
    9837: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.setParallaxStyles = function(e, t, r) {
        var n = (0, i.getParallaxOffsets)(t, r),
          a = n.x,
          s = a.value,
          o = a.unit,
          l = n.y,
          u = l.value,
          c = l.unit;
        e.style.transform = "translate3d(".concat(s).concat(o, ", ").concat(u).concat(c, ", 0)")
      }, t.resetStyles = function(e) {
        e.elInner.style.transform = ""
      };
      var i = r(9864)
    },
    6516: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = function(e) {
        var t = e.y0,
          r = e.y1,
          n = e.x1,
          a = e.x0,
          s = (0, i.parseValueAndUnit)(t),
          o = (0, i.parseValueAndUnit)(r),
          l = (0, i.parseValueAndUnit)(a),
          u = (0, i.parseValueAndUnit)(n);
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
      var i = r(9932)
    },
    9864: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.getParallaxOffsets = function(e, t) {
        var r = e.y0,
          n = e.y1,
          a = e.x0,
          s = e.x1,
          o = n.unit,
          l = s.unit;
        return {
          x: {
            value: (0, i.scaleBetween)(t, a.value, s.value, 0, 100),
            unit: l
          },
          y: {
            value: (0, i.scaleBetween)(t, r.value, n.value, 0, 100),
            unit: o
          }
        }
      };
      var i = r(9932)
    },
    4964: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), Object.defineProperty(t, "ParallaxContext", {
        enumerable: !0,
        get: function() {
          return i.default
        }
      }), Object.defineProperty(t, "percentMoved", {
        enumerable: !0,
        get: function() {
          return n.percentMoved
        }
      }), Object.defineProperty(t, "setParallaxStyles", {
        enumerable: !0,
        get: function() {
          return a.setParallaxStyles
        }
      }), Object.defineProperty(t, "resetStyles", {
        enumerable: !0,
        get: function() {
          return a.resetStyles
        }
      }), Object.defineProperty(t, "getParallaxOffsets", {
        enumerable: !0,
        get: function() {
          return s.getParallaxOffsets
        }
      }), Object.defineProperty(t, "isElementInView", {
        enumerable: !0,
        get: function() {
          return o.isElementInView
        }
      }), Object.defineProperty(t, "getOffsets", {
        enumerable: !0,
        get: function() {
          return l.default
        }
      });
      var i = u(r(2752)),
        n = r(1288),
        a = r(9837),
        s = r(9864),
        o = r(9352),
        l = u(r(6516));

      function u(e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }
    },
    9352: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.isElementInView = function(e, t, r, i) {
        var n = e - i,
          a = t - i;
        return n >= 0 && n <= r || a >= 0 && a <= r || n <= 0 && a >= r
      }
    },
    1288: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.percentMoved = function(e, t, r, i) {
        return (-1 * (e - i) + r) / t * 100
      }
    },
    7616: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "oZ", {
        enumerable: !0,
        get: function() {
          return i.default
        }
      }), Object.defineProperty(t, "mw", {
        enumerable: !0,
        get: function() {
          return n.default
        }
      }), Object.defineProperty(t, "qK", {
        enumerable: !0,
        get: function() {
          return a.default
        }
      }), Object.defineProperty(t, "Sr", {
        enumerable: !0,
        get: function() {
          return s.default
        }
      });
      var i = o(r(8784)),
        n = (o(r(2320)), o(r(1520))),
        a = o(r(648)),
        s = o(r(3708));
      o(r(2752));

      function o(e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }
    },
    8357: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.createId = function() {
        return ++r
      };
      var r = 0
    },
    9932: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), Object.defineProperty(t, "parseValueAndUnit", {
        enumerable: !0,
        get: function() {
          return i.default
        }
      }), Object.defineProperty(t, "scaleBetween", {
        enumerable: !0,
        get: function() {
          return n.default
        }
      }), Object.defineProperty(t, "testForPassiveScroll", {
        enumerable: !0,
        get: function() {
          return a.default
        }
      }), Object.defineProperty(t, "createId", {
        enumerable: !0,
        get: function() {
          return s.createId
        }
      });
      var i = o(r(5536)),
        n = o(r(6512)),
        a = o(r(5560)),
        s = r(8357);

      function o(e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }
    },
    5536: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = function(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
          value: 0,
          unit: "px"
        };
        if ("number" != typeof e && "string" != typeof e) throw new Error("Invalid value provided. Must provide a value as a string or number");
        if (e = String(e), t.value = parseFloat(e, 10), t.unit = e.match(/[\d.\-\+]*\s*(.*)/)[1] || "%", !["px", "%"].find((function(e) {
            return e === t.unit
          }))) throw new Error("Invalid unit provided. Must provide a unit of px in or %");
        return t
      }
    },
    6512: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = function(e, t, r, i, n) {
        return (r - t) * (e - i) / (n - i) + t
      }
    },
    5560: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = function() {
        var e = !1;
        try {
          var t = Object.defineProperty({}, "passive", {
            get: function() {
              e = !0
            }
          });
          window.addEventListener("test", null, t), window.removeEventListener("test", null, t)
        } catch (e) {}
        return e
      }
    },
    6569: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = function(e, t) {
        var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "ANONYMOUS";
        return "undefined" == typeof window || !e[t] || e[t] instanceof window.Element ? null : new Error('Prop name "'.concat(t, '" in <').concat(r, "> must be an HTML DOM element."))
      }
    },
    9736: (e, t, r) => {
      "use strict";
      r.d(t, {
        cp: () => ni
      });
      var i = r(2504);

      function n(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          t && (i = i.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), r.push.apply(r, i)
        }
        return r
      }

      function a(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? n(Object(r), !0).forEach((function(t) {
            (0, i.c)(e, t, r[t])
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : n(Object(r)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          }))
        }
        return e
      }

      function s(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, i = new Array(t); r < t; r++) i[r] = e[r];
        return i
      }

      function o(e, t) {
        if (e) {
          if ("string" == typeof e) return s(e, t);
          var r = Object.prototype.toString.call(e).slice(8, -1);
          return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? s(e, t) : void 0
        }
      }

      function l(e, t) {
        return function(e) {
          if (Array.isArray(e)) return e
        }(e) || function(e, t) {
          var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
          if (null != r) {
            var i, n, a, s, o = [],
              l = !0,
              u = !1;
            try {
              if (a = (r = r.call(e)).next, 0 === t) {
                if (Object(r) !== r) return;
                l = !1
              } else
                for (; !(l = (i = a.call(r)).done) && (o.push(i.value), o.length !== t); l = !0);
            } catch (e) {
              u = !0, n = e
            } finally {
              try {
                if (!l && null != r.return && (s = r.return(), Object(s) !== s)) return
              } finally {
                if (u) throw n
              }
            }
            return o
          }
        }(e, t) || o(e, t) || function() {
          throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
      }
      var u = r(1632);

      function c(e, t) {
        if (null == e) return {};
        var r, i, n = (0, u.c)(e, t);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          for (i = 0; i < a.length; i++) r = a[i], t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r])
        }
        return n
      }
      var h = r(1664),
        p = ["defaultInputValue", "defaultMenuIsOpen", "defaultValue", "inputValue", "menuIsOpen", "onChange", "onInputChange", "onMenuClose", "onMenuOpen", "value"],
        d = r(2795),
        f = r(3952);

      function m(e, t) {
        for (var r = 0; r < t.length; r++) {
          var i = t[r];
          i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, (0, f.c)(i.key), i)
        }
      }
      var v = r(4848);

      function g(e) {
        return g = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
          return e.__proto__ || Object.getPrototypeOf(e)
        }, g(e)
      }
      var y = r(8792);

      function b(e) {
        var t = function() {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
          } catch (e) {
            return !1
          }
        }();
        return function() {
          var r, i = g(e);
          if (t) {
            var n = g(this).constructor;
            r = Reflect.construct(i, arguments, n)
          } else r = i.apply(this, arguments);
          return function(e, t) {
            if (t && ("object" === (0, y.c)(t) || "function" == typeof t)) return t;
            if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
            return function(e) {
              if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              return e
            }(e)
          }(this, r)
        }
      }

      function S(e) {
        return function(e) {
          if (Array.isArray(e)) return s(e)
        }(e) || function(e) {
          if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
        }(e) || o(e) || function() {
          throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
      }
      var x = function() {
          function e(e) {
            var t = this;
            this._insertTag = function(e) {
              var r;
              r = 0 === t.tags.length ? t.insertionPoint ? t.insertionPoint.nextSibling : t.prepend ? t.container.firstChild : t.before : t.tags[t.tags.length - 1].nextSibling, t.container.insertBefore(e, r), t.tags.push(e)
            }, this.isSpeedy = void 0 === e.speedy || e.speedy, this.tags = [], this.ctr = 0, this.nonce = e.nonce, this.key = e.key, this.container = e.container, this.prepend = e.prepend, this.insertionPoint = e.insertionPoint, this.before = null
          }
          var t = e.prototype;
          return t.hydrate = function(e) {
            e.forEach(this._insertTag)
          }, t.insert = function(e) {
            this.ctr % (this.isSpeedy ? 65e3 : 1) == 0 && this._insertTag(function(e) {
              var t = document.createElement("style");
              return t.setAttribute("data-emotion", e.key), void 0 !== e.nonce && t.setAttribute("nonce", e.nonce), t.appendChild(document.createTextNode("")), t.setAttribute("data-s", ""), t
            }(this));
            var t = this.tags[this.tags.length - 1];
            if (this.isSpeedy) {
              var r = function(e) {
                if (e.sheet) return e.sheet;
                for (var t = 0; t < document.styleSheets.length; t++)
                  if (document.styleSheets[t].ownerNode === e) return document.styleSheets[t]
              }(t);
              try {
                r.insertRule(e, r.cssRules.length)
              } catch (e) {}
            } else t.appendChild(document.createTextNode(e));
            this.ctr++
          }, t.flush = function() {
            this.tags.forEach((function(e) {
              return e.parentNode && e.parentNode.removeChild(e)
            })), this.tags = [], this.ctr = 0
          }, e
        }(),
        E = Math.abs,
        P = String.fromCharCode,
        w = Object.assign;

      function C(e) {
        return e.trim()
      }

      function T(e, t, r) {
        return e.replace(t, r)
      }

      function M(e, t) {
        return e.indexOf(t)
      }

      function _(e, t) {
        return 0 | e.charCodeAt(t)
      }

      function A(e, t, r) {
        return e.slice(t, r)
      }

      function k(e) {
        return e.length
      }

      function I(e) {
        return e.length
      }

      function D(e, t) {
        return t.push(e), e
      }
      var O = 1,
        F = 1,
        L = 0,
        V = 0,
        R = 0,
        B = "";

      function N(e, t, r, i, n, a, s) {
        return {
          value: e,
          root: t,
          parent: r,
          type: i,
          props: n,
          children: a,
          line: O,
          column: F,
          length: s,
          return: ""
        }
      }

      function z(e, t) {
        return w(N("", null, null, "", null, null, 0), e, {
          length: -e.length
        }, t)
      }

      function G() {
        return R = V > 0 ? _(B, --V) : 0, F--, 10 === R && (F = 1, O--), R
      }

      function j() {
        return R = V < L ? _(B, V++) : 0, F++, 10 === R && (F = 1, O++), R
      }

      function H() {
        return _(B, V)
      }

      function W() {
        return V
      }

      function q(e, t) {
        return A(B, e, t)
      }

      function $(e) {
        switch (e) {
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

      function U(e) {
        return O = F = 1, L = k(B = e), V = 0, []
      }

      function Y(e) {
        return B = "", e
      }

      function X(e) {
        return C(q(V - 1, J(91 === e ? e + 2 : 40 === e ? e + 1 : e)))
      }

      function K(e) {
        for (;
          (R = H()) && R < 33;) j();
        return $(e) > 2 || $(R) > 3 ? "" : " "
      }

      function Z(e, t) {
        for (; --t && j() && !(R < 48 || R > 102 || R > 57 && R < 65 || R > 70 && R < 97););
        return q(e, W() + (t < 6 && 32 == H() && 32 == j()))
      }

      function J(e) {
        for (; j();) switch (R) {
          case e:
            return V;
          case 34:
          case 39:
            34 !== e && 39 !== e && J(R);
            break;
          case 40:
            41 === e && J(e);
            break;
          case 92:
            j()
        }
        return V
      }

      function Q(e, t) {
        for (; j() && e + R !== 57 && (e + R !== 84 || 47 !== H()););
        return "/*" + q(t, V - 1) + "*" + P(47 === e ? e : j())
      }

      function ee(e) {
        for (; !$(H());) j();
        return q(e, V)
      }
      var te = "-ms-",
        re = "-moz-",
        ie = "-webkit-",
        ne = "comm",
        ae = "rule",
        se = "decl",
        oe = "@keyframes";

      function le(e, t) {
        for (var r = "", i = I(e), n = 0; n < i; n++) r += t(e[n], n, e, t) || "";
        return r
      }

      function ue(e, t, r, i) {
        switch (e.type) {
          case "@layer":
            if (e.children.length) break;
          case "@import":
          case se:
            return e.return = e.return || e.value;
          case ne:
            return "";
          case oe:
            return e.return = e.value + "{" + le(e.children, i) + "}";
          case ae:
            e.value = e.props.join(",")
        }
        return k(r = le(e.children, i)) ? e.return = e.value + "{" + r + "}" : ""
      }

      function ce(e) {
        return Y(he("", null, null, null, [""], e = U(e), 0, [0], e))
      }

      function he(e, t, r, i, n, a, s, o, l) {
        for (var u = 0, c = 0, h = s, p = 0, d = 0, f = 0, m = 1, v = 1, g = 1, y = 0, b = "", S = n, x = a, E = i, w = b; v;) switch (f = y, y = j()) {
          case 40:
            if (108 != f && 58 == _(w, h - 1)) {
              -1 != M(w += T(X(y), "&", "&\f"), "&\f") && (g = -1);
              break
            }
          case 34:
          case 39:
          case 91:
            w += X(y);
            break;
          case 9:
          case 10:
          case 13:
          case 32:
            w += K(f);
            break;
          case 92:
            w += Z(W() - 1, 7);
            continue;
          case 47:
            switch (H()) {
              case 42:
              case 47:
                D(de(Q(j(), W()), t, r), l);
                break;
              default:
                w += "/"
            }
            break;
          case 123 * m:
            o[u++] = k(w) * g;
          case 125 * m:
          case 59:
          case 0:
            switch (y) {
              case 0:
              case 125:
                v = 0;
              case 59 + c:
                -1 == g && (w = T(w, /\f/g, "")), d > 0 && k(w) - h && D(d > 32 ? fe(w + ";", i, r, h - 1) : fe(T(w, " ", "") + ";", i, r, h - 2), l);
                break;
              case 59:
                w += ";";
              default:
                if (D(E = pe(w, t, r, u, c, n, o, b, S = [], x = [], h), a), 123 === y)
                  if (0 === c) he(w, t, E, E, S, a, h, o, x);
                  else switch (99 === p && 110 === _(w, 3) ? 100 : p) {
                    case 100:
                    case 108:
                    case 109:
                    case 115:
                      he(e, E, E, i && D(pe(e, E, E, 0, 0, n, o, b, n, S = [], h), x), n, x, h, o, i ? S : x);
                      break;
                    default:
                      he(w, E, E, E, [""], x, 0, o, x)
                  }
            }
            u = c = d = 0, m = g = 1, b = w = "", h = s;
            break;
          case 58:
            h = 1 + k(w), d = f;
          default:
            if (m < 1)
              if (123 == y) --m;
              else if (125 == y && 0 == m++ && 125 == G()) continue;
            switch (w += P(y), y * m) {
              case 38:
                g = c > 0 ? 1 : (w += "\f", -1);
                break;
              case 44:
                o[u++] = (k(w) - 1) * g, g = 1;
                break;
              case 64:
                45 === H() && (w += X(j())), p = H(), c = h = k(b = w += ee(W())), y++;
                break;
              case 45:
                45 === f && 2 == k(w) && (m = 0)
            }
        }
        return a
      }

      function pe(e, t, r, i, n, a, s, o, l, u, c) {
        for (var h = n - 1, p = 0 === n ? a : [""], d = I(p), f = 0, m = 0, v = 0; f < i; ++f)
          for (var g = 0, y = A(e, h + 1, h = E(m = s[f])), b = e; g < d; ++g)(b = C(m > 0 ? p[g] + " " + y : T(y, /&\f/g, p[g]))) && (l[v++] = b);
        return N(e, t, r, 0 === n ? ae : o, l, u, c)
      }

      function de(e, t, r) {
        return N(e, t, r, ne, P(R), A(e, 2, -2), 0)
      }

      function fe(e, t, r, i) {
        return N(e, t, r, se, A(e, 0, i), A(e, i + 1, -1), i)
      }
      var me = function(e, t, r) {
          for (var i = 0, n = 0; i = n, n = H(), 38 === i && 12 === n && (t[r] = 1), !$(n);) j();
          return q(e, V)
        },
        ve = new WeakMap,
        ge = function(e) {
          if ("rule" === e.type && e.parent && !(e.length < 1)) {
            for (var t = e.value, r = e.parent, i = e.column === r.column && e.line === r.line;
              "rule" !== r.type;)
              if (!(r = r.parent)) return;
            if ((1 !== e.props.length || 58 === t.charCodeAt(0) || ve.get(r)) && !i) {
              ve.set(e, !0);
              for (var n = [], a = function(e, t) {
                  return Y(function(e, t) {
                    var r = -1,
                      i = 44;
                    do {
                      switch ($(i)) {
                        case 0:
                          38 === i && 12 === H() && (t[r] = 1), e[r] += me(V - 1, t, r);
                          break;
                        case 2:
                          e[r] += X(i);
                          break;
                        case 4:
                          if (44 === i) {
                            e[++r] = 58 === H() ? "&\f" : "", t[r] = e[r].length;
                            break
                          }
                        default:
                          e[r] += P(i)
                      }
                    } while (i = j());
                    return e
                  }(U(e), t))
                }(t, n), s = r.props, o = 0, l = 0; o < a.length; o++)
                for (var u = 0; u < s.length; u++, l++) e.props[l] = n[o] ? a[o].replace(/&\f/g, s[u]) : s[u] + " " + a[o]
            }
          }
        },
        ye = function(e) {
          if ("decl" === e.type) {
            var t = e.value;
            108 === t.charCodeAt(0) && 98 === t.charCodeAt(2) && (e.return = "", e.value = "")
          }
        };

      function be(e, t) {
        switch (function(e, t) {
            return 45 ^ _(e, 0) ? (((t << 2 ^ _(e, 0)) << 2 ^ _(e, 1)) << 2 ^ _(e, 2)) << 2 ^ _(e, 3) : 0
          }(e, t)) {
          case 5103:
            return ie + "print-" + e + e;
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
            return ie + e + e;
          case 5349:
          case 4246:
          case 4810:
          case 6968:
          case 2756:
            return ie + e + re + e + te + e + e;
          case 6828:
          case 4268:
            return ie + e + te + e + e;
          case 6165:
            return ie + e + te + "flex-" + e + e;
          case 5187:
            return ie + e + T(e, /(\w+).+(:[^]+)/, ie + "box-$1$2" + te + "flex-$1$2") + e;
          case 5443:
            return ie + e + te + "flex-item-" + T(e, /flex-|-self/, "") + e;
          case 4675:
            return ie + e + te + "flex-line-pack" + T(e, /align-content|flex-|-self/, "") + e;
          case 5548:
            return ie + e + te + T(e, "shrink", "negative") + e;
          case 5292:
            return ie + e + te + T(e, "basis", "preferred-size") + e;
          case 6060:
            return ie + "box-" + T(e, "-grow", "") + ie + e + te + T(e, "grow", "positive") + e;
          case 4554:
            return ie + T(e, /([^-])(transform)/g, "$1" + ie + "$2") + e;
          case 6187:
            return T(T(T(e, /(zoom-|grab)/, ie + "$1"), /(image-set)/, ie + "$1"), e, "") + e;
          case 5495:
          case 3959:
            return T(e, /(image-set\([^]*)/, ie + "$1$`$1");
          case 4968:
            return T(T(e, /(.+:)(flex-)?(.*)/, ie + "box-pack:$3" + te + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + ie + e + e;
          case 4095:
          case 3583:
          case 4068:
          case 2532:
            return T(e, /(.+)-inline(.+)/, ie + "$1$2") + e;
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
            if (k(e) - 1 - t > 6) switch (_(e, t + 1)) {
              case 109:
                if (45 !== _(e, t + 4)) break;
              case 102:
                return T(e, /(.+:)(.+)-([^]+)/, "$1" + ie + "$2-$3$1" + re + (108 == _(e, t + 3) ? "$3" : "$2-$3")) + e;
              case 115:
                return ~M(e, "stretch") ? be(T(e, "stretch", "fill-available"), t) + e : e
            }
            break;
          case 4949:
            if (115 !== _(e, t + 1)) break;
          case 6444:
            switch (_(e, k(e) - 3 - (~M(e, "!important") && 10))) {
              case 107:
                return T(e, ":", ":" + ie) + e;
              case 101:
                return T(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + ie + (45 === _(e, 14) ? "inline-" : "") + "box$3$1" + ie + "$2$3$1" + te + "$2box$3") + e
            }
            break;
          case 5936:
            switch (_(e, t + 11)) {
              case 114:
                return ie + e + te + T(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
              case 108:
                return ie + e + te + T(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
              case 45:
                return ie + e + te + T(e, /[svh]\w+-[tblr]{2}/, "lr") + e
            }
            return ie + e + te + e + e
        }
        return e
      }
      var Se = [function(e, t, r, i) {
          if (e.length > -1 && !e.return) switch (e.type) {
            case se:
              e.return = be(e.value, e.length);
              break;
            case oe:
              return le([z(e, {
                value: T(e.value, "@", "@" + ie)
              })], i);
            case ae:
              if (e.length) return function(e, t) {
                return e.map(t).join("")
              }(e.props, (function(t) {
                switch (function(e, t) {
                    return (e = /(::plac\w+|:read-\w+)/.exec(e)) ? e[0] : e
                  }(t)) {
                  case ":read-only":
                  case ":read-write":
                    return le([z(e, {
                      props: [T(t, /:(read-\w+)/, ":-moz-$1")]
                    })], i);
                  case "::placeholder":
                    return le([z(e, {
                      props: [T(t, /:(plac\w+)/, ":" + ie + "input-$1")]
                    }), z(e, {
                      props: [T(t, /:(plac\w+)/, ":-moz-$1")]
                    }), z(e, {
                      props: [T(t, /:(plac\w+)/, te + "input-$1")]
                    })], i)
                }
                return ""
              }))
          }
        }],
        xe = function(e) {
          var t = e.key;
          if ("css" === t) {
            var r = document.querySelectorAll("style[data-emotion]:not([data-s])");
            Array.prototype.forEach.call(r, (function(e) {
              -1 !== e.getAttribute("data-emotion").indexOf(" ") && (document.head.appendChild(e), e.setAttribute("data-s", ""))
            }))
          }
          var i, n, a = e.stylisPlugins || Se,
            s = {},
            o = [];
          i = e.container || document.head, Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="' + t + ' "]'), (function(e) {
            for (var t = e.getAttribute("data-emotion").split(" "), r = 1; r < t.length; r++) s[t[r]] = !0;
            o.push(e)
          }));
          var l, u, c, h, p = [ue, (h = function(e) {
              l.insert(e)
            }, function(e) {
              e.root || (e = e.return) && h(e)
            })],
            d = (u = [ge, ye].concat(a, p), c = I(u), function(e, t, r, i) {
              for (var n = "", a = 0; a < c; a++) n += u[a](e, t, r, i) || "";
              return n
            });
          n = function(e, t, r, i) {
            l = r, le(ce(e ? e + "{" + t.styles + "}" : t.styles), d), i && (f.inserted[t.name] = !0)
          };
          var f = {
            key: t,
            sheet: new x({
              key: t,
              container: i,
              nonce: e.nonce,
              speedy: e.speedy,
              prepend: e.prepend,
              insertionPoint: e.insertionPoint
            }),
            nonce: e.nonce,
            inserted: s,
            registered: {},
            insert: n
          };
          return f.sheet.hydrate(o), f
        },
        Ee = function(e, t, r) {
          var i = e.key + "-" + t.name;
          !1 === r && void 0 === e.registered[i] && (e.registered[i] = t.styles)
        },
        Pe = {
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

      function we(e) {
        var t = Object.create(null);
        return function(r) {
          return void 0 === t[r] && (t[r] = e(r)), t[r]
        }
      }
      var Ce = /[A-Z]|^ms/g,
        Te = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
        Me = function(e) {
          return 45 === e.charCodeAt(1)
        },
        _e = function(e) {
          return null != e && "boolean" != typeof e
        },
        Ae = we((function(e) {
          return Me(e) ? e : e.replace(Ce, "-$&").toLowerCase()
        })),
        ke = function(e, t) {
          switch (e) {
            case "animation":
            case "animationName":
              if ("string" == typeof t) return t.replace(Te, (function(e, t, r) {
                return De = {
                  name: t,
                  styles: r,
                  next: De
                }, t
              }))
          }
          return 1 === Pe[e] || Me(e) || "number" != typeof t || 0 === t ? t : t + "px"
        };

      function Ie(e, t, r) {
        if (null == r) return "";
        if (void 0 !== r.__emotion_styles) return r;
        switch (typeof r) {
          case "boolean":
            return "";
          case "object":
            if (1 === r.anim) return De = {
              name: r.name,
              styles: r.styles,
              next: De
            }, r.name;
            if (void 0 !== r.styles) {
              var i = r.next;
              if (void 0 !== i)
                for (; void 0 !== i;) De = {
                  name: i.name,
                  styles: i.styles,
                  next: De
                }, i = i.next;
              return r.styles + ";"
            }
            return function(e, t, r) {
              var i = "";
              if (Array.isArray(r))
                for (var n = 0; n < r.length; n++) i += Ie(e, t, r[n]) + ";";
              else
                for (var a in r) {
                  var s = r[a];
                  if ("object" != typeof s) null != t && void 0 !== t[s] ? i += a + "{" + t[s] + "}" : _e(s) && (i += Ae(a) + ":" + ke(a, s) + ";");
                  else if (!Array.isArray(s) || "string" != typeof s[0] || null != t && void 0 !== t[s[0]]) {
                    var o = Ie(e, t, s);
                    switch (a) {
                      case "animation":
                      case "animationName":
                        i += Ae(a) + ":" + o + ";";
                        break;
                      default:
                        i += a + "{" + o + "}"
                    }
                  } else
                    for (var l = 0; l < s.length; l++) _e(s[l]) && (i += Ae(a) + ":" + ke(a, s[l]) + ";")
                }
              return i
            }(e, t, r);
          case "function":
            if (void 0 !== e) {
              var n = De,
                a = r(e);
              return De = n, Ie(e, t, a)
            }
        }
        if (null == t) return r;
        var s = t[r];
        return void 0 !== s ? s : r
      }
      var De, Oe = /label:\s*([^\s;\n{]+)\s*(;|$)/g,
        Fe = function(e, t, r) {
          if (1 === e.length && "object" == typeof e[0] && null !== e[0] && void 0 !== e[0].styles) return e[0];
          var i = !0,
            n = "";
          De = void 0;
          var a = e[0];
          null == a || void 0 === a.raw ? (i = !1, n += Ie(r, t, a)) : n += a[0];
          for (var s = 1; s < e.length; s++) n += Ie(r, t, e[s]), i && (n += a[s]);
          Oe.lastIndex = 0;
          for (var o, l = ""; null !== (o = Oe.exec(n));) l += "-" + o[1];
          var u = function(e) {
            for (var t, r = 0, i = 0, n = e.length; n >= 4; ++i, n -= 4) t = 1540483477 * (65535 & (t = 255 & e.charCodeAt(i) | (255 & e.charCodeAt(++i)) << 8 | (255 & e.charCodeAt(++i)) << 16 | (255 & e.charCodeAt(++i)) << 24)) + (59797 * (t >>> 16) << 16), r = 1540483477 * (65535 & (t ^= t >>> 24)) + (59797 * (t >>> 16) << 16) ^ 1540483477 * (65535 & r) + (59797 * (r >>> 16) << 16);
            switch (n) {
              case 3:
                r ^= (255 & e.charCodeAt(i + 2)) << 16;
              case 2:
                r ^= (255 & e.charCodeAt(i + 1)) << 8;
              case 1:
                r = 1540483477 * (65535 & (r ^= 255 & e.charCodeAt(i))) + (59797 * (r >>> 16) << 16)
            }
            return (((r = 1540483477 * (65535 & (r ^= r >>> 13)) + (59797 * (r >>> 16) << 16)) ^ r >>> 15) >>> 0).toString(36)
          }(n) + l;
          return {
            name: u,
            styles: n,
            next: De
          }
        },
        Le = !!h.useInsertionEffect && h.useInsertionEffect,
        Ve = Le || function(e) {
          return e()
        },
        Re = (Le || h.useLayoutEffect, {}.hasOwnProperty),
        Be = h.createContext("undefined" != typeof HTMLElement ? xe({
          key: "css"
        }) : null);
      Be.Provider;
      var Ne = function(e) {
          return (0, h.forwardRef)((function(t, r) {
            var i = (0, h.useContext)(Be);
            return e(t, i, r)
          }))
        },
        ze = h.createContext({}),
        Ge = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__",
        je = function(e) {
          var t = e.cache,
            r = e.serialized,
            i = e.isStringTag;
          return Ee(t, r, i), Ve((function() {
            return function(e, t, r) {
              Ee(e, t, r);
              var i = e.key + "-" + t.name;
              if (void 0 === e.inserted[t.name]) {
                var n = t;
                do {
                  e.insert(t === n ? "." + i : "", n, e.sheet, !0), n = n.next
                } while (void 0 !== n)
              }
            }(t, r, i)
          })), null
        },
        He = Ne((function(e, t, r) {
          var i = e.css;
          "string" == typeof i && void 0 !== t.registered[i] && (i = t.registered[i]);
          var n = e[Ge],
            a = [i],
            s = "";
          "string" == typeof e.className ? s = function(e, t, r) {
            var i = "";
            return r.split(" ").forEach((function(r) {
              void 0 !== e[r] ? t.push(e[r] + ";") : i += r + " "
            })), i
          }(t.registered, a, e.className) : null != e.className && (s = e.className + " ");
          var o = Fe(a, void 0, h.useContext(ze));
          s += t.key + "-" + o.name;
          var l = {};
          for (var u in e) Re.call(e, u) && "css" !== u && u !== Ge && (l[u] = e[u]);
          return l.ref = r, l.className = s, h.createElement(h.Fragment, null, h.createElement(je, {
            cache: t,
            serialized: o,
            isStringTag: "string" == typeof n
          }), h.createElement(n, l))
        })),
        We = He,
        qe = (r(9216), function(e, t) {
          var r = arguments;
          if (null == t || !Re.call(t, "css")) return h.createElement.apply(void 0, r);
          var i = r.length,
            n = new Array(i);
          n[0] = We, n[1] = function(e, t) {
            var r = {};
            for (var i in t) Re.call(t, i) && (r[i] = t[i]);
            return r[Ge] = e, r
          }(e, t);
          for (var a = 2; a < i; a++) n[a] = r[a];
          return h.createElement.apply(null, n)
        });

      function $e() {
        for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
        return Fe(t)
      }
      var Ue = r(7364);
      const Ye = Math.min,
        Xe = Math.max,
        Ke = Math.round,
        Ze = Math.floor,
        Je = e => ({
          x: e,
          y: e
        });

      function Qe(e) {
        return rt(e) ? (e.nodeName || "").toLowerCase() : "#document"
      }

      function et(e) {
        var t;
        return (null == e || null == (t = e.ownerDocument) ? void 0 : t.defaultView) || window
      }

      function tt(e) {
        var t;
        return null == (t = (rt(e) ? e.ownerDocument : e.document) || window.document) ? void 0 : t.documentElement
      }

      function rt(e) {
        return e instanceof Node || e instanceof et(e).Node
      }

      function it(e) {
        return e instanceof Element || e instanceof et(e).Element
      }

      function nt(e) {
        return e instanceof HTMLElement || e instanceof et(e).HTMLElement
      }

      function at(e) {
        return "undefined" != typeof ShadowRoot && (e instanceof ShadowRoot || e instanceof et(e).ShadowRoot)
      }

      function st(e) {
        const {
          overflow: t,
          overflowX: r,
          overflowY: i,
          display: n
        } = ot(e);
        return /auto|scroll|overlay|hidden|clip/.test(t + i + r) && !["inline", "contents"].includes(n)
      }

      function ot(e) {
        return et(e).getComputedStyle(e)
      }

      function lt(e) {
        const t = function(e) {
          if ("html" === Qe(e)) return e;
          const t = e.assignedSlot || e.parentNode || at(e) && e.host || tt(e);
          return at(t) ? t.host : t
        }(e);
        return function(e) {
          return ["html", "body", "#document"].includes(Qe(e))
        }(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : nt(t) && st(t) ? t : lt(t)
      }

      function ut(e, t, r) {
        var i;
        void 0 === t && (t = []), void 0 === r && (r = !0);
        const n = lt(e),
          a = n === (null == (i = e.ownerDocument) ? void 0 : i.body),
          s = et(n);
        return a ? t.concat(s, s.visualViewport || [], st(n) ? n : [], s.frameElement && r ? ut(s.frameElement) : []) : t.concat(n, ut(n, [], r))
      }

      function ct(e) {
        return it(e) ? e : e.contextElement
      }

      function ht(e) {
        const t = ct(e);
        if (!nt(t)) return Je(1);
        const r = t.getBoundingClientRect(),
          {
            width: i,
            height: n,
            $: a
          } = function(e) {
            const t = ot(e);
            let r = parseFloat(t.width) || 0,
              i = parseFloat(t.height) || 0;
            const n = nt(e),
              a = n ? e.offsetWidth : r,
              s = n ? e.offsetHeight : i,
              o = Ke(r) !== a || Ke(i) !== s;
            return o && (r = a, i = s), {
              width: r,
              height: i,
              $: o
            }
          }(t);
        let s = (a ? Ke(r.width) : r.width) / i,
          o = (a ? Ke(r.height) : r.height) / n;
        return s && Number.isFinite(s) || (s = 1), o && Number.isFinite(o) || (o = 1), {
          x: s,
          y: o
        }
      }
      const pt = Je(0);

      function dt(e) {
        const t = et(e);
        return "undefined" != typeof CSS && CSS.supports && CSS.supports("-webkit-backdrop-filter", "none") && t.visualViewport ? {
          x: t.visualViewport.offsetLeft,
          y: t.visualViewport.offsetTop
        } : pt
      }

      function ft(e, t, r, i) {
        void 0 === t && (t = !1), void 0 === r && (r = !1);
        const n = e.getBoundingClientRect(),
          a = ct(e);
        let s = Je(1);
        t && (i ? it(i) && (s = ht(i)) : s = ht(e));
        const o = function(e, t, r) {
          return void 0 === t && (t = !1), !(!r || t && r !== et(e)) && t
        }(a, r, i) ? dt(a) : Je(0);
        let l = (n.left + o.x) / s.x,
          u = (n.top + o.y) / s.y,
          c = n.width / s.x,
          h = n.height / s.y;
        if (a) {
          const e = et(a),
            t = i && it(i) ? et(i) : i;
          let r = e.frameElement;
          for (; r && i && t !== e;) {
            const e = ht(r),
              t = r.getBoundingClientRect(),
              i = ot(r),
              n = t.left + (r.clientLeft + parseFloat(i.paddingLeft)) * e.x,
              a = t.top + (r.clientTop + parseFloat(i.paddingTop)) * e.y;
            l *= e.x, u *= e.y, c *= e.x, h *= e.y, l += n, u += a, r = et(r).frameElement
          }
        }
        return p = {
          width: c,
          height: h,
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
      const mt = h.useLayoutEffect;
      var vt = ["className", "clearValue", "cx", "getStyles", "getClassNames", "getValue", "hasValue", "isMulti", "isRtl", "options", "selectOption", "selectProps", "setValue", "theme"],
        gt = function() {};

      function yt(e, t) {
        return t ? "-" === t[0] ? e + t : e + "__" + t : e
      }

      function bt(e, t) {
        for (var r = arguments.length, i = new Array(r > 2 ? r - 2 : 0), n = 2; n < r; n++) i[n - 2] = arguments[n];
        var a = [].concat(i);
        if (t && e)
          for (var s in t) t.hasOwnProperty(s) && t[s] && a.push("".concat(yt(e, s)));
        return a.filter((function(e) {
          return e
        })).map((function(e) {
          return String(e).trim()
        })).join(" ")
      }
      var St = function(e) {
          return t = e, Array.isArray(t) ? e.filter(Boolean) : "object" === (0, y.c)(e) && null !== e ? [e] : [];
          var t
        },
        xt = function(e) {
          return e.className, e.clearValue, e.cx, e.getStyles, e.getClassNames, e.getValue, e.hasValue, e.isMulti, e.isRtl, e.options, e.selectOption, e.selectProps, e.setValue, e.theme, a({}, c(e, vt))
        },
        Et = function(e, t, r) {
          var i = e.cx,
            n = e.getStyles,
            a = e.getClassNames,
            s = e.className;
          return {
            css: n(t, e),
            className: i(null != r ? r : {}, a(t, e), s)
          }
        };

      function Pt(e) {
        return [document.documentElement, document.body, window].indexOf(e) > -1
      }

      function wt(e) {
        return Pt(e) ? window.pageYOffset : e.scrollTop
      }

      function Ct(e, t) {
        Pt(e) ? window.scrollTo(0, t) : e.scrollTop = t
      }

      function Tt(e, t) {
        var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 200,
          i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : gt,
          n = wt(e),
          a = t - n,
          s = 0;
        ! function t() {
          var o, l = a * ((o = (o = s += 10) / r - 1) * o * o + 1) + n;
          Ct(e, l), s < r ? window.requestAnimationFrame(t) : i(e)
        }()
      }

      function Mt(e, t) {
        var r = e.getBoundingClientRect(),
          i = t.getBoundingClientRect(),
          n = t.offsetHeight / 3;
        i.bottom + n > r.bottom ? Ct(e, Math.min(t.offsetTop + t.clientHeight - e.offsetHeight + n, e.scrollHeight)) : i.top - n < r.top && Ct(e, Math.max(t.offsetTop - n, 0))
      }

      function _t() {
        try {
          return document.createEvent("TouchEvent"), !0
        } catch (e) {
          return !1
        }
      }
      var At = !1,
        kt = {
          get passive() {
            return At = !0
          }
        },
        It = "undefined" != typeof window ? window : {};
      It.addEventListener && It.removeEventListener && (It.addEventListener("p", gt, kt), It.removeEventListener("p", gt, !1));
      var Dt = At;

      function Ot(e) {
        return null != e
      }

      function Ft(e, t, r) {
        return e ? t : r
      }
      var Lt = ["children", "innerProps"],
        Vt = ["children", "innerProps"];
      var Rt, Bt, Nt, zt = function(e) {
          return "auto" === e ? "bottom" : e
        },
        Gt = (0, h.createContext)(null),
        jt = function(e) {
          var t = e.children,
            r = e.minMenuHeight,
            i = e.maxMenuHeight,
            n = e.menuPlacement,
            s = e.menuPosition,
            o = e.menuShouldScrollIntoView,
            u = e.theme,
            c = ((0, h.useContext)(Gt) || {}).setPortalPlacement,
            p = (0, h.useRef)(null),
            d = l((0, h.useState)(i), 2),
            f = d[0],
            m = d[1],
            v = l((0, h.useState)(null), 2),
            g = v[0],
            y = v[1],
            b = u.spacing.controlHeight;
          return mt((function() {
            var e = p.current;
            if (e) {
              var t = "fixed" === s,
                a = function(e) {
                  var t = e.maxHeight,
                    r = e.menuEl,
                    i = e.minHeight,
                    n = e.placement,
                    a = e.shouldScroll,
                    s = e.isFixedPosition,
                    o = e.controlHeight,
                    l = function(e) {
                      var t = getComputedStyle(e),
                        r = "absolute" === t.position,
                        i = /(auto|scroll)/;
                      if ("fixed" === t.position) return document.documentElement;
                      for (var n = e; n = n.parentElement;)
                        if (t = getComputedStyle(n), (!r || "static" !== t.position) && i.test(t.overflow + t.overflowY + t.overflowX)) return n;
                      return document.documentElement
                    }(r),
                    u = {
                      placement: "bottom",
                      maxHeight: t
                    };
                  if (!r || !r.offsetParent) return u;
                  var c, h = l.getBoundingClientRect().height,
                    p = r.getBoundingClientRect(),
                    d = p.bottom,
                    f = p.height,
                    m = p.top,
                    v = r.offsetParent.getBoundingClientRect().top,
                    g = s || Pt(c = l) ? window.innerHeight : c.clientHeight,
                    y = wt(l),
                    b = parseInt(getComputedStyle(r).marginBottom, 10),
                    S = parseInt(getComputedStyle(r).marginTop, 10),
                    x = v - S,
                    E = g - m,
                    P = x + y,
                    w = h - y - m,
                    C = d - g + y + b,
                    T = y + m - S,
                    M = 160;
                  switch (n) {
                    case "auto":
                    case "bottom":
                      if (E >= f) return {
                        placement: "bottom",
                        maxHeight: t
                      };
                      if (w >= f && !s) return a && Tt(l, C, M), {
                        placement: "bottom",
                        maxHeight: t
                      };
                      if (!s && w >= i || s && E >= i) return a && Tt(l, C, M), {
                        placement: "bottom",
                        maxHeight: s ? E - b : w - b
                      };
                      if ("auto" === n || s) {
                        var _ = t,
                          A = s ? x : P;
                        return A >= i && (_ = Math.min(A - b - o, t)), {
                          placement: "top",
                          maxHeight: _
                        }
                      }
                      if ("bottom" === n) return a && Ct(l, C), {
                        placement: "bottom",
                        maxHeight: t
                      };
                      break;
                    case "top":
                      if (x >= f) return {
                        placement: "top",
                        maxHeight: t
                      };
                      if (P >= f && !s) return a && Tt(l, T, M), {
                        placement: "top",
                        maxHeight: t
                      };
                      if (!s && P >= i || s && x >= i) {
                        var k = t;
                        return (!s && P >= i || s && x >= i) && (k = s ? x - S : P - S), a && Tt(l, T, M), {
                          placement: "top",
                          maxHeight: k
                        }
                      }
                      return {
                        placement: "bottom", maxHeight: t
                      };
                    default:
                      throw new Error('Invalid placement provided "'.concat(n, '".'))
                  }
                  return u
                }({
                  maxHeight: i,
                  menuEl: e,
                  minHeight: r,
                  placement: n,
                  shouldScroll: o && !t,
                  isFixedPosition: t,
                  controlHeight: b
                });
              m(a.maxHeight), y(a.placement), null == c || c(a.placement)
            }
          }), [i, n, s, o, r, c, b]), t({
            ref: p,
            placerProps: a(a({}, e), {}, {
              placement: g || zt(n),
              maxHeight: f
            })
          })
        },
        Ht = function(e, t) {
          var r = e.theme,
            i = r.spacing.baseUnit,
            n = r.colors;
          return a({
            textAlign: "center"
          }, t ? {} : {
            color: n.neutral40,
            padding: "".concat(2 * i, "px ").concat(3 * i, "px")
          })
        },
        Wt = Ht,
        qt = Ht,
        $t = ["size"],
        Ut = ["innerProps", "isRtl", "size"],
        Yt = {
          name: "8mmkcg",
          styles: "display:inline-block;fill:currentColor;line-height:1;stroke:currentColor;stroke-width:0"
        },
        Xt = function(e) {
          var t = e.size,
            r = c(e, $t);
          return qe("svg", (0, d.c)({
            height: t,
            width: t,
            viewBox: "0 0 20 20",
            "aria-hidden": "true",
            focusable: "false",
            css: Yt
          }, r))
        },
        Kt = function(e) {
          return qe(Xt, (0, d.c)({
            size: 20
          }, e), qe("path", {
            d: "M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"
          }))
        },
        Zt = function(e) {
          return qe(Xt, (0, d.c)({
            size: 20
          }, e), qe("path", {
            d: "M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"
          }))
        },
        Jt = function(e, t) {
          var r = e.isFocused,
            i = e.theme,
            n = i.spacing.baseUnit,
            s = i.colors;
          return a({
            label: "indicatorContainer",
            display: "flex",
            transition: "color 150ms"
          }, t ? {} : {
            color: r ? s.neutral60 : s.neutral20,
            padding: 2 * n,
            ":hover": {
              color: r ? s.neutral80 : s.neutral40
            }
          })
        },
        Qt = Jt,
        er = Jt,
        tr = function() {
          var e = $e.apply(void 0, arguments),
            t = "animation-" + e.name;
          return {
            name: t,
            styles: "@keyframes " + t + "{" + e.styles + "}",
            anim: 1,
            toString: function() {
              return "_EMO_" + this.name + "_" + this.styles + "_EMO_"
            }
          }
        }(Rt || (Bt = ["\n  0%, 80%, 100% { opacity: 0; }\n  40% { opacity: 1; }\n"], Nt || (Nt = Bt.slice(0)), Rt = Object.freeze(Object.defineProperties(Bt, {
          raw: {
            value: Object.freeze(Nt)
          }
        })))),
        rr = function(e) {
          var t = e.delay,
            r = e.offset;
          return qe("span", {
            css: $e({
              animation: "".concat(tr, " 1s ease-in-out ").concat(t, "ms infinite;"),
              backgroundColor: "currentColor",
              borderRadius: "1em",
              display: "inline-block",
              marginLeft: r ? "1em" : void 0,
              height: "1em",
              verticalAlign: "top",
              width: "1em"
            }, "", "")
          })
        },
        ir = ["data"],
        nr = ["innerRef", "isDisabled", "isHidden", "inputClassName"],
        ar = {
          gridArea: "1 / 2",
          font: "inherit",
          minWidth: "2px",
          border: 0,
          margin: 0,
          outline: 0,
          padding: 0
        },
        sr = {
          flex: "1 1 auto",
          display: "inline-grid",
          gridArea: "1 / 1 / 2 / 3",
          gridTemplateColumns: "0 min-content",
          "&:after": a({
            content: 'attr(data-value) " "',
            visibility: "hidden",
            whiteSpace: "pre"
          }, ar)
        },
        or = function(e) {
          return a({
            label: "input",
            color: "inherit",
            background: 0,
            opacity: e ? 0 : 1,
            width: "100%"
          }, ar)
        },
        lr = function(e) {
          var t = e.children,
            r = e.innerProps;
          return qe("div", r, t)
        },
        ur = {
          ClearIndicator: function(e) {
            var t = e.children,
              r = e.innerProps;
            return qe("div", (0, d.c)({}, Et(e, "clearIndicator", {
              indicator: !0,
              "clear-indicator": !0
            }), r), t || qe(Kt, null))
          },
          Control: function(e) {
            var t = e.children,
              r = e.isDisabled,
              i = e.isFocused,
              n = e.innerRef,
              a = e.innerProps,
              s = e.menuIsOpen;
            return qe("div", (0, d.c)({
              ref: n
            }, Et(e, "control", {
              control: !0,
              "control--is-disabled": r,
              "control--is-focused": i,
              "control--menu-is-open": s
            }), a, {
              "aria-disabled": r || void 0
            }), t)
          },
          DropdownIndicator: function(e) {
            var t = e.children,
              r = e.innerProps;
            return qe("div", (0, d.c)({}, Et(e, "dropdownIndicator", {
              indicator: !0,
              "dropdown-indicator": !0
            }), r), t || qe(Zt, null))
          },
          DownChevron: Zt,
          CrossIcon: Kt,
          Group: function(e) {
            var t = e.children,
              r = e.cx,
              i = e.getStyles,
              n = e.getClassNames,
              a = e.Heading,
              s = e.headingProps,
              o = e.innerProps,
              l = e.label,
              u = e.theme,
              c = e.selectProps;
            return qe("div", (0, d.c)({}, Et(e, "group", {
              group: !0
            }), o), qe(a, (0, d.c)({}, s, {
              selectProps: c,
              theme: u,
              getStyles: i,
              getClassNames: n,
              cx: r
            }), l), qe("div", null, t))
          },
          GroupHeading: function(e) {
            var t = xt(e);
            t.data;
            var r = c(t, ir);
            return qe("div", (0, d.c)({}, Et(e, "groupHeading", {
              "group-heading": !0
            }), r))
          },
          IndicatorsContainer: function(e) {
            var t = e.children,
              r = e.innerProps;
            return qe("div", (0, d.c)({}, Et(e, "indicatorsContainer", {
              indicators: !0
            }), r), t)
          },
          IndicatorSeparator: function(e) {
            var t = e.innerProps;
            return qe("span", (0, d.c)({}, t, Et(e, "indicatorSeparator", {
              "indicator-separator": !0
            })))
          },
          Input: function(e) {
            var t = e.cx,
              r = e.value,
              i = xt(e),
              n = i.innerRef,
              a = i.isDisabled,
              s = i.isHidden,
              o = i.inputClassName,
              l = c(i, nr);
            return qe("div", (0, d.c)({}, Et(e, "input", {
              "input-container": !0
            }), {
              "data-value": r || ""
            }), qe("input", (0, d.c)({
              className: t({
                input: !0
              }, o),
              ref: n,
              style: or(s),
              disabled: a
            }, l)))
          },
          LoadingIndicator: function(e) {
            var t = e.innerProps,
              r = e.isRtl,
              i = e.size,
              n = void 0 === i ? 4 : i,
              s = c(e, Ut);
            return qe("div", (0, d.c)({}, Et(a(a({}, s), {}, {
              innerProps: t,
              isRtl: r,
              size: n
            }), "loadingIndicator", {
              indicator: !0,
              "loading-indicator": !0
            }), t), qe(rr, {
              delay: 0,
              offset: r
            }), qe(rr, {
              delay: 160,
              offset: !0
            }), qe(rr, {
              delay: 320,
              offset: !r
            }))
          },
          Menu: function(e) {
            var t = e.children,
              r = e.innerRef,
              i = e.innerProps;
            return qe("div", (0, d.c)({}, Et(e, "menu", {
              menu: !0
            }), {
              ref: r
            }, i), t)
          },
          MenuList: function(e) {
            var t = e.children,
              r = e.innerProps,
              i = e.innerRef,
              n = e.isMulti;
            return qe("div", (0, d.c)({}, Et(e, "menuList", {
              "menu-list": !0,
              "menu-list--is-multi": n
            }), {
              ref: i
            }, r), t)
          },
          MenuPortal: function(e) {
            var t = e.appendTo,
              r = e.children,
              i = e.controlElement,
              n = e.innerProps,
              s = e.menuPlacement,
              o = e.menuPosition,
              u = (0, h.useRef)(null),
              c = (0, h.useRef)(null),
              p = l((0, h.useState)(zt(s)), 2),
              f = p[0],
              m = p[1],
              v = (0, h.useMemo)((function() {
                return {
                  setPortalPlacement: m
                }
              }), []),
              g = l((0, h.useState)(null), 2),
              y = g[0],
              b = g[1],
              S = (0, h.useCallback)((function() {
                if (i) {
                  var e = function(e) {
                      var t = e.getBoundingClientRect();
                      return {
                        bottom: t.bottom,
                        height: t.height,
                        left: t.left,
                        right: t.right,
                        top: t.top,
                        width: t.width
                      }
                    }(i),
                    t = "fixed" === o ? 0 : window.pageYOffset,
                    r = e[f] + t;
                  r === (null == y ? void 0 : y.offset) && e.left === (null == y ? void 0 : y.rect.left) && e.width === (null == y ? void 0 : y.rect.width) || b({
                    offset: r,
                    rect: e
                  })
                }
              }), [i, o, f, null == y ? void 0 : y.offset, null == y ? void 0 : y.rect.left, null == y ? void 0 : y.rect.width]);
            mt((function() {
              S()
            }), [S]);
            var x = (0, h.useCallback)((function() {
              "function" == typeof c.current && (c.current(), c.current = null), i && u.current && (c.current = function(e, t, r, i) {
                void 0 === i && (i = {});
                const {
                  ancestorScroll: n = !0,
                  ancestorResize: a = !0,
                  elementResize: s = "function" == typeof ResizeObserver,
                  layoutShift: o = "function" == typeof IntersectionObserver,
                  animationFrame: l = !1
                } = i, u = ct(e), c = n || a ? [...u ? ut(u) : [], ...ut(t)] : [];
                c.forEach((e => {
                  n && e.addEventListener("scroll", r, {
                    passive: !0
                  }), a && e.addEventListener("resize", r)
                }));
                const h = u && o ? function(e, t) {
                  let r, i = null;
                  const n = tt(e);

                  function a() {
                    clearTimeout(r), i && i.disconnect(), i = null
                  }
                  return function s(o, l) {
                    void 0 === o && (o = !1), void 0 === l && (l = 1), a();
                    const {
                      left: u,
                      top: c,
                      width: h,
                      height: p
                    } = e.getBoundingClientRect();
                    if (o || t(), !h || !p) return;
                    const d = {
                      rootMargin: -Ze(c) + "px " + -Ze(n.clientWidth - (u + h)) + "px " + -Ze(n.clientHeight - (c + p)) + "px " + -Ze(u) + "px",
                      threshold: Xe(0, Ye(1, l)) || 1
                    };
                    let f = !0;

                    function m(e) {
                      const t = e[0].intersectionRatio;
                      if (t !== l) {
                        if (!f) return s();
                        t ? s(!1, t) : r = setTimeout((() => {
                          s(!1, 1e-7)
                        }), 100)
                      }
                      f = !1
                    }
                    try {
                      i = new IntersectionObserver(m, {
                        ...d,
                        root: n.ownerDocument
                      })
                    } catch (e) {
                      i = new IntersectionObserver(m, d)
                    }
                    i.observe(e)
                  }(!0), a
                }(u, r) : null;
                let p, d = -1,
                  f = null;
                s && (f = new ResizeObserver((e => {
                  let [i] = e;
                  i && i.target === u && f && (f.unobserve(t), cancelAnimationFrame(d), d = requestAnimationFrame((() => {
                    f && f.observe(t)
                  }))), r()
                })), u && !l && f.observe(u), f.observe(t));
                let m = l ? ft(e) : null;
                return l && function t() {
                  const i = ft(e);
                  !m || i.x === m.x && i.y === m.y && i.width === m.width && i.height === m.height || r(), m = i, p = requestAnimationFrame(t)
                }(), r(), () => {
                  c.forEach((e => {
                    n && e.removeEventListener("scroll", r), a && e.removeEventListener("resize", r)
                  })), h && h(), f && f.disconnect(), f = null, l && cancelAnimationFrame(p)
                }
              }(i, u.current, S, {
                elementResize: "ResizeObserver" in window
              }))
            }), [i, S]);
            mt((function() {
              x()
            }), [x]);
            var E = (0, h.useCallback)((function(e) {
              u.current = e, x()
            }), [x]);
            if (!t && "fixed" !== o || !y) return null;
            var P = qe("div", (0, d.c)({
              ref: E
            }, Et(a(a({}, e), {}, {
              offset: y.offset,
              position: o,
              rect: y.rect
            }), "menuPortal", {
              "menu-portal": !0
            }), n), r);
            return qe(Gt.Provider, {
              value: v
            }, t ? (0, Ue.createPortal)(P, t) : P)
          },
          LoadingMessage: function(e) {
            var t = e.children,
              r = void 0 === t ? "Loading..." : t,
              i = e.innerProps,
              n = c(e, Vt);
            return qe("div", (0, d.c)({}, Et(a(a({}, n), {}, {
              children: r,
              innerProps: i
            }), "loadingMessage", {
              "menu-notice": !0,
              "menu-notice--loading": !0
            }), i), r)
          },
          NoOptionsMessage: function(e) {
            var t = e.children,
              r = void 0 === t ? "No options" : t,
              i = e.innerProps,
              n = c(e, Lt);
            return qe("div", (0, d.c)({}, Et(a(a({}, n), {}, {
              children: r,
              innerProps: i
            }), "noOptionsMessage", {
              "menu-notice": !0,
              "menu-notice--no-options": !0
            }), i), r)
          },
          MultiValue: function(e) {
            var t = e.children,
              r = e.components,
              i = e.data,
              n = e.innerProps,
              s = e.isDisabled,
              o = e.removeProps,
              l = e.selectProps,
              u = r.Container,
              c = r.Label,
              h = r.Remove;
            return qe(u, {
              data: i,
              innerProps: a(a({}, Et(e, "multiValue", {
                "multi-value": !0,
                "multi-value--is-disabled": s
              })), n),
              selectProps: l
            }, qe(c, {
              data: i,
              innerProps: a({}, Et(e, "multiValueLabel", {
                "multi-value__label": !0
              })),
              selectProps: l
            }, t), qe(h, {
              data: i,
              innerProps: a(a({}, Et(e, "multiValueRemove", {
                "multi-value__remove": !0
              })), {}, {
                "aria-label": "Remove ".concat(t || "option")
              }, o),
              selectProps: l
            }))
          },
          MultiValueContainer: lr,
          MultiValueLabel: lr,
          MultiValueRemove: function(e) {
            var t = e.children,
              r = e.innerProps;
            return qe("div", (0, d.c)({
              role: "button"
            }, r), t || qe(Kt, {
              size: 14
            }))
          },
          Option: function(e) {
            var t = e.children,
              r = e.isDisabled,
              i = e.isFocused,
              n = e.isSelected,
              a = e.innerRef,
              s = e.innerProps;
            return qe("div", (0, d.c)({}, Et(e, "option", {
              option: !0,
              "option--is-disabled": r,
              "option--is-focused": i,
              "option--is-selected": n
            }), {
              ref: a,
              "aria-disabled": r
            }, s), t)
          },
          Placeholder: function(e) {
            var t = e.children,
              r = e.innerProps;
            return qe("div", (0, d.c)({}, Et(e, "placeholder", {
              placeholder: !0
            }), r), t)
          },
          SelectContainer: function(e) {
            var t = e.children,
              r = e.innerProps,
              i = e.isDisabled,
              n = e.isRtl;
            return qe("div", (0, d.c)({}, Et(e, "container", {
              "--is-disabled": i,
              "--is-rtl": n
            }), r), t)
          },
          SingleValue: function(e) {
            var t = e.children,
              r = e.isDisabled,
              i = e.innerProps;
            return qe("div", (0, d.c)({}, Et(e, "singleValue", {
              "single-value": !0,
              "single-value--is-disabled": r
            }), i), t)
          },
          ValueContainer: function(e) {
            var t = e.children,
              r = e.innerProps,
              i = e.isMulti,
              n = e.hasValue;
            return qe("div", (0, d.c)({}, Et(e, "valueContainer", {
              "value-container": !0,
              "value-container--is-multi": i,
              "value-container--has-value": n
            }), r), t)
          }
        },
        cr = Number.isNaN || function(e) {
          return "number" == typeof e && e != e
        };

      function hr(e, t) {
        if (e.length !== t.length) return !1;
        for (var r = 0; r < e.length; r++)
          if (!((i = e[r]) === (n = t[r]) || cr(i) && cr(n))) return !1;
        var i, n;
        return !0
      }
      for (var pr = {
          name: "7pg0cj-a11yText",
          styles: "label:a11yText;z-index:9999;border:0;clip:rect(1px, 1px, 1px, 1px);height:1px;width:1px;position:absolute;overflow:hidden;padding:0;white-space:nowrap"
        }, dr = function(e) {
          return qe("span", (0, d.c)({
            css: pr
          }, e))
        }, fr = {
          guidance: function(e) {
            var t = e.isSearchable,
              r = e.isMulti,
              i = e.isDisabled,
              n = e.tabSelectsValue;
            switch (e.context) {
              case "menu":
                return "Use Up and Down to choose options".concat(i ? "" : ", press Enter to select the currently focused option", ", press Escape to exit the menu").concat(n ? ", press Tab to select the option and exit the menu" : "", ".");
              case "input":
                return "".concat(e["aria-label"] || "Select", " is focused ").concat(t ? ",type to refine list" : "", ", press Down to open the menu, ").concat(r ? " press left to focus selected values" : "");
              case "value":
                return "Use left and right to toggle between focused values, press Backspace to remove the currently focused value";
              default:
                return ""
            }
          },
          onChange: function(e) {
            var t = e.action,
              r = e.label,
              i = void 0 === r ? "" : r,
              n = e.labels,
              a = e.isDisabled;
            switch (t) {
              case "deselect-option":
              case "pop-value":
              case "remove-value":
                return "option ".concat(i, ", deselected.");
              case "clear":
                return "All selected options have been cleared.";
              case "initial-input-focus":
                return "option".concat(n.length > 1 ? "s" : "", " ").concat(n.join(","), ", selected.");
              case "select-option":
                return "option ".concat(i, a ? " is disabled. Select another option." : ", selected.");
              default:
                return ""
            }
          },
          onFocus: function(e) {
            var t = e.context,
              r = e.focused,
              i = e.options,
              n = e.label,
              a = void 0 === n ? "" : n,
              s = e.selectValue,
              o = e.isDisabled,
              l = e.isSelected,
              u = function(e, t) {
                return e && e.length ? "".concat(e.indexOf(t) + 1, " of ").concat(e.length) : ""
              };
            if ("value" === t && s) return "value ".concat(a, " focused, ").concat(u(s, r), ".");
            if ("menu" === t) {
              var c = o ? " disabled" : "",
                h = "".concat(l ? "selected" : "focused").concat(c);
              return "option ".concat(a, " ").concat(h, ", ").concat(u(i, r), ".")
            }
            return ""
          },
          onFilter: function(e) {
            var t = e.inputValue,
              r = e.resultsMessage;
            return "".concat(r).concat(t ? " for search term " + t : "", ".")
          }
        }, mr = function(e) {
          var t = e.ariaSelection,
            r = e.focusedOption,
            i = e.focusedValue,
            n = e.focusableOptions,
            s = e.isFocused,
            o = e.selectValue,
            l = e.selectProps,
            u = e.id,
            c = l.ariaLiveMessages,
            p = l.getOptionLabel,
            d = l.inputValue,
            f = l.isMulti,
            m = l.isOptionDisabled,
            v = l.isSearchable,
            g = l.menuIsOpen,
            y = l.options,
            b = l.screenReaderStatus,
            S = l.tabSelectsValue,
            x = l["aria-label"],
            E = l["aria-live"],
            P = (0, h.useMemo)((function() {
              return a(a({}, fr), c || {})
            }), [c]),
            w = (0, h.useMemo)((function() {
              var e, r = "";
              if (t && P.onChange) {
                var i = t.option,
                  n = t.options,
                  s = t.removedValue,
                  l = t.removedValues,
                  u = t.value,
                  c = s || i || (e = u, Array.isArray(e) ? null : e),
                  h = c ? p(c) : "",
                  d = n || l || void 0,
                  f = d ? d.map(p) : [],
                  v = a({
                    isDisabled: c && m(c, o),
                    label: h,
                    labels: f
                  }, t);
                r = P.onChange(v)
              }
              return r
            }), [t, P, m, o, p]),
            C = (0, h.useMemo)((function() {
              var e = "",
                t = r || i,
                a = !!(r && o && o.includes(r));
              if (t && P.onFocus) {
                var s = {
                  focused: t,
                  label: p(t),
                  isDisabled: m(t, o),
                  isSelected: a,
                  options: n,
                  context: t === r ? "menu" : "value",
                  selectValue: o
                };
                e = P.onFocus(s)
              }
              return e
            }), [r, i, p, m, P, n, o]),
            T = (0, h.useMemo)((function() {
              var e = "";
              if (g && y.length && P.onFilter) {
                var t = b({
                  count: n.length
                });
                e = P.onFilter({
                  inputValue: d,
                  resultsMessage: t
                })
              }
              return e
            }), [n, d, g, P, y, b]),
            M = (0, h.useMemo)((function() {
              var e = "";
              if (P.guidance) {
                var t = i ? "value" : g ? "menu" : "input";
                e = P.guidance({
                  "aria-label": x,
                  context: t,
                  isDisabled: r && m(r, o),
                  isMulti: f,
                  isSearchable: v,
                  tabSelectsValue: S
                })
              }
              return e
            }), [x, r, i, f, m, v, g, P, o, S]),
            _ = "".concat(C, " ").concat(T, " ").concat(M),
            A = qe(h.Fragment, null, qe("span", {
              id: "aria-selection"
            }, w), qe("span", {
              id: "aria-context"
            }, _)),
            k = "initial-input-focus" === (null == t ? void 0 : t.action);
          return qe(h.Fragment, null, qe(dr, {
            id: u
          }, k && A), qe(dr, {
            "aria-live": E,
            "aria-atomic": "false",
            "aria-relevant": "additions text"
          }, s && !k && A))
        }, vr = [{
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
        }], gr = new RegExp("[" + vr.map((function(e) {
          return e.letters
        })).join("") + "]", "g"), yr = {}, br = 0; br < vr.length; br++)
        for (var Sr = vr[br], xr = 0; xr < Sr.letters.length; xr++) yr[Sr.letters[xr]] = Sr.base;
      var Er = function(e) {
          return e.replace(gr, (function(e) {
            return yr[e]
          }))
        },
        Pr = function(e, t) {
          void 0 === t && (t = hr);
          var r = null;

          function i() {
            for (var i = [], n = 0; n < arguments.length; n++) i[n] = arguments[n];
            if (r && r.lastThis === this && t(i, r.lastArgs)) return r.lastResult;
            var a = e.apply(this, i);
            return r = {
              lastResult: a,
              lastArgs: i,
              lastThis: this
            }, a
          }
          return i.clear = function() {
            r = null
          }, i
        }(Er),
        wr = function(e) {
          return e.replace(/^\s+|\s+$/g, "")
        },
        Cr = function(e) {
          return "".concat(e.label, " ").concat(e.value)
        },
        Tr = ["innerRef"];

      function Mr(e) {
        var t = e.innerRef,
          r = function(e) {
            for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++) r[i - 1] = arguments[i];
            var n = Object.entries(e).filter((function(e) {
              var t = l(e, 1)[0];
              return !r.includes(t)
            }));
            return n.reduce((function(e, t) {
              var r = l(t, 2),
                i = r[0],
                n = r[1];
              return e[i] = n, e
            }), {})
          }(c(e, Tr), "onExited", "in", "enter", "exit", "appear");
        return qe("input", (0, d.c)({
          ref: t
        }, r, {
          css: $e({
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
      var _r = ["boxSizing", "height", "overflow", "paddingRight", "position"],
        Ar = {
          boxSizing: "border-box",
          overflow: "hidden",
          position: "relative",
          height: "100%"
        };

      function kr(e) {
        e.preventDefault()
      }

      function Ir(e) {
        e.stopPropagation()
      }

      function Dr() {
        var e = this.scrollTop,
          t = this.scrollHeight,
          r = e + this.offsetHeight;
        0 === e ? this.scrollTop = 1 : r === t && (this.scrollTop = e - 1)
      }

      function Or() {
        return "ontouchstart" in window || navigator.maxTouchPoints
      }
      var Fr = !("undefined" == typeof window || !window.document || !window.document.createElement),
        Lr = 0,
        Vr = {
          capture: !1,
          passive: !1
        },
        Rr = function(e) {
          var t = e.target;
          return t.ownerDocument.activeElement && t.ownerDocument.activeElement.blur()
        },
        Br = {
          name: "1kfdb0e",
          styles: "position:fixed;left:0;bottom:0;right:0;top:0"
        };

      function Nr(e) {
        var t = e.children,
          r = e.lockEnabled,
          i = e.captureEnabled,
          n = function(e) {
            var t = e.isEnabled,
              r = e.onBottomArrive,
              i = e.onBottomLeave,
              n = e.onTopArrive,
              a = e.onTopLeave,
              s = (0, h.useRef)(!1),
              o = (0, h.useRef)(!1),
              l = (0, h.useRef)(0),
              u = (0, h.useRef)(null),
              c = (0, h.useCallback)((function(e, t) {
                if (null !== u.current) {
                  var l = u.current,
                    c = l.scrollTop,
                    h = l.scrollHeight,
                    p = l.clientHeight,
                    d = u.current,
                    f = t > 0,
                    m = h - p - c,
                    v = !1;
                  m > t && s.current && (i && i(e), s.current = !1), f && o.current && (a && a(e), o.current = !1), f && t > m ? (r && !s.current && r(e), d.scrollTop = h, v = !0, s.current = !0) : !f && -t > c && (n && !o.current && n(e), d.scrollTop = 0, v = !0, o.current = !0), v && function(e) {
                    e.cancelable && e.preventDefault(), e.stopPropagation()
                  }(e)
                }
              }), [r, i, n, a]),
              p = (0, h.useCallback)((function(e) {
                c(e, e.deltaY)
              }), [c]),
              d = (0, h.useCallback)((function(e) {
                l.current = e.changedTouches[0].clientY
              }), []),
              f = (0, h.useCallback)((function(e) {
                var t = l.current - e.changedTouches[0].clientY;
                c(e, t)
              }), [c]),
              m = (0, h.useCallback)((function(e) {
                if (e) {
                  var t = !!Dt && {
                    passive: !1
                  };
                  e.addEventListener("wheel", p, t), e.addEventListener("touchstart", d, t), e.addEventListener("touchmove", f, t)
                }
              }), [f, d, p]),
              v = (0, h.useCallback)((function(e) {
                e && (e.removeEventListener("wheel", p, !1), e.removeEventListener("touchstart", d, !1), e.removeEventListener("touchmove", f, !1))
              }), [f, d, p]);
            return (0, h.useEffect)((function() {
                if (t) {
                  var e = u.current;
                  return m(e),
                    function() {
                      v(e)
                    }
                }
              }), [t, m, v]),
              function(e) {
                u.current = e
              }
          }({
            isEnabled: void 0 === i || i,
            onBottomArrive: e.onBottomArrive,
            onBottomLeave: e.onBottomLeave,
            onTopArrive: e.onTopArrive,
            onTopLeave: e.onTopLeave
          }),
          a = function(e) {
            var t = e.isEnabled,
              r = e.accountForScrollbars,
              i = void 0 === r || r,
              n = (0, h.useRef)({}),
              a = (0, h.useRef)(null),
              s = (0, h.useCallback)((function(e) {
                if (Fr) {
                  var t = document.body,
                    r = t && t.style;
                  if (i && _r.forEach((function(e) {
                      var t = r && r[e];
                      n.current[e] = t
                    })), i && Lr < 1) {
                    var a = parseInt(n.current.paddingRight, 10) || 0,
                      s = document.body ? document.body.clientWidth : 0,
                      o = window.innerWidth - s + a || 0;
                    Object.keys(Ar).forEach((function(e) {
                      var t = Ar[e];
                      r && (r[e] = t)
                    })), r && (r.paddingRight = "".concat(o, "px"))
                  }
                  t && Or() && (t.addEventListener("touchmove", kr, Vr), e && (e.addEventListener("touchstart", Dr, Vr), e.addEventListener("touchmove", Ir, Vr))), Lr += 1
                }
              }), [i]),
              o = (0, h.useCallback)((function(e) {
                if (Fr) {
                  var t = document.body,
                    r = t && t.style;
                  Lr = Math.max(Lr - 1, 0), i && Lr < 1 && _r.forEach((function(e) {
                    var t = n.current[e];
                    r && (r[e] = t)
                  })), t && Or() && (t.removeEventListener("touchmove", kr, Vr), e && (e.removeEventListener("touchstart", Dr, Vr), e.removeEventListener("touchmove", Ir, Vr)))
                }
              }), [i]);
            return (0, h.useEffect)((function() {
                if (t) {
                  var e = a.current;
                  return s(e),
                    function() {
                      o(e)
                    }
                }
              }), [t, s, o]),
              function(e) {
                a.current = e
              }
          }({
            isEnabled: r
          });
        return qe(h.Fragment, null, r && qe("div", {
          onClick: Rr,
          css: Br
        }), t((function(e) {
          n(e), a(e)
        })))
      }
      var zr = {
          name: "1a0ro4n-requiredInput",
          styles: "label:requiredInput;opacity:0;pointer-events:none;position:absolute;bottom:0;left:0;right:0;width:100%"
        },
        Gr = function(e) {
          var t = e.name,
            r = e.onFocus;
          return qe("input", {
            required: !0,
            name: t,
            tabIndex: -1,
            "aria-hidden": "true",
            onFocus: r,
            css: zr,
            value: "",
            onChange: function() {}
          })
        },
        jr = {
          clearIndicator: er,
          container: function(e) {
            var t = e.isDisabled;
            return {
              label: "container",
              direction: e.isRtl ? "rtl" : void 0,
              pointerEvents: t ? "none" : void 0,
              position: "relative"
            }
          },
          control: function(e, t) {
            var r = e.isDisabled,
              i = e.isFocused,
              n = e.theme,
              s = n.colors,
              o = n.borderRadius;
            return a({
              label: "control",
              alignItems: "center",
              cursor: "default",
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
              minHeight: n.spacing.controlHeight,
              outline: "0 !important",
              position: "relative",
              transition: "all 100ms"
            }, t ? {} : {
              backgroundColor: r ? s.neutral5 : s.neutral0,
              borderColor: r ? s.neutral10 : i ? s.primary : s.neutral20,
              borderRadius: o,
              borderStyle: "solid",
              borderWidth: 1,
              boxShadow: i ? "0 0 0 1px ".concat(s.primary) : void 0,
              "&:hover": {
                borderColor: i ? s.primary : s.neutral30
              }
            })
          },
          dropdownIndicator: Qt,
          group: function(e, t) {
            var r = e.theme.spacing;
            return t ? {} : {
              paddingBottom: 2 * r.baseUnit,
              paddingTop: 2 * r.baseUnit
            }
          },
          groupHeading: function(e, t) {
            var r = e.theme,
              i = r.colors,
              n = r.spacing;
            return a({
              label: "group",
              cursor: "default",
              display: "block"
            }, t ? {} : {
              color: i.neutral40,
              fontSize: "75%",
              fontWeight: 500,
              marginBottom: "0.25em",
              paddingLeft: 3 * n.baseUnit,
              paddingRight: 3 * n.baseUnit,
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
          indicatorSeparator: function(e, t) {
            var r = e.isDisabled,
              i = e.theme,
              n = i.spacing.baseUnit,
              s = i.colors;
            return a({
              label: "indicatorSeparator",
              alignSelf: "stretch",
              width: 1
            }, t ? {} : {
              backgroundColor: r ? s.neutral10 : s.neutral20,
              marginBottom: 2 * n,
              marginTop: 2 * n
            })
          },
          input: function(e, t) {
            var r = e.isDisabled,
              i = e.value,
              n = e.theme,
              s = n.spacing,
              o = n.colors;
            return a(a({
              visibility: r ? "hidden" : "visible",
              transform: i ? "translateZ(0)" : ""
            }, sr), t ? {} : {
              margin: s.baseUnit / 2,
              paddingBottom: s.baseUnit / 2,
              paddingTop: s.baseUnit / 2,
              color: o.neutral80
            })
          },
          loadingIndicator: function(e, t) {
            var r = e.isFocused,
              i = e.size,
              n = e.theme,
              s = n.colors,
              o = n.spacing.baseUnit;
            return a({
              label: "loadingIndicator",
              display: "flex",
              transition: "color 150ms",
              alignSelf: "center",
              fontSize: i,
              lineHeight: 1,
              marginRight: i,
              textAlign: "center",
              verticalAlign: "middle"
            }, t ? {} : {
              color: r ? s.neutral60 : s.neutral20,
              padding: 2 * o
            })
          },
          loadingMessage: qt,
          menu: function(e, t) {
            var r, n = e.placement,
              s = e.theme,
              o = s.borderRadius,
              l = s.spacing,
              u = s.colors;
            return a((r = {
              label: "menu"
            }, (0, i.c)(r, function(e) {
              return e ? {
                bottom: "top",
                top: "bottom"
              } [e] : "bottom"
            }(n), "100%"), (0, i.c)(r, "position", "absolute"), (0, i.c)(r, "width", "100%"), (0, i.c)(r, "zIndex", 1), r), t ? {} : {
              backgroundColor: u.neutral0,
              borderRadius: o,
              boxShadow: "0 0 0 1px hsla(0, 0%, 0%, 0.1), 0 4px 11px hsla(0, 0%, 0%, 0.1)",
              marginBottom: l.menuGutter,
              marginTop: l.menuGutter
            })
          },
          menuList: function(e, t) {
            var r = e.maxHeight,
              i = e.theme.spacing.baseUnit;
            return a({
              maxHeight: r,
              overflowY: "auto",
              position: "relative",
              WebkitOverflowScrolling: "touch"
            }, t ? {} : {
              paddingBottom: i,
              paddingTop: i
            })
          },
          menuPortal: function(e) {
            var t = e.rect,
              r = e.offset,
              i = e.position;
            return {
              left: t.left,
              position: i,
              top: r,
              width: t.width,
              zIndex: 1
            }
          },
          multiValue: function(e, t) {
            var r = e.theme,
              i = r.spacing,
              n = r.borderRadius,
              s = r.colors;
            return a({
              label: "multiValue",
              display: "flex",
              minWidth: 0
            }, t ? {} : {
              backgroundColor: s.neutral10,
              borderRadius: n / 2,
              margin: i.baseUnit / 2
            })
          },
          multiValueLabel: function(e, t) {
            var r = e.theme,
              i = r.borderRadius,
              n = r.colors,
              s = e.cropWithEllipsis;
            return a({
              overflow: "hidden",
              textOverflow: s || void 0 === s ? "ellipsis" : void 0,
              whiteSpace: "nowrap"
            }, t ? {} : {
              borderRadius: i / 2,
              color: n.neutral80,
              fontSize: "85%",
              padding: 3,
              paddingLeft: 6
            })
          },
          multiValueRemove: function(e, t) {
            var r = e.theme,
              i = r.spacing,
              n = r.borderRadius,
              s = r.colors,
              o = e.isFocused;
            return a({
              alignItems: "center",
              display: "flex"
            }, t ? {} : {
              borderRadius: n / 2,
              backgroundColor: o ? s.dangerLight : void 0,
              paddingLeft: i.baseUnit,
              paddingRight: i.baseUnit,
              ":hover": {
                backgroundColor: s.dangerLight,
                color: s.danger
              }
            })
          },
          noOptionsMessage: Wt,
          option: function(e, t) {
            var r = e.isDisabled,
              i = e.isFocused,
              n = e.isSelected,
              s = e.theme,
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
            }, t ? {} : {
              backgroundColor: n ? l.primary : i ? l.primary25 : "transparent",
              color: r ? l.neutral20 : n ? l.neutral0 : "inherit",
              padding: "".concat(2 * o.baseUnit, "px ").concat(3 * o.baseUnit, "px"),
              ":active": {
                backgroundColor: r ? void 0 : n ? l.primary : l.primary50
              }
            })
          },
          placeholder: function(e, t) {
            var r = e.theme,
              i = r.spacing,
              n = r.colors;
            return a({
              label: "placeholder",
              gridArea: "1 / 1 / 2 / 3"
            }, t ? {} : {
              color: n.neutral50,
              marginLeft: i.baseUnit / 2,
              marginRight: i.baseUnit / 2
            })
          },
          singleValue: function(e, t) {
            var r = e.isDisabled,
              i = e.theme,
              n = i.spacing,
              s = i.colors;
            return a({
              label: "singleValue",
              gridArea: "1 / 1 / 2 / 3",
              maxWidth: "100%",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap"
            }, t ? {} : {
              color: r ? s.neutral40 : s.neutral80,
              marginLeft: n.baseUnit / 2,
              marginRight: n.baseUnit / 2
            })
          },
          valueContainer: function(e, t) {
            var r = e.theme.spacing,
              i = e.isMulti,
              n = e.hasValue,
              s = e.selectProps.controlShouldRenderValue;
            return a({
              alignItems: "center",
              display: i && n && s ? "flex" : "grid",
              flex: 1,
              flexWrap: "wrap",
              WebkitOverflowScrolling: "touch",
              position: "relative",
              overflow: "hidden"
            }, t ? {} : {
              padding: "".concat(r.baseUnit / 2, "px ").concat(2 * r.baseUnit, "px")
            })
          }
        },
        Hr = {
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
        Wr = {
          "aria-live": "polite",
          backspaceRemovesValue: !0,
          blurInputOnSelect: _t(),
          captureMenuScroll: !_t(),
          classNames: {},
          closeMenuOnSelect: !0,
          closeMenuOnScroll: !1,
          components: {},
          controlShouldRenderValue: !0,
          escapeClearsValue: !1,
          filterOption: function(e, t) {
            if (e.data.__isNew__) return !0;
            var r = a({
                ignoreCase: !0,
                ignoreAccents: !0,
                stringify: Cr,
                trim: !0,
                matchFrom: "any"
              }, undefined),
              i = r.ignoreCase,
              n = r.ignoreAccents,
              s = r.stringify,
              o = r.trim,
              l = r.matchFrom,
              u = o ? wr(t) : t,
              c = o ? wr(s(e)) : s(e);
            return i && (u = u.toLowerCase(), c = c.toLowerCase()), n && (u = Pr(u), c = Er(c)), "start" === l ? c.substr(0, u.length) === u : c.indexOf(u) > -1
          },
          formatGroupLabel: function(e) {
            return e.label
          },
          getOptionLabel: function(e) {
            return e.label
          },
          getOptionValue: function(e) {
            return e.value
          },
          isDisabled: !1,
          isLoading: !1,
          isMulti: !1,
          isRtl: !1,
          isSearchable: !0,
          isOptionDisabled: function(e) {
            return !!e.isDisabled
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
            } catch (e) {
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
          screenReaderStatus: function(e) {
            var t = e.count;
            return "".concat(t, " result").concat(1 !== t ? "s" : "", " available")
          },
          styles: {},
          tabIndex: 0,
          tabSelectsValue: !0,
          unstyled: !1
        };

      function qr(e, t, r, i) {
        return {
          type: "option",
          data: t,
          isDisabled: Zr(e, t, r),
          isSelected: Jr(e, t, r),
          label: Xr(e, t),
          value: Kr(e, t),
          index: i
        }
      }

      function $r(e, t) {
        return e.options.map((function(r, i) {
          if ("options" in r) {
            var n = r.options.map((function(r, i) {
              return qr(e, r, t, i)
            })).filter((function(t) {
              return Yr(e, t)
            }));
            return n.length > 0 ? {
              type: "group",
              data: r,
              options: n,
              index: i
            } : void 0
          }
          var a = qr(e, r, t, i);
          return Yr(e, a) ? a : void 0
        })).filter(Ot)
      }

      function Ur(e) {
        return e.reduce((function(e, t) {
          return "group" === t.type ? e.push.apply(e, S(t.options.map((function(e) {
            return e.data
          })))) : e.push(t.data), e
        }), [])
      }

      function Yr(e, t) {
        var r = e.inputValue,
          i = void 0 === r ? "" : r,
          n = t.data,
          a = t.isSelected,
          s = t.label,
          o = t.value;
        return (!ei(e) || !a) && Qr(e, {
          label: s,
          value: o,
          data: n
        }, i)
      }
      var Xr = function(e, t) {
          return e.getOptionLabel(t)
        },
        Kr = function(e, t) {
          return e.getOptionValue(t)
        };

      function Zr(e, t, r) {
        return "function" == typeof e.isOptionDisabled && e.isOptionDisabled(t, r)
      }

      function Jr(e, t, r) {
        if (r.indexOf(t) > -1) return !0;
        if ("function" == typeof e.isOptionSelected) return e.isOptionSelected(t, r);
        var i = Kr(e, t);
        return r.some((function(t) {
          return Kr(e, t) === i
        }))
      }

      function Qr(e, t, r) {
        return !e.filterOption || e.filterOption(t, r)
      }
      var ei = function(e) {
          var t = e.hideSelectedOptions,
            r = e.isMulti;
          return void 0 === t ? r : t
        },
        ti = 1,
        ri = function(e) {
          ! function(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
              constructor: {
                value: e,
                writable: !0,
                configurable: !0
              }
            }), Object.defineProperty(e, "prototype", {
              writable: !1
            }), t && (0, v.c)(e, t)
          }(s, e);
          var t, r, i, n = b(s);

          function s(e) {
            var t;
            if (function(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
              }(this, s), (t = n.call(this, e)).state = {
                ariaSelection: null,
                focusedOption: null,
                focusedValue: null,
                inputIsHidden: !1,
                isFocused: !1,
                selectValue: [],
                clearFocusValueOnUpdate: !1,
                prevWasFocused: !1,
                inputIsHiddenAfterUpdate: void 0,
                prevProps: void 0
              }, t.blockOptionHover = !1, t.isComposing = !1, t.commonProps = void 0, t.initialTouchX = 0, t.initialTouchY = 0, t.instancePrefix = "", t.openAfterFocus = !1, t.scrollToFocusedOptionOnUpdate = !1, t.userIsDragging = void 0, t.controlRef = null, t.getControlRef = function(e) {
                t.controlRef = e
              }, t.focusedOptionRef = null, t.getFocusedOptionRef = function(e) {
                t.focusedOptionRef = e
              }, t.menuListRef = null, t.getMenuListRef = function(e) {
                t.menuListRef = e
              }, t.inputRef = null, t.getInputRef = function(e) {
                t.inputRef = e
              }, t.focus = t.focusInput, t.blur = t.blurInput, t.onChange = function(e, r) {
                var i = t.props,
                  n = i.onChange,
                  a = i.name;
                r.name = a, t.ariaOnChange(e, r), n(e, r)
              }, t.setValue = function(e, r, i) {
                var n = t.props,
                  a = n.closeMenuOnSelect,
                  s = n.isMulti,
                  o = n.inputValue;
                t.onInputChange("", {
                  action: "set-value",
                  prevInputValue: o
                }), a && (t.setState({
                  inputIsHiddenAfterUpdate: !s
                }), t.onMenuClose()), t.setState({
                  clearFocusValueOnUpdate: !0
                }), t.onChange(e, {
                  action: r,
                  option: i
                })
              }, t.selectOption = function(e) {
                var r = t.props,
                  i = r.blurInputOnSelect,
                  n = r.isMulti,
                  a = r.name,
                  s = t.state.selectValue,
                  o = n && t.isOptionSelected(e, s),
                  l = t.isOptionDisabled(e, s);
                if (o) {
                  var u = t.getOptionValue(e);
                  t.setValue(s.filter((function(e) {
                    return t.getOptionValue(e) !== u
                  })), "deselect-option", e)
                } else {
                  if (l) return void t.ariaOnChange(e, {
                    action: "select-option",
                    option: e,
                    name: a
                  });
                  n ? t.setValue([].concat(S(s), [e]), "select-option", e) : t.setValue(e, "select-option")
                }
                i && t.blurInput()
              }, t.removeValue = function(e) {
                var r = t.props.isMulti,
                  i = t.state.selectValue,
                  n = t.getOptionValue(e),
                  a = i.filter((function(e) {
                    return t.getOptionValue(e) !== n
                  })),
                  s = Ft(r, a, a[0] || null);
                t.onChange(s, {
                  action: "remove-value",
                  removedValue: e
                }), t.focusInput()
              }, t.clearValue = function() {
                var e = t.state.selectValue;
                t.onChange(Ft(t.props.isMulti, [], null), {
                  action: "clear",
                  removedValues: e
                })
              }, t.popValue = function() {
                var e = t.props.isMulti,
                  r = t.state.selectValue,
                  i = r[r.length - 1],
                  n = r.slice(0, r.length - 1),
                  a = Ft(e, n, n[0] || null);
                t.onChange(a, {
                  action: "pop-value",
                  removedValue: i
                })
              }, t.getValue = function() {
                return t.state.selectValue
              }, t.cx = function() {
                for (var e = arguments.length, r = new Array(e), i = 0; i < e; i++) r[i] = arguments[i];
                return bt.apply(void 0, [t.props.classNamePrefix].concat(r))
              }, t.getOptionLabel = function(e) {
                return Xr(t.props, e)
              }, t.getOptionValue = function(e) {
                return Kr(t.props, e)
              }, t.getStyles = function(e, r) {
                var i = t.props.unstyled,
                  n = jr[e](r, i);
                n.boxSizing = "border-box";
                var a = t.props.styles[e];
                return a ? a(n, r) : n
              }, t.getClassNames = function(e, r) {
                var i, n;
                return null === (i = (n = t.props.classNames)[e]) || void 0 === i ? void 0 : i.call(n, r)
              }, t.getElementId = function(e) {
                return "".concat(t.instancePrefix, "-").concat(e)
              }, t.getComponents = function() {
                return e = t.props, a(a({}, ur), e.components);
                var e
              }, t.buildCategorizedOptions = function() {
                return $r(t.props, t.state.selectValue)
              }, t.getCategorizedOptions = function() {
                return t.props.menuIsOpen ? t.buildCategorizedOptions() : []
              }, t.buildFocusableOptions = function() {
                return Ur(t.buildCategorizedOptions())
              }, t.getFocusableOptions = function() {
                return t.props.menuIsOpen ? t.buildFocusableOptions() : []
              }, t.ariaOnChange = function(e, r) {
                t.setState({
                  ariaSelection: a({
                    value: e
                  }, r)
                })
              }, t.onMenuMouseDown = function(e) {
                0 === e.button && (e.stopPropagation(), e.preventDefault(), t.focusInput())
              }, t.onMenuMouseMove = function(e) {
                t.blockOptionHover = !1
              }, t.onControlMouseDown = function(e) {
                if (!e.defaultPrevented) {
                  var r = t.props.openMenuOnClick;
                  t.state.isFocused ? t.props.menuIsOpen ? "INPUT" !== e.target.tagName && "TEXTAREA" !== e.target.tagName && t.onMenuClose() : r && t.openMenu("first") : (r && (t.openAfterFocus = !0), t.focusInput()), "INPUT" !== e.target.tagName && "TEXTAREA" !== e.target.tagName && e.preventDefault()
                }
              }, t.onDropdownIndicatorMouseDown = function(e) {
                if (!(e && "mousedown" === e.type && 0 !== e.button || t.props.isDisabled)) {
                  var r = t.props,
                    i = r.isMulti,
                    n = r.menuIsOpen;
                  t.focusInput(), n ? (t.setState({
                    inputIsHiddenAfterUpdate: !i
                  }), t.onMenuClose()) : t.openMenu("first"), e.preventDefault()
                }
              }, t.onClearIndicatorMouseDown = function(e) {
                e && "mousedown" === e.type && 0 !== e.button || (t.clearValue(), e.preventDefault(), t.openAfterFocus = !1, "touchend" === e.type ? t.focusInput() : setTimeout((function() {
                  return t.focusInput()
                })))
              }, t.onScroll = function(e) {
                "boolean" == typeof t.props.closeMenuOnScroll ? e.target instanceof HTMLElement && Pt(e.target) && t.props.onMenuClose() : "function" == typeof t.props.closeMenuOnScroll && t.props.closeMenuOnScroll(e) && t.props.onMenuClose()
              }, t.onCompositionStart = function() {
                t.isComposing = !0
              }, t.onCompositionEnd = function() {
                t.isComposing = !1
              }, t.onTouchStart = function(e) {
                var r = e.touches,
                  i = r && r.item(0);
                i && (t.initialTouchX = i.clientX, t.initialTouchY = i.clientY, t.userIsDragging = !1)
              }, t.onTouchMove = function(e) {
                var r = e.touches,
                  i = r && r.item(0);
                if (i) {
                  var n = Math.abs(i.clientX - t.initialTouchX),
                    a = Math.abs(i.clientY - t.initialTouchY);
                  t.userIsDragging = n > 5 || a > 5
                }
              }, t.onTouchEnd = function(e) {
                t.userIsDragging || (t.controlRef && !t.controlRef.contains(e.target) && t.menuListRef && !t.menuListRef.contains(e.target) && t.blurInput(), t.initialTouchX = 0, t.initialTouchY = 0)
              }, t.onControlTouchEnd = function(e) {
                t.userIsDragging || t.onControlMouseDown(e)
              }, t.onClearIndicatorTouchEnd = function(e) {
                t.userIsDragging || t.onClearIndicatorMouseDown(e)
              }, t.onDropdownIndicatorTouchEnd = function(e) {
                t.userIsDragging || t.onDropdownIndicatorMouseDown(e)
              }, t.handleInputChange = function(e) {
                var r = t.props.inputValue,
                  i = e.currentTarget.value;
                t.setState({
                  inputIsHiddenAfterUpdate: !1
                }), t.onInputChange(i, {
                  action: "input-change",
                  prevInputValue: r
                }), t.props.menuIsOpen || t.onMenuOpen()
              }, t.onInputFocus = function(e) {
                t.props.onFocus && t.props.onFocus(e), t.setState({
                  inputIsHiddenAfterUpdate: !1,
                  isFocused: !0
                }), (t.openAfterFocus || t.props.openMenuOnFocus) && t.openMenu("first"), t.openAfterFocus = !1
              }, t.onInputBlur = function(e) {
                var r = t.props.inputValue;
                t.menuListRef && t.menuListRef.contains(document.activeElement) ? t.inputRef.focus() : (t.props.onBlur && t.props.onBlur(e), t.onInputChange("", {
                  action: "input-blur",
                  prevInputValue: r
                }), t.onMenuClose(), t.setState({
                  focusedValue: null,
                  isFocused: !1
                }))
              }, t.onOptionHover = function(e) {
                t.blockOptionHover || t.state.focusedOption === e || t.setState({
                  focusedOption: e
                })
              }, t.shouldHideSelectedOptions = function() {
                return ei(t.props)
              }, t.onValueInputFocus = function(e) {
                e.preventDefault(), e.stopPropagation(), t.focus()
              }, t.onKeyDown = function(e) {
                var r = t.props,
                  i = r.isMulti,
                  n = r.backspaceRemovesValue,
                  a = r.escapeClearsValue,
                  s = r.inputValue,
                  o = r.isClearable,
                  l = r.isDisabled,
                  u = r.menuIsOpen,
                  c = r.onKeyDown,
                  h = r.tabSelectsValue,
                  p = r.openMenuOnFocus,
                  d = t.state,
                  f = d.focusedOption,
                  m = d.focusedValue,
                  v = d.selectValue;
                if (!(l || "function" == typeof c && (c(e), e.defaultPrevented))) {
                  switch (t.blockOptionHover = !0, e.key) {
                    case "ArrowLeft":
                      if (!i || s) return;
                      t.focusValue("previous");
                      break;
                    case "ArrowRight":
                      if (!i || s) return;
                      t.focusValue("next");
                      break;
                    case "Delete":
                    case "Backspace":
                      if (s) return;
                      if (m) t.removeValue(m);
                      else {
                        if (!n) return;
                        i ? t.popValue() : o && t.clearValue()
                      }
                      break;
                    case "Tab":
                      if (t.isComposing) return;
                      if (e.shiftKey || !u || !h || !f || p && t.isOptionSelected(f, v)) return;
                      t.selectOption(f);
                      break;
                    case "Enter":
                      if (229 === e.keyCode) break;
                      if (u) {
                        if (!f) return;
                        if (t.isComposing) return;
                        t.selectOption(f);
                        break
                      }
                      return;
                    case "Escape":
                      u ? (t.setState({
                        inputIsHiddenAfterUpdate: !1
                      }), t.onInputChange("", {
                        action: "menu-close",
                        prevInputValue: s
                      }), t.onMenuClose()) : o && a && t.clearValue();
                      break;
                    case " ":
                      if (s) return;
                      if (!u) {
                        t.openMenu("first");
                        break
                      }
                      if (!f) return;
                      t.selectOption(f);
                      break;
                    case "ArrowUp":
                      u ? t.focusOption("up") : t.openMenu("last");
                      break;
                    case "ArrowDown":
                      u ? t.focusOption("down") : t.openMenu("first");
                      break;
                    case "PageUp":
                      if (!u) return;
                      t.focusOption("pageup");
                      break;
                    case "PageDown":
                      if (!u) return;
                      t.focusOption("pagedown");
                      break;
                    case "Home":
                      if (!u) return;
                      t.focusOption("first");
                      break;
                    case "End":
                      if (!u) return;
                      t.focusOption("last");
                      break;
                    default:
                      return
                  }
                  e.preventDefault()
                }
              }, t.instancePrefix = "react-select-" + (t.props.instanceId || ++ti), t.state.selectValue = St(e.value), e.menuIsOpen && t.state.selectValue.length) {
              var r = t.buildFocusableOptions(),
                i = r.indexOf(t.state.selectValue[0]);
              t.state.focusedOption = r[i]
            }
            return t
          }
          return t = s, r = [{
            key: "componentDidMount",
            value: function() {
              this.startListeningComposition(), this.startListeningToTouch(), this.props.closeMenuOnScroll && document && document.addEventListener && document.addEventListener("scroll", this.onScroll, !0), this.props.autoFocus && this.focusInput(), this.props.menuIsOpen && this.state.focusedOption && this.menuListRef && this.focusedOptionRef && Mt(this.menuListRef, this.focusedOptionRef)
            }
          }, {
            key: "componentDidUpdate",
            value: function(e) {
              var t = this.props,
                r = t.isDisabled,
                i = t.menuIsOpen,
                n = this.state.isFocused;
              (n && !r && e.isDisabled || n && i && !e.menuIsOpen) && this.focusInput(), n && r && !e.isDisabled ? this.setState({
                isFocused: !1
              }, this.onMenuClose) : n || r || !e.isDisabled || this.inputRef !== document.activeElement || this.setState({
                isFocused: !0
              }), this.menuListRef && this.focusedOptionRef && this.scrollToFocusedOptionOnUpdate && (Mt(this.menuListRef, this.focusedOptionRef), this.scrollToFocusedOptionOnUpdate = !1)
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
            value: function(e, t) {
              this.props.onInputChange(e, t)
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
            value: function(e) {
              var t = this,
                r = this.state,
                i = r.selectValue,
                n = r.isFocused,
                a = this.buildFocusableOptions(),
                s = "first" === e ? 0 : a.length - 1;
              if (!this.props.isMulti) {
                var o = a.indexOf(i[0]);
                o > -1 && (s = o)
              }
              this.scrollToFocusedOptionOnUpdate = !(n && this.menuListRef), this.setState({
                inputIsHiddenAfterUpdate: !1,
                focusedValue: null,
                focusedOption: a[s]
              }, (function() {
                return t.onMenuOpen()
              }))
            }
          }, {
            key: "focusValue",
            value: function(e) {
              var t = this.state,
                r = t.selectValue,
                i = t.focusedValue;
              if (this.props.isMulti) {
                this.setState({
                  focusedOption: null
                });
                var n = r.indexOf(i);
                i || (n = -1);
                var a = r.length - 1,
                  s = -1;
                if (r.length) {
                  switch (e) {
                    case "previous":
                      s = 0 === n ? 0 : -1 === n ? a : n - 1;
                      break;
                    case "next":
                      n > -1 && n < a && (s = n + 1)
                  }
                  this.setState({
                    inputIsHidden: -1 !== s,
                    focusedValue: r[s]
                  })
                }
              }
            }
          }, {
            key: "focusOption",
            value: function() {
              var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "first",
                t = this.props.pageSize,
                r = this.state.focusedOption,
                i = this.getFocusableOptions();
              if (i.length) {
                var n = 0,
                  a = i.indexOf(r);
                r || (a = -1), "up" === e ? n = a > 0 ? a - 1 : i.length - 1 : "down" === e ? n = (a + 1) % i.length : "pageup" === e ? (n = a - t) < 0 && (n = 0) : "pagedown" === e ? (n = a + t) > i.length - 1 && (n = i.length - 1) : "last" === e && (n = i.length - 1), this.scrollToFocusedOptionOnUpdate = !0, this.setState({
                  focusedOption: i[n],
                  focusedValue: null
                })
              }
            }
          }, {
            key: "getTheme",
            value: function() {
              return this.props.theme ? "function" == typeof this.props.theme ? this.props.theme(Hr) : a(a({}, Hr), this.props.theme) : Hr
            }
          }, {
            key: "getCommonProps",
            value: function() {
              var e = this.clearValue,
                t = this.cx,
                r = this.getStyles,
                i = this.getClassNames,
                n = this.getValue,
                a = this.selectOption,
                s = this.setValue,
                o = this.props,
                l = o.isMulti,
                u = o.isRtl,
                c = o.options;
              return {
                clearValue: e,
                cx: t,
                getStyles: r,
                getClassNames: i,
                getValue: n,
                hasValue: this.hasValue(),
                isMulti: l,
                isRtl: u,
                options: c,
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
              var e = this.props,
                t = e.isClearable,
                r = e.isMulti;
              return void 0 === t ? r : t
            }
          }, {
            key: "isOptionDisabled",
            value: function(e, t) {
              return Zr(this.props, e, t)
            }
          }, {
            key: "isOptionSelected",
            value: function(e, t) {
              return Jr(this.props, e, t)
            }
          }, {
            key: "filterOption",
            value: function(e, t) {
              return Qr(this.props, e, t)
            }
          }, {
            key: "formatOptionLabel",
            value: function(e, t) {
              if ("function" == typeof this.props.formatOptionLabel) {
                var r = this.props.inputValue,
                  i = this.state.selectValue;
                return this.props.formatOptionLabel(e, {
                  context: t,
                  inputValue: r,
                  selectValue: i
                })
              }
              return this.getOptionLabel(e)
            }
          }, {
            key: "formatGroupLabel",
            value: function(e) {
              return this.props.formatGroupLabel(e)
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
              var e = this.props,
                t = e.isDisabled,
                r = e.isSearchable,
                i = e.inputId,
                n = e.inputValue,
                s = e.tabIndex,
                o = e.form,
                l = e.menuIsOpen,
                u = e.required,
                c = this.getComponents().Input,
                p = this.state,
                f = p.inputIsHidden,
                m = p.ariaSelection,
                v = this.commonProps,
                g = i || this.getElementId("input"),
                y = a(a(a({
                  "aria-autocomplete": "list",
                  "aria-expanded": l,
                  "aria-haspopup": !0,
                  "aria-errormessage": this.props["aria-errormessage"],
                  "aria-invalid": this.props["aria-invalid"],
                  "aria-label": this.props["aria-label"],
                  "aria-labelledby": this.props["aria-labelledby"],
                  "aria-required": u,
                  role: "combobox"
                }, l && {
                  "aria-controls": this.getElementId("listbox"),
                  "aria-owns": this.getElementId("listbox")
                }), !r && {
                  "aria-readonly": !0
                }), this.hasValue() ? "initial-input-focus" === (null == m ? void 0 : m.action) && {
                  "aria-describedby": this.getElementId("live-region")
                } : {
                  "aria-describedby": this.getElementId("placeholder")
                });
              return r ? h.createElement(c, (0, d.c)({}, v, {
                autoCapitalize: "none",
                autoComplete: "off",
                autoCorrect: "off",
                id: g,
                innerRef: this.getInputRef,
                isDisabled: t,
                isHidden: f,
                onBlur: this.onInputBlur,
                onChange: this.handleInputChange,
                onFocus: this.onInputFocus,
                spellCheck: "false",
                tabIndex: s,
                form: o,
                type: "text",
                value: n
              }, y)) : h.createElement(Mr, (0, d.c)({
                id: g,
                innerRef: this.getInputRef,
                onBlur: this.onInputBlur,
                onChange: gt,
                onFocus: this.onInputFocus,
                disabled: t,
                tabIndex: s,
                inputMode: "none",
                form: o,
                value: ""
              }, y))
            }
          }, {
            key: "renderPlaceholderOrValue",
            value: function() {
              var e = this,
                t = this.getComponents(),
                r = t.MultiValue,
                i = t.MultiValueContainer,
                n = t.MultiValueLabel,
                a = t.MultiValueRemove,
                s = t.SingleValue,
                o = t.Placeholder,
                l = this.commonProps,
                u = this.props,
                c = u.controlShouldRenderValue,
                p = u.isDisabled,
                f = u.isMulti,
                m = u.inputValue,
                v = u.placeholder,
                g = this.state,
                y = g.selectValue,
                b = g.focusedValue,
                S = g.isFocused;
              if (!this.hasValue() || !c) return m ? null : h.createElement(o, (0, d.c)({}, l, {
                key: "placeholder",
                isDisabled: p,
                isFocused: S,
                innerProps: {
                  id: this.getElementId("placeholder")
                }
              }), v);
              if (f) return y.map((function(t, s) {
                var o = t === b,
                  u = "".concat(e.getOptionLabel(t), "-").concat(e.getOptionValue(t));
                return h.createElement(r, (0, d.c)({}, l, {
                  components: {
                    Container: i,
                    Label: n,
                    Remove: a
                  },
                  isFocused: o,
                  isDisabled: p,
                  key: u,
                  index: s,
                  removeProps: {
                    onClick: function() {
                      return e.removeValue(t)
                    },
                    onTouchEnd: function() {
                      return e.removeValue(t)
                    },
                    onMouseDown: function(e) {
                      e.preventDefault()
                    }
                  },
                  data: t
                }), e.formatOptionLabel(t, "value"))
              }));
              if (m) return null;
              var x = y[0];
              return h.createElement(s, (0, d.c)({}, l, {
                data: x,
                isDisabled: p
              }), this.formatOptionLabel(x, "value"))
            }
          }, {
            key: "renderClearIndicator",
            value: function() {
              var e = this.getComponents().ClearIndicator,
                t = this.commonProps,
                r = this.props,
                i = r.isDisabled,
                n = r.isLoading,
                a = this.state.isFocused;
              if (!this.isClearable() || !e || i || !this.hasValue() || n) return null;
              var s = {
                onMouseDown: this.onClearIndicatorMouseDown,
                onTouchEnd: this.onClearIndicatorTouchEnd,
                "aria-hidden": "true"
              };
              return h.createElement(e, (0, d.c)({}, t, {
                innerProps: s,
                isFocused: a
              }))
            }
          }, {
            key: "renderLoadingIndicator",
            value: function() {
              var e = this.getComponents().LoadingIndicator,
                t = this.commonProps,
                r = this.props,
                i = r.isDisabled,
                n = r.isLoading,
                a = this.state.isFocused;
              return e && n ? h.createElement(e, (0, d.c)({}, t, {
                innerProps: {
                  "aria-hidden": "true"
                },
                isDisabled: i,
                isFocused: a
              })) : null
            }
          }, {
            key: "renderIndicatorSeparator",
            value: function() {
              var e = this.getComponents(),
                t = e.DropdownIndicator,
                r = e.IndicatorSeparator;
              if (!t || !r) return null;
              var i = this.commonProps,
                n = this.props.isDisabled,
                a = this.state.isFocused;
              return h.createElement(r, (0, d.c)({}, i, {
                isDisabled: n,
                isFocused: a
              }))
            }
          }, {
            key: "renderDropdownIndicator",
            value: function() {
              var e = this.getComponents().DropdownIndicator;
              if (!e) return null;
              var t = this.commonProps,
                r = this.props.isDisabled,
                i = this.state.isFocused,
                n = {
                  onMouseDown: this.onDropdownIndicatorMouseDown,
                  onTouchEnd: this.onDropdownIndicatorTouchEnd,
                  "aria-hidden": "true"
                };
              return h.createElement(e, (0, d.c)({}, t, {
                innerProps: n,
                isDisabled: r,
                isFocused: i
              }))
            }
          }, {
            key: "renderMenu",
            value: function() {
              var e = this,
                t = this.getComponents(),
                r = t.Group,
                i = t.GroupHeading,
                n = t.Menu,
                a = t.MenuList,
                s = t.MenuPortal,
                o = t.LoadingMessage,
                l = t.NoOptionsMessage,
                u = t.Option,
                c = this.commonProps,
                p = this.state.focusedOption,
                f = this.props,
                m = f.captureMenuScroll,
                v = f.inputValue,
                g = f.isLoading,
                y = f.loadingMessage,
                b = f.minMenuHeight,
                S = f.maxMenuHeight,
                x = f.menuIsOpen,
                E = f.menuPlacement,
                P = f.menuPosition,
                w = f.menuPortalTarget,
                C = f.menuShouldBlockScroll,
                T = f.menuShouldScrollIntoView,
                M = f.noOptionsMessage,
                _ = f.onMenuScrollToTop,
                A = f.onMenuScrollToBottom;
              if (!x) return null;
              var k, I = function(t, r) {
                var i = t.type,
                  n = t.data,
                  a = t.isDisabled,
                  s = t.isSelected,
                  o = t.label,
                  l = t.value,
                  f = p === n,
                  m = a ? void 0 : function() {
                    return e.onOptionHover(n)
                  },
                  v = a ? void 0 : function() {
                    return e.selectOption(n)
                  },
                  g = "".concat(e.getElementId("option"), "-").concat(r),
                  y = {
                    id: g,
                    onClick: v,
                    onMouseMove: m,
                    onMouseOver: m,
                    tabIndex: -1
                  };
                return h.createElement(u, (0, d.c)({}, c, {
                  innerProps: y,
                  data: n,
                  isDisabled: a,
                  isSelected: s,
                  key: g,
                  label: o,
                  type: i,
                  value: l,
                  isFocused: f,
                  innerRef: f ? e.getFocusedOptionRef : void 0
                }), e.formatOptionLabel(t.data, "menu"))
              };
              if (this.hasOptions()) k = this.getCategorizedOptions().map((function(t) {
                if ("group" === t.type) {
                  var n = t.data,
                    a = t.options,
                    s = t.index,
                    o = "".concat(e.getElementId("group"), "-").concat(s),
                    l = "".concat(o, "-heading");
                  return h.createElement(r, (0, d.c)({}, c, {
                    key: o,
                    data: n,
                    options: a,
                    Heading: i,
                    headingProps: {
                      id: l,
                      data: t.data
                    },
                    label: e.formatGroupLabel(t.data)
                  }), t.options.map((function(e) {
                    return I(e, "".concat(s, "-").concat(e.index))
                  })))
                }
                if ("option" === t.type) return I(t, "".concat(t.index))
              }));
              else if (g) {
                var D = y({
                  inputValue: v
                });
                if (null === D) return null;
                k = h.createElement(o, c, D)
              } else {
                var O = M({
                  inputValue: v
                });
                if (null === O) return null;
                k = h.createElement(l, c, O)
              }
              var F = {
                  minMenuHeight: b,
                  maxMenuHeight: S,
                  menuPlacement: E,
                  menuPosition: P,
                  menuShouldScrollIntoView: T
                },
                L = h.createElement(jt, (0, d.c)({}, c, F), (function(t) {
                  var r = t.ref,
                    i = t.placerProps,
                    s = i.placement,
                    o = i.maxHeight;
                  return h.createElement(n, (0, d.c)({}, c, F, {
                    innerRef: r,
                    innerProps: {
                      onMouseDown: e.onMenuMouseDown,
                      onMouseMove: e.onMenuMouseMove,
                      id: e.getElementId("listbox")
                    },
                    isLoading: g,
                    placement: s
                  }), h.createElement(Nr, {
                    captureEnabled: m,
                    onTopArrive: _,
                    onBottomArrive: A,
                    lockEnabled: C
                  }, (function(t) {
                    return h.createElement(a, (0, d.c)({}, c, {
                      innerRef: function(r) {
                        e.getMenuListRef(r), t(r)
                      },
                      isLoading: g,
                      maxHeight: o,
                      focusedOption: p
                    }), k)
                  })))
                }));
              return w || "fixed" === P ? h.createElement(s, (0, d.c)({}, c, {
                appendTo: w,
                controlElement: this.controlRef,
                menuPlacement: E,
                menuPosition: P
              }), L) : L
            }
          }, {
            key: "renderFormField",
            value: function() {
              var e = this,
                t = this.props,
                r = t.delimiter,
                i = t.isDisabled,
                n = t.isMulti,
                a = t.name,
                s = t.required,
                o = this.state.selectValue;
              if (s && !this.hasValue() && !i) return h.createElement(Gr, {
                name: a,
                onFocus: this.onValueInputFocus
              });
              if (a && !i) {
                if (n) {
                  if (r) {
                    var l = o.map((function(t) {
                      return e.getOptionValue(t)
                    })).join(r);
                    return h.createElement("input", {
                      name: a,
                      type: "hidden",
                      value: l
                    })
                  }
                  var u = o.length > 0 ? o.map((function(t, r) {
                    return h.createElement("input", {
                      key: "i-".concat(r),
                      name: a,
                      type: "hidden",
                      value: e.getOptionValue(t)
                    })
                  })) : h.createElement("input", {
                    name: a,
                    type: "hidden",
                    value: ""
                  });
                  return h.createElement("div", null, u)
                }
                var c = o[0] ? this.getOptionValue(o[0]) : "";
                return h.createElement("input", {
                  name: a,
                  type: "hidden",
                  value: c
                })
              }
            }
          }, {
            key: "renderLiveRegion",
            value: function() {
              var e = this.commonProps,
                t = this.state,
                r = t.ariaSelection,
                i = t.focusedOption,
                n = t.focusedValue,
                a = t.isFocused,
                s = t.selectValue,
                o = this.getFocusableOptions();
              return h.createElement(mr, (0, d.c)({}, e, {
                id: this.getElementId("live-region"),
                ariaSelection: r,
                focusedOption: i,
                focusedValue: n,
                isFocused: a,
                selectValue: s,
                focusableOptions: o
              }))
            }
          }, {
            key: "render",
            value: function() {
              var e = this.getComponents(),
                t = e.Control,
                r = e.IndicatorsContainer,
                i = e.SelectContainer,
                n = e.ValueContainer,
                a = this.props,
                s = a.className,
                o = a.id,
                l = a.isDisabled,
                u = a.menuIsOpen,
                c = this.state.isFocused,
                p = this.commonProps = this.getCommonProps();
              return h.createElement(i, (0, d.c)({}, p, {
                className: s,
                innerProps: {
                  id: o,
                  onKeyDown: this.onKeyDown
                },
                isDisabled: l,
                isFocused: c
              }), this.renderLiveRegion(), h.createElement(t, (0, d.c)({}, p, {
                innerRef: this.getControlRef,
                innerProps: {
                  onMouseDown: this.onControlMouseDown,
                  onTouchEnd: this.onControlTouchEnd
                },
                isDisabled: l,
                isFocused: c,
                menuIsOpen: u
              }), h.createElement(n, (0, d.c)({}, p, {
                isDisabled: l
              }), this.renderPlaceholderOrValue(), this.renderInput()), h.createElement(r, (0, d.c)({}, p, {
                isDisabled: l
              }), this.renderClearIndicator(), this.renderLoadingIndicator(), this.renderIndicatorSeparator(), this.renderDropdownIndicator())), this.renderMenu(), this.renderFormField())
            }
          }], i = [{
            key: "getDerivedStateFromProps",
            value: function(e, t) {
              var r = t.prevProps,
                i = t.clearFocusValueOnUpdate,
                n = t.inputIsHiddenAfterUpdate,
                s = t.ariaSelection,
                o = t.isFocused,
                l = t.prevWasFocused,
                u = e.options,
                c = e.value,
                h = e.menuIsOpen,
                p = e.inputValue,
                d = e.isMulti,
                f = St(c),
                m = {};
              if (r && (c !== r.value || u !== r.options || h !== r.menuIsOpen || p !== r.inputValue)) {
                var v = h ? function(e, t) {
                    return Ur($r(e, t))
                  }(e, f) : [],
                  g = i ? function(e, t) {
                    var r = e.focusedValue,
                      i = e.selectValue.indexOf(r);
                    if (i > -1) {
                      if (t.indexOf(r) > -1) return r;
                      if (i < t.length) return t[i]
                    }
                    return null
                  }(t, f) : null,
                  y = function(e, t) {
                    var r = e.focusedOption;
                    return r && t.indexOf(r) > -1 ? r : t[0]
                  }(t, v);
                m = {
                  selectValue: f,
                  focusedOption: y,
                  focusedValue: g,
                  clearFocusValueOnUpdate: !1
                }
              }
              var b = null != n && e !== r ? {
                  inputIsHidden: n,
                  inputIsHiddenAfterUpdate: void 0
                } : {},
                S = s,
                x = o && l;
              return o && !x && (S = {
                value: Ft(d, f, f[0] || null),
                options: f,
                action: "initial-input-focus"
              }, x = !l), "initial-input-focus" === (null == s ? void 0 : s.action) && (S = null), a(a(a({}, m), b), {}, {
                prevProps: e,
                ariaSelection: S,
                prevWasFocused: x
              })
            }
          }], r && m(t.prototype, r), i && m(t, i), Object.defineProperty(t, "prototype", {
            writable: !1
          }), s
        }(h.Component);
      ri.defaultProps = Wr;
      var ii = (0, h.forwardRef)((function(e, t) {
          var r = function(e) {
            var t = e.defaultInputValue,
              r = void 0 === t ? "" : t,
              i = e.defaultMenuIsOpen,
              n = void 0 !== i && i,
              s = e.defaultValue,
              o = void 0 === s ? null : s,
              u = e.inputValue,
              d = e.menuIsOpen,
              f = e.onChange,
              m = e.onInputChange,
              v = e.onMenuClose,
              g = e.onMenuOpen,
              y = e.value,
              b = c(e, p),
              S = l((0, h.useState)(void 0 !== u ? u : r), 2),
              x = S[0],
              E = S[1],
              P = l((0, h.useState)(void 0 !== d ? d : n), 2),
              w = P[0],
              C = P[1],
              T = l((0, h.useState)(void 0 !== y ? y : o), 2),
              M = T[0],
              _ = T[1],
              A = (0, h.useCallback)((function(e, t) {
                "function" == typeof f && f(e, t), _(e)
              }), [f]),
              k = (0, h.useCallback)((function(e, t) {
                var r;
                "function" == typeof m && (r = m(e, t)), E(void 0 !== r ? r : e)
              }), [m]),
              I = (0, h.useCallback)((function() {
                "function" == typeof g && g(), C(!0)
              }), [g]),
              D = (0, h.useCallback)((function() {
                "function" == typeof v && v(), C(!1)
              }), [v]),
              O = void 0 !== u ? u : x,
              F = void 0 !== d ? d : w,
              L = void 0 !== y ? y : M;
            return a(a({}, b), {}, {
              inputValue: O,
              menuIsOpen: F,
              onChange: A,
              onInputChange: k,
              onMenuClose: D,
              onMenuOpen: I,
              value: L
            })
          }(e);
          return h.createElement(ri, (0, d.c)({
            ref: t
          }, r))
        })),
        ni = ii
    },
    6728: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var i = Object.assign || function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i])
          }
          return e
        },
        n = function() {
          function e(e, t) {
            for (var r = 0; r < t.length; r++) {
              var i = t[r];
              i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
            }
          }
          return function(t, r, i) {
            return r && e(t.prototype, r), i && e(t, i), t
          }
        }(),
        a = d(r(1664)),
        s = d(r(1424)),
        o = d(r(5459)),
        l = d(r(4332)),
        u = d(r(7368)),
        c = d(r(1792)),
        h = d(r(4080)),
        p = r(7884);

      function d(e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }

      function f(e, t) {
        return e.scrollWidth - 1 <= t
      }

      function m(e, t) {
        return e.scrollHeight - 1 <= t
      }
      var v = function(e) {
        function t(e) {
          ! function(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
          }(this, t);
          var r = function(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
          }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
          return r.state = {
            fontSize: null,
            ready: !1
          }, r.handleWindowResize = function() {
            r.process()
          }, "perfectFit" in e && console.warn("TextFit property perfectFit has been removed."), r.handleWindowResize = (0, c.default)(r.handleWindowResize, e.throttle), r
        }
        return function(e, t) {
          if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
          e.prototype = Object.create(t && t.prototype, {
            constructor: {
              value: e,
              enumerable: !1,
              writable: !0,
              configurable: !0
            }
          }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }(t, e), n(t, [{
          key: "componentDidMount",
          value: function() {
            this.props.autoResize && window.addEventListener("resize", this.handleWindowResize), this.process()
          }
        }, {
          key: "componentDidUpdate",
          value: function(e) {
            this.state.ready && ((0, o.default)(this.props, e) || this.process())
          }
        }, {
          key: "componentWillUnmount",
          value: function() {
            this.props.autoResize && window.removeEventListener("resize", this.handleWindowResize), this.pid = (0, h.default)()
          }
        }, {
          key: "process",
          value: function() {
            var e = this,
              t = this.props,
              r = t.min,
              i = t.max,
              n = t.mode,
              a = t.forceSingleModeWidth,
              s = t.onReady,
              o = this._parent,
              c = this._child,
              d = (0, p.innerWidth)(o),
              v = (0, p.innerHeight)(o);
            if (v <= 0 || isNaN(v)) console.warn("Can not process element without height. Make sure the element is displayed and has a static height.");
            else if (d <= 0 || isNaN(d)) console.warn("Can not process element without width. Make sure the element is displayed and has a static width.");
            else {
              var g = (0, h.default)();
              this.pid = g;
              var y = function() {
                  return g !== e.pid
                },
                b = "multi" === n ? function() {
                  return m(c, v)
                } : function() {
                  return f(c, d)
                },
                S = "multi" === n ? function() {
                  return f(c, d)
                } : function() {
                  return m(c, v)
                },
                x = void 0,
                E = r,
                P = i;
              this.setState({
                ready: !1
              }), (0, l.default)([function(t) {
                return (0, u.default)((function() {
                  return E <= P
                }), (function(t) {
                  if (y()) return t(!0);
                  x = parseInt((E + P) / 2, 10), e.setState({
                    fontSize: x
                  }, (function() {
                    return y() ? t(!0) : (b() ? E = x + 1 : P = x - 1, t())
                  }))
                }), t)
              }, function(t) {
                return "single" === n && a || S() ? t() : (E = r, P = x, (0, u.default)((function() {
                  return E < P
                }), (function(t) {
                  if (y()) return t(!0);
                  x = parseInt((E + P) / 2, 10), e.setState({
                    fontSize: x
                  }, (function() {
                    return g !== e.pid ? t(!0) : (S() ? E = x + 1 : P = x - 1, t())
                  }))
                }), t))
              }, function(t) {
                if (x = Math.min(E, P), x = Math.max(x, r), x = Math.min(x, i), x = Math.max(x, 0), y()) return t(!0);
                e.setState({
                  fontSize: x
                }, t)
              }], (function(t) {
                t || y() || e.setState({
                  ready: !0
                }, (function() {
                  return s(x)
                }))
              }))
            }
          }
        }, {
          key: "render",
          value: function() {
            var e = this,
              t = this.props,
              r = t.children,
              n = t.text,
              s = t.style,
              o = (t.min, t.max, t.mode),
              l = (t.forceWidth, t.forceSingleModeWidth, t.throttle, t.autoResize, t.onReady, function(e, t) {
                var r = {};
                for (var i in e) t.indexOf(i) >= 0 || Object.prototype.hasOwnProperty.call(e, i) && (r[i] = e[i]);
                return r
              }(t, ["children", "text", "style", "min", "max", "mode", "forceWidth", "forceSingleModeWidth", "throttle", "autoResize", "onReady"])),
              u = this.state,
              c = u.fontSize,
              h = u.ready,
              p = i({}, s, {
                fontSize: c
              }),
              d = {
                display: h ? "block" : "inline-block"
              };
            return "single" === o && (d.whiteSpace = "nowrap"), a.default.createElement("div", i({
              ref: function(t) {
                return e._parent = t
              },
              style: p
            }, l), a.default.createElement("div", {
              ref: function(t) {
                return e._child = t
              },
              style: d
            }, n && "function" == typeof r ? h ? r(n) : n : r))
          }
        }]), t
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
      }, t.default = v
    },
    8936: (e, t, r) => {
      "use strict";
      t.cR = void 0;
      var i, n = (i = r(6728)) && i.__esModule ? i : {
        default: i
      };
      t.cR = n.default, n.default
    },
    7884: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.innerHeight = function(e) {
        var t = window.getComputedStyle(e, null);
        return t ? e.clientHeight - parseInt(t.getPropertyValue("padding-top"), 10) - parseInt(t.getPropertyValue("padding-bottom"), 10) : e.clientHeight
      }, t.innerWidth = function(e) {
        var t = window.getComputedStyle(e, null);
        return t ? e.clientWidth - parseInt(t.getPropertyValue("padding-left"), 10) - parseInt(t.getPropertyValue("padding-right"), 10) : e.clientWidth
      }
    },
    4332: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = function(e, t) {
        var r = [],
          i = 0,
          a = !0;

        function s(e) {
          function i() {
            t && t(e, r)
          }
          a ? n.default.nextTick(i) : i()
        }
        e.length > 0 ? e[0]((function t(n, a) {
          r.push(a), ++i >= e.length || n ? s(n) : e[i](t)
        })) : s(null), a = !1
      };
      var i, n = (i = r(4392)) && i.__esModule ? i : {
        default: i
      }
    },
    5459: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = function(e, t) {
        if (e === t) return !0;
        var r = Object.keys(e),
          i = Object.keys(t);
        if (r.length !== i.length) return !1;
        for (var n = Object.prototype.hasOwnProperty, a = 0; a < r.length; a++)
          if (!n.call(t, r[a]) || e[r[a]] !== t[r[a]]) return !1;
        return !0
      }
    },
    1792: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = function(e, t) {
        var r = void 0,
          i = void 0,
          n = void 0,
          a = void 0,
          s = 0;

        function o() {
          a = 0, s = +new Date, n = e.apply(r, i), r = null, i = null
        }
        return function() {
          r = this, i = arguments;
          var e = new Date - s;
          return a || (e >= t ? o() : a = setTimeout(o, t - e)), n
        }
      }
    },
    4080: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = function() {
        return r++
      };
      var r = 0
    },
    7368: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = function(e, t) {
        var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : r;
        e() ? t((function r(n) {
          for (var a = arguments.length, s = Array(a > 1 ? a - 1 : 0), o = 1; o < a; o++) s[o - 1] = arguments[o];
          n ? i(n) : e.apply(this, s) ? t(r) : i(null)
        })) : i(null)
      };
      var r = function() {}
    },
    2748: (e, t, r) => {
      "use strict";
      r.d(t, {
        U1: () => d
      });
      const i = function(e) {
          return "string" != typeof e || "" === e ? (console.error("The namespace must be a non-empty string."), !1) : !!/^[a-zA-Z][a-zA-Z0-9_.\-\/]*$/.test(e) || (console.error("The namespace can only contain numbers, letters, dashes, periods, underscores and slashes."), !1)
        },
        n = function(e) {
          return "string" != typeof e || "" === e ? (console.error("The hook name must be a non-empty string."), !1) : /^__/.test(e) ? (console.error("The hook name cannot begin with `__`."), !1) : !!/^[a-zA-Z][a-zA-Z0-9_.-]*$/.test(e) || (console.error("The hook name can only contain numbers, letters, dashes, periods and underscores."), !1)
        },
        a = function(e, t) {
          return function(r, a, s) {
            let o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 10;
            const l = e[t];
            if (!n(r)) return;
            if (!i(a)) return;
            if ("function" != typeof s) return void console.error("The hook callback must be a function.");
            if ("number" != typeof o) return void console.error("If specified, the hook priority must be a number.");
            const u = {
              callback: s,
              priority: o,
              namespace: a
            };
            if (l[r]) {
              const e = l[r].handlers;
              let t;
              for (t = e.length; t > 0 && !(o >= e[t - 1].priority); t--);
              t === e.length ? e[t] = u : e.splice(t, 0, u), l.__current.forEach((e => {
                e.name === r && e.currentIndex >= t && e.currentIndex++
              }))
            } else l[r] = {
              handlers: [u],
              runs: 0
            };
            "hookAdded" !== r && e.doAction("hookAdded", r, a, s, o)
          }
        },
        s = function(e, t) {
          let r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          return function(a, s) {
            const o = e[t];
            if (!n(a)) return;
            if (!r && !i(s)) return;
            if (!o[a]) return 0;
            let l = 0;
            if (r) l = o[a].handlers.length, o[a] = {
              runs: o[a].runs,
              handlers: []
            };
            else {
              const e = o[a].handlers;
              for (let t = e.length - 1; t >= 0; t--) e[t].namespace === s && (e.splice(t, 1), l++, o.__current.forEach((e => {
                e.name === a && e.currentIndex >= t && e.currentIndex--
              })))
            }
            return "hookRemoved" !== a && e.doAction("hookRemoved", a, s), l
          }
        },
        o = function(e, t) {
          return function(r, i) {
            const n = e[t];
            return void 0 !== i ? r in n && n[r].handlers.some((e => e.namespace === i)) : r in n
          }
        },
        l = function(e, t) {
          let r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          return function(i) {
            const n = e[t];
            n[i] || (n[i] = {
              handlers: [],
              runs: 0
            }), n[i].runs++;
            const a = n[i].handlers;
            for (var s = arguments.length, o = new Array(s > 1 ? s - 1 : 0), l = 1; l < s; l++) o[l - 1] = arguments[l];
            if (!a || !a.length) return r ? o[0] : void 0;
            const u = {
              name: i,
              currentIndex: 0
            };
            for (n.__current.push(u); u.currentIndex < a.length;) {
              const e = a[u.currentIndex].callback.apply(null, o);
              r && (o[0] = e), u.currentIndex++
            }
            return n.__current.pop(), r ? o[0] : void 0
          }
        },
        u = function(e, t) {
          return function() {
            var r;
            const i = e[t];
            return null !== (r = i.__current[i.__current.length - 1]?.name) && void 0 !== r ? r : null
          }
        },
        c = function(e, t) {
          return function(r) {
            const i = e[t];
            return void 0 === r ? void 0 !== i.__current[0] : !!i.__current[0] && r === i.__current[0].name
          }
        },
        h = function(e, t) {
          return function(r) {
            const i = e[t];
            if (n(r)) return i[r] && i[r].runs ? i[r].runs : 0
          }
        };
      class p {
        constructor() {
          this.actions = Object.create(null), this.actions.__current = [], this.filters = Object.create(null), this.filters.__current = [], this.addAction = a(this, "actions"), this.addFilter = a(this, "filters"), this.removeAction = s(this, "actions"), this.removeFilter = s(this, "filters"), this.hasAction = o(this, "actions"), this.hasFilter = o(this, "filters"), this.removeAllActions = s(this, "actions", !0), this.removeAllFilters = s(this, "filters", !0), this.doAction = l(this, "actions"), this.applyFilters = l(this, "filters", !0), this.currentAction = u(this, "actions"), this.currentFilter = u(this, "filters"), this.doingAction = c(this, "actions"), this.doingFilter = c(this, "filters"), this.didAction = h(this, "actions"), this.didFilter = h(this, "filters")
        }
      }
      const d = function() {
          return new p
        },
        f = d(),
        {
          addAction: m,
          addFilter: v,
          removeAction: g,
          removeFilter: y,
          hasAction: b,
          hasFilter: S,
          removeAllActions: x,
          removeAllFilters: E,
          doAction: P,
          applyFilters: w,
          currentAction: C,
          currentFilter: T,
          doingAction: M,
          doingFilter: _,
          didAction: A,
          didFilter: k,
          actions: I,
          filters: D
        } = f
    },
    6016: (e, t, r) => {
      e.exports = {
        default: r(684),
        __esModule: !0
      }
    },
    8276: (e, t, r) => {
      e.exports = {
        default: r(6486),
        __esModule: !0
      }
    },
    9636: (e, t, r) => {
      e.exports = {
        default: r(7952),
        __esModule: !0
      }
    },
    4616: (e, t, r) => {
      e.exports = {
        default: r(7488),
        __esModule: !0
      }
    },
    8844: (e, t, r) => {
      e.exports = {
        default: r(6760),
        __esModule: !0
      }
    },
    8011: (e, t, r) => {
      e.exports = {
        default: r(20),
        __esModule: !0
      }
    },
    224: (e, t, r) => {
      e.exports = {
        default: r(2784),
        __esModule: !0
      }
    },
    5908: (e, t) => {
      "use strict";
      t.__esModule = !0, t.default = function(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
      }
    },
    272: (e, t, r) => {
      "use strict";
      t.__esModule = !0;
      var i, n = (i = r(9636)) && i.__esModule ? i : {
        default: i
      };
      t.default = function() {
        function e(e, t) {
          for (var r = 0; r < t.length; r++) {
            var i = t[r];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), (0, n.default)(e, i.key, i)
          }
        }
        return function(t, r, i) {
          return r && e(t.prototype, r), i && e(t, i), t
        }
      }()
    },
    7032: (e, t, r) => {
      "use strict";
      t.__esModule = !0;
      var i, n = (i = r(6016)) && i.__esModule ? i : {
        default: i
      };
      t.default = n.default || function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = arguments[t];
          for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i])
        }
        return e
      }
    },
    2392: (e, t, r) => {
      "use strict";
      t.__esModule = !0;
      var i = s(r(8844)),
        n = s(r(8276)),
        a = s(r(3528));

      function s(e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }
      t.default = function(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + (void 0 === t ? "undefined" : (0, a.default)(t)));
        e.prototype = (0, n.default)(t && t.prototype, {
          constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
          }
        }), t && (i.default ? (0, i.default)(e, t) : e.__proto__ = t)
      }
    },
    4136: (e, t, r) => {
      "use strict";
      t.__esModule = !0;
      var i, n = (i = r(3528)) && i.__esModule ? i : {
        default: i
      };
      t.default = function(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" !== (void 0 === t ? "undefined" : (0, n.default)(t)) && "function" != typeof t ? e : t
      }
    },
    3528: (e, t, r) => {
      "use strict";
      t.__esModule = !0;
      var i = s(r(224)),
        n = s(r(8011)),
        a = "function" == typeof n.default && "symbol" == typeof i.default ? function(e) {
          return typeof e
        } : function(e) {
          return e && "function" == typeof n.default && e.constructor === n.default && e !== n.default.prototype ? "symbol" : typeof e
        };

      function s(e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }
      t.default = "function" == typeof n.default && "symbol" === a(i.default) ? function(e) {
        return void 0 === e ? "undefined" : a(e)
      } : function(e) {
        return e && "function" == typeof n.default && e.constructor === n.default && e !== n.default.prototype ? "symbol" : void 0 === e ? "undefined" : a(e)
      }
    },
    5772: (e, t, r) => {
      var i;
      ! function(n, a, s, o) {
        "use strict";
        var l, u = ["", "webkit", "Moz", "MS", "ms", "o"],
          c = a.createElement("div"),
          h = "function",
          p = Math.round,
          d = Math.abs,
          f = Date.now;

        function m(e, t, r) {
          return setTimeout(E(e, r), t)
        }

        function v(e, t, r) {
          return !!Array.isArray(e) && (g(e, r[t], r), !0)
        }

        function g(e, t, r) {
          var i;
          if (e)
            if (e.forEach) e.forEach(t, r);
            else if (e.length !== o)
            for (i = 0; i < e.length;) t.call(r, e[i], i, e), i++;
          else
            for (i in e) e.hasOwnProperty(i) && t.call(r, e[i], i, e)
        }

        function y(e, t, r) {
          var i = "DEPRECATED METHOD: " + t + "\n" + r + " AT \n";
          return function() {
            var t = new Error("get-stack-trace"),
              r = t && t.stack ? t.stack.replace(/^[^\(]+?[\n$]/gm, "").replace(/^\s+at\s+/gm, "").replace(/^Object.<anonymous>\s*\(/gm, "{anonymous}()@") : "Unknown Stack Trace",
              a = n.console && (n.console.warn || n.console.log);
            return a && a.call(n.console, i, r), e.apply(this, arguments)
          }
        }
        l = "function" != typeof Object.assign ? function(e) {
          if (e === o || null === e) throw new TypeError("Cannot convert undefined or null to object");
          for (var t = Object(e), r = 1; r < arguments.length; r++) {
            var i = arguments[r];
            if (i !== o && null !== i)
              for (var n in i) i.hasOwnProperty(n) && (t[n] = i[n])
          }
          return t
        } : Object.assign;
        var b = y((function(e, t, r) {
            for (var i = Object.keys(t), n = 0; n < i.length;)(!r || r && e[i[n]] === o) && (e[i[n]] = t[i[n]]), n++;
            return e
          }), "extend", "Use `assign`."),
          S = y((function(e, t) {
            return b(e, t, !0)
          }), "merge", "Use `assign`.");

        function x(e, t, r) {
          var i, n = t.prototype;
          (i = e.prototype = Object.create(n)).constructor = e, i._super = n, r && l(i, r)
        }

        function E(e, t) {
          return function() {
            return e.apply(t, arguments)
          }
        }

        function P(e, t) {
          return typeof e == h ? e.apply(t && t[0] || o, t) : e
        }

        function w(e, t) {
          return e === o ? t : e
        }

        function C(e, t, r) {
          g(A(t), (function(t) {
            e.addEventListener(t, r, !1)
          }))
        }

        function T(e, t, r) {
          g(A(t), (function(t) {
            e.removeEventListener(t, r, !1)
          }))
        }

        function M(e, t) {
          for (; e;) {
            if (e == t) return !0;
            e = e.parentNode
          }
          return !1
        }

        function _(e, t) {
          return e.indexOf(t) > -1
        }

        function A(e) {
          return e.trim().split(/\s+/g)
        }

        function k(e, t, r) {
          if (e.indexOf && !r) return e.indexOf(t);
          for (var i = 0; i < e.length;) {
            if (r && e[i][r] == t || !r && e[i] === t) return i;
            i++
          }
          return -1
        }

        function I(e) {
          return Array.prototype.slice.call(e, 0)
        }

        function D(e, t, r) {
          for (var i = [], n = [], a = 0; a < e.length;) {
            var s = t ? e[a][t] : e[a];
            k(n, s) < 0 && i.push(e[a]), n[a] = s, a++
          }
          return r && (i = t ? i.sort((function(e, r) {
            return e[t] > r[t]
          })) : i.sort()), i
        }

        function O(e, t) {
          for (var r, i, n = t[0].toUpperCase() + t.slice(1), a = 0; a < u.length;) {
            if ((i = (r = u[a]) ? r + n : t) in e) return i;
            a++
          }
          return o
        }
        var F = 1;

        function L(e) {
          var t = e.ownerDocument || e;
          return t.defaultView || t.parentWindow || n
        }
        var V = "ontouchstart" in n,
          R = O(n, "PointerEvent") !== o,
          B = V && /mobile|tablet|ip(ad|hone|od)|android/i.test(navigator.userAgent),
          N = "touch",
          z = "mouse",
          G = 25,
          j = 1,
          H = 4,
          W = 8,
          q = 1,
          $ = 2,
          U = 4,
          Y = 8,
          X = 16,
          K = $ | U,
          Z = Y | X,
          J = K | Z,
          Q = ["x", "y"],
          ee = ["clientX", "clientY"];

        function te(e, t) {
          var r = this;
          this.manager = e, this.callback = t, this.element = e.element, this.target = e.options.inputTarget, this.domHandler = function(t) {
            P(e.options.enable, [e]) && r.handler(t)
          }, this.init()
        }

        function re(e, t, r) {
          var i = r.pointers.length,
            n = r.changedPointers.length,
            a = t & j && i - n == 0,
            s = t & (H | W) && i - n == 0;
          r.isFirst = !!a, r.isFinal = !!s, a && (e.session = {}), r.eventType = t,
            function(e, t) {
              var r = e.session,
                i = t.pointers,
                n = i.length;
              r.firstInput || (r.firstInput = ie(t)), n > 1 && !r.firstMultiple ? r.firstMultiple = ie(t) : 1 === n && (r.firstMultiple = !1);
              var a = r.firstInput,
                s = r.firstMultiple,
                l = s ? s.center : a.center,
                u = t.center = ne(i);
              t.timeStamp = f(), t.deltaTime = t.timeStamp - a.timeStamp, t.angle = le(l, u), t.distance = oe(l, u),
                function(e, t) {
                  var r = t.center,
                    i = e.offsetDelta || {},
                    n = e.prevDelta || {},
                    a = e.prevInput || {};
                  t.eventType !== j && a.eventType !== H || (n = e.prevDelta = {
                    x: a.deltaX || 0,
                    y: a.deltaY || 0
                  }, i = e.offsetDelta = {
                    x: r.x,
                    y: r.y
                  }), t.deltaX = n.x + (r.x - i.x), t.deltaY = n.y + (r.y - i.y)
                }(r, t), t.offsetDirection = se(t.deltaX, t.deltaY);
              var c, h, p = ae(t.deltaTime, t.deltaX, t.deltaY);
              t.overallVelocityX = p.x, t.overallVelocityY = p.y, t.overallVelocity = d(p.x) > d(p.y) ? p.x : p.y, t.scale = s ? (c = s.pointers, oe((h = i)[0], h[1], ee) / oe(c[0], c[1], ee)) : 1, t.rotation = s ? function(e, t) {
                  return le(t[1], t[0], ee) + le(e[1], e[0], ee)
                }(s.pointers, i) : 0, t.maxPointers = r.prevInput ? t.pointers.length > r.prevInput.maxPointers ? t.pointers.length : r.prevInput.maxPointers : t.pointers.length,
                function(e, t) {
                  var r, i, n, a, s = e.lastInterval || t,
                    l = t.timeStamp - s.timeStamp;
                  if (t.eventType != W && (l > G || s.velocity === o)) {
                    var u = t.deltaX - s.deltaX,
                      c = t.deltaY - s.deltaY,
                      h = ae(l, u, c);
                    i = h.x, n = h.y, r = d(h.x) > d(h.y) ? h.x : h.y, a = se(u, c), e.lastInterval = t
                  } else r = s.velocity, i = s.velocityX, n = s.velocityY, a = s.direction;
                  t.velocity = r, t.velocityX = i, t.velocityY = n, t.direction = a
                }(r, t);
              var m = e.element;
              M(t.srcEvent.target, m) && (m = t.srcEvent.target), t.target = m
            }(e, r), e.emit("hammer.input", r), e.recognize(r), e.session.prevInput = r
        }

        function ie(e) {
          for (var t = [], r = 0; r < e.pointers.length;) t[r] = {
            clientX: p(e.pointers[r].clientX),
            clientY: p(e.pointers[r].clientY)
          }, r++;
          return {
            timeStamp: f(),
            pointers: t,
            center: ne(t),
            deltaX: e.deltaX,
            deltaY: e.deltaY
          }
        }

        function ne(e) {
          var t = e.length;
          if (1 === t) return {
            x: p(e[0].clientX),
            y: p(e[0].clientY)
          };
          for (var r = 0, i = 0, n = 0; n < t;) r += e[n].clientX, i += e[n].clientY, n++;
          return {
            x: p(r / t),
            y: p(i / t)
          }
        }

        function ae(e, t, r) {
          return {
            x: t / e || 0,
            y: r / e || 0
          }
        }

        function se(e, t) {
          return e === t ? q : d(e) >= d(t) ? e < 0 ? $ : U : t < 0 ? Y : X
        }

        function oe(e, t, r) {
          r || (r = Q);
          var i = t[r[0]] - e[r[0]],
            n = t[r[1]] - e[r[1]];
          return Math.sqrt(i * i + n * n)
        }

        function le(e, t, r) {
          r || (r = Q);
          var i = t[r[0]] - e[r[0]],
            n = t[r[1]] - e[r[1]];
          return 180 * Math.atan2(n, i) / Math.PI
        }
        te.prototype = {
          handler: function() {},
          init: function() {
            this.evEl && C(this.element, this.evEl, this.domHandler), this.evTarget && C(this.target, this.evTarget, this.domHandler), this.evWin && C(L(this.element), this.evWin, this.domHandler)
          },
          destroy: function() {
            this.evEl && T(this.element, this.evEl, this.domHandler), this.evTarget && T(this.target, this.evTarget, this.domHandler), this.evWin && T(L(this.element), this.evWin, this.domHandler)
          }
        };
        var ue = {
            mousedown: j,
            mousemove: 2,
            mouseup: H
          },
          ce = "mousedown",
          he = "mousemove mouseup";

        function pe() {
          this.evEl = ce, this.evWin = he, this.pressed = !1, te.apply(this, arguments)
        }
        x(pe, te, {
          handler: function(e) {
            var t = ue[e.type];
            t & j && 0 === e.button && (this.pressed = !0), 2 & t && 1 !== e.which && (t = H), this.pressed && (t & H && (this.pressed = !1), this.callback(this.manager, t, {
              pointers: [e],
              changedPointers: [e],
              pointerType: z,
              srcEvent: e
            }))
          }
        });
        var de = {
            pointerdown: j,
            pointermove: 2,
            pointerup: H,
            pointercancel: W,
            pointerout: W
          },
          fe = {
            2: N,
            3: "pen",
            4: z,
            5: "kinect"
          },
          me = "pointerdown",
          ve = "pointermove pointerup pointercancel";

        function ge() {
          this.evEl = me, this.evWin = ve, te.apply(this, arguments), this.store = this.manager.session.pointerEvents = []
        }
        n.MSPointerEvent && !n.PointerEvent && (me = "MSPointerDown", ve = "MSPointerMove MSPointerUp MSPointerCancel"), x(ge, te, {
          handler: function(e) {
            var t = this.store,
              r = !1,
              i = e.type.toLowerCase().replace("ms", ""),
              n = de[i],
              a = fe[e.pointerType] || e.pointerType,
              s = a == N,
              o = k(t, e.pointerId, "pointerId");
            n & j && (0 === e.button || s) ? o < 0 && (t.push(e), o = t.length - 1) : n & (H | W) && (r = !0), o < 0 || (t[o] = e, this.callback(this.manager, n, {
              pointers: t,
              changedPointers: [e],
              pointerType: a,
              srcEvent: e
            }), r && t.splice(o, 1))
          }
        });
        var ye = {
          touchstart: j,
          touchmove: 2,
          touchend: H,
          touchcancel: W
        };

        function be() {
          this.evTarget = "touchstart", this.evWin = "touchstart touchmove touchend touchcancel", this.started = !1, te.apply(this, arguments)
        }

        function Se(e, t) {
          var r = I(e.touches),
            i = I(e.changedTouches);
          return t & (H | W) && (r = D(r.concat(i), "identifier", !0)), [r, i]
        }
        x(be, te, {
          handler: function(e) {
            var t = ye[e.type];
            if (t === j && (this.started = !0), this.started) {
              var r = Se.call(this, e, t);
              t & (H | W) && r[0].length - r[1].length == 0 && (this.started = !1), this.callback(this.manager, t, {
                pointers: r[0],
                changedPointers: r[1],
                pointerType: N,
                srcEvent: e
              })
            }
          }
        });
        var xe = {
            touchstart: j,
            touchmove: 2,
            touchend: H,
            touchcancel: W
          },
          Ee = "touchstart touchmove touchend touchcancel";

        function Pe() {
          this.evTarget = Ee, this.targetIds = {}, te.apply(this, arguments)
        }

        function we(e, t) {
          var r = I(e.touches),
            i = this.targetIds;
          if (t & (2 | j) && 1 === r.length) return i[r[0].identifier] = !0, [r, r];
          var n, a, s = I(e.changedTouches),
            o = [],
            l = this.target;
          if (a = r.filter((function(e) {
              return M(e.target, l)
            })), t === j)
            for (n = 0; n < a.length;) i[a[n].identifier] = !0, n++;
          for (n = 0; n < s.length;) i[s[n].identifier] && o.push(s[n]), t & (H | W) && delete i[s[n].identifier], n++;
          return o.length ? [D(a.concat(o), "identifier", !0), o] : void 0
        }
        x(Pe, te, {
          handler: function(e) {
            var t = xe[e.type],
              r = we.call(this, e, t);
            r && this.callback(this.manager, t, {
              pointers: r[0],
              changedPointers: r[1],
              pointerType: N,
              srcEvent: e
            })
          }
        });
        var Ce = 2500;

        function Te() {
          te.apply(this, arguments);
          var e = E(this.handler, this);
          this.touch = new Pe(this.manager, e), this.mouse = new pe(this.manager, e), this.primaryTouch = null, this.lastTouches = []
        }

        function Me(e, t) {
          e & j ? (this.primaryTouch = t.changedPointers[0].identifier, _e.call(this, t)) : e & (H | W) && _e.call(this, t)
        }

        function _e(e) {
          var t = e.changedPointers[0];
          if (t.identifier === this.primaryTouch) {
            var r = {
              x: t.clientX,
              y: t.clientY
            };
            this.lastTouches.push(r);
            var i = this.lastTouches;
            setTimeout((function() {
              var e = i.indexOf(r);
              e > -1 && i.splice(e, 1)
            }), Ce)
          }
        }

        function Ae(e) {
          for (var t = e.srcEvent.clientX, r = e.srcEvent.clientY, i = 0; i < this.lastTouches.length; i++) {
            var n = this.lastTouches[i],
              a = Math.abs(t - n.x),
              s = Math.abs(r - n.y);
            if (a <= 25 && s <= 25) return !0
          }
          return !1
        }
        x(Te, te, {
          handler: function(e, t, r) {
            var i = r.pointerType == N,
              n = r.pointerType == z;
            if (!(n && r.sourceCapabilities && r.sourceCapabilities.firesTouchEvents)) {
              if (i) Me.call(this, t, r);
              else if (n && Ae.call(this, r)) return;
              this.callback(e, t, r)
            }
          },
          destroy: function() {
            this.touch.destroy(), this.mouse.destroy()
          }
        });
        var ke = O(c.style, "touchAction"),
          Ie = ke !== o,
          De = "compute",
          Oe = "auto",
          Fe = "manipulation",
          Le = "none",
          Ve = "pan-x",
          Re = "pan-y",
          Be = function() {
            if (!Ie) return !1;
            var e = {},
              t = n.CSS && n.CSS.supports;
            return ["auto", "manipulation", "pan-y", "pan-x", "pan-x pan-y", "none"].forEach((function(r) {
              e[r] = !t || n.CSS.supports("touch-action", r)
            })), e
          }();

        function Ne(e, t) {
          this.manager = e, this.set(t)
        }
        Ne.prototype = {
          set: function(e) {
            e == De && (e = this.compute()), Ie && this.manager.element.style && Be[e] && (this.manager.element.style[ke] = e), this.actions = e.toLowerCase().trim()
          },
          update: function() {
            this.set(this.manager.options.touchAction)
          },
          compute: function() {
            var e = [];
            return g(this.manager.recognizers, (function(t) {
                P(t.options.enable, [t]) && (e = e.concat(t.getTouchAction()))
              })),
              function(e) {
                if (_(e, Le)) return Le;
                var t = _(e, Ve),
                  r = _(e, Re);
                return t && r ? Le : t || r ? t ? Ve : Re : _(e, Fe) ? Fe : Oe
              }(e.join(" "))
          },
          preventDefaults: function(e) {
            var t = e.srcEvent,
              r = e.offsetDirection;
            if (this.manager.session.prevented) t.preventDefault();
            else {
              var i = this.actions,
                n = _(i, Le) && !Be[Le],
                a = _(i, Re) && !Be[Re],
                s = _(i, Ve) && !Be[Ve];
              if (n) {
                var o = 1 === e.pointers.length,
                  l = e.distance < 2,
                  u = e.deltaTime < 250;
                if (o && l && u) return
              }
              if (!s || !a) return n || a && r & K || s && r & Z ? this.preventSrc(t) : void 0
            }
          },
          preventSrc: function(e) {
            this.manager.session.prevented = !0, e.preventDefault()
          }
        };
        var ze = 1,
          Ge = 32;

        function je(e) {
          this.options = l({}, this.defaults, e || {}), this.id = F++, this.manager = null, this.options.enable = w(this.options.enable, !0), this.state = ze, this.simultaneous = {}, this.requireFail = []
        }

        function He(e) {
          return 16 & e ? "cancel" : 8 & e ? "end" : 4 & e ? "move" : 2 & e ? "start" : ""
        }

        function We(e) {
          return e == X ? "down" : e == Y ? "up" : e == $ ? "left" : e == U ? "right" : ""
        }

        function qe(e, t) {
          var r = t.manager;
          return r ? r.get(e) : e
        }

        function $e() {
          je.apply(this, arguments)
        }

        function Ue() {
          $e.apply(this, arguments), this.pX = null, this.pY = null
        }

        function Ye() {
          $e.apply(this, arguments)
        }

        function Xe() {
          je.apply(this, arguments), this._timer = null, this._input = null
        }

        function Ke() {
          $e.apply(this, arguments)
        }

        function Ze() {
          $e.apply(this, arguments)
        }

        function Je() {
          je.apply(this, arguments), this.pTime = !1, this.pCenter = !1, this._timer = null, this._input = null, this.count = 0
        }

        function Qe(e, t) {
          return (t = t || {}).recognizers = w(t.recognizers, Qe.defaults.preset), new et(e, t)
        }

        function et(e, t) {
          this.options = l({}, Qe.defaults, t || {}), this.options.inputTarget = this.options.inputTarget || e, this.handlers = {}, this.session = {}, this.recognizers = [], this.oldCssProps = {}, this.element = e, this.input = new(this.options.inputClass || (R ? ge : B ? Pe : V ? Te : pe))(this, re), this.touchAction = new Ne(this, this.options.touchAction), tt(this, !0), g(this.options.recognizers, (function(e) {
            var t = this.add(new e[0](e[1]));
            e[2] && t.recognizeWith(e[2]), e[3] && t.requireFailure(e[3])
          }), this)
        }

        function tt(e, t) {
          var r, i = e.element;
          i.style && (g(e.options.cssProps, (function(n, a) {
            r = O(i.style, a), t ? (e.oldCssProps[r] = i.style[r], i.style[r] = n) : i.style[r] = e.oldCssProps[r] || ""
          })), t || (e.oldCssProps = {}))
        }
        je.prototype = {
          defaults: {},
          set: function(e) {
            return l(this.options, e), this.manager && this.manager.touchAction.update(), this
          },
          recognizeWith: function(e) {
            if (v(e, "recognizeWith", this)) return this;
            var t = this.simultaneous;
            return t[(e = qe(e, this)).id] || (t[e.id] = e, e.recognizeWith(this)), this
          },
          dropRecognizeWith: function(e) {
            return v(e, "dropRecognizeWith", this) || (e = qe(e, this), delete this.simultaneous[e.id]), this
          },
          requireFailure: function(e) {
            if (v(e, "requireFailure", this)) return this;
            var t = this.requireFail;
            return -1 === k(t, e = qe(e, this)) && (t.push(e), e.requireFailure(this)), this
          },
          dropRequireFailure: function(e) {
            if (v(e, "dropRequireFailure", this)) return this;
            e = qe(e, this);
            var t = k(this.requireFail, e);
            return t > -1 && this.requireFail.splice(t, 1), this
          },
          hasRequireFailures: function() {
            return this.requireFail.length > 0
          },
          canRecognizeWith: function(e) {
            return !!this.simultaneous[e.id]
          },
          emit: function(e) {
            var t = this,
              r = this.state;

            function i(r) {
              t.manager.emit(r, e)
            }
            r < 8 && i(t.options.event + He(r)), i(t.options.event), e.additionalEvent && i(e.additionalEvent), r >= 8 && i(t.options.event + He(r))
          },
          tryEmit: function(e) {
            if (this.canEmit()) return this.emit(e);
            this.state = Ge
          },
          canEmit: function() {
            for (var e = 0; e < this.requireFail.length;) {
              if (!(this.requireFail[e].state & (Ge | ze))) return !1;
              e++
            }
            return !0
          },
          recognize: function(e) {
            var t = l({}, e);
            if (!P(this.options.enable, [this, t])) return this.reset(), void(this.state = Ge);
            56 & this.state && (this.state = ze), this.state = this.process(t), 30 & this.state && this.tryEmit(t)
          },
          process: function(e) {},
          getTouchAction: function() {},
          reset: function() {}
        }, x($e, je, {
          defaults: {
            pointers: 1
          },
          attrTest: function(e) {
            var t = this.options.pointers;
            return 0 === t || e.pointers.length === t
          },
          process: function(e) {
            var t = this.state,
              r = e.eventType,
              i = 6 & t,
              n = this.attrTest(e);
            return i && (r & W || !n) ? 16 | t : i || n ? r & H ? 8 | t : 2 & t ? 4 | t : 2 : Ge
          }
        }), x(Ue, $e, {
          defaults: {
            event: "pan",
            threshold: 10,
            pointers: 1,
            direction: J
          },
          getTouchAction: function() {
            var e = this.options.direction,
              t = [];
            return e & K && t.push(Re), e & Z && t.push(Ve), t
          },
          directionTest: function(e) {
            var t = this.options,
              r = !0,
              i = e.distance,
              n = e.direction,
              a = e.deltaX,
              s = e.deltaY;
            return n & t.direction || (t.direction & K ? (n = 0 === a ? q : a < 0 ? $ : U, r = a != this.pX, i = Math.abs(e.deltaX)) : (n = 0 === s ? q : s < 0 ? Y : X, r = s != this.pY, i = Math.abs(e.deltaY))), e.direction = n, r && i > t.threshold && n & t.direction
          },
          attrTest: function(e) {
            return $e.prototype.attrTest.call(this, e) && (2 & this.state || !(2 & this.state) && this.directionTest(e))
          },
          emit: function(e) {
            this.pX = e.deltaX, this.pY = e.deltaY;
            var t = We(e.direction);
            t && (e.additionalEvent = this.options.event + t), this._super.emit.call(this, e)
          }
        }), x(Ye, $e, {
          defaults: {
            event: "pinch",
            threshold: 0,
            pointers: 2
          },
          getTouchAction: function() {
            return [Le]
          },
          attrTest: function(e) {
            return this._super.attrTest.call(this, e) && (Math.abs(e.scale - 1) > this.options.threshold || 2 & this.state)
          },
          emit: function(e) {
            if (1 !== e.scale) {
              var t = e.scale < 1 ? "in" : "out";
              e.additionalEvent = this.options.event + t
            }
            this._super.emit.call(this, e)
          }
        }), x(Xe, je, {
          defaults: {
            event: "press",
            pointers: 1,
            time: 251,
            threshold: 9
          },
          getTouchAction: function() {
            return [Oe]
          },
          process: function(e) {
            var t = this.options,
              r = e.pointers.length === t.pointers,
              i = e.distance < t.threshold,
              n = e.deltaTime > t.time;
            if (this._input = e, !i || !r || e.eventType & (H | W) && !n) this.reset();
            else if (e.eventType & j) this.reset(), this._timer = m((function() {
              this.state = 8, this.tryEmit()
            }), t.time, this);
            else if (e.eventType & H) return 8;
            return Ge
          },
          reset: function() {
            clearTimeout(this._timer)
          },
          emit: function(e) {
            8 === this.state && (e && e.eventType & H ? this.manager.emit(this.options.event + "up", e) : (this._input.timeStamp = f(), this.manager.emit(this.options.event, this._input)))
          }
        }), x(Ke, $e, {
          defaults: {
            event: "rotate",
            threshold: 0,
            pointers: 2
          },
          getTouchAction: function() {
            return [Le]
          },
          attrTest: function(e) {
            return this._super.attrTest.call(this, e) && (Math.abs(e.rotation) > this.options.threshold || 2 & this.state)
          }
        }), x(Ze, $e, {
          defaults: {
            event: "swipe",
            threshold: 10,
            velocity: .3,
            direction: K | Z,
            pointers: 1
          },
          getTouchAction: function() {
            return Ue.prototype.getTouchAction.call(this)
          },
          attrTest: function(e) {
            var t, r = this.options.direction;
            return r & (K | Z) ? t = e.overallVelocity : r & K ? t = e.overallVelocityX : r & Z && (t = e.overallVelocityY), this._super.attrTest.call(this, e) && r & e.offsetDirection && e.distance > this.options.threshold && e.maxPointers == this.options.pointers && d(t) > this.options.velocity && e.eventType & H
          },
          emit: function(e) {
            var t = We(e.offsetDirection);
            t && this.manager.emit(this.options.event + t, e), this.manager.emit(this.options.event, e)
          }
        }), x(Je, je, {
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
            return [Fe]
          },
          process: function(e) {
            var t = this.options,
              r = e.pointers.length === t.pointers,
              i = e.distance < t.threshold,
              n = e.deltaTime < t.time;
            if (this.reset(), e.eventType & j && 0 === this.count) return this.failTimeout();
            if (i && n && r) {
              if (e.eventType != H) return this.failTimeout();
              var a = !this.pTime || e.timeStamp - this.pTime < t.interval,
                s = !this.pCenter || oe(this.pCenter, e.center) < t.posThreshold;
              if (this.pTime = e.timeStamp, this.pCenter = e.center, s && a ? this.count += 1 : this.count = 1, this._input = e, 0 == this.count % t.taps) return this.hasRequireFailures() ? (this._timer = m((function() {
                this.state = 8, this.tryEmit()
              }), t.interval, this), 2) : 8
            }
            return Ge
          },
          failTimeout: function() {
            return this._timer = m((function() {
              this.state = Ge
            }), this.options.interval, this), Ge
          },
          reset: function() {
            clearTimeout(this._timer)
          },
          emit: function() {
            8 == this.state && (this._input.tapCount = this.count, this.manager.emit(this.options.event, this._input))
          }
        }), Qe.VERSION = "2.0.7", Qe.defaults = {
          domEvents: !1,
          touchAction: De,
          enable: !0,
          inputTarget: null,
          inputClass: null,
          preset: [
            [Ke, {
              enable: !1
            }],
            [Ye, {
                enable: !1
              },
              ["rotate"]
            ],
            [Ze, {
              direction: K
            }],
            [Ue, {
                direction: K
              },
              ["swipe"]
            ],
            [Je],
            [Je, {
                event: "doubletap",
                taps: 2
              },
              ["tap"]
            ],
            [Xe]
          ],
          cssProps: {
            userSelect: "none",
            touchSelect: "none",
            touchCallout: "none",
            contentZooming: "none",
            userDrag: "none",
            tapHighlightColor: "rgba(0,0,0,0)"
          }
        }, et.prototype = {
          set: function(e) {
            return l(this.options, e), e.touchAction && this.touchAction.update(), e.inputTarget && (this.input.destroy(), this.input.target = e.inputTarget, this.input.init()), this
          },
          stop: function(e) {
            this.session.stopped = e ? 2 : 1
          },
          recognize: function(e) {
            var t = this.session;
            if (!t.stopped) {
              var r;
              this.touchAction.preventDefaults(e);
              var i = this.recognizers,
                n = t.curRecognizer;
              (!n || n && 8 & n.state) && (n = t.curRecognizer = null);
              for (var a = 0; a < i.length;) r = i[a], 2 === t.stopped || n && r != n && !r.canRecognizeWith(n) ? r.reset() : r.recognize(e), !n && 14 & r.state && (n = t.curRecognizer = r), a++
            }
          },
          get: function(e) {
            if (e instanceof je) return e;
            for (var t = this.recognizers, r = 0; r < t.length; r++)
              if (t[r].options.event == e) return t[r];
            return null
          },
          add: function(e) {
            if (v(e, "add", this)) return this;
            var t = this.get(e.options.event);
            return t && this.remove(t), this.recognizers.push(e), e.manager = this, this.touchAction.update(), e
          },
          remove: function(e) {
            if (v(e, "remove", this)) return this;
            if (e = this.get(e)) {
              var t = this.recognizers,
                r = k(t, e); - 1 !== r && (t.splice(r, 1), this.touchAction.update())
            }
            return this
          },
          on: function(e, t) {
            if (e !== o && t !== o) {
              var r = this.handlers;
              return g(A(e), (function(e) {
                r[e] = r[e] || [], r[e].push(t)
              })), this
            }
          },
          off: function(e, t) {
            if (e !== o) {
              var r = this.handlers;
              return g(A(e), (function(e) {
                t ? r[e] && r[e].splice(k(r[e], t), 1) : delete r[e]
              })), this
            }
          },
          emit: function(e, t) {
            this.options.domEvents && function(e, t) {
              var r = a.createEvent("Event");
              r.initEvent(e, !0, !0), r.gesture = t, t.target.dispatchEvent(r)
            }(e, t);
            var r = this.handlers[e] && this.handlers[e].slice();
            if (r && r.length) {
              t.type = e, t.preventDefault = function() {
                t.srcEvent.preventDefault()
              };
              for (var i = 0; i < r.length;) r[i](t), i++
            }
          },
          destroy: function() {
            this.element && tt(this, !1), this.handlers = {}, this.session = {}, this.input.destroy(), this.element = null
          }
        }, l(Qe, {
          INPUT_START: j,
          INPUT_MOVE: 2,
          INPUT_END: H,
          INPUT_CANCEL: W,
          STATE_POSSIBLE: ze,
          STATE_BEGAN: 2,
          STATE_CHANGED: 4,
          STATE_ENDED: 8,
          STATE_RECOGNIZED: 8,
          STATE_CANCELLED: 16,
          STATE_FAILED: Ge,
          DIRECTION_NONE: q,
          DIRECTION_LEFT: $,
          DIRECTION_RIGHT: U,
          DIRECTION_UP: Y,
          DIRECTION_DOWN: X,
          DIRECTION_HORIZONTAL: K,
          DIRECTION_VERTICAL: Z,
          DIRECTION_ALL: J,
          Manager: et,
          Input: te,
          TouchAction: Ne,
          TouchInput: Pe,
          MouseInput: pe,
          PointerEventInput: ge,
          TouchMouseInput: Te,
          SingleTouchInput: be,
          Recognizer: je,
          AttrRecognizer: $e,
          Tap: Je,
          Pan: Ue,
          Swipe: Ze,
          Pinch: Ye,
          Rotate: Ke,
          Press: Xe,
          on: C,
          off: T,
          each: g,
          merge: S,
          extend: b,
          assign: l,
          inherit: x,
          bindFn: E,
          prefixed: O
        }), (void 0 !== n ? n : "undefined" != typeof self ? self : {}).Hammer = Qe, (i = function() {
          return Qe
        }.call(t, r, t, e)) === o || (e.exports = i)
      }(window, document)
    },
    1580: (e, t, r) => {
      var i = r(6056).Symbol;
      e.exports = i
    },
    5992: (e, t, r) => {
      var i = r(1580),
        n = r(8584),
        a = r(6796),
        s = i ? i.toStringTag : void 0;
      e.exports = function(e) {
        return null == e ? void 0 === e ? "[object Undefined]" : "[object Null]" : s && s in Object(e) ? n(e) : a(e)
      }
    },
    6096: (e, t, r) => {
      var i = r(7520),
        n = /^\s+/;
      e.exports = function(e) {
        return e ? e.slice(0, i(e) + 1).replace(n, "") : e
      }
    },
    1044: (e, t, r) => {
      var i = "object" == typeof r.g && r.g && r.g.Object === Object && r.g;
      e.exports = i
    },
    8584: (e, t, r) => {
      var i = r(1580),
        n = Object.prototype,
        a = n.hasOwnProperty,
        s = n.toString,
        o = i ? i.toStringTag : void 0;
      e.exports = function(e) {
        var t = a.call(e, o),
          r = e[o];
        try {
          e[o] = void 0;
          var i = !0
        } catch (e) {}
        var n = s.call(e);
        return i && (t ? e[o] = r : delete e[o]), n
      }
    },
    6796: e => {
      var t = Object.prototype.toString;
      e.exports = function(e) {
        return t.call(e)
      }
    },
    6056: (e, t, r) => {
      var i = r(1044),
        n = "object" == typeof self && self && self.Object === Object && self,
        a = i || n || Function("return this")();
      e.exports = a
    },
    7520: e => {
      var t = /\s/;
      e.exports = function(e) {
        for (var r = e.length; r-- && t.test(e.charAt(r)););
        return r
      }
    },
    9760: (e, t, r) => {
      var i = r(9048),
        n = r(2721),
        a = r(88),
        s = Math.max,
        o = Math.min;
      e.exports = function(e, t, r) {
        var l, u, c, h, p, d, f = 0,
          m = !1,
          v = !1,
          g = !0;
        if ("function" != typeof e) throw new TypeError("Expected a function");

        function y(t) {
          var r = l,
            i = u;
          return l = u = void 0, f = t, h = e.apply(i, r)
        }

        function b(e) {
          var r = e - d;
          return void 0 === d || r >= t || r < 0 || v && e - f >= c
        }

        function S() {
          var e = n();
          if (b(e)) return x(e);
          p = setTimeout(S, function(e) {
            var r = t - (e - d);
            return v ? o(r, c - (e - f)) : r
          }(e))
        }

        function x(e) {
          return p = void 0, g && l ? y(e) : (l = u = void 0, h)
        }

        function E() {
          var e = n(),
            r = b(e);
          if (l = arguments, u = this, d = e, r) {
            if (void 0 === p) return function(e) {
              return f = e, p = setTimeout(S, t), m ? y(e) : h
            }(d);
            if (v) return clearTimeout(p), p = setTimeout(S, t), y(d)
          }
          return void 0 === p && (p = setTimeout(S, t)), h
        }
        return t = a(t) || 0, i(r) && (m = !!r.leading, c = (v = "maxWait" in r) ? s(a(r.maxWait) || 0, t) : c, g = "trailing" in r ? !!r.trailing : g), E.cancel = function() {
          void 0 !== p && clearTimeout(p), f = 0, l = d = u = p = void 0
        }, E.flush = function() {
          return void 0 === p ? h : x(n())
        }, E
      }
    },
    9048: e => {
      e.exports = function(e) {
        var t = typeof e;
        return null != e && ("object" == t || "function" == t)
      }
    },
    2316: e => {
      e.exports = function(e) {
        return null != e && "object" == typeof e
      }
    },
    9464: (e, t, r) => {
      var i = r(5992),
        n = r(2316);
      e.exports = function(e) {
        return "symbol" == typeof e || n(e) && "[object Symbol]" == i(e)
      }
    },
    2721: (e, t, r) => {
      var i = r(6056);
      e.exports = function() {
        return i.Date.now()
      }
    },
    88: (e, t, r) => {
      var i = r(6096),
        n = r(9048),
        a = r(9464),
        s = /^[-+]0x[0-9a-f]+$/i,
        o = /^0b[01]+$/i,
        l = /^0o[0-7]+$/i,
        u = parseInt;
      e.exports = function(e) {
        if ("number" == typeof e) return e;
        if (a(e)) return NaN;
        if (n(e)) {
          var t = "function" == typeof e.valueOf ? e.valueOf() : e;
          e = n(t) ? t + "" : t
        }
        if ("string" != typeof e) return 0 === e ? e : +e;
        e = i(e);
        var r = o.test(e);
        return r || l.test(e) ? u(e.slice(2), r ? 2 : 8) : s.test(e) ? NaN : +e
      }
    },
    6352: function(module, exports, __webpack_require__) {
      var factory;
      "undefined" != typeof navigator && (factory = function() {
        "use strict";
        var svgNS = "http://www.w3.org/2000/svg",
          locationHref = "",
          _useWebWorker = !1,
          initialDefaultFrame = -999999,
          setWebWorker = function(e) {
            _useWebWorker = !!e
          },
          getWebWorker = function() {
            return _useWebWorker
          },
          setLocationHref = function(e) {
            locationHref = e
          },
          getLocationHref = function() {
            return locationHref
          };

        function createTag(e) {
          return document.createElement(e)
        }

        function extendPrototype(e, t) {
          var r, i, n = e.length;
          for (r = 0; r < n; r += 1)
            for (var a in i = e[r].prototype) Object.prototype.hasOwnProperty.call(i, a) && (t.prototype[a] = i[a])
        }

        function getDescriptor(e, t) {
          return Object.getOwnPropertyDescriptor(e, t)
        }

        function createProxyFunction(e) {
          function t() {}
          return t.prototype = e, t
        }
        var audioControllerFactory = function() {
            function e(e) {
              this.audios = [], this.audioFactory = e, this._volume = 1, this._isMuted = !1
            }
            return e.prototype = {
                addAudio: function(e) {
                  this.audios.push(e)
                },
                pause: function() {
                  var e, t = this.audios.length;
                  for (e = 0; e < t; e += 1) this.audios[e].pause()
                },
                resume: function() {
                  var e, t = this.audios.length;
                  for (e = 0; e < t; e += 1) this.audios[e].resume()
                },
                setRate: function(e) {
                  var t, r = this.audios.length;
                  for (t = 0; t < r; t += 1) this.audios[t].setRate(e)
                },
                createAudio: function(e) {
                  return this.audioFactory ? this.audioFactory(e) : window.Howl ? new window.Howl({
                    src: [e]
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
                setAudioFactory: function(e) {
                  this.audioFactory = e
                },
                setVolume: function(e) {
                  this._volume = e, this._updateVolume()
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
                  var e, t = this.audios.length;
                  for (e = 0; e < t; e += 1) this.audios[e].volume(this._volume * (this._isMuted ? 0 : 1))
                }
              },
              function() {
                return new e
              }
          }(),
          createTypedArray = function() {
            function e(e, t) {
              var r, i = 0,
                n = [];
              switch (e) {
                case "int16":
                case "uint8c":
                  r = 1;
                  break;
                default:
                  r = 1.1
              }
              for (i = 0; i < t; i += 1) n.push(r);
              return n
            }
            return "function" == typeof Uint8ClampedArray && "function" == typeof Float32Array ? function(t, r) {
              return "float32" === t ? new Float32Array(r) : "int16" === t ? new Int16Array(r) : "uint8c" === t ? new Uint8ClampedArray(r) : e(t, r)
            } : e
          }();

        function createSizedArray(e) {
          return Array.apply(null, {
            length: e
          })
        }

        function _typeof$6(e) {
          return _typeof$6 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
          } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
          }, _typeof$6(e)
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
          var e, t = ["abs", "acos", "acosh", "asin", "asinh", "atan", "atanh", "atan2", "ceil", "cbrt", "expm1", "clz32", "cos", "cosh", "exp", "floor", "fround", "hypot", "imul", "log", "log1p", "log2", "log10", "max", "min", "pow", "random", "round", "sign", "sin", "sinh", "sqrt", "tan", "tanh", "trunc", "E", "LN10", "LN2", "LOG10E", "LOG2E", "PI", "SQRT1_2", "SQRT2"],
            r = t.length;
          for (e = 0; e < r; e += 1) BMMath[t[e]] = Math[t[e]]
        }(), BMMath.random = Math.random, BMMath.abs = function(e) {
          if ("object" === _typeof$6(e) && e.length) {
            var t, r = createSizedArray(e.length),
              i = e.length;
            for (t = 0; t < i; t += 1) r[t] = Math.abs(e[t]);
            return r
          }
          return Math.abs(e)
        };
        var defaultCurveSegments = 150,
          degToRads = Math.PI / 180,
          roundCorner = .5519;

        function roundValues(e) {
          _shouldRoundValues = !!e
        }

        function bmRnd(e) {
          return _shouldRoundValues ? Math.round(e) : e
        }

        function styleDiv(e) {
          e.style.position = "absolute", e.style.top = 0, e.style.left = 0, e.style.display = "block", e.style.transformOrigin = "0 0", e.style.webkitTransformOrigin = "0 0", e.style.backfaceVisibility = "visible", e.style.webkitBackfaceVisibility = "visible", e.style.transformStyle = "preserve-3d", e.style.webkitTransformStyle = "preserve-3d", e.style.mozTransformStyle = "preserve-3d"
        }

        function BMEnterFrameEvent(e, t, r, i) {
          this.type = e, this.currentTime = t, this.totalTime = r, this.direction = i < 0 ? -1 : 1
        }

        function BMCompleteEvent(e, t) {
          this.type = e, this.direction = t < 0 ? -1 : 1
        }

        function BMCompleteLoopEvent(e, t, r, i) {
          this.type = e, this.currentLoop = r, this.totalLoops = t, this.direction = i < 0 ? -1 : 1
        }

        function BMSegmentStartEvent(e, t, r) {
          this.type = e, this.firstFrame = t, this.totalFrames = r
        }

        function BMDestroyEvent(e, t) {
          this.type = e, this.target = t
        }

        function BMRenderFrameErrorEvent(e, t) {
          this.type = "renderFrameError", this.nativeError = e, this.currentTime = t
        }

        function BMConfigErrorEvent(e) {
          this.type = "configError", this.nativeError = e
        }

        function BMAnimationConfigErrorEvent(e, t) {
          this.type = e, this.nativeError = t
        }
        var createElementID = (_count = 0, function() {
            return idPrefix$1 + "__lottie_element_" + (_count += 1)
          }),
          _count;

        function HSVtoRGB(e, t, r) {
          var i, n, a, s, o, l, u, c;
          switch (l = r * (1 - t), u = r * (1 - (o = 6 * e - (s = Math.floor(6 * e))) * t), c = r * (1 - (1 - o) * t), s % 6) {
            case 0:
              i = r, n = c, a = l;
              break;
            case 1:
              i = u, n = r, a = l;
              break;
            case 2:
              i = l, n = r, a = c;
              break;
            case 3:
              i = l, n = u, a = r;
              break;
            case 4:
              i = c, n = l, a = r;
              break;
            case 5:
              i = r, n = l, a = u
          }
          return [i, n, a]
        }

        function RGBtoHSV(e, t, r) {
          var i, n = Math.max(e, t, r),
            a = Math.min(e, t, r),
            s = n - a,
            o = 0 === n ? 0 : s / n,
            l = n / 255;
          switch (n) {
            case a:
              i = 0;
              break;
            case e:
              i = t - r + s * (t < r ? 6 : 0), i /= 6 * s;
              break;
            case t:
              i = r - e + 2 * s, i /= 6 * s;
              break;
            case r:
              i = e - t + 4 * s, i /= 6 * s
          }
          return [i, o, l]
        }

        function addSaturationToRGB(e, t) {
          var r = RGBtoHSV(255 * e[0], 255 * e[1], 255 * e[2]);
          return r[1] += t, r[1] > 1 ? r[1] = 1 : r[1] <= 0 && (r[1] = 0), HSVtoRGB(r[0], r[1], r[2])
        }

        function addBrightnessToRGB(e, t) {
          var r = RGBtoHSV(255 * e[0], 255 * e[1], 255 * e[2]);
          return r[2] += t, r[2] > 1 ? r[2] = 1 : r[2] < 0 && (r[2] = 0), HSVtoRGB(r[0], r[1], r[2])
        }

        function addHueToRGB(e, t) {
          var r = RGBtoHSV(255 * e[0], 255 * e[1], 255 * e[2]);
          return r[0] += t / 360, r[0] > 1 ? r[0] -= 1 : r[0] < 0 && (r[0] += 1), HSVtoRGB(r[0], r[1], r[2])
        }
        var rgbToHex = function() {
            var e, t, r = [];
            for (e = 0; e < 256; e += 1) t = e.toString(16), r[e] = 1 === t.length ? "0" + t : t;
            return function(e, t, i) {
              return e < 0 && (e = 0), t < 0 && (t = 0), i < 0 && (i = 0), "#" + r[e] + r[t] + r[i]
            }
          }(),
          setSubframeEnabled = function(e) {
            subframeEnabled = !!e
          },
          getSubframeEnabled = function() {
            return subframeEnabled
          },
          setExpressionsPlugin = function(e) {
            expressionsPlugin = e
          },
          getExpressionsPlugin = function() {
            return expressionsPlugin
          },
          setExpressionInterfaces = function(e) {
            expressionsInterfaces = e
          },
          getExpressionInterfaces = function() {
            return expressionsInterfaces
          },
          setDefaultCurveSegments = function(e) {
            defaultCurveSegments = e
          },
          getDefaultCurveSegments = function() {
            return defaultCurveSegments
          },
          setIdPrefix = function(e) {
            idPrefix$1 = e
          },
          getIdPrefix = function() {
            return idPrefix$1
          };

        function createNS(e) {
          return document.createElementNS(svgNS, e)
        }

        function _typeof$5(e) {
          return _typeof$5 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
          } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
          }, _typeof$5(e)
        }
        var dataManager = function() {
            var e, t, r = 1,
              i = [],
              n = {
                onmessage: function() {},
                postMessage: function(t) {
                  e({
                    data: t
                  })
                }
              },
              a = {
                postMessage: function(e) {
                  n.onmessage({
                    data: e
                  })
                }
              };

            function s() {
              t || (t = function(t) {
                if (window.Worker && window.Blob && getWebWorker()) {
                  var r = new Blob(["var _workerSelf = self; self.onmessage = ", t.toString()], {
                      type: "text/javascript"
                    }),
                    i = URL.createObjectURL(r);
                  return new Worker(i)
                }
                return e = t, n
              }((function(e) {
                if (a.dataManager || (a.dataManager = function() {
                    function e(n, a) {
                      var s, o, l, u, c, h, p, d = n.length;
                      for (o = 0; o < d; o += 1)
                        if ("ks" in (s = n[o]) && !s.completed) {
                          if (s.completed = !0, s.hasMask) {
                            var f = s.masksProperties;
                            for (u = f.length, l = 0; l < u; l += 1)
                              if (f[l].pt.k.i) i(f[l].pt.k);
                              else
                                for (h = f[l].pt.k.length, c = 0; c < h; c += 1) f[l].pt.k[c].s && i(f[l].pt.k[c].s[0]), f[l].pt.k[c].e && i(f[l].pt.k[c].e[0])
                          }
                          0 === s.ty ? (s.layers = t(s.refId, a), e(s.layers, a)) : 4 === s.ty ? r(s.shapes) : 5 === s.ty && (0 === (p = s).t.a.length && p.t.p)
                        }
                    }

                    function t(e, t) {
                      var r = function(e, t) {
                        for (var r = 0, i = t.length; r < i;) {
                          if (t[r].id === e) return t[r];
                          r += 1
                        }
                        return null
                      }(e, t);
                      return r ? r.layers.__used ? JSON.parse(JSON.stringify(r.layers)) : (r.layers.__used = !0, r.layers) : null
                    }

                    function r(e) {
                      var t, n, a;
                      for (t = e.length - 1; t >= 0; t -= 1)
                        if ("sh" === e[t].ty)
                          if (e[t].ks.k.i) i(e[t].ks.k);
                          else
                            for (a = e[t].ks.k.length, n = 0; n < a; n += 1) e[t].ks.k[n].s && i(e[t].ks.k[n].s[0]), e[t].ks.k[n].e && i(e[t].ks.k[n].e[0]);
                      else "gr" === e[t].ty && r(e[t].it)
                    }

                    function i(e) {
                      var t, r = e.i.length;
                      for (t = 0; t < r; t += 1) e.i[t][0] += e.v[t][0], e.i[t][1] += e.v[t][1], e.o[t][0] += e.v[t][0], e.o[t][1] += e.v[t][1]
                    }

                    function n(e, t) {
                      var r = t ? t.split(".") : [100, 100, 100];
                      return e[0] > r[0] || !(r[0] > e[0]) && (e[1] > r[1] || !(r[1] > e[1]) && (e[2] > r[2] || !(r[2] > e[2]) && null))
                    }
                    var a, s = function() {
                        var e = [4, 4, 14];

                        function t(e) {
                          var t, r, i, n = e.length;
                          for (t = 0; t < n; t += 1) 5 === e[t].ty && (void 0, i = (r = e[t]).t.d, r.t.d = {
                            k: [{
                              s: i,
                              t: 0
                            }]
                          })
                        }
                        return function(r) {
                          if (n(e, r.v) && (t(r.layers), r.assets)) {
                            var i, a = r.assets.length;
                            for (i = 0; i < a; i += 1) r.assets[i].layers && t(r.assets[i].layers)
                          }
                        }
                      }(),
                      o = (a = [4, 7, 99], function(e) {
                        if (e.chars && !n(a, e.v)) {
                          var t, i = e.chars.length;
                          for (t = 0; t < i; t += 1) {
                            var s = e.chars[t];
                            s.data && s.data.shapes && (r(s.data.shapes), s.data.ip = 0, s.data.op = 99999, s.data.st = 0, s.data.sr = 1, s.data.ks = {
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
                            }, e.chars[t].t || (s.data.shapes.push({
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
                        var e = [5, 7, 15];

                        function t(e) {
                          var t, r, i = e.length;
                          for (t = 0; t < i; t += 1) 5 === e[t].ty && (r = void 0, "number" == typeof(r = e[t].t.p).a && (r.a = {
                            a: 0,
                            k: r.a
                          }), "number" == typeof r.p && (r.p = {
                            a: 0,
                            k: r.p
                          }), "number" == typeof r.r && (r.r = {
                            a: 0,
                            k: r.r
                          }))
                        }
                        return function(r) {
                          if (n(e, r.v) && (t(r.layers), r.assets)) {
                            var i, a = r.assets.length;
                            for (i = 0; i < a; i += 1) r.assets[i].layers && t(r.assets[i].layers)
                          }
                        }
                      }(),
                      u = function() {
                        var e = [4, 1, 9];

                        function t(e) {
                          var r, i, n, a = e.length;
                          for (r = 0; r < a; r += 1)
                            if ("gr" === e[r].ty) t(e[r].it);
                            else if ("fl" === e[r].ty || "st" === e[r].ty)
                            if (e[r].c.k && e[r].c.k[0].i)
                              for (n = e[r].c.k.length, i = 0; i < n; i += 1) e[r].c.k[i].s && (e[r].c.k[i].s[0] /= 255, e[r].c.k[i].s[1] /= 255, e[r].c.k[i].s[2] /= 255, e[r].c.k[i].s[3] /= 255), e[r].c.k[i].e && (e[r].c.k[i].e[0] /= 255, e[r].c.k[i].e[1] /= 255, e[r].c.k[i].e[2] /= 255, e[r].c.k[i].e[3] /= 255);
                            else e[r].c.k[0] /= 255, e[r].c.k[1] /= 255, e[r].c.k[2] /= 255, e[r].c.k[3] /= 255
                        }

                        function r(e) {
                          var r, i = e.length;
                          for (r = 0; r < i; r += 1) 4 === e[r].ty && t(e[r].shapes)
                        }
                        return function(t) {
                          if (n(e, t.v) && (r(t.layers), t.assets)) {
                            var i, a = t.assets.length;
                            for (i = 0; i < a; i += 1) t.assets[i].layers && r(t.assets[i].layers)
                          }
                        }
                      }(),
                      c = function() {
                        var e = [4, 4, 18];

                        function t(e) {
                          var r, i, n;
                          for (r = e.length - 1; r >= 0; r -= 1)
                            if ("sh" === e[r].ty)
                              if (e[r].ks.k.i) e[r].ks.k.c = e[r].closed;
                              else
                                for (n = e[r].ks.k.length, i = 0; i < n; i += 1) e[r].ks.k[i].s && (e[r].ks.k[i].s[0].c = e[r].closed), e[r].ks.k[i].e && (e[r].ks.k[i].e[0].c = e[r].closed);
                          else "gr" === e[r].ty && t(e[r].it)
                        }

                        function r(e) {
                          var r, i, n, a, s, o, l = e.length;
                          for (i = 0; i < l; i += 1) {
                            if ((r = e[i]).hasMask) {
                              var u = r.masksProperties;
                              for (a = u.length, n = 0; n < a; n += 1)
                                if (u[n].pt.k.i) u[n].pt.k.c = u[n].cl;
                                else
                                  for (o = u[n].pt.k.length, s = 0; s < o; s += 1) u[n].pt.k[s].s && (u[n].pt.k[s].s[0].c = u[n].cl), u[n].pt.k[s].e && (u[n].pt.k[s].e[0].c = u[n].cl)
                            }
                            4 === r.ty && t(r.shapes)
                          }
                        }
                        return function(t) {
                          if (n(e, t.v) && (r(t.layers), t.assets)) {
                            var i, a = t.assets.length;
                            for (i = 0; i < a; i += 1) t.assets[i].layers && r(t.assets[i].layers)
                          }
                        }
                      }();
                    var h = {
                      completeData: function(r) {
                        r.__complete || (u(r), s(r), o(r), l(r), c(r), e(r.layers, r.assets), function(r, i) {
                          if (r) {
                            var n = 0,
                              a = r.length;
                            for (n = 0; n < a; n += 1) 1 === r[n].t && (r[n].data.layers = t(r[n].data.refId, i), e(r[n].data.layers, i))
                          }
                        }(r.chars, r.assets), r.__complete = !0)
                      }
                    };
                    return h.checkColors = u, h.checkChars = o, h.checkPathProperties = l, h.checkShapes = c, h.completeLayers = e, h
                  }()), a.assetLoader || (a.assetLoader = function() {
                    function e(e) {
                      var t = e.getResponseHeader("content-type");
                      return t && "json" === e.responseType && -1 !== t.indexOf("json") || e.response && "object" === _typeof$5(e.response) ? e.response : e.response && "string" == typeof e.response ? JSON.parse(e.response) : e.responseText ? JSON.parse(e.responseText) : null
                    }
                    return {
                      load: function(t, r, i, n) {
                        var a, s = new XMLHttpRequest;
                        try {
                          s.responseType = "json"
                        } catch (e) {}
                        s.onreadystatechange = function() {
                          if (4 === s.readyState)
                            if (200 === s.status) a = e(s), i(a);
                            else try {
                              a = e(s), i(a)
                            } catch (e) {
                              n && n(e)
                            }
                        };
                        try {
                          s.open(["G", "E", "T"].join(""), t, !0)
                        } catch (e) {
                          s.open(["G", "E", "T"].join(""), r + "/" + t, !0)
                        }
                        s.send()
                      }
                    }
                  }()), "loadAnimation" === e.data.type) a.assetLoader.load(e.data.path, e.data.fullPath, (function(t) {
                  a.dataManager.completeData(t), a.postMessage({
                    id: e.data.id,
                    payload: t,
                    status: "success"
                  })
                }), (function() {
                  a.postMessage({
                    id: e.data.id,
                    status: "error"
                  })
                }));
                else if ("complete" === e.data.type) {
                  var t = e.data.animation;
                  a.dataManager.completeData(t), a.postMessage({
                    id: e.data.id,
                    payload: t,
                    status: "success"
                  })
                } else "loadData" === e.data.type && a.assetLoader.load(e.data.path, e.data.fullPath, (function(t) {
                  a.postMessage({
                    id: e.data.id,
                    payload: t,
                    status: "success"
                  })
                }), (function() {
                  a.postMessage({
                    id: e.data.id,
                    status: "error"
                  })
                }))
              })), t.onmessage = function(e) {
                var t = e.data,
                  r = t.id,
                  n = i[r];
                i[r] = null, "success" === t.status ? n.onComplete(t.payload) : n.onError && n.onError()
              })
            }

            function o(e, t) {
              var n = "processId_" + (r += 1);
              return i[n] = {
                onComplete: e,
                onError: t
              }, n
            }
            return {
              loadAnimation: function(e, r, i) {
                s();
                var n = o(r, i);
                t.postMessage({
                  type: "loadAnimation",
                  path: e,
                  fullPath: window.location.origin + window.location.pathname,
                  id: n
                })
              },
              loadData: function(e, r, i) {
                s();
                var n = o(r, i);
                t.postMessage({
                  type: "loadData",
                  path: e,
                  fullPath: window.location.origin + window.location.pathname,
                  id: n
                })
              },
              completeAnimation: function(e, r, i) {
                s();
                var n = o(r, i);
                t.postMessage({
                  type: "complete",
                  animation: e,
                  id: n
                })
              }
            }
          }(),
          ImagePreloader = function() {
            var e = function() {
              var e = createTag("canvas");
              e.width = 1, e.height = 1;
              var t = e.getContext("2d");
              return t.fillStyle = "rgba(0,0,0,0)", t.fillRect(0, 0, 1, 1), e
            }();

            function t() {
              this.loadedAssets += 1, this.loadedAssets === this.totalImages && this.loadedFootagesCount === this.totalFootages && this.imagesLoadedCb && this.imagesLoadedCb(null)
            }

            function r() {
              this.loadedFootagesCount += 1, this.loadedAssets === this.totalImages && this.loadedFootagesCount === this.totalFootages && this.imagesLoadedCb && this.imagesLoadedCb(null)
            }

            function i(e, t, r) {
              var i = "";
              if (e.e) i = e.p;
              else if (t) {
                var n = e.p; - 1 !== n.indexOf("images/") && (n = n.split("/")[1]), i = t + n
              } else i = r, i += e.u ? e.u : "", i += e.p;
              return i
            }

            function n(e) {
              var t = 0,
                r = setInterval(function() {
                  (e.getBBox().width || t > 500) && (this._imageLoaded(), clearInterval(r)), t += 1
                }.bind(this), 50)
            }

            function a(e) {
              var t = {
                  assetData: e
                },
                r = i(e, this.assetsPath, this.path);
              return dataManager.loadData(r, function(e) {
                t.img = e, this._footageLoaded()
              }.bind(this), function() {
                t.img = {}, this._footageLoaded()
              }.bind(this)), t
            }

            function s() {
              this._imageLoaded = t.bind(this), this._footageLoaded = r.bind(this), this.testImageLoaded = n.bind(this), this.createFootageData = a.bind(this), this.assetsPath = "", this.path = "", this.totalImages = 0, this.totalFootages = 0, this.loadedAssets = 0, this.loadedFootagesCount = 0, this.imagesLoadedCb = null, this.images = []
            }
            return s.prototype = {
              loadAssets: function(e, t) {
                var r;
                this.imagesLoadedCb = t;
                var i = e.length;
                for (r = 0; r < i; r += 1) e[r].layers || (e[r].t && "seq" !== e[r].t ? 3 === e[r].t && (this.totalFootages += 1, this.images.push(this.createFootageData(e[r]))) : (this.totalImages += 1, this.images.push(this._createImageData(e[r]))))
              },
              setAssetsPath: function(e) {
                this.assetsPath = e || ""
              },
              setPath: function(e) {
                this.path = e || ""
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
              getAsset: function(e) {
                for (var t = 0, r = this.images.length; t < r;) {
                  if (this.images[t].assetData === e) return this.images[t].img;
                  t += 1
                }
                return null
              },
              createImgData: function(t) {
                var r = i(t, this.assetsPath, this.path),
                  n = createTag("img");
                n.crossOrigin = "anonymous", n.addEventListener("load", this._imageLoaded, !1), n.addEventListener("error", function() {
                  a.img = e, this._imageLoaded()
                }.bind(this), !1), n.src = r;
                var a = {
                  img: n,
                  assetData: t
                };
                return a
              },
              createImageData: function(t) {
                var r = i(t, this.assetsPath, this.path),
                  n = createNS("image");
                isSafari ? this.testImageLoaded(n) : n.addEventListener("load", this._imageLoaded, !1), n.addEventListener("error", function() {
                  a.img = e, this._imageLoaded()
                }.bind(this), !1), n.setAttributeNS("http://www.w3.org/1999/xlink", "href", r), this._elementHelper.append ? this._elementHelper.append(n) : this._elementHelper.appendChild(n);
                var a = {
                  img: n,
                  assetData: t
                };
                return a
              },
              imageLoaded: t,
              footageLoaded: r,
              setCacheType: function(e, t) {
                "svg" === e ? (this._elementHelper = t, this._createImageData = this.createImageData.bind(this)) : this._createImageData = this.createImgData.bind(this)
              }
            }, s
          }();

        function BaseEvent() {}
        BaseEvent.prototype = {
          triggerEvent: function(e, t) {
            if (this._cbs[e])
              for (var r = this._cbs[e], i = 0; i < r.length; i += 1) r[i](t)
          },
          addEventListener: function(e, t) {
            return this._cbs[e] || (this._cbs[e] = []), this._cbs[e].push(t),
              function() {
                this.removeEventListener(e, t)
              }.bind(this)
          },
          removeEventListener: function(e, t) {
            if (t) {
              if (this._cbs[e]) {
                for (var r = 0, i = this._cbs[e].length; r < i;) this._cbs[e][r] === t && (this._cbs[e].splice(r, 1), r -= 1, i -= 1), r += 1;
                this._cbs[e].length || (this._cbs[e] = null)
              }
            } else this._cbs[e] = null
          }
        };
        var markerParser = function() {
            function e(e) {
              for (var t, r = e.split("\r\n"), i = {}, n = 0, a = 0; a < r.length; a += 1) 2 === (t = r[a].split(":")).length && (i[t[0]] = t[1].trim(), n += 1);
              if (0 === n) throw new Error;
              return i
            }
            return function(t) {
              for (var r = [], i = 0; i < t.length; i += 1) {
                var n = t[i],
                  a = {
                    time: n.tm,
                    duration: n.dr
                  };
                try {
                  a.payload = JSON.parse(t[i].cm)
                } catch (r) {
                  try {
                    a.payload = e(t[i].cm)
                  } catch (e) {
                    a.payload = {
                      name: t[i].cm
                    }
                  }
                }
                r.push(a)
              }
              return r
            }
          }(),
          ProjectInterface = function() {
            function e(e) {
              this.compositions.push(e)
            }
            return function() {
              function t(e) {
                for (var t = 0, r = this.compositions.length; t < r;) {
                  if (this.compositions[t].data && this.compositions[t].data.nm === e) return this.compositions[t].prepareFrame && this.compositions[t].data.xt && this.compositions[t].prepareFrame(this.currentFrame), this.compositions[t].compInterface;
                  t += 1
                }
                return null
              }
              return t.compositions = [], t.currentFrame = 0, t.registerComposition = e, t
            }
          }(),
          renderers = {},
          registerRenderer = function(e, t) {
            renderers[e] = t
          };

        function getRenderer(e) {
          return renderers[e]
        }

        function getRegisteredRenderer() {
          if (renderers.canvas) return "canvas";
          for (var e in renderers)
            if (renderers[e]) return e;
          return ""
        }

        function _typeof$4(e) {
          return _typeof$4 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
          } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
          }, _typeof$4(e)
        }
        var AnimationItem = function() {
          this._cbs = [], this.name = "", this.path = "", this.isLoaded = !1, this.currentFrame = 0, this.currentRawFrame = 0, this.firstFrame = 0, this.totalFrames = 0, this.frameRate = 0, this.frameMult = 0, this.playSpeed = 1, this.playDirection = 1, this.playCount = 0, this.animationData = {}, this.assets = [], this.isPaused = !0, this.autoplay = !1, this.loop = !0, this.renderer = null, this.animationID = createElementID(), this.assetsPath = "", this.timeCompleted = 0, this.segmentPos = 0, this.isSubframeEnabled = getSubframeEnabled(), this.segments = [], this._idle = !0, this._completedLoop = !1, this.projectInterface = ProjectInterface(), this.imagePreloader = new ImagePreloader, this.audioController = audioControllerFactory(), this.markers = [], this.configAnimation = this.configAnimation.bind(this), this.onSetupError = this.onSetupError.bind(this), this.onSegmentComplete = this.onSegmentComplete.bind(this), this.drawnFrameEvent = new BMEnterFrameEvent("drawnFrame", 0, 0, 0), this.expressionsPlugin = getExpressionsPlugin()
        };
        extendPrototype([BaseEvent], AnimationItem), AnimationItem.prototype.setParams = function(e) {
          (e.wrapper || e.container) && (this.wrapper = e.wrapper || e.container);
          var t = "svg";
          e.animType ? t = e.animType : e.renderer && (t = e.renderer);
          var r = getRenderer(t);
          this.renderer = new r(this, e.rendererSettings), this.imagePreloader.setCacheType(t, this.renderer.globalData.defs), this.renderer.setProjectInterface(this.projectInterface), this.animType = t, "" === e.loop || null === e.loop || void 0 === e.loop || !0 === e.loop ? this.loop = !0 : !1 === e.loop ? this.loop = !1 : this.loop = parseInt(e.loop, 10), this.autoplay = !("autoplay" in e) || e.autoplay, this.name = e.name ? e.name : "", this.autoloadSegments = !Object.prototype.hasOwnProperty.call(e, "autoloadSegments") || e.autoloadSegments, this.assetsPath = e.assetsPath, this.initialSegment = e.initialSegment, e.audioFactory && this.audioController.setAudioFactory(e.audioFactory), e.animationData ? this.setupAnimation(e.animationData) : e.path && (-1 !== e.path.lastIndexOf("\\") ? this.path = e.path.substr(0, e.path.lastIndexOf("\\") + 1) : this.path = e.path.substr(0, e.path.lastIndexOf("/") + 1), this.fileName = e.path.substr(e.path.lastIndexOf("/") + 1), this.fileName = this.fileName.substr(0, this.fileName.lastIndexOf(".json")), dataManager.loadAnimation(e.path, this.configAnimation, this.onSetupError))
        }, AnimationItem.prototype.onSetupError = function() {
          this.trigger("data_failed")
        }, AnimationItem.prototype.setupAnimation = function(e) {
          dataManager.completeAnimation(e, this.configAnimation)
        }, AnimationItem.prototype.setData = function(e, t) {
          t && "object" !== _typeof$4(t) && (t = JSON.parse(t));
          var r = {
              wrapper: e,
              animationData: t
            },
            i = e.attributes;
          r.path = i.getNamedItem("data-animation-path") ? i.getNamedItem("data-animation-path").value : i.getNamedItem("data-bm-path") ? i.getNamedItem("data-bm-path").value : i.getNamedItem("bm-path") ? i.getNamedItem("bm-path").value : "", r.animType = i.getNamedItem("data-anim-type") ? i.getNamedItem("data-anim-type").value : i.getNamedItem("data-bm-type") ? i.getNamedItem("data-bm-type").value : i.getNamedItem("bm-type") ? i.getNamedItem("bm-type").value : i.getNamedItem("data-bm-renderer") ? i.getNamedItem("data-bm-renderer").value : i.getNamedItem("bm-renderer") ? i.getNamedItem("bm-renderer").value : getRegisteredRenderer() || "canvas";
          var n = i.getNamedItem("data-anim-loop") ? i.getNamedItem("data-anim-loop").value : i.getNamedItem("data-bm-loop") ? i.getNamedItem("data-bm-loop").value : i.getNamedItem("bm-loop") ? i.getNamedItem("bm-loop").value : "";
          "false" === n ? r.loop = !1 : "true" === n ? r.loop = !0 : "" !== n && (r.loop = parseInt(n, 10));
          var a = i.getNamedItem("data-anim-autoplay") ? i.getNamedItem("data-anim-autoplay").value : i.getNamedItem("data-bm-autoplay") ? i.getNamedItem("data-bm-autoplay").value : !i.getNamedItem("bm-autoplay") || i.getNamedItem("bm-autoplay").value;
          r.autoplay = "false" !== a, r.name = i.getNamedItem("data-name") ? i.getNamedItem("data-name").value : i.getNamedItem("data-bm-name") ? i.getNamedItem("data-bm-name").value : i.getNamedItem("bm-name") ? i.getNamedItem("bm-name").value : "", "false" === (i.getNamedItem("data-anim-prerender") ? i.getNamedItem("data-anim-prerender").value : i.getNamedItem("data-bm-prerender") ? i.getNamedItem("data-bm-prerender").value : i.getNamedItem("bm-prerender") ? i.getNamedItem("bm-prerender").value : "") && (r.prerender = !1), r.path ? this.setParams(r) : this.trigger("destroy")
        }, AnimationItem.prototype.includeLayers = function(e) {
          e.op > this.animationData.op && (this.animationData.op = e.op, this.totalFrames = Math.floor(e.op - this.animationData.ip));
          var t, r, i = this.animationData.layers,
            n = i.length,
            a = e.layers,
            s = a.length;
          for (r = 0; r < s; r += 1)
            for (t = 0; t < n;) {
              if (i[t].id === a[r].id) {
                i[t] = a[r];
                break
              }
              t += 1
            }
          if ((e.chars || e.fonts) && (this.renderer.globalData.fontManager.addChars(e.chars), this.renderer.globalData.fontManager.addFonts(e.fonts, this.renderer.globalData.defs)), e.assets)
            for (n = e.assets.length, t = 0; t < n; t += 1) this.animationData.assets.push(e.assets[t]);
          this.animationData.__complete = !1, dataManager.completeAnimation(this.animationData, this.onSegmentComplete)
        }, AnimationItem.prototype.onSegmentComplete = function(e) {
          this.animationData = e;
          var t = getExpressionsPlugin();
          t && t.initExpressions(this), this.loadNextSegment()
        }, AnimationItem.prototype.loadNextSegment = function() {
          var e = this.animationData.segments;
          if (!e || 0 === e.length || !this.autoloadSegments) return this.trigger("data_ready"), void(this.timeCompleted = this.totalFrames);
          var t = e.shift();
          this.timeCompleted = t.time * this.frameRate;
          var r = this.path + this.fileName + "_" + this.segmentPos + ".json";
          this.segmentPos += 1, dataManager.loadData(r, this.includeLayers.bind(this), function() {
            this.trigger("data_failed")
          }.bind(this))
        }, AnimationItem.prototype.loadSegments = function() {
          this.animationData.segments || (this.timeCompleted = this.totalFrames), this.loadNextSegment()
        }, AnimationItem.prototype.imagesLoaded = function() {
          this.trigger("loaded_images"), this.checkLoaded()
        }, AnimationItem.prototype.preloadImages = function() {
          this.imagePreloader.setAssetsPath(this.assetsPath), this.imagePreloader.setPath(this.path), this.imagePreloader.loadAssets(this.animationData.assets, this.imagesLoaded.bind(this))
        }, AnimationItem.prototype.configAnimation = function(e) {
          if (this.renderer) try {
            this.animationData = e, this.initialSegment ? (this.totalFrames = Math.floor(this.initialSegment[1] - this.initialSegment[0]), this.firstFrame = Math.round(this.initialSegment[0])) : (this.totalFrames = Math.floor(this.animationData.op - this.animationData.ip), this.firstFrame = Math.round(this.animationData.ip)), this.renderer.configAnimation(e), e.assets || (e.assets = []), this.assets = this.animationData.assets, this.frameRate = this.animationData.fr, this.frameMult = this.animationData.fr / 1e3, this.renderer.searchExtraCompositions(e.assets), this.markers = markerParser(e.markers || []), this.trigger("config_ready"), this.preloadImages(), this.loadSegments(), this.updaFrameModifier(), this.waitForFontsLoaded(), this.isPaused && this.audioController.pause()
          } catch (e) {
            this.triggerConfigError(e)
          }
        }, AnimationItem.prototype.waitForFontsLoaded = function() {
          this.renderer && (this.renderer.globalData.fontManager.isLoaded ? this.checkLoaded() : setTimeout(this.waitForFontsLoaded.bind(this), 20))
        }, AnimationItem.prototype.checkLoaded = function() {
          if (!this.isLoaded && this.renderer.globalData.fontManager.isLoaded && (this.imagePreloader.loadedImages() || "canvas" !== this.renderer.rendererType) && this.imagePreloader.loadedFootages()) {
            this.isLoaded = !0;
            var e = getExpressionsPlugin();
            e && e.initExpressions(this), this.renderer.initItems(), setTimeout(function() {
              this.trigger("DOMLoaded")
            }.bind(this), 0), this.gotoFrame(), this.autoplay && this.play()
          }
        }, AnimationItem.prototype.resize = function(e, t) {
          var r = "number" == typeof e ? e : void 0,
            i = "number" == typeof t ? t : void 0;
          this.renderer.updateContainerSize(r, i)
        }, AnimationItem.prototype.setSubframe = function(e) {
          this.isSubframeEnabled = !!e
        }, AnimationItem.prototype.gotoFrame = function() {
          this.currentFrame = this.isSubframeEnabled ? this.currentRawFrame : ~~this.currentRawFrame, this.timeCompleted !== this.totalFrames && this.currentFrame > this.timeCompleted && (this.currentFrame = this.timeCompleted), this.trigger("enterFrame"), this.renderFrame(), this.trigger("drawnFrame")
        }, AnimationItem.prototype.renderFrame = function() {
          if (!1 !== this.isLoaded && this.renderer) try {
            this.expressionsPlugin && this.expressionsPlugin.resetFrame(), this.renderer.renderFrame(this.currentFrame + this.firstFrame)
          } catch (e) {
            this.triggerRenderFrameError(e)
          }
        }, AnimationItem.prototype.play = function(e) {
          e && this.name !== e || !0 === this.isPaused && (this.isPaused = !1, this.trigger("_play"), this.audioController.resume(), this._idle && (this._idle = !1, this.trigger("_active")))
        }, AnimationItem.prototype.pause = function(e) {
          e && this.name !== e || !1 === this.isPaused && (this.isPaused = !0, this.trigger("_pause"), this._idle = !0, this.trigger("_idle"), this.audioController.pause())
        }, AnimationItem.prototype.togglePause = function(e) {
          e && this.name !== e || (!0 === this.isPaused ? this.play() : this.pause())
        }, AnimationItem.prototype.stop = function(e) {
          e && this.name !== e || (this.pause(), this.playCount = 0, this._completedLoop = !1, this.setCurrentRawFrameValue(0))
        }, AnimationItem.prototype.getMarkerData = function(e) {
          for (var t, r = 0; r < this.markers.length; r += 1)
            if ((t = this.markers[r]).payload && t.payload.name === e) return t;
          return null
        }, AnimationItem.prototype.goToAndStop = function(e, t, r) {
          if (!r || this.name === r) {
            var i = Number(e);
            if (isNaN(i)) {
              var n = this.getMarkerData(e);
              n && this.goToAndStop(n.time, !0)
            } else t ? this.setCurrentRawFrameValue(e) : this.setCurrentRawFrameValue(e * this.frameModifier);
            this.pause()
          }
        }, AnimationItem.prototype.goToAndPlay = function(e, t, r) {
          if (!r || this.name === r) {
            var i = Number(e);
            if (isNaN(i)) {
              var n = this.getMarkerData(e);
              n && (n.duration ? this.playSegments([n.time, n.time + n.duration], !0) : this.goToAndStop(n.time, !0))
            } else this.goToAndStop(i, t, r);
            this.play()
          }
        }, AnimationItem.prototype.advanceTime = function(e) {
          if (!0 !== this.isPaused && !1 !== this.isLoaded) {
            var t = this.currentRawFrame + e * this.frameModifier,
              r = !1;
            t >= this.totalFrames - 1 && this.frameModifier > 0 ? this.loop && this.playCount !== this.loop ? t >= this.totalFrames ? (this.playCount += 1, this.checkSegments(t % this.totalFrames) || (this.setCurrentRawFrameValue(t % this.totalFrames), this._completedLoop = !0, this.trigger("loopComplete"))) : this.setCurrentRawFrameValue(t) : this.checkSegments(t > this.totalFrames ? t % this.totalFrames : 0) || (r = !0, t = this.totalFrames - 1) : t < 0 ? this.checkSegments(t % this.totalFrames) || (!this.loop || this.playCount-- <= 0 && !0 !== this.loop ? (r = !0, t = 0) : (this.setCurrentRawFrameValue(this.totalFrames + t % this.totalFrames), this._completedLoop ? this.trigger("loopComplete") : this._completedLoop = !0)) : this.setCurrentRawFrameValue(t), r && (this.setCurrentRawFrameValue(t), this.pause(), this.trigger("complete"))
          }
        }, AnimationItem.prototype.adjustSegment = function(e, t) {
          this.playCount = 0, e[1] < e[0] ? (this.frameModifier > 0 && (this.playSpeed < 0 ? this.setSpeed(-this.playSpeed) : this.setDirection(-1)), this.totalFrames = e[0] - e[1], this.timeCompleted = this.totalFrames, this.firstFrame = e[1], this.setCurrentRawFrameValue(this.totalFrames - .001 - t)) : e[1] > e[0] && (this.frameModifier < 0 && (this.playSpeed < 0 ? this.setSpeed(-this.playSpeed) : this.setDirection(1)), this.totalFrames = e[1] - e[0], this.timeCompleted = this.totalFrames, this.firstFrame = e[0], this.setCurrentRawFrameValue(.001 + t)), this.trigger("segmentStart")
        }, AnimationItem.prototype.setSegment = function(e, t) {
          var r = -1;
          this.isPaused && (this.currentRawFrame + this.firstFrame < e ? r = e : this.currentRawFrame + this.firstFrame > t && (r = t - e)), this.firstFrame = e, this.totalFrames = t - e, this.timeCompleted = this.totalFrames, -1 !== r && this.goToAndStop(r, !0)
        }, AnimationItem.prototype.playSegments = function(e, t) {
          if (t && (this.segments.length = 0), "object" === _typeof$4(e[0])) {
            var r, i = e.length;
            for (r = 0; r < i; r += 1) this.segments.push(e[r])
          } else this.segments.push(e);
          this.segments.length && t && this.adjustSegment(this.segments.shift(), 0), this.isPaused && this.play()
        }, AnimationItem.prototype.resetSegments = function(e) {
          this.segments.length = 0, this.segments.push([this.animationData.ip, this.animationData.op]), e && this.checkSegments(0)
        }, AnimationItem.prototype.checkSegments = function(e) {
          return !!this.segments.length && (this.adjustSegment(this.segments.shift(), e), !0)
        }, AnimationItem.prototype.destroy = function(e) {
          e && this.name !== e || !this.renderer || (this.renderer.destroy(), this.imagePreloader.destroy(), this.trigger("destroy"), this._cbs = null, this.onEnterFrame = null, this.onLoopComplete = null, this.onComplete = null, this.onSegmentStart = null, this.onDestroy = null, this.renderer = null, this.expressionsPlugin = null, this.imagePreloader = null, this.projectInterface = null)
        }, AnimationItem.prototype.setCurrentRawFrameValue = function(e) {
          this.currentRawFrame = e, this.gotoFrame()
        }, AnimationItem.prototype.setSpeed = function(e) {
          this.playSpeed = e, this.updaFrameModifier()
        }, AnimationItem.prototype.setDirection = function(e) {
          this.playDirection = e < 0 ? -1 : 1, this.updaFrameModifier()
        }, AnimationItem.prototype.setLoop = function(e) {
          this.loop = e
        }, AnimationItem.prototype.setVolume = function(e, t) {
          t && this.name !== t || this.audioController.setVolume(e)
        }, AnimationItem.prototype.getVolume = function() {
          return this.audioController.getVolume()
        }, AnimationItem.prototype.mute = function(e) {
          e && this.name !== e || this.audioController.mute()
        }, AnimationItem.prototype.unmute = function(e) {
          e && this.name !== e || this.audioController.unmute()
        }, AnimationItem.prototype.updaFrameModifier = function() {
          this.frameModifier = this.frameMult * this.playSpeed * this.playDirection, this.audioController.setRate(this.playSpeed * this.playDirection)
        }, AnimationItem.prototype.getPath = function() {
          return this.path
        }, AnimationItem.prototype.getAssetsPath = function(e) {
          var t = "";
          if (e.e) t = e.p;
          else if (this.assetsPath) {
            var r = e.p; - 1 !== r.indexOf("images/") && (r = r.split("/")[1]), t = this.assetsPath + r
          } else t = this.path, t += e.u ? e.u : "", t += e.p;
          return t
        }, AnimationItem.prototype.getAssetData = function(e) {
          for (var t = 0, r = this.assets.length; t < r;) {
            if (e === this.assets[t].id) return this.assets[t];
            t += 1
          }
          return null
        }, AnimationItem.prototype.hide = function() {
          this.renderer.hide()
        }, AnimationItem.prototype.show = function() {
          this.renderer.show()
        }, AnimationItem.prototype.getDuration = function(e) {
          return e ? this.totalFrames : this.totalFrames / this.frameRate
        }, AnimationItem.prototype.updateDocumentData = function(e, t, r) {
          try {
            this.renderer.getElementByPath(e).updateDocumentData(t, r)
          } catch (e) {}
        }, AnimationItem.prototype.trigger = function(e) {
          if (this._cbs && this._cbs[e]) switch (e) {
            case "enterFrame":
              this.triggerEvent(e, new BMEnterFrameEvent(e, this.currentFrame, this.totalFrames, this.frameModifier));
              break;
            case "drawnFrame":
              this.drawnFrameEvent.currentTime = this.currentFrame, this.drawnFrameEvent.totalTime = this.totalFrames, this.drawnFrameEvent.direction = this.frameModifier, this.triggerEvent(e, this.drawnFrameEvent);
              break;
            case "loopComplete":
              this.triggerEvent(e, new BMCompleteLoopEvent(e, this.loop, this.playCount, this.frameMult));
              break;
            case "complete":
              this.triggerEvent(e, new BMCompleteEvent(e, this.frameMult));
              break;
            case "segmentStart":
              this.triggerEvent(e, new BMSegmentStartEvent(e, this.firstFrame, this.totalFrames));
              break;
            case "destroy":
              this.triggerEvent(e, new BMDestroyEvent(e, this));
              break;
            default:
              this.triggerEvent(e)
          }
          "enterFrame" === e && this.onEnterFrame && this.onEnterFrame.call(this, new BMEnterFrameEvent(e, this.currentFrame, this.totalFrames, this.frameMult)), "loopComplete" === e && this.onLoopComplete && this.onLoopComplete.call(this, new BMCompleteLoopEvent(e, this.loop, this.playCount, this.frameMult)), "complete" === e && this.onComplete && this.onComplete.call(this, new BMCompleteEvent(e, this.frameMult)), "segmentStart" === e && this.onSegmentStart && this.onSegmentStart.call(this, new BMSegmentStartEvent(e, this.firstFrame, this.totalFrames)), "destroy" === e && this.onDestroy && this.onDestroy.call(this, new BMDestroyEvent(e, this))
        }, AnimationItem.prototype.triggerRenderFrameError = function(e) {
          var t = new BMRenderFrameErrorEvent(e, this.currentFrame);
          this.triggerEvent("error", t), this.onError && this.onError.call(this, t)
        }, AnimationItem.prototype.triggerConfigError = function(e) {
          var t = new BMConfigErrorEvent(e, this.currentFrame);
          this.triggerEvent("error", t), this.onError && this.onError.call(this, t)
        };
        var animationManager = function() {
            var e = {},
              t = [],
              r = 0,
              i = 0,
              n = 0,
              a = !0,
              s = !1;

            function o(e) {
              for (var r = 0, n = e.target; r < i;) t[r].animation === n && (t.splice(r, 1), r -= 1, i -= 1, n.isPaused || c()), r += 1
            }

            function l(e, r) {
              if (!e) return null;
              for (var n = 0; n < i;) {
                if (t[n].elem === e && null !== t[n].elem) return t[n].animation;
                n += 1
              }
              var a = new AnimationItem;
              return h(a, e), a.setData(e, r), a
            }

            function u() {
              n += 1, f()
            }

            function c() {
              n -= 1
            }

            function h(e, r) {
              e.addEventListener("destroy", o), e.addEventListener("_active", u), e.addEventListener("_idle", c), t.push({
                elem: r,
                animation: e
              }), i += 1
            }

            function p(e) {
              var o, l = e - r;
              for (o = 0; o < i; o += 1) t[o].animation.advanceTime(l);
              r = e, n && !s ? window.requestAnimationFrame(p) : a = !0
            }

            function d(e) {
              r = e, window.requestAnimationFrame(p)
            }

            function f() {
              !s && n && a && (window.requestAnimationFrame(d), a = !1)
            }
            return e.registerAnimation = l, e.loadAnimation = function(e) {
              var t = new AnimationItem;
              return h(t, null), t.setParams(e), t
            }, e.setSpeed = function(e, r) {
              var n;
              for (n = 0; n < i; n += 1) t[n].animation.setSpeed(e, r)
            }, e.setDirection = function(e, r) {
              var n;
              for (n = 0; n < i; n += 1) t[n].animation.setDirection(e, r)
            }, e.play = function(e) {
              var r;
              for (r = 0; r < i; r += 1) t[r].animation.play(e)
            }, e.pause = function(e) {
              var r;
              for (r = 0; r < i; r += 1) t[r].animation.pause(e)
            }, e.stop = function(e) {
              var r;
              for (r = 0; r < i; r += 1) t[r].animation.stop(e)
            }, e.togglePause = function(e) {
              var r;
              for (r = 0; r < i; r += 1) t[r].animation.togglePause(e)
            }, e.searchAnimations = function(e, t, r) {
              var i, n = [].concat([].slice.call(document.getElementsByClassName("lottie")), [].slice.call(document.getElementsByClassName("bodymovin"))),
                a = n.length;
              for (i = 0; i < a; i += 1) r && n[i].setAttribute("data-bm-type", r), l(n[i], e);
              if (t && 0 === a) {
                r || (r = "svg");
                var s = document.getElementsByTagName("body")[0];
                s.innerText = "";
                var o = createTag("div");
                o.style.width = "100%", o.style.height = "100%", o.setAttribute("data-bm-type", r), s.appendChild(o), l(o, e)
              }
            }, e.resize = function() {
              var e;
              for (e = 0; e < i; e += 1) t[e].animation.resize()
            }, e.goToAndStop = function(e, r, n) {
              var a;
              for (a = 0; a < i; a += 1) t[a].animation.goToAndStop(e, r, n)
            }, e.destroy = function(e) {
              var r;
              for (r = i - 1; r >= 0; r -= 1) t[r].animation.destroy(e)
            }, e.freeze = function() {
              s = !0
            }, e.unfreeze = function() {
              s = !1, f()
            }, e.setVolume = function(e, r) {
              var n;
              for (n = 0; n < i; n += 1) t[n].animation.setVolume(e, r)
            }, e.mute = function(e) {
              var r;
              for (r = 0; r < i; r += 1) t[r].animation.mute(e)
            }, e.unmute = function(e) {
              var r;
              for (r = 0; r < i; r += 1) t[r].animation.unmute(e)
            }, e.getRegisteredAnimations = function() {
              var e, r = t.length,
                i = [];
              for (e = 0; e < r; e += 1) i.push(t[e].animation);
              return i
            }, e
          }(),
          BezierFactory = function() {
            var e = {
                getBezierEasing: function(e, r, i, n, a) {
                  var s = a || ("bez_" + e + "_" + r + "_" + i + "_" + n).replace(/\./g, "p");
                  if (t[s]) return t[s];
                  var o = new c([e, r, i, n]);
                  return t[s] = o, o
                }
              },
              t = {},
              r = 11,
              i = 1 / (r - 1),
              n = "function" == typeof Float32Array;

            function a(e, t) {
              return 1 - 3 * t + 3 * e
            }

            function s(e, t) {
              return 3 * t - 6 * e
            }

            function o(e) {
              return 3 * e
            }

            function l(e, t, r) {
              return ((a(t, r) * e + s(t, r)) * e + o(t)) * e
            }

            function u(e, t, r) {
              return 3 * a(t, r) * e * e + 2 * s(t, r) * e + o(t)
            }

            function c(e) {
              this._p = e, this._mSampleValues = n ? new Float32Array(r) : new Array(r), this._precomputed = !1, this.get = this.get.bind(this)
            }
            return c.prototype = {
              get: function(e) {
                var t = this._p[0],
                  r = this._p[1],
                  i = this._p[2],
                  n = this._p[3];
                return this._precomputed || this._precompute(), t === r && i === n ? e : 0 === e ? 0 : 1 === e ? 1 : l(this._getTForX(e), r, n)
              },
              _precompute: function() {
                var e = this._p[0],
                  t = this._p[1],
                  r = this._p[2],
                  i = this._p[3];
                this._precomputed = !0, e === t && r === i || this._calcSampleValues()
              },
              _calcSampleValues: function() {
                for (var e = this._p[0], t = this._p[2], n = 0; n < r; ++n) this._mSampleValues[n] = l(n * i, e, t)
              },
              _getTForX: function(e) {
                for (var t = this._p[0], n = this._p[2], a = this._mSampleValues, s = 0, o = 1, c = r - 1; o !== c && a[o] <= e; ++o) s += i;
                var h = s + (e - a[--o]) / (a[o + 1] - a[o]) * i,
                  p = u(h, t, n);
                return p >= .001 ? function(e, t, r, i) {
                  for (var n = 0; n < 4; ++n) {
                    var a = u(t, r, i);
                    if (0 === a) return t;
                    t -= (l(t, r, i) - e) / a
                  }
                  return t
                }(e, h, t, n) : 0 === p ? h : function(e, t, r, i, n) {
                  var a, s, o = 0;
                  do {
                    (a = l(s = t + (r - t) / 2, i, n) - e) > 0 ? r = s : t = s
                  } while (Math.abs(a) > 1e-7 && ++o < 10);
                  return s
                }(e, s, s + i, t, n)
              }
            }, e
          }(),
          pooling = {
            double: function(e) {
              return e.concat(createSizedArray(e.length))
            }
          },
          poolFactory = function(e, t, r) {
            var i = 0,
              n = e,
              a = createSizedArray(n);
            return {
              newElement: function() {
                return i ? a[i -= 1] : t()
              },
              release: function(e) {
                i === n && (a = pooling.double(a), n *= 2), r && r(e), a[i] = e, i += 1
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
          }), (function(e) {
            var t, r = e.lengths.length;
            for (t = 0; t < r; t += 1) bezierLengthPool.release(e.lengths[t]);
            e.lengths.length = 0
          }));

        function bezFunction() {
          var e = Math;

          function t(e, t, r, i, n, a) {
            var s = e * i + t * n + r * a - n * i - a * e - r * t;
            return s > -.001 && s < .001
          }
          var r = function(e, t, r, i) {
            var n, a, s, o, l, u, c = getDefaultCurveSegments(),
              h = 0,
              p = [],
              d = [],
              f = bezierLengthPool.newElement();
            for (s = r.length, n = 0; n < c; n += 1) {
              for (l = n / (c - 1), u = 0, a = 0; a < s; a += 1) o = bmPow(1 - l, 3) * e[a] + 3 * bmPow(1 - l, 2) * l * r[a] + 3 * (1 - l) * bmPow(l, 2) * i[a] + bmPow(l, 3) * t[a], p[a] = o, null !== d[a] && (u += bmPow(p[a] - d[a], 2)), d[a] = p[a];
              u && (h += u = bmSqrt(u)), f.percents[n] = l, f.lengths[n] = h
            }
            return f.addedLength = h, f
          };

          function i(e) {
            this.segmentLength = 0, this.points = new Array(e)
          }

          function n(e, t) {
            this.partialLength = e, this.point = t
          }
          var a, s = (a = {}, function(e, r, s, o) {
            var l = (e[0] + "_" + e[1] + "_" + r[0] + "_" + r[1] + "_" + s[0] + "_" + s[1] + "_" + o[0] + "_" + o[1]).replace(/\./g, "p");
            if (!a[l]) {
              var u, c, h, p, d, f, m, v = getDefaultCurveSegments(),
                g = 0,
                y = null;
              2 === e.length && (e[0] !== r[0] || e[1] !== r[1]) && t(e[0], e[1], r[0], r[1], e[0] + s[0], e[1] + s[1]) && t(e[0], e[1], r[0], r[1], r[0] + o[0], r[1] + o[1]) && (v = 2);
              var b = new i(v);
              for (h = s.length, u = 0; u < v; u += 1) {
                for (m = createSizedArray(h), d = u / (v - 1), f = 0, c = 0; c < h; c += 1) p = bmPow(1 - d, 3) * e[c] + 3 * bmPow(1 - d, 2) * d * (e[c] + s[c]) + 3 * (1 - d) * bmPow(d, 2) * (r[c] + o[c]) + bmPow(d, 3) * r[c], m[c] = p, null !== y && (f += bmPow(m[c] - y[c], 2));
                g += f = bmSqrt(f), b.points[u] = new n(f, m), y = m
              }
              b.segmentLength = g, a[l] = b
            }
            return a[l]
          });

          function o(e, t) {
            var r = t.percents,
              i = t.lengths,
              n = r.length,
              a = bmFloor((n - 1) * e),
              s = e * t.addedLength,
              o = 0;
            if (a === n - 1 || 0 === a || s === i[a]) return r[a];
            for (var l = i[a] > s ? -1 : 1, u = !0; u;)
              if (i[a] <= s && i[a + 1] > s ? (o = (s - i[a]) / (i[a + 1] - i[a]), u = !1) : a += l, a < 0 || a >= n - 1) {
                if (a === n - 1) return r[a];
                u = !1
              } return r[a] + (r[a + 1] - r[a]) * o
          }
          var l = createTypedArray("float32", 8);
          return {
            getSegmentsLength: function(e) {
              var t, i = segmentsLengthPool.newElement(),
                n = e.c,
                a = e.v,
                s = e.o,
                o = e.i,
                l = e._length,
                u = i.lengths,
                c = 0;
              for (t = 0; t < l - 1; t += 1) u[t] = r(a[t], a[t + 1], s[t], o[t + 1]), c += u[t].addedLength;
              return n && l && (u[t] = r(a[t], a[0], s[t], o[0]), c += u[t].addedLength), i.totalLength = c, i
            },
            getNewSegment: function(t, r, i, n, a, s, u) {
              a < 0 ? a = 0 : a > 1 && (a = 1);
              var c, h = o(a, u),
                p = o(s = s > 1 ? 1 : s, u),
                d = t.length,
                f = 1 - h,
                m = 1 - p,
                v = f * f * f,
                g = h * f * f * 3,
                y = h * h * f * 3,
                b = h * h * h,
                S = f * f * m,
                x = h * f * m + f * h * m + f * f * p,
                E = h * h * m + f * h * p + h * f * p,
                P = h * h * p,
                w = f * m * m,
                C = h * m * m + f * p * m + f * m * p,
                T = h * p * m + f * p * p + h * m * p,
                M = h * p * p,
                _ = m * m * m,
                A = p * m * m + m * p * m + m * m * p,
                k = p * p * m + m * p * p + p * m * p,
                I = p * p * p;
              for (c = 0; c < d; c += 1) l[4 * c] = e.round(1e3 * (v * t[c] + g * i[c] + y * n[c] + b * r[c])) / 1e3, l[4 * c + 1] = e.round(1e3 * (S * t[c] + x * i[c] + E * n[c] + P * r[c])) / 1e3, l[4 * c + 2] = e.round(1e3 * (w * t[c] + C * i[c] + T * n[c] + M * r[c])) / 1e3, l[4 * c + 3] = e.round(1e3 * (_ * t[c] + A * i[c] + k * n[c] + I * r[c])) / 1e3;
              return l
            },
            getPointInSegment: function(t, r, i, n, a, s) {
              var l = o(a, s),
                u = 1 - l;
              return [e.round(1e3 * (u * u * u * t[0] + (l * u * u + u * l * u + u * u * l) * i[0] + (l * l * u + u * l * l + l * u * l) * n[0] + l * l * l * r[0])) / 1e3, e.round(1e3 * (u * u * u * t[1] + (l * u * u + u * l * u + u * u * l) * i[1] + (l * l * u + u * l * l + l * u * l) * n[1] + l * l * l * r[1])) / 1e3]
            },
            buildBezierData: s,
            pointOnLine2D: t,
            pointOnLine3D: function(r, i, n, a, s, o, l, u, c) {
              if (0 === n && 0 === o && 0 === c) return t(r, i, a, s, l, u);
              var h, p = e.sqrt(e.pow(a - r, 2) + e.pow(s - i, 2) + e.pow(o - n, 2)),
                d = e.sqrt(e.pow(l - r, 2) + e.pow(u - i, 2) + e.pow(c - n, 2)),
                f = e.sqrt(e.pow(l - a, 2) + e.pow(u - s, 2) + e.pow(c - o, 2));
              return (h = p > d ? p > f ? p - d - f : f - d - p : f > d ? f - d - p : d - p - f) > -1e-4 && h < 1e-4
            }
          }
        }
        var bez = bezFunction(),
          initFrame = initialDefaultFrame,
          mathAbs = Math.abs;

        function interpolateValue(e, t) {
          var r, i = this.offsetTime;
          "multidimensional" === this.propType && (r = createTypedArray("float32", this.pv.length));
          for (var n, a, s, o, l, u, c, h, p, d = t.lastIndex, f = d, m = this.keyframes.length - 1, v = !0; v;) {
            if (n = this.keyframes[f], a = this.keyframes[f + 1], f === m - 1 && e >= a.t - i) {
              n.h && (n = a), d = 0;
              break
            }
            if (a.t - i > e) {
              d = f;
              break
            }
            f < m - 1 ? f += 1 : (d = 0, v = !1)
          }
          s = this.keyframesMetadata[f] || {};
          var g, y = a.t - i,
            b = n.t - i;
          if (n.to) {
            s.bezierData || (s.bezierData = bez.buildBezierData(n.s, a.s || n.e, n.to, n.ti));
            var S = s.bezierData;
            if (e >= y || e < b) {
              var x = e >= y ? S.points.length - 1 : 0;
              for (l = S.points[x].point.length, o = 0; o < l; o += 1) r[o] = S.points[x].point[o]
            } else {
              s.__fnct ? p = s.__fnct : (p = BezierFactory.getBezierEasing(n.o.x, n.o.y, n.i.x, n.i.y, n.n).get, s.__fnct = p), u = p((e - b) / (y - b));
              var E, P = S.segmentLength * u,
                w = t.lastFrame < e && t._lastKeyframeIndex === f ? t._lastAddedLength : 0;
              for (h = t.lastFrame < e && t._lastKeyframeIndex === f ? t._lastPoint : 0, v = !0, c = S.points.length; v;) {
                if (w += S.points[h].partialLength, 0 === P || 0 === u || h === S.points.length - 1) {
                  for (l = S.points[h].point.length, o = 0; o < l; o += 1) r[o] = S.points[h].point[o];
                  break
                }
                if (P >= w && P < w + S.points[h + 1].partialLength) {
                  for (E = (P - w) / S.points[h + 1].partialLength, l = S.points[h].point.length, o = 0; o < l; o += 1) r[o] = S.points[h].point[o] + (S.points[h + 1].point[o] - S.points[h].point[o]) * E;
                  break
                }
                h < c - 1 ? h += 1 : v = !1
              }
              t._lastPoint = h, t._lastAddedLength = w - S.points[h].partialLength, t._lastKeyframeIndex = f
            }
          } else {
            var C, T, M, _, A;
            if (m = n.s.length, g = a.s || n.e, this.sh && 1 !== n.h) e >= y ? (r[0] = g[0], r[1] = g[1], r[2] = g[2]) : e <= b ? (r[0] = n.s[0], r[1] = n.s[1], r[2] = n.s[2]) : quaternionToEuler(r, slerp(createQuaternion(n.s), createQuaternion(g), (e - b) / (y - b)));
            else
              for (f = 0; f < m; f += 1) 1 !== n.h && (e >= y ? u = 1 : e < b ? u = 0 : (n.o.x.constructor === Array ? (s.__fnct || (s.__fnct = []), s.__fnct[f] ? p = s.__fnct[f] : (C = void 0 === n.o.x[f] ? n.o.x[0] : n.o.x[f], T = void 0 === n.o.y[f] ? n.o.y[0] : n.o.y[f], M = void 0 === n.i.x[f] ? n.i.x[0] : n.i.x[f], _ = void 0 === n.i.y[f] ? n.i.y[0] : n.i.y[f], p = BezierFactory.getBezierEasing(C, T, M, _).get, s.__fnct[f] = p)) : s.__fnct ? p = s.__fnct : (C = n.o.x, T = n.o.y, M = n.i.x, _ = n.i.y, p = BezierFactory.getBezierEasing(C, T, M, _).get, n.keyframeMetadata = p), u = p((e - b) / (y - b)))), g = a.s || n.e, A = 1 === n.h ? n.s[f] : n.s[f] + (g[f] - n.s[f]) * u, "multidimensional" === this.propType ? r[f] = A : r = A
          }
          return t.lastIndex = d, r
        }

        function slerp(e, t, r) {
          var i, n, a, s, o, l = [],
            u = e[0],
            c = e[1],
            h = e[2],
            p = e[3],
            d = t[0],
            f = t[1],
            m = t[2],
            v = t[3];
          return (n = u * d + c * f + h * m + p * v) < 0 && (n = -n, d = -d, f = -f, m = -m, v = -v), 1 - n > 1e-6 ? (i = Math.acos(n), a = Math.sin(i), s = Math.sin((1 - r) * i) / a, o = Math.sin(r * i) / a) : (s = 1 - r, o = r), l[0] = s * u + o * d, l[1] = s * c + o * f, l[2] = s * h + o * m, l[3] = s * p + o * v, l
        }

        function quaternionToEuler(e, t) {
          var r = t[0],
            i = t[1],
            n = t[2],
            a = t[3],
            s = Math.atan2(2 * i * a - 2 * r * n, 1 - 2 * i * i - 2 * n * n),
            o = Math.asin(2 * r * i + 2 * n * a),
            l = Math.atan2(2 * r * a - 2 * i * n, 1 - 2 * r * r - 2 * n * n);
          e[0] = s / degToRads, e[1] = o / degToRads, e[2] = l / degToRads
        }

        function createQuaternion(e) {
          var t = e[0] * degToRads,
            r = e[1] * degToRads,
            i = e[2] * degToRads,
            n = Math.cos(t / 2),
            a = Math.cos(r / 2),
            s = Math.cos(i / 2),
            o = Math.sin(t / 2),
            l = Math.sin(r / 2),
            u = Math.sin(i / 2);
          return [o * l * s + n * a * u, o * a * s + n * l * u, n * l * s - o * a * u, n * a * s - o * l * u]
        }

        function getValueAtCurrentTime() {
          var e = this.comp.renderedFrame - this.offsetTime,
            t = this.keyframes[0].t - this.offsetTime,
            r = this.keyframes[this.keyframes.length - 1].t - this.offsetTime;
          if (!(e === this._caching.lastFrame || this._caching.lastFrame !== initFrame && (this._caching.lastFrame >= r && e >= r || this._caching.lastFrame < t && e < t))) {
            this._caching.lastFrame >= e && (this._caching._lastKeyframeIndex = -1, this._caching.lastIndex = 0);
            var i = this.interpolateValue(e, this._caching);
            this.pv = i
          }
          return this._caching.lastFrame = e, this.pv
        }

        function setVValue(e) {
          var t;
          if ("unidimensional" === this.propType) t = e * this.mult, mathAbs(this.v - t) > 1e-5 && (this.v = t, this._mdf = !0);
          else
            for (var r = 0, i = this.v.length; r < i;) t = e[r] * this.mult, mathAbs(this.v[r] - t) > 1e-5 && (this.v[r] = t, this._mdf = !0), r += 1
        }

        function processEffectsSequence() {
          if (this.elem.globalData.frameId !== this.frameId && this.effectsSequence.length)
            if (this.lock) this.setVValue(this.pv);
            else {
              var e;
              this.lock = !0, this._mdf = this._isFirstFrame;
              var t = this.effectsSequence.length,
                r = this.kf ? this.pv : this.data.k;
              for (e = 0; e < t; e += 1) r = this.effectsSequence[e](r);
              this.setVValue(r), this._isFirstFrame = !1, this.lock = !1, this.frameId = this.elem.globalData.frameId
            }
        }

        function addEffect(e) {
          this.effectsSequence.push(e), this.container.addDynamicProperty(this)
        }

        function ValueProperty(e, t, r, i) {
          this.propType = "unidimensional", this.mult = r || 1, this.data = t, this.v = r ? t.k * r : t.k, this.pv = t.k, this._mdf = !1, this.elem = e, this.container = i, this.comp = e.comp, this.k = !1, this.kf = !1, this.vel = 0, this.effectsSequence = [], this._isFirstFrame = !0, this.getValue = processEffectsSequence, this.setVValue = setVValue, this.addEffect = addEffect
        }

        function MultiDimensionalProperty(e, t, r, i) {
          var n;
          this.propType = "multidimensional", this.mult = r || 1, this.data = t, this._mdf = !1, this.elem = e, this.container = i, this.comp = e.comp, this.k = !1, this.kf = !1, this.frameId = -1;
          var a = t.k.length;
          for (this.v = createTypedArray("float32", a), this.pv = createTypedArray("float32", a), this.vel = createTypedArray("float32", a), n = 0; n < a; n += 1) this.v[n] = t.k[n] * this.mult, this.pv[n] = t.k[n];
          this._isFirstFrame = !0, this.effectsSequence = [], this.getValue = processEffectsSequence, this.setVValue = setVValue, this.addEffect = addEffect
        }

        function KeyframedValueProperty(e, t, r, i) {
          this.propType = "unidimensional", this.keyframes = t.k, this.keyframesMetadata = [], this.offsetTime = e.data.st, this.frameId = -1, this._caching = {
            lastFrame: initFrame,
            lastIndex: 0,
            value: 0,
            _lastKeyframeIndex: -1
          }, this.k = !0, this.kf = !0, this.data = t, this.mult = r || 1, this.elem = e, this.container = i, this.comp = e.comp, this.v = initFrame, this.pv = initFrame, this._isFirstFrame = !0, this.getValue = processEffectsSequence, this.setVValue = setVValue, this.interpolateValue = interpolateValue, this.effectsSequence = [getValueAtCurrentTime.bind(this)], this.addEffect = addEffect
        }

        function KeyframedMultidimensionalProperty(e, t, r, i) {
          var n;
          this.propType = "multidimensional";
          var a, s, o, l, u = t.k.length;
          for (n = 0; n < u - 1; n += 1) t.k[n].to && t.k[n].s && t.k[n + 1] && t.k[n + 1].s && (a = t.k[n].s, s = t.k[n + 1].s, o = t.k[n].to, l = t.k[n].ti, (2 === a.length && (a[0] !== s[0] || a[1] !== s[1]) && bez.pointOnLine2D(a[0], a[1], s[0], s[1], a[0] + o[0], a[1] + o[1]) && bez.pointOnLine2D(a[0], a[1], s[0], s[1], s[0] + l[0], s[1] + l[1]) || 3 === a.length && (a[0] !== s[0] || a[1] !== s[1] || a[2] !== s[2]) && bez.pointOnLine3D(a[0], a[1], a[2], s[0], s[1], s[2], a[0] + o[0], a[1] + o[1], a[2] + o[2]) && bez.pointOnLine3D(a[0], a[1], a[2], s[0], s[1], s[2], s[0] + l[0], s[1] + l[1], s[2] + l[2])) && (t.k[n].to = null, t.k[n].ti = null), a[0] === s[0] && a[1] === s[1] && 0 === o[0] && 0 === o[1] && 0 === l[0] && 0 === l[1] && (2 === a.length || a[2] === s[2] && 0 === o[2] && 0 === l[2]) && (t.k[n].to = null, t.k[n].ti = null));
          this.effectsSequence = [getValueAtCurrentTime.bind(this)], this.data = t, this.keyframes = t.k, this.keyframesMetadata = [], this.offsetTime = e.data.st, this.k = !0, this.kf = !0, this._isFirstFrame = !0, this.mult = r || 1, this.elem = e, this.container = i, this.comp = e.comp, this.getValue = processEffectsSequence, this.setVValue = setVValue, this.interpolateValue = interpolateValue, this.frameId = -1;
          var c = t.k[0].s.length;
          for (this.v = createTypedArray("float32", c), this.pv = createTypedArray("float32", c), n = 0; n < c; n += 1) this.v[n] = initFrame, this.pv[n] = initFrame;
          this._caching = {
            lastFrame: initFrame,
            lastIndex: 0,
            value: createTypedArray("float32", c)
          }, this.addEffect = addEffect
        }
        var PropertyFactory = {
          getProp: function(e, t, r, i, n) {
            var a;
            if (t.sid && (t = e.globalData.slotManager.getProp(t)), t.k.length)
              if ("number" == typeof t.k[0]) a = new MultiDimensionalProperty(e, t, i, n);
              else switch (r) {
                case 0:
                  a = new KeyframedValueProperty(e, t, i, n);
                  break;
                case 1:
                  a = new KeyframedMultidimensionalProperty(e, t, i, n)
              } else a = new ValueProperty(e, t, i, n);
            return a.effectsSequence.length && n.addDynamicProperty(a), a
          }
        };

        function DynamicPropertyContainer() {}
        DynamicPropertyContainer.prototype = {
          addDynamicProperty: function(e) {
            -1 === this.dynamicProperties.indexOf(e) && (this.dynamicProperties.push(e), this.container.addDynamicProperty(this), this._isAnimated = !0)
          },
          iterateDynamicProperties: function() {
            var e;
            this._mdf = !1;
            var t = this.dynamicProperties.length;
            for (e = 0; e < t; e += 1) this.dynamicProperties[e].getValue(), this.dynamicProperties[e]._mdf && (this._mdf = !0)
          },
          initDynamicPropertyContainer: function(e) {
            this.container = e, this.dynamicProperties = [], this._mdf = !1, this._isAnimated = !1
          }
        };
        var pointPool = poolFactory(8, (function() {
          return createTypedArray("float32", 2)
        }));

        function ShapePath() {
          this.c = !1, this._length = 0, this._maxLength = 8, this.v = createSizedArray(this._maxLength), this.o = createSizedArray(this._maxLength), this.i = createSizedArray(this._maxLength)
        }
        ShapePath.prototype.setPathData = function(e, t) {
          this.c = e, this.setLength(t);
          for (var r = 0; r < t;) this.v[r] = pointPool.newElement(), this.o[r] = pointPool.newElement(), this.i[r] = pointPool.newElement(), r += 1
        }, ShapePath.prototype.setLength = function(e) {
          for (; this._maxLength < e;) this.doubleArrayLength();
          this._length = e
        }, ShapePath.prototype.doubleArrayLength = function() {
          this.v = this.v.concat(createSizedArray(this._maxLength)), this.i = this.i.concat(createSizedArray(this._maxLength)), this.o = this.o.concat(createSizedArray(this._maxLength)), this._maxLength *= 2
        }, ShapePath.prototype.setXYAt = function(e, t, r, i, n) {
          var a;
          switch (this._length = Math.max(this._length, i + 1), this._length >= this._maxLength && this.doubleArrayLength(), r) {
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
          }(!a[i] || a[i] && !n) && (a[i] = pointPool.newElement()), a[i][0] = e, a[i][1] = t
        }, ShapePath.prototype.setTripleAt = function(e, t, r, i, n, a, s, o) {
          this.setXYAt(e, t, "v", s, o), this.setXYAt(r, i, "o", s, o), this.setXYAt(n, a, "i", s, o)
        }, ShapePath.prototype.reverse = function() {
          var e = new ShapePath;
          e.setPathData(this.c, this._length);
          var t = this.v,
            r = this.o,
            i = this.i,
            n = 0;
          this.c && (e.setTripleAt(t[0][0], t[0][1], i[0][0], i[0][1], r[0][0], r[0][1], 0, !1), n = 1);
          var a, s = this._length - 1,
            o = this._length;
          for (a = n; a < o; a += 1) e.setTripleAt(t[s][0], t[s][1], i[s][0], i[s][1], r[s][0], r[s][1], a, !1), s -= 1;
          return e
        }, ShapePath.prototype.length = function() {
          return this._length
        };
        var shapePool = (factory = poolFactory(4, (function() {
            return new ShapePath
          }), (function(e) {
            var t, r = e._length;
            for (t = 0; t < r; t += 1) pointPool.release(e.v[t]), pointPool.release(e.i[t]), pointPool.release(e.o[t]), e.v[t] = null, e.i[t] = null, e.o[t] = null;
            e._length = 0, e.c = !1
          })), factory.clone = function(e) {
            var t, r = factory.newElement(),
              i = void 0 === e._length ? e.v.length : e._length;
            for (r.setLength(i), r.c = e.c, t = 0; t < i; t += 1) r.setTripleAt(e.v[t][0], e.v[t][1], e.o[t][0], e.o[t][1], e.i[t][0], e.i[t][1], t);
            return r
          }, factory),
          factory;

        function ShapeCollection() {
          this._length = 0, this._maxLength = 4, this.shapes = createSizedArray(this._maxLength)
        }
        ShapeCollection.prototype.addShape = function(e) {
          this._length === this._maxLength && (this.shapes = this.shapes.concat(createSizedArray(this._maxLength)), this._maxLength *= 2), this.shapes[this._length] = e, this._length += 1
        }, ShapeCollection.prototype.releaseShapes = function() {
          var e;
          for (e = 0; e < this._length; e += 1) shapePool.release(this.shapes[e]);
          this._length = 0
        };
        var shapeCollectionPool = (ob = {
            newShapeCollection: function() {
              return _length ? pool[_length -= 1] : new ShapeCollection
            },
            release: function(e) {
              var t, r = e._length;
              for (t = 0; t < r; t += 1) shapePool.release(e.shapes[t]);
              e._length = 0, _length === _maxLength && (pool = pooling.double(pool), _maxLength *= 2), pool[_length] = e, _length += 1
            }
          }, _length = 0, _maxLength = 4, pool = createSizedArray(_maxLength), ob),
          ob, _length, _maxLength, pool, ShapePropertyFactory = function() {
            var e = -999999;

            function t(e, t, r) {
              var i, n, a, s, o, l, u, c, h, p = r.lastIndex,
                d = this.keyframes;
              if (e < d[0].t - this.offsetTime) i = d[0].s[0], a = !0, p = 0;
              else if (e >= d[d.length - 1].t - this.offsetTime) i = d[d.length - 1].s ? d[d.length - 1].s[0] : d[d.length - 2].e[0], a = !0;
              else {
                for (var f, m, v, g = p, y = d.length - 1, b = !0; b && (f = d[g], !((m = d[g + 1]).t - this.offsetTime > e));) g < y - 1 ? g += 1 : b = !1;
                if (v = this.keyframesMetadata[g] || {}, p = g, !(a = 1 === f.h)) {
                  if (e >= m.t - this.offsetTime) c = 1;
                  else if (e < f.t - this.offsetTime) c = 0;
                  else {
                    var S;
                    v.__fnct ? S = v.__fnct : (S = BezierFactory.getBezierEasing(f.o.x, f.o.y, f.i.x, f.i.y).get, v.__fnct = S), c = S((e - (f.t - this.offsetTime)) / (m.t - this.offsetTime - (f.t - this.offsetTime)))
                  }
                  n = m.s ? m.s[0] : f.e[0]
                }
                i = f.s[0]
              }
              for (l = t._length, u = i.i[0].length, r.lastIndex = p, s = 0; s < l; s += 1)
                for (o = 0; o < u; o += 1) h = a ? i.i[s][o] : i.i[s][o] + (n.i[s][o] - i.i[s][o]) * c, t.i[s][o] = h, h = a ? i.o[s][o] : i.o[s][o] + (n.o[s][o] - i.o[s][o]) * c, t.o[s][o] = h, h = a ? i.v[s][o] : i.v[s][o] + (n.v[s][o] - i.v[s][o]) * c, t.v[s][o] = h
            }

            function r() {
              var t = this.comp.renderedFrame - this.offsetTime,
                r = this.keyframes[0].t - this.offsetTime,
                i = this.keyframes[this.keyframes.length - 1].t - this.offsetTime,
                n = this._caching.lastFrame;
              return n !== e && (n < r && t < r || n > i && t > i) || (this._caching.lastIndex = n < t ? this._caching.lastIndex : 0, this.interpolateShape(t, this.pv, this._caching)), this._caching.lastFrame = t, this.pv
            }

            function i() {
              this.paths = this.localShapeCollection
            }

            function n(e) {
              (function(e, t) {
                if (e._length !== t._length || e.c !== t.c) return !1;
                var r, i = e._length;
                for (r = 0; r < i; r += 1)
                  if (e.v[r][0] !== t.v[r][0] || e.v[r][1] !== t.v[r][1] || e.o[r][0] !== t.o[r][0] || e.o[r][1] !== t.o[r][1] || e.i[r][0] !== t.i[r][0] || e.i[r][1] !== t.i[r][1]) return !1;
                return !0
              })(this.v, e) || (this.v = shapePool.clone(e), this.localShapeCollection.releaseShapes(), this.localShapeCollection.addShape(this.v), this._mdf = !0, this.paths = this.localShapeCollection)
            }

            function a() {
              if (this.elem.globalData.frameId !== this.frameId)
                if (this.effectsSequence.length)
                  if (this.lock) this.setVValue(this.pv);
                  else {
                    var e, t;
                    this.lock = !0, this._mdf = !1, e = this.kf ? this.pv : this.data.ks ? this.data.ks.k : this.data.pt.k;
                    var r = this.effectsSequence.length;
                    for (t = 0; t < r; t += 1) e = this.effectsSequence[t](e);
                    this.setVValue(e), this.lock = !1, this.frameId = this.elem.globalData.frameId
                  }
              else this._mdf = !1
            }

            function s(e, t, r) {
              this.propType = "shape", this.comp = e.comp, this.container = e, this.elem = e, this.data = t, this.k = !1, this.kf = !1, this._mdf = !1;
              var n = 3 === r ? t.pt.k : t.ks.k;
              this.v = shapePool.clone(n), this.pv = shapePool.clone(this.v), this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.paths = this.localShapeCollection, this.paths.addShape(this.v), this.reset = i, this.effectsSequence = []
            }

            function o(e) {
              this.effectsSequence.push(e), this.container.addDynamicProperty(this)
            }

            function l(t, n, a) {
              this.propType = "shape", this.comp = t.comp, this.elem = t, this.container = t, this.offsetTime = t.data.st, this.keyframes = 3 === a ? n.pt.k : n.ks.k, this.keyframesMetadata = [], this.k = !0, this.kf = !0;
              var s = this.keyframes[0].s[0].i.length;
              this.v = shapePool.newElement(), this.v.setPathData(this.keyframes[0].s[0].c, s), this.pv = shapePool.clone(this.v), this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.paths = this.localShapeCollection, this.paths.addShape(this.v), this.lastFrame = e, this.reset = i, this._caching = {
                lastFrame: e,
                lastIndex: 0
              }, this.effectsSequence = [r.bind(this)]
            }
            s.prototype.interpolateShape = t, s.prototype.getValue = a, s.prototype.setVValue = n, s.prototype.addEffect = o, l.prototype.getValue = a, l.prototype.interpolateShape = t, l.prototype.setVValue = n, l.prototype.addEffect = o;
            var u = function() {
                var e = roundCorner;

                function t(e, t) {
                  this.v = shapePool.newElement(), this.v.setPathData(!0, 4), this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.paths = this.localShapeCollection, this.localShapeCollection.addShape(this.v), this.d = t.d, this.elem = e, this.comp = e.comp, this.frameId = -1, this.initDynamicPropertyContainer(e), this.p = PropertyFactory.getProp(e, t.p, 1, 0, this), this.s = PropertyFactory.getProp(e, t.s, 1, 0, this), this.dynamicProperties.length ? this.k = !0 : (this.k = !1, this.convertEllToPath())
                }
                return t.prototype = {
                  reset: i,
                  getValue: function() {
                    this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertEllToPath())
                  },
                  convertEllToPath: function() {
                    var t = this.p.v[0],
                      r = this.p.v[1],
                      i = this.s.v[0] / 2,
                      n = this.s.v[1] / 2,
                      a = 3 !== this.d,
                      s = this.v;
                    s.v[0][0] = t, s.v[0][1] = r - n, s.v[1][0] = a ? t + i : t - i, s.v[1][1] = r, s.v[2][0] = t, s.v[2][1] = r + n, s.v[3][0] = a ? t - i : t + i, s.v[3][1] = r, s.i[0][0] = a ? t - i * e : t + i * e, s.i[0][1] = r - n, s.i[1][0] = a ? t + i : t - i, s.i[1][1] = r - n * e, s.i[2][0] = a ? t + i * e : t - i * e, s.i[2][1] = r + n, s.i[3][0] = a ? t - i : t + i, s.i[3][1] = r + n * e, s.o[0][0] = a ? t + i * e : t - i * e, s.o[0][1] = r - n, s.o[1][0] = a ? t + i : t - i, s.o[1][1] = r + n * e, s.o[2][0] = a ? t - i * e : t + i * e, s.o[2][1] = r + n, s.o[3][0] = a ? t - i : t + i, s.o[3][1] = r - n * e
                  }
                }, extendPrototype([DynamicPropertyContainer], t), t
              }(),
              c = function() {
                function e(e, t) {
                  this.v = shapePool.newElement(), this.v.setPathData(!0, 0), this.elem = e, this.comp = e.comp, this.data = t, this.frameId = -1, this.d = t.d, this.initDynamicPropertyContainer(e), 1 === t.sy ? (this.ir = PropertyFactory.getProp(e, t.ir, 0, 0, this), this.is = PropertyFactory.getProp(e, t.is, 0, .01, this), this.convertToPath = this.convertStarToPath) : this.convertToPath = this.convertPolygonToPath, this.pt = PropertyFactory.getProp(e, t.pt, 0, 0, this), this.p = PropertyFactory.getProp(e, t.p, 1, 0, this), this.r = PropertyFactory.getProp(e, t.r, 0, degToRads, this), this.or = PropertyFactory.getProp(e, t.or, 0, 0, this), this.os = PropertyFactory.getProp(e, t.os, 0, .01, this), this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.localShapeCollection.addShape(this.v), this.paths = this.localShapeCollection, this.dynamicProperties.length ? this.k = !0 : (this.k = !1, this.convertToPath())
                }
                return e.prototype = {
                  reset: i,
                  getValue: function() {
                    this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertToPath())
                  },
                  convertStarToPath: function() {
                    var e, t, r, i, n = 2 * Math.floor(this.pt.v),
                      a = 2 * Math.PI / n,
                      s = !0,
                      o = this.or.v,
                      l = this.ir.v,
                      u = this.os.v,
                      c = this.is.v,
                      h = 2 * Math.PI * o / (2 * n),
                      p = 2 * Math.PI * l / (2 * n),
                      d = -Math.PI / 2;
                    d += this.r.v;
                    var f = 3 === this.data.d ? -1 : 1;
                    for (this.v._length = 0, e = 0; e < n; e += 1) {
                      r = s ? u : c, i = s ? h : p;
                      var m = (t = s ? o : l) * Math.cos(d),
                        v = t * Math.sin(d),
                        g = 0 === m && 0 === v ? 0 : v / Math.sqrt(m * m + v * v),
                        y = 0 === m && 0 === v ? 0 : -m / Math.sqrt(m * m + v * v);
                      m += +this.p.v[0], v += +this.p.v[1], this.v.setTripleAt(m, v, m - g * i * r * f, v - y * i * r * f, m + g * i * r * f, v + y * i * r * f, e, !0), s = !s, d += a * f
                    }
                  },
                  convertPolygonToPath: function() {
                    var e, t = Math.floor(this.pt.v),
                      r = 2 * Math.PI / t,
                      i = this.or.v,
                      n = this.os.v,
                      a = 2 * Math.PI * i / (4 * t),
                      s = .5 * -Math.PI,
                      o = 3 === this.data.d ? -1 : 1;
                    for (s += this.r.v, this.v._length = 0, e = 0; e < t; e += 1) {
                      var l = i * Math.cos(s),
                        u = i * Math.sin(s),
                        c = 0 === l && 0 === u ? 0 : u / Math.sqrt(l * l + u * u),
                        h = 0 === l && 0 === u ? 0 : -l / Math.sqrt(l * l + u * u);
                      l += +this.p.v[0], u += +this.p.v[1], this.v.setTripleAt(l, u, l - c * a * n * o, u - h * a * n * o, l + c * a * n * o, u + h * a * n * o, e, !0), s += r * o
                    }
                    this.paths.length = 0, this.paths[0] = this.v
                  }
                }, extendPrototype([DynamicPropertyContainer], e), e
              }(),
              h = function() {
                function e(e, t) {
                  this.v = shapePool.newElement(), this.v.c = !0, this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.localShapeCollection.addShape(this.v), this.paths = this.localShapeCollection, this.elem = e, this.comp = e.comp, this.frameId = -1, this.d = t.d, this.initDynamicPropertyContainer(e), this.p = PropertyFactory.getProp(e, t.p, 1, 0, this), this.s = PropertyFactory.getProp(e, t.s, 1, 0, this), this.r = PropertyFactory.getProp(e, t.r, 0, 0, this), this.dynamicProperties.length ? this.k = !0 : (this.k = !1, this.convertRectToPath())
                }
                return e.prototype = {
                  convertRectToPath: function() {
                    var e = this.p.v[0],
                      t = this.p.v[1],
                      r = this.s.v[0] / 2,
                      i = this.s.v[1] / 2,
                      n = bmMin(r, i, this.r.v),
                      a = n * (1 - roundCorner);
                    this.v._length = 0, 2 === this.d || 1 === this.d ? (this.v.setTripleAt(e + r, t - i + n, e + r, t - i + n, e + r, t - i + a, 0, !0), this.v.setTripleAt(e + r, t + i - n, e + r, t + i - a, e + r, t + i - n, 1, !0), 0 !== n ? (this.v.setTripleAt(e + r - n, t + i, e + r - n, t + i, e + r - a, t + i, 2, !0), this.v.setTripleAt(e - r + n, t + i, e - r + a, t + i, e - r + n, t + i, 3, !0), this.v.setTripleAt(e - r, t + i - n, e - r, t + i - n, e - r, t + i - a, 4, !0), this.v.setTripleAt(e - r, t - i + n, e - r, t - i + a, e - r, t - i + n, 5, !0), this.v.setTripleAt(e - r + n, t - i, e - r + n, t - i, e - r + a, t - i, 6, !0), this.v.setTripleAt(e + r - n, t - i, e + r - a, t - i, e + r - n, t - i, 7, !0)) : (this.v.setTripleAt(e - r, t + i, e - r + a, t + i, e - r, t + i, 2), this.v.setTripleAt(e - r, t - i, e - r, t - i + a, e - r, t - i, 3))) : (this.v.setTripleAt(e + r, t - i + n, e + r, t - i + a, e + r, t - i + n, 0, !0), 0 !== n ? (this.v.setTripleAt(e + r - n, t - i, e + r - n, t - i, e + r - a, t - i, 1, !0), this.v.setTripleAt(e - r + n, t - i, e - r + a, t - i, e - r + n, t - i, 2, !0), this.v.setTripleAt(e - r, t - i + n, e - r, t - i + n, e - r, t - i + a, 3, !0), this.v.setTripleAt(e - r, t + i - n, e - r, t + i - a, e - r, t + i - n, 4, !0), this.v.setTripleAt(e - r + n, t + i, e - r + n, t + i, e - r + a, t + i, 5, !0), this.v.setTripleAt(e + r - n, t + i, e + r - a, t + i, e + r - n, t + i, 6, !0), this.v.setTripleAt(e + r, t + i - n, e + r, t + i - n, e + r, t + i - a, 7, !0)) : (this.v.setTripleAt(e - r, t - i, e - r + a, t - i, e - r, t - i, 1, !0), this.v.setTripleAt(e - r, t + i, e - r, t + i - a, e - r, t + i, 2, !0), this.v.setTripleAt(e + r, t + i, e + r - a, t + i, e + r, t + i, 3, !0)))
                  },
                  getValue: function() {
                    this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertRectToPath())
                  },
                  reset: i
                }, extendPrototype([DynamicPropertyContainer], e), e
              }();
            return {
              getShapeProp: function(e, t, r) {
                var i;
                return 3 === r || 4 === r ? i = (3 === r ? t.pt : t.ks).k.length ? new l(e, t, r) : new s(e, t, r) : 5 === r ? i = new h(e, t) : 6 === r ? i = new u(e, t) : 7 === r && (i = new c(e, t)), i.k && e.addDynamicProperty(i), i
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
            var e = Math.cos,
              t = Math.sin,
              r = Math.tan,
              i = Math.round;

            function n() {
              return this.props[0] = 1, this.props[1] = 0, this.props[2] = 0, this.props[3] = 0, this.props[4] = 0, this.props[5] = 1, this.props[6] = 0, this.props[7] = 0, this.props[8] = 0, this.props[9] = 0, this.props[10] = 1, this.props[11] = 0, this.props[12] = 0, this.props[13] = 0, this.props[14] = 0, this.props[15] = 1, this
            }

            function a(r) {
              if (0 === r) return this;
              var i = e(r),
                n = t(r);
              return this._t(i, -n, 0, 0, n, i, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
            }

            function s(r) {
              if (0 === r) return this;
              var i = e(r),
                n = t(r);
              return this._t(1, 0, 0, 0, 0, i, -n, 0, 0, n, i, 0, 0, 0, 0, 1)
            }

            function o(r) {
              if (0 === r) return this;
              var i = e(r),
                n = t(r);
              return this._t(i, 0, n, 0, 0, 1, 0, 0, -n, 0, i, 0, 0, 0, 0, 1)
            }

            function l(r) {
              if (0 === r) return this;
              var i = e(r),
                n = t(r);
              return this._t(i, -n, 0, 0, n, i, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
            }

            function u(e, t) {
              return this._t(1, t, e, 1, 0, 0)
            }

            function c(e, t) {
              return this.shear(r(e), r(t))
            }

            function h(i, n) {
              var a = e(n),
                s = t(n);
              return this._t(a, s, 0, 0, -s, a, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)._t(1, 0, 0, 0, r(i), 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)._t(a, -s, 0, 0, s, a, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
            }

            function p(e, t, r) {
              return r || 0 === r || (r = 1), 1 === e && 1 === t && 1 === r ? this : this._t(e, 0, 0, 0, 0, t, 0, 0, 0, 0, r, 0, 0, 0, 0, 1)
            }

            function d(e, t, r, i, n, a, s, o, l, u, c, h, p, d, f, m) {
              return this.props[0] = e, this.props[1] = t, this.props[2] = r, this.props[3] = i, this.props[4] = n, this.props[5] = a, this.props[6] = s, this.props[7] = o, this.props[8] = l, this.props[9] = u, this.props[10] = c, this.props[11] = h, this.props[12] = p, this.props[13] = d, this.props[14] = f, this.props[15] = m, this
            }

            function f(e, t, r) {
              return r = r || 0, 0 !== e || 0 !== t || 0 !== r ? this._t(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, e, t, r, 1) : this
            }

            function m(e, t, r, i, n, a, s, o, l, u, c, h, p, d, f, m) {
              var v = this.props;
              if (1 === e && 0 === t && 0 === r && 0 === i && 0 === n && 1 === a && 0 === s && 0 === o && 0 === l && 0 === u && 1 === c && 0 === h) return v[12] = v[12] * e + v[15] * p, v[13] = v[13] * a + v[15] * d, v[14] = v[14] * c + v[15] * f, v[15] *= m, this._identityCalculated = !1, this;
              var g = v[0],
                y = v[1],
                b = v[2],
                S = v[3],
                x = v[4],
                E = v[5],
                P = v[6],
                w = v[7],
                C = v[8],
                T = v[9],
                M = v[10],
                _ = v[11],
                A = v[12],
                k = v[13],
                I = v[14],
                D = v[15];
              return v[0] = g * e + y * n + b * l + S * p, v[1] = g * t + y * a + b * u + S * d, v[2] = g * r + y * s + b * c + S * f, v[3] = g * i + y * o + b * h + S * m, v[4] = x * e + E * n + P * l + w * p, v[5] = x * t + E * a + P * u + w * d, v[6] = x * r + E * s + P * c + w * f, v[7] = x * i + E * o + P * h + w * m, v[8] = C * e + T * n + M * l + _ * p, v[9] = C * t + T * a + M * u + _ * d, v[10] = C * r + T * s + M * c + _ * f, v[11] = C * i + T * o + M * h + _ * m, v[12] = A * e + k * n + I * l + D * p, v[13] = A * t + k * a + I * u + D * d, v[14] = A * r + k * s + I * c + D * f, v[15] = A * i + k * o + I * h + D * m, this._identityCalculated = !1, this
            }

            function v(e) {
              var t = e.props;
              return this.transform(t[0], t[1], t[2], t[3], t[4], t[5], t[6], t[7], t[8], t[9], t[10], t[11], t[12], t[13], t[14], t[15])
            }

            function g() {
              return this._identityCalculated || (this._identity = !(1 !== this.props[0] || 0 !== this.props[1] || 0 !== this.props[2] || 0 !== this.props[3] || 0 !== this.props[4] || 1 !== this.props[5] || 0 !== this.props[6] || 0 !== this.props[7] || 0 !== this.props[8] || 0 !== this.props[9] || 1 !== this.props[10] || 0 !== this.props[11] || 0 !== this.props[12] || 0 !== this.props[13] || 0 !== this.props[14] || 1 !== this.props[15]), this._identityCalculated = !0), this._identity
            }

            function y(e) {
              for (var t = 0; t < 16;) {
                if (e.props[t] !== this.props[t]) return !1;
                t += 1
              }
              return !0
            }

            function b(e) {
              var t;
              for (t = 0; t < 16; t += 1) e.props[t] = this.props[t];
              return e
            }

            function S(e) {
              var t;
              for (t = 0; t < 16; t += 1) this.props[t] = e[t]
            }

            function x(e, t, r) {
              return {
                x: e * this.props[0] + t * this.props[4] + r * this.props[8] + this.props[12],
                y: e * this.props[1] + t * this.props[5] + r * this.props[9] + this.props[13],
                z: e * this.props[2] + t * this.props[6] + r * this.props[10] + this.props[14]
              }
            }

            function E(e, t, r) {
              return e * this.props[0] + t * this.props[4] + r * this.props[8] + this.props[12]
            }

            function P(e, t, r) {
              return e * this.props[1] + t * this.props[5] + r * this.props[9] + this.props[13]
            }

            function w(e, t, r) {
              return e * this.props[2] + t * this.props[6] + r * this.props[10] + this.props[14]
            }

            function C() {
              var e = this.props[0] * this.props[5] - this.props[1] * this.props[4],
                t = this.props[5] / e,
                r = -this.props[1] / e,
                i = -this.props[4] / e,
                n = this.props[0] / e,
                a = (this.props[4] * this.props[13] - this.props[5] * this.props[12]) / e,
                s = -(this.props[0] * this.props[13] - this.props[1] * this.props[12]) / e,
                o = new Matrix;
              return o.props[0] = t, o.props[1] = r, o.props[4] = i, o.props[5] = n, o.props[12] = a, o.props[13] = s, o
            }

            function T(e) {
              return this.getInverseMatrix().applyToPointArray(e[0], e[1], e[2] || 0)
            }

            function M(e) {
              var t, r = e.length,
                i = [];
              for (t = 0; t < r; t += 1) i[t] = T(e[t]);
              return i
            }

            function _(e, t, r) {
              var i = createTypedArray("float32", 6);
              if (this.isIdentity()) i[0] = e[0], i[1] = e[1], i[2] = t[0], i[3] = t[1], i[4] = r[0], i[5] = r[1];
              else {
                var n = this.props[0],
                  a = this.props[1],
                  s = this.props[4],
                  o = this.props[5],
                  l = this.props[12],
                  u = this.props[13];
                i[0] = e[0] * n + e[1] * s + l, i[1] = e[0] * a + e[1] * o + u, i[2] = t[0] * n + t[1] * s + l, i[3] = t[0] * a + t[1] * o + u, i[4] = r[0] * n + r[1] * s + l, i[5] = r[0] * a + r[1] * o + u
              }
              return i
            }

            function A(e, t, r) {
              return this.isIdentity() ? [e, t, r] : [e * this.props[0] + t * this.props[4] + r * this.props[8] + this.props[12], e * this.props[1] + t * this.props[5] + r * this.props[9] + this.props[13], e * this.props[2] + t * this.props[6] + r * this.props[10] + this.props[14]]
            }

            function k(e, t) {
              if (this.isIdentity()) return e + "," + t;
              var r = this.props;
              return Math.round(100 * (e * r[0] + t * r[4] + r[12])) / 100 + "," + Math.round(100 * (e * r[1] + t * r[5] + r[13])) / 100
            }

            function I() {
              for (var e = 0, t = this.props, r = "matrix3d("; e < 16;) r += i(1e4 * t[e]) / 1e4, r += 15 === e ? ")" : ",", e += 1;
              return r
            }

            function D(e) {
              return e < 1e-6 && e > 0 || e > -1e-6 && e < 0 ? i(1e4 * e) / 1e4 : e
            }

            function O() {
              var e = this.props;
              return "matrix(" + D(e[0]) + "," + D(e[1]) + "," + D(e[4]) + "," + D(e[5]) + "," + D(e[12]) + "," + D(e[13]) + ")"
            }
            return function() {
              this.reset = n, this.rotate = a, this.rotateX = s, this.rotateY = o, this.rotateZ = l, this.skew = c, this.skewFromAxis = h, this.shear = u, this.scale = p, this.setTransform = d, this.translate = f, this.transform = m, this.multiply = v, this.applyToPoint = x, this.applyToX = E, this.applyToY = P, this.applyToZ = w, this.applyToPointArray = A, this.applyToTriplePoints = _, this.applyToPointStringified = k, this.toCSS = I, this.to2dCSS = O, this.clone = b, this.cloneFromProps = S, this.equals = y, this.inversePoints = M, this.inversePoint = T, this.getInverseMatrix = C, this._t = this.transform, this.isIdentity = g, this._identity = !0, this._identityCalculated = !1, this.props = createTypedArray("float32", 16), this.reset()
            }
          }();

        function _typeof$3(e) {
          return _typeof$3 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
          } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
          }, _typeof$3(e)
        }
        var lottie = {},
          standalone = "__[STANDALONE]__",
          animationData = "__[ANIMATIONDATA]__",
          renderer = "";

        function setLocation(e) {
          setLocationHref(e)
        }

        function searchAnimations() {
          !0 === standalone ? animationManager.searchAnimations(animationData, standalone, renderer) : animationManager.searchAnimations()
        }

        function setSubframeRendering(e) {
          setSubframeEnabled(e)
        }

        function setPrefix(e) {
          setIdPrefix(e)
        }

        function loadAnimation(e) {
          return !0 === standalone && (e.animationData = JSON.parse(animationData)), animationManager.loadAnimation(e)
        }

        function setQuality(e) {
          if ("string" == typeof e) switch (e) {
            case "high":
              setDefaultCurveSegments(200);
              break;
            default:
            case "medium":
              setDefaultCurveSegments(50);
              break;
            case "low":
              setDefaultCurveSegments(10)
          } else !isNaN(e) && e > 1 && setDefaultCurveSegments(e);
          getDefaultCurveSegments() >= 50 ? roundValues(!1) : roundValues(!0)
        }

        function inBrowser() {
          return "undefined" != typeof navigator
        }

        function installPlugin(e, t) {
          "expressions" === e && setExpressionsPlugin(t)
        }

        function getFactory(e) {
          switch (e) {
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

        function getQueryVariable(e) {
          for (var t = queryString.split("&"), r = 0; r < t.length; r += 1) {
            var i = t[r].split("=");
            if (decodeURIComponent(i[0]) == e) return decodeURIComponent(i[1])
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
        } catch (e) {}
        var ShapeModifiers = function() {
          var e = {},
            t = {};
          return e.registerModifier = function(e, r) {
            t[e] || (t[e] = r)
          }, e.getModifier = function(e, r, i) {
            return new t[e](r, i)
          }, e
        }();

        function ShapeModifier() {}

        function TrimModifier() {}

        function PuckerAndBloatModifier() {}
        ShapeModifier.prototype.initModifierProperties = function() {}, ShapeModifier.prototype.addShapeToModifier = function() {}, ShapeModifier.prototype.addShape = function(e) {
          if (!this.closed) {
            e.sh.container.addDynamicProperty(e.sh);
            var t = {
              shape: e.sh,
              data: e,
              localShapeCollection: shapeCollectionPool.newShapeCollection()
            };
            this.shapes.push(t), this.addShapeToModifier(t), this._isAnimated && e.setAsAnimated()
          }
        }, ShapeModifier.prototype.init = function(e, t) {
          this.shapes = [], this.elem = e, this.initDynamicPropertyContainer(e), this.initModifierProperties(e, t), this.frameId = initialDefaultFrame, this.closed = !1, this.k = !1, this.dynamicProperties.length ? this.k = !0 : this.getValue(!0)
        }, ShapeModifier.prototype.processKeys = function() {
          this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties())
        }, extendPrototype([DynamicPropertyContainer], ShapeModifier), extendPrototype([ShapeModifier], TrimModifier), TrimModifier.prototype.initModifierProperties = function(e, t) {
          this.s = PropertyFactory.getProp(e, t.s, 0, .01, this), this.e = PropertyFactory.getProp(e, t.e, 0, .01, this), this.o = PropertyFactory.getProp(e, t.o, 0, 0, this), this.sValue = 0, this.eValue = 0, this.getValue = this.processKeys, this.m = t.m, this._isAnimated = !!this.s.effectsSequence.length || !!this.e.effectsSequence.length || !!this.o.effectsSequence.length
        }, TrimModifier.prototype.addShapeToModifier = function(e) {
          e.pathsData = []
        }, TrimModifier.prototype.calculateShapeEdges = function(e, t, r, i, n) {
          var a = [];
          t <= 1 ? a.push({
            s: e,
            e: t
          }) : e >= 1 ? a.push({
            s: e - 1,
            e: t - 1
          }) : (a.push({
            s: e,
            e: 1
          }), a.push({
            s: 0,
            e: t - 1
          }));
          var s, o, l = [],
            u = a.length;
          for (s = 0; s < u; s += 1) {
            var c, h;
            (o = a[s]).e * n < i || o.s * n > i + r || (c = o.s * n <= i ? 0 : (o.s * n - i) / r, h = o.e * n >= i + r ? 1 : (o.e * n - i) / r, l.push([c, h]))
          }
          return l.length || l.push([0, 0]), l
        }, TrimModifier.prototype.releasePathsData = function(e) {
          var t, r = e.length;
          for (t = 0; t < r; t += 1) segmentsLengthPool.release(e[t]);
          return e.length = 0, e
        }, TrimModifier.prototype.processShapes = function(e) {
          var t, r, i, n;
          if (this._mdf || e) {
            var a = this.o.v % 360 / 360;
            if (a < 0 && (a += 1), (t = this.s.v > 1 ? 1 + a : this.s.v < 0 ? 0 + a : this.s.v + a) > (r = this.e.v > 1 ? 1 + a : this.e.v < 0 ? 0 + a : this.e.v + a)) {
              var s = t;
              t = r, r = s
            }
            t = 1e-4 * Math.round(1e4 * t), r = 1e-4 * Math.round(1e4 * r), this.sValue = t, this.eValue = r
          } else t = this.sValue, r = this.eValue;
          var o, l, u, c, h, p = this.shapes.length,
            d = 0;
          if (r === t)
            for (n = 0; n < p; n += 1) this.shapes[n].localShapeCollection.releaseShapes(), this.shapes[n].shape._mdf = !0, this.shapes[n].shape.paths = this.shapes[n].localShapeCollection, this._mdf && (this.shapes[n].pathsData.length = 0);
          else if (1 === r && 0 === t || 0 === r && 1 === t) {
            if (this._mdf)
              for (n = 0; n < p; n += 1) this.shapes[n].pathsData.length = 0, this.shapes[n].shape._mdf = !0
          } else {
            var f, m, v = [];
            for (n = 0; n < p; n += 1)
              if ((f = this.shapes[n]).shape._mdf || this._mdf || e || 2 === this.m) {
                if (l = (i = f.shape.paths)._length, h = 0, !f.shape._mdf && f.pathsData.length) h = f.totalShapeLength;
                else {
                  for (u = this.releasePathsData(f.pathsData), o = 0; o < l; o += 1) c = bez.getSegmentsLength(i.shapes[o]), u.push(c), h += c.totalLength;
                  f.totalShapeLength = h, f.pathsData = u
                }
                d += h, f.shape._mdf = !0
              } else f.shape.paths = f.localShapeCollection;
            var g, y = t,
              b = r,
              S = 0;
            for (n = p - 1; n >= 0; n -= 1)
              if ((f = this.shapes[n]).shape._mdf) {
                for ((m = f.localShapeCollection).releaseShapes(), 2 === this.m && p > 1 ? (g = this.calculateShapeEdges(t, r, f.totalShapeLength, S, d), S += f.totalShapeLength) : g = [
                    [y, b]
                  ], l = g.length, o = 0; o < l; o += 1) {
                  y = g[o][0], b = g[o][1], v.length = 0, b <= 1 ? v.push({
                    s: f.totalShapeLength * y,
                    e: f.totalShapeLength * b
                  }) : y >= 1 ? v.push({
                    s: f.totalShapeLength * (y - 1),
                    e: f.totalShapeLength * (b - 1)
                  }) : (v.push({
                    s: f.totalShapeLength * y,
                    e: f.totalShapeLength
                  }), v.push({
                    s: 0,
                    e: f.totalShapeLength * (b - 1)
                  }));
                  var x = this.addShapes(f, v[0]);
                  if (v[0].s !== v[0].e) {
                    if (v.length > 1)
                      if (f.shape.paths.shapes[f.shape.paths._length - 1].c) {
                        var E = x.pop();
                        this.addPaths(x, m), x = this.addShapes(f, v[1], E)
                      } else this.addPaths(x, m), x = this.addShapes(f, v[1]);
                    this.addPaths(x, m)
                  }
                }
                f.shape.paths = m
              }
          }
        }, TrimModifier.prototype.addPaths = function(e, t) {
          var r, i = e.length;
          for (r = 0; r < i; r += 1) t.addShape(e[r])
        }, TrimModifier.prototype.addSegment = function(e, t, r, i, n, a, s) {
          n.setXYAt(t[0], t[1], "o", a), n.setXYAt(r[0], r[1], "i", a + 1), s && n.setXYAt(e[0], e[1], "v", a), n.setXYAt(i[0], i[1], "v", a + 1)
        }, TrimModifier.prototype.addSegmentFromArray = function(e, t, r, i) {
          t.setXYAt(e[1], e[5], "o", r), t.setXYAt(e[2], e[6], "i", r + 1), i && t.setXYAt(e[0], e[4], "v", r), t.setXYAt(e[3], e[7], "v", r + 1)
        }, TrimModifier.prototype.addShapes = function(e, t, r) {
          var i, n, a, s, o, l, u, c, h = e.pathsData,
            p = e.shape.paths.shapes,
            d = e.shape.paths._length,
            f = 0,
            m = [],
            v = !0;
          for (r ? (o = r._length, c = r._length) : (r = shapePool.newElement(), o = 0, c = 0), m.push(r), i = 0; i < d; i += 1) {
            for (l = h[i].lengths, r.c = p[i].c, a = p[i].c ? l.length : l.length + 1, n = 1; n < a; n += 1)
              if (f + (s = l[n - 1]).addedLength < t.s) f += s.addedLength, r.c = !1;
              else {
                if (f > t.e) {
                  r.c = !1;
                  break
                }
                t.s <= f && t.e >= f + s.addedLength ? (this.addSegment(p[i].v[n - 1], p[i].o[n - 1], p[i].i[n], p[i].v[n], r, o, v), v = !1) : (u = bez.getNewSegment(p[i].v[n - 1], p[i].v[n], p[i].o[n - 1], p[i].i[n], (t.s - f) / s.addedLength, (t.e - f) / s.addedLength, l[n - 1]), this.addSegmentFromArray(u, r, o, v), v = !1, r.c = !1), f += s.addedLength, o += 1
              } if (p[i].c && l.length) {
              if (s = l[n - 1], f <= t.e) {
                var g = l[n - 1].addedLength;
                t.s <= f && t.e >= f + g ? (this.addSegment(p[i].v[n - 1], p[i].o[n - 1], p[i].i[0], p[i].v[0], r, o, v), v = !1) : (u = bez.getNewSegment(p[i].v[n - 1], p[i].v[0], p[i].o[n - 1], p[i].i[0], (t.s - f) / g, (t.e - f) / g, l[n - 1]), this.addSegmentFromArray(u, r, o, v), v = !1, r.c = !1)
              } else r.c = !1;
              f += s.addedLength, o += 1
            }
            if (r._length && (r.setXYAt(r.v[c][0], r.v[c][1], "i", c), r.setXYAt(r.v[r._length - 1][0], r.v[r._length - 1][1], "o", r._length - 1)), f > t.e) break;
            i < d - 1 && (r = shapePool.newElement(), v = !0, m.push(r), o = 0)
          }
          return m
        }, extendPrototype([ShapeModifier], PuckerAndBloatModifier), PuckerAndBloatModifier.prototype.initModifierProperties = function(e, t) {
          this.getValue = this.processKeys, this.amount = PropertyFactory.getProp(e, t.a, 0, null, this), this._isAnimated = !!this.amount.effectsSequence.length
        }, PuckerAndBloatModifier.prototype.processPath = function(e, t) {
          var r = t / 100,
            i = [0, 0],
            n = e._length,
            a = 0;
          for (a = 0; a < n; a += 1) i[0] += e.v[a][0], i[1] += e.v[a][1];
          i[0] /= n, i[1] /= n;
          var s, o, l, u, c, h, p = shapePool.newElement();
          for (p.c = e.c, a = 0; a < n; a += 1) s = e.v[a][0] + (i[0] - e.v[a][0]) * r, o = e.v[a][1] + (i[1] - e.v[a][1]) * r, l = e.o[a][0] + (i[0] - e.o[a][0]) * -r, u = e.o[a][1] + (i[1] - e.o[a][1]) * -r, c = e.i[a][0] + (i[0] - e.i[a][0]) * -r, h = e.i[a][1] + (i[1] - e.i[a][1]) * -r, p.setTripleAt(s, o, l, u, c, h, a);
          return p
        }, PuckerAndBloatModifier.prototype.processShapes = function(e) {
          var t, r, i, n, a, s, o = this.shapes.length,
            l = this.amount.v;
          if (0 !== l)
            for (r = 0; r < o; r += 1) {
              if (s = (a = this.shapes[r]).localShapeCollection, a.shape._mdf || this._mdf || e)
                for (s.releaseShapes(), a.shape._mdf = !0, t = a.shape.paths.shapes, n = a.shape.paths._length, i = 0; i < n; i += 1) s.addShape(this.processPath(t[i], l));
              a.shape.paths = a.localShapeCollection
            }
          this.dynamicProperties.length || (this._mdf = !1)
        };
        var TransformPropertyFactory = function() {
          var e = [0, 0];

          function t(e, t, r) {
            if (this.elem = e, this.frameId = -1, this.propType = "transform", this.data = t, this.v = new Matrix, this.pre = new Matrix, this.appliedTransformations = 0, this.initDynamicPropertyContainer(r || e), t.p && t.p.s ? (this.px = PropertyFactory.getProp(e, t.p.x, 0, 0, this), this.py = PropertyFactory.getProp(e, t.p.y, 0, 0, this), t.p.z && (this.pz = PropertyFactory.getProp(e, t.p.z, 0, 0, this))) : this.p = PropertyFactory.getProp(e, t.p || {
                k: [0, 0, 0]
              }, 1, 0, this), t.rx) {
              if (this.rx = PropertyFactory.getProp(e, t.rx, 0, degToRads, this), this.ry = PropertyFactory.getProp(e, t.ry, 0, degToRads, this), this.rz = PropertyFactory.getProp(e, t.rz, 0, degToRads, this), t.or.k[0].ti) {
                var i, n = t.or.k.length;
                for (i = 0; i < n; i += 1) t.or.k[i].to = null, t.or.k[i].ti = null
              }
              this.or = PropertyFactory.getProp(e, t.or, 1, degToRads, this), this.or.sh = !0
            } else this.r = PropertyFactory.getProp(e, t.r || {
              k: 0
            }, 0, degToRads, this);
            t.sk && (this.sk = PropertyFactory.getProp(e, t.sk, 0, degToRads, this), this.sa = PropertyFactory.getProp(e, t.sa, 0, degToRads, this)), this.a = PropertyFactory.getProp(e, t.a || {
              k: [0, 0, 0]
            }, 1, 0, this), this.s = PropertyFactory.getProp(e, t.s || {
              k: [100, 100, 100]
            }, 1, .01, this), t.o ? this.o = PropertyFactory.getProp(e, t.o, 0, .01, e) : this.o = {
              _mdf: !1,
              v: 1
            }, this._isDirty = !0, this.dynamicProperties.length || this.getValue(!0)
          }
          return t.prototype = {
            applyToMatrix: function(e) {
              var t = this._mdf;
              this.iterateDynamicProperties(), this._mdf = this._mdf || t, this.a && e.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.s && e.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.sk && e.skewFromAxis(-this.sk.v, this.sa.v), this.r ? e.rotate(-this.r.v) : e.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.data.p.s ? this.data.p.z ? e.translate(this.px.v, this.py.v, -this.pz.v) : e.translate(this.px.v, this.py.v, 0) : e.translate(this.p.v[0], this.p.v[1], -this.p.v[2])
            },
            getValue: function(t) {
              if (this.elem.globalData.frameId !== this.frameId) {
                if (this._isDirty && (this.precalculateMatrix(), this._isDirty = !1), this.iterateDynamicProperties(), this._mdf || t) {
                  var r;
                  if (this.v.cloneFromProps(this.pre.props), this.appliedTransformations < 1 && this.v.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.appliedTransformations < 2 && this.v.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.sk && this.appliedTransformations < 3 && this.v.skewFromAxis(-this.sk.v, this.sa.v), this.r && this.appliedTransformations < 4 ? this.v.rotate(-this.r.v) : !this.r && this.appliedTransformations < 4 && this.v.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.autoOriented) {
                    var i, n;
                    if (r = this.elem.globalData.frameRate, this.p && this.p.keyframes && this.p.getValueAtTime) this.p._caching.lastFrame + this.p.offsetTime <= this.p.keyframes[0].t ? (i = this.p.getValueAtTime((this.p.keyframes[0].t + .01) / r, 0), n = this.p.getValueAtTime(this.p.keyframes[0].t / r, 0)) : this.p._caching.lastFrame + this.p.offsetTime >= this.p.keyframes[this.p.keyframes.length - 1].t ? (i = this.p.getValueAtTime(this.p.keyframes[this.p.keyframes.length - 1].t / r, 0), n = this.p.getValueAtTime((this.p.keyframes[this.p.keyframes.length - 1].t - .05) / r, 0)) : (i = this.p.pv, n = this.p.getValueAtTime((this.p._caching.lastFrame + this.p.offsetTime - .01) / r, this.p.offsetTime));
                    else if (this.px && this.px.keyframes && this.py.keyframes && this.px.getValueAtTime && this.py.getValueAtTime) {
                      i = [], n = [];
                      var a = this.px,
                        s = this.py;
                      a._caching.lastFrame + a.offsetTime <= a.keyframes[0].t ? (i[0] = a.getValueAtTime((a.keyframes[0].t + .01) / r, 0), i[1] = s.getValueAtTime((s.keyframes[0].t + .01) / r, 0), n[0] = a.getValueAtTime(a.keyframes[0].t / r, 0), n[1] = s.getValueAtTime(s.keyframes[0].t / r, 0)) : a._caching.lastFrame + a.offsetTime >= a.keyframes[a.keyframes.length - 1].t ? (i[0] = a.getValueAtTime(a.keyframes[a.keyframes.length - 1].t / r, 0), i[1] = s.getValueAtTime(s.keyframes[s.keyframes.length - 1].t / r, 0), n[0] = a.getValueAtTime((a.keyframes[a.keyframes.length - 1].t - .01) / r, 0), n[1] = s.getValueAtTime((s.keyframes[s.keyframes.length - 1].t - .01) / r, 0)) : (i = [a.pv, s.pv], n[0] = a.getValueAtTime((a._caching.lastFrame + a.offsetTime - .01) / r, a.offsetTime), n[1] = s.getValueAtTime((s._caching.lastFrame + s.offsetTime - .01) / r, s.offsetTime))
                    } else i = n = e;
                    this.v.rotate(-Math.atan2(i[1] - n[1], i[0] - n[0]))
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
          }, extendPrototype([DynamicPropertyContainer], t), t.prototype.addDynamicProperty = function(e) {
            this._addDynamicProperty(e), this.elem.addDynamicProperty(e), this._isDirty = !0
          }, t.prototype._addDynamicProperty = DynamicPropertyContainer.prototype.addDynamicProperty, {
            getTransformProperty: function(e, r, i) {
              return new t(e, r, i)
            }
          }
        }();

        function RepeaterModifier() {}

        function RoundCornersModifier() {}

        function floatEqual(e, t) {
          return 1e5 * Math.abs(e - t) <= Math.min(Math.abs(e), Math.abs(t))
        }

        function floatZero(e) {
          return Math.abs(e) <= 1e-5
        }

        function lerp(e, t, r) {
          return e * (1 - r) + t * r
        }

        function lerpPoint(e, t, r) {
          return [lerp(e[0], t[0], r), lerp(e[1], t[1], r)]
        }

        function quadRoots(e, t, r) {
          if (0 === e) return [];
          var i = t * t - 4 * e * r;
          if (i < 0) return [];
          var n = -t / (2 * e);
          if (0 === i) return [n];
          var a = Math.sqrt(i) / (2 * e);
          return [n - a, n + a]
        }

        function polynomialCoefficients(e, t, r, i) {
          return [3 * t - e - 3 * r + i, 3 * e - 6 * t + 3 * r, -3 * e + 3 * t, e]
        }

        function singlePoint(e) {
          return new PolynomialBezier(e, e, e, e, !1)
        }

        function PolynomialBezier(e, t, r, i, n) {
          n && pointEqual(e, t) && (t = lerpPoint(e, i, 1 / 3)), n && pointEqual(r, i) && (r = lerpPoint(e, i, 2 / 3));
          var a = polynomialCoefficients(e[0], t[0], r[0], i[0]),
            s = polynomialCoefficients(e[1], t[1], r[1], i[1]);
          this.a = [a[0], s[0]], this.b = [a[1], s[1]], this.c = [a[2], s[2]], this.d = [a[3], s[3]], this.points = [e, t, r, i]
        }

        function extrema(e, t) {
          var r = e.points[0][t],
            i = e.points[e.points.length - 1][t];
          if (r > i) {
            var n = i;
            i = r, r = n
          }
          for (var a = quadRoots(3 * e.a[t], 2 * e.b[t], e.c[t]), s = 0; s < a.length; s += 1)
            if (a[s] > 0 && a[s] < 1) {
              var o = e.point(a[s])[t];
              o < r ? r = o : o > i && (i = o)
            } return {
            min: r,
            max: i
          }
        }

        function intersectData(e, t, r) {
          var i = e.boundingBox();
          return {
            cx: i.cx,
            cy: i.cy,
            width: i.width,
            height: i.height,
            bez: e,
            t: (t + r) / 2,
            t1: t,
            t2: r
          }
        }

        function splitData(e) {
          var t = e.bez.split(.5);
          return [intersectData(t[0], e.t1, e.t), intersectData(t[1], e.t, e.t2)]
        }

        function boxIntersect(e, t) {
          return 2 * Math.abs(e.cx - t.cx) < e.width + t.width && 2 * Math.abs(e.cy - t.cy) < e.height + t.height
        }

        function intersectsImpl(e, t, r, i, n, a) {
          if (boxIntersect(e, t))
            if (r >= a || e.width <= i && e.height <= i && t.width <= i && t.height <= i) n.push([e.t, t.t]);
            else {
              var s = splitData(e),
                o = splitData(t);
              intersectsImpl(s[0], o[0], r + 1, i, n, a), intersectsImpl(s[0], o[1], r + 1, i, n, a), intersectsImpl(s[1], o[0], r + 1, i, n, a), intersectsImpl(s[1], o[1], r + 1, i, n, a)
            }
        }

        function crossProduct(e, t) {
          return [e[1] * t[2] - e[2] * t[1], e[2] * t[0] - e[0] * t[2], e[0] * t[1] - e[1] * t[0]]
        }

        function lineIntersection(e, t, r, i) {
          var n = [e[0], e[1], 1],
            a = [t[0], t[1], 1],
            s = [r[0], r[1], 1],
            o = [i[0], i[1], 1],
            l = crossProduct(crossProduct(n, a), crossProduct(s, o));
          return floatZero(l[2]) ? null : [l[0] / l[2], l[1] / l[2]]
        }

        function polarOffset(e, t, r) {
          return [e[0] + Math.cos(t) * r, e[1] - Math.sin(t) * r]
        }

        function pointDistance(e, t) {
          return Math.hypot(e[0] - t[0], e[1] - t[1])
        }

        function pointEqual(e, t) {
          return floatEqual(e[0], t[0]) && floatEqual(e[1], t[1])
        }

        function ZigZagModifier() {}

        function setPoint(e, t, r, i, n, a, s) {
          var o = r - Math.PI / 2,
            l = r + Math.PI / 2,
            u = t[0] + Math.cos(r) * i * n,
            c = t[1] - Math.sin(r) * i * n;
          e.setTripleAt(u, c, u + Math.cos(o) * a, c - Math.sin(o) * a, u + Math.cos(l) * s, c - Math.sin(l) * s, e.length())
        }

        function getPerpendicularVector(e, t) {
          var r = [t[0] - e[0], t[1] - e[1]],
            i = .5 * -Math.PI;
          return [Math.cos(i) * r[0] - Math.sin(i) * r[1], Math.sin(i) * r[0] + Math.cos(i) * r[1]]
        }

        function getProjectingAngle(e, t) {
          var r = 0 === t ? e.length() - 1 : t - 1,
            i = (t + 1) % e.length(),
            n = getPerpendicularVector(e.v[r], e.v[i]);
          return Math.atan2(0, 1) - Math.atan2(n[1], n[0])
        }

        function zigZagCorner(e, t, r, i, n, a, s) {
          var o = getProjectingAngle(t, r),
            l = t.v[r % t._length],
            u = t.v[0 === r ? t._length - 1 : r - 1],
            c = t.v[(r + 1) % t._length],
            h = 2 === a ? Math.sqrt(Math.pow(l[0] - u[0], 2) + Math.pow(l[1] - u[1], 2)) : 0,
            p = 2 === a ? Math.sqrt(Math.pow(l[0] - c[0], 2) + Math.pow(l[1] - c[1], 2)) : 0;
          setPoint(e, t.v[r % t._length], o, s, i, p / (2 * (n + 1)), h / (2 * (n + 1)), a)
        }

        function zigZagSegment(e, t, r, i, n, a) {
          for (var s = 0; s < i; s += 1) {
            var o = (s + 1) / (i + 1),
              l = 2 === n ? Math.sqrt(Math.pow(t.points[3][0] - t.points[0][0], 2) + Math.pow(t.points[3][1] - t.points[0][1], 2)) : 0,
              u = t.normalAngle(o);
            setPoint(e, t.point(o), u, a, r, l / (2 * (i + 1)), l / (2 * (i + 1)), n), a = -a
          }
          return a
        }

        function linearOffset(e, t, r) {
          var i = Math.atan2(t[0] - e[0], t[1] - e[1]);
          return [polarOffset(e, i, r), polarOffset(t, i, r)]
        }

        function offsetSegment(e, t) {
          var r, i, n, a, s, o, l;
          r = (l = linearOffset(e.points[0], e.points[1], t))[0], i = l[1], n = (l = linearOffset(e.points[1], e.points[2], t))[0], a = l[1], s = (l = linearOffset(e.points[2], e.points[3], t))[0], o = l[1];
          var u = lineIntersection(r, i, n, a);
          null === u && (u = i);
          var c = lineIntersection(s, o, n, a);
          return null === c && (c = s), new PolynomialBezier(r, u, c, o)
        }

        function joinLines(e, t, r, i, n) {
          var a = t.points[3],
            s = r.points[0];
          if (3 === i) return a;
          if (pointEqual(a, s)) return a;
          if (2 === i) {
            var o = -t.tangentAngle(1),
              l = -r.tangentAngle(0) + Math.PI,
              u = lineIntersection(a, polarOffset(a, o + Math.PI / 2, 100), s, polarOffset(s, o + Math.PI / 2, 100)),
              c = u ? pointDistance(u, a) : pointDistance(a, s) / 2,
              h = polarOffset(a, o, 2 * c * roundCorner);
            return e.setXYAt(h[0], h[1], "o", e.length() - 1), h = polarOffset(s, l, 2 * c * roundCorner), e.setTripleAt(s[0], s[1], s[0], s[1], h[0], h[1], e.length()), s
          }
          var p = lineIntersection(pointEqual(a, t.points[2]) ? t.points[0] : t.points[2], a, s, pointEqual(s, r.points[1]) ? r.points[3] : r.points[1]);
          return p && pointDistance(p, a) < n ? (e.setTripleAt(p[0], p[1], p[0], p[1], p[0], p[1], e.length()), p) : a
        }

        function getIntersection(e, t) {
          var r = e.intersections(t);
          return r.length && floatEqual(r[0][0], 1) && r.shift(), r.length ? r[0] : null
        }

        function pruneSegmentIntersection(e, t) {
          var r = e.slice(),
            i = t.slice(),
            n = getIntersection(e[e.length - 1], t[0]);
          return n && (r[e.length - 1] = e[e.length - 1].split(n[0])[0], i[0] = t[0].split(n[1])[1]), e.length > 1 && t.length > 1 && (n = getIntersection(e[0], t[t.length - 1])) ? [
            [e[0].split(n[0])[0]],
            [t[t.length - 1].split(n[1])[1]]
          ] : [r, i]
        }

        function pruneIntersections(e) {
          for (var t, r = 1; r < e.length; r += 1) t = pruneSegmentIntersection(e[r - 1], e[r]), e[r - 1] = t[0], e[r] = t[1];
          return e.length > 1 && (t = pruneSegmentIntersection(e[e.length - 1], e[0]), e[e.length - 1] = t[0], e[0] = t[1]), e
        }

        function offsetSegmentSplit(e, t) {
          var r, i, n, a, s = e.inflectionPoints();
          if (0 === s.length) return [offsetSegment(e, t)];
          if (1 === s.length || floatEqual(s[1], 1)) return r = (n = e.split(s[0]))[0], i = n[1], [offsetSegment(r, t), offsetSegment(i, t)];
          r = (n = e.split(s[0]))[0];
          var o = (s[1] - s[0]) / (1 - s[0]);
          return a = (n = n[1].split(o))[0], i = n[1], [offsetSegment(r, t), offsetSegment(a, t), offsetSegment(i, t)]
        }

        function OffsetPathModifier() {}

        function getFontProperties(e) {
          for (var t = e.fStyle ? e.fStyle.split(" ") : [], r = "normal", i = "normal", n = t.length, a = 0; a < n; a += 1) switch (t[a].toLowerCase()) {
            case "italic":
              i = "italic";
              break;
            case "bold":
              r = "700";
              break;
            case "black":
              r = "900";
              break;
            case "medium":
              r = "500";
              break;
            case "regular":
            case "normal":
              r = "400";
              break;
            case "light":
            case "thin":
              r = "200"
          }
          return {
            style: i,
            weight: e.fWeight || r
          }
        }
        extendPrototype([ShapeModifier], RepeaterModifier), RepeaterModifier.prototype.initModifierProperties = function(e, t) {
          this.getValue = this.processKeys, this.c = PropertyFactory.getProp(e, t.c, 0, null, this), this.o = PropertyFactory.getProp(e, t.o, 0, null, this), this.tr = TransformPropertyFactory.getTransformProperty(e, t.tr, this), this.so = PropertyFactory.getProp(e, t.tr.so, 0, .01, this), this.eo = PropertyFactory.getProp(e, t.tr.eo, 0, .01, this), this.data = t, this.dynamicProperties.length || this.getValue(!0), this._isAnimated = !!this.dynamicProperties.length, this.pMatrix = new Matrix, this.rMatrix = new Matrix, this.sMatrix = new Matrix, this.tMatrix = new Matrix, this.matrix = new Matrix
        }, RepeaterModifier.prototype.applyTransforms = function(e, t, r, i, n, a) {
          var s = a ? -1 : 1,
            o = i.s.v[0] + (1 - i.s.v[0]) * (1 - n),
            l = i.s.v[1] + (1 - i.s.v[1]) * (1 - n);
          e.translate(i.p.v[0] * s * n, i.p.v[1] * s * n, i.p.v[2]), t.translate(-i.a.v[0], -i.a.v[1], i.a.v[2]), t.rotate(-i.r.v * s * n), t.translate(i.a.v[0], i.a.v[1], i.a.v[2]), r.translate(-i.a.v[0], -i.a.v[1], i.a.v[2]), r.scale(a ? 1 / o : o, a ? 1 / l : l), r.translate(i.a.v[0], i.a.v[1], i.a.v[2])
        }, RepeaterModifier.prototype.init = function(e, t, r, i) {
          for (this.elem = e, this.arr = t, this.pos = r, this.elemsData = i, this._currentCopies = 0, this._elements = [], this._groups = [], this.frameId = -1, this.initDynamicPropertyContainer(e), this.initModifierProperties(e, t[r]); r > 0;) r -= 1, this._elements.unshift(t[r]);
          this.dynamicProperties.length ? this.k = !0 : this.getValue(!0)
        }, RepeaterModifier.prototype.resetElements = function(e) {
          var t, r = e.length;
          for (t = 0; t < r; t += 1) e[t]._processed = !1, "gr" === e[t].ty && this.resetElements(e[t].it)
        }, RepeaterModifier.prototype.cloneElements = function(e) {
          var t = JSON.parse(JSON.stringify(e));
          return this.resetElements(t), t
        }, RepeaterModifier.prototype.changeGroupRender = function(e, t) {
          var r, i = e.length;
          for (r = 0; r < i; r += 1) e[r]._render = t, "gr" === e[r].ty && this.changeGroupRender(e[r].it, t)
        }, RepeaterModifier.prototype.processShapes = function(e) {
          var t, r, i, n, a, s = !1;
          if (this._mdf || e) {
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
            for (a = 0, i = 0; i <= this._groups.length - 1; i += 1) {
              if (o = a < l, this._groups[i]._render = o, this.changeGroupRender(this._groups[i].it, o), !o) {
                var c = this.elemsData[i].it,
                  h = c[c.length - 1];
                0 !== h.transform.op.v ? (h.transform.op._mdf = !0, h.transform.op.v = 0) : h.transform.op._mdf = !1
              }
              a += 1
            }
            this._currentCopies = l;
            var p = this.o.v,
              d = p % 1,
              f = p > 0 ? Math.floor(p) : Math.ceil(p),
              m = this.pMatrix.props,
              v = this.rMatrix.props,
              g = this.sMatrix.props;
            this.pMatrix.reset(), this.rMatrix.reset(), this.sMatrix.reset(), this.tMatrix.reset(), this.matrix.reset();
            var y, b, S = 0;
            if (p > 0) {
              for (; S < f;) this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !1), S += 1;
              d && (this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, d, !1), S += d)
            } else if (p < 0) {
              for (; S > f;) this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !0), S -= 1;
              d && (this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, -d, !0), S -= d)
            }
            for (i = 1 === this.data.m ? 0 : this._currentCopies - 1, n = 1 === this.data.m ? 1 : -1, a = this._currentCopies; a;) {
              if (b = (r = (t = this.elemsData[i].it)[t.length - 1].transform.mProps.v.props).length, t[t.length - 1].transform.mProps._mdf = !0, t[t.length - 1].transform.op._mdf = !0, t[t.length - 1].transform.op.v = 1 === this._currentCopies ? this.so.v : this.so.v + (this.eo.v - this.so.v) * (i / (this._currentCopies - 1)), 0 !== S) {
                for ((0 !== i && 1 === n || i !== this._currentCopies - 1 && -1 === n) && this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !1), this.matrix.transform(v[0], v[1], v[2], v[3], v[4], v[5], v[6], v[7], v[8], v[9], v[10], v[11], v[12], v[13], v[14], v[15]), this.matrix.transform(g[0], g[1], g[2], g[3], g[4], g[5], g[6], g[7], g[8], g[9], g[10], g[11], g[12], g[13], g[14], g[15]), this.matrix.transform(m[0], m[1], m[2], m[3], m[4], m[5], m[6], m[7], m[8], m[9], m[10], m[11], m[12], m[13], m[14], m[15]), y = 0; y < b; y += 1) r[y] = this.matrix.props[y];
                this.matrix.reset()
              } else
                for (this.matrix.reset(), y = 0; y < b; y += 1) r[y] = this.matrix.props[y];
              S += 1, a -= 1, i += n
            }
          } else
            for (a = this._currentCopies, i = 0, n = 1; a;) r = (t = this.elemsData[i].it)[t.length - 1].transform.mProps.v.props, t[t.length - 1].transform.mProps._mdf = !1, t[t.length - 1].transform.op._mdf = !1, a -= 1, i += n;
          return s
        }, RepeaterModifier.prototype.addShape = function() {}, extendPrototype([ShapeModifier], RoundCornersModifier), RoundCornersModifier.prototype.initModifierProperties = function(e, t) {
          this.getValue = this.processKeys, this.rd = PropertyFactory.getProp(e, t.r, 0, null, this), this._isAnimated = !!this.rd.effectsSequence.length
        }, RoundCornersModifier.prototype.processPath = function(e, t) {
          var r, i = shapePool.newElement();
          i.c = e.c;
          var n, a, s, o, l, u, c, h, p, d, f, m, v = e._length,
            g = 0;
          for (r = 0; r < v; r += 1) n = e.v[r], s = e.o[r], a = e.i[r], n[0] === s[0] && n[1] === s[1] && n[0] === a[0] && n[1] === a[1] ? 0 !== r && r !== v - 1 || e.c ? (o = 0 === r ? e.v[v - 1] : e.v[r - 1], u = (l = Math.sqrt(Math.pow(n[0] - o[0], 2) + Math.pow(n[1] - o[1], 2))) ? Math.min(l / 2, t) / l : 0, c = f = n[0] + (o[0] - n[0]) * u, h = m = n[1] - (n[1] - o[1]) * u, p = c - (c - n[0]) * roundCorner, d = h - (h - n[1]) * roundCorner, i.setTripleAt(c, h, p, d, f, m, g), g += 1, o = r === v - 1 ? e.v[0] : e.v[r + 1], u = (l = Math.sqrt(Math.pow(n[0] - o[0], 2) + Math.pow(n[1] - o[1], 2))) ? Math.min(l / 2, t) / l : 0, c = p = n[0] + (o[0] - n[0]) * u, h = d = n[1] + (o[1] - n[1]) * u, f = c - (c - n[0]) * roundCorner, m = h - (h - n[1]) * roundCorner, i.setTripleAt(c, h, p, d, f, m, g), g += 1) : (i.setTripleAt(n[0], n[1], s[0], s[1], a[0], a[1], g), g += 1) : (i.setTripleAt(e.v[r][0], e.v[r][1], e.o[r][0], e.o[r][1], e.i[r][0], e.i[r][1], g), g += 1);
          return i
        }, RoundCornersModifier.prototype.processShapes = function(e) {
          var t, r, i, n, a, s, o = this.shapes.length,
            l = this.rd.v;
          if (0 !== l)
            for (r = 0; r < o; r += 1) {
              if (s = (a = this.shapes[r]).localShapeCollection, a.shape._mdf || this._mdf || e)
                for (s.releaseShapes(), a.shape._mdf = !0, t = a.shape.paths.shapes, n = a.shape.paths._length, i = 0; i < n; i += 1) s.addShape(this.processPath(t[i], l));
              a.shape.paths = a.localShapeCollection
            }
          this.dynamicProperties.length || (this._mdf = !1)
        }, PolynomialBezier.prototype.point = function(e) {
          return [((this.a[0] * e + this.b[0]) * e + this.c[0]) * e + this.d[0], ((this.a[1] * e + this.b[1]) * e + this.c[1]) * e + this.d[1]]
        }, PolynomialBezier.prototype.derivative = function(e) {
          return [(3 * e * this.a[0] + 2 * this.b[0]) * e + this.c[0], (3 * e * this.a[1] + 2 * this.b[1]) * e + this.c[1]]
        }, PolynomialBezier.prototype.tangentAngle = function(e) {
          var t = this.derivative(e);
          return Math.atan2(t[1], t[0])
        }, PolynomialBezier.prototype.normalAngle = function(e) {
          var t = this.derivative(e);
          return Math.atan2(t[0], t[1])
        }, PolynomialBezier.prototype.inflectionPoints = function() {
          var e = this.a[1] * this.b[0] - this.a[0] * this.b[1];
          if (floatZero(e)) return [];
          var t = -.5 * (this.a[1] * this.c[0] - this.a[0] * this.c[1]) / e,
            r = t * t - 1 / 3 * (this.b[1] * this.c[0] - this.b[0] * this.c[1]) / e;
          if (r < 0) return [];
          var i = Math.sqrt(r);
          return floatZero(i) ? i > 0 && i < 1 ? [t] : [] : [t - i, t + i].filter((function(e) {
            return e > 0 && e < 1
          }))
        }, PolynomialBezier.prototype.split = function(e) {
          if (e <= 0) return [singlePoint(this.points[0]), this];
          if (e >= 1) return [this, singlePoint(this.points[this.points.length - 1])];
          var t = lerpPoint(this.points[0], this.points[1], e),
            r = lerpPoint(this.points[1], this.points[2], e),
            i = lerpPoint(this.points[2], this.points[3], e),
            n = lerpPoint(t, r, e),
            a = lerpPoint(r, i, e),
            s = lerpPoint(n, a, e);
          return [new PolynomialBezier(this.points[0], t, n, s, !0), new PolynomialBezier(s, a, i, this.points[3], !0)]
        }, PolynomialBezier.prototype.bounds = function() {
          return {
            x: extrema(this, 0),
            y: extrema(this, 1)
          }
        }, PolynomialBezier.prototype.boundingBox = function() {
          var e = this.bounds();
          return {
            left: e.x.min,
            right: e.x.max,
            top: e.y.min,
            bottom: e.y.max,
            width: e.x.max - e.x.min,
            height: e.y.max - e.y.min,
            cx: (e.x.max + e.x.min) / 2,
            cy: (e.y.max + e.y.min) / 2
          }
        }, PolynomialBezier.prototype.intersections = function(e, t, r) {
          void 0 === t && (t = 2), void 0 === r && (r = 7);
          var i = [];
          return intersectsImpl(intersectData(this, 0, 1), intersectData(e, 0, 1), 0, t, i, r), i
        }, PolynomialBezier.shapeSegment = function(e, t) {
          var r = (t + 1) % e.length();
          return new PolynomialBezier(e.v[t], e.o[t], e.i[r], e.v[r], !0)
        }, PolynomialBezier.shapeSegmentInverted = function(e, t) {
          var r = (t + 1) % e.length();
          return new PolynomialBezier(e.v[r], e.i[r], e.o[t], e.v[t], !0)
        }, extendPrototype([ShapeModifier], ZigZagModifier), ZigZagModifier.prototype.initModifierProperties = function(e, t) {
          this.getValue = this.processKeys, this.amplitude = PropertyFactory.getProp(e, t.s, 0, null, this), this.frequency = PropertyFactory.getProp(e, t.r, 0, null, this), this.pointsType = PropertyFactory.getProp(e, t.pt, 0, null, this), this._isAnimated = 0 !== this.amplitude.effectsSequence.length || 0 !== this.frequency.effectsSequence.length || 0 !== this.pointsType.effectsSequence.length
        }, ZigZagModifier.prototype.processPath = function(e, t, r, i) {
          var n = e._length,
            a = shapePool.newElement();
          if (a.c = e.c, e.c || (n -= 1), 0 === n) return a;
          var s = -1,
            o = PolynomialBezier.shapeSegment(e, 0);
          zigZagCorner(a, e, 0, t, r, i, s);
          for (var l = 0; l < n; l += 1) s = zigZagSegment(a, o, t, r, i, -s), o = l !== n - 1 || e.c ? PolynomialBezier.shapeSegment(e, (l + 1) % n) : null, zigZagCorner(a, e, l + 1, t, r, i, s);
          return a
        }, ZigZagModifier.prototype.processShapes = function(e) {
          var t, r, i, n, a, s, o = this.shapes.length,
            l = this.amplitude.v,
            u = Math.max(0, Math.round(this.frequency.v)),
            c = this.pointsType.v;
          if (0 !== l)
            for (r = 0; r < o; r += 1) {
              if (s = (a = this.shapes[r]).localShapeCollection, a.shape._mdf || this._mdf || e)
                for (s.releaseShapes(), a.shape._mdf = !0, t = a.shape.paths.shapes, n = a.shape.paths._length, i = 0; i < n; i += 1) s.addShape(this.processPath(t[i], l, u, c));
              a.shape.paths = a.localShapeCollection
            }
          this.dynamicProperties.length || (this._mdf = !1)
        }, extendPrototype([ShapeModifier], OffsetPathModifier), OffsetPathModifier.prototype.initModifierProperties = function(e, t) {
          this.getValue = this.processKeys, this.amount = PropertyFactory.getProp(e, t.a, 0, null, this), this.miterLimit = PropertyFactory.getProp(e, t.ml, 0, null, this), this.lineJoin = t.lj, this._isAnimated = 0 !== this.amount.effectsSequence.length
        }, OffsetPathModifier.prototype.processPath = function(e, t, r, i) {
          var n = shapePool.newElement();
          n.c = e.c;
          var a, s, o, l = e.length();
          e.c || (l -= 1);
          var u = [];
          for (a = 0; a < l; a += 1) o = PolynomialBezier.shapeSegment(e, a), u.push(offsetSegmentSplit(o, t));
          if (!e.c)
            for (a = l - 1; a >= 0; a -= 1) o = PolynomialBezier.shapeSegmentInverted(e, a), u.push(offsetSegmentSplit(o, t));
          u = pruneIntersections(u);
          var c = null,
            h = null;
          for (a = 0; a < u.length; a += 1) {
            var p = u[a];
            for (h && (c = joinLines(n, h, p[0], r, i)), h = p[p.length - 1], s = 0; s < p.length; s += 1) o = p[s], c && pointEqual(o.points[0], c) ? n.setXYAt(o.points[1][0], o.points[1][1], "o", n.length() - 1) : n.setTripleAt(o.points[0][0], o.points[0][1], o.points[1][0], o.points[1][1], o.points[0][0], o.points[0][1], n.length()), n.setTripleAt(o.points[3][0], o.points[3][1], o.points[3][0], o.points[3][1], o.points[2][0], o.points[2][1], n.length()), c = o.points[3]
          }
          return u.length && joinLines(n, h, u[0][0], r, i), n
        }, OffsetPathModifier.prototype.processShapes = function(e) {
          var t, r, i, n, a, s, o = this.shapes.length,
            l = this.amount.v,
            u = this.miterLimit.v,
            c = this.lineJoin;
          if (0 !== l)
            for (r = 0; r < o; r += 1) {
              if (s = (a = this.shapes[r]).localShapeCollection, a.shape._mdf || this._mdf || e)
                for (s.releaseShapes(), a.shape._mdf = !0, t = a.shape.paths.shapes, n = a.shape.paths._length, i = 0; i < n; i += 1) s.addShape(this.processPath(t[i], l, c, u));
              a.shape.paths = a.localShapeCollection
            }
          this.dynamicProperties.length || (this._mdf = !1)
        };
        var FontManager = function() {
          var e = {
              w: 0,
              size: 0,
              shapes: [],
              data: {
                shapes: []
              }
            },
            t = [];
          t = t.concat([2304, 2305, 2306, 2307, 2362, 2363, 2364, 2364, 2366, 2367, 2368, 2369, 2370, 2371, 2372, 2373, 2374, 2375, 2376, 2377, 2378, 2379, 2380, 2381, 2382, 2383, 2387, 2388, 2389, 2390, 2391, 2402, 2403]);
          var r = 127988,
            i = ["d83cdffb", "d83cdffc", "d83cdffd", "d83cdffe", "d83cdfff"];

          function n(e, t) {
            var r = createTag("span");
            r.setAttribute("aria-hidden", !0), r.style.fontFamily = t;
            var i = createTag("span");
            i.innerText = "giItT1WQy@!-/#", r.style.position = "absolute", r.style.left = "-10000px", r.style.top = "-10000px", r.style.fontSize = "300px", r.style.fontVariant = "normal", r.style.fontStyle = "normal", r.style.fontWeight = "normal", r.style.letterSpacing = "0", r.appendChild(i), document.body.appendChild(r);
            var n = i.offsetWidth;
            return i.style.fontFamily = function(e) {
              var t, r = e.split(","),
                i = r.length,
                n = [];
              for (t = 0; t < i; t += 1) "sans-serif" !== r[t] && "monospace" !== r[t] && n.push(r[t]);
              return n.join(",")
            }(e) + ", " + t, {
              node: i,
              w: n,
              parent: r
            }
          }

          function a(e, t) {
            var r, i = document.body && t ? "svg" : "canvas",
              n = getFontProperties(e);
            if ("svg" === i) {
              var a = createNS("text");
              a.style.fontSize = "100px", a.setAttribute("font-family", e.fFamily), a.setAttribute("font-style", n.style), a.setAttribute("font-weight", n.weight), a.textContent = "1", e.fClass ? (a.style.fontFamily = "inherit", a.setAttribute("class", e.fClass)) : a.style.fontFamily = e.fFamily, t.appendChild(a), r = a
            } else {
              var s = new OffscreenCanvas(500, 500).getContext("2d");
              s.font = n.style + " " + n.weight + " 100px " + e.fFamily, r = s
            }
            return {
              measureText: function(e) {
                return "svg" === i ? (r.textContent = e, r.getComputedTextLength()) : r.measureText(e).width
              }
            }
          }

          function s(e) {
            var t = 0,
              r = e.charCodeAt(0);
            if (r >= 55296 && r <= 56319) {
              var i = e.charCodeAt(1);
              i >= 56320 && i <= 57343 && (t = 1024 * (r - 55296) + i - 56320 + 65536)
            }
            return t
          }

          function o(e) {
            var t = s(e);
            return t >= 127462 && t <= 127487
          }
          var l = function() {
            this.fonts = [], this.chars = null, this.typekitLoaded = 0, this.isLoaded = !1, this._warned = !1, this.initTime = Date.now(), this.setIsLoadedBinded = this.setIsLoaded.bind(this), this.checkLoadedFontsBinded = this.checkLoadedFonts.bind(this)
          };
          l.isModifier = function(e, t) {
            var r = e.toString(16) + t.toString(16);
            return -1 !== i.indexOf(r)
          }, l.isZeroWidthJoiner = function(e) {
            return 8205 === e
          }, l.isFlagEmoji = function(e) {
            return o(e.substr(0, 2)) && o(e.substr(2, 2))
          }, l.isRegionalCode = o, l.isCombinedCharacter = function(e) {
            return -1 !== t.indexOf(e)
          }, l.isRegionalFlag = function(e, t) {
            var i = s(e.substr(t, 2));
            if (i !== r) return !1;
            var n = 0;
            for (t += 2; n < 5;) {
              if ((i = s(e.substr(t, 2))) < 917601 || i > 917626) return !1;
              n += 1, t += 2
            }
            return 917631 === s(e.substr(t, 2))
          }, l.isVariationSelector = function(e) {
            return 65039 === e
          }, l.BLACK_FLAG_CODE_POINT = r;
          var u = {
            addChars: function(e) {
              if (e) {
                var t;
                this.chars || (this.chars = []);
                var r, i, n = e.length,
                  a = this.chars.length;
                for (t = 0; t < n; t += 1) {
                  for (r = 0, i = !1; r < a;) this.chars[r].style === e[t].style && this.chars[r].fFamily === e[t].fFamily && this.chars[r].ch === e[t].ch && (i = !0), r += 1;
                  i || (this.chars.push(e[t]), a += 1)
                }
              }
            },
            addFonts: function(e, t) {
              if (e) {
                if (this.chars) return this.isLoaded = !0, void(this.fonts = e.list);
                if (!document.body) return this.isLoaded = !0, e.list.forEach((function(e) {
                  e.helper = a(e), e.cache = {}
                })), void(this.fonts = e.list);
                var r, i = e.list,
                  s = i.length,
                  o = s;
                for (r = 0; r < s; r += 1) {
                  var l, u, c = !0;
                  if (i[r].loaded = !1, i[r].monoCase = n(i[r].fFamily, "monospace"), i[r].sansCase = n(i[r].fFamily, "sans-serif"), i[r].fPath) {
                    if ("p" === i[r].fOrigin || 3 === i[r].origin) {
                      if ((l = document.querySelectorAll('style[f-forigin="p"][f-family="' + i[r].fFamily + '"], style[f-origin="3"][f-family="' + i[r].fFamily + '"]')).length > 0 && (c = !1), c) {
                        var h = createTag("style");
                        h.setAttribute("f-forigin", i[r].fOrigin), h.setAttribute("f-origin", i[r].origin), h.setAttribute("f-family", i[r].fFamily), h.type = "text/css", h.innerText = "@font-face {font-family: " + i[r].fFamily + "; font-style: normal; src: url('" + i[r].fPath + "');}", t.appendChild(h)
                      }
                    } else if ("g" === i[r].fOrigin || 1 === i[r].origin) {
                      for (l = document.querySelectorAll('link[f-forigin="g"], link[f-origin="1"]'), u = 0; u < l.length; u += 1) - 1 !== l[u].href.indexOf(i[r].fPath) && (c = !1);
                      if (c) {
                        var p = createTag("link");
                        p.setAttribute("f-forigin", i[r].fOrigin), p.setAttribute("f-origin", i[r].origin), p.type = "text/css", p.rel = "stylesheet", p.href = i[r].fPath, document.body.appendChild(p)
                      }
                    } else if ("t" === i[r].fOrigin || 2 === i[r].origin) {
                      for (l = document.querySelectorAll('script[f-forigin="t"], script[f-origin="2"]'), u = 0; u < l.length; u += 1) i[r].fPath === l[u].src && (c = !1);
                      if (c) {
                        var d = createTag("link");
                        d.setAttribute("f-forigin", i[r].fOrigin), d.setAttribute("f-origin", i[r].origin), d.setAttribute("rel", "stylesheet"), d.setAttribute("href", i[r].fPath), t.appendChild(d)
                      }
                    }
                  } else i[r].loaded = !0, o -= 1;
                  i[r].helper = a(i[r], t), i[r].cache = {}, this.fonts.push(i[r])
                }
                0 === o ? this.isLoaded = !0 : setTimeout(this.checkLoadedFonts.bind(this), 100)
              } else this.isLoaded = !0
            },
            getCharData: function(t, r, i) {
              for (var n = 0, a = this.chars.length; n < a;) {
                if (this.chars[n].ch === t && this.chars[n].style === r && this.chars[n].fFamily === i) return this.chars[n];
                n += 1
              }
              return ("string" == typeof t && 13 !== t.charCodeAt(0) || !t) && console && console.warn && !this._warned && (this._warned = !0, console.warn("Missing character from exported characters list: ", t, r, i)), e
            },
            getFontByName: function(e) {
              for (var t = 0, r = this.fonts.length; t < r;) {
                if (this.fonts[t].fName === e) return this.fonts[t];
                t += 1
              }
              return this.fonts[0]
            },
            measureText: function(e, t, r) {
              var i = this.getFontByName(t),
                n = e;
              if (!i.cache[n]) {
                var a = i.helper;
                if (" " === e) {
                  var s = a.measureText("|" + e + "|"),
                    o = a.measureText("||");
                  i.cache[n] = (s - o) / 100
                } else i.cache[n] = a.measureText(e) / 100
              }
              return i.cache[n] * r
            },
            checkLoadedFonts: function() {
              var e, t, r, i = this.fonts.length,
                n = i;
              for (e = 0; e < i; e += 1) this.fonts[e].loaded ? n -= 1 : "n" === this.fonts[e].fOrigin || 0 === this.fonts[e].origin ? this.fonts[e].loaded = !0 : (t = this.fonts[e].monoCase.node, r = this.fonts[e].monoCase.w, t.offsetWidth !== r ? (n -= 1, this.fonts[e].loaded = !0) : (t = this.fonts[e].sansCase.node, r = this.fonts[e].sansCase.w, t.offsetWidth !== r && (n -= 1, this.fonts[e].loaded = !0)), this.fonts[e].loaded && (this.fonts[e].sansCase.parent.parentNode.removeChild(this.fonts[e].sansCase.parent), this.fonts[e].monoCase.parent.parentNode.removeChild(this.fonts[e].monoCase.parent)));
              0 !== n && Date.now() - this.initTime < 5e3 ? setTimeout(this.checkLoadedFontsBinded, 20) : setTimeout(this.setIsLoadedBinded, 10)
            },
            setIsLoaded: function() {
              this.isLoaded = !0
            }
          };
          return l.prototype = u, l
        }();

        function SlotManager(e) {
          this.animationData = e
        }

        function slotFactory(e) {
          return new SlotManager(e)
        }

        function RenderableElement() {}
        SlotManager.prototype.getProp = function(e) {
          return this.animationData.slots && this.animationData.slots[e.sid] ? Object.assign(e, this.animationData.slots[e.sid].p) : e
        }, RenderableElement.prototype = {
          initRenderable: function() {
            this.isInRange = !1, this.hidden = !1, this.isTransparent = !1, this.renderableComponents = []
          },
          addRenderableComponent: function(e) {
            -1 === this.renderableComponents.indexOf(e) && this.renderableComponents.push(e)
          },
          removeRenderableComponent: function(e) {
            -1 !== this.renderableComponents.indexOf(e) && this.renderableComponents.splice(this.renderableComponents.indexOf(e), 1)
          },
          prepareRenderableFrame: function(e) {
            this.checkLayerLimits(e)
          },
          checkTransparency: function() {
            this.finalTransform.mProp.o.v <= 0 ? !this.isTransparent && this.globalData.renderConfig.hideOnTransparent && (this.isTransparent = !0, this.hide()) : this.isTransparent && (this.isTransparent = !1, this.show())
          },
          checkLayerLimits: function(e) {
            this.data.ip - this.data.st <= e && this.data.op - this.data.st > e ? !0 !== this.isInRange && (this.globalData._mdf = !0, this._mdf = !0, this.isInRange = !0, this.show()) : !1 !== this.isInRange && (this.globalData._mdf = !0, this.isInRange = !1, this.hide())
          },
          renderRenderable: function() {
            var e, t = this.renderableComponents.length;
            for (e = 0; e < t; e += 1) this.renderableComponents[e].renderFrame(this._isFirstFrame)
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
          }, function(e) {
            return blendModeEnums[e] || ""
          }),
          blendModeEnums;

        function SliderEffect(e, t, r) {
          this.p = PropertyFactory.getProp(t, e.v, 0, 0, r)
        }

        function AngleEffect(e, t, r) {
          this.p = PropertyFactory.getProp(t, e.v, 0, 0, r)
        }

        function ColorEffect(e, t, r) {
          this.p = PropertyFactory.getProp(t, e.v, 1, 0, r)
        }

        function PointEffect(e, t, r) {
          this.p = PropertyFactory.getProp(t, e.v, 1, 0, r)
        }

        function LayerIndexEffect(e, t, r) {
          this.p = PropertyFactory.getProp(t, e.v, 0, 0, r)
        }

        function MaskIndexEffect(e, t, r) {
          this.p = PropertyFactory.getProp(t, e.v, 0, 0, r)
        }

        function CheckboxEffect(e, t, r) {
          this.p = PropertyFactory.getProp(t, e.v, 0, 0, r)
        }

        function NoValueEffect() {
          this.p = {}
        }

        function EffectsManager(e, t) {
          var r, i = e.ef || [];
          this.effectElements = [];
          var n, a = i.length;
          for (r = 0; r < a; r += 1) n = new GroupEffect(i[r], t), this.effectElements.push(n)
        }

        function GroupEffect(e, t) {
          this.init(e, t)
        }

        function BaseElement() {}

        function FrameElement() {}

        function FootageElement(e, t, r) {
          this.initFrame(), this.initRenderable(), this.assetData = t.getAssetData(e.refId), this.footageData = t.imageLoader.getAsset(this.assetData), this.initBaseData(e, t, r)
        }

        function AudioElement(e, t, r) {
          this.initFrame(), this.initRenderable(), this.assetData = t.getAssetData(e.refId), this.initBaseData(e, t, r), this._isPlaying = !1, this._canPlay = !1;
          var i = this.globalData.getAssetsPath(this.assetData);
          this.audio = this.globalData.audioController.createAudio(i), this._currentTime = 0, this.globalData.audioController.addAudio(this), this._volumeMultiplier = 1, this._volume = 1, this._previousVolume = null, this.tm = e.tm ? PropertyFactory.getProp(this, e.tm, 0, t.frameRate, this) : {
            _placeholder: !0
          }, this.lv = PropertyFactory.getProp(this, e.au && e.au.lv ? e.au.lv : {
            k: [100]
          }, 1, .01, this)
        }

        function BaseRenderer() {}
        extendPrototype([DynamicPropertyContainer], GroupEffect), GroupEffect.prototype.getValue = GroupEffect.prototype.iterateDynamicProperties, GroupEffect.prototype.init = function(e, t) {
          var r;
          this.data = e, this.effectElements = [], this.initDynamicPropertyContainer(t);
          var i, n = this.data.ef.length,
            a = this.data.ef;
          for (r = 0; r < n; r += 1) {
            switch (i = null, a[r].ty) {
              case 0:
                i = new SliderEffect(a[r], t, this);
                break;
              case 1:
                i = new AngleEffect(a[r], t, this);
                break;
              case 2:
                i = new ColorEffect(a[r], t, this);
                break;
              case 3:
                i = new PointEffect(a[r], t, this);
                break;
              case 4:
              case 7:
                i = new CheckboxEffect(a[r], t, this);
                break;
              case 10:
                i = new LayerIndexEffect(a[r], t, this);
                break;
              case 11:
                i = new MaskIndexEffect(a[r], t, this);
                break;
              case 5:
                i = new EffectsManager(a[r], t, this);
                break;
              default:
                i = new NoValueEffect(a[r], t, this)
            }
            i && this.effectElements.push(i)
          }
        }, BaseElement.prototype = {
          checkMasks: function() {
            if (!this.data.hasMask) return !1;
            for (var e = 0, t = this.data.masksProperties.length; e < t;) {
              if ("n" !== this.data.masksProperties[e].mode && !1 !== this.data.masksProperties[e].cl) return !0;
              e += 1
            }
            return !1
          },
          initExpressions: function() {
            var e = getExpressionInterfaces();
            if (e) {
              var t = e("layer"),
                r = e("effects"),
                i = e("shape"),
                n = e("text"),
                a = e("comp");
              this.layerInterface = t(this), this.data.hasMask && this.maskManager && this.layerInterface.registerMaskInterface(this.maskManager);
              var s = r.createEffectsInterface(this, this.layerInterface);
              this.layerInterface.registerEffectsInterface(s), 0 === this.data.ty || this.data.xt ? this.compInterface = a(this) : 4 === this.data.ty ? (this.layerInterface.shapeInterface = i(this.shapesData, this.itemsData, this.layerInterface), this.layerInterface.content = this.layerInterface.shapeInterface) : 5 === this.data.ty && (this.layerInterface.textInterface = n(this), this.layerInterface.text = this.layerInterface.textInterface)
            }
          },
          setBlendMode: function() {
            var e = getBlendMode(this.data.bm);
            (this.baseElement || this.layerElement).style["mix-blend-mode"] = e
          },
          initBaseData: function(e, t, r) {
            this.globalData = t, this.comp = r, this.data = e, this.layerId = createElementID(), this.data.sr || (this.data.sr = 1), this.effectsManager = new EffectsManager(this.data, this, this.dynamicProperties)
          },
          getType: function() {
            return this.type
          },
          sourceRectAtTime: function() {}
        }, FrameElement.prototype = {
          initFrame: function() {
            this._isFirstFrame = !1, this.dynamicProperties = [], this._mdf = !1
          },
          prepareProperties: function(e, t) {
            var r, i = this.dynamicProperties.length;
            for (r = 0; r < i; r += 1)(t || this._isParent && "transform" === this.dynamicProperties[r].propType) && (this.dynamicProperties[r].getValue(), this.dynamicProperties[r]._mdf && (this.globalData._mdf = !0, this._mdf = !0))
          },
          addDynamicProperty: function(e) {
            -1 === this.dynamicProperties.indexOf(e) && this.dynamicProperties.push(e)
          }
        }, FootageElement.prototype.prepareFrame = function() {}, extendPrototype([RenderableElement, BaseElement, FrameElement], FootageElement), FootageElement.prototype.getBaseElement = function() {
          return null
        }, FootageElement.prototype.renderFrame = function() {}, FootageElement.prototype.destroy = function() {}, FootageElement.prototype.initExpressions = function() {
          var e = getExpressionInterfaces();
          if (e) {
            var t = e("footage");
            this.layerInterface = t(this)
          }
        }, FootageElement.prototype.getFootageData = function() {
          return this.footageData
        }, AudioElement.prototype.prepareFrame = function(e) {
          if (this.prepareRenderableFrame(e, !0), this.prepareProperties(e, !0), this.tm._placeholder) this._currentTime = e / this.data.sr;
          else {
            var t = this.tm.v;
            this._currentTime = t
          }
          this._volume = this.lv.v[0];
          var r = this._volume * this._volumeMultiplier;
          this._previousVolume !== r && (this._previousVolume = r, this.audio.volume(r))
        }, extendPrototype([RenderableElement, BaseElement, FrameElement], AudioElement), AudioElement.prototype.renderFrame = function() {
          this.isInRange && this._canPlay && (this._isPlaying ? (!this.audio.playing() || Math.abs(this._currentTime / this.globalData.frameRate - this.audio.seek()) > .1) && this.audio.seek(this._currentTime / this.globalData.frameRate) : (this.audio.play(), this.audio.seek(this._currentTime / this.globalData.frameRate), this._isPlaying = !0))
        }, AudioElement.prototype.show = function() {}, AudioElement.prototype.hide = function() {
          this.audio.pause(), this._isPlaying = !1
        }, AudioElement.prototype.pause = function() {
          this.audio.pause(), this._isPlaying = !1, this._canPlay = !1
        }, AudioElement.prototype.resume = function() {
          this._canPlay = !0
        }, AudioElement.prototype.setRate = function(e) {
          this.audio.rate(e)
        }, AudioElement.prototype.volume = function(e) {
          this._volumeMultiplier = e, this._previousVolume = e * this._volume, this.audio.volume(this._previousVolume)
        }, AudioElement.prototype.getBaseElement = function() {
          return null
        }, AudioElement.prototype.destroy = function() {}, AudioElement.prototype.sourceRectAtTime = function() {}, AudioElement.prototype.initExpressions = function() {}, BaseRenderer.prototype.checkLayers = function(e) {
          var t, r, i = this.layers.length;
          for (this.completeLayers = !0, t = i - 1; t >= 0; t -= 1) this.elements[t] || (r = this.layers[t]).ip - r.st <= e - this.layers[t].st && r.op - r.st > e - this.layers[t].st && this.buildItem(t), this.completeLayers = !!this.elements[t] && this.completeLayers;
          this.checkPendingElements()
        }, BaseRenderer.prototype.createItem = function(e) {
          switch (e.ty) {
            case 2:
              return this.createImage(e);
            case 0:
              return this.createComp(e);
            case 1:
              return this.createSolid(e);
            case 3:
            default:
              return this.createNull(e);
            case 4:
              return this.createShape(e);
            case 5:
              return this.createText(e);
            case 6:
              return this.createAudio(e);
            case 13:
              return this.createCamera(e);
            case 15:
              return this.createFootage(e)
          }
        }, BaseRenderer.prototype.createCamera = function() {
          throw new Error("You're using a 3d camera. Try the html renderer.")
        }, BaseRenderer.prototype.createAudio = function(e) {
          return new AudioElement(e, this.globalData, this)
        }, BaseRenderer.prototype.createFootage = function(e) {
          return new FootageElement(e, this.globalData, this)
        }, BaseRenderer.prototype.buildAllItems = function() {
          var e, t = this.layers.length;
          for (e = 0; e < t; e += 1) this.buildItem(e);
          this.checkPendingElements()
        }, BaseRenderer.prototype.includeLayers = function(e) {
          var t;
          this.completeLayers = !1;
          var r, i = e.length,
            n = this.layers.length;
          for (t = 0; t < i; t += 1)
            for (r = 0; r < n;) {
              if (this.layers[r].id === e[t].id) {
                this.layers[r] = e[t];
                break
              }
              r += 1
            }
        }, BaseRenderer.prototype.setProjectInterface = function(e) {
          this.globalData.projectInterface = e
        }, BaseRenderer.prototype.initItems = function() {
          this.globalData.progressiveLoad || this.buildAllItems()
        }, BaseRenderer.prototype.buildElementParenting = function(e, t, r) {
          for (var i = this.elements, n = this.layers, a = 0, s = n.length; a < s;) n[a].ind == t && (i[a] && !0 !== i[a] ? (r.push(i[a]), i[a].setAsParent(), void 0 !== n[a].parent ? this.buildElementParenting(e, n[a].parent, r) : e.setHierarchy(r)) : (this.buildItem(a), this.addPendingElement(e))), a += 1
        }, BaseRenderer.prototype.addPendingElement = function(e) {
          this.pendingElements.push(e)
        }, BaseRenderer.prototype.searchExtraCompositions = function(e) {
          var t, r = e.length;
          for (t = 0; t < r; t += 1)
            if (e[t].xt) {
              var i = this.createComp(e[t]);
              i.initExpressions(), this.globalData.projectInterface.registerComposition(i)
            }
        }, BaseRenderer.prototype.getElementById = function(e) {
          var t, r = this.elements.length;
          for (t = 0; t < r; t += 1)
            if (this.elements[t].data.ind === e) return this.elements[t];
          return null
        }, BaseRenderer.prototype.getElementByPath = function(e) {
          var t, r = e.shift();
          if ("number" == typeof r) t = this.elements[r];
          else {
            var i, n = this.elements.length;
            for (i = 0; i < n; i += 1)
              if (this.elements[i].data.nm === r) {
                t = this.elements[i];
                break
              }
          }
          return 0 === e.length ? t : t.getElementByPath(e)
        }, BaseRenderer.prototype.setupGlobalData = function(e, t) {
          this.globalData.fontManager = new FontManager, this.globalData.slotManager = slotFactory(e), this.globalData.fontManager.addChars(e.chars), this.globalData.fontManager.addFonts(e.fonts, t), this.globalData.getAssetData = this.animationItem.getAssetData.bind(this.animationItem), this.globalData.getAssetsPath = this.animationItem.getAssetsPath.bind(this.animationItem), this.globalData.imageLoader = this.animationItem.imagePreloader, this.globalData.audioController = this.animationItem.audioController, this.globalData.frameId = 0, this.globalData.frameRate = e.fr, this.globalData.nm = e.nm, this.globalData.compSize = {
            w: e.w,
            h: e.h
          }
        };
        var effectTypes = {
          TRANSFORM_EFFECT: "transformEFfect"
        };

        function TransformElement() {}

        function MaskElement(e, t, r) {
          this.data = e, this.element = t, this.globalData = r, this.storedData = [], this.masksProperties = this.data.masksProperties || [], this.maskElement = null;
          var i, n, a = this.globalData.defs,
            s = this.masksProperties ? this.masksProperties.length : 0;
          this.viewData = createSizedArray(s), this.solidPath = "";
          var o, l, u, c, h, p, d = this.masksProperties,
            f = 0,
            m = [],
            v = createElementID(),
            g = "clipPath",
            y = "clip-path";
          for (i = 0; i < s; i += 1)
            if (("a" !== d[i].mode && "n" !== d[i].mode || d[i].inv || 100 !== d[i].o.k || d[i].o.x) && (g = "mask", y = "mask"), "s" !== d[i].mode && "i" !== d[i].mode || 0 !== f ? u = null : ((u = createNS("rect")).setAttribute("fill", "#ffffff"), u.setAttribute("width", this.element.comp.data.w || 0), u.setAttribute("height", this.element.comp.data.h || 0), m.push(u)), n = createNS("path"), "n" === d[i].mode) this.viewData[i] = {
              op: PropertyFactory.getProp(this.element, d[i].o, 0, .01, this.element),
              prop: ShapePropertyFactory.getShapeProp(this.element, d[i], 3),
              elem: n,
              lastPath: ""
            }, a.appendChild(n);
            else {
              var b;
              if (f += 1, n.setAttribute("fill", "s" === d[i].mode ? "#000000" : "#ffffff"), n.setAttribute("clip-rule", "nonzero"), 0 !== d[i].x.k ? (g = "mask", y = "mask", p = PropertyFactory.getProp(this.element, d[i].x, 0, null, this.element), b = createElementID(), (c = createNS("filter")).setAttribute("id", b), (h = createNS("feMorphology")).setAttribute("operator", "erode"), h.setAttribute("in", "SourceGraphic"), h.setAttribute("radius", "0"), c.appendChild(h), a.appendChild(c), n.setAttribute("stroke", "s" === d[i].mode ? "#000000" : "#ffffff")) : (h = null, p = null), this.storedData[i] = {
                  elem: n,
                  x: p,
                  expan: h,
                  lastPath: "",
                  lastOperator: "",
                  filterId: b,
                  lastRadius: 0
                }, "i" === d[i].mode) {
                l = m.length;
                var S = createNS("g");
                for (o = 0; o < l; o += 1) S.appendChild(m[o]);
                var x = createNS("mask");
                x.setAttribute("mask-type", "alpha"), x.setAttribute("id", v + "_" + f), x.appendChild(n), a.appendChild(x), S.setAttribute("mask", "url(" + getLocationHref() + "#" + v + "_" + f + ")"), m.length = 0, m.push(S)
              } else m.push(n);
              d[i].inv && !this.solidPath && (this.solidPath = this.createLayerSolidPath()), this.viewData[i] = {
                elem: n,
                lastPath: "",
                op: PropertyFactory.getProp(this.element, d[i].o, 0, .01, this.element),
                prop: ShapePropertyFactory.getShapeProp(this.element, d[i], 3),
                invRect: u
              }, this.viewData[i].prop.k || this.drawPath(d[i], this.viewData[i].prop.v, this.viewData[i])
            } for (this.maskElement = createNS(g), s = m.length, i = 0; i < s; i += 1) this.maskElement.appendChild(m[i]);
          f > 0 && (this.maskElement.setAttribute("id", v), this.element.maskedElement.setAttribute(y, "url(" + getLocationHref() + "#" + v + ")"), a.appendChild(this.maskElement)), this.viewData.length && this.element.addRenderableComponent(this)
        }
        TransformElement.prototype = {
          initTransform: function() {
            var e = new Matrix;
            this.finalTransform = {
              mProp: this.data.ks ? TransformPropertyFactory.getTransformProperty(this, this.data.ks, this) : {
                o: 0
              },
              _matMdf: !1,
              _localMatMdf: !1,
              _opMdf: !1,
              mat: e,
              localMat: e,
              localOpacity: 1
            }, this.data.ao && (this.finalTransform.mProp.autoOriented = !0), this.data.ty
          },
          renderTransform: function() {
            if (this.finalTransform._opMdf = this.finalTransform.mProp.o._mdf || this._isFirstFrame, this.finalTransform._matMdf = this.finalTransform.mProp._mdf || this._isFirstFrame, this.hierarchy) {
              var e, t = this.finalTransform.mat,
                r = 0,
                i = this.hierarchy.length;
              if (!this.finalTransform._matMdf)
                for (; r < i;) {
                  if (this.hierarchy[r].finalTransform.mProp._mdf) {
                    this.finalTransform._matMdf = !0;
                    break
                  }
                  r += 1
                }
              if (this.finalTransform._matMdf)
                for (e = this.finalTransform.mProp.v.props, t.cloneFromProps(e), r = 0; r < i; r += 1) t.multiply(this.hierarchy[r].finalTransform.mProp.v)
            }
            this.finalTransform._matMdf && (this.finalTransform._localMatMdf = this.finalTransform._matMdf), this.finalTransform._opMdf && (this.finalTransform.localOpacity = this.finalTransform.mProp.o.v)
          },
          renderLocalTransform: function() {
            if (this.localTransforms) {
              var e = 0,
                t = this.localTransforms.length;
              if (this.finalTransform._localMatMdf = this.finalTransform._matMdf, !this.finalTransform._localMatMdf || !this.finalTransform._opMdf)
                for (; e < t;) this.localTransforms[e]._mdf && (this.finalTransform._localMatMdf = !0), this.localTransforms[e]._opMdf && !this.finalTransform._opMdf && (this.finalTransform.localOpacity = this.finalTransform.mProp.o.v, this.finalTransform._opMdf = !0), e += 1;
              if (this.finalTransform._localMatMdf) {
                var r = this.finalTransform.localMat;
                for (this.localTransforms[0].matrix.clone(r), e = 1; e < t; e += 1) {
                  var i = this.localTransforms[e].matrix;
                  r.multiply(i)
                }
                r.multiply(this.finalTransform.mat)
              }
              if (this.finalTransform._opMdf) {
                var n = this.finalTransform.localOpacity;
                for (e = 0; e < t; e += 1) n *= .01 * this.localTransforms[e].opacity;
                this.finalTransform.localOpacity = n
              }
            }
          },
          searchEffectTransforms: function() {
            if (this.renderableEffectsManager) {
              var e = this.renderableEffectsManager.getEffects(effectTypes.TRANSFORM_EFFECT);
              if (e.length) {
                this.localTransforms = [], this.finalTransform.localMat = new Matrix;
                var t = 0,
                  r = e.length;
                for (t = 0; t < r; t += 1) this.localTransforms.push(e[t])
              }
            }
          },
          globalToLocal: function(e) {
            var t = [];
            t.push(this.finalTransform);
            for (var r, i = !0, n = this.comp; i;) n.finalTransform ? (n.data.hasMask && t.splice(0, 0, n.finalTransform), n = n.comp) : i = !1;
            var a, s = t.length;
            for (r = 0; r < s; r += 1) a = t[r].mat.applyToPointArray(0, 0, 0), e = [e[0] - a[0], e[1] - a[1], 0];
            return e
          },
          mHelper: new Matrix
        }, MaskElement.prototype.getMaskProperty = function(e) {
          return this.viewData[e].prop
        }, MaskElement.prototype.renderFrame = function(e) {
          var t, r = this.element.finalTransform.mat,
            i = this.masksProperties.length;
          for (t = 0; t < i; t += 1)
            if ((this.viewData[t].prop._mdf || e) && this.drawPath(this.masksProperties[t], this.viewData[t].prop.v, this.viewData[t]), (this.viewData[t].op._mdf || e) && this.viewData[t].elem.setAttribute("fill-opacity", this.viewData[t].op.v), "n" !== this.masksProperties[t].mode && (this.viewData[t].invRect && (this.element.finalTransform.mProp._mdf || e) && this.viewData[t].invRect.setAttribute("transform", r.getInverseMatrix().to2dCSS()), this.storedData[t].x && (this.storedData[t].x._mdf || e))) {
              var n = this.storedData[t].expan;
              this.storedData[t].x.v < 0 ? ("erode" !== this.storedData[t].lastOperator && (this.storedData[t].lastOperator = "erode", this.storedData[t].elem.setAttribute("filter", "url(" + getLocationHref() + "#" + this.storedData[t].filterId + ")")), n.setAttribute("radius", -this.storedData[t].x.v)) : ("dilate" !== this.storedData[t].lastOperator && (this.storedData[t].lastOperator = "dilate", this.storedData[t].elem.setAttribute("filter", null)), this.storedData[t].elem.setAttribute("stroke-width", 2 * this.storedData[t].x.v))
            }
        }, MaskElement.prototype.getMaskelement = function() {
          return this.maskElement
        }, MaskElement.prototype.createLayerSolidPath = function() {
          var e = "M0,0 ";
          return e += " h" + this.globalData.compSize.w, e += " v" + this.globalData.compSize.h, (e += " h-" + this.globalData.compSize.w) + " v-" + this.globalData.compSize.h + " "
        }, MaskElement.prototype.drawPath = function(e, t, r) {
          var i, n, a = " M" + t.v[0][0] + "," + t.v[0][1];
          for (n = t._length, i = 1; i < n; i += 1) a += " C" + t.o[i - 1][0] + "," + t.o[i - 1][1] + " " + t.i[i][0] + "," + t.i[i][1] + " " + t.v[i][0] + "," + t.v[i][1];
          if (t.c && n > 1 && (a += " C" + t.o[i - 1][0] + "," + t.o[i - 1][1] + " " + t.i[0][0] + "," + t.i[0][1] + " " + t.v[0][0] + "," + t.v[0][1]), r.lastPath !== a) {
            var s = "";
            r.elem && (t.c && (s = e.inv ? this.solidPath + a : a), r.elem.setAttribute("d", s)), r.lastPath = a
          }
        }, MaskElement.prototype.destroy = function() {
          this.element = null, this.globalData = null, this.maskElement = null, this.data = null, this.masksProperties = null
        };
        var filtersFactory = {
            createFilter: function(e, t) {
              var r = createNS("filter");
              return r.setAttribute("id", e), !0 !== t && (r.setAttribute("filterUnits", "objectBoundingBox"), r.setAttribute("x", "0%"), r.setAttribute("y", "0%"), r.setAttribute("width", "100%"), r.setAttribute("height", "100%")), r
            },
            createAlphaToLuminanceFilter: function() {
              var e = createNS("feColorMatrix");
              return e.setAttribute("type", "matrix"), e.setAttribute("color-interpolation-filters", "sRGB"), e.setAttribute("values", "0 0 0 1 0  0 0 0 1 0  0 0 0 1 0  0 0 0 1 1"), e
            }
          },
          featureSupport = function() {
            var e = {
              maskType: !0,
              svgLumaHidden: !0,
              offscreenCanvas: "undefined" != typeof OffscreenCanvas
            };
            return (/MSIE 10/i.test(navigator.userAgent) || /MSIE 9/i.test(navigator.userAgent) || /rv:11.0/i.test(navigator.userAgent) || /Edge\/\d./i.test(navigator.userAgent)) && (e.maskType = !1), /firefox/i.test(navigator.userAgent) && (e.svgLumaHidden = !1), e
          }(),
          registeredEffects$1 = {},
          idPrefix = "filter_result_";

        function SVGEffects(e) {
          var t, r, i = "SourceGraphic",
            n = e.data.ef ? e.data.ef.length : 0,
            a = createElementID(),
            s = filtersFactory.createFilter(a, !0),
            o = 0;
          for (this.filters = [], t = 0; t < n; t += 1) {
            r = null;
            var l = e.data.ef[t].ty;
            registeredEffects$1[l] && (r = new(0, registeredEffects$1[l].effect)(s, e.effectsManager.effectElements[t], e, idPrefix + o, i), i = idPrefix + o, registeredEffects$1[l].countsAsEffect && (o += 1)), r && this.filters.push(r)
          }
          o && (e.globalData.defs.appendChild(s), e.layerElement.setAttribute("filter", "url(" + getLocationHref() + "#" + a + ")")), this.filters.length && e.addRenderableComponent(this)
        }

        function registerEffect$1(e, t, r) {
          registeredEffects$1[e] = {
            effect: t,
            countsAsEffect: r
          }
        }

        function SVGBaseElement() {}

        function HierarchyElement() {}

        function RenderableDOMElement() {}

        function IImageElement(e, t, r) {
          this.assetData = t.getAssetData(e.refId), this.assetData && this.assetData.sid && (this.assetData = t.slotManager.getProp(this.assetData)), this.initElement(e, t, r), this.sourceRect = {
            top: 0,
            left: 0,
            width: this.assetData.w,
            height: this.assetData.h
          }
        }

        function ProcessedElement(e, t) {
          this.elem = e, this.pos = t
        }

        function IShapeElement() {}
        SVGEffects.prototype.renderFrame = function(e) {
          var t, r = this.filters.length;
          for (t = 0; t < r; t += 1) this.filters[t].renderFrame(e)
        }, SVGEffects.prototype.getEffects = function(e) {
          var t, r = this.filters.length,
            i = [];
          for (t = 0; t < r; t += 1) this.filters[t].type === e && i.push(this.filters[t]);
          return i
        }, SVGBaseElement.prototype = {
          initRendererElement: function() {
            this.layerElement = createNS("g")
          },
          createContainerElements: function() {
            this.matteElement = createNS("g"), this.transformedElement = this.layerElement, this.maskedElement = this.layerElement, this._sizeChanged = !1;
            var e = null;
            if (this.data.td) {
              this.matteMasks = {};
              var t = createNS("g");
              t.setAttribute("id", this.layerId), t.appendChild(this.layerElement), e = t, this.globalData.defs.appendChild(t)
            } else this.data.tt ? (this.matteElement.appendChild(this.layerElement), e = this.matteElement, this.baseElement = this.matteElement) : this.baseElement = this.layerElement;
            if (this.data.ln && this.layerElement.setAttribute("id", this.data.ln), this.data.cl && this.layerElement.setAttribute("class", this.data.cl), 0 === this.data.ty && !this.data.hd) {
              var r = createNS("clipPath"),
                i = createNS("path");
              i.setAttribute("d", "M0,0 L" + this.data.w + ",0 L" + this.data.w + "," + this.data.h + " L0," + this.data.h + "z");
              var n = createElementID();
              if (r.setAttribute("id", n), r.appendChild(i), this.globalData.defs.appendChild(r), this.checkMasks()) {
                var a = createNS("g");
                a.setAttribute("clip-path", "url(" + getLocationHref() + "#" + n + ")"), a.appendChild(this.layerElement), this.transformedElement = a, e ? e.appendChild(this.transformedElement) : this.baseElement = this.transformedElement
              } else this.layerElement.setAttribute("clip-path", "url(" + getLocationHref() + "#" + n + ")")
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
          getMatte: function(e) {
            if (this.matteMasks || (this.matteMasks = {}), !this.matteMasks[e]) {
              var t, r, i, n, a = this.layerId + "_" + e;
              if (1 === e || 3 === e) {
                var s = createNS("mask");
                s.setAttribute("id", a), s.setAttribute("mask-type", 3 === e ? "luminance" : "alpha"), (i = createNS("use")).setAttributeNS("http://www.w3.org/1999/xlink", "href", "#" + this.layerId), s.appendChild(i), this.globalData.defs.appendChild(s), featureSupport.maskType || 1 !== e || (s.setAttribute("mask-type", "luminance"), t = createElementID(), r = filtersFactory.createFilter(t), this.globalData.defs.appendChild(r), r.appendChild(filtersFactory.createAlphaToLuminanceFilter()), (n = createNS("g")).appendChild(i), s.appendChild(n), n.setAttribute("filter", "url(" + getLocationHref() + "#" + t + ")"))
              } else if (2 === e) {
                var o = createNS("mask");
                o.setAttribute("id", a), o.setAttribute("mask-type", "alpha");
                var l = createNS("g");
                o.appendChild(l), t = createElementID(), r = filtersFactory.createFilter(t);
                var u = createNS("feComponentTransfer");
                u.setAttribute("in", "SourceGraphic"), r.appendChild(u);
                var c = createNS("feFuncA");
                c.setAttribute("type", "table"), c.setAttribute("tableValues", "1.0 0.0"), u.appendChild(c), this.globalData.defs.appendChild(r);
                var h = createNS("rect");
                h.setAttribute("width", this.comp.data.w), h.setAttribute("height", this.comp.data.h), h.setAttribute("x", "0"), h.setAttribute("y", "0"), h.setAttribute("fill", "#ffffff"), h.setAttribute("opacity", "0"), l.setAttribute("filter", "url(" + getLocationHref() + "#" + t + ")"), l.appendChild(h), (i = createNS("use")).setAttributeNS("http://www.w3.org/1999/xlink", "href", "#" + this.layerId), l.appendChild(i), featureSupport.maskType || (o.setAttribute("mask-type", "luminance"), r.appendChild(filtersFactory.createAlphaToLuminanceFilter()), n = createNS("g"), l.appendChild(h), n.appendChild(this.layerElement), l.appendChild(n)), this.globalData.defs.appendChild(o)
              }
              this.matteMasks[e] = a
            }
            return this.matteMasks[e]
          },
          setMatte: function(e) {
            this.matteElement && this.matteElement.setAttribute("mask", "url(" + getLocationHref() + "#" + e + ")")
          }
        }, HierarchyElement.prototype = {
          initHierarchy: function() {
            this.hierarchy = [], this._isParent = !1, this.checkParenting()
          },
          setHierarchy: function(e) {
            this.hierarchy = e
          },
          setAsParent: function() {
            this._isParent = !0
          },
          checkParenting: function() {
            void 0 !== this.data.parent && this.comp.buildElementParenting(this, this.data.parent, [])
          }
        }, extendPrototype([RenderableElement, createProxyFunction({
          initElement: function(e, t, r) {
            this.initFrame(), this.initBaseData(e, t, r), this.initTransform(e, t, r), this.initHierarchy(), this.initRenderable(), this.initRendererElement(), this.createContainerElements(), this.createRenderableComponents(), this.createContent(), this.hide()
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
          prepareFrame: function(e) {
            this._mdf = !1, this.prepareRenderableFrame(e), this.prepareProperties(e, this.isInRange), this.checkTransparency()
          },
          destroy: function() {
            this.innerElem = null, this.destroyBaseElement()
          }
        })], RenderableDOMElement), extendPrototype([BaseElement, TransformElement, SVGBaseElement, HierarchyElement, FrameElement, RenderableDOMElement], IImageElement), IImageElement.prototype.createContent = function() {
          var e = this.globalData.getAssetsPath(this.assetData);
          this.innerElem = createNS("image"), this.innerElem.setAttribute("width", this.assetData.w + "px"), this.innerElem.setAttribute("height", this.assetData.h + "px"), this.innerElem.setAttribute("preserveAspectRatio", this.assetData.pr || this.globalData.renderConfig.imagePreserveAspectRatio), this.innerElem.setAttributeNS("http://www.w3.org/1999/xlink", "href", e), this.layerElement.appendChild(this.innerElem)
        }, IImageElement.prototype.sourceRectAtTime = function() {
          return this.sourceRect
        }, IShapeElement.prototype = {
          addShapeToModifiers: function(e) {
            var t, r = this.shapeModifiers.length;
            for (t = 0; t < r; t += 1) this.shapeModifiers[t].addShape(e)
          },
          isShapeInAnimatedModifiers: function(e) {
            for (var t = this.shapeModifiers.length; 0 < t;)
              if (this.shapeModifiers[0].isAnimatedWithShape(e)) return !0;
            return !1
          },
          renderModifiers: function() {
            if (this.shapeModifiers.length) {
              var e, t = this.shapes.length;
              for (e = 0; e < t; e += 1) this.shapes[e].sh.reset();
              for (e = (t = this.shapeModifiers.length) - 1; e >= 0 && !this.shapeModifiers[e].processShapes(this._isFirstFrame); e -= 1);
            }
          },
          searchProcessedElement: function(e) {
            for (var t = this.processedElements, r = 0, i = t.length; r < i;) {
              if (t[r].elem === e) return t[r].pos;
              r += 1
            }
            return 0
          },
          addProcessedElement: function(e, t) {
            for (var r = this.processedElements, i = r.length; i;)
              if (r[i -= 1].elem === e) return void(r[i].pos = t);
            r.push(new ProcessedElement(e, t))
          },
          prepareFrame: function(e) {
            this.prepareRenderableFrame(e), this.prepareProperties(e, this.isInRange)
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

        function SVGShapeData(e, t, r) {
          this.caches = [], this.styles = [], this.transformers = e, this.lStr = "", this.sh = r, this.lvl = t, this._isAnimated = !!r.k;
          for (var i = 0, n = e.length; i < n;) {
            if (e[i].mProps.dynamicProperties.length) {
              this._isAnimated = !0;
              break
            }
            i += 1
          }
        }

        function SVGStyleData(e, t) {
          this.data = e, this.type = e.ty, this.d = "", this.lvl = t, this._mdf = !1, this.closed = !0 === e.hd, this.pElem = createNS("path"), this.msElem = null
        }

        function DashProperty(e, t, r, i) {
          var n;
          this.elem = e, this.frameId = -1, this.dataProps = createSizedArray(t.length), this.renderer = r, this.k = !1, this.dashStr = "", this.dashArray = createTypedArray("float32", t.length ? t.length - 1 : 0), this.dashoffset = createTypedArray("float32", 1), this.initDynamicPropertyContainer(i);
          var a, s = t.length || 0;
          for (n = 0; n < s; n += 1) a = PropertyFactory.getProp(e, t[n].v, 0, 0, this), this.k = a.k || this.k, this.dataProps[n] = {
            n: t[n].n,
            p: a
          };
          this.k || this.getValue(!0), this._isAnimated = this.k
        }

        function SVGStrokeStyleData(e, t, r) {
          this.initDynamicPropertyContainer(e), this.getValue = this.iterateDynamicProperties, this.o = PropertyFactory.getProp(e, t.o, 0, .01, this), this.w = PropertyFactory.getProp(e, t.w, 0, null, this), this.d = new DashProperty(e, t.d || {}, "svg", this), this.c = PropertyFactory.getProp(e, t.c, 1, 255, this), this.style = r, this._isAnimated = !!this._isAnimated
        }

        function SVGFillStyleData(e, t, r) {
          this.initDynamicPropertyContainer(e), this.getValue = this.iterateDynamicProperties, this.o = PropertyFactory.getProp(e, t.o, 0, .01, this), this.c = PropertyFactory.getProp(e, t.c, 1, 255, this), this.style = r
        }

        function SVGNoStyleData(e, t, r) {
          this.initDynamicPropertyContainer(e), this.getValue = this.iterateDynamicProperties, this.style = r
        }

        function GradientProperty(e, t, r) {
          this.data = t, this.c = createTypedArray("uint8c", 4 * t.p);
          var i = t.k.k[0].s ? t.k.k[0].s.length - 4 * t.p : t.k.k.length - 4 * t.p;
          this.o = createTypedArray("float32", i), this._cmdf = !1, this._omdf = !1, this._collapsable = this.checkCollapsable(), this._hasOpacity = i, this.initDynamicPropertyContainer(r), this.prop = PropertyFactory.getProp(e, t.k, 1, null, this), this.k = this.prop.k, this.getValue(!0)
        }

        function SVGGradientFillStyleData(e, t, r) {
          this.initDynamicPropertyContainer(e), this.getValue = this.iterateDynamicProperties, this.initGradientData(e, t, r)
        }

        function SVGGradientStrokeStyleData(e, t, r) {
          this.initDynamicPropertyContainer(e), this.getValue = this.iterateDynamicProperties, this.w = PropertyFactory.getProp(e, t.w, 0, null, this), this.d = new DashProperty(e, t.d || {}, "svg", this), this.initGradientData(e, t, r), this._isAnimated = !!this._isAnimated
        }

        function ShapeGroupData() {
          this.it = [], this.prevViewData = [], this.gr = createNS("g")
        }

        function SVGTransformData(e, t, r) {
          this.transform = {
            mProps: e,
            op: t,
            container: r
          }, this.elements = [], this._isAnimated = this.transform.mProps.dynamicProperties.length || this.transform.op.effectsSequence.length
        }
        SVGShapeData.prototype.setAsAnimated = function() {
          this._isAnimated = !0
        }, SVGStyleData.prototype.reset = function() {
          this.d = "", this._mdf = !1
        }, DashProperty.prototype.getValue = function(e) {
          if ((this.elem.globalData.frameId !== this.frameId || e) && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf = this._mdf || e, this._mdf)) {
            var t = 0,
              r = this.dataProps.length;
            for ("svg" === this.renderer && (this.dashStr = ""), t = 0; t < r; t += 1) "o" !== this.dataProps[t].n ? "svg" === this.renderer ? this.dashStr += " " + this.dataProps[t].p.v : this.dashArray[t] = this.dataProps[t].p.v : this.dashoffset[0] = this.dataProps[t].p.v
          }
        }, extendPrototype([DynamicPropertyContainer], DashProperty), extendPrototype([DynamicPropertyContainer], SVGStrokeStyleData), extendPrototype([DynamicPropertyContainer], SVGFillStyleData), extendPrototype([DynamicPropertyContainer], SVGNoStyleData), GradientProperty.prototype.comparePoints = function(e, t) {
          for (var r = 0, i = this.o.length / 2; r < i;) {
            if (Math.abs(e[4 * r] - e[4 * t + 2 * r]) > .01) return !1;
            r += 1
          }
          return !0
        }, GradientProperty.prototype.checkCollapsable = function() {
          if (this.o.length / 2 != this.c.length / 4) return !1;
          if (this.data.k.k[0].s)
            for (var e = 0, t = this.data.k.k.length; e < t;) {
              if (!this.comparePoints(this.data.k.k[e].s, this.data.p)) return !1;
              e += 1
            } else if (!this.comparePoints(this.data.k.k, this.data.p)) return !1;
          return !0
        }, GradientProperty.prototype.getValue = function(e) {
          if (this.prop.getValue(), this._mdf = !1, this._cmdf = !1, this._omdf = !1, this.prop._mdf || e) {
            var t, r, i, n = 4 * this.data.p;
            for (t = 0; t < n; t += 1) r = t % 4 == 0 ? 100 : 255, i = Math.round(this.prop.v[t] * r), this.c[t] !== i && (this.c[t] = i, this._cmdf = !e);
            if (this.o.length)
              for (n = this.prop.v.length, t = 4 * this.data.p; t < n; t += 1) r = t % 2 == 0 ? 100 : 1, i = t % 2 == 0 ? Math.round(100 * this.prop.v[t]) : this.prop.v[t], this.o[t - 4 * this.data.p] !== i && (this.o[t - 4 * this.data.p] = i, this._omdf = !e);
            this._mdf = !e
          }
        }, extendPrototype([DynamicPropertyContainer], GradientProperty), SVGGradientFillStyleData.prototype.initGradientData = function(e, t, r) {
          this.o = PropertyFactory.getProp(e, t.o, 0, .01, this), this.s = PropertyFactory.getProp(e, t.s, 1, null, this), this.e = PropertyFactory.getProp(e, t.e, 1, null, this), this.h = PropertyFactory.getProp(e, t.h || {
            k: 0
          }, 0, .01, this), this.a = PropertyFactory.getProp(e, t.a || {
            k: 0
          }, 0, degToRads, this), this.g = new GradientProperty(e, t.g, this), this.style = r, this.stops = [], this.setGradientData(r.pElem, t), this.setGradientOpacity(t, r), this._isAnimated = !!this._isAnimated
        }, SVGGradientFillStyleData.prototype.setGradientData = function(e, t) {
          var r = createElementID(),
            i = createNS(1 === t.t ? "linearGradient" : "radialGradient");
          i.setAttribute("id", r), i.setAttribute("spreadMethod", "pad"), i.setAttribute("gradientUnits", "userSpaceOnUse");
          var n, a, s, o = [];
          for (s = 4 * t.g.p, a = 0; a < s; a += 4) n = createNS("stop"), i.appendChild(n), o.push(n);
          e.setAttribute("gf" === t.ty ? "fill" : "stroke", "url(" + getLocationHref() + "#" + r + ")"), this.gf = i, this.cst = o
        }, SVGGradientFillStyleData.prototype.setGradientOpacity = function(e, t) {
          if (this.g._hasOpacity && !this.g._collapsable) {
            var r, i, n, a = createNS("mask"),
              s = createNS("path");
            a.appendChild(s);
            var o = createElementID(),
              l = createElementID();
            a.setAttribute("id", l);
            var u = createNS(1 === e.t ? "linearGradient" : "radialGradient");
            u.setAttribute("id", o), u.setAttribute("spreadMethod", "pad"), u.setAttribute("gradientUnits", "userSpaceOnUse"), n = e.g.k.k[0].s ? e.g.k.k[0].s.length : e.g.k.k.length;
            var c = this.stops;
            for (i = 4 * e.g.p; i < n; i += 2)(r = createNS("stop")).setAttribute("stop-color", "rgb(255,255,255)"), u.appendChild(r), c.push(r);
            s.setAttribute("gf" === e.ty ? "fill" : "stroke", "url(" + getLocationHref() + "#" + o + ")"), "gs" === e.ty && (s.setAttribute("stroke-linecap", lineCapEnum[e.lc || 2]), s.setAttribute("stroke-linejoin", lineJoinEnum[e.lj || 2]), 1 === e.lj && s.setAttribute("stroke-miterlimit", e.ml)), this.of = u, this.ms = a, this.ost = c, this.maskId = l, t.msElem = s
          }
        }, extendPrototype([DynamicPropertyContainer], SVGGradientFillStyleData), extendPrototype([SVGGradientFillStyleData, DynamicPropertyContainer], SVGGradientStrokeStyleData);
        var buildShapeString = function(e, t, r, i) {
            if (0 === t) return "";
            var n, a = e.o,
              s = e.i,
              o = e.v,
              l = " M" + i.applyToPointStringified(o[0][0], o[0][1]);
            for (n = 1; n < t; n += 1) l += " C" + i.applyToPointStringified(a[n - 1][0], a[n - 1][1]) + " " + i.applyToPointStringified(s[n][0], s[n][1]) + " " + i.applyToPointStringified(o[n][0], o[n][1]);
            return r && t && (l += " C" + i.applyToPointStringified(a[n - 1][0], a[n - 1][1]) + " " + i.applyToPointStringified(s[0][0], s[0][1]) + " " + i.applyToPointStringified(o[0][0], o[0][1]), l += "z"), l
          },
          SVGElementsRenderer = function() {
            var e = new Matrix,
              t = new Matrix;

            function r(e, t, r) {
              (r || t.transform.op._mdf) && t.transform.container.setAttribute("opacity", t.transform.op.v), (r || t.transform.mProps._mdf) && t.transform.container.setAttribute("transform", t.transform.mProps.v.to2dCSS())
            }

            function i() {}

            function n(r, i, n) {
              var a, s, o, l, u, c, h, p, d, f, m = i.styles.length,
                v = i.lvl;
              for (c = 0; c < m; c += 1) {
                if (l = i.sh._mdf || n, i.styles[c].lvl < v) {
                  for (p = t.reset(), d = v - i.styles[c].lvl, f = i.transformers.length - 1; !l && d > 0;) l = i.transformers[f].mProps._mdf || l, d -= 1, f -= 1;
                  if (l)
                    for (d = v - i.styles[c].lvl, f = i.transformers.length - 1; d > 0;) p.multiply(i.transformers[f].mProps.v), d -= 1, f -= 1
                } else p = e;
                if (s = (h = i.sh.paths)._length, l) {
                  for (o = "", a = 0; a < s; a += 1)(u = h.shapes[a]) && u._length && (o += buildShapeString(u, u._length, u.c, p));
                  i.caches[c] = o
                } else o = i.caches[c];
                i.styles[c].d += !0 === r.hd ? "" : o, i.styles[c]._mdf = l || i.styles[c]._mdf
              }
            }

            function a(e, t, r) {
              var i = t.style;
              (t.c._mdf || r) && i.pElem.setAttribute("fill", "rgb(" + bmFloor(t.c.v[0]) + "," + bmFloor(t.c.v[1]) + "," + bmFloor(t.c.v[2]) + ")"), (t.o._mdf || r) && i.pElem.setAttribute("fill-opacity", t.o.v)
            }

            function s(e, t, r) {
              o(e, t, r), l(0, t, r)
            }

            function o(e, t, r) {
              var i, n, a, s, o, l = t.gf,
                u = t.g._hasOpacity,
                c = t.s.v,
                h = t.e.v;
              if (t.o._mdf || r) {
                var p = "gf" === e.ty ? "fill-opacity" : "stroke-opacity";
                t.style.pElem.setAttribute(p, t.o.v)
              }
              if (t.s._mdf || r) {
                var d = 1 === e.t ? "x1" : "cx",
                  f = "x1" === d ? "y1" : "cy";
                l.setAttribute(d, c[0]), l.setAttribute(f, c[1]), u && !t.g._collapsable && (t.of.setAttribute(d, c[0]), t.of.setAttribute(f, c[1]))
              }
              if (t.g._cmdf || r) {
                i = t.cst;
                var m = t.g.c;
                for (a = i.length, n = 0; n < a; n += 1)(s = i[n]).setAttribute("offset", m[4 * n] + "%"), s.setAttribute("stop-color", "rgb(" + m[4 * n + 1] + "," + m[4 * n + 2] + "," + m[4 * n + 3] + ")")
              }
              if (u && (t.g._omdf || r)) {
                var v = t.g.o;
                for (a = (i = t.g._collapsable ? t.cst : t.ost).length, n = 0; n < a; n += 1) s = i[n], t.g._collapsable || s.setAttribute("offset", v[2 * n] + "%"), s.setAttribute("stop-opacity", v[2 * n + 1])
              }
              if (1 === e.t)(t.e._mdf || r) && (l.setAttribute("x2", h[0]), l.setAttribute("y2", h[1]), u && !t.g._collapsable && (t.of.setAttribute("x2", h[0]), t.of.setAttribute("y2", h[1])));
              else if ((t.s._mdf || t.e._mdf || r) && (o = Math.sqrt(Math.pow(c[0] - h[0], 2) + Math.pow(c[1] - h[1], 2)), l.setAttribute("r", o), u && !t.g._collapsable && t.of.setAttribute("r", o)), t.e._mdf || t.h._mdf || t.a._mdf || r) {
                o || (o = Math.sqrt(Math.pow(c[0] - h[0], 2) + Math.pow(c[1] - h[1], 2)));
                var g = Math.atan2(h[1] - c[1], h[0] - c[0]),
                  y = t.h.v;
                y >= 1 ? y = .99 : y <= -1 && (y = -.99);
                var b = o * y,
                  S = Math.cos(g + t.a.v) * b + c[0],
                  x = Math.sin(g + t.a.v) * b + c[1];
                l.setAttribute("fx", S), l.setAttribute("fy", x), u && !t.g._collapsable && (t.of.setAttribute("fx", S), t.of.setAttribute("fy", x))
              }
            }

            function l(e, t, r) {
              var i = t.style,
                n = t.d;
              n && (n._mdf || r) && n.dashStr && (i.pElem.setAttribute("stroke-dasharray", n.dashStr), i.pElem.setAttribute("stroke-dashoffset", n.dashoffset[0])), t.c && (t.c._mdf || r) && i.pElem.setAttribute("stroke", "rgb(" + bmFloor(t.c.v[0]) + "," + bmFloor(t.c.v[1]) + "," + bmFloor(t.c.v[2]) + ")"), (t.o._mdf || r) && i.pElem.setAttribute("stroke-opacity", t.o.v), (t.w._mdf || r) && (i.pElem.setAttribute("stroke-width", t.w.v), i.msElem && i.msElem.setAttribute("stroke-width", t.w.v))
            }
            return {
              createRenderFunction: function(e) {
                switch (e.ty) {
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
                    return n;
                  case "tr":
                    return r;
                  case "no":
                    return i;
                  default:
                    return null
                }
              }
            }
          }();

        function SVGShapeElement(e, t, r) {
          this.shapes = [], this.shapesData = e.shapes, this.stylesList = [], this.shapeModifiers = [], this.itemsData = [], this.processedElements = [], this.animatedContents = [], this.initElement(e, t, r), this.prevViewData = []
        }

        function LetterProps(e, t, r, i, n, a) {
          this.o = e, this.sw = t, this.sc = r, this.fc = i, this.m = n, this.p = a, this._mdf = {
            o: !0,
            sw: !!t,
            sc: !!r,
            fc: !!i,
            m: !0,
            p: !0
          }
        }

        function TextProperty(e, t) {
          this._frameId = initialDefaultFrame, this.pv = "", this.v = "", this.kf = !1, this._isFirstFrame = !0, this._mdf = !1, t.d && t.d.sid && (t.d = e.globalData.slotManager.getProp(t.d)), this.data = t, this.elem = e, this.comp = this.elem.comp, this.keysIndex = 0, this.canResize = !1, this.minimumFontSize = 1, this.effectsSequence = [], this.currentData = {
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
          var e, t, r, i, n = this.shapes.length,
            a = this.stylesList.length,
            s = [],
            o = !1;
          for (r = 0; r < a; r += 1) {
            for (i = this.stylesList[r], o = !1, s.length = 0, e = 0; e < n; e += 1) - 1 !== (t = this.shapes[e]).styles.indexOf(i) && (s.push(t), o = t._isAnimated || o);
            s.length > 1 && o && this.setShapesAsAnimated(s)
          }
        }, SVGShapeElement.prototype.setShapesAsAnimated = function(e) {
          var t, r = e.length;
          for (t = 0; t < r; t += 1) e[t].setAsAnimated()
        }, SVGShapeElement.prototype.createStyleElement = function(e, t) {
          var r, i = new SVGStyleData(e, t),
            n = i.pElem;
          return "st" === e.ty ? r = new SVGStrokeStyleData(this, e, i) : "fl" === e.ty ? r = new SVGFillStyleData(this, e, i) : "gf" === e.ty || "gs" === e.ty ? (r = new("gf" === e.ty ? SVGGradientFillStyleData : SVGGradientStrokeStyleData)(this, e, i), this.globalData.defs.appendChild(r.gf), r.maskId && (this.globalData.defs.appendChild(r.ms), this.globalData.defs.appendChild(r.of), n.setAttribute("mask", "url(" + getLocationHref() + "#" + r.maskId + ")"))) : "no" === e.ty && (r = new SVGNoStyleData(this, e, i)), "st" !== e.ty && "gs" !== e.ty || (n.setAttribute("stroke-linecap", lineCapEnum[e.lc || 2]), n.setAttribute("stroke-linejoin", lineJoinEnum[e.lj || 2]), n.setAttribute("fill-opacity", "0"), 1 === e.lj && n.setAttribute("stroke-miterlimit", e.ml)), 2 === e.r && n.setAttribute("fill-rule", "evenodd"), e.ln && n.setAttribute("id", e.ln), e.cl && n.setAttribute("class", e.cl), e.bm && (n.style["mix-blend-mode"] = getBlendMode(e.bm)), this.stylesList.push(i), this.addToAnimatedContents(e, r), r
        }, SVGShapeElement.prototype.createGroupElement = function(e) {
          var t = new ShapeGroupData;
          return e.ln && t.gr.setAttribute("id", e.ln), e.cl && t.gr.setAttribute("class", e.cl), e.bm && (t.gr.style["mix-blend-mode"] = getBlendMode(e.bm)), t
        }, SVGShapeElement.prototype.createTransformElement = function(e, t) {
          var r = TransformPropertyFactory.getTransformProperty(this, e, this),
            i = new SVGTransformData(r, r.o, t);
          return this.addToAnimatedContents(e, i), i
        }, SVGShapeElement.prototype.createShapeElement = function(e, t, r) {
          var i = 4;
          "rc" === e.ty ? i = 5 : "el" === e.ty ? i = 6 : "sr" === e.ty && (i = 7);
          var n = new SVGShapeData(t, r, ShapePropertyFactory.getShapeProp(this, e, i, this));
          return this.shapes.push(n), this.addShapeToModifiers(n), this.addToAnimatedContents(e, n), n
        }, SVGShapeElement.prototype.addToAnimatedContents = function(e, t) {
          for (var r = 0, i = this.animatedContents.length; r < i;) {
            if (this.animatedContents[r].element === t) return;
            r += 1
          }
          this.animatedContents.push({
            fn: SVGElementsRenderer.createRenderFunction(e),
            element: t,
            data: e
          })
        }, SVGShapeElement.prototype.setElementStyles = function(e) {
          var t, r = e.styles,
            i = this.stylesList.length;
          for (t = 0; t < i; t += 1) this.stylesList[t].closed || r.push(this.stylesList[t])
        }, SVGShapeElement.prototype.reloadShapes = function() {
          var e;
          this._isFirstFrame = !0;
          var t = this.itemsData.length;
          for (e = 0; e < t; e += 1) this.prevViewData[e] = this.itemsData[e];
          for (this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.layerElement, 0, [], !0), this.filterUniqueShapes(), t = this.dynamicProperties.length, e = 0; e < t; e += 1) this.dynamicProperties[e].getValue();
          this.renderModifiers()
        }, SVGShapeElement.prototype.searchShapes = function(e, t, r, i, n, a, s) {
          var o, l, u, c, h, p, d = [].concat(a),
            f = e.length - 1,
            m = [],
            v = [];
          for (o = f; o >= 0; o -= 1) {
            if ((p = this.searchProcessedElement(e[o])) ? t[o] = r[p - 1] : e[o]._render = s, "fl" === e[o].ty || "st" === e[o].ty || "gf" === e[o].ty || "gs" === e[o].ty || "no" === e[o].ty) p ? t[o].style.closed = !1 : t[o] = this.createStyleElement(e[o], n), e[o]._render && t[o].style.pElem.parentNode !== i && i.appendChild(t[o].style.pElem), m.push(t[o].style);
            else if ("gr" === e[o].ty) {
              if (p)
                for (u = t[o].it.length, l = 0; l < u; l += 1) t[o].prevViewData[l] = t[o].it[l];
              else t[o] = this.createGroupElement(e[o]);
              this.searchShapes(e[o].it, t[o].it, t[o].prevViewData, t[o].gr, n + 1, d, s), e[o]._render && t[o].gr.parentNode !== i && i.appendChild(t[o].gr)
            } else "tr" === e[o].ty ? (p || (t[o] = this.createTransformElement(e[o], i)), c = t[o].transform, d.push(c)) : "sh" === e[o].ty || "rc" === e[o].ty || "el" === e[o].ty || "sr" === e[o].ty ? (p || (t[o] = this.createShapeElement(e[o], d, n)), this.setElementStyles(t[o])) : "tm" === e[o].ty || "rd" === e[o].ty || "ms" === e[o].ty || "pb" === e[o].ty || "zz" === e[o].ty || "op" === e[o].ty ? (p ? (h = t[o]).closed = !1 : ((h = ShapeModifiers.getModifier(e[o].ty)).init(this, e[o]), t[o] = h, this.shapeModifiers.push(h)), v.push(h)) : "rp" === e[o].ty && (p ? (h = t[o]).closed = !0 : (h = ShapeModifiers.getModifier(e[o].ty), t[o] = h, h.init(this, e, o, t), this.shapeModifiers.push(h), s = !1), v.push(h));
            this.addProcessedElement(e[o], o + 1)
          }
          for (f = m.length, o = 0; o < f; o += 1) m[o].closed = !0;
          for (f = v.length, o = 0; o < f; o += 1) v[o].closed = !0
        }, SVGShapeElement.prototype.renderInnerContent = function() {
          var e;
          this.renderModifiers();
          var t = this.stylesList.length;
          for (e = 0; e < t; e += 1) this.stylesList[e].reset();
          for (this.renderShape(), e = 0; e < t; e += 1)(this.stylesList[e]._mdf || this._isFirstFrame) && (this.stylesList[e].msElem && (this.stylesList[e].msElem.setAttribute("d", this.stylesList[e].d), this.stylesList[e].d = "M0 0" + this.stylesList[e].d), this.stylesList[e].pElem.setAttribute("d", this.stylesList[e].d || "M0 0"))
        }, SVGShapeElement.prototype.renderShape = function() {
          var e, t, r = this.animatedContents.length;
          for (e = 0; e < r; e += 1) t = this.animatedContents[e], (this._isFirstFrame || t.element._isAnimated) && !0 !== t.data && t.fn(t.data, t.element, this._isFirstFrame)
        }, SVGShapeElement.prototype.destroy = function() {
          this.destroyBaseElement(), this.shapesData = null, this.itemsData = null
        }, LetterProps.prototype.update = function(e, t, r, i, n, a) {
          this._mdf.o = !1, this._mdf.sw = !1, this._mdf.sc = !1, this._mdf.fc = !1, this._mdf.m = !1, this._mdf.p = !1;
          var s = !1;
          return this.o !== e && (this.o = e, this._mdf.o = !0, s = !0), this.sw !== t && (this.sw = t, this._mdf.sw = !0, s = !0), this.sc !== r && (this.sc = r, this._mdf.sc = !0, s = !0), this.fc !== i && (this.fc = i, this._mdf.fc = !0, s = !0), this.m !== n && (this.m = n, this._mdf.m = !0, s = !0), !a.length || this.p[0] === a[0] && this.p[1] === a[1] && this.p[4] === a[4] && this.p[5] === a[5] && this.p[12] === a[12] && this.p[13] === a[13] || (this.p = a, this._mdf.p = !0, s = !0), s
        }, TextProperty.prototype.defaultBoxWidth = [0, 0], TextProperty.prototype.copyData = function(e, t) {
          for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
          return e
        }, TextProperty.prototype.setCurrentData = function(e) {
          e.__complete || this.completeTextData(e), this.currentData = e, this.currentData.boxWidth = this.currentData.boxWidth || this.defaultBoxWidth, this._mdf = !0
        }, TextProperty.prototype.searchProperty = function() {
          return this.searchKeyframes()
        }, TextProperty.prototype.searchKeyframes = function() {
          return this.kf = this.data.d.k.length > 1, this.kf && this.addEffect(this.getKeyframeValue.bind(this)), this.kf
        }, TextProperty.prototype.addEffect = function(e) {
          this.effectsSequence.push(e), this.elem.addDynamicProperty(this)
        }, TextProperty.prototype.getValue = function(e) {
          if (this.elem.globalData.frameId !== this.frameId && this.effectsSequence.length || e) {
            this.currentData.t = this.data.d.k[this.keysIndex].s.t;
            var t = this.currentData,
              r = this.keysIndex;
            if (this.lock) this.setCurrentData(this.currentData);
            else {
              var i;
              this.lock = !0, this._mdf = !1;
              var n = this.effectsSequence.length,
                a = e || this.data.d.k[this.keysIndex].s;
              for (i = 0; i < n; i += 1) a = r !== this.keysIndex ? this.effectsSequence[i](a, a.t) : this.effectsSequence[i](this.currentData, a.t);
              t !== a && this.setCurrentData(a), this.v = this.currentData, this.pv = this.v, this.lock = !1, this.frameId = this.elem.globalData.frameId
            }
          }
        }, TextProperty.prototype.getKeyframeValue = function() {
          for (var e = this.data.d.k, t = this.elem.comp.renderedFrame, r = 0, i = e.length; r <= i - 1 && !(r === i - 1 || e[r + 1].t > t);) r += 1;
          return this.keysIndex !== r && (this.keysIndex = r), this.data.d.k[this.keysIndex].s
        }, TextProperty.prototype.buildFinalText = function(e) {
          for (var t, r, i = [], n = 0, a = e.length, s = !1, o = !1, l = ""; n < a;) s = o, o = !1, t = e.charCodeAt(n), l = e.charAt(n), FontManager.isCombinedCharacter(t) ? s = !0 : t >= 55296 && t <= 56319 ? FontManager.isRegionalFlag(e, n) ? l = e.substr(n, 14) : (r = e.charCodeAt(n + 1)) >= 56320 && r <= 57343 && (FontManager.isModifier(t, r) ? (l = e.substr(n, 2), s = !0) : l = FontManager.isFlagEmoji(e.substr(n, 4)) ? e.substr(n, 4) : e.substr(n, 2)) : t > 56319 ? (r = e.charCodeAt(n + 1), FontManager.isVariationSelector(t) && (s = !0)) : FontManager.isZeroWidthJoiner(t) && (s = !0, o = !0), s ? (i[i.length - 1] += l, s = !1) : i.push(l), n += l.length;
          return i
        }, TextProperty.prototype.completeTextData = function(e) {
          e.__complete = !0;
          var t, r, i, n, a, s, o, l = this.elem.globalData.fontManager,
            u = this.data,
            c = [],
            h = 0,
            p = u.m.g,
            d = 0,
            f = 0,
            m = 0,
            v = [],
            g = 0,
            y = 0,
            b = l.getFontByName(e.f),
            S = 0,
            x = getFontProperties(b);
          e.fWeight = x.weight, e.fStyle = x.style, e.finalSize = e.s, e.finalText = this.buildFinalText(e.t), r = e.finalText.length, e.finalLineHeight = e.lh;
          var E, P = e.tr / 1e3 * e.finalSize;
          if (e.sz)
            for (var w, C, T = !0, M = e.sz[0], _ = e.sz[1]; T;) {
              w = 0, g = 0, r = (C = this.buildFinalText(e.t)).length, P = e.tr / 1e3 * e.finalSize;
              var A = -1;
              for (t = 0; t < r; t += 1) E = C[t].charCodeAt(0), i = !1, " " === C[t] ? A = t : 13 !== E && 3 !== E || (g = 0, i = !0, w += e.finalLineHeight || 1.2 * e.finalSize), l.chars ? (o = l.getCharData(C[t], b.fStyle, b.fFamily), S = i ? 0 : o.w * e.finalSize / 100) : S = l.measureText(C[t], e.f, e.finalSize), g + S > M && " " !== C[t] ? (-1 === A ? r += 1 : t = A, w += e.finalLineHeight || 1.2 * e.finalSize, C.splice(t, A === t ? 1 : 0, "\r"), A = -1, g = 0) : (g += S, g += P);
              w += b.ascent * e.finalSize / 100, this.canResize && e.finalSize > this.minimumFontSize && _ < w ? (e.finalSize -= 1, e.finalLineHeight = e.finalSize * e.lh / e.s) : (e.finalText = C, r = e.finalText.length, T = !1)
            }
          g = -P, S = 0;
          var k, I = 0;
          for (t = 0; t < r; t += 1)
            if (i = !1, 13 === (E = (k = e.finalText[t]).charCodeAt(0)) || 3 === E ? (I = 0, v.push(g), y = g > y ? g : y, g = -2 * P, n = "", i = !0, m += 1) : n = k, l.chars ? (o = l.getCharData(k, b.fStyle, l.getFontByName(e.f).fFamily), S = i ? 0 : o.w * e.finalSize / 100) : S = l.measureText(n, e.f, e.finalSize), " " === k ? I += S + P : (g += S + P + I, I = 0), c.push({
                l: S,
                an: S,
                add: d,
                n: i,
                anIndexes: [],
                val: n,
                line: m,
                animatorJustifyOffset: 0
              }), 2 == p) {
              if (d += S, "" === n || " " === n || t === r - 1) {
                for ("" !== n && " " !== n || (d -= S); f <= t;) c[f].an = d, c[f].ind = h, c[f].extra = S, f += 1;
                h += 1, d = 0
              }
            } else if (3 == p) {
            if (d += S, "" === n || t === r - 1) {
              for ("" === n && (d -= S); f <= t;) c[f].an = d, c[f].ind = h, c[f].extra = S, f += 1;
              d = 0, h += 1
            }
          } else c[h].ind = h, c[h].extra = 0, h += 1;
          if (e.l = c, y = g > y ? g : y, v.push(g), e.sz) e.boxWidth = e.sz[0], e.justifyOffset = 0;
          else switch (e.boxWidth = y, e.j) {
            case 1:
              e.justifyOffset = -e.boxWidth;
              break;
            case 2:
              e.justifyOffset = -e.boxWidth / 2;
              break;
            default:
              e.justifyOffset = 0
          }
          e.lineWidths = v;
          var D, O, F, L, V = u.a;
          s = V.length;
          var R = [];
          for (a = 0; a < s; a += 1) {
            for ((D = V[a]).a.sc && (e.strokeColorAnim = !0), D.a.sw && (e.strokeWidthAnim = !0), (D.a.fc || D.a.fh || D.a.fs || D.a.fb) && (e.fillColorAnim = !0), L = 0, F = D.s.b, t = 0; t < r; t += 1)(O = c[t]).anIndexes[a] = L, (1 == F && "" !== O.val || 2 == F && "" !== O.val && " " !== O.val || 3 == F && (O.n || " " == O.val || t == r - 1) || 4 == F && (O.n || t == r - 1)) && (1 === D.s.rn && R.push(L), L += 1);
            u.a[a].s.totalChars = L;
            var B, N = -1;
            if (1 === D.s.rn)
              for (t = 0; t < r; t += 1) N != (O = c[t]).anIndexes[a] && (N = O.anIndexes[a], B = R.splice(Math.floor(Math.random() * R.length), 1)[0]), O.anIndexes[a] = B
          }
          e.yOffset = e.finalLineHeight || 1.2 * e.finalSize, e.ls = e.ls || 0, e.ascent = b.ascent * e.finalSize / 100
        }, TextProperty.prototype.updateDocumentData = function(e, t) {
          t = void 0 === t ? this.keysIndex : t;
          var r = this.copyData({}, this.data.d.k[t].s);
          r = this.copyData(r, e), this.data.d.k[t].s = r, this.recalculate(t), this.setCurrentData(r), this.elem.addDynamicProperty(this)
        }, TextProperty.prototype.recalculate = function(e) {
          var t = this.data.d.k[e].s;
          t.__complete = !1, this.keysIndex = 0, this._isFirstFrame = !0, this.getValue(t)
        }, TextProperty.prototype.canResizeFont = function(e) {
          this.canResize = e, this.recalculate(this.keysIndex), this.elem.addDynamicProperty(this)
        }, TextProperty.prototype.setMinimumFontSize = function(e) {
          this.minimumFontSize = Math.floor(e) || 1, this.recalculate(this.keysIndex), this.elem.addDynamicProperty(this)
        };
        var TextSelectorProp = function() {
          var e = Math.max,
            t = Math.min,
            r = Math.floor;

          function i(e, t) {
            this._currentTextLength = -1, this.k = !1, this.data = t, this.elem = e, this.comp = e.comp, this.finalS = 0, this.finalE = 0, this.initDynamicPropertyContainer(e), this.s = PropertyFactory.getProp(e, t.s || {
              k: 0
            }, 0, 0, this), this.e = "e" in t ? PropertyFactory.getProp(e, t.e, 0, 0, this) : {
              v: 100
            }, this.o = PropertyFactory.getProp(e, t.o || {
              k: 0
            }, 0, 0, this), this.xe = PropertyFactory.getProp(e, t.xe || {
              k: 0
            }, 0, 0, this), this.ne = PropertyFactory.getProp(e, t.ne || {
              k: 0
            }, 0, 0, this), this.sm = PropertyFactory.getProp(e, t.sm || {
              k: 100
            }, 0, 0, this), this.a = PropertyFactory.getProp(e, t.a, 0, .01, this), this.dynamicProperties.length || this.getValue()
          }
          return i.prototype = {
            getMult: function(i) {
              this._currentTextLength !== this.elem.textProperty.currentData.l.length && this.getValue();
              var n = 0,
                a = 0,
                s = 1,
                o = 1;
              this.ne.v > 0 ? n = this.ne.v / 100 : a = -this.ne.v / 100, this.xe.v > 0 ? s = 1 - this.xe.v / 100 : o = 1 + this.xe.v / 100;
              var l = BezierFactory.getBezierEasing(n, a, s, o).get,
                u = 0,
                c = this.finalS,
                h = this.finalE,
                p = this.data.sh;
              if (2 === p) u = l(u = h === c ? i >= h ? 1 : 0 : e(0, t(.5 / (h - c) + (i - c) / (h - c), 1)));
              else if (3 === p) u = l(u = h === c ? i >= h ? 0 : 1 : 1 - e(0, t(.5 / (h - c) + (i - c) / (h - c), 1)));
              else if (4 === p) h === c ? u = 0 : (u = e(0, t(.5 / (h - c) + (i - c) / (h - c), 1))) < .5 ? u *= 2 : u = 1 - 2 * (u - .5), u = l(u);
              else if (5 === p) {
                if (h === c) u = 0;
                else {
                  var d = h - c,
                    f = -d / 2 + (i = t(e(0, i + .5 - c), h - c)),
                    m = d / 2;
                  u = Math.sqrt(1 - f * f / (m * m))
                }
                u = l(u)
              } else 6 === p ? (h === c ? u = 0 : (i = t(e(0, i + .5 - c), h - c), u = (1 + Math.cos(Math.PI + 2 * Math.PI * i / (h - c))) / 2), u = l(u)) : (i >= r(c) && (u = e(0, t(i - c < 0 ? t(h, 1) - (c - i) : h - i, 1))), u = l(u));
              if (100 !== this.sm.v) {
                var v = .01 * this.sm.v;
                0 === v && (v = 1e-8);
                var g = .5 - .5 * v;
                u < g ? u = 0 : (u = (u - g) / v) > 1 && (u = 1)
              }
              return u * this.a.v
            },
            getValue: function(e) {
              this.iterateDynamicProperties(), this._mdf = e || this._mdf, this._currentTextLength = this.elem.textProperty.currentData.l.length || 0, e && 2 === this.data.r && (this.e.v = this._currentTextLength);
              var t = 2 === this.data.r ? 1 : 100 / this.data.totalChars,
                r = this.o.v / t,
                i = this.s.v / t + r,
                n = this.e.v / t + r;
              if (i > n) {
                var a = i;
                i = n, n = a
              }
              this.finalS = i, this.finalE = n
            }
          }, extendPrototype([DynamicPropertyContainer], i), {
            getTextSelectorProp: function(e, t, r) {
              return new i(e, t, r)
            }
          }
        }();

        function TextAnimatorDataProperty(e, t, r) {
          var i = {
              propType: !1
            },
            n = PropertyFactory.getProp,
            a = t.a;
          this.a = {
            r: a.r ? n(e, a.r, 0, degToRads, r) : i,
            rx: a.rx ? n(e, a.rx, 0, degToRads, r) : i,
            ry: a.ry ? n(e, a.ry, 0, degToRads, r) : i,
            sk: a.sk ? n(e, a.sk, 0, degToRads, r) : i,
            sa: a.sa ? n(e, a.sa, 0, degToRads, r) : i,
            s: a.s ? n(e, a.s, 1, .01, r) : i,
            a: a.a ? n(e, a.a, 1, 0, r) : i,
            o: a.o ? n(e, a.o, 0, .01, r) : i,
            p: a.p ? n(e, a.p, 1, 0, r) : i,
            sw: a.sw ? n(e, a.sw, 0, 0, r) : i,
            sc: a.sc ? n(e, a.sc, 1, 0, r) : i,
            fc: a.fc ? n(e, a.fc, 1, 0, r) : i,
            fh: a.fh ? n(e, a.fh, 0, 0, r) : i,
            fs: a.fs ? n(e, a.fs, 0, .01, r) : i,
            fb: a.fb ? n(e, a.fb, 0, .01, r) : i,
            t: a.t ? n(e, a.t, 0, 0, r) : i
          }, this.s = TextSelectorProp.getTextSelectorProp(e, t.s, r), this.s.t = t.s.t
        }

        function TextAnimatorProperty(e, t, r) {
          this._isFirstFrame = !0, this._hasMaskedPath = !1, this._frameId = -1, this._textData = e, this._renderType = t, this._elem = r, this._animatorsData = createSizedArray(this._textData.a.length), this._pathData = {}, this._moreOptions = {
            alignment: {}
          }, this.renderedLetters = [], this.lettersChangedFlag = !1, this.initDynamicPropertyContainer(r)
        }

        function ITextElement() {}
        TextAnimatorProperty.prototype.searchProperties = function() {
          var e, t, r = this._textData.a.length,
            i = PropertyFactory.getProp;
          for (e = 0; e < r; e += 1) t = this._textData.a[e], this._animatorsData[e] = new TextAnimatorDataProperty(this._elem, t, this);
          this._textData.p && "m" in this._textData.p ? (this._pathData = {
            a: i(this._elem, this._textData.p.a, 0, 0, this),
            f: i(this._elem, this._textData.p.f, 0, 0, this),
            l: i(this._elem, this._textData.p.l, 0, 0, this),
            r: i(this._elem, this._textData.p.r, 0, 0, this),
            p: i(this._elem, this._textData.p.p, 0, 0, this),
            m: this._elem.maskManager.getMaskProperty(this._textData.p.m)
          }, this._hasMaskedPath = !0) : this._hasMaskedPath = !1, this._moreOptions.alignment = i(this._elem, this._textData.m.a, 1, 0, this)
        }, TextAnimatorProperty.prototype.getMeasures = function(e, t) {
          if (this.lettersChangedFlag = t, this._mdf || this._isFirstFrame || t || this._hasMaskedPath && this._pathData.m._mdf) {
            this._isFirstFrame = !1;
            var r, i, n, a, s, o, l, u, c, h, p, d, f, m, v, g, y, b, S, x = this._moreOptions.alignment.v,
              E = this._animatorsData,
              P = this._textData,
              w = this.mHelper,
              C = this._renderType,
              T = this.renderedLetters.length,
              M = e.l;
            if (this._hasMaskedPath) {
              if (S = this._pathData.m, !this._pathData.n || this._pathData._mdf) {
                var _, A = S.v;
                for (this._pathData.r.v && (A = A.reverse()), s = {
                    tLength: 0,
                    segments: []
                  }, a = A._length - 1, g = 0, n = 0; n < a; n += 1) _ = bez.buildBezierData(A.v[n], A.v[n + 1], [A.o[n][0] - A.v[n][0], A.o[n][1] - A.v[n][1]], [A.i[n + 1][0] - A.v[n + 1][0], A.i[n + 1][1] - A.v[n + 1][1]]), s.tLength += _.segmentLength, s.segments.push(_), g += _.segmentLength;
                n = a, S.v.c && (_ = bez.buildBezierData(A.v[n], A.v[0], [A.o[n][0] - A.v[n][0], A.o[n][1] - A.v[n][1]], [A.i[0][0] - A.v[0][0], A.i[0][1] - A.v[0][1]]), s.tLength += _.segmentLength, s.segments.push(_), g += _.segmentLength), this._pathData.pi = s
              }
              if (s = this._pathData.pi, o = this._pathData.f.v, p = 0, h = 1, u = 0, c = !0, m = s.segments, o < 0 && S.v.c)
                for (s.tLength < Math.abs(o) && (o = -Math.abs(o) % s.tLength), h = (f = m[p = m.length - 1].points).length - 1; o < 0;) o += f[h].partialLength, (h -= 1) < 0 && (h = (f = m[p -= 1].points).length - 1);
              d = (f = m[p].points)[h - 1], v = (l = f[h]).partialLength
            }
            a = M.length, r = 0, i = 0;
            var k, I, D, O, F, L = 1.2 * e.finalSize * .714,
              V = !0;
            D = E.length;
            var R, B, N, z, G, j, H, W, q, $, U, Y, X = -1,
              K = o,
              Z = p,
              J = h,
              Q = -1,
              ee = "",
              te = this.defaultPropsArray;
            if (2 === e.j || 1 === e.j) {
              var re = 0,
                ie = 0,
                ne = 2 === e.j ? -.5 : -1,
                ae = 0,
                se = !0;
              for (n = 0; n < a; n += 1)
                if (M[n].n) {
                  for (re && (re += ie); ae < n;) M[ae].animatorJustifyOffset = re, ae += 1;
                  re = 0, se = !0
                } else {
                  for (I = 0; I < D; I += 1)(k = E[I].a).t.propType && (se && 2 === e.j && (ie += k.t.v * ne), (F = E[I].s.getMult(M[n].anIndexes[I], P.a[I].s.totalChars)).length ? re += k.t.v * F[0] * ne : re += k.t.v * F * ne);
                  se = !1
                } for (re && (re += ie); ae < n;) M[ae].animatorJustifyOffset = re, ae += 1
            }
            for (n = 0; n < a; n += 1) {
              if (w.reset(), z = 1, M[n].n) r = 0, i += e.yOffset, i += V ? 1 : 0, o = K, V = !1, this._hasMaskedPath && (h = J, d = (f = m[p = Z].points)[h - 1], v = (l = f[h]).partialLength, u = 0), ee = "", U = "", q = "", Y = "", te = this.defaultPropsArray;
              else {
                if (this._hasMaskedPath) {
                  if (Q !== M[n].line) {
                    switch (e.j) {
                      case 1:
                        o += g - e.lineWidths[M[n].line];
                        break;
                      case 2:
                        o += (g - e.lineWidths[M[n].line]) / 2
                    }
                    Q = M[n].line
                  }
                  X !== M[n].ind && (M[X] && (o += M[X].extra), o += M[n].an / 2, X = M[n].ind), o += x[0] * M[n].an * .005;
                  var oe = 0;
                  for (I = 0; I < D; I += 1)(k = E[I].a).p.propType && ((F = E[I].s.getMult(M[n].anIndexes[I], P.a[I].s.totalChars)).length ? oe += k.p.v[0] * F[0] : oe += k.p.v[0] * F), k.a.propType && ((F = E[I].s.getMult(M[n].anIndexes[I], P.a[I].s.totalChars)).length ? oe += k.a.v[0] * F[0] : oe += k.a.v[0] * F);
                  for (c = !0, this._pathData.a.v && (o = .5 * M[0].an + (g - this._pathData.f.v - .5 * M[0].an - .5 * M[M.length - 1].an) * X / (a - 1), o += this._pathData.f.v); c;) u + v >= o + oe || !f ? (y = (o + oe - u) / l.partialLength, B = d.point[0] + (l.point[0] - d.point[0]) * y, N = d.point[1] + (l.point[1] - d.point[1]) * y, w.translate(-x[0] * M[n].an * .005, -x[1] * L * .01), c = !1) : f && (u += l.partialLength, (h += 1) >= f.length && (h = 0, m[p += 1] ? f = m[p].points : S.v.c ? (h = 0, f = m[p = 0].points) : (u -= l.partialLength, f = null)), f && (d = l, v = (l = f[h]).partialLength));
                  R = M[n].an / 2 - M[n].add, w.translate(-R, 0, 0)
                } else R = M[n].an / 2 - M[n].add, w.translate(-R, 0, 0), w.translate(-x[0] * M[n].an * .005, -x[1] * L * .01, 0);
                for (I = 0; I < D; I += 1)(k = E[I].a).t.propType && (F = E[I].s.getMult(M[n].anIndexes[I], P.a[I].s.totalChars), 0 === r && 0 === e.j || (this._hasMaskedPath ? F.length ? o += k.t.v * F[0] : o += k.t.v * F : F.length ? r += k.t.v * F[0] : r += k.t.v * F));
                for (e.strokeWidthAnim && (j = e.sw || 0), e.strokeColorAnim && (G = e.sc ? [e.sc[0], e.sc[1], e.sc[2]] : [0, 0, 0]), e.fillColorAnim && e.fc && (H = [e.fc[0], e.fc[1], e.fc[2]]), I = 0; I < D; I += 1)(k = E[I].a).a.propType && ((F = E[I].s.getMult(M[n].anIndexes[I], P.a[I].s.totalChars)).length ? w.translate(-k.a.v[0] * F[0], -k.a.v[1] * F[1], k.a.v[2] * F[2]) : w.translate(-k.a.v[0] * F, -k.a.v[1] * F, k.a.v[2] * F));
                for (I = 0; I < D; I += 1)(k = E[I].a).s.propType && ((F = E[I].s.getMult(M[n].anIndexes[I], P.a[I].s.totalChars)).length ? w.scale(1 + (k.s.v[0] - 1) * F[0], 1 + (k.s.v[1] - 1) * F[1], 1) : w.scale(1 + (k.s.v[0] - 1) * F, 1 + (k.s.v[1] - 1) * F, 1));
                for (I = 0; I < D; I += 1) {
                  if (k = E[I].a, F = E[I].s.getMult(M[n].anIndexes[I], P.a[I].s.totalChars), k.sk.propType && (F.length ? w.skewFromAxis(-k.sk.v * F[0], k.sa.v * F[1]) : w.skewFromAxis(-k.sk.v * F, k.sa.v * F)), k.r.propType && (F.length ? w.rotateZ(-k.r.v * F[2]) : w.rotateZ(-k.r.v * F)), k.ry.propType && (F.length ? w.rotateY(k.ry.v * F[1]) : w.rotateY(k.ry.v * F)), k.rx.propType && (F.length ? w.rotateX(k.rx.v * F[0]) : w.rotateX(k.rx.v * F)), k.o.propType && (F.length ? z += (k.o.v * F[0] - z) * F[0] : z += (k.o.v * F - z) * F), e.strokeWidthAnim && k.sw.propType && (F.length ? j += k.sw.v * F[0] : j += k.sw.v * F), e.strokeColorAnim && k.sc.propType)
                    for (W = 0; W < 3; W += 1) F.length ? G[W] += (k.sc.v[W] - G[W]) * F[0] : G[W] += (k.sc.v[W] - G[W]) * F;
                  if (e.fillColorAnim && e.fc) {
                    if (k.fc.propType)
                      for (W = 0; W < 3; W += 1) F.length ? H[W] += (k.fc.v[W] - H[W]) * F[0] : H[W] += (k.fc.v[W] - H[W]) * F;
                    k.fh.propType && (H = F.length ? addHueToRGB(H, k.fh.v * F[0]) : addHueToRGB(H, k.fh.v * F)), k.fs.propType && (H = F.length ? addSaturationToRGB(H, k.fs.v * F[0]) : addSaturationToRGB(H, k.fs.v * F)), k.fb.propType && (H = F.length ? addBrightnessToRGB(H, k.fb.v * F[0]) : addBrightnessToRGB(H, k.fb.v * F))
                  }
                }
                for (I = 0; I < D; I += 1)(k = E[I].a).p.propType && (F = E[I].s.getMult(M[n].anIndexes[I], P.a[I].s.totalChars), this._hasMaskedPath ? F.length ? w.translate(0, k.p.v[1] * F[0], -k.p.v[2] * F[1]) : w.translate(0, k.p.v[1] * F, -k.p.v[2] * F) : F.length ? w.translate(k.p.v[0] * F[0], k.p.v[1] * F[1], -k.p.v[2] * F[2]) : w.translate(k.p.v[0] * F, k.p.v[1] * F, -k.p.v[2] * F));
                if (e.strokeWidthAnim && (q = j < 0 ? 0 : j), e.strokeColorAnim && ($ = "rgb(" + Math.round(255 * G[0]) + "," + Math.round(255 * G[1]) + "," + Math.round(255 * G[2]) + ")"), e.fillColorAnim && e.fc && (U = "rgb(" + Math.round(255 * H[0]) + "," + Math.round(255 * H[1]) + "," + Math.round(255 * H[2]) + ")"), this._hasMaskedPath) {
                  if (w.translate(0, -e.ls), w.translate(0, x[1] * L * .01 + i, 0), this._pathData.p.v) {
                    b = (l.point[1] - d.point[1]) / (l.point[0] - d.point[0]);
                    var le = 180 * Math.atan(b) / Math.PI;
                    l.point[0] < d.point[0] && (le += 180), w.rotate(-le * Math.PI / 180)
                  }
                  w.translate(B, N, 0), o -= x[0] * M[n].an * .005, M[n + 1] && X !== M[n + 1].ind && (o += M[n].an / 2, o += .001 * e.tr * e.finalSize)
                } else {
                  switch (w.translate(r, i, 0), e.ps && w.translate(e.ps[0], e.ps[1] + e.ascent, 0), e.j) {
                    case 1:
                      w.translate(M[n].animatorJustifyOffset + e.justifyOffset + (e.boxWidth - e.lineWidths[M[n].line]), 0, 0);
                      break;
                    case 2:
                      w.translate(M[n].animatorJustifyOffset + e.justifyOffset + (e.boxWidth - e.lineWidths[M[n].line]) / 2, 0, 0)
                  }
                  w.translate(0, -e.ls), w.translate(R, 0, 0), w.translate(x[0] * M[n].an * .005, x[1] * L * .01, 0), r += M[n].l + .001 * e.tr * e.finalSize
                }
                "html" === C ? ee = w.toCSS() : "svg" === C ? ee = w.to2dCSS() : te = [w.props[0], w.props[1], w.props[2], w.props[3], w.props[4], w.props[5], w.props[6], w.props[7], w.props[8], w.props[9], w.props[10], w.props[11], w.props[12], w.props[13], w.props[14], w.props[15]], Y = z
              }
              T <= n ? (O = new LetterProps(Y, q, $, U, ee, te), this.renderedLetters.push(O), T += 1, this.lettersChangedFlag = !0) : (O = this.renderedLetters[n], this.lettersChangedFlag = O.update(Y, q, $, U, ee, te) || this.lettersChangedFlag)
            }
          }
        }, TextAnimatorProperty.prototype.getValue = function() {
          this._elem.globalData.frameId !== this._frameId && (this._frameId = this._elem.globalData.frameId, this.iterateDynamicProperties())
        }, TextAnimatorProperty.prototype.mHelper = new Matrix, TextAnimatorProperty.prototype.defaultPropsArray = [], extendPrototype([DynamicPropertyContainer], TextAnimatorProperty), ITextElement.prototype.initElement = function(e, t, r) {
          this.lettersChangedFlag = !0, this.initFrame(), this.initBaseData(e, t, r), this.textProperty = new TextProperty(this, e.t, this.dynamicProperties), this.textAnimator = new TextAnimatorProperty(e.t, this.renderType, this), this.initTransform(e, t, r), this.initHierarchy(), this.initRenderable(), this.initRendererElement(), this.createContainerElements(), this.createRenderableComponents(), this.createContent(), this.hide(), this.textAnimator.searchProperties(this.dynamicProperties)
        }, ITextElement.prototype.prepareFrame = function(e) {
          this._mdf = !1, this.prepareRenderableFrame(e), this.prepareProperties(e, this.isInRange)
        }, ITextElement.prototype.createPathShape = function(e, t) {
          var r, i, n = t.length,
            a = "";
          for (r = 0; r < n; r += 1) "sh" === t[r].ty && (i = t[r].ks.k, a += buildShapeString(i, i.i.length, !0, e));
          return a
        }, ITextElement.prototype.updateDocumentData = function(e, t) {
          this.textProperty.updateDocumentData(e, t)
        }, ITextElement.prototype.canResizeFont = function(e) {
          this.textProperty.canResizeFont(e)
        }, ITextElement.prototype.setMinimumFontSize = function(e) {
          this.textProperty.setMinimumFontSize(e)
        }, ITextElement.prototype.applyTextPropertiesToMatrix = function(e, t, r, i, n) {
          switch (e.ps && t.translate(e.ps[0], e.ps[1] + e.ascent, 0), t.translate(0, -e.ls, 0), e.j) {
            case 1:
              t.translate(e.justifyOffset + (e.boxWidth - e.lineWidths[r]), 0, 0);
              break;
            case 2:
              t.translate(e.justifyOffset + (e.boxWidth - e.lineWidths[r]) / 2, 0, 0)
          }
          t.translate(i, n, 0)
        }, ITextElement.prototype.buildColor = function(e) {
          return "rgb(" + Math.round(255 * e[0]) + "," + Math.round(255 * e[1]) + "," + Math.round(255 * e[2]) + ")"
        }, ITextElement.prototype.emptyProp = new LetterProps, ITextElement.prototype.destroy = function() {}, ITextElement.prototype.validateText = function() {
          (this.textProperty._mdf || this.textProperty._isFirstFrame) && (this.buildNewText(), this.textProperty._isFirstFrame = !1, this.textProperty._mdf = !1)
        };
        var emptyShapeData = {
          shapes: []
        };

        function SVGTextLottieElement(e, t, r) {
          this.textSpans = [], this.renderType = "svg", this.initElement(e, t, r)
        }

        function ISolidElement(e, t, r) {
          this.initElement(e, t, r)
        }

        function NullElement(e, t, r) {
          this.initFrame(), this.initBaseData(e, t, r), this.initFrame(), this.initTransform(e, t, r), this.initHierarchy()
        }

        function SVGRendererBase() {}

        function ICompElement() {}

        function SVGCompElement(e, t, r) {
          this.layers = e.layers, this.supports3d = !0, this.completeLayers = !1, this.pendingElements = [], this.elements = this.layers ? createSizedArray(this.layers.length) : [], this.initElement(e, t, r), this.tm = e.tm ? PropertyFactory.getProp(this, e.tm, 0, t.frameRate, this) : {
            _placeholder: !0
          }
        }

        function SVGRenderer(e, t) {
          this.animationItem = e, this.layers = null, this.renderedFrame = -1, this.svgElement = createNS("svg");
          var r = "";
          if (t && t.title) {
            var i = createNS("title"),
              n = createElementID();
            i.setAttribute("id", n), i.textContent = t.title, this.svgElement.appendChild(i), r += n
          }
          if (t && t.description) {
            var a = createNS("desc"),
              s = createElementID();
            a.setAttribute("id", s), a.textContent = t.description, this.svgElement.appendChild(a), r += " " + s
          }
          r && this.svgElement.setAttribute("aria-labelledby", r);
          var o = createNS("defs");
          this.svgElement.appendChild(o);
          var l = createNS("g");
          this.svgElement.appendChild(l), this.layerElement = l, this.renderConfig = {
            preserveAspectRatio: t && t.preserveAspectRatio || "xMidYMid meet",
            imagePreserveAspectRatio: t && t.imagePreserveAspectRatio || "xMidYMid slice",
            contentVisibility: t && t.contentVisibility || "visible",
            progressiveLoad: t && t.progressiveLoad || !1,
            hideOnTransparent: !(t && !1 === t.hideOnTransparent),
            viewBoxOnly: t && t.viewBoxOnly || !1,
            viewBoxSize: t && t.viewBoxSize || !1,
            className: t && t.className || "",
            id: t && t.id || "",
            focusable: t && t.focusable,
            filterSize: {
              width: t && t.filterSize && t.filterSize.width || "100%",
              height: t && t.filterSize && t.filterSize.height || "100%",
              x: t && t.filterSize && t.filterSize.x || "0%",
              y: t && t.filterSize && t.filterSize.y || "0%"
            },
            width: t && t.width,
            height: t && t.height,
            runExpressions: !t || void 0 === t.runExpressions || t.runExpressions
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
        }, SVGTextLottieElement.prototype.buildTextContents = function(e) {
          for (var t = 0, r = e.length, i = [], n = ""; t < r;) e[t] === String.fromCharCode(13) || e[t] === String.fromCharCode(3) ? (i.push(n), n = "") : n += e[t], t += 1;
          return i.push(n), i
        }, SVGTextLottieElement.prototype.buildShapeData = function(e, t) {
          if (e.shapes && e.shapes.length) {
            var r = e.shapes[0];
            if (r.it) {
              var i = r.it[r.it.length - 1];
              i.s && (i.s.k[0] = t, i.s.k[1] = t)
            }
          }
          return e
        }, SVGTextLottieElement.prototype.buildNewText = function() {
          var e, t;
          this.addDynamicProperty(this);
          var r = this.textProperty.currentData;
          this.renderedLetters = createSizedArray(r ? r.l.length : 0), r.fc ? this.layerElement.setAttribute("fill", this.buildColor(r.fc)) : this.layerElement.setAttribute("fill", "rgba(0,0,0,0)"), r.sc && (this.layerElement.setAttribute("stroke", this.buildColor(r.sc)), this.layerElement.setAttribute("stroke-width", r.sw)), this.layerElement.setAttribute("font-size", r.finalSize);
          var i = this.globalData.fontManager.getFontByName(r.f);
          if (i.fClass) this.layerElement.setAttribute("class", i.fClass);
          else {
            this.layerElement.setAttribute("font-family", i.fFamily);
            var n = r.fWeight,
              a = r.fStyle;
            this.layerElement.setAttribute("font-style", a), this.layerElement.setAttribute("font-weight", n)
          }
          this.layerElement.setAttribute("aria-label", r.t);
          var s, o = r.l || [],
            l = !!this.globalData.fontManager.chars;
          t = o.length;
          var u = this.mHelper,
            c = this.data.singleShape,
            h = 0,
            p = 0,
            d = !0,
            f = .001 * r.tr * r.finalSize;
          if (!c || l || r.sz) {
            var m, v = this.textSpans.length;
            for (e = 0; e < t; e += 1) {
              if (this.textSpans[e] || (this.textSpans[e] = {
                  span: null,
                  childSpan: null,
                  glyph: null
                }), !l || !c || 0 === e) {
                if (s = v > e ? this.textSpans[e].span : createNS(l ? "g" : "text"), v <= e) {
                  if (s.setAttribute("stroke-linecap", "butt"), s.setAttribute("stroke-linejoin", "round"), s.setAttribute("stroke-miterlimit", "4"), this.textSpans[e].span = s, l) {
                    var g = createNS("g");
                    s.appendChild(g), this.textSpans[e].childSpan = g
                  }
                  this.textSpans[e].span = s, this.layerElement.appendChild(s)
                }
                s.style.display = "inherit"
              }
              if (u.reset(), c && (o[e].n && (h = -f, p += r.yOffset, p += d ? 1 : 0, d = !1), this.applyTextPropertiesToMatrix(r, u, o[e].line, h, p), h += o[e].l || 0, h += f), l) {
                var y;
                if (1 === (m = this.globalData.fontManager.getCharData(r.finalText[e], i.fStyle, this.globalData.fontManager.getFontByName(r.f).fFamily)).t) y = new SVGCompElement(m.data, this.globalData, this);
                else {
                  var b = emptyShapeData;
                  m.data && m.data.shapes && (b = this.buildShapeData(m.data, r.finalSize)), y = new SVGShapeElement(b, this.globalData, this)
                }
                if (this.textSpans[e].glyph) {
                  var S = this.textSpans[e].glyph;
                  this.textSpans[e].childSpan.removeChild(S.layerElement), S.destroy()
                }
                this.textSpans[e].glyph = y, y._debug = !0, y.prepareFrame(0), y.renderFrame(), this.textSpans[e].childSpan.appendChild(y.layerElement), 1 === m.t && this.textSpans[e].childSpan.setAttribute("transform", "scale(" + r.finalSize / 100 + "," + r.finalSize / 100 + ")")
              } else c && s.setAttribute("transform", "translate(" + u.props[12] + "," + u.props[13] + ")"), s.textContent = o[e].val, s.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve")
            }
            c && s && s.setAttribute("d", "")
          } else {
            var x = this.textContainer,
              E = "start";
            switch (r.j) {
              case 1:
                E = "end";
                break;
              case 2:
                E = "middle";
                break;
              default:
                E = "start"
            }
            x.setAttribute("text-anchor", E), x.setAttribute("letter-spacing", f);
            var P = this.buildTextContents(r.finalText);
            for (t = P.length, p = r.ps ? r.ps[1] + r.ascent : 0, e = 0; e < t; e += 1)(s = this.textSpans[e].span || createNS("tspan")).textContent = P[e], s.setAttribute("x", 0), s.setAttribute("y", p), s.style.display = "inherit", x.appendChild(s), this.textSpans[e] || (this.textSpans[e] = {
              span: null,
              glyph: null
            }), this.textSpans[e].span = s, p += r.finalLineHeight;
            this.layerElement.appendChild(x)
          }
          for (; e < this.textSpans.length;) this.textSpans[e].span.style.display = "none", e += 1;
          this._sizeChanged = !0
        }, SVGTextLottieElement.prototype.sourceRectAtTime = function() {
          if (this.prepareFrame(this.comp.renderedFrame - this.data.st), this.renderInnerContent(), this._sizeChanged) {
            this._sizeChanged = !1;
            var e = this.layerElement.getBBox();
            this.bbox = {
              top: e.y,
              left: e.x,
              width: e.width,
              height: e.height
            }
          }
          return this.bbox
        }, SVGTextLottieElement.prototype.getValue = function() {
          var e, t, r = this.textSpans.length;
          for (this.renderedFrame = this.comp.renderedFrame, e = 0; e < r; e += 1)(t = this.textSpans[e].glyph) && (t.prepareFrame(this.comp.renderedFrame - this.data.st), t._mdf && (this._mdf = !0))
        }, SVGTextLottieElement.prototype.renderInnerContent = function() {
          if (this.validateText(), (!this.data.singleShape || this._mdf) && (this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag), this.lettersChangedFlag || this.textAnimator.lettersChangedFlag)) {
            var e, t;
            this._sizeChanged = !0;
            var r, i, n, a = this.textAnimator.renderedLetters,
              s = this.textProperty.currentData.l;
            for (t = s.length, e = 0; e < t; e += 1) s[e].n || (r = a[e], i = this.textSpans[e].span, (n = this.textSpans[e].glyph) && n.renderFrame(), r._mdf.m && i.setAttribute("transform", r.m), r._mdf.o && i.setAttribute("opacity", r.o), r._mdf.sw && i.setAttribute("stroke-width", r.sw), r._mdf.sc && i.setAttribute("stroke", r.sc), r._mdf.fc && i.setAttribute("fill", r.fc))
          }
        }, extendPrototype([IImageElement], ISolidElement), ISolidElement.prototype.createContent = function() {
          var e = createNS("rect");
          e.setAttribute("width", this.data.sw), e.setAttribute("height", this.data.sh), e.setAttribute("fill", this.data.sc), this.layerElement.appendChild(e)
        }, NullElement.prototype.prepareFrame = function(e) {
          this.prepareProperties(e, !0)
        }, NullElement.prototype.renderFrame = function() {}, NullElement.prototype.getBaseElement = function() {
          return null
        }, NullElement.prototype.destroy = function() {}, NullElement.prototype.sourceRectAtTime = function() {}, NullElement.prototype.hide = function() {}, extendPrototype([BaseElement, TransformElement, HierarchyElement, FrameElement], NullElement), extendPrototype([BaseRenderer], SVGRendererBase), SVGRendererBase.prototype.createNull = function(e) {
          return new NullElement(e, this.globalData, this)
        }, SVGRendererBase.prototype.createShape = function(e) {
          return new SVGShapeElement(e, this.globalData, this)
        }, SVGRendererBase.prototype.createText = function(e) {
          return new SVGTextLottieElement(e, this.globalData, this)
        }, SVGRendererBase.prototype.createImage = function(e) {
          return new IImageElement(e, this.globalData, this)
        }, SVGRendererBase.prototype.createSolid = function(e) {
          return new ISolidElement(e, this.globalData, this)
        }, SVGRendererBase.prototype.configAnimation = function(e) {
          this.svgElement.setAttribute("xmlns", "http://www.w3.org/2000/svg"), this.svgElement.setAttribute("xmlns:xlink", "http://www.w3.org/1999/xlink"), this.renderConfig.viewBoxSize ? this.svgElement.setAttribute("viewBox", this.renderConfig.viewBoxSize) : this.svgElement.setAttribute("viewBox", "0 0 " + e.w + " " + e.h), this.renderConfig.viewBoxOnly || (this.svgElement.setAttribute("width", e.w), this.svgElement.setAttribute("height", e.h), this.svgElement.style.width = "100%", this.svgElement.style.height = "100%", this.svgElement.style.transform = "translate3d(0,0,0)", this.svgElement.style.contentVisibility = this.renderConfig.contentVisibility), this.renderConfig.width && this.svgElement.setAttribute("width", this.renderConfig.width), this.renderConfig.height && this.svgElement.setAttribute("height", this.renderConfig.height), this.renderConfig.className && this.svgElement.setAttribute("class", this.renderConfig.className), this.renderConfig.id && this.svgElement.setAttribute("id", this.renderConfig.id), void 0 !== this.renderConfig.focusable && this.svgElement.setAttribute("focusable", this.renderConfig.focusable), this.svgElement.setAttribute("preserveAspectRatio", this.renderConfig.preserveAspectRatio), this.animationItem.wrapper.appendChild(this.svgElement);
          var t = this.globalData.defs;
          this.setupGlobalData(e, t), this.globalData.progressiveLoad = this.renderConfig.progressiveLoad, this.data = e;
          var r = createNS("clipPath"),
            i = createNS("rect");
          i.setAttribute("width", e.w), i.setAttribute("height", e.h), i.setAttribute("x", 0), i.setAttribute("y", 0);
          var n = createElementID();
          r.setAttribute("id", n), r.appendChild(i), this.layerElement.setAttribute("clip-path", "url(" + getLocationHref() + "#" + n + ")"), t.appendChild(r), this.layers = e.layers, this.elements = createSizedArray(e.layers.length)
        }, SVGRendererBase.prototype.destroy = function() {
          var e;
          this.animationItem.wrapper && (this.animationItem.wrapper.innerText = ""), this.layerElement = null, this.globalData.defs = null;
          var t = this.layers ? this.layers.length : 0;
          for (e = 0; e < t; e += 1) this.elements[e] && this.elements[e].destroy && this.elements[e].destroy();
          this.elements.length = 0, this.destroyed = !0, this.animationItem = null
        }, SVGRendererBase.prototype.updateContainerSize = function() {}, SVGRendererBase.prototype.findIndexByInd = function(e) {
          var t = 0,
            r = this.layers.length;
          for (t = 0; t < r; t += 1)
            if (this.layers[t].ind === e) return t;
          return -1
        }, SVGRendererBase.prototype.buildItem = function(e) {
          var t = this.elements;
          if (!t[e] && 99 !== this.layers[e].ty) {
            t[e] = !0;
            var r = this.createItem(this.layers[e]);
            if (t[e] = r, getExpressionsPlugin() && (0 === this.layers[e].ty && this.globalData.projectInterface.registerComposition(r), r.initExpressions()), this.appendElementInPos(r, e), this.layers[e].tt) {
              var i = "tp" in this.layers[e] ? this.findIndexByInd(this.layers[e].tp) : e - 1;
              if (-1 === i) return;
              if (this.elements[i] && !0 !== this.elements[i]) {
                var n = t[i].getMatte(this.layers[e].tt);
                r.setMatte(n)
              } else this.buildItem(i), this.addPendingElement(r)
            }
          }
        }, SVGRendererBase.prototype.checkPendingElements = function() {
          for (; this.pendingElements.length;) {
            var e = this.pendingElements.pop();
            if (e.checkParenting(), e.data.tt)
              for (var t = 0, r = this.elements.length; t < r;) {
                if (this.elements[t] === e) {
                  var i = "tp" in e.data ? this.findIndexByInd(e.data.tp) : t - 1,
                    n = this.elements[i].getMatte(this.layers[t].tt);
                  e.setMatte(n);
                  break
                }
                t += 1
              }
          }
        }, SVGRendererBase.prototype.renderFrame = function(e) {
          if (this.renderedFrame !== e && !this.destroyed) {
            var t;
            null === e ? e = this.renderedFrame : this.renderedFrame = e, this.globalData.frameNum = e, this.globalData.frameId += 1, this.globalData.projectInterface.currentFrame = e, this.globalData._mdf = !1;
            var r = this.layers.length;
            for (this.completeLayers || this.checkLayers(e), t = r - 1; t >= 0; t -= 1)(this.completeLayers || this.elements[t]) && this.elements[t].prepareFrame(e - this.layers[t].st);
            if (this.globalData._mdf)
              for (t = 0; t < r; t += 1)(this.completeLayers || this.elements[t]) && this.elements[t].renderFrame()
          }
        }, SVGRendererBase.prototype.appendElementInPos = function(e, t) {
          var r = e.getBaseElement();
          if (r) {
            for (var i, n = 0; n < t;) this.elements[n] && !0 !== this.elements[n] && this.elements[n].getBaseElement() && (i = this.elements[n].getBaseElement()), n += 1;
            i ? this.layerElement.insertBefore(r, i) : this.layerElement.appendChild(r)
          }
        }, SVGRendererBase.prototype.hide = function() {
          this.layerElement.style.display = "none"
        }, SVGRendererBase.prototype.show = function() {
          this.layerElement.style.display = "block"
        }, extendPrototype([BaseElement, TransformElement, HierarchyElement, FrameElement, RenderableDOMElement], ICompElement), ICompElement.prototype.initElement = function(e, t, r) {
          this.initFrame(), this.initBaseData(e, t, r), this.initTransform(e, t, r), this.initRenderable(), this.initHierarchy(), this.initRendererElement(), this.createContainerElements(), this.createRenderableComponents(), !this.data.xt && t.progressiveLoad || this.buildAllItems(), this.hide()
        }, ICompElement.prototype.prepareFrame = function(e) {
          if (this._mdf = !1, this.prepareRenderableFrame(e), this.prepareProperties(e, this.isInRange), this.isInRange || this.data.xt) {
            if (this.tm._placeholder) this.renderedFrame = e / this.data.sr;
            else {
              var t = this.tm.v;
              t === this.data.op && (t = this.data.op - 1), this.renderedFrame = t
            }
            var r, i = this.elements.length;
            for (this.completeLayers || this.checkLayers(this.renderedFrame), r = i - 1; r >= 0; r -= 1)(this.completeLayers || this.elements[r]) && (this.elements[r].prepareFrame(this.renderedFrame - this.layers[r].st), this.elements[r]._mdf && (this._mdf = !0))
          }
        }, ICompElement.prototype.renderInnerContent = function() {
          var e, t = this.layers.length;
          for (e = 0; e < t; e += 1)(this.completeLayers || this.elements[e]) && this.elements[e].renderFrame()
        }, ICompElement.prototype.setElements = function(e) {
          this.elements = e
        }, ICompElement.prototype.getElements = function() {
          return this.elements
        }, ICompElement.prototype.destroyElements = function() {
          var e, t = this.layers.length;
          for (e = 0; e < t; e += 1) this.elements[e] && this.elements[e].destroy()
        }, ICompElement.prototype.destroy = function() {
          this.destroyElements(), this.destroyBaseElement()
        }, extendPrototype([SVGRendererBase, ICompElement, SVGBaseElement], SVGCompElement), SVGCompElement.prototype.createComp = function(e) {
          return new SVGCompElement(e, this.globalData, this)
        }, extendPrototype([SVGRendererBase], SVGRenderer), SVGRenderer.prototype.createComp = function(e) {
          return new SVGCompElement(e, this.globalData, this)
        }, ShapeTransformManager.prototype = {
          addTransformSequence: function(e) {
            var t, r = e.length,
              i = "_";
            for (t = 0; t < r; t += 1) i += e[t].transform.key + "_";
            var n = this.sequences[i];
            return n || (n = {
              transforms: [].concat(e),
              finalTransform: new Matrix,
              _mdf: !1
            }, this.sequences[i] = n, this.sequenceList.push(n)), n
          },
          processSequence: function(e, t) {
            for (var r = 0, i = e.transforms.length, n = t; r < i && !t;) {
              if (e.transforms[r].transform.mProps._mdf) {
                n = !0;
                break
              }
              r += 1
            }
            if (n)
              for (e.finalTransform.reset(), r = i - 1; r >= 0; r -= 1) e.finalTransform.multiply(e.transforms[r].transform.mProps.v);
            e._mdf = n
          },
          processSequences: function(e) {
            var t, r = this.sequenceList.length;
            for (t = 0; t < r; t += 1) this.processSequence(this.sequenceList[t], e)
          },
          getNewKey: function() {
            return this.transform_key_count += 1, "_" + this.transform_key_count
          }
        };
        var lumaLoader = function() {
          var e = "__lottie_element_luma_buffer",
            t = null,
            r = null,
            i = null;

          function n() {
            var n, a, s;
            t || (n = createNS("svg"), a = createNS("filter"), s = createNS("feColorMatrix"), a.setAttribute("id", e), s.setAttribute("type", "matrix"), s.setAttribute("color-interpolation-filters", "sRGB"), s.setAttribute("values", "0.3, 0.3, 0.3, 0, 0, 0.3, 0.3, 0.3, 0, 0, 0.3, 0.3, 0.3, 0, 0, 0.3, 0.3, 0.3, 0, 0"), a.appendChild(s), n.appendChild(a), n.setAttribute("id", e + "_svg"), featureSupport.svgLumaHidden && (n.style.display = "none"), i = n, document.body.appendChild(i), t = createTag("canvas"), (r = t.getContext("2d")).filter = "url(#" + e + ")", r.fillStyle = "rgba(0,0,0,0)", r.fillRect(0, 0, 1, 1))
          }
          return {
            load: n,
            get: function(i) {
              return t || n(), t.width = i.width, t.height = i.height, r.filter = "url(#" + e + ")", t
            }
          }
        };

        function createCanvas(e, t) {
          if (featureSupport.offscreenCanvas) return new OffscreenCanvas(e, t);
          var r = createTag("canvas");
          return r.width = e, r.height = t, r
        }
        var assetLoader = {
            loadLumaCanvas: lumaLoader.load,
            getLumaCanvas: lumaLoader.get,
            createCanvas
          },
          registeredEffects = {};

        function CVEffects(e) {
          var t, r, i = e.data.ef ? e.data.ef.length : 0;
          for (this.filters = [], t = 0; t < i; t += 1) {
            r = null;
            var n = e.data.ef[t].ty;
            registeredEffects[n] && (r = new(0, registeredEffects[n].effect)(e.effectsManager.effectElements[t], e)), r && this.filters.push(r)
          }
          this.filters.length && e.addRenderableComponent(this)
        }

        function registerEffect(e, t) {
          registeredEffects[e] = {
            effect: t
          }
        }

        function CVMaskElement(e, t) {
          var r;
          this.data = e, this.element = t, this.masksProperties = this.data.masksProperties || [], this.viewData = createSizedArray(this.masksProperties.length);
          var i = this.masksProperties.length,
            n = !1;
          for (r = 0; r < i; r += 1) "n" !== this.masksProperties[r].mode && (n = !0), this.viewData[r] = ShapePropertyFactory.getShapeProp(this.element, this.masksProperties[r], 3);
          this.hasMasks = n, n && this.element.addRenderableComponent(this)
        }

        function CVBaseElement() {}
        CVEffects.prototype.renderFrame = function(e) {
          var t, r = this.filters.length;
          for (t = 0; t < r; t += 1) this.filters[t].renderFrame(e)
        }, CVEffects.prototype.getEffects = function(e) {
          var t, r = this.filters.length,
            i = [];
          for (t = 0; t < r; t += 1) this.filters[t].type === e && i.push(this.filters[t]);
          return i
        }, CVMaskElement.prototype.renderFrame = function() {
          if (this.hasMasks) {
            var e, t, r, i, n = this.element.finalTransform.mat,
              a = this.element.canvasContext,
              s = this.masksProperties.length;
            for (a.beginPath(), e = 0; e < s; e += 1)
              if ("n" !== this.masksProperties[e].mode) {
                var o;
                this.masksProperties[e].inv && (a.moveTo(0, 0), a.lineTo(this.element.globalData.compSize.w, 0), a.lineTo(this.element.globalData.compSize.w, this.element.globalData.compSize.h), a.lineTo(0, this.element.globalData.compSize.h), a.lineTo(0, 0)), i = this.viewData[e].v, t = n.applyToPointArray(i.v[0][0], i.v[0][1], 0), a.moveTo(t[0], t[1]);
                var l = i._length;
                for (o = 1; o < l; o += 1) r = n.applyToTriplePoints(i.o[o - 1], i.i[o], i.v[o]), a.bezierCurveTo(r[0], r[1], r[2], r[3], r[4], r[5]);
                r = n.applyToTriplePoints(i.o[o - 1], i.i[0], i.v[0]), a.bezierCurveTo(r[0], r[1], r[2], r[3], r[4], r[5])
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

        function CVShapeData(e, t, r, i) {
          this.styledShapes = [], this.tr = [0, 0, 0, 0, 0, 0];
          var n, a = 4;
          "rc" === t.ty ? a = 5 : "el" === t.ty ? a = 6 : "sr" === t.ty && (a = 7), this.sh = ShapePropertyFactory.getShapeProp(e, t, a, e);
          var s, o = r.length;
          for (n = 0; n < o; n += 1) r[n].closed || (s = {
            transforms: i.addTransformSequence(r[n].transforms),
            trNodes: []
          }, this.styledShapes.push(s), r[n].elements.push(s))
        }

        function CVShapeElement(e, t, r) {
          this.shapes = [], this.shapesData = e.shapes, this.stylesList = [], this.itemsData = [], this.prevViewData = [], this.shapeModifiers = [], this.processedElements = [], this.transformsManager = new ShapeTransformManager, this.initElement(e, t, r)
        }

        function CVTextElement(e, t, r) {
          this.textSpans = [], this.yOffset = 0, this.fillColorAnim = !1, this.strokeColorAnim = !1, this.strokeWidthAnim = !1, this.stroke = !1, this.fill = !1, this.justifyOffset = 0, this.currentRender = null, this.renderType = "canvas", this.values = {
            fill: "rgba(0,0,0,0)",
            stroke: "rgba(0,0,0,0)",
            sWidth: 0,
            fValue: ""
          }, this.initElement(e, t, r)
        }

        function CVImageElement(e, t, r) {
          this.assetData = t.getAssetData(e.refId), this.img = t.imageLoader.getAsset(this.assetData), this.initElement(e, t, r)
        }

        function CVSolidElement(e, t, r) {
          this.initElement(e, t, r)
        }

        function CanvasRendererBase() {}

        function CanvasContext() {
          this.opacity = -1, this.transform = createTypedArray("float32", 16), this.fillStyle = "", this.strokeStyle = "", this.lineWidth = "", this.lineCap = "", this.lineJoin = "", this.miterLimit = "", this.id = Math.random()
        }

        function CVContextData() {
          var e;
          for (this.stack = [], this.cArrPos = 0, this.cTr = new Matrix, e = 0; e < 15; e += 1) {
            var t = new CanvasContext;
            this.stack[e] = t
          }
          this._length = 15, this.nativeContext = null, this.transformMat = new Matrix, this.currentOpacity = 1, this.currentFillStyle = "", this.appliedFillStyle = "", this.currentStrokeStyle = "", this.appliedStrokeStyle = "", this.currentLineWidth = "", this.appliedLineWidth = "", this.currentLineCap = "", this.appliedLineCap = "", this.currentLineJoin = "", this.appliedLineJoin = "", this.appliedMiterLimit = "", this.currentMiterLimit = ""
        }

        function CVCompElement(e, t, r) {
          this.completeLayers = !1, this.layers = e.layers, this.pendingElements = [], this.elements = createSizedArray(this.layers.length), this.initElement(e, t, r), this.tm = e.tm ? PropertyFactory.getProp(this, e.tm, 0, t.frameRate, this) : {
            _placeholder: !0
          }
        }

        function CanvasRenderer(e, t) {
          this.animationItem = e, this.renderConfig = {
            clearCanvas: !t || void 0 === t.clearCanvas || t.clearCanvas,
            context: t && t.context || null,
            progressiveLoad: t && t.progressiveLoad || !1,
            preserveAspectRatio: t && t.preserveAspectRatio || "xMidYMid meet",
            imagePreserveAspectRatio: t && t.imagePreserveAspectRatio || "xMidYMid slice",
            contentVisibility: t && t.contentVisibility || "visible",
            className: t && t.className || "",
            id: t && t.id || "",
            runExpressions: !t || void 0 === t.runExpressions || t.runExpressions
          }, this.renderConfig.dpr = t && t.dpr || 1, this.animationItem.wrapper && (this.renderConfig.dpr = t && t.dpr || window.devicePixelRatio || 1), this.renderedFrame = -1, this.globalData = {
            frameNum: -1,
            _mdf: !1,
            renderConfig: this.renderConfig,
            currentGlobalAlpha: -1
          }, this.contextData = new CVContextData, this.elements = [], this.pendingElements = [], this.transformMat = new Matrix, this.completeLayers = !1, this.rendererType = "canvas", this.renderConfig.clearCanvas && (this.ctxTransform = this.contextData.transform.bind(this.contextData), this.ctxOpacity = this.contextData.opacity.bind(this.contextData), this.ctxFillStyle = this.contextData.fillStyle.bind(this.contextData), this.ctxStrokeStyle = this.contextData.strokeStyle.bind(this.contextData), this.ctxLineWidth = this.contextData.lineWidth.bind(this.contextData), this.ctxLineCap = this.contextData.lineCap.bind(this.contextData), this.ctxLineJoin = this.contextData.lineJoin.bind(this.contextData), this.ctxMiterLimit = this.contextData.miterLimit.bind(this.contextData), this.ctxFill = this.contextData.fill.bind(this.contextData), this.ctxFillRect = this.contextData.fillRect.bind(this.contextData), this.ctxStroke = this.contextData.stroke.bind(this.contextData), this.save = this.contextData.save.bind(this.contextData))
        }

        function HBaseElement() {}

        function HSolidElement(e, t, r) {
          this.initElement(e, t, r)
        }

        function HShapeElement(e, t, r) {
          this.shapes = [], this.shapesData = e.shapes, this.stylesList = [], this.shapeModifiers = [], this.itemsData = [], this.processedElements = [], this.animatedContents = [], this.shapesContainer = createNS("g"), this.initElement(e, t, r), this.prevViewData = [], this.currentBBox = {
            x: 999999,
            y: -999999,
            h: 0,
            w: 0
          }
        }

        function HTextElement(e, t, r) {
          this.textSpans = [], this.textPaths = [], this.currentBBox = {
            x: 999999,
            y: -999999,
            h: 0,
            w: 0
          }, this.renderType = "svg", this.isMasked = !1, this.initElement(e, t, r)
        }

        function HCameraElement(e, t, r) {
          this.initFrame(), this.initBaseData(e, t, r), this.initHierarchy();
          var i = PropertyFactory.getProp;
          if (this.pe = i(this, e.pe, 0, 0, this), e.ks.p.s ? (this.px = i(this, e.ks.p.x, 1, 0, this), this.py = i(this, e.ks.p.y, 1, 0, this), this.pz = i(this, e.ks.p.z, 1, 0, this)) : this.p = i(this, e.ks.p, 1, 0, this), e.ks.a && (this.a = i(this, e.ks.a, 1, 0, this)), e.ks.or.k.length && e.ks.or.k[0].to) {
            var n, a = e.ks.or.k.length;
            for (n = 0; n < a; n += 1) e.ks.or.k[n].to = null, e.ks.or.k[n].ti = null
          }
          this.or = i(this, e.ks.or, 1, degToRads, this), this.or.sh = !0, this.rx = i(this, e.ks.rx, 0, degToRads, this), this.ry = i(this, e.ks.ry, 0, degToRads, this), this.rz = i(this, e.ks.rz, 0, degToRads, this), this.mat = new Matrix, this._prevMat = new Matrix, this._isFirstFrame = !0, this.finalTransform = {
            mProp: this
          }
        }

        function HImageElement(e, t, r) {
          this.assetData = t.getAssetData(e.refId), this.initElement(e, t, r)
        }

        function HybridRendererBase(e, t) {
          this.animationItem = e, this.layers = null, this.renderedFrame = -1, this.renderConfig = {
            className: t && t.className || "",
            imagePreserveAspectRatio: t && t.imagePreserveAspectRatio || "xMidYMid slice",
            hideOnTransparent: !(t && !1 === t.hideOnTransparent),
            filterSize: {
              width: t && t.filterSize && t.filterSize.width || "400%",
              height: t && t.filterSize && t.filterSize.height || "400%",
              x: t && t.filterSize && t.filterSize.x || "-100%",
              y: t && t.filterSize && t.filterSize.y || "-100%"
            }
          }, this.globalData = {
            _mdf: !1,
            frameNum: -1,
            renderConfig: this.renderConfig
          }, this.pendingElements = [], this.elements = [], this.threeDElements = [], this.destroyed = !1, this.camera = null, this.supports3d = !0, this.rendererType = "html"
        }

        function HCompElement(e, t, r) {
          this.layers = e.layers, this.supports3d = !e.hasMask, this.completeLayers = !1, this.pendingElements = [], this.elements = this.layers ? createSizedArray(this.layers.length) : [], this.initElement(e, t, r), this.tm = e.tm ? PropertyFactory.getProp(this, e.tm, 0, t.frameRate, this) : {
            _placeholder: !0
          }
        }

        function HybridRenderer(e, t) {
          this.animationItem = e, this.layers = null, this.renderedFrame = -1, this.renderConfig = {
            className: t && t.className || "",
            imagePreserveAspectRatio: t && t.imagePreserveAspectRatio || "xMidYMid slice",
            hideOnTransparent: !(t && !1 === t.hideOnTransparent),
            filterSize: {
              width: t && t.filterSize && t.filterSize.width || "400%",
              height: t && t.filterSize && t.filterSize.height || "400%",
              x: t && t.filterSize && t.filterSize.x || "-100%",
              y: t && t.filterSize && t.filterSize.y || "-100%"
            },
            runExpressions: !t || void 0 === t.runExpressions || t.runExpressions
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
              var e = this.globalData.canvasContext,
                t = assetLoader.createCanvas(e.canvas.width, e.canvas.height);
              this.buffers.push(t);
              var r = assetLoader.createCanvas(e.canvas.width, e.canvas.height);
              this.buffers.push(r), this.data.tt >= 3 && !document._isProxy && assetLoader.loadLumaCanvas()
            }
            this.canvasContext = this.globalData.canvasContext, this.transformCanvas = this.globalData.transformCanvas, this.renderableEffectsManager = new CVEffects(this), this.searchEffectTransforms()
          },
          createContent: function() {},
          setBlendMode: function() {
            var e = this.globalData;
            if (e.blendMode !== this.data.bm) {
              e.blendMode = this.data.bm;
              var t = getBlendMode(this.data.bm);
              e.canvasContext.globalCompositeOperation = t
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
          clearCanvas: function(e) {
            e.clearRect(this.transformCanvas.tx, this.transformCanvas.ty, this.transformCanvas.w * this.transformCanvas.sx, this.transformCanvas.h * this.transformCanvas.sy)
          },
          prepareLayer: function() {
            if (this.data.tt >= 1) {
              var e = this.buffers[0].getContext("2d");
              this.clearCanvas(e), e.drawImage(this.canvasContext.canvas, 0, 0), this.currentTransform = this.canvasContext.getTransform(), this.canvasContext.setTransform(1, 0, 0, 1, 0, 0), this.clearCanvas(this.canvasContext), this.canvasContext.setTransform(this.currentTransform)
            }
          },
          exitLayer: function() {
            if (this.data.tt >= 1) {
              var e = this.buffers[1],
                t = e.getContext("2d");
              if (this.clearCanvas(t), t.drawImage(this.canvasContext.canvas, 0, 0), this.canvasContext.setTransform(1, 0, 0, 1, 0, 0), this.clearCanvas(this.canvasContext), this.canvasContext.setTransform(this.currentTransform), this.comp.getElementById("tp" in this.data ? this.data.tp : this.data.ind - 1).renderFrame(!0), this.canvasContext.setTransform(1, 0, 0, 1, 0, 0), this.data.tt >= 3 && !document._isProxy) {
                var r = assetLoader.getLumaCanvas(this.canvasContext.canvas);
                r.getContext("2d").drawImage(this.canvasContext.canvas, 0, 0), this.clearCanvas(this.canvasContext), this.canvasContext.drawImage(r, 0, 0)
              }
              this.canvasContext.globalCompositeOperation = operationsMap[this.data.tt], this.canvasContext.drawImage(e, 0, 0), this.canvasContext.globalCompositeOperation = "destination-over", this.canvasContext.drawImage(this.buffers[0], 0, 0), this.canvasContext.setTransform(this.currentTransform), this.canvasContext.globalCompositeOperation = "source-over"
            }
          },
          renderFrame: function(e) {
            if (!this.hidden && !this.data.hd && (1 !== this.data.td || e)) {
              this.renderTransform(), this.renderRenderable(), this.renderLocalTransform(), this.setBlendMode();
              var t = 0 === this.data.ty;
              this.prepareLayer(), this.globalData.renderer.save(t), this.globalData.renderer.ctxTransform(this.finalTransform.localMat.props), this.globalData.renderer.ctxOpacity(this.finalTransform.localOpacity), this.renderInnerContent(), this.globalData.renderer.restore(t), this.exitLayer(), this.maskManager.hasMasks && this.globalData.renderer.restore(!0), this._isFirstFrame && (this._isFirstFrame = !1)
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
        }, CVShapeElement.prototype.createStyleElement = function(e, t) {
          var r = {
              data: e,
              type: e.ty,
              preTransforms: this.transformsManager.addTransformSequence(t),
              transforms: [],
              elements: [],
              closed: !0 === e.hd
            },
            i = {};
          if ("fl" === e.ty || "st" === e.ty ? (i.c = PropertyFactory.getProp(this, e.c, 1, 255, this), i.c.k || (r.co = "rgb(" + bmFloor(i.c.v[0]) + "," + bmFloor(i.c.v[1]) + "," + bmFloor(i.c.v[2]) + ")")) : "gf" !== e.ty && "gs" !== e.ty || (i.s = PropertyFactory.getProp(this, e.s, 1, null, this), i.e = PropertyFactory.getProp(this, e.e, 1, null, this), i.h = PropertyFactory.getProp(this, e.h || {
              k: 0
            }, 0, .01, this), i.a = PropertyFactory.getProp(this, e.a || {
              k: 0
            }, 0, degToRads, this), i.g = new GradientProperty(this, e.g, this)), i.o = PropertyFactory.getProp(this, e.o, 0, .01, this), "st" === e.ty || "gs" === e.ty) {
            if (r.lc = lineCapEnum[e.lc || 2], r.lj = lineJoinEnum[e.lj || 2], 1 == e.lj && (r.ml = e.ml), i.w = PropertyFactory.getProp(this, e.w, 0, null, this), i.w.k || (r.wi = i.w.v), e.d) {
              var n = new DashProperty(this, e.d, "canvas", this);
              i.d = n, i.d.k || (r.da = i.d.dashArray, r.do = i.d.dashoffset[0])
            }
          } else r.r = 2 === e.r ? "evenodd" : "nonzero";
          return this.stylesList.push(r), i.style = r, i
        }, CVShapeElement.prototype.createGroupElement = function() {
          return {
            it: [],
            prevViewData: []
          }
        }, CVShapeElement.prototype.createTransformElement = function(e) {
          return {
            transform: {
              opacity: 1,
              _opMdf: !1,
              key: this.transformsManager.getNewKey(),
              op: PropertyFactory.getProp(this, e.o, 0, .01, this),
              mProps: TransformPropertyFactory.getTransformProperty(this, e, this)
            }
          }
        }, CVShapeElement.prototype.createShapeElement = function(e) {
          var t = new CVShapeData(this, e, this.stylesList, this.transformsManager);
          return this.shapes.push(t), this.addShapeToModifiers(t), t
        }, CVShapeElement.prototype.reloadShapes = function() {
          var e;
          this._isFirstFrame = !0;
          var t = this.itemsData.length;
          for (e = 0; e < t; e += 1) this.prevViewData[e] = this.itemsData[e];
          for (this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, !0, []), t = this.dynamicProperties.length, e = 0; e < t; e += 1) this.dynamicProperties[e].getValue();
          this.renderModifiers(), this.transformsManager.processSequences(this._isFirstFrame)
        }, CVShapeElement.prototype.addTransformToStyleList = function(e) {
          var t, r = this.stylesList.length;
          for (t = 0; t < r; t += 1) this.stylesList[t].closed || this.stylesList[t].transforms.push(e)
        }, CVShapeElement.prototype.removeTransformFromStyleList = function() {
          var e, t = this.stylesList.length;
          for (e = 0; e < t; e += 1) this.stylesList[e].closed || this.stylesList[e].transforms.pop()
        }, CVShapeElement.prototype.closeStyles = function(e) {
          var t, r = e.length;
          for (t = 0; t < r; t += 1) e[t].closed = !0
        }, CVShapeElement.prototype.searchShapes = function(e, t, r, i, n) {
          var a, s, o, l, u, c, h = e.length - 1,
            p = [],
            d = [],
            f = [].concat(n);
          for (a = h; a >= 0; a -= 1) {
            if ((l = this.searchProcessedElement(e[a])) ? t[a] = r[l - 1] : e[a]._shouldRender = i, "fl" === e[a].ty || "st" === e[a].ty || "gf" === e[a].ty || "gs" === e[a].ty) l ? t[a].style.closed = !1 : t[a] = this.createStyleElement(e[a], f), p.push(t[a].style);
            else if ("gr" === e[a].ty) {
              if (l)
                for (o = t[a].it.length, s = 0; s < o; s += 1) t[a].prevViewData[s] = t[a].it[s];
              else t[a] = this.createGroupElement(e[a]);
              this.searchShapes(e[a].it, t[a].it, t[a].prevViewData, i, f)
            } else "tr" === e[a].ty ? (l || (c = this.createTransformElement(e[a]), t[a] = c), f.push(t[a]), this.addTransformToStyleList(t[a])) : "sh" === e[a].ty || "rc" === e[a].ty || "el" === e[a].ty || "sr" === e[a].ty ? l || (t[a] = this.createShapeElement(e[a])) : "tm" === e[a].ty || "rd" === e[a].ty || "pb" === e[a].ty || "zz" === e[a].ty || "op" === e[a].ty ? (l ? (u = t[a]).closed = !1 : ((u = ShapeModifiers.getModifier(e[a].ty)).init(this, e[a]), t[a] = u, this.shapeModifiers.push(u)), d.push(u)) : "rp" === e[a].ty && (l ? (u = t[a]).closed = !0 : (u = ShapeModifiers.getModifier(e[a].ty), t[a] = u, u.init(this, e, a, t), this.shapeModifiers.push(u), i = !1), d.push(u));
            this.addProcessedElement(e[a], a + 1)
          }
          for (this.removeTransformFromStyleList(), this.closeStyles(p), h = d.length, a = 0; a < h; a += 1) d[a].closed = !0
        }, CVShapeElement.prototype.renderInnerContent = function() {
          this.transformHelper.opacity = 1, this.transformHelper._opMdf = !1, this.renderModifiers(), this.transformsManager.processSequences(this._isFirstFrame), this.renderShape(this.transformHelper, this.shapesData, this.itemsData, !0)
        }, CVShapeElement.prototype.renderShapeTransform = function(e, t) {
          (e._opMdf || t.op._mdf || this._isFirstFrame) && (t.opacity = e.opacity, t.opacity *= t.op.v, t._opMdf = !0)
        }, CVShapeElement.prototype.drawLayer = function() {
          var e, t, r, i, n, a, s, o, l, u = this.stylesList.length,
            c = this.globalData.renderer,
            h = this.globalData.canvasContext;
          for (e = 0; e < u; e += 1)
            if (("st" !== (o = (l = this.stylesList[e]).type) && "gs" !== o || 0 !== l.wi) && l.data._shouldRender && 0 !== l.coOp && 0 !== this.globalData.currentGlobalAlpha) {
              for (c.save(), a = l.elements, "st" === o || "gs" === o ? (c.ctxStrokeStyle("st" === o ? l.co : l.grd), c.ctxLineWidth(l.wi), c.ctxLineCap(l.lc), c.ctxLineJoin(l.lj), c.ctxMiterLimit(l.ml || 0)) : c.ctxFillStyle("fl" === o ? l.co : l.grd), c.ctxOpacity(l.coOp), "st" !== o && "gs" !== o && h.beginPath(), c.ctxTransform(l.preTransforms.finalTransform.props), r = a.length, t = 0; t < r; t += 1) {
                for ("st" !== o && "gs" !== o || (h.beginPath(), l.da && (h.setLineDash(l.da), h.lineDashOffset = l.do)), n = (s = a[t].trNodes).length, i = 0; i < n; i += 1) "m" === s[i].t ? h.moveTo(s[i].p[0], s[i].p[1]) : "c" === s[i].t ? h.bezierCurveTo(s[i].pts[0], s[i].pts[1], s[i].pts[2], s[i].pts[3], s[i].pts[4], s[i].pts[5]) : h.closePath();
                "st" !== o && "gs" !== o || (c.ctxStroke(), l.da && h.setLineDash(this.dashResetter))
              }
              "st" !== o && "gs" !== o && this.globalData.renderer.ctxFill(l.r), c.restore()
            }
        }, CVShapeElement.prototype.renderShape = function(e, t, r, i) {
          var n, a;
          for (a = e, n = t.length - 1; n >= 0; n -= 1) "tr" === t[n].ty ? (a = r[n].transform, this.renderShapeTransform(e, a)) : "sh" === t[n].ty || "el" === t[n].ty || "rc" === t[n].ty || "sr" === t[n].ty ? this.renderPath(t[n], r[n]) : "fl" === t[n].ty ? this.renderFill(t[n], r[n], a) : "st" === t[n].ty ? this.renderStroke(t[n], r[n], a) : "gf" === t[n].ty || "gs" === t[n].ty ? this.renderGradientFill(t[n], r[n], a) : "gr" === t[n].ty ? this.renderShape(a, t[n].it, r[n].it) : t[n].ty;
          i && this.drawLayer()
        }, CVShapeElement.prototype.renderStyledShape = function(e, t) {
          if (this._isFirstFrame || t._mdf || e.transforms._mdf) {
            var r, i, n, a = e.trNodes,
              s = t.paths,
              o = s._length;
            a.length = 0;
            var l = e.transforms.finalTransform;
            for (n = 0; n < o; n += 1) {
              var u = s.shapes[n];
              if (u && u.v) {
                for (i = u._length, r = 1; r < i; r += 1) 1 === r && a.push({
                  t: "m",
                  p: l.applyToPointArray(u.v[0][0], u.v[0][1], 0)
                }), a.push({
                  t: "c",
                  pts: l.applyToTriplePoints(u.o[r - 1], u.i[r], u.v[r])
                });
                1 === i && a.push({
                  t: "m",
                  p: l.applyToPointArray(u.v[0][0], u.v[0][1], 0)
                }), u.c && i && (a.push({
                  t: "c",
                  pts: l.applyToTriplePoints(u.o[r - 1], u.i[0], u.v[0])
                }), a.push({
                  t: "z"
                }))
              }
            }
            e.trNodes = a
          }
        }, CVShapeElement.prototype.renderPath = function(e, t) {
          if (!0 !== e.hd && e._shouldRender) {
            var r, i = t.styledShapes.length;
            for (r = 0; r < i; r += 1) this.renderStyledShape(t.styledShapes[r], t.sh)
          }
        }, CVShapeElement.prototype.renderFill = function(e, t, r) {
          var i = t.style;
          (t.c._mdf || this._isFirstFrame) && (i.co = "rgb(" + bmFloor(t.c.v[0]) + "," + bmFloor(t.c.v[1]) + "," + bmFloor(t.c.v[2]) + ")"), (t.o._mdf || r._opMdf || this._isFirstFrame) && (i.coOp = t.o.v * r.opacity)
        }, CVShapeElement.prototype.renderGradientFill = function(e, t, r) {
          var i, n = t.style;
          if (!n.grd || t.g._mdf || t.s._mdf || t.e._mdf || 1 !== e.t && (t.h._mdf || t.a._mdf)) {
            var a, s = this.globalData.canvasContext,
              o = t.s.v,
              l = t.e.v;
            if (1 === e.t) i = s.createLinearGradient(o[0], o[1], l[0], l[1]);
            else {
              var u = Math.sqrt(Math.pow(o[0] - l[0], 2) + Math.pow(o[1] - l[1], 2)),
                c = Math.atan2(l[1] - o[1], l[0] - o[0]),
                h = t.h.v;
              h >= 1 ? h = .99 : h <= -1 && (h = -.99);
              var p = u * h,
                d = Math.cos(c + t.a.v) * p + o[0],
                f = Math.sin(c + t.a.v) * p + o[1];
              i = s.createRadialGradient(d, f, 0, o[0], o[1], u)
            }
            var m = e.g.p,
              v = t.g.c,
              g = 1;
            for (a = 0; a < m; a += 1) t.g._hasOpacity && t.g._collapsable && (g = t.g.o[2 * a + 1]), i.addColorStop(v[4 * a] / 100, "rgba(" + v[4 * a + 1] + "," + v[4 * a + 2] + "," + v[4 * a + 3] + "," + g + ")");
            n.grd = i
          }
          n.coOp = t.o.v * r.opacity
        }, CVShapeElement.prototype.renderStroke = function(e, t, r) {
          var i = t.style,
            n = t.d;
          n && (n._mdf || this._isFirstFrame) && (i.da = n.dashArray, i.do = n.dashoffset[0]), (t.c._mdf || this._isFirstFrame) && (i.co = "rgb(" + bmFloor(t.c.v[0]) + "," + bmFloor(t.c.v[1]) + "," + bmFloor(t.c.v[2]) + ")"), (t.o._mdf || r._opMdf || this._isFirstFrame) && (i.coOp = t.o.v * r.opacity), (t.w._mdf || this._isFirstFrame) && (i.wi = t.w.v)
        }, CVShapeElement.prototype.destroy = function() {
          this.shapesData = null, this.globalData = null, this.canvasContext = null, this.stylesList.length = 0, this.itemsData.length = 0
        }, extendPrototype([BaseElement, TransformElement, CVBaseElement, HierarchyElement, FrameElement, RenderableElement, ITextElement], CVTextElement), CVTextElement.prototype.tHelper = createTag("canvas").getContext("2d"), CVTextElement.prototype.buildNewText = function() {
          var e = this.textProperty.currentData;
          this.renderedLetters = createSizedArray(e.l ? e.l.length : 0);
          var t = !1;
          e.fc ? (t = !0, this.values.fill = this.buildColor(e.fc)) : this.values.fill = "rgba(0,0,0,0)", this.fill = t;
          var r = !1;
          e.sc && (r = !0, this.values.stroke = this.buildColor(e.sc), this.values.sWidth = e.sw);
          var i, n, a, s, o, l, u, c, h, p, d, f, m = this.globalData.fontManager.getFontByName(e.f),
            v = e.l,
            g = this.mHelper;
          this.stroke = r, this.values.fValue = e.finalSize + "px " + this.globalData.fontManager.getFontByName(e.f).fFamily, n = e.finalText.length;
          var y = this.data.singleShape,
            b = .001 * e.tr * e.finalSize,
            S = 0,
            x = 0,
            E = !0,
            P = 0;
          for (i = 0; i < n; i += 1) {
            s = (a = this.globalData.fontManager.getCharData(e.finalText[i], m.fStyle, this.globalData.fontManager.getFontByName(e.f).fFamily)) && a.data || {}, g.reset(), y && v[i].n && (S = -b, x += e.yOffset, x += E ? 1 : 0, E = !1), h = (u = s.shapes ? s.shapes[0].it : []).length, g.scale(e.finalSize / 100, e.finalSize / 100), y && this.applyTextPropertiesToMatrix(e, g, v[i].line, S, x), d = createSizedArray(h - 1);
            var w = 0;
            for (c = 0; c < h; c += 1)
              if ("sh" === u[c].ty) {
                for (l = u[c].ks.k.i.length, p = u[c].ks.k, f = [], o = 1; o < l; o += 1) 1 === o && f.push(g.applyToX(p.v[0][0], p.v[0][1], 0), g.applyToY(p.v[0][0], p.v[0][1], 0)), f.push(g.applyToX(p.o[o - 1][0], p.o[o - 1][1], 0), g.applyToY(p.o[o - 1][0], p.o[o - 1][1], 0), g.applyToX(p.i[o][0], p.i[o][1], 0), g.applyToY(p.i[o][0], p.i[o][1], 0), g.applyToX(p.v[o][0], p.v[o][1], 0), g.applyToY(p.v[o][0], p.v[o][1], 0));
                f.push(g.applyToX(p.o[o - 1][0], p.o[o - 1][1], 0), g.applyToY(p.o[o - 1][0], p.o[o - 1][1], 0), g.applyToX(p.i[0][0], p.i[0][1], 0), g.applyToY(p.i[0][0], p.i[0][1], 0), g.applyToX(p.v[0][0], p.v[0][1], 0), g.applyToY(p.v[0][0], p.v[0][1], 0)), d[w] = f, w += 1
              } y && (S += v[i].l, S += b), this.textSpans[P] ? this.textSpans[P].elem = d : this.textSpans[P] = {
              elem: d
            }, P += 1
          }
        }, CVTextElement.prototype.renderInnerContent = function() {
          var e, t, r, i, n, a;
          this.validateText(), this.canvasContext.font = this.values.fValue, this.globalData.renderer.ctxLineCap("butt"), this.globalData.renderer.ctxLineJoin("miter"), this.globalData.renderer.ctxMiterLimit(4), this.data.singleShape || this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag);
          var s, o = this.textAnimator.renderedLetters,
            l = this.textProperty.currentData.l;
          t = l.length;
          var u, c, h = null,
            p = null,
            d = null,
            f = this.globalData.renderer;
          for (e = 0; e < t; e += 1)
            if (!l[e].n) {
              if ((s = o[e]) && (f.save(), f.ctxTransform(s.p), f.ctxOpacity(s.o)), this.fill) {
                for (s && s.fc ? h !== s.fc && (f.ctxFillStyle(s.fc), h = s.fc) : h !== this.values.fill && (h = this.values.fill, f.ctxFillStyle(this.values.fill)), i = (u = this.textSpans[e].elem).length, this.globalData.canvasContext.beginPath(), r = 0; r < i; r += 1)
                  for (a = (c = u[r]).length, this.globalData.canvasContext.moveTo(c[0], c[1]), n = 2; n < a; n += 6) this.globalData.canvasContext.bezierCurveTo(c[n], c[n + 1], c[n + 2], c[n + 3], c[n + 4], c[n + 5]);
                this.globalData.canvasContext.closePath(), f.ctxFill()
              }
              if (this.stroke) {
                for (s && s.sw ? d !== s.sw && (d = s.sw, f.ctxLineWidth(s.sw)) : d !== this.values.sWidth && (d = this.values.sWidth, f.ctxLineWidth(this.values.sWidth)), s && s.sc ? p !== s.sc && (p = s.sc, f.ctxStrokeStyle(s.sc)) : p !== this.values.stroke && (p = this.values.stroke, f.ctxStrokeStyle(this.values.stroke)), i = (u = this.textSpans[e].elem).length, this.globalData.canvasContext.beginPath(), r = 0; r < i; r += 1)
                  for (a = (c = u[r]).length, this.globalData.canvasContext.moveTo(c[0], c[1]), n = 2; n < a; n += 6) this.globalData.canvasContext.bezierCurveTo(c[n], c[n + 1], c[n + 2], c[n + 3], c[n + 4], c[n + 5]);
                this.globalData.canvasContext.closePath(), f.ctxStroke()
              }
              s && this.globalData.renderer.restore()
            }
        }, extendPrototype([BaseElement, TransformElement, CVBaseElement, HierarchyElement, FrameElement, RenderableElement], CVImageElement), CVImageElement.prototype.initElement = SVGShapeElement.prototype.initElement, CVImageElement.prototype.prepareFrame = IImageElement.prototype.prepareFrame, CVImageElement.prototype.createContent = function() {
          if (this.img.width && (this.assetData.w !== this.img.width || this.assetData.h !== this.img.height)) {
            var e = createTag("canvas");
            e.width = this.assetData.w, e.height = this.assetData.h;
            var t, r, i = e.getContext("2d"),
              n = this.img.width,
              a = this.img.height,
              s = n / a,
              o = this.assetData.w / this.assetData.h,
              l = this.assetData.pr || this.globalData.renderConfig.imagePreserveAspectRatio;
            s > o && "xMidYMid slice" === l || s < o && "xMidYMid slice" !== l ? t = (r = a) * o : r = (t = n) / o, i.drawImage(this.img, (n - t) / 2, (a - r) / 2, t, r, 0, 0, this.assetData.w, this.assetData.h), this.img = e
          }
        }, CVImageElement.prototype.renderInnerContent = function() {
          this.canvasContext.drawImage(this.img, 0, 0)
        }, CVImageElement.prototype.destroy = function() {
          this.img = null
        }, extendPrototype([BaseElement, TransformElement, CVBaseElement, HierarchyElement, FrameElement, RenderableElement], CVSolidElement), CVSolidElement.prototype.initElement = SVGShapeElement.prototype.initElement, CVSolidElement.prototype.prepareFrame = IImageElement.prototype.prepareFrame, CVSolidElement.prototype.renderInnerContent = function() {
          this.globalData.renderer.ctxFillStyle(this.data.sc), this.globalData.renderer.ctxFillRect(0, 0, this.data.sw, this.data.sh)
        }, extendPrototype([BaseRenderer], CanvasRendererBase), CanvasRendererBase.prototype.createShape = function(e) {
          return new CVShapeElement(e, this.globalData, this)
        }, CanvasRendererBase.prototype.createText = function(e) {
          return new CVTextElement(e, this.globalData, this)
        }, CanvasRendererBase.prototype.createImage = function(e) {
          return new CVImageElement(e, this.globalData, this)
        }, CanvasRendererBase.prototype.createSolid = function(e) {
          return new CVSolidElement(e, this.globalData, this)
        }, CanvasRendererBase.prototype.createNull = SVGRenderer.prototype.createNull, CanvasRendererBase.prototype.ctxTransform = function(e) {
          1 === e[0] && 0 === e[1] && 0 === e[4] && 1 === e[5] && 0 === e[12] && 0 === e[13] || this.canvasContext.transform(e[0], e[1], e[4], e[5], e[12], e[13])
        }, CanvasRendererBase.prototype.ctxOpacity = function(e) {
          this.canvasContext.globalAlpha *= e < 0 ? 0 : e
        }, CanvasRendererBase.prototype.ctxFillStyle = function(e) {
          this.canvasContext.fillStyle = e
        }, CanvasRendererBase.prototype.ctxStrokeStyle = function(e) {
          this.canvasContext.strokeStyle = e
        }, CanvasRendererBase.prototype.ctxLineWidth = function(e) {
          this.canvasContext.lineWidth = e
        }, CanvasRendererBase.prototype.ctxLineCap = function(e) {
          this.canvasContext.lineCap = e
        }, CanvasRendererBase.prototype.ctxLineJoin = function(e) {
          this.canvasContext.lineJoin = e
        }, CanvasRendererBase.prototype.ctxMiterLimit = function(e) {
          this.canvasContext.miterLimit = e
        }, CanvasRendererBase.prototype.ctxFill = function(e) {
          this.canvasContext.fill(e)
        }, CanvasRendererBase.prototype.ctxFillRect = function(e, t, r, i) {
          this.canvasContext.fillRect(e, t, r, i)
        }, CanvasRendererBase.prototype.ctxStroke = function() {
          this.canvasContext.stroke()
        }, CanvasRendererBase.prototype.reset = function() {
          this.renderConfig.clearCanvas ? this.contextData.reset() : this.canvasContext.restore()
        }, CanvasRendererBase.prototype.save = function() {
          this.canvasContext.save()
        }, CanvasRendererBase.prototype.restore = function(e) {
          this.renderConfig.clearCanvas ? (e && (this.globalData.blendMode = "source-over"), this.contextData.restore(e)) : this.canvasContext.restore()
        }, CanvasRendererBase.prototype.configAnimation = function(e) {
          if (this.animationItem.wrapper) {
            this.animationItem.container = createTag("canvas");
            var t = this.animationItem.container.style;
            t.width = "100%", t.height = "100%";
            var r = "0px 0px 0px";
            t.transformOrigin = r, t.mozTransformOrigin = r, t.webkitTransformOrigin = r, t["-webkit-transform"] = r, t.contentVisibility = this.renderConfig.contentVisibility, this.animationItem.wrapper.appendChild(this.animationItem.container), this.canvasContext = this.animationItem.container.getContext("2d"), this.renderConfig.className && this.animationItem.container.setAttribute("class", this.renderConfig.className), this.renderConfig.id && this.animationItem.container.setAttribute("id", this.renderConfig.id)
          } else this.canvasContext = this.renderConfig.context;
          this.contextData.setContext(this.canvasContext), this.data = e, this.layers = e.layers, this.transformCanvas = {
            w: e.w,
            h: e.h,
            sx: 0,
            sy: 0,
            tx: 0,
            ty: 0
          }, this.setupGlobalData(e, document.body), this.globalData.canvasContext = this.canvasContext, this.globalData.renderer = this, this.globalData.isDashed = !1, this.globalData.progressiveLoad = this.renderConfig.progressiveLoad, this.globalData.transformCanvas = this.transformCanvas, this.elements = createSizedArray(e.layers.length), this.updateContainerSize()
        }, CanvasRendererBase.prototype.updateContainerSize = function(e, t) {
          var r, i, n, a;
          if (this.reset(), e ? (r = e, i = t, this.canvasContext.canvas.width = r, this.canvasContext.canvas.height = i) : (this.animationItem.wrapper && this.animationItem.container ? (r = this.animationItem.wrapper.offsetWidth, i = this.animationItem.wrapper.offsetHeight) : (r = this.canvasContext.canvas.width, i = this.canvasContext.canvas.height), this.canvasContext.canvas.width = r * this.renderConfig.dpr, this.canvasContext.canvas.height = i * this.renderConfig.dpr), -1 !== this.renderConfig.preserveAspectRatio.indexOf("meet") || -1 !== this.renderConfig.preserveAspectRatio.indexOf("slice")) {
            var s = this.renderConfig.preserveAspectRatio.split(" "),
              o = s[1] || "meet",
              l = s[0] || "xMidYMid",
              u = l.substr(0, 4),
              c = l.substr(4);
            n = r / i, (a = this.transformCanvas.w / this.transformCanvas.h) > n && "meet" === o || a < n && "slice" === o ? (this.transformCanvas.sx = r / (this.transformCanvas.w / this.renderConfig.dpr), this.transformCanvas.sy = r / (this.transformCanvas.w / this.renderConfig.dpr)) : (this.transformCanvas.sx = i / (this.transformCanvas.h / this.renderConfig.dpr), this.transformCanvas.sy = i / (this.transformCanvas.h / this.renderConfig.dpr)), this.transformCanvas.tx = "xMid" === u && (a < n && "meet" === o || a > n && "slice" === o) ? (r - this.transformCanvas.w * (i / this.transformCanvas.h)) / 2 * this.renderConfig.dpr : "xMax" === u && (a < n && "meet" === o || a > n && "slice" === o) ? (r - this.transformCanvas.w * (i / this.transformCanvas.h)) * this.renderConfig.dpr : 0, this.transformCanvas.ty = "YMid" === c && (a > n && "meet" === o || a < n && "slice" === o) ? (i - this.transformCanvas.h * (r / this.transformCanvas.w)) / 2 * this.renderConfig.dpr : "YMax" === c && (a > n && "meet" === o || a < n && "slice" === o) ? (i - this.transformCanvas.h * (r / this.transformCanvas.w)) * this.renderConfig.dpr : 0
          } else "none" === this.renderConfig.preserveAspectRatio ? (this.transformCanvas.sx = r / (this.transformCanvas.w / this.renderConfig.dpr), this.transformCanvas.sy = i / (this.transformCanvas.h / this.renderConfig.dpr), this.transformCanvas.tx = 0, this.transformCanvas.ty = 0) : (this.transformCanvas.sx = this.renderConfig.dpr, this.transformCanvas.sy = this.renderConfig.dpr, this.transformCanvas.tx = 0, this.transformCanvas.ty = 0);
          this.transformCanvas.props = [this.transformCanvas.sx, 0, 0, 0, 0, this.transformCanvas.sy, 0, 0, 0, 0, 1, 0, this.transformCanvas.tx, this.transformCanvas.ty, 0, 1], this.ctxTransform(this.transformCanvas.props), this.canvasContext.beginPath(), this.canvasContext.rect(0, 0, this.transformCanvas.w, this.transformCanvas.h), this.canvasContext.closePath(), this.canvasContext.clip(), this.renderFrame(this.renderedFrame, !0)
        }, CanvasRendererBase.prototype.destroy = function() {
          var e;
          for (this.renderConfig.clearCanvas && this.animationItem.wrapper && (this.animationItem.wrapper.innerText = ""), e = (this.layers ? this.layers.length : 0) - 1; e >= 0; e -= 1) this.elements[e] && this.elements[e].destroy && this.elements[e].destroy();
          this.elements.length = 0, this.globalData.canvasContext = null, this.animationItem.container = null, this.destroyed = !0
        }, CanvasRendererBase.prototype.renderFrame = function(e, t) {
          if ((this.renderedFrame !== e || !0 !== this.renderConfig.clearCanvas || t) && !this.destroyed && -1 !== e) {
            var r;
            this.renderedFrame = e, this.globalData.frameNum = e - this.animationItem._isFirstFrame, this.globalData.frameId += 1, this.globalData._mdf = !this.renderConfig.clearCanvas || t, this.globalData.projectInterface.currentFrame = e;
            var i = this.layers.length;
            for (this.completeLayers || this.checkLayers(e), r = i - 1; r >= 0; r -= 1)(this.completeLayers || this.elements[r]) && this.elements[r].prepareFrame(e - this.layers[r].st);
            if (this.globalData._mdf) {
              for (!0 === this.renderConfig.clearCanvas ? this.canvasContext.clearRect(0, 0, this.transformCanvas.w, this.transformCanvas.h) : this.save(), r = i - 1; r >= 0; r -= 1)(this.completeLayers || this.elements[r]) && this.elements[r].renderFrame();
              !0 !== this.renderConfig.clearCanvas && this.restore()
            }
          }
        }, CanvasRendererBase.prototype.buildItem = function(e) {
          var t = this.elements;
          if (!t[e] && 99 !== this.layers[e].ty) {
            var r = this.createItem(this.layers[e], this, this.globalData);
            t[e] = r, r.initExpressions()
          }
        }, CanvasRendererBase.prototype.checkPendingElements = function() {
          for (; this.pendingElements.length;) this.pendingElements.pop().checkParenting()
        }, CanvasRendererBase.prototype.hide = function() {
          this.animationItem.container.style.display = "none"
        }, CanvasRendererBase.prototype.show = function() {
          this.animationItem.container.style.display = "block"
        }, CVContextData.prototype.duplicate = function() {
          var e = 2 * this._length,
            t = 0;
          for (t = this._length; t < e; t += 1) this.stack[t] = new CanvasContext;
          this._length = e
        }, CVContextData.prototype.reset = function() {
          this.cArrPos = 0, this.cTr.reset(), this.stack[this.cArrPos].opacity = 1
        }, CVContextData.prototype.restore = function(e) {
          this.cArrPos -= 1;
          var t, r = this.stack[this.cArrPos],
            i = r.transform,
            n = this.cTr.props;
          for (t = 0; t < 16; t += 1) n[t] = i[t];
          if (e) {
            this.nativeContext.restore();
            var a = this.stack[this.cArrPos + 1];
            this.appliedFillStyle = a.fillStyle, this.appliedStrokeStyle = a.strokeStyle, this.appliedLineWidth = a.lineWidth, this.appliedLineCap = a.lineCap, this.appliedLineJoin = a.lineJoin, this.appliedMiterLimit = a.miterLimit
          }
          this.nativeContext.setTransform(i[0], i[1], i[4], i[5], i[12], i[13]), (e || -1 !== r.opacity && this.currentOpacity !== r.opacity) && (this.nativeContext.globalAlpha = r.opacity, this.currentOpacity = r.opacity), this.currentFillStyle = r.fillStyle, this.currentStrokeStyle = r.strokeStyle, this.currentLineWidth = r.lineWidth, this.currentLineCap = r.lineCap, this.currentLineJoin = r.lineJoin, this.currentMiterLimit = r.miterLimit
        }, CVContextData.prototype.save = function(e) {
          e && this.nativeContext.save();
          var t = this.cTr.props;
          this._length <= this.cArrPos && this.duplicate();
          var r, i = this.stack[this.cArrPos];
          for (r = 0; r < 16; r += 1) i.transform[r] = t[r];
          this.cArrPos += 1;
          var n = this.stack[this.cArrPos];
          n.opacity = i.opacity, n.fillStyle = i.fillStyle, n.strokeStyle = i.strokeStyle, n.lineWidth = i.lineWidth, n.lineCap = i.lineCap, n.lineJoin = i.lineJoin, n.miterLimit = i.miterLimit
        }, CVContextData.prototype.setOpacity = function(e) {
          this.stack[this.cArrPos].opacity = e
        }, CVContextData.prototype.setContext = function(e) {
          this.nativeContext = e
        }, CVContextData.prototype.fillStyle = function(e) {
          this.stack[this.cArrPos].fillStyle !== e && (this.currentFillStyle = e, this.stack[this.cArrPos].fillStyle = e)
        }, CVContextData.prototype.strokeStyle = function(e) {
          this.stack[this.cArrPos].strokeStyle !== e && (this.currentStrokeStyle = e, this.stack[this.cArrPos].strokeStyle = e)
        }, CVContextData.prototype.lineWidth = function(e) {
          this.stack[this.cArrPos].lineWidth !== e && (this.currentLineWidth = e, this.stack[this.cArrPos].lineWidth = e)
        }, CVContextData.prototype.lineCap = function(e) {
          this.stack[this.cArrPos].lineCap !== e && (this.currentLineCap = e, this.stack[this.cArrPos].lineCap = e)
        }, CVContextData.prototype.lineJoin = function(e) {
          this.stack[this.cArrPos].lineJoin !== e && (this.currentLineJoin = e, this.stack[this.cArrPos].lineJoin = e)
        }, CVContextData.prototype.miterLimit = function(e) {
          this.stack[this.cArrPos].miterLimit !== e && (this.currentMiterLimit = e, this.stack[this.cArrPos].miterLimit = e)
        }, CVContextData.prototype.transform = function(e) {
          this.transformMat.cloneFromProps(e);
          var t = this.cTr;
          this.transformMat.multiply(t), t.cloneFromProps(this.transformMat.props);
          var r = t.props;
          this.nativeContext.setTransform(r[0], r[1], r[4], r[5], r[12], r[13])
        }, CVContextData.prototype.opacity = function(e) {
          var t = this.stack[this.cArrPos].opacity;
          t *= e < 0 ? 0 : e, this.stack[this.cArrPos].opacity !== t && (this.currentOpacity !== e && (this.nativeContext.globalAlpha = e, this.currentOpacity = e), this.stack[this.cArrPos].opacity = t)
        }, CVContextData.prototype.fill = function(e) {
          this.appliedFillStyle !== this.currentFillStyle && (this.appliedFillStyle = this.currentFillStyle, this.nativeContext.fillStyle = this.appliedFillStyle), this.nativeContext.fill(e)
        }, CVContextData.prototype.fillRect = function(e, t, r, i) {
          this.appliedFillStyle !== this.currentFillStyle && (this.appliedFillStyle = this.currentFillStyle, this.nativeContext.fillStyle = this.appliedFillStyle), this.nativeContext.fillRect(e, t, r, i)
        }, CVContextData.prototype.stroke = function() {
          this.appliedStrokeStyle !== this.currentStrokeStyle && (this.appliedStrokeStyle = this.currentStrokeStyle, this.nativeContext.strokeStyle = this.appliedStrokeStyle), this.appliedLineWidth !== this.currentLineWidth && (this.appliedLineWidth = this.currentLineWidth, this.nativeContext.lineWidth = this.appliedLineWidth), this.appliedLineCap !== this.currentLineCap && (this.appliedLineCap = this.currentLineCap, this.nativeContext.lineCap = this.appliedLineCap), this.appliedLineJoin !== this.currentLineJoin && (this.appliedLineJoin = this.currentLineJoin, this.nativeContext.lineJoin = this.appliedLineJoin), this.appliedMiterLimit !== this.currentMiterLimit && (this.appliedMiterLimit = this.currentMiterLimit, this.nativeContext.miterLimit = this.appliedMiterLimit), this.nativeContext.stroke()
        }, extendPrototype([CanvasRendererBase, ICompElement, CVBaseElement], CVCompElement), CVCompElement.prototype.renderInnerContent = function() {
          var e, t = this.canvasContext;
          for (t.beginPath(), t.moveTo(0, 0), t.lineTo(this.data.w, 0), t.lineTo(this.data.w, this.data.h), t.lineTo(0, this.data.h), t.lineTo(0, 0), t.clip(), e = this.layers.length - 1; e >= 0; e -= 1)(this.completeLayers || this.elements[e]) && this.elements[e].renderFrame()
        }, CVCompElement.prototype.destroy = function() {
          var e;
          for (e = this.layers.length - 1; e >= 0; e -= 1) this.elements[e] && this.elements[e].destroy();
          this.layers = null, this.elements = null
        }, CVCompElement.prototype.createComp = function(e) {
          return new CVCompElement(e, this.globalData, this)
        }, extendPrototype([CanvasRendererBase], CanvasRenderer), CanvasRenderer.prototype.createComp = function(e) {
          return new CVCompElement(e, this.globalData, this)
        }, HBaseElement.prototype = {
          checkBlendMode: function() {},
          initRendererElement: function() {
            this.baseElement = createTag(this.data.tg || "div"), this.data.hasMask ? (this.svgElement = createNS("svg"), this.layerElement = createNS("g"), this.maskedElement = this.layerElement, this.svgElement.appendChild(this.layerElement), this.baseElement.appendChild(this.svgElement)) : this.layerElement = this.baseElement, styleDiv(this.baseElement)
          },
          createContainerElements: function() {
            this.renderableEffectsManager = new CVEffects(this), this.transformedElement = this.baseElement, this.maskedElement = this.layerElement, this.data.ln && this.layerElement.setAttribute("id", this.data.ln), this.data.cl && this.layerElement.setAttribute("class", this.data.cl), 0 !== this.data.bm && this.setBlendMode()
          },
          renderElement: function() {
            var e = this.transformedElement ? this.transformedElement.style : {};
            if (this.finalTransform._matMdf) {
              var t = this.finalTransform.mat.toCSS();
              e.transform = t, e.webkitTransform = t
            }
            this.finalTransform._opMdf && (e.opacity = this.finalTransform.mProp.o.v)
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
          var e;
          this.data.hasMask ? ((e = createNS("rect")).setAttribute("width", this.data.sw), e.setAttribute("height", this.data.sh), e.setAttribute("fill", this.data.sc), this.svgElement.setAttribute("width", this.data.sw), this.svgElement.setAttribute("height", this.data.sh)) : ((e = createTag("div")).style.width = this.data.sw + "px", e.style.height = this.data.sh + "px", e.style.backgroundColor = this.data.sc), this.layerElement.appendChild(e)
        }, extendPrototype([BaseElement, TransformElement, HSolidElement, SVGShapeElement, HBaseElement, HierarchyElement, FrameElement, RenderableElement], HShapeElement), HShapeElement.prototype._renderShapeFrame = HShapeElement.prototype.renderInnerContent, HShapeElement.prototype.createContent = function() {
          var e;
          if (this.baseElement.style.fontSize = 0, this.data.hasMask) this.layerElement.appendChild(this.shapesContainer), e = this.svgElement;
          else {
            e = createNS("svg");
            var t = this.comp.data ? this.comp.data : this.globalData.compSize;
            e.setAttribute("width", t.w), e.setAttribute("height", t.h), e.appendChild(this.shapesContainer), this.layerElement.appendChild(e)
          }
          this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.shapesContainer, 0, [], !0), this.filterUniqueShapes(), this.shapeCont = e
        }, HShapeElement.prototype.getTransformedPoint = function(e, t) {
          var r, i = e.length;
          for (r = 0; r < i; r += 1) t = e[r].mProps.v.applyToPointArray(t[0], t[1], 0);
          return t
        }, HShapeElement.prototype.calculateShapeBoundingBox = function(e, t) {
          var r, i, n, a, s, o = e.sh.v,
            l = e.transformers,
            u = o._length;
          if (!(u <= 1)) {
            for (r = 0; r < u - 1; r += 1) i = this.getTransformedPoint(l, o.v[r]), n = this.getTransformedPoint(l, o.o[r]), a = this.getTransformedPoint(l, o.i[r + 1]), s = this.getTransformedPoint(l, o.v[r + 1]), this.checkBounds(i, n, a, s, t);
            o.c && (i = this.getTransformedPoint(l, o.v[r]), n = this.getTransformedPoint(l, o.o[r]), a = this.getTransformedPoint(l, o.i[0]), s = this.getTransformedPoint(l, o.v[0]), this.checkBounds(i, n, a, s, t))
          }
        }, HShapeElement.prototype.checkBounds = function(e, t, r, i, n) {
          this.getBoundsOfCurve(e, t, r, i);
          var a = this.shapeBoundingBox;
          n.x = bmMin(a.left, n.x), n.xMax = bmMax(a.right, n.xMax), n.y = bmMin(a.top, n.y), n.yMax = bmMax(a.bottom, n.yMax)
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
        }, HShapeElement.prototype.getBoundsOfCurve = function(e, t, r, i) {
          for (var n, a, s, o, l, u, c, h = [
              [e[0], i[0]],
              [e[1], i[1]]
            ], p = 0; p < 2; ++p) a = 6 * e[p] - 12 * t[p] + 6 * r[p], n = -3 * e[p] + 9 * t[p] - 9 * r[p] + 3 * i[p], s = 3 * t[p] - 3 * e[p], a |= 0, s |= 0, 0 == (n |= 0) && 0 === a || (0 === n ? (o = -s / a) > 0 && o < 1 && h[p].push(this.calculateF(o, e, t, r, i, p)) : (l = a * a - 4 * s * n) >= 0 && ((u = (-a + bmSqrt(l)) / (2 * n)) > 0 && u < 1 && h[p].push(this.calculateF(u, e, t, r, i, p)), (c = (-a - bmSqrt(l)) / (2 * n)) > 0 && c < 1 && h[p].push(this.calculateF(c, e, t, r, i, p))));
          this.shapeBoundingBox.left = bmMin.apply(null, h[0]), this.shapeBoundingBox.top = bmMin.apply(null, h[1]), this.shapeBoundingBox.right = bmMax.apply(null, h[0]), this.shapeBoundingBox.bottom = bmMax.apply(null, h[1])
        }, HShapeElement.prototype.calculateF = function(e, t, r, i, n, a) {
          return bmPow(1 - e, 3) * t[a] + 3 * bmPow(1 - e, 2) * e * r[a] + 3 * (1 - e) * bmPow(e, 2) * i[a] + bmPow(e, 3) * n[a]
        }, HShapeElement.prototype.calculateBoundingBox = function(e, t) {
          var r, i = e.length;
          for (r = 0; r < i; r += 1) e[r] && e[r].sh ? this.calculateShapeBoundingBox(e[r], t) : e[r] && e[r].it ? this.calculateBoundingBox(e[r].it, t) : e[r] && e[r].style && e[r].w && this.expandStrokeBoundingBox(e[r].w, t)
        }, HShapeElement.prototype.expandStrokeBoundingBox = function(e, t) {
          var r = 0;
          if (e.keyframes) {
            for (var i = 0; i < e.keyframes.length; i += 1) {
              var n = e.keyframes[i].s;
              n > r && (r = n)
            }
            r *= e.mult
          } else r = e.v * e.mult;
          t.x -= r, t.xMax += r, t.y -= r, t.yMax += r
        }, HShapeElement.prototype.currentBoxContains = function(e) {
          return this.currentBBox.x <= e.x && this.currentBBox.y <= e.y && this.currentBBox.width + this.currentBBox.x >= e.x + e.width && this.currentBBox.height + this.currentBBox.y >= e.y + e.height
        }, HShapeElement.prototype.renderInnerContent = function() {
          if (this._renderShapeFrame(), !this.hidden && (this._isFirstFrame || this._mdf)) {
            var e = this.tempBoundingBox,
              t = 999999;
            if (e.x = t, e.xMax = -t, e.y = t, e.yMax = -t, this.calculateBoundingBox(this.itemsData, e), e.width = e.xMax < e.x ? 0 : e.xMax - e.x, e.height = e.yMax < e.y ? 0 : e.yMax - e.y, this.currentBoxContains(e)) return;
            var r = !1;
            if (this.currentBBox.w !== e.width && (this.currentBBox.w = e.width, this.shapeCont.setAttribute("width", e.width), r = !0), this.currentBBox.h !== e.height && (this.currentBBox.h = e.height, this.shapeCont.setAttribute("height", e.height), r = !0), r || this.currentBBox.x !== e.x || this.currentBBox.y !== e.y) {
              this.currentBBox.w = e.width, this.currentBBox.h = e.height, this.currentBBox.x = e.x, this.currentBBox.y = e.y, this.shapeCont.setAttribute("viewBox", this.currentBBox.x + " " + this.currentBBox.y + " " + this.currentBBox.w + " " + this.currentBBox.h);
              var i = this.shapeCont.style,
                n = "translate(" + this.currentBBox.x + "px," + this.currentBBox.y + "px)";
              i.transform = n, i.webkitTransform = n
            }
          }
        }, extendPrototype([BaseElement, TransformElement, HBaseElement, HierarchyElement, FrameElement, RenderableDOMElement, ITextElement], HTextElement), HTextElement.prototype.createContent = function() {
          if (this.isMasked = this.checkMasks(), this.isMasked) {
            this.renderType = "svg", this.compW = this.comp.data.w, this.compH = this.comp.data.h, this.svgElement.setAttribute("width", this.compW), this.svgElement.setAttribute("height", this.compH);
            var e = createNS("g");
            this.maskedElement.appendChild(e), this.innerElem = e
          } else this.renderType = "html", this.innerElem = this.layerElement;
          this.checkParenting()
        }, HTextElement.prototype.buildNewText = function() {
          var e = this.textProperty.currentData;
          this.renderedLetters = createSizedArray(e.l ? e.l.length : 0);
          var t = this.innerElem.style,
            r = e.fc ? this.buildColor(e.fc) : "rgba(0,0,0,0)";
          t.fill = r, t.color = r, e.sc && (t.stroke = this.buildColor(e.sc), t.strokeWidth = e.sw + "px");
          var i, n, a = this.globalData.fontManager.getFontByName(e.f);
          if (!this.globalData.fontManager.chars)
            if (t.fontSize = e.finalSize + "px", t.lineHeight = e.finalSize + "px", a.fClass) this.innerElem.className = a.fClass;
            else {
              t.fontFamily = a.fFamily;
              var s = e.fWeight,
                o = e.fStyle;
              t.fontStyle = o, t.fontWeight = s
            } var l, u, c, h = e.l;
          n = h.length;
          var p, d = this.mHelper,
            f = "",
            m = 0;
          for (i = 0; i < n; i += 1) {
            if (this.globalData.fontManager.chars ? (this.textPaths[m] ? l = this.textPaths[m] : ((l = createNS("path")).setAttribute("stroke-linecap", lineCapEnum[1]), l.setAttribute("stroke-linejoin", lineJoinEnum[2]), l.setAttribute("stroke-miterlimit", "4")), this.isMasked || (this.textSpans[m] ? c = (u = this.textSpans[m]).children[0] : ((u = createTag("div")).style.lineHeight = 0, (c = createNS("svg")).appendChild(l), styleDiv(u)))) : this.isMasked ? l = this.textPaths[m] ? this.textPaths[m] : createNS("text") : this.textSpans[m] ? (u = this.textSpans[m], l = this.textPaths[m]) : (styleDiv(u = createTag("span")), styleDiv(l = createTag("span")), u.appendChild(l)), this.globalData.fontManager.chars) {
              var v, g = this.globalData.fontManager.getCharData(e.finalText[i], a.fStyle, this.globalData.fontManager.getFontByName(e.f).fFamily);
              if (v = g ? g.data : null, d.reset(), v && v.shapes && v.shapes.length && (p = v.shapes[0].it, d.scale(e.finalSize / 100, e.finalSize / 100), f = this.createPathShape(d, p), l.setAttribute("d", f)), this.isMasked) this.innerElem.appendChild(l);
              else {
                if (this.innerElem.appendChild(u), v && v.shapes) {
                  document.body.appendChild(c);
                  var y = c.getBBox();
                  c.setAttribute("width", y.width + 2), c.setAttribute("height", y.height + 2), c.setAttribute("viewBox", y.x - 1 + " " + (y.y - 1) + " " + (y.width + 2) + " " + (y.height + 2));
                  var b = c.style,
                    S = "translate(" + (y.x - 1) + "px," + (y.y - 1) + "px)";
                  b.transform = S, b.webkitTransform = S, h[i].yOffset = y.y - 1
                } else c.setAttribute("width", 1), c.setAttribute("height", 1);
                u.appendChild(c)
              }
            } else if (l.textContent = h[i].val, l.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve"), this.isMasked) this.innerElem.appendChild(l);
            else {
              this.innerElem.appendChild(u);
              var x = l.style,
                E = "translate3d(0," + -e.finalSize / 1.2 + "px,0)";
              x.transform = E, x.webkitTransform = E
            }
            this.isMasked ? this.textSpans[m] = l : this.textSpans[m] = u, this.textSpans[m].style.display = "block", this.textPaths[m] = l, m += 1
          }
          for (; m < this.textSpans.length;) this.textSpans[m].style.display = "none", m += 1
        }, HTextElement.prototype.renderInnerContent = function() {
          var e;
          if (this.validateText(), this.data.singleShape) {
            if (!this._isFirstFrame && !this.lettersChangedFlag) return;
            if (this.isMasked && this.finalTransform._matMdf) {
              this.svgElement.setAttribute("viewBox", -this.finalTransform.mProp.p.v[0] + " " + -this.finalTransform.mProp.p.v[1] + " " + this.compW + " " + this.compH), e = this.svgElement.style;
              var t = "translate(" + -this.finalTransform.mProp.p.v[0] + "px," + -this.finalTransform.mProp.p.v[1] + "px)";
              e.transform = t, e.webkitTransform = t
            }
          }
          if (this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag), this.lettersChangedFlag || this.textAnimator.lettersChangedFlag) {
            var r, i, n, a, s, o = 0,
              l = this.textAnimator.renderedLetters,
              u = this.textProperty.currentData.l;
            for (i = u.length, r = 0; r < i; r += 1) u[r].n ? o += 1 : (a = this.textSpans[r], s = this.textPaths[r], n = l[o], o += 1, n._mdf.m && (this.isMasked ? a.setAttribute("transform", n.m) : (a.style.webkitTransform = n.m, a.style.transform = n.m)), a.style.opacity = n.o, n.sw && n._mdf.sw && s.setAttribute("stroke-width", n.sw), n.sc && n._mdf.sc && s.setAttribute("stroke", n.sc), n.fc && n._mdf.fc && (s.setAttribute("fill", n.fc), s.style.color = n.fc));
            if (this.innerElem.getBBox && !this.hidden && (this._isFirstFrame || this._mdf)) {
              var c = this.innerElem.getBBox();
              if (this.currentBBox.w !== c.width && (this.currentBBox.w = c.width, this.svgElement.setAttribute("width", c.width)), this.currentBBox.h !== c.height && (this.currentBBox.h = c.height, this.svgElement.setAttribute("height", c.height)), this.currentBBox.w !== c.width + 2 || this.currentBBox.h !== c.height + 2 || this.currentBBox.x !== c.x - 1 || this.currentBBox.y !== c.y - 1) {
                this.currentBBox.w = c.width + 2, this.currentBBox.h = c.height + 2, this.currentBBox.x = c.x - 1, this.currentBBox.y = c.y - 1, this.svgElement.setAttribute("viewBox", this.currentBBox.x + " " + this.currentBBox.y + " " + this.currentBBox.w + " " + this.currentBBox.h), e = this.svgElement.style;
                var h = "translate(" + this.currentBBox.x + "px," + this.currentBBox.y + "px)";
                e.transform = h, e.webkitTransform = h
              }
            }
          }
        }, extendPrototype([BaseElement, FrameElement, HierarchyElement], HCameraElement), HCameraElement.prototype.setup = function() {
          var e, t, r, i, n = this.comp.threeDElements.length;
          for (e = 0; e < n; e += 1)
            if ("3d" === (t = this.comp.threeDElements[e]).type) {
              r = t.perspectiveElem.style, i = t.container.style;
              var a = this.pe.v + "px",
                s = "0px 0px 0px",
                o = "matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)";
              r.perspective = a, r.webkitPerspective = a, i.transformOrigin = s, i.mozTransformOrigin = s, i.webkitTransformOrigin = s, r.transform = o, r.webkitTransform = o
            }
        }, HCameraElement.prototype.createElements = function() {}, HCameraElement.prototype.hide = function() {}, HCameraElement.prototype.renderFrame = function() {
          var e, t, r = this._isFirstFrame;
          if (this.hierarchy)
            for (t = this.hierarchy.length, e = 0; e < t; e += 1) r = this.hierarchy[e].finalTransform.mProp._mdf || r;
          if (r || this.pe._mdf || this.p && this.p._mdf || this.px && (this.px._mdf || this.py._mdf || this.pz._mdf) || this.rx._mdf || this.ry._mdf || this.rz._mdf || this.or._mdf || this.a && this.a._mdf) {
            if (this.mat.reset(), this.hierarchy)
              for (e = t = this.hierarchy.length - 1; e >= 0; e -= 1) {
                var i = this.hierarchy[e].finalTransform.mProp;
                this.mat.translate(-i.p.v[0], -i.p.v[1], i.p.v[2]), this.mat.rotateX(-i.or.v[0]).rotateY(-i.or.v[1]).rotateZ(i.or.v[2]), this.mat.rotateX(-i.rx.v).rotateY(-i.ry.v).rotateZ(i.rz.v), this.mat.scale(1 / i.s.v[0], 1 / i.s.v[1], 1 / i.s.v[2]), this.mat.translate(i.a.v[0], i.a.v[1], i.a.v[2])
              }
            if (this.p ? this.mat.translate(-this.p.v[0], -this.p.v[1], this.p.v[2]) : this.mat.translate(-this.px.v, -this.py.v, this.pz.v), this.a) {
              var n;
              n = this.p ? [this.p.v[0] - this.a.v[0], this.p.v[1] - this.a.v[1], this.p.v[2] - this.a.v[2]] : [this.px.v - this.a.v[0], this.py.v - this.a.v[1], this.pz.v - this.a.v[2]];
              var a = Math.sqrt(Math.pow(n[0], 2) + Math.pow(n[1], 2) + Math.pow(n[2], 2)),
                s = [n[0] / a, n[1] / a, n[2] / a],
                o = Math.sqrt(s[2] * s[2] + s[0] * s[0]),
                l = Math.atan2(s[1], o),
                u = Math.atan2(s[0], -s[2]);
              this.mat.rotateY(u).rotateX(-l)
            }
            this.mat.rotateX(-this.rx.v).rotateY(-this.ry.v).rotateZ(this.rz.v), this.mat.rotateX(-this.or.v[0]).rotateY(-this.or.v[1]).rotateZ(this.or.v[2]), this.mat.translate(this.globalData.compSize.w / 2, this.globalData.compSize.h / 2, 0), this.mat.translate(0, 0, this.pe.v);
            var c = !this._prevMat.equals(this.mat);
            if ((c || this.pe._mdf) && this.comp.threeDElements) {
              var h, p, d;
              for (t = this.comp.threeDElements.length, e = 0; e < t; e += 1)
                if ("3d" === (h = this.comp.threeDElements[e]).type) {
                  if (c) {
                    var f = this.mat.toCSS();
                    (d = h.container.style).transform = f, d.webkitTransform = f
                  }
                  this.pe._mdf && ((p = h.perspectiveElem.style).perspective = this.pe.v + "px", p.webkitPerspective = this.pe.v + "px")
                } this.mat.clone(this._prevMat)
            }
          }
          this._isFirstFrame = !1
        }, HCameraElement.prototype.prepareFrame = function(e) {
          this.prepareProperties(e, !0)
        }, HCameraElement.prototype.destroy = function() {}, HCameraElement.prototype.getBaseElement = function() {
          return null
        }, extendPrototype([BaseElement, TransformElement, HBaseElement, HSolidElement, HierarchyElement, FrameElement, RenderableElement], HImageElement), HImageElement.prototype.createContent = function() {
          var e = this.globalData.getAssetsPath(this.assetData),
            t = new Image;
          this.data.hasMask ? (this.imageElem = createNS("image"), this.imageElem.setAttribute("width", this.assetData.w + "px"), this.imageElem.setAttribute("height", this.assetData.h + "px"), this.imageElem.setAttributeNS("http://www.w3.org/1999/xlink", "href", e), this.layerElement.appendChild(this.imageElem), this.baseElement.setAttribute("width", this.assetData.w), this.baseElement.setAttribute("height", this.assetData.h)) : this.layerElement.appendChild(t), t.crossOrigin = "anonymous", t.src = e, this.data.ln && this.baseElement.setAttribute("id", this.data.ln)
        }, extendPrototype([BaseRenderer], HybridRendererBase), HybridRendererBase.prototype.buildItem = SVGRenderer.prototype.buildItem, HybridRendererBase.prototype.checkPendingElements = function() {
          for (; this.pendingElements.length;) this.pendingElements.pop().checkParenting()
        }, HybridRendererBase.prototype.appendElementInPos = function(e, t) {
          var r = e.getBaseElement();
          if (r) {
            var i = this.layers[t];
            if (i.ddd && this.supports3d) this.addTo3dContainer(r, t);
            else if (this.threeDElements) this.addTo3dContainer(r, t);
            else {
              for (var n, a, s = 0; s < t;) this.elements[s] && !0 !== this.elements[s] && this.elements[s].getBaseElement && (a = this.elements[s], n = (this.layers[s].ddd ? this.getThreeDContainerByPos(s) : a.getBaseElement()) || n), s += 1;
              n ? i.ddd && this.supports3d || this.layerElement.insertBefore(r, n) : i.ddd && this.supports3d || this.layerElement.appendChild(r)
            }
          }
        }, HybridRendererBase.prototype.createShape = function(e) {
          return this.supports3d ? new HShapeElement(e, this.globalData, this) : new SVGShapeElement(e, this.globalData, this)
        }, HybridRendererBase.prototype.createText = function(e) {
          return this.supports3d ? new HTextElement(e, this.globalData, this) : new SVGTextLottieElement(e, this.globalData, this)
        }, HybridRendererBase.prototype.createCamera = function(e) {
          return this.camera = new HCameraElement(e, this.globalData, this), this.camera
        }, HybridRendererBase.prototype.createImage = function(e) {
          return this.supports3d ? new HImageElement(e, this.globalData, this) : new IImageElement(e, this.globalData, this)
        }, HybridRendererBase.prototype.createSolid = function(e) {
          return this.supports3d ? new HSolidElement(e, this.globalData, this) : new ISolidElement(e, this.globalData, this)
        }, HybridRendererBase.prototype.createNull = SVGRenderer.prototype.createNull, HybridRendererBase.prototype.getThreeDContainerByPos = function(e) {
          for (var t = 0, r = this.threeDElements.length; t < r;) {
            if (this.threeDElements[t].startPos <= e && this.threeDElements[t].endPos >= e) return this.threeDElements[t].perspectiveElem;
            t += 1
          }
          return null
        }, HybridRendererBase.prototype.createThreeDContainer = function(e, t) {
          var r, i, n = createTag("div");
          styleDiv(n);
          var a = createTag("div");
          if (styleDiv(a), "3d" === t) {
            (r = n.style).width = this.globalData.compSize.w + "px", r.height = this.globalData.compSize.h + "px";
            var s = "50% 50%";
            r.webkitTransformOrigin = s, r.mozTransformOrigin = s, r.transformOrigin = s;
            var o = "matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)";
            (i = a.style).transform = o, i.webkitTransform = o
          }
          n.appendChild(a);
          var l = {
            container: a,
            perspectiveElem: n,
            startPos: e,
            endPos: e,
            type: t
          };
          return this.threeDElements.push(l), l
        }, HybridRendererBase.prototype.build3dContainers = function() {
          var e, t, r = this.layers.length,
            i = "";
          for (e = 0; e < r; e += 1) this.layers[e].ddd && 3 !== this.layers[e].ty ? ("3d" !== i && (i = "3d", t = this.createThreeDContainer(e, "3d")), t.endPos = Math.max(t.endPos, e)) : ("2d" !== i && (i = "2d", t = this.createThreeDContainer(e, "2d")), t.endPos = Math.max(t.endPos, e));
          for (e = (r = this.threeDElements.length) - 1; e >= 0; e -= 1) this.resizerElem.appendChild(this.threeDElements[e].perspectiveElem)
        }, HybridRendererBase.prototype.addTo3dContainer = function(e, t) {
          for (var r = 0, i = this.threeDElements.length; r < i;) {
            if (t <= this.threeDElements[r].endPos) {
              for (var n, a = this.threeDElements[r].startPos; a < t;) this.elements[a] && this.elements[a].getBaseElement && (n = this.elements[a].getBaseElement()), a += 1;
              n ? this.threeDElements[r].container.insertBefore(e, n) : this.threeDElements[r].container.appendChild(e);
              break
            }
            r += 1
          }
        }, HybridRendererBase.prototype.configAnimation = function(e) {
          var t = createTag("div"),
            r = this.animationItem.wrapper,
            i = t.style;
          i.width = e.w + "px", i.height = e.h + "px", this.resizerElem = t, styleDiv(t), i.transformStyle = "flat", i.mozTransformStyle = "flat", i.webkitTransformStyle = "flat", this.renderConfig.className && t.setAttribute("class", this.renderConfig.className), r.appendChild(t), i.overflow = "hidden";
          var n = createNS("svg");
          n.setAttribute("width", "1"), n.setAttribute("height", "1"), styleDiv(n), this.resizerElem.appendChild(n);
          var a = createNS("defs");
          n.appendChild(a), this.data = e, this.setupGlobalData(e, n), this.globalData.defs = a, this.layers = e.layers, this.layerElement = this.resizerElem, this.build3dContainers(), this.updateContainerSize()
        }, HybridRendererBase.prototype.destroy = function() {
          var e;
          this.animationItem.wrapper && (this.animationItem.wrapper.innerText = ""), this.animationItem.container = null, this.globalData.defs = null;
          var t = this.layers ? this.layers.length : 0;
          for (e = 0; e < t; e += 1) this.elements[e] && this.elements[e].destroy && this.elements[e].destroy();
          this.elements.length = 0, this.destroyed = !0, this.animationItem = null
        }, HybridRendererBase.prototype.updateContainerSize = function() {
          var e, t, r, i, n = this.animationItem.wrapper.offsetWidth,
            a = this.animationItem.wrapper.offsetHeight,
            s = n / a;
          this.globalData.compSize.w / this.globalData.compSize.h > s ? (e = n / this.globalData.compSize.w, t = n / this.globalData.compSize.w, r = 0, i = (a - this.globalData.compSize.h * (n / this.globalData.compSize.w)) / 2) : (e = a / this.globalData.compSize.h, t = a / this.globalData.compSize.h, r = (n - this.globalData.compSize.w * (a / this.globalData.compSize.h)) / 2, i = 0);
          var o = this.resizerElem.style;
          o.webkitTransform = "matrix3d(" + e + ",0,0,0,0," + t + ",0,0,0,0,1,0," + r + "," + i + ",0,1)", o.transform = o.webkitTransform
        }, HybridRendererBase.prototype.renderFrame = SVGRenderer.prototype.renderFrame, HybridRendererBase.prototype.hide = function() {
          this.resizerElem.style.display = "none"
        }, HybridRendererBase.prototype.show = function() {
          this.resizerElem.style.display = "block"
        }, HybridRendererBase.prototype.initItems = function() {
          if (this.buildAllItems(), this.camera) this.camera.setup();
          else {
            var e, t = this.globalData.compSize.w,
              r = this.globalData.compSize.h,
              i = this.threeDElements.length;
            for (e = 0; e < i; e += 1) {
              var n = this.threeDElements[e].perspectiveElem.style;
              n.webkitPerspective = Math.sqrt(Math.pow(t, 2) + Math.pow(r, 2)) + "px", n.perspective = n.webkitPerspective
            }
          }
        }, HybridRendererBase.prototype.searchExtraCompositions = function(e) {
          var t, r = e.length,
            i = createTag("div");
          for (t = 0; t < r; t += 1)
            if (e[t].xt) {
              var n = this.createComp(e[t], i, this.globalData.comp, null);
              n.initExpressions(), this.globalData.projectInterface.registerComposition(n)
            }
        }, extendPrototype([HybridRendererBase, ICompElement, HBaseElement], HCompElement), HCompElement.prototype._createBaseContainerElements = HCompElement.prototype.createContainerElements, HCompElement.prototype.createContainerElements = function() {
          this._createBaseContainerElements(), this.data.hasMask ? (this.svgElement.setAttribute("width", this.data.w), this.svgElement.setAttribute("height", this.data.h), this.transformedElement = this.baseElement) : this.transformedElement = this.layerElement
        }, HCompElement.prototype.addTo3dContainer = function(e, t) {
          for (var r, i = 0; i < t;) this.elements[i] && this.elements[i].getBaseElement && (r = this.elements[i].getBaseElement()), i += 1;
          r ? this.layerElement.insertBefore(e, r) : this.layerElement.appendChild(e)
        }, HCompElement.prototype.createComp = function(e) {
          return this.supports3d ? new HCompElement(e, this.globalData, this) : new SVGCompElement(e, this.globalData, this)
        }, extendPrototype([HybridRendererBase], HybridRenderer), HybridRenderer.prototype.createComp = function(e) {
          return this.supports3d ? new HCompElement(e, this.globalData, this) : new SVGCompElement(e, this.globalData, this)
        };
        var CompExpressionInterface = function(e) {
          function t(t) {
            for (var r = 0, i = e.layers.length; r < i;) {
              if (e.layers[r].nm === t || e.layers[r].ind === t) return e.elements[r].layerInterface;
              r += 1
            }
            return null
          }
          return Object.defineProperty(t, "_name", {
            value: e.data.nm
          }), t.layer = t, t.pixelAspect = 1, t.height = e.data.h || e.globalData.compSize.h, t.width = e.data.w || e.globalData.compSize.w, t.pixelAspect = 1, t.frameDuration = 1 / e.globalData.frameRate, t.displayStartTime = 0, t.numLayers = e.layers.length, t
        };

        function _typeof$2(e) {
          return _typeof$2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
          } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
          }, _typeof$2(e)
        }

        function seedRandom(e, t) {
          var r, i = this,
            n = 256,
            a = "random",
            s = t.pow(n, 6),
            o = t.pow(2, 52),
            l = 2 * o,
            u = 255;

          function c(e) {
            var t, r = e.length,
              i = this,
              a = 0,
              s = i.i = i.j = 0,
              o = i.S = [];
            for (r || (e = [r++]); a < n;) o[a] = a++;
            for (a = 0; a < n; a++) o[a] = o[s = u & s + e[a % r] + (t = o[a])], o[s] = t;
            i.g = function(e) {
              for (var t, r = 0, a = i.i, s = i.j, o = i.S; e--;) t = o[a = u & a + 1], r = r * n + o[u & (o[a] = o[s = u & s + t]) + (o[s] = t)];
              return i.i = a, i.j = s, r
            }
          }

          function h(e, t) {
            return t.i = e.i, t.j = e.j, t.S = e.S.slice(), t
          }

          function p(e, t) {
            var r, i = [],
              n = _typeof$2(e);
            if (t && "object" == n)
              for (r in e) try {
                i.push(p(e[r], t - 1))
              } catch (e) {}
            return i.length ? i : "string" == n ? e : e + "\0"
          }

          function d(e, t) {
            for (var r, i = e + "", n = 0; n < i.length;) t[u & n] = u & (r ^= 19 * t[u & n]) + i.charCodeAt(n++);
            return f(t)
          }

          function f(e) {
            return String.fromCharCode.apply(0, e)
          }
          t["seed" + a] = function(u, m, v) {
            var g = [],
              y = d(p((m = !0 === m ? {
                entropy: !0
              } : m || {}).entropy ? [u, f(e)] : null === u ? function() {
                try {
                  r;
                  var t = new Uint8Array(n);
                  return (i.crypto || i.msCrypto).getRandomValues(t), f(t)
                } catch (t) {
                  var a = i.navigator,
                    s = a && a.plugins;
                  return [+new Date, i, s, i.screen, f(e)]
                }
              }() : u, 3), g),
              b = new c(g),
              S = function() {
                for (var e = b.g(6), t = s, r = 0; e < o;) e = (e + r) * n, t *= n, r = b.g(1);
                for (; e >= l;) e /= 2, t /= 2, r >>>= 1;
                return (e + r) / t
              };
            return S.int32 = function() {
              return 0 | b.g(4)
            }, S.quick = function() {
              return b.g(4) / 4294967296
            }, S.double = S, d(f(b.S), e), (m.pass || v || function(e, r, i, n) {
              return n && (n.S && h(n, b), e.state = function() {
                return h(b, {})
              }), i ? (t[a] = e, r) : e
            })(S, y, "global" in m ? m.global : this == t, m.state)
          }, d(t.random(), e)
        }

        function initialize$2(e) {
          seedRandom([], e)
        }
        var propTypes = {
          SHAPE: "shape"
        };

        function _typeof$1(e) {
          return _typeof$1 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
          } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
          }, _typeof$1(e)
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

            function $bm_isInstanceOfArray(e) {
              return e.constructor === Array || e.constructor === Float32Array
            }

            function isNumerable(e, t) {
              return "number" === e || t instanceof Number || "boolean" === e || "string" === e
            }

            function $bm_neg(e) {
              var t = _typeof$1(e);
              if ("number" === t || e instanceof Number || "boolean" === t) return -e;
              if ($bm_isInstanceOfArray(e)) {
                var r, i = e.length,
                  n = [];
                for (r = 0; r < i; r += 1) n[r] = -e[r];
                return n
              }
              return e.propType ? e.v : -e
            }
            initialize$2(BMMath);
            var easeInBez = BezierFactory.getBezierEasing(.333, 0, .833, .833, "easeIn").get,
              easeOutBez = BezierFactory.getBezierEasing(.167, .167, .667, 1, "easeOut").get,
              easeInOutBez = BezierFactory.getBezierEasing(.33, 0, .667, 1, "easeInOut").get;

            function sum(e, t) {
              var r = _typeof$1(e),
                i = _typeof$1(t);
              if (isNumerable(r, e) && isNumerable(i, t) || "string" === r || "string" === i) return e + t;
              if ($bm_isInstanceOfArray(e) && isNumerable(i, t)) return (e = e.slice(0))[0] += t, e;
              if (isNumerable(r, e) && $bm_isInstanceOfArray(t)) return (t = t.slice(0))[0] = e + t[0], t;
              if ($bm_isInstanceOfArray(e) && $bm_isInstanceOfArray(t)) {
                for (var n = 0, a = e.length, s = t.length, o = []; n < a || n < s;)("number" == typeof e[n] || e[n] instanceof Number) && ("number" == typeof t[n] || t[n] instanceof Number) ? o[n] = e[n] + t[n] : o[n] = void 0 === t[n] ? e[n] : e[n] || t[n], n += 1;
                return o
              }
              return 0
            }
            var add = sum;

            function sub(e, t) {
              var r = _typeof$1(e),
                i = _typeof$1(t);
              if (isNumerable(r, e) && isNumerable(i, t)) return "string" === r && (e = parseInt(e, 10)), "string" === i && (t = parseInt(t, 10)), e - t;
              if ($bm_isInstanceOfArray(e) && isNumerable(i, t)) return (e = e.slice(0))[0] -= t, e;
              if (isNumerable(r, e) && $bm_isInstanceOfArray(t)) return (t = t.slice(0))[0] = e - t[0], t;
              if ($bm_isInstanceOfArray(e) && $bm_isInstanceOfArray(t)) {
                for (var n = 0, a = e.length, s = t.length, o = []; n < a || n < s;)("number" == typeof e[n] || e[n] instanceof Number) && ("number" == typeof t[n] || t[n] instanceof Number) ? o[n] = e[n] - t[n] : o[n] = void 0 === t[n] ? e[n] : e[n] || t[n], n += 1;
                return o
              }
              return 0
            }

            function mul(e, t) {
              var r, i, n, a = _typeof$1(e),
                s = _typeof$1(t);
              if (isNumerable(a, e) && isNumerable(s, t)) return e * t;
              if ($bm_isInstanceOfArray(e) && isNumerable(s, t)) {
                for (n = e.length, r = createTypedArray("float32", n), i = 0; i < n; i += 1) r[i] = e[i] * t;
                return r
              }
              if (isNumerable(a, e) && $bm_isInstanceOfArray(t)) {
                for (n = t.length, r = createTypedArray("float32", n), i = 0; i < n; i += 1) r[i] = e * t[i];
                return r
              }
              return 0
            }

            function div(e, t) {
              var r, i, n, a = _typeof$1(e),
                s = _typeof$1(t);
              if (isNumerable(a, e) && isNumerable(s, t)) return e / t;
              if ($bm_isInstanceOfArray(e) && isNumerable(s, t)) {
                for (n = e.length, r = createTypedArray("float32", n), i = 0; i < n; i += 1) r[i] = e[i] / t;
                return r
              }
              if (isNumerable(a, e) && $bm_isInstanceOfArray(t)) {
                for (n = t.length, r = createTypedArray("float32", n), i = 0; i < n; i += 1) r[i] = e / t[i];
                return r
              }
              return 0
            }

            function mod(e, t) {
              return "string" == typeof e && (e = parseInt(e, 10)), "string" == typeof t && (t = parseInt(t, 10)), e % t
            }
            var $bm_sum = sum,
              $bm_sub = sub,
              $bm_mul = mul,
              $bm_div = div,
              $bm_mod = mod;

            function clamp(e, t, r) {
              if (t > r) {
                var i = r;
                r = t, t = i
              }
              return Math.min(Math.max(e, t), r)
            }

            function radiansToDegrees(e) {
              return e / degToRads
            }
            var radians_to_degrees = radiansToDegrees;

            function degreesToRadians(e) {
              return e * degToRads
            }
            var degrees_to_radians = radiansToDegrees,
              helperLengthArray = [0, 0, 0, 0, 0, 0];

            function length(e, t) {
              if ("number" == typeof e || e instanceof Number) return t = t || 0, Math.abs(e - t);
              var r;
              t || (t = helperLengthArray);
              var i = Math.min(e.length, t.length),
                n = 0;
              for (r = 0; r < i; r += 1) n += Math.pow(t[r] - e[r], 2);
              return Math.sqrt(n)
            }

            function normalize(e) {
              return div(e, length(e))
            }

            function rgbToHsl(e) {
              var t, r, i = e[0],
                n = e[1],
                a = e[2],
                s = Math.max(i, n, a),
                o = Math.min(i, n, a),
                l = (s + o) / 2;
              if (s === o) t = 0, r = 0;
              else {
                var u = s - o;
                switch (r = l > .5 ? u / (2 - s - o) : u / (s + o), s) {
                  case i:
                    t = (n - a) / u + (n < a ? 6 : 0);
                    break;
                  case n:
                    t = (a - i) / u + 2;
                    break;
                  case a:
                    t = (i - n) / u + 4
                }
                t /= 6
              }
              return [t, r, l, e[3]]
            }

            function hue2rgb(e, t, r) {
              return r < 0 && (r += 1), r > 1 && (r -= 1), r < 1 / 6 ? e + 6 * (t - e) * r : r < .5 ? t : r < 2 / 3 ? e + (t - e) * (2 / 3 - r) * 6 : e
            }

            function hslToRgb(e) {
              var t, r, i, n = e[0],
                a = e[1],
                s = e[2];
              if (0 === a) t = s, i = s, r = s;
              else {
                var o = s < .5 ? s * (1 + a) : s + a - s * a,
                  l = 2 * s - o;
                t = hue2rgb(l, o, n + 1 / 3), r = hue2rgb(l, o, n), i = hue2rgb(l, o, n - 1 / 3)
              }
              return [t, r, i, e[3]]
            }

            function linear(e, t, r, i, n) {
              if (void 0 !== i && void 0 !== n || (i = t, n = r, t = 0, r = 1), r < t) {
                var a = r;
                r = t, t = a
              }
              if (e <= t) return i;
              if (e >= r) return n;
              var s, o = r === t ? 0 : (e - t) / (r - t);
              if (!i.length) return i + (n - i) * o;
              var l = i.length,
                u = createTypedArray("float32", l);
              for (s = 0; s < l; s += 1) u[s] = i[s] + (n[s] - i[s]) * o;
              return u
            }

            function random(e, t) {
              if (void 0 === t && (void 0 === e ? (e = 0, t = 1) : (t = e, e = void 0)), t.length) {
                var r, i = t.length;
                e || (e = createTypedArray("float32", i));
                var n = createTypedArray("float32", i),
                  a = BMMath.random();
                for (r = 0; r < i; r += 1) n[r] = e[r] + a * (t[r] - e[r]);
                return n
              }
              return void 0 === e && (e = 0), e + BMMath.random() * (t - e)
            }

            function createPath(e, t, r, i) {
              var n, a = e.length,
                s = shapePool.newElement();
              s.setPathData(!!i, a);
              var o, l, u = [0, 0];
              for (n = 0; n < a; n += 1) o = t && t[n] ? t[n] : u, l = r && r[n] ? r[n] : u, s.setTripleAt(e[n][0], e[n][1], l[0] + e[n][0], l[1] + e[n][1], o[0] + e[n][0], o[1] + e[n][1], n, !0);
              return s
            }

            function initiateExpression(elem, data, property) {
              function noOp(e) {
                return e
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
                wiggle = function(e, t) {
                  var r, i, n = this.pv.length ? this.pv.length : 1,
                    a = createTypedArray("float32", n),
                    s = Math.floor(5 * time);
                  for (r = 0, i = 0; r < s;) {
                    for (i = 0; i < n; i += 1) a[i] += -t + 2 * t * BMMath.random();
                    r += 1
                  }
                  var o = 5 * time,
                    l = o - Math.floor(o),
                    u = createTypedArray("float32", n);
                  if (n > 1) {
                    for (i = 0; i < n; i += 1) u[i] = this.pv[i] + a[i] + (-t + 2 * t * BMMath.random()) * l;
                    return u
                  }
                  return this.pv + a[0] + (-t + 2 * t * BMMath.random()) * l
                }.bind(this);

              function loopInDuration(e, t) {
                return loopIn(e, t, !0)
              }

              function loopOutDuration(e, t) {
                return loopOut(e, t, !0)
              }
              thisProperty.loopIn && (loopIn = thisProperty.loopIn.bind(thisProperty), loop_in = loopIn), thisProperty.loopOut && (loopOut = thisProperty.loopOut.bind(thisProperty), loop_out = loopOut), thisProperty.smooth && (smooth = thisProperty.smooth.bind(thisProperty)), this.getValueAtTime && (valueAtTime = this.getValueAtTime.bind(this)), this.getVelocityAtTime && (velocityAtTime = this.getVelocityAtTime.bind(this));
              var comp = elem.comp.globalData.projectInterface.bind(elem.comp.globalData.projectInterface),
                time, velocity, value, text, textIndex, textTotal, selectorValue;

              function lookAt(e, t) {
                var r = [t[0] - e[0], t[1] - e[1], t[2] - e[2]],
                  i = Math.atan2(r[0], Math.sqrt(r[1] * r[1] + r[2] * r[2])) / degToRads;
                return [-Math.atan2(r[1], r[2]) / degToRads, i, 0]
              }

              function easeOut(e, t, r, i, n) {
                return applyEase(easeOutBez, e, t, r, i, n)
              }

              function easeIn(e, t, r, i, n) {
                return applyEase(easeInBez, e, t, r, i, n)
              }

              function ease(e, t, r, i, n) {
                return applyEase(easeInOutBez, e, t, r, i, n)
              }

              function applyEase(e, t, r, i, n, a) {
                void 0 === n ? (n = r, a = i) : t = (t - r) / (i - r), t > 1 ? t = 1 : t < 0 && (t = 0);
                var s = e(t);
                if ($bm_isInstanceOfArray(n)) {
                  var o, l = n.length,
                    u = createTypedArray("float32", l);
                  for (o = 0; o < l; o += 1) u[o] = (a[o] - n[o]) * s + n[o];
                  return u
                }
                return (a - n) * s + n
              }

              function nearestKey(e) {
                var t, r, i, n = data.k.length;
                if (data.k.length && "number" != typeof data.k[0])
                  if (r = -1, (e *= elem.comp.globalData.frameRate) < data.k[0].t) r = 1, i = data.k[0].t;
                  else {
                    for (t = 0; t < n - 1; t += 1) {
                      if (e === data.k[t].t) {
                        r = t + 1, i = data.k[t].t;
                        break
                      }
                      if (e > data.k[t].t && e < data.k[t + 1].t) {
                        e - data.k[t].t > data.k[t + 1].t - e ? (r = t + 2, i = data.k[t + 1].t) : (r = t + 1, i = data.k[t].t);
                        break
                      }
                    } - 1 === r && (r = t + 1, i = data.k[t].t)
                  }
                else r = 0, i = 0;
                var a = {};
                return a.index = r, a.time = i / elem.comp.globalData.frameRate, a
              }

              function key(e) {
                var t, r, i;
                if (!data.k.length || "number" == typeof data.k[0]) throw new Error("The property has no keyframe at index " + e);
                e -= 1, t = {
                  time: data.k[e].t / elem.comp.globalData.frameRate,
                  value: []
                };
                var n = Object.prototype.hasOwnProperty.call(data.k[e], "s") ? data.k[e].s : data.k[e - 1].e;
                for (i = n.length, r = 0; r < i; r += 1) t[r] = n[r], t.value[r] = n[r];
                return t
              }

              function framesToTime(e, t) {
                return t || (t = elem.comp.globalData.frameRate), e / t
              }

              function timeToFrames(e, t) {
                return e || 0 === e || (e = time), t || (t = elem.comp.globalData.frameRate), e * t
              }

              function seedRandom(e) {
                BMMath.seedrandom(randSeed + e)
              }

              function sourceRectAtTime() {
                return elem.sourceRectAtTime()
              }

              function substring(e, t) {
                return "string" == typeof value ? void 0 === t ? value.substring(e) : value.substring(e, t) : ""
              }

              function substr(e, t) {
                return "string" == typeof value ? void 0 === t ? value.substr(e) : value.substr(e, t) : ""
              }

              function posterizeTime(e) {
                time = 0 === e ? 0 : Math.floor(time * e) / e, value = valueAtTime(time)
              }
              var index = elem.data.ind,
                hasParent = !(!elem.hierarchy || !elem.hierarchy.length),
                parent, randSeed = Math.floor(1e6 * Math.random()),
                globalData = elem.globalData;

              function executeExpression(e) {
                return value = e, this.frameExpressionId === elem.globalData.frameId && "textSelector" !== this.propType ? value : ("textSelector" === this.propType && (textIndex = this.textIndex, textTotal = this.textTotal, selectorValue = this.selectorValue), thisLayer || (text = elem.layerInterface.text, thisLayer = elem.layerInterface, thisComp = elem.comp.compInterface, toWorld = thisLayer.toWorld.bind(thisLayer), fromWorld = thisLayer.fromWorld.bind(thisLayer), fromComp = thisLayer.fromComp.bind(thisLayer), toComp = thisLayer.toComp.bind(thisLayer), mask = thisLayer.mask ? thisLayer.mask.bind(thisLayer) : null, fromCompToSurface = fromComp), transform || (transform = elem.layerInterface("ADBE Transform Group"), $bm_transform = transform, transform && (anchorPoint = transform.anchorPoint)), 4 !== elemType || content || (content = thisLayer("ADBE Root Vectors Group")), effect || (effect = thisLayer(4)), (hasParent = !(!elem.hierarchy || !elem.hierarchy.length)) && !parent && (parent = elem.hierarchy[0].layerInterface), time = this.comp.renderedFrame / this.comp.globalData.frameRate, _needsRandom && seedRandom(randSeed + time), needsVelocity && (velocity = velocityAtTime(time)), expression_function(), this.frameExpressionId = elem.globalData.frameId, scoped_bm_rt = scoped_bm_rt.propType === propTypes.SHAPE ? scoped_bm_rt.v : scoped_bm_rt)
              }
              return executeExpression.__preventDeadCodeRemoval = [$bm_transform, anchorPoint, time, velocity, inPoint, outPoint, width, height, name, loop_in, loop_out, smooth, toComp, fromCompToSurface, toWorld, fromWorld, mask, position, rotation, scale, thisComp, numKeys, active, wiggle, loopInDuration, loopOutDuration, comp, lookAt, easeOut, easeIn, ease, nearestKey, key, text, textIndex, textTotal, selectorValue, framesToTime, timeToFrames, sourceRectAtTime, substring, substr, posterizeTime, index, globalData], executeExpression
            }
            return ob.initiateExpression = initiateExpression, ob.__preventDeadCodeRemoval = [window, document, XMLHttpRequest, fetch, frames, $bm_neg, add, $bm_sum, $bm_sub, $bm_mul, $bm_div, $bm_mod, clamp, radians_to_degrees, degreesToRadians, degrees_to_radians, normalize, rgbToHsl, hslToRgb, linear, random, createPath, _lottieGlobal], ob.resetFrame = resetFrame, ob
          }(),
          Expressions = function() {
            var e = {
              initExpressions: function(e) {
                var t = 0,
                  r = [];
                e.renderer.compInterface = CompExpressionInterface(e.renderer), e.renderer.globalData.projectInterface.registerComposition(e.renderer), e.renderer.globalData.pushExpression = function() {
                  t += 1
                }, e.renderer.globalData.popExpression = function() {
                  0 == (t -= 1) && function() {
                    var e, t = r.length;
                    for (e = 0; e < t; e += 1) r[e].release();
                    r.length = 0
                  }()
                }, e.renderer.globalData.registerExpressionProperty = function(e) {
                  -1 === r.indexOf(e) && r.push(e)
                }
              }
            };
            return e.resetFrame = ExpressionManager.resetFrame, e
          }(),
          MaskManagerInterface = function() {
            function e(e, t) {
              this._mask = e, this._data = t
            }
            return Object.defineProperty(e.prototype, "maskPath", {
                get: function() {
                  return this._mask.prop.k && this._mask.prop.getValue(), this._mask.prop
                }
              }), Object.defineProperty(e.prototype, "maskOpacity", {
                get: function() {
                  return this._mask.op.k && this._mask.op.getValue(), 100 * this._mask.op.v
                }
              }),
              function(t) {
                var r, i = createSizedArray(t.viewData.length),
                  n = t.viewData.length;
                for (r = 0; r < n; r += 1) i[r] = new e(t.viewData[r], t.masksProperties[r]);
                return function(e) {
                  for (r = 0; r < n;) {
                    if (t.masksProperties[r].nm === e) return i[r];
                    r += 1
                  }
                  return null
                }
              }
          }(),
          ExpressionPropertyInterface = function() {
            var e = {
                pv: 0,
                v: 0,
                mult: 1
              },
              t = {
                pv: [0, 0, 0],
                v: [0, 0, 0],
                mult: 1
              };

            function r(e, t, r) {
              Object.defineProperty(e, "velocity", {
                get: function() {
                  return t.getVelocityAtTime(t.comp.currentFrame)
                }
              }), e.numKeys = t.keyframes ? t.keyframes.length : 0, e.key = function(i) {
                if (!e.numKeys) return 0;
                var n;
                n = "s" in t.keyframes[i - 1] ? t.keyframes[i - 1].s : "e" in t.keyframes[i - 2] ? t.keyframes[i - 2].e : t.keyframes[i - 2].s;
                var a = "unidimensional" === r ? new Number(n) : Object.assign({}, n);
                return a.time = t.keyframes[i - 1].t / t.elem.comp.globalData.frameRate, a.value = "unidimensional" === r ? n[0] : n, a
              }, e.valueAtTime = t.getValueAtTime, e.speedAtTime = t.getSpeedAtTime, e.velocityAtTime = t.getVelocityAtTime, e.propertyGroup = t.propertyGroup
            }

            function i() {
              return e
            }
            return function(n) {
              return n ? "unidimensional" === n.propType ? function(t) {
                t && "pv" in t || (t = e);
                var i = 1 / t.mult,
                  n = t.pv * i,
                  a = new Number(n);
                return a.value = n, r(a, t, "unidimensional"),
                  function() {
                    return t.k && t.getValue(), n = t.v * i, a.value !== n && ((a = new Number(n)).value = n, r(a, t, "unidimensional")), a
                  }
              }(n) : function(e) {
                e && "pv" in e || (e = t);
                var i = 1 / e.mult,
                  n = e.data && e.data.l || e.pv.length,
                  a = createTypedArray("float32", n),
                  s = createTypedArray("float32", n);
                return a.value = s, r(a, e, "multidimensional"),
                  function() {
                    e.k && e.getValue();
                    for (var t = 0; t < n; t += 1) s[t] = e.v[t] * i, a[t] = s[t];
                    return a
                  }
              }(n) : i
            }
          }(),
          TransformExpressionInterface = function(e) {
            function t(e) {
              switch (e) {
                case "scale":
                case "Scale":
                case "ADBE Scale":
                case 6:
                  return t.scale;
                case "rotation":
                case "Rotation":
                case "ADBE Rotation":
                case "ADBE Rotate Z":
                case 10:
                  return t.rotation;
                case "ADBE Rotate X":
                  return t.xRotation;
                case "ADBE Rotate Y":
                  return t.yRotation;
                case "position":
                case "Position":
                case "ADBE Position":
                case 2:
                  return t.position;
                case "ADBE Position_0":
                  return t.xPosition;
                case "ADBE Position_1":
                  return t.yPosition;
                case "ADBE Position_2":
                  return t.zPosition;
                case "anchorPoint":
                case "AnchorPoint":
                case "Anchor Point":
                case "ADBE AnchorPoint":
                case 1:
                  return t.anchorPoint;
                case "opacity":
                case "Opacity":
                case 11:
                  return t.opacity;
                default:
                  return null
              }
            }
            var r, i, n, a;
            return Object.defineProperty(t, "rotation", {
              get: ExpressionPropertyInterface(e.r || e.rz)
            }), Object.defineProperty(t, "zRotation", {
              get: ExpressionPropertyInterface(e.rz || e.r)
            }), Object.defineProperty(t, "xRotation", {
              get: ExpressionPropertyInterface(e.rx)
            }), Object.defineProperty(t, "yRotation", {
              get: ExpressionPropertyInterface(e.ry)
            }), Object.defineProperty(t, "scale", {
              get: ExpressionPropertyInterface(e.s)
            }), e.p ? a = ExpressionPropertyInterface(e.p) : (r = ExpressionPropertyInterface(e.px), i = ExpressionPropertyInterface(e.py), e.pz && (n = ExpressionPropertyInterface(e.pz))), Object.defineProperty(t, "position", {
              get: function() {
                return e.p ? a() : [r(), i(), n ? n() : 0]
              }
            }), Object.defineProperty(t, "xPosition", {
              get: ExpressionPropertyInterface(e.px)
            }), Object.defineProperty(t, "yPosition", {
              get: ExpressionPropertyInterface(e.py)
            }), Object.defineProperty(t, "zPosition", {
              get: ExpressionPropertyInterface(e.pz)
            }), Object.defineProperty(t, "anchorPoint", {
              get: ExpressionPropertyInterface(e.a)
            }), Object.defineProperty(t, "opacity", {
              get: ExpressionPropertyInterface(e.o)
            }), Object.defineProperty(t, "skew", {
              get: ExpressionPropertyInterface(e.sk)
            }), Object.defineProperty(t, "skewAxis", {
              get: ExpressionPropertyInterface(e.sa)
            }), Object.defineProperty(t, "orientation", {
              get: ExpressionPropertyInterface(e.or)
            }), t
          },
          LayerExpressionInterface = function() {
            function e(e) {
              var t = new Matrix;
              return void 0 !== e ? this._elem.finalTransform.mProp.getValueAtTime(e).clone(t) : this._elem.finalTransform.mProp.applyToMatrix(t), t
            }

            function t(e, t) {
              var r = this.getMatrix(t);
              return r.props[12] = 0, r.props[13] = 0, r.props[14] = 0, this.applyPoint(r, e)
            }

            function r(e, t) {
              var r = this.getMatrix(t);
              return this.applyPoint(r, e)
            }

            function i(e, t) {
              var r = this.getMatrix(t);
              return r.props[12] = 0, r.props[13] = 0, r.props[14] = 0, this.invertPoint(r, e)
            }

            function n(e, t) {
              var r = this.getMatrix(t);
              return this.invertPoint(r, e)
            }

            function a(e, t) {
              if (this._elem.hierarchy && this._elem.hierarchy.length) {
                var r, i = this._elem.hierarchy.length;
                for (r = 0; r < i; r += 1) this._elem.hierarchy[r].finalTransform.mProp.applyToMatrix(e)
              }
              return e.applyToPointArray(t[0], t[1], t[2] || 0)
            }

            function s(e, t) {
              if (this._elem.hierarchy && this._elem.hierarchy.length) {
                var r, i = this._elem.hierarchy.length;
                for (r = 0; r < i; r += 1) this._elem.hierarchy[r].finalTransform.mProp.applyToMatrix(e)
              }
              return e.inversePoint(t)
            }

            function o(e) {
              var t = new Matrix;
              if (t.reset(), this._elem.finalTransform.mProp.applyToMatrix(t), this._elem.hierarchy && this._elem.hierarchy.length) {
                var r, i = this._elem.hierarchy.length;
                for (r = 0; r < i; r += 1) this._elem.hierarchy[r].finalTransform.mProp.applyToMatrix(t);
                return t.inversePoint(e)
              }
              return t.inversePoint(e)
            }

            function l() {
              return [1, 1, 1, 1]
            }
            return function(u) {
              var c;

              function h(e) {
                switch (e) {
                  case "ADBE Root Vectors Group":
                  case "Contents":
                  case 2:
                    return h.shapeInterface;
                  case 1:
                  case 6:
                  case "Transform":
                  case "transform":
                  case "ADBE Transform Group":
                    return c;
                  case 4:
                  case "ADBE Effect Parade":
                  case "effects":
                  case "Effects":
                    return h.effect;
                  case "ADBE Text Properties":
                    return h.textInterface;
                  default:
                    return null
                }
              }
              h.getMatrix = e, h.invertPoint = s, h.applyPoint = a, h.toWorld = r, h.toWorldVec = t, h.fromWorld = n, h.fromWorldVec = i, h.toComp = r, h.fromComp = o, h.sampleImage = l, h.sourceRectAtTime = u.sourceRectAtTime.bind(u), h._elem = u;
              var p = getDescriptor(c = TransformExpressionInterface(u.finalTransform.mProp), "anchorPoint");
              return Object.defineProperties(h, {
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
                rotation: getDescriptor(c, "rotation"),
                scale: getDescriptor(c, "scale"),
                position: getDescriptor(c, "position"),
                opacity: getDescriptor(c, "opacity"),
                anchorPoint: p,
                anchor_point: p,
                transform: {
                  get: function() {
                    return c
                  }
                },
                active: {
                  get: function() {
                    return u.isInRange
                  }
                }
              }), h.startTime = u.data.st, h.index = u.data.ind, h.source = u.data.refId, h.height = 0 === u.data.ty ? u.data.h : 100, h.width = 0 === u.data.ty ? u.data.w : 100, h.inPoint = u.data.ip / u.comp.globalData.frameRate, h.outPoint = u.data.op / u.comp.globalData.frameRate, h._name = u.data.nm, h.registerMaskInterface = function(e) {
                h.mask = new MaskManagerInterface(e, u)
              }, h.registerEffectsInterface = function(e) {
                h.effect = e
              }, h
            }
          }(),
          propertyGroupFactory = function(e, t) {
            return function(r) {
              return (r = void 0 === r ? 1 : r) <= 0 ? e : t(r - 1)
            }
          },
          PropertyInterface = function(e, t) {
            var r = {
              _name: e
            };
            return function(e) {
              return (e = void 0 === e ? 1 : e) <= 0 ? r : t(e - 1)
            }
          },
          EffectsExpressionInterface = function() {
            function e(r, i, n, a) {
              function s(e) {
                for (var t = r.ef, i = 0, n = t.length; i < n;) {
                  if (e === t[i].nm || e === t[i].mn || e === t[i].ix) return 5 === t[i].ty ? u[i] : u[i]();
                  i += 1
                }
                throw new Error
              }
              var o, l = propertyGroupFactory(s, n),
                u = [],
                c = r.ef.length;
              for (o = 0; o < c; o += 1) 5 === r.ef[o].ty ? u.push(e(r.ef[o], i.effectElements[o], i.effectElements[o].propertyGroup, a)) : u.push(t(i.effectElements[o], r.ef[o].ty, a, l));
              return "ADBE Color Control" === r.mn && Object.defineProperty(s, "color", {
                get: function() {
                  return u[0]()
                }
              }), Object.defineProperties(s, {
                numProperties: {
                  get: function() {
                    return r.np
                  }
                },
                _name: {
                  value: r.nm
                },
                propertyGroup: {
                  value: l
                }
              }), s.enabled = 0 !== r.en, s.active = s.enabled, s
            }

            function t(e, t, r, i) {
              var n = ExpressionPropertyInterface(e.p);
              return e.p.setGroupProperty && e.p.setGroupProperty(PropertyInterface("", i)),
                function() {
                  return 10 === t ? r.comp.compInterface(e.p.v) : n()
                }
            }
            return {
              createEffectsInterface: function(t, r) {
                if (t.effectsManager) {
                  var i, n = [],
                    a = t.data.ef,
                    s = t.effectsManager.effectElements.length;
                  for (i = 0; i < s; i += 1) n.push(e(a[i], t.effectsManager.effectElements[i], r, t));
                  var o = t.data.ef || [],
                    l = function(e) {
                      for (i = 0, s = o.length; i < s;) {
                        if (e === o[i].nm || e === o[i].mn || e === o[i].ix) return n[i];
                        i += 1
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
          ShapePathInterface = function(e, t, r) {
            var i = t.sh;

            function n(e) {
              return "Shape" === e || "shape" === e || "Path" === e || "path" === e || "ADBE Vector Shape" === e || 2 === e ? n.path : null
            }
            var a = propertyGroupFactory(n, r);
            return i.setGroupProperty(PropertyInterface("Path", a)), Object.defineProperties(n, {
              path: {
                get: function() {
                  return i.k && i.getValue(), i
                }
              },
              shape: {
                get: function() {
                  return i.k && i.getValue(), i
                }
              },
              _name: {
                value: e.nm
              },
              ix: {
                value: e.ix
              },
              propertyIndex: {
                value: e.ix
              },
              mn: {
                value: e.mn
              },
              propertyGroup: {
                value: r
              }
            }), n
          },
          ShapeExpressionInterface = function() {
            function e(e, s, p) {
              var d, f = [],
                m = e ? e.length : 0;
              for (d = 0; d < m; d += 1) "gr" === e[d].ty ? f.push(t(e[d], s[d], p)) : "fl" === e[d].ty ? f.push(r(e[d], s[d], p)) : "st" === e[d].ty ? f.push(n(e[d], s[d], p)) : "tm" === e[d].ty ? f.push(a(e[d], s[d], p)) : "tr" === e[d].ty || ("el" === e[d].ty ? f.push(o(e[d], s[d], p)) : "sr" === e[d].ty ? f.push(l(e[d], s[d], p)) : "sh" === e[d].ty ? f.push(ShapePathInterface(e[d], s[d], p)) : "rc" === e[d].ty ? f.push(u(e[d], s[d], p)) : "rd" === e[d].ty ? f.push(c(e[d], s[d], p)) : "rp" === e[d].ty ? f.push(h(e[d], s[d], p)) : "gf" === e[d].ty ? f.push(i(e[d], s[d], p)) : f.push((e[d], s[d], function() {
                return null
              })));
              return f
            }

            function t(t, r, i) {
              var n = function(e) {
                switch (e) {
                  case "ADBE Vectors Group":
                  case "Contents":
                  case 2:
                    return n.content;
                  default:
                    return n.transform
                }
              };
              n.propertyGroup = propertyGroupFactory(n, i);
              var a = function(t, r, i) {
                  var n, a = function(e) {
                    for (var t = 0, r = n.length; t < r;) {
                      if (n[t]._name === e || n[t].mn === e || n[t].propertyIndex === e || n[t].ix === e || n[t].ind === e) return n[t];
                      t += 1
                    }
                    return "number" == typeof e ? n[e - 1] : null
                  };
                  a.propertyGroup = propertyGroupFactory(a, i), n = e(t.it, r.it, a.propertyGroup), a.numProperties = n.length;
                  var o = s(t.it[t.it.length - 1], r.it[r.it.length - 1], a.propertyGroup);
                  return a.transform = o, a.propertyIndex = t.cix, a._name = t.nm, a
                }(t, r, n.propertyGroup),
                o = s(t.it[t.it.length - 1], r.it[r.it.length - 1], n.propertyGroup);
              return n.content = a, n.transform = o, Object.defineProperty(n, "_name", {
                get: function() {
                  return t.nm
                }
              }), n.numProperties = t.np, n.propertyIndex = t.ix, n.nm = t.nm, n.mn = t.mn, n
            }

            function r(e, t, r) {
              function i(e) {
                return "Color" === e || "color" === e ? i.color : "Opacity" === e || "opacity" === e ? i.opacity : null
              }
              return Object.defineProperties(i, {
                color: {
                  get: ExpressionPropertyInterface(t.c)
                },
                opacity: {
                  get: ExpressionPropertyInterface(t.o)
                },
                _name: {
                  value: e.nm
                },
                mn: {
                  value: e.mn
                }
              }), t.c.setGroupProperty(PropertyInterface("Color", r)), t.o.setGroupProperty(PropertyInterface("Opacity", r)), i
            }

            function i(e, t, r) {
              function i(e) {
                return "Start Point" === e || "start point" === e ? i.startPoint : "End Point" === e || "end point" === e ? i.endPoint : "Opacity" === e || "opacity" === e ? i.opacity : null
              }
              return Object.defineProperties(i, {
                startPoint: {
                  get: ExpressionPropertyInterface(t.s)
                },
                endPoint: {
                  get: ExpressionPropertyInterface(t.e)
                },
                opacity: {
                  get: ExpressionPropertyInterface(t.o)
                },
                type: {
                  get: function() {
                    return "a"
                  }
                },
                _name: {
                  value: e.nm
                },
                mn: {
                  value: e.mn
                }
              }), t.s.setGroupProperty(PropertyInterface("Start Point", r)), t.e.setGroupProperty(PropertyInterface("End Point", r)), t.o.setGroupProperty(PropertyInterface("Opacity", r)), i
            }

            function n(e, t, r) {
              var i, n = propertyGroupFactory(u, r),
                a = propertyGroupFactory(l, n);

              function s(r) {
                Object.defineProperty(l, e.d[r].nm, {
                  get: ExpressionPropertyInterface(t.d.dataProps[r].p)
                })
              }
              var o = e.d ? e.d.length : 0,
                l = {};
              for (i = 0; i < o; i += 1) s(i), t.d.dataProps[i].p.setGroupProperty(a);

              function u(e) {
                return "Color" === e || "color" === e ? u.color : "Opacity" === e || "opacity" === e ? u.opacity : "Stroke Width" === e || "stroke width" === e ? u.strokeWidth : null
              }
              return Object.defineProperties(u, {
                color: {
                  get: ExpressionPropertyInterface(t.c)
                },
                opacity: {
                  get: ExpressionPropertyInterface(t.o)
                },
                strokeWidth: {
                  get: ExpressionPropertyInterface(t.w)
                },
                dash: {
                  get: function() {
                    return l
                  }
                },
                _name: {
                  value: e.nm
                },
                mn: {
                  value: e.mn
                }
              }), t.c.setGroupProperty(PropertyInterface("Color", n)), t.o.setGroupProperty(PropertyInterface("Opacity", n)), t.w.setGroupProperty(PropertyInterface("Stroke Width", n)), u
            }

            function a(e, t, r) {
              function i(t) {
                return t === e.e.ix || "End" === t || "end" === t ? i.end : t === e.s.ix ? i.start : t === e.o.ix ? i.offset : null
              }
              var n = propertyGroupFactory(i, r);
              return i.propertyIndex = e.ix, t.s.setGroupProperty(PropertyInterface("Start", n)), t.e.setGroupProperty(PropertyInterface("End", n)), t.o.setGroupProperty(PropertyInterface("Offset", n)), i.propertyIndex = e.ix, i.propertyGroup = r, Object.defineProperties(i, {
                start: {
                  get: ExpressionPropertyInterface(t.s)
                },
                end: {
                  get: ExpressionPropertyInterface(t.e)
                },
                offset: {
                  get: ExpressionPropertyInterface(t.o)
                },
                _name: {
                  value: e.nm
                }
              }), i.mn = e.mn, i
            }

            function s(e, t, r) {
              function i(t) {
                return e.a.ix === t || "Anchor Point" === t ? i.anchorPoint : e.o.ix === t || "Opacity" === t ? i.opacity : e.p.ix === t || "Position" === t ? i.position : e.r.ix === t || "Rotation" === t || "ADBE Vector Rotation" === t ? i.rotation : e.s.ix === t || "Scale" === t ? i.scale : e.sk && e.sk.ix === t || "Skew" === t ? i.skew : e.sa && e.sa.ix === t || "Skew Axis" === t ? i.skewAxis : null
              }
              var n = propertyGroupFactory(i, r);
              return t.transform.mProps.o.setGroupProperty(PropertyInterface("Opacity", n)), t.transform.mProps.p.setGroupProperty(PropertyInterface("Position", n)), t.transform.mProps.a.setGroupProperty(PropertyInterface("Anchor Point", n)), t.transform.mProps.s.setGroupProperty(PropertyInterface("Scale", n)), t.transform.mProps.r.setGroupProperty(PropertyInterface("Rotation", n)), t.transform.mProps.sk && (t.transform.mProps.sk.setGroupProperty(PropertyInterface("Skew", n)), t.transform.mProps.sa.setGroupProperty(PropertyInterface("Skew Angle", n))), t.transform.op.setGroupProperty(PropertyInterface("Opacity", n)), Object.defineProperties(i, {
                opacity: {
                  get: ExpressionPropertyInterface(t.transform.mProps.o)
                },
                position: {
                  get: ExpressionPropertyInterface(t.transform.mProps.p)
                },
                anchorPoint: {
                  get: ExpressionPropertyInterface(t.transform.mProps.a)
                },
                scale: {
                  get: ExpressionPropertyInterface(t.transform.mProps.s)
                },
                rotation: {
                  get: ExpressionPropertyInterface(t.transform.mProps.r)
                },
                skew: {
                  get: ExpressionPropertyInterface(t.transform.mProps.sk)
                },
                skewAxis: {
                  get: ExpressionPropertyInterface(t.transform.mProps.sa)
                },
                _name: {
                  value: e.nm
                }
              }), i.ty = "tr", i.mn = e.mn, i.propertyGroup = r, i
            }

            function o(e, t, r) {
              function i(t) {
                return e.p.ix === t ? i.position : e.s.ix === t ? i.size : null
              }
              var n = propertyGroupFactory(i, r);
              i.propertyIndex = e.ix;
              var a = "tm" === t.sh.ty ? t.sh.prop : t.sh;
              return a.s.setGroupProperty(PropertyInterface("Size", n)), a.p.setGroupProperty(PropertyInterface("Position", n)), Object.defineProperties(i, {
                size: {
                  get: ExpressionPropertyInterface(a.s)
                },
                position: {
                  get: ExpressionPropertyInterface(a.p)
                },
                _name: {
                  value: e.nm
                }
              }), i.mn = e.mn, i
            }

            function l(e, t, r) {
              function i(t) {
                return e.p.ix === t ? i.position : e.r.ix === t ? i.rotation : e.pt.ix === t ? i.points : e.or.ix === t || "ADBE Vector Star Outer Radius" === t ? i.outerRadius : e.os.ix === t ? i.outerRoundness : !e.ir || e.ir.ix !== t && "ADBE Vector Star Inner Radius" !== t ? e.is && e.is.ix === t ? i.innerRoundness : null : i.innerRadius
              }
              var n = propertyGroupFactory(i, r),
                a = "tm" === t.sh.ty ? t.sh.prop : t.sh;
              return i.propertyIndex = e.ix, a.or.setGroupProperty(PropertyInterface("Outer Radius", n)), a.os.setGroupProperty(PropertyInterface("Outer Roundness", n)), a.pt.setGroupProperty(PropertyInterface("Points", n)), a.p.setGroupProperty(PropertyInterface("Position", n)), a.r.setGroupProperty(PropertyInterface("Rotation", n)), e.ir && (a.ir.setGroupProperty(PropertyInterface("Inner Radius", n)), a.is.setGroupProperty(PropertyInterface("Inner Roundness", n))), Object.defineProperties(i, {
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
                  value: e.nm
                }
              }), i.mn = e.mn, i
            }

            function u(e, t, r) {
              function i(t) {
                return e.p.ix === t ? i.position : e.r.ix === t ? i.roundness : e.s.ix === t || "Size" === t || "ADBE Vector Rect Size" === t ? i.size : null
              }
              var n = propertyGroupFactory(i, r),
                a = "tm" === t.sh.ty ? t.sh.prop : t.sh;
              return i.propertyIndex = e.ix, a.p.setGroupProperty(PropertyInterface("Position", n)), a.s.setGroupProperty(PropertyInterface("Size", n)), a.r.setGroupProperty(PropertyInterface("Rotation", n)), Object.defineProperties(i, {
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
                  value: e.nm
                }
              }), i.mn = e.mn, i
            }

            function c(e, t, r) {
              function i(t) {
                return e.r.ix === t || "Round Corners 1" === t ? i.radius : null
              }
              var n = propertyGroupFactory(i, r),
                a = t;
              return i.propertyIndex = e.ix, a.rd.setGroupProperty(PropertyInterface("Radius", n)), Object.defineProperties(i, {
                radius: {
                  get: ExpressionPropertyInterface(a.rd)
                },
                _name: {
                  value: e.nm
                }
              }), i.mn = e.mn, i
            }

            function h(e, t, r) {
              function i(t) {
                return e.c.ix === t || "Copies" === t ? i.copies : e.o.ix === t || "Offset" === t ? i.offset : null
              }
              var n = propertyGroupFactory(i, r),
                a = t;
              return i.propertyIndex = e.ix, a.c.setGroupProperty(PropertyInterface("Copies", n)), a.o.setGroupProperty(PropertyInterface("Offset", n)), Object.defineProperties(i, {
                copies: {
                  get: ExpressionPropertyInterface(a.c)
                },
                offset: {
                  get: ExpressionPropertyInterface(a.o)
                },
                _name: {
                  value: e.nm
                }
              }), i.mn = e.mn, i
            }
            return function(t, r, i) {
              var n;

              function a(e) {
                if ("number" == typeof e) return 0 === (e = void 0 === e ? 1 : e) ? i : n[e - 1];
                for (var t = 0, r = n.length; t < r;) {
                  if (n[t]._name === e) return n[t];
                  t += 1
                }
                return null
              }
              return a.propertyGroup = propertyGroupFactory(a, (function() {
                return i
              })), n = e(t, r, a.propertyGroup), a.numProperties = n.length, a._name = "Contents", a
            }
          }(),
          TextExpressionInterface = function(e) {
            var t;

            function r(e) {
              return "ADBE Text Document" === e ? r.sourceText : null
            }
            return Object.defineProperty(r, "sourceText", {
              get: function() {
                e.textProperty.getValue();
                var r = e.textProperty.currentData.t;
                return t && r === t.value || ((t = new String(r)).value = r || new String(r), Object.defineProperty(t, "style", {
                  get: function() {
                    return {
                      fillColor: e.textProperty.currentData.fc
                    }
                  }
                })), t
              }
            }), r
          };

        function _typeof(e) {
          return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
          } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
          }, _typeof(e)
        }
        var FootageInterface = (dataInterfaceFactory = function(e) {
            function t(e) {
              return "Outline" === e ? t.outlineInterface() : null
            }
            return t._name = "Outline", t.outlineInterface = function(e) {
              var t = "",
                r = e.getFootageData();

              function i(e) {
                if (r[e]) return t = e, "object" === _typeof(r = r[e]) ? i : r;
                var n = e.indexOf(t);
                if (-1 !== n) {
                  var a = parseInt(e.substr(n + t.length), 10);
                  return "object" === _typeof(r = r[a]) ? i : r
                }
                return ""
              }
              return function() {
                return t = "", r = e.getFootageData(), i
              }
            }(e), t
          }, function(e) {
            function t(e) {
              return "Data" === e ? t.dataInterface : null
            }
            return t._name = "Data", t.dataInterface = dataInterfaceFactory(e), t
          }),
          dataInterfaceFactory, interfaces = {
            layer: LayerExpressionInterface,
            effects: EffectsExpressionInterface,
            comp: CompExpressionInterface,
            shape: ShapeExpressionInterface,
            text: TextExpressionInterface,
            footage: FootageInterface
          };

        function getInterface(e) {
          return interfaces[e] || null
        }
        var expressionHelpers = {
          searchExpressions: function(e, t, r) {
            t.x && (r.k = !0, r.x = !0, r.initiateExpression = ExpressionManager.initiateExpression, r.effectsSequence.push(r.initiateExpression(e, t, r).bind(r)))
          },
          getSpeedAtTime: function(e) {
            var t = this.getValueAtTime(e),
              r = this.getValueAtTime(e + -.01),
              i = 0;
            if (t.length) {
              var n;
              for (n = 0; n < t.length; n += 1) i += Math.pow(r[n] - t[n], 2);
              i = 100 * Math.sqrt(i)
            } else i = 0;
            return i
          },
          getVelocityAtTime: function(e) {
            if (void 0 !== this.vel) return this.vel;
            var t, r, i = -.001,
              n = this.getValueAtTime(e),
              a = this.getValueAtTime(e + i);
            if (n.length)
              for (t = createTypedArray("float32", n.length), r = 0; r < n.length; r += 1) t[r] = (a[r] - n[r]) / i;
            else t = (a - n) / i;
            return t
          },
          getValueAtTime: function(e) {
            return e *= this.elem.globalData.frameRate, (e -= this.offsetTime) !== this._cachingAtTime.lastFrame && (this._cachingAtTime.lastIndex = this._cachingAtTime.lastFrame < e ? this._cachingAtTime.lastIndex : 0, this._cachingAtTime.value = this.interpolateValue(e, this._cachingAtTime), this._cachingAtTime.lastFrame = e), this._cachingAtTime.value
          },
          getStaticValueAtTime: function() {
            return this.pv
          },
          setGroupProperty: function(e) {
            this.propertyGroup = e
          }
        };

        function addPropertyDecorator() {
          function e(e, t, r) {
            if (!this.k || !this.keyframes) return this.pv;
            e = e ? e.toLowerCase() : "";
            var i, n, a, s, o, l = this.comp.renderedFrame,
              u = this.keyframes,
              c = u[u.length - 1].t;
            if (l <= c) return this.pv;
            if (r ? n = c - (i = t ? Math.abs(c - this.elem.comp.globalData.frameRate * t) : Math.max(0, c - this.elem.data.ip)) : ((!t || t > u.length - 1) && (t = u.length - 1), i = c - (n = u[u.length - 1 - t].t)), "pingpong" === e) {
              if (Math.floor((l - n) / i) % 2 != 0) return this.getValueAtTime((i - (l - n) % i + n) / this.comp.globalData.frameRate, 0)
            } else {
              if ("offset" === e) {
                var h = this.getValueAtTime(n / this.comp.globalData.frameRate, 0),
                  p = this.getValueAtTime(c / this.comp.globalData.frameRate, 0),
                  d = this.getValueAtTime(((l - n) % i + n) / this.comp.globalData.frameRate, 0),
                  f = Math.floor((l - n) / i);
                if (this.pv.length) {
                  for (s = (o = new Array(h.length)).length, a = 0; a < s; a += 1) o[a] = (p[a] - h[a]) * f + d[a];
                  return o
                }
                return (p - h) * f + d
              }
              if ("continue" === e) {
                var m = this.getValueAtTime(c / this.comp.globalData.frameRate, 0),
                  v = this.getValueAtTime((c - .001) / this.comp.globalData.frameRate, 0);
                if (this.pv.length) {
                  for (s = (o = new Array(m.length)).length, a = 0; a < s; a += 1) o[a] = m[a] + (m[a] - v[a]) * ((l - c) / this.comp.globalData.frameRate) / 5e-4;
                  return o
                }
                return m + (l - c) / .001 * (m - v)
              }
            }
            return this.getValueAtTime(((l - n) % i + n) / this.comp.globalData.frameRate, 0)
          }

          function t(e, t, r) {
            if (!this.k) return this.pv;
            e = e ? e.toLowerCase() : "";
            var i, n, a, s, o, l = this.comp.renderedFrame,
              u = this.keyframes,
              c = u[0].t;
            if (l >= c) return this.pv;
            if (r ? n = c + (i = t ? Math.abs(this.elem.comp.globalData.frameRate * t) : Math.max(0, this.elem.data.op - c)) : ((!t || t > u.length - 1) && (t = u.length - 1), i = (n = u[t].t) - c), "pingpong" === e) {
              if (Math.floor((c - l) / i) % 2 == 0) return this.getValueAtTime(((c - l) % i + c) / this.comp.globalData.frameRate, 0)
            } else {
              if ("offset" === e) {
                var h = this.getValueAtTime(c / this.comp.globalData.frameRate, 0),
                  p = this.getValueAtTime(n / this.comp.globalData.frameRate, 0),
                  d = this.getValueAtTime((i - (c - l) % i + c) / this.comp.globalData.frameRate, 0),
                  f = Math.floor((c - l) / i) + 1;
                if (this.pv.length) {
                  for (s = (o = new Array(h.length)).length, a = 0; a < s; a += 1) o[a] = d[a] - (p[a] - h[a]) * f;
                  return o
                }
                return d - (p - h) * f
              }
              if ("continue" === e) {
                var m = this.getValueAtTime(c / this.comp.globalData.frameRate, 0),
                  v = this.getValueAtTime((c + .001) / this.comp.globalData.frameRate, 0);
                if (this.pv.length) {
                  for (s = (o = new Array(m.length)).length, a = 0; a < s; a += 1) o[a] = m[a] + (m[a] - v[a]) * (c - l) / .001;
                  return o
                }
                return m + (m - v) * (c - l) / .001
              }
            }
            return this.getValueAtTime((i - ((c - l) % i + c)) / this.comp.globalData.frameRate, 0)
          }

          function r(e, t) {
            if (!this.k) return this.pv;
            if (e = .5 * (e || .4), (t = Math.floor(t || 5)) <= 1) return this.pv;
            var r, i, n = this.comp.renderedFrame / this.comp.globalData.frameRate,
              a = n - e,
              s = t > 1 ? (n + e - a) / (t - 1) : 1,
              o = 0,
              l = 0;
            for (r = this.pv.length ? createTypedArray("float32", this.pv.length) : 0; o < t;) {
              if (i = this.getValueAtTime(a + o * s), this.pv.length)
                for (l = 0; l < this.pv.length; l += 1) r[l] += i[l];
              else r += i;
              o += 1
            }
            if (this.pv.length)
              for (l = 0; l < this.pv.length; l += 1) r[l] /= t;
            else r /= t;
            return r
          }

          function i(e) {
            this._transformCachingAtTime || (this._transformCachingAtTime = {
              v: new Matrix
            });
            var t = this._transformCachingAtTime.v;
            if (t.cloneFromProps(this.pre.props), this.appliedTransformations < 1) {
              var r = this.a.getValueAtTime(e);
              t.translate(-r[0] * this.a.mult, -r[1] * this.a.mult, r[2] * this.a.mult)
            }
            if (this.appliedTransformations < 2) {
              var i = this.s.getValueAtTime(e);
              t.scale(i[0] * this.s.mult, i[1] * this.s.mult, i[2] * this.s.mult)
            }
            if (this.sk && this.appliedTransformations < 3) {
              var n = this.sk.getValueAtTime(e),
                a = this.sa.getValueAtTime(e);
              t.skewFromAxis(-n * this.sk.mult, a * this.sa.mult)
            }
            if (this.r && this.appliedTransformations < 4) {
              var s = this.r.getValueAtTime(e);
              t.rotate(-s * this.r.mult)
            } else if (!this.r && this.appliedTransformations < 4) {
              var o = this.rz.getValueAtTime(e),
                l = this.ry.getValueAtTime(e),
                u = this.rx.getValueAtTime(e),
                c = this.or.getValueAtTime(e);
              t.rotateZ(-o * this.rz.mult).rotateY(l * this.ry.mult).rotateX(u * this.rx.mult).rotateZ(-c[2] * this.or.mult).rotateY(c[1] * this.or.mult).rotateX(c[0] * this.or.mult)
            }
            if (this.data.p && this.data.p.s) {
              var h = this.px.getValueAtTime(e),
                p = this.py.getValueAtTime(e);
              if (this.data.p.z) {
                var d = this.pz.getValueAtTime(e);
                t.translate(h * this.px.mult, p * this.py.mult, -d * this.pz.mult)
              } else t.translate(h * this.px.mult, p * this.py.mult, 0)
            } else {
              var f = this.p.getValueAtTime(e);
              t.translate(f[0] * this.p.mult, f[1] * this.p.mult, -f[2] * this.p.mult)
            }
            return t
          }

          function n() {
            return this.v.clone(new Matrix)
          }
          var a = TransformPropertyFactory.getTransformProperty;
          TransformPropertyFactory.getTransformProperty = function(e, t, r) {
            var s = a(e, t, r);
            return s.dynamicProperties.length ? s.getValueAtTime = i.bind(s) : s.getValueAtTime = n.bind(s), s.setGroupProperty = expressionHelpers.setGroupProperty, s
          };
          var s = PropertyFactory.getProp;
          PropertyFactory.getProp = function(i, n, a, o, l) {
            var u = s(i, n, a, o, l);
            u.kf ? u.getValueAtTime = expressionHelpers.getValueAtTime.bind(u) : u.getValueAtTime = expressionHelpers.getStaticValueAtTime.bind(u), u.setGroupProperty = expressionHelpers.setGroupProperty, u.loopOut = e, u.loopIn = t, u.smooth = r, u.getVelocityAtTime = expressionHelpers.getVelocityAtTime.bind(u), u.getSpeedAtTime = expressionHelpers.getSpeedAtTime.bind(u), u.numKeys = 1 === n.a ? n.k.length : 0, u.propertyIndex = n.ix;
            var c = 0;
            return 0 !== a && (c = createTypedArray("float32", 1 === n.a ? n.k[0].s.length : n.k.length)), u._cachingAtTime = {
              lastFrame: initialDefaultFrame,
              lastIndex: 0,
              value: c
            }, expressionHelpers.searchExpressions(i, n, u), u.k && l.addDynamicProperty(u), u
          };
          var o = ShapePropertyFactory.getConstructorFunction(),
            l = ShapePropertyFactory.getKeyframedConstructorFunction();

          function u() {}
          u.prototype = {
            vertices: function(e, t) {
              this.k && this.getValue();
              var r, i = this.v;
              void 0 !== t && (i = this.getValueAtTime(t, 0));
              var n = i._length,
                a = i[e],
                s = i.v,
                o = createSizedArray(n);
              for (r = 0; r < n; r += 1) o[r] = "i" === e || "o" === e ? [a[r][0] - s[r][0], a[r][1] - s[r][1]] : [a[r][0], a[r][1]];
              return o
            },
            points: function(e) {
              return this.vertices("v", e)
            },
            inTangents: function(e) {
              return this.vertices("i", e)
            },
            outTangents: function(e) {
              return this.vertices("o", e)
            },
            isClosed: function() {
              return this.v.c
            },
            pointOnPath: function(e, t) {
              var r = this.v;
              void 0 !== t && (r = this.getValueAtTime(t, 0)), this._segmentsLength || (this._segmentsLength = bez.getSegmentsLength(r));
              for (var i, n = this._segmentsLength, a = n.lengths, s = n.totalLength * e, o = 0, l = a.length, u = 0; o < l;) {
                if (u + a[o].addedLength > s) {
                  var c = o,
                    h = r.c && o === l - 1 ? 0 : o + 1,
                    p = (s - u) / a[o].addedLength;
                  i = bez.getPointInSegment(r.v[c], r.v[h], r.o[c], r.i[h], p, a[o]);
                  break
                }
                u += a[o].addedLength, o += 1
              }
              return i || (i = r.c ? [r.v[0][0], r.v[0][1]] : [r.v[r._length - 1][0], r.v[r._length - 1][1]]), i
            },
            vectorOnPath: function(e, t, r) {
              1 == e ? e = this.v.c : 0 == e && (e = .999);
              var i = this.pointOnPath(e, t),
                n = this.pointOnPath(e + .001, t),
                a = n[0] - i[0],
                s = n[1] - i[1],
                o = Math.sqrt(Math.pow(a, 2) + Math.pow(s, 2));
              return 0 === o ? [0, 0] : "tangent" === r ? [a / o, s / o] : [-s / o, a / o]
            },
            tangentOnPath: function(e, t) {
              return this.vectorOnPath(e, t, "tangent")
            },
            normalOnPath: function(e, t) {
              return this.vectorOnPath(e, t, "normal")
            },
            setGroupProperty: expressionHelpers.setGroupProperty,
            getValueAtTime: expressionHelpers.getStaticValueAtTime
          }, extendPrototype([u], o), extendPrototype([u], l), l.prototype.getValueAtTime = function(e) {
            return this._cachingAtTime || (this._cachingAtTime = {
              shapeValue: shapePool.clone(this.pv),
              lastIndex: 0,
              lastTime: initialDefaultFrame
            }), e *= this.elem.globalData.frameRate, (e -= this.offsetTime) !== this._cachingAtTime.lastTime && (this._cachingAtTime.lastIndex = this._cachingAtTime.lastTime < e ? this._caching.lastIndex : 0, this._cachingAtTime.lastTime = e, this.interpolateShape(e, this._cachingAtTime.shapeValue, this._cachingAtTime)), this._cachingAtTime.shapeValue
          }, l.prototype.initiateExpression = ExpressionManager.initiateExpression;
          var c = ShapePropertyFactory.getShapeProp;
          ShapePropertyFactory.getShapeProp = function(e, t, r, i, n) {
            var a = c(e, t, r, i, n);
            return a.propertyIndex = t.ix, a.lock = !1, 3 === r ? expressionHelpers.searchExpressions(e, t.pt, a) : 4 === r && expressionHelpers.searchExpressions(e, t.ks, a), a.k && e.addDynamicProperty(a), a
          }
        }

        function initialize$1() {
          addPropertyDecorator()
        }

        function addDecorator() {
          TextProperty.prototype.getExpressionValue = function(e, t) {
            var r = this.calculateExpression(t);
            if (e.t !== r) {
              var i = {};
              return this.copyData(i, e), i.t = r.toString(), i.__complete = !1, i
            }
            return e
          }, TextProperty.prototype.searchProperty = function() {
            var e = this.searchKeyframes(),
              t = this.searchExpressions();
            return this.kf = e || t, this.kf
          }, TextProperty.prototype.searchExpressions = function() {
            return this.data.d.x ? (this.calculateExpression = ExpressionManager.initiateExpression.bind(this)(this.elem, this.data.d, this), this.addEffect(this.getExpressionValue.bind(this)), !0) : null
          }
        }

        function initialize() {
          addDecorator()
        }

        function SVGComposableEffect() {}
        SVGComposableEffect.prototype = {
          createMergeNode: function(e, t) {
            var r, i, n = createNS("feMerge");
            for (n.setAttribute("result", e), i = 0; i < t.length; i += 1)(r = createNS("feMergeNode")).setAttribute("in", t[i]), n.appendChild(r), n.appendChild(r);
            return n
          }
        };
        var linearFilterValue = "0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0";

        function SVGTintFilter(e, t, r, i, n) {
          this.filterManager = t;
          var a = createNS("feColorMatrix");
          a.setAttribute("type", "matrix"), a.setAttribute("color-interpolation-filters", "linearRGB"), a.setAttribute("values", linearFilterValue + " 1 0"), this.linearFilter = a, a.setAttribute("result", i + "_tint_1"), e.appendChild(a), (a = createNS("feColorMatrix")).setAttribute("type", "matrix"), a.setAttribute("color-interpolation-filters", "sRGB"), a.setAttribute("values", "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"), a.setAttribute("result", i + "_tint_2"), e.appendChild(a), this.matrixFilter = a;
          var s = this.createMergeNode(i, [n, i + "_tint_1", i + "_tint_2"]);
          e.appendChild(s)
        }

        function SVGFillFilter(e, t, r, i) {
          this.filterManager = t;
          var n = createNS("feColorMatrix");
          n.setAttribute("type", "matrix"), n.setAttribute("color-interpolation-filters", "sRGB"), n.setAttribute("values", "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"), n.setAttribute("result", i), e.appendChild(n), this.matrixFilter = n
        }

        function SVGStrokeEffect(e, t, r) {
          this.initialized = !1, this.filterManager = t, this.elem = r, this.paths = []
        }

        function SVGTritoneFilter(e, t, r, i) {
          this.filterManager = t;
          var n = createNS("feColorMatrix");
          n.setAttribute("type", "matrix"), n.setAttribute("color-interpolation-filters", "linearRGB"), n.setAttribute("values", "0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0"), e.appendChild(n);
          var a = createNS("feComponentTransfer");
          a.setAttribute("color-interpolation-filters", "sRGB"), a.setAttribute("result", i), this.matrixFilter = a;
          var s = createNS("feFuncR");
          s.setAttribute("type", "table"), a.appendChild(s), this.feFuncR = s;
          var o = createNS("feFuncG");
          o.setAttribute("type", "table"), a.appendChild(o), this.feFuncG = o;
          var l = createNS("feFuncB");
          l.setAttribute("type", "table"), a.appendChild(l), this.feFuncB = l, e.appendChild(a)
        }

        function SVGProLevelsFilter(e, t, r, i) {
          this.filterManager = t;
          var n = this.filterManager.effectElements,
            a = createNS("feComponentTransfer");
          (n[10].p.k || 0 !== n[10].p.v || n[11].p.k || 1 !== n[11].p.v || n[12].p.k || 1 !== n[12].p.v || n[13].p.k || 0 !== n[13].p.v || n[14].p.k || 1 !== n[14].p.v) && (this.feFuncR = this.createFeFunc("feFuncR", a)), (n[17].p.k || 0 !== n[17].p.v || n[18].p.k || 1 !== n[18].p.v || n[19].p.k || 1 !== n[19].p.v || n[20].p.k || 0 !== n[20].p.v || n[21].p.k || 1 !== n[21].p.v) && (this.feFuncG = this.createFeFunc("feFuncG", a)), (n[24].p.k || 0 !== n[24].p.v || n[25].p.k || 1 !== n[25].p.v || n[26].p.k || 1 !== n[26].p.v || n[27].p.k || 0 !== n[27].p.v || n[28].p.k || 1 !== n[28].p.v) && (this.feFuncB = this.createFeFunc("feFuncB", a)), (n[31].p.k || 0 !== n[31].p.v || n[32].p.k || 1 !== n[32].p.v || n[33].p.k || 1 !== n[33].p.v || n[34].p.k || 0 !== n[34].p.v || n[35].p.k || 1 !== n[35].p.v) && (this.feFuncA = this.createFeFunc("feFuncA", a)), (this.feFuncR || this.feFuncG || this.feFuncB || this.feFuncA) && (a.setAttribute("color-interpolation-filters", "sRGB"), e.appendChild(a)), (n[3].p.k || 0 !== n[3].p.v || n[4].p.k || 1 !== n[4].p.v || n[5].p.k || 1 !== n[5].p.v || n[6].p.k || 0 !== n[6].p.v || n[7].p.k || 1 !== n[7].p.v) && ((a = createNS("feComponentTransfer")).setAttribute("color-interpolation-filters", "sRGB"), a.setAttribute("result", i), e.appendChild(a), this.feFuncRComposed = this.createFeFunc("feFuncR", a), this.feFuncGComposed = this.createFeFunc("feFuncG", a), this.feFuncBComposed = this.createFeFunc("feFuncB", a))
        }

        function SVGDropShadowEffect(e, t, r, i, n) {
          var a = t.container.globalData.renderConfig.filterSize,
            s = t.data.fs || a;
          e.setAttribute("x", s.x || a.x), e.setAttribute("y", s.y || a.y), e.setAttribute("width", s.width || a.width), e.setAttribute("height", s.height || a.height), this.filterManager = t;
          var o = createNS("feGaussianBlur");
          o.setAttribute("in", "SourceAlpha"), o.setAttribute("result", i + "_drop_shadow_1"), o.setAttribute("stdDeviation", "0"), this.feGaussianBlur = o, e.appendChild(o);
          var l = createNS("feOffset");
          l.setAttribute("dx", "25"), l.setAttribute("dy", "0"), l.setAttribute("in", i + "_drop_shadow_1"), l.setAttribute("result", i + "_drop_shadow_2"), this.feOffset = l, e.appendChild(l);
          var u = createNS("feFlood");
          u.setAttribute("flood-color", "#00ff00"), u.setAttribute("flood-opacity", "1"), u.setAttribute("result", i + "_drop_shadow_3"), this.feFlood = u, e.appendChild(u);
          var c = createNS("feComposite");
          c.setAttribute("in", i + "_drop_shadow_3"), c.setAttribute("in2", i + "_drop_shadow_2"), c.setAttribute("operator", "in"), c.setAttribute("result", i + "_drop_shadow_4"), e.appendChild(c);
          var h = this.createMergeNode(i, [i + "_drop_shadow_4", n]);
          e.appendChild(h)
        }
        extendPrototype([SVGComposableEffect], SVGTintFilter), SVGTintFilter.prototype.renderFrame = function(e) {
          if (e || this.filterManager._mdf) {
            var t = this.filterManager.effectElements[0].p.v,
              r = this.filterManager.effectElements[1].p.v,
              i = this.filterManager.effectElements[2].p.v / 100;
            this.linearFilter.setAttribute("values", linearFilterValue + " " + i + " 0"), this.matrixFilter.setAttribute("values", r[0] - t[0] + " 0 0 0 " + t[0] + " " + (r[1] - t[1]) + " 0 0 0 " + t[1] + " " + (r[2] - t[2]) + " 0 0 0 " + t[2] + " 0 0 0 1 0")
          }
        }, SVGFillFilter.prototype.renderFrame = function(e) {
          if (e || this.filterManager._mdf) {
            var t = this.filterManager.effectElements[2].p.v,
              r = this.filterManager.effectElements[6].p.v;
            this.matrixFilter.setAttribute("values", "0 0 0 0 " + t[0] + " 0 0 0 0 " + t[1] + " 0 0 0 0 " + t[2] + " 0 0 0 " + r + " 0")
          }
        }, SVGStrokeEffect.prototype.initialize = function() {
          var e, t, r, i, n = this.elem.layerElement.children || this.elem.layerElement.childNodes;
          for (1 === this.filterManager.effectElements[1].p.v ? (i = this.elem.maskManager.masksProperties.length, r = 0) : i = 1 + (r = this.filterManager.effectElements[0].p.v - 1), (t = createNS("g")).setAttribute("fill", "none"), t.setAttribute("stroke-linecap", "round"), t.setAttribute("stroke-dashoffset", 1); r < i; r += 1) e = createNS("path"), t.appendChild(e), this.paths.push({
            p: e,
            m: r
          });
          if (3 === this.filterManager.effectElements[10].p.v) {
            var a = createNS("mask"),
              s = createElementID();
            a.setAttribute("id", s), a.setAttribute("mask-type", "alpha"), a.appendChild(t), this.elem.globalData.defs.appendChild(a);
            var o = createNS("g");
            for (o.setAttribute("mask", "url(" + getLocationHref() + "#" + s + ")"); n[0];) o.appendChild(n[0]);
            this.elem.layerElement.appendChild(o), this.masker = a, t.setAttribute("stroke", "#fff")
          } else if (1 === this.filterManager.effectElements[10].p.v || 2 === this.filterManager.effectElements[10].p.v) {
            if (2 === this.filterManager.effectElements[10].p.v)
              for (n = this.elem.layerElement.children || this.elem.layerElement.childNodes; n.length;) this.elem.layerElement.removeChild(n[0]);
            this.elem.layerElement.appendChild(t), this.elem.layerElement.removeAttribute("mask"), t.setAttribute("stroke", "#fff")
          }
          this.initialized = !0, this.pathMasker = t
        }, SVGStrokeEffect.prototype.renderFrame = function(e) {
          var t;
          this.initialized || this.initialize();
          var r, i, n = this.paths.length;
          for (t = 0; t < n; t += 1)
            if (-1 !== this.paths[t].m && (r = this.elem.maskManager.viewData[this.paths[t].m], i = this.paths[t].p, (e || this.filterManager._mdf || r.prop._mdf) && i.setAttribute("d", r.lastPath), e || this.filterManager.effectElements[9].p._mdf || this.filterManager.effectElements[4].p._mdf || this.filterManager.effectElements[7].p._mdf || this.filterManager.effectElements[8].p._mdf || r.prop._mdf)) {
              var a;
              if (0 !== this.filterManager.effectElements[7].p.v || 100 !== this.filterManager.effectElements[8].p.v) {
                var s = .01 * Math.min(this.filterManager.effectElements[7].p.v, this.filterManager.effectElements[8].p.v),
                  o = .01 * Math.max(this.filterManager.effectElements[7].p.v, this.filterManager.effectElements[8].p.v),
                  l = i.getTotalLength();
                a = "0 0 0 " + l * s + " ";
                var u, c = l * (o - s),
                  h = 1 + 2 * this.filterManager.effectElements[4].p.v * this.filterManager.effectElements[9].p.v * .01,
                  p = Math.floor(c / h);
                for (u = 0; u < p; u += 1) a += "1 " + 2 * this.filterManager.effectElements[4].p.v * this.filterManager.effectElements[9].p.v * .01 + " ";
                a += "0 " + 10 * l + " 0 0"
              } else a = "1 " + 2 * this.filterManager.effectElements[4].p.v * this.filterManager.effectElements[9].p.v * .01;
              i.setAttribute("stroke-dasharray", a)
            } if ((e || this.filterManager.effectElements[4].p._mdf) && this.pathMasker.setAttribute("stroke-width", 2 * this.filterManager.effectElements[4].p.v), (e || this.filterManager.effectElements[6].p._mdf) && this.pathMasker.setAttribute("opacity", this.filterManager.effectElements[6].p.v), (1 === this.filterManager.effectElements[10].p.v || 2 === this.filterManager.effectElements[10].p.v) && (e || this.filterManager.effectElements[3].p._mdf)) {
            var d = this.filterManager.effectElements[3].p.v;
            this.pathMasker.setAttribute("stroke", "rgb(" + bmFloor(255 * d[0]) + "," + bmFloor(255 * d[1]) + "," + bmFloor(255 * d[2]) + ")")
          }
        }, SVGTritoneFilter.prototype.renderFrame = function(e) {
          if (e || this.filterManager._mdf) {
            var t = this.filterManager.effectElements[0].p.v,
              r = this.filterManager.effectElements[1].p.v,
              i = this.filterManager.effectElements[2].p.v,
              n = i[0] + " " + r[0] + " " + t[0],
              a = i[1] + " " + r[1] + " " + t[1],
              s = i[2] + " " + r[2] + " " + t[2];
            this.feFuncR.setAttribute("tableValues", n), this.feFuncG.setAttribute("tableValues", a), this.feFuncB.setAttribute("tableValues", s)
          }
        }, SVGProLevelsFilter.prototype.createFeFunc = function(e, t) {
          var r = createNS(e);
          return r.setAttribute("type", "table"), t.appendChild(r), r
        }, SVGProLevelsFilter.prototype.getTableValue = function(e, t, r, i, n) {
          for (var a, s, o = 0, l = Math.min(e, t), u = Math.max(e, t), c = Array.call(null, {
              length: 256
            }), h = 0, p = n - i, d = t - e; o <= 256;) s = (a = o / 256) <= l ? d < 0 ? n : i : a >= u ? d < 0 ? i : n : i + p * Math.pow((a - e) / d, 1 / r), c[h] = s, h += 1, o += 256 / 255;
          return c.join(" ")
        }, SVGProLevelsFilter.prototype.renderFrame = function(e) {
          if (e || this.filterManager._mdf) {
            var t, r = this.filterManager.effectElements;
            this.feFuncRComposed && (e || r[3].p._mdf || r[4].p._mdf || r[5].p._mdf || r[6].p._mdf || r[7].p._mdf) && (t = this.getTableValue(r[3].p.v, r[4].p.v, r[5].p.v, r[6].p.v, r[7].p.v), this.feFuncRComposed.setAttribute("tableValues", t), this.feFuncGComposed.setAttribute("tableValues", t), this.feFuncBComposed.setAttribute("tableValues", t)), this.feFuncR && (e || r[10].p._mdf || r[11].p._mdf || r[12].p._mdf || r[13].p._mdf || r[14].p._mdf) && (t = this.getTableValue(r[10].p.v, r[11].p.v, r[12].p.v, r[13].p.v, r[14].p.v), this.feFuncR.setAttribute("tableValues", t)), this.feFuncG && (e || r[17].p._mdf || r[18].p._mdf || r[19].p._mdf || r[20].p._mdf || r[21].p._mdf) && (t = this.getTableValue(r[17].p.v, r[18].p.v, r[19].p.v, r[20].p.v, r[21].p.v), this.feFuncG.setAttribute("tableValues", t)), this.feFuncB && (e || r[24].p._mdf || r[25].p._mdf || r[26].p._mdf || r[27].p._mdf || r[28].p._mdf) && (t = this.getTableValue(r[24].p.v, r[25].p.v, r[26].p.v, r[27].p.v, r[28].p.v), this.feFuncB.setAttribute("tableValues", t)), this.feFuncA && (e || r[31].p._mdf || r[32].p._mdf || r[33].p._mdf || r[34].p._mdf || r[35].p._mdf) && (t = this.getTableValue(r[31].p.v, r[32].p.v, r[33].p.v, r[34].p.v, r[35].p.v), this.feFuncA.setAttribute("tableValues", t))
          }
        }, extendPrototype([SVGComposableEffect], SVGDropShadowEffect), SVGDropShadowEffect.prototype.renderFrame = function(e) {
          if (e || this.filterManager._mdf) {
            if ((e || this.filterManager.effectElements[4].p._mdf) && this.feGaussianBlur.setAttribute("stdDeviation", this.filterManager.effectElements[4].p.v / 4), e || this.filterManager.effectElements[0].p._mdf) {
              var t = this.filterManager.effectElements[0].p.v;
              this.feFlood.setAttribute("flood-color", rgbToHex(Math.round(255 * t[0]), Math.round(255 * t[1]), Math.round(255 * t[2])))
            }
            if ((e || this.filterManager.effectElements[1].p._mdf) && this.feFlood.setAttribute("flood-opacity", this.filterManager.effectElements[1].p.v / 255), e || this.filterManager.effectElements[2].p._mdf || this.filterManager.effectElements[3].p._mdf) {
              var r = this.filterManager.effectElements[3].p.v,
                i = (this.filterManager.effectElements[2].p.v - 90) * degToRads,
                n = r * Math.cos(i),
                a = r * Math.sin(i);
              this.feOffset.setAttribute("dx", n), this.feOffset.setAttribute("dy", a)
            }
          }
        };
        var _svgMatteSymbols = [];

        function SVGMatte3Effect(e, t, r) {
          this.initialized = !1, this.filterManager = t, this.filterElem = e, this.elem = r, r.matteElement = createNS("g"), r.matteElement.appendChild(r.layerElement), r.matteElement.appendChild(r.transformedElement), r.baseElement = r.matteElement
        }

        function SVGGaussianBlurEffect(e, t, r, i) {
          e.setAttribute("x", "-100%"), e.setAttribute("y", "-100%"), e.setAttribute("width", "300%"), e.setAttribute("height", "300%"), this.filterManager = t;
          var n = createNS("feGaussianBlur");
          n.setAttribute("result", i), e.appendChild(n), this.feGaussianBlur = n
        }

        function TransformEffect() {}

        function SVGTransformEffect(e, t) {
          this.init(t)
        }

        function CVTransformEffect(e) {
          this.init(e)
        }
        return SVGMatte3Effect.prototype.findSymbol = function(e) {
          for (var t = 0, r = _svgMatteSymbols.length; t < r;) {
            if (_svgMatteSymbols[t] === e) return _svgMatteSymbols[t];
            t += 1
          }
          return null
        }, SVGMatte3Effect.prototype.replaceInParent = function(e, t) {
          var r = e.layerElement.parentNode;
          if (r) {
            for (var i, n = r.children, a = 0, s = n.length; a < s && n[a] !== e.layerElement;) a += 1;
            a <= s - 2 && (i = n[a + 1]);
            var o = createNS("use");
            o.setAttribute("href", "#" + t), i ? r.insertBefore(o, i) : r.appendChild(o)
          }
        }, SVGMatte3Effect.prototype.setElementAsMask = function(e, t) {
          if (!this.findSymbol(t)) {
            var r = createElementID(),
              i = createNS("mask");
            i.setAttribute("id", t.layerId), i.setAttribute("mask-type", "alpha"), _svgMatteSymbols.push(t);
            var n = e.globalData.defs;
            n.appendChild(i);
            var a = createNS("symbol");
            a.setAttribute("id", r), this.replaceInParent(t, r), a.appendChild(t.layerElement), n.appendChild(a);
            var s = createNS("use");
            s.setAttribute("href", "#" + r), i.appendChild(s), t.data.hd = !1, t.show()
          }
          e.setMatte(t.layerId)
        }, SVGMatte3Effect.prototype.initialize = function() {
          for (var e = this.filterManager.effectElements[0].p.v, t = this.elem.comp.elements, r = 0, i = t.length; r < i;) t[r] && t[r].data.ind === e && this.setElementAsMask(this.elem, t[r]), r += 1;
          this.initialized = !0
        }, SVGMatte3Effect.prototype.renderFrame = function() {
          this.initialized || this.initialize()
        }, SVGGaussianBlurEffect.prototype.renderFrame = function(e) {
          if (e || this.filterManager._mdf) {
            var t = .3 * this.filterManager.effectElements[0].p.v,
              r = this.filterManager.effectElements[1].p.v,
              i = 3 == r ? 0 : t,
              n = 2 == r ? 0 : t;
            this.feGaussianBlur.setAttribute("stdDeviation", i + " " + n);
            var a = 1 == this.filterManager.effectElements[2].p.v ? "wrap" : "duplicate";
            this.feGaussianBlur.setAttribute("edgeMode", a)
          }
        }, TransformEffect.prototype.init = function(e) {
          this.effectsManager = e, this.type = effectTypes.TRANSFORM_EFFECT, this.matrix = new Matrix, this.opacity = -1, this._mdf = !1, this._opMdf = !1
        }, TransformEffect.prototype.renderFrame = function(e) {
          if (this._opMdf = !1, this._mdf = !1, e || this.effectsManager._mdf) {
            var t = this.effectsManager.effectElements,
              r = t[0].p.v,
              i = t[1].p.v,
              n = 1 === t[2].p.v,
              a = t[3].p.v,
              s = n ? a : t[4].p.v,
              o = t[5].p.v,
              l = t[6].p.v,
              u = t[7].p.v;
            this.matrix.reset(), this.matrix.translate(-r[0], -r[1], r[2]), this.matrix.scale(.01 * s, .01 * a, 1), this.matrix.rotate(-u * degToRads), this.matrix.skewFromAxis(-o * degToRads, (l + 90) * degToRads), this.matrix.translate(i[0], i[1], 0), this._mdf = !0, this.opacity !== t[8].p.v && (this.opacity = t[8].p.v, this._opMdf = !0)
          }
        }, extendPrototype([TransformEffect], SVGTransformEffect), extendPrototype([TransformEffect], CVTransformEffect), registerRenderer("canvas", CanvasRenderer), registerRenderer("html", HybridRenderer), registerRenderer("svg", SVGRenderer), ShapeModifiers.registerModifier("tm", TrimModifier), ShapeModifiers.registerModifier("pb", PuckerAndBloatModifier), ShapeModifiers.registerModifier("rp", RepeaterModifier), ShapeModifiers.registerModifier("rd", RoundCornersModifier), ShapeModifiers.registerModifier("zz", ZigZagModifier), ShapeModifiers.registerModifier("op", OffsetPathModifier), setExpressionsPlugin(Expressions), setExpressionInterfaces(getInterface), initialize$1(), initialize(), registerEffect$1(20, SVGTintFilter, !0), registerEffect$1(21, SVGFillFilter, !0), registerEffect$1(22, SVGStrokeEffect, !1), registerEffect$1(23, SVGTritoneFilter, !0), registerEffect$1(24, SVGProLevelsFilter, !0), registerEffect$1(25, SVGDropShadowEffect, !0), registerEffect$1(28, SVGMatte3Effect, !1), registerEffect$1(29, SVGGaussianBlurEffect, !0), registerEffect$1(35, SVGTransformEffect, !1), registerEffect(35, CVTransformEffect), lottie
      }, module.exports = factory())
    },
    4392: e => {
      var t, r, i = e.exports = {};

      function n() {
        throw new Error("setTimeout has not been defined")
      }

      function a() {
        throw new Error("clearTimeout has not been defined")
      }

      function s(e) {
        if (t === setTimeout) return setTimeout(e, 0);
        if ((t === n || !t) && setTimeout) return t = setTimeout, setTimeout(e, 0);
        try {
          return t(e, 0)
        } catch (r) {
          try {
            return t.call(null, e, 0)
          } catch (r) {
            return t.call(this, e, 0)
          }
        }
      }! function() {
        try {
          t = "function" == typeof setTimeout ? setTimeout : n
        } catch (e) {
          t = n
        }
        try {
          r = "function" == typeof clearTimeout ? clearTimeout : a
        } catch (e) {
          r = a
        }
      }();
      var o, l = [],
        u = !1,
        c = -1;

      function h() {
        u && o && (u = !1, o.length ? l = o.concat(l) : c = -1, l.length && p())
      }

      function p() {
        if (!u) {
          var e = s(h);
          u = !0;
          for (var t = l.length; t;) {
            for (o = l, l = []; ++c < t;) o && o[c].run();
            c = -1, t = l.length
          }
          o = null, u = !1,
            function(e) {
              if (r === clearTimeout) return clearTimeout(e);
              if ((r === a || !r) && clearTimeout) return r = clearTimeout, clearTimeout(e);
              try {
                return r(e)
              } catch (t) {
                try {
                  return r.call(null, e)
                } catch (t) {
                  return r.call(this, e)
                }
              }
            }(e)
        }
      }

      function d(e, t) {
        this.fun = e, this.array = t
      }

      function f() {}
      i.nextTick = function(e) {
        var t = new Array(arguments.length - 1);
        if (arguments.length > 1)
          for (var r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
        l.push(new d(e, t)), 1 !== l.length || u || s(p)
      }, d.prototype.run = function() {
        this.fun.apply(null, this.array)
      }, i.title = "browser", i.browser = !0, i.env = {}, i.argv = [], i.version = "", i.versions = {}, i.on = f, i.addListener = f, i.once = f, i.off = f, i.removeListener = f, i.removeAllListeners = f, i.emit = f, i.prependListener = f, i.prependOnceListener = f, i.listeners = function(e) {
        return []
      }, i.binding = function(e) {
        throw new Error("process.binding is not supported")
      }, i.cwd = function() {
        return "/"
      }, i.chdir = function(e) {
        throw new Error("process.chdir is not supported")
      }, i.umask = function() {
        return 0
      }
    },
    4280: (e, t, r) => {
      "use strict";
      var i = r(5004);

      function n() {}

      function a() {}
      a.resetWarningCache = n, e.exports = function() {
        function e(e, t, r, n, a, s) {
          if (s !== i) {
            var o = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
            throw o.name = "Invariant Violation", o
          }
        }

        function t() {
          return e
        }
        e.isRequired = e;
        var r = {
          array: e,
          bigint: e,
          bool: e,
          func: e,
          number: e,
          object: e,
          string: e,
          symbol: e,
          any: e,
          arrayOf: t,
          element: e,
          elementType: e,
          instanceOf: t,
          node: e,
          objectOf: t,
          oneOf: t,
          oneOfType: t,
          shape: t,
          exact: t,
          checkPropTypes: a,
          resetWarningCache: n
        };
        return r.PropTypes = r, r
      }
    },
    1424: (e, t, r) => {
      e.exports = r(4280)()
    },
    5004: e => {
      "use strict";
      e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
    },
    4236: function(e, t, r) {
      class i {
        constructor() {
          this.data = r(2396), this.labelMap = {}, this.valueMap = {}, this.data.forEach((e => {
            this.labelMap[e.label.toLowerCase()] = e.value, this.valueMap[e.value.toLowerCase()] = e.label
          }))
        }
        getValue(e) {
          return this.labelMap[e.toLowerCase()]
        }
        getLabel(e) {
          return this.valueMap[e.toLowerCase()]
        }
        getLabels() {
          return this.data.map((e => e.label))
        }
        getValues() {
          return this.data.map((e => e.value))
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
        setLabel(e, t) {
          return this.data.forEach((r => {
            r.value === e && (r.label = t, this.valueMap[r.value.toLowerCase()] = r.label)
          })), this
        }
        setEmpty(e) {
          return this.data.unshift({
            value: "",
            label: e
          }), this.valueMap[""] = e, this.labelMap[e] = "", this
        }
        native() {
          return this.nativeData = r(8048), this.nativeData.forEach((e => {
            this.labelMap[e.label.toLowerCase()] = e.value, this.valueMap[e.value.toLowerCase()] = e.label
          })), this
        }
      }
      e.exports = () => {
        if (!(this instanceof i)) return new i
      }
    },
    2231: (e, t, r) => {
      "use strict";
      r.d(t, {
        c: () => l
      });
      const i = {
        randomUUID: "undefined" != typeof crypto && crypto.randomUUID && crypto.randomUUID.bind(crypto)
      };
      let n;
      const a = new Uint8Array(16);

      function s() {
        if (!n && (n = "undefined" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !n)) throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
        return n(a)
      }
      const o = [];
      for (let e = 0; e < 256; ++e) o.push((e + 256).toString(16).slice(1));
      const l = function(e, t, r) {
        if (i.randomUUID && !t && !e) return i.randomUUID();
        const n = (e = e || {}).random || (e.rng || s)();
        if (n[6] = 15 & n[6] | 64, n[8] = 63 & n[8] | 128, t) {
          r = r || 0;
          for (let e = 0; e < 16; ++e) t[r + e] = n[e];
          return t
        }
        return function(e) {
          let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          return o[e[t + 0]] + o[e[t + 1]] + o[e[t + 2]] + o[e[t + 3]] + "-" + o[e[t + 4]] + o[e[t + 5]] + "-" + o[e[t + 6]] + o[e[t + 7]] + "-" + o[e[t + 8]] + o[e[t + 9]] + "-" + o[e[t + 10]] + o[e[t + 11]] + o[e[t + 12]] + o[e[t + 13]] + o[e[t + 14]] + o[e[t + 15]]
        }(n)
      }
    },
    684: (e, t, r) => {
      r(9808), e.exports = r(7208).Object.assign
    },
    6486: (e, t, r) => {
      r(7779);
      var i = r(7208).Object;
      e.exports = function(e, t) {
        return i.create(e, t)
      }
    },
    7952: (e, t, r) => {
      r(9652);
      var i = r(7208).Object;
      e.exports = function(e, t, r) {
        return i.defineProperty(e, t, r)
      }
    },
    7488: (e, t, r) => {
      r(4048), e.exports = r(7208).Object.getPrototypeOf
    },
    6760: (e, t, r) => {
      r(6200), e.exports = r(7208).Object.setPrototypeOf
    },
    20: (e, t, r) => {
      r(9484), r(4788), r(1284), r(3696), e.exports = r(7208).Symbol
    },
    2784: (e, t, r) => {
      r(1852), r(3624), e.exports = r(3728).f("iterator")
    },
    8416: e => {
      e.exports = function(e) {
        if ("function" != typeof e) throw TypeError(e + " is not a function!");
        return e
      }
    },
    9635: e => {
      e.exports = function() {}
    },
    3060: (e, t, r) => {
      var i = r(3536);
      e.exports = function(e) {
        if (!i(e)) throw TypeError(e + " is not an object!");
        return e
      }
    },
    3572: (e, t, r) => {
      var i = r(8828),
        n = r(6964),
        a = r(371);
      e.exports = function(e) {
        return function(t, r, s) {
          var o, l = i(t),
            u = n(l.length),
            c = a(s, u);
          if (e && r != r) {
            for (; u > c;)
              if ((o = l[c++]) != o) return !0
          } else
            for (; u > c; c++)
              if ((e || c in l) && l[c] === r) return e || c || 0;
          return !e && -1
        }
      }
    },
    9683: e => {
      var t = {}.toString;
      e.exports = function(e) {
        return t.call(e).slice(8, -1)
      }
    },
    7208: e => {
      var t = e.exports = {
        version: "2.6.12"
      };
      "number" == typeof __e && (__e = t)
    },
    6040: (e, t, r) => {
      var i = r(8416);
      e.exports = function(e, t, r) {
        if (i(e), void 0 === t) return e;
        switch (r) {
          case 1:
            return function(r) {
              return e.call(t, r)
            };
          case 2:
            return function(r, i) {
              return e.call(t, r, i)
            };
          case 3:
            return function(r, i, n) {
              return e.call(t, r, i, n)
            }
        }
        return function() {
          return e.apply(t, arguments)
        }
      }
    },
    9396: e => {
      e.exports = function(e) {
        if (null == e) throw TypeError("Can't call method on  " + e);
        return e
      }
    },
    5168: (e, t, r) => {
      e.exports = !r(5032)((function() {
        return 7 != Object.defineProperty({}, "a", {
          get: function() {
            return 7
          }
        }).a
      }))
    },
    6440: (e, t, r) => {
      var i = r(3536),
        n = r(6384).document,
        a = i(n) && i(n.createElement);
      e.exports = function(e) {
        return a ? n.createElement(e) : {}
      }
    },
    1608: e => {
      e.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
    },
    9684: (e, t, r) => {
      var i = r(7108),
        n = r(716),
        a = r(9520);
      e.exports = function(e) {
        var t = i(e),
          r = n.f;
        if (r)
          for (var s, o = r(e), l = a.f, u = 0; o.length > u;) l.call(e, s = o[u++]) && t.push(s);
        return t
      }
    },
    6604: (e, t, r) => {
      var i = r(6384),
        n = r(7208),
        a = r(6040),
        s = r(1480),
        o = r(1248),
        l = "prototype",
        u = function(e, t, r) {
          var c, h, p, d = e & u.F,
            f = e & u.G,
            m = e & u.S,
            v = e & u.P,
            g = e & u.B,
            y = e & u.W,
            b = f ? n : n[t] || (n[t] = {}),
            S = b[l],
            x = f ? i : m ? i[t] : (i[t] || {})[l];
          for (c in f && (r = t), r)(h = !d && x && void 0 !== x[c]) && o(b, c) || (p = h ? x[c] : r[c], b[c] = f && "function" != typeof x[c] ? r[c] : g && h ? a(p, i) : y && x[c] == p ? function(e) {
            var t = function(t, r, i) {
              if (this instanceof e) {
                switch (arguments.length) {
                  case 0:
                    return new e;
                  case 1:
                    return new e(t);
                  case 2:
                    return new e(t, r)
                }
                return new e(t, r, i)
              }
              return e.apply(this, arguments)
            };
            return t[l] = e[l], t
          }(p) : v && "function" == typeof p ? a(Function.call, p) : p, v && ((b.virtual || (b.virtual = {}))[c] = p, e & u.R && S && !S[c] && s(S, c, p)))
        };
      u.F = 1, u.G = 2, u.S = 4, u.P = 8, u.B = 16, u.W = 32, u.U = 64, u.R = 128, e.exports = u
    },
    5032: e => {
      e.exports = function(e) {
        try {
          return !!e()
        } catch (e) {
          return !0
        }
      }
    },
    6384: e => {
      var t = e.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
      "number" == typeof __g && (__g = t)
    },
    1248: e => {
      var t = {}.hasOwnProperty;
      e.exports = function(e, r) {
        return t.call(e, r)
      }
    },
    1480: (e, t, r) => {
      var i = r(6008),
        n = r(5196);
      e.exports = r(5168) ? function(e, t, r) {
        return i.f(e, t, n(1, r))
      } : function(e, t, r) {
        return e[t] = r, e
      }
    },
    2176: (e, t, r) => {
      var i = r(6384).document;
      e.exports = i && i.documentElement
    },
    160: (e, t, r) => {
      e.exports = !r(5168) && !r(5032)((function() {
        return 7 != Object.defineProperty(r(6440)("div"), "a", {
          get: function() {
            return 7
          }
        }).a
      }))
    },
    5760: (e, t, r) => {
      var i = r(9683);
      e.exports = Object("z").propertyIsEnumerable(0) ? Object : function(e) {
        return "String" == i(e) ? e.split("") : Object(e)
      }
    },
    4244: (e, t, r) => {
      var i = r(9683);
      e.exports = Array.isArray || function(e) {
        return "Array" == i(e)
      }
    },
    3536: e => {
      e.exports = function(e) {
        return "object" == typeof e ? null !== e : "function" == typeof e
      }
    },
    7e3: (e, t, r) => {
      "use strict";
      var i = r(5069),
        n = r(5196),
        a = r(4191),
        s = {};
      r(1480)(s, r(2516)("iterator"), (function() {
        return this
      })), e.exports = function(e, t, r) {
        e.prototype = i(s, {
          next: n(1, r)
        }), a(e, t + " Iterator")
      }
    },
    5708: (e, t, r) => {
      "use strict";
      var i = r(1380),
        n = r(6604),
        a = r(496),
        s = r(1480),
        o = r(1148),
        l = r(7e3),
        u = r(4191),
        c = r(8872),
        h = r(2516)("iterator"),
        p = !([].keys && "next" in [].keys()),
        d = "keys",
        f = "values",
        m = function() {
          return this
        };
      e.exports = function(e, t, r, v, g, y, b) {
        l(r, t, v);
        var S, x, E, P = function(e) {
            if (!p && e in M) return M[e];
            switch (e) {
              case d:
              case f:
                return function() {
                  return new r(this, e)
                }
            }
            return function() {
              return new r(this, e)
            }
          },
          w = t + " Iterator",
          C = g == f,
          T = !1,
          M = e.prototype,
          _ = M[h] || M["@@iterator"] || g && M[g],
          A = _ || P(g),
          k = g ? C ? P("entries") : A : void 0,
          I = "Array" == t && M.entries || _;
        if (I && (E = c(I.call(new e))) !== Object.prototype && E.next && (u(E, w, !0), i || "function" == typeof E[h] || s(E, h, m)), C && _ && _.name !== f && (T = !0, A = function() {
            return _.call(this)
          }), i && !b || !p && !T && M[h] || s(M, h, A), o[t] = A, o[w] = m, g)
          if (S = {
              values: C ? A : P(f),
              keys: y ? A : P(d),
              entries: k
            }, b)
            for (x in S) x in M || a(M, x, S[x]);
          else n(n.P + n.F * (p || T), t, S);
        return S
      }
    },
    9980: e => {
      e.exports = function(e, t) {
        return {
          value: t,
          done: !!e
        }
      }
    },
    1148: e => {
      e.exports = {}
    },
    1380: e => {
      e.exports = !0
    },
    528: (e, t, r) => {
      var i = r(3540)("meta"),
        n = r(3536),
        a = r(1248),
        s = r(6008).f,
        o = 0,
        l = Object.isExtensible || function() {
          return !0
        },
        u = !r(5032)((function() {
          return l(Object.preventExtensions({}))
        })),
        c = function(e) {
          s(e, i, {
            value: {
              i: "O" + ++o,
              w: {}
            }
          })
        },
        h = e.exports = {
          KEY: i,
          NEED: !1,
          fastKey: function(e, t) {
            if (!n(e)) return "symbol" == typeof e ? e : ("string" == typeof e ? "S" : "P") + e;
            if (!a(e, i)) {
              if (!l(e)) return "F";
              if (!t) return "E";
              c(e)
            }
            return e[i].i
          },
          getWeak: function(e, t) {
            if (!a(e, i)) {
              if (!l(e)) return !0;
              if (!t) return !1;
              c(e)
            }
            return e[i].w
          },
          onFreeze: function(e) {
            return u && h.NEED && l(e) && !a(e, i) && c(e), e
          }
        }
    },
    3492: (e, t, r) => {
      "use strict";
      var i = r(5168),
        n = r(7108),
        a = r(716),
        s = r(9520),
        o = r(7380),
        l = r(5760),
        u = Object.assign;
      e.exports = !u || r(5032)((function() {
        var e = {},
          t = {},
          r = Symbol(),
          i = "abcdefghijklmnopqrst";
        return e[r] = 7, i.split("").forEach((function(e) {
          t[e] = e
        })), 7 != u({}, e)[r] || Object.keys(u({}, t)).join("") != i
      })) ? function(e, t) {
        for (var r = o(e), u = arguments.length, c = 1, h = a.f, p = s.f; u > c;)
          for (var d, f = l(arguments[c++]), m = h ? n(f).concat(h(f)) : n(f), v = m.length, g = 0; v > g;) d = m[g++], i && !p.call(f, d) || (r[d] = f[d]);
        return r
      } : u
    },
    5069: (e, t, r) => {
      var i = r(3060),
        n = r(3876),
        a = r(1608),
        s = r(7448)("IE_PROTO"),
        o = function() {},
        l = "prototype",
        u = function() {
          var e, t = r(6440)("iframe"),
            i = a.length;
          for (t.style.display = "none", r(2176).appendChild(t), t.src = "javascript:", (e = t.contentWindow.document).open(), e.write("<script>document.F=Object<\/script>"), e.close(), u = e.F; i--;) delete u[l][a[i]];
          return u()
        };
      e.exports = Object.create || function(e, t) {
        var r;
        return null !== e ? (o[l] = i(e), r = new o, o[l] = null, r[s] = e) : r = u(), void 0 === t ? r : n(r, t)
      }
    },
    6008: (e, t, r) => {
      var i = r(3060),
        n = r(160),
        a = r(4800),
        s = Object.defineProperty;
      t.f = r(5168) ? Object.defineProperty : function(e, t, r) {
        if (i(e), t = a(t, !0), i(r), n) try {
          return s(e, t, r)
        } catch (e) {}
        if ("get" in r || "set" in r) throw TypeError("Accessors not supported!");
        return "value" in r && (e[t] = r.value), e
      }
    },
    3876: (e, t, r) => {
      var i = r(6008),
        n = r(3060),
        a = r(7108);
      e.exports = r(5168) ? Object.defineProperties : function(e, t) {
        n(e);
        for (var r, s = a(t), o = s.length, l = 0; o > l;) i.f(e, r = s[l++], t[r]);
        return e
      }
    },
    4096: (e, t, r) => {
      var i = r(9520),
        n = r(5196),
        a = r(8828),
        s = r(4800),
        o = r(1248),
        l = r(160),
        u = Object.getOwnPropertyDescriptor;
      t.f = r(5168) ? u : function(e, t) {
        if (e = a(e), t = s(t, !0), l) try {
          return u(e, t)
        } catch (e) {}
        if (o(e, t)) return n(!i.f.call(e, t), e[t])
      }
    },
    9920: (e, t, r) => {
      var i = r(8828),
        n = r(9584).f,
        a = {}.toString,
        s = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
      e.exports.f = function(e) {
        return s && "[object Window]" == a.call(e) ? function(e) {
          try {
            return n(e)
          } catch (e) {
            return s.slice()
          }
        }(e) : n(i(e))
      }
    },
    9584: (e, t, r) => {
      var i = r(7988),
        n = r(1608).concat("length", "prototype");
      t.f = Object.getOwnPropertyNames || function(e) {
        return i(e, n)
      }
    },
    716: (e, t) => {
      t.f = Object.getOwnPropertySymbols
    },
    8872: (e, t, r) => {
      var i = r(1248),
        n = r(7380),
        a = r(7448)("IE_PROTO"),
        s = Object.prototype;
      e.exports = Object.getPrototypeOf || function(e) {
        return e = n(e), i(e, a) ? e[a] : "function" == typeof e.constructor && e instanceof e.constructor ? e.constructor.prototype : e instanceof Object ? s : null
      }
    },
    7988: (e, t, r) => {
      var i = r(1248),
        n = r(8828),
        a = r(3572)(!1),
        s = r(7448)("IE_PROTO");
      e.exports = function(e, t) {
        var r, o = n(e),
          l = 0,
          u = [];
        for (r in o) r != s && i(o, r) && u.push(r);
        for (; t.length > l;) i(o, r = t[l++]) && (~a(u, r) || u.push(r));
        return u
      }
    },
    7108: (e, t, r) => {
      var i = r(7988),
        n = r(1608);
      e.exports = Object.keys || function(e) {
        return i(e, n)
      }
    },
    9520: (e, t) => {
      t.f = {}.propertyIsEnumerable
    },
    8659: (e, t, r) => {
      var i = r(6604),
        n = r(7208),
        a = r(5032);
      e.exports = function(e, t) {
        var r = (n.Object || {})[e] || Object[e],
          s = {};
        s[e] = t(r), i(i.S + i.F * a((function() {
          r(1)
        })), "Object", s)
      }
    },
    5196: e => {
      e.exports = function(e, t) {
        return {
          enumerable: !(1 & e),
          configurable: !(2 & e),
          writable: !(4 & e),
          value: t
        }
      }
    },
    496: (e, t, r) => {
      e.exports = r(1480)
    },
    6935: (e, t, r) => {
      var i = r(3536),
        n = r(3060),
        a = function(e, t) {
          if (n(e), !i(t) && null !== t) throw TypeError(t + ": can't set as prototype!")
        };
      e.exports = {
        set: Object.setPrototypeOf || ("__proto__" in {} ? function(e, t, i) {
          try {
            (i = r(6040)(Function.call, r(4096).f(Object.prototype, "__proto__").set, 2))(e, []), t = !(e instanceof Array)
          } catch (e) {
            t = !0
          }
          return function(e, r) {
            return a(e, r), t ? e.__proto__ = r : i(e, r), e
          }
        }({}, !1) : void 0),
        check: a
      }
    },
    4191: (e, t, r) => {
      var i = r(6008).f,
        n = r(1248),
        a = r(2516)("toStringTag");
      e.exports = function(e, t, r) {
        e && !n(e = r ? e : e.prototype, a) && i(e, a, {
          configurable: !0,
          value: t
        })
      }
    },
    7448: (e, t, r) => {
      var i = r(3332)("keys"),
        n = r(3540);
      e.exports = function(e) {
        return i[e] || (i[e] = n(e))
      }
    },
    3332: (e, t, r) => {
      var i = r(7208),
        n = r(6384),
        a = "__core-js_shared__",
        s = n[a] || (n[a] = {});
      (e.exports = function(e, t) {
        return s[e] || (s[e] = void 0 !== t ? t : {})
      })("versions", []).push({
        version: i.version,
        mode: r(1380) ? "pure" : "global",
        copyright: "© 2020 Denis Pushkarev (zloirock.ru)"
      })
    },
    6268: (e, t, r) => {
      var i = r(7211),
        n = r(9396);
      e.exports = function(e) {
        return function(t, r) {
          var a, s, o = String(n(t)),
            l = i(r),
            u = o.length;
          return l < 0 || l >= u ? e ? "" : void 0 : (a = o.charCodeAt(l)) < 55296 || a > 56319 || l + 1 === u || (s = o.charCodeAt(l + 1)) < 56320 || s > 57343 ? e ? o.charAt(l) : a : e ? o.slice(l, l + 2) : s - 56320 + (a - 55296 << 10) + 65536
        }
      }
    },
    371: (e, t, r) => {
      var i = r(7211),
        n = Math.max,
        a = Math.min;
      e.exports = function(e, t) {
        return (e = i(e)) < 0 ? n(e + t, 0) : a(e, t)
      }
    },
    7211: e => {
      var t = Math.ceil,
        r = Math.floor;
      e.exports = function(e) {
        return isNaN(e = +e) ? 0 : (e > 0 ? r : t)(e)
      }
    },
    8828: (e, t, r) => {
      var i = r(5760),
        n = r(9396);
      e.exports = function(e) {
        return i(n(e))
      }
    },
    6964: (e, t, r) => {
      var i = r(7211),
        n = Math.min;
      e.exports = function(e) {
        return e > 0 ? n(i(e), 9007199254740991) : 0
      }
    },
    7380: (e, t, r) => {
      var i = r(9396);
      e.exports = function(e) {
        return Object(i(e))
      }
    },
    4800: (e, t, r) => {
      var i = r(3536);
      e.exports = function(e, t) {
        if (!i(e)) return e;
        var r, n;
        if (t && "function" == typeof(r = e.toString) && !i(n = r.call(e))) return n;
        if ("function" == typeof(r = e.valueOf) && !i(n = r.call(e))) return n;
        if (!t && "function" == typeof(r = e.toString) && !i(n = r.call(e))) return n;
        throw TypeError("Can't convert object to primitive value")
      }
    },
    3540: e => {
      var t = 0,
        r = Math.random();
      e.exports = function(e) {
        return "Symbol(".concat(void 0 === e ? "" : e, ")_", (++t + r).toString(36))
      }
    },
    6152: (e, t, r) => {
      var i = r(6384),
        n = r(7208),
        a = r(1380),
        s = r(3728),
        o = r(6008).f;
      e.exports = function(e) {
        var t = n.Symbol || (n.Symbol = a ? {} : i.Symbol || {});
        "_" == e.charAt(0) || e in t || o(t, e, {
          value: s.f(e)
        })
      }
    },
    3728: (e, t, r) => {
      t.f = r(2516)
    },
    2516: (e, t, r) => {
      var i = r(3332)("wks"),
        n = r(3540),
        a = r(6384).Symbol,
        s = "function" == typeof a;
      (e.exports = function(e) {
        return i[e] || (i[e] = s && a[e] || (s ? a : n)("Symbol." + e))
      }).store = i
    },
    2084: (e, t, r) => {
      "use strict";
      var i = r(9635),
        n = r(9980),
        a = r(1148),
        s = r(8828);
      e.exports = r(5708)(Array, "Array", (function(e, t) {
        this._t = s(e), this._i = 0, this._k = t
      }), (function() {
        var e = this._t,
          t = this._k,
          r = this._i++;
        return !e || r >= e.length ? (this._t = void 0, n(1)) : n(0, "keys" == t ? r : "values" == t ? e[r] : [r, e[r]])
      }), "values"), a.Arguments = a.Array, i("keys"), i("values"), i("entries")
    },
    9808: (e, t, r) => {
      var i = r(6604);
      i(i.S + i.F, "Object", {
        assign: r(3492)
      })
    },
    7779: (e, t, r) => {
      var i = r(6604);
      i(i.S, "Object", {
        create: r(5069)
      })
    },
    9652: (e, t, r) => {
      var i = r(6604);
      i(i.S + i.F * !r(5168), "Object", {
        defineProperty: r(6008).f
      })
    },
    4048: (e, t, r) => {
      var i = r(7380),
        n = r(8872);
      r(8659)("getPrototypeOf", (function() {
        return function(e) {
          return n(i(e))
        }
      }))
    },
    6200: (e, t, r) => {
      var i = r(6604);
      i(i.S, "Object", {
        setPrototypeOf: r(6935).set
      })
    },
    4788: () => {},
    1852: (e, t, r) => {
      "use strict";
      var i = r(6268)(!0);
      r(5708)(String, "String", (function(e) {
        this._t = String(e), this._i = 0
      }), (function() {
        var e, t = this._t,
          r = this._i;
        return r >= t.length ? {
          value: void 0,
          done: !0
        } : (e = i(t, r), this._i += e.length, {
          value: e,
          done: !1
        })
      }))
    },
    9484: (e, t, r) => {
      "use strict";
      var i = r(6384),
        n = r(1248),
        a = r(5168),
        s = r(6604),
        o = r(496),
        l = r(528).KEY,
        u = r(5032),
        c = r(3332),
        h = r(4191),
        p = r(3540),
        d = r(2516),
        f = r(3728),
        m = r(6152),
        v = r(9684),
        g = r(4244),
        y = r(3060),
        b = r(3536),
        S = r(7380),
        x = r(8828),
        E = r(4800),
        P = r(5196),
        w = r(5069),
        C = r(9920),
        T = r(4096),
        M = r(716),
        _ = r(6008),
        A = r(7108),
        k = T.f,
        I = _.f,
        D = C.f,
        O = i.Symbol,
        F = i.JSON,
        L = F && F.stringify,
        V = "prototype",
        R = d("_hidden"),
        B = d("toPrimitive"),
        N = {}.propertyIsEnumerable,
        z = c("symbol-registry"),
        G = c("symbols"),
        j = c("op-symbols"),
        H = Object[V],
        W = "function" == typeof O && !!M.f,
        q = i.QObject,
        $ = !q || !q[V] || !q[V].findChild,
        U = a && u((function() {
          return 7 != w(I({}, "a", {
            get: function() {
              return I(this, "a", {
                value: 7
              }).a
            }
          })).a
        })) ? function(e, t, r) {
          var i = k(H, t);
          i && delete H[t], I(e, t, r), i && e !== H && I(H, t, i)
        } : I,
        Y = function(e) {
          var t = G[e] = w(O[V]);
          return t._k = e, t
        },
        X = W && "symbol" == typeof O.iterator ? function(e) {
          return "symbol" == typeof e
        } : function(e) {
          return e instanceof O
        },
        K = function(e, t, r) {
          return e === H && K(j, t, r), y(e), t = E(t, !0), y(r), n(G, t) ? (r.enumerable ? (n(e, R) && e[R][t] && (e[R][t] = !1), r = w(r, {
            enumerable: P(0, !1)
          })) : (n(e, R) || I(e, R, P(1, {})), e[R][t] = !0), U(e, t, r)) : I(e, t, r)
        },
        Z = function(e, t) {
          y(e);
          for (var r, i = v(t = x(t)), n = 0, a = i.length; a > n;) K(e, r = i[n++], t[r]);
          return e
        },
        J = function(e) {
          var t = N.call(this, e = E(e, !0));
          return !(this === H && n(G, e) && !n(j, e)) && (!(t || !n(this, e) || !n(G, e) || n(this, R) && this[R][e]) || t)
        },
        Q = function(e, t) {
          if (e = x(e), t = E(t, !0), e !== H || !n(G, t) || n(j, t)) {
            var r = k(e, t);
            return !r || !n(G, t) || n(e, R) && e[R][t] || (r.enumerable = !0), r
          }
        },
        ee = function(e) {
          for (var t, r = D(x(e)), i = [], a = 0; r.length > a;) n(G, t = r[a++]) || t == R || t == l || i.push(t);
          return i
        },
        te = function(e) {
          for (var t, r = e === H, i = D(r ? j : x(e)), a = [], s = 0; i.length > s;) !n(G, t = i[s++]) || r && !n(H, t) || a.push(G[t]);
          return a
        };
      W || (o((O = function() {
        if (this instanceof O) throw TypeError("Symbol is not a constructor!");
        var e = p(arguments.length > 0 ? arguments[0] : void 0),
          t = function(r) {
            this === H && t.call(j, r), n(this, R) && n(this[R], e) && (this[R][e] = !1), U(this, e, P(1, r))
          };
        return a && $ && U(H, e, {
          configurable: !0,
          set: t
        }), Y(e)
      })[V], "toString", (function() {
        return this._k
      })), T.f = Q, _.f = K, r(9584).f = C.f = ee, r(9520).f = J, M.f = te, a && !r(1380) && o(H, "propertyIsEnumerable", J, !0), f.f = function(e) {
        return Y(d(e))
      }), s(s.G + s.W + s.F * !W, {
        Symbol: O
      });
      for (var re = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), ie = 0; re.length > ie;) d(re[ie++]);
      for (var ne = A(d.store), ae = 0; ne.length > ae;) m(ne[ae++]);
      s(s.S + s.F * !W, "Symbol", {
        for: function(e) {
          return n(z, e += "") ? z[e] : z[e] = O(e)
        },
        keyFor: function(e) {
          if (!X(e)) throw TypeError(e + " is not a symbol!");
          for (var t in z)
            if (z[t] === e) return t
        },
        useSetter: function() {
          $ = !0
        },
        useSimple: function() {
          $ = !1
        }
      }), s(s.S + s.F * !W, "Object", {
        create: function(e, t) {
          return void 0 === t ? w(e) : Z(w(e), t)
        },
        defineProperty: K,
        defineProperties: Z,
        getOwnPropertyDescriptor: Q,
        getOwnPropertyNames: ee,
        getOwnPropertySymbols: te
      });
      var se = u((function() {
        M.f(1)
      }));
      s(s.S + s.F * se, "Object", {
        getOwnPropertySymbols: function(e) {
          return M.f(S(e))
        }
      }), F && s(s.S + s.F * (!W || u((function() {
        var e = O();
        return "[null]" != L([e]) || "{}" != L({
          a: e
        }) || "{}" != L(Object(e))
      }))), "JSON", {
        stringify: function(e) {
          for (var t, r, i = [e], n = 1; arguments.length > n;) i.push(arguments[n++]);
          if (r = t = i[1], (b(t) || void 0 !== e) && !X(e)) return g(t) || (t = function(e, t) {
            if ("function" == typeof r && (t = r.call(this, e, t)), !X(t)) return t
          }), i[1] = t, L.apply(F, i)
        }
      }), O[V][B] || r(1480)(O[V], B, O[V].valueOf), h(O, "Symbol"), h(Math, "Math", !0), h(i.JSON, "JSON", !0)
    },
    1284: (e, t, r) => {
      r(6152)("asyncIterator")
    },
    3696: (e, t, r) => {
      r(6152)("observable")
    },
    3624: (e, t, r) => {
      r(2084);
      for (var i = r(6384), n = r(1480), a = r(1148), s = r(2516)("toStringTag"), o = "CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","), l = 0; l < o.length; l++) {
        var u = o[l],
          c = i[u],
          h = c && c.prototype;
        h && !h[s] && n(h, s, u), a[u] = a.Array
      }
    },
    2504: (e, t, r) => {
      "use strict";
      r.d(t, {
        c: () => n
      });
      var i = r(3952);

      function n(e, t, r) {
        return (t = (0, i.c)(t)) in e ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[t] = r, e
      }
    },
    2795: (e, t, r) => {
      "use strict";

      function i() {
        return i = Object.assign ? Object.assign.bind() : function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i])
          }
          return e
        }, i.apply(this, arguments)
      }
      r.d(t, {
        c: () => i
      })
    },
    1632: (e, t, r) => {
      "use strict";

      function i(e, t) {
        if (null == e) return {};
        var r, i, n = {},
          a = Object.keys(e);
        for (i = 0; i < a.length; i++) r = a[i], t.indexOf(r) >= 0 || (n[r] = e[r]);
        return n
      }
      r.d(t, {
        c: () => i
      })
    },
    4848: (e, t, r) => {
      "use strict";

      function i(e, t) {
        return i = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
          return e.__proto__ = t, e
        }, i(e, t)
      }
      r.d(t, {
        c: () => i
      })
    },
    3952: (e, t, r) => {
      "use strict";
      r.d(t, {
        c: () => n
      });
      var i = r(8792);

      function n(e) {
        var t = function(e, t) {
          if ("object" !== (0, i.c)(e) || null === e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, "string");
            if ("object" !== (0, i.c)(n)) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e);
        return "symbol" === (0, i.c)(t) ? t : String(t)
      }
    },
    8792: (e, t, r) => {
      "use strict";

      function i(e) {
        return i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
          return typeof e
        } : function(e) {
          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }, i(e)
      }
      r.d(t, {
        c: () => i
      })
    },
    1512: (e, t, r) => {
      "use strict";
      r.d(t, {
        cD: () => u
      });
      var i = r(1664),
        n = (Object.defineProperty, new Map),
        a = new WeakMap,
        s = 0,
        o = void 0;

      function l(e, t, r = {}, i = o) {
        if (void 0 === window.IntersectionObserver && void 0 !== i) {
          const n = e.getBoundingClientRect();
          return t(i, {
            isIntersecting: i,
            target: e,
            intersectionRatio: "number" == typeof r.threshold ? r.threshold : 0,
            time: 0,
            boundingClientRect: n,
            intersectionRect: n,
            rootBounds: n
          }), () => {}
        }
        const {
          id: l,
          observer: u,
          elements: c
        } = function(e) {
          let t = function(e) {
              return Object.keys(e).sort().filter((t => void 0 !== e[t])).map((t => {
                return `${t}_${"root"===t?(r=e.root,r?(a.has(r)||(s+=1,a.set(r,s.toString())),a.get(r)):"0"):e[t]}`;
                var r
              })).toString()
            }(e),
            r = n.get(t);
          if (!r) {
            const i = new Map;
            let a;
            const s = new IntersectionObserver((t => {
              t.forEach((t => {
                var r;
                const n = t.isIntersecting && a.some((e => t.intersectionRatio >= e));
                e.trackVisibility && void 0 === t.isVisible && (t.isVisible = n), null == (r = i.get(t.target)) || r.forEach((e => {
                  e(n, t)
                }))
              }))
            }), e);
            a = s.thresholds || (Array.isArray(e.threshold) ? e.threshold : [e.threshold || 0]), r = {
              id: t,
              observer: s,
              elements: i
            }, n.set(t, r)
          }
          return r
        }(r);
        let h = c.get(e) || [];
        return c.has(e) || c.set(e, h), h.push(t), u.observe(e),
          function() {
            h.splice(h.indexOf(t), 1), 0 === h.length && (c.delete(e), u.unobserve(e)), 0 === c.size && (u.disconnect(), n.delete(l))
          }
      }

      function u({
        threshold: e,
        delay: t,
        trackVisibility: r,
        rootMargin: n,
        root: a,
        triggerOnce: s,
        skip: o,
        initialInView: u,
        fallbackInView: c,
        onChange: h
      } = {}) {
        var p;
        const [d, f] = i.useState(null), m = i.useRef(), [v, g] = i.useState({
          inView: !!u,
          entry: void 0
        });
        m.current = h, i.useEffect((() => {
          if (o || !d) return;
          let i;
          return i = l(d, ((e, t) => {
            g({
              inView: e,
              entry: t
            }), m.current && m.current(e, t), t.isIntersecting && s && i && (i(), i = void 0)
          }), {
            root: a,
            rootMargin: n,
            threshold: e,
            trackVisibility: r,
            delay: t
          }, c), () => {
            i && i()
          }
        }), [Array.isArray(e) ? e.toString() : e, d, a, n, s, o, r, c, t]);
        const y = null == (p = v.entry) ? void 0 : p.target,
          b = i.useRef();
        d || !y || s || o || b.current === y || (b.current = y, g({
          inView: !!u,
          entry: void 0
        }));
        const S = [f, v.inView, v.entry];
        return S.ref = S[0], S.inView = S[1], S.entry = S[2], S
      }
      i.Component
    },
    1403: (e, t, r) => {
      "use strict";
      r.d(t, {
        O4: () => c,
        _2: () => s,
        eM: () => l,
        Hj: () => u
      });
      var i = r(1068),
        n = r(5848);

      function a(e, t, r, i) {
        return e.params.createElements && Object.keys(i).forEach((a => {
          if (!r[a] && !0 === r.auto) {
            let s = (0, n.e)(e.el, `.${i[a]}`)[0];
            s || (s = (0, n.c)("div", i[a]), s.className = i[a], e.el.append(s)), r[a] = s, t[a] = s
          }
        })), r
      }

      function s(e) {
        let {
          swiper: t,
          extendParams: r,
          on: i,
          emit: s
        } = e;

        function o(e) {
          let r;
          return e && "string" == typeof e && t.isElement && (r = t.el.querySelector(e), r) ? r : (e && ("string" == typeof e && (r = [...document.querySelectorAll(e)]), t.params.uniqueNavElements && "string" == typeof e && r.length > 1 && 1 === t.el.querySelectorAll(e).length && (r = t.el.querySelector(e))), e && !r ? e : r)
        }

        function l(e, r) {
          const i = t.params.navigation;
          (e = (0, n.m)(e)).forEach((e => {
            e && (e.classList[r ? "add" : "remove"](...i.disabledClass.split(" ")), "BUTTON" === e.tagName && (e.disabled = r), t.params.watchOverflow && t.enabled && e.classList[t.isLocked ? "add" : "remove"](i.lockClass))
          }))
        }

        function u() {
          const {
            nextEl: e,
            prevEl: r
          } = t.navigation;
          if (t.params.loop) return l(r, !1), void l(e, !1);
          l(r, t.isBeginning && !t.params.rewind), l(e, t.isEnd && !t.params.rewind)
        }

        function c(e) {
          e.preventDefault(), (!t.isBeginning || t.params.loop || t.params.rewind) && (t.slidePrev(), s("navigationPrev"))
        }

        function h(e) {
          e.preventDefault(), (!t.isEnd || t.params.loop || t.params.rewind) && (t.slideNext(), s("navigationNext"))
        }

        function p() {
          const e = t.params.navigation;
          if (t.params.navigation = a(t, t.originalParams.navigation, t.params.navigation, {
              nextEl: "swiper-button-next",
              prevEl: "swiper-button-prev"
            }), !e.nextEl && !e.prevEl) return;
          let r = o(e.nextEl),
            i = o(e.prevEl);
          Object.assign(t.navigation, {
            nextEl: r,
            prevEl: i
          }), r = (0, n.m)(r), i = (0, n.m)(i);
          const s = (r, i) => {
            r && r.addEventListener("click", "next" === i ? h : c), !t.enabled && r && r.classList.add(...e.lockClass.split(" "))
          };
          r.forEach((e => s(e, "next"))), i.forEach((e => s(e, "prev")))
        }

        function d() {
          let {
            nextEl: e,
            prevEl: r
          } = t.navigation;
          e = (0, n.m)(e), r = (0, n.m)(r);
          const i = (e, r) => {
            e.removeEventListener("click", "next" === r ? h : c), e.classList.remove(...t.params.navigation.disabledClass.split(" "))
          };
          e.forEach((e => i(e, "next"))), r.forEach((e => i(e, "prev")))
        }
        r({
          navigation: {
            nextEl: null,
            prevEl: null,
            hideOnClick: !1,
            disabledClass: "swiper-button-disabled",
            hiddenClass: "swiper-button-hidden",
            lockClass: "swiper-button-lock",
            navigationDisabledClass: "swiper-navigation-disabled"
          }
        }), t.navigation = {
          nextEl: null,
          prevEl: null
        }, i("init", (() => {
          !1 === t.params.navigation.enabled ? f() : (p(), u())
        })), i("toEdge fromEdge lock unlock", (() => {
          u()
        })), i("destroy", (() => {
          d()
        })), i("enable disable", (() => {
          let {
            nextEl: e,
            prevEl: r
          } = t.navigation;
          e = (0, n.m)(e), r = (0, n.m)(r), t.enabled ? u() : [...e, ...r].filter((e => !!e)).forEach((e => e.classList.add(t.params.navigation.lockClass)))
        })), i("click", ((e, r) => {
          let {
            nextEl: i,
            prevEl: a
          } = t.navigation;
          i = (0, n.m)(i), a = (0, n.m)(a);
          const o = r.target;
          if (t.params.navigation.hideOnClick && !a.includes(o) && !i.includes(o)) {
            if (t.pagination && t.params.pagination && t.params.pagination.clickable && (t.pagination.el === o || t.pagination.el.contains(o))) return;
            let e;
            i.length ? e = i[0].classList.contains(t.params.navigation.hiddenClass) : a.length && (e = a[0].classList.contains(t.params.navigation.hiddenClass)), s(!0 === e ? "navigationShow" : "navigationHide"), [...i, ...a].filter((e => !!e)).forEach((e => e.classList.toggle(t.params.navigation.hiddenClass)))
          }
        }));
        const f = () => {
          t.el.classList.add(...t.params.navigation.navigationDisabledClass.split(" ")), d()
        };
        Object.assign(t.navigation, {
          enable: () => {
            t.el.classList.remove(...t.params.navigation.navigationDisabledClass.split(" ")), p(), u()
          },
          disable: f,
          update: u,
          init: p,
          destroy: d
        })
      }

      function o(e) {
        return void 0 === e && (e = ""), `.${e.trim().replace(/([\.:!+\/])/g,"\\$1").replace(/ /g,".")}`
      }

      function l(e) {
        let {
          swiper: t,
          extendParams: r,
          on: i,
          emit: s
        } = e;
        const l = "swiper-pagination";
        let u;
        r({
          pagination: {
            el: null,
            bulletElement: "span",
            clickable: !1,
            hideOnClick: !1,
            renderBullet: null,
            renderProgressbar: null,
            renderFraction: null,
            renderCustom: null,
            progressbarOpposite: !1,
            type: "bullets",
            dynamicBullets: !1,
            dynamicMainBullets: 1,
            formatFractionCurrent: e => e,
            formatFractionTotal: e => e,
            bulletClass: `${l}-bullet`,
            bulletActiveClass: `${l}-bullet-active`,
            modifierClass: `${l}-`,
            currentClass: `${l}-current`,
            totalClass: `${l}-total`,
            hiddenClass: `${l}-hidden`,
            progressbarFillClass: `${l}-progressbar-fill`,
            progressbarOppositeClass: `${l}-progressbar-opposite`,
            clickableClass: `${l}-clickable`,
            lockClass: `${l}-lock`,
            horizontalClass: `${l}-horizontal`,
            verticalClass: `${l}-vertical`,
            paginationDisabledClass: `${l}-disabled`
          }
        }), t.pagination = {
          el: null,
          bullets: []
        };
        let c = 0;

        function h() {
          return !t.params.pagination.el || !t.pagination.el || Array.isArray(t.pagination.el) && 0 === t.pagination.el.length
        }

        function p(e, r) {
          const {
            bulletActiveClass: i
          } = t.params.pagination;
          e && (e = e[("prev" === r ? "previous" : "next") + "ElementSibling"]) && (e.classList.add(`${i}-${r}`), (e = e[("prev" === r ? "previous" : "next") + "ElementSibling"]) && e.classList.add(`${i}-${r}-${r}`))
        }

        function d(e) {
          const r = e.target.closest(o(t.params.pagination.bulletClass));
          if (!r) return;
          e.preventDefault();
          const i = (0, n.g)(r) * t.params.slidesPerGroup;
          if (t.params.loop) {
            if (t.realIndex === i) return;
            t.slideToLoop(i)
          } else t.slideTo(i)
        }

        function f() {
          const e = t.rtl,
            r = t.params.pagination;
          if (h()) return;
          let i, a, l = t.pagination.el;
          l = (0, n.m)(l);
          const d = t.virtual && t.params.virtual.enabled ? t.virtual.slides.length : t.slides.length,
            f = t.params.loop ? Math.ceil(d / t.params.slidesPerGroup) : t.snapGrid.length;
          if (t.params.loop ? (a = t.previousRealIndex || 0, i = t.params.slidesPerGroup > 1 ? Math.floor(t.realIndex / t.params.slidesPerGroup) : t.realIndex) : void 0 !== t.snapIndex ? (i = t.snapIndex, a = t.previousSnapIndex) : (a = t.previousIndex || 0, i = t.activeIndex || 0), "bullets" === r.type && t.pagination.bullets && t.pagination.bullets.length > 0) {
            const s = t.pagination.bullets;
            let o, h, d;
            if (r.dynamicBullets && (u = (0, n.f)(s[0], t.isHorizontal() ? "width" : "height", !0), l.forEach((e => {
                e.style[t.isHorizontal() ? "width" : "height"] = u * (r.dynamicMainBullets + 4) + "px"
              })), r.dynamicMainBullets > 1 && void 0 !== a && (c += i - (a || 0), c > r.dynamicMainBullets - 1 ? c = r.dynamicMainBullets - 1 : c < 0 && (c = 0)), o = Math.max(i - c, 0), h = o + (Math.min(s.length, r.dynamicMainBullets) - 1), d = (h + o) / 2), s.forEach((e => {
                const t = [...["", "-next", "-next-next", "-prev", "-prev-prev", "-main"].map((e => `${r.bulletActiveClass}${e}`))].map((e => "string" == typeof e && e.includes(" ") ? e.split(" ") : e)).flat();
                e.classList.remove(...t)
              })), l.length > 1) s.forEach((e => {
              const a = (0, n.g)(e);
              a === i ? e.classList.add(...r.bulletActiveClass.split(" ")) : t.isElement && e.setAttribute("part", "bullet"), r.dynamicBullets && (a >= o && a <= h && e.classList.add(...`${r.bulletActiveClass}-main`.split(" ")), a === o && p(e, "prev"), a === h && p(e, "next"))
            }));
            else {
              const e = s[i];
              if (e && e.classList.add(...r.bulletActiveClass.split(" ")), t.isElement && s.forEach(((e, t) => {
                  e.setAttribute("part", t === i ? "bullet-active" : "bullet")
                })), r.dynamicBullets) {
                const e = s[o],
                  t = s[h];
                for (let e = o; e <= h; e += 1) s[e] && s[e].classList.add(...`${r.bulletActiveClass}-main`.split(" "));
                p(e, "prev"), p(t, "next")
              }
            }
            if (r.dynamicBullets) {
              const i = Math.min(s.length, r.dynamicMainBullets + 4),
                n = (u * i - u) / 2 - d * u,
                a = e ? "right" : "left";
              s.forEach((e => {
                e.style[t.isHorizontal() ? a : "top"] = `${n}px`
              }))
            }
          }
          l.forEach(((e, n) => {
            if ("fraction" === r.type && (e.querySelectorAll(o(r.currentClass)).forEach((e => {
                e.textContent = r.formatFractionCurrent(i + 1)
              })), e.querySelectorAll(o(r.totalClass)).forEach((e => {
                e.textContent = r.formatFractionTotal(f)
              }))), "progressbar" === r.type) {
              let n;
              n = r.progressbarOpposite ? t.isHorizontal() ? "vertical" : "horizontal" : t.isHorizontal() ? "horizontal" : "vertical";
              const a = (i + 1) / f;
              let s = 1,
                l = 1;
              "horizontal" === n ? s = a : l = a, e.querySelectorAll(o(r.progressbarFillClass)).forEach((e => {
                e.style.transform = `translate3d(0,0,0) scaleX(${s}) scaleY(${l})`, e.style.transitionDuration = `${t.params.speed}ms`
              }))
            }
            "custom" === r.type && r.renderCustom ? (e.innerHTML = r.renderCustom(t, i + 1, f), 0 === n && s("paginationRender", e)) : (0 === n && s("paginationRender", e), s("paginationUpdate", e)), t.params.watchOverflow && t.enabled && e.classList[t.isLocked ? "add" : "remove"](r.lockClass)
          }))
        }

        function m() {
          const e = t.params.pagination;
          if (h()) return;
          const r = t.virtual && t.params.virtual.enabled ? t.virtual.slides.length : t.grid && t.params.grid.rows > 1 ? t.slides.length / Math.ceil(t.params.grid.rows) : t.slides.length;
          let i = t.pagination.el;
          i = (0, n.m)(i);
          let a = "";
          if ("bullets" === e.type) {
            let i = t.params.loop ? Math.ceil(r / t.params.slidesPerGroup) : t.snapGrid.length;
            t.params.freeMode && t.params.freeMode.enabled && i > r && (i = r);
            for (let r = 0; r < i; r += 1) e.renderBullet ? a += e.renderBullet.call(t, r, e.bulletClass) : a += `<${e.bulletElement} ${t.isElement?'part="bullet"':""} class="${e.bulletClass}"></${e.bulletElement}>`
          }
          "fraction" === e.type && (a = e.renderFraction ? e.renderFraction.call(t, e.currentClass, e.totalClass) : `<span class="${e.currentClass}"></span> / <span class="${e.totalClass}"></span>`), "progressbar" === e.type && (a = e.renderProgressbar ? e.renderProgressbar.call(t, e.progressbarFillClass) : `<span class="${e.progressbarFillClass}"></span>`), t.pagination.bullets = [], i.forEach((r => {
            "custom" !== e.type && (r.innerHTML = a || ""), "bullets" === e.type && t.pagination.bullets.push(...r.querySelectorAll(o(e.bulletClass)))
          })), "custom" !== e.type && s("paginationRender", i[0])
        }

        function v() {
          t.params.pagination = a(t, t.originalParams.pagination, t.params.pagination, {
            el: "swiper-pagination"
          });
          const e = t.params.pagination;
          if (!e.el) return;
          let r;
          "string" == typeof e.el && t.isElement && (r = t.el.querySelector(e.el)), r || "string" != typeof e.el || (r = [...document.querySelectorAll(e.el)]), r || (r = e.el), r && 0 !== r.length && (t.params.uniqueNavElements && "string" == typeof e.el && Array.isArray(r) && r.length > 1 && (r = [...t.el.querySelectorAll(e.el)], r.length > 1 && (r = r.filter((e => (0, n.a)(e, ".swiper")[0] === t.el))[0])), Array.isArray(r) && 1 === r.length && (r = r[0]), Object.assign(t.pagination, {
            el: r
          }), r = (0, n.m)(r), r.forEach((r => {
            "bullets" === e.type && e.clickable && r.classList.add(...(e.clickableClass || "").split(" ")), r.classList.add(e.modifierClass + e.type), r.classList.add(t.isHorizontal() ? e.horizontalClass : e.verticalClass), "bullets" === e.type && e.dynamicBullets && (r.classList.add(`${e.modifierClass}${e.type}-dynamic`), c = 0, e.dynamicMainBullets < 1 && (e.dynamicMainBullets = 1)), "progressbar" === e.type && e.progressbarOpposite && r.classList.add(e.progressbarOppositeClass), e.clickable && r.addEventListener("click", d), t.enabled || r.classList.add(e.lockClass)
          })))
        }

        function g() {
          const e = t.params.pagination;
          if (h()) return;
          let r = t.pagination.el;
          r && (r = (0, n.m)(r), r.forEach((r => {
            r.classList.remove(e.hiddenClass), r.classList.remove(e.modifierClass + e.type), r.classList.remove(t.isHorizontal() ? e.horizontalClass : e.verticalClass), e.clickable && (r.classList.remove(...(e.clickableClass || "").split(" ")), r.removeEventListener("click", d))
          }))), t.pagination.bullets && t.pagination.bullets.forEach((t => t.classList.remove(...e.bulletActiveClass.split(" "))))
        }
        i("changeDirection", (() => {
          if (!t.pagination || !t.pagination.el) return;
          const e = t.params.pagination;
          let {
            el: r
          } = t.pagination;
          r = (0, n.m)(r), r.forEach((r => {
            r.classList.remove(e.horizontalClass, e.verticalClass), r.classList.add(t.isHorizontal() ? e.horizontalClass : e.verticalClass)
          }))
        })), i("init", (() => {
          !1 === t.params.pagination.enabled ? y() : (v(), m(), f())
        })), i("activeIndexChange", (() => {
          void 0 === t.snapIndex && f()
        })), i("snapIndexChange", (() => {
          f()
        })), i("snapGridLengthChange", (() => {
          m(), f()
        })), i("destroy", (() => {
          g()
        })), i("enable disable", (() => {
          let {
            el: e
          } = t.pagination;
          e && (e = (0, n.m)(e), e.forEach((e => e.classList[t.enabled ? "remove" : "add"](t.params.pagination.lockClass))))
        })), i("lock unlock", (() => {
          f()
        })), i("click", ((e, r) => {
          const i = r.target,
            a = (0, n.m)(t.pagination.el);
          if (t.params.pagination.el && t.params.pagination.hideOnClick && a && a.length > 0 && !i.classList.contains(t.params.pagination.bulletClass)) {
            if (t.navigation && (t.navigation.nextEl && i === t.navigation.nextEl || t.navigation.prevEl && i === t.navigation.prevEl)) return;
            const e = a[0].classList.contains(t.params.pagination.hiddenClass);
            s(!0 === e ? "paginationShow" : "paginationHide"), a.forEach((e => e.classList.toggle(t.params.pagination.hiddenClass)))
          }
        }));
        const y = () => {
          t.el.classList.add(t.params.pagination.paginationDisabledClass);
          let {
            el: e
          } = t.pagination;
          e && (e = (0, n.m)(e), e.forEach((e => e.classList.add(t.params.pagination.paginationDisabledClass)))), g()
        };
        Object.assign(t.pagination, {
          enable: () => {
            t.el.classList.remove(t.params.pagination.paginationDisabledClass);
            let {
              el: e
            } = t.pagination;
            e && (e = (0, n.m)(e), e.forEach((e => e.classList.remove(t.params.pagination.paginationDisabledClass)))), v(), m(), f()
          },
          disable: y,
          render: m,
          update: f,
          init: v,
          destroy: g
        })
      }

      function u(e) {
        let {
          swiper: t,
          extendParams: r,
          on: a
        } = e;
        r({
          thumbs: {
            swiper: null,
            multipleActiveThumbs: !0,
            autoScrollOffset: 0,
            slideThumbActiveClass: "swiper-slide-thumb-active",
            thumbsContainerClass: "swiper-thumbs"
          }
        });
        let s = !1,
          o = !1;

        function l() {
          const e = t.thumbs.swiper;
          if (!e || e.destroyed) return;
          const r = e.clickedIndex,
            i = e.clickedSlide;
          if (i && i.classList.contains(t.params.thumbs.slideThumbActiveClass)) return;
          if (null == r) return;
          let n;
          n = e.params.loop ? parseInt(e.clickedSlide.getAttribute("data-swiper-slide-index"), 10) : r, t.params.loop ? t.slideToLoop(n) : t.slideTo(n)
        }

        function u() {
          const {
            thumbs: e
          } = t.params;
          if (s) return !1;
          s = !0;
          const r = t.constructor;
          if (e.swiper instanceof r) t.thumbs.swiper = e.swiper, Object.assign(t.thumbs.swiper.originalParams, {
            watchSlidesProgress: !0,
            slideToClickedSlide: !1
          }), Object.assign(t.thumbs.swiper.params, {
            watchSlidesProgress: !0,
            slideToClickedSlide: !1
          }), t.thumbs.swiper.update();
          else if ((0, n.k)(e.swiper)) {
            const i = Object.assign({}, e.swiper);
            Object.assign(i, {
              watchSlidesProgress: !0,
              slideToClickedSlide: !1
            }), t.thumbs.swiper = new r(i), o = !0
          }
          return t.thumbs.swiper.el.classList.add(t.params.thumbs.thumbsContainerClass), t.thumbs.swiper.on("tap", l), !0
        }

        function c(e) {
          const r = t.thumbs.swiper;
          if (!r || r.destroyed) return;
          const i = "auto" === r.params.slidesPerView ? r.slidesPerViewDynamic() : r.params.slidesPerView;
          let a = 1;
          const s = t.params.thumbs.slideThumbActiveClass;
          if (t.params.slidesPerView > 1 && !t.params.centeredSlides && (a = t.params.slidesPerView), t.params.thumbs.multipleActiveThumbs || (a = 1), a = Math.floor(a), r.slides.forEach((e => e.classList.remove(s))), r.params.loop || r.params.virtual && r.params.virtual.enabled)
            for (let e = 0; e < a; e += 1)(0, n.e)(r.slidesEl, `[data-swiper-slide-index="${t.realIndex+e}"]`).forEach((e => {
              e.classList.add(s)
            }));
          else
            for (let e = 0; e < a; e += 1) r.slides[t.realIndex + e] && r.slides[t.realIndex + e].classList.add(s);
          const o = t.params.thumbs.autoScrollOffset,
            l = o && !r.params.loop;
          if (t.realIndex !== r.realIndex || l) {
            const n = r.activeIndex;
            let a, s;
            if (r.params.loop) {
              const e = r.slides.filter((e => e.getAttribute("data-swiper-slide-index") === `${t.realIndex}`))[0];
              a = r.slides.indexOf(e), s = t.activeIndex > t.previousIndex ? "next" : "prev"
            } else a = t.realIndex, s = a > t.previousIndex ? "next" : "prev";
            l && (a += "next" === s ? o : -1 * o), r.visibleSlidesIndexes && r.visibleSlidesIndexes.indexOf(a) < 0 && (r.params.centeredSlides ? a = a > n ? a - Math.floor(i / 2) + 1 : a + Math.floor(i / 2) - 1 : a > n && r.params.slidesPerGroup, r.slideTo(a, e ? 0 : void 0))
          }
        }
        t.thumbs = {
          swiper: null
        }, a("beforeInit", (() => {
          const {
            thumbs: e
          } = t.params;
          if (e && e.swiper)
            if ("string" == typeof e.swiper || e.swiper instanceof HTMLElement) {
              const r = (0, i.g)(),
                n = () => {
                  const i = "string" == typeof e.swiper ? r.querySelector(e.swiper) : e.swiper;
                  if (i && i.swiper) e.swiper = i.swiper, u(), c(!0);
                  else if (i) {
                    const r = n => {
                      e.swiper = n.detail[0], i.removeEventListener("init", r), u(), c(!0), e.swiper.update(), t.update()
                    };
                    i.addEventListener("init", r)
                  }
                  return i
                },
                a = () => {
                  t.destroyed || n() || requestAnimationFrame(a)
                };
              requestAnimationFrame(a)
            } else u(), c(!0)
        })), a("slideChange update resize observerUpdate", (() => {
          c()
        })), a("setTransition", ((e, r) => {
          const i = t.thumbs.swiper;
          i && !i.destroyed && i.setTransition(r)
        })), a("beforeDestroy", (() => {
          const e = t.thumbs.swiper;
          e && !e.destroyed && o && e.destroy()
        })), Object.assign(t.thumbs, {
          init: u,
          update: c
        })
      }

      function c(e) {
        let {
          swiper: t,
          extendParams: r,
          emit: i,
          once: a
        } = e;
        r({
          freeMode: {
            enabled: !1,
            momentum: !0,
            momentumRatio: 1,
            momentumBounce: !0,
            momentumBounceRatio: 1,
            momentumVelocityRatio: 1,
            sticky: !1,
            minimumVelocity: .02
          }
        }), Object.assign(t, {
          freeMode: {
            onTouchStart: function() {
              if (t.params.cssMode) return;
              const e = t.getTranslate();
              t.setTranslate(e), t.setTransition(0), t.touchEventsData.velocities.length = 0, t.freeMode.onTouchEnd({
                currentPos: t.rtl ? t.translate : -t.translate
              })
            },
            onTouchMove: function() {
              if (t.params.cssMode) return;
              const {
                touchEventsData: e,
                touches: r
              } = t;
              0 === e.velocities.length && e.velocities.push({
                position: r[t.isHorizontal() ? "startX" : "startY"],
                time: e.touchStartTime
              }), e.velocities.push({
                position: r[t.isHorizontal() ? "currentX" : "currentY"],
                time: (0, n.d)()
              })
            },
            onTouchEnd: function(e) {
              let {
                currentPos: r
              } = e;
              if (t.params.cssMode) return;
              const {
                params: s,
                wrapperEl: o,
                rtlTranslate: l,
                snapGrid: u,
                touchEventsData: c
              } = t, h = (0, n.d)() - c.touchStartTime;
              if (r < -t.minTranslate()) t.slideTo(t.activeIndex);
              else if (r > -t.maxTranslate()) t.slides.length < u.length ? t.slideTo(u.length - 1) : t.slideTo(t.slides.length - 1);
              else {
                if (s.freeMode.momentum) {
                  if (c.velocities.length > 1) {
                    const e = c.velocities.pop(),
                      r = c.velocities.pop(),
                      i = e.position - r.position,
                      a = e.time - r.time;
                    t.velocity = i / a, t.velocity /= 2, Math.abs(t.velocity) < s.freeMode.minimumVelocity && (t.velocity = 0), (a > 150 || (0, n.d)() - e.time > 300) && (t.velocity = 0)
                  } else t.velocity = 0;
                  t.velocity *= s.freeMode.momentumVelocityRatio, c.velocities.length = 0;
                  let e = 1e3 * s.freeMode.momentumRatio;
                  const r = t.velocity * e;
                  let h = t.translate + r;
                  l && (h = -h);
                  let p, d = !1;
                  const f = 20 * Math.abs(t.velocity) * s.freeMode.momentumBounceRatio;
                  let m;
                  if (h < t.maxTranslate()) s.freeMode.momentumBounce ? (h + t.maxTranslate() < -f && (h = t.maxTranslate() - f), p = t.maxTranslate(), d = !0, c.allowMomentumBounce = !0) : h = t.maxTranslate(), s.loop && s.centeredSlides && (m = !0);
                  else if (h > t.minTranslate()) s.freeMode.momentumBounce ? (h - t.minTranslate() > f && (h = t.minTranslate() + f), p = t.minTranslate(), d = !0, c.allowMomentumBounce = !0) : h = t.minTranslate(), s.loop && s.centeredSlides && (m = !0);
                  else if (s.freeMode.sticky) {
                    let e;
                    for (let t = 0; t < u.length; t += 1)
                      if (u[t] > -h) {
                        e = t;
                        break
                      } h = Math.abs(u[e] - h) < Math.abs(u[e - 1] - h) || "next" === t.swipeDirection ? u[e] : u[e - 1], h = -h
                  }
                  if (m && a("transitionEnd", (() => {
                      t.loopFix()
                    })), 0 !== t.velocity) {
                    if (e = l ? Math.abs((-h - t.translate) / t.velocity) : Math.abs((h - t.translate) / t.velocity), s.freeMode.sticky) {
                      const r = Math.abs((l ? -h : h) - t.translate),
                        i = t.slidesSizesGrid[t.activeIndex];
                      e = r < i ? s.speed : r < 2 * i ? 1.5 * s.speed : 2.5 * s.speed
                    }
                  } else if (s.freeMode.sticky) return void t.slideToClosest();
                  s.freeMode.momentumBounce && d ? (t.updateProgress(p), t.setTransition(e), t.setTranslate(h), t.transitionStart(!0, t.swipeDirection), t.animating = !0, (0, n.j)(o, (() => {
                    t && !t.destroyed && c.allowMomentumBounce && (i("momentumBounce"), t.setTransition(s.speed), setTimeout((() => {
                      t.setTranslate(p), (0, n.j)(o, (() => {
                        t && !t.destroyed && t.transitionEnd()
                      }))
                    }), 0))
                  }))) : t.velocity ? (i("_freeModeNoMomentumRelease"), t.updateProgress(h), t.setTransition(e), t.setTranslate(h), t.transitionStart(!0, t.swipeDirection), t.animating || (t.animating = !0, (0, n.j)(o, (() => {
                    t && !t.destroyed && t.transitionEnd()
                  })))) : t.updateProgress(h), t.updateActiveIndex(), t.updateSlidesClasses()
                } else {
                  if (s.freeMode.sticky) return void t.slideToClosest();
                  s.freeMode && i("_freeModeNoMomentumRelease")
                }(!s.freeMode.momentum || h >= s.longSwipesMs) && (i("_freeModeStaticRelease"), t.updateProgress(), t.updateActiveIndex(), t.updateSlidesClasses())
              }
            }
          }
        })
      }
    },
    1068: (e, t, r) => {
      "use strict";

      function i(e) {
        return null !== e && "object" == typeof e && "constructor" in e && e.constructor === Object
      }

      function n(e, t) {
        void 0 === e && (e = {}), void 0 === t && (t = {}), Object.keys(t).forEach((r => {
          void 0 === e[r] ? e[r] = t[r] : i(t[r]) && i(e[r]) && Object.keys(t[r]).length > 0 && n(e[r], t[r])
        }))
      }
      r.d(t, {
        a: () => l,
        g: () => s
      });
      const a = {
        body: {},
        addEventListener() {},
        removeEventListener() {},
        activeElement: {
          blur() {},
          nodeName: ""
        },
        querySelector: () => null,
        querySelectorAll: () => [],
        getElementById: () => null,
        createEvent: () => ({
          initEvent() {}
        }),
        createElement: () => ({
          children: [],
          childNodes: [],
          style: {},
          setAttribute() {},
          getElementsByTagName: () => []
        }),
        createElementNS: () => ({}),
        importNode: () => null,
        location: {
          hash: "",
          host: "",
          hostname: "",
          href: "",
          origin: "",
          pathname: "",
          protocol: "",
          search: ""
        }
      };

      function s() {
        const e = "undefined" != typeof document ? document : {};
        return n(e, a), e
      }
      const o = {
        document: a,
        navigator: {
          userAgent: ""
        },
        location: {
          hash: "",
          host: "",
          hostname: "",
          href: "",
          origin: "",
          pathname: "",
          protocol: "",
          search: ""
        },
        history: {
          replaceState() {},
          pushState() {},
          go() {},
          back() {}
        },
        CustomEvent: function() {
          return this
        },
        addEventListener() {},
        removeEventListener() {},
        getComputedStyle: () => ({
          getPropertyValue: () => ""
        }),
        Image() {},
        Date() {},
        screen: {},
        setTimeout() {},
        clearTimeout() {},
        matchMedia: () => ({}),
        requestAnimationFrame: e => "undefined" == typeof setTimeout ? (e(), null) : setTimeout(e, 0),
        cancelAnimationFrame(e) {
          "undefined" != typeof setTimeout && clearTimeout(e)
        }
      };

      function l() {
        const e = "undefined" != typeof window ? window : {};
        return n(e, o), e
      }
    },
    5848: (e, t, r) => {
      "use strict";
      r.d(t, {
        a: () => b,
        c: () => f,
        d: () => s,
        e: () => p,
        f: () => x,
        g: () => y,
        i: () => o,
        j: () => S,
        k: () => l,
        m: () => E,
        n: () => a,
        o: () => g,
        p: () => v,
        q: () => m,
        r: () => h,
        s: () => c,
        t: () => d,
        u: () => u,
        v: () => n
      });
      var i = r(1068);

      function n(e) {
        const t = e;
        Object.keys(t).forEach((e => {
          try {
            t[e] = null
          } catch (e) {}
          try {
            delete t[e]
          } catch (e) {}
        }))
      }

      function a(e, t) {
        return void 0 === t && (t = 0), setTimeout(e, t)
      }

      function s() {
        return Date.now()
      }

      function o(e, t) {
        void 0 === t && (t = "x");
        const r = (0, i.a)();
        let n, a, s;
        const o = function(e) {
          const t = (0, i.a)();
          let r;
          return t.getComputedStyle && (r = t.getComputedStyle(e, null)), !r && e.currentStyle && (r = e.currentStyle), r || (r = e.style), r
        }(e);
        return r.WebKitCSSMatrix ? (a = o.transform || o.webkitTransform, a.split(",").length > 6 && (a = a.split(", ").map((e => e.replace(",", "."))).join(", ")), s = new r.WebKitCSSMatrix("none" === a ? "" : a)) : (s = o.MozTransform || o.OTransform || o.MsTransform || o.msTransform || o.transform || o.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"), n = s.toString().split(",")), "x" === t && (a = r.WebKitCSSMatrix ? s.m41 : 16 === n.length ? parseFloat(n[12]) : parseFloat(n[4])), "y" === t && (a = r.WebKitCSSMatrix ? s.m42 : 16 === n.length ? parseFloat(n[13]) : parseFloat(n[5])), a || 0
      }

      function l(e) {
        return "object" == typeof e && null !== e && e.constructor && "Object" === Object.prototype.toString.call(e).slice(8, -1)
      }

      function u() {
        const e = Object(arguments.length <= 0 ? void 0 : arguments[0]),
          t = ["__proto__", "constructor", "prototype"];
        for (let i = 1; i < arguments.length; i += 1) {
          const n = i < 0 || arguments.length <= i ? void 0 : arguments[i];
          if (null != n && (r = n, !("undefined" != typeof window && void 0 !== window.HTMLElement ? r instanceof HTMLElement : r && (1 === r.nodeType || 11 === r.nodeType)))) {
            const r = Object.keys(Object(n)).filter((e => t.indexOf(e) < 0));
            for (let t = 0, i = r.length; t < i; t += 1) {
              const i = r[t],
                a = Object.getOwnPropertyDescriptor(n, i);
              void 0 !== a && a.enumerable && (l(e[i]) && l(n[i]) ? n[i].__swiper__ ? e[i] = n[i] : u(e[i], n[i]) : !l(e[i]) && l(n[i]) ? (e[i] = {}, n[i].__swiper__ ? e[i] = n[i] : u(e[i], n[i])) : e[i] = n[i])
            }
          }
        }
        var r;
        return e
      }

      function c(e, t, r) {
        e.style.setProperty(t, r)
      }

      function h(e) {
        let {
          swiper: t,
          targetPosition: r,
          side: n
        } = e;
        const a = (0, i.a)(),
          s = -t.translate;
        let o, l = null;
        const u = t.params.speed;
        t.wrapperEl.style.scrollSnapType = "none", a.cancelAnimationFrame(t.cssModeFrameID);
        const c = r > s ? "next" : "prev",
          h = (e, t) => "next" === c && e >= t || "prev" === c && e <= t,
          p = () => {
            o = (new Date).getTime(), null === l && (l = o);
            const e = Math.max(Math.min((o - l) / u, 1), 0),
              i = .5 - Math.cos(e * Math.PI) / 2;
            let c = s + i * (r - s);
            if (h(c, r) && (c = r), t.wrapperEl.scrollTo({
                [n]: c
              }), h(c, r)) return t.wrapperEl.style.overflow = "hidden", t.wrapperEl.style.scrollSnapType = "", setTimeout((() => {
              t.wrapperEl.style.overflow = "", t.wrapperEl.scrollTo({
                [n]: c
              })
            })), void a.cancelAnimationFrame(t.cssModeFrameID);
            t.cssModeFrameID = a.requestAnimationFrame(p)
          };
        p()
      }

      function p(e, t) {
        return void 0 === t && (t = ""), [...e.children].filter((e => e.matches(t)))
      }

      function d(e) {
        try {
          return void console.warn(e)
        } catch (e) {}
      }

      function f(e, t) {
        void 0 === t && (t = []);
        const r = document.createElement(e);
        return r.classList.add(...Array.isArray(t) ? t : function(e) {
          return void 0 === e && (e = ""), e.trim().split(" ").filter((e => !!e.trim()))
        }(t)), r
      }

      function m(e, t) {
        const r = [];
        for (; e.previousElementSibling;) {
          const i = e.previousElementSibling;
          t ? i.matches(t) && r.push(i) : r.push(i), e = i
        }
        return r
      }

      function v(e, t) {
        const r = [];
        for (; e.nextElementSibling;) {
          const i = e.nextElementSibling;
          t ? i.matches(t) && r.push(i) : r.push(i), e = i
        }
        return r
      }

      function g(e, t) {
        return (0, i.a)().getComputedStyle(e, null).getPropertyValue(t)
      }

      function y(e) {
        let t, r = e;
        if (r) {
          for (t = 0; null !== (r = r.previousSibling);) 1 === r.nodeType && (t += 1);
          return t
        }
      }

      function b(e, t) {
        const r = [];
        let i = e.parentElement;
        for (; i;) t ? i.matches(t) && r.push(i) : r.push(i), i = i.parentElement;
        return r
      }

      function S(e, t) {
        t && e.addEventListener("transitionend", (function r(i) {
          i.target === e && (t.call(e, i), e.removeEventListener("transitionend", r))
        }))
      }

      function x(e, t, r) {
        const n = (0, i.a)();
        return r ? e["width" === t ? "offsetWidth" : "offsetHeight"] + parseFloat(n.getComputedStyle(e, null).getPropertyValue("width" === t ? "margin-right" : "margin-top")) + parseFloat(n.getComputedStyle(e, null).getPropertyValue("width" === t ? "margin-left" : "margin-bottom")) : e.offsetWidth
      }

      function E(e) {
        return (Array.isArray(e) ? e : [e]).filter((e => !!e))
      }
    },
    8111: (e, t, r) => {
      "use strict";
      r.d(t, {
        wx: () => K,
        Ky: () => Z
      });
      var i = r(1664),
        n = r(1068),
        a = r(5848);
      let s, o, l;

      function u() {
        return s || (s = function() {
          const e = (0, n.a)(),
            t = (0, n.g)();
          return {
            smoothScroll: t.documentElement && t.documentElement.style && "scrollBehavior" in t.documentElement.style,
            touch: !!("ontouchstart" in e || e.DocumentTouch && t instanceof e.DocumentTouch)
          }
        }()), s
      }

      function c(e) {
        return void 0 === e && (e = {}), o || (o = function(e) {
          let {
            userAgent: t
          } = void 0 === e ? {} : e;
          const r = u(),
            i = (0, n.a)(),
            a = i.navigator.platform,
            s = t || i.navigator.userAgent,
            o = {
              ios: !1,
              android: !1
            },
            l = i.screen.width,
            c = i.screen.height,
            h = s.match(/(Android);?[\s\/]+([\d.]+)?/);
          let p = s.match(/(iPad).*OS\s([\d_]+)/);
          const d = s.match(/(iPod)(.*OS\s([\d_]+))?/),
            f = !p && s.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
            m = "Win32" === a;
          let v = "MacIntel" === a;
          return !p && v && r.touch && ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"].indexOf(`${l}x${c}`) >= 0 && (p = s.match(/(Version)\/([\d.]+)/), p || (p = [0, 1, "13_0_0"]), v = !1), h && !m && (o.os = "android", o.android = !0), (p || f || d) && (o.os = "ios", o.ios = !0), o
        }(e)), o
      }
      var h = {
        on(e, t, r) {
          const i = this;
          if (!i.eventsListeners || i.destroyed) return i;
          if ("function" != typeof t) return i;
          const n = r ? "unshift" : "push";
          return e.split(" ").forEach((e => {
            i.eventsListeners[e] || (i.eventsListeners[e] = []), i.eventsListeners[e][n](t)
          })), i
        },
        once(e, t, r) {
          const i = this;
          if (!i.eventsListeners || i.destroyed) return i;
          if ("function" != typeof t) return i;

          function n() {
            i.off(e, n), n.__emitterProxy && delete n.__emitterProxy;
            for (var r = arguments.length, a = new Array(r), s = 0; s < r; s++) a[s] = arguments[s];
            t.apply(i, a)
          }
          return n.__emitterProxy = t, i.on(e, n, r)
        },
        onAny(e, t) {
          const r = this;
          if (!r.eventsListeners || r.destroyed) return r;
          if ("function" != typeof e) return r;
          const i = t ? "unshift" : "push";
          return r.eventsAnyListeners.indexOf(e) < 0 && r.eventsAnyListeners[i](e), r
        },
        offAny(e) {
          const t = this;
          if (!t.eventsListeners || t.destroyed) return t;
          if (!t.eventsAnyListeners) return t;
          const r = t.eventsAnyListeners.indexOf(e);
          return r >= 0 && t.eventsAnyListeners.splice(r, 1), t
        },
        off(e, t) {
          const r = this;
          return !r.eventsListeners || r.destroyed ? r : r.eventsListeners ? (e.split(" ").forEach((e => {
            void 0 === t ? r.eventsListeners[e] = [] : r.eventsListeners[e] && r.eventsListeners[e].forEach(((i, n) => {
              (i === t || i.__emitterProxy && i.__emitterProxy === t) && r.eventsListeners[e].splice(n, 1)
            }))
          })), r) : r
        },
        emit() {
          const e = this;
          if (!e.eventsListeners || e.destroyed) return e;
          if (!e.eventsListeners) return e;
          let t, r, i;
          for (var n = arguments.length, a = new Array(n), s = 0; s < n; s++) a[s] = arguments[s];
          return "string" == typeof a[0] || Array.isArray(a[0]) ? (t = a[0], r = a.slice(1, a.length), i = e) : (t = a[0].events, r = a[0].data, i = a[0].context || e), r.unshift(i), (Array.isArray(t) ? t : t.split(" ")).forEach((t => {
            e.eventsAnyListeners && e.eventsAnyListeners.length && e.eventsAnyListeners.forEach((e => {
              e.apply(i, [t, ...r])
            })), e.eventsListeners && e.eventsListeners[t] && e.eventsListeners[t].forEach((e => {
              e.apply(i, r)
            }))
          })), e
        }
      };
      const p = (e, t) => {
          if (!e || e.destroyed || !e.params) return;
          const r = t.closest(e.isElement ? "swiper-slide" : `.${e.params.slideClass}`);
          if (r) {
            let t = r.querySelector(`.${e.params.lazyPreloaderClass}`);
            !t && e.isElement && (r.shadowRoot ? t = r.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`) : requestAnimationFrame((() => {
              r.shadowRoot && (t = r.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`), t && t.remove())
            }))), t && t.remove()
          }
        },
        d = (e, t) => {
          if (!e.slides[t]) return;
          const r = e.slides[t].querySelector('[loading="lazy"]');
          r && r.removeAttribute("loading")
        },
        f = e => {
          if (!e || e.destroyed || !e.params) return;
          let t = e.params.lazyPreloadPrevNext;
          const r = e.slides.length;
          if (!r || !t || t < 0) return;
          t = Math.min(t, r);
          const i = "auto" === e.params.slidesPerView ? e.slidesPerViewDynamic() : Math.ceil(e.params.slidesPerView),
            n = e.activeIndex;
          if (e.params.grid && e.params.grid.rows > 1) {
            const r = n,
              a = [r - t];
            return a.push(...Array.from({
              length: t
            }).map(((e, t) => r + i + t))), void e.slides.forEach(((t, r) => {
              a.includes(t.column) && d(e, r)
            }))
          }
          const a = n + i - 1;
          if (e.params.rewind || e.params.loop)
            for (let i = n - t; i <= a + t; i += 1) {
              const t = (i % r + r) % r;
              (t < n || t > a) && d(e, t)
            } else
              for (let i = Math.max(n - t, 0); i <= Math.min(a + t, r - 1); i += 1) i !== n && (i > a || i < n) && d(e, i)
        };
      var m = {
        updateSize: function() {
          const e = this;
          let t, r;
          const i = e.el;
          t = void 0 !== e.params.width && null !== e.params.width ? e.params.width : i.clientWidth, r = void 0 !== e.params.height && null !== e.params.height ? e.params.height : i.clientHeight, 0 === t && e.isHorizontal() || 0 === r && e.isVertical() || (t = t - parseInt((0, a.o)(i, "padding-left") || 0, 10) - parseInt((0, a.o)(i, "padding-right") || 0, 10), r = r - parseInt((0, a.o)(i, "padding-top") || 0, 10) - parseInt((0, a.o)(i, "padding-bottom") || 0, 10), Number.isNaN(t) && (t = 0), Number.isNaN(r) && (r = 0), Object.assign(e, {
            width: t,
            height: r,
            size: e.isHorizontal() ? t : r
          }))
        },
        updateSlides: function() {
          const e = this;

          function t(t, r) {
            return parseFloat(t.getPropertyValue(e.getDirectionLabel(r)) || 0)
          }
          const r = e.params,
            {
              wrapperEl: i,
              slidesEl: n,
              size: s,
              rtlTranslate: o,
              wrongRTL: l
            } = e,
            u = e.virtual && r.virtual.enabled,
            c = u ? e.virtual.slides.length : e.slides.length,
            h = (0, a.e)(n, `.${e.params.slideClass}, swiper-slide`),
            p = u ? e.virtual.slides.length : h.length;
          let d = [];
          const f = [],
            m = [];
          let v = r.slidesOffsetBefore;
          "function" == typeof v && (v = r.slidesOffsetBefore.call(e));
          let g = r.slidesOffsetAfter;
          "function" == typeof g && (g = r.slidesOffsetAfter.call(e));
          const y = e.snapGrid.length,
            b = e.slidesGrid.length;
          let S = r.spaceBetween,
            x = -v,
            E = 0,
            P = 0;
          if (void 0 === s) return;
          "string" == typeof S && S.indexOf("%") >= 0 ? S = parseFloat(S.replace("%", "")) / 100 * s : "string" == typeof S && (S = parseFloat(S)), e.virtualSize = -S, h.forEach((e => {
            o ? e.style.marginLeft = "" : e.style.marginRight = "", e.style.marginBottom = "", e.style.marginTop = ""
          })), r.centeredSlides && r.cssMode && ((0, a.s)(i, "--swiper-centered-offset-before", ""), (0, a.s)(i, "--swiper-centered-offset-after", ""));
          const w = r.grid && r.grid.rows > 1 && e.grid;
          let C;
          w ? e.grid.initSlides(h) : e.grid && e.grid.unsetSlides();
          const T = "auto" === r.slidesPerView && r.breakpoints && Object.keys(r.breakpoints).filter((e => void 0 !== r.breakpoints[e].slidesPerView)).length > 0;
          for (let i = 0; i < p; i += 1) {
            let n;
            if (C = 0, h[i] && (n = h[i]), w && e.grid.updateSlide(i, n, h), !h[i] || "none" !== (0, a.o)(n, "display")) {
              if ("auto" === r.slidesPerView) {
                T && (h[i].style[e.getDirectionLabel("width")] = "");
                const s = getComputedStyle(n),
                  o = n.style.transform,
                  l = n.style.webkitTransform;
                if (o && (n.style.transform = "none"), l && (n.style.webkitTransform = "none"), r.roundLengths) C = e.isHorizontal() ? (0, a.f)(n, "width", !0) : (0, a.f)(n, "height", !0);
                else {
                  const e = t(s, "width"),
                    r = t(s, "padding-left"),
                    i = t(s, "padding-right"),
                    a = t(s, "margin-left"),
                    o = t(s, "margin-right"),
                    l = s.getPropertyValue("box-sizing");
                  if (l && "border-box" === l) C = e + a + o;
                  else {
                    const {
                      clientWidth: t,
                      offsetWidth: s
                    } = n;
                    C = e + r + i + a + o + (s - t)
                  }
                }
                o && (n.style.transform = o), l && (n.style.webkitTransform = l), r.roundLengths && (C = Math.floor(C))
              } else C = (s - (r.slidesPerView - 1) * S) / r.slidesPerView, r.roundLengths && (C = Math.floor(C)), h[i] && (h[i].style[e.getDirectionLabel("width")] = `${C}px`);
              h[i] && (h[i].swiperSlideSize = C), m.push(C), r.centeredSlides ? (x = x + C / 2 + E / 2 + S, 0 === E && 0 !== i && (x = x - s / 2 - S), 0 === i && (x = x - s / 2 - S), Math.abs(x) < .001 && (x = 0), r.roundLengths && (x = Math.floor(x)), P % r.slidesPerGroup == 0 && d.push(x), f.push(x)) : (r.roundLengths && (x = Math.floor(x)), (P - Math.min(e.params.slidesPerGroupSkip, P)) % e.params.slidesPerGroup == 0 && d.push(x), f.push(x), x = x + C + S), e.virtualSize += C + S, E = C, P += 1
            }
          }
          if (e.virtualSize = Math.max(e.virtualSize, s) + g, o && l && ("slide" === r.effect || "coverflow" === r.effect) && (i.style.width = `${e.virtualSize+S}px`), r.setWrapperSize && (i.style[e.getDirectionLabel("width")] = `${e.virtualSize+S}px`), w && e.grid.updateWrapperSize(C, d), !r.centeredSlides) {
            const t = [];
            for (let i = 0; i < d.length; i += 1) {
              let n = d[i];
              r.roundLengths && (n = Math.floor(n)), d[i] <= e.virtualSize - s && t.push(n)
            }
            d = t, Math.floor(e.virtualSize - s) - Math.floor(d[d.length - 1]) > 1 && d.push(e.virtualSize - s)
          }
          if (u && r.loop) {
            const t = m[0] + S;
            if (r.slidesPerGroup > 1) {
              const i = Math.ceil((e.virtual.slidesBefore + e.virtual.slidesAfter) / r.slidesPerGroup),
                n = t * r.slidesPerGroup;
              for (let e = 0; e < i; e += 1) d.push(d[d.length - 1] + n)
            }
            for (let i = 0; i < e.virtual.slidesBefore + e.virtual.slidesAfter; i += 1) 1 === r.slidesPerGroup && d.push(d[d.length - 1] + t), f.push(f[f.length - 1] + t), e.virtualSize += t
          }
          if (0 === d.length && (d = [0]), 0 !== S) {
            const t = e.isHorizontal() && o ? "marginLeft" : e.getDirectionLabel("marginRight");
            h.filter(((e, t) => !(r.cssMode && !r.loop) || t !== h.length - 1)).forEach((e => {
              e.style[t] = `${S}px`
            }))
          }
          if (r.centeredSlides && r.centeredSlidesBounds) {
            let e = 0;
            m.forEach((t => {
              e += t + (S || 0)
            })), e -= S;
            const t = e - s;
            d = d.map((e => e <= 0 ? -v : e > t ? t + g : e))
          }
          if (r.centerInsufficientSlides) {
            let e = 0;
            if (m.forEach((t => {
                e += t + (S || 0)
              })), e -= S, e < s) {
              const t = (s - e) / 2;
              d.forEach(((e, r) => {
                d[r] = e - t
              })), f.forEach(((e, r) => {
                f[r] = e + t
              }))
            }
          }
          if (Object.assign(e, {
              slides: h,
              snapGrid: d,
              slidesGrid: f,
              slidesSizesGrid: m
            }), r.centeredSlides && r.cssMode && !r.centeredSlidesBounds) {
            (0, a.s)(i, "--swiper-centered-offset-before", -d[0] + "px"), (0, a.s)(i, "--swiper-centered-offset-after", e.size / 2 - m[m.length - 1] / 2 + "px");
            const t = -e.snapGrid[0],
              r = -e.slidesGrid[0];
            e.snapGrid = e.snapGrid.map((e => e + t)), e.slidesGrid = e.slidesGrid.map((e => e + r))
          }
          if (p !== c && e.emit("slidesLengthChange"), d.length !== y && (e.params.watchOverflow && e.checkOverflow(), e.emit("snapGridLengthChange")), f.length !== b && e.emit("slidesGridLengthChange"), r.watchSlidesProgress && e.updateSlidesOffset(), e.emit("slidesUpdated"), !(u || r.cssMode || "slide" !== r.effect && "fade" !== r.effect)) {
            const t = `${r.containerModifierClass}backface-hidden`,
              i = e.el.classList.contains(t);
            p <= r.maxBackfaceHiddenSlides ? i || e.el.classList.add(t) : i && e.el.classList.remove(t)
          }
        },
        updateAutoHeight: function(e) {
          const t = this,
            r = [],
            i = t.virtual && t.params.virtual.enabled;
          let n, a = 0;
          "number" == typeof e ? t.setTransition(e) : !0 === e && t.setTransition(t.params.speed);
          const s = e => i ? t.slides[t.getSlideIndexByData(e)] : t.slides[e];
          if ("auto" !== t.params.slidesPerView && t.params.slidesPerView > 1)
            if (t.params.centeredSlides)(t.visibleSlides || []).forEach((e => {
              r.push(e)
            }));
            else
              for (n = 0; n < Math.ceil(t.params.slidesPerView); n += 1) {
                const e = t.activeIndex + n;
                if (e > t.slides.length && !i) break;
                r.push(s(e))
              } else r.push(s(t.activeIndex));
          for (n = 0; n < r.length; n += 1)
            if (void 0 !== r[n]) {
              const e = r[n].offsetHeight;
              a = e > a ? e : a
            }(a || 0 === a) && (t.wrapperEl.style.height = `${a}px`)
        },
        updateSlidesOffset: function() {
          const e = this,
            t = e.slides,
            r = e.isElement ? e.isHorizontal() ? e.wrapperEl.offsetLeft : e.wrapperEl.offsetTop : 0;
          for (let i = 0; i < t.length; i += 1) t[i].swiperSlideOffset = (e.isHorizontal() ? t[i].offsetLeft : t[i].offsetTop) - r - e.cssOverflowAdjustment()
        },
        updateSlidesProgress: function(e) {
          void 0 === e && (e = this && this.translate || 0);
          const t = this,
            r = t.params,
            {
              slides: i,
              rtlTranslate: n,
              snapGrid: a
            } = t;
          if (0 === i.length) return;
          void 0 === i[0].swiperSlideOffset && t.updateSlidesOffset();
          let s = -e;
          n && (s = e), i.forEach((e => {
            e.classList.remove(r.slideVisibleClass, r.slideFullyVisibleClass)
          })), t.visibleSlidesIndexes = [], t.visibleSlides = [];
          let o = r.spaceBetween;
          "string" == typeof o && o.indexOf("%") >= 0 ? o = parseFloat(o.replace("%", "")) / 100 * t.size : "string" == typeof o && (o = parseFloat(o));
          for (let e = 0; e < i.length; e += 1) {
            const l = i[e];
            let u = l.swiperSlideOffset;
            r.cssMode && r.centeredSlides && (u -= i[0].swiperSlideOffset);
            const c = (s + (r.centeredSlides ? t.minTranslate() : 0) - u) / (l.swiperSlideSize + o),
              h = (s - a[0] + (r.centeredSlides ? t.minTranslate() : 0) - u) / (l.swiperSlideSize + o),
              p = -(s - u),
              d = p + t.slidesSizesGrid[e],
              f = p >= 0 && p <= t.size - t.slidesSizesGrid[e];
            (p >= 0 && p < t.size - 1 || d > 1 && d <= t.size || p <= 0 && d >= t.size) && (t.visibleSlides.push(l), t.visibleSlidesIndexes.push(e), i[e].classList.add(r.slideVisibleClass)), f && i[e].classList.add(r.slideFullyVisibleClass), l.progress = n ? -c : c, l.originalProgress = n ? -h : h
          }
        },
        updateProgress: function(e) {
          const t = this;
          if (void 0 === e) {
            const r = t.rtlTranslate ? -1 : 1;
            e = t && t.translate && t.translate * r || 0
          }
          const r = t.params,
            i = t.maxTranslate() - t.minTranslate();
          let {
            progress: n,
            isBeginning: a,
            isEnd: s,
            progressLoop: o
          } = t;
          const l = a,
            u = s;
          if (0 === i) n = 0, a = !0, s = !0;
          else {
            n = (e - t.minTranslate()) / i;
            const r = Math.abs(e - t.minTranslate()) < 1,
              o = Math.abs(e - t.maxTranslate()) < 1;
            a = r || n <= 0, s = o || n >= 1, r && (n = 0), o && (n = 1)
          }
          if (r.loop) {
            const r = t.getSlideIndexByData(0),
              i = t.getSlideIndexByData(t.slides.length - 1),
              n = t.slidesGrid[r],
              a = t.slidesGrid[i],
              s = t.slidesGrid[t.slidesGrid.length - 1],
              l = Math.abs(e);
            o = l >= n ? (l - n) / s : (l + s - a) / s, o > 1 && (o -= 1)
          }
          Object.assign(t, {
            progress: n,
            progressLoop: o,
            isBeginning: a,
            isEnd: s
          }), (r.watchSlidesProgress || r.centeredSlides && r.autoHeight) && t.updateSlidesProgress(e), a && !l && t.emit("reachBeginning toEdge"), s && !u && t.emit("reachEnd toEdge"), (l && !a || u && !s) && t.emit("fromEdge"), t.emit("progress", n)
        },
        updateSlidesClasses: function() {
          const e = this,
            {
              slides: t,
              params: r,
              slidesEl: i,
              activeIndex: n
            } = e,
            s = e.virtual && r.virtual.enabled,
            o = e.grid && r.grid && r.grid.rows > 1,
            l = e => (0, a.e)(i, `.${r.slideClass}${e}, swiper-slide${e}`)[0];
          let u, c, h;
          if (t.forEach((e => {
              e.classList.remove(r.slideActiveClass, r.slideNextClass, r.slidePrevClass)
            })), s)
            if (r.loop) {
              let t = n - e.virtual.slidesBefore;
              t < 0 && (t = e.virtual.slides.length + t), t >= e.virtual.slides.length && (t -= e.virtual.slides.length), u = l(`[data-swiper-slide-index="${t}"]`)
            } else u = l(`[data-swiper-slide-index="${n}"]`);
          else o ? (u = t.filter((e => e.column === n))[0], h = t.filter((e => e.column === n + 1))[0], c = t.filter((e => e.column === n - 1))[0]) : u = t[n];
          u && (u.classList.add(r.slideActiveClass), o ? (h && h.classList.add(r.slideNextClass), c && c.classList.add(r.slidePrevClass)) : (h = (0, a.p)(u, `.${r.slideClass}, swiper-slide`)[0], r.loop && !h && (h = t[0]), h && h.classList.add(r.slideNextClass), c = (0, a.q)(u, `.${r.slideClass}, swiper-slide`)[0], r.loop && 0 === !c && (c = t[t.length - 1]), c && c.classList.add(r.slidePrevClass))), e.emitSlidesClasses()
        },
        updateActiveIndex: function(e) {
          const t = this,
            r = t.rtlTranslate ? t.translate : -t.translate,
            {
              snapGrid: i,
              params: n,
              activeIndex: a,
              realIndex: s,
              snapIndex: o
            } = t;
          let l, u = e;
          const c = e => {
            let r = e - t.virtual.slidesBefore;
            return r < 0 && (r = t.virtual.slides.length + r), r >= t.virtual.slides.length && (r -= t.virtual.slides.length), r
          };
          if (void 0 === u && (u = function(e) {
              const {
                slidesGrid: t,
                params: r
              } = e, i = e.rtlTranslate ? e.translate : -e.translate;
              let n;
              for (let e = 0; e < t.length; e += 1) void 0 !== t[e + 1] ? i >= t[e] && i < t[e + 1] - (t[e + 1] - t[e]) / 2 ? n = e : i >= t[e] && i < t[e + 1] && (n = e + 1) : i >= t[e] && (n = e);
              return r.normalizeSlideIndex && (n < 0 || void 0 === n) && (n = 0), n
            }(t)), i.indexOf(r) >= 0) l = i.indexOf(r);
          else {
            const e = Math.min(n.slidesPerGroupSkip, u);
            l = e + Math.floor((u - e) / n.slidesPerGroup)
          }
          if (l >= i.length && (l = i.length - 1), u === a && !t.params.loop) return void(l !== o && (t.snapIndex = l, t.emit("snapIndexChange")));
          if (u === a && t.params.loop && t.virtual && t.params.virtual.enabled) return void(t.realIndex = c(u));
          const h = t.grid && n.grid && n.grid.rows > 1;
          let p;
          if (t.virtual && n.virtual.enabled && n.loop) p = c(u);
          else if (h) {
            const e = t.slides.filter((e => e.column === u))[0];
            let r = parseInt(e.getAttribute("data-swiper-slide-index"), 10);
            Number.isNaN(r) && (r = Math.max(t.slides.indexOf(e), 0)), p = Math.floor(r / n.grid.rows)
          } else if (t.slides[u]) {
            const e = t.slides[u].getAttribute("data-swiper-slide-index");
            p = e ? parseInt(e, 10) : u
          } else p = u;
          Object.assign(t, {
            previousSnapIndex: o,
            snapIndex: l,
            previousRealIndex: s,
            realIndex: p,
            previousIndex: a,
            activeIndex: u
          }), t.initialized && f(t), t.emit("activeIndexChange"), t.emit("snapIndexChange"), (t.initialized || t.params.runCallbacksOnInit) && (s !== p && t.emit("realIndexChange"), t.emit("slideChange"))
        },
        updateClickedSlide: function(e, t) {
          const r = this,
            i = r.params;
          let n = e.closest(`.${i.slideClass}, swiper-slide`);
          !n && r.isElement && t && t.length > 1 && t.includes(e) && [...t.slice(t.indexOf(e) + 1, t.length)].forEach((e => {
            !n && e.matches && e.matches(`.${i.slideClass}, swiper-slide`) && (n = e)
          }));
          let a, s = !1;
          if (n)
            for (let e = 0; e < r.slides.length; e += 1)
              if (r.slides[e] === n) {
                s = !0, a = e;
                break
              } if (!n || !s) return r.clickedSlide = void 0, void(r.clickedIndex = void 0);
          r.clickedSlide = n, r.virtual && r.params.virtual.enabled ? r.clickedIndex = parseInt(n.getAttribute("data-swiper-slide-index"), 10) : r.clickedIndex = a, i.slideToClickedSlide && void 0 !== r.clickedIndex && r.clickedIndex !== r.activeIndex && r.slideToClickedSlide()
        }
      };

      function v(e) {
        let {
          swiper: t,
          runCallbacks: r,
          direction: i,
          step: n
        } = e;
        const {
          activeIndex: a,
          previousIndex: s
        } = t;
        let o = i;
        if (o || (o = a > s ? "next" : a < s ? "prev" : "reset"), t.emit(`transition${n}`), r && a !== s) {
          if ("reset" === o) return void t.emit(`slideResetTransition${n}`);
          t.emit(`slideChangeTransition${n}`), "next" === o ? t.emit(`slideNextTransition${n}`) : t.emit(`slidePrevTransition${n}`)
        }
      }
      var g = {
          slideTo: function(e, t, r, i, n) {
            void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === r && (r = !0), "string" == typeof e && (e = parseInt(e, 10));
            const s = this;
            let o = e;
            o < 0 && (o = 0);
            const {
              params: l,
              snapGrid: u,
              slidesGrid: c,
              previousIndex: h,
              activeIndex: p,
              rtlTranslate: d,
              wrapperEl: f,
              enabled: m
            } = s;
            if (s.animating && l.preventInteractionOnTransition || !m && !i && !n || s.destroyed) return !1;
            const v = Math.min(s.params.slidesPerGroupSkip, o);
            let g = v + Math.floor((o - v) / s.params.slidesPerGroup);
            g >= u.length && (g = u.length - 1);
            const y = -u[g];
            if (l.normalizeSlideIndex)
              for (let e = 0; e < c.length; e += 1) {
                const t = -Math.floor(100 * y),
                  r = Math.floor(100 * c[e]),
                  i = Math.floor(100 * c[e + 1]);
                void 0 !== c[e + 1] ? t >= r && t < i - (i - r) / 2 ? o = e : t >= r && t < i && (o = e + 1) : t >= r && (o = e)
              }
            if (s.initialized && o !== p) {
              if (!s.allowSlideNext && (d ? y > s.translate && y > s.minTranslate() : y < s.translate && y < s.minTranslate())) return !1;
              if (!s.allowSlidePrev && y > s.translate && y > s.maxTranslate() && (p || 0) !== o) return !1
            }
            let b;
            if (o !== (h || 0) && r && s.emit("beforeSlideChangeStart"), s.updateProgress(y), b = o > p ? "next" : o < p ? "prev" : "reset", d && -y === s.translate || !d && y === s.translate) return s.updateActiveIndex(o), l.autoHeight && s.updateAutoHeight(), s.updateSlidesClasses(), "slide" !== l.effect && s.setTranslate(y), "reset" !== b && (s.transitionStart(r, b), s.transitionEnd(r, b)), !1;
            if (l.cssMode) {
              const e = s.isHorizontal(),
                r = d ? y : -y;
              if (0 === t) {
                const t = s.virtual && s.params.virtual.enabled;
                t && (s.wrapperEl.style.scrollSnapType = "none", s._immediateVirtual = !0), t && !s._cssModeVirtualInitialSet && s.params.initialSlide > 0 ? (s._cssModeVirtualInitialSet = !0, requestAnimationFrame((() => {
                  f[e ? "scrollLeft" : "scrollTop"] = r
                }))) : f[e ? "scrollLeft" : "scrollTop"] = r, t && requestAnimationFrame((() => {
                  s.wrapperEl.style.scrollSnapType = "", s._immediateVirtual = !1
                }))
              } else {
                if (!s.support.smoothScroll) return (0, a.r)({
                  swiper: s,
                  targetPosition: r,
                  side: e ? "left" : "top"
                }), !0;
                f.scrollTo({
                  [e ? "left" : "top"]: r,
                  behavior: "smooth"
                })
              }
              return !0
            }
            return s.setTransition(t), s.setTranslate(y), s.updateActiveIndex(o), s.updateSlidesClasses(), s.emit("beforeTransitionStart", t, i), s.transitionStart(r, b), 0 === t ? s.transitionEnd(r, b) : s.animating || (s.animating = !0, s.onSlideToWrapperTransitionEnd || (s.onSlideToWrapperTransitionEnd = function(e) {
              s && !s.destroyed && e.target === this && (s.wrapperEl.removeEventListener("transitionend", s.onSlideToWrapperTransitionEnd), s.onSlideToWrapperTransitionEnd = null, delete s.onSlideToWrapperTransitionEnd, s.transitionEnd(r, b))
            }), s.wrapperEl.addEventListener("transitionend", s.onSlideToWrapperTransitionEnd)), !0
          },
          slideToLoop: function(e, t, r, i) {
            void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === r && (r = !0), "string" == typeof e && (e = parseInt(e, 10));
            const n = this;
            if (n.destroyed) return;
            const a = n.grid && n.params.grid && n.params.grid.rows > 1;
            let s = e;
            if (n.params.loop)
              if (n.virtual && n.params.virtual.enabled) s += n.virtual.slidesBefore;
              else {
                let e;
                if (a) {
                  const t = s * n.params.grid.rows;
                  e = n.slides.filter((e => 1 * e.getAttribute("data-swiper-slide-index") === t))[0].column
                } else e = n.getSlideIndexByData(s);
                const t = a ? Math.ceil(n.slides.length / n.params.grid.rows) : n.slides.length,
                  {
                    centeredSlides: r
                  } = n.params;
                let i = n.params.slidesPerView;
                "auto" === i ? i = n.slidesPerViewDynamic() : (i = Math.ceil(parseFloat(n.params.slidesPerView, 10)), r && i % 2 == 0 && (i += 1));
                let o = t - e < i;
                if (r && (o = o || e < Math.ceil(i / 2)), o) {
                  const i = r ? e < n.activeIndex ? "prev" : "next" : e - n.activeIndex - 1 < n.params.slidesPerView ? "next" : "prev";
                  n.loopFix({
                    direction: i,
                    slideTo: !0,
                    activeSlideIndex: "next" === i ? e + 1 : e - t + 1,
                    slideRealIndex: "next" === i ? n.realIndex : void 0
                  })
                }
                if (a) {
                  const e = s * n.params.grid.rows;
                  s = n.slides.filter((t => 1 * t.getAttribute("data-swiper-slide-index") === e))[0].column
                } else s = n.getSlideIndexByData(s)
              } return requestAnimationFrame((() => {
              n.slideTo(s, t, r, i)
            })), n
          },
          slideNext: function(e, t, r) {
            void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
            const i = this,
              {
                enabled: n,
                params: a,
                animating: s
              } = i;
            if (!n || i.destroyed) return i;
            let o = a.slidesPerGroup;
            "auto" === a.slidesPerView && 1 === a.slidesPerGroup && a.slidesPerGroupAuto && (o = Math.max(i.slidesPerViewDynamic("current", !0), 1));
            const l = i.activeIndex < a.slidesPerGroupSkip ? 1 : o,
              u = i.virtual && a.virtual.enabled;
            if (a.loop) {
              if (s && !u && a.loopPreventsSliding) return !1;
              if (i.loopFix({
                  direction: "next"
                }), i._clientLeft = i.wrapperEl.clientLeft, i.activeIndex === i.slides.length - 1 && a.cssMode) return requestAnimationFrame((() => {
                i.slideTo(i.activeIndex + l, e, t, r)
              })), !0
            }
            return a.rewind && i.isEnd ? i.slideTo(0, e, t, r) : i.slideTo(i.activeIndex + l, e, t, r)
          },
          slidePrev: function(e, t, r) {
            void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
            const i = this,
              {
                params: n,
                snapGrid: a,
                slidesGrid: s,
                rtlTranslate: o,
                enabled: l,
                animating: u
              } = i;
            if (!l || i.destroyed) return i;
            const c = i.virtual && n.virtual.enabled;
            if (n.loop) {
              if (u && !c && n.loopPreventsSliding) return !1;
              i.loopFix({
                direction: "prev"
              }), i._clientLeft = i.wrapperEl.clientLeft
            }

            function h(e) {
              return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e)
            }
            const p = h(o ? i.translate : -i.translate),
              d = a.map((e => h(e)));
            let f = a[d.indexOf(p) - 1];
            if (void 0 === f && n.cssMode) {
              let e;
              a.forEach(((t, r) => {
                p >= t && (e = r)
              })), void 0 !== e && (f = a[e > 0 ? e - 1 : e])
            }
            let m = 0;
            if (void 0 !== f && (m = s.indexOf(f), m < 0 && (m = i.activeIndex - 1), "auto" === n.slidesPerView && 1 === n.slidesPerGroup && n.slidesPerGroupAuto && (m = m - i.slidesPerViewDynamic("previous", !0) + 1, m = Math.max(m, 0))), n.rewind && i.isBeginning) {
              const n = i.params.virtual && i.params.virtual.enabled && i.virtual ? i.virtual.slides.length - 1 : i.slides.length - 1;
              return i.slideTo(n, e, t, r)
            }
            return n.loop && 0 === i.activeIndex && n.cssMode ? (requestAnimationFrame((() => {
              i.slideTo(m, e, t, r)
            })), !0) : i.slideTo(m, e, t, r)
          },
          slideReset: function(e, t, r) {
            void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
            const i = this;
            if (!i.destroyed) return i.slideTo(i.activeIndex, e, t, r)
          },
          slideToClosest: function(e, t, r, i) {
            void 0 === e && (e = this.params.speed), void 0 === t && (t = !0), void 0 === i && (i = .5);
            const n = this;
            if (n.destroyed) return;
            let a = n.activeIndex;
            const s = Math.min(n.params.slidesPerGroupSkip, a),
              o = s + Math.floor((a - s) / n.params.slidesPerGroup),
              l = n.rtlTranslate ? n.translate : -n.translate;
            if (l >= n.snapGrid[o]) {
              const e = n.snapGrid[o];
              l - e > (n.snapGrid[o + 1] - e) * i && (a += n.params.slidesPerGroup)
            } else {
              const e = n.snapGrid[o - 1];
              l - e <= (n.snapGrid[o] - e) * i && (a -= n.params.slidesPerGroup)
            }
            return a = Math.max(a, 0), a = Math.min(a, n.slidesGrid.length - 1), n.slideTo(a, e, t, r)
          },
          slideToClickedSlide: function() {
            const e = this;
            if (e.destroyed) return;
            const {
              params: t,
              slidesEl: r
            } = e, i = "auto" === t.slidesPerView ? e.slidesPerViewDynamic() : t.slidesPerView;
            let n, s = e.clickedIndex;
            const o = e.isElement ? "swiper-slide" : `.${t.slideClass}`;
            if (t.loop) {
              if (e.animating) return;
              n = parseInt(e.clickedSlide.getAttribute("data-swiper-slide-index"), 10), t.centeredSlides ? s < e.loopedSlides - i / 2 || s > e.slides.length - e.loopedSlides + i / 2 ? (e.loopFix(), s = e.getSlideIndex((0, a.e)(r, `${o}[data-swiper-slide-index="${n}"]`)[0]), (0, a.n)((() => {
                e.slideTo(s)
              }))) : e.slideTo(s) : s > e.slides.length - i ? (e.loopFix(), s = e.getSlideIndex((0, a.e)(r, `${o}[data-swiper-slide-index="${n}"]`)[0]), (0, a.n)((() => {
                e.slideTo(s)
              }))) : e.slideTo(s)
            } else e.slideTo(s)
          }
        },
        y = {
          loopCreate: function(e) {
            const t = this,
              {
                params: r,
                slidesEl: i
              } = t;
            if (!r.loop || t.virtual && t.params.virtual.enabled) return;
            const n = () => {
                (0, a.e)(i, `.${r.slideClass}, swiper-slide`).forEach(((e, t) => {
                  e.setAttribute("data-swiper-slide-index", t)
                }))
              },
              s = t.grid && r.grid && r.grid.rows > 1,
              o = r.slidesPerGroup * (s ? r.grid.rows : 1),
              l = t.slides.length % o != 0,
              u = s && t.slides.length % r.grid.rows != 0,
              c = e => {
                for (let i = 0; i < e; i += 1) {
                  const e = t.isElement ? (0, a.c)("swiper-slide", [r.slideBlankClass]) : (0, a.c)("div", [r.slideClass, r.slideBlankClass]);
                  t.slidesEl.append(e)
                }
              };
            l ? (r.loopAddBlankSlides ? (c(o - t.slides.length % o), t.recalcSlides(), t.updateSlides()) : (0, a.t)("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)"), n()) : u ? (r.loopAddBlankSlides ? (c(r.grid.rows - t.slides.length % r.grid.rows), t.recalcSlides(), t.updateSlides()) : (0, a.t)("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)"), n()) : n(), t.loopFix({
              slideRealIndex: e,
              direction: r.centeredSlides ? void 0 : "next"
            })
          },
          loopFix: function(e) {
            let {
              slideRealIndex: t,
              slideTo: r = !0,
              direction: i,
              setTranslate: n,
              activeSlideIndex: s,
              byController: o,
              byMousewheel: l
            } = void 0 === e ? {} : e;
            const u = this;
            if (!u.params.loop) return;
            u.emit("beforeLoopFix");
            const {
              slides: c,
              allowSlidePrev: h,
              allowSlideNext: p,
              slidesEl: d,
              params: f
            } = u, {
              centeredSlides: m
            } = f;
            if (u.allowSlidePrev = !0, u.allowSlideNext = !0, u.virtual && f.virtual.enabled) return r && (f.centeredSlides || 0 !== u.snapIndex ? f.centeredSlides && u.snapIndex < f.slidesPerView ? u.slideTo(u.virtual.slides.length + u.snapIndex, 0, !1, !0) : u.snapIndex === u.snapGrid.length - 1 && u.slideTo(u.virtual.slidesBefore, 0, !1, !0) : u.slideTo(u.virtual.slides.length, 0, !1, !0)), u.allowSlidePrev = h, u.allowSlideNext = p, void u.emit("loopFix");
            let v = f.slidesPerView;
            "auto" === v ? v = u.slidesPerViewDynamic() : (v = Math.ceil(parseFloat(f.slidesPerView, 10)), m && v % 2 == 0 && (v += 1));
            const g = f.slidesPerGroupAuto ? v : f.slidesPerGroup;
            let y = g;
            y % g != 0 && (y += g - y % g), y += f.loopAdditionalSlides, u.loopedSlides = y;
            const b = u.grid && f.grid && f.grid.rows > 1;
            c.length < v + y ? (0, a.t)("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled and not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters") : b && "row" === f.grid.fill && (0, a.t)("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");
            const S = [],
              x = [];
            let E = u.activeIndex;
            void 0 === s ? s = u.getSlideIndex(c.filter((e => e.classList.contains(f.slideActiveClass)))[0]) : E = s;
            const P = "next" === i || !i,
              w = "prev" === i || !i;
            let C = 0,
              T = 0;
            const M = b ? Math.ceil(c.length / f.grid.rows) : c.length,
              _ = (b ? c[s].column : s) + (m && void 0 === n ? -v / 2 + .5 : 0);
            if (_ < y) {
              C = Math.max(y - _, g);
              for (let e = 0; e < y - _; e += 1) {
                const t = e - Math.floor(e / M) * M;
                if (b) {
                  const e = M - t - 1;
                  for (let t = c.length - 1; t >= 0; t -= 1) c[t].column === e && S.push(t)
                } else S.push(M - t - 1)
              }
            } else if (_ + v > M - y) {
              T = Math.max(_ - (M - 2 * y), g);
              for (let e = 0; e < T; e += 1) {
                const t = e - Math.floor(e / M) * M;
                b ? c.forEach(((e, r) => {
                  e.column === t && x.push(r)
                })) : x.push(t)
              }
            }
            if (u.__preventObserver__ = !0, requestAnimationFrame((() => {
                u.__preventObserver__ = !1
              })), w && S.forEach((e => {
                c[e].swiperLoopMoveDOM = !0, d.prepend(c[e]), c[e].swiperLoopMoveDOM = !1
              })), P && x.forEach((e => {
                c[e].swiperLoopMoveDOM = !0, d.append(c[e]), c[e].swiperLoopMoveDOM = !1
              })), u.recalcSlides(), "auto" === f.slidesPerView ? u.updateSlides() : b && (S.length > 0 && w || x.length > 0 && P) && u.slides.forEach(((e, t) => {
                u.grid.updateSlide(t, e, u.slides)
              })), f.watchSlidesProgress && u.updateSlidesOffset(), r)
              if (S.length > 0 && w) {
                if (void 0 === t) {
                  const e = u.slidesGrid[E],
                    t = u.slidesGrid[E + C] - e;
                  l ? u.setTranslate(u.translate - t) : (u.slideTo(E + C, 0, !1, !0), n && (u.touchEventsData.startTranslate = u.touchEventsData.startTranslate - t, u.touchEventsData.currentTranslate = u.touchEventsData.currentTranslate - t))
                } else if (n) {
                  const e = b ? S.length / f.grid.rows : S.length;
                  u.slideTo(u.activeIndex + e, 0, !1, !0), u.touchEventsData.currentTranslate = u.translate
                }
              } else if (x.length > 0 && P)
              if (void 0 === t) {
                const e = u.slidesGrid[E],
                  t = u.slidesGrid[E - T] - e;
                l ? u.setTranslate(u.translate - t) : (u.slideTo(E - T, 0, !1, !0), n && (u.touchEventsData.startTranslate = u.touchEventsData.startTranslate - t, u.touchEventsData.currentTranslate = u.touchEventsData.currentTranslate - t))
              } else {
                const e = b ? x.length / f.grid.rows : x.length;
                u.slideTo(u.activeIndex - e, 0, !1, !0)
              } if (u.allowSlidePrev = h, u.allowSlideNext = p, u.controller && u.controller.control && !o) {
              const e = {
                slideRealIndex: t,
                direction: i,
                setTranslate: n,
                activeSlideIndex: s,
                byController: !0
              };
              Array.isArray(u.controller.control) ? u.controller.control.forEach((t => {
                !t.destroyed && t.params.loop && t.loopFix({
                  ...e,
                  slideTo: t.params.slidesPerView === f.slidesPerView && r
                })
              })) : u.controller.control instanceof u.constructor && u.controller.control.params.loop && u.controller.control.loopFix({
                ...e,
                slideTo: u.controller.control.params.slidesPerView === f.slidesPerView && r
              })
            }
            u.emit("loopFix")
          },
          loopDestroy: function() {
            const e = this,
              {
                params: t,
                slidesEl: r
              } = e;
            if (!t.loop || e.virtual && e.params.virtual.enabled) return;
            e.recalcSlides();
            const i = [];
            e.slides.forEach((e => {
              const t = void 0 === e.swiperSlideIndex ? 1 * e.getAttribute("data-swiper-slide-index") : e.swiperSlideIndex;
              i[t] = e
            })), e.slides.forEach((e => {
              e.removeAttribute("data-swiper-slide-index")
            })), i.forEach((e => {
              r.append(e)
            })), e.recalcSlides(), e.slideTo(e.realIndex, 0)
          }
        };

      function b(e, t, r) {
        const i = (0, n.a)(),
          {
            params: a
          } = e,
          s = a.edgeSwipeDetection,
          o = a.edgeSwipeThreshold;
        return !s || !(r <= o || r >= i.innerWidth - o) || "prevent" === s && (t.preventDefault(), !0)
      }

      function S(e) {
        const t = this,
          r = (0, n.g)();
        let i = e;
        i.originalEvent && (i = i.originalEvent);
        const s = t.touchEventsData;
        if ("pointerdown" === i.type) {
          if (null !== s.pointerId && s.pointerId !== i.pointerId) return;
          s.pointerId = i.pointerId
        } else "touchstart" === i.type && 1 === i.targetTouches.length && (s.touchId = i.targetTouches[0].identifier);
        if ("touchstart" === i.type) return void b(t, i, i.targetTouches[0].pageX);
        const {
          params: o,
          touches: l,
          enabled: u
        } = t;
        if (!u) return;
        if (!o.simulateTouch && "mouse" === i.pointerType) return;
        if (t.animating && o.preventInteractionOnTransition) return;
        !t.animating && o.cssMode && o.loop && t.loopFix();
        let c = i.target;
        if ("wrapper" === o.touchEventsTarget && !t.wrapperEl.contains(c)) return;
        if ("which" in i && 3 === i.which) return;
        if ("button" in i && i.button > 0) return;
        if (s.isTouched && s.isMoved) return;
        const h = !!o.noSwipingClass && "" !== o.noSwipingClass,
          p = i.composedPath ? i.composedPath() : i.path;
        h && i.target && i.target.shadowRoot && p && (c = p[0]);
        const d = o.noSwipingSelector ? o.noSwipingSelector : `.${o.noSwipingClass}`,
          f = !(!i.target || !i.target.shadowRoot);
        if (o.noSwiping && (f ? function(e, t) {
            return void 0 === t && (t = this),
              function t(r) {
                if (!r || r === (0, n.g)() || r === (0, n.a)()) return null;
                r.assignedSlot && (r = r.assignedSlot);
                const i = r.closest(e);
                return i || r.getRootNode ? i || t(r.getRootNode().host) : null
              }(t)
          }(d, c) : c.closest(d))) return void(t.allowClick = !0);
        if (o.swipeHandler && !c.closest(o.swipeHandler)) return;
        l.currentX = i.pageX, l.currentY = i.pageY;
        const m = l.currentX,
          v = l.currentY;
        if (!b(t, i, m)) return;
        Object.assign(s, {
          isTouched: !0,
          isMoved: !1,
          allowTouchCallbacks: !0,
          isScrolling: void 0,
          startMoving: void 0
        }), l.startX = m, l.startY = v, s.touchStartTime = (0, a.d)(), t.allowClick = !0, t.updateSize(), t.swipeDirection = void 0, o.threshold > 0 && (s.allowThresholdMove = !1);
        let g = !0;
        c.matches(s.focusableElements) && (g = !1, "SELECT" === c.nodeName && (s.isTouched = !1)), r.activeElement && r.activeElement.matches(s.focusableElements) && r.activeElement !== c && r.activeElement.blur();
        const y = g && t.allowTouchMove && o.touchStartPreventDefault;
        !o.touchStartForcePreventDefault && !y || c.isContentEditable || i.preventDefault(), o.freeMode && o.freeMode.enabled && t.freeMode && t.animating && !o.cssMode && t.freeMode.onTouchStart(), t.emit("touchStart", i)
      }

      function x(e) {
        const t = (0, n.g)(),
          r = this,
          i = r.touchEventsData,
          {
            params: s,
            touches: o,
            rtlTranslate: l,
            enabled: u
          } = r;
        if (!u) return;
        if (!s.simulateTouch && "mouse" === e.pointerType) return;
        let c, h = e;
        if (h.originalEvent && (h = h.originalEvent), "pointermove" === h.type) {
          if (null !== i.touchId) return;
          if (h.pointerId !== i.pointerId) return
        }
        if ("touchmove" === h.type) {
          if (c = [...h.changedTouches].filter((e => e.identifier === i.touchId))[0], !c || c.identifier !== i.touchId) return
        } else c = h;
        if (!i.isTouched) return void(i.startMoving && i.isScrolling && r.emit("touchMoveOpposite", h));
        const p = c.pageX,
          d = c.pageY;
        if (h.preventedByNestedSwiper) return o.startX = p, void(o.startY = d);
        if (!r.allowTouchMove) return h.target.matches(i.focusableElements) || (r.allowClick = !1), void(i.isTouched && (Object.assign(o, {
          startX: p,
          startY: d,
          currentX: p,
          currentY: d
        }), i.touchStartTime = (0, a.d)()));
        if (s.touchReleaseOnEdges && !s.loop)
          if (r.isVertical()) {
            if (d < o.startY && r.translate <= r.maxTranslate() || d > o.startY && r.translate >= r.minTranslate()) return i.isTouched = !1, void(i.isMoved = !1)
          } else if (p < o.startX && r.translate <= r.maxTranslate() || p > o.startX && r.translate >= r.minTranslate()) return;
        if (t.activeElement && h.target === t.activeElement && h.target.matches(i.focusableElements)) return i.isMoved = !0, void(r.allowClick = !1);
        i.allowTouchCallbacks && r.emit("touchMove", h), o.previousX = o.currentX, o.previousY = o.currentY, o.currentX = p, o.currentY = d;
        const f = o.currentX - o.startX,
          m = o.currentY - o.startY;
        if (r.params.threshold && Math.sqrt(f ** 2 + m ** 2) < r.params.threshold) return;
        if (void 0 === i.isScrolling) {
          let e;
          r.isHorizontal() && o.currentY === o.startY || r.isVertical() && o.currentX === o.startX ? i.isScrolling = !1 : f * f + m * m >= 25 && (e = 180 * Math.atan2(Math.abs(m), Math.abs(f)) / Math.PI, i.isScrolling = r.isHorizontal() ? e > s.touchAngle : 90 - e > s.touchAngle)
        }
        if (i.isScrolling && r.emit("touchMoveOpposite", h), void 0 === i.startMoving && (o.currentX === o.startX && o.currentY === o.startY || (i.startMoving = !0)), i.isScrolling) return void(i.isTouched = !1);
        if (!i.startMoving) return;
        r.allowClick = !1, !s.cssMode && h.cancelable && h.preventDefault(), s.touchMoveStopPropagation && !s.nested && h.stopPropagation();
        let v = r.isHorizontal() ? f : m,
          g = r.isHorizontal() ? o.currentX - o.previousX : o.currentY - o.previousY;
        s.oneWayMovement && (v = Math.abs(v) * (l ? 1 : -1), g = Math.abs(g) * (l ? 1 : -1)), o.diff = v, v *= s.touchRatio, l && (v = -v, g = -g);
        const y = r.touchesDirection;
        r.swipeDirection = v > 0 ? "prev" : "next", r.touchesDirection = g > 0 ? "prev" : "next";
        const b = r.params.loop && !s.cssMode,
          S = "next" === r.touchesDirection && r.allowSlideNext || "prev" === r.touchesDirection && r.allowSlidePrev;
        if (!i.isMoved) {
          if (b && S && r.loopFix({
              direction: r.swipeDirection
            }), i.startTranslate = r.getTranslate(), r.setTransition(0), r.animating) {
            const e = new window.CustomEvent("transitionend", {
              bubbles: !0,
              cancelable: !0
            });
            r.wrapperEl.dispatchEvent(e)
          }
          i.allowMomentumBounce = !1, !s.grabCursor || !0 !== r.allowSlideNext && !0 !== r.allowSlidePrev || r.setGrabCursor(!0), r.emit("sliderFirstMove", h)
        }
        if ((new Date).getTime(), i.isMoved && i.allowThresholdMove && y !== r.touchesDirection && b && S && Math.abs(v) >= 1) return Object.assign(o, {
          startX: p,
          startY: d,
          currentX: p,
          currentY: d,
          startTranslate: i.currentTranslate
        }), i.loopSwapReset = !0, void(i.startTranslate = i.currentTranslate);
        r.emit("sliderMove", h), i.isMoved = !0, i.currentTranslate = v + i.startTranslate;
        let x = !0,
          E = s.resistanceRatio;
        if (s.touchReleaseOnEdges && (E = 0), v > 0 ? (b && S && i.allowThresholdMove && i.currentTranslate > (s.centeredSlides ? r.minTranslate() - r.slidesSizesGrid[r.activeIndex + 1] : r.minTranslate()) && r.loopFix({
            direction: "prev",
            setTranslate: !0,
            activeSlideIndex: 0
          }), i.currentTranslate > r.minTranslate() && (x = !1, s.resistance && (i.currentTranslate = r.minTranslate() - 1 + (-r.minTranslate() + i.startTranslate + v) ** E))) : v < 0 && (b && S && i.allowThresholdMove && i.currentTranslate < (s.centeredSlides ? r.maxTranslate() + r.slidesSizesGrid[r.slidesSizesGrid.length - 1] : r.maxTranslate()) && r.loopFix({
            direction: "next",
            setTranslate: !0,
            activeSlideIndex: r.slides.length - ("auto" === s.slidesPerView ? r.slidesPerViewDynamic() : Math.ceil(parseFloat(s.slidesPerView, 10)))
          }), i.currentTranslate < r.maxTranslate() && (x = !1, s.resistance && (i.currentTranslate = r.maxTranslate() + 1 - (r.maxTranslate() - i.startTranslate - v) ** E))), x && (h.preventedByNestedSwiper = !0), !r.allowSlideNext && "next" === r.swipeDirection && i.currentTranslate < i.startTranslate && (i.currentTranslate = i.startTranslate), !r.allowSlidePrev && "prev" === r.swipeDirection && i.currentTranslate > i.startTranslate && (i.currentTranslate = i.startTranslate), r.allowSlidePrev || r.allowSlideNext || (i.currentTranslate = i.startTranslate), s.threshold > 0) {
          if (!(Math.abs(v) > s.threshold || i.allowThresholdMove)) return void(i.currentTranslate = i.startTranslate);
          if (!i.allowThresholdMove) return i.allowThresholdMove = !0, o.startX = o.currentX, o.startY = o.currentY, i.currentTranslate = i.startTranslate, void(o.diff = r.isHorizontal() ? o.currentX - o.startX : o.currentY - o.startY)
        }
        s.followFinger && !s.cssMode && ((s.freeMode && s.freeMode.enabled && r.freeMode || s.watchSlidesProgress) && (r.updateActiveIndex(), r.updateSlidesClasses()), s.freeMode && s.freeMode.enabled && r.freeMode && r.freeMode.onTouchMove(), r.updateProgress(i.currentTranslate), r.setTranslate(i.currentTranslate))
      }

      function E(e) {
        const t = this,
          r = t.touchEventsData;
        let i, n = e;
        if (n.originalEvent && (n = n.originalEvent), "touchend" === n.type || "touchcancel" === n.type) {
          if (i = [...n.changedTouches].filter((e => e.identifier === r.touchId))[0], !i || i.identifier !== r.touchId) return
        } else {
          if (null !== r.touchId) return;
          if (n.pointerId !== r.pointerId) return;
          i = n
        }
        if (["pointercancel", "pointerout", "pointerleave", "contextmenu"].includes(n.type) && (!["pointercancel", "contextmenu"].includes(n.type) || !t.browser.isSafari && !t.browser.isWebView)) return;
        r.pointerId = null, r.touchId = null;
        const {
          params: s,
          touches: o,
          rtlTranslate: l,
          slidesGrid: u,
          enabled: c
        } = t;
        if (!c) return;
        if (!s.simulateTouch && "mouse" === n.pointerType) return;
        if (r.allowTouchCallbacks && t.emit("touchEnd", n), r.allowTouchCallbacks = !1, !r.isTouched) return r.isMoved && s.grabCursor && t.setGrabCursor(!1), r.isMoved = !1, void(r.startMoving = !1);
        s.grabCursor && r.isMoved && r.isTouched && (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) && t.setGrabCursor(!1);
        const h = (0, a.d)(),
          p = h - r.touchStartTime;
        if (t.allowClick) {
          const e = n.path || n.composedPath && n.composedPath();
          t.updateClickedSlide(e && e[0] || n.target, e), t.emit("tap click", n), p < 300 && h - r.lastClickTime < 300 && t.emit("doubleTap doubleClick", n)
        }
        if (r.lastClickTime = (0, a.d)(), (0, a.n)((() => {
            t.destroyed || (t.allowClick = !0)
          })), !r.isTouched || !r.isMoved || !t.swipeDirection || 0 === o.diff && !r.loopSwapReset || r.currentTranslate === r.startTranslate && !r.loopSwapReset) return r.isTouched = !1, r.isMoved = !1, void(r.startMoving = !1);
        let d;
        if (r.isTouched = !1, r.isMoved = !1, r.startMoving = !1, d = s.followFinger ? l ? t.translate : -t.translate : -r.currentTranslate, s.cssMode) return;
        if (s.freeMode && s.freeMode.enabled) return void t.freeMode.onTouchEnd({
          currentPos: d
        });
        const f = d >= -t.maxTranslate() && !t.params.loop;
        let m = 0,
          v = t.slidesSizesGrid[0];
        for (let e = 0; e < u.length; e += e < s.slidesPerGroupSkip ? 1 : s.slidesPerGroup) {
          const t = e < s.slidesPerGroupSkip - 1 ? 1 : s.slidesPerGroup;
          void 0 !== u[e + t] ? (f || d >= u[e] && d < u[e + t]) && (m = e, v = u[e + t] - u[e]) : (f || d >= u[e]) && (m = e, v = u[u.length - 1] - u[u.length - 2])
        }
        let g = null,
          y = null;
        s.rewind && (t.isBeginning ? y = s.virtual && s.virtual.enabled && t.virtual ? t.virtual.slides.length - 1 : t.slides.length - 1 : t.isEnd && (g = 0));
        const b = (d - u[m]) / v,
          S = m < s.slidesPerGroupSkip - 1 ? 1 : s.slidesPerGroup;
        if (p > s.longSwipesMs) {
          if (!s.longSwipes) return void t.slideTo(t.activeIndex);
          "next" === t.swipeDirection && (b >= s.longSwipesRatio ? t.slideTo(s.rewind && t.isEnd ? g : m + S) : t.slideTo(m)), "prev" === t.swipeDirection && (b > 1 - s.longSwipesRatio ? t.slideTo(m + S) : null !== y && b < 0 && Math.abs(b) > s.longSwipesRatio ? t.slideTo(y) : t.slideTo(m))
        } else {
          if (!s.shortSwipes) return void t.slideTo(t.activeIndex);
          !t.navigation || n.target !== t.navigation.nextEl && n.target !== t.navigation.prevEl ? ("next" === t.swipeDirection && t.slideTo(null !== g ? g : m + S), "prev" === t.swipeDirection && t.slideTo(null !== y ? y : m)) : n.target === t.navigation.nextEl ? t.slideTo(m + S) : t.slideTo(m)
        }
      }

      function P() {
        const e = this,
          {
            params: t,
            el: r
          } = e;
        if (r && 0 === r.offsetWidth) return;
        t.breakpoints && e.setBreakpoint();
        const {
          allowSlideNext: i,
          allowSlidePrev: n,
          snapGrid: a
        } = e, s = e.virtual && e.params.virtual.enabled;
        e.allowSlideNext = !0, e.allowSlidePrev = !0, e.updateSize(), e.updateSlides(), e.updateSlidesClasses();
        const o = s && t.loop;
        !("auto" === t.slidesPerView || t.slidesPerView > 1) || !e.isEnd || e.isBeginning || e.params.centeredSlides || o ? e.params.loop && !s ? e.slideToLoop(e.realIndex, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0) : e.slideTo(e.slides.length - 1, 0, !1, !0), e.autoplay && e.autoplay.running && e.autoplay.paused && (clearTimeout(e.autoplay.resizeTimeout), e.autoplay.resizeTimeout = setTimeout((() => {
          e.autoplay && e.autoplay.running && e.autoplay.paused && e.autoplay.resume()
        }), 500)), e.allowSlidePrev = n, e.allowSlideNext = i, e.params.watchOverflow && a !== e.snapGrid && e.checkOverflow()
      }

      function w(e) {
        const t = this;
        t.enabled && (t.allowClick || (t.params.preventClicks && e.preventDefault(), t.params.preventClicksPropagation && t.animating && (e.stopPropagation(), e.stopImmediatePropagation())))
      }

      function C() {
        const e = this,
          {
            wrapperEl: t,
            rtlTranslate: r,
            enabled: i
          } = e;
        if (!i) return;
        let n;
        e.previousTranslate = e.translate, e.isHorizontal() ? e.translate = -t.scrollLeft : e.translate = -t.scrollTop, 0 === e.translate && (e.translate = 0), e.updateActiveIndex(), e.updateSlidesClasses();
        const a = e.maxTranslate() - e.minTranslate();
        n = 0 === a ? 0 : (e.translate - e.minTranslate()) / a, n !== e.progress && e.updateProgress(r ? -e.translate : e.translate), e.emit("setTranslate", e.translate, !1)
      }

      function T(e) {
        const t = this;
        p(t, e.target), t.params.cssMode || "auto" !== t.params.slidesPerView && !t.params.autoHeight || t.update()
      }

      function M() {
        const e = this;
        e.documentTouchHandlerProceeded || (e.documentTouchHandlerProceeded = !0, e.params.touchReleaseOnEdges && (e.el.style.touchAction = "auto"))
      }
      const _ = (e, t) => {
          const r = (0, n.g)(),
            {
              params: i,
              el: a,
              wrapperEl: s,
              device: o
            } = e,
            l = !!i.nested,
            u = "on" === t ? "addEventListener" : "removeEventListener",
            c = t;
          r[u]("touchstart", e.onDocumentTouchStart, {
            passive: !1,
            capture: l
          }), a[u]("touchstart", e.onTouchStart, {
            passive: !1
          }), a[u]("pointerdown", e.onTouchStart, {
            passive: !1
          }), r[u]("touchmove", e.onTouchMove, {
            passive: !1,
            capture: l
          }), r[u]("pointermove", e.onTouchMove, {
            passive: !1,
            capture: l
          }), r[u]("touchend", e.onTouchEnd, {
            passive: !0
          }), r[u]("pointerup", e.onTouchEnd, {
            passive: !0
          }), r[u]("pointercancel", e.onTouchEnd, {
            passive: !0
          }), r[u]("touchcancel", e.onTouchEnd, {
            passive: !0
          }), r[u]("pointerout", e.onTouchEnd, {
            passive: !0
          }), r[u]("pointerleave", e.onTouchEnd, {
            passive: !0
          }), r[u]("contextmenu", e.onTouchEnd, {
            passive: !0
          }), (i.preventClicks || i.preventClicksPropagation) && a[u]("click", e.onClick, !0), i.cssMode && s[u]("scroll", e.onScroll), i.updateOnWindowResize ? e[c](o.ios || o.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", P, !0) : e[c]("observerUpdate", P, !0), a[u]("load", e.onLoad, {
            capture: !0
          })
        },
        A = (e, t) => e.grid && t.grid && t.grid.rows > 1;
      var k = {
        init: !0,
        direction: "horizontal",
        oneWayMovement: !1,
        swiperElementNodeName: "SWIPER-CONTAINER",
        touchEventsTarget: "wrapper",
        initialSlide: 0,
        speed: 300,
        cssMode: !1,
        updateOnWindowResize: !0,
        resizeObserver: !0,
        nested: !1,
        createElements: !1,
        eventsPrefix: "swiper",
        enabled: !0,
        focusableElements: "input, select, option, textarea, button, video, label",
        width: null,
        height: null,
        preventInteractionOnTransition: !1,
        userAgent: null,
        url: null,
        edgeSwipeDetection: !1,
        edgeSwipeThreshold: 20,
        autoHeight: !1,
        setWrapperSize: !1,
        virtualTranslate: !1,
        effect: "slide",
        breakpoints: void 0,
        breakpointsBase: "window",
        spaceBetween: 0,
        slidesPerView: 1,
        slidesPerGroup: 1,
        slidesPerGroupSkip: 0,
        slidesPerGroupAuto: !1,
        centeredSlides: !1,
        centeredSlidesBounds: !1,
        slidesOffsetBefore: 0,
        slidesOffsetAfter: 0,
        normalizeSlideIndex: !0,
        centerInsufficientSlides: !1,
        watchOverflow: !0,
        roundLengths: !1,
        touchRatio: 1,
        touchAngle: 45,
        simulateTouch: !0,
        shortSwipes: !0,
        longSwipes: !0,
        longSwipesRatio: .5,
        longSwipesMs: 300,
        followFinger: !0,
        allowTouchMove: !0,
        threshold: 5,
        touchMoveStopPropagation: !1,
        touchStartPreventDefault: !0,
        touchStartForcePreventDefault: !1,
        touchReleaseOnEdges: !1,
        uniqueNavElements: !0,
        resistance: !0,
        resistanceRatio: .85,
        watchSlidesProgress: !1,
        grabCursor: !1,
        preventClicks: !0,
        preventClicksPropagation: !0,
        slideToClickedSlide: !1,
        loop: !1,
        loopAddBlankSlides: !0,
        loopAdditionalSlides: 0,
        loopPreventsSliding: !0,
        rewind: !1,
        allowSlidePrev: !0,
        allowSlideNext: !0,
        swipeHandler: null,
        noSwiping: !0,
        noSwipingClass: "swiper-no-swiping",
        noSwipingSelector: null,
        passiveListeners: !0,
        maxBackfaceHiddenSlides: 10,
        containerModifierClass: "swiper-",
        slideClass: "swiper-slide",
        slideBlankClass: "swiper-slide-blank",
        slideActiveClass: "swiper-slide-active",
        slideVisibleClass: "swiper-slide-visible",
        slideFullyVisibleClass: "swiper-slide-fully-visible",
        slideNextClass: "swiper-slide-next",
        slidePrevClass: "swiper-slide-prev",
        wrapperClass: "swiper-wrapper",
        lazyPreloaderClass: "swiper-lazy-preloader",
        lazyPreloadPrevNext: 0,
        runCallbacksOnInit: !0,
        _emitClasses: !1
      };

      function I(e, t) {
        return function(r) {
          void 0 === r && (r = {});
          const i = Object.keys(r)[0],
            n = r[i];
          "object" == typeof n && null !== n ? (!0 === e[i] && (e[i] = {
            enabled: !0
          }), "navigation" === i && e[i] && e[i].enabled && !e[i].prevEl && !e[i].nextEl && (e[i].auto = !0), ["pagination", "scrollbar"].indexOf(i) >= 0 && e[i] && e[i].enabled && !e[i].el && (e[i].auto = !0), i in e && "enabled" in n ? ("object" != typeof e[i] || "enabled" in e[i] || (e[i].enabled = !0), e[i] || (e[i] = {
            enabled: !1
          }), (0, a.u)(t, r)) : (0, a.u)(t, r)) : (0, a.u)(t, r)
        }
      }
      const D = {
          eventsEmitter: h,
          update: m,
          translate: {
            getTranslate: function(e) {
              void 0 === e && (e = this.isHorizontal() ? "x" : "y");
              const {
                params: t,
                rtlTranslate: r,
                translate: i,
                wrapperEl: n
              } = this;
              if (t.virtualTranslate) return r ? -i : i;
              if (t.cssMode) return i;
              let s = (0, a.i)(n, e);
              return s += this.cssOverflowAdjustment(), r && (s = -s), s || 0
            },
            setTranslate: function(e, t) {
              const r = this,
                {
                  rtlTranslate: i,
                  params: n,
                  wrapperEl: a,
                  progress: s
                } = r;
              let o, l = 0,
                u = 0;
              r.isHorizontal() ? l = i ? -e : e : u = e, n.roundLengths && (l = Math.floor(l), u = Math.floor(u)), r.previousTranslate = r.translate, r.translate = r.isHorizontal() ? l : u, n.cssMode ? a[r.isHorizontal() ? "scrollLeft" : "scrollTop"] = r.isHorizontal() ? -l : -u : n.virtualTranslate || (r.isHorizontal() ? l -= r.cssOverflowAdjustment() : u -= r.cssOverflowAdjustment(), a.style.transform = `translate3d(${l}px, ${u}px, 0px)`);
              const c = r.maxTranslate() - r.minTranslate();
              o = 0 === c ? 0 : (e - r.minTranslate()) / c, o !== s && r.updateProgress(e), r.emit("setTranslate", r.translate, t)
            },
            minTranslate: function() {
              return -this.snapGrid[0]
            },
            maxTranslate: function() {
              return -this.snapGrid[this.snapGrid.length - 1]
            },
            translateTo: function(e, t, r, i, n) {
              void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === r && (r = !0), void 0 === i && (i = !0);
              const s = this,
                {
                  params: o,
                  wrapperEl: l
                } = s;
              if (s.animating && o.preventInteractionOnTransition) return !1;
              const u = s.minTranslate(),
                c = s.maxTranslate();
              let h;
              if (h = i && e > u ? u : i && e < c ? c : e, s.updateProgress(h), o.cssMode) {
                const e = s.isHorizontal();
                if (0 === t) l[e ? "scrollLeft" : "scrollTop"] = -h;
                else {
                  if (!s.support.smoothScroll) return (0, a.r)({
                    swiper: s,
                    targetPosition: -h,
                    side: e ? "left" : "top"
                  }), !0;
                  l.scrollTo({
                    [e ? "left" : "top"]: -h,
                    behavior: "smooth"
                  })
                }
                return !0
              }
              return 0 === t ? (s.setTransition(0), s.setTranslate(h), r && (s.emit("beforeTransitionStart", t, n), s.emit("transitionEnd"))) : (s.setTransition(t), s.setTranslate(h), r && (s.emit("beforeTransitionStart", t, n), s.emit("transitionStart")), s.animating || (s.animating = !0, s.onTranslateToWrapperTransitionEnd || (s.onTranslateToWrapperTransitionEnd = function(e) {
                s && !s.destroyed && e.target === this && (s.wrapperEl.removeEventListener("transitionend", s.onTranslateToWrapperTransitionEnd), s.onTranslateToWrapperTransitionEnd = null, delete s.onTranslateToWrapperTransitionEnd, r && s.emit("transitionEnd"))
              }), s.wrapperEl.addEventListener("transitionend", s.onTranslateToWrapperTransitionEnd))), !0
            }
          },
          transition: {
            setTransition: function(e, t) {
              const r = this;
              r.params.cssMode || (r.wrapperEl.style.transitionDuration = `${e}ms`, r.wrapperEl.style.transitionDelay = 0 === e ? "0ms" : ""), r.emit("setTransition", e, t)
            },
            transitionStart: function(e, t) {
              void 0 === e && (e = !0);
              const r = this,
                {
                  params: i
                } = r;
              i.cssMode || (i.autoHeight && r.updateAutoHeight(), v({
                swiper: r,
                runCallbacks: e,
                direction: t,
                step: "Start"
              }))
            },
            transitionEnd: function(e, t) {
              void 0 === e && (e = !0);
              const r = this,
                {
                  params: i
                } = r;
              r.animating = !1, i.cssMode || (r.setTransition(0), v({
                swiper: r,
                runCallbacks: e,
                direction: t,
                step: "End"
              }))
            }
          },
          slide: g,
          loop: y,
          grabCursor: {
            setGrabCursor: function(e) {
              const t = this;
              if (!t.params.simulateTouch || t.params.watchOverflow && t.isLocked || t.params.cssMode) return;
              const r = "container" === t.params.touchEventsTarget ? t.el : t.wrapperEl;
              t.isElement && (t.__preventObserver__ = !0), r.style.cursor = "move", r.style.cursor = e ? "grabbing" : "grab", t.isElement && requestAnimationFrame((() => {
                t.__preventObserver__ = !1
              }))
            },
            unsetGrabCursor: function() {
              const e = this;
              e.params.watchOverflow && e.isLocked || e.params.cssMode || (e.isElement && (e.__preventObserver__ = !0), e["container" === e.params.touchEventsTarget ? "el" : "wrapperEl"].style.cursor = "", e.isElement && requestAnimationFrame((() => {
                e.__preventObserver__ = !1
              })))
            }
          },
          events: {
            attachEvents: function() {
              const e = this,
                {
                  params: t
                } = e;
              e.onTouchStart = S.bind(e), e.onTouchMove = x.bind(e), e.onTouchEnd = E.bind(e), e.onDocumentTouchStart = M.bind(e), t.cssMode && (e.onScroll = C.bind(e)), e.onClick = w.bind(e), e.onLoad = T.bind(e), _(e, "on")
            },
            detachEvents: function() {
              _(this, "off")
            }
          },
          breakpoints: {
            setBreakpoint: function() {
              const e = this,
                {
                  realIndex: t,
                  initialized: r,
                  params: i,
                  el: n
                } = e,
                s = i.breakpoints;
              if (!s || s && 0 === Object.keys(s).length) return;
              const o = e.getBreakpoint(s, e.params.breakpointsBase, e.el);
              if (!o || e.currentBreakpoint === o) return;
              const l = (o in s ? s[o] : void 0) || e.originalParams,
                u = A(e, i),
                c = A(e, l),
                h = i.enabled;
              u && !c ? (n.classList.remove(`${i.containerModifierClass}grid`, `${i.containerModifierClass}grid-column`), e.emitContainerClasses()) : !u && c && (n.classList.add(`${i.containerModifierClass}grid`), (l.grid.fill && "column" === l.grid.fill || !l.grid.fill && "column" === i.grid.fill) && n.classList.add(`${i.containerModifierClass}grid-column`), e.emitContainerClasses()), ["navigation", "pagination", "scrollbar"].forEach((t => {
                if (void 0 === l[t]) return;
                const r = i[t] && i[t].enabled,
                  n = l[t] && l[t].enabled;
                r && !n && e[t].disable(), !r && n && e[t].enable()
              }));
              const p = l.direction && l.direction !== i.direction,
                d = i.loop && (l.slidesPerView !== i.slidesPerView || p),
                f = i.loop;
              p && r && e.changeDirection(), (0, a.u)(e.params, l);
              const m = e.params.enabled,
                v = e.params.loop;
              Object.assign(e, {
                allowTouchMove: e.params.allowTouchMove,
                allowSlideNext: e.params.allowSlideNext,
                allowSlidePrev: e.params.allowSlidePrev
              }), h && !m ? e.disable() : !h && m && e.enable(), e.currentBreakpoint = o, e.emit("_beforeBreakpoint", l), r && (d ? (e.loopDestroy(), e.loopCreate(t), e.updateSlides()) : !f && v ? (e.loopCreate(t), e.updateSlides()) : f && !v && e.loopDestroy()), e.emit("breakpoint", l)
            },
            getBreakpoint: function(e, t, r) {
              if (void 0 === t && (t = "window"), !e || "container" === t && !r) return;
              let i = !1;
              const a = (0, n.a)(),
                s = "window" === t ? a.innerHeight : r.clientHeight,
                o = Object.keys(e).map((e => {
                  if ("string" == typeof e && 0 === e.indexOf("@")) {
                    const t = parseFloat(e.substr(1));
                    return {
                      value: s * t,
                      point: e
                    }
                  }
                  return {
                    value: e,
                    point: e
                  }
                }));
              o.sort(((e, t) => parseInt(e.value, 10) - parseInt(t.value, 10)));
              for (let e = 0; e < o.length; e += 1) {
                const {
                  point: n,
                  value: s
                } = o[e];
                "window" === t ? a.matchMedia(`(min-width: ${s}px)`).matches && (i = n) : s <= r.clientWidth && (i = n)
              }
              return i || "max"
            }
          },
          checkOverflow: {
            checkOverflow: function() {
              const e = this,
                {
                  isLocked: t,
                  params: r
                } = e,
                {
                  slidesOffsetBefore: i
                } = r;
              if (i) {
                const t = e.slides.length - 1,
                  r = e.slidesGrid[t] + e.slidesSizesGrid[t] + 2 * i;
                e.isLocked = e.size > r
              } else e.isLocked = 1 === e.snapGrid.length;
              !0 === r.allowSlideNext && (e.allowSlideNext = !e.isLocked), !0 === r.allowSlidePrev && (e.allowSlidePrev = !e.isLocked), t && t !== e.isLocked && (e.isEnd = !1), t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock")
            }
          },
          classes: {
            addClasses: function() {
              const e = this,
                {
                  classNames: t,
                  params: r,
                  rtl: i,
                  el: n,
                  device: a
                } = e,
                s = function(e, t) {
                  const r = [];
                  return e.forEach((e => {
                    "object" == typeof e ? Object.keys(e).forEach((i => {
                      e[i] && r.push(t + i)
                    })) : "string" == typeof e && r.push(t + e)
                  })), r
                }(["initialized", r.direction, {
                  "free-mode": e.params.freeMode && r.freeMode.enabled
                }, {
                  autoheight: r.autoHeight
                }, {
                  rtl: i
                }, {
                  grid: r.grid && r.grid.rows > 1
                }, {
                  "grid-column": r.grid && r.grid.rows > 1 && "column" === r.grid.fill
                }, {
                  android: a.android
                }, {
                  ios: a.ios
                }, {
                  "css-mode": r.cssMode
                }, {
                  centered: r.cssMode && r.centeredSlides
                }, {
                  "watch-progress": r.watchSlidesProgress
                }], r.containerModifierClass);
              t.push(...s), n.classList.add(...t), e.emitContainerClasses()
            },
            removeClasses: function() {
              const {
                el: e,
                classNames: t
              } = this;
              e.classList.remove(...t), this.emitContainerClasses()
            }
          }
        },
        O = {};
      class F {
        constructor() {
          let e, t;
          for (var r = arguments.length, i = new Array(r), s = 0; s < r; s++) i[s] = arguments[s];
          1 === i.length && i[0].constructor && "Object" === Object.prototype.toString.call(i[0]).slice(8, -1) ? t = i[0] : [e, t] = i, t || (t = {}), t = (0, a.u)({}, t), e && !t.el && (t.el = e);
          const o = (0, n.g)();
          if (t.el && "string" == typeof t.el && o.querySelectorAll(t.el).length > 1) {
            const e = [];
            return o.querySelectorAll(t.el).forEach((r => {
              const i = (0, a.u)({}, t, {
                el: r
              });
              e.push(new F(i))
            })), e
          }
          const h = this;
          h.__swiper__ = !0, h.support = u(), h.device = c({
            userAgent: t.userAgent
          }), h.browser = (l || (l = function() {
            const e = (0, n.a)(),
              t = c();
            let r = !1;

            function i() {
              const t = e.navigator.userAgent.toLowerCase();
              return t.indexOf("safari") >= 0 && t.indexOf("chrome") < 0 && t.indexOf("android") < 0
            }
            if (i()) {
              const t = String(e.navigator.userAgent);
              if (t.includes("Version/")) {
                const [e, i] = t.split("Version/")[1].split(" ")[0].split(".").map((e => Number(e)));
                r = e < 16 || 16 === e && i < 2
              }
            }
            const a = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent),
              s = i();
            return {
              isSafari: r || s,
              needPerspectiveFix: r,
              need3dFix: s || a && t.ios,
              isWebView: a
            }
          }()), l), h.eventsListeners = {}, h.eventsAnyListeners = [], h.modules = [...h.__modules__], t.modules && Array.isArray(t.modules) && h.modules.push(...t.modules);
          const p = {};
          h.modules.forEach((e => {
            e({
              params: t,
              swiper: h,
              extendParams: I(t, p),
              on: h.on.bind(h),
              once: h.once.bind(h),
              off: h.off.bind(h),
              emit: h.emit.bind(h)
            })
          }));
          const d = (0, a.u)({}, k, p);
          return h.params = (0, a.u)({}, d, O, t), h.originalParams = (0, a.u)({}, h.params), h.passedParams = (0, a.u)({}, t), h.params && h.params.on && Object.keys(h.params.on).forEach((e => {
            h.on(e, h.params.on[e])
          })), h.params && h.params.onAny && h.onAny(h.params.onAny), Object.assign(h, {
            enabled: h.params.enabled,
            el: e,
            classNames: [],
            slides: [],
            slidesGrid: [],
            snapGrid: [],
            slidesSizesGrid: [],
            isHorizontal: () => "horizontal" === h.params.direction,
            isVertical: () => "vertical" === h.params.direction,
            activeIndex: 0,
            realIndex: 0,
            isBeginning: !0,
            isEnd: !1,
            translate: 0,
            previousTranslate: 0,
            progress: 0,
            velocity: 0,
            animating: !1,
            cssOverflowAdjustment() {
              return Math.trunc(this.translate / 2 ** 23) * 2 ** 23
            },
            allowSlideNext: h.params.allowSlideNext,
            allowSlidePrev: h.params.allowSlidePrev,
            touchEventsData: {
              isTouched: void 0,
              isMoved: void 0,
              allowTouchCallbacks: void 0,
              touchStartTime: void 0,
              isScrolling: void 0,
              currentTranslate: void 0,
              startTranslate: void 0,
              allowThresholdMove: void 0,
              focusableElements: h.params.focusableElements,
              lastClickTime: 0,
              clickTimeout: void 0,
              velocities: [],
              allowMomentumBounce: void 0,
              startMoving: void 0,
              pointerId: null,
              touchId: null
            },
            allowClick: !0,
            allowTouchMove: h.params.allowTouchMove,
            touches: {
              startX: 0,
              startY: 0,
              currentX: 0,
              currentY: 0,
              diff: 0
            },
            imagesToLoad: [],
            imagesLoaded: 0
          }), h.emit("_swiper"), h.params.init && h.init(), h
        }
        getDirectionLabel(e) {
          return this.isHorizontal() ? e : {
            width: "height",
            "margin-top": "margin-left",
            "margin-bottom ": "margin-right",
            "margin-left": "margin-top",
            "margin-right": "margin-bottom",
            "padding-left": "padding-top",
            "padding-right": "padding-bottom",
            marginRight: "marginBottom"
          } [e]
        }
        getSlideIndex(e) {
          const {
            slidesEl: t,
            params: r
          } = this, i = (0, a.e)(t, `.${r.slideClass}, swiper-slide`), n = (0, a.g)(i[0]);
          return (0, a.g)(e) - n
        }
        getSlideIndexByData(e) {
          return this.getSlideIndex(this.slides.filter((t => 1 * t.getAttribute("data-swiper-slide-index") === e))[0])
        }
        recalcSlides() {
          const {
            slidesEl: e,
            params: t
          } = this;
          this.slides = (0, a.e)(e, `.${t.slideClass}, swiper-slide`)
        }
        enable() {
          const e = this;
          e.enabled || (e.enabled = !0, e.params.grabCursor && e.setGrabCursor(), e.emit("enable"))
        }
        disable() {
          const e = this;
          e.enabled && (e.enabled = !1, e.params.grabCursor && e.unsetGrabCursor(), e.emit("disable"))
        }
        setProgress(e, t) {
          const r = this;
          e = Math.min(Math.max(e, 0), 1);
          const i = r.minTranslate(),
            n = (r.maxTranslate() - i) * e + i;
          r.translateTo(n, void 0 === t ? 0 : t), r.updateActiveIndex(), r.updateSlidesClasses()
        }
        emitContainerClasses() {
          const e = this;
          if (!e.params._emitClasses || !e.el) return;
          const t = e.el.className.split(" ").filter((t => 0 === t.indexOf("swiper") || 0 === t.indexOf(e.params.containerModifierClass)));
          e.emit("_containerClasses", t.join(" "))
        }
        getSlideClasses(e) {
          const t = this;
          return t.destroyed ? "" : e.className.split(" ").filter((e => 0 === e.indexOf("swiper-slide") || 0 === e.indexOf(t.params.slideClass))).join(" ")
        }
        emitSlidesClasses() {
          const e = this;
          if (!e.params._emitClasses || !e.el) return;
          const t = [];
          e.slides.forEach((r => {
            const i = e.getSlideClasses(r);
            t.push({
              slideEl: r,
              classNames: i
            }), e.emit("_slideClass", r, i)
          })), e.emit("_slideClasses", t)
        }
        slidesPerViewDynamic(e, t) {
          void 0 === e && (e = "current"), void 0 === t && (t = !1);
          const {
            params: r,
            slides: i,
            slidesGrid: n,
            slidesSizesGrid: a,
            size: s,
            activeIndex: o
          } = this;
          let l = 1;
          if ("number" == typeof r.slidesPerView) return r.slidesPerView;
          if (r.centeredSlides) {
            let e, t = i[o] ? Math.ceil(i[o].swiperSlideSize) : 0;
            for (let r = o + 1; r < i.length; r += 1) i[r] && !e && (t += Math.ceil(i[r].swiperSlideSize), l += 1, t > s && (e = !0));
            for (let r = o - 1; r >= 0; r -= 1) i[r] && !e && (t += i[r].swiperSlideSize, l += 1, t > s && (e = !0))
          } else if ("current" === e)
            for (let e = o + 1; e < i.length; e += 1)(t ? n[e] + a[e] - n[o] < s : n[e] - n[o] < s) && (l += 1);
          else
            for (let e = o - 1; e >= 0; e -= 1) n[o] - n[e] < s && (l += 1);
          return l
        }
        update() {
          const e = this;
          if (!e || e.destroyed) return;
          const {
            snapGrid: t,
            params: r
          } = e;

          function i() {
            const t = e.rtlTranslate ? -1 * e.translate : e.translate,
              r = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
            e.setTranslate(r), e.updateActiveIndex(), e.updateSlidesClasses()
          }
          let n;
          if (r.breakpoints && e.setBreakpoint(), [...e.el.querySelectorAll('[loading="lazy"]')].forEach((t => {
              t.complete && p(e, t)
            })), e.updateSize(), e.updateSlides(), e.updateProgress(), e.updateSlidesClasses(), r.freeMode && r.freeMode.enabled && !r.cssMode) i(), r.autoHeight && e.updateAutoHeight();
          else {
            if (("auto" === r.slidesPerView || r.slidesPerView > 1) && e.isEnd && !r.centeredSlides) {
              const t = e.virtual && r.virtual.enabled ? e.virtual.slides : e.slides;
              n = e.slideTo(t.length - 1, 0, !1, !0)
            } else n = e.slideTo(e.activeIndex, 0, !1, !0);
            n || i()
          }
          r.watchOverflow && t !== e.snapGrid && e.checkOverflow(), e.emit("update")
        }
        changeDirection(e, t) {
          void 0 === t && (t = !0);
          const r = this,
            i = r.params.direction;
          return e || (e = "horizontal" === i ? "vertical" : "horizontal"), e === i || "horizontal" !== e && "vertical" !== e || (r.el.classList.remove(`${r.params.containerModifierClass}${i}`), r.el.classList.add(`${r.params.containerModifierClass}${e}`), r.emitContainerClasses(), r.params.direction = e, r.slides.forEach((t => {
            "vertical" === e ? t.style.width = "" : t.style.height = ""
          })), r.emit("changeDirection"), t && r.update()), r
        }
        changeLanguageDirection(e) {
          const t = this;
          t.rtl && "rtl" === e || !t.rtl && "ltr" === e || (t.rtl = "rtl" === e, t.rtlTranslate = "horizontal" === t.params.direction && t.rtl, t.rtl ? (t.el.classList.add(`${t.params.containerModifierClass}rtl`), t.el.dir = "rtl") : (t.el.classList.remove(`${t.params.containerModifierClass}rtl`), t.el.dir = "ltr"), t.update())
        }
        mount(e) {
          const t = this;
          if (t.mounted) return !0;
          let r = e || t.params.el;
          if ("string" == typeof r && (r = document.querySelector(r)), !r) return !1;
          r.swiper = t, r.parentNode && r.parentNode.host && r.parentNode.host.nodeName === t.params.swiperElementNodeName.toUpperCase() && (t.isElement = !0);
          const i = () => `.${(t.params.wrapperClass||"").trim().split(" ").join(".")}`;
          let n = r && r.shadowRoot && r.shadowRoot.querySelector ? r.shadowRoot.querySelector(i()) : (0, a.e)(r, i())[0];
          return !n && t.params.createElements && (n = (0, a.c)("div", t.params.wrapperClass), r.append(n), (0, a.e)(r, `.${t.params.slideClass}`).forEach((e => {
            n.append(e)
          }))), Object.assign(t, {
            el: r,
            wrapperEl: n,
            slidesEl: t.isElement && !r.parentNode.host.slideSlots ? r.parentNode.host : n,
            hostEl: t.isElement ? r.parentNode.host : r,
            mounted: !0,
            rtl: "rtl" === r.dir.toLowerCase() || "rtl" === (0, a.o)(r, "direction"),
            rtlTranslate: "horizontal" === t.params.direction && ("rtl" === r.dir.toLowerCase() || "rtl" === (0, a.o)(r, "direction")),
            wrongRTL: "-webkit-box" === (0, a.o)(n, "display")
          }), !0
        }
        init(e) {
          const t = this;
          if (t.initialized) return t;
          if (!1 === t.mount(e)) return t;
          t.emit("beforeInit"), t.params.breakpoints && t.setBreakpoint(), t.addClasses(), t.updateSize(), t.updateSlides(), t.params.watchOverflow && t.checkOverflow(), t.params.grabCursor && t.enabled && t.setGrabCursor(), t.params.loop && t.virtual && t.params.virtual.enabled ? t.slideTo(t.params.initialSlide + t.virtual.slidesBefore, 0, t.params.runCallbacksOnInit, !1, !0) : t.slideTo(t.params.initialSlide, 0, t.params.runCallbacksOnInit, !1, !0), t.params.loop && t.loopCreate(), t.attachEvents();
          const r = [...t.el.querySelectorAll('[loading="lazy"]')];
          return t.isElement && r.push(...t.hostEl.querySelectorAll('[loading="lazy"]')), r.forEach((e => {
            e.complete ? p(t, e) : e.addEventListener("load", (e => {
              p(t, e.target)
            }))
          })), f(t), t.initialized = !0, f(t), t.emit("init"), t.emit("afterInit"), t
        }
        destroy(e, t) {
          void 0 === e && (e = !0), void 0 === t && (t = !0);
          const r = this,
            {
              params: i,
              el: n,
              wrapperEl: s,
              slides: o
            } = r;
          return void 0 === r.params || r.destroyed || (r.emit("beforeDestroy"), r.initialized = !1, r.detachEvents(), i.loop && r.loopDestroy(), t && (r.removeClasses(), n.removeAttribute("style"), s.removeAttribute("style"), o && o.length && o.forEach((e => {
            e.classList.remove(i.slideVisibleClass, i.slideFullyVisibleClass, i.slideActiveClass, i.slideNextClass, i.slidePrevClass), e.removeAttribute("style"), e.removeAttribute("data-swiper-slide-index")
          }))), r.emit("destroy"), Object.keys(r.eventsListeners).forEach((e => {
            r.off(e)
          })), !1 !== e && (r.el.swiper = null, (0, a.v)(r)), r.destroyed = !0), null
        }
        static extendDefaults(e) {
          (0, a.u)(O, e)
        }
        static get extendedDefaults() {
          return O
        }
        static get defaults() {
          return k
        }
        static installModule(e) {
          F.prototype.__modules__ || (F.prototype.__modules__ = []);
          const t = F.prototype.__modules__;
          "function" == typeof e && t.indexOf(e) < 0 && t.push(e)
        }
        static use(e) {
          return Array.isArray(e) ? (e.forEach((e => F.installModule(e))), F) : (F.installModule(e), F)
        }
      }
      Object.keys(D).forEach((e => {
        Object.keys(D[e]).forEach((t => {
          F.prototype[t] = D[e][t]
        }))
      })), F.use([function(e) {
        let {
          swiper: t,
          on: r,
          emit: i
        } = e;
        const a = (0, n.a)();
        let s = null,
          o = null;
        const l = () => {
            t && !t.destroyed && t.initialized && (i("beforeResize"), i("resize"))
          },
          u = () => {
            t && !t.destroyed && t.initialized && i("orientationchange")
          };
        r("init", (() => {
          t.params.resizeObserver && void 0 !== a.ResizeObserver ? t && !t.destroyed && t.initialized && (s = new ResizeObserver((e => {
            o = a.requestAnimationFrame((() => {
              const {
                width: r,
                height: i
              } = t;
              let n = r,
                a = i;
              e.forEach((e => {
                let {
                  contentBoxSize: r,
                  contentRect: i,
                  target: s
                } = e;
                s && s !== t.el || (n = i ? i.width : (r[0] || r).inlineSize, a = i ? i.height : (r[0] || r).blockSize)
              })), n === r && a === i || l()
            }))
          })), s.observe(t.el)) : (a.addEventListener("resize", l), a.addEventListener("orientationchange", u))
        })), r("destroy", (() => {
          o && a.cancelAnimationFrame(o), s && s.unobserve && t.el && (s.unobserve(t.el), s = null), a.removeEventListener("resize", l), a.removeEventListener("orientationchange", u)
        }))
      }, function(e) {
        let {
          swiper: t,
          extendParams: r,
          on: i,
          emit: s
        } = e;
        const o = [],
          l = (0, n.a)(),
          u = function(e, r) {
            void 0 === r && (r = {});
            const i = new(l.MutationObserver || l.WebkitMutationObserver)((e => {
              if (t.__preventObserver__) return;
              if (1 === e.length) return void s("observerUpdate", e[0]);
              const r = function() {
                s("observerUpdate", e[0])
              };
              l.requestAnimationFrame ? l.requestAnimationFrame(r) : l.setTimeout(r, 0)
            }));
            i.observe(e, {
              attributes: void 0 === r.attributes || r.attributes,
              childList: void 0 === r.childList || r.childList,
              characterData: void 0 === r.characterData || r.characterData
            }), o.push(i)
          };
        r({
          observer: !1,
          observeParents: !1,
          observeSlideChildren: !1
        }), i("init", (() => {
          if (t.params.observer) {
            if (t.params.observeParents) {
              const e = (0, a.a)(t.hostEl);
              for (let t = 0; t < e.length; t += 1) u(e[t])
            }
            u(t.hostEl, {
              childList: t.params.observeSlideChildren
            }), u(t.wrapperEl, {
              attributes: !1
            })
          }
        })), i("destroy", (() => {
          o.forEach((e => {
            e.disconnect()
          })), o.splice(0, o.length)
        }))
      }]);
      const L = ["eventsPrefix", "injectStyles", "injectStylesUrls", "modules", "init", "_direction", "oneWayMovement", "swiperElementNodeName", "touchEventsTarget", "initialSlide", "_speed", "cssMode", "updateOnWindowResize", "resizeObserver", "nested", "focusableElements", "_enabled", "_width", "_height", "preventInteractionOnTransition", "userAgent", "url", "_edgeSwipeDetection", "_edgeSwipeThreshold", "_freeMode", "_autoHeight", "setWrapperSize", "virtualTranslate", "_effect", "breakpoints", "breakpointsBase", "_spaceBetween", "_slidesPerView", "maxBackfaceHiddenSlides", "_grid", "_slidesPerGroup", "_slidesPerGroupSkip", "_slidesPerGroupAuto", "_centeredSlides", "_centeredSlidesBounds", "_slidesOffsetBefore", "_slidesOffsetAfter", "normalizeSlideIndex", "_centerInsufficientSlides", "_watchOverflow", "roundLengths", "touchRatio", "touchAngle", "simulateTouch", "_shortSwipes", "_longSwipes", "longSwipesRatio", "longSwipesMs", "_followFinger", "allowTouchMove", "_threshold", "touchMoveStopPropagation", "touchStartPreventDefault", "touchStartForcePreventDefault", "touchReleaseOnEdges", "uniqueNavElements", "_resistance", "_resistanceRatio", "_watchSlidesProgress", "_grabCursor", "preventClicks", "preventClicksPropagation", "_slideToClickedSlide", "_loop", "loopAdditionalSlides", "loopAddBlankSlides", "loopPreventsSliding", "_rewind", "_allowSlidePrev", "_allowSlideNext", "_swipeHandler", "_noSwiping", "noSwipingClass", "noSwipingSelector", "passiveListeners", "containerModifierClass", "slideClass", "slideActiveClass", "slideVisibleClass", "slideFullyVisibleClass", "slideNextClass", "slidePrevClass", "slideBlankClass", "wrapperClass", "lazyPreloaderClass", "lazyPreloadPrevNext", "runCallbacksOnInit", "observer", "observeParents", "observeSlideChildren", "a11y", "_autoplay", "_controller", "coverflowEffect", "cubeEffect", "fadeEffect", "flipEffect", "creativeEffect", "cardsEffect", "hashNavigation", "history", "keyboard", "mousewheel", "_navigation", "_pagination", "parallax", "_scrollbar", "_thumbs", "virtual", "zoom", "control"];

      function V(e) {
        return "object" == typeof e && null !== e && e.constructor && "Object" === Object.prototype.toString.call(e).slice(8, -1) && !e.__swiper__
      }

      function R(e, t) {
        const r = ["__proto__", "constructor", "prototype"];
        Object.keys(t).filter((e => r.indexOf(e) < 0)).forEach((r => {
          void 0 === e[r] ? e[r] = t[r] : V(t[r]) && V(e[r]) && Object.keys(t[r]).length > 0 ? t[r].__swiper__ ? e[r] = t[r] : R(e[r], t[r]) : e[r] = t[r]
        }))
      }

      function B(e) {
        return void 0 === e && (e = {}), e.navigation && void 0 === e.navigation.nextEl && void 0 === e.navigation.prevEl
      }

      function N(e) {
        return void 0 === e && (e = {}), e.pagination && void 0 === e.pagination.el
      }

      function z(e) {
        return void 0 === e && (e = {}), e.scrollbar && void 0 === e.scrollbar.el
      }

      function G(e) {
        void 0 === e && (e = "");
        const t = e.split(" ").map((e => e.trim())).filter((e => !!e)),
          r = [];
        return t.forEach((e => {
          r.indexOf(e) < 0 && r.push(e)
        })), r.join(" ")
      }

      function j(e) {
        return void 0 === e && (e = ""), e ? e.includes("swiper-wrapper") ? e : `swiper-wrapper ${e}` : "swiper-wrapper"
      }

      function H() {
        return H = Object.assign ? Object.assign.bind() : function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i])
          }
          return e
        }, H.apply(this, arguments)
      }

      function W(e) {
        return e.type && e.type.displayName && e.type.displayName.includes("SwiperSlide")
      }

      function q(e) {
        const t = [];
        return i.Children.toArray(e).forEach((e => {
          W(e) ? t.push(e) : e.props && e.props.children && q(e.props.children).forEach((e => t.push(e)))
        })), t
      }

      function $(e) {
        const t = [],
          r = {
            "container-start": [],
            "container-end": [],
            "wrapper-start": [],
            "wrapper-end": []
          };
        return i.Children.toArray(e).forEach((e => {
          if (W(e)) t.push(e);
          else if (e.props && e.props.slot && r[e.props.slot]) r[e.props.slot].push(e);
          else if (e.props && e.props.children) {
            const i = q(e.props.children);
            i.length > 0 ? i.forEach((e => t.push(e))) : r["container-end"].push(e)
          } else r["container-end"].push(e)
        })), {
          slides: t,
          slots: r
        }
      }

      function U(e, t) {
        return "undefined" == typeof window ? (0, i.useEffect)(e, t) : (0, i.useLayoutEffect)(e, t)
      }
      const Y = (0, i.createContext)(null),
        X = (0, i.createContext)(null),
        K = (0, i.forwardRef)((function(e, t) {
          let {
            className: r,
            tag: n = "div",
            wrapperTag: a = "div",
            children: s,
            onSwiper: o,
            ...l
          } = void 0 === e ? {} : e, u = !1;
          const [c, h] = (0, i.useState)("swiper"), [p, d] = (0, i.useState)(null), [f, m] = (0, i.useState)(!1), v = (0, i.useRef)(!1), g = (0, i.useRef)(null), y = (0, i.useRef)(null), b = (0, i.useRef)(null), S = (0, i.useRef)(null), x = (0, i.useRef)(null), E = (0, i.useRef)(null), P = (0, i.useRef)(null), w = (0, i.useRef)(null), {
            params: C,
            passedParams: T,
            rest: M,
            events: _
          } = function(e, t) {
            void 0 === e && (e = {}), void 0 === t && (t = !0);
            const r = {
                on: {}
              },
              i = {},
              n = {};
            R(r, k), r._emitClasses = !0, r.init = !1;
            const a = {},
              s = L.map((e => e.replace(/_/, ""))),
              o = Object.assign({}, e);
            return Object.keys(o).forEach((o => {
              void 0 !== e[o] && (s.indexOf(o) >= 0 ? V(e[o]) ? (r[o] = {}, n[o] = {}, R(r[o], e[o]), R(n[o], e[o])) : (r[o] = e[o], n[o] = e[o]) : 0 === o.search(/on[A-Z]/) && "function" == typeof e[o] ? t ? i[`${o[2].toLowerCase()}${o.substr(3)}`] = e[o] : r.on[`${o[2].toLowerCase()}${o.substr(3)}`] = e[o] : a[o] = e[o])
            })), ["navigation", "pagination", "scrollbar"].forEach((e => {
              !0 === r[e] && (r[e] = {}), !1 === r[e] && delete r[e]
            })), {
              params: r,
              passedParams: n,
              rest: a,
              events: i
            }
          }(l), {
            slides: A,
            slots: I
          } = $(s), D = () => {
            m(!f)
          };
          Object.assign(C.on, {
            _containerClasses(e, t) {
              h(t)
            }
          });
          const O = () => {
            Object.assign(C.on, _), u = !0;
            const e = {
              ...C
            };
            if (delete e.wrapperClass, y.current = new F(e), y.current.virtual && y.current.params.virtual.enabled) {
              y.current.virtual.slides = A;
              const e = {
                cache: !1,
                slides: A,
                renderExternal: d,
                renderExternalUpdate: !1
              };
              R(y.current.params.virtual, e), R(y.current.originalParams.virtual, e)
            }
          };
          return g.current || O(), y.current && y.current.on("_beforeBreakpoint", D), (0, i.useEffect)((() => () => {
            y.current && y.current.off("_beforeBreakpoint", D)
          })), (0, i.useEffect)((() => {
            !v.current && y.current && (y.current.emitSlidesClasses(), v.current = !0)
          })), U((() => {
            if (t && (t.current = g.current), g.current) return y.current.destroyed && O(),
              function(e, t) {
                let {
                  el: r,
                  nextEl: i,
                  prevEl: n,
                  paginationEl: a,
                  scrollbarEl: s,
                  swiper: o
                } = e;
                B(t) && i && n && (o.params.navigation.nextEl = i, o.originalParams.navigation.nextEl = i, o.params.navigation.prevEl = n, o.originalParams.navigation.prevEl = n), N(t) && a && (o.params.pagination.el = a, o.originalParams.pagination.el = a), z(t) && s && (o.params.scrollbar.el = s, o.originalParams.scrollbar.el = s), o.init(r)
              }({
                el: g.current,
                nextEl: x.current,
                prevEl: E.current,
                paginationEl: P.current,
                scrollbarEl: w.current,
                swiper: y.current
              }, C), o && !y.current.destroyed && o(y.current), () => {
                y.current && !y.current.destroyed && y.current.destroy(!0, !1)
              }
          }), []), U((() => {
            !u && _ && y.current && Object.keys(_).forEach((e => {
              y.current.on(e, _[e])
            }));
            const e = function(e, t, r, i, n) {
              const a = [];
              if (!t) return a;
              const s = e => {
                a.indexOf(e) < 0 && a.push(e)
              };
              if (r && i) {
                const e = i.map(n),
                  t = r.map(n);
                e.join("") !== t.join("") && s("children"), i.length !== r.length && s("children")
              }
              return L.filter((e => "_" === e[0])).map((e => e.replace(/_/, ""))).forEach((r => {
                if (r in e && r in t)
                  if (V(e[r]) && V(t[r])) {
                    const i = Object.keys(e[r]),
                      n = Object.keys(t[r]);
                    i.length !== n.length ? s(r) : (i.forEach((i => {
                      e[r][i] !== t[r][i] && s(r)
                    })), n.forEach((i => {
                      e[r][i] !== t[r][i] && s(r)
                    })))
                  } else e[r] !== t[r] && s(r)
              })), a
            }(T, b.current, A, S.current, (e => e.key));
            return b.current = T, S.current = A, e.length && y.current && !y.current.destroyed && function(e) {
              let {
                swiper: t,
                slides: r,
                passedParams: i,
                changedParams: n,
                nextEl: a,
                prevEl: s,
                scrollbarEl: o,
                paginationEl: l
              } = e;
              const u = n.filter((e => "children" !== e && "direction" !== e && "wrapperClass" !== e)),
                {
                  params: c,
                  pagination: h,
                  navigation: p,
                  scrollbar: d,
                  virtual: f,
                  thumbs: m
                } = t;
              let v, g, y, b, S, x, E, P;
              n.includes("thumbs") && i.thumbs && i.thumbs.swiper && c.thumbs && !c.thumbs.swiper && (v = !0), n.includes("controller") && i.controller && i.controller.control && c.controller && !c.controller.control && (g = !0), n.includes("pagination") && i.pagination && (i.pagination.el || l) && (c.pagination || !1 === c.pagination) && h && !h.el && (y = !0), n.includes("scrollbar") && i.scrollbar && (i.scrollbar.el || o) && (c.scrollbar || !1 === c.scrollbar) && d && !d.el && (b = !0), n.includes("navigation") && i.navigation && (i.navigation.prevEl || s) && (i.navigation.nextEl || a) && (c.navigation || !1 === c.navigation) && p && !p.prevEl && !p.nextEl && (S = !0);
              const w = e => {
                t[e] && (t[e].destroy(), "navigation" === e ? (t.isElement && (t[e].prevEl.remove(), t[e].nextEl.remove()), c[e].prevEl = void 0, c[e].nextEl = void 0, t[e].prevEl = void 0, t[e].nextEl = void 0) : (t.isElement && t[e].el.remove(), c[e].el = void 0, t[e].el = void 0))
              };
              n.includes("loop") && t.isElement && (c.loop && !i.loop ? x = !0 : !c.loop && i.loop ? E = !0 : P = !0), u.forEach((e => {
                if (V(c[e]) && V(i[e])) Object.assign(c[e], i[e]), "navigation" !== e && "pagination" !== e && "scrollbar" !== e || !("enabled" in i[e]) || i[e].enabled || w(e);
                else {
                  const t = i[e];
                  !0 !== t && !1 !== t || "navigation" !== e && "pagination" !== e && "scrollbar" !== e ? c[e] = i[e] : !1 === t && w(e)
                }
              })), u.includes("controller") && !g && t.controller && t.controller.control && c.controller && c.controller.control && (t.controller.control = c.controller.control), n.includes("children") && r && f && c.virtual.enabled ? (f.slides = r, f.update(!0)) : n.includes("virtual") && f && c.virtual.enabled && (r && (f.slides = r), f.update(!0)), n.includes("children") && r && c.loop && (P = !0), v && m.init() && m.update(!0), g && (t.controller.control = c.controller.control), y && (!t.isElement || l && "string" != typeof l || (l = document.createElement("div"), l.classList.add("swiper-pagination"), l.part.add("pagination"), t.el.appendChild(l)), l && (c.pagination.el = l), h.init(), h.render(), h.update()), b && (!t.isElement || o && "string" != typeof o || (o = document.createElement("div"), o.classList.add("swiper-scrollbar"), o.part.add("scrollbar"), t.el.appendChild(o)), o && (c.scrollbar.el = o), d.init(), d.updateSize(), d.setTranslate()), S && (t.isElement && (a && "string" != typeof a || (a = document.createElement("div"), a.classList.add("swiper-button-next"), a.innerHTML = t.hostEl.constructor.nextButtonSvg, a.part.add("button-next"), t.el.appendChild(a)), s && "string" != typeof s || (s = document.createElement("div"), s.classList.add("swiper-button-prev"), s.innerHTML = t.hostEl.constructor.prevButtonSvg, s.part.add("button-prev"), t.el.appendChild(s))), a && (c.navigation.nextEl = a), s && (c.navigation.prevEl = s), p.init(), p.update()), n.includes("allowSlideNext") && (t.allowSlideNext = i.allowSlideNext), n.includes("allowSlidePrev") && (t.allowSlidePrev = i.allowSlidePrev), n.includes("direction") && t.changeDirection(i.direction, !1), (x || P) && t.loopDestroy(), (E || P) && t.loopCreate(), t.update()
            }({
              swiper: y.current,
              slides: A,
              passedParams: T,
              changedParams: e,
              nextEl: x.current,
              prevEl: E.current,
              scrollbarEl: w.current,
              paginationEl: P.current
            }), () => {
              _ && y.current && Object.keys(_).forEach((e => {
                y.current.off(e, _[e])
              }))
            }
          })), U((() => {
            var e;
            !(e = y.current) || e.destroyed || !e.params.virtual || e.params.virtual && !e.params.virtual.enabled || (e.updateSlides(), e.updateProgress(), e.updateSlidesClasses(), e.parallax && e.params.parallax && e.params.parallax.enabled && e.parallax.setTranslate())
          }), [p]), i.createElement(n, H({
            ref: g,
            className: G(`${c}${r?` ${r}`:""}`)
          }, M), i.createElement(X.Provider, {
            value: y.current
          }, I["container-start"], i.createElement(a, {
            className: j(C.wrapperClass)
          }, I["wrapper-start"], C.virtual ? function(e, t, r) {
            if (!r) return null;
            const n = e => {
                let r = e;
                return e < 0 ? r = t.length + e : r >= t.length && (r -= t.length), r
              },
              a = e.isHorizontal() ? {
                [e.rtlTranslate ? "right" : "left"]: `${r.offset}px`
              } : {
                top: `${r.offset}px`
              },
              {
                from: s,
                to: o
              } = r,
              l = e.params.loop ? -t.length : 0,
              u = e.params.loop ? 2 * t.length : t.length,
              c = [];
            for (let e = l; e < u; e += 1) e >= s && e <= o && c.push(t[n(e)]);
            return c.map(((t, r) => i.cloneElement(t, {
              swiper: e,
              style: a,
              key: `slide-${r}`
            })))
          }(y.current, A, p) : A.map(((e, t) => i.cloneElement(e, {
            swiper: y.current,
            swiperSlideIndex: t
          }))), I["wrapper-end"]), B(C) && i.createElement(i.Fragment, null, i.createElement("div", {
            ref: E,
            className: "swiper-button-prev"
          }), i.createElement("div", {
            ref: x,
            className: "swiper-button-next"
          })), z(C) && i.createElement("div", {
            ref: w,
            className: "swiper-scrollbar"
          }), N(C) && i.createElement("div", {
            ref: P,
            className: "swiper-pagination"
          }), I["container-end"]))
        }));
      K.displayName = "Swiper";
      const Z = (0, i.forwardRef)((function(e, t) {
        let {
          tag: r = "div",
          children: n,
          className: a = "",
          swiper: s,
          zoom: o,
          lazy: l,
          virtualIndex: u,
          swiperSlideIndex: c,
          ...h
        } = void 0 === e ? {} : e;
        const p = (0, i.useRef)(null),
          [d, f] = (0, i.useState)("swiper-slide"),
          [m, v] = (0, i.useState)(!1);

        function g(e, t, r) {
          t === p.current && f(r)
        }
        U((() => {
          if (void 0 !== c && (p.current.swiperSlideIndex = c), t && (t.current = p.current), p.current && s) {
            if (!s.destroyed) return s.on("_slideClass", g), () => {
              s && s.off("_slideClass", g)
            };
            "swiper-slide" !== d && f("swiper-slide")
          }
        })), U((() => {
          s && p.current && !s.destroyed && f(s.getSlideClasses(p.current))
        }), [s]);
        const y = {
            isActive: d.indexOf("swiper-slide-active") >= 0,
            isVisible: d.indexOf("swiper-slide-visible") >= 0,
            isPrev: d.indexOf("swiper-slide-prev") >= 0,
            isNext: d.indexOf("swiper-slide-next") >= 0
          },
          b = () => "function" == typeof n ? n(y) : n;
        return i.createElement(r, H({
          ref: p,
          className: G(`${d}${a?` ${a}`:""}`),
          "data-swiper-slide-index": u,
          onLoad: () => {
            v(!0)
          }
        }, h), o && i.createElement(Y.Provider, {
          value: y
        }, i.createElement("div", {
          className: "swiper-zoom-container",
          "data-swiper-zoom": "number" == typeof o ? o : void 0
        }, b(), l && !m && i.createElement("div", {
          className: "swiper-lazy-preloader"
        }))), !o && i.createElement(Y.Provider, {
          value: y
        }, b(), l && !m && i.createElement("div", {
          className: "swiper-lazy-preloader"
        })))
      }));
      Z.displayName = "SwiperSlide"
    },
    8048: e => {
      "use strict";
      e.exports = JSON.parse('[{"value":"AF","label":"افغانستان"},{"value":"AX","label":"Åland"},{"value":"AL","label":"Shqipëria"},{"value":"DZ","label":"الجزائر"},{"value":"AS","label":"American Samoa"},{"value":"AD","label":"Andorra"},{"value":"AO","label":"Angola"},{"value":"AI","label":"Anguilla"},{"value":"AQ","label":"Antarctica"},{"value":"AG","label":"Antigua and Barbuda"},{"value":"AR","label":"Argentina"},{"value":"AM","label":"Հայաստան"},{"value":"AW","label":"Aruba"},{"value":"AU","label":"Australia"},{"value":"AT","label":"Österreich"},{"value":"AZ","label":"Azərbaycan"},{"value":"BS","label":"Bahamas"},{"value":"BH","label":"‏البحرين"},{"value":"BD","label":"Bangladesh"},{"value":"BB","label":"Barbados"},{"value":"BY","label":"Белару́сь"},{"value":"BE","label":"België"},{"value":"BZ","label":"Belize"},{"value":"BJ","label":"Bénin"},{"value":"BM","label":"Bermuda"},{"value":"BT","label":"ʼbrug-yul"},{"value":"BO","label":"Bolivia"},{"value":"BQ","label":"Bonaire"},{"value":"BA","label":"Bosna i Hercegovina"},{"value":"BW","label":"Botswana"},{"value":"BV","label":"Bouvetøya"},{"value":"BR","label":"Brasil"},{"value":"IO","label":"British Indian Ocean Territory"},{"value":"BN","label":"Negara Brunei Darussalam"},{"value":"BG","label":"България"},{"value":"BF","label":"Burkina Faso"},{"value":"BI","label":"Burundi"},{"value":"KH","label":"Kâmpŭchéa"},{"value":"CM","label":"Cameroon"},{"value":"CA","label":"Canada"},{"value":"CV","label":"Cabo Verde"},{"value":"KY","label":"Cayman Islands"},{"value":"CF","label":"Ködörösêse tî Bêafrîka"},{"value":"TD","label":"Tchad"},{"value":"CL","label":"Chile"},{"value":"CN","label":"中国"},{"value":"CX","label":"Christmas Island"},{"value":"CC","label":"Cocos (Keeling) Islands"},{"value":"CO","label":"Colombia"},{"value":"KM","label":"Komori"},{"value":"CG","label":"République du Congo"},{"value":"CD","label":"République démocratique du Congo"},{"value":"CK","label":"Cook Islands"},{"value":"CR","label":"Costa Rica"},{"value":"CI","label":"Côte d\'Ivoire"},{"value":"HR","label":"Hrvatska"},{"value":"CU","label":"Cuba"},{"value":"CW","label":"Curaçao"},{"value":"CY","label":"Κύπρος"},{"value":"CZ","label":"Česká republika"},{"value":"DK","label":"Danmark"},{"value":"DJ","label":"Djibouti"},{"value":"DM","label":"Dominica"},{"value":"DO","label":"República Dominicana"},{"value":"EC","label":"Ecuador"},{"value":"EG","label":"مصر‎"},{"value":"SV","label":"El Salvador"},{"value":"GQ","label":"Guinea Ecuatorial"},{"value":"ER","label":"ኤርትራ"},{"value":"EE","label":"Eesti"},{"value":"ET","label":"ኢትዮጵያ"},{"value":"FK","label":"Falkland Islands"},{"value":"FO","label":"Føroyar"},{"value":"FJ","label":"Fiji"},{"value":"FI","label":"Suomi"},{"value":"FR","label":"France"},{"value":"GF","label":"Guyane française"},{"value":"PF","label":"Polynésie française"},{"value":"TF","label":"Territoire des Terres australes et antarctiques fr"},{"value":"GA","label":"Gabon"},{"value":"GM","label":"Gambia"},{"value":"GE","label":"საქართველო"},{"value":"DE","label":"Deutschland"},{"value":"GH","label":"Ghana"},{"value":"GI","label":"Gibraltar"},{"value":"GR","label":"Ελλάδα"},{"value":"GL","label":"Kalaallit Nunaat"},{"value":"GD","label":"Grenada"},{"value":"GP","label":"Guadeloupe"},{"value":"GU","label":"Guam"},{"value":"GT","label":"Guatemala"},{"value":"GG","label":"Guernsey"},{"value":"GN","label":"Guinée"},{"value":"GW","label":"Guiné-Bissau"},{"value":"GY","label":"Guyana"},{"value":"HT","label":"Haïti"},{"value":"HM","label":"Heard Island and McDonald Islands"},{"value":"VA","label":"Vaticano"},{"value":"HN","label":"Honduras"},{"value":"HK","label":"香港"},{"value":"HU","label":"Magyarország"},{"value":"IS","label":"Ísland"},{"value":"IN","label":"भारत"},{"value":"ID","label":"Indonesia"},{"value":"IR","label":"ایران"},{"value":"IQ","label":"العراق"},{"value":"IE","label":"Éire"},{"value":"IM","label":"Isle of Man"},{"value":"IL","label":"יִשְׂרָאֵל"},{"value":"IT","label":"Italia"},{"value":"JM","label":"Jamaica"},{"value":"JP","label":"日本"},{"value":"JE","label":"Jersey"},{"value":"JO","label":"الأردن"},{"value":"KZ","label":"Қазақстан"},{"value":"KE","label":"Kenya"},{"value":"KI","label":"Kiribati"},{"value":"KP","label":"북한"},{"value":"KR","label":"대한민국"},{"value":"KW","label":"الكويت"},{"value":"KG","label":"Кыргызстан"},{"value":"LA","label":"ສປປລາວ"},{"value":"LV","label":"Latvija"},{"value":"LB","label":"لبنان"},{"value":"LS","label":"Lesotho"},{"value":"LR","label":"Liberia"},{"value":"LY","label":"‏ليبيا"},{"value":"LI","label":"Liechtenstein"},{"value":"LT","label":"Lietuva"},{"value":"LU","label":"Luxembourg"},{"value":"MO","label":"澳門"},{"value":"MK","label":"Северна Македонија"},{"value":"MG","label":"Madagasikara"},{"value":"MW","label":"Malawi"},{"value":"MY","label":"Malaysia"},{"value":"MV","label":"Maldives"},{"value":"ML","label":"Mali"},{"value":"MT","label":"Malta"},{"value":"MH","label":"M̧ajeļ"},{"value":"MQ","label":"Martinique"},{"value":"MR","label":"موريتانيا"},{"value":"MU","label":"Maurice"},{"value":"YT","label":"Mayotte"},{"value":"MX","label":"México"},{"value":"FM","label":"Micronesia"},{"value":"MD","label":"Moldova"},{"value":"MC","label":"Monaco"},{"value":"MN","label":"Монгол улс"},{"value":"ME","label":"Црна Гора"},{"value":"MS","label":"Montserrat"},{"value":"MA","label":"المغرب"},{"value":"MZ","label":"Moçambique"},{"value":"MM","label":"မြန်မာ"},{"value":"NA","label":"Namibia"},{"value":"NR","label":"Nauru"},{"value":"NP","label":"नपल"},{"value":"NL","label":"Nederland"},{"value":"NC","label":"Nouvelle-Calédonie"},{"value":"NZ","label":"New Zealand"},{"value":"NI","label":"Nicaragua"},{"value":"NE","label":"Niger"},{"value":"NG","label":"Nigeria"},{"value":"NU","label":"Niuē"},{"value":"NF","label":"Norfolk Island"},{"value":"MP","label":"Northern Mariana Islands"},{"value":"NO","label":"Norge"},{"value":"OM","label":"عمان"},{"value":"PK","label":"Pakistan"},{"value":"PW","label":"Palau"},{"value":"PS","label":"فلسطين"},{"value":"PA","label":"Panamá"},{"value":"PG","label":"Papua Niugini"},{"value":"PY","label":"Paraguay"},{"value":"PE","label":"Perú"},{"value":"PH","label":"Pilipinas"},{"value":"PN","label":"Pitcairn Islands"},{"value":"PL","label":"Polska"},{"value":"PT","label":"Portugal"},{"value":"PR","label":"Puerto Rico"},{"value":"QA","label":"قطر"},{"value":"RE","label":"La Réunion"},{"value":"RO","label":"România"},{"value":"RU","label":"Россия"},{"value":"RW","label":"Rwanda"},{"value":"BL","label":"Saint-Barthélemy"},{"value":"SH","label":"Saint Helena"},{"value":"KN","label":"Saint Kitts and Nevis"},{"value":"LC","label":"Saint Lucia"},{"value":"MF","label":"Saint-Martin"},{"value":"PM","label":"Saint-Pierre-et-Miquelon"},{"value":"VC","label":"Saint Vincent and the Grenadines"},{"value":"WS","label":"Samoa"},{"value":"SM","label":"San Marino"},{"value":"ST","label":"São Tomé e Príncipe"},{"value":"SA","label":"العربية السعودية"},{"value":"SN","label":"Sénégal"},{"value":"RS","label":"Србија"},{"value":"SC","label":"Seychelles"},{"value":"SL","label":"Sierra Leone"},{"value":"SG","label":"Singapore"},{"value":"SX","label":"Sint Maarten"},{"value":"SK","label":"Slovensko"},{"value":"SI","label":"Slovenija"},{"value":"SB","label":"Solomon Islands"},{"value":"SO","label":"Soomaaliya"},{"value":"ZA","label":"South Africa"},{"value":"GS","label":"South Georgia"},{"value":"SS","label":"South Sudan"},{"value":"ES","label":"España"},{"value":"LK","label":"śrī laṃkāva"},{"value":"SD","label":"السودان"},{"value":"SR","label":"Suriname"},{"value":"SJ","label":"Svalbard og Jan Mayen"},{"value":"SZ","label":"Swaziland"},{"value":"SE","label":"Sverige"},{"value":"CH","label":"Schweiz"},{"value":"SY","label":"سوريا"},{"value":"TW","label":"臺灣"},{"value":"TJ","label":"Тоҷикистон"},{"value":"TZ","label":"Tanzania"},{"value":"TH","label":"ประเทศไทย"},{"value":"TL","label":"Timor-Leste"},{"value":"TG","label":"Togo"},{"value":"TK","label":"Tokelau"},{"value":"TO","label":"Tonga"},{"value":"TT","label":"Trinidad and Tobago"},{"value":"TN","label":"تونس"},{"value":"TR","label":"Türkiye"},{"value":"TM","label":"Türkmenistan"},{"value":"TC","label":"Turks and Caicos Islands"},{"value":"TV","label":"Tuvalu"},{"value":"UG","label":"Uganda"},{"value":"UA","label":"Україна"},{"value":"AE","label":"دولة الإمارات العربية المتحدة"},{"value":"GB","label":"United Kingdom"},{"value":"US","label":"United States"},{"value":"UM","label":"United States Minor Outlying Islands"},{"value":"UY","label":"Uruguay"},{"value":"UZ","label":"O‘zbekiston"},{"value":"VU","label":"Vanuatu"},{"value":"VE","label":"Venezuela"},{"value":"VN","label":"Việt Nam"},{"value":"VG","label":"British Virgin Islands"},{"value":"VI","label":"United States Virgin Islands"},{"value":"WF","label":"Wallis et Futuna"},{"value":"EH","label":"الصحراء الغربية"},{"value":"YE","label":"اليَمَن"},{"value":"ZM","label":"Zambia"},{"value":"ZW","label":"Zimbabwe"}]')
    },
    2396: e => {
      "use strict";
      e.exports = JSON.parse('[{"value":"AF","label":"Afghanistan"},{"value":"AX","label":"Åland Islands"},{"value":"AL","label":"Albania"},{"value":"DZ","label":"Algeria"},{"value":"AS","label":"American Samoa"},{"value":"AD","label":"Andorra"},{"value":"AO","label":"Angola"},{"value":"AI","label":"Anguilla"},{"value":"AQ","label":"Antarctica"},{"value":"AG","label":"Antigua and Barbuda"},{"value":"AR","label":"Argentina"},{"value":"AM","label":"Armenia"},{"value":"AW","label":"Aruba"},{"value":"AU","label":"Australia"},{"value":"AT","label":"Austria"},{"value":"AZ","label":"Azerbaijan"},{"value":"BS","label":"Bahamas"},{"value":"BH","label":"Bahrain"},{"value":"BD","label":"Bangladesh"},{"value":"BB","label":"Barbados"},{"value":"BY","label":"Belarus"},{"value":"BE","label":"Belgium"},{"value":"BZ","label":"Belize"},{"value":"BJ","label":"Benin"},{"value":"BM","label":"Bermuda"},{"value":"BT","label":"Bhutan"},{"value":"BO","label":"Bolivia, Plurinational State of"},{"value":"BQ","label":"Bonaire, Sint Eustatius and Saba"},{"value":"BA","label":"Bosnia and Herzegovina"},{"value":"BW","label":"Botswana"},{"value":"BV","label":"Bouvet Island"},{"value":"BR","label":"Brazil"},{"value":"IO","label":"British Indian Ocean Territory"},{"value":"BN","label":"Brunei Darussalam"},{"value":"BG","label":"Bulgaria"},{"value":"BF","label":"Burkina Faso"},{"value":"BI","label":"Burundi"},{"value":"CV","label":"Cabo Verde"},{"value":"KH","label":"Cambodia"},{"value":"CM","label":"Cameroon"},{"value":"CA","label":"Canada"},{"value":"KY","label":"Cayman Islands"},{"value":"CF","label":"Central African Republic"},{"value":"TD","label":"Chad"},{"value":"CL","label":"Chile"},{"value":"CN","label":"China"},{"value":"CX","label":"Christmas Island"},{"value":"CC","label":"Cocos (Keeling) Islands"},{"value":"CO","label":"Colombia"},{"value":"KM","label":"Comoros"},{"value":"CG","label":"Congo"},{"value":"CD","label":"Congo, Democratic Republic of the"},{"value":"CK","label":"Cook Islands"},{"value":"CR","label":"Costa Rica"},{"value":"HR","label":"Croatia"},{"value":"CU","label":"Cuba"},{"value":"CW","label":"Curaçao"},{"value":"CY","label":"Cyprus"},{"value":"CZ","label":"Czechia"},{"value":"CI","label":"Côte d\'Ivoire"},{"value":"DK","label":"Denmark"},{"value":"DJ","label":"Djibouti"},{"value":"DM","label":"Dominica"},{"value":"DO","label":"Dominican Republic"},{"value":"EC","label":"Ecuador"},{"value":"EG","label":"Egypt"},{"value":"SV","label":"El Salvador"},{"value":"GQ","label":"Equatorial Guinea"},{"value":"ER","label":"Eritrea"},{"value":"EE","label":"Estonia"},{"value":"SZ","label":"Eswatini"},{"value":"ET","label":"Ethiopia"},{"value":"FK","label":"Falkland Islands (Malvinas)"},{"value":"FO","label":"Faroe Islands"},{"value":"FJ","label":"Fiji"},{"value":"FI","label":"Finland"},{"value":"FR","label":"France"},{"value":"GF","label":"French Guiana"},{"value":"PF","label":"French Polynesia"},{"value":"TF","label":"French Southern Territories"},{"value":"GA","label":"Gabon"},{"value":"GM","label":"Gambia"},{"value":"GE","label":"Georgia"},{"value":"DE","label":"Germany"},{"value":"GH","label":"Ghana"},{"value":"GI","label":"Gibraltar"},{"value":"GR","label":"Greece"},{"value":"GL","label":"Greenland"},{"value":"GD","label":"Grenada"},{"value":"GP","label":"Guadeloupe"},{"value":"GU","label":"Guam"},{"value":"GT","label":"Guatemala"},{"value":"GG","label":"Guernsey"},{"value":"GN","label":"Guinea"},{"value":"GW","label":"Guinea-Bissau"},{"value":"GY","label":"Guyana"},{"value":"HT","label":"Haiti"},{"value":"HM","label":"Heard Island and McDonald Islands"},{"value":"VA","label":"Holy See"},{"value":"HN","label":"Honduras"},{"value":"HK","label":"Hong Kong"},{"value":"HU","label":"Hungary"},{"value":"IS","label":"Iceland"},{"value":"IN","label":"India"},{"value":"ID","label":"Indonesia"},{"value":"IR","label":"Iran, Islamic Republic of"},{"value":"IQ","label":"Iraq"},{"value":"IE","label":"Ireland"},{"value":"IM","label":"Isle of Man"},{"value":"IL","label":"Israel"},{"value":"IT","label":"Italy"},{"value":"JM","label":"Jamaica"},{"value":"JP","label":"Japan"},{"value":"JE","label":"Jersey"},{"value":"JO","label":"Jordan"},{"value":"KZ","label":"Kazakhstan"},{"value":"KE","label":"Kenya"},{"value":"KI","label":"Kiribati"},{"value":"KP","label":"Korea, Democratic People\'s Republic of"},{"value":"KR","label":"Korea, Republic of"},{"value":"KW","label":"Kuwait"},{"value":"KG","label":"Kyrgyzstan"},{"value":"LA","label":"Lao People\'s Democratic Republic"},{"value":"LV","label":"Latvia"},{"value":"LB","label":"Lebanon"},{"value":"LS","label":"Lesotho"},{"value":"LR","label":"Liberia"},{"value":"LY","label":"Libya"},{"value":"LI","label":"Liechtenstein"},{"value":"LT","label":"Lithuania"},{"value":"LU","label":"Luxembourg"},{"value":"MO","label":"Macao"},{"value":"MG","label":"Madagascar"},{"value":"MW","label":"Malawi"},{"value":"MY","label":"Malaysia"},{"value":"MV","label":"Maldives"},{"value":"ML","label":"Mali"},{"value":"MT","label":"Malta"},{"value":"MH","label":"Marshall Islands"},{"value":"MQ","label":"Martinique"},{"value":"MR","label":"Mauritania"},{"value":"MU","label":"Mauritius"},{"value":"YT","label":"Mayotte"},{"value":"MX","label":"Mexico"},{"value":"FM","label":"Micronesia, Federated States of"},{"value":"MD","label":"Moldova, Republic of"},{"value":"MC","label":"Monaco"},{"value":"MN","label":"Mongolia"},{"value":"ME","label":"Montenegro"},{"value":"MS","label":"Montserrat"},{"value":"MA","label":"Morocco"},{"value":"MZ","label":"Mozambique"},{"value":"MM","label":"Myanmar"},{"value":"NA","label":"Namibia"},{"value":"NR","label":"Nauru"},{"value":"NP","label":"Nepal"},{"value":"NL","label":"Netherlands"},{"value":"NC","label":"New Caledonia"},{"value":"NZ","label":"New Zealand"},{"value":"NI","label":"Nicaragua"},{"value":"NE","label":"Niger"},{"value":"NG","label":"Nigeria"},{"value":"NU","label":"Niue"},{"value":"NF","label":"Norfolk Island"},{"value":"MK","label":"North Macedonia"},{"value":"MP","label":"Northern Mariana Islands"},{"value":"NO","label":"Norway"},{"value":"OM","label":"Oman"},{"value":"PK","label":"Pakistan"},{"value":"PW","label":"Palau"},{"value":"PS","label":"Palestine, State of"},{"value":"PA","label":"Panama"},{"value":"PG","label":"Papua New Guinea"},{"value":"PY","label":"Paraguay"},{"value":"PE","label":"Peru"},{"value":"PH","label":"Philippines"},{"value":"PN","label":"Pitcairn"},{"value":"PL","label":"Poland"},{"value":"PT","label":"Portugal"},{"value":"PR","label":"Puerto Rico"},{"value":"QA","label":"Qatar"},{"value":"RO","label":"Romania"},{"value":"RU","label":"Russian Federation"},{"value":"RW","label":"Rwanda"},{"value":"RE","label":"Réunion"},{"value":"BL","label":"Saint Barthélemy"},{"value":"SH","label":"Saint Helena, Ascension and Tristan da Cunha"},{"value":"KN","label":"Saint Kitts and Nevis"},{"value":"LC","label":"Saint Lucia"},{"value":"MF","label":"Saint Martin (French part)"},{"value":"PM","label":"Saint Pierre and Miquelon"},{"value":"VC","label":"Saint Vincent and the Grenadines"},{"value":"WS","label":"Samoa"},{"value":"SM","label":"San Marino"},{"value":"ST","label":"Sao Tome and Principe"},{"value":"SA","label":"Saudi Arabia"},{"value":"SN","label":"Senegal"},{"value":"RS","label":"Serbia"},{"value":"SC","label":"Seychelles"},{"value":"SL","label":"Sierra Leone"},{"value":"SG","label":"Singapore"},{"value":"SX","label":"Sint Maarten (Dutch part)"},{"value":"SK","label":"Slovakia"},{"value":"SI","label":"Slovenia"},{"value":"SB","label":"Solomon Islands"},{"value":"SO","label":"Somalia"},{"value":"ZA","label":"South Africa"},{"value":"GS","label":"South Georgia and the South Sandwich Islands"},{"value":"SS","label":"South Sudan"},{"value":"ES","label":"Spain"},{"value":"LK","label":"Sri Lanka"},{"value":"SD","label":"Sudan"},{"value":"SR","label":"Suriname"},{"value":"SJ","label":"Svalbard and Jan Mayen"},{"value":"SE","label":"Sweden"},{"value":"CH","label":"Switzerland"},{"value":"SY","label":"Syrian Arab Republic"},{"value":"TW","label":"Taiwan, Province of China"},{"value":"TJ","label":"Tajikistan"},{"value":"TZ","label":"Tanzania, United Republic of"},{"value":"TH","label":"Thailand"},{"value":"TL","label":"Timor-Leste"},{"value":"TG","label":"Togo"},{"value":"TK","label":"Tokelau"},{"value":"TO","label":"Tonga"},{"value":"TT","label":"Trinidad and Tobago"},{"value":"TN","label":"Tunisia"},{"value":"TR","label":"Turkey"},{"value":"TM","label":"Turkmenistan"},{"value":"TC","label":"Turks and Caicos Islands"},{"value":"TV","label":"Tuvalu"},{"value":"UG","label":"Uganda"},{"value":"UA","label":"Ukraine"},{"value":"AE","label":"United Arab Emirates"},{"value":"GB","label":"United Kingdom"},{"value":"UM","label":"United States Minor Outlying Islands"},{"value":"US","label":"United States"},{"value":"UY","label":"Uruguay"},{"value":"UZ","label":"Uzbekistan"},{"value":"VU","label":"Vanuatu"},{"value":"VE","label":"Venezuela, Bolivarian Republic of"},{"value":"VN","label":"Viet Nam"},{"value":"VG","label":"Virgin Islands, British"},{"value":"VI","label":"Virgin Islands, U.S."},{"value":"WF","label":"Wallis and Futuna"},{"value":"EH","label":"Western Sahara"},{"value":"YE","label":"Yemen"},{"value":"ZM","label":"Zambia"},{"value":"ZW","label":"Zimbabwe"}]')
    }
  }
]);