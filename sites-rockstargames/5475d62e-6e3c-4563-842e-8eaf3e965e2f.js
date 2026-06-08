try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "5475d62e-6e3c-4563-842e-8eaf3e965e2f", e._sentryDebugIdIdentifier = "sentry-dbid-5475d62e-6e3c-4563-842e-8eaf3e965e2f")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/sites-rockstargames",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_rockstargames = self.webpackChunk_rockstargames_sites_rockstargames || []).push([
  [8650], {
    45787(e, t, n) {
      n.d(t, {
        Eq: () => c
      });
      var r = new WeakMap,
        o = new WeakMap,
        s = {},
        i = 0,
        a = function(e) {
          return e && (e.host || a(e.parentNode))
        },
        c = function(e, t, n) {
          void 0 === n && (n = "data-aria-hidden");
          var c = Array.from(Array.isArray(e) ? e : [e]),
            u = t || function(e) {
              return "undefined" == typeof document ? null : (Array.isArray(e) ? e[0] : e).ownerDocument.body
            }(e);
          return u ? (c.push.apply(c, Array.from(u.querySelectorAll("[aria-live], script"))), function(e, t, n, c) {
            var u = function(e, t) {
              return t.map(function(t) {
                if (e.contains(t)) return t;
                var n = a(t);
                return n && e.contains(n) ? n : (console.error("aria-hidden", t, "in not contained inside", e, ". Doing nothing"), null)
              }).filter(function(e) {
                return Boolean(e)
              })
            }(t, Array.isArray(e) ? e : [e]);
            s[n] || (s[n] = new WeakMap);
            var d = s[n],
              l = [],
              f = new Set,
              p = new Set(u),
              m = function(e) {
                e && !f.has(e) && (f.add(e), m(e.parentNode))
              };
            u.forEach(m);
            var v = function(e) {
              e && !p.has(e) && Array.prototype.forEach.call(e.children, function(e) {
                if (f.has(e)) v(e);
                else try {
                  var t = e.getAttribute(c),
                    s = null !== t && "false" !== t,
                    i = (r.get(e) || 0) + 1,
                    a = (d.get(e) || 0) + 1;
                  r.set(e, i), d.set(e, a), l.push(e), 1 === i && s && o.set(e, !0), 1 === a && e.setAttribute(n, "true"), s || e.setAttribute(c, "true")
                } catch (t) {
                  console.error("aria-hidden: cannot operate on ", e, t)
                }
              })
            };
            return v(t), f.clear(), i++,
              function() {
                l.forEach(function(e) {
                  var t = r.get(e) - 1,
                    s = d.get(e) - 1;
                  r.set(e, t), d.set(e, s), t || (o.has(e) || e.removeAttribute(c), o.delete(e)), s || e.removeAttribute(n)
                }), --i || (r = new WeakMap, r = new WeakMap, o = new WeakMap, s = {})
              }
          }(c, u, n, "aria-hidden")) : function() {
            return null
          }
        }
    },
    18552(e, t, n) {
      n.d(t, {
        m: () => s
      });
      var r = n(8789);
      const o = e => "dark" === e ? r.xW.dark : r.xW.light,
        s = (e, t) => [r.xW.tokens, r.xW.typography, r.xW.grid, o(e)].join(" ")
    },
    8316(e, t, n) {
      function r(e, t, {
        checkForDefaultPrevented: n = !0
      } = {}) {
        return function(r) {
          if (e?.(r), !1 === n || !r.defaultPrevented) return t?.(r)
        }
      }
      n.d(t, {
        mK: () => r
      }), "undefined" == typeof window || !window.document || window.document.createElement
    },
    53582(e, t, n) {
      n.d(t, {
        A: () => i,
        q: () => s
      });
      var r = n(93082),
        o = n(39793);

      function s(e, t) {
        const n = r.createContext(t),
          s = e => {
            const {
              children: t,
              ...s
            } = e, i = r.useMemo(() => s, Object.values(s));
            return (0, o.jsx)(n.Provider, {
              value: i,
              children: t
            })
          };
        return s.displayName = e + "Provider", [s, function(o) {
          const s = r.useContext(n);
          if (s) return s;
          if (void 0 !== t) return t;
          throw new Error(`\`${o}\` must be used within \`${e}\``)
        }]
      }

      function i(e, t = []) {
        let n = [];
        const s = () => {
          const t = n.map(e => r.createContext(e));
          return function(n) {
            const o = n?.[e] || t;
            return r.useMemo(() => ({
              [`__scope${e}`]: {
                ...n,
                [e]: o
              }
            }), [n, o])
          }
        };
        return s.scopeName = e, [function(t, s) {
          const i = r.createContext(s),
            a = n.length;
          n = [...n, s];
          const c = t => {
            const {
              scope: n,
              children: s,
              ...c
            } = t, u = n?.[e]?.[a] || i, d = r.useMemo(() => c, Object.values(c));
            return (0, o.jsx)(u.Provider, {
              value: d,
              children: s
            })
          };
          return c.displayName = t + "Provider", [c, function(n, o) {
            const c = o?.[e]?.[a] || i,
              u = r.useContext(c);
            if (u) return u;
            if (void 0 !== s) return s;
            throw new Error(`\`${n}\` must be used within \`${t}\``)
          }]
        }, a(s, ...t)]
      }

      function a(...e) {
        const t = e[0];
        if (1 === e.length) return t;
        const n = () => {
          const n = e.map(e => ({
            useScope: e(),
            scopeName: e.scopeName
          }));
          return function(e) {
            const o = n.reduce((t, {
              useScope: n,
              scopeName: r
            }) => ({
              ...t,
              ...n(e)[`__scope${r}`]
            }), {});
            return r.useMemo(() => ({
              [`__scope${t.scopeName}`]: o
            }), [o])
          }
        };
        return n.scopeName = t.scopeName, n
      }
    },
    88819(e, t, n) {
      n.d(t, {
        UC: () => ne,
        VY: () => oe,
        ZL: () => ee,
        bL: () => X,
        bm: () => se,
        hE: () => re,
        hJ: () => te,
        l9: () => Q
      });
      var r = n(93082),
        o = n(8316),
        s = n(50446),
        i = n(53582),
        a = n(96883),
        c = n(1531),
        u = n(17028),
        d = n(83876),
        l = n(2823),
        f = n(47306),
        p = n(66704),
        m = n(91685),
        v = n(35328),
        y = n(45787),
        g = n(2976),
        h = n(39793),
        E = "Dialog",
        [b, w] = (0, i.A)(E),
        [N, D] = b(E),
        C = e => {
          const {
            __scopeDialog: t,
            children: n,
            open: o,
            defaultOpen: s,
            onOpenChange: i,
            modal: u = !0
          } = e, d = r.useRef(null), l = r.useRef(null), [f, p] = (0, c.i)({
            prop: o,
            defaultProp: s ?? !1,
            onChange: i,
            caller: E
          });
          return (0, h.jsx)(N, {
            scope: t,
            triggerRef: d,
            contentRef: l,
            contentId: (0, a.B)(),
            titleId: (0, a.B)(),
            descriptionId: (0, a.B)(),
            open: f,
            onOpenChange: p,
            onOpenToggle: r.useCallback(() => p(e => !e), [p]),
            modal: u,
            children: n
          })
        };
      C.displayName = E;
      var O = "DialogTrigger",
        x = r.forwardRef((e, t) => {
          const {
            __scopeDialog: n,
            ...r
          } = e, i = D(O, n), a = (0, s.s)(t, i.triggerRef);
          return (0, h.jsx)(p.sG.button, {
            type: "button",
            "aria-haspopup": "dialog",
            "aria-expanded": i.open,
            "aria-controls": i.contentId,
            "data-state": V(i.open),
            ...r,
            ref: a,
            onClick: (0, o.mK)(e.onClick, i.onOpenToggle)
          })
        });
      x.displayName = O;
      var _ = "DialogPortal",
        [R, T] = b(_, {
          forceMount: void 0
        }),
        A = e => {
          const {
            __scopeDialog: t,
            forceMount: n,
            children: o,
            container: s
          } = e, i = D(_, t);
          return (0, h.jsx)(R, {
            scope: t,
            forceMount: n,
            children: r.Children.map(o, e => (0, h.jsx)(f.C, {
              present: n || i.open,
              children: (0, h.jsx)(l.Z, {
                asChild: !0,
                container: s,
                children: e
              })
            }))
          })
        };
      A.displayName = _;
      var I = "DialogOverlay",
        P = r.forwardRef((e, t) => {
          const n = T(I, e.__scopeDialog),
            {
              forceMount: r = n.forceMount,
              ...o
            } = e,
            s = D(I, e.__scopeDialog);
          return s.modal ? (0, h.jsx)(f.C, {
            present: r || s.open,
            children: (0, h.jsx)(M, {
              ...o,
              ref: t
            })
          }) : null
        });
      P.displayName = I;
      var S = (0, g.TL)("DialogOverlay.RemoveScroll"),
        M = r.forwardRef((e, t) => {
          const {
            __scopeDialog: n,
            ...r
          } = e, o = D(I, n);
          return (0, h.jsx)(v.A, {
            as: S,
            allowPinchZoom: !0,
            shards: [o.contentRef],
            children: (0, h.jsx)(p.sG.div, {
              "data-state": V(o.open),
              ...r,
              ref: t,
              style: {
                pointerEvents: "auto",
                ...r.style
              }
            })
          })
        }),
        L = "DialogContent",
        j = r.forwardRef((e, t) => {
          const n = T(L, e.__scopeDialog),
            {
              forceMount: r = n.forceMount,
              ...o
            } = e,
            s = D(L, e.__scopeDialog);
          return (0, h.jsx)(f.C, {
            present: r || s.open,
            children: s.modal ? (0, h.jsx)(k, {
              ...o,
              ref: t
            }) : (0, h.jsx)(F, {
              ...o,
              ref: t
            })
          })
        });
      j.displayName = L;
      var k = r.forwardRef((e, t) => {
          const n = D(L, e.__scopeDialog),
            i = r.useRef(null),
            a = (0, s.s)(t, n.contentRef, i);
          return r.useEffect(() => {
            const e = i.current;
            if (e) return (0, y.Eq)(e)
          }, []), (0, h.jsx)(W, {
            ...e,
            ref: a,
            trapFocus: n.open,
            disableOutsidePointerEvents: !0,
            onCloseAutoFocus: (0, o.mK)(e.onCloseAutoFocus, e => {
              e.preventDefault(), n.triggerRef.current?.focus()
            }),
            onPointerDownOutside: (0, o.mK)(e.onPointerDownOutside, e => {
              const t = e.detail.originalEvent,
                n = 0 === t.button && !0 === t.ctrlKey;
              (2 === t.button || n) && e.preventDefault()
            }),
            onFocusOutside: (0, o.mK)(e.onFocusOutside, e => e.preventDefault())
          })
        }),
        F = r.forwardRef((e, t) => {
          const n = D(L, e.__scopeDialog),
            o = r.useRef(!1),
            s = r.useRef(!1);
          return (0, h.jsx)(W, {
            ...e,
            ref: t,
            trapFocus: !1,
            disableOutsidePointerEvents: !1,
            onCloseAutoFocus: t => {
              e.onCloseAutoFocus?.(t), t.defaultPrevented || (o.current || n.triggerRef.current?.focus(), t.preventDefault()), o.current = !1, s.current = !1
            },
            onInteractOutside: t => {
              e.onInteractOutside?.(t), t.defaultPrevented || (o.current = !0, "pointerdown" === t.detail.originalEvent.type && (s.current = !0));
              const r = t.target,
                i = n.triggerRef.current?.contains(r);
              i && t.preventDefault(), "focusin" === t.detail.originalEvent.type && s.current && t.preventDefault()
            }
          })
        }),
        W = r.forwardRef((e, t) => {
          const {
            __scopeDialog: n,
            trapFocus: o,
            onOpenAutoFocus: i,
            onCloseAutoFocus: a,
            ...c
          } = e, l = D(L, n), f = r.useRef(null), p = (0, s.s)(t, f);
          return (0, m.Oh)(), (0, h.jsxs)(h.Fragment, {
            children: [(0, h.jsx)(d.n, {
              asChild: !0,
              loop: !0,
              trapped: o,
              onMountAutoFocus: i,
              onUnmountAutoFocus: a,
              children: (0, h.jsx)(u.qW, {
                role: "dialog",
                id: l.contentId,
                "aria-describedby": l.descriptionId,
                "aria-labelledby": l.titleId,
                "data-state": V(l.open),
                ...c,
                ref: p,
                onDismiss: () => l.onOpenChange(!1)
              })
            }), (0, h.jsxs)(h.Fragment, {
              children: [(0, h.jsx)(Y, {
                titleId: l.titleId
              }), (0, h.jsx)(J, {
                contentRef: f,
                descriptionId: l.descriptionId
              })]
            })]
          })
        }),
        $ = "DialogTitle",
        K = r.forwardRef((e, t) => {
          const {
            __scopeDialog: n,
            ...r
          } = e, o = D($, n);
          return (0, h.jsx)(p.sG.h2, {
            id: o.titleId,
            ...r,
            ref: t
          })
        });
      K.displayName = $;
      var U = "DialogDescription",
        B = r.forwardRef((e, t) => {
          const {
            __scopeDialog: n,
            ...r
          } = e, o = D(U, n);
          return (0, h.jsx)(p.sG.p, {
            id: o.descriptionId,
            ...r,
            ref: t
          })
        });
      B.displayName = U;
      var q = "DialogClose",
        G = r.forwardRef((e, t) => {
          const {
            __scopeDialog: n,
            ...r
          } = e, s = D(q, n);
          return (0, h.jsx)(p.sG.button, {
            type: "button",
            ...r,
            ref: t,
            onClick: (0, o.mK)(e.onClick, () => s.onOpenChange(!1))
          })
        });

      function V(e) {
        return e ? "open" : "closed"
      }
      G.displayName = q;
      var Z = "DialogTitleWarning",
        [z, H] = (0, i.q)(Z, {
          contentName: L,
          titleName: $,
          docsSlug: "dialog"
        }),
        Y = ({
          titleId: e
        }) => {
          const t = H(Z),
            n = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.\n\nIf you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.\n\nFor more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;
          return r.useEffect(() => {
            e && (document.getElementById(e) || console.error(n))
          }, [n, e]), null
        },
        J = ({
          contentRef: e,
          descriptionId: t
        }) => {
          const n = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${H("DialogDescriptionWarning").contentName}}.`;
          return r.useEffect(() => {
            const r = e.current?.getAttribute("aria-describedby");
            t && r && (document.getElementById(t) || console.warn(n))
          }, [n, e, t]), null
        },
        X = C,
        Q = x,
        ee = A,
        te = P,
        ne = j,
        re = K,
        oe = B,
        se = G
    },
    17028(e, t, n) {
      n.d(t, {
        lg: () => g,
        qW: () => f,
        bL: () => y
      });
      var r, o = n(93082),
        s = n(8316),
        i = n(66704),
        a = n(50446),
        c = n(38351),
        u = n(39793),
        d = "dismissableLayer.update",
        l = o.createContext({
          layers: new Set,
          layersWithOutsidePointerEventsDisabled: new Set,
          branches: new Set
        }),
        f = o.forwardRef((e, t) => {
          const {
            disableOutsidePointerEvents: n = !1,
            onEscapeKeyDown: f,
            onPointerDownOutside: p,
            onFocusOutside: y,
            onInteractOutside: g,
            onDismiss: h,
            ...E
          } = e, b = o.useContext(l), [w, N] = o.useState(null), D = w?.ownerDocument ?? globalThis?.document, [, C] = o.useState({}), O = (0, a.s)(t, e => N(e)), x = Array.from(b.layers), [_] = [...b.layersWithOutsidePointerEventsDisabled].slice(-1), R = x.indexOf(_), T = w ? x.indexOf(w) : -1, A = b.layersWithOutsidePointerEventsDisabled.size > 0, I = T >= R, P = function(e, t = globalThis?.document) {
            const n = (0, c.c)(e),
              r = o.useRef(!1),
              s = o.useRef(() => {});
            return o.useEffect(() => {
              const e = e => {
                  if (e.target && !r.current) {
                    let r = function() {
                      v("dismissableLayer.pointerDownOutside", n, o, {
                        discrete: !0
                      })
                    };
                    const o = {
                      originalEvent: e
                    };
                    "touch" === e.pointerType ? (t.removeEventListener("click", s.current), s.current = r, t.addEventListener("click", s.current, {
                      once: !0
                    })) : r()
                  } else t.removeEventListener("click", s.current);
                  r.current = !1
                },
                o = window.setTimeout(() => {
                  t.addEventListener("pointerdown", e)
                }, 0);
              return () => {
                window.clearTimeout(o), t.removeEventListener("pointerdown", e), t.removeEventListener("click", s.current)
              }
            }, [t, n]), {
              onPointerDownCapture: () => r.current = !0
            }
          }(e => {
            const t = e.target,
              n = [...b.branches].some(e => e.contains(t));
            I && !n && (p?.(e), g?.(e), e.defaultPrevented || h?.())
          }, D), S = function(e, t = globalThis?.document) {
            const n = (0, c.c)(e),
              r = o.useRef(!1);
            return o.useEffect(() => {
              const e = e => {
                e.target && !r.current && v("dismissableLayer.focusOutside", n, {
                  originalEvent: e
                }, {
                  discrete: !1
                })
              };
              return t.addEventListener("focusin", e), () => t.removeEventListener("focusin", e)
            }, [t, n]), {
              onFocusCapture: () => r.current = !0,
              onBlurCapture: () => r.current = !1
            }
          }(e => {
            const t = e.target;
            [...b.branches].some(e => e.contains(t)) || (y?.(e), g?.(e), e.defaultPrevented || h?.())
          }, D);
          return function(e, t = globalThis?.document) {
            const n = (0, c.c)(e);
            o.useEffect(() => {
              const e = e => {
                "Escape" === e.key && n(e)
              };
              return t.addEventListener("keydown", e, {
                capture: !0
              }), () => t.removeEventListener("keydown", e, {
                capture: !0
              })
            }, [n, t])
          }(e => {
            T === b.layers.size - 1 && (f?.(e), !e.defaultPrevented && h && (e.preventDefault(), h()))
          }, D), o.useEffect(() => {
            if (w) return n && (0 === b.layersWithOutsidePointerEventsDisabled.size && (r = D.body.style.pointerEvents, D.body.style.pointerEvents = "none"), b.layersWithOutsidePointerEventsDisabled.add(w)), b.layers.add(w), m(), () => {
              n && 1 === b.layersWithOutsidePointerEventsDisabled.size && (D.body.style.pointerEvents = r)
            }
          }, [w, D, n, b]), o.useEffect(() => () => {
            w && (b.layers.delete(w), b.layersWithOutsidePointerEventsDisabled.delete(w), m())
          }, [w, b]), o.useEffect(() => {
            const e = () => C({});
            return document.addEventListener(d, e), () => document.removeEventListener(d, e)
          }, []), (0, u.jsx)(i.sG.div, {
            ...E,
            ref: O,
            style: {
              pointerEvents: A ? I ? "auto" : "none" : void 0,
              ...e.style
            },
            onFocusCapture: (0, s.mK)(e.onFocusCapture, S.onFocusCapture),
            onBlurCapture: (0, s.mK)(e.onBlurCapture, S.onBlurCapture),
            onPointerDownCapture: (0, s.mK)(e.onPointerDownCapture, P.onPointerDownCapture)
          })
        });
      f.displayName = "DismissableLayer";
      var p = o.forwardRef((e, t) => {
        const n = o.useContext(l),
          r = o.useRef(null),
          s = (0, a.s)(t, r);
        return o.useEffect(() => {
          const e = r.current;
          if (e) return n.branches.add(e), () => {
            n.branches.delete(e)
          }
        }, [n.branches]), (0, u.jsx)(i.sG.div, {
          ...e,
          ref: s
        })
      });

      function m() {
        const e = new CustomEvent(d);
        document.dispatchEvent(e)
      }

      function v(e, t, n, {
        discrete: r
      }) {
        const o = n.originalEvent.target,
          s = new CustomEvent(e, {
            bubbles: !1,
            cancelable: !0,
            detail: n
          });
        t && o.addEventListener(e, t, {
          once: !0
        }), r ? (0, i.hO)(o, s) : o.dispatchEvent(s)
      }
      p.displayName = "DismissableLayerBranch";
      var y = f,
        g = p
    },
    91685(e, t, n) {
      n.d(t, {
        Oh: () => s
      });
      var r = n(93082),
        o = 0;

      function s() {
        r.useEffect(() => {
          const e = document.querySelectorAll("[data-radix-focus-guard]");
          return document.body.insertAdjacentElement("afterbegin", e[0] ?? i()), document.body.insertAdjacentElement("beforeend", e[1] ?? i()), o++, () => {
            1 === o && document.querySelectorAll("[data-radix-focus-guard]").forEach(e => e.remove()), o--
          }
        }, [])
      }

      function i() {
        const e = document.createElement("span");
        return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e
      }
    },
    83876(e, t, n) {
      n.d(t, {
        n: () => l
      });
      var r = n(93082),
        o = n(50446),
        s = n(66704),
        i = n(38351),
        a = n(39793),
        c = "focusScope.autoFocusOnMount",
        u = "focusScope.autoFocusOnUnmount",
        d = {
          bubbles: !1,
          cancelable: !0
        },
        l = r.forwardRef((e, t) => {
          const {
            loop: n = !1,
            trapped: l = !1,
            onMountAutoFocus: m,
            onUnmountAutoFocus: g,
            ...h
          } = e, [E, b] = r.useState(null), w = (0, i.c)(m), N = (0, i.c)(g), D = r.useRef(null), C = (0, o.s)(t, e => b(e)), O = r.useRef({
            paused: !1,
            pause() {
              this.paused = !0
            },
            resume() {
              this.paused = !1
            }
          }).current;
          r.useEffect(() => {
            if (l) {
              let e = function(e) {
                  if (O.paused || !E) return;
                  const t = e.target;
                  E.contains(t) ? D.current = t : v(D.current, {
                    select: !0
                  })
                },
                t = function(e) {
                  if (O.paused || !E) return;
                  const t = e.relatedTarget;
                  null !== t && (E.contains(t) || v(D.current, {
                    select: !0
                  }))
                },
                n = function(e) {
                  if (document.activeElement === document.body)
                    for (const t of e) t.removedNodes.length > 0 && v(E)
                };
              document.addEventListener("focusin", e), document.addEventListener("focusout", t);
              const r = new MutationObserver(n);
              return E && r.observe(E, {
                childList: !0,
                subtree: !0
              }), () => {
                document.removeEventListener("focusin", e), document.removeEventListener("focusout", t), r.disconnect()
              }
            }
          }, [l, E, O.paused]), r.useEffect(() => {
            if (E) {
              y.add(O);
              const e = document.activeElement;
              if (!E.contains(e)) {
                const t = new CustomEvent(c, d);
                E.addEventListener(c, w), E.dispatchEvent(t), t.defaultPrevented || (function(e, {
                  select: t = !1
                } = {}) {
                  const n = document.activeElement;
                  for (const r of e)
                    if (v(r, {
                        select: t
                      }), document.activeElement !== n) return
                }(f(E).filter(e => "A" !== e.tagName), {
                  select: !0
                }), document.activeElement === e && v(E))
              }
              return () => {
                E.removeEventListener(c, w), setTimeout(() => {
                  const t = new CustomEvent(u, d);
                  E.addEventListener(u, N), E.dispatchEvent(t), t.defaultPrevented || v(e ?? document.body, {
                    select: !0
                  }), E.removeEventListener(u, N), y.remove(O)
                }, 0)
              }
            }
          }, [E, w, N, O]);
          const x = r.useCallback(e => {
            if (!n && !l) return;
            if (O.paused) return;
            const t = "Tab" === e.key && !e.altKey && !e.ctrlKey && !e.metaKey,
              r = document.activeElement;
            if (t && r) {
              const t = e.currentTarget,
                [o, s] = function(e) {
                  const t = f(e);
                  return [p(t, e), p(t.reverse(), e)]
                }(t);
              o && s ? e.shiftKey || r !== s ? e.shiftKey && r === o && (e.preventDefault(), n && v(s, {
                select: !0
              })) : (e.preventDefault(), n && v(o, {
                select: !0
              })) : r === t && e.preventDefault()
            }
          }, [n, l, O.paused]);
          return (0, a.jsx)(s.sG.div, {
            tabIndex: -1,
            ...h,
            ref: C,
            onKeyDown: x
          })
        });

      function f(e) {
        const t = [],
          n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
            acceptNode: e => {
              const t = "INPUT" === e.tagName && "hidden" === e.type;
              return e.disabled || e.hidden || t ? NodeFilter.FILTER_SKIP : e.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
            }
          });
        for (; n.nextNode();) t.push(n.currentNode);
        return t
      }

      function p(e, t) {
        for (const n of e)
          if (!m(n, {
              upTo: t
            })) return n
      }

      function m(e, {
        upTo: t
      }) {
        if ("hidden" === getComputedStyle(e).visibility) return !0;
        for (; e;) {
          if (void 0 !== t && e === t) return !1;
          if ("none" === getComputedStyle(e).display) return !0;
          e = e.parentElement
        }
        return !1
      }

      function v(e, {
        select: t = !1
      } = {}) {
        if (e && e.focus) {
          const n = document.activeElement;
          e.focus({
            preventScroll: !0
          }), e !== n && function(e) {
            return e instanceof HTMLInputElement && "select" in e
          }(e) && t && e.select()
        }
      }
      l.displayName = "FocusScope";
      var y = function() {
        let e = [];
        return {
          add(t) {
            const n = e[0];
            t !== n && n?.pause(), e = g(e, t), e.unshift(t)
          },
          remove(t) {
            e = g(e, t), e[0]?.resume()
          }
        }
      }();

      function g(e, t) {
        const n = [...e],
          r = n.indexOf(t);
        return -1 !== r && n.splice(r, 1), n
      }
    },
    96883(e, t, n) {
      var r;
      n.d(t, {
        B: () => c
      });
      var o = n(93082),
        s = n(86627),
        i = (r || (r = n.t(o, 2)))[" useId ".trim().toString()] || (() => {}),
        a = 0;

      function c(e) {
        const [t, n] = o.useState(i());
        return (0, s.N)(() => {
          e || n(e => e ?? String(a++))
        }, [e]), e || (t ? `radix-${t}` : "")
      }
    },
    2823(e, t, n) {
      n.d(t, {
        Z: () => c
      });
      var r = n(93082),
        o = n(84017),
        s = n(66704),
        i = n(86627),
        a = n(39793),
        c = r.forwardRef((e, t) => {
          const {
            container: n,
            ...c
          } = e, [u, d] = r.useState(!1);
          (0, i.N)(() => d(!0), []);
          const l = n || u && globalThis?.document?.body;
          return l ? o.createPortal((0, a.jsx)(s.sG.div, {
            ...c,
            ref: t
          }), l) : null
        });
      c.displayName = "Portal"
    },
    47306(e, t, n) {
      n.d(t, {
        C: () => i
      });
      var r = n(93082),
        o = n(50446),
        s = n(86627),
        i = e => {
          const {
            present: t,
            children: n
          } = e, i = function(e) {
            const [t, n] = r.useState(), o = r.useRef(null), i = r.useRef(e), c = r.useRef("none"), u = e ? "mounted" : "unmounted", [d, l] = function(e, t) {
              return r.useReducer((e, n) => t[e][n] ?? e, e)
            }(u, {
              mounted: {
                UNMOUNT: "unmounted",
                ANIMATION_OUT: "unmountSuspended"
              },
              unmountSuspended: {
                MOUNT: "mounted",
                ANIMATION_END: "unmounted"
              },
              unmounted: {
                MOUNT: "mounted"
              }
            });
            return r.useEffect(() => {
              const e = a(o.current);
              c.current = "mounted" === d ? e : "none"
            }, [d]), (0, s.N)(() => {
              const t = o.current,
                n = i.current;
              if (n !== e) {
                const r = c.current,
                  o = a(t);
                l(e ? "MOUNT" : "none" === o || "none" === t?.display ? "UNMOUNT" : n && r !== o ? "ANIMATION_OUT" : "UNMOUNT"), i.current = e
              }
            }, [e, l]), (0, s.N)(() => {
              if (t) {
                let e;
                const n = t.ownerDocument.defaultView ?? window,
                  r = r => {
                    const s = a(o.current).includes(CSS.escape(r.animationName));
                    if (r.target === t && s && (l("ANIMATION_END"), !i.current)) {
                      const r = t.style.animationFillMode;
                      t.style.animationFillMode = "forwards", e = n.setTimeout(() => {
                        "forwards" === t.style.animationFillMode && (t.style.animationFillMode = r)
                      })
                    }
                  },
                  s = e => {
                    e.target === t && (c.current = a(o.current))
                  };
                return t.addEventListener("animationstart", s), t.addEventListener("animationcancel", r), t.addEventListener("animationend", r), () => {
                  n.clearTimeout(e), t.removeEventListener("animationstart", s), t.removeEventListener("animationcancel", r), t.removeEventListener("animationend", r)
                }
              }
              l("ANIMATION_END")
            }, [t, l]), {
              isPresent: ["mounted", "unmountSuspended"].includes(d),
              ref: r.useCallback(e => {
                o.current = e ? getComputedStyle(e) : null, n(e)
              }, [])
            }
          }(t), c = "function" == typeof n ? n({
            present: i.isPresent
          }) : r.Children.only(n), u = (0, o.s)(i.ref, function(e) {
            let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
              n = t && "isReactWarning" in t && t.isReactWarning;
            return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref)
          }(c));
          return "function" == typeof n || i.isPresent ? r.cloneElement(c, {
            ref: u
          }) : null
        };

      function a(e) {
        return e?.animationName || "none"
      }
      i.displayName = "Presence"
    },
    66704(e, t, n) {
      n.d(t, {
        hO: () => c,
        sG: () => a
      });
      var r = n(93082),
        o = n(84017),
        s = n(2976),
        i = n(39793),
        a = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"].reduce((e, t) => {
          const n = (0, s.TL)(`Primitive.${t}`),
            o = r.forwardRef((e, r) => {
              const {
                asChild: o,
                ...s
              } = e, a = o ? n : t;
              return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, i.jsx)(a, {
                ...s,
                ref: r
              })
            });
          return o.displayName = `Primitive.${t}`, {
            ...e,
            [t]: o
          }
        }, {});

      function c(e, t) {
        e && o.flushSync(() => e.dispatchEvent(t))
      }
    },
    2976(e, t, n) {
      n.d(t, {
        Dc: () => u,
        TL: () => i
      });
      var r = n(93082),
        o = n(50446),
        s = n(39793);

      function i(e) {
        const t = a(e),
          n = r.forwardRef((e, n) => {
            const {
              children: o,
              ...i
            } = e, a = r.Children.toArray(o), c = a.find(d);
            if (c) {
              const e = c.props.children,
                o = a.map(t => t === c ? r.Children.count(e) > 1 ? r.Children.only(null) : r.isValidElement(e) ? e.props.children : null : t);
              return (0, s.jsx)(t, {
                ...i,
                ref: n,
                children: r.isValidElement(e) ? r.cloneElement(e, void 0, o) : null
              })
            }
            return (0, s.jsx)(t, {
              ...i,
              ref: n,
              children: o
            })
          });
        return n.displayName = `${e}.Slot`, n
      }

      function a(e) {
        const t = r.forwardRef((e, t) => {
          const {
            children: n,
            ...s
          } = e;
          if (r.isValidElement(n)) {
            const e = function(e) {
                let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
                  n = t && "isReactWarning" in t && t.isReactWarning;
                return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref)
              }(n),
              i = function(e, t) {
                const n = {
                  ...t
                };
                for (const r in t) {
                  const o = e[r],
                    s = t[r];
                  /^on[A-Z]/.test(r) ? o && s ? n[r] = (...e) => {
                    const t = s(...e);
                    return o(...e), t
                  } : o && (n[r] = o) : "style" === r ? n[r] = {
                    ...o,
                    ...s
                  } : "className" === r && (n[r] = [o, s].filter(Boolean).join(" "))
                }
                return {
                  ...e,
                  ...n
                }
              }(s, n.props);
            return n.type !== r.Fragment && (i.ref = t ? (0, o.t)(t, e) : e), r.cloneElement(n, i)
          }
          return r.Children.count(n) > 1 ? r.Children.only(null) : null
        });
        return t.displayName = `${e}.SlotClone`, t
      }
      var c = Symbol("radix.slottable");

      function u(e) {
        const t = ({
          children: e
        }) => (0, s.jsx)(s.Fragment, {
          children: e
        });
        return t.displayName = `${e}.Slottable`, t.__radixId = c, t
      }

      function d(e) {
        return r.isValidElement(e) && "function" == typeof e.type && "__radixId" in e.type && e.type.__radixId === c
      }
    },
    38351(e, t, n) {
      n.d(t, {
        c: () => o
      });
      var r = n(93082);

      function o(e) {
        const t = r.useRef(e);
        return r.useEffect(() => {
          t.current = e
        }), r.useMemo(() => (...e) => t.current?.(...e), [])
      }
    },
    1531(e, t, n) {
      var r;
      n.d(t, {
        i: () => a
      });
      var o = n(93082),
        s = n(86627),
        i = (r || (r = n.t(o, 2)))[" useInsertionEffect ".trim().toString()] || s.N;

      function a({
        prop: e,
        defaultProp: t,
        onChange: n = () => {},
        caller: r
      }) {
        const [s, a, c] = function({
          defaultProp: e,
          onChange: t
        }) {
          const [n, r] = o.useState(e), s = o.useRef(n), a = o.useRef(t);
          return i(() => {
            a.current = t
          }, [t]), o.useEffect(() => {
            s.current !== n && (a.current?.(n), s.current = n)
          }, [n, s]), [n, r, a]
        }({
          defaultProp: t,
          onChange: n
        }), u = void 0 !== e, d = u ? e : s; {
          const t = o.useRef(void 0 !== e);
          o.useEffect(() => {
            const e = t.current;
            if (e !== u) {
              const t = e ? "controlled" : "uncontrolled",
                n = u ? "controlled" : "uncontrolled";
              console.warn(`${r} is changing from ${t} to ${n}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`)
            }
            t.current = u
          }, [u, r])
        }
        const l = o.useCallback(t => {
          if (u) {
            const n = function(e) {
              return "function" == typeof e
            }(t) ? t(e) : t;
            n !== e && c.current?.(n)
          } else a(t)
        }, [u, e, a, c]);
        return [d, l]
      }
      Symbol("RADIX:SYNC_STATE")
    },
    86627(e, t, n) {
      n.d(t, {
        N: () => o
      });
      var r = n(93082),
        o = globalThis?.document ? r.useLayoutEffect : () => {}
    }
  }
]);