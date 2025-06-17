! function() {
  try {
    var a = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
      e = (new a.Error).stack;
    e && (a._sentryDebugIds = a._sentryDebugIds || {}, a._sentryDebugIds[e] = "668ff656-cba1-4758-92c1-4d6434a978e7", a._sentryDebugIdIdentifier = "sentry-dbid-668ff656-cba1-4758-92c1-4d6434a978e7")
  } catch (a) {}
}();
var _sentryModuleMetadataGlobal = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
_sentryModuleMetadataGlobal._sentryModuleMetadata = _sentryModuleMetadataGlobal._sentryModuleMetadata || {}, _sentryModuleMetadataGlobal._sentryModuleMetadata[(new _sentryModuleMetadataGlobal.Error).stack] = Object.assign({}, _sentryModuleMetadataGlobal._sentryModuleMetadata[(new _sentryModuleMetadataGlobal.Error).stack], {
  release: "sentry-release-id",
  packageName: "@rockstargames/modules-core-header",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
});
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_header = self.webpackChunk_rockstargames_modules_core_header || []).push([
  [904], {
    1707: (a, e, t) => {
      t.d(e, {
        Jv: () => k,
        QY: () => w,
        Kr: () => T,
        lt: () => j,
        bA: () => I,
        cu: () => L
      });
      var s = t(71127),
        n = t(42638),
        o = t(61339),
        r = t(24780),
        i = t(63694),
        d = t(63582),
        l = t(81788),
        g = t(54312),
        _ = t(96099),
        c = t(16586),
        m = t(64989),
        u = t(60520),
        v = t(45979);
      const p = "rockstargames-modules-core-headerc21d08286895e5d5d2fc1a7586c6a11d",
        f = "rockstargames-modules-core-headerb82b1a7297d0e2f91a3ac183adcb21c4",
        h = "rockstargames-modules-core-headerfa4a01e9a53561bce475cd223f7cafe1";
      var b = t(25854);
      const w = (0, s.createContext)({
          inAvatarMenu: !1,
          avatarMenuOpenItems: ["open"],
          closeAvatarMenu: () => {}
        }),
        M = {
          open: {
            opacity: 1
          },
          closed: {
            opacity: 0
          }
        },
        y = {
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
        x = {
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
        k = a => {
          let {
            avatarIconUrl: e,
            children: u
          } = a;
          const y = (0, l.useIntl)(),
            k = t(10046),
            [C, T] = (0, s.useState)(!1),
            [I, L] = (0, s.useState)(!1),
            [j, P] = (0, s.useState)(["open"]),
            {
              isNavHidden: S
            } = (0, s.useContext)(_.PY),
            N = a => {
              const e = ["open", ...a.filter((a => "open" !== a))];
              P(e)
            },
            B = () => {
              T(!1), L(!1)
            };
          return (0, s.useEffect)((() => {
            S && B()
          }), [S]), (0, b.jsxs)(w.Provider, {
            value: {
              inAvatarMenu: !0,
              avatarMenuOpenItems: j,
              closeAvatarMenu: B
            },
            children: [(0, b.jsx)(n.Root, {
              open: C,
              onOpenChange: T,
              children: (0, b.jsx)(c.E, {
                showOn: "desktop",
                children: (0, b.jsxs)("div", {
                  className: p,
                  children: [(0, b.jsx)(n.Trigger, {
                    asChild: !0,
                    children: (0, b.jsx)("button", {
                      className: f,
                      "aria-label": y.formatMessage(C ? m.A.avatar_menu_close : m.A.avatar_menu_open),
                      "data-testid": "avatarMenuButton",
                      children: (0, b.jsx)("img", {
                        className: h,
                        src: e || k
                      })
                    })
                  }), (0, b.jsx)(d.AnimatePresence, {
                    children: C && (0, b.jsx)(n.Content, {
                      forceMount: !0,
                      align: "end",
                      alignOffset: -40,
                      sideOffset: 24,
                      children: (0, b.jsx)(d.motion.div, {
                        variants: M,
                        initial: "closed",
                        animate: "open",
                        exit: "closed",
                        transition: {
                          duration: .2
                        },
                        children: (0, b.jsx)(o.Root, {
                          type: "multiple",
                          value: j,
                          onValueChange: N,
                          collapsible: !0,
                          children: (0, b.jsx)(g.aC, {
                            className: "rockstargames-modules-core-headerfbdd0b16d9b61ed0dd3f5e76b9a1f9de",
                            children: u
                          })
                        })
                      })
                    })
                  })]
                })
              })
            }), (0, b.jsx)(r.Root, {
              open: I,
              onOpenChange: L,
              children: (0, b.jsx)(c.E, {
                showOn: "mobile",
                children: (0, b.jsxs)("div", {
                  className: p,
                  children: [(0, b.jsx)(r.Trigger, {
                    className: f,
                    "aria-label": y.formatMessage(I ? m.A.avatar_menu_close : m.A.avatar_menu_open),
                    "data-testid": "avatarMenuButton",
                    children: (0, b.jsx)("img", {
                      className: h,
                      src: e || k
                    })
                  }), (0, b.jsx)(d.AnimatePresence, {
                    children: I && (0, b.jsx)(v.Z, {
                      asChild: !0,
                      children: (0, b.jsxs)(r.Content, {
                        forceMount: !0,
                        children: [(0, b.jsx)(i.VisuallyHidden, {
                          children: (0, b.jsx)(r.Title, {
                            children: y.formatMessage(m.A.nav_avatarmenu_title)
                          })
                        }), (0, b.jsxs)(d.motion.div, {
                          variants: x,
                          initial: "closed",
                          animate: "open",
                          exit: "closed",
                          transition: {
                            duration: .3
                          },
                          className: "rockstargames-modules-core-headerb68abcf23dae4ff8aa054bd9ff446a9a",
                          children: [(0, b.jsx)(r.Close, {
                            className: "rockstargames-modules-core-headeredeb54ea736b008d967474a5c9b63a33",
                            children: (0, b.jsx)("img", {
                              className: "rockstargames-modules-core-headerbe1cd057f4c550474a77b822a5eb729e",
                              src: "",
                              "aria-label": y.formatMessage(m.A.avatar_menu_close)
                            })
                          }), (0, b.jsx)(o.Root, {
                            type: "multiple",
                            value: j,
                            onValueChange: N,
                            collapsible: !0,
                            children: (0, b.jsx)(g.aC, {
                              className: "rockstargames-modules-core-headereef2738c4b5cf2f7e69238683d6d503f",
                              children: u
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
        C = (0, s.createContext)({
          avatarMenuItemId: ""
        }),
        T = a => {
          let {
            children: e,
            value: t
          } = a;
          const n = (0, s.useId)();
          return (0, b.jsx)(C.Provider, {
            value: {
              avatarMenuItemId: t || n
            },
            children: (0, b.jsx)(o.Item, {
              value: t || n,
              className: "rockstargames-modules-core-headerf43b908943d5a326555406c89c919f3a",
              children: e
            })
          })
        },
        I = a => {
          let {
            children: e,
            ...t
          } = a;
          return (0, b.jsx)(o.Header, {
            children: (0, b.jsx)(o.Trigger, {
              className: "rockstargames-modules-core-headerc63374d1c5bca5343c48709064ac9ecc",
              ...t,
              children: e
            })
          })
        },
        L = a => {
          let {
            children: e,
            ...t
          } = a;
          return (0, b.jsx)(o.Header, {
            children: (0, b.jsxs)(o.Trigger, {
              className: "rockstargames-modules-core-headerc2907f284a3a3dd7c419856bdb6a99ee",
              ...t,
              children: [e, (0, b.jsx)("img", {
                src: u.br,
                className: "rockstargames-modules-core-headerda0dbf9fd75e574727b5d795d7681bfd",
                alt: ""
              })]
            })
          })
        },
        j = a => {
          let {
            children: e,
            ...t
          } = a;
          const {
            avatarMenuOpenItems: n
          } = (0, s.useContext)(w), {
            avatarMenuItemId: r
          } = (0, s.useContext)(C), i = n.indexOf(r) >= 0;
          return (0, b.jsx)(o.Content, {
            forceMount: !0,
            asChild: !0,
            ...t,
            children: (0, b.jsx)(d.motion.div, {
              variants: y,
              initial: "closed",
              animate: i ? "open" : "closed",
              transition: {
                duration: .2
              },
              children: e
            })
          })
        }
    },
    10046: a => {
      a.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a29e26aa160e7be7e845708c335b3c39.svg"
    },
    16586: (a, e, t) => {
      t.d(e, {
        E: () => r
      });
      var s = t(21222);
      const n = {
        pillBtn: "rockstargames-modules-core-headerdab8756ef45d0360cfe667505e44e939",
        selected: "rockstargames-modules-core-headerade3ff1f5041701c0a98cb7198ece826",
        mobile: "rockstargames-modules-core-headerd46e4a60f402edcf62521fefd6a9289f",
        desktop: "rockstargames-modules-core-headerf1fc26697d7f376112d0fcd256b22a9a"
      };
      var o = t(25854);
      const r = a => {
        let {
          showOn: e,
          ...t
        } = a;
        return (0, o.jsx)(s.Slot, {
          className: e ? n[e] : "",
          ...t
        })
      }
    },
    45979: (a, e, t) => {
      t.d(e, {
        Z: () => l
      });
      var s = t(24036),
        n = t.n(s),
        o = t(34902),
        r = t(71127);
      var i = t(96099),
        d = t(25854);
      const l = a => {
        let {
          children: e,
          className: t,
          ...s
        } = a;
        const {
          containerRef: l
        } = (0, r.useContext)(i.PY);
        return (0, d.jsx)(o.Root, {
          className: n()("rockstargames-modules-core-headerd7897e1e3d81d97b95b02bdc6aa9a563", t),
          container: l?.current,
          ...s,
          children: e
        })
      }
    },
    54312: (a, e, t) => {
      t.d(e, {
        jd: () => R,
        W1: () => O,
        rm: () => F,
        Dr: () => z,
        w4: () => Y,
        cO: () => D,
        aC: () => J,
        cQ: () => E
      });
      var s = t(71127),
        n = t(81788),
        o = t(9046),
        r = t(74406);
      const i = "rockstargames-modules-core-headerf303c57e835ec31bf4213fb03aba17ef",
        d = "rockstargames-modules-core-headerda3bef6906347a4766f3e910c294774a",
        l = "rockstargames-modules-core-headerac2c298a9a02b68bb1d238b4f965d715",
        g = "rockstargames-modules-core-headerf905a8b31e0bab44202ab5722726c472",
        _ = "rockstargames-modules-core-headerddf1983ce836b67a33e2f08a1a5316a3",
        c = "rockstargames-modules-core-headera4788f15b7ea9665e8e186a03c86ca32",
        m = "rockstargames-modules-core-headerc55155ed6163d24327c5172a998ff912",
        u = "rockstargames-modules-core-headerfe55c83723647f4df2a5ba88baa866e2",
        v = "rockstargames-modules-core-headere02f603679059fd953b6b8ba3a637b60",
        p = "rockstargames-modules-core-headeree8b6e236dcc760405f887886740a954",
        f = "rockstargames-modules-core-headerc640bf864619b6a2296140ddb12e8475",
        h = "rockstargames-modules-core-headerbba8a763e416f3af074bb59987ec7834";
      var b = t(16586),
        w = t(60520),
        M = t(78618),
        y = t(24036),
        x = t.n(y),
        k = t(74956),
        C = t(63582);
      const T = function() {
        for (var a = arguments.length, e = new Array(a), t = 0; t < a; t++) e[t] = arguments[t];
        const s = e.filter(Boolean);
        return s.length <= 1 ? s[0] || null : function(a) {
          for (const e of s) "function" == typeof e ? e(a) : e && (e.current = a)
        }
      };
      var I = t(21222),
        L = t(1707),
        j = t(78211),
        P = t(64989),
        S = t(96099),
        N = t(25854);
      const B = a => {
          a.preventDefault()
        },
        A = (0, s.createContext)({
          inMenu: !1,
          openedNav: ""
        }),
        R = (0, s.createContext)({
          isHidden: !1
        }),
        O = a => {
          let {
            children: e
          } = a;
          const t = (0, n.useIntl)(),
            [r, i] = (0, s.useState)(""),
            [d, l] = (0, s.useState)(e),
            [g, _] = (0, s.useState)([]),
            c = (0, s.useRef)(null),
            m = (0, s.useRef)(null),
            {
              isNavHidden: u
            } = (0, s.useContext)(S.PY),
            v = (0, s.useCallback)((() => {
              const a = m.current;
              if (!a) return;
              const {
                children: t
              } = a;
              let n = 0;
              const o = Array.from(t).map(((a, e) => {
                  const t = a.getBoundingClientRect().top;
                  return 0 === e && (n = t), t
                })),
                r = o.filter((a => a !== n)).length,
                i = o.findIndex((a => a > n));
              let d = i;
              if (i > 0 && (d = i - 1), r) {
                const a = [],
                  t = [];
                s.Children.forEach(e, ((e, s) => {
                  s < d ? a.push(e) : t.push(e)
                })), a && l(a), t && _(t)
              } else l(e), _([])
            }), [e, m?.current]);
          return (0, s.useEffect)((() => {
            const a = new ResizeObserver(v);
            return m?.current && a.observe(m.current), () => {
              m?.current && a.unobserve(m.current)
            }
          }), [e, m?.current]), (0, s.useEffect)((() => {
            i("")
          }), [u]), (0, N.jsx)(A.Provider, {
            value: {
              inMenu: !0,
              openedNav: r
            },
            children: (0, N.jsx)(b.E, {
              showOn: "desktop",
              children: (0, N.jsxs)(o.Root, {
                className: "rockstargames-modules-core-headerd922c5fe52102c7e5c8bc3c42d010585",
                value: r,
                onValueChange: i,
                tabIndex: -1,
                children: [(0, N.jsxs)(D, {
                  ref: c,
                  className: "rockstargames-modules-core-headerec44e526244f48930351136a502341d5",
                  children: [d, g?.length > 0 && (0, N.jsxs)(z, {
                    children: [(0, N.jsx)(E, {
                      children: t.formatMessage(P.A.nav_more_dropdown)
                    }), (0, N.jsx)(F, {
                      children: (0, N.jsx)(J, {
                        children: (0, N.jsx)(D, {
                          children: g
                        })
                      })
                    })]
                  })]
                }), (0, N.jsx)(D, {
                  ref: m,
                  className: "rockstargames-modules-core-headerabf1a661e4902fa5712272e92f2de033",
                  "aria-hidden": "true",
                  children: (0, N.jsx)(R.Provider, {
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
        D = (0, s.forwardRef)((function(a, e) {
          let {
            children: t,
            className: s,
            ...n
          } = a;
          return (0, N.jsx)(o.List, {
            ref: e,
            className: x()("rockstargames-modules-core-headere463be3861d293e36d66bb8ab0c19645", s),
            ...n,
            children: t
          })
        })),
        G = (0, s.createContext)({
          value: ""
        }),
        z = (0, s.forwardRef)((function(a, e) {
          let {
            children: t,
            ...n
          } = a;
          const {
            depth: l
          } = (0, s.useContext)(H), {
            inMobileMenu: g
          } = (0, s.useContext)(k.xN), _ = (0, s.useRef)(null), c = `rsm-${(0,r.useId)()}`;
          return (0, N.jsx)(G.Provider, {
            value: {
              value: c,
              ref: _
            },
            children: (0, N.jsx)(o.Item, {
              value: c,
              ref: T(e, _),
              className: x()({
                [i]: !0,
                [d]: 1 === l && !g
              }),
              ...n,
              children: t
            })
          })
        })),
        E = (0, s.forwardRef)((function(a, e) {
          let {
            children: t,
            ...n
          } = a;
          const {
            inMenu: r
          } = (0, s.useContext)(A), {
            inAvatarMenu: i
          } = (0, s.useContext)(L.QY), {
            inQuickMenu: d
          } = (0, s.useContext)(j.s), {
            inMobileMenu: l
          } = (0, s.useContext)(k.xN), {
            inSubMenu: g,
            depth: _
          } = (0, s.useContext)(H);
          return (0, N.jsxs)(o.Trigger, {
            ref: e,
            onPointerMove: B,
            onPointerLeave: B,
            className: x()("rockstargames-modules-core-headerfaca5fabb7852e77e62aa1da55dfad31", {
              [m]: r,
              [v]: d,
              [u]: l,
              [p]: g,
              [f]: i,
              [h]: _ > 1
            }),
            ...n,
            children: [t, (0, N.jsx)("img", {
              src: w.br,
              className: "rockstargames-modules-core-headerec5d2c793461b20aed9bb78b399482ad",
              alt: ""
            })]
          })
        })),
        V = {
          open: {
            opacity: 1
          },
          closed: {
            opacity: 0
          }
        },
        q = {
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
        F = (0, s.forwardRef)((function(a, e) {
          let {
            children: t,
            animationOverride: n,
            ...r
          } = a;
          const {
            inSubMenu: i,
            openedNav: d
          } = (0, s.useContext)(H), {
            openedNav: m
          } = (0, s.useContext)(A), {
            openedNav: u
          } = (0, s.useContext)(k.iU), {
            value: v,
            ref: p
          } = (0, s.useContext)(G), {
            inMobileMenu: f
          } = (0, s.useContext)(k.xN), {
            isHidden: h
          } = (0, s.useContext)(R), {
            inAvatarMenu: b
          } = (0, s.useContext)(L.QY), w = [d, m, u].includes(v);
          return h ? null : (0, N.jsx)(o.Content, {
            forceMount: i || f || void 0,
            ref: e,
            className: x()({
              [l]: !f,
              [g]: f,
              [_]: i && !f,
              [c]: b
            }),
            onPointerEnter: B,
            onPointerLeave: B,
            onPointerDown: B,
            onPointerDownOutside: i ? B : null,
            style: {
              left: p?.current?.offsetLeft
            },
            asChild: !0,
            ...r,
            children: (0, N.jsx)(C.motion.div, {
              variants: n || i || f ? q : V,
              initial: "closed",
              animate: w ? "open" : "closed",
              transition: {
                duration: .2
              },
              children: t
            })
          })
        })),
        H = (0, s.createContext)({
          inSubMenu: !1,
          depth: 0
        }),
        J = (0, s.forwardRef)((function(a, e) {
          let {
            children: t,
            ...n
          } = a;
          const {
            depth: r
          } = (0, s.useContext)(H), {
            openedNav: i
          } = (0, s.useContext)(k.iU), {
            isNavHidden: d
          } = (0, s.useContext)(S.PY), [l, g] = (0, s.useState)("");
          (0, s.useEffect)((() => {
            g("")
          }), [i, d]);
          const _ = r ? r + 1 : 1;
          return (0, N.jsx)(H.Provider, {
            value: {
              inSubMenu: !0,
              openedNav: l,
              depth: _
            },
            children: (0, N.jsx)(o.Root, {
              ref: e,
              defaultValue: "",
              value: l,
              onValueChange: a => {
                g(a === l ? "" : a)
              },
              orientation: "vertical",
              className: "rockstargames-modules-core-headerd962f98ae74a4cbed394cf29a5d0a472",
              "data-depth": _,
              ...n,
              asChild: !0,
              children: (0, N.jsx)("div", {
                children: t
              })
            })
          })
        })),
        Y = (0, s.forwardRef)((function(a, e) {
          let {
            children: t,
            asChild: n,
            className: r,
            onClick: i,
            external: d,
            ...l
          } = a;
          const {
            inMenu: g
          } = (0, s.useContext)(A), {
            inAvatarMenu: _,
            closeAvatarMenu: c
          } = (0, s.useContext)(L.QY), {
            inQuickMenu: b
          } = (0, s.useContext)(j.s), {
            inMobileMenu: w,
            closeMobileMenu: y
          } = (0, s.useContext)(k.xN), {
            inSubMenu: C,
            depth: T
          } = (0, s.useContext)(H), P = x()({
            [m]: g,
            [v]: b,
            [u]: w,
            [p]: C,
            [f]: _,
            [h]: T > 1
          }, r), S = n ? I.Slot : "a";
          return (0, N.jsx)(o.Link, {
            asChild: !0,
            onSelect: a => {
              c?.(), y?.(), i?.(a)
            },
            ...l,
            children: (0, N.jsxs)(S, {
              ref: e,
              className: P,
              children: [(0, N.jsx)(I.Slottable, {
                children: t
              }), d && (0, N.jsx)(M.ExternalLink, {
                label: "",
                className: "rockstargames-modules-core-headerb350a68799dbf9dc424ca04489c8a0ad"
              })]
            })
          })
        }))
    },
    60520: (a, e, t) => {
      t.d(e, {
        ZM: () => r,
        br: () => o,
        sk: () => n,
        qc: () => s
      });
      const s = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/902006563577748c7d58ac9c2bf5e6df.svg",
        n = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/beb0cbcbb7dc7cfe8e4d127512ef5f57.svg";
      var o = t(94222);
      const r = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/e5fca59d373ed4d2aa00584b688c3da3.svg"
    },
    64158: (a, e, t) => {
      t.r(e), t.d(e, {
        default: () => s
      });
      const s = {
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
      }
    },
    64989: (a, e, t) => {
      t.d(e, {
        A: () => s
      });
      const s = (0, t(81788).defineMessages)({
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
          defaultMessage: "Open Player Menu"
        },
        avatar_menu_close: {
          id: "avatar_menu_close",
          defaultMessage: "Close Player Menu"
        }
      })
    },
    74956: (a, e, t) => {
      t.d(e, {
        qe: () => w,
        xN: () => b,
        z1: () => h,
        iU: () => f
      });
      var s = t(71127),
        n = t(63582),
        o = t(24036),
        r = t.n(o),
        i = t(9046),
        d = t(24780),
        l = t(63694),
        g = t(81788),
        _ = t(96099),
        c = t(16586),
        m = t(98081),
        u = t(64989);
      const v = "rockstargames-modules-core-headere31b18e5d92d04a3ffe036ff25c1ee5a";
      var p = t(25854);
      const f = (0, s.createContext)({
          openedNav: ""
        }),
        h = a => {
          let {
            children: e
          } = a;
          const [t, n] = (0, s.useState)("");
          return (0, p.jsx)(f.Provider, {
            value: {
              openedNav: t
            },
            children: (0, p.jsx)(i.Root, {
              value: t,
              onValueChange: n,
              children: (0, p.jsx)(i.List, {
                className: "rockstargames-modules-core-headera72000cfbe48e7dc2c0f071ecf0b533c",
                children: e
              })
            })
          })
        },
        b = (0, s.createContext)({
          inMobileMenu: !1,
          closeMobileMenu: () => {}
        }),
        w = a => {
          let {
            children: e
          } = a;
          const t = (0, g.useIntl)(),
            [o, i] = (0, s.useState)(!1),
            [v, f] = (0, s.useState)(!1),
            {
              brand: h
            } = (0, s.useContext)(_.PY),
            w = {
              show: {
                height: "100dvh",
                paddingBottom: o && h ? "var(--global-navigation-height)" : "",
                transition: {
                  ...m.b.hamburgerOpen,
                  staggerChildren: .05
                }
              },
              hidden: {
                height: 0,
                paddingBottom: 0,
                transition: m.b.hamburgerClose
              }
            };
          return (0, p.jsx)(b.Provider, {
            value: {
              inMobileMenu: !0,
              closeMobileMenu: () => {
                i(!1)
              }
            },
            children: (0, p.jsxs)(d.Root, {
              open: o,
              onOpenChange: i,
              children: [(0, p.jsx)(c.E, {
                showOn: "mobile",
                children: (0, p.jsx)(M, {
                  onClick: () => {
                    i(!o), f(!1)
                  },
                  isMenuOpen: o
                })
              }), (0, p.jsx)(c.E, {
                showOn: "mobile",
                children: (0, p.jsx)(n.AnimatePresence, {
                  children: o && (0, p.jsxs)(p.Fragment, {
                    children: [(0, p.jsx)(d.Overlay, {
                      className: "rockstargames-modules-core-headerd07fb32788b786e529979364bf8fcb5c"
                    }), (0, p.jsx)(d.Content, {
                      asChild: !0,
                      forceMount: !0,
                      onEscapeKeyDown: () => i(!1),
                      children: (0, p.jsxs)(n.motion.div, {
                        className: r()("rockstargames-modules-core-headerd28d9855f9427597e52d7e74abbf75dc", "rockstargames-modules-core-headerb523d5fd993427cae2eda1f5b9225699"),
                        variants: w,
                        animate: "show",
                        initial: "hidden",
                        exit: "hidden",
                        children: [(0, p.jsx)(l.VisuallyHidden, {
                          children: (0, p.jsx)(d.Title, {
                            children: t.formatMessage(u.A.nav_mobilemenu_title)
                          })
                        }), (0, p.jsx)("div", {
                          className: r()(v ? "rockstargames-modules-core-headera2283f7a71bfe0902ebe7176a1f3f45a" : "", "rockstargames-modules-core-headerd8335dcffc8b201a6f702cc7b22ebab7"),
                          children: (0, p.jsx)("div", {
                            className: "rockstargames-modules-core-headerfd282c0ed200fdb171dae24f3902f6b1",
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
        M = a => {
          let {
            className: e,
            isMenuOpen: t,
            ...s
          } = a;
          const n = (0, g.useIntl)();
          return (0, p.jsx)("div", {
            className: "rockstargames-modules-core-headerfb5e947b9aa01caf3aa9bca4ddcb3dee",
            children: (0, p.jsxs)(d.Trigger, {
              title: n.formatMessage(t ? u.A.nav_mobilemenu_close : u.A.nav_mobilemenu_open),
              type: "button",
              className: r()({
                [v]: t
              }, "rockstargames-modules-core-headerffee60778b241ac8cd6bc04685b782d3", e),
              ...s,
              children: [(0, p.jsx)("span", {}), (0, p.jsx)("span", {}), (0, p.jsx)("span", {})]
            })
          })
        }
    },
    78211: (a, e, t) => {
      t.d(e, {
        B: () => v,
        s: () => u
      });
      var s = t(71127);
      const n = "rockstargames-modules-core-headera0afcf77006159d689145a562371f6af",
        o = "rockstargames-modules-core-headeree781136421e86f1ba76f28f45009bfd";
      var r = t(74956),
        i = t(45979),
        d = t(63582),
        l = t(98081),
        g = t(24036),
        _ = t.n(g),
        c = t(9046),
        m = t(25854);
      const u = (0, s.createContext)({
          inQuickMenu: !1
        }),
        v = a => {
          let {
            children: e
          } = a;
          const {
            inMobileMenu: t
          } = (0, s.useContext)(r.xN), g = {
            hidden: {
              opacity: 0,
              y: 10,
              transition: l.b.staggerFade
            },
            show: {
              opacity: 1,
              y: 0,
              transition: l.b.staggerFade
            }
          }, v = _()("rockstargames-modules-core-headeredd6d5149d36c2b3d89460393482b5a1", t ? n : o), p = _()("rockstargames-modules-core-headere3008521b763b81f3b4f2c3659d22cc2", t ? n : o);
          return t ? (0, m.jsx)(u.Provider, {
            value: {
              inQuickMenu: !0
            },
            children: (0, m.jsx)(i.Z, {
              children: (0, m.jsx)(c.Root, {
                asChild: !0,
                children: (0, m.jsx)(d.motion.div, {
                  variants: g,
                  className: v,
                  children: s.Children.map(e, (a => (0, m.jsx)(d.motion.li, {
                    variants: g,
                    className: p,
                    children: a
                  })))
                })
              })
            })
          }) : (0, m.jsx)(u.Provider, {
            value: {
              inQuickMenu: !0
            },
            children: (0, m.jsx)(c.Root, {
              asChild: !0,
              children: (0, m.jsx)("div", {
                className: v,
                children: s.Children.map(e, (a => (0, m.jsx)(d.motion.li, {
                  className: p,
                  children: a
                })))
              })
            })
          })
        }
    },
    92074: (a, e, t) => {
      t.d(e, {
        A: () => Ia
      });
      var s = {};
      t.r(s), t.d(s, {
        beaterator: () => i,
        bully: () => _,
        careers: () => c,
        gta: () => m,
        gta2: () => u,
        gta3: () => v,
        gta4: () => p,
        gta5: () => f,
        gtaAdvance: () => h,
        gtaCtw: () => b,
        gtaIvEflc: () => w,
        gtaLcs: () => M,
        gtaLondon: () => y,
        gtaOnline: () => x,
        gtaPlus: () => k,
        gtaSanAndreas: () => C,
        gtaTrilogy: () => T,
        gtaVc: () => I,
        gtaVcs: () => L,
        laNoire: () => j,
        manhunt: () => P,
        manhunt2: () => S,
        maxPayne: () => N,
        maxPayne2: () => B,
        maxPayne3: () => A,
        midnightclub: () => R,
        midnightclub2: () => O,
        midnightclub3: () => D,
        midnightclubStreetRacing: () => G,
        oni: () => z,
        readDeadOnline: () => E,
        redDeadRedemption: () => V,
        redDeadRedemption2: () => q,
        redDeadRedemptionUndeadNightmare: () => F,
        redDeadRevolver: () => H,
        rsg: () => J,
        skateAndDestroy: () => W,
        smugglersRun: () => Q,
        smugglersRun2: () => $,
        smugglersRunWarzones: () => U,
        stateOfEmergency: () => Y,
        tableTennis: () => Z,
        theItalianJob: () => K,
        theWarriors: () => X,
        wildMetal: () => aa
      });
      var n = {};
      t.r(n), t.d(n, {
        GamesMenu: () => ya,
        GamesMenuItem: () => xa,
        default: () => Ca
      });
      var o = t(71127),
        r = t(40148);
      const i = () => ({
        site: "beaterator",
        appearancePaths: {
          [r.C.www]: [{
            path: "/games/beaterator/*",
            options: {}
          }]
        },
        brand: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/4f9915b608d2f8e73cc53e3f08205b71.png",
        links: []
      });
      var d = t(81788);
      const l = (0, d.defineMessages)({
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
        g = r.C.www,
        _ = a => ({
          site: "bully",
          appearancePaths: {
            [r.C.www]: [{
              path: "/bully/*",
              options: {}
            }],
            [r.C.socialClub]: [{
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
              domain: r.C.www,
              path: "/bully"
            },
            dataTestId: "bullyLink"
          }, {
            text: a.formatMessage(l.nav_bully_accomplishments),
            gaText: l.nav_bully_accomplishments.defaultMessage,
            type: "nav-internal",
            location: {
              domain: r.C.socialClub,
              path: "/games/bully"
            },
            dataTestId: "bullyButton"
          }, {
            text: a.formatMessage(l.nav_bully_support),
            gaText: l.nav_bully_support.defaultMessage,
            type: "nav-external",
            target: "_blank",
            location: {
              domain: r.C.support,
              path: "/categories/115001618067"
            },
            dataTestId: "bullySupportLink"
          }],
          cta: {
            text: a.formatMessage(l.nav_bully_cta_buy_now),
            gaText: l.nav_bully_cta_buy_now.defaultMessage,
            location: {
              domain: g,
              path: "/bully/?section=order"
            },
            ga: "cta_buy",
            dataTestId: "bullyPurchaseButton"
          }
        }),
        c = a => ({
          site: "careers",
          appearancePaths: {
            [r.C.www]: [{
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
              domain: r.C.www,
              path: "/careers"
            },
            dataTestId: "careersLink"
          }, {
            text: a.formatMessage(l.nav_careers_openings),
            gaText: l.nav_careers_openings.defaultMessage,
            type: "nav-internal",
            location: {
              domain: r.C.www,
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
        m = () => ({
          site: "gta",
          appearancePaths: {
            [r.C.www]: [{
              path: "/games/gta/*",
              options: {}
            }]
          },
          brand: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/65f1aec1603710b9836acf07cf9ac79d.svg",
          links: []
        }),
        u = () => ({
          site: "gta2",
          appearancePaths: {
            [r.C.www]: [{
              path: "/games/gta2/*",
              options: {}
            }]
          },
          brand: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d183c567f4254a34a55e0bc49cf69fe6.svg",
          links: []
        }),
        v = a => ({
          site: "grandtheftauto3",
          appearancePaths: {
            [r.C.www]: [{
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
              domain: r.C.store,
              path: "/game/buy-grand-theft-auto-the-trilogy-the-definitive-edition"
            },
            ga: "cta_buy"
          }
        }),
        p = a => ({
          site: "gta-iv",
          appearancePaths: {
            [r.C.www]: [{
              path: "/games/IV/*",
              options: {}
            }],
            [r.C.socialClub]: [{
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
              domain: r.C.www,
              path: "/games/IV"
            },
            dataTestId: "gtaivLink"
          }, {
            text: a.formatMessage(l.nav_gtaiv_accomplishments),
            gaText: l.nav_gtaiv_accomplishments.defaultMessage,
            type: "nav-internal",
            dataTestId: "gtaivButton",
            location: {
              domain: r.C.socialClub,
              path: "/games/gtaiv"
            }
          }, {
            text: a.formatMessage(l.nav_gtaiv_support),
            gaText: l.nav_gtaiv_support.defaultMessage,
            type: "nav-external",
            dataTestId: "gtaivSupportLink",
            target: "_blank",
            location: {
              domain: r.C.support,
              path: "/categories/200013096"
            }
          }],
          cta: {
            text: a.formatMessage(l.nav_gtaiv_cta_buy_now),
            gaText: l.nav_gtaiv_cta_buy_now.defaultMessage,
            variant: "highlight",
            target: "_blank",
            location: {
              domain: r.C.store,
              path: "/game/buy-grand-theft-auto-iv"
            },
            ga: "cta_buy",
            dataTestId: "gtaivPurchaseLink"
          }
        }),
        f = a => ({
          appearancePaths: {
            [r.C.www]: [{
              path: "/gta-v/*",
              options: {}
            }],
            [r.C.socialClub]: [{
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
              domain: r.C.www,
              path: "/gta-v?info=order"
            },
            text: a.formatMessage(l.nav_gtav_cta_buy_now),
            gaText: l.nav_gtav_cta_buy_now.defaultMessage
          },
          links: [{
            dataTestId: "gtavLink",
            location: {
              domain: r.C.www,
              path: "/gta-v"
            },
            text: a.formatMessage(l.nav_gtav_overview),
            gaText: l.nav_gtav_overview.defaultMessage,
            type: "nav-internal"
          }, {
            children: [{
              dataTestId: "gtaoLink",
              location: {
                domain: r.C.www,
                path: "/gta-online"
              },
              text: a.formatMessage(l.nav_gtav_discover),
              gaText: l.nav_gtav_discover.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "gtaoCareerProgressButton",
              location: {
                domain: r.C.www,
                path: "/gta-online/career-progress"
              },
              text: a.formatMessage(l.nav_gtao_career_progress),
              gaText: l.nav_gtao_career_progress.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "gtaoButton",
              isLegacy: !0,
              location: {
                domain: r.C.socialClub,
                path: "/games/gtav/career/overview/gtaonline"
              },
              text: a.formatMessage(l.nav_gtav_my_character),
              gaText: l.nav_gtav_my_character.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "gtaoJobsLink",
              location: {
                domain: r.C.socialClub,
                path: "/jobs/?dateRangeCreated=any&filter=community&sort=date&title=gtav"
              },
              text: a.formatMessage(l.nav_gtav_jobs),
              gaText: l.nav_gtav_jobs.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "gtaoGuidesLink",
              location: {
                domain: r.C.www,
                path: "/gta-online/guides"
              },
              text: a.formatMessage(l.nav_gtav_guides),
              gaText: l.nav_gtav_guides.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "gtaoLicensePlatesLink",
              location: {
                domain: r.C.www,
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
                domain: r.C.socialClub,
                path: "/games/gtav/career/overview/"
              },
              text: a.formatMessage(l.nav_gtav_stats),
              gaText: l.nav_gtav_stats.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "gtavSpMissionsButton",
              isLegacy: !0,
              location: {
                domain: r.C.socialClub,
                path: "/games/gtav/career/missions/"
              },
              text: a.formatMessage(l.nav_gtav_missions),
              gaText: l.nav_gtav_missions.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "gtavSpChecklistButton",
              isLegacy: !0,
              location: {
                domain: r.C.socialClub,
                path: "/games/gtav/career/checklist"
              },
              text: a.formatMessage(l.nav_gtav_checklist),
              gaText: l.nav_gtav_checklist.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "gtavSpAccomplishmentsButton",
              isLegacy: !0,
              location: {
                domain: r.C.socialClub,
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
              domain: r.C.www,
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
                  domain: r.C.socialClub,
                  path: "/jobs/?dateRangeCreated=last7&sort=likes&title=gtav"
                },
                text: a.formatMessage(l.nav_gtav_jobs_browse_all),
                gaText: l.nav_gtav_jobs_browse_all.defaultMessage,
                type: "nav-internal"
              }, {
                dataTestId: "gtavCommunitySeriesLink",
                location: {
                  domain: r.C.socialClub,
                  path: "/jobs/?dateRangeCreated=any&filter=community&sort=date&title=gtav"
                },
                text: a.formatMessage(l.nav_gtav_community_series),
                gaText: l.nav_gtav_community_series.defaultMessage,
                type: "nav-internal"
              }, {
                dataTestId: "gtavMyJobsButtons",
                isLegacy: !0,
                location: {
                  domain: r.C.socialClub,
                  path: "/jobs/?dateRangeCreated=any&filter=me&sort=likes&title=gtav"
                },
                text: a.formatMessage(l.nav_gtav_my_jobs),
                gaText: l.nav_gtav_my_jobs.defaultMessage,
                type: "nav-internal"
              }, {
                dataTestId: "gtavPlaylistsButton",
                location: {
                  domain: r.C.socialClub,
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
                  domain: r.C.socialClub,
                  path: "/crews"
                },
                text: a.formatMessage(l.nav_gtav_crews_browse_all),
                gaText: l.nav_gtav_crews_browse_all.defaultMessage,
                type: "nav-internal"
              }, {
                dataTestId: "gtavMyCrewsButton",
                location: {
                  domain: r.C.socialClub,
                  path: "/member/{username}/crews"
                },
                requiresAuth: !0,
                text: a.formatMessage(l.nav_gtav_my_crews),
                gaText: l.nav_gtav_my_crews.defaultMessage,
                type: "nav-internal"
              }, {
                dataTestId: "gtavCreateCrewButton",
                location: {
                  domain: r.C.socialClub,
                  path: "/crews/create"
                },
                text: a.formatMessage(l.nav_gtav_create_crew),
                gaText: l.nav_gtav_create_crew.defaultMessage,
                type: "nav-internal"
              }, {
                dataTestId: "gtavCreateEmblemButton",
                location: {
                  domain: r.C.socialClub,
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
                domain: r.C.socialClub,
                path: "/photos/?dateRange=any&title=gtav"
              },
              text: a.formatMessage(l.nav_gtav_photos),
              gaText: l.nav_gtav_photos.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "gtaCommunityGuidelinesButton",
              location: {
                domain: r.C.www,
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
              domain: r.C.support,
              path: "/categories/200013306"
            },
            target: "_blank",
            text: a.formatMessage(l.nav_gtav_support),
            gaText: l.nav_gtav_support.defaultMessage,
            type: "nav-external"
          }],
          site: "gta5"
        }),
        h = () => ({
          site: "grandtheftauto-gba",
          appearancePaths: {
            [r.C.www]: [{
              path: "/games/grandtheftauto-gba/*",
              options: {}
            }]
          },
          brand: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1c2406b2d84fbe619ab07b1971ecf579.svg",
          links: []
        }),
        b = () => ({
          site: "chinatownwars",
          appearancePaths: {
            [r.C.www]: [{
              path: "/games/chinatownwars/*",
              options: {}
            }]
          },
          brand: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/02cb5f725e6afe939eba7948707242f5.svg",
          links: []
        }),
        w = a => ({
          site: "episodesfromlibertycity",
          appearancePaths: {
            [r.C.www]: [{
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
              domain: r.C.www,
              path: "/games/episodesfromlibertycity"
            }
          }, {
            text: a.formatMessage(l.nav_gtaiv_accomplishments),
            gaText: l.nav_gtaiv_accomplishments.defaultMessage,
            type: "nav-internal",
            dataTestId: "gtaiveflcButton",
            location: {
              domain: r.C.socialClub,
              path: "/games/gtaiv"
            }
          }, {
            text: a.formatMessage(l.nav_gtaiv_support),
            gaText: l.nav_gtaiv_support.defaultMessage,
            type: "nav-external",
            dataTestId: "gtaiveflcSupportLink",
            target: "_blank",
            location: {
              domain: r.C.support,
              path: "/categories/115001614848"
            }
          }]
        }),
        M = () => ({
          site: "libertycitystories",
          appearancePaths: {
            [r.C.www]: [{
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
            [r.C.www]: [{
              path: "/games/gtalondon/*",
              options: {}
            }]
          },
          brand: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/6177d74645c9cd4e1bad75e86cadd1f8.png",
          links: []
        }),
        x = a => ({
          appearancePaths: {
            [r.C.www]: [{
              path: "/gta-online/*",
              options: {}
            }],
            [r.C.socialClub]: [{
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
              domain: r.C.www,
              path: "/gta-online?info=order"
            },
            text: a.formatMessage(l.nav_gtao_cta_buy_now),
            gaText: l.nav_gtao_cta_buy_now.defaultMessage
          },
          links: [{
            dataTestId: "gtaoGtaVLink",
            location: {
              domain: r.C.www,
              path: "/gta-v"
            },
            text: a.formatMessage(l.nav_gtao_overview),
            gaText: l.nav_gtao_overview.defaultMessage,
            type: "nav-internal"
          }, {
            children: [{
              dataTestId: "gtaoOnlineLink",
              location: {
                domain: r.C.www,
                path: "/gta-online"
              },
              text: a.formatMessage(l.nav_gtao_discover),
              gaText: l.nav_gtao_discover.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "gtaoCareerProgressButton",
              location: {
                domain: r.C.www,
                path: "/gta-online/career-progress"
              },
              text: a.formatMessage(l.nav_gtao_career_progress),
              gaText: l.nav_gtao_career_progress.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "gtaoOverviewButton",
              isLegacy: !0,
              location: {
                domain: r.C.socialClub,
                path: "/games/gtav/career/overview/gtaonline"
              },
              text: a.formatMessage(l.nav_gtao_my_character),
              gaText: l.nav_gtao_my_character.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "gtaoJobsLink",
              location: {
                domain: r.C.socialClub,
                path: "/jobs/?dateRangeCreated=any&filter=community&sort=date&title=gtav"
              },
              text: a.formatMessage(l.nav_gtao_jobs),
              gaText: l.nav_gtao_jobs.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "gtaoGuidesLink",
              location: {
                domain: r.C.www,
                path: "/gta-online/guides"
              },
              text: a.formatMessage(l.nav_gtao_guides),
              gaText: l.nav_gtao_guides.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "gtaoLicensePlateLink",
              location: {
                domain: r.C.www,
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
                domain: r.C.socialClub,
                path: "/games/gtav/career/overview/"
              },
              text: a.formatMessage(l.nav_gtao_stats),
              gaText: l.nav_gtao_stats.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "gtaoMissionsButton",
              isLegacy: !0,
              location: {
                domain: r.C.socialClub,
                path: "/games/gtav/career/missions/"
              },
              text: a.formatMessage(l.nav_gtao_missions),
              gaText: l.nav_gtao_missions.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "gtaoChecklistButton",
              isLegacy: !0,
              location: {
                domain: r.C.socialClub,
                path: "/games/gtav/career/checklist"
              },
              text: a.formatMessage(l.nav_gtao_checklist),
              gaText: l.nav_gtao_checklist.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "gtaoSpAccomplishmentsButton",
              isLegacy: !0,
              location: {
                domain: r.C.socialClub,
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
              domain: r.C.www,
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
                  domain: r.C.socialClub,
                  path: "/jobs/?dateRangeCreated=last7&sort=likes&title=gtav"
                }
              }, {
                text: a.formatMessage(l.nav_gtao_community_series),
                gaText: l.nav_gtao_community_series.defaultMessage,
                location: {
                  domain: r.C.socialClub,
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
                  domain: r.C.socialClub,
                  path: "/jobs/?dateRangeCreated=any&filter=me&sort=likes&title=gtav"
                }
              }, {
                text: a.formatMessage(l.nav_gtao_jobs_playlists),
                gaText: l.nav_gtao_jobs_playlists.defaultMessage,
                isLegacy: !0,
                type: "nav-internal",
                dataTestId: "gtaoChecklistButton",
                location: {
                  domain: r.C.socialClub,
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
                  domain: r.C.socialClub,
                  path: "/crews"
                }
              }, {
                text: a.formatMessage(l.nav_gtao_my_crews),
                gaText: l.nav_gtao_my_crews.defaultMessage,
                dataTestId: "gtaoMyCrewsButton",
                type: "nav-internal",
                location: {
                  domain: r.C.socialClub,
                  path: "/member/{username}/crews"
                },
                requiresAuth: !0
              }, {
                text: a.formatMessage(l.nav_gtao_crews_create),
                gaText: l.nav_gtao_crews_create.defaultMessage,
                dataTestId: "gtaoCreateCrewButton",
                type: "nav-internal",
                location: {
                  domain: r.C.socialClub,
                  path: "/crews/create"
                }
              }, {
                text: a.formatMessage(l.nav_gtao_emblem_editor),
                gaText: l.nav_gtao_emblem_editor.defaultMessage,
                dataTestId: "gtaoCreateEmblemButton",
                type: "nav-internal",
                location: {
                  domain: r.C.socialClub,
                  path: "/emblems"
                }
              }],
              text: a.formatMessage(l.nav_gtao_crews),
              gaText: l.nav_gtao_crews.defaultMessage,
              type: "nav-dropdown"
            }, {
              dataTestId: "gtaoPhotosButton",
              location: {
                domain: r.C.socialClub,
                path: "/photos/?dateRange=any&title=gtav"
              },
              text: a.formatMessage(l.nav_gtao_photos),
              gaText: l.nav_gtao_photos.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "gtaCommunityGuidelinesButton",
              location: {
                domain: r.C.www,
                path: "/community-resources/guidelines"
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
              domain: r.C.support,
              path: "/categories/200013306"
            },
            target: "_blank",
            text: a.formatMessage(l.nav_gtao_support),
            gaText: l.nav_gtao_support.defaultMessage,
            type: "nav-external"
          }],
          site: "gta-online"
        }),
        k = a => ({
          appearancePaths: {
            [r.C.www]: [{
              path: "/gta-plus/*",
              options: {}
            }]
          },
          brand: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/fc25f8fbec3c2644cf5cfd072937df26.svg",
          cta: {
            dataTestId: "gtaoPurchaseLink",
            ga: "cta_buy",
            location: {
              domain: r.C.www,
              path: "/gta-online?info=order"
            },
            text: a.formatMessage(l.nav_gtao_cta_buy_now),
            gaText: l.nav_gtao_cta_buy_now.defaultMessage
          },
          links: [{
            dataTestId: "gtaoGtaVLink",
            location: {
              domain: r.C.www,
              path: "/gta-v"
            },
            text: a.formatMessage(l.nav_gtao_overview),
            gaText: l.nav_gtao_overview.defaultMessage,
            type: "nav-internal"
          }, {
            children: [{
              dataTestId: "gtaoOnlineLink",
              location: {
                domain: r.C.www,
                path: "/gta-online"
              },
              text: a.formatMessage(l.nav_gtao_discover),
              gaText: l.nav_gtao_discover.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "gtaoCareerProgressButton",
              location: {
                domain: r.C.www,
                path: "/gta-online/career-progress"
              },
              text: a.formatMessage(l.nav_gtao_career_progress),
              gaText: l.nav_gtao_career_progress.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "gtaoOverviewButton",
              isLegacy: !0,
              location: {
                domain: r.C.socialClub,
                path: "/games/gtav/career/overview/gtaonline"
              },
              text: a.formatMessage(l.nav_gtao_my_character),
              gaText: l.nav_gtao_my_character.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "gtaoJobsLink",
              location: {
                domain: r.C.socialClub,
                path: "/jobs/?dateRangeCreated=any&filter=community&sort=date&title=gtav"
              },
              text: a.formatMessage(l.nav_gtao_jobs),
              gaText: l.nav_gtao_jobs.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "gtaoGuidesLink",
              location: {
                domain: r.C.www,
                path: "/gta-online/guides"
              },
              text: a.formatMessage(l.nav_gtao_guides),
              gaText: l.nav_gtao_guides.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "gtaoLicensePlateLink",
              location: {
                domain: r.C.www,
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
                domain: r.C.socialClub,
                path: "/games/gtav/career/overview/"
              },
              text: a.formatMessage(l.nav_gtao_stats),
              gaText: l.nav_gtao_stats.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "gtaoMissionsButton",
              isLegacy: !0,
              location: {
                domain: r.C.socialClub,
                path: "/games/gtav/career/missions/"
              },
              text: a.formatMessage(l.nav_gtao_missions),
              gaText: l.nav_gtao_missions.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "gtaoChecklistButton",
              isLegacy: !0,
              location: {
                domain: r.C.socialClub,
                path: "/games/gtav/career/checklist"
              },
              text: a.formatMessage(l.nav_gtao_checklist),
              gaText: l.nav_gtao_checklist.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "gtaoAccomplishmentsButton",
              isLegacy: !0,
              location: {
                domain: r.C.socialClub,
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
              domain: r.C.www,
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
                  domain: r.C.socialClub,
                  path: "/jobs/?dateRangeCreated=last7&sort=likes&title=gtav"
                }
              }, {
                text: a.formatMessage(l.nav_gtao_community_series),
                gaText: l.nav_gtao_community_series.defaultMessage,
                location: {
                  domain: r.C.socialClub,
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
                  domain: r.C.socialClub,
                  path: "/jobs/?dateRangeCreated=any&filter=me&sort=likes&title=gtav"
                }
              }, {
                text: a.formatMessage(l.nav_gtao_jobs_playlists),
                gaText: l.nav_gtao_jobs_playlists.defaultMessage,
                isLegacy: !0,
                type: "nav-internal",
                dataTestId: "gtaoChecklistButton",
                location: {
                  domain: r.C.socialClub,
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
                  domain: r.C.socialClub,
                  path: "/crews"
                }
              }, {
                text: a.formatMessage(l.nav_gtao_my_crews),
                gaText: l.nav_gtao_my_crews.defaultMessage,
                dataTestId: "gtaoMyCrewsButton",
                type: "nav-internal",
                location: {
                  domain: r.C.socialClub,
                  path: "/member/{username}/crews"
                },
                requiresAuth: !0
              }, {
                text: a.formatMessage(l.nav_gtao_crews_create),
                gaText: l.nav_gtao_crews_create.defaultMessage,
                dataTestId: "gtaoCreateCrewButton",
                type: "nav-internal",
                location: {
                  domain: r.C.socialClub,
                  path: "/crews/create"
                }
              }, {
                text: a.formatMessage(l.nav_gtao_emblem_editor),
                gaText: l.nav_gtao_emblem_editor.defaultMessage,
                dataTestId: "gtaoCreateEmblemButton",
                type: "nav-internal",
                location: {
                  domain: r.C.socialClub,
                  path: "/emblems/new"
                }
              }],
              text: a.formatMessage(l.nav_gtao_crews),
              gaText: l.nav_gtao_crews.defaultMessage,
              type: "nav-dropdown"
            }, {
              dataTestId: "gtaoPhotosButton",
              location: {
                domain: r.C.socialClub,
                path: "/photos/?dateRange=any&title=gtav"
              },
              text: a.formatMessage(l.nav_gtao_photos),
              gaText: l.nav_gtao_photos.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "gtaCommunityGuidelinesButton",
              location: {
                domain: r.C.www,
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
              domain: r.C.support,
              path: "/categories/200013306"
            },
            target: "_blank",
            text: a.formatMessage(l.nav_gtao_support),
            gaText: l.nav_gtao_support.defaultMessage,
            type: "nav-external"
          }],
          site: "gta-plus"
        }),
        C = a => ({
          site: "sanandreas",
          appearancePaths: {
            [r.C.www]: [{
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
              domain: r.C.store,
              path: "/game/buy-grand-theft-auto-the-trilogy-the-definitive-edition"
            },
            ga: "cta_buy",
            dataTestId: "gtaSanAndreasPurchaseLink"
          }
        }),
        T = a => ({
          site: "gta-trilogy",
          appearancePaths: {
            [r.C.www]: [{
              path: "/GTATrilogy/*",
              options: {}
            }],
            [r.C.socialClub]: [{
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
              domain: r.C.www,
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
                domain: r.C.socialClub,
                path: "/games/gtasa"
              }
            }, {
              text: a.formatMessage(l.nav_gta_trilogy_gtavc),
              gaText: l.nav_gta_trilogy_gtavc.defaultMessage,
              type: "nav-internal",
              dataTestId: "gtaTrilogyGtaVcLink",
              location: {
                domain: r.C.socialClub,
                path: "/games/gtavc"
              }
            }, {
              text: a.formatMessage(l.nav_gta_trilogy_gta3),
              gaText: l.nav_gta_trilogy_gta3.defaultMessage,
              type: "nav-internal",
              dataTestId: "gta3TrilogyLink",
              location: {
                domain: r.C.socialClub,
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
                domain: r.C.support,
                path: "/categories/115001620287"
              }
            }, {
              text: a.formatMessage(l.nav_gta_trilogy_gtavc),
              gaText: l.nav_gta_trilogy_gtavc.defaultMessage,
              type: "nav-external",
              dataTestId: "gtaVcTrilogySupportLink",
              target: "_blank",
              location: {
                domain: r.C.support,
                path: "/categories/115001619868"
              }
            }, {
              text: a.formatMessage(l.nav_gta_trilogy_gta3),
              gaText: l.nav_gta_trilogy_gta3.defaultMessage,
              type: "nav-external",
              dataTestId: "gta3TrilogySupportLink",
              target: "_blank",
              location: {
                domain: r.C.support,
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
              domain: r.C.store,
              path: "/game/buy-grand-theft-auto-the-trilogy-the-definitive-edition"
            },
            ga: "cta_buy"
          }
        }),
        I = a => ({
          site: "vicecity",
          appearancePaths: {
            [r.C.www]: [{
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
              domain: r.C.store,
              path: "/game/buy-grand-theft-auto-the-trilogy-the-definitive-edition"
            },
            ga: "cta_buy"
          }
        }),
        L = () => ({
          site: "vicecitystories",
          appearancePaths: {
            [r.C.www]: [{
              path: "/games/vicecitystories/*",
              options: {}
            }]
          },
          brand: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a73128cb6201d9d830f2ac4802ad6c2f.svg",
          links: []
        }),
        j = a => ({
          site: "la-noire",
          appearancePaths: {
            [r.C.www]: [{
              path: "/lanoire/*",
              options: {}
            }, {
              path: "/games/lanoire/*",
              options: {}
            }],
            [r.C.socialClub]: [{
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
              domain: r.C.www,
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
                  domain: r.C.socialClub,
                  path: "/games/lan/casetracker"
                }
              }, {
                text: a.formatMessage(l.nav_lanoire_checklist),
                gaText: l.nav_lanoire_checklist.defaultMessage,
                type: "nav-internal",
                dataTestId: "lanoireChecklistButton",
                isLegacy: !0,
                location: {
                  domain: r.C.socialClub,
                  path: "/games/lan/checklist"
                }
              }, {
                text: a.formatMessage(l.nav_lanoire_stats),
                gaText: l.nav_lanoire_stats.defaultMessage,
                type: "nav-internal",
                dataTestId: "lanoireStatsButton",
                isLegacy: !0,
                location: {
                  domain: r.C.socialClub,
                  path: "/games/lan/stats"
                }
              }, {
                text: a.formatMessage(l.nav_lanoire_accomplishments),
                gaText: l.nav_lanoire_accomplishments.defaultMessage,
                type: "nav-internal",
                dataTestId: "lanoireAchievementsLink",
                location: {
                  domain: r.C.socialClub,
                  path: "/games/lan/pc/achievements"
                }
              }, {
                text: a.formatMessage(l.nav_lanoire_badge_pursuit),
                gaText: l.nav_lanoire_badge_pursuit.defaultMessage,
                type: "nav-internal",
                dataTestId: "lanoireBadgeButton",
                isLegacy: !0,
                location: {
                  domain: r.C.socialClub,
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
                  domain: r.C.socialClub,
                  path: "/games/lanvr/stats"
                }
              }, {
                text: a.formatMessage(l.nav_lanoire_accomplishments),
                gaText: l.nav_lanoire_accomplishments.defaultMessage,
                type: "nav-internal",
                dataTestId: "lanoireAchievementsButton",
                location: {
                  domain: r.C.socialClub,
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
              domain: r.C.support,
              path: "/categories/200013186"
            }
          }],
          cta: {
            text: a.formatMessage(l.nav_lanoire_cta_buy_now),
            gaText: l.nav_lanoire_cta_buy_now.defaultMessage,
            dataTestId: "lanoirePurchaseLink",
            location: {
              domain: r.C.store,
              path: "/game/buy-la-noire"
            },
            ga: "cta_buy"
          }
        }),
        P = () => ({
          site: "manhunt",
          appearancePaths: {
            [r.C.www]: [{
              path: "/games/manhunt/*",
              options: {}
            }]
          },
          brand: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/36e8ec97940586d12e63320c75c99d03.svg",
          links: []
        }),
        S = () => ({
          site: "manhunt2",
          appearancePaths: {
            [r.C.www]: [{
              path: "/games/manhunt2/*",
              options: {}
            }]
          },
          brand: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/ceb3dacaa63b2f3036670bbf7e677dc2.png",
          links: []
        }),
        N = () => ({
          site: "maxpayne",
          appearancePaths: {
            [r.C.www]: [{
              path: "/games/maxpayne/*",
              options: {}
            }]
          },
          brand: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d866f8e4ea468c7ad8fb5d301228c1b2.svg",
          links: []
        }),
        B = () => ({
          site: "maxpayne2",
          appearancePaths: {
            [r.C.www]: [{
              path: "/games/maxpayne2/*",
              options: {}
            }]
          },
          brand: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c3f251fe931f3533cb980bbc23e599b8.svg",
          links: []
        }),
        A = a => ({
          site: "maxpayne3",
          appearancePaths: {
            [r.C.www]: [{
              path: "/games/maxpayne3/*",
              options: {}
            }],
            [r.C.socialClub]: [{
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
              domain: r.C.www,
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
                domain: r.C.socialClub,
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
                  domain: r.C.socialClub,
                  path: "/games/maxpayne3/sp/career"
                }
              }, {
                text: a.formatMessage(l.nav_mp3_checklist),
                gaText: l.nav_mp3_checklist.defaultMessage,
                type: "nav-internal",
                dataTestId: "mp3ChecklistButton",
                isLegacy: !0,
                location: {
                  domain: r.C.socialClub,
                  path: "/games/maxpayne3/sp/checklist"
                }
              }, {
                text: a.formatMessage(l.nav_mp3_grinds),
                gaText: l.nav_mp3_grinds.defaultMessage,
                type: "nav-internal",
                dataTestId: "mp3GrindsButton",
                isLegacy: !0,
                location: {
                  domain: r.C.socialClub,
                  path: "/games/maxpayne3/sp/grinds"
                }
              }, {
                text: a.formatMessage(l.nav_mp3_chapters),
                gaText: l.nav_mp3_chapters.defaultMessage,
                type: "nav-internal",
                dataTestId: "mp3ChaptersLink",
                isLegacy: !0,
                location: {
                  domain: r.C.socialClub,
                  path: "/games/maxpayne3/sp/chapters"
                }
              }, {
                text: a.formatMessage(l.nav_mp3_weapons),
                gaText: l.nav_mp3_weapons.defaultMessage,
                type: "nav-internal",
                dataTestId: "mp3WeaponsButton",
                isLegacy: !0,
                location: {
                  domain: r.C.socialClub,
                  path: "/games/maxpayne3/sp/weapons"
                }
              }, {
                text: a.formatMessage(l.nav_mp3_leaderboards),
                gaText: l.nav_mp3_leaderboards.defaultMessage,
                type: "nav-internal",
                dataTestId: "mp3LeaderBoardButton",
                isLegacy: !0,
                location: {
                  domain: r.C.socialClub,
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
                  domain: r.C.socialClub,
                  path: "/games/maxpayne3/mp/career"
                }
              }, {
                text: a.formatMessage(l.nav_mp3_grinds),
                gaText: l.nav_mp3_grinds.defaultMessage,
                type: "nav-internal",
                dataTestId: "mp3MpGrindsButton",
                isLegacy: !0,
                location: {
                  domain: r.C.socialClub,
                  path: "/games/maxpayne3/mp/grinds"
                }
              }, {
                text: a.formatMessage(l.nav_mp3_weapons),
                gaText: l.nav_mp3_weapons.defaultMessage,
                type: "nav-internal",
                dataTestId: "mp3MpWeaponsButton",
                isLegacy: !0,
                location: {
                  domain: r.C.socialClub,
                  path: "/games/maxpayne3/mp/weapons"
                }
              }, {
                text: a.formatMessage(l.nav_mp3_leaderboards),
                gaText: l.nav_mp3_leaderboards.defaultMessage,
                type: "nav-internal",
                dataTestId: "mp3MpLeaderBoardsButton",
                isLegacy: !0,
                location: {
                  domain: r.C.socialClub,
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
                  domain: r.C.socialClub,
                  path: "/games/maxpayne3/crews/multiplayer/1-/Overall"
                }
              }, {
                text: a.formatMessage(l.nav_mp3_score_attack),
                gaText: l.nav_mp3_score_attack.defaultMessage,
                type: "nav-internal",
                dataTestId: "mp3CrewScoreAttackLeaderBoardButton",
                isLegacy: !0,
                location: {
                  domain: r.C.socialClub,
                  path: "/games/maxpayne3/crews/scoreattack"
                }
              }, {
                text: a.formatMessage(l.nav_mp3_ny_minute),
                gaText: l.nav_mp3_ny_minute.defaultMessage,
                type: "nav-internal",
                dataTestId: "mp3CrewNyMinuteLeaderBoardButton",
                isLegacy: !0,
                location: {
                  domain: r.C.socialClub,
                  path: "/games/maxpayne3/crews/nyminute"
                }
              }, {
                text: a.formatMessage(l.nav_mp3_checkpoint_challenge),
                gaText: l.nav_mp3_checkpoint_challenge.defaultMessage,
                type: "nav-internal",
                dataTestId: "mp3CrewCpcLeaderBoardButton",
                isLegacy: !0,
                location: {
                  domain: r.C.socialClub,
                  path: "/games/maxpayne3/crews/cpc"
                }
              }, {
                text: a.formatMessage(l.nav_mp3_featured),
                gaText: l.nav_mp3_featured.defaultMessage,
                type: "nav-internal",
                dataTestId: "mp3CrewFeaturedLeaderBoardButton",
                isLegacy: !0,
                location: {
                  domain: r.C.socialClub,
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
              domain: r.C.support,
              path: "/categories/200013286"
            }
          }],
          cta: {
            text: a.formatMessage(l.nav_mp3_cta_buy_now),
            gaText: l.nav_mp3_cta_buy_now.defaultMessage,
            dataTestId: "mp3PurchaseLink",
            target: "_blank",
            location: {
              domain: r.C.store,
              path: "/game/buy-max-payne-3"
            },
            ga: "cta_buy"
          }
        }),
        R = () => ({
          site: "midnightclub",
          appearancePaths: {
            [r.C.www]: [{
              path: "/games/midnightclub/*",
              options: {}
            }]
          },
          brand: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/fce5da0e35899b99c836bd73e2f7aa7a.png",
          links: []
        }),
        O = () => ({
          site: "midnightclub2",
          appearancePaths: {
            [r.C.www]: [{
              path: "/games/midnightclub2/*",
              options: {}
            }]
          },
          brand: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5aa516901becb336d1d5ddc08401e490.png",
          links: []
        }),
        D = () => ({
          site: "midnightclub3",
          appearancePaths: {
            [r.C.www]: [{
              path: "/games/midnightclub3/*",
              options: {}
            }]
          },
          brand: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a4863c27d856c6ce47b49aed738df14a.png",
          links: []
        }),
        G = a => ({
          site: "midnightclubLA",
          appearancePaths: {
            [r.C.www]: [{
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
        z = () => ({
          site: "oni",
          appearancePaths: {
            [r.C.www]: [{
              path: "/games/oni/*",
              options: {}
            }]
          },
          brand: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/753452f0a8e31d63b8cc1b3337ca8dd1.png",
          links: []
        }),
        E = a => ({
          appearancePaths: {
            [r.C.www]: [{
              path: "/reddeadonline/*",
              options: {}
            }],
            [r.C.socialClub]: [{
              path: "/games/rdo*",
              options: {}
            }]
          },
          brand: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1b2f9181adacf5b0713a311fb0065164.svg",
          cta: {
            dataTestId: "rdoPurchaseLink",
            ga: "cta_buy",
            location: {
              domain: r.C.store,
              path: "/game/buy-red-dead-redemption-2"
            },
            target: "_blank",
            text: a.formatMessage(l.nav_rdo_cta_buy_now),
            gaText: l.nav_rdo_cta_buy_now.defaultMessage
          },
          links: [{
            dataTestId: "rdoLink",
            location: {
              domain: r.C.www,
              path: "/reddeadonline"
            },
            text: a.formatMessage(l.nav_rdo_overview),
            gaText: l.nav_rdo_overview.defaultMessage,
            type: "nav-internal"
          }, {
            children: [{
              dataTestId: "rdoGettingStartedLink",
              location: {
                domain: r.C.www,
                path: "/reddeadonline/features/getting-started"
              },
              text: a.formatMessage(l.nav_rdo_getting_started),
              gaText: l.nav_rdo_getting_started.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "rdoRolesLink",
              location: {
                domain: r.C.www,
                path: "/reddeadonline/features/roles"
              },
              text: a.formatMessage(l.nav_rdo_specialist_roles),
              gaText: l.nav_rdo_specialist_roles.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "rdoLOOLink",
              location: {
                domain: r.C.www,
                path: "/reddeadonline/features/a-land-of-opportunities"
              },
              text: a.formatMessage(l.nav_rdo_story_missions),
              gaText: l.nav_rdo_story_missions.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "rdoPossesLink",
              location: {
                domain: r.C.www,
                path: "/reddeadonline/features/posses-and-free-roam"
              },
              text: a.formatMessage(l.nav_rdo_posses_free_roam),
              gaText: l.nav_rdo_posses_free_roam.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "rdoSAELink",
              location: {
                domain: r.C.www,
                path: "/reddeadonline/features/showdown-and-elimination"
              },
              text: a.formatMessage(l.nav_rdo_competitive_series),
              gaText: l.nav_rdo_competitive_series.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "rdoCustomizationLink",
              location: {
                domain: r.C.www,
                path: "/reddeadonline/features/customization"
              },
              text: a.formatMessage(l.nav_rdo_customization),
              gaText: l.nav_rdo_customization.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "rdoProgressLink",
              location: {
                domain: r.C.www,
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
                domain: r.C.socialClub,
                path: "/games/rdo/overview"
              },
              text: a.formatMessage(l.nav_rdo_my_character),
              gaText: l.nav_rdo_my_character.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "rdoRolesButton",
              location: {
                domain: r.C.socialClub,
                path: "/games/rdo/roles"
              },
              text: a.formatMessage(l.nav_rdo_roles),
              gaText: l.nav_rdo_roles.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "rdoClubRewardsButton",
              location: {
                domain: r.C.socialClub,
                path: "/games/rdo/clubrewards"
              },
              text: a.formatMessage(l.nav_rdo_club_rewards),
              gaText: l.nav_rdo_club_rewards.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "rdoRankButton",
              location: {
                domain: r.C.socialClub,
                path: "/games/rdo/rank"
              },
              text: a.formatMessage(l.nav_rdo_rank_unlocks),
              gaText: l.nav_rdo_rank_unlocks.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "rdoAwardsButton",
              location: {
                domain: r.C.socialClub,
                path: "/games/rdo/awards"
              },
              text: a.formatMessage(l.nav_rdo_awards),
              gaText: l.nav_rdo_awards.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "rdoAchievementsButton",
              location: {
                domain: r.C.socialClub,
                path: "/games/rdo/achievements"
              },
              text: a.formatMessage(l.nav_rdo_accomplishments),
              gaText: l.nav_rdo_accomplishments.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "rdoFeaturesLink",
              location: {
                domain: r.C.socialClub,
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
                domain: r.C.socialClub,
                path: "/games/rdo/posse"
              },
              text: a.formatMessage(l.nav_rdo_posses),
              gaText: l.nav_rdo_posses.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "rdoPhotosButton",
              location: {
                domain: r.C.socialClub,
                path: "/photos/?title=rdr2"
              },
              text: a.formatMessage(l.nav_rdo_photos),
              gaText: l.nav_rdo_photos.defaultMessage,
              type: "nav-internal"
            }, {
              dataTestId: "rdoCommunityGuidelinesButton",
              location: {
                domain: r.C.www,
                path: "/community-resources/guidelines"
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
              domain: r.C.socialClub,
              path: "/games/rdr2/catalogue/online/"
            },
            target: "_blank",
            text: a.formatMessage(l.nav_rdo_catalogue),
            gaText: l.nav_rdo_catalogue.defaultMessage,
            type: "nav-external"
          }, {
            dataTestId: "rdoSupportLink",
            location: {
              domain: r.C.support,
              path: "/categories/115001624507"
            },
            target: "_blank",
            text: a.formatMessage(l.nav_rdo_support),
            gaText: l.nav_rdo_support.defaultMessage,
            type: "nav-external"
          }],
          site: "rdo"
        }),
        V = a => ({
          site: "reddeadredemption",
          appearancePaths: {
            [r.C.www]: [{
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
              domain: r.C.www,
              path: "/reddeadredemption/?section=order"
            },
            ga: "cta_buy"
          }
        }),
        q = a => ({
          site: "rdr2",
          appearancePaths: {
            [r.C.www]: [{
              path: "/reddeadredemption2/*",
              options: {}
            }, {
              path: "/games/reddeadredemption2/*",
              options: {}
            }],
            [r.C.socialClub]: [{
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
              domain: r.C.www,
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
                domain: r.C.www,
                path: "/reddeadredemption2/features/vanderlindegang"
              }
            }, {
              text: a.formatMessage(l.nav_rdr2_locations),
              gaText: l.nav_rdr2_locations.defaultMessage,
              type: "nav-internal",
              dataTestId: "rdr2FrontierLink",
              location: {
                domain: r.C.www,
                path: "/reddeadredemption2/features/frontiercitiesandtowns"
              }
            }, {
              text: a.formatMessage(l.nav_rdr2_wildlife),
              gaText: l.nav_rdr2_wildlife.defaultMessage,
              type: "nav-internal",
              dataTestId: "rdr2WildlifeLink",
              location: {
                domain: r.C.www,
                path: "/reddeadredemption2/features/wildlife"
              }
            }, {
              text: a.formatMessage(l.nav_rdr2_weaponry),
              gaText: l.nav_rdr2_weaponry.defaultMessage,
              type: "nav-internal",
              dataTestId: "rdr2WeaponsLink",
              location: {
                domain: r.C.www,
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
                domain: r.C.socialClub,
                path: "/games/rdr2/overview"
              }
            }, {
              text: a.formatMessage(l.nav_rdr2_chapters),
              gaText: l.nav_rdr2_chapters.defaultMessage,
              type: "nav-internal",
              dataTestId: "rdr2StoryLink",
              location: {
                domain: r.C.socialClub,
                path: "/games/rdr2/story"
              }
            }, {
              text: a.formatMessage(l.nav_rdr2_challenges),
              gaText: l.nav_rdr2_challenges.defaultMessage,
              type: "nav-internal",
              dataTestId: "rdr2ChallengesLink",
              location: {
                domain: r.C.socialClub,
                path: "/games/rdr2/challenges"
              }
            }, {
              text: a.formatMessage(l.nav_rdr2_character),
              gaText: l.nav_rdr2_character.defaultMessage,
              type: "nav-internal",
              dataTestId: "rdr2PlayerLink",
              location: {
                domain: r.C.socialClub,
                path: "/games/rdr2/player"
              }
            }, {
              text: a.formatMessage(l.nav_rdr2_compendium),
              gaText: l.nav_rdr2_compendium.defaultMessage,
              type: "nav-internal",
              dataTestId: "rdr2CompendiumLink",
              location: {
                domain: r.C.socialClub,
                path: "/games/rdr2/compendium"
              }
            }, {
              text: a.formatMessage(l.nav_rdr2_accomplishments),
              gaText: l.nav_rdr2_accomplishments.defaultMessage,
              type: "nav-internal",
              dataTestId: "rdr2AchievementsLink",
              location: {
                domain: r.C.socialClub,
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
                domain: r.C.www,
                path: "/reddeadredemption2/screens"
              }
            }, {
              text: a.formatMessage(l.nav_rdr2_artwork),
              gaText: l.nav_rdr2_artwork.defaultMessage,
              type: "nav-internal",
              dataTestId: "rdr2DownloadsLink",
              location: {
                domain: r.C.www,
                path: "/reddeadredemption2/downloads"
              }
            }, {
              text: a.formatMessage(l.nav_rdr2_videos),
              gaText: l.nav_rdr2_videos.defaultMessage,
              type: "nav-internal",
              dataTestId: "rdr2VideosLink",
              location: {
                domain: r.C.www,
                path: "/reddeadredemption2/videos"
              }
            }, {
              text: a.formatMessage(l.nav_rdr2_music),
              gaText: l.nav_rdr2_music.defaultMessage,
              type: "nav-internal",
              dataTestId: "rdr2MusicLink",
              location: {
                domain: r.C.www,
                path: "/reddeadredemption2/features/music"
              }
            }]
          }, {
            text: a.formatMessage(l.nav_rdr2_online),
            gaText: l.nav_rdr2_online.defaultMessage,
            type: "nav-internal",
            dataTestId: "rdr2RdoLink",
            location: {
              domain: r.C.www,
              path: "/reddeadonline"
            }
          }, {
            text: a.formatMessage(l.nav_rdr2_catalogue),
            gaText: l.nav_rdr2_catalogue.defaultMessage,
            type: "nav-external",
            dataTestId: "rdr2CatalogueLink",
            target: "_blank",
            location: {
              domain: r.C.socialClub,
              path: "/games/rdr2/catalogue"
            }
          }, {
            text: a.formatMessage(l.nav_rdr2_support),
            gaText: l.nav_rdr2_support.defaultMessage,
            type: "nav-external",
            dataTestId: "rdr2SupportLink",
            target: "_blank",
            location: {
              domain: r.C.support,
              path: "/categories/115001624507"
            }
          }],
          cta: {
            text: a.formatMessage(l.nav_rdr2_cta_buy_now),
            gaText: l.nav_rdr2_cta_buy_now.defaultMessage,
            dataTestId: "rdr2StoreLink",
            target: "_blank",
            location: {
              domain: r.C.store,
              path: "/game/buy-red-dead-redemption-2"
            },
            ga: "cta_buy"
          }
        }),
        F = () => ({
          site: "undeadnightmare",
          appearancePaths: {
            [r.C.www]: [{
              path: "/games/undeadnightmare/*",
              options: {}
            }]
          },
          brand: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/27bc39e322a4e55dc8b34fa4543269b8.svg",
          links: []
        }),
        H = () => ({
          site: "reddeadrevolver",
          appearancePaths: {
            [r.C.www]: [{
              path: "/games/reddeadrevolver/*",
              options: {}
            }]
          },
          brand: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/8f508003b671cb320749ffc1eb2aab25.svg",
          links: []
        }),
        J = a => ({
          site: "rsg",
          appearancePaths: {
            [r.C.www]: [{
              path: "/search/*",
              options: {
                isSearchPage: !0,
                forceSearch: !0
              }
            }, {
              path: "/*",
              options: {}
            }],
            [r.C.socialClub]: [{
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
              domain: r.C.www,
              path: "/newswire"
            }
          }, {
            text: a.formatMessage(l.nav_rsg_videos),
            gaText: l.nav_rsg_videos.defaultMessage,
            type: "nav-internal",
            dataTestId: "videosLink",
            location: {
              domain: r.C.www,
              path: "/videos"
            }
          }, {
            text: a.formatMessage(l.nav_rsg_downloads),
            gaText: l.nav_rsg_downloads.defaultMessage,
            type: "nav-internal",
            dataTestId: "downloadsLink",
            location: {
              domain: r.C.www,
              path: "/downloads"
            }
          }, {
            text: a.formatMessage(l.nav_rsg_store),
            gaText: l.nav_rsg_store.defaultMessage,
            type: "nav-external",
            dataTestId: "storeLink",
            target: "_blank",
            location: {
              domain: r.C.store,
              path: "/"
            }
          }, {
            text: a.formatMessage(l.nav_rsg_support),
            gaText: l.nav_rsg_support.defaultMessage,
            type: "nav-external",
            dataTestId: "supportLink",
            target: "_blank",
            location: {
              domain: r.C.support,
              path: "/"
            }
          }],
          cta: {
            text: a.formatMessage(l.nav_rsg_cta_get_launcher),
            gaText: l.nav_rsg_cta_get_launcher.defaultMessage,
            variant: "highlight",
            dataTestId: "launcherLink",
            location: {
              domain: r.C.socialClub,
              path: "/rockstar-games-launcher"
            },
            ga: "cta_download"
          },
          hideQuickAccess: !0
        }),
        Y = () => ({
          site: "stateofemergency",
          appearancePaths: {
            [r.C.www]: [{
              path: "/games/stateofemergency/*",
              options: {}
            }]
          },
          brand: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/2b4f7013cd8954b8f41c5bc60173b1e6.svg",
          links: []
        }),
        W = () => ({
          site: "skateanddestroy",
          appearancePaths: {
            [r.C.www]: [{
              path: "/games/skateanddestroy/*",
              options: {}
            }]
          },
          brand: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/0e24eba17ceb19c8e953425fdc8f69bf.svg",
          links: []
        }),
        Q = () => ({
          site: "smugglersrun",
          appearancePaths: {
            [r.C.www]: [{
              path: "/games/smugglersrun/*",
              options: {}
            }]
          },
          brand: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/56ad67de5fcb23d5170c6ab1c22090a9.png",
          links: []
        }),
        $ = () => ({
          site: "smugglersrun2",
          appearancePaths: {
            [r.C.www]: [{
              path: "/games/smugglersrun2/*",
              options: {}
            }]
          },
          brand: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/95c570982247f87a5720d3b09edea287.png",
          links: []
        }),
        U = () => ({
          site: "smugglersrunwarzones",
          appearancePaths: {
            [r.C.www]: [{
              path: "/games/smugglersrunwarzones/*",
              options: {}
            }]
          },
          brand: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/76ea0a9986ebf83e1bc9be3e03a0433f.png",
          links: []
        }),
        Z = a => ({
          site: "tabletennis",
          appearancePaths: {
            [r.C.www]: [{
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
        K = () => ({
          site: "italianjob",
          appearancePaths: {
            [r.C.www]: [{
              path: "/games/italianjob/*",
              options: {}
            }]
          },
          brand: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/dfc0cce899459d99bc2403b124a5d30d.svg",
          links: []
        }),
        X = a => ({
          site: "thewarriors",
          appearancePaths: {
            [r.C.www]: [{
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
            [r.C.www]: [{
              path: "/games/wildmetal/*",
              options: {}
            }]
          },
          brand: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/95bd5f94c3522fcf1ebc9e1254522379.svg",
          links: []
        }),
        ea = /[*?\\<>&%@:~]/g,
        ta = {
          min: 3,
          max: 100,
          validationFunction: function(a) {
            return a.match(ea)
          }
        },
        sa = (0, r.A)(),
        na = (a, e) => "/" + [e, ...a.split("/")].filter(Boolean).join("/"),
        oa = (a, e) => a ? a === e ? "" : a.startsWith("http") ? a : `https://${sa.sites[a]}.rockstargames.com` : "";
      var ra = t(52542);
      const ia = {
          event: "account_menu_click",
          element_placement: "Account Menu"
        },
        da = (a, e, t, s) => [{
          text: a.formatMessage(l.sc_link_activity_feed),
          location: {
            domain: r.C.socialClub,
            path: "/"
          },
          target: "_self",
          ga: {
            ...ia,
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
              domain: r.C.socialClub,
              path: "/settings"
            },
            target: "_self",
            ga: {
              ...ia,
              text: l.sc_link_settings.defaultMessage
            },
            dataTestId: "settingsLink"
          }, {
            text: a.formatMessage(l.sc_link_view_my_profile),
            location: {
              domain: t,
              path: ""
            },
            target: "_self",
            ga: {
              ...ia,
              text: l.sc_link_view_my_profile.defaultMessage
            },
            dataTestId: "viewMyProfileLink"
          }, {
            text: a.formatMessage(l.sc_link_messages),
            location: {
              domain: r.C.socialClub,
              path: "/message"
            },
            target: "_self",
            ga: {
              ...ia,
              text: l.sc_link_messages.defaultMessage
            },
            dataTestId: "messagesLink"
          }, {
            text: a.formatMessage(l.sc_link_game_activation),
            location: {
              domain: r.C.socialClub,
              path: "/activate"
            },
            target: "_self",
            ga: {
              ...ia,
              text: l.sc_link_game_activation.defaultMessage
            },
            dataTestId: "gameActivationLink"
          }]
        }, {
          text: a.formatMessage(l.sc_link_notifications),
          location: {
            domain: r.C.socialClub,
            path: "/notifications"
          },
          target: "_self",
          hasNotifications: s,
          ga: {
            ...ia,
            text: l.sc_link_notifications.defaultMessage,
            location: {
              domain: r.C.socialClub,
              path: "/notifications"
            }
          },
          dataTestId: "notificationsLink"
        }, {
          text: a.formatMessage(l.sc_link_crews),
          location: {
            domain: r.C.socialClub,
            path: `/member/${e}/crews`
          },
          target: "_self",
          ga: {
            ...ia,
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
              domain: r.C.socialClub,
              path: `/member/${e}/friends`
            },
            target: "_self",
            ga: {
              ...ia,
              text: l.sc_link_my_friends.defaultMessage
            },
            dataTestId: "myFriendsLink"
          }, {
            text: a.formatMessage(l.sc_link_import_friends),
            location: {
              domain: r.C.socialClub,
              path: "/friends/import"
            },
            target: "_self",
            ga: {
              ...ia,
              text: l.sc_link_import_friends.defaultMessage
            },
            dataTestId: "importFriendsLink"
          }, {
            text: a.formatMessage(l.sc_link_find_friends),
            location: {
              domain: r.C.socialClub,
              path: "/members"
            },
            target: "_self",
            ga: {
              ...ia,
              text: l.sc_link_import_friends.defaultMessage
            },
            dataTestId: "findFriendsLink"
          }]
        }],
        la = {
          event: "account_menu_click",
          element_placement: "Account Menu"
        },
        ga = a => ({
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
              domain: r.C.support,
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
              domain: r.C.www,
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
              domain: r.C.www,
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
              domain: r.C.www,
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
              domain: r.C.www,
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
      var _a = t(79112),
        ca = t(82023),
        ma = t(25459);
      var ua = t(25854);
      const va = a => {
          let {
            title: e,
            titleSlug: t,
            path: s,
            ...n
          } = a;
          return (0, ua.jsx)("div", {
            className: "rockstargames-modules-core-headere0f9901f132a6332c84193e3d7602251",
            children: (0, ua.jsx)(ma.A, {
              to: s,
              "aria-label": e,
              ...n,
              children: (0, ua.jsx)(ca.A, {
                title: e,
                titleSlug: t
              })
            })
          }, e)
        },
        pa = "rockstargames-modules-core-headera4f8eb74ae350f61ed4b4fffa4d8ff8d";
      var fa = t(60520);
      const ha = (0, d.defineMessages)({
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
        ba = a => ({
          viewAllLocation: {
            path: "/games"
          },
          games: [{
            titleSlug: "gta-v",
            text: a.formatMessage(ha.games_menu_gta_v),
            gaText: "Grand Theft Auto V",
            path: "/gta-v",
            dataTestId: "gtav"
          }, {
            titleSlug: "gta-online",
            text: a.formatMessage(ha.games_menu_gta_online),
            gaText: "Grand Theft Auto Online",
            path: "/gta-online",
            dataTestId: "gtao"
          }, {
            titleSlug: "reddeadredemption2",
            text: a.formatMessage(ha.games_menu_rdr_2),
            gaText: "Red Dead Redemption 2",
            path: "/reddeadredemption2",
            dataTestId: "rdr2"
          }, {
            titleSlug: "reddeadredemption",
            text: a.formatMessage(ha.games_menu_rdr),
            gaText: "Red Dead Redemption",
            path: "/reddeadredemption",
            dataTestId: "rdr"
          }, {
            titleSlug: "reddeadonline",
            text: a.formatMessage(ha.games_menu_rdr_online),
            gaText: "Red Dead Online",
            path: "/reddeadonline",
            dataTestId: "rdo"
          }]
        });
      var wa = t(54312),
        Ma = t(74956);
      const ya = () => {
          const a = (0, d.useIntl)(),
            e = (0, r.A)(),
            [{
              subdomaincom: t
            }] = (0, d.getLocale)(),
            s = t !== d.englishLocale.subdomaincom ? `/${t}` : "",
            n = e.currentSite?.site === r.C.www ? s : `https://${e.currentSite?.subDomain}.rockstargames.com`,
            {
              viewAllLocation: i,
              games: l
            } = (0, o.useMemo)((() => ba(a)), [t]);
          return (0, ua.jsxs)("div", {
            className: "rockstargames-modules-core-headerdb2039d0fa02404c1e032ddafe358efd",
            "data-testid": "gamesMenu",
            children: [(0, ua.jsxs)("div", {
              className: "rockstargames-modules-core-headerb2d95a9777e140a30958fbd98a9fb053",
              children: [(0, ua.jsx)("div", {
                children: (0, ua.jsx)("h2", {
                  className: "rockstargames-modules-core-headerbacc5a58858921d497c7752942deb135",
                  children: a.formatMessage(ha.games_menu_featured)
                })
              }), (0, ua.jsx)("div", {
                children: (0, ua.jsxs)("a", {
                  className: pa,
                  href: n + i.path,
                  children: [a.formatMessage(ha.games_menu_view_all), (0, ua.jsx)("img", {
                    src: fa.ZM,
                    alt: a.formatMessage(ha.games_menu_view_all)
                  })]
                })
              })]
            }), (0, ua.jsx)("div", {
              className: "rockstargames-modules-core-headere104ee1bbcd8b04a2ea224fdccd9bb67",
              children: l.map((a => (0, ua.jsx)(va, {
                title: a.text,
                titleSlug: a.titleSlug,
                path: n + a.path
              }, a.titleSlug)))
            })]
          })
        },
        xa = () => {
          const a = (0, d.useIntl)(),
            {
              isHidden: e
            } = (0, o.useContext)(wa.jd),
            {
              inMobileMenu: t
            } = (0, o.useContext)(Ma.xN);
          return t ? (0, ua.jsx)(ka, {}) : (0, ua.jsxs)(wa.Dr, {
            children: [(0, ua.jsx)(wa.cQ, {
              children: a.formatMessage(ha.games_menu_item)
            }), !e && (0, ua.jsx)(wa.rm, {
              className: "rockstargames-modules-core-headercaea3404775ed365d2f4aef72c9990dc",
              animationOverride: "expandCollapse",
              children: (0, ua.jsx)(ya, {})
            })]
          })
        },
        ka = () => {
          const a = (0, d.useIntl)(),
            e = (0, r.A)(),
            [{
              subdomaincom: t
            }] = (0, d.getLocale)(),
            s = t !== d.englishLocale.subdomaincom ? `/${t}` : "",
            n = e.currentSite?.site === r.C.www ? s : `https://${e.currentSite?.subDomain}.rockstargames.com`,
            {
              viewAllLocation: i,
              games: l
            } = (0, o.useMemo)((() => ba(a)), [t]);
          return (0, ua.jsxs)("div", {
            className: "rockstargames-modules-core-headerfe834e50d3f69cf38cdc43eb2a6d7d89",
            "data-testid": "gamesMenu",
            children: [(0, ua.jsxs)("div", {
              className: "rockstargames-modules-core-headerefbf909442a1564a3efb261ef928345d",
              children: [(0, ua.jsx)("h2", {
                children: a.formatMessage(ha.games_menu_featured)
              }), (0, ua.jsxs)("a", {
                className: pa,
                href: n + i.path,
                children: [a.formatMessage(ha.games_menu_view_all), (0, ua.jsx)("img", {
                  src: fa.ZM,
                  alt: a.formatMessage(ha.games_menu_view_all)
                })]
              })]
            }), (0, ua.jsx)(_a.RC, {
              className: "rockstargames-modules-core-headerb673908f44e71f1c48537b69a244eaf5",
              spaceBetween: 12.8,
              loop: !1,
              grabCursor: !0,
              centeredSlides: !1,
              slidesPerView: 2.5,
              speed: 700,
              children: l.map((a => (0, ua.jsx)(_a.qr, {
                className: "rockstargames-modules-core-headerdf455110c72d70cc653582db9d812af6",
                children: (0, ua.jsx)(va, {
                  titleSlug: a.titleSlug,
                  title: a.text,
                  gaText: a.gaText,
                  gaBreadCrumb: `Games > ${a.gaText}`,
                  path: n + a.path,
                  dataTestId: a.dataTestId
                })
              }, a.gaText)))
            })]
          })
        },
        Ca = ka,
        Ta = a => {
          let {
            globalNavLoaderComponent: e,
            globalNavComponent: t,
            locale: i,
            username: g,
            userProfileLink: _,
            hasNotifications: c,
            ...m
          } = a;
          const u = (0, d.useIntl)(),
            v = (0, r.A)(),
            p = (a => {
              const e = (0, r.A)(),
                t = a.subdomaincom,
                s = a => {
                  const n = e.currentSite?.site !== r.C.www && a.location?.domain === r.C.www && "en" !== t;
                  return {
                    ...a,
                    ...a.children ? {
                      children: a.children.map(s)
                    } : {},
                    ...a.targets ? {
                      targets: a.targets.map(s)
                    } : {},
                    ...a.location ? {
                      location: {
                        ...a.location,
                        path: n ? na(a.location.path, t) : a.location.path,
                        domain: e?.currentSite ? oa(a.location.domain, e.currentSite.site) : ""
                      }
                    } : {}
                  }
                };
              return a => s(a)
            })(i),
            f = e,
            h = (a => ({
              targets: [{
                text: a.formatMessage(l.search_target_games),
                gaText: l.search_target_games.defaultMessage,
                tab: "games",
                type: "",
                location: {
                  domain: r.C.www,
                  path: "/search",
                  params: {
                    q: "{query}",
                    tab: "games"
                  }
                },
                searchOptions: ta
              }, {
                text: a.formatMessage(l.search_target_posts),
                gaText: l.search_target_posts.defaultMessage,
                tab: "posts",
                type: "",
                location: {
                  domain: r.C.www,
                  path: "/search",
                  params: {
                    q: "{query}",
                    tab: "posts"
                  }
                },
                searchOptions: ta
              }, {
                text: a.formatMessage(l.search_target_videos),
                gaText: l.search_target_videos.defaultMessage,
                tab: "videos",
                type: "",
                location: {
                  domain: r.C.www,
                  path: "/search",
                  params: {
                    q: "{query}",
                    tab: "videos"
                  }
                },
                searchOptions: ta
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
                    domain: r.C.socialClub,
                    path: "/members/{term}"
                  },
                  searchOptions: ta
                }, {
                  text: a.formatMessage(l.search_target_crews),
                  gaText: l.search_target_crews.defaultMessage,
                  type: "",
                  location: {
                    domain: r.C.socialClub,
                    path: "/crews/{term}"
                  },
                  searchOptions: ta
                }, {
                  text: a.formatMessage(l.search_target_jobs),
                  gaText: l.search_target_jobs.defaultMessage,
                  type: "",
                  location: {
                    domain: r.C.socialClub,
                    path: "/jobs/{term}"
                  },
                  searchOptions: ta
                }, {
                  text: a.formatMessage(l.search_target_user_photos),
                  gaText: l.search_target_user_photos.defaultMessage,
                  type: "",
                  location: {
                    domain: r.C.socialClub,
                    path: "/photos/{term}"
                  },
                  searchOptions: ta
                }]
              }]
            }))(u),
            [b, w] = (0, o.useState)(window.innerWidth < 1024),
            M = Object.values(s).map((a => a(u))),
            y = (0, o.useMemo)((() => {
              const a = v.currentSite?.site,
                e = J(u).links;
              return M.reduce(((t, s) => {
                if (!v.currentSite?.site || !s?.appearancePaths?.[v.currentSite.site]) return t;
                const n = ((a, e, t, s) => a && 0 !== a.length || "www" !== t || !s ? a : e)(s.links, e, a, b);
                return [...t, {
                  ...s,
                  appearancePaths: v.currentSite?.site ? s?.appearancePaths?.[v.currentSite.site] : [],
                  links: n.map(p),
                  cta: s.cta && p(s.cta)
                }]
              }), [])
            }), [b, M]),
            x = {
              ...h,
              targets: h.targets.map(p)
            },
            k = (0, o.useMemo)((() => ({
              loggedInLinks: da(u, g, _, c).map(p),
              helpItem: p(ga(u))
            })), [u, g, _, c]);
          return (0, o.useEffect)((() => {
            const a = () => {
              w(window.innerWidth < 1024)
            };
            return window.addEventListener("resize", a), () => {
              window.removeEventListener("resize", a)
            }
          }), []), (0, ua.jsx)(f, {
            navigationData: y,
            locale: i,
            globalNavigationComponent: t,
            searchConfig: x,
            gamesMenuComponent: n,
            avatarMenuData: k,
            ...m
          })
        },
        Ia = (0, d.withIntl)((a => {
          let {
            globalNavLoaderComponent: e,
            globalNavComponent: t,
            username: s,
            userProfileLink: n,
            hasNotifications: o,
            ...r
          } = a;
          const [i] = (0, d.getLocale)();
          return e ? (0, ua.jsx)(Ta, {
            globalNavLoaderComponent: e,
            globalNavComponent: t,
            locale: i,
            username: s,
            userProfileLink: n,
            hasNotifications: o,
            ...r
          }) : null
        }), ra)
    },
    94222: a => {
      a.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/af22c6826e05c14923a3f11c69a2130c.svg"
    },
    96099: (a, e, t) => {
      t.d(e, {
        PY: () => u,
        Y9: () => m,
        bL: () => p
      });
      var s = t(71127),
        n = (t(79952), t(81788)),
        o = t(64989);
      var r = t(25854);
      const i = () => {
        const a = (0, s.useRef)(null);
        return (0, r.jsx)("button", {
          ref: a,
          className: "rockstargames-modules-core-headerc95fa2303ee2096feb04a8cd9d2a5a4b",
          onClick: () => {
            const e = document.querySelector(".siteHeaderContainer");
            if (window?.__spatialNavigation__?.enableExperimentalAPIs(!0), e && window?.__spatialNavigation__) {
              const t = window?.__spatialNavigation__?.findCandidates(e, "down", {
                  mode: "all"
                }),
                s = t.filter((t => !e.contains(t) && a.current !== t));
              s.length > 0 && s[0].focus()
            }
          },
          children: (0, r.jsx)(n.FormattedMessage, {
            ...o.A.accessibility_skip_button
          })
        })
      };
      var d = t(64158),
        l = t(24036),
        g = t.n(l),
        _ = t(52542),
        c = t(63582);
      const m = a => {
          let {
            children: e
          } = a;
          return (0, r.jsx)("header", {
            className: g()(d.default.header, d.default.fixed),
            children: e
          })
        },
        u = (0, s.createContext)({
          isNavHidden: !1
        }),
        v = {
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
        p = (0, n.withIntl)((a => {
          let {
            children: e,
            brand: o
          } = a;
          const [l, g] = (0, s.useState)(!1), _ = (0, s.useRef)(null), [{
            iso: m
          }] = (0, n.getLocale)();
          return (0, s.useEffect)((() => {
            let a = window.scrollY;
            const e = () => {
              const e = window.scrollY > 140,
                t = window.scrollY > a;
              g(e && t), a = window.scrollY
            };
            return window.addEventListener("scroll", e), () => {
              window.removeEventListener("scroll", e)
            }
          }), [l]), (0, s.useEffect)((() => {
            Promise.resolve().then(t.bind(t, 64158))
          })), (0, r.jsx)("div", {
            className: "siteHeaderContainer",
            children: (0, r.jsx)(u.Provider, {
              value: {
                brand: o,
                isNavHidden: l,
                containerRef: _
              },
              children: (0, r.jsxs)("div", {
                className: d.default.globalNavigationRoot,
                ref: _,
                lang: m,
                children: [(0, r.jsx)(i, {}), (0, r.jsx)("div", {
                  className: d.default.globalNavigationSpacer
                }), (0, r.jsx)(c.motion.div, {
                  className: d.default.globalNavigationContainer,
                  variants: v,
                  initial: "visible",
                  animate: l ? "hidden" : "visible",
                  children: e
                })]
              })
            })
          })
        }), _)
    },
    98081: (a, e, t) => {
      t.d(e, {
        b: () => s
      });
      const s = {
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
    }
  }
]);