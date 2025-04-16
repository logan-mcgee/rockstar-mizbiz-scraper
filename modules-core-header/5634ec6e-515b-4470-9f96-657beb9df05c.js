! function() {
  try {
    var a = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      e = (new Error).stack;
    e && (a._sentryDebugIds = a._sentryDebugIds || {}, a._sentryDebugIds[e] = "5634ec6e-515b-4470-9f96-657beb9df05c", a._sentryDebugIdIdentifier = "sentry-dbid-5634ec6e-515b-4470-9f96-657beb9df05c")
  } catch (a) {}
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
  [2911], {
    64727: (a, e, n) => {
      n.d(e, {
        ZM: () => i,
        br: () => r,
        sk: () => o,
        qc: () => t
      });
      const t = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/902006563577748c7d58ac9c2bf5e6df.svg",
        o = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/beb0cbcbb7dc7cfe8e4d127512ef5f57.svg";
      var r = n(94222);
      const i = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/e5fca59d373ed4d2aa00584b688c3da3.svg"
    },
    82508: (a, e, n) => {
      n.d(e, {
        Jv: () => D,
        QY: () => M,
        Kr: () => T,
        lt: () => L,
        bA: () => E,
        cu: () => F
      });
      var t = n(62229),
        o = n(42638),
        r = n(61339),
        i = n(18425),
        d = n(71925),
        s = n(63582),
        l = n(81788),
        c = n(32948),
        m = n(3241),
        g = n(98077),
        A = n(57835),
        f = n(64727),
        h = n(77856),
        b = n(53178),
        p = n.n(b),
        C = n(94566),
        u = n.n(C),
        v = n(31610),
        w = n.n(v),
        y = n(82510),
        x = n.n(y),
        _ = n(91185),
        k = {
          attributes: {
            "data-shadowTarget": "@rockstargames/modules-core-header"
          }
        };
      k.setAttributes = w(), k.insert = a => {
        const e = a.dataset.shadowtarget;
        e && (window.__MFE_GLOBAL_HOOK__ = {
          ...window.__MFE_GLOBAL_HOOK__,
          stylesForShadowRoot: {
            ...window.__MFE_GLOBAL_HOOK__?.stylesForShadowRoot,
            [e]: a
          }
        })
      }, k.domAPI = u(), k.insertStyleElement = x(), p()(_.A, k);
      const B = _.A && _.A.locals ? _.A.locals : void 0;
      var I = n(73855);
      const M = (0, t.createContext)({
          inAvatarMenu: !1,
          avatarMenuOpenItems: ["open"],
          closeAvatarMenu: () => {}
        }),
        S = {
          open: {
            opacity: 1
          },
          closed: {
            opacity: 0
          }
        },
        z = {
          open: {
            height: "auto",
            width: "100%",
            opacity: 1,
            marginBottom: "revert-layer",
            display: "block"
          },
          closed: {
            height: 0,
            width: "100%",
            opacity: 0,
            marginBottom: "auto",
            transitionEnd: {
              display: "none"
            }
          }
        },
        R = {
          open: {
            transform: "translateY(0%)",
            display: "block"
          },
          closed: {
            transform: "translateY(100%)",
            transitionEnd: {
              display: "none"
            }
          }
        },
        D = a => {
          let {
            avatarIconUrl: e,
            children: f
          } = a;
          const b = (0, l.useIntl)(),
            p = n(10046),
            [C, u] = (0, t.useState)(!1),
            [v, w] = (0, t.useState)(!1),
            [y, x] = (0, t.useState)(["open"]),
            {
              isNavHidden: _
            } = (0, t.useContext)(m.PY),
            k = a => {
              const e = ["open", ...a.filter((a => "open" !== a))];
              x(e)
            },
            z = () => {
              u(!1), w(!1)
            };
          return (0, t.useEffect)((() => {
            _ && z()
          }), [_]), (0, I.jsxs)(M.Provider, {
            value: {
              inAvatarMenu: !0,
              avatarMenuOpenItems: y,
              closeAvatarMenu: z
            },
            children: [(0, I.jsx)(o.Root, {
              open: C,
              onOpenChange: u,
              children: (0, I.jsx)(g.E, {
                showOn: "desktop",
                children: (0, I.jsxs)("div", {
                  className: B.avatarMenu,
                  children: [(0, I.jsx)(o.Trigger, {
                    asChild: !0,
                    children: (0, I.jsx)("button", {
                      className: B.scAvatarBtn,
                      "aria-label": b.formatMessage(C ? A.A.avatar_menu_close : A.A.avatar_menu_open),
                      "data-testid": "avatarMenuButton",
                      children: (0, I.jsx)("img", {
                        className: B.scAvatarBtnUser,
                        src: e || p
                      })
                    })
                  }), (0, I.jsx)(s.AnimatePresence, {
                    children: C && (0, I.jsx)(o.Content, {
                      forceMount: !0,
                      align: "end",
                      alignOffset: -40,
                      sideOffset: 24,
                      children: (0, I.jsx)(s.motion.div, {
                        variants: S,
                        initial: "closed",
                        animate: "open",
                        exit: "closed",
                        transition: {
                          duration: .2
                        },
                        children: (0, I.jsx)(r.Root, {
                          type: "multiple",
                          value: y,
                          onValueChange: k,
                          collapsible: !0,
                          children: (0, I.jsx)(c.aC, {
                            className: B.avatarMenuContent,
                            children: f
                          })
                        })
                      })
                    })
                  })]
                })
              })
            }), (0, I.jsx)(i.Root, {
              open: v,
              onOpenChange: w,
              children: (0, I.jsx)(g.E, {
                showOn: "mobile",
                children: (0, I.jsxs)("div", {
                  className: B.avatarMenu,
                  children: [(0, I.jsx)(i.Trigger, {
                    className: B.scAvatarBtn,
                    "aria-label": b.formatMessage(v ? A.A.avatar_menu_close : A.A.avatar_menu_open),
                    "data-testid": "avatarMenuButton",
                    children: (0, I.jsx)("img", {
                      className: B.scAvatarBtnUser,
                      src: e || p
                    })
                  }), (0, I.jsx)(s.AnimatePresence, {
                    children: v && (0, I.jsx)(h.Z, {
                      asChild: !0,
                      children: (0, I.jsxs)(i.Content, {
                        forceMount: !0,
                        children: [(0, I.jsx)(d.VisuallyHidden, {
                          children: (0, I.jsx)(i.Title, {
                            children: b.formatMessage(A.A.nav_avatarmenu_title)
                          })
                        }), (0, I.jsxs)(s.motion.div, {
                          variants: R,
                          initial: "closed",
                          animate: "open",
                          exit: "closed",
                          transition: {
                            duration: .3
                          },
                          className: B.avatarMenuMobile,
                          children: [(0, I.jsx)(i.Close, {
                            className: B.dragHandleBtn,
                            children: (0, I.jsx)("img", {
                              className: B.dragHandle,
                              src: "",
                              "aria-label": b.formatMessage(A.A.avatar_menu_close)
                            })
                          }), (0, I.jsx)(r.Root, {
                            type: "multiple",
                            value: y,
                            onValueChange: k,
                            collapsible: !0,
                            children: (0, I.jsx)(c.aC, {
                              className: B.avatarMenuContentMobile,
                              children: f
                            })
                          })]
                        })]
                      })
                    })
                  })]
                })
              })
            })]
          })
        },
        N = (0, t.createContext)({
          avatarMenuItemId: ""
        }),
        T = a => {
          let {
            children: e,
            value: n
          } = a;
          const o = (0, t.useId)();
          return (0, I.jsx)(N.Provider, {
            value: {
              avatarMenuItemId: n || o
            },
            children: (0, I.jsx)(r.Item, {
              value: n || o,
              className: B.avatarMenuSection,
              children: e
            })
          })
        },
        E = a => {
          let {
            children: e,
            ...n
          } = a;
          return (0, I.jsx)(r.Header, {
            children: (0, I.jsx)(r.Trigger, {
              className: B.avatarMenuSectionHeader,
              ...n,
              children: e
            })
          })
        },
        F = a => {
          let {
            children: e,
            ...n
          } = a;
          return (0, I.jsx)(r.Header, {
            children: (0, I.jsxs)(r.Trigger, {
              className: B.avatarMenuSectionHeaderDropdown,
              ...n,
              children: [e, (0, I.jsx)("img", {
                src: f.br,
                className: B.avatarDropdownChevron,
                alt: ""
              })]
            })
          })
        },
        L = a => {
          let {
            children: e,
            ...n
          } = a;
          const {
            avatarMenuOpenItems: o
          } = (0, t.useContext)(M), {
            avatarMenuItemId: i
          } = (0, t.useContext)(N), d = o.indexOf(i) >= 0;
          return (0, I.jsx)(r.Content, {
            forceMount: !0,
            asChild: !0,
            ...n,
            children: (0, I.jsx)(s.motion.div, {
              variants: z,
              initial: "closed",
              animate: d ? "open" : "closed",
              transition: {
                duration: .2
              },
              children: e
            })
          })
        }
    },
    98077: (a, e, n) => {
      n.d(e, {
        E: () => b
      });
      var t = n(21222),
        o = n(53178),
        r = n.n(o),
        i = n(94566),
        d = n.n(i),
        s = n(31610),
        l = n.n(s),
        c = n(82510),
        m = n.n(c),
        g = n(7288),
        A = {
          attributes: {
            "data-shadowTarget": "@rockstargames/modules-core-header"
          }
        };
      A.setAttributes = l(), A.insert = a => {
        const e = a.dataset.shadowtarget;
        e && (window.__MFE_GLOBAL_HOOK__ = {
          ...window.__MFE_GLOBAL_HOOK__,
          stylesForShadowRoot: {
            ...window.__MFE_GLOBAL_HOOK__?.stylesForShadowRoot,
            [e]: a
          }
        })
      }, A.domAPI = d(), A.insertStyleElement = m(), r()(g.A, A);
      const f = g.A && g.A.locals ? g.A.locals : void 0;
      var h = n(73855);
      const b = a => {
        let {
          showOn: e,
          ...n
        } = a;
        return (0, h.jsx)(t.Slot, {
          className: e ? f[e] : "",
          ...n
        })
      }
    },
    32948: (a, e, n) => {
      n.d(e, {
        jd: () => T,
        W1: () => E,
        rm: () => W,
        Dr: () => H,
        w4: () => K,
        cO: () => F,
        aC: () => O,
        cQ: () => P
      });
      var t = n(62229),
        o = n(81788),
        r = n(9046),
        i = n(74406),
        d = n(53178),
        s = n.n(d),
        l = n(94566),
        c = n.n(l),
        m = n(31610),
        g = n.n(m),
        A = n(82510),
        f = n.n(A),
        h = n(45020),
        b = {
          attributes: {
            "data-shadowTarget": "@rockstargames/modules-core-header"
          }
        };
      b.setAttributes = g(), b.insert = a => {
        const e = a.dataset.shadowtarget;
        e && (window.__MFE_GLOBAL_HOOK__ = {
          ...window.__MFE_GLOBAL_HOOK__,
          stylesForShadowRoot: {
            ...window.__MFE_GLOBAL_HOOK__?.stylesForShadowRoot,
            [e]: a
          }
        })
      }, b.domAPI = c(), b.insertStyleElement = f(), s()(h.A, b);
      const p = h.A && h.A.locals ? h.A.locals : void 0;
      var C = n(98077),
        u = n(64727),
        v = n(81409),
        w = n(24036),
        y = n.n(w),
        x = n(69035),
        _ = n(63582);
      const k = function() {
        for (var a = arguments.length, e = new Array(a), n = 0; n < a; n++) e[n] = arguments[n];
        const t = e.filter(Boolean);
        return t.length <= 1 ? t[0] || null : function(a) {
          for (const e of t) "function" == typeof e ? e(a) : e && (e.current = a)
        }
      };
      var B = n(21222),
        I = n(82508),
        M = n(74720),
        S = n(57835),
        z = n(3241),
        R = n(73855);
      const D = a => {
          a.preventDefault()
        },
        N = (0, t.createContext)({
          inMenu: !1,
          openedNav: ""
        }),
        T = (0, t.createContext)({
          isHidden: !1
        }),
        E = a => {
          let {
            children: e
          } = a;
          const n = (0, o.useIntl)(),
            [i, d] = (0, t.useState)(""),
            [s, l] = (0, t.useState)(e),
            [c, m] = (0, t.useState)([]),
            g = (0, t.useRef)(null),
            A = (0, t.useRef)(null),
            {
              isNavHidden: f
            } = (0, t.useContext)(z.PY),
            h = (0, t.useCallback)((() => {
              const a = A.current;
              if (!a) return;
              const {
                children: n
              } = a;
              let o = 0;
              const r = Array.from(n).map(((a, e) => {
                  const n = a.getBoundingClientRect().top;
                  return 0 === e && (o = n), n
                })),
                i = r.filter((a => a !== o)).length,
                d = r.findIndex((a => a > o));
              let s = d;
              if (d > 0 && (s = d - 1), i) {
                const a = [],
                  n = [];
                t.Children.forEach(e, ((e, t) => {
                  t < s ? a.push(e) : n.push(e)
                })), a && l(a), n && m(n)
              } else l(e), m([])
            }), [e, A?.current]);
          return (0, t.useEffect)((() => {
            const a = new ResizeObserver(h);
            return A?.current && a.observe(A.current), () => {
              A?.current && a.unobserve(A.current)
            }
          }), [e, A?.current]), (0, t.useEffect)((() => {
            d("")
          }), [f]), (0, R.jsx)(N.Provider, {
            value: {
              inMenu: !0,
              openedNav: i
            },
            children: (0, R.jsx)(C.E, {
              showOn: "desktop",
              children: (0, R.jsxs)(r.Root, {
                className: p.menu,
                value: i,
                onValueChange: d,
                tabIndex: -1,
                children: [(0, R.jsxs)(F, {
                  ref: g,
                  className: p.menuItems,
                  children: [s, c?.length > 0 && (0, R.jsxs)(H, {
                    children: [(0, R.jsx)(P, {
                      children: n.formatMessage(S.A.nav_more_dropdown)
                    }), (0, R.jsx)(W, {
                      children: (0, R.jsx)(O, {
                        children: (0, R.jsx)(F, {
                          children: c
                        })
                      })
                    })]
                  })]
                }), (0, R.jsx)(F, {
                  ref: A,
                  className: p.hiddenItems,
                  "aria-hidden": "true",
                  children: (0, R.jsx)(T.Provider, {
                    value: {
                      isHidden: !0
                    },
                    children: e
                  })
                })]
              })
            })
          })
        },
        F = (0, t.forwardRef)((function(a, e) {
          let {
            children: n,
            className: t,
            ...o
          } = a;
          return (0, R.jsx)(r.List, {
            ref: e,
            className: y()(p.menuList, t),
            ...o,
            children: n
          })
        })),
        L = (0, t.createContext)({
          value: ""
        }),
        H = (0, t.forwardRef)((function(a, e) {
          let {
            children: n,
            ...o
          } = a;
          const {
            depth: d
          } = (0, t.useContext)(J), {
            inMobileMenu: s
          } = (0, t.useContext)(x.xN), l = (0, t.useRef)(null), c = `rsm-${(0,i.useId)()}`;
          return (0, R.jsx)(L.Provider, {
            value: {
              value: c,
              ref: l
            },
            children: (0, R.jsx)(r.Item, {
              value: c,
              ref: k(e, l),
              className: y()({
                [p.menuItem]: !0,
                [p.nestedMenuItem]: 1 === d && !s
              }),
              ...o,
              children: n
            })
          })
        })),
        P = (0, t.forwardRef)((function(a, e) {
          let {
            children: n,
            ...o
          } = a;
          const {
            inMenu: i
          } = (0, t.useContext)(N), {
            inAvatarMenu: d
          } = (0, t.useContext)(I.QY), {
            inQuickMenu: s
          } = (0, t.useContext)(M.s), {
            inMobileMenu: l
          } = (0, t.useContext)(x.xN), {
            inSubMenu: c,
            depth: m
          } = (0, t.useContext)(J);
          return (0, R.jsxs)(r.Trigger, {
            ref: e,
            onPointerMove: D,
            onPointerLeave: D,
            className: y()(p.menuTrigger, {
              [p.menuLink]: i,
              [p.quickMenuLink]: s,
              [p.mobileMenuLink]: l,
              [p.subMenuLink]: c,
              [p.avatarMenuLink]: d,
              [p.nestedLink]: m > 1
            }),
            ...o,
            children: [n, (0, R.jsx)("img", {
              src: u.br,
              className: p.menuTriggerChevron,
              alt: ""
            })]
          })
        })),
        j = {
          open: {
            opacity: 1
          },
          closed: {
            opacity: 0
          }
        },
        G = {
          open: {
            height: "auto",
            width: "100%",
            opacity: 1,
            marginBottom: "revert-layer",
            display: "block"
          },
          closed: {
            height: 0,
            width: "100%",
            opacity: 0,
            marginBottom: "auto",
            transitionEnd: {
              display: "none"
            }
          }
        },
        W = (0, t.forwardRef)((function(a, e) {
          let {
            children: n,
            animationOverride: o,
            ...i
          } = a;
          const {
            inSubMenu: d,
            openedNav: s
          } = (0, t.useContext)(J), {
            openedNav: l
          } = (0, t.useContext)(N), {
            openedNav: c
          } = (0, t.useContext)(x.iU), {
            value: m,
            ref: g
          } = (0, t.useContext)(L), {
            inMobileMenu: A
          } = (0, t.useContext)(x.xN), {
            isHidden: f
          } = (0, t.useContext)(T), {
            inAvatarMenu: h
          } = (0, t.useContext)(I.QY), b = [s, l, c].includes(m);
          return f ? null : (0, R.jsx)(r.Content, {
            forceMount: d || A || void 0,
            ref: e,
            className: y()({
              [p.dropdownMenu]: !A,
              [p.dropdownMenuMobile]: A,
              [p.nestedDropdown]: d && !A,
              [p.avatarNestedDropdown]: h
            }),
            onPointerEnter: D,
            onPointerLeave: D,
            onPointerDown: D,
            onPointerDownOutside: d ? D : null,
            style: {
              left: g?.current?.offsetLeft
            },
            asChild: !0,
            ...i,
            children: (0, R.jsx)(_.motion.div, {
              variants: o || d || A ? G : j,
              initial: "closed",
              animate: b ? "open" : "closed",
              transition: {
                duration: .2
              },
              children: n
            })
          })
        })),
        J = (0, t.createContext)({
          inSubMenu: !1,
          depth: 0
        }),
        O = (0, t.forwardRef)((function(a, e) {
          let {
            children: n,
            ...o
          } = a;
          const {
            depth: i
          } = (0, t.useContext)(J), {
            openedNav: d
          } = (0, t.useContext)(x.iU), {
            isNavHidden: s
          } = (0, t.useContext)(z.PY), [l, c] = (0, t.useState)("");
          (0, t.useEffect)((() => {
            c("")
          }), [d, s]);
          const m = i ? i + 1 : 1;
          return (0, R.jsx)(J.Provider, {
            value: {
              inSubMenu: !0,
              openedNav: l,
              depth: m
            },
            children: (0, R.jsx)(r.Root, {
              ref: e,
              defaultValue: "",
              value: l,
              onValueChange: a => {
                c(a === l ? "" : a)
              },
              orientation: "vertical",
              className: p.subMenu,
              "data-depth": m,
              ...o,
              asChild: !0,
              children: (0, R.jsx)("div", {
                children: n
              })
            })
          })
        })),
        K = (0, t.forwardRef)((function(a, e) {
          let {
            children: n,
            asChild: o,
            className: i,
            onClick: d,
            external: s,
            ...l
          } = a;
          const {
            inMenu: c
          } = (0, t.useContext)(N), {
            inAvatarMenu: m,
            closeAvatarMenu: g
          } = (0, t.useContext)(I.QY), {
            inQuickMenu: A
          } = (0, t.useContext)(M.s), {
            inMobileMenu: f,
            closeMobileMenu: h
          } = (0, t.useContext)(x.xN), {
            inSubMenu: b,
            depth: C
          } = (0, t.useContext)(J), u = y()({
            [p.menuLink]: c,
            [p.quickMenuLink]: A,
            [p.mobileMenuLink]: f,
            [p.subMenuLink]: b,
            [p.avatarMenuLink]: m,
            [p.nestedLink]: C > 1
          }, i), w = o ? B.Slot : "a";
          return (0, R.jsx)(r.Link, {
            asChild: !0,
            onSelect: a => {
              g?.(), h?.(), d?.(a)
            },
            ...l,
            children: (0, R.jsxs)(w, {
              ref: e,
              className: u,
              children: [(0, R.jsx)(B.Slottable, {
                children: n
              }), s && (0, R.jsx)(v.ExternalLink, {
                label: "",
                className: p.externalLinkIcon
              })]
            })
          })
        }))
    },
    69035: (a, e, n) => {
      n.d(e, {
        qe: () => z,
        xN: () => S,
        z1: () => M,
        iU: () => I
      });
      var t = n(62229),
        o = n(63582),
        r = n(24036),
        i = n.n(r),
        d = n(9046),
        s = n(18425),
        l = n(71925),
        c = n(81788),
        m = n(3241),
        g = n(98077),
        A = n(85891),
        f = n(57835),
        h = n(53178),
        b = n.n(h),
        p = n(94566),
        C = n.n(p),
        u = n(31610),
        v = n.n(u),
        w = n(82510),
        y = n.n(w),
        x = n(17062),
        _ = {
          attributes: {
            "data-shadowTarget": "@rockstargames/modules-core-header"
          }
        };
      _.setAttributes = v(), _.insert = a => {
        const e = a.dataset.shadowtarget;
        e && (window.__MFE_GLOBAL_HOOK__ = {
          ...window.__MFE_GLOBAL_HOOK__,
          stylesForShadowRoot: {
            ...window.__MFE_GLOBAL_HOOK__?.stylesForShadowRoot,
            [e]: a
          }
        })
      }, _.domAPI = C(), _.insertStyleElement = y(), b()(x.A, _);
      const k = x.A && x.A.locals ? x.A.locals : void 0;
      var B = n(73855);
      const I = (0, t.createContext)({
          openedNav: ""
        }),
        M = a => {
          let {
            children: e
          } = a;
          const [n, o] = (0, t.useState)("");
          return (0, B.jsx)(I.Provider, {
            value: {
              openedNav: n
            },
            children: (0, B.jsx)(d.Root, {
              value: n,
              onValueChange: o,
              children: (0, B.jsx)(d.List, {
                className: k.menuMobileItems,
                children: e
              })
            })
          })
        },
        S = (0, t.createContext)({
          inMobileMenu: !1,
          closeMobileMenu: () => {}
        }),
        z = a => {
          let {
            children: e
          } = a;
          const n = (0, c.useIntl)(),
            [r, d] = (0, t.useState)(!1),
            [h, b] = (0, t.useState)(!1),
            {
              brand: p
            } = (0, t.useContext)(m.PY),
            C = {
              show: {
                height: "100dvh",
                paddingBottom: r && p ? "var(--global-navigation-height)" : "",
                transition: {
                  ...A.b.hamburgerOpen,
                  staggerChildren: .05
                }
              },
              hidden: {
                height: 0,
                paddingBottom: 0,
                transition: A.b.hamburgerClose
              }
            };
          return (0, B.jsx)(S.Provider, {
            value: {
              inMobileMenu: !0,
              closeMobileMenu: () => {
                d(!1)
              }
            },
            children: (0, B.jsxs)(s.Root, {
              open: r,
              onOpenChange: d,
              children: [(0, B.jsx)(g.E, {
                showOn: "mobile",
                children: (0, B.jsx)(R, {
                  onClick: () => {
                    d(!r), b(!1)
                  },
                  isMenuOpen: r
                })
              }), (0, B.jsx)(g.E, {
                showOn: "mobile",
                children: (0, B.jsx)(o.AnimatePresence, {
                  children: r && (0, B.jsxs)(B.Fragment, {
                    children: [(0, B.jsx)(s.Overlay, {
                      className: k.overlay
                    }), (0, B.jsx)(s.Content, {
                      asChild: !0,
                      forceMount: !0,
                      onEscapeKeyDown: () => d(!1),
                      children: (0, B.jsxs)(o.motion.div, {
                        className: i()(k.mobileMenuDrawer, k.mobileMenuOpen),
                        variants: C,
                        animate: "show",
                        initial: "hidden",
                        exit: "hidden",
                        children: [(0, B.jsx)(l.VisuallyHidden, {
                          children: (0, B.jsx)(s.Title, {
                            children: n.formatMessage(f.A.nav_mobilemenu_title)
                          })
                        }), (0, B.jsx)("div", {
                          className: i()(h ? k.mobileMenuSearchOpen : "", k.mobileMenuContainer),
                          children: (0, B.jsx)("div", {
                            className: k.menuMobile,
                            children: e
                          })
                        })]
                      })
                    })]
                  })
                })
              })]
            })
          })
        },
        R = a => {
          let {
            className: e,
            isMenuOpen: n,
            ...t
          } = a;
          const o = (0, c.useIntl)();
          return (0, B.jsx)("div", {
            className: k.mobileMenuHamburgerContainer,
            children: (0, B.jsxs)(s.Trigger, {
              title: o.formatMessage(n ? f.A.nav_mobilemenu_close : f.A.nav_mobilemenu_open),
              type: "button",
              className: i()({
                [k.open]: n
              }, k.mobileMenuHamburger, e),
              ...t,
              children: [(0, B.jsx)("span", {}), (0, B.jsx)("span", {}), (0, B.jsx)("span", {})]
            })
          })
        }
    },
    77856: (a, e, n) => {
      n.d(e, {
        Z: () => v
      });
      var t = n(24036),
        o = n.n(t),
        r = n(34902),
        i = n(62229),
        d = n(53178),
        s = n.n(d),
        l = n(94566),
        c = n.n(l),
        m = n(31610),
        g = n.n(m),
        A = n(82510),
        f = n.n(A),
        h = n(40289),
        b = {
          attributes: {
            "data-shadowTarget": "@rockstargames/modules-core-header"
          }
        };
      b.setAttributes = g(), b.insert = a => {
        const e = a.dataset.shadowtarget;
        e && (window.__MFE_GLOBAL_HOOK__ = {
          ...window.__MFE_GLOBAL_HOOK__,
          stylesForShadowRoot: {
            ...window.__MFE_GLOBAL_HOOK__?.stylesForShadowRoot,
            [e]: a
          }
        })
      }, b.domAPI = c(), b.insertStyleElement = f(), s()(h.A, b);
      const p = h.A && h.A.locals ? h.A.locals : void 0;
      var C = n(3241),
        u = n(73855);
      const v = a => {
        let {
          children: e,
          className: n,
          ...t
        } = a;
        const {
          containerRef: d
        } = (0, i.useContext)(C.PY);
        return (0, u.jsx)(r.Root, {
          className: o()(p.portal, n),
          container: d?.current,
          ...t,
          children: e
        })
      }
    },
    74720: (a, e, n) => {
      n.d(e, {
        B: () => _,
        s: () => x
      });
      var t = n(62229),
        o = n(53178),
        r = n.n(o),
        i = n(94566),
        d = n.n(i),
        s = n(31610),
        l = n.n(s),
        c = n(82510),
        m = n.n(c),
        g = n(91849),
        A = {
          attributes: {
            "data-shadowTarget": "@rockstargames/modules-core-header"
          }
        };
      A.setAttributes = l(), A.insert = a => {
        const e = a.dataset.shadowtarget;
        e && (window.__MFE_GLOBAL_HOOK__ = {
          ...window.__MFE_GLOBAL_HOOK__,
          stylesForShadowRoot: {
            ...window.__MFE_GLOBAL_HOOK__?.stylesForShadowRoot,
            [e]: a
          }
        })
      }, A.domAPI = d(), A.insertStyleElement = m(), r()(g.A, A);
      const f = g.A && g.A.locals ? g.A.locals : void 0;
      var h = n(69035),
        b = n(77856),
        p = n(63582),
        C = n(85891),
        u = n(24036),
        v = n.n(u),
        w = n(9046),
        y = n(73855);
      const x = (0, t.createContext)({
          inQuickMenu: !1
        }),
        _ = a => {
          let {
            children: e
          } = a;
          const {
            inMobileMenu: n
          } = (0, t.useContext)(h.xN), o = {
            hidden: {
              opacity: 0,
              y: 10,
              transition: C.b.staggerFade
            },
            show: {
              opacity: 1,
              y: 0,
              transition: C.b.staggerFade
            }
          }, r = v()(f.quickMenu, n ? f.mobile : f.desktop), i = v()(f.quickMenuItem, n ? f.mobile : f.desktop);
          return n ? (0, y.jsx)(x.Provider, {
            value: {
              inQuickMenu: !0
            },
            children: (0, y.jsx)(b.Z, {
              children: (0, y.jsx)(w.Root, {
                asChild: !0,
                children: (0, y.jsx)(p.motion.div, {
                  variants: o,
                  className: r,
                  children: t.Children.map(e, (a => (0, y.jsx)(p.motion.li, {
                    variants: o,
                    className: i,
                    children: a
                  })))
                })
              })
            })
          }) : (0, y.jsx)(x.Provider, {
            value: {
              inQuickMenu: !0
            },
            children: (0, y.jsx)(w.Root, {
              asChild: !0,
              children: (0, y.jsx)("div", {
                className: r,
                children: t.Children.map(e, (a => (0, y.jsx)(p.motion.li, {
                  className: i,
                  children: a
                })))
              })
            })
          })
        }
    },
    3241: (a, e, n) => {
      n.d(e, {
        PY: () => I,
        Y9: () => B,
        bL: () => S
      });
      var t = n(62229),
        o = (n(79952), n(81788)),
        r = n(57835),
        i = n(53178),
        d = n.n(i),
        s = n(94566),
        l = n.n(s),
        c = n(31610),
        m = n.n(c),
        g = n(82510),
        A = n.n(g),
        f = n(17165),
        h = {
          attributes: {
            "data-shadowTarget": "@rockstargames/modules-core-header"
          }
        };
      h.setAttributes = m(), h.insert = a => {
        const e = a.dataset.shadowtarget;
        e && (window.__MFE_GLOBAL_HOOK__ = {
          ...window.__MFE_GLOBAL_HOOK__,
          stylesForShadowRoot: {
            ...window.__MFE_GLOBAL_HOOK__?.stylesForShadowRoot,
            [e]: a
          }
        })
      }, h.domAPI = l(), h.insertStyleElement = A(), d()(f.A, h);
      const b = f.A && f.A.locals ? f.A.locals : void 0;
      var p = n(73855);
      const C = () => {
        const a = (0, t.useRef)(null),
          e = "__spatialNavigation__" in window ? window.__spatialNavigation__ : null;
        return (0, t.useEffect)((() => {
          e && e.enableExperimentalAPIs(!0)
        }), []), (0, p.jsx)("button", {
          ref: a,
          className: b.accessibility,
          onClick: () => {
            const n = document.querySelector("header");
            if (e && n) {
              const t = e.findCandidates(n, "down", {
                mode: "all"
              }).filter((e => !n.contains(e) && a.current !== e));
              t.length > 0 && t[0].focus()
            }
          },
          children: (0, p.jsx)(o.FormattedMessage, {
            ...r.A.accessibility_skip_button
          })
        })
      };
      var u = n(9517),
        v = n(24036),
        w = n.n(v),
        y = n(52542),
        x = n(63582),
        _ = n(94038),
        k = n(27413);
      const B = a => {
          let {
            children: e
          } = a;
          return (0, p.jsx)("header", {
            className: w()(u.default.header, u.default.fixed),
            children: e
          })
        },
        I = (0, t.createContext)({
          isNavHidden: !1
        }),
        M = {
          visible: {
            transform: "translateY(0%)",
            visibility: "visible"
          },
          hidden: {
            transform: "translateY(-100%)",
            transitionEnd: {
              visibility: "hidden"
            }
          }
        },
        S = (0, o.withIntl)((a => {
          let {
            children: e,
            brand: r
          } = a;
          const [i, d] = (0, t.useState)(!1), s = (0, t.useRef)(null), [{
            iso: l
          }] = (0, o.getLocale)();
          (0, t.useEffect)((() => {
            let a = window.scrollY;
            const e = () => {
              const e = window.scrollY > 140,
                n = window.scrollY > a;
              d(e && n), a = window.scrollY
            };
            return window.addEventListener("scroll", e), () => {
              window.removeEventListener("scroll", e)
            }
          }), [i]);
          const c = (0, t.useMemo)((() => k.w[l] || []), [l]);
          return (0, t.useEffect)((() => {
            Promise.resolve().then(n.bind(n, 9517))
          })), (0, p.jsx)(_.A, {
            packageName: "@rockstargames/modules-core-header",
            loadFonts: ["HelveticaNowText", "HelveticaNowDisplayBold", ...c],
            children: (0, p.jsx)(I.Provider, {
              value: {
                brand: r,
                isNavHidden: i,
                containerRef: s
              },
              children: (0, p.jsxs)("div", {
                className: u.default.globalNavigationRoot,
                ref: s,
                lang: l,
                children: [(0, p.jsx)(C, {}), (0, p.jsx)("div", {
                  className: u.default.globalNavigationSpacer
                }), (0, p.jsx)(x.motion.div, {
                  className: u.default.globalNavigationContainer,
                  variants: M,
                  initial: "visible",
                  animate: i ? "hidden" : "visible",
                  children: e
                })]
              })
            })
          })
        }), y)
    },
    85891: (a, e, n) => {
      n.d(e, {
        b: () => t
      });
      const t = {
        quickFade: {
          duration: .1
        },
        staggerFade: {
          ease: "easeOut",
          duration: .4
        },
        springOpen: {
          type: "spring",
          stiffness: 300,
          damping: 35
        },
        springClose: {
          type: "spring",
          stiffness: 400,
          damping: 40
        },
        hamburgerOpen: {
          type: "spring",
          duration: .6,
          bounce: 0
        },
        hamburgerClose: {
          type: "spring",
          duration: .4,
          bounce: 0
        }
      }
    },
    57835: (a, e, n) => {
      n.d(e, {
        A: () => t
      });
      const t = (0, n(81788).defineMessages)({
        nav_rockstargames_home: {
          id: "nav_rockstargames_home",
          defaultMessage: "Rockstar Games Home"
        },
        nav_rockstargames_logo: {
          id: "nav_rockstargames_logo",
          defaultMessage: "Click to open menu"
        },
        nav_mobilemenu_open: {
          id: "nav_mobilemenu_open",
          defaultMessage: "Open menu"
        },
        nav_mobilemenu_close: {
          id: "nav_mobilemenu_close",
          defaultMessage: "Close menu"
        },
        nav_mobilemenu_title: {
          id: "nav_mobilemenu_title",
          defaultMessage: "Navigation menu"
        },
        nav_avatarmenu_title: {
          id: "nav_avatarmenu_title",
          defaultMessage: "Avatar menu"
        },
        search_action: {
          id: "search_action",
          defaultMessage: "Search"
        },
        search_open_button: {
          id: "search_open_button",
          defaultMessage: "Open Search"
        },
        search_close_button: {
          id: "search_close_button",
          defaultMessage: "Close Search"
        },
        search_placeholder: {
          id: "search_placeholder",
          defaultMessage: "Search Rockstar Games..."
        },
        search_target_aria_label: {
          id: "search_target_aria_label",
          defaultMessage: "Search {target}"
        },
        nav_quick_access_home: {
          id: "nav_quick_access_home",
          defaultMessage: "Home"
        },
        nav_quick_access_games: {
          id: "nav_quick_access_games",
          defaultMessage: "Games"
        },
        nav_quick_access_newswire: {
          id: "nav_quick_access_newswire",
          defaultMessage: "Newswire"
        },
        nav_more_dropdown: {
          id: "nav_more_dropdown",
          defaultMessage: "More"
        },
        quick_access_title: {
          id: "quick_access_title",
          defaultMessage: "Rockstar Games"
        },
        nav_opens_in_new_window: {
          id: "nav_opens_in_new_window",
          defaultMessage: "{text} (Link opens in new window)"
        },
        accessibility_skip_button: {
          id: "accessibility_skip_button",
          defaultMessage: "Skip the Menu"
        },
        avatar_menu_open: {
          id: "avatar_menu_open",
          defaultMessage: "Open Avatar Menu"
        },
        avatar_menu_close: {
          id: "avatar_menu_close",
          defaultMessage: "Close Avatar Menu"
        }
      })
    },
    26840: (a, e, n) => {
      n.d(e, {
        A: () => ja
      });
      var t = {};
      n.r(t), n.d(t, {
        beaterator: () => d,
        bully: () => m,
        careers: () => g,
        gta: () => A,
        gta2: () => f,
        gta3: () => h,
        gta4: () => b,
        gta5: () => p,
        gtaAdvance: () => C,
        gtaCtw: () => u,
        gtaIvEflc: () => v,
        gtaLcs: () => w,
        gtaLondon: () => y,
        gtaOnline: () => x,
        gtaPlus: () => _,
        gtaSanAndreas: () => k,
        gtaTrilogy: () => B,
        gtaVc: () => I,
        gtaVcs: () => M,
        laNoire: () => S,
        manhunt: () => z,
        manhunt2: () => R,
        maxPayne: () => D,
        maxPayne2: () => N,
        maxPayne3: () => T,
        midnightclub: () => E,
        midnightclub2: () => F,
        midnightclub3: () => L,
        midnightclubStreetRacing: () => H,
        oni: () => P,
        readDeadOnline: () => j,
        redDeadRedemption: () => G,
        redDeadRedemption2: () => W,
        redDeadRedemptionUndeadNightmare: () => J,
        redDeadRevolver: () => O,
        rsg: () => K,
        skateAndDestroy: () => q,
        smugglersRun: () => U,
        smugglersRun2: () => Y,
        smugglersRunWarzones: () => Z,
        stateOfEmergency: () => Q,
        tableTennis: () => V,
        theItalianJob: () => X,
        theWarriors: () => $,
        wildMetal: () => aa
      });
      var o = {};
      n.r(o), n.d(o, {
        GamesMenu: () => Ea,
        GamesMenuItem: () => Fa,
        default: () => Ha
      });
      var r = n(62229),
        i = n(30062);
      const d = () => ({
        site: "beaterator",
        appearancePaths: {
          [i.C.www]: [{
            path: "/games/beaterator/*",
            options: {}
          }]
        },
        brand: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/4f9915b608d2f8e73cc53e3f08205b71.png",
        links: []
      });
      var s = n(81788);
      const l = (0, s.defineMessages)({
          nav_rockstargames_home: {
            id: "nav_rockstargames_home",
            defaultMessage: "Rockstar Games Home"
          },
          nav_rockstargames_logo: {
            id: "nav_rockstargames_logo",
            defaultMessage: "Click to open menu"
          },
          nav_gtao_overview: {
            id: "nav_gtao_overview",
            defaultMessage: "Overview"
          },
          nav_gtao_gtao: {
            id: "nav_gtao_gtao",
            defaultMessage: "GTA Online"
          },
          nav_gtao_discover: {
            id: "nav_gtao_discover",
            defaultMessage: "Discover"
          },
          nav_gtao_my_character: {
            id: "nav_gtao_my_character",
            defaultMessage: "My Character"
          },
          nav_gtao_career_progress: {
            id: "nav_gtao_career_progress",
            defaultMessage: "Career Progress"
          },
          nav_gtao_guides: {
            id: "nav_gtao_guides",
            defaultMessage: "Guides"
          },
          nav_gtao_license_plate_creator: {
            id: "nav_gtao_license_plate_creator",
            defaultMessage: "License Plate Creator"
          },
          nav_gtao_story: {
            id: "nav_gtao_story",
            defaultMessage: "Story"
          },
          nav_gtao_stats: {
            id: "nav_gtao_stats",
            defaultMessage: "Stats"
          },
          nav_gtao_missions: {
            id: "nav_gtao_missions",
            defaultMessage: "Missions"
          },
          nav_gtao_checklist: {
            id: "nav_gtao_checklist",
            defaultMessage: "Checklist"
          },
          nav_gtao_accomplishments: {
            id: "nav_gtao_accomplishments",
            defaultMessage: "Accomplishments"
          },
          nav_gtao_gta_plus: {
            id: "nav_gtao_gta_plus",
            defaultMessage: "GTA+"
          },
          nav_gtao_community: {
            id: "nav_gtao_community",
            defaultMessage: "Community"
          },
          nav_gtao_jobs: {
            id: "nav_gtao_jobs",
            defaultMessage: "Jobs"
          },
          nav_gtao_community_series: {
            id: "nav_gtao_community_series",
            defaultMessage: "Community Series"
          },
          nav_gtao_my_jobs: {
            id: "nav_gtao_my_jobs",
            defaultMessage: "My Jobs"
          },
          nav_gtao_jobs_browse_all: {
            id: "nav_gtao_jobs_browse_all",
            defaultMessage: "Browse All Jobs"
          },
          nav_gtao_crews: {
            id: "nav_gtao_crews",
            defaultMessage: "Crews"
          },
          nav_gtao_my_crews: {
            id: "nav_gtao_my_crews",
            defaultMessage: "My Crews"
          },
          nav_gtao_browse_crews: {
            id: "nav_gtao_browse_crews",
            defaultMessage: "Browse All Crews"
          },
          nav_gtao_crews_create: {
            id: "nav_gtao_crews_create",
            defaultMessage: "Create a Crew"
          },
          nav_gtao_emblem_editor: {
            id: "nav_gtao_emblem_editor",
            defaultMessage: "Emblem Editor"
          },
          nav_gtao_jobs_playlists: {
            id: "nav_gtao_jobs_playlists",
            defaultMessage: "Playlists"
          },
          nav_gtao_photos: {
            id: "nav_gtao_photos",
            defaultMessage: "Photos"
          },
          nav_gtao_videos: {
            id: "nav_gtao_videos",
            defaultMessage: "Videos"
          },
          nav_gtao_support: {
            id: "nav_gtao_support",
            defaultMessage: "Support"
          },
          nav_gtao_cta_buy_now: {
            id: "nav_gtao_cta_buy_now",
            defaultMessage: "Buy Now"
          },
          nav_gta_trilogy_overview: {
            id: "nav_gta_trilogy_overview",
            defaultMessage: "Overview"
          },
          nav_gta_trilogy_accomplishments: {
            id: "nav_gta_trilogy_accomplishments",
            defaultMessage: "Accomplishments"
          },
          nav_gta_trilogy_gtasa: {
            id: "nav_gta_trilogy_gtasa",
            defaultMessage: "GTA: San Andreas"
          },
          nav_gta_trilogy_gtavc: {
            id: "nav_gta_trilogy_gtavc",
            defaultMessage: "GTA: Vice City"
          },
          nav_gta_trilogy_gta3: {
            id: "nav_gta_trilogy_gta3",
            defaultMessage: "GTA III"
          },
          nav_gta_trilogy_support: {
            id: "nav_gta_trilogy_support",
            defaultMessage: "Support"
          },
          nav_gta_trilogy_cta_buy_now: {
            id: "nav_gta_trilogy_cta_buy_now",
            defaultMessage: "Buy Now"
          },
          nav_bully_game_overview: {
            id: "nav_bully_game_overview",
            defaultMessage: "Discover"
          },
          nav_bully_videos: {
            id: "nav_bully_videos",
            defaultMessage: "Videos"
          },
          nav_bully_accomplishments: {
            id: "nav_bully_accomplishments",
            defaultMessage: "Accomplishments"
          },
          nav_bully_support: {
            id: "nav_bully_Overview",
            defaultMessage: "Support"
          },
          nav_bully_cta_buy_now: {
            id: "nav_bully_cta_buy_now",
            defaultMessage: "Buy Now"
          },
          nav_rsg_games: {
            id: "nav_rsg_games",
            defaultMessage: "Games"
          },
          nav_rsg_newswire: {
            id: "nav_rsg_newswire",
            defaultMessage: "Newswire"
          },
          nav_rsg_videos: {
            id: "nav_rsg_videos",
            defaultMessage: "Videos"
          },
          nav_rsg_downloads: {
            id: "nav_rsg_downloads",
            defaultMessage: "Downloads"
          },
          nav_rsg_store: {
            id: "nav_rsg_store",
            defaultMessage: "Store"
          },
          nav_rsg_support: {
            id: "nav_rsg_support",
            defaultMessage: "Support"
          },
          nav_rsg_community_guidelines: {
            id: "nav_rsg_community_guidelines",
            defaultMessage: "Community Guidelines"
          },
          nav_rsg_cta_get_launcher: {
            id: "nav_cta_get_launcher",
            defaultMessage: "Get Launcher"
          },
          nav_careers_home: {
            id: "nav_careers_home",
            defaultMessage: "Home"
          },
          nav_careers_openings: {
            id: "nav_careers_openings",
            defaultMessage: "Openings"
          },
          nav_careers_contact_us: {
            id: "nav_careers_contact_us",
            defaultMessage: "Contact us"
          },
          nav_careers_careers_on_linkedin: {
            id: "nav_careers_careers_on_linkedin",
            defaultMessage: "Careers on LinkedIn"
          },
          nav_gta3_cta_buy_now: {
            id: "nav_gta3_cta_buy_now",
            defaultMessage: "Buy Now"
          },
          nav_gtaiv_overview: {
            id: "nav_gtaiv_overview",
            defaultMessage: "Discover"
          },
          nav_gtaiv_accomplishments: {
            id: "nav_gtaiv_accomplishments",
            defaultMessage: "Accomplishments"
          },
          nav_gtaiv_support: {
            id: "nav_gtaiv_support",
            defaultMessage: "Support"
          },
          nav_gtaiv_cta_buy_now: {
            id: "nav_gtaiv_cta_buy_now",
            defaultMessage: "Buy Now"
          },
          nav_gtav_overview: {
            id: "nav_gtav_overview",
            defaultMessage: "Overview"
          },
          nav_gtav_gta_online: {
            id: "nav_gtav_gta_online",
            defaultMessage: "GTA Online"
          },
          nav_gtav_discover: {
            id: "nav_gtav_discover",
            defaultMessage: "Discover"
          },
          nav_gtav_my_character: {
            id: "nav_gtav_my_character",
            defaultMessage: "My Character"
          },
          nav_gtav_guides: {
            id: "nav_gtav_guides",
            defaultMessage: "Guides"
          },
          nav_gtav_licence_plate_creator: {
            id: "nav_gtav_licence_plate_creator",
            defaultMessage: "License Plate Creator"
          },
          nav_gtav_story: {
            id: "nav_gtav_story",
            defaultMessage: "Story"
          },
          nav_gtav_stats: {
            id: "nav_gtav_stats",
            defaultMessage: "Stats"
          },
          nav_gtav_missions: {
            id: "nav_gtav_missions",
            defaultMessage: "Missions"
          },
          nav_gtav_checklist: {
            id: "nav_gtav_checklist",
            defaultMessage: "Checklist"
          },
          nav_gtav_accomplishments: {
            id: "nav_gtav_accomplishments",
            defaultMessage: "Accomplishments"
          },
          nav_gtav_gta_plus: {
            id: "nav_gtav_gta_plus",
            defaultMessage: "GTA+"
          },
          nav_gtav_community: {
            id: "nav_gtav_community",
            defaultMessage: "Community"
          },
          nav_gtav_jobs: {
            id: "nav_gtav_jobs",
            defaultMessage: "Jobs"
          },
          nav_gtav_community_series: {
            id: "nav_gtav_community_series",
            defaultMessage: "Community Series"
          },
          nav_gtav_jobs_browse_all: {
            id: "nav_gtav_jobs_browse_all",
            defaultMessage: "Browse All Jobs"
          },
          nav_gtav_my_jobs: {
            id: "nav_gtav_my_jobs",
            defaultMessage: "My Jobs"
          },
          nav_gtav_playlists: {
            id: "nav_gtav_playlists",
            defaultMessage: "Playlists"
          },
          nav_gtav_crews: {
            id: "nav_gtav_crews",
            defaultMessage: "Crews"
          },
          nav_gtav_crews_browse_all: {
            id: "nav_gtav_crews_browse_all",
            defaultMessage: "Browse All Crews"
          },
          nav_gtav_my_crews: {
            id: "nav_gtav_my_crews",
            defaultMessage: "My Crews"
          },
          nav_gtav_create_crew: {
            id: "nav_gtav_create_crew",
            defaultMessage: "Create a Crew"
          },
          nav_gtav_emblem_editor: {
            id: "nav_gtav_emblem_editor",
            defaultMessage: "Emblem Editor"
          },
          nav_gtav_photos: {
            id: "nav_gtav_photos",
            defaultMessage: "Photos"
          },
          nav_gtav_videos: {
            id: "nav_gtav_videos",
            defaultMessage: "Videos"
          },
          nav_gtav_support: {
            id: "nav_gtav_support",
            defaultMessage: "Support"
          },
          nav_gtav_cta_buy_now: {
            id: "nav_gtav_cta_buy_now",
            defaultMessage: "Buy Now"
          },
          nav_gtaiveflc_overview: {
            id: "nav_gtaiveflc_overview",
            defaultMessage: "Overview"
          },
          nav_gtaiveflc_accomplishments: {
            id: "nav_gtaiveflc_accomplishments",
            defaultMessage: "Accomplishments"
          },
          nav_gtaiveflc_support: {
            id: "nav_gtaiveflc_support",
            defaultMessage: "Support"
          },
          nav_gtaiveflc_cta_buy_now: {
            id: "nav_gtaiveflc_cta_buy_now",
            defaultMessage: "Buy Now"
          },
          nav_gtasanandreas_cta_buy_now: {
            id: "nav_gtasanandreas_cta_buy_now",
            defaultMessage: "Buy Now"
          },
          nav_gtavc_discover: {
            id: "nav_gtavc_discover",
            defaultMessage: "Discover"
          },
          nav_gtavc_cta_buy_now: {
            id: "nav_gtavc_cta_buy_now",
            defaultMessage: "Buy Now"
          },
          nav_gtavcs_discover: {
            id: "nav_gtavcs_discover",
            defaultMessage: "Discover"
          },
          nav_lanoire_overview: {
            id: "nav_lanoire_overview",
            defaultMessage: "Overview"
          },
          nav_lanoire_official_site: {
            id: "nav_lanoire_official_site",
            defaultMessage: "Official Site"
          },
          nav_lanoire_progress: {
            id: "nav_lanoire_progress",
            defaultMessage: "Progress"
          },
          nav_lanoire_pc_console: {
            id: "nav_lanoire_pc_console",
            defaultMessage: "PC/Console"
          },
          nav_lanoire_case_tracker: {
            id: "nav_lanoire_case_tracker",
            defaultMessage: "Case Tracker"
          },
          nav_lanoire_checklist: {
            id: "nav_lanoire_checklist",
            defaultMessage: "Checklist"
          },
          nav_lanoire_stats: {
            id: "nav_lanoire_stats",
            defaultMessage: "Stats"
          },
          nav_lanoire_accomplishments: {
            id: "nav_lanoire_accomplishments",
            defaultMessage: "Accomplishments"
          },
          nav_lanoire_badge_pursuit: {
            id: "nav_lanoire_badge_pursuit",
            defaultMessage: "Badge Pursuit"
          },
          nav_lanoire_vr_case_files: {
            id: "nav_lanoire_vr_case_files",
            defaultMessage: "VR Case Files"
          },
          nav_lanoire_support: {
            id: "nav_lanoire_support",
            defaultMessage: "Support"
          },
          nav_lanoire_cta_buy_now: {
            id: "nav_lanoire_cta_buy_now",
            defaultMessage: "Buy Now"
          },
          nav_tabletennis_cta_buy_now: {
            id: "nav_tabletennis_cta_buy_now",
            defaultMessage: "Buy Now"
          },
          nav_mp3_overview: {
            id: "nav_mp3_overview",
            defaultMessage: "Overview"
          },
          nav_mp3_official_site: {
            id: "nav_mp3_official_site",
            defaultMessage: "Official Site"
          },
          nav_mp3_news: {
            id: "nav_mp3_news",
            defaultMessage: "News"
          },
          nav_mp3_progress: {
            id: "nav_mp3_progress",
            defaultMessage: "Progress"
          },
          nav_mp3_accomplishments: {
            id: "nav_mp3_accomplishments",
            defaultMessage: "Accomplishments"
          },
          nav_mp3_singleplayer: {
            id: "nav_mp3_singleplayer",
            defaultMessage: "Singleplayer"
          },
          nav_mp3_multiplayer: {
            id: "nav_mp3_multiplayer",
            defaultMessage: "Multiplayer"
          },
          nav_mp3_career: {
            id: "nav_mp3_career",
            defaultMessage: "Career"
          },
          nav_mp3_checklist: {
            id: "nav_mp3_checklist",
            defaultMessage: "Checklist"
          },
          nav_mp3_grinds: {
            id: "nav_mp3_grinds",
            defaultMessage: "Grinds"
          },
          nav_mp3_weapons: {
            id: "nav_mp3_weapons",
            defaultMessage: "Weapons"
          },
          nav_mp3_chapters: {
            id: "nav_mp3_chapters",
            defaultMessage: "Chapters"
          },
          nav_mp3_leaderboards: {
            id: "nav_mp3_leaderboards",
            defaultMessage: "Leaderboards"
          },
          nav_mp3_crews: {
            id: "nav_mp3_crews",
            defaultMessage: "Crews"
          },
          nav_mp3_score_attack: {
            id: "nav_mp3_score_attack",
            defaultMessage: "Score Attack"
          },
          nav_mp3_ny_minute: {
            id: "nav_mp3_ny_minute",
            defaultMessage: "New York Minute"
          },
          nav_mp3_checkpoint_challenge: {
            id: "nav_mp3_checkpoint_challenge",
            defaultMessage: "Checkpoint Challenge"
          },
          nav_mp3_featured: {
            id: "nav_mp3_featured",
            defaultMessage: "Featured"
          },
          nav_mp3_specifications: {
            id: "nav_mp3_specifications",
            defaultMessage: "Specifications"
          },
          nav_mp3_support: {
            id: "nav_mp3_support",
            defaultMessage: "Support"
          },
          nav_mp3_cta_buy_now: {
            id: "nav_mp3_cta_buy_now",
            defaultMessage: "Buy Now"
          },
          nav_midnightclubla_buy_now: {
            id: "nav_midnightclubla_buy_now",
            defaultMessage: "Buy Now"
          },
          nav_rdr_cta_buy_now: {
            id: "nav_rdr_cta_buy_now",
            defaultMessage: "Buy Now"
          },
          nav_rdo_overview: {
            id: "nav_rdo_overview",
            defaultMessage: "Overview"
          },
          nav_rdo_explore: {
            id: "nav_rdo_explore",
            defaultMessage: "Explore"
          },
          nav_rdo_getting_started: {
            id: "nav_rdo_getting_started",
            defaultMessage: "Getting Started"
          },
          nav_rdo_specialist_roles: {
            id: "nav_rdo_specialist_roles",
            defaultMessage: "Specialist Roles"
          },
          nav_rdo_story_missions: {
            id: "nav_rdo_story_missions",
            defaultMessage: "Story Missions"
          },
          nav_rdo_posses_free_roam: {
            id: "nav_rdo_posses_free_roam",
            defaultMessage: "Posses and Free Roam"
          },
          nav_rdo_competitive_series: {
            id: "nav_rdo_competitive_series",
            defaultMessage: "Competitive Series"
          },
          nav_rdo_customization: {
            id: "nav_rdo_customization",
            defaultMessage: "Customization"
          },
          nav_rdo_progression: {
            id: "nav_rdo_progression",
            defaultMessage: "Progression"
          },
          nav_rdo_progress: {
            id: "nav_rdo_progress",
            defaultMessage: "Progress"
          },
          nav_rdo_my_character: {
            id: "nav_rdo_my_character",
            defaultMessage: "My Character"
          },
          nav_rdo_roles: {
            id: "nav_rdo_roles",
            defaultMessage: "Roles"
          },
          nav_rdo_rank_unlocks: {
            id: "nav_rdo_rank_unlocks",
            defaultMessage: "Rank Unlocks"
          },
          nav_rdo_awards: {
            id: "nav_rdo_awards",
            defaultMessage: "Awards"
          },
          nav_rdo_accomplishments: {
            id: "nav_rdo_accomplishments",
            defaultMessage: "Accomplishments"
          },
          nav_rdo_benefits: {
            id: "nav_rdo_benefits",
            defaultMessage: "Benefits"
          },
          nav_rdo_guides: {
            id: "nav_rdo_guides",
            defaultMessage: "Guides"
          },
          nav_rdo_club_rewards: {
            id: "nav_rdo_club_rewards",
            defaultMessage: "Club Rewards"
          },
          nav_rdo_community: {
            id: "nav_rdo_community",
            defaultMessage: "Community"
          },
          nav_rdo_posses: {
            id: "nav_rdo_posses",
            defaultMessage: "Posses"
          },
          nav_rdo_photos: {
            id: "nav_rdo_photos",
            defaultMessage: "Photos"
          },
          nav_rdo_catalogue: {
            id: "nav_rdo_catalogue",
            defaultMessage: "Catalogue"
          },
          nav_rdo_support: {
            id: "nav_rdo_support",
            defaultMessage: "Support"
          },
          nav_rdo_cta_buy_now: {
            id: "nav_rdo_cta_buy_now",
            defaultMessage: "Buy Now"
          },
          nav_rdr2_overview: {
            id: "nav_rdr2_overview",
            defaultMessage: "Overview"
          },
          nav_rdr2_explore: {
            id: "nav_rdr2_explore",
            defaultMessage: "Explore"
          },
          nav_rdr2_van_der_linde_gang: {
            id: "nav_rdr2_van_der_linde_gang",
            defaultMessage: "The Van der Linde Gang"
          },
          nav_rdr2_locations: {
            id: "nav_rdr2_locations",
            defaultMessage: "Locations"
          },
          nav_rdr2_wildlife: {
            id: "nav_rdr2_wildlife",
            defaultMessage: "Wildlife"
          },
          nav_rdr2_weaponry: {
            id: "nav_rdr2_weaponry",
            defaultMessage: "Weaponry"
          },
          nav_rdr2_progress: {
            id: "nav_rdr2_progress",
            defaultMessage: "Progress"
          },
          nav_rdr2_stats: {
            id: "nav_rdr2_stats",
            defaultMessage: "Stats"
          },
          nav_rdr2_chapters: {
            id: "nav_rdr2_chapters",
            defaultMessage: "Chapters"
          },
          nav_rdr2_challenges: {
            id: "nav_rdr2_challenges",
            defaultMessage: "Challenges"
          },
          nav_rdr2_character: {
            id: "nav_rdr2_character",
            defaultMessage: "Character"
          },
          nav_rdr2_compendium: {
            id: "nav_rdr2_compendium",
            defaultMessage: "Compendium"
          },
          nav_rdr2_accomplishments: {
            id: "nav_rdr2_accomplishments",
            defaultMessage: "Accomplishments"
          },
          nav_rdr2_media: {
            id: "nav_rdr2_media",
            defaultMessage: "Media"
          },
          nav_rdr2_gallery: {
            id: "nav_rdr2_gallery",
            defaultMessage: "Gallery"
          },
          nav_rdr2_artwork: {
            id: "nav_rdr2_artwork",
            defaultMessage: "Artwork"
          },
          nav_rdr2_videos: {
            id: "nav_rdr2_videos",
            defaultMessage: "Videos"
          },
          nav_rdr2_music: {
            id: "nav_rdr2_music",
            defaultMessage: "Music"
          },
          nav_rdr2_online: {
            id: "nav_rdr2_online",
            defaultMessage: "Online"
          },
          nav_rdr2_catalogue: {
            id: "nav_rdr2_catalogue",
            defaultMessage: "Catalogue"
          },
          nav_rdr2_support: {
            id: "nav_rdr2_support",
            defaultMessage: "Support"
          },
          nav_rdr2_cta_buy_now: {
            id: "nav_rdr2_cta_buy_now",
            defaultMessage: "Buy Now"
          },
          nav_undeadnightmare_discover: {
            id: "nav_undeadnightmare_discover",
            defaultMessage: "Discover"
          },
          nav_undeadnightmare_info: {
            id: "nav_undeadnightmare_info",
            defaultMessage: "Info"
          },
          nav_undeadnightmare_media: {
            id: "nav_undeadnightmare_media",
            defaultMessage: "Media"
          },
          nav_undeadnightmare_videos: {
            id: "nav_undeadnightmare_videos",
            defaultMessage: "Videos"
          },
          nav_undeadnightmare_gallery: {
            id: "nav_undeadnightmare_gallery",
            defaultMessage: "Gallery"
          },
          nav_undeadnightmare_news: {
            id: "nav_undeadnightmare_news",
            defaultMessage: "News"
          },
          nav_undeadnightmare_specs: {
            id: "nav_undeadnightmare_specs",
            defaultMessage: "Specifications"
          },
          nav_undeadnightmare_suport: {
            id: "nav_undeadnightmare_suport",
            defaultMessage: "Support"
          },
          nav_undeadnightmare_buy_now: {
            id: "nav_undeadnightmare_buy_now",
            defaultMessage: "Buy Now"
          },
          nav_undeadnightmare_ps3_digital: {
            id: "nav_undeadnightmare_ps3_digital",
            defaultMessage: "PS3 - Digital"
          },
          nav_undeadnightmare_xbox360_digital: {
            id: "nav_undeadnightmare_xbox360_digital",
            defaultMessage: "Xbox 360 - Digital"
          },
          nav_support_home: {
            id: "nav_support_home",
            defaultMessage: "Home"
          },
          nav_support_service_status: {
            id: "nav_support_service_status",
            defaultMessage: "Service Status"
          },
          nav_support_submit_ticket: {
            id: "nav_support_submit_ticket",
            defaultMessage: "Submit a Ticket"
          },
          nav_support_dashboard: {
            id: "nav_support_dashboard",
            defaultMessage: "My Dashboard"
          },
          games_menu_featured: {
            id: "games_menu_featured",
            defaultMessage: "Featured Games"
          },
          games_menu_view_all: {
            id: "games_menu_view_all",
            defaultMessage: "View All"
          },
          games_menu_gta_v: {
            id: "games_menu_gta_v",
            defaultMessage: "Grand Theft Auto V"
          },
          games_menu_gta_online: {
            id: "games_menu_gta_online",
            defaultMessage: "Grand Theft Auto Online"
          },
          games_menu_gta_trilogy: {
            id: "games_menu_gta_trilogy",
            defaultMessage: "Grand Theft Auto: The Trilogy"
          },
          games_menu_rdr_2: {
            id: "games_menu_rdr_2",
            defaultMessage: "Red Dead Redemption 2"
          },
          games_menu_rdr_online: {
            id: "games_menu_rdr_online",
            defaultMessage: "Red Dead Online"
          },
          nav_thewarriors_cta_buy_now: {
            id: "nav_thewarriors_cta_buy_now",
            defaultMessage: "Buy Now"
          },
          search_action: {
            id: "search_action",
            defaultMessage: "Search"
          },
          search_open_button: {
            id: "search_open_button",
            defaultMessage: "Open Search"
          },
          search_close_button: {
            id: "search_close_button",
            defaultMessage: "Close Search"
          },
          search_placeholder: {
            id: "search_placeholder",
            defaultMessage: "Search Rockstar Games..."
          },
          search_target_aria_label: {
            id: "search_target_aria_label",
            defaultMessage: "Search {target}"
          },
          search_target_games: {
            id: "search_target_games",
            defaultMessage: "Games"
          },
          search_target_posts: {
            id: "search_target_posts",
            defaultMessage: "Posts"
          },
          search_target_videos: {
            id: "search_target_videos",
            defaultMessage: "Videos"
          },
          search_target_community: {
            id: "search_target_community",
            defaultMessage: "Community"
          },
          search_target_users: {
            id: "search_target_users",
            defaultMessage: "Users"
          },
          search_target_crews: {
            id: "search_target_crews",
            defaultMessage: "Crews"
          },
          search_target_jobs: {
            id: "search_target_jobs",
            defaultMessage: "Jobs"
          },
          search_target_user_photos: {
            id: "search_target_user_photos",
            defaultMessage: "User Photos"
          },
          sc_link_activity_feed: {
            id: "sc_link_activity_feed",
            defaultMessage: "Activity Feed"
          },
          sc_link_account: {
            id: "sc_link_account",
            defaultMessage: "Account"
          },
          sc_link_view_my_profile: {
            id: "sc_link_view_my_profile",
            defaultMessage: "View My Profile"
          },
          sc_link_messages: {
            id: "sc_link_messages",
            defaultMessage: "Messages"
          },
          sc_link_game_activation: {
            id: "sc_link_game_activation",
            defaultMessage: "Game Activation"
          },
          sc_link_notifications: {
            id: "sc_link_notifications",
            defaultMessage: "Notifications"
          },
          sc_link_crews: {
            id: "sc_link_crews",
            defaultMessage: "Crews"
          },
          sc_link_friends: {
            id: "sc_link_friends",
            defaultMessage: "Friends"
          },
          sc_link_my_friends: {
            id: "sc_link_my_friends",
            defaultMessage: "My Friends"
          },
          sc_link_import_friends: {
            id: "sc_link_import_friends",
            defaultMessage: "Import Friends"
          },
          sc_link_find_friends: {
            id: "sc_link_find_friends",
            defaultMessage: "Find Friends"
          },
          sc_link_settings: {
            id: "sc_link_settings",
            defaultMessage: "Settings"
          },
          sc_link_help: {
            id: "sc_link_help",
            defaultMessage: "Help"
          },
          sc_link_support: {
            id: "sc_link_support",
            defaultMessage: "Support"
          },
          sc_link_legal: {
            id: "sc_link_legal",
            defaultMessage: "Legal"
          },
          sc_link_privacy_policy: {
            id: "sc_link_privacy_policy",
            defaultMessage: "Privacy Policy"
          },
          sc_link_cookies_policy: {
            id: "sc_link_cookies_policy",
            defaultMessage: "Cookies Policy"
          },
          sc_link_cookies_settings: {
            id: "sc_link_cookies_settings",
            defaultMessage: "Cookies Settings"
          },
          sc_link_do_not_sell_my_information: {
            id: "sc_link_do_not_sell_my_information",
            defaultMessage: "Do Not Sell or Share My Personal Information"
          },
          nofications_new: {
            id: "nofications_new",
            defaultMessage: "New notifications"
          }
        }),
        c = i.C.www,
        m = a => ({
          site: "bully",
          appearancePaths: {
            [i.C.www]: [{
              path: "/bully/*",
              options: {}
            }],
            [i.C.socialClub]: [{
              path: "/games/bully*",
              options: {}
            }, {
              path: "/member/*/games/bully/*",
              options: {}
            }]
          },
          brand: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/b2e6fe18e15f1109b7d442881fccb9a6.svg",
          links: [{
            text: a.formatMessage(l.nav_bully_game_overview),
            gaText: l.nav_bully_game_overview.defaultMessage,
            type: "nav-internal",
            location: {
              domain: i.C.www,
              path: "/bully"
            },
            dataTestId: "bullyLink"
          }, {
            text: a.formatMessage(l.nav_bully_accomplishments),
            gaText: l.nav_bully_accomplishments.defaultMessage,
            type: "nav-internal",
            location: {
              domain: i.C.socialClub,
              path: "/games/bully"
            },
            dataTestId: "bullyButton"
          }, {
            text: a.formatMessage(l.nav_bully_support),
            gaText: l.nav_bully_support.defaultMessage,
            type: "nav-external",
            target: "_blank",
            location: {
              domain: i.C.support,
              path: "/categories/115001618067"
            },
            dataTestId: "bullySupportLink"
          }],
          cta: {
            text: a.formatMessage(l.nav_bully_cta_buy_now),
            gaText: l.nav_bully_cta_buy_now.defaultMessage,
            location: {
              domain: c,
              path: "/bully/?section=order"
            },
            ga: "cta_buy",
            dataTestId: "bullyPurchaseButton"
          }
        }),
        g = a => ({
          site: "careers",
          appearancePaths: {
            [i.C.www]: [{
              path: "/careers/*",
              options: {}
            }]
          },
          brand: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/3a6910245d0cd177a1c2228d2f661b86.svg",
          hideSearch: !0,
          links: [{
            text: a.formatMessage(l.nav_careers_home),
            gaText: l.nav_careers_home.defaultMessage,
            type: "nav-internal",
            location: {
              domain: i.C.www,
              path: "/careers"
            },
            dataTestId: "careersLink"
          }, {
            text: a.formatMessage(l.nav_careers_openings),
            gaText: l.nav_careers_openings.defaultMessage,
            type: "nav-internal",
            location: {
              domain: i.C.www,
              path: "/careers/openings"
            },
            dataTestId: "careersOpeningsLink"
          }, {
            text: a.formatMessage(l.nav_careers_contact_us),
            gaText: l.nav_careers_contact_us.defaultMessage,
            type: "nav-no-link",
            dataTestId: "careersContactUsLink"
          }, {
            text: a.formatMessage(l.nav_careers_careers_on_linkedin),
            gaText: l.nav_careers_careers_on_linkedin.defaultMessage,
            type: "nav-external",
            target: "_blank",
            location: {
              domain: "https://linkedin.com",
              path: "/company/rockstar-games/"
            },
            dataTestId: "careersLinkedInLink"
          }]
        }),
        A = () => ({
          site: "gta",
          appearancePaths: {
            [i.C.www]: [{
              path: "/games/gta/*",
              options: {}
            }]
          },
          brand: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/65f1aec1603710b9836acf07cf9ac79d.svg",
          links: []
        }),
        f = () => ({
          site: "gta2",
          appearancePaths: {
            [i.C.www]: [{
              path: "/games/gta2/*",
              options: {}
            }]
          },
          brand: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d183c567f4254a34a55e0bc49cf69fe6.svg",
          links: []
        }),
        h = a => ({
          site: "grandtheftauto3",
          appearancePaths: {
            [i.C.www]: [{
              path: "/games/grandtheftauto3/*",
              options: {}
            }]
          },
          brand: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/70d4774a8eb28cbdc69793504746f961.svg",
          links: [],
          cta: {
            text: a.formatMessage(l.nav_gta3_cta_buy_now),
            gaText: l.nav_gta3_cta_buy_now.defaultMessage,
            variant: "highlight",
            dataTestId: "gta3BuyNowCta",
            target: "_blank",
            location: {
              domain: i.C.store,
              path: "/game/buy-grand-theft-auto-the-trilogy-the-definitive-edition"
            },
            ga: "cta_buy"
          }
        }),
        b = a => ({
          site: "gta-iv",
          appearancePaths: {
            [i.C.www]: [{
              path: "/games/IV/*",
              options: {}
            }],
            [i.C.socialClub]: [{
              path: "/games/gtaiv*",
              options: {}
            }, {
              path: "/member/*/games/gtaiv*",
              options: {}
            }]
          },
          brand: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/01dcdecd53de88ec599ab76ce2863fcd.svg",
          links: [{
            text: a.formatMessage(l.nav_gtaiv_overview),
            gaText: l.nav_gtaiv_overview.defaultMessage,
            type: "nav-internal",
            location: {
              domain: i.C.www,
              path: "/games/IV"
            },
            dataTestId: "gtaivLink"
          }, {
            text: a.formatMessage(l.nav_gtaiv_accomplishments),
            gaText: l.nav_gtaiv_accomplishments.defaultMessage,
            type: "nav-internal",
            dataTestId: "gtaivButton",
            location: {
              domain: i.C.socialClub,
              path: "/games/gtaiv"
            }
          }, {
            text: a.formatMessage(l.nav_gtaiv_support),
            gaText: l.nav_gtaiv_support.defaultMessage,
            type: "nav-external",
            dataTestId: "gtaivSupportLink",
            target: "_blank",
            location: {
              domain: i.C.support,
              path: "/categories/200013096"
            }
          }],
          cta: {
            text: a.formatMessage(l.nav_gtaiv_cta_buy_now),
            gaText: l.nav_gtaiv_cta_buy_now.defaultMessage,
            variant: "highlight",
            target: "_blank",
            location: {
              domain: i.C.store,
              path: "/game/buy-grand-theft-auto-iv"
            },
            ga: "cta_buy",
            dataTestId: "gtaivPurchaseLink"
          }
        }),
        p = a => ({
          appearancePaths: {
            [i.C.www]: [{
              path: "/gta-v/*",
              options: {}
            }],
            [i.C.socialClub]: [{
              path: "/games/gtav/*",
              options: {}
            }, {
              path: "/member/*/games/gtav/*",
              options: {}
            }]
          },
          brand: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/732efc56393d89076732e76b0a2b55b2.svg",
          cta: {
            dataTestId: "gtavPurchaseLink",
            ga: "cta_buy",
            location: {
              domain: i.C.www,
              path: "/gta-v?info=order"
            },
            text: a.formatMessage(l.nav_gtav_cta_buy_now),
            gaText: l.nav_gtav_cta_buy_now.defaultMessage
          },
          links: [{
            dataTestId: "gtavLink",
            location: {
              domain: i.C.www,
              path: "/gta-v"
            },
            text: a.formatMessage(l.nav_gtav_overview),
            gaText: l.nav_gtav_overview.defaultMessage,
            type: "nav-internal"
          }, {
            children: [{
              dataTestId: "gtaoLink",
              location: {
                domain: i.C.www,
                path: "/gta-online"
              },
              text: a.formatMessage(l.nav_gtav_discover),
              gaText: l.nav_gtav_discover.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "gtaoCareerProgressButton",
              location: {
                domain: i.C.www,
                path: "/gta-online/career-progress"
              },
              text: a.formatMessage(l.nav_gtao_career_progress),
              gaText: l.nav_gtao_career_progress.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "gtaoButton",
              isLegacy: !0,
              location: {
                domain: i.C.socialClub,
                path: "/games/gtav/career/overview/gtaonline"
              },
              text: a.formatMessage(l.nav_gtav_my_character),
              gaText: l.nav_gtav_my_character.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "gtaoJobsLink",
              location: {
                domain: i.C.socialClub,
                path: "/jobs/?dateRangeCreated=any&filter=community&sort=date&title=gtav"
              },
              text: a.formatMessage(l.nav_gtav_jobs),
              gaText: l.nav_gtav_jobs.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "gtaoGuidesLink",
              location: {
                domain: i.C.www,
                path: "/gta-online/guides"
              },
              text: a.formatMessage(l.nav_gtav_guides),
              gaText: l.nav_gtav_guides.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "gtaoLicensePlatesLink",
              location: {
                domain: i.C.www,
                path: "/gta-online/license-plates"
              },
              text: a.formatMessage(l.nav_gtav_licence_plate_creator),
              gaText: l.nav_gtav_licence_plate_creator.defaultMessage,
              type: "nav-internal"
            }],
            dataTestId: "gtaoDropdown",
            text: a.formatMessage(l.nav_gtav_gta_online),
            gaText: l.nav_gtav_gta_online.defaultMessage,
            type: "nav-dropdown"
          }, {
            children: [{
              dataTestId: "gtavSpOverviewButton",
              isLegacy: !0,
              location: {
                domain: i.C.socialClub,
                path: "/games/gtav/career/overview/"
              },
              text: a.formatMessage(l.nav_gtav_stats),
              gaText: l.nav_gtav_stats.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "gtavSpMissionsButton",
              isLegacy: !0,
              location: {
                domain: i.C.socialClub,
                path: "/games/gtav/career/missions/"
              },
              text: a.formatMessage(l.nav_gtav_missions),
              gaText: l.nav_gtav_missions.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "gtavSpChecklistButton",
              isLegacy: !0,
              location: {
                domain: i.C.socialClub,
                path: "/games/gtav/career/checklist"
              },
              text: a.formatMessage(l.nav_gtav_checklist),
              gaText: l.nav_gtav_checklist.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "gtavSpAccomplishmentsButton",
              isLegacy: !0,
              location: {
                domain: i.C.socialClub,
                path: "/games/gtav/career/accomplishments"
              },
              text: a.formatMessage(l.nav_gtav_accomplishments),
              gaText: l.nav_gtav_accomplishments.defaultMessage,
              type: "nav-internal"
            }],
            dataTestId: "gtavSpLink",
            text: a.formatMessage(l.nav_gtav_story),
            gaText: l.nav_gtav_story.defaultMessage,
            type: "nav-dropdown"
          }, {
            dataTestId: "gtav+Link",
            location: {
              domain: i.C.www,
              path: "/gta-plus",
              additionalPathMatches: "/gta-plus/*"
            },
            text: a.formatMessage(l.nav_gtav_gta_plus),
            gaText: l.nav_gtav_gta_plus.defaultMessage,
            type: "nav-internal"
          }, {
            children: [{
              children: [{
                dataTestId: "gtavAllJobsButtons",
                isLegacy: !0,
                location: {
                  domain: i.C.socialClub,
                  path: "/jobs/?dateRangeCreated=last7&sort=likes&title=gtav"
                },
                text: a.formatMessage(l.nav_gtav_jobs_browse_all),
                gaText: l.nav_gtav_jobs_browse_all.defaultMessage,
                type: "nav-internal"
              }, {
                dataTestId: "gtavCommunitySeriesLink",
                location: {
                  domain: i.C.socialClub,
                  path: "/jobs/?dateRangeCreated=any&filter=community&sort=date&title=gtav"
                },
                text: a.formatMessage(l.nav_gtav_community_series),
                gaText: l.nav_gtav_community_series.defaultMessage,
                type: "nav-internal"
              }, {
                dataTestId: "gtavMyJobsButtons",
                isLegacy: !0,
                location: {
                  domain: i.C.socialClub,
                  path: "/jobs/?dateRangeCreated=any&filter=me&sort=likes&title=gtav"
                },
                text: a.formatMessage(l.nav_gtav_my_jobs),
                gaText: l.nav_gtav_my_jobs.defaultMessage,
                type: "nav-internal"
              }, {
                dataTestId: "gtavPlaylistsButton",
                location: {
                  domain: i.C.socialClub,
                  path: "/games/gtav/playlists"
                },
                text: a.formatMessage(l.nav_gtav_playlists),
                gaText: l.nav_gtav_playlists.defaultMessage,
                type: "nav-internal"
              }],
              dataTestId: "gtavJobsDropdown",
              text: a.formatMessage(l.nav_gtav_jobs),
              gaText: l.nav_gtav_jobs.defaultMessage,
              type: "nav-dropdown"
            }, {
              children: [{
                dataTestId: "gtavBrowseCrewsButton",
                isLegacy: !0,
                location: {
                  domain: i.C.socialClub,
                  path: "/crews"
                },
                text: a.formatMessage(l.nav_gtav_crews_browse_all),
                gaText: l.nav_gtav_crews_browse_all.defaultMessage,
                type: "nav-internal"
              }, {
                dataTestId: "gtavMyCrewsButton",
                location: {
                  domain: i.C.socialClub,
                  path: "/member/{username}/crews"
                },
                requiresAuth: !0,
                text: a.formatMessage(l.nav_gtav_my_crews),
                gaText: l.nav_gtav_my_crews.defaultMessage,
                type: "nav-internal"
              }, {
                dataTestId: "gtavCreateCrewButton",
                location: {
                  domain: i.C.socialClub,
                  path: "/crews/create"
                },
                text: a.formatMessage(l.nav_gtav_create_crew),
                gaText: l.nav_gtav_create_crew.defaultMessage,
                type: "nav-internal"
              }, {
                dataTestId: "gtavCreateEmblemButton",
                location: {
                  domain: i.C.socialClub,
                  path: "/emblems"
                },
                text: a.formatMessage(l.nav_gtav_emblem_editor),
                gaText: l.nav_gtav_emblem_editor.defaultMessage,
                type: "nav-internal"
              }],
              dataTestId: "gtavCrewsDropdown",
              text: a.formatMessage(l.nav_gtav_crews),
              gaText: l.nav_gtav_crews.defaultMessage,
              type: "nav-dropdown"
            }, {
              dataTestId: "gtaViewPhotosButton",
              location: {
                domain: i.C.socialClub,
                path: "/photos/?dateRange=any&title=gtav"
              },
              text: a.formatMessage(l.nav_gtav_photos),
              gaText: l.nav_gtav_photos.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "gtaCommunityGuidelinesButton",
              location: {
                domain: i.C.www,
                path: "/community-guidelines"
              },
              text: a.formatMessage(l.nav_rsg_community_guidelines),
              gaText: l.nav_rsg_community_guidelines.defaultMessage,
              type: "nav-internal"
            }],
            dataTestId: "gtavCommunityDropdown",
            text: a.formatMessage(l.nav_gtav_community),
            gaText: l.nav_gtav_community.defaultMessage,
            type: "nav-dropdown"
          }, {
            dataTestId: "gtaSupportLink",
            location: {
              domain: i.C.support,
              path: "/categories/200013306"
            },
            target: "_blank",
            text: a.formatMessage(l.nav_gtav_support),
            gaText: l.nav_gtav_support.defaultMessage,
            type: "nav-external"
          }],
          site: "gta5"
        }),
        C = () => ({
          site: "grandtheftauto-gba",
          appearancePaths: {
            [i.C.www]: [{
              path: "/games/grandtheftauto-gba/*",
              options: {}
            }]
          },
          brand: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1c2406b2d84fbe619ab07b1971ecf579.svg",
          links: []
        }),
        u = () => ({
          site: "chinatownwars",
          appearancePaths: {
            [i.C.www]: [{
              path: "/games/chinatownwars/*",
              options: {}
            }]
          },
          brand: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/02cb5f725e6afe939eba7948707242f5.svg",
          links: []
        }),
        v = a => ({
          site: "episodesfromlibertycity",
          appearancePaths: {
            [i.C.www]: [{
              path: "/games/episodesfromlibertycity/*",
              options: {}
            }]
          },
          brand: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/6a7dfd2058127cb6f5adca6c9b1d91cc.png",
          cta: {
            dataTestId: "gtaiveflcPurchaseLink",
            ga: "cta_buy",
            location: {
              domain: "https://store.rockstargames.com",
              path: "/game/buy-grand-theft-auto-iv"
            },
            text: a.formatMessage(l.nav_gtaiveflc_cta_buy_now),
            gaText: l.nav_gtaiveflc_cta_buy_now.defaultMessage
          },
          links: [{
            text: a.formatMessage(l.nav_gtaiv_overview),
            gaText: l.nav_gtaiv_overview.defaultMessage,
            type: "nav-internal",
            dataTestId: "gtaiveflcLink",
            location: {
              domain: i.C.www,
              path: "/games/episodesfromlibertycity"
            }
          }, {
            text: a.formatMessage(l.nav_gtaiv_accomplishments),
            gaText: l.nav_gtaiv_accomplishments.defaultMessage,
            type: "nav-internal",
            dataTestId: "gtaiveflcButton",
            location: {
              domain: i.C.socialClub,
              path: "/games/gtaiv"
            }
          }, {
            text: a.formatMessage(l.nav_gtaiv_support),
            gaText: l.nav_gtaiv_support.defaultMessage,
            type: "nav-external",
            dataTestId: "gtaiveflcSupportLink",
            target: "_blank",
            location: {
              domain: i.C.support,
              path: "/categories/115001614848"
            }
          }]
        }),
        w = () => ({
          site: "libertycitystories",
          appearancePaths: {
            [i.C.www]: [{
              path: "/games/libertycitystories/*",
              options: {}
            }]
          },
          brand: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/0e39e530c8e7a5b1a3243edeaaf0b223.svg",
          links: []
        }),
        y = () => ({
          site: "gtalondon",
          appearancePaths: {
            [i.C.www]: [{
              path: "/games/gtalondon/*",
              options: {}
            }]
          },
          brand: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/6177d74645c9cd4e1bad75e86cadd1f8.png",
          links: []
        }),
        x = a => ({
          appearancePaths: {
            [i.C.www]: [{
              path: "/gta-online/*",
              options: {}
            }],
            [i.C.socialClub]: [{
              path: "/members*",
              options: {
                isSearchPage: !0
              }
            }, {
              path: "/member/:username/crews*",
              options: {}
            }, {
              path: "/crews*",
              options: {
                isSearchPage: !0
              }
            }, {
              path: "/crew*",
              options: {}
            }, {
              path: "/jobs*",
              options: {
                isSearchPage: !0,
                queryParams: {
                  title: "gtav"
                }
              }
            }, {
              path: "*/jobs*",
              options: {}
            }, {
              path: "/photos*",
              options: {
                isSearchPage: !0,
                queryParams: {
                  title: "gtav"
                }
              }
            }, {
              path: "/emblems*",
              options: {}
            }, {
              path: "/games/gtav/:platform/career/overview/gtaonline*",
              options: {}
            }]
          },
          brand: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/9d2753ceddb2213d956d51d369985513.svg",
          cta: {
            dataTestId: "gtaoPurchaseLink",
            ga: "cta_buy",
            location: {
              domain: i.C.www,
              path: "/gta-online?info=order"
            },
            text: a.formatMessage(l.nav_gtao_cta_buy_now),
            gaText: l.nav_gtao_cta_buy_now.defaultMessage
          },
          links: [{
            dataTestId: "gtaoGtaVLink",
            location: {
              domain: i.C.www,
              path: "/gta-v"
            },
            text: a.formatMessage(l.nav_gtao_overview),
            gaText: l.nav_gtao_overview.defaultMessage,
            type: "nav-internal"
          }, {
            children: [{
              dataTestId: "gtaoOnlineLink",
              location: {
                domain: i.C.www,
                path: "/gta-online"
              },
              text: a.formatMessage(l.nav_gtao_discover),
              gaText: l.nav_gtao_discover.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "gtaoCareerProgressButton",
              location: {
                domain: i.C.www,
                path: "/gta-online/career-progress"
              },
              text: a.formatMessage(l.nav_gtao_career_progress),
              gaText: l.nav_gtao_career_progress.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "gtaoOverviewButton",
              isLegacy: !0,
              location: {
                domain: i.C.socialClub,
                path: "/games/gtav/career/overview/gtaonline"
              },
              text: a.formatMessage(l.nav_gtao_my_character),
              gaText: l.nav_gtao_my_character.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "gtaoJobsLink",
              location: {
                domain: i.C.socialClub,
                path: "/jobs/?dateRangeCreated=any&filter=community&sort=date&title=gtav"
              },
              text: a.formatMessage(l.nav_gtao_jobs),
              gaText: l.nav_gtao_jobs.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "gtaoGuidesLink",
              location: {
                domain: i.C.www,
                path: "/gta-online/guides"
              },
              text: a.formatMessage(l.nav_gtao_guides),
              gaText: l.nav_gtao_guides.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "gtaoLicensePlateLink",
              location: {
                domain: i.C.www,
                path: "/gta-online/license-plates"
              },
              text: a.formatMessage(l.nav_gtao_license_plate_creator),
              gaText: l.nav_gtao_license_plate_creator.defaultMessage,
              type: "nav-internal"
            }],
            dataTestId: "gtaoDropdown",
            text: a.formatMessage(l.nav_gtao_gtao),
            gaText: l.nav_gtao_gtao.defaultMessage,
            type: "nav-dropdown"
          }, {
            children: [{
              dataTestId: "gtaoCareerButton",
              isLegacy: !0,
              location: {
                domain: i.C.socialClub,
                path: "/games/gtav/career/overview/"
              },
              text: a.formatMessage(l.nav_gtao_stats),
              gaText: l.nav_gtao_stats.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "gtaoMissionsButton",
              isLegacy: !0,
              location: {
                domain: i.C.socialClub,
                path: "/games/gtav/career/missions/"
              },
              text: a.formatMessage(l.nav_gtao_missions),
              gaText: l.nav_gtao_missions.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "gtaoChecklistButton",
              isLegacy: !0,
              location: {
                domain: i.C.socialClub,
                path: "/games/gtav/career/checklist"
              },
              text: a.formatMessage(l.nav_gtao_checklist),
              gaText: l.nav_gtao_checklist.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "gtaoSpAccomplishmentsButton",
              isLegacy: !0,
              location: {
                domain: i.C.socialClub,
                path: "/games/gtav/career/accomplishments"
              },
              text: a.formatMessage(l.nav_gtao_accomplishments),
              gaText: l.nav_gtao_accomplishments.defaultMessage,
              type: "nav-internal"
            }],
            dataTestId: "gtaoStoryDropdown",
            text: a.formatMessage(l.nav_gtao_story),
            gaText: l.nav_gtao_story.defaultMessage,
            type: "nav-dropdown"
          }, {
            dataTestId: "gtaoGtaV+Link",
            location: {
              domain: i.C.www,
              path: "/gta-plus",
              additionalPathMatches: "/gta-plus/*"
            },
            text: a.formatMessage(l.nav_gtao_gta_plus),
            gaText: l.nav_gtao_gta_plus.defaultMessage,
            type: "nav-internal"
          }, {
            children: [{
              dataTestId: "gtaoJobsDropdown",
              children: [{
                text: a.formatMessage(l.nav_gtao_jobs_browse_all),
                gaText: l.nav_gtao_jobs_browse_all.defaultMessage,
                isLegacy: !0,
                type: "nav-internal",
                dataTestId: "gtaoViewAllJobsButton",
                location: {
                  domain: i.C.socialClub,
                  path: "/jobs/?dateRangeCreated=last7&sort=likes&title=gtav"
                }
              }, {
                text: a.formatMessage(l.nav_gtao_community_series),
                gaText: l.nav_gtao_community_series.defaultMessage,
                location: {
                  domain: i.C.socialClub,
                  path: "/jobs/?dateRangeCreated=any&filter=community&sort=date&title=gtav"
                },
                type: "nav-internal",
                dataTestId: "gtaoCommunitySeriesLink"
              }, {
                text: a.formatMessage(l.nav_gtao_my_jobs),
                gaText: l.nav_gtao_my_jobs.defaultMessage,
                isLegacy: !0,
                type: "nav-internal",
                dataTestId: "gtaoMyJobsButton",
                requiresAuth: !0,
                location: {
                  domain: i.C.socialClub,
                  path: "/jobs/?dateRangeCreated=any&filter=me&sort=likes&title=gtav"
                }
              }, {
                text: a.formatMessage(l.nav_gtao_jobs_playlists),
                gaText: l.nav_gtao_jobs_playlists.defaultMessage,
                isLegacy: !0,
                type: "nav-internal",
                dataTestId: "gtaoChecklistButton",
                location: {
                  domain: i.C.socialClub,
                  path: "/games/gtav/playlists"
                }
              }],
              text: a.formatMessage(l.nav_gtao_jobs),
              gaText: l.nav_gtao_jobs.defaultMessage,
              type: "nav-dropdown"
            }, {
              dataTestId: "gtaoCrewsDropdown",
              children: [{
                text: a.formatMessage(l.nav_gtao_browse_crews),
                gaText: l.nav_gtao_browse_crews.defaultMessage,
                isLegacy: !0,
                type: "nav-internal",
                dataTestId: "gtaoViewAllCrewButton",
                location: {
                  domain: i.C.socialClub,
                  path: "/crews"
                }
              }, {
                text: a.formatMessage(l.nav_gtao_my_crews),
                gaText: l.nav_gtao_my_crews.defaultMessage,
                dataTestId: "gtaoMyCrewsButton",
                type: "nav-internal",
                location: {
                  domain: i.C.socialClub,
                  path: "/member/{username}/crews"
                },
                requiresAuth: !0
              }, {
                text: a.formatMessage(l.nav_gtao_crews_create),
                gaText: l.nav_gtao_crews_create.defaultMessage,
                dataTestId: "gtaoCreateCrewButton",
                type: "nav-internal",
                location: {
                  domain: i.C.socialClub,
                  path: "/crews/create"
                }
              }, {
                text: a.formatMessage(l.nav_gtao_emblem_editor),
                gaText: l.nav_gtao_emblem_editor.defaultMessage,
                dataTestId: "gtaoCreateEmblemButton",
                type: "nav-internal",
                location: {
                  domain: i.C.socialClub,
                  path: "/emblems"
                }
              }],
              text: a.formatMessage(l.nav_gtao_crews),
              gaText: l.nav_gtao_crews.defaultMessage,
              type: "nav-dropdown"
            }, {
              dataTestId: "gtaoPhotosButton",
              location: {
                domain: i.C.socialClub,
                path: "/photos/?dateRange=any&title=gtav"
              },
              text: a.formatMessage(l.nav_gtao_photos),
              gaText: l.nav_gtao_photos.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "gtaCommunityGuidelinesButton",
              location: {
                domain: i.C.www,
                path: "/community-guidelines"
              },
              text: a.formatMessage(l.nav_rsg_community_guidelines),
              gaText: l.nav_rsg_community_guidelines.defaultMessage,
              type: "nav-internal"
            }],
            dataTestId: "gtaoCommunityDropdown",
            text: a.formatMessage(l.nav_gtao_community),
            gaText: l.nav_gtao_community.defaultMessage,
            type: "nav-dropdown"
          }, {
            dataTestId: "gtaoSupportLink",
            location: {
              domain: i.C.support,
              path: "/categories/200013306"
            },
            target: "_blank",
            text: a.formatMessage(l.nav_gtao_support),
            gaText: l.nav_gtao_support.defaultMessage,
            type: "nav-external"
          }],
          site: "gta-online"
        }),
        _ = a => ({
          appearancePaths: {
            [i.C.www]: [{
              path: "/gta-plus/*",
              options: {}
            }]
          },
          brand: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/fc25f8fbec3c2644cf5cfd072937df26.svg",
          cta: {
            dataTestId: "gtaoPurchaseLink",
            ga: "cta_buy",
            location: {
              domain: i.C.www,
              path: "/gta-online?info=order"
            },
            text: a.formatMessage(l.nav_gtao_cta_buy_now),
            gaText: l.nav_gtao_cta_buy_now.defaultMessage
          },
          links: [{
            dataTestId: "gtaoGtaVLink",
            location: {
              domain: i.C.www,
              path: "/gta-v"
            },
            text: a.formatMessage(l.nav_gtao_overview),
            gaText: l.nav_gtao_overview.defaultMessage,
            type: "nav-internal"
          }, {
            children: [{
              dataTestId: "gtaoOnlineLink",
              location: {
                domain: i.C.www,
                path: "/gta-online"
              },
              text: a.formatMessage(l.nav_gtao_discover),
              gaText: l.nav_gtao_discover.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "gtaoCareerProgressButton",
              location: {
                domain: i.C.www,
                path: "/gta-online/career-progress"
              },
              text: a.formatMessage(l.nav_gtao_career_progress),
              gaText: l.nav_gtao_career_progress.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "gtaoOverviewButton",
              isLegacy: !0,
              location: {
                domain: i.C.socialClub,
                path: "/games/gtav/career/overview/gtaonline"
              },
              text: a.formatMessage(l.nav_gtao_my_character),
              gaText: l.nav_gtao_my_character.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "gtaoJobsLink",
              location: {
                domain: i.C.socialClub,
                path: "/jobs/?dateRangeCreated=any&filter=community&sort=date&title=gtav"
              },
              text: a.formatMessage(l.nav_gtao_jobs),
              gaText: l.nav_gtao_jobs.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "gtaoGuidesLink",
              location: {
                domain: i.C.www,
                path: "/gta-online/guides"
              },
              text: a.formatMessage(l.nav_gtao_guides),
              gaText: l.nav_gtao_guides.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "gtaoLicensePlateLink",
              location: {
                domain: i.C.www,
                path: "/gta-online/license-plates"
              },
              text: a.formatMessage(l.nav_gtao_license_plate_creator),
              gaText: l.nav_gtao_license_plate_creator.defaultMessage,
              type: "nav-internal"
            }],
            dataTestId: "gtaoDropdown",
            text: a.formatMessage(l.nav_gtao_gtao),
            gaText: l.nav_gtao_gtao.defaultMessage,
            type: "nav-dropdown"
          }, {
            children: [{
              dataTestId: "gtaoCareerButton",
              isLegacy: !0,
              location: {
                domain: i.C.socialClub,
                path: "/games/gtav/career/overview/"
              },
              text: a.formatMessage(l.nav_gtao_stats),
              gaText: l.nav_gtao_stats.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "gtaoMissionsButton",
              isLegacy: !0,
              location: {
                domain: i.C.socialClub,
                path: "/games/gtav/career/missions/"
              },
              text: a.formatMessage(l.nav_gtao_missions),
              gaText: l.nav_gtao_missions.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "gtaoChecklistButton",
              isLegacy: !0,
              location: {
                domain: i.C.socialClub,
                path: "/games/gtav/career/checklist"
              },
              text: a.formatMessage(l.nav_gtao_checklist),
              gaText: l.nav_gtao_checklist.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "gtaoAccomplishmentsButton",
              isLegacy: !0,
              location: {
                domain: i.C.socialClub,
                path: "/games/gtav/career/accomplishments"
              },
              text: a.formatMessage(l.nav_gtao_accomplishments),
              gaText: l.nav_gtao_accomplishments.defaultMessage,
              type: "nav-internal"
            }],
            dataTestId: "gtaoStoryDropdown",
            text: a.formatMessage(l.nav_gtao_story),
            gaText: l.nav_gtao_story.defaultMessage,
            type: "nav-dropdown"
          }, {
            dataTestId: "gtaoGtaV+Link",
            location: {
              domain: i.C.www,
              path: "/gta-plus",
              additionalPathMatches: "/gta-plus/*"
            },
            text: a.formatMessage(l.nav_gtao_gta_plus),
            gaText: l.nav_gtao_gta_plus.defaultMessage,
            type: "nav-internal"
          }, {
            children: [{
              dataTestId: "gtaoJobsDropdown",
              children: [{
                text: a.formatMessage(l.nav_gtao_jobs_browse_all),
                gaText: l.nav_gtao_jobs_browse_all.defaultMessage,
                isLegacy: !0,
                type: "nav-internal",
                dataTestId: "gtaoViewAllJobsButton",
                location: {
                  domain: i.C.socialClub,
                  path: "/jobs/?dateRangeCreated=last7&sort=likes&title=gtav"
                }
              }, {
                text: a.formatMessage(l.nav_gtao_community_series),
                gaText: l.nav_gtao_community_series.defaultMessage,
                location: {
                  domain: i.C.socialClub,
                  path: "/jobs/?dateRangeCreated=any&filter=community&sort=date&title=gtav"
                },
                type: "nav-internal",
                dataTestId: "gtaoCommunitySeriesLink"
              }, {
                text: a.formatMessage(l.nav_gtao_my_jobs),
                gaText: l.nav_gtao_my_jobs.defaultMessage,
                isLegacy: !0,
                type: "nav-internal",
                dataTestId: "gtaoMyJobsButton",
                location: {
                  domain: i.C.socialClub,
                  path: "/jobs/?dateRangeCreated=any&filter=me&sort=likes&title=gtav"
                }
              }, {
                text: a.formatMessage(l.nav_gtao_jobs_playlists),
                gaText: l.nav_gtao_jobs_playlists.defaultMessage,
                isLegacy: !0,
                type: "nav-internal",
                dataTestId: "gtaoChecklistButton",
                location: {
                  domain: i.C.socialClub,
                  path: "/games/gtav/playlists"
                }
              }],
              text: a.formatMessage(l.nav_gtao_jobs),
              gaText: l.nav_gtao_jobs.defaultMessage,
              type: "nav-dropdown"
            }, {
              dataTestId: "gtaoCrewsDropdown",
              children: [{
                text: a.formatMessage(l.nav_gtao_browse_crews),
                gaText: l.nav_gtao_browse_crews.defaultMessage,
                isLegacy: !0,
                type: "nav-internal",
                dataTestId: "gtaoViewAllCrewButton",
                location: {
                  domain: i.C.socialClub,
                  path: "/crews"
                }
              }, {
                text: a.formatMessage(l.nav_gtao_my_crews),
                gaText: l.nav_gtao_my_crews.defaultMessage,
                dataTestId: "gtaoMyCrewsButton",
                type: "nav-internal",
                location: {
                  domain: i.C.socialClub,
                  path: "/member/{username}/crews"
                },
                requiresAuth: !0
              }, {
                text: a.formatMessage(l.nav_gtao_crews_create),
                gaText: l.nav_gtao_crews_create.defaultMessage,
                dataTestId: "gtaoCreateCrewButton",
                type: "nav-internal",
                location: {
                  domain: i.C.socialClub,
                  path: "/crews/create"
                }
              }, {
                text: a.formatMessage(l.nav_gtao_emblem_editor),
                gaText: l.nav_gtao_emblem_editor.defaultMessage,
                dataTestId: "gtaoCreateEmblemButton",
                type: "nav-internal",
                location: {
                  domain: i.C.socialClub,
                  path: "/emblems/new"
                }
              }],
              text: a.formatMessage(l.nav_gtao_crews),
              gaText: l.nav_gtao_crews.defaultMessage,
              type: "nav-dropdown"
            }, {
              dataTestId: "gtaoPhotosButton",
              location: {
                domain: i.C.socialClub,
                path: "/photos/?dateRange=any&title=gtav"
              },
              text: a.formatMessage(l.nav_gtao_photos),
              gaText: l.nav_gtao_photos.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "gtaCommunityGuidelinesButton",
              location: {
                domain: i.C.www,
                path: "/community-guidelines"
              },
              text: a.formatMessage(l.nav_rsg_community_guidelines),
              gaText: l.nav_rsg_community_guidelines.defaultMessage,
              type: "nav-internal"
            }],
            dataTestId: "gtaoCommunityDropdown",
            text: a.formatMessage(l.nav_gtao_community),
            gaText: l.nav_gtao_community.defaultMessage,
            type: "nav-dropdown"
          }, {
            dataTestId: "gtaoSupportLink",
            location: {
              domain: i.C.support,
              path: "/categories/200013306"
            },
            target: "_blank",
            text: a.formatMessage(l.nav_gtao_support),
            gaText: l.nav_gtao_support.defaultMessage,
            type: "nav-external"
          }],
          site: "gta-plus"
        }),
        k = a => ({
          site: "sanandreas",
          appearancePaths: {
            [i.C.www]: [{
              path: "/games/sanandreas/*",
              options: {}
            }]
          },
          brand: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/854bac2f4c6c23fb7ca33f9407ac3c0d.svg",
          links: [],
          cta: {
            text: a.formatMessage(l.nav_gtasanandreas_cta_buy_now),
            gaText: l.nav_gtasanandreas_cta_buy_now.defaultMessage,
            variant: "highlight",
            target: "_blank",
            location: {
              domain: i.C.store,
              path: "/game/buy-grand-theft-auto-the-trilogy-the-definitive-edition"
            },
            ga: "cta_buy",
            dataTestId: "gtaSanAndreasPurchaseLink"
          }
        }),
        B = a => ({
          site: "gta-trilogy",
          appearancePaths: {
            [i.C.www]: [{
              path: "/GTATrilogy/*",
              options: {}
            }],
            [i.C.socialClub]: [{
              path: "/games/gtasa($|/*)",
              options: {}
            }, {
              path: "/member/*/games/gtasa/*",
              options: {}
            }, {
              path: "/games/gtavc($|/*)",
              options: {}
            }, {
              path: "/member/*/games/gtavc/*",
              options: {}
            }, {
              path: "/games/gta3($|/*)",
              options: {}
            }, {
              path: "/member/*/games/gta3/*",
              options: {}
            }]
          },
          brand: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/7ccc721c72fc5553108c7e70b0778dba.svg",
          links: [{
            text: a.formatMessage(l.nav_gta_trilogy_overview),
            gaText: l.nav_gta_trilogy_overview.defaultMessage,
            type: "nav-internal",
            dataTestId: "gtaTrilogyLink",
            location: {
              domain: i.C.www,
              path: "/GTATrilogy"
            }
          }, {
            text: a.formatMessage(l.nav_gta_trilogy_accomplishments),
            gaText: l.nav_gta_trilogy_accomplishments.defaultMessage,
            type: "nav-dropdown",
            dataTestId: "gtaTrilogyAchievementsDropdown",
            children: [{
              text: a.formatMessage(l.nav_gta_trilogy_gtasa),
              gaText: l.nav_gta_trilogy_gtasa.defaultMessage,
              type: "nav-internal",
              dataTestId: "gtaTrilogyGtaSaButton",
              location: {
                domain: i.C.socialClub,
                path: "/games/gtasa"
              }
            }, {
              text: a.formatMessage(l.nav_gta_trilogy_gtavc),
              gaText: l.nav_gta_trilogy_gtavc.defaultMessage,
              type: "nav-internal",
              dataTestId: "gtaTrilogyGtaVcLink",
              location: {
                domain: i.C.socialClub,
                path: "/games/gtavc"
              }
            }, {
              text: a.formatMessage(l.nav_gta_trilogy_gta3),
              gaText: l.nav_gta_trilogy_gta3.defaultMessage,
              type: "nav-internal",
              dataTestId: "gta3TrilogyLink",
              location: {
                domain: i.C.socialClub,
                path: "/games/gta3"
              }
            }]
          }, {
            text: a.formatMessage(l.nav_gta_trilogy_support),
            gaText: l.nav_gta_trilogy_support.defaultMessage,
            dataTestId: "gtaTrilogySupportDropdown",
            type: "nav-dropdown",
            children: [{
              text: a.formatMessage(l.nav_gta_trilogy_gtasa),
              gaText: l.nav_gta_trilogy_gtasa.defaultMessage,
              type: "nav-external",
              dataTestId: "gtaSaSupportLink",
              target: "_blank",
              location: {
                domain: i.C.support,
                path: "/categories/115001620287"
              }
            }, {
              text: a.formatMessage(l.nav_gta_trilogy_gtavc),
              gaText: l.nav_gta_trilogy_gtavc.defaultMessage,
              type: "nav-external",
              dataTestId: "gtaVcTrilogySupportLink",
              target: "_blank",
              location: {
                domain: i.C.support,
                path: "/categories/115001619868"
              }
            }, {
              text: a.formatMessage(l.nav_gta_trilogy_gta3),
              gaText: l.nav_gta_trilogy_gta3.defaultMessage,
              type: "nav-external",
              dataTestId: "gta3TrilogySupportLink",
              target: "_blank",
              location: {
                domain: i.C.support,
                path: "/categories/115001619948"
              }
            }]
          }],
          cta: {
            text: a.formatMessage(l.nav_gta_trilogy_cta_buy_now),
            gaText: l.nav_gta_trilogy_cta_buy_now.defaultMessage,
            dataTestId: "gtaTrilogyPurchaseLink",
            target: "_blank",
            location: {
              domain: i.C.store,
              path: "/game/buy-grand-theft-auto-the-trilogy-the-definitive-edition"
            },
            ga: "cta_buy"
          }
        }),
        I = a => ({
          site: "vicecity",
          appearancePaths: {
            [i.C.www]: [{
              path: "/games/vicecity/*",
              options: {}
            }]
          },
          brand: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/9333c000d509d8c82858967b42ff46f8.svg",
          links: [],
          cta: {
            text: a.formatMessage(l.nav_gtavc_cta_buy_now),
            gaText: l.nav_gtavc_cta_buy_now.defaultMessage,
            variant: "highlight",
            dataTestId: "gtaVcBuyNowLink",
            target: "_blank",
            location: {
              domain: i.C.store,
              path: "/game/buy-grand-theft-auto-the-trilogy-the-definitive-edition"
            },
            ga: "cta_buy"
          }
        }),
        M = () => ({
          site: "vicecitystories",
          appearancePaths: {
            [i.C.www]: [{
              path: "/games/vicecitystories/*",
              options: {}
            }]
          },
          brand: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a73128cb6201d9d830f2ac4802ad6c2f.svg",
          links: []
        }),
        S = a => ({
          site: "la-noire",
          appearancePaths: {
            [i.C.www]: [{
              path: "/lanoire/*",
              options: {}
            }, {
              path: "/games/lanoire/*",
              options: {}
            }],
            [i.C.socialClub]: [{
              path: "/games/lanvr/*",
              options: {}
            }, {
              path: "/member/*/games/lanvr/*",
              options: {}
            }, {
              path: "/games/lan/*",
              options: {}
            }, {
              path: "/member/*/games/lan/*",
              options: {}
            }]
          },
          brand: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/63c149607e42c3f7a8988ef21d53ec97.svg",
          links: [{
            text: a.formatMessage(l.nav_lanoire_overview),
            gaText: l.nav_lanoire_overview.defaultMessage,
            type: "nav-internal",
            dataTestId: "lanoireLink",
            location: {
              domain: i.C.www,
              path: "/games/lanoire"
            }
          }, {
            text: a.formatMessage(l.nav_lanoire_progress),
            gaText: l.nav_lanoire_progress.defaultMessage,
            dataTestId: "lanoireProgressDropdown",
            type: "nav-dropdown",
            children: [{
              text: a.formatMessage(l.nav_lanoire_pc_console),
              gaText: l.nav_lanoire_pc_console.defaultMessage,
              dataTestId: "lanoirePcNGDropdown",
              type: "nav-dropdown",
              children: [{
                text: a.formatMessage(l.nav_lanoire_case_tracker),
                gaText: l.nav_lanoire_case_tracker.defaultMessage,
                type: "nav-internal",
                dataTestId: "lanoireCaseTrackerButton",
                isLegacy: !0,
                location: {
                  domain: i.C.socialClub,
                  path: "/games/lan/casetracker"
                }
              }, {
                text: a.formatMessage(l.nav_lanoire_checklist),
                gaText: l.nav_lanoire_checklist.defaultMessage,
                type: "nav-internal",
                dataTestId: "lanoireChecklistButton",
                isLegacy: !0,
                location: {
                  domain: i.C.socialClub,
                  path: "/games/lan/checklist"
                }
              }, {
                text: a.formatMessage(l.nav_lanoire_stats),
                gaText: l.nav_lanoire_stats.defaultMessage,
                type: "nav-internal",
                dataTestId: "lanoireStatsButton",
                isLegacy: !0,
                location: {
                  domain: i.C.socialClub,
                  path: "/games/lan/stats"
                }
              }, {
                text: a.formatMessage(l.nav_lanoire_accomplishments),
                gaText: l.nav_lanoire_accomplishments.defaultMessage,
                type: "nav-internal",
                dataTestId: "lanoireAchievementsLink",
                location: {
                  domain: i.C.socialClub,
                  path: "/games/lan/pc/achievements"
                }
              }, {
                text: a.formatMessage(l.nav_lanoire_badge_pursuit),
                gaText: l.nav_lanoire_badge_pursuit.defaultMessage,
                type: "nav-internal",
                dataTestId: "lanoireBadgeButton",
                isLegacy: !0,
                location: {
                  domain: i.C.socialClub,
                  path: "/games/lan/badgepursuit"
                }
              }]
            }, {
              text: a.formatMessage(l.nav_lanoire_vr_case_files),
              gaText: l.nav_lanoire_vr_case_files.defaultMessage,
              type: "nav-dropdown",
              dataTestId: "lanoireVrDropdown",
              children: [{
                text: a.formatMessage(l.nav_lanoire_stats),
                gaText: l.nav_lanoire_stats.defaultMessage,
                type: "nav-internal",
                dataTestId: "lanoireVrStatsButton",
                isLegacy: !0,
                location: {
                  domain: i.C.socialClub,
                  path: "/games/lanvr/stats"
                }
              }, {
                text: a.formatMessage(l.nav_lanoire_accomplishments),
                gaText: l.nav_lanoire_accomplishments.defaultMessage,
                type: "nav-internal",
                dataTestId: "lanoireAchievementsButton",
                location: {
                  domain: i.C.socialClub,
                  path: "/games/lanvr/achievements?platFormId=8"
                }
              }]
            }]
          }, {
            text: a.formatMessage(l.nav_lanoire_support),
            gaText: l.nav_lanoire_support.defaultMessage,
            type: "nav-external",
            dataTestId: "lanoireSupportLink",
            target: "_blank",
            location: {
              domain: i.C.support,
              path: "/categories/200013186"
            }
          }],
          cta: {
            text: a.formatMessage(l.nav_lanoire_cta_buy_now),
            gaText: l.nav_lanoire_cta_buy_now.defaultMessage,
            dataTestId: "lanoirePurchaseLink",
            location: {
              domain: i.C.store,
              path: "/game/buy-la-noire"
            },
            ga: "cta_buy"
          }
        }),
        z = () => ({
          site: "manhunt",
          appearancePaths: {
            [i.C.www]: [{
              path: "/games/manhunt/*",
              options: {}
            }]
          },
          brand: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/36e8ec97940586d12e63320c75c99d03.svg",
          links: []
        }),
        R = () => ({
          site: "manhunt2",
          appearancePaths: {
            [i.C.www]: [{
              path: "/games/manhunt2/*",
              options: {}
            }]
          },
          brand: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/ceb3dacaa63b2f3036670bbf7e677dc2.png",
          links: []
        }),
        D = () => ({
          site: "maxpayne",
          appearancePaths: {
            [i.C.www]: [{
              path: "/games/maxpayne/*",
              options: {}
            }]
          },
          brand: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d866f8e4ea468c7ad8fb5d301228c1b2.svg",
          links: []
        }),
        N = () => ({
          site: "maxpayne2",
          appearancePaths: {
            [i.C.www]: [{
              path: "/games/maxpayne2/*",
              options: {}
            }]
          },
          brand: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c3f251fe931f3533cb980bbc23e599b8.svg",
          links: []
        }),
        T = a => ({
          site: "maxpayne3",
          appearancePaths: {
            [i.C.www]: [{
              path: "/games/maxpayne3/*",
              options: {}
            }],
            [i.C.socialClub]: [{
              path: "/games/maxpayne3*",
              options: {}
            }, {
              path: "/member/*/games/maxpayne3*",
              options: {}
            }]
          },
          brand: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/ba94346e4b206acc56976b59974bffbe.png",
          links: [{
            text: a.formatMessage(l.nav_mp3_overview),
            gaText: l.nav_mp3_overview.defaultMessage,
            type: "nav-internal",
            dataTestId: "mp3Link",
            location: {
              domain: i.C.www,
              path: "/games/maxpayne3"
            }
          }, {
            text: a.formatMessage(l.nav_mp3_progress),
            gaText: l.nav_mp3_progress.defaultMessage,
            type: "nav-dropdown",
            dataTestId: "mp3ProgressDropdown",
            children: [{
              text: a.formatMessage(l.nav_mp3_accomplishments),
              gaText: l.nav_mp3_accomplishments.defaultMessage,
              type: "nav-internal",
              dataTestId: "mp3AchievementsLink",
              location: {
                domain: i.C.socialClub,
                path: "/games/maxpayne3/accomplishments"
              }
            }, {
              text: a.formatMessage(l.nav_mp3_singleplayer),
              gaText: l.nav_mp3_singleplayer.defaultMessage,
              type: "nav-dropdown",
              dataTestId: "mp3SpDropdown",
              children: [{
                text: a.formatMessage(l.nav_mp3_career),
                gaText: l.nav_mp3_career.defaultMessage,
                type: "nav-internal",
                dataTestId: "mp3CareerButton",
                isLegacy: !0,
                location: {
                  domain: i.C.socialClub,
                  path: "/games/maxpayne3/sp/career"
                }
              }, {
                text: a.formatMessage(l.nav_mp3_checklist),
                gaText: l.nav_mp3_checklist.defaultMessage,
                type: "nav-internal",
                dataTestId: "mp3ChecklistButton",
                isLegacy: !0,
                location: {
                  domain: i.C.socialClub,
                  path: "/games/maxpayne3/sp/checklist"
                }
              }, {
                text: a.formatMessage(l.nav_mp3_grinds),
                gaText: l.nav_mp3_grinds.defaultMessage,
                type: "nav-internal",
                dataTestId: "mp3GrindsButton",
                isLegacy: !0,
                location: {
                  domain: i.C.socialClub,
                  path: "/games/maxpayne3/sp/grinds"
                }
              }, {
                text: a.formatMessage(l.nav_mp3_chapters),
                gaText: l.nav_mp3_chapters.defaultMessage,
                type: "nav-internal",
                dataTestId: "mp3ChaptersLink",
                isLegacy: !0,
                location: {
                  domain: i.C.socialClub,
                  path: "/games/maxpayne3/sp/chapters"
                }
              }, {
                text: a.formatMessage(l.nav_mp3_weapons),
                gaText: l.nav_mp3_weapons.defaultMessage,
                type: "nav-internal",
                dataTestId: "mp3WeaponsButton",
                isLegacy: !0,
                location: {
                  domain: i.C.socialClub,
                  path: "/games/maxpayne3/sp/weapons"
                }
              }, {
                text: a.formatMessage(l.nav_mp3_leaderboards),
                gaText: l.nav_mp3_leaderboards.defaultMessage,
                type: "nav-internal",
                dataTestId: "mp3LeaderBoardButton",
                isLegacy: !0,
                location: {
                  domain: i.C.socialClub,
                  path: "/games/maxpayne3/sp/leaderboards"
                }
              }]
            }, {
              text: a.formatMessage(l.nav_mp3_multiplayer),
              gaText: l.nav_mp3_multiplayer.defaultMessage,
              type: "nav-dropdown",
              dataTestId: "mp3MpDropdown",
              children: [{
                text: a.formatMessage(l.nav_mp3_career),
                gaText: l.nav_mp3_career.defaultMessage,
                type: "nav-internal",
                dataTestId: "mp3MpCareerButton",
                isLegacy: !0,
                location: {
                  domain: i.C.socialClub,
                  path: "/games/maxpayne3/mp/career"
                }
              }, {
                text: a.formatMessage(l.nav_mp3_grinds),
                gaText: l.nav_mp3_grinds.defaultMessage,
                type: "nav-internal",
                dataTestId: "mp3MpGrindsButton",
                isLegacy: !0,
                location: {
                  domain: i.C.socialClub,
                  path: "/games/maxpayne3/mp/grinds"
                }
              }, {
                text: a.formatMessage(l.nav_mp3_weapons),
                gaText: l.nav_mp3_weapons.defaultMessage,
                type: "nav-internal",
                dataTestId: "mp3MpWeaponsButton",
                isLegacy: !0,
                location: {
                  domain: i.C.socialClub,
                  path: "/games/maxpayne3/mp/weapons"
                }
              }, {
                text: a.formatMessage(l.nav_mp3_leaderboards),
                gaText: l.nav_mp3_leaderboards.defaultMessage,
                type: "nav-internal",
                dataTestId: "mp3MpLeaderBoardsButton",
                isLegacy: !0,
                location: {
                  domain: i.C.socialClub,
                  path: "/games/maxpayne3/mp/leaderboards"
                }
              }]
            }, {
              text: a.formatMessage(l.nav_mp3_crews),
              gaText: l.nav_mp3_crews.defaultMessage,
              type: "nav-dropdown",
              dataTestId: "mp3CrewsDropdown",
              children: [{
                text: a.formatMessage(l.nav_mp3_multiplayer),
                gaText: l.nav_mp3_multiplayer.defaultMessage,
                type: "nav-internal",
                dataTestId: "mp3CrewOverallLeaderBoardButton",
                isLegacy: !0,
                location: {
                  domain: i.C.socialClub,
                  path: "/games/maxpayne3/crews/multiplayer/1-/Overall"
                }
              }, {
                text: a.formatMessage(l.nav_mp3_score_attack),
                gaText: l.nav_mp3_score_attack.defaultMessage,
                type: "nav-internal",
                dataTestId: "mp3CrewScoreAttackLeaderBoardButton",
                isLegacy: !0,
                location: {
                  domain: i.C.socialClub,
                  path: "/games/maxpayne3/crews/scoreattack"
                }
              }, {
                text: a.formatMessage(l.nav_mp3_ny_minute),
                gaText: l.nav_mp3_ny_minute.defaultMessage,
                type: "nav-internal",
                dataTestId: "mp3CrewNyMinuteLeaderBoardButton",
                isLegacy: !0,
                location: {
                  domain: i.C.socialClub,
                  path: "/games/maxpayne3/crews/nyminute"
                }
              }, {
                text: a.formatMessage(l.nav_mp3_checkpoint_challenge),
                gaText: l.nav_mp3_checkpoint_challenge.defaultMessage,
                type: "nav-internal",
                dataTestId: "mp3CrewCpcLeaderBoardButton",
                isLegacy: !0,
                location: {
                  domain: i.C.socialClub,
                  path: "/games/maxpayne3/crews/cpc"
                }
              }, {
                text: a.formatMessage(l.nav_mp3_featured),
                gaText: l.nav_mp3_featured.defaultMessage,
                type: "nav-internal",
                dataTestId: "mp3CrewFeaturedLeaderBoardButton",
                isLegacy: !0,
                location: {
                  domain: i.C.socialClub,
                  path: "/games/maxpayne3/crews/rivalries"
                }
              }]
            }]
          }, {
            text: a.formatMessage(l.nav_mp3_support),
            gaText: l.nav_mp3_support.defaultMessage,
            type: "nav-external",
            dataTestId: "mp3SupportLink",
            target: "_blank",
            location: {
              domain: i.C.support,
              path: "/categories/200013286"
            }
          }],
          cta: {
            text: a.formatMessage(l.nav_mp3_cta_buy_now),
            gaText: l.nav_mp3_cta_buy_now.defaultMessage,
            dataTestId: "mp3PurchaseLink",
            target: "_blank",
            location: {
              domain: i.C.store,
              path: "/game/buy-max-payne-3"
            },
            ga: "cta_buy"
          }
        }),
        E = () => ({
          site: "midnightclub",
          appearancePaths: {
            [i.C.www]: [{
              path: "/games/midnightclub/*",
              options: {}
            }]
          },
          brand: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/fce5da0e35899b99c836bd73e2f7aa7a.png",
          links: []
        }),
        F = () => ({
          site: "midnightclub2",
          appearancePaths: {
            [i.C.www]: [{
              path: "/games/midnightclub2/*",
              options: {}
            }]
          },
          brand: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5aa516901becb336d1d5ddc08401e490.png",
          links: []
        }),
        L = () => ({
          site: "midnightclub3",
          appearancePaths: {
            [i.C.www]: [{
              path: "/games/midnightclub3/*",
              options: {}
            }]
          },
          brand: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a4863c27d856c6ce47b49aed738df14a.png",
          links: []
        }),
        H = a => ({
          site: "midnightclubLA",
          appearancePaths: {
            [i.C.www]: [{
              path: "/games/midnightclubLA/*",
              options: {}
            }]
          },
          brand: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/0333d6f30ad108c77944b8faf6f34c03.png",
          links: [],
          cta: {
            text: a.formatMessage(l.nav_midnightclubla_buy_now),
            gaText: l.nav_midnightclubla_buy_now.defaultMessage,
            dataTestId: "midnightClubLaBuyNowCta",
            location: {
              domain: "https://www.xbox.com",
              path: "/games/store/midnight-club-los-angeles-complete/BV6WLXGS887C"
            },
            ga: "cta_buy"
          }
        }),
        P = () => ({
          site: "oni",
          appearancePaths: {
            [i.C.www]: [{
              path: "/games/oni/*",
              options: {}
            }]
          },
          brand: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/753452f0a8e31d63b8cc1b3337ca8dd1.png",
          links: []
        }),
        j = a => ({
          appearancePaths: {
            [i.C.www]: [{
              path: "/reddeadonline/*",
              options: {}
            }],
            [i.C.socialClub]: [{
              path: "/games/rdo*",
              options: {}
            }]
          },
          brand: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1b2f9181adacf5b0713a311fb0065164.svg",
          cta: {
            dataTestId: "rdoPurchaseLink",
            ga: "cta_buy",
            location: {
              domain: i.C.store,
              path: "/game/buy-red-dead-redemption-2"
            },
            target: "_blank",
            text: a.formatMessage(l.nav_rdo_cta_buy_now),
            gaText: l.nav_rdo_cta_buy_now.defaultMessage
          },
          links: [{
            dataTestId: "rdoLink",
            location: {
              domain: i.C.www,
              path: "/reddeadonline"
            },
            text: a.formatMessage(l.nav_rdo_overview),
            gaText: l.nav_rdo_overview.defaultMessage,
            type: "nav-internal"
          }, {
            children: [{
              dataTestId: "rdoGettingStartedLink",
              location: {
                domain: i.C.www,
                path: "/reddeadonline/features/getting-started"
              },
              text: a.formatMessage(l.nav_rdo_getting_started),
              gaText: l.nav_rdo_getting_started.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "rdoRolesLink",
              location: {
                domain: i.C.www,
                path: "/reddeadonline/features/roles"
              },
              text: a.formatMessage(l.nav_rdo_specialist_roles),
              gaText: l.nav_rdo_specialist_roles.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "rdoLOOLink",
              location: {
                domain: i.C.www,
                path: "/reddeadonline/features/a-land-of-opportunities"
              },
              text: a.formatMessage(l.nav_rdo_story_missions),
              gaText: l.nav_rdo_story_missions.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "rdoPossesLink",
              location: {
                domain: i.C.www,
                path: "/reddeadonline/features/posses-and-free-roam"
              },
              text: a.formatMessage(l.nav_rdo_posses_free_roam),
              gaText: l.nav_rdo_posses_free_roam.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "rdoSAELink",
              location: {
                domain: i.C.www,
                path: "/reddeadonline/features/showdown-and-elimination"
              },
              text: a.formatMessage(l.nav_rdo_competitive_series),
              gaText: l.nav_rdo_competitive_series.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "rdoCustomizationLink",
              location: {
                domain: i.C.www,
                path: "/reddeadonline/features/customization"
              },
              text: a.formatMessage(l.nav_rdo_customization),
              gaText: l.nav_rdo_customization.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "rdoProgressLink",
              location: {
                domain: i.C.www,
                path: "/reddeadonline/features/rank-and-fortune"
              },
              text: a.formatMessage(l.nav_rdo_progression),
              gaText: l.nav_rdo_progression.defaultMessage,
              type: "nav-internal"
            }],
            dataTestId: "rdoExploreDropdown",
            text: a.formatMessage(l.nav_rdo_explore),
            gaText: l.nav_rdo_explore.defaultMessage,
            type: "nav-dropdown"
          }, {
            children: [{
              dataTestId: "rdoOverviewButton",
              location: {
                domain: i.C.socialClub,
                path: "/games/rdo/overview"
              },
              text: a.formatMessage(l.nav_rdo_my_character),
              gaText: l.nav_rdo_my_character.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "rdoRolesButton",
              location: {
                domain: i.C.socialClub,
                path: "/games/rdo/roles"
              },
              text: a.formatMessage(l.nav_rdo_roles),
              gaText: l.nav_rdo_roles.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "rdoClubRewardsButton",
              location: {
                domain: i.C.socialClub,
                path: "/games/rdo/clubrewards"
              },
              text: a.formatMessage(l.nav_rdo_club_rewards),
              gaText: l.nav_rdo_club_rewards.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "rdoRankButton",
              location: {
                domain: i.C.socialClub,
                path: "/games/rdo/rank"
              },
              text: a.formatMessage(l.nav_rdo_rank_unlocks),
              gaText: l.nav_rdo_rank_unlocks.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "rdoAwardsButton",
              location: {
                domain: i.C.socialClub,
                path: "/games/rdo/awards"
              },
              text: a.formatMessage(l.nav_rdo_awards),
              gaText: l.nav_rdo_awards.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "rdoAchievementsButton",
              location: {
                domain: i.C.socialClub,
                path: "/games/rdo/achievements"
              },
              text: a.formatMessage(l.nav_rdo_accomplishments),
              gaText: l.nav_rdo_accomplishments.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "rdoFeaturesLink",
              location: {
                domain: i.C.socialClub,
                path: "/games/rdo/benefits"
              },
              text: a.formatMessage(l.nav_rdo_benefits),
              gaText: l.nav_rdo_benefits.defaultMessage,
              type: "nav-internal"
            }],
            dataTestId: "rdoProgressDropdown",
            text: a.formatMessage(l.nav_rdo_progress),
            gaText: l.nav_rdo_progress.defaultMessage,
            type: "nav-dropdown"
          }, {
            children: [{
              dataTestId: "rdoPosseButton",
              location: {
                domain: i.C.socialClub,
                path: "/games/rdo/posse"
              },
              text: a.formatMessage(l.nav_rdo_posses),
              gaText: l.nav_rdo_posses.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "rdoPhotosButton",
              location: {
                domain: i.C.socialClub,
                path: "/photos/?title=rdr2"
              },
              text: a.formatMessage(l.nav_rdo_photos),
              gaText: l.nav_rdo_photos.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "rdoCommunityGuidelinesButton",
              location: {
                domain: i.C.www,
                path: "/community-guidelines"
              },
              text: a.formatMessage(l.nav_rsg_community_guidelines),
              gaText: l.nav_rsg_community_guidelines.defaultMessage,
              type: "nav-internal"
            }],
            dataTestId: "rdoCommunityDropdown",
            text: a.formatMessage(l.nav_rdo_community),
            gaText: l.nav_rdo_community.defaultMessage,
            type: "nav-dropdown"
          }, {
            dataTestId: "rdoCatalogueButton",
            location: {
              domain: i.C.socialClub,
              path: "/games/rdr2/catalogue/online/"
            },
            target: "_blank",
            text: a.formatMessage(l.nav_rdo_catalogue),
            gaText: l.nav_rdo_catalogue.defaultMessage,
            type: "nav-external"
          }, {
            dataTestId: "rdoSupportLink",
            location: {
              domain: i.C.support,
              path: "/categories/115001624507"
            },
            target: "_blank",
            text: a.formatMessage(l.nav_rdo_support),
            gaText: l.nav_rdo_support.defaultMessage,
            type: "nav-external"
          }],
          site: "rdo"
        }),
        G = a => ({
          site: "reddeadredemption",
          appearancePaths: {
            [i.C.www]: [{
              path: "/reddeadredemption/*",
              options: {}
            }]
          },
          brand: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/afce1282be848202a965031813991b09.svg",
          links: [],
          cta: {
            text: a.formatMessage(l.nav_rdr_cta_buy_now),
            gaText: l.nav_rdr_cta_buy_now.defaultMessage,
            dataTestId: "rsrBuyNowCta",
            location: {
              domain: i.C.www,
              path: "/reddeadredemption/?section=order"
            },
            ga: "cta_buy"
          }
        }),
        W = a => ({
          site: "rdr2",
          appearancePaths: {
            [i.C.www]: [{
              path: "/reddeadredemption2/*",
              options: {}
            }, {
              path: "/games/reddeadredemption2/*",
              options: {}
            }],
            [i.C.socialClub]: [{
              path: "/games/rdr2*",
              options: {}
            }, {
              path: "/photos*",
              options: {
                isSearchPage: !0,
                queryParams: {
                  title: "rdr2"
                }
              }
            }]
          },
          brand: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5e3cf24e53a1fb96410ddbe7d17ca96f.svg",
          links: [{
            text: a.formatMessage(l.nav_rdr2_overview),
            gaText: l.nav_rdr2_overview.defaultMessage,
            type: "nav-internal",
            dataTestId: "rdr2Link",
            location: {
              domain: i.C.www,
              path: "/reddeadredemption2"
            }
          }, {
            text: a.formatMessage(l.nav_rdr2_explore),
            gaText: l.nav_rdr2_explore.defaultMessage,
            type: "nav-dropdown",
            dataTestId: "rdr2ExploreDropdown",
            children: [{
              text: a.formatMessage(l.nav_rdr2_van_der_linde_gang),
              gaText: l.nav_rdr2_van_der_linde_gang.defaultMessage,
              type: "nav-internal",
              dataTestId: "rdr2VanderlindeGangLink",
              location: {
                domain: i.C.www,
                path: "/reddeadredemption2/features/vanderlindegang"
              }
            }, {
              text: a.formatMessage(l.nav_rdr2_locations),
              gaText: l.nav_rdr2_locations.defaultMessage,
              type: "nav-internal",
              dataTestId: "rdr2FrontierLink",
              location: {
                domain: i.C.www,
                path: "/reddeadredemption2/features/frontiercitiesandtowns"
              }
            }, {
              text: a.formatMessage(l.nav_rdr2_wildlife),
              gaText: l.nav_rdr2_wildlife.defaultMessage,
              type: "nav-internal",
              dataTestId: "rdr2WildlifeLink",
              location: {
                domain: i.C.www,
                path: "/reddeadredemption2/features/wildlife"
              }
            }, {
              text: a.formatMessage(l.nav_rdr2_weaponry),
              gaText: l.nav_rdr2_weaponry.defaultMessage,
              type: "nav-internal",
              dataTestId: "rdr2WeaponsLink",
              location: {
                domain: i.C.www,
                path: "/reddeadredemption2/features/weaponry"
              }
            }]
          }, {
            text: a.formatMessage(l.nav_rdr2_progress),
            gaText: l.nav_rdr2_progress.defaultMessage,
            type: "nav-dropdown",
            dataTestId: "rdr2ProgressDropdown",
            children: [{
              text: a.formatMessage(l.nav_rdr2_stats),
              gaText: l.nav_rdr2_stats.defaultMessage,
              type: "nav-internal",
              dataTestId: "rdr2OverviewLink",
              location: {
                domain: i.C.socialClub,
                path: "/games/rdr2/overview"
              }
            }, {
              text: a.formatMessage(l.nav_rdr2_chapters),
              gaText: l.nav_rdr2_chapters.defaultMessage,
              type: "nav-internal",
              dataTestId: "rdr2StoryLink",
              location: {
                domain: i.C.socialClub,
                path: "/games/rdr2/story"
              }
            }, {
              text: a.formatMessage(l.nav_rdr2_challenges),
              gaText: l.nav_rdr2_challenges.defaultMessage,
              type: "nav-internal",
              dataTestId: "rdr2ChallengesLink",
              location: {
                domain: i.C.socialClub,
                path: "/games/rdr2/challenges"
              }
            }, {
              text: a.formatMessage(l.nav_rdr2_character),
              gaText: l.nav_rdr2_character.defaultMessage,
              type: "nav-internal",
              dataTestId: "rdr2PlayerLink",
              location: {
                domain: i.C.socialClub,
                path: "/games/rdr2/player"
              }
            }, {
              text: a.formatMessage(l.nav_rdr2_compendium),
              gaText: l.nav_rdr2_compendium.defaultMessage,
              type: "nav-internal",
              dataTestId: "rdr2CompendiumLink",
              location: {
                domain: i.C.socialClub,
                path: "/games/rdr2/compendium"
              }
            }, {
              text: a.formatMessage(l.nav_rdr2_accomplishments),
              gaText: l.nav_rdr2_accomplishments.defaultMessage,
              type: "nav-internal",
              dataTestId: "rdr2AchievementsLink",
              location: {
                domain: i.C.socialClub,
                path: "/games/rdr2/achievements"
              }
            }]
          }, {
            text: a.formatMessage(l.nav_rdr2_media),
            gaText: l.nav_rdr2_media.defaultMessage,
            type: "nav-dropdown",
            dataTestId: "rdr2MediaDropdown",
            children: [{
              text: a.formatMessage(l.nav_rdr2_gallery),
              gaText: l.nav_rdr2_gallery.defaultMessage,
              type: "nav-internal",
              dataTestId: "rdr2GalleryLink",
              location: {
                domain: i.C.www,
                path: "/reddeadredemption2/screens"
              }
            }, {
              text: a.formatMessage(l.nav_rdr2_artwork),
              gaText: l.nav_rdr2_artwork.defaultMessage,
              type: "nav-internal",
              dataTestId: "rdr2DownloadsLink",
              location: {
                domain: i.C.www,
                path: "/reddeadredemption2/downloads"
              }
            }, {
              text: a.formatMessage(l.nav_rdr2_videos),
              gaText: l.nav_rdr2_videos.defaultMessage,
              type: "nav-internal",
              dataTestId: "rdr2VideosLink",
              location: {
                domain: i.C.www,
                path: "/reddeadredemption2/videos"
              }
            }, {
              text: a.formatMessage(l.nav_rdr2_music),
              gaText: l.nav_rdr2_music.defaultMessage,
              type: "nav-internal",
              dataTestId: "rdr2MusicLink",
              location: {
                domain: i.C.www,
                path: "/reddeadredemption2/features/music"
              }
            }]
          }, {
            text: a.formatMessage(l.nav_rdr2_online),
            gaText: l.nav_rdr2_online.defaultMessage,
            type: "nav-internal",
            dataTestId: "rdr2RdoLink",
            location: {
              domain: i.C.www,
              path: "/reddeadonline"
            }
          }, {
            text: a.formatMessage(l.nav_rdr2_catalogue),
            gaText: l.nav_rdr2_catalogue.defaultMessage,
            type: "nav-external",
            dataTestId: "rdr2CatalogueLink",
            target: "_blank",
            location: {
              domain: i.C.socialClub,
              path: "/games/rdr2/catalogue"
            }
          }, {
            text: a.formatMessage(l.nav_rdr2_support),
            gaText: l.nav_rdr2_support.defaultMessage,
            type: "nav-external",
            dataTestId: "rdr2SupportLink",
            target: "_blank",
            location: {
              domain: i.C.support,
              path: "/categories/115001624507"
            }
          }],
          cta: {
            text: a.formatMessage(l.nav_rdr2_cta_buy_now),
            gaText: l.nav_rdr2_cta_buy_now.defaultMessage,
            dataTestId: "rdr2StoreLink",
            target: "_blank",
            location: {
              domain: i.C.store,
              path: "/game/buy-red-dead-redemption-2"
            },
            ga: "cta_buy"
          }
        }),
        J = () => ({
          site: "undeadnightmare",
          appearancePaths: {
            [i.C.www]: [{
              path: "/games/undeadnightmare/*",
              options: {}
            }]
          },
          brand: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/27bc39e322a4e55dc8b34fa4543269b8.svg",
          links: []
        }),
        O = () => ({
          site: "reddeadrevolver",
          appearancePaths: {
            [i.C.www]: [{
              path: "/games/reddeadrevolver/*",
              options: {}
            }]
          },
          brand: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/8f508003b671cb320749ffc1eb2aab25.svg",
          links: []
        }),
        K = a => ({
          site: "rsg",
          appearancePaths: {
            [i.C.www]: [{
              path: "/search/*",
              options: {
                isSearchPage: !0,
                forceSearch: !0
              }
            }, {
              path: "/*",
              options: {}
            }],
            [i.C.socialClub]: [{
              path: "/*",
              options: {}
            }]
          },
          brand: null,
          links: [{
            text: a.formatMessage(l.nav_rsg_games),
            gaText: l.nav_rsg_games.defaultMessage,
            type: "games-menu",
            dataTestId: "games"
          }, {
            text: a.formatMessage(l.nav_rsg_newswire),
            gaText: l.nav_rsg_newswire.defaultMessage,
            type: "nav-internal",
            dataTestId: "newswireLink",
            location: {
              domain: i.C.www,
              path: "/newswire"
            }
          }, {
            text: a.formatMessage(l.nav_rsg_videos),
            gaText: l.nav_rsg_videos.defaultMessage,
            type: "nav-internal",
            dataTestId: "videosLink",
            location: {
              domain: i.C.www,
              path: "/videos"
            }
          }, {
            text: a.formatMessage(l.nav_rsg_downloads),
            gaText: l.nav_rsg_downloads.defaultMessage,
            type: "nav-internal",
            dataTestId: "downloadsLink",
            location: {
              domain: i.C.www,
              path: "/downloads"
            }
          }, {
            text: a.formatMessage(l.nav_rsg_store),
            gaText: l.nav_rsg_store.defaultMessage,
            type: "nav-external",
            dataTestId: "storeLink",
            target: "_blank",
            location: {
              domain: i.C.store,
              path: "/"
            }
          }, {
            text: a.formatMessage(l.nav_rsg_support),
            gaText: l.nav_rsg_support.defaultMessage,
            type: "nav-external",
            dataTestId: "supportLink",
            target: "_blank",
            location: {
              domain: i.C.support,
              path: "/"
            }
          }],
          cta: {
            text: a.formatMessage(l.nav_rsg_cta_get_launcher),
            gaText: l.nav_rsg_cta_get_launcher.defaultMessage,
            variant: "highlight",
            dataTestId: "launcherLink",
            location: {
              domain: i.C.socialClub,
              path: "/rockstar-games-launcher"
            },
            ga: "cta_download"
          },
          hideQuickAccess: !0
        }),
        Q = () => ({
          site: "stateofemergency",
          appearancePaths: {
            [i.C.www]: [{
              path: "/games/stateofemergency/*",
              options: {}
            }]
          },
          brand: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/2b4f7013cd8954b8f41c5bc60173b1e6.svg",
          links: []
        }),
        q = () => ({
          site: "skateanddestroy",
          appearancePaths: {
            [i.C.www]: [{
              path: "/games/skateanddestroy/*",
              options: {}
            }]
          },
          brand: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/0e24eba17ceb19c8e953425fdc8f69bf.svg",
          links: []
        }),
        U = () => ({
          site: "smugglersrun",
          appearancePaths: {
            [i.C.www]: [{
              path: "/games/smugglersrun/*",
              options: {}
            }]
          },
          brand: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/56ad67de5fcb23d5170c6ab1c22090a9.png",
          links: []
        }),
        Y = () => ({
          site: "smugglersrun2",
          appearancePaths: {
            [i.C.www]: [{
              path: "/games/smugglersrun2/*",
              options: {}
            }]
          },
          brand: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/95c570982247f87a5720d3b09edea287.png",
          links: []
        }),
        Z = () => ({
          site: "smugglersrunwarzones",
          appearancePaths: {
            [i.C.www]: [{
              path: "/games/smugglersrunwarzones/*",
              options: {}
            }]
          },
          brand: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/76ea0a9986ebf83e1bc9be3e03a0433f.png",
          links: []
        }),
        V = a => ({
          site: "tabletennis",
          appearancePaths: {
            [i.C.www]: [{
              path: "/games/tabletennis/*",
              options: {}
            }]
          },
          brand: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/6168a999187a8807caacf4d106a60a80.svg",
          links: [],
          cta: {
            text: a.formatMessage(l.nav_tabletennis_cta_buy_now),
            gaText: l.nav_tabletennis_cta_buy_now.defaultMessage,
            variant: "highlight",
            dataTestId: "tableTennisCta",
            location: {
              domain: "https://www.xbox.com",
              path: "/en-US/games/store/rockstar-table-tennis/bvz4h08bmq3h"
            },
            ga: "cta_buy"
          }
        }),
        X = () => ({
          site: "italianjob",
          appearancePaths: {
            [i.C.www]: [{
              path: "/games/italianjob/*",
              options: {}
            }]
          },
          brand: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/dfc0cce899459d99bc2403b124a5d30d.svg",
          links: []
        }),
        $ = a => ({
          site: "thewarriors",
          appearancePaths: {
            [i.C.www]: [{
              path: "/games/thewarriors/*",
              options: {}
            }]
          },
          brand: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/afa9c45d4c8ee52983534b4be5504ff0.svg",
          cta: {
            dataTestId: "thewarriorsPurchaseLink",
            ga: "cta_buy",
            location: {
              domain: "https://store.playstation.com",
              path: "/concept/205082"
            },
            text: a.formatMessage(l.nav_thewarriors_cta_buy_now),
            gaText: l.nav_thewarriors_cta_buy_now.defaultMessage
          },
          links: []
        }),
        aa = () => ({
          site: "wildmetal",
          appearancePaths: {
            [i.C.www]: [{
              path: "/games/wildmetal/*",
              options: {}
            }]
          },
          brand: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/95bd5f94c3522fcf1ebc9e1254522379.svg",
          links: []
        }),
        ea = /[*?\\<>&%@:~]/g,
        na = {
          min: 3,
          max: 100,
          validationFunction: function(a) {
            return a.match(ea)
          }
        },
        ta = (0, i.A)(),
        oa = (a, e) => "/" + [e, ...a.split("/")].filter(Boolean).join("/"),
        ra = (a, e) => a ? a === e ? "" : a.startsWith("http") ? a : `https://${ta.sites[a]}.rockstargames.com` : "";
      var ia = n(52542);
      const da = {
          event: "account_menu_click",
          element_placement: "Account Menu"
        },
        sa = (a, e, n, t) => [{
          text: a.formatMessage(l.sc_link_activity_feed),
          location: {
            domain: i.C.socialClub,
            path: "/"
          },
          target: "_self",
          ga: {
            ...da,
            text: l.sc_link_activity_feed.defaultMessage
          },
          dataTestId: "activityFeedLink"
        }, {
          text: a.formatMessage(l.sc_link_account),
          target: "_self",
          dataTestId: "accountButton",
          children: [{
            text: a.formatMessage(l.sc_link_settings),
            location: {
              domain: i.C.socialClub,
              path: "/settings"
            },
            target: "_self",
            ga: {
              ...da,
              text: l.sc_link_settings.defaultMessage
            },
            dataTestId: "settingsLink"
          }, {
            text: a.formatMessage(l.sc_link_view_my_profile),
            location: {
              domain: n,
              path: ""
            },
            target: "_self",
            ga: {
              ...da,
              text: l.sc_link_view_my_profile.defaultMessage
            },
            dataTestId: "viewMyProfileLink"
          }, {
            text: a.formatMessage(l.sc_link_messages),
            location: {
              domain: i.C.socialClub,
              path: "/message"
            },
            target: "_self",
            ga: {
              ...da,
              text: l.sc_link_messages.defaultMessage
            },
            dataTestId: "messagesLink"
          }, {
            text: a.formatMessage(l.sc_link_game_activation),
            location: {
              domain: i.C.socialClub,
              path: "/activate"
            },
            target: "_self",
            ga: {
              ...da,
              text: l.sc_link_game_activation.defaultMessage
            },
            dataTestId: "gameActivationLink"
          }]
        }, {
          text: a.formatMessage(l.sc_link_notifications),
          location: {
            domain: i.C.socialClub,
            path: "/notifications"
          },
          target: "_self",
          hasNotifications: t,
          ga: {
            ...da,
            text: l.sc_link_notifications.defaultMessage,
            location: {
              domain: i.C.socialClub,
              path: "/notifications"
            }
          },
          dataTestId: "notificationsLink"
        }, {
          text: a.formatMessage(l.sc_link_crews),
          location: {
            domain: i.C.socialClub,
            path: `/member/${e}/crews`
          },
          target: "_self",
          ga: {
            ...da,
            text: l.sc_link_crews.defaultMessage
          },
          dataTestId: "crewsLink"
        }, {
          text: a.formatMessage(l.sc_link_friends),
          target: "_self",
          dataTestId: "friendsButton",
          children: [{
            text: a.formatMessage(l.sc_link_my_friends),
            location: {
              domain: i.C.socialClub,
              path: `/member/${e}/friends`
            },
            target: "_self",
            ga: {
              ...da,
              text: l.sc_link_my_friends.defaultMessage
            },
            dataTestId: "myFriendsLink"
          }, {
            text: a.formatMessage(l.sc_link_import_friends),
            location: {
              domain: i.C.socialClub,
              path: "/friends/import"
            },
            target: "_self",
            ga: {
              ...da,
              text: l.sc_link_import_friends.defaultMessage
            },
            dataTestId: "importFriendsLink"
          }, {
            text: a.formatMessage(l.sc_link_find_friends),
            location: {
              domain: i.C.socialClub,
              path: "/members"
            },
            target: "_self",
            ga: {
              ...da,
              text: l.sc_link_import_friends.defaultMessage
            },
            dataTestId: "findFriendsLink"
          }]
        }],
        la = {
          event: "account_menu_click",
          element_placement: "Account Menu"
        },
        ca = a => ({
          text: a.formatMessage(l.sc_link_help),
          target: "_self",
          ga: {
            ...la,
            text: l.sc_link_help.defaultMessage
          },
          dataTestId: "helpButton",
          type: "nav-dropdown",
          children: [{
            text: a.formatMessage(l.sc_link_support),
            location: {
              domain: i.C.support,
              path: "/"
            },
            target: "_self",
            ga: {
              ...la,
              text: l.sc_link_support.defaultMessage
            },
            dataTestId: "supportLink"
          }, {
            text: a.formatMessage(l.sc_link_legal),
            location: {
              domain: i.C.www,
              path: "/legal"
            },
            target: "_self",
            ga: {
              ...la,
              text: l.sc_link_legal.defaultMessage
            },
            dataTestId: "legalLink"
          }, {
            text: a.formatMessage(l.sc_link_privacy_policy),
            location: {
              domain: i.C.www,
              path: "/privacy"
            },
            target: "_self",
            ga: {
              ...la,
              text: l.sc_link_privacy_policy.defaultMessage
            },
            dataTestId: "privacyPolicyLink"
          }, {
            text: a.formatMessage(l.sc_link_cookies_policy),
            location: {
              domain: i.C.www,
              path: "/cookies"
            },
            target: "_self",
            ga: {
              ...la,
              text: l.sc_link_cookies_policy.defaultMessage
            },
            dataTestId: "cookiesPolicyLink"
          }, {
            text: a.formatMessage(l.sc_link_cookies_settings),
            onClickCallback: a => {
              a.preventDefault(), window.OneTrust?.ToggleInfoDisplay()
            },
            target: "_self",
            ga: {
              ...la,
              text: l.sc_link_cookies_settings.defaultMessage
            },
            dataTestId: "cookiesSettingsLink"
          }, {
            text: a.formatMessage(l.sc_link_do_not_sell_my_information),
            location: {
              domain: i.C.www,
              path: "/ccpa"
            },
            target: "_self",
            ga: {
              ...la,
              text: l.sc_link_do_not_sell_my_information.defaultMessage
            },
            dataTestId: "doNotSellMyInformationLink"
          }]
        });
      var ma = n(11040),
        ga = n(92824),
        Aa = n(35449),
        fa = n(53178),
        ha = n.n(fa),
        ba = n(94566),
        pa = n.n(ba),
        Ca = n(31610),
        ua = n.n(Ca),
        va = n(82510),
        wa = n.n(va),
        ya = n(64435),
        xa = {
          attributes: {
            "data-shadowTarget": "@rockstargames/modules-core-header"
          }
        };
      xa.setAttributes = ua(), xa.insert = a => {
        const e = a.dataset.shadowtarget;
        e && (window.__MFE_GLOBAL_HOOK__ = {
          ...window.__MFE_GLOBAL_HOOK__,
          stylesForShadowRoot: {
            ...window.__MFE_GLOBAL_HOOK__?.stylesForShadowRoot,
            [e]: a
          }
        })
      }, xa.domAPI = pa(), xa.insertStyleElement = wa(), ha()(ya.A, xa);
      const _a = ya.A && ya.A.locals ? ya.A.locals : void 0;
      var ka = n(73855);
      const Ba = a => {
        let {
          title: e,
          titleSlug: n,
          path: t,
          ...o
        } = a;
        return (0, ka.jsx)("div", {
          className: _a.gameCard,
          children: (0, ka.jsx)(Aa.A, {
            to: t,
            "aria-label": e,
            ...o,
            children: (0, ka.jsx)(ga.A, {
              title: e,
              titleSlug: n
            })
          })
        }, e)
      };
      var Ia = n(28140),
        Ma = {
          attributes: {
            "data-shadowTarget": "@rockstargames/modules-core-header"
          }
        };
      Ma.setAttributes = ua(), Ma.insert = a => {
        const e = a.dataset.shadowtarget;
        e && (window.__MFE_GLOBAL_HOOK__ = {
          ...window.__MFE_GLOBAL_HOOK__,
          stylesForShadowRoot: {
            ...window.__MFE_GLOBAL_HOOK__?.stylesForShadowRoot,
            [e]: a
          }
        })
      }, Ma.domAPI = pa(), Ma.insertStyleElement = wa(), ha()(Ia.A, Ma);
      const Sa = Ia.A && Ia.A.locals ? Ia.A.locals : void 0;
      var za = n(64727);
      const Ra = (0, s.defineMessages)({
          games_menu_item: {
            id: "games_menu_item",
            defaultMessage: "Games"
          },
          games_menu_featured: {
            id: "games_menu_featured",
            defaultMessage: "Featured Games"
          },
          games_menu_view_all: {
            id: "games_menu_view_all",
            defaultMessage: "View All"
          },
          games_menu_gta_v: {
            id: "games_menu_gta_v",
            defaultMessage: "Grand Theft Auto V"
          },
          games_menu_gta_online: {
            id: "games_menu_gta_online",
            defaultMessage: "Grand Theft Auto Online"
          },
          games_menu_gta_trilogy: {
            id: "games_menu_gta_trilogy",
            defaultMessage: "Grand Theft Auto: The Trilogy"
          },
          games_menu_rdr_2: {
            id: "games_menu_rdr_2",
            defaultMessage: "Red Dead Redemption 2"
          },
          games_menu_rdr_online: {
            id: "games_menu_rdr_online",
            defaultMessage: "Red Dead Online"
          },
          games_menu_rdr: {
            id: "games_menu_rdr",
            defaultMessage: "Red Dead Redemption"
          }
        }),
        Da = a => ({
          viewAllLocation: {
            path: "/games"
          },
          games: [{
            titleSlug: "gta-v",
            text: a.formatMessage(Ra.games_menu_gta_v),
            gaText: "Grand Theft Auto V",
            path: "/gta-v",
            dataTestId: "gtav"
          }, {
            titleSlug: "gta-online",
            text: a.formatMessage(Ra.games_menu_gta_online),
            gaText: "Grand Theft Auto Online",
            path: "/gta-online",
            dataTestId: "gtao"
          }, {
            titleSlug: "reddeadredemption2",
            text: a.formatMessage(Ra.games_menu_rdr_2),
            gaText: "Red Dead Redemption 2",
            path: "/reddeadredemption2",
            dataTestId: "rdr2"
          }, {
            titleSlug: "reddeadredemption",
            text: a.formatMessage(Ra.games_menu_rdr),
            gaText: "Red Dead Redemption",
            path: "/reddeadredemption",
            dataTestId: "rdr"
          }, {
            titleSlug: "reddeadonline",
            text: a.formatMessage(Ra.games_menu_rdr_online),
            gaText: "Red Dead Online",
            path: "/reddeadonline",
            dataTestId: "rdo"
          }]
        });
      var Na = n(32948),
        Ta = n(69035);
      const Ea = () => {
          const a = (0, s.useIntl)(),
            e = (0, i.A)(),
            [{
              subdomaincom: n
            }] = (0, s.getLocale)(),
            t = n !== s.englishLocale.subdomaincom ? `/${n}` : "",
            o = e.currentSite?.site === i.C.www ? t : `https://${e.currentSite?.subDomain}.rockstargames.com`,
            {
              viewAllLocation: d,
              games: l
            } = (0, r.useMemo)((() => Da(a)), [n]);
          return (0, ka.jsxs)("div", {
            className: Sa.gamesMenu,
            "data-testid": "gamesMenu",
            children: [(0, ka.jsxs)("div", {
              className: Sa.titleBar,
              children: [(0, ka.jsx)("div", {
                children: (0, ka.jsx)("h2", {
                  className: Sa.menuTitle,
                  children: a.formatMessage(Ra.games_menu_featured)
                })
              }), (0, ka.jsx)("div", {
                children: (0, ka.jsxs)("a", {
                  className: Sa.viewAllLink,
                  href: o + d.path,
                  children: [a.formatMessage(Ra.games_menu_view_all), (0, ka.jsx)("img", {
                    src: za.ZM,
                    alt: a.formatMessage(Ra.games_menu_view_all)
                  })]
                })
              })]
            }), (0, ka.jsx)("div", {
              className: Sa.gameCards,
              children: l.map((a => (0, ka.jsx)(Ba, {
                title: a.text,
                titleSlug: a.titleSlug,
                path: o + a.path
              }, a.titleSlug)))
            })]
          })
        },
        Fa = () => {
          const a = (0, s.useIntl)(),
            {
              isHidden: e
            } = (0, r.useContext)(Na.jd),
            {
              inMobileMenu: n
            } = (0, r.useContext)(Ta.xN);
          return n ? (0, ka.jsx)(La, {}) : (0, ka.jsxs)(Na.Dr, {
            children: [(0, ka.jsx)(Na.cQ, {
              children: a.formatMessage(Ra.games_menu_item)
            }), !e && (0, ka.jsx)(Na.rm, {
              className: Sa.gamesMenuContent,
              animationOverride: "expandCollapse",
              children: (0, ka.jsx)(Ea, {})
            })]
          })
        },
        La = () => {
          const a = (0, s.useIntl)(),
            e = (0, i.A)(),
            [{
              subdomaincom: n
            }] = (0, s.getLocale)(),
            t = n !== s.englishLocale.subdomaincom ? `/${n}` : "",
            o = e.currentSite?.site === i.C.www ? t : `https://${e.currentSite?.subDomain}.rockstargames.com`,
            {
              viewAllLocation: d,
              games: l
            } = (0, r.useMemo)((() => Da(a)), [n]);
          return (0, ka.jsxs)("div", {
            className: Sa.gamesMenuMobile,
            "data-testid": "gamesMenu",
            children: [(0, ka.jsxs)("div", {
              className: Sa.header,
              children: [(0, ka.jsx)("h2", {
                children: a.formatMessage(Ra.games_menu_featured)
              }), (0, ka.jsxs)("a", {
                className: Sa.viewAllLink,
                href: o + d.path,
                children: [a.formatMessage(Ra.games_menu_view_all), (0, ka.jsx)("img", {
                  src: za.ZM,
                  alt: a.formatMessage(Ra.games_menu_view_all)
                })]
              })]
            }), (0, ka.jsx)(ma.RC, {
              className: Sa.slider,
              spaceBetween: 12.8,
              loop: !1,
              grabCursor: !0,
              centeredSlides: !1,
              slidesPerView: 2.5,
              speed: 700,
              children: l.map((a => (0, ka.jsx)(ma.qr, {
                className: Sa.slide,
                children: (0, ka.jsx)(Ba, {
                  titleSlug: a.titleSlug,
                  title: a.text,
                  gaText: a.gaText,
                  gaBreadCrumb: `Games > ${a.gaText}`,
                  path: o + a.path,
                  dataTestId: a.dataTestId
                })
              }, a.gaText)))
            })]
          })
        },
        Ha = La,
        Pa = a => {
          let {
            globalNavLoaderComponent: e,
            globalNavComponent: n,
            locale: d,
            username: c,
            userProfileLink: m,
            hasNotifications: g,
            ...A
          } = a;
          const f = (0, s.useIntl)(),
            h = (0, i.A)(),
            b = (a => {
              const e = (0, i.A)(),
                n = a.subdomaincom,
                t = a => {
                  const o = e.currentSite?.site !== i.C.www && a.location?.domain === i.C.www && "en" !== n;
                  return {
                    ...a,
                    ...a.children ? {
                      children: a.children.map(t)
                    } : {},
                    ...a.targets ? {
                      targets: a.targets.map(t)
                    } : {},
                    ...a.location ? {
                      location: {
                        ...a.location,
                        path: o ? oa(a.location.path, n) : a.location.path,
                        domain: e?.currentSite ? ra(a.location.domain, e.currentSite.site) : ""
                      }
                    } : {}
                  }
                };
              return a => t(a)
            })(d),
            p = e,
            C = (a => ({
              targets: [{
                text: a.formatMessage(l.search_target_games),
                gaText: l.search_target_games.defaultMessage,
                tab: "games",
                type: "",
                location: {
                  domain: i.C.www,
                  path: "/search",
                  params: {
                    q: "{query}",
                    tab: "games"
                  }
                },
                searchOptions: na
              }, {
                text: a.formatMessage(l.search_target_posts),
                gaText: l.search_target_posts.defaultMessage,
                tab: "posts",
                type: "",
                location: {
                  domain: i.C.www,
                  path: "/search",
                  params: {
                    q: "{query}",
                    tab: "posts"
                  }
                },
                searchOptions: na
              }, {
                text: a.formatMessage(l.search_target_videos),
                gaText: l.search_target_videos.defaultMessage,
                tab: "videos",
                type: "",
                location: {
                  domain: i.C.www,
                  path: "/search",
                  params: {
                    q: "{query}",
                    tab: "videos"
                  }
                },
                searchOptions: na
              }, {
                text: a.formatMessage(l.search_target_community),
                gaText: l.search_target_community.defaultMessage,
                tab: "socialClub",
                type: "nav-dropdown",
                targets: [{
                  text: a.formatMessage(l.search_target_users),
                  gaText: l.search_target_users.defaultMessage,
                  type: "",
                  location: {
                    domain: i.C.socialClub,
                    path: "/members/{term}"
                  },
                  searchOptions: na
                }, {
                  text: a.formatMessage(l.search_target_crews),
                  gaText: l.search_target_crews.defaultMessage,
                  type: "",
                  location: {
                    domain: i.C.socialClub,
                    path: "/crews/{term}"
                  },
                  searchOptions: na
                }, {
                  text: a.formatMessage(l.search_target_jobs),
                  gaText: l.search_target_jobs.defaultMessage,
                  type: "",
                  location: {
                    domain: i.C.socialClub,
                    path: "/jobs/{term}"
                  },
                  searchOptions: na
                }, {
                  text: a.formatMessage(l.search_target_user_photos),
                  gaText: l.search_target_user_photos.defaultMessage,
                  type: "",
                  location: {
                    domain: i.C.socialClub,
                    path: "/photos/{term}"
                  },
                  searchOptions: na
                }]
              }]
            }))(f),
            [u, v] = (0, r.useState)(window.innerWidth < 1024),
            w = Object.values(t).map((a => a(f))),
            y = (0, r.useMemo)((() => {
              const a = h.currentSite?.site,
                e = K(f).links;
              return w.reduce(((n, t) => {
                if (!h.currentSite?.site || !t?.appearancePaths?.[h.currentSite.site]) return n;
                const o = ((a, e, n, t) => a && 0 !== a.length || "www" !== n || !t ? a : e)(t.links, e, a, u);
                return [...n, {
                  ...t,
                  appearancePaths: h.currentSite?.site ? t?.appearancePaths?.[h.currentSite.site] : [],
                  links: o.map(b),
                  cta: t.cta && b(t.cta)
                }]
              }), [])
            }), [u, w]),
            x = {
              ...C,
              targets: C.targets.map(b)
            },
            _ = (0, r.useMemo)((() => ({
              loggedInLinks: sa(f, c, m, g).map(b),
              helpItem: b(ca(f))
            })), [f, c, m, g]);
          return (0, r.useEffect)((() => {
            const a = () => {
              v(window.innerWidth < 1024)
            };
            return window.addEventListener("resize", a), () => {
              window.removeEventListener("resize", a)
            }
          }), []), (0, ka.jsx)(p, {
            navigationData: y,
            locale: d,
            globalNavigationComponent: n,
            searchConfig: x,
            gamesMenuComponent: o,
            avatarMenuData: _,
            ...A
          })
        },
        ja = (0, s.withIntl)((a => {
          let {
            globalNavLoaderComponent: e,
            globalNavComponent: n,
            username: t,
            userProfileLink: o,
            hasNotifications: r,
            ...i
          } = a;
          const [d] = (0, s.getLocale)();
          return e ? (0, ka.jsx)(Pa, {
            globalNavLoaderComponent: e,
            globalNavComponent: n,
            locale: d,
            username: t,
            userProfileLink: o,
            hasNotifications: r,
            ...i
          }) : null
        }), ia)
    },
    17165: (a, e, n) => {
      n.d(e, {
        A: () => d
      });
      var t = n(42587),
        o = n.n(t),
        r = n(15081),
        i = n.n(r)()(o());
      i.push([a.id, ".rockstargames-modules-core-headerc95fa2303ee2096feb04a8cd9d2a5a4b{background:#fff;border:1px solid #fff;border-radius:4px;box-shadow:none;cursor:pointer;font-weight:700;left:0;letter-spacing:0;margin:var(--rem-1);opacity:0;padding:var(--rem-05);pointer-events:none;position:absolute;text-transform:uppercase;top:calc(-100% + var(--rem-2));transition:transform .3s ease-in-out,opacity .3s ease-in-out;z-index:999}.rockstargames-modules-core-headerc95fa2303ee2096feb04a8cd9d2a5a4b:focus{border:1px solid #fff;color:#000;left:0;opacity:1;pointer-events:auto;top:0;transform:translateY(calc(100% - var(--rem-2)));z-index:9999}", "", {
        version: 3,
        sources: ["webpack://./compositional/components/AccessibilityButton/index.less"],
        names: [],
        mappings: "AAAA,mEACI,eAAA,CACA,qBAAA,CACA,iBAAA,CACA,eAAA,CACA,cAAA,CACA,eAAA,CASA,MAAA,CARA,gBAAA,CAEA,mBAAA,CACA,SAAA,CAFA,qBAAA,CAGA,mBAAA,CAEA,iBAAA,CAKA,wBAAA,CAJA,8BAAA,CAKA,4DAAA,CAHA,WAEJ,CAKI,yEAOI,qBAAA,CADA,UAAA,CAHA,MAAA,CAEA,SAAA,CAGA,mBAAA,CANA,KAAA,CADA,+CAAA,CAGA,YACR",
        sourcesContent: [".accessibility {\n    background: white;\n    border: solid 1px white;\n    border-radius: 4px;\n    box-shadow: none;\n    cursor: pointer;\n    font-weight: bold;\n    letter-spacing: 0;\n    padding: var(--rem-05);\n    margin: var(--rem-1);\n    opacity: 0;\n    pointer-events: none;\n\n    position: absolute;\n    top: calc(-100% + var(--rem-2));\n    left: 0;\n    z-index: 999;\n\n    text-transform: uppercase;\n    transition:\n        transform 0.3s ease-in-out,\n        opacity 0.3s ease-in-out;\n\n    &:focus {\n        transform: translateY(calc(100% - var(--rem-2)));\n        top: 0;\n        left: 0;\n        z-index: 9999;\n        opacity: 1;\n        color: black;\n        border: solid 1px white;\n        pointer-events: auto;\n    }\n}\n"],
        sourceRoot: ""
      }]), i.locals = {
        accessibility: "rockstargames-modules-core-headerc95fa2303ee2096feb04a8cd9d2a5a4b"
      };
      const d = i
    },
    91185: (a, e, n) => {
      n.d(e, {
        A: () => g
      });
      var t = n(42587),
        o = n.n(t),
        r = n(15081),
        i = n.n(r),
        d = n(79908),
        s = n.n(d),
        l = new URL(n(71029), n.b),
        c = i()(o()),
        m = s()(l);
      c.push([a.id, `.rockstargames-modules-core-headerff5e3320dd70a4dcaccbe336302b4714{align-items:center;background:var(--white-15);border:none;border-radius:100px;color:var(--white-100);cursor:pointer;display:flex;font-family:var(--font-family-body);font-size:20px;font-style:normal;font-weight:700;justify-content:center;line-height:var(--rem-125);min-width:var(--rem-6);padding:var(--padding-xs) var(--padding-sm);text-align:center;transition:background-color .3s ease-in-out}.rockstargames-modules-core-headerff5e3320dd70a4dcaccbe336302b4714 img{height:var(--nav-icon-size);margin-left:var(--grid-gap-xs);transition:filter .3s ease-in-out;width:var(--nav-icon-size)}.rockstargames-modules-core-headerff5e3320dd70a4dcaccbe336302b4714:focus,.rockstargames-modules-core-headerff5e3320dd70a4dcaccbe336302b4714:hover{background-color:var(--white-40);outline:none}.rockstargames-modules-core-headerff5e3320dd70a4dcaccbe336302b4714.rockstargames-modules-core-headercb3e82faf685657df2d72233f5467a60{background:var(--white-100);color:var(--black-200)}.rockstargames-modules-core-headerff5e3320dd70a4dcaccbe336302b4714.rockstargames-modules-core-headercb3e82faf685657df2d72233f5467a60 img{filter:invert()}.rockstargames-modules-core-headerc21d08286895e5d5d2fc1a7586c6a11d{--avatar-menu-overflow:var(--rem-1);display:flex}.rockstargames-modules-core-headerfbdd0b16d9b61ed0dd3f5e76b9a1f9de{background-color:initial;display:flex;flex-direction:column;gap:var(--margin-sm);max-height:calc(100vh - var(--header-height));overflow-y:auto;padding:6px var(--avatar-menu-overflow) var(--avatar-menu-overflow);scrollbar-color:var(--scroll-thumb-color) var(--scroll-track-color);scrollbar-gutter:stable;scrollbar-width:auto;width:calc(325px + var(--avatar-menu-overflow) + var(--avatar-menu-overflow))}.rockstargames-modules-core-headerfbdd0b16d9b61ed0dd3f5e76b9a1f9de::-webkit-scrollbar{width:8px}.rockstargames-modules-core-headerfbdd0b16d9b61ed0dd3f5e76b9a1f9de::-webkit-scrollbar-track{background:transparent}.rockstargames-modules-core-headerfbdd0b16d9b61ed0dd3f5e76b9a1f9de::-webkit-scrollbar-thumb{background-color:var(--scroll-thumb-color);border:none;border-radius:10px}.rockstargames-modules-core-headerb68abcf23dae4ff8aa054bd9ff446a9a{-webkit-backdrop-filter:blur(calc(var(--rem-1) * 1.75));backdrop-filter:blur(calc(var(--rem-1) * 1.75));background-color:var(--white-15);border-radius:var(--border-radius-md) var(--border-radius-md) 0 0;border-top:.5px solid var(--white-65);bottom:0;display:block;height:-moz-min-content;height:min-content;left:0;margin-right:0;max-width:100vw;padding:0 var(--padding-sm) var(--padding-sm);position:fixed;right:0;width:100%;z-index:99}.rockstargames-modules-core-headereef2738c4b5cf2f7e69238683d6d503f{background-color:initial;display:flex;flex-direction:column;gap:var(--margin-sm);max-height:calc(100vh - var(--header-height));overflow:hidden auto;padding:6px var(--avatar-menu-overflow) var(--avatar-menu-overflow);scrollbar-color:var(--scroll-thumb-color) var(--scroll-track-color);scrollbar-gutter:stable;scrollbar-width:auto;width:100%}.rockstargames-modules-core-headereef2738c4b5cf2f7e69238683d6d503f::-webkit-scrollbar{width:8px}.rockstargames-modules-core-headereef2738c4b5cf2f7e69238683d6d503f::-webkit-scrollbar-track{background:transparent}.rockstargames-modules-core-headereef2738c4b5cf2f7e69238683d6d503f::-webkit-scrollbar-thumb{background-color:var(--scroll-thumb-color);border:none;border-radius:10px}.rockstargames-modules-core-headeredeb54ea736b008d967474a5c9b63a33{align-items:center;background-color:initial;border:0;box-shadow:none;height:var(--rem-2);justify-content:center;margin-left:calc(var(--base-rem-size) * -1.813);min-height:var(--rem-2);padding:0;width:calc(100% + calc(var(--base-rem-size) * 3.625))}.rockstargames-modules-core-headerbe1cd057f4c550474a77b822a5eb729e{left:50%;pointer-events:none;position:absolute;top:var(--spacing-sm);transform:translateX(-50%)}.rockstargames-modules-core-headerb82b1a7297d0e2f91a3ac183adcb21c4{background:none;border:none;border-radius:100%;cursor:pointer;height:var(--rem-15);padding:0;position:relative;width:var(--rem-15)}.rockstargames-modules-core-headerb82b1a7297d0e2f91a3ac183adcb21c4[data-img-set=true]{background-image:url(${m});background-position:50%;background-size:cover}@media (max-width:1023px){.rockstargames-modules-core-headerb82b1a7297d0e2f91a3ac183adcb21c4{height:var(--rem-2);order:3;width:var(--rem-2)}}.rockstargames-modules-core-headerfa4a01e9a53561bce475cd223f7cafe1{border-radius:100%;height:100%;left:0;position:absolute;top:0;width:100%}.rockstargames-modules-core-headerf43b908943d5a326555406c89c919f3a{background-color:var(--black-100);border:1px solid var(--global-navigation-border-color);border-radius:var(--border-radius-md);box-shadow:0 0 var(--avatar-menu-overflow) 0 var(--black-65);display:flex;flex-direction:column}.rockstargames-modules-core-headerc63374d1c5bca5343c48709064ac9ecc{border:none;border-bottom:1px solid var(--global-navigation-border-color);border-radius:var(--border-radius-md) var(--border-radius-md) 0 0;box-shadow:none;color:var(--color-body);color:var(--rockstar-gold);display:block;text-align:left;text-transform:uppercase}.rockstargames-modules-core-headerc63374d1c5bca5343c48709064ac9ecc,.rockstargames-modules-core-headerc2907f284a3a3dd7c419856bdb6a99ee{background-color:var(--black-200);font-family:var(--font-family-body);font-size:var(--font-size-2);font-size:15px;font-weight:var(--font-weight-regular);font-weight:var(--font-weight-bold);justify-content:space-between;letter-spacing:var(--letter-spacing-body);line-height:var(--line-height-lg);line-height:24px;overflow:hidden;padding:var(--padding-sm);text-overflow:ellipsis;white-space:nowrap;width:100%}.rockstargames-modules-core-headerc2907f284a3a3dd7c419856bdb6a99ee{align-items:center;border:none;border-bottom:1px solid var(--global-navigation-border-color);border-radius:var(--border-radius-md);box-shadow:0 0 1rem 0 var(--black-65);color:var(--standard-color);color:var(--color-body);cursor:pointer;display:flex}.rockstargames-modules-core-headerda0dbf9fd75e574727b5d795d7681bfd{height:var(--rem-1);transition:transform .2s ease-in-out;width:var(--rem-1)}.rockstargames-modules-core-headerc2907f284a3a3dd7c419856bdb6a99ee[data-state=open] .rockstargames-modules-core-headerda0dbf9fd75e574727b5d795d7681bfd{transform:rotate(180deg)}`, "", {
        version: 3,
        sources: ["webpack://./../../buildtime/legacy-design-system/less/gen9-mixins.less", "webpack://./compositional/components/AvatarMenu/index.less", "webpack://./../../buildtime/legacy-design-system/less/mixins.less"],
        names: [],
        mappings: "AA2QA,mEAKI,kBAAA,CAGA,0BAAA,CAFA,WAAA,CACA,mBAAA,CAIA,sBAAA,CAQA,cAAA,CAlBA,YAAA,CAYA,mCAAA,CACA,cAAA,CACA,iBAAA,CACA,eAAA,CAZA,sBAAA,CAaA,0BAAA,CAfA,sBAAA,CACA,2CAAA,CASA,iBAAA,CAQA,2CC9OJ,CD0NA,uEAwBQ,2BAAA,CADA,8BAAA,CAGA,iCAAA,CADA,0BC7OR,CDiPI,kJAEI,gCAAA,CACA,YC/OR,CDkPI,qIAEI,2BAAA,CADA,sBC/OR,CD8OI,yIAKQ,eChPZ,CAhEA,mEACI,mCAAA,CACA,YAkEJ,CA/DA,mEAKI,wBAAA,CAJA,YAAA,CACA,qBAAA,CACA,oBAAA,CAGA,6CAAA,CACA,eAAA,CAOA,mEAAA,CAJA,mEAAA,CAEA,uBAAA,CADA,oBAAA,CAEA,6EAkEJ,CDgQI,sFACI,SC9PR,CDgQI,4FACI,sBC9PR,CDgQI,4FACI,0CAAA,CAEA,WAAA,CADA,kBC7PR,CAvEA,mEAOI,uDAAA,CAAA,+CAAA,CACA,gCAAA,CACA,iEAAA,CACA,qCAAA,CALA,QAAA,CAMA,aAAA,CACA,uBAAA,CACA,kBAAA,CAVA,MAAA,CAWA,cAAA,CACA,eAAA,CACA,6CAAA,CAfA,cAAA,CAgBA,OAAA,CACA,UAAA,CAhBA,UAuFJ,CApEA,mEAKI,wBAAA,CAJA,YAAA,CACA,qBAAA,CACA,oBAAA,CAGA,6CAAA,CACA,oBAAA,CAOA,mEAAA,CAJA,mEAAA,CAEA,uBAAA,CADA,oBAAA,CAEA,UAuEJ,CDmNI,sFACI,SCjNR,CDmNI,4FACI,sBCjNR,CDmNI,4FACI,0CAAA,CAEA,WAAA,CADA,kBChNR,CA9EA,mEACI,kBAAA,CACA,wBAAA,CACA,QAAA,CACA,eAAA,CACA,mBAAA,CACA,sBAAA,CACA,+CAAA,CACA,uBAAA,CACA,SAAA,CACA,qDAgFJ,CA7EA,mEACI,QAAA,CACA,mBAAA,CACA,iBAAA,CACA,qBAAA,CACA,0BA+EJ,CA5EA,mEAQI,eAAA,CADA,WAAA,CALA,kBAAA,CAGA,cAAA,CADA,oBAAA,CAEA,SAAA,CALA,iBAAA,CAEA,mBAmFJ,CA5EI,sFACI,wDAAA,CAEA,uBAAA,CADA,qBA+ER,CCpHI,0BAAA,mED4CI,mBAAA,CAFA,OAAA,CACA,kBA+EN,CACF,CA3EA,mEAMI,kBAAA,CADA,WAAA,CAFA,MAAA,CAFA,iBAAA,CACA,KAAA,CAEA,UA+EJ,CA1EA,mEACI,iCAAA,CACA,sDAAA,CACA,qCAAA,CACA,4DAAA,CACA,YAAA,CACA,qBA4EJ,CAzEA,mEAOI,WAAA,CACA,6DAAA,CALA,iEAAA,CAMA,eAAA,CDpCA,uBAAA,CCyCA,0BAAA,CATA,aAAA,CAQA,eAAA,CAIA,wBAkFJ,CA5EA,sIArBI,iCAAA,CDvCA,mCAAA,CADA,4BAAA,CCqDA,cAAA,CDlDA,sCAAA,CAOA,mCAAA,CCkCA,6BAAA,CDxCA,yCAAA,CAFA,iCAAA,CCoDA,gBAAA,CAGA,eAAA,CAfA,yBAAA,CAcA,sBAAA,CAEA,kBAAA,CAnBA,UA6HJ,CAvGA,mEAQI,kBAAA,CAEA,WAAA,CACA,6DAAA,CARA,qCAAA,CASA,qCAAA,CAPA,2BAAA,CDvDA,uBAAA,CCsEA,cAAA,CAbA,YAgGJ,CAhFA,mEAEI,mBAAA,CACA,oCAAA,CAFA,kBAoFJ,CAjFI,uJACI,wBAmFR",
        sourcesContent: ["@import 'mixins.less';\n\n// Headlines\n.headline-6 () {\n    font-size: calc(var(--font-size-3) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n.headline-5 () {\n    font-size: calc(var(--font-size-4) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n.headline-4 () {\n    font-size: calc(var(--font-size-5) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n.headline-3 () {\n    font-size: calc(var(--font-size-6) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n.headline-3-bold () {\n    .headline-3();\n    font-weight: var(--font-weight-bold);\n    color: var(--color-override, var(--color-h));\n}\n\n.headline-2 () {\n    font-size: calc(var(--font-size-7) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-bold);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n.headline-1 () {\n    font-size: calc(var(--font-size-8) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-bold);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n.xLarge () {\n    font-size: calc(var(--font-size-9) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-bold);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n// Body\n.body-xs () {\n    font-size: var(--font-size-1);\n    font-family: var(--font-family-body);\n    line-height: var(--line-height-lg);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-body);\n    color: var(--color-body);\n}\n\n.body-xs-bold () {\n    .body-xs;\n    font-weight: var(--font-weight-bold);\n    color: var(--color-body);\n}\n\n.body-sm () {\n    font-size: var(--font-size-2);\n    font-family: var(--font-family-body);\n    line-height: var(--line-height-lg);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-body);\n    color: var(--color-body);\n}\n\n.body-sm-bold () {\n    .body-sm;\n    font-weight: var(--font-weight-bold);\n    color: var(--color-body);\n}\n\n.body-md () {\n    font-size: var(--font-size-3);\n    font-family: var(--font-family-body);\n    line-height: var(--line-height-lg);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-body);\n    color: var(--color-body);\n}\n\n.body-md-bold () {\n    .body-md;\n    font-weight: var(--font-weight-bold);\n    color: var(--color-body);\n}\n\n.body-lg () {\n    font-size: var(--font-size-4);\n    font-family: var(--font-family-body);\n    line-height: var(--line-height-lg);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-body);\n    color: var(--color-body);\n}\n\n.body-lg-bold () {\n    .body-lg;\n    font-weight: var(--font-weight-bold);\n    color: var(--color-body);\n}\n\n.handleFontDeclarationsGen9() {\n    h1 {\n        .headline-1;\n    }\n    h2 {\n        .headline-2;\n    }\n    h3 {\n        .headline-3;\n    }\n    h4 {\n        .headline-4;\n    }\n    h5 {\n        .headline-5;\n    }\n    p {\n        .body-md;\n    }\n}\n\n.handleMaxWidth(@max-width-default: 1000000px) {\n    width: 100%;\n    max-width: calc(\n        var(--max-width-dynamic, @max-width-default) +\n            var(--padding-dynamic, 0px) * 2\n    ) !important;\n    margin: 0 auto;\n}\n\n.handlePadding(@paddingSides: initial, @paddingTopBottom: initial) {\n    --padding-dynamic: @paddingSides;\n    --padding-dynamic-tb: @paddingTopBottom;\n\n    padding: var(--padding-t, var(--padding-dynamic-tb, 0))\n        var(--padding-dynamic, 0) var(--padding-b, var(--padding-dynamic-tb, 0))\n        var(--padding-dynamic, 0);\n}\n\n.commonContent() {\n    .handlePadding(var(--padding-sides), 0);\n    .handleMaxWidth(var(--content-max-width));\n}\n\n.backgroundIcon(@icon) {\n    background: url('../icons/@{icon}.svg') no-repeat center/1rem;\n}\n\n@iconBtnConfig: {\n    @small: {\n        size: 2rem;\n    };\n    @large: {\n        size: 3rem;\n    };\n};\n\n.iconBtn(@icon, @size: small) {\n    @lookup: @size;\n    width: @iconBtnConfig[@@lookup][size];\n    height: @iconBtnConfig[@@lookup][size];\n    position: relative;\n    cursor: pointer;\n    background: var(--black-65, rgba(0, 0, 0, 0.65));\n    border: 1px solid var(--white-100, #fff);\n    border-radius: 50%;\n    padding: 0;\n    transition: background 0.3s ease-in-out;\n    &::after {\n        .backgroundIcon(@icon);\n        content: '';\n        display: block;\n        height: 100%;\n        width: 100%;\n        position: absolute;\n        left: 0;\n        top: 0;\n        transition: 0.3s ease-in-out;\n    }\n\n    &:focus {\n        outline: none;\n        border: none;\n    }\n\n    .isTouchscreen({\n        &:active {\n            background: var(--white-100, #fff);\n            &::after {\n                filter: invert(1);\n            }\n        }\n    }, {\n        &:hover,\n        &:focus {\n            background: var(--white-100, #fff);\n            &::after {\n                filter: invert(1);\n            }\n        }\n    });\n}\n\n.iconBtnPlain(@icon, @size: small) {\n    @lookup: @size;\n    width: @iconBtnConfig[@@lookup][size];\n    height: @iconBtnConfig[@@lookup][size];\n    position: relative;\n    cursor: pointer;\n    padding: 0;\n\n    &::after {\n        content: '';\n        display: block;\n        height: 100%;\n        width: 100%;\n        position: absolute;\n        left: 0;\n        top: 0;\n        transition: 0.3s ease-in-out;\n        background: url('../icons/@{icon}.svg') no-repeat center/1.5rem;\n    }\n}\n\n.swiperBtn(@icon) {\n    .iconBtn(@icon, large);\n    background: var(--black-200);\n    border-radius: 0;\n    border: none;\n    &::after {\n        background-size: 1.5rem;\n    }\n}\n\n.pillBtn {\n    display: flex;\n    min-width: var(--rem-6);\n    padding: var(--padding-xs) var(--padding-sm);\n    justify-content: center;\n    align-items: center;\n    border: none;\n    border-radius: 100px;\n    background: var(--white-15);\n    cursor: pointer;\n\n    color: var(--white-100);\n    text-align: center;\n    font-family: var(--font-family-body);\n    font-size: 20px;\n    font-style: normal;\n    font-weight: 700;\n    line-height: var(--rem-125);\n\n    cursor: pointer;\n    transition: background-color 0.3s ease-in-out;\n\n    img {\n        margin-left: var(--grid-gap-xs);\n        height: var(--nav-icon-size);\n        width: var(--nav-icon-size);\n        transition: filter 0.3s ease-in-out;\n    }\n\n    &:hover,\n    &:focus {\n        background-color: var(--white-40);\n        outline: none;\n    }\n\n    &.selected {\n        color: var(--black-200);\n        background: var(--white-100);\n\n        img {\n            filter: invert();\n        }\n    }\n}\n\n.setGen9Root() {\n    --gen9-max-width: 2560px;\n    --content-max-width: var(--gen9-max-width);\n    --padding-sides: var(--padding-lg);\n    --content-padding: 0 var(--padding-sides);\n    flex: 1;\n    display: flex;\n    justify-content: center;\n\n    .xl({\n        --padding-sides: var(--padding-xl);\n    });\n\n    .handleFontDeclarationsGen9();\n}\n\n.scrollFade() {\n    // @note: this is breaking on firefox.\n    mask-image: linear-gradient(\n        to bottom,\n        var(--black-100) calc(100% - 48px),\n        transparent calc(100% + 16px)\n    );\n}\n\n.scrollbar() {\n    /* Firefox */\n    scrollbar-width: auto;\n    scrollbar-color: var(--scroll-thumb-color) var(--scroll-track-color);\n\n    /* Chrome, Edge, and Safari */\n    &::-webkit-scrollbar {\n        width: 8px;\n    }\n    &::-webkit-scrollbar-track {\n        background: transparent;\n    }\n    &::-webkit-scrollbar-thumb {\n        background-color: var(--scroll-thumb-color);\n        border-radius: 10px;\n        border: none;\n    }\n}\n\n.ifElse(@condition, @if-styles, @else-styles) {\n    @media @condition {\n        @if-styles();\n    }\n    @media not (@condition) {\n        @else-styles();\n    }\n}\n\n.isTouchscreen(@if-styles, @else-styles) {\n    .ifElse(~'(pointer: coarse)', @if-styles, @else-styles);\n}\n\n.mobile-landscape(@rules) {\n    @media only screen and (min-width: 480px) and (max-width: 1023px) and (orientation: landscape) {\n        @rules();\n    }\n}\n\n.caret(@color) {\n    .dropdownCaret(@color);\n}\n\n.horizontalScrollFade() {\n    mask-image: linear-gradient(\n        to right,\n        transparent,\n        rgba(0, 0, 0, 0.3) calc(var(--padding-sides) / 2),\n        #000 var(--padding-sides),\n        #000 calc(100% - var(--padding-sides)),\n        rgba(0, 0, 0, 0.3) calc(100% - (var(--padding-sides) / 2)),\n        transparent\n    );\n}\n\n// Accessibility\n.visuallyHidden() {\n    border: 0;\n    clip: rect(0 0 0 0);\n    height: 1px;\n    overflow: hidden;\n    padding: 0;\n    position: absolute;\n    white-space: nowrap;\n    width: 1px;\n}\n", "@import '@rsgweb/legacy-design-system/less/mixins.less';\n@import '@rsgweb/legacy-design-system/less/gen9-mixins.less';\n\n.avatarMenu {\n    --avatar-menu-overflow: var(--rem-1);\n    display: flex;\n}\n\n.avatarMenuContent {\n    display: flex;\n    flex-direction: column;\n    gap: var(--margin-sm);\n\n    background-color: initial;\n    max-height: calc(100vh - var(--header-height));\n    overflow-y: auto;\n    padding-bottom: var(--spacing-sm);\n    .scrollbar();\n    scrollbar-color: var(--scroll-thumb-color) var(--scroll-track-color);\n    scrollbar-width: auto;\n    scrollbar-gutter: stable;\n    width: calc(325px + var(--avatar-menu-overflow) + var(--avatar-menu-overflow));\n    padding: 6px var(--avatar-menu-overflow) var(--avatar-menu-overflow);\n}\n\n\n\n.avatarMenuMobile {\n    position: fixed;\n    z-index: 99;\n    left: 0;\n    right: 0;\n    bottom: 0;\n\n    backdrop-filter: blur(calc(var(--rem-1) * 1.75));\n    background-color: var(--white-15);\n    border-radius: var(--border-radius-md) var(--border-radius-md) 0 0;\n    border-top: .5px solid var(--white-65);\n    display: block;\n    height: -moz-min-content;\n    height: min-content;\n    margin-right: 0;\n    max-width: 100vw;\n    padding: 0 var(--padding-sm) var(--padding-sm);\n    right: 0;\n    width: 100%;\n}\n\n.avatarMenuContentMobile {\n    display: flex;\n    flex-direction: column;\n    gap: var(--margin-sm);\n\n    background-color: initial;\n    max-height: calc(100vh - var(--header-height));\n    overflow: hidden auto;\n    padding-bottom: var(--spacing-sm);\n    .scrollbar();\n    scrollbar-color: var(--scroll-thumb-color) var(--scroll-track-color);\n    scrollbar-width: auto;\n    scrollbar-gutter: stable;\n    width: 100%;\n    padding: 6px var(--avatar-menu-overflow) var(--avatar-menu-overflow);\n}\n\n.dragHandleBtn {\n    align-items: center;\n    background-color: initial;\n    border: 0px;\n    box-shadow: none;\n    height: var(--rem-2);\n    justify-content: center;\n    margin-left: calc(var(--base-rem-size) * -1.813);\n    min-height: var(--rem-2);\n    padding: 0px;\n    width: calc(100% + calc(var(--base-rem-size) * 3.625));\n}\n\n.dragHandle {\n    left: 50%;\n    pointer-events: none;\n    position: absolute;\n    top: var(--spacing-sm);\n    transform: translateX(-50%);\n}\n\n.scAvatarBtn {\n    position: relative;\n    border-radius: 100%;\n    width: var(--rem-15);\n    height: var(--rem-15);\n    cursor: pointer;\n    padding: 0;\n    border: none;\n    background: none;\n\n    &[data-img-set='true'] {\n        background-image: data-uri('./img/mugshot-bg.jpg');\n        background-size: cover;\n        background-position: center;\n    }\n\n    .mdMax({\n        order: 3;\n        width: var(--rem-2);\n        height: var(--rem-2);\n    });\n}\n\n.scAvatarBtnUser {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    border-radius: 100%;\n}\n\n.avatarMenuSection {\n    background-color: var(--black-100);\n    border: 1px solid var(--global-navigation-border-color);\n    border-radius: var(--border-radius-md);\n    box-shadow: 0 0 var(--avatar-menu-overflow) 0 var(--black-65);\n    display: flex;\n    flex-direction: column;\n}\n\n.avatarMenuSectionHeader {\n    width: 100%;\n    background-color: var(--black-200);\n    border-radius: var(--border-radius-md) var(--border-radius-md) 0 0;\n    padding: var(--padding-sm);\n    display: block;\n    justify-content: space-between;\n    border: none;\n    border-bottom: 1px solid var(--global-navigation-border-color);\n    box-shadow: none;\n    \n    .body-sm-bold;\n    \n    text-align: left;\n    color: var(--rockstar-gold);\n    font-size: 15px;\n    line-height: 24px;\n    text-transform: uppercase;\n    text-overflow: ellipsis;\n    overflow: hidden;\n    white-space: nowrap;\n}\n\n.avatarMenuSectionHeaderDropdown {\n    width: 100%;\n    background-color: var(--black-200);\n    border-radius: var(--border-radius-md);\n    border: 1px solid var(--border-color);\n    color: var(--standard-color);\n    padding: var(--padding-sm);\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    border: none;\n    border-bottom: 1px solid var(--global-navigation-border-color);\n    box-shadow: 0 0 1rem 0 var(--black-65);\n\n    .body-sm-bold;\n    font-size: 15px;\n    line-height: 24px;\n    text-overflow: ellipsis;\n    overflow: hidden;\n    white-space: nowrap;\n    cursor: pointer;\n}\n\n.avatarDropdownChevron {\n    width: var(--rem-1);\n    height: var(--rem-1);\n    transition: transform 0.2s ease-in-out;\n    .avatarMenuSectionHeaderDropdown[data-state='open'] & {\n        transform: rotate(180deg);\n    }\n}", "/*\n * New Design System:\n * 1. Breakpoints\n * 2. Typography\n * 3. Variables\n * 4. Utility\n *     4.1 Flex\n *     4.2 Grid\n *     4.3 Max-Width\n *     4.4 Images\n *     4.5 Padding\n *     4.6 Fonts\n *     4.7 Games\n *     4.8 Tina\n *     4.9 Hacks\n * 5. Presentational\n */\n\n/* 1. Breakpoints */\n@screen-sm: 0px;\n@screen-md: 768px;\n@screen-lg: 1024px;\n@screen-xl: 1920px;\n@screen-xxl: 2560px;\n@sm-min-width: @screen-sm;\n@md-min-width: @screen-md;\n@lg-min-width: @screen-lg;\n@xl-min-width: @screen-xl;\n@xxl-min-width: @screen-xxl;\n@sm-max-width: (@md-min-width - 1px);\n@md-max-width: (@lg-min-width - 1px);\n@lg-max-width: (@xl-min-width - 1px);\n@xl-max-width: (@xxl-min-width - 1px);\n\n.sm(@rules) {\n    .smMin(@rules);\n}\n.smMin(@rules) {\n    @media (min-width: @sm-min-width) {\n        @rules();\n    }\n}\n.smMax(@rules) {\n    @media (max-width: @sm-max-width) {\n        @rules();\n    }\n}\n.smOnly(@rules) {\n    @media (min-width: @sm-min-width) and (max-width: @sm-max-width) {\n        @rules();\n    }\n}\n.md(@rules) {\n    .mdMin(@rules);\n}\n.mdMin(@rules) {\n    @media (min-width: @md-min-width) {\n        @rules();\n    }\n}\n.mdMax(@rules) {\n    @media (max-width: @md-max-width) {\n        @rules();\n    }\n}\n.mdOnly(@rules) {\n    @media (min-width: @md-min-width) and (max-width: @md-max-width) {\n        @rules();\n    }\n}\n.lg(@rules) {\n    .lgMin(@rules);\n}\n.lgMin(@rules) {\n    @media (min-width: @lg-min-width) {\n        @rules();\n    }\n}\n.lgMax(@rules) {\n    @media (max-width: @lg-max-width) {\n        @rules();\n    }\n}\n.lgOnly(@rules) {\n    @media (min-width: @lg-min-width) and (max-width: @lg-max-width) {\n        @rules();\n    }\n}\n.xl(@rules) {\n    .xlMin(@rules);\n}\n.xlMin(@rules) {\n    @media (min-width: @xl-min-width) {\n        @rules();\n    }\n}\n.xlMax(@rules) {\n    @media (max-width: @xl-max-width) {\n        @rules();\n    }\n}\n.xlOnly(@rules) {\n    @media (min-width: @xl-min-width) and (max-width: @xl-max-width) {\n        @rules();\n    }\n}\n.xxl(@rules) {\n    .xxlMin(@rules);\n}\n.xxlMin(@rules) {\n    @media (min-width: @xxl-min-width) {\n        @rules();\n    }\n}\n\n.notoBackup(@varName; @stdFont) {\n    @{varName}: @stdFont;\n\n    &:lang(ja_jp) {\n        @{varName}: @stdFont, NotoSansJP;\n    }\n    &:lang(zh_hans) {\n        @{varName}: @stdFont, NotoSansSC;\n    }\n    &:lang(zh_tw) {\n        @{varName}: @stdFont, NotoSansTC;\n    }\n}\n\n/* 2. Typography */\n.handleFontDeclarations() {\n    .notoBackup(--rsg-font-family-std, HelveticaNowText);\n    .notoBackup(--rsg-font-family-h, HelveticaNowDisplayBold);\n    .notoBackup(--gta-font-family-std, Chalet);\n    .notoBackup(--gta-font-family-h, ChaletComprime);\n    .notoBackup(--gta-font-family-badge, Pricedown);\n    .notoBackup(--rdr-font-family-std, HapnaSlabSerif);\n    .notoBackup(--rdr-font-family-h, RDRLino-Regular);\n    .notoBackup(--rdr-font-family-newswire-subtitle, HapnaSlabSerif);\n    .notoBackup(--rdr-area-font, RDRCatalogueBold);\n\n    --header-multiplier: var(--header-numerator, var(--root-font-size)) /\n        var(--root-font-size);\n    font-family: var(--font-family-std, HelveticaNowText);\n    font-weight: var(--font-weight-std, 400);\n    letter-spacing: var(--letter-spacing-std, -0.025em);\n    line-height: var(--line-height-std, 1.6);\n    font-size: calc(var(--root-font-size) * 1px);\n    -webkit-font-smoothing: antialiased;\n\n    h1.large,\n    h1,\n    h2,\n    h3,\n    h4 {\n        font-family: var(--font-family-h, HelveticaNowDisplayBold);\n        letter-spacing: var(--letter-spacing-h, -0.025em);\n    }\n    h1.large,\n    h1 {\n        font-weight: var(--font-weight-h1, var(--font-weight-h, 700));\n        text-transform: var(--text-transform-h1, var(--text-transform-h, none));\n        line-height: var(--line-height-h1, var(--line-height-h, 1.1));\n    }\n\n    h1.large {\n        font-size: calc(var(--font-size-8) * var(--header-multiplier));\n    }\n    h1 {\n        font-size: calc(var(--font-size-7) * var(--header-multiplier));\n    }\n    h2 {\n        font-size: calc(var(--font-size-6) * var(--header-multiplier));\n        font-weight: var(--font-weight-h2, var(--font-weight-h, 700));\n        text-transform: var(--text-transform-h2, var(--text-transform-h, none));\n        line-height: var(--line-height-h, 1.1);\n    }\n    h3 {\n        font-size: calc(var(--font-size-5) * var(--header-multiplier));\n        font-weight: var(--font-weight-h3, var(--font-weight-h, 700));\n        text-transform: var(--text-transform-h3, var(--text-transform-h, none));\n        line-height: var(--line-height-h, 1.1);\n\n        &[data-context='newswire-subtitle'] {\n            font-size: calc(\n                var(--font-size-5) *\n                    var(\n                        --h3-numerator-override-newswire-subtitle,\n                        var(--header-multiplier)\n                    )\n            );\n            font-weight: var(\n                --font-weight-newswire-subtitle,\n                var(--font-weight-h)\n            );\n            font-family: var(\n                --font-family-newswire-subtitle,\n                var(--font-family-h)\n            );\n            text-transform: var(--text-transform-newswire-subtitle);\n        }\n\n        .isRdr({\n            font-weight: var(--font-weight-h3, var(--font-weight-h, 400));\n        });\n    }\n\n    h4,\n    h5,\n    h6 {\n        font-size: calc(var(--font-size-4) * var(--header-multiplier));\n        line-height: var(--line-height-h, 1.1);\n    }\n}\n\n.handleColors() {\n    h1.large,\n    h1 {\n        color: var(--color-h-dynamic, var(--color-h1, var(--color-h, inherit)));\n    }\n    h2 {\n        color: var(--color-h-dynamic, var(--color-h2, var(--color-h, inherit)));\n    }\n    h3 {\n        color: var(--color-h-dynamic, var(--color-h3, var(--color-h, inherit)));\n\n        &[data-context='newswire-subtitle'] {\n            color: var(\n                --color-subtitle-dynamic,\n                var(--color-h-dynamic, var(--color-h3, var(--color-h, inherit)))\n            );\n        }\n    }\n    h4,\n    h5,\n    h6 {\n        color: var(--color-h-dynamic, var(--color-h, inherit));\n    }\n    background-color: var(--background-color, transparent);\n\n    [template='community'] {\n        --time-color: var(--body-color, #2d2d2d);\n        --breadcrumb-separator-filter-invert: invert(0);\n\n        main {\n            color: var(--color-h, #161616);\n        }\n        p {\n            color: var(--body-color, #2d2d2d);\n        }\n    }\n}\n\n/* 3. Variables */\n.resetVariables() {\n    --text-section-max-width: 640px;\n    --base-pixel-size: 12px;\n    --base-rem-size: 0.75rem;\n    --half-rem-size: calc(var(--base-rem-size) / 2);\n    --twice-rem-size: calc(var(--base-rem-size) * 2);\n    --section-margin-bottom: calc(var(--base-rem-size) * 4);\n    --header-height: 80px;\n    --breadcrumbs-height: calc(var(--base-pixel-size) * 3.5);\n    --max-width: 1920px;\n    --standard-color: #fcaf17;\n    --color-h: #ffffff;\n    --body-color: #e8e8e8;\n    --background-color: #0b0b0b;\n    --card-background-color: #000;\n    --border-color: #282828;\n    --privacy-banner-height: 0px;\n    --game-header-height: 50px;\n    --standard-grid-gap: calc(var(--base-rem-size) * 2);\n    --image-margin-bottom: inherit;\n    --image-rounding: 0px;\n    --image-rounding-static: 16px;\n    --image-rounding-static-sm: 8px;\n    --image-rounding-static-xs: 4px;\n\n    --grid-gap-static-xs: 0.5rem;\n    --grid-gap-static-sm: 1rem;\n    --grid-gap-static-md: 2rem;\n    --grid-gap-static-lg: 4rem;\n    --grid-gap-static-xl: 8rem;\n    .smMax({--grid-gap-static-lg: 2rem; --grid-gap-static-xl: 4rem;});\n\n    --max-width-static: 640px;\n    --max-width-static-md: 1088px;\n    --max-width-static-lg: 1920px;\n    --max-width-static-xl: 2560px;\n    .xxlMin({--max-width-static-md: 1440px;});\n\n    --margin-static: 0 0 2rem;\n    --h2-margin: 2rem 0 0 0;\n\n    --padding-sides: var(--grid-gap-static-lg);\n    --padding-top-bottom: var(--padding-sides);\n    --padding-static: var(--padding-sides);\n}\n\n/* 4. Utility */\n/* 4.1 Flex */\n.flex() {\n    display: flex;\n    flex-flow: column;\n}\n.horizontalCenterChildren() {\n    display: flex;\n    justify-content: center;\n}\n.verticalCenterChildren() {\n    display: flex;\n    align-items: center;\n}\n.flexCenterChildren() {\n    .horizontalCenterChildren();\n    .verticalCenterChildren();\n}\n\n/* 4.2 Grid */\n.gridMinWidth(@minWidth: 480px; @rowGap: var(--standard-grid-gap); @colGap: var(--standard-grid-gap); @autoType: 'auto-fit') {\n    display: grid;\n    grid-row-gap: @rowGap;\n    grid-column-gap: @colGap;\n    grid-template-columns: ~'repeat(@{autoType}, minmax(@{minWidth}, 1fr))';\n}\n.gridHideExtraRows(@colGap: var(--standard-grid-gap)) {\n    ::-webkit-scrollbar {\n        display: none;\n    }\n    -ms-overflow-style: none;\n    display: grid;\n    grid-auto-flow: column;\n    grid-column-gap: @colGap;\n    overflow-y: hidden;\n    scroll-snap-type: x mandatory;\n    > * {\n        scroll-snap-align: start;\n    }\n    --per-page: 4;\n    .lgMax({--per-page: 3;});\n    .mdMax({--per-page: 2;});\n    .smMax({--per-page: 1;});\n\n    grid-auto-columns: calc(\n        100% / var(--per-page) - (var(--per-page) - 1) / var(--per-page) *\n            @colGap\n    );\n}\n.gridNumCols(@numInitialItems) {\n    display: grid;\n    grid-gap: var(--standard-grid-gap);\n    .smMax({grid-template-columns: repeat(1, minmax(0px, 1fr)) ;});\n    @media screen and (min-width: @screen-sm) and (max-width: @md-max-width) {\n        grid-template-columns: repeat(2, minmax(0px, 1fr));\n    }\n    @media screen and (min-width: @screen-lg) {\n        grid-template-columns: repeat(4, minmax(0px, 1fr));\n    }\n}\n.gridNumColsSmall(@colGap: var(--padding-top-bottom); @rowGap: var(--padding-top-bottom)) {\n    display: grid;\n    grid-row-gap: @rowGap;\n    grid-column-gap: @colGap;\n    grid-template-columns: repeat(1, minmax(0px, 1fr));\n    .md({grid-template-columns: repeat(2, minmax(0px, 1fr)) ;});\n}\n\n.standardLayoutGridItem(@maxWidth: var(--max-width-static-md), @padding: var(--padding-static)) {\n    .handleMaxWidth(@maxWidth);\n    .handlePadding(@padding);\n}\n\n.handleGridStyles(@grid-gap-dynamic: var(--grid-gap-static-md)) {\n    --grid-gap-dynamic: @grid-gap-dynamic;\n    display: grid;\n    grid-template-columns: repeat(var(--grid-num-columns, 1), minmax(0px, 1fr));\n    grid-template: var(\n        --grid-template-override,\n        auto / repeat(var(--grid-num-columns, 1), minmax(0, 1fr))\n    );\n    grid-gap: var(--grid-gap-dynamic);\n    align-items: var(--grid-align-items);\n    align-content: var(--grid-align-content);\n    align-self: var(--grid-align-self);\n    justify-items: var(--grid-justify-items);\n    justify-content: var(--grid-justify-content);\n    justify-self: var(--grid-justify-self);\n}\n\n/* 4.3 Max-Width */\n.maxWidth(@padding: 0) {\n    max-width: var(--max-width);\n    width: 100%;\n    margin: 0 auto;\n    padding-left: @padding;\n    padding-right: @padding;\n}\n.maxWidthWithNormalPadding() {\n    .maxWidth(var(--padding-sides));\n}\n\n.handleMaxWidth(@max-width-default: 1000000px) {\n    width: 100%;\n    max-width: calc(\n        var(--max-width-dynamic, @max-width-default) +\n            var(--padding-dynamic, 0px) * 2\n    ) !important;\n    margin: 0 auto;\n}\n\n.breakout(@max-width-default: 100vw) {\n    @margin: calc((@max-width-default / 2) * -1);\n    width: @max-width-default;\n    max-width: @max-width-default !important;\n    position: relative;\n    left: 50%;\n    right: 50%;\n    margin-left: @margin;\n    margin-right: @margin;\n}\n\n.fullWidth() {\n    .breakout;\n}\n\n/* 4.4 Images */\n.handleAspectRatio() {\n    --aspect-ratio-default: 1;\n    .lgMin({\n        --aspect-ratio-default: 16/9;\n    });\n\n    position: relative;\n    &:before {\n        content: '';\n        height: 0;\n        width: 100%;\n        display: block;\n        padding-bottom: calc(\n            100% / calc(var(--aspect-ratio, var(--aspect-ratio-default)))\n        );\n    }\n    > * {\n        position: absolute;\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 100%;\n    }\n}\n.setAspectRatio(@ratio) {\n    --aspect-ratio: @ratio;\n    .handleAspectRatio;\n}\n\n.handleParallaxPerspective() {\n    position: fixed;\n    width: 100%;\n    height: 100%;\n    overflow-x: hidden;\n    overflow-y: scroll;\n    perspective: var(--parallax-perspective);\n    perspective-origin: 0 0;\n}\n.handleParallaxDistance() {\n    transform: translateZ(var(--parallax-distance))\n        scale(\n            calc(\n                (var(--parallax-perspective) - var(--parallax-distance)) /\n                    var(--parallax-distance)\n            )\n        );\n}\n\n.handleImageRounding() {\n    border-radius: var(--image-rounding-dynamic, 0px);\n}\n\n/* 4.5 Padding */\n.handlePadding(@paddingSides: initial, @paddingTopBottom: initial) {\n    --padding-dynamic: @paddingSides;\n    --padding-dynamic-tb: @paddingTopBottom;\n\n    padding: var(--padding-t, var(--padding-dynamic-tb, 0))\n        var(--padding-dynamic, 0) var(--padding-b, var(--padding-dynamic-tb, 0))\n        var(--padding-dynamic, 0);\n}\n\n/* 4.6 Fonts */\n.loadFont(@family, @weight: 400, @style: normal, @file: @family) {\n    @font-face {\n        font-family: @family;\n        font-style: @style;\n        font-weight: @weight;\n        src: url('../fonts/@{file}.woff') format('woff');\n    }\n}\n.loadFontWoff2(@family, @weight: 400, @style: normal, @file: @family) {\n    @font-face {\n        font-family: @family;\n        font-style: @style;\n        font-weight: @weight;\n        src: url('../fonts/@{file}.woff2') format('woff2');\n    }\n}\n.fontClip(@backgroundImg) {\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n    @backgroundImg();\n}\n\n/* 4.7 Games */\n.gta(@rules) {\n    [data-game^='gta'] {\n        @rules();\n    }\n}\n\n.isGta(@rules) {\n    [data-game^='gta'] & {\n        @rules();\n    }\n}\n\n.rdr(@rules) {\n    [data-game='rdo'],\n    [data-game^='rdr'] {\n        @rules();\n    }\n}\n\n.isRdr(@rules) {\n    [data-game='rdo'] &,\n    [data-game^='rdr'] & {\n        @rules();\n    }\n}\n\n/* 4.8 Tina */\n.tinaTextField() {\n    padding: var(--tina-padding-small);\n    border-radius: var(--tina-radius-small);\n    background: var(--tina-color-grey-0);\n    color: var(--tina-color-grey-10);\n    background-color: var(--tina-color-grey-0);\n    border: 1px solid var(--tina-color-grey-2);\n    box-shadow: 0 0 0 2px transparent;\n    margin-bottom: 14px;\n}\n\n/* 4.9 Hacks */\n.safariBorderRadiusOverflowFix() {\n    // https://stackoverflow.com/questions/49066011/overflow-hidden-with-border-radius-not-working-on-safari\n    -webkit-mask-image: -webkit-radial-gradient(white, black);\n}\n\n.forceGpuRendering() {\n    // https://web.dev/animations-guide/#force\n    transform: translateZ(0);\n}\n\n/* 5. Presentational */\n@locales: en_us, fr_fr, de_de, es_es, es_mx, it_it, pt_br, pl_pl, ru_ru, ja_jp,\n    ko_kr, zh_tw, zh_hans;\n\n.placeholder(@rules) {\n    &::-webkit-input-placeholder {\n        @rules();\n    }\n    &:-moz-placeholder {\n        @rules();\n    }\n    &::-moz-placeholder {\n        @rules();\n    }\n    &:-ms-input-placeholder {\n        @rules();\n    }\n}\n\n.bgImg() {\n    background-size: cover;\n    background-position: center center;\n    background-repeat: no-repeat;\n}\n\n.themeDark() {\n    color: #e8e8e8;\n    --tag-color: #e8e8e8;\n}\n\n.outbound() {\n    content: '';\n    display: inline-block;\n    background-size: 100%;\n    background-repeat: no-repeat;\n    background-position: 0% 50%;\n    vertical-align: baseline;\n    margin-left: var(--grid-gap-static-xs);\n    width: 1rem;\n    height: 1rem;\n    background-image: data-uri('../img/outbound.svg');\n}\n\n.blurryBg() {\n    transition: filter 0.8s;\n    filter: blur(var(--blur-because-in-bg, 0px));\n}\n\n.fancyLink() {\n    position: relative;\n    background: transparent;\n    padding: 0;\n    z-index: 1;\n    @media (min-width: @screen-sm) {\n        transition: all 0.2s ease;\n        &:before {\n            content: '';\n            display: block;\n            position: absolute;\n            bottom: 0;\n            left: -0.1rem;\n            width: calc(100% + 0.2rem);\n            height: 2px;\n            background: var(--body-color);\n            transition: all 0.2s ease;\n            z-index: -1;\n            border-radius: 0.25rem;\n        }\n        &:hover {\n            color: #161616;\n\n            &:before {\n                left: -0.25rem;\n                width: calc(100% + 0.5rem);\n                height: 100%;\n            }\n        }\n    }\n    img {\n        display: block;\n    }\n}\n.stdHover() {\n    transition:\n        color 0.2s ease,\n        opacity 0.2s ease;\n    &:hover {\n        color: var(--standard-color);\n        opacity: 1;\n    }\n}\n.stdIconHover() {\n    &:hover {\n        filter: brightness(0) saturate(100%) invert(76%) sepia(15%)\n            saturate(5173%) hue-rotate(348deg) brightness(105%) contrast(98%);\n    }\n}\n.card() {\n    .handleImageRounding;\n    --image-rounding-dynamic: var(--image-rounding-static-sm);\n    background: var(--card-background-color);\n    overflow: hidden;\n    display: flex;\n    flex-flow: column;\n    transition: transform 0.2s ease;\n    border: 1px solid var(--border-color);\n    .info {\n        .handleGridStyles;\n        --grid-gap-dynamic: var(--grid-gap-static-xs);\n        padding: 2rem 1.5rem;\n        .title {\n            --line-height-h: 1.3;\n            color: var(--color-h);\n        }\n    }\n}\n\n.cardHover() {\n    transition:\n        transform 0.3s cubic-bezier(0, 0, 0.5, 1),\n        box-shadow 0.3s cubic-bezier(0, 0, 0.5, 1);\n    box-shadow: 0px 0px 40px -25px rgba(0, 0, 0, 0);\n\n    &:hover {\n        transform: scale(1.025);\n        box-shadow: 0px 30px 40px -25px rgba(0, 0, 0, 1);\n    }\n}\n\n.cardSecondary() {\n    .card();\n    .info {\n        padding: 1.5rem;\n    }\n    .title {\n        font-size: var(--font-size-3);\n        font-weight: 400;\n    }\n}\n\n.cardTertiary() {\n    .cardSecondary();\n    --image-rounding-dynamic: 0;\n    --card-background-color: transparent;\n    grid-gap: var(--grid-gap-static-sm);\n    overflow: unset;\n    border: none;\n    .info {\n        padding: 0;\n    }\n    .img {\n        .handleImageRounding;\n        --image-rounding-dynamic: var(--image-rounding-static-sm);\n    }\n}\n\n.standardPage() {\n    .maxWidthWithNormalPadding;\n    padding-top: var(--padding-top-bottom);\n    padding-bottom: var(--padding-top-bottom);\n}\n\n.dropdownThing(@defaultDeg: 0deg; @openDeg: 180deg) {\n    position: relative;\n    padding-right: calc(var(--grid-gap-static-xs) + 24px);\n    .dropdownCaret(yellow; @defaultDeg; @openDeg);\n}\n.dropdownCaret(@color; @defaultDeg: 0deg; @openDeg: 180deg) {\n    &:after {\n        display: inline-block;\n        content: '';\n        position: absolute;\n        top: 0;\n        right: 0;\n        @img: '../img/dropdown-@{color}.svg';\n        background-image: data-uri(@img);\n        background-repeat: no-repeat;\n        width: image-width(@img);\n        height: 100%;\n        background-position: center;\n        background-size: 100%;\n        transform: rotate(@defaultDeg);\n        transition: transform 0.3s;\n        .open& {\n            transform: rotate(@openDeg);\n        }\n    }\n}\n\n.sectionHeader() {\n    margin: 0 0 1.5rem;\n    font-size: var(--font-size-5);\n    font-family: var(--font-family-h);\n    font-weight: var(--font-weight-h);\n    --line-height-h: 1.3;\n\n    .xlMin ({\n        font-size: var(--font-size-6);\n    });;\n}\n.sectionHeaderSmall() {\n    .sectionHeader;\n    font-size: var(--font-size-4);\n\n    .xlMin ({\n        font-size: var(--font-size-5);\n    });;\n}\n\n.tag() {\n    color: var(--tag-color, var(--body-color));\n    font-weight: 700;\n    font-size: var(--font-size-2);\n    line-height: 1.6;\n}\n\n.date() {\n    .tag;\n    font-weight: 400;\n    opacity: 0.65;\n}\n.animationFadeInUp() {\n    :global {\n        animation: globalFadeInUp 0.75s;\n        animation-play-state: paused;\n    }\n}\n.animationPaused() {\n    animation-play-state: paused;\n}\n.animationRunning() {\n    animation-play-state: running;\n}\n\n.button() {\n    font-weight: 700;\n    align-self: center;\n    display: inline-block;\n    text-transform: uppercase;\n    background: transparent;\n    border: 1px solid var(--color-h);\n    padding: 1rem 3rem;\n    color: inherit;\n    cursor: pointer;\n    border-radius: 0.25rem;\n    color: var(--color-h);\n    line-height: 100%;\n    transition: all 0.2s ease;\n    &:focus,\n    &:hover {\n        background: var(--standard-color);\n        border-color: var(--standard-color);\n        color: #161616;\n    }\n    &.secondary {\n        .fancyLink;\n        outline: none;\n        border: none;\n        text-transform: none;\n        font-weight: 400;\n        line-height: unset;\n        .smMin ({\n            &:before {\n                background: var(--standard-color);\n                height:4px;\n            }\n            &:focus,\n            &:hover {\n                &:before {\n                    left: -0.5rem;\n                    width: calc(100% + 1rem);\n                    height: 100%;\n                }\n            }\n         });;\n    }\n    &[disabled] {\n        opacity: 0.5;\n    }\n}\n\n.expandToEdges() {\n    margin-top: calc(var(--padding-top-bottom) * -1);\n    margin-left: calc(var(--padding-sides) * -1);\n    width: 100vw;\n    width: calc(100% + calc(var(--padding-sides) * 2));\n}\n\n.shadow(@boxShadow: 0 10px 30px rgba(0, 0, 0, 0.5)) {\n    // border: 1px solid rgba(0, 0, 0, 0.15);\n    box-shadow: @boxShadow;\n}\n.shadowTop() {\n    box-shadow: -3px -3px 6px 0 rgba(0, 0, 0, 0.2);\n}\n\n.aspect-ratio(@width, @height, @selector: div, @pre: ~'') {\n    @supports not (aspect-ratio: @width / @height) {\n        position: relative;\n        &:before {\n            display: block;\n            content: '';\n            width: 100%;\n            padding-top: calc((@height / @width) * 100%);\n        }\n        > @{pre}@{selector} {\n            position: absolute;\n            top: 0;\n            left: 0;\n            right: 0;\n            bottom: 0;\n            width: 100% !important;\n            height: 100% !important;\n        }\n    }\n\n    @supports (aspect-ratio: @width / @height) {\n        @{pre}@{selector} {\n            aspect-ratio: @width / @height !important;\n            width: 100% !important;\n            height: auto !important;\n        }\n    }\n}\n.unset-aspect-ratio(@selector, @pre: ~'') {\n    @supports not (aspect-ratio: 1/1) {\n        position: unset;\n        &:before {\n            display: none;\n        }\n        > @{pre}@{selector} {\n            position: unset;\n            width: 100% !important;\n            height: unset !important;\n        }\n    }\n\n    @supports (aspect-ratio: 1/1) {\n        @{pre}@{selector} {\n            aspect-ratio: unset !important;\n        }\n    }\n}\n\n.rockstarTypography() {\n    --font-family-std: NeueHelveticaPaneuropean, sans-serif;\n    --leter-spacing-std: 0;\n\n    font-size: var(--font-size-2);\n    font-family: var(--font-family-std);\n    letter-spacing: var(--leter-spacing-std);\n\n    button {\n        letter-spacing: var(--leter-spacing-std);\n    }\n}\n\n.setNodeFontSizing() {\n    // TODO audit this. .5rem is very small.\n    --font-size-1: 0.75rem;\n\n    --font-size-2: 0.75rem;\n    --font-size-3: 1rem;\n    --font-size-4: 1.25rem;\n    --font-size-5: 1.5rem;\n    --font-size-6: 2rem;\n    --font-size-7: 2.5rem;\n    --font-size-8: 3rem;\n    --font-size-9: 4rem;\n    --font-size-10: 5rem;\n}\n\n.setRootFontSizing() {\n    .sm({--root-font-size: 16;});\n    .md({--root-font-size: 18;});\n    .lg({--root-font-size: 20;});\n    .xl({--root-font-size: 22;});\n}\n\n.button-text () {\n    font-size: var(--font-size-4);\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-sm);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-h);\n    text-transform: uppercase;\n}\n\n.button-text-sm () {\n    .button-text;\n    font-size: var(--font-size-3);\n}\n\n.button-text-md () {\n    .button-text;\n    font-size: var(--font-size-4);\n    padding: 0 var(--padding-md);\n}\n\n.button-text-lg () {\n    .button-text;\n    font-size: var(--font-size-5);\n    padding: 0 var(--padding-lg);\n}\n\n.button-text-xl () {\n    .button-text;\n    font-size: var(--font-size-7);\n    padding: 0 var(--padding-xl);\n}\n\n.cta-button() {\n    @import '../less/gen9-vars';\n\n    --button-text-color-hover: var(--white-100);\n\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: center;\n    gap: var(--grid-gap-xs, 0.5rem);\n\n    background: var(\n        --button-background-color,\n        var(--black-65, hsla(0, 0%, 7%, 0.65))\n    );\n    border: 1px solid var(--white-100, #fff);\n    border-radius: var(--border-radius-sm, 4px);\n    color: var(--button-text-color, var(--white-100));\n    cursor: pointer;\n    padding: 0 var(--padding-sm);\n\n    width: 100%;\n    height: var(--button-height-3, 3rem);\n\n    transition: all 0.3s ease-in-out;\n\n    &[data-brand='reddeadredemption'],\n    [data-brand='reddeadredemption'] & {\n        --accent-color: #cc0000;\n        --font-family-h: RDRUltra;\n\n        :lang(pl_pl) {\n            --font-family-h: RDRUltra, NeueHelveticaPaneuropean;\n        }\n    }\n\n    &[data-brand='bully'],\n    [data-brand='bully'] & {\n        --accent-color: #f8ad00;\n        --font-family-h: HelveticaNowDisplayBold;\n        --button-background-color: var(--white-100);\n        --button-background-color-hover: var(--accent-color);\n        --button-text-color: var(--black-100);\n        --button-text-color-hover: var(--black-100);\n\n        backdrop-filter: blur(25px);\n        padding: 0 var(--padding-md, 32px);\n    }\n\n    img {\n        height: 1rem;\n        width: auto;\n    }\n\n    .label {\n        .button-text();\n        display: flex;\n        flex-shrink: 0;\n    }\n\n    &.primary {\n        color: var(--black-100);\n        background-color: var(--white-100);\n    }\n\n    &:hover {\n        border-color: var(--accent-color, var(--btn-active-color));\n        background-color: var(--accent-color, var(--btn-active-color));\n        color: var(--button-text-color-hover, var(--btn-active-color));\n\n        &.primary {\n            color: var(--button-text-color-hover, var(--white-100));\n        }\n    }\n\n    @media (min-width: 1280px) {\n        padding: 0 var(--padding-md);\n    }\n\n    @media (min-width: 768px) and (max-width: 1539px) {\n        height: 2.5rem;\n\n        img {\n            height: 1rem;\n        }\n\n        .label {\n            .button-text-sm();\n        }\n    }\n}\n"],
        sourceRoot: ""
      }]), c.locals = {
        pillBtn: "rockstargames-modules-core-headerff5e3320dd70a4dcaccbe336302b4714",
        selected: "rockstargames-modules-core-headercb3e82faf685657df2d72233f5467a60",
        avatarMenu: "rockstargames-modules-core-headerc21d08286895e5d5d2fc1a7586c6a11d",
        avatarMenuContent: "rockstargames-modules-core-headerfbdd0b16d9b61ed0dd3f5e76b9a1f9de",
        avatarMenuMobile: "rockstargames-modules-core-headerb68abcf23dae4ff8aa054bd9ff446a9a",
        avatarMenuContentMobile: "rockstargames-modules-core-headereef2738c4b5cf2f7e69238683d6d503f",
        dragHandleBtn: "rockstargames-modules-core-headeredeb54ea736b008d967474a5c9b63a33",
        dragHandle: "rockstargames-modules-core-headerbe1cd057f4c550474a77b822a5eb729e",
        scAvatarBtn: "rockstargames-modules-core-headerb82b1a7297d0e2f91a3ac183adcb21c4",
        scAvatarBtnUser: "rockstargames-modules-core-headerfa4a01e9a53561bce475cd223f7cafe1",
        avatarMenuSection: "rockstargames-modules-core-headerf43b908943d5a326555406c89c919f3a",
        avatarMenuSectionHeader: "rockstargames-modules-core-headerc63374d1c5bca5343c48709064ac9ecc",
        avatarMenuSectionHeaderDropdown: "rockstargames-modules-core-headerc2907f284a3a3dd7c419856bdb6a99ee",
        avatarDropdownChevron: "rockstargames-modules-core-headerda0dbf9fd75e574727b5d795d7681bfd"
      };
      const g = c
    },
    7288: (a, e, n) => {
      n.d(e, {
        A: () => d
      });
      var t = n(42587),
        o = n.n(t),
        r = n(15081),
        i = n.n(r)()(o());
      i.push([a.id, ".rockstargames-modules-core-headerdab8756ef45d0360cfe667505e44e939{align-items:center;background:var(--white-15);border:none;border-radius:100px;color:var(--white-100);cursor:pointer;display:flex;font-family:var(--font-family-body);font-size:20px;font-style:normal;font-weight:700;justify-content:center;line-height:var(--rem-125);min-width:var(--rem-6);padding:var(--padding-xs) var(--padding-sm);text-align:center;transition:background-color .3s ease-in-out}.rockstargames-modules-core-headerdab8756ef45d0360cfe667505e44e939 img{height:var(--nav-icon-size);margin-left:var(--grid-gap-xs);transition:filter .3s ease-in-out;width:var(--nav-icon-size)}.rockstargames-modules-core-headerdab8756ef45d0360cfe667505e44e939:focus,.rockstargames-modules-core-headerdab8756ef45d0360cfe667505e44e939:hover{background-color:var(--white-40);outline:none}.rockstargames-modules-core-headerdab8756ef45d0360cfe667505e44e939.rockstargames-modules-core-headerade3ff1f5041701c0a98cb7198ece826{background:var(--white-100);color:var(--black-200)}.rockstargames-modules-core-headerdab8756ef45d0360cfe667505e44e939.rockstargames-modules-core-headerade3ff1f5041701c0a98cb7198ece826 img{filter:invert()}@media not all and (width <= 1024px){.rockstargames-modules-core-headerd46e4a60f402edcf62521fefd6a9289f{display:none!important;visibility:hidden}}@media not all and (width > 1024px){.rockstargames-modules-core-headerf1fc26697d7f376112d0fcd256b22a9a{display:none!important;visibility:hidden}}", "", {
        version: 3,
        sources: ["webpack://./../../buildtime/legacy-design-system/less/gen9-mixins.less", "webpack://./compositional/components/Breakpoint/index.less"],
        names: [],
        mappings: "AA2QA,mEAKI,kBAAA,CAGA,0BAAA,CAFA,WAAA,CACA,mBAAA,CAIA,sBAAA,CAQA,cAAA,CAlBA,YAAA,CAYA,mCAAA,CACA,cAAA,CACA,iBAAA,CACA,eAAA,CAZA,sBAAA,CAaA,0BAAA,CAfA,sBAAA,CACA,2CAAA,CASA,iBAAA,CAQA,2CC9OJ,CD0NA,uEAwBQ,2BAAA,CADA,8BAAA,CAGA,iCAAA,CADA,0BC7OR,CDiPI,kJAEI,gCAAA,CACA,YC/OR,CDkPI,qIAEI,2BAAA,CADA,sBC/OR,CD8OI,yIAKQ,eChPZ,CAhEQ,qCAAA,mEACA,sBAAA,CACA,iBAmEN,CACF,CA/DI,oCAAA,mEACI,sBAAA,CACA,iBAkEN,CACF",
        sourcesContent: ["@import 'mixins.less';\n\n// Headlines\n.headline-6 () {\n    font-size: calc(var(--font-size-3) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n.headline-5 () {\n    font-size: calc(var(--font-size-4) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n.headline-4 () {\n    font-size: calc(var(--font-size-5) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n.headline-3 () {\n    font-size: calc(var(--font-size-6) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n.headline-3-bold () {\n    .headline-3();\n    font-weight: var(--font-weight-bold);\n    color: var(--color-override, var(--color-h));\n}\n\n.headline-2 () {\n    font-size: calc(var(--font-size-7) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-bold);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n.headline-1 () {\n    font-size: calc(var(--font-size-8) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-bold);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n.xLarge () {\n    font-size: calc(var(--font-size-9) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-bold);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n// Body\n.body-xs () {\n    font-size: var(--font-size-1);\n    font-family: var(--font-family-body);\n    line-height: var(--line-height-lg);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-body);\n    color: var(--color-body);\n}\n\n.body-xs-bold () {\n    .body-xs;\n    font-weight: var(--font-weight-bold);\n    color: var(--color-body);\n}\n\n.body-sm () {\n    font-size: var(--font-size-2);\n    font-family: var(--font-family-body);\n    line-height: var(--line-height-lg);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-body);\n    color: var(--color-body);\n}\n\n.body-sm-bold () {\n    .body-sm;\n    font-weight: var(--font-weight-bold);\n    color: var(--color-body);\n}\n\n.body-md () {\n    font-size: var(--font-size-3);\n    font-family: var(--font-family-body);\n    line-height: var(--line-height-lg);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-body);\n    color: var(--color-body);\n}\n\n.body-md-bold () {\n    .body-md;\n    font-weight: var(--font-weight-bold);\n    color: var(--color-body);\n}\n\n.body-lg () {\n    font-size: var(--font-size-4);\n    font-family: var(--font-family-body);\n    line-height: var(--line-height-lg);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-body);\n    color: var(--color-body);\n}\n\n.body-lg-bold () {\n    .body-lg;\n    font-weight: var(--font-weight-bold);\n    color: var(--color-body);\n}\n\n.handleFontDeclarationsGen9() {\n    h1 {\n        .headline-1;\n    }\n    h2 {\n        .headline-2;\n    }\n    h3 {\n        .headline-3;\n    }\n    h4 {\n        .headline-4;\n    }\n    h5 {\n        .headline-5;\n    }\n    p {\n        .body-md;\n    }\n}\n\n.handleMaxWidth(@max-width-default: 1000000px) {\n    width: 100%;\n    max-width: calc(\n        var(--max-width-dynamic, @max-width-default) +\n            var(--padding-dynamic, 0px) * 2\n    ) !important;\n    margin: 0 auto;\n}\n\n.handlePadding(@paddingSides: initial, @paddingTopBottom: initial) {\n    --padding-dynamic: @paddingSides;\n    --padding-dynamic-tb: @paddingTopBottom;\n\n    padding: var(--padding-t, var(--padding-dynamic-tb, 0))\n        var(--padding-dynamic, 0) var(--padding-b, var(--padding-dynamic-tb, 0))\n        var(--padding-dynamic, 0);\n}\n\n.commonContent() {\n    .handlePadding(var(--padding-sides), 0);\n    .handleMaxWidth(var(--content-max-width));\n}\n\n.backgroundIcon(@icon) {\n    background: url('../icons/@{icon}.svg') no-repeat center/1rem;\n}\n\n@iconBtnConfig: {\n    @small: {\n        size: 2rem;\n    };\n    @large: {\n        size: 3rem;\n    };\n};\n\n.iconBtn(@icon, @size: small) {\n    @lookup: @size;\n    width: @iconBtnConfig[@@lookup][size];\n    height: @iconBtnConfig[@@lookup][size];\n    position: relative;\n    cursor: pointer;\n    background: var(--black-65, rgba(0, 0, 0, 0.65));\n    border: 1px solid var(--white-100, #fff);\n    border-radius: 50%;\n    padding: 0;\n    transition: background 0.3s ease-in-out;\n    &::after {\n        .backgroundIcon(@icon);\n        content: '';\n        display: block;\n        height: 100%;\n        width: 100%;\n        position: absolute;\n        left: 0;\n        top: 0;\n        transition: 0.3s ease-in-out;\n    }\n\n    &:focus {\n        outline: none;\n        border: none;\n    }\n\n    .isTouchscreen({\n        &:active {\n            background: var(--white-100, #fff);\n            &::after {\n                filter: invert(1);\n            }\n        }\n    }, {\n        &:hover,\n        &:focus {\n            background: var(--white-100, #fff);\n            &::after {\n                filter: invert(1);\n            }\n        }\n    });\n}\n\n.iconBtnPlain(@icon, @size: small) {\n    @lookup: @size;\n    width: @iconBtnConfig[@@lookup][size];\n    height: @iconBtnConfig[@@lookup][size];\n    position: relative;\n    cursor: pointer;\n    padding: 0;\n\n    &::after {\n        content: '';\n        display: block;\n        height: 100%;\n        width: 100%;\n        position: absolute;\n        left: 0;\n        top: 0;\n        transition: 0.3s ease-in-out;\n        background: url('../icons/@{icon}.svg') no-repeat center/1.5rem;\n    }\n}\n\n.swiperBtn(@icon) {\n    .iconBtn(@icon, large);\n    background: var(--black-200);\n    border-radius: 0;\n    border: none;\n    &::after {\n        background-size: 1.5rem;\n    }\n}\n\n.pillBtn {\n    display: flex;\n    min-width: var(--rem-6);\n    padding: var(--padding-xs) var(--padding-sm);\n    justify-content: center;\n    align-items: center;\n    border: none;\n    border-radius: 100px;\n    background: var(--white-15);\n    cursor: pointer;\n\n    color: var(--white-100);\n    text-align: center;\n    font-family: var(--font-family-body);\n    font-size: 20px;\n    font-style: normal;\n    font-weight: 700;\n    line-height: var(--rem-125);\n\n    cursor: pointer;\n    transition: background-color 0.3s ease-in-out;\n\n    img {\n        margin-left: var(--grid-gap-xs);\n        height: var(--nav-icon-size);\n        width: var(--nav-icon-size);\n        transition: filter 0.3s ease-in-out;\n    }\n\n    &:hover,\n    &:focus {\n        background-color: var(--white-40);\n        outline: none;\n    }\n\n    &.selected {\n        color: var(--black-200);\n        background: var(--white-100);\n\n        img {\n            filter: invert();\n        }\n    }\n}\n\n.setGen9Root() {\n    --gen9-max-width: 2560px;\n    --content-max-width: var(--gen9-max-width);\n    --padding-sides: var(--padding-lg);\n    --content-padding: 0 var(--padding-sides);\n    flex: 1;\n    display: flex;\n    justify-content: center;\n\n    .xl({\n        --padding-sides: var(--padding-xl);\n    });\n\n    .handleFontDeclarationsGen9();\n}\n\n.scrollFade() {\n    // @note: this is breaking on firefox.\n    mask-image: linear-gradient(\n        to bottom,\n        var(--black-100) calc(100% - 48px),\n        transparent calc(100% + 16px)\n    );\n}\n\n.scrollbar() {\n    /* Firefox */\n    scrollbar-width: auto;\n    scrollbar-color: var(--scroll-thumb-color) var(--scroll-track-color);\n\n    /* Chrome, Edge, and Safari */\n    &::-webkit-scrollbar {\n        width: 8px;\n    }\n    &::-webkit-scrollbar-track {\n        background: transparent;\n    }\n    &::-webkit-scrollbar-thumb {\n        background-color: var(--scroll-thumb-color);\n        border-radius: 10px;\n        border: none;\n    }\n}\n\n.ifElse(@condition, @if-styles, @else-styles) {\n    @media @condition {\n        @if-styles();\n    }\n    @media not (@condition) {\n        @else-styles();\n    }\n}\n\n.isTouchscreen(@if-styles, @else-styles) {\n    .ifElse(~'(pointer: coarse)', @if-styles, @else-styles);\n}\n\n.mobile-landscape(@rules) {\n    @media only screen and (min-width: 480px) and (max-width: 1023px) and (orientation: landscape) {\n        @rules();\n    }\n}\n\n.caret(@color) {\n    .dropdownCaret(@color);\n}\n\n.horizontalScrollFade() {\n    mask-image: linear-gradient(\n        to right,\n        transparent,\n        rgba(0, 0, 0, 0.3) calc(var(--padding-sides) / 2),\n        #000 var(--padding-sides),\n        #000 calc(100% - var(--padding-sides)),\n        rgba(0, 0, 0, 0.3) calc(100% - (var(--padding-sides) / 2)),\n        transparent\n    );\n}\n\n// Accessibility\n.visuallyHidden() {\n    border: 0;\n    clip: rect(0 0 0 0);\n    height: 1px;\n    overflow: hidden;\n    padding: 0;\n    position: absolute;\n    white-space: nowrap;\n    width: 1px;\n}\n", "@import '../Root/globalNavVars.less';\n\n.mobile {\n        @media not all and (width <= @global-navigation-breakpoint-mobile) {\n        display: none !important;\n        visibility: hidden;\n    };\n}\n\n.desktop {\n    @media not all and (width > @global-navigation-breakpoint-mobile) {\n        display: none !important;\n        visibility: hidden;\n    };\n}\n"],
        sourceRoot: ""
      }]), i.locals = {
        pillBtn: "rockstargames-modules-core-headerdab8756ef45d0360cfe667505e44e939",
        selected: "rockstargames-modules-core-headerade3ff1f5041701c0a98cb7198ece826",
        mobile: "rockstargames-modules-core-headerd46e4a60f402edcf62521fefd6a9289f",
        desktop: "rockstargames-modules-core-headerf1fc26697d7f376112d0fcd256b22a9a"
      };
      const d = i
    },
    45020: (a, e, n) => {
      n.d(e, {
        A: () => d
      });
      var t = n(42587),
        o = n.n(t),
        r = n(15081),
        i = n.n(r)()(o());
      i.push([a.id, '.rockstargames-modules-core-headere0ed1b3547264fc03757f0e9e9d6f93b{align-items:center;background:var(--white-15);border:none;border-radius:100px;color:var(--white-100);cursor:pointer;display:flex;font-family:var(--font-family-body);font-size:20px;font-style:normal;font-weight:700;justify-content:center;line-height:var(--rem-125);min-width:var(--rem-6);padding:var(--padding-xs) var(--padding-sm);text-align:center;transition:background-color .3s ease-in-out}.rockstargames-modules-core-headere0ed1b3547264fc03757f0e9e9d6f93b img{height:var(--nav-icon-size);margin-left:var(--grid-gap-xs);transition:filter .3s ease-in-out;width:var(--nav-icon-size)}.rockstargames-modules-core-headere0ed1b3547264fc03757f0e9e9d6f93b:focus,.rockstargames-modules-core-headere0ed1b3547264fc03757f0e9e9d6f93b:hover{background-color:var(--white-40);outline:none}.rockstargames-modules-core-headere0ed1b3547264fc03757f0e9e9d6f93b.rockstargames-modules-core-headerf9516763b5bc7d2d11b742f2362cca74{background:var(--white-100);color:var(--black-200)}.rockstargames-modules-core-headere0ed1b3547264fc03757f0e9e9d6f93b.rockstargames-modules-core-headerf9516763b5bc7d2d11b742f2362cca74 img{filter:invert()}.rockstargames-modules-core-headerd922c5fe52102c7e5c8bc3c42d010585{grid-area:menu;overflow-x:auto;overflow-y:hidden}.rockstargames-modules-core-headerd922c5fe52102c7e5c8bc3c42d010585>div{display:contents}.rockstargames-modules-core-headerec44e526244f48930351136a502341d5{display:flex;flex-wrap:wrap;justify-content:center;margin:0;padding:0!important}.rockstargames-modules-core-headerf303c57e835ec31bf4213fb03aba17ef{list-style:none}.rockstargames-modules-core-headerda3bef6906347a4766f3e910c294774a{border-bottom:1px solid var(--global-navigation-border-color);color:var(--white-100);display:flex;flex-direction:column;overflow:hidden}.rockstargames-modules-core-headerabf1a661e4902fa5712272e92f2de033{display:flex;flex-wrap:wrap;justify-content:center;margin:0;padding:0!important;visibility:hidden}.rockstargames-modules-core-headerd5e29664a79741798b66ebe415c59463{height:var(--global-navigation-height);list-style:none;min-width:100px}.rockstargames-modules-core-headerac2c298a9a02b68bb1d238b4f965d715{align-items:flex-start;display:inline-flex;flex-direction:column;padding:0;scrollbar-color:var(--scroll-thumb-color) var(--scroll-track-color);scrollbar-width:auto}.rockstargames-modules-core-headerac2c298a9a02b68bb1d238b4f965d715::-webkit-scrollbar{width:8px}.rockstargames-modules-core-headerac2c298a9a02b68bb1d238b4f965d715::-webkit-scrollbar-track{background:transparent}.rockstargames-modules-core-headerac2c298a9a02b68bb1d238b4f965d715::-webkit-scrollbar-thumb{background-color:var(--scroll-thumb-color);border:none;border-radius:10px}.rockstargames-modules-core-headerac2c298a9a02b68bb1d238b4f965d715 a[data-ui-name=sub-menu-item]:focus-visible,.rockstargames-modules-core-headerac2c298a9a02b68bb1d238b4f965d715 div[data-ui-name=sub-menu-item] button:focus-visible{background-color:var(--white-15);border:1px solid var(--white-100);border-radius:6px;outline:none}.rockstargames-modules-core-headerac2c298a9a02b68bb1d238b4f965d715[data-orientation=horizontal]{background:var(--black-100);border:1px solid var(--global-navigation-border-color);border-radius:var(--border-radius-md);box-shadow:var(--global-navigation-box-shadow);max-height:calc(100dvh - 16px - var(--global-navigation-height));min-width:var(--sub-nav-min-width);overflow:hidden auto;position:absolute;z-index:999}.rockstargames-modules-core-headerac2c298a9a02b68bb1d238b4f965d715[data-orientation=vertical]{overflow:hidden}.rockstargames-modules-core-headerf905a8b31e0bab44202ab5722726c472{padding:0 0 0 var(--sub-nav-indent)}.rockstargames-modules-core-headerddf1983ce836b67a33e2f08a1a5316a3{padding:0 var(--sub-nav-indent) 0}.rockstargames-modules-core-headera4788f15b7ea9665e8e186a03c86ca32{background:var(--black-200)}.rockstargames-modules-core-headerd962f98ae74a4cbed394cf29a5d0a472{background:transparent;border:none;border-radius:0;box-shadow:none}.rockstargames-modules-core-headerd962f98ae74a4cbed394cf29a5d0a472,.rockstargames-modules-core-headerd962f98ae74a4cbed394cf29a5d0a472>div{width:100%}.rockstargames-modules-core-headere463be3861d293e36d66bb8ab0c19645{margin:0;padding:0}.rockstargames-modules-core-headerec5d2c793461b20aed9bb78b399482ad{transition:transform .2s ease-in-out}.rockstargames-modules-core-headerfaca5fabb7852e77e62aa1da55dfad31[data-state=open] .rockstargames-modules-core-headerec5d2c793461b20aed9bb78b399482ad{transform:rotate(180deg)}.rockstargames-modules-core-headerb76fe7fae607404368bb160833f02f4b{background:unset;border:none;color:var(--white-100);cursor:pointer;display:flex;font-family:var(--font-family-body);font-size:var(--nav-link-size);justify-content:space-between;text-align:left;text-decoration:none;transition:color .3s ease-in-out;white-space:nowrap}.rockstargames-modules-core-headerb76fe7fae607404368bb160833f02f4b:focus-visible{outline:2px solid var(--white-100);outline-offset:-2px}.rockstargames-modules-core-headerc55155ed6163d24327c5172a998ff912{align-items:center;background:unset;border:none;color:var(--white-100);cursor:pointer;display:flex;font-family:var(--font-family-body);font-size:var(--nav-link-size);font-weight:400;gap:var(--grid-gap-xxs);height:calc(var(--global-navigation-height) - 6px);justify-content:space-between;margin-top:3px;padding:0 var(--padding-sm);position:relative;text-align:left;text-decoration:none;transition:color .3s ease-in-out;white-space:nowrap}.rockstargames-modules-core-headerc55155ed6163d24327c5172a998ff912:focus-visible{outline:2px solid var(--white-100);outline-offset:-2px}.rockstargames-modules-core-headerc55155ed6163d24327c5172a998ff912>img{width:var(--rem-075)}.rockstargames-modules-core-headerc55155ed6163d24327c5172a998ff912:after{bottom:-2px;content:"";display:block;height:0;left:0;position:absolute;right:0;transition:all .2s ease-in;width:100%}.rockstargames-modules-core-headerc55155ed6163d24327c5172a998ff912:hover:after,.rockstargames-modules-core-headerc55155ed6163d24327c5172a998ff912[data-active]:after{background:var(--white-100);height:var(--rem-0125);height:2px}.rockstargames-modules-core-headerc55155ed6163d24327c5172a998ff912[data-active]{font-weight:700}a.rockstargames-modules-core-headerc55155ed6163d24327c5172a998ff912{color:var(--text-light)}button.rockstargames-modules-core-headerc55155ed6163d24327c5172a998ff912{background:transparent;border:none;cursor:pointer}.rockstargames-modules-core-headerfe55c83723647f4df2a5ba88baa866e2{align-items:center;background:unset;background-color:hsla(0,0%,100%,0);border:none;color:var(--white-100);cursor:pointer;display:flex;font-family:var(--font-family-body);font-size:var(--nav-link-size);font-style:normal;font-weight:700;justify-content:space-between;letter-spacing:-.025em;line-height:100%;padding:var(--padding-sm) var(--padding-md);text-align:left;text-decoration:none;transition:color .3s ease-in-out;transition:background-color .3s ease-in-out;white-space:nowrap;width:100%}.rockstargames-modules-core-headerfe55c83723647f4df2a5ba88baa866e2:focus-visible{outline:2px solid var(--white-100);outline-offset:-2px}.rockstargames-modules-core-headerfe55c83723647f4df2a5ba88baa866e2:hover{background-color:var(--white-15)}.rockstargames-modules-core-headere02f603679059fd953b6b8ba3a637b60{background:unset;border:none;color:var(--white-100);cursor:pointer;display:flex;display:block;font-family:var(--font-family-body);font-size:var(--nav-link-size);font-size:var(--rem-1);font-weight:700;justify-content:space-between;justify-content:center;letter-spacing:-.025em;line-height:160%;padding:var(--rem-125) 0;text-align:left;text-decoration:none;transition:color .3s ease-in-out;white-space:nowrap}.rockstargames-modules-core-headere02f603679059fd953b6b8ba3a637b60:focus-visible{outline:2px solid var(--white-100);outline-offset:-2px}.rockstargames-modules-core-headere02f603679059fd953b6b8ba3a637b60 img{margin-right:var(--rem-05);width:var(--rem-1)}.rockstargames-modules-core-headere02f603679059fd953b6b8ba3a637b60.rockstargames-modules-core-headerfe55c83723647f4df2a5ba88baa866e2{background-color:#282828;display:flex;font-size:var(--nav-link-size);font-weight:400;justify-content:flex-start;padding:var(--spacing-sm);transition:background-color .3s ease-in-out}.rockstargames-modules-core-headere02f603679059fd953b6b8ba3a637b60.rockstargames-modules-core-headerfe55c83723647f4df2a5ba88baa866e2 img{width:var(--nav-icon-size)}.rockstargames-modules-core-headere02f603679059fd953b6b8ba3a637b60:hover{background-color:var(--white-15)}.rockstargames-modules-core-headeree8b6e236dcc760405f887886740a954{background:unset;border:none;color:var(--white-100);cursor:pointer;display:flex;font-family:var(--font-family-body);font-size:var(--nav-link-size);justify-content:space-between;padding:var(--spacing-sm);text-align:left;text-decoration:none;transition:color .3s ease-in-out;transition:background .3s ease-in-out;white-space:nowrap;width:100%}.rockstargames-modules-core-headeree8b6e236dcc760405f887886740a954:focus-visible{outline:2px solid var(--white-100);outline-offset:-2px}.rockstargames-modules-core-headeree8b6e236dcc760405f887886740a954:hover{background-color:var(--white-15)}.rockstargames-modules-core-headeree8b6e236dcc760405f887886740a954:after{content:none}.rockstargames-modules-core-headerc640bf864619b6a2296140ddb12e8475{background:unset;border:none;color:var(--white-100);cursor:pointer;display:flex;font-family:var(--font-family-body);font-size:var(--nav-link-size);justify-content:space-between;line-height:1.15;padding:var(--padding-sm);text-align:left;text-decoration:none;transition:color .3s ease-in-out;white-space:nowrap}.rockstargames-modules-core-headerc640bf864619b6a2296140ddb12e8475:focus-visible{outline:2px solid var(--white-100);outline-offset:-2px}.rockstargames-modules-core-headerbba8a763e416f3af074bb59987ec7834{border-bottom:none;border-radius:4px;height:auto;margin-right:var(--margin-xs);padding:var(--padding-xs)}.rockstargames-modules-core-headerb350a68799dbf9dc424ca04489c8a0ad{width:var(--rem-075)}', "", {
        version: 3,
        sources: ["webpack://./../../buildtime/legacy-design-system/less/gen9-mixins.less", "webpack://./compositional/components/Menu/index.less"],
        names: [],
        mappings: "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",
        sourcesContent: ["@import 'mixins.less';\n\n// Headlines\n.headline-6 () {\n    font-size: calc(var(--font-size-3) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n.headline-5 () {\n    font-size: calc(var(--font-size-4) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n.headline-4 () {\n    font-size: calc(var(--font-size-5) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n.headline-3 () {\n    font-size: calc(var(--font-size-6) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n.headline-3-bold () {\n    .headline-3();\n    font-weight: var(--font-weight-bold);\n    color: var(--color-override, var(--color-h));\n}\n\n.headline-2 () {\n    font-size: calc(var(--font-size-7) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-bold);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n.headline-1 () {\n    font-size: calc(var(--font-size-8) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-bold);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n.xLarge () {\n    font-size: calc(var(--font-size-9) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-bold);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n// Body\n.body-xs () {\n    font-size: var(--font-size-1);\n    font-family: var(--font-family-body);\n    line-height: var(--line-height-lg);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-body);\n    color: var(--color-body);\n}\n\n.body-xs-bold () {\n    .body-xs;\n    font-weight: var(--font-weight-bold);\n    color: var(--color-body);\n}\n\n.body-sm () {\n    font-size: var(--font-size-2);\n    font-family: var(--font-family-body);\n    line-height: var(--line-height-lg);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-body);\n    color: var(--color-body);\n}\n\n.body-sm-bold () {\n    .body-sm;\n    font-weight: var(--font-weight-bold);\n    color: var(--color-body);\n}\n\n.body-md () {\n    font-size: var(--font-size-3);\n    font-family: var(--font-family-body);\n    line-height: var(--line-height-lg);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-body);\n    color: var(--color-body);\n}\n\n.body-md-bold () {\n    .body-md;\n    font-weight: var(--font-weight-bold);\n    color: var(--color-body);\n}\n\n.body-lg () {\n    font-size: var(--font-size-4);\n    font-family: var(--font-family-body);\n    line-height: var(--line-height-lg);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-body);\n    color: var(--color-body);\n}\n\n.body-lg-bold () {\n    .body-lg;\n    font-weight: var(--font-weight-bold);\n    color: var(--color-body);\n}\n\n.handleFontDeclarationsGen9() {\n    h1 {\n        .headline-1;\n    }\n    h2 {\n        .headline-2;\n    }\n    h3 {\n        .headline-3;\n    }\n    h4 {\n        .headline-4;\n    }\n    h5 {\n        .headline-5;\n    }\n    p {\n        .body-md;\n    }\n}\n\n.handleMaxWidth(@max-width-default: 1000000px) {\n    width: 100%;\n    max-width: calc(\n        var(--max-width-dynamic, @max-width-default) +\n            var(--padding-dynamic, 0px) * 2\n    ) !important;\n    margin: 0 auto;\n}\n\n.handlePadding(@paddingSides: initial, @paddingTopBottom: initial) {\n    --padding-dynamic: @paddingSides;\n    --padding-dynamic-tb: @paddingTopBottom;\n\n    padding: var(--padding-t, var(--padding-dynamic-tb, 0))\n        var(--padding-dynamic, 0) var(--padding-b, var(--padding-dynamic-tb, 0))\n        var(--padding-dynamic, 0);\n}\n\n.commonContent() {\n    .handlePadding(var(--padding-sides), 0);\n    .handleMaxWidth(var(--content-max-width));\n}\n\n.backgroundIcon(@icon) {\n    background: url('../icons/@{icon}.svg') no-repeat center/1rem;\n}\n\n@iconBtnConfig: {\n    @small: {\n        size: 2rem;\n    };\n    @large: {\n        size: 3rem;\n    };\n};\n\n.iconBtn(@icon, @size: small) {\n    @lookup: @size;\n    width: @iconBtnConfig[@@lookup][size];\n    height: @iconBtnConfig[@@lookup][size];\n    position: relative;\n    cursor: pointer;\n    background: var(--black-65, rgba(0, 0, 0, 0.65));\n    border: 1px solid var(--white-100, #fff);\n    border-radius: 50%;\n    padding: 0;\n    transition: background 0.3s ease-in-out;\n    &::after {\n        .backgroundIcon(@icon);\n        content: '';\n        display: block;\n        height: 100%;\n        width: 100%;\n        position: absolute;\n        left: 0;\n        top: 0;\n        transition: 0.3s ease-in-out;\n    }\n\n    &:focus {\n        outline: none;\n        border: none;\n    }\n\n    .isTouchscreen({\n        &:active {\n            background: var(--white-100, #fff);\n            &::after {\n                filter: invert(1);\n            }\n        }\n    }, {\n        &:hover,\n        &:focus {\n            background: var(--white-100, #fff);\n            &::after {\n                filter: invert(1);\n            }\n        }\n    });\n}\n\n.iconBtnPlain(@icon, @size: small) {\n    @lookup: @size;\n    width: @iconBtnConfig[@@lookup][size];\n    height: @iconBtnConfig[@@lookup][size];\n    position: relative;\n    cursor: pointer;\n    padding: 0;\n\n    &::after {\n        content: '';\n        display: block;\n        height: 100%;\n        width: 100%;\n        position: absolute;\n        left: 0;\n        top: 0;\n        transition: 0.3s ease-in-out;\n        background: url('../icons/@{icon}.svg') no-repeat center/1.5rem;\n    }\n}\n\n.swiperBtn(@icon) {\n    .iconBtn(@icon, large);\n    background: var(--black-200);\n    border-radius: 0;\n    border: none;\n    &::after {\n        background-size: 1.5rem;\n    }\n}\n\n.pillBtn {\n    display: flex;\n    min-width: var(--rem-6);\n    padding: var(--padding-xs) var(--padding-sm);\n    justify-content: center;\n    align-items: center;\n    border: none;\n    border-radius: 100px;\n    background: var(--white-15);\n    cursor: pointer;\n\n    color: var(--white-100);\n    text-align: center;\n    font-family: var(--font-family-body);\n    font-size: 20px;\n    font-style: normal;\n    font-weight: 700;\n    line-height: var(--rem-125);\n\n    cursor: pointer;\n    transition: background-color 0.3s ease-in-out;\n\n    img {\n        margin-left: var(--grid-gap-xs);\n        height: var(--nav-icon-size);\n        width: var(--nav-icon-size);\n        transition: filter 0.3s ease-in-out;\n    }\n\n    &:hover,\n    &:focus {\n        background-color: var(--white-40);\n        outline: none;\n    }\n\n    &.selected {\n        color: var(--black-200);\n        background: var(--white-100);\n\n        img {\n            filter: invert();\n        }\n    }\n}\n\n.setGen9Root() {\n    --gen9-max-width: 2560px;\n    --content-max-width: var(--gen9-max-width);\n    --padding-sides: var(--padding-lg);\n    --content-padding: 0 var(--padding-sides);\n    flex: 1;\n    display: flex;\n    justify-content: center;\n\n    .xl({\n        --padding-sides: var(--padding-xl);\n    });\n\n    .handleFontDeclarationsGen9();\n}\n\n.scrollFade() {\n    // @note: this is breaking on firefox.\n    mask-image: linear-gradient(\n        to bottom,\n        var(--black-100) calc(100% - 48px),\n        transparent calc(100% + 16px)\n    );\n}\n\n.scrollbar() {\n    /* Firefox */\n    scrollbar-width: auto;\n    scrollbar-color: var(--scroll-thumb-color) var(--scroll-track-color);\n\n    /* Chrome, Edge, and Safari */\n    &::-webkit-scrollbar {\n        width: 8px;\n    }\n    &::-webkit-scrollbar-track {\n        background: transparent;\n    }\n    &::-webkit-scrollbar-thumb {\n        background-color: var(--scroll-thumb-color);\n        border-radius: 10px;\n        border: none;\n    }\n}\n\n.ifElse(@condition, @if-styles, @else-styles) {\n    @media @condition {\n        @if-styles();\n    }\n    @media not (@condition) {\n        @else-styles();\n    }\n}\n\n.isTouchscreen(@if-styles, @else-styles) {\n    .ifElse(~'(pointer: coarse)', @if-styles, @else-styles);\n}\n\n.mobile-landscape(@rules) {\n    @media only screen and (min-width: 480px) and (max-width: 1023px) and (orientation: landscape) {\n        @rules();\n    }\n}\n\n.caret(@color) {\n    .dropdownCaret(@color);\n}\n\n.horizontalScrollFade() {\n    mask-image: linear-gradient(\n        to right,\n        transparent,\n        rgba(0, 0, 0, 0.3) calc(var(--padding-sides) / 2),\n        #000 var(--padding-sides),\n        #000 calc(100% - var(--padding-sides)),\n        rgba(0, 0, 0, 0.3) calc(100% - (var(--padding-sides) / 2)),\n        transparent\n    );\n}\n\n// Accessibility\n.visuallyHidden() {\n    border: 0;\n    clip: rect(0 0 0 0);\n    height: 1px;\n    overflow: hidden;\n    padding: 0;\n    position: absolute;\n    white-space: nowrap;\n    width: 1px;\n}\n", "@import '@rsgweb/legacy-design-system/less/gen9-mixins.less';\n\n.menu {\n    grid-area: menu;\n    overflow-x: auto;\n    overflow-y: hidden;\n    \n    & > div {\n        display: contents;\n    }\n}\n\n.menuItems {\n    flex-wrap: wrap;\n    display: flex;\n    margin: 0;\n    padding: 0 !important;\n    justify-content: center;\n}\n\n.menuItem {\n    list-style: none;\n}\n\n.nestedMenuItem {\n    overflow: hidden;\n    display: flex;\n    flex-direction: column;\n    border-bottom: 1px solid var(--global-navigation-border-color);\n    color: var(--white-100);\n}\n\n.hiddenItems {\n    visibility: hidden;\n    flex-wrap: wrap;\n    display: flex;\n    margin: 0;\n    padding: 0 !important;\n    justify-content: center;\n\n}\n\n.hiddenItem {\n    list-style: none;\n    min-width: 100px;\n    height: var(--global-navigation-height);\n}\n\n.subMenuStyles() {\n    padding: 0;\n    flex-direction: column;\n    align-items: flex-start;\n    \n    a[data-ui-name='sub-menu-item'],\n    div[data-ui-name='sub-menu-item'] button {\n        &:focus-visible {\n            outline: none;\n            border: solid 1px var(--white-100);\n            border-radius: 6px;\n            background-color: var(--white-15);\n        }\n    }\n}\n\n.dropdownMenu {\n    .scrollbar();\n    .subMenuStyles();\n    display: inline-flex;\n\n    &[data-orientation='horizontal'] {\n        position: absolute;\n        z-index: 999;\n        overflow: hidden auto;\n        max-height: calc(100dvh - 16px - var(--global-navigation-height));\n        box-shadow: var(--global-navigation-box-shadow);\n        border-radius: var(--border-radius-md);\n        border: 1px solid var(--global-navigation-border-color);\n        background: var(--black-100);\n        min-width: var(--sub-nav-min-width);\n    }\n\n    \n    &[data-orientation='vertical'] {\n        overflow: hidden;\n    }\n}\n\n.dropdownMenuMobile {\n    padding: 0 0 0 var(--sub-nav-indent);\n}\n\n.nestedDropdown {\n    padding: 0 var(--sub-nav-indent) 0;\n}\n\n.avatarNestedDropdown{\n    background: var(--black-200);\n}\n\n.subMenu {\n    width: 100%;\n    border: none;\n    border-radius: 0;\n    box-shadow: none;\n    background: transparent;\n\n    & > div {\n        width: 100%;\n    }\n}\n\n.menuList {\n    padding: 0;\n    margin: 0;\n}\n\n// Menu Link\n\n.menuTriggerChevron {\n    transition: transform 0.2s ease-in-out;\n    .menuTrigger[data-state='open'] & {\n        transform: rotate(180deg);\n    }\n}\n\n.sharedMenuLinkStyles {\n    display: flex;\n    justify-content: space-between;\n    background: unset;\n    border: none;\n    text-align: left;\n\n    font-family: var(--font-family-body);\n    font-size: var(--nav-link-size);\n\n    text-decoration: none;\n    white-space: nowrap;\n    transition: color 0.3s ease-in-out;\n    color: var(--white-100);\n    cursor: pointer;\n\n    &:focus-visible {\n        outline: 2px solid var(--white-100);\n        outline-offset: -2px;\n    }\n}\n\n.menuLink {\n    .sharedMenuLinkStyles();\n    display: flex;\n    gap: var(--grid-gap-xxs);\n    align-items: center;\n    font-weight: 400;\n    height: calc(var(--global-navigation-height) - 6px);\n    padding: 0px var(--padding-sm);\n    position: relative;\n    margin-top: 3px;\n\n    > img {\n        width: var(--rem-075);\n    }\n\n    &:after {\n        content: '';\n        width: 100%;\n        display: block;\n        position: absolute;\n        height: 0;\n        bottom: -2px;\n        left: 0;\n        right: 0;\n        transition: all 0.2s ease-in;\n    }\n\n    &[data-active],\n    &:hover {\n        &:after {\n            height: var(--rem-0125);\n            height: 2px;\n            background: var(--white-100);\n        }\n    }\n\n    &[data-active] {\n        font-weight: 700;\n    }\n    \n    a& {\n        color: var(--text-light);\n    }\n    \n    button& {\n        background: transparent;\n        border: none;\n        cursor: pointer;\n    }\n}\n\n.mobileMenuLink {\n    .sharedMenuLinkStyles();\n    width: 100%;\n    font-weight: 700;\n    display: flex;\n    padding: var(--padding-sm) var(--padding-md);\n    justify-content: space-between;\n    align-items: center;\n    line-height: 100%;\n    letter-spacing: -0.025em;\n    font-style: normal;\n    text-decoration: none;\n    transition: background-color 0.3s ease-in-out;\n    background-color: rgba(255, 255, 255, 0);\n    border: none;\n\n    &:hover {\n        background-color: var(--white-15);\n    }\n}\n\n.quickMenuLink {\n    .sharedMenuLinkStyles();\n    display: block;\n    font-size: var(--rem-1);\n    font-weight: 700;\n    line-height: 160%;\n    letter-spacing: -0.025em;\n    justify-content: center;\n    padding: var(--rem-125) 0;\n\n    img {\n        margin-right: var(--rem-05);\n        width: var(--rem-1);\n    }\n\n    &.mobileMenuLink {\n        display: flex;\n        justify-content: flex-start;\n        padding: var(--spacing-sm);\n        font-size: var(--nav-link-size);\n        font-weight: 400;\n        transition: background-color 0.3s ease-in-out;\n        background-color: #282828;\n\n        img {\n            width: var(--nav-icon-size);\n        }\n\n    }\n\n    &:hover {\n        background-color: var(--white-15);\n    }\n}\n\n.subMenuLink {\n    .sharedMenuLinkStyles();\n    width: 100%;\n    padding: var(--spacing-sm);\n\n    transition: background 300ms ease-in-out;\n\n    &:hover {\n        background-color: var(--white-15);\n    }\n\n    &::after {\n        content: none;\n    }\n}\n\n.avatarMenuLink {\n    .sharedMenuLinkStyles();\n    font-size: var(--nav-link-size);\n    line-height: 1.15;\n    padding: var(--padding-sm);\n}\n\n.nestedLink {\n    border-bottom: none;\n    border-radius: 4px;\n    padding: var(--padding-xs);\n    margin-right: var(--margin-xs);\n\n    height: auto;\n}\n\n.externalLinkIcon {\n    width: var(--rem-075);\n}\n"],
        sourceRoot: ""
      }]), i.locals = {
        pillBtn: "rockstargames-modules-core-headere0ed1b3547264fc03757f0e9e9d6f93b",
        selected: "rockstargames-modules-core-headerf9516763b5bc7d2d11b742f2362cca74",
        menu: "rockstargames-modules-core-headerd922c5fe52102c7e5c8bc3c42d010585",
        menuItems: "rockstargames-modules-core-headerec44e526244f48930351136a502341d5",
        menuItem: "rockstargames-modules-core-headerf303c57e835ec31bf4213fb03aba17ef",
        nestedMenuItem: "rockstargames-modules-core-headerda3bef6906347a4766f3e910c294774a",
        hiddenItems: "rockstargames-modules-core-headerabf1a661e4902fa5712272e92f2de033",
        hiddenItem: "rockstargames-modules-core-headerd5e29664a79741798b66ebe415c59463",
        dropdownMenu: "rockstargames-modules-core-headerac2c298a9a02b68bb1d238b4f965d715",
        dropdownMenuMobile: "rockstargames-modules-core-headerf905a8b31e0bab44202ab5722726c472",
        nestedDropdown: "rockstargames-modules-core-headerddf1983ce836b67a33e2f08a1a5316a3",
        avatarNestedDropdown: "rockstargames-modules-core-headera4788f15b7ea9665e8e186a03c86ca32",
        subMenu: "rockstargames-modules-core-headerd962f98ae74a4cbed394cf29a5d0a472",
        menuList: "rockstargames-modules-core-headere463be3861d293e36d66bb8ab0c19645",
        menuTriggerChevron: "rockstargames-modules-core-headerec5d2c793461b20aed9bb78b399482ad",
        menuTrigger: "rockstargames-modules-core-headerfaca5fabb7852e77e62aa1da55dfad31",
        sharedMenuLinkStyles: "rockstargames-modules-core-headerb76fe7fae607404368bb160833f02f4b",
        menuLink: "rockstargames-modules-core-headerc55155ed6163d24327c5172a998ff912",
        mobileMenuLink: "rockstargames-modules-core-headerfe55c83723647f4df2a5ba88baa866e2",
        quickMenuLink: "rockstargames-modules-core-headere02f603679059fd953b6b8ba3a637b60",
        subMenuLink: "rockstargames-modules-core-headeree8b6e236dcc760405f887886740a954",
        avatarMenuLink: "rockstargames-modules-core-headerc640bf864619b6a2296140ddb12e8475",
        nestedLink: "rockstargames-modules-core-headerbba8a763e416f3af074bb59987ec7834",
        externalLinkIcon: "rockstargames-modules-core-headerb350a68799dbf9dc424ca04489c8a0ad"
      };
      const d = i
    },
    17062: (a, e, n) => {
      n.d(e, {
        A: () => d
      });
      var t = n(42587),
        o = n.n(t),
        r = n(15081),
        i = n.n(r)()(o());
      i.push([a.id, ".rockstargames-modules-core-headerfd282c0ed200fdb171dae24f3902f6b1{color:#fff}.rockstargames-modules-core-headera72000cfbe48e7dc2c0f071ecf0b533c{justify-content:center;margin:var(margin-xs);padding:0!important}.rockstargames-modules-core-headerb9830b1f4dd5e2813b68130c424c3aa6{border-bottom:2px solid transparent;font-size:calc(var(--base-rem-size) * 1.25);font-weight:700;list-style:none}.rockstargames-modules-core-headerd4f74f7e1cef072e336f954fae948a07{padding:var(--padding-sm) var(--padding-md)}.rockstargames-modules-core-headerd28d9855f9427597e52d7e74abbf75dc{background:#000;color:var(--white-100);height:100dvh;left:0;max-height:100dvh;overflow-x:hidden;overflow-y:auto;position:fixed;right:0;top:var(--global-navigation-height);transition:top .3s ease-in-out;z-index:99}.rockstargames-modules-core-headerd28d9855f9427597e52d7e74abbf75dc.rockstargames-modules-core-headerb179669051e37adce8fd2936eb8222de{bottom:0}.rockstargames-modules-core-headerd8335dcffc8b201a6f702cc7b22ebab7{overflow-x:hidden;overflow-y:auto}.rockstargames-modules-core-headerb523d5fd993427cae2eda1f5b9225699{bottom:0}.rockstargames-modules-core-headera2283f7a71bfe0902ebe7176a1f3f45a{opacity:.3;pointer-events:none}.rockstargames-modules-core-headerd07fb32788b786e529979364bf8fcb5c{background-color:rgba(0,0,0,.8);bottom:0;height:calc(100dvh - var(--global-navigation-height));left:0;position:absolute;right:0;top:var(--global-navigation-height);width:100dvw;z-index:2}.rockstargames-modules-core-headerffee60778b241ac8cd6bc04685b782d3,.rockstargames-modules-core-headerfb5e947b9aa01caf3aa9bca4ddcb3dee{align-items:center;display:flex}.rockstargames-modules-core-headerffee60778b241ac8cd6bc04685b782d3{background:transparent;border:none;cursor:pointer;flex-flow:column;grid-area:menu;height:var(--rem-15);justify-content:center;padding:0;position:relative;width:var(--rem-15)}.rockstargames-modules-core-headerffee60778b241ac8cd6bc04685b782d3 span{background:#fff;border-radius:16px;height:2px;position:absolute;transform-origin:left center;transition:.2s;width:100%}.rockstargames-modules-core-headerffee60778b241ac8cd6bc04685b782d3 span:first-child{transform:translateY(-400%)}.rockstargames-modules-core-headerffee60778b241ac8cd6bc04685b782d3 span:last-child{transform:translateY(400%)}.rockstargames-modules-core-headere31b18e5d92d04a3ffe036ff25c1ee5a span:first-child,.rockstargames-modules-core-headere31b18e5d92d04a3ffe036ff25c1ee5a span:last-child{transform:translateY(0)}", "", {
        version: 3,
        sources: ["webpack://./compositional/components/MobileMenu/index.less"],
        names: [],
        mappings: "AAIA,mEACI,UAAJ,CAGA,mEAGI,sBAAA,CADA,qBAAA,CADA,mBACJ,CAIA,mEAEI,mCAAA,CACA,2CAAA,CACA,eAAA,CAHA,eACJ,CAKA,mEACI,2CAHJ,CAMA,mEAKI,eAAA,CAKA,sBAAA,CAHA,aAAA,CAJA,MAAA,CAGA,iBAAA,CAGA,iBAAA,CADA,eAAA,CAPA,cAAA,CAGA,OAAA,CASA,mCAAA,CAFA,8BAAA,CATA,UAMJ,CAOI,qIACI,QALR,CASA,mEAEI,iBAAA,CADA,eANJ,CAUA,mEACI,QARJ,CAWA,mEACI,UAAA,CACA,mBATJ,CAYA,mEAQI,+BAAA,CAFA,QAAA,CAJA,qDAAA,CAGA,MAAA,CAJA,iBAAA,CAMA,OAAA,CAHA,mCAAA,CADA,YAAA,CAMA,SAVJ,CAkBA,sIAHI,kBAAA,CADA,YAIJ,CAAA,mEAYI,sBAAA,CADA,WAAA,CALA,cAAA,CAGA,gBAAA,CARA,cAAA,CAIA,oBAAA,CAKA,sBAAA,CAGA,SAAA,CANA,iBAAA,CAHA,mBAJJ,CAAA,wEAoBQ,eAAA,CAHA,kBAAA,CACA,UAAA,CACA,iBAAA,CAGA,4BAAA,CADA,cAAA,CALA,UAPR,CAeQ,oFACI,2BAbZ,CAgBQ,mFACI,0BAdZ,CAqBQ,uKAEI,uBAnBZ",
        sourcesContent: [".overlay {\n    position: absolute;\n}\n\n.menuMobile {\n    color: rgba(255, 255, 255, 1);\n}\n\n.menuMobileItems {\n    padding: 0 !important;\n    margin: var(margin-xs);\n    justify-content: center;\n}\n\n.menuMobileItem {\n    list-style: none;\n    border-bottom: 2px solid transparent;\n    font-size: calc(var(--base-rem-size) * 1.25);\n    font-weight: bold;\n}\n\n.menuMobileCta {\n    padding: var(--padding-sm) var(--padding-md);\n}\n\n.mobileMenuDrawer {\n    position: fixed;\n    z-index: 99; // same z-index as header\n    left: 0;\n    right: 0;\n    background: rgba(0, 0, 0, 1);\n    max-height: 100dvh;\n    height: 100dvh;\n    overflow-y: auto;\n    overflow-x: hidden;\n    color: var(--white-100);\n    transition: top 0.3s ease-in-out;\n\n    top: var(--global-navigation-height);\n\n    &.fullMenuOpen {\n        bottom: 0;\n    }\n};\n\n.mobileMenuContainer {\n    overflow-y: auto;\n    overflow-x: hidden;\n}\n\n.mobileMenuOpen {\n    bottom: 0;\n}\n\n.mobileMenuSearchOpen {\n    opacity: 0.3;\n    pointer-events: none;\n}\n\n.overlay {\n    position: absolute;\n    height: calc(100dvh - var(--global-navigation-height));\n    width: 100dvw;\n    top: var(--global-navigation-height);\n    left: 0;\n    bottom: 0;\n    right: 0;\n    background-color: rgba(0, 0, 0, 0.8);\n    z-index: 2;\n}\n\n.mobileMenuHamburgerContainer {\n    display: flex;\n    align-items: center;\n}\n\n.mobileMenuHamburger {\n    grid-area: menu;\n    display: flex;\n    align-items: center;\n    width: var(--rem-15);\n    height: var(--rem-15);\n    cursor: pointer;\n    position: relative;\n    display: flex;\n    flex-flow: column;\n    justify-content: center;\n    border: none;\n    background: transparent;\n    padding: 0;\n\n    span {\n        width: 100%;\n        border-radius: 16px;\n        height: 2px;\n        position: absolute;\n        background: white;\n        transition: 0.2s;\n        transform-origin: left center;\n\n        &:first-child {\n            transform: translateY(-400%);\n        }\n\n        &:last-child {\n            transform: translateY(400%);\n        }\n    }\n}\n\n.open {\n    span {\n        &:first-child,\n        &:last-child {\n            transform: translateY(0px);\n        }\n    }\n}\n"],
        sourceRoot: ""
      }]), i.locals = {
        menuMobile: "rockstargames-modules-core-headerfd282c0ed200fdb171dae24f3902f6b1",
        menuMobileItems: "rockstargames-modules-core-headera72000cfbe48e7dc2c0f071ecf0b533c",
        menuMobileItem: "rockstargames-modules-core-headerb9830b1f4dd5e2813b68130c424c3aa6",
        menuMobileCta: "rockstargames-modules-core-headerd4f74f7e1cef072e336f954fae948a07",
        mobileMenuDrawer: "rockstargames-modules-core-headerd28d9855f9427597e52d7e74abbf75dc",
        fullMenuOpen: "rockstargames-modules-core-headerb179669051e37adce8fd2936eb8222de",
        mobileMenuContainer: "rockstargames-modules-core-headerd8335dcffc8b201a6f702cc7b22ebab7",
        mobileMenuOpen: "rockstargames-modules-core-headerb523d5fd993427cae2eda1f5b9225699",
        mobileMenuSearchOpen: "rockstargames-modules-core-headera2283f7a71bfe0902ebe7176a1f3f45a",
        overlay: "rockstargames-modules-core-headerd07fb32788b786e529979364bf8fcb5c",
        mobileMenuHamburger: "rockstargames-modules-core-headerffee60778b241ac8cd6bc04685b782d3",
        mobileMenuHamburgerContainer: "rockstargames-modules-core-headerfb5e947b9aa01caf3aa9bca4ddcb3dee",
        open: "rockstargames-modules-core-headere31b18e5d92d04a3ffe036ff25c1ee5a"
      };
      const d = i
    },
    40289: (a, e, n) => {
      n.d(e, {
        A: () => He
      });
      var t = n(42587),
        o = n.n(t),
        r = n(15081),
        i = n.n(r),
        d = n(79908),
        s = n.n(d),
        l = new URL(n(97439), n.b),
        c = new URL(n(24921), n.b),
        m = new URL(n(98230), n.b),
        g = new URL(n(26207), n.b),
        A = new URL(n(6903), n.b),
        f = new URL(n(22154), n.b),
        h = new URL(n(49200), n.b),
        b = new URL(n(20928), n.b),
        p = new URL(n(90768), n.b),
        C = new URL(n(29951), n.b),
        u = new URL(n(28255), n.b),
        v = new URL(n(47594), n.b),
        w = new URL(n(54414), n.b),
        y = new URL(n(5676), n.b),
        x = new URL(n(28326), n.b),
        _ = new URL(n(50225), n.b),
        k = new URL(n(32791), n.b),
        B = new URL(n(92973), n.b),
        I = new URL(n(25293), n.b),
        M = new URL(n(46962), n.b),
        S = new URL(n(66312), n.b),
        z = new URL(n(44934), n.b),
        R = new URL(n(66562), n.b),
        D = new URL(n(81117), n.b),
        N = new URL(n(62051), n.b),
        T = new URL(n(68577), n.b),
        E = new URL(n(9133), n.b),
        F = new URL(n(93458), n.b),
        L = new URL(n(77032), n.b),
        H = new URL(n(44486), n.b),
        P = new URL(n(89307), n.b),
        j = new URL(n(58853), n.b),
        G = new URL(n(46010), n.b),
        W = new URL(n(26739), n.b),
        J = new URL(n(68145), n.b),
        O = new URL(n(59792), n.b),
        K = new URL(n(79122), n.b),
        Q = new URL(n(50228), n.b),
        q = new URL(n(304), n.b),
        U = new URL(n(79539), n.b),
        Y = new URL(n(61494), n.b),
        Z = new URL(n(313), n.b),
        V = new URL(n(94904), n.b),
        X = new URL(n(49027), n.b),
        $ = new URL(n(83493), n.b),
        aa = new URL(n(53037), n.b),
        ea = new URL(n(93803), n.b),
        na = new URL(n(69400), n.b),
        ta = new URL(n(44840), n.b),
        oa = new URL(n(28168), n.b),
        ra = new URL(n(40792), n.b),
        ia = new URL(n(31431), n.b),
        da = new URL(n(51594), n.b),
        sa = new URL(n(21130), n.b),
        la = new URL(n(57390), n.b),
        ca = new URL(n(36606), n.b),
        ma = new URL(n(36334), n.b),
        ga = new URL(n(89457), n.b),
        Aa = new URL(n(79215), n.b),
        fa = new URL(n(34298), n.b),
        ha = new URL(n(20629), n.b),
        ba = new URL(n(55490), n.b),
        pa = new URL(n(44001), n.b),
        Ca = new URL(n(11917), n.b),
        ua = new URL(n(88622), n.b),
        va = new URL(n(93262), n.b),
        wa = new URL(n(52086), n.b),
        ya = new URL(n(66894), n.b),
        xa = i()(o()),
        _a = s()(l),
        ka = s()(c),
        Ba = s()(m),
        Ia = s()(g),
        Ma = s()(A),
        Sa = s()(f),
        za = s()(h),
        Ra = s()(b),
        Da = s()(p),
        Na = s()(C),
        Ta = s()(u),
        Ea = s()(v),
        Fa = s()(w),
        La = s()(y),
        Ha = s()(x),
        Pa = s()(_),
        ja = s()(k),
        Ga = s()(B),
        Wa = s()(I),
        Ja = s()(M),
        Oa = s()(S),
        Ka = s()(z),
        Qa = s()(R),
        qa = s()(D),
        Ua = s()(N),
        Ya = s()(T),
        Za = s()(E),
        Va = s()(F),
        Xa = s()(L),
        $a = s()(H),
        ae = s()(P),
        ee = s()(j),
        ne = s()(G),
        te = s()(W),
        oe = s()(J),
        re = s()(O),
        ie = s()(K),
        de = s()(Q),
        se = s()(q),
        le = s()(U),
        ce = s()(Y),
        me = s()(Z),
        ge = s()(V),
        Ae = s()(X),
        fe = s()($),
        he = s()(aa),
        be = s()(ea),
        pe = s()(na),
        Ce = s()(ta),
        ue = s()(oa),
        ve = s()(ra),
        we = s()(ia),
        ye = s()(da),
        xe = s()(sa),
        _e = s()(la),
        ke = s()(ca),
        Be = s()(ma),
        Ie = s()(ga),
        Me = s()(Aa),
        Se = s()(fa),
        ze = s()(ha),
        Re = s()(ba),
        De = s()(pa),
        Ne = s()(Ca),
        Te = s()(ua),
        Ee = s()(va),
        Fe = s()(wa),
        Le = s()(ya);
      xa.push([a.id, `.rockstargames-modules-core-headerd810b356346152e9202e393bb9034ca6{align-items:center;background:var(--white-15);border:none;border-radius:100px;color:var(--white-100);cursor:pointer;display:flex;font-family:var(--font-family-body);font-size:20px;font-style:normal;font-weight:700;justify-content:center;line-height:var(--rem-125);min-width:var(--rem-6);padding:var(--padding-xs) var(--padding-sm);text-align:center;transition:background-color .3s ease-in-out}.rockstargames-modules-core-headerd810b356346152e9202e393bb9034ca6 img{height:var(--nav-icon-size);margin-left:var(--grid-gap-xs);transition:filter .3s ease-in-out;width:var(--nav-icon-size)}.rockstargames-modules-core-headerd810b356346152e9202e393bb9034ca6:focus,.rockstargames-modules-core-headerd810b356346152e9202e393bb9034ca6:hover{background-color:var(--white-40);outline:none}.rockstargames-modules-core-headerd810b356346152e9202e393bb9034ca6.rockstargames-modules-core-headera5c2a7a82b5e56175f380cdcbc478730{background:var(--white-100);color:var(--black-200)}.rockstargames-modules-core-headerd810b356346152e9202e393bb9034ca6.rockstargames-modules-core-headera5c2a7a82b5e56175f380cdcbc478730 img{filter:invert()}.rockstargames-modules-core-headerd7897e1e3d81d97b95b02bdc6aa9a563{--font-family-body:"Chalet";--font-family-h:"ChaletComprime";--font-weight-regular:400;--font-weight-bold:700;--letter-spacing-body:0;--letter-spacing-h:0;--line-height-sm:1;--line-height-md:1.1;--line-height-lg:1.6;--black-200:#000;--black-100:#121212;--black-65:hsla(0,0%,7%,.65);--black-40:hsla(0,0%,7%,.4);--black-15:hsla(0,0%,7%,.15);--text-dark:#2d2d2d;--border-color:#2d2d2d;--white-100:#fff;--white-65:hsla(0,0%,100%,.65);--white-40:hsla(0,0%,100%,.4);--white-15:hsla(0,0%,100%,.15);--focusring-blue:blue;--red:#e03232;--circoloco-red:#eb1818;--rockstar-gold:#fcaf17;--playstation-blue:#00439c;--microsoft-green:#387a26;--pc-legacy:#b2b2b2;--pc-enhanced:#beb279;--color-h:var(--white-100);--color-body:var(--text-light);--green-light:#c1f7bd;--green-dark:#81da85;--scroll-thumb-color:#7d7d7d;--scroll-track-color:transparent;--max-width-sm:640px;--max-width-md:1088px;--max-width-lg:1920px;--max-width-xl:2560px;--spacing-xxs:0.25rem;--spacing-xs:0.5rem;--spacing-sm:1rem;--spacing-md:2rem;--spacing-lg:4rem;--spacing-xl:8rem;--grid-gap-xxs:var(--spacing-xxs);--grid-gap-xs:var(--spacing-xs);--grid-gap-sm:var(--spacing-sm);--grid-gap-md:var(--spacing-md);--grid-gap-lg:var(--spacing-lg);--grid-gap-xl:var(--spacing-xl);--padding-xxs:var(--spacing-xxs);--padding-xs:var(--spacing-xs);--padding-sm:var(--spacing-sm);--padding-md:var(--spacing-md);--padding-lg:var(--spacing-lg);--padding-xl:var(--spacing-xl);--margin-xxs:var(--spacing-xxs);--margin-xs:var(--spacing-xs);--margin-sm:var(--spacing-sm);--margin-md:var(--spacing-md);--margin-lg:var(--spacing-lg);--margin-xl:var(--spacing-xl);--border-radius-xs:2px;--border-radius-sm:4px;--border-radius-md:8px;--border-radius-lg:16px;--gradient-overlay-bottom:linear-gradient(180.08deg,transparent 25%,rgba(0,0,0,.5) 65%,rgba(0,0,0,.6));--gradient-overlay-right:linear-gradient(270deg,rgba(0,0,0,.9),transparent);--promo-banner-z-index:11500;--text-section-max-width:640px;--base-pixel-size:12px;--base-rem-size:0.75rem;--half-rem-size:calc(var(--base-rem-size) / 2);--twice-rem-size:calc(var(--base-rem-size) * 2);--section-margin-bottom:calc(var(--base-rem-size) * 4);--header-height:80px;--breadcrumbs-height:calc(var(--base-pixel-size) * 3.5);--max-width:1920px;--standard-color:#fcaf17;--color-h:#fff;--body-color:#e8e8e8;--background-color:#0b0b0b;--card-background-color:#000;--border-color:#282828;--privacy-banner-height:0px;--game-header-height:50px;--standard-grid-gap:calc(var(--base-rem-size) * 2);--image-margin-bottom:inherit;--image-rounding:0px;--image-rounding-static:16px;--image-rounding-static-sm:8px;--image-rounding-static-xs:4px;--grid-gap-static-xs:0.5rem;--grid-gap-static-sm:1rem;--grid-gap-static-md:2rem;--grid-gap-static-lg:4rem;--grid-gap-static-xl:8rem;--max-width-static:640px;--max-width-static-md:1088px;--max-width-static-lg:1920px;--max-width-static-xl:2560px;--margin-static:0 0 2rem;--h2-margin:2rem 0 0 0;--padding-sides:var(--grid-gap-static-lg);--padding-top-bottom:var(--padding-sides);--padding-static:var(--padding-sides);--font-family-std:var(--rsg-font-family-std);--font-family-h:var(--rsg-font-family-h);--font-family-h-halloween:nightmar;--rsg-font-family-std:HelveticaNowText;--rsg-font-family-h:HelveticaNowDisplayBold;--gta-font-family-std:Chalet;--gta-font-family-h:ChaletComprime;--gta-font-family-badge:Pricedown;--rdr-font-family-std:HapnaSlabSerif;--rdr-font-family-h:RDRLino-Regular;--rdr-font-family-newswire-subtitle:HapnaSlabSerif;--rdr-area-font:RDRCatalogueBold;--header-multiplier:var(--header-numerator,var(--root-font-size)) /var(--root-font-size);-webkit-font-smoothing:antialiased;--font-family-h:HelveticaNowDisplayBold;--font-family-body:HelveticaNowText;--text-light:#e8e8e8;--rem-025:calc(var(--base-rem-size) * 0.25);--rem-05:calc(var(--base-rem-size) * 0.5);--rem-075:calc(var(--base-rem-size) * 0.75);--rem-1:var(--base-rem-size);--rem-125:calc(var(--base-rem-size) * 1.25);--rem-15:calc(var(--base-rem-size) * 1.5);--rem-2:calc(var(--base-rem-size) * 2);--rem-3:calc(var(--base-rem-size) * 3);--rem-4:calc(var(--base-rem-size) * 4);--rem-6:calc(var(--base-rem-size) * 6);--rem-8:calc(var(--base-rem-size) * 8);--spacing-xxs:var(--rem-025);--spacing-xs:var(--rem-05);--spacing-sm:var(--rem-1);--spacing-md:var(--rem-2);--spacing-lg:var(--rem-4);--spacing-xl:var(--rem-8);--global-navigation-background:rgba(0,0,0,.85);--global-navigation-border-color:#282828;--global-navigation-box-shadow:0px 8px 20px 0px rgba(0,0,0,.7);--global-navigation-height:80px;--base-rem-size:var(--base-rem-size);--mobile-nav-padding-sides:32px;--mobile-nav-item-padding:20px var(--mobile-nav-padding-sides);--nav-icon-size:var(--rem-1);--nav-link-size:calc(var(--base-rem-size) * 0.75);--sub-nav-indent:var(--spacing-sm);--sub-nav-min-width:240px;background-color:var(--background-color,transparent);font-family:var(--font-family-std,HelveticaNowText);font-family:var(--font-family-body);font-size:calc(var(--root-font-size) * 1px);font-weight:var(--font-weight-std,400);letter-spacing:var(--letter-spacing-std,-.025em);line-height:var(--line-height-std,1.6)}@media (min-width:2560px){.rockstargames-modules-core-headerd7897e1e3d81d97b95b02bdc6aa9a563{--max-width-md:1440px}}@media (max-width:767px){.rockstargames-modules-core-headerd7897e1e3d81d97b95b02bdc6aa9a563{--spacing-lg:2rem;--spacing-xl:4rem;--grid-gap-static-lg:2rem;--grid-gap-static-xl:4rem}}@media (min-width:2560px){.rockstargames-modules-core-headerd7897e1e3d81d97b95b02bdc6aa9a563{--max-width-static-md:1440px}}@font-face{font-family:HelveticaNowText;font-style:italic;font-weight:400;src:url(${_a}) format("woff")}@font-face{font-family:HelveticaNowText;font-style:normal;font-weight:700;src:url(${ka}) format("woff")}@font-face{font-family:HelveticaNowDisplayMedium;font-style:normal;font-weight:400;src:url(${Ba}) format("woff")}@font-face{font-family:HelveticaNeueLTW05;font-style:normal;font-weight:400;src:url(${Ia}) format("woff")}@font-face{font-family:HelveticaNeueLTW05;font-style:italic;font-weight:400;src:url(${Ma}) format("woff")}@font-face{font-family:HelveticaNeueLTW07;font-style:normal;font-weight:400;src:url(${Sa}) format("woff")}@font-face{font-family:HelveticaNeueLTW07;font-style:italic;font-weight:400;src:url(${za}) format("woff")}@font-face{font-family:HelveticaNeueLTW07;font-style:normal;font-weight:700;src:url(${Ra}) format("woff")}@font-face{font-family:HelveticaNeueLTW07;font-style:italic;font-weight:700;src:url(${Da}) format("woff")}@font-face{font-family:HelveticaNeueLTW07-85Heavy;font-style:normal;font-weight:700;src:url(${Na}) format("woff")}@font-face{font-family:NeueHelveticaPaneuropean;font-style:normal;font-weight:400;src:url(${Ta}) format("woff")}@font-face{font-family:SackersGothicW01-Square;font-style:normal;font-weight:400;src:url(${Ea}) format("woff")}@font-face{font-family:Cabrito-Nordem;font-style:normal;font-weight:400;src:url(${Fa}) format("woff")}@font-face{font-family:Droid-Serif-Pro;font-style:normal;font-weight:400;src:url(${La}) format("woff")}@font-face{font-family:NotoSansSC;font-style:normal;font-weight:400;src:url(${Ha}) format("woff")}@font-face{font-family:NotoSansSC;font-style:normal;font-weight:500;src:url(${Pa}) format("woff")}@font-face{font-family:NotoSansSC;font-style:normal;font-weight:700;src:url(${ja}) format("woff")}@font-face{font-family:NotoSansSC;font-style:normal;font-weight:900;src:url(${Ga}) format("woff")}@font-face{font-family:NotoSansTC;font-style:normal;font-weight:400;src:url(${Wa}) format("woff")}@font-face{font-family:NotoSansTC;font-style:normal;font-weight:500;src:url(${Ja}) format("woff")}@font-face{font-family:NotoSansTC;font-style:normal;font-weight:700;src:url(${Oa}) format("woff")}@font-face{font-family:NotoSansTC;font-style:normal;font-weight:900;src:url(${Ka}) format("woff")}@font-face{font-family:NotoSansJP;font-style:normal;font-weight:400;src:url(${Qa}) format("woff")}@font-face{font-family:NotoSansJP;font-style:normal;font-weight:500;src:url(${qa}) format("woff")}@font-face{font-family:NotoSansJP;font-style:normal;font-weight:700;src:url(${Ua}) format("woff")}@font-face{font-family:NotoSansJP;font-style:normal;font-weight:900;src:url(${Ya}) format("woff")}@font-face{font-family:NotoSansKR;font-style:normal;font-weight:400;src:url(${Za}) format("woff")}@font-face{font-family:NotoSansKR;font-style:normal;font-weight:500;src:url(${Va}) format("woff")}@font-face{font-family:NotoSansKR;font-style:normal;font-weight:700;src:url(${Xa}) format("woff")}@font-face{font-family:NotoSansKR;font-style:normal;font-weight:900;src:url(${$a}) format("woff")}@font-face{font-family:NotoSerifJP;font-style:normal;font-weight:700;src:url(${ae}) format("woff")}@font-face{font-family:NotoSerifJP;font-style:normal;font-weight:900;src:url(${ee}) format("woff")}@font-face{font-family:NotoSerifKR;font-style:normal;font-weight:700;src:url(${ne}) format("woff")}@font-face{font-family:NotoSerifKR;font-style:normal;font-weight:900;src:url(${ne}) format("woff")}@font-face{font-family:NotoSerifSC;font-style:normal;font-weight:700;src:url(${te}) format("woff")}@font-face{font-family:NotoSerifSC;font-style:normal;font-weight:900;src:url(${oe}) format("woff")}@font-face{font-family:NotoSerifTC;font-style:normal;font-weight:700;src:url(${re}) format("woff")}@font-face{font-family:NotoSerifTC;font-style:normal;font-weight:900;src:url(${ie}) format("woff")}@font-face{font-family:ChaletComprime;font-style:normal;font-weight:400;src:url(${de}) format("woff")}@font-face{font-family:ChaletComprime;font-style:normal;font-weight:700;src:url(${se}) format("woff")}@font-face{font-family:Chalet;font-style:normal;font-weight:400;src:url(${le}) format("woff")}@font-face{font-family:Chalet;font-style:normal;font-weight:700;src:url(${ce}) format("woff")}@font-face{font-family:Pricedown;font-style:normal;font-weight:700;src:url(${me}) format("woff")}@font-face{font-family:NeueHelveticaW05;font-style:normal;font-weight:400;src:url(${ge}) format("woff")}@font-face{font-family:NeueHelveticaW05;font-style:normal;font-weight:700;src:url(${Ae}) format("woff")}@font-face{font-family:NeueHelveticaW05;font-style:normal;font-weight:900;src:url(${fe}) format("woff")}@font-face{font-family:FrizQuadrataW05;font-style:normal;font-weight:400;src:url(${he}) format("woff")}@font-face{font-family:FrizQuadrataW05;font-style:italic;font-weight:400;src:url(${be}) format("woff")}@font-face{font-family:FrizQuadrataW05;font-style:normal;font-weight:700;src:url(${pe}) format("woff")}@font-face{font-family:FrizQuadrataW05;font-style:italic;font-weight:700;src:url(${Ce}) format("woff")}@font-face{font-family:CorporateW05;font-style:normal;font-weight:400;src:url(${ue}) format("woff")}@font-face{font-family:NimbusSansW05;font-style:normal;font-weight:400;src:url(${ve}) format("woff")}@font-face{font-family:NimbusSansW05;font-style:normal;font-weight:700;src:url(${we}) format("woff")}@font-face{font-family:EurostileNextW05;font-style:normal;font-weight:700;src:url(${ye}) format("woff")}@font-face{font-family:Diploma;font-style:normal;font-weight:400;src:url(${xe}) format("woff")}@font-face{font-family:BrushScriptMT;font-style:normal;font-weight:400;src:url(${_e}) format("woff")}@font-face{font-family:BankGothicBT;font-style:normal;font-weight:400;src:url(${ke}) format("woff")}@font-face{font-family:MeltdownRegular;font-style:normal;font-weight:400;src:url(${Be}) format("woff")}@font-face{font-family:SharkSnackRegular;font-style:normal;font-weight:400;src:url(${Ie}) format("woff")}@font-face{font-family:GTAArtDeco;font-style:normal;font-weight:400;src:url(${Me}) format("woff")}@font-face{font-family:GTAArtDeco;font-style:normal;font-weight:500;src:url(${Se}) format("woff")}@font-face{font-family:RDRLino-Regular;font-style:normal;font-weight:400;src:url(${ze}) format("woff")}@font-face{font-family:HapnaSlabSerif;font-style:normal;font-weight:400;src:url(${Re}) format("woff")}@font-face{font-family:HapnaSlabSerif;font-style:normal;font-weight:700;src:url(${De}) format("woff")}@font-face{font-family:nightmar;font-style:normal;font-weight:100;src:url(${Ne}) format("woff")}@font-face{font-family:RDRCatalogueBold;font-style:normal;font-weight:700;src:url(${Te}) format("woff")}@font-face{font-family:RDRUltraHeadline;font-style:normal;font-weight:400;src:url(${Ee}) format("woff")}@media (min-width:0px){.rockstargames-modules-core-headerd7897e1e3d81d97b95b02bdc6aa9a563{--root-font-size:16}}@media (min-width:768px){.rockstargames-modules-core-headerd7897e1e3d81d97b95b02bdc6aa9a563{--root-font-size:18}}@media (min-width:1024px){.rockstargames-modules-core-headerd7897e1e3d81d97b95b02bdc6aa9a563{--root-font-size:20}}@media (min-width:1920px){.rockstargames-modules-core-headerd7897e1e3d81d97b95b02bdc6aa9a563{--root-font-size:22}}.rockstargames-modules-core-headerd7897e1e3d81d97b95b02bdc6aa9a563 *{box-sizing:border-box}.rockstargames-modules-core-headerd7897e1e3d81d97b95b02bdc6aa9a563 a{color:inherit;text-decoration:none}.rockstargames-modules-core-headerd7897e1e3d81d97b95b02bdc6aa9a563 figure,.rockstargames-modules-core-headerd7897e1e3d81d97b95b02bdc6aa9a563 h1,.rockstargames-modules-core-headerd7897e1e3d81d97b95b02bdc6aa9a563 h2,.rockstargames-modules-core-headerd7897e1e3d81d97b95b02bdc6aa9a563 h3,.rockstargames-modules-core-headerd7897e1e3d81d97b95b02bdc6aa9a563 h4,.rockstargames-modules-core-headerd7897e1e3d81d97b95b02bdc6aa9a563 h5,.rockstargames-modules-core-headerd7897e1e3d81d97b95b02bdc6aa9a563 h6,.rockstargames-modules-core-headerd7897e1e3d81d97b95b02bdc6aa9a563 p{margin:0}.rockstargames-modules-core-headerd7897e1e3d81d97b95b02bdc6aa9a563 caption,.rockstargames-modules-core-headerd7897e1e3d81d97b95b02bdc6aa9a563 figcaption{--padding-dynamic:var(--padding-sides);--padding-dynamic-tb:initial;color:var(--body-color);display:block;font-family:var(--font-family-std);font-size:var(--font-size-2);font-style:italic;margin:var(--grid-gap-static-sm) auto 0;padding:var(--padding-t,var(--padding-dynamic-tb,0)) var(--padding-dynamic,0) var(--padding-b,var(--padding-dynamic-tb,0)) var(--padding-dynamic,0);text-align:center}.rockstargames-modules-core-headerd7897e1e3d81d97b95b02bdc6aa9a563 caption p,.rockstargames-modules-core-headerd7897e1e3d81d97b95b02bdc6aa9a563 figcaption p{display:block}.rockstargames-modules-core-headerd7897e1e3d81d97b95b02bdc6aa9a563 :lang(ru_ru){--font-family-h-halloween:RDRLino-Regular}.rockstargames-modules-core-headerd7897e1e3d81d97b95b02bdc6aa9a563 :lang(ko_kr){word-break:keep-all}.rockstargames-modules-core-headerd7897e1e3d81d97b95b02bdc6aa9a563:lang(ja_jp){--rsg-font-family-std:HelveticaNowText,NotoSansJP}.rockstargames-modules-core-headerd7897e1e3d81d97b95b02bdc6aa9a563:lang(zh_hans){--rsg-font-family-std:HelveticaNowText,NotoSansSC}.rockstargames-modules-core-headerd7897e1e3d81d97b95b02bdc6aa9a563:lang(zh_tw){--rsg-font-family-std:HelveticaNowText,NotoSansTC}.rockstargames-modules-core-headerd7897e1e3d81d97b95b02bdc6aa9a563:lang(ja_jp){--rsg-font-family-h:HelveticaNowDisplayBold,NotoSansJP}.rockstargames-modules-core-headerd7897e1e3d81d97b95b02bdc6aa9a563:lang(zh_hans){--rsg-font-family-h:HelveticaNowDisplayBold,NotoSansSC}.rockstargames-modules-core-headerd7897e1e3d81d97b95b02bdc6aa9a563:lang(zh_tw){--rsg-font-family-h:HelveticaNowDisplayBold,NotoSansTC}.rockstargames-modules-core-headerd7897e1e3d81d97b95b02bdc6aa9a563:lang(ja_jp){--gta-font-family-std:Chalet,NotoSansJP}.rockstargames-modules-core-headerd7897e1e3d81d97b95b02bdc6aa9a563:lang(zh_hans){--gta-font-family-std:Chalet,NotoSansSC}.rockstargames-modules-core-headerd7897e1e3d81d97b95b02bdc6aa9a563:lang(zh_tw){--gta-font-family-std:Chalet,NotoSansTC}.rockstargames-modules-core-headerd7897e1e3d81d97b95b02bdc6aa9a563:lang(ja_jp){--gta-font-family-h:ChaletComprime,NotoSansJP}.rockstargames-modules-core-headerd7897e1e3d81d97b95b02bdc6aa9a563:lang(zh_hans){--gta-font-family-h:ChaletComprime,NotoSansSC}.rockstargames-modules-core-headerd7897e1e3d81d97b95b02bdc6aa9a563:lang(zh_tw){--gta-font-family-h:ChaletComprime,NotoSansTC}.rockstargames-modules-core-headerd7897e1e3d81d97b95b02bdc6aa9a563:lang(ja_jp){--gta-font-family-badge:Pricedown,NotoSansJP}.rockstargames-modules-core-headerd7897e1e3d81d97b95b02bdc6aa9a563:lang(zh_hans){--gta-font-family-badge:Pricedown,NotoSansSC}.rockstargames-modules-core-headerd7897e1e3d81d97b95b02bdc6aa9a563:lang(zh_tw){--gta-font-family-badge:Pricedown,NotoSansTC}.rockstargames-modules-core-headerd7897e1e3d81d97b95b02bdc6aa9a563:lang(ja_jp){--rdr-font-family-std:HapnaSlabSerif,NotoSansJP}.rockstargames-modules-core-headerd7897e1e3d81d97b95b02bdc6aa9a563:lang(zh_hans){--rdr-font-family-std:HapnaSlabSerif,NotoSansSC}.rockstargames-modules-core-headerd7897e1e3d81d97b95b02bdc6aa9a563:lang(zh_tw){--rdr-font-family-std:HapnaSlabSerif,NotoSansTC}.rockstargames-modules-core-headerd7897e1e3d81d97b95b02bdc6aa9a563:lang(ja_jp){--rdr-font-family-h:RDRLino-Regular,NotoSansJP}.rockstargames-modules-core-headerd7897e1e3d81d97b95b02bdc6aa9a563:lang(zh_hans){--rdr-font-family-h:RDRLino-Regular,NotoSansSC}.rockstargames-modules-core-headerd7897e1e3d81d97b95b02bdc6aa9a563:lang(zh_tw){--rdr-font-family-h:RDRLino-Regular,NotoSansTC}.rockstargames-modules-core-headerd7897e1e3d81d97b95b02bdc6aa9a563:lang(ja_jp){--rdr-font-family-newswire-subtitle:HapnaSlabSerif,NotoSansJP}.rockstargames-modules-core-headerd7897e1e3d81d97b95b02bdc6aa9a563:lang(zh_hans){--rdr-font-family-newswire-subtitle:HapnaSlabSerif,NotoSansSC}.rockstargames-modules-core-headerd7897e1e3d81d97b95b02bdc6aa9a563:lang(zh_tw){--rdr-font-family-newswire-subtitle:HapnaSlabSerif,NotoSansTC}.rockstargames-modules-core-headerd7897e1e3d81d97b95b02bdc6aa9a563:lang(ja_jp){--rdr-area-font:RDRCatalogueBold,NotoSansJP}.rockstargames-modules-core-headerd7897e1e3d81d97b95b02bdc6aa9a563:lang(zh_hans){--rdr-area-font:RDRCatalogueBold,NotoSansSC}.rockstargames-modules-core-headerd7897e1e3d81d97b95b02bdc6aa9a563:lang(zh_tw){--rdr-area-font:RDRCatalogueBold,NotoSansTC}.rockstargames-modules-core-headerd7897e1e3d81d97b95b02bdc6aa9a563 h1,.rockstargames-modules-core-headerd7897e1e3d81d97b95b02bdc6aa9a563 h1.rockstargames-modules-core-headerec38186851cd542c1cabde176cb8684c,.rockstargames-modules-core-headerd7897e1e3d81d97b95b02bdc6aa9a563 h2,.rockstargames-modules-core-headerd7897e1e3d81d97b95b02bdc6aa9a563 h3,.rockstargames-modules-core-headerd7897e1e3d81d97b95b02bdc6aa9a563 h4{font-family:var(--font-family-h,HelveticaNowDisplayBold);letter-spacing:var(--letter-spacing-h,-.025em)}.rockstargames-modules-core-headerd7897e1e3d81d97b95b02bdc6aa9a563 h1,.rockstargames-modules-core-headerd7897e1e3d81d97b95b02bdc6aa9a563 h1.rockstargames-modules-core-headerec38186851cd542c1cabde176cb8684c{font-weight:var(--font-weight-h1,var(--font-weight-h,700));line-height:var(--line-height-h1,var(--line-height-h,1.1));text-transform:var(--text-transform-h1,var(--text-transform-h,none))}.rockstargames-modules-core-headerd7897e1e3d81d97b95b02bdc6aa9a563 h1.rockstargames-modules-core-headerec38186851cd542c1cabde176cb8684c{font-size:calc(var(--font-size-8) * var(--header-multiplier))}.rockstargames-modules-core-headerd7897e1e3d81d97b95b02bdc6aa9a563 h1{font-size:calc(var(--font-size-7) * var(--header-multiplier))}.rockstargames-modules-core-headerd7897e1e3d81d97b95b02bdc6aa9a563 h2{font-size:calc(var(--font-size-6) * var(--header-multiplier));font-weight:var(--font-weight-h2,var(--font-weight-h,700));text-transform:var(--text-transform-h2,var(--text-transform-h,none))}.rockstargames-modules-core-headerd7897e1e3d81d97b95b02bdc6aa9a563 h2,.rockstargames-modules-core-headerd7897e1e3d81d97b95b02bdc6aa9a563 h3{line-height:var(--line-height-h,1.1)}.rockstargames-modules-core-headerd7897e1e3d81d97b95b02bdc6aa9a563 h3{font-size:calc(var(--font-size-5) * var(--header-multiplier));font-weight:var(--font-weight-h3,var(--font-weight-h,700));text-transform:var(--text-transform-h3,var(--text-transform-h,none))}.rockstargames-modules-core-headerd7897e1e3d81d97b95b02bdc6aa9a563 h3[data-context=newswire-subtitle]{font-family:var(--font-family-newswire-subtitle,var(--font-family-h));font-size:calc(var(--font-size-5) * var(--h3-numerator-override-newswire-subtitle, var(--header-multiplier)));font-weight:var(--font-weight-newswire-subtitle,var(--font-weight-h));text-transform:var(--text-transform-newswire-subtitle)}[data-game=rdo] .rockstargames-modules-core-headerd7897e1e3d81d97b95b02bdc6aa9a563 h3,[data-game^=rdr] .rockstargames-modules-core-headerd7897e1e3d81d97b95b02bdc6aa9a563 h3{font-weight:var(--font-weight-h3,var(--font-weight-h,400))}.rockstargames-modules-core-headerd7897e1e3d81d97b95b02bdc6aa9a563 h4,.rockstargames-modules-core-headerd7897e1e3d81d97b95b02bdc6aa9a563 h5,.rockstargames-modules-core-headerd7897e1e3d81d97b95b02bdc6aa9a563 h6{font-size:calc(var(--font-size-4) * var(--header-multiplier));line-height:var(--line-height-h,1.1)}.rockstargames-modules-core-headerd7897e1e3d81d97b95b02bdc6aa9a563 h1,.rockstargames-modules-core-headerd7897e1e3d81d97b95b02bdc6aa9a563 h1.rockstargames-modules-core-headerec38186851cd542c1cabde176cb8684c{color:var(--color-h-dynamic,var(--color-h1,var(--color-h,inherit)))}.rockstargames-modules-core-headerd7897e1e3d81d97b95b02bdc6aa9a563 h2{color:var(--color-h-dynamic,var(--color-h2,var(--color-h,inherit)))}.rockstargames-modules-core-headerd7897e1e3d81d97b95b02bdc6aa9a563 h3{color:var(--color-h-dynamic,var(--color-h3,var(--color-h,inherit)))}.rockstargames-modules-core-headerd7897e1e3d81d97b95b02bdc6aa9a563 h3[data-context=newswire-subtitle]{color:var(--color-subtitle-dynamic,var(--color-h-dynamic,var(--color-h3,var(--color-h,inherit))))}.rockstargames-modules-core-headerd7897e1e3d81d97b95b02bdc6aa9a563 h4,.rockstargames-modules-core-headerd7897e1e3d81d97b95b02bdc6aa9a563 h5,.rockstargames-modules-core-headerd7897e1e3d81d97b95b02bdc6aa9a563 h6{color:var(--color-h-dynamic,var(--color-h,inherit))}.rockstargames-modules-core-headerd7897e1e3d81d97b95b02bdc6aa9a563 [template=community]{--time-color:var(--body-color,#2d2d2d);--breadcrumb-separator-filter-invert:invert(0)}.rockstargames-modules-core-headerd7897e1e3d81d97b95b02bdc6aa9a563 [template=community] main{color:var(--color-h,#161616)}.rockstargames-modules-core-headerd7897e1e3d81d97b95b02bdc6aa9a563 [template=community] p{color:var(--body-color,#2d2d2d)}.rockstargames-modules-core-headerd7897e1e3d81d97b95b02bdc6aa9a563 [data-game^=gta]{--font-family-std:var(--gta-font-family-std);--font-family-h:var(--gta-font-family-h);--letter-spacing-h:0;--line-height-h1:1;--font-weight-newswire-subtitle:400;--letter-spacing-std:0;--color-h:#fff;--body-color:#e8e8e8;--tag-color:#e8e8e8;--rsg-font-family-std:HelveticaNowText;--rsg-font-family-h:HelveticaNowDisplayBold;--gta-font-family-std:Chalet;--gta-font-family-h:ChaletComprime;--gta-font-family-badge:Pricedown;--rdr-font-family-std:HapnaSlabSerif;--rdr-font-family-h:RDRLino-Regular;--rdr-font-family-newswire-subtitle:HapnaSlabSerif;--rdr-area-font:RDRCatalogueBold;--header-multiplier:var(--header-numerator,var(--root-font-size)) /var(--root-font-size);-webkit-font-smoothing:antialiased;background-color:var(--background-color,transparent);color:#e8e8e8;font-family:var(--font-family-std,HelveticaNowText);font-size:calc(var(--root-font-size) * 1px);font-weight:var(--font-weight-std,400);letter-spacing:var(--letter-spacing-std,-.025em);line-height:var(--line-height-std,1.6)}@media (min-width:0px){.rockstargames-modules-core-headerd7897e1e3d81d97b95b02bdc6aa9a563 [data-game^=gta]{--header-numerator:20.8}}@media (min-width:768px){.rockstargames-modules-core-headerd7897e1e3d81d97b95b02bdc6aa9a563 [data-game^=gta]{--header-numerator:23.4}}@media (min-width:1024px){.rockstargames-modules-core-headerd7897e1e3d81d97b95b02bdc6aa9a563 [data-game^=gta]{--header-numerator:26}}@media (min-width:1920px){.rockstargames-modules-core-headerd7897e1e3d81d97b95b02bdc6aa9a563 [data-game^=gta]{--header-numerator:29.25}}.rockstargames-modules-core-headerd7897e1e3d81d97b95b02bdc6aa9a563 [data-game^=gta]:lang(ja_jp){--rsg-font-family-std:HelveticaNowText,NotoSansJP}.rockstargames-modules-core-headerd7897e1e3d81d97b95b02bdc6aa9a563 [data-game^=gta]:lang(zh_hans){--rsg-font-family-std:HelveticaNowText,NotoSansSC}.rockstargames-modules-core-headerd7897e1e3d81d97b95b02bdc6aa9a563 [data-game^=gta]:lang(zh_tw){--rsg-font-family-std:HelveticaNowText,NotoSansTC}.rockstargames-modules-core-headerd7897e1e3d81d97b95b02bdc6aa9a563 [data-game^=gta]:lang(ja_jp){--rsg-font-family-h:HelveticaNowDisplayBold,NotoSansJP}.rockstargames-modules-core-headerd7897e1e3d81d97b95b02bdc6aa9a563 [data-game^=gta]:lang(zh_hans){--rsg-font-family-h:HelveticaNowDisplayBold,NotoSansSC}.rockstargames-modules-core-headerd7897e1e3d81d97b95b02bdc6aa9a563 [data-game^=gta]:lang(zh_tw){--rsg-font-family-h:HelveticaNowDisplayBold,NotoSansTC}.rockstargames-modules-core-headerd7897e1e3d81d97b95b02bdc6aa9a563 [data-game^=gta]:lang(ja_jp){--gta-font-family-std:Chalet,NotoSansJP}.rockstargames-modules-core-headerd7897e1e3d81d97b95b02bdc6aa9a563 [data-game^=gta]:lang(zh_hans){--gta-font-family-std:Chalet,NotoSansSC}.rockstargames-modules-core-headerd7897e1e3d81d97b95b02bdc6aa9a563 [data-game^=gta]:lang(zh_tw){--gta-font-family-std:Chalet,NotoSansTC}.rockstargames-modules-core-headerd7897e1e3d81d97b95b02bdc6aa9a563 [data-game^=gta]:lang(ja_jp){--gta-font-family-h:ChaletComprime,NotoSansJP}.rockstargames-modules-core-headerd7897e1e3d81d97b95b02bdc6aa9a563 [data-game^=gta]:lang(zh_hans){--gta-font-family-h:ChaletComprime,NotoSansSC}.rockstargames-modules-core-headerd7897e1e3d81d97b95b02bdc6aa9a563 [data-game^=gta]:lang(zh_tw){--gta-font-family-h:ChaletComprime,NotoSansTC}.rockstargames-modules-core-headerd7897e1e3d81d97b95b02bdc6aa9a563 [data-game^=gta]:lang(ja_jp){--gta-font-family-badge:Pricedown,NotoSansJP}.rockstargames-modules-core-headerd7897e1e3d81d97b95b02bdc6aa9a563 [data-game^=gta]:lang(zh_hans){--gta-font-family-badge:Pricedown,NotoSansSC}.rockstargames-modules-core-headerd7897e1e3d81d97b95b02bdc6aa9a563 [data-game^=gta]:lang(zh_tw){--gta-font-family-badge:Pricedown,NotoSansTC}.rockstargames-modules-core-headerd7897e1e3d81d97b95b02bdc6aa9a563 [data-game^=gta]:lang(ja_jp){--rdr-font-family-std:HapnaSlabSerif,NotoSansJP}.rockstargames-modules-core-headerd7897e1e3d81d97b95b02bdc6aa9a563 [data-game^=gta]:lang(zh_hans){--rdr-font-family-std:HapnaSlabSerif,NotoSansSC}.rockstargames-modules-core-headerd7897e1e3d81d97b95b02bdc6aa9a563 [data-game^=gta]:lang(zh_tw){--rdr-font-family-std:HapnaSlabSerif,NotoSansTC}.rockstargames-modules-core-headerd7897e1e3d81d97b95b02bdc6aa9a563 [data-game^=gta]:lang(ja_jp){--rdr-font-family-h:RDRLino-Regular,NotoSansJP}.rockstargames-modules-core-headerd7897e1e3d81d97b95b02bdc6aa9a563 [data-game^=gta]:lang(zh_hans){--rdr-font-family-h:RDRLino-Regular,NotoSansSC}.rockstargames-modules-core-headerd7897e1e3d81d97b95b02bdc6aa9a563 [data-game^=gta]:lang(zh_tw){--rdr-font-family-h:RDRLino-Regular,NotoSansTC}.rockstargames-modules-core-headerd7897e1e3d81d97b95b02bdc6aa9a563 [data-game^=gta]:lang(ja_jp){--rdr-font-family-newswire-subtitle:HapnaSlabSerif,NotoSansJP}.rockstargames-modules-core-headerd7897e1e3d81d97b95b02bdc6aa9a563 [data-game^=gta]:lang(zh_hans){--rdr-font-family-newswire-subtitle:HapnaSlabSerif,NotoSansSC}.rockstargames-modules-core-headerd7897e1e3d81d97b95b02bdc6aa9a563 [data-game^=gta]:lang(zh_tw){--rdr-font-family-newswire-subtitle:HapnaSlabSerif,NotoSansTC}.rockstargames-modules-core-headerd7897e1e3d81d97b95b02bdc6aa9a563 [data-game^=gta]:lang(ja_jp){--rdr-area-font:RDRCatalogueBold,NotoSansJP}.rockstargames-modules-core-headerd7897e1e3d81d97b95b02bdc6aa9a563 [data-game^=gta]:lang(zh_hans){--rdr-area-font:RDRCatalogueBold,NotoSansSC}.rockstargames-modules-core-headerd7897e1e3d81d97b95b02bdc6aa9a563 [data-game^=gta]:lang(zh_tw){--rdr-area-font:RDRCatalogueBold,NotoSansTC}.rockstargames-modules-core-headerd7897e1e3d81d97b95b02bdc6aa9a563 [data-game^=gta] h1,.rockstargames-modules-core-headerd7897e1e3d81d97b95b02bdc6aa9a563 [data-game^=gta] h1.rockstargames-modules-core-headerec38186851cd542c1cabde176cb8684c,.rockstargames-modules-core-headerd7897e1e3d81d97b95b02bdc6aa9a563 [data-game^=gta] h2,.rockstargames-modules-core-headerd7897e1e3d81d97b95b02bdc6aa9a563 [data-game^=gta] h3,.rockstargames-modules-core-headerd7897e1e3d81d97b95b02bdc6aa9a563 [data-game^=gta] h4{font-family:var(--font-family-h,HelveticaNowDisplayBold);letter-spacing:var(--letter-spacing-h,-.025em)}.rockstargames-modules-core-headerd7897e1e3d81d97b95b02bdc6aa9a563 [data-game^=gta] h1,.rockstargames-modules-core-headerd7897e1e3d81d97b95b02bdc6aa9a563 [data-game^=gta] h1.rockstargames-modules-core-headerec38186851cd542c1cabde176cb8684c{font-weight:var(--font-weight-h1,var(--font-weight-h,700));line-height:var(--line-height-h1,var(--line-height-h,1.1));text-transform:var(--text-transform-h1,var(--text-transform-h,none))}.rockstargames-modules-core-headerd7897e1e3d81d97b95b02bdc6aa9a563 [data-game^=gta] h1.rockstargames-modules-core-headerec38186851cd542c1cabde176cb8684c{font-size:calc(var(--font-size-8) * var(--header-multiplier))}.rockstargames-modules-core-headerd7897e1e3d81d97b95b02bdc6aa9a563 [data-game^=gta] h1{font-size:calc(var(--font-size-7) * var(--header-multiplier))}.rockstargames-modules-core-headerd7897e1e3d81d97b95b02bdc6aa9a563 [data-game^=gta] h2{font-size:calc(var(--font-size-6) * var(--header-multiplier));font-weight:var(--font-weight-h2,var(--font-weight-h,700));line-height:var(--line-height-h,1.1);text-transform:var(--text-transform-h2,var(--text-transform-h,none))}.rockstargames-modules-core-headerd7897e1e3d81d97b95b02bdc6aa9a563 [data-game^=gta] h3{font-size:calc(var(--font-size-5) * var(--header-multiplier));font-weight:var(--font-weight-h3,var(--font-weight-h,700));line-height:var(--line-height-h,1.1);text-transform:var(--text-transform-h3,var(--text-transform-h,none))}.rockstargames-modules-core-headerd7897e1e3d81d97b95b02bdc6aa9a563 [data-game^=gta] h3[data-context=newswire-subtitle]{font-family:var(--font-family-newswire-subtitle,var(--font-family-h));font-size:calc(var(--font-size-5) * var(--h3-numerator-override-newswire-subtitle, var(--header-multiplier)));font-weight:var(--font-weight-newswire-subtitle,var(--font-weight-h));text-transform:var(--text-transform-newswire-subtitle)}[data-game=rdo] .rockstargames-modules-core-headerd7897e1e3d81d97b95b02bdc6aa9a563 [data-game^=gta] h3,[data-game^=rdr] .rockstargames-modules-core-headerd7897e1e3d81d97b95b02bdc6aa9a563 [data-game^=gta] h3{font-weight:var(--font-weight-h3,var(--font-weight-h,400))}.rockstargames-modules-core-headerd7897e1e3d81d97b95b02bdc6aa9a563 [data-game^=gta] h4,.rockstargames-modules-core-headerd7897e1e3d81d97b95b02bdc6aa9a563 [data-game^=gta] h5,.rockstargames-modules-core-headerd7897e1e3d81d97b95b02bdc6aa9a563 [data-game^=gta] h6{font-size:calc(var(--font-size-4) * var(--header-multiplier));line-height:var(--line-height-h,1.1)}.rockstargames-modules-core-headerd7897e1e3d81d97b95b02bdc6aa9a563 [data-game^=gta] h1,.rockstargames-modules-core-headerd7897e1e3d81d97b95b02bdc6aa9a563 [data-game^=gta] h1.rockstargames-modules-core-headerec38186851cd542c1cabde176cb8684c{color:var(--color-h-dynamic,var(--color-h1,var(--color-h,inherit)))}.rockstargames-modules-core-headerd7897e1e3d81d97b95b02bdc6aa9a563 [data-game^=gta] h2{color:var(--color-h-dynamic,var(--color-h2,var(--color-h,inherit)))}.rockstargames-modules-core-headerd7897e1e3d81d97b95b02bdc6aa9a563 [data-game^=gta] h3{color:var(--color-h-dynamic,var(--color-h3,var(--color-h,inherit)))}.rockstargames-modules-core-headerd7897e1e3d81d97b95b02bdc6aa9a563 [data-game^=gta] h3[data-context=newswire-subtitle]{color:var(--color-subtitle-dynamic,var(--color-h-dynamic,var(--color-h3,var(--color-h,inherit))))}.rockstargames-modules-core-headerd7897e1e3d81d97b95b02bdc6aa9a563 [data-game^=gta] h4,.rockstargames-modules-core-headerd7897e1e3d81d97b95b02bdc6aa9a563 [data-game^=gta] h5,.rockstargames-modules-core-headerd7897e1e3d81d97b95b02bdc6aa9a563 [data-game^=gta] h6{color:var(--color-h-dynamic,var(--color-h,inherit))}.rockstargames-modules-core-headerd7897e1e3d81d97b95b02bdc6aa9a563 [data-game^=gta] [template=community]{--time-color:var(--body-color,#2d2d2d);--breadcrumb-separator-filter-invert:invert(0)}.rockstargames-modules-core-headerd7897e1e3d81d97b95b02bdc6aa9a563 [data-game^=gta] [template=community] main{color:var(--color-h,#161616)}.rockstargames-modules-core-headerd7897e1e3d81d97b95b02bdc6aa9a563 [data-game^=gta] [template=community] p{color:var(--body-color,#2d2d2d)}.rockstargames-modules-core-headerd7897e1e3d81d97b95b02bdc6aa9a563 [data-game^=gta] .rockstargames-modules-core-headera59b3cca4d75c42f07ea4185e4222959{font-family:var(--gta-font-family-badge)}.rockstargames-modules-core-headerd7897e1e3d81d97b95b02bdc6aa9a563 :lang(pl_pl) [data-game^=gta]{--font-family-h:ChaletComprime,NeueHelveticaW05;--font-family-newswire-subtitle:ChaletComprime,NeueHelveticaW05;--badge-font:Pricedown,NeueHelveticaW05}.rockstargames-modules-core-headerd7897e1e3d81d97b95b02bdc6aa9a563 :lang(pl_pl) [data-context=newswire-article] h1{--font-family-h:NeueHelveticaPaneuropean}.rockstargames-modules-core-headerd7897e1e3d81d97b95b02bdc6aa9a563 :lang(ru_ru) [data-game^=gta]{--font-family-h:NeueHelveticaW05;--font-family-newswire-subtitle:NeueHelveticaW05;--badge-font:Pricedown,NeueHelveticaW05}.rockstargames-modules-core-headerd7897e1e3d81d97b95b02bdc6aa9a563 :lang(ru_ru) [data-context=newswire-article] h1{--font-family-h:NeueHelveticaW05}.rockstargames-modules-core-headerd7897e1e3d81d97b95b02bdc6aa9a563 :lang(zh_hans) [data-game^=gta]{--font-family-h:NotoSansSC;--font-family-newswire-subtitle:NotoSansSC;--font-family-std:NotoSansSC;--badge-font:Pricedown,NotoSansSC}.rockstargames-modules-core-headerd7897e1e3d81d97b95b02bdc6aa9a563 :lang(zh_hant) [data-game^=gta]{--font-family-h:NotoSansTC;--font-family-newswire-subtitle:NotoSansTC;--font-family-std:NotoSansTC;--badge-font:Pricedown,NotoSansTC}.rockstargames-modules-core-headerd7897e1e3d81d97b95b02bdc6aa9a563 :lang(ja_jp) [data-game^=gta]{--font-family-h:NotoSansJP;--font-family-newswire-subtitle:NotoSansJP;--font-family-std:NotoSansJP;--badge-font:Pricedown,NotoSansJP}.rockstargames-modules-core-headerd7897e1e3d81d97b95b02bdc6aa9a563 :lang(ja_jp) [data-context=newswire-article] h1{--font-family-h:NotoSansJP}.rockstargames-modules-core-headerd7897e1e3d81d97b95b02bdc6aa9a563 :lang(ko_kr) [data-game^=gta]{--font-family-h:NotoSansKR;--font-family-newswire-subtitle:NotoSansKR;--font-family-std:NotoSansKR;--badge-font:Pricedown,NotoSansKR}.rockstargames-modules-core-headerd7897e1e3d81d97b95b02bdc6aa9a563 [data-game=rdo],.rockstargames-modules-core-headerd7897e1e3d81d97b95b02bdc6aa9a563 [data-game^=rdr]{--font-family-std:var(--rdr-font-family-std);--font-family-h:var(--rdr-font-family-h);--font-family-newswire-subtitle:var(--rdr-font-family-newswire-subtitle);--area-font:var(--rdr-area-font);--font-weight-h:400;--font-weight-h1:400;--font-weight-h3:400;--font-weight-newswire-subtitle:700;--h3-numerator-override-newswire-subtitle:1;--letter-spacing-h:0;--line-height-h:1.2;--letter-spacing-std:0;--text-transform-newswire-subtitle:initial;--color-h:#c00;--color-h3:#fff;--color-h4:#fff;--body-color:#e8e8e8;--text-transform-h:uppercase;--tag-color:#e8e8e8;--rsg-font-family-std:HelveticaNowText;--rsg-font-family-h:HelveticaNowDisplayBold;--gta-font-family-std:Chalet;--gta-font-family-h:ChaletComprime;--gta-font-family-badge:Pricedown;--rdr-font-family-std:HapnaSlabSerif;--rdr-font-family-h:RDRLino-Regular;--rdr-font-family-newswire-subtitle:HapnaSlabSerif;--rdr-area-font:RDRCatalogueBold;--header-multiplier:var(--header-numerator,var(--root-font-size)) /var(--root-font-size);-webkit-font-smoothing:antialiased;background-color:var(--background-color,transparent);color:#e8e8e8;font-family:var(--font-family-std,HelveticaNowText);font-size:calc(var(--root-font-size) * 1px);font-weight:var(--font-weight-std,400);letter-spacing:var(--letter-spacing-std,-.025em);line-height:var(--line-height-std,1.6)}@media (min-width:0px){.rockstargames-modules-core-headerd7897e1e3d81d97b95b02bdc6aa9a563 [data-game=rdo],.rockstargames-modules-core-headerd7897e1e3d81d97b95b02bdc6aa9a563 [data-game^=rdr]{--header-numerator:15}}@media (min-width:768px){.rockstargames-modules-core-headerd7897e1e3d81d97b95b02bdc6aa9a563 [data-game=rdo],.rockstargames-modules-core-headerd7897e1e3d81d97b95b02bdc6aa9a563 [data-game^=rdr]{--header-numerator:16.88}}@media (min-width:1024px){.rockstargames-modules-core-headerd7897e1e3d81d97b95b02bdc6aa9a563 [data-game=rdo],.rockstargames-modules-core-headerd7897e1e3d81d97b95b02bdc6aa9a563 [data-game^=rdr]{--header-numerator:18.75}}@media (min-width:1920px){.rockstargames-modules-core-headerd7897e1e3d81d97b95b02bdc6aa9a563 [data-game=rdo],.rockstargames-modules-core-headerd7897e1e3d81d97b95b02bdc6aa9a563 [data-game^=rdr]{--header-numerator:21.09}}.rockstargames-modules-core-headerd7897e1e3d81d97b95b02bdc6aa9a563 [data-game=rdo]:lang(ja_jp),.rockstargames-modules-core-headerd7897e1e3d81d97b95b02bdc6aa9a563 [data-game^=rdr]:lang(ja_jp){--rsg-font-family-std:HelveticaNowText,NotoSansJP}.rockstargames-modules-core-headerd7897e1e3d81d97b95b02bdc6aa9a563 [data-game=rdo]:lang(zh_hans),.rockstargames-modules-core-headerd7897e1e3d81d97b95b02bdc6aa9a563 [data-game^=rdr]:lang(zh_hans){--rsg-font-family-std:HelveticaNowText,NotoSansSC}.rockstargames-modules-core-headerd7897e1e3d81d97b95b02bdc6aa9a563 [data-game=rdo]:lang(zh_tw),.rockstargames-modules-core-headerd7897e1e3d81d97b95b02bdc6aa9a563 [data-game^=rdr]:lang(zh_tw){--rsg-font-family-std:HelveticaNowText,NotoSansTC}.rockstargames-modules-core-headerd7897e1e3d81d97b95b02bdc6aa9a563 [data-game=rdo]:lang(ja_jp),.rockstargames-modules-core-headerd7897e1e3d81d97b95b02bdc6aa9a563 [data-game^=rdr]:lang(ja_jp){--rsg-font-family-h:HelveticaNowDisplayBold,NotoSansJP}.rockstargames-modules-core-headerd7897e1e3d81d97b95b02bdc6aa9a563 [data-game=rdo]:lang(zh_hans),.rockstargames-modules-core-headerd7897e1e3d81d97b95b02bdc6aa9a563 [data-game^=rdr]:lang(zh_hans){--rsg-font-family-h:HelveticaNowDisplayBold,NotoSansSC}.rockstargames-modules-core-headerd7897e1e3d81d97b95b02bdc6aa9a563 [data-game=rdo]:lang(zh_tw),.rockstargames-modules-core-headerd7897e1e3d81d97b95b02bdc6aa9a563 [data-game^=rdr]:lang(zh_tw){--rsg-font-family-h:HelveticaNowDisplayBold,NotoSansTC}.rockstargames-modules-core-headerd7897e1e3d81d97b95b02bdc6aa9a563 [data-game=rdo]:lang(ja_jp),.rockstargames-modules-core-headerd7897e1e3d81d97b95b02bdc6aa9a563 [data-game^=rdr]:lang(ja_jp){--gta-font-family-std:Chalet,NotoSansJP}.rockstargames-modules-core-headerd7897e1e3d81d97b95b02bdc6aa9a563 [data-game=rdo]:lang(zh_hans),.rockstargames-modules-core-headerd7897e1e3d81d97b95b02bdc6aa9a563 [data-game^=rdr]:lang(zh_hans){--gta-font-family-std:Chalet,NotoSansSC}.rockstargames-modules-core-headerd7897e1e3d81d97b95b02bdc6aa9a563 [data-game=rdo]:lang(zh_tw),.rockstargames-modules-core-headerd7897e1e3d81d97b95b02bdc6aa9a563 [data-game^=rdr]:lang(zh_tw){--gta-font-family-std:Chalet,NotoSansTC}.rockstargames-modules-core-headerd7897e1e3d81d97b95b02bdc6aa9a563 [data-game=rdo]:lang(ja_jp),.rockstargames-modules-core-headerd7897e1e3d81d97b95b02bdc6aa9a563 [data-game^=rdr]:lang(ja_jp){--gta-font-family-h:ChaletComprime,NotoSansJP}.rockstargames-modules-core-headerd7897e1e3d81d97b95b02bdc6aa9a563 [data-game=rdo]:lang(zh_hans),.rockstargames-modules-core-headerd7897e1e3d81d97b95b02bdc6aa9a563 [data-game^=rdr]:lang(zh_hans){--gta-font-family-h:ChaletComprime,NotoSansSC}.rockstargames-modules-core-headerd7897e1e3d81d97b95b02bdc6aa9a563 [data-game=rdo]:lang(zh_tw),.rockstargames-modules-core-headerd7897e1e3d81d97b95b02bdc6aa9a563 [data-game^=rdr]:lang(zh_tw){--gta-font-family-h:ChaletComprime,NotoSansTC}.rockstargames-modules-core-headerd7897e1e3d81d97b95b02bdc6aa9a563 [data-game=rdo]:lang(ja_jp),.rockstargames-modules-core-headerd7897e1e3d81d97b95b02bdc6aa9a563 [data-game^=rdr]:lang(ja_jp){--gta-font-family-badge:Pricedown,NotoSansJP}.rockstargames-modules-core-headerd7897e1e3d81d97b95b02bdc6aa9a563 [data-game=rdo]:lang(zh_hans),.rockstargames-modules-core-headerd7897e1e3d81d97b95b02bdc6aa9a563 [data-game^=rdr]:lang(zh_hans){--gta-font-family-badge:Pricedown,NotoSansSC}.rockstargames-modules-core-headerd7897e1e3d81d97b95b02bdc6aa9a563 [data-game=rdo]:lang(zh_tw),.rockstargames-modules-core-headerd7897e1e3d81d97b95b02bdc6aa9a563 [data-game^=rdr]:lang(zh_tw){--gta-font-family-badge:Pricedown,NotoSansTC}.rockstargames-modules-core-headerd7897e1e3d81d97b95b02bdc6aa9a563 [data-game=rdo]:lang(ja_jp),.rockstargames-modules-core-headerd7897e1e3d81d97b95b02bdc6aa9a563 [data-game^=rdr]:lang(ja_jp){--rdr-font-family-std:HapnaSlabSerif,NotoSansJP}.rockstargames-modules-core-headerd7897e1e3d81d97b95b02bdc6aa9a563 [data-game=rdo]:lang(zh_hans),.rockstargames-modules-core-headerd7897e1e3d81d97b95b02bdc6aa9a563 [data-game^=rdr]:lang(zh_hans){--rdr-font-family-std:HapnaSlabSerif,NotoSansSC}.rockstargames-modules-core-headerd7897e1e3d81d97b95b02bdc6aa9a563 [data-game=rdo]:lang(zh_tw),.rockstargames-modules-core-headerd7897e1e3d81d97b95b02bdc6aa9a563 [data-game^=rdr]:lang(zh_tw){--rdr-font-family-std:HapnaSlabSerif,NotoSansTC}.rockstargames-modules-core-headerd7897e1e3d81d97b95b02bdc6aa9a563 [data-game=rdo]:lang(ja_jp),.rockstargames-modules-core-headerd7897e1e3d81d97b95b02bdc6aa9a563 [data-game^=rdr]:lang(ja_jp){--rdr-font-family-h:RDRLino-Regular,NotoSansJP}.rockstargames-modules-core-headerd7897e1e3d81d97b95b02bdc6aa9a563 [data-game=rdo]:lang(zh_hans),.rockstargames-modules-core-headerd7897e1e3d81d97b95b02bdc6aa9a563 [data-game^=rdr]:lang(zh_hans){--rdr-font-family-h:RDRLino-Regular,NotoSansSC}.rockstargames-modules-core-headerd7897e1e3d81d97b95b02bdc6aa9a563 [data-game=rdo]:lang(zh_tw),.rockstargames-modules-core-headerd7897e1e3d81d97b95b02bdc6aa9a563 [data-game^=rdr]:lang(zh_tw){--rdr-font-family-h:RDRLino-Regular,NotoSansTC}.rockstargames-modules-core-headerd7897e1e3d81d97b95b02bdc6aa9a563 [data-game=rdo]:lang(ja_jp),.rockstargames-modules-core-headerd7897e1e3d81d97b95b02bdc6aa9a563 [data-game^=rdr]:lang(ja_jp){--rdr-font-family-newswire-subtitle:HapnaSlabSerif,NotoSansJP}.rockstargames-modules-core-headerd7897e1e3d81d97b95b02bdc6aa9a563 [data-game=rdo]:lang(zh_hans),.rockstargames-modules-core-headerd7897e1e3d81d97b95b02bdc6aa9a563 [data-game^=rdr]:lang(zh_hans){--rdr-font-family-newswire-subtitle:HapnaSlabSerif,NotoSansSC}.rockstargames-modules-core-headerd7897e1e3d81d97b95b02bdc6aa9a563 [data-game=rdo]:lang(zh_tw),.rockstargames-modules-core-headerd7897e1e3d81d97b95b02bdc6aa9a563 [data-game^=rdr]:lang(zh_tw){--rdr-font-family-newswire-subtitle:HapnaSlabSerif,NotoSansTC}.rockstargames-modules-core-headerd7897e1e3d81d97b95b02bdc6aa9a563 [data-game=rdo]:lang(ja_jp),.rockstargames-modules-core-headerd7897e1e3d81d97b95b02bdc6aa9a563 [data-game^=rdr]:lang(ja_jp){--rdr-area-font:RDRCatalogueBold,NotoSansJP}.rockstargames-modules-core-headerd7897e1e3d81d97b95b02bdc6aa9a563 [data-game=rdo]:lang(zh_hans),.rockstargames-modules-core-headerd7897e1e3d81d97b95b02bdc6aa9a563 [data-game^=rdr]:lang(zh_hans){--rdr-area-font:RDRCatalogueBold,NotoSansSC}.rockstargames-modules-core-headerd7897e1e3d81d97b95b02bdc6aa9a563 [data-game=rdo]:lang(zh_tw),.rockstargames-modules-core-headerd7897e1e3d81d97b95b02bdc6aa9a563 [data-game^=rdr]:lang(zh_tw){--rdr-area-font:RDRCatalogueBold,NotoSansTC}.rockstargames-modules-core-headerd7897e1e3d81d97b95b02bdc6aa9a563 [data-game=rdo] h1,.rockstargames-modules-core-headerd7897e1e3d81d97b95b02bdc6aa9a563 [data-game=rdo] h1.rockstargames-modules-core-headerec38186851cd542c1cabde176cb8684c,.rockstargames-modules-core-headerd7897e1e3d81d97b95b02bdc6aa9a563 [data-game=rdo] h2,.rockstargames-modules-core-headerd7897e1e3d81d97b95b02bdc6aa9a563 [data-game=rdo] h3,.rockstargames-modules-core-headerd7897e1e3d81d97b95b02bdc6aa9a563 [data-game=rdo] h4,.rockstargames-modules-core-headerd7897e1e3d81d97b95b02bdc6aa9a563 [data-game^=rdr] h1,.rockstargames-modules-core-headerd7897e1e3d81d97b95b02bdc6aa9a563 [data-game^=rdr] h1.rockstargames-modules-core-headerec38186851cd542c1cabde176cb8684c,.rockstargames-modules-core-headerd7897e1e3d81d97b95b02bdc6aa9a563 [data-game^=rdr] h2,.rockstargames-modules-core-headerd7897e1e3d81d97b95b02bdc6aa9a563 [data-game^=rdr] h3,.rockstargames-modules-core-headerd7897e1e3d81d97b95b02bdc6aa9a563 [data-game^=rdr] h4{font-family:var(--font-family-h,HelveticaNowDisplayBold);letter-spacing:var(--letter-spacing-h,-.025em)}.rockstargames-modules-core-headerd7897e1e3d81d97b95b02bdc6aa9a563 [data-game=rdo] h1,.rockstargames-modules-core-headerd7897e1e3d81d97b95b02bdc6aa9a563 [data-game=rdo] h1.rockstargames-modules-core-headerec38186851cd542c1cabde176cb8684c,.rockstargames-modules-core-headerd7897e1e3d81d97b95b02bdc6aa9a563 [data-game^=rdr] h1,.rockstargames-modules-core-headerd7897e1e3d81d97b95b02bdc6aa9a563 [data-game^=rdr] h1.rockstargames-modules-core-headerec38186851cd542c1cabde176cb8684c{font-weight:var(--font-weight-h1,var(--font-weight-h,700));line-height:var(--line-height-h1,var(--line-height-h,1.1));text-transform:var(--text-transform-h1,var(--text-transform-h,none))}.rockstargames-modules-core-headerd7897e1e3d81d97b95b02bdc6aa9a563 [data-game=rdo] h1.rockstargames-modules-core-headerec38186851cd542c1cabde176cb8684c,.rockstargames-modules-core-headerd7897e1e3d81d97b95b02bdc6aa9a563 [data-game^=rdr] h1.rockstargames-modules-core-headerec38186851cd542c1cabde176cb8684c{font-size:calc(var(--font-size-8) * var(--header-multiplier))}.rockstargames-modules-core-headerd7897e1e3d81d97b95b02bdc6aa9a563 [data-game=rdo] h1,.rockstargames-modules-core-headerd7897e1e3d81d97b95b02bdc6aa9a563 [data-game^=rdr] h1{font-size:calc(var(--font-size-7) * var(--header-multiplier))}.rockstargames-modules-core-headerd7897e1e3d81d97b95b02bdc6aa9a563 [data-game=rdo] h2,.rockstargames-modules-core-headerd7897e1e3d81d97b95b02bdc6aa9a563 [data-game^=rdr] h2{font-size:calc(var(--font-size-6) * var(--header-multiplier));font-weight:var(--font-weight-h2,var(--font-weight-h,700));line-height:var(--line-height-h,1.1);text-transform:var(--text-transform-h2,var(--text-transform-h,none))}.rockstargames-modules-core-headerd7897e1e3d81d97b95b02bdc6aa9a563 [data-game=rdo] h3,.rockstargames-modules-core-headerd7897e1e3d81d97b95b02bdc6aa9a563 [data-game^=rdr] h3{font-size:calc(var(--font-size-5) * var(--header-multiplier));font-weight:var(--font-weight-h3,var(--font-weight-h,700));line-height:var(--line-height-h,1.1);text-transform:var(--text-transform-h3,var(--text-transform-h,none))}.rockstargames-modules-core-headerd7897e1e3d81d97b95b02bdc6aa9a563 [data-game=rdo] h3[data-context=newswire-subtitle],.rockstargames-modules-core-headerd7897e1e3d81d97b95b02bdc6aa9a563 [data-game^=rdr] h3[data-context=newswire-subtitle]{font-family:var(--font-family-newswire-subtitle,var(--font-family-h));font-size:calc(var(--font-size-5) * var(--h3-numerator-override-newswire-subtitle, var(--header-multiplier)));font-weight:var(--font-weight-newswire-subtitle,var(--font-weight-h));text-transform:var(--text-transform-newswire-subtitle)}[data-game=rdo] .rockstargames-modules-core-headerd7897e1e3d81d97b95b02bdc6aa9a563 [data-game=rdo] h3,[data-game=rdo] .rockstargames-modules-core-headerd7897e1e3d81d97b95b02bdc6aa9a563 [data-game^=rdr] h3,[data-game^=rdr] .rockstargames-modules-core-headerd7897e1e3d81d97b95b02bdc6aa9a563 [data-game=rdo] h3,[data-game^=rdr] .rockstargames-modules-core-headerd7897e1e3d81d97b95b02bdc6aa9a563 [data-game^=rdr] h3{font-weight:var(--font-weight-h3,var(--font-weight-h,400))}.rockstargames-modules-core-headerd7897e1e3d81d97b95b02bdc6aa9a563 [data-game=rdo] h4,.rockstargames-modules-core-headerd7897e1e3d81d97b95b02bdc6aa9a563 [data-game=rdo] h5,.rockstargames-modules-core-headerd7897e1e3d81d97b95b02bdc6aa9a563 [data-game=rdo] h6,.rockstargames-modules-core-headerd7897e1e3d81d97b95b02bdc6aa9a563 [data-game^=rdr] h4,.rockstargames-modules-core-headerd7897e1e3d81d97b95b02bdc6aa9a563 [data-game^=rdr] h5,.rockstargames-modules-core-headerd7897e1e3d81d97b95b02bdc6aa9a563 [data-game^=rdr] h6{font-size:calc(var(--font-size-4) * var(--header-multiplier));line-height:var(--line-height-h,1.1)}.rockstargames-modules-core-headerd7897e1e3d81d97b95b02bdc6aa9a563 [data-game=rdo] h1,.rockstargames-modules-core-headerd7897e1e3d81d97b95b02bdc6aa9a563 [data-game=rdo] h1.rockstargames-modules-core-headerec38186851cd542c1cabde176cb8684c,.rockstargames-modules-core-headerd7897e1e3d81d97b95b02bdc6aa9a563 [data-game^=rdr] h1,.rockstargames-modules-core-headerd7897e1e3d81d97b95b02bdc6aa9a563 [data-game^=rdr] h1.rockstargames-modules-core-headerec38186851cd542c1cabde176cb8684c{color:var(--color-h-dynamic,var(--color-h1,var(--color-h,inherit)))}.rockstargames-modules-core-headerd7897e1e3d81d97b95b02bdc6aa9a563 [data-game=rdo] h2,.rockstargames-modules-core-headerd7897e1e3d81d97b95b02bdc6aa9a563 [data-game^=rdr] h2{color:var(--color-h-dynamic,var(--color-h2,var(--color-h,inherit)))}.rockstargames-modules-core-headerd7897e1e3d81d97b95b02bdc6aa9a563 [data-game=rdo] h3,.rockstargames-modules-core-headerd7897e1e3d81d97b95b02bdc6aa9a563 [data-game^=rdr] h3{color:var(--color-h-dynamic,var(--color-h3,var(--color-h,inherit)))}.rockstargames-modules-core-headerd7897e1e3d81d97b95b02bdc6aa9a563 [data-game=rdo] h3[data-context=newswire-subtitle],.rockstargames-modules-core-headerd7897e1e3d81d97b95b02bdc6aa9a563 [data-game^=rdr] h3[data-context=newswire-subtitle]{color:var(--color-subtitle-dynamic,var(--color-h-dynamic,var(--color-h3,var(--color-h,inherit))))}.rockstargames-modules-core-headerd7897e1e3d81d97b95b02bdc6aa9a563 [data-game=rdo] h4,.rockstargames-modules-core-headerd7897e1e3d81d97b95b02bdc6aa9a563 [data-game=rdo] h5,.rockstargames-modules-core-headerd7897e1e3d81d97b95b02bdc6aa9a563 [data-game=rdo] h6,.rockstargames-modules-core-headerd7897e1e3d81d97b95b02bdc6aa9a563 [data-game^=rdr] h4,.rockstargames-modules-core-headerd7897e1e3d81d97b95b02bdc6aa9a563 [data-game^=rdr] h5,.rockstargames-modules-core-headerd7897e1e3d81d97b95b02bdc6aa9a563 [data-game^=rdr] h6{color:var(--color-h-dynamic,var(--color-h,inherit))}.rockstargames-modules-core-headerd7897e1e3d81d97b95b02bdc6aa9a563 [data-game=rdo] [template=community],.rockstargames-modules-core-headerd7897e1e3d81d97b95b02bdc6aa9a563 [data-game^=rdr] [template=community]{--time-color:var(--body-color,#2d2d2d);--breadcrumb-separator-filter-invert:invert(0)}.rockstargames-modules-core-headerd7897e1e3d81d97b95b02bdc6aa9a563 [data-game=rdo] [template=community] main,.rockstargames-modules-core-headerd7897e1e3d81d97b95b02bdc6aa9a563 [data-game^=rdr] [template=community] main{color:var(--color-h,#161616)}.rockstargames-modules-core-headerd7897e1e3d81d97b95b02bdc6aa9a563 [data-game=rdo] [template=community] p,.rockstargames-modules-core-headerd7897e1e3d81d97b95b02bdc6aa9a563 [data-game^=rdr] [template=community] p{color:var(--body-color,#2d2d2d)}.rockstargames-modules-core-headerd7897e1e3d81d97b95b02bdc6aa9a563 :lang(pl_pl) [data-game=rdo],.rockstargames-modules-core-headerd7897e1e3d81d97b95b02bdc6aa9a563 :lang(pl_pl) [data-game^=rdr]{--font-family-h:RDRLino-Regular;--font-family-newswire-subtitle:HapnaSlabSerif;--font-family-std:HapnaSlabSerif;--badge-font:RDRLino-Regular}.rockstargames-modules-core-headerd7897e1e3d81d97b95b02bdc6aa9a563 :lang(zh_hans) [data-game=rdo],.rockstargames-modules-core-headerd7897e1e3d81d97b95b02bdc6aa9a563 :lang(zh_hans) [data-game^=rdr]{--font-family-h:NotoSerifSC;--font-family-newswire-subtitle:NotoSansSC,;--font-family-std:NotoSansSC;--area-font:NotoSansSC;--badge-font:RDRLino-Regular,NotoSerifSC}.rockstargames-modules-core-headerd7897e1e3d81d97b95b02bdc6aa9a563 :lang(zh_hant) [data-game=rdo],.rockstargames-modules-core-headerd7897e1e3d81d97b95b02bdc6aa9a563 :lang(zh_hant) [data-game^=rdr]{--font-family-h:NotoSerifTC;--font-family-newswire-subtitle:NotoSansTC;--font-family-std:NotoSansTC;--area-font:NotoSansTC;--badge-font:RDRLino-Regular,NotoSerifTC}.rockstargames-modules-core-headerd7897e1e3d81d97b95b02bdc6aa9a563 :lang(ja_jp) [data-game=rdo],.rockstargames-modules-core-headerd7897e1e3d81d97b95b02bdc6aa9a563 :lang(ja_jp) [data-game^=rdr]{--font-family-h:NotoSerifJP;--font-family-newswire-subtitle:NotoSansJP;--font-family-std:NotoSansJP;--area-font:NotoSansJP;--badge-font:RDRLino-Regular,NotoSerifTC}.rockstargames-modules-core-headerd7897e1e3d81d97b95b02bdc6aa9a563 :lang(ko_kr) [data-game=rdo],.rockstargames-modules-core-headerd7897e1e3d81d97b95b02bdc6aa9a563 :lang(ko_kr) [data-game^=rdr]{--font-family-h:NotoSerifKR;--font-family-newswire-subtitle:NotoSansKR;--font-family-std:NotoSansKR;--area-font:NotoSansKR;--badge-font:RDRLino-Regular,NotoSerifKR}@font-face{font-family:HelveticaNowDisplayBold;font-style:normal;font-weight:700;src:url(${Fe}) format("woff")}@font-face{font-family:HelveticaNowText;font-style:normal;font-weight:400;src:url(${Le}) format("woff")}.rockstargames-modules-core-headerd7897e1e3d81d97b95b02bdc6aa9a563 :root{--font-family-h:HelveticaNowDisplayBold;--font-family-body:HelveticaNowText}.rockstargames-modules-core-headerd7897e1e3d81d97b95b02bdc6aa9a563 :lang(pl-PL),.rockstargames-modules-core-headerd7897e1e3d81d97b95b02bdc6aa9a563 :lang(pl_pl){--font-family-h:NeueHelveticaPaneuropean;--font-family-std:NeueHelveticaPaneuropean}.rockstargames-modules-core-headerd7897e1e3d81d97b95b02bdc6aa9a563 :lang(ru-RU),.rockstargames-modules-core-headerd7897e1e3d81d97b95b02bdc6aa9a563 :lang(ru_ru){--font-family-h:NeueHelveticaPaneuropean;--font-family-body:NeueHelveticaPaneuropean}.rockstargames-modules-core-headerd7897e1e3d81d97b95b02bdc6aa9a563 [data-type-lang=pl],.rockstargames-modules-core-headerd7897e1e3d81d97b95b02bdc6aa9a563 [data-type-lang=ru]{font-family:NeueHelveticaPaneuropean!important}.rockstargames-modules-core-headerd7897e1e3d81d97b95b02bdc6aa9a563 :lang(zh-CN),.rockstargames-modules-core-headerd7897e1e3d81d97b95b02bdc6aa9a563 :lang(zh_hans){--font-family-h:ChaletComprime,NotoSansSC;--font-family-body:NotoSansSC}.rockstargames-modules-core-headerd7897e1e3d81d97b95b02bdc6aa9a563 [data-type-lang=zh]{font-family:ChaletComprime,NotoSansSC!important}.rockstargames-modules-core-headerd7897e1e3d81d97b95b02bdc6aa9a563 :lang(zh-TW),.rockstargames-modules-core-headerd7897e1e3d81d97b95b02bdc6aa9a563 :lang(zh_tw){--font-family-h:ChaletComprime,NotoSansTC;--font-family-body:NotoSansTC}.rockstargames-modules-core-headerd7897e1e3d81d97b95b02bdc6aa9a563 [data-type-lang=tw]{font-family:ChaletComprime,NotoSansTC!important}.rockstargames-modules-core-headerd7897e1e3d81d97b95b02bdc6aa9a563 :lang(ja-JP),.rockstargames-modules-core-headerd7897e1e3d81d97b95b02bdc6aa9a563 :lang(ja_jp){--font-family-h:HelveticaNowDisplayBold,NotoSansJP;--font-family-body:HelveticaNowText,NotoSansJP}.rockstargames-modules-core-headerd7897e1e3d81d97b95b02bdc6aa9a563 [data-type-lang=jp]{font-family:HelveticaNowText,NotoSansJP!important}.rockstargames-modules-core-headerd7897e1e3d81d97b95b02bdc6aa9a563 :lang(ko-KR),.rockstargames-modules-core-headerd7897e1e3d81d97b95b02bdc6aa9a563 :lang(ko_kr){--font-family-h:ChaletComprime,NotoSansKR;--font-family-body:NotoSansKR}.rockstargames-modules-core-headerd7897e1e3d81d97b95b02bdc6aa9a563 [data-type-lang=kr]{font-family:ChaletComprime,NotoSansKR!important}@media (min-width:0px){.rockstargames-modules-core-headerd7897e1e3d81d97b95b02bdc6aa9a563{--base-rem-size:16px}}@media (min-width:768px){.rockstargames-modules-core-headerd7897e1e3d81d97b95b02bdc6aa9a563{--base-rem-size:18px}}@media (min-width:1024px){.rockstargames-modules-core-headerd7897e1e3d81d97b95b02bdc6aa9a563{--base-rem-size:20px}}@media (min-width:1920px){.rockstargames-modules-core-headerd7897e1e3d81d97b95b02bdc6aa9a563{--base-rem-size:22px}}@media (max-width:1023px){.rockstargames-modules-core-headerd7897e1e3d81d97b95b02bdc6aa9a563{--nav-icon-size:var(--rem-125);--nav-link-size:calc(var(--base-rem-size) * 1.25);--sub-nav-indent:var(--spacing-md)}}`, "", {
        version: 3,
        sources: ["webpack://./../../buildtime/legacy-design-system/less/gen9-mixins.less", "webpack://./compositional/components/Portal/index.less", "webpack://./../../buildtime/legacy-design-system/less/gen9-vars.less", "webpack://./../../buildtime/legacy-design-system/less/mixins.less", "webpack://./../../buildtime/legacy-design-system/less/typography.less", "webpack://./compositional/components/Root/globalNavVars.less", "webpack://./compositional/components/Root/typography.less"],
        names: [],
        mappings: "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",
        sourcesContent: ["@import 'mixins.less';\n\n// Headlines\n.headline-6 () {\n    font-size: calc(var(--font-size-3) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n.headline-5 () {\n    font-size: calc(var(--font-size-4) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n.headline-4 () {\n    font-size: calc(var(--font-size-5) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n.headline-3 () {\n    font-size: calc(var(--font-size-6) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n.headline-3-bold () {\n    .headline-3();\n    font-weight: var(--font-weight-bold);\n    color: var(--color-override, var(--color-h));\n}\n\n.headline-2 () {\n    font-size: calc(var(--font-size-7) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-bold);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n.headline-1 () {\n    font-size: calc(var(--font-size-8) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-bold);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n.xLarge () {\n    font-size: calc(var(--font-size-9) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-bold);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n// Body\n.body-xs () {\n    font-size: var(--font-size-1);\n    font-family: var(--font-family-body);\n    line-height: var(--line-height-lg);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-body);\n    color: var(--color-body);\n}\n\n.body-xs-bold () {\n    .body-xs;\n    font-weight: var(--font-weight-bold);\n    color: var(--color-body);\n}\n\n.body-sm () {\n    font-size: var(--font-size-2);\n    font-family: var(--font-family-body);\n    line-height: var(--line-height-lg);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-body);\n    color: var(--color-body);\n}\n\n.body-sm-bold () {\n    .body-sm;\n    font-weight: var(--font-weight-bold);\n    color: var(--color-body);\n}\n\n.body-md () {\n    font-size: var(--font-size-3);\n    font-family: var(--font-family-body);\n    line-height: var(--line-height-lg);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-body);\n    color: var(--color-body);\n}\n\n.body-md-bold () {\n    .body-md;\n    font-weight: var(--font-weight-bold);\n    color: var(--color-body);\n}\n\n.body-lg () {\n    font-size: var(--font-size-4);\n    font-family: var(--font-family-body);\n    line-height: var(--line-height-lg);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-body);\n    color: var(--color-body);\n}\n\n.body-lg-bold () {\n    .body-lg;\n    font-weight: var(--font-weight-bold);\n    color: var(--color-body);\n}\n\n.handleFontDeclarationsGen9() {\n    h1 {\n        .headline-1;\n    }\n    h2 {\n        .headline-2;\n    }\n    h3 {\n        .headline-3;\n    }\n    h4 {\n        .headline-4;\n    }\n    h5 {\n        .headline-5;\n    }\n    p {\n        .body-md;\n    }\n}\n\n.handleMaxWidth(@max-width-default: 1000000px) {\n    width: 100%;\n    max-width: calc(\n        var(--max-width-dynamic, @max-width-default) +\n            var(--padding-dynamic, 0px) * 2\n    ) !important;\n    margin: 0 auto;\n}\n\n.handlePadding(@paddingSides: initial, @paddingTopBottom: initial) {\n    --padding-dynamic: @paddingSides;\n    --padding-dynamic-tb: @paddingTopBottom;\n\n    padding: var(--padding-t, var(--padding-dynamic-tb, 0))\n        var(--padding-dynamic, 0) var(--padding-b, var(--padding-dynamic-tb, 0))\n        var(--padding-dynamic, 0);\n}\n\n.commonContent() {\n    .handlePadding(var(--padding-sides), 0);\n    .handleMaxWidth(var(--content-max-width));\n}\n\n.backgroundIcon(@icon) {\n    background: url('../icons/@{icon}.svg') no-repeat center/1rem;\n}\n\n@iconBtnConfig: {\n    @small: {\n        size: 2rem;\n    };\n    @large: {\n        size: 3rem;\n    };\n};\n\n.iconBtn(@icon, @size: small) {\n    @lookup: @size;\n    width: @iconBtnConfig[@@lookup][size];\n    height: @iconBtnConfig[@@lookup][size];\n    position: relative;\n    cursor: pointer;\n    background: var(--black-65, rgba(0, 0, 0, 0.65));\n    border: 1px solid var(--white-100, #fff);\n    border-radius: 50%;\n    padding: 0;\n    transition: background 0.3s ease-in-out;\n    &::after {\n        .backgroundIcon(@icon);\n        content: '';\n        display: block;\n        height: 100%;\n        width: 100%;\n        position: absolute;\n        left: 0;\n        top: 0;\n        transition: 0.3s ease-in-out;\n    }\n\n    &:focus {\n        outline: none;\n        border: none;\n    }\n\n    .isTouchscreen({\n        &:active {\n            background: var(--white-100, #fff);\n            &::after {\n                filter: invert(1);\n            }\n        }\n    }, {\n        &:hover,\n        &:focus {\n            background: var(--white-100, #fff);\n            &::after {\n                filter: invert(1);\n            }\n        }\n    });\n}\n\n.iconBtnPlain(@icon, @size: small) {\n    @lookup: @size;\n    width: @iconBtnConfig[@@lookup][size];\n    height: @iconBtnConfig[@@lookup][size];\n    position: relative;\n    cursor: pointer;\n    padding: 0;\n\n    &::after {\n        content: '';\n        display: block;\n        height: 100%;\n        width: 100%;\n        position: absolute;\n        left: 0;\n        top: 0;\n        transition: 0.3s ease-in-out;\n        background: url('../icons/@{icon}.svg') no-repeat center/1.5rem;\n    }\n}\n\n.swiperBtn(@icon) {\n    .iconBtn(@icon, large);\n    background: var(--black-200);\n    border-radius: 0;\n    border: none;\n    &::after {\n        background-size: 1.5rem;\n    }\n}\n\n.pillBtn {\n    display: flex;\n    min-width: var(--rem-6);\n    padding: var(--padding-xs) var(--padding-sm);\n    justify-content: center;\n    align-items: center;\n    border: none;\n    border-radius: 100px;\n    background: var(--white-15);\n    cursor: pointer;\n\n    color: var(--white-100);\n    text-align: center;\n    font-family: var(--font-family-body);\n    font-size: 20px;\n    font-style: normal;\n    font-weight: 700;\n    line-height: var(--rem-125);\n\n    cursor: pointer;\n    transition: background-color 0.3s ease-in-out;\n\n    img {\n        margin-left: var(--grid-gap-xs);\n        height: var(--nav-icon-size);\n        width: var(--nav-icon-size);\n        transition: filter 0.3s ease-in-out;\n    }\n\n    &:hover,\n    &:focus {\n        background-color: var(--white-40);\n        outline: none;\n    }\n\n    &.selected {\n        color: var(--black-200);\n        background: var(--white-100);\n\n        img {\n            filter: invert();\n        }\n    }\n}\n\n.setGen9Root() {\n    --gen9-max-width: 2560px;\n    --content-max-width: var(--gen9-max-width);\n    --padding-sides: var(--padding-lg);\n    --content-padding: 0 var(--padding-sides);\n    flex: 1;\n    display: flex;\n    justify-content: center;\n\n    .xl({\n        --padding-sides: var(--padding-xl);\n    });\n\n    .handleFontDeclarationsGen9();\n}\n\n.scrollFade() {\n    // @note: this is breaking on firefox.\n    mask-image: linear-gradient(\n        to bottom,\n        var(--black-100) calc(100% - 48px),\n        transparent calc(100% + 16px)\n    );\n}\n\n.scrollbar() {\n    /* Firefox */\n    scrollbar-width: auto;\n    scrollbar-color: var(--scroll-thumb-color) var(--scroll-track-color);\n\n    /* Chrome, Edge, and Safari */\n    &::-webkit-scrollbar {\n        width: 8px;\n    }\n    &::-webkit-scrollbar-track {\n        background: transparent;\n    }\n    &::-webkit-scrollbar-thumb {\n        background-color: var(--scroll-thumb-color);\n        border-radius: 10px;\n        border: none;\n    }\n}\n\n.ifElse(@condition, @if-styles, @else-styles) {\n    @media @condition {\n        @if-styles();\n    }\n    @media not (@condition) {\n        @else-styles();\n    }\n}\n\n.isTouchscreen(@if-styles, @else-styles) {\n    .ifElse(~'(pointer: coarse)', @if-styles, @else-styles);\n}\n\n.mobile-landscape(@rules) {\n    @media only screen and (min-width: 480px) and (max-width: 1023px) and (orientation: landscape) {\n        @rules();\n    }\n}\n\n.caret(@color) {\n    .dropdownCaret(@color);\n}\n\n.horizontalScrollFade() {\n    mask-image: linear-gradient(\n        to right,\n        transparent,\n        rgba(0, 0, 0, 0.3) calc(var(--padding-sides) / 2),\n        #000 var(--padding-sides),\n        #000 calc(100% - var(--padding-sides)),\n        rgba(0, 0, 0, 0.3) calc(100% - (var(--padding-sides) / 2)),\n        transparent\n    );\n}\n\n// Accessibility\n.visuallyHidden() {\n    border: 0;\n    clip: rect(0 0 0 0);\n    height: 1px;\n    overflow: hidden;\n    padding: 0;\n    position: absolute;\n    white-space: nowrap;\n    width: 1px;\n}\n", "@import '@rsgweb/legacy-design-system/less/gen9-mixins.less';\n@import '../Root/globalNavVars.less';\n\n.portal {\n    @import '@rsgweb/legacy-design-system/less/gen9-vars.less';\n    .globalNavVars();\n}", "// Font Family\n--font-family-body: 'Chalet';\n--font-family-h: 'ChaletComprime';\n\n// Font Weight\n--font-weight-regular: 400;\n--font-weight-bold: 700;\n\n// Letter Spacing\n--letter-spacing-body: 0;\n--letter-spacing-h: 0;\n\n// Line Height\n--line-height-sm: 1;\n--line-height-md: 1.1;\n--line-height-lg: 1.6;\n\n// Colors\n--black-200: #000000;\n--black-100: #121212;\n--black-65: rgba(18, 18, 18, 0.65);\n--black-40: rgba(18, 18, 18, 0.4);\n--black-15: rgba(18, 18, 18, 0.15);\n--text-dark: #2d2d2d;\n--border-color: #2d2d2d;\n\n--white-100: #ffffff;\n--white-65: rgba(255, 255, 255, 0.65);\n--white-40: rgba(255, 255, 255, 0.4);\n--white-15: rgba(255, 255, 255, 0.15);\n--text-light: #e8e8e8;\n\n--focusring-blue: blue;\n--red: #e03232;\n--circoloco-red: #eb1818;\n--rockstar-gold: #fcaf17;\n--playstation-blue: #00439c;\n--microsoft-green: #387a26;\n--pc-legacy: #b2b2b2;\n/* #if PCALT */\n--pc-enhanced: #beb279;\n/* #endif */\n\n--color-h: var(--white-100);\n--color-body: var(--text-light);\n\n--green-light: #c1f7bd;\n--green-dark: #81da85;\n\n// Scrollbar Colors\n--scroll-thumb-color: #7d7d7d;\n--scroll-track-color: transparent;\n\n// Max-Widths\n--max-width-sm: 640px;\n--max-width-md: 1088px;\n--max-width-lg: 1920px;\n--max-width-xl: 2560px;\n.xxl({--max-width-md: 1440px;});\n\n// Spacing\n--spacing-xxs: 0.25rem;\n--spacing-xs: 0.5rem;\n--spacing-sm: 1rem;\n--spacing-md: 2rem;\n--spacing-lg: 4rem;\n--spacing-xl: 8rem;\n.smMax({--spacing-lg: 2rem; --spacing-xl: 4rem;});\n\n// Grid Gap\n--grid-gap-xxs: var(--spacing-xxs);\n--grid-gap-xs: var(--spacing-xs);\n--grid-gap-sm: var(--spacing-sm);\n--grid-gap-md: var(--spacing-md);\n--grid-gap-lg: var(--spacing-lg);\n--grid-gap-xl: var(--spacing-xl);\n\n// Padding\n--padding-xxs: var(--spacing-xxs);\n--padding-xs: var(--spacing-xs);\n--padding-sm: var(--spacing-sm);\n--padding-md: var(--spacing-md);\n--padding-lg: var(--spacing-lg);\n--padding-xl: var(--spacing-xl);\n\n// Margin\n--margin-xxs: var(--spacing-xxs);\n--margin-xs: var(--spacing-xs);\n--margin-sm: var(--spacing-sm);\n--margin-md: var(--spacing-md);\n--margin-lg: var(--spacing-lg);\n--margin-xl: var(--spacing-xl);\n\n// Border Radius\n--border-radius-xs: 2px;\n--border-radius-sm: 4px;\n--border-radius-md: 8px;\n--border-radius-lg: 16px;\n\n// Gradients\n--gradient-overlay-bottom: linear-gradient(\n    180.08deg,\n    rgba(0, 0, 0, 0) 25%,\n    rgba(0, 0, 0, 0.5) 65%,\n    rgba(0, 0, 0, 0.6) 100%\n);\n--gradient-overlay-right: linear-gradient(\n    270deg,\n    rgba(0, 0, 0, 0.9) 0%,\n    rgba(0, 0, 0, 0) 100%\n);\n\n// Z-indicies\n--promo-banner-z-index: 11500;\n", "/*\n * New Design System:\n * 1. Breakpoints\n * 2. Typography\n * 3. Variables\n * 4. Utility\n *     4.1 Flex\n *     4.2 Grid\n *     4.3 Max-Width\n *     4.4 Images\n *     4.5 Padding\n *     4.6 Fonts\n *     4.7 Games\n *     4.8 Tina\n *     4.9 Hacks\n * 5. Presentational\n */\n\n/* 1. Breakpoints */\n@screen-sm: 0px;\n@screen-md: 768px;\n@screen-lg: 1024px;\n@screen-xl: 1920px;\n@screen-xxl: 2560px;\n@sm-min-width: @screen-sm;\n@md-min-width: @screen-md;\n@lg-min-width: @screen-lg;\n@xl-min-width: @screen-xl;\n@xxl-min-width: @screen-xxl;\n@sm-max-width: (@md-min-width - 1px);\n@md-max-width: (@lg-min-width - 1px);\n@lg-max-width: (@xl-min-width - 1px);\n@xl-max-width: (@xxl-min-width - 1px);\n\n.sm(@rules) {\n    .smMin(@rules);\n}\n.smMin(@rules) {\n    @media (min-width: @sm-min-width) {\n        @rules();\n    }\n}\n.smMax(@rules) {\n    @media (max-width: @sm-max-width) {\n        @rules();\n    }\n}\n.smOnly(@rules) {\n    @media (min-width: @sm-min-width) and (max-width: @sm-max-width) {\n        @rules();\n    }\n}\n.md(@rules) {\n    .mdMin(@rules);\n}\n.mdMin(@rules) {\n    @media (min-width: @md-min-width) {\n        @rules();\n    }\n}\n.mdMax(@rules) {\n    @media (max-width: @md-max-width) {\n        @rules();\n    }\n}\n.mdOnly(@rules) {\n    @media (min-width: @md-min-width) and (max-width: @md-max-width) {\n        @rules();\n    }\n}\n.lg(@rules) {\n    .lgMin(@rules);\n}\n.lgMin(@rules) {\n    @media (min-width: @lg-min-width) {\n        @rules();\n    }\n}\n.lgMax(@rules) {\n    @media (max-width: @lg-max-width) {\n        @rules();\n    }\n}\n.lgOnly(@rules) {\n    @media (min-width: @lg-min-width) and (max-width: @lg-max-width) {\n        @rules();\n    }\n}\n.xl(@rules) {\n    .xlMin(@rules);\n}\n.xlMin(@rules) {\n    @media (min-width: @xl-min-width) {\n        @rules();\n    }\n}\n.xlMax(@rules) {\n    @media (max-width: @xl-max-width) {\n        @rules();\n    }\n}\n.xlOnly(@rules) {\n    @media (min-width: @xl-min-width) and (max-width: @xl-max-width) {\n        @rules();\n    }\n}\n.xxl(@rules) {\n    .xxlMin(@rules);\n}\n.xxlMin(@rules) {\n    @media (min-width: @xxl-min-width) {\n        @rules();\n    }\n}\n\n.notoBackup(@varName; @stdFont) {\n    @{varName}: @stdFont;\n\n    &:lang(ja_jp) {\n        @{varName}: @stdFont, NotoSansJP;\n    }\n    &:lang(zh_hans) {\n        @{varName}: @stdFont, NotoSansSC;\n    }\n    &:lang(zh_tw) {\n        @{varName}: @stdFont, NotoSansTC;\n    }\n}\n\n/* 2. Typography */\n.handleFontDeclarations() {\n    .notoBackup(--rsg-font-family-std, HelveticaNowText);\n    .notoBackup(--rsg-font-family-h, HelveticaNowDisplayBold);\n    .notoBackup(--gta-font-family-std, Chalet);\n    .notoBackup(--gta-font-family-h, ChaletComprime);\n    .notoBackup(--gta-font-family-badge, Pricedown);\n    .notoBackup(--rdr-font-family-std, HapnaSlabSerif);\n    .notoBackup(--rdr-font-family-h, RDRLino-Regular);\n    .notoBackup(--rdr-font-family-newswire-subtitle, HapnaSlabSerif);\n    .notoBackup(--rdr-area-font, RDRCatalogueBold);\n\n    --header-multiplier: var(--header-numerator, var(--root-font-size)) /\n        var(--root-font-size);\n    font-family: var(--font-family-std, HelveticaNowText);\n    font-weight: var(--font-weight-std, 400);\n    letter-spacing: var(--letter-spacing-std, -0.025em);\n    line-height: var(--line-height-std, 1.6);\n    font-size: calc(var(--root-font-size) * 1px);\n    -webkit-font-smoothing: antialiased;\n\n    h1.large,\n    h1,\n    h2,\n    h3,\n    h4 {\n        font-family: var(--font-family-h, HelveticaNowDisplayBold);\n        letter-spacing: var(--letter-spacing-h, -0.025em);\n    }\n    h1.large,\n    h1 {\n        font-weight: var(--font-weight-h1, var(--font-weight-h, 700));\n        text-transform: var(--text-transform-h1, var(--text-transform-h, none));\n        line-height: var(--line-height-h1, var(--line-height-h, 1.1));\n    }\n\n    h1.large {\n        font-size: calc(var(--font-size-8) * var(--header-multiplier));\n    }\n    h1 {\n        font-size: calc(var(--font-size-7) * var(--header-multiplier));\n    }\n    h2 {\n        font-size: calc(var(--font-size-6) * var(--header-multiplier));\n        font-weight: var(--font-weight-h2, var(--font-weight-h, 700));\n        text-transform: var(--text-transform-h2, var(--text-transform-h, none));\n        line-height: var(--line-height-h, 1.1);\n    }\n    h3 {\n        font-size: calc(var(--font-size-5) * var(--header-multiplier));\n        font-weight: var(--font-weight-h3, var(--font-weight-h, 700));\n        text-transform: var(--text-transform-h3, var(--text-transform-h, none));\n        line-height: var(--line-height-h, 1.1);\n\n        &[data-context='newswire-subtitle'] {\n            font-size: calc(\n                var(--font-size-5) *\n                    var(\n                        --h3-numerator-override-newswire-subtitle,\n                        var(--header-multiplier)\n                    )\n            );\n            font-weight: var(\n                --font-weight-newswire-subtitle,\n                var(--font-weight-h)\n            );\n            font-family: var(\n                --font-family-newswire-subtitle,\n                var(--font-family-h)\n            );\n            text-transform: var(--text-transform-newswire-subtitle);\n        }\n\n        .isRdr({\n            font-weight: var(--font-weight-h3, var(--font-weight-h, 400));\n        });\n    }\n\n    h4,\n    h5,\n    h6 {\n        font-size: calc(var(--font-size-4) * var(--header-multiplier));\n        line-height: var(--line-height-h, 1.1);\n    }\n}\n\n.handleColors() {\n    h1.large,\n    h1 {\n        color: var(--color-h-dynamic, var(--color-h1, var(--color-h, inherit)));\n    }\n    h2 {\n        color: var(--color-h-dynamic, var(--color-h2, var(--color-h, inherit)));\n    }\n    h3 {\n        color: var(--color-h-dynamic, var(--color-h3, var(--color-h, inherit)));\n\n        &[data-context='newswire-subtitle'] {\n            color: var(\n                --color-subtitle-dynamic,\n                var(--color-h-dynamic, var(--color-h3, var(--color-h, inherit)))\n            );\n        }\n    }\n    h4,\n    h5,\n    h6 {\n        color: var(--color-h-dynamic, var(--color-h, inherit));\n    }\n    background-color: var(--background-color, transparent);\n\n    [template='community'] {\n        --time-color: var(--body-color, #2d2d2d);\n        --breadcrumb-separator-filter-invert: invert(0);\n\n        main {\n            color: var(--color-h, #161616);\n        }\n        p {\n            color: var(--body-color, #2d2d2d);\n        }\n    }\n}\n\n/* 3. Variables */\n.resetVariables() {\n    --text-section-max-width: 640px;\n    --base-pixel-size: 12px;\n    --base-rem-size: 0.75rem;\n    --half-rem-size: calc(var(--base-rem-size) / 2);\n    --twice-rem-size: calc(var(--base-rem-size) * 2);\n    --section-margin-bottom: calc(var(--base-rem-size) * 4);\n    --header-height: 80px;\n    --breadcrumbs-height: calc(var(--base-pixel-size) * 3.5);\n    --max-width: 1920px;\n    --standard-color: #fcaf17;\n    --color-h: #ffffff;\n    --body-color: #e8e8e8;\n    --background-color: #0b0b0b;\n    --card-background-color: #000;\n    --border-color: #282828;\n    --privacy-banner-height: 0px;\n    --game-header-height: 50px;\n    --standard-grid-gap: calc(var(--base-rem-size) * 2);\n    --image-margin-bottom: inherit;\n    --image-rounding: 0px;\n    --image-rounding-static: 16px;\n    --image-rounding-static-sm: 8px;\n    --image-rounding-static-xs: 4px;\n\n    --grid-gap-static-xs: 0.5rem;\n    --grid-gap-static-sm: 1rem;\n    --grid-gap-static-md: 2rem;\n    --grid-gap-static-lg: 4rem;\n    --grid-gap-static-xl: 8rem;\n    .smMax({--grid-gap-static-lg: 2rem; --grid-gap-static-xl: 4rem;});\n\n    --max-width-static: 640px;\n    --max-width-static-md: 1088px;\n    --max-width-static-lg: 1920px;\n    --max-width-static-xl: 2560px;\n    .xxlMin({--max-width-static-md: 1440px;});\n\n    --margin-static: 0 0 2rem;\n    --h2-margin: 2rem 0 0 0;\n\n    --padding-sides: var(--grid-gap-static-lg);\n    --padding-top-bottom: var(--padding-sides);\n    --padding-static: var(--padding-sides);\n}\n\n/* 4. Utility */\n/* 4.1 Flex */\n.flex() {\n    display: flex;\n    flex-flow: column;\n}\n.horizontalCenterChildren() {\n    display: flex;\n    justify-content: center;\n}\n.verticalCenterChildren() {\n    display: flex;\n    align-items: center;\n}\n.flexCenterChildren() {\n    .horizontalCenterChildren();\n    .verticalCenterChildren();\n}\n\n/* 4.2 Grid */\n.gridMinWidth(@minWidth: 480px; @rowGap: var(--standard-grid-gap); @colGap: var(--standard-grid-gap); @autoType: 'auto-fit') {\n    display: grid;\n    grid-row-gap: @rowGap;\n    grid-column-gap: @colGap;\n    grid-template-columns: ~'repeat(@{autoType}, minmax(@{minWidth}, 1fr))';\n}\n.gridHideExtraRows(@colGap: var(--standard-grid-gap)) {\n    ::-webkit-scrollbar {\n        display: none;\n    }\n    -ms-overflow-style: none;\n    display: grid;\n    grid-auto-flow: column;\n    grid-column-gap: @colGap;\n    overflow-y: hidden;\n    scroll-snap-type: x mandatory;\n    > * {\n        scroll-snap-align: start;\n    }\n    --per-page: 4;\n    .lgMax({--per-page: 3;});\n    .mdMax({--per-page: 2;});\n    .smMax({--per-page: 1;});\n\n    grid-auto-columns: calc(\n        100% / var(--per-page) - (var(--per-page) - 1) / var(--per-page) *\n            @colGap\n    );\n}\n.gridNumCols(@numInitialItems) {\n    display: grid;\n    grid-gap: var(--standard-grid-gap);\n    .smMax({grid-template-columns: repeat(1, minmax(0px, 1fr)) ;});\n    @media screen and (min-width: @screen-sm) and (max-width: @md-max-width) {\n        grid-template-columns: repeat(2, minmax(0px, 1fr));\n    }\n    @media screen and (min-width: @screen-lg) {\n        grid-template-columns: repeat(4, minmax(0px, 1fr));\n    }\n}\n.gridNumColsSmall(@colGap: var(--padding-top-bottom); @rowGap: var(--padding-top-bottom)) {\n    display: grid;\n    grid-row-gap: @rowGap;\n    grid-column-gap: @colGap;\n    grid-template-columns: repeat(1, minmax(0px, 1fr));\n    .md({grid-template-columns: repeat(2, minmax(0px, 1fr)) ;});\n}\n\n.standardLayoutGridItem(@maxWidth: var(--max-width-static-md), @padding: var(--padding-static)) {\n    .handleMaxWidth(@maxWidth);\n    .handlePadding(@padding);\n}\n\n.handleGridStyles(@grid-gap-dynamic: var(--grid-gap-static-md)) {\n    --grid-gap-dynamic: @grid-gap-dynamic;\n    display: grid;\n    grid-template-columns: repeat(var(--grid-num-columns, 1), minmax(0px, 1fr));\n    grid-template: var(\n        --grid-template-override,\n        auto / repeat(var(--grid-num-columns, 1), minmax(0, 1fr))\n    );\n    grid-gap: var(--grid-gap-dynamic);\n    align-items: var(--grid-align-items);\n    align-content: var(--grid-align-content);\n    align-self: var(--grid-align-self);\n    justify-items: var(--grid-justify-items);\n    justify-content: var(--grid-justify-content);\n    justify-self: var(--grid-justify-self);\n}\n\n/* 4.3 Max-Width */\n.maxWidth(@padding: 0) {\n    max-width: var(--max-width);\n    width: 100%;\n    margin: 0 auto;\n    padding-left: @padding;\n    padding-right: @padding;\n}\n.maxWidthWithNormalPadding() {\n    .maxWidth(var(--padding-sides));\n}\n\n.handleMaxWidth(@max-width-default: 1000000px) {\n    width: 100%;\n    max-width: calc(\n        var(--max-width-dynamic, @max-width-default) +\n            var(--padding-dynamic, 0px) * 2\n    ) !important;\n    margin: 0 auto;\n}\n\n.breakout(@max-width-default: 100vw) {\n    @margin: calc((@max-width-default / 2) * -1);\n    width: @max-width-default;\n    max-width: @max-width-default !important;\n    position: relative;\n    left: 50%;\n    right: 50%;\n    margin-left: @margin;\n    margin-right: @margin;\n}\n\n.fullWidth() {\n    .breakout;\n}\n\n/* 4.4 Images */\n.handleAspectRatio() {\n    --aspect-ratio-default: 1;\n    .lgMin({\n        --aspect-ratio-default: 16/9;\n    });\n\n    position: relative;\n    &:before {\n        content: '';\n        height: 0;\n        width: 100%;\n        display: block;\n        padding-bottom: calc(\n            100% / calc(var(--aspect-ratio, var(--aspect-ratio-default)))\n        );\n    }\n    > * {\n        position: absolute;\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 100%;\n    }\n}\n.setAspectRatio(@ratio) {\n    --aspect-ratio: @ratio;\n    .handleAspectRatio;\n}\n\n.handleParallaxPerspective() {\n    position: fixed;\n    width: 100%;\n    height: 100%;\n    overflow-x: hidden;\n    overflow-y: scroll;\n    perspective: var(--parallax-perspective);\n    perspective-origin: 0 0;\n}\n.handleParallaxDistance() {\n    transform: translateZ(var(--parallax-distance))\n        scale(\n            calc(\n                (var(--parallax-perspective) - var(--parallax-distance)) /\n                    var(--parallax-distance)\n            )\n        );\n}\n\n.handleImageRounding() {\n    border-radius: var(--image-rounding-dynamic, 0px);\n}\n\n/* 4.5 Padding */\n.handlePadding(@paddingSides: initial, @paddingTopBottom: initial) {\n    --padding-dynamic: @paddingSides;\n    --padding-dynamic-tb: @paddingTopBottom;\n\n    padding: var(--padding-t, var(--padding-dynamic-tb, 0))\n        var(--padding-dynamic, 0) var(--padding-b, var(--padding-dynamic-tb, 0))\n        var(--padding-dynamic, 0);\n}\n\n/* 4.6 Fonts */\n.loadFont(@family, @weight: 400, @style: normal, @file: @family) {\n    @font-face {\n        font-family: @family;\n        font-style: @style;\n        font-weight: @weight;\n        src: url('../fonts/@{file}.woff') format('woff');\n    }\n}\n.loadFontWoff2(@family, @weight: 400, @style: normal, @file: @family) {\n    @font-face {\n        font-family: @family;\n        font-style: @style;\n        font-weight: @weight;\n        src: url('../fonts/@{file}.woff2') format('woff2');\n    }\n}\n.fontClip(@backgroundImg) {\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n    @backgroundImg();\n}\n\n/* 4.7 Games */\n.gta(@rules) {\n    [data-game^='gta'] {\n        @rules();\n    }\n}\n\n.isGta(@rules) {\n    [data-game^='gta'] & {\n        @rules();\n    }\n}\n\n.rdr(@rules) {\n    [data-game='rdo'],\n    [data-game^='rdr'] {\n        @rules();\n    }\n}\n\n.isRdr(@rules) {\n    [data-game='rdo'] &,\n    [data-game^='rdr'] & {\n        @rules();\n    }\n}\n\n/* 4.8 Tina */\n.tinaTextField() {\n    padding: var(--tina-padding-small);\n    border-radius: var(--tina-radius-small);\n    background: var(--tina-color-grey-0);\n    color: var(--tina-color-grey-10);\n    background-color: var(--tina-color-grey-0);\n    border: 1px solid var(--tina-color-grey-2);\n    box-shadow: 0 0 0 2px transparent;\n    margin-bottom: 14px;\n}\n\n/* 4.9 Hacks */\n.safariBorderRadiusOverflowFix() {\n    // https://stackoverflow.com/questions/49066011/overflow-hidden-with-border-radius-not-working-on-safari\n    -webkit-mask-image: -webkit-radial-gradient(white, black);\n}\n\n.forceGpuRendering() {\n    // https://web.dev/animations-guide/#force\n    transform: translateZ(0);\n}\n\n/* 5. Presentational */\n@locales: en_us, fr_fr, de_de, es_es, es_mx, it_it, pt_br, pl_pl, ru_ru, ja_jp,\n    ko_kr, zh_tw, zh_hans;\n\n.placeholder(@rules) {\n    &::-webkit-input-placeholder {\n        @rules();\n    }\n    &:-moz-placeholder {\n        @rules();\n    }\n    &::-moz-placeholder {\n        @rules();\n    }\n    &:-ms-input-placeholder {\n        @rules();\n    }\n}\n\n.bgImg() {\n    background-size: cover;\n    background-position: center center;\n    background-repeat: no-repeat;\n}\n\n.themeDark() {\n    color: #e8e8e8;\n    --tag-color: #e8e8e8;\n}\n\n.outbound() {\n    content: '';\n    display: inline-block;\n    background-size: 100%;\n    background-repeat: no-repeat;\n    background-position: 0% 50%;\n    vertical-align: baseline;\n    margin-left: var(--grid-gap-static-xs);\n    width: 1rem;\n    height: 1rem;\n    background-image: data-uri('../img/outbound.svg');\n}\n\n.blurryBg() {\n    transition: filter 0.8s;\n    filter: blur(var(--blur-because-in-bg, 0px));\n}\n\n.fancyLink() {\n    position: relative;\n    background: transparent;\n    padding: 0;\n    z-index: 1;\n    @media (min-width: @screen-sm) {\n        transition: all 0.2s ease;\n        &:before {\n            content: '';\n            display: block;\n            position: absolute;\n            bottom: 0;\n            left: -0.1rem;\n            width: calc(100% + 0.2rem);\n            height: 2px;\n            background: var(--body-color);\n            transition: all 0.2s ease;\n            z-index: -1;\n            border-radius: 0.25rem;\n        }\n        &:hover {\n            color: #161616;\n\n            &:before {\n                left: -0.25rem;\n                width: calc(100% + 0.5rem);\n                height: 100%;\n            }\n        }\n    }\n    img {\n        display: block;\n    }\n}\n.stdHover() {\n    transition:\n        color 0.2s ease,\n        opacity 0.2s ease;\n    &:hover {\n        color: var(--standard-color);\n        opacity: 1;\n    }\n}\n.stdIconHover() {\n    &:hover {\n        filter: brightness(0) saturate(100%) invert(76%) sepia(15%)\n            saturate(5173%) hue-rotate(348deg) brightness(105%) contrast(98%);\n    }\n}\n.card() {\n    .handleImageRounding;\n    --image-rounding-dynamic: var(--image-rounding-static-sm);\n    background: var(--card-background-color);\n    overflow: hidden;\n    display: flex;\n    flex-flow: column;\n    transition: transform 0.2s ease;\n    border: 1px solid var(--border-color);\n    .info {\n        .handleGridStyles;\n        --grid-gap-dynamic: var(--grid-gap-static-xs);\n        padding: 2rem 1.5rem;\n        .title {\n            --line-height-h: 1.3;\n            color: var(--color-h);\n        }\n    }\n}\n\n.cardHover() {\n    transition:\n        transform 0.3s cubic-bezier(0, 0, 0.5, 1),\n        box-shadow 0.3s cubic-bezier(0, 0, 0.5, 1);\n    box-shadow: 0px 0px 40px -25px rgba(0, 0, 0, 0);\n\n    &:hover {\n        transform: scale(1.025);\n        box-shadow: 0px 30px 40px -25px rgba(0, 0, 0, 1);\n    }\n}\n\n.cardSecondary() {\n    .card();\n    .info {\n        padding: 1.5rem;\n    }\n    .title {\n        font-size: var(--font-size-3);\n        font-weight: 400;\n    }\n}\n\n.cardTertiary() {\n    .cardSecondary();\n    --image-rounding-dynamic: 0;\n    --card-background-color: transparent;\n    grid-gap: var(--grid-gap-static-sm);\n    overflow: unset;\n    border: none;\n    .info {\n        padding: 0;\n    }\n    .img {\n        .handleImageRounding;\n        --image-rounding-dynamic: var(--image-rounding-static-sm);\n    }\n}\n\n.standardPage() {\n    .maxWidthWithNormalPadding;\n    padding-top: var(--padding-top-bottom);\n    padding-bottom: var(--padding-top-bottom);\n}\n\n.dropdownThing(@defaultDeg: 0deg; @openDeg: 180deg) {\n    position: relative;\n    padding-right: calc(var(--grid-gap-static-xs) + 24px);\n    .dropdownCaret(yellow; @defaultDeg; @openDeg);\n}\n.dropdownCaret(@color; @defaultDeg: 0deg; @openDeg: 180deg) {\n    &:after {\n        display: inline-block;\n        content: '';\n        position: absolute;\n        top: 0;\n        right: 0;\n        @img: '../img/dropdown-@{color}.svg';\n        background-image: data-uri(@img);\n        background-repeat: no-repeat;\n        width: image-width(@img);\n        height: 100%;\n        background-position: center;\n        background-size: 100%;\n        transform: rotate(@defaultDeg);\n        transition: transform 0.3s;\n        .open& {\n            transform: rotate(@openDeg);\n        }\n    }\n}\n\n.sectionHeader() {\n    margin: 0 0 1.5rem;\n    font-size: var(--font-size-5);\n    font-family: var(--font-family-h);\n    font-weight: var(--font-weight-h);\n    --line-height-h: 1.3;\n\n    .xlMin ({\n        font-size: var(--font-size-6);\n    });;\n}\n.sectionHeaderSmall() {\n    .sectionHeader;\n    font-size: var(--font-size-4);\n\n    .xlMin ({\n        font-size: var(--font-size-5);\n    });;\n}\n\n.tag() {\n    color: var(--tag-color, var(--body-color));\n    font-weight: 700;\n    font-size: var(--font-size-2);\n    line-height: 1.6;\n}\n\n.date() {\n    .tag;\n    font-weight: 400;\n    opacity: 0.65;\n}\n.animationFadeInUp() {\n    :global {\n        animation: globalFadeInUp 0.75s;\n        animation-play-state: paused;\n    }\n}\n.animationPaused() {\n    animation-play-state: paused;\n}\n.animationRunning() {\n    animation-play-state: running;\n}\n\n.button() {\n    font-weight: 700;\n    align-self: center;\n    display: inline-block;\n    text-transform: uppercase;\n    background: transparent;\n    border: 1px solid var(--color-h);\n    padding: 1rem 3rem;\n    color: inherit;\n    cursor: pointer;\n    border-radius: 0.25rem;\n    color: var(--color-h);\n    line-height: 100%;\n    transition: all 0.2s ease;\n    &:focus,\n    &:hover {\n        background: var(--standard-color);\n        border-color: var(--standard-color);\n        color: #161616;\n    }\n    &.secondary {\n        .fancyLink;\n        outline: none;\n        border: none;\n        text-transform: none;\n        font-weight: 400;\n        line-height: unset;\n        .smMin ({\n            &:before {\n                background: var(--standard-color);\n                height:4px;\n            }\n            &:focus,\n            &:hover {\n                &:before {\n                    left: -0.5rem;\n                    width: calc(100% + 1rem);\n                    height: 100%;\n                }\n            }\n         });;\n    }\n    &[disabled] {\n        opacity: 0.5;\n    }\n}\n\n.expandToEdges() {\n    margin-top: calc(var(--padding-top-bottom) * -1);\n    margin-left: calc(var(--padding-sides) * -1);\n    width: 100vw;\n    width: calc(100% + calc(var(--padding-sides) * 2));\n}\n\n.shadow(@boxShadow: 0 10px 30px rgba(0, 0, 0, 0.5)) {\n    // border: 1px solid rgba(0, 0, 0, 0.15);\n    box-shadow: @boxShadow;\n}\n.shadowTop() {\n    box-shadow: -3px -3px 6px 0 rgba(0, 0, 0, 0.2);\n}\n\n.aspect-ratio(@width, @height, @selector: div, @pre: ~'') {\n    @supports not (aspect-ratio: @width / @height) {\n        position: relative;\n        &:before {\n            display: block;\n            content: '';\n            width: 100%;\n            padding-top: calc((@height / @width) * 100%);\n        }\n        > @{pre}@{selector} {\n            position: absolute;\n            top: 0;\n            left: 0;\n            right: 0;\n            bottom: 0;\n            width: 100% !important;\n            height: 100% !important;\n        }\n    }\n\n    @supports (aspect-ratio: @width / @height) {\n        @{pre}@{selector} {\n            aspect-ratio: @width / @height !important;\n            width: 100% !important;\n            height: auto !important;\n        }\n    }\n}\n.unset-aspect-ratio(@selector, @pre: ~'') {\n    @supports not (aspect-ratio: 1/1) {\n        position: unset;\n        &:before {\n            display: none;\n        }\n        > @{pre}@{selector} {\n            position: unset;\n            width: 100% !important;\n            height: unset !important;\n        }\n    }\n\n    @supports (aspect-ratio: 1/1) {\n        @{pre}@{selector} {\n            aspect-ratio: unset !important;\n        }\n    }\n}\n\n.rockstarTypography() {\n    --font-family-std: NeueHelveticaPaneuropean, sans-serif;\n    --leter-spacing-std: 0;\n\n    font-size: var(--font-size-2);\n    font-family: var(--font-family-std);\n    letter-spacing: var(--leter-spacing-std);\n\n    button {\n        letter-spacing: var(--leter-spacing-std);\n    }\n}\n\n.setNodeFontSizing() {\n    // TODO audit this. .5rem is very small.\n    --font-size-1: 0.75rem;\n\n    --font-size-2: 0.75rem;\n    --font-size-3: 1rem;\n    --font-size-4: 1.25rem;\n    --font-size-5: 1.5rem;\n    --font-size-6: 2rem;\n    --font-size-7: 2.5rem;\n    --font-size-8: 3rem;\n    --font-size-9: 4rem;\n    --font-size-10: 5rem;\n}\n\n.setRootFontSizing() {\n    .sm({--root-font-size: 16;});\n    .md({--root-font-size: 18;});\n    .lg({--root-font-size: 20;});\n    .xl({--root-font-size: 22;});\n}\n\n.button-text () {\n    font-size: var(--font-size-4);\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-sm);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-h);\n    text-transform: uppercase;\n}\n\n.button-text-sm () {\n    .button-text;\n    font-size: var(--font-size-3);\n}\n\n.button-text-md () {\n    .button-text;\n    font-size: var(--font-size-4);\n    padding: 0 var(--padding-md);\n}\n\n.button-text-lg () {\n    .button-text;\n    font-size: var(--font-size-5);\n    padding: 0 var(--padding-lg);\n}\n\n.button-text-xl () {\n    .button-text;\n    font-size: var(--font-size-7);\n    padding: 0 var(--padding-xl);\n}\n\n.cta-button() {\n    @import '../less/gen9-vars';\n\n    --button-text-color-hover: var(--white-100);\n\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: center;\n    gap: var(--grid-gap-xs, 0.5rem);\n\n    background: var(\n        --button-background-color,\n        var(--black-65, hsla(0, 0%, 7%, 0.65))\n    );\n    border: 1px solid var(--white-100, #fff);\n    border-radius: var(--border-radius-sm, 4px);\n    color: var(--button-text-color, var(--white-100));\n    cursor: pointer;\n    padding: 0 var(--padding-sm);\n\n    width: 100%;\n    height: var(--button-height-3, 3rem);\n\n    transition: all 0.3s ease-in-out;\n\n    &[data-brand='reddeadredemption'],\n    [data-brand='reddeadredemption'] & {\n        --accent-color: #cc0000;\n        --font-family-h: RDRUltra;\n\n        :lang(pl_pl) {\n            --font-family-h: RDRUltra, NeueHelveticaPaneuropean;\n        }\n    }\n\n    &[data-brand='bully'],\n    [data-brand='bully'] & {\n        --accent-color: #f8ad00;\n        --font-family-h: HelveticaNowDisplayBold;\n        --button-background-color: var(--white-100);\n        --button-background-color-hover: var(--accent-color);\n        --button-text-color: var(--black-100);\n        --button-text-color-hover: var(--black-100);\n\n        backdrop-filter: blur(25px);\n        padding: 0 var(--padding-md, 32px);\n    }\n\n    img {\n        height: 1rem;\n        width: auto;\n    }\n\n    .label {\n        .button-text();\n        display: flex;\n        flex-shrink: 0;\n    }\n\n    &.primary {\n        color: var(--black-100);\n        background-color: var(--white-100);\n    }\n\n    &:hover {\n        border-color: var(--accent-color, var(--btn-active-color));\n        background-color: var(--accent-color, var(--btn-active-color));\n        color: var(--button-text-color-hover, var(--btn-active-color));\n\n        &.primary {\n            color: var(--button-text-color-hover, var(--white-100));\n        }\n    }\n\n    @media (min-width: 1280px) {\n        padding: 0 var(--padding-md);\n    }\n\n    @media (min-width: 768px) and (max-width: 1539px) {\n        height: 2.5rem;\n\n        img {\n            height: 1rem;\n        }\n\n        .label {\n            .button-text-sm();\n        }\n    }\n}\n", "/*\nThis CSS resource incorporates links to web font and font software which is the valuable copyrighted property of House Industries and/or its suppliers. You expressly agree to not copy, install, redistribute, convert, modify, or reverse engineer this font software or the fonts rendered thereby. Please contact House Industries with any questions regarding Web Fonts: http://www.houseind.com\n*/\n\n@import './mixins.less';\n\n// RSG Fonts\n.loadFont(HelveticaNowText, 400, normal, HelveticaNowText);\n.loadFont(HelveticaNowText, 400, italic, HelveticaNowTextIt);\n.loadFont(HelveticaNowText, 700, normal, HelveticaNowTextBold);\n.loadFont(HelveticaNowDisplayBold, 700);\n.loadFont(HelveticaNowDisplayMedium);\n.loadFont(HelveticaNeueLTW05, 400, normal, HelveticaNeueLTW05-65Medium);\n.loadFont(HelveticaNeueLTW05, 400, italic, HelveticaNeueLTW05-66MediumIt);\n.loadFont(HelveticaNeueLTW07, 400, normal, HelveticaNeueLTW07-55Roman);\n.loadFont(HelveticaNeueLTW07, 400, italic, HelveticaNeueLTW07-56Italic);\n.loadFont(HelveticaNeueLTW07, 700, normal, HelveticaNeueLTW07-75Bold);\n.loadFont(HelveticaNeueLTW07, 700, italic, HelveticaNeueLTW07-76BoldIt);\n.loadFont(HelveticaNeueLTW07-85Heavy, 700, normal);\n.loadFont(NeueHelveticaPaneuropean, 400, normal, HelveticaPanEuro-Md);\n.loadFont(SackersGothicW01-Square);\n.loadFont(Cabrito-Nordem);\n.loadFont(Droid-Serif-Pro);\n\n.loadFont(NotoSansSC, 400, normal, Noto-Sans-SC-400);\n.loadFont(NotoSansSC, 500, normal, Noto-Sans-SC-500);\n.loadFont(NotoSansSC, 700, normal, Noto-Sans-SC-700);\n.loadFont(NotoSansSC, 900, normal, Noto-Sans-SC-900);\n\n.loadFont(NotoSansTC, 400, normal, Noto-Sans-TC-400);\n.loadFont(NotoSansTC, 500, normal, Noto-Sans-TC-500);\n.loadFont(NotoSansTC, 700, normal, Noto-Sans-TC-700);\n.loadFont(NotoSansTC, 900, normal, Noto-Sans-TC-900);\n\n.loadFont(NotoSansJP, 400, normal, Noto-Sans-JP-400);\n// .loadFontWoff2(NotoSansJP, 400, normal, Noto-Sans-JP-400);\n.loadFont(NotoSansJP, 500, normal, Noto-Sans-JP-500);\n.loadFont(NotoSansJP, 700, normal, Noto-Sans-JP-700);\n.loadFont(NotoSansJP, 900, normal, Noto-Sans-JP-900);\n\n.loadFont(NotoSansKR, 400, normal, Noto-Sans-KR-400);\n.loadFont(NotoSansKR, 500, normal, Noto-Sans-KR-500);\n.loadFont(NotoSansKR, 700, normal, Noto-Sans-KR-700);\n.loadFont(NotoSansKR, 900, normal, Noto-Sans-KR-900);\n\n.loadFont(NotoSerifJP, 700, normal, NotoSerifJP-Black);\n.loadFont(NotoSerifJP, 900, normal, Noto-Serif-JP-900);\n\n.loadFont(NotoSerifKR, 700, normal, Noto-Serif-KR-900);\n.loadFont(NotoSerifKR, 900, normal, Noto-Serif-KR-900);\n\n.loadFont(NotoSerifSC, 700, normal, NotoSerifSC-Black);\n.loadFont(NotoSerifSC, 900, normal, Noto-Serif-SC-900);\n\n.loadFont(NotoSerifTC, 700, normal, NotoSerifTC-Black);\n.loadFont(NotoSerifTC, 900, normal, Noto-Serif-TC-900);\n\n// GTA fonts\n.loadFont(ChaletComprime, 400, normal, CHALETCOMPRIME-COLOGNESIXTYSC);\n.loadFont(ChaletComprime, 700, normal, ChaletComprime-HongKongSixty);\n.loadFont(Chalet, 400, normal, Chalet-LondonSixty);\n.loadFont(Chalet, 700, normal, Chalet-NewYorkSixty);\n.loadFont(Pricedown, 700, normal, Pricedown);\n.loadFont(NeueHelveticaW05, 400, normal, NeueHelveticaW05-Condensed);\n.loadFont(NeueHelveticaW05, 700, normal, NeueHelveticaW05-CondensedBold);\n.loadFont(NeueHelveticaW05, 900, normal, NeueHelveticaW05-CondensedExtraBlack);\n.loadFont(FrizQuadrataW05, 400, normal, FrizQuadrataW05-Regular);\n.loadFont(FrizQuadrataW05, 400, italic, FrizQuadrataW05-Italic);\n.loadFont(FrizQuadrataW05, 700, normal, FrizQuadrataW05-Bold);\n.loadFont(FrizQuadrataW05, 700, italic, FrizQuadrataW05-BoldItalic);\n.loadFont(CorporateW05, 400, normal, CorporateURWRegW05-Regular);\n.loadFont(NimbusSansW05, 400, normal, NimbusSansW05-Regular);\n.loadFont(NimbusSansW05, 700, normal, NimbusSansW05-Bold);\n.loadFont(EurostileNextW05, 700, normal, EurostileNextW05-ExtBold);\n.loadFont(Diploma, 400, normal, Diploma);\n.loadFont(BrushScriptMT, 400, normal, BrushScriptMT);\n.loadFont(BankGothicBT, 400, normal, BankGothicBT-Medium);\n.loadFont(MeltdownRegular, 400, normal, MeltdownRegular-Normal);\n.loadFont(SharkSnackRegular, 400, normal, SharkSnackRegular-Normal);\n.loadFont(GTAArtDeco, 400, normal, GTAArtDeco-Regular);\n.loadFont(GTAArtDeco, 500, normal, GTAArtDeco-Medium);\n\n// RDR Fonts\n.loadFont(RDRLino-Regular);\n.loadFont(HapnaSlabSerif, 400, normal, HapnaSlabSerif-DemiBold);\n.loadFont(HapnaSlabSerif, 700, normal, HapnaSlabSerif-ExtraBold);\n.loadFont(nightmar, 100, normal);\n.loadFont(RDRCatalogueBold, 700, normal, RDRCatalogueBold-Bold);\n.loadFont(RDRUltraHeadline, 400, normal, RDRUltraHeadline);\n\n.setRootFontSizing();\n\n* {\n    box-sizing: border-box;\n}\na {\n    color: inherit;\n    text-decoration: none;\n}\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np {\n    margin: 0;\n}\n\nfigure {\n    margin: 0;\n}\n\ncaption,\nfigcaption {\n    display: block;\n    margin: var(--grid-gap-static-sm) auto 0;\n    .handlePadding(var(--padding-sides), initial);\n    font-family: var(--font-family-std);\n    font-size: var(--font-size-2);\n    text-align: center;\n    font-style: italic;\n    color: var(--body-color);\n\n    p {\n        display: block;\n    }\n}\n\n// RSG Typography (default)\n--font-family-std: var(--rsg-font-family-std);\n--font-family-h: var(--rsg-font-family-h);\n--font-family-h-halloween: nightmar;\n\n// Russian\n:lang(ru_ru) {\n    --font-family-h-halloween: RDRLino-Regular;\n}\n\n// Korean\n:lang(ko_kr) {\n    word-break: keep-all;\n}\n\n.handleFontDeclarations;\n.handleColors;\n\n// GTA Type Scale\n.gta({\n    --font-family-std: var(--gta-font-family-std);\n    --font-family-h: var(--gta-font-family-h);\n    --letter-spacing-h: 0;\n    --line-height-h1: 1;\n    --font-weight-newswire-subtitle: 400;\n    --letter-spacing-std: 0;\n    --color-h: #fff;\n    --body-color: #e8e8e8;\n\n    .themeDark;\n\n    .sm({--header-numerator: 20.8;});\n    .md({--header-numerator: 23.4;});\n    .lg({--header-numerator: 26;});\n    .xl({--header-numerator: 29.25;});\n\n    .handleFontDeclarations;\n    .handleColors;\n\n    .badge {\n        font-family: var(--gta-font-family-badge);\n    }\n});\n\n// Polish\n:lang(pl_pl) {\n    .gta({\n      --font-family-h: ChaletComprime, NeueHelveticaW05;\n      --font-family-newswire-subtitle: ChaletComprime, NeueHelveticaW05;\n      --badge-font: Pricedown, NeueHelveticaW05;\n   });\n    [data-context='newswire-article'] h1 {\n        --font-family-h: NeueHelveticaPaneuropean;\n    }\n}\n\n// Russian\n:lang(ru_ru) {\n    .gta({\n      --font-family-h: NeueHelveticaW05;\n      --font-family-newswire-subtitle: NeueHelveticaW05;\n      --badge-font: Pricedown, NeueHelveticaW05;\n   });\n    [data-context='newswire-article'] h1 {\n        --font-family-h: NeueHelveticaW05;\n    }\n}\n\n// Chinese (Simplified)\n:lang(zh_hans) {\n    .gta({\n      --font-family-h: NotoSansSC;\n      --font-family-newswire-subtitle: NotoSansSC;\n      --font-family-std: NotoSansSC;\n      --badge-font: Pricedown, NotoSansSC;\n   });\n}\n\n// Chinese (Traditional)\n:lang(zh_hant) {\n    .gta({\n      --font-family-h: NotoSansTC;\n      --font-family-newswire-subtitle: NotoSansTC;\n      --font-family-std: NotoSansTC;\n      --badge-font: Pricedown, NotoSansTC;\n   });\n}\n\n// Japanese\n:lang(ja_jp) {\n    .gta({\n      --font-family-h: NotoSansJP;\n      --font-family-newswire-subtitle: NotoSansJP;\n      --font-family-std: NotoSansJP;\n      --badge-font: Pricedown, NotoSansJP;\n   });\n    [data-context='newswire-article'] h1 {\n        --font-family-h: NotoSansJP;\n    }\n}\n\n// Korean\n:lang(ko_kr) {\n    .gta({\n      --font-family-h: NotoSansKR;\n      --font-family-newswire-subtitle: NotoSansKR;\n      --font-family-std: NotoSansKR;\n      --badge-font: Pricedown, NotoSansKR;\n   });\n}\n\n// RDR Type Scale\n.rdr({\n    --font-family-std: var(--rdr-font-family-std);\n    --font-family-h: var(--rdr-font-family-h);\n    --font-family-newswire-subtitle: var(--rdr-font-family-newswire-subtitle);\n    --area-font: var(--rdr-area-font);\n    --font-weight-h: 400;\n    --font-weight-h1: 400;\n    --font-weight-h3: 400;\n    --font-weight-newswire-subtitle: 700;\n    --h3-numerator-override-newswire-subtitle: 1;\n    --letter-spacing-h: 0;\n    --line-height-h: 1.2;\n    --letter-spacing-std: 0;\n    --text-transform-newswire-subtitle: initial;\n    --color-h: #cc0000;\n    --color-h3: white;\n    --color-h4: white;\n    --body-color: #e8e8e8;\n    --text-transform-h: uppercase;\n\n    .themeDark;\n\n    .sm({--header-numerator: 15;});\n    .md({--header-numerator: 16.88;});\n    .lg({--header-numerator: 18.75;});\n    .xl({--header-numerator: 21.09;});\n\n    .handleFontDeclarations;\n    .handleColors;\n});\n\n// Polish\n:lang(pl_pl) {\n    .rdr({\n      --font-family-h: RDRLino-Regular;\n      --font-family-newswire-subtitle: HapnaSlabSerif;\n      --font-family-std: HapnaSlabSerif;\n      --badge-font: RDRLino-Regular;\n   });\n}\n\n// Chinese (Simplified)\n:lang(zh_hans) {\n    .rdr({\n      --font-family-h: NotoSerifSC;\n      --font-family-newswire-subtitle: NotoSansSC, ;\n      --font-family-std: NotoSansSC;\n      --area-font: NotoSansSC;\n      --badge-font: RDRLino-Regular, NotoSerifSC;\n   });\n}\n\n// Chinese (Traditional)\n:lang(zh_hant) {\n    .rdr({\n      --font-family-h: NotoSerifTC;\n      --font-family-newswire-subtitle: NotoSansTC;\n      --font-family-std: NotoSansTC;\n      --area-font: NotoSansTC;\n      --badge-font: RDRLino-Regular, NotoSerifTC;\n   });\n}\n\n// Japanese\n:lang(ja_jp) {\n    .rdr({\n      --font-family-h: NotoSerifJP;\n      --font-family-newswire-subtitle: NotoSansJP;\n      --font-family-std: NotoSansJP;\n      --area-font: NotoSansJP;\n      --badge-font: RDRLino-Regular, NotoSerifTC;\n   });\n}\n\n// Korean\n:lang(ko_kr) {\n    .rdr({\n      --font-family-h: NotoSerifKR;\n      --font-family-newswire-subtitle: NotoSansKR;\n      --font-family-std: NotoSansKR;\n      --area-font: NotoSansKR;\n      --badge-font: RDRLino-Regular, NotoSerifKR;\n   });\n}\n", "@import '@rsgweb/legacy-design-system/less/gen9-mixins';\n\n@global-navigation-breakpoint-mobile: 1024px;\n\n.globalNavVars() {\n    .resetVariables();\n    @import './typography.less';\n    @import '@rsgweb/legacy-design-system/less/gen9-vars.less';\n    \n    --font-family-h: HelveticaNowDisplayBold;\n    --font-family-body: HelveticaNowText;\n\n    --text-light: #e8e8e8;\n    \n    .sm({--base-rem-size: 16px;});\n    .md({--base-rem-size: 18px;});\n    .lg({--base-rem-size: 20px;});\n    .xl({--base-rem-size: 22px;});\n    \n    --rem-025: calc(var(--base-rem-size) * 0.25);\n    --rem-05: calc(var(--base-rem-size) * 0.5);\n    --rem-075: calc(var(--base-rem-size) * 0.75);\n    --rem-1: var(--base-rem-size);\n    --rem-125: calc(var(--base-rem-size) * 1.25);\n    --rem-15: calc(var(--base-rem-size) * 1.5);\n    --rem-2: calc(var(--base-rem-size) * 2);\n    --rem-3: calc(var(--base-rem-size) * 3);\n    --rem-4: calc(var(--base-rem-size) * 4);\n    --rem-6: calc(var(--base-rem-size) * 6);\n    --rem-8: calc(var(--base-rem-size) * 8);\n    \n    --spacing-xxs: var(--rem-025);\n    --spacing-xs: var(--rem-05);\n    --spacing-sm: var(--rem-1);\n    --spacing-md: var(--rem-2);\n    --spacing-lg: var(--rem-4);\n    --spacing-xl: var(--rem-8);\n    \n    \n    font-family: var(--font-family-body);\n    \n    --global-navigation-background: rgba(0, 0, 0, 0.85);\n    --global-navigation-border-color: #282828;\n    --global-navigation-box-shadow: 0px 8px 20px 0px rgba(0, 0, 0, 0.7);\n    --global-navigation-height: 80px;\n\n    --base-rem-size: var(--base-rem-size);\n    --mobile-nav-padding-sides: 32px;\n    --mobile-nav-item-padding: 20px var(--mobile-nav-padding-sides);\n\n    --nav-icon-size: var(--rem-1);\n    --nav-link-size: calc(var(--base-rem-size) * 0.75);\n    --sub-nav-indent: var(--spacing-sm);\n    --sub-nav-min-width: 240px;\n\n    .mdMax ({\n        --nav-icon-size: var(--rem-125);\n        --nav-link-size: calc(var(--base-rem-size) * 1.25);\n        --sub-nav-indent: var(--spacing-md);\n    });\n}", "/*\nThis CSS resource incorporates links to web font and font software which is the valuable copyrighted property of House Industries and/or its suppliers. You expressly agree to not copy, install, redistribute, convert, modify, or reverse engineer this font software or the fonts rendered thereby. Please contact House Industries with any questions regarding Web Fonts: http://www.houseind.com\n*/\n\n@import '@rsgweb/legacy-design-system/less/gen9-mixins';\n@import '@rsgweb/legacy-design-system/less/typography';\n\n.loadFont(HelveticaNowDisplayBold, 700, normal);\n.loadFont(HelveticaNowText, 400, normal);\n\n:root {\n    --font-family-h: HelveticaNowDisplayBold;\n    --font-family-body: HelveticaNowText;\n}\n\n// Localized Fonts\n// Polish\n:lang(pl_pl),\n:lang(pl-PL) {\n    --font-family-h: NeueHelveticaPaneuropean;\n    --font-family-std: NeueHelveticaPaneuropean;\n}\n// Russian\n:lang(ru_ru),\n:lang(ru-RU) {\n    --font-family-h: NeueHelveticaPaneuropean;\n    --font-family-body: NeueHelveticaPaneuropean;\n}\n\n[data-type-lang='pl'],\n[data-type-lang='ru'] {\n    font-family: NeueHelveticaPaneuropean !important;\n}\n\n// Chinese (Simplified)\n:lang(zh_hans),\n:lang(zh-CN) {\n    --font-family-h: ChaletComprime, NotoSansSC;\n    --font-family-body: NotoSansSC;\n}\n[data-type-lang='zh'] {\n    font-family: ChaletComprime, NotoSansSC !important;\n}\n\n// Chinese (Traditional)\n:lang(zh_tw),\n:lang(zh-TW) {\n    --font-family-h: ChaletComprime, NotoSansTC;\n    --font-family-body: NotoSansTC;\n}\n[data-type-lang='tw'] {\n    font-family: ChaletComprime, NotoSansTC !important;\n}\n\n// Japanese\n:lang(ja_jp),\n:lang(ja-JP) {\n    --font-family-h: HelveticaNowDisplayBold, NotoSansJP;\n    --font-family-body: HelveticaNowText, NotoSansJP;\n}\n[data-type-lang='jp'] {\n    font-family: HelveticaNowText, NotoSansJP !important;\n}\n\n// Korean\n:lang(ko_kr),\n:lang(ko-KR) {\n    --font-family-h: ChaletComprime, NotoSansKR;\n    --font-family-body: NotoSansKR;\n}\n[data-type-lang='kr'] {\n    font-family: ChaletComprime, NotoSansKR !important;\n}\n"],
        sourceRoot: ""
      }]), xa.locals = {
        pillBtn: "rockstargames-modules-core-headerd810b356346152e9202e393bb9034ca6",
        selected: "rockstargames-modules-core-headera5c2a7a82b5e56175f380cdcbc478730",
        portal: "rockstargames-modules-core-headerd7897e1e3d81d97b95b02bdc6aa9a563",
        large: "rockstargames-modules-core-headerec38186851cd542c1cabde176cb8684c",
        badge: "rockstargames-modules-core-headera59b3cca4d75c42f07ea4185e4222959"
      };
      const He = xa
    },
    91849: (a, e, n) => {
      n.d(e, {
        A: () => d
      });
      var t = n(42587),
        o = n.n(t),
        r = n(15081),
        i = n.n(r)()(o());
      i.push([a.id, ".rockstargames-modules-core-headeredd6d5149d36c2b3d89460393482b5a1{align-items:center;background:#282828;bottom:0;color:var(--white-100);display:flex;height:var(--global-navigation-height);justify-content:space-between;left:0;margin:0;padding:0 var(--rem-2)!important;right:0}.rockstargames-modules-core-headeredd6d5149d36c2b3d89460393482b5a1.rockstargames-modules-core-headera0afcf77006159d689145a562371f6af{position:fixed;z-index:100}.rockstargames-modules-core-headeredd6d5149d36c2b3d89460393482b5a1.rockstargames-modules-core-headeree781136421e86f1ba76f28f45009bfd{align-items:flex-start;background:var(--black-100);border:1px solid var(--border-color);border-radius:var(--border-radius-md);box-shadow:var(--global-navigation-box-shadow);flex-direction:column;height:auto;overflow:hidden;padding:0!important;position:static}.rockstargames-modules-core-headere3008521b763b81f3b4f2c3659d22cc2{list-style:none}.rockstargames-modules-core-headere3008521b763b81f3b4f2c3659d22cc2.rockstargames-modules-core-headeree781136421e86f1ba76f28f45009bfd{border-bottom:1px solid var(--border-color);width:100%}.rockstargames-modules-core-headere3008521b763b81f3b4f2c3659d22cc2.rockstargames-modules-core-headeree781136421e86f1ba76f28f45009bfd:last-child{border:0}", "", {
        version: 3,
        sources: ["webpack://./compositional/components/QuickMenu/index.less"],
        names: [],
        mappings: "AAAA,mEASI,kBAAA,CALA,kBAAA,CAHA,QAAA,CAUA,sBAAA,CAHA,YAAA,CAHA,sCAAA,CAKA,6BAAA,CARA,MAAA,CAIA,QAAA,CACA,gCAAA,CAJA,OASJ,CACI,qIACI,cAAA,CACA,WACR,CAEI,qIAGI,sBAAA,CAMA,2BAAA,CAFA,oCAAA,CADA,qCAAA,CAIA,8CAAA,CARA,qBAAA,CAEA,WAAA,CAIA,eAAA,CAHA,mBAAA,CAJA,eASR,CAIA,mEACI,eAFJ,CAII,qIAEI,2CAAA,CADA,UADR,CAIQ,gJACI,QAFZ",
        sourcesContent: [".quickMenu {\n    bottom: 0;\n    left: 0;\n    right: 0;\n    background: #282828;\n    height: var(--global-navigation-height);\n    margin: 0;\n    padding: 0 var(--rem-2) !important;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    color: var(--white-100);\n\n    &.mobile {\n        position: fixed;\n        z-index: 100;\n    }\n\n    &.desktop {\n        position: static;\n        flex-direction: column;\n        align-items: flex-start;\n        height: auto;\n        padding: 0 !important;\n        border-radius: var(--border-radius-md);\n        border: 1px solid var(--border-color);\n        overflow: hidden;\n        background: var(--black-100);\n        box-shadow: var(--global-navigation-box-shadow);\n    }\n}\n\n.quickMenuItem {\n    list-style: none;\n\n    &.desktop {\n        width: 100%;\n        border-bottom: 1px solid var(--border-color);\n\n        &:last-child {\n            border: 0;\n        }\n    }\n\n    &.mobile {\n\n    }\n}\n"],
        sourceRoot: ""
      }]), i.locals = {
        quickMenu: "rockstargames-modules-core-headeredd6d5149d36c2b3d89460393482b5a1",
        mobile: "rockstargames-modules-core-headera0afcf77006159d689145a562371f6af",
        desktop: "rockstargames-modules-core-headeree781136421e86f1ba76f28f45009bfd",
        quickMenuItem: "rockstargames-modules-core-headere3008521b763b81f3b4f2c3659d22cc2"
      };
      const d = i
    },
    29284: (a, e, n) => {
      n.d(e, {
        A: () => He
      });
      var t = n(42587),
        o = n.n(t),
        r = n(15081),
        i = n.n(r),
        d = n(79908),
        s = n.n(d),
        l = new URL(n(97439), n.b),
        c = new URL(n(24921), n.b),
        m = new URL(n(98230), n.b),
        g = new URL(n(26207), n.b),
        A = new URL(n(6903), n.b),
        f = new URL(n(22154), n.b),
        h = new URL(n(49200), n.b),
        b = new URL(n(20928), n.b),
        p = new URL(n(90768), n.b),
        C = new URL(n(29951), n.b),
        u = new URL(n(28255), n.b),
        v = new URL(n(47594), n.b),
        w = new URL(n(54414), n.b),
        y = new URL(n(5676), n.b),
        x = new URL(n(28326), n.b),
        _ = new URL(n(50225), n.b),
        k = new URL(n(32791), n.b),
        B = new URL(n(92973), n.b),
        I = new URL(n(25293), n.b),
        M = new URL(n(46962), n.b),
        S = new URL(n(66312), n.b),
        z = new URL(n(44934), n.b),
        R = new URL(n(66562), n.b),
        D = new URL(n(81117), n.b),
        N = new URL(n(62051), n.b),
        T = new URL(n(68577), n.b),
        E = new URL(n(9133), n.b),
        F = new URL(n(93458), n.b),
        L = new URL(n(77032), n.b),
        H = new URL(n(44486), n.b),
        P = new URL(n(89307), n.b),
        j = new URL(n(58853), n.b),
        G = new URL(n(46010), n.b),
        W = new URL(n(26739), n.b),
        J = new URL(n(68145), n.b),
        O = new URL(n(59792), n.b),
        K = new URL(n(79122), n.b),
        Q = new URL(n(50228), n.b),
        q = new URL(n(304), n.b),
        U = new URL(n(79539), n.b),
        Y = new URL(n(61494), n.b),
        Z = new URL(n(313), n.b),
        V = new URL(n(94904), n.b),
        X = new URL(n(49027), n.b),
        $ = new URL(n(83493), n.b),
        aa = new URL(n(53037), n.b),
        ea = new URL(n(93803), n.b),
        na = new URL(n(69400), n.b),
        ta = new URL(n(44840), n.b),
        oa = new URL(n(28168), n.b),
        ra = new URL(n(40792), n.b),
        ia = new URL(n(31431), n.b),
        da = new URL(n(51594), n.b),
        sa = new URL(n(21130), n.b),
        la = new URL(n(57390), n.b),
        ca = new URL(n(36606), n.b),
        ma = new URL(n(36334), n.b),
        ga = new URL(n(89457), n.b),
        Aa = new URL(n(79215), n.b),
        fa = new URL(n(34298), n.b),
        ha = new URL(n(20629), n.b),
        ba = new URL(n(55490), n.b),
        pa = new URL(n(44001), n.b),
        Ca = new URL(n(11917), n.b),
        ua = new URL(n(88622), n.b),
        va = new URL(n(93262), n.b),
        wa = new URL(n(52086), n.b),
        ya = new URL(n(66894), n.b),
        xa = i()(o()),
        _a = s()(l),
        ka = s()(c),
        Ba = s()(m),
        Ia = s()(g),
        Ma = s()(A),
        Sa = s()(f),
        za = s()(h),
        Ra = s()(b),
        Da = s()(p),
        Na = s()(C),
        Ta = s()(u),
        Ea = s()(v),
        Fa = s()(w),
        La = s()(y),
        Ha = s()(x),
        Pa = s()(_),
        ja = s()(k),
        Ga = s()(B),
        Wa = s()(I),
        Ja = s()(M),
        Oa = s()(S),
        Ka = s()(z),
        Qa = s()(R),
        qa = s()(D),
        Ua = s()(N),
        Ya = s()(T),
        Za = s()(E),
        Va = s()(F),
        Xa = s()(L),
        $a = s()(H),
        ae = s()(P),
        ee = s()(j),
        ne = s()(G),
        te = s()(W),
        oe = s()(J),
        re = s()(O),
        ie = s()(K),
        de = s()(Q),
        se = s()(q),
        le = s()(U),
        ce = s()(Y),
        me = s()(Z),
        ge = s()(V),
        Ae = s()(X),
        fe = s()($),
        he = s()(aa),
        be = s()(ea),
        pe = s()(na),
        Ce = s()(ta),
        ue = s()(oa),
        ve = s()(ra),
        we = s()(ia),
        ye = s()(da),
        xe = s()(sa),
        _e = s()(la),
        ke = s()(ca),
        Be = s()(ma),
        Ie = s()(ga),
        Me = s()(Aa),
        Se = s()(fa),
        ze = s()(ha),
        Re = s()(ba),
        De = s()(pa),
        Ne = s()(Ca),
        Te = s()(ua),
        Ee = s()(va),
        Fe = s()(wa),
        Le = s()(ya);
      xa.push([a.id, `.rockstargames-modules-core-headerb3978c01af4cdbe62e1bd704f1e5642a{align-items:center;background:var(--white-15);border:none;border-radius:100px;color:var(--white-100);cursor:pointer;display:flex;font-family:var(--font-family-body);font-size:20px;font-style:normal;font-weight:700;justify-content:center;line-height:var(--rem-125);min-width:var(--rem-6);padding:var(--padding-xs) var(--padding-sm);text-align:center;transition:background-color .3s ease-in-out}.rockstargames-modules-core-headerb3978c01af4cdbe62e1bd704f1e5642a img{height:var(--nav-icon-size);margin-left:var(--grid-gap-xs);transition:filter .3s ease-in-out;width:var(--nav-icon-size)}.rockstargames-modules-core-headerb3978c01af4cdbe62e1bd704f1e5642a:focus,.rockstargames-modules-core-headerb3978c01af4cdbe62e1bd704f1e5642a:hover{background-color:var(--white-40);outline:none}.rockstargames-modules-core-headerb3978c01af4cdbe62e1bd704f1e5642a.rockstargames-modules-core-headerd89d3d1eec6c5bd71ccb21cee0ab387a{background:var(--white-100);color:var(--black-200)}.rockstargames-modules-core-headerb3978c01af4cdbe62e1bd704f1e5642a.rockstargames-modules-core-headerd89d3d1eec6c5bd71ccb21cee0ab387a img{filter:invert()}.rockstargames-modules-core-headerae9bf34db42d6efdfffcd58c35bf499e{--text-section-max-width:640px;--base-pixel-size:12px;--base-rem-size:0.75rem;--half-rem-size:calc(var(--base-rem-size) / 2);--twice-rem-size:calc(var(--base-rem-size) * 2);--section-margin-bottom:calc(var(--base-rem-size) * 4);--header-height:80px;--breadcrumbs-height:calc(var(--base-pixel-size) * 3.5);--max-width:1920px;--standard-color:#fcaf17;--color-h:#fff;--body-color:#e8e8e8;--background-color:#0b0b0b;--card-background-color:#000;--border-color:#282828;--privacy-banner-height:0px;--game-header-height:50px;--standard-grid-gap:calc(var(--base-rem-size) * 2);--image-margin-bottom:inherit;--image-rounding:0px;--image-rounding-static:16px;--image-rounding-static-sm:8px;--image-rounding-static-xs:4px;--grid-gap-static-xs:0.5rem;--grid-gap-static-sm:1rem;--grid-gap-static-md:2rem;--grid-gap-static-lg:4rem;--grid-gap-static-xl:8rem;--max-width-static:640px;--max-width-static-md:1088px;--max-width-static-lg:1920px;--max-width-static-xl:2560px;--margin-static:0 0 2rem;--h2-margin:2rem 0 0 0;--padding-sides:var(--grid-gap-static-lg);--padding-top-bottom:var(--padding-sides);--padding-static:var(--padding-sides);--font-family-std:var(--rsg-font-family-std);--font-family-h:var(--rsg-font-family-h);--font-family-h-halloween:nightmar;--rsg-font-family-std:HelveticaNowText;--rsg-font-family-h:HelveticaNowDisplayBold;--gta-font-family-std:Chalet;--gta-font-family-h:ChaletComprime;--gta-font-family-badge:Pricedown;--rdr-font-family-std:HapnaSlabSerif;--rdr-font-family-h:RDRLino-Regular;--rdr-font-family-newswire-subtitle:HapnaSlabSerif;--rdr-area-font:RDRCatalogueBold;--header-multiplier:var(--header-numerator,var(--root-font-size)) /var(--root-font-size);-webkit-font-smoothing:antialiased;--font-family-body:"Chalet";--font-family-h:"ChaletComprime";--font-weight-regular:400;--font-weight-bold:700;--letter-spacing-body:0;--letter-spacing-h:0;--line-height-sm:1;--line-height-md:1.1;--line-height-lg:1.6;--black-200:#000;--black-100:#121212;--black-65:hsla(0,0%,7%,.65);--black-40:hsla(0,0%,7%,.4);--black-15:hsla(0,0%,7%,.15);--text-dark:#2d2d2d;--border-color:#2d2d2d;--white-100:#fff;--white-65:hsla(0,0%,100%,.65);--white-40:hsla(0,0%,100%,.4);--white-15:hsla(0,0%,100%,.15);--focusring-blue:blue;--red:#e03232;--circoloco-red:#eb1818;--rockstar-gold:#fcaf17;--playstation-blue:#00439c;--microsoft-green:#387a26;--pc-legacy:#b2b2b2;--pc-enhanced:#beb279;--color-h:var(--white-100);--color-body:var(--text-light);--green-light:#c1f7bd;--green-dark:#81da85;--scroll-thumb-color:#7d7d7d;--scroll-track-color:transparent;--max-width-sm:640px;--max-width-md:1088px;--max-width-lg:1920px;--max-width-xl:2560px;--spacing-xxs:0.25rem;--spacing-xs:0.5rem;--spacing-sm:1rem;--spacing-md:2rem;--spacing-lg:4rem;--spacing-xl:8rem;--grid-gap-xxs:var(--spacing-xxs);--grid-gap-xs:var(--spacing-xs);--grid-gap-sm:var(--spacing-sm);--grid-gap-md:var(--spacing-md);--grid-gap-lg:var(--spacing-lg);--grid-gap-xl:var(--spacing-xl);--padding-xxs:var(--spacing-xxs);--padding-xs:var(--spacing-xs);--padding-sm:var(--spacing-sm);--padding-md:var(--spacing-md);--padding-lg:var(--spacing-lg);--padding-xl:var(--spacing-xl);--margin-xxs:var(--spacing-xxs);--margin-xs:var(--spacing-xs);--margin-sm:var(--spacing-sm);--margin-md:var(--spacing-md);--margin-lg:var(--spacing-lg);--margin-xl:var(--spacing-xl);--border-radius-xs:2px;--border-radius-sm:4px;--border-radius-md:8px;--border-radius-lg:16px;--gradient-overlay-bottom:linear-gradient(180.08deg,transparent 25%,rgba(0,0,0,.5) 65%,rgba(0,0,0,.6));--gradient-overlay-right:linear-gradient(270deg,rgba(0,0,0,.9),transparent);--promo-banner-z-index:11500;--font-family-h:HelveticaNowDisplayBold;--font-family-body:HelveticaNowText;--text-light:#e8e8e8;--rem-025:calc(var(--base-rem-size) * 0.25);--rem-05:calc(var(--base-rem-size) * 0.5);--rem-075:calc(var(--base-rem-size) * 0.75);--rem-1:var(--base-rem-size);--rem-125:calc(var(--base-rem-size) * 1.25);--rem-15:calc(var(--base-rem-size) * 1.5);--rem-2:calc(var(--base-rem-size) * 2);--rem-3:calc(var(--base-rem-size) * 3);--rem-4:calc(var(--base-rem-size) * 4);--rem-6:calc(var(--base-rem-size) * 6);--rem-8:calc(var(--base-rem-size) * 8);--spacing-xxs:var(--rem-025);--spacing-xs:var(--rem-05);--spacing-sm:var(--rem-1);--spacing-md:var(--rem-2);--spacing-lg:var(--rem-4);--spacing-xl:var(--rem-8);--global-navigation-background:rgba(0,0,0,.85);--global-navigation-border-color:#282828;--global-navigation-box-shadow:0px 8px 20px 0px rgba(0,0,0,.7);--global-navigation-height:80px;--base-rem-size:var(--base-rem-size);--mobile-nav-padding-sides:32px;--mobile-nav-item-padding:20px var(--mobile-nav-padding-sides);--nav-icon-size:var(--rem-1);--nav-link-size:calc(var(--base-rem-size) * 0.75);--sub-nav-indent:var(--spacing-sm);--sub-nav-min-width:240px;background-color:var(--background-color,transparent);font-family:var(--font-family-std,HelveticaNowText);font-family:var(--font-family-body);font-size:calc(var(--root-font-size) * 1px);font-weight:var(--font-weight-std,400);letter-spacing:var(--letter-spacing-std,-.025em);line-height:var(--line-height-std,1.6)}@media (max-width:767px){.rockstargames-modules-core-headerae9bf34db42d6efdfffcd58c35bf499e{--grid-gap-static-lg:2rem;--grid-gap-static-xl:4rem}}@media (min-width:2560px){.rockstargames-modules-core-headerae9bf34db42d6efdfffcd58c35bf499e{--max-width-static-md:1440px}}@font-face{font-family:HelveticaNowText;font-style:italic;font-weight:400;src:url(${_a}) format("woff")}@font-face{font-family:HelveticaNowText;font-style:normal;font-weight:700;src:url(${ka}) format("woff")}@font-face{font-family:HelveticaNowDisplayMedium;font-style:normal;font-weight:400;src:url(${Ba}) format("woff")}@font-face{font-family:HelveticaNeueLTW05;font-style:normal;font-weight:400;src:url(${Ia}) format("woff")}@font-face{font-family:HelveticaNeueLTW05;font-style:italic;font-weight:400;src:url(${Ma}) format("woff")}@font-face{font-family:HelveticaNeueLTW07;font-style:normal;font-weight:400;src:url(${Sa}) format("woff")}@font-face{font-family:HelveticaNeueLTW07;font-style:italic;font-weight:400;src:url(${za}) format("woff")}@font-face{font-family:HelveticaNeueLTW07;font-style:normal;font-weight:700;src:url(${Ra}) format("woff")}@font-face{font-family:HelveticaNeueLTW07;font-style:italic;font-weight:700;src:url(${Da}) format("woff")}@font-face{font-family:HelveticaNeueLTW07-85Heavy;font-style:normal;font-weight:700;src:url(${Na}) format("woff")}@font-face{font-family:NeueHelveticaPaneuropean;font-style:normal;font-weight:400;src:url(${Ta}) format("woff")}@font-face{font-family:SackersGothicW01-Square;font-style:normal;font-weight:400;src:url(${Ea}) format("woff")}@font-face{font-family:Cabrito-Nordem;font-style:normal;font-weight:400;src:url(${Fa}) format("woff")}@font-face{font-family:Droid-Serif-Pro;font-style:normal;font-weight:400;src:url(${La}) format("woff")}@font-face{font-family:NotoSansSC;font-style:normal;font-weight:400;src:url(${Ha}) format("woff")}@font-face{font-family:NotoSansSC;font-style:normal;font-weight:500;src:url(${Pa}) format("woff")}@font-face{font-family:NotoSansSC;font-style:normal;font-weight:700;src:url(${ja}) format("woff")}@font-face{font-family:NotoSansSC;font-style:normal;font-weight:900;src:url(${Ga}) format("woff")}@font-face{font-family:NotoSansTC;font-style:normal;font-weight:400;src:url(${Wa}) format("woff")}@font-face{font-family:NotoSansTC;font-style:normal;font-weight:500;src:url(${Ja}) format("woff")}@font-face{font-family:NotoSansTC;font-style:normal;font-weight:700;src:url(${Oa}) format("woff")}@font-face{font-family:NotoSansTC;font-style:normal;font-weight:900;src:url(${Ka}) format("woff")}@font-face{font-family:NotoSansJP;font-style:normal;font-weight:400;src:url(${Qa}) format("woff")}@font-face{font-family:NotoSansJP;font-style:normal;font-weight:500;src:url(${qa}) format("woff")}@font-face{font-family:NotoSansJP;font-style:normal;font-weight:700;src:url(${Ua}) format("woff")}@font-face{font-family:NotoSansJP;font-style:normal;font-weight:900;src:url(${Ya}) format("woff")}@font-face{font-family:NotoSansKR;font-style:normal;font-weight:400;src:url(${Za}) format("woff")}@font-face{font-family:NotoSansKR;font-style:normal;font-weight:500;src:url(${Va}) format("woff")}@font-face{font-family:NotoSansKR;font-style:normal;font-weight:700;src:url(${Xa}) format("woff")}@font-face{font-family:NotoSansKR;font-style:normal;font-weight:900;src:url(${$a}) format("woff")}@font-face{font-family:NotoSerifJP;font-style:normal;font-weight:700;src:url(${ae}) format("woff")}@font-face{font-family:NotoSerifJP;font-style:normal;font-weight:900;src:url(${ee}) format("woff")}@font-face{font-family:NotoSerifKR;font-style:normal;font-weight:700;src:url(${ne}) format("woff")}@font-face{font-family:NotoSerifKR;font-style:normal;font-weight:900;src:url(${ne}) format("woff")}@font-face{font-family:NotoSerifSC;font-style:normal;font-weight:700;src:url(${te}) format("woff")}@font-face{font-family:NotoSerifSC;font-style:normal;font-weight:900;src:url(${oe}) format("woff")}@font-face{font-family:NotoSerifTC;font-style:normal;font-weight:700;src:url(${re}) format("woff")}@font-face{font-family:NotoSerifTC;font-style:normal;font-weight:900;src:url(${ie}) format("woff")}@font-face{font-family:ChaletComprime;font-style:normal;font-weight:400;src:url(${de}) format("woff")}@font-face{font-family:ChaletComprime;font-style:normal;font-weight:700;src:url(${se}) format("woff")}@font-face{font-family:Chalet;font-style:normal;font-weight:400;src:url(${le}) format("woff")}@font-face{font-family:Chalet;font-style:normal;font-weight:700;src:url(${ce}) format("woff")}@font-face{font-family:Pricedown;font-style:normal;font-weight:700;src:url(${me}) format("woff")}@font-face{font-family:NeueHelveticaW05;font-style:normal;font-weight:400;src:url(${ge}) format("woff")}@font-face{font-family:NeueHelveticaW05;font-style:normal;font-weight:700;src:url(${Ae}) format("woff")}@font-face{font-family:NeueHelveticaW05;font-style:normal;font-weight:900;src:url(${fe}) format("woff")}@font-face{font-family:FrizQuadrataW05;font-style:normal;font-weight:400;src:url(${he}) format("woff")}@font-face{font-family:FrizQuadrataW05;font-style:italic;font-weight:400;src:url(${be}) format("woff")}@font-face{font-family:FrizQuadrataW05;font-style:normal;font-weight:700;src:url(${pe}) format("woff")}@font-face{font-family:FrizQuadrataW05;font-style:italic;font-weight:700;src:url(${Ce}) format("woff")}@font-face{font-family:CorporateW05;font-style:normal;font-weight:400;src:url(${ue}) format("woff")}@font-face{font-family:NimbusSansW05;font-style:normal;font-weight:400;src:url(${ve}) format("woff")}@font-face{font-family:NimbusSansW05;font-style:normal;font-weight:700;src:url(${we}) format("woff")}@font-face{font-family:EurostileNextW05;font-style:normal;font-weight:700;src:url(${ye}) format("woff")}@font-face{font-family:Diploma;font-style:normal;font-weight:400;src:url(${xe}) format("woff")}@font-face{font-family:BrushScriptMT;font-style:normal;font-weight:400;src:url(${_e}) format("woff")}@font-face{font-family:BankGothicBT;font-style:normal;font-weight:400;src:url(${ke}) format("woff")}@font-face{font-family:MeltdownRegular;font-style:normal;font-weight:400;src:url(${Be}) format("woff")}@font-face{font-family:SharkSnackRegular;font-style:normal;font-weight:400;src:url(${Ie}) format("woff")}@font-face{font-family:GTAArtDeco;font-style:normal;font-weight:400;src:url(${Me}) format("woff")}@font-face{font-family:GTAArtDeco;font-style:normal;font-weight:500;src:url(${Se}) format("woff")}@font-face{font-family:RDRLino-Regular;font-style:normal;font-weight:400;src:url(${ze}) format("woff")}@font-face{font-family:HapnaSlabSerif;font-style:normal;font-weight:400;src:url(${Re}) format("woff")}@font-face{font-family:HapnaSlabSerif;font-style:normal;font-weight:700;src:url(${De}) format("woff")}@font-face{font-family:nightmar;font-style:normal;font-weight:100;src:url(${Ne}) format("woff")}@font-face{font-family:RDRCatalogueBold;font-style:normal;font-weight:700;src:url(${Te}) format("woff")}@font-face{font-family:RDRUltraHeadline;font-style:normal;font-weight:400;src:url(${Ee}) format("woff")}@media (min-width:0px){.rockstargames-modules-core-headerae9bf34db42d6efdfffcd58c35bf499e{--root-font-size:16}}@media (min-width:768px){.rockstargames-modules-core-headerae9bf34db42d6efdfffcd58c35bf499e{--root-font-size:18}}@media (min-width:1024px){.rockstargames-modules-core-headerae9bf34db42d6efdfffcd58c35bf499e{--root-font-size:20}}@media (min-width:1920px){.rockstargames-modules-core-headerae9bf34db42d6efdfffcd58c35bf499e{--root-font-size:22}}.rockstargames-modules-core-headerae9bf34db42d6efdfffcd58c35bf499e *{box-sizing:border-box}.rockstargames-modules-core-headerae9bf34db42d6efdfffcd58c35bf499e a{color:inherit;text-decoration:none}.rockstargames-modules-core-headerae9bf34db42d6efdfffcd58c35bf499e figure,.rockstargames-modules-core-headerae9bf34db42d6efdfffcd58c35bf499e h1,.rockstargames-modules-core-headerae9bf34db42d6efdfffcd58c35bf499e h2,.rockstargames-modules-core-headerae9bf34db42d6efdfffcd58c35bf499e h3,.rockstargames-modules-core-headerae9bf34db42d6efdfffcd58c35bf499e h4,.rockstargames-modules-core-headerae9bf34db42d6efdfffcd58c35bf499e h5,.rockstargames-modules-core-headerae9bf34db42d6efdfffcd58c35bf499e h6,.rockstargames-modules-core-headerae9bf34db42d6efdfffcd58c35bf499e p{margin:0}.rockstargames-modules-core-headerae9bf34db42d6efdfffcd58c35bf499e caption,.rockstargames-modules-core-headerae9bf34db42d6efdfffcd58c35bf499e figcaption{--padding-dynamic:var(--padding-sides);--padding-dynamic-tb:initial;color:var(--body-color);display:block;font-family:var(--font-family-std);font-size:var(--font-size-2);font-style:italic;margin:var(--grid-gap-static-sm) auto 0;padding:var(--padding-t,var(--padding-dynamic-tb,0)) var(--padding-dynamic,0) var(--padding-b,var(--padding-dynamic-tb,0)) var(--padding-dynamic,0);text-align:center}.rockstargames-modules-core-headerae9bf34db42d6efdfffcd58c35bf499e caption p,.rockstargames-modules-core-headerae9bf34db42d6efdfffcd58c35bf499e figcaption p{display:block}.rockstargames-modules-core-headerae9bf34db42d6efdfffcd58c35bf499e :lang(ru_ru){--font-family-h-halloween:RDRLino-Regular}.rockstargames-modules-core-headerae9bf34db42d6efdfffcd58c35bf499e :lang(ko_kr){word-break:keep-all}.rockstargames-modules-core-headerae9bf34db42d6efdfffcd58c35bf499e:lang(ja_jp){--rsg-font-family-std:HelveticaNowText,NotoSansJP}.rockstargames-modules-core-headerae9bf34db42d6efdfffcd58c35bf499e:lang(zh_hans){--rsg-font-family-std:HelveticaNowText,NotoSansSC}.rockstargames-modules-core-headerae9bf34db42d6efdfffcd58c35bf499e:lang(zh_tw){--rsg-font-family-std:HelveticaNowText,NotoSansTC}.rockstargames-modules-core-headerae9bf34db42d6efdfffcd58c35bf499e:lang(ja_jp){--rsg-font-family-h:HelveticaNowDisplayBold,NotoSansJP}.rockstargames-modules-core-headerae9bf34db42d6efdfffcd58c35bf499e:lang(zh_hans){--rsg-font-family-h:HelveticaNowDisplayBold,NotoSansSC}.rockstargames-modules-core-headerae9bf34db42d6efdfffcd58c35bf499e:lang(zh_tw){--rsg-font-family-h:HelveticaNowDisplayBold,NotoSansTC}.rockstargames-modules-core-headerae9bf34db42d6efdfffcd58c35bf499e:lang(ja_jp){--gta-font-family-std:Chalet,NotoSansJP}.rockstargames-modules-core-headerae9bf34db42d6efdfffcd58c35bf499e:lang(zh_hans){--gta-font-family-std:Chalet,NotoSansSC}.rockstargames-modules-core-headerae9bf34db42d6efdfffcd58c35bf499e:lang(zh_tw){--gta-font-family-std:Chalet,NotoSansTC}.rockstargames-modules-core-headerae9bf34db42d6efdfffcd58c35bf499e:lang(ja_jp){--gta-font-family-h:ChaletComprime,NotoSansJP}.rockstargames-modules-core-headerae9bf34db42d6efdfffcd58c35bf499e:lang(zh_hans){--gta-font-family-h:ChaletComprime,NotoSansSC}.rockstargames-modules-core-headerae9bf34db42d6efdfffcd58c35bf499e:lang(zh_tw){--gta-font-family-h:ChaletComprime,NotoSansTC}.rockstargames-modules-core-headerae9bf34db42d6efdfffcd58c35bf499e:lang(ja_jp){--gta-font-family-badge:Pricedown,NotoSansJP}.rockstargames-modules-core-headerae9bf34db42d6efdfffcd58c35bf499e:lang(zh_hans){--gta-font-family-badge:Pricedown,NotoSansSC}.rockstargames-modules-core-headerae9bf34db42d6efdfffcd58c35bf499e:lang(zh_tw){--gta-font-family-badge:Pricedown,NotoSansTC}.rockstargames-modules-core-headerae9bf34db42d6efdfffcd58c35bf499e:lang(ja_jp){--rdr-font-family-std:HapnaSlabSerif,NotoSansJP}.rockstargames-modules-core-headerae9bf34db42d6efdfffcd58c35bf499e:lang(zh_hans){--rdr-font-family-std:HapnaSlabSerif,NotoSansSC}.rockstargames-modules-core-headerae9bf34db42d6efdfffcd58c35bf499e:lang(zh_tw){--rdr-font-family-std:HapnaSlabSerif,NotoSansTC}.rockstargames-modules-core-headerae9bf34db42d6efdfffcd58c35bf499e:lang(ja_jp){--rdr-font-family-h:RDRLino-Regular,NotoSansJP}.rockstargames-modules-core-headerae9bf34db42d6efdfffcd58c35bf499e:lang(zh_hans){--rdr-font-family-h:RDRLino-Regular,NotoSansSC}.rockstargames-modules-core-headerae9bf34db42d6efdfffcd58c35bf499e:lang(zh_tw){--rdr-font-family-h:RDRLino-Regular,NotoSansTC}.rockstargames-modules-core-headerae9bf34db42d6efdfffcd58c35bf499e:lang(ja_jp){--rdr-font-family-newswire-subtitle:HapnaSlabSerif,NotoSansJP}.rockstargames-modules-core-headerae9bf34db42d6efdfffcd58c35bf499e:lang(zh_hans){--rdr-font-family-newswire-subtitle:HapnaSlabSerif,NotoSansSC}.rockstargames-modules-core-headerae9bf34db42d6efdfffcd58c35bf499e:lang(zh_tw){--rdr-font-family-newswire-subtitle:HapnaSlabSerif,NotoSansTC}.rockstargames-modules-core-headerae9bf34db42d6efdfffcd58c35bf499e:lang(ja_jp){--rdr-area-font:RDRCatalogueBold,NotoSansJP}.rockstargames-modules-core-headerae9bf34db42d6efdfffcd58c35bf499e:lang(zh_hans){--rdr-area-font:RDRCatalogueBold,NotoSansSC}.rockstargames-modules-core-headerae9bf34db42d6efdfffcd58c35bf499e:lang(zh_tw){--rdr-area-font:RDRCatalogueBold,NotoSansTC}.rockstargames-modules-core-headerae9bf34db42d6efdfffcd58c35bf499e h1,.rockstargames-modules-core-headerae9bf34db42d6efdfffcd58c35bf499e h1.rockstargames-modules-core-headerd74f7b16fd048bff6fa85b999865ae4c,.rockstargames-modules-core-headerae9bf34db42d6efdfffcd58c35bf499e h2,.rockstargames-modules-core-headerae9bf34db42d6efdfffcd58c35bf499e h3,.rockstargames-modules-core-headerae9bf34db42d6efdfffcd58c35bf499e h4{font-family:var(--font-family-h,HelveticaNowDisplayBold);letter-spacing:var(--letter-spacing-h,-.025em)}.rockstargames-modules-core-headerae9bf34db42d6efdfffcd58c35bf499e h1,.rockstargames-modules-core-headerae9bf34db42d6efdfffcd58c35bf499e h1.rockstargames-modules-core-headerd74f7b16fd048bff6fa85b999865ae4c{font-weight:var(--font-weight-h1,var(--font-weight-h,700));line-height:var(--line-height-h1,var(--line-height-h,1.1));text-transform:var(--text-transform-h1,var(--text-transform-h,none))}.rockstargames-modules-core-headerae9bf34db42d6efdfffcd58c35bf499e h1.rockstargames-modules-core-headerd74f7b16fd048bff6fa85b999865ae4c{font-size:calc(var(--font-size-8) * var(--header-multiplier))}.rockstargames-modules-core-headerae9bf34db42d6efdfffcd58c35bf499e h1{font-size:calc(var(--font-size-7) * var(--header-multiplier))}.rockstargames-modules-core-headerae9bf34db42d6efdfffcd58c35bf499e h2{font-size:calc(var(--font-size-6) * var(--header-multiplier));font-weight:var(--font-weight-h2,var(--font-weight-h,700));line-height:var(--line-height-h,1.1);text-transform:var(--text-transform-h2,var(--text-transform-h,none))}.rockstargames-modules-core-headerae9bf34db42d6efdfffcd58c35bf499e h3{font-size:calc(var(--font-size-5) * var(--header-multiplier));font-weight:var(--font-weight-h3,var(--font-weight-h,700));line-height:var(--line-height-h,1.1);text-transform:var(--text-transform-h3,var(--text-transform-h,none))}.rockstargames-modules-core-headerae9bf34db42d6efdfffcd58c35bf499e h3[data-context=newswire-subtitle]{font-family:var(--font-family-newswire-subtitle,var(--font-family-h));font-size:calc(var(--font-size-5) * var(--h3-numerator-override-newswire-subtitle, var(--header-multiplier)));font-weight:var(--font-weight-newswire-subtitle,var(--font-weight-h));text-transform:var(--text-transform-newswire-subtitle)}[data-game=rdo] .rockstargames-modules-core-headerae9bf34db42d6efdfffcd58c35bf499e h3,[data-game^=rdr] .rockstargames-modules-core-headerae9bf34db42d6efdfffcd58c35bf499e h3{font-weight:var(--font-weight-h3,var(--font-weight-h,400))}.rockstargames-modules-core-headerae9bf34db42d6efdfffcd58c35bf499e h4,.rockstargames-modules-core-headerae9bf34db42d6efdfffcd58c35bf499e h5,.rockstargames-modules-core-headerae9bf34db42d6efdfffcd58c35bf499e h6{font-size:calc(var(--font-size-4) * var(--header-multiplier));line-height:var(--line-height-h,1.1)}.rockstargames-modules-core-headerae9bf34db42d6efdfffcd58c35bf499e h1,.rockstargames-modules-core-headerae9bf34db42d6efdfffcd58c35bf499e h1.rockstargames-modules-core-headerd74f7b16fd048bff6fa85b999865ae4c{color:var(--color-h-dynamic,var(--color-h1,var(--color-h,inherit)))}.rockstargames-modules-core-headerae9bf34db42d6efdfffcd58c35bf499e h2{color:var(--color-h-dynamic,var(--color-h2,var(--color-h,inherit)))}.rockstargames-modules-core-headerae9bf34db42d6efdfffcd58c35bf499e h3{color:var(--color-h-dynamic,var(--color-h3,var(--color-h,inherit)))}.rockstargames-modules-core-headerae9bf34db42d6efdfffcd58c35bf499e h3[data-context=newswire-subtitle]{color:var(--color-subtitle-dynamic,var(--color-h-dynamic,var(--color-h3,var(--color-h,inherit))))}.rockstargames-modules-core-headerae9bf34db42d6efdfffcd58c35bf499e h4,.rockstargames-modules-core-headerae9bf34db42d6efdfffcd58c35bf499e h5,.rockstargames-modules-core-headerae9bf34db42d6efdfffcd58c35bf499e h6{color:var(--color-h-dynamic,var(--color-h,inherit))}.rockstargames-modules-core-headerae9bf34db42d6efdfffcd58c35bf499e [template=community]{--time-color:var(--body-color,#2d2d2d);--breadcrumb-separator-filter-invert:invert(0)}.rockstargames-modules-core-headerae9bf34db42d6efdfffcd58c35bf499e [template=community] main{color:var(--color-h,#161616)}.rockstargames-modules-core-headerae9bf34db42d6efdfffcd58c35bf499e [template=community] p{color:var(--body-color,#2d2d2d)}.rockstargames-modules-core-headerae9bf34db42d6efdfffcd58c35bf499e [data-game^=gta]{--font-family-std:var(--gta-font-family-std);--font-family-h:var(--gta-font-family-h);--letter-spacing-h:0;--line-height-h1:1;--font-weight-newswire-subtitle:400;--letter-spacing-std:0;--color-h:#fff;--body-color:#e8e8e8;--tag-color:#e8e8e8;--rsg-font-family-std:HelveticaNowText;--rsg-font-family-h:HelveticaNowDisplayBold;--gta-font-family-std:Chalet;--gta-font-family-h:ChaletComprime;--gta-font-family-badge:Pricedown;--rdr-font-family-std:HapnaSlabSerif;--rdr-font-family-h:RDRLino-Regular;--rdr-font-family-newswire-subtitle:HapnaSlabSerif;--rdr-area-font:RDRCatalogueBold;--header-multiplier:var(--header-numerator,var(--root-font-size)) /var(--root-font-size);-webkit-font-smoothing:antialiased;background-color:var(--background-color,transparent);color:#e8e8e8;font-family:var(--font-family-std,HelveticaNowText);font-size:calc(var(--root-font-size) * 1px);font-weight:var(--font-weight-std,400);letter-spacing:var(--letter-spacing-std,-.025em);line-height:var(--line-height-std,1.6)}@media (min-width:0px){.rockstargames-modules-core-headerae9bf34db42d6efdfffcd58c35bf499e [data-game^=gta]{--header-numerator:20.8}}@media (min-width:768px){.rockstargames-modules-core-headerae9bf34db42d6efdfffcd58c35bf499e [data-game^=gta]{--header-numerator:23.4}}@media (min-width:1024px){.rockstargames-modules-core-headerae9bf34db42d6efdfffcd58c35bf499e [data-game^=gta]{--header-numerator:26}}@media (min-width:1920px){.rockstargames-modules-core-headerae9bf34db42d6efdfffcd58c35bf499e [data-game^=gta]{--header-numerator:29.25}}.rockstargames-modules-core-headerae9bf34db42d6efdfffcd58c35bf499e [data-game^=gta]:lang(ja_jp){--rsg-font-family-std:HelveticaNowText,NotoSansJP}.rockstargames-modules-core-headerae9bf34db42d6efdfffcd58c35bf499e [data-game^=gta]:lang(zh_hans){--rsg-font-family-std:HelveticaNowText,NotoSansSC}.rockstargames-modules-core-headerae9bf34db42d6efdfffcd58c35bf499e [data-game^=gta]:lang(zh_tw){--rsg-font-family-std:HelveticaNowText,NotoSansTC}.rockstargames-modules-core-headerae9bf34db42d6efdfffcd58c35bf499e [data-game^=gta]:lang(ja_jp){--rsg-font-family-h:HelveticaNowDisplayBold,NotoSansJP}.rockstargames-modules-core-headerae9bf34db42d6efdfffcd58c35bf499e [data-game^=gta]:lang(zh_hans){--rsg-font-family-h:HelveticaNowDisplayBold,NotoSansSC}.rockstargames-modules-core-headerae9bf34db42d6efdfffcd58c35bf499e [data-game^=gta]:lang(zh_tw){--rsg-font-family-h:HelveticaNowDisplayBold,NotoSansTC}.rockstargames-modules-core-headerae9bf34db42d6efdfffcd58c35bf499e [data-game^=gta]:lang(ja_jp){--gta-font-family-std:Chalet,NotoSansJP}.rockstargames-modules-core-headerae9bf34db42d6efdfffcd58c35bf499e [data-game^=gta]:lang(zh_hans){--gta-font-family-std:Chalet,NotoSansSC}.rockstargames-modules-core-headerae9bf34db42d6efdfffcd58c35bf499e [data-game^=gta]:lang(zh_tw){--gta-font-family-std:Chalet,NotoSansTC}.rockstargames-modules-core-headerae9bf34db42d6efdfffcd58c35bf499e [data-game^=gta]:lang(ja_jp){--gta-font-family-h:ChaletComprime,NotoSansJP}.rockstargames-modules-core-headerae9bf34db42d6efdfffcd58c35bf499e [data-game^=gta]:lang(zh_hans){--gta-font-family-h:ChaletComprime,NotoSansSC}.rockstargames-modules-core-headerae9bf34db42d6efdfffcd58c35bf499e [data-game^=gta]:lang(zh_tw){--gta-font-family-h:ChaletComprime,NotoSansTC}.rockstargames-modules-core-headerae9bf34db42d6efdfffcd58c35bf499e [data-game^=gta]:lang(ja_jp){--gta-font-family-badge:Pricedown,NotoSansJP}.rockstargames-modules-core-headerae9bf34db42d6efdfffcd58c35bf499e [data-game^=gta]:lang(zh_hans){--gta-font-family-badge:Pricedown,NotoSansSC}.rockstargames-modules-core-headerae9bf34db42d6efdfffcd58c35bf499e [data-game^=gta]:lang(zh_tw){--gta-font-family-badge:Pricedown,NotoSansTC}.rockstargames-modules-core-headerae9bf34db42d6efdfffcd58c35bf499e [data-game^=gta]:lang(ja_jp){--rdr-font-family-std:HapnaSlabSerif,NotoSansJP}.rockstargames-modules-core-headerae9bf34db42d6efdfffcd58c35bf499e [data-game^=gta]:lang(zh_hans){--rdr-font-family-std:HapnaSlabSerif,NotoSansSC}.rockstargames-modules-core-headerae9bf34db42d6efdfffcd58c35bf499e [data-game^=gta]:lang(zh_tw){--rdr-font-family-std:HapnaSlabSerif,NotoSansTC}.rockstargames-modules-core-headerae9bf34db42d6efdfffcd58c35bf499e [data-game^=gta]:lang(ja_jp){--rdr-font-family-h:RDRLino-Regular,NotoSansJP}.rockstargames-modules-core-headerae9bf34db42d6efdfffcd58c35bf499e [data-game^=gta]:lang(zh_hans){--rdr-font-family-h:RDRLino-Regular,NotoSansSC}.rockstargames-modules-core-headerae9bf34db42d6efdfffcd58c35bf499e [data-game^=gta]:lang(zh_tw){--rdr-font-family-h:RDRLino-Regular,NotoSansTC}.rockstargames-modules-core-headerae9bf34db42d6efdfffcd58c35bf499e [data-game^=gta]:lang(ja_jp){--rdr-font-family-newswire-subtitle:HapnaSlabSerif,NotoSansJP}.rockstargames-modules-core-headerae9bf34db42d6efdfffcd58c35bf499e [data-game^=gta]:lang(zh_hans){--rdr-font-family-newswire-subtitle:HapnaSlabSerif,NotoSansSC}.rockstargames-modules-core-headerae9bf34db42d6efdfffcd58c35bf499e [data-game^=gta]:lang(zh_tw){--rdr-font-family-newswire-subtitle:HapnaSlabSerif,NotoSansTC}.rockstargames-modules-core-headerae9bf34db42d6efdfffcd58c35bf499e [data-game^=gta]:lang(ja_jp){--rdr-area-font:RDRCatalogueBold,NotoSansJP}.rockstargames-modules-core-headerae9bf34db42d6efdfffcd58c35bf499e [data-game^=gta]:lang(zh_hans){--rdr-area-font:RDRCatalogueBold,NotoSansSC}.rockstargames-modules-core-headerae9bf34db42d6efdfffcd58c35bf499e [data-game^=gta]:lang(zh_tw){--rdr-area-font:RDRCatalogueBold,NotoSansTC}.rockstargames-modules-core-headerae9bf34db42d6efdfffcd58c35bf499e [data-game^=gta] h1,.rockstargames-modules-core-headerae9bf34db42d6efdfffcd58c35bf499e [data-game^=gta] h1.rockstargames-modules-core-headerd74f7b16fd048bff6fa85b999865ae4c,.rockstargames-modules-core-headerae9bf34db42d6efdfffcd58c35bf499e [data-game^=gta] h2,.rockstargames-modules-core-headerae9bf34db42d6efdfffcd58c35bf499e [data-game^=gta] h3,.rockstargames-modules-core-headerae9bf34db42d6efdfffcd58c35bf499e [data-game^=gta] h4{font-family:var(--font-family-h,HelveticaNowDisplayBold);letter-spacing:var(--letter-spacing-h,-.025em)}.rockstargames-modules-core-headerae9bf34db42d6efdfffcd58c35bf499e [data-game^=gta] h1,.rockstargames-modules-core-headerae9bf34db42d6efdfffcd58c35bf499e [data-game^=gta] h1.rockstargames-modules-core-headerd74f7b16fd048bff6fa85b999865ae4c{font-weight:var(--font-weight-h1,var(--font-weight-h,700));line-height:var(--line-height-h1,var(--line-height-h,1.1));text-transform:var(--text-transform-h1,var(--text-transform-h,none))}.rockstargames-modules-core-headerae9bf34db42d6efdfffcd58c35bf499e [data-game^=gta] h1.rockstargames-modules-core-headerd74f7b16fd048bff6fa85b999865ae4c{font-size:calc(var(--font-size-8) * var(--header-multiplier))}.rockstargames-modules-core-headerae9bf34db42d6efdfffcd58c35bf499e [data-game^=gta] h1{font-size:calc(var(--font-size-7) * var(--header-multiplier))}.rockstargames-modules-core-headerae9bf34db42d6efdfffcd58c35bf499e [data-game^=gta] h2{font-size:calc(var(--font-size-6) * var(--header-multiplier));font-weight:var(--font-weight-h2,var(--font-weight-h,700));line-height:var(--line-height-h,1.1);text-transform:var(--text-transform-h2,var(--text-transform-h,none))}.rockstargames-modules-core-headerae9bf34db42d6efdfffcd58c35bf499e [data-game^=gta] h3{font-size:calc(var(--font-size-5) * var(--header-multiplier));font-weight:var(--font-weight-h3,var(--font-weight-h,700));line-height:var(--line-height-h,1.1);text-transform:var(--text-transform-h3,var(--text-transform-h,none))}.rockstargames-modules-core-headerae9bf34db42d6efdfffcd58c35bf499e [data-game^=gta] h3[data-context=newswire-subtitle]{font-family:var(--font-family-newswire-subtitle,var(--font-family-h));font-size:calc(var(--font-size-5) * var(--h3-numerator-override-newswire-subtitle, var(--header-multiplier)));font-weight:var(--font-weight-newswire-subtitle,var(--font-weight-h));text-transform:var(--text-transform-newswire-subtitle)}[data-game=rdo] .rockstargames-modules-core-headerae9bf34db42d6efdfffcd58c35bf499e [data-game^=gta] h3,[data-game^=rdr] .rockstargames-modules-core-headerae9bf34db42d6efdfffcd58c35bf499e [data-game^=gta] h3{font-weight:var(--font-weight-h3,var(--font-weight-h,400))}.rockstargames-modules-core-headerae9bf34db42d6efdfffcd58c35bf499e [data-game^=gta] h4,.rockstargames-modules-core-headerae9bf34db42d6efdfffcd58c35bf499e [data-game^=gta] h5,.rockstargames-modules-core-headerae9bf34db42d6efdfffcd58c35bf499e [data-game^=gta] h6{font-size:calc(var(--font-size-4) * var(--header-multiplier));line-height:var(--line-height-h,1.1)}.rockstargames-modules-core-headerae9bf34db42d6efdfffcd58c35bf499e [data-game^=gta] h1,.rockstargames-modules-core-headerae9bf34db42d6efdfffcd58c35bf499e [data-game^=gta] h1.rockstargames-modules-core-headerd74f7b16fd048bff6fa85b999865ae4c{color:var(--color-h-dynamic,var(--color-h1,var(--color-h,inherit)))}.rockstargames-modules-core-headerae9bf34db42d6efdfffcd58c35bf499e [data-game^=gta] h2{color:var(--color-h-dynamic,var(--color-h2,var(--color-h,inherit)))}.rockstargames-modules-core-headerae9bf34db42d6efdfffcd58c35bf499e [data-game^=gta] h3{color:var(--color-h-dynamic,var(--color-h3,var(--color-h,inherit)))}.rockstargames-modules-core-headerae9bf34db42d6efdfffcd58c35bf499e [data-game^=gta] h3[data-context=newswire-subtitle]{color:var(--color-subtitle-dynamic,var(--color-h-dynamic,var(--color-h3,var(--color-h,inherit))))}.rockstargames-modules-core-headerae9bf34db42d6efdfffcd58c35bf499e [data-game^=gta] h4,.rockstargames-modules-core-headerae9bf34db42d6efdfffcd58c35bf499e [data-game^=gta] h5,.rockstargames-modules-core-headerae9bf34db42d6efdfffcd58c35bf499e [data-game^=gta] h6{color:var(--color-h-dynamic,var(--color-h,inherit))}.rockstargames-modules-core-headerae9bf34db42d6efdfffcd58c35bf499e [data-game^=gta] [template=community]{--time-color:var(--body-color,#2d2d2d);--breadcrumb-separator-filter-invert:invert(0)}.rockstargames-modules-core-headerae9bf34db42d6efdfffcd58c35bf499e [data-game^=gta] [template=community] main{color:var(--color-h,#161616)}.rockstargames-modules-core-headerae9bf34db42d6efdfffcd58c35bf499e [data-game^=gta] [template=community] p{color:var(--body-color,#2d2d2d)}.rockstargames-modules-core-headerae9bf34db42d6efdfffcd58c35bf499e [data-game^=gta] .rockstargames-modules-core-headerd9f1030abbf43b4dca938748cd2971f6{font-family:var(--gta-font-family-badge)}.rockstargames-modules-core-headerae9bf34db42d6efdfffcd58c35bf499e :lang(pl_pl) [data-game^=gta]{--font-family-h:ChaletComprime,NeueHelveticaW05;--font-family-newswire-subtitle:ChaletComprime,NeueHelveticaW05;--badge-font:Pricedown,NeueHelveticaW05}.rockstargames-modules-core-headerae9bf34db42d6efdfffcd58c35bf499e :lang(pl_pl) [data-context=newswire-article] h1{--font-family-h:NeueHelveticaPaneuropean}.rockstargames-modules-core-headerae9bf34db42d6efdfffcd58c35bf499e :lang(ru_ru) [data-game^=gta]{--font-family-h:NeueHelveticaW05;--font-family-newswire-subtitle:NeueHelveticaW05;--badge-font:Pricedown,NeueHelveticaW05}.rockstargames-modules-core-headerae9bf34db42d6efdfffcd58c35bf499e :lang(ru_ru) [data-context=newswire-article] h1{--font-family-h:NeueHelveticaW05}.rockstargames-modules-core-headerae9bf34db42d6efdfffcd58c35bf499e :lang(zh_hans) [data-game^=gta]{--font-family-h:NotoSansSC;--font-family-newswire-subtitle:NotoSansSC;--font-family-std:NotoSansSC;--badge-font:Pricedown,NotoSansSC}.rockstargames-modules-core-headerae9bf34db42d6efdfffcd58c35bf499e :lang(zh_hant) [data-game^=gta]{--font-family-h:NotoSansTC;--font-family-newswire-subtitle:NotoSansTC;--font-family-std:NotoSansTC;--badge-font:Pricedown,NotoSansTC}.rockstargames-modules-core-headerae9bf34db42d6efdfffcd58c35bf499e :lang(ja_jp) [data-game^=gta]{--font-family-h:NotoSansJP;--font-family-newswire-subtitle:NotoSansJP;--font-family-std:NotoSansJP;--badge-font:Pricedown,NotoSansJP}.rockstargames-modules-core-headerae9bf34db42d6efdfffcd58c35bf499e :lang(ja_jp) [data-context=newswire-article] h1{--font-family-h:NotoSansJP}.rockstargames-modules-core-headerae9bf34db42d6efdfffcd58c35bf499e :lang(ko_kr) [data-game^=gta]{--font-family-h:NotoSansKR;--font-family-newswire-subtitle:NotoSansKR;--font-family-std:NotoSansKR;--badge-font:Pricedown,NotoSansKR}.rockstargames-modules-core-headerae9bf34db42d6efdfffcd58c35bf499e [data-game=rdo],.rockstargames-modules-core-headerae9bf34db42d6efdfffcd58c35bf499e [data-game^=rdr]{--font-family-std:var(--rdr-font-family-std);--font-family-h:var(--rdr-font-family-h);--font-family-newswire-subtitle:var(--rdr-font-family-newswire-subtitle);--area-font:var(--rdr-area-font);--font-weight-h:400;--font-weight-h1:400;--font-weight-h3:400;--font-weight-newswire-subtitle:700;--h3-numerator-override-newswire-subtitle:1;--letter-spacing-h:0;--line-height-h:1.2;--letter-spacing-std:0;--text-transform-newswire-subtitle:initial;--color-h:#c00;--color-h3:#fff;--color-h4:#fff;--body-color:#e8e8e8;--text-transform-h:uppercase;--tag-color:#e8e8e8;--rsg-font-family-std:HelveticaNowText;--rsg-font-family-h:HelveticaNowDisplayBold;--gta-font-family-std:Chalet;--gta-font-family-h:ChaletComprime;--gta-font-family-badge:Pricedown;--rdr-font-family-std:HapnaSlabSerif;--rdr-font-family-h:RDRLino-Regular;--rdr-font-family-newswire-subtitle:HapnaSlabSerif;--rdr-area-font:RDRCatalogueBold;--header-multiplier:var(--header-numerator,var(--root-font-size)) /var(--root-font-size);-webkit-font-smoothing:antialiased;background-color:var(--background-color,transparent);color:#e8e8e8;font-family:var(--font-family-std,HelveticaNowText);font-size:calc(var(--root-font-size) * 1px);font-weight:var(--font-weight-std,400);letter-spacing:var(--letter-spacing-std,-.025em);line-height:var(--line-height-std,1.6)}@media (min-width:0px){.rockstargames-modules-core-headerae9bf34db42d6efdfffcd58c35bf499e [data-game=rdo],.rockstargames-modules-core-headerae9bf34db42d6efdfffcd58c35bf499e [data-game^=rdr]{--header-numerator:15}}@media (min-width:768px){.rockstargames-modules-core-headerae9bf34db42d6efdfffcd58c35bf499e [data-game=rdo],.rockstargames-modules-core-headerae9bf34db42d6efdfffcd58c35bf499e [data-game^=rdr]{--header-numerator:16.88}}@media (min-width:1024px){.rockstargames-modules-core-headerae9bf34db42d6efdfffcd58c35bf499e [data-game=rdo],.rockstargames-modules-core-headerae9bf34db42d6efdfffcd58c35bf499e [data-game^=rdr]{--header-numerator:18.75}}@media (min-width:1920px){.rockstargames-modules-core-headerae9bf34db42d6efdfffcd58c35bf499e [data-game=rdo],.rockstargames-modules-core-headerae9bf34db42d6efdfffcd58c35bf499e [data-game^=rdr]{--header-numerator:21.09}}.rockstargames-modules-core-headerae9bf34db42d6efdfffcd58c35bf499e [data-game=rdo]:lang(ja_jp),.rockstargames-modules-core-headerae9bf34db42d6efdfffcd58c35bf499e [data-game^=rdr]:lang(ja_jp){--rsg-font-family-std:HelveticaNowText,NotoSansJP}.rockstargames-modules-core-headerae9bf34db42d6efdfffcd58c35bf499e [data-game=rdo]:lang(zh_hans),.rockstargames-modules-core-headerae9bf34db42d6efdfffcd58c35bf499e [data-game^=rdr]:lang(zh_hans){--rsg-font-family-std:HelveticaNowText,NotoSansSC}.rockstargames-modules-core-headerae9bf34db42d6efdfffcd58c35bf499e [data-game=rdo]:lang(zh_tw),.rockstargames-modules-core-headerae9bf34db42d6efdfffcd58c35bf499e [data-game^=rdr]:lang(zh_tw){--rsg-font-family-std:HelveticaNowText,NotoSansTC}.rockstargames-modules-core-headerae9bf34db42d6efdfffcd58c35bf499e [data-game=rdo]:lang(ja_jp),.rockstargames-modules-core-headerae9bf34db42d6efdfffcd58c35bf499e [data-game^=rdr]:lang(ja_jp){--rsg-font-family-h:HelveticaNowDisplayBold,NotoSansJP}.rockstargames-modules-core-headerae9bf34db42d6efdfffcd58c35bf499e [data-game=rdo]:lang(zh_hans),.rockstargames-modules-core-headerae9bf34db42d6efdfffcd58c35bf499e [data-game^=rdr]:lang(zh_hans){--rsg-font-family-h:HelveticaNowDisplayBold,NotoSansSC}.rockstargames-modules-core-headerae9bf34db42d6efdfffcd58c35bf499e [data-game=rdo]:lang(zh_tw),.rockstargames-modules-core-headerae9bf34db42d6efdfffcd58c35bf499e [data-game^=rdr]:lang(zh_tw){--rsg-font-family-h:HelveticaNowDisplayBold,NotoSansTC}.rockstargames-modules-core-headerae9bf34db42d6efdfffcd58c35bf499e [data-game=rdo]:lang(ja_jp),.rockstargames-modules-core-headerae9bf34db42d6efdfffcd58c35bf499e [data-game^=rdr]:lang(ja_jp){--gta-font-family-std:Chalet,NotoSansJP}.rockstargames-modules-core-headerae9bf34db42d6efdfffcd58c35bf499e [data-game=rdo]:lang(zh_hans),.rockstargames-modules-core-headerae9bf34db42d6efdfffcd58c35bf499e [data-game^=rdr]:lang(zh_hans){--gta-font-family-std:Chalet,NotoSansSC}.rockstargames-modules-core-headerae9bf34db42d6efdfffcd58c35bf499e [data-game=rdo]:lang(zh_tw),.rockstargames-modules-core-headerae9bf34db42d6efdfffcd58c35bf499e [data-game^=rdr]:lang(zh_tw){--gta-font-family-std:Chalet,NotoSansTC}.rockstargames-modules-core-headerae9bf34db42d6efdfffcd58c35bf499e [data-game=rdo]:lang(ja_jp),.rockstargames-modules-core-headerae9bf34db42d6efdfffcd58c35bf499e [data-game^=rdr]:lang(ja_jp){--gta-font-family-h:ChaletComprime,NotoSansJP}.rockstargames-modules-core-headerae9bf34db42d6efdfffcd58c35bf499e [data-game=rdo]:lang(zh_hans),.rockstargames-modules-core-headerae9bf34db42d6efdfffcd58c35bf499e [data-game^=rdr]:lang(zh_hans){--gta-font-family-h:ChaletComprime,NotoSansSC}.rockstargames-modules-core-headerae9bf34db42d6efdfffcd58c35bf499e [data-game=rdo]:lang(zh_tw),.rockstargames-modules-core-headerae9bf34db42d6efdfffcd58c35bf499e [data-game^=rdr]:lang(zh_tw){--gta-font-family-h:ChaletComprime,NotoSansTC}.rockstargames-modules-core-headerae9bf34db42d6efdfffcd58c35bf499e [data-game=rdo]:lang(ja_jp),.rockstargames-modules-core-headerae9bf34db42d6efdfffcd58c35bf499e [data-game^=rdr]:lang(ja_jp){--gta-font-family-badge:Pricedown,NotoSansJP}.rockstargames-modules-core-headerae9bf34db42d6efdfffcd58c35bf499e [data-game=rdo]:lang(zh_hans),.rockstargames-modules-core-headerae9bf34db42d6efdfffcd58c35bf499e [data-game^=rdr]:lang(zh_hans){--gta-font-family-badge:Pricedown,NotoSansSC}.rockstargames-modules-core-headerae9bf34db42d6efdfffcd58c35bf499e [data-game=rdo]:lang(zh_tw),.rockstargames-modules-core-headerae9bf34db42d6efdfffcd58c35bf499e [data-game^=rdr]:lang(zh_tw){--gta-font-family-badge:Pricedown,NotoSansTC}.rockstargames-modules-core-headerae9bf34db42d6efdfffcd58c35bf499e [data-game=rdo]:lang(ja_jp),.rockstargames-modules-core-headerae9bf34db42d6efdfffcd58c35bf499e [data-game^=rdr]:lang(ja_jp){--rdr-font-family-std:HapnaSlabSerif,NotoSansJP}.rockstargames-modules-core-headerae9bf34db42d6efdfffcd58c35bf499e [data-game=rdo]:lang(zh_hans),.rockstargames-modules-core-headerae9bf34db42d6efdfffcd58c35bf499e [data-game^=rdr]:lang(zh_hans){--rdr-font-family-std:HapnaSlabSerif,NotoSansSC}.rockstargames-modules-core-headerae9bf34db42d6efdfffcd58c35bf499e [data-game=rdo]:lang(zh_tw),.rockstargames-modules-core-headerae9bf34db42d6efdfffcd58c35bf499e [data-game^=rdr]:lang(zh_tw){--rdr-font-family-std:HapnaSlabSerif,NotoSansTC}.rockstargames-modules-core-headerae9bf34db42d6efdfffcd58c35bf499e [data-game=rdo]:lang(ja_jp),.rockstargames-modules-core-headerae9bf34db42d6efdfffcd58c35bf499e [data-game^=rdr]:lang(ja_jp){--rdr-font-family-h:RDRLino-Regular,NotoSansJP}.rockstargames-modules-core-headerae9bf34db42d6efdfffcd58c35bf499e [data-game=rdo]:lang(zh_hans),.rockstargames-modules-core-headerae9bf34db42d6efdfffcd58c35bf499e [data-game^=rdr]:lang(zh_hans){--rdr-font-family-h:RDRLino-Regular,NotoSansSC}.rockstargames-modules-core-headerae9bf34db42d6efdfffcd58c35bf499e [data-game=rdo]:lang(zh_tw),.rockstargames-modules-core-headerae9bf34db42d6efdfffcd58c35bf499e [data-game^=rdr]:lang(zh_tw){--rdr-font-family-h:RDRLino-Regular,NotoSansTC}.rockstargames-modules-core-headerae9bf34db42d6efdfffcd58c35bf499e [data-game=rdo]:lang(ja_jp),.rockstargames-modules-core-headerae9bf34db42d6efdfffcd58c35bf499e [data-game^=rdr]:lang(ja_jp){--rdr-font-family-newswire-subtitle:HapnaSlabSerif,NotoSansJP}.rockstargames-modules-core-headerae9bf34db42d6efdfffcd58c35bf499e [data-game=rdo]:lang(zh_hans),.rockstargames-modules-core-headerae9bf34db42d6efdfffcd58c35bf499e [data-game^=rdr]:lang(zh_hans){--rdr-font-family-newswire-subtitle:HapnaSlabSerif,NotoSansSC}.rockstargames-modules-core-headerae9bf34db42d6efdfffcd58c35bf499e [data-game=rdo]:lang(zh_tw),.rockstargames-modules-core-headerae9bf34db42d6efdfffcd58c35bf499e [data-game^=rdr]:lang(zh_tw){--rdr-font-family-newswire-subtitle:HapnaSlabSerif,NotoSansTC}.rockstargames-modules-core-headerae9bf34db42d6efdfffcd58c35bf499e [data-game=rdo]:lang(ja_jp),.rockstargames-modules-core-headerae9bf34db42d6efdfffcd58c35bf499e [data-game^=rdr]:lang(ja_jp){--rdr-area-font:RDRCatalogueBold,NotoSansJP}.rockstargames-modules-core-headerae9bf34db42d6efdfffcd58c35bf499e [data-game=rdo]:lang(zh_hans),.rockstargames-modules-core-headerae9bf34db42d6efdfffcd58c35bf499e [data-game^=rdr]:lang(zh_hans){--rdr-area-font:RDRCatalogueBold,NotoSansSC}.rockstargames-modules-core-headerae9bf34db42d6efdfffcd58c35bf499e [data-game=rdo]:lang(zh_tw),.rockstargames-modules-core-headerae9bf34db42d6efdfffcd58c35bf499e [data-game^=rdr]:lang(zh_tw){--rdr-area-font:RDRCatalogueBold,NotoSansTC}.rockstargames-modules-core-headerae9bf34db42d6efdfffcd58c35bf499e [data-game=rdo] h1,.rockstargames-modules-core-headerae9bf34db42d6efdfffcd58c35bf499e [data-game=rdo] h1.rockstargames-modules-core-headerd74f7b16fd048bff6fa85b999865ae4c,.rockstargames-modules-core-headerae9bf34db42d6efdfffcd58c35bf499e [data-game=rdo] h2,.rockstargames-modules-core-headerae9bf34db42d6efdfffcd58c35bf499e [data-game=rdo] h3,.rockstargames-modules-core-headerae9bf34db42d6efdfffcd58c35bf499e [data-game=rdo] h4,.rockstargames-modules-core-headerae9bf34db42d6efdfffcd58c35bf499e [data-game^=rdr] h1,.rockstargames-modules-core-headerae9bf34db42d6efdfffcd58c35bf499e [data-game^=rdr] h1.rockstargames-modules-core-headerd74f7b16fd048bff6fa85b999865ae4c,.rockstargames-modules-core-headerae9bf34db42d6efdfffcd58c35bf499e [data-game^=rdr] h2,.rockstargames-modules-core-headerae9bf34db42d6efdfffcd58c35bf499e [data-game^=rdr] h3,.rockstargames-modules-core-headerae9bf34db42d6efdfffcd58c35bf499e [data-game^=rdr] h4{font-family:var(--font-family-h,HelveticaNowDisplayBold);letter-spacing:var(--letter-spacing-h,-.025em)}.rockstargames-modules-core-headerae9bf34db42d6efdfffcd58c35bf499e [data-game=rdo] h1,.rockstargames-modules-core-headerae9bf34db42d6efdfffcd58c35bf499e [data-game=rdo] h1.rockstargames-modules-core-headerd74f7b16fd048bff6fa85b999865ae4c,.rockstargames-modules-core-headerae9bf34db42d6efdfffcd58c35bf499e [data-game^=rdr] h1,.rockstargames-modules-core-headerae9bf34db42d6efdfffcd58c35bf499e [data-game^=rdr] h1.rockstargames-modules-core-headerd74f7b16fd048bff6fa85b999865ae4c{font-weight:var(--font-weight-h1,var(--font-weight-h,700));line-height:var(--line-height-h1,var(--line-height-h,1.1));text-transform:var(--text-transform-h1,var(--text-transform-h,none))}.rockstargames-modules-core-headerae9bf34db42d6efdfffcd58c35bf499e [data-game=rdo] h1.rockstargames-modules-core-headerd74f7b16fd048bff6fa85b999865ae4c,.rockstargames-modules-core-headerae9bf34db42d6efdfffcd58c35bf499e [data-game^=rdr] h1.rockstargames-modules-core-headerd74f7b16fd048bff6fa85b999865ae4c{font-size:calc(var(--font-size-8) * var(--header-multiplier))}.rockstargames-modules-core-headerae9bf34db42d6efdfffcd58c35bf499e [data-game=rdo] h1,.rockstargames-modules-core-headerae9bf34db42d6efdfffcd58c35bf499e [data-game^=rdr] h1{font-size:calc(var(--font-size-7) * var(--header-multiplier))}.rockstargames-modules-core-headerae9bf34db42d6efdfffcd58c35bf499e [data-game=rdo] h2,.rockstargames-modules-core-headerae9bf34db42d6efdfffcd58c35bf499e [data-game^=rdr] h2{font-size:calc(var(--font-size-6) * var(--header-multiplier));font-weight:var(--font-weight-h2,var(--font-weight-h,700));line-height:var(--line-height-h,1.1);text-transform:var(--text-transform-h2,var(--text-transform-h,none))}.rockstargames-modules-core-headerae9bf34db42d6efdfffcd58c35bf499e [data-game=rdo] h3,.rockstargames-modules-core-headerae9bf34db42d6efdfffcd58c35bf499e [data-game^=rdr] h3{font-size:calc(var(--font-size-5) * var(--header-multiplier));font-weight:var(--font-weight-h3,var(--font-weight-h,700));line-height:var(--line-height-h,1.1);text-transform:var(--text-transform-h3,var(--text-transform-h,none))}.rockstargames-modules-core-headerae9bf34db42d6efdfffcd58c35bf499e [data-game=rdo] h3[data-context=newswire-subtitle],.rockstargames-modules-core-headerae9bf34db42d6efdfffcd58c35bf499e [data-game^=rdr] h3[data-context=newswire-subtitle]{font-family:var(--font-family-newswire-subtitle,var(--font-family-h));font-size:calc(var(--font-size-5) * var(--h3-numerator-override-newswire-subtitle, var(--header-multiplier)));font-weight:var(--font-weight-newswire-subtitle,var(--font-weight-h));text-transform:var(--text-transform-newswire-subtitle)}[data-game=rdo] .rockstargames-modules-core-headerae9bf34db42d6efdfffcd58c35bf499e [data-game=rdo] h3,[data-game=rdo] .rockstargames-modules-core-headerae9bf34db42d6efdfffcd58c35bf499e [data-game^=rdr] h3,[data-game^=rdr] .rockstargames-modules-core-headerae9bf34db42d6efdfffcd58c35bf499e [data-game=rdo] h3,[data-game^=rdr] .rockstargames-modules-core-headerae9bf34db42d6efdfffcd58c35bf499e [data-game^=rdr] h3{font-weight:var(--font-weight-h3,var(--font-weight-h,400))}.rockstargames-modules-core-headerae9bf34db42d6efdfffcd58c35bf499e [data-game=rdo] h4,.rockstargames-modules-core-headerae9bf34db42d6efdfffcd58c35bf499e [data-game=rdo] h5,.rockstargames-modules-core-headerae9bf34db42d6efdfffcd58c35bf499e [data-game=rdo] h6,.rockstargames-modules-core-headerae9bf34db42d6efdfffcd58c35bf499e [data-game^=rdr] h4,.rockstargames-modules-core-headerae9bf34db42d6efdfffcd58c35bf499e [data-game^=rdr] h5,.rockstargames-modules-core-headerae9bf34db42d6efdfffcd58c35bf499e [data-game^=rdr] h6{font-size:calc(var(--font-size-4) * var(--header-multiplier));line-height:var(--line-height-h,1.1)}.rockstargames-modules-core-headerae9bf34db42d6efdfffcd58c35bf499e [data-game=rdo] h1,.rockstargames-modules-core-headerae9bf34db42d6efdfffcd58c35bf499e [data-game=rdo] h1.rockstargames-modules-core-headerd74f7b16fd048bff6fa85b999865ae4c,.rockstargames-modules-core-headerae9bf34db42d6efdfffcd58c35bf499e [data-game^=rdr] h1,.rockstargames-modules-core-headerae9bf34db42d6efdfffcd58c35bf499e [data-game^=rdr] h1.rockstargames-modules-core-headerd74f7b16fd048bff6fa85b999865ae4c{color:var(--color-h-dynamic,var(--color-h1,var(--color-h,inherit)))}.rockstargames-modules-core-headerae9bf34db42d6efdfffcd58c35bf499e [data-game=rdo] h2,.rockstargames-modules-core-headerae9bf34db42d6efdfffcd58c35bf499e [data-game^=rdr] h2{color:var(--color-h-dynamic,var(--color-h2,var(--color-h,inherit)))}.rockstargames-modules-core-headerae9bf34db42d6efdfffcd58c35bf499e [data-game=rdo] h3,.rockstargames-modules-core-headerae9bf34db42d6efdfffcd58c35bf499e [data-game^=rdr] h3{color:var(--color-h-dynamic,var(--color-h3,var(--color-h,inherit)))}.rockstargames-modules-core-headerae9bf34db42d6efdfffcd58c35bf499e [data-game=rdo] h3[data-context=newswire-subtitle],.rockstargames-modules-core-headerae9bf34db42d6efdfffcd58c35bf499e [data-game^=rdr] h3[data-context=newswire-subtitle]{color:var(--color-subtitle-dynamic,var(--color-h-dynamic,var(--color-h3,var(--color-h,inherit))))}.rockstargames-modules-core-headerae9bf34db42d6efdfffcd58c35bf499e [data-game=rdo] h4,.rockstargames-modules-core-headerae9bf34db42d6efdfffcd58c35bf499e [data-game=rdo] h5,.rockstargames-modules-core-headerae9bf34db42d6efdfffcd58c35bf499e [data-game=rdo] h6,.rockstargames-modules-core-headerae9bf34db42d6efdfffcd58c35bf499e [data-game^=rdr] h4,.rockstargames-modules-core-headerae9bf34db42d6efdfffcd58c35bf499e [data-game^=rdr] h5,.rockstargames-modules-core-headerae9bf34db42d6efdfffcd58c35bf499e [data-game^=rdr] h6{color:var(--color-h-dynamic,var(--color-h,inherit))}.rockstargames-modules-core-headerae9bf34db42d6efdfffcd58c35bf499e [data-game=rdo] [template=community],.rockstargames-modules-core-headerae9bf34db42d6efdfffcd58c35bf499e [data-game^=rdr] [template=community]{--time-color:var(--body-color,#2d2d2d);--breadcrumb-separator-filter-invert:invert(0)}.rockstargames-modules-core-headerae9bf34db42d6efdfffcd58c35bf499e [data-game=rdo] [template=community] main,.rockstargames-modules-core-headerae9bf34db42d6efdfffcd58c35bf499e [data-game^=rdr] [template=community] main{color:var(--color-h,#161616)}.rockstargames-modules-core-headerae9bf34db42d6efdfffcd58c35bf499e [data-game=rdo] [template=community] p,.rockstargames-modules-core-headerae9bf34db42d6efdfffcd58c35bf499e [data-game^=rdr] [template=community] p{color:var(--body-color,#2d2d2d)}.rockstargames-modules-core-headerae9bf34db42d6efdfffcd58c35bf499e :lang(pl_pl) [data-game=rdo],.rockstargames-modules-core-headerae9bf34db42d6efdfffcd58c35bf499e :lang(pl_pl) [data-game^=rdr]{--font-family-h:RDRLino-Regular;--font-family-newswire-subtitle:HapnaSlabSerif;--font-family-std:HapnaSlabSerif;--badge-font:RDRLino-Regular}.rockstargames-modules-core-headerae9bf34db42d6efdfffcd58c35bf499e :lang(zh_hans) [data-game=rdo],.rockstargames-modules-core-headerae9bf34db42d6efdfffcd58c35bf499e :lang(zh_hans) [data-game^=rdr]{--font-family-h:NotoSerifSC;--font-family-newswire-subtitle:NotoSansSC,;--font-family-std:NotoSansSC;--area-font:NotoSansSC;--badge-font:RDRLino-Regular,NotoSerifSC}.rockstargames-modules-core-headerae9bf34db42d6efdfffcd58c35bf499e :lang(zh_hant) [data-game=rdo],.rockstargames-modules-core-headerae9bf34db42d6efdfffcd58c35bf499e :lang(zh_hant) [data-game^=rdr]{--font-family-h:NotoSerifTC;--font-family-newswire-subtitle:NotoSansTC;--font-family-std:NotoSansTC;--area-font:NotoSansTC;--badge-font:RDRLino-Regular,NotoSerifTC}.rockstargames-modules-core-headerae9bf34db42d6efdfffcd58c35bf499e :lang(ja_jp) [data-game=rdo],.rockstargames-modules-core-headerae9bf34db42d6efdfffcd58c35bf499e :lang(ja_jp) [data-game^=rdr]{--font-family-h:NotoSerifJP;--font-family-newswire-subtitle:NotoSansJP;--font-family-std:NotoSansJP;--area-font:NotoSansJP;--badge-font:RDRLino-Regular,NotoSerifTC}.rockstargames-modules-core-headerae9bf34db42d6efdfffcd58c35bf499e :lang(ko_kr) [data-game=rdo],.rockstargames-modules-core-headerae9bf34db42d6efdfffcd58c35bf499e :lang(ko_kr) [data-game^=rdr]{--font-family-h:NotoSerifKR;--font-family-newswire-subtitle:NotoSansKR;--font-family-std:NotoSansKR;--area-font:NotoSansKR;--badge-font:RDRLino-Regular,NotoSerifKR}@font-face{font-family:HelveticaNowDisplayBold;font-style:normal;font-weight:700;src:url(${Fe}) format("woff")}@font-face{font-family:HelveticaNowText;font-style:normal;font-weight:400;src:url(${Le}) format("woff")}.rockstargames-modules-core-headerae9bf34db42d6efdfffcd58c35bf499e :root{--font-family-h:HelveticaNowDisplayBold;--font-family-body:HelveticaNowText}.rockstargames-modules-core-headerae9bf34db42d6efdfffcd58c35bf499e :lang(pl-PL),.rockstargames-modules-core-headerae9bf34db42d6efdfffcd58c35bf499e :lang(pl_pl){--font-family-h:NeueHelveticaPaneuropean;--font-family-std:NeueHelveticaPaneuropean}.rockstargames-modules-core-headerae9bf34db42d6efdfffcd58c35bf499e :lang(ru-RU),.rockstargames-modules-core-headerae9bf34db42d6efdfffcd58c35bf499e :lang(ru_ru){--font-family-h:NeueHelveticaPaneuropean;--font-family-body:NeueHelveticaPaneuropean}.rockstargames-modules-core-headerae9bf34db42d6efdfffcd58c35bf499e [data-type-lang=pl],.rockstargames-modules-core-headerae9bf34db42d6efdfffcd58c35bf499e [data-type-lang=ru]{font-family:NeueHelveticaPaneuropean!important}.rockstargames-modules-core-headerae9bf34db42d6efdfffcd58c35bf499e :lang(zh-CN),.rockstargames-modules-core-headerae9bf34db42d6efdfffcd58c35bf499e :lang(zh_hans){--font-family-h:ChaletComprime,NotoSansSC;--font-family-body:NotoSansSC}.rockstargames-modules-core-headerae9bf34db42d6efdfffcd58c35bf499e [data-type-lang=zh]{font-family:ChaletComprime,NotoSansSC!important}.rockstargames-modules-core-headerae9bf34db42d6efdfffcd58c35bf499e :lang(zh-TW),.rockstargames-modules-core-headerae9bf34db42d6efdfffcd58c35bf499e :lang(zh_tw){--font-family-h:ChaletComprime,NotoSansTC;--font-family-body:NotoSansTC}.rockstargames-modules-core-headerae9bf34db42d6efdfffcd58c35bf499e [data-type-lang=tw]{font-family:ChaletComprime,NotoSansTC!important}.rockstargames-modules-core-headerae9bf34db42d6efdfffcd58c35bf499e :lang(ja-JP),.rockstargames-modules-core-headerae9bf34db42d6efdfffcd58c35bf499e :lang(ja_jp){--font-family-h:HelveticaNowDisplayBold,NotoSansJP;--font-family-body:HelveticaNowText,NotoSansJP}.rockstargames-modules-core-headerae9bf34db42d6efdfffcd58c35bf499e [data-type-lang=jp]{font-family:HelveticaNowText,NotoSansJP!important}.rockstargames-modules-core-headerae9bf34db42d6efdfffcd58c35bf499e :lang(ko-KR),.rockstargames-modules-core-headerae9bf34db42d6efdfffcd58c35bf499e :lang(ko_kr){--font-family-h:ChaletComprime,NotoSansKR;--font-family-body:NotoSansKR}.rockstargames-modules-core-headerae9bf34db42d6efdfffcd58c35bf499e [data-type-lang=kr]{font-family:ChaletComprime,NotoSansKR!important}@media (min-width:2560px){.rockstargames-modules-core-headerae9bf34db42d6efdfffcd58c35bf499e{--max-width-md:1440px}}@media (max-width:767px){.rockstargames-modules-core-headerae9bf34db42d6efdfffcd58c35bf499e{--spacing-lg:2rem;--spacing-xl:4rem}}@media (min-width:0px){.rockstargames-modules-core-headerae9bf34db42d6efdfffcd58c35bf499e{--base-rem-size:16px}}@media (min-width:768px){.rockstargames-modules-core-headerae9bf34db42d6efdfffcd58c35bf499e{--base-rem-size:18px}}@media (min-width:1024px){.rockstargames-modules-core-headerae9bf34db42d6efdfffcd58c35bf499e{--base-rem-size:20px}}@media (min-width:1920px){.rockstargames-modules-core-headerae9bf34db42d6efdfffcd58c35bf499e{--base-rem-size:22px}}@media (max-width:1023px){.rockstargames-modules-core-headerae9bf34db42d6efdfffcd58c35bf499e{--nav-icon-size:var(--rem-125);--nav-link-size:calc(var(--base-rem-size) * 1.25);--sub-nav-indent:var(--spacing-md)}}.rockstargames-modules-core-headerde436e3db259eb0f31d67c3597d8b8fd{height:var(--global-navigation-height,0)}@media screen and (min-width:1024px){.rockstargames-modules-core-headerf5becd5edc3ccc807f80e476aaf0a923{height:calc(var(--global-navigation-height) + 140px)}}.rockstargames-modules-core-headercdf77b768c87c4f69cdc9f249e664436{left:0;position:fixed;right:0;top:var(--global-navigation-spacer-padding,0);width:100%;z-index:99}.rockstargames-modules-core-headerb6b45ba1e342fd31738d08621f64dcf4{-webkit-backdrop-filter:blur(25px);backdrop-filter:blur(25px);background:var(--global-navigation-background);border-bottom:1px solid var(--global-navigation-border-color);color:#fff;display:grid;grid-template-areas:"home menu actions";grid-template-columns:1fr auto 1fr;height:var(--global-navigation-height);opacity:1;padding:0 var(--rem-4);width:100%}@media (max-width:1024px){.rockstargames-modules-core-headerb6b45ba1e342fd31738d08621f64dcf4{grid-template-areas:"menu home actions"}}.rockstargames-modules-core-headera5621119fecf77af162314e4f58e3bf4{flex-grow:1;overflow:hidden}.rockstargames-modules-core-headerb0b5cfbe2c5745a3dae3bc5d2a659d0c{flex:1}.rockstargames-modules-core-headere3074d7d0504de5ecbc3f71e8ff47931{align-items:center;display:flex;flex:1}.rockstargames-modules-core-headera0ac1e76ac3363eae9fc0b8dc016c4f6{opacity:0;pointer-events:none;position:absolute;top:100%;transform:translateY(-10px);transition:opacity .35s ease-out,transform 0s ease .5s}.rockstargames-modules-core-headera0ac1e76ac3363eae9fc0b8dc016c4f6[data-qa-opened=true]{opacity:1;pointer-events:auto;transform:translateY(0);transition:opacity .15s ease,transform .15s ease}`, "", {
        version: 3,
        sources: ["webpack://./../../buildtime/legacy-design-system/less/gen9-mixins.less", "webpack://./compositional/components/Root/index.less", "webpack://./../../buildtime/legacy-design-system/less/mixins.less", "webpack://./../../buildtime/legacy-design-system/less/typography.less", "webpack://./../../buildtime/legacy-design-system/less/gen9-vars.less", "webpack://./compositional/components/Root/globalNavVars.less", "webpack://./compositional/components/Root/typography.less"],
        names: [],
        mappings: "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OA,kCAAA,CA0FA,oDAAA,CA8VA,aAAA,CA7bA,mDAAA,CAIA,2CAAA,CAHA,sCAAA,CACA,gDAAA,CACA,sCD4vBJ,CCx2BI,uBAAA,oFC0HK,uBFkvBP,CACF,CC31BI,yBAAA,oFCyGK,uBFsvBP,CACF,CC90BI,0BAAA,oFCwFK,qBF0vBP,CACF,CCj0BI,0BAAA,oFCuEK,wBF8vBP,CACF,CC5yBI,gGACI,iDD8yBR,CC5yBI,kGACI,iDD8yBR,CC5yBI,gGACI,iDD8yBR,CCrzBI,gGACI,sDDuzBR,CCrzBI,kGACI,sDDuzBR,CCrzBI,gGACI,sDDuzBR,CC9zBI,gGACI,uCDg0BR,CC9zBI,kGACI,uCDg0BR,CC9zBI,gGACI,uCDg0BR,CCv0BI,gGACI,6CDy0BR,CCv0BI,kGACI,6CDy0BR,CCv0BI,gGACI,6CDy0BR,CCh1BI,gGACI,4CDk1BR,CCh1BI,kGACI,4CDk1BR,CCh1BI,gGACI,4CDk1BR,CCz1BI,gGACI,+CD21BR,CCz1BI,kGACI,+CD21BR,CCz1BI,gGACI,+CD21BR,CCl2BI,gGACI,8CDo2BR,CCl2BI,kGACI,8CDo2BR,CCl2BI,gGACI,8CDo2BR,CC32BI,gGACI,6DD62BR,CC32BI,kGACI,6DD62BR,CC32BI,gGACI,6DD62BR,CCp3BI,gGACI,2CDs3BR,CCp3BI,kGACI,2CDs3BR,CCp3BI,gGACI,2CDs3BR,CA/+BA,qfCuJQ,wDAAA,CACA,8CD+1BR,CAv/BA,gPC4JQ,0DAAA,CAEA,0DAAA,CADA,oEDg2BR,CA7/BA,yJCkKQ,6DD81BR,CAhgCA,uFCqKQ,6DD81BR,CAngCA,uFCwKQ,6DAAA,CACA,0DAAA,CAEA,oCAAA,CADA,oED+1BR,CAzgCA,uFC8KQ,6DAAA,CACA,0DAAA,CAEA,oCAAA,CADA,oED+1BR,CC51BQ,uHAYI,qEAAA,CAXA,6GAAA,CAOA,qEAAA,CAQA,sDDk1BZ,CCpgBI,+MA1UQ,0DDk1BZ,CAzhCA,qQC8MQ,6DAAA,CACA,oCDg1BR,CA/hCA,gPCsNQ,mED60BR,CAniCA,uFCyNQ,mED60BR,CAtiCA,uFC4NQ,mED60BR,CC30B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",
        sourcesContent: ["@import 'mixins.less';\n\n// Headlines\n.headline-6 () {\n    font-size: calc(var(--font-size-3) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n.headline-5 () {\n    font-size: calc(var(--font-size-4) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n.headline-4 () {\n    font-size: calc(var(--font-size-5) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n.headline-3 () {\n    font-size: calc(var(--font-size-6) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n.headline-3-bold () {\n    .headline-3();\n    font-weight: var(--font-weight-bold);\n    color: var(--color-override, var(--color-h));\n}\n\n.headline-2 () {\n    font-size: calc(var(--font-size-7) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-bold);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n.headline-1 () {\n    font-size: calc(var(--font-size-8) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-bold);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n.xLarge () {\n    font-size: calc(var(--font-size-9) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-bold);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n// Body\n.body-xs () {\n    font-size: var(--font-size-1);\n    font-family: var(--font-family-body);\n    line-height: var(--line-height-lg);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-body);\n    color: var(--color-body);\n}\n\n.body-xs-bold () {\n    .body-xs;\n    font-weight: var(--font-weight-bold);\n    color: var(--color-body);\n}\n\n.body-sm () {\n    font-size: var(--font-size-2);\n    font-family: var(--font-family-body);\n    line-height: var(--line-height-lg);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-body);\n    color: var(--color-body);\n}\n\n.body-sm-bold () {\n    .body-sm;\n    font-weight: var(--font-weight-bold);\n    color: var(--color-body);\n}\n\n.body-md () {\n    font-size: var(--font-size-3);\n    font-family: var(--font-family-body);\n    line-height: var(--line-height-lg);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-body);\n    color: var(--color-body);\n}\n\n.body-md-bold () {\n    .body-md;\n    font-weight: var(--font-weight-bold);\n    color: var(--color-body);\n}\n\n.body-lg () {\n    font-size: var(--font-size-4);\n    font-family: var(--font-family-body);\n    line-height: var(--line-height-lg);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-body);\n    color: var(--color-body);\n}\n\n.body-lg-bold () {\n    .body-lg;\n    font-weight: var(--font-weight-bold);\n    color: var(--color-body);\n}\n\n.handleFontDeclarationsGen9() {\n    h1 {\n        .headline-1;\n    }\n    h2 {\n        .headline-2;\n    }\n    h3 {\n        .headline-3;\n    }\n    h4 {\n        .headline-4;\n    }\n    h5 {\n        .headline-5;\n    }\n    p {\n        .body-md;\n    }\n}\n\n.handleMaxWidth(@max-width-default: 1000000px) {\n    width: 100%;\n    max-width: calc(\n        var(--max-width-dynamic, @max-width-default) +\n            var(--padding-dynamic, 0px) * 2\n    ) !important;\n    margin: 0 auto;\n}\n\n.handlePadding(@paddingSides: initial, @paddingTopBottom: initial) {\n    --padding-dynamic: @paddingSides;\n    --padding-dynamic-tb: @paddingTopBottom;\n\n    padding: var(--padding-t, var(--padding-dynamic-tb, 0))\n        var(--padding-dynamic, 0) var(--padding-b, var(--padding-dynamic-tb, 0))\n        var(--padding-dynamic, 0);\n}\n\n.commonContent() {\n    .handlePadding(var(--padding-sides), 0);\n    .handleMaxWidth(var(--content-max-width));\n}\n\n.backgroundIcon(@icon) {\n    background: url('../icons/@{icon}.svg') no-repeat center/1rem;\n}\n\n@iconBtnConfig: {\n    @small: {\n        size: 2rem;\n    };\n    @large: {\n        size: 3rem;\n    };\n};\n\n.iconBtn(@icon, @size: small) {\n    @lookup: @size;\n    width: @iconBtnConfig[@@lookup][size];\n    height: @iconBtnConfig[@@lookup][size];\n    position: relative;\n    cursor: pointer;\n    background: var(--black-65, rgba(0, 0, 0, 0.65));\n    border: 1px solid var(--white-100, #fff);\n    border-radius: 50%;\n    padding: 0;\n    transition: background 0.3s ease-in-out;\n    &::after {\n        .backgroundIcon(@icon);\n        content: '';\n        display: block;\n        height: 100%;\n        width: 100%;\n        position: absolute;\n        left: 0;\n        top: 0;\n        transition: 0.3s ease-in-out;\n    }\n\n    &:focus {\n        outline: none;\n        border: none;\n    }\n\n    .isTouchscreen({\n        &:active {\n            background: var(--white-100, #fff);\n            &::after {\n                filter: invert(1);\n            }\n        }\n    }, {\n        &:hover,\n        &:focus {\n            background: var(--white-100, #fff);\n            &::after {\n                filter: invert(1);\n            }\n        }\n    });\n}\n\n.iconBtnPlain(@icon, @size: small) {\n    @lookup: @size;\n    width: @iconBtnConfig[@@lookup][size];\n    height: @iconBtnConfig[@@lookup][size];\n    position: relative;\n    cursor: pointer;\n    padding: 0;\n\n    &::after {\n        content: '';\n        display: block;\n        height: 100%;\n        width: 100%;\n        position: absolute;\n        left: 0;\n        top: 0;\n        transition: 0.3s ease-in-out;\n        background: url('../icons/@{icon}.svg') no-repeat center/1.5rem;\n    }\n}\n\n.swiperBtn(@icon) {\n    .iconBtn(@icon, large);\n    background: var(--black-200);\n    border-radius: 0;\n    border: none;\n    &::after {\n        background-size: 1.5rem;\n    }\n}\n\n.pillBtn {\n    display: flex;\n    min-width: var(--rem-6);\n    padding: var(--padding-xs) var(--padding-sm);\n    justify-content: center;\n    align-items: center;\n    border: none;\n    border-radius: 100px;\n    background: var(--white-15);\n    cursor: pointer;\n\n    color: var(--white-100);\n    text-align: center;\n    font-family: var(--font-family-body);\n    font-size: 20px;\n    font-style: normal;\n    font-weight: 700;\n    line-height: var(--rem-125);\n\n    cursor: pointer;\n    transition: background-color 0.3s ease-in-out;\n\n    img {\n        margin-left: var(--grid-gap-xs);\n        height: var(--nav-icon-size);\n        width: var(--nav-icon-size);\n        transition: filter 0.3s ease-in-out;\n    }\n\n    &:hover,\n    &:focus {\n        background-color: var(--white-40);\n        outline: none;\n    }\n\n    &.selected {\n        color: var(--black-200);\n        background: var(--white-100);\n\n        img {\n            filter: invert();\n        }\n    }\n}\n\n.setGen9Root() {\n    --gen9-max-width: 2560px;\n    --content-max-width: var(--gen9-max-width);\n    --padding-sides: var(--padding-lg);\n    --content-padding: 0 var(--padding-sides);\n    flex: 1;\n    display: flex;\n    justify-content: center;\n\n    .xl({\n        --padding-sides: var(--padding-xl);\n    });\n\n    .handleFontDeclarationsGen9();\n}\n\n.scrollFade() {\n    // @note: this is breaking on firefox.\n    mask-image: linear-gradient(\n        to bottom,\n        var(--black-100) calc(100% - 48px),\n        transparent calc(100% + 16px)\n    );\n}\n\n.scrollbar() {\n    /* Firefox */\n    scrollbar-width: auto;\n    scrollbar-color: var(--scroll-thumb-color) var(--scroll-track-color);\n\n    /* Chrome, Edge, and Safari */\n    &::-webkit-scrollbar {\n        width: 8px;\n    }\n    &::-webkit-scrollbar-track {\n        background: transparent;\n    }\n    &::-webkit-scrollbar-thumb {\n        background-color: var(--scroll-thumb-color);\n        border-radius: 10px;\n        border: none;\n    }\n}\n\n.ifElse(@condition, @if-styles, @else-styles) {\n    @media @condition {\n        @if-styles();\n    }\n    @media not (@condition) {\n        @else-styles();\n    }\n}\n\n.isTouchscreen(@if-styles, @else-styles) {\n    .ifElse(~'(pointer: coarse)', @if-styles, @else-styles);\n}\n\n.mobile-landscape(@rules) {\n    @media only screen and (min-width: 480px) and (max-width: 1023px) and (orientation: landscape) {\n        @rules();\n    }\n}\n\n.caret(@color) {\n    .dropdownCaret(@color);\n}\n\n.horizontalScrollFade() {\n    mask-image: linear-gradient(\n        to right,\n        transparent,\n        rgba(0, 0, 0, 0.3) calc(var(--padding-sides) / 2),\n        #000 var(--padding-sides),\n        #000 calc(100% - var(--padding-sides)),\n        rgba(0, 0, 0, 0.3) calc(100% - (var(--padding-sides) / 2)),\n        transparent\n    );\n}\n\n// Accessibility\n.visuallyHidden() {\n    border: 0;\n    clip: rect(0 0 0 0);\n    height: 1px;\n    overflow: hidden;\n    padding: 0;\n    position: absolute;\n    white-space: nowrap;\n    width: 1px;\n}\n", "// GLOBAL NAV\n\n@import './globalNavVars.less';\n\n.globalNavigationRoot {\n    .globalNavVars();\n}\n\n.globalNavigationSpacer {\n    height: var(--global-navigation-height, 0px);\n}\n\n.globalNavigationSearchSpacer {\n    @media screen and (min-width: @global-navigation-breakpoint-mobile) {\n        height: calc(var(--global-navigation-height) + 140px);\n    }\n}\n\n// HEADER\n.globalNavigationContainer {\n    position: fixed;\n    width: 100%;\n\n    top: var(--global-navigation-spacer-padding, 0px);\n    left: 0;\n    right: 0;\n\n    z-index: 99;\n}\n\n.header {\n    display: grid;\n    grid-template-areas: 'home menu actions';\n    @media all and (max-width: @global-navigation-breakpoint-mobile) {\n        grid-template-areas: 'menu home actions';\n    }\n    grid-template-columns: 1fr auto 1fr;\n    height: var(--global-navigation-height);\n    padding: 0 var(--rem-4);\n    background: var(--global-navigation-background);\n    backdrop-filter: blur(25px);\n    color: white;\n    border-bottom: 1px solid var(--global-navigation-border-color);\n    width: 100%;\n    opacity: 1;\n}\n\n.fluid {\n    flex-grow: 1;\n    overflow: hidden;\n}\n\n.fixed {\n    flex: 1;\n}\n\n.title {\n    display: flex;\n    align-items: center;\n    flex: 1;\n}\n\n.quickAccessWrapper {\n    position: absolute;\n    top: 100%;\n    opacity: 0;\n    transition:\n        opacity 0.35s ease-out,\n        transform 0s ease 0.5s;\n    pointer-events: none;\n    transform: translateY(-10px);\n\n    &[data-qa-opened='true'] {\n        opacity: 1;\n        pointer-events: auto;\n        transition:\n            opacity 0.15s ease,\n            transform 0.15s ease;\n        transform: translateY(0px);\n    }\n}\n", "/*\n * New Design System:\n * 1. Breakpoints\n * 2. Typography\n * 3. Variables\n * 4. Utility\n *     4.1 Flex\n *     4.2 Grid\n *     4.3 Max-Width\n *     4.4 Images\n *     4.5 Padding\n *     4.6 Fonts\n *     4.7 Games\n *     4.8 Tina\n *     4.9 Hacks\n * 5. Presentational\n */\n\n/* 1. Breakpoints */\n@screen-sm: 0px;\n@screen-md: 768px;\n@screen-lg: 1024px;\n@screen-xl: 1920px;\n@screen-xxl: 2560px;\n@sm-min-width: @screen-sm;\n@md-min-width: @screen-md;\n@lg-min-width: @screen-lg;\n@xl-min-width: @screen-xl;\n@xxl-min-width: @screen-xxl;\n@sm-max-width: (@md-min-width - 1px);\n@md-max-width: (@lg-min-width - 1px);\n@lg-max-width: (@xl-min-width - 1px);\n@xl-max-width: (@xxl-min-width - 1px);\n\n.sm(@rules) {\n    .smMin(@rules);\n}\n.smMin(@rules) {\n    @media (min-width: @sm-min-width) {\n        @rules();\n    }\n}\n.smMax(@rules) {\n    @media (max-width: @sm-max-width) {\n        @rules();\n    }\n}\n.smOnly(@rules) {\n    @media (min-width: @sm-min-width) and (max-width: @sm-max-width) {\n        @rules();\n    }\n}\n.md(@rules) {\n    .mdMin(@rules);\n}\n.mdMin(@rules) {\n    @media (min-width: @md-min-width) {\n        @rules();\n    }\n}\n.mdMax(@rules) {\n    @media (max-width: @md-max-width) {\n        @rules();\n    }\n}\n.mdOnly(@rules) {\n    @media (min-width: @md-min-width) and (max-width: @md-max-width) {\n        @rules();\n    }\n}\n.lg(@rules) {\n    .lgMin(@rules);\n}\n.lgMin(@rules) {\n    @media (min-width: @lg-min-width) {\n        @rules();\n    }\n}\n.lgMax(@rules) {\n    @media (max-width: @lg-max-width) {\n        @rules();\n    }\n}\n.lgOnly(@rules) {\n    @media (min-width: @lg-min-width) and (max-width: @lg-max-width) {\n        @rules();\n    }\n}\n.xl(@rules) {\n    .xlMin(@rules);\n}\n.xlMin(@rules) {\n    @media (min-width: @xl-min-width) {\n        @rules();\n    }\n}\n.xlMax(@rules) {\n    @media (max-width: @xl-max-width) {\n        @rules();\n    }\n}\n.xlOnly(@rules) {\n    @media (min-width: @xl-min-width) and (max-width: @xl-max-width) {\n        @rules();\n    }\n}\n.xxl(@rules) {\n    .xxlMin(@rules);\n}\n.xxlMin(@rules) {\n    @media (min-width: @xxl-min-width) {\n        @rules();\n    }\n}\n\n.notoBackup(@varName; @stdFont) {\n    @{varName}: @stdFont;\n\n    &:lang(ja_jp) {\n        @{varName}: @stdFont, NotoSansJP;\n    }\n    &:lang(zh_hans) {\n        @{varName}: @stdFont, NotoSansSC;\n    }\n    &:lang(zh_tw) {\n        @{varName}: @stdFont, NotoSansTC;\n    }\n}\n\n/* 2. Typography */\n.handleFontDeclarations() {\n    .notoBackup(--rsg-font-family-std, HelveticaNowText);\n    .notoBackup(--rsg-font-family-h, HelveticaNowDisplayBold);\n    .notoBackup(--gta-font-family-std, Chalet);\n    .notoBackup(--gta-font-family-h, ChaletComprime);\n    .notoBackup(--gta-font-family-badge, Pricedown);\n    .notoBackup(--rdr-font-family-std, HapnaSlabSerif);\n    .notoBackup(--rdr-font-family-h, RDRLino-Regular);\n    .notoBackup(--rdr-font-family-newswire-subtitle, HapnaSlabSerif);\n    .notoBackup(--rdr-area-font, RDRCatalogueBold);\n\n    --header-multiplier: var(--header-numerator, var(--root-font-size)) /\n        var(--root-font-size);\n    font-family: var(--font-family-std, HelveticaNowText);\n    font-weight: var(--font-weight-std, 400);\n    letter-spacing: var(--letter-spacing-std, -0.025em);\n    line-height: var(--line-height-std, 1.6);\n    font-size: calc(var(--root-font-size) * 1px);\n    -webkit-font-smoothing: antialiased;\n\n    h1.large,\n    h1,\n    h2,\n    h3,\n    h4 {\n        font-family: var(--font-family-h, HelveticaNowDisplayBold);\n        letter-spacing: var(--letter-spacing-h, -0.025em);\n    }\n    h1.large,\n    h1 {\n        font-weight: var(--font-weight-h1, var(--font-weight-h, 700));\n        text-transform: var(--text-transform-h1, var(--text-transform-h, none));\n        line-height: var(--line-height-h1, var(--line-height-h, 1.1));\n    }\n\n    h1.large {\n        font-size: calc(var(--font-size-8) * var(--header-multiplier));\n    }\n    h1 {\n        font-size: calc(var(--font-size-7) * var(--header-multiplier));\n    }\n    h2 {\n        font-size: calc(var(--font-size-6) * var(--header-multiplier));\n        font-weight: var(--font-weight-h2, var(--font-weight-h, 700));\n        text-transform: var(--text-transform-h2, var(--text-transform-h, none));\n        line-height: var(--line-height-h, 1.1);\n    }\n    h3 {\n        font-size: calc(var(--font-size-5) * var(--header-multiplier));\n        font-weight: var(--font-weight-h3, var(--font-weight-h, 700));\n        text-transform: var(--text-transform-h3, var(--text-transform-h, none));\n        line-height: var(--line-height-h, 1.1);\n\n        &[data-context='newswire-subtitle'] {\n            font-size: calc(\n                var(--font-size-5) *\n                    var(\n                        --h3-numerator-override-newswire-subtitle,\n                        var(--header-multiplier)\n                    )\n            );\n            font-weight: var(\n                --font-weight-newswire-subtitle,\n                var(--font-weight-h)\n            );\n            font-family: var(\n                --font-family-newswire-subtitle,\n                var(--font-family-h)\n            );\n            text-transform: var(--text-transform-newswire-subtitle);\n        }\n\n        .isRdr({\n            font-weight: var(--font-weight-h3, var(--font-weight-h, 400));\n        });\n    }\n\n    h4,\n    h5,\n    h6 {\n        font-size: calc(var(--font-size-4) * var(--header-multiplier));\n        line-height: var(--line-height-h, 1.1);\n    }\n}\n\n.handleColors() {\n    h1.large,\n    h1 {\n        color: var(--color-h-dynamic, var(--color-h1, var(--color-h, inherit)));\n    }\n    h2 {\n        color: var(--color-h-dynamic, var(--color-h2, var(--color-h, inherit)));\n    }\n    h3 {\n        color: var(--color-h-dynamic, var(--color-h3, var(--color-h, inherit)));\n\n        &[data-context='newswire-subtitle'] {\n            color: var(\n                --color-subtitle-dynamic,\n                var(--color-h-dynamic, var(--color-h3, var(--color-h, inherit)))\n            );\n        }\n    }\n    h4,\n    h5,\n    h6 {\n        color: var(--color-h-dynamic, var(--color-h, inherit));\n    }\n    background-color: var(--background-color, transparent);\n\n    [template='community'] {\n        --time-color: var(--body-color, #2d2d2d);\n        --breadcrumb-separator-filter-invert: invert(0);\n\n        main {\n            color: var(--color-h, #161616);\n        }\n        p {\n            color: var(--body-color, #2d2d2d);\n        }\n    }\n}\n\n/* 3. Variables */\n.resetVariables() {\n    --text-section-max-width: 640px;\n    --base-pixel-size: 12px;\n    --base-rem-size: 0.75rem;\n    --half-rem-size: calc(var(--base-rem-size) / 2);\n    --twice-rem-size: calc(var(--base-rem-size) * 2);\n    --section-margin-bottom: calc(var(--base-rem-size) * 4);\n    --header-height: 80px;\n    --breadcrumbs-height: calc(var(--base-pixel-size) * 3.5);\n    --max-width: 1920px;\n    --standard-color: #fcaf17;\n    --color-h: #ffffff;\n    --body-color: #e8e8e8;\n    --background-color: #0b0b0b;\n    --card-background-color: #000;\n    --border-color: #282828;\n    --privacy-banner-height: 0px;\n    --game-header-height: 50px;\n    --standard-grid-gap: calc(var(--base-rem-size) * 2);\n    --image-margin-bottom: inherit;\n    --image-rounding: 0px;\n    --image-rounding-static: 16px;\n    --image-rounding-static-sm: 8px;\n    --image-rounding-static-xs: 4px;\n\n    --grid-gap-static-xs: 0.5rem;\n    --grid-gap-static-sm: 1rem;\n    --grid-gap-static-md: 2rem;\n    --grid-gap-static-lg: 4rem;\n    --grid-gap-static-xl: 8rem;\n    .smMax({--grid-gap-static-lg: 2rem; --grid-gap-static-xl: 4rem;});\n\n    --max-width-static: 640px;\n    --max-width-static-md: 1088px;\n    --max-width-static-lg: 1920px;\n    --max-width-static-xl: 2560px;\n    .xxlMin({--max-width-static-md: 1440px;});\n\n    --margin-static: 0 0 2rem;\n    --h2-margin: 2rem 0 0 0;\n\n    --padding-sides: var(--grid-gap-static-lg);\n    --padding-top-bottom: var(--padding-sides);\n    --padding-static: var(--padding-sides);\n}\n\n/* 4. Utility */\n/* 4.1 Flex */\n.flex() {\n    display: flex;\n    flex-flow: column;\n}\n.horizontalCenterChildren() {\n    display: flex;\n    justify-content: center;\n}\n.verticalCenterChildren() {\n    display: flex;\n    align-items: center;\n}\n.flexCenterChildren() {\n    .horizontalCenterChildren();\n    .verticalCenterChildren();\n}\n\n/* 4.2 Grid */\n.gridMinWidth(@minWidth: 480px; @rowGap: var(--standard-grid-gap); @colGap: var(--standard-grid-gap); @autoType: 'auto-fit') {\n    display: grid;\n    grid-row-gap: @rowGap;\n    grid-column-gap: @colGap;\n    grid-template-columns: ~'repeat(@{autoType}, minmax(@{minWidth}, 1fr))';\n}\n.gridHideExtraRows(@colGap: var(--standard-grid-gap)) {\n    ::-webkit-scrollbar {\n        display: none;\n    }\n    -ms-overflow-style: none;\n    display: grid;\n    grid-auto-flow: column;\n    grid-column-gap: @colGap;\n    overflow-y: hidden;\n    scroll-snap-type: x mandatory;\n    > * {\n        scroll-snap-align: start;\n    }\n    --per-page: 4;\n    .lgMax({--per-page: 3;});\n    .mdMax({--per-page: 2;});\n    .smMax({--per-page: 1;});\n\n    grid-auto-columns: calc(\n        100% / var(--per-page) - (var(--per-page) - 1) / var(--per-page) *\n            @colGap\n    );\n}\n.gridNumCols(@numInitialItems) {\n    display: grid;\n    grid-gap: var(--standard-grid-gap);\n    .smMax({grid-template-columns: repeat(1, minmax(0px, 1fr)) ;});\n    @media screen and (min-width: @screen-sm) and (max-width: @md-max-width) {\n        grid-template-columns: repeat(2, minmax(0px, 1fr));\n    }\n    @media screen and (min-width: @screen-lg) {\n        grid-template-columns: repeat(4, minmax(0px, 1fr));\n    }\n}\n.gridNumColsSmall(@colGap: var(--padding-top-bottom); @rowGap: var(--padding-top-bottom)) {\n    display: grid;\n    grid-row-gap: @rowGap;\n    grid-column-gap: @colGap;\n    grid-template-columns: repeat(1, minmax(0px, 1fr));\n    .md({grid-template-columns: repeat(2, minmax(0px, 1fr)) ;});\n}\n\n.standardLayoutGridItem(@maxWidth: var(--max-width-static-md), @padding: var(--padding-static)) {\n    .handleMaxWidth(@maxWidth);\n    .handlePadding(@padding);\n}\n\n.handleGridStyles(@grid-gap-dynamic: var(--grid-gap-static-md)) {\n    --grid-gap-dynamic: @grid-gap-dynamic;\n    display: grid;\n    grid-template-columns: repeat(var(--grid-num-columns, 1), minmax(0px, 1fr));\n    grid-template: var(\n        --grid-template-override,\n        auto / repeat(var(--grid-num-columns, 1), minmax(0, 1fr))\n    );\n    grid-gap: var(--grid-gap-dynamic);\n    align-items: var(--grid-align-items);\n    align-content: var(--grid-align-content);\n    align-self: var(--grid-align-self);\n    justify-items: var(--grid-justify-items);\n    justify-content: var(--grid-justify-content);\n    justify-self: var(--grid-justify-self);\n}\n\n/* 4.3 Max-Width */\n.maxWidth(@padding: 0) {\n    max-width: var(--max-width);\n    width: 100%;\n    margin: 0 auto;\n    padding-left: @padding;\n    padding-right: @padding;\n}\n.maxWidthWithNormalPadding() {\n    .maxWidth(var(--padding-sides));\n}\n\n.handleMaxWidth(@max-width-default: 1000000px) {\n    width: 100%;\n    max-width: calc(\n        var(--max-width-dynamic, @max-width-default) +\n            var(--padding-dynamic, 0px) * 2\n    ) !important;\n    margin: 0 auto;\n}\n\n.breakout(@max-width-default: 100vw) {\n    @margin: calc((@max-width-default / 2) * -1);\n    width: @max-width-default;\n    max-width: @max-width-default !important;\n    position: relative;\n    left: 50%;\n    right: 50%;\n    margin-left: @margin;\n    margin-right: @margin;\n}\n\n.fullWidth() {\n    .breakout;\n}\n\n/* 4.4 Images */\n.handleAspectRatio() {\n    --aspect-ratio-default: 1;\n    .lgMin({\n        --aspect-ratio-default: 16/9;\n    });\n\n    position: relative;\n    &:before {\n        content: '';\n        height: 0;\n        width: 100%;\n        display: block;\n        padding-bottom: calc(\n            100% / calc(var(--aspect-ratio, var(--aspect-ratio-default)))\n        );\n    }\n    > * {\n        position: absolute;\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 100%;\n    }\n}\n.setAspectRatio(@ratio) {\n    --aspect-ratio: @ratio;\n    .handleAspectRatio;\n}\n\n.handleParallaxPerspective() {\n    position: fixed;\n    width: 100%;\n    height: 100%;\n    overflow-x: hidden;\n    overflow-y: scroll;\n    perspective: var(--parallax-perspective);\n    perspective-origin: 0 0;\n}\n.handleParallaxDistance() {\n    transform: translateZ(var(--parallax-distance))\n        scale(\n            calc(\n                (var(--parallax-perspective) - var(--parallax-distance)) /\n                    var(--parallax-distance)\n            )\n        );\n}\n\n.handleImageRounding() {\n    border-radius: var(--image-rounding-dynamic, 0px);\n}\n\n/* 4.5 Padding */\n.handlePadding(@paddingSides: initial, @paddingTopBottom: initial) {\n    --padding-dynamic: @paddingSides;\n    --padding-dynamic-tb: @paddingTopBottom;\n\n    padding: var(--padding-t, var(--padding-dynamic-tb, 0))\n        var(--padding-dynamic, 0) var(--padding-b, var(--padding-dynamic-tb, 0))\n        var(--padding-dynamic, 0);\n}\n\n/* 4.6 Fonts */\n.loadFont(@family, @weight: 400, @style: normal, @file: @family) {\n    @font-face {\n        font-family: @family;\n        font-style: @style;\n        font-weight: @weight;\n        src: url('../fonts/@{file}.woff') format('woff');\n    }\n}\n.loadFontWoff2(@family, @weight: 400, @style: normal, @file: @family) {\n    @font-face {\n        font-family: @family;\n        font-style: @style;\n        font-weight: @weight;\n        src: url('../fonts/@{file}.woff2') format('woff2');\n    }\n}\n.fontClip(@backgroundImg) {\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n    @backgroundImg();\n}\n\n/* 4.7 Games */\n.gta(@rules) {\n    [data-game^='gta'] {\n        @rules();\n    }\n}\n\n.isGta(@rules) {\n    [data-game^='gta'] & {\n        @rules();\n    }\n}\n\n.rdr(@rules) {\n    [data-game='rdo'],\n    [data-game^='rdr'] {\n        @rules();\n    }\n}\n\n.isRdr(@rules) {\n    [data-game='rdo'] &,\n    [data-game^='rdr'] & {\n        @rules();\n    }\n}\n\n/* 4.8 Tina */\n.tinaTextField() {\n    padding: var(--tina-padding-small);\n    border-radius: var(--tina-radius-small);\n    background: var(--tina-color-grey-0);\n    color: var(--tina-color-grey-10);\n    background-color: var(--tina-color-grey-0);\n    border: 1px solid var(--tina-color-grey-2);\n    box-shadow: 0 0 0 2px transparent;\n    margin-bottom: 14px;\n}\n\n/* 4.9 Hacks */\n.safariBorderRadiusOverflowFix() {\n    // https://stackoverflow.com/questions/49066011/overflow-hidden-with-border-radius-not-working-on-safari\n    -webkit-mask-image: -webkit-radial-gradient(white, black);\n}\n\n.forceGpuRendering() {\n    // https://web.dev/animations-guide/#force\n    transform: translateZ(0);\n}\n\n/* 5. Presentational */\n@locales: en_us, fr_fr, de_de, es_es, es_mx, it_it, pt_br, pl_pl, ru_ru, ja_jp,\n    ko_kr, zh_tw, zh_hans;\n\n.placeholder(@rules) {\n    &::-webkit-input-placeholder {\n        @rules();\n    }\n    &:-moz-placeholder {\n        @rules();\n    }\n    &::-moz-placeholder {\n        @rules();\n    }\n    &:-ms-input-placeholder {\n        @rules();\n    }\n}\n\n.bgImg() {\n    background-size: cover;\n    background-position: center center;\n    background-repeat: no-repeat;\n}\n\n.themeDark() {\n    color: #e8e8e8;\n    --tag-color: #e8e8e8;\n}\n\n.outbound() {\n    content: '';\n    display: inline-block;\n    background-size: 100%;\n    background-repeat: no-repeat;\n    background-position: 0% 50%;\n    vertical-align: baseline;\n    margin-left: var(--grid-gap-static-xs);\n    width: 1rem;\n    height: 1rem;\n    background-image: data-uri('../img/outbound.svg');\n}\n\n.blurryBg() {\n    transition: filter 0.8s;\n    filter: blur(var(--blur-because-in-bg, 0px));\n}\n\n.fancyLink() {\n    position: relative;\n    background: transparent;\n    padding: 0;\n    z-index: 1;\n    @media (min-width: @screen-sm) {\n        transition: all 0.2s ease;\n        &:before {\n            content: '';\n            display: block;\n            position: absolute;\n            bottom: 0;\n            left: -0.1rem;\n            width: calc(100% + 0.2rem);\n            height: 2px;\n            background: var(--body-color);\n            transition: all 0.2s ease;\n            z-index: -1;\n            border-radius: 0.25rem;\n        }\n        &:hover {\n            color: #161616;\n\n            &:before {\n                left: -0.25rem;\n                width: calc(100% + 0.5rem);\n                height: 100%;\n            }\n        }\n    }\n    img {\n        display: block;\n    }\n}\n.stdHover() {\n    transition:\n        color 0.2s ease,\n        opacity 0.2s ease;\n    &:hover {\n        color: var(--standard-color);\n        opacity: 1;\n    }\n}\n.stdIconHover() {\n    &:hover {\n        filter: brightness(0) saturate(100%) invert(76%) sepia(15%)\n            saturate(5173%) hue-rotate(348deg) brightness(105%) contrast(98%);\n    }\n}\n.card() {\n    .handleImageRounding;\n    --image-rounding-dynamic: var(--image-rounding-static-sm);\n    background: var(--card-background-color);\n    overflow: hidden;\n    display: flex;\n    flex-flow: column;\n    transition: transform 0.2s ease;\n    border: 1px solid var(--border-color);\n    .info {\n        .handleGridStyles;\n        --grid-gap-dynamic: var(--grid-gap-static-xs);\n        padding: 2rem 1.5rem;\n        .title {\n            --line-height-h: 1.3;\n            color: var(--color-h);\n        }\n    }\n}\n\n.cardHover() {\n    transition:\n        transform 0.3s cubic-bezier(0, 0, 0.5, 1),\n        box-shadow 0.3s cubic-bezier(0, 0, 0.5, 1);\n    box-shadow: 0px 0px 40px -25px rgba(0, 0, 0, 0);\n\n    &:hover {\n        transform: scale(1.025);\n        box-shadow: 0px 30px 40px -25px rgba(0, 0, 0, 1);\n    }\n}\n\n.cardSecondary() {\n    .card();\n    .info {\n        padding: 1.5rem;\n    }\n    .title {\n        font-size: var(--font-size-3);\n        font-weight: 400;\n    }\n}\n\n.cardTertiary() {\n    .cardSecondary();\n    --image-rounding-dynamic: 0;\n    --card-background-color: transparent;\n    grid-gap: var(--grid-gap-static-sm);\n    overflow: unset;\n    border: none;\n    .info {\n        padding: 0;\n    }\n    .img {\n        .handleImageRounding;\n        --image-rounding-dynamic: var(--image-rounding-static-sm);\n    }\n}\n\n.standardPage() {\n    .maxWidthWithNormalPadding;\n    padding-top: var(--padding-top-bottom);\n    padding-bottom: var(--padding-top-bottom);\n}\n\n.dropdownThing(@defaultDeg: 0deg; @openDeg: 180deg) {\n    position: relative;\n    padding-right: calc(var(--grid-gap-static-xs) + 24px);\n    .dropdownCaret(yellow; @defaultDeg; @openDeg);\n}\n.dropdownCaret(@color; @defaultDeg: 0deg; @openDeg: 180deg) {\n    &:after {\n        display: inline-block;\n        content: '';\n        position: absolute;\n        top: 0;\n        right: 0;\n        @img: '../img/dropdown-@{color}.svg';\n        background-image: data-uri(@img);\n        background-repeat: no-repeat;\n        width: image-width(@img);\n        height: 100%;\n        background-position: center;\n        background-size: 100%;\n        transform: rotate(@defaultDeg);\n        transition: transform 0.3s;\n        .open& {\n            transform: rotate(@openDeg);\n        }\n    }\n}\n\n.sectionHeader() {\n    margin: 0 0 1.5rem;\n    font-size: var(--font-size-5);\n    font-family: var(--font-family-h);\n    font-weight: var(--font-weight-h);\n    --line-height-h: 1.3;\n\n    .xlMin ({\n        font-size: var(--font-size-6);\n    });;\n}\n.sectionHeaderSmall() {\n    .sectionHeader;\n    font-size: var(--font-size-4);\n\n    .xlMin ({\n        font-size: var(--font-size-5);\n    });;\n}\n\n.tag() {\n    color: var(--tag-color, var(--body-color));\n    font-weight: 700;\n    font-size: var(--font-size-2);\n    line-height: 1.6;\n}\n\n.date() {\n    .tag;\n    font-weight: 400;\n    opacity: 0.65;\n}\n.animationFadeInUp() {\n    :global {\n        animation: globalFadeInUp 0.75s;\n        animation-play-state: paused;\n    }\n}\n.animationPaused() {\n    animation-play-state: paused;\n}\n.animationRunning() {\n    animation-play-state: running;\n}\n\n.button() {\n    font-weight: 700;\n    align-self: center;\n    display: inline-block;\n    text-transform: uppercase;\n    background: transparent;\n    border: 1px solid var(--color-h);\n    padding: 1rem 3rem;\n    color: inherit;\n    cursor: pointer;\n    border-radius: 0.25rem;\n    color: var(--color-h);\n    line-height: 100%;\n    transition: all 0.2s ease;\n    &:focus,\n    &:hover {\n        background: var(--standard-color);\n        border-color: var(--standard-color);\n        color: #161616;\n    }\n    &.secondary {\n        .fancyLink;\n        outline: none;\n        border: none;\n        text-transform: none;\n        font-weight: 400;\n        line-height: unset;\n        .smMin ({\n            &:before {\n                background: var(--standard-color);\n                height:4px;\n            }\n            &:focus,\n            &:hover {\n                &:before {\n                    left: -0.5rem;\n                    width: calc(100% + 1rem);\n                    height: 100%;\n                }\n            }\n         });;\n    }\n    &[disabled] {\n        opacity: 0.5;\n    }\n}\n\n.expandToEdges() {\n    margin-top: calc(var(--padding-top-bottom) * -1);\n    margin-left: calc(var(--padding-sides) * -1);\n    width: 100vw;\n    width: calc(100% + calc(var(--padding-sides) * 2));\n}\n\n.shadow(@boxShadow: 0 10px 30px rgba(0, 0, 0, 0.5)) {\n    // border: 1px solid rgba(0, 0, 0, 0.15);\n    box-shadow: @boxShadow;\n}\n.shadowTop() {\n    box-shadow: -3px -3px 6px 0 rgba(0, 0, 0, 0.2);\n}\n\n.aspect-ratio(@width, @height, @selector: div, @pre: ~'') {\n    @supports not (aspect-ratio: @width / @height) {\n        position: relative;\n        &:before {\n            display: block;\n            content: '';\n            width: 100%;\n            padding-top: calc((@height / @width) * 100%);\n        }\n        > @{pre}@{selector} {\n            position: absolute;\n            top: 0;\n            left: 0;\n            right: 0;\n            bottom: 0;\n            width: 100% !important;\n            height: 100% !important;\n        }\n    }\n\n    @supports (aspect-ratio: @width / @height) {\n        @{pre}@{selector} {\n            aspect-ratio: @width / @height !important;\n            width: 100% !important;\n            height: auto !important;\n        }\n    }\n}\n.unset-aspect-ratio(@selector, @pre: ~'') {\n    @supports not (aspect-ratio: 1/1) {\n        position: unset;\n        &:before {\n            display: none;\n        }\n        > @{pre}@{selector} {\n            position: unset;\n            width: 100% !important;\n            height: unset !important;\n        }\n    }\n\n    @supports (aspect-ratio: 1/1) {\n        @{pre}@{selector} {\n            aspect-ratio: unset !important;\n        }\n    }\n}\n\n.rockstarTypography() {\n    --font-family-std: NeueHelveticaPaneuropean, sans-serif;\n    --leter-spacing-std: 0;\n\n    font-size: var(--font-size-2);\n    font-family: var(--font-family-std);\n    letter-spacing: var(--leter-spacing-std);\n\n    button {\n        letter-spacing: var(--leter-spacing-std);\n    }\n}\n\n.setNodeFontSizing() {\n    // TODO audit this. .5rem is very small.\n    --font-size-1: 0.75rem;\n\n    --font-size-2: 0.75rem;\n    --font-size-3: 1rem;\n    --font-size-4: 1.25rem;\n    --font-size-5: 1.5rem;\n    --font-size-6: 2rem;\n    --font-size-7: 2.5rem;\n    --font-size-8: 3rem;\n    --font-size-9: 4rem;\n    --font-size-10: 5rem;\n}\n\n.setRootFontSizing() {\n    .sm({--root-font-size: 16;});\n    .md({--root-font-size: 18;});\n    .lg({--root-font-size: 20;});\n    .xl({--root-font-size: 22;});\n}\n\n.button-text () {\n    font-size: var(--font-size-4);\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-sm);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-h);\n    text-transform: uppercase;\n}\n\n.button-text-sm () {\n    .button-text;\n    font-size: var(--font-size-3);\n}\n\n.button-text-md () {\n    .button-text;\n    font-size: var(--font-size-4);\n    padding: 0 var(--padding-md);\n}\n\n.button-text-lg () {\n    .button-text;\n    font-size: var(--font-size-5);\n    padding: 0 var(--padding-lg);\n}\n\n.button-text-xl () {\n    .button-text;\n    font-size: var(--font-size-7);\n    padding: 0 var(--padding-xl);\n}\n\n.cta-button() {\n    @import '../less/gen9-vars';\n\n    --button-text-color-hover: var(--white-100);\n\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: center;\n    gap: var(--grid-gap-xs, 0.5rem);\n\n    background: var(\n        --button-background-color,\n        var(--black-65, hsla(0, 0%, 7%, 0.65))\n    );\n    border: 1px solid var(--white-100, #fff);\n    border-radius: var(--border-radius-sm, 4px);\n    color: var(--button-text-color, var(--white-100));\n    cursor: pointer;\n    padding: 0 var(--padding-sm);\n\n    width: 100%;\n    height: var(--button-height-3, 3rem);\n\n    transition: all 0.3s ease-in-out;\n\n    &[data-brand='reddeadredemption'],\n    [data-brand='reddeadredemption'] & {\n        --accent-color: #cc0000;\n        --font-family-h: RDRUltra;\n\n        :lang(pl_pl) {\n            --font-family-h: RDRUltra, NeueHelveticaPaneuropean;\n        }\n    }\n\n    &[data-brand='bully'],\n    [data-brand='bully'] & {\n        --accent-color: #f8ad00;\n        --font-family-h: HelveticaNowDisplayBold;\n        --button-background-color: var(--white-100);\n        --button-background-color-hover: var(--accent-color);\n        --button-text-color: var(--black-100);\n        --button-text-color-hover: var(--black-100);\n\n        backdrop-filter: blur(25px);\n        padding: 0 var(--padding-md, 32px);\n    }\n\n    img {\n        height: 1rem;\n        width: auto;\n    }\n\n    .label {\n        .button-text();\n        display: flex;\n        flex-shrink: 0;\n    }\n\n    &.primary {\n        color: var(--black-100);\n        background-color: var(--white-100);\n    }\n\n    &:hover {\n        border-color: var(--accent-color, var(--btn-active-color));\n        background-color: var(--accent-color, var(--btn-active-color));\n        color: var(--button-text-color-hover, var(--btn-active-color));\n\n        &.primary {\n            color: var(--button-text-color-hover, var(--white-100));\n        }\n    }\n\n    @media (min-width: 1280px) {\n        padding: 0 var(--padding-md);\n    }\n\n    @media (min-width: 768px) and (max-width: 1539px) {\n        height: 2.5rem;\n\n        img {\n            height: 1rem;\n        }\n\n        .label {\n            .button-text-sm();\n        }\n    }\n}\n", "/*\nThis CSS resource incorporates links to web font and font software which is the valuable copyrighted property of House Industries and/or its suppliers. You expressly agree to not copy, install, redistribute, convert, modify, or reverse engineer this font software or the fonts rendered thereby. Please contact House Industries with any questions regarding Web Fonts: http://www.houseind.com\n*/\n\n@import './mixins.less';\n\n// RSG Fonts\n.loadFont(HelveticaNowText, 400, normal, HelveticaNowText);\n.loadFont(HelveticaNowText, 400, italic, HelveticaNowTextIt);\n.loadFont(HelveticaNowText, 700, normal, HelveticaNowTextBold);\n.loadFont(HelveticaNowDisplayBold, 700);\n.loadFont(HelveticaNowDisplayMedium);\n.loadFont(HelveticaNeueLTW05, 400, normal, HelveticaNeueLTW05-65Medium);\n.loadFont(HelveticaNeueLTW05, 400, italic, HelveticaNeueLTW05-66MediumIt);\n.loadFont(HelveticaNeueLTW07, 400, normal, HelveticaNeueLTW07-55Roman);\n.loadFont(HelveticaNeueLTW07, 400, italic, HelveticaNeueLTW07-56Italic);\n.loadFont(HelveticaNeueLTW07, 700, normal, HelveticaNeueLTW07-75Bold);\n.loadFont(HelveticaNeueLTW07, 700, italic, HelveticaNeueLTW07-76BoldIt);\n.loadFont(HelveticaNeueLTW07-85Heavy, 700, normal);\n.loadFont(NeueHelveticaPaneuropean, 400, normal, HelveticaPanEuro-Md);\n.loadFont(SackersGothicW01-Square);\n.loadFont(Cabrito-Nordem);\n.loadFont(Droid-Serif-Pro);\n\n.loadFont(NotoSansSC, 400, normal, Noto-Sans-SC-400);\n.loadFont(NotoSansSC, 500, normal, Noto-Sans-SC-500);\n.loadFont(NotoSansSC, 700, normal, Noto-Sans-SC-700);\n.loadFont(NotoSansSC, 900, normal, Noto-Sans-SC-900);\n\n.loadFont(NotoSansTC, 400, normal, Noto-Sans-TC-400);\n.loadFont(NotoSansTC, 500, normal, Noto-Sans-TC-500);\n.loadFont(NotoSansTC, 700, normal, Noto-Sans-TC-700);\n.loadFont(NotoSansTC, 900, normal, Noto-Sans-TC-900);\n\n.loadFont(NotoSansJP, 400, normal, Noto-Sans-JP-400);\n// .loadFontWoff2(NotoSansJP, 400, normal, Noto-Sans-JP-400);\n.loadFont(NotoSansJP, 500, normal, Noto-Sans-JP-500);\n.loadFont(NotoSansJP, 700, normal, Noto-Sans-JP-700);\n.loadFont(NotoSansJP, 900, normal, Noto-Sans-JP-900);\n\n.loadFont(NotoSansKR, 400, normal, Noto-Sans-KR-400);\n.loadFont(NotoSansKR, 500, normal, Noto-Sans-KR-500);\n.loadFont(NotoSansKR, 700, normal, Noto-Sans-KR-700);\n.loadFont(NotoSansKR, 900, normal, Noto-Sans-KR-900);\n\n.loadFont(NotoSerifJP, 700, normal, NotoSerifJP-Black);\n.loadFont(NotoSerifJP, 900, normal, Noto-Serif-JP-900);\n\n.loadFont(NotoSerifKR, 700, normal, Noto-Serif-KR-900);\n.loadFont(NotoSerifKR, 900, normal, Noto-Serif-KR-900);\n\n.loadFont(NotoSerifSC, 700, normal, NotoSerifSC-Black);\n.loadFont(NotoSerifSC, 900, normal, Noto-Serif-SC-900);\n\n.loadFont(NotoSerifTC, 700, normal, NotoSerifTC-Black);\n.loadFont(NotoSerifTC, 900, normal, Noto-Serif-TC-900);\n\n// GTA fonts\n.loadFont(ChaletComprime, 400, normal, CHALETCOMPRIME-COLOGNESIXTYSC);\n.loadFont(ChaletComprime, 700, normal, ChaletComprime-HongKongSixty);\n.loadFont(Chalet, 400, normal, Chalet-LondonSixty);\n.loadFont(Chalet, 700, normal, Chalet-NewYorkSixty);\n.loadFont(Pricedown, 700, normal, Pricedown);\n.loadFont(NeueHelveticaW05, 400, normal, NeueHelveticaW05-Condensed);\n.loadFont(NeueHelveticaW05, 700, normal, NeueHelveticaW05-CondensedBold);\n.loadFont(NeueHelveticaW05, 900, normal, NeueHelveticaW05-CondensedExtraBlack);\n.loadFont(FrizQuadrataW05, 400, normal, FrizQuadrataW05-Regular);\n.loadFont(FrizQuadrataW05, 400, italic, FrizQuadrataW05-Italic);\n.loadFont(FrizQuadrataW05, 700, normal, FrizQuadrataW05-Bold);\n.loadFont(FrizQuadrataW05, 700, italic, FrizQuadrataW05-BoldItalic);\n.loadFont(CorporateW05, 400, normal, CorporateURWRegW05-Regular);\n.loadFont(NimbusSansW05, 400, normal, NimbusSansW05-Regular);\n.loadFont(NimbusSansW05, 700, normal, NimbusSansW05-Bold);\n.loadFont(EurostileNextW05, 700, normal, EurostileNextW05-ExtBold);\n.loadFont(Diploma, 400, normal, Diploma);\n.loadFont(BrushScriptMT, 400, normal, BrushScriptMT);\n.loadFont(BankGothicBT, 400, normal, BankGothicBT-Medium);\n.loadFont(MeltdownRegular, 400, normal, MeltdownRegular-Normal);\n.loadFont(SharkSnackRegular, 400, normal, SharkSnackRegular-Normal);\n.loadFont(GTAArtDeco, 400, normal, GTAArtDeco-Regular);\n.loadFont(GTAArtDeco, 500, normal, GTAArtDeco-Medium);\n\n// RDR Fonts\n.loadFont(RDRLino-Regular);\n.loadFont(HapnaSlabSerif, 400, normal, HapnaSlabSerif-DemiBold);\n.loadFont(HapnaSlabSerif, 700, normal, HapnaSlabSerif-ExtraBold);\n.loadFont(nightmar, 100, normal);\n.loadFont(RDRCatalogueBold, 700, normal, RDRCatalogueBold-Bold);\n.loadFont(RDRUltraHeadline, 400, normal, RDRUltraHeadline);\n\n.setRootFontSizing();\n\n* {\n    box-sizing: border-box;\n}\na {\n    color: inherit;\n    text-decoration: none;\n}\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np {\n    margin: 0;\n}\n\nfigure {\n    margin: 0;\n}\n\ncaption,\nfigcaption {\n    display: block;\n    margin: var(--grid-gap-static-sm) auto 0;\n    .handlePadding(var(--padding-sides), initial);\n    font-family: var(--font-family-std);\n    font-size: var(--font-size-2);\n    text-align: center;\n    font-style: italic;\n    color: var(--body-color);\n\n    p {\n        display: block;\n    }\n}\n\n// RSG Typography (default)\n--font-family-std: var(--rsg-font-family-std);\n--font-family-h: var(--rsg-font-family-h);\n--font-family-h-halloween: nightmar;\n\n// Russian\n:lang(ru_ru) {\n    --font-family-h-halloween: RDRLino-Regular;\n}\n\n// Korean\n:lang(ko_kr) {\n    word-break: keep-all;\n}\n\n.handleFontDeclarations;\n.handleColors;\n\n// GTA Type Scale\n.gta({\n    --font-family-std: var(--gta-font-family-std);\n    --font-family-h: var(--gta-font-family-h);\n    --letter-spacing-h: 0;\n    --line-height-h1: 1;\n    --font-weight-newswire-subtitle: 400;\n    --letter-spacing-std: 0;\n    --color-h: #fff;\n    --body-color: #e8e8e8;\n\n    .themeDark;\n\n    .sm({--header-numerator: 20.8;});\n    .md({--header-numerator: 23.4;});\n    .lg({--header-numerator: 26;});\n    .xl({--header-numerator: 29.25;});\n\n    .handleFontDeclarations;\n    .handleColors;\n\n    .badge {\n        font-family: var(--gta-font-family-badge);\n    }\n});\n\n// Polish\n:lang(pl_pl) {\n    .gta({\n      --font-family-h: ChaletComprime, NeueHelveticaW05;\n      --font-family-newswire-subtitle: ChaletComprime, NeueHelveticaW05;\n      --badge-font: Pricedown, NeueHelveticaW05;\n   });\n    [data-context='newswire-article'] h1 {\n        --font-family-h: NeueHelveticaPaneuropean;\n    }\n}\n\n// Russian\n:lang(ru_ru) {\n    .gta({\n      --font-family-h: NeueHelveticaW05;\n      --font-family-newswire-subtitle: NeueHelveticaW05;\n      --badge-font: Pricedown, NeueHelveticaW05;\n   });\n    [data-context='newswire-article'] h1 {\n        --font-family-h: NeueHelveticaW05;\n    }\n}\n\n// Chinese (Simplified)\n:lang(zh_hans) {\n    .gta({\n      --font-family-h: NotoSansSC;\n      --font-family-newswire-subtitle: NotoSansSC;\n      --font-family-std: NotoSansSC;\n      --badge-font: Pricedown, NotoSansSC;\n   });\n}\n\n// Chinese (Traditional)\n:lang(zh_hant) {\n    .gta({\n      --font-family-h: NotoSansTC;\n      --font-family-newswire-subtitle: NotoSansTC;\n      --font-family-std: NotoSansTC;\n      --badge-font: Pricedown, NotoSansTC;\n   });\n}\n\n// Japanese\n:lang(ja_jp) {\n    .gta({\n      --font-family-h: NotoSansJP;\n      --font-family-newswire-subtitle: NotoSansJP;\n      --font-family-std: NotoSansJP;\n      --badge-font: Pricedown, NotoSansJP;\n   });\n    [data-context='newswire-article'] h1 {\n        --font-family-h: NotoSansJP;\n    }\n}\n\n// Korean\n:lang(ko_kr) {\n    .gta({\n      --font-family-h: NotoSansKR;\n      --font-family-newswire-subtitle: NotoSansKR;\n      --font-family-std: NotoSansKR;\n      --badge-font: Pricedown, NotoSansKR;\n   });\n}\n\n// RDR Type Scale\n.rdr({\n    --font-family-std: var(--rdr-font-family-std);\n    --font-family-h: var(--rdr-font-family-h);\n    --font-family-newswire-subtitle: var(--rdr-font-family-newswire-subtitle);\n    --area-font: var(--rdr-area-font);\n    --font-weight-h: 400;\n    --font-weight-h1: 400;\n    --font-weight-h3: 400;\n    --font-weight-newswire-subtitle: 700;\n    --h3-numerator-override-newswire-subtitle: 1;\n    --letter-spacing-h: 0;\n    --line-height-h: 1.2;\n    --letter-spacing-std: 0;\n    --text-transform-newswire-subtitle: initial;\n    --color-h: #cc0000;\n    --color-h3: white;\n    --color-h4: white;\n    --body-color: #e8e8e8;\n    --text-transform-h: uppercase;\n\n    .themeDark;\n\n    .sm({--header-numerator: 15;});\n    .md({--header-numerator: 16.88;});\n    .lg({--header-numerator: 18.75;});\n    .xl({--header-numerator: 21.09;});\n\n    .handleFontDeclarations;\n    .handleColors;\n});\n\n// Polish\n:lang(pl_pl) {\n    .rdr({\n      --font-family-h: RDRLino-Regular;\n      --font-family-newswire-subtitle: HapnaSlabSerif;\n      --font-family-std: HapnaSlabSerif;\n      --badge-font: RDRLino-Regular;\n   });\n}\n\n// Chinese (Simplified)\n:lang(zh_hans) {\n    .rdr({\n      --font-family-h: NotoSerifSC;\n      --font-family-newswire-subtitle: NotoSansSC, ;\n      --font-family-std: NotoSansSC;\n      --area-font: NotoSansSC;\n      --badge-font: RDRLino-Regular, NotoSerifSC;\n   });\n}\n\n// Chinese (Traditional)\n:lang(zh_hant) {\n    .rdr({\n      --font-family-h: NotoSerifTC;\n      --font-family-newswire-subtitle: NotoSansTC;\n      --font-family-std: NotoSansTC;\n      --area-font: NotoSansTC;\n      --badge-font: RDRLino-Regular, NotoSerifTC;\n   });\n}\n\n// Japanese\n:lang(ja_jp) {\n    .rdr({\n      --font-family-h: NotoSerifJP;\n      --font-family-newswire-subtitle: NotoSansJP;\n      --font-family-std: NotoSansJP;\n      --area-font: NotoSansJP;\n      --badge-font: RDRLino-Regular, NotoSerifTC;\n   });\n}\n\n// Korean\n:lang(ko_kr) {\n    .rdr({\n      --font-family-h: NotoSerifKR;\n      --font-family-newswire-subtitle: NotoSansKR;\n      --font-family-std: NotoSansKR;\n      --area-font: NotoSansKR;\n      --badge-font: RDRLino-Regular, NotoSerifKR;\n   });\n}\n", "// Font Family\n--font-family-body: 'Chalet';\n--font-family-h: 'ChaletComprime';\n\n// Font Weight\n--font-weight-regular: 400;\n--font-weight-bold: 700;\n\n// Letter Spacing\n--letter-spacing-body: 0;\n--letter-spacing-h: 0;\n\n// Line Height\n--line-height-sm: 1;\n--line-height-md: 1.1;\n--line-height-lg: 1.6;\n\n// Colors\n--black-200: #000000;\n--black-100: #121212;\n--black-65: rgba(18, 18, 18, 0.65);\n--black-40: rgba(18, 18, 18, 0.4);\n--black-15: rgba(18, 18, 18, 0.15);\n--text-dark: #2d2d2d;\n--border-color: #2d2d2d;\n\n--white-100: #ffffff;\n--white-65: rgba(255, 255, 255, 0.65);\n--white-40: rgba(255, 255, 255, 0.4);\n--white-15: rgba(255, 255, 255, 0.15);\n--text-light: #e8e8e8;\n\n--focusring-blue: blue;\n--red: #e03232;\n--circoloco-red: #eb1818;\n--rockstar-gold: #fcaf17;\n--playstation-blue: #00439c;\n--microsoft-green: #387a26;\n--pc-legacy: #b2b2b2;\n/* #if PCALT */\n--pc-enhanced: #beb279;\n/* #endif */\n\n--color-h: var(--white-100);\n--color-body: var(--text-light);\n\n--green-light: #c1f7bd;\n--green-dark: #81da85;\n\n// Scrollbar Colors\n--scroll-thumb-color: #7d7d7d;\n--scroll-track-color: transparent;\n\n// Max-Widths\n--max-width-sm: 640px;\n--max-width-md: 1088px;\n--max-width-lg: 1920px;\n--max-width-xl: 2560px;\n.xxl({--max-width-md: 1440px;});\n\n// Spacing\n--spacing-xxs: 0.25rem;\n--spacing-xs: 0.5rem;\n--spacing-sm: 1rem;\n--spacing-md: 2rem;\n--spacing-lg: 4rem;\n--spacing-xl: 8rem;\n.smMax({--spacing-lg: 2rem; --spacing-xl: 4rem;});\n\n// Grid Gap\n--grid-gap-xxs: var(--spacing-xxs);\n--grid-gap-xs: var(--spacing-xs);\n--grid-gap-sm: var(--spacing-sm);\n--grid-gap-md: var(--spacing-md);\n--grid-gap-lg: var(--spacing-lg);\n--grid-gap-xl: var(--spacing-xl);\n\n// Padding\n--padding-xxs: var(--spacing-xxs);\n--padding-xs: var(--spacing-xs);\n--padding-sm: var(--spacing-sm);\n--padding-md: var(--spacing-md);\n--padding-lg: var(--spacing-lg);\n--padding-xl: var(--spacing-xl);\n\n// Margin\n--margin-xxs: var(--spacing-xxs);\n--margin-xs: var(--spacing-xs);\n--margin-sm: var(--spacing-sm);\n--margin-md: var(--spacing-md);\n--margin-lg: var(--spacing-lg);\n--margin-xl: var(--spacing-xl);\n\n// Border Radius\n--border-radius-xs: 2px;\n--border-radius-sm: 4px;\n--border-radius-md: 8px;\n--border-radius-lg: 16px;\n\n// Gradients\n--gradient-overlay-bottom: linear-gradient(\n    180.08deg,\n    rgba(0, 0, 0, 0) 25%,\n    rgba(0, 0, 0, 0.5) 65%,\n    rgba(0, 0, 0, 0.6) 100%\n);\n--gradient-overlay-right: linear-gradient(\n    270deg,\n    rgba(0, 0, 0, 0.9) 0%,\n    rgba(0, 0, 0, 0) 100%\n);\n\n// Z-indicies\n--promo-banner-z-index: 11500;\n", "@import '@rsgweb/legacy-design-system/less/gen9-mixins';\n\n@global-navigation-breakpoint-mobile: 1024px;\n\n.globalNavVars() {\n    .resetVariables();\n    @import './typography.less';\n    @import '@rsgweb/legacy-design-system/less/gen9-vars.less';\n    \n    --font-family-h: HelveticaNowDisplayBold;\n    --font-family-body: HelveticaNowText;\n\n    --text-light: #e8e8e8;\n    \n    .sm({--base-rem-size: 16px;});\n    .md({--base-rem-size: 18px;});\n    .lg({--base-rem-size: 20px;});\n    .xl({--base-rem-size: 22px;});\n    \n    --rem-025: calc(var(--base-rem-size) * 0.25);\n    --rem-05: calc(var(--base-rem-size) * 0.5);\n    --rem-075: calc(var(--base-rem-size) * 0.75);\n    --rem-1: var(--base-rem-size);\n    --rem-125: calc(var(--base-rem-size) * 1.25);\n    --rem-15: calc(var(--base-rem-size) * 1.5);\n    --rem-2: calc(var(--base-rem-size) * 2);\n    --rem-3: calc(var(--base-rem-size) * 3);\n    --rem-4: calc(var(--base-rem-size) * 4);\n    --rem-6: calc(var(--base-rem-size) * 6);\n    --rem-8: calc(var(--base-rem-size) * 8);\n    \n    --spacing-xxs: var(--rem-025);\n    --spacing-xs: var(--rem-05);\n    --spacing-sm: var(--rem-1);\n    --spacing-md: var(--rem-2);\n    --spacing-lg: var(--rem-4);\n    --spacing-xl: var(--rem-8);\n    \n    \n    font-family: var(--font-family-body);\n    \n    --global-navigation-background: rgba(0, 0, 0, 0.85);\n    --global-navigation-border-color: #282828;\n    --global-navigation-box-shadow: 0px 8px 20px 0px rgba(0, 0, 0, 0.7);\n    --global-navigation-height: 80px;\n\n    --base-rem-size: var(--base-rem-size);\n    --mobile-nav-padding-sides: 32px;\n    --mobile-nav-item-padding: 20px var(--mobile-nav-padding-sides);\n\n    --nav-icon-size: var(--rem-1);\n    --nav-link-size: calc(var(--base-rem-size) * 0.75);\n    --sub-nav-indent: var(--spacing-sm);\n    --sub-nav-min-width: 240px;\n\n    .mdMax ({\n        --nav-icon-size: var(--rem-125);\n        --nav-link-size: calc(var(--base-rem-size) * 1.25);\n        --sub-nav-indent: var(--spacing-md);\n    });\n}", "/*\nThis CSS resource incorporates links to web font and font software which is the valuable copyrighted property of House Industries and/or its suppliers. You expressly agree to not copy, install, redistribute, convert, modify, or reverse engineer this font software or the fonts rendered thereby. Please contact House Industries with any questions regarding Web Fonts: http://www.houseind.com\n*/\n\n@import '@rsgweb/legacy-design-system/less/gen9-mixins';\n@import '@rsgweb/legacy-design-system/less/typography';\n\n.loadFont(HelveticaNowDisplayBold, 700, normal);\n.loadFont(HelveticaNowText, 400, normal);\n\n:root {\n    --font-family-h: HelveticaNowDisplayBold;\n    --font-family-body: HelveticaNowText;\n}\n\n// Localized Fonts\n// Polish\n:lang(pl_pl),\n:lang(pl-PL) {\n    --font-family-h: NeueHelveticaPaneuropean;\n    --font-family-std: NeueHelveticaPaneuropean;\n}\n// Russian\n:lang(ru_ru),\n:lang(ru-RU) {\n    --font-family-h: NeueHelveticaPaneuropean;\n    --font-family-body: NeueHelveticaPaneuropean;\n}\n\n[data-type-lang='pl'],\n[data-type-lang='ru'] {\n    font-family: NeueHelveticaPaneuropean !important;\n}\n\n// Chinese (Simplified)\n:lang(zh_hans),\n:lang(zh-CN) {\n    --font-family-h: ChaletComprime, NotoSansSC;\n    --font-family-body: NotoSansSC;\n}\n[data-type-lang='zh'] {\n    font-family: ChaletComprime, NotoSansSC !important;\n}\n\n// Chinese (Traditional)\n:lang(zh_tw),\n:lang(zh-TW) {\n    --font-family-h: ChaletComprime, NotoSansTC;\n    --font-family-body: NotoSansTC;\n}\n[data-type-lang='tw'] {\n    font-family: ChaletComprime, NotoSansTC !important;\n}\n\n// Japanese\n:lang(ja_jp),\n:lang(ja-JP) {\n    --font-family-h: HelveticaNowDisplayBold, NotoSansJP;\n    --font-family-body: HelveticaNowText, NotoSansJP;\n}\n[data-type-lang='jp'] {\n    font-family: HelveticaNowText, NotoSansJP !important;\n}\n\n// Korean\n:lang(ko_kr),\n:lang(ko-KR) {\n    --font-family-h: ChaletComprime, NotoSansKR;\n    --font-family-body: NotoSansKR;\n}\n[data-type-lang='kr'] {\n    font-family: ChaletComprime, NotoSansKR !important;\n}\n"],
        sourceRoot: ""
      }]), xa.locals = {
        pillBtn: "rockstargames-modules-core-headerb3978c01af4cdbe62e1bd704f1e5642a",
        selected: "rockstargames-modules-core-headerd89d3d1eec6c5bd71ccb21cee0ab387a",
        globalNavigationRoot: "rockstargames-modules-core-headerae9bf34db42d6efdfffcd58c35bf499e",
        large: "rockstargames-modules-core-headerd74f7b16fd048bff6fa85b999865ae4c",
        badge: "rockstargames-modules-core-headerd9f1030abbf43b4dca938748cd2971f6",
        globalNavigationSpacer: "rockstargames-modules-core-headerde436e3db259eb0f31d67c3597d8b8fd",
        globalNavigationSearchSpacer: "rockstargames-modules-core-headerf5becd5edc3ccc807f80e476aaf0a923",
        globalNavigationContainer: "rockstargames-modules-core-headercdf77b768c87c4f69cdc9f249e664436",
        header: "rockstargames-modules-core-headerb6b45ba1e342fd31738d08621f64dcf4",
        fluid: "rockstargames-modules-core-headera5621119fecf77af162314e4f58e3bf4",
        fixed: "rockstargames-modules-core-headerb0b5cfbe2c5745a3dae3bc5d2a659d0c",
        title: "rockstargames-modules-core-headere3074d7d0504de5ecbc3f71e8ff47931",
        quickAccessWrapper: "rockstargames-modules-core-headera0ac1e76ac3363eae9fc0b8dc016c4f6"
      };
      const He = xa
    },
    64435: (a, e, n) => {
      n.d(e, {
        A: () => d
      });
      var t = n(42587),
        o = n.n(t),
        r = n(15081),
        i = n.n(r)()(o());
      i.push([a.id, ".rockstargames-modules-core-headere0f9901f132a6332c84193e3d7602251{border:1px solid var(--border-color);border-radius:4px;box-shadow:0 0 40px -25px transparent;flex-grow:1;overflow:hidden;transition:transform .3s cubic-bezier(0,0,.5,1),box-shadow .3s cubic-bezier(0,0,.5,1)}.rockstargames-modules-core-headere0f9901f132a6332c84193e3d7602251:hover{box-shadow:0 30px 40px -25px #000;transform:scale(1.025)}@media screen and (min-width:1024px){.rockstargames-modules-core-headere0f9901f132a6332c84193e3d7602251{width:20%}}.rockstargames-modules-core-headere0f9901f132a6332c84193e3d7602251 a{aspect-ratio:.81/1;display:block}.rockstargames-modules-core-headere0f9901f132a6332c84193e3d7602251 a:focus-visible{border:1px solid var(--white-100);outline:none}.rockstargames-modules-core-headere0f9901f132a6332c84193e3d7602251 img{display:block;width:100%}", "", {
        version: 3,
        sources: ["webpack://./compositional/modules/GamesMenu/components/GamesCard/index.less", "webpack://./../../buildtime/legacy-design-system/less/mixins.less"],
        names: [],
        mappings: "AAEA,mEAEI,oCAAA,CACA,iBAAA,CCsqBA,qCAAA,CDxqBA,WAAA,CAGA,eAAA,CCkqBA,qFDloBJ,CCuoBI,yEAEI,iCAAA,CADA,sBDpoBR,CAjCI,qCAAA,mEACI,SAoCN,CACF,CA7CA,qEAaQ,kBAAA,CADA,aAqCR,CAlCQ,mFAEI,iCAAA,CADA,YAqCZ,CArDA,uEAuBQ,aAAA,CADA,UAmCR",
        sourcesContent: ["@import '@rsgweb/legacy-design-system/less/mixins.less';\n\n.gameCard {\n    flex-grow: 1;\n    border: 1px solid var(--border-color);\n    border-radius: 4px;\n    overflow: hidden;\n    .cardHover();\n\n    @media screen and (min-width: 1024px) {\n        width: 20%;\n    }\n\n    a {\n        display: block;\n        aspect-ratio: 0.81/1;\n\n        &:focus-visible {\n            outline: none;\n            border: 1px solid var(--white-100);\n        }\n    }\n\n    img {\n        width: 100%;\n        display: block;\n    }\n}\n", "/*\n * New Design System:\n * 1. Breakpoints\n * 2. Typography\n * 3. Variables\n * 4. Utility\n *     4.1 Flex\n *     4.2 Grid\n *     4.3 Max-Width\n *     4.4 Images\n *     4.5 Padding\n *     4.6 Fonts\n *     4.7 Games\n *     4.8 Tina\n *     4.9 Hacks\n * 5. Presentational\n */\n\n/* 1. Breakpoints */\n@screen-sm: 0px;\n@screen-md: 768px;\n@screen-lg: 1024px;\n@screen-xl: 1920px;\n@screen-xxl: 2560px;\n@sm-min-width: @screen-sm;\n@md-min-width: @screen-md;\n@lg-min-width: @screen-lg;\n@xl-min-width: @screen-xl;\n@xxl-min-width: @screen-xxl;\n@sm-max-width: (@md-min-width - 1px);\n@md-max-width: (@lg-min-width - 1px);\n@lg-max-width: (@xl-min-width - 1px);\n@xl-max-width: (@xxl-min-width - 1px);\n\n.sm(@rules) {\n    .smMin(@rules);\n}\n.smMin(@rules) {\n    @media (min-width: @sm-min-width) {\n        @rules();\n    }\n}\n.smMax(@rules) {\n    @media (max-width: @sm-max-width) {\n        @rules();\n    }\n}\n.smOnly(@rules) {\n    @media (min-width: @sm-min-width) and (max-width: @sm-max-width) {\n        @rules();\n    }\n}\n.md(@rules) {\n    .mdMin(@rules);\n}\n.mdMin(@rules) {\n    @media (min-width: @md-min-width) {\n        @rules();\n    }\n}\n.mdMax(@rules) {\n    @media (max-width: @md-max-width) {\n        @rules();\n    }\n}\n.mdOnly(@rules) {\n    @media (min-width: @md-min-width) and (max-width: @md-max-width) {\n        @rules();\n    }\n}\n.lg(@rules) {\n    .lgMin(@rules);\n}\n.lgMin(@rules) {\n    @media (min-width: @lg-min-width) {\n        @rules();\n    }\n}\n.lgMax(@rules) {\n    @media (max-width: @lg-max-width) {\n        @rules();\n    }\n}\n.lgOnly(@rules) {\n    @media (min-width: @lg-min-width) and (max-width: @lg-max-width) {\n        @rules();\n    }\n}\n.xl(@rules) {\n    .xlMin(@rules);\n}\n.xlMin(@rules) {\n    @media (min-width: @xl-min-width) {\n        @rules();\n    }\n}\n.xlMax(@rules) {\n    @media (max-width: @xl-max-width) {\n        @rules();\n    }\n}\n.xlOnly(@rules) {\n    @media (min-width: @xl-min-width) and (max-width: @xl-max-width) {\n        @rules();\n    }\n}\n.xxl(@rules) {\n    .xxlMin(@rules);\n}\n.xxlMin(@rules) {\n    @media (min-width: @xxl-min-width) {\n        @rules();\n    }\n}\n\n.notoBackup(@varName; @stdFont) {\n    @{varName}: @stdFont;\n\n    &:lang(ja_jp) {\n        @{varName}: @stdFont, NotoSansJP;\n    }\n    &:lang(zh_hans) {\n        @{varName}: @stdFont, NotoSansSC;\n    }\n    &:lang(zh_tw) {\n        @{varName}: @stdFont, NotoSansTC;\n    }\n}\n\n/* 2. Typography */\n.handleFontDeclarations() {\n    .notoBackup(--rsg-font-family-std, HelveticaNowText);\n    .notoBackup(--rsg-font-family-h, HelveticaNowDisplayBold);\n    .notoBackup(--gta-font-family-std, Chalet);\n    .notoBackup(--gta-font-family-h, ChaletComprime);\n    .notoBackup(--gta-font-family-badge, Pricedown);\n    .notoBackup(--rdr-font-family-std, HapnaSlabSerif);\n    .notoBackup(--rdr-font-family-h, RDRLino-Regular);\n    .notoBackup(--rdr-font-family-newswire-subtitle, HapnaSlabSerif);\n    .notoBackup(--rdr-area-font, RDRCatalogueBold);\n\n    --header-multiplier: var(--header-numerator, var(--root-font-size)) /\n        var(--root-font-size);\n    font-family: var(--font-family-std, HelveticaNowText);\n    font-weight: var(--font-weight-std, 400);\n    letter-spacing: var(--letter-spacing-std, -0.025em);\n    line-height: var(--line-height-std, 1.6);\n    font-size: calc(var(--root-font-size) * 1px);\n    -webkit-font-smoothing: antialiased;\n\n    h1.large,\n    h1,\n    h2,\n    h3,\n    h4 {\n        font-family: var(--font-family-h, HelveticaNowDisplayBold);\n        letter-spacing: var(--letter-spacing-h, -0.025em);\n    }\n    h1.large,\n    h1 {\n        font-weight: var(--font-weight-h1, var(--font-weight-h, 700));\n        text-transform: var(--text-transform-h1, var(--text-transform-h, none));\n        line-height: var(--line-height-h1, var(--line-height-h, 1.1));\n    }\n\n    h1.large {\n        font-size: calc(var(--font-size-8) * var(--header-multiplier));\n    }\n    h1 {\n        font-size: calc(var(--font-size-7) * var(--header-multiplier));\n    }\n    h2 {\n        font-size: calc(var(--font-size-6) * var(--header-multiplier));\n        font-weight: var(--font-weight-h2, var(--font-weight-h, 700));\n        text-transform: var(--text-transform-h2, var(--text-transform-h, none));\n        line-height: var(--line-height-h, 1.1);\n    }\n    h3 {\n        font-size: calc(var(--font-size-5) * var(--header-multiplier));\n        font-weight: var(--font-weight-h3, var(--font-weight-h, 700));\n        text-transform: var(--text-transform-h3, var(--text-transform-h, none));\n        line-height: var(--line-height-h, 1.1);\n\n        &[data-context='newswire-subtitle'] {\n            font-size: calc(\n                var(--font-size-5) *\n                    var(\n                        --h3-numerator-override-newswire-subtitle,\n                        var(--header-multiplier)\n                    )\n            );\n            font-weight: var(\n                --font-weight-newswire-subtitle,\n                var(--font-weight-h)\n            );\n            font-family: var(\n                --font-family-newswire-subtitle,\n                var(--font-family-h)\n            );\n            text-transform: var(--text-transform-newswire-subtitle);\n        }\n\n        .isRdr({\n            font-weight: var(--font-weight-h3, var(--font-weight-h, 400));\n        });\n    }\n\n    h4,\n    h5,\n    h6 {\n        font-size: calc(var(--font-size-4) * var(--header-multiplier));\n        line-height: var(--line-height-h, 1.1);\n    }\n}\n\n.handleColors() {\n    h1.large,\n    h1 {\n        color: var(--color-h-dynamic, var(--color-h1, var(--color-h, inherit)));\n    }\n    h2 {\n        color: var(--color-h-dynamic, var(--color-h2, var(--color-h, inherit)));\n    }\n    h3 {\n        color: var(--color-h-dynamic, var(--color-h3, var(--color-h, inherit)));\n\n        &[data-context='newswire-subtitle'] {\n            color: var(\n                --color-subtitle-dynamic,\n                var(--color-h-dynamic, var(--color-h3, var(--color-h, inherit)))\n            );\n        }\n    }\n    h4,\n    h5,\n    h6 {\n        color: var(--color-h-dynamic, var(--color-h, inherit));\n    }\n    background-color: var(--background-color, transparent);\n\n    [template='community'] {\n        --time-color: var(--body-color, #2d2d2d);\n        --breadcrumb-separator-filter-invert: invert(0);\n\n        main {\n            color: var(--color-h, #161616);\n        }\n        p {\n            color: var(--body-color, #2d2d2d);\n        }\n    }\n}\n\n/* 3. Variables */\n.resetVariables() {\n    --text-section-max-width: 640px;\n    --base-pixel-size: 12px;\n    --base-rem-size: 0.75rem;\n    --half-rem-size: calc(var(--base-rem-size) / 2);\n    --twice-rem-size: calc(var(--base-rem-size) * 2);\n    --section-margin-bottom: calc(var(--base-rem-size) * 4);\n    --header-height: 80px;\n    --breadcrumbs-height: calc(var(--base-pixel-size) * 3.5);\n    --max-width: 1920px;\n    --standard-color: #fcaf17;\n    --color-h: #ffffff;\n    --body-color: #e8e8e8;\n    --background-color: #0b0b0b;\n    --card-background-color: #000;\n    --border-color: #282828;\n    --privacy-banner-height: 0px;\n    --game-header-height: 50px;\n    --standard-grid-gap: calc(var(--base-rem-size) * 2);\n    --image-margin-bottom: inherit;\n    --image-rounding: 0px;\n    --image-rounding-static: 16px;\n    --image-rounding-static-sm: 8px;\n    --image-rounding-static-xs: 4px;\n\n    --grid-gap-static-xs: 0.5rem;\n    --grid-gap-static-sm: 1rem;\n    --grid-gap-static-md: 2rem;\n    --grid-gap-static-lg: 4rem;\n    --grid-gap-static-xl: 8rem;\n    .smMax({--grid-gap-static-lg: 2rem; --grid-gap-static-xl: 4rem;});\n\n    --max-width-static: 640px;\n    --max-width-static-md: 1088px;\n    --max-width-static-lg: 1920px;\n    --max-width-static-xl: 2560px;\n    .xxlMin({--max-width-static-md: 1440px;});\n\n    --margin-static: 0 0 2rem;\n    --h2-margin: 2rem 0 0 0;\n\n    --padding-sides: var(--grid-gap-static-lg);\n    --padding-top-bottom: var(--padding-sides);\n    --padding-static: var(--padding-sides);\n}\n\n/* 4. Utility */\n/* 4.1 Flex */\n.flex() {\n    display: flex;\n    flex-flow: column;\n}\n.horizontalCenterChildren() {\n    display: flex;\n    justify-content: center;\n}\n.verticalCenterChildren() {\n    display: flex;\n    align-items: center;\n}\n.flexCenterChildren() {\n    .horizontalCenterChildren();\n    .verticalCenterChildren();\n}\n\n/* 4.2 Grid */\n.gridMinWidth(@minWidth: 480px; @rowGap: var(--standard-grid-gap); @colGap: var(--standard-grid-gap); @autoType: 'auto-fit') {\n    display: grid;\n    grid-row-gap: @rowGap;\n    grid-column-gap: @colGap;\n    grid-template-columns: ~'repeat(@{autoType}, minmax(@{minWidth}, 1fr))';\n}\n.gridHideExtraRows(@colGap: var(--standard-grid-gap)) {\n    ::-webkit-scrollbar {\n        display: none;\n    }\n    -ms-overflow-style: none;\n    display: grid;\n    grid-auto-flow: column;\n    grid-column-gap: @colGap;\n    overflow-y: hidden;\n    scroll-snap-type: x mandatory;\n    > * {\n        scroll-snap-align: start;\n    }\n    --per-page: 4;\n    .lgMax({--per-page: 3;});\n    .mdMax({--per-page: 2;});\n    .smMax({--per-page: 1;});\n\n    grid-auto-columns: calc(\n        100% / var(--per-page) - (var(--per-page) - 1) / var(--per-page) *\n            @colGap\n    );\n}\n.gridNumCols(@numInitialItems) {\n    display: grid;\n    grid-gap: var(--standard-grid-gap);\n    .smMax({grid-template-columns: repeat(1, minmax(0px, 1fr)) ;});\n    @media screen and (min-width: @screen-sm) and (max-width: @md-max-width) {\n        grid-template-columns: repeat(2, minmax(0px, 1fr));\n    }\n    @media screen and (min-width: @screen-lg) {\n        grid-template-columns: repeat(4, minmax(0px, 1fr));\n    }\n}\n.gridNumColsSmall(@colGap: var(--padding-top-bottom); @rowGap: var(--padding-top-bottom)) {\n    display: grid;\n    grid-row-gap: @rowGap;\n    grid-column-gap: @colGap;\n    grid-template-columns: repeat(1, minmax(0px, 1fr));\n    .md({grid-template-columns: repeat(2, minmax(0px, 1fr)) ;});\n}\n\n.standardLayoutGridItem(@maxWidth: var(--max-width-static-md), @padding: var(--padding-static)) {\n    .handleMaxWidth(@maxWidth);\n    .handlePadding(@padding);\n}\n\n.handleGridStyles(@grid-gap-dynamic: var(--grid-gap-static-md)) {\n    --grid-gap-dynamic: @grid-gap-dynamic;\n    display: grid;\n    grid-template-columns: repeat(var(--grid-num-columns, 1), minmax(0px, 1fr));\n    grid-template: var(\n        --grid-template-override,\n        auto / repeat(var(--grid-num-columns, 1), minmax(0, 1fr))\n    );\n    grid-gap: var(--grid-gap-dynamic);\n    align-items: var(--grid-align-items);\n    align-content: var(--grid-align-content);\n    align-self: var(--grid-align-self);\n    justify-items: var(--grid-justify-items);\n    justify-content: var(--grid-justify-content);\n    justify-self: var(--grid-justify-self);\n}\n\n/* 4.3 Max-Width */\n.maxWidth(@padding: 0) {\n    max-width: var(--max-width);\n    width: 100%;\n    margin: 0 auto;\n    padding-left: @padding;\n    padding-right: @padding;\n}\n.maxWidthWithNormalPadding() {\n    .maxWidth(var(--padding-sides));\n}\n\n.handleMaxWidth(@max-width-default: 1000000px) {\n    width: 100%;\n    max-width: calc(\n        var(--max-width-dynamic, @max-width-default) +\n            var(--padding-dynamic, 0px) * 2\n    ) !important;\n    margin: 0 auto;\n}\n\n.breakout(@max-width-default: 100vw) {\n    @margin: calc((@max-width-default / 2) * -1);\n    width: @max-width-default;\n    max-width: @max-width-default !important;\n    position: relative;\n    left: 50%;\n    right: 50%;\n    margin-left: @margin;\n    margin-right: @margin;\n}\n\n.fullWidth() {\n    .breakout;\n}\n\n/* 4.4 Images */\n.handleAspectRatio() {\n    --aspect-ratio-default: 1;\n    .lgMin({\n        --aspect-ratio-default: 16/9;\n    });\n\n    position: relative;\n    &:before {\n        content: '';\n        height: 0;\n        width: 100%;\n        display: block;\n        padding-bottom: calc(\n            100% / calc(var(--aspect-ratio, var(--aspect-ratio-default)))\n        );\n    }\n    > * {\n        position: absolute;\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 100%;\n    }\n}\n.setAspectRatio(@ratio) {\n    --aspect-ratio: @ratio;\n    .handleAspectRatio;\n}\n\n.handleParallaxPerspective() {\n    position: fixed;\n    width: 100%;\n    height: 100%;\n    overflow-x: hidden;\n    overflow-y: scroll;\n    perspective: var(--parallax-perspective);\n    perspective-origin: 0 0;\n}\n.handleParallaxDistance() {\n    transform: translateZ(var(--parallax-distance))\n        scale(\n            calc(\n                (var(--parallax-perspective) - var(--parallax-distance)) /\n                    var(--parallax-distance)\n            )\n        );\n}\n\n.handleImageRounding() {\n    border-radius: var(--image-rounding-dynamic, 0px);\n}\n\n/* 4.5 Padding */\n.handlePadding(@paddingSides: initial, @paddingTopBottom: initial) {\n    --padding-dynamic: @paddingSides;\n    --padding-dynamic-tb: @paddingTopBottom;\n\n    padding: var(--padding-t, var(--padding-dynamic-tb, 0))\n        var(--padding-dynamic, 0) var(--padding-b, var(--padding-dynamic-tb, 0))\n        var(--padding-dynamic, 0);\n}\n\n/* 4.6 Fonts */\n.loadFont(@family, @weight: 400, @style: normal, @file: @family) {\n    @font-face {\n        font-family: @family;\n        font-style: @style;\n        font-weight: @weight;\n        src: url('../fonts/@{file}.woff') format('woff');\n    }\n}\n.loadFontWoff2(@family, @weight: 400, @style: normal, @file: @family) {\n    @font-face {\n        font-family: @family;\n        font-style: @style;\n        font-weight: @weight;\n        src: url('../fonts/@{file}.woff2') format('woff2');\n    }\n}\n.fontClip(@backgroundImg) {\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n    @backgroundImg();\n}\n\n/* 4.7 Games */\n.gta(@rules) {\n    [data-game^='gta'] {\n        @rules();\n    }\n}\n\n.isGta(@rules) {\n    [data-game^='gta'] & {\n        @rules();\n    }\n}\n\n.rdr(@rules) {\n    [data-game='rdo'],\n    [data-game^='rdr'] {\n        @rules();\n    }\n}\n\n.isRdr(@rules) {\n    [data-game='rdo'] &,\n    [data-game^='rdr'] & {\n        @rules();\n    }\n}\n\n/* 4.8 Tina */\n.tinaTextField() {\n    padding: var(--tina-padding-small);\n    border-radius: var(--tina-radius-small);\n    background: var(--tina-color-grey-0);\n    color: var(--tina-color-grey-10);\n    background-color: var(--tina-color-grey-0);\n    border: 1px solid var(--tina-color-grey-2);\n    box-shadow: 0 0 0 2px transparent;\n    margin-bottom: 14px;\n}\n\n/* 4.9 Hacks */\n.safariBorderRadiusOverflowFix() {\n    // https://stackoverflow.com/questions/49066011/overflow-hidden-with-border-radius-not-working-on-safari\n    -webkit-mask-image: -webkit-radial-gradient(white, black);\n}\n\n.forceGpuRendering() {\n    // https://web.dev/animations-guide/#force\n    transform: translateZ(0);\n}\n\n/* 5. Presentational */\n@locales: en_us, fr_fr, de_de, es_es, es_mx, it_it, pt_br, pl_pl, ru_ru, ja_jp,\n    ko_kr, zh_tw, zh_hans;\n\n.placeholder(@rules) {\n    &::-webkit-input-placeholder {\n        @rules();\n    }\n    &:-moz-placeholder {\n        @rules();\n    }\n    &::-moz-placeholder {\n        @rules();\n    }\n    &:-ms-input-placeholder {\n        @rules();\n    }\n}\n\n.bgImg() {\n    background-size: cover;\n    background-position: center center;\n    background-repeat: no-repeat;\n}\n\n.themeDark() {\n    color: #e8e8e8;\n    --tag-color: #e8e8e8;\n}\n\n.outbound() {\n    content: '';\n    display: inline-block;\n    background-size: 100%;\n    background-repeat: no-repeat;\n    background-position: 0% 50%;\n    vertical-align: baseline;\n    margin-left: var(--grid-gap-static-xs);\n    width: 1rem;\n    height: 1rem;\n    background-image: data-uri('../img/outbound.svg');\n}\n\n.blurryBg() {\n    transition: filter 0.8s;\n    filter: blur(var(--blur-because-in-bg, 0px));\n}\n\n.fancyLink() {\n    position: relative;\n    background: transparent;\n    padding: 0;\n    z-index: 1;\n    @media (min-width: @screen-sm) {\n        transition: all 0.2s ease;\n        &:before {\n            content: '';\n            display: block;\n            position: absolute;\n            bottom: 0;\n            left: -0.1rem;\n            width: calc(100% + 0.2rem);\n            height: 2px;\n            background: var(--body-color);\n            transition: all 0.2s ease;\n            z-index: -1;\n            border-radius: 0.25rem;\n        }\n        &:hover {\n            color: #161616;\n\n            &:before {\n                left: -0.25rem;\n                width: calc(100% + 0.5rem);\n                height: 100%;\n            }\n        }\n    }\n    img {\n        display: block;\n    }\n}\n.stdHover() {\n    transition:\n        color 0.2s ease,\n        opacity 0.2s ease;\n    &:hover {\n        color: var(--standard-color);\n        opacity: 1;\n    }\n}\n.stdIconHover() {\n    &:hover {\n        filter: brightness(0) saturate(100%) invert(76%) sepia(15%)\n            saturate(5173%) hue-rotate(348deg) brightness(105%) contrast(98%);\n    }\n}\n.card() {\n    .handleImageRounding;\n    --image-rounding-dynamic: var(--image-rounding-static-sm);\n    background: var(--card-background-color);\n    overflow: hidden;\n    display: flex;\n    flex-flow: column;\n    transition: transform 0.2s ease;\n    border: 1px solid var(--border-color);\n    .info {\n        .handleGridStyles;\n        --grid-gap-dynamic: var(--grid-gap-static-xs);\n        padding: 2rem 1.5rem;\n        .title {\n            --line-height-h: 1.3;\n            color: var(--color-h);\n        }\n    }\n}\n\n.cardHover() {\n    transition:\n        transform 0.3s cubic-bezier(0, 0, 0.5, 1),\n        box-shadow 0.3s cubic-bezier(0, 0, 0.5, 1);\n    box-shadow: 0px 0px 40px -25px rgba(0, 0, 0, 0);\n\n    &:hover {\n        transform: scale(1.025);\n        box-shadow: 0px 30px 40px -25px rgba(0, 0, 0, 1);\n    }\n}\n\n.cardSecondary() {\n    .card();\n    .info {\n        padding: 1.5rem;\n    }\n    .title {\n        font-size: var(--font-size-3);\n        font-weight: 400;\n    }\n}\n\n.cardTertiary() {\n    .cardSecondary();\n    --image-rounding-dynamic: 0;\n    --card-background-color: transparent;\n    grid-gap: var(--grid-gap-static-sm);\n    overflow: unset;\n    border: none;\n    .info {\n        padding: 0;\n    }\n    .img {\n        .handleImageRounding;\n        --image-rounding-dynamic: var(--image-rounding-static-sm);\n    }\n}\n\n.standardPage() {\n    .maxWidthWithNormalPadding;\n    padding-top: var(--padding-top-bottom);\n    padding-bottom: var(--padding-top-bottom);\n}\n\n.dropdownThing(@defaultDeg: 0deg; @openDeg: 180deg) {\n    position: relative;\n    padding-right: calc(var(--grid-gap-static-xs) + 24px);\n    .dropdownCaret(yellow; @defaultDeg; @openDeg);\n}\n.dropdownCaret(@color; @defaultDeg: 0deg; @openDeg: 180deg) {\n    &:after {\n        display: inline-block;\n        content: '';\n        position: absolute;\n        top: 0;\n        right: 0;\n        @img: '../img/dropdown-@{color}.svg';\n        background-image: data-uri(@img);\n        background-repeat: no-repeat;\n        width: image-width(@img);\n        height: 100%;\n        background-position: center;\n        background-size: 100%;\n        transform: rotate(@defaultDeg);\n        transition: transform 0.3s;\n        .open& {\n            transform: rotate(@openDeg);\n        }\n    }\n}\n\n.sectionHeader() {\n    margin: 0 0 1.5rem;\n    font-size: var(--font-size-5);\n    font-family: var(--font-family-h);\n    font-weight: var(--font-weight-h);\n    --line-height-h: 1.3;\n\n    .xlMin ({\n        font-size: var(--font-size-6);\n    });;\n}\n.sectionHeaderSmall() {\n    .sectionHeader;\n    font-size: var(--font-size-4);\n\n    .xlMin ({\n        font-size: var(--font-size-5);\n    });;\n}\n\n.tag() {\n    color: var(--tag-color, var(--body-color));\n    font-weight: 700;\n    font-size: var(--font-size-2);\n    line-height: 1.6;\n}\n\n.date() {\n    .tag;\n    font-weight: 400;\n    opacity: 0.65;\n}\n.animationFadeInUp() {\n    :global {\n        animation: globalFadeInUp 0.75s;\n        animation-play-state: paused;\n    }\n}\n.animationPaused() {\n    animation-play-state: paused;\n}\n.animationRunning() {\n    animation-play-state: running;\n}\n\n.button() {\n    font-weight: 700;\n    align-self: center;\n    display: inline-block;\n    text-transform: uppercase;\n    background: transparent;\n    border: 1px solid var(--color-h);\n    padding: 1rem 3rem;\n    color: inherit;\n    cursor: pointer;\n    border-radius: 0.25rem;\n    color: var(--color-h);\n    line-height: 100%;\n    transition: all 0.2s ease;\n    &:focus,\n    &:hover {\n        background: var(--standard-color);\n        border-color: var(--standard-color);\n        color: #161616;\n    }\n    &.secondary {\n        .fancyLink;\n        outline: none;\n        border: none;\n        text-transform: none;\n        font-weight: 400;\n        line-height: unset;\n        .smMin ({\n            &:before {\n                background: var(--standard-color);\n                height:4px;\n            }\n            &:focus,\n            &:hover {\n                &:before {\n                    left: -0.5rem;\n                    width: calc(100% + 1rem);\n                    height: 100%;\n                }\n            }\n         });;\n    }\n    &[disabled] {\n        opacity: 0.5;\n    }\n}\n\n.expandToEdges() {\n    margin-top: calc(var(--padding-top-bottom) * -1);\n    margin-left: calc(var(--padding-sides) * -1);\n    width: 100vw;\n    width: calc(100% + calc(var(--padding-sides) * 2));\n}\n\n.shadow(@boxShadow: 0 10px 30px rgba(0, 0, 0, 0.5)) {\n    // border: 1px solid rgba(0, 0, 0, 0.15);\n    box-shadow: @boxShadow;\n}\n.shadowTop() {\n    box-shadow: -3px -3px 6px 0 rgba(0, 0, 0, 0.2);\n}\n\n.aspect-ratio(@width, @height, @selector: div, @pre: ~'') {\n    @supports not (aspect-ratio: @width / @height) {\n        position: relative;\n        &:before {\n            display: block;\n            content: '';\n            width: 100%;\n            padding-top: calc((@height / @width) * 100%);\n        }\n        > @{pre}@{selector} {\n            position: absolute;\n            top: 0;\n            left: 0;\n            right: 0;\n            bottom: 0;\n            width: 100% !important;\n            height: 100% !important;\n        }\n    }\n\n    @supports (aspect-ratio: @width / @height) {\n        @{pre}@{selector} {\n            aspect-ratio: @width / @height !important;\n            width: 100% !important;\n            height: auto !important;\n        }\n    }\n}\n.unset-aspect-ratio(@selector, @pre: ~'') {\n    @supports not (aspect-ratio: 1/1) {\n        position: unset;\n        &:before {\n            display: none;\n        }\n        > @{pre}@{selector} {\n            position: unset;\n            width: 100% !important;\n            height: unset !important;\n        }\n    }\n\n    @supports (aspect-ratio: 1/1) {\n        @{pre}@{selector} {\n            aspect-ratio: unset !important;\n        }\n    }\n}\n\n.rockstarTypography() {\n    --font-family-std: NeueHelveticaPaneuropean, sans-serif;\n    --leter-spacing-std: 0;\n\n    font-size: var(--font-size-2);\n    font-family: var(--font-family-std);\n    letter-spacing: var(--leter-spacing-std);\n\n    button {\n        letter-spacing: var(--leter-spacing-std);\n    }\n}\n\n.setNodeFontSizing() {\n    // TODO audit this. .5rem is very small.\n    --font-size-1: 0.75rem;\n\n    --font-size-2: 0.75rem;\n    --font-size-3: 1rem;\n    --font-size-4: 1.25rem;\n    --font-size-5: 1.5rem;\n    --font-size-6: 2rem;\n    --font-size-7: 2.5rem;\n    --font-size-8: 3rem;\n    --font-size-9: 4rem;\n    --font-size-10: 5rem;\n}\n\n.setRootFontSizing() {\n    .sm({--root-font-size: 16;});\n    .md({--root-font-size: 18;});\n    .lg({--root-font-size: 20;});\n    .xl({--root-font-size: 22;});\n}\n\n.button-text () {\n    font-size: var(--font-size-4);\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-sm);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-h);\n    text-transform: uppercase;\n}\n\n.button-text-sm () {\n    .button-text;\n    font-size: var(--font-size-3);\n}\n\n.button-text-md () {\n    .button-text;\n    font-size: var(--font-size-4);\n    padding: 0 var(--padding-md);\n}\n\n.button-text-lg () {\n    .button-text;\n    font-size: var(--font-size-5);\n    padding: 0 var(--padding-lg);\n}\n\n.button-text-xl () {\n    .button-text;\n    font-size: var(--font-size-7);\n    padding: 0 var(--padding-xl);\n}\n\n.cta-button() {\n    @import '../less/gen9-vars';\n\n    --button-text-color-hover: var(--white-100);\n\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: center;\n    gap: var(--grid-gap-xs, 0.5rem);\n\n    background: var(\n        --button-background-color,\n        var(--black-65, hsla(0, 0%, 7%, 0.65))\n    );\n    border: 1px solid var(--white-100, #fff);\n    border-radius: var(--border-radius-sm, 4px);\n    color: var(--button-text-color, var(--white-100));\n    cursor: pointer;\n    padding: 0 var(--padding-sm);\n\n    width: 100%;\n    height: var(--button-height-3, 3rem);\n\n    transition: all 0.3s ease-in-out;\n\n    &[data-brand='reddeadredemption'],\n    [data-brand='reddeadredemption'] & {\n        --accent-color: #cc0000;\n        --font-family-h: RDRUltra;\n\n        :lang(pl_pl) {\n            --font-family-h: RDRUltra, NeueHelveticaPaneuropean;\n        }\n    }\n\n    &[data-brand='bully'],\n    [data-brand='bully'] & {\n        --accent-color: #f8ad00;\n        --font-family-h: HelveticaNowDisplayBold;\n        --button-background-color: var(--white-100);\n        --button-background-color-hover: var(--accent-color);\n        --button-text-color: var(--black-100);\n        --button-text-color-hover: var(--black-100);\n\n        backdrop-filter: blur(25px);\n        padding: 0 var(--padding-md, 32px);\n    }\n\n    img {\n        height: 1rem;\n        width: auto;\n    }\n\n    .label {\n        .button-text();\n        display: flex;\n        flex-shrink: 0;\n    }\n\n    &.primary {\n        color: var(--black-100);\n        background-color: var(--white-100);\n    }\n\n    &:hover {\n        border-color: var(--accent-color, var(--btn-active-color));\n        background-color: var(--accent-color, var(--btn-active-color));\n        color: var(--button-text-color-hover, var(--btn-active-color));\n\n        &.primary {\n            color: var(--button-text-color-hover, var(--white-100));\n        }\n    }\n\n    @media (min-width: 1280px) {\n        padding: 0 var(--padding-md);\n    }\n\n    @media (min-width: 768px) and (max-width: 1539px) {\n        height: 2.5rem;\n\n        img {\n            height: 1rem;\n        }\n\n        .label {\n            .button-text-sm();\n        }\n    }\n}\n"],
        sourceRoot: ""
      }]), i.locals = {
        gameCard: "rockstargames-modules-core-headere0f9901f132a6332c84193e3d7602251"
      };
      const d = i
    },
    28140: (a, e, n) => {
      n.d(e, {
        A: () => d
      });
      var t = n(42587),
        o = n.n(t),
        r = n(15081),
        i = n.n(r)()(o());
      i.push([a.id, ".rockstargames-modules-core-headercae5df759f802aa04900e0b40597ba48{align-items:center;background:var(--white-15);border:none;border-radius:100px;color:var(--white-100);cursor:pointer;display:flex;font-family:var(--font-family-body);font-size:20px;font-style:normal;font-weight:700;justify-content:center;line-height:var(--rem-125);min-width:var(--rem-6);padding:var(--padding-xs) var(--padding-sm);text-align:center;transition:background-color .3s ease-in-out}.rockstargames-modules-core-headercae5df759f802aa04900e0b40597ba48 img{height:var(--nav-icon-size);margin-left:var(--grid-gap-xs);transition:filter .3s ease-in-out;width:var(--nav-icon-size)}.rockstargames-modules-core-headercae5df759f802aa04900e0b40597ba48:focus,.rockstargames-modules-core-headercae5df759f802aa04900e0b40597ba48:hover{background-color:var(--white-40);outline:none}.rockstargames-modules-core-headercae5df759f802aa04900e0b40597ba48.rockstargames-modules-core-headerc1d01988f20547a303ca62d99b0beee4{background:var(--white-100);color:var(--black-200)}.rockstargames-modules-core-headercae5df759f802aa04900e0b40597ba48.rockstargames-modules-core-headerc1d01988f20547a303ca62d99b0beee4 img{filter:invert()}.rockstargames-modules-core-headerf01964ebb2d62c8bd7d7ad3df1d818a4{left:0;position:absolute;right:0}.rockstargames-modules-core-headerdb2039d0fa02404c1e032ddafe358efd{border-bottom:1px solid var(--global-navigation-border-color);flex-direction:column;padding:var(--rem-3) 0;z-index:99}.rockstargames-modules-core-headerdb2039d0fa02404c1e032ddafe358efd,.rockstargames-modules-core-headerb2d95a9777e140a30958fbd98a9fb053{align-items:center;display:flex;width:100%}.rockstargames-modules-core-headerb2d95a9777e140a30958fbd98a9fb053{justify-content:space-between;margin-bottom:var(--rem-1);max-width:1920px;padding:0 var(--rem-4)}.rockstargames-modules-core-headerb2d95a9777e140a30958fbd98a9fb053 .rockstargames-modules-core-headerbacc5a58858921d497c7752942deb135{font-family:var(--font-family-h);font-size:var(--rem-15)}.rockstargames-modules-core-headerb2d95a9777e140a30958fbd98a9fb053 .rockstargames-modules-core-headera4f8eb74ae350f61ed4b4fffa4d8ff8d{align-items:center;display:flex;font-family:var(--font-family-body);font-size:20px;font-style:normal;font-weight:700;line-height:100%;text-transform:uppercase}.rockstargames-modules-core-headerb2d95a9777e140a30958fbd98a9fb053 .rockstargames-modules-core-headera4f8eb74ae350f61ed4b4fffa4d8ff8d img{margin-left:var(--grid-gap-xxs);width:ar(--rem-1)}.rockstargames-modules-core-headere104ee1bbcd8b04a2ea224fdccd9bb67{align-content:flex-start;align-items:flex-start;display:flex;gap:var(--grid-gap-sm);max-width:1920px;padding:0 var(--rem-4);width:100%}.rockstargames-modules-core-headercaea3404775ed365d2f4aef72c9990dc{background:var(--black-100);border-radius:0;box-shadow:var(--global-navigation-box-shadow);height:0;left:0!important;opacity:1!important;overflow:hidden;position:absolute;right:0;width:100%;z-index:99;z-index:100}.rockstargames-modules-core-headerfe834e50d3f69cf38cdc43eb2a6d7d89{padding:0}.rockstargames-modules-core-headerfe834e50d3f69cf38cdc43eb2a6d7d89 .swiper-scrollbar{background:var(--swiper-scrollbar-bg-color,rgba(0,0,0,.1));border-radius:var(--swiper-scrollbar-border-radius,10px);position:relative;touch-action:none}.rockstargames-modules-core-headerfe834e50d3f69cf38cdc43eb2a6d7d89 .swiper-scrollbar.swiper-scrollbar-disabled,.rockstargames-modules-core-headera6e13c807485e2f4de5e219ba255f912>.rockstargames-modules-core-headerfe834e50d3f69cf38cdc43eb2a6d7d89 .swiper-scrollbar{display:none!important}.rockstargames-modules-core-headerfe834e50d3f69cf38cdc43eb2a6d7d89 .swiper-scrollbar.swiper-scrollbar-horizontal,.rockstargames-modules-core-headerc5d5a6c2ae5bc35a9ce9fa397ffe3508>.rockstargames-modules-core-headerfe834e50d3f69cf38cdc43eb2a6d7d89 .swiper-scrollbar{bottom:var(--swiper-scrollbar-bottom,4px);height:var(--swiper-scrollbar-size,4px);left:var(--swiper-scrollbar-sides-offset,1%);position:absolute;top:var(--swiper-scrollbar-top,auto);width:calc(100% - 2 * var(--swiper-scrollbar-sides-offset, 1%));z-index:50}.rockstargames-modules-core-headerfe834e50d3f69cf38cdc43eb2a6d7d89 .swiper-scrollbar.swiper-scrollbar-vertical,.rockstargames-modules-core-headerde108a391289bb293ca8f15ddccf6fd0>.rockstargames-modules-core-headerfe834e50d3f69cf38cdc43eb2a6d7d89 .swiper-scrollbar{height:calc(100% - 2 * var(--swiper-scrollbar-sides-offset, 1%));left:var(--swiper-scrollbar-left,auto);position:absolute;right:var(--swiper-scrollbar-right,4px);top:var(--swiper-scrollbar-sides-offset,1%);width:var(--swiper-scrollbar-size,4px);z-index:50}.rockstargames-modules-core-headerfe834e50d3f69cf38cdc43eb2a6d7d89 .swiper-scrollbar-drag{background:var(--swiper-scrollbar-drag-bg-color,rgba(0,0,0,.5));border-radius:var(--swiper-scrollbar-border-radius,10px);height:100%;left:0;position:relative;top:0;width:100%}.rockstargames-modules-core-headerfe834e50d3f69cf38cdc43eb2a6d7d89 .swiper-scrollbar-cursor-drag{cursor:move}.rockstargames-modules-core-headerfe834e50d3f69cf38cdc43eb2a6d7d89 .swiper-scrollbar-lock{display:none}.rockstargames-modules-core-headerfe834e50d3f69cf38cdc43eb2a6d7d89 .swiper{padding:0 var(--spacing-md) var(--spacing-sm)}.rockstargames-modules-core-headerefbf909442a1564a3efb261ef928345d{align-items:baseline;display:flex;justify-content:space-between;padding:var(--spacing-sm) var(--spacing-md)}.rockstargames-modules-core-headerefbf909442a1564a3efb261ef928345d h2{font-family:var(--font-family-body);font-size:var(--nav-link-size);margin:0}.rockstargames-modules-core-headerefbf909442a1564a3efb261ef928345d a{align-items:center;color:inherit;display:flex;font-size:calc(var(--base-rem-size) * .75);font-weight:700;letter-spacing:0;line-height:100%;padding:0;text-decoration:none;text-transform:uppercase}.rockstargames-modules-core-headerefbf909442a1564a3efb261ef928345d a img{margin-left:calc(var(--base-rem-size) * .25);width:var(--base-rem-size)}.rockstargames-modules-core-headerb673908f44e71f1c48537b69a244eaf5 .swiper-wrapper{box-sizing:initial;display:flex;height:100%;position:relative;transition-duration:0ms;transition-property:transform;width:100%;z-index:1}.rockstargames-modules-core-headerdf455110c72d70cc653582db9d812af6{flex-shrink:0;height:100%;position:relative;transition-property:transform;width:100%}", "", {
        version: 3,
        sources: ["webpack://./../../buildtime/legacy-design-system/less/gen9-mixins.less", "webpack://./compositional/modules/GamesMenu/index.less", "webpack://./../../../../node_modules/swiper/modules/scrollbar.less"],
        names: [],
        mappings: "AA2QA,mEAKI,kBAAA,CAGA,0BAAA,CAFA,WAAA,CACA,mBAAA,CAIA,sBAAA,CAQA,cAAA,CAlBA,YAAA,CAYA,mCAAA,CACA,cAAA,CACA,iBAAA,CACA,eAAA,CAZA,sBAAA,CAaA,0BAAA,CAfA,sBAAA,CACA,2CAAA,CASA,iBAAA,CAQA,2CC9OJ,CD0NA,uEAwBQ,2BAAA,CADA,8BAAA,CAGA,iCAAA,CADA,0BC7OR,CDiPI,kJAEI,gCAAA,CACA,YC/OR,CDkPI,qIAEI,2BAAA,CADA,sBC/OR,CD8OI,yIAKQ,eChPZ,CAjEA,mEAEI,MAAA,CADA,iBAAA,CAEA,OAmEJ,CAhEA,mEAOI,6DAAA,CAEA,qBAAA,CARA,sBAAA,CACA,UAuEJ,CA3DA,sIAJI,kBAAA,CAFA,YAAA,CAGA,UAuEJ,CApEA,mEAEI,6BAAA,CAEA,0BAAA,CAGA,gBAAA,CAFA,sBA+DJ,CApEA,sIAUQ,gCAAA,CACA,uBA6DR,CAxEA,sIAsBQ,kBAAA,CADA,YAAA,CANA,mCAAA,CACA,cAAA,CACA,iBAAA,CACA,eAAA,CACA,gBAAA,CACA,wBA+DR,CAnFA,0IA0BY,+BAAA,CADA,iBA8DZ,CAxDA,mEAGI,wBAAA,CADA,sBAAA,CADA,YAAA,CAGA,sBAAA,CAEA,gBAAA,CADA,sBAAA,CAEA,UA0DJ,CAvDA,mEASI,2BAAA,CAEA,eAAA,CADA,8CAAA,CANA,QAAA,CACA,gBAAA,CAOA,mBAAA,CAJA,eAAA,CANA,iBAAA,CAIA,OAAA,CAHA,UAAA,CAFA,UAAA,CAMA,WA8DJ,CAnDA,mEACI,SAqDJ,CAtDA,qFC/DE,0DAAA,CAJA,wDAAA,CACA,iBAAA,CAEA,iBD0IF,CCxIE,uQAEE,sBD0IJ,CCxIE,yQAIE,yCAAA,CAGA,uCAAA,CAJA,4CAAA,CADA,iBAAA,CAGA,oCAAA,CAGA,+DAAA,CAFA,UD4IJ,CCxIE,uQAQE,gEAAA,CALA,sCAAA,CADA,iBAAA,CAEA,uCAAA,CACA,2CAAA,CAEA,sCAAA,CADA,UD4IJ,CAlGA,0FCjCE,+DAAA,CACA,wDAAA,CAJA,WAAA,CAKA,MAAA,CAHA,iBAAA,CAIA,KAAA,CALA,UD8IF,CA3GA,iGC3BE,WDyIF,CA9GA,0FCxBE,YDyIF,CAjHA,2EAOY,6CA6GZ,CAxGA,mEAII,oBAAA,CAFA,YAAA,CACA,6BAAA,CAFA,2CA6GJ,CA9GA,sEAQQ,mCAAA,CADA,8BAAA,CAEA,QA0GR,CAnHA,qEAiBQ,kBAAA,CAJA,aAAA,CAGA,YAAA,CAFA,0CAAA,CAMA,eAAA,CADA,gBAAA,CADA,gBAAA,CAIA,SAAA,CADA,oBAAA,CANA,wBAgHR,CA/HA,yEA0BY,4CAAA,CADA,0BA0GZ,CApGA,mFAEQ,kBAAA,CACA,YAAA,CACA,WAAA,CACA,iBAAA,CAIA,uBAAA,CAHA,6BAAA,CACA,UAAA,CACA,SAsGR,CAjGA,mEACI,aAAA,CACA,WAAA,CACA,iBAAA,CACA,6BAAA,CACA,UAmGJ",
        sourcesContent: ["@import 'mixins.less';\n\n// Headlines\n.headline-6 () {\n    font-size: calc(var(--font-size-3) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n.headline-5 () {\n    font-size: calc(var(--font-size-4) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n.headline-4 () {\n    font-size: calc(var(--font-size-5) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n.headline-3 () {\n    font-size: calc(var(--font-size-6) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n.headline-3-bold () {\n    .headline-3();\n    font-weight: var(--font-weight-bold);\n    color: var(--color-override, var(--color-h));\n}\n\n.headline-2 () {\n    font-size: calc(var(--font-size-7) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-bold);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n.headline-1 () {\n    font-size: calc(var(--font-size-8) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-bold);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n.xLarge () {\n    font-size: calc(var(--font-size-9) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-bold);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n// Body\n.body-xs () {\n    font-size: var(--font-size-1);\n    font-family: var(--font-family-body);\n    line-height: var(--line-height-lg);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-body);\n    color: var(--color-body);\n}\n\n.body-xs-bold () {\n    .body-xs;\n    font-weight: var(--font-weight-bold);\n    color: var(--color-body);\n}\n\n.body-sm () {\n    font-size: var(--font-size-2);\n    font-family: var(--font-family-body);\n    line-height: var(--line-height-lg);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-body);\n    color: var(--color-body);\n}\n\n.body-sm-bold () {\n    .body-sm;\n    font-weight: var(--font-weight-bold);\n    color: var(--color-body);\n}\n\n.body-md () {\n    font-size: var(--font-size-3);\n    font-family: var(--font-family-body);\n    line-height: var(--line-height-lg);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-body);\n    color: var(--color-body);\n}\n\n.body-md-bold () {\n    .body-md;\n    font-weight: var(--font-weight-bold);\n    color: var(--color-body);\n}\n\n.body-lg () {\n    font-size: var(--font-size-4);\n    font-family: var(--font-family-body);\n    line-height: var(--line-height-lg);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-body);\n    color: var(--color-body);\n}\n\n.body-lg-bold () {\n    .body-lg;\n    font-weight: var(--font-weight-bold);\n    color: var(--color-body);\n}\n\n.handleFontDeclarationsGen9() {\n    h1 {\n        .headline-1;\n    }\n    h2 {\n        .headline-2;\n    }\n    h3 {\n        .headline-3;\n    }\n    h4 {\n        .headline-4;\n    }\n    h5 {\n        .headline-5;\n    }\n    p {\n        .body-md;\n    }\n}\n\n.handleMaxWidth(@max-width-default: 1000000px) {\n    width: 100%;\n    max-width: calc(\n        var(--max-width-dynamic, @max-width-default) +\n            var(--padding-dynamic, 0px) * 2\n    ) !important;\n    margin: 0 auto;\n}\n\n.handlePadding(@paddingSides: initial, @paddingTopBottom: initial) {\n    --padding-dynamic: @paddingSides;\n    --padding-dynamic-tb: @paddingTopBottom;\n\n    padding: var(--padding-t, var(--padding-dynamic-tb, 0))\n        var(--padding-dynamic, 0) var(--padding-b, var(--padding-dynamic-tb, 0))\n        var(--padding-dynamic, 0);\n}\n\n.commonContent() {\n    .handlePadding(var(--padding-sides), 0);\n    .handleMaxWidth(var(--content-max-width));\n}\n\n.backgroundIcon(@icon) {\n    background: url('../icons/@{icon}.svg') no-repeat center/1rem;\n}\n\n@iconBtnConfig: {\n    @small: {\n        size: 2rem;\n    };\n    @large: {\n        size: 3rem;\n    };\n};\n\n.iconBtn(@icon, @size: small) {\n    @lookup: @size;\n    width: @iconBtnConfig[@@lookup][size];\n    height: @iconBtnConfig[@@lookup][size];\n    position: relative;\n    cursor: pointer;\n    background: var(--black-65, rgba(0, 0, 0, 0.65));\n    border: 1px solid var(--white-100, #fff);\n    border-radius: 50%;\n    padding: 0;\n    transition: background 0.3s ease-in-out;\n    &::after {\n        .backgroundIcon(@icon);\n        content: '';\n        display: block;\n        height: 100%;\n        width: 100%;\n        position: absolute;\n        left: 0;\n        top: 0;\n        transition: 0.3s ease-in-out;\n    }\n\n    &:focus {\n        outline: none;\n        border: none;\n    }\n\n    .isTouchscreen({\n        &:active {\n            background: var(--white-100, #fff);\n            &::after {\n                filter: invert(1);\n            }\n        }\n    }, {\n        &:hover,\n        &:focus {\n            background: var(--white-100, #fff);\n            &::after {\n                filter: invert(1);\n            }\n        }\n    });\n}\n\n.iconBtnPlain(@icon, @size: small) {\n    @lookup: @size;\n    width: @iconBtnConfig[@@lookup][size];\n    height: @iconBtnConfig[@@lookup][size];\n    position: relative;\n    cursor: pointer;\n    padding: 0;\n\n    &::after {\n        content: '';\n        display: block;\n        height: 100%;\n        width: 100%;\n        position: absolute;\n        left: 0;\n        top: 0;\n        transition: 0.3s ease-in-out;\n        background: url('../icons/@{icon}.svg') no-repeat center/1.5rem;\n    }\n}\n\n.swiperBtn(@icon) {\n    .iconBtn(@icon, large);\n    background: var(--black-200);\n    border-radius: 0;\n    border: none;\n    &::after {\n        background-size: 1.5rem;\n    }\n}\n\n.pillBtn {\n    display: flex;\n    min-width: var(--rem-6);\n    padding: var(--padding-xs) var(--padding-sm);\n    justify-content: center;\n    align-items: center;\n    border: none;\n    border-radius: 100px;\n    background: var(--white-15);\n    cursor: pointer;\n\n    color: var(--white-100);\n    text-align: center;\n    font-family: var(--font-family-body);\n    font-size: 20px;\n    font-style: normal;\n    font-weight: 700;\n    line-height: var(--rem-125);\n\n    cursor: pointer;\n    transition: background-color 0.3s ease-in-out;\n\n    img {\n        margin-left: var(--grid-gap-xs);\n        height: var(--nav-icon-size);\n        width: var(--nav-icon-size);\n        transition: filter 0.3s ease-in-out;\n    }\n\n    &:hover,\n    &:focus {\n        background-color: var(--white-40);\n        outline: none;\n    }\n\n    &.selected {\n        color: var(--black-200);\n        background: var(--white-100);\n\n        img {\n            filter: invert();\n        }\n    }\n}\n\n.setGen9Root() {\n    --gen9-max-width: 2560px;\n    --content-max-width: var(--gen9-max-width);\n    --padding-sides: var(--padding-lg);\n    --content-padding: 0 var(--padding-sides);\n    flex: 1;\n    display: flex;\n    justify-content: center;\n\n    .xl({\n        --padding-sides: var(--padding-xl);\n    });\n\n    .handleFontDeclarationsGen9();\n}\n\n.scrollFade() {\n    // @note: this is breaking on firefox.\n    mask-image: linear-gradient(\n        to bottom,\n        var(--black-100) calc(100% - 48px),\n        transparent calc(100% + 16px)\n    );\n}\n\n.scrollbar() {\n    /* Firefox */\n    scrollbar-width: auto;\n    scrollbar-color: var(--scroll-thumb-color) var(--scroll-track-color);\n\n    /* Chrome, Edge, and Safari */\n    &::-webkit-scrollbar {\n        width: 8px;\n    }\n    &::-webkit-scrollbar-track {\n        background: transparent;\n    }\n    &::-webkit-scrollbar-thumb {\n        background-color: var(--scroll-thumb-color);\n        border-radius: 10px;\n        border: none;\n    }\n}\n\n.ifElse(@condition, @if-styles, @else-styles) {\n    @media @condition {\n        @if-styles();\n    }\n    @media not (@condition) {\n        @else-styles();\n    }\n}\n\n.isTouchscreen(@if-styles, @else-styles) {\n    .ifElse(~'(pointer: coarse)', @if-styles, @else-styles);\n}\n\n.mobile-landscape(@rules) {\n    @media only screen and (min-width: 480px) and (max-width: 1023px) and (orientation: landscape) {\n        @rules();\n    }\n}\n\n.caret(@color) {\n    .dropdownCaret(@color);\n}\n\n.horizontalScrollFade() {\n    mask-image: linear-gradient(\n        to right,\n        transparent,\n        rgba(0, 0, 0, 0.3) calc(var(--padding-sides) / 2),\n        #000 var(--padding-sides),\n        #000 calc(100% - var(--padding-sides)),\n        rgba(0, 0, 0, 0.3) calc(100% - (var(--padding-sides) / 2)),\n        transparent\n    );\n}\n\n// Accessibility\n.visuallyHidden() {\n    border: 0;\n    clip: rect(0 0 0 0);\n    height: 1px;\n    overflow: hidden;\n    padding: 0;\n    position: absolute;\n    white-space: nowrap;\n    width: 1px;\n}\n", "@import '@rsgweb/legacy-design-system/less/gen9-mixins';\n\n.gamesSubMenu {\n    position: absolute;\n    left: 0;\n    right: 0;\n}\n\n.gamesMenu {\n    padding: var(--rem-3) 0;\n    z-index: 99;\n    // begin hack for QA test 2\n    // background-color: black;\n    // position: absolute;\n    // end hack for QA test 2\n    border-bottom: 1px solid var(--global-navigation-border-color);\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    width: 100%;\n}\n\n.titleBar {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    margin-bottom: var(--rem-1);\n    padding: 0 var(--rem-4);\n    width: 100%;\n    max-width: 1920px;\n\n    .menuTitle {\n        font-family: var(--font-family-h);\n        font-size: var(--rem-15);\n    }\n\n    .viewAllLink {\n        font-family: var(--font-family-body);\n        font-size: 20px;\n        font-style: normal;\n        font-weight: 700;\n        line-height: 100%; /* 20px */\n        text-transform: uppercase;\n        display: flex;\n        align-items: center;\n\n        img {\n            width: ar(--rem-1);\n            margin-left: var(--grid-gap-xxs);\n        }\n    }\n}\n\n.gameCards {\n    display: flex;\n    align-items: flex-start;\n    align-content: flex-start;\n    gap: var(--grid-gap-sm);\n    padding: 0 var(--rem-4);\n    max-width: 1920px;\n    width: 100%;\n}\n\n.gamesMenuContent {\n    z-index: 99;\n    position: absolute;\n    width: 100%;\n    height: 0;\n    left: 0!important;\n    right: 0;\n    z-index: 100;\n    overflow: hidden;\n    background: var(--black-100);\n    box-shadow: var(--global-navigation-box-shadow);\n    border-radius: 0;\n    opacity: 1 !important;\n}\n\n\n\n\n.gamesMenuMobile {\n    padding: 0;\n\n    :global {\n        @import (less) 'swiper/less/scrollbar';\n\n        .swiper {\n            padding: 0 var(--spacing-md) var(--spacing-sm);\n        }\n    }\n}\n\n.header {\n    padding: var(--spacing-sm) var(--spacing-md);\n    display: flex;\n    justify-content: space-between;\n    align-items: baseline;\n\n    h2 {\n        font-size: var(--nav-link-size);\n        font-family: var(--font-family-body);\n        margin: 0;\n    }\n\n    a {\n        color: inherit;\n        font-size: calc(var(--base-rem-size) * 0.75);\n        text-transform: uppercase;\n        display: flex;\n        align-items: center;\n        line-height: 100%;\n        letter-spacing: 0;\n        font-weight: 700;\n        text-decoration: none;\n        padding: 0;\n\n        img {\n            width: var(--base-rem-size);\n            margin-left: calc(var(--base-rem-size) * 0.25);\n        }\n    }\n}\n\n.slider {\n    :global(.swiper-wrapper) {\n        box-sizing: initial;\n        display: flex;\n        height: 100%;\n        position: relative;\n        transition-property: transform;\n        width: 100%;\n        z-index: 1;\n        transition-duration: 0ms;\n    }\n}\n\n.slide {\n    flex-shrink: 0;\n    height: 100%;\n    position: relative;\n    transition-property: transform;\n    width: 100%;\n}\n", ":root {\n  /*\n  --swiper-scrollbar-border-radius: 10px;\n  --swiper-scrollbar-top: auto;\n  --swiper-scrollbar-bottom: 4px;\n  --swiper-scrollbar-left: auto;\n  --swiper-scrollbar-right: 4px;\n  --swiper-scrollbar-sides-offset: 1%;\n  --swiper-scrollbar-bg-color: rgba(0, 0, 0, 0.1);\n  --swiper-scrollbar-drag-bg-color: rgba(0, 0, 0, 0.5);\n  --swiper-scrollbar-size: 4px;\n  */\n}\n.swiper-scrollbar {\n  border-radius: var(--swiper-scrollbar-border-radius, 10px);\n  position: relative;\n  -ms-touch-action: none;\n  touch-action: none;\n  background: var(--swiper-scrollbar-bg-color, rgba(0, 0, 0, 0.1));\n  .swiper-scrollbar-disabled > &,\n  &.swiper-scrollbar-disabled {\n    display: none !important;\n  }\n  .swiper-horizontal > &,\n  &.swiper-scrollbar-horizontal {\n    position: absolute;\n    left: var(--swiper-scrollbar-sides-offset, 1%);\n    bottom: var(--swiper-scrollbar-bottom, 4px);\n    top: var(--swiper-scrollbar-top, auto);\n    z-index: 50;\n    height: var(--swiper-scrollbar-size, 4px);\n    width: calc(100% - 2 * var(--swiper-scrollbar-sides-offset, 1%));\n  }\n  .swiper-vertical > &,\n  &.swiper-scrollbar-vertical {\n    position: absolute;\n    left: var(--swiper-scrollbar-left, auto);\n    right: var(--swiper-scrollbar-right, 4px);\n    top: var(--swiper-scrollbar-sides-offset, 1%);\n    z-index: 50;\n    width: var(--swiper-scrollbar-size, 4px);\n    height: calc(100% - 2 * var(--swiper-scrollbar-sides-offset, 1%));\n  }\n}\n.swiper-scrollbar-drag {\n  height: 100%;\n  width: 100%;\n  position: relative;\n  background: var(--swiper-scrollbar-drag-bg-color, rgba(0, 0, 0, 0.5));\n  border-radius: var(--swiper-scrollbar-border-radius, 10px);\n  left: 0;\n  top: 0;\n}\n.swiper-scrollbar-cursor-drag {\n  cursor: move;\n}\n.swiper-scrollbar-lock {\n  display: none;\n}\n"],
        sourceRoot: ""
      }]), i.locals = {
        pillBtn: "rockstargames-modules-core-headercae5df759f802aa04900e0b40597ba48",
        selected: "rockstargames-modules-core-headerc1d01988f20547a303ca62d99b0beee4",
        gamesSubMenu: "rockstargames-modules-core-headerf01964ebb2d62c8bd7d7ad3df1d818a4",
        gamesMenu: "rockstargames-modules-core-headerdb2039d0fa02404c1e032ddafe358efd",
        titleBar: "rockstargames-modules-core-headerb2d95a9777e140a30958fbd98a9fb053",
        menuTitle: "rockstargames-modules-core-headerbacc5a58858921d497c7752942deb135",
        viewAllLink: "rockstargames-modules-core-headera4f8eb74ae350f61ed4b4fffa4d8ff8d",
        gameCards: "rockstargames-modules-core-headere104ee1bbcd8b04a2ea224fdccd9bb67",
        gamesMenuContent: "rockstargames-modules-core-headercaea3404775ed365d2f4aef72c9990dc",
        gamesMenuMobile: "rockstargames-modules-core-headerfe834e50d3f69cf38cdc43eb2a6d7d89",
        "swiper-scrollbar-disabled": "rockstargames-modules-core-headera6e13c807485e2f4de5e219ba255f912",
        "swiper-horizontal": "rockstargames-modules-core-headerc5d5a6c2ae5bc35a9ce9fa397ffe3508",
        "swiper-vertical": "rockstargames-modules-core-headerde108a391289bb293ca8f15ddccf6fd0",
        header: "rockstargames-modules-core-headerefbf909442a1564a3efb261ef928345d",
        slider: "rockstargames-modules-core-headerb673908f44e71f1c48537b69a244eaf5",
        slide: "rockstargames-modules-core-headerdf455110c72d70cc653582db9d812af6"
      };
      const d = i
    },
    9517: (a, e, n) => {
      n.r(e), n.d(e, {
        default: () => A
      });
      var t = n(53178),
        o = n.n(t),
        r = n(94566),
        i = n.n(r),
        d = n(31610),
        s = n.n(d),
        l = n(82510),
        c = n.n(l),
        m = n(29284),
        g = {
          attributes: {
            "data-shadowTarget": "@rockstargames/modules-core-header"
          }
        };
      g.setAttributes = s(), g.insert = a => {
        const e = a.dataset.shadowtarget;
        e && (window.__MFE_GLOBAL_HOOK__ = {
          ...window.__MFE_GLOBAL_HOOK__,
          stylesForShadowRoot: {
            ...window.__MFE_GLOBAL_HOOK__?.stylesForShadowRoot,
            [e]: a
          }
        })
      }, g.domAPI = i(), g.insertStyleElement = c(), o()(m.A, g);
      const A = m.A && m.A.locals ? m.A.locals : void 0
    },
    71029: a => {
      a.exports = "data:image/jpeg;base64,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"
    },
    94222: a => {
      a.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/af22c6826e05c14923a3f11c69a2130c.svg"
    },
    10046: a => {
      a.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a29e26aa160e7be7e845708c335b3c39.svg"
    }
  }
]);