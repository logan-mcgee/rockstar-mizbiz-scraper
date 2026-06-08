try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "be90e02f-d225-4c27-9378-8951faf95d96", e._sentryDebugIdIdentifier = "sentry-dbid-be90e02f-d225-4c27-9378-8951faf95d96")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/sites-gta-gen9",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_gta_gen9 = self.webpackChunk_rockstargames_sites_gta_gen9 || []).push([
  [4585], {
    33759(e, a, t) {
      t.d(a, {
        A: () => m
      });
      var o = t(80391),
        n = t(28985),
        r = t(47240),
        d = t(32903),
        s = t(81715),
        i = t(49429),
        c = t(11008);
      const f = {
          ps: o,
          ps3: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d118a14a73ce72b4687d9eb69724f4d2.svg",
          ps4: n,
          ps5: r,
          switch: c,
          nintendoswitch: c,
          nintendoswitch2: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/7696cbc8ff9dc5f2ed3f618ea7252e3b.svg",
          xbox: d,
          xboxone: i,
          xboxseriesxs: s,
          xbox360: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1c5cee7464423693de19149a4554b3c2.svg",
          pc: t(85719),
          pcalt: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/2921f91628eca684eaf0f91d8b6a5a76.svg",
          play: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/59c4aadbdbfcdb8d06d7caa54bdc9f60.svg",
          applestore: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/38a6e85fa4a378c5620efa9fde8ff223.svg",
          googleplay: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/ca4e52b102306a186549cfd712b1c8f8.svg",
          questionMark: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/e6833fa9baf4a5382bdd84b0b7d2c03f.svg",
          netflix: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/fc13a3a816ffa3f7e379ea32a79f99a3.svg",
          default: ""
        },
        m = e => f[e] || null
    },
    85719(e) {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1c050b43f15f34e2cd0592fad6dc48fd.svg"
    },
    80391(e) {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1506c5bba61fa270f73c874e3d60a94f.svg"
    },
    28985(e) {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/3f9f55567df4006813f8bf50ad383ea0.svg"
    },
    47240(e) {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/6e8f340ded0fd6b0b0d434e8c6c8b75e.svg"
    },
    11008(e) {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/925d3b2d0b0e784c366e20d3f1a660da.svg"
    },
    32903(e) {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d6d2cb861c79506282c6d6cbf1170f81.svg"
    },
    49429(e) {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5f91e4753c491fb23c2b364f69480c9e.svg"
    },
    81715(e) {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/205366df6706c3b367fb5ff4f26ab7f3.svg"
    },
    84173(e, a, t) {
      t.d(a, {
        DX: () => o.DX,
        xV: () => o.xV,
        s6: () => s
      });
      var o = t(38957),
        n = t(39793),
        r = t(93082),
        d = t(3541);
      const s = ({
        enabled: e = !0,
        ...a
      }) => {
        const t = e ? d.s6 : r.Fragment;
        return (0, n.jsx)(t, {
          ...a
        })
      }
    },
    50446(e, a, t) {
      t.d(a, {
        s: () => d,
        t: () => r
      });
      var o = t(93082);

      function n(e, a) {
        if ("function" == typeof e) return e(a);
        null != e && (e.current = a)
      }

      function r(...e) {
        return a => {
          let t = !1;
          const o = e.map(e => {
            const o = n(e, a);
            return t || "function" != typeof o || (t = !0), o
          });
          if (t) return () => {
            for (let a = 0; a < o.length; a++) {
              const t = o[a];
              "function" == typeof t ? t() : n(e[a], null)
            }
          }
        }
      }

      function d(...e) {
        return o.useCallback(r(...e), e)
      }
    },
    20972(e, a, t) {
      t.d(a, {
        sG: () => d
      });
      var o = t(93082),
        n = (t(84017), t(38957)),
        r = t(39793),
        d = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"].reduce((e, a) => {
          const t = (0, n.TL)(`Primitive.${a}`),
            d = o.forwardRef((e, o) => {
              const {
                asChild: n,
                ...d
              } = e, s = n ? t : a;
              return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, r.jsx)(s, {
                ...d,
                ref: o
              })
            });
          return d.displayName = `Primitive.${a}`, {
            ...e,
            [a]: d
          }
        }, {})
    },
    38957(e, a, t) {
      var o;
      t.d(a, {
        DX: () => m,
        TL: () => f,
        xV: () => u
      });
      var n = t(93082),
        r = t(50446),
        d = t(39793),
        s = Symbol.for("react.lazy"),
        i = (o || (o = t.t(n, 2)))[" use ".trim().toString()];

      function c(e) {
        return null != e && "object" == typeof e && "$$typeof" in e && e.$$typeof === s && "_payload" in e && "object" == typeof(a = e._payload) && null !== a && "then" in a;
        var a
      }

      function f(e) {
        const a = l(e),
          t = n.forwardRef((e, t) => {
            let {
              children: o,
              ...r
            } = e;
            c(o) && "function" == typeof i && (o = i(o._payload));
            const s = n.Children.toArray(o),
              f = s.find(b);
            if (f) {
              const e = f.props.children,
                o = s.map(a => a === f ? n.Children.count(e) > 1 ? n.Children.only(null) : n.isValidElement(e) ? e.props.children : null : a);
              return (0, d.jsx)(a, {
                ...r,
                ref: t,
                children: n.isValidElement(e) ? n.cloneElement(e, void 0, o) : null
              })
            }
            return (0, d.jsx)(a, {
              ...r,
              ref: t,
              children: o
            })
          });
        return t.displayName = `${e}.Slot`, t
      }
      var m = f("Slot");

      function l(e) {
        const a = n.forwardRef((e, a) => {
          let {
            children: t,
            ...o
          } = e;
          if (c(t) && "function" == typeof i && (t = i(t._payload)), n.isValidElement(t)) {
            const e = function(e) {
                let a = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
                  t = a && "isReactWarning" in a && a.isReactWarning;
                return t ? e.ref : (a = Object.getOwnPropertyDescriptor(e, "ref")?.get, t = a && "isReactWarning" in a && a.isReactWarning, t ? e.props.ref : e.props.ref || e.ref)
              }(t),
              d = function(e, a) {
                const t = {
                  ...a
                };
                for (const o in a) {
                  const n = e[o],
                    r = a[o];
                  /^on[A-Z]/.test(o) ? n && r ? t[o] = (...e) => {
                    const a = r(...e);
                    return n(...e), a
                  } : n && (t[o] = n) : "style" === o ? t[o] = {
                    ...n,
                    ...r
                  } : "className" === o && (t[o] = [n, r].filter(Boolean).join(" "))
                }
                return {
                  ...e,
                  ...t
                }
              }(o, t.props);
            return t.type !== n.Fragment && (d.ref = a ? (0, r.t)(a, e) : e), n.cloneElement(t, d)
          }
          return n.Children.count(t) > 1 ? n.Children.only(null) : null
        });
        return a.displayName = `${e}.SlotClone`, a
      }
      var p = Symbol("radix.slottable");

      function g(e) {
        const a = ({
          children: e
        }) => (0, d.jsx)(d.Fragment, {
          children: e
        });
        return a.displayName = `${e}.Slottable`, a.__radixId = p, a
      }
      var u = g("Slottable");

      function b(e) {
        return n.isValidElement(e) && "function" == typeof e.type && "__radixId" in e.type && e.type.__radixId === p
      }
    },
    3541(e, a, t) {
      t.d(a, {
        bL: () => i,
        s6: () => s
      });
      var o = t(93082),
        n = t(20972),
        r = t(39793),
        d = Object.freeze({
          position: "absolute",
          border: 0,
          width: 1,
          height: 1,
          padding: 0,
          margin: -1,
          overflow: "hidden",
          clip: "rect(0, 0, 0, 0)",
          whiteSpace: "nowrap",
          wordWrap: "normal"
        }),
        s = o.forwardRef((e, a) => (0, r.jsx)(n.sG.span, {
          ...e,
          ref: a,
          style: {
            ...d,
            ...e.style
          }
        }));
      s.displayName = "VisuallyHidden";
      var i = s
    }
  }
]);