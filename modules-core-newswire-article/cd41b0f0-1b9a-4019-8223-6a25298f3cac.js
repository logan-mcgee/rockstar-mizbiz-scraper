! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "cd41b0f0-1b9a-4019-8223-6a25298f3cac", e._sentryDebugIdIdentifier = "sentry-dbid-cd41b0f0-1b9a-4019-8223-6a25298f3cac")
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
  [1357], {
    61651: (e, a, i) => {
      "use strict";
      i.d(a, {
        A: () => s
      });
      var t = i(71403),
        n = i(40207);
      const r = (0, t.forwardRef)(((e, a) => {
        const {
          threshold: i,
          callback: r,
          children: s,
          requireUser: o
        } = e, {
          track: c
        } = (0, n.useGtmTrack)(o), [l, d] = (0, t.useState)(a?.current);
        return (0, t.useEffect)((() => {
          a?.current && d(a.current)
        }), [a]), ((e, a, i) => {
          const [n, r] = (0, t.useState)({
            scrollDepths: e,
            scrollY: 0
          }), {
            scrollDepths: s,
            scrollY: o
          } = n;
          (0, t.useEffect)((() => {
            "undefined" != typeof window && 0 !== window.pageYOffset && r((e => ({
              ...e,
              scrollY: window.pageYOffset
            })))
          }), []), (0, t.useEffect)((() => {
            r({
              scrollDepths: e,
              scrollY: 0
            })
          }), [window.location.pathname]);
          const c = (0, t.useCallback)((() => {
            const e = document.documentElement,
              t = document.body,
              o = i?.scrollTop || e.scrollTop || t.scrollTop,
              l = i?.scrollHeight || e.scrollHeight || t.scrollHeight,
              {
                clientHeight: d
              } = e,
              m = o / (l - d) * 100;
            if (s) {
              const e = Math.min(...s, l);
              if (m >= e) {
                const t = s.filter((a => a !== e));
                0 === t.length && (i ?? window).removeEventListener("scroll", c), a && a({
                  scrollY: e,
                  scrollPercent: m,
                  remainingDepths: t
                }), r({
                  scrollY: e,
                  scrollDepths: t
                })
              }
            } else r({
              ...n,
              scrollY: m
            })
          }), [s, i, a]);
          (0, t.useEffect)((() => {
            if ("undefined" == typeof window) return;
            const e = i ?? window;
            return e.addEventListener("scroll", c), () => e.removeEventListener("scroll", c)
          }), [c])
        })(i, (e => {
          let {
            scrollY: a
          } = e;
          c({
            event: "page_scroll",
            scroll_depth: a
          }), "function" == typeof r && r(a)
        }), l), s
      }));
      r.displayName = "ScrollTracker";
      const s = r
    },
    7607: (e, a, i) => {
      "use strict";
      i.d(a, {
        A: () => l
      });
      var t = i(56309),
        n = i(20066);
      const r = (0, t.defineMessages)({
          components_track_list_title: {
            id: "components_track_list_title",
            defaultMessage: "Tracklist"
          }
        }),
        s = {
          bodySmall: "rockstargames-modules-core-newswire-articlec048aacaedc7fb642f38c7f163c193e3"
        };
      var o = i(46632);
      const c = e => {
          let {
            track: a,
            artist: i
          } = e;
          return (0, o.jsxs)("div", {
            className: s.track,
            children: [(0, o.jsx)("p", {
              children: a
            }), (0, o.jsx)("p", {
              className: s.bodySmall,
              children: i
            })]
          })
        },
        l = (0, t.withIntl)((e => {
          let {
            content: a = []
          } = e;
          return (0, o.jsxs)("div", {
            className: "rockstargames-modules-core-newswire-articlee6c19f2cdd68a4352e248a8324383aa2",
            children: [(0, o.jsx)("h4", {
              className: "rockstargames-modules-core-newswire-articlecd3895fbae93ba04f1401487f6e6eddf",
              children: (0, o.jsx)(t.FormattedMessage, {
                ...r.components_track_list_title
              })
            }), (0, o.jsx)("div", {
              className: "rockstargames-modules-core-newswire-articleef0cde8b15ded961605237d0e8328a9b",
              children: (0, o.jsx)("div", {
                className: "rockstargames-modules-core-newswire-articlebdd54186db17d27b3daebc4b9d58e09a",
                children: a?.map((e => (0, o.jsx)(c, {
                  track: e.track,
                  artist: e.artist
                }, e.key)))
              })
            })]
          })
        }), n)
    },
    55430: (e, a, i) => {
      "use strict";
      i.d(a, {
        A: () => v
      });
      var t = i(71403),
        n = i(300),
        r = i(42756),
        s = i(40207),
        o = i(58407),
        c = i(59781),
        l = i(22778),
        d = i(46632);
      const m = e => {
          let {
            className: a
          } = e;
          return (0, d.jsxs)("svg", {
            className: a,
            width: "16",
            height: "17",
            viewBox: "0 0 16 17",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [(0, d.jsx)("path", {
              d: "M3.33203 8.5H12.6654",
              stroke: "white",
              strokeWidth: "1.33",
              strokeLinecap: "round",
              strokeLinejoin: "round"
            }), (0, d.jsx)("path", {
              d: "M8 3.83331L12.6667 8.49998L8 13.1666",
              stroke: "white",
              strokeWidth: "1.33",
              strokeLinecap: "round",
              strokeLinejoin: "round"
            })]
          })
        },
        u = {
          pillBtn: "rockstargames-modules-core-newswire-articlee3158363419b66e5afa2264e4928890c",
          selected: "rockstargames-modules-core-newswire-articlea9649249223f164eff11174ffc72616b",
          calloutContainer: "rockstargames-modules-core-newswire-articlee6bd244761fdf3ebe3888539d9942921",
          calloutSection: "rockstargames-modules-core-newswire-articleb1b8c93299158ef7d0f9eb04e14a7a64",
          calloutHeaders: "rockstargames-modules-core-newswire-articlec81810436a5b57307c41f4d7a704b2f7",
          calloutHeaderMargins: "rockstargames-modules-core-newswire-articleb4e1f72dfa9b38f23017e5f8ef48b9cb",
          calloutHeader: "rockstargames-modules-core-newswire-articleb7964754215256201dd703aedca18b6f",
          calloutSubheader: "rockstargames-modules-core-newswire-articleac660fa7995007ed875e03a257e447d7",
          calloutVoteForm: "rockstargames-modules-core-newswire-articlebee0795a36dd5adf822e1e50a7260f3d",
          voteButton: "rockstargames-modules-core-newswire-articleb1baa545566a61b791b696c9ebf560ad",
          upvote: "rockstargames-modules-core-newswire-articleb9c17ddd3e1052acb5097909ae2b07a1",
          downvote: "rockstargames-modules-core-newswire-articlef26b53e66e552183743465cce6a8d3a8",
          active: "rockstargames-modules-core-newswire-articled38a1764483a36e8a1509aee5b88ec31",
          calloutButton: "rockstargames-modules-core-newswire-articleb7eb76afce3c6e686be44c356837b627",
          calloutLink: "rockstargames-modules-core-newswire-articleaefe6c5a233047c943a864cd56a7de2d",
          calloutLinkIcon: "rockstargames-modules-core-newswire-articlea74bf6baa632ad9b5f87efd2043cfed5",
          actionBlock: "rockstargames-modules-core-newswire-articlecc491ddd715196ecd6ef54017ff05ec0",
          actionFooter: "rockstargames-modules-core-newswire-articledb26fed58ce50f4affc114670885721a"
        },
        f = e => {
          let {
            foreign_id: a,
            foreign_type: i
          } = e;
          const {
            track: n
          } = (0, s.useGtmTrack)(), {
            refetch: r
          } = (0, o.useQuery)(c.UserGetVote, {
            skip: !0
          }), [l] = (0, o.useMutation)(c.UserCastVote), [m, f] = (0, t.useState)(null), k = (0, t.useCallback)((e => {
            (async () => {
              if (e === m && null !== m) f(null);
              else {
                f(e), n({
                  event: "cta_" + (e ? "like" : "dislike"),
                  text: `${i} ${a}`
                });
                const t = {
                  foreignId: a,
                  foreignType: i,
                  vote: e
                };
                await l({
                  variables: t
                })
              }
            })()
          }), [a, i, m]);
          return (0, t.useEffect)((() => {
            a && i && (async () => {
              const e = await r({
                foreignId: a,
                foreignType: i
              });
              f(e?.data?.userGetVote?.vote ?? null)
            })()
          }), [a, i]), (0, d.jsxs)("div", {
            className: u.calloutVoteForm,
            children: [(0, d.jsx)("button", {
              "aria-label": "upvote",
              className: [u.upvote, u.voteButton, m ? u.active : ""].join(" "),
              name: "upvote",
              onClick: () => k(!0),
              type: "button"
            }), (0, d.jsx)("button", {
              "aria-label": "downvote",
              className: [u.downvote, u.voteButton, !1 === m ? u.active : ""].join(" "),
              name: "downvote",
              onClick: () => k(!1),
              type: "button"
            })]
          })
        },
        k = e => {
          let {
            action_text: a,
            link: i,
            trackingData: t
          } = e;
          const {
            track: n
          } = (0, s.useGtmTrack)();
          return (0, d.jsx)("a", {
            href: i,
            target: "_blank",
            rel: "noopener noreferrer",
            children: (0, d.jsxs)("button", {
              className: u.calloutLink,
              type: "button",
              onClick: t ? () => n({
                ...t
              }) : () => {},
              children: [a, (0, d.jsx)(m, {
                className: u.calloutLinkIcon
              })]
            })
          })
        },
        g = e => {
          let {
            helperText: a,
            linkText: i,
            link: t,
            trackingData: n
          } = e;
          const {
            track: r
          } = (0, s.useGtmTrack)();
          return (0, d.jsxs)("div", {
            className: u.actionFooter,
            children: [a, i && " ", i && (0, d.jsx)("a", {
              href: t ?? "",
              onClick: () => r({
                ...n
              }),
              children: i
            })]
          })
        },
        v = (0, r.withTranslations)((e => {
          let {
            header: a,
            subheader: i,
            type: r,
            action_text: o,
            link: c,
            foreign_id: m = document.location.pathname,
            foreign_type: v = "url",
            className: p = "",
            actionFooterHelperText: b,
            actionFooterLinkText: h,
            actionFooterLink: w,
            trackingData: y = {},
            actionFooterLinkTrackingData: N = {},
            t: x,
            ...S
          } = e;
          const {
            loggedIn: _
          } = (0, s.useRockstarUser)(), {
            track: j
          } = (0, s.useGtmTrack)(), T = `${document.location.origin}/auth/sc-auth-login?returnUrl=${window.location.pathname}`, {
            ref: V,
            inView: I
          } = (0, n.Wx)({
            threshold: .6
          }), [$, D] = (0, t.useState)(!1);
          let F;
          if ((0, t.useEffect)((() => {
              I && !$ && (j({
                event: "page_section_impression",
                element_placement: `callout section - ${S?.sectionName??S?._memoq?.header}`
              }), D(!0))
            }), [I]), !a && !i) return null;
          switch (r) {
            case "vote":
              if (!_) {
                F = (0, d.jsx)(l.A, {
                  to: T,
                  className: u.calloutButton,
                  onClick: y ? () => j({
                    ...y
                  }) : () => {},
                  children: "Log In"
                });
                break
              }
              F = (0, d.jsx)(f, {
                foreign_id: m,
                foreign_type: v
              });
              break;
            case "button":
              o && c && (F = (0, d.jsx)(l.A, {
                to: c,
                className: u.calloutButton,
                onClick: y ? () => j({
                  ...y
                }) : () => {},
                children: o
              }));
              break;
            case "link":
              o && c && (F = (0, d.jsx)(k, {
                action_text: o,
                link: c,
                trackingData: y
              }));
              break;
            default:
              F = null
          }
          return (0, d.jsx)("div", {
            className: `${u.calloutContainer} ${p||""}`,
            ref: V,
            children: (0, d.jsxs)("div", {
              className: u.calloutSection,
              children: [(0, d.jsxs)("div", {
                className: [u.calloutHeaders, F ? u.calloutHeaderMargins : ""].join(" "),
                children: [a && (0, d.jsx)("h2", {
                  className: u.calloutHeader,
                  children: x(a)
                }), i && (0, d.jsx)("h3", {
                  className: u.calloutSubheader,
                  children: x(i)
                })]
              }), (0, d.jsxs)("div", {
                className: u.actionBlock,
                children: [F, b && (0, d.jsx)(g, {
                  helperText: b,
                  linkText: h,
                  link: w,
                  trackingData: N
                })]
              })]
            })
          })
        }))
    },
    39613: (e, a, i) => {
      "use strict";
      i.d(a, {
        A: () => w
      });
      var t = i(71403),
        n = i(89779),
        r = i(40207),
        s = i(42756),
        o = i(90837),
        c = i(82275),
        l = i(44338),
        d = i(19169),
        m = i(67245),
        u = i(47483);
      const f = {
          ps: o,
          ps3: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d118a14a73ce72b4687d9eb69724f4d2.svg",
          ps4: c,
          ps5: l,
          switch: i(73870),
          xbox: d,
          xboxone: u,
          xboxseriesxs: m,
          xbox360: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1c5cee7464423693de19149a4554b3c2.svg",
          pc: i(96165),
          play: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/59c4aadbdbfcdb8d06d7caa54bdc9f60.svg",
          applestore: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/38a6e85fa4a378c5620efa9fde8ff223.svg",
          googleplay: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/ca4e52b102306a186549cfd712b1c8f8.svg",
          questionMark: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/e6833fa9baf4a5382bdd84b0b7d2c03f.svg",
          default: ""
        },
        k = e => f[e] || null,
        g = {
          pillBtn: "rockstargames-modules-core-newswire-articlebf9c11ff862c409ecb412254932a66d0",
          selected: "rockstargames-modules-core-newswire-articlee07887131c72b6346c408895888f4fa7",
          "clr-button": "rockstargames-modules-core-newswire-articleeb57c2501d6b6fff19ea12014712acae",
          lgMax: "rockstargames-modules-core-newswire-articlee8361180f27f9c36731c815805c69094",
          smMax: "rockstargames-modules-core-newswire-articlec392730b2e06f70a3a1bd646684859e8",
          cta: "rockstargames-modules-core-newswire-articlebc76de01fdd1260e254c482984d2a924",
          label: "rockstargames-modules-core-newswire-articleb81011c72b601075ebe54d7ceaa7d2d8",
          primary: "rockstargames-modules-core-newswire-articledbcf41d5c23e0eaf5089021f4d41c121",
          btnContent: "rockstargames-modules-core-newswire-articlef5e832587747dc414e10ab8e0bd843a9",
          btnIcon: "rockstargames-modules-core-newswire-articlecb0ad8d8dd93218dc12091b883767967",
          xbox: "rockstargames-modules-core-newswire-articlef591c5444c08121b0514f0c675da1479",
          xboxone: "rockstargames-modules-core-newswire-articlee5124beff89c5b4093a4029a9fee3367",
          xboxseriesxs: "rockstargames-modules-core-newswire-articlee52c94654eb462a8e65aa7607f5e21b5",
          ps: "rockstargames-modules-core-newswire-articlec53b78d3d062ee8d58f63a0acb1df137",
          ps4: "rockstargames-modules-core-newswire-articlef4a27aba1505f555d7cd8c920645245a",
          ps5: "rockstargames-modules-core-newswire-articleb5826d3700572b9bf36874e34d5c2a22",
          pc: "rockstargames-modules-core-newswire-articlec7ee0cfc54be00a8b152c47997ce76ac",
          switch: "rockstargames-modules-core-newswire-articlea9b276d1c119e9cd14df54c4459197b0",
          googleplay: "rockstargames-modules-core-newswire-articlea4ccd0de63b104d4aa48c8c3176618f3",
          platformIcon: "rockstargames-modules-core-newswire-articlec4ab0a89b65025cfe63b851116fb3a32",
          lgMin: "rockstargames-modules-core-newswire-articlec4a99972e5e512395e6fca5beaec1904",
          applestore: "rockstargames-modules-core-newswire-articlea13111cbe8acbd75f62da1c53de2c3df",
          icon: "rockstargames-modules-core-newswire-articlec7a3f1a29594b307606d15e6827f63f9",
          "icon-left": "rockstargames-modules-core-newswire-articlebd623c6039c3f4122936775ed4214bd4",
          "icon-right": "rockstargames-modules-core-newswire-articlec79040e66c1f48e302291d8cf1335742",
          disabled: "rockstargames-modules-core-newswire-articled87326174de12b895401f738a23b177a"
        };
      var v = i(72862),
        p = i.n(v),
        b = i(46632);
      const h = e => {
          let {
            platform: a = "",
            altText: i
          } = e;
          const t = a ? k(a) : null,
            n = t ? (0, b.jsx)("img", {
              className: g.platformIcon,
              src: t,
              alt: i
            }) : null;
          return (0, b.jsx)("span", {
            className: [g.btnContent, g.platformButton].join(" "),
            children: n
          })
        },
        w = e => {
          let {
            children: a,
            href: i,
            style: o,
            content: c,
            variant: l = null,
            size: d = "medium",
            icon: m,
            iconPosition: u = "none",
            iconStyle: f,
            badge: v,
            badgeStyle: w,
            platformItem: y,
            gtm: N = {},
            disabled: x,
            reloadDocument: S = !1,
            className: _
          } = e;
          const {
            track: j
          } = (0, r.useGtmTrack)(), T = (0, s.useDataLayer)(), V = c ?? a, I = (0, s.findPlatform)(y)?.friendlyName, $ = (0, t.useMemo)((() => {
            const e = window.location.hostname;
            let a;
            try {
              a = new URL(i)?.hostname
            } catch (i) {
              a = e
            }
            return e === a
          }), [i]), D = (0, t.useCallback)((() => {
            x || j({
              event: "cta_other",
              text: V ?? void 0,
              ...T,
              ...N,
              link_url: i ?? void 0
            })
          }), [N, i, T]), F = () => m ? (0, b.jsx)("span", {
            className: [g.icon, `icon-${u}`].join(" "),
            style: f,
            children: (0, b.jsx)("img", {
              className: g.btnIcon,
              src: k(m) || "",
              alt: `${m} icon`
            })
          }) : null;
          return (0, b.jsx)(n.Link, {
            to: i,
            target: $ ? "_self" : "_blank",
            className: p()(g.cta, "platform" === l && y ? g[y] : "", x ? g.disabled : "", _),
            style: o,
            "data-variant": l,
            "data-size": d,
            onClick: D,
            "aria-label": V,
            reloadDocument: S,
            children: "platform" === l && y ? (0, b.jsx)(h, {
              platform: y,
              altText: I || V
            }) : (0, b.jsxs)("div", {
              className: g.btnContent,
              children: ["left" === u && F(), (0, b.jsx)("span", {
                className: g.label,
                children: V
              }), "right" === u && F(), v ? (0, b.jsx)("span", {
                className: g.badge,
                style: w,
                children: v
              }) : null]
            })
          })
        }
    },
    37017: (e, a, i) => {
      "use strict";
      i.d(a, {
        A: () => c
      });
      var t = i(71403),
        n = i(89779),
        r = i(58407),
        s = i(42756);
      var o = i(46632);
      const c = (0, s.withTranslations)((e => {
        let {
          t: a
        } = e;
        const [i] = (0, t.useState)(""), s = (0, n.useNavigate)(), c = (0, r.useMutateState)();
        return (0, o.jsxs)("form", {
          action: "#",
          className: "rockstargames-modules-core-newswire-articleb82052ce07e004075e77261c373bfc50",
          onSubmit: e => {
            e.preventDefault(), c({
              navOpen: !1
            }), document.activeElement?.blur(), s(`/search?q=${e.target.q.value}`)
          },
          role: "search",
          children: [(0, o.jsx)("button", {
            type: "submit",
            role: "button",
            title: "Submit"
          }), (0, o.jsx)("input", {
            autoComplete: "off",
            defaultValue: i,
            enterKeyHint: "search",
            name: "q",
            placeholder: a("Search Rockstar Games")
          })]
        })
      }))
    },
    52983: (e, a, i) => {
      "use strict";
      i.d(a, {
        A: () => r
      });
      const t = {
        skeleton: "rockstargames-modules-core-newswire-articlef963a1ae95f7f5ac2c5192c3f357b6dc",
        pulse: "rockstargames-modules-core-newswire-articlee00ed88d692bbfc1a301dcfc61a077a9",
        gen9Hero: "rockstargames-modules-core-newswire-articledb0b80177710d337d93bddb97b8a7dea"
      };
      var n = i(46632);
      const r = e => {
        let {
          skeleton: a
        } = e;
        return a ? (0, n.jsx)("div", {
          className: [t.skeleton, t[a]].join(" ")
        }) : null
      }
    },
    22545: (e, a, i) => {
      "use strict";
      i.d(a, {
        A: () => u
      });
      var t = i(71403),
        n = i(53980),
        r = i(40207),
        s = i(81902),
        o = i(11650);
      const c = "rockstargames-modules-core-newswire-articleeca98eb0b5b84a0c9a2e6d952545a2d5",
        l = "rockstargames-modules-core-newswire-articled3d0b4ecd3bddba96c73f49fcca34ed8";
      var d = i(46632);
      const m = {
          0: {
            spaceBetween: 8
          },
          768: {
            spaceBetween: 16
          },
          1024: {
            spaceBetween: 18
          },
          1920: {
            spaceBetween: 20
          },
          2560: {
            spaceBetween: 22
          }
        },
        u = e => {
          let {
            title: a = "thumbnail gallery",
            thumbsPerView: i = 3,
            loop: u = !1,
            navigation: f = !1,
            slideChildren: k = [],
            variants: g = {
              parent: void 0,
              main: void 0,
              thumbs: void 0
            },
            transition: v = {
              parent: void 0,
              main: void 0,
              thumbs: void 0
            }
          } = e;
          const {
            track: p
          } = (0, r.useGtmTrack)(), [b, h] = (0, t.useState)([o.U1, o.WO, o.dK]), [w, y] = (0, t.useState)(null), [N, x] = (0, t.useState)(null);
          return (0, t.useEffect)((() => {
            const e = [o.U1, o.WO, o.dK];
            f && e.push(o.Vx), h(e)
          }), [f]), (0, t.useEffect)((() => {
            if (!k) return;
            const e = k.map(((e, a) => (0, d.jsx)(s.qr, {
              children: e
            }, Symbol(a).toString())));
            x(e)
          }), [k]), N ? (0, d.jsxs)(n.P.div, {
            className: "rockstargames-modules-core-newswire-articled4f245838b94234f21463a08a8112910",
            variants: g.parent,
            transition: v.parent,
            initial: "initial",
            animate: "animate",
            children: [(0, d.jsx)(n.P.div, {
              className: c,
              variants: g.main,
              transition: v.main,
              initial: "initial",
              animate: "animate",
              children: (0, d.jsx)(s.RC, {
                loop: u,
                navigation: f,
                pagination: {
                  clickable: !0
                },
                thumbs: {
                  swiper: w
                },
                modules: b,
                breakpoints: m,
                className: c,
                onSlideNextTransitionEnd: () => {
                  p({
                    event: "carousel_next",
                    element_placement: a?.toLowerCase() ?? ""
                  })
                },
                onSlidePrevTransitionEnd: () => {
                  p({
                    event: "carousel_previous",
                    element_placement: a?.toLowerCase() ?? ""
                  })
                },
                onSlideChangeTransitionEnd: () => {
                  p({
                    event: "carousel_swipe",
                    element_placement: a?.toLowerCase() ?? ""
                  })
                },
                children: N
              })
            }), (0, d.jsx)(n.P.div, {
              className: l,
              variants: g.thumbs,
              transition: v.thumbs,
              initial: "initial",
              animate: "animate",
              children: (0, d.jsx)(s.RC, {
                threshold: 50,
                onSwiper: y,
                loop: u,
                breakpoints: m,
                slidesPerView: i,
                freeMode: !0,
                watchSlidesProgress: !0,
                modules: b,
                className: l,
                children: N
              })
            })]
          }) : null
        }
    },
    25180: (e, a, i) => {
      "use strict";
      i.d(a, {
        A: () => d,
        X: () => l
      });
      var t = i(58407),
        n = i(74401),
        r = i(47252),
        s = i(52983),
        o = i(50048),
        c = i(46632);
      const l = e => {
          let {
            id: a = null,
            ids: i = null,
            setTitleDataPath: n = null,
            sync: r = !1
          } = e;
          const s = i ?? [a],
            {
              data: c
            } = (0, t.useQuery)(o.TinaModulesInfo, {
              variables: {
                ids: s,
                sync: r
              },
              setTitleDataPath: n,
              skip: !s.length
            });
          return c?.tinaModulesInfo ?? null
        },
        d = (0, r.A)((e => {
          let {
            components: a = {},
            id: i = null,
            ids: t = null,
            skeleton: r
          } = e;
          const o = l({
            id: i,
            ids: t
          });
          if (!o) return (0, c.jsx)(s.A, {
            skeleton: r
          });
          const d = o?.[0]?.tina;
          return d ? (0, c.jsx)(c.Fragment, {
            children: o.map(((e, i) => {
              let {
                tina: t
              } = e;
              return (0, c.jsx)(n.TinaParser, {
                components: a,
                tina: t,
                componentProps: {
                  tinaModulesInfo: o
                }
              }, i)
            }))
          }) : null
        }))
    },
    71080: (e, a, i) => {
      "use strict";
      i.d(a, {
        A: () => n
      });
      var t = i(46632);
      const n = e => {
        let {
          text: a,
          style: i
        } = e;
        return (0, t.jsx)("div", {
          className: "rockstargames-modules-core-newswire-articleb61bd7f274fd6d93c4bf33a9284b6b67",
          style: i,
          children: a
        })
      }
    },
    22778: (e, a, i) => {
      "use strict";
      i.d(a, {
        A: () => s
      });
      var t = i(60285);
      const n = {
        button: "rockstargames-modules-core-newswire-articlee056494c33cff1fe89431f279fdb6b9a",
        secondary: "rockstargames-modules-core-newswire-articled340cf27f380a4347994e59544432eb3"
      };
      var r = i(46632);
      const s = e => {
        let {
          className: a = "",
          children: i,
          context: s = "",
          to: o,
          onClick: c,
          target: l = "_self",
          ...d
        } = e;
        const m = [n.button, n[s], a].join(" ");
        return o ? (0, r.jsx)(t.A, {
          ...d,
          to: o,
          className: m,
          onClick: c,
          target: l,
          children: i
        }) : (0, r.jsx)("button", {
          ...d,
          type: "button",
          className: m,
          onClick: c,
          children: i
        })
      }
    },
    28606: (e, a, i) => {
      "use strict";
      i.d(a, {
        A: () => o
      });
      var t = i(26398),
        n = i(28089),
        r = i(42756);
      var s = i(46632);
      const o = e => {
        let {
          children: a,
          context: i = null,
          game: o,
          image: c = {},
          style: l = {},
          template: d = null,
          theme: m = null,
          reversedOnMobile: u = !1,
          className: f = "",
          id: k = null
        } = e;
        const g = (0, n.useImageParser)(c ?? {}),
          v = {
            ...l
          };
        if (g?.src?.desktop) {
          const e = (c?.style && c?.style["--background-image-size"]) ?? "var(--grid-background-size, cover)",
            a = (c?.style && c?.style["--background-image-repeat"]) ?? "var(--grid-background-repeat, no-repeat)",
            i = `var(--grid-background-position, center)/${e??"cover"}`;
          if (v.background = `url(${g?.src?.desktop}) ${a} ${i}`, c?.style && c?.style["--linear-gradient"]) v.background = `linear-gradient(${c?.style["--linear-gradient"]}), url(${g?.src?.desktop}) ${a} ${i}`;
          else if (c?.style && c?.style["--gradient-height"]) {
            const e = c?.style["--gradient-height"] || "3",
              t = c?.style["--gradient-start-color"] || "var(--background-color, transparent)",
              n = c?.style["--gradient-end-color"] || "var(--background-color, transparent)";
            v.background = `linear-gradient(180deg, ${t}, transparent ${e}%, transparent ${100-e}%, ${n}), url(${g?.src?.desktop}) ${a} ${i}`
          }
        }
        return (0, s.jsx)("div", {
          id: k,
          className: (0, t.classList)("rockstargames-modules-core-newswire-articlef42b4606ed4a5b16b7647ad7b7eb229d", u ? "rockstargames-modules-core-newswire-articleb00444166ce6346d7ca364a75a335ecc" : "", f),
          "data-game": "community" === d ? null : o,
          style: (0, r.safeStyles)(v),
          "data-context": i,
          "data-template": d,
          "data-theme": m,
          children: a
        })
      }
    },
    95625: (e, a, i) => {
      "use strict";
      i.d(a, {
        A: () => r
      });
      const t = {
        responsiveGridBox: "rockstargames-modules-core-newswire-articlea28c0b7a44e1a2d5fb257161ce36a24f",
        responsiveGridItem: "rockstargames-modules-core-newswire-articlebeddf36313a28976090b5a8b04d2594a"
      };
      var n = i(46632);
      const r = e => {
        let {
          children: a,
          cols: i,
          className: r,
          rows: s,
          style: o
        } = e;
        const c = o ? {
          ...o
        } : {};
        return void 0 !== i && (c.gridTemplateColumns = `repeat(${i}, 1fr)`), void 0 !== s && (c.gridTemplateRows = `repeat(${s}, 1fr)`), (0, n.jsx)("div", {
          className: [t.responsiveGridBox, void 0 !== r ? r : ""].join(" "),
          style: c,
          children: a
        })
      }
    },
    61841: (e, a, i) => {
      "use strict";
      i.d(a, {
        A: () => r
      });
      const t = {
        responsiveGridBox: "rockstargames-modules-core-newswire-articlea39e7c7140ada0ab28537c8c901e816f",
        responsiveGridItem: "rockstargames-modules-core-newswire-articlebe7a0966e2f0457c1172ac9da99020c6"
      };
      var n = i(46632);
      const r = e => {
        let {
          children: a,
          className: i,
          style: r
        } = e;
        return (0, n.jsx)("div", {
          className: [t.responsiveGridItem, void 0 !== i ? i : ""].join(" "),
          style: r,
          children: a
        })
      }
    },
    87839: (e, a, i) => {
      "use strict";
      i.d(a, {
        A: () => c
      });
      var t = i(54252),
        n = i.n(t),
        r = i(74401),
        s = i(42756);
      var o = i(46632);
      const c = e => {
        let {
          children: a,
          attributes: i = {},
          className: t = "",
          style: c = {}
        } = e;
        return (0, o.jsx)("span", {
          className: (0, r.classList)(t, i?.className, "rockstargames-modules-core-newswire-articlea7f106a8036d74ed9282a741476c6b5a"),
          style: (0, s.safeStyles)(c ?? i?.style ?? {}),
          dangerouslySetInnerHTML: {
            __html: n().unescape(a)
          }
        })
      }
    },
    37297: (e, a, i) => {
      "use strict";
      i.d(a, {
        A: () => s
      });
      var t = i(42756);
      const n = {
        responsiveImage: "rockstargames-modules-core-newswire-articlee31b43dce2e720669fb90bf539d22197"
      };
      var r = i(46632);
      const s = e => {
        let {
          src: a,
          className: i = "",
          animate: s,
          ariaLabel: o,
          style: c = {}
        } = e;
        const [l, d] = (0, t.usePreloadImg)(a);
        return l ? (c.backgroundImage = `url(${a})`, (0, r.jsx)("div", {
          role: "img",
          "aria-label": o ?? "R* Games",
          className: [n.responsiveImage, s ? n.animateBox : "", i].join(" "),
          style: {
            ...c,
            "--aspect-ratio": d.width / d.height
          }
        })) : null
      }
    },
    17375: (e, a, i) => {
      "use strict";
      i.d(a, {
        A: () => r
      });
      const t = {
        responsiveSection: "rockstargames-modules-core-newswire-articlefb7094e43a166c19080ccfe92ed7420d",
        maxWidth: "rockstargames-modules-core-newswire-articlebdc35dbaa55c59ddd2831fd3ac05c5a7"
      };
      var n = i(46632);
      const r = e => {
        let {
          children: a,
          className: i,
          style: r,
          maxWidth: s
        } = e;
        return (0, n.jsx)("section", {
          className: [t.responsiveSection, void 0 !== i ? i : ""].join(" "),
          style: r,
          children: s ? (0, n.jsx)("div", {
            className: t.maxWidth,
            children: a
          }) : a
        })
      }
    },
    47252: (e, a, i) => {
      "use strict";
      i.d(a, {
        A: () => s
      });
      var t = i(71403);
      var n = i(46632);
      class r extends t.Component {
        constructor(e) {
          super(e), this.state = {
            header: e.header ?? null
          }
        }
        static getDerivedStateFromError(e) {
          return {
            error: {
              message: e.message ?? e.toString()
            }
          }
        }
        render() {
          return this?.state?.error?.message ? (0, n.jsxs)("div", {
            className: "rockstargames-modules-core-newswire-articlef903c45f8ecc18bd55f702e202f3763a",
            children: [(0, n.jsx)("h1", {
              children: this.state.header ?? "An error occurred."
            }), (0, n.jsx)("span", {
              children: this.state.error.message
            })]
          }) : this.props.children
        }
      }
      const s = function(e) {
        let a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        return function(i) {
          return (0, n.jsx)(r, {
            header: a,
            children: (0, n.jsx)(e, {
              ...i
            })
          })
        }
      }
    },
    88038: (e, a, i) => {
      "use strict";
      i.d(a, {
        A: () => c
      });
      var t = i(71403),
        n = i(42756),
        r = i(60285),
        s = i(37017);
      var o = i(46632);
      const c = (0, n.withTranslations)((e => {
        let {
          error: a,
          t: i,
          domain: n = ""
        } = e;
        console.error({
          error: a
        });
        let c = a?.message ?? i("error-404-new");
        c = i("error-404-new");
        const l = a?.code ?? 398,
          d = (0, t.useRef)(null);
        return (0, t.useEffect)((() => {
          d && d?.current && d.current.focus()
        }), [d]), (0, o.jsxs)("div", {
          className: "rockstargames-modules-core-newswire-articled988ce20c420c26fc5e455279bf94cb9",
          children: [(0, o.jsx)("h3", {
            tabIndex: -1,
            ref: d,
            children: `${c} (${l})`
          }), (0, o.jsx)(r.A, {
            to: "/",
            children: i("Home")
          }), "clr" !== n && (0, o.jsx)(s.A, {})]
        })
      }))
    },
    14924: (e, a, i) => {
      "use strict";
      i.r(a), i.d(a, {
        Animations: () => t,
        LiteMotion: () => p,
        withFadeIn: () => N,
        withFadeUp: () => j
      });
      var t = {};
      i.r(t), i.d(t, {
        getVariant: () => I,
        transitions: () => T,
        variants: () => V
      });
      var n = i(71403),
        r = i(96628),
        s = i(72005);
      const o = (0, r.H)(s.P);
      var c = i(52886),
        l = i(57400);

      function d({
        children: e,
        features: a,
        strict: i = !1
      }) {
        const [, t] = (0, n.useState)(!m(a)), r = (0, n.useRef)(void 0);
        if (!m(a)) {
          const {
            renderer: e,
            ...i
          } = a;
          r.current = e, (0, l.Y)(i)
        }
        return (0, n.useEffect)((() => {
          m(a) && a().then((({
            renderer: e,
            ...a
          }) => {
            (0, l.Y)(a), r.current = e, t(!0)
          }))
        }), []), n.createElement(c.Y.Provider, {
          value: {
            renderer: r.current,
            strict: i
          }
        }, e)
      }

      function m(e) {
        return "function" == typeof e
      }
      var u = i(11645),
        f = i(4374);
      const k = {
        renderer: i(7752).J,
        ...u.W,
        ...f.n
      };
      var g = i(46632);
      const v = (0, n.forwardRef)(((e, a) => {
        const {
          children: i,
          tag: t = "div"
        } = e, n = o[t];
        return (0, g.jsx)(d, {
          features: k,
          children: (0, g.jsx)(n, {
            ref: a,
            ...e,
            children: i
          })
        })
      }));
      v.displayName = "LiteMotion";
      const p = v;
      var b = i(53980);
      const h = {
          visible: {
            opacity: 1
          },
          hidden: {
            opacity: 0
          }
        },
        w = {
          ease: "easeIn",
          duration: .4
        },
        y = e => {
          let {
            children: a
          } = e;
          return (0, g.jsx)(b.P.div, Object.assign({
            className: "rockstargames-modules-core-newswire-articlef0ee4e641f1ac92151be887c9ebb8392",
            variants: h,
            initial: "hidden",
            whileInView: "visible",
            viewport: {
              margin: "-20%",
              once: !0
            },
            transition: w
          }, {
            children: a
          }))
        },
        N = e => a => (0, g.jsx)(y, {
          children: (0, g.jsx)(e, Object.assign({}, a))
        }),
        x = {
          visible: {
            opacity: 1,
            y: 0
          },
          hidden: {
            opacity: 0,
            y: 40
          }
        },
        S = {
          ease: "easeIn",
          duration: .75
        },
        _ = e => {
          let {
            children: a
          } = e;
          return (0, g.jsx)(b.P.div, {
            className: "rockstargames-modules-core-newswire-articlea479a10c5475b17a0564b60fecf98c8b",
            variants: x,
            initial: "hidden",
            whileInView: "visible",
            viewport: {
              margin: "-20%",
              once: !0
            },
            transition: S,
            children: a
          })
        },
        j = e => a => (0, g.jsx)(_, {
          children: (0, g.jsx)(e, {
            ...a
          })
        }),
        T = {
          cardOpen: {
            ease: [.77, 0, .175, 1],
            duration: .5
          },
          afterCardOpen: {
            ease: "easeIn",
            duration: .3,
            delay: .5
          },
          fade: {
            ease: "easeIn",
            duration: .3
          },
          instantFade: {
            duration: .05
          }
        },
        V = {
          plainCard: {
            expanded: {
              initial: {
                gridTemplateColumns: "var(--grid-template-columns-initial)",
                "--card-image-aspect-ratio": "var(--card-image-aspect-ratio-initial)",
                overflow: "visible",
                "--product-card-pricing-info-opacity": 1,
                "--product-card-pricing-info-padding": "var(--padding-sm)"
              },
              animate: {
                gridTemplateColumns: "var(--grid-template-columns-animate)",
                "--card-image-aspect-ratio": "var(--card-image-aspect-ratio-animate)",
                "--product-card-pricing-info-height": 0,
                "--product-card-pricing-info-opacity": 0,
                "--product-card-pricing-info-padding": 0,
                transitionEnd: {
                  overflow: "auto",
                  marginTop: "calc(var(--modal-padding) * -1)",
                  paddingTop: "var(--modal-padding)",
                  height: "calc(100% + var(--modal-padding))"
                }
              },
              hovered: {}
            },
            expandedContents: {
              initial: {
                opacity: 0,
                display: "var(--card-expanded-contents-display-initial)"
              },
              animate: {
                opacity: 1,
                display: "grid"
              }
            }
          },
          cardWithImageGallery: {
            expanded: {
              initial: {
                overflow: "visible",
                gridTemplateColumns: "var(--grid-template-columns-initial)",
                "--card-image-aspect-ratio": "var(--card-image-aspect-ratio-initial)",
                "--gallery-border": "0 solid transparent"
              },
              animate: {
                gridTemplateColumns: "var(--grid-template-columns-animate)",
                "--card-image-aspect-ratio": "var(--card-image-aspect-ratio-animate)",
                transitionEnd: {
                  overflow: "auto",
                  marginTop: "calc(var(--modal-padding) * -1)",
                  paddingTop: "var(--modal-padding)",
                  height: "calc(100% + var(--modal-padding))"
                }
              },
              hovered: {}
            },
            expandedContents: {
              initial: {
                opacity: 0,
                display: "none"
              },
              animate: {
                opacity: 1,
                display: "grid"
              }
            },
            gallery: {
              parent: {
                initial: {
                  gridGap: 0,
                  background: "var(--black-100)"
                },
                animate: {
                  gridGap: "var(--gallery-grid-gap)",
                  background: "var(--black-200)",
                  transitionEnd: {
                    pointerEvents: "all"
                  }
                }
              },
              main: {
                initial: {
                  "--gallery-aspect-ratio": "var(--gallery-aspect-ratio-initial)",
                  "--swiper-pagination-opacity": 0
                },
                animate: {
                  "--gallery-aspect-ratio": "var(--gallery-aspect-ratio-animate)",
                  "--swiper-pagination-opacity": 1
                }
              },
              thumbs: {
                initial: {
                  "--thumb-aspect-ratio": "1/0"
                },
                animate: {
                  "--thumb-aspect-ratio": "1/1"
                }
              }
            }
          },
          imageMask: {
            expanded: {
              initial: {
                borderRadius: "var(--border-radius-md)"
              },
              animate: {
                borderRadius: "var(--card-expanded-border-radius)"
              }
            }
          },
          foreground: {
            expanded: {
              initial: {
                width: "100%"
              },
              animate: {
                width: "var(--card-foreground-layer-width-animate)"
              }
            }
          },
          logo: {
            expanded: {
              initial: {
                "--card-logo-top-initial": "2rem",
                "--card-logo-top-animate": "0%"
              },
              animate: {
                "--card-logo-top-initial": "0rem",
                "--card-logo-top-animate": "50%",
                "--card-logo-marginTop-animate": "calc(var(--card-logo-height) * -1)",
                "--card-logo-y-animate-mobile": "-20%",
                height: "calc(var(--card-logo-height) * 2)",
                x: "var(--card-logo-animate-x)"
              },
              hovered: {}
            }
          },
          fade: {
            in: {
              initial: {
                opacity: 0
              },
              animate: {
                opacity: 1
              }
            },
            out: {
              initial: {
                opacity: 1
              },
              animate: {
                opacity: 0
              }
            }
          }
        },
        I = function() {
          let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "collapsed";
          return V[arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "imageMask"][e]
        }
    },
    59781: e => {
      var a = {
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

      function i(e, a) {
        if ("FragmentSpread" === e.kind) a.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var t = e.type;
          "NamedType" === t.kind && a.add(t.name.value)
        }
        e.selectionSet && e.selectionSet.selections.forEach((function(e) {
          i(e, a)
        })), e.variableDefinitions && e.variableDefinitions.forEach((function(e) {
          i(e, a)
        })), e.definitions && e.definitions.forEach((function(e) {
          i(e, a)
        }))
      }
      a.loc.source = {
        body: "query UserGetVote($foreignId: String!, $foreignType: String!) {\n    userGetVote(foreign_id: $foreignId, foreign_type: $foreignType) {\n        vote\n    }\n}\n\nmutation UserCastVote(\n    $foreignId: String!\n    $foreignType: String!\n    $vote: Boolean!\n) {\n    userCastVote(\n        foreign_id: $foreignId\n        foreign_type: $foreignType\n        vote: $vote\n    ) {\n        vote\n    }\n}\n",
        name: "GraphQL request",
        locationOffset: {
          line: 1,
          column: 1
        }
      };
      var t = {};

      function n(e, a) {
        for (var i = 0; i < e.definitions.length; i++) {
          var t = e.definitions[i];
          if (t.name && t.name.value == a) return t
        }
      }

      function r(e, a) {
        var i = {
          kind: e.kind,
          definitions: [n(e, a)]
        };
        e.hasOwnProperty("loc") && (i.loc = e.loc);
        var r = t[a] || new Set,
          s = new Set,
          o = new Set;
        for (r.forEach((function(e) {
            o.add(e)
          })); o.size > 0;) {
          var c = o;
          o = new Set, c.forEach((function(e) {
            s.has(e) || (s.add(e), (t[e] || new Set).forEach((function(e) {
              o.add(e)
            })))
          }))
        }
        return s.forEach((function(a) {
          var t = n(e, a);
          t && i.definitions.push(t)
        })), i
      }
      a.definitions.forEach((function(e) {
        if (e.name) {
          var a = new Set;
          i(e, a), t[e.name.value] = a
        }
      })), e.exports = a, e.exports.UserGetVote = r(a, "UserGetVote"), e.exports.UserCastVote = r(a, "UserCastVote")
    },
    50048: e => {
      var a = {
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
          end: 963
        }
      };

      function i(e, a) {
        if ("FragmentSpread" === e.kind) a.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var t = e.type;
          "NamedType" === t.kind && a.add(t.name.value)
        }
        e.selectionSet && e.selectionSet.selections.forEach((function(e) {
          i(e, a)
        })), e.variableDefinitions && e.variableDefinitions.forEach((function(e) {
          i(e, a)
        })), e.definitions && e.definitions.forEach((function(e) {
          i(e, a)
        }))
      }
      a.loc.source = {
        body: "query TinaModulesList($types: [String], $locale: String!) {\n    tinaModulesList(types: $types, locale: $locale) {\n        results {\n            id_hash\n            id\n            title\n            type\n        }\n    }\n}\n\nquery TinaModulesInfo(\n    $ids: [String]!\n    $locale: String!\n    $sync: Boolean = false\n    $cache: Boolean = false\n) {\n    tinaModulesInfo(ids: $ids, locale: $locale, cache: $cache) {\n        id: id_hash\n        title\n        title_doc\n        type\n        sync_hash\n        to\n        visible\n        children {\n            title\n            id_hash\n            to\n            tina {\n                payload\n                variables {\n                    keys\n                }\n            }\n        }\n        tina {\n            payload\n            variables {\n                keys\n                _translations @include(if: $sync) {\n                    locale\n                    keys\n                }\n            }\n        }\n    }\n}\n",
        name: "GraphQL request",
        locationOffset: {
          line: 1,
          column: 1
        }
      };
      var t = {};

      function n(e, a) {
        for (var i = 0; i < e.definitions.length; i++) {
          var t = e.definitions[i];
          if (t.name && t.name.value == a) return t
        }
      }

      function r(e, a) {
        var i = {
          kind: e.kind,
          definitions: [n(e, a)]
        };
        e.hasOwnProperty("loc") && (i.loc = e.loc);
        var r = t[a] || new Set,
          s = new Set,
          o = new Set;
        for (r.forEach((function(e) {
            o.add(e)
          })); o.size > 0;) {
          var c = o;
          o = new Set, c.forEach((function(e) {
            s.has(e) || (s.add(e), (t[e] || new Set).forEach((function(e) {
              o.add(e)
            })))
          }))
        }
        return s.forEach((function(a) {
          var t = n(e, a);
          t && i.definitions.push(t)
        })), i
      }
      a.definitions.forEach((function(e) {
        if (e.name) {
          var a = new Set;
          i(e, a), t[e.name.value] = a
        }
      })), e.exports = a, e.exports.TinaModulesList = r(a, "TinaModulesList"), e.exports.TinaModulesInfo = r(a, "TinaModulesInfo")
    },
    96165: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1c050b43f15f34e2cd0592fad6dc48fd.svg"
    },
    90837: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1506c5bba61fa270f73c874e3d60a94f.svg"
    },
    82275: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/3f9f55567df4006813f8bf50ad383ea0.svg"
    },
    44338: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/6e8f340ded0fd6b0b0d434e8c6c8b75e.svg"
    },
    73870: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/925d3b2d0b0e784c366e20d3f1a660da.svg"
    },
    19169: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d6d2cb861c79506282c6d6cbf1170f81.svg"
    },
    47483: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5f91e4753c491fb23c2b364f69480c9e.svg"
    },
    67245: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/205366df6706c3b367fb5ff4f26ab7f3.svg"
    }
  }
]);