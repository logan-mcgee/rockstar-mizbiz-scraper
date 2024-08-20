! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "d8117b8e-b910-44df-90a4-411ebf4f24c7", e._sentryDebugIdIdentifier = "sentry-dbid-d8117b8e-b910-44df-90a4-411ebf4f24c7")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/sites-legacy",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_legacy = self.webpackChunk_rockstargames_sites_legacy || []).push([
  [924], {
    61651: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => n
      });
      var s = t(71403),
        i = t(40207);
      const r = (0, s.forwardRef)(((e, a) => {
        const {
          threshold: t,
          callback: r,
          children: n,
          requireUser: c
        } = e, {
          track: o
        } = (0, i.useGtmTrack)(c), [d, l] = (0, s.useState)(a?.current);
        return (0, s.useEffect)((() => {
          a?.current && l(a.current)
        }), [a]), ((e, a, t) => {
          const [i, r] = (0, s.useState)({
            scrollDepths: e,
            scrollY: 0
          }), {
            scrollDepths: n,
            scrollY: c
          } = i;
          (0, s.useEffect)((() => {
            "undefined" != typeof window && 0 !== window.pageYOffset && r((e => ({
              ...e,
              scrollY: window.pageYOffset
            })))
          }), []), (0, s.useEffect)((() => {
            r({
              scrollDepths: e,
              scrollY: 0
            })
          }), [window.location.pathname]);
          const o = (0, s.useCallback)((() => {
            const e = document.documentElement,
              s = document.body,
              c = t?.scrollTop || e.scrollTop || s.scrollTop,
              d = t?.scrollHeight || e.scrollHeight || s.scrollHeight,
              {
                clientHeight: l
              } = e,
              m = c / (d - l) * 100;
            if (n) {
              const e = Math.min(...n, d);
              if (m >= e) {
                const s = n.filter((a => a !== e));
                0 === s.length && (t ?? window).removeEventListener("scroll", o), a && a({
                  scrollY: e,
                  scrollPercent: m,
                  remainingDepths: s
                }), r({
                  scrollY: e,
                  scrollDepths: s
                })
              }
            } else r({
              ...i,
              scrollY: m
            })
          }), [n, t, a]);
          (0, s.useEffect)((() => {
            if ("undefined" == typeof window) return;
            const e = t ?? window;
            return e.addEventListener("scroll", o), () => e.removeEventListener("scroll", o)
          }), [o])
        })(t, (e => {
          let {
            scrollY: a
          } = e;
          o({
            event: "page_scroll",
            scroll_depth: a
          }), "function" == typeof r && r(a)
        }), d), n
      }));
      r.displayName = "ScrollTracker";
      const n = r
    },
    7607: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => d
      });
      var s = t(96717),
        i = t(20066);
      const r = (0, s.defineMessages)({
          components_track_list_title: {
            id: "components_track_list_title",
            defaultMessage: "Tracklist"
          }
        }),
        n = {
          bodySmall: "rockstargames-sites-legacyc048aacaedc7fb642f38c7f163c193e3"
        };
      var c = t(46632);
      const o = e => {
          let {
            track: a,
            artist: t
          } = e;
          return (0, c.jsxs)("div", {
            className: n.track,
            children: [(0, c.jsx)("p", {
              children: a
            }), (0, c.jsx)("p", {
              className: n.bodySmall,
              children: t
            })]
          })
        },
        d = (0, s.withIntl)((e => {
          let {
            content: a = []
          } = e;
          return (0, c.jsxs)("div", {
            className: "rockstargames-sites-legacye6c19f2cdd68a4352e248a8324383aa2",
            children: [(0, c.jsx)("h4", {
              className: "rockstargames-sites-legacycd3895fbae93ba04f1401487f6e6eddf",
              children: (0, c.jsx)(s.FormattedMessage, {
                ...r.components_track_list_title
              })
            }), (0, c.jsx)("div", {
              className: "rockstargames-sites-legacyef0cde8b15ded961605237d0e8328a9b",
              children: (0, c.jsx)("div", {
                className: "rockstargames-sites-legacybdd54186db17d27b3daebc4b9d58e09a",
                children: a?.map((e => (0, c.jsx)(o, {
                  track: e.track,
                  artist: e.artist
                }, e.key)))
              })
            })]
          })
        }), i)
    },
    32331: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => n
      });
      var s = t(74401),
        i = t(62811);
      var r = t(46632);
      const n = e => {
        let {
          buttons: a = [],
          className: t
        } = e;
        return a.length ? (0, r.jsx)("div", {
          className: (0, s.classList)("rockstargames-sites-legacyb411a36e7fd12ab75861fe560b31b206", t),
          children: a.map(((e, a) => {
            let {
              icon: t,
              title: s,
              to: n
            } = e;
            return s ? (0, r.jsx)(i.A, {
              icon: t,
              text: s,
              to: n
            }, a) : ""
          }))
        }) : null
      }
    },
    55430: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => b
      });
      var s = t(71403),
        i = t(49948),
        r = t(42756),
        n = t(40207),
        c = t(58407),
        o = t(59781),
        d = t(22778),
        l = t(46632);
      const m = e => {
          let {
            className: a
          } = e;
          return (0, l.jsxs)("svg", {
            className: a,
            width: "16",
            height: "17",
            viewBox: "0 0 16 17",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [(0, l.jsx)("path", {
              d: "M3.33203 8.5H12.6654",
              stroke: "white",
              strokeWidth: "1.33",
              strokeLinecap: "round",
              strokeLinejoin: "round"
            }), (0, l.jsx)("path", {
              d: "M8 3.83331L12.6667 8.49998L8 13.1666",
              stroke: "white",
              strokeWidth: "1.33",
              strokeLinecap: "round",
              strokeLinejoin: "round"
            })]
          })
        },
        g = {
          pillBtn: "rockstargames-sites-legacye3158363419b66e5afa2264e4928890c",
          selected: "rockstargames-sites-legacya9649249223f164eff11174ffc72616b",
          calloutContainer: "rockstargames-sites-legacye6bd244761fdf3ebe3888539d9942921",
          calloutSection: "rockstargames-sites-legacyb1b8c93299158ef7d0f9eb04e14a7a64",
          calloutHeaders: "rockstargames-sites-legacyc81810436a5b57307c41f4d7a704b2f7",
          calloutHeaderMargins: "rockstargames-sites-legacyb4e1f72dfa9b38f23017e5f8ef48b9cb",
          calloutHeader: "rockstargames-sites-legacyb7964754215256201dd703aedca18b6f",
          calloutSubheader: "rockstargames-sites-legacyac660fa7995007ed875e03a257e447d7",
          calloutVoteForm: "rockstargames-sites-legacybee0795a36dd5adf822e1e50a7260f3d",
          voteButton: "rockstargames-sites-legacyb1baa545566a61b791b696c9ebf560ad",
          upvote: "rockstargames-sites-legacyb9c17ddd3e1052acb5097909ae2b07a1",
          downvote: "rockstargames-sites-legacyf26b53e66e552183743465cce6a8d3a8",
          active: "rockstargames-sites-legacyd38a1764483a36e8a1509aee5b88ec31",
          calloutButton: "rockstargames-sites-legacyb7eb76afce3c6e686be44c356837b627",
          calloutLink: "rockstargames-sites-legacyaefe6c5a233047c943a864cd56a7de2d",
          calloutLinkIcon: "rockstargames-sites-legacya74bf6baa632ad9b5f87efd2043cfed5",
          actionBlock: "rockstargames-sites-legacycc491ddd715196ecd6ef54017ff05ec0",
          actionFooter: "rockstargames-sites-legacydb26fed58ce50f4affc114670885721a"
        },
        f = e => {
          let {
            foreign_id: a,
            foreign_type: t
          } = e;
          const {
            track: i
          } = (0, n.useGtmTrack)(), {
            refetch: r
          } = (0, c.useQuery)(o.UserGetVote, {
            skip: !0
          }), [d] = (0, c.useMutation)(o.UserCastVote), [m, f] = (0, s.useState)(null), u = (0, s.useCallback)((e => {
            (async () => {
              if (e === m && null !== m) f(null);
              else {
                f(e), i({
                  event: "cta_" + (e ? "like" : "dislike"),
                  text: `${t} ${a}`
                });
                const s = {
                  foreignId: a,
                  foreignType: t,
                  vote: e
                };
                await d({
                  variables: s
                })
              }
            })()
          }), [a, t, m]);
          return (0, s.useEffect)((() => {
            a && t && (async () => {
              const e = await r({
                foreignId: a,
                foreignType: t
              });
              f(e?.data?.userGetVote?.vote ?? null)
            })()
          }), [a, t]), (0, l.jsxs)("div", {
            className: g.calloutVoteForm,
            children: [(0, l.jsx)("button", {
              "aria-label": "upvote",
              className: [g.upvote, g.voteButton, m ? g.active : ""].join(" "),
              name: "upvote",
              onClick: () => u(!0),
              type: "button"
            }), (0, l.jsx)("button", {
              "aria-label": "downvote",
              className: [g.downvote, g.voteButton, !1 === m ? g.active : ""].join(" "),
              name: "downvote",
              onClick: () => u(!1),
              type: "button"
            })]
          })
        },
        u = e => {
          let {
            action_text: a,
            link: t,
            trackingData: s
          } = e;
          const {
            track: i
          } = (0, n.useGtmTrack)();
          return (0, l.jsx)("a", {
            href: t,
            target: "_blank",
            rel: "noopener noreferrer",
            children: (0, l.jsxs)("button", {
              className: g.calloutLink,
              type: "button",
              onClick: s ? () => i({
                ...s
              }) : () => {},
              children: [a, (0, l.jsx)(m, {
                className: g.calloutLinkIcon
              })]
            })
          })
        },
        p = e => {
          let {
            helperText: a,
            linkText: t,
            link: s,
            trackingData: i
          } = e;
          const {
            track: r
          } = (0, n.useGtmTrack)();
          return (0, l.jsxs)("div", {
            className: g.actionFooter,
            children: [a, t && " ", t && (0, l.jsx)("a", {
              href: s ?? "",
              onClick: () => r({
                ...i
              }),
              children: t
            })]
          })
        },
        b = (0, r.withTranslations)((e => {
          let {
            header: a,
            subheader: t,
            type: r,
            action_text: c,
            link: o,
            foreign_id: m = document.location.pathname,
            foreign_type: b = "url",
            className: k = "",
            actionFooterHelperText: v,
            actionFooterLinkText: h,
            actionFooterLink: y,
            trackingData: _ = {},
            actionFooterLinkTrackingData: x = {},
            t: N,
            ...j
          } = e;
          const {
            loggedIn: w
          } = (0, n.useRockstarUser)(), {
            track: S
          } = (0, n.useGtmTrack)(), T = `${document.location.origin}/auth/sc-auth-login?returnUrl=${window.location.pathname}`, {
            ref: z,
            inView: L
          } = (0, i.useInView)({
            threshold: .6
          }), [D, V] = (0, s.useState)(!1);
          let I;
          if ((0, s.useEffect)((() => {
              L && !D && (S({
                event: "page_section_impression",
                element_placement: `callout section - ${j?.sectionName??j?._memoq?.header}`
              }), V(!0))
            }), [L]), !a && !t) return null;
          switch (r) {
            case "vote":
              if (!w) {
                I = (0, l.jsx)(d.A, {
                  to: T,
                  className: g.calloutButton,
                  onClick: _ ? () => S({
                    ..._
                  }) : () => {},
                  children: "Log In"
                });
                break
              }
              I = (0, l.jsx)(f, {
                foreign_id: m,
                foreign_type: b
              });
              break;
            case "button":
              c && o && (I = (0, l.jsx)(d.A, {
                to: o,
                className: g.calloutButton,
                onClick: _ ? () => S({
                  ..._
                }) : () => {},
                children: c
              }));
              break;
            case "link":
              c && o && (I = (0, l.jsx)(u, {
                action_text: c,
                link: o,
                trackingData: _
              }));
              break;
            default:
              I = null
          }
          return (0, l.jsx)("div", {
            className: `${g.calloutContainer} ${k||""}`,
            ref: z,
            children: (0, l.jsxs)("div", {
              className: g.calloutSection,
              children: [(0, l.jsxs)("div", {
                className: [g.calloutHeaders, I ? g.calloutHeaderMargins : ""].join(" "),
                children: [a && (0, l.jsx)("h2", {
                  className: g.calloutHeader,
                  children: N(a)
                }), t && (0, l.jsx)("h3", {
                  className: g.calloutSubheader,
                  children: N(t)
                })]
              }), (0, l.jsxs)("div", {
                className: g.actionBlock,
                children: [I, v && (0, l.jsx)(p, {
                  helperText: v,
                  linkText: h,
                  link: y,
                  trackingData: x
                })]
              })]
            })
          })
        }))
    },
    21450: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => f
      });
      var s = t(71403),
        i = t(74401),
        r = t(81902),
        n = t(41136);
      const c = {
        deprecatedCarousel: "rockstargames-sites-legacyeb5df7b3d51dffc4d993ca7abce4e944",
        "swiper-scrollbar-disabled": "rockstargames-sites-legacyeb2dda6769a7c20a31e7996ff62e41f8",
        "swiper-horizontal": "rockstargames-sites-legacyb11093de3cb4f18ea2d59b8d4d1db44c",
        "swiper-vertical": "rockstargames-sites-legacyfa3209fdf995734a1aeeac2cc72cc1ea",
        renderedWithChildren: "rockstargames-sites-legacyc9f15e74b3166cd0db40501fcc70e868",
        panorama: "rockstargames-sites-legacyf2a7e77af5dff445e978fd575a567508",
        img: "rockstargames-sites-legacyf1d3d54c266a20fa0cbe9c342b0d98da",
        hideMobile: "rockstargames-sites-legacye70d5eaa273e4a0a40ee62a308491810",
        hideLarge: "rockstargames-sites-legacybace2af6c822ba7b36b53923629cba0f",
        imageAreaBg: "rockstargames-sites-legacyf4bb071e6dad07c75b78ea21269ca662",
        infinite_false: "rockstargames-sites-legacyd6c3d175b843462bf23a1a1f3af6b095",
        track: "rockstargames-sites-legacyb5ff781c4a96bf031e8e7f5e0c9af395",
        perico: "rockstargames-sites-legacybb97d296d17b7e801c6c0719a79463dd",
        dotsSlide: "rockstargames-sites-legacydd55a6f93254ed13542089c6f36e0048",
        siblings: "rockstargames-sites-legacya59cf4385528c371a13be9962b67131b",
        active: "rockstargames-sites-legacyaa5e195e0c7c6336929553314d52a896",
        "swiper-preloader-spin": "rockstargames-sites-legacyc05cc0faa8239c85cdc7d53c7e120e8e"
      };
      var o = t(26371),
        d = t(8999),
        l = t(46632);
      const m = e => {
          let {
            item: a
          } = e;
          return (0, l.jsxs)("div", {
            children: [(0, l.jsx)(d.A, {
              image: a?.image,
              badge: a?.badge ?? a?.image?.badge,
              badgeType: "badge3",
              role: a?.role ?? a?.image?.role,
              splitter: a?.splitter ?? a?.image?.splitter,
              type: a?.type,
              ariaLabel: a?.image?.ariaLabel ?? a.description,
              style: a?.style,
              className: (0, i.classList)(c.img, a?.className)
            }), (a?.title || a?.description) && (0, l.jsx)(o.A, {
              item: a
            })]
          })
        },
        g = e => {
          let {
            current: a,
            total: t
          } = e;
          return (0, l.jsx)("div", {
            className: "swiper-scrollbar",
            style: {
              "--current-slide": a,
              "--total-slides": t
            },
            children: (0, l.jsx)("div", {
              className: "swiper-scrollbar-drag"
            })
          })
        },
        f = e => {
          let {
            children: a,
            items: t = [],
            style: d = {},
            noInfiniteScroll: f = !1,
            className: u = "",
            renderTemplate: p = "standard",
            text: b,
            customSpaceBetween: k = null,
            centerSlides: v = !0,
            centeredSlidesBounds: h = !1
          } = e;
          const [y, _] = (0, s.useState)(0), x = (0, s.useMemo)((() => a && Array.isArray(a) ? a.map((() => (0, n.A)())) : null), [a]);
          if (!(t && 0 !== t?.length || a)) return null;
          const N = {
            0: {
              spaceBetween: k ?? 16
            },
            1024: {
              spaceBetween: k ?? 18
            },
            1920: {
              spaceBetween: k ?? 20
            },
            2560: {
              spaceBetween: k ?? 22
            }
          };
          return (0, l.jsxs)("div", {
            className: (0, i.classList)(c.deprecatedCarousel, c[p], c[`infinite_${!f}`], a ? c.renderedWithChildren : "", u),
            style: d,
            children: [(0, l.jsxs)(r.RC, {
              loop: !f,
              grabCursor: !0,
              centeredSlides: v,
              centerInsufficientSlides: v,
              slidesPerView: "auto",
              speed: 700,
              breakpoints: N,
              onUpdate: () => _(0),
              onActiveIndexChange: e => _(e?.realIndex ?? 0),
              centeredSlidesBounds: h,
              children: [(0, l.jsx)("div", {
                className: c.trackWrapper,
                children: (0, l.jsxs)("div", {
                  className: c.track,
                  children: [t?.map((e => (0, l.jsx)(r.qr, {
                    children: (0, l.jsx)(m, {
                      item: e
                    })
                  }, e.key))), a && a.map(((e, a) => e && (0, l.jsx)(r.qr, {
                    children: e
                  }, x && x[a])))]
                })
              }), (0, l.jsx)(g, {
                current: y,
                total: a ? a.length : t.length
              })]
            }), (b?.title || b?.description) && (0, l.jsx)(o.A, {
              item: b
            })]
          })
        }
    },
    66325: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => _
      });
      var s = t(71403),
        i = t(89779),
        r = t(40207),
        n = t(42756),
        c = t(90837),
        o = t(7644),
        d = t(82275),
        l = t(44338),
        m = t(19169),
        g = t(67245),
        f = t(47483);
      const u = {
          ps: c,
          ps3: o,
          ps4: d,
          ps5: l,
          switch: t(73870),
          xbox: m,
          xboxone: f,
          xboxseriesxs: g,
          xbox360: t(6754),
          pc: t(96165),
          play: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/59c4aadbdbfcdb8d06d7caa54bdc9f60.svg",
          applestore: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/38a6e85fa4a378c5620efa9fde8ff223.svg",
          googleplay: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/ca4e52b102306a186549cfd712b1c8f8.svg",
          questionMark: t(38375),
          default: ""
        },
        p = e => u[e] || null,
        b = {
          pillBtn: "rockstargames-sites-legacybf9c11ff862c409ecb412254932a66d0",
          selected: "rockstargames-sites-legacye07887131c72b6346c408895888f4fa7",
          "clr-button": "rockstargames-sites-legacyeb57c2501d6b6fff19ea12014712acae",
          lgMax: "rockstargames-sites-legacye8361180f27f9c36731c815805c69094",
          smMax: "rockstargames-sites-legacyc392730b2e06f70a3a1bd646684859e8",
          cta: "rockstargames-sites-legacybc76de01fdd1260e254c482984d2a924",
          label: "rockstargames-sites-legacyb81011c72b601075ebe54d7ceaa7d2d8",
          primary: "rockstargames-sites-legacydbcf41d5c23e0eaf5089021f4d41c121",
          btnContent: "rockstargames-sites-legacyf5e832587747dc414e10ab8e0bd843a9",
          btnIcon: "rockstargames-sites-legacycb0ad8d8dd93218dc12091b883767967",
          xbox: "rockstargames-sites-legacyf591c5444c08121b0514f0c675da1479",
          xboxone: "rockstargames-sites-legacye5124beff89c5b4093a4029a9fee3367",
          xboxseriesxs: "rockstargames-sites-legacye52c94654eb462a8e65aa7607f5e21b5",
          ps: "rockstargames-sites-legacyc53b78d3d062ee8d58f63a0acb1df137",
          ps4: "rockstargames-sites-legacyf4a27aba1505f555d7cd8c920645245a",
          ps5: "rockstargames-sites-legacyb5826d3700572b9bf36874e34d5c2a22",
          pc: "rockstargames-sites-legacyc7ee0cfc54be00a8b152c47997ce76ac",
          switch: "rockstargames-sites-legacya9b276d1c119e9cd14df54c4459197b0",
          googleplay: "rockstargames-sites-legacya4ccd0de63b104d4aa48c8c3176618f3",
          platformIcon: "rockstargames-sites-legacyc4ab0a89b65025cfe63b851116fb3a32",
          lgMin: "rockstargames-sites-legacyc4a99972e5e512395e6fca5beaec1904",
          applestore: "rockstargames-sites-legacya13111cbe8acbd75f62da1c53de2c3df",
          icon: "rockstargames-sites-legacyc7a3f1a29594b307606d15e6827f63f9",
          "icon-left": "rockstargames-sites-legacybd623c6039c3f4122936775ed4214bd4",
          "icon-right": "rockstargames-sites-legacyc79040e66c1f48e302291d8cf1335742",
          disabled: "rockstargames-sites-legacyd87326174de12b895401f738a23b177a"
        };
      var k = t(72862),
        v = t.n(k),
        h = t(46632);
      const y = e => {
          let {
            platform: a = "",
            altText: t
          } = e;
          const s = a ? p(a) : null,
            i = s ? (0, h.jsx)("img", {
              className: b.platformIcon,
              src: s,
              alt: t
            }) : null;
          return (0, h.jsx)("span", {
            className: [b.btnContent, b.platformButton].join(" "),
            children: i
          })
        },
        _ = e => {
          let {
            children: a,
            href: t,
            style: c,
            content: o,
            variant: d = null,
            size: l = "medium",
            icon: m,
            iconPosition: g = "none",
            iconStyle: f,
            badge: u,
            badgeStyle: k,
            platformItem: _,
            gtm: x = {},
            disabled: N,
            reloadDocument: j = !1,
            className: w
          } = e;
          const {
            track: S
          } = (0, r.useGtmTrack)(), T = (0, n.useDataLayer)(), z = o ?? a, L = (0, n.findPlatform)(_)?.friendlyName, D = (0, s.useMemo)((() => {
            const e = window.location.hostname;
            let a;
            try {
              a = new URL(t)?.hostname
            } catch (t) {
              a = e
            }
            return e === a
          }), [t]), V = (0, s.useCallback)((() => {
            N || S({
              event: "cta_other",
              text: z ?? void 0,
              ...T,
              ...x,
              link_url: t ?? void 0
            })
          }), [x, t, T]), I = () => m ? (0, h.jsx)("span", {
            className: [b.icon, `icon-${g}`].join(" "),
            style: f,
            children: (0, h.jsx)("img", {
              className: b.btnIcon,
              src: p(m) || "",
              alt: `${m} icon`
            })
          }) : null;
          return (0, h.jsx)(i.Link, {
            to: t,
            target: D ? "_self" : "_blank",
            className: v()(b.cta, "platform" === d && _ ? b[_] : "", N ? b.disabled : "", w),
            style: c,
            "data-variant": d,
            "data-size": l,
            onClick: V,
            "aria-label": z,
            reloadDocument: j,
            children: "platform" === d && _ ? (0, h.jsx)(y, {
              platform: _,
              altText: L || z
            }) : (0, h.jsxs)("div", {
              className: b.btnContent,
              children: ["left" === g && I(), (0, h.jsx)("span", {
                className: b.label,
                children: z
              }), "right" === g && I(), u ? (0, h.jsx)("span", {
                className: b.badge,
                style: k,
                children: u
              }) : null]
            })
          })
        }
    },
    26371: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => l
      });
      var s = t(74401),
        i = t(2024),
        r = t(63672),
        n = t(63303);
      const c = "rockstargames-sites-legacyfa6885b15a718acb24f48949c52e31f1";
      var o = t(46632);
      const d = e => {
          let {
            to: a,
            children: t
          } = e;
          return a ? (0, o.jsx)("a", {
            href: a,
            target: "_blank",
            rel: "noreferrer",
            children: t
          }) : t
        },
        l = e => {
          let {
            item: a,
            className: t = ""
          } = e;
          return (0, o.jsxs)("div", {
            className: (0, s.classList)("rockstargames-sites-legacyef9e6981551ac5ce250ebff8b18d7a29", t),
            children: [a.title && (0, o.jsx)(d, {
              to: a?.href ?? a?.to,
              children: (0, o.jsx)("h3", {
                children: a.title
              })
            }), Array.isArray(a?.description?.content) ? a.description.content?.map(((e, a) => e?.unorderedList ? (0, o.jsx)(r.A, {
              columns: e.unorderedList.columns ?? null,
              style: {
                "--unordered-list-padding": "var(--grid-gap-static-sm)",
                "--unordered-list-margin-bottom": ".5rem"
              },
              noImg: !0,
              list: e.unorderedList.list
            }, a) : e?.image ? (0, o.jsx)(i.A, {
              image: e.image,
              className: e?.className,
              ariaLabel: e.image?.ariaLabel
            }, a) : e?.separator ? (0, o.jsx)("div", {
              style: {
                margin: `${e.separator.spacing} 0`
              },
              children: (0, o.jsx)(n.A, {})
            }, a) : (0, o.jsx)("p", {
              children: (0, o.jsx)("span", {
                className: c,
                dangerouslySetInnerHTML: {
                  __html: e
                }
              })
            }, a))) : (0, o.jsx)("span", {
              className: c,
              dangerouslySetInnerHTML: {
                __html: a.description
              }
            })]
          })
        }
    },
    39695: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => b
      });
      var s = t(71403),
        i = t(89779),
        r = t(80791),
        n = t(72862),
        c = t.n(n),
        o = t(74401),
        d = t(42756),
        l = t(40207);
      const m = {
          open: {
            opacity: 0,
            transition: {
              ease: "easeOut",
              duration: .3
            }
          },
          closed: {
            opacity: 1,
            transition: {
              ease: "easeOut",
              duration: .9,
              delay: .3
            }
          }
        },
        g = {
          open: {
            "--cta-border-color": "var(--white-15)",
            "--cta-background-color": "rgba(255,255,255,.1)",
            "--cta-background-color-noBlur": "var(--black-100)",
            gridGap: "var(--grid-gap-sm)",
            "--btn-hover-bg-color": "var(--black-15)",
            "--btn-hover-bg-color-noBlur": "var(--black-100)",
            "--btn-hover-font-color": "var(--white-100)",
            "--btn-hover-border-color": "var(--white-15)"
          },
          closed: {
            "--cta-border-color": "var(--white-100)",
            "--cta-background-color": "var(--black-15)",
            "--cta-background-color-noBlur": "var(--black-15)",
            gridGap: 0,
            transition: {
              type: "spring",
              stiffness: 650,
              damping: 45
            },
            transitionEnd: {
              "--btn-hover-bg-color": "var(--white-100)",
              "--btn-hover-bg-color-noBlur": "var(--white-100)",
              "--btn-hover-font-color": "var(--black-100)",
              "--btn-hover-border-color": "var(--white-100)"
            }
          }
        },
        f = {
          pillBtn: "rockstargames-sites-legacyba37d7130b54bd53bd309b0cd04717ff",
          selected: "rockstargames-sites-legacyc9c0bba52c010c4e3571f2702eef944b",
          container: "rockstargames-sites-legacybfcd1a0671c127c9135d8c2feac75c34",
          content: "rockstargames-sites-legacya1cf623c9dd51dd05772a395d8311dac",
          expandedButton: "rockstargames-sites-legacyf692df3414cf4d587df1739702e52732",
          unexpandedButton: "rockstargames-sites-legacyba4683b82274b0f8ca98f97fd2b0a1c9",
          buttonText: "rockstargames-sites-legacyc2fb2fb5ec39a5c3b3c14ee6c0505b53",
          expandedArea: "rockstargames-sites-legacydd25aa78f935c7d4cafdb1c8bc6d7932",
          closeButton: "rockstargames-sites-legacyc559c930e0a5a7caa72b3de9a3362a0a",
          platformButtons: "rockstargames-sites-legacyd6bfc47d3110920d77ea2e70dac9c898",
          platformButton: "rockstargames-sites-legacyb04a9bd68b598682a5dbe99dd1a2f06d",
          xbox: "rockstargames-sites-legacyfe4a687dfc69ef746fcbe4184c7a9574",
          xboxone: "rockstargames-sites-legacyb1f46a1ff640d7398e7736e814a5ed8f",
          xboxseriesxs: "rockstargames-sites-legacye23b6f1412ea1ecb8a616b4f25d2888d",
          ps: "rockstargames-sites-legacye0b107bda3c03c1e82c94195bfbc055b",
          ps4: "rockstargames-sites-legacydcf3078cbde57db42e66e6ba4c269fbe",
          ps5: "rockstargames-sites-legacye047116842d7619f0e04a3c9b6dbec13",
          pc: "rockstargames-sites-legacydaa32798c37b9055cd280b838972e63e",
          applestore: "rockstargames-sites-legacydc4069c520d30eda3239cc1de09917ad",
          googleplay: "rockstargames-sites-legacye36f6e05f08b4bd9edef1950618493ca",
          switch: "rockstargames-sites-legacyae7bc564778d8af6cf5f8a0491ef7dc8"
        };
      var u = t(46632);
      const p = e => {
          let {
            buttonText: a = "",
            link: s = "",
            platform: r = "",
            target: n = null,
            onClick: c
          } = e;
          const o = n ?? (s.startsWith(document.location.origin) ? "_self" : "_blank"),
            d = [f.platformButton, f[r]].join(" "),
            l = r ? t(52917)(`./${r}.svg`) : null,
            m = (0, u.jsxs)(u.Fragment, {
              children: [l ? (0, u.jsx)("img", {
                src: l,
                alt: a
              }) : "", !l && (0, u.jsx)("div", {
                className: f.buttonText,
                children: a
              })]
            });
          return s.startsWith("http") ? (0, u.jsx)("a", {
            href: s,
            className: d,
            target: o,
            onClick: c,
            "aria-label": a,
            children: m
          }) : (0, u.jsx)(i.NavLink, {
            className: d,
            onClick: c,
            to: s,
            "aria-label": a,
            children: m
          })
        },
        b = e => {
          let {
            variant: a,
            buttonText: i = "Subscribe",
            buttonClassName: n,
            className: b,
            children: k,
            platformsAndLinks: v = [],
            trackingType: h = "buy",
            trackingParent: y,
            target: _ = null,
            trackingOId: x = null
          } = e;
          const [N, j] = (0, s.useState)(!1), [w, S] = (0, s.useState)(!1), [T, z] = (0, s.useState)(200), {
            track: L
          } = (0, l.useGtmTrack)(), D = (0, s.useRef)(null), V = (0, s.useRef)(N), I = (0, s.useRef)(null);
          (0, s.useEffect)((() => {
            V.current = N
          }), [N]), (0, s.useEffect)((() => {
            const e = e => {
              V && !D?.current?.contains(e.target) && j(!1)
            };
            return document.addEventListener("click", e), () => {
              document.removeEventListener("click", e)
            }
          }), []), (0, s.useEffect)((() => {
            if (D?.current) {
              const e = 1e3 * Number(getComputedStyle(D.current).getPropertyValue("--expandingPlatformButton-expandDuration").replace("ms", "").replace("s", ""));
              z(isNaN(e) ? 200 : e)
            }
          }), []), (0, s.useEffect)((() => {
            w && setTimeout((() => {
              S(!1)
            }), T)
          }), [w]);
          const C = e => {
            let {
              href: a,
              platform: t
            } = e;
            return () => {
              L({
                element_placement: y,
                event: "cta_store_link",
                link_url: a,
                text: t
              })
            }
          };
          return (0, u.jsxs)("div", {
            className: (0, o.classList)(f.container, b),
            children: [(0, u.jsx)(r.motion.div, {
              className: f.content,
              animate: N ? "open" : "close",
              variants: m,
              "aria-hidden": !!N,
              children: k
            }), (0, u.jsxs)(r.motion.div, {
              "data-variant": a,
              "data-animating": w,
              className: c()(N ? f.expandedButton : f.unexpandedButton),
              animate: N ? "open" : "closed",
              variants: g,
              initial: !1,
              ref: D,
              children: [(0, u.jsx)(r.motion.button, {
                className: c()(f.buttonText, n),
                "aria-expanded": N,
                onClick: () => {
                  if (S(!0), j(!N), !N) switch (h) {
                    case "select_platform":
                      L({
                        element_placement: y,
                        event: "select_platform",
                        text: i?.toLowerCase() ?? "subscribe"
                      });
                      break;
                    case "link_account":
                      L({
                        element_placement: y,
                        event: "cta_link_account",
                        o_id: x,
                        text: i?.toLowerCase()
                      });
                      break;
                    case "buy":
                      L({
                        element_placement: y,
                        event: "cta_buy",
                        text: i?.toLowerCase() ?? "subscribe"
                      });
                      break;
                    case "store_link":
                      L({
                        element_placement: y,
                        event: "cta_store_link",
                        text: i?.toLowerCase()
                      });
                      break;
                    case "other":
                      L({
                        element_placement: y,
                        event: "cta_other",
                        text: i?.toLowerCase()
                      })
                  }
                },
                tabIndex: N ? -1 : 0,
                children: "string" == typeof i ? i : "Subscribe"
              }), (0, u.jsx)("div", {
                className: f.expandedArea,
                ref: I,
                "data-animate": N ? "open" : "closed",
                "aria-hidden": !N,
                style: {
                  height: N ? I?.current?.scrollHeight : 0
                },
                children: (0, u.jsxs)("div", {
                  children: [(0, u.jsx)("button", {
                    className: f.closeButton,
                    onClick: () => {
                      j(!1), S(!0), L({
                        element_placement: y,
                        event: "cta_other",
                        text: "close expanding platform button"
                      })
                    },
                    "aria-label": "Close",
                    tabIndex: N ? 0 : -1,
                    children: (0, u.jsx)("img", {
                      src: t(45537),
                      alt: "Close"
                    })
                  }), (0, u.jsx)("div", {
                    className: f.platformButtons,
                    children: v.length ? v.map((e => (0, u.jsx)(p, {
                      buttonText: e.buttonText ?? (0, d.findPlatform)(e.platform)?.friendlyName ?? "",
                      link: e.href,
                      platform: e.platform,
                      onClick: C(e),
                      target: _,
                      tabIndex: N ? 0 : -1
                    }, `${e.key}-${e.href}-${e.platform}`))) : ""
                  })]
                })
              })]
            })]
          })
        }
    },
    14522: (e, a, t) => {
      "use strict";
      t.d(a, {
        H: () => l,
        r: () => o
      });
      var s = t(71403),
        i = t(49948),
        r = t(40207),
        n = t(46632);
      const c = e => {
          let {
            impressionTracking: a,
            gtm: t = {},
            children: s
          } = e;
          return a?.shouldTrack ? (0, n.jsx)(l, {
            threshold: a?.threshold,
            gtm: t,
            children: s
          }) : s
        },
        o = (e, a) => t => ((e, a, t) => (0, n.jsx)(c, {
          impressionTracking: t?.impressionTracking,
          gtm: t?.gtm,
          children: (0, n.jsx)(e, {
            ...a
          })
        }))(e, t, a),
        d = {
          event: "page_section_impression",
          element_placement: null
        },
        l = e => {
          let {
            threshold: a = .6,
            children: t,
            gtm: c = {}
          } = e;
          const {
            track: o
          } = (0, r.useGtmTrack)(), {
            ref: l,
            inView: m
          } = (0, i.useInView)({
            threshold: a,
            trackVisibility: !0,
            delay: 100
          }), [g, f] = (0, s.useState)(!1);
          return (0, s.useEffect)((() => {
            m && !g && (o({
              ...d,
              ...c
            }), f(!0))
          }), [m, l]), (0, n.jsx)("section", {
            ref: l,
            children: t
          })
        }
    },
    84079: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => k
      });
      var s = t(71403),
        i = t(58407),
        r = t(96717),
        n = t(42756),
        c = t(49948),
        o = t(40207),
        d = t(60285),
        l = t(47252),
        m = t(20066);
      const g = {
          rating: "rockstargames-sites-legacya1271bbed316bf567eb67e78d2143808",
          withDescriptors: "rockstargames-sites-legacycba248edc2520d3f1ad195a8495dc1f8",
          withOutDescriptors: "rockstargames-sites-legacyff919f7a60b854473b61075a671deb6a",
          text: "rockstargames-sites-legacyd47cd2b7c7415cb44cddef00b1c9b35f"
        },
        f = (0, r.defineMessages)({
          components_ratings_link_alt: {
            id: "components_ratings_link_alt",
            defaultMessage: "Rating: {rating}. Click here learn more about rating systems"
          }
        });
      var u = t(85913),
        p = t(46632);
      const b = void 0 !== u.GameData ? u.GameData : GameDataDefault;
      (0, n.importAll)(t(4905));
      const k = (0, l.A)((0, r.withIntl)((e => {
        let {
          descriptors: a = null,
          footer: l = null,
          href: m,
          img: u = null,
          titleSlug: k = null,
          style: v = {},
          className: h
        } = e;
        const [y, _] = (0, s.useState)(!1), {
          inView: x
        } = (0, c.useInView)({
          threshold: .6
        }), [N, j] = (0, s.useState)({
          ratingDescriptors: a,
          ratingFooter: l,
          ratingImg: u,
          ratingUrl: m
        }), {
          track: w
        } = (0, o.useGtmTrack)(), S = (0, r.useIntl)(), {
          data: T
        } = (0, i.useQuery)(b, {
          variables: {
            titleSlug: k
          },
          skip: !k
        });
        if ((0, s.useEffect)((() => {
            T && j(T?.game)
          }), [T]), (0, s.useEffect)((() => {
            x && !y && N.img_rating && (w({
              event: "page_section_impression",
              element_placement: "rating"
            }), _(!0))
          }), [x]), !N.ratingImg) return null;
        const z = !!N.ratingDescriptors;
        return (0, p.jsxs)("div", {
          className: [g.rating, z ? g.withDescriptors : g.withOutDescriptors, h || ""].join(" "),
          style: (0, n.safeStyles)(v),
          children: [(0, p.jsx)(d.A, {
            to: N.ratingUrl,
            target: "_blank",
            children: (0, p.jsx)("img", {
              alt: S.formatMessage(f.components_ratings_link_alt, {
                rating: (L = N.ratingImg, L.replace(/_/g, " ").split(".")[0].toUpperCase())
              }),
              src: t(73983)(`./${N.ratingImg}`)
            })
          }), z && (0, p.jsxs)("div", {
            className: g.text,
            children: [(0, p.jsx)("p", {
              className: g.descriptors,
              dangerouslySetInnerHTML: {
                __html: N?.ratingDescriptors?.split(/<br\s?\/?>/).join(", ") || ""
              }
            }), N.ratingFooter && (0, p.jsx)("hr", {}), N.ratingFooter && (0, p.jsx)("p", {
              dangerouslySetInnerHTML: {
                __html: N.ratingFooter.replace(/ \//g, ", ")
              }
            })]
          })]
        });
        var L
      }), m))
    },
    52983: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => r
      });
      const s = {
        skeleton: "rockstargames-sites-legacyf963a1ae95f7f5ac2c5192c3f357b6dc",
        pulse: "rockstargames-sites-legacye00ed88d692bbfc1a301dcfc61a077a9",
        gen9Hero: "rockstargames-sites-legacydb0b80177710d337d93bddb97b8a7dea"
      };
      var i = t(46632);
      const r = e => {
        let {
          skeleton: a
        } = e;
        return a ? (0, i.jsx)("div", {
          className: [s.skeleton, s[a]].join(" ")
        }) : null
      }
    },
    62550: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => n
      });
      var s = t(71403),
        i = t(64544),
        r = t(46632);
      const n = e => {
        let {
          children: a,
          ...t
        } = e;
        const [n, c] = (0, s.useState)(!1);
        return (0, r.jsx)(i.zb, {
          ...t,
          onReady: () => {
            document.fonts.ready.then((() => {
              c(!0)
            }))
          },
          children: a
        })
      }
    },
    22545: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => g
      });
      var s = t(71403),
        i = t(80791),
        r = t(40207),
        n = t(81902),
        c = t(89269);
      const o = "rockstargames-sites-legacyeca98eb0b5b84a0c9a2e6d952545a2d5",
        d = "rockstargames-sites-legacyd3d0b4ecd3bddba96c73f49fcca34ed8";
      var l = t(46632);
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
        g = e => {
          let {
            title: a = "thumbnail gallery",
            thumbsPerView: t = 3,
            loop: g = !1,
            navigation: f = !1,
            slideChildren: u = [],
            variants: p = {
              parent: void 0,
              main: void 0,
              thumbs: void 0
            },
            transition: b = {
              parent: void 0,
              main: void 0,
              thumbs: void 0
            }
          } = e;
          const {
            track: k
          } = (0, r.useGtmTrack)(), [v, h] = (0, s.useState)([c.U1, c.WO, c.dK]), [y, _] = (0, s.useState)(null), [x, N] = (0, s.useState)(null);
          return (0, s.useEffect)((() => {
            const e = [c.U1, c.WO, c.dK];
            f && e.push(c.Vx), h(e)
          }), [f]), (0, s.useEffect)((() => {
            if (!u) return;
            const e = u.map(((e, a) => (0, l.jsx)(n.qr, {
              children: e
            }, Symbol(a).toString())));
            N(e)
          }), [u]), x ? (0, l.jsxs)(i.motion.div, {
            className: "rockstargames-sites-legacyd4f245838b94234f21463a08a8112910",
            variants: p.parent,
            transition: b.parent,
            initial: "initial",
            animate: "animate",
            children: [(0, l.jsx)(i.motion.div, {
              className: o,
              variants: p.main,
              transition: b.main,
              initial: "initial",
              animate: "animate",
              children: (0, l.jsx)(n.RC, {
                loop: g,
                navigation: f,
                pagination: {
                  clickable: !0
                },
                thumbs: {
                  swiper: y
                },
                modules: v,
                breakpoints: m,
                className: o,
                onSlideNextTransitionEnd: () => {
                  k({
                    event: "carousel_next",
                    element_placement: a?.toLowerCase() ?? ""
                  })
                },
                onSlidePrevTransitionEnd: () => {
                  k({
                    event: "carousel_previous",
                    element_placement: a?.toLowerCase() ?? ""
                  })
                },
                onSlideChangeTransitionEnd: () => {
                  k({
                    event: "carousel_swipe",
                    element_placement: a?.toLowerCase() ?? ""
                  })
                },
                children: x
              })
            }), (0, l.jsx)(i.motion.div, {
              className: d,
              variants: p.thumbs,
              transition: b.thumbs,
              initial: "initial",
              animate: "animate",
              children: (0, l.jsx)(n.RC, {
                threshold: 50,
                onSwiper: _,
                loop: g,
                breakpoints: m,
                slidesPerView: t,
                freeMode: !0,
                watchSlidesProgress: !0,
                modules: v,
                className: d,
                children: x
              })
            })]
          }) : null
        }
    },
    25180: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => l,
        X: () => d
      });
      var s = t(58407),
        i = t(74401),
        r = t(47252),
        n = t(52983),
        c = t(50048),
        o = t(46632);
      const d = e => {
          let {
            id: a = null,
            ids: t = null,
            setTitleDataPath: i = null,
            sync: r = !1
          } = e;
          const n = t ?? [a],
            {
              data: o
            } = (0, s.useQuery)(c.TinaModulesInfo, {
              variables: {
                ids: n,
                sync: r
              },
              setTitleDataPath: i,
              skip: !n.length
            });
          return o?.tinaModulesInfo ?? null
        },
        l = (0, r.A)((e => {
          let {
            components: a = {},
            id: t = null,
            ids: s = null,
            skeleton: r
          } = e;
          const c = d({
            id: t,
            ids: s
          });
          if (!c) return (0, o.jsx)(n.A, {
            skeleton: r
          });
          const l = c?.[0]?.tina;
          return l ? (0, o.jsx)(o.Fragment, {
            children: c.map(((e, t) => {
              let {
                tina: s
              } = e;
              return (0, o.jsx)(i.TinaParser, {
                components: a,
                tina: s,
                componentProps: {
                  tinaModulesInfo: c
                }
              }, t)
            }))
          }) : null
        }))
    },
    71080: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => i
      });
      var s = t(46632);
      const i = e => {
        let {
          text: a,
          style: t
        } = e;
        return (0, s.jsx)("div", {
          className: "rockstargames-sites-legacyb61bd7f274fd6d93c4bf33a9284b6b67",
          style: t,
          children: a
        })
      }
    },
    52328: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => o
      });
      var s = t(2024),
        i = t(62550);
      const r = {
        badge: "rockstargames-sites-legacye279e2cebfa338f34b03fd732416e836",
        badgeSizeUpdate: "rockstargames-sites-legacyd7362a3e27ccaad9d2aadd2f31691340",
        badge2: "rockstargames-sites-legacyd697f4a5f7c876d5e540a96da1e0ca3a",
        badge3: "rockstargames-sites-legacye1bba3cd4554abbb48a030af24bbada5"
      };
      var n = t(46632);
      const c = e => {
          let {
            wrapper: a,
            children: t,
            role: s,
            splitter: i
          } = e;
          return i || s ? a(t) : t
        },
        o = e => {
          let {
            badge: a,
            badgeType: o,
            role: d,
            splitter: l
          } = e;
          const m = [];
          l ? a.split(l).map(((e, a) => m.push(e))) : m.push(a);
          let g = 100;
          return 2 == m.length && m[1].length < 4 && "off" !== m[1].toLowerCase() && 45, (0, n.jsxs)(c, {
            splitter: l,
            role: d,
            wrapper: e => (0, n.jsx)("div", {
              className: `${r.badge} ${o?r[o]:""} `,
              children: e
            }),
            children: [(0, n.jsx)(n.Fragment, {
              children: d && (0, n.jsx)(s.A, {
                image: {
                  alt: d,
                  desktop: t(45628)(`./${d}.png`)
                }
              })
            }), (0, n.jsx)(i.A, {
              className: `${l||d?"":r.badge} ${o?r[o]:""}`,
              min: 8,
              max: 1e3,
              mode: l || d ? "single" : "multi",
              children: m[0]
            }), (0, n.jsx)(n.Fragment, {
              children: m.shift() && l && m.length >= 1 && (0, n.jsx)(i.A, {
                min: 8,
                max: 1e3,
                mode: "single",
                forceSingleModeWidth: !0,
                children: m.join(" ")
              })
            })]
          }, "badge-wrapper")
        }
    },
    8999: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => d
      });
      var s = t(74401),
        i = t(42756),
        r = t(52328),
        n = t(2024);
      var c = t(46632);
      const o = e => {
          let {
            hero: a,
            children: t
          } = e;
          return a ? (0, c.jsx)("div", {
            className: "rockstargames-sites-legacyefc561ad30f5dfe75c79d939737650dc",
            children: t
          }) : t
        },
        d = e => {
          let {
            badge: a = null,
            badgeType: t,
            discountTxt: d,
            splitter: l,
            image: m,
            style: g,
            className: f = "",
            attributes: u = {},
            role: p,
            hero: b = !1
          } = e;
          return (0, c.jsx)(o, {
            hero: b,
            children: (0, c.jsx)("figure", {
              children: (0, c.jsxs)("div", {
                className: (0, s.classList)("rockstargames-sites-legacycab262c98c7f5bb3e982d9b075b3c2a8", b ? "rockstargames-sites-legacycefd6d8859aeec1057caed28caa160c3" : "", u?.hiddenMobile ? "hiddenMobile" : "", u?.hiddenLarge ? "hiddenLarge" : "", u?.className, f),
                style: (0, i.safeStyles)({
                  ...g,
                  ...u?.style
                }),
                ...u,
                children: [(0, c.jsx)(n.A, {
                  image: m,
                  className: f
                }), (m?.badge || m?.discountTxt || a || d) && (0, c.jsx)(r.A, {
                  badge: m?.discountTxt ?? m?.badge ?? a ?? d,
                  badgeType: t,
                  splitter: m?.splitter ?? l,
                  role: m?.role ?? p
                }), m?.caption && (0, c.jsx)("figcaption", {
                  dangerouslySetInnerHTML: {
                    __html: m.caption
                  }
                })]
              })
            })
          })
        }
    },
    22778: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => n
      });
      var s = t(60285);
      const i = {
        button: "rockstargames-sites-legacye056494c33cff1fe89431f279fdb6b9a",
        secondary: "rockstargames-sites-legacyd340cf27f380a4347994e59544432eb3"
      };
      var r = t(46632);
      const n = e => {
        let {
          className: a = "",
          children: t,
          context: n = "",
          to: c,
          onClick: o,
          target: d = "_self",
          ...l
        } = e;
        const m = [i.button, i[n], a].join(" ");
        return c ? (0, r.jsx)(s.A, {
          ...l,
          to: c,
          className: m,
          onClick: o,
          target: d,
          children: t
        }) : (0, r.jsx)("button", {
          ...l,
          type: "button",
          className: m,
          onClick: o,
          children: t
        })
      }
    },
    62811: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => o
      });
      var s = t(89779);
      const i = {
        pillBtn: "rockstargames-sites-legacyb59962d0e68ccd73b5ee2e571528d469",
        selected: "rockstargames-sites-legacyf5c57dad202e0d6ff855d5a4aca2c804",
        plusButton: "rockstargames-sites-legacycffaf489342637258d28f9b3b718836a",
        small: "rockstargames-sites-legacyb8abf927f0ba0af0d8ac0e9c77690d34",
        btnText: "rockstargames-sites-legacye6e56461bfc2e426c4abc5451cd17284",
        btnTexticon: "rockstargames-sites-legacycef9f9ce913d167a1fe2e7118a407cdd",
        whiteBtn: "rockstargames-sites-legacyb257e0629b9f8e101791d7a948ed15be",
        blackBtn: "rockstargames-sites-legacycb03bccaee79394858682d2ce4d08253",
        transparentBtn: "rockstargames-sites-legacyd0460159a17533d4d23686d7dca76794",
        iconBtn: "rockstargames-sites-legacyac61186c3c22346c9a4ee2cd2820d341",
        link: "rockstargames-sites-legacyc5920e56149b82f20f4db2ad9d397495",
        xboxone: "rockstargames-sites-legacya7057f2e6d398341f57bc462716d0508",
        xboxseriesxs: "rockstargames-sites-legacya693ab5879f34d7dea1737d3172ed4e4",
        ps4: "rockstargames-sites-legacya029ff88fc9aef470aaeef8053f90436",
        ps5: "rockstargames-sites-legacye25638751cf3e7267db23c6a401fcc36",
        pc: "rockstargames-sites-legacye03d92653f19a7ae3c4b3d5137bc9909"
      };
      var r = t(46632);
      const n = e => {
          let {
            children: a,
            className: t,
            onClick: s,
            style: i,
            ariaLabel: n
          } = e;
          return (0, r.jsx)("button", {
            className: t,
            onClick: s,
            style: i,
            type: "button",
            "aria-label": n,
            children: a
          })
        },
        c = e => {
          let {
            children: a,
            className: t,
            onClick: i,
            style: n,
            to: c,
            ariaLabel: o
          } = e;
          return (0, r.jsx)(s.NavLink, {
            className: t,
            onClick: i,
            style: n,
            to: c,
            "aria-label": o,
            children: a
          })
        },
        o = e => {
          let {
            btnColor: a = "#fff",
            className: t = "",
            consoleBtn: s,
            icon: o = "",
            img: d,
            labelColor: l = "#000",
            onClick: m,
            secondText: g,
            size: f,
            text: u,
            to: p,
            type: b = "",
            ariaLabel: k
          } = e;
          const v = [i.plusButton, i[b] ?? "", i[f] ?? "", i[s] ?? "", t].join(" "),
            h = {
              "--hvr-color": a ?? l,
              "--hvr-bg-color": l ?? a,
              "--hvr-border-color": a ?? l
            },
            y = (0, r.jsxs)(r.Fragment, {
              children: [d ? (0, r.jsx)("img", {
                src: d,
                alt: ""
              }) : "", (0, r.jsxs)("div", {
                className: i.btnText,
                icon: o,
                children: [u, g ? (0, r.jsx)("span", {
                  children: g
                }) : ""]
              })]
            });
          if (p) {
            if (p.startsWith("http")) {
              const e = p.startsWith(document.location.origin) ? "_self" : "_blank";
              return (0, r.jsx)("span", {
                onClick: m,
                onKeyDown: m,
                className: v,
                role: "button",
                "aria-label": k,
                tabIndex: 0,
                children: (0, r.jsx)("a", {
                  href: p,
                  target: e,
                  children: y
                })
              })
            }
            return (0, r.jsx)(c, {
              className: v,
              onClick: m,
              style: {
                ...h
              },
              to: p,
              ariaLabel: k,
              children: y
            })
          }
          return (0, r.jsx)(n, {
            className: v,
            onClick: m,
            style: {
              ...h
            },
            ariaLabel: k,
            children: y
          })
        }
    },
    28606: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => c
      });
      var s = t(26398),
        i = t(28089),
        r = t(42756);
      var n = t(46632);
      const c = e => {
        let {
          children: a,
          context: t = null,
          game: c,
          image: o = {},
          style: d = {},
          template: l = null,
          theme: m = null,
          reversedOnMobile: g = !1,
          className: f = "",
          id: u = null
        } = e;
        const p = (0, i.useImageParser)(o ?? {}),
          b = {
            ...d
          };
        if (p?.src?.desktop) {
          const e = (o?.style && o?.style["--background-image-size"]) ?? "var(--grid-background-size, cover)",
            a = (o?.style && o?.style["--background-image-repeat"]) ?? "var(--grid-background-repeat, no-repeat)",
            t = `var(--grid-background-position, center)/${e??"cover"}`;
          if (b.background = `url(${p?.src?.desktop}) ${a} ${t}`, o?.style && o?.style["--linear-gradient"]) b.background = `linear-gradient(${o?.style["--linear-gradient"]}), url(${p?.src?.desktop}) ${a} ${t}`;
          else if (o?.style && o?.style["--gradient-height"]) {
            const e = o?.style["--gradient-height"] || "3",
              s = o?.style["--gradient-start-color"] || "var(--background-color, transparent)",
              i = o?.style["--gradient-end-color"] || "var(--background-color, transparent)";
            b.background = `linear-gradient(180deg, ${s}, transparent ${e}%, transparent ${100-e}%, ${i}), url(${p?.src?.desktop}) ${a} ${t}`
          }
        }
        return (0, n.jsx)("div", {
          id: u,
          className: (0, s.classList)("rockstargames-sites-legacyf42b4606ed4a5b16b7647ad7b7eb229d", g ? "rockstargames-sites-legacyb00444166ce6346d7ca364a75a335ecc" : "", f),
          "data-game": "community" === l ? null : c,
          style: (0, r.safeStyles)(b),
          "data-context": t,
          "data-template": l,
          "data-theme": m,
          children: a
        })
      }
    },
    87839: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => o
      });
      var s = t(79429),
        i = t.n(s),
        r = t(74401),
        n = t(42756);
      var c = t(46632);
      const o = e => {
        let {
          children: a,
          attributes: t = {},
          className: s = "",
          style: o = {}
        } = e;
        return (0, c.jsx)("span", {
          className: (0, r.classList)(s, t?.className, "rockstargames-sites-legacya7f106a8036d74ed9282a741476c6b5a"),
          style: (0, n.safeStyles)(o ?? t?.style ?? {}),
          dangerouslySetInnerHTML: {
            __html: i().unescape(a)
          }
        })
      }
    },
    63303: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => r
      });
      const s = {
        hr: "rockstargames-sites-legacyf5cd418ab2ef6a89df6c95d2caa06ba8",
        redLine: "rockstargames-sites-legacyf8b44ef9bbd3e7feb22bf79cc009b16e",
        gtao: "rockstargames-sites-legacyc442f7264db862a7cca6d9a56dacc205"
      };
      var i = t(46632);
      const r = e => {
        let {
          style: a,
          className: t = "",
          type: r
        } = e;
        return (0, i.jsx)("div", {
          style: a,
          className: [s.hr, s[r], t].join(" ")
        })
      }
    },
    63672: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => m
      });
      var s = t(71403),
        i = t(72956),
        r = t.n(i),
        n = t(74401),
        c = t(42756);
      const o = {
        pillBtn: "rockstargames-sites-legacya89792e50dfe5470a67f42b9e143c824",
        selected: "rockstargames-sites-legacybcce8ac50552b225f30d185d876a3e14",
        grid: "rockstargames-sites-legacyac295ed5b9cb441ed17843b34e83ea17",
        itemList: "rockstargames-sites-legacycaf5589ddeca00ed09213e547674b1f3",
        gtaplus: "rockstargames-sites-legacyb291112adcf994a0f6acadd86f73b78a",
        rdo: "rockstargames-sites-legacyd146e8f862baefb60e91be5aa3c17b6e",
        noImg: "rockstargames-sites-legacyba9b5ae08642b0213a3f04b3db9a9dac",
        gtao: "rockstargames-sites-legacyb6f2bdfd6a1d57b7ce840f7a56cc510b",
        custom: "rockstargames-sites-legacyaf89164a043648d1464686ff13363ee4",
        yellow: "rockstargames-sites-legacyd244b17b74fc46269e8a106a99ab0f87",
        hotPink: "rockstargames-sites-legacyd90b28503318563cfd6059146d1fb6b6",
        red: "rockstargames-sites-legacyc3f8a8706901874d906f94c626be3c1e",
        turquoise: "rockstargames-sites-legacyfe2ec36e92e2bb4d453fdc4b05966418",
        purple: "rockstargames-sites-legacyf5f7baf5b56f5b2ada053a93392bbf7a",
        teal: "rockstargames-sites-legacyf4a229f41cd20f181d810c311416e3f2",
        blue: "rockstargames-sites-legacyf6f689d687bcd482ea2cd2990fd66878",
        green: "rockstargames-sites-legacyab270f1b4d3ad43e7bc51393b7c5c089",
        darkRed: "rockstargames-sites-legacydc24ce78d962f3472b06955bf8855103",
        darkBlue: "rockstargames-sites-legacyb354493baac7389b21b511009f287428",
        goldenrod: "rockstargames-sites-legacye4a078efee11d24c64e93ccf0744a33f",
        skull: "rockstargames-sites-legacyd4581a495de14e6762bb15debe5bb810"
      };
      var d = t(46632);
      const {
        sanitize: l
      } = r(), m = e => {
        let {
          list: a,
          string: t,
          starColor: i,
          style: r,
          className: m,
          game: g,
          noImg: f,
          columns: u,
          mobileColumns: p
        } = e;
        const [b, k] = (0, s.useState)(null), v = t ? t.split("_#_") : a;
        return (0, s.useEffect)((() => {
          k(a)
        }), [a]), t || a ? u && b ? (0, d.jsx)("div", {
          className: o.grid,
          style: {
            "--unordered-list-grid-column": u,
            "--unordered-list-grid-column-mobile": p ?? u
          },
          children: (0, d.jsx)("ul", {
            style: (0, c.safeStyles)(r),
            className: (0, n.classList)(o.itemList, o.noImg, o[i], o[g]),
            children: b.map(((e, a) => (0, d.jsx)("li", {
              dangerouslySetInnerHTML: {
                __html: l(e.content)
              }
            }, a)))
          })
        }) : (0, d.jsx)("ul", {
          style: (0, c.safeStyles)(r),
          className: (0, n.classList)(o.itemList, o.custom, f ? o.noImg : "", i ? o[i] : "", g ? o[g] : "", m ?? ""),
          children: v.map(((e, a) => (0, d.jsx)("li", {
            dangerouslySetInnerHTML: {
              __html: l(e?.content ?? e)
            }
          }, a)))
        }) : null
      }
    },
    47252: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => n
      });
      var s = t(71403);
      var i = t(46632);
      class r extends s.Component {
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
          return this?.state?.error?.message ? (0, i.jsxs)("div", {
            className: "rockstargames-sites-legacyf903c45f8ecc18bd55f702e202f3763a",
            children: [(0, i.jsx)("h1", {
              children: this.state.header ?? "An error occurred."
            }), (0, i.jsx)("span", {
              children: this.state.error.message
            })]
          }) : this.props.children
        }
      }
      const n = function(e) {
        let a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        return function(t) {
          return (0, i.jsx)(r, {
            header: a,
            children: (0, i.jsx)(e, {
              ...t
            })
          })
        }
      }
    },
    355: (e, a, t) => {
      "use strict";
      t.r(a), t.d(a, {
        Animations: () => s,
        LiteMotion: () => o,
        withFadeIn: () => g,
        withFadeUp: () => b
      });
      var s = {};
      t.r(s), t.d(s, {
        getVariant: () => h,
        transitions: () => k,
        variants: () => v
      });
      var i = t(71403),
        r = t(80791),
        n = t(46632);
      const c = (0, i.forwardRef)(((e, a) => {
        const {
          children: t,
          tag: s = "div"
        } = e, i = r.m[s];
        return (0, n.jsx)(r.LazyMotion, {
          features: r.domAnimation,
          children: (0, n.jsx)(i, {
            ref: a,
            ...e,
            children: t
          })
        })
      }));
      c.displayName = "LiteMotion";
      const o = c,
        d = {
          visible: {
            opacity: 1
          },
          hidden: {
            opacity: 0
          }
        },
        l = {
          ease: "easeIn",
          duration: .4
        },
        m = e => {
          let {
            children: a
          } = e;
          return (0, n.jsx)(r.motion.div, Object.assign({
            className: "rockstargames-sites-legacyf0ee4e641f1ac92151be887c9ebb8392",
            variants: d,
            initial: "hidden",
            whileInView: "visible",
            viewport: {
              margin: "-20%",
              once: !0
            },
            transition: l
          }, {
            children: a
          }))
        },
        g = e => a => (0, n.jsx)(m, {
          children: (0, n.jsx)(e, Object.assign({}, a))
        }),
        f = {
          visible: {
            opacity: 1,
            y: 0
          },
          hidden: {
            opacity: 0,
            y: 40
          }
        },
        u = {
          ease: "easeIn",
          duration: .75
        },
        p = e => {
          let {
            children: a
          } = e;
          return (0, n.jsx)(r.motion.div, {
            className: "rockstargames-sites-legacya479a10c5475b17a0564b60fecf98c8b",
            variants: f,
            initial: "hidden",
            whileInView: "visible",
            viewport: {
              margin: "-20%",
              once: !0
            },
            transition: u,
            children: a
          })
        },
        b = e => a => (0, n.jsx)(p, {
          children: (0, n.jsx)(e, {
            ...a
          })
        }),
        k = {
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
        v = {
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
        h = function() {
          let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "collapsed";
          return v[arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "imageMask"][e]
        }
    },
    2024: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => o
      });
      var s = t(28089),
        i = t(42756);
      const r = "rockstargames-sites-legacyeb64520e04e486931cd65dc5b3fa61e8";
      var n = t(46632);
      const c = e => {
          let {
            alt: a,
            className: s,
            src: r,
            style: c
          } = e;
          const [o, d] = (0, i.usePreloadImg)(r);
          let l = r;
          !1 === o && ("rockstargames-sites-legacyee609f31f3685766122c2c6fc0ef0710" === s && (l = t(14572)), l = t(8820));
          const {
            width: m,
            height: g
          } = d, f = {
            "--aspect-ratio": Number.isNaN(m / g) ? "" : m / g,
            ...c
          };
          return (0, n.jsx)("img", {
            src: l,
            className: s ?? "",
            alt: a,
            style: f
          })
        },
        o = e => {
          let {
            className: a,
            style: o = {},
            image: d = {},
            imageStyle: l = {}
          } = e, {
            alt: m,
            src: g
          } = (0, s.useImageParser)(d);
          const {
            isMobile: f
          } = (0, i.useWindowResize)();
          return g.desktop || g.mobile || (m = "", g = {
            mobile: t(14572),
            desktop: t(8820)
          }), (0, n.jsx)("div", {
            className: d.frame ? `${d.frame} ${r}` : r,
            style: o,
            children: (0, n.jsx)(c, {
              style: {
                ...l,
                ...d?.style
              },
              src: f ? g.mobile || g.desktop : g?.desktop || g?.mobile,
              alt: m,
              className: a
            })
          })
        }
    },
    97789: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => n
      });
      var s = t(71403);
      const i = {
        pillBtn: "rockstargames-sites-legacyeea0db67b0aabf28288b288845324afe",
        selected: "rockstargames-sites-legacyd1d25362fd730ca979d5ad79de088f89",
        multiSourceContainer: "rockstargames-sites-legacydc538bbfc2f407ed9fe840097ccac819",
        multiSourceImage: "rockstargames-sites-legacyee782a29692a8eb06db1287a4984c243",
        animatePlaceholder: "rockstargames-sites-legacyfbd73f5f70c2ce64aa9c9bd398f1a3b5",
        "loader-keyframes": "rockstargames-sites-legacyf6040b2ae96a9b0dcdb2d283c9caff59"
      };
      var r = t(46632);
      const n = e => {
        let {
          imageUrl: a,
          className: t,
          alt: n,
          style: c,
          lazy: o = !1,
          decoding: d = "auto",
          sizes: l = [320, 480, 768, 1024, 1440, 1920, 2560]
        } = e;
        const [m, g] = (0, s.useState)(!1);
        return (0, r.jsxs)("div", {
          className: i.multiSourceContainer,
          children: [!m && (0, r.jsx)("img", {
            className: [t, i.animatePlaceholder].join(" "),
            src: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTkyMCIgaGVpZ2h0PSIxMDgwIiB2aWV3Qm94PSIwIDAgMTkyMCAxMDgwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cmVjdCB3aWR0aD0iMTkyMCIgaGVpZ2h0PSIxMDgwIiBmaWxsPSIjMzMzMzMzIi8+Cjwvc3ZnPgo=",
            sizes: "(max-width: 1024px) 100vw, 1024px",
            alt: "Loading...",
            style: c
          }), (0, r.jsx)("img", {
            className: [i.multiSourceImage, t].join(" "),
            src: `${a}?im=Resize=1920`,
            srcSet: (f = a, l.map((e => `${f}?im=Resize=${e} ${e}w`)).join(", ")),
            sizes: "(max-width: 400px) 200px, (max-width: 1920px) 100vw, 1920px",
            alt: n ?? "Multi-Source Image",
            style: c,
            onLoad: () => {
              g(!0)
            },
            loading: o ? "lazy" : "eager",
            decoding: d
          })]
        });
        var f
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

      function t(e, a) {
        if ("FragmentSpread" === e.kind) a.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var s = e.type;
          "NamedType" === s.kind && a.add(s.name.value)
        }
        e.selectionSet && e.selectionSet.selections.forEach((function(e) {
          t(e, a)
        })), e.variableDefinitions && e.variableDefinitions.forEach((function(e) {
          t(e, a)
        })), e.definitions && e.definitions.forEach((function(e) {
          t(e, a)
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
      var s = {};

      function i(e, a) {
        for (var t = 0; t < e.definitions.length; t++) {
          var s = e.definitions[t];
          if (s.name && s.name.value == a) return s
        }
      }

      function r(e, a) {
        var t = {
          kind: e.kind,
          definitions: [i(e, a)]
        };
        e.hasOwnProperty("loc") && (t.loc = e.loc);
        var r = s[a] || new Set,
          n = new Set,
          c = new Set;
        for (r.forEach((function(e) {
            c.add(e)
          })); c.size > 0;) {
          var o = c;
          c = new Set, o.forEach((function(e) {
            n.has(e) || (n.add(e), (s[e] || new Set).forEach((function(e) {
              c.add(e)
            })))
          }))
        }
        return n.forEach((function(a) {
          var s = i(e, a);
          s && t.definitions.push(s)
        })), t
      }
      a.definitions.forEach((function(e) {
        if (e.name) {
          var a = new Set;
          t(e, a), s[e.name.value] = a
        }
      })), e.exports = a, e.exports.UserGetVote = r(a, "UserGetVote"), e.exports.UserCastVote = r(a, "UserCastVote")
    },
    85913: e => {
      var a = {
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

      function t(e, a) {
        if ("FragmentSpread" === e.kind) a.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var s = e.type;
          "NamedType" === s.kind && a.add(s.name.value)
        }
        e.selectionSet && e.selectionSet.selections.forEach((function(e) {
          t(e, a)
        })), e.variableDefinitions && e.variableDefinitions.forEach((function(e) {
          t(e, a)
        })), e.definitions && e.definitions.forEach((function(e) {
          t(e, a)
        }))
      }
      a.loc.source = {
        body: 'query GameData(\n    $titleSlug: String!\n    $locale: String!\n    $withMetaTitle: Boolean = false\n    $metaUrl: String = "/"\n) {\n    meta: metaUrl(locale: $locale, domain: "www", url: $metaUrl)\n        @include(if: $withMetaTitle) {\n        title\n    }\n    game(titleSlug: $titleSlug, locale: $locale) {\n        ratingDescriptors\n        ratingFooter\n        ratingImg\n        ratingUrl\n    }\n}\n',
        name: "GraphQL request",
        locationOffset: {
          line: 1,
          column: 1
        }
      };
      var s = {};

      function i(e, a) {
        for (var t = 0; t < e.definitions.length; t++) {
          var s = e.definitions[t];
          if (s.name && s.name.value == a) return s
        }
      }
      a.definitions.forEach((function(e) {
        if (e.name) {
          var a = new Set;
          t(e, a), s[e.name.value] = a
        }
      })), e.exports = a, e.exports.GameData = function(e, a) {
        var t = {
          kind: e.kind,
          definitions: [i(e, a)]
        };
        e.hasOwnProperty("loc") && (t.loc = e.loc);
        var r = s[a] || new Set,
          n = new Set,
          c = new Set;
        for (r.forEach((function(e) {
            c.add(e)
          })); c.size > 0;) {
          var o = c;
          c = new Set, o.forEach((function(e) {
            n.has(e) || (n.add(e), (s[e] || new Set).forEach((function(e) {
              c.add(e)
            })))
          }))
        }
        return n.forEach((function(a) {
          var s = i(e, a);
          s && t.definitions.push(s)
        })), t
      }(a, "GameData")
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

      function t(e, a) {
        if ("FragmentSpread" === e.kind) a.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var s = e.type;
          "NamedType" === s.kind && a.add(s.name.value)
        }
        e.selectionSet && e.selectionSet.selections.forEach((function(e) {
          t(e, a)
        })), e.variableDefinitions && e.variableDefinitions.forEach((function(e) {
          t(e, a)
        })), e.definitions && e.definitions.forEach((function(e) {
          t(e, a)
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
      var s = {};

      function i(e, a) {
        for (var t = 0; t < e.definitions.length; t++) {
          var s = e.definitions[t];
          if (s.name && s.name.value == a) return s
        }
      }

      function r(e, a) {
        var t = {
          kind: e.kind,
          definitions: [i(e, a)]
        };
        e.hasOwnProperty("loc") && (t.loc = e.loc);
        var r = s[a] || new Set,
          n = new Set,
          c = new Set;
        for (r.forEach((function(e) {
            c.add(e)
          })); c.size > 0;) {
          var o = c;
          c = new Set, o.forEach((function(e) {
            n.has(e) || (n.add(e), (s[e] || new Set).forEach((function(e) {
              c.add(e)
            })))
          }))
        }
        return n.forEach((function(a) {
          var s = i(e, a);
          s && t.definitions.push(s)
        })), t
      }
      a.definitions.forEach((function(e) {
        if (e.name) {
          var a = new Set;
          t(e, a), s[e.name.value] = a
        }
      })), e.exports = a, e.exports.TinaModulesList = r(a, "TinaModulesList"), e.exports.TinaModulesInfo = r(a, "TinaModulesInfo")
    },
    6098: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => n
      });
      var s, i = t(71403);

      function r() {
        return r = Object.assign ? Object.assign.bind() : function(e) {
          for (var a = 1; a < arguments.length; a++) {
            var t = arguments[a];
            for (var s in t) Object.prototype.hasOwnProperty.call(t, s) && (e[s] = t[s])
          }
          return e
        }, r.apply(this, arguments)
      }
      const n = e => i.createElement("svg", r({
        xmlns: "http://www.w3.org/2000/svg",
        width: 24,
        height: 24,
        fill: "none"
      }, e), s || (s = i.createElement("path", {
        stroke: "#fff",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 2,
        d: "m15 18-6-6 6-6"
      })))
    },
    26697: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => n
      });
      var s, i = t(71403);

      function r() {
        return r = Object.assign ? Object.assign.bind() : function(e) {
          for (var a = 1; a < arguments.length; a++) {
            var t = arguments[a];
            for (var s in t) Object.prototype.hasOwnProperty.call(t, s) && (e[s] = t[s])
          }
          return e
        }, r.apply(this, arguments)
      }
      const n = e => i.createElement("svg", r({
        xmlns: "http://www.w3.org/2000/svg",
        width: 24,
        height: 24,
        fill: "none"
      }, e), s || (s = i.createElement("path", {
        stroke: "#fff",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 2,
        d: "m9 18 6-6-6-6"
      })))
    },
    52917: (e, a, t) => {
      var s = {
        "./applestore.svg": 4756,
        "./googleplay.svg": 12708,
        "./left.svg": 60900,
        "./pc.svg": 40648,
        "./ps.svg": 88504,
        "./ps3.svg": 38379,
        "./ps4.svg": 50052,
        "./ps5.svg": 1221,
        "./right.svg": 97195,
        "./switch.svg": 37551,
        "./x.svg": 45537,
        "./xbox.svg": 84484,
        "./xboxone.svg": 20920,
        "./xboxseriesxs.svg": 11128
      };

      function i(e) {
        var a = r(e);
        return t(a)
      }

      function r(e) {
        if (!t.o(s, e)) {
          var a = new Error("Cannot find module '" + e + "'");
          throw a.code = "MODULE_NOT_FOUND", a
        }
        return s[e]
      }
      i.keys = function() {
        return Object.keys(s)
      }, i.resolve = r, e.exports = i, i.id = 52917
    },
    4905: (e, a, t) => {
      var s = {
        "./cero_a.png": 81229,
        "./cero_b.svg": 67073,
        "./cero_c.svg": 31536,
        "./cero_d.svg": 81071,
        "./cero_rp.png": 92628,
        "./cero_z.svg": 40393,
        "./djctq_10.svg": 5251,
        "./djctq_12.svg": 53953,
        "./djctq_14.svg": 56623,
        "./djctq_16.svg": 6141,
        "./djctq_18.svg": 79835,
        "./djctq_er.svg": 47173,
        "./djctq_l.svg": 11524,
        "./esrb_ao.svg": 57902,
        "./esrb_e.svg": 18287,
        "./esrb_e10plus.svg": 33396,
        "./esrb_m.svg": 40871,
        "./esrb_m_ao.svg": 16938,
        "./esrb_rp.svg": 6960,
        "./esrb_rplm17.svg": 58473,
        "./esrb_t.svg": 31470,
        "./fpb_13.svg": 40908,
        "./fpb_16.svg": 497,
        "./fpb_18.svg": 13175,
        "./fpb_pg.svg": 95219,
        "./grac_12.svg": 61482,
        "./grac_15.svg": 68341,
        "./grac_18.svg": 71824,
        "./grac_19.svg": 7361,
        "./grac_a.svg": 5560,
        "./gsrr_0.svg": 45120,
        "./gsrr_12.svg": 24465,
        "./gsrr_15.svg": 42638,
        "./gsrr_18.svg": 32875,
        "./gsrr_6.svg": 82574,
        "./nmc_12.svg": 93911,
        "./nmc_16.svg": 37675,
        "./nmc_18.svg": 58157,
        "./nmc_21.svg": 78525,
        "./nmc_3.svg": 59109,
        "./nmc_7.svg": 62569,
        "./oflc_g.svg": 49809,
        "./oflc_m.svg": 58219,
        "./oflc_ma15.svg": 28718,
        "./oflc_pg.svg": 94509,
        "./oflc_r18.svg": 90615,
        "./pegi_12.svg": 37620,
        "./pegi_16.svg": 87880,
        "./pegi_18.svg": 83454,
        "./pegi_3.svg": 93672,
        "./pegi_4.svg": 96071,
        "./pegi_6.svg": 69493,
        "./pegi_7.svg": 47860,
        "./pegi_rp.png": 97852,
        "./rars_0.svg": 32628,
        "./rars_12.svg": 25757,
        "./rars_16.svg": 80513,
        "./rars_18.svg": 69959,
        "./rars_6.svg": 41514,
        "./usk_0.svg": 20507,
        "./usk_12.svg": 86196,
        "./usk_16.svg": 32008,
        "./usk_18.svg": 27582,
        "./usk_6.svg": 33813,
        "./usk_rp.svg": 77579,
        "./vaci_rp.png": 92674
      };

      function i(e) {
        var a = r(e);
        return t(a)
      }

      function r(e) {
        if (!t.o(s, e)) {
          var a = new Error("Cannot find module '" + e + "'");
          throw a.code = "MODULE_NOT_FOUND", a
        }
        return s[e]
      }
      i.keys = function() {
        return Object.keys(s)
      }, i.resolve = r, e.exports = i, i.id = 4905
    },
    73983: (e, a, t) => {
      var s = {
        "./cero_a.png": 81229,
        "./cero_b.svg": 67073,
        "./cero_c.svg": 31536,
        "./cero_d.svg": 81071,
        "./cero_rp.png": 92628,
        "./cero_z.svg": 40393,
        "./djctq_10.svg": 5251,
        "./djctq_12.svg": 53953,
        "./djctq_14.svg": 56623,
        "./djctq_16.svg": 6141,
        "./djctq_18.svg": 79835,
        "./djctq_er.svg": 47173,
        "./djctq_l.svg": 11524,
        "./esrb_ao.svg": 57902,
        "./esrb_e.svg": 18287,
        "./esrb_e10plus.svg": 33396,
        "./esrb_m.svg": 40871,
        "./esrb_m_ao.svg": 16938,
        "./esrb_rp.svg": 6960,
        "./esrb_rplm17.svg": 58473,
        "./esrb_t.svg": 31470,
        "./fpb_13.svg": 40908,
        "./fpb_16.svg": 497,
        "./fpb_18.svg": 13175,
        "./fpb_pg.svg": 95219,
        "./grac_12.svg": 61482,
        "./grac_15.svg": 68341,
        "./grac_18.svg": 71824,
        "./grac_19.svg": 7361,
        "./grac_a.svg": 5560,
        "./gsrr_0.svg": 45120,
        "./gsrr_12.svg": 24465,
        "./gsrr_15.svg": 42638,
        "./gsrr_18.svg": 32875,
        "./gsrr_6.svg": 82574,
        "./nmc_12.svg": 93911,
        "./nmc_16.svg": 37675,
        "./nmc_18.svg": 58157,
        "./nmc_21.svg": 78525,
        "./nmc_3.svg": 59109,
        "./nmc_7.svg": 62569,
        "./oflc_g.svg": 49809,
        "./oflc_m.svg": 58219,
        "./oflc_ma15.svg": 28718,
        "./oflc_pg.svg": 94509,
        "./oflc_r18.svg": 90615,
        "./pegi_12.svg": 37620,
        "./pegi_16.svg": 87880,
        "./pegi_18.svg": 83454,
        "./pegi_3.svg": 93672,
        "./pegi_4.svg": 96071,
        "./pegi_6.svg": 69493,
        "./pegi_7.svg": 47860,
        "./pegi_rp.png": 97852,
        "./rars_0.svg": 32628,
        "./rars_12.svg": 25757,
        "./rars_16.svg": 80513,
        "./rars_18.svg": 69959,
        "./rars_6.svg": 41514,
        "./usk_0.svg": 20507,
        "./usk_12.svg": 86196,
        "./usk_16.svg": 32008,
        "./usk_18.svg": 27582,
        "./usk_6.svg": 33813,
        "./usk_rp.svg": 77579,
        "./vaci_rp.png": 92674
      };

      function i(e) {
        var a = r(e);
        return t(a)
      }

      function r(e) {
        if (!t.o(s, e)) {
          var a = new Error("Cannot find module '" + e + "'");
          throw a.code = "MODULE_NOT_FOUND", a
        }
        return s[e]
      }
      i.keys = function() {
        return Object.keys(s)
      }, i.resolve = r, e.exports = i, i.id = 73983
    },
    45628: (e, a, t) => {
      var s = {
        "./bounty.png": 89177,
        "./collector.png": 3787,
        "./moonshiner.png": 14022,
        "./naturalist.png": 34629,
        "./trader.png": 22864
      };

      function i(e) {
        var a = r(e);
        return t(a)
      }

      function r(e) {
        if (!t.o(s, e)) {
          var a = new Error("Cannot find module '" + e + "'");
          throw a.code = "MODULE_NOT_FOUND", a
        }
        return s[e]
      }
      i.keys = function() {
        return Object.keys(s)
      }, i.resolve = r, e.exports = i, i.id = 45628
    },
    4756: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c6affc8b37ec4c75486ab6d12b2de395.svg"
    },
    12708: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/2ef574ea2aa502447d579267ff37e251.svg"
    },
    60900: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/3c6134ba61610ead6af640361535e346.svg"
    },
    40648: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1c050b43f15f34e2cd0592fad6dc48fd.svg"
    },
    88504: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/27ae07e3226006749e6cb6428bc62bb1.svg"
    },
    38379: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d118a14a73ce72b4687d9eb69724f4d2.svg"
    },
    50052: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/3f9f55567df4006813f8bf50ad383ea0.svg"
    },
    1221: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/b12e4e9678e7a4ebea34905926feeb90.svg"
    },
    97195: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/cf1b78cec82c717ea9c2155ce4093736.svg"
    },
    37551: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/925d3b2d0b0e784c366e20d3f1a660da.svg"
    },
    45537: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/7c453a914f0b049334120adfcba614e5.svg"
    },
    84484: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/f74e871585118640ffd9ce881181a176.svg"
    },
    20920: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5f91e4753c491fb23c2b364f69480c9e.svg"
    },
    11128: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5bd8456deb2338503b8fd44786b5fa07.svg"
    },
    81229: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d51b141250a4851d7ec3673d88dbd20a.png"
    },
    67073: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/7ac89f9e00ded04ef4b2dd3eaf3e8734.svg"
    },
    31536: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/f44dd7aad9d6c62e40a11f51252f59b8.svg"
    },
    81071: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/204116b24cd9e9ab4e71af21b3a96179.svg"
    },
    92628: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/676b3908098d8b19f1019ce361af45ec.png"
    },
    40393: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/03ab76c58ed61a83bf035c923dbe32b2.svg"
    },
    5251: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/f468aef6f0b5399d5c0f6b2e95b60cc5.svg"
    },
    53953: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/0b31c79d361cfd92e1a405dbbf4890bd.svg"
    },
    56623: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/3689ac97526f00a4537e1b38ec82a074.svg"
    },
    6141: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/07f9f9e93ec430813e74cbce545962c4.svg"
    },
    79835: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/608f591c35aff9d47091dd7fe9a8fb13.svg"
    },
    47173: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/198ced82807c854e92e84e23f7434c91.svg"
    },
    11524: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/edf01daa4f0392081705c17a74d8a146.svg"
    },
    57902: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c4dd58f5b5b97796b6c6177de364dd36.svg"
    },
    18287: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/201de0eb81b09ea93aa1aef2a6824b7c.svg"
    },
    33396: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/534078f6307f97ce0d70e0bb885f9d77.svg"
    },
    40871: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/f4b0d9409df1e8a420b2118e4e601263.svg"
    },
    16938: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/092865e0ddae5190dc3c0284ee3c21bd.svg"
    },
    6960: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/80dd50a2fa9aae3b5d6effdb2d9c2661.svg"
    },
    58473: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5d471eef7883043fdabe1b3ed17a72b3.svg"
    },
    31470: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/35cf853d7882b090b56837bd08127da1.svg"
    },
    40908: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/72e8749316b4d1f52925b95e075e9c24.svg"
    },
    497: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c2acdad576048f5c48b2ee6a2a2a90a3.svg"
    },
    13175: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5f52c5ab315a1ff90360e06372c3f2c0.svg"
    },
    95219: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d1f569db6c94b4f81417f62e91759082.svg"
    },
    61482: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/fe262661c6667d97f441e045067f4a0f.svg"
    },
    68341: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1b457cab77cb82e1c05ad12628414576.svg"
    },
    71824: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1a3660d76f39527a79f8a49bb27a74be.svg"
    },
    7361: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1a3660d76f39527a79f8a49bb27a74be.svg"
    },
    5560: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/515f2884036e870905ae53f156692721.svg"
    },
    45120: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a3931a545299e205758648bce29e5c49.svg"
    },
    24465: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/05e9f2f27883d4cbabb3d4e4e16c9c74.svg"
    },
    42638: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5f2fc4de3decfa0ac007f6cbd91658a9.svg"
    },
    32875: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/cd57122be57f5e3a9dc4d0a0f2503fb1.svg"
    },
    82574: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/2d910a48fc0914f58ca80dc0732a7677.svg"
    },
    93911: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/6e99540df7fd07d75b08a5fbc02d4815.svg"
    },
    37675: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/937b7a0c5a128c39addf2adeba2d2f23.svg"
    },
    58157: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/46a27d8d16855dcc2a217f48243c6d82.svg"
    },
    78525: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/e5792c85d5a88a0b7c75af087e4c6ee2.svg"
    },
    59109: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/4da522682784ded3799c5a6f9f8c213a.svg"
    },
    62569: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/29ea20c333709a952c2eb3a2591d435d.svg"
    },
    49809: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/7c66fbb7c204e32da80ccb1693d15e00.svg"
    },
    58219: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/954d63889440be17e1ebef30b7026369.svg"
    },
    28718: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/2eb8777f38cbd4d721261ad736c1f2e7.svg"
    },
    94509: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/6079496697e537802f8a0eb5a83d2e94.svg"
    },
    90615: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a2a19fbf81b03db0fda00839496a3ce5.svg"
    },
    37620: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/129ef1c1a15ffc7afb86ce282e48decb.svg"
    },
    87880: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a2a5d9ca87a5bd107da9bb33d3d718e8.svg"
    },
    83454: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/dabd13175cc0894dcb3f942d3d2dab86.svg"
    },
    93672: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/64d281825da1c782681bcc096d693e32.svg"
    },
    96071: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/b43dddd485139df895fc531e79c75e68.svg"
    },
    69493: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c01f38f1051e751caa633d533202873c.svg"
    },
    47860: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/27a26f477c8db29df4ceec4517c7f42b.svg"
    },
    97852: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a380d3ce353544a356e8ce48f8586804.png"
    },
    32628: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/bba2f70e014e82b336a9f80625053089.svg"
    },
    25757: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/85250e8a0e5a5a1209f214423f6ebe43.svg"
    },
    80513: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/f1a94d5705ae3ddeb4c8c2fde79bfe81.svg"
    },
    69959: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a825976dddc59e33b3ce146ad6cd3d20.svg"
    },
    41514: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/01b0cd4466759aa349ac4036594ab6ae.svg"
    },
    20507: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/9c699f3b76c15209c8059f02507e11b5.svg"
    },
    86196: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/b48e041f1412ff62c8a92dc424b59aa5.svg"
    },
    32008: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/07362df5a2671c08b232a97d503cd6bf.svg"
    },
    27582: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c3fe2a9610ca8b42807dfa99073d68b3.svg"
    },
    33813: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/056d3bdf1f300bcb7efa4aebcfc5224d.svg"
    },
    77579: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/278e84e5a41407499c43a30f545da3e8.svg"
    },
    92674: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/703a546f7a5109c1e2af87a212135aad.png"
    },
    89177: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/48754c6fc2f75b0554098423f2bda6d1.png"
    },
    3787: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/e111377ba943e9eefaa9204f77c77093.png"
    },
    14022: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/4639a2711d1bca49a87c302784050ee3.png"
    },
    34629: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/898794daaec68a69ef5ec4afaefe1948.png"
    },
    22864: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/6e77bb0f25a6ea37e8d831b12df9fa3c.png"
    },
    8820: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/8787df71c723ebe44f82fd13ed216e09.jpg"
    },
    14572: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/61ae357c3bfbabb5d765e9a7c794d08f.png"
    },
    96165: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1c050b43f15f34e2cd0592fad6dc48fd.svg"
    },
    90837: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1506c5bba61fa270f73c874e3d60a94f.svg"
    },
    44338: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/6e8f340ded0fd6b0b0d434e8c6c8b75e.svg"
    },
    67245: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/205366df6706c3b367fb5ff4f26ab7f3.svg"
    }
  }
]);