! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      n = (new Error).stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "9e73c6da-0eb1-4922-b238-a310b9893861", e._sentryDebugIdIdentifier = "sentry-dbid-9e73c6da-0eb1-4922-b238-a310b9893861")
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
  [472], {
    21472: (e, n, t) => {
      t.r(n), t.d(n, {
        AutoFocusInside: () => Ce,
        FocusLockUI: () => x,
        FreeFocusInside: () => Ue,
        InFocusGuard: () => v,
        MoveFocusInside: () => Re,
        default: () => Ge,
        useFocusInside: () => Pe
      });
      var r = t(31632),
        o = t(82795),
        u = t(51664),
        a = t.n(u),
        i = "data-focus-lock",
        c = "data-focus-lock-disabled",
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
      var m = t(87672);

      function p(e) {
        return e
      }

      function b(e, n) {
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

      function h(e, n) {
        return void 0 === n && (n = p), b(e, n)
      }
      var g = h({}, (function(e) {
          return {
            target: e.target,
            currentTarget: e.currentTarget
          }
        })),
        y = h(),
        E = h(),
        w = function(e) {
          void 0 === e && (e = {});
          var n = b(null);
          return n.options = (0, m.C3)({
            async: !0,
            ssr: !1
          }, e), n
        }({
          async: !0
        }),
        N = [],
        I = u.forwardRef((function(e, n) {
          var t, r = u.useState(),
            a = r[0],
            d = r[1],
            f = u.useRef(),
            l = u.useRef(!1),
            v = u.useRef(null),
            m = e.children,
            p = e.disabled,
            b = e.noFocusGuards,
            h = e.persistentFocus,
            E = e.crossFrame,
            I = e.autoFocus,
            x = (e.allowTextSelection, e.group),
            O = e.className,
            k = e.whiteList,
            F = e.hasPositiveIndices,
            M = e.shards,
            T = void 0 === M ? N : M,
            _ = e.as,
            D = void 0 === _ ? "div" : _,
            A = e.lockProps,
            S = void 0 === A ? {} : A,
            C = e.sideCar,
            P = e.returnFocus,
            L = e.focusOptions,
            R = e.onActivation,
            B = e.onDeactivation,
            U = u.useState({})[0],
            G = u.useCallback((function() {
              v.current = v.current || document && document.activeElement, f.current && R && R(f.current), l.current = !0
            }), [R]),
            j = u.useCallback((function() {
              l.current = !1, B && B(f.current)
            }), [B]);
          (0, u.useEffect)((function() {
            p || (v.current = null)
          }), []);
          var W, q, H, V, Y, K = u.useCallback((function(e) {
              var n = v.current;
              if (n && n.focus) {
                var t = "function" == typeof P ? P(n) : P;
                if (t) {
                  var r = "object" == typeof t ? t : void 0;
                  v.current = null, e ? Promise.resolve().then((function() {
                    return n.focus(r)
                  })) : n.focus(r)
                }
              }
            }), [P]),
            z = u.useCallback((function(e) {
              l.current && g.useMedium(e)
            }), []),
            J = y.useMedium,
            Q = u.useCallback((function(e) {
              f.current !== e && (f.current = e, d(e))
            }), []),
            X = (0, o.c)(((t = {})[c] = p && "disabled", t[i] = x, t), S),
            Z = !0 !== b,
            $ = Z && "tail" !== b,
            ee = (W = [n, Q], H = q || null, V = function(e) {
              return W.forEach((function(n) {
                return function(e, n) {
                  return "function" == typeof e ? e(n) : e && (e.current = n), e
                }(n, e)
              }))
            }, (Y = (0, u.useState)((function() {
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
          return u.createElement(u.Fragment, null, Z && [u.createElement("div", {
            key: "guard-first",
            "data-focus-guard": !0,
            tabIndex: p ? -1 : 0,
            style: s
          }), F ? u.createElement("div", {
            key: "guard-nearest",
            "data-focus-guard": !0,
            tabIndex: p ? -1 : 1,
            style: s
          }) : null], !p && u.createElement(C, {
            id: U,
            sideCar: w,
            observed: a,
            disabled: p,
            persistentFocus: h,
            crossFrame: E,
            autoFocus: I,
            whiteList: k,
            shards: T,
            onActivation: G,
            onDeactivation: j,
            returnFocus: K,
            focusOptions: L
          }), u.createElement(D, (0, o.c)({
            ref: ee
          }, X, {
            className: O,
            onBlur: J,
            onFocus: z
          }), m), $ && u.createElement("div", {
            "data-focus-guard": !0,
            tabIndex: p ? -1 : 0,
            style: s
          }))
        }));
      I.propTypes = {}, I.defaultProps = {
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
      const x = I;
      var O = t(74848),
        k = t(62504);
      var F = function(e) {
          for (var n = Array(e.length), t = 0; t < e.length; ++t) n[t] = e[t];
          return n
        },
        M = function(e) {
          return Array.isArray(e) ? e : [e]
        },
        T = function(e) {
          return Array.isArray(e) ? e[0] : e
        },
        _ = function(e) {
          return e.parentNode && e.parentNode.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? e.parentNode.host : e.parentNode
        },
        D = function(e) {
          return e === document || e && e.nodeType === Node.DOCUMENT_NODE
        },
        A = function(e, n) {
          var t = e.get(n);
          if (void 0 !== t) return t;
          var r = function(e, n) {
            return !e || D(e) || ! function(e) {
              if (e.nodeType !== Node.ELEMENT_NODE) return !1;
              var n = window.getComputedStyle(e, null);
              return !(!n || !n.getPropertyValue || "none" !== n.getPropertyValue("display") && "hidden" !== n.getPropertyValue("visibility"))
            }(e) && n(_(e))
          }(n, A.bind(void 0, e));
          return e.set(n, r), r
        },
        S = function(e, n) {
          var t = e.get(n);
          if (void 0 !== t) return t;
          var r = function(e, n) {
            return !(e && !D(e)) || !!R(e) && n(_(e))
          }(n, S.bind(void 0, e));
          return e.set(n, r), r
        },
        C = function(e) {
          return e.dataset
        },
        P = function(e) {
          return "INPUT" === e.tagName
        },
        L = function(e) {
          return P(e) && "radio" === e.type
        },
        R = function(e) {
          var n = e.getAttribute("data-no-autofocus");
          return ![!0, "true", ""].includes(n)
        },
        B = function(e) {
          var n;
          return Boolean(e && (null === (n = C(e)) || void 0 === n ? void 0 : n.focusGuard))
        },
        U = function(e) {
          return !B(e)
        },
        G = function(e) {
          return Boolean(e)
        },
        j = function(e, n) {
          var t = e.tabIndex - n.tabIndex,
            r = e.index - n.index;
          if (t) {
            if (!e.tabIndex) return 1;
            if (!n.tabIndex) return -1
          }
          return t || r
        },
        W = function(e, n, t) {
          return F(e).map((function(e, n) {
            return {
              node: e,
              index: n,
              tabIndex: t && -1 === e.tabIndex ? (e.dataset || {}).focusGuard ? 0 : -1 : e.tabIndex
            }
          })).filter((function(e) {
            return !n || e.tabIndex >= 0
          })).sort(j)
        },
        q = ["button:enabled", "select:enabled", "textarea:enabled", "input:enabled", "a[href]", "area[href]", "summary", "iframe", "object", "embed", "audio[controls]", "video[controls]", "[tabindex]", "[contenteditable]", "[autofocus]"].join(","),
        H = "".concat(q, ", [data-focus-guard]"),
        V = function(e, n) {
          return F((e.shadowRoot || e).children).reduce((function(e, t) {
            return e.concat(t.matches(n ? H : q) ? [t] : [], V(t))
          }), [])
        },
        Y = function(e, n) {
          return e.reduce((function(e, t) {
            var r, o = V(t, n),
              u = (r = []).concat.apply(r, o.map((function(e) {
                return function(e, n) {
                  var t;
                  return e instanceof HTMLIFrameElement && (null === (t = e.contentDocument) || void 0 === t ? void 0 : t.body) ? Y([e.contentDocument.body], n) : [e]
                }(e, n)
              })));
            return e.concat(u, t.parentNode ? F(t.parentNode.querySelectorAll(q)).filter((function(e) {
              return e === t
            })) : [])
          }), [])
        },
        K = function(e, n) {
          return F(e).filter((function(e) {
            return A(n, e)
          })).filter((function(e) {
            return function(e) {
              return !((P(e) || function(e) {
                return "BUTTON" === e.tagName
              }(e)) && ("hidden" === e.type || e.disabled))
            }(e)
          }))
        },
        z = function(e, n) {
          return void 0 === n && (n = new Map), F(e).filter((function(e) {
            return S(n, e)
          }))
        },
        J = function(e, n, t) {
          return W(K(Y(e, t), n), !0, t)
        },
        Q = function(e, n) {
          return W(K(Y(e), n), !1)
        },
        X = function(e, n) {
          return e.shadowRoot ? X(e.shadowRoot, n) : !(void 0 === Object.getPrototypeOf(e).contains || !Object.getPrototypeOf(e).contains.call(e, n)) || F(e.children).some((function(e) {
            var t;
            if (e instanceof HTMLIFrameElement) {
              var r = null === (t = e.contentDocument) || void 0 === t ? void 0 : t.body;
              return !!r && X(r, n)
            }
            return X(e, n)
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
          return M(e).filter(Boolean).reduce((function(e, n) {
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
            }(F($(n).querySelectorAll("[".concat(i, '="').concat(t, '"]:not([').concat(c, '="disabled"])')))) : [n]), e
          }), [])
        },
        ne = function(e, n) {
          return void 0 === n && (n = Z(T(e).ownerDocument)), !(!n || n.dataset && n.dataset.focusGuard) && ee(e).some((function(e) {
            return X(e, n) || function(e, n) {
              return Boolean(F(e.querySelectorAll("iframe")).some((function(e) {
                return function(e, n) {
                  return e === n
                }(e, n)
              })))
            }(e, n)
          }))
        },
        te = function(e, n) {
          return L(e) && e.name ? function(e, n) {
            return n.filter(L).filter((function(n) {
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
        ae = function(e, n) {
          return void 0 === n && (n = []), n.push(e), e.parentNode && ae(e.parentNode.host || e.parentNode, n), n
        },
        ie = function(e, n) {
          for (var t = ae(e), r = ae(n), o = 0; o < t.length; o += 1) {
            var u = t[o];
            if (r.indexOf(u) >= 0) return u
          }
          return !1
        },
        ce = function(e, n, t) {
          var r = M(e),
            o = M(n),
            u = r[0],
            a = !1;
          return o.filter(Boolean).forEach((function(e) {
            a = ie(a || e, e) || a, t.filter(Boolean).forEach((function(e) {
              var n = ie(u, e);
              n && (a = !a || X(n, a) ? n : ie(n, a))
            }))
          })), a
        },
        de = function(e, n) {
          var t, r, o, u, a, i, c = Z(M(e).length > 0 ? document : T(e).ownerDocument),
            d = ee(e).filter(U),
            s = ce(c || e, e, d),
            l = new Map,
            v = Q(d, l),
            m = J(d, l).filter((function(e) {
              var n = e.node;
              return U(n)
            }));
          if (m[0] || (m = v)[0]) {
            var p, b, h, g = Q([s], l).map((function(e) {
                return e.node
              })),
              y = (p = g, b = m, h = new Map, b.forEach((function(e) {
                return h.set(e.node, e)
              })), p.map((function(e) {
                return h.get(e)
              })).filter(G)),
              E = y.map((function(e) {
                return e.node
              })),
              w = function(e, n, t, r) {
                var o = e.length,
                  u = e[0],
                  a = e[o - 1],
                  i = B(t);
                if (!(t && e.indexOf(t) >= 0)) {
                  var c, d, f = void 0 !== t ? n.indexOf(t) : -1,
                    s = r ? n.indexOf(r) : f,
                    l = r ? e.indexOf(r) : -1,
                    v = f - s,
                    m = n.indexOf(u),
                    p = n.indexOf(a),
                    b = (c = n, d = new Set, c.forEach((function(e) {
                      return d.add(te(e, c))
                    })), c.filter((function(e) {
                      return d.has(e)
                    }))),
                    h = (void 0 !== t ? b.indexOf(t) : -1) - (r ? b.indexOf(r) : f),
                    g = oe(e, 0),
                    y = oe(e, o - 1);
                  return -1 === f || -1 === l ? ue : !v && l >= 0 ? l : f <= m && i && Math.abs(v) > 1 ? y : f >= p && i && Math.abs(v) > 1 ? g : v && Math.abs(h) > 1 ? l : f <= m ? y : f > p ? g : v ? Math.abs(v) > 1 ? l : (o + l + v) % o : void 0
                }
              }(E, g, c, n);
            if (w === ue) {
              var N = (t = v, r = E, o = function(e, n) {
                return e.reduce((function(e, t) {
                  return e.concat(function(e, n) {
                    return K((t = e.querySelectorAll("[".concat(f, "]")), F(t).map((function(e) {
                      return Y([e])
                    })).reduce((function(e, n) {
                      return e.concat(n)
                    }), [])), n);
                    var t
                  }(t, n))
                }), [])
              }(d, l), a = t.map((function(e) {
                return e.node
              })), (i = z(a.filter((u = o, function(e) {
                var n, t = null === (n = C(e)) || void 0 === n ? void 0 : n.autofocus;
                return e.autofocus || void 0 !== t && "false" !== t || u.indexOf(e) >= 0
              })))) && i.length ? re(i) : re(z(r)));
              return N ? {
                node: N
              } : void console.warn("focus-lock: cannot find any node to move focus into")
            }
            return void 0 === w ? w : y[w]
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
      var me = function(e, n) {
          var t = {};
          return t[e] = n, t
        },
        pe = null,
        be = null,
        he = null,
        ge = !1,
        ye = function() {
          return !0
        };

      function Ee(e, n, t, r) {
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
      var we = function(e) {
          return e && "current" in e ? e.current : e
        },
        Ne = function e(n, t, r) {
          return t && (t.host === n && (!t.activeElement || r.contains(t.activeElement)) || t.parentNode && e(n, t.parentNode, r))
        },
        Ie = function() {
          var e, n, t, r, o, u, a, i = !1;
          if (pe) {
            var c = pe,
              f = c.observed,
              s = c.persistentFocus,
              l = c.autoFocus,
              v = c.shards,
              m = c.crossFrame,
              p = c.focusOptions,
              b = f || he && he.portaledElement,
              h = document && document.activeElement;
            if (b) {
              var g = [b].concat(v.map(we).filter(Boolean));
              if (h && ! function(e) {
                  return (pe.whiteList || ye)(e)
                }(h) || (s || (m ? Boolean(ge) : "meanwhile" === ge) || !(document && document.activeElement === document.body || function(e) {
                  void 0 === e && (e = document);
                  var n = Z(e);
                  return !!n && F(e.querySelectorAll("[".concat(d, "]"))).some((function(e) {
                    return X(e, n)
                  }))
                }()) || !be && l) && (b && !(ne(g) || h && function(e, n) {
                  return n.some((function(n) {
                    return Ne(e, n, n)
                  }))
                }(h, g) || (a = h, he && he.portaledElement === a)) && (document && !be && h && !l ? (h.blur && h.blur(), document.body.focus()) : (i = le(g, be, {
                  focusOptions: p
                }), he = {})), ge = !1, be = document && document.activeElement), document) {
                var y = document && document.activeElement,
                  E = (n = ee(e = g).filter(U), t = ce(e, e, n), r = new Map, o = J([t], r, !0), u = J(n, r).filter((function(e) {
                    var n = e.node;
                    return U(n)
                  })).map((function(e) {
                    return e.node
                  })), o.map((function(e) {
                    var n = e.node;
                    return {
                      node: n,
                      index: e.index,
                      lockItem: u.indexOf(n) >= 0,
                      guard: B(n)
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
                })), Ee(w, E.length, 1, E), Ee(w, -1, -1, E))
              }
            }
          }
          return i
        },
        xe = function(e) {
          Ie() && e && (e.stopPropagation(), e.preventDefault())
        },
        Oe = function() {
          return ve(Ie)
        },
        ke = function() {
          ge = "just", ve((function() {
            ge = "meanwhile"
          }))
        };
      g.assignSyncMedium((function(e) {
        var n = e.target,
          t = e.currentTarget;
        t.contains(n) || (he = {
          observerNode: t,
          portaledElement: n
        })
      })), y.assignMedium(Oe), E.assignMedium((function(e) {
        return e({
          moveFocusInside: le,
          focusInside: ne
        })
      }));
      const Fe = (Me = function(e) {
        return e.filter((function(e) {
          return !e.disabled
        }))
      }, Te = function(e) {
        var n = e.slice(-1)[0];
        n && !pe && (document.addEventListener("focusin", xe), document.addEventListener("focusout", Oe), window.addEventListener("blur", ke));
        var t = pe,
          r = t && n && n.id === t.id;
        pe = n, t && !r && (t.onDeactivation(), e.filter((function(e) {
          return e.id === t.id
        })).length || t.returnFocus(!n)), n ? (be = null, r && t.observed === n.observed || n.onActivation(), Ie(), ve(Ie)) : (document.removeEventListener("focusin", xe), document.removeEventListener("focusout", Oe), window.removeEventListener("blur", ke), be = null)
      }, function(e) {
        var n, t = [];

        function r() {
          n = Me(t.map((function(e) {
            return e.props
          }))), Te(n)
        }
        var o = function(o) {
          var u, i;

          function c() {
            return o.apply(this, arguments) || this
          }
          i = o, (u = c).prototype = Object.create(i.prototype), u.prototype.constructor = u, (0, O.c)(u, i), c.peek = function() {
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
        return (0, k.c)(o, "displayName", "SideEffect(" + function(e) {
          return e.displayName || e.name || "Component"
        }(e) + ")"), o
      })((function() {
        return null
      }));
      var Me, Te, _e = u.forwardRef((function(e, n) {
          return u.createElement(x, (0, o.c)({
            sideCar: Fe,
            ref: n
          }, e))
        })),
        De = x.propTypes || {};
      De.sideCar, (0, r.c)(De, ["sideCar"]), _e.propTypes = {};
      const Ae = _e;
      var Se = function(e) {
        var n = e.disabled,
          t = void 0 !== n && n,
          r = e.children,
          a = e.className,
          i = void 0 === a ? void 0 : a;
        return u.createElement("div", (0, o.c)({}, me(f, !t), {
          className: i
        }), r)
      };
      Se.propTypes = {};
      const Ce = Se;
      var Pe = function(e) {
        u.useEffect((function() {
          var n = !0;
          return E.useMedium((function(t) {
              var r = e && e.current;
              n && r && (t.focusInside(r) || t.moveFocusInside(r, null))
            })),
            function() {
              n = !1
            }
        }), [e])
      };

      function Le(e) {
        var n = e.disabled,
          t = e.className,
          r = e.children,
          a = u.useRef(null);
        return Pe(n ? void 0 : a), u.createElement("div", (0, o.c)({}, me(f, !n), {
          ref: a,
          className: t
        }), r)
      }
      Le.propTypes = {}, Le.defaultProps = {
        disabled: !1,
        className: void 0
      };
      const Re = Le;
      var Be = function(e) {
        var n = e.children,
          t = e.className;
        return u.createElement("div", (0, o.c)({}, me(d, !0), {
          className: t
        }), n)
      };
      Be.propTypes = {}, Be.defaultProps = {
        className: void 0
      };
      const Ue = Be,
        Ge = Ae
    }
  }
]);
//# sourceMappingURL=3daea61f72f06c25857b0d3a3ae9f4af.js.map