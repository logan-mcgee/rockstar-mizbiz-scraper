! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "e639a64c-8004-48f5-9469-90193460f1a4", e._sentryDebugIdIdentifier = "sentry-dbid-e639a64c-8004-48f5-9469-90193460f1a4")
  } catch (e) {}
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
  [4603], {
    91318: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => m
      });
      var n = t(71403),
        i = t(89779),
        s = t(42756),
        r = t(40207),
        l = t(39149),
        d = t(46632);
      const o = e => e.some((e => !e)),
        c = e => {
          let {
            condition: a = null,
            children: t
          } = e;
          const [s, d] = (0, n.useState)(!1), c = (e => {
            const [a] = (0, i.useSearchParams)(), [t, s] = (0, n.useState)(null), d = (0, r.useRockstarUser)(), {
              loggedIn: c
            } = d, {
              currentCharId: m
            } = (0, r.useRockstarUserState)(), u = (0, r.useIsUserGtaPlus)(d?.data, m);
            return (0, n.useEffect)((() => {
              const t = "true" === a.get("conditionPreview");
              if (!e?.length > 0) return;
              l.A.applyFilters("preview_conditions", e);
              const n = [];
              return e.forEach((e => {
                const {
                  value: i
                } = e;
                if (t) return "true" === a.get(i) ? (n.push(!0), !0) : (n.push(!1), !1);
                if (o(n)) return !1;
                switch (i) {
                  case "user:is:loggedIn":
                    n.push(!0 === c);
                    break;
                  case "user:not:loggedIn":
                    n.push(!1 === c);
                    break;
                  case "user:is:gtaPlus":
                    n.push(!0 === u);
                    break;
                  case "user:not:gtaPlus":
                    n.push(!1 === u);
                    break;
                  default:
                    n.push(!1)
                }
                return null
              })), s(!o(n)), () => {}
            }), [a, e, u, d, c]), t
          })(a);
          return (0, n.useEffect)((() => {
            d(c)
          }), [c]), (0, n.useMemo)((() => s ? t : null), [s])
        },
        m = (0, s.withTranslations)((e => {
          let {
            children: a
          } = e;
          return n.Children.map(n.Children.toArray(a), (e => (0, d.jsx)(c, {
            ...e?.props
          })))
        }))
    },
    39149: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => n
      });
      const n = (0, t(86975).FF)()
    },
    61651: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => r
      });
      var n = t(71403),
        i = t(40207);
      const s = (0, n.forwardRef)(((e, a) => {
        const {
          threshold: t,
          callback: s,
          children: r,
          requireUser: l
        } = e, {
          track: d
        } = (0, i.useGtmTrack)(l), [o, c] = (0, n.useState)(a?.current);
        return (0, n.useEffect)((() => {
          a?.current && c(a.current)
        }), [a]), ((e, a, t) => {
          const [i, s] = (0, n.useState)({
            scrollDepths: e,
            scrollY: 0
          }), {
            scrollDepths: r,
            scrollY: l
          } = i;
          (0, n.useEffect)((() => {
            "undefined" != typeof window && 0 !== window.pageYOffset && s((e => ({
              ...e,
              scrollY: window.pageYOffset
            })))
          }), []), (0, n.useEffect)((() => {
            s({
              scrollDepths: e,
              scrollY: 0
            })
          }), [window.location.pathname]);
          const d = (0, n.useCallback)((() => {
            const e = document.documentElement,
              n = document.body,
              l = t?.scrollTop || e.scrollTop || n.scrollTop,
              o = t?.scrollHeight || e.scrollHeight || n.scrollHeight,
              {
                clientHeight: c
              } = e,
              m = l / (o - c) * 100;
            if (r) {
              const e = Math.min(...r, o);
              if (m >= e) {
                const n = r.filter((a => a !== e));
                0 === n.length && (t ?? window).removeEventListener("scroll", d), a && a({
                  scrollY: e,
                  scrollPercent: m,
                  remainingDepths: n
                }), s({
                  scrollY: e,
                  scrollDepths: n
                })
              }
            } else s({
              ...i,
              scrollY: m
            })
          }), [r, t, a]);
          (0, n.useEffect)((() => {
            if ("undefined" == typeof window) return;
            const e = t ?? window;
            return e.addEventListener("scroll", d), () => e.removeEventListener("scroll", d)
          }), [d])
        })(t, (e => {
          let {
            scrollY: a
          } = e;
          d({
            event: "page_scroll",
            scroll_depth: a
          }), "function" == typeof s && s(a)
        }), o), r
      }));
      s.displayName = "ScrollTracker";
      const r = s
    },
    7607: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => o
      });
      var n = t(96717),
        i = t(20066);
      const s = (0, n.defineMessages)({
          components_track_list_title: {
            id: "components_track_list_title",
            defaultMessage: "Tracklist"
          }
        }),
        r = {
          bodySmall: "rockstargames-sites-gta-gen9c048aacaedc7fb642f38c7f163c193e3"
        };
      var l = t(46632);
      const d = e => {
          let {
            track: a,
            artist: t
          } = e;
          return (0, l.jsxs)("div", {
            className: r.track,
            children: [(0, l.jsx)("p", {
              children: a
            }), (0, l.jsx)("p", {
              className: r.bodySmall,
              children: t
            })]
          })
        },
        o = (0, n.withIntl)((e => {
          let {
            content: a = []
          } = e;
          return (0, l.jsxs)("div", {
            className: "rockstargames-sites-gta-gen9e6c19f2cdd68a4352e248a8324383aa2",
            children: [(0, l.jsx)("h4", {
              className: "rockstargames-sites-gta-gen9cd3895fbae93ba04f1401487f6e6eddf",
              children: (0, l.jsx)(n.FormattedMessage, {
                ...s.components_track_list_title
              })
            }), (0, l.jsx)("div", {
              className: "rockstargames-sites-gta-gen9ef0cde8b15ded961605237d0e8328a9b",
              children: (0, l.jsx)("div", {
                className: "rockstargames-sites-gta-gen9bdd54186db17d27b3daebc4b9d58e09a",
                children: a?.map((e => (0, l.jsx)(d, {
                  track: e.track,
                  artist: e.artist
                }, e.key)))
              })
            })]
          })
        }), i)
    },
    34634: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => i
      });
      var n = t(46632);
      const i = e => {
        let {
          brands: a = []
        } = e;
        return a.length ? (0, n.jsx)("div", {
          className: "rockstargames-sites-gta-gen9cde08e212f23b312d5afca7f2ea1105c",
          children: a.map(((e, a) => {
            let {
              brand: t
            } = e;
            return (0, n.jsx)("div", {
              className: "rockstargames-sites-gta-gen9c894fe869384587702b5370da072be86",
              "data-brand": t
            }, a)
          }))
        }) : null
      }
    },
    32331: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => r
      });
      var n = t(74401),
        i = t(62811);
      var s = t(46632);
      const r = e => {
        let {
          buttons: a = [],
          className: t
        } = e;
        return a.length ? (0, s.jsx)("div", {
          className: (0, n.classList)("rockstargames-sites-gta-gen9b411a36e7fd12ab75861fe560b31b206", t),
          children: a.map(((e, a) => {
            let {
              icon: t,
              title: n,
              to: r
            } = e;
            return n ? (0, s.jsx)(i.A, {
              icon: t,
              text: n,
              to: r
            }, a) : ""
          }))
        }) : null
      }
    },
    68340: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => g
      });
      var n = t(71403),
        i = t(89269),
        s = t(54252),
        r = t(40207),
        l = t(49948),
        d = t(74401),
        o = t(81902),
        c = t(47252);
      var m = t(46632);
      const u = e => {
          let {
            prevRef: a,
            nextRef: t,
            onNextClicked: n,
            onPrevClicked: i,
            onNextKeyDown: s
          } = e;
          return (0, m.jsxs)("div", {
            className: "rockstargames-sites-gta-gen9d98f432655f19a842390597c4434db06",
            children: [(0, m.jsx)("button", {
              className: "rockstargames-sites-gta-gen9c06ca360ce11f2cef7baf8c5fba05a42",
              ref: a,
              onClick: i,
              "aria-label": "Previous",
              role: "button"
            }), (0, m.jsx)("button", {
              className: "rockstargames-sites-gta-gen9a4f98606cdef508fbd2e69c5564a92d8",
              ref: t,
              onClick: n,
              onKeyDown: s,
              "aria-label": "Next",
              role: "button"
            })]
          })
        },
        g = (0, c.A)((e => {
          let {
            description: a,
            slideChildren: t,
            size: c,
            title: g,
            name: f,
            customSlidesPerView: v = null,
            customSpaceBetween: b = null,
            slideClass: p,
            style: k,
            className: h,
            cardSizeBreakpoints: y,
            customAspectRatio: x,
            titleBadge: N,
            theme: S
          } = e;
          const {
            track: w
          } = (0, r.useGtmTrack)(), j = (0, n.useRef)(null), _ = (0, n.useRef)(null), C = (0, n.useRef)(null), [T, V] = (0, n.useState)(null), [E, A] = (0, n.useState)(!1), [I, L] = (0, n.useState)(null), [B, M] = (0, n.useState)(), [$, F] = (0, n.useState)(), {
            ref: D,
            inView: G
          } = (0, l.useInView)({
            threshold: .6
          }), [P, O] = (0, n.useState)(!1), [R, z] = (0, n.useState)(null), [U, q] = (0, n.useState)(!1), [H, W] = (0, n.useState)(0), [Y, K] = (0, n.useState)(0);
          (0, n.useEffect)((() => {
            const e = () => {
              q(window.innerWidth < 1024)
            };
            return e(), window.addEventListener("resize", e), () => {
              window.removeEventListener("resize", e)
            }
          }), []), (0, n.useEffect)((() => {
            const e = () => {
              B && !(0, s.isEmpty)(B) && B?.height > 0 && B?.height !== H && W(B?.height)
            };
            return e(), window.addEventListener("resize", e), () => {
              window.removeEventListener("resize", e)
            }
          }), [B]);
          const Q = {
            0: {
              spaceBetween: b ?? 16
            },
            1024: {
              spaceBetween: b ?? 18
            },
            1920: {
              spaceBetween: b ?? 20
            },
            2560: {
              spaceBetween: b ?? 22
            }
          };
          (0, n.useEffect)((() => {
            if (!j.current) return;
            const e = () => {
              if (j.current) {
                const e = v || Number(window.getComputedStyle(j.current).getPropertyValue("--slides-per-view")),
                  a = v ? 1 : Number(window.getComputedStyle(j.current).getPropertyValue("--slides-per-view-multiplier"));
                L(e * a)
              }
            };
            return window.addEventListener("resize", e), e(), () => {
              window.removeEventListener("resize", e)
            }
          }), [j, v]), (0, n.useEffect)((() => {
            if (!t) return;
            let e = !1;
            t.forEach((a => {
              "cover-card" === a?.props?.tina?.payload?.meta?.type && (e = !0, z(a))
            })), O(e);
            const a = t.map(((e, a) => "cover-card" === e?.props?.tina?.payload?.meta?.type && U ? null : (0, m.jsx)(o.qr, {
              className: "rockstargames-sites-gta-gen9f58e79e329504e170dc9cb4595ea011b",
              onFocus: () => Z(a),
              children: e
            }, Symbol(a).toString())));
            V(a)
          }), [t, U]), (0, n.useEffect)((() => {
            F({
              nextEl: C.current,
              prevEl: _.current
            })
          }), [C, _]), (0, n.useEffect)((() => {
            G && !E && t && (w({
              event: "page_section_impression",
              element_placement: (f || g).toLowerCase()
            }), A(!0))
          }), [G, t]);
          let X = "custom" === c ? {
            "--custom-aspect-ratio": x,
            ...k
          } : {
            ...k
          };
          const J = 0 !== H ? `${H}px` : "100%";
          X = {
            ...X,
            "--carousel-cards-height": J,
            "--carousel-nav-opacity": Y
          };
          const Z = e => {
            B?.slideTo(e)
          };
          return (0, m.jsxs)("div", {
            className: (0, d.classList)("rockstargames-sites-gta-gen9d0c3d91603036c852633939015a6cb48", h),
            "data-size": c,
            "data-sm": y?.sm ? y?.sm : c,
            "data-md": y?.md ? y?.md : c,
            "data-lg": y?.lg ? y?.lg : c,
            "data-xl": y?.xl ? y?.xl : c,
            "data-xxl": y?.xxl ? y?.xxl : c,
            "data-has-covercard": P,
            "data-new-carousel-nav": !0,
            "data-theme": S,
            ref: j,
            style: X,
            children: [(0, m.jsx)("div", {
              className: "rockstargames-sites-gta-gen9ddeb75a59ed783554b94e8298897a1fa",
              ref: D
            }), P && U && (0, m.jsx)("div", {
              className: "rockstargames-sites-gta-gen9d5f00d41fdd2c864a0eb9e069cf08db0",
              children: R
            }), (0, m.jsx)("div", {
              className: "rockstargames-sites-gta-gen9cdc60dbde3f8db6f466aba8a3e19fa96",
              children: (0, m.jsxs)("div", {
                className: "rockstargames-sites-gta-gen9fb8e207418c783fc2f53b44c19faedca",
                children: [(0, m.jsxs)("div", {
                  className: "rockstargames-sites-gta-gen9b779ba2045a88302079083935c90f7b3",
                  children: [!P && g && (0, m.jsxs)("div", {
                    className: "rockstargames-sites-gta-gen9edf90c7c5ee1c79049f5a6442f14c949",
                    children: [(0, m.jsx)("h2", {
                      children: g
                    }), N && (0, m.jsx)("span", {
                      className: "rockstargames-sites-gta-gen9d7a4aaeb70d68fdee39312192efb990b",
                      children: N
                    })]
                  }), (0, m.jsx)(u, {
                    prevRef: _,
                    nextRef: C,
                    onNextClicked: () => {},
                    onPrevClicked: () => {},
                    onNextKeyDown: e => {
                      if ("Tab" === e.key && !e.shiftKey) {
                        const a = B?.slides[B?.activeIndex].querySelector('a, button, [role="button"]');
                        a && a?.tabIndex > -1 && (e.preventDefault(), a.focus())
                      }
                    },
                    theme: S
                  })]
                }), a && (0, m.jsx)("div", {
                  className: "rockstargames-sites-gta-gen9a1007d13e3a321bb18b5fc667025d545",
                  dangerouslySetInnerHTML: {
                    __html: a
                  }
                })]
              })
            }), I ? (0, m.jsx)(o.RC, {
              slidesPerView: I,
              onInit: e => {
                M(e);
                const a = setInterval((() => {
                  const {
                    height: t
                  } = e;
                  t > 0 && (W(t), K(1), clearInterval(a))
                }), 500)
              },
              grabCursor: !0,
              navigation: $,
              modules: [i.Vx],
              breakpoints: Q,
              slideClass: (0, d.classList)("swiper-slide", p),
              onSlideNextTransitionEnd: () => {
                w({
                  event: "carousel_next",
                  element_placement: g?.toLowerCase() ?? ""
                })
              },
              onSlidePrevTransitionEnd: () => {
                w({
                  event: "carousel_previous",
                  element_placement: g?.toLowerCase() ?? ""
                })
              },
              onSlideChangeTransitionEnd: () => {
                w({
                  event: "carousel_swipe",
                  element_placement: g?.toLowerCase() ?? ""
                })
              },
              children: T
            }) : ""]
          })
        }), null)
    },
    95137: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => h
      });
      var n = t(27926),
        i = t(74401);
      const s = {
          pillBtn: "rockstargames-sites-gta-gen9d008b074498ad02717806cc094b8a780",
          selected: "rockstargames-sites-gta-gen9be9a2e37ec59e339b0d72cd8e5256703",
          hero: "rockstargames-sites-gta-gen9d1346f9b98fbaac26948e361bd98b4c6",
          images: "rockstargames-sites-gta-gen9c9c078a3102a96b26f1bf1f98306384f",
          background: "rockstargames-sites-gta-gen9a271224ca2caf56b470059cdb98d9a42",
          gradient: "rockstargames-sites-gta-gen9ae257e9d159ae9bd7c8685e38ba16f59",
          layered: "rockstargames-sites-gta-gen9f663886f051e47ea04f097c85ae6625b",
          content: "rockstargames-sites-gta-gen9f9c204f451f3a53bcc307c00eb5f907f",
          descriptions: "rockstargames-sites-gta-gen9d1bbf288f3fe6c79e658764847d2890a",
          buttonGroup: "rockstargames-sites-gta-gen9fb373367ffd03ba01edaf671175244ab",
          ctaBlock: "rockstargames-sites-gta-gen9d4e5e627f7968400413c3b578b1b3143",
          primaryBtn: "rockstargames-sites-gta-gen9ff921058c7bbf6660b52da746e719577",
          secondaryBtn: "rockstargames-sites-gta-gen9a0c587b1487e33b081dc394dfd017fab",
          btnText: "rockstargames-sites-gta-gen9be305ab9e2c27b1458d3e7bb6a9f12e0",
          legalText: "rockstargames-sites-gta-gen9f625ffdd1b33a1642aa0dec12efe7897",
          shardsCarousel: "rockstargames-sites-gta-gen9e999b9cecfe233bcee8cab8682fb96bf"
        },
        r = {
          visible: {
            opacity: 1,
            transition: {
              ease: [.5, 0, 0, 1],
              duration: .75,
              when: "beforeChildren",
              delayChildren: .25,
              staggerChildren: .1
            }
          },
          hidden: {
            opacity: 0
          }
        },
        l = {
          visible: {
            opacity: 1,
            y: 0,
            height: "100%",
            overflow: "hidden",
            transition: {
              ease: [.5, 0, 0, 1],
              duration: .75
            }
          },
          hidden: {
            opacity: 0,
            y: 100,
            height: "0%",
            overflow: "hidden"
          }
        };
      var d = t(71403),
        o = t(68340),
        c = t(46632);
      const m = e => {
          let {
            title: a = "",
            mobileImg: t,
            desktopImg: n
          } = e;
          const r = (0, i.useGetCdnSource)(t ?? null),
            l = (0, i.useGetCdnSource)(n ?? r);
          return (0, c.jsx)("div", {
            className: s.shard,
            style: {
              "--background-image-mobile": `url(${r})`,
              "--background-image-desktop": `url(${l})`
            },
            children: (0, c.jsx)("h5", {
              children: a
            })
          })
        },
        u = e => {
          let {
            title: a = "Membership Rewards",
            name: t = "Membership Rewards",
            shards: n
          } = e;
          const [i, r] = (0, d.useState)(null);
          return (0, d.useEffect)((() => {
            n && r(n.reduce(((e, a) => {
              if (!a?.shardImg) return e;
              const {
                title: t,
                shardImg: n
              } = a, {
                mobile: i,
                desktop: s
              } = n;
              return e.push((0, c.jsx)(m, {
                title: t,
                mobileImg: i?.full_src,
                desktopImg: s?.full_src
              })), e
            }), []))
          }), [n]), i ? (0, c.jsx)("div", {
            className: s.shardsCarousel,
            children: (0, c.jsx)(o.A, {
              title: a,
              name: t,
              slideChildren: i,
              size: "lg",
              customSpaceBetween: 0
            })
          }) : null
        };
      var g = t(39695),
        f = t(31090),
        v = t(34634),
        b = t(32331);
      const p = e => {
          let {
            animated: a = !1,
            ctas: t = [],
            expandingButtonLabel: i = "Subscribe"
          } = e;
          const [r, o] = (0, d.useState)([]), [m, u] = (0, d.useState)([]);
          return (0, d.useEffect)((() => {
            const {
              expandingButtonsArray: e,
              plainButtonsArray: a
            } = t.reduce(((e, a) => (a.isInExpandingButton ? e.expandingButtonsArray.push({
              href: a.href,
              platform: a.platform,
              buttonText: a.buttonText
            }) : e.plainButtonsArray.push({
              icon: a.platform ?? "",
              title: a.buttonText,
              to: a.href
            }), e)), {
              expandingButtonsArray: [],
              plainButtonsArray: []
            });
            o(e), u(a)
          }), [t]), r.length ? (0, c.jsx)(n.motion.div, {
            variants: a ? l : void 0,
            children: (0, c.jsx)(g.A, {
              variant: "gen9",
              buttonText: i,
              platformsAndLinks: r,
              children: !!m.length && (0, c.jsx)(n.motion.div, {
                variants: l,
                children: (0, c.jsx)(b.A, {
                  buttons: m,
                  className: s.buttonGroup
                })
              })
            })
          }) : (0, c.jsx)(c.Fragment, {
            children: !!m.length && (0, c.jsx)(n.motion.div, {
              variants: l,
              children: (0, c.jsx)(b.A, {
                buttons: m,
                className: s.buttonGroup
              })
            })
          })
        },
        k = e => {
          let {
            animated: a = !1,
            brands: t = [],
            ctas: d = [],
            cta: o = [],
            description: m = "",
            expandingButtonLabel: u = "Subscribe",
            title: b = "",
            legalText: k
          } = e;
          return (0, c.jsxs)(n.motion.div, {
            className: s.content,
            initial: "hidden",
            animate: "visible",
            variants: a ? r : void 0,
            children: [(0, c.jsx)(n.motion.div, {
              variants: a ? l : void 0,
              children: (0, c.jsx)(v.A, {
                brands: t
              })
            }), (b || m) && (0, c.jsxs)(n.motion.div, {
              className: s.descriptions,
              variants: a ? l : void 0,
              children: [b && (0, c.jsx)("h2", {
                dangerouslySetInnerHTML: {
                  __html: b
                }
              }), m && (0, c.jsx)("p", {
                dangerouslySetInnerHTML: {
                  __html: m
                }
              })]
            }), !!o.length && (0, c.jsx)("div", {
              className: s.ctaBlock,
              children: (0, c.jsx)(i.TinaParser, {
                components: {
                  Cta: f.A,
                  ExpandingPlatformButton: g.A
                },
                tina: {
                  payload: {
                    content: o
                  }
                }
              })
            }), !!d.length && (0, c.jsx)("div", {
              className: s.ctaBlock,
              children: (0, c.jsx)(p, {
                animated: a,
                ctas: d,
                expandingButtonLabel: u
              })
            }), k && (0, c.jsx)(n.motion.div, {
              className: s.legalText,
              variants: a ? l : void 0,
              children: (0, c.jsx)("p", {
                dangerouslySetInnerHTML: {
                  __html: k
                }
              })
            })]
          })
        },
        h = e => {
          let {
            animated: a = !1,
            backgroundImage: t,
            brands: l = [],
            className: d,
            ctas: o = [],
            cta: m,
            description: g = "",
            expandingButtonLabel: f = "Subscribe",
            layeredImage: v,
            layeredImageSettings: b,
            legalText: p,
            shardsSection: h = {},
            theme: y = "gen9",
            title: x = ""
          } = e;
          const N = (e => {
              if (!e) return null;
              const a = {},
                t = new Map([
                  ["xsmall", "xs"],
                  ["small", "sm"],
                  ["medium", "md"],
                  ["large", "lg"],
                  ["xlarge", "xl"],
                  ["horizontal", "--layered-horizontal-offset-"],
                  ["vertical", "--layered-vertical-offset-"],
                  ["imageWidth", "--layered-image-width-"]
                ]);
              return Object.entries(e).forEach((e => {
                const [n, i] = e;
                if (t.has(n)) {
                  const e = t.get(n);
                  Object.entries(i).forEach((i => {
                    const [s, r] = i;
                    if (t.has(n) && t.has(s)) {
                      const n = `${t.get(s)}${e}`;
                      a[n] = "imageWidth" !== s ? r ? `${r}px` : "0px" : r ? `${r}vw` : "100vw"
                    }
                  }))
                }
              })), a
            })(b),
            S = (0, i.useGetCdnSource)(t?.mobile?.full_src ?? null),
            w = (0, i.useGetCdnSource)(t?.desktop?.full_src ?? S),
            j = (0, i.useGetCdnSource)(v?.mobile?.full_src ?? null),
            _ = (0, i.useGetCdnSource)(v?.desktop?.full_src ?? j);
          return (0, c.jsxs)(n.motion.div, {
            className: (0, i.classList)(s.hero, d),
            style: {
              "--background-image-desktop": `url(${w})`,
              "--background-image-mobile": `url(${S})`,
              "--layered-image-desktop": `url(${_})`,
              "--layered-image-mobile": `url(${j})`
            },
            initial: "hidden",
            animate: "visible",
            variants: a ? r : void 0,
            "data-type": "hero",
            theme: y,
            children: [(0, c.jsxs)("div", {
              className: s.images,
              children: [w && S ? (0, c.jsx)("div", {
                className: s.background,
                style: t?.style ?? {}
              }) : "", j && _ ? (0, c.jsx)("div", {
                className: s.layered,
                style: b ? N : {}
              }) : "", (0, c.jsx)("div", {
                className: s.gradient
              })]
            }), (0, c.jsx)(k, {
              animated: a,
              ctas: o,
              cta: m,
              description: g,
              expandingButtonLabel: f,
              title: x,
              brands: l,
              legalText: p
            }), h?.shards && (0, c.jsx)(u, {
              ...h
            })]
          })
        }
    },
    53623: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => u
      });
      var n = t(71403),
        i = t(74401),
        s = t(40207),
        r = t(49948),
        l = t(27926),
        d = t(62811),
        o = t(34634);
      const c = {
        pillBtn: "rockstargames-sites-gta-gen9b03cc125f63972f13ae84119af852edc",
        selected: "rockstargames-sites-gta-gen9fbcf46d7ef0b32e64b374eee6e3cda3e",
        promoModule: "rockstargames-sites-gta-gen9a586d11bf592ca821d65db7660518322",
        promoModuleImage: "rockstargames-sites-gta-gen9ccd749d613ceb73aedb825d77d22cd0b",
        gradient: "rockstargames-sites-gta-gen9e4f178a3d1e3dfef8b42f73eabd9919e",
        promoModuleContentContainer: "rockstargames-sites-gta-gen9d8348a62030f7e2f3c7a53cf67bef0f1",
        left: "rockstargames-sites-gta-gen9e56a5b7d9a696ea8ca340cc9b67998fc",
        right: "rockstargames-sites-gta-gen9c84d09e0c4466d20792d5a9016a00236",
        promoModuleTextContent: "rockstargames-sites-gta-gen9bf34746d222495ab8e30cede8de42d71",
        promoModuleWrapper: "rockstargames-sites-gta-gen9f6d46a24b050aad98fc3aae387b75586"
      };
      var m = t(46632);
      const u = e => {
        let {
          backgroundColor: a,
          brands: t = [],
          description: u = "",
          ctaLabel: g,
          ctaLink: f = "https://rockstargames.com",
          gradient: v = !0,
          image: b,
          imageOrientation: p = "right",
          title: k = "",
          name: h = ""
        } = e;
        const [y, x] = (0, n.useState)(!1), {
          ref: N,
          inView: S
        } = (0, r.useInView)({
          threshold: .6
        }), {
          track: w
        } = (0, s.useGtmTrack)(), j = {
          "--promo-background": a ?? "var(--black-200)",
          "--promo-image": `url(${(0,i.useGetCdnSource)(b)??"var(--promo-background)"})`,
          "--promo-order": "left" === p ? "row" : "row-reverse"
        };
        return (0, n.useEffect)((() => {
          S && !y && (w({
            event: "page_section_impression",
            element_placement: h
          }), x(!0))
        }), [S]), (0, m.jsx)(m.Fragment, {
          children: (0, m.jsx)("div", {
            className: c.promoModuleWrapper,
            children: (0, m.jsxs)(l.motion.div, {
              className: c.promoModule,
              style: {
                ...j
              },
              initial: {
                opacity: 0
              },
              whileInView: {
                opacity: 1
              },
              viewport: {
                margin: "-20%",
                once: !0
              },
              transition: {
                ease: "easeIn",
                duration: .4
              },
              ref: N,
              children: [(0, m.jsx)("div", {
                className: [c.promoModuleImage, v ? c.gradient : "", "left" === p ? c.left : c.right].join(" ")
              }), (0, m.jsxs)("div", {
                className: c.promoModuleContentContainer,
                children: [(0, m.jsx)(o.A, {
                  brands: t,
                  className: c.promoModuleBrands
                }), (0, m.jsxs)("div", {
                  className: c.promoModuleTextContent,
                  children: [k && (0, m.jsx)("h3", {
                    children: k
                  }), u && (0, m.jsx)("p", {
                    children: u
                  })]
                }), g && (0, m.jsx)(d.A, {
                  to: f,
                  text: g,
                  onClick: () => {
                    w({
                      event: "cta_other",
                      element_placement: "promo module",
                      link_url: f,
                      text: g
                    })
                  }
                })]
              })]
            })
          })
        })
      }
    },
    80256: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => r
      });
      var n = t(71403),
        i = t(49948),
        s = t(46632);
      const r = e => {
        let {
          thresholds: a,
          onThresholdReached: t,
          children: r
        } = e;
        const [l, d] = (0, n.useState)([]), [o, c] = (0, n.useState)(new Set);
        return (0, n.useEffect)((() => {
          const e = Array.from(new Set(a));
          e.sort(((e, a) => e - a)), d(e)
        }), [a]), (0, s.jsxs)("div", {
          style: {
            position: "relative"
          },
          children: [l.map((e => (0, s.jsx)(i.InView, {
            threshold: e,
            onChange: a => ((e, a) => {
              e && !o.has(a) && c((e => {
                const n = new Set(e);
                return l.forEach((e => {
                  e <= a && !n.has(e) && (n.add(e), t(e))
                })), n
              }))
            })(a, e),
            triggerOnce: !0,
            children: a => {
              let {
                ref: t
              } = a;
              return (0, s.jsx)("div", {
                ref: t,
                style: {
                  height: "1px",
                  position: "absolute",
                  top: 100 * e + "%"
                }
              })
            }
          }, e))), r]
        })
      }
    },
    52983: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => s
      });
      const n = {
        skeleton: "rockstargames-sites-gta-gen9f963a1ae95f7f5ac2c5192c3f357b6dc",
        pulse: "rockstargames-sites-gta-gen9e00ed88d692bbfc1a301dcfc61a077a9",
        gen9Hero: "rockstargames-sites-gta-gen9db0b80177710d337d93bddb97b8a7dea"
      };
      var i = t(46632);
      const s = e => {
        let {
          skeleton: a
        } = e;
        return a ? (0, i.jsx)("div", {
          className: [n.skeleton, n[a]].join(" ")
        }) : null
      }
    },
    22545: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => u
      });
      var n = t(71403),
        i = t(27926),
        s = t(40207),
        r = t(81902),
        l = t(89269);
      const d = "rockstargames-sites-gta-gen9eca98eb0b5b84a0c9a2e6d952545a2d5",
        o = "rockstargames-sites-gta-gen9d3d0b4ecd3bddba96c73f49fcca34ed8";
      var c = t(46632);
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
            thumbsPerView: t = 3,
            loop: u = !1,
            navigation: g = !1,
            slideChildren: f = [],
            variants: v = {
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
            track: p
          } = (0, s.useGtmTrack)(), [k, h] = (0, n.useState)([l.U1, l.WO, l.dK]), [y, x] = (0, n.useState)(null), [N, S] = (0, n.useState)(null);
          return (0, n.useEffect)((() => {
            const e = [l.U1, l.WO, l.dK];
            g && e.push(l.Vx), h(e)
          }), [g]), (0, n.useEffect)((() => {
            if (!f) return;
            const e = f.map(((e, a) => (0, c.jsx)(r.qr, {
              children: e
            }, Symbol(a).toString())));
            S(e)
          }), [f]), N ? (0, c.jsxs)(i.motion.div, {
            className: "rockstargames-sites-gta-gen9d4f245838b94234f21463a08a8112910",
            variants: v.parent,
            transition: b.parent,
            initial: "initial",
            animate: "animate",
            children: [(0, c.jsx)(i.motion.div, {
              className: d,
              variants: v.main,
              transition: b.main,
              initial: "initial",
              animate: "animate",
              children: (0, c.jsx)(r.RC, {
                loop: u,
                navigation: g,
                pagination: {
                  clickable: !0
                },
                thumbs: {
                  swiper: y
                },
                modules: k,
                breakpoints: m,
                className: d,
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
            }), (0, c.jsx)(i.motion.div, {
              className: o,
              variants: v.thumbs,
              transition: b.thumbs,
              initial: "initial",
              animate: "animate",
              children: (0, c.jsx)(r.RC, {
                threshold: 50,
                onSwiper: x,
                loop: u,
                breakpoints: m,
                slidesPerView: t,
                freeMode: !0,
                watchSlidesProgress: !0,
                modules: k,
                className: o,
                children: N
              })
            })]
          }) : null
        }
    },
    25180: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => c,
        X: () => o
      });
      var n = t(58407),
        i = t(74401),
        s = t(47252),
        r = t(52983),
        l = t(50048),
        d = t(46632);
      const o = e => {
          let {
            id: a = null,
            ids: t = null,
            setTitleDataPath: i = null,
            sync: s = !1
          } = e;
          const r = t ?? [a],
            {
              data: d
            } = (0, n.useQuery)(l.TinaModulesInfo, {
              variables: {
                ids: r,
                sync: s
              },
              setTitleDataPath: i,
              skip: !r.length
            });
          return d?.tinaModulesInfo ?? null
        },
        c = (0, s.A)((e => {
          let {
            components: a = {},
            id: t = null,
            ids: n = null,
            skeleton: s
          } = e;
          const l = o({
            id: t,
            ids: n
          });
          if (!l) return (0, d.jsx)(r.A, {
            skeleton: s
          });
          const c = l?.[0]?.tina;
          return c ? (0, d.jsx)(d.Fragment, {
            children: l.map(((e, t) => {
              let {
                tina: n
              } = e;
              return (0, d.jsx)(i.TinaParser, {
                components: a,
                tina: n,
                componentProps: {
                  tinaModulesInfo: l
                }
              }, t)
            }))
          }) : null
        }))
    },
    10931: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => o
      });
      var n = t(71403),
        i = t(58407),
        s = t(40207),
        r = t(94869);
      const l = {
        pillBtn: "rockstargames-sites-gta-gen9ae56f3a5bf16f1160a0cbc040c7611fa",
        selected: "rockstargames-sites-gta-gen9d7e34a082f54f22035320df51e8b4ed9",
        userVote: "rockstargames-sites-gta-gen9fd538df1ac730062880ff9ca1292dcc4",
        info: "rockstargames-sites-gta-gen9dd49c22b2bd842d7e8c11ac45b3a536b",
        voteContent: "rockstargames-sites-gta-gen9eb3c4c0d7629a1182cd138d3d2e6e081",
        loggedOutButtons: "rockstargames-sites-gta-gen9d00b4195df0f175083f6aa2a7d847d72",
        voteButtons: "rockstargames-sites-gta-gen9fdd10a481e3da0f8e9511b6a577052e0",
        downVote: "rockstargames-sites-gta-gen9abdbb2656b0080d66eb4d39b7e1eb38d",
        upVote: "rockstargames-sites-gta-gen9ea25ed07e937e2efdce0b99d076fbbe1",
        voteButtonActive: "rockstargames-sites-gta-gen9c31731d09d8118c6a82fe6edb193dc50"
      };
      var d = t(46632);
      const o = e => {
        let {
          description: a,
          foreign_id: t = document.location.pathname,
          foreign_type: o = "url",
          title: c
        } = e;
        const {
          track: m
        } = (0, s.useGtmTrack)(), {
          loggedIn: u
        } = (0, s.useRockstarUser)(), {
          refetch: g
        } = (0, i.useQuery)(r.UserGetVote, {
          skip: !0
        }), [f] = (0, i.useMutation)(r.UserCastVote), [v, b] = (0, n.useState)(null), p = (0, n.useCallback)((async e => {
          m({
            event: "cta_" + (e ? "like" : "dislike"),
            text: `${o} ${t}`
          });
          const a = {
              foreign_id: t,
              foreign_type: o,
              vote: e
            },
            n = await f({
              variables: a
            });
          b(n?.data?.userCastVote?.vote ?? null)
        }), [t, o]);
        return (0, n.useEffect)((() => {
          (async () => {
            if (!u || !t || !o) return;
            const e = await g({
              foreign_id: t,
              foreign_type: o
            });
            b(e?.data?.userGetVote?.vote ?? null)
          })()
        }), [t, o, u]), (0, d.jsx)("div", {
          className: l.userVote,
          children: (0, d.jsxs)("div", {
            className: l.voteContent,
            children: [(0, d.jsxs)("div", {
              className: l.info,
              children: [(0, d.jsx)("h3", {
                children: c
              }), (0, d.jsx)("p", {
                children: a
              })]
            }), (0, d.jsxs)("div", {
              className: [l.voteButtons, u ? "" : l.loggedOutButtons].join(" "),
              children: [(0, d.jsx)("button", {
                onClick: () => p(!0),
                className: [l.upVote, v ? l.voteButtonActive : ""].join(" "),
                type: "button",
                "aria-label": "Vote up"
              }), (0, d.jsx)("button", {
                className: [l.downVote, !1 === v ? l.voteButtonActive : ""].join(" "),
                onClick: () => p(!1),
                type: "button",
                "aria-label": "Vote down"
              })]
            })]
          })
        })
      }
    },
    71080: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => i
      });
      var n = t(46632);
      const i = e => {
        let {
          text: a,
          style: t
        } = e;
        return (0, n.jsx)("div", {
          className: "rockstargames-sites-gta-gen9b61bd7f274fd6d93c4bf33a9284b6b67",
          style: t,
          children: a
        })
      }
    },
    62811: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => d
      });
      var n = t(89779);
      const i = {
        pillBtn: "rockstargames-sites-gta-gen9b59962d0e68ccd73b5ee2e571528d469",
        selected: "rockstargames-sites-gta-gen9f5c57dad202e0d6ff855d5a4aca2c804",
        plusButton: "rockstargames-sites-gta-gen9cffaf489342637258d28f9b3b718836a",
        small: "rockstargames-sites-gta-gen9b8abf927f0ba0af0d8ac0e9c77690d34",
        btnText: "rockstargames-sites-gta-gen9e6e56461bfc2e426c4abc5451cd17284",
        btnTexticon: "rockstargames-sites-gta-gen9cef9f9ce913d167a1fe2e7118a407cdd",
        whiteBtn: "rockstargames-sites-gta-gen9b257e0629b9f8e101791d7a948ed15be",
        blackBtn: "rockstargames-sites-gta-gen9cb03bccaee79394858682d2ce4d08253",
        transparentBtn: "rockstargames-sites-gta-gen9d0460159a17533d4d23686d7dca76794",
        iconBtn: "rockstargames-sites-gta-gen9ac61186c3c22346c9a4ee2cd2820d341",
        link: "rockstargames-sites-gta-gen9c5920e56149b82f20f4db2ad9d397495",
        xboxone: "rockstargames-sites-gta-gen9a7057f2e6d398341f57bc462716d0508",
        xboxseriesxs: "rockstargames-sites-gta-gen9a693ab5879f34d7dea1737d3172ed4e4",
        ps4: "rockstargames-sites-gta-gen9a029ff88fc9aef470aaeef8053f90436",
        ps5: "rockstargames-sites-gta-gen9e25638751cf3e7267db23c6a401fcc36",
        pc: "rockstargames-sites-gta-gen9e03d92653f19a7ae3c4b3d5137bc9909"
      };
      var s = t(46632);
      const r = e => {
          let {
            children: a,
            className: t,
            onClick: n,
            style: i,
            ariaLabel: r
          } = e;
          return (0, s.jsx)("button", {
            className: t,
            onClick: n,
            style: i,
            type: "button",
            "aria-label": r,
            children: a
          })
        },
        l = e => {
          let {
            children: a,
            className: t,
            onClick: i,
            style: r,
            to: l,
            ariaLabel: d
          } = e;
          return (0, s.jsx)(n.NavLink, {
            className: t,
            onClick: i,
            style: r,
            to: l,
            "aria-label": d,
            children: a
          })
        },
        d = e => {
          let {
            btnColor: a = "#fff",
            className: t = "",
            consoleBtn: n,
            icon: d = "",
            img: o,
            labelColor: c = "#000",
            onClick: m,
            secondText: u,
            size: g,
            text: f,
            to: v,
            type: b = "",
            ariaLabel: p
          } = e;
          const k = [i.plusButton, i[b] ?? "", i[g] ?? "", i[n] ?? "", t].join(" "),
            h = {
              "--hvr-color": a ?? c,
              "--hvr-bg-color": c ?? a,
              "--hvr-border-color": a ?? c
            },
            y = (0, s.jsxs)(s.Fragment, {
              children: [o ? (0, s.jsx)("img", {
                src: o,
                alt: ""
              }) : "", (0, s.jsxs)("div", {
                className: i.btnText,
                icon: d,
                children: [f, u ? (0, s.jsx)("span", {
                  children: u
                }) : ""]
              })]
            });
          if (v) {
            if (v.startsWith("http")) {
              const e = v.startsWith(document.location.origin) ? "_self" : "_blank";
              return (0, s.jsx)("span", {
                onClick: m,
                onKeyDown: m,
                className: k,
                role: "button",
                "aria-label": p,
                tabIndex: 0,
                children: (0, s.jsx)("a", {
                  href: v,
                  target: e,
                  children: y
                })
              })
            }
            return (0, s.jsx)(l, {
              className: k,
              onClick: m,
              style: {
                ...h
              },
              to: v,
              ariaLabel: p,
              children: y
            })
          }
          return (0, s.jsx)(r, {
            className: k,
            onClick: m,
            style: {
              ...h
            },
            ariaLabel: p,
            children: y
          })
        }
    },
    28606: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => l
      });
      var n = t(26398),
        i = t(28089),
        s = t(42756);
      var r = t(46632);
      const l = e => {
        let {
          children: a,
          context: t = null,
          game: l,
          image: d = {},
          style: o = {},
          template: c = null,
          theme: m = null,
          reversedOnMobile: u = !1,
          className: g = "",
          id: f = null
        } = e;
        const v = (0, i.useImageParser)(d ?? {}),
          b = {
            ...o
          };
        if (v?.src?.desktop) {
          const e = (d?.style && d?.style["--background-image-size"]) ?? "var(--grid-background-size, cover)",
            a = (d?.style && d?.style["--background-image-repeat"]) ?? "var(--grid-background-repeat, no-repeat)",
            t = `var(--grid-background-position, center)/${e??"cover"}`;
          if (b.background = `url(${v?.src?.desktop}) ${a} ${t}`, d?.style && d?.style["--linear-gradient"]) b.background = `linear-gradient(${d?.style["--linear-gradient"]}), url(${v?.src?.desktop}) ${a} ${t}`;
          else if (d?.style && d?.style["--gradient-height"]) {
            const e = d?.style["--gradient-height"] || "3",
              n = d?.style["--gradient-start-color"] || "var(--background-color, transparent)",
              i = d?.style["--gradient-end-color"] || "var(--background-color, transparent)";
            b.background = `linear-gradient(180deg, ${n}, transparent ${e}%, transparent ${100-e}%, ${i}), url(${v?.src?.desktop}) ${a} ${t}`
          }
        }
        return (0, r.jsx)("div", {
          id: f,
          className: (0, n.classList)("rockstargames-sites-gta-gen9f42b4606ed4a5b16b7647ad7b7eb229d", u ? "rockstargames-sites-gta-gen9b00444166ce6346d7ca364a75a335ecc" : "", g),
          "data-game": "community" === c ? null : l,
          style: (0, s.safeStyles)(b),
          "data-context": t,
          "data-template": c,
          "data-theme": m,
          children: a
        })
      }
    },
    87839: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => d
      });
      var n = t(54252),
        i = t.n(n),
        s = t(74401),
        r = t(42756);
      var l = t(46632);
      const d = e => {
        let {
          children: a,
          attributes: t = {},
          className: n = "",
          style: d = {}
        } = e;
        return (0, l.jsx)("span", {
          className: (0, s.classList)(n, t?.className, "rockstargames-sites-gta-gen9a7f106a8036d74ed9282a741476c6b5a"),
          style: (0, r.safeStyles)(d ?? t?.style ?? {}),
          dangerouslySetInnerHTML: {
            __html: i().unescape(a)
          }
        })
      }
    },
    22941: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => m
      });
      var n = t(71403),
        i = t(72956),
        s = t.n(i),
        r = t(74401),
        l = t(42756);
      const d = {
        pillBtn: "rockstargames-sites-gta-gen9f87ac9a7d56545847cf4d8ca471b03e6",
        selected: "rockstargames-sites-gta-gen9a8ea61e57fd58bfcb99aef7e6d687045",
        grid: "rockstargames-sites-gta-gen9a57241f29873f89f89ab8b27994e71c3",
        itemList: "rockstargames-sites-gta-gen9daec3f5ce63d42cb07e3e724737c8361",
        gtaplus: "rockstargames-sites-gta-gen9bd78cfb71ed31029ba4279325166bfab",
        rdo: "rockstargames-sites-gta-gen9a6244398a800ffddab72c14f717b0eab",
        noImg: "rockstargames-sites-gta-gen9e88f741af7d5e0529ff4fb6bb82af04f",
        gtao: "rockstargames-sites-gta-gen9ab60d91453348d2e4c090ef3ebb04347",
        custom: "rockstargames-sites-gta-gen9c20e7ba6ceaba3afd37095b172797711",
        yellow: "rockstargames-sites-gta-gen9b16672deedfe102b065925cbe0fb931c",
        hotPink: "rockstargames-sites-gta-gen9d0d01601de7131d9d6d11321b4299e59",
        red: "rockstargames-sites-gta-gen9d1b5397aff94d33b57674b04a3456e03",
        turquoise: "rockstargames-sites-gta-gen9d6541b973ce158c8f2fb81483015211f",
        purple: "rockstargames-sites-gta-gen9f3e34d902681219d4d8490eb164f7727",
        teal: "rockstargames-sites-gta-gen9a6c3b6b6a2395eb18a1174294f26f4ea",
        blue: "rockstargames-sites-gta-gen9eade6e843c5afd48d3a8959fb0b88222",
        green: "rockstargames-sites-gta-gen9a82c313f8f85fc6304ddb703be2fa271",
        darkRed: "rockstargames-sites-gta-gen9d394c61fdce2bf8894ffb801ee680c2a",
        darkBlue: "rockstargames-sites-gta-gen9f1d73cc00a3ab644aab949183a8298a7",
        goldenrod: "rockstargames-sites-gta-gen9cdcb0c5076309a329da2a6e857cc3bdf",
        skull: "rockstargames-sites-gta-gen9ba4bd16bff2fbc40616457007b4a7442"
      };
      var o = t(46632);
      const {
        sanitize: c
      } = s(), m = e => {
        let {
          list: a,
          string: t,
          starColor: i,
          style: s,
          className: m,
          game: u,
          noImg: g,
          columns: f,
          mobileColumns: v
        } = e;
        const [b, p] = (0, n.useState)(null);
        return (0, n.useEffect)((() => {
          p(a)
        }), [a]), t || a ? f && b ? (0, o.jsx)("div", {
          className: d.grid,
          style: {
            "--ordered-list-grid-column": f,
            "--ordered-list-grid-column-mobile": v ?? f
          },
          children: (0, o.jsx)("ol", {
            style: (0, l.safeStyles)(s),
            className: (0, r.classList)(d.itemList, d.noImg, d[i], d[u]),
            children: b.map((e => (0, o.jsx)("li", {
              dangerouslySetInnerHTML: {
                __html: c(e.content)
              }
            }, e.content)))
          })
        }) : (0, o.jsx)("ol", {
          style: (0, l.safeStyles)(s),
          className: (0, r.classList)(d.itemList, d.custom, g ? d.noImg : "", i ? d[i] : "", u ? d[u] : "", m ?? ""),
          children: a.map((e => (0, o.jsx)("li", {
            dangerouslySetInnerHTML: {
              __html: c(e?.content ?? e)
            }
          }, e?.content)))
        }) : null
      }
    },
    355: (e, a, t) => {
      "use strict";
      t.r(a), t.d(a, {
        Animations: () => n,
        LiteMotion: () => d,
        withFadeIn: () => u,
        withFadeUp: () => b
      });
      var n = {};
      t.r(n), t.d(n, {
        getVariant: () => h,
        transitions: () => p,
        variants: () => k
      });
      var i = t(71403),
        s = t(27926),
        r = t(46632);
      const l = (0, i.forwardRef)(((e, a) => {
        const {
          children: t,
          tag: n = "div"
        } = e, i = s.m[n];
        return (0, r.jsx)(s.LazyMotion, {
          features: s.domAnimation,
          children: (0, r.jsx)(i, {
            ref: a,
            ...e,
            children: t
          })
        })
      }));
      l.displayName = "LiteMotion";
      const d = l,
        o = {
          visible: {
            opacity: 1
          },
          hidden: {
            opacity: 0
          }
        },
        c = {
          ease: "easeIn",
          duration: .4
        },
        m = e => {
          let {
            children: a
          } = e;
          return (0, r.jsx)(s.motion.div, Object.assign({
            className: "rockstargames-sites-gta-gen9f0ee4e641f1ac92151be887c9ebb8392",
            variants: o,
            initial: "hidden",
            whileInView: "visible",
            viewport: {
              margin: "-20%",
              once: !0
            },
            transition: c
          }, {
            children: a
          }))
        },
        u = e => a => (0, r.jsx)(m, {
          children: (0, r.jsx)(e, Object.assign({}, a))
        }),
        g = {
          visible: {
            opacity: 1,
            y: 0
          },
          hidden: {
            opacity: 0,
            y: 40
          }
        },
        f = {
          ease: "easeIn",
          duration: .75
        },
        v = e => {
          let {
            children: a
          } = e;
          return (0, r.jsx)(s.motion.div, {
            className: "rockstargames-sites-gta-gen9a479a10c5475b17a0564b60fecf98c8b",
            variants: g,
            initial: "hidden",
            whileInView: "visible",
            viewport: {
              margin: "-20%",
              once: !0
            },
            transition: f,
            children: a
          })
        },
        b = e => a => (0, r.jsx)(v, {
          children: (0, r.jsx)(e, {
            ...a
          })
        }),
        p = {
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
        k = {
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
          return k[arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "imageMask"][e]
        }
    },
    70350: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => s
      });
      var n = t(71403),
        i = t(31805);
      const s = e => {
        let {
          children: a
        } = e;
        const {
          parallaxController: t
        } = (0, i.as)();
        return (0, n.useLayoutEffect)((() => {
          if (!t) return;
          const e = setInterval((() => {
            t.update()
          }), 500);
          return () => clearInterval(e)
        }), [t]), a
      }
    },
    70373: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => r
      });
      var n = t(31805),
        i = t(74401);
      var s = t(46632);
      const r = e => {
        let {
          layers: a = [],
          displayClass: t = "",
          style: r = {}
        } = e;
        const l = (0, i.useGenerateCdnSource)();
        if (!a || !a[0]?.image) return null;
        const d = a.map((e => ({
          ...e,
          props: {
            style: {
              ...e.style
            }
          },
          style: void 0,
          image: l(e?.image ?? null)
        })));
        return (0, s.jsx)(n.y, {
          className: (0, i.classList)("rockstargames-sites-gta-gen9b8c85703a3c76902e49a61a6afcb81bc", t),
          layers: d,
          style: r
        })
      }
    },
    57300: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => l
      });
      var n = t(31805),
        i = t(74401);
      const s = "rockstargames-sites-gta-gen9c4aa8e5d29b433c400796d0c493a9a4d";
      var r = t(46632);
      const l = e => {
        let {
          minOffset: a = 0,
          maxOffset: t = 0,
          scrollAxis: l = "vertical",
          displayClass: d = "",
          style: o = {},
          children: c
        } = e;
        return "horizontal" === l ? (0, r.jsx)(n.kQ, {
          x: [a, t],
          className: (0, i.classList)(s, d),
          styleOuter: o,
          children: c
        }) : (0, r.jsx)(n.kQ, {
          y: [a, t],
          className: (0, i.classList)(s, d),
          styleOuter: o,
          children: c
        })
      }
    },
    28553: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => o
      });
      var n = t(71403),
        i = t(31805),
        s = t(74401),
        r = t(70350);
      const l = {
        parallaxWrapper: "rockstargames-sites-gta-gen9db1ab316d17367d31cf94cdde25e463a",
        large: "rockstargames-sites-gta-gen9d520d28c6e4e797aea99f61c89ad2bd8",
        medium: "rockstargames-sites-gta-gen9f008365ee42d37e24e606107346b1c83",
        small: "rockstargames-sites-gta-gen9cb5937d1a102ac4a66c4e373e6253946"
      };
      var d = t(46632);
      const o = e => {
        let {
          scrollAxis: a = "vertical",
          size: t = "",
          style: o = {},
          children: c
        } = e;
        return (0, d.jsx)(i.zE, {
          scrollAxis: a,
          children: (0, d.jsx)(r.A, {
            children: (0, d.jsx)("div", {
              className: (0, s.classList)(l.parallaxWrapper, l[t]),
              style: o,
              "data-context": "parallax-wrapper",
              children: c ? c.map(((e, t) => (0, n.cloneElement)(e, {
                scrollAxis: a,
                style: {
                  ...e?.props?.style,
                  zIndex: t
                }
              }))) : (0, d.jsx)("div", {})
            })
          })
        })
      }
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

      function t(e, a) {
        if ("FragmentSpread" === e.kind) a.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var n = e.type;
          "NamedType" === n.kind && a.add(n.name.value)
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
        body: "query TinaModulesList($types: [String], $locale: String!) {\n    tinaModulesList(types: $types, locale: $locale) {\n        results {\n            id_hash\n            id\n            title\n            type\n        }\n    }\n}\n\nquery TinaModulesInfo(\n    $ids: [String]!\n    $locale: String!\n    $sync: Boolean = false\n    $cache: Boolean = false\n) {\n    tinaModulesInfo(ids: $ids, locale: $locale, cache: $cache) {\n        id: id_hash\n        title\n        title_doc\n        type\n        sync_hash\n        to\n        visible\n        children {\n            title\n            id_hash\n            to\n            tina {\n                payload\n                variables {\n                    keys\n                }\n            }\n        }\n        tina {\n            payload\n            variables {\n                id @include(if: $sync)\n                keys\n                _translations @include(if: $sync) {\n                    locale\n                    keys\n                }\n            }\n        }\n    }\n}\n",
        name: "GraphQL request",
        locationOffset: {
          line: 1,
          column: 1
        }
      };
      var n = {};

      function i(e, a) {
        for (var t = 0; t < e.definitions.length; t++) {
          var n = e.definitions[t];
          if (n.name && n.name.value == a) return n
        }
      }

      function s(e, a) {
        var t = {
          kind: e.kind,
          definitions: [i(e, a)]
        };
        e.hasOwnProperty("loc") && (t.loc = e.loc);
        var s = n[a] || new Set,
          r = new Set,
          l = new Set;
        for (s.forEach((function(e) {
            l.add(e)
          })); l.size > 0;) {
          var d = l;
          l = new Set, d.forEach((function(e) {
            r.has(e) || (r.add(e), (n[e] || new Set).forEach((function(e) {
              l.add(e)
            })))
          }))
        }
        return r.forEach((function(a) {
          var n = i(e, a);
          n && t.definitions.push(n)
        })), t
      }
      a.definitions.forEach((function(e) {
        if (e.name) {
          var a = new Set;
          t(e, a), n[e.name.value] = a
        }
      })), e.exports = a, e.exports.TinaModulesList = s(a, "TinaModulesList"), e.exports.TinaModulesInfo = s(a, "TinaModulesInfo")
    },
    94869: e => {
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
                value: "foreign_id"
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
                value: "foreign_type"
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
                    value: "foreign_id"
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
                    value: "foreign_type"
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
                value: "foreign_id"
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
                value: "foreign_type"
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
                    value: "foreign_id"
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
                    value: "foreign_type"
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
          end: 394
        }
      };

      function t(e, a) {
        if ("FragmentSpread" === e.kind) a.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var n = e.type;
          "NamedType" === n.kind && a.add(n.name.value)
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
        body: "query UserGetVote($foreign_id: String!, $foreign_type: String!) {\n    userGetVote(foreign_id: $foreign_id, foreign_type: $foreign_type) {\n        vote\n    }\n}\n\nmutation UserCastVote(\n    $foreign_id: String!\n    $foreign_type: String!\n    $vote: Boolean!\n) {\n    userCastVote(\n        foreign_id: $foreign_id\n        foreign_type: $foreign_type\n        vote: $vote\n    ) {\n        vote\n    }\n}\n",
        name: "GraphQL request",
        locationOffset: {
          line: 1,
          column: 1
        }
      };
      var n = {};

      function i(e, a) {
        for (var t = 0; t < e.definitions.length; t++) {
          var n = e.definitions[t];
          if (n.name && n.name.value == a) return n
        }
      }

      function s(e, a) {
        var t = {
          kind: e.kind,
          definitions: [i(e, a)]
        };
        e.hasOwnProperty("loc") && (t.loc = e.loc);
        var s = n[a] || new Set,
          r = new Set,
          l = new Set;
        for (s.forEach((function(e) {
            l.add(e)
          })); l.size > 0;) {
          var d = l;
          l = new Set, d.forEach((function(e) {
            r.has(e) || (r.add(e), (n[e] || new Set).forEach((function(e) {
              l.add(e)
            })))
          }))
        }
        return r.forEach((function(a) {
          var n = i(e, a);
          n && t.definitions.push(n)
        })), t
      }
      a.definitions.forEach((function(e) {
        if (e.name) {
          var a = new Set;
          t(e, a), n[e.name.value] = a
        }
      })), e.exports = a, e.exports.UserGetVote = s(a, "UserGetVote"), e.exports.UserCastVote = s(a, "UserCastVote")
    }
  }
]);