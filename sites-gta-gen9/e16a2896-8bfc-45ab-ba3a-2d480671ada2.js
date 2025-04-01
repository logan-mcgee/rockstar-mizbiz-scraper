! function() {
  try {
    var n = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      e = (new Error).stack;
    e && (n._sentryDebugIds = n._sentryDebugIds || {}, n._sentryDebugIds[e] = "e16a2896-8bfc-45ab-ba3a-2d480671ada2", n._sentryDebugIdIdentifier = "sentry-dbid-e16a2896-8bfc-45ab-ba3a-2d480671ada2")
  } catch (n) {}
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
  [5454], {
    46873: (n, e, a) => {
      "use strict";
      a.d(e, {
        A: () => D
      });
      var t = a(62229),
        r = a(22738),
        i = a(95966),
        o = a(2918),
        s = a(50828),
        d = a(16893),
        c = a(73855);
      const g = n => {
        let {
          className: e
        } = n;
        return (0, c.jsxs)("svg", {
          className: e,
          width: "16",
          height: "17",
          viewBox: "0 0 16 17",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: [(0, c.jsx)("path", {
            d: "M3.33203 8.5H12.6654",
            stroke: "white",
            strokeWidth: "1.33",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }), (0, c.jsx)("path", {
            d: "M8 3.83331L12.6667 8.49998L8 13.1666",
            stroke: "white",
            strokeWidth: "1.33",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          })]
        })
      };
      var l = a(53178),
        m = a.n(l),
        f = a(27835),
        p = a.n(f),
        A = a(17529),
        h = a.n(A),
        b = a(72162),
        v = a.n(b),
        u = a(82510),
        x = a.n(u),
        k = a(90675),
        w = a.n(k),
        C = a(79882),
        y = {};
      y.styleTagTransform = w(), y.setAttributes = v(), y.insert = h().bind(null, "head"), y.domAPI = p(), y.insertStyleElement = x(), m()(C.A, y);
      const B = C.A && C.A.locals ? C.A.locals : void 0,
        z = n => {
          let {
            foreign_id: e,
            foreign_type: a
          } = n;
          const {
            track: r
          } = (0, o.useGtmTrack)(), {
            refetch: d
          } = (0, i.useQuery)(s.UserGetVote, {
            skip: !0
          }), [g] = (0, i.useMutation)(s.UserCastVote), [l, m] = (0, t.useState)(null), f = (0, t.useCallback)((n => {
            (async () => {
              if (n === l && null !== l) m(null);
              else {
                m(n), r({
                  event: "cta_" + (n ? "like" : "dislike"),
                  text: `${a} ${e}`
                });
                const t = {
                  foreignId: e,
                  foreignType: a,
                  vote: n
                };
                await g({
                  variables: t
                })
              }
            })()
          }), [e, a, l]);
          return (0, t.useEffect)((() => {
            e && a && (async () => {
              const n = await d({
                foreignId: e,
                foreignType: a
              });
              m(n?.data?.userGetVote?.vote ?? null)
            })()
          }), [e, a]), (0, c.jsxs)("div", {
            className: B.calloutVoteForm,
            children: [(0, c.jsx)("button", {
              "aria-label": "upvote",
              className: [B.upvote, B.voteButton, l ? B.active : ""].join(" "),
              name: "upvote",
              onClick: () => f(!0),
              type: "button"
            }), (0, c.jsx)("button", {
              "aria-label": "downvote",
              className: [B.downvote, B.voteButton, !1 === l ? B.active : ""].join(" "),
              name: "downvote",
              onClick: () => f(!1),
              type: "button"
            })]
          })
        },
        _ = n => {
          let {
            action_text: e,
            link: a,
            trackingData: t
          } = n;
          const {
            track: r
          } = (0, o.useGtmTrack)();
          return (0, c.jsx)("a", {
            href: a,
            target: "_blank",
            rel: "noopener noreferrer",
            children: (0, c.jsxs)("button", {
              className: B.calloutLink,
              type: "button",
              onClick: t ? () => r({
                ...t
              }) : () => {},
              children: [e, (0, c.jsx)(g, {
                className: B.calloutLinkIcon
              })]
            })
          })
        },
        I = n => {
          let {
            helperText: e,
            linkText: a,
            link: t,
            trackingData: r
          } = n;
          const {
            track: i
          } = (0, o.useGtmTrack)();
          return (0, c.jsxs)("div", {
            className: B.actionFooter,
            children: [e, a && " ", a && (0, c.jsx)("a", {
              href: t ?? "",
              onClick: () => i({
                ...r
              }),
              children: a
            })]
          })
        },
        D = (0, i.withTranslations)((n => {
          let {
            header: e,
            subheader: a,
            type: s,
            action_text: g,
            link: l,
            foreign_id: m = document.location.pathname,
            foreign_type: f = "url",
            className: p = "",
            actionFooterHelperText: A,
            actionFooterLinkText: h,
            actionFooterLink: b,
            trackingData: v = {},
            actionFooterLinkTrackingData: u = {},
            t: x,
            ...k
          } = n;
          const {
            loggedIn: w
          } = (0, o.useRockstarUser)(), {
            track: C
          } = (0, o.useGtmTrack)(), y = document.location.pathname, {
            signInUrl: D
          } = (0, i.useScAuthLinks)(y), {
            ref: N,
            inView: S
          } = (0, r.useInView)({
            threshold: .6
          }), [M, G] = (0, t.useState)(!1);
          let F;
          if ((0, t.useEffect)((() => {
              S && !M && (C({
                event: "page_section_impression",
                element_placement: `callout section - ${k?.sectionName??k?._memoq?.header}`
              }), G(!0))
            }), [S]), !e && !a) return null;
          switch (s) {
            case "vote":
              if (!w) {
                F = (0, c.jsx)(d.A, {
                  to: D,
                  className: B.calloutButton,
                  onClick: v ? () => C({
                    ...v
                  }) : () => {},
                  children: "Log In"
                });
                break
              }
              F = (0, c.jsx)(z, {
                foreign_id: m,
                foreign_type: f
              });
              break;
            case "button":
              g && l && (F = (0, c.jsx)(d.A, {
                to: l,
                className: B.calloutButton,
                onClick: v ? () => C({
                  ...v
                }) : () => {},
                children: g
              }));
              break;
            case "link":
              g && l && (F = (0, c.jsx)(_, {
                action_text: g,
                link: l,
                trackingData: v
              }));
              break;
            default:
              F = null
          }
          return (0, c.jsx)("div", {
            className: `${B.calloutContainer} ${p||""}`,
            ref: N,
            children: (0, c.jsxs)("div", {
              className: B.calloutSection,
              children: [(0, c.jsxs)("div", {
                className: [B.calloutHeaders, F ? B.calloutHeaderMargins : ""].join(" "),
                children: [e && (0, c.jsx)("h2", {
                  className: B.calloutHeader,
                  children: x(e)
                }), a && (0, c.jsx)("h3", {
                  className: B.calloutSubheader,
                  children: x(a)
                })]
              }), (0, c.jsxs)("div", {
                className: B.actionBlock,
                children: [F, A && (0, c.jsx)(I, {
                  helperText: A,
                  linkText: h,
                  link: b,
                  trackingData: u
                })]
              })]
            })
          })
        }))
    },
    82843: (n, e, a) => {
      "use strict";
      a.d(e, {
        A: () => D
      });
      var t = a(62229),
        r = a(81788),
        i = a(95966),
        o = a(22738),
        s = a(2918),
        d = a(45768),
        c = a(65317),
        g = a(53178),
        l = a.n(g),
        m = a(27835),
        f = a.n(m),
        p = a(17529),
        A = a.n(p),
        h = a(72162),
        b = a.n(h),
        v = a(82510),
        u = a.n(v),
        x = a(90675),
        k = a.n(x),
        w = a(55300),
        C = {};
      C.styleTagTransform = k(), C.setAttributes = b(), C.insert = A().bind(null, "head"), C.domAPI = f(), C.insertStyleElement = u(), l()(w.A, C);
      const y = w.A && w.A.locals ? w.A.locals : void 0,
        B = (0, r.defineMessages)({
          components_ratings_link_alt: {
            id: "components_ratings_link_alt",
            defaultMessage: "Rating: {rating}. Click here learn more about rating systems"
          }
        });
      var z = a(95520),
        _ = a(94997),
        I = a(73855);
      (0, i.importAll)(a(36672));
      const D = (0, c.A)((0, _.g)((n => {
        let {
          descriptors: e = null,
          footer: c = null,
          href: g,
          img: l = null,
          titleSlug: m = null,
          style: f = {},
          className: p
        } = n;
        const [A, h] = (0, t.useState)(!1), {
          inView: b
        } = (0, o.useInView)({
          threshold: .6
        }), [v, u] = (0, t.useState)({
          ratingDescriptors: e,
          ratingFooter: c,
          ratingImg: l,
          ratingUrl: g
        }), {
          track: x
        } = (0, s.useGtmTrack)(), k = (0, r.useIntl)(), {
          data: w
        } = (0, i.useQuery)(z.GameData, {
          variables: {
            titleSlug: m
          },
          skip: !m
        });
        if ((0, t.useEffect)((() => {
            w && u(w?.game)
          }), [w]), (0, t.useEffect)((() => {
            b && !A && v.img_rating && (x({
              event: "page_section_impression",
              element_placement: "rating"
            }), h(!0))
          }), [b]), !v.ratingImg) return null;
        const C = !!v.ratingDescriptors;
        return (0, I.jsxs)("div", {
          className: [y.rating, C ? y.withDescriptors : y.withOutDescriptors, p || ""].join(" "),
          style: (0, i.safeStyles)(f),
          "data-testId": "rating",
          children: [(0, I.jsx)(d.A, {
            to: v.ratingUrl,
            target: "_blank",
            children: (0, I.jsx)("img", {
              alt: k.formatMessage(B.components_ratings_link_alt, {
                rating: (_ = v.ratingImg, _.replace(/_/g, " ").split(".")[0].toUpperCase())
              }),
              src: a(8194)(`./${v.ratingImg}`)
            })
          }), C && (0, I.jsxs)("div", {
            className: y.text,
            children: [(0, I.jsx)("p", {
              className: y.descriptors,
              dangerouslySetInnerHTML: {
                __html: v?.ratingDescriptors?.split(/<br\s?\/?>/).join(", ") || ""
              }
            }), v.ratingFooter && (0, I.jsx)("hr", {}), v.ratingFooter && (0, I.jsx)("p", {
              dangerouslySetInnerHTML: {
                __html: v.ratingFooter.replace(/ \//g, ", ")
              }
            })]
          })]
        });
        var _
      })))
    },
    16893: (n, e, a) => {
      "use strict";
      a.d(e, {
        A: () => x
      });
      var t = a(45768),
        r = a(53178),
        i = a.n(r),
        o = a(27835),
        s = a.n(o),
        d = a(17529),
        c = a.n(d),
        g = a(72162),
        l = a.n(g),
        m = a(82510),
        f = a.n(m),
        p = a(90675),
        A = a.n(p),
        h = a(87572),
        b = {};
      b.styleTagTransform = A(), b.setAttributes = l(), b.insert = c().bind(null, "head"), b.domAPI = s(), b.insertStyleElement = f(), i()(h.A, b);
      const v = h.A && h.A.locals ? h.A.locals : void 0;
      var u = a(73855);
      const x = n => {
        let {
          className: e = "",
          children: a,
          context: r = "",
          to: i,
          onClick: o,
          target: s = "_self",
          ...d
        } = n;
        const c = [v.button, v[r], e].join(" ");
        return i ? (0, u.jsx)(t.A, {
          ...d,
          to: i,
          className: c,
          onClick: o,
          target: s,
          children: a
        }) : (0, u.jsx)("button", {
          ...d,
          type: "button",
          className: c,
          onClick: o,
          children: a
        })
      }
    },
    79882: (n, e, a) => {
      "use strict";
      a.d(e, {
        A: () => p
      });
      var t = a(42587),
        r = a.n(t),
        i = a(15081),
        o = a.n(i),
        s = a(79908),
        d = a.n(s),
        c = new URL(a(5071), a.b),
        g = new URL(a(76372), a.b),
        l = o()(r()),
        m = d()(c),
        f = d()(g);
      l.push([n.id, `.rockstargames-sites-gta-gen9c881ff12d1d9fb612b4ddd89178684e4{align-items:center;background:var(--white-15);border:none;border-radius:100px;color:var(--white-100);cursor:pointer;display:flex;font-family:var(--font-family-body);font-size:20px;font-style:normal;font-weight:700;justify-content:center;line-height:var(--rem-125);min-width:var(--rem-6);padding:var(--padding-xs) var(--padding-sm);text-align:center;transition:background-color .3s ease-in-out}.rockstargames-sites-gta-gen9c881ff12d1d9fb612b4ddd89178684e4 img{height:var(--nav-icon-size);margin-left:var(--grid-gap-xs);transition:filter .3s ease-in-out;width:var(--nav-icon-size)}.rockstargames-sites-gta-gen9c881ff12d1d9fb612b4ddd89178684e4:focus,.rockstargames-sites-gta-gen9c881ff12d1d9fb612b4ddd89178684e4:hover{background-color:var(--white-40);outline:none}.rockstargames-sites-gta-gen9c881ff12d1d9fb612b4ddd89178684e4.rockstargames-sites-gta-gen9dece7a2abb867cf09add3f7429e7383b{background:var(--white-100);color:var(--black-200)}.rockstargames-sites-gta-gen9c881ff12d1d9fb612b4ddd89178684e4.rockstargames-sites-gta-gen9dece7a2abb867cf09add3f7429e7383b img{filter:invert()}.rockstargames-sites-gta-gen9e8b19ed9af6aedef68997370cd508539{--padding-dynamic:var(--padding-sides);--padding-dynamic-tb:0}.rockstargames-sites-gta-gen9e8b19ed9af6aedef68997370cd508539,.rockstargames-sites-gta-gen9ab742f2f5b6947ec0b2facff923a076f{margin:0 auto;max-width:calc(var(--max-width-dynamic, var(--content-max-width)) + var(--padding-dynamic, 0px) * 2)!important;padding:var(--padding-t,var(--padding-dynamic-tb,0)) var(--padding-dynamic,0) var(--padding-b,var(--padding-dynamic-tb,0)) var(--padding-dynamic,0);width:100%}.rockstargames-sites-gta-gen9ab742f2f5b6947ec0b2facff923a076f{--padding-dynamic:var(--padding-md);--padding-dynamic-tb:var(--padding-md);align-content:center;background-color:var(--black-200);border:1px solid var(--border-color);border-radius:var(--border-radius-md);color:#fff;display:flex;flex-direction:column;justify-content:space-between}@media (min-width:1024px){.rockstargames-sites-gta-gen9ab742f2f5b6947ec0b2facff923a076f{align-items:center;flex-direction:row}}@media (min-width:1200px){.rockstargames-sites-gta-gen9ab742f2f5b6947ec0b2facff923a076f{--padding-dynamic:3rem;--padding-dynamic-tb:3rem}}@media (min-width:1440px){.rockstargames-sites-gta-gen9ab742f2f5b6947ec0b2facff923a076f{--padding-dynamic:var(--padding-lg);--padding-dynamic-tb:var(--padding-lg)}}.rockstargames-sites-gta-gen9ab742f2f5b6947ec0b2facff923a076f .rockstargames-sites-gta-gen9e86d59dd2e0ab3c594c33eccde3e8fea.rockstargames-sites-gta-gen9d7d4d815f9e36b62ef54befcc89ca296{margin:0 0 var(--spacing-md)}@media (min-width:1024px){.rockstargames-sites-gta-gen9ab742f2f5b6947ec0b2facff923a076f .rockstargames-sites-gta-gen9e86d59dd2e0ab3c594c33eccde3e8fea.rockstargames-sites-gta-gen9d7d4d815f9e36b62ef54befcc89ca296{margin:0 var(--spacing-xl) 0 0}}.rockstargames-sites-gta-gen9ab742f2f5b6947ec0b2facff923a076f .rockstargames-sites-gta-gen9e86d59dd2e0ab3c594c33eccde3e8fea .rockstargames-sites-gta-gen9fb0bbc5bcc4fb2c7d0b8152001df0497{color:var(--color-override,var(--color-h));font-family:var(--font-family-h);font-size:calc(var(--font-size-6) * var(--header-multiplier));font-weight:var(--font-weight-regular);letter-spacing:var(--letter-spacing-h);line-height:var(--line-height-md)}[data-theme="9998"] .rockstargames-sites-gta-gen9ab742f2f5b6947ec0b2facff923a076f .rockstargames-sites-gta-gen9e86d59dd2e0ab3c594c33eccde3e8fea .rockstargames-sites-gta-gen9fb0bbc5bcc4fb2c7d0b8152001df0497{font-family:var(--callout-section-header-font)!important;text-transform:var(--callout-section-header-text-transform)!important}.rockstargames-sites-gta-gen9ab742f2f5b6947ec0b2facff923a076f .rockstargames-sites-gta-gen9e86d59dd2e0ab3c594c33eccde3e8fea .rockstargames-sites-gta-gen9f5fe27da672cf05e64359ada500a6b7a{color:var(--color-body);font-family:var(--font-family-body);font-size:var(--font-size-3);font-weight:var(--font-weight-regular);letter-spacing:var(--letter-spacing-body);line-height:var(--line-height-lg);text-transform:var(--callout-section-subheader-text-transform)}@media (min-width:1024px){.rockstargames-sites-gta-gen9ab742f2f5b6947ec0b2facff923a076f .rockstargames-sites-gta-gen9e86d59dd2e0ab3c594c33eccde3e8fea{max-width:60ch}}.rockstargames-sites-gta-gen9ab742f2f5b6947ec0b2facff923a076f .rockstargames-sites-gta-gen9b5e2fa8800d39c78682d9ce8ce5e53f8{display:flex;flex-direction:row}.rockstargames-sites-gta-gen9ab742f2f5b6947ec0b2facff923a076f .rockstargames-sites-gta-gen9b5e2fa8800d39c78682d9ce8ce5e53f8 .rockstargames-sites-gta-gen9ecdf609ed8d6c4039be969205b7e3ac0:first-of-type{margin-right:32px}.rockstargames-sites-gta-gen9ab742f2f5b6947ec0b2facff923a076f .rockstargames-sites-gta-gen9b5e2fa8800d39c78682d9ce8ce5e53f8 .rockstargames-sites-gta-gen9ecdf609ed8d6c4039be969205b7e3ac0.rockstargames-sites-gta-gen9f8d6a685395153161827b5cf8c6ddb93{background:var(--black-65,rgba(0,0,0,.65));border:1px solid var(--white-100,#fff);border-radius:50%;cursor:pointer;height:3rem;padding:0;position:relative;transition:background .3s ease-in-out;width:3rem}.rockstargames-sites-gta-gen9ab742f2f5b6947ec0b2facff923a076f .rockstargames-sites-gta-gen9b5e2fa8800d39c78682d9ce8ce5e53f8 .rockstargames-sites-gta-gen9ecdf609ed8d6c4039be969205b7e3ac0.rockstargames-sites-gta-gen9f8d6a685395153161827b5cf8c6ddb93:after{background:url(${m}) no-repeat 50%/1rem;content:"";display:block;height:100%;left:0;position:absolute;top:0;transition:.3s ease-in-out;width:100%}.rockstargames-sites-gta-gen9ab742f2f5b6947ec0b2facff923a076f .rockstargames-sites-gta-gen9b5e2fa8800d39c78682d9ce8ce5e53f8 .rockstargames-sites-gta-gen9ecdf609ed8d6c4039be969205b7e3ac0.rockstargames-sites-gta-gen9f8d6a685395153161827b5cf8c6ddb93:focus{border:none;outline:none}@media (pointer:coarse){.rockstargames-sites-gta-gen9ab742f2f5b6947ec0b2facff923a076f .rockstargames-sites-gta-gen9b5e2fa8800d39c78682d9ce8ce5e53f8 .rockstargames-sites-gta-gen9ecdf609ed8d6c4039be969205b7e3ac0.rockstargames-sites-gta-gen9f8d6a685395153161827b5cf8c6ddb93:active{background:var(--white-100,#fff)}.rockstargames-sites-gta-gen9ab742f2f5b6947ec0b2facff923a076f .rockstargames-sites-gta-gen9b5e2fa8800d39c78682d9ce8ce5e53f8 .rockstargames-sites-gta-gen9ecdf609ed8d6c4039be969205b7e3ac0.rockstargames-sites-gta-gen9f8d6a685395153161827b5cf8c6ddb93:active:after{filter:invert(1)}}@media not ((pointer:coarse)){.rockstargames-sites-gta-gen9ab742f2f5b6947ec0b2facff923a076f .rockstargames-sites-gta-gen9b5e2fa8800d39c78682d9ce8ce5e53f8 .rockstargames-sites-gta-gen9ecdf609ed8d6c4039be969205b7e3ac0.rockstargames-sites-gta-gen9f8d6a685395153161827b5cf8c6ddb93:focus,.rockstargames-sites-gta-gen9ab742f2f5b6947ec0b2facff923a076f .rockstargames-sites-gta-gen9b5e2fa8800d39c78682d9ce8ce5e53f8 .rockstargames-sites-gta-gen9ecdf609ed8d6c4039be969205b7e3ac0.rockstargames-sites-gta-gen9f8d6a685395153161827b5cf8c6ddb93:hover{background:var(--white-100,#fff)}.rockstargames-sites-gta-gen9ab742f2f5b6947ec0b2facff923a076f .rockstargames-sites-gta-gen9b5e2fa8800d39c78682d9ce8ce5e53f8 .rockstargames-sites-gta-gen9ecdf609ed8d6c4039be969205b7e3ac0.rockstargames-sites-gta-gen9f8d6a685395153161827b5cf8c6ddb93:focus:after,.rockstargames-sites-gta-gen9ab742f2f5b6947ec0b2facff923a076f .rockstargames-sites-gta-gen9b5e2fa8800d39c78682d9ce8ce5e53f8 .rockstargames-sites-gta-gen9ecdf609ed8d6c4039be969205b7e3ac0.rockstargames-sites-gta-gen9f8d6a685395153161827b5cf8c6ddb93:hover:after{filter:invert(1)}}.rockstargames-sites-gta-gen9ab742f2f5b6947ec0b2facff923a076f .rockstargames-sites-gta-gen9b5e2fa8800d39c78682d9ce8ce5e53f8 .rockstargames-sites-gta-gen9ecdf609ed8d6c4039be969205b7e3ac0.rockstargames-sites-gta-gen9b1953057e462cdf6c79a4b8e6f2fe91b{background:var(--black-65,rgba(0,0,0,.65));border:1px solid var(--white-100,#fff);border-radius:50%;cursor:pointer;height:3rem;padding:0;position:relative;transition:background .3s ease-in-out;width:3rem}.rockstargames-sites-gta-gen9ab742f2f5b6947ec0b2facff923a076f .rockstargames-sites-gta-gen9b5e2fa8800d39c78682d9ce8ce5e53f8 .rockstargames-sites-gta-gen9ecdf609ed8d6c4039be969205b7e3ac0.rockstargames-sites-gta-gen9b1953057e462cdf6c79a4b8e6f2fe91b:after{background:url(${f}) no-repeat 50%/1rem;content:"";display:block;height:100%;left:0;position:absolute;top:0;transition:.3s ease-in-out;width:100%}.rockstargames-sites-gta-gen9ab742f2f5b6947ec0b2facff923a076f .rockstargames-sites-gta-gen9b5e2fa8800d39c78682d9ce8ce5e53f8 .rockstargames-sites-gta-gen9ecdf609ed8d6c4039be969205b7e3ac0.rockstargames-sites-gta-gen9b1953057e462cdf6c79a4b8e6f2fe91b:focus{border:none;outline:none}@media (pointer:coarse){.rockstargames-sites-gta-gen9ab742f2f5b6947ec0b2facff923a076f .rockstargames-sites-gta-gen9b5e2fa8800d39c78682d9ce8ce5e53f8 .rockstargames-sites-gta-gen9ecdf609ed8d6c4039be969205b7e3ac0.rockstargames-sites-gta-gen9b1953057e462cdf6c79a4b8e6f2fe91b:active{background:var(--white-100,#fff)}.rockstargames-sites-gta-gen9ab742f2f5b6947ec0b2facff923a076f .rockstargames-sites-gta-gen9b5e2fa8800d39c78682d9ce8ce5e53f8 .rockstargames-sites-gta-gen9ecdf609ed8d6c4039be969205b7e3ac0.rockstargames-sites-gta-gen9b1953057e462cdf6c79a4b8e6f2fe91b:active:after{filter:invert(1)}}@media not ((pointer:coarse)){.rockstargames-sites-gta-gen9ab742f2f5b6947ec0b2facff923a076f .rockstargames-sites-gta-gen9b5e2fa8800d39c78682d9ce8ce5e53f8 .rockstargames-sites-gta-gen9ecdf609ed8d6c4039be969205b7e3ac0.rockstargames-sites-gta-gen9b1953057e462cdf6c79a4b8e6f2fe91b:focus,.rockstargames-sites-gta-gen9ab742f2f5b6947ec0b2facff923a076f .rockstargames-sites-gta-gen9b5e2fa8800d39c78682d9ce8ce5e53f8 .rockstargames-sites-gta-gen9ecdf609ed8d6c4039be969205b7e3ac0.rockstargames-sites-gta-gen9b1953057e462cdf6c79a4b8e6f2fe91b:hover{background:var(--white-100,#fff)}.rockstargames-sites-gta-gen9ab742f2f5b6947ec0b2facff923a076f .rockstargames-sites-gta-gen9b5e2fa8800d39c78682d9ce8ce5e53f8 .rockstargames-sites-gta-gen9ecdf609ed8d6c4039be969205b7e3ac0.rockstargames-sites-gta-gen9b1953057e462cdf6c79a4b8e6f2fe91b:focus:after,.rockstargames-sites-gta-gen9ab742f2f5b6947ec0b2facff923a076f .rockstargames-sites-gta-gen9b5e2fa8800d39c78682d9ce8ce5e53f8 .rockstargames-sites-gta-gen9ecdf609ed8d6c4039be969205b7e3ac0.rockstargames-sites-gta-gen9b1953057e462cdf6c79a4b8e6f2fe91b:hover:after{filter:invert(1)}}.rockstargames-sites-gta-gen9ab742f2f5b6947ec0b2facff923a076f .rockstargames-sites-gta-gen9b5e2fa8800d39c78682d9ce8ce5e53f8 .rockstargames-sites-gta-gen9ecdf609ed8d6c4039be969205b7e3ac0.rockstargames-sites-gta-gen9f8d6a685395153161827b5cf8c6ddb93.rockstargames-sites-gta-gen9ec9f200e6987aebf6375c999eecd5dc3{background-color:green;border-color:green}.rockstargames-sites-gta-gen9ab742f2f5b6947ec0b2facff923a076f .rockstargames-sites-gta-gen9b5e2fa8800d39c78682d9ce8ce5e53f8 .rockstargames-sites-gta-gen9ecdf609ed8d6c4039be969205b7e3ac0.rockstargames-sites-gta-gen9b1953057e462cdf6c79a4b8e6f2fe91b.rockstargames-sites-gta-gen9ec9f200e6987aebf6375c999eecd5dc3{background-color:#c00;border-color:#c00}.rockstargames-sites-gta-gen9ab742f2f5b6947ec0b2facff923a076f .rockstargames-sites-gta-gen9b8ed029eb7d9b09c70caa4576bbb4c5a{align-self:center;font-family:var(--font-family-h,ChaletComprime);font-size:var(--font-size-4);font-weight:var(--font-weight-regular);padding:calc(var(--padding-sm) + .2rem) var(--padding-lg) var(--padding-sm);text-align:center;white-space:nowrap;width:100%}.rockstargames-sites-gta-gen9ab742f2f5b6947ec0b2facff923a076f .rockstargames-sites-gta-gen9b8ed029eb7d9b09c70caa4576bbb4c5a:hover{background:#fff;border-color:#fff;color:#000}@media (min-width:1024px){.rockstargames-sites-gta-gen9ab742f2f5b6947ec0b2facff923a076f .rockstargames-sites-gta-gen9b8ed029eb7d9b09c70caa4576bbb4c5a{width:unset}}.rockstargames-sites-gta-gen9ab742f2f5b6947ec0b2facff923a076f .rockstargames-sites-gta-gen9bc07ececd6531f5df1c8cba48c846797{align-items:center;background-color:initial;border:none;color:#fff;cursor:pointer;display:flex;font-family:ChaletComprime;font-family:var(--font-family-h);font-size:var(--font-size-4);font-size:var(--font-size-3);font-weight:var(--font-weight-regular);letter-spacing:var(--letter-spacing-h);line-height:1;line-height:var(--line-height-sm);padding:2rem;text-align:center;text-transform:uppercase;white-space:nowrap}@media (min-width:1024px){.rockstargames-sites-gta-gen9ab742f2f5b6947ec0b2facff923a076f .rockstargames-sites-gta-gen9bc07ececd6531f5df1c8cba48c846797{padding:3rem 0 3rem 3rem}}.rockstargames-sites-gta-gen9ab742f2f5b6947ec0b2facff923a076f .rockstargames-sites-gta-gen9bc07ececd6531f5df1c8cba48c846797 .rockstargames-sites-gta-gen9db31e98c20de15e8d5983285bd6ec92e{margin:-4px 0 0 var(--spacing-xxs)}[data-type=gallery] .rockstargames-sites-gta-gen9e8b19ed9af6aedef68997370cd508539,[data-type=short] .rockstargames-sites-gta-gen9e8b19ed9af6aedef68997370cd508539{padding:unset}[data-type=gallery] .rockstargames-sites-gta-gen9ab742f2f5b6947ec0b2facff923a076f,[data-type=short] .rockstargames-sites-gta-gen9ab742f2f5b6947ec0b2facff923a076f{max-width:calc(var(--max-width-dynamic, var(--text-section-max-width, var(--max-width-static-md))) + var(--padding-dynamic, 0px) * 2)!important}@media (min-width:1024px){[data-type=gallery] .rockstargames-sites-gta-gen9ab742f2f5b6947ec0b2facff923a076f,[data-type=short] .rockstargames-sites-gta-gen9ab742f2f5b6947ec0b2facff923a076f{align-items:unset;flex-direction:column;padding:var(--spacing-md)}[data-type=gallery] .rockstargames-sites-gta-gen9ab742f2f5b6947ec0b2facff923a076f .rockstargames-sites-gta-gen9e86d59dd2e0ab3c594c33eccde3e8fea.rockstargames-sites-gta-gen9d7d4d815f9e36b62ef54befcc89ca296,[data-type=short] .rockstargames-sites-gta-gen9ab742f2f5b6947ec0b2facff923a076f .rockstargames-sites-gta-gen9e86d59dd2e0ab3c594c33eccde3e8fea.rockstargames-sites-gta-gen9d7d4d815f9e36b62ef54befcc89ca296{margin:0 0 var(--spacing-md)}}[data-type=gallery] .rockstargames-sites-gta-gen9ab742f2f5b6947ec0b2facff923a076f .rockstargames-sites-gta-gen9b8ed029eb7d9b09c70caa4576bbb4c5a,[data-type=short] .rockstargames-sites-gta-gen9ab742f2f5b6947ec0b2facff923a076f .rockstargames-sites-gta-gen9b8ed029eb7d9b09c70caa4576bbb4c5a{width:100%}[data-type=gallery] .rockstargames-sites-gta-gen9ab742f2f5b6947ec0b2facff923a076f .rockstargames-sites-gta-gen9bc07ececd6531f5df1c8cba48c846797,[data-type=long] .rockstargames-sites-gta-gen9e8b19ed9af6aedef68997370cd508539,[data-type=short] .rockstargames-sites-gta-gen9ab742f2f5b6947ec0b2facff923a076f .rockstargames-sites-gta-gen9bc07ececd6531f5df1c8cba48c846797{padding:unset}[data-type=long] .rockstargames-sites-gta-gen9ab742f2f5b6947ec0b2facff923a076f{margin:var(--spacing-md);padding:var(--spacing-md)!important}@media (min-width:1024px){[data-type=long] .rockstargames-sites-gta-gen9ab742f2f5b6947ec0b2facff923a076f{align-items:center;margin:unset;max-width:var(--image-with-badge-width)}}[data-type=long] .rockstargames-sites-gta-gen9ab742f2f5b6947ec0b2facff923a076f .rockstargames-sites-gta-gen9e86d59dd2e0ab3c594c33eccde3e8fea.rockstargames-sites-gta-gen9d7d4d815f9e36b62ef54befcc89ca296{margin:0 0 var(--spacing-md)}@media (min-width:1024px){[data-type=long] .rockstargames-sites-gta-gen9ab742f2f5b6947ec0b2facff923a076f .rockstargames-sites-gta-gen9e86d59dd2e0ab3c594c33eccde3e8fea.rockstargames-sites-gta-gen9d7d4d815f9e36b62ef54befcc89ca296{margin:0 var(--spacing-md) 0 0}}[data-context=clr-article] .rockstargames-sites-gta-gen9e8b19ed9af6aedef68997370cd508539{--news-intro-max-width:var(--max-width-static);margin:0 auto;max-width:calc(var(--max-width-dynamic, var(--news-intro-max-width)) + var(--padding-dynamic, 0px) * 2)!important;width:100%}@media (min-width:768px){[data-context=clr-article] .rockstargames-sites-gta-gen9e8b19ed9af6aedef68997370cd508539{padding:0}}[data-context=clr-article] .rockstargames-sites-gta-gen9e8b19ed9af6aedef68997370cd508539 .rockstargames-sites-gta-gen9ab742f2f5b6947ec0b2facff923a076f{--font-weight-regular:700;background-color:var(--black-200)!important;padding:var(--spacing-md)}[data-context=clr-article] .rockstargames-sites-gta-gen9e8b19ed9af6aedef68997370cd508539 .rockstargames-sites-gta-gen9ab742f2f5b6947ec0b2facff923a076f .rockstargames-sites-gta-gen9fb0bbc5bcc4fb2c7d0b8152001df0497{font-size:var(--font-size-3)!important}[data-context=clr-article] .rockstargames-sites-gta-gen9e8b19ed9af6aedef68997370cd508539 .rockstargames-sites-gta-gen9ab742f2f5b6947ec0b2facff923a076f .rockstargames-sites-gta-gen9bc07ececd6531f5df1c8cba48c846797{--font-weight-regular:600;font-family:Rubik!important;font-size:var(--font-size-2);padding:0}[data-context=clr-article] .rockstargames-sites-gta-gen9e8b19ed9af6aedef68997370cd508539 .rockstargames-sites-gta-gen9ab742f2f5b6947ec0b2facff923a076f .rockstargames-sites-gta-gen9db31e98c20de15e8d5983285bd6ec92e{margin:0 0 0 var(--spacing-xxs)}[data-context=clr-article] .rockstargames-sites-gta-gen9e8b19ed9af6aedef68997370cd508539 .rockstargames-sites-gta-gen9ab742f2f5b6947ec0b2facff923a076f .rockstargames-sites-gta-gen9b1516576d0566f12c906be9e81407ce4{justify-items:inherit}[data-context=clr-card] .rockstargames-sites-gta-gen9e8b19ed9af6aedef68997370cd508539 .rockstargames-sites-gta-gen9ab742f2f5b6947ec0b2facff923a076f{--font-family-h:Raleway;--font-weight-regular:700}[data-context=clr-card] .rockstargames-sites-gta-gen9e8b19ed9af6aedef68997370cd508539 .rockstargames-sites-gta-gen9ab742f2f5b6947ec0b2facff923a076f .rockstargames-sites-gta-gen9e86d59dd2e0ab3c594c33eccde3e8fea h1,[data-context=clr-card] .rockstargames-sites-gta-gen9e8b19ed9af6aedef68997370cd508539 .rockstargames-sites-gta-gen9ab742f2f5b6947ec0b2facff923a076f .rockstargames-sites-gta-gen9e86d59dd2e0ab3c594c33eccde3e8fea h2{font-size:var(--font-size-4)!important}[data-context=clr-card] .rockstargames-sites-gta-gen9e8b19ed9af6aedef68997370cd508539 .rockstargames-sites-gta-gen9ab742f2f5b6947ec0b2facff923a076f .rockstargames-sites-gta-gen9bc07ececd6531f5df1c8cba48c846797{--font-weight-regular:600;font-family:Rubik!important;font-size:var(--font-size-2);padding:0}[data-context=clr-card] .rockstargames-sites-gta-gen9e8b19ed9af6aedef68997370cd508539 .rockstargames-sites-gta-gen9ab742f2f5b6947ec0b2facff923a076f .rockstargames-sites-gta-gen9db31e98c20de15e8d5983285bd6ec92e{margin:0 0 0 var(--spacing-xxs)}[data-context=clr-card] .rockstargames-sites-gta-gen9e8b19ed9af6aedef68997370cd508539 .rockstargames-sites-gta-gen9ab742f2f5b6947ec0b2facff923a076f .rockstargames-sites-gta-gen9b1516576d0566f12c906be9e81407ce4{justify-items:inherit}[data-context=interestTracker] .rockstargames-sites-gta-gen9e8b19ed9af6aedef68997370cd508539{width:-webkit-fill-available}[data-context=interestTracker] .rockstargames-sites-gta-gen9e8b19ed9af6aedef68997370cd508539 .rockstargames-sites-gta-gen9ab742f2f5b6947ec0b2facff923a076f{background:var(--blacks-black-100,#121212);padding:var(--spacing-sm)!important}@media (max-width:1023px){[data-context=interestTracker] .rockstargames-sites-gta-gen9e8b19ed9af6aedef68997370cd508539 .rockstargames-sites-gta-gen9ab742f2f5b6947ec0b2facff923a076f{margin:0!important}}[data-context=interestTracker] .rockstargames-sites-gta-gen9e8b19ed9af6aedef68997370cd508539 .rockstargames-sites-gta-gen9fb0bbc5bcc4fb2c7d0b8152001df0497{color:var(--color-override,var(--color-h));font-family:var(--font-family-h);font-size:calc(var(--font-size-4) * var(--header-multiplier));font-weight:var(--font-weight-regular);letter-spacing:var(--letter-spacing-h);line-height:var(--line-height-md)}[data-context=interestTracker] .rockstargames-sites-gta-gen9e8b19ed9af6aedef68997370cd508539 .rockstargames-sites-gta-gen9f5fe27da672cf05e64359ada500a6b7a{color:var(--color-body);font-family:var(--font-family-body);font-size:var(--font-size-2);font-weight:var(--font-weight-regular);letter-spacing:var(--letter-spacing-body);line-height:var(--line-height-lg);max-width:640px}[data-context=interestTracker] .rockstargames-sites-gta-gen9e8b19ed9af6aedef68997370cd508539 .rockstargames-sites-gta-gen9b8ed029eb7d9b09c70caa4576bbb4c5a{padding:calc(var(--padding-xs) + .2rem) var(--padding-sm) var(--padding-xs)}.rockstargames-sites-gta-gen9b1516576d0566f12c906be9e81407ce4{display:grid;gap:var(--grid-gap-sm);justify-items:flex-end}.rockstargames-sites-gta-gen9f713e165e153987c3855d93dc1614f4d{font-family:var(--font-family-body);font-size:var(--font-size-2);font-weight:var(--font-weight-regular);letter-spacing:var(--letter-spacing-body);line-height:var(--line-height-lg);margin:0 auto;white-space:nowrap}@media (min-width:1024px){.rockstargames-sites-gta-gen9f713e165e153987c3855d93dc1614f4d{margin:unset;text-align:right}}.rockstargames-sites-gta-gen9f713e165e153987c3855d93dc1614f4d a{font-weight:var(--font-weight-bold)}.rockstargames-sites-gta-gen9f713e165e153987c3855d93dc1614f4d a:hover{text-decoration:underline}`, "", {
        version: 3,
        sources: ["webpack://./../../buildtime/legacy-design-system/less/gen9-mixins.less", "webpack://./../../buildtime/components/src/CalloutSection/index.less", "webpack://./../../buildtime/legacy-design-system/less/mixins.less"],
        names: [],
        mappings: "AA2QA,8DAKI,kBAAA,CAGA,0BAAA,CAFA,WAAA,CACA,mBAAA,CAIA,sBAAA,CAQA,cAAA,CAlBA,YAAA,CAYA,mCAAA,CACA,cAAA,CACA,iBAAA,CACA,eAAA,CAZA,sBAAA,CAaA,0BAAA,CAfA,sBAAA,CACA,2CAAA,CASA,iBAAA,CAQA,2CC9OJ,CD0NA,kEAwBQ,2BAAA,CADA,8BAAA,CAGA,iCAAA,CADA,0BC7OR,CDiPI,wIAEI,gCAAA,CACA,YC/OR,CDkPI,2HAEI,2BAAA,CADA,sBC/OR,CD8OI,+HAKQ,eChPZ,CAhEA,8DDiKI,sCAAA,CACA,sBC1FJ,CApEA,4HDyJI,aAAA,CAJA,8GAAA,CAWA,mJAAA,CAZA,UChEJ,CApFA,8DD6JI,mCAAA,CACA,sCAAA,CClJA,oBAAA,CANA,iCAAA,CAFA,oCAAA,CACA,qCAAA,CAEA,UAAA,CAEA,YAAA,CACA,qBAAA,CACA,6BAyEJ,CCjBI,0BAAA,8DDnDI,kBAAA,CADA,kBA0EN,CACF,CAvEI,0BAAA,8DACI,sBAAA,CACA,yBA0EN,CACF,CAxEI,0BAAA,8DACI,mCAAA,CACA,sCA2EN,CACF,CAxEQ,yLACI,4BA0EZ,CCtCI,0BAAA,yLDjCY,8BA2Ed,CACF,CA9GA,0LD6BI,0CAAA,CAJA,gCAAA,CADA,6DAAA,CAGA,sCAAA,CACA,sCAAA,CAFA,iCC4FJ,CA9EY,8MACI,wDAAA,CACA,qEAgFhB,CA1HA,0LDsGI,uBAAA,CAJA,mCAAA,CADA,4BAAA,CAGA,sCAAA,CACA,yCAAA,CAFA,iCAAA,CCjDQ,8DAiFZ,CChEI,0BAAA,4HDbQ,cAiFV,CACF,CAxIA,4HA2DQ,YAAA,CACA,kBAgFR,CA5IA,wMA+DY,iBAgFZ,CA5EY,uPD0HR,0CAAA,CACA,sCAAA,CACA,iBAAA,CAHA,cAAA,CAFA,WAAA,CAMA,SAAA,CALA,iBAAA,CAMA,qCAAA,CARA,UC/BJ,CDwCI,6PAvBA,qEAAA,CAyBI,UAAA,CACA,aAAA,CACA,WAAA,CAGA,MAAA,CADA,iBAAA,CAEA,KAAA,CACA,0BAAA,CAJA,UClCR,CDyCI,6PAEI,WAAA,CADA,YCtCR,CDqLI,wBA1II,8PACI,gCCxCV,CDyCU,oQACI,gBCvCd,CACF,CDgLI,8BAtII,0fAEI,gCCvCV,CDwCU,sgBACI,gBCrCd,CACF,CApHY,uPDsHR,0CAAA,CACA,sCAAA,CACA,iBAAA,CAHA,cAAA,CAFA,WAAA,CAMA,SAAA,CALA,iBAAA,CAMA,qCAAA,CARA,UCaJ,CDJI,6PAvBA,qEAAA,CAyBI,UAAA,CACA,aAAA,CACA,WAAA,CAGA,MAAA,CADA,iBAAA,CAEA,KAAA,CACA,0BAAA,CAJA,UCUR,CDHI,6PAEI,WAAA,CADA,YCMR,CDyII,wBA1II,8PACI,gCCIV,CDHU,oQACI,gBCKd,CACF,CDoII,8BAtII,0fAEI,gCCKV,CDJU,sgBACI,gBCOd,CACF,CA5JY,oTAEI,sBAAA,CADA,kBA+JhB,CA3JY,oTAEI,qBAAA,CADA,iBA8JhB,CA/OA,4HAiGQ,iBAAA,CATA,+CAAA,CACA,4BAAA,CACA,sCAAA,CACA,2EAAA,CAEA,iBAAA,CAEA,kBAAA,CADA,UA2JR,CAtJQ,kIACI,eAAA,CACA,iBAAA,CACA,UAwJZ,CC3LI,0BAAA,4HDuCQ,WAwJV,CACF,CAnQA,4HA2HQ,kBAAA,CAZA,wBAAA,CACA,WAAA,CACA,UAAA,CACA,cAAA,CAQA,YAAA,CAPA,0BAAA,CCqzBJ,gCAAA,CADA,4BAAA,CAUA,4BAAA,CAPA,sCAAA,CACA,sCAAA,CDvzBI,aAAA,CCqzBJ,iCAAA,CDpzBI,YAAA,CACA,iBAAA,CCszBJ,wBAAA,CDpzBI,kBA+JR,CCpNI,0BAAA,4HD4DQ,wBA4JV,CACF,CA5RA,0LAmIY,kCA4JZ,CAvJA,kKAGQ,aAwJR,CA3JA,kKAOQ,+IAwJR,CCpOI,0BAAA,kKDuFQ,iBAAA,CADA,qBAAA,CAFA,yBAuJV,CC3OE,wZD6FgB,4BAoJlB,CALF,CAvKA,8RA8BY,UAmJZ,CA1IA,6WAEQ,aA+IR,CAjJA,+EAMQ,wBAAA,CACA,mCA8IR,CCjQI,0BAAA,+EDyHQ,kBAAA,CAHA,YAAA,CACA,uCAgJV,CACF,CA3IY,0MACI,4BA6IhB,CC3QI,0BAAA,0MDiIgB,8BA8IlB,CACF,CAxIA,yFAEQ,8CAAA,CAEA,aAAA,CD1DJ,iHAAA,CADA,UCqMJ,CCxSI,yBAAA,yFDiKQ,SA2IV,CACF,CAnJA,uJAcY,yBAAA,CAHA,2CAAA,CAEA,yBA2IZ,CAxJA,qNAiBgB,sCA0IhB,CA3JA,qNAoBgB,yBAAA,CACA,2BAAA,CACA,4BAAA,CACA,SA0IhB,CAjKA,qNA0BgB,+BA0IhB,CApKA,qNA6BgB,qBA0IhB,CApIA,oJAGY,uBAAA,CACA,yBAoIZ,CAxIA,0aASoB,sCAmIpB,CA5IA,kNAagB,yBAAA,CACA,2BAAA,CACA,4BAAA,CACA,SAkIhB,CAlJA,kNAmBgB,+BAkIhB,CArJA,kNAuBgB,qBAiIhB,CA3HA,6FAEQ,4BA4HR,CA9HA,2JAKY,0CAAA,CADA,mCA8HZ,CA3HY,0BAAA,2JACI,kBA8Hd,CACF,CAvIA,2JDhQI,0CAAA,CAJA,gCAAA,CADA,6DAAA,CAGA,sCAAA,CACA,sCAAA,CAFA,iCCkZJ,CA/IA,2JDpLI,uBAAA,CAJA,mCAAA,CADA,4BAAA,CAGA,sCAAA,CACA,yCAAA,CAFA,iCAAA,CCuMQ,eAwIZ,CAxJA,2JAmBY,2EAwIZ,CAlIA,8DACI,YAAA,CACA,sBAAA,CACA,sBAoIJ,CAjIA,8DACI,mCAAA,CACA,4BAAA,CACA,sCAAA,CACA,yCAAA,CACA,iCAAA,CACA,aAAA,CACA,kBAmIJ,CCjXI,0BAAA,8DDiPI,YAAA,CACA,gBAoIN,CACF,CAhJA,gEAeQ,mCAoIR,CAlIQ,sEACI,yBAoIZ",
        sourcesContent: ["@import 'mixins.less';\n\n// Headlines\n.headline-6 () {\n    font-size: calc(var(--font-size-3) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n.headline-5 () {\n    font-size: calc(var(--font-size-4) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n.headline-4 () {\n    font-size: calc(var(--font-size-5) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n.headline-3 () {\n    font-size: calc(var(--font-size-6) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n.headline-3-bold () {\n    .headline-3();\n    font-weight: var(--font-weight-bold);\n    color: var(--color-override, var(--color-h));\n}\n\n.headline-2 () {\n    font-size: calc(var(--font-size-7) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-bold);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n.headline-1 () {\n    font-size: calc(var(--font-size-8) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-bold);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n.xLarge () {\n    font-size: calc(var(--font-size-9) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-bold);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n// Body\n.body-xs () {\n    font-size: var(--font-size-1);\n    font-family: var(--font-family-body);\n    line-height: var(--line-height-lg);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-body);\n    color: var(--color-body);\n}\n\n.body-xs-bold () {\n    .body-xs;\n    font-weight: var(--font-weight-bold);\n    color: var(--color-body);\n}\n\n.body-sm () {\n    font-size: var(--font-size-2);\n    font-family: var(--font-family-body);\n    line-height: var(--line-height-lg);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-body);\n    color: var(--color-body);\n}\n\n.body-sm-bold () {\n    .body-sm;\n    font-weight: var(--font-weight-bold);\n    color: var(--color-body);\n}\n\n.body-md () {\n    font-size: var(--font-size-3);\n    font-family: var(--font-family-body);\n    line-height: var(--line-height-lg);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-body);\n    color: var(--color-body);\n}\n\n.body-md-bold () {\n    .body-md;\n    font-weight: var(--font-weight-bold);\n    color: var(--color-body);\n}\n\n.body-lg () {\n    font-size: var(--font-size-4);\n    font-family: var(--font-family-body);\n    line-height: var(--line-height-lg);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-body);\n    color: var(--color-body);\n}\n\n.body-lg-bold () {\n    .body-lg;\n    font-weight: var(--font-weight-bold);\n    color: var(--color-body);\n}\n\n.handleFontDeclarationsGen9() {\n    h1 {\n        .headline-1;\n    }\n    h2 {\n        .headline-2;\n    }\n    h3 {\n        .headline-3;\n    }\n    h4 {\n        .headline-4;\n    }\n    h5 {\n        .headline-5;\n    }\n    p {\n        .body-md;\n    }\n}\n\n.handleMaxWidth(@max-width-default: 1000000px) {\n    width: 100%;\n    max-width: calc(\n        var(--max-width-dynamic, @max-width-default) +\n            var(--padding-dynamic, 0px) * 2\n    ) !important;\n    margin: 0 auto;\n}\n\n.handlePadding(@paddingSides: initial, @paddingTopBottom: initial) {\n    --padding-dynamic: @paddingSides;\n    --padding-dynamic-tb: @paddingTopBottom;\n\n    padding: var(--padding-t, var(--padding-dynamic-tb, 0))\n        var(--padding-dynamic, 0) var(--padding-b, var(--padding-dynamic-tb, 0))\n        var(--padding-dynamic, 0);\n}\n\n.commonContent() {\n    .handlePadding(var(--padding-sides), 0);\n    .handleMaxWidth(var(--content-max-width));\n}\n\n.backgroundIcon(@icon) {\n    background: url('../icons/@{icon}.svg') no-repeat center/1rem;\n}\n\n@iconBtnConfig: {\n    @small: {\n        size: 2rem;\n    };\n    @large: {\n        size: 3rem;\n    };\n};\n\n.iconBtn(@icon, @size: small) {\n    @lookup: @size;\n    width: @iconBtnConfig[@@lookup][size];\n    height: @iconBtnConfig[@@lookup][size];\n    position: relative;\n    cursor: pointer;\n    background: var(--black-65, rgba(0, 0, 0, 0.65));\n    border: 1px solid var(--white-100, #fff);\n    border-radius: 50%;\n    padding: 0;\n    transition: background 0.3s ease-in-out;\n    &::after {\n        .backgroundIcon(@icon);\n        content: '';\n        display: block;\n        height: 100%;\n        width: 100%;\n        position: absolute;\n        left: 0;\n        top: 0;\n        transition: 0.3s ease-in-out;\n    }\n\n    &:focus {\n        outline: none;\n        border: none;\n    }\n\n    .isTouchscreen({\n        &:active {\n            background: var(--white-100, #fff);\n            &::after {\n                filter: invert(1);\n            }\n        }\n    }, {\n        &:hover,\n        &:focus {\n            background: var(--white-100, #fff);\n            &::after {\n                filter: invert(1);\n            }\n        }\n    });\n}\n\n.iconBtnPlain(@icon, @size: small) {\n    @lookup: @size;\n    width: @iconBtnConfig[@@lookup][size];\n    height: @iconBtnConfig[@@lookup][size];\n    position: relative;\n    cursor: pointer;\n    padding: 0;\n\n    &::after {\n        content: '';\n        display: block;\n        height: 100%;\n        width: 100%;\n        position: absolute;\n        left: 0;\n        top: 0;\n        transition: 0.3s ease-in-out;\n        background: url('../icons/@{icon}.svg') no-repeat center/1.5rem;\n    }\n}\n\n.swiperBtn(@icon) {\n    .iconBtn(@icon, large);\n    background: var(--black-200);\n    border-radius: 0;\n    border: none;\n    &::after {\n        background-size: 1.5rem;\n    }\n}\n\n.pillBtn {\n    display: flex;\n    min-width: var(--rem-6);\n    padding: var(--padding-xs) var(--padding-sm);\n    justify-content: center;\n    align-items: center;\n    border: none;\n    border-radius: 100px;\n    background: var(--white-15);\n    cursor: pointer;\n\n    color: var(--white-100);\n    text-align: center;\n    font-family: var(--font-family-body);\n    font-size: 20px;\n    font-style: normal;\n    font-weight: 700;\n    line-height: var(--rem-125);\n\n    cursor: pointer;\n    transition: background-color 0.3s ease-in-out;\n\n    img {\n        margin-left: var(--grid-gap-xs);\n        height: var(--nav-icon-size);\n        width: var(--nav-icon-size);\n        transition: filter 0.3s ease-in-out;\n    }\n\n    &:hover,\n    &:focus {\n        background-color: var(--white-40);\n        outline: none;\n    }\n\n    &.selected {\n        color: var(--black-200);\n        background: var(--white-100);\n\n        img {\n            filter: invert();\n        }\n    }\n}\n\n.setGen9Root() {\n    --gen9-max-width: 2560px;\n    --content-max-width: var(--gen9-max-width);\n    --padding-sides: var(--padding-lg);\n    --content-padding: 0 var(--padding-sides);\n    flex: 1;\n    display: flex;\n    justify-content: center;\n\n    .xl({\n        --padding-sides: var(--padding-xl);\n    });\n\n    .handleFontDeclarationsGen9();\n}\n\n.scrollFade() {\n    // @note: this is breaking on firefox.\n    mask-image: linear-gradient(\n        to bottom,\n        var(--black-100) calc(100% - 48px),\n        transparent calc(100% + 16px)\n    );\n}\n\n.scrollbar() {\n    /* Firefox */\n    scrollbar-width: auto;\n    scrollbar-color: var(--scroll-thumb-color) var(--scroll-track-color);\n\n    /* Chrome, Edge, and Safari */\n    &::-webkit-scrollbar {\n        width: 8px;\n    }\n    &::-webkit-scrollbar-track {\n        background: transparent;\n    }\n    &::-webkit-scrollbar-thumb {\n        background-color: var(--scroll-thumb-color);\n        border-radius: 10px;\n        border: none;\n    }\n}\n\n.ifElse(@condition, @if-styles, @else-styles) {\n    @media @condition {\n        @if-styles();\n    }\n    @media not (@condition) {\n        @else-styles();\n    }\n}\n\n.isTouchscreen(@if-styles, @else-styles) {\n    .ifElse(~'(pointer: coarse)', @if-styles, @else-styles);\n}\n\n.mobile-landscape(@rules) {\n    @media only screen and (min-width: 480px) and (max-width: 1023px) and (orientation: landscape) {\n        @rules();\n    }\n}\n\n.caret(@color) {\n    .dropdownCaret(@color);\n}\n\n.horizontalScrollFade() {\n    mask-image: linear-gradient(\n        to right,\n        transparent,\n        rgba(0, 0, 0, 0.3) calc(var(--padding-sides) / 2),\n        #000 var(--padding-sides),\n        #000 calc(100% - var(--padding-sides)),\n        rgba(0, 0, 0, 0.3) calc(100% - (var(--padding-sides) / 2)),\n        transparent\n    );\n}\n\n// Accessibility\n.visuallyHidden() {\n    border: 0;\n    clip: rect(0 0 0 0);\n    height: 1px;\n    overflow: hidden;\n    padding: 0;\n    position: absolute;\n    white-space: nowrap;\n    width: 1px;\n}\n", "@import '@rsgweb/legacy-design-system/less/mixins.less';\n@import '@rsgweb/legacy-design-system/less/gen9-mixins.less';\n\n.calloutContainer {\n    .commonContent();\n}\n\n.calloutSection {\n    .handlePadding(var(--padding-md), var(--padding-md));\n    .handleMaxWidth(var(--content-max-width));\n\n    border: 1px solid var(--border-color);\n    border-radius: var(--border-radius-md);\n    background-color: var(--black-200);\n    color: #ffffff;\n\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    align-content: center;\n\n    .lg({\n        flex-direction: row;\n        align-items: center;\n    });\n\n    @media (min-width: 1200px) {\n        --padding-dynamic: 3rem;\n        --padding-dynamic-tb: 3rem;\n    }\n\n    @media (min-width: 1440px) {\n        --padding-dynamic: var(--padding-lg);\n        --padding-dynamic-tb: var(--padding-lg);\n    }\n\n    .calloutHeaders {\n        &.calloutHeaderMargins {\n            margin: 0 0 var(--spacing-md);\n\n            .lg({\n                margin: 0 var(--spacing-xl) 0 0;\n            });\n        }\n\n        .calloutHeader {\n            .headline-3();\n            [data-theme='9998'] & {\n                font-family: var(--callout-section-header-font) !important;\n                text-transform: var(\n                    --callout-section-header-text-transform\n                ) !important;\n            }\n        }\n\n        .calloutSubheader {\n            .body-md();\n            text-transform: var(--callout-section-subheader-text-transform);\n        }\n\n        .lg({\n            max-width: 60ch;\n        });\n    }\n\n    .calloutVoteForm {\n        display: flex;\n        flex-direction: row;\n\n        .voteButton:first-of-type {\n            margin-right: 32px;\n        }\n\n        .voteButton {\n            &.upvote {\n                .iconBtn('thumbs-up', large);\n            }\n\n            &.downvote {\n                .iconBtn('thumbs-down', large);\n            }\n\n            &.upvote.active {\n                border-color: #008000;\n                background-color: #008000;\n            }\n\n            &.downvote.active {\n                border-color: #cc0000;\n                background-color: #cc0000;\n            }\n        }\n    }\n\n    .calloutButton {\n        font-family: var(--font-family-h, ChaletComprime);\n        font-size: var(--font-size-4);\n        font-weight: var(--font-weight-regular);\n        padding: calc(var(--padding-sm) + 0.2rem) var(--padding-lg)\n            var(--padding-sm);\n        text-align: center;\n        width: 100%;\n        white-space: nowrap;\n\n        align-self: center;\n\n        &:hover {\n            background: #ffffff;\n            border-color: #ffffff;\n            color: #000000;\n        }\n\n        .lg({\n            width: unset;\n        });\n    }\n\n    .calloutLink {\n        background-color: transparent;\n        border: none;\n        color: #ffffff;\n        cursor: pointer;\n        font-family: ChaletComprime;\n        line-height: 1;\n        padding: 2rem;\n        text-align: center;\n        text-transform: uppercase;\n        white-space: nowrap;\n\n        display: flex;\n        align-items: center;\n        .button-text-sm();\n\n        .lg({\n            padding: 3rem 0 3rem 3rem;\n        });\n\n        .calloutLinkIcon {\n            margin: -4px 0 0 var(--spacing-xxs);\n        }\n    }\n}\n\n[data-type='gallery'],\n[data-type='short'] {\n    .calloutContainer {\n        padding: unset;\n    }\n\n    .calloutSection {\n        max-width: calc(\n            var(\n                    --max-width-dynamic,\n                    var(--text-section-max-width, var(--max-width-static-md))\n                ) + var(--padding-dynamic, 0px) * 2\n        ) !important;\n\n        .lg({\n            padding: var(--spacing-md);\n            \n            flex-direction: column;\n            align-items: unset;\n        });\n\n        .calloutHeaders {\n            &.calloutHeaderMargins {\n                .lg({\n                    margin: 0 0 var(--spacing-md);\n                });\n            }\n        }\n\n        .calloutButton {\n            width: 100%;\n        }\n\n        .calloutLink {\n            padding: unset;\n        }\n    }\n}\n\n[data-type='long'] {\n    .calloutContainer {\n        padding: unset;\n    }\n\n    .calloutSection {\n        margin: var(--spacing-md);\n        padding: var(--spacing-md) !important;\n\n        .lg({\n            margin: unset;\n            max-width: var(--image-with-badge-width);\n            \n            align-items: center;\n        });\n\n        .calloutHeaders {\n            &.calloutHeaderMargins {\n                margin: 0 0 var(--spacing-md);\n\n                .lg({\n                    margin: 0 var(--spacing-md) 0 0;\n                });\n            }\n        }\n    }\n}\n\n[data-context='clr-article'] {\n    .calloutContainer {\n        --news-intro-max-width: var(--max-width-static);\n        .handleMaxWidth(var(--news-intro-max-width));\n        margin: 0 auto;\n\n        .mdMin({\n            padding: 0;\n        });\n\n        .calloutSection {\n            background-color: var(--black-200) !important;\n\n            padding: var(--spacing-md);\n            --font-weight-regular: 700;\n\n            .calloutHeader {\n                font-size: var(--font-size-3) !important;\n            }\n            .calloutLink {\n                --font-weight-regular: 600;\n                font-family: Rubik !important;\n                font-size: var(--font-size-2);\n                padding: 0;\n            }\n            .calloutLinkIcon {\n                margin: 0 0 0 var(--spacing-xxs);\n            }\n            .actionBlock {\n                justify-items: inherit;\n            }\n        }\n    }\n}\n\n[data-context='clr-card'] {\n    .calloutContainer {\n        .calloutSection {\n            --font-family-h: Raleway;\n            --font-weight-regular: 700;\n\n            .calloutHeaders {\n                h1,\n                h2 {\n                    font-size: var(--font-size-4) !important;\n                }\n            }\n            .calloutLink {\n                --font-weight-regular: 600;\n                font-family: Rubik !important;\n                font-size: var(--font-size-2);\n                padding: 0;\n            }\n            .calloutLinkIcon {\n                margin: 0 0 0 var(--spacing-xxs);\n            }\n\n            .actionBlock {\n                justify-items: inherit;\n            }\n        }\n    }\n}\n\n[data-context='interestTracker'] {\n    .calloutContainer {\n        width: -webkit-fill-available;\n        .calloutSection {\n            padding: var(--spacing-sm) !important;\n            background: var(--blacks-black-100, #121212);\n\n            @media (max-width: 1023px) {\n                margin: 0 !important;\n            }\n        }\n        .calloutHeader {\n            .headline-5();\n        }\n        .calloutSubheader {\n            .body-sm();\n            max-width: 640px;\n        }\n        .calloutButton {\n            padding: calc(var(--padding-xs) + 0.2rem) var(--padding-sm)\n                var(--padding-xs);\n        }\n    }\n}\n\n.actionBlock {\n    display: grid;\n    gap: var(--grid-gap-sm);\n    justify-items: flex-end;\n}\n\n.actionFooter {\n    font-family: var(--font-family-body);\n    font-size: var(--font-size-2);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-body);\n    line-height: var(--line-height-lg);\n    margin: 0 auto;\n    white-space: nowrap;\n\n    .lg({\n        margin: unset;\n        text-align: right;\n    });\n\n    a {\n        font-weight: var(--font-weight-bold);\n\n        &:hover {\n            text-decoration: underline;\n        }\n    }\n}\n", "/*\n * New Design System:\n * 1. Breakpoints\n * 2. Typography\n * 3. Variables\n * 4. Utility\n *     4.1 Flex\n *     4.2 Grid\n *     4.3 Max-Width\n *     4.4 Images\n *     4.5 Padding\n *     4.6 Fonts\n *     4.7 Games\n *     4.8 Tina\n *     4.9 Hacks\n * 5. Presentational\n */\n\n/* 1. Breakpoints */\n@screen-sm: 0px;\n@screen-md: 768px;\n@screen-lg: 1024px;\n@screen-xl: 1920px;\n@screen-xxl: 2560px;\n@sm-min-width: @screen-sm;\n@md-min-width: @screen-md;\n@lg-min-width: @screen-lg;\n@xl-min-width: @screen-xl;\n@xxl-min-width: @screen-xxl;\n@sm-max-width: (@md-min-width - 1px);\n@md-max-width: (@lg-min-width - 1px);\n@lg-max-width: (@xl-min-width - 1px);\n@xl-max-width: (@xxl-min-width - 1px);\n\n.sm(@rules) {\n    .smMin(@rules);\n}\n.smMin(@rules) {\n    @media (min-width: @sm-min-width) {\n        @rules();\n    }\n}\n.smMax(@rules) {\n    @media (max-width: @sm-max-width) {\n        @rules();\n    }\n}\n.smOnly(@rules) {\n    @media (min-width: @sm-min-width) and (max-width: @sm-max-width) {\n        @rules();\n    }\n}\n.md(@rules) {\n    .mdMin(@rules);\n}\n.mdMin(@rules) {\n    @media (min-width: @md-min-width) {\n        @rules();\n    }\n}\n.mdMax(@rules) {\n    @media (max-width: @md-max-width) {\n        @rules();\n    }\n}\n.mdOnly(@rules) {\n    @media (min-width: @md-min-width) and (max-width: @md-max-width) {\n        @rules();\n    }\n}\n.lg(@rules) {\n    .lgMin(@rules);\n}\n.lgMin(@rules) {\n    @media (min-width: @lg-min-width) {\n        @rules();\n    }\n}\n.lgMax(@rules) {\n    @media (max-width: @lg-max-width) {\n        @rules();\n    }\n}\n.lgOnly(@rules) {\n    @media (min-width: @lg-min-width) and (max-width: @lg-max-width) {\n        @rules();\n    }\n}\n.xl(@rules) {\n    .xlMin(@rules);\n}\n.xlMin(@rules) {\n    @media (min-width: @xl-min-width) {\n        @rules();\n    }\n}\n.xlMax(@rules) {\n    @media (max-width: @xl-max-width) {\n        @rules();\n    }\n}\n.xlOnly(@rules) {\n    @media (min-width: @xl-min-width) and (max-width: @xl-max-width) {\n        @rules();\n    }\n}\n.xxl(@rules) {\n    .xxlMin(@rules);\n}\n.xxlMin(@rules) {\n    @media (min-width: @xxl-min-width) {\n        @rules();\n    }\n}\n\n.notoBackup(@varName; @stdFont) {\n    @{varName}: @stdFont;\n\n    &:lang(ja_jp) {\n        @{varName}: @stdFont, NotoSansJP;\n    }\n    &:lang(zh_hans) {\n        @{varName}: @stdFont, NotoSansSC;\n    }\n    &:lang(zh_tw) {\n        @{varName}: @stdFont, NotoSansTC;\n    }\n}\n\n/* 2. Typography */\n.handleFontDeclarations() {\n    .notoBackup(--rsg-font-family-std, HelveticaNowText);\n    .notoBackup(--rsg-font-family-h, HelveticaNowDisplayBold);\n    .notoBackup(--gta-font-family-std, Chalet);\n    .notoBackup(--gta-font-family-h, ChaletComprime);\n    .notoBackup(--gta-font-family-badge, Pricedown);\n    .notoBackup(--rdr-font-family-std, HapnaSlabSerif);\n    .notoBackup(--rdr-font-family-h, RDRLino-Regular);\n    .notoBackup(--rdr-font-family-newswire-subtitle, HapnaSlabSerif);\n    .notoBackup(--rdr-area-font, RDRCatalogueBold);\n\n    --header-multiplier: var(--header-numerator, var(--root-font-size)) /\n        var(--root-font-size);\n    font-family: var(--font-family-std, HelveticaNowText);\n    font-weight: var(--font-weight-std, 400);\n    letter-spacing: var(--letter-spacing-std, -0.025em);\n    line-height: var(--line-height-std, 1.6);\n    font-size: calc(var(--root-font-size) * 1px);\n    -webkit-font-smoothing: antialiased;\n\n    h1.large,\n    h1,\n    h2,\n    h3,\n    h4 {\n        font-family: var(--font-family-h, HelveticaNowDisplayBold);\n        letter-spacing: var(--letter-spacing-h, -0.025em);\n    }\n    h1.large,\n    h1 {\n        font-weight: var(--font-weight-h1, var(--font-weight-h, 700));\n        text-transform: var(--text-transform-h1, var(--text-transform-h, none));\n        line-height: var(--line-height-h1, var(--line-height-h, 1.1));\n    }\n\n    h1.large {\n        font-size: calc(var(--font-size-8) * var(--header-multiplier));\n    }\n    h1 {\n        font-size: calc(var(--font-size-7) * var(--header-multiplier));\n    }\n    h2 {\n        font-size: calc(var(--font-size-6) * var(--header-multiplier));\n        font-weight: var(--font-weight-h2, var(--font-weight-h, 700));\n        text-transform: var(--text-transform-h2, var(--text-transform-h, none));\n        line-height: var(--line-height-h, 1.1);\n    }\n    h3 {\n        font-size: calc(var(--font-size-5) * var(--header-multiplier));\n        font-weight: var(--font-weight-h3, var(--font-weight-h, 700));\n        text-transform: var(--text-transform-h3, var(--text-transform-h, none));\n        line-height: var(--line-height-h, 1.1);\n\n        &[data-context='newswire-subtitle'] {\n            font-size: calc(\n                var(--font-size-5) *\n                    var(\n                        --h3-numerator-override-newswire-subtitle,\n                        var(--header-multiplier)\n                    )\n            );\n            font-weight: var(\n                --font-weight-newswire-subtitle,\n                var(--font-weight-h)\n            );\n            font-family: var(\n                --font-family-newswire-subtitle,\n                var(--font-family-h)\n            );\n            text-transform: var(--text-transform-newswire-subtitle);\n        }\n\n        .isRdr({\n            font-weight: var(--font-weight-h3, var(--font-weight-h, 400));\n        });\n    }\n\n    h4,\n    h5,\n    h6 {\n        font-size: calc(var(--font-size-4) * var(--header-multiplier));\n        line-height: var(--line-height-h, 1.1);\n    }\n}\n\n.handleColors() {\n    h1.large,\n    h1 {\n        color: var(--color-h-dynamic, var(--color-h1, var(--color-h, inherit)));\n    }\n    h2 {\n        color: var(--color-h-dynamic, var(--color-h2, var(--color-h, inherit)));\n    }\n    h3 {\n        color: var(--color-h-dynamic, var(--color-h3, var(--color-h, inherit)));\n\n        &[data-context='newswire-subtitle'] {\n            color: var(\n                --color-subtitle-dynamic,\n                var(--color-h-dynamic, var(--color-h3, var(--color-h, inherit)))\n            );\n        }\n    }\n    h4,\n    h5,\n    h6 {\n        color: var(--color-h-dynamic, var(--color-h, inherit));\n    }\n    background-color: var(--background-color, transparent);\n\n    [template='community'] {\n        --time-color: var(--body-color, #2d2d2d);\n        --breadcrumb-separator-filter-invert: invert(0);\n\n        main {\n            color: var(--color-h, #161616);\n        }\n        p {\n            color: var(--body-color, #2d2d2d);\n        }\n    }\n}\n\n/* 3. Variables */\n.resetVariables() {\n    --text-section-max-width: 640px;\n    --base-pixel-size: 12px;\n    --base-rem-size: 0.75rem;\n    --half-rem-size: calc(var(--base-rem-size) / 2);\n    --twice-rem-size: calc(var(--base-rem-size) * 2);\n    --section-margin-bottom: calc(var(--base-rem-size) * 4);\n    --header-height: 80px;\n    --breadcrumbs-height: calc(var(--base-pixel-size) * 3.5);\n    --max-width: 1920px;\n    --standard-color: #fcaf17;\n    --color-h: #ffffff;\n    --body-color: #e8e8e8;\n    --background-color: #0b0b0b;\n    --card-background-color: #000;\n    --border-color: #282828;\n    --privacy-banner-height: 0px;\n    --game-header-height: 50px;\n    --standard-grid-gap: calc(var(--base-rem-size) * 2);\n    --image-margin-bottom: inherit;\n    --image-rounding: 0px;\n    --image-rounding-static: 16px;\n    --image-rounding-static-sm: 8px;\n    --image-rounding-static-xs: 4px;\n\n    --grid-gap-static-xs: 0.5rem;\n    --grid-gap-static-sm: 1rem;\n    --grid-gap-static-md: 2rem;\n    --grid-gap-static-lg: 4rem;\n    --grid-gap-static-xl: 8rem;\n    .smMax({--grid-gap-static-lg: 2rem; --grid-gap-static-xl: 4rem;});\n\n    --max-width-static: 640px;\n    --max-width-static-md: 1088px;\n    --max-width-static-lg: 1920px;\n    --max-width-static-xl: 2560px;\n    .xxlMin({--max-width-static-md: 1440px;});\n\n    --margin-static: 0 0 2rem;\n    --h2-margin: 2rem 0 0 0;\n\n    --padding-sides: var(--grid-gap-static-lg);\n    --padding-top-bottom: var(--padding-sides);\n    --padding-static: var(--padding-sides);\n}\n\n/* 4. Utility */\n/* 4.1 Flex */\n.flex() {\n    display: flex;\n    flex-flow: column;\n}\n.horizontalCenterChildren() {\n    display: flex;\n    justify-content: center;\n}\n.verticalCenterChildren() {\n    display: flex;\n    align-items: center;\n}\n.flexCenterChildren() {\n    .horizontalCenterChildren();\n    .verticalCenterChildren();\n}\n\n/* 4.2 Grid */\n.gridMinWidth(@minWidth: 480px; @rowGap: var(--standard-grid-gap); @colGap: var(--standard-grid-gap); @autoType: 'auto-fit') {\n    display: grid;\n    grid-row-gap: @rowGap;\n    grid-column-gap: @colGap;\n    grid-template-columns: ~'repeat(@{autoType}, minmax(@{minWidth}, 1fr))';\n}\n.gridHideExtraRows(@colGap: var(--standard-grid-gap)) {\n    ::-webkit-scrollbar {\n        display: none;\n    }\n    -ms-overflow-style: none;\n    display: grid;\n    grid-auto-flow: column;\n    grid-column-gap: @colGap;\n    overflow-y: hidden;\n    scroll-snap-type: x mandatory;\n    > * {\n        scroll-snap-align: start;\n    }\n    --per-page: 4;\n    .lgMax({--per-page: 3;});\n    .mdMax({--per-page: 2;});\n    .smMax({--per-page: 1;});\n\n    grid-auto-columns: calc(\n        100% / var(--per-page) - (var(--per-page) - 1) / var(--per-page) *\n            @colGap\n    );\n}\n.gridNumCols(@numInitialItems) {\n    display: grid;\n    grid-gap: var(--standard-grid-gap);\n    .smMax({grid-template-columns: repeat(1, minmax(0px, 1fr)) ;});\n    @media screen and (min-width: @screen-sm) and (max-width: @md-max-width) {\n        grid-template-columns: repeat(2, minmax(0px, 1fr));\n    }\n    @media screen and (min-width: @screen-lg) {\n        grid-template-columns: repeat(4, minmax(0px, 1fr));\n    }\n}\n.gridNumColsSmall(@colGap: var(--padding-top-bottom); @rowGap: var(--padding-top-bottom)) {\n    display: grid;\n    grid-row-gap: @rowGap;\n    grid-column-gap: @colGap;\n    grid-template-columns: repeat(1, minmax(0px, 1fr));\n    .md({grid-template-columns: repeat(2, minmax(0px, 1fr)) ;});\n}\n\n.standardLayoutGridItem(@maxWidth: var(--max-width-static-md), @padding: var(--padding-static)) {\n    .handleMaxWidth(@maxWidth);\n    .handlePadding(@padding);\n}\n\n.handleGridStyles(@grid-gap-dynamic: var(--grid-gap-static-md)) {\n    --grid-gap-dynamic: @grid-gap-dynamic;\n    display: grid;\n    grid-template-columns: repeat(var(--grid-num-columns, 1), minmax(0px, 1fr));\n    grid-template: var(\n        --grid-template-override,\n        auto / repeat(var(--grid-num-columns, 1), minmax(0, 1fr))\n    );\n    grid-gap: var(--grid-gap-dynamic);\n    align-items: var(--grid-align-items);\n    align-content: var(--grid-align-content);\n    align-self: var(--grid-align-self);\n    justify-items: var(--grid-justify-items);\n    justify-content: var(--grid-justify-content);\n    justify-self: var(--grid-justify-self);\n}\n\n/* 4.3 Max-Width */\n.maxWidth(@padding: 0) {\n    max-width: var(--max-width);\n    width: 100%;\n    margin: 0 auto;\n    padding-left: @padding;\n    padding-right: @padding;\n}\n.maxWidthWithNormalPadding() {\n    .maxWidth(var(--padding-sides));\n}\n\n.handleMaxWidth(@max-width-default: 1000000px) {\n    width: 100%;\n    max-width: calc(\n        var(--max-width-dynamic, @max-width-default) +\n            var(--padding-dynamic, 0px) * 2\n    ) !important;\n    margin: 0 auto;\n}\n\n.breakout(@max-width-default: 100vw) {\n    @margin: calc((@max-width-default / 2) * -1);\n    width: @max-width-default;\n    max-width: @max-width-default !important;\n    position: relative;\n    left: 50%;\n    right: 50%;\n    margin-left: @margin;\n    margin-right: @margin;\n}\n\n.fullWidth() {\n    .breakout;\n}\n\n/* 4.4 Images */\n.handleAspectRatio() {\n    --aspect-ratio-default: 1;\n    .lgMin({\n        --aspect-ratio-default: 16/9;\n    });\n\n    position: relative;\n    &:before {\n        content: '';\n        height: 0;\n        width: 100%;\n        display: block;\n        padding-bottom: calc(\n            100% / calc(var(--aspect-ratio, var(--aspect-ratio-default)))\n        );\n    }\n    > * {\n        position: absolute;\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 100%;\n    }\n}\n.setAspectRatio(@ratio) {\n    --aspect-ratio: @ratio;\n    .handleAspectRatio;\n}\n\n.handleParallaxPerspective() {\n    position: fixed;\n    width: 100%;\n    height: 100%;\n    overflow-x: hidden;\n    overflow-y: scroll;\n    perspective: var(--parallax-perspective);\n    perspective-origin: 0 0;\n}\n.handleParallaxDistance() {\n    transform: translateZ(var(--parallax-distance))\n        scale(\n            calc(\n                (var(--parallax-perspective) - var(--parallax-distance)) /\n                    var(--parallax-distance)\n            )\n        );\n}\n\n.handleImageRounding() {\n    border-radius: var(--image-rounding-dynamic, 0px);\n}\n\n/* 4.5 Padding */\n.handlePadding(@paddingSides: initial, @paddingTopBottom: initial) {\n    --padding-dynamic: @paddingSides;\n    --padding-dynamic-tb: @paddingTopBottom;\n\n    padding: var(--padding-t, var(--padding-dynamic-tb, 0))\n        var(--padding-dynamic, 0) var(--padding-b, var(--padding-dynamic-tb, 0))\n        var(--padding-dynamic, 0);\n}\n\n/* 4.6 Fonts */\n.loadFont(@family, @weight: 400, @style: normal, @file: @family) {\n    @font-face {\n        font-family: @family;\n        font-style: @style;\n        font-weight: @weight;\n        src: url('../fonts/@{file}.woff') format('woff');\n    }\n}\n.loadFontWoff2(@family, @weight: 400, @style: normal, @file: @family) {\n    @font-face {\n        font-family: @family;\n        font-style: @style;\n        font-weight: @weight;\n        src: url('../fonts/@{file}.woff2') format('woff2');\n    }\n}\n.fontClip(@backgroundImg) {\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n    @backgroundImg();\n}\n\n/* 4.7 Games */\n.gta(@rules) {\n    [data-game^='gta'] {\n        @rules();\n    }\n}\n\n.isGta(@rules) {\n    [data-game^='gta'] & {\n        @rules();\n    }\n}\n\n.rdr(@rules) {\n    [data-game='rdo'],\n    [data-game^='rdr'] {\n        @rules();\n    }\n}\n\n.isRdr(@rules) {\n    [data-game='rdo'] &,\n    [data-game^='rdr'] & {\n        @rules();\n    }\n}\n\n/* 4.8 Tina */\n.tinaTextField() {\n    padding: var(--tina-padding-small);\n    border-radius: var(--tina-radius-small);\n    background: var(--tina-color-grey-0);\n    color: var(--tina-color-grey-10);\n    background-color: var(--tina-color-grey-0);\n    border: 1px solid var(--tina-color-grey-2);\n    box-shadow: 0 0 0 2px transparent;\n    margin-bottom: 14px;\n}\n\n/* 4.9 Hacks */\n.safariBorderRadiusOverflowFix() {\n    // https://stackoverflow.com/questions/49066011/overflow-hidden-with-border-radius-not-working-on-safari\n    -webkit-mask-image: -webkit-radial-gradient(white, black);\n}\n\n.forceGpuRendering() {\n    // https://web.dev/animations-guide/#force\n    transform: translateZ(0);\n}\n\n/* 5. Presentational */\n@locales: en_us, fr_fr, de_de, es_es, es_mx, it_it, pt_br, pl_pl, ru_ru, ja_jp,\n    ko_kr, zh_tw, zh_hans;\n\n.placeholder(@rules) {\n    &::-webkit-input-placeholder {\n        @rules();\n    }\n    &:-moz-placeholder {\n        @rules();\n    }\n    &::-moz-placeholder {\n        @rules();\n    }\n    &:-ms-input-placeholder {\n        @rules();\n    }\n}\n\n.bgImg() {\n    background-size: cover;\n    background-position: center center;\n    background-repeat: no-repeat;\n}\n\n.themeDark() {\n    color: #e8e8e8;\n    --tag-color: #e8e8e8;\n}\n\n.outbound() {\n    content: '';\n    display: inline-block;\n    background-size: 100%;\n    background-repeat: no-repeat;\n    background-position: 0% 50%;\n    vertical-align: baseline;\n    margin-left: var(--grid-gap-static-xs);\n    width: 1rem;\n    height: 1rem;\n    background-image: data-uri('../img/outbound.svg');\n}\n\n.blurryBg() {\n    transition: filter 0.8s;\n    filter: blur(var(--blur-because-in-bg, 0px));\n}\n\n.fancyLink() {\n    position: relative;\n    background: transparent;\n    padding: 0;\n    z-index: 1;\n    @media (min-width: @screen-sm) {\n        transition: all 0.2s ease;\n        &:before {\n            content: '';\n            display: block;\n            position: absolute;\n            bottom: 0;\n            left: -0.1rem;\n            width: calc(100% + 0.2rem);\n            height: 2px;\n            background: var(--body-color);\n            transition: all 0.2s ease;\n            z-index: -1;\n            border-radius: 0.25rem;\n        }\n        &:hover {\n            color: #161616;\n\n            &:before {\n                left: -0.25rem;\n                width: calc(100% + 0.5rem);\n                height: 100%;\n            }\n        }\n    }\n    img {\n        display: block;\n    }\n}\n.stdHover() {\n    transition:\n        color 0.2s ease,\n        opacity 0.2s ease;\n    &:hover {\n        color: var(--standard-color);\n        opacity: 1;\n    }\n}\n.stdIconHover() {\n    &:hover {\n        filter: brightness(0) saturate(100%) invert(76%) sepia(15%)\n            saturate(5173%) hue-rotate(348deg) brightness(105%) contrast(98%);\n    }\n}\n.card() {\n    .handleImageRounding;\n    --image-rounding-dynamic: var(--image-rounding-static-sm);\n    background: var(--card-background-color);\n    overflow: hidden;\n    display: flex;\n    flex-flow: column;\n    transition: transform 0.2s ease;\n    border: 1px solid var(--border-color);\n    .info {\n        .handleGridStyles;\n        --grid-gap-dynamic: var(--grid-gap-static-xs);\n        padding: 2rem 1.5rem;\n        .title {\n            --line-height-h: 1.3;\n            color: var(--color-h);\n        }\n    }\n}\n\n.cardHover() {\n    transition:\n        transform 0.3s cubic-bezier(0, 0, 0.5, 1),\n        box-shadow 0.3s cubic-bezier(0, 0, 0.5, 1);\n    box-shadow: 0px 0px 40px -25px rgba(0, 0, 0, 0);\n\n    &:hover {\n        transform: scale(1.025);\n        box-shadow: 0px 30px 40px -25px rgba(0, 0, 0, 1);\n    }\n}\n\n.cardSecondary() {\n    .card();\n    .info {\n        padding: 1.5rem;\n    }\n    .title {\n        font-size: var(--font-size-3);\n        font-weight: 400;\n    }\n}\n\n.cardTertiary() {\n    .cardSecondary();\n    --image-rounding-dynamic: 0;\n    --card-background-color: transparent;\n    grid-gap: var(--grid-gap-static-sm);\n    overflow: unset;\n    border: none;\n    .info {\n        padding: 0;\n    }\n    .img {\n        .handleImageRounding;\n        --image-rounding-dynamic: var(--image-rounding-static-sm);\n    }\n}\n\n.standardPage() {\n    .maxWidthWithNormalPadding;\n    padding-top: var(--padding-top-bottom);\n    padding-bottom: var(--padding-top-bottom);\n}\n\n.dropdownThing(@defaultDeg: 0deg; @openDeg: 180deg) {\n    position: relative;\n    padding-right: calc(var(--grid-gap-static-xs) + 24px);\n    .dropdownCaret(yellow; @defaultDeg; @openDeg);\n}\n.dropdownCaret(@color; @defaultDeg: 0deg; @openDeg: 180deg) {\n    &:after {\n        display: inline-block;\n        content: '';\n        position: absolute;\n        top: 0;\n        right: 0;\n        @img: '../img/dropdown-@{color}.svg';\n        background-image: data-uri(@img);\n        background-repeat: no-repeat;\n        width: image-width(@img);\n        height: 100%;\n        background-position: center;\n        background-size: 100%;\n        transform: rotate(@defaultDeg);\n        transition: transform 0.3s;\n        .open& {\n            transform: rotate(@openDeg);\n        }\n    }\n}\n\n.sectionHeader() {\n    margin: 0 0 1.5rem;\n    font-size: var(--font-size-5);\n    font-family: var(--font-family-h);\n    font-weight: var(--font-weight-h);\n    --line-height-h: 1.3;\n\n    .xlMin ({\n        font-size: var(--font-size-6);\n    });;\n}\n.sectionHeaderSmall() {\n    .sectionHeader;\n    font-size: var(--font-size-4);\n\n    .xlMin ({\n        font-size: var(--font-size-5);\n    });;\n}\n\n.tag() {\n    color: var(--tag-color, var(--body-color));\n    font-weight: 700;\n    font-size: var(--font-size-2);\n    line-height: 1.6;\n}\n\n.date() {\n    .tag;\n    font-weight: 400;\n    opacity: 0.65;\n}\n.animationFadeInUp() {\n    :global {\n        animation: globalFadeInUp 0.75s;\n        animation-play-state: paused;\n    }\n}\n.animationPaused() {\n    animation-play-state: paused;\n}\n.animationRunning() {\n    animation-play-state: running;\n}\n\n.button() {\n    font-weight: 700;\n    align-self: center;\n    display: inline-block;\n    text-transform: uppercase;\n    background: transparent;\n    border: 1px solid var(--color-h);\n    padding: 1rem 3rem;\n    color: inherit;\n    cursor: pointer;\n    border-radius: 0.25rem;\n    color: var(--color-h);\n    line-height: 100%;\n    transition: all 0.2s ease;\n    &:focus,\n    &:hover {\n        background: var(--standard-color);\n        border-color: var(--standard-color);\n        color: #161616;\n    }\n    &.secondary {\n        .fancyLink;\n        outline: none;\n        border: none;\n        text-transform: none;\n        font-weight: 400;\n        line-height: unset;\n        .smMin ({\n            &:before {\n                background: var(--standard-color);\n                height:4px;\n            }\n            &:focus,\n            &:hover {\n                &:before {\n                    left: -0.5rem;\n                    width: calc(100% + 1rem);\n                    height: 100%;\n                }\n            }\n         });;\n    }\n    &[disabled] {\n        opacity: 0.5;\n    }\n}\n\n.expandToEdges() {\n    margin-top: calc(var(--padding-top-bottom) * -1);\n    margin-left: calc(var(--padding-sides) * -1);\n    width: 100vw;\n    width: calc(100% + calc(var(--padding-sides) * 2));\n}\n\n.shadow(@boxShadow: 0 10px 30px rgba(0, 0, 0, 0.5)) {\n    // border: 1px solid rgba(0, 0, 0, 0.15);\n    box-shadow: @boxShadow;\n}\n.shadowTop() {\n    box-shadow: -3px -3px 6px 0 rgba(0, 0, 0, 0.2);\n}\n\n.aspect-ratio(@width, @height, @selector: div, @pre: ~'') {\n    @supports not (aspect-ratio: @width / @height) {\n        position: relative;\n        &:before {\n            display: block;\n            content: '';\n            width: 100%;\n            padding-top: calc((@height / @width) * 100%);\n        }\n        > @{pre}@{selector} {\n            position: absolute;\n            top: 0;\n            left: 0;\n            right: 0;\n            bottom: 0;\n            width: 100% !important;\n            height: 100% !important;\n        }\n    }\n\n    @supports (aspect-ratio: @width / @height) {\n        @{pre}@{selector} {\n            aspect-ratio: @width / @height !important;\n            width: 100% !important;\n            height: auto !important;\n        }\n    }\n}\n.unset-aspect-ratio(@selector, @pre: ~'') {\n    @supports not (aspect-ratio: 1/1) {\n        position: unset;\n        &:before {\n            display: none;\n        }\n        > @{pre}@{selector} {\n            position: unset;\n            width: 100% !important;\n            height: unset !important;\n        }\n    }\n\n    @supports (aspect-ratio: 1/1) {\n        @{pre}@{selector} {\n            aspect-ratio: unset !important;\n        }\n    }\n}\n\n.rockstarTypography() {\n    --font-family-std: NeueHelveticaPaneuropean, sans-serif;\n    --leter-spacing-std: 0;\n\n    font-size: var(--font-size-2);\n    font-family: var(--font-family-std);\n    letter-spacing: var(--leter-spacing-std);\n\n    button {\n        letter-spacing: var(--leter-spacing-std);\n    }\n}\n\n.setNodeFontSizing() {\n    // TODO audit this. .5rem is very small.\n    --font-size-1: 0.75rem;\n\n    --font-size-2: 0.75rem;\n    --font-size-3: 1rem;\n    --font-size-4: 1.25rem;\n    --font-size-5: 1.5rem;\n    --font-size-6: 2rem;\n    --font-size-7: 2.5rem;\n    --font-size-8: 3rem;\n    --font-size-9: 4rem;\n    --font-size-10: 5rem;\n}\n\n.setRootFontSizing() {\n    .sm({--root-font-size: 16;});\n    .md({--root-font-size: 18;});\n    .lg({--root-font-size: 20;});\n    .xl({--root-font-size: 22;});\n}\n\n.button-text () {\n    font-size: var(--font-size-4);\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-sm);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-h);\n    text-transform: uppercase;\n}\n\n.button-text-sm () {\n    .button-text;\n    font-size: var(--font-size-3);\n}\n\n.button-text-md () {\n    .button-text;\n    font-size: var(--font-size-4);\n    padding: 0 var(--padding-md);\n}\n\n.button-text-lg () {\n    .button-text;\n    font-size: var(--font-size-5);\n    padding: 0 var(--padding-lg);\n}\n\n.button-text-xl () {\n    .button-text;\n    font-size: var(--font-size-7);\n    padding: 0 var(--padding-xl);\n}\n\n.cta-button() {\n    @import '../less/gen9-vars';\n\n    --button-text-color-hover: var(--white-100);\n\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: center;\n    gap: var(--grid-gap-xs, 0.5rem);\n\n    background: var(\n        --button-background-color,\n        var(--black-65, hsla(0, 0%, 7%, 0.65))\n    );\n    border: 1px solid var(--white-100, #fff);\n    border-radius: var(--border-radius-sm, 4px);\n    color: var(--button-text-color, var(--white-100));\n    cursor: pointer;\n    padding: 0 var(--padding-sm);\n\n    width: 100%;\n    height: var(--button-height-3, 3rem);\n\n    transition: all 0.3s ease-in-out;\n\n    &[data-brand='reddeadredemption'],\n    [data-brand='reddeadredemption'] & {\n        --accent-color: #cc0000;\n        --font-family-h: RDRUltra;\n\n        :lang(pl_pl) {\n            --font-family-h: RDRUltra, NeueHelveticaPaneuropean;\n        }\n    }\n\n    &[data-brand='bully'],\n    [data-brand='bully'] & {\n        --accent-color: #f8ad00;\n        --font-family-h: HelveticaNowDisplayBold;\n        --button-background-color: var(--white-100);\n        --button-background-color-hover: var(--accent-color);\n        --button-text-color: var(--black-100);\n        --button-text-color-hover: var(--black-100);\n\n        backdrop-filter: blur(25px);\n        padding: 0 var(--padding-md, 32px);\n    }\n\n    img {\n        height: 1rem;\n        width: auto;\n    }\n\n    .label {\n        .button-text();\n        display: flex;\n        flex-shrink: 0;\n    }\n\n    &.primary {\n        color: var(--black-100);\n        background-color: var(--white-100);\n    }\n\n    &:hover {\n        border-color: var(--accent-color, var(--btn-active-color));\n        background-color: var(--accent-color, var(--btn-active-color));\n        color: var(--button-text-color-hover, var(--btn-active-color));\n\n        &.primary {\n            color: var(--button-text-color-hover, var(--white-100));\n        }\n    }\n\n    @media (min-width: 1280px) {\n        padding: 0 var(--padding-md);\n    }\n\n    @media (min-width: 768px) and (max-width: 1539px) {\n        height: 2.5rem;\n\n        img {\n            height: 1rem;\n        }\n\n        .label {\n            .button-text-sm();\n        }\n    }\n}\n"],
        sourceRoot: ""
      }]), l.locals = {
        pillBtn: "rockstargames-sites-gta-gen9c881ff12d1d9fb612b4ddd89178684e4",
        selected: "rockstargames-sites-gta-gen9dece7a2abb867cf09add3f7429e7383b",
        calloutContainer: "rockstargames-sites-gta-gen9e8b19ed9af6aedef68997370cd508539",
        calloutSection: "rockstargames-sites-gta-gen9ab742f2f5b6947ec0b2facff923a076f",
        calloutHeaders: "rockstargames-sites-gta-gen9e86d59dd2e0ab3c594c33eccde3e8fea",
        calloutHeaderMargins: "rockstargames-sites-gta-gen9d7d4d815f9e36b62ef54befcc89ca296",
        calloutHeader: "rockstargames-sites-gta-gen9fb0bbc5bcc4fb2c7d0b8152001df0497",
        calloutSubheader: "rockstargames-sites-gta-gen9f5fe27da672cf05e64359ada500a6b7a",
        calloutVoteForm: "rockstargames-sites-gta-gen9b5e2fa8800d39c78682d9ce8ce5e53f8",
        voteButton: "rockstargames-sites-gta-gen9ecdf609ed8d6c4039be969205b7e3ac0",
        upvote: "rockstargames-sites-gta-gen9f8d6a685395153161827b5cf8c6ddb93",
        downvote: "rockstargames-sites-gta-gen9b1953057e462cdf6c79a4b8e6f2fe91b",
        active: "rockstargames-sites-gta-gen9ec9f200e6987aebf6375c999eecd5dc3",
        calloutButton: "rockstargames-sites-gta-gen9b8ed029eb7d9b09c70caa4576bbb4c5a",
        calloutLink: "rockstargames-sites-gta-gen9bc07ececd6531f5df1c8cba48c846797",
        calloutLinkIcon: "rockstargames-sites-gta-gen9db31e98c20de15e8d5983285bd6ec92e",
        actionBlock: "rockstargames-sites-gta-gen9b1516576d0566f12c906be9e81407ce4",
        actionFooter: "rockstargames-sites-gta-gen9f713e165e153987c3855d93dc1614f4d"
      };
      const p = l
    },
    55300: (n, e, a) => {
      "use strict";
      a.d(e, {
        A: () => s
      });
      var t = a(42587),
        r = a.n(t),
        i = a(15081),
        o = a.n(i)()(r());
      o.push([n.id, '.rockstargames-sites-gta-gen9c3e95c84902dd75b827d3c95532e22dc{--font-family-body:"Chalet";--font-family-h:"ChaletComprime";--font-weight-regular:400;--font-weight-bold:700;--letter-spacing-body:0;--letter-spacing-h:0;--line-height-sm:1;--line-height-md:1.1;--line-height-lg:1.6;--black-200:#000;--black-100:#121212;--black-65:hsla(0,0%,7%,.65);--black-40:hsla(0,0%,7%,.4);--black-15:hsla(0,0%,7%,.15);--text-dark:#2d2d2d;--border-color:#2d2d2d;--white-100:#fff;--white-65:hsla(0,0%,100%,.65);--white-40:hsla(0,0%,100%,.4);--white-15:hsla(0,0%,100%,.15);--text-light:#e8e8e8;--focusring-blue:blue;--red:#e03232;--circoloco-red:#eb1818;--rockstar-gold:#fcaf17;--playstation-blue:#00439c;--microsoft-green:#387a26;--pc-legacy:#b2b2b2;--pc-enhanced:#beb279;--color-h:var(--white-100);--color-body:var(--text-light);--green-light:#c1f7bd;--green-dark:#81da85;--scroll-thumb-color:#7d7d7d;--scroll-track-color:transparent;--max-width-sm:640px;--max-width-md:1088px;--max-width-lg:1920px;--max-width-xl:2560px;--spacing-xxs:0.25rem;--spacing-xs:0.5rem;--spacing-sm:1rem;--spacing-md:2rem;--spacing-lg:4rem;--spacing-xl:8rem;--grid-gap-xxs:var(--spacing-xxs);--grid-gap-xs:var(--spacing-xs);--grid-gap-sm:var(--spacing-sm);--grid-gap-md:var(--spacing-md);--grid-gap-lg:var(--spacing-lg);--grid-gap-xl:var(--spacing-xl);--padding-xxs:var(--spacing-xxs);--padding-xs:var(--spacing-xs);--padding-sm:var(--spacing-sm);--padding-md:var(--spacing-md);--padding-lg:var(--spacing-lg);--padding-xl:var(--spacing-xl);--margin-xxs:var(--spacing-xxs);--margin-xs:var(--spacing-xs);--margin-sm:var(--spacing-sm);--margin-md:var(--spacing-md);--margin-lg:var(--spacing-lg);--margin-xl:var(--spacing-xl);--border-radius-xs:2px;--border-radius-sm:4px;--border-radius-md:8px;--border-radius-lg:16px;--gradient-overlay-bottom:linear-gradient(180.08deg,transparent 25%,rgba(0,0,0,.5) 65%,rgba(0,0,0,.6));--gradient-overlay-right:linear-gradient(270deg,rgba(0,0,0,.9),transparent);--promo-banner-z-index:11500;background-color:var(--black-200);border:1px solid var(--border-color);border-radius:var(--border-radius-sm);color:#000;display:grid;font-size:10px;margin:0 auto;max-width:270px;padding:var(--padding-sm)}@media (min-width:2560px){.rockstargames-sites-gta-gen9c3e95c84902dd75b827d3c95532e22dc{--max-width-md:1440px}}@media (max-width:767px){.rockstargames-sites-gta-gen9c3e95c84902dd75b827d3c95532e22dc{--spacing-lg:2rem;--spacing-xl:4rem}}.rockstargames-sites-gta-gen9c3e95c84902dd75b827d3c95532e22dc.rockstargames-sites-gta-gen9b98963abfc7a63295bebc6c6d15b391a{grid-gap:var(--grid-gap-sm);grid-template-columns:72px 1fr}.rockstargames-sites-gta-gen9c3e95c84902dd75b827d3c95532e22dc.rockstargames-sites-gta-gen9b6339480b5fd086fb0c025930bfb7dcd{max-width:calc(72px + (2 * var(--padding-sm)))}.rockstargames-sites-gta-gen9c3e95c84902dd75b827d3c95532e22dc hr{background:var(--white-15);border:0;height:1px;margin:0;width:100%}.rockstargames-sites-gta-gen9c3e95c84902dd75b827d3c95532e22dc img{width:100%}.rockstargames-sites-gta-gen9babdd6ae2ff83f380dadc6982effa011{grid-gap:var(--grid-gap-xs);align-content:center;display:grid}.rockstargames-sites-gta-gen9babdd6ae2ff83f380dadc6982effa011 p{color:var(--white-100)!important;font-family:var(--font-family-body)!important;font-size:10px!important;line-height:1.25!important}.rockstargames-sites-gta-gen9babdd6ae2ff83f380dadc6982effa011 p:empty{display:none!important}.rockstargames-sites-gta-gen9babdd6ae2ff83f380dadc6982effa011 a{font-weight:700}', "", {
        version: 3,
        sources: ["webpack://./../../buildtime/components/src/Rating/index.less", "webpack://./../../buildtime/legacy-design-system/less/gen9-vars.less", "webpack://./../../buildtime/legacy-design-system/less/mixins.less"],
        names: [],
        mappings: "AAEA,8DCDA,2BAAA,CACA,gCAAA,CAGA,yBAAA,CACA,sBAAA,CAGA,uBAAA,CACA,oBAAA,CAGA,kBAAA,CACA,oBAAA,CACA,oBAAA,CAGA,gBAAA,CACA,mBAAA,CACA,4BAAA,CACA,2BAAA,CACA,4BAAA,CACA,mBAAA,CACA,sBAAA,CAEA,gBAAA,CACA,8BAAA,CACA,6BAAA,CACA,8BAAA,CACA,oBAAA,CAEA,qBAAA,CACA,aAAA,CACA,uBAAA,CACA,uBAAA,CACA,0BAAA,CACA,yBAAA,CACA,mBAAA,CAEA,qBAAA,CAGA,0BAAA,CACA,8BAAA,CAEA,qBAAA,CACA,oBAAA,CAGA,4BAAA,CACA,gCAAA,CAGA,oBAAA,CACA,qBAAA,CACA,qBAAA,CACA,qBAAA,CAIA,qBAAA,CACA,mBAAA,CACA,iBAAA,CACA,iBAAA,CACA,iBAAA,CACA,iBAAA,CAIA,iCAAA,CACA,+BAAA,CACA,+BAAA,CACA,+BAAA,CACA,+BAAA,CACA,+BAAA,CAGA,gCAAA,CACA,8BAAA,CACA,8BAAA,CACA,8BAAA,CACA,8BAAA,CACA,8BAAA,CAGA,+BAAA,CACA,6BAAA,CACA,6BAAA,CACA,6BAAA,CACA,6BAAA,CACA,6BAAA,CAGA,sBAAA,CACA,sBAAA,CACA,sBAAA,CACA,uBAAA,CAGA,sGAAA,CAMA,2EAAA,CAOA,4BAAA,CDzGI,iCAAA,CACA,oCAAA,CACA,qCAAA,CACA,UAAA,CALA,YAAA,CAMA,cAAA,CACA,aAAA,CAGA,eAAA,CAFA,yBAmGJ,CEHI,0BAAA,8DDpDE,qBD2DJ,CACF,CE3EI,yBAAA,8DDwBI,iBAAA,CAAoB,iBDwD1B,CACF,CA1GI,2HAEI,2BAAA,CADA,8BA6GR,CAzGI,2HACI,8CA2GR,CAjIA,iEA0BQ,0BAAA,CACA,QAAA,CAIA,UAAA,CAHA,QAAA,CAEA,UA0GR,CAxIA,kEAmCQ,UAwGR,CAzFA,8DACI,2BAAA,CACA,oBAAA,CACA,YA2FJ,CA9FA,gEAVI,gCAAA,CACA,6CAAA,CACA,wBAAA,CACA,0BA2GJ,CAzGI,sEACI,sBA2GR,CAvGA,gEAUQ,eAgGR",
        sourcesContent: ["@import '@rsgweb/legacy-design-system/less/mixins.less';\n\n.rating {\n    // We need to know vars for this.\n    @import '@rsgweb/legacy-design-system/less/gen9-vars.less';\n\n    display: grid;\n\n    background-color: var(--black-200);\n    border: 1px solid var(--border-color);\n    border-radius: var(--border-radius-sm);\n    color: black;\n    font-size: 10px;\n    margin: 0 auto;\n    padding: var(--padding-sm);\n\n    max-width: 270px;\n\n    &.withDescriptors {\n        grid-template-columns: 72px 1fr;\n        grid-gap: var(--grid-gap-sm);\n    }\n\n    &.withOutDescriptors {\n        max-width: calc(72px + (2 * var(--padding-sm)));\n    }\n\n    hr {\n        background: var(--white-15);\n        border: 0;\n        margin: 0;\n\n        width: 100%;\n        height: 1px;\n    }\n\n    img {\n        width: 100%;\n    }\n}\n\n.desriptorTxt() {\n    color: var(--white-100);\n    font-family: var(--font-family-body);\n    font-size: 10px;\n    line-height: 1.25;\n\n    &:empty {\n        display: none;\n    }\n}\n\n.text {\n    grid-gap: var(--grid-gap-xs);\n    align-content: center;\n    display: grid;\n\n    p {\n        .desriptorTxt() !important;\n    }\n\n    a {\n        font-weight: 700;\n    }\n}\n", "// Font Family\n--font-family-body: 'Chalet';\n--font-family-h: 'ChaletComprime';\n\n// Font Weight\n--font-weight-regular: 400;\n--font-weight-bold: 700;\n\n// Letter Spacing\n--letter-spacing-body: 0;\n--letter-spacing-h: 0;\n\n// Line Height\n--line-height-sm: 1;\n--line-height-md: 1.1;\n--line-height-lg: 1.6;\n\n// Colors\n--black-200: #000000;\n--black-100: #121212;\n--black-65: rgba(18, 18, 18, 0.65);\n--black-40: rgba(18, 18, 18, 0.4);\n--black-15: rgba(18, 18, 18, 0.15);\n--text-dark: #2d2d2d;\n--border-color: #2d2d2d;\n\n--white-100: #ffffff;\n--white-65: rgba(255, 255, 255, 0.65);\n--white-40: rgba(255, 255, 255, 0.4);\n--white-15: rgba(255, 255, 255, 0.15);\n--text-light: #e8e8e8;\n\n--focusring-blue: blue;\n--red: #e03232;\n--circoloco-red: #eb1818;\n--rockstar-gold: #fcaf17;\n--playstation-blue: #00439c;\n--microsoft-green: #387a26;\n--pc-legacy: #b2b2b2;\n/* #if PCALT */\n--pc-enhanced: #beb279;\n/* #endif */\n\n--color-h: var(--white-100);\n--color-body: var(--text-light);\n\n--green-light: #c1f7bd;\n--green-dark: #81da85;\n\n// Scrollbar Colors\n--scroll-thumb-color: #7d7d7d;\n--scroll-track-color: transparent;\n\n// Max-Widths\n--max-width-sm: 640px;\n--max-width-md: 1088px;\n--max-width-lg: 1920px;\n--max-width-xl: 2560px;\n.xxl({--max-width-md: 1440px;});\n\n// Spacing\n--spacing-xxs: 0.25rem;\n--spacing-xs: 0.5rem;\n--spacing-sm: 1rem;\n--spacing-md: 2rem;\n--spacing-lg: 4rem;\n--spacing-xl: 8rem;\n.smMax({--spacing-lg: 2rem; --spacing-xl: 4rem;});\n\n// Grid Gap\n--grid-gap-xxs: var(--spacing-xxs);\n--grid-gap-xs: var(--spacing-xs);\n--grid-gap-sm: var(--spacing-sm);\n--grid-gap-md: var(--spacing-md);\n--grid-gap-lg: var(--spacing-lg);\n--grid-gap-xl: var(--spacing-xl);\n\n// Padding\n--padding-xxs: var(--spacing-xxs);\n--padding-xs: var(--spacing-xs);\n--padding-sm: var(--spacing-sm);\n--padding-md: var(--spacing-md);\n--padding-lg: var(--spacing-lg);\n--padding-xl: var(--spacing-xl);\n\n// Margin\n--margin-xxs: var(--spacing-xxs);\n--margin-xs: var(--spacing-xs);\n--margin-sm: var(--spacing-sm);\n--margin-md: var(--spacing-md);\n--margin-lg: var(--spacing-lg);\n--margin-xl: var(--spacing-xl);\n\n// Border Radius\n--border-radius-xs: 2px;\n--border-radius-sm: 4px;\n--border-radius-md: 8px;\n--border-radius-lg: 16px;\n\n// Gradients\n--gradient-overlay-bottom: linear-gradient(\n    180.08deg,\n    rgba(0, 0, 0, 0) 25%,\n    rgba(0, 0, 0, 0.5) 65%,\n    rgba(0, 0, 0, 0.6) 100%\n);\n--gradient-overlay-right: linear-gradient(\n    270deg,\n    rgba(0, 0, 0, 0.9) 0%,\n    rgba(0, 0, 0, 0) 100%\n);\n\n// Z-indicies\n--promo-banner-z-index: 11500;\n", "/*\n * New Design System:\n * 1. Breakpoints\n * 2. Typography\n * 3. Variables\n * 4. Utility\n *     4.1 Flex\n *     4.2 Grid\n *     4.3 Max-Width\n *     4.4 Images\n *     4.5 Padding\n *     4.6 Fonts\n *     4.7 Games\n *     4.8 Tina\n *     4.9 Hacks\n * 5. Presentational\n */\n\n/* 1. Breakpoints */\n@screen-sm: 0px;\n@screen-md: 768px;\n@screen-lg: 1024px;\n@screen-xl: 1920px;\n@screen-xxl: 2560px;\n@sm-min-width: @screen-sm;\n@md-min-width: @screen-md;\n@lg-min-width: @screen-lg;\n@xl-min-width: @screen-xl;\n@xxl-min-width: @screen-xxl;\n@sm-max-width: (@md-min-width - 1px);\n@md-max-width: (@lg-min-width - 1px);\n@lg-max-width: (@xl-min-width - 1px);\n@xl-max-width: (@xxl-min-width - 1px);\n\n.sm(@rules) {\n    .smMin(@rules);\n}\n.smMin(@rules) {\n    @media (min-width: @sm-min-width) {\n        @rules();\n    }\n}\n.smMax(@rules) {\n    @media (max-width: @sm-max-width) {\n        @rules();\n    }\n}\n.smOnly(@rules) {\n    @media (min-width: @sm-min-width) and (max-width: @sm-max-width) {\n        @rules();\n    }\n}\n.md(@rules) {\n    .mdMin(@rules);\n}\n.mdMin(@rules) {\n    @media (min-width: @md-min-width) {\n        @rules();\n    }\n}\n.mdMax(@rules) {\n    @media (max-width: @md-max-width) {\n        @rules();\n    }\n}\n.mdOnly(@rules) {\n    @media (min-width: @md-min-width) and (max-width: @md-max-width) {\n        @rules();\n    }\n}\n.lg(@rules) {\n    .lgMin(@rules);\n}\n.lgMin(@rules) {\n    @media (min-width: @lg-min-width) {\n        @rules();\n    }\n}\n.lgMax(@rules) {\n    @media (max-width: @lg-max-width) {\n        @rules();\n    }\n}\n.lgOnly(@rules) {\n    @media (min-width: @lg-min-width) and (max-width: @lg-max-width) {\n        @rules();\n    }\n}\n.xl(@rules) {\n    .xlMin(@rules);\n}\n.xlMin(@rules) {\n    @media (min-width: @xl-min-width) {\n        @rules();\n    }\n}\n.xlMax(@rules) {\n    @media (max-width: @xl-max-width) {\n        @rules();\n    }\n}\n.xlOnly(@rules) {\n    @media (min-width: @xl-min-width) and (max-width: @xl-max-width) {\n        @rules();\n    }\n}\n.xxl(@rules) {\n    .xxlMin(@rules);\n}\n.xxlMin(@rules) {\n    @media (min-width: @xxl-min-width) {\n        @rules();\n    }\n}\n\n.notoBackup(@varName; @stdFont) {\n    @{varName}: @stdFont;\n\n    &:lang(ja_jp) {\n        @{varName}: @stdFont, NotoSansJP;\n    }\n    &:lang(zh_hans) {\n        @{varName}: @stdFont, NotoSansSC;\n    }\n    &:lang(zh_tw) {\n        @{varName}: @stdFont, NotoSansTC;\n    }\n}\n\n/* 2. Typography */\n.handleFontDeclarations() {\n    .notoBackup(--rsg-font-family-std, HelveticaNowText);\n    .notoBackup(--rsg-font-family-h, HelveticaNowDisplayBold);\n    .notoBackup(--gta-font-family-std, Chalet);\n    .notoBackup(--gta-font-family-h, ChaletComprime);\n    .notoBackup(--gta-font-family-badge, Pricedown);\n    .notoBackup(--rdr-font-family-std, HapnaSlabSerif);\n    .notoBackup(--rdr-font-family-h, RDRLino-Regular);\n    .notoBackup(--rdr-font-family-newswire-subtitle, HapnaSlabSerif);\n    .notoBackup(--rdr-area-font, RDRCatalogueBold);\n\n    --header-multiplier: var(--header-numerator, var(--root-font-size)) /\n        var(--root-font-size);\n    font-family: var(--font-family-std, HelveticaNowText);\n    font-weight: var(--font-weight-std, 400);\n    letter-spacing: var(--letter-spacing-std, -0.025em);\n    line-height: var(--line-height-std, 1.6);\n    font-size: calc(var(--root-font-size) * 1px);\n    -webkit-font-smoothing: antialiased;\n\n    h1.large,\n    h1,\n    h2,\n    h3,\n    h4 {\n        font-family: var(--font-family-h, HelveticaNowDisplayBold);\n        letter-spacing: var(--letter-spacing-h, -0.025em);\n    }\n    h1.large,\n    h1 {\n        font-weight: var(--font-weight-h1, var(--font-weight-h, 700));\n        text-transform: var(--text-transform-h1, var(--text-transform-h, none));\n        line-height: var(--line-height-h1, var(--line-height-h, 1.1));\n    }\n\n    h1.large {\n        font-size: calc(var(--font-size-8) * var(--header-multiplier));\n    }\n    h1 {\n        font-size: calc(var(--font-size-7) * var(--header-multiplier));\n    }\n    h2 {\n        font-size: calc(var(--font-size-6) * var(--header-multiplier));\n        font-weight: var(--font-weight-h2, var(--font-weight-h, 700));\n        text-transform: var(--text-transform-h2, var(--text-transform-h, none));\n        line-height: var(--line-height-h, 1.1);\n    }\n    h3 {\n        font-size: calc(var(--font-size-5) * var(--header-multiplier));\n        font-weight: var(--font-weight-h3, var(--font-weight-h, 700));\n        text-transform: var(--text-transform-h3, var(--text-transform-h, none));\n        line-height: var(--line-height-h, 1.1);\n\n        &[data-context='newswire-subtitle'] {\n            font-size: calc(\n                var(--font-size-5) *\n                    var(\n                        --h3-numerator-override-newswire-subtitle,\n                        var(--header-multiplier)\n                    )\n            );\n            font-weight: var(\n                --font-weight-newswire-subtitle,\n                var(--font-weight-h)\n            );\n            font-family: var(\n                --font-family-newswire-subtitle,\n                var(--font-family-h)\n            );\n            text-transform: var(--text-transform-newswire-subtitle);\n        }\n\n        .isRdr({\n            font-weight: var(--font-weight-h3, var(--font-weight-h, 400));\n        });\n    }\n\n    h4,\n    h5,\n    h6 {\n        font-size: calc(var(--font-size-4) * var(--header-multiplier));\n        line-height: var(--line-height-h, 1.1);\n    }\n}\n\n.handleColors() {\n    h1.large,\n    h1 {\n        color: var(--color-h-dynamic, var(--color-h1, var(--color-h, inherit)));\n    }\n    h2 {\n        color: var(--color-h-dynamic, var(--color-h2, var(--color-h, inherit)));\n    }\n    h3 {\n        color: var(--color-h-dynamic, var(--color-h3, var(--color-h, inherit)));\n\n        &[data-context='newswire-subtitle'] {\n            color: var(\n                --color-subtitle-dynamic,\n                var(--color-h-dynamic, var(--color-h3, var(--color-h, inherit)))\n            );\n        }\n    }\n    h4,\n    h5,\n    h6 {\n        color: var(--color-h-dynamic, var(--color-h, inherit));\n    }\n    background-color: var(--background-color, transparent);\n\n    [template='community'] {\n        --time-color: var(--body-color, #2d2d2d);\n        --breadcrumb-separator-filter-invert: invert(0);\n\n        main {\n            color: var(--color-h, #161616);\n        }\n        p {\n            color: var(--body-color, #2d2d2d);\n        }\n    }\n}\n\n/* 3. Variables */\n.resetVariables() {\n    --text-section-max-width: 640px;\n    --base-pixel-size: 12px;\n    --base-rem-size: 0.75rem;\n    --half-rem-size: calc(var(--base-rem-size) / 2);\n    --twice-rem-size: calc(var(--base-rem-size) * 2);\n    --section-margin-bottom: calc(var(--base-rem-size) * 4);\n    --header-height: 80px;\n    --breadcrumbs-height: calc(var(--base-pixel-size) * 3.5);\n    --max-width: 1920px;\n    --standard-color: #fcaf17;\n    --color-h: #ffffff;\n    --body-color: #e8e8e8;\n    --background-color: #0b0b0b;\n    --card-background-color: #000;\n    --border-color: #282828;\n    --privacy-banner-height: 0px;\n    --game-header-height: 50px;\n    --standard-grid-gap: calc(var(--base-rem-size) * 2);\n    --image-margin-bottom: inherit;\n    --image-rounding: 0px;\n    --image-rounding-static: 16px;\n    --image-rounding-static-sm: 8px;\n    --image-rounding-static-xs: 4px;\n\n    --grid-gap-static-xs: 0.5rem;\n    --grid-gap-static-sm: 1rem;\n    --grid-gap-static-md: 2rem;\n    --grid-gap-static-lg: 4rem;\n    --grid-gap-static-xl: 8rem;\n    .smMax({--grid-gap-static-lg: 2rem; --grid-gap-static-xl: 4rem;});\n\n    --max-width-static: 640px;\n    --max-width-static-md: 1088px;\n    --max-width-static-lg: 1920px;\n    --max-width-static-xl: 2560px;\n    .xxlMin({--max-width-static-md: 1440px;});\n\n    --margin-static: 0 0 2rem;\n    --h2-margin: 2rem 0 0 0;\n\n    --padding-sides: var(--grid-gap-static-lg);\n    --padding-top-bottom: var(--padding-sides);\n    --padding-static: var(--padding-sides);\n}\n\n/* 4. Utility */\n/* 4.1 Flex */\n.flex() {\n    display: flex;\n    flex-flow: column;\n}\n.horizontalCenterChildren() {\n    display: flex;\n    justify-content: center;\n}\n.verticalCenterChildren() {\n    display: flex;\n    align-items: center;\n}\n.flexCenterChildren() {\n    .horizontalCenterChildren();\n    .verticalCenterChildren();\n}\n\n/* 4.2 Grid */\n.gridMinWidth(@minWidth: 480px; @rowGap: var(--standard-grid-gap); @colGap: var(--standard-grid-gap); @autoType: 'auto-fit') {\n    display: grid;\n    grid-row-gap: @rowGap;\n    grid-column-gap: @colGap;\n    grid-template-columns: ~'repeat(@{autoType}, minmax(@{minWidth}, 1fr))';\n}\n.gridHideExtraRows(@colGap: var(--standard-grid-gap)) {\n    ::-webkit-scrollbar {\n        display: none;\n    }\n    -ms-overflow-style: none;\n    display: grid;\n    grid-auto-flow: column;\n    grid-column-gap: @colGap;\n    overflow-y: hidden;\n    scroll-snap-type: x mandatory;\n    > * {\n        scroll-snap-align: start;\n    }\n    --per-page: 4;\n    .lgMax({--per-page: 3;});\n    .mdMax({--per-page: 2;});\n    .smMax({--per-page: 1;});\n\n    grid-auto-columns: calc(\n        100% / var(--per-page) - (var(--per-page) - 1) / var(--per-page) *\n            @colGap\n    );\n}\n.gridNumCols(@numInitialItems) {\n    display: grid;\n    grid-gap: var(--standard-grid-gap);\n    .smMax({grid-template-columns: repeat(1, minmax(0px, 1fr)) ;});\n    @media screen and (min-width: @screen-sm) and (max-width: @md-max-width) {\n        grid-template-columns: repeat(2, minmax(0px, 1fr));\n    }\n    @media screen and (min-width: @screen-lg) {\n        grid-template-columns: repeat(4, minmax(0px, 1fr));\n    }\n}\n.gridNumColsSmall(@colGap: var(--padding-top-bottom); @rowGap: var(--padding-top-bottom)) {\n    display: grid;\n    grid-row-gap: @rowGap;\n    grid-column-gap: @colGap;\n    grid-template-columns: repeat(1, minmax(0px, 1fr));\n    .md({grid-template-columns: repeat(2, minmax(0px, 1fr)) ;});\n}\n\n.standardLayoutGridItem(@maxWidth: var(--max-width-static-md), @padding: var(--padding-static)) {\n    .handleMaxWidth(@maxWidth);\n    .handlePadding(@padding);\n}\n\n.handleGridStyles(@grid-gap-dynamic: var(--grid-gap-static-md)) {\n    --grid-gap-dynamic: @grid-gap-dynamic;\n    display: grid;\n    grid-template-columns: repeat(var(--grid-num-columns, 1), minmax(0px, 1fr));\n    grid-template: var(\n        --grid-template-override,\n        auto / repeat(var(--grid-num-columns, 1), minmax(0, 1fr))\n    );\n    grid-gap: var(--grid-gap-dynamic);\n    align-items: var(--grid-align-items);\n    align-content: var(--grid-align-content);\n    align-self: var(--grid-align-self);\n    justify-items: var(--grid-justify-items);\n    justify-content: var(--grid-justify-content);\n    justify-self: var(--grid-justify-self);\n}\n\n/* 4.3 Max-Width */\n.maxWidth(@padding: 0) {\n    max-width: var(--max-width);\n    width: 100%;\n    margin: 0 auto;\n    padding-left: @padding;\n    padding-right: @padding;\n}\n.maxWidthWithNormalPadding() {\n    .maxWidth(var(--padding-sides));\n}\n\n.handleMaxWidth(@max-width-default: 1000000px) {\n    width: 100%;\n    max-width: calc(\n        var(--max-width-dynamic, @max-width-default) +\n            var(--padding-dynamic, 0px) * 2\n    ) !important;\n    margin: 0 auto;\n}\n\n.breakout(@max-width-default: 100vw) {\n    @margin: calc((@max-width-default / 2) * -1);\n    width: @max-width-default;\n    max-width: @max-width-default !important;\n    position: relative;\n    left: 50%;\n    right: 50%;\n    margin-left: @margin;\n    margin-right: @margin;\n}\n\n.fullWidth() {\n    .breakout;\n}\n\n/* 4.4 Images */\n.handleAspectRatio() {\n    --aspect-ratio-default: 1;\n    .lgMin({\n        --aspect-ratio-default: 16/9;\n    });\n\n    position: relative;\n    &:before {\n        content: '';\n        height: 0;\n        width: 100%;\n        display: block;\n        padding-bottom: calc(\n            100% / calc(var(--aspect-ratio, var(--aspect-ratio-default)))\n        );\n    }\n    > * {\n        position: absolute;\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 100%;\n    }\n}\n.setAspectRatio(@ratio) {\n    --aspect-ratio: @ratio;\n    .handleAspectRatio;\n}\n\n.handleParallaxPerspective() {\n    position: fixed;\n    width: 100%;\n    height: 100%;\n    overflow-x: hidden;\n    overflow-y: scroll;\n    perspective: var(--parallax-perspective);\n    perspective-origin: 0 0;\n}\n.handleParallaxDistance() {\n    transform: translateZ(var(--parallax-distance))\n        scale(\n            calc(\n                (var(--parallax-perspective) - var(--parallax-distance)) /\n                    var(--parallax-distance)\n            )\n        );\n}\n\n.handleImageRounding() {\n    border-radius: var(--image-rounding-dynamic, 0px);\n}\n\n/* 4.5 Padding */\n.handlePadding(@paddingSides: initial, @paddingTopBottom: initial) {\n    --padding-dynamic: @paddingSides;\n    --padding-dynamic-tb: @paddingTopBottom;\n\n    padding: var(--padding-t, var(--padding-dynamic-tb, 0))\n        var(--padding-dynamic, 0) var(--padding-b, var(--padding-dynamic-tb, 0))\n        var(--padding-dynamic, 0);\n}\n\n/* 4.6 Fonts */\n.loadFont(@family, @weight: 400, @style: normal, @file: @family) {\n    @font-face {\n        font-family: @family;\n        font-style: @style;\n        font-weight: @weight;\n        src: url('../fonts/@{file}.woff') format('woff');\n    }\n}\n.loadFontWoff2(@family, @weight: 400, @style: normal, @file: @family) {\n    @font-face {\n        font-family: @family;\n        font-style: @style;\n        font-weight: @weight;\n        src: url('../fonts/@{file}.woff2') format('woff2');\n    }\n}\n.fontClip(@backgroundImg) {\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n    @backgroundImg();\n}\n\n/* 4.7 Games */\n.gta(@rules) {\n    [data-game^='gta'] {\n        @rules();\n    }\n}\n\n.isGta(@rules) {\n    [data-game^='gta'] & {\n        @rules();\n    }\n}\n\n.rdr(@rules) {\n    [data-game='rdo'],\n    [data-game^='rdr'] {\n        @rules();\n    }\n}\n\n.isRdr(@rules) {\n    [data-game='rdo'] &,\n    [data-game^='rdr'] & {\n        @rules();\n    }\n}\n\n/* 4.8 Tina */\n.tinaTextField() {\n    padding: var(--tina-padding-small);\n    border-radius: var(--tina-radius-small);\n    background: var(--tina-color-grey-0);\n    color: var(--tina-color-grey-10);\n    background-color: var(--tina-color-grey-0);\n    border: 1px solid var(--tina-color-grey-2);\n    box-shadow: 0 0 0 2px transparent;\n    margin-bottom: 14px;\n}\n\n/* 4.9 Hacks */\n.safariBorderRadiusOverflowFix() {\n    // https://stackoverflow.com/questions/49066011/overflow-hidden-with-border-radius-not-working-on-safari\n    -webkit-mask-image: -webkit-radial-gradient(white, black);\n}\n\n.forceGpuRendering() {\n    // https://web.dev/animations-guide/#force\n    transform: translateZ(0);\n}\n\n/* 5. Presentational */\n@locales: en_us, fr_fr, de_de, es_es, es_mx, it_it, pt_br, pl_pl, ru_ru, ja_jp,\n    ko_kr, zh_tw, zh_hans;\n\n.placeholder(@rules) {\n    &::-webkit-input-placeholder {\n        @rules();\n    }\n    &:-moz-placeholder {\n        @rules();\n    }\n    &::-moz-placeholder {\n        @rules();\n    }\n    &:-ms-input-placeholder {\n        @rules();\n    }\n}\n\n.bgImg() {\n    background-size: cover;\n    background-position: center center;\n    background-repeat: no-repeat;\n}\n\n.themeDark() {\n    color: #e8e8e8;\n    --tag-color: #e8e8e8;\n}\n\n.outbound() {\n    content: '';\n    display: inline-block;\n    background-size: 100%;\n    background-repeat: no-repeat;\n    background-position: 0% 50%;\n    vertical-align: baseline;\n    margin-left: var(--grid-gap-static-xs);\n    width: 1rem;\n    height: 1rem;\n    background-image: data-uri('../img/outbound.svg');\n}\n\n.blurryBg() {\n    transition: filter 0.8s;\n    filter: blur(var(--blur-because-in-bg, 0px));\n}\n\n.fancyLink() {\n    position: relative;\n    background: transparent;\n    padding: 0;\n    z-index: 1;\n    @media (min-width: @screen-sm) {\n        transition: all 0.2s ease;\n        &:before {\n            content: '';\n            display: block;\n            position: absolute;\n            bottom: 0;\n            left: -0.1rem;\n            width: calc(100% + 0.2rem);\n            height: 2px;\n            background: var(--body-color);\n            transition: all 0.2s ease;\n            z-index: -1;\n            border-radius: 0.25rem;\n        }\n        &:hover {\n            color: #161616;\n\n            &:before {\n                left: -0.25rem;\n                width: calc(100% + 0.5rem);\n                height: 100%;\n            }\n        }\n    }\n    img {\n        display: block;\n    }\n}\n.stdHover() {\n    transition:\n        color 0.2s ease,\n        opacity 0.2s ease;\n    &:hover {\n        color: var(--standard-color);\n        opacity: 1;\n    }\n}\n.stdIconHover() {\n    &:hover {\n        filter: brightness(0) saturate(100%) invert(76%) sepia(15%)\n            saturate(5173%) hue-rotate(348deg) brightness(105%) contrast(98%);\n    }\n}\n.card() {\n    .handleImageRounding;\n    --image-rounding-dynamic: var(--image-rounding-static-sm);\n    background: var(--card-background-color);\n    overflow: hidden;\n    display: flex;\n    flex-flow: column;\n    transition: transform 0.2s ease;\n    border: 1px solid var(--border-color);\n    .info {\n        .handleGridStyles;\n        --grid-gap-dynamic: var(--grid-gap-static-xs);\n        padding: 2rem 1.5rem;\n        .title {\n            --line-height-h: 1.3;\n            color: var(--color-h);\n        }\n    }\n}\n\n.cardHover() {\n    transition:\n        transform 0.3s cubic-bezier(0, 0, 0.5, 1),\n        box-shadow 0.3s cubic-bezier(0, 0, 0.5, 1);\n    box-shadow: 0px 0px 40px -25px rgba(0, 0, 0, 0);\n\n    &:hover {\n        transform: scale(1.025);\n        box-shadow: 0px 30px 40px -25px rgba(0, 0, 0, 1);\n    }\n}\n\n.cardSecondary() {\n    .card();\n    .info {\n        padding: 1.5rem;\n    }\n    .title {\n        font-size: var(--font-size-3);\n        font-weight: 400;\n    }\n}\n\n.cardTertiary() {\n    .cardSecondary();\n    --image-rounding-dynamic: 0;\n    --card-background-color: transparent;\n    grid-gap: var(--grid-gap-static-sm);\n    overflow: unset;\n    border: none;\n    .info {\n        padding: 0;\n    }\n    .img {\n        .handleImageRounding;\n        --image-rounding-dynamic: var(--image-rounding-static-sm);\n    }\n}\n\n.standardPage() {\n    .maxWidthWithNormalPadding;\n    padding-top: var(--padding-top-bottom);\n    padding-bottom: var(--padding-top-bottom);\n}\n\n.dropdownThing(@defaultDeg: 0deg; @openDeg: 180deg) {\n    position: relative;\n    padding-right: calc(var(--grid-gap-static-xs) + 24px);\n    .dropdownCaret(yellow; @defaultDeg; @openDeg);\n}\n.dropdownCaret(@color; @defaultDeg: 0deg; @openDeg: 180deg) {\n    &:after {\n        display: inline-block;\n        content: '';\n        position: absolute;\n        top: 0;\n        right: 0;\n        @img: '../img/dropdown-@{color}.svg';\n        background-image: data-uri(@img);\n        background-repeat: no-repeat;\n        width: image-width(@img);\n        height: 100%;\n        background-position: center;\n        background-size: 100%;\n        transform: rotate(@defaultDeg);\n        transition: transform 0.3s;\n        .open& {\n            transform: rotate(@openDeg);\n        }\n    }\n}\n\n.sectionHeader() {\n    margin: 0 0 1.5rem;\n    font-size: var(--font-size-5);\n    font-family: var(--font-family-h);\n    font-weight: var(--font-weight-h);\n    --line-height-h: 1.3;\n\n    .xlMin ({\n        font-size: var(--font-size-6);\n    });;\n}\n.sectionHeaderSmall() {\n    .sectionHeader;\n    font-size: var(--font-size-4);\n\n    .xlMin ({\n        font-size: var(--font-size-5);\n    });;\n}\n\n.tag() {\n    color: var(--tag-color, var(--body-color));\n    font-weight: 700;\n    font-size: var(--font-size-2);\n    line-height: 1.6;\n}\n\n.date() {\n    .tag;\n    font-weight: 400;\n    opacity: 0.65;\n}\n.animationFadeInUp() {\n    :global {\n        animation: globalFadeInUp 0.75s;\n        animation-play-state: paused;\n    }\n}\n.animationPaused() {\n    animation-play-state: paused;\n}\n.animationRunning() {\n    animation-play-state: running;\n}\n\n.button() {\n    font-weight: 700;\n    align-self: center;\n    display: inline-block;\n    text-transform: uppercase;\n    background: transparent;\n    border: 1px solid var(--color-h);\n    padding: 1rem 3rem;\n    color: inherit;\n    cursor: pointer;\n    border-radius: 0.25rem;\n    color: var(--color-h);\n    line-height: 100%;\n    transition: all 0.2s ease;\n    &:focus,\n    &:hover {\n        background: var(--standard-color);\n        border-color: var(--standard-color);\n        color: #161616;\n    }\n    &.secondary {\n        .fancyLink;\n        outline: none;\n        border: none;\n        text-transform: none;\n        font-weight: 400;\n        line-height: unset;\n        .smMin ({\n            &:before {\n                background: var(--standard-color);\n                height:4px;\n            }\n            &:focus,\n            &:hover {\n                &:before {\n                    left: -0.5rem;\n                    width: calc(100% + 1rem);\n                    height: 100%;\n                }\n            }\n         });;\n    }\n    &[disabled] {\n        opacity: 0.5;\n    }\n}\n\n.expandToEdges() {\n    margin-top: calc(var(--padding-top-bottom) * -1);\n    margin-left: calc(var(--padding-sides) * -1);\n    width: 100vw;\n    width: calc(100% + calc(var(--padding-sides) * 2));\n}\n\n.shadow(@boxShadow: 0 10px 30px rgba(0, 0, 0, 0.5)) {\n    // border: 1px solid rgba(0, 0, 0, 0.15);\n    box-shadow: @boxShadow;\n}\n.shadowTop() {\n    box-shadow: -3px -3px 6px 0 rgba(0, 0, 0, 0.2);\n}\n\n.aspect-ratio(@width, @height, @selector: div, @pre: ~'') {\n    @supports not (aspect-ratio: @width / @height) {\n        position: relative;\n        &:before {\n            display: block;\n            content: '';\n            width: 100%;\n            padding-top: calc((@height / @width) * 100%);\n        }\n        > @{pre}@{selector} {\n            position: absolute;\n            top: 0;\n            left: 0;\n            right: 0;\n            bottom: 0;\n            width: 100% !important;\n            height: 100% !important;\n        }\n    }\n\n    @supports (aspect-ratio: @width / @height) {\n        @{pre}@{selector} {\n            aspect-ratio: @width / @height !important;\n            width: 100% !important;\n            height: auto !important;\n        }\n    }\n}\n.unset-aspect-ratio(@selector, @pre: ~'') {\n    @supports not (aspect-ratio: 1/1) {\n        position: unset;\n        &:before {\n            display: none;\n        }\n        > @{pre}@{selector} {\n            position: unset;\n            width: 100% !important;\n            height: unset !important;\n        }\n    }\n\n    @supports (aspect-ratio: 1/1) {\n        @{pre}@{selector} {\n            aspect-ratio: unset !important;\n        }\n    }\n}\n\n.rockstarTypography() {\n    --font-family-std: NeueHelveticaPaneuropean, sans-serif;\n    --leter-spacing-std: 0;\n\n    font-size: var(--font-size-2);\n    font-family: var(--font-family-std);\n    letter-spacing: var(--leter-spacing-std);\n\n    button {\n        letter-spacing: var(--leter-spacing-std);\n    }\n}\n\n.setNodeFontSizing() {\n    // TODO audit this. .5rem is very small.\n    --font-size-1: 0.75rem;\n\n    --font-size-2: 0.75rem;\n    --font-size-3: 1rem;\n    --font-size-4: 1.25rem;\n    --font-size-5: 1.5rem;\n    --font-size-6: 2rem;\n    --font-size-7: 2.5rem;\n    --font-size-8: 3rem;\n    --font-size-9: 4rem;\n    --font-size-10: 5rem;\n}\n\n.setRootFontSizing() {\n    .sm({--root-font-size: 16;});\n    .md({--root-font-size: 18;});\n    .lg({--root-font-size: 20;});\n    .xl({--root-font-size: 22;});\n}\n\n.button-text () {\n    font-size: var(--font-size-4);\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-sm);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-h);\n    text-transform: uppercase;\n}\n\n.button-text-sm () {\n    .button-text;\n    font-size: var(--font-size-3);\n}\n\n.button-text-md () {\n    .button-text;\n    font-size: var(--font-size-4);\n    padding: 0 var(--padding-md);\n}\n\n.button-text-lg () {\n    .button-text;\n    font-size: var(--font-size-5);\n    padding: 0 var(--padding-lg);\n}\n\n.button-text-xl () {\n    .button-text;\n    font-size: var(--font-size-7);\n    padding: 0 var(--padding-xl);\n}\n\n.cta-button() {\n    @import '../less/gen9-vars';\n\n    --button-text-color-hover: var(--white-100);\n\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: center;\n    gap: var(--grid-gap-xs, 0.5rem);\n\n    background: var(\n        --button-background-color,\n        var(--black-65, hsla(0, 0%, 7%, 0.65))\n    );\n    border: 1px solid var(--white-100, #fff);\n    border-radius: var(--border-radius-sm, 4px);\n    color: var(--button-text-color, var(--white-100));\n    cursor: pointer;\n    padding: 0 var(--padding-sm);\n\n    width: 100%;\n    height: var(--button-height-3, 3rem);\n\n    transition: all 0.3s ease-in-out;\n\n    &[data-brand='reddeadredemption'],\n    [data-brand='reddeadredemption'] & {\n        --accent-color: #cc0000;\n        --font-family-h: RDRUltra;\n\n        :lang(pl_pl) {\n            --font-family-h: RDRUltra, NeueHelveticaPaneuropean;\n        }\n    }\n\n    &[data-brand='bully'],\n    [data-brand='bully'] & {\n        --accent-color: #f8ad00;\n        --font-family-h: HelveticaNowDisplayBold;\n        --button-background-color: var(--white-100);\n        --button-background-color-hover: var(--accent-color);\n        --button-text-color: var(--black-100);\n        --button-text-color-hover: var(--black-100);\n\n        backdrop-filter: blur(25px);\n        padding: 0 var(--padding-md, 32px);\n    }\n\n    img {\n        height: 1rem;\n        width: auto;\n    }\n\n    .label {\n        .button-text();\n        display: flex;\n        flex-shrink: 0;\n    }\n\n    &.primary {\n        color: var(--black-100);\n        background-color: var(--white-100);\n    }\n\n    &:hover {\n        border-color: var(--accent-color, var(--btn-active-color));\n        background-color: var(--accent-color, var(--btn-active-color));\n        color: var(--button-text-color-hover, var(--btn-active-color));\n\n        &.primary {\n            color: var(--button-text-color-hover, var(--white-100));\n        }\n    }\n\n    @media (min-width: 1280px) {\n        padding: 0 var(--padding-md);\n    }\n\n    @media (min-width: 768px) and (max-width: 1539px) {\n        height: 2.5rem;\n\n        img {\n            height: 1rem;\n        }\n\n        .label {\n            .button-text-sm();\n        }\n    }\n}\n"],
        sourceRoot: ""
      }]), o.locals = {
        rating: "rockstargames-sites-gta-gen9c3e95c84902dd75b827d3c95532e22dc",
        withDescriptors: "rockstargames-sites-gta-gen9b98963abfc7a63295bebc6c6d15b391a",
        withOutDescriptors: "rockstargames-sites-gta-gen9b6339480b5fd086fb0c025930bfb7dcd",
        text: "rockstargames-sites-gta-gen9babdd6ae2ff83f380dadc6982effa011"
      };
      const s = o
    },
    87572: (n, e, a) => {
      "use strict";
      a.d(e, {
        A: () => s
      });
      var t = a(42587),
        r = a.n(t),
        i = a(15081),
        o = a.n(i)()(r());
      o.push([n.id, '.rockstargames-sites-gta-gen9bc25ec64410308d56e4dc097e81fb129{align-self:center;background:transparent;border:1px solid var(--color-h);border-radius:.25rem;color:inherit;color:var(--color-h);cursor:pointer;display:inline-block;font-weight:700;line-height:100%;padding:1rem 3rem;text-transform:uppercase;transition:all .2s ease}.rockstargames-sites-gta-gen9bc25ec64410308d56e4dc097e81fb129:focus,.rockstargames-sites-gta-gen9bc25ec64410308d56e4dc097e81fb129:hover{background:var(--standard-color);border-color:var(--standard-color);color:#161616}.rockstargames-sites-gta-gen9bc25ec64410308d56e4dc097e81fb129.rockstargames-sites-gta-gen9a3e6439dcaa4870840298d683db4831c{background:transparent;border:none;font-weight:400;line-height:unset;outline:none;padding:0;position:relative;text-transform:none;z-index:1}@media (min-width:0px){.rockstargames-sites-gta-gen9bc25ec64410308d56e4dc097e81fb129.rockstargames-sites-gta-gen9a3e6439dcaa4870840298d683db4831c{transition:all .2s ease}.rockstargames-sites-gta-gen9bc25ec64410308d56e4dc097e81fb129.rockstargames-sites-gta-gen9a3e6439dcaa4870840298d683db4831c:before{background:var(--body-color);border-radius:.25rem;bottom:0;content:"";display:block;height:2px;left:-.1rem;position:absolute;transition:all .2s ease;width:calc(100% + .2rem);z-index:-1}.rockstargames-sites-gta-gen9bc25ec64410308d56e4dc097e81fb129.rockstargames-sites-gta-gen9a3e6439dcaa4870840298d683db4831c:hover{color:#161616}.rockstargames-sites-gta-gen9bc25ec64410308d56e4dc097e81fb129.rockstargames-sites-gta-gen9a3e6439dcaa4870840298d683db4831c:hover:before{height:100%;left:-.25rem;width:calc(100% + .5rem)}}.rockstargames-sites-gta-gen9bc25ec64410308d56e4dc097e81fb129.rockstargames-sites-gta-gen9a3e6439dcaa4870840298d683db4831c img{display:block}@media (min-width:0px){.rockstargames-sites-gta-gen9bc25ec64410308d56e4dc097e81fb129.rockstargames-sites-gta-gen9a3e6439dcaa4870840298d683db4831c:before{background:var(--standard-color);height:4px}.rockstargames-sites-gta-gen9bc25ec64410308d56e4dc097e81fb129.rockstargames-sites-gta-gen9a3e6439dcaa4870840298d683db4831c:focus:before,.rockstargames-sites-gta-gen9bc25ec64410308d56e4dc097e81fb129.rockstargames-sites-gta-gen9a3e6439dcaa4870840298d683db4831c:hover:before{height:100%;left:-.5rem;width:calc(100% + 1rem)}}.rockstargames-sites-gta-gen9bc25ec64410308d56e4dc097e81fb129[disabled]{opacity:.5}', "", {
        version: 3,
        sources: ["webpack://./../../buildtime/components/src/dom/Button/index.less", "webpack://./../../buildtime/legacy-design-system/less/mixins.less"],
        names: [],
        mappings: "AAEA,8DC4xBI,iBAAA,CAGA,sBAAA,CACA,+BAAA,CAIA,oBAAA,CAFA,aAAA,CAGA,oBAAA,CAFA,cAAA,CANA,oBAAA,CAFA,eAAA,CAWA,gBAAA,CALA,iBAAA,CAHA,wBAAA,CASA,uBD5vBJ,CC6vBI,wIAEI,gCAAA,CACA,kCAAA,CACA,aD3vBR,CC6vBI,2HA5MA,sBAAA,CA+MI,WAAA,CAEA,eAAA,CACA,iBAAA,CAJA,YAAA,CA7MJ,SAAA,CAFA,iBAAA,CAiNI,mBAAA,CA9MJ,SDxiBJ,CCyiBI,uBAAA,2HACI,uBDtiBN,CCuiBM,kIAQI,4BAAA,CAGA,oBAAA,CAPA,QAAA,CAHA,UAAA,CACA,aAAA,CAKA,UAAA,CAFA,WAAA,CAFA,iBAAA,CAMA,uBAAA,CAHA,wBAAA,CAIA,UDpiBV,CCuiBM,iIACI,aDriBV,CCuiBU,wIAGI,WAAA,CAFA,YAAA,CACA,wBDpiBd,CACF,CCwtBI,+HA/KI,aDtiBR,CCrDI,uBAkxBQ,kIACI,gCAAA,CACA,UD1tBd,CC8tBc,gRAGI,WAAA,CAFA,WAAA,CACA,uBD1tBlB,CACF,CC+tBI,wEACI,UD7tBR",
        sourcesContent: ["@import '@rsgweb/legacy-design-system/less/mixins.less';\n\n.button {\n    .button();\n}\n", "/*\n * New Design System:\n * 1. Breakpoints\n * 2. Typography\n * 3. Variables\n * 4. Utility\n *     4.1 Flex\n *     4.2 Grid\n *     4.3 Max-Width\n *     4.4 Images\n *     4.5 Padding\n *     4.6 Fonts\n *     4.7 Games\n *     4.8 Tina\n *     4.9 Hacks\n * 5. Presentational\n */\n\n/* 1. Breakpoints */\n@screen-sm: 0px;\n@screen-md: 768px;\n@screen-lg: 1024px;\n@screen-xl: 1920px;\n@screen-xxl: 2560px;\n@sm-min-width: @screen-sm;\n@md-min-width: @screen-md;\n@lg-min-width: @screen-lg;\n@xl-min-width: @screen-xl;\n@xxl-min-width: @screen-xxl;\n@sm-max-width: (@md-min-width - 1px);\n@md-max-width: (@lg-min-width - 1px);\n@lg-max-width: (@xl-min-width - 1px);\n@xl-max-width: (@xxl-min-width - 1px);\n\n.sm(@rules) {\n    .smMin(@rules);\n}\n.smMin(@rules) {\n    @media (min-width: @sm-min-width) {\n        @rules();\n    }\n}\n.smMax(@rules) {\n    @media (max-width: @sm-max-width) {\n        @rules();\n    }\n}\n.smOnly(@rules) {\n    @media (min-width: @sm-min-width) and (max-width: @sm-max-width) {\n        @rules();\n    }\n}\n.md(@rules) {\n    .mdMin(@rules);\n}\n.mdMin(@rules) {\n    @media (min-width: @md-min-width) {\n        @rules();\n    }\n}\n.mdMax(@rules) {\n    @media (max-width: @md-max-width) {\n        @rules();\n    }\n}\n.mdOnly(@rules) {\n    @media (min-width: @md-min-width) and (max-width: @md-max-width) {\n        @rules();\n    }\n}\n.lg(@rules) {\n    .lgMin(@rules);\n}\n.lgMin(@rules) {\n    @media (min-width: @lg-min-width) {\n        @rules();\n    }\n}\n.lgMax(@rules) {\n    @media (max-width: @lg-max-width) {\n        @rules();\n    }\n}\n.lgOnly(@rules) {\n    @media (min-width: @lg-min-width) and (max-width: @lg-max-width) {\n        @rules();\n    }\n}\n.xl(@rules) {\n    .xlMin(@rules);\n}\n.xlMin(@rules) {\n    @media (min-width: @xl-min-width) {\n        @rules();\n    }\n}\n.xlMax(@rules) {\n    @media (max-width: @xl-max-width) {\n        @rules();\n    }\n}\n.xlOnly(@rules) {\n    @media (min-width: @xl-min-width) and (max-width: @xl-max-width) {\n        @rules();\n    }\n}\n.xxl(@rules) {\n    .xxlMin(@rules);\n}\n.xxlMin(@rules) {\n    @media (min-width: @xxl-min-width) {\n        @rules();\n    }\n}\n\n.notoBackup(@varName; @stdFont) {\n    @{varName}: @stdFont;\n\n    &:lang(ja_jp) {\n        @{varName}: @stdFont, NotoSansJP;\n    }\n    &:lang(zh_hans) {\n        @{varName}: @stdFont, NotoSansSC;\n    }\n    &:lang(zh_tw) {\n        @{varName}: @stdFont, NotoSansTC;\n    }\n}\n\n/* 2. Typography */\n.handleFontDeclarations() {\n    .notoBackup(--rsg-font-family-std, HelveticaNowText);\n    .notoBackup(--rsg-font-family-h, HelveticaNowDisplayBold);\n    .notoBackup(--gta-font-family-std, Chalet);\n    .notoBackup(--gta-font-family-h, ChaletComprime);\n    .notoBackup(--gta-font-family-badge, Pricedown);\n    .notoBackup(--rdr-font-family-std, HapnaSlabSerif);\n    .notoBackup(--rdr-font-family-h, RDRLino-Regular);\n    .notoBackup(--rdr-font-family-newswire-subtitle, HapnaSlabSerif);\n    .notoBackup(--rdr-area-font, RDRCatalogueBold);\n\n    --header-multiplier: var(--header-numerator, var(--root-font-size)) /\n        var(--root-font-size);\n    font-family: var(--font-family-std, HelveticaNowText);\n    font-weight: var(--font-weight-std, 400);\n    letter-spacing: var(--letter-spacing-std, -0.025em);\n    line-height: var(--line-height-std, 1.6);\n    font-size: calc(var(--root-font-size) * 1px);\n    -webkit-font-smoothing: antialiased;\n\n    h1.large,\n    h1,\n    h2,\n    h3,\n    h4 {\n        font-family: var(--font-family-h, HelveticaNowDisplayBold);\n        letter-spacing: var(--letter-spacing-h, -0.025em);\n    }\n    h1.large,\n    h1 {\n        font-weight: var(--font-weight-h1, var(--font-weight-h, 700));\n        text-transform: var(--text-transform-h1, var(--text-transform-h, none));\n        line-height: var(--line-height-h1, var(--line-height-h, 1.1));\n    }\n\n    h1.large {\n        font-size: calc(var(--font-size-8) * var(--header-multiplier));\n    }\n    h1 {\n        font-size: calc(var(--font-size-7) * var(--header-multiplier));\n    }\n    h2 {\n        font-size: calc(var(--font-size-6) * var(--header-multiplier));\n        font-weight: var(--font-weight-h2, var(--font-weight-h, 700));\n        text-transform: var(--text-transform-h2, var(--text-transform-h, none));\n        line-height: var(--line-height-h, 1.1);\n    }\n    h3 {\n        font-size: calc(var(--font-size-5) * var(--header-multiplier));\n        font-weight: var(--font-weight-h3, var(--font-weight-h, 700));\n        text-transform: var(--text-transform-h3, var(--text-transform-h, none));\n        line-height: var(--line-height-h, 1.1);\n\n        &[data-context='newswire-subtitle'] {\n            font-size: calc(\n                var(--font-size-5) *\n                    var(\n                        --h3-numerator-override-newswire-subtitle,\n                        var(--header-multiplier)\n                    )\n            );\n            font-weight: var(\n                --font-weight-newswire-subtitle,\n                var(--font-weight-h)\n            );\n            font-family: var(\n                --font-family-newswire-subtitle,\n                var(--font-family-h)\n            );\n            text-transform: var(--text-transform-newswire-subtitle);\n        }\n\n        .isRdr({\n            font-weight: var(--font-weight-h3, var(--font-weight-h, 400));\n        });\n    }\n\n    h4,\n    h5,\n    h6 {\n        font-size: calc(var(--font-size-4) * var(--header-multiplier));\n        line-height: var(--line-height-h, 1.1);\n    }\n}\n\n.handleColors() {\n    h1.large,\n    h1 {\n        color: var(--color-h-dynamic, var(--color-h1, var(--color-h, inherit)));\n    }\n    h2 {\n        color: var(--color-h-dynamic, var(--color-h2, var(--color-h, inherit)));\n    }\n    h3 {\n        color: var(--color-h-dynamic, var(--color-h3, var(--color-h, inherit)));\n\n        &[data-context='newswire-subtitle'] {\n            color: var(\n                --color-subtitle-dynamic,\n                var(--color-h-dynamic, var(--color-h3, var(--color-h, inherit)))\n            );\n        }\n    }\n    h4,\n    h5,\n    h6 {\n        color: var(--color-h-dynamic, var(--color-h, inherit));\n    }\n    background-color: var(--background-color, transparent);\n\n    [template='community'] {\n        --time-color: var(--body-color, #2d2d2d);\n        --breadcrumb-separator-filter-invert: invert(0);\n\n        main {\n            color: var(--color-h, #161616);\n        }\n        p {\n            color: var(--body-color, #2d2d2d);\n        }\n    }\n}\n\n/* 3. Variables */\n.resetVariables() {\n    --text-section-max-width: 640px;\n    --base-pixel-size: 12px;\n    --base-rem-size: 0.75rem;\n    --half-rem-size: calc(var(--base-rem-size) / 2);\n    --twice-rem-size: calc(var(--base-rem-size) * 2);\n    --section-margin-bottom: calc(var(--base-rem-size) * 4);\n    --header-height: 80px;\n    --breadcrumbs-height: calc(var(--base-pixel-size) * 3.5);\n    --max-width: 1920px;\n    --standard-color: #fcaf17;\n    --color-h: #ffffff;\n    --body-color: #e8e8e8;\n    --background-color: #0b0b0b;\n    --card-background-color: #000;\n    --border-color: #282828;\n    --privacy-banner-height: 0px;\n    --game-header-height: 50px;\n    --standard-grid-gap: calc(var(--base-rem-size) * 2);\n    --image-margin-bottom: inherit;\n    --image-rounding: 0px;\n    --image-rounding-static: 16px;\n    --image-rounding-static-sm: 8px;\n    --image-rounding-static-xs: 4px;\n\n    --grid-gap-static-xs: 0.5rem;\n    --grid-gap-static-sm: 1rem;\n    --grid-gap-static-md: 2rem;\n    --grid-gap-static-lg: 4rem;\n    --grid-gap-static-xl: 8rem;\n    .smMax({--grid-gap-static-lg: 2rem; --grid-gap-static-xl: 4rem;});\n\n    --max-width-static: 640px;\n    --max-width-static-md: 1088px;\n    --max-width-static-lg: 1920px;\n    --max-width-static-xl: 2560px;\n    .xxlMin({--max-width-static-md: 1440px;});\n\n    --margin-static: 0 0 2rem;\n    --h2-margin: 2rem 0 0 0;\n\n    --padding-sides: var(--grid-gap-static-lg);\n    --padding-top-bottom: var(--padding-sides);\n    --padding-static: var(--padding-sides);\n}\n\n/* 4. Utility */\n/* 4.1 Flex */\n.flex() {\n    display: flex;\n    flex-flow: column;\n}\n.horizontalCenterChildren() {\n    display: flex;\n    justify-content: center;\n}\n.verticalCenterChildren() {\n    display: flex;\n    align-items: center;\n}\n.flexCenterChildren() {\n    .horizontalCenterChildren();\n    .verticalCenterChildren();\n}\n\n/* 4.2 Grid */\n.gridMinWidth(@minWidth: 480px; @rowGap: var(--standard-grid-gap); @colGap: var(--standard-grid-gap); @autoType: 'auto-fit') {\n    display: grid;\n    grid-row-gap: @rowGap;\n    grid-column-gap: @colGap;\n    grid-template-columns: ~'repeat(@{autoType}, minmax(@{minWidth}, 1fr))';\n}\n.gridHideExtraRows(@colGap: var(--standard-grid-gap)) {\n    ::-webkit-scrollbar {\n        display: none;\n    }\n    -ms-overflow-style: none;\n    display: grid;\n    grid-auto-flow: column;\n    grid-column-gap: @colGap;\n    overflow-y: hidden;\n    scroll-snap-type: x mandatory;\n    > * {\n        scroll-snap-align: start;\n    }\n    --per-page: 4;\n    .lgMax({--per-page: 3;});\n    .mdMax({--per-page: 2;});\n    .smMax({--per-page: 1;});\n\n    grid-auto-columns: calc(\n        100% / var(--per-page) - (var(--per-page) - 1) / var(--per-page) *\n            @colGap\n    );\n}\n.gridNumCols(@numInitialItems) {\n    display: grid;\n    grid-gap: var(--standard-grid-gap);\n    .smMax({grid-template-columns: repeat(1, minmax(0px, 1fr)) ;});\n    @media screen and (min-width: @screen-sm) and (max-width: @md-max-width) {\n        grid-template-columns: repeat(2, minmax(0px, 1fr));\n    }\n    @media screen and (min-width: @screen-lg) {\n        grid-template-columns: repeat(4, minmax(0px, 1fr));\n    }\n}\n.gridNumColsSmall(@colGap: var(--padding-top-bottom); @rowGap: var(--padding-top-bottom)) {\n    display: grid;\n    grid-row-gap: @rowGap;\n    grid-column-gap: @colGap;\n    grid-template-columns: repeat(1, minmax(0px, 1fr));\n    .md({grid-template-columns: repeat(2, minmax(0px, 1fr)) ;});\n}\n\n.standardLayoutGridItem(@maxWidth: var(--max-width-static-md), @padding: var(--padding-static)) {\n    .handleMaxWidth(@maxWidth);\n    .handlePadding(@padding);\n}\n\n.handleGridStyles(@grid-gap-dynamic: var(--grid-gap-static-md)) {\n    --grid-gap-dynamic: @grid-gap-dynamic;\n    display: grid;\n    grid-template-columns: repeat(var(--grid-num-columns, 1), minmax(0px, 1fr));\n    grid-template: var(\n        --grid-template-override,\n        auto / repeat(var(--grid-num-columns, 1), minmax(0, 1fr))\n    );\n    grid-gap: var(--grid-gap-dynamic);\n    align-items: var(--grid-align-items);\n    align-content: var(--grid-align-content);\n    align-self: var(--grid-align-self);\n    justify-items: var(--grid-justify-items);\n    justify-content: var(--grid-justify-content);\n    justify-self: var(--grid-justify-self);\n}\n\n/* 4.3 Max-Width */\n.maxWidth(@padding: 0) {\n    max-width: var(--max-width);\n    width: 100%;\n    margin: 0 auto;\n    padding-left: @padding;\n    padding-right: @padding;\n}\n.maxWidthWithNormalPadding() {\n    .maxWidth(var(--padding-sides));\n}\n\n.handleMaxWidth(@max-width-default: 1000000px) {\n    width: 100%;\n    max-width: calc(\n        var(--max-width-dynamic, @max-width-default) +\n            var(--padding-dynamic, 0px) * 2\n    ) !important;\n    margin: 0 auto;\n}\n\n.breakout(@max-width-default: 100vw) {\n    @margin: calc((@max-width-default / 2) * -1);\n    width: @max-width-default;\n    max-width: @max-width-default !important;\n    position: relative;\n    left: 50%;\n    right: 50%;\n    margin-left: @margin;\n    margin-right: @margin;\n}\n\n.fullWidth() {\n    .breakout;\n}\n\n/* 4.4 Images */\n.handleAspectRatio() {\n    --aspect-ratio-default: 1;\n    .lgMin({\n        --aspect-ratio-default: 16/9;\n    });\n\n    position: relative;\n    &:before {\n        content: '';\n        height: 0;\n        width: 100%;\n        display: block;\n        padding-bottom: calc(\n            100% / calc(var(--aspect-ratio, var(--aspect-ratio-default)))\n        );\n    }\n    > * {\n        position: absolute;\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 100%;\n    }\n}\n.setAspectRatio(@ratio) {\n    --aspect-ratio: @ratio;\n    .handleAspectRatio;\n}\n\n.handleParallaxPerspective() {\n    position: fixed;\n    width: 100%;\n    height: 100%;\n    overflow-x: hidden;\n    overflow-y: scroll;\n    perspective: var(--parallax-perspective);\n    perspective-origin: 0 0;\n}\n.handleParallaxDistance() {\n    transform: translateZ(var(--parallax-distance))\n        scale(\n            calc(\n                (var(--parallax-perspective) - var(--parallax-distance)) /\n                    var(--parallax-distance)\n            )\n        );\n}\n\n.handleImageRounding() {\n    border-radius: var(--image-rounding-dynamic, 0px);\n}\n\n/* 4.5 Padding */\n.handlePadding(@paddingSides: initial, @paddingTopBottom: initial) {\n    --padding-dynamic: @paddingSides;\n    --padding-dynamic-tb: @paddingTopBottom;\n\n    padding: var(--padding-t, var(--padding-dynamic-tb, 0))\n        var(--padding-dynamic, 0) var(--padding-b, var(--padding-dynamic-tb, 0))\n        var(--padding-dynamic, 0);\n}\n\n/* 4.6 Fonts */\n.loadFont(@family, @weight: 400, @style: normal, @file: @family) {\n    @font-face {\n        font-family: @family;\n        font-style: @style;\n        font-weight: @weight;\n        src: url('../fonts/@{file}.woff') format('woff');\n    }\n}\n.loadFontWoff2(@family, @weight: 400, @style: normal, @file: @family) {\n    @font-face {\n        font-family: @family;\n        font-style: @style;\n        font-weight: @weight;\n        src: url('../fonts/@{file}.woff2') format('woff2');\n    }\n}\n.fontClip(@backgroundImg) {\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n    @backgroundImg();\n}\n\n/* 4.7 Games */\n.gta(@rules) {\n    [data-game^='gta'] {\n        @rules();\n    }\n}\n\n.isGta(@rules) {\n    [data-game^='gta'] & {\n        @rules();\n    }\n}\n\n.rdr(@rules) {\n    [data-game='rdo'],\n    [data-game^='rdr'] {\n        @rules();\n    }\n}\n\n.isRdr(@rules) {\n    [data-game='rdo'] &,\n    [data-game^='rdr'] & {\n        @rules();\n    }\n}\n\n/* 4.8 Tina */\n.tinaTextField() {\n    padding: var(--tina-padding-small);\n    border-radius: var(--tina-radius-small);\n    background: var(--tina-color-grey-0);\n    color: var(--tina-color-grey-10);\n    background-color: var(--tina-color-grey-0);\n    border: 1px solid var(--tina-color-grey-2);\n    box-shadow: 0 0 0 2px transparent;\n    margin-bottom: 14px;\n}\n\n/* 4.9 Hacks */\n.safariBorderRadiusOverflowFix() {\n    // https://stackoverflow.com/questions/49066011/overflow-hidden-with-border-radius-not-working-on-safari\n    -webkit-mask-image: -webkit-radial-gradient(white, black);\n}\n\n.forceGpuRendering() {\n    // https://web.dev/animations-guide/#force\n    transform: translateZ(0);\n}\n\n/* 5. Presentational */\n@locales: en_us, fr_fr, de_de, es_es, es_mx, it_it, pt_br, pl_pl, ru_ru, ja_jp,\n    ko_kr, zh_tw, zh_hans;\n\n.placeholder(@rules) {\n    &::-webkit-input-placeholder {\n        @rules();\n    }\n    &:-moz-placeholder {\n        @rules();\n    }\n    &::-moz-placeholder {\n        @rules();\n    }\n    &:-ms-input-placeholder {\n        @rules();\n    }\n}\n\n.bgImg() {\n    background-size: cover;\n    background-position: center center;\n    background-repeat: no-repeat;\n}\n\n.themeDark() {\n    color: #e8e8e8;\n    --tag-color: #e8e8e8;\n}\n\n.outbound() {\n    content: '';\n    display: inline-block;\n    background-size: 100%;\n    background-repeat: no-repeat;\n    background-position: 0% 50%;\n    vertical-align: baseline;\n    margin-left: var(--grid-gap-static-xs);\n    width: 1rem;\n    height: 1rem;\n    background-image: data-uri('../img/outbound.svg');\n}\n\n.blurryBg() {\n    transition: filter 0.8s;\n    filter: blur(var(--blur-because-in-bg, 0px));\n}\n\n.fancyLink() {\n    position: relative;\n    background: transparent;\n    padding: 0;\n    z-index: 1;\n    @media (min-width: @screen-sm) {\n        transition: all 0.2s ease;\n        &:before {\n            content: '';\n            display: block;\n            position: absolute;\n            bottom: 0;\n            left: -0.1rem;\n            width: calc(100% + 0.2rem);\n            height: 2px;\n            background: var(--body-color);\n            transition: all 0.2s ease;\n            z-index: -1;\n            border-radius: 0.25rem;\n        }\n        &:hover {\n            color: #161616;\n\n            &:before {\n                left: -0.25rem;\n                width: calc(100% + 0.5rem);\n                height: 100%;\n            }\n        }\n    }\n    img {\n        display: block;\n    }\n}\n.stdHover() {\n    transition:\n        color 0.2s ease,\n        opacity 0.2s ease;\n    &:hover {\n        color: var(--standard-color);\n        opacity: 1;\n    }\n}\n.stdIconHover() {\n    &:hover {\n        filter: brightness(0) saturate(100%) invert(76%) sepia(15%)\n            saturate(5173%) hue-rotate(348deg) brightness(105%) contrast(98%);\n    }\n}\n.card() {\n    .handleImageRounding;\n    --image-rounding-dynamic: var(--image-rounding-static-sm);\n    background: var(--card-background-color);\n    overflow: hidden;\n    display: flex;\n    flex-flow: column;\n    transition: transform 0.2s ease;\n    border: 1px solid var(--border-color);\n    .info {\n        .handleGridStyles;\n        --grid-gap-dynamic: var(--grid-gap-static-xs);\n        padding: 2rem 1.5rem;\n        .title {\n            --line-height-h: 1.3;\n            color: var(--color-h);\n        }\n    }\n}\n\n.cardHover() {\n    transition:\n        transform 0.3s cubic-bezier(0, 0, 0.5, 1),\n        box-shadow 0.3s cubic-bezier(0, 0, 0.5, 1);\n    box-shadow: 0px 0px 40px -25px rgba(0, 0, 0, 0);\n\n    &:hover {\n        transform: scale(1.025);\n        box-shadow: 0px 30px 40px -25px rgba(0, 0, 0, 1);\n    }\n}\n\n.cardSecondary() {\n    .card();\n    .info {\n        padding: 1.5rem;\n    }\n    .title {\n        font-size: var(--font-size-3);\n        font-weight: 400;\n    }\n}\n\n.cardTertiary() {\n    .cardSecondary();\n    --image-rounding-dynamic: 0;\n    --card-background-color: transparent;\n    grid-gap: var(--grid-gap-static-sm);\n    overflow: unset;\n    border: none;\n    .info {\n        padding: 0;\n    }\n    .img {\n        .handleImageRounding;\n        --image-rounding-dynamic: var(--image-rounding-static-sm);\n    }\n}\n\n.standardPage() {\n    .maxWidthWithNormalPadding;\n    padding-top: var(--padding-top-bottom);\n    padding-bottom: var(--padding-top-bottom);\n}\n\n.dropdownThing(@defaultDeg: 0deg; @openDeg: 180deg) {\n    position: relative;\n    padding-right: calc(var(--grid-gap-static-xs) + 24px);\n    .dropdownCaret(yellow; @defaultDeg; @openDeg);\n}\n.dropdownCaret(@color; @defaultDeg: 0deg; @openDeg: 180deg) {\n    &:after {\n        display: inline-block;\n        content: '';\n        position: absolute;\n        top: 0;\n        right: 0;\n        @img: '../img/dropdown-@{color}.svg';\n        background-image: data-uri(@img);\n        background-repeat: no-repeat;\n        width: image-width(@img);\n        height: 100%;\n        background-position: center;\n        background-size: 100%;\n        transform: rotate(@defaultDeg);\n        transition: transform 0.3s;\n        .open& {\n            transform: rotate(@openDeg);\n        }\n    }\n}\n\n.sectionHeader() {\n    margin: 0 0 1.5rem;\n    font-size: var(--font-size-5);\n    font-family: var(--font-family-h);\n    font-weight: var(--font-weight-h);\n    --line-height-h: 1.3;\n\n    .xlMin ({\n        font-size: var(--font-size-6);\n    });;\n}\n.sectionHeaderSmall() {\n    .sectionHeader;\n    font-size: var(--font-size-4);\n\n    .xlMin ({\n        font-size: var(--font-size-5);\n    });;\n}\n\n.tag() {\n    color: var(--tag-color, var(--body-color));\n    font-weight: 700;\n    font-size: var(--font-size-2);\n    line-height: 1.6;\n}\n\n.date() {\n    .tag;\n    font-weight: 400;\n    opacity: 0.65;\n}\n.animationFadeInUp() {\n    :global {\n        animation: globalFadeInUp 0.75s;\n        animation-play-state: paused;\n    }\n}\n.animationPaused() {\n    animation-play-state: paused;\n}\n.animationRunning() {\n    animation-play-state: running;\n}\n\n.button() {\n    font-weight: 700;\n    align-self: center;\n    display: inline-block;\n    text-transform: uppercase;\n    background: transparent;\n    border: 1px solid var(--color-h);\n    padding: 1rem 3rem;\n    color: inherit;\n    cursor: pointer;\n    border-radius: 0.25rem;\n    color: var(--color-h);\n    line-height: 100%;\n    transition: all 0.2s ease;\n    &:focus,\n    &:hover {\n        background: var(--standard-color);\n        border-color: var(--standard-color);\n        color: #161616;\n    }\n    &.secondary {\n        .fancyLink;\n        outline: none;\n        border: none;\n        text-transform: none;\n        font-weight: 400;\n        line-height: unset;\n        .smMin ({\n            &:before {\n                background: var(--standard-color);\n                height:4px;\n            }\n            &:focus,\n            &:hover {\n                &:before {\n                    left: -0.5rem;\n                    width: calc(100% + 1rem);\n                    height: 100%;\n                }\n            }\n         });;\n    }\n    &[disabled] {\n        opacity: 0.5;\n    }\n}\n\n.expandToEdges() {\n    margin-top: calc(var(--padding-top-bottom) * -1);\n    margin-left: calc(var(--padding-sides) * -1);\n    width: 100vw;\n    width: calc(100% + calc(var(--padding-sides) * 2));\n}\n\n.shadow(@boxShadow: 0 10px 30px rgba(0, 0, 0, 0.5)) {\n    // border: 1px solid rgba(0, 0, 0, 0.15);\n    box-shadow: @boxShadow;\n}\n.shadowTop() {\n    box-shadow: -3px -3px 6px 0 rgba(0, 0, 0, 0.2);\n}\n\n.aspect-ratio(@width, @height, @selector: div, @pre: ~'') {\n    @supports not (aspect-ratio: @width / @height) {\n        position: relative;\n        &:before {\n            display: block;\n            content: '';\n            width: 100%;\n            padding-top: calc((@height / @width) * 100%);\n        }\n        > @{pre}@{selector} {\n            position: absolute;\n            top: 0;\n            left: 0;\n            right: 0;\n            bottom: 0;\n            width: 100% !important;\n            height: 100% !important;\n        }\n    }\n\n    @supports (aspect-ratio: @width / @height) {\n        @{pre}@{selector} {\n            aspect-ratio: @width / @height !important;\n            width: 100% !important;\n            height: auto !important;\n        }\n    }\n}\n.unset-aspect-ratio(@selector, @pre: ~'') {\n    @supports not (aspect-ratio: 1/1) {\n        position: unset;\n        &:before {\n            display: none;\n        }\n        > @{pre}@{selector} {\n            position: unset;\n            width: 100% !important;\n            height: unset !important;\n        }\n    }\n\n    @supports (aspect-ratio: 1/1) {\n        @{pre}@{selector} {\n            aspect-ratio: unset !important;\n        }\n    }\n}\n\n.rockstarTypography() {\n    --font-family-std: NeueHelveticaPaneuropean, sans-serif;\n    --leter-spacing-std: 0;\n\n    font-size: var(--font-size-2);\n    font-family: var(--font-family-std);\n    letter-spacing: var(--leter-spacing-std);\n\n    button {\n        letter-spacing: var(--leter-spacing-std);\n    }\n}\n\n.setNodeFontSizing() {\n    // TODO audit this. .5rem is very small.\n    --font-size-1: 0.75rem;\n\n    --font-size-2: 0.75rem;\n    --font-size-3: 1rem;\n    --font-size-4: 1.25rem;\n    --font-size-5: 1.5rem;\n    --font-size-6: 2rem;\n    --font-size-7: 2.5rem;\n    --font-size-8: 3rem;\n    --font-size-9: 4rem;\n    --font-size-10: 5rem;\n}\n\n.setRootFontSizing() {\n    .sm({--root-font-size: 16;});\n    .md({--root-font-size: 18;});\n    .lg({--root-font-size: 20;});\n    .xl({--root-font-size: 22;});\n}\n\n.button-text () {\n    font-size: var(--font-size-4);\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-sm);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-h);\n    text-transform: uppercase;\n}\n\n.button-text-sm () {\n    .button-text;\n    font-size: var(--font-size-3);\n}\n\n.button-text-md () {\n    .button-text;\n    font-size: var(--font-size-4);\n    padding: 0 var(--padding-md);\n}\n\n.button-text-lg () {\n    .button-text;\n    font-size: var(--font-size-5);\n    padding: 0 var(--padding-lg);\n}\n\n.button-text-xl () {\n    .button-text;\n    font-size: var(--font-size-7);\n    padding: 0 var(--padding-xl);\n}\n\n.cta-button() {\n    @import '../less/gen9-vars';\n\n    --button-text-color-hover: var(--white-100);\n\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: center;\n    gap: var(--grid-gap-xs, 0.5rem);\n\n    background: var(\n        --button-background-color,\n        var(--black-65, hsla(0, 0%, 7%, 0.65))\n    );\n    border: 1px solid var(--white-100, #fff);\n    border-radius: var(--border-radius-sm, 4px);\n    color: var(--button-text-color, var(--white-100));\n    cursor: pointer;\n    padding: 0 var(--padding-sm);\n\n    width: 100%;\n    height: var(--button-height-3, 3rem);\n\n    transition: all 0.3s ease-in-out;\n\n    &[data-brand='reddeadredemption'],\n    [data-brand='reddeadredemption'] & {\n        --accent-color: #cc0000;\n        --font-family-h: RDRUltra;\n\n        :lang(pl_pl) {\n            --font-family-h: RDRUltra, NeueHelveticaPaneuropean;\n        }\n    }\n\n    &[data-brand='bully'],\n    [data-brand='bully'] & {\n        --accent-color: #f8ad00;\n        --font-family-h: HelveticaNowDisplayBold;\n        --button-background-color: var(--white-100);\n        --button-background-color-hover: var(--accent-color);\n        --button-text-color: var(--black-100);\n        --button-text-color-hover: var(--black-100);\n\n        backdrop-filter: blur(25px);\n        padding: 0 var(--padding-md, 32px);\n    }\n\n    img {\n        height: 1rem;\n        width: auto;\n    }\n\n    .label {\n        .button-text();\n        display: flex;\n        flex-shrink: 0;\n    }\n\n    &.primary {\n        color: var(--black-100);\n        background-color: var(--white-100);\n    }\n\n    &:hover {\n        border-color: var(--accent-color, var(--btn-active-color));\n        background-color: var(--accent-color, var(--btn-active-color));\n        color: var(--button-text-color-hover, var(--btn-active-color));\n\n        &.primary {\n            color: var(--button-text-color-hover, var(--white-100));\n        }\n    }\n\n    @media (min-width: 1280px) {\n        padding: 0 var(--padding-md);\n    }\n\n    @media (min-width: 768px) and (max-width: 1539px) {\n        height: 2.5rem;\n\n        img {\n            height: 1rem;\n        }\n\n        .label {\n            .button-text-sm();\n        }\n    }\n}\n"],
        sourceRoot: ""
      }]), o.locals = {
        button: "rockstargames-sites-gta-gen9bc25ec64410308d56e4dc097e81fb129",
        secondary: "rockstargames-sites-gta-gen9a3e6439dcaa4870840298d683db4831c"
      };
      const s = o
    },
    50828: n => {
      var e = {
        kind: "Document",
        definitions: [{
          kind: "OperationDefinition",
          operation: "query",
          name: {
            kind: "Name",
            value: "UserGetVote"
          },
          variableDefinitions: [{
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "foreignId"
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
                value: "foreignType"
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
                value: "userGetVote"
              },
              arguments: [{
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "foreign_id"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "foreignId"
                  }
                }
              }, {
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "foreign_type"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "foreignType"
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
                    value: "vote"
                  },
                  arguments: [],
                  directives: []
                }]
              }
            }]
          }
        }, {
          kind: "OperationDefinition",
          operation: "mutation",
          name: {
            kind: "Name",
            value: "UserCastVote"
          },
          variableDefinitions: [{
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "foreignId"
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
                value: "foreignType"
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
                value: "vote"
              }
            },
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "Boolean"
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
                value: "userCastVote"
              },
              arguments: [{
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "foreign_id"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "foreignId"
                  }
                }
              }, {
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "foreign_type"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "foreignType"
                  }
                }
              }, {
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "vote"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "vote"
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
                    value: "vote"
                  },
                  arguments: [],
                  directives: []
                }]
              }
            }]
          }
        }],
        loc: {
          start: 0,
          end: 386
        }
      };

      function a(n, e) {
        if ("FragmentSpread" === n.kind) e.add(n.name.value);
        else if ("VariableDefinition" === n.kind) {
          var t = n.type;
          "NamedType" === t.kind && e.add(t.name.value)
        }
        n.selectionSet && n.selectionSet.selections.forEach((function(n) {
          a(n, e)
        })), n.variableDefinitions && n.variableDefinitions.forEach((function(n) {
          a(n, e)
        })), n.definitions && n.definitions.forEach((function(n) {
          a(n, e)
        }))
      }
      e.loc.source = {
        body: "query UserGetVote($foreignId: String!, $foreignType: String!) {\n    userGetVote(foreign_id: $foreignId, foreign_type: $foreignType) {\n        vote\n    }\n}\n\nmutation UserCastVote(\n    $foreignId: String!\n    $foreignType: String!\n    $vote: Boolean!\n) {\n    userCastVote(\n        foreign_id: $foreignId\n        foreign_type: $foreignType\n        vote: $vote\n    ) {\n        vote\n    }\n}\n",
        name: "GraphQL request",
        locationOffset: {
          line: 1,
          column: 1
        }
      };
      var t = {};

      function r(n, e) {
        for (var a = 0; a < n.definitions.length; a++) {
          var t = n.definitions[a];
          if (t.name && t.name.value == e) return t
        }
      }

      function i(n, e) {
        var a = {
          kind: n.kind,
          definitions: [r(n, e)]
        };
        n.hasOwnProperty("loc") && (a.loc = n.loc);
        var i = t[e] || new Set,
          o = new Set,
          s = new Set;
        for (i.forEach((function(n) {
            s.add(n)
          })); s.size > 0;) {
          var d = s;
          s = new Set, d.forEach((function(n) {
            o.has(n) || (o.add(n), (t[n] || new Set).forEach((function(n) {
              s.add(n)
            })))
          }))
        }
        return o.forEach((function(e) {
          var t = r(n, e);
          t && a.definitions.push(t)
        })), a
      }
      e.definitions.forEach((function(n) {
        if (n.name) {
          var e = new Set;
          a(n, e), t[n.name.value] = e
        }
      })), n.exports = e, n.exports.UserGetVote = i(e, "UserGetVote"), n.exports.UserCastVote = i(e, "UserCastVote")
    },
    95520: n => {
      var e = {
        kind: "Document",
        definitions: [{
          kind: "OperationDefinition",
          operation: "query",
          name: {
            kind: "Name",
            value: "GameData"
          },
          variableDefinitions: [{
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "titleSlug"
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
                value: "withMetaTitle"
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
                value: "metaUrl"
              }
            },
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String"
              }
            },
            defaultValue: {
              kind: "StringValue",
              value: "/",
              block: !1
            },
            directives: []
          }],
          directives: [],
          selectionSet: {
            kind: "SelectionSet",
            selections: [{
              kind: "Field",
              alias: {
                kind: "Name",
                value: "meta"
              },
              name: {
                kind: "Name",
                value: "metaUrl"
              },
              arguments: [{
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
                  value: "domain"
                },
                value: {
                  kind: "StringValue",
                  value: "www",
                  block: !1
                }
              }, {
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "url"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "metaUrl"
                  }
                }
              }],
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
                      value: "withMetaTitle"
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
                    value: "title"
                  },
                  arguments: [],
                  directives: []
                }]
              }
            }, {
              kind: "Field",
              name: {
                kind: "Name",
                value: "game"
              },
              arguments: [{
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "titleSlug"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "titleSlug"
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
                    value: "ratingDescriptors"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "ratingFooter"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "ratingImg"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "ratingUrl"
                  },
                  arguments: [],
                  directives: []
                }]
              }
            }]
          }
        }],
        loc: {
          start: 0,
          end: 394
        }
      };

      function a(n, e) {
        if ("FragmentSpread" === n.kind) e.add(n.name.value);
        else if ("VariableDefinition" === n.kind) {
          var t = n.type;
          "NamedType" === t.kind && e.add(t.name.value)
        }
        n.selectionSet && n.selectionSet.selections.forEach((function(n) {
          a(n, e)
        })), n.variableDefinitions && n.variableDefinitions.forEach((function(n) {
          a(n, e)
        })), n.definitions && n.definitions.forEach((function(n) {
          a(n, e)
        }))
      }
      e.loc.source = {
        body: 'query GameData(\n    $titleSlug: String!\n    $locale: String!\n    $withMetaTitle: Boolean = false\n    $metaUrl: String = "/"\n) {\n    meta: metaUrl(locale: $locale, domain: "www", url: $metaUrl)\n        @include(if: $withMetaTitle) {\n        title\n    }\n    game(titleSlug: $titleSlug, locale: $locale) {\n        ratingDescriptors\n        ratingFooter\n        ratingImg\n        ratingUrl\n    }\n}\n',
        name: "GraphQL request",
        locationOffset: {
          line: 1,
          column: 1
        }
      };
      var t = {};

      function r(n, e) {
        for (var a = 0; a < n.definitions.length; a++) {
          var t = n.definitions[a];
          if (t.name && t.name.value == e) return t
        }
      }
      e.definitions.forEach((function(n) {
        if (n.name) {
          var e = new Set;
          a(n, e), t[n.name.value] = e
        }
      })), n.exports = e, n.exports.GameData = function(n, e) {
        var a = {
          kind: n.kind,
          definitions: [r(n, e)]
        };
        n.hasOwnProperty("loc") && (a.loc = n.loc);
        var i = t[e] || new Set,
          o = new Set,
          s = new Set;
        for (i.forEach((function(n) {
            s.add(n)
          })); s.size > 0;) {
          var d = s;
          s = new Set, d.forEach((function(n) {
            o.has(n) || (o.add(n), (t[n] || new Set).forEach((function(n) {
              s.add(n)
            })))
          }))
        }
        return o.forEach((function(e) {
          var t = r(n, e);
          t && a.definitions.push(t)
        })), a
      }(e, "GameData")
    },
    36672: (n, e, a) => {
      var t = {
        "./cero_a.png": 97558,
        "./cero_b.svg": 29362,
        "./cero_c.svg": 67299,
        "./cero_d.svg": 9020,
        "./cero_rp.png": 17065,
        "./cero_z.svg": 46554,
        "./djctq_10.svg": 51392,
        "./djctq_12.svg": 8674,
        "./djctq_14.svg": 89836,
        "./djctq_16.svg": 54222,
        "./djctq_18.svg": 58648,
        "./djctq_er.svg": 8054,
        "./djctq_l.svg": 23781,
        "./esrb_ao.svg": 89235,
        "./esrb_e.svg": 24256,
        "./esrb_e10plus.svg": 65315,
        "./esrb_m.svg": 87256,
        "./esrb_m_ao.svg": 10419,
        "./esrb_rp.svg": 89069,
        "./esrb_rplm17.svg": 95088,
        "./esrb_t.svg": 18177,
        "./fpb_13.svg": 86595,
        "./fpb_16.svg": 28414,
        "./fpb_18.svg": 81864,
        "./fpb_pg.svg": 77404,
        "./grac_12.svg": 8711,
        "./grac_15.svg": 6312,
        "./grac_18.svg": 48157,
        "./grac_19.svg": 19612,
        "./grac_a.svg": 89303,
        "./gsrr_0.svg": 67443,
        "./gsrr_12.svg": 49980,
        "./gsrr_15.svg": 24611,
        "./gsrr_18.svg": 46537,
        "./gsrr_6.svg": 63117,
        "./nmc_12.svg": 2024,
        "./nmc_16.svg": 50324,
        "./nmc_18.svg": 52466,
        "./nmc_21.svg": 3950,
        "./nmc_3.svg": 9188,
        "./nmc_7.svg": 18712,
        "./oflc_g.svg": 21022,
        "./oflc_m.svg": 22772,
        "./oflc_ma15.svg": 9815,
        "./oflc_pg.svg": 47580,
        "./oflc_r18.svg": 74432,
        "./pegi_12.svg": 15821,
        "./pegi_16.svg": 86929,
        "./pegi_18.svg": 51575,
        "./pegi_3.svg": 27351,
        "./pegi_4.svg": 82424,
        "./pegi_6.svg": 46618,
        "./pegi_7.svg": 40491,
        "./pegi_rp.png": 94293,
        "./rars_0.svg": 36855,
        "./rars_12.svg": 98952,
        "./rars_16.svg": 65044,
        "./rars_18.svg": 72690,
        "./rars_6.svg": 51913,
        "./usk_0.svg": 84406,
        "./usk_12.svg": 26151,
        "./usk_16.svg": 87707,
        "./usk_18.svg": 90717,
        "./usk_6.svg": 2696,
        "./usk_rp.svg": 21228,
        "./vaci_rp.png": 32323
      };

      function r(n) {
        var e = i(n);
        return a(e)
      }

      function i(n) {
        if (!a.o(t, n)) {
          var e = new Error("Cannot find module '" + n + "'");
          throw e.code = "MODULE_NOT_FOUND", e
        }
        return t[n]
      }
      r.keys = function() {
        return Object.keys(t)
      }, r.resolve = i, n.exports = r, r.id = 36672
    },
    8194: (n, e, a) => {
      var t = {
        "./cero_a.png": 97558,
        "./cero_b.svg": 29362,
        "./cero_c.svg": 67299,
        "./cero_d.svg": 9020,
        "./cero_rp.png": 17065,
        "./cero_z.svg": 46554,
        "./djctq_10.svg": 51392,
        "./djctq_12.svg": 8674,
        "./djctq_14.svg": 89836,
        "./djctq_16.svg": 54222,
        "./djctq_18.svg": 58648,
        "./djctq_er.svg": 8054,
        "./djctq_l.svg": 23781,
        "./esrb_ao.svg": 89235,
        "./esrb_e.svg": 24256,
        "./esrb_e10plus.svg": 65315,
        "./esrb_m.svg": 87256,
        "./esrb_m_ao.svg": 10419,
        "./esrb_rp.svg": 89069,
        "./esrb_rplm17.svg": 95088,
        "./esrb_t.svg": 18177,
        "./fpb_13.svg": 86595,
        "./fpb_16.svg": 28414,
        "./fpb_18.svg": 81864,
        "./fpb_pg.svg": 77404,
        "./grac_12.svg": 8711,
        "./grac_15.svg": 6312,
        "./grac_18.svg": 48157,
        "./grac_19.svg": 19612,
        "./grac_a.svg": 89303,
        "./gsrr_0.svg": 67443,
        "./gsrr_12.svg": 49980,
        "./gsrr_15.svg": 24611,
        "./gsrr_18.svg": 46537,
        "./gsrr_6.svg": 63117,
        "./nmc_12.svg": 2024,
        "./nmc_16.svg": 50324,
        "./nmc_18.svg": 52466,
        "./nmc_21.svg": 3950,
        "./nmc_3.svg": 9188,
        "./nmc_7.svg": 18712,
        "./oflc_g.svg": 21022,
        "./oflc_m.svg": 22772,
        "./oflc_ma15.svg": 9815,
        "./oflc_pg.svg": 47580,
        "./oflc_r18.svg": 74432,
        "./pegi_12.svg": 15821,
        "./pegi_16.svg": 86929,
        "./pegi_18.svg": 51575,
        "./pegi_3.svg": 27351,
        "./pegi_4.svg": 82424,
        "./pegi_6.svg": 46618,
        "./pegi_7.svg": 40491,
        "./pegi_rp.png": 94293,
        "./rars_0.svg": 36855,
        "./rars_12.svg": 98952,
        "./rars_16.svg": 65044,
        "./rars_18.svg": 72690,
        "./rars_6.svg": 51913,
        "./usk_0.svg": 84406,
        "./usk_12.svg": 26151,
        "./usk_16.svg": 87707,
        "./usk_18.svg": 90717,
        "./usk_6.svg": 2696,
        "./usk_rp.svg": 21228,
        "./vaci_rp.png": 32323
      };

      function r(n) {
        var e = i(n);
        return a(e)
      }

      function i(n) {
        if (!a.o(t, n)) {
          var e = new Error("Cannot find module '" + n + "'");
          throw e.code = "MODULE_NOT_FOUND", e
        }
        return t[n]
      }
      r.keys = function() {
        return Object.keys(t)
      }, r.resolve = i, n.exports = r, r.id = 8194
    },
    56085: n => {
      "use strict";
      n.exports = "data:application/font-woff;charset=utf-8;base64, d09GRgABAAAAAAZgABAAAAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABGRlRNAAAGRAAAABoAAAAci6qHkUdERUYAAAWgAAAAIwAAACQAYABXR1BPUwAABhQAAAAuAAAANuAY7+xHU1VCAAAFxAAAAFAAAABm2fPczU9TLzIAAAHcAAAASgAAAGBP9V5RY21hcAAAAkQAAACIAAABYt6F0cBjdnQgAAACzAAAAAQAAAAEABEBRGdhc3AAAAWYAAAACAAAAAj//wADZ2x5ZgAAAywAAADMAAAD2MHtryVoZWFkAAABbAAAADAAAAA2E2+eoWhoZWEAAAGcAAAAHwAAACQC9gDzaG10eAAAAigAAAAZAAAArgJkABFsb2NhAAAC0AAAAFoAAABaFQAUGG1heHAAAAG8AAAAHwAAACAAcABAbmFtZQAAA/gAAAE5AAACXvFdBwlwb3N0AAAFNAAAAGIAAACE5s74hXjaY2BkYGAAYpf5Hu/j+W2+MnAzMYDAzaX6QjD6/4//Bxj5GA8AuRwMYGkAPywL13jaY2BkYGA88P8Agx4j+/8fQDYfA1AEBWgDAIB2BOoAeNpjYGRgYNBh4GdgYgABEMnIABJzYNADCQAACWgAsQB42mNgYfzCOIGBlYGB0YcxjYGBwR1Kf2WQZGhhYGBiYGVmgAFGBiQQkOaawtDAoMBQxXjg/wEGPcYDDA4wNUA2CCgwsAAAO4EL6gAAeNpj2M0gyAACqxgGNWBkZ2D4/wMA+xkDdgAAAHjaY2BgYGaAYBkGRgYQiAHyGMF8FgYHIM3DwMHABGQrMOgyWDLEM1T9/w8UBfEMgLzE////P/5//f/V/xv+r4eaAAeMbAxwIUYmIMHEgKYAYjUcsDAwsLKxc3BycfPw8jEQA/gZBASFhEVExcQlJKWkZWTl5BUUlZRVVNXUNTQZBgMAAMR+E+gAEQFEAAAAKgAqACoANAA+AEgAUgBcAGYAcAB6AIQAjgCYAKIArAC2AMAAygDUAN4A6ADyAPwBBgEQARoBJAEuATgBQgFMAVYBYAFqAXQBfgGIAZIBnAGmAbIBzgHsAAB42u2NMQ6CUAyGW568x9AneYYgm4MJbhKFaExIOAVX8ApewSt4Bic4AfeAid3VOBixDxfPYEza5O+Xfi04YADggiUIULCuEJK8VhO4bSvpdnktHI5QCYtdi2sl8ZnXaHlqUrNKzdKcT8cjlq+rwZSvIVczNiezsfnP/uznmfPFBNODM2K7MTQ45YEAZqGP81AmGGcF3iPqOop0r1SPTaTbVkfUe4HXj97wYE+yNwWYxwWu4v1ugWHgo3S1XdZEVqWM7ET0cfnLGxWfkgR42o2PvWrDMBSFj/IHLaF0zKjRgdiVMwScNRAoWUoH78Y2icB/yIY09An6AH2Bdu/UB+yxopYshQiEvnvu0dURgDt8QeC8PDw7Fpji3fEA4z/PEJ6YOB5hKh4dj3EvXhxPqH/SKUY3rJ7srZ4FZnh1PMAtPhwP6fl2PMJMPDgeQ4rY8YT6Gzao0eAEA409DuggmTnFnOcSCiEiLMgxCiTI6Cq5DZUd3Qmp10vO0LaLTd2cjN4fOumlc7lUYbSQcZFkutRG7g6JKZKy0RmdLY680CDnEJ+UMkpFFe1RN7nxdVpXrC4aTtnaurOnYercZg2YVmLN/d/gczfEimrE/fs/bOuq29Zmn8tloORaXgZgGa78yO9/cnXm2BpaGvq25Dv9S4E9+5SIc9PqupJKhYFSSl47+Qcr1mYNAAAAeNptw0cKwkAAAMDZJA8Q7OUJvkLsPfZ6zFVERPy8qHh2YER+3i/BP83vIBLLySsoKimrqKqpa2hp6+jq6RsYGhmbmJqZSy0sraxtbO3sHRydnEMU4uR6yx7JJXveP7WrDycAAAAAAAH//wACeNpjYGRgYOABYhkgZgJCZgZNBkYGLQZtIJsFLMYAAAw3ALgAeNolizEKgDAQBCchRbC2sFER0YD6qVQiBCv/H9ezGI6Z5XBAw8CBK/m5iQQVauVbXLnOrMZv2oLdKFa8Pjuru2hJzGabmOSLzNMzvutpB3N42mNgZGBg4GKQYzBhYMxJLMlj4GBgAYow/P/PAJJhLM6sSoWKfWCAAwDAjgbRAAB42mNgYGBkAIIbCZo5IPrmUn0hGA0AO8EFTQAA"
    },
    63244: n => {
      "use strict";
      n.exports = "data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2724%27 height=%2724%27 fill=%27none%27%3E%3Cpath stroke=%27%23fff%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%272%27 d=%27m6 9 6 6 6-6%27/%3E%3C/svg%3E"
    },
    97558: n => {
      "use strict";
      n.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d51b141250a4851d7ec3673d88dbd20a.png"
    },
    29362: n => {
      "use strict";
      n.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/7ac89f9e00ded04ef4b2dd3eaf3e8734.svg"
    },
    67299: n => {
      "use strict";
      n.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/f44dd7aad9d6c62e40a11f51252f59b8.svg"
    },
    9020: n => {
      "use strict";
      n.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/204116b24cd9e9ab4e71af21b3a96179.svg"
    },
    17065: n => {
      "use strict";
      n.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/676b3908098d8b19f1019ce361af45ec.png"
    },
    46554: n => {
      "use strict";
      n.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/03ab76c58ed61a83bf035c923dbe32b2.svg"
    },
    51392: n => {
      "use strict";
      n.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/f468aef6f0b5399d5c0f6b2e95b60cc5.svg"
    },
    8674: n => {
      "use strict";
      n.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/0b31c79d361cfd92e1a405dbbf4890bd.svg"
    },
    89836: n => {
      "use strict";
      n.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/3689ac97526f00a4537e1b38ec82a074.svg"
    },
    54222: n => {
      "use strict";
      n.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/07f9f9e93ec430813e74cbce545962c4.svg"
    },
    58648: n => {
      "use strict";
      n.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/608f591c35aff9d47091dd7fe9a8fb13.svg"
    },
    8054: n => {
      "use strict";
      n.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/198ced82807c854e92e84e23f7434c91.svg"
    },
    23781: n => {
      "use strict";
      n.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/edf01daa4f0392081705c17a74d8a146.svg"
    },
    89235: n => {
      "use strict";
      n.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c4dd58f5b5b97796b6c6177de364dd36.svg"
    },
    24256: n => {
      "use strict";
      n.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/201de0eb81b09ea93aa1aef2a6824b7c.svg"
    },
    65315: n => {
      "use strict";
      n.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/534078f6307f97ce0d70e0bb885f9d77.svg"
    },
    87256: n => {
      "use strict";
      n.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/f4b0d9409df1e8a420b2118e4e601263.svg"
    },
    10419: n => {
      "use strict";
      n.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/092865e0ddae5190dc3c0284ee3c21bd.svg"
    },
    89069: n => {
      "use strict";
      n.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/80dd50a2fa9aae3b5d6effdb2d9c2661.svg"
    },
    95088: n => {
      "use strict";
      n.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5d471eef7883043fdabe1b3ed17a72b3.svg"
    },
    18177: n => {
      "use strict";
      n.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/35cf853d7882b090b56837bd08127da1.svg"
    },
    86595: n => {
      "use strict";
      n.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/72e8749316b4d1f52925b95e075e9c24.svg"
    },
    28414: n => {
      "use strict";
      n.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c2acdad576048f5c48b2ee6a2a2a90a3.svg"
    },
    81864: n => {
      "use strict";
      n.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5f52c5ab315a1ff90360e06372c3f2c0.svg"
    },
    77404: n => {
      "use strict";
      n.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d1f569db6c94b4f81417f62e91759082.svg"
    },
    8711: n => {
      "use strict";
      n.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/fe262661c6667d97f441e045067f4a0f.svg"
    },
    6312: n => {
      "use strict";
      n.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1b457cab77cb82e1c05ad12628414576.svg"
    },
    48157: n => {
      "use strict";
      n.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1a3660d76f39527a79f8a49bb27a74be.svg"
    },
    19612: n => {
      "use strict";
      n.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1a3660d76f39527a79f8a49bb27a74be.svg"
    },
    89303: n => {
      "use strict";
      n.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/515f2884036e870905ae53f156692721.svg"
    },
    67443: n => {
      "use strict";
      n.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a3931a545299e205758648bce29e5c49.svg"
    },
    49980: n => {
      "use strict";
      n.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/05e9f2f27883d4cbabb3d4e4e16c9c74.svg"
    },
    24611: n => {
      "use strict";
      n.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5f2fc4de3decfa0ac007f6cbd91658a9.svg"
    },
    46537: n => {
      "use strict";
      n.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/cd57122be57f5e3a9dc4d0a0f2503fb1.svg"
    },
    63117: n => {
      "use strict";
      n.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/2d910a48fc0914f58ca80dc0732a7677.svg"
    },
    2024: n => {
      "use strict";
      n.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/6e99540df7fd07d75b08a5fbc02d4815.svg"
    },
    50324: n => {
      "use strict";
      n.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/937b7a0c5a128c39addf2adeba2d2f23.svg"
    },
    52466: n => {
      "use strict";
      n.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/46a27d8d16855dcc2a217f48243c6d82.svg"
    },
    3950: n => {
      "use strict";
      n.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/e5792c85d5a88a0b7c75af087e4c6ee2.svg"
    },
    9188: n => {
      "use strict";
      n.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/4da522682784ded3799c5a6f9f8c213a.svg"
    },
    18712: n => {
      "use strict";
      n.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/29ea20c333709a952c2eb3a2591d435d.svg"
    },
    21022: n => {
      "use strict";
      n.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/7c66fbb7c204e32da80ccb1693d15e00.svg"
    },
    22772: n => {
      "use strict";
      n.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/954d63889440be17e1ebef30b7026369.svg"
    },
    9815: n => {
      "use strict";
      n.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/2eb8777f38cbd4d721261ad736c1f2e7.svg"
    },
    47580: n => {
      "use strict";
      n.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/6079496697e537802f8a0eb5a83d2e94.svg"
    },
    74432: n => {
      "use strict";
      n.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a2a19fbf81b03db0fda00839496a3ce5.svg"
    },
    15821: n => {
      "use strict";
      n.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/129ef1c1a15ffc7afb86ce282e48decb.svg"
    },
    86929: n => {
      "use strict";
      n.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a2a5d9ca87a5bd107da9bb33d3d718e8.svg"
    },
    51575: n => {
      "use strict";
      n.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/dabd13175cc0894dcb3f942d3d2dab86.svg"
    },
    27351: n => {
      "use strict";
      n.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/64d281825da1c782681bcc096d693e32.svg"
    },
    82424: n => {
      "use strict";
      n.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/b43dddd485139df895fc531e79c75e68.svg"
    },
    46618: n => {
      "use strict";
      n.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c01f38f1051e751caa633d533202873c.svg"
    },
    40491: n => {
      "use strict";
      n.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/27a26f477c8db29df4ceec4517c7f42b.svg"
    },
    94293: n => {
      "use strict";
      n.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a380d3ce353544a356e8ce48f8586804.png"
    },
    36855: n => {
      "use strict";
      n.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/bba2f70e014e82b336a9f80625053089.svg"
    },
    98952: n => {
      "use strict";
      n.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/85250e8a0e5a5a1209f214423f6ebe43.svg"
    },
    65044: n => {
      "use strict";
      n.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/f1a94d5705ae3ddeb4c8c2fde79bfe81.svg"
    },
    72690: n => {
      "use strict";
      n.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a825976dddc59e33b3ce146ad6cd3d20.svg"
    },
    51913: n => {
      "use strict";
      n.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/01b0cd4466759aa349ac4036594ab6ae.svg"
    },
    84406: n => {
      "use strict";
      n.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/9c699f3b76c15209c8059f02507e11b5.svg"
    },
    26151: n => {
      "use strict";
      n.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/b48e041f1412ff62c8a92dc424b59aa5.svg"
    },
    87707: n => {
      "use strict";
      n.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/07362df5a2671c08b232a97d503cd6bf.svg"
    },
    90717: n => {
      "use strict";
      n.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c3fe2a9610ca8b42807dfa99073d68b3.svg"
    },
    2696: n => {
      "use strict";
      n.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/056d3bdf1f300bcb7efa4aebcfc5224d.svg"
    },
    21228: n => {
      "use strict";
      n.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/278e84e5a41407499c43a30f545da3e8.svg"
    },
    32323: n => {
      "use strict";
      n.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/703a546f7a5109c1e2af87a212135aad.png"
    },
    36606: n => {
      "use strict";
      n.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/fonts/59de0d7e9b43e1cc0cab80a770e9efe6.woff"
    },
    57390: n => {
      "use strict";
      n.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/fonts/ab64825965d1d9e6e8721c549ca9b65a.woff"
    },
    50228: n => {
      "use strict";
      n.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/fonts/95ca59e1c2cf140daa8b024c6a139e4c.woff"
    },
    79539: n => {
      "use strict";
      n.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/fonts/ee9fe642d516bd426445b83dfe08cd39.woff"
    },
    61494: n => {
      "use strict";
      n.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/fonts/ef44f43ca79bb1aee29fbc2d457e7dee.woff"
    },
    304: n => {
      "use strict";
      n.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/fonts/aa2a7321d65db9f2de3cafabeb37e354.woff"
    },
    28168: n => {
      "use strict";
      n.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/fonts/a8da93d3b93aa6f5b995c8fca0a49d56.woff"
    },
    21130: n => {
      "use strict";
      n.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/fonts/bc4df074e2a0a7a841c564dba3e08fe8.woff"
    },
    51594: n => {
      "use strict";
      n.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/fonts/63234fb79c05a628350bb714e8b70f1d.woff"
    },
    69400: n => {
      "use strict";
      n.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/fonts/202c95f3c4658c54223b0f4166bd3825.woff"
    },
    44840: n => {
      "use strict";
      n.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/fonts/a5e4e77906b6b4b3cbf21f4c26271861.woff"
    },
    93803: n => {
      "use strict";
      n.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/fonts/db765ccb047ec8429212c1a913914694.woff"
    },
    53037: n => {
      "use strict";
      n.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/fonts/e4be9aed1e8beccc21ffb995f0a89da0.woff"
    },
    28255: n => {
      "use strict";
      n.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/fonts/bf1c99f9a5316689221de8a3540abf38.woff"
    },
    73075: n => {
      "use strict";
      n.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/fonts/b2ebeec4803f0df250c5e20b396162b4.woff"
    },
    16183: n => {
      "use strict";
      n.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/fonts/c02857e0585008d14d216e4a43b8c746.woff"
    },
    94904: n => {
      "use strict";
      n.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/fonts/a531a5aaeac0ada2930fd697606d7e9e.woff"
    },
    49027: n => {
      "use strict";
      n.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/fonts/0c60fa85dfc771ab4d15d175246263b5.woff"
    },
    83493: n => {
      "use strict";
      n.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/fonts/acbb38cbe0ae2cdfc5f72a96cd32fe86.woff"
    },
    31431: n => {
      "use strict";
      n.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/fonts/c70a0570c2d0687a208d5612623a9fdc.woff"
    },
    40792: n => {
      "use strict";
      n.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/fonts/f09f2d938e708e14f4211b5c41b1ae2c.woff"
    },
    313: n => {
      "use strict";
      n.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/fonts/099c158b47220bfa6b52c3aaf2ff3753.woff"
    },
    98268: n => {
      "use strict";
      n.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/cff5397b33c598c8fb52d0c4bd6a091d.svg"
    },
    76372: n => {
      "use strict";
      n.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/27d867437d55e2159b98e17b4e86c5ce.svg"
    },
    5071: n => {
      "use strict";
      n.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/0fd7e84c37eba6cd9039b35fb546c07e.svg"
    }
  }
]);