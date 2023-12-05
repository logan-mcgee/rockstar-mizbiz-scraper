/*! For license information please see 4dec7e7084fc24a5b0fe3a32d9f16a9e.js.LICENSE.txt */
"use strict";
(self.webpackChunk_rockstargames_sites_gta = self.webpackChunk_rockstargames_sites_gta || []).push([
  [368], {
    7421: (n, e, t) => {
      t.d(e, {
        ZP: () => Cn
      });
      var r = t(4975),
        o = t(927),
        u = t.n(o),
        a = "data-focus-lock",
        i = "data-focus-lock-disabled",
        c = t(458),
        d = {
          width: "1px",
          height: "0px",
          padding: 0,
          overflow: "hidden",
          position: "fixed",
          top: "1px",
          left: "1px"
        },
        f = function(n) {
          var e = n.children;
          return o.createElement(o.Fragment, null, o.createElement("div", {
            key: "guard-first",
            "data-focus-guard": !0,
            "data-focus-auto-guard": !0,
            style: d
          }), e, e && o.createElement("div", {
            key: "guard-last",
            "data-focus-guard": !0,
            "data-focus-auto-guard": !0,
            style: d
          }))
        };
      f.propTypes = {}, f.defaultProps = {
        children: null
      };
      var l = t(8075),
        s = (0, l.s)({}, (function(n) {
          return {
            target: n.target,
            currentTarget: n.currentTarget
          }
        })),
        v = (0, l.s)(),
        p = (0, l.s)(),
        m = (0, l._)({
          async: !0
        }),
        h = [],
        g = o.forwardRef((function(n, e) {
          var t, u = o.useState(),
            f = u[0],
            l = u[1],
            p = o.useRef(),
            g = o.useRef(!1),
            y = o.useRef(null),
            b = n.children,
            w = n.disabled,
            E = n.noFocusGuards,
            O = n.persistentFocus,
            x = n.crossFrame,
            N = n.autoFocus,
            S = (n.allowTextSelection, n.group),
            C = n.className,
            k = n.whiteList,
            T = n.hasPositiveIndices,
            P = n.shards,
            M = void 0 === P ? h : P,
            _ = n.as,
            I = void 0 === _ ? "div" : _,
            R = n.lockProps,
            L = void 0 === R ? {} : R,
            F = n.sideCar,
            j = n.returnFocus,
            A = n.focusOptions,
            D = n.onActivation,
            B = n.onDeactivation,
            W = o.useState({})[0],
            U = o.useCallback((function() {
              y.current = y.current || document && document.activeElement, p.current && D && D(p.current), g.current = !0
            }), [D]),
            Z = o.useCallback((function() {
              g.current = !1, B && B(p.current)
            }), [B]);
          (0, o.useEffect)((function() {
            w || (y.current = null)
          }), []);
          var Y = o.useCallback((function(n) {
              var e = y.current;
              if (e && e.focus) {
                var t = "function" == typeof j ? j(e) : j;
                if (t) {
                  var r = "object" == typeof t ? t : void 0;
                  y.current = null, n ? Promise.resolve().then((function() {
                    return e.focus(r)
                  })) : e.focus(r)
                }
              }
            }), [j]),
            q = o.useCallback((function(n) {
              g.current && s.useMedium(n)
            }), []),
            G = v.useMedium,
            X = o.useCallback((function(n) {
              p.current !== n && (p.current = n, l(n))
            }), []),
            H = (0, r.Z)(((t = {})[i] = w && "disabled", t[a] = S, t), L),
            V = !0 !== E,
            z = V && "tail" !== E,
            $ = (0, c.q)([e, X]);
          return o.createElement(o.Fragment, null, V && [o.createElement("div", {
            key: "guard-first",
            "data-focus-guard": !0,
            tabIndex: w ? -1 : 0,
            style: d
          }), T ? o.createElement("div", {
            key: "guard-nearest",
            "data-focus-guard": !0,
            tabIndex: w ? -1 : 1,
            style: d
          }) : null], !w && o.createElement(F, {
            id: W,
            sideCar: m,
            observed: f,
            disabled: w,
            persistentFocus: O,
            crossFrame: x,
            autoFocus: N,
            whiteList: k,
            shards: M,
            onActivation: U,
            onDeactivation: Z,
            returnFocus: Y,
            focusOptions: A
          }), o.createElement(I, (0, r.Z)({
            ref: $
          }, H, {
            className: C,
            onBlur: G,
            onFocus: q
          }), b), z && o.createElement("div", {
            "data-focus-guard": !0,
            tabIndex: w ? -1 : 0,
            style: d
          }))
        }));
      g.propTypes = {}, g.defaultProps = {
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
      const y = g;

      function b(n, e) {
        return b = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, e) {
          return n.__proto__ = e, n
        }, b(n, e)
      }

      function w(n) {
        return w = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(n) {
          return typeof n
        } : function(n) {
          return n && "function" == typeof Symbol && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n
        }, w(n)
      }
      var E = function(n) {
          for (var e = Array(n.length), t = 0; t < n.length; ++t) e[t] = n[t];
          return e
        },
        O = function(n) {
          return Array.isArray(n) ? n : [n]
        },
        x = function(n) {
          return Array.isArray(n) ? n[0] : n
        },
        N = function(n) {
          return n.parentNode && n.parentNode.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? n.parentNode.host : n.parentNode
        },
        S = function(n) {
          return n === document || n && n.nodeType === Node.DOCUMENT_NODE
        },
        C = function(n, e) {
          var t = n.get(e);
          if (void 0 !== t) return t;
          var r = function(n, e) {
            return !n || S(n) || ! function(n) {
              if (n.nodeType !== Node.ELEMENT_NODE) return !1;
              var e = window.getComputedStyle(n, null);
              return !(!e || !e.getPropertyValue || "none" !== e.getPropertyValue("display") && "hidden" !== e.getPropertyValue("visibility"))
            }(n) && e(N(n))
          }(e, C.bind(void 0, n));
          return n.set(e, r), r
        },
        k = function(n, e) {
          var t = n.get(e);
          if (void 0 !== t) return t;
          var r = function(n, e) {
            return !(n && !S(n)) || !!_(n) && e(N(n))
          }(e, k.bind(void 0, n));
          return n.set(e, r), r
        },
        T = function(n) {
          return n.dataset
        },
        P = function(n) {
          return "INPUT" === n.tagName
        },
        M = function(n) {
          return P(n) && "radio" === n.type
        },
        _ = function(n) {
          var e = n.getAttribute("data-no-autofocus");
          return ![!0, "true", ""].includes(e)
        },
        I = function(n) {
          var e;
          return Boolean(n && (null === (e = T(n)) || void 0 === e ? void 0 : e.focusGuard))
        },
        R = function(n) {
          return !I(n)
        },
        L = function(n) {
          return Boolean(n)
        },
        F = function(n, e) {
          var t = n.tabIndex - e.tabIndex,
            r = n.index - e.index;
          if (t) {
            if (!n.tabIndex) return 1;
            if (!e.tabIndex) return -1
          }
          return t || r
        },
        j = function(n, e, t) {
          return E(n).map((function(n, e) {
            return {
              node: n,
              index: e,
              tabIndex: t && -1 === n.tabIndex ? (n.dataset || {}).focusGuard ? 0 : -1 : n.tabIndex
            }
          })).filter((function(n) {
            return !e || n.tabIndex >= 0
          })).sort(F)
        },
        A = ["button:enabled", "select:enabled", "textarea:enabled", "input:enabled", "a[href]", "area[href]", "summary", "iframe", "object", "embed", "audio[controls]", "video[controls]", "[tabindex]", "[contenteditable]", "[autofocus]"].join(","),
        D = "".concat(A, ", [data-focus-guard]"),
        B = function(n, e) {
          return E((n.shadowRoot || n).children).reduce((function(n, t) {
            return n.concat(t.matches(e ? D : A) ? [t] : [], B(t))
          }), [])
        },
        W = function(n, e) {
          return n.reduce((function(n, t) {
            var r, o = B(t, e),
              u = (r = []).concat.apply(r, o.map((function(n) {
                return function(n, e) {
                  var t;
                  return n instanceof HTMLIFrameElement && (null === (t = n.contentDocument) || void 0 === t ? void 0 : t.body) ? W([n.contentDocument.body], e) : [n]
                }(n, e)
              })));
            return n.concat(u, t.parentNode ? E(t.parentNode.querySelectorAll(A)).filter((function(n) {
              return n === t
            })) : [])
          }), [])
        },
        U = function(n, e) {
          return E(n).filter((function(n) {
            return C(e, n)
          })).filter((function(n) {
            return function(n) {
              return !((P(n) || function(n) {
                return "BUTTON" === n.tagName
              }(n)) && ("hidden" === n.type || n.disabled))
            }(n)
          }))
        },
        Z = function(n, e) {
          return void 0 === e && (e = new Map), E(n).filter((function(n) {
            return k(e, n)
          }))
        },
        Y = function(n, e, t) {
          return j(U(W(n, t), e), !0, t)
        },
        q = function(n, e) {
          return j(U(W(n), e), !1)
        },
        G = function(n, e) {
          return n.shadowRoot ? G(n.shadowRoot, e) : !(void 0 === Object.getPrototypeOf(n).contains || !Object.getPrototypeOf(n).contains.call(n, e)) || E(n.children).some((function(n) {
            var t;
            if (n instanceof HTMLIFrameElement) {
              var r = null === (t = n.contentDocument) || void 0 === t ? void 0 : t.body;
              return !!r && G(r, e)
            }
            return G(n, e)
          }))
        },
        X = function(n) {
          if (void 0 === n && (n = document), n && n.activeElement) {
            var e = n.activeElement;
            return e.shadowRoot ? X(e.shadowRoot) : e instanceof HTMLIFrameElement && function(n) {
              try {
                return e.contentWindow.document
              } catch (n) {
                return
              }
            }() ? X(e.contentWindow.document) : e
          }
        },
        H = function(n) {
          return n.parentNode ? H(n.parentNode) : n
        },
        V = function(n) {
          return O(n).filter(Boolean).reduce((function(n, e) {
            var t = e.getAttribute(a);
            return n.push.apply(n, t ? function(n) {
              for (var e = new Set, t = n.length, r = 0; r < t; r += 1)
                for (var o = r + 1; o < t; o += 1) {
                  var u = n[r].compareDocumentPosition(n[o]);
                  (u & Node.DOCUMENT_POSITION_CONTAINED_BY) > 0 && e.add(o), (u & Node.DOCUMENT_POSITION_CONTAINS) > 0 && e.add(r)
                }
              return n.filter((function(n, t) {
                return !e.has(t)
              }))
            }(E(H(e).querySelectorAll("[".concat(a, '="').concat(t, '"]:not([').concat(i, '="disabled"])')))) : [e]), n
          }), [])
        },
        z = function(n, e) {
          return void 0 === e && (e = X(x(n).ownerDocument)), !(!e || e.dataset && e.dataset.focusGuard) && V(n).some((function(n) {
            return G(n, e) || function(n, e) {
              return Boolean(E(n.querySelectorAll("iframe")).some((function(n) {
                return function(n, e) {
                  return n === e
                }(n, e)
              })))
            }(n, e)
          }))
        },
        $ = function(n, e) {
          return M(n) && n.name ? function(n, e) {
            return e.filter(M).filter((function(e) {
              return e.name === n.name
            })).filter((function(n) {
              return n.checked
            }))[0] || n
          }(n, e) : n
        },
        K = function(n) {
          return n[0] && n.length > 1 ? $(n[0], n) : n[0]
        },
        J = function(n, e) {
          return n.length > 1 ? n.indexOf($(n[e], n)) : e
        },
        Q = "NEW_FOCUS",
        nn = function(n, e) {
          return void 0 === e && (e = []), e.push(n), n.parentNode && nn(n.parentNode.host || n.parentNode, e), e
        },
        en = function(n, e) {
          for (var t = nn(n), r = nn(e), o = 0; o < t.length; o += 1) {
            var u = t[o];
            if (r.indexOf(u) >= 0) return u
          }
          return !1
        },
        tn = function(n, e, t) {
          var r = O(n),
            o = O(e),
            u = r[0],
            a = !1;
          return o.filter(Boolean).forEach((function(n) {
            a = en(a || n, n) || a, t.filter(Boolean).forEach((function(n) {
              var e = en(u, n);
              e && (a = !a || G(e, a) ? e : en(e, a))
            }))
          })), a
        },
        rn = function(n, e) {
          var t, r, o, u, a, i, c = X(O(n).length > 0 ? document : x(n).ownerDocument),
            d = V(n).filter(R),
            f = tn(c || n, n, d),
            l = new Map,
            s = q(d, l),
            v = Y(d, l).filter((function(n) {
              var e = n.node;
              return R(e)
            }));
          if (v[0] || (v = s)[0]) {
            var p, m, h, g = q([f], l).map((function(n) {
                return n.node
              })),
              y = (p = g, m = v, h = new Map, m.forEach((function(n) {
                return h.set(n.node, n)
              })), p.map((function(n) {
                return h.get(n)
              })).filter(L)),
              b = y.map((function(n) {
                return n.node
              })),
              w = function(n, e, t, r) {
                var o = n.length,
                  u = n[0],
                  a = n[o - 1],
                  i = I(t);
                if (!(t && n.indexOf(t) >= 0)) {
                  var c, d, f = void 0 !== t ? e.indexOf(t) : -1,
                    l = r ? e.indexOf(r) : f,
                    s = r ? n.indexOf(r) : -1,
                    v = f - l,
                    p = e.indexOf(u),
                    m = e.indexOf(a),
                    h = (c = e, d = new Set, c.forEach((function(n) {
                      return d.add($(n, c))
                    })), c.filter((function(n) {
                      return d.has(n)
                    }))),
                    g = (void 0 !== t ? h.indexOf(t) : -1) - (r ? h.indexOf(r) : f),
                    y = J(n, 0),
                    b = J(n, o - 1);
                  return -1 === f || -1 === s ? Q : !v && s >= 0 ? s : f <= p && i && Math.abs(v) > 1 ? b : f >= m && i && Math.abs(v) > 1 ? y : v && Math.abs(g) > 1 ? s : f <= p ? b : f > m ? y : v ? Math.abs(v) > 1 ? s : (o + s + v) % o : void 0
                }
              }(b, g, c, e);
            if (w === Q) {
              var N = (t = s, r = b, o = function(n, e) {
                return n.reduce((function(n, t) {
                  return n.concat(function(n, e) {
                    return U((t = n.querySelectorAll("[".concat("data-autofocus-inside", "]")), E(t).map((function(n) {
                      return W([n])
                    })).reduce((function(n, e) {
                      return n.concat(e)
                    }), [])), e);
                    var t
                  }(t, e))
                }), [])
              }(d, l), a = t.map((function(n) {
                return n.node
              })), (i = Z(a.filter((u = o, function(n) {
                var e, t = null === (e = T(n)) || void 0 === e ? void 0 : e.autofocus;
                return n.autofocus || void 0 !== t && "false" !== t || u.indexOf(n) >= 0
              })))) && i.length ? K(i) : K(Z(r)));
              return N ? {
                node: N
              } : void console.warn("focus-lock: cannot find any node to move focus into")
            }
            return void 0 === w ? w : y[w]
          }
        },
        on = 0,
        un = !1,
        an = function(n, e, t) {
          void 0 === t && (t = {});
          var r, o, u = rn(n, e);
          if (!un && u) {
            if (on > 2) return console.error("FocusLock: focus-fighting detected. Only one focus management system could be active. See https://github.com/theKashey/focus-lock/#focus-fighting"), un = !0, void setTimeout((function() {
              un = !1
            }), 1);
            on++, r = u.node, o = t.focusOptions, "focus" in r && r.focus(o), "contentWindow" in r && r.contentWindow && r.contentWindow.focus(), on--
          }
        };

      function cn(n) {
        setTimeout(n, 1)
      }
      var dn = null,
        fn = null,
        ln = null,
        sn = !1,
        vn = function() {
          return !0
        };

      function pn(n, e, t, r) {
        var o = null,
          u = n;
        do {
          var a = r[u];
          if (a.guard) a.node.dataset.focusAutoGuard && (o = a);
          else {
            if (!a.lockItem) break;
            if (u !== n) return;
            o = null
          }
        } while ((u += t) !== e);
        o && (o.node.tabIndex = 0)
      }
      var mn = function(n) {
          return n && "current" in n ? n.current : n
        },
        hn = function n(e, t, r) {
          return t && (t.host === e && (!t.activeElement || r.contains(t.activeElement)) || t.parentNode && n(e, t.parentNode, r))
        },
        gn = function() {
          var n, e, t, r, o, u, a, i = !1;
          if (dn) {
            var c = dn,
              d = c.observed,
              f = c.persistentFocus,
              l = c.autoFocus,
              s = c.shards,
              v = c.crossFrame,
              p = c.focusOptions,
              m = d || ln && ln.portaledElement,
              h = document && document.activeElement;
            if (m) {
              var g = [m].concat(s.map(mn).filter(Boolean));
              if (h && ! function(n) {
                  return (dn.whiteList || vn)(n)
                }(h) || (f || (v ? Boolean(sn) : "meanwhile" === sn) || !(document && document.activeElement === document.body || function(n) {
                  void 0 === n && (n = document);
                  var e = X(n);
                  return !!e && E(n.querySelectorAll("[".concat("data-no-focus-lock", "]"))).some((function(n) {
                    return G(n, e)
                  }))
                }()) || !fn && l) && (m && !(z(g) || h && function(n, e) {
                  return e.some((function(e) {
                    return hn(n, e, e)
                  }))
                }(h, g) || (a = h, ln && ln.portaledElement === a)) && (document && !fn && h && !l ? (h.blur && h.blur(), document.body.focus()) : (i = an(g, fn, {
                  focusOptions: p
                }), ln = {})), sn = !1, fn = document && document.activeElement), document) {
                var y = document && document.activeElement,
                  b = (e = V(n = g).filter(R), t = tn(n, n, e), r = new Map, o = Y([t], r, !0), u = Y(e, r).filter((function(n) {
                    var e = n.node;
                    return R(e)
                  })).map((function(n) {
                    return n.node
                  })), o.map((function(n) {
                    var e = n.node;
                    return {
                      node: e,
                      index: n.index,
                      lockItem: u.indexOf(e) >= 0,
                      guard: I(e)
                    }
                  }))),
                  w = b.map((function(n) {
                    return n.node
                  })).indexOf(y);
                w > -1 && (b.filter((function(n) {
                  var e = n.guard,
                    t = n.node;
                  return e && t.dataset.focusAutoGuard
                })).forEach((function(n) {
                  return n.node.removeAttribute("tabIndex")
                })), pn(w, b.length, 1, b), pn(w, -1, -1, b))
              }
            }
          }
          return i
        },
        yn = function(n) {
          gn() && n && (n.stopPropagation(), n.preventDefault())
        },
        bn = function() {
          return cn(gn)
        },
        wn = function() {
          sn = "just", cn((function() {
            sn = "meanwhile"
          }))
        };
      s.assignSyncMedium((function(n) {
        var e = n.target,
          t = n.currentTarget;
        t.contains(e) || (ln = {
          observerNode: t,
          portaledElement: e
        })
      })), v.assignMedium(bn), p.assignMedium((function(n) {
        return n({
          moveFocusInside: an,
          focusInside: z
        })
      }));
      const En = (On = function(n) {
        return n.filter((function(n) {
          return !n.disabled
        }))
      }, xn = function(n) {
        var e = n.slice(-1)[0];
        e && !dn && (document.addEventListener("focusin", yn), document.addEventListener("focusout", bn), window.addEventListener("blur", wn));
        var t = dn,
          r = t && e && e.id === t.id;
        dn = e, t && !r && (t.onDeactivation(), n.filter((function(n) {
          return n.id === t.id
        })).length || t.returnFocus(!e)), e ? (fn = null, r && t.observed === e.observed || e.onActivation(), gn(), cn(gn)) : (document.removeEventListener("focusin", yn), document.removeEventListener("focusout", bn), window.removeEventListener("blur", wn), fn = null)
      }, function(n) {
        var e, t = [];

        function r() {
          e = On(t.map((function(n) {
            return n.props
          }))), xn(e)
        }
        var a, i, c, d = function(o) {
          var a, i;

          function c() {
            return o.apply(this, arguments) || this
          }
          i = o, (a = c).prototype = Object.create(i.prototype), a.prototype.constructor = a, b(a, i), c.peek = function() {
            return e
          };
          var d = c.prototype;
          return d.componentDidMount = function() {
            t.push(this), r()
          }, d.componentDidUpdate = function() {
            r()
          }, d.componentWillUnmount = function() {
            var n = t.indexOf(this);
            t.splice(n, 1), r()
          }, d.render = function() {
            return u().createElement(n, this.props)
          }, c
        }(o.PureComponent);
        return a = d, i = "displayName", c = "SideEffect(" + function(n) {
          return n.displayName || n.name || "Component"
        }(n) + ")", (i = function(n) {
          var e = function(n, e) {
            if ("object" !== w(n) || null === n) return n;
            var t = n[Symbol.toPrimitive];
            if (void 0 !== t) {
              var r = t.call(n, "string");
              if ("object" !== w(r)) return r;
              throw new TypeError("@@toPrimitive must return a primitive value.")
            }
            return String(n)
          }(n);
          return "symbol" === w(e) ? e : String(e)
        }(i)) in a ? Object.defineProperty(a, i, {
          value: c,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : a[i] = c, d
      })((function() {
        return null
      }));
      var On, xn, Nn = o.forwardRef((function(n, e) {
          return o.createElement(y, (0, r.Z)({
            sideCar: En,
            ref: e
          }, n))
        })),
        Sn = y.propTypes || {};
      Sn.sideCar,
        function(n, e) {
          if (null == n) return {};
          var t, r, o = {},
            u = Object.keys(n);
          for (r = 0; r < u.length; r++) t = u[r], e.indexOf(t) >= 0 || (o[t] = n[t])
        }(Sn, ["sideCar"]), Nn.propTypes = {};
      const Cn = Nn
    },
    3509: (n, e, t) => {
      t.d(e, {
        Z: () => F
      });
      var r = t(8254),
        o = t(927),
        u = "right-scroll-bar-position",
        a = "width-before-scroll-bar",
        i = t(458),
        c = (0, t(8075)._)(),
        d = function() {},
        f = o.forwardRef((function(n, e) {
          var t = o.useRef(null),
            u = o.useState({
              onScrollCapture: d,
              onWheelCapture: d,
              onTouchMoveCapture: d
            }),
            a = u[0],
            f = u[1],
            l = n.forwardProps,
            s = n.children,
            v = n.className,
            p = n.removeScrollBar,
            m = n.enabled,
            h = n.shards,
            g = n.sideCar,
            y = n.noIsolation,
            b = n.inert,
            w = n.allowPinchZoom,
            E = n.as,
            O = void 0 === E ? "div" : E,
            x = n.gapMode,
            N = (0, r._T)(n, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]),
            S = g,
            C = (0, i.q)([t, e]),
            k = (0, r.pi)((0, r.pi)({}, N), a);
          return o.createElement(o.Fragment, null, m && o.createElement(S, {
            sideCar: c,
            removeScrollBar: p,
            shards: h,
            noIsolation: y,
            inert: b,
            setCallbacks: f,
            allowPinchZoom: !!w,
            lockRef: t,
            gapMode: x
          }), l ? o.cloneElement(o.Children.only(s), (0, r.pi)((0, r.pi)({}, k), {
            ref: C
          })) : o.createElement(O, (0, r.pi)({}, k, {
            className: v,
            ref: C
          }), s))
        }));
      f.defaultProps = {
        enabled: !0,
        removeScrollBar: !0,
        inert: !1
      }, f.classNames = {
        fullWidth: a,
        zeroRight: u
      };
      var l = function(n) {
        var e = n.sideCar,
          t = (0, r._T)(n, ["sideCar"]);
        if (!e) throw new Error("Sidecar: please provide `sideCar` property to import the right car");
        var u = e.read();
        if (!u) throw new Error("Sidecar medium not found");
        return o.createElement(u, (0, r.pi)({}, t))
      };
      l.isSideCarExport = !0;
      var s = function() {
          var n = 0,
            e = null;
          return {
            add: function(r) {
              var o, u;
              0 == n && (e = function() {
                if (!document) return null;
                var n = document.createElement("style");
                n.type = "text/css";
                var e = t.nc;
                return e && n.setAttribute("nonce", e), n
              }()) && (u = r, (o = e).styleSheet ? o.styleSheet.cssText = u : o.appendChild(document.createTextNode(u)), function(n) {
                (document.head || document.getElementsByTagName("head")[0]).appendChild(n)
              }(e)), n++
            },
            remove: function() {
              !--n && e && (e.parentNode && e.parentNode.removeChild(e), e = null)
            }
          }
        },
        v = function() {
          var n, e = (n = s(), function(e, t) {
            o.useEffect((function() {
              return n.add(e),
                function() {
                  n.remove()
                }
            }), [e && t])
          });
          return function(n) {
            var t = n.styles,
              r = n.dynamic;
            return e(t, r), null
          }
        },
        p = {
          left: 0,
          top: 0,
          right: 0,
          gap: 0
        },
        m = function(n) {
          return parseInt(n || "", 10) || 0
        },
        h = v(),
        g = function(n, e, t, r) {
          var o = n.left,
            i = n.top,
            c = n.right,
            d = n.gap;
          return void 0 === t && (t = "margin"), "\n  .".concat("with-scroll-bars-hidden", " {\n   overflow: hidden ").concat(r, ";\n   padding-right: ").concat(d, "px ").concat(r, ";\n  }\n  body {\n    overflow: hidden ").concat(r, ";\n    overscroll-behavior: contain;\n    ").concat([e && "position: relative ".concat(r, ";"), "margin" === t && "\n    padding-left: ".concat(o, "px;\n    padding-top: ").concat(i, "px;\n    padding-right: ").concat(c, "px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ").concat(d, "px ").concat(r, ";\n    "), "padding" === t && "padding-right: ".concat(d, "px ").concat(r, ";")].filter(Boolean).join(""), "\n  }\n  \n  .").concat(u, " {\n    right: ").concat(d, "px ").concat(r, ";\n  }\n  \n  .").concat(a, " {\n    margin-right: ").concat(d, "px ").concat(r, ";\n  }\n  \n  .").concat(u, " .").concat(u, " {\n    right: 0 ").concat(r, ";\n  }\n  \n  .").concat(a, " .").concat(a, " {\n    margin-right: 0 ").concat(r, ";\n  }\n  \n  body {\n    ").concat("--removed-body-scroll-bar-size", ": ").concat(d, "px;\n  }\n")
        },
        y = function(n) {
          var e = n.noRelative,
            t = n.noImportant,
            r = n.gapMode,
            u = void 0 === r ? "margin" : r,
            a = o.useMemo((function() {
              return function(n) {
                if (void 0 === n && (n = "margin"), "undefined" == typeof window) return p;
                var e = function(n) {
                    var e = window.getComputedStyle(document.body),
                      t = e["padding" === n ? "paddingLeft" : "marginLeft"],
                      r = e["padding" === n ? "paddingTop" : "marginTop"],
                      o = e["padding" === n ? "paddingRight" : "marginRight"];
                    return [m(t), m(r), m(o)]
                  }(n),
                  t = document.documentElement.clientWidth,
                  r = window.innerWidth;
                return {
                  left: e[0],
                  top: e[1],
                  right: e[2],
                  gap: Math.max(0, r - t + e[2] - e[0])
                }
              }(u)
            }), [u]);
          return o.createElement(h, {
            styles: g(a, !e, u, t ? "" : "!important")
          })
        },
        b = !1;
      if ("undefined" != typeof window) try {
        var w = Object.defineProperty({}, "passive", {
          get: function() {
            return b = !0, !0
          }
        });
        window.addEventListener("test", w, w), window.removeEventListener("test", w, w)
      } catch (n) {
        b = !1
      }
      var E = !!b && {
          passive: !1
        },
        O = function(n, e) {
          var t = window.getComputedStyle(n);
          return "hidden" !== t[e] && !(t.overflowY === t.overflowX && ! function(n) {
            return "TEXTAREA" === n.tagName
          }(n) && "visible" === t[e])
        },
        x = function(n, e) {
          var t = e.ownerDocument,
            r = e;
          do {
            if ("undefined" != typeof ShadowRoot && r instanceof ShadowRoot && (r = r.host), N(n, r)) {
              var o = S(n, r);
              if (o[1] > o[2]) return !0
            }
            r = r.parentNode
          } while (r && r !== t.body);
          return !1
        },
        N = function(n, e) {
          return "v" === n ? function(n) {
            return O(n, "overflowY")
          }(e) : function(n) {
            return O(n, "overflowX")
          }(e)
        },
        S = function(n, e) {
          return "v" === n ? [(t = e).scrollTop, t.scrollHeight, t.clientHeight] : function(n) {
            return [n.scrollLeft, n.scrollWidth, n.clientWidth]
          }(e);
          var t
        },
        C = function(n) {
          return "changedTouches" in n ? [n.changedTouches[0].clientX, n.changedTouches[0].clientY] : [0, 0]
        },
        k = function(n) {
          return [n.deltaX, n.deltaY]
        },
        T = function(n) {
          return n && "current" in n ? n.current : n
        },
        P = function(n) {
          return "\n  .block-interactivity-".concat(n, " {pointer-events: none;}\n  .allow-interactivity-").concat(n, " {pointer-events: all;}\n")
        },
        M = 0,
        _ = [];

      function I(n) {
        for (var e = null; null !== n;) n instanceof ShadowRoot && (e = n.host, n = n.host), n = n.parentNode;
        return e
      }
      const R = (c.useMedium((function(n) {
        var e = o.useRef([]),
          t = o.useRef([0, 0]),
          u = o.useRef(),
          a = o.useState(M++)[0],
          i = o.useState(v)[0],
          c = o.useRef(n);
        o.useEffect((function() {
          c.current = n
        }), [n]), o.useEffect((function() {
          if (n.inert) {
            document.body.classList.add("block-interactivity-".concat(a));
            var e = (0, r.ev)([n.lockRef.current], (n.shards || []).map(T), !0).filter(Boolean);
            return e.forEach((function(n) {
                return n.classList.add("allow-interactivity-".concat(a))
              })),
              function() {
                document.body.classList.remove("block-interactivity-".concat(a)), e.forEach((function(n) {
                  return n.classList.remove("allow-interactivity-".concat(a))
                }))
              }
          }
        }), [n.inert, n.lockRef.current, n.shards]);
        var d = o.useCallback((function(n, e) {
            if ("touches" in n && 2 === n.touches.length) return !c.current.allowPinchZoom;
            var r, o = C(n),
              a = t.current,
              i = "deltaX" in n ? n.deltaX : a[0] - o[0],
              d = "deltaY" in n ? n.deltaY : a[1] - o[1],
              f = n.target,
              l = Math.abs(i) > Math.abs(d) ? "h" : "v";
            if ("touches" in n && "h" === l && "range" === f.type) return !1;
            var s = x(l, f);
            if (!s) return !0;
            if (s ? r = l : (r = "v" === l ? "h" : "v", s = x(l, f)), !s) return !1;
            if (!u.current && "changedTouches" in n && (i || d) && (u.current = r), !r) return !0;
            var v = u.current || r;
            return function(n, e, t, r, o) {
              var u = function(n, e) {
                  return "h" === n && "rtl" === e ? -1 : 1
                }(n, window.getComputedStyle(e).direction),
                a = u * r,
                i = t.target,
                c = e.contains(i),
                d = !1,
                f = a > 0,
                l = 0,
                s = 0;
              do {
                var v = S(n, i),
                  p = v[0],
                  m = v[1] - v[2] - u * p;
                (p || m) && N(n, i) && (l += m, s += p), i = i instanceof ShadowRoot ? i.host : i.parentNode
              } while (!c && i !== document.body || c && (e.contains(i) || e === i));
              return (f && (o && Math.abs(l) < 1 || !o && a > l) || !f && (o && Math.abs(s) < 1 || !o && -a > s)) && (d = !0), d
            }(v, e, n, "h" === v ? i : d, !0)
          }), []),
          f = o.useCallback((function(n) {
            var t = n;
            if (_.length && _[_.length - 1] === i) {
              var r = "deltaY" in t ? k(t) : C(t),
                o = e.current.filter((function(n) {
                  return n.name === t.type && (n.target === t.target || t.target === n.shadowParent) && (e = n.delta, o = r, e[0] === o[0] && e[1] === o[1]);
                  var e, o
                }))[0];
              if (o && o.should) t.cancelable && t.preventDefault();
              else if (!o) {
                var u = (c.current.shards || []).map(T).filter(Boolean).filter((function(n) {
                  return n.contains(t.target)
                }));
                (u.length > 0 ? d(t, u[0]) : !c.current.noIsolation) && t.cancelable && t.preventDefault()
              }
            }
          }), []),
          l = o.useCallback((function(n, t, r, o) {
            var u = {
              name: n,
              delta: t,
              target: r,
              should: o,
              shadowParent: I(r)
            };
            e.current.push(u), setTimeout((function() {
              e.current = e.current.filter((function(n) {
                return n !== u
              }))
            }), 1)
          }), []),
          s = o.useCallback((function(n) {
            t.current = C(n), u.current = void 0
          }), []),
          p = o.useCallback((function(e) {
            l(e.type, k(e), e.target, d(e, n.lockRef.current))
          }), []),
          m = o.useCallback((function(e) {
            l(e.type, C(e), e.target, d(e, n.lockRef.current))
          }), []);
        o.useEffect((function() {
          return _.push(i), n.setCallbacks({
              onScrollCapture: p,
              onWheelCapture: p,
              onTouchMoveCapture: m
            }), document.addEventListener("wheel", f, E), document.addEventListener("touchmove", f, E), document.addEventListener("touchstart", s, E),
            function() {
              _ = _.filter((function(n) {
                return n !== i
              })), document.removeEventListener("wheel", f, E), document.removeEventListener("touchmove", f, E), document.removeEventListener("touchstart", s, E)
            }
        }), []);
        var h = n.removeScrollBar,
          g = n.inert;
        return o.createElement(o.Fragment, null, g ? o.createElement(i, {
          styles: P(a)
        }) : null, h ? o.createElement(y, {
          gapMode: n.gapMode
        }) : null)
      })), l);
      var L = o.forwardRef((function(n, e) {
        return o.createElement(f, (0, r.pi)({}, n, {
          ref: e,
          sideCar: R
        }))
      }));
      L.classNames = f.classNames;
      const F = L
    },
    458: (n, e, t) => {
      t.d(e, {
        q: () => o
      });
      var r = t(927);

      function o(n, e) {
        return t = e || null, o = function(e) {
          return n.forEach((function(n) {
            return function(n, e) {
              return "function" == typeof n ? n(e) : n && (n.current = e), n
            }(n, e)
          }))
        }, (u = (0, r.useState)((function() {
          return {
            value: t,
            callback: o,
            facade: {
              get current() {
                return u.value
              },
              set current(n) {
                var e = u.value;
                e !== n && (u.value = n, u.callback(n, e))
              }
            }
          }
        }))[0]).callback = o, u.facade;
        var t, o, u
      }
    },
    8075: (n, e, t) => {
      t.d(e, {
        _: () => i,
        s: () => a
      });
      var r = t(8254);

      function o(n) {
        return n
      }

      function u(n, e) {
        void 0 === e && (e = o);
        var t = [],
          r = !1;
        return {
          read: function() {
            if (r) throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
            return t.length ? t[t.length - 1] : n
          },
          useMedium: function(n) {
            var o = e(n, r);
            return t.push(o),
              function() {
                t = t.filter((function(n) {
                  return n !== o
                }))
              }
          },
          assignSyncMedium: function(n) {
            for (r = !0; t.length;) {
              var e = t;
              t = [], e.forEach(n)
            }
            t = {
              push: function(e) {
                return n(e)
              },
              filter: function() {
                return t
              }
            }
          },
          assignMedium: function(n) {
            r = !0;
            var e = [];
            if (t.length) {
              var o = t;
              t = [], o.forEach(n), e = t
            }
            var u = function() {
                var t = e;
                e = [], t.forEach(n)
              },
              a = function() {
                return Promise.resolve().then(u)
              };
            a(), t = {
              push: function(n) {
                e.push(n), a()
              },
              filter: function(n) {
                return e = e.filter(n), t
              }
            }
          }
        }
      }

      function a(n, e) {
        return void 0 === e && (e = o), u(n, e)
      }

      function i(n) {
        void 0 === n && (n = {});
        var e = u(null);
        return e.options = (0, r.pi)({
          async: !0,
          ssr: !1
        }, n), e
      }
    },
    3032: (n, e, t) => {
      var r = t(927),
        o = Symbol.for("react.element"),
        u = Symbol.for("react.fragment"),
        a = Object.prototype.hasOwnProperty,
        i = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        c = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function d(n, e, t) {
        var r, u = {},
          d = null,
          f = null;
        for (r in void 0 !== t && (d = "" + t), void 0 !== e.key && (d = "" + e.key), void 0 !== e.ref && (f = e.ref), e) a.call(e, r) && !c.hasOwnProperty(r) && (u[r] = e[r]);
        if (n && n.defaultProps)
          for (r in e = n.defaultProps) void 0 === u[r] && (u[r] = e[r]);
        return {
          $$typeof: o,
          type: n,
          key: d,
          ref: f,
          props: u,
          _owner: i.current
        }
      }
      e.Fragment = u, e.jsx = d, e.jsxs = d
    },
    3705: (n, e, t) => {
      n.exports = t(3032)
    },
    4975: (n, e, t) => {
      function r() {
        return r = Object.assign ? Object.assign.bind() : function(n) {
          for (var e = 1; e < arguments.length; e++) {
            var t = arguments[e];
            for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (n[r] = t[r])
          }
          return n
        }, r.apply(this, arguments)
      }
      t.d(e, {
        Z: () => r
      })
    },
    8254: (n, e, t) => {
      t.d(e, {
        _T: () => o,
        ev: () => u,
        pi: () => r
      });
      var r = function() {
        return r = Object.assign || function(n) {
          for (var e, t = 1, r = arguments.length; t < r; t++)
            for (var o in e = arguments[t]) Object.prototype.hasOwnProperty.call(e, o) && (n[o] = e[o]);
          return n
        }, r.apply(this, arguments)
      };

      function o(n, e) {
        var t = {};
        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && e.indexOf(r) < 0 && (t[r] = n[r]);
        if (null != n && "function" == typeof Object.getOwnPropertySymbols) {
          var o = 0;
          for (r = Object.getOwnPropertySymbols(n); o < r.length; o++) e.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(n, r[o]) && (t[r[o]] = n[r[o]])
        }
        return t
      }

      function u(n, e, t) {
        if (t || 2 === arguments.length)
          for (var r, o = 0, u = e.length; o < u; o++) !r && o in e || (r || (r = Array.prototype.slice.call(e, 0, o)), r[o] = e[o]);
        return n.concat(r || Array.prototype.slice.call(e))
      }
      Object.create, Object.create, "function" == typeof SuppressedError && SuppressedError
    }
  }
]);