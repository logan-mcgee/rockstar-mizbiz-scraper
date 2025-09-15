try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    l = (new e.Error).stack;
  l && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[l] = "eaba12d7-354a-4c79-a4be-e6289c6bf138", e._sentryDebugIdIdentifier = "sentry-dbid-eaba12d7-354a-4c79-a4be-e6289c6bf138")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "7e6a862245c0f03cf7f976b07fd639dca846e391",
    packageName: "@rockstargames/sites-rockstargames",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "7e6a862245c0f03cf7f976b07fd639dca846e391"
}, (self.webpackChunk_rockstargames_sites_rockstargames = self.webpackChunk_rockstargames_sites_rockstargames || []).push([
  [9071], {
    19071: (e, l, a) => {
      a.r(l), a.d(l, {
        Activity: () => pa,
        ArrowDown: () => Ya,
        ArrowLeft: () => Va,
        ArrowRight: () => er,
        ArrowRightLeft: () => ka,
        ArrowUp: () => La,
        ArrowUpDown: () => Da,
        Book: () => Fc,
        Bug: () => fe,
        BugOff: () => je,
        Calendar: () => Ti,
        CalendarOff: () => Zi,
        Car: () => go,
        CarSide: () => Mo,
        ChartSpline: () => ds,
        Check: () => on,
        ChevronDown: () => sr,
        ChevronFirst: () => Nr,
        ChevronLast: () => Fr,
        ChevronLeft: () => hr,
        ChevronRight: () => xr,
        ChevronUp: () => Ea,
        ChevronsDownUp: () => ur,
        ChevronsLeftRight: () => Ir,
        ChevronsUpDown: () => Ur,
        CircleCheck: () => wn,
        CircleDollarSign: () => Eh,
        CircleHelp: () => P,
        CircleMinus: () => qn,
        CirclePerson: () => Ae,
        CircleSlash: () => Oe,
        CircleX: () => Tn,
        Clipboard: () => td,
        Clock: () => $i,
        CloudAlert: () => Uc,
        CloudDownload: () => Kr,
        CloudUpload: () => zr,
        CodeXml: () => Kc,
        Copy: () => nd,
        Cpu: () => qi,
        Database: () => lf,
        Discord: () => Dd,
        DollarSign: () => Yh,
        Download: () => ct,
        EllipsisVertical: () => vh,
        Envelope: () => ml,
        EnvelopeOpen: () => $n,
        ExternalLink: () => gt,
        Eye: () => C,
        EyeClosed: () => B,
        EyeOff: () => G,
        Facebook: () => Ed,
        FastForward: () => ec,
        FileText: () => Dh,
        Files: () => kh,
        Filter: () => ph,
        Flag: () => Se,
        FlagOff: () => Xe,
        Gear: () => ql,
        Globe: () => Hn,
        Handshake: () => Tl,
        Headset: () => Xs,
        Heart: () => Vh,
        HeartPulse: () => yn,
        House: () => _t,
        Image: () => Qo,
        Info: () => Q,
        Instagram: () => kd,
        LayoutGrid: () => bi,
        Lightbulb: () => an,
        Link: () => rl,
        List: () => vd,
        ListFilter: () => pd,
        LockKeyhole: () => Po,
        LockPassword: () => _o,
        MapPin: () => bl,
        Maximize: () => Hi,
        Maximize2: () => lt,
        Menu: () => va,
        MessageSquareText: () => Co,
        Minimize: () => yi,
        Minimize2: () => Pt,
        Minus: () => Zn,
        Monitor: () => ri,
        Moon: () => M,
        PaperPlane: () => fs,
        Paperclip: () => th,
        PartialCircle: () => Go,
        Pause: () => sc,
        Pencil: () => oi,
        PencilOff: () => wi,
        Person: () => Re,
        PersonBlock: () => ta,
        PersonMinus: () => Zl,
        PersonPlus: () => wl,
        Play: () => hc,
        Plus: () => mi,
        Power: () => Os,
        Property: () => Qt,
        RefreshCw: () => Mt,
        RefreshCwOff: () => Gt,
        Replay: () => Ct,
        Rewind: () => xc,
        Search: () => Bo,
        Server: () => df,
        ShieldAlert: () => ol,
        ShieldCheck: () => Hl,
        SkipBack: () => uc,
        SkipForward: () => zc,
        Star: () => $l,
        StarOff: () => Ic,
        Stop: () => Nc,
        Store: () => as,
        Sun: () => _,
        ThumbsDown: () => Je,
        ThumbsUp: () => We,
        Tiktok: () => co,
        Trash: () => nh,
        TriangleAlert: () => mn,
        Trophy: () => Vd,
        Twitch: () => Yd,
        Twitter: () => so,
        TwoPeople: () => na,
        Undo: () => Bt,
        Unlink: () => Ld,
        Upload: () => it,
        Volume: () => js,
        Volume1: () => Rs,
        Volume2: () => As,
        VolumeX: () => Ss,
        Weapon: () => Lh,
        Wifi: () => Ws,
        WifiOff: () => Js,
        Wrench: () => yl,
        X: () => bn,
        Youtube: () => eo,
        ZoomIn: () => ae,
        ZoomOut: () => de
      });
      var r = a(42295),
        t = a(62229),
        s = a(69055),
        i = ({
          children: e,
          label: l
        }) => {
          const a = t.Children.only(e);
          return (0, r.jsxs)(r.Fragment, {
            children: [t.cloneElement(a, {
              "aria-hidden": "true",
              focusable: "false"
            }), (0, r.jsx)(s.bL, {
              children: l
            })]
          })
        };
      i.displayName = "AccessibleIcon";
      var d = i,
        o = a(68791);

      function n(e) {
        var l = function(e) {
          if ("object" != typeof e || !e) return e;
          var l = e[Symbol.toPrimitive];
          if (void 0 !== l) {
            var a = l.call(e, "string");
            if ("object" != typeof a) return a;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e);
        return "symbol" == typeof l ? l : String(l)
      }

      function h(e, l) {
        var a = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          l && (r = r.filter((function(l) {
            return Object.getOwnPropertyDescriptor(e, l).enumerable
          }))), a.push.apply(a, r)
        }
        return a
      }

      function c(e) {
        for (var l = 1; l < arguments.length; l++) {
          var a = null != arguments[l] ? arguments[l] : {};
          l % 2 ? h(Object(a), !0).forEach((function(l) {
            var r, t, s;
            r = e, t = l, s = a[l], (t = n(t)) in r ? Object.defineProperty(r, t, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : r[t] = s
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : h(Object(a)).forEach((function(l) {
            Object.defineProperty(e, l, Object.getOwnPropertyDescriptor(a, l))
          }))
        }
        return e
      }

      function f(e, l) {
        var a = {};
        for (var r in e) a[r] = l(e[r], r);
        return a
      }
      var w, v, x = (e, l, a) => {
          for (var r of Object.keys(e)) {
            var t;
            if (e[r] !== (null !== (t = l[r]) && void 0 !== t ? t : a[r])) return !1
          }
          return !0
        },
        g = (w = {
          defaultClassName: "foundry_v1yii70",
          variantClassNames: {
            size: {
              SM: "foundry_v1yii71",
              MD: "foundry_v1yii72",
              LG: "foundry_v1yii73",
              XL: "foundry_v1yii74"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }, (v = e => {
          var l = w.defaultClassName,
            a = c(c({}, w.defaultVariants), e);
          for (var r in a) {
            var t, s = null !== (t = a[r]) && void 0 !== t ? t : w.defaultVariants[r];
            if (null != s) {
              var i = s;
              "boolean" == typeof i && (i = !0 === i ? "true" : "false");
              var d = w.variantClassNames[r][i];
              d && (l += " " + d)
            }
          }
          for (var [o, n] of w.compoundVariants) x(o, a, w.defaultVariants) && (l += " " + n);
          return l
        }).variants = () => Object.keys(w.variantClassNames), v.classNames = {
          get base() {
            return w.defaultClassName.split(" ")[0]
          },
          get variants() {
            return f(w.variantClassNames, (e => f(e, (e => e.split(" ")[0]))))
          }
        }, v);
      const j = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M6.582 2.859a5.333 5.333 0 1 0 6.56 6.559 4.909 4.909 0 0 1-6.56-6.56m-2.286-.402A6.67 6.67 0 0 1 8 1.334a.667.667 0 0 1 .471 1.138 3.576 3.576 0 1 0 5.058 5.057.667.667 0 0 1 1.138.471 6.666 6.666 0 1 1-10.37-5.543",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        m = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M9.874 4.288a8 8 0 1 0 9.838 9.838 7.363 7.363 0 0 1-9.838-9.838m-3.43-.603A10 10 0 0 1 12 2a1 1 0 0 1 .707 1.707 5.364 5.364 0 0 0 7.586 7.586A1 1 0 0 1 22 12 10 10 0 1 1 6.444 3.685",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        p = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "20",
            height: "20",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 20 20",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M7.613 6.25c0-.936.215-1.85.616-2.677A6.67 6.67 0 0 0 3.84 7.45a6.667 6.667 0 1 0 12.585 4.322 6.136 6.136 0 0 1-8.813-5.52m1.667 0a4.47 4.47 0 0 0 7.631 3.161.833.833 0 0 1 1.422.589A8.333 8.333 0 1 1 10 1.667a.833.833 0 0 1 .589 1.422A4.47 4.47 0 0 0 9.28 6.25"
            })
          })
        }))),
        u = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M13.165 5.717a10.667 10.667 0 1 0 13.118 13.118A9.818 9.818 0 0 1 13.165 5.717m-4.573-.803A13.33 13.33 0 0 1 16 2.667a1.333 1.333 0 0 1 .943 2.276 7.152 7.152 0 0 0 10.114 10.114 1.333 1.333 0 0 1 2.276.943A13.333 13.333 0 1 1 8.593 4.914",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        M = (0, t.forwardRef)((({
          size: e = "SM",
          ...l
        }, a) => {
          const t = (0, o.v6)(l, {
            className: g({
              size: e
            })
          });
          return (0, r.jsxs)(r.Fragment, {
            children: ["SM" === e && (0, r.jsx)(j, {
              ...t,
              ref: a
            }), "LG" === e && (0, r.jsx)(m, {
              ...t,
              ref: a
            }), "MD" === e && (0, r.jsx)(p, {
              ...t,
              ref: a
            }), "XL" === e && (0, r.jsx)(u, {
              ...t,
              ref: a
            })]
          })
        }));
      M.displayName = "Moon", M.categories = ["accessibility"], M.tags = ["dark", "night", "lightness", "theme", "brightness"], M.SM = j, M.LG = m, M.MD = p, M.XL = u;
      const R = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M8 2.667a7.84 7.84 0 0 1 7.25 4.87 1.33 1.33 0 0 1-.009.95A7.835 7.835 0 0 1 3.643 12.01 7.83 7.83 0 0 1 .75 8.464a1.33 1.33 0 0 1 .009-.95A7.83 7.83 0 0 1 8 2.667m0 1.334A6.5 6.5 0 0 0 2 8a6.5 6.5 0 0 0 12 0 6.5 6.5 0 0 0-6-3.999M9.333 8a1.333 1.333 0 1 0-2.666 0 1.333 1.333 0 0 0 2.666 0m1.334 0a2.667 2.667 0 1 1-5.334 0 2.667 2.667 0 0 1 5.334 0"
            })
          })
        }))),
        b = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M12 4a11.75 11.75 0 0 1 10.689 6.87l.174.401.012.033a2 2 0 0 1 0 1.392l-.012.033a11.751 11.751 0 0 1-21.726 0l-.013-.033a2 2 0 0 1 0-1.392l.013-.033A11.75 11.75 0 0 1 12 4.001m0 2a9.75 9.75 0 0 0-9 6 9.75 9.75 0 0 0 14.423 4.352A9.75 9.75 0 0 0 21 12 9.75 9.75 0 0 0 12 6m2 6A2 2 0 1 0 10 12 2 2 0 0 0 14 12m2 0a4 4 0 1 1-8-.001 4 4 0 0 1 8 0"
            })
          })
        }))),
        L = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "20",
            height: "20",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 20 20",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M10 3.334a9.79 9.79 0 0 1 8.907 5.725l.145.334.01.027a1.67 1.67 0 0 1-.01 1.187A9.792 9.792 0 0 1 .937 10.58a1.67 1.67 0 0 1 0-1.16l.01-.027A9.79 9.79 0 0 1 10 3.334M10 5a8.13 8.13 0 0 0-7.5 4.999 8.126 8.126 0 0 0 12.019 3.628 8.13 8.13 0 0 0 2.98-3.628A8.12 8.12 0 0 0 10 5m1.666 5a1.667 1.667 0 1 0-3.333 0 1.667 1.667 0 0 0 3.333 0m1.667 0a3.333 3.333 0 1 1-6.666 0 3.333 3.333 0 0 1 6.666 0"
            })
          })
        }))),
        z = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M16 5.334a15.67 15.67 0 0 1 14.252 9.16l.231.534.018.044a2.67 2.67 0 0 1 0 1.856l-.018.044a15.668 15.668 0 0 1-28.966 0q-.01-.021-.018-.044a2.67 2.67 0 0 1 0-1.856l.018-.044A15.67 15.67 0 0 1 16 5.334M16 8a13 13 0 0 0-12 8 13 13 0 0 0 19.23 5.803A13 13 0 0 0 28 16a13 13 0 0 0-12-7.999m2.667 8a2.667 2.667 0 1 0-5.334.001A2.667 2.667 0 0 0 18.667 16m2.666 0a5.334 5.334 0 1 1-10.667 0 5.334 5.334 0 0 1 10.667 0"
            })
          })
        }))),
        C = (0, t.forwardRef)((({
          size: e = "SM",
          ...l
        }, a) => {
          const t = (0, o.v6)(l, {
            className: g({
              size: e
            })
          });
          return (0, r.jsxs)(r.Fragment, {
            children: ["SM" === e && (0, r.jsx)(R, {
              ...t,
              ref: a
            }), "LG" === e && (0, r.jsx)(b, {
              ...t,
              ref: a
            }), "MD" === e && (0, r.jsx)(L, {
              ...t,
              ref: a
            }), "XL" === e && (0, r.jsx)(z, {
              ...t,
              ref: a
            })]
          })
        }));
      C.displayName = "Eye", C.categories = ["accessibility", "photography", "design", "security"], C.tags = ["view", "watch", "see", "show", "expose", "reveal", "display", "visible", "visibility", "vision", "preview", "read", "password", "sign", "vision", "look"], C.SM = R, C.LG = b, C.MD = L, C.XL = z;
      const A = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M1.105 4.707a.667.667 0 0 1 .855.398 6.43 6.43 0 0 0 12.08 0 .667.667 0 1 1 1.253.457 7.76 7.76 0 0 1-2.161 3.164l.711.845a.667.667 0 1 1-1.02.858l-.766-.91a7.8 7.8 0 0 1-1.749.794l.343 1.542a.667.667 0 1 1-1.302.29l-.343-1.546a7.8 7.8 0 0 1-2.012 0l-.343 1.546a.667.667 0 1 1-1.302-.29l.343-1.542a7.8 7.8 0 0 1-1.75-.794l-.765.91a.667.667 0 1 1-1.02-.858l.711-.845a7.76 7.76 0 0 1-2.16-3.164.667.667 0 0 1 .397-.855",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        H = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M1.657 7.06a1 1 0 0 1 1.282.597 9.645 9.645 0 0 0 18.122 0 1 1 0 1 1 1.878.686 11.65 11.65 0 0 1-3.241 4.745l1.067 1.268a1 1 0 0 1-1.53 1.288l-1.15-1.365c-.824.506-1.706.905-2.623 1.19l.514 2.314a1 1 0 1 1-1.952.434l-.515-2.32a11.6 11.6 0 0 1-3.018 0l-.515 2.32a1 1 0 1 1-1.952-.434l.514-2.314a11.7 11.7 0 0 1-2.624-1.19l-1.149 1.365a1 1 0 0 1-1.53-1.288l1.067-1.268a11.65 11.65 0 0 1-3.241-4.745 1 1 0 0 1 .596-1.283",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        V = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "20",
            height: "20",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 20 20",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M17.584 6.303a.834.834 0 0 1 1.532.65l-.134.347a9.7 9.7 0 0 1-2.567 3.607l.89 1.057a.833.833 0 0 1-1.276 1.073l-.959-1.139a9.7 9.7 0 0 1-2.186.992l.43 1.93a.833.833 0 1 1-1.628.36l-.43-1.934A10 10 0 0 1 10 13.33q-.635-.001-1.258-.084l-.429 1.935a.833.833 0 1 1-1.627-.362l.428-1.929a9.7 9.7 0 0 1-2.185-.993l-.959 1.14-.636-.537-.638-.536.889-1.057c-1.12-.986-2-2.22-2.567-3.607l-.134-.347-.025-.082a.834.834 0 0 1 1.558-.568l.033.078.111.288a8.037 8.037 0 0 0 14.99-.288zM3.97 13.037a.833.833 0 1 1-1.274-1.073z"
            })
          })
        }))),
        I = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M2.21 9.414a1.333 1.333 0 0 1 1.71.796 12.86 12.86 0 0 0 24.16 0 1.333 1.333 0 0 1 2.506.914 15.5 15.5 0 0 1-4.322 6.327l1.423 1.69a1.333 1.333 0 0 1-2.04 1.718l-1.533-1.82a15.5 15.5 0 0 1-3.498 1.587l.686 3.085a1.333 1.333 0 0 1-2.604.578l-.686-3.092a15.5 15.5 0 0 1-4.023 0l-.687 3.092a1.333 1.333 0 0 1-2.604-.578l.686-3.085a15.5 15.5 0 0 1-3.498-1.587l-1.533 1.82a1.333 1.333 0 1 1-2.04-1.718l1.423-1.69a15.5 15.5 0 0 1-4.322-6.327 1.333 1.333 0 0 1 .796-1.71",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        B = (0, t.forwardRef)((({
          size: e = "SM",
          ...l
        }, a) => {
          const t = (0, o.v6)(l, {
            className: g({
              size: e
            })
          });
          return (0, r.jsxs)(r.Fragment, {
            children: ["SM" === e && (0, r.jsx)(A, {
              ...t,
              ref: a
            }), "LG" === e && (0, r.jsx)(H, {
              ...t,
              ref: a
            }), "MD" === e && (0, r.jsx)(V, {
              ...t,
              ref: a
            }), "XL" === e && (0, r.jsx)(I, {
              ...t,
              ref: a
            })]
          })
        }));
      B.displayName = "EyeClosed", B.categories = ["accessibility", "photography", "design", "security"], B.tags = ["view", "watch", "see", "hide", "conceal", "mask", "hidden", "visibility", "vision"], B.SM = A, B.LG = H, B.MD = V, B.XL = I;
      const S = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M.862.862c.26-.26.682-.26.943 0l13.333 13.333a.667.667 0 1 1-.943.943l-2.652-2.652A7.833 7.833 0 0 1 .75 8.464a1.33 1.33 0 0 1 .008-.95 7.83 7.83 0 0 1 2.537-3.277L.862 1.805a.667.667 0 0 1 0-.943m3.387 4.33A6.5 6.5 0 0 0 2 8a6.5 6.5 0 0 0 8.54 3.483l-1.186-1.186a2.667 2.667 0 0 1-3.651-3.652zm2.463 2.463a1.333 1.333 0 0 0 1.633 1.633zm4.579-2.761a6.5 6.5 0 0 0-4.057-.848.667.667 0 1 1-.157-1.324 7.83 7.83 0 0 1 8.173 4.813 1.33 1.33 0 0 1-.008.95 7.8 7.8 0 0 1-1.053 1.815.667.667 0 1 1-1.053-.817A6.5 6.5 0 0 0 14 7.999a6.5 6.5 0 0 0-2.71-3.105",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        y = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M1.293 1.293a1 1 0 0 1 1.414 0l20 20a1 1 0 0 1-1.414 1.414l-3.978-3.978a11.75 11.75 0 0 1-16.19-6.033 2 2 0 0 1 .013-1.425 11.75 11.75 0 0 1 3.804-4.915l-3.65-3.649a1 1 0 0 1 0-1.414m5.08 6.495A9.75 9.75 0 0 0 3 12a9.75 9.75 0 0 0 12.81 5.225l-1.778-1.78a4 4 0 0 1-5.478-5.477zm3.695 3.694a1.999 1.999 0 0 0 2.45 2.45zm6.868-4.141a9.74 9.74 0 0 0-6.085-1.272 1 1 0 1 1-.236-1.986 11.744 11.744 0 0 1 12.26 7.22 2 2 0 0 1-.012 1.425c-.402.974-.933 1.89-1.579 2.722a1 1 0 0 1-1.58-1.226A9.8 9.8 0 0 0 21 11.999a9.74 9.74 0 0 0-4.064-4.658",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        D = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "20",
            height: "20",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 20 20",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M1.077 1.078a.834.834 0 0 1 1.116-.058l.063.058 16.666 16.666a.834.834 0 0 1-1.114 1.236l-.064-.058-3.317-3.317a9.8 9.8 0 0 1-3.39 1.006 9.79 9.79 0 0 1-10.09-6.003l-.01-.028a1.67 1.67 0 0 1 0-1.16l.01-.028A9.8 9.8 0 0 1 4.12 5.298L1.077 2.256l-.057-.063a.834.834 0 0 1 .057-1.115m4.234 5.41A8.13 8.13 0 0 0 2.5 10a8.12 8.12 0 0 0 8.36 4.954 8.1 8.1 0 0 0 2.312-.603l-1.48-1.48a3.333 3.333 0 0 1-4.565-4.565zm3.535-3.085a9.786 9.786 0 0 1 10.206 5.988l.01.029c.14.374.14.785 0 1.159l-.01.028a9.8 9.8 0 0 1-1.315 2.268.833.833 0 1 1-1.317-1.022A8.1 8.1 0 0 0 17.498 10a8.12 8.12 0 0 0-8.455-4.942.834.834 0 1 1-.197-1.654M8.39 9.569a1.665 1.665 0 0 0 1.595 2.098q.227 0 .444-.059z"
            })
          })
        }))),
        N = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M1.724 1.724c.52-.52 1.365-.52 1.885 0l26.667 26.667a1.333 1.333 0 1 1-1.886 1.885l-5.303-5.303a15.666 15.666 0 0 1-21.588-8.045 2.67 2.67 0 0 1 .018-1.9 15.67 15.67 0 0 1 5.072-6.553L1.724 3.61a1.333 1.333 0 0 1 0-1.886m6.774 8.66A13 13 0 0 0 4 16a13 13 0 0 0 17.08 6.966l-2.371-2.372a5.333 5.333 0 0 1-7.303-7.303zm4.926 4.926a2.664 2.664 0 0 0 2.553 3.357 2.7 2.7 0 0 0 .713-.09zm9.157-5.522a13 13 0 0 0-8.113-1.696 1.333 1.333 0 1 1-.315-2.648A15.66 15.66 0 0 1 30.5 15.071a2.67 2.67 0 0 1-.018 1.9 15.7 15.7 0 0 1-2.104 3.63 1.333 1.333 0 0 1-2.107-1.636A13 13 0 0 0 28 16a13 13 0 0 0-5.419-6.211",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        G = (0, t.forwardRef)((({
          size: e = "SM",
          ...l
        }, a) => {
          const t = (0, o.v6)(l, {
            className: g({
              size: e
            })
          });
          return (0, r.jsxs)(r.Fragment, {
            children: ["SM" === e && (0, r.jsx)(S, {
              ...t,
              ref: a
            }), "LG" === e && (0, r.jsx)(y, {
              ...t,
              ref: a
            }), "MD" === e && (0, r.jsx)(D, {
              ...t,
              ref: a
            }), "XL" === e && (0, r.jsx)(N, {
              ...t,
              ref: a
            })]
          })
        }));
      G.displayName = "EyeOff", G.categories = ["accessibility", "photography", "design", "security"], G.tags = ["view", "watch", "see", "hide", "conceal", "mask", "hidden", "visibility", "vision", "lock", "password", "private", "invisible"], G.SM = S, G.LG = y, G.MD = D, G.XL = N;
      const X = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M8 2a6 6 0 1 0 0 12A6 6 0 0 0 8 2M.667 8a7.333 7.333 0 1 1 14.666 0A7.333 7.333 0 0 1 .667 8m7.505-2.65a1.33 1.33 0 0 0-1.483.871.667.667 0 0 1-1.258-.442 2.667 2.667 0 0 1 5.182.888c0 1.02-.756 1.694-1.297 2.054a5.4 5.4 0 0 1-1.124.566l-.023.008-.007.002-.003.001s-.002.001-.212-.632l.211.633a.667.667 0 0 1-.423-1.265l.01-.003.05-.019a4.034 4.034 0 0 0 .782-.4c.46-.307.703-.633.703-.945a1.336 1.336 0 0 0-1.108-1.318m-.839 5.984c0-.369.299-.668.667-.668h.007a.667.667 0 0 1 0 1.334H8a.667.667 0 0 1-.667-.667",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        q = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12m11.258-3.976a2 2 0 0 0-2.225 1.308 1 1 0 1 1-1.886-.664 4 4 0 0 1 7.773 1.333c0 1.53-1.135 2.54-1.945 3.081a8 8 0 0 1-1.686.848l-.035.013-.011.003-.004.002h-.002L11.92 13l.316.949a1 1 0 0 1-.633-1.897l.016-.006.074-.027a6.051 6.051 0 0 0 1.172-.6c.69-.46 1.055-.95 1.055-1.419v-.001a2 2 0 0 0-1.662-1.975M11 17a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2H12a1 1 0 0 1-1-1",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        k = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "20",
            height: "20",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 20 20",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M17.5 10a7.5 7.5 0 1 0-15 0 7.5 7.5 0 0 0 15 0m-7.492 3.334.085.003a.833.833 0 0 1 0 1.659l-.085.003H10a.833.833 0 0 1 0-1.665zM8.245 5.456a3.333 3.333 0 0 1 5.021 2.878l-.01.233c-.107 1.145-.978 1.913-1.61 2.335a6.7 6.7 0 0 1-1.405.707l-.038.013h-.004l-.001.002h-.001l-.082.023a.834.834 0 0 1-.446-1.604l.013-.004.062-.024a5.042 5.042 0 0 0 .978-.5c.574-.383.878-.79.878-1.181v-.002a1.667 1.667 0 0 0-3.239-.555L7.575 7.5l-.786-.277a3.33 3.33 0 0 1 1.456-1.767m.116 2.32a.833.833 0 0 1-1.572-.553zM19.167 10A9.167 9.167 0 1 1 .832 9.999a9.167 9.167 0 0 1 18.335 0"
            })
          })
        }))),
        F = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M16 4C9.373 4 4 9.373 4 16c0 6.628 5.373 12 12 12 6.628 0 12-5.372 12-12 0-6.627-5.372-12-12-12M1.333 16C1.333 7.9 7.9 1.334 16 1.334S30.667 7.9 30.667 16 24.1 30.667 16 30.667 1.333 24.1 1.333 16m15.011-5.3a2.67 2.67 0 0 0-2.966 1.743 1.333 1.333 0 1 1-2.516-.885 5.333 5.333 0 0 1 10.365 1.776c0 2.04-1.514 3.389-2.594 4.109a10.7 10.7 0 0 1-2.248 1.131l-.046.016-.015.005-.005.002h-.002c0 .001-.002.001-.424-1.264l.422 1.265a1.333 1.333 0 0 1-.846-2.528l.002-.001.02-.007.1-.037a8.075 8.075 0 0 0 1.563-.8c.92-.614 1.406-1.266 1.406-1.891v-.002a2.666 2.666 0 0 0-2.216-2.633m-.875 5.37.002-.001zm5.758-2.736v.002l-1.334-.002zm-6.56 9.333c0-.737.597-1.334 1.333-1.334h.013a1.333 1.333 0 0 1 0 2.667H16a1.333 1.333 0 0 1-1.333-1.333",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        P = (0, t.forwardRef)((({
          size: e = "SM",
          ...l
        }, a) => {
          const t = (0, o.v6)(l, {
            className: g({
              size: e
            })
          });
          return (0, r.jsxs)(r.Fragment, {
            children: ["SM" === e && (0, r.jsx)(X, {
              ...t,
              ref: a
            }), "LG" === e && (0, r.jsx)(q, {
              ...t,
              ref: a
            }), "MD" === e && (0, r.jsx)(k, {
              ...t,
              ref: a
            }), "XL" === e && (0, r.jsx)(F, {
              ...t,
              ref: a
            })]
          })
        }));
      P.displayName = "CircleHelp", P.categories = ["accessibility", "text", "notifications"], P.tags = ["question mark", "help", "support", "assistance", "doubt", "FAQ", "tooltip"], P.SM = X, P.LG = q, P.MD = k, P.XL = F;
      const O = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M8 .667c.368 0 .667.298.667.666v1.334a.667.667 0 0 1-1.334 0V1.333c0-.368.299-.666.667-.666m5.185 2.148c.26.26.26.683 0 .943l-.94.94a.667.667 0 1 1-.943-.943l.94-.94c.26-.26.682-.26.943 0m-10.37 0c.26-.26.683-.26.943 0l.94.94a.667.667 0 1 1-.943.943l-.94-.94a.667.667 0 0 1 0-.943M8 6a2 2 0 1 0 0 4 2 2 0 0 0 0-4M4.667 8a3.333 3.333 0 1 1 6.666 0 3.333 3.333 0 0 1-6.666 0m-4 0c0-.368.298-.667.666-.667h1.334a.667.667 0 0 1 0 1.333H1.333A.667.667 0 0 1 .667 8m12 0c0-.368.298-.667.666-.667h1.334a.667.667 0 1 1 0 1.333h-1.334A.667.667 0 0 1 12.667 8m-7.969 3.302c.26.26.26.682 0 .943l-.94.94a.667.667 0 0 1-.943-.943l.94-.94c.26-.26.683-.26.943 0m6.604 0c.26-.26.682-.26.943 0l.94.94a.667.667 0 0 1-.943.943l-.94-.94a.667.667 0 0 1 0-.943M8 12.666c.368 0 .667.299.667.667v1.333a.667.667 0 1 1-1.334 0v-1.333c0-.368.299-.667.667-.667",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        T = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M12 1a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0V2a1 1 0 0 1 1-1M4.223 4.223a1 1 0 0 1 1.414 0l1.41 1.41a1 1 0 0 1-1.414 1.414l-1.41-1.41a1 1 0 0 1 0-1.414m15.554 0a1 1 0 0 1 0 1.414l-1.41 1.41a1 1 0 1 1-1.414-1.414l1.41-1.41a1 1 0 0 1 1.414 0M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6m-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0m-6 0a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2H2a1 1 0 0 1-1-1m18 0a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2h-2a1 1 0 0 1-1-1M7.047 16.953a1 1 0 0 1 0 1.414l-1.41 1.41a1 1 0 0 1-1.414-1.414l1.41-1.41a1 1 0 0 1 1.414 0m9.906 0a1 1 0 0 1 1.414 0l1.41 1.41a1 1 0 0 1-1.414 1.414l-1.41-1.41a1 1 0 0 1 0-1.414M12 19a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        E = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "20",
            height: "20",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 20 20",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M9.167 18.334v-1.668a.833.833 0 0 1 1.667 0v1.668a.834.834 0 0 1-1.667 0m-4.473-4.207a.834.834 0 0 1 1.179 1.18L4.698 16.48a.834.834 0 0 1-1.179-1.179zm11.787 1.175a.834.834 0 0 1-1.179 1.179zm-2.353-1.175a.833.833 0 0 1 1.115-.057l.063.057 1.175 1.175-.59.59-.589.589-1.174-1.175-.058-.063a.834.834 0 0 1 .058-1.116M12.5 10a2.5 2.5 0 1 0-5 0 2.5 2.5 0 0 0 5 0m-9.166-.834.085.004a.834.834 0 0 1 0 1.659l-.085.005H1.667a.834.834 0 0 1 0-1.668zm15 0 .085.004a.834.834 0 0 1 0 1.659l-.085.005h-1.667a.834.834 0 0 1 0-1.668zM5.873 4.694a.834.834 0 0 1-1.179 1.179zm9.43-1.175a.834.834 0 0 1 1.178 1.179l-1.175 1.175a.834.834 0 0 1-1.178-1.18zm-11.784 0a.834.834 0 0 1 1.115-.058l.064.058 1.175 1.175-.59.589-.589.59-1.175-1.175-.057-.064a.834.834 0 0 1 .057-1.115m5.648-.186V1.668a.833.833 0 0 1 1.667 0v1.666a.834.834 0 0 1-1.667 0m5 6.667a4.167 4.167 0 1 1-8.335 0 4.167 4.167 0 0 1 8.335 0"
            })
          })
        }))),
        U = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M16 1.334c.736 0 1.333.596 1.333 1.333v2.667a1.333 1.333 0 0 1-2.666 0V2.667c0-.737.597-1.333 1.333-1.333M26.37 5.63c.52.52.52 1.365 0 1.885l-1.88 1.88a1.333 1.333 0 0 1-1.886-1.885l1.88-1.88c.52-.521 1.365-.521 1.885 0m-20.74 0c.521-.521 1.365-.521 1.886 0l1.88 1.88A1.333 1.333 0 1 1 7.51 9.396l-1.88-1.88a1.333 1.333 0 0 1 0-1.885M16 12a4 4 0 1 0 0 8 4 4 0 0 0 0-8m-6.667 4a6.667 6.667 0 1 1 13.334 0 6.667 6.667 0 0 1-13.334 0m-8 0c0-.737.597-1.334 1.334-1.334h2.666a1.333 1.333 0 0 1 0 2.667H2.667A1.333 1.333 0 0 1 1.333 16m24 0c0-.737.597-1.334 1.334-1.334h2.666a1.333 1.333 0 0 1 0 2.667h-2.666A1.333 1.333 0 0 1 25.333 16M9.396 22.603c.52.52.52 1.365 0 1.886l-1.88 1.88a1.333 1.333 0 0 1-1.886-1.886l1.88-1.88c.521-.52 1.365-.52 1.886 0m13.208 0c.52-.52 1.365-.52 1.885 0l1.88 1.88a1.333 1.333 0 1 1-1.885 1.886l-1.88-1.88a1.333 1.333 0 0 1 0-1.886M16 25.334c.736 0 1.333.596 1.333 1.333v2.666a1.333 1.333 0 0 1-2.666 0v-2.666c0-.737.597-1.334 1.333-1.334",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        _ = (0, t.forwardRef)((({
          size: e = "SM",
          ...l
        }, a) => {
          const t = (0, o.v6)(l, {
            className: g({
              size: e
            })
          });
          return (0, r.jsxs)(r.Fragment, {
            children: ["SM" === e && (0, r.jsx)(O, {
              ...t,
              ref: a
            }), "LG" === e && (0, r.jsx)(T, {
              ...t,
              ref: a
            }), "MD" === e && (0, r.jsx)(E, {
              ...t,
              ref: a
            }), "XL" === e && (0, r.jsx)(U, {
              ...t,
              ref: a
            })]
          })
        }));
      _.displayName = "Sun", _.categories = ["accessibility", "weather", "seasons", "sustainability"], _.tags = ["brightness", "weather", "light", "summer", "day", "lightness", "theme", "brightness"], _.SM = O, _.LG = T, _.MD = E, _.XL = U;
      const W = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M8 2a6 6 0 1 0 0 12A6 6 0 0 0 8 2M.667 8a7.333 7.333 0 1 1 14.666 0A7.333 7.333 0 0 1 .667 8m6.666-2.667c0-.368.299-.667.667-.667h.007a.667.667 0 0 1 0 1.334H8a.667.667 0 0 1-.667-.667m.667 2c.368 0 .667.299.667.667v2.666a.667.667 0 1 1-1.334 0V8c0-.368.299-.667.667-.667",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Z = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12m10-4a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2H12a1 1 0 0 1-1-1m1 3a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0v-4a1 1 0 0 1 1-1",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Y = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "20",
            height: "20",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 20 20",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M17.5 10a7.5 7.5 0 1 0-15 0 7.5 7.5 0 0 0 15 0m-8.333 3.334V10a.833.833 0 0 1 1.667 0v3.334a.834.834 0 0 1-1.667 0m.841-7.5.085.003a.833.833 0 0 1 0 1.659l-.085.004H10a.833.833 0 0 1 0-1.666zM19.167 10A9.167 9.167 0 1 1 .832 9.999a9.167 9.167 0 0 1 18.335 0"
            })
          })
        }))),
        K = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M16 4C9.373 4 4 9.373 4 16c0 6.628 5.373 12 12 12s12-5.372 12-12c0-6.627-5.373-12-12-12M1.333 16C1.333 7.9 7.9 1.334 16 1.334S30.667 7.9 30.667 16 24.1 30.667 16 30.667 1.333 24.1 1.333 16m13.334-5.333c0-.737.597-1.333 1.333-1.333h.013a1.333 1.333 0 1 1 0 2.666H16a1.333 1.333 0 0 1-1.333-1.333m1.333 4c.736 0 1.333.597 1.333 1.333v5.334a1.333 1.333 0 1 1-2.666 0V16c0-.736.597-1.333 1.333-1.333",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Q = (0, t.forwardRef)((({
          size: e = "SM",
          ...l
        }, a) => {
          const t = (0, o.v6)(l, {
            className: g({
              size: e
            })
          });
          return (0, r.jsxs)(r.Fragment, {
            children: ["SM" === e && (0, r.jsx)(W, {
              ...t,
              ref: a
            }), "LG" === e && (0, r.jsx)(Z, {
              ...t,
              ref: a
            }), "MD" === e && (0, r.jsx)(Y, {
              ...t,
              ref: a
            }), "XL" === e && (0, r.jsx)(K, {
              ...t,
              ref: a
            })]
          })
        }));
      Q.displayName = "Info", Q.categories = ["accessibility", "notifications"], Q.tags = ["help", "info", "information", "support"], Q.SM = W, Q.LG = Z, Q.MD = Y, Q.XL = K;
      const J = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M7.333 2.667a4.667 4.667 0 1 0 3.238 8.027.7.7 0 0 1 .123-.123 4.667 4.667 0 0 0-3.36-7.904m4.688 8.412a6 6 0 1 0-.943.943l2.45 2.45a.667.667 0 0 0 .943-.943zM7.333 4.667c.369 0 .667.298.667.667v1.333h1.333a.667.667 0 0 1 0 1.333H8v1.334a.667.667 0 0 1-1.333 0V8H5.333a.667.667 0 1 1 0-1.333h1.334V5.334c0-.369.298-.667.666-.667",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        $ = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M11 4a7 7 0 1 0 4.856 12.041 1 1 0 0 1 .185-.185A7 7 0 0 0 11 4m7.032 12.618a9 9 0 1 0-1.414 1.414l3.675 3.675a1 1 0 0 0 1.414-1.414zM11 7a1 1 0 0 1 1 1v2h2a1 1 0 1 1 0 2h-2v2a1 1 0 1 1-2 0v-2H8a1 1 0 1 1 0-2h2V8a1 1 0 0 1 1-1",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        ee = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "20",
            height: "20",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 20 20",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M15 9.167A5.834 5.834 0 1 0 9.167 15a5.8 5.8 0 0 0 4.056-1.645 1 1 0 0 1 .132-.132A5.8 5.8 0 0 0 15 9.167m-6.667 2.5V10H6.667a.834.834 0 1 1 0-1.667h1.666V6.667a.834.834 0 0 1 1.667 0v1.666h1.667l.085.005a.834.834 0 0 1 0 1.658l-.085.004H10v1.667a.833.833 0 0 1-1.667 0m8.334-2.5c0 1.77-.616 3.397-1.643 4.68l3.065 3.064.058.063a.833.833 0 0 1-1.173 1.172l-.063-.057-3.064-3.065a7.47 7.47 0 0 1-4.68 1.643 7.5 7.5 0 1 1 7.5-7.5"
            })
          })
        }))),
        le = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M14.667 5.333a9.333 9.333 0 1 0 6.475 16.055 1.3 1.3 0 0 1 .247-.246 9.333 9.333 0 0 0-6.722-15.809m9.376 16.824a11.95 11.95 0 0 0 2.624-7.49c0-6.628-5.373-12-12-12-6.628 0-12 5.372-12 12 0 6.627 5.372 12 12 12a11.95 11.95 0 0 0 7.49-2.625l4.9 4.9a1.333 1.333 0 1 0 1.886-1.885zM14.667 9.333c.736 0 1.333.597 1.333 1.333v2.667h2.667a1.333 1.333 0 1 1 0 2.667H16v2.666a1.333 1.333 0 0 1-2.667 0V16h-2.666a1.333 1.333 0 1 1 0-2.667h2.666v-2.667c0-.736.597-1.333 1.334-1.333",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        ae = (0, t.forwardRef)((({
          size: e = "SM",
          ...l
        }, a) => {
          const t = (0, o.v6)(l, {
            className: g({
              size: e
            })
          });
          return (0, r.jsxs)(r.Fragment, {
            children: ["SM" === e && (0, r.jsx)(J, {
              ...t,
              ref: a
            }), "LG" === e && (0, r.jsx)($, {
              ...t,
              ref: a
            }), "MD" === e && (0, r.jsx)(ee, {
              ...t,
              ref: a
            }), "XL" === e && (0, r.jsx)(le, {
              ...t,
              ref: a
            })]
          })
        }));
      ae.displayName = "ZoomIn", ae.categories = ["accessibility", "layout", "design", "text", "photography"], ae.tags = ["magnifying glass", "plus", "zoom", "view", "see", "more", "closer"], ae.SM = J, ae.LG = $, ae.MD = ee, ae.XL = le;
      const re = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M7.333 2.667a4.667 4.667 0 1 0 3.238 8.027.7.7 0 0 1 .123-.123 4.667 4.667 0 0 0-3.36-7.904m4.688 8.412a6 6 0 1 0-.943.943l2.45 2.45a.667.667 0 0 0 .943-.943zM4.667 7.333c0-.368.298-.666.666-.666h4a.667.667 0 0 1 0 1.333h-4a.667.667 0 0 1-.666-.667",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        te = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M11 4a7 7 0 1 0 4.856 12.041 1 1 0 0 1 .185-.185A7 7 0 0 0 11 4m7.032 12.618a9 9 0 1 0-1.414 1.414l3.675 3.675a1 1 0 0 0 1.414-1.414zM7 11a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        se = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "20",
            height: "20",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 20 20",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M15 9.167A5.834 5.834 0 1 0 9.167 15a5.8 5.8 0 0 0 4.056-1.645 1 1 0 0 1 .132-.132A5.8 5.8 0 0 0 15 9.167m-3.333-.834.085.005a.834.834 0 0 1 0 1.658l-.085.004h-5a.834.834 0 1 1 0-1.667zm5 .834c0 1.77-.616 3.397-1.643 4.68l3.065 3.064.058.063a.833.833 0 0 1-1.173 1.172l-.063-.057-3.064-3.065a7.47 7.47 0 0 1-4.68 1.643 7.5 7.5 0 1 1 7.5-7.5"
            })
          })
        }))),
        ie = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M14.667 5.333a9.333 9.333 0 1 0 6.475 16.055 1.3 1.3 0 0 1 .247-.246 9.333 9.333 0 0 0-6.722-15.809m9.376 16.824a11.95 11.95 0 0 0 2.624-7.49c0-6.628-5.373-12-12-12-6.628 0-12 5.372-12 12 0 6.627 5.372 12 12 12a11.95 11.95 0 0 0 7.49-2.625l4.9 4.9a1.333 1.333 0 1 0 1.886-1.885zm-14.71-7.49c0-.737.597-1.334 1.334-1.334h8a1.333 1.333 0 1 1 0 2.667h-8a1.333 1.333 0 0 1-1.334-1.334",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        de = (0, t.forwardRef)((({
          size: e = "SM",
          ...l
        }, a) => {
          const t = (0, o.v6)(l, {
            className: g({
              size: e
            })
          });
          return (0, r.jsxs)(r.Fragment, {
            children: ["SM" === e && (0, r.jsx)(re, {
              ...t,
              ref: a
            }), "LG" === e && (0, r.jsx)(te, {
              ...t,
              ref: a
            }), "MD" === e && (0, r.jsx)(se, {
              ...t,
              ref: a
            }), "XL" === e && (0, r.jsx)(ie, {
              ...t,
              ref: a
            })]
          })
        }));
      de.displayName = "ZoomOut", de.categories = ["accessibility", "layout", "design", "text", "photography"], de.tags = ["magnifying glass", "plus", "zoom", "view", "see", "less", "further"], de.SM = re, de.LG = te, de.MD = se, de.XL = ie;
      const oe = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M4.862.862c.26-.26.682-.26.943 0l.837.837a2.67 2.67 0 0 1 2.716 0l.837-.837a.667.667 0 1 1 .943.943l-.838.838a2.68 2.68 0 0 1 .367 1.457v.178a3.3 3.3 0 0 1 1.275.98 2.03 2.03 0 0 0 1.371-1.925.667.667 0 1 1 1.334 0c0 1.426-.89 2.64-2.098 3.123q.117.427.118.877V8h2a.667.667 0 1 1 0 1.333h-2c0 .529-.09 1.037-.253 1.512 1.308.457 2.253 1.72 2.253 3.155a.667.667 0 0 1-1.334 0c0-.926-.67-1.74-1.544-1.95A4.67 4.67 0 0 1 8 14c-1.557 0-2.94-.771-3.79-1.95-.874.21-1.543 1.024-1.543 1.95a.667.667 0 1 1-1.334 0c0-1.435.945-2.698 2.253-3.155a4.6 4.6 0 0 1-.253-1.512h-2a.667.667 0 0 1 0-1.333h2v-.667q0-.448.117-.874a3.36 3.36 0 0 1-2.117-3.126.667.667 0 0 1 1.334 0c0 .92.61 1.679 1.39 1.927a3.34 3.34 0 0 1 1.276-.982V4.1A2.67 2.67 0 0 1 5.7 2.643l-.838-.838a.667.667 0 0 1 0-.943m2.146 2.241A1.34 1.34 0 0 0 6.665 4h2.67a1.34 1.34 0 0 0-.343-.897.7.7 0 0 1-.096-.096 1.335 1.335 0 0 0-1.792 0 .7.7 0 0 1-.096.096m2.781 2.283a2 2 0 0 0-.456-.053H6.667a2 2 0 0 0-2 2v2A3.35 3.35 0 0 0 7.333 12.6V7.333a.667.667 0 0 1 1.334 0V12.6a3.35 3.35 0 0 0 2.666-3.266v-2A2 2 0 0 0 9.79 5.386",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        ne = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M7.293 1.293a1 1 0 0 1 1.414 0l1.257 1.256a4 4 0 0 1 4.072 0l1.257-1.256a1 1 0 1 1 1.414 1.414L15.45 3.965A4 4 0 0 1 16 6.15v.266a5 5 0 0 1 1.913 1.47C19.057 7.514 19.97 6.38 19.97 5a1 1 0 1 1 2 0 5.06 5.06 0 0 1-3.146 4.684c.116.425.176.868.176 1.316v1h3a1 1 0 1 1 0 2h-3c0 .793-.133 1.556-.379 2.268C20.583 16.953 22 18.848 22 21a1 1 0 1 1-2 0c0-1.389-1.004-2.609-2.316-2.925A7 7 0 0 1 12 21a7 7 0 0 1-5.684-2.925C5.004 18.391 4 19.611 4 21a1 1 0 1 1-2 0c0-2.152 1.417-4.047 3.379-4.732A7 7 0 0 1 5 14H2a1 1 0 1 1 0-2h3v-1c0-.447.06-.887.175-1.311A5.05 5.05 0 0 1 2 5a1 1 0 0 1 2 0 3.04 3.04 0 0 0 2.085 2.89A5 5 0 0 1 8 6.417v-.266a4 4 0 0 1 .55-2.186L7.294 2.707a1 1 0 0 1 0-1.414m3.219 3.362A2 2 0 0 0 9.997 6h4.006a2 2 0 0 0-.515-1.345 1 1 0 0 1-.145-.145 2.003 2.003 0 0 0-2.686 0 1 1 0 0 1-.145.145m4.172 3.424A3 3 0 0 0 14 8h-4a3 3 0 0 0-.684.079 1 1 0 0 1-.132.034A3 3 0 0 0 7 11v3c0 2.406 1.726 4.431 4 4.899V11a1 1 0 1 1 2 0v7.899c2.274-.468 4-2.493 4-4.899v-3a3 3 0 0 0-2.184-2.887 1 1 0 0 1-.132-.034",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        he = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "20",
            height: "20",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 20 20",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M13.833 9.166a2.5 2.5 0 0 0-2.5-2.5H8a2.5 2.5 0 0 0-2.5 2.5v2.5c0 2.005 1.439 3.693 3.333 4.082V9.167a.833.833 0 0 1 1.667 0v6.583c1.895-.39 3.333-2.078 3.333-4.083zM9.666 3.328a1.67 1.67 0 0 0-1.136.449l-.04.046-.052.045a1.7 1.7 0 0 0-.334.542c-.071.189-.105.389-.105.59h3.334c0-.201-.033-.401-.104-.59-.075-.201-.19-.385-.334-.542q-.026-.022-.05-.045l-.05-.054a1.67 1.67 0 0 0-1.129-.441M15.5 9.999H18l.085.005a.834.834 0 0 1 0 1.659l-.085.003h-2.5c0 .661-.113 1.297-.318 1.89 1.636.57 2.818 2.15 2.818 3.944a.834.834 0 0 1-1.667 0c0-1.158-.838-2.174-1.932-2.437A5.83 5.83 0 0 1 9.666 17.5a5.83 5.83 0 0 1-4.734-2.437C3.838 15.326 3 16.343 3 17.5a.834.834 0 0 1-1.667 0c0-1.794 1.182-3.373 2.818-3.944a5.8 5.8 0 0 1-.31-1.59l-.008-.3h-2.5a.833.833 0 1 1 0-1.667h2.5v-.833c0-.372.05-.74.147-1.092a4.205 4.205 0 0 1-2.647-3.908.833.833 0 0 1 1.667 0c0 1.15.764 2.099 1.739 2.409q.147-.186.315-.355a4.2 4.2 0 0 1 1.28-.87v-.242a3.34 3.34 0 0 1 .458-1.804L5.745 2.255l-.058-.062a.833.833 0 0 1 1.235-1.115L7.97 2.124a3.34 3.34 0 0 1 3.393 0l1.048-1.046a.834.834 0 0 1 1.178 1.178L12.54 3.304A3.33 3.33 0 0 1 13 5.108v.241a4.17 4.17 0 0 1 1.592 1.223 2.54 2.54 0 0 0 1.716-2.406.834.834 0 0 1 1.667 0c0 1.783-1.113 3.3-2.624 3.904.097.354.15.723.15 1.096z"
            })
          })
        }))),
        ce = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M9.724 1.724c.52-.52 1.365-.52 1.886 0l1.675 1.675a5.33 5.33 0 0 1 4.813-.312q.319.136.617.312l1.675-1.675a1.333 1.333 0 1 1 1.886 1.886L20.6 5.286a5.34 5.34 0 0 1 .734 2.915v.356a6.67 6.67 0 0 1 2.551 1.96c1.525-.5 2.743-2.011 2.743-3.85a1.333 1.333 0 0 1 2.666 0c0 2.851-1.778 5.279-4.195 6.245.155.567.235 1.157.235 1.755V16h4a1.333 1.333 0 1 1 0 2.667h-4a9.3 9.3 0 0 1-.505 3.024c2.616.913 4.505 3.44 4.505 6.31a1.333 1.333 0 0 1-2.666 0c0-1.852-1.34-3.48-3.088-3.9C21.88 26.457 19.113 28 16 28s-5.881-1.543-7.579-3.9c-1.749.42-3.088 2.048-3.088 3.9a1.333 1.333 0 0 1-2.666 0c0-2.87 1.89-5.397 4.505-6.31a9.3 9.3 0 0 1-.505-3.024h-4a1.333 1.333 0 1 1 0-2.667h4v-1.333c0-.596.08-1.183.233-1.748a6.73 6.73 0 0 1-4.233-6.252 1.333 1.333 0 1 1 2.666 0c0 1.84 1.22 3.357 2.78 3.854a6.7 6.7 0 0 1 2.554-1.964V8.2a5.34 5.34 0 0 1 .734-2.915L9.724 3.61a1.333 1.333 0 0 1 0-1.886m4.291 4.483A2.67 2.67 0 0 0 13.33 8h5.342a2.67 2.67 0 0 0-.686-1.793 1.4 1.4 0 0 1-.194-.193 2.67 2.67 0 0 0-3.582 0 1.4 1.4 0 0 1-.194.193m5.563 4.565a4 4 0 0 0-.911-.105h-5.334q-.466 0-.911.105a1.4 1.4 0 0 1-.177.046 4 4 0 0 0-2.912 3.849v4c0 3.207 2.302 5.908 5.334 6.531V14.667a1.333 1.333 0 0 1 2.666 0v10.531c3.032-.623 5.334-3.324 5.334-6.531v-4a4 4 0 0 0-2.912-3.85 1.4 1.4 0 0 1-.177-.045",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        fe = (0, t.forwardRef)((({
          size: e = "SM",
          ...l
        }, a) => {
          const t = (0, o.v6)(l, {
            className: g({
              size: e
            })
          });
          return (0, r.jsxs)(r.Fragment, {
            children: ["SM" === e && (0, r.jsx)(oe, {
              ...t,
              ref: a
            }), "LG" === e && (0, r.jsx)(ne, {
              ...t,
              ref: a
            }), "MD" === e && (0, r.jsx)(he, {
              ...t,
              ref: a
            }), "XL" === e && (0, r.jsx)(ce, {
              ...t,
              ref: a
            })]
          })
        }));
      fe.displayName = "Bug", fe.categories = ["development", "animals"], fe.tags = ["issue", "report", "debug", "code", "insect"], fe.SM = oe, fe.LG = ne, fe.MD = he, fe.XL = ce;
      const we = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M4.867.857a.667.667 0 0 1 .943.01l.825.843a2.67 2.67 0 0 1 2.718-.006l.842-.842a.667.667 0 1 1 .943.943l-.841.841c.241.41.37.876.37 1.353v.28a3.3 3.3 0 0 1 1.275.98 2.03 2.03 0 0 0 1.371-1.926.667.667 0 0 1 1.334 0c0 1.426-.89 2.64-2.098 3.123q.117.427.118.877V8h2a.667.667 0 1 1 0 1.333H12a.667.667 0 0 1-.667-.667V7.333a2 2 0 0 0-2-2h-.866a.667.667 0 0 1 0-1.333h.866a1.333 1.333 0 0 0-2.284-.933.667.667 0 0 1-.952 0L4.857 1.8a.667.667 0 0 1 .01-.943M.862.862c.26-.26.682-.26.943 0l3.79 3.79.018.018L8.47 7.528l3.41 3.41.02.02 3.237 3.237a.667.667 0 1 1-.943.943l-2.7-2.7a4.667 4.667 0 0 1-7.296-.385c-.869.215-1.532 1.025-1.532 1.947a.667.667 0 1 1-1.334 0c0-1.433.943-2.695 2.248-3.153a4.7 4.7 0 0 1-.248-1.514h-2a.667.667 0 0 1 0-1.333h2v-.665a3.33 3.33 0 0 1 .834-2.225L.862 1.805a.667.667 0 0 1 0-.943m4.25 5.194a2 2 0 0 0-.445 1.273v2.006c-.002.566.14 1.12.409 1.61a.7.7 0 0 1 .066.116q.09.152.198.293a3.33 3.33 0 0 0 1.993 1.257V8.276zm3.555 3.553v3.002a3.33 3.33 0 0 0 1.883-1.119z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        ve = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M7.3 1.285a1 1 0 0 1 1.415.015l1.238 1.266a4 4 0 0 1 4.077-.01l1.263-1.263a1 1 0 1 1 1.414 1.414L15.445 3.97A4 4 0 0 1 16 6v.418a5 5 0 0 1 1.913 1.47C19.057 7.514 19.97 6.38 19.97 5a1 1 0 1 1 2 0 5.06 5.06 0 0 1-3.146 4.684c.116.425.176.868.176 1.316v1h3a1 1 0 1 1 0 2h-4a1 1 0 0 1-1-1v-2a3 3 0 0 0-2.184-2.887 1 1 0 0 1-.132-.034A3 3 0 0 0 14 8h-1.3a1 1 0 1 1 0-2H14a2 2 0 0 0-3.427-1.4 1 1 0 0 1-1.428 0l-1.86-1.9A1 1 0 0 1 7.3 1.285m-6.007.008a1 1 0 0 1 1.414 0l5.686 5.686.026.026 9.404 9.403.03.03 4.854 4.855a1 1 0 0 1-1.414 1.414l-4.05-4.05a7 7 0 0 1-10.945-.578C4.995 18.402 4 19.617 4 21a1 1 0 1 1-2 0c0-2.15 1.414-4.043 3.372-4.73A7 7 0 0 1 5 14H2a1 1 0 1 1 0-2h3v-.997a5 5 0 0 1 1.25-3.338L1.294 2.707a1 1 0 0 1 0-1.414m6.376 7.79A3 3 0 0 0 7 10.994v3.01a5 5 0 0 0 .614 2.416 1 1 0 0 1 .1.173A5 5 0 0 0 11 18.917v-6.503zM13 14.415v4.503a5 5 0 0 0 2.825-1.678z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        xe = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M9.734 1.714a1.333 1.333 0 0 1 1.886.02l1.651 1.687a5.33 5.33 0 0 1 5.436-.013l1.684-1.684a1.333 1.333 0 1 1 1.885 1.886l-1.683 1.683c.483.818.74 1.752.74 2.706v.558a6.67 6.67 0 0 1 2.551 1.96c1.525-.5 2.743-2.011 2.743-3.85a1.333 1.333 0 0 1 2.666 0c0 2.851-1.778 5.279-4.195 6.245.155.567.235 1.157.235 1.755V16h4a1.333 1.333 0 1 1 0 2.667H24a1.333 1.333 0 0 1-1.333-1.334v-2.666a4 4 0 0 0-2.912-3.85 1.4 1.4 0 0 1-.177-.045 4 4 0 0 0-.911-.105h-1.734a1.333 1.333 0 1 1 0-2.667h1.734a2.666 2.666 0 0 0-4.57-1.865 1.333 1.333 0 0 1-1.903-.002L9.714 3.6a1.333 1.333 0 0 1 .02-1.886m-8.01.01c.52-.52 1.365-.52 1.886 0l7.581 7.582.034.034 5.717 5.717.002.001 6.82 6.82.04.04 6.472 6.473a1.333 1.333 0 1 1-1.885 1.885l-5.4-5.4a9.332 9.332 0 0 1-14.593-.77c-1.737.43-3.065 2.05-3.065 3.894a1.333 1.333 0 0 1-2.666 0c0-2.866 1.885-5.39 4.496-6.306a9.3 9.3 0 0 1-.496-3.027h-4a1.333 1.333 0 1 1 0-2.667h4v-1.329a6.67 6.67 0 0 1 1.667-4.451l-6.61-6.61a1.333 1.333 0 0 1 0-1.886m8.502 10.388a4 4 0 0 0-.893 2.546v4.013a6.67 6.67 0 0 0 .819 3.22q.077.11.133.232a6.67 6.67 0 0 0 4.382 3.1v-8.67zm7.107 7.107v6.004a6.67 6.67 0 0 0 3.767-2.238z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        ge = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "20",
            height: "20",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 20 20",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M1.333 17.5c0-1.792 1.179-3.37 2.81-3.942a5.8 5.8 0 0 1-.31-1.892h-2.5a.833.833 0 0 1 0-1.667h2.5v-.833a4.17 4.17 0 0 1 1.042-2.78l-4.13-4.13a.832.832 0 1 1 1.177-1.178l8.328 8.328.01.01 8.33 8.328a.833.833 0 1 1-1.18 1.178l-3.376-3.377a5.83 5.83 0 0 1-9.022-.348l-.095-.131C3.831 15.334 3.001 16.346 3 17.5a.834.834 0 0 1-1.667 0M6.06 7.57A2.501 2.501 0 0 0 5.5 9.16v2.51a4.16 4.16 0 0 0 .572 2.112c.082.14.17.28.27.41a4.17 4.17 0 0 0 2.491 1.571v-5.419zm4.441 8.192q.356-.071.696-.204a4.17 4.17 0 0 0 1.657-1.194L10.5 12.01zm3.333-6.596a2.5 2.5 0 0 0-2.5-2.5H10.25a.834.834 0 1 1 0-1.667h1.083a1.668 1.668 0 0 0-2.855-1.166.835.835 0 0 1-1.19 0l-1.55-1.584-.057-.063a.834.834 0 0 1 1.186-1.16l.062.057L7.962 2.14a3.333 3.333 0 0 1 3.396-.01l1.053-1.051a.834.834 0 0 1 1.178 1.177l-1.053 1.053c.302.512.464 1.095.464 1.691v.35a4.2 4.2 0 0 1 1.592 1.223 2.54 2.54 0 0 0 1.716-2.406.834.834 0 0 1 1.667 0c0 1.783-1.113 3.3-2.624 3.904.097.354.15.723.15 1.096V10H18a.834.834 0 0 1 0 1.667h-3.335a.833.833 0 0 1-.833-.833z"
            })
          })
        }))),
        je = (0, t.forwardRef)((({
          size: e = "SM",
          ...l
        }, a) => {
          const t = (0, o.v6)(l, {
            className: g({
              size: e
            })
          });
          return (0, r.jsxs)(r.Fragment, {
            children: ["SM" === e && (0, r.jsx)(we, {
              ...t,
              ref: a
            }), "LG" === e && (0, r.jsx)(ve, {
              ...t,
              ref: a
            }), "XL" === e && (0, r.jsx)(xe, {
              ...t,
              ref: a
            }), "MD" === e && (0, r.jsx)(ge, {
              ...t,
              ref: a
            })]
          })
        }));
      je.displayName = "BugOff", je.categories = ["development", "animals"], je.tags = ["issue", "report", "debug", "code", "insect"], je.SM = we, je.LG = ve, je.XL = xe, je.MD = ge;
      const me = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M8 2.667A2.667 2.667 0 1 0 8 8a2.667 2.667 0 0 0 0-5.333m2.427 5.846a4 4 0 1 0-4.855 0A6 6 0 0 0 2 14a.667.667 0 0 0 1.333 0 4.667 4.667 0 0 1 9.334 0A.667.667 0 1 0 14 14a6 6 0 0 0-3.573-5.487",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        pe = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M12 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8m3.641 8.77a6 6 0 1 0-7.282 0A9 9 0 0 0 3 21a1 1 0 1 0 2 0 7 7 0 1 1 14 0 1 1 0 1 0 2 0 9 9 0 0 0-5.359-8.23",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        ue = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "20",
            height: "20",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 20 20",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M13 6.667a3.334 3.334 0 1 0-3.505 3.33l.172.003.17-.004A3.334 3.334 0 0 0 13 6.667m1.667 0a4.99 4.99 0 0 1-1.97 3.975 7.5 7.5 0 0 1 4.47 6.858.834.834 0 0 1-1.667 0 5.834 5.834 0 0 0-11.667 0 .833.833 0 1 1-1.666 0 7.5 7.5 0 0 1 4.468-6.858 5 5 0 1 1 8.032-3.975"
            })
          })
        }))),
        Me = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M16 5.333A5.333 5.333 0 1 0 16 16a5.333 5.333 0 0 0 0-10.667m4.855 11.693a8 8 0 1 0-9.71 0A12 12 0 0 0 4 28a1.333 1.333 0 1 0 2.667 0 9.333 9.333 0 0 1 18.666 0A1.333 1.333 0 0 0 28 28a12 12 0 0 0-7.145-10.974",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Re = (0, t.forwardRef)((({
          size: e = "SM",
          ...l
        }, a) => {
          const t = (0, o.v6)(l, {
            className: g({
              size: e
            })
          });
          return (0, r.jsxs)(r.Fragment, {
            children: ["SM" === e && (0, r.jsx)(me, {
              ...t,
              ref: a
            }), "LG" === e && (0, r.jsx)(pe, {
              ...t,
              ref: a
            }), "MD" === e && (0, r.jsx)(ue, {
              ...t,
              ref: a
            }), "XL" === e && (0, r.jsx)(Me, {
              ...t,
              ref: a
            })]
          })
        }));
      Re.displayName = "Person", Re.categories = ["account"], Re.tags = ["person", "account", "contact", "profile", "avatar", "user", "people", "human"], Re.SM = me, Re.LG = pe, Re.MD = ue, Re.XL = Me;
      const be = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M8 2a6 6 0 0 0-3.991 10.48A2 2 0 0 1 6 10.666h4a2 2 0 0 1 1.991 1.814A6 6 0 0 0 8 2m2.667 11.376v-.71A.667.667 0 0 0 10 12H6a.667.667 0 0 0-.667.666v.71c.804.4 1.71.624 2.667.624.958 0 1.863-.225 2.667-.624M.667 8a7.333 7.333 0 1 1 14.666 0A7.333 7.333 0 0 1 .667 8M8 5.333A1.333 1.333 0 1 0 8 8a1.333 1.333 0 0 0 0-2.667M5.333 6.667a2.667 2.667 0 1 1 5.334 0 2.667 2.667 0 0 1-5.334 0",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Le = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M12 3a9 9 0 0 0-5.987 15.72A3 3 0 0 1 9 16h6a3 3 0 0 1 2.987 2.72A9 9 0 0 0 12 3m4 17.065V19a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v1.064A8.96 8.96 0 0 0 12 21a8.96 8.96 0 0 0 4-.936M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12m11-4a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-4 2a4 4 0 1 1 8 0 4 4 0 0 1-8 0",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        ze = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "20",
            height: "20",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 20 20",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M17.166 10a7.5 7.5 0 1 0-12.488 5.598 2.5 2.5 0 0 1 2.488-2.264h5c.663 0 1.3.262 1.769.73a2.5 2.5 0 0 1 .72 1.534A7.48 7.48 0 0 0 17.166 10m-10 5a.834.834 0 0 0-.833.834v.883c1.005.5 2.136.783 3.333.783s2.33-.283 3.334-.783v-.883a.835.835 0 0 0-.834-.835zm4.167-6.666a1.667 1.667 0 1 0-3.334 0 1.667 1.667 0 0 0 3.334 0m7.5 1.666a9.16 9.16 0 0 1-4.628 7.962 9.1 9.1 0 0 1-4.539 1.204 9.1 9.1 0 0 1-4.635-1.26A9.166 9.166 0 0 1 9.667.834 9.167 9.167 0 0 1 18.832 10M13 8.334a3.334 3.334 0 1 1-6.667-.002A3.334 3.334 0 0 1 13 8.334"
            })
          })
        }))),
        Ce = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M16 4C9.373 4 4 9.373 4 16a11.97 11.97 0 0 0 4.017 8.96A4 4 0 0 1 12 21.334h8a4 4 0 0 1 3.983 3.626A11.97 11.97 0 0 0 28 16c0-6.627-5.372-12-12-12m5.333 22.753v-1.42A1.333 1.333 0 0 0 20 24h-8a1.333 1.333 0 0 0-1.333 1.334v1.419A11.95 11.95 0 0 0 16 28c1.916 0 3.727-.449 5.333-1.247M1.333 16C1.333 7.9 7.9 1.334 16 1.334S30.667 7.9 30.667 16 24.1 30.667 16 30.667 1.333 24.1 1.333 16M16 10.667A2.667 2.667 0 1 0 16 16a2.667 2.667 0 0 0 0-5.333m-5.333 2.667a5.333 5.333 0 1 1 10.666 0 5.333 5.333 0 0 1-10.666 0",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Ae = (0, t.forwardRef)((({
          size: e = "SM",
          ...l
        }, a) => {
          const t = (0, o.v6)(l, {
            className: g({
              size: e
            })
          });
          return (0, r.jsxs)(r.Fragment, {
            children: ["SM" === e && (0, r.jsx)(be, {
              ...t,
              ref: a
            }), "LG" === e && (0, r.jsx)(Le, {
              ...t,
              ref: a
            }), "MD" === e && (0, r.jsx)(ze, {
              ...t,
              ref: a
            }), "XL" === e && (0, r.jsx)(Ce, {
              ...t,
              ref: a
            })]
          })
        }));
      Ae.displayName = "CirclePerson", Ae.categories = ["account"], Ae.tags = ["person", "account", "contact"], Ae.SM = be, Ae.LG = Le, Ae.MD = ze, Ae.XL = Ce;
      const He = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M3.002 1.048C3.506.846 4.258.667 5.333.667c1.13 0 2.065.374 2.877.699l.038.015c.845.338 1.565.619 2.419.619.925 0 1.506-.154 1.835-.286a1.8 1.8 0 0 0 .375-.2A.667.667 0 0 1 14 2v8c0 .177-.07.346-.195.471L13.333 10l.472.471-.002.002-.001.001-.003.003-.008.007a1 1 0 0 1-.066.06 2 2 0 0 1-.157.115 3 3 0 0 1-.57.293c-.504.202-1.256.381-2.331.381-1.13 0-2.065-.374-2.877-.7l-.038-.014c-.845-.338-1.565-.62-2.419-.62-.925 0-1.506.155-1.835.287q-.095.038-.165.072v4.308a.667.667 0 1 1-1.333 0V2c0-.177.07-.347.195-.472L2.667 2l-.472-.472.002-.001.001-.001.003-.004.007-.006.067-.06q.059-.048.157-.115c.132-.088.319-.193.57-.293m.331 1.31v6.573c.485-.15 1.14-.264 2-.264 1.13 0 2.065.374 2.877.699l.038.015c.845.338 1.565.619 2.419.619.925 0 1.506-.154 1.835-.286a2 2 0 0 0 .165-.073V3.07c-.485.149-1.14.264-2 .264-1.13 0-2.065-.374-2.877-.7l-.038-.014c-.845-.338-1.565-.62-2.419-.62-.925 0-1.506.155-1.835.286q-.095.038-.165.074",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Ve = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M4.504 1.572C5.259 1.269 6.387 1 8 1c1.693 0 3.097.561 4.316 1.05l.055.022C13.64 2.579 14.72 3 16 3c1.387 0 2.26-.23 2.754-.428.248-.1.405-.192.488-.248a1 1 0 0 0 .073-.053A1 1 0 0 1 21 3v12a1 1 0 0 1-.293.707l.075-.084-.076.085-.001.001-.002.002-.005.005-.01.01-.027.025-.074.064a3 3 0 0 1-.235.173c-.198.132-.479.29-.856.44-.755.303-1.883.572-3.496.572-1.694 0-3.097-.561-4.316-1.05l-.055-.021C10.36 15.42 9.28 15 8 15c-1.387 0-2.26.23-2.754.428a3 3 0 0 0-.246.11V22a1 1 0 1 1-2 0V3a1 1 0 0 1 .293-.707l.02-.02-.02.019.002-.001.002-.002.005-.005.01-.01a2 2 0 0 1 .101-.089q.088-.073.235-.173c.198-.132.479-.29.856-.44M5 3.538v9.859C5.728 13.173 6.708 13 8 13c1.693 0 3.097.562 4.316 1.05l.055.021C13.64 14.58 14.72 15 16 15c1.387 0 2.26-.23 2.754-.428q.142-.058.246-.11V4.603c-.728.224-1.708.397-3 .397-1.693 0-3.097-.561-4.316-1.05l-.055-.022C10.36 3.421 9.28 3 8 3c-1.387 0-2.26.23-2.754.428a3 3 0 0 0-.246.11",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Ie = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M6.005 2.096c1.008-.404 2.511-.763 4.662-.763 2.258 0 4.129.75 5.754 1.4l.074.03C18.186 3.438 19.625 4 21.333 4c1.85 0 3.013-.308 3.672-.571.33-.132.54-.256.651-.33q.083-.057.098-.07A1.333 1.333 0 0 1 28 4v16c0 .354-.14.693-.39.943l.1-.112-.102.113-.001.002-.003.003-.007.006-.014.014a2 2 0 0 1-.134.118 4 4 0 0 1-.314.23 6.2 6.2 0 0 1-1.14.588c-1.008.403-2.511.762-4.662.762-2.258 0-4.129-.749-5.754-1.4l-.074-.029C13.814 20.562 12.375 20 10.667 20c-1.85 0-3.013.308-3.672.572q-.19.076-.328.146v8.616a1.333 1.333 0 1 1-2.667 0V4c0-.353.14-.693.39-.943l.027-.025-.025.024.001-.001.003-.003.007-.007.014-.013a2 2 0 0 1 .134-.118q.117-.099.314-.232a6.2 6.2 0 0 1 1.14-.586m.662 2.622v13.145c.97-.3 2.277-.53 4-.53 2.258 0 4.129.75 5.754 1.4l.074.03c1.691.675 3.13 1.237 4.838 1.237 1.85 0 3.013-.308 3.672-.571q.19-.076.328-.146V6.138c-.97.299-2.277.529-4 .529-2.258 0-4.129-.749-5.754-1.4l-.074-.029C13.814 4.562 12.375 4 10.667 4c-1.85 0-3.013.308-3.672.571q-.19.076-.328.147",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Be = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "20",
            height: "20",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 20 20",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M15.5 3.334c-.793.594-1.85.832-3.056.833-1.18 0-2.26-.508-3.175-.9C8.3 2.85 7.397 2.5 6.333 2.5c-.901 0-1.779.293-2.5.833v8.064a5.8 5.8 0 0 1 2.5-.563c1.433 0 2.617.481 3.644.892 1.056.423 1.956.773 3.023.773l.337-.013a4.2 4.2 0 0 0 1.886-.628l.277-.192zm1.667 8.332A1.67 1.67 0 0 1 16.5 13a5.83 5.83 0 0 1-3.264 1.163l-.236.004c-1.433 0-2.616-.482-3.643-.892C8.301 12.85 7.4 12.5 6.333 12.5c-.905 0-1.781.294-2.5.834v5a.833.833 0 0 1-1.666 0v-15A1.67 1.67 0 0 1 2.833 2a5.83 5.83 0 0 1 3.5-1.167c1.436 0 2.617.482 3.593.9 1.028.442 1.755.767 2.518.767 1.017 0 1.663-.206 2.056-.5l.095-.066a1.668 1.668 0 0 1 2.572 1.4z"
            })
          })
        }))),
        Se = (0, t.forwardRef)((({
          size: e = "SM",
          ...l
        }, a) => {
          const t = (0, o.v6)(l, {
            className: g({
              size: e
            })
          });
          return (0, r.jsxs)(r.Fragment, {
            children: ["SM" === e && (0, r.jsx)(He, {
              ...t,
              ref: a
            }), "LG" === e && (0, r.jsx)(Ve, {
              ...t,
              ref: a
            }), "XL" === e && (0, r.jsx)(Ie, {
              ...t,
              ref: a
            }), "MD" === e && (0, r.jsx)(Be, {
              ...t,
              ref: a
            })]
          })
        }));
      Se.displayName = "Flag", Se.categories = ["account", "social"], Se.tags = ["report"], Se.SM = He, Se.LG = Ve, Se.XL = Ie, Se.MD = Be;
      const ye = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M.862.862c.26-.26.682-.26.943 0l1.333 1.333 8 8 .001.001 3.999 4a.667.667 0 1 1-.943.942l-3.812-3.813c-1.004-.055-1.85-.394-2.593-.691l-.038-.015c-.845-.338-1.565-.62-2.419-.62-.925 0-1.506.155-1.835.287q-.095.038-.165.072v4.308a.667.667 0 1 1-1.333 0V2.943L.862 1.805a.667.667 0 0 1 0-.943m2.471 3.414v4.655c.485-.15 1.14-.264 2-.264 1.13 0 2.065.374 2.877.699l.038.015q.16.065.316.125zm1.334-2.943c0-.368.298-.666.666-.666 1.13 0 2.065.374 2.877.699l.038.015c.845.338 1.565.619 2.419.619.925 0 1.506-.154 1.835-.286a1.8 1.8 0 0 0 .375-.2A.667.667 0 0 1 14 2v7.333a.667.667 0 0 1-1.333 0V3.07c-.485.149-1.14.264-2 .264-1.13 0-2.065-.374-2.877-.7l-.038-.014c-.845-.338-1.565-.62-2.419-.62a.667.667 0 0 1-.666-.666",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        De = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M1.293 1.293a1 1 0 0 1 1.414 0l20 20a1 1 0 0 1-1.414 1.414l-5.719-5.719c-1.505-.083-2.774-.591-3.89-1.037l-.055-.023C10.36 15.422 9.28 15 8 15c-1.387 0-2.26.23-2.754.428a3 3 0 0 0-.246.11V22a1 1 0 1 1-2 0V4.414L1.293 2.707a1 1 0 0 1 0-1.414M5 6.414v6.983C5.728 13.173 6.708 13 8 13c1.693 0 3.097.562 4.316 1.05l.055.021.474.189zM7 2a1 1 0 0 1 1-1c1.693 0 3.097.561 4.316 1.05l.055.022C13.64 2.579 14.72 3 16 3c1.387 0 2.26-.23 2.754-.428.248-.1.405-.192.488-.248a1 1 0 0 0 .073-.053A1 1 0 0 1 21 3v11a1 1 0 1 1-2 0V4.603c-.728.224-1.708.397-3 .397-1.693 0-3.097-.561-4.316-1.05l-.055-.022C10.36 3.421 9.28 3 8 3a1 1 0 0 1-1-1",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Ne = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M1.724 1.724c.52-.52 1.365-.52 1.886 0L6.276 4.39v.001L22.275 20.39l.004.004 7.998 7.998a1.333 1.333 0 1 1-1.885 1.885l-7.626-7.625c-2.006-.11-3.699-.788-5.186-1.383l-.074-.03c-1.69-.676-3.13-1.238-4.838-1.238-1.85 0-3.013.308-3.672.572q-.19.076-.328.146v8.616a1.333 1.333 0 1 1-2.667 0V5.886L1.724 3.61a1.333 1.333 0 0 1 0-1.886m4.943 6.828v9.31c.97-.298 2.277-.528 4-.528 2.258 0 4.129.748 5.754 1.399l.074.03.632.25zm2.666-5.885c0-.737.597-1.333 1.334-1.333 2.258 0 4.129.748 5.754 1.398l.074.03C18.186 3.44 19.625 4 21.333 4c1.85 0 3.013-.308 3.672-.571.33-.132.54-.256.651-.33q.083-.057.098-.07A1.334 1.334 0 0 1 28 4v14.667a1.333 1.333 0 1 1-2.667 0V6.137c-.97.3-2.277.53-4 .53-2.258 0-4.129-.749-5.754-1.4l-.074-.029C13.815 4.562 12.375 4 10.667 4a1.333 1.333 0 0 1-1.334-1.333",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Ge = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "20",
            height: "20",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 20 20",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M2.166 18.334V3.677L.744 2.255a.832.832 0 1 1 1.178-1.177L3.58 2.735l.018.017 14.992 14.992a.834.834 0 0 1-1.178 1.178l-4.768-4.767c-1.274-.071-2.346-.505-3.286-.881C8.3 12.85 7.4 12.5 6.333 12.5c-.904 0-1.781.294-2.5.832v5.002a.833.833 0 0 1-1.667 0M15.5 11.956V3.334c-.793.594-1.85.833-3.056.833-1.18 0-2.26-.508-3.175-.9C8.3 2.85 7.397 2.5 6.333 2.5h-.287a.833.833 0 0 1 0-1.667h.287c1.436 0 2.616.483 3.592.9 1.029.442 1.755.766 2.519.767 1.016 0 1.664-.206 2.056-.5a1.666 1.666 0 0 1 2.666 1.334v8.622a.833.833 0 1 1-1.666 0m-11.667-.559a5.8 5.8 0 0 1 2.5-.563l.266.004c1.314.055 2.414.503 3.377.888q.198.078.39.151L3.833 5.344z"
            })
          })
        }))),
        Xe = (0, t.forwardRef)((({
          size: e = "SM",
          ...l
        }, a) => {
          const t = (0, o.v6)(l, {
            className: g({
              size: e
            })
          });
          return (0, r.jsxs)(r.Fragment, {
            children: ["SM" === e && (0, r.jsx)(ye, {
              ...t,
              ref: a
            }), "LG" === e && (0, r.jsx)(De, {
              ...t,
              ref: a
            }), "XL" === e && (0, r.jsx)(Ne, {
              ...t,
              ref: a
            }), "MD" === e && (0, r.jsx)(Ge, {
              ...t,
              ref: a
            })]
          })
        }));
      Xe.displayName = "FlagOff", Xe.categories = ["account", "social"], Xe.tags = ["unflag"], Xe.SM = ye, Xe.LG = De, Xe.XL = Ne, Xe.MD = Ge;
      const qe = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M3.312 4.255a6 6 0 0 0 8.433 8.433zm-.636-1.299a7.333 7.333 0 0 0 10.367 10.367.67.67 0 0 0 .28-.28A7.333 7.333 0 0 0 2.957 2.676a.67.67 0 0 0-.28.28m1.579.356 8.433 8.433a6 6 0 0 0-8.433-8.433",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        ke = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M4.968 6.382a9 9 0 0 0 12.65 12.65zm-.954-1.947A10.96 10.96 0 0 0 1 12c0 6.075 4.925 11 11 11 2.93 0 5.594-1.146 7.565-3.015a1 1 0 0 0 .42-.42A10.96 10.96 0 0 0 23 12c0-6.075-4.925-11-11-11-2.93 0-5.594 1.146-7.565 3.014a1 1 0 0 0-.42.42m2.368.533 12.65 12.65a9 9 0 0 0-12.65-12.65",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Fe = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M6.624 8.51A11.95 11.95 0 0 0 4 16c0 6.628 5.373 12 12 12a11.95 11.95 0 0 0 7.49-2.624zM5.353 5.913A14.62 14.62 0 0 0 1.333 16C1.333 24.1 7.9 30.667 16 30.667c3.908 0 7.458-1.528 10.087-4.02a1.33 1.33 0 0 0 .56-.56A14.62 14.62 0 0 0 30.667 16C30.667 7.9 24.1 1.334 16 1.334A14.62 14.62 0 0 0 5.913 5.353a1.33 1.33 0 0 0-.56.56m3.157.711L25.376 23.49A11.95 11.95 0 0 0 28 16c0-6.627-5.372-12-12-12a11.95 11.95 0 0 0-7.49 2.624",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Pe = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "20",
            height: "20",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 20 20",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M17.166 10a7.5 7.5 0 0 0-12.18-5.86l10.539 10.54A7.47 7.47 0 0 0 17.166 10m-15 0a7.5 7.5 0 0 0 12.18 5.858L3.807 5.318A7.47 7.47 0 0 0 2.167 10m16.667 0c0 2.44-.954 4.655-2.508 6.297a.83.83 0 0 1-.36.36 9.13 9.13 0 0 1-6.299 2.51A9.167 9.167 0 0 1 3.008 3.701a.83.83 0 0 1 .36-.36A9.167 9.167 0 0 1 18.833 10"
            })
          })
        }))),
        Oe = (0, t.forwardRef)((({
          size: e = "SM",
          ...l
        }, a) => {
          const t = (0, o.v6)(l, {
            className: g({
              size: e
            })
          });
          return (0, r.jsxs)(r.Fragment, {
            children: ["SM" === e && (0, r.jsx)(qe, {
              ...t,
              ref: a
            }), "LG" === e && (0, r.jsx)(ke, {
              ...t,
              ref: a
            }), "XL" === e && (0, r.jsx)(Fe, {
              ...t,
              ref: a
            }), "MD" === e && (0, r.jsx)(Pe, {
              ...t,
              ref: a
            })]
          })
        }));
      Oe.displayName = "CircleSlash", Oe.categories = ["account"], Oe.tags = ["cancel", "no", "stop", "forbidden", "prohibited", "error", "incorrect", "mistake", "wrong", "failure", "circle", "slash", "null", "void", "ban", "Blocked", "Restricted", "Denied", "Unavailable", "Stop", "Alert"], Oe.SM = qe, Oe.LG = ke, Oe.XL = Fe, Oe.MD = Pe;
      const Te = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M7.404 1.035a.67.67 0 0 1 .604-.368 2.753 2.753 0 0 1 2.64 3.413L10.18 6h3.039a2 2 0 0 1 1.92 2.56l-1.553 5.333a2 2 0 0 1-1.92 1.44h-9a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h1.84a.67.67 0 0 0 .596-.37v-.002zM4 7.333H2.667A.667.667 0 0 0 2 8v5.333a.667.667 0 0 0 .667.667H4zM5.333 14h6.334a.67.67 0 0 0 .64-.48l1.553-5.333a.668.668 0 0 0-.64-.854H9.333a.667.667 0 0 1-.648-.824l.667-2.746V3.76a1.42 1.42 0 0 0-.97-1.7L6.297 6.222v.001a2 2 0 0 1-.964.93z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Ee = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M11.106 1.552A1 1 0 0 1 12.012 1a4.13 4.13 0 0 1 3.959 5.12L15.27 9h4.559a3 3 0 0 1 2.88 3.84l-2.33 8A3 3 0 0 1 17.5 23H4a3 3 0 0 1-3-3v-8a3 3 0 0 1 3-3h2.76a1 1 0 0 0 .894-.555l.002-.003zM6 11H4a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h2zm2 10h9.5a1 1 0 0 0 .96-.72l2.33-8a1 1 0 0 0-.513-1.174A1 1 0 0 0 19.83 11H14a1 1 0 0 1-.972-1.236l1-4.12.001-.004a2.13 2.13 0 0 0-1.456-2.55L9.446 9.334l-.001.001A3 3 0 0 1 8 10.731z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Ue = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M14.808 2.07a1.33 1.33 0 0 1 1.208-.736 5.506 5.506 0 0 1 5.278 6.826L20.362 12h6.078a4 4 0 0 1 3.84 5.12l-3.107 10.666a4 4 0 0 1-3.84 2.88h-18a4 4 0 0 1-4-4V16a4 4 0 0 1 4-4h3.68a1.33 1.33 0 0 0 1.193-.74l.002-.003zM8 14.667H5.333A1.333 1.333 0 0 0 4 16v10.667A1.333 1.333 0 0 0 5.333 28H8zM10.667 28h12.666a1.334 1.334 0 0 0 1.28-.96l3.107-10.666a1.335 1.335 0 0 0-1.28-1.707h-7.773a1.333 1.333 0 0 1-1.296-1.648l1.333-5.493.002-.005a2.84 2.84 0 0 0-1.942-3.402l-4.17 8.328-.001.002a4 4 0 0 1-1.926 1.86z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        _e = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "20",
            height: "20",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 20 20",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M9.677.834a3.44 3.44 0 0 1 3.325 2.73c.107.506.097 1.03-.026 1.531v.001L12.394 7.5h3.799a2.5 2.5 0 0 1 2.436 3.06l-.036.14-1.942 6.666a2.5 2.5 0 0 1-2.4 1.8H3a2.5 2.5 0 0 1-2.5-2.5V10A2.5 2.5 0 0 1 3 7.5h2.3a.84.84 0 0 0 .745-.462l.001-.003 2.875-5.741a.83.83 0 0 1 .756-.46m-2.14 6.944h.001a2.5 2.5 0 0 1-1.205 1.164V17.5h7.917a.834.834 0 0 0 .8-.6l1.941-6.666v-.001a.835.835 0 0 0-.426-.979.84.84 0 0 0-.373-.087h-4.859a.834.834 0 0 1-.81-1.03l.834-3.433V4.7a1.775 1.775 0 0 0-.931-2.014 2 2 0 0 0-.284-.11zm-5.37 8.889A.833.833 0 0 0 3 17.5h1.666V9.167H3a.835.835 0 0 0-.834.833z"
            })
          })
        }))),
        We = (0, t.forwardRef)((({
          size: e = "SM",
          ...l
        }, a) => {
          const t = (0, o.v6)(l, {
            className: g({
              size: e
            })
          });
          return (0, r.jsxs)(r.Fragment, {
            children: ["SM" === e && (0, r.jsx)(Te, {
              ...t,
              ref: a
            }), "LG" === e && (0, r.jsx)(Ee, {
              ...t,
              ref: a
            }), "XL" === e && (0, r.jsx)(Ue, {
              ...t,
              ref: a
            }), "MD" === e && (0, r.jsx)(_e, {
              ...t,
              ref: a
            })]
          })
        }));
      We.displayName = "ThumbsUp", We.categories = ["account", "social", "emoji"], We.tags = ["like", "good", "emotion", "rate", "social", "review", "feedback", "positive"], We.SM = Te, We.LG = Ee, We.XL = Ue, We.MD = _e;
      const Ze = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M4.333 2a.67.67 0 0 0-.64.48L2.14 7.813a.668.668 0 0 0 .64.853h3.887a.667.667 0 0 1 .648.824l-.667 2.747v.003a1.42 1.42 0 0 0 .97 1.7l2.085-4.163v-.002a2 2 0 0 1 .964-.93V2zm0-1.333a2 2 0 0 0-1.92 1.44L.86 7.44A2 2 0 0 0 2.78 10h3.039l-.466 1.92v.001a2.753 2.753 0 0 0 2.639 3.412c.255.003.49-.14.604-.368l2.3-4.593.001-.002a.67.67 0 0 1 .597-.37h1.84a2 2 0 0 0 2-2V2.667a2 2 0 0 0-2-2zM12 2v6.666h1.333A.667.667 0 0 0 14 8V2.667A.666.666 0 0 0 13.333 2z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Ye = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M6.5 3a1 1 0 0 0-.96.72l-2.33 8A1.002 1.002 0 0 0 4.17 13H10a1 1 0 0 1 .972 1.236l-1 4.12-.001.004a2.13 2.13 0 0 0 1.456 2.55l3.128-6.245v-.002A3 3 0 0 1 16 13.27V3zm0-2a3 3 0 0 0-2.88 2.16l-2.33 8A3.002 3.002 0 0 0 4.17 15h4.558l-.699 2.88v.002A4.13 4.13 0 0 0 11.988 23a1 1 0 0 0 .906-.552l3.45-6.89.002-.003A1 1 0 0 1 17.24 15H20a3 3 0 0 0 3-3V4a3 3 0 0 0-3-3zM18 3v10h2a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Ke = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "20",
            height: "20",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 20 20",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M17.166 3.334a.835.835 0 0 0-.833-.834h-1.667v8.334h1.667a.834.834 0 0 0 .833-.834zM5.083 2.5a.834.834 0 0 0-.8.6l-1.94 6.666a.835.835 0 0 0 .426.98.84.84 0 0 0 .373.088H8a.832.832 0 0 1 .81 1.029l-.833 3.433-.001.003a1.776 1.776 0 0 0 .93 2.015q.138.067.284.108l2.606-5.204A2.5 2.5 0 0 1 13 11.058V2.5zm13.75 7.5a2.5 2.5 0 0 1-2.5 2.5h-2.3a.83.83 0 0 0-.745.462l-2.876 5.744a.83.83 0 0 1-.755.46 3.443 3.443 0 0 1-3.3-4.266l.583-2.4H3.142a2.5 2.5 0 0 1-2.4-3.2l1.941-6.667.064-.191A2.5 2.5 0 0 1 5.083.833h11.25a2.5 2.5 0 0 1 2.5 2.5z"
            })
          })
        }))),
        Qe = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M8.667 4a1.33 1.33 0 0 0-1.28.96L4.28 15.626a1.336 1.336 0 0 0 .684 1.567c.185.092.389.14.596.14h7.773a1.333 1.333 0 0 1 1.296 1.648l-1.333 5.494-.002.005a2.84 2.84 0 0 0 1.942 3.4l4.17-8.326.001-.003a4 4 0 0 1 1.926-1.86V4.002zm0-2.666a4 4 0 0 0-3.84 2.88L1.72 14.88A4.002 4.002 0 0 0 5.56 20h6.078l-.932 3.84-.001.003a5.506 5.506 0 0 0 5.278 6.824c.511.006.98-.28 1.21-.737l4.6-9.186.001-.004a1.33 1.33 0 0 1 1.193-.74h3.68a4 4 0 0 0 4-4V5.334a4 4 0 0 0-4-4zM24 4v13.334h2.667A1.334 1.334 0 0 0 28 16V5.334A1.334 1.334 0 0 0 26.667 4z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Je = (0, t.forwardRef)((({
          size: e = "SM",
          ...l
        }, a) => {
          const t = (0, o.v6)(l, {
            className: g({
              size: e
            })
          });
          return (0, r.jsxs)(r.Fragment, {
            children: ["SM" === e && (0, r.jsx)(Ze, {
              ...t,
              ref: a
            }), "LG" === e && (0, r.jsx)(Ye, {
              ...t,
              ref: a
            }), "MD" === e && (0, r.jsx)(Ke, {
              ...t,
              ref: a
            }), "XL" === e && (0, r.jsx)(Qe, {
              ...t,
              ref: a
            })]
          })
        }));
      Je.displayName = "ThumbsDown", Je.categories = ["account", "social", "emoji"], Je.tags = ["dislike", "bad", "emotion", "rate", "social", "review", "feedback", "negative"], Je.SM = Ze, Je.LG = Ye, Je.MD = Ke, Je.XL = Qe;
      const $e = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M8.517 1.834a4 4 0 0 1 5.656 5.656l-.008.008-2 2a4.002 4.002 0 0 1-6.032-.432.667.667 0 0 1 1.068-.799 2.667 2.667 0 0 0 4.02.288l1.997-1.995a2.666 2.666 0 0 0-3.772-3.77L8.303 3.926a.667.667 0 1 1-.94-.945zm-3.25 3.748a4 4 0 0 1 4.6 1.352.667.667 0 0 1-1.067.799 2.667 2.667 0 0 0-4.022-.288L2.782 9.44a2.667 2.667 0 0 0 3.771 3.77l1.136-1.135a.667.667 0 0 1 .942.943l-1.148 1.148A4 4 0 0 1 1.827 8.51l.008-.008 2-2a4 4 0 0 1 1.431-.92",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        el = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M12.775 2.75a6 6 0 0 1 8.484 8.485l-.012.012-3 3a6 6 0 0 1-9.048-.648 1 1 0 1 1 1.602-1.198 4 4 0 0 0 6.032.432l2.993-2.994a4 4 0 0 0-5.656-5.654l-1.715 1.704a1 1 0 0 1-1.41-1.418l1.72-1.71zM7.9 8.374a6 6 0 0 1 6.902 2.028 1 1 0 1 1-1.602 1.198 4 4 0 0 0-6.032-.432L4.174 14.16a4 4 0 0 0 5.655 5.655l1.704-1.703a1 1 0 1 1 1.414 1.414l-1.71 1.71-.012.012a6 6 0 0 1-8.484-8.484l.012-.012 3-3a6 6 0 0 1 2.146-1.38",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        ll = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M17.034 3.668A8 8 0 0 1 28.346 14.98l-.017.016-4 4a8 8 0 0 1-12.063-.864 1.333 1.333 0 0 1 2.135-1.597 5.332 5.332 0 0 0 8.043.576l3.991-3.992a5.334 5.334 0 0 0-7.542-7.54l-2.286 2.273a1.333 1.333 0 1 1-1.88-1.89l2.293-2.28zm-6.502 7.496a8 8 0 0 1 9.202 2.704 1.333 1.333 0 1 1-2.135 1.597 5.333 5.333 0 0 0-8.043-.576l-3.991 3.992a5.333 5.333 0 0 0 7.54 7.54l2.272-2.27a1.333 1.333 0 1 1 1.886 1.885l-2.28 2.28-.017.016A8 8 0 0 1 3.654 17.02l.017-.016 4-4a8 8 0 0 1 2.861-1.84",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        al = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "20",
            height: "20",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 20 20",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M8.354 7.175a5 5 0 0 1 3.647 1.992.834.834 0 0 1-1.28 1.065l-.054-.067-.112-.14a3.333 3.333 0 0 0-4.916-.22l-2.5 2.5a3.334 3.334 0 0 0 4.713 4.714l1.426-1.425.062-.058a.834.834 0 0 1 1.116 1.237L9.02 18.207a5.001 5.001 0 0 1-8.474-3.552 5 5 0 0 1 1.404-3.517l.01-.01 2.5-2.5a5 5 0 0 1 3.893-1.453m5.476-5.786a5 5 0 0 1 3.552 8.473l-2.51 2.51a5 5 0 0 1-7.54-.54.833.833 0 0 1 1.336-.998 3.34 3.34 0 0 0 3.834 1.126 3.3 3.3 0 0 0 1.192-.767l2.5-2.5a3.334 3.334 0 0 0-4.716-4.711h.001l-1.433 1.425L8.87 4.226 10.304 2.8l.01-.009A5 5 0 0 1 13.83 1.39m-3.784 4.018A.833.833 0 1 1 8.87 4.226z"
            })
          })
        }))),
        rl = (0, t.forwardRef)((({
          size: e = "SM",
          ...l
        }, a) => {
          const t = (0, o.v6)(l, {
            className: g({
              size: e
            })
          });
          return (0, r.jsxs)(r.Fragment, {
            children: ["SM" === e && (0, r.jsx)($e, {
              ...t,
              ref: a
            }), "LG" === e && (0, r.jsx)(el, {
              ...t,
              ref: a
            }), "XL" === e && (0, r.jsx)(ll, {
              ...t,
              ref: a
            }), "MD" === e && (0, r.jsx)(al, {
              ...t,
              ref: a
            })]
          })
        }));
      rl.displayName = "Link", rl.categories = ["text", "account"], rl.tags = ["chain", "url", "links", "hyperlink"], rl.SM = $e, rl.LG = el, rl.XL = ll, rl.MD = al;
      const tl = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M7.928 2.026C6.695 3.1 4.88 4 3.333 4v4.667c0 1.49.514 2.574 1.325 3.404.829.849 1.998 1.462 3.34 1.926l.015.005c1.336-.466 2.502-1.08 3.33-1.93.81-.831 1.324-1.915 1.324-3.405V4c-1.547 0-3.355-.892-4.595-1.974a.11.11 0 0 0-.144 0M7.06 1.013a1.45 1.45 0 0 1 1.88 0l.005.005c1.094.956 2.604 1.649 3.722 1.649A1.333 1.333 0 0 1 14 4v4.667c0 1.843-.653 3.259-1.703 4.336-1.031 1.058-2.417 1.76-3.85 2.26l-.006.002c-.288.097-.6.094-.885-.01-1.436-.497-2.82-1.196-3.852-2.253C2.653 11.926 2 10.51 2 8.668V4a1.333 1.333 0 0 1 1.333-1.333c1.118 0 2.635-.7 3.722-1.649zM8 4.667c.368 0 .667.298.667.666V8a.667.667 0 0 1-1.334 0V5.333c0-.368.299-.666.667-.666m-.667 6c0-.368.299-.667.667-.667h.007a.667.667 0 0 1 0 1.334H8a.667.667 0 0 1-.667-.667",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        sl = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M11.892 3.038C10.042 4.652 7.322 6 5 6v7c0 2.236.77 3.861 1.987 5.106 1.243 1.274 2.997 2.194 5.01 2.889l.022.008c2.005-.7 3.754-1.622 4.995-2.895C18.229 16.861 19 15.236 19 13V6c-2.32 0-5.032-1.338-6.892-2.962a.17.17 0 0 0-.216 0M10.59 1.52a2.17 2.17 0 0 1 2.82 0l.008.007C15.058 2.961 17.323 4 19 4a2 2 0 0 1 2 2v7c0 2.764-.98 4.889-2.554 6.504-1.547 1.588-3.625 2.64-5.777 3.39l-.008.003a2 2 0 0 1-1.327-.015c-2.154-.745-4.231-1.794-5.778-3.378C3.979 17.889 3 15.764 3 13V6a2 2 0 0 1 2-2c1.676 0 3.952-1.049 5.582-2.473zM12 7a1 1 0 0 1 1 1v4a1 1 0 0 1-2 0V8a1 1 0 0 1 1-1m-1 9a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2H12a1 1 0 0 1-1-1",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        il = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M15.856 4.051C13.39 6.202 9.76 8 6.666 8v9.333c0 2.981 1.028 5.148 2.65 6.809 1.657 1.697 3.996 2.924 6.68 3.85l.03.012c2.673-.933 5.005-2.162 6.66-3.86 1.62-1.662 2.647-3.83 2.647-6.81V8c-3.093 0-6.708-1.784-9.189-3.95a.23.23 0 0 0-.288.001M14.12 2.026a2.89 2.89 0 0 1 3.758 0l.012.01c2.186 1.911 5.206 3.297 7.442 3.297A2.667 2.667 0 0 1 28 8v9.333c0 3.686-1.306 6.518-3.405 8.672-2.063 2.117-4.834 3.52-7.703 4.52l-.01.004c-.576.195-1.2.188-1.77-.02-2.872-.993-5.642-2.392-7.704-4.504C5.306 23.852 4 21.019 4 17.333V8a2.667 2.667 0 0 1 2.667-2.667c2.235 0 5.268-1.398 7.443-3.297zM16 9.333c.736 0 1.333.597 1.333 1.333V16a1.333 1.333 0 1 1-2.666 0v-5.334c0-.736.597-1.333 1.333-1.333m-1.333 12c0-.736.597-1.333 1.333-1.333h.013a1.333 1.333 0 1 1 0 2.666H16a1.333 1.333 0 0 1-1.333-1.333",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        dl = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "20",
            height: "20",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 20 20",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M15.134 5.488c-1.847-.128-3.922-1.186-5.375-2.454l-.043-.026a.14.14 0 0 0-.14.024C8.035 4.376 5.767 5.5 3.833 5.5v5.834c0 1.863.643 3.218 1.656 4.255.907.928 2.139 1.632 3.556 2.181l.62.226.018.006c1.67-.583 3.128-1.35 4.162-2.412 1.012-1.039 1.655-2.393 1.655-4.256V5.5zM9.674 13l.086.003a.834.834 0 0 1-.085 1.662h-.008a.834.834 0 1 1 0-1.665zm-.841-2.5V7.167a.834.834 0 0 1 1.667 0V10.5a.833.833 0 0 1-1.667 0m8.334.833c0 2.303-.817 4.073-2.129 5.42-1.29 1.322-3.02 2.2-4.813 2.825l-.007.002a1.67 1.67 0 0 1-1.117-.016v-.002c-1.791-.62-3.518-1.492-4.804-2.81-1.314-1.345-2.13-3.116-2.13-5.42V5.5a1.667 1.667 0 0 1 1.666-1.666c1.397 0 3.294-.874 4.652-2.061l.007-.007v.001a1.81 1.81 0 0 1 2.223-.1l.127.1.007.006c1.366 1.194 3.253 2.06 4.651 2.06A1.667 1.667 0 0 1 17.167 5.5z"
            })
          })
        }))),
        ol = (0, t.forwardRef)((({
          size: e = "SM",
          ...l
        }, a) => {
          const t = (0, o.v6)(l, {
            className: g({
              size: e
            })
          });
          return (0, r.jsxs)(r.Fragment, {
            children: ["SM" === e && (0, r.jsx)(tl, {
              ...t,
              ref: a
            }), "LG" === e && (0, r.jsx)(sl, {
              ...t,
              ref: a
            }), "XL" === e && (0, r.jsx)(il, {
              ...t,
              ref: a
            }), "MD" === e && (0, r.jsx)(dl, {
              ...t,
              ref: a
            })]
          })
        }));
      ol.displayName = "ShieldAlert", ol.categories = ["account", "security", "development", "notifications", "gaming"], ol.tags = ["unshielded", "cybersecurity", "insecure", "unsecured", "safety", "unsafe", "protection", "unprotected", "guardian", "unguarded", "unarmored", "unarmoured", "defenseless", "defenceless", "undefended", "defender", "blocked", "stopped", "intercepted", "interception", "saved", "thwarted", "threat", "prevention", "unprevented", "antivirus", "vigilance", "vigilant", "detection", "detected", "scanned", "found", "exploit", "vulnerability", "vulnerable", "weakness", "infection", "infected", "comprimised", "data leak", "audited", "admin", "verification", "unverified", "uncertified", "warning", "emergency", "attention", "urgent", "alarm", "crest", "bravery", "strength", "tough", "attacked", "damaged", "injured", "hit", "expired", "disabled", "inactive", "error", "exclamation mark", "!"], ol.SM = tl, ol.LG = sl, ol.XL = il, ol.MD = dl;
      const nl = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M6.667 2.667a2.667 2.667 0 1 0 0 5.333 2.667 2.667 0 0 0 0-5.333m2.427 5.846a4 4 0 1 0-4.855 0l-.04.018a6 6 0 0 0-3.532 5.47A.667.667 0 1 0 2 14a4.667 4.667 0 0 1 7.754-3.5.667.667 0 1 0 .882-1 6 6 0 0 0-1.542-.988M12.667 10c.368 0 .666.299.666.667V12h1.334a.667.667 0 1 1 0 1.334h-1.334v1.333a.667.667 0 0 1-1.333 0v-1.333h-1.333a.667.667 0 0 1 0-1.334H12v-1.333c0-.368.298-.667.667-.667",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        hl = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M10 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8m3.641 8.77a6 6 0 1 0-7.283 0l-.06.027A9 9 0 0 0 1 21a1 1 0 0 0 2 0 7 7 0 0 1 7-7h.054a7 7 0 0 1 4.576 1.75 1 1 0 1 0 1.323-1.5 9 9 0 0 0-2.312-1.48M19 15a1 1 0 0 1 1 1v2h2a1 1 0 1 1 0 2h-2v2a1 1 0 1 1-2 0v-2h-2a1 1 0 1 1 0-2h2v-2a1 1 0 0 1 1-1",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        cl = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M13.333 5.333a5.333 5.333 0 1 0 0 10.667 5.333 5.333 0 0 0 0-10.667m4.856 11.692a8 8 0 1 0-9.71 0l-.083.037A12 12 0 0 0 1.333 28 1.333 1.333 0 0 0 4 28a9.333 9.333 0 0 1 15.507-7 1.333 1.333 0 1 0 1.764-2 12 12 0 0 0-3.082-1.975M25.333 20c.737 0 1.334.597 1.334 1.333V24h2.666a1.333 1.333 0 0 1 0 2.666h-2.666v2.667a1.333 1.333 0 1 1-2.667 0v-2.666h-2.667a1.333 1.333 0 1 1 0-2.667H24v-2.667c0-.736.597-1.333 1.333-1.333",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        fl = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "20",
            height: "20",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 20 20",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M14.666 18.833v-1.666H13a.835.835 0 0 1 0-1.667h1.666v-1.667a.834.834 0 0 1 1.667 0V15.5H18l.085.004a.834.834 0 0 1 0 1.658l-.085.005h-1.667v1.666a.834.834 0 1 1-1.667 0M11.333 7.167a3.334 3.334 0 1 0-3.505 3.33L8 10.5l.171-.004a3.334 3.334 0 0 0 3.162-3.329m1.667 0a4.99 4.99 0 0 1-1.968 3.974 7.5 7.5 0 0 1 1.723 1.06l.206.174.062.06a.833.833 0 0 1-1.098 1.243l-.067-.053-.16-.137a5.83 5.83 0 0 0-3.664-1.322H8.01A5.834 5.834 0 0 0 2.166 18 .833.833 0 1 1 .5 18a7.5 7.5 0 0 1 4.414-6.836l.052-.023A5 5 0 1 1 13 7.167"
            })
          })
        }))),
        wl = (0, t.forwardRef)((({
          size: e = "SM",
          ...l
        }, a) => {
          const t = (0, o.v6)(l, {
            className: g({
              size: e
            })
          });
          return (0, r.jsxs)(r.Fragment, {
            children: ["SM" === e && (0, r.jsx)(nl, {
              ...t,
              ref: a
            }), "LG" === e && (0, r.jsx)(hl, {
              ...t,
              ref: a
            }), "XL" === e && (0, r.jsx)(cl, {
              ...t,
              ref: a
            }), "MD" === e && (0, r.jsx)(fl, {
              ...t,
              ref: a
            })]
          })
        }));
      wl.displayName = "PersonPlus", wl.categories = ["account"], wl.tags = ["new", "add", "create", "follow", "subscribe"], wl.SM = nl, wl.LG = hl, wl.XL = cl, wl.MD = fl;
      const vl = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M2.667 3.333A.667.667 0 0 0 2 4v.3l5.669 3.603a.63.63 0 0 0 .662 0l.002-.001L14 4.3V4a.667.667 0 0 0-.667-.667zm12.666 1.322V4a2 2 0 0 0-2-2H2.667a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h10.666a2 2 0 0 0 2-2V4.655M14 5.88 9.04 9.032a1.96 1.96 0 0 1-2.08 0l-.004-.003L2 5.88V12c0 .368.299.667.667.667h10.666A.667.667 0 0 0 14 12z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        xl = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M4 5a1 1 0 0 0-1 1v.45l8.503 5.404a.94.94 0 0 0 .994 0l.002-.001L21 6.45V6a1 1 0 0 0-1-1zm19 1.983V6a3 3 0 0 0-3-3H4a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h16a3 3 0 0 0 3-3V6.983M21 8.82l-7.44 4.727a2.94 2.94 0 0 1-3.12 0l-.006-.003L3 8.82V18a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        gl = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M5.333 6.667C4.597 6.667 4 7.264 4 8v.6l11.338 7.205a1.25 1.25 0 0 0 1.324 0q.002 0 .003-.002L28 8.601V8c0-.736-.597-1.333-1.333-1.333zM30.667 9.31V8a4 4 0 0 0-4-4H5.333a4 4 0 0 0-4 4v16a4 4 0 0 0 4 4h21.334a4 4 0 0 0 4-4V9.311M28 11.76l-9.919 6.302a3.92 3.92 0 0 1-4.162 0l-.008-.004L4 11.76V24c0 .736.597 1.333 1.333 1.333h21.334c.736 0 1.333-.597 1.333-1.333z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        jl = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "20",
            height: "20",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 20 20",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "m17.166 7.852-6.21 3.957-.03.018a2.5 2.5 0 0 1-2.512 0l-.028-.018-6.22-3.958v7.65c0 .46.374.833.834.833h13.333c.46 0 .833-.373.833-.833zm0-2.352a.834.834 0 0 0-.833-.833H3a.834.834 0 0 0-.834.833v.375l7.09 4.511c.126.073.268.113.414.113s.286-.04.411-.11l7.085-4.514zm1.667 10a2.5 2.5 0 0 1-2.5 2.5H3a2.5 2.5 0 0 1-2.5-2.5v-10A2.5 2.5 0 0 1 3 3h13.333a2.5 2.5 0 0 1 2.5 2.5z"
            })
          })
        }))),
        ml = (0, t.forwardRef)((({
          size: e = "SM",
          ...l
        }, a) => {
          const t = (0, o.v6)(l, {
            className: g({
              size: e
            })
          });
          return (0, r.jsxs)(r.Fragment, {
            children: ["SM" === e && (0, r.jsx)(vl, {
              ...t,
              ref: a
            }), "LG" === e && (0, r.jsx)(xl, {
              ...t,
              ref: a
            }), "XL" === e && (0, r.jsx)(gl, {
              ...t,
              ref: a
            }), "MD" === e && (0, r.jsx)(jl, {
              ...t,
              ref: a
            })]
          })
        }));
      ml.displayName = "Envelope", ml.categories = ["text", "account", "mail"], ml.tags = ["email", "message", "letter", "unread", "inbox", "chat", "letter", "invitation"], ml.SM = vl, ml.LG = xl, ml.XL = gl, ml.MD = jl;
      const pl = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M8 2a4.667 4.667 0 0 0-4.667 4.667c0 1.439.811 2.99 1.865 4.376C6.218 12.38 7.386 13.465 8 13.998c.614-.533 1.783-1.617 2.802-2.955 1.053-1.385 1.865-2.937 1.865-4.376A4.667 4.667 0 0 0 8 2m-4.243.424A6 6 0 0 1 14 6.667c0 1.889-1.035 3.735-2.137 5.183-1.118 1.469-2.39 2.637-3.027 3.187l-.035.028a1.33 1.33 0 0 1-1.637-.028c-.637-.55-1.909-1.718-3.026-3.187C3.035 10.402 2 8.556 2 6.667a6 6 0 0 1 1.757-4.243M8 5.334A1.333 1.333 0 1 0 8 8a1.333 1.333 0 0 0 0-2.667M5.333 6.666a2.667 2.667 0 1 1 5.334 0 2.667 2.667 0 0 1-5.334 0",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        ul = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M12 3a7 7 0 0 0-7 7c0 2.16 1.217 4.487 2.798 6.564 1.528 2.008 3.282 3.634 4.202 4.433.92-.799 2.674-2.425 4.202-4.433C17.783 14.487 19 12.159 19 10a7 7 0 0 0-7-7m-6.364.636A9 9 0 0 1 21 10c0 2.834-1.553 5.603-3.206 7.775-1.677 2.203-3.584 3.956-4.54 4.78l-.052.043a2 2 0 0 1-2.456-.042c-.956-.825-2.863-2.578-4.54-4.78C4.553 15.602 3 12.833 3 10a9 9 0 0 1 2.636-6.364M12 8a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-4 2a4 4 0 1 1 8 0 4 4 0 0 1-8 0",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Ml = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M16 4a9.333 9.333 0 0 0-9.333 9.334c0 2.879 1.622 5.982 3.73 8.752 2.038 2.677 4.376 4.845 5.603 5.91 1.227-1.065 3.565-3.233 5.603-5.91 2.108-2.77 3.73-5.873 3.73-8.752A9.333 9.333 0 0 0 16 4m-8.485.848A12 12 0 0 1 28 13.334c0 3.778-2.07 7.47-4.275 10.367-2.236 2.937-4.779 5.274-6.052 6.374q-.034.03-.07.056a2.67 2.67 0 0 1-3.276-.056c-1.273-1.1-3.816-3.437-6.052-6.374C6.07 20.804 4 17.11 4 13.334a12 12 0 0 1 3.515-8.486M16 10.667A2.667 2.667 0 1 0 16 16a2.667 2.667 0 0 0 0-5.333m-5.333 2.667a5.333 5.333 0 1 1 10.666 0 5.333 5.333 0 0 1-10.666 0",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Rl = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "20",
            height: "20",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 20 20",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M15.5 8.834a5.834 5.834 0 0 0-11.667 0c0 1.799 1.015 3.738 2.332 5.47 1.273 1.672 2.734 3.026 3.501 3.692.767-.666 2.23-2.02 3.503-3.693 1.317-1.73 2.33-3.67 2.331-5.47m-4.167 0A1.667 1.667 0 1 0 8 8.833a1.667 1.667 0 0 0 3.333 0m1.667 0a3.333 3.333 0 1 1-6.667-.001 3.333 3.333 0 0 1 6.667 0m4.167 0c0 2.36-1.294 4.669-2.672 6.479-1.397 1.836-2.987 3.296-3.783 3.983l-.044.035a1.666 1.666 0 0 1-2.047-.035c-.796-.687-2.385-2.148-3.782-3.983-1.378-1.81-2.672-4.118-2.672-6.48a7.5 7.5 0 1 1 15 0"
            })
          })
        }))),
        bl = (0, t.forwardRef)((({
          size: e = "SM",
          ...l
        }, a) => {
          const t = (0, o.v6)(l, {
            className: g({
              size: e
            })
          });
          return (0, r.jsxs)(r.Fragment, {
            children: ["SM" === e && (0, r.jsx)(pl, {
              ...t,
              ref: a
            }), "LG" === e && (0, r.jsx)(ul, {
              ...t,
              ref: a
            }), "XL" === e && (0, r.jsx)(Ml, {
              ...t,
              ref: a
            }), "MD" === e && (0, r.jsx)(Rl, {
              ...t,
              ref: a
            })]
          })
        }));
      bl.displayName = "MapPin", bl.categories = ["navigation", "travel", "account"], bl.tags = ["location", "waypoint", "marker", "drop"], bl.SM = pl, bl.LG = ul, bl.XL = Ml, bl.MD = Rl;
      const Ll = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M7.928 2.026C6.695 3.1 4.88 4 3.333 4v4.667c0 1.49.514 2.574 1.325 3.404.829.849 1.998 1.462 3.34 1.926l.015.005c1.336-.466 2.502-1.08 3.33-1.93.81-.831 1.324-1.915 1.324-3.405V4c-1.547 0-3.355-.892-4.595-1.974a.11.11 0 0 0-.144 0M7.06 1.013a1.45 1.45 0 0 1 1.88 0l.005.005c1.094.956 2.604 1.649 3.722 1.649A1.333 1.333 0 0 1 14 4v4.667c0 1.843-.653 3.259-1.703 4.336-1.031 1.058-2.417 1.76-3.85 2.26l-.006.002c-.288.097-.6.094-.885-.01-1.436-.497-2.82-1.196-3.852-2.253C2.653 11.926 2 10.51 2 8.668V4a1.333 1.333 0 0 1 1.333-1.333c1.118 0 2.635-.7 3.722-1.649zm3.411 5.182c.26.26.26.683 0 .943L7.805 9.805a.667.667 0 0 1-.943 0L5.529 8.472a.667.667 0 0 1 .942-.943l.862.862L9.53 6.195c.26-.26.682-.26.942 0",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        zl = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M11.892 3.038C10.042 4.652 7.322 6 5 6v7c0 2.236.77 3.861 1.987 5.106 1.243 1.274 2.997 2.194 5.01 2.889l.022.008c2.005-.7 3.754-1.622 4.995-2.895C18.229 16.861 19 15.236 19 13V6c-2.32 0-5.032-1.338-6.892-2.962a.17.17 0 0 0-.216 0M10.59 1.52a2.17 2.17 0 0 1 2.82 0l.008.007C15.058 2.961 17.323 4 19 4a2 2 0 0 1 2 2v7c0 2.764-.98 4.889-2.554 6.504-1.547 1.588-3.625 2.64-5.777 3.39l-.008.003a2 2 0 0 1-1.327-.015c-2.154-.745-4.231-1.794-5.778-3.378C3.979 17.889 3 15.764 3 13V6a2 2 0 0 1 2-2c1.676 0 3.952-1.049 5.582-2.473zm5.117 7.773a1 1 0 0 1 0 1.414l-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 1 1 1.414-1.414L11 12.586l3.293-3.293a1 1 0 0 1 1.414 0",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Cl = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "20",
            height: "20",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 20 20",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M15.134 4.988c-1.847-.128-3.922-1.186-5.375-2.454l-.043-.026a.14.14 0 0 0-.14.024C8.035 3.876 5.767 5 3.833 5v5.834c0 1.863.643 3.218 1.656 4.255.907.928 2.139 1.632 3.556 2.181l.62.226.018.006c1.67-.583 3.128-1.35 4.162-2.412 1.012-1.039 1.655-2.393 1.655-4.256V5zM11.64 7.687a.834.834 0 0 1 1.115 1.235l-3.333 3.334a.834.834 0 0 1-1.179 0L6.577 10.59l.59-.588.589-.59 1.077 1.077 2.744-2.743zM6.577 9.411a.834.834 0 0 1 1.179 0l-1.179 1.178a.834.834 0 0 1 0-1.178m10.59 1.423c0 2.303-.817 4.073-2.129 5.42-1.29 1.322-3.02 2.2-4.813 2.825l-.007.002a1.67 1.67 0 0 1-1.117-.016v-.002c-1.791-.62-3.518-1.492-4.804-2.81-1.314-1.345-2.13-3.116-2.13-5.42V5a1.667 1.667 0 0 1 1.666-1.666c1.397 0 3.294-.874 4.652-2.061l.007-.007v.001a1.81 1.81 0 0 1 2.223-.1l.127.1.007.006c1.366 1.194 3.253 2.06 4.651 2.06A1.667 1.667 0 0 1 17.167 5z"
            })
          })
        }))),
        Al = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M15.856 4.051C13.39 6.202 9.76 8 6.666 8v9.333c0 2.981 1.028 5.148 2.65 6.809 1.657 1.697 3.996 2.924 6.68 3.85l.03.012c2.673-.933 5.005-2.162 6.66-3.86 1.62-1.662 2.647-3.83 2.647-6.81V8c-3.093 0-6.708-1.784-9.189-3.95a.23.23 0 0 0-.288.001M14.12 2.026a2.89 2.89 0 0 1 3.758 0l.012.01c2.186 1.911 5.206 3.297 7.442 3.297A2.667 2.667 0 0 1 28 8v9.333c0 3.686-1.306 6.518-3.405 8.672-2.063 2.117-4.834 3.52-7.703 4.52l-.01.004c-.576.195-1.2.188-1.77-.02-2.872-.993-5.642-2.392-7.704-4.504C5.306 23.852 4 21.019 4 17.333V8a2.667 2.667 0 0 1 2.667-2.667c2.235 0 5.268-1.398 7.443-3.297zm6.822 10.364c.52.521.52 1.365 0 1.886l-5.334 5.333c-.52.521-1.364.521-1.885 0l-2.667-2.666a1.333 1.333 0 1 1 1.886-1.886l1.724 1.724 4.39-4.39c.52-.521 1.365-.521 1.886 0",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Hl = (0, t.forwardRef)((({
          size: e = "SM",
          ...l
        }, a) => {
          const t = (0, o.v6)(l, {
            className: g({
              size: e
            })
          });
          return (0, r.jsxs)(r.Fragment, {
            children: ["SM" === e && (0, r.jsx)(Ll, {
              ...t,
              ref: a
            }), "LG" === e && (0, r.jsx)(zl, {
              ...t,
              ref: a
            }), "MD" === e && (0, r.jsx)(Cl, {
              ...t,
              ref: a
            }), "XL" === e && (0, r.jsx)(Al, {
              ...t,
              ref: a
            })]
          })
        }));
      Hl.displayName = "ShieldCheck", Hl.categories = ["account", "security", "development", "gaming"], Hl.tags = ["cybersecurity", "secured", "safety", "protection", "protected", "guardian", "guarded", "armored", "armoured", "defense", "defence", "defended", "blocked", "threat", "prevention", "prevented", "antivirus", "vigilance", "vigilant", "active", "activated", "enabled", "detection", "scanned", "found", "strength", "strong", "tough", "invincible", "invincibility", "invulnerable", "undamaged", "audited", "admin", "verification", "verified", "certification", "certified", "tested", "passed", "qualified", "cleared", "cleaned", "disinfected", "uninfected", "task", "completed", "todo", "done", "ticked", "checked", "crest", "bravery"], Hl.SM = Ll, Hl.LG = zl, Hl.MD = Cl, Hl.XL = Al;
      const Vl = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M11.039 2.018a3.333 3.333 0 0 0-3.412 4.687c.115.253.06.55-.136.746l-4.606 4.607a.748.748 0 1 0 1.057 1.057l4.607-4.607a.67.67 0 0 1 .746-.136 3.333 3.333 0 0 0 4.686-3.41l-1.714 1.714a1.333 1.333 0 0 1-1.867 0l-.005-.005L9.324 5.6a1.333 1.333 0 0 1 0-1.867l.005-.005zM9.828.74a4.67 4.67 0 0 1 2.76.34.667.667 0 0 1 .197 1.078l-2.509 2.508 1.057 1.058 2.509-2.509a.667.667 0 0 1 1.079.197 4.667 4.667 0 0 1-5.738 6.347l-4.298 4.299a2.081 2.081 0 0 1-2.943-2.943L6.24 6.817A4.667 4.667 0 0 1 9.828.74",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Il = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M16.558 3.028a5 5 0 0 0-5.117 7.03 1 1 0 0 1-.204 1.12l-6.91 6.91a1.121 1.121 0 0 0 1.586 1.585l6.91-6.91a1 1 0 0 1 1.12-.204 5 5 0 0 0 7.029-5.117L18.4 10.014a2 2 0 0 1-2.8 0l-.007-.007L13.986 8.4a2 2 0 0 1 0-2.8l.007-.007zM14.742 1.11a7 7 0 0 1 4.14.51 1 1 0 0 1 .295 1.617L15.414 7 17 8.586l3.763-3.763a1 1 0 0 1 1.618.295 7 7 0 0 1-8.606 9.522l-6.448 6.447a3.121 3.121 0 1 1-4.414-4.414l6.448-6.448a7 7 0 0 1 5.38-9.115",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Bl = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M22.077 4.037a6.666 6.666 0 0 0-6.822 9.373c.229.506.12 1.1-.272 1.493l-9.214 9.213a1.495 1.495 0 1 0 2.115 2.115l9.213-9.214c.393-.392.987-.5 1.493-.272a6.666 6.666 0 0 0 9.373-6.822l-3.43 3.43a2.667 2.667 0 0 1-3.733 0l-.01-.01-2.142-2.143a2.667 2.667 0 0 1 0-3.733l.01-.01zM19.655 1.48a9.33 9.33 0 0 1 5.521.679 1.333 1.333 0 0 1 .394 2.157l-5.018 5.017 2.115 2.115 5.017-5.017a1.333 1.333 0 0 1 2.157.393 9.334 9.334 0 0 1-11.475 12.695L9.77 28.116a4.162 4.162 0 0 1-5.885-5.885l8.597-8.597A9.333 9.333 0 0 1 19.656 1.48",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Sl = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "20",
            height: "20",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 20 20",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M11.952.924a5.83 5.83 0 0 1 3.45.425.834.834 0 0 1 .246 1.349l-3.136 3.136 1.322 1.32 3.135-3.135.076-.067a.833.833 0 0 1 1.273.313 5.834 5.834 0 0 1-7.173 7.934l-5.372 5.374a2.602 2.602 0 0 1-3.679-3.679L7.467 8.52A5.834 5.834 0 0 1 11.952.924M2.999 15.733a.936.936 0 0 0 1.595.661l5.758-5.759a.835.835 0 0 1 .934-.17 4.166 4.166 0 0 0 5.816-3.048c.073-.403.084-.811.04-1.213l-2.136 2.135-.007.006a1.667 1.667 0 0 1-2.333 0l-1.338-1.339L11.322 7a1.666 1.666 0 0 1 0-2.333l2.141-2.143a4.17 4.17 0 0 0-3.413 1.193 4.17 4.17 0 0 0-.85 4.664.83.83 0 0 1-.17.933l-5.757 5.759a.94.94 0 0 0-.274.66"
            })
          })
        }))),
        yl = (0, t.forwardRef)((({
          size: e = "SM",
          ...l
        }, a) => {
          const t = (0, o.v6)(l, {
            className: g({
              size: e
            })
          });
          return (0, r.jsxs)(r.Fragment, {
            children: ["SM" === e && (0, r.jsx)(Vl, {
              ...t,
              ref: a
            }), "LG" === e && (0, r.jsx)(Il, {
              ...t,
              ref: a
            }), "XL" === e && (0, r.jsx)(Bl, {
              ...t,
              ref: a
            }), "MD" === e && (0, r.jsx)(Sl, {
              ...t,
              ref: a
            })]
          })
        }));
      yl.displayName = "Wrench", yl.categories = ["account", "development", "tools"], yl.tags = ["account", "settings", "spanner", "diy", "toolbox", "build", "construction"], yl.SM = Vl, yl.LG = Il, yl.XL = Bl, yl.MD = Sl;
      const Dl = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: [(0, r.jsx)("path", {
              stroke: e,
              d: "M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeWidth: "2"
            }), (0, r.jsx)("path", {
              stroke: e,
              d: "M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeWidth: "2"
            })]
          })
        }))),
        Nl = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: [(0, r.jsx)("path", {
              stroke: e,
              d: "M8.147 1.334h-.294A1.333 1.333 0 0 0 6.52 2.667v.12a1.33 1.33 0 0 1-.667 1.153l-.286.167a1.33 1.33 0 0 1-1.334 0l-.1-.054a1.333 1.333 0 0 0-1.82.487l-.146.253a1.333 1.333 0 0 0 .486 1.82l.1.067a1.33 1.33 0 0 1 .667 1.147v.34a1.33 1.33 0 0 1-.667 1.16l-.1.06a1.333 1.333 0 0 0-.486 1.82l.146.253a1.334 1.334 0 0 0 1.82.487l.1-.053a1.33 1.33 0 0 1 1.334 0l.286.166a1.33 1.33 0 0 1 .667 1.153v.12a1.333 1.333 0 0 0 1.333 1.334h.294a1.333 1.333 0 0 0 1.333-1.333v-.12a1.33 1.33 0 0 1 .667-1.154l.286-.167a1.33 1.33 0 0 1 1.334 0l.1.054a1.333 1.333 0 0 0 1.82-.487l.146-.26a1.334 1.334 0 0 0-.486-1.82l-.1-.053a1.33 1.33 0 0 1-.667-1.16v-.333a1.33 1.33 0 0 1 .667-1.16l.1-.06a1.334 1.334 0 0 0 .486-1.82l-.146-.254a1.333 1.333 0 0 0-1.82-.487l-.1.054a1.33 1.33 0 0 1-1.334 0l-.286-.167a1.33 1.33 0 0 1-.667-1.153v-.12a1.333 1.333 0 0 0-1.333-1.333",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeWidth: "1.333"
            }), (0, r.jsx)("path", {
              stroke: e,
              d: "M8 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeWidth: "1.333"
            })]
          })
        }))),
        Gl = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: [(0, r.jsx)("path", {
              stroke: e,
              d: "M16.293 2.667h-.586a2.666 2.666 0 0 0-2.667 2.667v.24a2.67 2.67 0 0 1-1.333 2.306l-.574.334a2.67 2.67 0 0 1-2.666 0l-.2-.107a2.667 2.667 0 0 0-3.64.973l-.294.507a2.667 2.667 0 0 0 .974 3.64l.2.133a2.67 2.67 0 0 1 1.333 2.294v.68a2.67 2.67 0 0 1-1.333 2.32l-.2.12a2.666 2.666 0 0 0-.974 3.64l.294.506a2.667 2.667 0 0 0 3.64.974l.2-.107a2.67 2.67 0 0 1 2.666 0l.574.333a2.67 2.67 0 0 1 1.333 2.307v.24a2.667 2.667 0 0 0 2.667 2.667h.586a2.667 2.667 0 0 0 2.667-2.667v-.24a2.67 2.67 0 0 1 1.333-2.307l.574-.333a2.67 2.67 0 0 1 2.666 0l.2.107a2.667 2.667 0 0 0 3.64-.974l.294-.52a2.666 2.666 0 0 0-.974-3.64l-.2-.106a2.67 2.67 0 0 1-1.333-2.32v-.667a2.67 2.67 0 0 1 1.333-2.32l.2-.12a2.667 2.667 0 0 0 .974-3.64l-.294-.507a2.666 2.666 0 0 0-3.64-.973l-.2.107a2.67 2.67 0 0 1-2.666 0l-.574-.334a2.67 2.67 0 0 1-1.333-2.306v-.24a2.667 2.667 0 0 0-2.667-2.667",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeWidth: "2.667"
            }), (0, r.jsx)("path", {
              stroke: e,
              d: "M16 20a4 4 0 1 0 0-8 4 4 0 0 0 0 8",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeWidth: "2.667"
            })]
          })
        }))),
        Xl = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "20",
            height: "20",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 20 20",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M10.683 3.334A.835.835 0 0 0 9.85 2.5h-.367a.834.834 0 0 0-.833.833v.15A2.5 2.5 0 0 1 7.4 5.648v-.001l-.356.208-.002.001a2.5 2.5 0 0 1-2.476.013l-.125-.066-.024-.013a.834.834 0 0 0-1.137.303l-.184.315h.001A.834.834 0 0 0 3.332 7.5l.07.045.044.028.125.084a2.5 2.5 0 0 1 1.204 2.12v.428l-.005.165a2.5 2.5 0 0 1-1.234 2.002l-.124.076-.01.007a.834.834 0 0 0-.306 1.135l.183.317a.835.835 0 0 0 1.138.304l.024-.013.125-.067a2.5 2.5 0 0 1 2.331-.063l.145.077.002.001.356.207.14.087a2.5 2.5 0 0 1 1.11 2.076v.15a.833.833 0 0 0 .833.834h.367a.833.833 0 0 0 .833-.834v-.15l.006-.164a2.5 2.5 0 0 1 1.244-1.999l.357-.207.002-.001.144-.077a2.5 2.5 0 0 1 2.33.063h.001l.125.067.025.013a.834.834 0 0 0 1.137-.304l.178-.317.004-.006a.834.834 0 0 0-.295-1.133l-.108-.058-.025-.014a2.5 2.5 0 0 1-1.25-2.174V9.79a2.5 2.5 0 0 1 1.239-2.165l.125-.074.01-.007.07-.045a.834.834 0 0 0 .234-1.092v-.001l-.183-.315a.833.833 0 0 0-1.16-.29l-.126.067v-.001a2.5 2.5 0 0 1-2.475-.013l-.002-.001-.357-.208a2.5 2.5 0 0 1-1.25-2.162zm.65 6.666A1.667 1.667 0 1 0 8 10 1.667 1.667 0 0 0 11.334 10M13 10a3.334 3.334 0 1 1-6.668 0A3.334 3.334 0 0 1 13 10m-.65-6.518.007.11a.84.84 0 0 0 .319.55l.09.062h.003l.359.209h-.001a.83.83 0 0 0 .832-.001l.024-.014.1-.054.22-.112a2.5 2.5 0 0 1 3.059.817l.134.208.183.317h.001a2.5 2.5 0 0 1-.902 3.406l.001.001-.125.075-.013.007a.84.84 0 0 0-.416.726v.422a.84.84 0 0 0 .416.725l.1.054.026.013a2.5 2.5 0 0 1 .916 3.406l-.182.325-.005.009a2.5 2.5 0 0 1-3.388.925l-.125-.066-.024-.014a.84.84 0 0 0-.832-.002l-.358.21h-.003a.83.83 0 0 0-.416.721v.15a2.5 2.5 0 0 1-2.5 2.5h-.367a2.5 2.5 0 0 1-2.5-2.5v-.15a.83.83 0 0 0-.416-.72l-.003-.002-.358-.208a.83.83 0 0 0-.856.015l-.125.066a2.5 2.5 0 0 1-3.387-.925l-.184-.318h-.001a2.5 2.5 0 0 1 .901-3.406l.125-.075.013-.008a.83.83 0 0 0 .416-.725V9.79L3.1 9.68a.83.83 0 0 0-.454-.637l-.125-.084a2.497 2.497 0 0 1-.868-3.384l.001-.001.184-.317.133-.208a2.5 2.5 0 0 1 3.279-.705h-.001l.101.054.025.014a.83.83 0 0 0 .83 0l.36-.207.002-.001a.83.83 0 0 0 .416-.721v-.15a2.5 2.5 0 0 1 2.5-2.5h.367a2.5 2.5 0 0 1 2.5 2.5z"
            })
          })
        }))),
        ql = (0, t.forwardRef)((({
          size: e = "LG",
          ...l
        }, a) => {
          const t = (0, o.v6)(l, {
            className: g({
              size: e
            })
          });
          return (0, r.jsxs)(r.Fragment, {
            children: ["LG" === e && (0, r.jsx)(Dl, {
              ...t,
              ref: a
            }), "SM" === e && (0, r.jsx)(Nl, {
              ...t,
              ref: a
            }), "XL" === e && (0, r.jsx)(Gl, {
              ...t,
              ref: a
            }), "MD" === e && (0, r.jsx)(Xl, {
              ...t,
              ref: a
            })]
          })
        }));
      ql.displayName = "Gear", ql.categories = ["account"], ql.tags = ["Cog", "Settings", "Preferences", "Options", "Custom", "Customize"], ql.LG = Dl, ql.SM = Nl, ql.XL = Gl, ql.MD = Xl;
      const kl = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M13.868 2.014a.66.66 0 0 1 .371.031c.26.072.46.298.487.582l.604 6.647a.666.666 0 0 1-.664.727h-.585a2.08 2.08 0 0 1-2.372 2.06 2.08 2.08 0 0 1-2.043 1.687 2.1 2.1 0 0 1-1.072-.297 2.08 2.08 0 0 1-3.4.687L.862 9.805a.67.67 0 0 1-.192-.532l.606-6.666a.667.667 0 0 1 .664-.606h5.294a4.53 4.53 0 0 1 4.688-.026l.317.188c.141.086.31.115.472.084h.001zm-4.66.677a3.2 3.2 0 0 1 2.03.428l.313.187a2 2 0 0 0 1.418.249h.002l.491-.1.474 5.213h-.338a2 2 0 0 0-.127-.139l-2.587-2.587a2.667 2.667 0 0 0-3.769 0l-.587.587a.748.748 0 1 1-1.057-1.057l1.873-1.873a3.2 3.2 0 0 1 1.864-.908m-3.485.643H2.547l-.522 5.749 4.112 4.112a.747.747 0 0 0 1.071-1.043l-.347-.347a.667.667 0 1 1 .943-.943l.32.32.036.037.977.977a.748.748 0 1 0 1.043-1.073L8.862 9.805a.667.667 0 1 1 .943-.943l1.666 1.667a.748.748 0 0 0 1.057-1.057L9.942 6.886a1.333 1.333 0 0 0-1.884 0l-.587.586a2.08 2.08 0 1 1-2.943-2.943z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Fl = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M16.857 4.679a4.79 4.79 0 0 0-5.84.72l-2.81 2.809a1.121 1.121 0 1 0 1.586 1.585l.88-.88a4 4 0 0 1 5.654 0l3.88 3.88q.1.1.19.208h.508l-.71-7.818-.738.148h-.004a3 3 0 0 1-2.127-.373l-.003-.001zm4.083-1.677.06-.007a1 1 0 0 1 1.086.905l.91 10.01A1 1 0 0 1 22 15h-.879a3.12 3.12 0 0 1-3.556 3.091 3.124 3.124 0 0 1-3.065 2.53 3.1 3.1 0 0 1-1.608-.445 3.12 3.12 0 0 1-5.1 1.032l-6.5-6.5a1 1 0 0 1-.288-.798l.909-9.996a1 1 0 0 1 .996-.91h7.935a6.79 6.79 0 0 1 7.039-.042l.474.282a1 1 0 0 0 .708.126h.002l1.736-.35q.069-.014.137-.018M8.58 5.005h-4.76l-.783 8.62 6.17 6.168a1.121 1.121 0 0 0 1.585-1.585l-.5-.5a1 1 0 1 1 1.414-1.415l2 2a1.122 1.122 0 0 0 1.587-1.584l-.001-.001-2-2a1 1 0 0 1 1.414-1.415l2.5 2.5a1.121 1.121 0 0 0 1.586-1.585l-3.88-3.88a2 2 0 0 0-2.826 0l-.88.88a3.121 3.121 0 1 1-4.414-4.415z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Pl = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M22.476 6.238a6.39 6.39 0 0 0-7.787.96l-3.745 3.745a1.495 1.495 0 0 0 2.114 2.115l1.173-1.174a5.335 5.335 0 0 1 7.539 0l5.174 5.174q.132.132.252.276h.678L26.926 6.91l-.982.198h-.006a4 4 0 0 1-2.836-.497l-.004-.002zm5.445-2.235.079-.01A1.333 1.333 0 0 1 29.449 5.2l1.213 13.347A1.333 1.333 0 0 1 29.334 20h-1.172a4.162 4.162 0 0 1-4.741 4.122A4.163 4.163 0 0 1 17.19 26.9a4.162 4.162 0 0 1-6.799 1.376L1.725 19.61c-.28-.28-.421-.67-.386-1.063L2.551 5.219A1.333 1.333 0 0 1 3.88 4.006h10.58a9.05 9.05 0 0 1 9.385-.057l.632.377c.284.17.62.23.945.167h.002l2.315-.466q.09-.019.183-.024m-16.478 2.67H5.097L4.052 18.166l8.225 8.225a1.495 1.495 0 0 0 2.115-2.113l-.667-.668a1.333 1.333 0 1 1 1.885-1.886l2.667 2.667a1.494 1.494 0 0 0 2.116-2.113l-.002-.001-2.666-2.667a1.333 1.333 0 1 1 1.885-1.886l3.334 3.334a1.495 1.495 0 1 0 2.114-2.115l-5.173-5.172a2.667 2.667 0 0 0-3.769 0l-1.172 1.172a4.162 4.162 0 1 1-5.886-5.885z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Ol = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "20",
            height: "20",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 20 20",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M15.6 12.5a.93.93 0 0 0-.273-.66l-3.233-3.234a1.67 1.67 0 0 0-2.355-.001l-.733.734a2.602 2.602 0 0 1-3.679-3.678l1.495-1.495H2.936l-.734 7.192 5.137 5.136a.936.936 0 0 0 1.321 0 .934.934 0 0 0 0-1.322l-.006-.008-.41-.409-.057-.062A.833.833 0 0 1 9.36 13.52l.062.058.41.409.007.007.006.006 1.244 1.244a.935.935 0 1 0 1.321-1.322l-1.666-1.667-.057-.062a.833.833 0 0 1 1.173-1.173l.062.058 2.084 2.083a.934.934 0 0 0 1.595-.662m1.668 0a2.6 2.6 0 0 1-2.602 2.601q-.183-.001-.363-.03a2.6 2.6 0 0 1-.714 1.351 2.6 2.6 0 0 1-2.835.565 3 3 0 0 1-.345-.179 2.596 2.596 0 0 1-4.249.864L.744 12.255a.83.83 0 0 1-.24-.674l.833-8.166a.834.834 0 0 1 .83-.916H8.71a5.66 5.66 0 0 1 5.857-.032l.392.234.004.003c.133.08.285.12.439.119l.153-.016 1.446-.291a.834.834 0 0 1 .993.9l.834 8.166a.835.835 0 0 1-.829.917zm-11.036-5a.936.936 0 0 0 1.595.66l.734-.733.12-.114a3.334 3.334 0 0 1 4.59.114l3.235 3.234q.083.083.157.172h.414l-.664-6.499-.532.108h-.004a2.5 2.5 0 0 1-1.774-.312l-.388-.231a3.996 3.996 0 0 0-4.868.6l-2.34 2.34a.94.94 0 0 0-.275.66"
            })
          })
        }))),
        Tl = (0, t.forwardRef)((({
          size: e = "SM",
          ...l
        }, a) => {
          const t = (0, o.v6)(l, {
            className: g({
              size: e
            })
          });
          return (0, r.jsxs)(r.Fragment, {
            children: ["SM" === e && (0, r.jsx)(kl, {
              ...t,
              ref: a
            }), "LG" === e && (0, r.jsx)(Fl, {
              ...t,
              ref: a
            }), "XL" === e && (0, r.jsx)(Pl, {
              ...t,
              ref: a
            }), "MD" === e && (0, r.jsx)(Ol, {
              ...t,
              ref: a
            })]
          })
        }));
      Tl.displayName = "Handshake", Tl.categories = ["account", "social", "communication", "finance", "security"], Tl.tags = ["agreement", "partnership", "deal", "business", "assistance", "cooperation", "friendship", "union", "terms"], Tl.SM = kl, Tl.LG = Fl, Tl.XL = Pl, Tl.MD = Ol;
      const El = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M6.667 2.667a2.667 2.667 0 1 0 0 5.333 2.667 2.667 0 0 0 0-5.333m2.427 5.846a4 4 0 1 0-4.855 0l-.04.018a6 6 0 0 0-3.532 5.47A.667.667 0 1 0 2 14a4.667 4.667 0 0 1 7.754-3.5.667.667 0 1 0 .882-1 6 6 0 0 0-1.542-.988M10 12.667c0-.368.298-.667.667-.667h4a.667.667 0 1 1 0 1.334h-4a.667.667 0 0 1-.667-.667",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Ul = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M10 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8m3.641 8.77a6 6 0 1 0-7.283 0l-.06.027A9 9 0 0 0 1 21a1 1 0 0 0 2 0 7 7 0 0 1 7-7h.054a7 7 0 0 1 4.576 1.75 1 1 0 1 0 1.323-1.5 9 9 0 0 0-2.312-1.48M15 19a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2h-6a1 1 0 0 1-1-1",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        _l = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M13.333 5.333a5.333 5.333 0 1 0 0 10.667 5.333 5.333 0 0 0 0-10.667m4.856 11.692a8 8 0 1 0-9.71 0l-.083.037A12 12 0 0 0 1.333 28 1.333 1.333 0 0 0 4 28a9.333 9.333 0 0 1 15.507-7 1.333 1.333 0 1 0 1.764-2 12 12 0 0 0-3.082-1.975M20 25.333c0-.736.597-1.333 1.333-1.333h8a1.333 1.333 0 0 1 0 2.666h-8A1.333 1.333 0 0 1 20 25.334",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Wl = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "20",
            height: "20",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 20 20",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M11.333 6.667a3.334 3.334 0 1 0-3.505 3.33L8 10l.171-.004a3.334 3.334 0 0 0 3.162-3.329M18 15l.085.004a.834.834 0 0 1 0 1.658l-.085.005h-5A.834.834 0 0 1 13 15zm-5-8.333a4.99 4.99 0 0 1-1.967 3.974 7.5 7.5 0 0 1 1.722 1.06l.206.174.062.06a.833.833 0 0 1-1.098 1.243l-.066-.053-.16-.137a5.83 5.83 0 0 0-3.665-1.322H8.01A5.834 5.834 0 0 0 2.166 17.5a.833.833 0 1 1-1.666 0 7.5 7.5 0 0 1 4.414-6.836l.052-.023A5 5 0 1 1 13 6.667"
            })
          })
        }))),
        Zl = (0, t.forwardRef)((({
          size: e = "SM",
          ...l
        }, a) => {
          const t = (0, o.v6)(l, {
            className: g({
              size: e
            })
          });
          return (0, r.jsxs)(r.Fragment, {
            children: ["SM" === e && (0, r.jsx)(El, {
              ...t,
              ref: a
            }), "LG" === e && (0, r.jsx)(Ul, {
              ...t,
              ref: a
            }), "XL" === e && (0, r.jsx)(_l, {
              ...t,
              ref: a
            }), "MD" === e && (0, r.jsx)(Wl, {
              ...t,
              ref: a
            })]
          })
        }));
      Zl.displayName = "PersonMinus", Zl.categories = ["account"], Zl.tags = ["delete", "remove", "unfollow", "unsubscribe"], Zl.SM = El, Zl.LG = Ul, Zl.XL = _l, Zl.MD = Wl;
      const Yl = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M8 2.343 6.73 4.916a2.1 2.1 0 0 1-1.58 1.148l-2.842.415L4.363 8.48a2.1 2.1 0 0 1 .605 1.86l-.484 2.827 2.54-1.336a2.1 2.1 0 0 1 1.952 0l2.541 1.336-.485-2.828a2.1 2.1 0 0 1 .605-1.859l2.054-2-2.842-.416a2.1 2.1 0 0 1-1.578-1.148zM7.457.754a1.03 1.03 0 0 1 1.466.418l1.554 3.148a.75.75 0 0 0 .567.413l3.474.508a1.03 1.03 0 0 1 .852 1.265 1.03 1.03 0 0 1-.281.49l-2.513 2.448a.76.76 0 0 0-.218.668m0 0 .593 3.454v.002a1.03 1.03 0 0 1-1.495 1.087l-.002-.002-3.103-1.631a.76.76 0 0 0-.702 0l-3.104 1.632a1.03 1.03 0 0 1-1.495-1.086v-.001l.592-3.454a.76.76 0 0 0-.217-.669L.914 7l-.001-.002a1.03 1.03 0 0 1 .57-1.758l3.473-.507a.76.76 0 0 0 .568-.413l1.554-3.148a1.03 1.03 0 0 1 .38-.418",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Kl = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "m12 3.592-1.887 3.824a3.12 3.12 0 0 1-2.35 1.707l-4.225.618 3.056 2.974a3.12 3.12 0 0 1 .899 2.765l-.72 4.202 3.775-1.985a3.13 3.13 0 0 1 2.903 0l3.778 1.986-.721-4.204a3.13 3.13 0 0 1 .898-2.763l3.054-2.974-4.225-.619a3.13 3.13 0 0 1-2.346-1.706zm-.807-2.362a1.53 1.53 0 0 1 2.178.621l2.31 4.68a1.12 1.12 0 0 0 .844.613l5.165.756a1.53 1.53 0 0 1 1.235 1.041 1.53 1.53 0 0 1-.387 1.569l-3.736 3.638a1.12 1.12 0 0 0-.323.993m0 0 .88 5.135.001.004a1.53 1.53 0 0 1-2.223 1.614l-.003-.001-4.613-2.426a1.12 1.12 0 0 0-1.043 0l-4.614 2.427h-.002a1.53 1.53 0 0 1-2.221-1.614v-.003l.88-5.135a1.12 1.12 0 0 0-.322-.994l-3.734-3.634-.001-.002A1.53 1.53 0 0 1 2.31 7.9l5.163-.755a1.13 1.13 0 0 0 .845-.613l2.31-4.68a1.53 1.53 0 0 1 .564-.62",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Ql = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "m16.001 4.763-2.522 5.11a4.17 4.17 0 0 1-3.14 2.282l-5.645.825 4.083 3.974a4.17 4.17 0 0 1 1.201 3.695l-.963 5.615 5.045-2.653a4.18 4.18 0 0 1 3.88 0l5.048 2.654-.964-5.617a4.18 4.18 0 0 1 1.2-3.693l4.082-3.974-5.646-.826a4.18 4.18 0 0 1-3.136-2.28zm-1.078-3.156a2.044 2.044 0 0 1 2.91.83l3.088 6.253a1.5 1.5 0 0 0 1.126.82l6.901 1.01a2.05 2.05 0 0 1 1.652 1.391 2.04 2.04 0 0 1-.517 2.096L25.09 18.87a1.5 1.5 0 0 0-.432 1.326m0 0 1.177 6.862.001.005a2.044 2.044 0 0 1-2.97 2.158l-.005-.002-6.164-3.241a1.5 1.5 0 0 0-1.394 0l-6.165 3.242-.002.001a2.045 2.045 0 0 1-2.969-2.158v-.003l1.177-6.862a1.5 1.5 0 0 0-.432-1.328l-4.988-4.856-.002-.002a2.044 2.044 0 0 1 1.132-3.492l6.9-1.009a1.5 1.5 0 0 0 1.129-.819l3.086-6.254c.169-.341.43-.629.754-.83",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Jl = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "20",
            height: "20",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 20 20",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M9.843.846q.176.025.34.096l.157.083.143.104q.136.113.236.26l.09.154v.001l1.926 3.9a.94.94 0 0 0 .702.51l4.305.63h-.001a1.27 1.27 0 0 1 .963.703l.067.164.043.173a1.28 1.28 0 0 1-.248 1.002l-.118.133-3.113 3.032-.001-.001a.94.94 0 0 0-.269.827l.736 4.284h-.002a1.275 1.275 0 0 1-1.166 1.49 1.27 1.27 0 0 1-.684-.146v.001L10.1 16.223v-.001a.94.94 0 0 0-.868 0l-3.847 2.022.001.001a1.274 1.274 0 0 1-1.778-.65 1.3 1.3 0 0 1-.074-.697l.733-4.28A.94.94 0 0 0 4 11.791L.885 8.76l.001-.001A1.27 1.27 0 0 1 .56 7.45l.068-.165c.078-.16.188-.302.325-.417l.144-.105c.15-.094.318-.156.495-.181l4.303-.629h.001a.94.94 0 0 0 .703-.512l1.924-3.898.001-.001c.106-.213.268-.392.47-.518L9.15.942c.162-.071.338-.108.516-.108zM8.093 6.18a2.6 2.6 0 0 1-1.958 1.422l-3.52.514 2.546 2.48a2.6 2.6 0 0 1 .75 2.303l-.602 3.502 3.148-1.655a2.6 2.6 0 0 1 2.277-.068l.142.068v.001l3.147 1.654-.6-3.503a2.6 2.6 0 0 1 .749-2.302l2.544-2.479-3.52-.514A2.6 2.6 0 0 1 11.24 6.18L9.667 2.993z"
            })
          })
        }))),
        $l = (0, t.forwardRef)((({
          size: e = "SM",
          ...l
        }, a) => {
          const t = (0, o.v6)(l, {
            className: g({
              size: e
            })
          });
          return (0, r.jsxs)(r.Fragment, {
            children: ["SM" === e && (0, r.jsx)(Yl, {
              ...t,
              ref: a
            }), "LG" === e && (0, r.jsx)(Kl, {
              ...t,
              ref: a
            }), "XL" === e && (0, r.jsx)(Ql, {
              ...t,
              ref: a
            }), "MD" === e && (0, r.jsx)(Jl, {
              ...t,
              ref: a
            })]
          })
        }));
      $l.displayName = "Star", $l.categories = ["account", "social", "shapes", "multimedia", "weather", "emoji", "gaming"], $l.tags = ["bookmark", "favorite", "like", "review", "rating"], $l.SM = Yl, $l.LG = Kl, $l.XL = Ql, $l.MD = Jl;
      const ea = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M4 5.334a2.667 2.667 0 1 1 5.333 0 2.667 2.667 0 0 1-5.333 0m2.666-4a4 4 0 0 0-2.427 7.18A6 6 0 0 0 .666 14 .667.667 0 1 0 2 14a4.666 4.666 0 0 1 6.086-4.445.667.667 0 0 0 .814-.902 4 4 0 0 0-2.233-7.319m5.5 9c-.261 0-.51.055-.736.154l2.416 2.415a1.833 1.833 0 0 0-1.68-2.57m-1.833 1.833c0-.262.055-.511.154-.737l2.416 2.416a1.833 1.833 0 0 1-2.57-1.68m-1.333 0a3.167 3.167 0 1 1 6.333 0 3.167 3.167 0 0 1-6.333 0",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        la = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M6 8a4 4 0 1 1 8 0 4 4 0 0 1-8 0m4-6a6 6 0 0 0-3.64 10.77A9 9 0 0 0 1 21a1 1 0 0 0 2 0 7 7 0 0 1 9.13-6.667 1 1 0 0 0 1.22-1.354A6 6 0 0 0 10 2m8 13c-.463 0-.902.105-1.293.292l4 4v.001A3 3 0 0 0 18 15m-3 3c0-.463.105-.902.292-1.293l4 4h.001A3 3 0 0 1 15 18m-2 0a5 5 0 1 1 10 0 5 5 0 0 1-10 0",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        aa = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "20",
            height: "20",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 20 20",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M14.667 11a4 4 0 1 1 0 8 4 4 0 0 1 0-8m-2.121 3.07a2.315 2.315 0 0 0 3.052 3.052zm2.12-1.385c-.33 0-.645.069-.93.194l3.052 3.052a2.315 2.315 0 0 0-2.121-3.246M8 1.667a5 5 0 0 1 2.79 9.148.83.83 0 0 1-.932 1.15l-.083-.02-.33-.096a5.84 5.84 0 0 0-6.646 3.01 5.8 5.8 0 0 0-.632 2.641.833.833 0 0 1-1.667 0 7.5 7.5 0 0 1 4.47-6.857A5 5 0 0 1 8 1.667m0 1.666a3.334 3.334 0 1 0 .002 6.669A3.334 3.334 0 0 0 8 3.333",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        ra = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M8 10.667a5.333 5.333 0 1 1 10.667 0 5.333 5.333 0 0 1-10.667 0m5.334-8a8 8 0 0 0-4.854 14.36A12 12 0 0 0 1.334 28 1.333 1.333 0 0 0 4 28a9.334 9.334 0 0 1 12.173-8.89 1.333 1.333 0 0 0 1.627-1.805 8 8 0 0 0-4.466-14.638m11 18c-.525 0-1.023.11-1.474.307l4.832 4.832a3.667 3.667 0 0 0-3.359-5.14m-3.667 3.666c0-.524.11-1.022.308-1.473l4.831 4.832a3.667 3.667 0 0 1-5.14-3.359m-2.667 0a6.333 6.333 0 1 1 12.667 0 6.333 6.333 0 0 1-12.667 0",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        ta = (0, t.forwardRef)((({
          size: e = "SM",
          ...l
        }, a) => {
          const t = (0, o.v6)(l, {
            className: g({
              size: e
            })
          });
          return (0, r.jsxs)(r.Fragment, {
            children: ["SM" === e && (0, r.jsx)(ea, {
              ...t,
              ref: a
            }), "LG" === e && (0, r.jsx)(la, {
              ...t,
              ref: a
            }), "MD" === e && (0, r.jsx)(aa, {
              ...t,
              ref: a
            }), "XL" === e && (0, r.jsx)(ra, {
              ...t,
              ref: a
            })]
          })
        }));
      ta.displayName = "PersonBlock", ta.categories = ["account"], ta.tags = ["ban", "block", "delete", "remove", "report"], ta.SM = ea, ta.LG = la, ta.MD = aa, ta.XL = ra;
      const sa = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M6.667 2.667a2.667 2.667 0 1 0 0 5.333 2.667 2.667 0 0 0 0-5.333m2.427 5.846a4 4 0 1 0-4.855 0A6 6 0 0 0 .667 14 .667.667 0 0 0 2 14a4.667 4.667 0 1 1 9.333 0 .667.667 0 0 0 1.334 0 6 6 0 0 0-3.573-5.487m2.033-6.386a.667.667 0 0 1 .913-.234 4 4 0 0 1 .958 6.088c1.248 1.216 2.335 3.205 2.335 5.353a.667.667 0 0 1-1.333 0c0-2.008-1.21-3.907-2.4-4.8a.667.667 0 0 1 0-1.067 2.667 2.667 0 0 0-.24-4.427.667.667 0 0 1-.233-.913",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        ia = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M10 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8m3.641 8.77a6 6 0 1 0-7.282 0A9 9 0 0 0 1 21a1 1 0 1 0 2 0 7 7 0 1 1 14 0 1 1 0 1 0 2 0 9 9 0 0 0-5.359-8.23m3.049-9.58a1 1 0 0 1 1.37-.35 6 6 0 0 1 1.437 9.132C21.37 13.795 23 16.778 23 20a1 1 0 1 1-2 0c0-3.01-1.814-5.86-3.6-7.2a1 1 0 0 1 0-1.6 4 4 0 0 0-.36-6.64 1 1 0 0 1-.35-1.37",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        da = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M13.333 5.333a5.333 5.333 0 1 0 0 10.667 5.333 5.333 0 0 0 0-10.667m4.855 11.693a8 8 0 1 0-9.71 0A12 12 0 0 0 1.334 28 1.333 1.333 0 1 0 4 28a9.333 9.333 0 0 1 18.667 0 1.333 1.333 0 1 0 2.666 0 12 12 0 0 0-7.145-10.974m4.065-12.773a1.333 1.333 0 0 1 1.827-.467 8 8 0 0 1 1.916 12.176c2.496 2.43 4.67 6.409 4.67 10.705a1.333 1.333 0 1 1-2.666 0c0-4.015-2.419-7.815-4.8-9.6a1.333 1.333 0 0 1 0-2.134 5.334 5.334 0 0 0-.48-8.853 1.333 1.333 0 0 1-.467-1.827",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        oa = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "20",
            height: "20",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 20 20",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M11.333 7.167a3.334 3.334 0 1 0-3.505 3.33L8 10.5l.171-.004a3.334 3.334 0 0 0 3.162-3.329m5.833 10c0-2.509-1.511-4.884-3-6a.834.834 0 0 1 0-1.334 3.333 3.333 0 0 0-.3-5.533.833.833 0 0 1 .775-1.473l.076.04.26.164a5 5 0 0 1 1.72 6.25c-.203.436-.47.837-.785 1.195 1.56 1.519 2.921 4.005 2.921 6.691a.833.833 0 0 1-1.667 0M13 7.167a4.99 4.99 0 0 1-1.97 3.975A7.5 7.5 0 0 1 15.5 18a.834.834 0 0 1-1.667 0 5.834 5.834 0 0 0-11.667 0A.833.833 0 1 1 .5 18a7.5 7.5 0 0 1 4.468-6.858A5 5 0 1 1 13 7.167"
            })
          })
        }))),
        na = (0, t.forwardRef)((({
          size: e = "SM",
          ...l
        }, a) => {
          const t = (0, o.v6)(l, {
            className: g({
              size: e
            })
          });
          return (0, r.jsxs)(r.Fragment, {
            children: ["SM" === e && (0, r.jsx)(sa, {
              ...t,
              ref: a
            }), "LG" === e && (0, r.jsx)(ia, {
              ...t,
              ref: a
            }), "XL" === e && (0, r.jsx)(da, {
              ...t,
              ref: a
            }), "MD" === e && (0, r.jsx)(oa, {
              ...t,
              ref: a
            })]
          })
        }));
      na.displayName = "TwoPeople", na.categories = ["account"], na.tags = ["group", "people"], na.SM = sa, na.LG = ia, na.XL = da, na.MD = oa;
      const ha = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M2 4c0-.368.298-.667.667-.667h10.666a.667.667 0 1 1 0 1.334H2.667A.667.667 0 0 1 2 4m0 4c0-.368.298-.667.667-.667h10.666a.667.667 0 1 1 0 1.334H2.667A.667.667 0 0 1 2 8m0 4c0-.368.298-.666.667-.666h10.666a.667.667 0 0 1 0 1.333H2.667A.667.667 0 0 1 2 12",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        ca = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M3 6a1 1 0 0 1 1-1h16a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1m0 6a1 1 0 0 1 1-1h16a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1m0 6a1 1 0 0 1 1-1h16a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        fa = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M4 8c0-.737.597-1.333 1.333-1.333h21.334a1.333 1.333 0 0 1 0 2.666H5.333A1.333 1.333 0 0 1 4 8m0 8c0-.736.597-1.334 1.333-1.334h21.334a1.333 1.333 0 0 1 0 2.667H5.333A1.333 1.333 0 0 1 4 16m0 8c0-.736.597-1.334 1.333-1.334h21.334a1.333 1.333 0 0 1 0 2.667H5.333A1.333 1.333 0 0 1 4 24",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        wa = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "20",
            height: "20",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 20 20",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "m16.333 14.667.086.004a.834.834 0 0 1-.086 1.662H3a.833.833 0 1 1 0-1.666zm0-5 .086.004a.834.834 0 0 1-.086 1.662H3a.833.833 0 1 1 0-1.666zm0-5a.834.834 0 1 1 0 1.666H3a.833.833 0 1 1 0-1.666z"
            })
          })
        }))),
        va = (0, t.forwardRef)((({
          size: e = "SM",
          ...l
        }, a) => {
          const t = (0, o.v6)(l, {
            className: g({
              size: e
            })
          });
          return (0, r.jsxs)(r.Fragment, {
            children: ["SM" === e && (0, r.jsx)(ha, {
              ...t,
              ref: a
            }), "LG" === e && (0, r.jsx)(ca, {
              ...t,
              ref: a
            }), "XL" === e && (0, r.jsx)(fa, {
              ...t,
              ref: a
            }), "MD" === e && (0, r.jsx)(wa, {
              ...t,
              ref: a
            })]
          })
        }));
      va.displayName = "Menu", va.categories = ["layout", "account"], va.tags = ["bars", "navigation", "hamburger", "options", "side nav", "triple bar", "item"], va.SM = ha, va.LG = ca, va.XL = fa, va.MD = wa;
      const xa = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M6.134.677a.8.8 0 0 1 .252.085L6.5.833l.101.09a.8.8 0 0 1 .151.218l.048.126.002.006L10 12.652l1.085-3.859a2 2 0 0 1 1.93-1.46h1.652a.667.667 0 0 1 0 1.333h-1.654a.67.67 0 0 0-.605.385l-.039.103-1.566 5.573-.002.007a.834.834 0 0 1-1.6 0l-.001-.007-3.2-11.379-1.084 3.86a2 2 0 0 1-1.92 1.458H1.333a.667.667 0 1 1 0-1.333h1.659a.67.67 0 0 0 .64-.487l1.567-5.573v-.006A.84.84 0 0 1 5.5.833l.114-.07A.84.84 0 0 1 6 .666z"
            })
          })
        }))),
        ga = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "20",
            height: "20",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 20 20",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M7.5.833c.169 0 .335.041.483.119l.142.09.126.11c.116.121.201.27.249.432l.003.007L12.5 15.815l1.356-4.824a2.5 2.5 0 0 1 2.41-1.825h2.068a.833.833 0 0 1 0 1.668h-2.069a.83.83 0 0 0-.758.48l-.046.128-1.958 6.967-.003.008a1.043 1.043 0 0 1-2 0l-.002-.008L7.5 4.184 6.144 9.008a2.5 2.5 0 0 1-2.4 1.826H1.667a.834.834 0 0 1 0-1.668h2.072a.834.834 0 0 0 .8-.608l1.959-6.967.002-.008c.063-.216.194-.406.375-.541l.142-.09c.148-.078.314-.118.483-.119"
            })
          })
        }))),
        ja = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M9 1c.237 0 .468.067.667.192l.083.058.078.063c.151.134.268.302.34.49l.035.106L15 18.978l1.627-5.789A3 3 0 0 1 19.52 11H22a1 1 0 1 1 0 2h-2.482a1 1 0 0 0-.909.577l-.056.153-2.35 8.36-.035.106a1.25 1.25 0 0 1-2.336 0l-.035-.105L8.999 5.02l-1.626 5.79A3 3 0 0 1 4.493 13H2a1 1 0 1 1 0-2h2.487a1 1 0 0 0 .96-.73l2.35-8.36.035-.106A1.25 1.25 0 0 1 9 1"
            })
          })
        }))),
        ma = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M12 1.334a1.67 1.67 0 0 1 1.557 1.072l.043.127.003.012L20 25.305l2.17-7.72a4 4 0 0 1 3.857-2.919h3.307a1.333 1.333 0 0 1 0 2.668h-3.31a1.335 1.335 0 0 0-1.287.972v.001l-3.134 11.147-.003.012a1.67 1.67 0 0 1-2.6.867 1.67 1.67 0 0 1-.6-.867l-.004-.012L12 6.694l-2.17 7.72a4 4 0 0 1-3.84 2.92H2.668a1.334 1.334 0 0 1 0-2.668h3.316a1.33 1.33 0 0 0 1.28-.973v-.001l3.133-11.147.004-.012a1.67 1.67 0 0 1 1.6-1.2"
            })
          })
        }))),
        pa = (0, t.forwardRef)((({
          size: e = "SM",
          ...l
        }, a) => {
          const t = (0, o.v6)(l, {
            className: g({
              size: e
            })
          });
          return (0, r.jsxs)(r.Fragment, {
            children: ["SM" === e && (0, r.jsx)(xa, {
              ...t,
              ref: a
            }), "MD" === e && (0, r.jsx)(ga, {
              ...t,
              ref: a
            }), "LG" === e && (0, r.jsx)(ja, {
              ...t,
              ref: a
            }), "XL" === e && (0, r.jsx)(ma, {
              ...t,
              ref: a
            })]
          })
        }));
      pa.displayName = "Activity", pa.categories = ["account"], pa.tags = ["pulse", "action", "motion", "movement", "exercise", "fitness", "healthcare", "heart rate monitor", "vital signs", "vitals", "shockwave", "audio", "waveform", "synthesizer", "synthesiser", "music"], pa.SM = xa, pa.MD = ga, pa.LG = ja, pa.XL = ma;
      const ua = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M7.529 2.862c.26-.26.682-.26.942 0l4.667 4.666a.667.667 0 0 1-.943.943L8.667 4.943v7.724a.667.667 0 1 1-1.334 0V4.942L3.805 8.47a.667.667 0 1 1-.943-.943z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Ma = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M11.293 4.293a1 1 0 0 1 1.414 0l7 7a1 1 0 0 1-1.414 1.414L13 7.414V19a1 1 0 1 1-2 0V7.414l-5.293 5.293a1 1 0 0 1-1.414-1.414z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Ra = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "20",
            height: "20",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 20 20",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M8.833 15.834V6.178l-4.41 4.411a.833.833 0 0 1-1.179-1.178l5.833-5.833.064-.058a.834.834 0 0 1 1.115.058L16.09 9.41l.058.063a.834.834 0 0 1-1.173 1.172l-.063-.057-4.41-4.41v9.655a.834.834 0 0 1-1.668 0"
            })
          })
        }))),
        ba = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M15.057 5.724c.52-.52 1.365-.52 1.886 0l9.333 9.333a1.333 1.333 0 1 1-1.886 1.886l-7.057-7.057v15.448a1.333 1.333 0 1 1-2.666 0V9.886l-7.058 7.057a1.333 1.333 0 0 1-1.885-1.886z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        La = (0, t.forwardRef)((({
          size: e = "SM",
          ...l
        }, a) => {
          const t = (0, o.v6)(l, {
            className: g({
              size: e
            })
          });
          return (0, r.jsxs)(r.Fragment, {
            children: ["SM" === e && (0, r.jsx)(ua, {
              ...t,
              ref: a
            }), "LG" === e && (0, r.jsx)(Ma, {
              ...t,
              ref: a
            }), "MD" === e && (0, r.jsx)(Ra, {
              ...t,
              ref: a
            }), "XL" === e && (0, r.jsx)(ba, {
              ...t,
              ref: a
            })]
          })
        }));
      La.displayName = "ArrowUp", La.categories = ["arrows", "navigation"], La.tags = ["forward", "direction", "north", "increase"], La.SM = ua, La.LG = Ma, La.MD = Ra, La.XL = ba;
      const za = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M8.471 2.862c.26.26.26.682 0 .943L4.943 7.333h7.724a.667.667 0 1 1 0 1.333H4.943l3.528 3.53a.667.667 0 1 1-.942.942L2.862 8.47a.667.667 0 0 1 0-.943l4.667-4.666c.26-.26.682-.26.942 0",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Ca = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M12.707 4.293a1 1 0 0 1 0 1.414L7.414 11H19a1 1 0 1 1 0 2H7.414l5.293 5.293a1 1 0 0 1-1.414 1.414l-7-7a1 1 0 0 1 0-1.414l7-7a1 1 0 0 1 1.414 0",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Aa = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "20",
            height: "20",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 20 20",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M9.078 3.578a.834.834 0 0 1 1.178 1.177l-4.41 4.411H15.5l.085.004a.834.834 0 0 1 0 1.659l-.085.004H5.845l4.411 4.41.057.064A.833.833 0 0 1 9.14 16.48l-.063-.058-5.833-5.833a.834.834 0 0 1 0-1.178z"
            })
          })
        }))),
        Ha = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M16.943 5.724c.52.52.52 1.365 0 1.886l-7.057 7.057h15.447a1.333 1.333 0 0 1 0 2.667H9.886l7.057 7.057a1.333 1.333 0 0 1-1.886 1.885l-9.333-9.333a1.333 1.333 0 0 1 0-1.886l9.333-9.333c.52-.52 1.365-.52 1.886 0",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Va = (0, t.forwardRef)((({
          size: e = "SM",
          ...l
        }, a) => {
          const t = (0, o.v6)(l, {
            className: g({
              size: e
            })
          });
          return (0, r.jsxs)(r.Fragment, {
            children: ["SM" === e && (0, r.jsx)(za, {
              ...t,
              ref: a
            }), "LG" === e && (0, r.jsx)(Ca, {
              ...t,
              ref: a
            }), "MD" === e && (0, r.jsx)(Aa, {
              ...t,
              ref: a
            }), "XL" === e && (0, r.jsx)(Ha, {
              ...t,
              ref: a
            })]
          })
        }));
      Va.displayName = "ArrowLeft", Va.categories = ["arrows", "navigation"], Va.tags = ["previous", "back", "direction", "west", "<-", "Left", "Navigation", "Back"], Va.SM = za, Va.LG = Ca, Va.MD = Aa, Va.XL = Ha;
      const Ia = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M4.195 2.195c.26-.26.683-.26.943 0l2.667 2.667a.667.667 0 1 1-.943.943L5.333 4.276v9.057a.667.667 0 1 1-1.333 0V4.276L2.471 5.805a.667.667 0 1 1-.942-.943zM11.333 2c.369 0 .667.298.667.667v9.057l1.529-1.529a.667.667 0 1 1 .942.943l-2.666 2.667a.667.667 0 0 1-.943 0l-2.667-2.667a.667.667 0 1 1 .943-.943l1.529 1.529V2.667c0-.369.298-.667.666-.667",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Ba = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M6.293 3.293a1 1 0 0 1 1.414 0l4 4a1 1 0 0 1-1.414 1.414L8 6.414V20a1 1 0 1 1-2 0V6.414L3.707 8.707a1 1 0 0 1-1.414-1.414zM17 3a1 1 0 0 1 1 1v13.586l2.293-2.293a1 1 0 0 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 1.414-1.414L16 17.586V4a1 1 0 0 1 1-1",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Sa = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "20",
            height: "20",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 20 20",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M4.667 3.334a.833.833 0 0 1 1.667 0v11.32l1.91-1.91.063-.057a.833.833 0 0 1 1.116 1.235L6.09 17.256a.834.834 0 0 1-1.18 0l-3.332-3.334a.832.832 0 0 1 1.115-1.235l.063.058 1.91 1.91zM13 16.666V5.346l-1.91 1.91a.834.834 0 0 1-1.18-1.178l3.334-3.333a.835.835 0 0 1 1.178 0l3.334 3.333a.834.834 0 0 1-1.178 1.178l-1.911-1.91v11.32a.834.834 0 1 1-1.667 0"
            })
          })
        }))),
        ya = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M8.39 4.39c.521-.52 1.365-.52 1.886 0l5.333 5.334a1.333 1.333 0 0 1-1.885 1.886l-3.057-3.058v18.115a1.333 1.333 0 0 1-2.667 0V8.552L4.943 11.61a1.333 1.333 0 1 1-1.886-1.886zM22.667 4C23.403 4 24 4.597 24 5.333v18.115l3.057-3.058a1.333 1.333 0 1 1 1.886 1.886l-5.334 5.334c-.52.52-1.365.52-1.885 0l-5.334-5.334a1.333 1.333 0 1 1 1.886-1.886l3.057 3.058V5.333c0-.736.597-1.333 1.334-1.333",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Da = (0, t.forwardRef)((({
          size: e = "SM",
          ...l
        }, a) => {
          const t = (0, o.v6)(l, {
            className: g({
              size: e
            })
          });
          return (0, r.jsxs)(r.Fragment, {
            children: ["SM" === e && (0, r.jsx)(Ia, {
              ...t,
              ref: a
            }), "LG" === e && (0, r.jsx)(Ba, {
              ...t,
              ref: a
            }), "MD" === e && (0, r.jsx)(Sa, {
              ...t,
              ref: a
            }), "XL" === e && (0, r.jsx)(ya, {
              ...t,
              ref: a
            })]
          })
        }));
      Da.displayName = "ArrowUpDown", Da.categories = ["arrows", "navigation"], Da.tags = ["bidirectional", "two-way", "2-way", "swap", "switch", "network", "mobile data", "internet", "sort", "reorder", "move", "Sortable", "Control", "Filter", "Sort"], Da.SM = Ia, Da.LG = Ba, Da.MD = Sa, Da.XL = ya;
      const Na = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M10.195 1.529c.26-.26.683-.26.943 0l2.667 2.666a.666.666 0 0 1 0 .943l-2.667 2.667a.667.667 0 1 1-.943-.943l1.529-1.529H2.667a.667.667 0 0 1 0-1.333h9.057l-1.529-1.528a.667.667 0 0 1 0-.943m-4.39 6.666c.26.26.26.683 0 .943l-1.529 1.529h9.057a.667.667 0 0 1 0 1.333H4.276l1.529 1.529a.667.667 0 1 1-.943.943l-2.667-2.667a.667.667 0 0 1 0-.943l2.667-2.667c.26-.26.682-.26.943 0",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Ga = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M15.293 2.293a1 1 0 0 1 1.414 0l4 4a1 1 0 0 1 0 1.414l-4 4a1 1 0 0 1-1.414-1.414L17.586 8H4a1 1 0 0 1 0-2h13.586l-2.293-2.293a1 1 0 0 1 0-1.414m-6.586 10a1 1 0 0 1 0 1.414L6.414 16H20a1 1 0 1 1 0 2H6.414l2.293 2.293a1 1 0 1 1-1.414 1.414l-4-4a1 1 0 0 1 0-1.414l4-4a1 1 0 0 1 1.414 0",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Xa = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "20",
            height: "20",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 20 20",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M12.411 10.244a.834.834 0 0 1 1.115-.057l.063.057 3.334 3.333a.834.834 0 0 1 0 1.179l-3.334 3.333a.833.833 0 1 1-1.178-1.178L14.321 15H3a.833.833 0 0 1 0-1.667h11.321l-1.91-1.91-.057-.064a.833.833 0 0 1 .057-1.115M5.744 1.911A.834.834 0 0 1 6.923 3.09l-1.911 1.91h11.321l.086.005a.834.834 0 0 1 0 1.658l-.086.005H5.012l1.91 1.91.057.064a.833.833 0 0 1-1.171 1.172l-.064-.057-3.333-3.333a.834.834 0 0 1 0-1.179z"
            })
          })
        }))),
        qa = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M20.39 3.057c.521-.52 1.365-.52 1.886 0L27.61 8.39a1.334 1.334 0 0 1 0 1.886l-5.334 5.333a1.333 1.333 0 1 1-1.886-1.885l3.058-3.058H5.333a1.333 1.333 0 1 1 0-2.666h18.115L20.39 4.943a1.333 1.333 0 0 1 0-1.886M11.61 16.39c.52.521.52 1.365 0 1.886l-3.058 3.057h18.115a1.333 1.333 0 0 1 0 2.667H8.552l3.058 3.057a1.333 1.333 0 1 1-1.886 1.886L4.39 23.609a1.333 1.333 0 0 1 0-1.885l5.333-5.334c.52-.52 1.365-.52 1.886 0",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        ka = (0, t.forwardRef)((({
          size: e = "SM",
          ...l
        }, a) => {
          const t = (0, o.v6)(l, {
            className: g({
              size: e
            })
          });
          return (0, r.jsxs)(r.Fragment, {
            children: ["SM" === e && (0, r.jsx)(Na, {
              ...t,
              ref: a
            }), "LG" === e && (0, r.jsx)(Ga, {
              ...t,
              ref: a
            }), "MD" === e && (0, r.jsx)(Xa, {
              ...t,
              ref: a
            }), "XL" === e && (0, r.jsx)(qa, {
              ...t,
              ref: a
            })]
          })
        }));
      ka.displayName = "ArrowRightLeft", ka.categories = ["arrows", "navigation"], ka.tags = ["bidirectional", "two-way", "2-way", "swap", "switch", "transaction", "reorder", "move", "<-", "->"], ka.SM = Na, ka.LG = Ga, ka.MD = Xa, ka.XL = qa;
      const Fa = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M7.529 5.529c.26-.26.682-.26.942 0l4 4a.667.667 0 1 1-.942.943L8 6.943l-3.529 3.529a.667.667 0 0 1-.942-.943z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Pa = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M11.293 8.293a1 1 0 0 1 1.414 0l6 6a1 1 0 0 1-1.414 1.414L12 10.414l-5.293 5.293a1 1 0 0 1-1.414-1.414z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Oa = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "20",
            height: "20",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 20 20",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M9.14 6.853a.833.833 0 0 1 1.116.058l5 5 .057.062a.833.833 0 0 1-1.173 1.173l-.062-.057-4.411-4.411-4.411 4.41a.832.832 0 1 1-1.178-1.177l5-5z"
            })
          })
        }))),
        Ta = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M15.057 11.057c.52-.52 1.365-.52 1.886 0l8 8a1.333 1.333 0 1 1-1.886 1.886L16 13.885l-7.057 7.058a1.333 1.333 0 0 1-1.886-1.886z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Ea = (0, t.forwardRef)((({
          size: e = "SM",
          ...l
        }, a) => {
          const t = (0, o.v6)(l, {
            className: g({
              size: e
            })
          });
          return (0, r.jsxs)(r.Fragment, {
            children: ["SM" === e && (0, r.jsx)(Fa, {
              ...t,
              ref: a
            }), "LG" === e && (0, r.jsx)(Pa, {
              ...t,
              ref: a
            }), "MD" === e && (0, r.jsx)(Oa, {
              ...t,
              ref: a
            }), "XL" === e && (0, r.jsx)(Ta, {
              ...t,
              ref: a
            })]
          })
        }));
      Ea.displayName = "ChevronUp", Ea.categories = ["arrows", "navigation", "math", "gaming"], Ea.tags = ["caret", "keyboard", "mac", "control", "ctrl", "superscript", "exponential", "power", "ahead", "fast", "^", "dropdown", "up", "direction", "top"], Ea.SM = Fa, Ea.LG = Pa, Ea.MD = Oa, Ea.XL = Ta;
      const Ua = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M8 2.667c.368 0 .667.298.667.666v7.724l3.528-3.529a.667.667 0 1 1 .943.943l-4.667 4.667a.667.667 0 0 1-.942 0L2.862 8.47a.667.667 0 1 1 .943-.943l3.528 3.529V3.333c0-.368.299-.667.667-.667",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        _a = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M12 4a1 1 0 0 1 1 1v11.586l5.293-5.293a1 1 0 0 1 1.414 1.414l-7 7a1 1 0 0 1-1.414 0l-7-7a1 1 0 1 1 1.414-1.414L11 16.586V5a1 1 0 0 1 1-1",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Wa = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "20",
            height: "20",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 20 20",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M8.833 4.167a.833.833 0 0 1 1.667 0v9.654l4.41-4.41.064-.058a.834.834 0 0 1 1.115 1.236l-5.833 5.833a.834.834 0 0 1-1.179 0L3.244 10.59l-.057-.063A.833.833 0 0 1 4.36 9.353l.062.058 4.411 4.41z"
            })
          })
        }))),
        Za = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M16 5.334c.736 0 1.333.596 1.333 1.333v15.447l7.057-7.057a1.333 1.333 0 0 1 1.886 1.886l-9.333 9.333c-.521.521-1.365.521-1.886 0l-9.333-9.333a1.333 1.333 0 1 1 1.885-1.886l7.058 7.057V6.668c0-.737.597-1.333 1.333-1.333",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Ya = (0, t.forwardRef)((({
          size: e = "SM",
          ...l
        }, a) => {
          const t = (0, o.v6)(l, {
            className: g({
              size: e
            })
          });
          return (0, r.jsxs)(r.Fragment, {
            children: ["SM" === e && (0, r.jsx)(Ua, {
              ...t,
              ref: a
            }), "LG" === e && (0, r.jsx)(_a, {
              ...t,
              ref: a
            }), "MD" === e && (0, r.jsx)(Wa, {
              ...t,
              ref: a
            }), "XL" === e && (0, r.jsx)(Za, {
              ...t,
              ref: a
            })]
          })
        }));
      Ya.displayName = "ArrowDown", Ya.categories = ["arrows", "navigation"], Ya.tags = ["backwards", "reverse", "direction", "south", "Down", "Navigation", "Decrease"], Ya.SM = Ua, Ya.LG = _a, Ya.MD = Wa, Ya.XL = Za;
      const Ka = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M7.529 2.862c.26-.26.682-.26.942 0l4.667 4.666c.26.26.26.683 0 .943l-4.667 4.667a.667.667 0 1 1-.942-.943l3.528-3.529H3.333a.667.667 0 1 1 0-1.333h7.724L7.53 3.805a.667.667 0 0 1 0-.943",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Qa = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M11.293 4.293a1 1 0 0 1 1.414 0l7 7a1 1 0 0 1 0 1.414l-7 7a1 1 0 0 1-1.414-1.414L16.586 13H5a1 1 0 1 1 0-2h11.586l-5.293-5.293a1 1 0 0 1 0-1.414",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Ja = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "20",
            height: "20",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 20 20",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M9.078 3.578a.833.833 0 0 1 1.115-.058l.063.058L16.09 9.41a.833.833 0 0 1 0 1.178l-5.833 5.833-.063.058a.834.834 0 0 1-1.115-1.236l4.41-4.41H3.833a.834.834 0 0 1 0-1.667h9.655l-4.41-4.411-.058-.063a.834.834 0 0 1 .058-1.115"
            })
          })
        }))),
        $a = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M15.057 5.724c.52-.52 1.365-.52 1.886 0l9.333 9.333c.52.521.52 1.365 0 1.886l-9.333 9.333a1.333 1.333 0 1 1-1.886-1.885l7.057-7.057H6.667a1.333 1.333 0 0 1 0-2.667h15.447L15.057 7.61a1.333 1.333 0 0 1 0-1.886",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        er = (0, t.forwardRef)((({
          size: e = "SM",
          ...l
        }, a) => {
          const t = (0, o.v6)(l, {
            className: g({
              size: e
            })
          });
          return (0, r.jsxs)(r.Fragment, {
            children: ["SM" === e && (0, r.jsx)(Ka, {
              ...t,
              ref: a
            }), "LG" === e && (0, r.jsx)(Qa, {
              ...t,
              ref: a
            }), "MD" === e && (0, r.jsx)(Ja, {
              ...t,
              ref: a
            }), "XL" === e && (0, r.jsx)($a, {
              ...t,
              ref: a
            })]
          })
        }));
      er.displayName = "ArrowRight", er.categories = ["arrows", "navigation"], er.tags = ["forward", "next", "direction", "east", "->"], er.SM = Ka, er.LG = Qa, er.MD = Ja, er.XL = $a;
      const lr = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M3.529 5.529c.26-.26.682-.26.942 0L8 9.057l3.529-3.528a.667.667 0 1 1 .942.943l-4 4a.667.667 0 0 1-.942 0l-4-4a.667.667 0 0 1 0-.943",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        ar = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M5.293 8.293a1 1 0 0 1 1.414 0L12 13.586l5.293-5.293a1 1 0 1 1 1.414 1.414l-6 6a1 1 0 0 1-1.414 0l-6-6a1 1 0 0 1 0-1.414",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        rr = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "20",
            height: "20",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 20 20",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M14.078 6.911a.832.832 0 1 1 1.178 1.178l-5 5a.833.833 0 0 1-1.178 0l-5-5A.832.832 0 1 1 5.256 6.91l4.41 4.411z"
            })
          })
        }))),
        tr = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M7.057 11.057c.52-.52 1.365-.52 1.886 0L16 18.114l7.057-7.057a1.333 1.333 0 0 1 1.886 1.886l-8 8c-.52.52-1.365.52-1.886 0l-8-8a1.333 1.333 0 0 1 0-1.886",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        sr = (0, t.forwardRef)((({
          size: e = "SM",
          ...l
        }, a) => {
          const t = (0, o.v6)(l, {
            className: g({
              size: e
            })
          });
          return (0, r.jsxs)(r.Fragment, {
            children: ["SM" === e && (0, r.jsx)(lr, {
              ...t,
              ref: a
            }), "LG" === e && (0, r.jsx)(ar, {
              ...t,
              ref: a
            }), "MD" === e && (0, r.jsx)(rr, {
              ...t,
              ref: a
            }), "XL" === e && (0, r.jsx)(tr, {
              ...t,
              ref: a
            })]
          })
        }));
      sr.displayName = "ChevronDown", sr.categories = ["arrows", "navigation", "gaming"], sr.tags = ["backwards", "reverse", "slow", "dropdown", "down", "direction", "bottom"], sr.SM = lr, sr.LG = ar, sr.MD = rr, sr.XL = tr;
      const ir = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M10.471 3.529c.26.26.26.682 0 .943L6.943 8l3.528 3.529a.667.667 0 1 1-.942.943l-4-4a.667.667 0 0 1 0-.943l4-4c.26-.26.682-.26.942 0",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        dr = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M15.707 5.293a1 1 0 0 1 0 1.414L10.414 12l5.293 5.293a1 1 0 0 1-1.414 1.414l-6-6a1 1 0 0 1 0-1.414l6-6a1 1 0 0 1 1.414 0",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        or = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "20",
            height: "20",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 20 20",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M11.578 4.411a.832.832 0 1 1 1.178 1.178l-4.412 4.41 4.412 4.412.057.063a.833.833 0 0 1-1.173 1.172l-.062-.057-5-5a.83.83 0 0 1 0-1.178z"
            })
          })
        }))),
        nr = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M20.943 7.057c.52.52.52 1.365 0 1.886L13.886 16l7.057 7.057a1.333 1.333 0 1 1-1.886 1.886l-8-8a1.333 1.333 0 0 1 0-1.886l8-8c.52-.52 1.365-.52 1.886 0",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        hr = (0, t.forwardRef)((({
          size: e = "SM",
          ...l
        }, a) => {
          const t = (0, o.v6)(l, {
            className: g({
              size: e
            })
          });
          return (0, r.jsxs)(r.Fragment, {
            children: ["SM" === e && (0, r.jsx)(ir, {
              ...t,
              ref: a
            }), "LG" === e && (0, r.jsx)(dr, {
              ...t,
              ref: a
            }), "MD" === e && (0, r.jsx)(or, {
              ...t,
              ref: a
            }), "XL" === e && (0, r.jsx)(nr, {
              ...t,
              ref: a
            })]
          })
        }));
      hr.displayName = "ChevronLeft", hr.categories = ["arrows", "navigation"], hr.tags = ["back", "previous", "less than", "fewer", "menu", "left", "direction", "side"], hr.SM = ir, hr.LG = dr, hr.MD = or, hr.XL = nr;
      const cr = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M5.529 3.529c.26-.26.682-.26.942 0l4 4c.26.26.26.682 0 .943l-4 4a.667.667 0 0 1-.942-.943L9.057 8 5.53 4.472a.667.667 0 0 1 0-.943",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        fr = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M8.293 5.293a1 1 0 0 1 1.414 0l6 6a1 1 0 0 1 0 1.414l-6 6a1 1 0 0 1-1.414-1.414L13.586 12 8.293 6.707a1 1 0 0 1 0-1.414",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        wr = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "20",
            height: "20",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 20 20",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M6.578 4.411a.83.83 0 0 1 1.178 0l5 5a.83.83 0 0 1 0 1.178l-5 5a.832.832 0 1 1-1.178-1.178L10.989 10 6.578 5.589a.83.83 0 0 1 0-1.178"
            })
          })
        }))),
        vr = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M11.057 7.057c.52-.52 1.365-.52 1.886 0l8 8c.52.52.52 1.365 0 1.886l-8 8a1.333 1.333 0 1 1-1.886-1.886L18.114 16l-7.057-7.057a1.333 1.333 0 0 1 0-1.886",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        xr = (0, t.forwardRef)((({
          size: e = "SM",
          ...l
        }, a) => {
          const t = (0, o.v6)(l, {
            className: g({
              size: e
            })
          });
          return (0, r.jsxs)(r.Fragment, {
            children: ["SM" === e && (0, r.jsx)(cr, {
              ...t,
              ref: a
            }), "LG" === e && (0, r.jsx)(fr, {
              ...t,
              ref: a
            }), "MD" === e && (0, r.jsx)(wr, {
              ...t,
              ref: a
            }), "XL" === e && (0, r.jsx)(vr, {
              ...t,
              ref: a
            })]
          })
        }));
      xr.displayName = "ChevronRight", xr.categories = ["arrows", "navigation", "math", "development"], xr.tags = ["forward", "next", "more than", "greater", "menu", "code", "coding", "command line", "terminal", "prompt", "shell", "right", "direction", "side"], xr.SM = cr, xr.LG = fr, xr.MD = wr, xr.XL = vr;
      const gr = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M4.195 2.195c.26-.26.683-.26.943 0L8 5.057l2.862-2.862a.667.667 0 1 1 .943.943L8.47 6.471a.667.667 0 0 1-.942 0L4.195 3.138a.667.667 0 0 1 0-.943M8 10.943l-2.862 2.862a.667.667 0 1 1-.943-.943L7.53 9.529c.26-.26.682-.26.942 0l3.334 3.333a.667.667 0 1 1-.943.943z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        jr = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M6.293 3.293a1 1 0 0 1 1.414 0L12 7.586l4.293-4.293a1 1 0 1 1 1.414 1.414l-5 5a1 1 0 0 1-1.414 0l-5-5a1 1 0 0 1 0-1.414M12 16.414l-4.293 4.293a1 1 0 0 1-1.414-1.414l5-5a1 1 0 0 1 1.414 0l5 5a1 1 0 0 1-1.414 1.414z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        mr = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "20",
            height: "20",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 20 20",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M9.667 11.666c.22 0 .433.088.589.245l4.167 4.167-.59.588-.589.59-3.578-3.578-3.577 3.578a.833.833 0 0 1-1.178-1.178l4.166-4.167a.84.84 0 0 1 .59-.245m4.756 4.412a.834.834 0 0 1-1.179 1.178zM13.244 2.745a.834.834 0 0 1 1.179 1.177L10.256 8.09a.834.834 0 0 1-1.179 0L4.911 3.922A.832.832 0 1 1 6.09 2.745L9.666 6.32z"
            })
          })
        }))),
        pr = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M8.39 4.39c.521-.52 1.365-.52 1.886 0L16 10.115l5.724-5.723a1.333 1.333 0 0 1 1.886 1.885l-6.667 6.667c-.52.52-1.365.52-1.886 0L8.391 6.276a1.333 1.333 0 0 1 0-1.885M16 21.887l-5.724 5.724a1.333 1.333 0 1 1-1.885-1.886l6.666-6.667c.52-.52 1.365-.52 1.886 0l6.666 6.667a1.333 1.333 0 1 1-1.885 1.886z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        ur = (0, t.forwardRef)((({
          size: e = "SM",
          ...l
        }, a) => {
          const t = (0, o.v6)(l, {
            className: g({
              size: e
            })
          });
          return (0, r.jsxs)(r.Fragment, {
            children: ["SM" === e && (0, r.jsx)(gr, {
              ...t,
              ref: a
            }), "LG" === e && (0, r.jsx)(jr, {
              ...t,
              ref: a
            }), "MD" === e && (0, r.jsx)(mr, {
              ...t,
              ref: a
            }), "XL" === e && (0, r.jsx)(pr, {
              ...t,
              ref: a
            })]
          })
        }));
      ur.displayName = "ChevronsDownUp", ur.categories = ["arrows"], ur.tags = ["collapse", "fold", "vertical"], ur.SM = gr, ur.LG = jr, ur.MD = mr, ur.XL = pr;
      const Mr = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M7.463 2.945a4 4 0 0 0-4.32 6.521.667.667 0 0 1-.953.933 5.333 5.333 0 1 1 8.755-5.732h.721a3.667 3.667 0 0 1 2.038 6.715.667.667 0 0 1-.741-1.108A2.333 2.333 0 0 0 11.667 6h-1.194a.67.67 0 0 1-.639-.476 4 4 0 0 0-2.37-2.579m.066 5.25c.26-.26.682-.26.942 0l2.667 2.667a.667.667 0 1 1-.943.943l-1.528-1.529V14a.667.667 0 0 1-1.334 0v-3.724l-1.528 1.529a.667.667 0 0 1-.943-.943z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Rr = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M11.195 4.417a6 6 0 0 0-6.48 9.782 1 1 0 0 1-1.43 1.4 8 8 0 1 1 13.133-8.6H17.5a5.5 5.5 0 0 1 3.055 10.074 1 1 0 1 1-1.11-1.663A3.5 3.5 0 0 0 17.5 9h-1.79a1 1 0 0 1-.958-.714 6 6 0 0 0-3.557-3.869M12 12a1 1 0 0 1 .707.293l4 4a1 1 0 0 1-1.414 1.414L13 15.414V21a1 1 0 1 1-2 0v-5.586l-2.293 2.293a1 1 0 0 1-1.414-1.414l4-4A1 1 0 0 1 12 12",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        br = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "20",
            height: "20",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 20 20",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M8.834 17.5v-4.655l-1.912 1.911-.588-.59-.59-.588 3.334-3.333.063-.058a.834.834 0 0 1 1.115.058l3.333 3.333-.59.588-.588.59-1.911-1.912V17.5a.833.833 0 0 1-1.666 0m-1.912-2.744a.834.834 0 0 1-1.178-1.178zm6.667-1.178a.834.834 0 0 1-1.178 1.178zM6.642 1.69a6.67 6.67 0 0 1 6.703 4.143h.905a4.586 4.586 0 0 1 4.316 6.128 4.6 4.6 0 0 1-1.77 2.267l-.073.044a.834.834 0 0 1-.852-1.43l.188-.138A2.916 2.916 0 0 0 14.25 7.5h-1.492a.83.83 0 0 1-.798-.594 5 5 0 0 0-7.33-2.878 5.002 5.002 0 0 0-1.227 7.596l.192.21.057.063a.833.833 0 0 1-1.185 1.16l-.062-.059-.258-.277A6.667 6.667 0 0 1 6.642 1.69"
            })
          })
        }))),
        Lr = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M14.927 5.89a8 8 0 0 0-8.64 13.043 1.333 1.333 0 0 1-1.907 1.865A10.667 10.667 0 1 1 21.89 9.334h1.443a7.334 7.334 0 0 1 4.074 13.43 1.333 1.333 0 1 1-1.481-2.216A4.667 4.667 0 0 0 23.333 12h-2.386c-.59 0-1.11-.387-1.278-.952a8 8 0 0 0-4.742-5.158m.13 10.5c.52-.52 1.365-.52 1.886 0l5.333 5.334a1.333 1.333 0 0 1-1.886 1.886l-3.057-3.058V28a1.333 1.333 0 1 1-2.666 0v-7.448l-3.058 3.058a1.333 1.333 0 0 1-1.885-1.886z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        zr = (0, t.forwardRef)((({
          size: e = "SM",
          ...l
        }, a) => {
          const t = (0, o.v6)(l, {
            className: g({
              size: e
            })
          });
          return (0, r.jsxs)(r.Fragment, {
            children: ["SM" === e && (0, r.jsx)(Mr, {
              ...t,
              ref: a
            }), "LG" === e && (0, r.jsx)(Rr, {
              ...t,
              ref: a
            }), "MD" === e && (0, r.jsx)(br, {
              ...t,
              ref: a
            }), "XL" === e && (0, r.jsx)(Lr, {
              ...t,
              ref: a
            })]
          })
        }));
      zr.displayName = "CloudUpload", zr.categories = ["arrows", "files"], zr.tags = ["file"], zr.SM = Mr, zr.LG = Rr, zr.MD = br, zr.XL = Lr;
      const Cr = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M6.471 4.195c.26.26.26.683 0 .943L3.61 8l2.862 2.862a.667.667 0 1 1-.942.943L2.195 8.47a.667.667 0 0 1 0-.942L5.53 4.195c.26-.26.682-.26.942 0m3.058 0c.26-.26.682-.26.942 0l3.334 3.334c.26.26.26.682 0 .942l-3.334 3.334a.667.667 0 1 1-.942-.943L12.39 8 9.53 5.138a.667.667 0 0 1 0-.943",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Ar = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M9.707 6.293a1 1 0 0 1 0 1.414L5.414 12l4.293 4.293a1 1 0 0 1-1.414 1.414l-5-5a1 1 0 0 1 0-1.414l5-5a1 1 0 0 1 1.414 0m4.586 0a1 1 0 0 1 1.414 0l5 5a1 1 0 0 1 0 1.414l-5 5a1 1 0 0 1-1.414-1.414L18.586 12l-4.293-4.293a1 1 0 0 1 0-1.414",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Hr = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "20",
            height: "20",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 20 20",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M6.577 5.245a.834.834 0 0 1 1.179 1.177L4.178 10l3.578 3.579.057.063a.834.834 0 0 1-1.172 1.172l-.064-.057-4.166-4.167a.834.834 0 0 1 0-1.178zm6.179 9.511a.834.834 0 0 1-1.179-1.178zm-1.179-9.511a.834.834 0 0 1 1.179 0l4.167 4.166a.835.835 0 0 1 0 1.178l-4.167 4.167-.59-.59-.589-.588 3.577-3.579-3.577-3.577a.833.833 0 0 1 0-1.177"
            })
          })
        }))),
        Vr = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M12.943 8.39c.52.521.52 1.365 0 1.886L7.219 16l5.724 5.724a1.333 1.333 0 1 1-1.886 1.886l-6.666-6.667a1.333 1.333 0 0 1 0-1.886l6.666-6.666c.52-.521 1.365-.521 1.886 0m6.114 0c.52-.52 1.365-.52 1.886 0l6.666 6.667c.521.52.521 1.365 0 1.886l-6.666 6.666a1.333 1.333 0 1 1-1.886-1.885L24.781 16l-5.724-5.724a1.333 1.333 0 0 1 0-1.885",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Ir = (0, t.forwardRef)((({
          size: e = "SM",
          ...l
        }, a) => {
          const t = (0, o.v6)(l, {
            className: g({
              size: e
            })
          });
          return (0, r.jsxs)(r.Fragment, {
            children: ["SM" === e && (0, r.jsx)(Cr, {
              ...t,
              ref: a
            }), "LG" === e && (0, r.jsx)(Ar, {
              ...t,
              ref: a
            }), "MD" === e && (0, r.jsx)(Hr, {
              ...t,
              ref: a
            }), "XL" === e && (0, r.jsx)(Vr, {
              ...t,
              ref: a
            })]
          })
        }));
      Ir.displayName = "ChevronsLeftRight", Ir.categories = ["arrows"], Ir.tags = ["expand", "horizontal", "unfold"], Ir.SM = Cr, Ir.LG = Ar, Ir.MD = Hr, Ir.XL = Vr;
      const Br = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M4.667 3.334c.368 0 .666.298.666.666v8A.667.667 0 1 1 4 12V4c0-.368.298-.667.667-.667m6.195.195a.667.667 0 1 1 .943.943L8.276 8l3.529 3.529a.667.667 0 1 1-.943.943l-4-4a.667.667 0 0 1 0-.943z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Sr = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M7 5a1 1 0 0 1 1 1v12a1 1 0 1 1-2 0V6a1 1 0 0 1 1-1m9.293.293a1 1 0 1 1 1.414 1.414L12.414 12l5.293 5.293a1 1 0 0 1-1.414 1.414l-6-6a1 1 0 0 1 0-1.414z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        yr = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "20",
            height: "20",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 20 20",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M4.667 15V5a.833.833 0 1 1 1.666 0v10a.833.833 0 1 1-1.666 0m8.577-10.589a.834.834 0 0 1 1.179 1.178L10.012 10l4.41 4.411a.833.833 0 0 1-1.178 1.178l-5-5a.833.833 0 0 1 0-1.178z"
            })
          })
        }))),
        Dr = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M9.333 6.667c.737 0 1.334.596 1.334 1.333v16A1.333 1.333 0 0 1 8 24V8c0-.737.597-1.333 1.333-1.333m12.39.39a1.333 1.333 0 1 1 1.887 1.886L16.552 16l7.058 7.057a1.333 1.333 0 1 1-1.886 1.886l-8-8a1.333 1.333 0 0 1 0-1.886z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Nr = (0, t.forwardRef)((({
          size: e = "SM",
          ...l
        }, a) => {
          const t = (0, o.v6)(l, {
            className: g({
              size: e
            })
          });
          return (0, r.jsxs)(r.Fragment, {
            children: ["SM" === e && (0, r.jsx)(Br, {
              ...t,
              ref: a
            }), "LG" === e && (0, r.jsx)(Sr, {
              ...t,
              ref: a
            }), "MD" === e && (0, r.jsx)(yr, {
              ...t,
              ref: a
            }), "XL" === e && (0, r.jsx)(Dr, {
              ...t,
              ref: a
            })]
          })
        }));
      Nr.displayName = "ChevronFirst", Nr.categories = ["arrows", "multimedia"], Nr.tags = ["previous", "music"], Nr.SM = Br, Nr.LG = Sr, Nr.MD = yr, Nr.XL = Dr;
      const Gr = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M4.195 3.529c.26-.26.683-.26.943 0l4 4c.26.26.26.682 0 .943l-4 4a.667.667 0 0 1-.943-.943L7.724 8 4.195 4.472a.667.667 0 0 1 0-.943m7.138 9.138a.667.667 0 0 1-.666-.667V4A.667.667 0 1 1 12 4v8a.667.667 0 0 1-.667.667",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Xr = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M6.293 5.293a1 1 0 0 1 1.414 0l6 6a1 1 0 0 1 0 1.414l-6 6a1 1 0 0 1-1.414-1.414L11.586 12 6.293 6.707a1 1 0 0 1 0-1.414M17 19a1 1 0 0 1-1-1V6a1 1 0 1 1 2 0v12a1 1 0 0 1-1 1",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        qr = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "20",
            height: "20",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 20 20",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M4.911 4.411a.83.83 0 0 1 1.178 0l5 5a.83.83 0 0 1 0 1.178l-5 5A.832.832 0 1 1 4.91 14.41L9.322 10l-4.41-4.411a.83.83 0 0 1 0-1.178M13.001 15V5a.833.833 0 0 1 1.666 0v10A.834.834 0 0 1 13 15"
            })
          })
        }))),
        kr = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M8.39 7.057c.521-.52 1.365-.52 1.886 0l8 8c.52.52.52 1.365 0 1.886l-8 8a1.333 1.333 0 1 1-1.885-1.886L15.448 16 8.39 8.943a1.333 1.333 0 0 1 0-1.886m14.277 18.276A1.333 1.333 0 0 1 21.333 24V8A1.333 1.333 0 0 1 24 8v16c0 .736-.597 1.333-1.333 1.333",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Fr = (0, t.forwardRef)((({
          size: e = "SM",
          ...l
        }, a) => {
          const t = (0, o.v6)(l, {
            className: g({
              size: e
            })
          });
          return (0, r.jsxs)(r.Fragment, {
            children: ["SM" === e && (0, r.jsx)(Gr, {
              ...t,
              ref: a
            }), "LG" === e && (0, r.jsx)(Xr, {
              ...t,
              ref: a
            }), "MD" === e && (0, r.jsx)(qr, {
              ...t,
              ref: a
            }), "XL" === e && (0, r.jsx)(kr, {
              ...t,
              ref: a
            })]
          })
        }));
      Fr.displayName = "ChevronLast", Fr.categories = ["arrows", "multimedia"], Fr.tags = ["skip", "next", "music"], Fr.SM = Gr, Fr.LG = Xr, Fr.MD = qr, Fr.XL = kr;
      const Pr = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M7.529 2.195c.26-.26.682-.26.942 0l3.334 3.334a.667.667 0 1 1-.943.942L8 3.61 5.138 6.471a.667.667 0 0 1-.943-.942zM4.195 9.53c.26-.26.683-.26.943 0L8 12.39l2.862-2.861a.667.667 0 1 1 .943.942L8.47 13.805a.667.667 0 0 1-.942 0L4.195 10.47a.667.667 0 0 1 0-.942",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Or = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M11.293 3.293a1 1 0 0 1 1.414 0l5 5a1 1 0 0 1-1.414 1.414L12 5.414 7.707 9.707a1 1 0 0 1-1.414-1.414zm-5 11a1 1 0 0 1 1.414 0L12 18.586l4.293-4.293a1 1 0 0 1 1.414 1.414l-5 5a1 1 0 0 1-1.414 0l-5-5a1 1 0 0 1 0-1.414",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Tr = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "20",
            height: "20",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 20 20",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M4.911 11.91a.833.833 0 0 1 1.178 0l3.577 3.578 3.578-3.577.589.59.59.588-4.167 4.167a.834.834 0 0 1-1.179 0L4.911 13.09a.834.834 0 0 1 0-1.178m8.333 0a.834.834 0 0 1 1.179 1.18zM9.077 2.746a.834.834 0 0 1 1.179 0l4.167 4.166.056.063a.833.833 0 0 1-1.171 1.173l-.064-.058-3.578-3.578L6.089 8.09A.833.833 0 1 1 4.91 6.911z"
            })
          })
        }))),
        Er = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M15.057 4.39c.52-.52 1.365-.52 1.886 0l6.666 6.667a1.333 1.333 0 1 1-1.885 1.886L16 7.219l-5.724 5.724a1.333 1.333 0 1 1-1.885-1.886zM8.391 19.058c.52-.52 1.364-.52 1.885 0L16 24.781l5.724-5.724a1.333 1.333 0 1 1 1.886 1.886l-6.667 6.666c-.52.521-1.365.521-1.886 0l-6.666-6.666a1.333 1.333 0 0 1 0-1.886",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Ur = (0, t.forwardRef)((({
          size: e = "SM",
          ...l
        }, a) => {
          const t = (0, o.v6)(l, {
            className: g({
              size: e
            })
          });
          return (0, r.jsxs)(r.Fragment, {
            children: ["SM" === e && (0, r.jsx)(Pr, {
              ...t,
              ref: a
            }), "LG" === e && (0, r.jsx)(Or, {
              ...t,
              ref: a
            }), "MD" === e && (0, r.jsx)(Tr, {
              ...t,
              ref: a
            }), "XL" === e && (0, r.jsx)(Er, {
              ...t,
              ref: a
            })]
          })
        }));
      Ur.displayName = "ChevronsUpDown", Ur.categories = ["arrows"], Ur.tags = ["expand", "unfold", "vertical"], Ur.SM = Pr, Ur.LG = Or, Ur.MD = Tr, Ur.XL = Er;
      const _r = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M7.392 2.917a4 4 0 0 0-4.024 6.76.667.667 0 1 1-.878 1.004 5.333 5.333 0 1 1 8.455-6.014h.722a3.667 3.667 0 0 1 1.985 6.75.667.667 0 1 1-.722-1.121A2.334 2.334 0 0 0 11.667 6h-1.194a.67.67 0 0 1-.639-.476 4 4 0 0 0-2.442-2.607M8 8c.368 0 .667.299.667.667v3.724l1.528-1.529a.667.667 0 0 1 .943.943l-2.667 2.667a.667.667 0 0 1-.942 0l-2.667-2.667a.667.667 0 0 1 .943-.943l1.528 1.529V8.667C7.333 8.299 7.632 8 8 8",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Wr = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M11.088 4.375A6 6 0 0 0 5.05 14.516a1 1 0 0 1-1.316 1.506A8 8 0 1 1 16.418 7H17.5a5.5 5.5 0 0 1 2.977 10.125 1 1 0 1 1-1.082-1.682A3.5 3.5 0 0 0 17.5 9h-1.79a1 1 0 0 1-.958-.714 6 6 0 0 0-3.664-3.911M12 12a1 1 0 0 1 1 1v5.586l2.293-2.293a1 1 0 1 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 1 1 1.414-1.414L11 18.586V13a1 1 0 0 1 1-1",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Zr = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "20",
            height: "20",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 20 20",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M8.833 10.833a.834.834 0 0 1 1.667 0v4.655l1.911-1.91.063-.058a.834.834 0 0 1 1.115 1.236l-3.333 3.333a.834.834 0 0 1-1.179 0l-3.333-3.333-.058-.063A.834.834 0 0 1 6.86 13.52l.064.058 1.91 1.91zM6.45 1.706a6.67 6.67 0 0 1 5.583 2.07 6.7 6.7 0 0 1 1.313 2.057h.904l.37.015a4.584 4.584 0 0 1 2.111 8.423.834.834 0 0 1-.902-1.401A2.917 2.917 0 0 0 14.25 7.5h-1.491a.83.83 0 0 1-.8-.595 5 5 0 1 0-8.083 5.192.833.833 0 1 1-1.097 1.254A6.665 6.665 0 0 1 6.45 1.706"
            })
          })
        }))),
        Yr = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M14.783 5.833a8 8 0 0 0-8.048 13.522 1.333 1.333 0 1 1-1.756 2.007A10.666 10.666 0 1 1 21.891 9.334h1.442a7.334 7.334 0 0 1 3.97 13.5 1.333 1.333 0 1 1-1.443-2.243 4.667 4.667 0 0 0-2.526-8.59h-2.387c-.59 0-1.11-.388-1.278-.953a8 8 0 0 0-4.886-5.215M16 16c.736 0 1.333.597 1.333 1.334v7.447l3.058-3.057a1.333 1.333 0 1 1 1.885 1.886l-5.333 5.333a1.334 1.334 0 0 1-1.886 0L9.724 23.61a1.333 1.333 0 1 1 1.886-1.886l3.057 3.057v-7.447c0-.737.597-1.334 1.333-1.334",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Kr = (0, t.forwardRef)((({
          size: e = "SM",
          ...l
        }, a) => {
          const t = (0, o.v6)(l, {
            className: g({
              size: e
            })
          });
          return (0, r.jsxs)(r.Fragment, {
            children: ["SM" === e && (0, r.jsx)(_r, {
              ...t,
              ref: a
            }), "LG" === e && (0, r.jsx)(Wr, {
              ...t,
              ref: a
            }), "MD" === e && (0, r.jsx)(Zr, {
              ...t,
              ref: a
            }), "XL" === e && (0, r.jsx)(Yr, {
              ...t,
              ref: a
            })]
          })
        }));
      Kr.displayName = "CloudDownload", Kr.categories = ["arrows", "files"], Kr.tags = ["import"], Kr.SM = _r, Kr.LG = Wr, Kr.MD = Zr, Kr.XL = Yr;
      const Qr = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M10 2.667a.667.667 0 0 1 0-1.334h4c.368 0 .667.299.667.667v4a.667.667 0 0 1-1.334 0V3.61L9.805 7.137a.667.667 0 1 1-.943-.943l3.529-3.528zM7.138 8.862c.26.26.26.682 0 .943L3.61 13.333H6a.667.667 0 1 1 0 1.334H2A.667.667 0 0 1 1.333 14v-4a.667.667 0 0 1 1.334 0v2.39l3.528-3.528c.26-.26.683-.26.943 0",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Jr = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M15 4a1 1 0 1 1 0-2h6a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0V5.414l-5.293 5.293a1 1 0 0 1-1.414-1.414L18.586 4zm-5.707 9.293a1 1 0 0 1 1.414 1.414L5.414 20H9a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1v-6a1 1 0 1 1 2 0v3.586z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        $r = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "20",
            height: "20",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 20 20",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "m8 11.667.59.589-4.413 4.411h2.99l.085.004a.833.833 0 0 1-.085 1.662h-5a.833.833 0 0 1-.833-.833v-5A.833.833 0 1 1 3 12.5v2.988l4.41-4.41zm-.59-.59a.834.834 0 0 1 1.18 1.179zm4.513-2.154a.834.834 0 0 1-1.18-1.179zM18 7.5a.833.833 0 1 1-1.666 0V4.51l-4.411 4.413-.59-.59-.59-.589 4.413-4.411h-2.99a.833.833 0 1 1 0-1.666h5c.461 0 .834.373.834.833z"
            })
          })
        }))),
        et = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M20 5.333a1.333 1.333 0 1 1 0-2.666h8c.736 0 1.333.596 1.333 1.333v8a1.333 1.333 0 1 1-2.666 0V7.219l-7.058 7.057a1.333 1.333 0 1 1-1.885-1.886l7.057-7.057zm-5.724 12.39c.52.521.52 1.366 0 1.886L7.22 26.666H12a1.333 1.333 0 0 1 0 2.667H4A1.333 1.333 0 0 1 2.667 28v-8a1.333 1.333 0 0 1 2.666 0v4.78l7.057-7.056c.521-.521 1.365-.521 1.886 0",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        lt = (0, t.forwardRef)((({
          size: e = "SM",
          ...l
        }, a) => {
          const t = (0, o.v6)(l, {
            className: g({
              size: e
            })
          });
          return (0, r.jsxs)(r.Fragment, {
            children: ["SM" === e && (0, r.jsx)(Qr, {
              ...t,
              ref: a
            }), "LG" === e && (0, r.jsx)(Jr, {
              ...t,
              ref: a
            }), "MD" === e && (0, r.jsx)($r, {
              ...t,
              ref: a
            }), "XL" === e && (0, r.jsx)(et, {
              ...t,
              ref: a
            })]
          })
        }));
      lt.displayName = "Maximize2", lt.categories = ["arrows", "layout", "design"], lt.tags = ["fullscreen", "arrows", "expand"], lt.SM = Qr, lt.LG = Jr, lt.MD = $r, lt.XL = et;
      const at = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M7.529 1.529c.26-.26.682-.26.942 0l3.334 3.333a.667.667 0 0 1-.943.943L8.667 3.61V10a.667.667 0 0 1-1.334 0V3.61L5.138 5.805a.667.667 0 1 1-.943-.943zM2 9.334c.368 0 .667.298.667.666v2.667a.667.667 0 0 0 .666.667h9.334a.666.666 0 0 0 .666-.667V10a.667.667 0 1 1 1.334 0v2.667a2 2 0 0 1-2 2H3.333a2 2 0 0 1-2-2V10c0-.368.299-.666.667-.666",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        rt = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M11.293 2.293a1 1 0 0 1 1.414 0l5 5a1 1 0 0 1-1.414 1.414L13 5.414V15a1 1 0 1 1-2 0V5.414L7.707 8.707a1 1 0 0 1-1.414-1.414zM3 14a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-4a1 1 0 1 1 2 0v4a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-4a1 1 0 0 1 1-1",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        tt = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "20",
            height: "20",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 20 20",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M1.334 15.833V12.5A.833.833 0 1 1 3 12.5v3.333a.835.835 0 0 0 .834.834H15.5a.835.835 0 0 0 .834-.834V12.5a.833.833 0 1 1 1.666 0v3.333a2.5 2.5 0 0 1-2.5 2.5H3.834a2.5 2.5 0 0 1-2.5-2.5m7.5-3.333V4.51L6.089 7.257l-.063.057a.834.834 0 0 1-1.115-1.236l4.167-4.166.06-.056a.833.833 0 0 1 1.117.056l4.167 4.166a.834.834 0 0 1-1.178 1.179L10.5 4.51V12.5a.833.833 0 1 1-1.666 0"
            })
          })
        }))),
        st = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M15.057 3.057c.52-.52 1.365-.52 1.886 0l6.666 6.667a1.333 1.333 0 1 1-1.885 1.885l-4.39-4.39v12.78a1.333 1.333 0 1 1-2.667 0V7.22l-4.39 4.39A1.333 1.333 0 0 1 8.39 9.724zM4 18.667c.736 0 1.333.596 1.333 1.333v5.333a1.333 1.333 0 0 0 1.334 1.334h18.666a1.333 1.333 0 0 0 1.334-1.334V20a1.333 1.333 0 0 1 2.666 0v5.333a4 4 0 0 1-4 4H6.667a4 4 0 0 1-4-4V20c0-.736.597-1.334 1.333-1.334",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        it = (0, t.forwardRef)((({
          size: e = "SM",
          ...l
        }, a) => {
          const t = (0, o.v6)(l, {
            className: g({
              size: e
            })
          });
          return (0, r.jsxs)(r.Fragment, {
            children: ["SM" === e && (0, r.jsx)(at, {
              ...t,
              ref: a
            }), "LG" === e && (0, r.jsx)(rt, {
              ...t,
              ref: a
            }), "MD" === e && (0, r.jsx)(tt, {
              ...t,
              ref: a
            }), "XL" === e && (0, r.jsx)(st, {
              ...t,
              ref: a
            })]
          })
        }));
      it.displayName = "Upload", it.categories = ["arrows", "files"], it.tags = ["file", "up", "file", "share"], it.SM = at, it.LG = rt, it.MD = tt, it.XL = st;
      const dt = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "17",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 16 17",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M8 2.334c.368 0 .667.298.667.666v6.39l2.195-2.195a.667.667 0 1 1 .943.943L8.47 11.472a.667.667 0 0 1-.942 0L4.195 8.138a.667.667 0 1 1 .943-.943l2.195 2.196V3c0-.369.299-.667.667-.667m-6 8c.368 0 .667.298.667.666v2.667a.667.667 0 0 0 .666.667h9.334a.666.666 0 0 0 .666-.667V11a.667.667 0 1 1 1.334 0v2.667a2 2 0 0 1-2 2H3.333a2 2 0 0 1-2-2V11c0-.368.299-.666.667-.666",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        ot = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M12 2a1 1 0 0 1 1 1v9.586l3.293-3.293a1 1 0 1 1 1.414 1.414l-5 5a1 1 0 0 1-1.414 0l-5-5a1 1 0 0 1 1.414-1.414L11 12.586V3a1 1 0 0 1 1-1M3 14a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-4a1 1 0 1 1 2 0v4a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-4a1 1 0 0 1 1-1",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        nt = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "20",
            height: "20",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 20 20",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M1.334 15.833V12.5A.833.833 0 1 1 3 12.5v3.333a.835.835 0 0 0 .834.834H15.5a.835.835 0 0 0 .834-.834V12.5a.833.833 0 1 1 1.666 0v3.333a2.5 2.5 0 0 1-2.5 2.5H3.834a2.5 2.5 0 0 1-2.5-2.5M8.834 2.5a.833.833 0 1 1 1.666 0v7.988l2.744-2.744.063-.057a.834.834 0 0 1 1.115 1.236l-4.167 4.166a.833.833 0 0 1-1.177 0L4.91 8.923l-.058-.064a.834.834 0 0 1 1.173-1.172l.063.057 2.745 2.744z"
            })
          })
        }))),
        ht = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M16 2.667c.736 0 1.333.596 1.333 1.333v12.78l4.39-4.39a1.333 1.333 0 1 1 1.886 1.886l-6.666 6.667c-.52.52-1.365.52-1.886 0L8.39 14.276a1.333 1.333 0 1 1 1.886-1.886l4.39 4.39V4c0-.737.598-1.333 1.334-1.333m-12 16c.736 0 1.333.596 1.333 1.333v5.333a1.333 1.333 0 0 0 1.334 1.334h18.666a1.333 1.333 0 0 0 1.334-1.334V20a1.333 1.333 0 0 1 2.666 0v5.333a4 4 0 0 1-4 4H6.667a4 4 0 0 1-4-4V20c0-.736.597-1.334 1.333-1.334",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        ct = (0, t.forwardRef)((({
          size: e = "SM",
          ...l
        }, a) => {
          const t = (0, o.v6)(l, {
            className: g({
              size: e
            })
          });
          return (0, r.jsxs)(r.Fragment, {
            children: ["SM" === e && (0, r.jsx)(dt, {
              ...t,
              ref: a
            }), "LG" === e && (0, r.jsx)(ot, {
              ...t,
              ref: a
            }), "MD" === e && (0, r.jsx)(nt, {
              ...t,
              ref: a
            }), "XL" === e && (0, r.jsx)(ht, {
              ...t,
              ref: a
            })]
          })
        }));
      ct.displayName = "Download", ct.categories = ["arrows", "files"], ct.tags = ["import", "export", "save", "down"], ct.SM = dt, ct.LG = ot, ct.MD = nt, ct.XL = ht;
      const ft = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M5.667 5.333a.667.667 0 1 1 0-1.333h5.666c.368 0 .667.298.667.667v5.666a.667.667 0 0 1-1.333 0V6.276l-5.529 5.529a.667.667 0 1 1-.943-.943l5.529-5.529z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        wt = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M7.5 7a1 1 0 0 1 1-1H17a1 1 0 0 1 1 1v8.5a1 1 0 1 1-2 0V9.414l-8.293 8.293a1 1 0 0 1-1.414-1.414L14.586 8H8.5a1 1 0 0 1-1-1",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        vt = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "20",
            height: "20",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 20 20",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M14.667 14.167a.835.835 0 0 1-1.667 0V7.844l-6.911 6.911a.833.833 0 1 1-1.178-1.178l6.911-6.911H5.5A.833.833 0 1 1 5.5 5h8.333c.46 0 .834.373.834.833z"
            })
          })
        }))),
        xt = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M11.333 10.667a1.333 1.333 0 0 1 0-2.667h11.334C23.403 8 24 8.597 24 9.333v11.334a1.333 1.333 0 0 1-2.667 0v-8.115L10.276 23.61a1.333 1.333 0 1 1-1.885-1.886l11.057-11.057z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        gt = (0, t.forwardRef)((({
          size: e = "SM",
          ...l
        }, a) => {
          const t = (0, o.v6)(l, {
            className: g({
              size: e
            })
          });
          return (0, r.jsxs)(r.Fragment, {
            children: ["SM" === e && (0, r.jsx)(ft, {
              ...t,
              ref: a
            }), "LG" === e && (0, r.jsx)(wt, {
              ...t,
              ref: a
            }), "MD" === e && (0, r.jsx)(vt, {
              ...t,
              ref: a
            }), "XL" === e && (0, r.jsx)(xt, {
              ...t,
              ref: a
            })]
          })
        }));
      gt.displayName = "ExternalLink", gt.categories = ["arrows", "text", "social"], gt.tags = ["outbound", "share", "link", "new tab", "new window", "open", "URL", "hyperlink", "external"], gt.SM = ft, gt.LG = wt, gt.MD = vt, gt.XL = xt;
      const jt = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M7.999 2.667A5.333 5.333 0 0 0 2.667 8a.667.667 0 0 1-1.334 0A6.667 6.667 0 0 1 8 1.333h.003a7.17 7.17 0 0 1 4.954 2.014l.008.008.368.369V2a.667.667 0 0 1 1.334 0v3.333A.667.667 0 0 1 14 6h-3.333a.667.667 0 1 1 0-1.333h1.724l-.365-.365A5.83 5.83 0 0 0 8 2.667m3.772 9.104c1-1 1.562-2.357 1.562-3.771a.667.667 0 0 1 1.334 0A6.667 6.667 0 0 1 8 14.667h-.002a7.17 7.17 0 0 1-4.955-2.014l-.008-.008-.368-.369V14a.667.667 0 1 1-1.334 0v-3.333c0-.369.299-.667.667-.667h3.333a.667.667 0 0 1 0 1.333H3.61l.364.365a5.83 5.83 0 0 0 4.027 1.635c1.414 0 2.77-.562 3.77-1.562",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        mt = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M11.998 4A8 8 0 0 0 4 12a1 1 0 1 1-2 0A10 10 0 0 1 12 2h.004a10.75 10.75 0 0 1 7.431 3.021l.012.012.553.553V3a1 1 0 1 1 2 0v5a1 1 0 0 1-1 1h-5a1 1 0 1 1 0-2h2.586l-.547-.547A8.75 8.75 0 0 0 11.999 4m5.659 13.657A8 8 0 0 0 20 12a1 1 0 1 1 2 0 10 10 0 0 1-10 10h-.004a10.75 10.75 0 0 1-7.431-3.021l-.012-.012L4 18.414V21a1 1 0 1 1-2 0v-5a1 1 0 0 1 1-1h5a1 1 0 1 1 0 2H5.414l.547.547A8.75 8.75 0 0 0 12 20a8 8 0 0 0 5.656-2.343",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        pt = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "20",
            height: "20",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 20 20",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M1.334 17.5v-4.167c0-.46.372-.833.833-.833h4.167a.833.833 0 0 1 0 1.667H4.179l.45.45.26.24a7.3 7.3 0 0 0 4.779 1.809A6.665 6.665 0 0 0 16.334 10 .833.833 0 1 1 18 10a8.333 8.333 0 0 1-8.333 8.333h-.003a8.96 8.96 0 0 1-6.194-2.518l-.47-.47V17.5a.833.833 0 1 1-1.666 0m0-7.5a8.333 8.333 0 0 1 8.333-8.333h.003a8.96 8.96 0 0 1 5.875 2.225l.318.293.47.47V2.5A.833.833 0 1 1 18 2.5v4.167a.833.833 0 0 1-.833.833H13a.833.833 0 0 1 0-1.667h2.154l-.45-.45-.26-.24a7.3 7.3 0 0 0-4.78-1.81A6.667 6.667 0 0 0 3 10a.833.833 0 1 1-1.666 0"
            })
          })
        }))),
        ut = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M15.998 5.333A10.667 10.667 0 0 0 5.333 16a1.333 1.333 0 1 1-2.666 0A13.333 13.333 0 0 1 16 2.667h.005a14.33 14.33 0 0 1 9.908 4.028l.016.015.738.738V4a1.333 1.333 0 0 1 2.666 0v6.666c0 .737-.597 1.334-1.333 1.334h-6.667a1.333 1.333 0 1 1 0-2.667h3.448l-.729-.729a11.67 11.67 0 0 0-8.054-3.27m7.544 18.21c2-2.001 3.125-4.714 3.125-7.543a1.333 1.333 0 0 1 2.666 0A13.333 13.333 0 0 1 16 29.333h-.005a14.33 14.33 0 0 1-9.908-4.028l-.017-.016-.737-.737V28a1.333 1.333 0 1 1-2.666 0v-6.667C2.667 20.597 3.264 20 4 20h6.667a1.333 1.333 0 0 1 0 2.666H7.219l.729.73a11.67 11.67 0 0 0 8.054 3.27c2.829 0 5.54-1.124 7.54-3.124",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Mt = (0, t.forwardRef)((({
          size: e = "SM",
          ...l
        }, a) => {
          const t = (0, o.v6)(l, {
            className: g({
              size: e
            })
          });
          return (0, r.jsxs)(r.Fragment, {
            children: ["SM" === e && (0, r.jsx)(jt, {
              ...t,
              ref: a
            }), "LG" === e && (0, r.jsx)(mt, {
              ...t,
              ref: a
            }), "MD" === e && (0, r.jsx)(pt, {
              ...t,
              ref: a
            }), "XL" === e && (0, r.jsx)(ut, {
              ...t,
              ref: a
            })]
          })
        }));
      Mt.displayName = "RefreshCw", Mt.categories = ["arrows"], Mt.tags = ["rotate", "reload", "rerun", "synchronise", "synchronize", "arrows", "circular", "cycle", "loop", "repeat", "sync", "update", "reset", "restore"], Mt.SM = jt, Mt.LG = mt, Mt.MD = pt, Mt.XL = ut;
      const Rt = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M8 2.667A5.333 5.333 0 1 0 13.333 8a.667.667 0 0 1 1.334 0A6.667 6.667 0 1 1 8 1.333c1.857 0 3.628.737 4.955 2.013l.01.01.368.368V2a.667.667 0 0 1 1.334 0v3.333A.667.667 0 0 1 14 6h-3.333a.667.667 0 1 1 0-1.333h1.724l-.364-.364A5.83 5.83 0 0 0 8 2.667",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        bt = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M12 4a8 8 0 1 0 8 8 1 1 0 1 1 2 0A10 10 0 1 1 12 2c2.786 0 5.442 1.105 7.433 3.02l.014.013.553.553V3a1 1 0 1 1 2 0v5a1 1 0 0 1-1 1h-5a1 1 0 1 1 0-2h2.586l-.546-.546C16.412 4.892 14.251 4 12 4",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Lt = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "20",
            height: "20",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 20 20",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M9.667 1.667c2.176 0 4.258.81 5.877 2.225l.317.29.473.473V2.5A.833.833 0 1 1 18 2.5v4.167c0 .46-.373.833-.833.833H13a.833.833 0 0 1 0-1.667h2.154l-.46-.46a7.29 7.29 0 0 0-5.027-2.04 6.668 6.668 0 0 0-4.714 11.38A6.666 6.666 0 0 0 16.333 10 .833.833 0 1 1 18 10a8.333 8.333 0 1 1-8.333-8.333"
            })
          })
        }))),
        zt = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M16 5.333A10.667 10.667 0 1 0 26.667 16a1.333 1.333 0 0 1 2.666 0A13.333 13.333 0 1 1 16 2.667c3.714 0 7.256 1.473 9.91 4.025l.02.018.737.738V4a1.333 1.333 0 0 1 2.666 0v6.666c0 .737-.597 1.334-1.333 1.334h-6.667a1.333 1.333 0 1 1 0-2.667h3.448l-.728-.727C21.883 6.523 19.001 5.333 16 5.333",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Ct = (0, t.forwardRef)((({
          size: e = "SM",
          ...l
        }, a) => {
          const t = (0, o.v6)(l, {
            className: g({
              size: e
            })
          });
          return (0, r.jsxs)(r.Fragment, {
            children: ["SM" === e && (0, r.jsx)(Rt, {
              ...t,
              ref: a
            }), "LG" === e && (0, r.jsx)(bt, {
              ...t,
              ref: a
            }), "MD" === e && (0, r.jsx)(Lt, {
              ...t,
              ref: a
            }), "XL" === e && (0, r.jsx)(zt, {
              ...t,
              ref: a
            })]
          })
        }));
      Ct.displayName = "Replay", Ct.categories = ["arrows", "design", "photography"], Ct.tags = ["arrow", "right", "clockwise", "refresh", "reload", "rerun", "redo"], Ct.SM = Rt, Ct.LG = bt, Ct.MD = Lt, Ct.XL = zt;
      const At = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M6.471 2.195c.26.26.26.683 0 .943L4.276 5.333h5.39a4.334 4.334 0 0 1 0 8.667H7.334a.667.667 0 0 1 0-1.333h2.334a3 3 0 0 0 0-6h-5.39L6.47 8.862a.667.667 0 0 1-.942.943L2.195 6.47a.667.667 0 0 1 0-.942L5.53 2.195c.26-.26.682-.26.942 0",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Ht = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M9.707 3.293a1 1 0 0 1 0 1.414L6.414 8H14.5a6.5 6.5 0 1 1 0 13H11a1 1 0 1 1 0-2h3.5a4.501 4.501 0 0 0 1.722-8.657A4.5 4.5 0 0 0 14.5 10H6.414l3.293 3.293a1 1 0 0 1-1.414 1.414l-5-5a1 1 0 0 1 0-1.414l5-5a1 1 0 0 1 1.414 0",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Vt = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "20",
            height: "20",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 20 20",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M15.5 12.083a3.75 3.75 0 0 0-2.315-3.464 3.8 3.8 0 0 0-1.435-.286H5.012l2.744 2.745.057.063a.834.834 0 0 1-1.172 1.172l-.064-.057L2.411 8.09a.834.834 0 0 1 0-1.178l4.166-4.166a.834.834 0 0 1 1.179 1.177L5.012 6.666h6.738a5.42 5.42 0 0 1 5.004 7.49A5.42 5.42 0 0 1 11.75 17.5H8.833a.834.834 0 0 1 0-1.667h2.917a3.75 3.75 0 0 0 3.465-2.314c.188-.455.285-.943.285-1.436"
            })
          })
        }))),
        It = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M12.943 4.39c.52.521.52 1.365 0 1.886l-4.39 4.39h10.78A8.665 8.665 0 0 1 22.65 27.34a8.7 8.7 0 0 1-3.317.66h-4.666a1.333 1.333 0 1 1 0-2.667h4.666a6 6 0 1 0 0-12H8.553l4.39 4.39a1.333 1.333 0 1 1-1.886 1.887l-6.666-6.667a1.333 1.333 0 0 1 0-1.886l6.666-6.666c.52-.521 1.365-.521 1.886 0",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Bt = (0, t.forwardRef)((({
          size: e = "SM",
          ...l
        }, a) => {
          const t = (0, o.v6)(l, {
            className: g({
              size: e
            })
          });
          return (0, r.jsxs)(r.Fragment, {
            children: ["SM" === e && (0, r.jsx)(At, {
              ...t,
              ref: a
            }), "LG" === e && (0, r.jsx)(Ht, {
              ...t,
              ref: a
            }), "MD" === e && (0, r.jsx)(Vt, {
              ...t,
              ref: a
            }), "XL" === e && (0, r.jsx)(It, {
              ...t,
              ref: a
            })]
          })
        }));
      Bt.displayName = "Undo", Bt.categories = ["text", "arrows"], Bt.tags = ["redo", "rerun", "history", "back", "return", "reverse", "revert", "direction", "u-turn", "undo", "arrow", "navigation"], Bt.SM = At, Bt.LG = Ht, Bt.MD = Vt, Bt.XL = It;
      const St = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M.862.862c.26-.26.682-.26.943 0L4.23 3.288l.003.004 8.474 8.474.004.004 2.426 2.425a.667.667 0 0 1-.943.943l-1.976-1.976A6.6 6.6 0 0 1 8 14.667h-.002a7.17 7.17 0 0 1-4.955-2.014l-.008-.008-.368-.369V14a.667.667 0 0 1-1.334 0v-3.333c0-.368.299-.667.667-.667h3.333a.667.667 0 0 1 0 1.333H3.61l.364.365a5.83 5.83 0 0 0 4.027 1.635c1.237 0 2.371-.415 3.27-1.12L3.786 4.73A5.27 5.27 0 0 0 2.667 8a.667.667 0 0 1-1.334 0c0-1.601.56-3.072 1.506-4.219L.862 1.805a.667.667 0 0 1 0-.943m5.008.821A6.5 6.5 0 0 1 8 1.333h.003a7.17 7.17 0 0 1 4.954 2.014l.008.008.368.369V2a.667.667 0 1 1 1.334 0v3.333A.667.667 0 0 1 14 6h-3.333a.667.667 0 1 1 0-1.333h1.723l-.364-.365A5.83 5.83 0 0 0 8 2.667c-.596 0-1.168.095-1.695.277a.667.667 0 0 1-.434-1.26M14 7.333c.368 0 .667.299.667.667a6.5 6.5 0 0 1-.35 2.13.667.667 0 0 1-1.26-.434A5.2 5.2 0 0 0 13.332 8c0-.368.299-.667.667-.667",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        yt = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M1.293 1.293a1 1 0 0 1 1.414 0l3.64 3.64.004.004 16.356 16.356a1 1 0 0 1-1.414 1.414l-2.965-2.965A9.9 9.9 0 0 1 12 22h-.004a10.75 10.75 0 0 1-7.431-3.021l-.012-.012L4 18.414V21a1 1 0 1 1-2 0v-5a1 1 0 0 1 1-1h5a1 1 0 1 1 0 2H5.414l.547.547A8.75 8.75 0 0 0 12 20a7.9 7.9 0 0 0 4.905-1.68L5.68 7.094A7.9 7.9 0 0 0 4 12a1 1 0 1 1-2 0c0-2.402.84-4.608 2.258-6.328L1.293 2.707a1 1 0 0 1 0-1.414m7.511 1.232A9.8 9.8 0 0 1 12 2h.004a10.75 10.75 0 0 1 7.431 3.021l.012.012.553.553V3a1 1 0 1 1 2 0v5a1 1 0 0 1-1 1h-5a1 1 0 1 1 0-2h2.586l-.547-.547A8.75 8.75 0 0 0 11.999 4c-.894 0-1.753.143-2.543.415a1 1 0 1 1-.652-1.89m10.78 12.02c.273-.792.416-1.651.416-2.545a1 1 0 1 1 2 0 9.8 9.8 0 0 1-.524 3.196 1 1 0 0 1-1.892-.652",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Dt = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "20",
            height: "20",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 20 20",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M16.333 10A.833.833 0 0 1 18 10a8.2 8.2 0 0 1-.437 2.663.834.834 0 0 1-1.576-.543c.227-.66.346-1.376.346-2.12m-15 0c0-2.002.7-3.84 1.882-5.274l-2.47-2.47a.832.832 0 1 1 1.177-1.178L4.95 4.104l.01.01.005.006L18.59 17.744a.834.834 0 0 1-1.178 1.178l-2.472-2.471a8.26 8.26 0 0 1-5.273 1.883h-.003a8.96 8.96 0 0 1-6.192-2.518l-.01-.01-.46-.46V17.5a.834.834 0 0 1-1.668 0v-4.166c0-.46.373-.834.833-.834h4.167a.834.834 0 0 1 0 1.667H4.178l.451.45.259.24a7.3 7.3 0 0 0 4.78 1.809c1.547 0 2.963-.521 4.085-1.402L4.402 5.913A6.6 6.6 0 0 0 3 10a.834.834 0 0 1-1.667 0M9.67 1.667a8.96 8.96 0 0 1 5.874 2.224l.319.293.47.471V2.5A.833.833 0 0 1 18 2.5v4.167c0 .46-.373.833-.834.833H13a.834.834 0 1 1 0-1.666h2.155l-.461-.461v-.001a7.3 7.3 0 0 0-5.03-2.038 6.5 6.5 0 0 0-2.118.345.834.834 0 0 1-.543-1.575 8.2 8.2 0 0 1 2.663-.437z"
            })
          })
        }))),
        Nt = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M1.724 1.724c.52-.52 1.365-.52 1.885 0l4.853 4.852.007.007L25.417 23.53l.008.008 4.851 4.851a1.333 1.333 0 0 1-1.886 1.886l-3.953-3.953A13.2 13.2 0 0 1 16 29.333h-.005a14.33 14.33 0 0 1-9.908-4.028l-.016-.016-.738-.737V28a1.333 1.333 0 1 1-2.666 0v-6.667C2.667 20.597 3.264 20 4 20h6.667a1.333 1.333 0 0 1 0 2.667H7.219l.729.728a11.67 11.67 0 0 0 8.055 3.272c2.474-.001 4.741-.832 6.538-2.24L7.574 9.458A10.55 10.55 0 0 0 5.334 16a1.333 1.333 0 1 1-2.667 0c0-3.201 1.119-6.143 3.01-8.436L1.724 3.609a1.333 1.333 0 0 1 0-1.885m10.015 1.642c1.345-.463 2.786-.7 4.261-.7h.005a14.33 14.33 0 0 1 9.908 4.029l.017.015.737.738V4a1.333 1.333 0 0 1 2.666 0v6.667c0 .736-.597 1.333-1.333 1.333h-6.667a1.333 1.333 0 1 1 0-2.667h3.448l-.729-.729a11.67 11.67 0 0 0-8.055-3.27c-1.19 0-2.335.19-3.39.553a1.333 1.333 0 1 1-.868-2.521M28 14.666c.736 0 1.333.598 1.333 1.334 0 1.475-.236 2.916-.699 4.26a1.333 1.333 0 0 1-2.521-.868c.363-1.054.554-2.2.554-3.392 0-.736.597-1.333 1.333-1.333",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Gt = (0, t.forwardRef)((({
          size: e = "SM",
          ...l
        }, a) => {
          const t = (0, o.v6)(l, {
            className: g({
              size: e
            })
          });
          return (0, r.jsxs)(r.Fragment, {
            children: ["SM" === e && (0, r.jsx)(St, {
              ...t,
              ref: a
            }), "LG" === e && (0, r.jsx)(yt, {
              ...t,
              ref: a
            }), "MD" === e && (0, r.jsx)(Dt, {
              ...t,
              ref: a
            }), "XL" === e && (0, r.jsx)(Nt, {
              ...t,
              ref: a
            })]
          })
        }));
      Gt.displayName = "RefreshCwOff", Gt.categories = ["arrows"], Gt.tags = ["rotate", "reload", "rerun", "synchronise", "synchronize", "arrows", "circular", "cycle", "cancel", "no", "stop", "error", "disconnect", "ignore"], Gt.SM = St, Gt.LG = yt, Gt.MD = Dt, Gt.XL = Nt;
      const Xt = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M13.529 1.529a.667.667 0 1 1 .942.942L10.943 6h2.39a.667.667 0 0 1 0 1.333h-4a.667.667 0 0 1-.666-.666v-4a.667.667 0 1 1 1.333 0v2.39zM2 9.333c0-.368.299-.666.667-.666h4c.368 0 .666.298.666.666v4a.667.667 0 0 1-1.333 0v-2.39L2.471 14.47a.667.667 0 1 1-.942-.943L5.057 10h-2.39A.667.667 0 0 1 2 9.333",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        qt = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M20.293 2.293a1 1 0 1 1 1.414 1.414L16.414 9H20a1 1 0 1 1 0 2h-6a1 1 0 0 1-1-1V4a1 1 0 1 1 2 0v3.586zM3 14a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0v-3.586l-5.293 5.293a1 1 0 0 1-1.414-1.414L7.586 15H4a1 1 0 0 1-1-1",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        kt = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "20",
            height: "20",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 20 20",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M16.578 1.911a.832.832 0 1 1 1.178 1.178l-4.41 4.41h2.988l.085.005a.834.834 0 0 1 0 1.658l-.085.005h-5a.834.834 0 0 1-.834-.834v-5a.834.834 0 0 1 1.667 0V6.32zM8.834 16.667a.834.834 0 0 1-1.667 0v-2.99L2.756 18.09a.832.832 0 1 1-1.178-1.178l4.41-4.411H3a.833.833 0 0 1 0-1.667h5c.46 0 .834.374.834.834z"
            })
          })
        }))),
        Ft = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M27.057 3.057a1.333 1.333 0 1 1 1.886 1.886L21.886 12h4.78a1.333 1.333 0 1 1 0 2.667h-8a1.333 1.333 0 0 1-1.333-1.334v-8a1.333 1.333 0 1 1 2.667 0v4.781zM4 18.667c0-.737.597-1.334 1.333-1.334h8c.737 0 1.334.597 1.334 1.334v8a1.333 1.333 0 1 1-2.667 0v-4.781l-7.057 7.057a1.333 1.333 0 0 1-1.886-1.886L10.114 20h-4.78A1.333 1.333 0 0 1 4 18.667",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Pt = (0, t.forwardRef)((({
          size: e = "SM",
          ...l
        }, a) => {
          const t = (0, o.v6)(l, {
            className: g({
              size: e
            })
          });
          return (0, r.jsxs)(r.Fragment, {
            children: ["SM" === e && (0, r.jsx)(Xt, {
              ...t,
              ref: a
            }), "LG" === e && (0, r.jsx)(qt, {
              ...t,
              ref: a
            }), "MD" === e && (0, r.jsx)(kt, {
              ...t,
              ref: a
            }), "XL" === e && (0, r.jsx)(Ft, {
              ...t,
              ref: a
            })]
          })
        }));
      Pt.displayName = "Minimize2", Pt.categories = ["arrows", "layout", "design"], Pt.tags = ["exit fullscreen", "arrows", "close", "shrink"], Pt.SM = Xt, Pt.LG = qt, Pt.MD = kt, Pt.XL = Ft;
      const Ot = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "m7.571 2.157-4.668 4a.67.67 0 0 0-.236.51v6a.667.667 0 0 0 .666.666h2V8.667a1.333 1.333 0 0 1 1.334-1.334h2.666a1.333 1.333 0 0 1 1.334 1.334v4.666h2a.667.667 0 0 0 .666-.666v-6a.67.67 0 0 0-.236-.51l-.003-.003-4.665-3.997a.67.67 0 0 0-.858 0m1.762 11.176V8.667H6.667v4.666zm3.334 1.334a2 2 0 0 0 2-2v-6a2 2 0 0 0-.707-1.527L9.294 1.142l-.003-.003a2 2 0 0 0-2.582 0L2.04 5.14a2 2 0 0 0-.707 1.527v6a2 2 0 0 0 2 2z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Tt = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "m11.357 3.235-7.002 6A1 1 0 0 0 4 10v9a1 1 0 0 0 1 1h3v-7a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v7h3a1 1 0 0 0 1-1v-9a1 1 0 0 0-.355-.764l-.005-.005-6.994-5.994-.003-.002a1 1 0 0 0-1.286 0M14 20v-7h-4v7zm5 2a3 3 0 0 0 3-3v-9a3 3 0 0 0-1.06-2.29l-.004-.002-6.994-5.994-.005-.005a3 3 0 0 0-3.873 0L3.06 7.711A3 3 0 0 0 2 10v9a3 3 0 0 0 3 3z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Et = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "20",
            height: "20",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 20 20",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M8 10.833v5.834h3.334v-5.834zm5 5.834h2.5a.835.835 0 0 0 .834-.834v-7.5a.84.84 0 0 0-.296-.637l-.004-.004-5.83-4.995-.12-.084a.8.8 0 0 0-.272-.1L9.667 2.5a.83.83 0 0 0-.538.197l-5.83 4.995-.003.004A.83.83 0 0 0 3 8.333v7.5a.835.835 0 0 0 .834.834h2.5v-5.834A1.67 1.67 0 0 1 8 9.167h3.334A1.666 1.666 0 0 1 13 10.833zm5-.834a2.5 2.5 0 0 1-2.5 2.5H3.834a2.5 2.5 0 0 1-2.5-2.5v-7.5a2.5 2.5 0 0 1 .882-1.906l5.833-5 .004-.003a2.5 2.5 0 0 1 1.614-.59l.22.01a2.5 2.5 0 0 1 1.22.445l.173.135.005.004 5.833 4.999h-.001A2.5 2.5 0 0 1 18 8.333z"
            })
          })
        }))),
        Ut = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "m15.142 4.313-9.336 8.001a1.33 1.33 0 0 0-.473 1.019v12a1.333 1.333 0 0 0 1.334 1.334h4v-9.334a2.666 2.666 0 0 1 2.666-2.666h5.334a2.667 2.667 0 0 1 2.666 2.666v9.334h4a1.334 1.334 0 0 0 1.334-1.334v-12a1.34 1.34 0 0 0-.473-1.019l-.007-.006-9.33-7.995a1.33 1.33 0 0 0-1.715 0m3.525 22.354v-9.334h-5.334v9.334zm6.666 2.666a4 4 0 0 0 4-4v-12a4 4 0 0 0-1.414-3.052l-9.33-7.996-.007-.006a4 4 0 0 0-5.164 0L4.081 10.28a4 4 0 0 0-1.414 3.052v12a4 4 0 0 0 4 4z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        _t = (0, t.forwardRef)((({
          size: e = "SM",
          ...l
        }, a) => {
          const t = (0, o.v6)(l, {
            className: g({
              size: e
            })
          });
          return (0, r.jsxs)(r.Fragment, {
            children: ["SM" === e && (0, r.jsx)(Ot, {
              ...t,
              ref: a
            }), "LG" === e && (0, r.jsx)(Tt, {
              ...t,
              ref: a
            }), "MD" === e && (0, r.jsx)(Et, {
              ...t,
              ref: a
            }), "XL" === e && (0, r.jsx)(Ut, {
              ...t,
              ref: a
            })]
          })
        }));
      _t.displayName = "House", _t.categories = ["buildings", "home"], _t.tags = ["home", "living", "building", "residence", "architecture", "property", "homepage", "city"], _t.SM = Ot, _t.LG = Tt, _t.MD = Et, _t.XL = Ut;
      const Wt = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M4 2a.667.667 0 0 0-.667.667v10.666c0 .369.299.667.667.667h1.333v-2c0-.368.299-.667.667-.667h4c.368 0 .667.299.667.667v2H12a.667.667 0 0 0 .667-.667V2.667A.667.667 0 0 0 12 2zm8 13.333a2 2 0 0 0 2-2V2.667a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v10.666a2 2 0 0 0 2 2zM9.333 14v-1.333H6.667V14zM4.667 4c0-.368.298-.667.666-.667h.007a.667.667 0 1 1 0 1.334h-.007A.667.667 0 0 1 4.667 4m2.666 0c0-.368.299-.667.667-.667h.007a.667.667 0 1 1 0 1.334H8A.667.667 0 0 1 7.333 4M10 4c0-.368.299-.667.667-.667h.006a.667.667 0 1 1 0 1.334h-.006A.667.667 0 0 1 10 4M4.667 6.667c0-.368.298-.667.666-.667h.007a.667.667 0 0 1 0 1.333h-.007a.667.667 0 0 1-.666-.666m2.666 0C7.333 6.299 7.632 6 8 6h.007a.667.667 0 0 1 0 1.333H8a.667.667 0 0 1-.667-.666m2.667 0c0-.368.299-.667.667-.667h.006a.667.667 0 1 1 0 1.333h-.006A.667.667 0 0 1 10 6.667M4.667 9.333c0-.368.298-.666.666-.666h.007a.667.667 0 0 1 0 1.333h-.007a.667.667 0 0 1-.666-.667m2.666 0c0-.368.299-.666.667-.666h.007a.667.667 0 0 1 0 1.333H8a.667.667 0 0 1-.667-.667m2.667 0c0-.368.299-.666.667-.666h.006a.667.667 0 1 1 0 1.333h-.006A.667.667 0 0 1 10 9.333",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Zt = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M6 3a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h2v-3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v3h2a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zm12 20a3 3 0 0 0 3-3V4a3 3 0 0 0-3-3H6a3 3 0 0 0-3 3v16a3 3 0 0 0 3 3zm-4-2v-2h-4v2zM7 6a1 1 0 0 1 1-1h.01a1 1 0 0 1 0 2H8a1 1 0 0 1-1-1m4 0a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2H12a1 1 0 0 1-1-1m4 0a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2H16a1 1 0 0 1-1-1m-8 4a1 1 0 0 1 1-1h.01a1 1 0 0 1 0 2H8a1 1 0 0 1-1-1m4 0a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2H12a1 1 0 0 1-1-1m4 0a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2H16a1 1 0 0 1-1-1m-8 4a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1m4 0a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2H12a1 1 0 0 1-1-1m4 0a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2H16a1 1 0 0 1-1-1",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Yt = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "20",
            height: "20",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 20 20",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M12.5 14.167c.46 0 .833.373.833.833v2.5H15c.46 0 .833-.373.833-.833V3.334A.834.834 0 0 0 15 2.5H5a.834.834 0 0 0-.834.834v13.333c0 .46.374.833.834.833h1.666V15c0-.46.374-.833.834-.833zM8.333 17.5h3.333v-1.666H8.333zm-1.658-6.666.085.004a.833.833 0 0 1 0 1.658l-.085.004h-.009a.833.833 0 0 1 0-1.666zm3.333 0 .085.004a.834.834 0 0 1-.085 1.662H10a.834.834 0 1 1 0-1.666zm3.334 0 .085.004a.834.834 0 0 1 0 1.658l-.085.004h-.009a.833.833 0 1 1 0-1.666zM6.675 7.5a.834.834 0 0 1 0 1.667h-.009a.833.833 0 0 1 0-1.667zm3.333 0a.834.834 0 0 1 .085 1.663l-.085.004H10A.834.834 0 1 1 10 7.5zm3.334 0a.834.834 0 0 1 0 1.667h-.009a.833.833 0 0 1 0-1.667zM6.675 4.167l.085.004a.834.834 0 0 1 0 1.658l-.085.005h-.009a.834.834 0 0 1 0-1.667zm3.333 0a.834.834 0 1 1 0 1.667H10a.834.834 0 0 1 0-1.667zm3.334 0a.833.833 0 0 1 0 1.667h-.009a.834.834 0 0 1 0-1.667zm4.158 12.5a2.5 2.5 0 0 1-2.5 2.5H5a2.5 2.5 0 0 1-2.5-2.5V3.334A2.5 2.5 0 0 1 5 .834h10a2.5 2.5 0 0 1 2.5 2.5z"
            })
          })
        }))),
        Kt = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M8 4c-.736 0-1.333.597-1.333 1.333v21.334C6.667 27.403 7.264 28 8 28h2.667v-4c0-.736.597-1.333 1.333-1.333h8c.736 0 1.333.596 1.333 1.333v4H24c.736 0 1.333-.597 1.333-1.333V5.333C25.333 4.597 24.736 4 24 4zm16 26.667a4 4 0 0 0 4-4V5.333a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v21.334a4 4 0 0 0 4 4zM18.667 28v-2.667h-5.334V28zM9.333 8c0-.736.597-1.333 1.334-1.333h.013a1.333 1.333 0 1 1 0 2.666h-.013A1.333 1.333 0 0 1 9.333 8m5.334 0c0-.736.597-1.333 1.333-1.333h.013a1.333 1.333 0 1 1 0 2.666H16A1.333 1.333 0 0 1 14.667 8M20 8c0-.736.597-1.333 1.333-1.333h.014a1.333 1.333 0 0 1 0 2.666h-.014A1.333 1.333 0 0 1 20 8M9.333 13.333c0-.736.597-1.333 1.334-1.333h.013a1.333 1.333 0 0 1 0 2.667h-.013a1.333 1.333 0 0 1-1.334-1.334m5.334 0c0-.736.597-1.333 1.333-1.333h.013a1.333 1.333 0 0 1 0 2.667H16a1.333 1.333 0 0 1-1.333-1.334m5.333 0c0-.736.597-1.333 1.333-1.333h.014a1.333 1.333 0 0 1 0 2.667h-.014A1.333 1.333 0 0 1 20 13.333M9.333 18.667c0-.737.597-1.334 1.334-1.334h.013a1.333 1.333 0 1 1 0 2.667h-.013a1.333 1.333 0 0 1-1.334-1.333m5.334 0c0-.737.597-1.334 1.333-1.334h.013a1.333 1.333 0 1 1 0 2.667H16a1.333 1.333 0 0 1-1.333-1.333m5.333 0c0-.737.597-1.334 1.333-1.334h.014a1.333 1.333 0 0 1 0 2.667h-.014A1.333 1.333 0 0 1 20 18.667",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Qt = (0, t.forwardRef)((({
          size: e = "SM",
          ...l
        }, a) => {
          const t = (0, o.v6)(l, {
            className: g({
              size: e
            })
          });
          return (0, r.jsxs)(r.Fragment, {
            children: ["SM" === e && (0, r.jsx)(Wt, {
              ...t,
              ref: a
            }), "LG" === e && (0, r.jsx)(Zt, {
              ...t,
              ref: a
            }), "MD" === e && (0, r.jsx)(Yt, {
              ...t,
              ref: a
            }), "XL" === e && (0, r.jsx)(Kt, {
              ...t,
              ref: a
            })]
          })
        }));
      Qt.displayName = "Property", Qt.categories = ["account", "buildings"], Qt.tags = ["organization", "building", "house", "city", "GTAO", "structure"], Qt.SM = Wt, Qt.LG = Zt, Qt.MD = Yt, Qt.XL = Kt;
      const Jt = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M5.22 2a.67.67 0 0 0-.474.197l-.001.001L2.943 4h10.114l-1.802-1.802-.001-.001A.67.67 0 0 0 10.78 2zM14 5.333H2v1.334a.667.667 0 0 0 .65.666c.238-.017.464-.109.647-.263l.04-.03a1.13 1.13 0 0 1 1.366.03c.178.15.398.241.63.262.232-.02.453-.112.631-.262l.039-.03a1.13 1.13 0 0 1 1.366.03c.179.15.4.241.631.262.232-.02.452-.112.63-.262l.04-.03a1.13 1.13 0 0 1 1.366.03c.178.15.399.241.63.262.232-.02.453-.112.631-.262l.04-.03a1.13 1.13 0 0 1 1.366.03c.183.154.41.246.648.263A.667.667 0 0 0 14 6.667zm-1.333 3.215A2.5 2.5 0 0 1 12 8.21c-.38.27-.829.429-1.297.455h-.073a2.47 2.47 0 0 1-1.297-.455c-.379.27-.828.429-1.296.455a1 1 0 0 1-.074 0 2.47 2.47 0 0 1-1.296-.455c-.38.27-.83.429-1.297.455h-.073A2.47 2.47 0 0 1 4 8.21c-.205.146-.43.26-.667.337v4.785A.667.667 0 0 0 4 14h1.333v-2a2 2 0 0 1 2-2h1.334a2 2 0 0 1 2 2v2H12a.667.667 0 0 0 .667-.667zM9.333 14v-2a.667.667 0 0 0-.666-.667H7.333a.667.667 0 0 0-.666.667v2zM6 15.333h6a2 2 0 0 0 2-2v-4.78a2 2 0 0 0 1.333-1.886v-2a.67.67 0 0 0-.195-.472l-2.939-2.938a2 2 0 0 0-1.419-.59H5.22M6 15.333H4a2 2 0 0 1-2-2v-4.78A2 2 0 0 1 .667 6.666v-2c0-.177.07-.347.195-.472L3.8 1.257l.001-.001a2 2 0 0 1 1.42-.59",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        $t = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M7.83 3a1 1 0 0 0-.71.295l-.003.002L4.414 6h15.172l-2.703-2.703-.002-.002A1 1 0 0 0 16.17 3zM21 8H3v2a1 1 0 0 0 .974 1 1.7 1.7 0 0 0 .972-.395l.058-.046a1.7 1.7 0 0 1 2.05.046 1.7 1.7 0 0 0 .946.393 1.7 1.7 0 0 0 .946-.393l.058-.046a1.7 1.7 0 0 1 2.05.046 1.7 1.7 0 0 0 .946.393 1.7 1.7 0 0 0 .946-.393l.058-.046a1.7 1.7 0 0 1 2.05.046 1.7 1.7 0 0 0 .946.393 1.7 1.7 0 0 0 .946-.393l.058-.046a1.7 1.7 0 0 1 2.05.046 1.7 1.7 0 0 0 .972.395A1 1 0 0 0 21 10zm-2 4.821a3.7 3.7 0 0 1-1-.505 3.7 3.7 0 0 1-1.945.682 1 1 0 0 1-.11 0A3.7 3.7 0 0 1 14 12.317a3.7 3.7 0 0 1-1.945.681 1 1 0 0 1-.11 0A3.7 3.7 0 0 1 10 12.317a3.7 3.7 0 0 1-1.945.681 1 1 0 0 1-.11 0A3.7 3.7 0 0 1 6 12.317a3.7 3.7 0 0 1-1 .504V20a1 1 0 0 0 1 1h2v-3a3 3 0 0 1 3-3h2a3 3 0 0 1 3 3v3h2a1 1 0 0 0 1-1zM14 21v-3a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v3zm-5 2h9a3 3 0 0 0 3-3v-7.172A3 3 0 0 0 23 10V7a1 1 0 0 0-.293-.707L18.3 1.885l-.001-.001A3 3 0 0 0 16.17 1H7.83M9 23H6a3 3 0 0 1-3-3v-7.172A3 3 0 0 1 1 10V7a1 1 0 0 1 .293-.707L5.7 1.885l.001-.001A3 3 0 0 1 7.83 1",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        es = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "20",
            height: "20",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 20 20",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M12 15a.833.833 0 0 0-.833-.833H9.5a.833.833 0 0 0-.833.833v2.5H12zM6.857 2.5a.84.84 0 0 0-.591.246l-.001.002L4.012 5h12.642L14.4 2.746a.83.83 0 0 0-.508-.242l-.083-.004zm10.976 4.167h-15v1.667a.834.834 0 0 0 .81.83c.298-.02.583-.133.812-.326l.049-.038a1.42 1.42 0 0 1 1.708.038c.223.187.498.3.788.325.29-.026.565-.138.788-.325l.049-.038c.241-.175.532-.269.83-.269l.111.005a1.4 1.4 0 0 1 .767.302c.223.187.498.3.788.325.29-.026.566-.138.79-.325l.047-.038a1.42 1.42 0 0 1 1.567-.062l.093.062.048.038c.223.187.5.3.789.325.29-.026.565-.138.788-.325l.049-.038a1.42 1.42 0 0 1 1.708.038c.229.192.513.306.811.327a.83.83 0 0 0 .81-.831zM13.667 17.5h1.666a.835.835 0 0 0 .834-.833v-5.985a3 3 0 0 1-.834-.419 3.1 3.1 0 0 1-1.62.569 1 1 0 0 1-.092 0 3.1 3.1 0 0 1-1.621-.57 3.1 3.1 0 0 1-1.621.57 1 1 0 0 1-.092 0 3.1 3.1 0 0 1-1.621-.569 3.1 3.1 0 0 1-1.62.569 1 1 0 0 1-.092 0 3.1 3.1 0 0 1-1.621-.569 3 3 0 0 1-.833.42v5.984l.004.082a.833.833 0 0 0 .829.75H7V15a2.5 2.5 0 0 1 2.5-2.5h1.667a2.5 2.5 0 0 1 2.5 2.5zM19.5 8.334a2.5 2.5 0 0 1-.732 1.767 2.5 2.5 0 0 1-.935.586v5.98a2.5 2.5 0 0 1-2.5 2.5h-10a2.5 2.5 0 0 1-2.5-2.5v-5.98a2.5 2.5 0 0 1-.935-.586 2.5 2.5 0 0 1-.731-1.767v-2.5c0-.221.088-.434.244-.59l3.675-3.675A2.5 2.5 0 0 1 6.858.835V.834h6.95a2.5 2.5 0 0 1 1.773.735l3.675 3.675a.84.84 0 0 1 .244.59z"
            })
          })
        }))),
        ls = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M10.439 4a1.33 1.33 0 0 0-.947.393l-.002.003L5.886 8h20.228l-3.603-3.604-.003-.003A1.33 1.33 0 0 0 21.56 4zM28 10.667H4v2.666a1.333 1.333 0 0 0 1.299 1.333c.476-.034.93-.218 1.296-.526q.037-.032.077-.06a2.27 2.27 0 0 1 2.733.06c.357.3.798.483 1.262.523.463-.04.904-.223 1.261-.523q.038-.032.078-.06a2.266 2.266 0 0 1 2.733.06c.357.3.797.483 1.261.523.464-.04.904-.223 1.262-.523q.037-.032.077-.06a2.27 2.27 0 0 1 2.733.06c.357.3.798.483 1.261.523.464-.04.905-.223 1.262-.523q.037-.032.077-.06a2.27 2.27 0 0 1 2.733.06c.366.308.82.492 1.296.526A1.333 1.333 0 0 0 28 13.333zm-2.667 6.428A5 5 0 0 1 24 16.422a4.93 4.93 0 0 1-2.593.91 1 1 0 0 1-.147 0 4.93 4.93 0 0 1-2.593-.91 4.93 4.93 0 0 1-2.594.91 1 1 0 0 1-.146 0 4.93 4.93 0 0 1-2.594-.91 4.93 4.93 0 0 1-2.593.91 1 1 0 0 1-.147 0A4.93 4.93 0 0 1 8 16.421c-.409.292-.859.518-1.333.673v9.572A1.333 1.333 0 0 0 8 28h2.667v-4a4 4 0 0 1 4-4h2.666a4 4 0 0 1 4 4v4H24a1.334 1.334 0 0 0 1.333-1.333zM18.667 28v-4a1.334 1.334 0 0 0-1.334-1.333h-2.666A1.333 1.333 0 0 0 13.333 24v4zM12 30.667h12a4 4 0 0 0 4-4v-9.562a4 4 0 0 0 2.667-3.772v-4c0-.353-.14-.693-.39-.943l-5.878-5.877-.001-.001a4 4 0 0 0-2.838-1.179H10.44M12 30.667H8a4 4 0 0 1-4-4v-9.562a4 4 0 0 1-2.667-3.772v-4c0-.353.14-.693.39-.943l5.878-5.877.002-.001a4 4 0 0 1 2.837-1.179",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        as = (0, t.forwardRef)((({
          size: e = "SM",
          ...l
        }, a) => {
          const t = (0, o.v6)(l, {
            className: g({
              size: e
            })
          });
          return (0, r.jsxs)(r.Fragment, {
            children: ["SM" === e && (0, r.jsx)(Jt, {
              ...t,
              ref: a
            }), "LG" === e && (0, r.jsx)($t, {
              ...t,
              ref: a
            }), "MD" === e && (0, r.jsx)(es, {
              ...t,
              ref: a
            }), "XL" === e && (0, r.jsx)(ls, {
              ...t,
              ref: a
            })]
          })
        }));
      as.displayName = "Store", as.categories = ["buildings", "navigation", "shopping"], as.tags = ["shop", "supermarket", "stand", "boutique", "building"], as.SM = Jt, as.LG = $t, as.MD = es, as.XL = ls;
      const rs = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M2 1.333c.368 0 .667.299.667.667v10.667a.667.667 0 0 0 .666.666H14a.667.667 0 1 1 0 1.334H3.333a2 2 0 0 1-2-2V2c0-.368.299-.667.667-.667m11.495 1.353c.357.09.574.452.485.809-.18.72-.618 1.946-1.238 3.008-.31.53-.682 1.051-1.115 1.447-.43.393-.98.717-1.627.717-1.03 0-1.55-.786-1.849-1.238l-.039-.06c-.374-.56-.521-.702-.779-.702-.168 0-.356.077-.579.322-.228.253-.443.632-.639 1.1-.33.794-.55 1.7-.715 2.383q-.046.192-.087.356a.667.667 0 0 1-1.293-.323l.078-.322c.163-.677.411-1.705.787-2.606.22-.531.506-1.069.881-1.483.382-.421.903-.76 1.567-.76 1.03 0 1.55.785 1.85 1.237l.038.06c.374.56.522.702.779.702.186 0 .428-.093.727-.367.296-.27.59-.666.864-1.135a11.4 11.4 0 0 0 1.096-2.66.667.667 0 0 1 .808-.485",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        ts = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M3 2a1 1 0 0 1 1 1v16a1 1 0 0 0 1 1h16a1 1 0 1 1 0 2H5a3 3 0 0 1-3-3V3a1 1 0 0 1 1-1m17.243 2.03a1 1 0 0 1 .727 1.213c-.27 1.078-.927 2.918-1.856 4.51-.465.797-1.024 1.579-1.674 2.172C16.795 12.516 15.971 13 15 13c-1.545 0-2.324-1.178-2.774-1.857l-.058-.088C11.608 10.214 11.386 10 11 10c-.253 0-.535.116-.868.484-.343.379-.666.947-.959 1.65-.496 1.19-.824 2.548-1.072 3.574l-.13.534a1 1 0 1 1-1.941-.485l.117-.482c.245-1.015.617-2.558 1.18-3.91.332-.796.76-1.603 1.323-2.224C9.222 8.509 10.003 8 11 8c1.545 0 2.324 1.178 2.774 1.857l.058.088c.56.841.782 1.055 1.168 1.055.279 0 .642-.14 1.09-.55.445-.406.886-1 1.296-1.704.821-1.407 1.413-3.067 1.644-3.989a1 1 0 0 1 1.212-.727",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        ss = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "20",
            height: "20",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 20 20",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M1.334 15.833V2.5A.833.833 0 1 1 3 2.5v13.333a.835.835 0 0 0 .833.834h13.333l.085.004a.833.833 0 0 1-.085 1.662H3.834a2.5 2.5 0 0 1-2.5-2.5m14.19-11.868a.834.834 0 0 1 1.618.404c-.225.9-.774 2.432-1.548 3.759-.387.663-.853 1.315-1.394 1.81-.538.49-1.224.895-2.033.895-1.345 0-1.995-1.072-2.36-1.621-.468-.7-.652-.879-.973-.879-.211 0-.446.097-.724.403-.286.316-.555.79-.799 1.376-.49 1.176-.784 2.548-1.003 3.423a.834.834 0 0 1-1.617-.404c.198-.792.53-2.336 1.081-3.66.277-.664.633-1.336 1.103-1.854.477-.526 1.128-.95 1.959-.95 1.344 0 1.993 1.072 2.359 1.621.467.7.652.879.973.879.233 0 .536-.117.91-.459.37-.338.737-.833 1.079-1.42.684-1.173 1.178-2.555 1.37-3.323"
            })
          })
        }))),
        is = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M4 2.667c.736 0 1.333.597 1.333 1.333v21.333a1.333 1.333 0 0 0 1.334 1.334H28a1.333 1.333 0 0 1 0 2.666H6.667a4 4 0 0 1-4-4V4c0-.736.597-1.333 1.333-1.333m22.99 2.706c.715.179 1.149.903.97 1.617-.36 1.438-1.236 3.892-2.475 6.015-.62 1.062-1.365 2.104-2.231 2.896-.86.786-1.96 1.432-3.254 1.432-2.06 0-3.099-1.57-3.698-2.476l-.078-.117c-.747-1.121-1.043-1.407-1.557-1.407-.338 0-.713.155-1.158.646-.458.505-.888 1.263-1.278 2.2-.661 1.587-1.1 3.397-1.43 4.765l-.174.713a1.333 1.333 0 0 1-2.587-.647q.071-.286.156-.643c.327-1.354.822-3.41 1.573-5.213.443-1.062 1.013-2.137 1.764-2.966.763-.842 1.804-1.521 3.134-1.521 2.06 0 3.099 1.57 3.698 2.476l.078.117c.747 1.122 1.042 1.407 1.557 1.407.372 0 .856-.187 1.454-.734.593-.542 1.18-1.333 1.728-2.271 1.094-1.877 1.884-4.09 2.191-5.319a1.333 1.333 0 0 1 1.617-.97",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        ds = (0, t.forwardRef)((({
          size: e = "SM",
          ...l
        }, a) => {
          const t = (0, o.v6)(l, {
            className: g({
              size: e
            })
          });
          return (0, r.jsxs)(r.Fragment, {
            children: ["SM" === e && (0, r.jsx)(rs, {
              ...t,
              ref: a
            }), "LG" === e && (0, r.jsx)(ts, {
              ...t,
              ref: a
            }), "MD" === e && (0, r.jsx)(ss, {
              ...t,
              ref: a
            }), "XL" === e && (0, r.jsx)(is, {
              ...t,
              ref: a
            })]
          })
        }));
      ds.displayName = "ChartSpline", ds.categories = ["charts"], ds.tags = ["statistics", "analytics", "diagram", "graph", "curve", "continuous", "smooth", "polynomial", "quadratic", "function", "interpolation"], ds.SM = rs, ds.LG = ts, ds.MD = ss, ds.XL = is;
      const os = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M14.006.722a.997.997 0 0 1 1.272 1.272l-4.332 12.663a1.002 1.002 0 0 1-1.874.049l-2.12-5.288a.67.67 0 0 0-.37-.37l-5.288-2.12a1 1 0 0 1 .048-1.874zm-1.64 1.97L2.623 6.025 7.077 7.81q.06.024.118.052zM8.137 8.804l5.17-5.168-3.333 9.74L8.19 8.92a2 2 0 0 0-.051-.117",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        ns = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M21.009 1.083a1.496 1.496 0 0 1 1.908 1.909L16.42 21.986a1.502 1.502 0 0 1-2.243.767 1.5 1.5 0 0 1-.568-.695l-3.18-7.93a1 1 0 0 0-.556-.556l-7.93-3.18a1.5 1.5 0 0 1 .072-2.81zm-2.461 2.955-14.612 5 6.68 2.678q.09.036.176.077zm-6.341 9.168 7.754-7.752-4.998 14.61-2.68-6.683a3 3 0 0 0-.076-.175",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        hs = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "20",
            height: "20",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 20 20",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "m18.018.836.175.025.17.05a1.25 1.25 0 0 1 .735 1.576l.001.001-5.417 15.834a1.252 1.252 0 0 1-2.343.06L8.69 11.772l-.035-.076a.84.84 0 0 0-.428-.387l-6.61-2.65a1.25 1.25 0 0 1-.783-1.192l.02-.189a1.25 1.25 0 0 1 .823-.96l.001-.002L17.511.901v.002c.164-.057.336-.08.507-.067m-7.848 10.17.066.145.001.001 2.231 5.567 4.166-12.175zM3.279 7.53l5.567 2.233.145.067 6.465-6.465z"
            })
          })
        }))),
        cs = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M28.011 1.444a1.995 1.995 0 0 1 2.545 2.545l-8.664 25.325a2 2 0 0 1-1.84 1.352 2 2 0 0 1-1.908-1.255l-4.24-10.574a1.34 1.34 0 0 0-.741-.74l-10.574-4.24a2.001 2.001 0 0 1 .096-3.749zm-3.28 3.94L5.248 12.05l8.906 3.57q.12.049.236.104zM16.276 17.61 26.615 7.272l-6.664 19.48-3.572-8.91v-.001a4 4 0 0 0-.103-.232",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        fs = (0, t.forwardRef)((({
          size: e = "SM",
          ...l
        }, a) => {
          const t = (0, o.v6)(l, {
            className: g({
              size: e
            })
          });
          return (0, r.jsxs)(r.Fragment, {
            children: ["SM" === e && (0, r.jsx)(os, {
              ...t,
              ref: a
            }), "LG" === e && (0, r.jsx)(ns, {
              ...t,
              ref: a
            }), "MD" === e && (0, r.jsx)(hs, {
              ...t,
              ref: a
            }), "XL" === e && (0, r.jsx)(cs, {
              ...t,
              ref: a
            })]
          })
        }));
      fs.displayName = "PaperPlane", fs.categories = ["mail", "communication", "connectivity"], fs.tags = ["email", "message", "mail", "paper airplane", "paper aeroplane", "submit", "send"], fs.SM = os, fs.LG = ns, fs.MD = hs, fs.XL = cs;
      const ws = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M6.893 2.007c.138.015.253.05.343.086a1.155 1.155 0 0 1 .552.412.95.95 0 0 1 .175.41l.002.01.004.016.001.008q.03.092.03.188v9.726a.6.6 0 0 1-.031.196l-.004.015q0 .005-.002.012l-.01.05a.95.95 0 0 1-.165.36 1.15 1.15 0 0 1-.552.412c-.09.034-.205.07-.343.085-.14.015-.266.004-.375-.016a1.14 1.14 0 0 1-.472-.198l-.003-.001-.01-.007a.7.7 0 0 1-.153-.107l-2.427-2.216-.07-.052-.033-.025-.031-.024h-.004l-.049-.005-.023-.002-.08-.009H1.461a.8.8 0 0 1-.212-.029l-.109-.025a3 3 0 0 1-.167-.04 1.3 1.3 0 0 1-.537-.288 1.1 1.1 0 0 1-.328-.509c-.015-.046-.03-.1-.038-.132l-.026-.086A.6.6 0 0 1 0 9.994V5.996q0-.12.046-.232l.022-.067q0-.007.004-.017c.009-.031.024-.085.039-.13.048-.146.134-.328.325-.5.181-.162.37-.241.537-.287.064-.018.128-.032.167-.04l.01-.002.099-.023a.8.8 0 0 1 .212-.029h1.727a2 2 0 0 0 .132-.018 1 1 0 0 0 .112-.08L5.88 2.337a.7.7 0 0 1 .163-.113l.002-.002.073-.046c.09-.054.22-.12.4-.152.11-.02.235-.031.375-.016M4.43 5.547l-.001.001-.002.002-.003.002-.01.009a3 3 0 0 1-.139.105c-.072.052-.216.15-.38.214-.165.064-.342.091-.433.103a3 3 0 0 1-.18.018h-.014l-.004.001H3.26l-.046.002H1.56l-.072.016-.004.01-.02.071v3.79l.022.078.003.012.071.016h1.656a1 1 0 0 1 .115.008l.083.01c.026.002.065.005.103.01.107.014.233.038.379.095a1.5 1.5 0 0 1 .41.24l.013.01q.028.023.048.035.046.03.086.067l2.086 1.905V3.623L4.452 5.528z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        vs = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M10.478 3.01c.19.022.348.077.472.129.126.053.274.127.42.245.15.12.256.251.339.373.14.208.197.402.226.54l.014.074.004.018.004.023.002.012q.04.139.041.282v14.588a1 1 0 0 1-.043.294l-.005.024-.003.017-.014.074a1.5 1.5 0 0 1-.226.54 1.7 1.7 0 0 1-.338.373 1.7 1.7 0 0 1-.421.245 1.7 1.7 0 0 1-.472.129 1.7 1.7 0 0 1-.515-.024 1.5 1.5 0 0 1-.55-.228l-.1-.069-.003-.002-.014-.01a1 1 0 0 1-.211-.16l-3.337-3.325-.097-.078-.045-.037-.043-.036h-.005l-.067-.008-.032-.004-.11-.012H3.01q-.149 0-.292-.044a2 2 0 0 0-.135-.034l-.014-.003c-.054-.013-.142-.033-.23-.06a1.75 1.75 0 0 1-.738-.432 1.7 1.7 0 0 1-.452-.763c-.02-.07-.04-.152-.052-.2l-.006-.026a1 1 0 0 0-.03-.102A1 1 0 0 1 1 14.99V8.994q0-.18.063-.349c.008-.022.017-.05.03-.1l.006-.026c.012-.046.032-.126.053-.195a1.749 1.749 0 0 1 1.185-1.18c.089-.027.177-.047.231-.06q.008 0 .014-.003c.062-.014.1-.023.135-.034a1 1 0 0 1 .292-.043h2.375a2 2 0 0 0 .181-.027 1 1 0 0 0 .146-.112l.008-.007 3.366-3.354a1 1 0 0 1 .224-.17q0 0 .003-.002l.1-.07c.123-.081.302-.18.55-.228.15-.03.323-.046.516-.024M7.091 8.322h-.002l-.001.002-.005.005-.014.012a3 3 0 0 1-.19.158 2.5 2.5 0 0 1-.524.321c-.226.096-.47.136-.595.154a4 4 0 0 1-.247.028h-.019l-.006.001h-.003q-.001 0 0 0-.032.003-.064.003H3.144l-.1.023-.004.017-.03.106v5.685l.032.117.004.018.098.023H5.42q.08 0 .158.012l.114.014.142.017a2 2 0 0 1 .987.422l.099.081.082.066q.063.046.118.101l2.868 2.857V5.435L7.121 8.292z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        xs = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "20",
            height: "20",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 20 20",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M7.97 2.526c.24-.048.489-.033.72.044l.1.036.095.044c.187.094.35.229.48.393l.061.085.056.09c.12.213.184.453.184.698v12.165l-.003.104a1.42 1.42 0 0 1-2.346.973l-.076-.072-2.82-2.82a.34.34 0 0 0-.239-.1H2.166A1.666 1.666 0 0 1 .5 12.5v-5a1.666 1.666 0 0 1 1.667-1.666h2.015a.34.34 0 0 0 .238-.098l.001-.002 2.82-2.82c.2-.198.453-.332.728-.387m-5.803 9.973H4.18a2 2 0 0 1 1.42.59l2.4 2.4V4.51l-2.4 2.4a2 2 0 0 1-1.42.587L2.167 7.5z"
            })
          })
        }))),
        gs = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M13.915 4.014c.252.03.462.102.627.171.167.07.363.17.559.328.197.159.338.334.448.497a2 2 0 0 1 .32.819l.004.023.005.031.004.017q.054.183.054.376v19.458q0 .193-.054.376l-.004.017-.005.031-.005.023a1.992 1.992 0 0 1-.32.82c-.109.162-.25.337-.447.497a2.3 2.3 0 0 1-.56.327c-.165.07-.374.142-.626.171-.256.03-.485.008-.684-.031a2 2 0 0 1-.73-.304c-.048-.032-.115-.08-.133-.093l-.004-.003-.02-.013a1.3 1.3 0 0 1-.28-.214l-4.43-4.434-.128-.104-.06-.05-.052-.043-.005-.004-.007-.001-.09-.01-.041-.005-.146-.017H3.998q-.199 0-.388-.058a3 3 0 0 0-.198-.05c-.072-.016-.189-.043-.306-.079a2.32 2.32 0 0 1-1.58-1.595c-.027-.094-.053-.203-.068-.266l-.009-.035a1 1 0 0 0-.039-.136q-.08-.22-.08-.456v-8c0-.158.028-.316.083-.465a1.4 1.4 0 0 0 .049-.168c.015-.062.042-.168.07-.26a2.32 2.32 0 0 1 1.573-1.574c.118-.036.235-.063.307-.08l.018-.004c.083-.02.133-.031.18-.046q.19-.057.388-.057H7.15a3 3 0 0 0 .24-.036 2 2 0 0 0 .194-.15l.01-.01 4.47-4.472q.125-.125.277-.213l.02-.014.005-.003c.018-.013.084-.061.132-.093.164-.109.401-.24.731-.304.2-.04.429-.062.685-.032m-4.498 7.084-.001.002-.003.002-.006.006-.019.016a4 4 0 0 1-.253.212c-.132.103-.395.3-.694.428-.3.128-.625.181-.791.205a5 5 0 0 1-.328.036l-.025.002H7.29l-.004.001h-.001.001-.002l-.083.003H4.176l-.132.032-.006.021-.038.142v7.583q.025.089.04.156l.007.024.13.03H7.2q.105 0 .21.017a3 3 0 0 0 .15.019l.19.022a2.63 2.63 0 0 1 1.31.563c.045.036.098.08.131.109l.023.019.087.069q.084.06.157.134l3.808 3.811V7.248L9.458 11.06z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        js = (0, t.forwardRef)((({
          size: e = "SM",
          ...l
        }, a) => {
          const t = (0, o.v6)(l, {
            className: g({
              size: e
            })
          });
          return (0, r.jsxs)(r.Fragment, {
            children: ["SM" === e && (0, r.jsx)(ws, {
              ...t,
              ref: a
            }), "LG" === e && (0, r.jsx)(vs, {
              ...t,
              ref: a
            }), "MD" === e && (0, r.jsx)(xs, {
              ...t,
              ref: a
            }), "XL" === e && (0, r.jsx)(gs, {
              ...t,
              ref: a
            })]
          })
        }));
      js.displayName = "Volume", js.categories = ["connectivity", "communication", "multimedia"], js.tags = ["music", "sound", "mute", "speaker"], js.SM = ws, js.LG = vs, js.MD = xs, js.XL = gs;
      const ms = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M7.236 2.093a1.4 1.4 0 0 0-.343-.086 1.3 1.3 0 0 0-.375.016 1.14 1.14 0 0 0-.473.198l-.002.002-.011.007a.7.7 0 0 0-.152.106L3.432 4.572l-.006.004a1 1 0 0 1-.106.075 1 1 0 0 1-.132.018H1.461a.8.8 0 0 0-.212.029l-.099.023-.01.002c-.04.008-.103.022-.167.04a1.3 1.3 0 0 0-.537.288 1.13 1.13 0 0 0-.325.498c-.015.046-.03.1-.039.13l-.004.018-.022.067A.6.6 0 0 0 0 5.996v3.998q0 .118.044.228a1 1 0 0 1 .021.068l.005.018c.008.031.023.086.038.132.047.148.133.334.328.51.181.162.37.242.537.288.064.018.128.031.167.04l.01.001.099.023q.104.03.212.029h1.702l.08.009.023.002.049.005h.004l.003.003.028.021.033.025.07.052 2.427 2.216a.7.7 0 0 0 .153.107l.01.007.003.001.072.046c.09.055.22.12.4.152.11.02.235.031.375.016.138-.015.253-.05.343-.085a1.154 1.154 0 0 0 .552-.412.95.95 0 0 0 .175-.41l.002-.012.004-.015.001-.008a.6.6 0 0 0 .03-.188V3.137a.6.6 0 0 0-.03-.188l-.001-.008-.004-.015-.002-.012-.01-.05a.95.95 0 0 0-.165-.36 1.16 1.16 0 0 0-.552-.411M4.43 5.548l.023-.02 2.086-1.905v8.754l-2.086-1.905a1 1 0 0 0-.086-.067l-.048-.035-.012-.01-.072-.053a1.5 1.5 0 0 0-.34-.187 1.6 1.6 0 0 0-.378-.095c-.038-.005-.077-.008-.103-.01l-.013-.002-.07-.008a1 1 0 0 0-.115-.008H1.56l-.071-.016-.003-.012-.023-.078v-3.79q.014-.04.021-.07l.004-.011.072-.016h1.656q.023 0 .046-.002h.007L3.282 6a3 3 0 0 0 .18-.018c.09-.012.268-.039.433-.103s.308-.162.38-.214a3 3 0 0 0 .139-.105l.01-.009.003-.002zM11.2 5.6a.667.667 0 1 0-1.067.8 2.67 2.67 0 0 1 0 3.2.667.667 0 1 0 1.067.8 4 4 0 0 0 0-4.8",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        ps = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M10.95 3.139a1.7 1.7 0 0 0-.472-.129 1.7 1.7 0 0 0-.516.024 1.5 1.5 0 0 0-.55.228l-.1.07-.003.002-.015.01a1 1 0 0 0-.21.16L5.72 6.858l-.008.007a2 2 0 0 1-.146.112 1 1 0 0 1-.181.027H3.009a1 1 0 0 0-.292.043c-.035.01-.073.02-.135.034l-.014.003a4 4 0 0 0-.23.06 1.75 1.75 0 0 0-1.186 1.18l-.053.195-.006.026c-.013.05-.022.078-.03.1a1 1 0 0 0-.063.35v5.996q0 .176.06.342c.009.022.017.05.03.102l.006.026c.012.048.031.13.052.2a1.75 1.75 0 0 0 1.19 1.196c.088.026.176.046.23.059l.014.003c.062.014.1.024.135.034q.143.044.292.044h2.34q.065.008.11.012l.032.004.067.008h.005l.004.003.04.033.044.037.097.078 3.337 3.324q.095.095.21.16-.002 0 0 0l.015.01.003.003.1.07c.123.08.302.179.55.227.15.03.322.046.515.024.19-.022.348-.077.472-.129.126-.053.274-.127.421-.245.149-.12.255-.251.338-.373a1.5 1.5 0 0 0 .226-.54l.014-.074.004-.017.004-.024.002-.012a1 1 0 0 0 .041-.282V4.706a1 1 0 0 0-.04-.282l-.003-.012-.005-.023-.003-.018-.014-.074a1.5 1.5 0 0 0-.226-.54 1.7 1.7 0 0 0-.338-.373 1.7 1.7 0 0 0-.42-.245M7.09 8.323v-.001l.031-.03L9.99 5.435v13.13l-2.868-2.857a1 1 0 0 0-.118-.1l-.065-.052-.017-.015c-.026-.02-.065-.054-.1-.081a1.97 1.97 0 0 0-.986-.422l-.142-.017-.018-.002-.096-.012a1 1 0 0 0-.158-.012H3.144l-.098-.023-.004-.018-.031-.117V9.152l.029-.106.004-.017.1-.023H5.42l.062-.002h.005l.006-.001.019-.001a4 4 0 0 0 .247-.028c.125-.018.37-.058.595-.154a2.5 2.5 0 0 0 .523-.32 4 4 0 0 0 .191-.159l.014-.012.005-.005zm9.71.077a1 1 0 0 0-1.6 1.2 4 4 0 0 1 0 4.8 1 1 0 0 0 1.6 1.2 6 6 0 0 0 0-7.2",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        us = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "20",
            height: "20",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 20 20",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M8.636 2.526c.24-.048.49-.033.722.044l.098.036.096.044c.187.094.35.229.48.393l.061.085.056.09c.12.213.184.453.184.698v12.165l-.004.104a1.421 1.421 0 0 1-2.345.973l-.077-.072-2.82-2.82a.34.34 0 0 0-.238-.1H2.833A1.666 1.666 0 0 1 1.167 12.5v-5a1.666 1.666 0 0 1 1.666-1.666H4.85a.34.34 0 0 0 .238-.098l.001-.002 2.82-2.82c.2-.198.453-.332.728-.387m5.031 7.473c0-.72-.234-1.423-.667-2l1.333-1a5 5 0 0 1 0 6A.833.833 0 1 1 13 12a3.33 3.33 0 0 0 .667-2m-.5-3.166A.833.833 0 0 1 14.333 7L13 8a.833.833 0 0 1 .167-1.166M2.833 12.5h2.014a2 2 0 0 1 1.42.59l2.4 2.4V4.51l-2.4 2.4a2 2 0 0 1-1.42.587L2.833 7.5z"
            })
          })
        }))),
        Ms = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M14.542 4.185a2.3 2.3 0 0 0-.626-.171 2.2 2.2 0 0 0-.686.032 2 2 0 0 0-.73.304c-.048.032-.115.08-.133.093l-.004.003-.02.014q-.153.088-.278.213l-4.47 4.473-.01.01a3 3 0 0 1-.193.149 1.6 1.6 0 0 1-.241.035H3.998q-.198 0-.388.058a3 3 0 0 1-.18.046l-.018.004a5 5 0 0 0-.306.08 2.32 2.32 0 0 0-1.573 1.574c-.028.092-.055.198-.07.26l-.01.034a1 1 0 0 1-.04.134 1.3 1.3 0 0 0-.083.466v7.999c0 .155.027.31.08.456.011.03.022.067.04.136l.008.035c.015.063.041.172.069.266a2.32 2.32 0 0 0 1.58 1.595c.116.036.233.063.305.08l.018.004c.083.019.133.03.18.045q.19.058.388.058h3.107l.146.017.042.005.09.01h.006l.005.005.052.043.06.05q.054.045.129.104l4.43 4.434q.127.125.28.214l.019.013.004.003.133.093c.163.108.4.24.73.303.199.04.428.062.684.032.252-.03.462-.102.627-.171.167-.07.364-.17.559-.328a2.2 2.2 0 0 0 .448-.497 2 2 0 0 0 .32-.819l.004-.023.006-.031.003-.017q.054-.184.054-.376V6.276q0-.192-.054-.376l-.003-.017-.006-.03-.004-.024-.02-.1a2 2 0 0 0-.3-.72 2.2 2.2 0 0 0-.448-.496 2.3 2.3 0 0 0-.56-.328M9.416 11.1l.001-.002.041-.039 3.808-3.81v17.513l-3.808-3.81a1.3 1.3 0 0 0-.157-.135l-.087-.07-.023-.018c-.033-.028-.086-.073-.131-.109a2.6 2.6 0 0 0-1.31-.563l-.189-.022-.023-.003-.128-.016A1.3 1.3 0 0 0 7.2 20H4.178l-.13-.031-.006-.024-.04-.156v-7.583l.038-.142.005-.021q.056-.014.133-.032H7.2q.041 0 .082-.003h.014l.025-.003a4 4 0 0 0 .328-.036c.166-.024.49-.077.791-.205.3-.128.563-.325.695-.428a5 5 0 0 0 .253-.212l.018-.016.006-.006zm12.984.1a1.333 1.333 0 0 0-2.133 1.6 5.33 5.33 0 0 1 0 6.4 1.333 1.333 0 0 0 2.133 1.6 8 8 0 0 0 0-9.6",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Rs = (0, t.forwardRef)((({
          size: e = "SM",
          ...l
        }, a) => {
          const t = (0, o.v6)(l, {
            className: g({
              size: e
            })
          });
          return (0, r.jsxs)(r.Fragment, {
            children: ["SM" === e && (0, r.jsx)(ms, {
              ...t,
              ref: a
            }), "LG" === e && (0, r.jsx)(ps, {
              ...t,
              ref: a
            }), "MD" === e && (0, r.jsx)(us, {
              ...t,
              ref: a
            }), "XL" === e && (0, r.jsx)(Ms, {
              ...t,
              ref: a
            })]
          })
        }));
      Rs.displayName = "Volume1", Rs.categories = ["connectivity", "communication", "multimedia"], Rs.tags = ["music", "sound", "speaker", "control", "volume", "low"], Rs.SM = ms, Rs.LG = ps, Rs.MD = us, Rs.XL = Ms;
      const bs = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M6.894 2.007c.137.015.252.051.342.086a1.155 1.155 0 0 1 .552.412.95.95 0 0 1 .175.41q0 .006.003.01l.003.017q0 .006.002.007.03.092.029.189v9.724q0 .097-.03.189l-.001.008-.003.015-.003.012-.01.05a.95.95 0 0 1-.165.36 1.16 1.16 0 0 1-.552.411c-.09.035-.205.072-.342.086-.14.015-.266.004-.375-.015a1.15 1.15 0 0 1-.473-.199l-.002-.002-.01-.005a.7.7 0 0 1-.154-.108l-2.427-2.216-.103-.077-.029-.021-.003-.002-.003-.001-.05-.005-.022-.002-.08-.009H1.461a.8.8 0 0 1-.212-.028l-.099-.024q-.004 0-.01-.002a3 3 0 0 1-.167-.04 1.3 1.3 0 0 1-.536-.288 1.13 1.13 0 0 1-.33-.508c-.015-.047-.028-.102-.037-.133l-.005-.018a1 1 0 0 0-.021-.068A.6.6 0 0 1 0 9.994V5.996q0-.12.046-.232l.021-.068.005-.016.04-.13c.048-.145.133-.328.325-.5.18-.161.37-.241.536-.287.064-.018.128-.032.168-.04l.01-.002c.045-.01.072-.015.098-.023a.8.8 0 0 1 .212-.029h1.727a2 2 0 0 0 .132-.018l.055-.036q.031-.022.05-.039l.007-.005L5.88 2.336a.7.7 0 0 1 .151-.106l.012-.007.002-.001.073-.047c.09-.054.22-.12.4-.152.11-.02.235-.031.376-.016m5.544 1.28a.67.67 0 0 1 .838-.086l.105.085.225.238a6.667 6.667 0 0 1-.225 9.191.668.668 0 0 1-.944-.943 5.336 5.336 0 0 0 .182-7.353l-.181-.19-.086-.104a.67.67 0 0 1 .085-.839M4.452 5.527l-.022.02-.002.002-.004.003-.01.008-.032.026-.107.08c-.072.05-.216.15-.38.213-.165.064-.342.09-.433.103l-.137.015-.043.003-.013.001H3.26l-.045.002H1.56l-.074.016-.003.01-.02.072v3.79q.013.044.021.077l.004.013.072.014h1.656a1 1 0 0 1 .114.009l.07.008h.013l.104.012c.107.014.232.038.378.095.15.059.256.127.338.187l.073.054q.008.006.012.01l.048.034q.046.03.086.067l2.085 1.905V3.623zm5.815-.061a.67.67 0 0 1 .841.034l.092.099.184.266A4 4 0 0 1 11.2 10.4a.668.668 0 0 1-1.066-.8 2.67 2.67 0 0 0 .122-3.023l-.122-.176-.07-.117a.67.67 0 0 1 .203-.817"
            })
          })
        }))),
        Ls = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M10.46 3.01c.19.022.346.077.47.13.125.052.272.126.418.244.148.12.255.252.337.373a1.5 1.5 0 0 1 .24.615l.002.017.005.023.002.012q.04.139.041.282v14.588q0 .144-.04.282l-.003.012-.005.024-.002.017-.015.075c-.03.138-.085.332-.225.54-.082.121-.189.252-.337.372a1.7 1.7 0 0 1-.419.246 1.7 1.7 0 0 1-.47.128 1.7 1.7 0 0 1-.512-.024 1.5 1.5 0 0 1-.547-.227l-.1-.07-.003-.003q-.022-.014-.014-.01a1 1 0 0 1-.21-.16l-3.321-3.324-.097-.078-.045-.037-.039-.032-.004-.004h-.005l-.066-.008q-.014-.001-.032-.004l-.109-.012h-2.33a1 1 0 0 1-.29-.043 2 2 0 0 0-.136-.035l-.013-.003c-.055-.012-.142-.032-.23-.06a1.74 1.74 0 0 1-1.183-1.195 4 4 0 0 1-.052-.2l-.006-.026a1 1 0 0 0-.03-.101q-.06-.167-.06-.342V8.995q0-.181.063-.35a1 1 0 0 0 .03-.1l.006-.025c.011-.046.031-.127.053-.196a1.741 1.741 0 0 1 1.18-1.18 4 4 0 0 1 .229-.06l.013-.002c.063-.015.1-.024.136-.035a1 1 0 0 1 .29-.043H5.39q.036-.004.09-.01.067-.011.09-.017a1 1 0 0 0 .146-.112l.007-.007 3.351-3.354a1 1 0 0 1 .224-.17l.003-.002.1-.07c.122-.081.3-.179.547-.227.15-.03.322-.047.514-.025m8.197 1.92a1 1 0 0 1 1.414 0 10 10 0 0 1 0 14.142 1 1 0 0 1-1.414-1.415 8 8 0 0 0 1.734-8.718 8 8 0 0 0-1.734-2.596 1 1 0 0 1 0-1.414M7.119 8.291l-.031.03-.007.007-.015.012-.044.04c-.036.03-.086.072-.145.118a2.4 2.4 0 0 1-.52.322 2.4 2.4 0 0 1-.594.153 4 4 0 0 1-.246.027l-.018.002h-.011q-.03.003-.061.002H3.159l-.1.025-.004.015q-.011.047-.028.107v5.685l.03.117.005.017.097.024h2.268q.078 0 .156.012c.028.005.056.009.096.013l.017.001c.036.004.09.01.142.018a1.97 1.97 0 0 1 1.08.502l.017.015.066.052q.062.045.118.1l2.854 2.857V5.435zm8.281-.091a1 1 0 0 1 1.4.2 6 6 0 0 1 0 7.2 1 1 0 0 1-1.6-1.2 4 4 0 0 0 0-4.801 1 1 0 0 1 .2-1.4"
            })
          })
        }))),
        zs = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "20",
            height: "20",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 20 20",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M8.302 2.526c.241-.048.49-.033.722.044l.099.036.096.044c.186.094.35.229.479.393l.062.085.055.09c.12.213.184.453.185.698v12.165l-.004.104a1.42 1.42 0 0 1-2.346.973l-.076-.072-2.82-2.82a.34.34 0 0 0-.239-.1H2.5A1.666 1.666 0 0 1 .834 12.5v-5A1.666 1.666 0 0 1 2.5 5.833h2.015a.34.34 0 0 0 .239-.098v-.002l2.821-2.82c.199-.198.452-.332.727-.387M17.5 9.999a6.67 6.67 0 0 0-1.727-4.476l-.225-.237-.058-.064a.834.834 0 0 1 1.173-1.172l.063.057.283.297a8.33 8.33 0 0 1 1.523 8.785 8.3 8.3 0 0 1-1.806 2.703l-.063.058a.833.833 0 0 1-1.115-1.236l.225-.238A6.67 6.67 0 0 0 17.5 9.999m-4.166 0c0-.72-.235-1.423-.667-2L14 7a5 5 0 0 1 0 6 .833.833 0 1 1-1.333-1 3.33 3.33 0 0 0 .667-2m-.5-3.166A.833.833 0 0 1 14 7l-1.333 1a.833.833 0 0 1 .167-1.166M2.5 12.5h2.013a2 2 0 0 1 1.42.59l2.4 2.4V4.51l-2.4 2.4a2 2 0 0 1-1.42.587L2.5 7.5z"
            })
          })
        }))),
        Cs = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M14.542 4.185a2.3 2.3 0 0 0-.626-.171 2.2 2.2 0 0 0-.686.032 2 2 0 0 0-.73.304c-.048.032-.115.08-.133.093l-.004.003-.02.014q-.153.088-.278.213l-4.47 4.473-.01.01a3 3 0 0 1-.193.149 1.6 1.6 0 0 1-.241.035H3.998q-.198 0-.388.058a3 3 0 0 1-.18.046l-.018.004a5 5 0 0 0-.306.08 2.32 2.32 0 0 0-1.573 1.574c-.028.092-.055.198-.07.26l-.01.034a1 1 0 0 1-.04.134 1.3 1.3 0 0 0-.083.466v7.999c0 .155.027.31.08.456.011.03.022.067.04.136l.008.035c.015.063.041.172.069.266a2.32 2.32 0 0 0 1.58 1.595c.116.036.233.063.305.08l.018.004c.083.019.133.03.18.045q.19.058.388.058h3.107l.146.017.042.005.09.01h.006l.005.005.052.043.06.05q.054.045.129.104l4.43 4.434a1.3 1.3 0 0 0 .299.227l.004.003.133.093c.163.108.4.24.73.303.199.04.428.062.684.032.252-.03.462-.102.627-.171.167-.07.364-.17.559-.328a2.2 2.2 0 0 0 .448-.497 2 2 0 0 0 .32-.819l.004-.023.006-.031.003-.017q.054-.184.054-.376V6.276q0-.192-.054-.376l-.003-.017-.006-.03-.004-.024-.02-.1a2 2 0 0 0-.3-.72 2.2 2.2 0 0 0-.448-.496 2.3 2.3 0 0 0-.56-.328m-2.199 23.366.002.001zM9.416 11.1l.001-.002.041-.039 3.808-3.81v17.513l-3.808-3.81a1.3 1.3 0 0 0-.157-.135l-.087-.07-.023-.018c-.033-.028-.086-.073-.131-.109a2.6 2.6 0 0 0-1.31-.563l-.189-.022-.023-.003-.128-.016A1.3 1.3 0 0 0 7.2 20H4.178l-.13-.031-.006-.024-.04-.156v-7.583l.038-.142.005-.021q.056-.014.133-.032H7.2q.041 0 .082-.003h.014l.025-.003a4 4 0 0 0 .328-.036c.166-.024.49-.077.791-.205.3-.128.563-.325.695-.428a5 5 0 0 0 .253-.212l.018-.016.006-.006zm15.46-4.528c.52-.52 1.365-.52 1.886 0a13.334 13.334 0 0 1 0 18.856 1.333 1.333 0 0 1-1.886-1.886 10.666 10.666 0 0 0 0-15.085 1.333 1.333 0 0 1 0-1.885m-4.343 4.361a1.333 1.333 0 0 1 1.867.267 8 8 0 0 1 0 9.6 1.333 1.333 0 0 1-2.133-1.6 5.33 5.33 0 0 0 0-6.4 1.333 1.333 0 0 1 .267-1.867",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        As = (0, t.forwardRef)((({
          size: e = "SM",
          ...l
        }, a) => {
          const t = (0, o.v6)(l, {
            className: g({
              size: e
            })
          });
          return (0, r.jsxs)(r.Fragment, {
            children: ["SM" === e && (0, r.jsx)(bs, {
              ...t,
              ref: a
            }), "LG" === e && (0, r.jsx)(Ls, {
              ...t,
              ref: a
            }), "MD" === e && (0, r.jsx)(zs, {
              ...t,
              ref: a
            }), "XL" === e && (0, r.jsx)(Cs, {
              ...t,
              ref: a
            })]
          })
        }));
      As.displayName = "Volume2", As.categories = ["connectivity", "communication", "multimedia"], As.tags = ["music", "sound", "speaker", "control", "volume", "high"], As.SM = bs, As.LG = Ls, As.MD = zs, As.XL = Cs;
      const Hs = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M6.894 2.007c.137.015.252.051.342.086a1.155 1.155 0 0 1 .552.412.95.95 0 0 1 .175.41q0 .006.003.01l.003.017q0 .006.002.007.03.092.029.189v9.724q0 .097-.03.189l-.001.008-.003.015-.003.012-.01.05a.95.95 0 0 1-.165.36 1.16 1.16 0 0 1-.552.411c-.09.035-.205.072-.342.086-.14.015-.266.004-.375-.015a1.15 1.15 0 0 1-.473-.199l-.002-.002-.01-.005a.7.7 0 0 1-.154-.108l-2.427-2.216-.103-.077-.029-.021-.003-.002-.003-.001-.05-.005-.022-.002-.08-.009H1.461a.8.8 0 0 1-.212-.028l-.099-.024q-.004 0-.01-.002a3 3 0 0 1-.167-.04 1.3 1.3 0 0 1-.536-.288 1.13 1.13 0 0 1-.33-.508c-.015-.047-.028-.102-.037-.133l-.005-.018a1 1 0 0 0-.021-.068A.6.6 0 0 1 0 9.994V5.996q0-.12.046-.232l.021-.068.005-.016.04-.13c.048-.145.133-.328.325-.5.18-.161.37-.241.536-.287.064-.018.128-.032.168-.04l.01-.002c.045-.01.072-.015.098-.023a.8.8 0 0 1 .212-.029h1.727a2 2 0 0 0 .132-.018l.055-.036q.031-.022.05-.039l.007-.005L5.88 2.336a.7.7 0 0 1 .151-.106l.012-.007.002-.001.073-.047c.09-.054.22-.12.4-.152.11-.02.235-.031.376-.016M4.452 5.528l-.022.02-.002.002-.004.003-.01.008-.032.026-.107.08c-.072.05-.216.15-.38.213-.165.064-.342.09-.433.103l-.137.015-.043.003-.013.001H3.26l-.045.002H1.56l-.074.016-.003.01-.02.072v3.79q.013.044.021.077l.004.013.072.014h1.656a1 1 0 0 1 .114.009l.07.008h.013l.104.012c.107.014.232.038.378.095.15.059.256.127.338.187l.073.054q.008.006.012.01l.048.034q.046.03.086.067l2.085 1.905V3.623zm9.743 0a.667.667 0 0 1 .944.944L13.61 8l1.529 1.528.085.105a.668.668 0 0 1-.924.924l-.105-.085-1.528-1.529-1.528 1.529a.668.668 0 0 1-.944-.944L11.724 8l-1.529-1.528-.085-.105a.667.667 0 0 1 .924-.924l.105.085 1.528 1.529z"
            })
          })
        }))),
        Vs = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M10.46 3.01c.189.023.346.076.47.128.125.053.272.128.418.246.148.12.255.25.337.373a1.5 1.5 0 0 1 .24.614l.002.017.005.024.002.012q.04.137.041.282v14.588q0 .143-.04.282l-.003.013-.005.022-.002.018-.015.074c-.03.138-.085.332-.225.54a1.7 1.7 0 0 1-.337.373 1.7 1.7 0 0 1-.419.245 1.7 1.7 0 0 1-.47.129 1.6 1.6 0 0 1-.512-.024 1.5 1.5 0 0 1-.547-.228l-.103-.071-.014-.01a1 1 0 0 1-.21-.161l-3.321-3.324-.097-.078-.045-.038-.043-.035h-.005l-.066-.009-.032-.003-.109-.012h-2.33q-.148-.001-.29-.044a2 2 0 0 0-.136-.034l-.013-.003a4 4 0 0 1-.23-.06 1.74 1.74 0 0 1-1.183-1.196c-.02-.07-.04-.151-.052-.198l-.006-.027a1 1 0 0 0-.03-.102q-.06-.167-.06-.342V8.994q0-.18.063-.349a1 1 0 0 0 .03-.1l.006-.026c.011-.046.032-.126.053-.195a1.739 1.739 0 0 1 1.18-1.18 4 4 0 0 1 .229-.06l.013-.003.136-.034q.142-.043.29-.043H5.39l.09-.011q.067-.01.09-.017.02-.011.075-.053l.07-.058.008-.008 3.351-3.353a1 1 0 0 1 .224-.17l.003-.002c.013-.01.063-.046.1-.07.122-.081.3-.18.547-.228.15-.03.322-.046.514-.024M7.12 8.292l-.031.029-.001.002h-.002l-.004.006-.015.012-.044.039a4 4 0 0 1-.145.12 2.5 2.5 0 0 1-.52.32 2.4 2.4 0 0 1-.594.154 4 4 0 0 1-.246.028H5.5l-.007.002h-.004l-.061.002H3.159l-.1.023-.004.017-.028.105v5.686l.03.116.005.018.097.024h2.268q.078 0 .156.013l.096.011.017.002.142.017a2 2 0 0 1 .982.422l.099.08.016.015c.028.023.047.039.066.052q.062.045.118.1l2.854 2.858V5.435zm14.174 0a1 1 0 0 1 1.414 1.415L20.414 12l2.293 2.293.068.076a1 1 0 0 1-1.406 1.406l-.076-.068L19 13.414l-2.293 2.293a1 1 0 0 1-1.414-1.414L17.586 12l-2.293-2.293a1 1 0 0 1 1.414-1.414L19 10.586z"
            })
          })
        }))),
        Is = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "20",
            height: "20",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 20 20",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M7.969 2.526c.24-.048.49-.033.722.044l.098.036.096.044c.187.094.35.229.48.393l.061.085.056.09c.12.213.184.453.184.698v12.165l-.004.104a1.42 1.42 0 0 1-2.345.973l-.077-.072-2.82-2.82a.34.34 0 0 0-.238-.1H2.166A1.666 1.666 0 0 1 .5 12.5v-5a1.666 1.666 0 0 1 1.666-1.666h2.016a.34.34 0 0 0 .238-.098l.001-.002 2.82-2.82c.2-.198.453-.332.728-.387m5.62 10.563a.834.834 0 0 1-1.179-1.178zm3.885-6.236a.834.834 0 0 1 1.115 1.236L16.678 10l1.911 1.912.058.063a.834.834 0 0 1-1.173 1.172l-.064-.057-1.91-1.91-1.91 1.91-.59-.59-.59-.588 1.91-1.912-1.91-1.91-.056-.063a.833.833 0 0 1 1.172-1.173l.063.058 1.91 1.91 1.911-1.91zM2.166 12.5H4.18a2 2 0 0 1 1.42.588l2.4 2.4V4.512l-2.4 2.4a2 2 0 0 1-1.42.587L2.166 7.5z"
            })
          })
        }))),
        Bs = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M13.916 4.014c.251.03.461.102.626.172.167.07.363.17.558.327.198.16.34.334.449.497a2 2 0 0 1 .32.82l.004.023.006.03.003.016q.053.186.053.376v19.46q0 .191-.053.375l-.003.017-.006.031-.004.024c-.004.024-.011.06-.02.098a2 2 0 0 1-.3.72c-.11.162-.252.338-.449.497a2.3 2.3 0 0 1-.558.328c-.165.07-.375.142-.627.171-.256.03-.486.008-.685-.031a2 2 0 0 1-.73-.304l-.132-.093q-.003 0-.004-.003l-.02-.013a1.3 1.3 0 0 1-.279-.214l-4.43-4.435a5 5 0 0 1-.189-.153l-.052-.043-.006-.004h-.005l-.09-.012-.042-.003-.146-.018H3.998q-.199 0-.388-.058a3 3 0 0 0-.18-.046l-.018-.003a5 5 0 0 1-.306-.08 2.32 2.32 0 0 1-1.58-1.595c-.027-.094-.053-.203-.068-.266l-.009-.035a1 1 0 0 0-.04-.136q-.079-.22-.08-.456v-8q.001-.24.085-.465c.01-.03.021-.066.039-.133l.009-.035c.015-.061.042-.168.07-.26a2.322 2.322 0 0 1 1.574-1.574c.117-.036.234-.063.306-.08l.018-.004c.083-.019.133-.031.18-.046q.19-.057.388-.057H7.15a3 3 0 0 0 .24-.036q.026-.017.1-.074l.094-.076.01-.01 4.47-4.472q.125-.125.277-.213l.021-.015.004-.003.133-.092c.163-.109.4-.24.73-.304.2-.04.43-.062.686-.032M9.458 11.06l-.041.039h-.001l-.003.003-.006.005-.019.017-.058.052a5 5 0 0 1-.194.16c-.132.103-.395.3-.695.428a3.3 3.3 0 0 1-.79.205 5 5 0 0 1-.329.037h-.024l-.01.002h-.005l-.082.003H4.177l-.133.032-.006.022-.038.141v7.583q.024.087.04.155l.007.025.13.031H7.2q.105 0 .209.017c.037.006.074.01.128.015l.023.003c.048.005.12.013.189.023a2.63 2.63 0 0 1 1.31.562c.044.036.098.08.131.109q.014.01.023.02c.036.03.062.05.087.067q.083.061.157.135l3.807 3.812V7.248zm18.932-.002a1.332 1.332 0 1 1 1.885 1.884L27.218 16l3.057 3.058.092.1a1.333 1.333 0 0 1-1.876 1.876l-.1-.092-3.058-3.057-3.058 3.057a1.332 1.332 0 1 1-1.885-1.884L23.448 16l-3.058-3.058a1.333 1.333 0 1 1 1.885-1.884l3.058 3.057z"
            })
          })
        }))),
        Ss = (0, t.forwardRef)((({
          size: e = "SM",
          ...l
        }, a) => {
          const t = (0, o.v6)(l, {
            className: g({
              size: e
            })
          });
          return (0, r.jsxs)(r.Fragment, {
            children: ["SM" === e && (0, r.jsx)(Hs, {
              ...t,
              ref: a
            }), "LG" === e && (0, r.jsx)(Vs, {
              ...t,
              ref: a
            }), "MD" === e && (0, r.jsx)(Is, {
              ...t,
              ref: a
            }), "XL" === e && (0, r.jsx)(Bs, {
              ...t,
              ref: a
            })]
          })
        }));
      Ss.displayName = "VolumeX", Ss.categories = ["connectivity", "communication", "multimedia"], Ss.tags = ["music", "sound", "mute", "speaker", "control", "volume"], Ss.SM = Hs, Ss.LG = Vs, Ss.MD = Is, Ss.XL = Bs;
      const ys = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M8 2a5.333 5.333 0 0 0-5.292 4.667H4a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-.667a2 2 0 0 1-2-2V7.333a6.667 6.667 0 0 1 13.334 0V12a3.334 3.334 0 0 1-3.334 3.333H8A.667.667 0 0 1 8 14h3.333a2 2 0 0 0 1.914-1.42 2 2 0 0 1-.58.086H12a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h1.291A5.336 5.336 0 0 0 8 2m5.333 6H12a.667.667 0 0 0-.667.666v2a.667.667 0 0 0 .667.667h.667a.667.667 0 0 0 .666-.667zM2.667 8v2.666a.667.667 0 0 0 .666.667H4a.667.667 0 0 0 .667-.667v-2A.667.667 0 0 0 4 8z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Ds = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M12 3a8 8 0 0 0-7.937 7H6a3 3 0 0 1 3 3v3a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-5a10 10 0 0 1 20 0v7a5 5 0 0 1-5 5h-5a1 1 0 1 1 0-2h5a3 3 0 0 0 2.87-2.13c-.279.086-.572.13-.87.13h-1a3 3 0 0 1-3-3v-3a3 3 0 0 1 3-3h1.937A8 8 0 0 0 12 3m8 9h-2a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1zM4 12v4a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Ns = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "20",
            height: "20",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 20 20",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M5.5 10.834A.835.835 0 0 0 4.667 10H3v3.334a.834.834 0 0 0 .834.832h.833a.833.833 0 0 0 .833-.832zm1.667 2.5a2.5 2.5 0 0 1-2.5 2.5h-.833a2.5 2.5 0 0 1-2.5-2.5V9.167a8.335 8.335 0 0 1 5.143-7.7 8.3 8.3 0 0 1 3.19-.634l.41.01a8.34 8.34 0 0 1 7.289 5.134A8.3 8.3 0 0 1 18 9.167V15a4.167 4.167 0 0 1-4.166 4.166H9.667a.833.833 0 0 1 0-1.666h4.167a2.5 2.5 0 0 0 2.391-1.775 2.5 2.5 0 0 1-.725.109h-.833a2.5 2.5 0 0 1-2.5-2.5v-2.5a2.5 2.5 0 0 1 2.5-2.5h1.612A6.667 6.667 0 0 0 3.507 6.616a6.7 6.7 0 0 0-.453 1.718h1.613a2.5 2.5 0 0 1 2.5 2.5zm6.667 0a.833.833 0 0 0 .833.832h.833a.835.835 0 0 0 .834-.832V10h-1.667a.833.833 0 0 0-.833.834z"
            })
          })
        }))),
        Gs = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M16 4a10.67 10.67 0 0 0-10.583 9.334H8a4 4 0 0 1 4 4v4a4 4 0 0 1-4 4H6.667a4 4 0 0 1-4-4v-6.667a13.333 13.333 0 0 1 26.666 0V24a6.667 6.667 0 0 1-6.666 6.667H16A1.333 1.333 0 1 1 16 28h6.667a4 4 0 0 0 3.827-2.839 4 4 0 0 1-1.16.172H24a4 4 0 0 1-4-4v-4a4 4 0 0 1 4-4h2.583A10.67 10.67 0 0 0 16 4m10.667 12H24a1.333 1.333 0 0 0-1.333 1.334v4A1.333 1.333 0 0 0 24 22.667h1.333a1.333 1.333 0 0 0 1.334-1.334zM5.333 16v5.334a1.333 1.333 0 0 0 1.334 1.333H8a1.333 1.333 0 0 0 1.333-1.334v-4A1.333 1.333 0 0 0 8 16z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Xs = (0, t.forwardRef)((({
          size: e = "SM",
          ...l
        }, a) => {
          const t = (0, o.v6)(l, {
            className: g({
              size: e
            })
          });
          return (0, r.jsxs)(r.Fragment, {
            children: ["SM" === e && (0, r.jsx)(ys, {
              ...t,
              ref: a
            }), "LG" === e && (0, r.jsx)(Ds, {
              ...t,
              ref: a
            }), "MD" === e && (0, r.jsx)(Ns, {
              ...t,
              ref: a
            }), "XL" === e && (0, r.jsx)(Gs, {
              ...t,
              ref: a
            })]
          })
        }));
      Xs.displayName = "Headset", Xs.categories = ["multimedia", "connectivity", "devices", "files", "gaming"], Xs.tags = ["music", "audio", "sound", "gaming", "headphones", "headset", "call", "center", "phone", "telephone", "voip", "video"], Xs.SM = ys, Xs.LG = Ds, Xs.MD = Ns, Xs.XL = Gs;
      const qs = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M8 .667c.368 0 .667.298.667.666V8a.667.667 0 0 1-1.334 0V1.333c0-.368.299-.666.667-.666m3.796 3.261c.26-.26.682-.26.942 0a6.667 6.667 0 1 1-9.459.03.667.667 0 1 1 .949.937 5.333 5.333 0 1 0 7.567-.024.667.667 0 0 1 0-.943",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        ks = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M12 1a1 1 0 0 1 1 1v10a1 1 0 1 1-2 0V2a1 1 0 0 1 1-1m5.693 4.893a1 1 0 0 1 1.414 0 10 10 0 1 1-14.189.044 1 1 0 1 1 1.424 1.406 8 8 0 1 0 11.35-.036 1 1 0 0 1 .001-1.414",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Fs = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "20",
            height: "20",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 20 20",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M14.744 4.91a.834.834 0 0 1 1.178 0 8.334 8.334 0 1 1-11.824.038l.064-.058A.833.833 0 0 1 5.285 6.12l-.17.178a6.668 6.668 0 1 0 9.8-.03l-.171-.178-.057-.063a.833.833 0 0 1 .057-1.115M9.167 10V1.667a.833.833 0 1 1 1.667 0V10a.834.834 0 0 1-1.667 0"
            })
          })
        }))),
        Ps = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M16 1.334c.736 0 1.333.596 1.333 1.333V16a1.333 1.333 0 0 1-2.666 0V2.667c0-.737.597-1.333 1.333-1.333m7.59 6.523c.521-.52 1.366-.52 1.886 0a13.333 13.333 0 1 1-18.918.06A1.333 1.333 0 1 1 8.456 9.79a10.667 10.667 0 1 0 15.134-.047 1.333 1.333 0 0 1 0-1.886",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Os = (0, t.forwardRef)((({
          size: e = "SM",
          ...l
        }, a) => {
          const t = (0, o.v6)(l, {
            className: g({
              size: e
            })
          });
          return (0, r.jsxs)(r.Fragment, {
            children: ["SM" === e && (0, r.jsx)(qs, {
              ...t,
              ref: a
            }), "LG" === e && (0, r.jsx)(ks, {
              ...t,
              ref: a
            }), "MD" === e && (0, r.jsx)(Fs, {
              ...t,
              ref: a
            }), "XL" === e && (0, r.jsx)(Ps, {
              ...t,
              ref: a
            })]
          })
        }));
      Os.displayName = "Power", Os.categories = ["connectivity"], Os.tags = ["on", "off", "device", "switch", "toggle", "binary", "boolean", "reboot", "restart", "button", "keyboard", "troubleshoot"], Os.SM = qs, Os.LG = ks, Os.MD = Fs, Os.XL = Ps;
      const Ts = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M8 4a9.33 9.33 0 0 0-6.222 2.377.667.667 0 1 1-.889-.994 10.667 10.667 0 0 1 14.222 0 .667.667 0 0 1-.889.994A9.33 9.33 0 0 0 8 4m0 3.334a6 6 0 0 0-4.2 1.715.667.667 0 0 1-.933-.952 7.333 7.333 0 0 1 10.266 0 .667.667 0 1 1-.933.952A6 6 0 0 0 8 7.334m0 3.333c-.698 0-1.368.273-1.867.762a.667.667 0 0 1-.933-.952 4 4 0 0 1 5.6 0 .667.667 0 0 1-.933.952A2.67 2.67 0 0 0 8 10.667m-.667 2.666c0-.368.299-.666.667-.666h.007a.667.667 0 1 1 0 1.333H8a.667.667 0 0 1-.667-.667",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Es = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M12 6a14 14 0 0 0-9.333 3.566 1 1 0 0 1-1.334-1.491 16 16 0 0 1 21.334 0 1 1 0 0 1-1.334 1.49A14 14 0 0 0 12 6m0 5a9 9 0 0 0-6.3 2.573 1 1 0 1 1-1.4-1.428 11 11 0 0 1 15.4 0 1 1 0 1 1-1.4 1.428 9 9 0 0 0-6.3-2.572m0 5a4 4 0 0 0-2.8 1.143 1 1 0 1 1-1.4-1.428 6 6 0 0 1 8.4 0 1 1 0 1 1-1.4 1.428A4 4 0 0 0 12 16m-1 4a1 1 0 0 1 1-1h.01a1 1 0 0 1 0 2H12a1 1 0 0 1-1-1",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Us = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "20",
            height: "20",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 20 20",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "m10.342 15.833.085.005a.833.833 0 0 1 0 1.658l-.085.004h-.009a.833.833 0 0 1 0-1.667zM8 14.286a.834.834 0 0 1-1.167-1.19zm2.333-2.62c1.309 0 2.566.514 3.5 1.43a.834.834 0 0 1-1.166 1.19 3.335 3.335 0 0 0-4.667 0l-.583-.596-.584-.594a5 5 0 0 1 3.5-1.43m0-4.166c2.25 0 4.415.827 6.09 2.314l.327.307.058.063a.833.833 0 0 1-1.225 1.127 7.5 7.5 0 0 0-10.5 0 .832.832 0 1 1-1.166-1.19A9.17 9.17 0 0 1 10.333 7.5m0-4.166c3.075 0 6.05 1.062 8.423 2.996l.467.399.06.06a.834.834 0 0 1-1.105 1.235l-.066-.053-.409-.349a11.67 11.67 0 0 0-15.147.349.833.833 0 0 1-1.111-1.242 13.33 13.33 0 0 1 8.888-3.395"
            })
          })
        }))),
        _s = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M16 8a18.67 18.67 0 0 0-12.445 4.754 1.333 1.333 0 1 1-1.777-1.988 21.333 21.333 0 0 1 28.444 0 1.333 1.333 0 0 1-1.778 1.988A18.67 18.67 0 0 0 16 8.001m0 6.667a12 12 0 0 0-8.4 3.43 1.333 1.333 0 1 1-1.867-1.904 14.667 14.667 0 0 1 20.534 0 1.333 1.333 0 0 1-1.867 1.905 12 12 0 0 0-8.4-3.43m0 6.666a5.33 5.33 0 0 0-3.733 1.525 1.333 1.333 0 1 1-1.867-1.905 8 8 0 0 1 11.2 0 1.333 1.333 0 1 1-1.867 1.905A5.33 5.33 0 0 0 16 21.333m-1.333 5.334c0-.737.597-1.334 1.333-1.334h.013a1.333 1.333 0 0 1 0 2.667H16a1.333 1.333 0 0 1-1.333-1.333",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Ws = (0, t.forwardRef)((({
          size: e = "SM",
          ...l
        }, a) => {
          const t = (0, o.v6)(l, {
            className: g({
              size: e
            })
          });
          return (0, r.jsxs)(r.Fragment, {
            children: ["SM" === e && (0, r.jsx)(Ts, {
              ...t,
              ref: a
            }), "LG" === e && (0, r.jsx)(Es, {
              ...t,
              ref: a
            }), "MD" === e && (0, r.jsx)(Us, {
              ...t,
              ref: a
            }), "XL" === e && (0, r.jsx)(_s, {
              ...t,
              ref: a
            })]
          })
        }));
      Ws.displayName = "Wifi", Ws.categories = ["connectivity", "devices"], Ws.tags = ["connection", "signal", "wireless", "internet", "technology", "network"], Ws.SM = Ts, Ws.LG = Es, Ws.MD = Us, Ws.XL = _s;
      const Zs = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M.862.862c.26-.26.682-.26.943 0l2.774 2.774.021.021L7.233 6.29l.037.037 7.868 7.868a.667.667 0 0 1-.943.943l-3.58-3.58a.67.67 0 0 1-.748-.13 2.667 2.667 0 0 0-3.734 0 .667.667 0 0 1-.933-.952 4 4 0 0 1 3.212-1.122L6.565 7.507A6 6 0 0 0 3.8 9.05a.667.667 0 1 1-.933-.953 7.3 7.3 0 0 1 2.63-1.656L3.973 4.914a9.3 9.3 0 0 0-2.194 1.463.667.667 0 0 1-.889-.994c.637-.57 1.339-1.06 2.09-1.46L.863 1.804a.667.667 0 0 1 0-.943m6.222 1.844a10.67 10.67 0 0 1 8.027 2.677.667.667 0 0 1-.889.994A9.33 9.33 0 0 0 7.2 4.035a.667.667 0 0 1-.115-1.329m3.667 4.518a.667.667 0 0 1 .91-.244 7.3 7.3 0 0 1 1.472 1.116.667.667 0 1 1-.933.953 6 6 0 0 0-1.204-.914.667.667 0 0 1-.245-.91m-3.418 6.11c0-.369.299-.668.667-.668h.007a.667.667 0 0 1 0 1.334H8a.667.667 0 0 1-.667-.667",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Ys = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M1.293 1.293a1 1 0 0 1 1.414 0l4.161 4.161.033.032 3.948 3.949q.03.027.057.056l11.801 11.802a1 1 0 0 1-1.414 1.414l-5.371-5.371a1 1 0 0 1-1.122-.193 4 4 0 0 0-5.6 0 1 1 0 0 1-1.4-1.428 6 6 0 0 1 4.817-1.684l-2.77-2.77A9 9 0 0 0 5.7 13.573a1 1 0 0 1-1.4-1.428A11 11 0 0 1 8.246 9.66L5.958 7.372a14 14 0 0 0-3.291 2.193 1 1 0 0 1-1.334-1.49A16 16 0 0 1 4.47 5.884L1.293 2.707a1 1 0 0 1 0-1.414m9.333 2.767a16 16 0 0 1 12.04 4.015 1 1 0 0 1-1.333 1.49 14 14 0 0 0-10.535-3.513 1 1 0 1 1-.172-1.992m5.5 6.777a1 1 0 0 1 1.366-.367 11 11 0 0 1 2.208 1.675 1 1 0 1 1-1.4 1.428 9 9 0 0 0-1.806-1.37 1 1 0 0 1-.367-1.366M11 20a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2H12a1 1 0 0 1-1-1",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Ks = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "20",
            height: "20",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 20 20",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M1.078 1.078a.83.83 0 0 1 1.178 0L5.72 4.543l.019.019 3.31 3.31.03.03 9.843 9.842a.833.833 0 1 1-1.18 1.178l-4.477-4.477a.83.83 0 0 1-.869-.103l-.063-.056-.12-.112a3.335 3.335 0 0 0-4.547.112.834.834 0 0 1-1.167-1.19 5 5 0 0 1 4.014-1.403L8.207 9.385a7.5 7.5 0 0 0-3.457 1.926.833.833 0 0 1-1.166-1.19 9.2 9.2 0 0 1 3.289-2.07L4.966 6.143a11.7 11.7 0 0 0-2.744 1.828.834.834 0 0 1-1.11-1.242 13.3 13.3 0 0 1 2.614-1.825L1.078 2.255a.83.83 0 0 1 0-1.177m8.93 14.755.086.004a.833.833 0 0 1 0 1.659l-.085.003h-.01a.833.833 0 1 1 0-1.666zm3.431-6.802a.833.833 0 0 1 1.138-.307c.586.338 1.133.74 1.63 1.197l.21.2.057.062a.834.834 0 0 1-1.16 1.185l-.064-.057-.349-.321a7.5 7.5 0 0 0-1.156-.822.833.833 0 0 1-.306-1.137M9.195 3.358a13.33 13.33 0 0 1 9.437 3.146l.257.225.061.06a.834.834 0 0 1-1.105 1.236l-.067-.054-.224-.196a11.67 11.67 0 0 0-8.555-2.732l-.086.003a.833.833 0 0 1-.058-1.663z"
            })
          })
        }))),
        Qs = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M1.724 1.724c.52-.52 1.365-.52 1.885 0l5.548 5.548.044.043 5.264 5.265q.04.037.076.075l15.735 15.736a1.333 1.333 0 1 1-1.886 1.885l-7.161-7.161a1.33 1.33 0 0 1-1.496-.257 5.334 5.334 0 0 0-7.466 0 1.333 1.333 0 1 1-1.867-1.905 8 8 0 0 1 6.423-2.244l-3.693-3.694a12 12 0 0 0-5.53 3.083 1.333 1.333 0 0 1-1.867-1.905c1.504-1.474 3.3-2.6 5.262-3.312L7.943 9.829a18.7 18.7 0 0 0-4.388 2.925 1.333 1.333 0 1 1-1.777-1.988 21.3 21.3 0 0 1 4.181-2.921L1.724 3.61a1.333 1.333 0 0 1 0-1.886m12.444 3.69a21.33 21.33 0 0 1 16.054 5.352 1.333 1.333 0 1 1-1.778 1.988A18.67 18.67 0 0 0 14.397 8.07a1.333 1.333 0 1 1-.229-2.657m7.334 9.035a1.333 1.333 0 0 1 1.821-.49 14.7 14.7 0 0 1 2.944 2.234 1.333 1.333 0 1 1-1.867 1.905 12 12 0 0 0-2.408-1.828 1.333 1.333 0 0 1-.49-1.82m-6.835 12.218c0-.737.597-1.334 1.333-1.334h.013a1.333 1.333 0 0 1 0 2.667H16a1.333 1.333 0 0 1-1.333-1.333",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Js = (0, t.forwardRef)((({
          size: e = "SM",
          ...l
        }, a) => {
          const t = (0, o.v6)(l, {
            className: g({
              size: e
            })
          });
          return (0, r.jsxs)(r.Fragment, {
            children: ["SM" === e && (0, r.jsx)(Zs, {
              ...t,
              ref: a
            }), "LG" === e && (0, r.jsx)(Ys, {
              ...t,
              ref: a
            }), "MD" === e && (0, r.jsx)(Ks, {
              ...t,
              ref: a
            }), "XL" === e && (0, r.jsx)(Qs, {
              ...t,
              ref: a
            })]
          })
        }));
      Js.displayName = "WifiOff", Js.categories = ["connectivity", "devices"], Js.tags = ["disabled", "connection", "internet", "wireless", "technology", "network", "signal", "no", "off"], Js.SM = Zs, Js.LG = Ys, Js.MD = Ks, Js.XL = Qs;
      const $s = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M14 3.333a.667.667 0 0 0-.667-.666H2.666A.666.666 0 0 0 2 3.333V10c0 .368.298.667.666.667h10.667A.667.667 0 0 0 14 10zM15.333 10a2 2 0 0 1-2 2H8.666v1.333h2a.667.667 0 0 1 .135 1.32l-.135.014H5.333a.667.667 0 0 1 0-1.334h2V12H2.666a2 2 0 0 1-2-2V3.333a2 2 0 0 1 2-2h10.667a2 2 0 0 1 2 2z"
            })
          })
        }))),
        ei = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "20",
            height: "20",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 20 20",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M17.5 4.167a.834.834 0 0 0-.833-.834H3.334a.834.834 0 0 0-.834.834V12.5c0 .46.373.833.834.833h13.333c.46 0 .833-.373.833-.833zm1.667 8.333a2.5 2.5 0 0 1-2.5 2.5h-5.833v1.667h2.5l.085.004a.833.833 0 0 1 0 1.658l-.085.004H6.667a.833.833 0 1 1 0-1.666h2.5V15H3.334a2.5 2.5 0 0 1-2.5-2.5V4.167a2.5 2.5 0 0 1 2.5-2.5h13.333a2.5 2.5 0 0 1 2.5 2.5z"
            })
          })
        }))),
        li = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M21 5a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1zm2 10a3 3 0 0 1-3 3h-7v2h3a1 1 0 1 1 0 2H8a1 1 0 1 1 0-2h3v-2H4a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h16a3 3 0 0 1 3 3z"
            })
          })
        }))),
        ai = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M28 6.667c0-.736-.597-1.334-1.333-1.334H5.334C4.597 5.333 4 5.931 4 6.667V20c0 .736.597 1.333 1.334 1.333h21.333c.736 0 1.333-.597 1.333-1.333zM30.667 20a4 4 0 0 1-4 4h-9.333v2.667h4l.136.007a1.333 1.333 0 0 1 0 2.652l-.136.007H10.667a1.333 1.333 0 1 1 0-2.666h4V24H5.334a4 4 0 0 1-4-4V6.667a4 4 0 0 1 4-4h21.333a4 4 0 0 1 4 4z"
            })
          })
        }))),
        ri = (0, t.forwardRef)((({
          size: e = "SM",
          ...l
        }, a) => {
          const t = (0, o.v6)(l, {
            className: g({
              size: e
            })
          });
          return (0, r.jsxs)(r.Fragment, {
            children: ["SM" === e && (0, r.jsx)($s, {
              ...t,
              ref: a
            }), "MD" === e && (0, r.jsx)(ei, {
              ...t,
              ref: a
            }), "LG" === e && (0, r.jsx)(li, {
              ...t,
              ref: a
            }), "XL" === e && (0, r.jsx)(ai, {
              ...t,
              ref: a
            })]
          })
        }));
      ri.displayName = "Monitor", ri.categories = ["multimedia", "connectivity", "devices", "files", "gaming"], ri.tags = ["tv", "computer", "screen", "display", "virtual machine"], ri.SM = $s, ri.MD = ei, ri.LG = li, ri.XL = ai;
      const ti = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M10.993 1.416a2.546 2.546 0 1 1 3.6 3.601l-1.387 1.389a.7.7 0 0 1-.132.132l-7.38 7.38v.001a2 2 0 0 1-.831.498l-2.905.88a1 1 0 0 1-1.246-1.244v-.003l.882-2.902v-.002a2 2 0 0 1 .5-.83l7.379-7.38a.7.7 0 0 1 .13-.13zm-.983 2.869L3.037 11.26h-.001a.7.7 0 0 0-.167.277L2.17 13.84l2.305-.698a.7.7 0 0 0 .276-.166L11.725 6zm2.658.772-1.715-1.715.983-.983a1.213 1.213 0 0 1 1.715 1.715z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        si = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M16.48 2.118a3.819 3.819 0 0 1 5.401 5.401l-2.082 2.082a1 1 0 0 1-.197.198L8.534 20.868l-.001.001a3 3 0 0 1-1.245.746l-4.356 1.32a1.5 1.5 0 0 1-1.87-1.865l.002-.005 1.321-4.352v-.002a3 3 0 0 1 .75-1.244v-.001L14.202 4.398a1 1 0 0 1 .197-.196zM15.008 6.42 4.549 16.88l-.001.001a1 1 0 0 0-.25.415L3.25 20.749l3.456-1.048a1 1 0 0 0 .414-.248L17.58 8.993zm3.986 1.158-2.572-2.572 1.474-1.475a1.82 1.82 0 0 1 2.572 2.573z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        ii = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "20",
            height: "20",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 20 20",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M17.166 4.016a1.517 1.517 0 0 0-2.587-1.072l-1.228 1.228 2.142 2.143 1.229-1.228c.284-.284.444-.669.444-1.07M3.456 14.07a.83.83 0 0 0-.208.343l-.874 2.88 2.881-.875.096-.035a.8.8 0 0 0 .25-.172l8.714-8.716-2.143-2.143zM18.833 4.016c0 .791-.294 1.552-.823 2.136l-.11.114-1.74 1.74a1 1 0 0 1-.07.083 1 1 0 0 1-.085.072l-9.227 9.23a2.5 2.5 0 0 1-.893.572l-.145.05-3.628 1.1H2.11a1.25 1.25 0 0 1-1.558-1.555l.001-.003 1.102-3.627v-.002c.12-.392.334-.748.625-1.038l9.225-9.228a.8.8 0 0 1 .154-.154l1.742-1.74.114-.11a3.182 3.182 0 0 1 5.318 2.36"
            })
          })
        }))),
        di = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M21.97 2.82a5.091 5.091 0 0 1 7.198 7.202l-2.775 2.776a1.3 1.3 0 0 1-.264.263L11.375 27.82l-.001.001a4 4 0 0 1-1.66.994l-5.807 1.761a2 2 0 0 1-2.492-2.488l.001-.005 1.762-5.802v-.004a4 4 0 0 1 1-1.658v-.002L18.93 5.861a1.4 1.4 0 0 1 .262-.262zm-1.966 5.738L6.062 22.503l-.002.002a1.33 1.33 0 0 0-.333.551v.002L4.33 27.66l4.607-1.397c.209-.063.398-.177.553-.33l13.943-13.946zm5.314 1.543L21.89 6.672l1.965-1.966a2.426 2.426 0 0 1 3.43 3.43z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        oi = (0, t.forwardRef)((({
          size: e = "SM",
          ...l
        }, a) => {
          const t = (0, o.v6)(l, {
            className: g({
              size: e
            })
          });
          return (0, r.jsxs)(r.Fragment, {
            children: ["SM" === e && (0, r.jsx)(ti, {
              ...t,
              ref: a
            }), "LG" === e && (0, r.jsx)(si, {
              ...t,
              ref: a
            }), "MD" === e && (0, r.jsx)(ii, {
              ...t,
              ref: a
            }), "XL" === e && (0, r.jsx)(di, {
              ...t,
              ref: a
            })]
          })
        }));
      oi.displayName = "Pencil", oi.categories = ["design", "cursors", "tools", "text"], oi.tags = ["rubber", "edit", "create", "draw", "sketch", "draft", "writer", "writing", "stationery", "artist", "update", "correct", "modify", "note"], oi.SM = ti, oi.LG = si, oi.MD = ii, oi.XL = di;
      const ni = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M.862.862c.26-.26.682-.26.943 0l5.332 5.332.002.002L9.723 8.78a.7.7 0 0 1 .151.151l5.264 5.264a.667.667 0 0 1-.943.943L9.327 10.27l-3.634 3.638a2 2 0 0 1-.83.5H4.86l-2.905.882-.003.001A1 1 0 0 1 .71 14.043l.882-2.907c.095-.314.267-.6.5-.833l3.633-3.636L.862 1.805a.667.667 0 0 1 0-.943M6.667 7.61l-3.633 3.636a.7.7 0 0 0-.167.277l-.7 2.31 2.305-.7c.104-.032.2-.09.276-.166l3.637-3.64zM12.787 2a1.2 1.2 0 0 0-.857.355l-.984.981 1.716 1.716.982-.982A1.212 1.212 0 0 0 12.788 2m.413 4.4 1.387-1.387a2.547 2.547 0 0 0-3.6-3.601L9.582 2.815a.7.7 0 0 0-.098.097L8.082 4.31a.667.667 0 1 0 .941.944l.979-.975 1.717 1.717-.976.977a.667.667 0 0 0 .942.943l1.382-1.382A.7.7 0 0 0 13.2 6.4",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        hi = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M1.293 1.293a1 1 0 0 1 1.414 0L14.585 13.17a1 1 0 0 1 .226.226l7.896 7.896a1 1 0 0 1-1.414 1.414l-7.302-7.302-5.452 5.457a3 3 0 0 1-1.245.75h-.002l-4.358 1.324H2.93a1.5 1.5 0 0 1-1.866-1.871l1.322-4.36c.143-.472.401-.902.75-1.25L8.586 10 1.293 2.707a1 1 0 0 1 0-1.414M10 11.415l-5.45 5.454c-.116.116-.202.26-.25.417L3.25 20.75l3.458-1.05h.001a1 1 0 0 0 .414-.25l5.454-5.459zM19.181 3a1.82 1.82 0 0 0-1.286.533L16.42 5.005l2.574 2.574 1.474-1.474A1.818 1.818 0 0 0 19.18 3m.619 6.6 2.081-2.08a3.819 3.819 0 0 0-5.4-5.402l-2.11 2.104a1 1 0 0 0-.147.147l-2.101 2.095a1 1 0 1 0 1.412 1.416l1.468-1.463 2.576 2.576-1.465 1.465a1 1 0 0 0 1.414 1.414L19.6 9.8a1 1 0 0 0 .2-.2",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        ci = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "20",
            height: "20",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 20 20",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M1.077 1.078a.834.834 0 0 1 1.116-.058l.063.058 9.9 9.9a.836.836 0 0 1 .18.18l6.586 6.586a.834.834 0 0 1-1.114 1.236l-.064-.058-6.084-6.084-4.544 4.547c-.29.29-.646.505-1.038.625h-.002l-3.631 1.103h-.003a1.25 1.25 0 0 1-1.555-1.559l1.102-3.633c.12-.393.334-.752.625-1.042l4.54-4.546-6.077-6.077-.057-.063a.834.834 0 0 1 .057-1.115m2.714 12.98a.83.83 0 0 0-.208.347l-.876 2.886 2.885-.875c.13-.04.248-.111.344-.207l4.545-4.55L8.333 9.51zM17.5 4.016a1.517 1.517 0 0 0-2.094-1.4 1.5 1.5 0 0 0-.493.328v.001l-1.23 1.226 2.144 2.144 1.23-1.227a1.52 1.52 0 0 0 .443-1.072m1.667 0a3.18 3.18 0 0 1-.931 2.25l-1.74 1.739a1 1 0 0 1-.073.085 1 1 0 0 1-.084.07l-1.731 1.733a.833.833 0 0 1-1.179-1.178l1.22-1.221-2.146-2.147-1.222 1.22-.064.057a.833.833 0 0 1-1.113-1.238l1.75-1.746a1 1 0 0 1 .123-.122l1.758-1.753a3.186 3.186 0 0 1 4.5 0 3.19 3.19 0 0 1 .932 2.251"
            })
          })
        }))),
        fi = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M1.724 1.724c.52-.52 1.365-.52 1.886 0l10.665 10.665v.001q.002.001.003.002l5.169 5.17a1.4 1.4 0 0 1 .301.3l10.528 10.529a1.333 1.333 0 1 1-1.885 1.885l-9.736-9.735-7.27 7.275a4 4 0 0 1-1.66 1l-.003.001-5.81 1.764-.005.002a2 2 0 0 1-2.488-2.496l1.763-5.815a4 4 0 0 1 1-1.665l7.266-7.273L1.724 3.61a1.333 1.333 0 0 1 0-1.886m11.61 13.496-7.268 7.273c-.155.155-.269.345-.333.555l-1.4 4.619 4.61-1.4h.003c.208-.065.397-.18.551-.334l7.273-7.278zM25.574 4a2.42 2.42 0 0 0-1.714.711l-.001.001-1.967 1.961 3.432 3.432L27.29 8.14a2.426 2.426 0 0 0-.786-3.955 2.4 2.4 0 0 0-.928-.184m.826 8.8 2.775-2.774a5.091 5.091 0 0 0-7.199-7.202l-.001.001L19.16 5.63a1.4 1.4 0 0 0-.195.195L16.164 8.62a1.333 1.333 0 1 0 1.883 1.888l1.957-1.951 3.435 3.435-1.954 1.953a1.333 1.333 0 1 0 1.886 1.886l2.763-2.763a1.3 1.3 0 0 0 .266-.267",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        wi = (0, t.forwardRef)((({
          size: e = "SM",
          ...l
        }, a) => {
          const t = (0, o.v6)(l, {
            className: g({
              size: e
            })
          });
          return (0, r.jsxs)(r.Fragment, {
            children: ["SM" === e && (0, r.jsx)(ni, {
              ...t,
              ref: a
            }), "LG" === e && (0, r.jsx)(hi, {
              ...t,
              ref: a
            }), "MD" === e && (0, r.jsx)(ci, {
              ...t,
              ref: a
            }), "XL" === e && (0, r.jsx)(fi, {
              ...t,
              ref: a
            })]
          })
        }));
      wi.displayName = "PencilOff", wi.categories = ["design", "cursors", "tools", "text"], wi.tags = ["disabled", "inactive", "non-editable", "locked", "read-only", "unmodifiable", "frozen", "restricted", "rubber", "edit", "create", "draw", "sketch", "draft", "writer", "writing", "stationery", "artist"], wi.SM = ni, wi.LG = hi, wi.MD = ci, wi.XL = fi;
      const vi = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M8 2.667c.368 0 .667.298.667.666v4h4a.667.667 0 1 1 0 1.333h-4v4a.667.667 0 1 1-1.334 0v-4h-4a.667.667 0 1 1 0-1.333h4v-4c0-.368.299-.667.667-.667",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        xi = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M12 4a1 1 0 0 1 1 1v6h6a1 1 0 1 1 0 2h-6v6a1 1 0 1 1-2 0v-6H5a1 1 0 1 1 0-2h6V5a1 1 0 0 1 1-1",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        gi = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "20",
            height: "20",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 20 20",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M9.5 15.834v-5h-5a.834.834 0 0 1 0-1.668h5v-5a.833.833 0 0 1 1.667 0v5h5l.085.004a.834.834 0 0 1 0 1.659l-.085.005h-5v5a.834.834 0 0 1-1.667 0"
            })
          })
        }))),
        ji = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M16 5.334c.736 0 1.333.596 1.333 1.333v8h8a1.333 1.333 0 0 1 0 2.667h-8v8a1.333 1.333 0 0 1-2.666 0v-8h-8a1.333 1.333 0 0 1 0-2.667h8v-8c0-.737.597-1.333 1.333-1.333",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        mi = (0, t.forwardRef)((({
          size: e = "SM",
          ...l
        }, a) => {
          const t = (0, o.v6)(l, {
            className: g({
              size: e
            })
          });
          return (0, r.jsxs)(r.Fragment, {
            children: ["SM" === e && (0, r.jsx)(vi, {
              ...t,
              ref: a
            }), "LG" === e && (0, r.jsx)(xi, {
              ...t,
              ref: a
            }), "MD" === e && (0, r.jsx)(gi, {
              ...t,
              ref: a
            }), "XL" === e && (0, r.jsx)(ji, {
              ...t,
              ref: a
            })]
          })
        }));
      mi.displayName = "Plus", mi.categories = ["math", "tools", "development", "text", "cursors", "gaming"], mi.tags = ["add", "new", "increase", "increment", "positive", "calculate", "toolbar", "crosshair", "aim", "target", "scope", "sight", "reticule", "maximum", "upgrade", "extra", "+", "more", "create", "navigation"], mi.SM = vi, mi.LG = xi, mi.MD = gi, mi.XL = ji;
      const pi = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M1.333 2.667c0-.737.597-1.333 1.334-1.333H6c.736 0 1.333.596 1.333 1.333V6c0 .737-.597 1.334-1.333 1.334H2.667A1.333 1.333 0 0 1 1.333 6zm4.667 0H2.667V6H6zm2.667 0c0-.737.597-1.333 1.333-1.333h3.333c.737 0 1.334.596 1.334 1.333V6c0 .737-.597 1.334-1.334 1.334H10A1.333 1.333 0 0 1 8.667 6zm4.666 0H10V6h3.333zM1.333 10c0-.736.597-1.333 1.334-1.333H6c.736 0 1.333.597 1.333 1.333v3.334c0 .736-.597 1.333-1.333 1.333H2.667a1.333 1.333 0 0 1-1.334-1.333zM6 10H2.667v3.334H6zm2.667 0c0-.736.597-1.333 1.333-1.333h3.333c.737 0 1.334.597 1.334 1.333v3.334c0 .736-.597 1.333-1.334 1.333H10a1.333 1.333 0 0 1-1.333-1.333zm4.666 0H10v3.334h3.333z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        ui = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M2 4a2 2 0 0 1 2-2h5a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2zm7 0H4v5h5zm4 0a2 2 0 0 1 2-2h5a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-5a2 2 0 0 1-2-2zm7 0h-5v5h5zM2 15a2 2 0 0 1 2-2h5a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2zm7 0H4v5h5zm4 0a2 2 0 0 1 2-2h5a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-5a2 2 0 0 1-2-2zm7 0h-5v5h5z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Mi = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "20",
            height: "20",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 20 20",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M3.333 12.5v4.167H7.5V12.5zm9.167 0v4.167h4.167V12.5zM3.333 3.333V7.5H7.5V3.333zm9.167 0V7.5h4.167V3.333zM9.167 16.667c0 .92-.747 1.666-1.667 1.666H3.333c-.92 0-1.666-.746-1.666-1.666V12.5c0-.92.746-1.667 1.666-1.667H7.5c.92 0 1.667.746 1.667 1.667zm9.166 0c0 .92-.746 1.666-1.666 1.666H12.5c-.92 0-1.667-.746-1.667-1.666V12.5c0-.92.746-1.667 1.667-1.667h4.167c.92 0 1.666.747 1.666 1.667zM9.167 7.5c0 .92-.747 1.667-1.667 1.667H3.333c-.92 0-1.666-.747-1.666-1.667V3.333c0-.92.746-1.666 1.666-1.666H7.5c.92 0 1.667.746 1.667 1.666zm9.166 0c0 .92-.746 1.667-1.666 1.667H12.5c-.92 0-1.667-.747-1.667-1.667V3.333c0-.92.747-1.666 1.667-1.666h4.167c.92 0 1.666.746 1.666 1.666z"
            })
          })
        }))),
        Ri = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M2.667 5.333a2.667 2.667 0 0 1 2.666-2.666H12a2.667 2.667 0 0 1 2.667 2.666V12A2.667 2.667 0 0 1 12 14.666H5.333A2.667 2.667 0 0 1 2.667 12zm9.333 0H5.333V12H12zm5.333 0A2.667 2.667 0 0 1 20 2.667h6.667a2.667 2.667 0 0 1 2.666 2.666V12a2.667 2.667 0 0 1-2.666 2.666H20A2.667 2.667 0 0 1 17.333 12zm9.334 0H20V12h6.667zM2.667 20a2.667 2.667 0 0 1 2.666-2.667H12A2.667 2.667 0 0 1 14.667 20v6.666A2.667 2.667 0 0 1 12 29.334H5.333a2.667 2.667 0 0 1-2.666-2.666zM12 20H5.333v6.666H12zm5.333 0A2.667 2.667 0 0 1 20 17.333h6.667A2.667 2.667 0 0 1 29.333 20v6.666a2.667 2.667 0 0 1-2.666 2.667H20a2.667 2.667 0 0 1-2.667-2.666zm9.334 0H20v6.666h6.667z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        bi = (0, t.forwardRef)((({
          size: e = "SM",
          ...l
        }, a) => {
          const t = (0, o.v6)(l, {
            className: g({
              size: e
            })
          });
          return (0, r.jsxs)(r.Fragment, {
            children: ["SM" === e && (0, r.jsx)(pi, {
              ...t,
              ref: a
            }), "LG" === e && (0, r.jsx)(ui, {
              ...t,
              ref: a
            }), "MD" === e && (0, r.jsx)(Mi, {
              ...t,
              ref: a
            }), "XL" === e && (0, r.jsx)(Ri, {
              ...t,
              ref: a
            })]
          })
        }));
      bi.displayName = "LayoutGrid", bi.categories = ["design", "layout"], bi.tags = ["app", "home", "start", "squares", "hub", "menu", "blocks", "options", "items", "gallery"], bi.SM = pi, bi.LG = ui, bi.MD = Mi, bi.XL = Ri;
      const Li = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M1.919 1.92a2 2 0 0 1 1.414-.586h2a.667.667 0 1 1 0 1.333h-2a.667.667 0 0 0-.666.667v2a.667.667 0 0 1-1.334 0v-2a2 2 0 0 1 .586-1.415m8.08.08c0-.368.3-.667.668-.667h2a2 2 0 0 1 2 2v2a.667.667 0 0 1-1.334 0v-2a.667.667 0 0 0-.666-.666h-2A.667.667 0 0 1 10 2m-8 8c.37 0 .668.299.668.667v2a.667.667 0 0 0 .666.667h2a.667.667 0 0 1 0 1.333h-2a2 2 0 0 1-2-2v-2c0-.368.299-.667.667-.667m12 0c.37 0 .668.299.668.667v2a2 2 0 0 1-2 2h-2a.667.667 0 1 1 0-1.333h2a.666.666 0 0 0 .666-.667v-2c0-.368.299-.667.667-.667",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        zi = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M2.879 2.879A3 3 0 0 1 5 2h3a1 1 0 0 1 0 2H5a1 1 0 0 0-1 1v3a1 1 0 0 1-2 0V5a3 3 0 0 1 .879-2.121M15 3a1 1 0 0 1 1-1h3a3 3 0 0 1 3 3v3a1 1 0 1 1-2 0V5a1 1 0 0 0-1-1h-3a1 1 0 0 1-1-1M3 15a1 1 0 0 1 1 1v3a1 1 0 0 0 1 1h3a1 1 0 1 1 0 2H5a3 3 0 0 1-3-3v-3a1 1 0 0 1 1-1m18 0a1 1 0 0 1 1 1v3a3 3 0 0 1-3 3h-3a1 1 0 1 1 0-2h3a1 1 0 0 0 1-1v-3a1 1 0 0 1 1-1",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Ci = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "20",
            height: "20",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 20 20",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M1.334 15.833v-2.5a.833.833 0 0 1 1.666 0v2.5a.835.835 0 0 0 .834.834h2.5l.085.004a.834.834 0 0 1 0 1.658l-.085.004h-2.5a2.5 2.5 0 0 1-2.5-2.5m15 0v-2.5a.833.833 0 0 1 1.666 0v2.5a2.5 2.5 0 0 1-2.5 2.5H13a.833.833 0 0 1 0-1.666h2.5a.835.835 0 0 0 .834-.834m-15-9.166v-2.5a2.5 2.5 0 0 1 2.5-2.5h2.5a.833.833 0 0 1 0 1.666h-2.5A.835.835 0 0 0 3 4.167v2.5a.833.833 0 0 1-1.666 0m15 0v-2.5a.835.835 0 0 0-.834-.834H13a.833.833 0 0 1 0-1.666h2.5a2.5 2.5 0 0 1 2.5 2.5v2.5a.833.833 0 0 1-1.666 0"
            })
          })
        }))),
        Ai = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M3.838 3.838a4 4 0 0 1 2.829-1.171h4a1.333 1.333 0 1 1 0 2.666h-4a1.333 1.333 0 0 0-1.334 1.334v4a1.333 1.333 0 1 1-2.666 0v-4a4 4 0 0 1 1.171-2.829M20 4c0-.737.597-1.333 1.333-1.333h4a4 4 0 0 1 4 4v4a1.333 1.333 0 1 1-2.666 0v-4a1.333 1.333 0 0 0-1.334-1.334h-4A1.333 1.333 0 0 1 20 4M4 20c.736 0 1.333.597 1.333 1.333v4a1.333 1.333 0 0 0 1.334 1.334h4a1.333 1.333 0 1 1 0 2.666h-4a4 4 0 0 1-4-4v-4C2.667 20.597 3.264 20 4 20m24 0c.736 0 1.333.597 1.333 1.333v4a4 4 0 0 1-4 4h-4a1.333 1.333 0 0 1 0-2.666h4a1.333 1.333 0 0 0 1.334-1.334v-4c0-.736.597-1.333 1.333-1.333",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Hi = (0, t.forwardRef)((({
          size: e = "SM",
          ...l
        }, a) => {
          const t = (0, o.v6)(l, {
            className: g({
              size: e
            })
          });
          return (0, r.jsxs)(r.Fragment, {
            children: ["SM" === e && (0, r.jsx)(Li, {
              ...t,
              ref: a
            }), "LG" === e && (0, r.jsx)(zi, {
              ...t,
              ref: a
            }), "MD" === e && (0, r.jsx)(Ci, {
              ...t,
              ref: a
            }), "XL" === e && (0, r.jsx)(Ai, {
              ...t,
              ref: a
            })]
          })
        }));
      Hi.displayName = "Maximize", Hi.categories = ["layout", "design"], Hi.tags = ["full screen", "expand", "dashed", "maximum", "big", "large"], Hi.SM = Li, Hi.LG = zi, Hi.MD = Ci, Hi.XL = Ai;
      const Vi = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M5.333 1.334c.368 0 .667.298.667.666v2a2 2 0 0 1-2 2H2a.667.667 0 1 1 0-1.333h2A.667.667 0 0 0 4.667 4V2c0-.368.298-.667.666-.667m5.334 0c.368 0 .666.298.666.666v2a.667.667 0 0 0 .667.667h2A.667.667 0 1 1 14 6h-2a2 2 0 0 1-2-2V2c0-.368.298-.667.667-.667m-9.334 9.333c0-.368.299-.667.667-.667h2a2 2 0 0 1 2 2v2a.667.667 0 0 1-1.333 0v-2A.667.667 0 0 0 4 11.334H2a.667.667 0 0 1-.667-.667M12 11.334a.666.666 0 0 0-.667.666v2A.667.667 0 0 1 10 14v-2a2 2 0 0 1 2-2h2a.667.667 0 1 1 0 1.334z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Ii = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M8 2a1 1 0 0 1 1 1v3a3 3 0 0 1-3 3H3a1 1 0 0 1 0-2h3a1 1 0 0 0 1-1V3a1 1 0 0 1 1-1m8 0a1 1 0 0 1 1 1v3a1 1 0 0 0 1 1h3a1 1 0 1 1 0 2h-3a3 3 0 0 1-3-3V3a1 1 0 0 1 1-1M2 16a1 1 0 0 1 1-1h3a3 3 0 0 1 3 3v3a1 1 0 1 1-2 0v-3a1 1 0 0 0-1-1H3a1 1 0 0 1-1-1m16 1a1 1 0 0 0-1 1v3a1 1 0 1 1-2 0v-3a3 3 0 0 1 3-3h3a1 1 0 1 1 0 2z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Bi = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "20",
            height: "20",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 20 20",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M6.167 17.5V15a.833.833 0 0 0-.833-.833h-2.5a.834.834 0 0 1 0-1.667h2.5l.247.013A2.5 2.5 0 0 1 7.833 15v2.5a.833.833 0 0 1-1.666 0m6.667 0V15a2.5 2.5 0 0 1 2.5-2.5h2.5l.085.004a.833.833 0 0 1 0 1.658l-.085.005h-2.5A.833.833 0 0 0 14.5 15v2.5a.834.834 0 0 1-1.667 0M6.167 5V2.5a.834.834 0 0 1 1.667 0V5a2.5 2.5 0 0 1-2.5 2.5h-2.5a.833.833 0 0 1 0-1.667h2.5l.082-.004a.83.83 0 0 0 .747-.747zm6.667 0V2.5a.833.833 0 0 1 1.667 0V5a.83.83 0 0 0 .833.833h2.5a.834.834 0 0 1 0 1.667h-2.5a2.5 2.5 0 0 1-2.488-2.253z"
            })
          })
        }))),
        Si = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M10.667 2.667C11.403 2.667 12 3.263 12 4v4a4 4 0 0 1-4 4H4a1.333 1.333 0 1 1 0-2.667h4A1.333 1.333 0 0 0 9.333 8V4c0-.737.597-1.333 1.334-1.333m10.666 0c.737 0 1.334.596 1.334 1.333v4A1.333 1.333 0 0 0 24 9.333h4A1.333 1.333 0 1 1 28 12h-4a4 4 0 0 1-4-4V4c0-.737.597-1.333 1.333-1.333M2.667 21.333C2.667 20.597 3.264 20 4 20h4a4 4 0 0 1 4 4v4a1.333 1.333 0 0 1-2.667 0v-4A1.333 1.333 0 0 0 8 22.666H4a1.333 1.333 0 0 1-1.333-1.333M24 22.667A1.333 1.333 0 0 0 22.667 24v4A1.333 1.333 0 1 1 20 28v-4a4 4 0 0 1 4-4h4a1.333 1.333 0 0 1 0 2.666z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        yi = (0, t.forwardRef)((({
          size: e = "SM",
          ...l
        }, a) => {
          const t = (0, o.v6)(l, {
            className: g({
              size: e
            })
          });
          return (0, r.jsxs)(r.Fragment, {
            children: ["SM" === e && (0, r.jsx)(Vi, {
              ...t,
              ref: a
            }), "LG" === e && (0, r.jsx)(Ii, {
              ...t,
              ref: a
            }), "MD" === e && (0, r.jsx)(Bi, {
              ...t,
              ref: a
            }), "XL" === e && (0, r.jsx)(Si, {
              ...t,
              ref: a
            })]
          })
        }));
      yi.displayName = "Minimize", yi.categories = ["layout", "design"], yi.tags = ["exit", "full screen", "close", "shrink", "window", "reduce", "video playback"], yi.SM = Vi, yi.LG = Ii, yi.MD = Bi, yi.XL = Si;
      const Di = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M12.666 4A.667.667 0 0 0 12 3.333H4A.667.667 0 0 0 3.333 4v8c0 .368.3.666.667.666h8a.666.666 0 0 0 .666-.666zM6 6v4h4V6zm5.333 4c0 .736-.597 1.333-1.333 1.333H6A1.334 1.334 0 0 1 4.666 10V6c0-.736.598-1.334 1.334-1.334h4c.736 0 1.333.598 1.333 1.334zm3.333-6a.667.667 0 1 1 0 1.333H14v2h.666a.667.667 0 0 1 0 1.333H14v2h.666a.667.667 0 0 1 .135 1.32l-.135.014H14a2 2 0 0 1-2 2v.666a.667.667 0 0 1-1.334 0V14h-2v.666a.667.667 0 1 1-1.333 0V14h-2v.666a.667.667 0 0 1-1.333 0V14a2 2 0 0 1-1.99-1.796L2 12h-.667a.667.667 0 0 1 0-1.334H2v-2h-.667a.667.667 0 1 1 0-1.333H2v-2h-.667a.667.667 0 0 1 0-1.333H2a2 2 0 0 1 1.795-1.99L4 2v-.667a.667.667 0 1 1 1.333 0V2h2v-.667a.667.667 0 0 1 1.333 0V2h2v-.667a.667.667 0 0 1 1.334 0V2a2 2 0 0 1 2 2z"
            })
          })
        }))),
        Ni = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "20",
            height: "20",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 20 20",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M15.834 5A.834.834 0 0 0 15 4.167H5A.833.833 0 0 0 4.167 5v10c0 .46.373.834.833.834h10c.46 0 .834-.374.834-.834zM7.5 7.5v5h5v-5zm6.667 5c0 .92-.747 1.667-1.667 1.667h-5c-.92 0-1.666-.747-1.666-1.667v-5c0-.92.746-1.666 1.666-1.666h5c.92 0 1.667.745 1.667 1.666zM18.334 5a.834.834 0 0 1 0 1.667H17.5v2.5h.834a.833.833 0 0 1 0 1.667H17.5v2.5h.834l.085.004a.834.834 0 0 1 0 1.658l-.085.004H17.5a2.5 2.5 0 0 1-2.5 2.5v.834a.833.833 0 0 1-1.666 0V17.5h-2.5v.834a.834.834 0 0 1-1.667 0V17.5h-2.5v.834a.833.833 0 0 1-1.667 0V17.5A2.5 2.5 0 0 1 2.5 15h-.833a.833.833 0 1 1 0-1.666H2.5v-2.5h-.833a.834.834 0 0 1 0-1.667H2.5v-2.5h-.833a.833.833 0 0 1 0-1.667H2.5A2.5 2.5 0 0 1 5 2.5v-.833a.834.834 0 0 1 1.667 0V2.5h2.5v-.833a.833.833 0 0 1 1.667 0V2.5h2.5v-.833a.833.833 0 1 1 1.666 0V2.5A2.5 2.5 0 0 1 17.5 5z"
            })
          })
        }))),
        Gi = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M19 6a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1zM9 9v6h6V9zm8 6a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2zm5-9a1 1 0 1 1 0 2h-1v3h1a1 1 0 1 1 0 2h-1v3h1a1 1 0 1 1 0 2h-1a3 3 0 0 1-3 3v1a1 1 0 1 1-2 0v-1h-3v1a1 1 0 1 1-2 0v-1H8v1a1 1 0 1 1-2 0v-1a3 3 0 0 1-3-3H2a1 1 0 1 1 0-2h1v-3H2a1 1 0 1 1 0-2h1V8H2a1 1 0 0 1 0-2h1a3 3 0 0 1 3-3V2a1 1 0 0 1 2 0v1h3V2a1 1 0 1 1 2 0v1h3V2a1 1 0 1 1 2 0v1a3 3 0 0 1 3 3z"
            })
          })
        }))),
        Xi = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M25.334 8c0-.736-.598-1.333-1.334-1.333H8c-.736 0-1.333.597-1.333 1.333v16c0 .736.597 1.334 1.333 1.334h16c.736 0 1.334-.598 1.334-1.334zM12 12v8h8v-8zm10.667 8A2.667 2.667 0 0 1 20 22.667h-8A2.667 2.667 0 0 1 9.334 20v-8A2.666 2.666 0 0 1 12 9.334h8A2.667 2.667 0 0 1 22.667 12zm6.667-12a1.334 1.334 0 0 1 0 2.667H28v4h1.334a1.333 1.333 0 0 1 0 2.667H28v4h1.334l.136.007a1.333 1.333 0 0 1 0 2.652l-.136.007H28a4 4 0 0 1-4 4v1.334a1.333 1.333 0 0 1-2.666 0V28h-4v1.334a1.334 1.334 0 0 1-2.667 0V28h-4v1.334a1.333 1.333 0 0 1-2.667 0V28a4 4 0 0 1-4-4H2.667a1.333 1.333 0 1 1 0-2.666H4v-4H2.667a1.334 1.334 0 0 1 0-2.667H4v-4H2.667a1.333 1.333 0 1 1 0-2.667H4a4 4 0 0 1 4-4V2.667a1.334 1.334 0 0 1 2.667 0V4h4V2.667a1.333 1.333 0 0 1 2.667 0V4h4V2.667a1.333 1.333 0 1 1 2.666 0V4a4 4 0 0 1 4 4z"
            })
          })
        }))),
        qi = (0, t.forwardRef)((({
          size: e = "SM",
          ...l
        }, a) => {
          const t = (0, o.v6)(l, {
            className: g({
              size: e
            })
          });
          return (0, r.jsxs)(r.Fragment, {
            children: ["SM" === e && (0, r.jsx)(Di, {
              ...t,
              ref: a
            }), "MD" === e && (0, r.jsx)(Ni, {
              ...t,
              ref: a
            }), "LG" === e && (0, r.jsx)(Gi, {
              ...t,
              ref: a
            }), "XL" === e && (0, r.jsx)(Xi, {
              ...t,
              ref: a
            })]
          })
        }));
      qi.displayName = "Cpu", qi.categories = ["devices"], qi.tags = ["processor", "cores", "technology", "computer", "chip", "circuit", "memory", "ram", "specs", "gigahertz", "ghz"], qi.SM = Di, qi.MD = Ni, qi.LG = Gi, qi.XL = Xi;
      const ki = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M5.333.667c.368 0 .667.298.667.666V2h4v-.667a.667.667 0 0 1 1.333 0V2h1.333a2 2 0 0 1 2 2v9.333a2 2 0 0 1-2 2H3.333a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h1.333v-.667c0-.368.299-.666.667-.666m-.667 2.666H3.333A.667.667 0 0 0 2.666 4v2h10.667V4a.667.667 0 0 0-.667-.667h-1.333V4A.667.667 0 0 1 10 4v-.667H6V4a.667.667 0 1 1-1.334 0zm8.667 4H2.666v6c0 .369.299.667.667.667h9.333a.667.667 0 0 0 .667-.667z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Fi = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M8 1a1 1 0 0 1 1 1v1h6V2a1 1 0 1 1 2 0v1h2a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3h2V2a1 1 0 0 1 1-1M7 5H5a1 1 0 0 0-1 1v3h16V6a1 1 0 0 0-1-1h-2v1a1 1 0 1 1-2 0V5H9v1a1 1 0 0 1-2 0zm13 6H4v9a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Pi = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "20",
            height: "20",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 20 20",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M16.334 9.167H3v7.5c0 .46.374.833.834.833H15.5c.46 0 .834-.373.834-.833zM12.167 5v-.833h-5V5A.834.834 0 1 1 5.5 5v-.833H3.834A.834.834 0 0 0 3 5v2.5h13.334V5a.834.834 0 0 0-.834-.833h-1.666V5a.834.834 0 0 1-1.667 0M18 16.667a2.5 2.5 0 0 1-2.5 2.5H3.834a2.5 2.5 0 0 1-2.5-2.5V5a2.5 2.5 0 0 1 2.5-2.5H5.5v-.833a.834.834 0 0 1 1.667 0V2.5h5v-.833a.833.833 0 0 1 1.667 0V2.5H15.5A2.5 2.5 0 0 1 18 5z"
            })
          })
        }))),
        Oi = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M10.667 1.333c.736 0 1.333.597 1.333 1.334V4h8V2.667a1.333 1.333 0 0 1 2.667 0V4h2.667a4 4 0 0 1 4 4v18.667a4 4 0 0 1-4 4H6.667a4 4 0 0 1-4-4V8a4 4 0 0 1 4-4h2.667V2.667c0-.737.597-1.334 1.333-1.334M9.334 6.667H6.667c-.736 0-1.333.597-1.333 1.333v4h21.333V8c0-.736-.597-1.333-1.333-1.333h-2.667V8A1.333 1.333 0 0 1 20 8V6.667h-8V8a1.333 1.333 0 1 1-2.666 0zm17.333 8H5.334v12c0 .736.597 1.333 1.333 1.333h18.667c.736 0 1.333-.597 1.333-1.333z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Ti = (0, t.forwardRef)((({
          size: e = "SM",
          ...l
        }, a) => {
          const t = (0, o.v6)(l, {
            className: g({
              size: e
            })
          });
          return (0, r.jsxs)(r.Fragment, {
            children: ["SM" === e && (0, r.jsx)(ki, {
              ...t,
              ref: a
            }), "LG" === e && (0, r.jsx)(Fi, {
              ...t,
              ref: a
            }), "MD" === e && (0, r.jsx)(Pi, {
              ...t,
              ref: a
            }), "XL" === e && (0, r.jsx)(Oi, {
              ...t,
              ref: a
            })]
          })
        }));
      Ti.displayName = "Calendar", Ti.categories = ["time"], Ti.tags = ["date", "month", "year", "event", "birthday", "birthdate"], Ti.SM = ki, Ti.LG = Fi, Ti.MD = Pi, Ti.XL = Oi;
      const Ei = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M.862.862c.26-.26.683-.26.943 0l1.456 1.456.022.022 3.855 3.855 7.203 7.203.022.022.775.775a.667.667 0 0 1-.942.943l-.26-.26a2 2 0 0 1-1.268.455H3.334a2 2 0 0 1-2-2V3.99a2 2 0 0 1 .464-1.248l-.936-.936a.667.667 0 0 1 0-.943m1.89 2.833a.7.7 0 0 0-.085.312V6h2.39zm3.639 3.638H2.667v6a.667.667 0 0 0 .667.667h9.332c.11 0 .217-.027.313-.079zM10.667.667c.368 0 .667.298.667.666V2h1.333a2 2 0 0 1 2 2v6.333a.667.667 0 0 1-1.333 0v-3h-3a.667.667 0 1 1 0-1.333h3V4a.667.667 0 0 0-.667-.667h-1.333V4A.667.667 0 0 1 10 4v-.667H6.334a.667.667 0 1 1 0-1.333H10v-.667c0-.368.299-.666.667-.666",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Ui = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M1.293 1.293a1 1 0 0 1 1.414 0l2.184 2.184.033.032L21.51 20.096l.032.033 1.164 1.164a1 1 0 0 1-1.414 1.414l-.39-.39a3 3 0 0 1-1.9.683H5a3 3 0 0 1-3-3V5.983a3 3 0 0 1 .697-1.872L1.293 2.707a1 1 0 0 1 0-1.414m2.835 4.25A1 1 0 0 0 4 6.01V9h3.586zM9.586 11H4v9a1 1 0 0 0 1 1h13.998c.164 0 .326-.041.47-.118zM15 3V2a1 1 0 1 1 2 0v1h2a3 3 0 0 1 3 3v9.5a1 1 0 1 1-2 0V11h-4.5a1 1 0 1 1 0-2H20V6a1 1 0 0 0-1-1h-2v1a1 1 0 1 1-2 0V5H9.5a1 1 0 0 1 0-2z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        _i = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "20",
            height: "20",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 20 20",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M.745 1.078a.83.83 0 0 1 1.178 0l1.811 1.811.024.024 4.825 4.825.012.012 9.995 9.994a.834.834 0 0 1-1.179 1.179l-.327-.327q-.108.09-.227.168a2.5 2.5 0 0 1-1.355.403H3.834a2.5 2.5 0 0 1-2.5-2.5V4.987a2.5 2.5 0 0 1 .581-1.561l-1.17-1.17a.83.83 0 0 1 0-1.178m15.589 11.839v-3.75h-3.75a.833.833 0 0 1 0-1.667h3.75V5a.833.833 0 0 0-.833-.833h-1.667V5a.834.834 0 1 1-1.667 0v-.833H7.584a.833.833 0 0 1 0-1.667h4.583v-.833a.834.834 0 0 1 1.667 0V2.5H15.5A2.5 2.5 0 0 1 18 5v7.917a.834.834 0 0 1-1.667 0M3.108 4.619a.83.83 0 0 0-.107.394V7.5h2.988zm-.107 12.048a.83.83 0 0 0 .833.833h11.665a.8.8 0 0 0 .389-.1L7.656 9.166H3.001z"
            })
          })
        }))),
        Wi = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M1.724 1.724c.52-.52 1.364-.52 1.885 0l2.912 2.912q.023.02.043.043l7.711 7.71.001.002L28.68 26.795l.044.044 1.552 1.551a1.333 1.333 0 0 1-1.886 1.886l-.52-.52a4 4 0 0 1-2.534.91H6.666a4 4 0 0 1-4-4V7.979a4 4 0 0 1 .93-2.497L1.723 3.609a1.333 1.333 0 0 1 0-1.885m3.78 5.666c-.107.19-.166.404-.171.623V12h4.781zm7.277 7.277H5.333v12A1.333 1.333 0 0 0 6.666 28h18.666c.218 0 .433-.055.624-.158zm8.552-13.334c.736 0 1.333.597 1.333 1.334V4h2.667a4 4 0 0 1 4 4v12.667a1.333 1.333 0 1 1-2.667 0v-6h-6a1.333 1.333 0 0 1 0-2.667h6V8a1.333 1.333 0 0 0-1.333-1.333h-2.667V8A1.333 1.333 0 1 1 20 8V6.667h-7.334a1.333 1.333 0 0 1 0-2.667H20V2.667c0-.737.597-1.334 1.333-1.334",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Zi = (0, t.forwardRef)((({
          size: e = "SM",
          ...l
        }, a) => {
          const t = (0, o.v6)(l, {
            className: g({
              size: e
            })
          });
          return (0, r.jsxs)(r.Fragment, {
            children: ["SM" === e && (0, r.jsx)(Ei, {
              ...t,
              ref: a
            }), "LG" === e && (0, r.jsx)(Ui, {
              ...t,
              ref: a
            }), "MD" === e && (0, r.jsx)(_i, {
              ...t,
              ref: a
            }), "XL" === e && (0, r.jsx)(Wi, {
              ...t,
              ref: a
            })]
          })
        }));
      Zi.displayName = "CalendarOff", Zi.categories = ["time"], Zi.tags = ["date", "day", "month", "year", "event", "delete", "remove"], Zi.SM = Ei, Zi.LG = Ui, Zi.MD = _i, Zi.XL = Wi;
      const Yi = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M8 2a6 6 0 1 0 0 12A6 6 0 0 0 8 2M.667 8a7.333 7.333 0 1 1 14.667 0A7.333 7.333 0 0 1 .667 8M8 3.333c.369 0 .667.299.667.667v3.588l2.298 1.15a.667.667 0 1 1-.596 1.192L7.702 8.596A.67.67 0 0 1 7.334 8V4c0-.368.298-.667.666-.667",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Ki = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12m11-7a1 1 0 0 1 1 1v5.382l3.447 1.724a1 1 0 1 1-.894 1.788l-4-2A1 1 0 0 1 11 12V6a1 1 0 0 1 1-1",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Qi = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "20",
            height: "20",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 20 20",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M17.166 10a7.5 7.5 0 1 0-15 0 7.5 7.5 0 0 0 15 0M8.833 5A.833.833 0 0 1 10.5 5v4.485l2.872 1.437.074.042a.834.834 0 0 1-.819 1.448l-3.333-1.666A.84.84 0 0 1 8.833 10zm10 5A9.167 9.167 0 1 1 .499 10a9.167 9.167 0 0 1 18.334 0"
            })
          })
        }))),
        Ji = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M16 4C9.372 4 4 9.373 4 16s5.372 12 12 12c6.627 0 12-5.373 12-12S22.627 4 16 4M1.333 16C1.333 7.9 7.9 1.333 16 1.333S30.666 7.9 30.666 16 24.1 30.667 16 30.667 1.333 24.1 1.333 16M16 6.667c.736 0 1.333.597 1.333 1.333v7.176l4.596 2.298a1.333 1.333 0 0 1-1.192 2.385l-5.334-2.667A1.33 1.33 0 0 1 14.666 16V8c0-.736.597-1.333 1.334-1.333",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        $i = (0, t.forwardRef)((({
          size: e = "SM",
          ...l
        }, a) => {
          const t = (0, o.v6)(l, {
            className: g({
              size: e
            })
          });
          return (0, r.jsxs)(r.Fragment, {
            children: ["SM" === e && (0, r.jsx)(Yi, {
              ...t,
              ref: a
            }), "LG" === e && (0, r.jsx)(Ki, {
              ...t,
              ref: a
            }), "MD" === e && (0, r.jsx)(Qi, {
              ...t,
              ref: a
            }), "XL" === e && (0, r.jsx)(Ji, {
              ...t,
              ref: a
            })]
          })
        }));
      $i.displayName = "Clock", $i.categories = ["time"], $i.tags = ["time", "watch", "alarm", "hour", "minute", "second", "planned", "watch"], $i.SM = Yi, $i.LG = Ki, $i.MD = Qi, $i.XL = Ji;
      const ed = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M4.667 2c0-.737.597-1.333 1.333-1.333h4c.736 0 1.333.596 1.333 1.333H12a2 2 0 0 1 2 2v9.333a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zM6 2.667v.666h4V2H6zm5.333.666c0 .737-.597 1.334-1.333 1.334H6a1.333 1.333 0 0 1-1.333-1.334H4A.667.667 0 0 0 3.333 4v9.333A.667.667 0 0 0 4 14h8a.667.667 0 0 0 .667-.667V4A.667.667 0 0 0 12 3.333z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        ld = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M7 3a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2h1a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3zm0 2H6a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1h-1a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2m8 0H9V3h6z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        ad = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "20",
            height: "20",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 20 20",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M12.167 2.5h-5v1.667h5zm1.666 1.667c0 .92-.746 1.666-1.666 1.667h-5c-.92 0-1.667-.747-1.667-1.667h-.833A.835.835 0 0 0 3.833 5v11.667l.005.081a.833.833 0 0 0 .829.752h10a.833.833 0 0 0 .833-.834V5a.833.833 0 0 0-.833-.833zm.834-1.667a2.5 2.5 0 0 1 2.5 2.5v11.667a2.5 2.5 0 0 1-2.5 2.5h-10a2.5 2.5 0 0 1-2.5-2.5V5a2.5 2.5 0 0 1 2.5-2.5H5.5c0-.92.747-1.667 1.667-1.667h5c.92 0 1.666.746 1.666 1.667z"
            })
          })
        }))),
        rd = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M9.333 4A2.667 2.667 0 0 1 12 1.334h8A2.667 2.667 0 0 1 22.667 4H24a4 4 0 0 1 4 4v18.667a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4V8a4 4 0 0 1 4-4zM12 5.332v1.335h8V4h-8zm10.667 1.335A2.667 2.667 0 0 1 20 9.334h-8a2.667 2.667 0 0 1-2.667-2.667H8A1.333 1.333 0 0 0 6.667 8v18.667A1.333 1.333 0 0 0 8 28h16a1.333 1.333 0 0 0 1.333-1.333V8A1.333 1.333 0 0 0 24 6.667z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        td = (0, t.forwardRef)((({
          size: e = "SM",
          ...l
        }, a) => {
          const t = (0, o.v6)(l, {
            className: g({
              size: e
            })
          });
          return (0, r.jsxs)(r.Fragment, {
            children: ["SM" === e && (0, r.jsx)(ed, {
              ...t,
              ref: a
            }), "LG" === e && (0, r.jsx)(ld, {
              ...t,
              ref: a
            }), "MD" === e && (0, r.jsx)(ad, {
              ...t,
              ref: a
            }), "XL" === e && (0, r.jsx)(rd, {
              ...t,
              ref: a
            })]
          })
        }));
      td.displayName = "Clipboard", td.categories = ["text"], td.tags = ["copy", "paste"], td.SM = ed, td.LG = ld, td.MD = ad, td.XL = rd;
      const sd = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M2.667 2A.67.67 0 0 0 2 2.667v6.666a.67.67 0 0 0 .667.667.667.667 0 1 1 0 1.333c-1.102 0-2-.898-2-2V2.667c0-1.102.898-2 2-2h6.667c1.101 0 2 .898 2 2a.667.667 0 0 1-1.334 0A.67.67 0 0 0 9.334 2zm4 4A.667.667 0 0 0 6 6.667v6.666c0 .368.299.667.667.667h6.667a.667.667 0 0 0 .666-.667V6.667A.667.667 0 0 0 13.334 6zm-2 .667a2 2 0 0 1 2-2h6.667a2 2 0 0 1 2 2v6.666a2 2 0 0 1-2 2H6.667a2 2 0 0 1-2-2z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        id = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M4 3c-.548 0-1 .452-1 1v10c0 .548.452 1 1 1a1 1 0 1 1 0 2c-1.652 0-3-1.348-3-3V4c0-1.652 1.348-3 3-3h10c1.652 0 3 1.348 3 3a1 1 0 1 1-2 0c0-.548-.452-1-1-1zm6 6a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V10a1 1 0 0 0-1-1zm-3 1a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H10a3 3 0 0 1-3-3z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        dd = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "20",
            height: "20",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 20 20",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M17.167 8.334a.834.834 0 0 0-.833-.834H8.001a.834.834 0 0 0-.834.834v8.333c0 .46.374.832.834.832h8.333c.46 0 .833-.372.833-.832zm-5-5a.84.84 0 0 0-.833-.834H3.001a.84.84 0 0 0-.834.833v8.333a.84.84 0 0 0 .749.83l.085.003.085.005a.834.834 0 0 1 0 1.659L3 14.166l-.255-.012a2.506 2.506 0 0 1-2.245-2.488V3.334c0-1.377 1.123-2.5 2.5-2.5h8.333c1.377 0 2.5 1.123 2.5 2.5a.833.833 0 0 1-1.667 0m6.667 13.332a2.5 2.5 0 0 1-2.5 2.5H8.001a2.5 2.5 0 0 1-2.5-2.5V8.334a2.5 2.5 0 0 1 2.5-2.5h8.333a2.5 2.5 0 0 1 2.5 2.5z"
            })
          })
        }))),
        od = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M5.333 4C4.603 4 4 4.603 4 5.334v13.333C4 19.397 4.603 20 5.333 20a1.333 1.333 0 1 1 0 2.667c-2.203 0-4-1.797-4-4V5.334c0-2.204 1.797-4 4-4h13.333c2.203 0 4 1.796 4 4a1.333 1.333 0 1 1-2.666 0C20 4.604 19.397 4 18.666 4zm8 8c-.736 0-1.333.597-1.333 1.334v13.333c0 .736.597 1.333 1.333 1.333h13.333c.737 0 1.334-.597 1.334-1.333V13.334c0-.737-.597-1.334-1.334-1.334zm-4 1.334a4 4 0 0 1 4-4h13.333a4 4 0 0 1 4 4v13.333a4 4 0 0 1-4 4H13.333a4 4 0 0 1-4-4z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        nd = (0, t.forwardRef)((({
          size: e = "SM",
          ...l
        }, a) => {
          const t = (0, o.v6)(l, {
            className: g({
              size: e
            })
          });
          return (0, r.jsxs)(r.Fragment, {
            children: ["SM" === e && (0, r.jsx)(sd, {
              ...t,
              ref: a
            }), "LG" === e && (0, r.jsx)(id, {
              ...t,
              ref: a
            }), "MD" === e && (0, r.jsx)(dd, {
              ...t,
              ref: a
            }), "XL" === e && (0, r.jsx)(od, {
              ...t,
              ref: a
            })]
          })
        }));
      nd.displayName = "Copy", nd.categories = ["text"], nd.tags = ["clone", "duplicate", "multiple"], nd.SM = sd, nd.LG = id, nd.MD = dd, nd.XL = od;
      const hd = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, r.jsx)("path", {
              stroke: e,
              d: "M2 8h.007M2 12h.007M2 4h.007m3.326 4H14m-8.667 4H14M5.333 4H14",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeWidth: "1.333"
            })
          })
        }))),
        cd = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, r.jsx)("path", {
              stroke: e,
              d: "M3 12h.01M3 18h.01M3 6h.01M8 12h13M8 18h13M8 6h13",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeWidth: "2"
            })
          })
        }))),
        fd = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "20",
            height: "20",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 20 20",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "m2.175 14.167.085.004a.834.834 0 0 1 0 1.658l-.085.004h-.009a.833.833 0 1 1 0-1.666zm14.991 0 .085.004a.833.833 0 0 1-.085 1.662H6.333a.834.834 0 1 1 0-1.666zm-14.991-5 .085.004a.834.834 0 0 1 0 1.658l-.085.004h-.009a.833.833 0 1 1 0-1.666zm14.991 0 .085.004a.833.833 0 0 1-.085 1.662H6.333a.834.834 0 1 1 0-1.666zm-14.991-5 .085.004a.834.834 0 0 1 0 1.658l-.085.004h-.009a.833.833 0 1 1 0-1.666zm14.991 0a.833.833 0 1 1 0 1.666H6.333a.834.834 0 1 1 0-1.666z"
            })
          })
        }))),
        wd = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, r.jsx)("path", {
              stroke: e,
              d: "M4 16h.013M4 24h.013M4 8h.013m6.654 8H28m-17.333 8H28M10.667 8H28",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeWidth: "2.667"
            })
          })
        }))),
        vd = (0, t.forwardRef)((({
          size: e = "SM",
          ...l
        }, a) => {
          const t = (0, o.v6)(l, {
            className: g({
              size: e
            })
          });
          return (0, r.jsxs)(r.Fragment, {
            children: ["SM" === e && (0, r.jsx)(hd, {
              ...t,
              ref: a
            }), "LG" === e && (0, r.jsx)(cd, {
              ...t,
              ref: a
            }), "MD" === e && (0, r.jsx)(fd, {
              ...t,
              ref: a
            }), "XL" === e && (0, r.jsx)(wd, {
              ...t,
              ref: a
            })]
          })
        }));
      vd.displayName = "List", vd.categories = ["text"], vd.tags = ["options", "index", "table of contents", "menu", "side nav", "navigation", "bullet", "to do"], vd.SM = hd, vd.LG = cd, vd.MD = fd, vd.XL = wd;
      const xd = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M1.333 4c0-.368.298-.667.667-.667h12a.667.667 0 1 1 0 1.334H2A.667.667 0 0 1 1.333 4M4 8c0-.368.298-.667.666-.667h6.667a.667.667 0 1 1 0 1.334H4.666A.667.667 0 0 1 4 8m2 4c0-.368.298-.666.666-.666h2.667a.667.667 0 0 1 0 1.333H6.666A.667.667 0 0 1 6 12",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        gd = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M2 6a1 1 0 0 1 1-1h18a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1m4 6a1 1 0 0 1 1-1h10a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1m3 6a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2h-4a1 1 0 0 1-1-1",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        jd = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "20",
            height: "20",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 20 20",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "m15.5 14.167.086.004a.834.834 0 0 1-.086 1.662H3.834a.834.834 0 1 1 0-1.666zm-1.666-5 .085.004a.834.834 0 0 1 0 1.658l-.085.004H5.5a.833.833 0 0 1 0-1.666zm3.333-5a.833.833 0 1 1 0 1.666h-15a.833.833 0 1 1 0-1.666z"
            })
          })
        }))),
        md = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M2.667 8c0-.737.597-1.333 1.333-1.333h24a1.333 1.333 0 1 1 0 2.666H4A1.333 1.333 0 0 1 2.667 8M8 16c0-.736.597-1.334 1.334-1.334h13.333a1.333 1.333 0 0 1 0 2.667H9.334A1.333 1.333 0 0 1 8 16m4 8c0-.736.597-1.334 1.334-1.334h5.333a1.333 1.333 0 0 1 0 2.667h-5.333A1.333 1.333 0 0 1 12 24",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        pd = (0, t.forwardRef)((({
          size: e = "SM",
          ...l
        }, a) => {
          const t = (0, o.v6)(l, {
            className: g({
              size: e
            })
          });
          return (0, r.jsxs)(r.Fragment, {
            children: ["SM" === e && (0, r.jsx)(xd, {
              ...t,
              ref: a
            }), "LG" === e && (0, r.jsx)(gd, {
              ...t,
              ref: a
            }), "MD" === e && (0, r.jsx)(jd, {
              ...t,
              ref: a
            }), "XL" === e && (0, r.jsx)(md, {
              ...t,
              ref: a
            })]
          })
        }));
      pd.displayName = "ListFilter", pd.categories = ["text"], pd.tags = ["options"], pd.SM = xd, pd.LG = gd, pd.MD = jd, pd.XL = md;
      const ud = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "20",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 16 20",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M5.334.667c.368 0 .666.298.666.666v2a.667.667 0 0 1-1.333 0v-2c0-.368.298-.666.667-.666m3.184 1.166a4.004 4.004 0 0 1 5.558 0l.001.001a4.003 4.003 0 0 1 .188 5.557.7.7 0 0 1-.088.108L13.03 8.64a.667.667 0 0 1-.94-.945l1.061-1.055a1 1 0 0 1 .063-.075 2.67 2.67 0 0 0-.064-3.771 2.67 2.67 0 0 0-3.703-.003L8.304 3.926a.667.667 0 1 1-.94-.946zm-7.851 3.5c0-.368.298-.667.667-.667h2a.667.667 0 0 1 0 1.334h-2a.667.667 0 0 1-.667-.667m3.251 2.029c.26.26.26.682 0 .943L2.783 9.44a2.67 2.67 0 0 0 .067 3.767 2.67 2.67 0 0 0 3.703.004l1.136-1.136a.667.667 0 0 1 .943.943l-1.149 1.148a4.004 4.004 0 0 1-5.559 0 4.003 4.003 0 0 1-.097-5.656l.009-.008 1.14-1.14c.26-.26.682-.26.942 0M12 10.666c0-.368.299-.666.667-.666h2a.667.667 0 1 1 0 1.333h-2a.667.667 0 0 1-.667-.667M10.667 12c.368 0 .667.298.667.666v2a.667.667 0 0 1-1.334 0v-2c0-.368.299-.666.667-.666",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Md = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "28",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 24 28",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M8 1a1 1 0 0 1 1 1v3a1 1 0 0 1-2 0V2a1 1 0 0 1 1-1m4.776 1.75a6.006 6.006 0 0 1 8.338 0l.002.002a6.004 6.004 0 0 1 .281 8.335 1 1 0 0 1-.132.162l-1.72 1.71a1 1 0 0 1-1.41-1.418l1.591-1.582a1 1 0 0 1 .094-.113 4.004 4.004 0 0 0-.095-5.657 4.006 4.006 0 0 0-5.556-.004l-1.714 1.704a1 1 0 1 1-1.41-1.418l1.72-1.71zM1 8a1 1 0 0 1 1-1h3a1 1 0 0 1 0 2H2a1 1 0 0 1-1-1m4.877 3.043a1 1 0 0 1 0 1.414l-1.703 1.704a4.004 4.004 0 0 0 .1 5.65 4.006 4.006 0 0 0 5.556.005l1.703-1.703a1 1 0 0 1 1.414 1.414l-1.71 1.71-.013.013a6.006 6.006 0 0 1-8.338 0l-.002-.002a6.004 6.004 0 0 1-.144-8.482l.013-.013 1.71-1.71a1 1 0 0 1 1.414 0M18 16a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2h-3a1 1 0 0 1-1-1m-2 2a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0v-3a1 1 0 0 1 1-1",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Rd = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "20",
            height: "24",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 20 24",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M12.167 18.334v-2.5a.834.834 0 0 1 1.667 0v2.5a.833.833 0 0 1-1.667 0m-8.78-9.131a.832.832 0 1 1 1.177 1.177L3.15 11.794a3.34 3.34 0 0 0 .08 4.714l.12.11a3.34 3.34 0 0 0 4.515-.11l1.414-1.414a.834.834 0 0 1 1.179 1.178l-1.436 1.437a5.005 5.005 0 0 1-6.949 0v-.003a5.003 5.003 0 0 1-.12-7.068l.009-.01zM18 12.5a.834.834 0 0 1 0 1.666h-2.5a.834.834 0 1 1 0-1.667zM13.788.89c1.215 0 2.386.441 3.296 1.237l.179.165a5.004 5.004 0 0 1 .23 6.95 1 1 0 0 1-.104.133l-1.434 1.424a.834.834 0 0 1-1.176-1.181l1.328-1.323a1 1 0 0 1 .078-.09 3.337 3.337 0 0 0-.08-4.714 3.34 3.34 0 0 0-4.634 0l-1.424 1.417-.064.056a.833.833 0 0 1-1.112-1.239L10.305 2.3l.008-.008A5 5 0 0 1 13.789.889M3.834 5.833l.085.003A.833.833 0 0 1 3.834 7.5h-2.5a.833.833 0 1 1 0-1.666zm1.667-1.667v-2.5a.833.833 0 1 1 1.666 0v2.5a.833.833 0 1 1-1.666 0"
            })
          })
        }))),
        bd = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "36",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 32 36",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M10.666 1.334c.737 0 1.334.596 1.334 1.333v4a1.333 1.333 0 0 1-2.667 0v-4c0-.737.597-1.333 1.333-1.333m6.368 2.333a8.01 8.01 0 0 1 11.118 0l.002.002a8.006 8.006 0 0 1 .375 11.114q-.075.116-.176.216l-2.293 2.28a1.333 1.333 0 1 1-1.88-1.891l2.121-2.11q.057-.079.126-.15a5.34 5.34 0 0 0-.127-7.542 5.34 5.34 0 0 0-7.408-.006l-2.286 2.272a1.333 1.333 0 1 1-1.88-1.89l2.294-2.28zm-15.701 7c0-.737.597-1.333 1.333-1.333h4a1.333 1.333 0 1 1 0 2.666h-4a1.333 1.333 0 0 1-1.333-1.333m6.503 4.057c.52.52.52 1.365 0 1.886l-2.271 2.27a5.34 5.34 0 0 0 .135 7.535 5.34 5.34 0 0 0 7.406.007l2.27-2.271a1.333 1.333 0 1 1 1.886 1.885l-2.28 2.28-.017.017a8.01 8.01 0 0 1-11.118 0l-.001-.002a8.005 8.005 0 0 1-.192-11.31l.016-.017 2.28-2.28c.52-.52 1.365-.52 1.886 0M24 21.334c0-.737.597-1.334 1.333-1.334h4a1.333 1.333 0 1 1 0 2.667h-4A1.333 1.333 0 0 1 24 21.333M21.333 24c.736 0 1.333.597 1.333 1.334v4a1.333 1.333 0 1 1-2.666 0v-4c0-.737.597-1.334 1.333-1.334",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Ld = (0, t.forwardRef)((({
          size: e = "SM",
          ...l
        }, a) => {
          const t = (0, o.v6)(l, {
            className: g({
              size: e
            })
          });
          return (0, r.jsxs)(r.Fragment, {
            children: ["SM" === e && (0, r.jsx)(ud, {
              ...t,
              ref: a
            }), "LG" === e && (0, r.jsx)(Md, {
              ...t,
              ref: a
            }), "MD" === e && (0, r.jsx)(Rd, {
              ...t,
              ref: a
            }), "XL" === e && (0, r.jsx)(bd, {
              ...t,
              ref: a
            })]
          })
        }));
      Ld.displayName = "Unlink", Ld.categories = ["text"], Ld.tags = ["url", "unchain"], Ld.SM = ud, Ld.LG = Md, Ld.MD = Rd, Ld.XL = bd;
      const zd = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M3.334 1.333c0-.368.298-.666.666-.666h8c.368 0 .667.298.667.666V2H13a2.333 2.333 0 1 1 0 4.667h-.38a4.67 4.67 0 0 1-2.62 3.55v1.112c.003.006.01.022.033.048.045.051.124.11.226.157l-.279.606.278-.606c.907.415 1.513 1.374 1.689 2.466h1.387a.667.667 0 0 1 0 1.333H2.667a.667.667 0 0 1 0-1.333h1.387c.176-1.092.781-2.05 1.688-2.466a.7.7 0 0 0 .226-.157.2.2 0 0 0 .032-.048v-1.113a4.67 4.67 0 0 1-2.618-3.55H3A2.333 2.333 0 1 1 3 2h.334zm0 2H3a1 1 0 0 0 0 2h.334zM4.667 2h6.667v4a3.333 3.333 0 1 1-6.667 0zm8 1.333v2H13a1 1 0 1 0 0-2zM7.334 10.62v.714c0 .767-.626 1.224-1.035 1.412l-.001.001c-.368.168-.732.615-.887 1.254h5.179c-.155-.639-.52-1.086-.887-1.254h-.001c-.41-.189-1.035-.646-1.035-1.413v-.714a4.7 4.7 0 0 1-1.333 0",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Cd = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M5 2a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v1h.5a3.5 3.5 0 1 1 0 7h-.572A7 7 0 0 1 15 15.325v1.669c.004.01.015.033.049.071.068.077.186.166.339.236l-.418.909.416-.91c1.361.624 2.27 2.062 2.534 3.7H20a1 1 0 1 1 0 2H4a1 1 0 1 1 0-2h2.08c.264-1.638 1.172-3.076 2.533-3.699.152-.07.27-.159.338-.236A.3.3 0 0 0 9 16.994v-1.67A7 7 0 0 1 5.072 10H4.5a3.5 3.5 0 1 1 0-7H5zm0 3h-.5a1.5 1.5 0 0 0 0 3H5zm2-2h10v6A5 5 0 1 1 7 9zm12 2v3h.5a1.5 1.5 0 0 0 0-3zm-8 10.928V17c0 1.15-.939 1.836-1.552 2.119h-.002c-.551.253-1.098.923-1.33 1.881h7.768c-.232-.958-.779-1.628-1.33-1.88l-.002-.002C13.94 18.837 13 18.15 13 17v-1.072a7 7 0 0 1-2 0",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Ad = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "20",
            height: "20",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 20 20",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M17.5 5.417a1.25 1.25 0 0 0-1.25-1.25h-.416v2.5h.416a1.25 1.25 0 0 0 1.25-1.25m-6.666 7.855q-.413.061-.834.062a6 6 0 0 1-.833-.062v.309a2.5 2.5 0 0 1-1.162 2.083 3.33 3.33 0 0 0-1.23 1.836h6.452a3.331 3.331 0 0 0-1.231-1.836 2.5 2.5 0 0 1-1.162-2.083zM2.5 5.417a1.25 1.25 0 0 0 1.25 1.25h.417v-2.5H3.75a1.25 1.25 0 0 0-1.25 1.25M5.834 2.5v5a4.167 4.167 0 1 0 8.333 0v-5zm10.416 0a2.918 2.918 0 0 1 0 5.834h-.477A5.83 5.83 0 0 1 12.5 12.77v.792a.84.84 0 0 0 .32.647l.087.06.07.046a5 5 0 0 1 1.952 3.185h1.738a.834.834 0 0 1 0 1.666H3.334a.834.834 0 1 1 0-1.666h1.738a5 5 0 0 1 1.952-3.185l.07-.046a.83.83 0 0 0 .406-.707v-.793a5.83 5.83 0 0 1-3.272-4.435H3.75a2.918 2.918 0 0 1 0-5.834h.417A1.666 1.666 0 0 1 5.834.833h8.333A1.667 1.667 0 0 1 15.834 2.5z"
            })
          })
        }))),
        Hd = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M6.666 2.667c0-.737.597-1.333 1.334-1.333h16c.736 0 1.333.596 1.333 1.333V4H26a4.667 4.667 0 0 1 0 9.334h-.763A9.33 9.33 0 0 1 20 20.433v2.226c.005.013.02.044.065.095.09.103.248.221.452.315l-.557 1.211.555-1.212c1.814.83 3.025 2.748 3.378 4.932h2.773a1.333 1.333 0 1 1 0 2.667H5.333a1.333 1.333 0 1 1 0-2.667h2.773c.353-2.184 1.563-4.1 3.377-4.931.203-.094.361-.212.451-.315a.4.4 0 0 0 .066-.096v-2.225a9.33 9.33 0 0 1-5.238-7.1H6A4.667 4.667 0 0 1 6 4h.666zm0 4H6a2 2 0 1 0 0 4h.666zM9.333 4h13.333v8a6.666 6.666 0 1 1-13.333 0zm16 2.667v4H26a2 2 0 0 0 0-4zm-10.667 14.57v1.43c0 1.534-1.251 2.448-2.07 2.824l-.002.002c-.735.336-1.463 1.23-1.773 2.507h10.357c-.31-1.277-1.038-2.171-1.773-2.507l-.003-.002c-.817-.376-2.069-1.29-2.069-2.824v-1.43a9.3 9.3 0 0 1-2.667 0",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Vd = (0, t.forwardRef)((({
          size: e = "SM",
          ...l
        }, a) => {
          const t = (0, o.v6)(l, {
            className: g({
              size: e
            })
          });
          return (0, r.jsxs)(r.Fragment, {
            children: ["SM" === e && (0, r.jsx)(zd, {
              ...t,
              ref: a
            }), "LG" === e && (0, r.jsx)(Cd, {
              ...t,
              ref: a
            }), "MD" === e && (0, r.jsx)(Ad, {
              ...t,
              ref: a
            }), "XL" === e && (0, r.jsx)(Hd, {
              ...t,
              ref: a
            })]
          })
        }));
      Vd.displayName = "Trophy", Vd.categories = ["sports", "gaming"], Vd.tags = ["prize", "sports", "winner", "achievement", "award", "champion", "celebration", "victory"], Vd.SM = zd, Vd.LG = Cd, Vd.MD = Ad, Vd.XL = Hd;
      const Id = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M12.165 4.362A10 10 0 0 0 9.69 3.6q-.175.314-.317.645a9.2 9.2 0 0 0-2.747 0q-.142-.33-.317-.645a10 10 0 0 0-2.478.764C2.263 6.682 1.84 8.942 2.051 11.17a10 10 0 0 0 3.036 1.524 7.3 7.3 0 0 0 .65-1.049 6.5 6.5 0 0 1-1.023-.489q.129-.094.25-.188a7.13 7.13 0 0 0 6.071 0q.123.1.251.188-.492.29-1.025.49.28.552.65 1.048a10 10 0 0 0 3.038-1.523c.25-2.585-.426-4.824-1.784-6.81M6.007 9.8c-.592 0-1.081-.537-1.081-1.198S5.398 7.4 6.005 7.4s1.092.542 1.081 1.202c-.01.661-.476 1.198-1.08 1.198m3.986 0c-.592 0-1.08-.537-1.08-1.198S9.387 7.4 9.994 7.4s1.09.542 1.08 1.202c-.011.661-.476 1.198-1.08 1.198"
            })
          })
        }))),
        Bd = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M18.248 6.343A15 15 0 0 0 14.534 5.2q-.263.471-.476.967a13.8 13.8 0 0 0-4.12 0q-.213-.495-.476-.967a15 15 0 0 0-3.717 1.146c-2.35 3.477-2.987 6.867-2.669 10.21a15 15 0 0 0 4.555 2.287q.554-.747.975-1.573a9.7 9.7 0 0 1-1.536-.734q.195-.142.377-.283a10.7 10.7 0 0 0 9.106 0q.186.152.377.283c-.49.29-1.006.536-1.54.735q.421.827.976 1.572a14.9 14.9 0 0 0 4.558-2.286c.373-3.876-.639-7.236-2.676-10.214M9.01 14.5c-.888 0-1.621-.805-1.621-1.796S8.097 10.9 9.007 10.9s1.638.813 1.623 1.804c-.016.99-.715 1.796-1.62 1.796m5.98 0c-.889 0-1.62-.805-1.62-1.796s.708-1.804 1.62-1.804 1.634.813 1.618 1.804c-.015.99-.713 1.796-1.618 1.796"
            })
          })
        }))),
        Sd = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "20",
            height: "20",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 20 20",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M14.86 5.421A11.3 11.3 0 0 0 11.97 4.5q-.204.38-.37.78a10.4 10.4 0 0 0-3.205 0 8 8 0 0 0-.37-.78 11.4 11.4 0 0 0-2.89.924c-1.829 2.803-2.324 5.537-2.077 8.232 1.07.82 2.27 1.444 3.543 1.844q.43-.601.759-1.268a7.4 7.4 0 0 1-1.195-.592q.15-.114.293-.228c1.108.54 2.317.82 3.541.82s2.433-.28 3.541-.82q.144.123.293.228a7.5 7.5 0 0 1-1.197.593q.328.667.759 1.267a11.4 11.4 0 0 0 3.544-1.842c.291-3.126-.496-5.835-2.08-8.237M7.673 12c-.69 0-1.26-.65-1.26-1.449s.55-1.454 1.258-1.454 1.274.655 1.262 1.454c-.012.8-.556 1.449-1.26 1.449m4.652 0c-.692 0-1.26-.65-1.26-1.449s.55-1.454 1.26-1.454c.709 0 1.27.655 1.258 1.454-.012.8-.555 1.449-1.258 1.449"
            })
          })
        }))),
        yd = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M24.33 8.423A19.9 19.9 0 0 0 19.38 6.9a14 14 0 0 0-.634 1.29 18.4 18.4 0 0 0-5.495 0q-.283-.662-.635-1.29A20 20 0 0 0 7.66 8.427c-3.133 4.636-3.983 9.157-3.558 13.614a20 20 0 0 0 6.073 3.049q.738-.994 1.3-2.098a13 13 0 0 1-2.048-.977q.259-.189.502-.378a14.26 14.26 0 0 0 12.142 0q.247.203.502.378-.983.58-2.052.98.56 1.102 1.3 2.095a19.9 19.9 0 0 0 6.077-3.047c.498-5.169-.851-9.648-3.568-13.62M12.013 19.3c-1.183 0-2.161-1.074-2.161-2.395 0-1.322.944-2.405 2.157-2.405s2.184 1.083 2.164 2.405-.954 2.395-2.16 2.395m7.974 0c-1.186 0-2.16-1.074-2.16-2.395 0-1.322.944-2.405 2.16-2.405 1.215 0 2.178 1.083 2.157 2.405s-.951 2.395-2.157 2.395"
            })
          })
        }))),
        Dd = (0, t.forwardRef)((({
          size: e = "SM",
          ...l
        }, a) => {
          const t = (0, o.v6)(l, {
            className: g({
              size: e
            })
          });
          return (0, r.jsxs)(r.Fragment, {
            children: ["SM" === e && (0, r.jsx)(Id, {
              ...t,
              ref: a
            }), "LG" === e && (0, r.jsx)(Bd, {
              ...t,
              ref: a
            }), "MD" === e && (0, r.jsx)(Sd, {
              ...t,
              ref: a
            }), "XL" === e && (0, r.jsx)(yd, {
              ...t,
              ref: a
            })]
          })
        }));
      Dd.displayName = "Discord", Dd.categories = ["brands", "social"], Dd.tags = ["Social media", "Video", "Player", "Game", "Community", "App", "Share", "Logo"], Dd.SM = Id, Dd.LG = Bd, Dd.MD = Sd, Dd.XL = yd;
      const Nd = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M5.515 2.042c-.638.03-1.074.132-1.455.282-.395.153-.73.36-1.062.694a2.9 2.9 0 0 0-.69 1.063c-.148.382-.248.818-.276 1.457s-.034.844-.031 2.474c.003 1.629.01 1.833.041 2.473.03.639.132 1.074.282 1.456.154.394.36.728.694 1.061s.668.537 1.064.69c.382.147.818.248 1.457.276.638.028.844.034 2.473.031s1.834-.01 2.474-.04 1.073-.133 1.455-.282c.394-.154.729-.36 1.061-.694a2.9 2.9 0 0 0 .69-1.064c.148-.382.248-.818.276-1.456.028-.64.034-.845.031-2.474s-.01-1.834-.04-2.474-.133-1.074-.282-1.456a2.95 2.95 0 0 0-.694-1.061 2.9 2.9 0 0 0-1.064-.69c-.382-.147-.818-.248-1.457-.276-.638-.027-.844-.034-2.473-.031s-1.834.01-2.474.041m.07 10.847c-.585-.026-.902-.123-1.114-.204a1.9 1.9 0 0 1-.691-.448 1.85 1.85 0 0 1-.45-.689c-.082-.212-.181-.529-.209-1.114-.03-.632-.036-.822-.04-2.424-.003-1.602.003-1.791.031-2.424.025-.584.123-.902.204-1.114.108-.28.238-.48.448-.69.21-.212.409-.342.689-.451.211-.083.529-.18 1.113-.209.633-.03.823-.036 2.424-.039 1.602-.004 1.792.002 2.425.03.585.026.903.123 1.114.204.28.108.48.238.69.448.212.21.342.409.451.69.083.21.181.527.209 1.112.03.633.037.823.04 2.424.002 1.602-.003 1.792-.031 2.424-.026.585-.123.903-.204 1.115-.108.28-.238.48-.448.69-.21.211-.409.341-.689.45-.211.083-.529.182-1.113.21-.633.03-.822.035-2.425.039s-1.791-.003-2.424-.03m4.892-8.096a.72.72 0 1 0 1.44-.002.72.72 0 0 0-1.44.002M4.919 8.006a3.08 3.08 0 1 0 6.162-.012 3.08 3.08 0 0 0-6.162.012M6 8.004a2 2 0 1 1 4-.008 2 2 0 0 1-4 .008"
            })
          })
        }))),
        Gd = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M8.273 3.063c-.958.045-1.612.198-2.184.423-.591.23-1.093.54-1.592 1.04a4.4 4.4 0 0 0-1.035 1.596c-.222.572-.372 1.227-.414 2.185s-.052 1.266-.047 3.71.016 2.75.062 3.71c.046.958.198 1.612.423 2.184.23.591.54 1.093 1.04 1.592.502.5 1.003.806 1.597 1.035.572.221 1.227.372 2.185.414s1.266.052 3.71.047 2.75-.016 3.71-.061c.96-.046 1.61-.199 2.183-.423a4.4 4.4 0 0 0 1.592-1.04 4.4 4.4 0 0 0 1.035-1.597c.221-.572.372-1.227.414-2.184.042-.96.051-1.268.047-3.711-.005-2.444-.016-2.75-.061-3.71-.046-.96-.198-1.612-.423-2.184a4.4 4.4 0 0 0-1.04-1.592c-.501-.5-1.004-.806-1.597-1.035-.572-.221-1.227-.372-2.185-.414s-1.266-.052-3.71-.047-2.75.015-3.71.062m.105 16.27c-.878-.038-1.354-.184-1.672-.306a2.8 2.8 0 0 1-1.036-.671 2.8 2.8 0 0 1-.675-1.034c-.124-.317-.272-.793-.313-1.67-.045-.95-.054-1.234-.06-3.637s.005-2.687.046-3.636c.038-.877.184-1.354.306-1.671.162-.421.357-.72.671-1.036a2.8 2.8 0 0 1 1.034-.675c.317-.124.793-.272 1.67-.313.95-.045 1.234-.054 3.637-.06s2.687.004 3.637.046c.876.038 1.354.183 1.67.306.421.162.72.357 1.037.671s.511.613.675 1.034c.124.317.271.792.313 1.67.045.95.055 1.234.06 3.636s-.005 2.688-.046 3.636c-.038.877-.184 1.354-.306 1.672-.162.42-.357.72-.672 1.036-.314.316-.613.511-1.033.675-.317.124-.794.271-1.67.313-.95.045-1.234.054-3.637.06s-2.687-.005-3.636-.046M15.715 7.19a1.08 1.08 0 1 0 2.16-.004 1.08 1.08 0 0 0-2.16.004m-8.336 4.819a4.621 4.621 0 1 0 9.242-.018 4.621 4.621 0 0 0-9.242.018M9 12.006a3 3 0 1 1 6-.012 3 3 0 0 1-6 .012"
            })
          })
        }))),
        Xd = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "20",
            height: "20",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 20 20",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M7.1 3.049c-.744.035-1.252.154-1.697.329-.46.179-.85.42-1.238.81a3.4 3.4 0 0 0-.806 1.24c-.172.445-.289.955-.322 1.7s-.04.984-.036 2.885c.003 1.901.012 2.14.048 2.886.036.745.154 1.254.329 1.698.18.46.42.85.81 1.239.389.388.779.626 1.241.805.445.172.954.289 1.7.322.745.032.984.04 2.885.036 1.9-.003 2.14-.012 2.886-.047.747-.036 1.252-.155 1.697-.329.46-.18.85-.42 1.239-.81.388-.39.626-.78.804-1.241.173-.445.29-.954.322-1.7s.04-.985.037-2.885c-.003-1.901-.012-2.14-.047-2.886s-.154-1.253-.329-1.698c-.18-.46-.42-.85-.81-1.239a3.4 3.4 0 0 0-1.24-.804c-.446-.173-.955-.29-1.7-.322s-.985-.04-2.886-.037-2.14.012-2.886.048m.083 12.654c-.683-.03-1.053-.143-1.3-.238a2.2 2.2 0 0 1-.806-.522 2.16 2.16 0 0 1-.525-.804c-.096-.247-.212-.617-.244-1.3-.035-.737-.042-.958-.046-2.827-.004-1.87.003-2.09.036-2.828.029-.682.143-1.053.238-1.3.126-.327.277-.56.522-.806a2.16 2.16 0 0 1 .804-.525c.246-.096.616-.211 1.299-.243.738-.035.96-.042 2.828-.047s2.09.003 2.829.036c.682.03 1.053.143 1.3.238.326.126.56.277.805.522.246.245.398.477.525.804.097.246.211.616.244 1.299.035.738.043.96.046 2.828s-.003 2.09-.035 2.828c-.03.682-.143 1.053-.238 1.3a2.2 2.2 0 0 1-.523.806 2.2 2.2 0 0 1-.804.525c-.246.096-.617.211-1.298.244-.739.034-.96.042-2.83.046-1.868.004-2.089-.004-2.827-.036m5.706-9.444a.84.84 0 1 0 1.68-.003.84.84 0 0 0-1.68.003m-6.483 3.748a3.594 3.594 0 1 0 7.188-.014 3.594 3.594 0 0 0-7.188.014m1.26-.002a2.333 2.333 0 1 1 4.668-.01 2.333 2.333 0 0 1-4.667.01"
            })
          })
        }))),
        qd = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M11.03 4.084c-1.277.06-2.149.264-2.91.563a5.9 5.9 0 0 0-2.124 1.388 5.9 5.9 0 0 0-1.38 2.127c-.295.764-.495 1.637-.552 2.914-.056 1.278-.069 1.688-.063 4.947s.021 3.667.083 4.948c.061 1.276.264 2.148.564 2.91a5.9 5.9 0 0 0 1.387 2.123 5.9 5.9 0 0 0 2.13 1.38c.762.295 1.635.496 2.913.552s1.688.069 4.946.063 3.668-.02 4.948-.082c1.28-.06 2.147-.265 2.91-.563a5.9 5.9 0 0 0 2.122-1.388 5.9 5.9 0 0 0 1.38-2.128c.295-.764.496-1.637.552-2.913.056-1.28.069-1.69.063-4.948s-.021-3.667-.082-4.946c-.06-1.28-.264-2.15-.563-2.912a5.9 5.9 0 0 0-1.388-2.123 5.86 5.86 0 0 0-2.128-1.38c-.764-.295-1.636-.496-2.914-.552-1.277-.055-1.688-.069-4.947-.063s-3.667.02-4.947.083m.14 21.693c-1.17-.05-1.805-.245-2.228-.408a3.7 3.7 0 0 1-1.382-.895 3.7 3.7 0 0 1-.9-1.378c-.165-.423-.363-1.058-.417-2.228-.06-1.264-.072-1.644-.08-4.848-.006-3.204.006-3.583.061-4.848.05-1.169.246-1.805.408-2.228.216-.561.477-.96.895-1.382a3.7 3.7 0 0 1 1.379-.9c.423-.165 1.057-.361 2.227-.417 1.265-.06 1.644-.072 4.848-.08 3.203-.006 3.583.006 4.85.062 1.168.05 1.805.244 2.227.408.561.216.96.475 1.382.895s.681.817.9 1.378c.166.422.362 1.056.417 2.227.06 1.265.074 1.645.08 4.848s-.006 3.583-.061 4.848c-.051 1.17-.245 1.805-.408 2.23a3.7 3.7 0 0 1-.895 1.38c-.42.422-.819.682-1.379.9-.422.165-1.058.362-2.226.418-1.266.06-1.645.072-4.85.079s-3.582-.006-4.847-.06m9.782-16.192a1.44 1.44 0 1 0 2.88-.004 1.44 1.44 0 0 0-2.88.004M9.84 16.012a6.162 6.162 0 1 0 12.323-.026 6.162 6.162 0 0 0-12.323.026M12 16.008a4 4 0 1 1 8-.016 4 4 0 0 1-8 .016"
            })
          })
        }))),
        kd = (0, t.forwardRef)((({
          size: e = "SM",
          ...l
        }, a) => {
          const t = (0, o.v6)(l, {
            className: g({
              size: e
            })
          });
          return (0, r.jsxs)(r.Fragment, {
            children: ["SM" === e && (0, r.jsx)(Nd, {
              ...t,
              ref: a
            }), "LG" === e && (0, r.jsx)(Gd, {
              ...t,
              ref: a
            }), "MD" === e && (0, r.jsx)(Xd, {
              ...t,
              ref: a
            }), "XL" === e && (0, r.jsx)(qd, {
              ...t,
              ref: a
            })]
          })
        }));
      kd.displayName = "Instagram", kd.categories = ["brands", "social", "photography"], kd.tags = ["logo", "camera", "social media", "photo", "camera", "app", "share"], kd.SM = Nd, kd.LG = Gd, kd.MD = Xd, kd.XL = qd;
      const Fd = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M14 8.022C14 4.696 11.313 2 8 2S2 4.696 2 8.022a6.02 6.02 0 0 0 4.55 5.845V9.862H5.314v-1.84h1.238v-.793c0-2.05.924-3 2.929-3 .38 0 1.036.075 1.304.15v1.668a8 8 0 0 0-.693-.022c-.984 0-1.364.374-1.364 1.346v.65h1.96l-.337 1.841H8.727V14A6.015 6.015 0 0 0 14 8.022"
            })
          })
        }))),
        Pd = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M21 12.033C21 7.044 16.97 3 12 3s-9 4.044-9 9.033A9.03 9.03 0 0 0 9.826 20.8v-6.007H7.97v-2.76h1.856v-1.19c0-3.074 1.386-4.499 4.393-4.499.57 0 1.555.112 1.957.224V9.07a12 12 0 0 0-1.04-.033c-1.475 0-2.045.561-2.045 2.02v.976h2.94l-.506 2.76h-2.434V21C17.547 20.46 21 16.65 21 12.033"
            })
          })
        }))),
        Od = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "20",
            height: "20",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 20 20",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M17 10.026C17 6.146 13.866 3 10 3s-7 3.146-7 7.026c0 3.294 2.26 6.06 5.309 6.819v-4.672H6.866v-2.147h1.443V9.1c0-2.392 1.078-3.5 3.417-3.5.444 0 1.209.087 1.522.174v1.947a9 9 0 0 0-.808-.027c-1.148 0-1.592.437-1.592 1.571v.76h2.287l-.393 2.147h-1.894V17C14.314 16.58 17 13.618 17 10.026"
            })
          })
        }))),
        Td = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M28 16.044C28 9.392 22.627 4 16 4S4 9.392 4 16.044a12.04 12.04 0 0 0 9.101 11.69v-8.01h-2.474v-3.68H13.1v-1.586c0-4.1 1.848-6 5.858-6 .76 0 2.073.15 2.61.3v3.336c-.284-.03-.776-.045-1.387-.045-1.968 0-2.728.748-2.728 2.693v1.302h3.92l-.674 3.68h-3.246V28C23.396 27.28 28 22.202 28 16.044"
            })
          })
        }))),
        Ed = (0, t.forwardRef)((({
          size: e = "SM",
          ...l
        }, a) => {
          const t = (0, o.v6)(l, {
            className: g({
              size: e
            })
          });
          return (0, r.jsxs)(r.Fragment, {
            children: ["SM" === e && (0, r.jsx)(Fd, {
              ...t,
              ref: a
            }), "LG" === e && (0, r.jsx)(Pd, {
              ...t,
              ref: a
            }), "MD" === e && (0, r.jsx)(Od, {
              ...t,
              ref: a
            }), "XL" === e && (0, r.jsx)(Td, {
              ...t,
              ref: a
            })]
          })
        }));
      Ed.displayName = "Facebook", Ed.categories = ["social", "brands"], Ed.tags = ["logo", "social media", "profile", "feed", "app", "share"], Ed.SM = Fd, Ed.LG = Pd, Ed.MD = Od, Ed.XL = Td;
      const Ud = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: [(0, r.jsx)("path", {
              fill: e,
              d: "M5.143 2 3 4.143v7.714h2.571V14l2.143-2.143H9.43L13.286 8V2zm7.286 5.571-1.715 1.715H9l-1.5 1.5v-1.5H5.571V2.857h6.858z"
            }), (0, r.jsx)("path", {
              fill: e,
              d: "M11.143 4.357h-.857V6.93h.857zM8.786 4.357h-.857V6.93h.857z"
            })]
          })
        }))),
        _d = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: [(0, r.jsx)("path", {
              fill: e,
              d: "M7.514 3 4.3 6.214v11.572h3.857V21l3.214-3.214h2.572L19.728 12V3zm10.929 8.357L15.87 13.93H13.3l-2.25 2.25v-2.25H8.157V4.286h10.286z"
            }), (0, r.jsx)("path", {
              fill: e,
              d: "M16.514 6.536h-1.286v3.857h1.286zM12.978 6.536h-1.285v3.857h1.285z"
            })]
          })
        }))),
        Wd = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "20",
            height: "20",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 20 20",
            children: [(0, r.jsx)("path", {
              fill: e,
              d: "M6.004 3 3.27 5.5v9h3.28V17l2.735-2.5h2.188l4.922-4.5V3zM15.3 9.5l-2.188 2h-2.187l-1.914 1.75V11.5H6.55V4h8.75z"
            }), (0, r.jsx)("path", {
              fill: e,
              d: "M13.66 5.75h-1.094v3h1.094zM10.652 5.75H9.56v3h1.093z"
            })]
          })
        }))),
        Zd = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: [(0, r.jsx)("path", {
              fill: e,
              d: "M9.986 4 5.7 8.286v15.428h5.143V28l4.286-4.286h3.428L26.272 16V4zm14.571 11.143L21.13 18.57H17.7l-3 3v-3h-3.857V5.714h13.714z"
            }), (0, r.jsx)("path", {
              fill: e,
              d: "M21.986 8.714h-1.714v5.143h1.714zM17.272 8.714h-1.715v5.143h1.715z"
            })]
          })
        }))),
        Yd = (0, t.forwardRef)((({
          size: e = "SM",
          ...l
        }, a) => {
          const t = (0, o.v6)(l, {
            className: g({
              size: e
            })
          });
          return (0, r.jsxs)(r.Fragment, {
            children: ["SM" === e && (0, r.jsx)(Ud, {
              ...t,
              ref: a
            }), "LG" === e && (0, r.jsx)(_d, {
              ...t,
              ref: a
            }), "MD" === e && (0, r.jsx)(Wd, {
              ...t,
              ref: a
            }), "XL" === e && (0, r.jsx)(Zd, {
              ...t,
              ref: a
            })]
          })
        }));
      Yd.displayName = "Twitch", Yd.categories = ["brands", "social", "account", "gaming"], Yd.tags = ["logo", "social", "social media", "streaming", "game", "app", "share"], Yd.SM = Ud, Yd.LG = _d, Yd.MD = Wd, Yd.XL = Zd;
      const Kd = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M14.708 4.63a1.75 1.75 0 0 0-1.237-1.237C12.378 3.1 8 3.1 8 3.1s-4.378 0-5.47.293A1.75 1.75 0 0 0 1.293 4.63C1 5.722 1 8 1 8s0 2.278.293 3.37a1.75 1.75 0 0 0 1.237 1.237C3.622 12.9 8 12.9 8 12.9s4.378 0 5.47-.293a1.75 1.75 0 0 0 1.237-1.237C15 10.278 15 8 15 8s0-2.278-.293-3.37zM6.6 10.1V5.9L10.237 8z"
            })
          })
        }))),
        Qd = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M21.584 7.186a2.5 2.5 0 0 0-1.769-1.768C18.255 5 12 5 12 5s-6.255 0-7.814.418a2.5 2.5 0 0 0-1.768 1.768C2 8.746 2 12 2 12s0 3.255.418 4.814c.23.86.907 1.537 1.768 1.768C5.746 19 12 19 12 19s6.255 0 7.814-.418a2.5 2.5 0 0 0 1.768-1.768C22 15.254 22 12 22 12s0-3.255-.418-4.814zM10 15V9l5.196 3z"
            })
          })
        }))),
        Jd = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "20",
            height: "20",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 20 20",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M17.667 5.874c-.185-.738-.726-1.318-1.415-1.516C15.004 4 10 4 10 4s-5.004 0-6.25.358c-.69.198-1.231.778-1.415 1.516C2 7.21 2 10 2 10s0 2.79.335 4.126c.184.738.725 1.318 1.414 1.516C4.996 16 10 16 10 16s5.004 0 6.25-.358c.69-.198 1.231-.778 1.416-1.516C18 12.79 18 10 18 10s0-2.79-.334-4.126M8.4 12.57V7.429L12.556 10z"
            })
          })
        }))),
        $d = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M28.459 9.742a3.26 3.26 0 0 0-2.3-2.298C24.132 6.9 16 6.9 16 6.9s-8.13 0-10.158.544a3.26 3.26 0 0 0-2.298 2.298C3 11.77 3 16 3 16s0 4.231.544 6.258a3.26 3.26 0 0 0 2.298 2.298C7.87 25.1 16 25.1 16 25.1s8.13 0 10.158-.544a3.26 3.26 0 0 0 2.298-2.298C29 20.23 29 16 29 16s0-4.231-.544-6.258zM13.399 19.9V12.1l6.755 3.9z"
            })
          })
        }))),
        eo = (0, t.forwardRef)((({
          size: e = "SM",
          ...l
        }, a) => {
          const t = (0, o.v6)(l, {
            className: g({
              size: e
            })
          });
          return (0, r.jsxs)(r.Fragment, {
            children: ["SM" === e && (0, r.jsx)(Kd, {
              ...t,
              ref: a
            }), "LG" === e && (0, r.jsx)(Qd, {
              ...t,
              ref: a
            }), "MD" === e && (0, r.jsx)(Jd, {
              ...t,
              ref: a
            }), "XL" === e && (0, r.jsx)($d, {
              ...t,
              ref: a
            })]
          })
        }));
      eo.displayName = "Youtube", eo.categories = ["multimedia", "social", "brands"], eo.tags = ["logo", "social", "video", "play", "video", "player", "app", "share"], eo.SM = Kd, eo.LG = Qd, eo.MD = Jd, eo.XL = $d;
      const lo = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M9.142 7.081 13.609 2H12.55L8.671 6.412 5.573 2H2l4.685 6.672L2 14h1.059l4.096-4.66L10.427 14H14zm-1.45 1.65-.475-.665L3.44 2.78h1.626l3.048 4.266.475.664 3.962 5.546h-1.626z"
            })
          })
        }))),
        ao = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M13.712 10.622 20.413 3h-1.588l-5.818 6.618L8.36 3H3l7.027 10.007L3 21h1.588l6.144-6.989L15.64 21H21zm-2.174 2.474-.713-.997L5.16 4.17H7.6l4.571 6.4.712.996 5.943 8.319h-2.439z"
            })
          })
        }))),
        ro = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "20",
            height: "20",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 20 20",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M11.332 8.928 16.544 3h-1.235l-4.526 5.147L7.17 3H3l5.466 7.784L3 17h1.235l4.78-5.436L12.83 17H17zM9.64 10.852l-.554-.775L4.68 3.91h1.897l3.556 4.977.554.775 4.622 6.47h-1.897z"
            })
          })
        }))),
        to = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M18.283 14.162 27.218 4H25.1l-7.758 8.824L11.147 4H4l9.37 13.343L4 28h2.117l8.193-9.318L20.853 28H28zm-2.9 3.299-.95-1.329L6.88 5.56h3.252l6.096 8.532.95 1.329 7.924 11.09h-3.253z"
            })
          })
        }))),
        so = (0, t.forwardRef)((({
          size: e = "SM",
          ...l
        }, a) => {
          const t = (0, o.v6)(l, {
            className: g({
              size: e
            })
          });
          return (0, r.jsxs)(r.Fragment, {
            children: ["SM" === e && (0, r.jsx)(lo, {
              ...t,
              ref: a
            }), "LG" === e && (0, r.jsx)(ao, {
              ...t,
              ref: a
            }), "MD" === e && (0, r.jsx)(ro, {
              ...t,
              ref: a
            }), "XL" === e && (0, r.jsx)(to, {
              ...t,
              ref: a
            })]
          })
        }));
      so.displayName = "Twitter", so.categories = ["brands", "social", "account"], so.tags = ["logo", "social", "social media", "twitter", "tweet", "app", "share", "x"], so.SM = lo, so.LG = ao, so.MD = ro, so.XL = to;
      const io = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M8.854 10.79c-.032.923-.763 1.665-1.651 1.665a1.531 1.531 0 0 0 0 0c.895 0 1.62-.742 1.65-1.666V2.526h1.45a2.9 2.9 0 0 0 1.204 1.882c.428.29.945.466 1.493.466v2.064a4.56 4.56 0 0 1-2.741-.925v4.19c0 2.09-1.626 3.797-3.63 3.797a3.5 3.5 0 0 1-2.079-.688A3.86 3.86 0 0 1 3 10.202c0-2.09 1.626-3.797 3.63-3.797q.245.001.491.033v.486c-1.827.047-3.32 1.504-3.522 3.373C3.8 8.435 5.294 6.97 7.12 6.924v1.619a1.5 1.5 0 0 0-.492-.08c-.913 0-1.657.775-1.657 1.733 0 .667.36 1.24.889 1.53.227.129.491.203.768.203.895 0 1.62-.742 1.651-1.666V2h1.973c0 .175.019.35.044.526H8.854z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        oo = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "20",
            height: "20",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 20 20",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M11.025 13.254c-.038 1.078-.915 1.944-1.982 1.944a2 2 0 0 1-.695-.126c.22.087.454.126.695.126 1.074 0 1.944-.866 1.982-1.944v-9.64h1.739c.166.913.703 1.7 1.444 2.195A3.27 3.27 0 0 0 16 6.352v2.409a5.57 5.57 0 0 1-3.29-1.079v4.887c0 2.44-1.95 4.431-4.355 4.431-.93 0-1.784-.299-2.495-.803A4.46 4.46 0 0 1 4 12.57c0-2.44 1.95-4.43 4.355-4.43.197 0 .394.016.59.04v.566C6.752 8.8 4.96 10.5 4.718 12.68c.242-2.172 2.034-3.88 4.227-3.935v1.889a1.9 1.9 0 0 0-.59-.095c-1.096 0-1.988.905-1.988 2.023a2.014 2.014 0 0 0 1.988 2.022c1.074 0 1.944-.866 1.981-1.944V3h2.367c0 .205.023.41.053.614h-1.731z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        no = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M13.366 16.184c-.05 1.386-1.22 2.499-2.641 2.499-.323 0-.636-.06-.928-.162.292.111.605.162.928.162 1.431 0 2.59-1.113 2.641-2.5V3.79h2.319a4.34 4.34 0 0 0 1.926 2.823A4.47 4.47 0 0 0 20 7.31v3.096a7.6 7.6 0 0 1-4.386-1.386v6.284c0 3.136-2.6 5.696-5.807 5.696-1.24 0-2.38-.384-3.327-1.032C4.988 18.936 4 17.236 4 15.304c0-3.137 2.601-5.697 5.807-5.697.262 0 .524.02.787.05v.73c-2.924.07-5.314 2.255-5.636 5.058.322-2.792 2.712-4.988 5.636-5.059v2.429a2.6 2.6 0 0 0-.787-.122c-1.462 0-2.651 1.164-2.651 2.6 0 1.002.574 1.862 1.421 2.297.363.192.787.304 1.23.304 1.432 0 2.591-1.113 2.642-2.5V3h3.155c0 .263.03.526.07.79h-2.308z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        ho = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M17.878 21.578c-.069 1.849-1.677 3.333-3.632 3.333-.443 0-.873-.081-1.275-.216.402.148.832.216 1.275.216 1.969 0 3.563-1.484 3.632-3.333V5.052h3.189c.305 1.565 1.289 2.914 2.648 3.764.942.58 2.079.931 3.285.931v4.128c-2.246 0-4.325-.688-6.03-1.848v8.378c0 4.182-3.577 7.595-7.985 7.595a8.24 8.24 0 0 1-4.575-1.376C6.36 25.248 5 22.98 5 20.404c0-4.181 3.577-7.595 7.985-7.595.36 0 .72.027 1.081.068v.971c-4.02.095-7.305 3.009-7.75 6.746.445-3.724 3.73-6.651 7.75-6.746v3.238a3.6 3.6 0 0 0-1.081-.162c-2.01 0-3.646 1.552-3.646 3.467 0 1.336.79 2.483 1.955 3.063.499.256 1.08.404 1.69.404 1.97 0 3.564-1.484 3.633-3.332V4h4.339c0 .35.041.702.097 1.052h-3.175z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        co = (0, t.forwardRef)((({
          size: e = "SM",
          ...l
        }, a) => {
          const t = (0, o.v6)(l, {
            className: g({
              size: e
            })
          });
          return (0, r.jsxs)(r.Fragment, {
            children: ["SM" === e && (0, r.jsx)(io, {
              ...t,
              ref: a
            }), "MD" === e && (0, r.jsx)(oo, {
              ...t,
              ref: a
            }), "LG" === e && (0, r.jsx)(no, {
              ...t,
              ref: a
            }), "XL" === e && (0, r.jsx)(ho, {
              ...t,
              ref: a
            })]
          })
        }));
      co.displayName = "Tiktok", co.categories = ["brands", "social"], co.tags = ["Social media", "video", "player", "game", "community", "app", "share", "logo", "photo", "camera"], co.SM = io, co.MD = oo, co.LG = no, co.XL = ho;
      const fo = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M5.607 2.667h4.83a2 2 0 0 1 1.85 1.29l.62 1.527.621-.622a.667.667 0 1 1 .943.943l-.6.599c.483.365.795.944.795 1.596v2.667a2 2 0 0 1-1.333 1.886v.78a.667.667 0 0 1-1.333 0v-.666H4v.666a.667.667 0 1 1-1.334 0v-.78a2 2 0 0 1-1.333-1.886V8c0-.652.312-1.23.795-1.596l-.6-.6a.667.667 0 1 1 .943-.942l.618.618.623-1.556a2 2 0 0 1 1.895-1.257M4.317 6l.633-1.581a.67.67 0 0 1 .634-.42h4.843a.67.67 0 0 1 .615.434l.007.017.628 1.55zm-.984 1.333A.667.667 0 0 0 2.666 8v2.667c0 .368.299.666.667.666h9.333a.667.667 0 0 0 .667-.666V8a.667.667 0 0 0-.667-.667zm.667 2c0-.368.298-.666.666-.666h.007a.667.667 0 0 1 0 1.333h-.007A.667.667 0 0 1 4 9.333m6.666 0c0-.368.299-.666.667-.666h.007a.667.667 0 0 1 0 1.333h-.007a.667.667 0 0 1-.667-.667",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        wo = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M8.41 4h7.246a3 3 0 0 1 2.775 1.936l.929 2.29.933-.933a1 1 0 1 1 1.414 1.414l-.899.899A3 3 0 0 1 22 12v4a3 3 0 0 1-2 2.83V20a1 1 0 1 1-2 0v-1H6v1a1 1 0 1 1-2 0v-1.17A3 3 0 0 1 2 16v-4c0-.978.468-1.846 1.192-2.394l-.9-.899a1 1 0 0 1 1.415-1.414l.928.928.933-2.335A3 3 0 0 1 8.41 4M6.477 9l.948-2.372A1 1 0 0 1 8.377 6h7.263a1 1 0 0 1 .933.676L17.515 9zM5 11a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1zm1 3a1 1 0 0 1 1-1h.01a1 1 0 0 1 0 2H7a1 1 0 0 1-1-1m10 0a1 1 0 0 1 1-1h.01a1 1 0 0 1 0 2H17a1 1 0 0 1-1-1",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        vo = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "20",
            height: "20",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 20 20",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M16.334 10a.834.834 0 0 0-.834-.834H3.834A.834.834 0 0 0 3 10v3.333c0 .46.374.833.834.833H15.5c.46 0 .834-.373.834-.833zm-10.825.833.085.005a.833.833 0 0 1 0 1.657l-.085.005H5.5a.834.834 0 0 1 0-1.667zm8.333 0a.834.834 0 0 1 .085 1.662l-.085.005h-.008a.834.834 0 0 1 0-1.667zM6.648 5a.835.835 0 0 0-.793.524L5.065 7.5h9.199l-.785-1.937-.01-.022a.84.84 0 0 0-.647-.53l-.125-.01zM18 13.333c0 1.088-.696 2.011-1.666 2.355v.978a.834.834 0 0 1-1.667 0v-.833h-10v.833a.834.834 0 1 1-1.667 0v-.978a2.5 2.5 0 0 1-1.666-2.355V10c0-.815.39-1.537.994-1.994l-.75-.75-.057-.063a.834.834 0 0 1 1.235-1.116l.772.773.78-1.945a2.5 2.5 0 0 1 2.36-1.57v-.002h6.046a2.5 2.5 0 0 1 2.309 1.604l.777 1.918.778-.778.063-.057a.834.834 0 0 1 1.115 1.236l-.751.75C17.609 8.462 18 9.185 18 10z"
            })
          })
        }))),
        xo = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M11.214 5.333h9.66a4 4 0 0 1 3.702 2.581l1.237 3.054 1.245-1.244a1.333 1.333 0 1 1 1.885 1.885l-1.198 1.199A4 4 0 0 1 29.334 16v5.333a4 4 0 0 1-2.667 3.773v1.56a1.333 1.333 0 0 1-2.667 0v-1.333H8v1.334a1.333 1.333 0 0 1-2.666 0v-1.561a4 4 0 0 1-2.667-3.773V16c0-1.304.624-2.462 1.589-3.192l-1.198-1.199a1.333 1.333 0 0 1 1.885-1.885L6.18 10.96l1.245-3.112a4 4 0 0 1 3.79-2.515M8.636 12l1.265-3.162a1.33 1.33 0 0 1 1.3-.838h9.653a1.33 1.33 0 0 1 1.244.9l1.256 3.1zm-1.969 2.667c-.736 0-1.333.597-1.333 1.333v5.333c0 .737.597 1.334 1.333 1.334h18.667c.736 0 1.333-.597 1.333-1.334V16c0-.736-.597-1.333-1.333-1.333zm1.333 4c0-.737.597-1.334 1.334-1.334h.013a1.333 1.333 0 0 1 0 2.667h-.013A1.333 1.333 0 0 1 8 18.667m13.334 0c0-.737.597-1.334 1.333-1.334h.013a1.333 1.333 0 0 1 0 2.667h-.013a1.333 1.333 0 0 1-1.333-1.333",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        go = (0, t.forwardRef)((({
          size: e = "SM",
          ...l
        }, a) => {
          const t = (0, o.v6)(l, {
            className: g({
              size: e
            })
          });
          return (0, r.jsxs)(r.Fragment, {
            children: ["SM" === e && (0, r.jsx)(fo, {
              ...t,
              ref: a
            }), "LG" === e && (0, r.jsx)(wo, {
              ...t,
              ref: a
            }), "MD" === e && (0, r.jsx)(vo, {
              ...t,
              ref: a
            }), "XL" === e && (0, r.jsx)(xo, {
              ...t,
              ref: a
            })]
          })
        }));
      go.displayName = "Car", go.categories = ["transportation"], go.tags = ["vehicle", "drive", "trip", "journey", "automobile", "GTAO", "transport"], go.SM = fo, go.LG = wo, go.MD = vo, go.XL = xo;
      const jo = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M1.829 4.924C2.1 4.469 2.619 4 3.334 4H8c.668 0 1.21.288 1.617.613q.028.023.055.049a54 54 0 0 1 1.337 1.394l.005.005.101.023c.189.043.453.104.755.176.6.141 1.356.326 1.968.496.803.205 1.496.985 1.496 1.91v2c0 .352-.12.697-.379.955A1.33 1.33 0 0 1 14 12h-.78a2 2 0 0 1-3.773 0H6.553a2 2 0 0 1-3.772 0H2c-.352 0-.697-.12-.955-.379a1.33 1.33 0 0 1-.379-.954V8c0-.346.057-.69.17-1.016a1 1 0 0 1 .03-.074L1.8 4.977zm.952 5.743a2 2 0 0 1 3.772 0h2.894a2 2 0 0 1 3.773 0H14v-2c0-.271-.235-.555-.495-.62l-.016-.005a55 55 0 0 0-1.925-.485 97 97 0 0 0-.963-.222l-.079-.018a.67.67 0 0 1-.344-.197l-.037-.04-.106-.113-.36-.384c-.282-.298-.63-.662-.918-.95-.252-.195-.5-.3-.757-.3H3.334c-.083 0-.224.06-.348.254l-.9 1.864A1.8 1.8 0 0 0 2 8v2.667zm1.886 0a.667.667 0 1 0 0 1.333.667.667 0 0 0 0-1.333m6.667 0a.667.667 0 1 0 0 1.333.667.667 0 0 0 0-1.333",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        mo = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M2.743 7.386C3.15 6.704 3.929 6 5 6h7c1.002 0 1.816.432 2.425.92q.042.034.082.073c.46.46 1.018 1.043 1.457 1.507l.55.584.007.008 1.284.297c.9.213 2.034.49 2.951.744C21.962 10.442 23 11.612 23 13v3c0 .527-.18 1.044-.568 1.432S21.527 18 21 18h-1.17a3.001 3.001 0 0 1-5.66 0H9.83a3.001 3.001 0 0 1-5.66 0H3c-.527 0-1.044-.18-1.432-.568S1 16.527 1 16v-4a4.7 4.7 0 0 1 .254-1.524 1 1 0 0 1 .045-.11l1.4-2.9a1 1 0 0 1 .044-.08M4.17 16a3.001 3.001 0 0 1 5.658 0h4.342a3.001 3.001 0 0 1 5.658 0H21v-3c0-.406-.353-.832-.742-.93l-.026-.007c-.88-.244-1.99-.516-2.887-.727a147 147 0 0 0-1.445-.334l-.117-.026a1 1 0 0 1-.516-.296l-.056-.06-.159-.17c-.134-.144-.324-.346-.541-.575a82 82 0 0 0-1.377-1.426C12.757 8.156 12.384 8 12 8H5c-.124 0-.335.09-.522.381l-1.35 2.796A2.7 2.7 0 0 0 3 12v4zM7 16a1 1 0 1 0 0 2 1 1 0 0 0 0-2m10 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        po = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "20",
            height: "20",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 20 20",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M.501 10c0-.432.07-.861.21-1.27l.039-.092L1.917 6.22l.036-.066C2.293 5.587 2.941 5 3.834 5h5.833c.835 0 1.513.36 2.02.766q.036.03.07.061a68 68 0 0 1 1.67 1.743l.008.006.125.03c.237.053.567.13.945.218.752.178 1.702.41 2.469.623h-.001c1 .26 1.861 1.233 1.861 2.386v2.5c0 .44-.15.87-.474 1.194a1.67 1.67 0 0 1-1.193.473h-.979a2.498 2.498 0 0 1-4.708 0H7.855a2.498 2.498 0 0 1-4.709 0h-.979c-.44 0-.87-.15-1.193-.473A1.67 1.67 0 0 1 .5 13.333zm5 3.333a.834.834 0 1 0 0 1.668.834.834 0 0 0 0-1.668m8.333 0a.833.833 0 1 0 0 1.666.833.833 0 0 0 0-1.666m-11.667 0h.98A2.5 2.5 0 0 1 5.5 11.666c1.088 0 2.011.697 2.354 1.667h3.624a2.5 2.5 0 0 1 2.355-1.667c1.088 0 2.011.697 2.355 1.667h.978v-2.5c0-.338-.294-.693-.618-.774l-.022-.006a69 69 0 0 0-2.405-.606c-.372-.088-.699-.163-.932-.216l-.272-.063-.073-.015-.019-.005-.005-.001a.84.84 0 0 1-.431-.246V8.9l-.012-.012-.035-.038-.132-.142-.451-.48a69 69 0 0 0-1.146-1.185c-.315-.244-.626-.377-.947-.377H3.834c-.104 0-.282.076-.438.323L2.278 9.305c-.073.224-.111.46-.111.695z"
            })
          })
        }))),
        uo = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M3.656 9.847C4.202 8.94 5.238 8 6.666 8H16c1.335 0 2.42.576 3.233 1.226q.057.045.11.098c.613.613 1.357 1.391 1.942 2.01.294.31.55.583.732.778l.01.01.202.047c.378.086.906.207 1.51.35 1.2.283 2.713.653 3.936.992 1.606.411 2.991 1.971 2.991 3.822v4c0 .703-.24 1.393-.757 1.91S28.703 24 28 24h-1.56a4.002 4.002 0 0 1-7.545 0h-5.789a4.002 4.002 0 0 1-7.544 0H4c-.703 0-1.393-.24-1.91-.757s-.757-1.207-.757-1.91V16c0-.691.114-1.378.339-2.032q.025-.075.06-.148L3.6 9.954q.026-.055.057-.107m1.905 11.486a4.002 4.002 0 0 1 7.544 0h5.789a4.002 4.002 0 0 1 7.545 0h1.56v-4c0-.542-.47-1.11-.99-1.24l-.033-.008a110 110 0 0 0-3.85-.97 193 193 0 0 0-1.926-.445l-.156-.035a1.33 1.33 0 0 1-.688-.394l-.075-.081a163 163 0 0 0-2.769-2.895c-.503-.39-1-.598-1.512-.598H6.666c-.165 0-.447.119-.695.508l-1.8 3.727A3.6 3.6 0 0 0 4 16v5.333zm3.772 0a1.333 1.333 0 1 0 0 2.667 1.333 1.333 0 0 0 0-2.667m13.333 0a1.333 1.333 0 1 0 0 2.667 1.333 1.333 0 0 0 0-2.667",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Mo = (0, t.forwardRef)((({
          size: e = "SM",
          ...l
        }, a) => {
          const t = (0, o.v6)(l, {
            className: g({
              size: e
            })
          });
          return (0, r.jsxs)(r.Fragment, {
            children: ["SM" === e && (0, r.jsx)(jo, {
              ...t,
              ref: a
            }), "LG" === e && (0, r.jsx)(mo, {
              ...t,
              ref: a
            }), "MD" === e && (0, r.jsx)(po, {
              ...t,
              ref: a
            }), "XL" === e && (0, r.jsx)(uo, {
              ...t,
              ref: a
            })]
          })
        }));
      Mo.displayName = "CarSide", Mo.categories = ["transportation"], Mo.tags = ["vehicle", "drive", "trip", "journey"], Mo.SM = jo, Mo.LG = mo, Mo.MD = po, Mo.XL = uo;
      const Ro = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M3.333 2.667a.667.667 0 0 0-.667.667v9.057l1.529-1.529a.67.67 0 0 1 .471-.195h8a.667.667 0 0 0 .667-.667V3.334a.666.666 0 0 0-.667-.667zm-1.414-.748a2 2 0 0 1 1.414-.586h9.333a2 2 0 0 1 2 2V10a2 2 0 0 1-2 2H4.942l-2.47 2.472A.667.667 0 0 1 1.332 14V3.334a2 2 0 0 1 .586-1.415m2.08 3.415c0-.369.3-.667.667-.667h4a.667.667 0 0 1 0 1.333h-4A.667.667 0 0 1 4 5.333M4 8c0-.368.3-.667.667-.667h6.667a.667.667 0 1 1 0 1.334H4.666A.667.667 0 0 1 4 8",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        bo = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M5 4a1 1 0 0 0-1 1v13.586l2.293-2.293A1 1 0 0 1 7 16h12a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1zM2.879 2.879A3 3 0 0 1 5 2h14a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H7.414l-3.707 3.707A1 1 0 0 1 2 21V5a3 3 0 0 1 .879-2.121M6 8a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1m0 4a1 1 0 0 1 1-1h10a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Lo = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "20",
            height: "20",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 20 20",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M16.334 4.167a.835.835 0 0 0-.834-.834H3.834A.835.835 0 0 0 3 4.167v11.321l1.911-1.91.062-.055a.83.83 0 0 1 .527-.19h10a.835.835 0 0 0 .834-.833zm-2.5 5 .085.004a.834.834 0 0 1 0 1.658l-.085.004H5.5a.833.833 0 0 1 0-1.666zM10.5 5.833a.834.834 0 0 1 0 1.667h-5a.833.833 0 0 1 0-1.667zM18 12.5a2.5 2.5 0 0 1-2.5 2.5H5.846l-3.09 3.089a.833.833 0 0 1-1.422-.589V4.167a2.5 2.5 0 0 1 2.5-2.5H15.5a2.5 2.5 0 0 1 2.5 2.5z"
            })
          })
        }))),
        zo = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M6.667 5.333a1.333 1.333 0 0 0-1.333 1.334V24.78l3.057-3.057c.25-.25.589-.39.943-.39h16A1.333 1.333 0 0 0 26.667 20V6.667a1.334 1.334 0 0 0-1.333-1.334zM3.839 3.838a4 4 0 0 1 2.828-1.171h18.667a4 4 0 0 1 4 4V20a4 4 0 0 1-4 4H9.886l-4.943 4.943A1.333 1.333 0 0 1 2.667 28V6.667a4 4 0 0 1 1.172-2.829M8 10.667c0-.737.597-1.334 1.334-1.334h8a1.333 1.333 0 0 1 0 2.667h-8A1.333 1.333 0 0 1 8 10.666M8 16c0-.736.597-1.334 1.334-1.334h13.333a1.333 1.333 0 0 1 0 2.667H9.334A1.333 1.333 0 0 1 8 16",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Co = (0, t.forwardRef)((({
          size: e = "SM",
          ...l
        }, a) => {
          const t = (0, o.v6)(l, {
            className: g({
              size: e
            })
          });
          return (0, r.jsxs)(r.Fragment, {
            children: ["SM" === e && (0, r.jsx)(Ro, {
              ...t,
              ref: a
            }), "LG" === e && (0, r.jsx)(bo, {
              ...t,
              ref: a
            }), "MD" === e && (0, r.jsx)(Lo, {
              ...t,
              ref: a
            }), "XL" === e && (0, r.jsx)(zo, {
              ...t,
              ref: a
            })]
          })
        }));
      Co.displayName = "MessageSquareText", Co.categories = ["social"], Co.tags = ["comment", "chat", "conversation", "dialog", "feedback", "speech bubble", "clear", "close", "delete", "remove", "cancel", "silence", "mute", "moderate"], Co.SM = Ro, Co.LG = bo, Co.MD = Lo, Co.XL = zo;
      const Ao = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M7.333 2.667a4.667 4.667 0 1 0 0 9.333 4.667 4.667 0 0 0 0-9.333m-6 4.667a6 6 0 1 1 10.688 3.745l2.45 2.45a.667.667 0 0 1-.943.943l-2.45-2.45a6 6 0 0 1-9.745-4.688",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Ho = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M11 4a7 7 0 1 0 0 14 7 7 0 0 0 0-14m-9 7a9 9 0 1 1 16.032 5.618l3.675 3.675a1 1 0 0 1-1.414 1.414l-3.675-3.675A9 9 0 0 1 2 11",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Vo = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "20",
            height: "20",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 20 20",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M14.667 9.167a5.834 5.834 0 1 0-11.668 0 5.834 5.834 0 0 0 11.668 0m1.667 0c0 1.77-.616 3.397-1.643 4.68l3.065 3.064.058.063a.833.833 0 0 1-1.173 1.172l-.063-.057-3.064-3.065a7.47 7.47 0 0 1-4.68 1.643 7.5 7.5 0 1 1 7.5-7.5"
            })
          })
        }))),
        Io = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M14.667 5.333a9.333 9.333 0 1 0 0 18.667 9.333 9.333 0 0 0 0-18.667m-12 9.334c0-6.628 5.373-12 12-12s12 5.372 12 12a11.95 11.95 0 0 1-2.624 7.49l4.9 4.9a1.333 1.333 0 1 1-1.886 1.886l-4.9-4.9a11.95 11.95 0 0 1-7.49 2.624c-6.627 0-12-5.373-12-12",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Bo = (0, t.forwardRef)((({
          size: e = "SM",
          ...l
        }, a) => {
          const t = (0, o.v6)(l, {
            className: g({
              size: e
            })
          });
          return (0, r.jsxs)(r.Fragment, {
            children: ["SM" === e && (0, r.jsx)(Ao, {
              ...t,
              ref: a
            }), "LG" === e && (0, r.jsx)(Ho, {
              ...t,
              ref: a
            }), "MD" === e && (0, r.jsx)(Vo, {
              ...t,
              ref: a
            }), "XL" === e && (0, r.jsx)(Io, {
              ...t,
              ref: a
            })]
          })
        }));
      Bo.displayName = "Search", Bo.categories = ["text", "social"], Bo.tags = ["find", "scan", "magnifier", "magnifying glass", "look", "view"], Bo.SM = Ao, Bo.LG = Ho, Bo.MD = Vo, Bo.XL = Io;
      const So = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M8 1.25a6.75 6.75 0 1 1 0 13.5 6.75 6.75 0 0 1 0-13.5m0 1.5a5.25 5.25 0 0 0 0 10.5z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        yo = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2m0 2a8 8 0 1 0 0 16z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Do = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "20",
            height: "20",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 20 20",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M10 2.25a7.75 7.75 0 1 1 0 15.5 7.75 7.75 0 0 1 0-15.5m0 1.5a6.25 6.25 0 1 0 0 12.5z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        No = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M16 2.75c7.318 0 13.25 5.932 13.25 13.25S23.318 29.25 16 29.25 2.75 23.318 2.75 16 8.682 2.75 16 2.75m0 2.5C10.063 5.25 5.25 10.063 5.25 16S10.063 26.75 16 26.75z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Go = (0, t.forwardRef)((({
          size: e = "SM",
          ...l
        }, a) => {
          const t = (0, o.v6)(l, {
            className: g({
              size: e
            })
          });
          return (0, r.jsxs)(r.Fragment, {
            children: ["SM" === e && (0, r.jsx)(So, {
              ...t,
              ref: a
            }), "LG" === e && (0, r.jsx)(yo, {
              ...t,
              ref: a
            }), "MD" === e && (0, r.jsx)(Do, {
              ...t,
              ref: a
            }), "XL" === e && (0, r.jsx)(No, {
              ...t,
              ref: a
            })]
          })
        }));
      Go.displayName = "PartialCircle", Go.categories = ["shapes"], Go.tags = ["Partial", "Half", "Middle", "Split"], Go.SM = So, Go.LG = yo, Go.MD = Do, Go.XL = No;
      const Xo = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M8 2a2.667 2.667 0 0 0-2.666 2.667V6h5.333V4.667A2.667 2.667 0 0 0 8 2m4 4V4.667a4 4 0 0 0-8 0V6h-.667a2 2 0 0 0-2 2v5.333a2 2 0 0 0 2 2h9.334a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2zM3.334 7.333A.667.667 0 0 0 2.667 8v5.333c0 .369.298.667.667.667h9.333a.667.667 0 0 0 .667-.667V8a.667.667 0 0 0-.667-.667zm3.333 3.334a1.333 1.333 0 1 1 2.666 0 1.333 1.333 0 0 1-2.666 0",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        qo = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M12 3a4 4 0 0 0-4 4v2h8V7a4 4 0 0 0-4-4m6 6V7A6 6 0 1 0 6 7v2H5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-8a3 3 0 0 0-3-3zM5 11a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1zm5 5a2 2 0 1 1 4 0 2 2 0 0 1-4 0",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        ko = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "20",
            height: "20",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 20 20",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M16.334 10a.834.834 0 0 0-.835-.833H3.833A.834.834 0 0 0 3 10v6.667c0 .46.373.833.833.833H15.5c.46 0 .834-.373.834-.833zM8 13.334a1.667 1.667 0 1 1 3.334 0 1.667 1.667 0 0 1-3.334 0m5-7.5a3.334 3.334 0 1 0-6.666 0V7.5H13zM14.666 7.5h.833A2.5 2.5 0 0 1 18 10v6.667a2.5 2.5 0 0 1-2.5 2.5H3.833a2.5 2.5 0 0 1-2.5-2.5V10a2.5 2.5 0 0 1 2.5-2.5h.833V5.834a5 5 0 0 1 5-5l.249.006a5 5 0 0 1 4.752 4.994z"
            })
          })
        }))),
        Fo = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M16 4a5.333 5.333 0 0 0-5.334 5.333V12h10.667V9.333A5.333 5.333 0 0 0 16 4m8 8V9.333a8 8 0 1 0-16 0V12H6.667a4 4 0 0 0-4 4v10.667a4 4 0 0 0 4 4h18.666a4 4 0 0 0 4-4V16a4 4 0 0 0-4-4zM6.667 14.667c-.737 0-1.334.597-1.334 1.333v10.667c0 .736.597 1.333 1.334 1.333h18.666c.737 0 1.334-.597 1.334-1.333V16c0-.736-.597-1.333-1.334-1.333zm6.666 6.666a2.667 2.667 0 1 1 5.334 0 2.667 2.667 0 0 1-5.334 0",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Po = (0, t.forwardRef)((({
          size: e = "SM",
          ...l
        }, a) => {
          const t = (0, o.v6)(l, {
            className: g({
              size: e
            })
          });
          return (0, r.jsxs)(r.Fragment, {
            children: ["SM" === e && (0, r.jsx)(Xo, {
              ...t,
              ref: a
            }), "LG" === e && (0, r.jsx)(qo, {
              ...t,
              ref: a
            }), "MD" === e && (0, r.jsx)(ko, {
              ...t,
              ref: a
            }), "XL" === e && (0, r.jsx)(Fo, {
              ...t,
              ref: a
            })]
          })
        }));
      Po.displayName = "LockKeyhole", Po.categories = ["security"], Po.tags = ["security", "password", "secure", "admin", "lock", "safe", "protection", "security", "latch"], Po.SM = Xo, Po.LG = qo, Po.MD = ko, Po.XL = Fo;
      const Oo = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M13 8a.667.667 0 0 0-.666-.667H3A.667.667 0 0 0 2.333 8v5.333c0 .368.298.667.667.667h9.334a.667.667 0 0 0 .665-.667zm-7.734 2.043a.667.667 0 0 1 0 1.333h-.1a.667.667 0 1 1 0-1.333zm2.5 0a.667.667 0 0 1 0 1.333h-.1a.667.667 0 1 1 0-1.333zm2.5 0a.667.667 0 0 1 0 1.333h-.1a.667.667 0 1 1 0-1.333zm.068-5.377a2.668 2.668 0 0 0-5.334 0V6h5.334zM11.666 6h.668a2 2 0 0 1 2 2v5.333a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h.667V4.666a4 4 0 0 1 4-4l.198.005a4 4 0 0 1 3.801 3.995z"
            })
          })
        }))),
        To = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M19.667 12a1 1 0 0 0-1-1h-14a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1zm-11.4 3a1 1 0 1 1 0 2h-.1a1 1 0 1 1 0-2zm3.5 0a1 1 0 1 1 0 2h-.1a1 1 0 1 1 0-2zm3.5 0a1 1 0 1 1 0 2h-.1a1 1 0 1 1 0-2zm.4-8a4 4 0 0 0-8 0v2h8zm2 2h1a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3h-14a3 3 0 0 1-3-3v-8a3 3 0 0 1 3-3h1V7a6 6 0 0 1 12 0z"
            })
          })
        }))),
        Eo = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "20",
            height: "20",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 20 20",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M16.331 10a.83.83 0 0 0-.832-.831H3.833a.83.83 0 0 0-.832.83v6.668c0 .46.373.832.833.832H15.5c.459 0 .831-.373.831-.832zM6.266 12.525a.835.835 0 1 1 0 1.67h-.1a.835.835 0 0 1 0-1.67zm3.5 0 .086.004a.835.835 0 0 1-.086 1.666h-.1a.835.835 0 0 1 0-1.67zm3.5 0 .086.004a.835.835 0 0 1-.086 1.666h-.1a.835.835 0 0 1 0-1.67zm-.268-6.691a3.334 3.334 0 0 0-3.331-3.332 3.33 3.33 0 0 0-3.333 3.332v1.665H13zm1.67 1.665h.832a2.5 2.5 0 0 1 2.502 2.5v6.668a2.5 2.5 0 0 1-2.502 2.502H3.832a2.5 2.5 0 0 1-2.501-2.502V10a2.5 2.5 0 0 1 2.502-2.501h.83V5.834A5.003 5.003 0 0 1 9.667.832l.249.006a5.003 5.003 0 0 1 4.754 4.996z"
            })
          })
        }))),
        Uo = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M26.334 16c0-.736-.598-1.333-1.334-1.333H6.334C5.597 14.667 5 15.264 5 16v10.667C5 27.403 5.597 28 6.334 28H25c.736 0 1.334-.597 1.334-1.333zm-15.068 3.967a1.334 1.334 0 0 1 .137 2.66l-.137.007h-.1a1.333 1.333 0 0 1 0-2.667zm4.5 0a1.334 1.334 0 0 1 .137 2.66l-.137.007h-.1a1.333 1.333 0 0 1 0-2.667zm4.5 0a1.334 1.334 0 0 1 .137 2.66l-.137.007h-.1a1.333 1.333 0 0 1 0-2.667zM21 9.334a5.334 5.334 0 1 0-10.666 0V12H21zM23.666 12H25a4 4 0 0 1 4 4v10.667a4 4 0 0 1-4 4H6.334a4 4 0 0 1-4-4V16a4 4 0 0 1 4-4h1.333V9.334a8 8 0 0 1 8-8l.396.01a8 8 0 0 1 7.604 7.99z"
            })
          })
        }))),
        _o = (0, t.forwardRef)((({
          size: e = "SM",
          ...l
        }, a) => {
          const t = (0, o.v6)(l, {
            className: g({
              size: e
            })
          });
          return (0, r.jsxs)(r.Fragment, {
            children: ["SM" === e && (0, r.jsx)(Oo, {
              ...t,
              ref: a
            }), "LG" === e && (0, r.jsx)(To, {
              ...t,
              ref: a
            }), "MD" === e && (0, r.jsx)(Eo, {
              ...t,
              ref: a
            }), "XL" === e && (0, r.jsx)(Uo, {
              ...t,
              ref: a
            })]
          })
        }));
      _o.displayName = "LockPassword", _o.categories = ["security"], _o.tags = ["security", "password", "secure", "admin"], _o.SM = Oo, _o.LG = To, _o.MD = Eo, _o.XL = Uo;
      const Wo = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M3.334 2.667a.667.667 0 0 0-.667.667v9.333c0 .368.298.667.667.667h.39L9.586 7.47a2 2 0 0 1 2.828 0l.92.92V3.334a.667.667 0 0 0-.667-.667zm11.333 7.332V3.333a2 2 0 0 0-2-2H3.334a2 2 0 0 0-2 2v9.334a2 2 0 0 0 2 2h9.333a2 2 0 0 0 2-2V9.999m-1.333.277-1.862-1.862a.667.667 0 0 0-.943 0l-4.92 4.92h7.058a.667.667 0 0 0 .667-.667zM6 5.334a.667.667 0 1 0 0 1.333.667.667 0 0 0 0-1.333M4 6a2 2 0 1 1 4 0 2 2 0 0 1-4 0",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Zo = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M5 4a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h.586l8.793-8.793a3 3 0 0 1 4.242 0L20 12.586V5a1 1 0 0 0-1-1zm17 10.999V5a3 3 0 0 0-3-3H5a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-4.001m-2 .415-2.793-2.793a1 1 0 0 0-1.414 0L8.414 20H19a1 1 0 0 0 1-1zM9 8a1 1 0 1 0 0 2 1 1 0 0 0 0-2M6 9a3 3 0 1 1 6 0 3 3 0 0 1-6 0",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Yo = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "20",
            height: "20",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 20 20",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "m16.334 12.845-2.329-2.327a.834.834 0 0 0-1.177 0l-6.15 6.149H15.5c.46 0 .834-.374.834-.834zM8 7.5a.833.833 0 1 0-1.666 0A.833.833 0 0 0 8 7.5m8.334-3.333a.834.834 0 0 0-.835-.834H3.833A.834.834 0 0 0 3 4.167v11.666c0 .46.373.834.833.834h.489l7.327-7.328.184-.166a2.5 2.5 0 0 1 3.351.166l1.15 1.15zM9.667 7.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0M18 15.833a2.5 2.5 0 0 1-2.5 2.5H3.832a2.5 2.5 0 0 1-2.5-2.5V4.167a2.5 2.5 0 0 1 2.5-2.5H15.5a2.5 2.5 0 0 1 2.5 2.5z"
            })
          })
        }))),
        Ko = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M6.667 5.333c-.737 0-1.334.597-1.334 1.334v18.666c0 .737.597 1.334 1.334 1.334h.78l11.725-11.725a4 4 0 0 1 5.656 0l1.838 1.839V6.667c0-.737-.596-1.334-1.333-1.334zm22.666 14.665V6.666a4 4 0 0 0-4-4H6.667a4 4 0 0 0-4 4v18.667a4 4 0 0 0 4 4h18.666a4 4 0 0 0 4-4v-5.335m-2.666.554-3.725-3.724a1.334 1.334 0 0 0-1.885 0l-9.838 9.839h14.114c.737 0 1.334-.597 1.334-1.334zM12 10.667a1.333 1.333 0 1 0 0 2.666 1.333 1.333 0 0 0 0-2.667M8 12a4 4 0 1 1 8 0 4 4 0 0 1-8 0",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Qo = (0, t.forwardRef)((({
          size: e = "SM",
          ...l
        }, a) => {
          const t = (0, o.v6)(l, {
            className: g({
              size: e
            })
          });
          return (0, r.jsxs)(r.Fragment, {
            children: ["SM" === e && (0, r.jsx)(Wo, {
              ...t,
              ref: a
            }), "LG" === e && (0, r.jsx)(Zo, {
              ...t,
              ref: a
            }), "MD" === e && (0, r.jsx)(Yo, {
              ...t,
              ref: a
            }), "XL" === e && (0, r.jsx)(Ko, {
              ...t,
              ref: a
            })]
          })
        }));
      Qo.displayName = "Image", Qo.categories = ["photography", "text", "multimedia", "files"], Qo.tags = ["picture", "photo"], Qo.SM = Wo, Qo.LG = Zo, Qo.MD = Yo, Qo.XL = Ko;
      const Jo = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M4.7 2.033a4.667 4.667 0 0 1 7.967 3.3c0 1.026-.392 2.075-1.207 2.816-.481.484-.71.835-.806 1.315a.667.667 0 1 1-1.308-.262c.17-.85.605-1.43 1.183-2.007l.025-.024c.51-.458.78-1.136.78-1.838a3.333 3.333 0 0 0-6.667 0c0 .536.092 1.15.805 1.862.504.504 1.01 1.152 1.182 2.007a.667.667 0 1 1-1.308.262c-.095-.478-.388-.897-.817-1.326C3.508 7.117 3.334 6.13 3.334 5.333c0-1.238.491-2.424 1.366-3.3M5.333 12c0-.368.299-.667.667-.667h4a.667.667 0 1 1 0 1.333H6A.667.667 0 0 1 5.333 12M6 14.666c0-.368.299-.666.667-.666h2.667a.667.667 0 0 1 0 1.333H6.667A.667.667 0 0 1 6 14.666",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        $o = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M7.05 3.05A7 7 0 0 1 19 8c0 1.538-.588 3.113-1.81 4.224-.722.725-1.066 1.253-1.21 1.972a1 1 0 0 1-1.96-.392c.254-1.275.907-2.145 1.773-3.011l.038-.036C16.595 10.069 17 9.053 17 8A5 5 0 0 0 7 8c0 .804.139 1.724 1.207 2.793.756.756 1.517 1.727 1.774 3.01a1 1 0 1 1-1.962.393c-.143-.716-.582-1.345-1.226-1.989C5.26 10.676 5 9.196 5 8a7 7 0 0 1 2.05-4.95M8 18a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2H9a1 1 0 0 1-1-1m1 4a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2h-4a1 1 0 0 1-1-1",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        en = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "20",
            height: "20",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 20 20",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "m11.334 17.5.085.004a.834.834 0 0 1 0 1.659l-.085.003H8A.833.833 0 0 1 8 17.5zm.832-3.334.085.004a.833.833 0 0 1 0 1.659l-.085.005h-5a.834.834 0 0 1 0-1.668zm1.668-7.5a4.167 4.167 0 0 0-3.96-4.16L9.666 2.5A4.167 4.167 0 0 0 5.5 6.667l.006.255c.035.608.22 1.293 1 2.072.59.59 1.185 1.339 1.433 2.311l.045.198.013.084a.834.834 0 0 1-1.648.243c-.12-.597-.485-1.121-1.021-1.658-1.117-1.116-1.424-2.2-1.483-3.12l-.012-.385A5.833 5.833 0 0 1 9.667.833l.29.007A5.834 5.834 0 0 1 15.5 6.667c0 1.275-.486 2.58-1.495 3.505-.611.612-.9 1.054-1.021 1.658a.834.834 0 0 1-1.635-.327c.213-1.062.757-1.788 1.479-2.51l.03-.03c.637-.572.976-1.42.976-2.296"
            })
          })
        }))),
        ln = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M9.4 4.067a9.333 9.333 0 0 1 15.933 6.6c0 2.051-.784 4.15-2.413 5.632-.963.967-1.42 1.67-1.613 2.63a1.333 1.333 0 0 1-2.615-.524c.34-1.7 1.21-2.86 2.365-4.014l.05-.049c1.02-.916 1.56-2.272 1.56-3.675a6.667 6.667 0 0 0-13.334 0c0 1.072.185 2.3 1.61 3.724 1.008 1.008 2.022 2.303 2.364 4.014a1.333 1.333 0 0 1-2.615.523c-.19-.955-.777-1.793-1.635-2.652-2.042-2.042-2.39-4.015-2.39-5.61 0-2.475.983-4.848 2.733-6.599M10.666 24c0-.736.598-1.333 1.334-1.333h8a1.333 1.333 0 0 1 0 2.666h-8A1.333 1.333 0 0 1 10.666 24M12 29.334c0-.737.597-1.334 1.333-1.334h5.333a1.333 1.333 0 1 1 0 2.667h-5.333A1.333 1.333 0 0 1 12 29.333",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        an = (0, t.forwardRef)((({
          size: e = "SM",
          ...l
        }, a) => {
          const t = (0, o.v6)(l, {
            className: g({
              size: e
            })
          });
          return (0, r.jsxs)(r.Fragment, {
            children: ["SM" === e && (0, r.jsx)(Jo, {
              ...t,
              ref: a
            }), "LG" === e && (0, r.jsx)($o, {
              ...t,
              ref: a
            }), "MD" === e && (0, r.jsx)(en, {
              ...t,
              ref: a
            }), "XL" === e && (0, r.jsx)(ln, {
              ...t,
              ref: a
            })]
          })
        }));
      an.displayName = "Lightbulb", an.categories = ["photography"], an.tags = ["idea", "bright", "lights"], an.SM = Jo, an.LG = $o, an.MD = en, an.XL = ln;
      const rn = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M13.805 3.529c.26.26.26.682 0 .943L6.47 11.805a.667.667 0 0 1-.942 0L2.195 8.472a.667.667 0 1 1 .943-.943L6 10.39l6.862-6.862c.26-.26.682-.26.943 0",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        tn = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M20.707 5.293a1 1 0 0 1 0 1.414l-11 11a1 1 0 0 1-1.414 0l-5-5a1 1 0 1 1 1.414-1.414L9 15.586 19.293 5.293a1 1 0 0 1 1.414 0",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        sn = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "20",
            height: "20",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 20 20",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M15.744 4.411a.834.834 0 0 1 1.179 1.178l-9.167 9.167a.834.834 0 0 1-1.179 0l-4.166-4.167a.832.832 0 0 1 1.115-1.236l.063.058 3.577 3.576z"
            })
          })
        }))),
        dn = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M27.61 7.057c.52.52.52 1.365 0 1.886L12.943 23.609c-.52.521-1.365.521-1.886 0l-6.666-6.666a1.333 1.333 0 0 1 1.885-1.886L12 20.781 25.724 7.057c.52-.52 1.365-.52 1.886 0",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        on = (0, t.forwardRef)((({
          size: e = "SM",
          ...l
        }, a) => {
          const t = (0, o.v6)(l, {
            className: g({
              size: e
            })
          });
          return (0, r.jsxs)(r.Fragment, {
            children: ["SM" === e && (0, r.jsx)(rn, {
              ...t,
              ref: a
            }), "LG" === e && (0, r.jsx)(tn, {
              ...t,
              ref: a
            }), "MD" === e && (0, r.jsx)(sn, {
              ...t,
              ref: a
            }), "XL" === e && (0, r.jsx)(dn, {
              ...t,
              ref: a
            })]
          })
        }));
      on.displayName = "Check", on.categories = ["notifications"], on.tags = ["done", "todo", "tick", "complete", "task", "ready", "yes", "available", "success", "accept"], on.SM = rn, on.LG = tn, on.MD = sn, on.XL = dn;
      const nn = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M8 2a6 6 0 1 0 0 12A6 6 0 0 0 8 2M.667 8a7.333 7.333 0 1 1 14.666 0A7.333 7.333 0 0 1 .667 8m9.804-1.805c.26.26.26.683 0 .943L7.805 9.805a.667.667 0 0 1-.943 0L5.528 8.47a.667.667 0 1 1 .943-.943l.862.862 2.195-2.195c.26-.26.683-.26.943 0",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        hn = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12m14.707-2.707a1 1 0 0 1 0 1.414l-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 1 1 1.414-1.414L11 12.586l3.293-3.293a1 1 0 0 1 1.414 0",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        cn = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "20",
            height: "20",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 20 20",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M17.166 10a7.5 7.5 0 1 0-15 0 7.5 7.5 0 0 0 15 0m-5-1.666.59.588-3.334 3.333a.83.83 0 0 1-1.178 0L6.577 10.59l-.057-.063a.834.834 0 0 1 1.172-1.173l.064.058 1.077 1.077 2.744-2.744zm-.589-.59a.834.834 0 0 1 1.179 1.178zM18.833 10A9.167 9.167 0 1 1 .499 9.999a9.167 9.167 0 0 1 18.334 0"
            })
          })
        }))),
        fn = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M16 4C9.373 4 4 9.373 4 16c0 6.628 5.373 12 12 12 6.628 0 12-5.372 12-12 0-6.627-5.372-12-12-12M1.334 16C1.334 7.9 7.9 1.334 16 1.334S30.667 7.9 30.667 16 24.1 30.667 16 30.667 1.334 24.1 1.334 16m19.609-3.61c.52.521.52 1.366 0 1.886L15.61 19.61c-.521.52-1.365.52-1.886 0l-2.667-2.667a1.333 1.333 0 1 1 1.886-1.886l1.724 1.724 4.39-4.39c.521-.521 1.365-.521 1.886 0",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        wn = (0, t.forwardRef)((({
          size: e = "SM",
          ...l
        }, a) => {
          const t = (0, o.v6)(l, {
            className: g({
              size: e
            })
          });
          return (0, r.jsxs)(r.Fragment, {
            children: ["SM" === e && (0, r.jsx)(nn, {
              ...t,
              ref: a
            }), "LG" === e && (0, r.jsx)(hn, {
              ...t,
              ref: a
            }), "MD" === e && (0, r.jsx)(cn, {
              ...t,
              ref: a
            }), "XL" === e && (0, r.jsx)(fn, {
              ...t,
              ref: a
            })]
          })
        }));
      wn.displayName = "CircleCheck", wn.categories = ["notifications"], wn.tags = ["done", "todo", "tick", "complete", "task", "ready", "yes", "available", "circle", "approve", "success"], wn.SM = nn, wn.LG = hn, wn.MD = cn, wn.XL = fn;
      const vn = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M6.987 1.596a2 2 0 0 1 2.746.742l5.331 9.329.001.001a2 2 0 0 1-1.73 2.999H2.668a2 2 0 0 1-1.746-3l5.33-9.329.001-.001a2 2 0 0 1 .733-.74m1.006 1.062a.67.67 0 0 0-.58.338v.002L2.078 12.33l-.002.003a.667.667 0 0 0 .584 1h10.672a.67.67 0 0 0 .666-.667.67.67 0 0 0-.09-.333l-.001-.003-5.335-9.335a.67.67 0 0 0-.58-.338M8 5.333c.368 0 .667.299.667.667v2.667a.667.667 0 1 1-1.334 0V6c0-.368.299-.667.667-.667m-.667 6c0-.368.299-.666.667-.666h.007a.667.667 0 0 1 0 1.333H8a.667.667 0 0 1-.667-.666",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        xn = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M10.48 2.394a3 3 0 0 1 4.12 1.113L22.596 17.5v.002A3 3 0 0 1 20.002 22H4.004a3 3 0 0 1-2.62-4.5L9.38 3.507v-.002a3 3 0 0 1 1.1-1.11m1.51 1.592a1 1 0 0 0-.87.507l-.002.003L3.116 18.5A1 1 0 0 0 3.99 20h16.008a1 1 0 0 0 .865-1.5l-.002-.004-8-14-.002-.003a1 1 0 0 0-.87-.507M12 8a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0V9a1 1 0 0 1 1-1m-1 9a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2H12a1 1 0 0 1-1-1",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        gn = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "20",
            height: "20",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 20 20",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M17.165 15.833a.83.83 0 0 0-.111-.416l-.002-.004-6.667-11.666-.001-.003a.835.835 0 0 0-1.45 0l-.002.003-6.666 11.666-.051.102a.834.834 0 0 0 .777 1.152L3 16.666v.001h13.332a.836.836 0 0 0 .833-.834m-7.49-2.5a.835.835 0 0 1 0 1.667h-.008a.834.834 0 0 1 0-1.667zm-.842-2.5V7.5a.834.834 0 0 1 1.667 0v3.333a.834.834 0 1 1-1.667 0m9.999 5a2.5 2.5 0 0 1-2.498 2.5H3v-.001a2.497 2.497 0 0 1-2.18-3.749L7.484 2.92a2.5 2.5 0 0 1 4.348 0l6.665 11.663.077.144c.17.344.258.722.258 1.106"
            })
          })
        }))),
        jn = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M13.973 3.192a4 4 0 0 1 5.493 1.481v.003l10.662 18.657.002.003a4 4 0 0 1-3.462 5.997H5.34a4 4 0 0 1-3.495-5.997l.002-.003 10.66-18.657.002-.003a4 4 0 0 1 1.465-1.481m2.014 2.123a1.33 1.33 0 0 0-1.16.676l-.002.004L4.158 24.66l-.003.005a1.333 1.333 0 0 0 1.167 2h21.344a1.333 1.333 0 0 0 1.153-2l-.003-.005-10.67-18.67a1.33 1.33 0 0 0-1.16-.676M16 10.666c.737 0 1.334.597 1.334 1.334v5.333a1.333 1.333 0 0 1-2.667 0V12c0-.737.597-1.334 1.333-1.334m-1.333 12c0-.736.597-1.333 1.333-1.333h.014a1.333 1.333 0 0 1 0 2.667H16a1.333 1.333 0 0 1-1.333-1.334",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        mn = (0, t.forwardRef)((({
          size: e = "SM",
          ...l
        }, a) => {
          const t = (0, o.v6)(l, {
            className: g({
              size: e
            })
          });
          return (0, r.jsxs)(r.Fragment, {
            children: ["SM" === e && (0, r.jsx)(vn, {
              ...t,
              ref: a
            }), "LG" === e && (0, r.jsx)(xn, {
              ...t,
              ref: a
            }), "MD" === e && (0, r.jsx)(gn, {
              ...t,
              ref: a
            }), "XL" === e && (0, r.jsx)(jn, {
              ...t,
              ref: a
            })]
          })
        }));
      mn.displayName = "TriangleAlert", mn.categories = ["notifications", "shapes", "development"], mn.tags = ["warning", "alert", "danger", "exclamation mark", "linter", "caution", "attention", "error", "triangle"], mn.SM = vn, mn.LG = xn, mn.MD = gn, mn.XL = jn;
      const pn = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M3.529 3.529c.26-.26.682-.26.943 0L8 7.057 11.53 3.53a.667.667 0 1 1 .943.943L8.943 8l3.529 3.529a.667.667 0 0 1-.943.943L8 8.943l-3.528 3.529a.667.667 0 0 1-.943-.943L7.057 8 3.53 4.472a.667.667 0 0 1 0-.943",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        un = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M5.293 5.293a1 1 0 0 1 1.414 0L12 10.586l5.293-5.293a1 1 0 1 1 1.414 1.414L13.414 12l5.293 5.293a1 1 0 0 1-1.414 1.414L12 13.414l-5.293 5.293a1 1 0 0 1-1.414-1.414L10.586 12 5.293 6.707a1 1 0 0 1 0-1.414",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Mn = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "20",
            height: "20",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 20 20",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M14.578 4.411a.832.832 0 1 1 1.177 1.178l-4.41 4.41 4.41 4.412.058.063a.833.833 0 0 1-1.173 1.172l-.062-.057-4.412-4.411-4.41 4.41a.832.832 0 1 1-1.178-1.177L8.988 10l-4.41-4.411A.832.832 0 1 1 5.755 4.41l4.411 4.411z"
            })
          })
        }))),
        Rn = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M7.057 7.057c.52-.52 1.365-.52 1.886 0L16 14.114l7.057-7.057a1.333 1.333 0 1 1 1.886 1.886L17.885 16l7.058 7.057a1.333 1.333 0 1 1-1.886 1.886L16 17.885l-7.057 7.058a1.333 1.333 0 0 1-1.886-1.886L14.114 16 7.057 8.943a1.333 1.333 0 0 1 0-1.886",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        bn = (0, t.forwardRef)((({
          size: e = "SM",
          ...l
        }, a) => {
          const t = (0, o.v6)(l, {
            className: g({
              size: e
            })
          });
          return (0, r.jsxs)(r.Fragment, {
            children: ["SM" === e && (0, r.jsx)(pn, {
              ...t,
              ref: a
            }), "LG" === e && (0, r.jsx)(un, {
              ...t,
              ref: a
            }), "MD" === e && (0, r.jsx)(Mn, {
              ...t,
              ref: a
            }), "XL" === e && (0, r.jsx)(Rn, {
              ...t,
              ref: a
            })]
          })
        }));
      bn.displayName = "X", bn.categories = ["notifications", "math"], bn.tags = ["cancel", "close", "delete", "remove", "times", "clear", "math", "multiply", "multiplication", "error", "remove", "clean", "erase", "navigation", "cross", "times"], bn.SM = pn, bn.LG = un, bn.MD = Mn, bn.XL = Rn;
      const Ln = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M2.036 7.333h2.652a10.33 10.33 0 0 1 1.758-5.13 6.005 6.005 0 0 0-4.41 5.13M8 2.343a9 9 0 0 0-1.975 4.99h3.95A9 9 0 0 0 8 2.343m1.975 6.323h-3.95A9 9 0 0 0 8 13.657a9 9 0 0 0 1.975-4.99m-3.53 5.13a10.33 10.33 0 0 1-1.757-5.13H2.036a6.005 6.005 0 0 0 4.41 5.13m3.11 0a10.34 10.34 0 0 0 1.757-5.13h2.651a6.005 6.005 0 0 1-4.409 5.13m4.408-6.463h-2.651a10.34 10.34 0 0 0-1.758-5.13 6.005 6.005 0 0 1 4.41 5.13M.667 8a7.333 7.333 0 1 1 14.666 0A7.333 7.333 0 0 1 .667 8",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        zn = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M3.055 11h3.977A15.5 15.5 0 0 1 9.67 3.305 9.01 9.01 0 0 0 3.055 11M12 3.515A13.5 13.5 0 0 0 9.037 11h5.926A13.5 13.5 0 0 0 12 3.515M14.963 13H9.037A13.5 13.5 0 0 0 12 20.485 13.5 13.5 0 0 0 14.963 13m-5.294 7.695A15.5 15.5 0 0 1 7.031 13H3.055a9.01 9.01 0 0 0 6.613 7.695m4.663 0A15.5 15.5 0 0 0 16.968 13h3.977a9.01 9.01 0 0 1-6.613 7.695M20.945 11h-3.977a15.5 15.5 0 0 0-2.636-7.695A9.01 9.01 0 0 1 20.945 11M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Cn = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "20",
            height: "20",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 20 20",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M10 .833a9.167 9.167 0 1 1 0 18.334A9.167 9.167 0 0 1 10 .833m-7.453 10a7.5 7.5 0 0 0 5.514 6.413 12.9 12.9 0 0 1-2.197-6.412zm11.59 0a12.9 12.9 0 0 1-2.199 6.413 7.5 7.5 0 0 0 5.515-6.412zm-6.603 0c.17 2.281 1.03 4.455 2.466 6.233a11.24 11.24 0 0 0 2.465-6.232zm4.404-8.08a12.9 12.9 0 0 1 2.198 6.413h3.317a7.505 7.505 0 0 0-5.515-6.413M10 2.933a11.25 11.25 0 0 0-2.466 6.233h4.931A11.24 11.24 0 0 0 10 2.932m-1.939-.18a7.505 7.505 0 0 0-5.514 6.413h3.317A12.9 12.9 0 0 1 8.06 2.753"
            })
          })
        }))),
        An = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M4.073 14.667h5.304a20.67 20.67 0 0 1 3.515-10.26c-4.705 1.258-8.27 5.304-8.819 10.26M16 4.687a18 18 0 0 0-3.95 9.98h7.9A18 18 0 0 0 16 4.687m3.95 12.647h-7.9a18 18 0 0 0 3.95 9.98 18 18 0 0 0 3.95-9.98m-7.058 10.26a20.67 20.67 0 0 1-3.515-10.26H4.073c.548 4.955 4.114 9.001 8.819 10.26m6.217 0a20.67 20.67 0 0 0 3.515-10.26h5.303c-.548 4.955-4.113 9.001-8.818 10.26m8.818-12.927h-5.303a20.67 20.67 0 0 0-3.515-10.26c4.705 1.258 8.27 5.304 8.818 10.26M1.334 16C1.334 7.9 7.9 1.334 16 1.334S30.667 7.9 30.667 16 24.1 30.667 16 30.667 1.334 24.1 1.334 16",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Hn = (0, t.forwardRef)((({
          size: e = "SM",
          ...l
        }, a) => {
          const t = (0, o.v6)(l, {
            className: g({
              size: e
            })
          });
          return (0, r.jsxs)(r.Fragment, {
            children: ["SM" === e && (0, r.jsx)(Ln, {
              ...t,
              ref: a
            }), "LG" === e && (0, r.jsx)(zn, {
              ...t,
              ref: a
            }), "MD" === e && (0, r.jsx)(Cn, {
              ...t,
              ref: a
            }), "XL" === e && (0, r.jsx)(An, {
              ...t,
              ref: a
            })]
          })
        }));
      Hn.displayName = "Globe", Hn.categories = ["navigation"], Hn.tags = ["world", "browser", "language", "translate", "global", "network", "earth"], Hn.SM = Ln, Hn.LG = zn, Hn.MD = Cn, Hn.XL = An;
      const Vn = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M1.936 2.602A4.33 4.33 0 0 1 5 1.333c.653 0 1.249.094 1.831.347.409.178.79.426 1.169.746.378-.32.76-.568 1.169-.746.582-.253 1.177-.347 1.83-.347a4.334 4.334 0 0 1 4.334 4.334c0 1.043-.393 1.927-.914 2.675a1 1 0 0 1-.06.084c-.379.527-.82.985-1.223 1.381L8.47 14.471a.667.667 0 0 1-.943 0L2.866 9.81c-.41-.396-.85-.853-1.23-1.38a1 1 0 0 1-.065-.092C1.053 7.59.667 6.709.667 5.667c0-1.15.456-2.252 1.269-3.065m1.67 6.065.19.187.009.008L8 13.057l4.2-4.2.192-.19h-2.059a.67.67 0 0 1-.613-.404l-.261-.61-.818 2.863a.667.667 0 0 1-1.25.088L6.518 8.64a.7.7 0 0 1-.185.027zM5.92 7.333H2.508C2.193 6.82 2 6.271 2 5.667a3 3 0 0 1 3-3c.52 0 .924.073 1.299.236.378.165.767.44 1.23.902.26.26.682.26.942 0 .462-.462.851-.737 1.23-.902.374-.163.779-.236 1.299-.236a3 3 0 0 1 3 3c0 .603-.196 1.15-.513 1.666h-2.714l-.827-1.929a.667.667 0 0 0-1.254.08l-.829 2.9-.587-1.322a.667.667 0 0 0-1.206-.027z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        In = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M2.904 3.904A6.5 6.5 0 0 1 7.5 2c.98 0 1.873.14 2.747.52.613.268 1.185.64 1.753 1.12.568-.48 1.14-.852 1.753-1.12C14.627 2.14 15.52 2 16.5 2A6.5 6.5 0 0 1 23 8.5c0 1.564-.59 2.891-1.371 4.013a1 1 0 0 1-.09.126c-.569.79-1.229 1.477-1.836 2.072l-6.996 6.996a1 1 0 0 1-1.414 0l-6.994-6.994c-.614-.593-1.275-1.279-1.844-2.069a1 1 0 0 1-.098-.139C1.58 11.387 1 10.063 1 8.5a6.5 6.5 0 0 1 1.904-4.596M5.409 13q.142.141.286.281l.012.012L12 19.586l6.3-6.3q.146-.142.287-.286H15.5a1 1 0 0 1-.92-.606l-.391-.915-1.228 4.296a1 1 0 0 1-1.875.131l-1.309-2.945A1 1 0 0 1 9.5 13zm3.473-2h-5.12C3.29 10.228 3 9.407 3 8.5A4.5 4.5 0 0 1 7.5 4c.78 0 1.387.11 1.948.354.568.248 1.152.66 1.845 1.353a1 1 0 0 0 1.414 0c.693-.693 1.277-1.105 1.845-1.353C15.113 4.11 15.72 4 16.5 4A4.5 4.5 0 0 1 21 8.5c0 .905-.294 1.726-.77 2.5h-4.07l-1.24-2.894a1 1 0 0 0-1.881.12l-1.244 4.35-.881-1.982a1 1 0 0 0-1.808-.041z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Bn = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "20",
            height: "20",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 20 20",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M11.614 6.252a.83.83 0 0 1 .818.503l1.033 2.412h3.392c.397-.646.643-1.33.643-2.084a3.75 3.75 0 0 0-3.75-3.75c-.65 0-1.156.092-1.623.296-.474.206-.96.55-1.538 1.127a.834.834 0 0 1-1.178 0c-.578-.578-1.064-.921-1.537-1.127-.468-.204-.975-.296-1.624-.296a3.75 3.75 0 0 0-3.75 3.75c0 .756.243 1.44.636 2.084h4.265l.186-.373a.834.834 0 0 1 1.507.034l.735 1.652 1.036-3.626.046-.122a.83.83 0 0 1 .703-.48m-.813 6.894a.834.834 0 0 1-1.562.109L8.147 10.8a.8.8 0 0 1-.23.033H4.51q.116.118.236.234L10 16.321l5.25-5.25q.12-.118.236-.238h-2.57a.83.83 0 0 1-.765-.505l-.327-.763zm8.365-6.063c0 1.306-.493 2.412-1.146 3.348a1 1 0 0 1-.082.113c-.471.652-1.015 1.22-1.517 1.71l.001.002-5.833 5.833a.835.835 0 0 1-1.178 0l-5.824-5.823-.478-.477c-.364-.375-.728-.79-1.057-1.246a1 1 0 0 1-.085-.117C1.318 9.493.833 8.388.833 7.083A5.417 5.417 0 0 1 6.25 1.667c.816 0 1.56.117 2.289.434.51.222.987.533 1.46.933.474-.4.95-.71 1.461-.933.728-.317 1.473-.434 2.29-.434a5.417 5.417 0 0 1 5.416 5.416"
            })
          })
        }))),
        Sn = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M3.872 5.205A8.67 8.67 0 0 1 10 2.667c1.307 0 2.498.187 3.663.694.817.356 1.58.852 2.337 1.492.757-.64 1.52-1.136 2.338-1.492 1.165-.507 2.355-.694 3.662-.694a8.667 8.667 0 0 1 8.667 8.666c0 2.086-.786 3.855-1.829 5.35q-.053.09-.119.169c-.759 1.054-1.639 1.97-2.448 2.762l-9.328 9.329c-.52.52-1.365.52-1.886 0l-9.325-9.326c-.818-.79-1.7-1.705-2.459-2.758a1.3 1.3 0 0 1-.13-.185c-1.036-1.492-1.81-3.256-1.81-5.34 0-2.3.914-4.504 2.539-6.129m3.34 12.128q.188.188.382.375l.016.016 8.39 8.39 8.4-8.4q.195-.19.383-.38h-4.116a1.33 1.33 0 0 1-1.226-.809l-.522-1.22-1.637 5.728a1.333 1.333 0 0 1-2.5.175l-1.746-3.927a1.3 1.3 0 0 1-.37.052zm4.63-2.666H5.017C4.386 13.637 4 12.543 4 11.333a6 6 0 0 1 6-6c1.04 0 1.85.147 2.598.473.757.33 1.535.88 2.46 1.804.52.52 1.364.52 1.885 0 .924-.924 1.702-1.474 2.46-1.804.748-.326 1.557-.473 2.597-.473a6 6 0 0 1 6 6c0 1.207-.391 2.301-1.026 3.334h-5.428l-1.654-3.859a1.333 1.333 0 0 0-2.507.16l-1.658 5.801-1.175-2.644a1.333 1.333 0 0 0-2.411-.055z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        yn = (0, t.forwardRef)((({
          size: e = "SM",
          ...l
        }, a) => {
          const t = (0, o.v6)(l, {
            className: g({
              size: e
            })
          });
          return (0, r.jsxs)(r.Fragment, {
            children: ["SM" === e && (0, r.jsx)(Vn, {
              ...t,
              ref: a
            }), "LG" === e && (0, r.jsx)(In, {
              ...t,
              ref: a
            }), "MD" === e && (0, r.jsx)(Bn, {
              ...t,
              ref: a
            }), "XL" === e && (0, r.jsx)(Sn, {
              ...t,
              ref: a
            })]
          })
        }));
      yn.displayName = "HeartPulse", yn.categories = ["medical"], yn.tags = ["heartbeat", "pulse", "health", "medical", "blood pressure", "cardiac", "systole", "diastole"], yn.SM = Vn, yn.LG = In, yn.MD = Bn, yn.XL = Sn;
      const Dn = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M8 2a6 6 0 1 0 0 12A6 6 0 0 0 8 2M.667 8a7.333 7.333 0 1 1 14.666 0A7.333 7.333 0 0 1 .667 8m4 0c0-.368.298-.667.666-.667h5.333a.667.667 0 1 1 0 1.334H5.333A.667.667 0 0 1 4.666 8",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Nn = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12m6 0a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Gn = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "20",
            height: "20",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 20 20",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M17.167 10a7.5 7.5 0 1 0-15.001 0 7.5 7.5 0 0 0 15 0M13 9.167l.085.004a.834.834 0 0 1 0 1.658l-.085.005H6.335a.834.834 0 0 1 0-1.667zm5.834.833A9.167 9.167 0 1 1 .498 10a9.167 9.167 0 0 1 18.335 0"
            })
          })
        }))),
        Xn = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M16 4C9.373 4 4 9.373 4 16s5.373 12 12 12c6.628 0 12-5.373 12-12S22.628 4 16 4M1.334 16C1.334 7.9 7.9 1.333 16 1.333S30.667 7.9 30.667 16 24.1 30.667 16 30.667 1.334 24.1 1.334 16m8 0c0-.736.596-1.333 1.333-1.333h10.667a1.333 1.333 0 1 1 0 2.666H10.667A1.333 1.333 0 0 1 9.334 16",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        qn = (0, t.forwardRef)((({
          size: e = "SM",
          ...l
        }, a) => {
          const t = (0, o.v6)(l, {
            className: g({
              size: e
            })
          });
          return (0, r.jsxs)(r.Fragment, {
            children: ["SM" === e && (0, r.jsx)(Dn, {
              ...t,
              ref: a
            }), "LG" === e && (0, r.jsx)(Nn, {
              ...t,
              ref: a
            }), "MD" === e && (0, r.jsx)(Gn, {
              ...t,
              ref: a
            }), "XL" === e && (0, r.jsx)(Xn, {
              ...t,
              ref: a
            })]
          })
        }));
      qn.displayName = "CircleMinus", qn.categories = ["math"], qn.tags = ["subtract", "remove", "decrease", "reduce", "calculate", "line", "operator", "code", "coding", "minimum", "downgrade", "minus", "no", "less", "n/a", "delete"], qn.SM = Dn, qn.LG = Nn, qn.MD = Gn, qn.XL = Xn;
      const kn = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M8 2a6 6 0 1 0 0 12A6 6 0 0 0 8 2M.667 8a7.333 7.333 0 1 1 14.666 0A7.333 7.333 0 0 1 .667 8M5.528 5.53c.26-.26.683-.26.943 0L8 7.057 9.528 5.53a.667.667 0 1 1 .943.942l-1.528 1.53 1.528 1.528a.667.667 0 1 1-.943.943L8 8.942l-1.529 1.53a.667.667 0 0 1-.943-.943L7.057 8 5.528 6.471a.667.667 0 0 1 0-.942",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Fn = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12m7.293-3.707a1 1 0 0 1 1.414 0L12 10.586l2.293-2.293a1 1 0 1 1 1.414 1.414L13.414 12l2.293 2.293a1 1 0 0 1-1.414 1.414L12 13.414l-2.293 2.293a1 1 0 0 1-1.414-1.414L10.586 12 8.293 9.707a1 1 0 0 1 0-1.414",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Pn = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "20",
            height: "20",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 20 20",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M17.166 10a7.5 7.5 0 1 0-15 0 7.5 7.5 0 0 0 15 0m-5.589-3.09a.834.834 0 0 1 1.179 1.18L10.845 10l1.91 1.91-.589.59-.589.59-1.911-1.912-1.91 1.912a.834.834 0 0 1-1.179-1.18L8.487 10l-1.91-1.91-.057-.064a.834.834 0 0 1 1.172-1.173l.064.058 1.91 1.91zm1.179 5a.834.834 0 0 1-1.179 1.18zM18.833 10A9.167 9.167 0 1 1 .499 10a9.167 9.167 0 0 1 18.334 0"
            })
          })
        }))),
        On = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M16 4C9.373 4 4 9.373 4 16s5.373 12 12 12c6.628 0 12-5.373 12-12S22.628 4 16 4M1.334 16C1.334 7.9 7.9 1.333 16 1.333S30.667 7.9 30.667 16 24.1 30.667 16 30.667 1.334 24.1 1.334 16m9.723-4.943c.521-.52 1.365-.52 1.886 0L16 14.114l3.057-3.057a1.333 1.333 0 1 1 1.886 1.886L17.886 16l3.057 3.057a1.333 1.333 0 1 1-1.886 1.886L16 17.885l-3.057 3.058a1.333 1.333 0 1 1-1.886-1.886L14.114 16l-3.057-3.057a1.333 1.333 0 0 1 0-1.886",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Tn = (0, t.forwardRef)((({
          size: e = "SM",
          ...l
        }, a) => {
          const t = (0, o.v6)(l, {
            className: g({
              size: e
            })
          });
          return (0, r.jsxs)(r.Fragment, {
            children: ["SM" === e && (0, r.jsx)(kn, {
              ...t,
              ref: a
            }), "LG" === e && (0, r.jsx)(Fn, {
              ...t,
              ref: a
            }), "MD" === e && (0, r.jsx)(Pn, {
              ...t,
              ref: a
            }), "XL" === e && (0, r.jsx)(On, {
              ...t,
              ref: a
            })]
          })
        }));
      Tn.displayName = "CircleX", Tn.categories = ["math", "development"], Tn.tags = ["cancel", "close", "delete", "remove", "times", "clear", "error", "incorrect", "wrong", "mistake", "failure", "linter", "multiply", "multiplication", "clean", "erase", "deprecate", "delete", "navigation"], Tn.SM = kn, Tn.LG = Fn, Tn.MD = Pn, Tn.XL = On;
      const En = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M2.667 8c0-.368.298-.667.666-.667h9.334a.667.667 0 1 1 0 1.334H3.332A.667.667 0 0 1 2.666 8",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Un = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M4 12a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        _n = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "20",
            height: "20",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 20 20",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "m15.5 9.167.085.004a.834.834 0 0 1 0 1.658l-.085.004H3.834a.833.833 0 1 1 0-1.666z"
            })
          })
        }))),
        Wn = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M5.334 16c0-.736.596-1.333 1.333-1.333h18.667a1.333 1.333 0 0 1 0 2.666H6.666A1.333 1.333 0 0 1 5.334 16",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Zn = (0, t.forwardRef)((({
          size: e = "SM",
          ...l
        }, a) => {
          const t = (0, o.v6)(l, {
            className: g({
              size: e
            })
          });
          return (0, r.jsxs)(r.Fragment, {
            children: ["SM" === e && (0, r.jsx)(En, {
              ...t,
              ref: a
            }), "LG" === e && (0, r.jsx)(Un, {
              ...t,
              ref: a
            }), "MD" === e && (0, r.jsx)(_n, {
              ...t,
              ref: a
            }), "XL" === e && (0, r.jsx)(Wn, {
              ...t,
              ref: a
            })]
          })
        }));
      Zn.displayName = "Minus", Zn.categories = ["math", "development", "text", "tools"], Zn.tags = ["subtract", "remove", "decrease", "decrement", "reduce", "negative", "calculate", "line", "divider", "separator", "horizontal rule", "hr", "html", "markup", "markdown", "---", "toolbar", "operator", "code", "coding", "minimum", "downgrade", "less", "delete", "navigation", "minimize"], Zn.SM = En, Zn.LG = Un, Zn.MD = _n, Zn.XL = Wn;
      const Yn = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M8 2a.67.67 0 0 0-.4.133l-5.333 4a.7.7 0 0 0-.188.218l5.588 3.55.002.002a.63.63 0 0 0 .662 0l.002-.001 5.586-3.55a.7.7 0 0 0-.188-.22l-.001-.001L8.4 2.133A.67.67 0 0 0 8 2m6 5.88-4.96 3.152a1.96 1.96 0 0 1-2.08 0l-.004-.003L2 7.88v5.453a.667.667 0 0 0 .667.667h10.666a.667.667 0 0 0 .667-.667zM6.8 1.067a2 2 0 0 1 2.4 0l5.337 4.002c.495.377.796.964.796 1.598v6.666a2 2 0 0 1-2 2H2.667a2 2 0 0 1-2-2V6.667a2 2 0 0 1 .8-1.6z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Kn = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M12 3a1 1 0 0 0-.6.2l-8 6a1 1 0 0 0-.28.326l8.383 5.328a.94.94 0 0 0 .994 0l.002-.001 8.38-5.326a1 1 0 0 0-.282-.33h-.002L12.6 3.2A1 1 0 0 0 12 3m9 8.82-7.44 4.727a2.94 2.94 0 0 1-3.12 0l-.006-.003L3 11.82V20a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1zM10.2 1.6a3 3 0 0 1 3.6 0l8.005 6.004A3.01 3.01 0 0 1 23 10v10a3 3 0 0 1-3 3H4a3 3 0 0 1-3-3V10a3 3 0 0 1 1.2-2.4z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Qn = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "20",
            height: "20",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 20 20",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "m17.167 9.85-6.195 3.937-.005.003a2.45 2.45 0 0 1-2.601 0l-.004-.003L2.167 9.85v6.817A.834.834 0 0 0 3 17.5h13.334a.833.833 0 0 0 .832-.833zm-7.5-7.35a.84.84 0 0 0-.5.167l-6.667 5a.8.8 0 0 0-.233.271l6.988 4.442a.78.78 0 0 0 .823 0l6.987-4.44a.9.9 0 0 0-.232-.273l-6.666-5a.83.83 0 0 0-.5-.167m9.167 14.167a2.5 2.5 0 0 1-2.5 2.5H3a2.5 2.5 0 0 1-2.5-2.5V8.334a2.5 2.5 0 0 1 1-2l6.666-5a2.5 2.5 0 0 1 3 0l6.671 5.003c.62.47.997 1.205.997 1.997z"
            })
          })
        }))),
        Jn = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M16 4c-.288 0-.569.093-.8.267l-10.666 8a1.3 1.3 0 0 0-.375.435l11.176 7.101.003.002a1.25 1.25 0 0 0 1.328-.002l11.173-7.1a1.4 1.4 0 0 0-.376-.44q-.002 0-.003-.002L16.8 4.268A1.33 1.33 0 0 0 16 4m12 11.76-9.919 6.303a3.92 3.92 0 0 1-4.162 0l-.007-.004L4 15.76v10.907A1.333 1.333 0 0 0 5.334 28h21.333A1.333 1.333 0 0 0 28 26.667zM13.6 2.133a4 4 0 0 1 4.8 0l10.674 8.005a4.02 4.02 0 0 1 1.593 3.195v13.334a4 4 0 0 1-4 4H5.334a4 4 0 0 1-4-4V13.333a4 4 0 0 1 1.6-3.2z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        $n = (0, t.forwardRef)((({
          size: e = "SM",
          ...l
        }, a) => {
          const t = (0, o.v6)(l, {
            className: g({
              size: e
            })
          });
          return (0, r.jsxs)(r.Fragment, {
            children: ["SM" === e && (0, r.jsx)(Yn, {
              ...t,
              ref: a
            }), "LG" === e && (0, r.jsx)(Kn, {
              ...t,
              ref: a
            }), "MD" === e && (0, r.jsx)(Qn, {
              ...t,
              ref: a
            }), "XL" === e && (0, r.jsx)(Jn, {
              ...t,
              ref: a
            })]
          })
        }));
      $n.displayName = "EnvelopeOpen", $n.categories = ["mail"], $n.tags = ["email", "message", "letter", "read"], $n.SM = Yn, $n.LG = Kn, $n.MD = Qn, $n.XL = Jn;
      const eh = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M11.594 3.644c-.334-.324-.636-.45-1.063-.444a1.45 1.45 0 0 0-.707.222c-.166.099-.272.196-.29.213L4.766 8.578h-.001c-.026.03-.699.772-.699 1.8 0 .431.06.72.165.956.106.239.28.474.581.767.302.293.56.468.814.57.25.101.54.148.932.122a2.73 2.73 0 0 0 1.639-.678l.004-.004 2.247-2.27a.7.7 0 0 1 .995.986l-2.246 2.267c-.085.087-1 .991-2.544 1.096-.561.038-1.068-.026-1.549-.22-.475-.19-.882-.49-1.266-.864-.377-.365-.683-.745-.887-1.205-.205-.463-.284-.958-.284-1.523 0-1.633 1.055-2.735 1.087-2.768l.002-.002 4.78-4.955.008-.008c.036-.036.827-.827 1.965-.845.835-.012 1.486.282 2.06.838.276.268.488.55.624.894.132.337.17.681.176 1.035.022 1.15-.745 1.964-.777 1.998l-.007.007-4.783 4.958-.056.053c-.037.031-.17.14-.358.246-.177.1-.47.236-.814.245a1.7 1.7 0 0 1-.72-.11 1.7 1.7 0 0 1-.545-.374 1.7 1.7 0 0 1-.406-.566 1.8 1.8 0 0 1-.137-.673 1.8 1.8 0 0 1 .49-1.27L9.69 4.515a.7.7 0 0 1 1.004.975l-4.434 4.565a.42.42 0 0 0-.096.263.4.4 0 0 0 .022.15.4.4 0 0 0 .088.11c.07.066.1.085.106.089.01.002.05.01.154.008q.001.002.054-.013a1 1 0 0 0 .112-.052c.054-.03.097-.062.12-.08l4.75-4.922a1.7 1.7 0 0 0 .2-.294c.113-.203.204-.454.199-.72-.006-.278-.035-.434-.08-.55-.043-.108-.119-.23-.296-.4M6.38 10.666h.002zm.002 0 .002.002zm-.126-.605",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        lh = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M17.573 5.208c-.532-.514-1.018-.718-1.703-.708-.423.007-.819.167-1.135.356a3 3 0 0 0-.462.34l-7.37 7.64-.001.002C6.863 12.88 5.8 14.05 5.8 15.675c0 .674.094 1.133.261 1.51.17.383.445.755.917 1.212.47.457.877.736 1.284.899.4.16.86.234 1.476.192 1.625-.11 2.584-1.07 2.584-1.07l.002-.003.005-.005.003-.003 3.47-3.503a1 1 0 0 1 1.422 1.407l-3.47 3.503.004-.004-.006.006c-.123.126-1.521 1.508-3.879 1.668-.857.058-1.628-.04-2.357-.332-.722-.29-1.342-.748-1.93-1.32-.579-.56-1.044-1.138-1.353-1.836-.311-.703-.433-1.455-.433-2.321 0-2.492 1.613-4.175 1.658-4.222l.003-.002.001-.002 7.38-7.65.003-.003.002-.002.005-.005.006-.007h.001c.047-.047 1.251-1.255 2.98-1.281 1.268-.02 2.252.426 3.124 1.27.423.41.743.837.946 1.354.2.508.258 1.029.268 1.572.033 1.745-1.136 2.984-1.18 3.03l-.005.005-.005.005-.003.003-7.39 7.66a1 1 0 0 1-.075.071c-.049.042-.248.208-.533.37-.27.153-.713.36-1.232.374-.362.01-.722-.02-1.079-.165-.353-.143-.61-.364-.817-.561a2.6 2.6 0 0 1-.61-.848 2.7 2.7 0 0 1-.204-1.01 2.72 2.72 0 0 1 .735-1.904l6.854-7.056a1 1 0 0 1 1.434 1.393l-6.855 7.057c-.005.007-.041.049-.08.118a.7.7 0 0 0-.089.345.7.7 0 0 0 .041.262.6.6 0 0 0 .155.196c.147.14.187.155.19.155 0 .001.014.006.05.011.042.006.11.01.22.007a.4.4 0 0 0 .11-.025q.088-.03.189-.088c.09-.05.16-.102.195-.13l7.346-7.614c.02-.024.17-.196.321-.467.178-.321.325-.725.317-1.157-.008-.434-.054-.686-.13-.877-.07-.181-.195-.378-.474-.649",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        ah = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "20",
            height: "20",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 20 20",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M14.773 4.28c-.454-.432-.87-.604-1.455-.595-.361.005-.7.14-.97.3-.227.133-.372.264-.395.285l-6.3 6.434-.001.001c-.033.036-.942 1.021-.942 2.39 0 .567.08.954.223 1.272.145.322.38.635.783 1.02s.75.62 1.098.757c.342.135.736.197 1.262.162 1.389-.093 2.209-.902 2.209-.902l.002-.002.004-.004.002-.002 2.967-2.95a.864.864 0 0 1 1.21-.006c.335.327.337.86.005 1.19l-2.966 2.95.003-.003-.005.005c-.105.106-1.3 1.27-3.315 1.404-.733.05-1.392-.033-2.015-.28-.618-.244-1.147-.629-1.65-1.11-.495-.472-.893-.959-1.157-1.547-.266-.591-.37-1.225-.37-1.954 0-2.099 1.38-3.516 1.417-3.555l.003-.003h.001v-.001l6.309-6.442.002-.003.002-.001.004-.005.005-.005h.001c.04-.04 1.07-1.057 2.548-1.08 1.083-.016 1.925.36 2.67 1.07.361.345.635.705.809 1.14.17.428.22.867.228 1.324.029 1.47-.97 2.513-1.008 2.552l-.005.004-.004.004-.002.003-6.317 6.45a1 1 0 0 1-.064.06 3 3 0 0 1-.456.312c-.231.129-.61.302-1.053.314-.31.009-.618-.016-.922-.138a2.2 2.2 0 0 1-.699-.473c-.213-.2-.396-.43-.52-.714a2.2 2.2 0 0 1-.176-.85 2.27 2.27 0 0 1 .628-1.604l5.859-5.942a.864.864 0 0 1 1.209-.017.833.833 0 0 1 .017 1.19l-5.86 5.944a.6.6 0 0 0-.067.098.57.57 0 0 0-.077.29.6.6 0 0 0 .035.222c.013.028.04.078.132.165.126.118.16.13.162.13.002.001.013.006.044.01.035.005.093.008.188.006a.4.4 0 0 0 .093-.021 1 1 0 0 0 .162-.075c.077-.042.137-.086.167-.109l6.28-6.412a2.3 2.3 0 0 0 .274-.393c.152-.27.278-.61.271-.974-.007-.366-.046-.578-.11-.74-.061-.152-.168-.318-.407-.545",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        rh = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M23.451 7.067c-.697-.662-1.325-.919-2.216-.905-.543.008-1.056.209-1.472.452a3.7 3.7 0 0 0-.605.436L9.224 17.151l-.002.002c-.055.06-1.455 1.577-1.455 3.677 0 .88.125 1.472.343 1.954.22.488.582.969 1.211 1.568.629.598 1.165.957 1.696 1.166.52.205 1.125.301 1.941.247 2.145-.143 3.414-1.386 3.414-1.386l.009-.008 4.683-4.637a1.48 1.48 0 0 1 2.062-.01c.572.557.577 1.462.01 2.024l-4.68 4.633c-.176.177-2.085 2.025-5.3 2.238-1.17.078-2.226-.052-3.227-.447-.99-.39-1.837-1.004-2.639-1.766-.785-.747-1.422-1.522-1.847-2.463-.427-.947-.593-1.957-.593-3.113 0-3.337 2.2-5.589 2.266-5.657l.004-.004 9.96-10.126.016-.017c.074-.072 1.723-1.689 4.094-1.725 1.74-.027 3.095.576 4.29 1.71.577.549 1.02 1.126 1.3 1.83.276.687.355 1.39.37 2.115.044 2.348-1.553 4.012-1.62 4.082l-.015.015-9.965 10.132a2 2 0 0 1-.116.107 5 5 0 0 1-.746.504c-.37.205-.98.481-1.697.5-.496.014-1-.026-1.5-.225-.495-.197-.854-.5-1.136-.764a3.5 3.5 0 0 1-.846-1.156 3.6 3.6 0 0 1-.286-1.376c-.037-1.513.903-2.478 1.022-2.596l9.24-9.33a1.48 1.48 0 0 1 2.063-.03c.577.55.59 1.456.03 2.023l-9.24 9.329a1 1 0 0 0-.093.137.8.8 0 0 0-.106.399c.005.2.034.277.047.307.012.027.046.095.183.223.145.136.206.175.221.184.02.005.104.021.32.016 0 0 .041-.003.113-.027q.107-.036.233-.106c.112-.062.202-.126.25-.162L23.4 11.081c.03-.032.224-.253.42-.6.233-.414.422-.927.412-1.471-.011-.568-.072-.887-.167-1.123-.089-.222-.246-.47-.615-.82M12.585 21.42l.005.002zm.005.002.004.002zm-.264-1.238.002-.002z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        th = (0, t.forwardRef)((({
          size: e = "SM",
          ...l
        }, a) => {
          const t = (0, o.v6)(l, {
            className: g({
              size: e
            })
          });
          return (0, r.jsxs)(r.Fragment, {
            children: ["SM" === e && (0, r.jsx)(eh, {
              ...t,
              ref: a
            }), "LG" === e && (0, r.jsx)(lh, {
              ...t,
              ref: a
            }), "MD" === e && (0, r.jsx)(ah, {
              ...t,
              ref: a
            }), "XL" === e && (0, r.jsx)(rh, {
              ...t,
              ref: a
            })]
          })
        }));
      th.displayName = "Paperclip", th.categories = ["text", "design", "files", "mail"], th.tags = ["attachment", "file", "attach", "clip", "document", "paper"], th.SM = eh, th.LG = lh, th.MD = ah, th.XL = rh;
      const sh = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M6.222 2.221c-.157.157-.222.33-.222.446v.666h4v-.666c0-.117-.065-.29-.221-.446-.157-.156-.329-.22-.445-.22H6.667c-.117 0-.289.064-.445.22m5.112 1.112v-.666c0-.55-.269-1.045-.612-1.388-.344-.344-.838-.612-1.388-.612H6.667c-.55 0-1.045.268-1.388.612-.344.343-.612.838-.612 1.388v.666H2a.667.667 0 1 0 0 1.334h.667v8.666c0 .55.268 1.045.612 1.389.343.343.838.611 1.388.611h6.667c.55 0 1.044-.268 1.388-.611.343-.344.612-.838.612-1.389V4.667H14a.667.667 0 0 0 0-1.334zM4 4.667v8.666c0 .117.065.29.222.446.156.156.328.221.445.221h6.667c.116 0 .288-.065.445-.221.156-.157.221-.33.221-.446V4.667zm2.667 2c.368 0 .667.298.667.666v4a.667.667 0 1 1-1.334 0v-4c0-.368.299-.666.667-.666m2.667 0c.368 0 .666.298.666.666v4a.667.667 0 0 1-1.333 0v-4c0-.368.298-.666.667-.666",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        ih = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M9.332 3.332C9.097 3.567 9 3.825 9 4v1h6V4c0-.175-.098-.433-.332-.668S14.175 3 14 3h-4c-.175 0-.433.097-.668.332M17 5V4c0-.825-.402-1.567-.918-2.082C15.567 1.403 14.825 1 14 1h-4c-.825 0-1.567.403-2.082.918S7 3.175 7 4v1H3a1 1 0 0 0 0 2h1v13c0 .825.403 1.567.918 2.082S6.175 23 7 23h10c.825 0 1.567-.402 2.082-.918.515-.515.918-1.257.918-2.082V7h1a1 1 0 1 0 0-2zM6 7v13c0 .175.097.433.332.668S6.825 21 7 21h10c.175 0 .433-.098.668-.332S18 20.175 18 20V7zm4 3a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0v-6a1 1 0 0 1 1-1m4 0a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0v-6a1 1 0 0 1 1-1",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        dh = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "20",
            height: "20",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 20 20",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M14.667 5.834h-10v10.833l.004.082a.833.833 0 0 0 .829.75h8.334a.834.834 0 0 0 .833-.832zm-7.5 8.333v-5a.833.833 0 0 1 1.667 0v5a.834.834 0 0 1-1.667 0m3.333 0v-5a.834.834 0 0 1 1.667 0v5a.833.833 0 1 1-1.667 0m1.667-10.833a.835.835 0 0 0-.833-.834H8a.834.834 0 0 0-.833.834v.833h5zm1.667.833h3.333l.085.004a.834.834 0 0 1 0 1.658l-.085.005h-.833v10.833a2.5 2.5 0 0 1-2.5 2.5H5.5a2.5 2.5 0 0 1-2.5-2.5V5.834h-.833a.834.834 0 0 1 0-1.667H5.5v-.833A2.5 2.5 0 0 1 8 .834h3.334a2.5 2.5 0 0 1 2.5 2.5z"
            })
          })
        }))),
        oh = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M12.443 4.443c-.313.313-.443.657-.443.89v1.334h8V5.333c0-.233-.13-.577-.443-.89S18.9 4 18.667 4h-5.334c-.233 0-.578.13-.89.443m10.224 2.224V5.333c0-1.1-.537-2.089-1.224-2.776s-1.676-1.224-2.777-1.224h-5.333c-1.1 0-2.089.537-2.776 1.224S9.333 4.233 9.333 5.333v1.334H4a1.333 1.333 0 1 0 0 2.666h1.333v17.334c0 1.1.537 2.089 1.224 2.776s1.676 1.224 2.776 1.224h13.333c1.1 0 2.09-.537 2.777-1.224s1.223-1.676 1.223-2.776V9.333H28a1.333 1.333 0 1 0 0-2.666zM8 9.333v17.334c0 .233.13.577.443.89s.657.443.89.443h13.333c.233 0 .578-.13.891-.443s.443-.657.443-.89V9.333zm5.333 4c.737 0 1.333.597 1.333 1.334v8a1.333 1.333 0 1 1-2.666 0v-8c0-.737.597-1.334 1.333-1.334m5.333 0c.737 0 1.334.597 1.334 1.334v8a1.333 1.333 0 1 1-2.667 0v-8c0-.737.597-1.334 1.334-1.334",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        nh = (0, t.forwardRef)((({
          size: e = "SM",
          ...l
        }, a) => {
          const t = (0, o.v6)(l, {
            className: g({
              size: e
            })
          });
          return (0, r.jsxs)(r.Fragment, {
            children: ["SM" === e && (0, r.jsx)(sh, {
              ...t,
              ref: a
            }), "LG" === e && (0, r.jsx)(ih, {
              ...t,
              ref: a
            }), "MD" === e && (0, r.jsx)(dh, {
              ...t,
              ref: a
            }), "XL" === e && (0, r.jsx)(oh, {
              ...t,
              ref: a
            })]
          })
        }));
      nh.displayName = "Trash", nh.categories = ["files", "mail"], nh.tags = ["garbage", "delete", "remove", "bin", "trashcan", "bin", "waste bin", "erase"], nh.SM = sh, nh.LG = ih, nh.MD = dh, nh.XL = oh;
      const hh = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M6.667 3.333a1.333 1.333 0 1 1 2.666 0 1.333 1.333 0 0 1-2.666 0m0 4.667a1.333 1.333 0 1 1 2.666 0 1.333 1.333 0 0 1-2.666 0m0 4.667a1.333 1.333 0 1 1 2.666 0 1.333 1.333 0 0 1-2.666 0",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        ch = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M10 5a2 2 0 1 1 4 0 2 2 0 0 1-4 0m0 7a2 2 0 1 1 4 0 2 2 0 0 1-4 0m0 7a2 2 0 1 1 4 0 2 2 0 0 1-4 0",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        fh = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "20",
            height: "20",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 20 20",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M8 15.834a1.667 1.667 0 1 1 3.334-.001 1.667 1.667 0 0 1-3.334 0M8 10A1.667 1.667 0 1 1 11.334 10 1.667 1.667 0 0 1 8 10m0-5.834a1.666 1.666 0 1 1 3.333 0 1.666 1.666 0 0 1-3.333 0"
            })
          })
        }))),
        wh = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M13.334 6.667a2.667 2.667 0 1 1 5.333 0 2.667 2.667 0 0 1-5.334 0m0 9.333a2.667 2.667 0 1 1 5.333 0 2.667 2.667 0 0 1-5.334 0m0 9.333a2.667 2.667 0 1 1 5.333 0 2.667 2.667 0 0 1-5.334 0",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        vh = (0, t.forwardRef)((({
          size: e = "SM",
          ...l
        }, a) => {
          const t = (0, o.v6)(l, {
            className: g({
              size: e
            })
          });
          return (0, r.jsxs)(r.Fragment, {
            children: ["SM" === e && (0, r.jsx)(hh, {
              ...t,
              ref: a
            }), "LG" === e && (0, r.jsx)(ch, {
              ...t,
              ref: a
            }), "MD" === e && (0, r.jsx)(fh, {
              ...t,
              ref: a
            }), "XL" === e && (0, r.jsx)(wh, {
              ...t,
              ref: a
            })]
          })
        }));
      vh.displayName = "EllipsisVertical", vh.categories = ["layout"], vh.tags = ["menu", "options", "spread", "more", "further", "extra", "overflow", "dots", "..."], vh.SM = hh, vh.LG = ch, vh.MD = fh, vh.XL = wh;
      const xh = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M.728 1.72a.67.67 0 0 1 .605-.387h13.333a.667.667 0 0 1 .51 1.098L10 8.55V14a.667.667 0 0 1-.965.595l-2.667-1.333A.67.67 0 0 1 6 12.667V8.55L.824 2.43a.67.67 0 0 1-.096-.711m2.042.947 4.406 5.21c.101.12.157.272.157.43v3.948l1.334.666V8.308c0-.158.055-.31.157-.43l4.406-5.21z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        gh = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M1.093 2.58A1 1 0 0 1 2 2h20a1 1 0 0 1 .764 1.646L15 12.826V21a1 1 0 0 1-1.447.894l-4-2A1 1 0 0 1 9 19v-6.174l-7.764-9.18a1 1 0 0 1-.143-1.067M4.155 4l6.609 7.814a1 1 0 0 1 .236.646v5.922l2 1V12.46a1 1 0 0 1 .236-.646L19.845 4z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        jh = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "20",
            height: "20",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 20 20",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M10.5 11.666a2.5 2.5 0 0 1 .646-1.676l6.018-6.657H2.166l6.02 6.657.148.179a2.5 2.5 0 0 1 .5 1.497v5.001l1.665.832zm1.666 5.834-.013.21a1.667 1.667 0 0 1-2.203 1.364l-.196-.083-1.666-.833a1.67 1.67 0 0 1-.922-1.492v-4.999a.83.83 0 0 0-.216-.559L.93 4.45H.929a1.667 1.667 0 0 1 1.237-2.783h15.002a1.666 1.666 0 0 1 1.234 2.783H18.4l-6.019 6.658a.83.83 0 0 0-.216.559z"
            })
          })
        }))),
        mh = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M1.457 3.439c.219-.471.69-.772 1.21-.772h26.667a1.333 1.333 0 0 1 1.018 2.194L20 17.1V28a1.333 1.333 0 0 1-1.93 1.192l-5.333-2.666A1.33 1.33 0 0 1 12 25.333v-8.232L1.65 4.861a1.33 1.33 0 0 1-.192-1.422m4.084 1.894 8.81 10.42c.204.24.316.545.316.86v7.896l2.667 1.334v-9.23c0-.315.111-.62.315-.86l8.81-10.42z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        ph = (0, t.forwardRef)((({
          size: e = "SM",
          ...l
        }, a) => {
          const t = (0, o.v6)(l, {
            className: g({
              size: e
            })
          });
          return (0, r.jsxs)(r.Fragment, {
            children: ["SM" === e && (0, r.jsx)(xh, {
              ...t,
              ref: a
            }), "LG" === e && (0, r.jsx)(gh, {
              ...t,
              ref: a
            }), "MD" === e && (0, r.jsx)(jh, {
              ...t,
              ref: a
            }), "XL" === e && (0, r.jsx)(mh, {
              ...t,
              ref: a
            })]
          })
        }));
      ph.displayName = "Filter", ph.categories = ["layout"], ph.tags = ["funnel", "hopper"], ph.SM = xh, ph.LG = gh, ph.MD = jh, ph.XL = mh;
      const uh = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M12.325 4.605c0-.188-.14-.34-.315-.34H5.49a.32.32 0 0 0-.287.2l-.5 1.186a.36.36 0 0 0 .085.401l.237.213c.464.417.648 1.095.466 1.716l-.678 2.312c-.064.22.089.443.302.443h.99a.32.32 0 0 0 .3-.233L7.43 7.192c.202-.655.772-1.097 1.413-1.097h3.167c.174 0 .315-.153.315-.341zM8.843 7.359a.32.32 0 0 0-.3.233l-.276.89c.585-.023.915-.253 1.11-.49.152-.183.252-.408.312-.633zM13.5 5.754c0 .886-.667 1.605-1.49 1.605h-1.121c-.077.483-.262 1.022-.633 1.473-.512.62-1.296.984-2.377.904l-.36 1.167C7.316 11.558 6.746 12 6.105 12h-.99c-1.007 0-1.724-1.053-1.42-2.087L4.371 7.6a.36.36 0 0 0-.1-.364l-.236-.212c-.515-.463-.68-1.239-.403-1.897l.501-1.186C4.376 3.368 4.906 3 5.491 3h6.519c.823 0 1.49.719 1.49 1.605z"
            })
          })
        }))),
        Mh = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "m6.277 6.537-1.252 2.77 1.095.917c.631.53.882 1.39.635 2.178l-1.59 5.061H8.21l2.116-6.385a2.03 2.03 0 0 1 1.922-1.393h6.727V6.537zm5.319 7.15c1.094-.025 1.713-.422 2.078-.835.289-.328.473-.73.58-1.13h-2.006zM21 9.685a2.03 2.03 0 0 1-2.025 2.037h-2.649c-.134.812-.467 1.722-1.137 2.482-.913 1.034-2.318 1.643-4.262 1.5l-.796 2.403A2.03 2.03 0 0 1 8.21 19.5H5.165c-1.368 0-2.343-1.338-1.931-2.65l1.59-5.06-1.096-.918a2.044 2.044 0 0 1-.546-2.407l1.252-2.77A2.03 2.03 0 0 1 6.277 4.5h12.698C20.093 4.5 21 5.412 21 6.537z"
            })
          })
        }))),
        Rh = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "20",
            height: "20",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 20 20",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M15.486 5.738a.153.153 0 0 0-.15-.156H5.572a.15.15 0 0 0-.136.09l-.908 2.061a.16.16 0 0 0 .041.186l.717.616c.525.452.735 1.193.527 1.871l-1.165 3.809c-.03.1.04.203.142.203h2.146a.15.15 0 0 0 .142-.106L8.68 9.35c.229-.707.863-1.182 1.577-1.182h5.078c.083 0 .15-.07.15-.157zm-5.228 4.011a.15.15 0 0 0-.142.107l-.494 1.528c.898-.01 1.406-.338 1.704-.685.238-.275.386-.616.469-.95zM17 8.011c0 .96-.745 1.738-1.664 1.738h-1.994c-.102.656-.362 1.394-.89 2.007-.711.828-1.808 1.313-3.335 1.19l-.604 1.872C8.285 15.525 7.65 16 6.936 16H4.79c-1.127 0-1.928-1.146-1.585-2.267l1.166-3.809a.16.16 0 0 0-.047-.168l-.717-.616a1.79 1.79 0 0 1-.455-2.068L4.06 5.01A1.66 1.66 0 0 1 5.572 4h9.764C16.256 4 17 4.778 17 5.738z"
            })
          })
        }))),
        bh = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "m6.526 12.398 1.735 1.462c.693.585.969 1.536.697 2.407L6.698 23.5h4.344l2.954-8.962A2.23 2.23 0 0 1 16.106 13h9.422V8.5H8.28zm8.801 6.004c1.607.005 2.518-.559 3.054-1.17.441-.502.708-1.126.848-1.732h-2.944zM28 13.25c0 1.243-.996 2.25-2.225 2.25h-4.032c-.164 1.104-.603 2.356-1.513 3.393-1.21 1.379-3.086 2.191-5.715 1.974l-1.183 3.595A2.23 2.23 0 0 1 11.22 26H6.36c-1.503 0-2.574-1.478-2.12-2.928l2.31-7.4-1.75-1.474A2.27 2.27 0 0 1 4.2 11.54l1.896-4.22.072-.147A2.22 2.22 0 0 1 8.121 6h17.654C27.004 6 28 7.007 28 8.25z"
            })
          })
        }))),
        Lh = (0, t.forwardRef)((({
          size: e = "SM",
          ...l
        }, a) => {
          const t = (0, o.v6)(l, {
            className: g({
              size: e
            })
          });
          return (0, r.jsxs)(r.Fragment, {
            children: ["SM" === e && (0, r.jsx)(uh, {
              ...t,
              ref: a
            }), "LG" === e && (0, r.jsx)(Mh, {
              ...t,
              ref: a
            }), "MD" === e && (0, r.jsx)(Rh, {
              ...t,
              ref: a
            }), "XL" === e && (0, r.jsx)(bh, {
              ...t,
              ref: a
            })]
          })
        }));
      Lh.displayName = "Weapon", Lh.categories = ["gaming"], Lh.tags = ["gun", "pistol", "GTAO", "fire", "shoot", "death", "danger"], Lh.SM = uh, Lh.LG = Mh, Lh.MD = Rh, Lh.XL = bh;
      const zh = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M1.936 2.602A4.33 4.33 0 0 1 5 1.333c.654 0 1.249.094 1.831.347.409.178.79.426 1.17.746.378-.32.76-.568 1.168-.746.582-.253 1.178-.347 1.831-.347a4.333 4.333 0 0 1 4.333 4.334c0 1.827-1.206 3.168-2.197 4.14L8.47 14.471a.667.667 0 0 1-.942 0L2.866 9.81c-1.003-.97-2.2-2.31-2.2-4.142 0-1.15.457-2.252 1.27-3.065M5 2.667a3 3 0 0 0-3 3c0 1.23.8 2.224 1.797 3.187l.008.008L8 13.057l4.2-4.2c.995-.975 1.8-1.966 1.8-3.19a3 3 0 0 0-3-3c-.52 0-.925.073-1.299.236-.378.165-.768.44-1.23.902a.667.667 0 0 1-.942 0c-.462-.462-.852-.737-1.23-.902C5.925 2.74 5.52 2.667 5 2.667",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Ch = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M2.904 3.904A6.5 6.5 0 0 1 7.5 2c.98 0 1.873.14 2.747.52.613.268 1.185.64 1.753 1.12.568-.48 1.14-.852 1.753-1.12C14.627 2.14 15.52 2 16.5 2A6.5 6.5 0 0 1 23 8.5c0 2.742-1.81 4.753-3.297 6.21l-6.996 6.997a1 1 0 0 1-1.414 0l-6.994-6.994C2.794 13.258 1 11.25 1 8.5a6.5 6.5 0 0 1 1.904-4.596M7.5 4A4.5 4.5 0 0 0 3 8.5c0 1.847 1.2 3.336 2.695 4.781l.012.012L12 19.586l6.3-6.3c1.492-1.463 2.7-2.95 2.7-4.786A4.5 4.5 0 0 0 16.5 4c-.78 0-1.387.11-1.948.354-.568.248-1.152.66-1.845 1.353a1 1 0 0 1-1.414 0c-.693-.693-1.277-1.105-1.845-1.353C8.887 4.11 8.28 4 7.5 4",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Ah = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "20",
            height: "20",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 20 20",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M17.5 7.083a3.75 3.75 0 0 0-3.75-3.75c-.65 0-1.156.092-1.623.296-.473.206-.96.55-1.537 1.127a.834.834 0 0 1-1.18 0c-.576-.578-1.063-.921-1.536-1.127-.468-.204-.974-.296-1.624-.296a3.75 3.75 0 0 0-3.75 3.75c0 1.539 1 2.78 2.246 3.984L10 16.321l5.25-5.25c1.243-1.218 2.25-2.458 2.25-3.988m1.667 0c0 2.283-1.507 3.957-2.745 5.172L10.59 18.09a.835.835 0 0 1-1.18 0l-5.822-5.823-.479-.477C1.982 10.624.834 9.091.834 7.083A5.417 5.417 0 0 1 6.25 1.667c.816 0 1.56.117 2.289.434.51.222.987.533 1.46.933.474-.4.95-.71 1.462-.933.728-.317 1.472-.434 2.289-.434a5.417 5.417 0 0 1 5.417 5.416"
            })
          })
        }))),
        Hh = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M3.872 5.205A8.67 8.67 0 0 1 10 2.667c1.307 0 2.498.187 3.662.694.817.356 1.58.852 2.338 1.492.757-.64 1.52-1.136 2.337-1.492 1.165-.507 2.356-.694 3.663-.694a8.667 8.667 0 0 1 8.667 8.666c0 3.656-2.413 6.338-4.396 8.281l-9.328 9.329c-.521.52-1.365.52-1.886 0l-9.325-9.326C3.726 17.678 1.333 15 1.333 11.333c0-2.298.913-4.503 2.539-6.128M10 5.333a6 6 0 0 0-6 6c0 2.463 1.6 4.45 3.593 6.375l.016.016 8.39 8.39 8.401-8.4c1.99-1.95 3.6-3.933 3.6-6.38a6 6 0 0 0-6-6c-1.04 0-1.85.146-2.598.472-.757.33-1.535.88-2.46 1.804-.52.52-1.364.52-1.885 0-.924-.924-1.702-1.474-2.46-1.804-.748-.326-1.557-.473-2.597-.473",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Vh = (0, t.forwardRef)((({
          size: e = "SM",
          ...l
        }, a) => {
          const t = (0, o.v6)(l, {
            className: g({
              size: e
            })
          });
          return (0, r.jsxs)(r.Fragment, {
            children: ["SM" === e && (0, r.jsx)(zh, {
              ...t,
              ref: a
            }), "LG" === e && (0, r.jsx)(Ch, {
              ...t,
              ref: a
            }), "MD" === e && (0, r.jsx)(Ah, {
              ...t,
              ref: a
            }), "XL" === e && (0, r.jsx)(Hh, {
              ...t,
              ref: a
            })]
          })
        }));
      Vh.displayName = "Heart", Vh.categories = ["medical", "social", "multimedia", "emoji", "gaming", "shapes"], Vh.tags = ["like", "love", "emotion", "suit", "playing", "cards"], Vh.SM = zh, Vh.LG = Ch, Vh.MD = Ah, Vh.XL = Hh;
      const Ih = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M2.586 1.252A2 2 0 0 1 4 .667h6c.177 0 .346.07.471.195l3.334 3.333a.67.67 0 0 1 .195.471v8.667a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2.667a2 2 0 0 1 .586-1.415m9.805 3.415L10 2.276V4a.666.666 0 0 0 .667.667zM8.667 2v2a2 2 0 0 0 2 2h2v7.333A.667.667 0 0 1 12 14H4a.667.667 0 0 1-.667-.667V2.667A.667.667 0 0 1 4 2zm-4 4c0-.368.298-.667.666-.667h1.334a.667.667 0 0 1 0 1.334H5.333A.667.667 0 0 1 4.667 6m0 2.666c0-.368.298-.666.666-.666h5.334a.667.667 0 0 1 0 1.333H5.333a.667.667 0 0 1-.666-.667m0 2.667c0-.368.298-.667.666-.667h5.334a.667.667 0 0 1 0 1.334H5.333a.667.667 0 0 1-.666-.667",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Bh = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M3.879 1.879A3 3 0 0 1 6 1h9a1 1 0 0 1 .707.293l5 5A1 1 0 0 1 21 7v13a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V4a3 3 0 0 1 .879-2.121M18.586 7H16a1 1 0 0 1-1-1V3.414zM13 3v3a3 3 0 0 0 3 3h3v11a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zM7 9a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1m0 4a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1m0 4a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Sh = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "20",
            height: "20",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 20 20",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M2.5 16.667V3.333A2.5 2.5 0 0 1 5 .834h7.5l.082.003c.191.02.37.104.507.24l4.167 4.167a.84.84 0 0 1 .244.59v10.833a2.5 2.5 0 0 1-2.5 2.5H5a2.5 2.5 0 0 1-2.5-2.5m10.834-3.334a.833.833 0 1 1 0 1.666H6.667a.833.833 0 0 1 0-1.665zm0-3.333a.834.834 0 0 1 .085 1.663l-.085.003H6.667a.833.833 0 0 1 0-1.666zm-5-3.333.084.003a.833.833 0 0 1 0 1.659l-.084.005H6.667a.834.834 0 0 1 0-1.667zM12.5 5a.835.835 0 0 0 .833.833h2.155L12.5 2.846zM4.167 16.667l.004.081a.833.833 0 0 0 .83.752h10a.833.833 0 0 0 .833-.834V7.5h-2.5a2.5 2.5 0 0 1-2.5-2.5V2.5H5a.835.835 0 0 0-.833.833z"
            })
          })
        }))),
        yh = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M5.172 2.505A4 4 0 0 1 8 1.334h12c.354 0 .693.14.943.39l6.666 6.667c.25.25.391.589.391.943v17.333a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4V5.334a4 4 0 0 1 1.172-2.829M24.78 9.334 20 4.552V8a1.334 1.334 0 0 0 1.333 1.334zM17.333 4v4a4 4 0 0 0 4 4h4v14.667A1.333 1.333 0 0 1 24 28H8a1.333 1.333 0 0 1-1.333-1.333V5.334A1.333 1.333 0 0 1 8 4zm-8 8c0-.736.597-1.333 1.334-1.333h2.666a1.333 1.333 0 0 1 0 2.667h-2.666A1.333 1.333 0 0 1 9.333 12m0 5.334c0-.737.597-1.334 1.334-1.334h10.666a1.333 1.333 0 1 1 0 2.667H10.667a1.333 1.333 0 0 1-1.334-1.334m0 5.333c0-.737.597-1.334 1.334-1.334h10.666a1.333 1.333 0 1 1 0 2.667H10.667a1.333 1.333 0 0 1-1.334-1.333",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Dh = (0, t.forwardRef)((({
          size: e = "SM",
          ...l
        }, a) => {
          const t = (0, o.v6)(l, {
            className: g({
              size: e
            })
          });
          return (0, r.jsxs)(r.Fragment, {
            children: ["SM" === e && (0, r.jsx)(Ih, {
              ...t,
              ref: a
            }), "LG" === e && (0, r.jsx)(Bh, {
              ...t,
              ref: a
            }), "MD" === e && (0, r.jsx)(Sh, {
              ...t,
              ref: a
            }), "XL" === e && (0, r.jsx)(yh, {
              ...t,
              ref: a
            })]
          })
        }));
      Dh.displayName = "FileText", Dh.categories = ["files", "text"], Dh.tags = ["data", "txt", "pdf", "document"], Dh.SM = Ih, Dh.LG = Bh, Dh.MD = Sh, Dh.XL = yh;
      const Nh = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M6 2a.667.667 0 0 0-.667.667v8a.667.667 0 0 0 .667.666h6a.667.667 0 0 0 .667-.667V5.333h-1.333a2 2 0 0 1-2-2V2zM6 .667a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4a.67.67 0 0 0-.195-.472L11.138.862a.67.67 0 0 0-.471-.195zM12.39 4l-1.723-1.724v1.057a.667.667 0 0 0 .667.667zM2 4.4c.368 0 .667.298.667.666V13.6a.4.4 0 0 0 .4.4H9.6a.667.667 0 0 1 0 1.333H3.067A1.734 1.734 0 0 1 1.333 13.6V5.067c0-.369.299-.667.667-.667",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Gh = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M9 3a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1V8h-2a3 3 0 0 1-3-3V3zm0-2a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h9a3 3 0 0 0 3-3V6a1 1 0 0 0-.293-.707l-4-4A1 1 0 0 0 16 1zm9.586 5L16 3.414V5a1 1 0 0 0 1 1zM3 6.6a1 1 0 0 1 1 1v12.8a.6.6 0 0 0 .6.6h9.8a1 1 0 1 1 0 2H4.6A2.6 2.6 0 0 1 2 20.4V7.6a1 1 0 0 1 1-1",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Xh = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "20",
            height: "20",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 20 20",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M1.334 17V6.334a.834.834 0 1 1 1.666 0V17a.5.5 0 0 0 .5.5h8.166l.085.004a.833.833 0 0 1 0 1.659l-.085.003H3.5A2.17 2.17 0 0 1 1.334 17m3.333-3.666v-10a2.5 2.5 0 0 1 2.5-2.5H13c.22 0 .433.087.59.244l3.332 3.333a.83.83 0 0 1 .244.589v8.334a2.5 2.5 0 0 1-2.5 2.5h-7.5a2.5 2.5 0 0 1-2.5-2.5M13 4.167a.834.834 0 0 0 .834.833h1.32l-2.155-2.156zm-6.666 9.167a.833.833 0 0 0 .833.832h7.5a.834.834 0 0 0 .832-.832V6.667h-1.665a2.5 2.5 0 0 1-2.5-2.5V2.5H7.167a.834.834 0 0 0-.833.833z"
            })
          })
        }))),
        qh = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M12 4a1.333 1.333 0 0 0-1.334 1.334v16A1.333 1.333 0 0 0 12 22.667h12a1.333 1.333 0 0 0 1.333-1.334V10.668h-2.666a4 4 0 0 1-4-4V4zm0-2.666a4 4 0 0 0-4 4v16a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4V8c0-.353-.14-.693-.39-.943l-5.334-5.333c-.25-.25-.59-.39-.943-.39zM24.78 8l-3.447-3.448v2.115A1.333 1.333 0 0 0 22.667 8zM4 8.8c.736 0 1.333.597 1.333 1.333V27.2a.8.8 0 0 0 .8.8H19.2a1.333 1.333 0 1 1 0 2.667H6.133A3.467 3.467 0 0 1 2.667 27.2V10.134C2.667 9.397 3.263 8.8 4 8.8",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        kh = (0, t.forwardRef)((({
          size: e = "SM",
          ...l
        }, a) => {
          const t = (0, o.v6)(l, {
            className: g({
              size: e
            })
          });
          return (0, r.jsxs)(r.Fragment, {
            children: ["SM" === e && (0, r.jsx)(Nh, {
              ...t,
              ref: a
            }), "LG" === e && (0, r.jsx)(Gh, {
              ...t,
              ref: a
            }), "MD" === e && (0, r.jsx)(Xh, {
              ...t,
              ref: a
            }), "XL" === e && (0, r.jsx)(qh, {
              ...t,
              ref: a
            })]
          })
        }));
      kh.displayName = "Files", kh.categories = ["files"], kh.tags = ["multiple", "copy", "documents", "data", "file", "folder", "restore"], kh.SM = Nh, kh.LG = Gh, kh.MD = Xh, kh.XL = qh;
      const Fh = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M8 2a6 6 0 1 0 0 12A6 6 0 0 0 8 2M.667 8a7.333 7.333 0 1 1 14.666 0A7.333 7.333 0 0 1 .667 8M8 3.333c.368 0 .666.299.666.667v.667h2a.667.667 0 1 1 0 1.333h-2v1.333h.667a2 2 0 0 1 0 4h-.667V12a.667.667 0 1 1-1.333 0v-.667h-2a.667.667 0 0 1 0-1.333h2V8.666h-.667a2 2 0 1 1 0-4h.667V4c0-.368.299-.667.667-.667M7.333 6h-.667a.667.667 0 0 0 0 1.333h.667zm1.333 2.666V10h.667a.667.667 0 0 0 0-1.334z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Ph = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12m11-7a1 1 0 0 1 1 1v1h3a1 1 0 1 1 0 2h-3v2h1a3 3 0 0 1 0 6h-1v1a1 1 0 1 1-2 0v-1H8a1 1 0 1 1 0-2h3v-2h-1a3 3 0 0 1 0-6h1V6a1 1 0 0 1 1-1m-1 4h-1a1 1 0 0 0 0 2h1zm2 4v2h1a1 1 0 0 0 0-2z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Oh = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "20",
            height: "20",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 20 20",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M17.5 10a7.5 7.5 0 1 0-15 0 7.5 7.5 0 0 0 15 0m-5 1.666a.833.833 0 0 0-.833-.832h-.833v1.665h.833a.833.833 0 0 0 .833-.833m1.667 0a2.5 2.5 0 0 1-2.5 2.5h-.833V15a.835.835 0 0 1-1.667 0v-.833h-2.5a.833.833 0 0 1 0-1.667h2.5v-1.665h-.833a2.502 2.502 0 0 1-1.769-4.27 2.5 2.5 0 0 1 1.769-.73h.833V5a.833.833 0 0 1 1.667 0v.833h2.5l.085.004a.834.834 0 0 1 0 1.659l-.085.004h-2.5v1.666h.833a2.5 2.5 0 0 1 2.5 2.5m5-1.666A9.167 9.167 0 1 1 .833 9.999a9.167 9.167 0 0 1 18.334 0M7.5 8.334a.834.834 0 0 0 .834.832h.833V7.5h-.833a.835.835 0 0 0-.834.834"
            })
          })
        }))),
        Th = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M16 4C9.373 4 4 9.373 4 16c0 6.628 5.373 12 12 12 6.628 0 12-5.372 12-12 0-6.627-5.372-12-12-12M1.334 16C1.334 7.9 7.9 1.334 16 1.334S30.667 7.9 30.667 16 24.1 30.667 16 30.667 1.334 24.1 1.334 16M16 6.667c.736 0 1.334.597 1.334 1.333v1.334h4a1.333 1.333 0 1 1 0 2.666h-4v2.667h1.333a4 4 0 0 1 0 8h-1.334V24a1.333 1.333 0 0 1-2.666 0v-1.333h-4a1.333 1.333 0 1 1 0-2.667h4v-2.666h-1.333a4 4 0 1 1 0-8h1.333V8c0-.736.597-1.333 1.333-1.333M14.667 12h-1.333a1.333 1.333 0 1 0 0 2.667h1.333zm2.667 5.334V20h1.333a1.333 1.333 0 1 0 0-2.666z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Eh = (0, t.forwardRef)((({
          size: e = "SM",
          ...l
        }, a) => {
          const t = (0, o.v6)(l, {
            className: g({
              size: e
            })
          });
          return (0, r.jsxs)(r.Fragment, {
            children: ["SM" === e && (0, r.jsx)(Fh, {
              ...t,
              ref: a
            }), "LG" === e && (0, r.jsx)(Ph, {
              ...t,
              ref: a
            }), "MD" === e && (0, r.jsx)(Oh, {
              ...t,
              ref: a
            }), "XL" === e && (0, r.jsx)(Th, {
              ...t,
              ref: a
            })]
          })
        }));
      Eh.displayName = "CircleDollarSign", Eh.categories = ["finance"], Eh.tags = ["monetization", "marketing", "currency", "money", "payment"], Eh.SM = Fh, Eh.LG = Ph, Eh.MD = Oh, Eh.XL = Th;
      const Uh = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M8 .667c.368 0 .667.298.667.666v1.334h2.667a.667.667 0 1 1 0 1.333H8.667v3.333h1a3 3 0 0 1 0 6h-1v1.333a.667.667 0 1 1-1.333 0v-1.333H4A.667.667 0 0 1 4 12h3.334V8.666h-1a3 3 0 1 1 0-6h1V1.334c0-.368.298-.666.666-.666M7.333 4h-1a1.667 1.667 0 1 0 0 3.333h1zm1.334 4.666V12h1a1.667 1.667 0 1 0 0-3.334z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        _h = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M12 1a1 1 0 0 1 1 1v2h4a1 1 0 1 1 0 2h-4v5h1.5a4.5 4.5 0 1 1 0 9H13v2a1 1 0 1 1-2 0v-2H6a1 1 0 1 1 0-2h5v-5H9.5a4.5 4.5 0 1 1 0-9H11V2a1 1 0 0 1 1-1m-1 5H9.5a2.5 2.5 0 1 0 0 5H11zm2 7v5h1.5a2.5 2.5 0 0 0 0-5z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Wh = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "20",
            height: "20",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 20 20",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M13.834 12.917a2.084 2.084 0 0 0-2.085-2.083H10.5V15h1.25a2.085 2.085 0 0 0 2.085-2.084m1.665 0a3.75 3.75 0 0 1-3.75 3.75H10.5v1.666a.833.833 0 0 1-1.665 0v-1.666H4.667a.833.833 0 0 1 0-1.668h4.167v-4.165h-1.25A3.752 3.752 0 0 1 4.93 4.43a3.75 3.75 0 0 1 2.653-1.098h1.25V1.668a.833.833 0 1 1 1.665 0v1.666h3.335l.085.004a.834.834 0 0 1 0 1.659L13.833 5h-3.335v4.166h1.25a3.75 3.75 0 0 1 3.75 3.75m-10-5.833a2.084 2.084 0 0 0 2.085 2.082h1.25V5h-1.25A2.085 2.085 0 0 0 5.5 7.084"
            })
          })
        }))),
        Zh = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M16 1.334c.736 0 1.333.596 1.333 1.333v2.667h5.334a1.333 1.333 0 1 1 0 2.666h-5.334v6.667h2a6 6 0 0 1 0 12h-2v2.666a1.333 1.333 0 0 1-2.666 0v-2.666H8A1.333 1.333 0 1 1 8 24h6.666v-6.666h-2a6 6 0 1 1 0-12h2V2.667c0-.737.598-1.333 1.334-1.333M14.666 8h-2a3.333 3.333 0 1 0 0 6.667h2zm2.667 9.334V24h2a3.333 3.333 0 0 0 0-6.666z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Yh = (0, t.forwardRef)((({
          size: e = "SM",
          ...l
        }, a) => {
          const t = (0, o.v6)(l, {
            className: g({
              size: e
            })
          });
          return (0, r.jsxs)(r.Fragment, {
            children: ["SM" === e && (0, r.jsx)(Uh, {
              ...t,
              ref: a
            }), "LG" === e && (0, r.jsx)(_h, {
              ...t,
              ref: a
            }), "MD" === e && (0, r.jsx)(Wh, {
              ...t,
              ref: a
            }), "XL" === e && (0, r.jsx)(Zh, {
              ...t,
              ref: a
            })]
          })
        }));
      Yh.displayName = "DollarSign", Yh.categories = ["finance"], Yh.tags = ["currency", "money", "payment"], Yh.SM = Uh, Yh.LG = _h, Yh.MD = Wh, Yh.XL = Zh;
      const Kh = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: [(0, r.jsx)("path", {
              fill: e,
              d: "M9.02 12.216a.53.53 0 0 1-.305-.48V4.254c0-.204.119-.39.305-.48a.55.55 0 0 1 .573.059l4.897 3.74a.53.53 0 0 1 0 .844l-4.897 3.74a.55.55 0 0 1-.573.059",
              fillRule: "evenodd",
              clipRule: "evenodd"
            }), (0, r.jsx)("path", {
              fill: e,
              d: "M3.035 12.216a.53.53 0 0 1-.305-.48V4.254c0-.204.119-.39.305-.48a.55.55 0 0 1 .573.059l4.897 3.74a.53.53 0 0 1 0 .844l-4.897 3.74a.55.55 0 0 1-.573.059",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })]
          })
        }))),
        Qh = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: [(0, r.jsx)("path", {
              fill: e,
              d: "M13.57 6.076a.75.75 0 0 0-.42.674v10.5a.75.75 0 0 0 1.21.592l6.75-5.25a.75.75 0 0 0 0-1.184l-6.75-5.25a.75.75 0 0 0-.79-.082",
              fillRule: "evenodd",
              clipRule: "evenodd"
            }), (0, r.jsx)("path", {
              fill: e,
              d: "M5.32 6.076a.75.75 0 0 0-.42.674v10.5a.75.75 0 0 0 1.21.592l6.75-5.25a.75.75 0 0 0 0-1.184l-6.75-5.25a.75.75 0 0 0-.79-.082",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })]
          })
        }))),
        Jh = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "20",
            height: "20",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 20 20",
            children: [(0, r.jsx)("path", {
              fill: e,
              d: "M10.792 5.064a.63.63 0 0 0-.35.561v8.75a.625.625 0 0 0 1.008.493l5.625-4.375a.625.625 0 0 0 0-.986L11.45 5.132a.63.63 0 0 0-.658-.068",
              fillRule: "evenodd",
              clipRule: "evenodd"
            }), (0, r.jsx)("path", {
              fill: e,
              d: "M3.917 5.064a.63.63 0 0 0-.35.561v8.75a.625.625 0 0 0 1.008.493l5.625-4.375a.625.625 0 0 0 0-.986L4.575 5.132a.63.63 0 0 0-.658-.068",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })]
          })
        }))),
        $h = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: [(0, r.jsx)("path", {
              fill: e,
              d: "M18.074 8.102A1 1 0 0 0 17.53 9v14.005c0 .382.211.73.544.898a.95.95 0 0 0 1.022-.109l8.73-7.002c.236-.19.374-.48.374-.79 0-.308-.138-.6-.374-.79l-8.73-7.001a.95.95 0 0 0-1.022-.11",
              fillRule: "evenodd",
              clipRule: "evenodd"
            }), (0, r.jsx)("path", {
              fill: e,
              d: "M7.404 8.102A1 1 0 0 0 6.86 9v14.005c0 .382.211.73.544.898a.95.95 0 0 0 1.022-.109l8.73-7.002c.236-.19.374-.48.374-.79 0-.308-.138-.6-.374-.79l-8.73-7.001a.95.95 0 0 0-1.022-.11",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })]
          })
        }))),
        ec = (0, t.forwardRef)((({
          size: e = "SM",
          ...l
        }, a) => {
          const t = (0, o.v6)(l, {
            className: g({
              size: e
            })
          });
          return (0, r.jsxs)(r.Fragment, {
            children: ["SM" === e && (0, r.jsx)(Kh, {
              ...t,
              ref: a
            }), "LG" === e && (0, r.jsx)(Qh, {
              ...t,
              ref: a
            }), "MD" === e && (0, r.jsx)(Jh, {
              ...t,
              ref: a
            }), "XL" === e && (0, r.jsx)($h, {
              ...t,
              ref: a
            })]
          })
        }));
      ec.displayName = "FastForward", ec.categories = ["multimedia", "arrows"], ec.tags = ["music", "audio", "video", "control", "player", "media"], ec.SM = Kh, ec.LG = Qh, ec.MD = Jh, ec.XL = $h;
      const lc = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M7 3.333C7 2.597 6.49 2 5.857 2h-.714C4.512 2 4 2.597 4 3.333v9.334C4 13.403 4.512 14 5.143 14h.714C6.49 14 7 13.403 7 12.667zM12 3.333C12 2.597 11.488 2 10.857 2h-.714C9.512 2 9 2.597 9 3.333v9.334C9 13.403 9.512 14 10.143 14h.714c.631 0 1.143-.597 1.143-1.333z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        ac = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M10.6 5.778C10.6 4.796 9.884 4 9 4H8c-.884 0-1.6.796-1.6 1.778v12.444C6.4 19.204 7.116 20 8 20h1c.884 0 1.6-.796 1.6-1.778zM17.6 5.778C17.6 4.796 16.884 4 16 4h-1c-.883 0-1.6.796-1.6 1.778v12.444c0 .982.717 1.778 1.6 1.778h1c.884 0 1.6-.796 1.6-1.778z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        rc = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "20",
            height: "20",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 20 20",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M8.442 4.556c0-.86-.627-1.556-1.4-1.556h-.875c-.774 0-1.4.696-1.4 1.556v10.888c0 .86.626 1.556 1.4 1.556h.875c.773 0 1.4-.696 1.4-1.556zM14.567 4.556c0-.86-.627-1.556-1.4-1.556h-.875c-.773 0-1.4.696-1.4 1.556v10.888c0 .86.627 1.556 1.4 1.556h.875c.773 0 1.4-.696 1.4-1.556z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        tc = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M14.3 7.717c0-1.307-.938-2.367-2.095-2.367h-1.31C9.738 5.35 8.8 6.41 8.8 7.717v16.566c0 1.307.938 2.367 2.095 2.367h1.31c1.157 0 2.095-1.06 2.095-2.367zM23.176 7.717c0-1.307-.938-2.367-2.095-2.367h-1.309c-1.157 0-2.095 1.06-2.095 2.367v16.566c0 1.307.938 2.367 2.095 2.367h1.309c1.157 0 2.095-1.06 2.095-2.367z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        sc = (0, t.forwardRef)((({
          size: e = "SM",
          ...l
        }, a) => {
          const t = (0, o.v6)(l, {
            className: g({
              size: e
            })
          });
          return (0, r.jsxs)(r.Fragment, {
            children: ["SM" === e && (0, r.jsx)(lc, {
              ...t,
              ref: a
            }), "LG" === e && (0, r.jsx)(ac, {
              ...t,
              ref: a
            }), "MD" === e && (0, r.jsx)(rc, {
              ...t,
              ref: a
            }), "XL" === e && (0, r.jsx)(tc, {
              ...t,
              ref: a
            })]
          })
        }));
      sc.displayName = "Pause", sc.categories = ["multimedia"], sc.tags = ["music", "audio", "video", "stop", "pause", "control", "player", "media"], sc.SM = lc, sc.LG = ac, sc.MD = rc, sc.XL = tc;
      const ic = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M4.426 2.073a.65.65 0 0 1 .637.022l8.75 5.4c.179.11.287.3.287.505a.6.6 0 0 1-.287.505l-8.75 5.4a.65.65 0 0 1-.637.022.6.6 0 0 1-.326-.527V2.6c0-.22.125-.421.326-.527",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        dc = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M7.417 4.098a.8.8 0 0 1 .816.03l11.2 7.2a.8.8 0 0 1 0 1.345l-11.2 7.2A.8.8 0 0 1 7 19.2V4.8a.8.8 0 0 1 .417-.702",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        oc = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "20",
            height: "20",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 20 20",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M5.598 3.086a.7.7 0 0 1 .714.025l9.8 6.3a.7.7 0 0 1 0 1.178l-9.8 6.3a.7.7 0 0 1-1.079-.589V3.7a.7.7 0 0 1 .365-.614",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        nc = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M9.855 5.47c.342-.187.76-.172 1.088.04l14.927 9.595a1.066 1.066 0 0 1 0 1.794l-14.927 9.596A1.066 1.066 0 0 1 9.3 25.6V6.406c0-.39.213-.749.555-.936",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        hc = (0, t.forwardRef)((({
          size: e = "SM",
          ...l
        }, a) => {
          const t = (0, o.v6)(l, {
            className: g({
              size: e
            })
          });
          return (0, r.jsxs)(r.Fragment, {
            children: ["SM" === e && (0, r.jsx)(ic, {
              ...t,
              ref: a
            }), "LG" === e && (0, r.jsx)(dc, {
              ...t,
              ref: a
            }), "MD" === e && (0, r.jsx)(oc, {
              ...t,
              ref: a
            }), "XL" === e && (0, r.jsx)(nc, {
              ...t,
              ref: a
            })]
          })
        }));
      hc.displayName = "Play", hc.categories = ["arrows", "multimedia"], hc.tags = ["music", "audio", "video", "start", "run", "play", "continue", "control", "player", "media"], hc.SM = ic, hc.LG = dc, hc.MD = oc, hc.XL = nc;
      const cc = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: [(0, r.jsx)("path", {
              fill: e,
              d: "M7.08 3.775c.187.09.305.276.305.48v7.48c0 .205-.118.391-.305.48a.55.55 0 0 1-.573-.057L1.61 8.417a.53.53 0 0 1 0-.844l4.897-3.74a.55.55 0 0 1 .573-.058",
              fillRule: "evenodd",
              clipRule: "evenodd"
            }), (0, r.jsx)("path", {
              fill: e,
              d: "M13.065 3.775c.187.09.305.276.305.48v7.48c0 .205-.118.391-.305.48a.55.55 0 0 1-.573-.057L7.595 8.417a.53.53 0 0 1 0-.844l4.897-3.74a.55.55 0 0 1 .573-.058",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })]
          })
        }))),
        fc = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: [(0, r.jsx)("path", {
              fill: e,
              d: "M10.592 6.076c.25.126.408.388.408.674v10.5a.75.75 0 0 1-.408.674.71.71 0 0 1-.766-.082l-6.545-5.25A.76.76 0 0 1 3 12c0-.231.104-.45.28-.592l6.546-5.25a.71.71 0 0 1 .766-.082",
              fillRule: "evenodd",
              clipRule: "evenodd"
            }), (0, r.jsx)("path", {
              fill: e,
              d: "M18.592 6.076c.25.126.408.388.408.674v10.5a.75.75 0 0 1-.408.674.71.71 0 0 1-.766-.082l-6.545-5.25A.76.76 0 0 1 11 12c0-.231.104-.45.28-.592l6.546-5.25a.71.71 0 0 1 .766-.082",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })]
          })
        }))),
        wc = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "20",
            height: "20",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 20 20",
            children: [(0, r.jsx)("path", {
              fill: e,
              d: "M8.541 5.064c.215.104.35.322.35.561v8.75a.625.625 0 0 1-1.008.493l-5.625-4.375a.625.625 0 0 1 0-.986l5.625-4.375a.63.63 0 0 1 .658-.068",
              fillRule: "evenodd",
              clipRule: "evenodd"
            }), (0, r.jsx)("path", {
              fill: e,
              d: "M15.416 5.064c.215.104.35.322.35.561v8.75a.625.625 0 0 1-1.008.493l-5.625-4.375a.625.625 0 0 1 0-.986l5.625-4.375a.63.63 0 0 1 .658-.068",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })]
          })
        }))),
        vc = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: [(0, r.jsx)("path", {
              fill: e,
              d: "M13.926 8.102c.333.168.544.516.544.898v14.005c0 .382-.211.73-.544.898a.95.95 0 0 1-1.022-.109l-8.73-7.002a1.01 1.01 0 0 1-.374-.79c0-.308.138-.6.374-.79l8.73-7.001a.95.95 0 0 1 1.022-.11",
              fillRule: "evenodd",
              clipRule: "evenodd"
            }), (0, r.jsx)("path", {
              fill: e,
              d: "M24.596 8.102c.333.168.544.516.544.898v14.005c0 .382-.211.73-.544.898a.95.95 0 0 1-1.022-.109l-8.73-7.002a1.01 1.01 0 0 1-.374-.79c0-.308.138-.6.374-.79l8.73-7.001a.95.95 0 0 1 1.022-.11",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })]
          })
        }))),
        xc = (0, t.forwardRef)((({
          size: e = "SM",
          ...l
        }, a) => {
          const t = (0, o.v6)(l, {
            className: g({
              size: e
            })
          });
          return (0, r.jsxs)(r.Fragment, {
            children: ["SM" === e && (0, r.jsx)(cc, {
              ...t,
              ref: a
            }), "LG" === e && (0, r.jsx)(fc, {
              ...t,
              ref: a
            }), "MD" === e && (0, r.jsx)(wc, {
              ...t,
              ref: a
            }), "XL" === e && (0, r.jsx)(vc, {
              ...t,
              ref: a
            })]
          })
        }));
      xc.displayName = "Rewind", xc.categories = ["arrows", "multimedia"], xc.tags = ["music", "audio", "video", "control", "player", "previous", "back", "reverse", "media"], xc.SM = cc, xc.LG = fc, xc.MD = wc, xc.XL = vc;
      const gc = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: [(0, r.jsx)("path", {
              fill: e,
              d: "M12.557 2.066a.67.67 0 0 1 .378.6v10.667a.667.667 0 0 1-1.083.52L5.186 8.522a.667.667 0 0 1 0-1.042l6.666-5.333c.2-.16.474-.191.705-.08",
              fillRule: "evenodd",
              clipRule: "evenodd"
            }), (0, r.jsx)("path", {
              fill: e,
              d: "M3.978 2.667c.507 0 .918.298.918.666v9.334c0 .368-.411.666-.918.666s-.917-.298-.917-.666V3.333c0-.368.41-.666.917-.666",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })]
          })
        }))),
        jc = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: [(0, r.jsx)("path", {
              fill: e,
              d: "M18.095 4.088c.308.148.505.46.505.803V19.15a.891.891 0 0 1-1.448.696l-8.911-7.13a.89.89 0 0 1 0-1.391l8.91-7.13a.89.89 0 0 1 .944-.107",
              fillRule: "evenodd",
              clipRule: "evenodd"
            }), (0, r.jsx)("path", {
              fill: e,
              d: "M6.626 4.891c.677 0 1.226.4 1.226.892v12.476c0 .492-.549.89-1.226.89-.678 0-1.227-.398-1.227-.89V5.783c0-.493.55-.892 1.227-.892",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })]
          })
        }))),
        mc = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "20",
            height: "20",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 20 20",
            children: [(0, r.jsx)("path", {
              fill: e,
              d: "M15.38 3.077c.269.13.44.402.44.7v12.445a.778.778 0 0 1-1.263.608l-7.778-6.223a.778.778 0 0 1 0-1.214l7.778-6.223a.78.78 0 0 1 .822-.093",
              fillRule: "evenodd",
              clipRule: "evenodd"
            }), (0, r.jsx)("path", {
              fill: e,
              d: "M5.37 3.778c.591 0 1.07.348 1.07.778v10.889c0 .43-.479.777-1.07.777s-1.07-.348-1.07-.777V4.555c0-.429.479-.777 1.07-.777",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })]
          })
        }))),
        pc = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: [(0, r.jsx)("path", {
              fill: e,
              d: "M24.078 5.447c.41.197.672.612.672 1.068v18.958a1.185 1.185 0 0 1-1.925.925l-11.849-9.48a1.185 1.185 0 0 1 0-1.85L22.825 5.59c.356-.285.843-.34 1.253-.143",
              fillRule: "evenodd",
              clipRule: "evenodd"
            }), (0, r.jsx)("path", {
              fill: e,
              d: "M8.83 6.515c.902 0 1.632.53 1.632 1.185v16.588c0 .654-.73 1.185-1.631 1.185-.9 0-1.63-.53-1.63-1.185V7.7c0-.655.73-1.185 1.63-1.185",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })]
          })
        }))),
        uc = (0, t.forwardRef)((({
          size: e = "SM",
          ...l
        }, a) => {
          const t = (0, o.v6)(l, {
            className: g({
              size: e
            })
          });
          return (0, r.jsxs)(r.Fragment, {
            children: ["SM" === e && (0, r.jsx)(gc, {
              ...t,
              ref: a
            }), "LG" === e && (0, r.jsx)(jc, {
              ...t,
              ref: a
            }), "MD" === e && (0, r.jsx)(mc, {
              ...t,
              ref: a
            }), "XL" === e && (0, r.jsx)(pc, {
              ...t,
              ref: a
            })]
          })
        }));
      uc.displayName = "SkipBack", uc.categories = ["multimedia", "arrows"], uc.tags = ["music", "audio", "video", "arrow", "previous", "back", "rewind", "reverse", "control", "player", "media"], uc.SM = gc, uc.LG = jc, uc.MD = mc, uc.XL = pc;
      const Mc = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: [(0, r.jsx)("path", {
              fill: e,
              d: "M3.438 13.934a.67.67 0 0 1-.377-.6V2.666a.667.667 0 0 1 1.083-.52l6.666 5.332a.667.667 0 0 1 0 1.042l-6.666 5.333a.67.67 0 0 1-.706.08",
              fillRule: "evenodd",
              clipRule: "evenodd"
            }), (0, r.jsx)("path", {
              fill: e,
              d: "M12.018 13.333c-.507 0-.918-.298-.918-.666V3.333c0-.368.41-.666.918-.666.506 0 .917.298.917.666v9.334c0 .368-.41.666-.917.666",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })]
          })
        }))),
        Rc = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: [(0, r.jsx)("path", {
              fill: e,
              d: "M5.917 19.912a.89.89 0 0 1-.503-.8V4.888a.889.889 0 0 1 1.444-.694l8.888 7.11a.89.89 0 0 1 0 1.39l-8.888 7.11a.89.89 0 0 1-.94.107",
              fillRule: "evenodd",
              clipRule: "evenodd"
            }), (0, r.jsx)("path", {
              fill: e,
              d: "M17.357 19.11c-.676 0-1.223-.397-1.223-.888V5.778c0-.491.547-.89 1.223-.89.675 0 1.223.399 1.223.89v12.444c0 .49-.547.889-1.223.889",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })]
          })
        }))),
        bc = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "20",
            height: "20",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 20 20",
            children: [(0, r.jsx)("path", {
              fill: e,
              d: "M4.74 16.923a.78.78 0 0 1-.44-.7V3.777a.778.778 0 0 1 1.263-.608l7.777 6.223a.778.778 0 0 1 0 1.214L5.563 16.83a.78.78 0 0 1-.822.093",
              fillRule: "evenodd",
              clipRule: "evenodd"
            }), (0, r.jsx)("path", {
              fill: e,
              d: "M14.75 16.222c-.591 0-1.07-.348-1.07-.778V4.555c0-.43.479-.777 1.07-.777s1.07.348 1.07.777v10.89c0 .429-.479.777-1.07.777",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })]
          })
        }))),
        Lc = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: [(0, r.jsx)("path", {
              fill: e,
              d: "M7.893 26.543a1.19 1.19 0 0 1-.673-1.07V6.483a1.187 1.187 0 0 1 1.928-.927l11.87 9.495a1.187 1.187 0 0 1 0 1.854L9.147 26.4c-.356.285-.844.34-1.255.143",
              fillRule: "evenodd",
              clipRule: "evenodd"
            }), (0, r.jsx)("path", {
              fill: e,
              d: "M23.166 25.473c-.902 0-1.633-.531-1.633-1.187V7.67c0-.656.731-1.187 1.633-1.187S24.8 7.014 24.8 7.67v16.616c0 .656-.732 1.187-1.634 1.187",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })]
          })
        }))),
        zc = (0, t.forwardRef)((({
          size: e = "SM",
          ...l
        }, a) => {
          const t = (0, o.v6)(l, {
            className: g({
              size: e
            })
          });
          return (0, r.jsxs)(r.Fragment, {
            children: ["SM" === e && (0, r.jsx)(Mc, {
              ...t,
              ref: a
            }), "LG" === e && (0, r.jsx)(Rc, {
              ...t,
              ref: a
            }), "MD" === e && (0, r.jsx)(bc, {
              ...t,
              ref: a
            }), "XL" === e && (0, r.jsx)(Lc, {
              ...t,
              ref: a
            })]
          })
        }));
      zc.displayName = "SkipForward", zc.categories = ["multimedia", "arrows"], zc.tags = ["music", "audio", "video", "arrow", "skip", "next", "forward", "control", "player", "media"], zc.SM = Mc, zc.LG = Rc, zc.MD = bc, zc.XL = Lc;
      const Cc = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M.862.862c.26-.26.682-.26.943 0l4.221 4.222.01.01 6.076 6.075a.7.7 0 0 1 .159.16l2.867 2.866a.667.667 0 1 1-.943.943l-1.453-1.453.035.202a.667.667 0 0 1-.966.704L8 12.599 4.189 14.59a.667.667 0 0 1-.966-.704l.727-4.228L.868 6.657a.667.667 0 0 1 .368-1.137l2.914-.427L.862 1.805a.667.667 0 0 1 0-.943m4.463 5.406-2.56.376 2.367 2.305c.157.153.229.374.192.59l-.559 3.246 2.926-1.53a.67.67 0 0 1 .618 0l2.925 1.53-.126-.734zM8 .667c.254 0 .486.144.598.371l1.905 3.866 4.259.616a.667.667 0 0 1 .37 1.137l-2.387 2.327a.667.667 0 1 1-.93-.955l1.418-1.383-3.269-.473a.67.67 0 0 1-.502-.365l-1.463-2.97-.362.73a.667.667 0 0 1-1.195-.59l.96-1.94A.67.67 0 0 1 8 .666",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Ac = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M1.293 1.293a1 1 0 0 1 1.414 0L9.04 7.626l.016.015 9.113 9.113q.138.099.238.238l4.3 4.3a1 1 0 1 1-1.414 1.415l-2.18-2.18.053.303a1 1 0 0 1-1.45 1.056L12 18.898l-5.717 2.988a1 1 0 0 1-1.449-1.055l1.091-6.342-4.623-4.503a1 1 0 0 1 .553-1.705l4.37-.642-4.932-4.932a1 1 0 0 1 0-1.414m6.695 8.11-3.84.563 3.55 3.458a1 1 0 0 1 .288.886l-.838 4.867 4.389-2.293a1 1 0 0 1 .926 0l4.389 2.293-.19-1.1zM12.001 1a1 1 0 0 1 .896.558l2.857 5.798 6.39.924a1 1 0 0 1 .554 1.706l-3.58 3.49a1 1 0 0 1-1.396-1.432l2.128-2.075-4.903-.71a1 1 0 0 1-.754-.547l-2.195-4.454-.542 1.096a1 1 0 0 1-1.792-.888l1.44-2.91A1 1 0 0 1 12 1",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Hc = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "20",
            height: "20",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 20 20",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M1.078 1.078a.83.83 0 0 1 1.178 0l12.883 12.881q.113.081.196.197l3.588 3.588a.833.833 0 1 1-1.179 1.178l-1.816-1.816.044.253a.834.834 0 0 1-1.207.88L10 15.748l-4.764 2.49a.834.834 0 0 1-1.207-.88l.908-5.283-3.851-3.753a.834.834 0 0 1 .46-1.422l3.642-.534-4.11-4.11a.83.83 0 0 1 0-1.178m2.378 7.226 2.959 2.882a.83.83 0 0 1 .24.738l-.698 4.056 3.657-1.91.093-.042a.84.84 0 0 1 .68.042l3.656 1.91-.158-.917-7.229-7.229zm12.476 2.926a.833.833 0 0 1-1.164-1.193zM10 .833c.317 0 .607.18.747.465l2.38 4.831 5.325.77a.834.834 0 0 1 .462 1.423l-2.983 2.908-1.164-1.193 1.774-1.73-4.086-.59a.83.83 0 0 1-.628-.457l-1.83-3.713-.451.914-.746-.37-.747-.369 1.2-2.425.058-.101a.83.83 0 0 1 .689-.363m-.454 3.628a.833.833 0 0 1-1.493-.739z"
            })
          })
        }))),
        Vc = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M1.724 1.724c.52-.52 1.365-.52 1.886 0l8.443 8.444.021.02L24.225 22.34q.185.131.317.318l5.734 5.734a1.333 1.333 0 1 1-1.885 1.885l-2.906-2.906.07.404a1.333 1.333 0 0 1-1.932 1.408L16 25.198l-7.622 3.984a1.333 1.333 0 0 1-1.932-1.408l1.455-8.455-6.164-6.004a1.333 1.333 0 0 1 .736-2.274l5.828-.855L1.724 3.61a1.333 1.333 0 0 1 0-1.886m8.927 10.813-5.12.75 4.733 4.611c.315.307.458.749.384 1.181L9.53 25.57l5.852-3.058a1.33 1.33 0 0 1 1.235 0l5.851 3.058-.252-1.468zm5.35-11.203c.508 0 .97.288 1.195.743l3.81 7.73 8.519 1.234a1.333 1.333 0 0 1 .74 2.274l-4.774 4.653a1.333 1.333 0 1 1-1.861-1.91l2.837-2.765-6.538-.947a1.33 1.33 0 0 1-1.005-.73l-2.926-5.938-.723 1.46a1.333 1.333 0 1 1-2.39-1.183l1.92-3.88a1.33 1.33 0 0 1 1.196-.742",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Ic = (0, t.forwardRef)((({
          size: e = "SM",
          ...l
        }, a) => {
          const t = (0, o.v6)(l, {
            className: g({
              size: e
            })
          });
          return (0, r.jsxs)(r.Fragment, {
            children: ["SM" === e && (0, r.jsx)(Cc, {
              ...t,
              ref: a
            }), "LG" === e && (0, r.jsx)(Ac, {
              ...t,
              ref: a
            }), "MD" === e && (0, r.jsx)(Hc, {
              ...t,
              ref: a
            }), "XL" === e && (0, r.jsx)(Vc, {
              ...t,
              ref: a
            })]
          })
        }));
      Ic.displayName = "StarOff", Ic.categories = ["multimedia", "social"], Ic.tags = ["dislike", "unlike", "remove", "unrate"], Ic.SM = Cc, Ic.LG = Ac, Ic.MD = Hc, Ic.XL = Vc;
      const Bc = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M3 4.5A1.5 1.5 0 0 1 4.5 3h7A1.5 1.5 0 0 1 13 4.5v7a1.5 1.5 0 0 1-1.5 1.5h-7A1.5 1.5 0 0 1 3 11.5z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Sc = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M4 6.4A2.4 2.4 0 0 1 6.4 4h11.2A2.4 2.4 0 0 1 20 6.4v11.2a2.4 2.4 0 0 1-2.4 2.4H6.4A2.4 2.4 0 0 1 4 17.6z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        yc = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "20",
            height: "20",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 20 20",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M4 5.8A1.8 1.8 0 0 1 5.8 4h8.4A1.8 1.8 0 0 1 16 5.8v8.4a1.8 1.8 0 0 1-1.8 1.8H5.8A1.8 1.8 0 0 1 4 14.2z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Dc = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M5.33 8.528a3.203 3.203 0 0 1 3.203-3.203h14.949a3.203 3.203 0 0 1 3.203 3.203v14.949a3.203 3.203 0 0 1-3.203 3.203H8.533a3.203 3.203 0 0 1-3.203-3.203z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Nc = (0, t.forwardRef)((({
          size: e = "SM",
          ...l
        }, a) => {
          const t = (0, o.v6)(l, {
            className: g({
              size: e
            })
          });
          return (0, r.jsxs)(r.Fragment, {
            children: ["SM" === e && (0, r.jsx)(Bc, {
              ...t,
              ref: a
            }), "LG" === e && (0, r.jsx)(Sc, {
              ...t,
              ref: a
            }), "MD" === e && (0, r.jsx)(yc, {
              ...t,
              ref: a
            }), "XL" === e && (0, r.jsx)(Dc, {
              ...t,
              ref: a
            })]
          })
        }));
      Nc.displayName = "Stop", Nc.categories = ["multimedia"], Nc.tags = ["music", "audio", "video", "control", "player", "stop", "media"], Nc.SM = Bc, Nc.LG = Sc, Nc.MD = yc, Nc.XL = Dc;
      const Gc = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M4.333 2a1 1 0 0 0-1 1v7.892c.31-.147.651-.226 1-.226h8.334V2zM14 2A1.334 1.334 0 0 0 12.667.667H4.333A2.333 2.333 0 0 0 2 3v10a2.333 2.333 0 0 0 2.333 2.333h8.334A1.333 1.333 0 0 0 14 14zm-1.333 10H4.333a1 1 0 0 0 0 2h8.334z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Xc = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M6.5 3A1.5 1.5 0 0 0 5 4.5v11.838A3.5 3.5 0 0 1 6.5 16H19V3zM21 3a2 2 0 0 0-2-2H6.5A3.5 3.5 0 0 0 3 4.5v15A3.5 3.5 0 0 0 6.5 23H19a2 2 0 0 0 2-2zm-2 15H6.5a1.5 1.5 0 1 0 0 3H19z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        qc = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "20",
            height: "20",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 20 20",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M5.416 2.5a1.25 1.25 0 0 0-1.25 1.25v9.869a2.9 2.9 0 0 1 1.25-.285h10.417V2.5zm-1.25 13.75a1.25 1.25 0 0 0 1.25 1.25h10.417V15H5.416a1.25 1.25 0 0 0-1.25 1.25M17.5 17.5a1.67 1.67 0 0 1-1.667 1.666H5.416A2.92 2.92 0 0 1 2.5 16.25V3.75A2.917 2.917 0 0 1 5.416.833h10.417A1.667 1.667 0 0 1 17.5 2.5z"
            })
          })
        }))),
        kc = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M8.667 4a2 2 0 0 0-2 2v15.784a4.7 4.7 0 0 1 2-.45h16.666V4zM28 4a2.667 2.667 0 0 0-2.667-2.666H8.667A4.667 4.667 0 0 0 4 6v20a4.667 4.667 0 0 0 4.667 4.667h16.666A2.667 2.667 0 0 0 28 28zm-2.667 20H8.667a2 2 0 0 0 0 4h16.666z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Fc = (0, t.forwardRef)((({
          size: e = "SM",
          ...l
        }, a) => {
          const t = (0, o.v6)(l, {
            className: g({
              size: e
            })
          });
          return (0, r.jsxs)(r.Fragment, {
            children: ["SM" === e && (0, r.jsx)(Gc, {
              ...t,
              ref: a
            }), "LG" === e && (0, r.jsx)(Xc, {
              ...t,
              ref: a
            }), "MD" === e && (0, r.jsx)(qc, {
              ...t,
              ref: a
            }), "XL" === e && (0, r.jsx)(kc, {
              ...t,
              ref: a
            })]
          })
        }));
      Fc.displayName = "Book", Fc.categories = ["text", "gaming"], Fc.tags = ["code", "coding", "version control", "git", "repository", "remove", "delete", "reading", "misinformation", "disinformation", "misinformed", "charlatan", "sophistry", "false", "lies", "untruth", "propaganda", "censored", "cancelled", "forbidden", "prohibited", "banned", "uneducated", "re-education", "unlearn"], Fc.SM = Gc, Fc.LG = Xc, Fc.MD = qc, Fc.XL = kc;
      const Pc = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M4.585 2.191a5.333 5.333 0 0 1 6.36 3.142h.722a3.666 3.666 0 1 1 0 7.333h-.334a.667.667 0 1 1 0-1.333h.334a2.333 2.333 0 1 0 0-4.667h-1.194a.67.67 0 0 1-.639-.476 4 4 0 1 0-4.977 4.976.667.667 0 1 1-.381 1.278 5.333 5.333 0 0 1 .11-10.253M8 7.333c.368 0 .667.299.667.667v2.666a.667.667 0 1 1-1.334 0V8c0-.368.299-.667.667-.667m-.667 6c0-.368.299-.667.667-.667h.007a.667.667 0 0 1 0 1.334H8a.667.667 0 0 1-.667-.667",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Oc = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M6.878 3.288A8 8 0 0 1 16.418 8H17.5a5.5 5.5 0 1 1 0 11H17a1 1 0 0 1 0-2h.5a3.5 3.5 0 1 0 0-7h-1.79a1 1 0 0 1-.958-.714 6 6 0 1 0-7.466 7.464 1 1 0 1 1-.572 1.916 8 8 0 0 1 .164-15.378M12 11a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0v-4a1 1 0 0 1 1-1m-1 9a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2H12a1 1 0 0 1-1-1",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Tc = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "20",
            height: "20",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 20 20",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "m9.675 15.834.085.004a.834.834 0 0 1-.085 1.662h-.008a.834.834 0 1 1 0-1.666zm7.492-4.584a2.92 2.92 0 0 0-2.917-2.916H12.76a.83.83 0 0 1-.799-.596 5 5 0 1 0-6.222 6.22.834.834 0 0 1-.393 1.618l-.083-.02-.41-.137A6.668 6.668 0 0 1 8.804 2.704a6.67 6.67 0 0 1 2.978 1.651 6.7 6.7 0 0 1 1.563 2.312h.905a4.585 4.585 0 0 1 0 9.167h-.417a.834.834 0 0 1 0-1.667h.417a2.917 2.917 0 0 0 2.917-2.917m-8.334 2.084V10a.834.834 0 0 1 1.667 0v3.334a.833.833 0 0 1-1.667 0"
            })
          })
        }))),
        Ec = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M9.17 4.383a10.667 10.667 0 0 1 12.72 6.284h1.443a7.333 7.333 0 1 1 0 14.666h-.666a1.333 1.333 0 0 1 0-2.666h.666a4.666 4.666 0 1 0 0-9.334h-2.386c-.59 0-1.11-.387-1.278-.952a8.001 8.001 0 1 0-9.954 9.952 1.333 1.333 0 0 1-.763 2.555 10.667 10.667 0 0 1 .219-20.505M16 14.667c.736 0 1.333.597 1.333 1.333v5.333a1.333 1.333 0 1 1-2.666 0V16c0-.736.597-1.333 1.333-1.333m-1.333 12c0-.737.597-1.334 1.333-1.334h.013a1.333 1.333 0 0 1 0 2.667H16a1.333 1.333 0 0 1-1.333-1.333",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Uc = (0, t.forwardRef)((({
          size: e = "SM",
          ...l
        }, a) => {
          const t = (0, o.v6)(l, {
            className: g({
              size: e
            })
          });
          return (0, r.jsxs)(r.Fragment, {
            children: ["SM" === e && (0, r.jsx)(Pc, {
              ...t,
              ref: a
            }), "LG" === e && (0, r.jsx)(Oc, {
              ...t,
              ref: a
            }), "MD" === e && (0, r.jsx)(Tc, {
              ...t,
              ref: a
            }), "XL" === e && (0, r.jsx)(Ec, {
              ...t,
              ref: a
            })]
          })
        }));
      Uc.displayName = "CloudAlert", Uc.categories = ["development"], Uc.tags = ["weather", "danger", "warning", "alert", "error", "sync", "network", "exclamation"], Uc.SM = Pc, Uc.LG = Oc, Uc.MD = Tc, Uc.XL = Ec;
      const _c = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M9.866 2.03c.351.11.547.484.437.836L6.97 13.532a.667.667 0 0 1-1.273-.397L9.03 2.468a.667.667 0 0 1 .836-.437M4.47 4.863c.26.26.26.683 0 .943L2.276 8l2.195 2.195a.667.667 0 1 1-.942.943L.862 8.472a.667.667 0 0 1 0-.943l2.667-2.667c.26-.26.682-.26.942 0m7.058 0c.26-.26.682-.26.943 0l2.666 2.667a.667.667 0 0 1 0 .943l-2.666 2.666a.667.667 0 1 1-.943-.943L13.724 8l-2.195-2.195a.667.667 0 0 1 0-.943",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Wc = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M14.798 3.045a1 1 0 0 1 .656 1.253l-5 16a1 1 0 0 1-1.908-.596l5-16a1 1 0 0 1 1.252-.657m-8.09 4.248a1 1 0 0 1 0 1.414L3.413 12l3.293 3.293a1 1 0 1 1-1.414 1.414l-4-4a1 1 0 0 1 0-1.414l4-4a1 1 0 0 1 1.414 0m10.585 0a1 1 0 0 1 1.414 0l4 4a1 1 0 0 1 0 1.414l-4 4a1 1 0 0 1-1.414-1.414L20.586 12l-3.293-3.293a1 1 0 0 1 0-1.414",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Zc = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "20",
            height: "20",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 20 20",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M9.045 16.915a.834.834 0 0 1-1.59-.497zm2.606-13.91a.833.833 0 0 1 1.561.577L9.045 16.915l-.795-.249-.795-.248 4.166-13.334zM4.744 6.077a.834.834 0 0 1 1.18 1.179L3.177 9.999l2.745 2.745a.833.833 0 0 1-1.179 1.178l-3.333-3.333a.833.833 0 0 1 0-1.179zm10 0a.834.834 0 0 1 1.116-.057l.063.057 3.333 3.333a.834.834 0 0 1 0 1.179l-3.333 3.333-.063.058a.833.833 0 0 1-1.116-1.236L17.488 10l-2.744-2.743-.057-.064a.834.834 0 0 1 .057-1.115"
            })
          })
        }))),
        Yc = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M19.731 4.06c.703.22 1.095.968.875 1.67l-6.667 21.334a1.333 1.333 0 1 1-2.545-.795L18.06 4.936a1.333 1.333 0 0 1 1.67-.875M8.943 9.725c.52.52.52 1.365 0 1.885L4.553 16l4.39 4.391a1.333 1.333 0 1 1-1.886 1.886l-5.333-5.333a1.333 1.333 0 0 1 0-1.886l5.333-5.333c.52-.521 1.365-.521 1.886 0m14.114 0c.52-.521 1.365-.521 1.886 0l5.333 5.333a1.333 1.333 0 0 1 0 1.886l-5.333 5.333a1.333 1.333 0 1 1-1.886-1.886l4.39-4.39-4.39-4.39a1.333 1.333 0 0 1 0-1.886",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Kc = (0, t.forwardRef)((({
          size: e = "SM",
          ...l
        }, a) => {
          const t = (0, o.v6)(l, {
            className: g({
              size: e
            })
          });
          return (0, r.jsxs)(r.Fragment, {
            children: ["SM" === e && (0, r.jsx)(_c, {
              ...t,
              ref: a
            }), "LG" === e && (0, r.jsx)(Wc, {
              ...t,
              ref: a
            }), "MD" === e && (0, r.jsx)(Zc, {
              ...t,
              ref: a
            }), "XL" === e && (0, r.jsx)(Yc, {
              ...t,
              ref: a
            })]
          })
        }));
      Kc.displayName = "CodeXml", Kc.categories = ["text", "development"], Kc.tags = ["source", "programming", "html", "xml", "code", "computer", "dev", "engineering", "web", "tag"], Kc.SM = _c, Kc.LG = Wc, Kc.MD = Zc, Kc.XL = Yc;
      const Qc = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "m2.667 3.333.002.01a.2.2 0 0 0 .021.044.8.8 0 0 0 .194.201c.22.174.58.359 1.084.527 1.001.334 2.427.551 4.032.551s3.03-.217 4.032-.551c.504-.168.864-.353 1.084-.527a.8.8 0 0 0 .194-.2.2.2 0 0 0 .021-.045l.002-.01-.002-.01a.2.2 0 0 0-.021-.044.8.8 0 0 0-.194-.2c-.22-.174-.58-.36-1.084-.528C11.03 2.218 9.605 2 8 2s-3.03.218-4.032.551c-.504.168-.864.354-1.084.527a.8.8 0 0 0-.194.2.2.2 0 0 0-.021.045zm10.666 1.685a6.4 6.4 0 0 1-.88.362C11.283 5.77 9.708 6 8 6s-3.283-.23-4.454-.62a6.4 6.4 0 0 1-.88-.362V8l.002.007a.2.2 0 0 0 .02.042.8.8 0 0 0 .187.197c.214.172.572.362 1.093.536 1.039.346 2.49.551 4.032.551s2.993-.205 4.032-.551c.521-.174.88-.364 1.093-.536a.8.8 0 0 0 .187-.197.2.2 0 0 0 .021-.048V5.018m1.334-1.685c0-.568-.346-1.003-.726-1.302-.387-.305-.906-.55-1.488-.745C11.283.897 9.708.667 8 .667s-3.283.23-4.454.62c-.581.194-1.1.44-1.487.745-.38.3-.726.734-.726 1.302v9.334c0 .55.329.98.706 1.284.383.309.904.56 1.507.762 1.212.404 2.814.62 4.454.62s3.241-.216 4.453-.62c.604-.201 1.125-.453 1.508-.762.377-.303.706-.734.706-1.285zm-1.334 6.35c-.264.136-.56.257-.88.364-1.212.403-2.813.62-4.453.62s-3.242-.216-4.454-.62a6 6 0 0 1-.88-.363v2.983l.002.007q.002.01.02.042a.8.8 0 0 0 .187.197c.214.172.572.361 1.093.535C5.007 13.794 6.458 14 8 14s2.993-.206 4.032-.552c.521-.174.88-.363 1.093-.536a.8.8 0 0 0 .187-.196.2.2 0 0 0 .021-.048V9.684",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Jc = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M4 5q0 .002.003.015a.3.3 0 0 0 .032.066c.043.07.13.174.291.301.33.26.87.539 1.626.79C7.454 6.674 9.592 7 12 7s4.546-.327 6.048-.827c.756-.252 1.296-.53 1.626-.79.162-.128.248-.232.29-.302a.3.3 0 0 0 .033-.066L20 5l-.003-.015a.3.3 0 0 0-.032-.066 1.2 1.2 0 0 0-.291-.301c-.33-.26-.87-.539-1.626-.79C16.546 3.326 14.408 3 12 3s-4.546.327-6.048.827c-.756.252-1.296.53-1.626.79a1.2 1.2 0 0 0-.29.302.3.3 0 0 0-.033.066zm16 2.527a9.5 9.5 0 0 1-1.32.543C16.925 8.655 14.563 9 12 9s-4.925-.345-6.68-.93A9.5 9.5 0 0 1 4 7.527v4.475l.002.009q.003.015.03.063a1.2 1.2 0 0 0 .28.295c.321.258.858.543 1.64.804C7.51 13.692 9.686 14 12 14s4.49-.308 6.048-.827c.782-.261 1.319-.546 1.64-.804.158-.127.24-.229.28-.295a.3.3 0 0 0 .031-.07v-.002L20 12zM22 5c0-.852-.519-1.504-1.088-1.953-.581-.458-1.36-.826-2.232-1.117C16.925 1.345 14.563 1 12 1s-4.925.345-6.68.93c-.873.29-1.651.66-2.232 1.117C2.518 3.496 2 4.148 2 5v14c0 .825.492 1.472 1.058 1.927.575.463 1.356.841 2.262 1.143 1.818.606 4.22.93 6.68.93s4.862-.324 6.68-.93c.906-.302 1.687-.68 2.262-1.143C21.508 20.472 22 19.825 22 19zm-2 9.526a9.5 9.5 0 0 1-1.32.544c-1.818.606-4.22.93-6.68.93s-4.862-.324-6.68-.93A9.5 9.5 0 0 1 4 14.526v4.476l.002.009q.003.015.03.063a1.2 1.2 0 0 0 .28.295c.321.258.858.543 1.64.804C7.51 20.692 9.686 21 12 21s4.49-.308 6.048-.827c.782-.261 1.319-.546 1.64-.804.158-.127.24-.229.28-.295a.3.3 0 0 0 .032-.072v-4.476",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        $c = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "20",
            height: "20",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 20 20",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M16.667 12.103c-.33.17-.701.322-1.1.455-1.515.505-3.517.776-5.567.776s-4.051-.271-5.566-.776c-.4-.133-.77-.285-1.1-.455v3.732l.001.007q.003.014.026.053c.033.055.102.14.233.246.268.215.715.452 1.366.67 1.298.432 3.112.689 5.04.689s3.742-.257 5.04-.69c.652-.217 1.099-.454 1.367-.669.13-.105.2-.19.233-.246a.3.3 0 0 0 .027-.06zm0-5.833a8 8 0 0 1-1.1.455c-1.463.488-3.431.775-5.567.775-2.135 0-4.103-.287-5.566-.775a8 8 0 0 1-1.1-.455v3.732l.001.007q.003.013.026.052a1 1 0 0 0 .233.246c.268.215.715.453 1.366.67 1.298.433 3.112.69 5.04.69s3.742-.257 5.04-.69c.652-.217 1.099-.455 1.367-.67.13-.106.2-.19.233-.246a.3.3 0 0 0 .027-.06zm-.003-2.116a.2.2 0 0 0-.026-.055 1 1 0 0 0-.243-.25c-.275-.218-.725-.45-1.355-.66-1.251-.417-3.033-.69-5.04-.69-2.006 0-3.788.273-5.04.69-.63.21-1.08.442-1.354.66a1 1 0 0 0-.243.25.2.2 0 0 0-.03.067q0 .001.003.013.003.015.027.055c.035.058.108.144.243.25.275.218.724.45 1.354.66 1.252.417 3.034.69 5.04.69s3.789-.273 5.04-.69c.63-.21 1.08-.442 1.355-.66.135-.106.208-.192.243-.25a.2.2 0 0 0 .03-.067zm1.67 11.68c0 .687-.411 1.226-.883 1.605-.479.386-1.13.7-1.884.952-1.515.505-3.517.776-5.567.776s-4.051-.271-5.566-.776c-.755-.251-1.406-.566-1.885-.952-.471-.38-.882-.918-.882-1.605V4.167c0-.71.432-1.254.906-1.628.484-.382 1.134-.689 1.86-.931C5.898 1.12 7.866.833 10 .833s4.104.287 5.567.775c.727.242 1.376.55 1.86.93.474.375.906.919.906 1.629z"
            })
          })
        }))),
        ef = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M5.333 6.667q-.001.002.004.02a.4.4 0 0 0 .043.088c.057.093.172.231.388.402.44.347 1.16.717 2.168 1.053C9.94 8.898 12.79 9.334 16 9.334s6.061-.436 8.064-1.104c1.008-.336 1.727-.706 2.168-1.053.216-.17.331-.31.388-.402a.4.4 0 0 0 .043-.088l.004-.02q.001-.001-.004-.02a.4.4 0 0 0-.043-.089 1.7 1.7 0 0 0-.388-.4c-.44-.348-1.16-.719-2.168-1.055C22.06 4.436 19.21 4 16 4s-6.061.436-8.064 1.103c-1.008.336-1.727.707-2.168 1.054-.216.17-.331.31-.388.401a.4.4 0 0 0-.043.088q-.005.02-.004.02m21.334 3.369c-.535.273-1.13.514-1.76.724-2.34.78-5.49 1.24-8.907 1.24s-6.566-.46-8.907-1.24c-.63-.21-1.225-.45-1.76-.724v5.966l.004.013a.4.4 0 0 0 .04.083c.052.089.162.225.372.394.429.345 1.145.724 2.187 1.072 2.077.692 4.98 1.103 8.064 1.103 3.085 0 5.987-.411 8.064-1.103 1.043-.348 1.759-.727 2.187-1.072.21-.169.32-.305.373-.394a.4.4 0 0 0 .043-.096v-5.966m2.666-3.37c0-1.135-.691-2.005-1.45-2.603-.775-.61-1.813-1.102-2.976-1.49-2.34-.78-5.49-1.24-8.907-1.24s-6.566.46-8.907 1.24c-1.163.388-2.201.88-2.975 1.49-.76.598-1.451 1.468-1.451 2.604v18.667c0 1.1.656 1.962 1.41 2.569.767.617 1.809 1.121 3.016 1.524 2.424.808 5.627 1.24 8.907 1.24s6.483-.432 8.907-1.24c1.207-.403 2.249-.907 3.016-1.524.754-.607 1.41-1.47 1.41-2.57zm-2.666 12.702c-.53.272-1.122.513-1.76.726-2.424.807-5.627 1.24-8.907 1.24s-6.483-.433-8.907-1.24a12.6 12.6 0 0 1-1.76-.726v5.968l.004.012a.4.4 0 0 0 .04.084 1.6 1.6 0 0 0 .372.394c.429.344 1.145.723 2.187 1.071C10.013 27.589 12.916 28 16 28c3.085 0 5.987-.41 8.064-1.103 1.043-.348 1.759-.727 2.187-1.071a1.6 1.6 0 0 0 .373-.394.4.4 0 0 0 .043-.096v-5.968",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        lf = (0, t.forwardRef)((({
          size: e = "SM",
          ...l
        }, a) => {
          const t = (0, o.v6)(l, {
            className: g({
              size: e
            })
          });
          return (0, r.jsxs)(r.Fragment, {
            children: ["SM" === e && (0, r.jsx)(Qc, {
              ...t,
              ref: a
            }), "LG" === e && (0, r.jsx)(Jc, {
              ...t,
              ref: a
            }), "MD" === e && (0, r.jsx)($c, {
              ...t,
              ref: a
            }), "XL" === e && (0, r.jsx)(ef, {
              ...t,
              ref: a
            })]
          })
        }));
      lf.displayName = "Database", lf.categories = ["devices", "development"], lf.tags = ["storage", "memory", "container", "tin", "pot", "bytes", "servers"], lf.SM = Qc, lf.LG = Jc, lf.MD = $c, lf.XL = ef;
      const af = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 16 16",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M2.667 2A.667.667 0 0 0 2 2.667v2.666C2 5.701 2.3 6 2.667 6h10.666A.667.667 0 0 0 14 5.333V2.667A.667.667 0 0 0 13.333 2zm-2 .667a2 2 0 0 1 2-2h10.666a2 2 0 0 1 2 2v2.666a2 2 0 0 1-2 2H2.667a2 2 0 0 1-2-2zM3.333 4c0-.368.299-.667.667-.667h.007a.667.667 0 0 1 0 1.334H4A.667.667 0 0 1 3.333 4m-.666 6a.667.667 0 0 0-.667.666v2.667c0 .368.299.667.667.667h10.666a.667.667 0 0 0 .667-.667v-2.667a.667.667 0 0 0-.667-.666zm-2 .666a2 2 0 0 1 2-2h10.666a2 2 0 0 1 2 2v2.667a2 2 0 0 1-2 2H2.667a2 2 0 0 1-2-2zM3.333 12c0-.368.299-.667.667-.667h.007a.667.667 0 1 1 0 1.333H4A.667.667 0 0 1 3.333 12",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        rf = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 24 24",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M4 3a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM1 4a3 3 0 0 1 3-3h16a3 3 0 0 1 3 3v4a3 3 0 0 1-3 3H4a3 3 0 0 1-3-3zm4 2a1 1 0 0 1 1-1h.01a1 1 0 0 1 0 2H6a1 1 0 0 1-1-1m-1 9a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1zm-3 1a3 3 0 0 1 3-3h16a3 3 0 0 1 3 3v4a3 3 0 0 1-3 3H4a3 3 0 0 1-3-3zm4 2a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2H6a1 1 0 0 1-1-1",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        tf = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "20",
            height: "20",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 20 20",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M17.166 13.334a.834.834 0 0 0-.833-.835H3a.834.834 0 0 0-.834.835v3.332c0 .46.374.834.834.834h13.333c.46 0 .833-.373.833-.834zm-12.491.832.085.004a.834.834 0 0 1 0 1.659l-.085.005h-.009a.834.834 0 0 1 0-1.668zM17.166 3.334a.834.834 0 0 0-.833-.834H3a.834.834 0 0 0-.834.833v3.334c0 .46.374.833.834.833h13.333c.46 0 .833-.373.833-.833zm-12.491.833.085.003a.834.834 0 0 1 0 1.659l-.085.005h-.009a.834.834 0 0 1 0-1.667zm14.158 12.5a2.5 2.5 0 0 1-2.5 2.5H3a2.5 2.5 0 0 1-2.5-2.5v-3.334a2.5 2.5 0 0 1 2.5-2.5h13.333a2.5 2.5 0 0 1 2.5 2.5zm0-10a2.5 2.5 0 0 1-2.5 2.5H3a2.5 2.5 0 0 1-2.5-2.5V3.334A2.5 2.5 0 0 1 3 .833h13.333a2.5 2.5 0 0 1 2.5 2.5z"
            })
          })
        }))),
        sf = (0, t.forwardRef)((({
          color: e = "currentColor",
          testId: l,
          label: a,
          ...t
        }, s) => (0, r.jsx)(d, {
          label: a,
          children: (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...t,
            ref: s,
            "data-testid": l,
            viewBox: "0 0 32 32",
            children: (0, r.jsx)("path", {
              fill: e,
              d: "M5.333 4C4.597 4 4 4.597 4 5.334v5.333C4 11.403 4.597 12 5.333 12h21.334c.736 0 1.333-.597 1.333-1.333V5.334C28 4.597 27.403 4 26.667 4zm-4 1.334a4 4 0 0 1 4-4h21.334a4 4 0 0 1 4 4v5.333a4 4 0 0 1-4 4H5.333a4 4 0 0 1-4-4zM6.667 8c0-.736.597-1.333 1.333-1.333h.013a1.333 1.333 0 1 1 0 2.667H8A1.333 1.333 0 0 1 6.667 8M5.333 20C4.597 20 4 20.597 4 21.334v5.333C4 27.403 4.597 28 5.333 28h21.334c.736 0 1.333-.597 1.333-1.333v-5.334c0-.736-.597-1.333-1.333-1.333zm-4 1.334a4 4 0 0 1 4-4h21.334a4 4 0 0 1 4 4v5.333a4 4 0 0 1-4 4H5.333a4 4 0 0 1-4-4zM6.667 24c0-.736.597-1.333 1.333-1.333h.013a1.333 1.333 0 0 1 0 2.666H8A1.333 1.333 0 0 1 6.667 24",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        df = (0, t.forwardRef)((({
          size: e = "SM",
          ...l
        }, a) => {
          const t = (0, o.v6)(l, {
            className: g({
              size: e
            })
          });
          return (0, r.jsxs)(r.Fragment, {
            children: ["SM" === e && (0, r.jsx)(af, {
              ...t,
              ref: a
            }), "LG" === e && (0, r.jsx)(rf, {
              ...t,
              ref: a
            }), "MD" === e && (0, r.jsx)(tf, {
              ...t,
              ref: a
            }), "XL" === e && (0, r.jsx)(sf, {
              ...t,
              ref: a
            })]
          })
        }));
      df.displayName = "Server", df.categories = ["development", "devices"], df.tags = ["cloud", "storage"], df.SM = af, df.LG = rf, df.MD = tf, df.XL = sf
    }
  }
]);