try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "dd146998-641a-4b70-96a0-533770c65a0b", e._sentryDebugIdIdentifier = "sentry-dbid-dd146998-641a-4b70-96a0-533770c65a0b")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/modules-core-header",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_header = self.webpackChunk_rockstargames_modules_core_header || []).push([
  [3571], {
    23846: (e, t, n) => {
      n.d(t, {
        hO: () => u,
        sG: () => a
      });
      var r = n(71127),
        o = n(18429),
        s = n(80076),
        i = n(42295),
        a = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"].reduce((e, t) => {
          const n = (0, s.createSlot)(`Primitive.${t}`),
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

      function u(e, t) {
        e && o.flushSync(() => e.dispatchEvent(t))
      }
    },
    53571: (e, t, n) => {
      n.r(t), n.d(t, {
        Close: () => ge,
        Content: () => fe,
        Description: () => me,
        Dialog: () => j,
        DialogClose: () => te,
        DialogContent: () => K,
        DialogDescription: () => X,
        DialogOverlay: () => q,
        DialogPortal: () => U,
        DialogTitle: () => J,
        DialogTrigger: () => S,
        Overlay: () => de,
        Portal: () => le,
        Root: () => ue,
        Title: () => pe,
        Trigger: () => ce,
        WarningProvider: () => oe,
        createDialogScope: () => P
      });
      var r = n(71127);

      function o(e, t, {
        checkForDefaultPrevented: n = !0
      } = {}) {
        return function(r) {
          if (e?.(r), !1 === n || !r.defaultPrevented) return t?.(r)
        }
      }
      var s, i = n(95362),
        a = n(85426),
        u = n(74406),
        c = n(79158),
        l = n(23846),
        d = n(76286),
        f = n(94040),
        p = n(42295),
        m = "dismissableLayer.update",
        g = r.createContext({
          layers: new Set,
          layersWithOutsidePointerEventsDisabled: new Set,
          branches: new Set
        }),
        v = r.forwardRef((e, t) => {
          const {
            disableOutsidePointerEvents: n = !1,
            onEscapeKeyDown: a,
            onPointerDownOutside: u,
            onFocusOutside: c,
            onInteractOutside: v,
            onDismiss: b,
            ...w
          } = e, E = r.useContext(g), [D, N] = r.useState(null), O = D?.ownerDocument ?? globalThis?.document, [, _] = r.useState({}), C = (0, i.s)(t, e => N(e)), R = Array.from(E.layers), [x] = [...E.layersWithOutsidePointerEventsDisabled].slice(-1), A = R.indexOf(x), M = D ? R.indexOf(D) : -1, P = E.layersWithOutsidePointerEventsDisabled.size > 0, I = M >= A, T = function(e, t = globalThis?.document) {
            const n = (0, d.c)(e),
              o = r.useRef(!1),
              s = r.useRef(() => {});
            return r.useEffect(() => {
              const e = e => {
                  if (e.target && !o.current) {
                    let r = function() {
                      h("dismissableLayer.pointerDownOutside", n, o, {
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
                  o.current = !1
                },
                r = window.setTimeout(() => {
                  t.addEventListener("pointerdown", e)
                }, 0);
              return () => {
                window.clearTimeout(r), t.removeEventListener("pointerdown", e), t.removeEventListener("click", s.current)
              }
            }, [t, n]), {
              onPointerDownCapture: () => o.current = !0
            }
          }(e => {
            const t = e.target,
              n = [...E.branches].some(e => e.contains(t));
            I && !n && (u?.(e), v?.(e), e.defaultPrevented || b?.())
          }, O), j = function(e, t = globalThis?.document) {
            const n = (0, d.c)(e),
              o = r.useRef(!1);
            return r.useEffect(() => {
              const e = e => {
                e.target && !o.current && h("dismissableLayer.focusOutside", n, {
                  originalEvent: e
                }, {
                  discrete: !1
                })
              };
              return t.addEventListener("focusin", e), () => t.removeEventListener("focusin", e)
            }, [t, n]), {
              onFocusCapture: () => o.current = !0,
              onBlurCapture: () => o.current = !1
            }
          }(e => {
            const t = e.target;
            [...E.branches].some(e => e.contains(t)) || (c?.(e), v?.(e), e.defaultPrevented || b?.())
          }, O);
          return (0, f.U)(e => {
            M === E.layers.size - 1 && (a?.(e), !e.defaultPrevented && b && (e.preventDefault(), b()))
          }, O), r.useEffect(() => {
            if (D) return n && (0 === E.layersWithOutsidePointerEventsDisabled.size && (s = O.body.style.pointerEvents, O.body.style.pointerEvents = "none"), E.layersWithOutsidePointerEventsDisabled.add(D)), E.layers.add(D), y(), () => {
              n && 1 === E.layersWithOutsidePointerEventsDisabled.size && (O.body.style.pointerEvents = s)
            }
          }, [D, O, n, E]), r.useEffect(() => () => {
            D && (E.layers.delete(D), E.layersWithOutsidePointerEventsDisabled.delete(D), y())
          }, [D, E]), r.useEffect(() => {
            const e = () => _({});
            return document.addEventListener(m, e), () => document.removeEventListener(m, e)
          }, []), (0, p.jsx)(l.sG.div, {
            ...w,
            ref: C,
            style: {
              pointerEvents: P ? I ? "auto" : "none" : void 0,
              ...e.style
            },
            onFocusCapture: o(e.onFocusCapture, j.onFocusCapture),
            onBlurCapture: o(e.onBlurCapture, j.onBlurCapture),
            onPointerDownCapture: o(e.onPointerDownCapture, T.onPointerDownCapture)
          })
        });

      function y() {
        const e = new CustomEvent(m);
        document.dispatchEvent(e)
      }

      function h(e, t, n, {
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
        }), r ? (0, l.hO)(o, s) : o.dispatchEvent(s)
      }
      v.displayName = "DismissableLayer", r.forwardRef((e, t) => {
        const n = r.useContext(g),
          o = r.useRef(null),
          s = (0, i.s)(t, o);
        return r.useEffect(() => {
          const e = o.current;
          if (e) return n.branches.add(e), () => {
            n.branches.delete(e)
          }
        }, [n.branches]), (0, p.jsx)(l.sG.div, {
          ...e,
          ref: s
        })
      }).displayName = "DismissableLayerBranch";
      var b = n(56041),
        w = n(55856),
        E = n(63155),
        D = e => {
          const {
            present: t,
            children: n
          } = e, o = function(e) {
            const [t, n] = r.useState(), o = r.useRef(null), s = r.useRef(e), i = r.useRef("none"), a = e ? "mounted" : "unmounted", [u, c] = function(e, t) {
              return r.useReducer((e, n) => t[e][n] ?? e, e)
            }(a, {
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
              const e = N(o.current);
              i.current = "mounted" === u ? e : "none"
            }, [u]), (0, E.N)(() => {
              const t = o.current,
                n = s.current;
              if (n !== e) {
                const r = i.current,
                  o = N(t);
                c(e ? "MOUNT" : "none" === o || "none" === t?.display ? "UNMOUNT" : n && r !== o ? "ANIMATION_OUT" : "UNMOUNT"), s.current = e
              }
            }, [e, c]), (0, E.N)(() => {
              if (t) {
                let e;
                const n = t.ownerDocument.defaultView ?? window,
                  r = r => {
                    const i = N(o.current).includes(r.animationName);
                    if (r.target === t && i && (c("ANIMATION_END"), !s.current)) {
                      const r = t.style.animationFillMode;
                      t.style.animationFillMode = "forwards", e = n.setTimeout(() => {
                        "forwards" === t.style.animationFillMode && (t.style.animationFillMode = r)
                      })
                    }
                  },
                  a = e => {
                    e.target === t && (i.current = N(o.current))
                  };
                return t.addEventListener("animationstart", a), t.addEventListener("animationcancel", r), t.addEventListener("animationend", r), () => {
                  n.clearTimeout(e), t.removeEventListener("animationstart", a), t.removeEventListener("animationcancel", r), t.removeEventListener("animationend", r)
                }
              }
              c("ANIMATION_END")
            }, [t, c]), {
              isPresent: ["mounted", "unmountSuspended"].includes(u),
              ref: r.useCallback(e => {
                o.current = e ? getComputedStyle(e) : null, n(e)
              }, [])
            }
          }(t), s = "function" == typeof n ? n({
            present: o.isPresent
          }) : r.Children.only(n), a = (0, i.s)(o.ref, function(e) {
            let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
              n = t && "isReactWarning" in t && t.isReactWarning;
            return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref)
          }(s));
          return "function" == typeof n || o.isPresent ? r.cloneElement(s, {
            ref: a
          }) : null
        };

      function N(e) {
        return e?.animationName || "none"
      }
      D.displayName = "Presence";
      var O = 0;

      function _() {
        const e = document.createElement("span");
        return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e
      }
      var C = n(19690),
        R = n(94926),
        x = n(80076),
        A = "Dialog",
        [M, P] = (0, a.A)(A),
        [I, T] = M(A),
        j = e => {
          const {
            __scopeDialog: t,
            children: n,
            open: o,
            defaultOpen: s,
            onOpenChange: i,
            modal: a = !0
          } = e, l = r.useRef(null), d = r.useRef(null), [f, m] = (0, c.useControllableState)({
            prop: o,
            defaultProp: s ?? !1,
            onChange: i,
            caller: A
          });
          return (0, p.jsx)(I, {
            scope: t,
            triggerRef: l,
            contentRef: d,
            contentId: (0, u.useId)(),
            titleId: (0, u.useId)(),
            descriptionId: (0, u.useId)(),
            open: f,
            onOpenChange: m,
            onOpenToggle: r.useCallback(() => m(e => !e), [m]),
            modal: a,
            children: n
          })
        };
      j.displayName = A;
      var k = "DialogTrigger",
        S = r.forwardRef((e, t) => {
          const {
            __scopeDialog: n,
            ...r
          } = e, s = T(k, n), a = (0, i.s)(t, s.triggerRef);
          return (0, p.jsx)(l.sG.button, {
            type: "button",
            "aria-haspopup": "dialog",
            "aria-expanded": s.open,
            "aria-controls": s.contentId,
            "data-state": ne(s.open),
            ...r,
            ref: a,
            onClick: o(e.onClick, s.onOpenToggle)
          })
        });
      S.displayName = k;
      var F = "DialogPortal",
        [L, W] = M(F, {
          forceMount: void 0
        }),
        U = e => {
          const {
            __scopeDialog: t,
            forceMount: n,
            children: o,
            container: s
          } = e, i = T(F, t);
          return (0, p.jsx)(L, {
            scope: t,
            forceMount: n,
            children: r.Children.map(o, e => (0, p.jsx)(D, {
              present: n || i.open,
              children: (0, p.jsx)(w.Portal, {
                asChild: !0,
                container: s,
                children: e
              })
            }))
          })
        };
      U.displayName = F;
      var $ = "DialogOverlay",
        q = r.forwardRef((e, t) => {
          const n = W($, e.__scopeDialog),
            {
              forceMount: r = n.forceMount,
              ...o
            } = e,
            s = T($, e.__scopeDialog);
          return s.modal ? (0, p.jsx)(D, {
            present: r || s.open,
            children: (0, p.jsx)(G, {
              ...o,
              ref: t
            })
          }) : null
        });
      q.displayName = $;
      var B = (0, x.createSlot)("DialogOverlay.RemoveScroll"),
        G = r.forwardRef((e, t) => {
          const {
            __scopeDialog: n,
            ...r
          } = e, o = T($, n);
          return (0, p.jsx)(C.RemoveScroll, {
            as: B,
            allowPinchZoom: !0,
            shards: [o.contentRef],
            children: (0, p.jsx)(l.sG.div, {
              "data-state": ne(o.open),
              ...r,
              ref: t,
              style: {
                pointerEvents: "auto",
                ...r.style
              }
            })
          })
        }),
        z = "DialogContent",
        K = r.forwardRef((e, t) => {
          const n = W(z, e.__scopeDialog),
            {
              forceMount: r = n.forceMount,
              ...o
            } = e,
            s = T(z, e.__scopeDialog);
          return (0, p.jsx)(D, {
            present: r || s.open,
            children: s.modal ? (0, p.jsx)(V, {
              ...o,
              ref: t
            }) : (0, p.jsx)(H, {
              ...o,
              ref: t
            })
          })
        });
      K.displayName = z;
      var V = r.forwardRef((e, t) => {
          const n = T(z, e.__scopeDialog),
            s = r.useRef(null),
            a = (0, i.s)(t, n.contentRef, s);
          return r.useEffect(() => {
            const e = s.current;
            if (e) return (0, R.Eq)(e)
          }, []), (0, p.jsx)(Y, {
            ...e,
            ref: a,
            trapFocus: n.open,
            disableOutsidePointerEvents: !0,
            onCloseAutoFocus: o(e.onCloseAutoFocus, e => {
              e.preventDefault(), n.triggerRef.current?.focus()
            }),
            onPointerDownOutside: o(e.onPointerDownOutside, e => {
              const t = e.detail.originalEvent,
                n = 0 === t.button && !0 === t.ctrlKey;
              (2 === t.button || n) && e.preventDefault()
            }),
            onFocusOutside: o(e.onFocusOutside, e => e.preventDefault())
          })
        }),
        H = r.forwardRef((e, t) => {
          const n = T(z, e.__scopeDialog),
            o = r.useRef(!1),
            s = r.useRef(!1);
          return (0, p.jsx)(Y, {
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
        Y = r.forwardRef((e, t) => {
          const {
            __scopeDialog: n,
            trapFocus: o,
            onOpenAutoFocus: s,
            onCloseAutoFocus: a,
            ...u
          } = e, c = T(z, n), l = r.useRef(null), d = (0, i.s)(t, l);
          return r.useEffect(() => {
            const e = document.querySelectorAll("[data-radix-focus-guard]");
            return document.body.insertAdjacentElement("afterbegin", e[0] ?? _()), document.body.insertAdjacentElement("beforeend", e[1] ?? _()), O++, () => {
              1 === O && document.querySelectorAll("[data-radix-focus-guard]").forEach(e => e.remove()), O--
            }
          }, []), (0, p.jsxs)(p.Fragment, {
            children: [(0, p.jsx)(b.FocusScope, {
              asChild: !0,
              loop: !0,
              trapped: o,
              onMountAutoFocus: s,
              onUnmountAutoFocus: a,
              children: (0, p.jsx)(v, {
                role: "dialog",
                id: c.contentId,
                "aria-describedby": c.descriptionId,
                "aria-labelledby": c.titleId,
                "data-state": ne(c.open),
                ...u,
                ref: d,
                onDismiss: () => c.onOpenChange(!1)
              })
            }), (0, p.jsxs)(p.Fragment, {
              children: [(0, p.jsx)(ie, {
                titleId: c.titleId
              }), (0, p.jsx)(ae, {
                contentRef: l,
                descriptionId: c.descriptionId
              })]
            })]
          })
        }),
        Z = "DialogTitle",
        J = r.forwardRef((e, t) => {
          const {
            __scopeDialog: n,
            ...r
          } = e, o = T(Z, n);
          return (0, p.jsx)(l.sG.h2, {
            id: o.titleId,
            ...r,
            ref: t
          })
        });
      J.displayName = Z;
      var Q = "DialogDescription",
        X = r.forwardRef((e, t) => {
          const {
            __scopeDialog: n,
            ...r
          } = e, o = T(Q, n);
          return (0, p.jsx)(l.sG.p, {
            id: o.descriptionId,
            ...r,
            ref: t
          })
        });
      X.displayName = Q;
      var ee = "DialogClose",
        te = r.forwardRef((e, t) => {
          const {
            __scopeDialog: n,
            ...r
          } = e, s = T(ee, n);
          return (0, p.jsx)(l.sG.button, {
            type: "button",
            ...r,
            ref: t,
            onClick: o(e.onClick, () => s.onOpenChange(!1))
          })
        });

      function ne(e) {
        return e ? "open" : "closed"
      }
      te.displayName = ee;
      var re = "DialogTitleWarning",
        [oe, se] = (0, a.q)(re, {
          contentName: z,
          titleName: Z,
          docsSlug: "dialog"
        }),
        ie = ({
          titleId: e
        }) => {
          const t = se(re),
            n = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.\n\nIf you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.\n\nFor more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;
          return r.useEffect(() => {
            e && (document.getElementById(e) || console.error(n))
          }, [n, e]), null
        },
        ae = ({
          contentRef: e,
          descriptionId: t
        }) => {
          const n = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${se("DialogDescriptionWarning").contentName}}.`;
          return r.useEffect(() => {
            const r = e.current?.getAttribute("aria-describedby");
            t && r && (document.getElementById(t) || console.warn(n))
          }, [n, e, t]), null
        },
        ue = j,
        ce = S,
        le = U,
        de = q,
        fe = K,
        pe = J,
        me = X,
        ge = te
    },
    63155: (e, t, n) => {
      n.d(t, {
        N: () => o
      });
      var r = n(71127),
        o = globalThis?.document ? r.useLayoutEffect : () => {}
    },
    76286: (e, t, n) => {
      n.d(t, {
        c: () => o
      });
      var r = n(71127);

      function o(e) {
        const t = r.useRef(e);
        return r.useEffect(() => {
          t.current = e
        }), r.useMemo(() => (...e) => t.current?.(...e), [])
      }
    },
    85426: (e, t, n) => {
      n.d(t, {
        A: () => i,
        q: () => s
      });
      var r = n(71127),
        o = n(42295);

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
          const u = t => {
            const {
              scope: n,
              children: s,
              ...u
            } = t, c = n?.[e]?.[a] || i, l = r.useMemo(() => u, Object.values(u));
            return (0, o.jsx)(c.Provider, {
              value: l,
              children: s
            })
          };
          return u.displayName = t + "Provider", [u, function(n, o) {
            const u = o?.[e]?.[a] || i,
              c = r.useContext(u);
            if (c) return c;
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
    94040: (e, t, n) => {
      n.d(t, {
        U: () => s
      });
      var r = n(71127),
        o = n(76286);

      function s(e, t = globalThis?.document) {
        const n = (0, o.c)(e);
        r.useEffect(() => {
          const e = e => {
            "Escape" === e.key && n(e)
          };
          return t.addEventListener("keydown", e, {
            capture: !0
          }), () => t.removeEventListener("keydown", e, {
            capture: !0
          })
        }, [n, t])
      }
    },
    94926: (e, t, n) => {
      n.d(t, {
        Eq: () => u
      });
      var r = new WeakMap,
        o = new WeakMap,
        s = {},
        i = 0,
        a = function(e) {
          return e && (e.host || a(e.parentNode))
        },
        u = function(e, t, n) {
          void 0 === n && (n = "data-aria-hidden");
          var u = Array.from(Array.isArray(e) ? e : [e]),
            c = t || function(e) {
              return "undefined" == typeof document ? null : (Array.isArray(e) ? e[0] : e).ownerDocument.body
            }(e);
          return c ? (u.push.apply(u, Array.from(c.querySelectorAll("[aria-live], script"))), function(e, t, n, u) {
            var c = function(e, t) {
              return t.map(function(t) {
                if (e.contains(t)) return t;
                var n = a(t);
                return n && e.contains(n) ? n : (console.error("aria-hidden", t, "in not contained inside", e, ". Doing nothing"), null)
              }).filter(function(e) {
                return Boolean(e)
              })
            }(t, Array.isArray(e) ? e : [e]);
            s[n] || (s[n] = new WeakMap);
            var l = s[n],
              d = [],
              f = new Set,
              p = new Set(c),
              m = function(e) {
                e && !f.has(e) && (f.add(e), m(e.parentNode))
              };
            c.forEach(m);
            var g = function(e) {
              e && !p.has(e) && Array.prototype.forEach.call(e.children, function(e) {
                if (f.has(e)) g(e);
                else try {
                  var t = e.getAttribute(u),
                    s = null !== t && "false" !== t,
                    i = (r.get(e) || 0) + 1,
                    a = (l.get(e) || 0) + 1;
                  r.set(e, i), l.set(e, a), d.push(e), 1 === i && s && o.set(e, !0), 1 === a && e.setAttribute(n, "true"), s || e.setAttribute(u, "true")
                } catch (t) {
                  console.error("aria-hidden: cannot operate on ", e, t)
                }
              })
            };
            return g(t), f.clear(), i++,
              function() {
                d.forEach(function(e) {
                  var t = r.get(e) - 1,
                    s = l.get(e) - 1;
                  r.set(e, t), l.set(e, s), t || (o.has(e) || e.removeAttribute(u), o.delete(e)), s || e.removeAttribute(n)
                }), --i || (r = new WeakMap, r = new WeakMap, o = new WeakMap, s = {})
              }
          }(u, c, n, "aria-hidden")) : function() {
            return null
          }
        }
    },
    95362: (e, t, n) => {
      n.d(t, {
        s: () => i,
        t: () => s
      });
      var r = n(71127);

      function o(e, t) {
        if ("function" == typeof e) return e(t);
        null != e && (e.current = t)
      }

      function s(...e) {
        return t => {
          let n = !1;
          const r = e.map(e => {
            const r = o(e, t);
            return n || "function" != typeof r || (n = !0), r
          });
          if (n) return () => {
            for (let t = 0; t < r.length; t++) {
              const n = r[t];
              "function" == typeof n ? n() : o(e[t], null)
            }
          }
        }
      }

      function i(...e) {
        return r.useCallback(s(...e), e)
      }
    }
  }
]);