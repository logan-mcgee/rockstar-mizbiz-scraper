try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "dd0da2a7-7438-4718-ac3d-7a03fde24e96", e._sentryDebugIdIdentifier = "sentry-dbid-dd0da2a7-7438-4718-ac3d-7a03fde24e96")
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
  [8072], {
    33054: (e, t, s) => {
      s.r(t), s.d(t, {
        default: () => E
      });
      var a = s(42295),
        n = s(4572),
        r = s.n(n),
        i = s(92440),
        c = s(34725);
      const d = ({
        backgroundImage: e,
        image: t,
        logoHorizontalPosition: s,
        logoVerticalPosition: n,
        enableOverlay: d = !1,
        overlayBackground: o = "rgba(0,0,0,0.25)"
      }) => {
        const l = (0, c.S1)(t ?? {}),
          g = (0, i.useGetCdnSource)(e?.mobile ?? null),
          m = (0, i.useGetCdnSource)(e?.desktop ?? g),
          u = l?.src?.mobile,
          f = l?.src?.desktop ?? u;
        return (0, a.jsx)("div", {
          className: r()("rockstargames-sites-gta-gen9dd3eed68318843fe25f147a11901017e", d ? "rockstargames-sites-gta-gen9d1ac49cbb3da8269c13f1ccc1b515fb4" : ""),
          style: {
            "--overlay-background-color": o
          },
          children: (0, a.jsx)("div", {
            className: "rockstargames-sites-gta-gen9b5e649bc428f66ddfa8db02936f5b69d",
            style: {
              "--background-image-mobile": `url(${g})`,
              "--background-image-desktop": `url(${m})`,
              "--logo-justify-position": s ?? "normal",
              "--logo-align-position": n ?? "normal"
            },
            children: f && (0, a.jsx)("img", {
              src: f,
              className: "rockstargames-sites-gta-gen9dab7157848250d13aea143ea8b7fae16",
              alt: l?.alt ?? ""
            })
          })
        })
      };
      var o = s(62229),
        l = s(42735),
        g = s(77044);

      function m(e, t) {
        return (0, g.w)(t || e, e)
      }

      function u(e, t, s) {
        const a = function(e, t) {
          return +m(e) - +m(t)
        }(e, t) / 1e3;
        return (0, l.u)(s?.roundingMethod)(a)
      }
      var f = s(95966),
        b = s(81788);
      const _ = (0, b.defineMessages)({
          countdown_timer_header_title: {
            id: "countdown_timer_header_title",
            description: "Header title for the countdown label",
            defaultMessage: "Time Remaining"
          },
          countdown_timer_header_pending_title: {
            id: "countdown_timer_header_pending_title",
            description: "Header pending title for the countdown label",
            defaultMessage: "Calculating Results..."
          },
          countdown_timer_days_title_long: {
            id: "countdown_timer_days_title_long",
            description: "Long title for the days label",
            defaultMessage: "Days"
          },
          countdown_timer_hours_title_long: {
            id: "countdown_timer_hours_title_long",
            description: "Long title for the hours label",
            defaultMessage: "Hours"
          },
          countdown_timer_minutes_title_long: {
            id: "countdown_timer_minutes_title_long",
            description: "Long title for the minutes label",
            defaultMessage: "Minutes"
          },
          countdown_timer_seconds_title_long: {
            id: "countdown_timer_seconds_title_long",
            description: "Long title for the seconds label",
            defaultMessage: "Seconds"
          },
          countdown_timer_days_title_short: {
            id: "countdown_timer_days_title_short",
            description: "Short title for the days label",
            defaultMessage: "D"
          },
          countdown_timer_hours_title_short: {
            id: "countdown_timer_hours_title_short",
            description: "Short title for the hours label",
            defaultMessage: "H"
          },
          countdown_timer_minutes_title_short: {
            id: "countdown_timer_minutes_title_short",
            description: "Short title for the minutes label",
            defaultMessage: "M"
          },
          countdown_timer_seconds_title_short: {
            id: "countdown_timer_seconds_title_short",
            description: "Short title for the seconds label",
            defaultMessage: "S"
          },
          countdown_timer_success_title: {
            id: "countdown_timer_success_title",
            description: "Success title for the countdown label",
            defaultMessage: "Success"
          },
          countdown_timer_failure_title: {
            id: "countdown_timer_failure_title",
            description: "Failure title for the countdown label",
            defaultMessage: "Failure"
          }
        }),
        h = {
          accentImage: "rockstargames-sites-gta-gen9c7cc81d743042cdf8330175fbdc237c8",
          container: "rockstargames-sites-gta-gen9a75315a80b4a2127779c1d0656a37dcb",
          countDownTimer: "rockstargames-sites-gta-gen9b33d322809ec0b09aef851e6dca73b11",
          countdownBlock: "rockstargames-sites-gta-gen9e0fd6be5b6c035a755dcccc738b8ae79",
          countdownContainer: "rockstargames-sites-gta-gen9c383d665f5c3b266cdb191ceba0489eb",
          countdownHeader: "rockstargames-sites-gta-gen9af4f1876dc568b373e66363449a4238b",
          countdownLabel: "rockstargames-sites-gta-gen9a5a92f35bc1b4a4dda2ba9cadb782fb9",
          counter: "rockstargames-sites-gta-gen9db9851183ab6187e0a5b811dc868935e",
          failureLabel: "rockstargames-sites-gta-gen9e04fcb94de64602e9bc436cf6f2e2c66",
          glow: "rockstargames-sites-gta-gen9c3d444564997451d6a645f7c8a74329a",
          pendingResults: "rockstargames-sites-gta-gen9e2dec301204f8ebc6324d2bcebb0d5b1",
          pillBtn: "rockstargames-sites-gta-gen9df86d9e7034d0c18169eb37da1a92a19",
          selected: "rockstargames-sites-gta-gen9c0b2094d0e834c542f0d5aeda45d8fe8",
          successLabel: "rockstargames-sites-gta-gen9d0a5db0538a803db976bde1b24a12b01",
          textGlow: "rockstargames-sites-gta-gen9c68be925ad17db7ea5e2493bd07891bf"
        },
        w = ({
          targetDate: e,
          status: t = "active",
          theme: s,
          includeSeconds: n = !1,
          showBackground: c,
          backgroundColor: d,
          successBgImages: l,
          failureBgImages: g
        }) => {
          const {
            isMobile: m
          } = (0, f.useWindowResize)(), [w, x] = (0, o.useState)(!1), k = (0, i.useGetCdnSource)(l?.imageLeft?.mobile ?? null), p = (0, i.useGetCdnSource)(l?.imageLeft?.desktop ?? k), j = (0, i.useGetCdnSource)(l?.imageRight?.mobile ?? null), v = (0, i.useGetCdnSource)(l?.imageRight?.desktop ?? j), N = (0, i.useGetCdnSource)(g?.imageLeft?.mobile ?? null), y = (0, i.useGetCdnSource)(g?.imageLeft?.desktop ?? N), M = (0, i.useGetCdnSource)(g?.imageRight?.mobile ?? null), S = (0, i.useGetCdnSource)(g?.imageRight?.desktop ?? M), C = (0, o.useCallback)(((e, t) => {
            const s = u(e, new Date);
            return s <= 0 ? (x(!0), {
              days: "00",
              hours: "00",
              minutes: "00",
              seconds: "00"
            }) : {
              days: String(Math.floor(s / 86400)).padStart(2, "0"),
              hours: String(Math.floor(s % 86400 / 3600)).padStart(2, "0"),
              minutes: String(Math.floor(s % 3600 / 60)).padStart(2, "0"),
              seconds: t ? String(Math.floor(s % 60)).padStart(2, "0") : "00"
            }
          }), []), [I, B] = (0, o.useState)((() => C(e, n)));
          return (0, o.useEffect)((() => {
            const t = setInterval((() => {
              B(C(e, n))
            }), n ? 1e3 : 6e4);
            return () => clearInterval(t)
          }), [e, n, C]), (0, a.jsxs)("div", {
            className: r()(h.countdownContainer, t),
            style: {
              "--counter-text-color": s?.enableTextGradient ? "transparent" : s?.textColor,
              "--counter-text-stroke-color": s?.enableTextStroke ? s?.textStrokeColor : "unset",
              "--counter-text-stroke-width": s?.enableTextStroke ? s?.textStrokeWidth : "unset",
              "--counter-text-shadow": s?.enableTextShadow ? s.textShadow : "unset",
              "--counter-text-gradient": s?.enableTextGradient ? s.textGradient : "none",
              "--counter-background-color": c ? d : "none",
              "--counter-orientation": "vertical" === s?.counterOrientation ? "column" : "row"
            },
            children: ["active" === t && (0, a.jsxs)(a.Fragment, {
              children: [(0, a.jsx)("h1", {
                className: h.countdownHeader,
                children: (0, a.jsx)(b.FormattedMessage, {
                  ..._.countdown_timer_header_title
                })
              }), "active" === t && w && (0, a.jsx)("div", {
                "data-testid": "pendingResults",
                className: h.pendingResults,
                children: (0, a.jsx)("p", {
                  children: (0, a.jsx)(b.FormattedMessage, {
                    ..._.countdown_timer_header_pending_title
                  })
                })
              }), (0, a.jsxs)("ul", {
                "data-testid": "countdownTimer",
                className: r()(h.countDownTimer),
                children: [(0, a.jsx)("li", {
                  children: (0, a.jsxs)("div", {
                    className: h.countdownBlock,
                    children: [(0, a.jsx)("span", {
                      className: r()(h.counter, s?.textGlow ? h.textGlow : ""),
                      children: I.days
                    }), (0, a.jsx)("div", {
                      className: h.countdownLabel,
                      children: m ? (0, a.jsx)(b.FormattedMessage, {
                        ..._.countdown_timer_days_title_short
                      }) : (0, a.jsx)(b.FormattedMessage, {
                        ..._.countdown_timer_days_title_long
                      })
                    })]
                  })
                }), (0, a.jsx)("li", {
                  children: (0, a.jsxs)("div", {
                    className: h.countdownBlock,
                    children: [(0, a.jsx)("span", {
                      className: r()(h.counter, s?.textGlow ? h.textGlow : ""),
                      children: I.hours
                    }), (0, a.jsx)("div", {
                      className: h.countdownLabel,
                      children: m ? (0, a.jsx)(b.FormattedMessage, {
                        ..._.countdown_timer_hours_title_short
                      }) : (0, a.jsx)(b.FormattedMessage, {
                        ..._.countdown_timer_hours_title_long
                      })
                    })]
                  })
                }), (0, a.jsx)("li", {
                  children: (0, a.jsxs)("div", {
                    className: h.countdownBlock,
                    children: [(0, a.jsx)("span", {
                      className: r()(h.counter, s?.textGlow ? h.textGlow : ""),
                      children: I.minutes
                    }), (0, a.jsx)("div", {
                      className: h.countdownLabel,
                      children: m ? (0, a.jsx)(b.FormattedMessage, {
                        ..._.countdown_timer_minutes_title_short
                      }) : (0, a.jsx)(b.FormattedMessage, {
                        ..._.countdown_timer_minutes_title_long
                      })
                    })]
                  })
                }), n && (0, a.jsx)("li", {
                  children: (0, a.jsxs)("div", {
                    className: r()(h.countdownBlock, h.secondsCounter),
                    children: [(0, a.jsx)("span", {
                      className: r()(h.counter, s?.textGlow ? h.textGlow : ""),
                      children: I.seconds
                    }), (0, a.jsx)("div", {
                      className: h.countdownLabel,
                      children: m ? (0, a.jsx)(b.FormattedMessage, {
                        ..._.countdown_timer_seconds_title_short
                      }) : (0, a.jsx)(b.FormattedMessage, {
                        ..._.countdown_timer_seconds_title_long
                      })
                    })]
                  })
                })]
              })]
            }), "success" === t && (0, a.jsxs)("div", {
              className: h.container,
              style: {
                display: "flex",
                alignItems: "center"
              },
              children: [p && (0, a.jsx)("img", {
                className: h.accentImage,
                src: p,
                alt: l?.imageLeft?.altText
              }), (0, a.jsx)("div", {
                "data-testid": "successMessage",
                className: h.successLabel,
                children: (0, a.jsx)(b.FormattedMessage, {
                  ..._.countdown_timer_success_title
                })
              }), v && (0, a.jsx)("img", {
                className: h.accentImage,
                src: v,
                alt: l?.imageRight?.altText
              })]
            }), "failure" === t && (0, a.jsxs)("div", {
              className: h.container,
              style: {
                display: "flex",
                alignItems: "center"
              },
              children: [y && (0, a.jsx)("img", {
                className: h.accentImage,
                src: y,
                alt: g?.imageLeft?.altText
              }), (0, a.jsx)("div", {
                "data-testid": "failureMessage",
                className: h.failureLabel,
                children: (0, a.jsx)(b.FormattedMessage, {
                  ..._.countdown_timer_failure_title
                })
              }), S && (0, a.jsx)("img", {
                className: h.accentImage,
                src: S,
                alt: g?.imageRight?.altText
              })]
            })]
          })
        };
      var x = s(96311),
        k = s(72148);
      const p = ({
          milestones: e,
          incompleteImage: t,
          completedImage: s
        }) => {
          const n = (e.findLastIndex((e => e.active)) + 1) / e.length,
            c = 100 / n;
          return (0, a.jsxs)("div", {
            className: "rockstargames-sites-gta-gen9db9153ad1fcdaae879f0cebf75ad5f67",
            children: [(0, a.jsx)("div", {
              className: "rockstargames-sites-gta-gen9df5cc11b5bcabefeb20bc0f9747ebc07",
              style: {
                backgroundImage: `url(${(0,i.useGetCdnSource)(t)})`
              },
              "data-testid": "incompleteImage"
            }), (0, a.jsx)("div", {
              className: "rockstargames-sites-gta-gen9eeebadb0565e0016deb8d8f50394c921",
              style: {
                backgroundImage: `url(${(0,i.useGetCdnSource)(s)})`,
                backgroundSize: `${c}%`,
                width: 100 * n + "%"
              },
              "data-testid": "completedImage"
            }), e.map(((t, s) => (0, a.jsx)("div", {
              className: r()("rockstargames-sites-gta-gen9faa53fa77749f0a05f711222185919e1", 0 === s ? "rockstargames-sites-gta-gen9fa6e2e8d17c632ef7af31fdfa3511bf4" : "", s === e.length - 1 ? "rockstargames-sites-gta-gen9b39f693a40f75244b1c104b8d83064e5" : ""),
              "data-testid": "milestoneBox",
              children: (0, a.jsx)("div", {
                className: "rockstargames-sites-gta-gen9b1177fbd4e3bcda4051638d86044b957"
              })
            }, s)))]
          })
        },
        j = (0, b.defineMessages)({
          milestone_marker_success_aria: {
            id: "milestone_marker_success_aria",
            description: "Aria label for check mark in milestone",
            defaultMessage: "Milestone achieved"
          }
        }),
        v = ({
          title: e,
          date: t,
          active: s,
          final: n
        }) => {
          const i = (0, b.useIntl)(),
            c = s ? "rockstargames-sites-gta-gen9a237ddf12d1e317c6389b99dab0ebaaf" : "",
            d = n ? "rockstargames-sites-gta-gen9cf16fb2f605281b22e08858bd0b10be8" : "";
          return (0, a.jsx)("div", {
            className: "rockstargames-sites-gta-gen9ea109f400f7e49404883a62664e5c4f9",
            children: (0, a.jsxs)("div", {
              className: r()("rockstargames-sites-gta-gen9a4776cf49ea083284f9d403b204c9b78", c, d),
              children: [(0, a.jsxs)("div", {
                className: "rockstargames-sites-gta-gen9fe16bcb2866e77749008c06e96e776c2",
                children: [(0, a.jsx)("h4", {
                  children: e
                }), s && (0, a.jsx)(x.Check, {
                  label: i.formatMessage(j.milestone_marker_success_aria),
                  className: "rockstargames-sites-gta-gen9d3b0319ef5d65d06d7e7fbe51cdc50c2",
                  testId: "checkmark"
                })]
              }), t && (0, a.jsx)("p", {
                className: "rockstargames-sites-gta-gen9f60607590769030728c7c9c3ea4fa883",
                children: i.formatDate(t, {
                  month: "short",
                  day: "numeric"
                })
              })]
            })
          })
        },
        N = ({
          alt: e = "",
          className: t = "",
          fill: s = "#E0330E"
        }) => (0, a.jsxs)("svg", {
          className: t,
          version: "1.1",
          width: "15",
          height: "11",
          viewBox: "0 0 15 11",
          xmlns: "http://www.w3.org/2000/svg",
          children: [(0, a.jsx)("title", {
            children: e
          }), (0, a.jsx)("path", {
            d: "M7.5 10.5166L0.138783 0.0166029L14.8612 0.0166017L7.5 10.5166Z",
            fill: s
          })]
        }),
        y = {
          milestoneFlag: "rockstargames-sites-gta-gen9e539ff2b75992a174908cc993833ae90",
          milestoneFlags: "rockstargames-sites-gta-gen9e6a44f2f6ba92288d38d5986f4ce5f05",
          milestoneGoal: "rockstargames-sites-gta-gen9c9ad62964ed8042657279d9d5377a47e",
          milestoneGroup: "rockstargames-sites-gta-gen9a5f5de9a7b0a3e41830f238970d1da21",
          milestoneHeading: "rockstargames-sites-gta-gen9f02d923d7ef81a5816b78333bee9bfed",
          milestoneMarkers: "rockstargames-sites-gta-gen9afc78b3a561d73d7cdd269dfecc370ef",
          milestoneScroll: "rockstargames-sites-gta-gen9e8a44929efe1e0c9f7d362ffdece627b",
          milestoneTitle: "rockstargames-sites-gta-gen9b192823eeef7fdd1f705b53709557681",
          pillBtn: "rockstargames-sites-gta-gen9ebc4e231a51238d29d0da502c76f23af",
          selected: "rockstargames-sites-gta-gen9b04a37e9b4523cd2a2628caa89e8e528"
        },
        M = ({
          heading: e,
          completedMilestoneImage: t,
          incompleteMilestoneImage: s,
          milestones: n,
          initialTitle: r,
          initialDate: i
        }) => {
          const c = (0, o.useRef)(null),
            d = (0, o.useRef)(null),
            [l, g] = (0, o.useState)(!1),
            {
              isMobile: m
            } = (0, k.G4)();
          if ((0, k.T0)(c), (0, o.useEffect)((() => {
              m && c.current && d.current && (c.current.scrollLeft = d.current.getBoundingClientRect().left - window.innerWidth / 2, c.current.addEventListener("scroll", (e => {
                const t = e.target;
                t && Math.ceil(t.scrollLeft + t.clientWidth) >= t.scrollWidth ? g(!0) : g(!1)
              })))
            }), [m]), !n || 0 === n.length) return null;
          const u = n.findLastIndex((e => e.active)),
            f = n[n.length - 1].title;
          return (0, a.jsxs)("section", {
            className: y.milestoneIndicators,
            children: [(0, a.jsxs)("div", {
              className: y.milestoneHeading,
              children: [(0, a.jsx)("h3", {
                className: y.milestoneTitle,
                children: e
              }), !l && (0, a.jsxs)("div", {
                className: y.milestoneGoal,
                "data-testid": "milestone-goal",
                children: [f, (0, a.jsx)(x.ArrowRight, {
                  label: "",
                  size: "MD"
                })]
              })]
            }), (0, a.jsx)("div", {
              className: y.milestoneScroll,
              ref: c,
              children: (0, a.jsxs)("div", {
                className: y.milestoneGroup,
                children: [(0, a.jsxs)("div", {
                  className: y.milestoneFlags,
                  children: [-1 === u ? (0, a.jsx)("div", {
                    ref: d,
                    className: y.milestoneFlag,
                    "data-testid": "marker",
                    children: (0, a.jsx)(N, {})
                  }) : (0, a.jsx)("div", {
                    className: y.milestoneFlag
                  }), n.map(((e, t) => t === u ? (0, a.jsx)("div", {
                    ref: d,
                    className: y.milestoneFlag,
                    "data-testid": "marker",
                    children: (0, a.jsx)(N, {})
                  }, t) : (0, a.jsx)("div", {
                    className: y.milestoneFlag
                  }, t)))]
                }), (0, a.jsx)(p, {
                  milestones: n,
                  incompleteImage: s,
                  completedImage: t
                }), (0, a.jsxs)("div", {
                  className: y.milestoneMarkers,
                  children: [(0, a.jsx)(v, {
                    title: r,
                    date: i,
                    active: !0
                  }), n.map(((e, t) => (0, a.jsx)(v, {
                    title: e.title,
                    date: e.date,
                    active: e.active,
                    final: t === n.length - 1
                  }, t)))]
                })]
              })
            })]
          })
        };
      var S = s(7545),
        C = s(24162),
        I = s(2918);
      const B = (0, b.defineMessages)({
        no_rewards_available_title: {
          id: "no_rewards_available_title",
          description: "Title message to be displayed when no rewards are available",
          defaultMessage: "No rewards available"
        },
        rewards_carousel_previous: {
          id: "rewards_carousel_previous",
          description: "Aria label for previous button of carousel",
          defaultMessage: "Previous"
        },
        rewards_carousel_next: {
          id: "rewards_carousel_next",
          description: "Aria label for next button of carousel",
          defaultMessage: "Next"
        }
      });
      var T = s(26732);
      const G = ({
          heading: e,
          description: t,
          ctaText: s,
          ctaLink: n
        }) => {
          const {
            track: r
          } = (0, I.useGtmTrack)();
          return (0, a.jsxs)("div", {
            className: "rockstargames-sites-gta-gen9c4cf0ba33588235c64debc11db928235",
            children: [e && (0, a.jsx)("h1", {
              className: "rockstargames-sites-gta-gen9cb4ee19aff83d215fef2225f96d83b6b",
              children: e
            }), (0, a.jsxs)("div", {
              className: "rockstargames-sites-gta-gen9aab3e05951ac3213b454f7eb3fad51ec",
              children: [t && (0, a.jsx)("p", {
                className: "rockstargames-sites-gta-gen9a84f1187295a03fc3589a99cb998488e",
                children: t
              }), s && (0, a.jsx)(T.A, {
                className: "rockstargames-sites-gta-gen9ae32e8cef2d804e10a42e71b2cc21178",
                text: s,
                to: n,
                onClick: () => r({
                  event: "cta_learn",
                  element_placement: "community challenge cta",
                  link_url: n,
                  text: s?.toLowerCase()
                })
              })]
            })]
          })
        },
        L = ({
          title: e,
          subTitle: t,
          rewardsBgImage: s
        }) => {
          const n = (0, i.useGetCdnSource)(s?.mobile ?? null),
            r = (0, i.useGetCdnSource)(s?.desktop ?? n);
          return (0, a.jsx)("div", {
            className: "rockstargames-sites-gta-gen9b2b3a24de3089dd7ee6d7f8761856ec7",
            style: {
              "--rewards-background-image": `url(${r})`
            },
            children: (0, a.jsxs)("div", {
              className: "rockstargames-sites-gta-gen9d8be908607e3f417a121c4f517eabb8a",
              children: [(0, a.jsx)("div", {
                className: "rockstargames-sites-gta-gen9d285d31afa0ea914d77450534007eac1",
                children: t
              }), (0, a.jsx)("div", {
                className: "rockstargames-sites-gta-gen9f5b76a553164a72970797171c62d4cee",
                children: e
              })]
            })
          })
        },
        R = {
          btnArea: "rockstargames-sites-gta-gen9ec2f4f73ee41d2c305de300fe2a1067c",
          disabled: "rockstargames-sites-gta-gen9e8928322f161c546fe04da38db46b921",
          leftColumn: "rockstargames-sites-gta-gen9c50f481110cd058d98a7cba076dce1d9",
          navControl: "rockstargames-sites-gta-gen9c172cadbafd0b3109750a2288b5b2739",
          nextBtn: "rockstargames-sites-gta-gen9fce09b6c7a9b72ebfe18b5c063345dfd",
          noRewardsAvailable: "rockstargames-sites-gta-gen9fa90b4db18401a13c12bc6318fc904fa",
          pillBtn: "rockstargames-sites-gta-gen9edff349918119db50cbffaffc9b1ba1b",
          prevBtn: "rockstargames-sites-gta-gen9d6923e3577aef4f61913c9e70d0402e9",
          rewardPanel: "rockstargames-sites-gta-gen9aed1683fb6745e40f5f6dad85f78495d",
          rewardsWrapper: "rockstargames-sites-gta-gen9b3747a28c2a053e6e1362ac3c8ea7d45",
          rightColumn: "rockstargames-sites-gta-gen9d4c1df6801986642b147b49eebfa62fa",
          selected: "rockstargames-sites-gta-gen9c9f8fb57a3f3eb56b7cba86102b43710",
          "swiper-preloader-spin": "rockstargames-sites-gta-gen9b69ff206cfb10a6b2701490c988d9582",
          titleHeading: "rockstargames-sites-gta-gen9d819c49ab450182c509e6c373f1e405f"
        },
        F = ({
          deck: e,
          detail: t
        }) => {
          const {
            isMobile: s
          } = (0, f.useWindowResize)(), n = (0, b.useIntl)(), i = (0, o.useRef)(null), c = (0, o.useRef)(null), d = (0, o.useRef)(null), l = (0, o.useRef)(), [g, m] = (0, o.useState)(!1), [u, _] = (0, o.useState)(), [h, w] = (0, o.useState)(!1), [x, k] = (0, o.useState)(!1), {
            track: p
          } = (0, I.useGtmTrack)(), j = l?.current?.swiper, v = e?.heading, N = e?.cards;
          (0, o.useEffect)((() => {
            if (j && "number" == typeof j?.params?.slidesPerView) {
              const e = j.slides?.length;
              m(e > j.params.slidesPerView)
            }
          }), [N, j?.params.slidesPerView]), (0, o.useEffect)((() => {
            _({
              nextEl: c.current,
              prevEl: i.current
            })
          }), [c, i]);
          const y = () => {
              j?.slidePrev(300, !1), p({
                event: "carousel_prev",
                element_placement: "community challenge rewards"
              })
            },
            M = () => {
              j?.slideNext(300, !1), p({
                event: "carousel_next",
                element_placement: "community challenge rewards"
              })
            },
            T = e => {
              if ("Tab" === e.key && !e.shiftKey) {
                const t = j?.slides[j?.activeIndex].querySelector('a, button, [role="button"]');
                t && t?.tabIndex > -1 && (e.preventDefault(), t.focus())
              }
            };
          return (0, a.jsxs)("div", {
            className: R.rewardPanel,
            children: [(0, a.jsx)("div", {
              className: R.leftColumn,
              children: (0, a.jsx)(G, {
                ...t
              })
            }), (0, a.jsx)("div", {
              ref: d,
              className: R.rightColumn,
              children: N?.length ? (0, a.jsxs)(a.Fragment, {
                children: [(0, a.jsxs)("div", {
                  className: R.navControl,
                  children: [(0, a.jsx)("h1", {
                    className: R.titleHeading,
                    children: v
                  }), !s && g && (0, a.jsxs)("div", {
                    className: R.btnArea,
                    children: [(0, a.jsx)("button", {
                      "data-testid": "prevBtn",
                      ref: i,
                      className: r()(R.prevBtn, h ? R.disabled : ""),
                      onClick: y,
                      "aria-label": n.formatMessage(B.rewards_carousel_previous),
                      type: "button",
                      disabled: h
                    }), (0, a.jsx)("button", {
                      "data-testid": "nextBtn",
                      ref: c,
                      className: r()(R.nextBtn, x ? R.disabled : ""),
                      onClick: M,
                      onKeyDown: T,
                      "aria-label": n.formatMessage(B.rewards_carousel_next),
                      type: "button",
                      disabled: x
                    })]
                  })]
                }), (0, a.jsxs)(C.RC, {
                  slidesPerView: 1.25,
                  ref: l,
                  onSlideChange: e => {
                    w(e.isBeginning), k(e.isEnd)
                  },
                  onSlidesUpdated: e => {
                    w(e.isBeginning), k(e.isEnd)
                  },
                  modules: [S.Vx],
                  spaceBetween: 50,
                  breakpoints: {
                    0: {
                      spaceBetween: 16,
                      slidesPerView: 1
                    },
                    414: {
                      spaceBetween: 16,
                      slidesPerView: 1.25
                    },
                    768: {
                      spaceBetween: 16,
                      slidesPerView: 1.5
                    },
                    1024: {
                      spaceBetween: 18,
                      slidesPerView: 2
                    },
                    1280: {
                      spaceBetween: 18,
                      slidesPerView: 1.25
                    },
                    1440: {
                      spaceBetween: 18,
                      slidesPerView: 1.5
                    },
                    1920: {
                      spaceBetween: 20,
                      slidesPerView: 2
                    },
                    2560: {
                      spaceBetween: 22,
                      slidesPerView: 2
                    }
                  },
                  navigation: u,
                  slideClass: "swiper-slide",
                  onSlideChangeTransitionEnd: () => {
                    p({
                      event: "carousel_swipe",
                      element_placement: "community challenge rewards"
                    })
                  },
                  children: [s && (0, a.jsxs)("div", {
                    className: R.btnArea,
                    children: [(0, a.jsx)("button", {
                      "data-testid": "prevBtn",
                      ref: i,
                      className: r()(R.prevBtn, h ? R.disabled : ""),
                      onClick: y,
                      "aria-label": n.formatMessage(B.rewards_carousel_previous),
                      type: "button",
                      disabled: h
                    }), (0, a.jsx)("button", {
                      "data-testid": "nextBtn",
                      ref: c,
                      className: r()(R.nextBtn, x ? R.disabled : ""),
                      onClick: M,
                      onKeyDown: T,
                      "aria-label": n.formatMessage(B.rewards_carousel_next),
                      type: "button",
                      disabled: x
                    })]
                  }), N.map(((e, t) => {
                    const s = e?.title,
                      n = e?.subTitle,
                      r = e?.rewardsBgImage;
                    return (0, a.jsx)(C.qr, {
                      className: R.slide,
                      onFocus: () => (e => {
                        j?.slideTo(e)
                      })(t),
                      children: (0, a.jsx)(L, {
                        title: s,
                        subTitle: n,
                        rewardsBgImage: r
                      })
                    }, t)
                  }))]
                })]
              }) : (0, a.jsx)("div", {
                className: R.noRewardsAvailable,
                children: (0, a.jsx)(b.FormattedMessage, {
                  ...B.no_rewards_available_title
                })
              })
            })]
          })
        },
        P = {
          communityChallengeInfoPanel: "rockstargames-sites-gta-gen9df615cfc52fdd4ced7efec100c0504c6",
          communityChallenges: "rockstargames-sites-gta-gen9dc0abf139506d2de9a4ec791e49331ef",
          content: "rockstargames-sites-gta-gen9b3af9e460a0d8d3aafdf3f71d795c94d",
          pillBtn: "rockstargames-sites-gta-gen9c60c1ea7626c520b2211fa5f0b18061b",
          selected: "rockstargames-sites-gta-gen9b58652ec7e005a714810a11cc4b2bb7f",
          wrapper: "rockstargames-sites-gta-gen9e3332f7d8fb8c01ce3af42b2fd4aebed"
        },
        D = JSON.parse('{"en-US":{"countdown_timer_days_title_long":"Days","countdown_timer_days_title_short":"D","countdown_timer_failure_title":"Failure","countdown_timer_header_pending_title":"Calculating Results...","countdown_timer_header_title":"Time Remaining","countdown_timer_hours_title_long":"Hours","countdown_timer_hours_title_short":"H","countdown_timer_minutes_title_long":"Minutes","countdown_timer_minutes_title_short":"M","countdown_timer_seconds_title_long":"Seconds","countdown_timer_seconds_title_short":"S","countdown_timer_success_title":"Success","milestone_marker_success_aria":"Milestone achieved","no_rewards_available_title":"No rewards available","rewards_carousel_next":"Next","rewards_carousel_previous":"Previous"}}'),
        E = (0, b.withIntl)((({
          banner: e,
          countdown: t,
          rewards: s,
          milestoneIndicator: n
        }) => (0, a.jsx)("div", {
          className: P.communityChallenges,
          children: (0, a.jsxs)("div", {
            className: P.wrapper,
            children: [e && (0, a.jsx)(d, {
              ...e
            }), (0, a.jsxs)("div", {
              className: P.content,
              children: [t?.timer && (0, a.jsx)(w, {
                ...t.timer
              }), n && (0, a.jsx)(M, {
                ...n
              }), s && (0, a.jsx)("section", {
                className: P.rewardsSection,
                children: (0, a.jsx)(F, {
                  ...s
                })
              })]
            })]
          })
        })), D)
    },
    42735: (e, t, s) => {
      function a(e) {
        return t => {
          const s = (e ? Math[e] : Math.trunc)(t);
          return 0 === s ? 0 : s
        }
      }
      s.d(t, {
        u: () => a
      })
    },
    77044: (e, t, s) => {
      s.d(t, {
        w: () => n
      });
      var a = s(77984);

      function n(e, t) {
        return "function" == typeof e ? e(t) : e && "object" == typeof e && a._P in e ? e[a._P](t) : e instanceof Date ? new e.constructor(t) : new Date(t)
      }
    },
    77984: (e, t, s) => {
      s.d(t, {
        _P: () => n,
        s0: () => a
      }), Math.pow(10, 8);
      const a = 36e5,
        n = Symbol.for("constructDateFrom")
    }
  }
]);