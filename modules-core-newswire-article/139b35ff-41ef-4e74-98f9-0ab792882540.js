! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      n = (new Error).stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "139b35ff-41ef-4e74-98f9-0ab792882540", e._sentryDebugIdIdentifier = "sentry-dbid-139b35ff-41ef-4e74-98f9-0ab792882540")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/modules-core-newswire-article",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_newswire_article = self.webpackChunk_rockstargames_modules_core_newswire_article || []).push([
  [636], {
    19365: (e, n, a) => {
      "use strict";
      a.d(n, {
        A: () => t
      });
      var r = a(17539),
        i = a(83022);
      const t = function() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
          parent: "",
          post: null
        };
        return {
          name: "listItem",
          label: "List Item",
          component: "group",
          fields: [(0, r.om)(e), (0, r.z9)({
            name: "content",
            label: "Content",
            component: "text",
            initialValues: ""
          }), (0, r.sE)(e)],
          defaultItem: () => (0, r.Q)({
            content: ""
          }),
          itemProps: e => (0, r.Rv)(e, {
            label: (0, i._e)(`${e?.name??e?.[r.Qw]?.content??"New"} [List Item]`)
          })
        }
      }
    },
    32779: (e, n, a) => {
      "use strict";
      a.d(n, {
        A: () => z
      });
      var r = a(4324),
        i = a(31680),
        t = a(64064),
        o = a.n(t),
        d = a(31879),
        s = a.n(d),
        l = a(53178),
        c = a.n(l),
        m = a(27835),
        g = a.n(m),
        f = a(17529),
        p = a.n(f),
        u = a(72162),
        h = a.n(u),
        b = a(82510),
        w = a.n(b),
        v = a(90675),
        A = a.n(v),
        k = a(76227),
        x = {};
      x.styleTagTransform = A(), x.setAttributes = h(), x.insert = p().bind(null, "head"), x.domAPI = g(), x.insertStyleElement = w(), c()(k.A, x);
      const y = k.A && k.A.locals ? k.A.locals : void 0;
      var C = a(73855);
      const z = e => {
        let {
          alt: n = "",
          className: a = "",
          src: t = {},
          image: d = null,
          video: l = null
        } = e;
        return (0, C.jsxs)("div", {
          className: ((t?.videoPlayerId || t?.gifHash) && y.heroImage, a),
          children: [t?.mobile && (0, C.jsx)(i.A, {
            src: t.mobile,
            ariaLabel: n,
            className: [t?.desktop && y.hiddenLarge, y.responsiveImage].join(" "),
            noRatioPlease: !0
          }), t?.desktop && (0, C.jsx)(i.A, {
            src: t.desktop,
            ariaLabel: n,
            className: [t?.mobile && y.hiddenMobile, y.responsiveImage].join(" ")
          }), t?.videoPlayerId && (0, C.jsx)("div", {
            className: [y.responsiveVideo, y.trailer].join(" "),
            children: (0, C.jsx)(s(), {
              context: "site",
              autoplay: !1,
              id: t.videoPlayerId,
              hero: !0
            })
          }), t?.gifHash && (0, C.jsx)("div", {
            className: y.responsiveVideo,
            children: (0, C.jsx)(o(), {
              hash: [{
                desktop: t?.gifHash?.desktop
              }, {
                mobile: t?.gifHash?.mobile
              }]
            })
          }), d && (0, C.jsx)(r.A, {
            image: d
          }), l && (0, C.jsx)("div", {
            className: [y.responsiveVideo, y.trailer].join(" "),
            children: (0, C.jsx)(s(), {
              context: "site",
              autoplay: l?.autoplay ?? !1,
              id: l.id,
              hero: !0
            })
          })]
        })
      }
    },
    87728: (e, n, a) => {
      "use strict";
      a.d(n, {
        A: () => C
      });
      var r = a(62229),
        i = a(2973),
        t = a.n(i),
        o = a(95966),
        d = a(53178),
        s = a.n(d),
        l = a(27835),
        c = a.n(l),
        m = a(17529),
        g = a.n(m),
        f = a(72162),
        p = a.n(f),
        u = a(82510),
        h = a.n(u),
        b = a(90675),
        w = a.n(b),
        v = a(85873),
        A = {};
      A.styleTagTransform = w(), A.setAttributes = p(), A.insert = g().bind(null, "head"), A.domAPI = c(), A.insertStyleElement = h(), s()(v.A, A);
      const k = v.A && v.A.locals ? v.A.locals : void 0;
      var x = a(73855);
      const {
        sanitize: y
      } = t(), C = e => {
        let {
          list: n,
          string: a,
          starColor: i,
          style: t,
          className: d,
          game: s,
          noImg: l,
          columns: c,
          mobileColumns: m
        } = e;
        const [g, f] = (0, r.useState)(null);
        if ((0, r.useEffect)((() => {
            f(n)
          }), [n]), !a && !n) return null;
        const p = {
          color: t?.color
        };
        return delete t?.color, c && g ? (0, x.jsx)("div", {
          className: k.grid,
          style: {
            "--ordered-list-grid-column": c,
            "--ordered-list-grid-column-mobile": m ?? c
          },
          children: (0, x.jsx)("ol", {
            className: (0, o.classList)(k.itemList, k.noImg, k[i], k[s]),
            style: (0, o.safeStyles)(t),
            children: g.map((e => (0, x.jsx)("li", {
              dangerouslySetInnerHTML: {
                __html: y(e.content)
              },
              style: p
            }, e.content)))
          })
        }) : (0, x.jsx)("ol", {
          style: (0, o.safeStyles)(t),
          className: (0, o.classList)(k.itemList, k.custom, l ? k.noImg : "", i ? k[i] : "", s ? k[s] : "", d ?? ""),
          children: n.map((e => (0, x.jsx)("li", {
            dangerouslySetInnerHTML: {
              __html: y(e?.content ?? e)
            }
          }, e?.content)))
        })
      }
    },
    31680: (e, n, a) => {
      "use strict";
      a.d(n, {
        A: () => A
      });
      var r = a(95966),
        i = a(53178),
        t = a.n(i),
        o = a(27835),
        d = a.n(o),
        s = a(17529),
        l = a.n(s),
        c = a(72162),
        m = a.n(c),
        g = a(82510),
        f = a.n(g),
        p = a(90675),
        u = a.n(p),
        h = a(65445),
        b = {};
      b.styleTagTransform = u(), b.setAttributes = m(), b.insert = l().bind(null, "head"), b.domAPI = d(), b.insertStyleElement = f(), t()(h.A, b);
      const w = h.A && h.A.locals ? h.A.locals : void 0;
      var v = a(73855);
      const A = e => {
        let {
          src: n,
          className: a = "",
          animate: i,
          ariaLabel: t,
          style: o = {}
        } = e;
        const [d, s] = (0, r.usePreloadImg)(n);
        if (!d) return null;
        o.backgroundImage = `url(${n})`;
        const l = {
          ...o
        };
        return s && (l["--aspect-ratio"] = s.width / s.height), (0, v.jsx)("div", {
          role: "img",
          "aria-label": t ?? "R* Games",
          className: [w.responsiveImage, i ? w.animateBox : "", a].join(" "),
          style: l
        })
      }
    },
    85873: (e, n, a) => {
      "use strict";
      a.d(n, {
        A: () => P
      });
      var r = a(42587),
        i = a.n(r),
        t = a(15081),
        o = a.n(t),
        d = a(79908),
        s = a.n(d),
        l = new URL(a(42563), a.b),
        c = new URL(a(77381), a.b),
        m = new URL(a(73715), a.b),
        g = new URL(a(9564), a.b),
        f = new URL(a(68918), a.b),
        p = new URL(a(51097), a.b),
        u = new URL(a(50807), a.b),
        h = new URL(a(650), a.b),
        b = new URL(a(27382), a.b),
        w = new URL(a(84240), a.b),
        v = new URL(a(63829), a.b),
        A = new URL(a(95754), a.b),
        k = new URL(a(68193), a.b),
        x = new URL(a(36206), a.b),
        y = new URL(a(4943), a.b),
        C = o()(i()),
        z = s()(l),
        B = s()(c),
        F = s()(m),
        I = s()(g),
        D = s()(f),
        N = s()(p),
        E = s()(u),
        S = s()(h),
        M = s()(b),
        _ = s()(w),
        R = s()(v),
        T = s()(A),
        G = s()(k),
        L = s()(x),
        j = s()(y);
      C.push([e.id, `.rockstargames-modules-core-newswire-articlec1ed14af6fceaba7c99728a81676dd92{align-items:center;background:var(--white-15);border:none;border-radius:100px;color:var(--white-100);cursor:pointer;display:flex;font-family:var(--font-family-body);font-size:20px;font-style:normal;font-weight:700;justify-content:center;line-height:var(--rem-125);min-width:var(--rem-6);padding:var(--padding-xs) var(--padding-sm);text-align:center;transition:background-color .3s ease-in-out}.rockstargames-modules-core-newswire-articlec1ed14af6fceaba7c99728a81676dd92 img{height:var(--nav-icon-size);margin-left:var(--grid-gap-xs);transition:filter .3s ease-in-out;width:var(--nav-icon-size)}.rockstargames-modules-core-newswire-articlec1ed14af6fceaba7c99728a81676dd92:focus,.rockstargames-modules-core-newswire-articlec1ed14af6fceaba7c99728a81676dd92:hover{background-color:var(--white-40);outline:none}.rockstargames-modules-core-newswire-articlec1ed14af6fceaba7c99728a81676dd92.rockstargames-modules-core-newswire-articlee49b5a5fd4ab934ece172fffe9f6577e{background:var(--white-100);color:var(--black-200)}.rockstargames-modules-core-newswire-articlec1ed14af6fceaba7c99728a81676dd92.rockstargames-modules-core-newswire-articlee49b5a5fd4ab934ece172fffe9f6577e img{filter:invert()}.rockstargames-modules-core-newswire-articlebe627ae18a7bd3cff72d3f11aeed67df{--ordered-list-grid-column-responsive:var(--ordered-list-grid-column,1);align-items:flex-start;background:var(--black-200,#000);border:2px solid var(--border-color,#282828);border-radius:var(--border-radius-md,8px);display:flex;flex-direction:column;gap:var(--grid-gap-xs,10px);grid-template-columns:repeat(var(--ordered-list-grid-column-responsive),1fr);justify-content:space-around;padding:var(--padding-sm,20px)}@media (max-width:767px){.rockstargames-modules-core-newswire-articlebe627ae18a7bd3cff72d3f11aeed67df{--ordered-list-grid-column-responsive:var(--ordered-list-grid-column-mobile,1)!important}}.rockstargames-modules-core-newswire-articled9620ae764026da5584e0f0a5886c992{grid-gap:var(--grid-gap-static-md);--ordered-list-grid-column-responsive:var(--ordered-list-grid-column,1);counter-reset:my-counter;display:grid;grid-template-columns:repeat(var(--ordered-list-grid-column-responsive),1fr);list-style-type:none;margin:0;padding:var(--padding-t,0) var(--padding-dynamic,0) var(--padding-b,0);row-gap:0;text-align:left;width:auto}@media (max-width:767px){.rockstargames-modules-core-newswire-articled9620ae764026da5584e0f0a5886c992{--ordered-list-grid-column-responsive:var(--ordered-list-grid-column-mobile,1)!important}}.rockstargames-modules-core-newswire-articled9620ae764026da5584e0f0a5886c992 li{counter-increment:my-counter}.rockstargames-modules-core-newswire-articled9620ae764026da5584e0f0a5886c992 li,.rockstargames-modules-core-newswire-articled9620ae764026da5584e0f0a5886c992 li:before{color:var(--color-body);display:flex;flex-direction:row;font-family:var(--font-family-body);font-size:var(--font-size-2);font-weight:var(--font-weight-regular);letter-spacing:var(--letter-spacing-body);line-height:var(--line-height-lg)}.rockstargames-modules-core-newswire-articled9620ae764026da5584e0f0a5886c992 li:before{align-items:center;background-color:var(--white-15);border-radius:100%;content:counter(my-counter);font-weight:var(--font-weight-bold);height:1.75rem;justify-content:center;margin-right:var(--grid-gap-xs,10px);margin-top:-.21875rem;min-height:1.75rem;min-width:1.75rem;width:1.75rem}.rockstargames-modules-core-newswire-articled9620ae764026da5584e0f0a5886c992 li:not(:last-child){margin-bottom:var(--li-margin-tb,var(--grid-gap-xs,10px))}.rockstargames-modules-core-newswire-articled9620ae764026da5584e0f0a5886c992.rockstargames-modules-core-newswire-articlefbf343ed03c1bd513ea4cadc9726af76{margin:0;padding-left:var(--list-padding-left,0)}.rockstargames-modules-core-newswire-articled9620ae764026da5584e0f0a5886c992.rockstargames-modules-core-newswire-articlefbf343ed03c1bd513ea4cadc9726af76 li{font-weight:var(--li-font-weight,400);line-height:var(--li-line-height,1.4rem);list-style-type:none;margin:var(--li-margin-tb,var(--grid-gap-static-sm,1rem)) 0;padding-left:calc(var(--base-rem-size) * 1.3);position:relative}.rockstargames-modules-core-newswire-articled9620ae764026da5584e0f0a5886c992.rockstargames-modules-core-newswire-articlefbf343ed03c1bd513ea4cadc9726af76 li:before{background-image:url(${z});background-repeat:no-repeat;background-size:contain;content:"";height:.5rem;left:0;position:absolute;top:.45rem;width:.5rem}.rockstargames-modules-core-newswire-articled9620ae764026da5584e0f0a5886c992.rockstargames-modules-core-newswire-articleb2194fe129aa210950dcb07b88a28c13,.newswireFull.rdo .rockstargames-modules-core-newswire-articled9620ae764026da5584e0f0a5886c992,[data-game=rdo] .rockstargames-modules-core-newswire-articled9620ae764026da5584e0f0a5886c992{margin:0;padding-left:0}.rockstargames-modules-core-newswire-articled9620ae764026da5584e0f0a5886c992.rockstargames-modules-core-newswire-articleb2194fe129aa210950dcb07b88a28c13 li,.newswireFull.rdo .rockstargames-modules-core-newswire-articled9620ae764026da5584e0f0a5886c992 li,[data-game=rdo] .rockstargames-modules-core-newswire-articled9620ae764026da5584e0f0a5886c992 li{list-style-type:none;margin:1rem 0;padding-left:calc(var(--base-rem-size) * 1.3);position:relative}.rockstargames-modules-core-newswire-articled9620ae764026da5584e0f0a5886c992.rockstargames-modules-core-newswire-articleb2194fe129aa210950dcb07b88a28c13 li:before,.newswireFull.rdo .rockstargames-modules-core-newswire-articled9620ae764026da5584e0f0a5886c992 li:before,[data-game=rdo] .rockstargames-modules-core-newswire-articled9620ae764026da5584e0f0a5886c992 li:before{background-image:url(${B});background-repeat:no-repeat;content:"";height:11px;left:0;position:absolute;top:.6rem;width:11px}@media (max-width:767px){.rockstargames-modules-core-newswire-articled9620ae764026da5584e0f0a5886c992.rockstargames-modules-core-newswire-articleb2194fe129aa210950dcb07b88a28c13 li:before,.newswireFull.rdo .rockstargames-modules-core-newswire-articled9620ae764026da5584e0f0a5886c992 li:before,[data-game=rdo] .rockstargames-modules-core-newswire-articled9620ae764026da5584e0f0a5886c992 li:before{top:.3rem}}.rockstargames-modules-core-newswire-articled9620ae764026da5584e0f0a5886c992.rockstargames-modules-core-newswire-articleb2194fe129aa210950dcb07b88a28c13 li:not(:last-child),.newswireFull.rdo .rockstargames-modules-core-newswire-articled9620ae764026da5584e0f0a5886c992 li:not(:last-child),[data-game=rdo] .rockstargames-modules-core-newswire-articled9620ae764026da5584e0f0a5886c992 li:not(:last-child){margin-bottom:var(--base-rem-size)}.rockstargames-modules-core-newswire-articled9620ae764026da5584e0f0a5886c992.rockstargames-modules-core-newswire-articleb2194fe129aa210950dcb07b88a28c13.rockstargames-modules-core-newswire-articlebbb7247d5d7a836d755491e85639f1a3,.newswireFull.rdo .rockstargames-modules-core-newswire-articled9620ae764026da5584e0f0a5886c992.rockstargames-modules-core-newswire-articlebbb7247d5d7a836d755491e85639f1a3,[data-game=rdo] .rockstargames-modules-core-newswire-articled9620ae764026da5584e0f0a5886c992.rockstargames-modules-core-newswire-articlebbb7247d5d7a836d755491e85639f1a3{padding-left:var(--grid-gap-static-md)}.rockstargames-modules-core-newswire-articled9620ae764026da5584e0f0a5886c992.rockstargames-modules-core-newswire-articleb2194fe129aa210950dcb07b88a28c13.rockstargames-modules-core-newswire-articlebbb7247d5d7a836d755491e85639f1a3 li,.newswireFull.rdo .rockstargames-modules-core-newswire-articled9620ae764026da5584e0f0a5886c992.rockstargames-modules-core-newswire-articlebbb7247d5d7a836d755491e85639f1a3 li,[data-game=rdo] .rockstargames-modules-core-newswire-articled9620ae764026da5584e0f0a5886c992.rockstargames-modules-core-newswire-articlebbb7247d5d7a836d755491e85639f1a3 li{list-style-type:disc;margin:0 0 1rem;padding:0 0 0 .5rem}.rockstargames-modules-core-newswire-articled9620ae764026da5584e0f0a5886c992.rockstargames-modules-core-newswire-articleb2194fe129aa210950dcb07b88a28c13.rockstargames-modules-core-newswire-articlebbb7247d5d7a836d755491e85639f1a3 li:last-child,.newswireFull.rdo .rockstargames-modules-core-newswire-articled9620ae764026da5584e0f0a5886c992.rockstargames-modules-core-newswire-articlebbb7247d5d7a836d755491e85639f1a3 li:last-child,[data-game=rdo] .rockstargames-modules-core-newswire-articled9620ae764026da5584e0f0a5886c992.rockstargames-modules-core-newswire-articlebbb7247d5d7a836d755491e85639f1a3 li:last-child{margin:0}.rockstargames-modules-core-newswire-articled9620ae764026da5584e0f0a5886c992.rockstargames-modules-core-newswire-articleb2194fe129aa210950dcb07b88a28c13.rockstargames-modules-core-newswire-articlebbb7247d5d7a836d755491e85639f1a3 li:before,.newswireFull.rdo .rockstargames-modules-core-newswire-articled9620ae764026da5584e0f0a5886c992.rockstargames-modules-core-newswire-articlebbb7247d5d7a836d755491e85639f1a3 li:before,[data-game=rdo] .rockstargames-modules-core-newswire-articled9620ae764026da5584e0f0a5886c992.rockstargames-modules-core-newswire-articlebbb7247d5d7a836d755491e85639f1a3 li:before{content:none}.rockstargames-modules-core-newswire-articled9620ae764026da5584e0f0a5886c992.rockstargames-modules-core-newswire-articleffaf58c543b36fd7fb4efec24b3564bc,.newswireFull.gtao .rockstargames-modules-core-newswire-articled9620ae764026da5584e0f0a5886c992,[data-game=gtao] .rockstargames-modules-core-newswire-articled9620ae764026da5584e0f0a5886c992{margin:0;padding-left:0}.rockstargames-modules-core-newswire-articled9620ae764026da5584e0f0a5886c992.rockstargames-modules-core-newswire-articleffaf58c543b36fd7fb4efec24b3564bc li,.newswireFull.gtao .rockstargames-modules-core-newswire-articled9620ae764026da5584e0f0a5886c992 li,[data-game=gtao] .rockstargames-modules-core-newswire-articled9620ae764026da5584e0f0a5886c992 li{font-weight:var(--li-font-weight,700);line-height:var(--li-line-height,1.4rem);list-style-type:none;margin:var(--grid-gap-static-sm,1rem) 0;padding-left:calc(var(--base-rem-size) * 1.3);position:relative}.rockstargames-modules-core-newswire-articled9620ae764026da5584e0f0a5886c992.rockstargames-modules-core-newswire-articleffaf58c543b36fd7fb4efec24b3564bc li:before,.newswireFull.gtao .rockstargames-modules-core-newswire-articled9620ae764026da5584e0f0a5886c992 li:before,[data-game=gtao] .rockstargames-modules-core-newswire-articled9620ae764026da5584e0f0a5886c992 li:before{background-image:url(${F});background-repeat:no-repeat;background-size:contain;content:"";height:11px;left:0;position:absolute;top:20%;width:11px}.rockstargames-modules-core-newswire-articled9620ae764026da5584e0f0a5886c992.rockstargames-modules-core-newswire-articleffaf58c543b36fd7fb4efec24b3564bc.rockstargames-modules-core-newswire-articlecc2c26a3dd80cf9db62c4c7f389b7859 li:before,.newswireFull.gtao .rockstargames-modules-core-newswire-articled9620ae764026da5584e0f0a5886c992.rockstargames-modules-core-newswire-articlecc2c26a3dd80cf9db62c4c7f389b7859 li:before,[data-game=gtao] .rockstargames-modules-core-newswire-articled9620ae764026da5584e0f0a5886c992.rockstargames-modules-core-newswire-articlecc2c26a3dd80cf9db62c4c7f389b7859 li:before{background-image:var(--custom-star,none)}.rockstargames-modules-core-newswire-articled9620ae764026da5584e0f0a5886c992.rockstargames-modules-core-newswire-articleffaf58c543b36fd7fb4efec24b3564bc.rockstargames-modules-core-newswire-articlece372826eac3cc73094d69c0c5d9a530 li:before,.newswireFull.gtao .rockstargames-modules-core-newswire-articled9620ae764026da5584e0f0a5886c992.rockstargames-modules-core-newswire-articlece372826eac3cc73094d69c0c5d9a530 li:before,[data-game=gtao] .rockstargames-modules-core-newswire-articled9620ae764026da5584e0f0a5886c992.rockstargames-modules-core-newswire-articlece372826eac3cc73094d69c0c5d9a530 li:before{background-image:url(${I})}.rockstargames-modules-core-newswire-articled9620ae764026da5584e0f0a5886c992.rockstargames-modules-core-newswire-articleffaf58c543b36fd7fb4efec24b3564bc.rockstargames-modules-core-newswire-articleedb9998d6516a5aa1aece9c07c1768be li:before,.newswireFull.gtao .rockstargames-modules-core-newswire-articled9620ae764026da5584e0f0a5886c992.rockstargames-modules-core-newswire-articleedb9998d6516a5aa1aece9c07c1768be li:before,[data-game=gtao] .rockstargames-modules-core-newswire-articled9620ae764026da5584e0f0a5886c992.rockstargames-modules-core-newswire-articleedb9998d6516a5aa1aece9c07c1768be li:before{background-image:url(${D})}.rockstargames-modules-core-newswire-articled9620ae764026da5584e0f0a5886c992.rockstargames-modules-core-newswire-articleffaf58c543b36fd7fb4efec24b3564bc.rockstargames-modules-core-newswire-articlef674d6037f10af1a1fe41a83c1e5da17 li:before,.newswireFull.gtao .rockstargames-modules-core-newswire-articled9620ae764026da5584e0f0a5886c992.rockstargames-modules-core-newswire-articlef674d6037f10af1a1fe41a83c1e5da17 li:before,[data-game=gtao] .rockstargames-modules-core-newswire-articled9620ae764026da5584e0f0a5886c992.rockstargames-modules-core-newswire-articlef674d6037f10af1a1fe41a83c1e5da17 li:before{background-image:url(${N})}.rockstargames-modules-core-newswire-articled9620ae764026da5584e0f0a5886c992.rockstargames-modules-core-newswire-articleffaf58c543b36fd7fb4efec24b3564bc.rockstargames-modules-core-newswire-articlee211b0b8ae00897d696af259b3ddd837 li:before,.newswireFull.gtao .rockstargames-modules-core-newswire-articled9620ae764026da5584e0f0a5886c992.rockstargames-modules-core-newswire-articlee211b0b8ae00897d696af259b3ddd837 li:before,[data-game=gtao] .rockstargames-modules-core-newswire-articled9620ae764026da5584e0f0a5886c992.rockstargames-modules-core-newswire-articlee211b0b8ae00897d696af259b3ddd837 li:before{background-image:url(${E})}.rockstargames-modules-core-newswire-articled9620ae764026da5584e0f0a5886c992.rockstargames-modules-core-newswire-articleffaf58c543b36fd7fb4efec24b3564bc.rockstargames-modules-core-newswire-articlee61db4af0805bb4c9bf820c26ac8a85f li:before,.newswireFull.gtao .rockstargames-modules-core-newswire-articled9620ae764026da5584e0f0a5886c992.rockstargames-modules-core-newswire-articlee61db4af0805bb4c9bf820c26ac8a85f li:before,[data-game=gtao] .rockstargames-modules-core-newswire-articled9620ae764026da5584e0f0a5886c992.rockstargames-modules-core-newswire-articlee61db4af0805bb4c9bf820c26ac8a85f li:before{background-image:url(${S})}.rockstargames-modules-core-newswire-articled9620ae764026da5584e0f0a5886c992.rockstargames-modules-core-newswire-articleffaf58c543b36fd7fb4efec24b3564bc.rockstargames-modules-core-newswire-articlea379d41268f4f002d5ac257f67461f1d li:before,.newswireFull.gtao .rockstargames-modules-core-newswire-articled9620ae764026da5584e0f0a5886c992.rockstargames-modules-core-newswire-articlea379d41268f4f002d5ac257f67461f1d li:before,[data-game=gtao] .rockstargames-modules-core-newswire-articled9620ae764026da5584e0f0a5886c992.rockstargames-modules-core-newswire-articlea379d41268f4f002d5ac257f67461f1d li:before{background-image:url(${M})}.rockstargames-modules-core-newswire-articled9620ae764026da5584e0f0a5886c992.rockstargames-modules-core-newswire-articleffaf58c543b36fd7fb4efec24b3564bc.rockstargames-modules-core-newswire-articlebffe0939bda9e26ad14f6b01669338a8 li:before,.newswireFull.gtao .rockstargames-modules-core-newswire-articled9620ae764026da5584e0f0a5886c992.rockstargames-modules-core-newswire-articlebffe0939bda9e26ad14f6b01669338a8 li:before,[data-game=gtao] .rockstargames-modules-core-newswire-articled9620ae764026da5584e0f0a5886c992.rockstargames-modules-core-newswire-articlebffe0939bda9e26ad14f6b01669338a8 li:before{background-image:url(${_})}.rockstargames-modules-core-newswire-articled9620ae764026da5584e0f0a5886c992.rockstargames-modules-core-newswire-articleffaf58c543b36fd7fb4efec24b3564bc.rockstargames-modules-core-newswire-articlef9c1eebf59650cd8ee84191d8fc62874 li:before,.newswireFull.gtao .rockstargames-modules-core-newswire-articled9620ae764026da5584e0f0a5886c992.rockstargames-modules-core-newswire-articlef9c1eebf59650cd8ee84191d8fc62874 li:before,[data-game=gtao] .rockstargames-modules-core-newswire-articled9620ae764026da5584e0f0a5886c992.rockstargames-modules-core-newswire-articlef9c1eebf59650cd8ee84191d8fc62874 li:before{background-image:url(${R})}.rockstargames-modules-core-newswire-articled9620ae764026da5584e0f0a5886c992.rockstargames-modules-core-newswire-articleffaf58c543b36fd7fb4efec24b3564bc.rockstargames-modules-core-newswire-articled44e2fc53f269ccf2b8fbe032ef6cec9 li:before,.newswireFull.gtao .rockstargames-modules-core-newswire-articled9620ae764026da5584e0f0a5886c992.rockstargames-modules-core-newswire-articled44e2fc53f269ccf2b8fbe032ef6cec9 li:before,[data-game=gtao] .rockstargames-modules-core-newswire-articled9620ae764026da5584e0f0a5886c992.rockstargames-modules-core-newswire-articled44e2fc53f269ccf2b8fbe032ef6cec9 li:before{background-image:url(${T})}.rockstargames-modules-core-newswire-articled9620ae764026da5584e0f0a5886c992.rockstargames-modules-core-newswire-articleffaf58c543b36fd7fb4efec24b3564bc.rockstargames-modules-core-newswire-articlee2b6f722952b5d61d2a3b725166bfc9b li:before,.newswireFull.gtao .rockstargames-modules-core-newswire-articled9620ae764026da5584e0f0a5886c992.rockstargames-modules-core-newswire-articlee2b6f722952b5d61d2a3b725166bfc9b li:before,[data-game=gtao] .rockstargames-modules-core-newswire-articled9620ae764026da5584e0f0a5886c992.rockstargames-modules-core-newswire-articlee2b6f722952b5d61d2a3b725166bfc9b li:before{background-image:url(${G})}.rockstargames-modules-core-newswire-articled9620ae764026da5584e0f0a5886c992.rockstargames-modules-core-newswire-articleffaf58c543b36fd7fb4efec24b3564bc.rockstargames-modules-core-newswire-articlea365c5895cfd6c9f94fc994d71ba402c li:before,.newswireFull.gtao .rockstargames-modules-core-newswire-articled9620ae764026da5584e0f0a5886c992.rockstargames-modules-core-newswire-articlea365c5895cfd6c9f94fc994d71ba402c li:before,[data-game=gtao] .rockstargames-modules-core-newswire-articled9620ae764026da5584e0f0a5886c992.rockstargames-modules-core-newswire-articlea365c5895cfd6c9f94fc994d71ba402c li:before{background-image:url(${L})}.rockstargames-modules-core-newswire-articled9620ae764026da5584e0f0a5886c992.rockstargames-modules-core-newswire-articleffaf58c543b36fd7fb4efec24b3564bc.rockstargames-modules-core-newswire-articleb2a1c0b367b250fe0606dffece9e1c02 li:before,.newswireFull.gtao .rockstargames-modules-core-newswire-articled9620ae764026da5584e0f0a5886c992.rockstargames-modules-core-newswire-articleb2a1c0b367b250fe0606dffece9e1c02 li:before,[data-game=gtao] .rockstargames-modules-core-newswire-articled9620ae764026da5584e0f0a5886c992.rockstargames-modules-core-newswire-articleb2a1c0b367b250fe0606dffece9e1c02 li:before{background-image:url(${j});background-size:105%;height:100%;width:12px}.rockstargames-modules-core-newswire-articled9620ae764026da5584e0f0a5886c992 span{color:var(--list-color-span,inherit);font-weight:var(--list-font-weight-span,inherit)}@media (max-width:640px){.rockstargames-modules-core-newswire-articled9620ae764026da5584e0f0a5886c992{width:auto}}`, "", {
        version: 3,
        sources: ["webpack://./../../buildtime/legacy-design-system/less/gen9-mixins.less", "webpack://./../../buildtime/components/src/dom/OrderedList/index.less", "webpack://./../../buildtime/legacy-design-system/less/mixins.less"],
        names: [],
        mappings: "AA2QA,6EAKI,kBAAA,CAGA,0BAAA,CAFA,WAAA,CACA,mBAAA,CAIA,sBAAA,CAQA,cAAA,CAlBA,YAAA,CAYA,mCAAA,CACA,cAAA,CACA,iBAAA,CACA,eAAA,CAZA,sBAAA,CAaA,0BAAA,CAfA,sBAAA,CACA,2CAAA,CASA,iBAAA,CAQA,2CC9OJ,CD0NA,iFAwBQ,2BAAA,CADA,8BAAA,CAGA,iCAAA,CADA,0BC7OR,CDiPI,sKAEI,gCAAA,CACA,YC/OR,CDkPI,yJAEI,2BAAA,CADA,sBC/OR,CD8OI,6JAKQ,eChPZ,CAhEA,6EAGI,uEAAA,CAQA,sBAAA,CAIA,gCAAA,CADA,4CAAA,CADA,yCAAA,CAZA,YAAA,CASA,qBAAA,CAEA,2BAAA,CARA,4EAAA,CAFA,4BAAA,CAOA,8BAoEJ,CCrCI,yBAAA,6EDvBQ,wFAgEV,CACF,CA9DA,6EAII,kCAAA,CAEA,uEAAA,CAJA,wBAAA,CACA,YAAA,CAIA,4EAAA,CANA,oBAAA,CAaA,QAAA,CACA,sEAAA,CAVA,SAAA,CAmOA,eAAA,CA3NA,UA8DJ,CCvDI,yBAAA,6EDTQ,wFAoEV,CACF,CAhFA,gFAmBQ,4BAwER,CAnEQ,uKD+CJ,uBAAA,CCnDI,YAAA,CACA,kBAAA,CD8CJ,mCAAA,CADA,4BAAA,CAGA,sCAAA,CACA,yCAAA,CAFA,iCC6CJ,CAzFQ,uFAYI,kBAAA,CARA,gCAAA,CACA,kBAAA,CAFA,2BAAA,CDiDR,mCAAA,CC7CQ,cAAA,CAMA,sBAAA,CAFA,oCAAA,CADA,qBAAA,CADA,kBAAA,CADA,iBAAA,CAFA,aAmFZ,CAvEQ,iGACI,yDAyEZ,CArEI,yJACI,QAAA,CACA,uCAuER,CAzEI,4JAQQ,qCAAA,CAJA,wCAAA,CAEA,oBAAA,CAGA,2DAAA,CAFA,6CAAA,CAFA,iBA4EZ,CAvEY,mKAKI,wDAAA,CACA,2BAAA,CACA,uBAAA,CANA,UAAA,CAEA,YAAA,CAMA,MAAA,CALA,iBAAA,CAIA,UAAA,CANA,WAgFhB,CApEI,qVAGI,QAAA,CACA,cAsER,CA1EI,8VAOQ,oBAAA,CAEA,aAAA,CADA,6CAAA,CAFA,iBA4EZ,CAxEY,mXAKI,wDAAA,CACA,2BAAA,CALA,UAAA,CAEA,WAAA,CAKA,MAAA,CAJA,iBAAA,CAGA,SAAA,CALA,UAkFhB,CCjJI,yBAAA,mXDsEoB,SAiFtB,CACF,CAhFY,iZACI,kCAoFhB,CAjFQ,yjBACI,sCAqFZ,CAtFQ,kkBAIQ,oBAAA,CACA,eAAA,CAFA,mBA0FhB,CAvFgB,mmBACI,QA2FpB,CAzFgB,ulBACI,YA6FpB,CAvFI,uVAGI,QAAA,CACA,cAyFR,CA7FI,gWAUQ,qCAAA,CAJA,wCAAA,CAEA,oBAAA,CAGA,uCAAA,CAFA,6CAAA,CAFA,iBAgGZ,CA3FY,qXAKI,wDAAA,CACA,2BAAA,CACA,uBAAA,CANA,UAAA,CAEA,WAAA,CAMA,MAAA,CALA,iBAAA,CAIA,OAAA,CANA,UAsGhB,CA1FgB,ylBACI,wCA8FpB,CAxFgB,ylBACI,wDA4FpB,CAtFgB,ylBACI,wDA0FpB,CApFgB,ylBACI,wDAwFpB,CAlFgB,ylBACI,wDAsFpB,CAhFgB,ylBACI,wDAoFpB,CA9EgB,ylBACI,wDAkFpB,CA5EgB,ylBACI,wDAgFpB,CA1EgB,ylBACI,yDA8EpB,CAxEgB,ylBACI,yDA4EpB,CAtEgB,ylBACI,yDA0EpB,CApEgB,ylBACI,yDAwEpB,CAlEgB,ylBAII,yDAAA,CADA,oBAAA,CADA,WAAA,CADA,UAyEpB,CAxSA,kFA0OQ,oCAAA,CACA,gDAiER,CA9DI,yBAAA,6EACI,UAiEN,CACF",
        sourcesContent: ["@import 'mixins.less';\n\n// Headlines\n.headline-6 () {\n    font-size: calc(var(--font-size-3) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n.headline-5 () {\n    font-size: calc(var(--font-size-4) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n.headline-4 () {\n    font-size: calc(var(--font-size-5) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n.headline-3 () {\n    font-size: calc(var(--font-size-6) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n.headline-3-bold () {\n    .headline-3();\n    font-weight: var(--font-weight-bold);\n    color: var(--color-override, var(--color-h));\n}\n\n.headline-2 () {\n    font-size: calc(var(--font-size-7) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-bold);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n.headline-1 () {\n    font-size: calc(var(--font-size-8) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-bold);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n.xLarge () {\n    font-size: calc(var(--font-size-9) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-bold);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n// Body\n.body-xs () {\n    font-size: var(--font-size-1);\n    font-family: var(--font-family-body);\n    line-height: var(--line-height-lg);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-body);\n    color: var(--color-body);\n}\n\n.body-xs-bold () {\n    .body-xs;\n    font-weight: var(--font-weight-bold);\n    color: var(--color-body);\n}\n\n.body-sm () {\n    font-size: var(--font-size-2);\n    font-family: var(--font-family-body);\n    line-height: var(--line-height-lg);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-body);\n    color: var(--color-body);\n}\n\n.body-sm-bold () {\n    .body-sm;\n    font-weight: var(--font-weight-bold);\n    color: var(--color-body);\n}\n\n.body-md () {\n    font-size: var(--font-size-3);\n    font-family: var(--font-family-body);\n    line-height: var(--line-height-lg);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-body);\n    color: var(--color-body);\n}\n\n.body-md-bold () {\n    .body-md;\n    font-weight: var(--font-weight-bold);\n    color: var(--color-body);\n}\n\n.body-lg () {\n    font-size: var(--font-size-4);\n    font-family: var(--font-family-body);\n    line-height: var(--line-height-lg);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-body);\n    color: var(--color-body);\n}\n\n.body-lg-bold () {\n    .body-lg;\n    font-weight: var(--font-weight-bold);\n    color: var(--color-body);\n}\n\n.handleFontDeclarationsGen9() {\n    h1 {\n        .headline-1;\n    }\n    h2 {\n        .headline-2;\n    }\n    h3 {\n        .headline-3;\n    }\n    h4 {\n        .headline-4;\n    }\n    h5 {\n        .headline-5;\n    }\n    p {\n        .body-md;\n    }\n}\n\n.handleMaxWidth(@max-width-default: 1000000px) {\n    width: 100%;\n    max-width: calc(\n        var(--max-width-dynamic, @max-width-default) +\n            var(--padding-dynamic, 0px) * 2\n    ) !important;\n    margin: 0 auto;\n}\n\n.handlePadding(@paddingSides: initial, @paddingTopBottom: initial) {\n    --padding-dynamic: @paddingSides;\n    --padding-dynamic-tb: @paddingTopBottom;\n\n    padding: var(--padding-t, var(--padding-dynamic-tb, 0))\n        var(--padding-dynamic, 0) var(--padding-b, var(--padding-dynamic-tb, 0))\n        var(--padding-dynamic, 0);\n}\n\n.commonContent() {\n    .handlePadding(var(--padding-sides), 0);\n    .handleMaxWidth(var(--content-max-width));\n}\n\n.backgroundIcon(@icon) {\n    background: url('../icons/@{icon}.svg') no-repeat center/1rem;\n}\n\n@iconBtnConfig: {\n    @small: {\n        size: 2rem;\n    };\n    @large: {\n        size: 3rem;\n    };\n};\n\n.iconBtn(@icon, @size: small) {\n    @lookup: @size;\n    width: @iconBtnConfig[@@lookup][size];\n    height: @iconBtnConfig[@@lookup][size];\n    position: relative;\n    cursor: pointer;\n    background: var(--black-65, rgba(0, 0, 0, 0.65));\n    border: 1px solid var(--white-100, #fff);\n    border-radius: 50%;\n    padding: 0;\n    transition: background 0.3s ease-in-out;\n    &::after {\n        .backgroundIcon(@icon);\n        content: '';\n        display: block;\n        height: 100%;\n        width: 100%;\n        position: absolute;\n        left: 0;\n        top: 0;\n        transition: 0.3s ease-in-out;\n    }\n\n    &:focus {\n        outline: none;\n        border: none;\n    }\n\n    .isTouchscreen({\n        &:active {\n            background: var(--white-100, #fff);\n            &::after {\n                filter: invert(1);\n            }\n        }\n    }, {\n        &:hover,\n        &:focus {\n            background: var(--white-100, #fff);\n            &::after {\n                filter: invert(1);\n            }\n        }\n    });\n}\n\n.iconBtnPlain(@icon, @size: small) {\n    @lookup: @size;\n    width: @iconBtnConfig[@@lookup][size];\n    height: @iconBtnConfig[@@lookup][size];\n    position: relative;\n    cursor: pointer;\n    padding: 0;\n\n    &::after {\n        content: '';\n        display: block;\n        height: 100%;\n        width: 100%;\n        position: absolute;\n        left: 0;\n        top: 0;\n        transition: 0.3s ease-in-out;\n        background: url('../icons/@{icon}.svg') no-repeat center/1.5rem;\n    }\n}\n\n.swiperBtn(@icon) {\n    .iconBtn(@icon, large);\n    background: var(--black-200);\n    border-radius: 0;\n    border: none;\n    &::after {\n        background-size: 1.5rem;\n    }\n}\n\n.pillBtn {\n    display: flex;\n    min-width: var(--rem-6);\n    padding: var(--padding-xs) var(--padding-sm);\n    justify-content: center;\n    align-items: center;\n    border: none;\n    border-radius: 100px;\n    background: var(--white-15);\n    cursor: pointer;\n\n    color: var(--white-100);\n    text-align: center;\n    font-family: var(--font-family-body);\n    font-size: 20px;\n    font-style: normal;\n    font-weight: 700;\n    line-height: var(--rem-125);\n\n    cursor: pointer;\n    transition: background-color 0.3s ease-in-out;\n\n    img {\n        margin-left: var(--grid-gap-xs);\n        height: var(--nav-icon-size);\n        width: var(--nav-icon-size);\n        transition: filter 0.3s ease-in-out;\n    }\n\n    &:hover,\n    &:focus {\n        background-color: var(--white-40);\n        outline: none;\n    }\n\n    &.selected {\n        color: var(--black-200);\n        background: var(--white-100);\n\n        img {\n            filter: invert();\n        }\n    }\n}\n\n.setGen9Root() {\n    --gen9-max-width: 2560px;\n    --content-max-width: var(--gen9-max-width);\n    --padding-sides: var(--padding-lg);\n    --content-padding: 0 var(--padding-sides);\n    flex: 1;\n    display: flex;\n    justify-content: center;\n\n    .xl({\n        --padding-sides: var(--padding-xl);\n    });\n\n    .handleFontDeclarationsGen9();\n}\n\n.scrollFade() {\n    // @note: this is breaking on firefox.\n    mask-image: linear-gradient(\n        to bottom,\n        var(--black-100) calc(100% - 48px),\n        transparent calc(100% + 16px)\n    );\n}\n\n.scrollbar() {\n    /* Firefox */\n    scrollbar-width: auto;\n    scrollbar-color: var(--scroll-thumb-color) var(--scroll-track-color);\n\n    /* Chrome, Edge, and Safari */\n    &::-webkit-scrollbar {\n        width: 8px;\n    }\n    &::-webkit-scrollbar-track {\n        background: transparent;\n    }\n    &::-webkit-scrollbar-thumb {\n        background-color: var(--scroll-thumb-color);\n        border-radius: 10px;\n        border: none;\n    }\n}\n\n.ifElse(@condition, @if-styles, @else-styles) {\n    @media @condition {\n        @if-styles();\n    }\n    @media not (@condition) {\n        @else-styles();\n    }\n}\n\n.isTouchscreen(@if-styles, @else-styles) {\n    .ifElse(~'(pointer: coarse)', @if-styles, @else-styles);\n}\n\n.mobile-landscape(@rules) {\n    @media only screen and (min-width: 480px) and (max-width: 1023px) and (orientation: landscape) {\n        @rules();\n    }\n}\n\n.caret(@color) {\n    .dropdownCaret(@color);\n}\n\n.horizontalScrollFade() {\n    mask-image: linear-gradient(\n        to right,\n        transparent,\n        rgba(0, 0, 0, 0.3) calc(var(--padding-sides) / 2),\n        #000 var(--padding-sides),\n        #000 calc(100% - var(--padding-sides)),\n        rgba(0, 0, 0, 0.3) calc(100% - (var(--padding-sides) / 2)),\n        transparent\n    );\n}\n\n// Accessibility\n.visuallyHidden() {\n    border: 0;\n    clip: rect(0 0 0 0);\n    height: 1px;\n    overflow: hidden;\n    padding: 0;\n    position: absolute;\n    white-space: nowrap;\n    width: 1px;\n}\n", "@import '@rsgweb/legacy-design-system/less/mixins.less';\n@import '@rsgweb/legacy-design-system/less/gen9-mixins.less';\n\n.grid {\n    display: flex;\n    justify-content: space-around;\n    --ordered-list-grid-column-responsive: var(--ordered-list-grid-column, 1);\n    grid-template-columns: repeat(\n        var(--ordered-list-grid-column-responsive),\n        1fr\n    );\n\n    padding: var(--padding-sm, 20px);\n    flex-direction: column;\n    align-items: flex-start;\n    gap: var(--grid-gap-xs, 10px);\n    border-radius: var(--border-radius-md, 8px);\n    border: 2px solid var(--border-color, #282828);\n    background: var(--black-200, #000);\n\n    .smMax({--ordered-list-grid-column-responsive: var(--ordered-list-grid-column-mobile, 1) !important;});\n}\n\n.itemList {\n    list-style-type: none;\n    counter-reset: my-counter;\n    display: grid;\n    grid-gap: var(--grid-gap-static-md);\n    row-gap: 0;\n    --ordered-list-grid-column-responsive: var(--ordered-list-grid-column, 1);\n    grid-template-columns: repeat(\n        var(--ordered-list-grid-column-responsive),\n        1fr\n    );\n    .smMax({--ordered-list-grid-column-responsive: var(--ordered-list-grid-column-mobile, 1) !important;});\n\n    width: auto;\n    margin: 0;\n    padding: var(--padding-t, 0px) var(--padding-dynamic, 0px)\n        var(--padding-b, 0px);\n\n    li {\n        counter-increment: my-counter;\n        display: flex;\n        flex-direction: row;\n        .body-sm();\n\n        &::before {\n            display: flex;\n            flex-direction: row;\n            content: counter(my-counter);\n            background-color: var(--white-15);\n            border-radius: 100%;\n            width: 1.75rem;\n            height: 1.75rem;\n            min-width: 1.75rem;\n            min-height: 1.75rem;\n            margin-top: -0.21875rem;\n            margin-right: var(--grid-gap-xs, 10px);\n            align-items: center;\n            justify-content: center;\n\n            .body-sm-bold();\n        }\n\n        &:not(:last-child) {\n            margin-bottom: var(--li-margin-tb, var(--grid-gap-xs, 10px) ;);\n        }\n    }\n\n    &.gtaplus {\n        margin: 0;\n        padding-left: var(--list-padding-left, 0);\n        li {\n            line-height: var(--li-line-height, 1.4rem);\n            position: relative;\n            list-style-type: none;\n            padding-left: calc(var(--base-rem-size) * 1.3);\n            font-weight: var(--li-font-weight, 400);\n            margin: var(--li-margin-tb, var(--grid-gap-static-sm, 1rem)) 0;\n            &:before {\n                content: '';\n                width: 0.5rem;\n                height: 0.5rem;\n                position: absolute;\n                background-image: url('./img/gtaplus.svg');\n                background-repeat: no-repeat;\n                background-size: contain;\n                top: 0.45rem;\n                left: 0;\n            }\n        }\n    }\n\n    [data-game='rdo'] &,\n    :global(.newswireFull.rdo) &,\n    &.rdo {\n        margin: 0;\n        padding-left: 0;\n        li {\n            position: relative;\n            list-style-type: none;\n            padding-left: calc(var(--base-rem-size) * 1.3);\n            margin: 1rem 0;\n            &:before {\n                content: '';\n                width: 11px;\n                height: 11px;\n                position: absolute;\n                background-image: url('./img/rdo-bullet.svg');\n                background-repeat: no-repeat;\n                top: 0.6rem;\n                left: 0;\n                .smMax({top: 0.3rem;});\n            }\n            &:not(:last-child) {\n                margin-bottom: var(--base-rem-size);\n            }\n        }\n        &.noImg {\n            padding-left: var(--grid-gap-static-md);\n            li {\n                padding: 0 0 0 0.5rem;\n                list-style-type: disc;\n                margin: 0 0 1rem;\n                &:last-child {\n                    margin: 0;\n                }\n                &:before {\n                    content: none;\n                }\n            }\n        }\n    }\n\n    [data-game='gtao'] &,\n    :global(.newswireFull.gtao) &,\n    &.gtao {\n        margin: 0;\n        padding-left: 0;\n        li {\n            line-height: var(--li-line-height, 1.4rem);\n            position: relative;\n            list-style-type: none;\n            padding-left: calc(var(--base-rem-size) * 1.3);\n            font-weight: var(--li-font-weight, 700);\n            margin: var(--grid-gap-static-sm, 1rem) 0;\n            &:before {\n                content: '';\n                width: 11px;\n                height: 11px;\n                position: absolute;\n                background-image: url('./img/gtao-star-white.svg');\n                background-repeat: no-repeat;\n                background-size: contain;\n                top: 20%;\n                left: 0;\n            }\n        }\n        &.custom {\n            li {\n                &:before {\n                    background-image: var(--custom-star, none);\n                }\n            }\n        }\n        &.yellow {\n            li {\n                &:before {\n                    background-image: url('./img/gtao-star-yellow.svg');\n                }\n            }\n        }\n        &.hotPink {\n            li {\n                &:before {\n                    background-image: url('./img/gtao-star-hot-pink.svg');\n                }\n            }\n        }\n        &.red {\n            li {\n                &:before {\n                    background-image: url('./img/gtao-star-red.svg');\n                }\n            }\n        }\n        &.turquoise {\n            li {\n                &:before {\n                    background-image: url('./img/gtao-star-turquoise.svg');\n                }\n            }\n        }\n        &.purple {\n            li {\n                &:before {\n                    background-image: url('./img/gtao-star-purple.svg');\n                }\n            }\n        }\n        &.teal {\n            li {\n                &:before {\n                    background-image: url('./img/gtao-star-teal.svg');\n                }\n            }\n        }\n        &.blue {\n            li {\n                &:before {\n                    background-image: url('./img/gtao-star-blue.svg');\n                }\n            }\n        }\n        &.green {\n            li {\n                &:before {\n                    background-image: url('./img/gtao-star-green.svg');\n                }\n            }\n        }\n        &.darkRed {\n            li {\n                &:before {\n                    background-image: url('./img/gtao-star-dark-red.svg');\n                }\n            }\n        }\n        &.darkBlue {\n            li {\n                &:before {\n                    background-image: url('./img/gtao-star-dark-blue.svg');\n                }\n            }\n        }\n        &.goldenrod {\n            li {\n                &:before {\n                    background-image: url('./img/gtao-star-goldenrod.svg');\n                }\n            }\n        }\n        &.skull {\n            li {\n                &:before {\n                    width: 12px;\n                    height: 100%;\n                    background-size: 105%;\n                    background-image: url('./img/gtao-star-skull.svg');\n                }\n            }\n        }\n    }\n\n    text-align: left;\n    span {\n        color: var(--list-color-span, inherit);\n        font-weight: var(--list-font-weight-span, inherit);\n    }\n\n    @media (max-width: 640px) {\n        width: auto;\n    }\n}\n", "/*\n * New Design System:\n * 1. Breakpoints\n * 2. Typography\n * 3. Variables\n * 4. Utility\n *     4.1 Flex\n *     4.2 Grid\n *     4.3 Max-Width\n *     4.4 Images\n *     4.5 Padding\n *     4.6 Fonts\n *     4.7 Games\n *     4.8 Tina\n *     4.9 Hacks\n * 5. Presentational\n */\n\n/* 1. Breakpoints */\n@screen-sm: 0px;\n@screen-md: 768px;\n@screen-lg: 1024px;\n@screen-xl: 1920px;\n@screen-xxl: 2560px;\n@sm-min-width: @screen-sm;\n@md-min-width: @screen-md;\n@lg-min-width: @screen-lg;\n@xl-min-width: @screen-xl;\n@xxl-min-width: @screen-xxl;\n@sm-max-width: (@md-min-width - 1px);\n@md-max-width: (@lg-min-width - 1px);\n@lg-max-width: (@xl-min-width - 1px);\n@xl-max-width: (@xxl-min-width - 1px);\n\n.sm(@rules) {\n    .smMin(@rules);\n}\n.smMin(@rules) {\n    @media (min-width: @sm-min-width) {\n        @rules();\n    }\n}\n.smMax(@rules) {\n    @media (max-width: @sm-max-width) {\n        @rules();\n    }\n}\n.smOnly(@rules) {\n    @media (min-width: @sm-min-width) and (max-width: @sm-max-width) {\n        @rules();\n    }\n}\n.md(@rules) {\n    .mdMin(@rules);\n}\n.mdMin(@rules) {\n    @media (min-width: @md-min-width) {\n        @rules();\n    }\n}\n.mdMax(@rules) {\n    @media (max-width: @md-max-width) {\n        @rules();\n    }\n}\n.mdOnly(@rules) {\n    @media (min-width: @md-min-width) and (max-width: @md-max-width) {\n        @rules();\n    }\n}\n.lg(@rules) {\n    .lgMin(@rules);\n}\n.lgMin(@rules) {\n    @media (min-width: @lg-min-width) {\n        @rules();\n    }\n}\n.lgMax(@rules) {\n    @media (max-width: @lg-max-width) {\n        @rules();\n    }\n}\n.lgOnly(@rules) {\n    @media (min-width: @lg-min-width) and (max-width: @lg-max-width) {\n        @rules();\n    }\n}\n.xl(@rules) {\n    .xlMin(@rules);\n}\n.xlMin(@rules) {\n    @media (min-width: @xl-min-width) {\n        @rules();\n    }\n}\n.xlMax(@rules) {\n    @media (max-width: @xl-max-width) {\n        @rules();\n    }\n}\n.xlOnly(@rules) {\n    @media (min-width: @xl-min-width) and (max-width: @xl-max-width) {\n        @rules();\n    }\n}\n.xxl(@rules) {\n    .xxlMin(@rules);\n}\n.xxlMin(@rules) {\n    @media (min-width: @xxl-min-width) {\n        @rules();\n    }\n}\n\n.notoBackup(@varName; @stdFont) {\n    @{varName}: @stdFont;\n\n    &:lang(ja_jp) {\n        @{varName}: @stdFont, NotoSansJP;\n    }\n    &:lang(zh_hans) {\n        @{varName}: @stdFont, NotoSansSC;\n    }\n    &:lang(zh_tw) {\n        @{varName}: @stdFont, NotoSansTC;\n    }\n}\n\n/* 2. Typography */\n.handleFontDeclarations() {\n    .notoBackup(--rsg-font-family-std, HelveticaNowText);\n    .notoBackup(--rsg-font-family-h, HelveticaNowDisplayBold);\n    .notoBackup(--gta-font-family-std, Chalet);\n    .notoBackup(--gta-font-family-h, ChaletComprime);\n    .notoBackup(--gta-font-family-badge, Pricedown);\n    .notoBackup(--rdr-font-family-std, HapnaSlabSerif);\n    .notoBackup(--rdr-font-family-h, RDRLino-Regular);\n    .notoBackup(--rdr-font-family-newswire-subtitle, HapnaSlabSerif);\n    .notoBackup(--rdr-area-font, RDRCatalogueBold);\n\n    --header-multiplier: var(--header-numerator, var(--root-font-size)) /\n        var(--root-font-size);\n    font-family: var(--font-family-std, HelveticaNowText);\n    font-weight: var(--font-weight-std, 400);\n    letter-spacing: var(--letter-spacing-std, -0.025em);\n    line-height: var(--line-height-std, 1.6);\n    font-size: calc(var(--root-font-size) * 1px);\n    -webkit-font-smoothing: antialiased;\n\n    h1.large,\n    h1,\n    h2,\n    h3,\n    h4 {\n        font-family: var(--font-family-h, HelveticaNowDisplayBold);\n        letter-spacing: var(--letter-spacing-h, -0.025em);\n    }\n    h1.large,\n    h1 {\n        font-weight: var(--font-weight-h1, var(--font-weight-h, 700));\n        text-transform: var(--text-transform-h1, var(--text-transform-h, none));\n        line-height: var(--line-height-h1, var(--line-height-h, 1.1));\n    }\n\n    h1.large {\n        font-size: calc(var(--font-size-8) * var(--header-multiplier));\n    }\n    h1 {\n        font-size: calc(var(--font-size-7) * var(--header-multiplier));\n    }\n    h2 {\n        font-size: calc(var(--font-size-6) * var(--header-multiplier));\n        font-weight: var(--font-weight-h2, var(--font-weight-h, 700));\n        text-transform: var(--text-transform-h2, var(--text-transform-h, none));\n        line-height: var(--line-height-h, 1.1);\n    }\n    h3 {\n        font-size: calc(var(--font-size-5) * var(--header-multiplier));\n        font-weight: var(--font-weight-h3, var(--font-weight-h, 700));\n        text-transform: var(--text-transform-h3, var(--text-transform-h, none));\n        line-height: var(--line-height-h, 1.1);\n\n        &[data-context='newswire-subtitle'] {\n            font-size: calc(\n                var(--font-size-5) *\n                    var(\n                        --h3-numerator-override-newswire-subtitle,\n                        var(--header-multiplier)\n                    )\n            );\n            font-weight: var(\n                --font-weight-newswire-subtitle,\n                var(--font-weight-h)\n            );\n            font-family: var(\n                --font-family-newswire-subtitle,\n                var(--font-family-h)\n            );\n            text-transform: var(--text-transform-newswire-subtitle);\n        }\n\n        .isRdr({\n            font-weight: var(--font-weight-h3, var(--font-weight-h, 400));\n        });\n    }\n\n    h4,\n    h5,\n    h6 {\n        font-size: calc(var(--font-size-4) * var(--header-multiplier));\n        line-height: var(--line-height-h, 1.1);\n    }\n}\n\n.handleColors() {\n    h1.large,\n    h1 {\n        color: var(--color-h-dynamic, var(--color-h1, var(--color-h, inherit)));\n    }\n    h2 {\n        color: var(--color-h-dynamic, var(--color-h2, var(--color-h, inherit)));\n    }\n    h3 {\n        color: var(--color-h-dynamic, var(--color-h3, var(--color-h, inherit)));\n\n        &[data-context='newswire-subtitle'] {\n            color: var(\n                --color-subtitle-dynamic,\n                var(--color-h-dynamic, var(--color-h3, var(--color-h, inherit)))\n            );\n        }\n    }\n    h4,\n    h5,\n    h6 {\n        color: var(--color-h-dynamic, var(--color-h, inherit));\n    }\n    background-color: var(--background-color, transparent);\n\n    [template='community'] {\n        --time-color: var(--body-color, #2d2d2d);\n        --breadcrumb-separator-filter-invert: invert(0);\n\n        main {\n            color: var(--color-h, #161616);\n        }\n        p {\n            color: var(--body-color, #2d2d2d);\n        }\n    }\n}\n\n/* 3. Variables */\n.resetVariables() {\n    --text-section-max-width: 640px;\n    --base-pixel-size: 12px;\n    --base-rem-size: 0.75rem;\n    --half-rem-size: calc(var(--base-rem-size) / 2);\n    --twice-rem-size: calc(var(--base-rem-size) * 2);\n    --section-margin-bottom: calc(var(--base-rem-size) * 4);\n    --header-height: 80px;\n    --breadcrumbs-height: calc(var(--base-pixel-size) * 3.5);\n    --max-width: 1920px;\n    --standard-color: #fcaf17;\n    --color-h: #ffffff;\n    --body-color: #e8e8e8;\n    --background-color: #0b0b0b;\n    --card-background-color: #000;\n    --border-color: #282828;\n    --privacy-banner-height: 0px;\n    --game-header-height: 50px;\n    --standard-grid-gap: calc(var(--base-rem-size) * 2);\n    --image-margin-bottom: inherit;\n    --image-rounding: 0px;\n    --image-rounding-static: 16px;\n    --image-rounding-static-sm: 8px;\n    --image-rounding-static-xs: 4px;\n\n    --grid-gap-static-xs: 0.5rem;\n    --grid-gap-static-sm: 1rem;\n    --grid-gap-static-md: 2rem;\n    --grid-gap-static-lg: 4rem;\n    --grid-gap-static-xl: 8rem;\n    .smMax({--grid-gap-static-lg: 2rem; --grid-gap-static-xl: 4rem;});\n\n    --max-width-static: 640px;\n    --max-width-static-md: 1088px;\n    --max-width-static-lg: 1920px;\n    --max-width-static-xl: 2560px;\n    .xxlMin({--max-width-static-md: 1440px;});\n\n    --margin-static: 0 0 2rem;\n    --h2-margin: 2rem 0 0 0;\n\n    --padding-sides: var(--grid-gap-static-lg);\n    --padding-top-bottom: var(--padding-sides);\n    --padding-static: var(--padding-sides);\n}\n\n/* 4. Utility */\n/* 4.1 Flex */\n.flex() {\n    display: flex;\n    flex-flow: column;\n}\n.horizontalCenterChildren() {\n    display: flex;\n    justify-content: center;\n}\n.verticalCenterChildren() {\n    display: flex;\n    align-items: center;\n}\n.flexCenterChildren() {\n    .horizontalCenterChildren();\n    .verticalCenterChildren();\n}\n\n/* 4.2 Grid */\n.gridMinWidth(@minWidth: 480px; @rowGap: var(--standard-grid-gap); @colGap: var(--standard-grid-gap); @autoType: 'auto-fit') {\n    display: grid;\n    grid-row-gap: @rowGap;\n    grid-column-gap: @colGap;\n    grid-template-columns: ~'repeat(@{autoType}, minmax(@{minWidth}, 1fr))';\n}\n.gridHideExtraRows(@colGap: var(--standard-grid-gap)) {\n    ::-webkit-scrollbar {\n        display: none;\n    }\n    -ms-overflow-style: none;\n    display: grid;\n    grid-auto-flow: column;\n    grid-column-gap: @colGap;\n    overflow-y: hidden;\n    scroll-snap-type: x mandatory;\n    > * {\n        scroll-snap-align: start;\n    }\n    --per-page: 4;\n    .lgMax({--per-page: 3;});\n    .mdMax({--per-page: 2;});\n    .smMax({--per-page: 1;});\n\n    grid-auto-columns: calc(\n        100% / var(--per-page) - (var(--per-page) - 1) / var(--per-page) *\n            @colGap\n    );\n}\n.gridNumCols(@numInitialItems) {\n    display: grid;\n    grid-gap: var(--standard-grid-gap);\n    .smMax({grid-template-columns: repeat(1, minmax(0px, 1fr)) ;});\n    @media screen and (min-width: @screen-sm) and (max-width: @md-max-width) {\n        grid-template-columns: repeat(2, minmax(0px, 1fr));\n    }\n    @media screen and (min-width: @screen-lg) {\n        grid-template-columns: repeat(4, minmax(0px, 1fr));\n    }\n}\n.gridNumColsSmall(@colGap: var(--padding-top-bottom); @rowGap: var(--padding-top-bottom)) {\n    display: grid;\n    grid-row-gap: @rowGap;\n    grid-column-gap: @colGap;\n    grid-template-columns: repeat(1, minmax(0px, 1fr));\n    .md({grid-template-columns: repeat(2, minmax(0px, 1fr)) ;});\n}\n\n.standardLayoutGridItem(@maxWidth: var(--max-width-static-md), @padding: var(--padding-static)) {\n    .handleMaxWidth(@maxWidth);\n    .handlePadding(@padding);\n}\n\n.handleGridStyles(@grid-gap-dynamic: var(--grid-gap-static-md)) {\n    --grid-gap-dynamic: @grid-gap-dynamic;\n    display: grid;\n    grid-template-columns: repeat(var(--grid-num-columns, 1), minmax(0px, 1fr));\n    grid-template: var(\n        --grid-template-override,\n        auto / repeat(var(--grid-num-columns, 1), minmax(0, 1fr))\n    );\n    grid-gap: var(--grid-gap-dynamic);\n    align-items: var(--grid-align-items);\n    align-content: var(--grid-align-content);\n    align-self: var(--grid-align-self);\n    justify-items: var(--grid-justify-items);\n    justify-content: var(--grid-justify-content);\n    justify-self: var(--grid-justify-self);\n}\n\n/* 4.3 Max-Width */\n.maxWidth(@padding: 0) {\n    max-width: var(--max-width);\n    width: 100%;\n    margin: 0 auto;\n    padding-left: @padding;\n    padding-right: @padding;\n}\n.maxWidthWithNormalPadding() {\n    .maxWidth(var(--padding-sides));\n}\n\n.handleMaxWidth(@max-width-default: 1000000px) {\n    width: 100%;\n    max-width: calc(\n        var(--max-width-dynamic, @max-width-default) +\n            var(--padding-dynamic, 0px) * 2\n    ) !important;\n    margin: 0 auto;\n}\n\n.breakout(@max-width-default: 100vw) {\n    @margin: calc((@max-width-default / 2) * -1);\n    width: @max-width-default;\n    max-width: @max-width-default !important;\n    position: relative;\n    left: 50%;\n    right: 50%;\n    margin-left: @margin;\n    margin-right: @margin;\n}\n\n.fullWidth() {\n    .breakout;\n}\n\n/* 4.4 Images */\n.handleAspectRatio() {\n    --aspect-ratio-default: 1;\n    .lgMin({\n        --aspect-ratio-default: 16/9;\n    });\n\n    position: relative;\n    &:before {\n        content: '';\n        height: 0;\n        width: 100%;\n        display: block;\n        padding-bottom: calc(\n            100% / calc(var(--aspect-ratio, var(--aspect-ratio-default)))\n        );\n    }\n    > * {\n        position: absolute;\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 100%;\n    }\n}\n.setAspectRatio(@ratio) {\n    --aspect-ratio: @ratio;\n    .handleAspectRatio;\n}\n\n.handleParallaxPerspective() {\n    position: fixed;\n    width: 100%;\n    height: 100%;\n    overflow-x: hidden;\n    overflow-y: scroll;\n    perspective: var(--parallax-perspective);\n    perspective-origin: 0 0;\n}\n.handleParallaxDistance() {\n    transform: translateZ(var(--parallax-distance))\n        scale(\n            calc(\n                (var(--parallax-perspective) - var(--parallax-distance)) /\n                    var(--parallax-distance)\n            )\n        );\n}\n\n.handleImageRounding() {\n    border-radius: var(--image-rounding-dynamic, 0px);\n}\n\n/* 4.5 Padding */\n.handlePadding(@paddingSides: initial, @paddingTopBottom: initial) {\n    --padding-dynamic: @paddingSides;\n    --padding-dynamic-tb: @paddingTopBottom;\n\n    padding: var(--padding-t, var(--padding-dynamic-tb, 0))\n        var(--padding-dynamic, 0) var(--padding-b, var(--padding-dynamic-tb, 0))\n        var(--padding-dynamic, 0);\n}\n\n/* 4.6 Fonts */\n.loadFont(@family, @weight: 400, @style: normal, @file: @family) {\n    @font-face {\n        font-family: @family;\n        font-style: @style;\n        font-weight: @weight;\n        src: url('../fonts/@{file}.woff') format('woff');\n    }\n}\n.loadFontWoff2(@family, @weight: 400, @style: normal, @file: @family) {\n    @font-face {\n        font-family: @family;\n        font-style: @style;\n        font-weight: @weight;\n        src: url('../fonts/@{file}.woff2') format('woff2');\n    }\n}\n.fontClip(@backgroundImg) {\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n    @backgroundImg();\n}\n\n/* 4.7 Games */\n.gta(@rules) {\n    [data-game^='gta'] {\n        @rules();\n    }\n}\n\n.isGta(@rules) {\n    [data-game^='gta'] & {\n        @rules();\n    }\n}\n\n.rdr(@rules) {\n    [data-game='rdo'],\n    [data-game^='rdr'] {\n        @rules();\n    }\n}\n\n.isRdr(@rules) {\n    [data-game='rdo'] &,\n    [data-game^='rdr'] & {\n        @rules();\n    }\n}\n\n/* 4.8 Tina */\n.tinaTextField() {\n    padding: var(--tina-padding-small);\n    border-radius: var(--tina-radius-small);\n    background: var(--tina-color-grey-0);\n    color: var(--tina-color-grey-10);\n    background-color: var(--tina-color-grey-0);\n    border: 1px solid var(--tina-color-grey-2);\n    box-shadow: 0 0 0 2px transparent;\n    margin-bottom: 14px;\n}\n\n/* 4.9 Hacks */\n.safariBorderRadiusOverflowFix() {\n    // https://stackoverflow.com/questions/49066011/overflow-hidden-with-border-radius-not-working-on-safari\n    -webkit-mask-image: -webkit-radial-gradient(white, black);\n}\n\n.forceGpuRendering() {\n    // https://web.dev/animations-guide/#force\n    transform: translateZ(0);\n}\n\n/* 5. Presentational */\n@locales: en_us, fr_fr, de_de, es_es, es_mx, it_it, pt_br, pl_pl, ru_ru, ja_jp,\n    ko_kr, zh_tw, zh_hans;\n\n.placeholder(@rules) {\n    &::-webkit-input-placeholder {\n        @rules();\n    }\n    &:-moz-placeholder {\n        @rules();\n    }\n    &::-moz-placeholder {\n        @rules();\n    }\n    &:-ms-input-placeholder {\n        @rules();\n    }\n}\n\n.bgImg() {\n    background-size: cover;\n    background-position: center center;\n    background-repeat: no-repeat;\n}\n\n.themeDark() {\n    color: #e8e8e8;\n    --tag-color: #e8e8e8;\n}\n\n.outbound() {\n    content: '';\n    display: inline-block;\n    background-size: 100%;\n    background-repeat: no-repeat;\n    background-position: 0% 50%;\n    vertical-align: baseline;\n    margin-left: var(--grid-gap-static-xs);\n    width: 1rem;\n    height: 1rem;\n    background-image: data-uri('../img/outbound.svg');\n}\n\n.blurryBg() {\n    transition: filter 0.8s;\n    filter: blur(var(--blur-because-in-bg, 0px));\n}\n\n.fancyLink() {\n    position: relative;\n    background: transparent;\n    padding: 0;\n    z-index: 1;\n    @media (min-width: @screen-sm) {\n        transition: all 0.2s ease;\n        &:before {\n            content: '';\n            display: block;\n            position: absolute;\n            bottom: 0;\n            left: -0.1rem;\n            width: calc(100% + 0.2rem);\n            height: 2px;\n            background: var(--body-color);\n            transition: all 0.2s ease;\n            z-index: -1;\n            border-radius: 0.25rem;\n        }\n        &:hover {\n            color: #161616;\n\n            &:before {\n                left: -0.25rem;\n                width: calc(100% + 0.5rem);\n                height: 100%;\n            }\n        }\n    }\n    img {\n        display: block;\n    }\n}\n.stdHover() {\n    transition:\n        color 0.2s ease,\n        opacity 0.2s ease;\n    &:hover {\n        color: var(--standard-color);\n        opacity: 1;\n    }\n}\n.stdIconHover() {\n    &:hover {\n        filter: brightness(0) saturate(100%) invert(76%) sepia(15%)\n            saturate(5173%) hue-rotate(348deg) brightness(105%) contrast(98%);\n    }\n}\n.card() {\n    .handleImageRounding;\n    --image-rounding-dynamic: var(--image-rounding-static-sm);\n    background: var(--card-background-color);\n    overflow: hidden;\n    display: flex;\n    flex-flow: column;\n    transition: transform 0.2s ease;\n    border: 1px solid var(--border-color);\n    .info {\n        .handleGridStyles;\n        --grid-gap-dynamic: var(--grid-gap-static-xs);\n        padding: 2rem 1.5rem;\n        .title {\n            --line-height-h: 1.3;\n            color: var(--color-h);\n        }\n    }\n}\n\n.cardHover() {\n    transition:\n        transform 0.3s cubic-bezier(0, 0, 0.5, 1),\n        box-shadow 0.3s cubic-bezier(0, 0, 0.5, 1);\n    box-shadow: 0px 0px 40px -25px rgba(0, 0, 0, 0);\n\n    &:hover {\n        transform: scale(1.025);\n        box-shadow: 0px 30px 40px -25px rgba(0, 0, 0, 1);\n    }\n}\n\n.cardSecondary() {\n    .card();\n    .info {\n        padding: 1.5rem;\n    }\n    .title {\n        font-size: var(--font-size-3);\n        font-weight: 400;\n    }\n}\n\n.cardTertiary() {\n    .cardSecondary();\n    --image-rounding-dynamic: 0;\n    --card-background-color: transparent;\n    grid-gap: var(--grid-gap-static-sm);\n    overflow: unset;\n    border: none;\n    .info {\n        padding: 0;\n    }\n    .img {\n        .handleImageRounding;\n        --image-rounding-dynamic: var(--image-rounding-static-sm);\n    }\n}\n\n.standardPage() {\n    .maxWidthWithNormalPadding;\n    padding-top: var(--padding-top-bottom);\n    padding-bottom: var(--padding-top-bottom);\n}\n\n.dropdownThing(@defaultDeg: 0deg; @openDeg: 180deg) {\n    position: relative;\n    padding-right: calc(var(--grid-gap-static-xs) + 24px);\n    .dropdownCaret(yellow; @defaultDeg; @openDeg);\n}\n.dropdownCaret(@color; @defaultDeg: 0deg; @openDeg: 180deg) {\n    &:after {\n        display: inline-block;\n        content: '';\n        position: absolute;\n        top: 0;\n        right: 0;\n        @img: '../img/dropdown-@{color}.svg';\n        background-image: data-uri(@img);\n        background-repeat: no-repeat;\n        width: image-width(@img);\n        height: 100%;\n        background-position: center;\n        background-size: 100%;\n        transform: rotate(@defaultDeg);\n        transition: transform 0.3s;\n        .open& {\n            transform: rotate(@openDeg);\n        }\n    }\n}\n\n.sectionHeader() {\n    margin: 0 0 1.5rem;\n    font-size: var(--font-size-5);\n    font-family: var(--font-family-h);\n    font-weight: var(--font-weight-h);\n    --line-height-h: 1.3;\n\n    .xlMin ({\n        font-size: var(--font-size-6);\n    });;\n}\n.sectionHeaderSmall() {\n    .sectionHeader;\n    font-size: var(--font-size-4);\n\n    .xlMin ({\n        font-size: var(--font-size-5);\n    });;\n}\n\n.tag() {\n    color: var(--tag-color, var(--body-color));\n    font-weight: 700;\n    font-size: var(--font-size-2);\n    line-height: 1.6;\n}\n\n.date() {\n    .tag;\n    font-weight: 400;\n    opacity: 0.65;\n}\n.animationFadeInUp() {\n    :global {\n        animation: globalFadeInUp 0.75s;\n        animation-play-state: paused;\n    }\n}\n.animationPaused() {\n    animation-play-state: paused;\n}\n.animationRunning() {\n    animation-play-state: running;\n}\n\n.button() {\n    font-weight: 700;\n    align-self: center;\n    display: inline-block;\n    text-transform: uppercase;\n    background: transparent;\n    border: 1px solid var(--color-h);\n    padding: 1rem 3rem;\n    color: inherit;\n    cursor: pointer;\n    border-radius: 0.25rem;\n    color: var(--color-h);\n    line-height: 100%;\n    transition: all 0.2s ease;\n    &:focus,\n    &:hover {\n        background: var(--standard-color);\n        border-color: var(--standard-color);\n        color: #161616;\n    }\n    &.secondary {\n        .fancyLink;\n        outline: none;\n        border: none;\n        text-transform: none;\n        font-weight: 400;\n        line-height: unset;\n        .smMin ({\n            &:before {\n                background: var(--standard-color);\n                height:4px;\n            }\n            &:focus,\n            &:hover {\n                &:before {\n                    left: -0.5rem;\n                    width: calc(100% + 1rem);\n                    height: 100%;\n                }\n            }\n         });;\n    }\n    &[disabled] {\n        opacity: 0.5;\n    }\n}\n\n.expandToEdges() {\n    margin-top: calc(var(--padding-top-bottom) * -1);\n    margin-left: calc(var(--padding-sides) * -1);\n    width: 100vw;\n    width: calc(100% + calc(var(--padding-sides) * 2));\n}\n\n.shadow(@boxShadow: 0 10px 30px rgba(0, 0, 0, 0.5)) {\n    // border: 1px solid rgba(0, 0, 0, 0.15);\n    box-shadow: @boxShadow;\n}\n.shadowTop() {\n    box-shadow: -3px -3px 6px 0 rgba(0, 0, 0, 0.2);\n}\n\n.aspect-ratio(@width, @height, @selector: div, @pre: ~'') {\n    @supports not (aspect-ratio: @width / @height) {\n        position: relative;\n        &:before {\n            display: block;\n            content: '';\n            width: 100%;\n            padding-top: calc((@height / @width) * 100%);\n        }\n        > @{pre}@{selector} {\n            position: absolute;\n            top: 0;\n            left: 0;\n            right: 0;\n            bottom: 0;\n            width: 100% !important;\n            height: 100% !important;\n        }\n    }\n\n    @supports (aspect-ratio: @width / @height) {\n        @{pre}@{selector} {\n            aspect-ratio: @width / @height !important;\n            width: 100% !important;\n            height: auto !important;\n        }\n    }\n}\n.unset-aspect-ratio(@selector, @pre: ~'') {\n    @supports not (aspect-ratio: 1/1) {\n        position: unset;\n        &:before {\n            display: none;\n        }\n        > @{pre}@{selector} {\n            position: unset;\n            width: 100% !important;\n            height: unset !important;\n        }\n    }\n\n    @supports (aspect-ratio: 1/1) {\n        @{pre}@{selector} {\n            aspect-ratio: unset !important;\n        }\n    }\n}\n\n.rockstarTypography() {\n    --font-family-std: NeueHelveticaPaneuropean, sans-serif;\n    --leter-spacing-std: 0;\n\n    font-size: var(--font-size-2);\n    font-family: var(--font-family-std);\n    letter-spacing: var(--leter-spacing-std);\n\n    button {\n        letter-spacing: var(--leter-spacing-std);\n    }\n}\n\n.setNodeFontSizing() {\n    // TODO audit this. .5rem is very small.\n    --font-size-1: 0.75rem;\n\n    --font-size-2: 0.75rem;\n    --font-size-3: 1rem;\n    --font-size-4: 1.25rem;\n    --font-size-5: 1.5rem;\n    --font-size-6: 2rem;\n    --font-size-7: 2.5rem;\n    --font-size-8: 3rem;\n    --font-size-9: 4rem;\n    --font-size-10: 5rem;\n}\n\n.setRootFontSizing() {\n    .sm({--root-font-size: 16;});\n    .md({--root-font-size: 18;});\n    .lg({--root-font-size: 20;});\n    .xl({--root-font-size: 22;});\n}\n\n.button-text () {\n    font-size: var(--font-size-4);\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-sm);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-h);\n    text-transform: uppercase;\n}\n\n.button-text-sm () {\n    .button-text;\n    font-size: var(--font-size-3);\n}\n\n.button-text-md () {\n    .button-text;\n    font-size: var(--font-size-4);\n    padding: 0 var(--padding-md);\n}\n\n.button-text-lg () {\n    .button-text;\n    font-size: var(--font-size-5);\n    padding: 0 var(--padding-lg);\n}\n\n.button-text-xl () {\n    .button-text;\n    font-size: var(--font-size-7);\n    padding: 0 var(--padding-xl);\n}\n\n.cta-button() {\n    @import '../less/gen9-vars';\n\n    --button-text-color-hover: var(--white-100);\n\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: center;\n    gap: var(--grid-gap-xs, 0.5rem);\n\n    background: var(\n        --button-background-color,\n        var(--black-65, hsla(0, 0%, 7%, 0.65))\n    );\n    border: 1px solid var(--white-100, #fff);\n    border-radius: var(--border-radius-sm, 4px);\n    color: var(--button-text-color, var(--white-100));\n    cursor: pointer;\n    padding: 0 var(--padding-sm);\n\n    width: 100%;\n    height: var(--button-height-3, 3rem);\n\n    transition: all 0.3s ease-in-out;\n\n    &[data-brand='reddeadredemption'],\n    [data-brand='reddeadredemption'] & {\n        --accent-color: #cc0000;\n        --font-family-h: RDRUltra;\n\n        :lang(pl_pl) {\n            --font-family-h: RDRUltra, NeueHelveticaPaneuropean;\n        }\n    }\n\n    &[data-brand='bully'],\n    [data-brand='bully'] & {\n        --accent-color: #f8ad00;\n        --font-family-h: HelveticaNowDisplayBold;\n        --button-background-color: var(--white-100);\n        --button-background-color-hover: var(--accent-color);\n        --button-text-color: var(--black-100);\n        --button-text-color-hover: var(--black-100);\n\n        backdrop-filter: blur(25px);\n        padding: 0 var(--padding-md, 32px);\n    }\n\n    img {\n        height: 1rem;\n        width: auto;\n    }\n\n    .label {\n        .button-text();\n        display: flex;\n        flex-shrink: 0;\n    }\n\n    &.primary {\n        color: var(--black-100);\n        background-color: var(--white-100);\n    }\n\n    &:hover {\n        border-color: var(--accent-color, var(--btn-active-color));\n        background-color: var(--accent-color, var(--btn-active-color));\n        color: var(--button-text-color-hover, var(--btn-active-color));\n\n        &.primary {\n            color: var(--button-text-color-hover, var(--white-100));\n        }\n    }\n\n    @media (min-width: 1280px) {\n        padding: 0 var(--padding-md);\n    }\n\n    @media (min-width: 768px) and (max-width: 1539px) {\n        height: 2.5rem;\n\n        img {\n            height: 1rem;\n        }\n\n        .label {\n            .button-text-sm();\n        }\n    }\n}\n"],
        sourceRoot: ""
      }]), C.locals = {
        pillBtn: "rockstargames-modules-core-newswire-articlec1ed14af6fceaba7c99728a81676dd92",
        selected: "rockstargames-modules-core-newswire-articlee49b5a5fd4ab934ece172fffe9f6577e",
        grid: "rockstargames-modules-core-newswire-articlebe627ae18a7bd3cff72d3f11aeed67df",
        itemList: "rockstargames-modules-core-newswire-articled9620ae764026da5584e0f0a5886c992",
        gtaplus: "rockstargames-modules-core-newswire-articlefbf343ed03c1bd513ea4cadc9726af76",
        rdo: "rockstargames-modules-core-newswire-articleb2194fe129aa210950dcb07b88a28c13",
        noImg: "rockstargames-modules-core-newswire-articlebbb7247d5d7a836d755491e85639f1a3",
        gtao: "rockstargames-modules-core-newswire-articleffaf58c543b36fd7fb4efec24b3564bc",
        custom: "rockstargames-modules-core-newswire-articlecc2c26a3dd80cf9db62c4c7f389b7859",
        yellow: "rockstargames-modules-core-newswire-articlece372826eac3cc73094d69c0c5d9a530",
        hotPink: "rockstargames-modules-core-newswire-articleedb9998d6516a5aa1aece9c07c1768be",
        red: "rockstargames-modules-core-newswire-articlef674d6037f10af1a1fe41a83c1e5da17",
        turquoise: "rockstargames-modules-core-newswire-articlee211b0b8ae00897d696af259b3ddd837",
        purple: "rockstargames-modules-core-newswire-articlee61db4af0805bb4c9bf820c26ac8a85f",
        teal: "rockstargames-modules-core-newswire-articlea379d41268f4f002d5ac257f67461f1d",
        blue: "rockstargames-modules-core-newswire-articlebffe0939bda9e26ad14f6b01669338a8",
        green: "rockstargames-modules-core-newswire-articlef9c1eebf59650cd8ee84191d8fc62874",
        darkRed: "rockstargames-modules-core-newswire-articled44e2fc53f269ccf2b8fbe032ef6cec9",
        darkBlue: "rockstargames-modules-core-newswire-articlee2b6f722952b5d61d2a3b725166bfc9b",
        goldenrod: "rockstargames-modules-core-newswire-articlea365c5895cfd6c9f94fc994d71ba402c",
        skull: "rockstargames-modules-core-newswire-articleb2a1c0b367b250fe0606dffece9e1c02"
      };
      const P = C
    },
    65445: (e, n, a) => {
      "use strict";
      a.d(n, {
        A: () => d
      });
      var r = a(42587),
        i = a.n(r),
        t = a(15081),
        o = a.n(t)()(i());
      o.push([e.id, ".rockstargames-modules-core-newswire-articlef642b754e0efd503262ab7ca0c7b9f5b{background-position:50%;background-repeat:no-repeat;background-size:contain;background-size:cover}", "", {
        version: 3,
        sources: ["webpack://./../../buildtime/components/src/dom/ResponsiveImg/index.less"],
        names: [],
        mappings: "AAEA,6EAMI,uBAAA,CADA,2BAAA,CADA,uBAAA,CAGA,qBA2BJ",
        sourcesContent: ["@import '@rsgweb/legacy-design-system/less/mixins.less';\n\n.responsiveImage {\n    // This can't be here, it messes with the positioning of anything in --aspect-ratio\n    // position: relative;\n\n    background-size: contain;\n    background-repeat: no-repeat;\n    background-position: center;\n    background-size: cover;\n}\n"],
        sourceRoot: ""
      }]), o.locals = {
        responsiveImage: "rockstargames-modules-core-newswire-articlef642b754e0efd503262ab7ca0c7b9f5b"
      };
      const d = o
    },
    76227: (e, n, a) => {
      "use strict";
      a.d(n, {
        A: () => d
      });
      var r = a(42587),
        i = a.n(r),
        t = a(15081),
        o = a.n(t)()(i());
      o.push([e.id, ".rockstargames-modules-core-newswire-articlec3a08254db141676fff1ac7bf9484218{display:none}@media (min-width:768px){.rockstargames-modules-core-newswire-articlec3a08254db141676fff1ac7bf9484218{display:var(--display-original,block)}}.rockstargames-modules-core-newswire-articled38319419aba2f42e721ab08a26208fb{display:var(--display-original,block)}@media (min-width:768px){.rockstargames-modules-core-newswire-articled38319419aba2f42e721ab08a26208fb{display:none}}.rockstargames-modules-core-newswire-articlede4a014046acaad99dc53bb2c03f8719{display:var(--display-original,block)}@media (min-width:0px){.rockstargames-modules-core-newswire-articlede4a014046acaad99dc53bb2c03f8719{display:none}.rockstargames-modules-core-newswire-articleb540a7274484859d8ab14a6c04f62b4f{display:var(--display-original,block)}}.rockstargames-modules-core-newswire-articlef1c15a75853dbb6189625b636a6d1baf{display:var(--display-original,block)}@media (min-width:768px){.rockstargames-modules-core-newswire-articlef1c15a75853dbb6189625b636a6d1baf{display:none}.rockstargames-modules-core-newswire-articled6cabd1c7dce349d9e7e1598ead4503e{display:var(--display-original,block)}}.rockstargames-modules-core-newswire-articlee53c219095a6cea2942bb53c4bf66259{display:var(--display-original,block)}@media (min-width:1024px){.rockstargames-modules-core-newswire-articlee53c219095a6cea2942bb53c4bf66259{display:none}.rockstargames-modules-core-newswire-articlea0529cc3561a81f9b96939b579caa623{display:var(--display-original,block)}}.rockstargames-modules-core-newswire-articleb104796d98a3d67dde4b44e2c676b08e{display:var(--display-original,block)}@media (min-width:1920px){.rockstargames-modules-core-newswire-articleb104796d98a3d67dde4b44e2c676b08e{display:none}.rockstargames-modules-core-newswire-articlee13f7a8d45b3fec8db6dedc3321f89f2{display:var(--display-original,block)}}.rockstargames-modules-core-newswire-articled1034e839209be1d4f103fc2c29bf531{display:var(--display-original,block)}@media (min-width:2560px){.rockstargames-modules-core-newswire-articled1034e839209be1d4f103fc2c29bf531{display:none}.rockstargames-modules-core-newswire-articled350dc14eb32714ed0230fe9f53591cd{display:var(--display-original,block)}}.rockstargames-modules-core-newswire-articled506082984d54d056e358cfbc0dde795{left:50%;margin-left:calc((100vw / 2) * -1);margin-right:calc((100vw / 2) * -1);max-width:100vw!important;position:relative;right:50%;width:100vw}@media (max-width:767px){.rockstargames-modules-core-newswire-articlefc45ea13bab881368ae51d327eb77243{display:flex;flex-direction:column-reverse}}.rockstargames-modules-core-newswire-articlef2fa26d0f173f3d967cd339102390c4a{align-items:center;display:flex;justify-content:center}.rockstargames-modules-core-newswire-articledef459f80eeef54bcb18d93a9ed91ef7{--padding-dynamic:var(--padding-static)}@media (min-width:1024px){.rockstargames-modules-core-newswire-articledef459f80eeef54bcb18d93a9ed91ef7{--padding-dynamic:0}}.rockstargames-modules-core-newswire-articledeff228b0e0b37e77569d72317854418{--padding-dynamic:0}@media (min-width:1024px){.rockstargames-modules-core-newswire-articledeff228b0e0b37e77569d72317854418{--padding-dynamic:var(--padding-static)}}.rockstargames-modules-core-newswire-articleba39f5e2ce30b99a045454ac97a6f707{background:#fff;height:2px;margin-top:var(--grid-gap-static-sm);width:100%}@media (max-width:1023px){.rockstargames-modules-core-newswire-articleba39f5e2ce30b99a045454ac97a6f707{margin-top:var(--grid-gap-static-xs)}}.rockstargames-modules-core-newswire-articleba39f5e2ce30b99a045454ac97a6f707.rockstargames-modules-core-newswire-articleadff1577bb3952ea5b448144560148e1{background:linear-gradient(96deg,#977b52 18%,#ded0a4 51%,#b19b6b 85%)}.rockstargames-modules-core-newswire-articled17c20c4aa402388a4d4b23d6ff41a3b{--image-rounding:0px;margin:0 auto;max-width:calc(var(--max-width-dynamic, 1000000px) + var(--padding-dynamic, 0px) * 2)!important;overflow:hidden}.rockstargames-modules-core-newswire-articled17c20c4aa402388a4d4b23d6ff41a3b,.rockstargames-modules-core-newswire-articleaa419a38f6bffb372db81c2df3ec23ae{max-height:70vh;min-height:30vw;width:100%}.rockstargames-modules-core-newswire-articleaa419a38f6bffb372db81c2df3ec23ae{background-size:contain!important}.rockstargames-modules-core-newswire-articlee70c0545b9c94794421dac5b59959c39{margin:0 auto}", "", {
        version: 3,
        sources: ["webpack://./../../buildtime/legacy-design-system/less/global-exposed.less", "webpack://./src/components/HeroImage/index.less", "webpack://./../../buildtime/legacy-design-system/less/mixins.less"],
        names: [],
        mappings: "AAAA,6EACI,YCgCJ,CCuBI,yBAAA,6EFtDK,qCCmCP,CACF,CDlCA,6EACI,qCCoCJ,CCeI,yBAAA,6EFlDK,YCuCP,CACF,CDrCA,6EACI,qCCuCJ,CCXI,uBAAA,6EF3BQ,YC0CV,CCfE,6EFvBQ,qCC2CV,CAJF,CDpCA,6EACI,qCC2CJ,CCNI,yBAAA,6EFpCQ,YC8CV,CCVE,6EFhCQ,qCC+CV,CAJF,CDxCA,6EACI,qCC+CJ,CCDI,0BAAA,6EF7CQ,YCkDV,CCLE,6EFzCQ,qCCmDV,CAJF,CD5CA,6EACI,qCCmDJ,CCII,0BAAA,6EFtDQ,YCsDV,CCAE,6EFlDQ,qCCuDV,CAJF,CDhDA,6EACI,qCCuDJ,CCSI,0BAAA,6EF/DS,YC0DX,CCKE,6EF3DS,qCC2DX,CAJF,CDpDA,6EE0WI,QAAA,CAEA,kCAAA,CACA,mCAAA,CALA,yBAAA,CACA,iBAAA,CAEA,SAAA,CAJA,WDrSJ,CC7EI,yBAAA,6EFyBI,YAAA,CADA,6BC0DN,CACF,CDtDA,6EEgPI,kBAAA,CADA,YAAA,CAHA,sBDjLJ,CDvDA,6EACI,uCCyDJ,CC5DI,0BAAA,6EFIS,mBC4DX,CACF,CD1DA,6EACI,mBC4DJ,CCpEI,0BAAA,6EFSS,uCC+DX,CACF,CD7DA,6EAGI,eAAA,CADA,UAAA,CAEA,oCAAA,CAHA,UCkEJ,CC5FI,0BAAA,6EFgCI,oCCgEN,CACF,CD9DI,yJACI,qECgER,CA9JA,6EACI,oBAAA,CCoZA,aAAA,CAJA,+FAAA,CD9YA,eAoKJ,CA/JA,0JAJI,eAAA,CACA,eAAA,CC2YA,UDnOJ,CArKA,6EAII,iCAiKJ,CA5JA,6EACI,aA8JJ",
        sourcesContent: [".hiddenMobile {\n    display: none;\n    .md({display: var(--display-original, block) ;});\n}\n.hiddenLarge {\n    display: var(--display-original, block);\n    .md({display: none;});\n}\n\n.hidden-sm {\n    display: var(--display-original, block);\n    .smMin({display: none;});\n}\n\n.show-sm {\n    .smMin({display: var(--display-original, block) ;});\n}\n\n.hidden-md {\n    display: var(--display-original, block);\n    .mdMin({display: none;});\n}\n\n.show-md {\n    .mdMin({display: var(--display-original, block) ;});\n}\n\n.hidden-lg {\n    display: var(--display-original, block);\n    .lgMin({display: none;});\n}\n\n.show-lg {\n    .lgMin({display: var(--display-original, block) ;});\n}\n\n.hidden-xl {\n    display: var(--display-original, block);\n    .xlMin({display: none;});\n}\n\n.show-xl {\n    .xlMin({display: var(--display-original, block) ;});\n}\n\n.hidden-xxl {\n    display: var(--display-original, block);\n    .xxlMin({display: none;});\n}\n\n.show-xxl {\n    .xxlMin({display: var(--display-original, block) ;});\n}\n\n.full-width {\n    .fullWidth();\n}\n\n.fullWidthPadding() {\n    .fullWidth();\n    --padding-dynamic: calc((100vw - var(--max-width-static)) / 2);\n    padding-left: var(--padding-dynamic);\n    padding-right: var(--padding-dynamic);\n}\n\n.reverse-mobile {\n    .smMax({\n        flex-direction: column-reverse;\n        display: flex;\n    });\n}\n\n.center-children {\n    .flexCenterChildren();\n}\n\n.std-padding-mobile-desktop-none {\n    --padding-dynamic: var(--padding-static);\n    .lgMin({ --padding-dynamic: 0; });\n}\n\n.std-padding-desktop-mobile-none {\n    --padding-dynamic: 0;\n    .lgMin({ --padding-dynamic: var(--padding-static); });\n}\n\n.horizontal-line {\n    width: 100%;\n    height: 2px;\n    background: #fff;\n    margin-top: var(--grid-gap-static-sm);\n\n    .mdMax({\n        margin-top: var(--grid-gap-static-xs);\n    });\n\n    &.gold {\n        background: linear-gradient(\n            96deg,\n            #977b52 18%,\n            #ded0a4 51%,\n            #b19b6b 85%\n        );\n    }\n}\n", "@import '@rsgweb/legacy-design-system/less/mixins';\n@import '@rsgweb/legacy-design-system/less/global-exposed.less';\n\n.heroImage {\n    --image-rounding: 0px;\n    .handleMaxWidth;\n    overflow: hidden;\n    max-height: 70vh;\n    min-height: 30vw;\n}\n\n.responsiveImage {\n    width: 100%;\n    max-height: 70vh;\n    min-height: 30vw;\n    background-size: contain !important;\n    @media (min-aspect-ratio: ~'56/45') {\n    }\n}\n\n.responsiveVideo {\n    margin: 0 auto;\n}\n", "/*\n * New Design System:\n * 1. Breakpoints\n * 2. Typography\n * 3. Variables\n * 4. Utility\n *     4.1 Flex\n *     4.2 Grid\n *     4.3 Max-Width\n *     4.4 Images\n *     4.5 Padding\n *     4.6 Fonts\n *     4.7 Games\n *     4.8 Tina\n *     4.9 Hacks\n * 5. Presentational\n */\n\n/* 1. Breakpoints */\n@screen-sm: 0px;\n@screen-md: 768px;\n@screen-lg: 1024px;\n@screen-xl: 1920px;\n@screen-xxl: 2560px;\n@sm-min-width: @screen-sm;\n@md-min-width: @screen-md;\n@lg-min-width: @screen-lg;\n@xl-min-width: @screen-xl;\n@xxl-min-width: @screen-xxl;\n@sm-max-width: (@md-min-width - 1px);\n@md-max-width: (@lg-min-width - 1px);\n@lg-max-width: (@xl-min-width - 1px);\n@xl-max-width: (@xxl-min-width - 1px);\n\n.sm(@rules) {\n    .smMin(@rules);\n}\n.smMin(@rules) {\n    @media (min-width: @sm-min-width) {\n        @rules();\n    }\n}\n.smMax(@rules) {\n    @media (max-width: @sm-max-width) {\n        @rules();\n    }\n}\n.smOnly(@rules) {\n    @media (min-width: @sm-min-width) and (max-width: @sm-max-width) {\n        @rules();\n    }\n}\n.md(@rules) {\n    .mdMin(@rules);\n}\n.mdMin(@rules) {\n    @media (min-width: @md-min-width) {\n        @rules();\n    }\n}\n.mdMax(@rules) {\n    @media (max-width: @md-max-width) {\n        @rules();\n    }\n}\n.mdOnly(@rules) {\n    @media (min-width: @md-min-width) and (max-width: @md-max-width) {\n        @rules();\n    }\n}\n.lg(@rules) {\n    .lgMin(@rules);\n}\n.lgMin(@rules) {\n    @media (min-width: @lg-min-width) {\n        @rules();\n    }\n}\n.lgMax(@rules) {\n    @media (max-width: @lg-max-width) {\n        @rules();\n    }\n}\n.lgOnly(@rules) {\n    @media (min-width: @lg-min-width) and (max-width: @lg-max-width) {\n        @rules();\n    }\n}\n.xl(@rules) {\n    .xlMin(@rules);\n}\n.xlMin(@rules) {\n    @media (min-width: @xl-min-width) {\n        @rules();\n    }\n}\n.xlMax(@rules) {\n    @media (max-width: @xl-max-width) {\n        @rules();\n    }\n}\n.xlOnly(@rules) {\n    @media (min-width: @xl-min-width) and (max-width: @xl-max-width) {\n        @rules();\n    }\n}\n.xxl(@rules) {\n    .xxlMin(@rules);\n}\n.xxlMin(@rules) {\n    @media (min-width: @xxl-min-width) {\n        @rules();\n    }\n}\n\n.notoBackup(@varName; @stdFont) {\n    @{varName}: @stdFont;\n\n    &:lang(ja_jp) {\n        @{varName}: @stdFont, NotoSansJP;\n    }\n    &:lang(zh_hans) {\n        @{varName}: @stdFont, NotoSansSC;\n    }\n    &:lang(zh_tw) {\n        @{varName}: @stdFont, NotoSansTC;\n    }\n}\n\n/* 2. Typography */\n.handleFontDeclarations() {\n    .notoBackup(--rsg-font-family-std, HelveticaNowText);\n    .notoBackup(--rsg-font-family-h, HelveticaNowDisplayBold);\n    .notoBackup(--gta-font-family-std, Chalet);\n    .notoBackup(--gta-font-family-h, ChaletComprime);\n    .notoBackup(--gta-font-family-badge, Pricedown);\n    .notoBackup(--rdr-font-family-std, HapnaSlabSerif);\n    .notoBackup(--rdr-font-family-h, RDRLino-Regular);\n    .notoBackup(--rdr-font-family-newswire-subtitle, HapnaSlabSerif);\n    .notoBackup(--rdr-area-font, RDRCatalogueBold);\n\n    --header-multiplier: var(--header-numerator, var(--root-font-size)) /\n        var(--root-font-size);\n    font-family: var(--font-family-std, HelveticaNowText);\n    font-weight: var(--font-weight-std, 400);\n    letter-spacing: var(--letter-spacing-std, -0.025em);\n    line-height: var(--line-height-std, 1.6);\n    font-size: calc(var(--root-font-size) * 1px);\n    -webkit-font-smoothing: antialiased;\n\n    h1.large,\n    h1,\n    h2,\n    h3,\n    h4 {\n        font-family: var(--font-family-h, HelveticaNowDisplayBold);\n        letter-spacing: var(--letter-spacing-h, -0.025em);\n    }\n    h1.large,\n    h1 {\n        font-weight: var(--font-weight-h1, var(--font-weight-h, 700));\n        text-transform: var(--text-transform-h1, var(--text-transform-h, none));\n        line-height: var(--line-height-h1, var(--line-height-h, 1.1));\n    }\n\n    h1.large {\n        font-size: calc(var(--font-size-8) * var(--header-multiplier));\n    }\n    h1 {\n        font-size: calc(var(--font-size-7) * var(--header-multiplier));\n    }\n    h2 {\n        font-size: calc(var(--font-size-6) * var(--header-multiplier));\n        font-weight: var(--font-weight-h2, var(--font-weight-h, 700));\n        text-transform: var(--text-transform-h2, var(--text-transform-h, none));\n        line-height: var(--line-height-h, 1.1);\n    }\n    h3 {\n        font-size: calc(var(--font-size-5) * var(--header-multiplier));\n        font-weight: var(--font-weight-h3, var(--font-weight-h, 700));\n        text-transform: var(--text-transform-h3, var(--text-transform-h, none));\n        line-height: var(--line-height-h, 1.1);\n\n        &[data-context='newswire-subtitle'] {\n            font-size: calc(\n                var(--font-size-5) *\n                    var(\n                        --h3-numerator-override-newswire-subtitle,\n                        var(--header-multiplier)\n                    )\n            );\n            font-weight: var(\n                --font-weight-newswire-subtitle,\n                var(--font-weight-h)\n            );\n            font-family: var(\n                --font-family-newswire-subtitle,\n                var(--font-family-h)\n            );\n            text-transform: var(--text-transform-newswire-subtitle);\n        }\n\n        .isRdr({\n            font-weight: var(--font-weight-h3, var(--font-weight-h, 400));\n        });\n    }\n\n    h4,\n    h5,\n    h6 {\n        font-size: calc(var(--font-size-4) * var(--header-multiplier));\n        line-height: var(--line-height-h, 1.1);\n    }\n}\n\n.handleColors() {\n    h1.large,\n    h1 {\n        color: var(--color-h-dynamic, var(--color-h1, var(--color-h, inherit)));\n    }\n    h2 {\n        color: var(--color-h-dynamic, var(--color-h2, var(--color-h, inherit)));\n    }\n    h3 {\n        color: var(--color-h-dynamic, var(--color-h3, var(--color-h, inherit)));\n\n        &[data-context='newswire-subtitle'] {\n            color: var(\n                --color-subtitle-dynamic,\n                var(--color-h-dynamic, var(--color-h3, var(--color-h, inherit)))\n            );\n        }\n    }\n    h4,\n    h5,\n    h6 {\n        color: var(--color-h-dynamic, var(--color-h, inherit));\n    }\n    background-color: var(--background-color, transparent);\n\n    [template='community'] {\n        --time-color: var(--body-color, #2d2d2d);\n        --breadcrumb-separator-filter-invert: invert(0);\n\n        main {\n            color: var(--color-h, #161616);\n        }\n        p {\n            color: var(--body-color, #2d2d2d);\n        }\n    }\n}\n\n/* 3. Variables */\n.resetVariables() {\n    --text-section-max-width: 640px;\n    --base-pixel-size: 12px;\n    --base-rem-size: 0.75rem;\n    --half-rem-size: calc(var(--base-rem-size) / 2);\n    --twice-rem-size: calc(var(--base-rem-size) * 2);\n    --section-margin-bottom: calc(var(--base-rem-size) * 4);\n    --header-height: 80px;\n    --breadcrumbs-height: calc(var(--base-pixel-size) * 3.5);\n    --max-width: 1920px;\n    --standard-color: #fcaf17;\n    --color-h: #ffffff;\n    --body-color: #e8e8e8;\n    --background-color: #0b0b0b;\n    --card-background-color: #000;\n    --border-color: #282828;\n    --privacy-banner-height: 0px;\n    --game-header-height: 50px;\n    --standard-grid-gap: calc(var(--base-rem-size) * 2);\n    --image-margin-bottom: inherit;\n    --image-rounding: 0px;\n    --image-rounding-static: 16px;\n    --image-rounding-static-sm: 8px;\n    --image-rounding-static-xs: 4px;\n\n    --grid-gap-static-xs: 0.5rem;\n    --grid-gap-static-sm: 1rem;\n    --grid-gap-static-md: 2rem;\n    --grid-gap-static-lg: 4rem;\n    --grid-gap-static-xl: 8rem;\n    .smMax({--grid-gap-static-lg: 2rem; --grid-gap-static-xl: 4rem;});\n\n    --max-width-static: 640px;\n    --max-width-static-md: 1088px;\n    --max-width-static-lg: 1920px;\n    --max-width-static-xl: 2560px;\n    .xxlMin({--max-width-static-md: 1440px;});\n\n    --margin-static: 0 0 2rem;\n    --h2-margin: 2rem 0 0 0;\n\n    --padding-sides: var(--grid-gap-static-lg);\n    --padding-top-bottom: var(--padding-sides);\n    --padding-static: var(--padding-sides);\n}\n\n/* 4. Utility */\n/* 4.1 Flex */\n.flex() {\n    display: flex;\n    flex-flow: column;\n}\n.horizontalCenterChildren() {\n    display: flex;\n    justify-content: center;\n}\n.verticalCenterChildren() {\n    display: flex;\n    align-items: center;\n}\n.flexCenterChildren() {\n    .horizontalCenterChildren();\n    .verticalCenterChildren();\n}\n\n/* 4.2 Grid */\n.gridMinWidth(@minWidth: 480px; @rowGap: var(--standard-grid-gap); @colGap: var(--standard-grid-gap); @autoType: 'auto-fit') {\n    display: grid;\n    grid-row-gap: @rowGap;\n    grid-column-gap: @colGap;\n    grid-template-columns: ~'repeat(@{autoType}, minmax(@{minWidth}, 1fr))';\n}\n.gridHideExtraRows(@colGap: var(--standard-grid-gap)) {\n    ::-webkit-scrollbar {\n        display: none;\n    }\n    -ms-overflow-style: none;\n    display: grid;\n    grid-auto-flow: column;\n    grid-column-gap: @colGap;\n    overflow-y: hidden;\n    scroll-snap-type: x mandatory;\n    > * {\n        scroll-snap-align: start;\n    }\n    --per-page: 4;\n    .lgMax({--per-page: 3;});\n    .mdMax({--per-page: 2;});\n    .smMax({--per-page: 1;});\n\n    grid-auto-columns: calc(\n        100% / var(--per-page) - (var(--per-page) - 1) / var(--per-page) *\n            @colGap\n    );\n}\n.gridNumCols(@numInitialItems) {\n    display: grid;\n    grid-gap: var(--standard-grid-gap);\n    .smMax({grid-template-columns: repeat(1, minmax(0px, 1fr)) ;});\n    @media screen and (min-width: @screen-sm) and (max-width: @md-max-width) {\n        grid-template-columns: repeat(2, minmax(0px, 1fr));\n    }\n    @media screen and (min-width: @screen-lg) {\n        grid-template-columns: repeat(4, minmax(0px, 1fr));\n    }\n}\n.gridNumColsSmall(@colGap: var(--padding-top-bottom); @rowGap: var(--padding-top-bottom)) {\n    display: grid;\n    grid-row-gap: @rowGap;\n    grid-column-gap: @colGap;\n    grid-template-columns: repeat(1, minmax(0px, 1fr));\n    .md({grid-template-columns: repeat(2, minmax(0px, 1fr)) ;});\n}\n\n.standardLayoutGridItem(@maxWidth: var(--max-width-static-md), @padding: var(--padding-static)) {\n    .handleMaxWidth(@maxWidth);\n    .handlePadding(@padding);\n}\n\n.handleGridStyles(@grid-gap-dynamic: var(--grid-gap-static-md)) {\n    --grid-gap-dynamic: @grid-gap-dynamic;\n    display: grid;\n    grid-template-columns: repeat(var(--grid-num-columns, 1), minmax(0px, 1fr));\n    grid-template: var(\n        --grid-template-override,\n        auto / repeat(var(--grid-num-columns, 1), minmax(0, 1fr))\n    );\n    grid-gap: var(--grid-gap-dynamic);\n    align-items: var(--grid-align-items);\n    align-content: var(--grid-align-content);\n    align-self: var(--grid-align-self);\n    justify-items: var(--grid-justify-items);\n    justify-content: var(--grid-justify-content);\n    justify-self: var(--grid-justify-self);\n}\n\n/* 4.3 Max-Width */\n.maxWidth(@padding: 0) {\n    max-width: var(--max-width);\n    width: 100%;\n    margin: 0 auto;\n    padding-left: @padding;\n    padding-right: @padding;\n}\n.maxWidthWithNormalPadding() {\n    .maxWidth(var(--padding-sides));\n}\n\n.handleMaxWidth(@max-width-default: 1000000px) {\n    width: 100%;\n    max-width: calc(\n        var(--max-width-dynamic, @max-width-default) +\n            var(--padding-dynamic, 0px) * 2\n    ) !important;\n    margin: 0 auto;\n}\n\n.breakout(@max-width-default: 100vw) {\n    @margin: calc((@max-width-default / 2) * -1);\n    width: @max-width-default;\n    max-width: @max-width-default !important;\n    position: relative;\n    left: 50%;\n    right: 50%;\n    margin-left: @margin;\n    margin-right: @margin;\n}\n\n.fullWidth() {\n    .breakout;\n}\n\n/* 4.4 Images */\n.handleAspectRatio() {\n    --aspect-ratio-default: 1;\n    .lgMin({\n        --aspect-ratio-default: 16/9;\n    });\n\n    position: relative;\n    &:before {\n        content: '';\n        height: 0;\n        width: 100%;\n        display: block;\n        padding-bottom: calc(\n            100% / calc(var(--aspect-ratio, var(--aspect-ratio-default)))\n        );\n    }\n    > * {\n        position: absolute;\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 100%;\n    }\n}\n.setAspectRatio(@ratio) {\n    --aspect-ratio: @ratio;\n    .handleAspectRatio;\n}\n\n.handleParallaxPerspective() {\n    position: fixed;\n    width: 100%;\n    height: 100%;\n    overflow-x: hidden;\n    overflow-y: scroll;\n    perspective: var(--parallax-perspective);\n    perspective-origin: 0 0;\n}\n.handleParallaxDistance() {\n    transform: translateZ(var(--parallax-distance))\n        scale(\n            calc(\n                (var(--parallax-perspective) - var(--parallax-distance)) /\n                    var(--parallax-distance)\n            )\n        );\n}\n\n.handleImageRounding() {\n    border-radius: var(--image-rounding-dynamic, 0px);\n}\n\n/* 4.5 Padding */\n.handlePadding(@paddingSides: initial, @paddingTopBottom: initial) {\n    --padding-dynamic: @paddingSides;\n    --padding-dynamic-tb: @paddingTopBottom;\n\n    padding: var(--padding-t, var(--padding-dynamic-tb, 0))\n        var(--padding-dynamic, 0) var(--padding-b, var(--padding-dynamic-tb, 0))\n        var(--padding-dynamic, 0);\n}\n\n/* 4.6 Fonts */\n.loadFont(@family, @weight: 400, @style: normal, @file: @family) {\n    @font-face {\n        font-family: @family;\n        font-style: @style;\n        font-weight: @weight;\n        src: url('../fonts/@{file}.woff') format('woff');\n    }\n}\n.loadFontWoff2(@family, @weight: 400, @style: normal, @file: @family) {\n    @font-face {\n        font-family: @family;\n        font-style: @style;\n        font-weight: @weight;\n        src: url('../fonts/@{file}.woff2') format('woff2');\n    }\n}\n.fontClip(@backgroundImg) {\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n    @backgroundImg();\n}\n\n/* 4.7 Games */\n.gta(@rules) {\n    [data-game^='gta'] {\n        @rules();\n    }\n}\n\n.isGta(@rules) {\n    [data-game^='gta'] & {\n        @rules();\n    }\n}\n\n.rdr(@rules) {\n    [data-game='rdo'],\n    [data-game^='rdr'] {\n        @rules();\n    }\n}\n\n.isRdr(@rules) {\n    [data-game='rdo'] &,\n    [data-game^='rdr'] & {\n        @rules();\n    }\n}\n\n/* 4.8 Tina */\n.tinaTextField() {\n    padding: var(--tina-padding-small);\n    border-radius: var(--tina-radius-small);\n    background: var(--tina-color-grey-0);\n    color: var(--tina-color-grey-10);\n    background-color: var(--tina-color-grey-0);\n    border: 1px solid var(--tina-color-grey-2);\n    box-shadow: 0 0 0 2px transparent;\n    margin-bottom: 14px;\n}\n\n/* 4.9 Hacks */\n.safariBorderRadiusOverflowFix() {\n    // https://stackoverflow.com/questions/49066011/overflow-hidden-with-border-radius-not-working-on-safari\n    -webkit-mask-image: -webkit-radial-gradient(white, black);\n}\n\n.forceGpuRendering() {\n    // https://web.dev/animations-guide/#force\n    transform: translateZ(0);\n}\n\n/* 5. Presentational */\n@locales: en_us, fr_fr, de_de, es_es, es_mx, it_it, pt_br, pl_pl, ru_ru, ja_jp,\n    ko_kr, zh_tw, zh_hans;\n\n.placeholder(@rules) {\n    &::-webkit-input-placeholder {\n        @rules();\n    }\n    &:-moz-placeholder {\n        @rules();\n    }\n    &::-moz-placeholder {\n        @rules();\n    }\n    &:-ms-input-placeholder {\n        @rules();\n    }\n}\n\n.bgImg() {\n    background-size: cover;\n    background-position: center center;\n    background-repeat: no-repeat;\n}\n\n.themeDark() {\n    color: #e8e8e8;\n    --tag-color: #e8e8e8;\n}\n\n.outbound() {\n    content: '';\n    display: inline-block;\n    background-size: 100%;\n    background-repeat: no-repeat;\n    background-position: 0% 50%;\n    vertical-align: baseline;\n    margin-left: var(--grid-gap-static-xs);\n    width: 1rem;\n    height: 1rem;\n    background-image: data-uri('../img/outbound.svg');\n}\n\n.blurryBg() {\n    transition: filter 0.8s;\n    filter: blur(var(--blur-because-in-bg, 0px));\n}\n\n.fancyLink() {\n    position: relative;\n    background: transparent;\n    padding: 0;\n    z-index: 1;\n    @media (min-width: @screen-sm) {\n        transition: all 0.2s ease;\n        &:before {\n            content: '';\n            display: block;\n            position: absolute;\n            bottom: 0;\n            left: -0.1rem;\n            width: calc(100% + 0.2rem);\n            height: 2px;\n            background: var(--body-color);\n            transition: all 0.2s ease;\n            z-index: -1;\n            border-radius: 0.25rem;\n        }\n        &:hover {\n            color: #161616;\n\n            &:before {\n                left: -0.25rem;\n                width: calc(100% + 0.5rem);\n                height: 100%;\n            }\n        }\n    }\n    img {\n        display: block;\n    }\n}\n.stdHover() {\n    transition:\n        color 0.2s ease,\n        opacity 0.2s ease;\n    &:hover {\n        color: var(--standard-color);\n        opacity: 1;\n    }\n}\n.stdIconHover() {\n    &:hover {\n        filter: brightness(0) saturate(100%) invert(76%) sepia(15%)\n            saturate(5173%) hue-rotate(348deg) brightness(105%) contrast(98%);\n    }\n}\n.card() {\n    .handleImageRounding;\n    --image-rounding-dynamic: var(--image-rounding-static-sm);\n    background: var(--card-background-color);\n    overflow: hidden;\n    display: flex;\n    flex-flow: column;\n    transition: transform 0.2s ease;\n    border: 1px solid var(--border-color);\n    .info {\n        .handleGridStyles;\n        --grid-gap-dynamic: var(--grid-gap-static-xs);\n        padding: 2rem 1.5rem;\n        .title {\n            --line-height-h: 1.3;\n            color: var(--color-h);\n        }\n    }\n}\n\n.cardHover() {\n    transition:\n        transform 0.3s cubic-bezier(0, 0, 0.5, 1),\n        box-shadow 0.3s cubic-bezier(0, 0, 0.5, 1);\n    box-shadow: 0px 0px 40px -25px rgba(0, 0, 0, 0);\n\n    &:hover {\n        transform: scale(1.025);\n        box-shadow: 0px 30px 40px -25px rgba(0, 0, 0, 1);\n    }\n}\n\n.cardSecondary() {\n    .card();\n    .info {\n        padding: 1.5rem;\n    }\n    .title {\n        font-size: var(--font-size-3);\n        font-weight: 400;\n    }\n}\n\n.cardTertiary() {\n    .cardSecondary();\n    --image-rounding-dynamic: 0;\n    --card-background-color: transparent;\n    grid-gap: var(--grid-gap-static-sm);\n    overflow: unset;\n    border: none;\n    .info {\n        padding: 0;\n    }\n    .img {\n        .handleImageRounding;\n        --image-rounding-dynamic: var(--image-rounding-static-sm);\n    }\n}\n\n.standardPage() {\n    .maxWidthWithNormalPadding;\n    padding-top: var(--padding-top-bottom);\n    padding-bottom: var(--padding-top-bottom);\n}\n\n.dropdownThing(@defaultDeg: 0deg; @openDeg: 180deg) {\n    position: relative;\n    padding-right: calc(var(--grid-gap-static-xs) + 24px);\n    .dropdownCaret(yellow; @defaultDeg; @openDeg);\n}\n.dropdownCaret(@color; @defaultDeg: 0deg; @openDeg: 180deg) {\n    &:after {\n        display: inline-block;\n        content: '';\n        position: absolute;\n        top: 0;\n        right: 0;\n        @img: '../img/dropdown-@{color}.svg';\n        background-image: data-uri(@img);\n        background-repeat: no-repeat;\n        width: image-width(@img);\n        height: 100%;\n        background-position: center;\n        background-size: 100%;\n        transform: rotate(@defaultDeg);\n        transition: transform 0.3s;\n        .open& {\n            transform: rotate(@openDeg);\n        }\n    }\n}\n\n.sectionHeader() {\n    margin: 0 0 1.5rem;\n    font-size: var(--font-size-5);\n    font-family: var(--font-family-h);\n    font-weight: var(--font-weight-h);\n    --line-height-h: 1.3;\n\n    .xlMin ({\n        font-size: var(--font-size-6);\n    });;\n}\n.sectionHeaderSmall() {\n    .sectionHeader;\n    font-size: var(--font-size-4);\n\n    .xlMin ({\n        font-size: var(--font-size-5);\n    });;\n}\n\n.tag() {\n    color: var(--tag-color, var(--body-color));\n    font-weight: 700;\n    font-size: var(--font-size-2);\n    line-height: 1.6;\n}\n\n.date() {\n    .tag;\n    font-weight: 400;\n    opacity: 0.65;\n}\n.animationFadeInUp() {\n    :global {\n        animation: globalFadeInUp 0.75s;\n        animation-play-state: paused;\n    }\n}\n.animationPaused() {\n    animation-play-state: paused;\n}\n.animationRunning() {\n    animation-play-state: running;\n}\n\n.button() {\n    font-weight: 700;\n    align-self: center;\n    display: inline-block;\n    text-transform: uppercase;\n    background: transparent;\n    border: 1px solid var(--color-h);\n    padding: 1rem 3rem;\n    color: inherit;\n    cursor: pointer;\n    border-radius: 0.25rem;\n    color: var(--color-h);\n    line-height: 100%;\n    transition: all 0.2s ease;\n    &:focus,\n    &:hover {\n        background: var(--standard-color);\n        border-color: var(--standard-color);\n        color: #161616;\n    }\n    &.secondary {\n        .fancyLink;\n        outline: none;\n        border: none;\n        text-transform: none;\n        font-weight: 400;\n        line-height: unset;\n        .smMin ({\n            &:before {\n                background: var(--standard-color);\n                height:4px;\n            }\n            &:focus,\n            &:hover {\n                &:before {\n                    left: -0.5rem;\n                    width: calc(100% + 1rem);\n                    height: 100%;\n                }\n            }\n         });;\n    }\n    &[disabled] {\n        opacity: 0.5;\n    }\n}\n\n.expandToEdges() {\n    margin-top: calc(var(--padding-top-bottom) * -1);\n    margin-left: calc(var(--padding-sides) * -1);\n    width: 100vw;\n    width: calc(100% + calc(var(--padding-sides) * 2));\n}\n\n.shadow(@boxShadow: 0 10px 30px rgba(0, 0, 0, 0.5)) {\n    // border: 1px solid rgba(0, 0, 0, 0.15);\n    box-shadow: @boxShadow;\n}\n.shadowTop() {\n    box-shadow: -3px -3px 6px 0 rgba(0, 0, 0, 0.2);\n}\n\n.aspect-ratio(@width, @height, @selector: div, @pre: ~'') {\n    @supports not (aspect-ratio: @width / @height) {\n        position: relative;\n        &:before {\n            display: block;\n            content: '';\n            width: 100%;\n            padding-top: calc((@height / @width) * 100%);\n        }\n        > @{pre}@{selector} {\n            position: absolute;\n            top: 0;\n            left: 0;\n            right: 0;\n            bottom: 0;\n            width: 100% !important;\n            height: 100% !important;\n        }\n    }\n\n    @supports (aspect-ratio: @width / @height) {\n        @{pre}@{selector} {\n            aspect-ratio: @width / @height !important;\n            width: 100% !important;\n            height: auto !important;\n        }\n    }\n}\n.unset-aspect-ratio(@selector, @pre: ~'') {\n    @supports not (aspect-ratio: 1/1) {\n        position: unset;\n        &:before {\n            display: none;\n        }\n        > @{pre}@{selector} {\n            position: unset;\n            width: 100% !important;\n            height: unset !important;\n        }\n    }\n\n    @supports (aspect-ratio: 1/1) {\n        @{pre}@{selector} {\n            aspect-ratio: unset !important;\n        }\n    }\n}\n\n.rockstarTypography() {\n    --font-family-std: NeueHelveticaPaneuropean, sans-serif;\n    --leter-spacing-std: 0;\n\n    font-size: var(--font-size-2);\n    font-family: var(--font-family-std);\n    letter-spacing: var(--leter-spacing-std);\n\n    button {\n        letter-spacing: var(--leter-spacing-std);\n    }\n}\n\n.setNodeFontSizing() {\n    // TODO audit this. .5rem is very small.\n    --font-size-1: 0.75rem;\n\n    --font-size-2: 0.75rem;\n    --font-size-3: 1rem;\n    --font-size-4: 1.25rem;\n    --font-size-5: 1.5rem;\n    --font-size-6: 2rem;\n    --font-size-7: 2.5rem;\n    --font-size-8: 3rem;\n    --font-size-9: 4rem;\n    --font-size-10: 5rem;\n}\n\n.setRootFontSizing() {\n    .sm({--root-font-size: 16;});\n    .md({--root-font-size: 18;});\n    .lg({--root-font-size: 20;});\n    .xl({--root-font-size: 22;});\n}\n\n.button-text () {\n    font-size: var(--font-size-4);\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-sm);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-h);\n    text-transform: uppercase;\n}\n\n.button-text-sm () {\n    .button-text;\n    font-size: var(--font-size-3);\n}\n\n.button-text-md () {\n    .button-text;\n    font-size: var(--font-size-4);\n    padding: 0 var(--padding-md);\n}\n\n.button-text-lg () {\n    .button-text;\n    font-size: var(--font-size-5);\n    padding: 0 var(--padding-lg);\n}\n\n.button-text-xl () {\n    .button-text;\n    font-size: var(--font-size-7);\n    padding: 0 var(--padding-xl);\n}\n\n.cta-button() {\n    @import '../less/gen9-vars';\n\n    --button-text-color-hover: var(--white-100);\n\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: center;\n    gap: var(--grid-gap-xs, 0.5rem);\n\n    background: var(\n        --button-background-color,\n        var(--black-65, hsla(0, 0%, 7%, 0.65))\n    );\n    border: 1px solid var(--white-100, #fff);\n    border-radius: var(--border-radius-sm, 4px);\n    color: var(--button-text-color, var(--white-100));\n    cursor: pointer;\n    padding: 0 var(--padding-sm);\n\n    width: 100%;\n    height: var(--button-height-3, 3rem);\n\n    transition: all 0.3s ease-in-out;\n\n    &[data-brand='reddeadredemption'],\n    [data-brand='reddeadredemption'] & {\n        --accent-color: #cc0000;\n        --font-family-h: RDRUltra;\n\n        :lang(pl_pl) {\n            --font-family-h: RDRUltra, NeueHelveticaPaneuropean;\n        }\n    }\n\n    &[data-brand='bully'],\n    [data-brand='bully'] & {\n        --accent-color: #f8ad00;\n        --font-family-h: HelveticaNowDisplayBold;\n        --button-background-color: var(--white-100);\n        --button-background-color-hover: var(--accent-color);\n        --button-text-color: var(--black-100);\n        --button-text-color-hover: var(--black-100);\n\n        backdrop-filter: blur(25px);\n        padding: 0 var(--padding-md, 32px);\n    }\n\n    img {\n        height: 1rem;\n        width: auto;\n    }\n\n    .label {\n        .button-text();\n        display: flex;\n        flex-shrink: 0;\n    }\n\n    &.primary {\n        color: var(--black-100);\n        background-color: var(--white-100);\n    }\n\n    &:hover {\n        border-color: var(--accent-color, var(--btn-active-color));\n        background-color: var(--accent-color, var(--btn-active-color));\n        color: var(--button-text-color-hover, var(--btn-active-color));\n\n        &.primary {\n            color: var(--button-text-color-hover, var(--white-100));\n        }\n    }\n\n    @media (min-width: 1280px) {\n        padding: 0 var(--padding-md);\n    }\n\n    @media (min-width: 768px) and (max-width: 1539px) {\n        height: 2.5rem;\n\n        img {\n            height: 1rem;\n        }\n\n        .label {\n            .button-text-sm();\n        }\n    }\n}\n"],
        sourceRoot: ""
      }]), o.locals = {
        hiddenMobile: "rockstargames-modules-core-newswire-articlec3a08254db141676fff1ac7bf9484218",
        hiddenLarge: "rockstargames-modules-core-newswire-articled38319419aba2f42e721ab08a26208fb",
        "hidden-sm": "rockstargames-modules-core-newswire-articlede4a014046acaad99dc53bb2c03f8719",
        "show-sm": "rockstargames-modules-core-newswire-articleb540a7274484859d8ab14a6c04f62b4f",
        "hidden-md": "rockstargames-modules-core-newswire-articlef1c15a75853dbb6189625b636a6d1baf",
        "show-md": "rockstargames-modules-core-newswire-articled6cabd1c7dce349d9e7e1598ead4503e",
        "hidden-lg": "rockstargames-modules-core-newswire-articlee53c219095a6cea2942bb53c4bf66259",
        "show-lg": "rockstargames-modules-core-newswire-articlea0529cc3561a81f9b96939b579caa623",
        "hidden-xl": "rockstargames-modules-core-newswire-articleb104796d98a3d67dde4b44e2c676b08e",
        "show-xl": "rockstargames-modules-core-newswire-articlee13f7a8d45b3fec8db6dedc3321f89f2",
        "hidden-xxl": "rockstargames-modules-core-newswire-articled1034e839209be1d4f103fc2c29bf531",
        "show-xxl": "rockstargames-modules-core-newswire-articled350dc14eb32714ed0230fe9f53591cd",
        "full-width": "rockstargames-modules-core-newswire-articled506082984d54d056e358cfbc0dde795",
        "reverse-mobile": "rockstargames-modules-core-newswire-articlefc45ea13bab881368ae51d327eb77243",
        "center-children": "rockstargames-modules-core-newswire-articlef2fa26d0f173f3d967cd339102390c4a",
        "std-padding-mobile-desktop-none": "rockstargames-modules-core-newswire-articledef459f80eeef54bcb18d93a9ed91ef7",
        "std-padding-desktop-mobile-none": "rockstargames-modules-core-newswire-articledeff228b0e0b37e77569d72317854418",
        "horizontal-line": "rockstargames-modules-core-newswire-articleba39f5e2ce30b99a045454ac97a6f707",
        gold: "rockstargames-modules-core-newswire-articleadff1577bb3952ea5b448144560148e1",
        heroImage: "rockstargames-modules-core-newswire-articled17c20c4aa402388a4d4b23d6ff41a3b",
        responsiveImage: "rockstargames-modules-core-newswire-articleaa419a38f6bffb372db81c2df3ec23ae",
        responsiveVideo: "rockstargames-modules-core-newswire-articlee70c0545b9c94794421dac5b59959c39"
      };
      const d = o
    },
    84343: e => {
      var n = {
        kind: "Document",
        definitions: [{
          kind: "OperationDefinition",
          operation: "query",
          name: {
            kind: "Name",
            value: "TinaModulesList"
          },
          variableDefinitions: [{
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "types"
              }
            },
            type: {
              kind: "ListType",
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "String"
                }
              }
            },
            directives: []
          }, {
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "locale"
              }
            },
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "String"
                }
              }
            },
            directives: []
          }],
          directives: [],
          selectionSet: {
            kind: "SelectionSet",
            selections: [{
              kind: "Field",
              name: {
                kind: "Name",
                value: "tinaModulesList"
              },
              arguments: [{
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "types"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "types"
                  }
                }
              }, {
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "locale"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "locale"
                  }
                }
              }],
              directives: [],
              selectionSet: {
                kind: "SelectionSet",
                selections: [{
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "results"
                  },
                  arguments: [],
                  directives: [],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "id_hash"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "id"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "title"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "type"
                      },
                      arguments: [],
                      directives: []
                    }]
                  }
                }]
              }
            }]
          }
        }, {
          kind: "OperationDefinition",
          operation: "query",
          name: {
            kind: "Name",
            value: "TinaModulesInfo"
          },
          variableDefinitions: [{
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "ids"
              }
            },
            type: {
              kind: "NonNullType",
              type: {
                kind: "ListType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "String"
                  }
                }
              }
            },
            directives: []
          }, {
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "locale"
              }
            },
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "String"
                }
              }
            },
            directives: []
          }, {
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "sync"
              }
            },
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Boolean"
              }
            },
            defaultValue: {
              kind: "BooleanValue",
              value: !1
            },
            directives: []
          }, {
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "cache"
              }
            },
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Boolean"
              }
            },
            defaultValue: {
              kind: "BooleanValue",
              value: !1
            },
            directives: []
          }],
          directives: [],
          selectionSet: {
            kind: "SelectionSet",
            selections: [{
              kind: "Field",
              name: {
                kind: "Name",
                value: "tinaModulesInfo"
              },
              arguments: [{
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "ids"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "ids"
                  }
                }
              }, {
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "locale"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "locale"
                  }
                }
              }, {
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "cache"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "cache"
                  }
                }
              }],
              directives: [],
              selectionSet: {
                kind: "SelectionSet",
                selections: [{
                  kind: "Field",
                  alias: {
                    kind: "Name",
                    value: "id"
                  },
                  name: {
                    kind: "Name",
                    value: "id_hash"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "title"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "title_doc"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "type"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "sync_hash"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "to"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "visible"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "children"
                  },
                  arguments: [],
                  directives: [],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "title"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "id_hash"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "to"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "tina"
                      },
                      arguments: [],
                      directives: [],
                      selectionSet: {
                        kind: "SelectionSet",
                        selections: [{
                          kind: "Field",
                          name: {
                            kind: "Name",
                            value: "payload"
                          },
                          arguments: [],
                          directives: []
                        }, {
                          kind: "Field",
                          name: {
                            kind: "Name",
                            value: "variables"
                          },
                          arguments: [],
                          directives: [],
                          selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                              kind: "Field",
                              name: {
                                kind: "Name",
                                value: "keys"
                              },
                              arguments: [],
                              directives: []
                            }]
                          }
                        }]
                      }
                    }]
                  }
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "tina"
                  },
                  arguments: [],
                  directives: [],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "payload"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "variables"
                      },
                      arguments: [],
                      directives: [],
                      selectionSet: {
                        kind: "SelectionSet",
                        selections: [{
                          kind: "Field",
                          name: {
                            kind: "Name",
                            value: "id"
                          },
                          arguments: [],
                          directives: [{
                            kind: "Directive",
                            name: {
                              kind: "Name",
                              value: "include"
                            },
                            arguments: [{
                              kind: "Argument",
                              name: {
                                kind: "Name",
                                value: "if"
                              },
                              value: {
                                kind: "Variable",
                                name: {
                                  kind: "Name",
                                  value: "sync"
                                }
                              }
                            }]
                          }]
                        }, {
                          kind: "Field",
                          name: {
                            kind: "Name",
                            value: "keys"
                          },
                          arguments: [],
                          directives: []
                        }, {
                          kind: "Field",
                          name: {
                            kind: "Name",
                            value: "_translations"
                          },
                          arguments: [],
                          directives: [{
                            kind: "Directive",
                            name: {
                              kind: "Name",
                              value: "include"
                            },
                            arguments: [{
                              kind: "Argument",
                              name: {
                                kind: "Name",
                                value: "if"
                              },
                              value: {
                                kind: "Variable",
                                name: {
                                  kind: "Name",
                                  value: "sync"
                                }
                              }
                            }]
                          }],
                          selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                              kind: "Field",
                              name: {
                                kind: "Name",
                                value: "locale"
                              },
                              arguments: [],
                              directives: []
                            }, {
                              kind: "Field",
                              name: {
                                kind: "Name",
                                value: "keys"
                              },
                              arguments: [],
                              directives: []
                            }]
                          }
                        }]
                      }
                    }]
                  }
                }]
              }
            }]
          }
        }],
        loc: {
          start: 0,
          end: 1002
        }
      };

      function a(e, n) {
        if ("FragmentSpread" === e.kind) n.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var r = e.type;
          "NamedType" === r.kind && n.add(r.name.value)
        }
        e.selectionSet && e.selectionSet.selections.forEach((function(e) {
          a(e, n)
        })), e.variableDefinitions && e.variableDefinitions.forEach((function(e) {
          a(e, n)
        })), e.definitions && e.definitions.forEach((function(e) {
          a(e, n)
        }))
      }
      n.loc.source = {
        body: "query TinaModulesList($types: [String], $locale: String!) {\n    tinaModulesList(types: $types, locale: $locale) {\n        results {\n            id_hash\n            id\n            title\n            type\n        }\n    }\n}\n\nquery TinaModulesInfo(\n    $ids: [String]!\n    $locale: String!\n    $sync: Boolean = false\n    $cache: Boolean = false\n) {\n    tinaModulesInfo(ids: $ids, locale: $locale, cache: $cache) {\n        id: id_hash\n        title\n        title_doc\n        type\n        sync_hash\n        to\n        visible\n        children {\n            title\n            id_hash\n            to\n            tina {\n                payload\n                variables {\n                    keys\n                }\n            }\n        }\n        tina {\n            payload\n            variables {\n                id @include(if: $sync)\n                keys\n                _translations @include(if: $sync) {\n                    locale\n                    keys\n                }\n            }\n        }\n    }\n}\n",
        name: "GraphQL request",
        locationOffset: {
          line: 1,
          column: 1
        }
      };
      var r = {};

      function i(e, n) {
        for (var a = 0; a < e.definitions.length; a++) {
          var r = e.definitions[a];
          if (r.name && r.name.value == n) return r
        }
      }

      function t(e, n) {
        var a = {
          kind: e.kind,
          definitions: [i(e, n)]
        };
        e.hasOwnProperty("loc") && (a.loc = e.loc);
        var t = r[n] || new Set,
          o = new Set,
          d = new Set;
        for (t.forEach((function(e) {
            d.add(e)
          })); d.size > 0;) {
          var s = d;
          d = new Set, s.forEach((function(e) {
            o.has(e) || (o.add(e), (r[e] || new Set).forEach((function(e) {
              d.add(e)
            })))
          }))
        }
        return o.forEach((function(n) {
          var r = i(e, n);
          r && a.definitions.push(r)
        })), a
      }
      n.definitions.forEach((function(e) {
        if (e.name) {
          var n = new Set;
          a(e, n), r[e.name.value] = n
        }
      })), e.exports = n, e.exports.TinaModulesList = t(n, "TinaModulesList"), e.exports.TinaModulesInfo = t(n, "TinaModulesInfo")
    },
    84240: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/0bcb70671487ed8af0621d77e074411c.svg"
    },
    68193: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/aa0f52f2b27a17f3ddc4646a6146fe59.svg"
    },
    95754: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/7b020492bb9714c229ed738928d2e598.svg"
    },
    36206: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/562857802f2942e67d47d893b473abd7.svg"
    },
    63829: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/36956250db7dc74d6ca9721c977f3d41.svg"
    },
    68918: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/2757dccd4c25bb85b00d92fec26d2abe.svg"
    },
    650: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/e06b78f7ccb432f507dc3be415fba32c.svg"
    },
    51097: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/80cd85db506133304f8cddad89af1782.svg"
    },
    4943: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5443c35249177dc987b7561f93e3c12f.svg"
    },
    27382: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/196bc0ec80f9c57e51d21335cc76a671.svg"
    },
    50807: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/f191d2d6dbd04e4c9768a0a64855d1a6.svg"
    },
    73715: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/2e9206b87feb4567a83a182d243ae0b6.svg"
    },
    9564: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a52713a70c65e31024b27e83be6847d3.svg"
    },
    42563: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/055974c59ae2fd76f3c8584183967670.svg"
    },
    77381: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/bd62daf191f66403ccb4b8b24bae7de5.svg"
    }
  }
]);