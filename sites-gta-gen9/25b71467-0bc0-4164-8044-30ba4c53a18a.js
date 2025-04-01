! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      n = (new Error).stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "25b71467-0bc0-4164-8044-30ba4c53a18a", e._sentryDebugIdIdentifier = "sentry-dbid-25b71467-0bc0-4164-8044-30ba4c53a18a")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/sites-gta-gen9",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_gta_gen9 = self.webpackChunk_rockstargames_sites_gta_gen9 || []).push([
  [2064], {
    62064: (e, n, t) => {
      t.d(n, {
        Ay: () => _e
      });
      var r = t(58588),
        o = t(3709),
        u = t(62229),
        i = t.n(u),
        a = "data-focus-lock",
        c = "data-focus-lock-disabled",
        d = t(96433),
        f = {
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
          return u.createElement(u.Fragment, null, u.createElement("div", {
            key: "guard-first",
            "data-focus-guard": !0,
            "data-focus-auto-guard": !0,
            style: f
          }), n, n && u.createElement("div", {
            key: "guard-last",
            "data-focus-guard": !0,
            "data-focus-auto-guard": !0,
            style: f
          }))
        };
      s.propTypes = {}, s.defaultProps = {
        children: null
      };
      var l = t(2788),
        v = (0, l.C)({}, (function(e) {
          return {
            target: e.target,
            currentTarget: e.currentTarget
          }
        })),
        m = (0, l.C)(),
        p = (0, l.C)(),
        b = (0, l.f)({
          async: !0
        }),
        y = [],
        g = u.forwardRef((function(e, n) {
          var t, r = u.useState(),
            i = r[0],
            s = r[1],
            l = u.useRef(),
            p = u.useRef(!1),
            g = u.useRef(null),
            h = e.children,
            E = e.disabled,
            w = e.noFocusGuards,
            O = e.persistentFocus,
            N = e.crossFrame,
            x = e.autoFocus,
            A = (e.allowTextSelection, e.group),
            _ = e.className,
            I = e.whiteList,
            k = e.hasPositiveIndices,
            T = e.shards,
            S = void 0 === T ? y : T,
            M = e.as,
            F = void 0 === M ? "div" : M,
            C = e.lockProps,
            D = void 0 === C ? {} : C,
            P = e.sideCar,
            L = e.returnFocus,
            j = e.focusOptions,
            R = e.onActivation,
            B = e.onDeactivation,
            U = u.useState({})[0],
            G = u.useCallback((function() {
              g.current = g.current || document && document.activeElement, l.current && R && R(l.current), p.current = !0
            }), [R]),
            W = u.useCallback((function() {
              p.current = !1, B && B(l.current)
            }), [B]);
          (0, u.useEffect)((function() {
            E || (g.current = null)
          }), []);
          var q = u.useCallback((function(e) {
              var n = g.current;
              if (n && n.focus) {
                var t = "function" == typeof L ? L(n) : L;
                if (t) {
                  var r = "object" == typeof t ? t : void 0;
                  g.current = null, e ? Promise.resolve().then((function() {
                    return n.focus(r)
                  })) : n.focus(r)
                }
              }
            }), [L]),
            H = u.useCallback((function(e) {
              p.current && v.useMedium(e)
            }), []),
            V = m.useMedium,
            Y = u.useCallback((function(e) {
              l.current !== e && (l.current = e, s(e))
            }), []),
            K = (0, o.A)(((t = {})[c] = E && "disabled", t[a] = A, t), D),
            z = !0 !== w,
            J = z && "tail" !== w,
            Q = (0, d.S)([n, Y]);
          return u.createElement(u.Fragment, null, z && [u.createElement("div", {
            key: "guard-first",
            "data-focus-guard": !0,
            tabIndex: E ? -1 : 0,
            style: f
          }), k ? u.createElement("div", {
            key: "guard-nearest",
            "data-focus-guard": !0,
            tabIndex: E ? -1 : 1,
            style: f
          }) : null], !E && u.createElement(P, {
            id: U,
            sideCar: b,
            observed: i,
            disabled: E,
            persistentFocus: O,
            crossFrame: N,
            autoFocus: x,
            whiteList: I,
            shards: S,
            onActivation: G,
            onDeactivation: W,
            returnFocus: q,
            focusOptions: j
          }), u.createElement(F, (0, o.A)({
            ref: Q
          }, K, {
            className: _,
            onBlur: V,
            onFocus: H
          }), h), J && u.createElement("div", {
            "data-focus-guard": !0,
            tabIndex: E ? -1 : 0,
            style: f
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
      const h = g;
      var E = t(57089),
        w = t(11832);
      var O = function(e) {
          for (var n = Array(e.length), t = 0; t < e.length; ++t) n[t] = e[t];
          return n
        },
        N = function(e) {
          return Array.isArray(e) ? e : [e]
        },
        x = function(e) {
          return Array.isArray(e) ? e[0] : e
        },
        A = function(e) {
          return e.parentNode && e.parentNode.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? e.parentNode.host : e.parentNode
        },
        _ = function(e) {
          return e === document || e && e.nodeType === Node.DOCUMENT_NODE
        },
        I = function(e, n) {
          var t = e.get(n);
          if (void 0 !== t) return t;
          var r = function(e, n) {
            return !e || _(e) || ! function(e) {
              if (e.nodeType !== Node.ELEMENT_NODE) return !1;
              var n = window.getComputedStyle(e, null);
              return !(!n || !n.getPropertyValue || "none" !== n.getPropertyValue("display") && "hidden" !== n.getPropertyValue("visibility"))
            }(e) && n(A(e))
          }(n, I.bind(void 0, e));
          return e.set(n, r), r
        },
        k = function(e, n) {
          var t = e.get(n);
          if (void 0 !== t) return t;
          var r = function(e, n) {
            return !(e && !_(e)) || !!F(e) && n(A(e))
          }(n, k.bind(void 0, e));
          return e.set(n, r), r
        },
        T = function(e) {
          return e.dataset
        },
        S = function(e) {
          return "INPUT" === e.tagName
        },
        M = function(e) {
          return S(e) && "radio" === e.type
        },
        F = function(e) {
          var n = e.getAttribute("data-no-autofocus");
          return ![!0, "true", ""].includes(n)
        },
        C = function(e) {
          var n;
          return Boolean(e && (null === (n = T(e)) || void 0 === n ? void 0 : n.focusGuard))
        },
        D = function(e) {
          return !C(e)
        },
        P = function(e) {
          return Boolean(e)
        },
        L = function(e, n) {
          var t = e.tabIndex - n.tabIndex,
            r = e.index - n.index;
          if (t) {
            if (!e.tabIndex) return 1;
            if (!n.tabIndex) return -1
          }
          return t || r
        },
        j = function(e, n, t) {
          return O(e).map((function(e, n) {
            return {
              node: e,
              index: n,
              tabIndex: t && -1 === e.tabIndex ? (e.dataset || {}).focusGuard ? 0 : -1 : e.tabIndex
            }
          })).filter((function(e) {
            return !n || e.tabIndex >= 0
          })).sort(L)
        },
        R = ["button:enabled", "select:enabled", "textarea:enabled", "input:enabled", "a[href]", "area[href]", "summary", "iframe", "object", "embed", "audio[controls]", "video[controls]", "[tabindex]", "[contenteditable]", "[autofocus]"].join(","),
        B = "".concat(R, ", [data-focus-guard]"),
        U = function(e, n) {
          return O((e.shadowRoot || e).children).reduce((function(e, t) {
            return e.concat(t.matches(n ? B : R) ? [t] : [], U(t))
          }), [])
        },
        G = function(e, n) {
          return e.reduce((function(e, t) {
            var r, o = U(t, n),
              u = (r = []).concat.apply(r, o.map((function(e) {
                return function(e, n) {
                  var t;
                  return e instanceof HTMLIFrameElement && (null === (t = e.contentDocument) || void 0 === t ? void 0 : t.body) ? G([e.contentDocument.body], n) : [e]
                }(e, n)
              })));
            return e.concat(u, t.parentNode ? O(t.parentNode.querySelectorAll(R)).filter((function(e) {
              return e === t
            })) : [])
          }), [])
        },
        W = function(e, n) {
          return O(e).filter((function(e) {
            return I(n, e)
          })).filter((function(e) {
            return function(e) {
              return !((S(e) || function(e) {
                return "BUTTON" === e.tagName
              }(e)) && ("hidden" === e.type || e.disabled))
            }(e)
          }))
        },
        q = function(e, n) {
          return void 0 === n && (n = new Map), O(e).filter((function(e) {
            return k(n, e)
          }))
        },
        H = function(e, n, t) {
          return j(W(G(e, t), n), !0, t)
        },
        V = function(e, n) {
          return j(W(G(e), n), !1)
        },
        Y = function(e, n) {
          return e.shadowRoot ? Y(e.shadowRoot, n) : !(void 0 === Object.getPrototypeOf(e).contains || !Object.getPrototypeOf(e).contains.call(e, n)) || O(e.children).some((function(e) {
            var t;
            if (e instanceof HTMLIFrameElement) {
              var r = null === (t = e.contentDocument) || void 0 === t ? void 0 : t.body;
              return !!r && Y(r, n)
            }
            return Y(e, n)
          }))
        },
        K = function(e) {
          if (void 0 === e && (e = document), e && e.activeElement) {
            var n = e.activeElement;
            return n.shadowRoot ? K(n.shadowRoot) : n instanceof HTMLIFrameElement && function(e) {
              try {
                return n.contentWindow.document
              } catch (e) {
                return
              }
            }() ? K(n.contentWindow.document) : n
          }
        },
        z = function(e) {
          return e.parentNode ? z(e.parentNode) : e
        },
        J = function(e) {
          return N(e).filter(Boolean).reduce((function(e, n) {
            var t = n.getAttribute(a);
            return e.push.apply(e, t ? function(e) {
              for (var n = new Set, t = e.length, r = 0; r < t; r += 1)
                for (var o = r + 1; o < t; o += 1) {
                  var u = e[r].compareDocumentPosition(e[o]);
                  (u & Node.DOCUMENT_POSITION_CONTAINED_BY) > 0 && n.add(o), (u & Node.DOCUMENT_POSITION_CONTAINS) > 0 && n.add(r)
                }
              return e.filter((function(e, t) {
                return !n.has(t)
              }))
            }(O(z(n).querySelectorAll("[".concat(a, '="').concat(t, '"]:not([').concat(c, '="disabled"])')))) : [n]), e
          }), [])
        },
        Q = function(e, n) {
          return void 0 === n && (n = K(x(e).ownerDocument)), !(!n || n.dataset && n.dataset.focusGuard) && J(e).some((function(e) {
            return Y(e, n) || function(e, n) {
              return Boolean(O(e.querySelectorAll("iframe")).some((function(e) {
                return function(e, n) {
                  return e === n
                }(e, n)
              })))
            }(e, n)
          }))
        },
        X = function(e, n) {
          return M(e) && e.name ? function(e, n) {
            return n.filter(M).filter((function(n) {
              return n.name === e.name
            })).filter((function(e) {
              return e.checked
            }))[0] || e
          }(e, n) : e
        },
        Z = function(e) {
          return e[0] && e.length > 1 ? X(e[0], e) : e[0]
        },
        $ = function(e, n) {
          return e.length > 1 ? e.indexOf(X(e[n], e)) : n
        },
        ee = "NEW_FOCUS",
        ne = function(e, n) {
          return void 0 === n && (n = []), n.push(e), e.parentNode && ne(e.parentNode.host || e.parentNode, n), n
        },
        te = function(e, n) {
          for (var t = ne(e), r = ne(n), o = 0; o < t.length; o += 1) {
            var u = t[o];
            if (r.indexOf(u) >= 0) return u
          }
          return !1
        },
        re = function(e, n, t) {
          var r = N(e),
            o = N(n),
            u = r[0],
            i = !1;
          return o.filter(Boolean).forEach((function(e) {
            i = te(i || e, e) || i, t.filter(Boolean).forEach((function(e) {
              var n = te(u, e);
              n && (i = !i || Y(n, i) ? n : te(n, i))
            }))
          })), i
        },
        oe = function(e, n) {
          var t, r, o, u, i, a, c = K(N(e).length > 0 ? document : x(e).ownerDocument),
            d = J(e).filter(D),
            f = re(c || e, e, d),
            s = new Map,
            l = V(d, s),
            v = H(d, s).filter((function(e) {
              var n = e.node;
              return D(n)
            }));
          if (v[0] || (v = l)[0]) {
            var m, p, b, y = V([f], s).map((function(e) {
                return e.node
              })),
              g = (m = y, p = v, b = new Map, p.forEach((function(e) {
                return b.set(e.node, e)
              })), m.map((function(e) {
                return b.get(e)
              })).filter(P)),
              h = g.map((function(e) {
                return e.node
              })),
              E = function(e, n, t, r) {
                var o = e.length,
                  u = e[0],
                  i = e[o - 1],
                  a = C(t);
                if (!(t && e.indexOf(t) >= 0)) {
                  var c, d, f = void 0 !== t ? n.indexOf(t) : -1,
                    s = r ? n.indexOf(r) : f,
                    l = r ? e.indexOf(r) : -1,
                    v = f - s,
                    m = n.indexOf(u),
                    p = n.indexOf(i),
                    b = (c = n, d = new Set, c.forEach((function(e) {
                      return d.add(X(e, c))
                    })), c.filter((function(e) {
                      return d.has(e)
                    }))),
                    y = (void 0 !== t ? b.indexOf(t) : -1) - (r ? b.indexOf(r) : f),
                    g = $(e, 0),
                    h = $(e, o - 1);
                  return -1 === f || -1 === l ? ee : !v && l >= 0 ? l : f <= m && a && Math.abs(v) > 1 ? h : f >= p && a && Math.abs(v) > 1 ? g : v && Math.abs(y) > 1 ? l : f <= m ? h : f > p ? g : v ? Math.abs(v) > 1 ? l : (o + l + v) % o : void 0
                }
              }(h, y, c, n);
            if (E === ee) {
              var w = (t = l, r = h, o = function(e, n) {
                return e.reduce((function(e, t) {
                  return e.concat(function(e, n) {
                    return W((t = e.querySelectorAll("[".concat("data-autofocus-inside", "]")), O(t).map((function(e) {
                      return G([e])
                    })).reduce((function(e, n) {
                      return e.concat(n)
                    }), [])), n);
                    var t
                  }(t, n))
                }), [])
              }(d, s), i = t.map((function(e) {
                return e.node
              })), (a = q(i.filter((u = o, function(e) {
                var n, t = null === (n = T(e)) || void 0 === n ? void 0 : n.autofocus;
                return e.autofocus || void 0 !== t && "false" !== t || u.indexOf(e) >= 0
              })))) && a.length ? Z(a) : Z(q(r)));
              return w ? {
                node: w
              } : void console.warn("focus-lock: cannot find any node to move focus into")
            }
            return void 0 === E ? E : g[E]
          }
        },
        ue = 0,
        ie = !1,
        ae = function(e, n, t) {
          void 0 === t && (t = {});
          var r, o, u = oe(e, n);
          if (!ie && u) {
            if (ue > 2) return console.error("FocusLock: focus-fighting detected. Only one focus management system could be active. See https://github.com/theKashey/focus-lock/#focus-fighting"), ie = !0, void setTimeout((function() {
              ie = !1
            }), 1);
            ue++, r = u.node, o = t.focusOptions, "focus" in r && r.focus(o), "contentWindow" in r && r.contentWindow && r.contentWindow.focus(), ue--
          }
        };

      function ce(e) {
        setTimeout(e, 1)
      }
      var de = null,
        fe = null,
        se = null,
        le = !1,
        ve = function() {
          return !0
        };

      function me(e, n, t, r) {
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
      var pe = function(e) {
          return e && "current" in e ? e.current : e
        },
        be = function e(n, t, r) {
          return t && (t.host === n && (!t.activeElement || r.contains(t.activeElement)) || t.parentNode && e(n, t.parentNode, r))
        },
        ye = function() {
          var e, n, t, r, o, u, i, a = !1;
          if (de) {
            var c = de,
              d = c.observed,
              f = c.persistentFocus,
              s = c.autoFocus,
              l = c.shards,
              v = c.crossFrame,
              m = c.focusOptions,
              p = d || se && se.portaledElement,
              b = document && document.activeElement;
            if (p) {
              var y = [p].concat(l.map(pe).filter(Boolean));
              if (b && ! function(e) {
                  return (de.whiteList || ve)(e)
                }(b) || (f || (v ? Boolean(le) : "meanwhile" === le) || !(document && document.activeElement === document.body || function(e) {
                  void 0 === e && (e = document);
                  var n = K(e);
                  return !!n && O(e.querySelectorAll("[".concat("data-no-focus-lock", "]"))).some((function(e) {
                    return Y(e, n)
                  }))
                }()) || !fe && s) && (p && !(Q(y) || b && function(e, n) {
                  return n.some((function(n) {
                    return be(e, n, n)
                  }))
                }(b, y) || (i = b, se && se.portaledElement === i)) && (document && !fe && b && !s ? (b.blur && b.blur(), document.body.focus()) : (a = ae(y, fe, {
                  focusOptions: m
                }), se = {})), le = !1, fe = document && document.activeElement), document) {
                var g = document && document.activeElement,
                  h = (n = J(e = y).filter(D), t = re(e, e, n), r = new Map, o = H([t], r, !0), u = H(n, r).filter((function(e) {
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
                  E = h.map((function(e) {
                    return e.node
                  })).indexOf(g);
                E > -1 && (h.filter((function(e) {
                  var n = e.guard,
                    t = e.node;
                  return n && t.dataset.focusAutoGuard
                })).forEach((function(e) {
                  return e.node.removeAttribute("tabIndex")
                })), me(E, h.length, 1, h), me(E, -1, -1, h))
              }
            }
          }
          return a
        },
        ge = function(e) {
          ye() && e && (e.stopPropagation(), e.preventDefault())
        },
        he = function() {
          return ce(ye)
        },
        Ee = function() {
          le = "just", ce((function() {
            le = "meanwhile"
          }))
        };
      v.assignSyncMedium((function(e) {
        var n = e.target,
          t = e.currentTarget;
        t.contains(n) || (se = {
          observerNode: t,
          portaledElement: n
        })
      })), m.assignMedium(he), p.assignMedium((function(e) {
        return e({
          moveFocusInside: ae,
          focusInside: Q
        })
      }));
      const we = (Oe = function(e) {
        return e.filter((function(e) {
          return !e.disabled
        }))
      }, Ne = function(e) {
        var n = e.slice(-1)[0];
        n && !de && (document.addEventListener("focusin", ge), document.addEventListener("focusout", he), window.addEventListener("blur", Ee));
        var t = de,
          r = t && n && n.id === t.id;
        de = n, t && !r && (t.onDeactivation(), e.filter((function(e) {
          return e.id === t.id
        })).length || t.returnFocus(!n)), n ? (fe = null, r && t.observed === n.observed || n.onActivation(), ye(), ce(ye)) : (document.removeEventListener("focusin", ge), document.removeEventListener("focusout", he), window.removeEventListener("blur", Ee), fe = null)
      }, function(e) {
        var n, t = [];

        function r() {
          n = Oe(t.map((function(e) {
            return e.props
          }))), Ne(n)
        }
        var o = function(o) {
          var u, a;

          function c() {
            return o.apply(this, arguments) || this
          }
          a = o, (u = c).prototype = Object.create(a.prototype), u.prototype.constructor = u, (0, E.A)(u, a), c.peek = function() {
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
            return i().createElement(e, this.props)
          }, c
        }(u.PureComponent);
        return (0, w.A)(o, "displayName", "SideEffect(" + function(e) {
          return e.displayName || e.name || "Component"
        }(e) + ")"), o
      })((function() {
        return null
      }));
      var Oe, Ne, xe = u.forwardRef((function(e, n) {
          return u.createElement(h, (0, o.A)({
            sideCar: we,
            ref: n
          }, e))
        })),
        Ae = h.propTypes || {};
      Ae.sideCar, (0, r.A)(Ae, ["sideCar"]), xe.propTypes = {};
      const _e = xe
    },
    11832: (e, n, t) => {
      t.d(n, {
        A: () => o
      });
      var r = t(46620);

      function o(e, n, t) {
        return (n = (0, r.A)(n)) in e ? Object.defineProperty(e, n, {
          value: t,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[n] = t, e
      }
    },
    58588: (e, n, t) => {
      function r(e, n) {
        if (null == e) return {};
        var t, r, o = {},
          u = Object.keys(e);
        for (r = 0; r < u.length; r++) t = u[r], n.indexOf(t) >= 0 || (o[t] = e[t]);
        return o
      }
      t.d(n, {
        A: () => r
      })
    },
    57089: (e, n, t) => {
      function r(e, n) {
        return r = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, n) {
          return e.__proto__ = n, e
        }, r(e, n)
      }
      t.d(n, {
        A: () => r
      })
    },
    46620: (e, n, t) => {
      t.d(n, {
        A: () => o
      });
      var r = t(4035);

      function o(e) {
        var n = function(e, n) {
          if ("object" !== (0, r.A)(e) || null === e) return e;
          var t = e[Symbol.toPrimitive];
          if (void 0 !== t) {
            var o = t.call(e, "string");
            if ("object" !== (0, r.A)(o)) return o;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e);
        return "symbol" === (0, r.A)(n) ? n : String(n)
      }
    },
    4035: (e, n, t) => {
      function r(e) {
        return r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
          return typeof e
        } : function(e) {
          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }, r(e)
      }
      t.d(n, {
        A: () => r
      })
    }
  }
]);