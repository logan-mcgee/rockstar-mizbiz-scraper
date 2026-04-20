try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "02f4908d-118b-45ce-8d8e-c89a0d8847f7", e._sentryDebugIdIdentifier = "sentry-dbid-02f4908d-118b-45ce-8d8e-c89a0d8847f7")
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
  [6190], {
    33360: (e, t, s) => {
      s.r(t), s.d(t, {
        default: () => F
      });
      var a = s(42295),
        n = s(1556),
        o = s.n(n),
        i = s(22030),
        r = s(34725);
      const d = ({
        backgroundImage: e,
        image: t,
        logoHorizontalPosition: s,
        logoVerticalPosition: n,
        enableOverlay: d = !1,
        overlayBackground: l = "rgba(0,0,0,0.25)"
      }) => {
        const c = (0, r.S1)(t ?? {}),
          _ = (0, i.useGetCdnSource)(e?.mobile ?? null),
          u = (0, i.useGetCdnSource)(e?.desktop ?? _),
          m = c?.src?.mobile,
          g = c?.src?.desktop ?? m;
        return (0, a.jsx)("div", {
          className: o()("rockstargames-sites-gta-gen9dd3eed68318843fe25f147a11901017e", d ? "rockstargames-sites-gta-gen9d1ac49cbb3da8269c13f1ccc1b515fb4" : ""),
          style: {
            "--overlay-background-color": l
          },
          children: (0, a.jsx)("div", {
            className: "rockstargames-sites-gta-gen9b5e649bc428f66ddfa8db02936f5b69d",
            style: {
              "--background-image-mobile": `url(${_})`,
              "--background-image-desktop": `url(${u})`,
              "--logo-justify-position": s ?? "normal",
              "--logo-align-position": n ?? "normal"
            },
            children: g && (0, a.jsx)("img", {
              src: g,
              className: "rockstargames-sites-gta-gen9dab7157848250d13aea143ea8b7fae16",
              alt: c?.alt ?? ""
            })
          })
        })
      };
      var l = s(71127),
        c = s(20332),
        _ = s(58136),
        u = s(56990);
      const m = (0, u.defineMessages)({
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
        g = {
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
          showBackground: r,
          backgroundColor: d,
          successBgImages: w,
          failureBgImages: f
        }) => {
          const {
            isMobile: b
          } = (0, _.useWindowResize)(), [h, x] = (0, l.useState)(!1), p = (0, i.useGetCdnSource)(w?.imageLeft?.mobile ?? null), k = (0, i.useGetCdnSource)(w?.imageLeft?.desktop ?? p), v = (0, i.useGetCdnSource)(w?.imageRight?.mobile ?? null), j = (0, i.useGetCdnSource)(w?.imageRight?.desktop ?? v), y = (0, i.useGetCdnSource)(f?.imageLeft?.mobile ?? null), N = (0, i.useGetCdnSource)(f?.imageLeft?.desktop ?? y), M = (0, i.useGetCdnSource)(f?.imageRight?.mobile ?? null), S = (0, i.useGetCdnSource)(f?.imageRight?.desktop ?? M), C = (0, l.useCallback)((e, t) => {
            const s = new Date,
              a = (0, c.O)(e, s);
            return a <= 0 ? (x(!0), {
              days: "00",
              hours: "00",
              minutes: "00",
              seconds: "00"
            }) : {
              days: String(Math.floor(a / 86400)).padStart(2, "0"),
              hours: String(Math.floor(a % 86400 / 3600)).padStart(2, "0"),
              minutes: String(Math.floor(a % 3600 / 60)).padStart(2, "0"),
              seconds: t ? String(Math.floor(a % 60)).padStart(2, "0") : "00"
            }
          }, []), [T, B] = (0, l.useState)(() => C(e, n));
          return (0, l.useEffect)(() => {
            const t = setInterval(() => {
              B(C(e, n))
            }, n ? 1e3 : 6e4);
            return () => clearInterval(t)
          }, [e, n, C]), (0, a.jsxs)("div", {
            className: o()(g.countdownContainer, t),
            style: {
              "--counter-text-color": s?.enableTextGradient ? "transparent" : s?.textColor,
              "--counter-text-stroke-color": s?.enableTextStroke ? s?.textStrokeColor : "unset",
              "--counter-text-stroke-width": s?.enableTextStroke ? s?.textStrokeWidth : "unset",
              "--counter-text-shadow": s?.enableTextShadow ? s.textShadow : "unset",
              "--counter-text-gradient": s?.enableTextGradient ? s.textGradient : "none",
              "--counter-background-color": r ? d : "none",
              "--counter-orientation": "vertical" === s?.counterOrientation ? "column" : "row"
            },
            children: ["active" === t && (0, a.jsxs)(a.Fragment, {
              children: [(0, a.jsx)("h1", {
                className: g.countdownHeader,
                children: (0, a.jsx)(u.FormattedMessage, {
                  ...m.countdown_timer_header_title
                })
              }), "active" === t && h && (0, a.jsx)("div", {
                "data-testid": "pendingResults",
                className: g.pendingResults,
                children: (0, a.jsx)("p", {
                  children: (0, a.jsx)(u.FormattedMessage, {
                    ...m.countdown_timer_header_pending_title
                  })
                })
              }), (0, a.jsxs)("ul", {
                "data-testid": "countdownTimer",
                className: o()(g.countDownTimer),
                children: [(0, a.jsx)("li", {
                  children: (0, a.jsxs)("div", {
                    className: g.countdownBlock,
                    children: [(0, a.jsx)("span", {
                      className: o()(g.counter, s?.textGlow ? g.textGlow : ""),
                      children: T.days
                    }), (0, a.jsx)("div", {
                      className: g.countdownLabel,
                      children: b ? (0, a.jsx)(u.FormattedMessage, {
                        ...m.countdown_timer_days_title_short
                      }) : (0, a.jsx)(u.FormattedMessage, {
                        ...m.countdown_timer_days_title_long
                      })
                    })]
                  })
                }), (0, a.jsx)("li", {
                  children: (0, a.jsxs)("div", {
                    className: g.countdownBlock,
                    children: [(0, a.jsx)("span", {
                      className: o()(g.counter, s?.textGlow ? g.textGlow : ""),
                      children: T.hours
                    }), (0, a.jsx)("div", {
                      className: g.countdownLabel,
                      children: b ? (0, a.jsx)(u.FormattedMessage, {
                        ...m.countdown_timer_hours_title_short
                      }) : (0, a.jsx)(u.FormattedMessage, {
                        ...m.countdown_timer_hours_title_long
                      })
                    })]
                  })
                }), (0, a.jsx)("li", {
                  children: (0, a.jsxs)("div", {
                    className: g.countdownBlock,
                    children: [(0, a.jsx)("span", {
                      className: o()(g.counter, s?.textGlow ? g.textGlow : ""),
                      children: T.minutes
                    }), (0, a.jsx)("div", {
                      className: g.countdownLabel,
                      children: b ? (0, a.jsx)(u.FormattedMessage, {
                        ...m.countdown_timer_minutes_title_short
                      }) : (0, a.jsx)(u.FormattedMessage, {
                        ...m.countdown_timer_minutes_title_long
                      })
                    })]
                  })
                }), n && (0, a.jsx)("li", {
                  children: (0, a.jsxs)("div", {
                    className: o()(g.countdownBlock, g.secondsCounter),
                    children: [(0, a.jsx)("span", {
                      className: o()(g.counter, s?.textGlow ? g.textGlow : ""),
                      children: T.seconds
                    }), (0, a.jsx)("div", {
                      className: g.countdownLabel,
                      children: b ? (0, a.jsx)(u.FormattedMessage, {
                        ...m.countdown_timer_seconds_title_short
                      }) : (0, a.jsx)(u.FormattedMessage, {
                        ...m.countdown_timer_seconds_title_long
                      })
                    })]
                  })
                })]
              })]
            }), "success" === t && (0, a.jsxs)("div", {
              className: g.container,
              style: {
                display: "flex",
                alignItems: "center"
              },
              children: [k && (0, a.jsx)("img", {
                className: g.accentImage,
                src: k,
                alt: w?.imageLeft?.altText
              }), (0, a.jsx)("div", {
                "data-testid": "successMessage",
                className: g.successLabel,
                children: (0, a.jsx)(u.FormattedMessage, {
                  ...m.countdown_timer_success_title
                })
              }), j && (0, a.jsx)("img", {
                className: g.accentImage,
                src: j,
                alt: w?.imageRight?.altText
              })]
            }), "failure" === t && (0, a.jsxs)("div", {
              className: g.container,
              style: {
                display: "flex",
                alignItems: "center"
              },
              children: [N && (0, a.jsx)("img", {
                className: g.accentImage,
                src: N,
                alt: f?.imageLeft?.altText
              }), (0, a.jsx)("div", {
                "data-testid": "failureMessage",
                className: g.failureLabel,
                children: (0, a.jsx)(u.FormattedMessage, {
                  ...m.countdown_timer_failure_title
                })
              }), S && (0, a.jsx)("img", {
                className: g.accentImage,
                src: S,
                alt: f?.imageRight?.altText
              })]
            })]
          })
        };
      var f = s(83613),
        b = s(65085);
      const h = ({
          milestones: e,
          incompleteImage: t,
          completedImage: s
        }) => {
          const n = (e.findLastIndex(e => e.active) + 1) / e.length,
            r = 100 / n;
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
                backgroundSize: `${r}%`,
                width: 100 * n + "%"
              },
              "data-testid": "completedImage"
            }), e.map((t, s) => (0, a.jsx)("div", {
              className: o()("rockstargames-sites-gta-gen9faa53fa77749f0a05f711222185919e1", 0 === s ? "rockstargames-sites-gta-gen9fa6e2e8d17c632ef7af31fdfa3511bf4" : "", s === e.length - 1 ? "rockstargames-sites-gta-gen9b39f693a40f75244b1c104b8d83064e5" : ""),
              "data-testid": "milestoneBox",
              children: (0, a.jsx)("div", {
                className: "rockstargames-sites-gta-gen9b1177fbd4e3bcda4051638d86044b957"
              })
            }, s))]
          })
        },
        x = (0, u.defineMessages)({
          milestone_marker_success_aria: {
            id: "milestone_marker_success_aria",
            description: "Aria label for check mark in milestone",
            defaultMessage: "Milestone achieved"
          }
        }),
        p = ({
          title: e,
          date: t,
          active: s,
          final: n
        }) => {
          const i = (0, u.useIntl)(),
            r = s ? "rockstargames-sites-gta-gen9a237ddf12d1e317c6389b99dab0ebaaf" : "",
            d = n ? "rockstargames-sites-gta-gen9cf16fb2f605281b22e08858bd0b10be8" : "";
          return (0, a.jsx)("div", {
            className: "rockstargames-sites-gta-gen9ea109f400f7e49404883a62664e5c4f9",
            children: (0, a.jsxs)("div", {
              className: o()("rockstargames-sites-gta-gen9a4776cf49ea083284f9d403b204c9b78", r, d),
              children: [(0, a.jsxs)("div", {
                className: "rockstargames-sites-gta-gen9fe16bcb2866e77749008c06e96e776c2",
                children: [(0, a.jsx)("h4", {
                  children: e
                }), s && (0, a.jsx)(f.Check, {
                  label: i.formatMessage(x.milestone_marker_success_aria),
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
        k = ({
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
        v = {
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
        j = ({
          heading: e,
          completedMilestoneImage: t,
          incompleteMilestoneImage: s,
          milestones: n,
          initialTitle: o,
          initialDate: i
        }) => {
          const r = (0, l.useRef)(null),
            d = (0, l.useRef)(null),
            [c, _] = (0, l.useState)(!1),
            {
              isMobile: u
            } = (0, b.G4)();
          if ((0, b.T0)(r), (0, l.useEffect)(() => {
              u && r.current && d.current && (r.current.scrollLeft = d.current.getBoundingClientRect().left - window.innerWidth / 2, r.current.addEventListener("scroll", e => {
                const t = e.target;
                t && Math.ceil(t.scrollLeft + t.clientWidth) >= t.scrollWidth ? _(!0) : _(!1)
              }))
            }, [u]), !n || 0 === n.length) return null;
          const m = n.findLastIndex(e => e.active),
            g = n[n.length - 1].title;
          return (0, a.jsxs)("section", {
            className: v.milestoneIndicators,
            children: [(0, a.jsxs)("div", {
              className: v.milestoneHeading,
              children: [(0, a.jsx)("h3", {
                className: v.milestoneTitle,
                children: e
              }), !c && (0, a.jsxs)("div", {
                className: v.milestoneGoal,
                "data-testid": "milestone-goal",
                children: [g, (0, a.jsx)(f.ArrowRight, {
                  label: "",
                  size: "MD"
                })]
              })]
            }), (0, a.jsx)("div", {
              className: v.milestoneScroll,
              ref: r,
              children: (0, a.jsxs)("div", {
                className: v.milestoneGroup,
                children: [(0, a.jsxs)("div", {
                  className: v.milestoneFlags,
                  children: [-1 === m ? (0, a.jsx)("div", {
                    ref: d,
                    className: v.milestoneFlag,
                    "data-testid": "marker",
                    children: (0, a.jsx)(k, {})
                  }) : (0, a.jsx)("div", {
                    className: v.milestoneFlag
                  }), n.map((e, t) => t === m ? (0, a.jsx)("div", {
                    ref: d,
                    className: v.milestoneFlag,
                    "data-testid": "marker",
                    children: (0, a.jsx)(k, {})
                  }, t) : (0, a.jsx)("div", {
                    className: v.milestoneFlag
                  }, t))]
                }), (0, a.jsx)(h, {
                  milestones: n,
                  incompleteImage: s,
                  completedImage: t
                }), (0, a.jsxs)("div", {
                  className: v.milestoneMarkers,
                  children: [(0, a.jsx)(p, {
                    title: o,
                    date: i,
                    active: !0
                  }), n.map((e, t) => (0, a.jsx)(p, {
                    title: e.title,
                    date: e.date,
                    active: e.active,
                    final: t === n.length - 1
                  }, t))]
                })]
              })
            })]
          })
        };
      var y = s(85827),
        N = s(24162),
        M = s(61874);
      const S = (0, u.defineMessages)({
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
      var C = s(26732);
      const T = ({
          heading: e,
          description: t,
          ctaText: s,
          ctaLink: n
        }) => {
          const {
            track: o
          } = (0, M.useGtmTrack)();
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
              }), s && (0, a.jsx)(C.A, {
                className: "rockstargames-sites-gta-gen9ae32e8cef2d804e10a42e71b2cc21178",
                text: s,
                to: n,
                onClick: () => o({
                  event: "cta_learn",
                  element_placement: "community challenge cta",
                  link_url: n,
                  text: s?.toLowerCase()
                })
              })]
            })]
          })
        },
        B = ({
          title: e,
          subTitle: t,
          rewardsBgImage: s
        }) => {
          const n = (0, i.useGetCdnSource)(s?.mobile ?? null),
            o = (0, i.useGetCdnSource)(s?.desktop ?? n);
          return (0, a.jsx)("div", {
            className: "rockstargames-sites-gta-gen9b2b3a24de3089dd7ee6d7f8761856ec7",
            style: {
              "--rewards-background-image": `url(${o})`
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
        I = {
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
        G = ({
          deck: e,
          detail: t
        }) => {
          const {
            isMobile: s
          } = (0, _.useWindowResize)(), n = (0, u.useIntl)(), i = (0, l.useRef)(null), r = (0, l.useRef)(null), d = (0, l.useRef)(null), c = (0, l.useRef)(), [m, g] = (0, l.useState)(!1), [w, f] = (0, l.useState)(), [b, h] = (0, l.useState)(!1), [x, p] = (0, l.useState)(!1), {
            track: k
          } = (0, M.useGtmTrack)(), v = c?.current?.swiper, j = e?.heading, C = e?.cards;
          (0, l.useEffect)(() => {
            if (v && "number" == typeof v?.params?.slidesPerView) {
              const e = v.slides?.length;
              g(e > v.params.slidesPerView)
            }
          }, [C, v?.params.slidesPerView]), (0, l.useEffect)(() => {
            f({
              nextEl: r.current,
              prevEl: i.current
            })
          }, [r, i]);
          const G = () => {
              v?.slidePrev(300, !1), k({
                event: "carousel_prev",
                element_placement: "community challenge rewards"
              })
            },
            R = () => {
              v?.slideNext(300, !1), k({
                event: "carousel_next",
                element_placement: "community challenge rewards"
              })
            },
            L = e => {
              if ("Tab" === e.key && !e.shiftKey) {
                const t = v?.slides[v?.activeIndex].querySelector('a, button, [role="button"]');
                t && t?.tabIndex > -1 && (e.preventDefault(), t.focus())
              }
            };
          return (0, a.jsxs)("div", {
            className: I.rewardPanel,
            children: [(0, a.jsx)("div", {
              className: I.leftColumn,
              children: (0, a.jsx)(T, {
                ...t
              })
            }), (0, a.jsx)("div", {
              ref: d,
              className: I.rightColumn,
              children: C?.length ? (0, a.jsxs)(a.Fragment, {
                children: [(0, a.jsxs)("div", {
                  className: I.navControl,
                  children: [(0, a.jsx)("h1", {
                    className: I.titleHeading,
                    children: j
                  }), !s && m && (0, a.jsxs)("div", {
                    className: I.btnArea,
                    children: [(0, a.jsx)("button", {
                      "data-testid": "prevBtn",
                      ref: i,
                      className: o()(I.prevBtn, b ? I.disabled : ""),
                      onClick: G,
                      "aria-label": n.formatMessage(S.rewards_carousel_previous),
                      type: "button",
                      disabled: b
                    }), (0, a.jsx)("button", {
                      "data-testid": "nextBtn",
                      ref: r,
                      className: o()(I.nextBtn, x ? I.disabled : ""),
                      onClick: R,
                      onKeyDown: L,
                      "aria-label": n.formatMessage(S.rewards_carousel_next),
                      type: "button",
                      disabled: x
                    })]
                  })]
                }), (0, a.jsxs)(N.RC, {
                  slidesPerView: 1.25,
                  ref: c,
                  onSlideChange: e => {
                    h(e.isBeginning), p(e.isEnd)
                  },
                  onSlidesUpdated: e => {
                    h(e.isBeginning), p(e.isEnd)
                  },
                  modules: [y.Vx],
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
                  navigation: w,
                  slideClass: "swiper-slide",
                  onSlideChangeTransitionEnd: () => {
                    k({
                      event: "carousel_swipe",
                      element_placement: "community challenge rewards"
                    })
                  },
                  children: [s && (0, a.jsxs)("div", {
                    className: I.btnArea,
                    children: [(0, a.jsx)("button", {
                      "data-testid": "prevBtn",
                      ref: i,
                      className: o()(I.prevBtn, b ? I.disabled : ""),
                      onClick: G,
                      "aria-label": n.formatMessage(S.rewards_carousel_previous),
                      type: "button",
                      disabled: b
                    }), (0, a.jsx)("button", {
                      "data-testid": "nextBtn",
                      ref: r,
                      className: o()(I.nextBtn, x ? I.disabled : ""),
                      onClick: R,
                      onKeyDown: L,
                      "aria-label": n.formatMessage(S.rewards_carousel_next),
                      type: "button",
                      disabled: x
                    })]
                  }), C.map((e, t) => {
                    const s = e?.title,
                      n = e?.subTitle,
                      o = e?.rewardsBgImage;
                    return (0, a.jsx)(N.qr, {
                      className: I.slide,
                      onFocus: () => (e => {
                        v?.slideTo(e)
                      })(t),
                      children: (0, a.jsx)(B, {
                        title: s,
                        subTitle: n,
                        rewardsBgImage: o
                      })
                    }, t)
                  })]
                })]
              }) : (0, a.jsx)("div", {
                className: I.noRewardsAvailable,
                children: (0, a.jsx)(u.FormattedMessage, {
                  ...S.no_rewards_available_title
                })
              })
            })]
          })
        },
        R = {
          communityChallengeInfoPanel: "rockstargames-sites-gta-gen9df615cfc52fdd4ced7efec100c0504c6",
          communityChallenges: "rockstargames-sites-gta-gen9dc0abf139506d2de9a4ec791e49331ef",
          content: "rockstargames-sites-gta-gen9b3af9e460a0d8d3aafdf3f71d795c94d",
          pillBtn: "rockstargames-sites-gta-gen9c60c1ea7626c520b2211fa5f0b18061b",
          selected: "rockstargames-sites-gta-gen9b58652ec7e005a714810a11cc4b2bb7f",
          wrapper: "rockstargames-sites-gta-gen9e3332f7d8fb8c01ce3af42b2fd4aebed"
        },
        L = JSON.parse('{"de-DE":{"countdown_timer_days_title_long":"Tage","countdown_timer_days_title_short":"T.","countdown_timer_failure_title":"Niederlage","countdown_timer_header_pending_title":"Ergebnisse werden berechnet …","countdown_timer_header_title":"Verbleibende Zeit","countdown_timer_hours_title_long":"Stunden","countdown_timer_hours_title_short":"STD.","countdown_timer_minutes_title_long":"Minuten","countdown_timer_minutes_title_short":"MIN.","countdown_timer_seconds_title_long":"Sekunden","countdown_timer_seconds_title_short":"SEK.","countdown_timer_success_title":"Erfolg","milestone_marker_success_aria":"Meilenstein erreicht","no_rewards_available_title":"Keine Belohnungen verfügbar","rewards_carousel_next":"Weiter","rewards_carousel_previous":"Zurück"},"en-US":{"countdown_timer_days_title_long":"Days","countdown_timer_days_title_short":"D","countdown_timer_failure_title":"Failure","countdown_timer_header_pending_title":"Calculating Results...","countdown_timer_header_title":"Time Remaining","countdown_timer_hours_title_long":"Hours","countdown_timer_hours_title_short":"H","countdown_timer_minutes_title_long":"Minutes","countdown_timer_minutes_title_short":"M","countdown_timer_seconds_title_long":"Seconds","countdown_timer_seconds_title_short":"S","countdown_timer_success_title":"Success","milestone_marker_success_aria":"Milestone achieved","no_rewards_available_title":"No rewards available","rewards_carousel_next":"Next","rewards_carousel_previous":"Previous"},"es-ES":{"countdown_timer_days_title_long":"días","countdown_timer_days_title_short":"D","countdown_timer_failure_title":"Fracaso","countdown_timer_header_pending_title":"Calculando resultados...","countdown_timer_header_title":"Tiempo restante","countdown_timer_hours_title_long":"horas","countdown_timer_hours_title_short":"H","countdown_timer_minutes_title_long":"minutos","countdown_timer_minutes_title_short":"M","countdown_timer_seconds_title_long":"segundos","countdown_timer_seconds_title_short":"S","countdown_timer_success_title":"Éxito","milestone_marker_success_aria":"Hito","no_rewards_available_title":"No hay recompensas disponibles","rewards_carousel_next":"Siguiente","rewards_carousel_previous":"Anterior"},"es-MX":{"countdown_timer_days_title_long":"Días","countdown_timer_days_title_short":"D","countdown_timer_failure_title":"Fracaso","countdown_timer_header_pending_title":"Calculando resultados...","countdown_timer_header_title":"Tiempo restante","countdown_timer_hours_title_long":"Horas","countdown_timer_hours_title_short":"H","countdown_timer_minutes_title_long":"Minutos","countdown_timer_minutes_title_short":"M","countdown_timer_seconds_title_long":"Segundos","countdown_timer_seconds_title_short":"S","countdown_timer_success_title":"Éxito","milestone_marker_success_aria":"Logro alcanzado","no_rewards_available_title":"No hay recompensas disponibles","rewards_carousel_next":"Siguiente","rewards_carousel_previous":"Anterior"},"fr-FR":{"countdown_timer_days_title_long":"Jours","countdown_timer_days_title_short":"J","countdown_timer_failure_title":"Échec","countdown_timer_header_pending_title":"Calcul des résultats...","countdown_timer_header_title":"Temps restant","countdown_timer_hours_title_long":"Heures","countdown_timer_hours_title_short":"H","countdown_timer_minutes_title_long":"Minutes","countdown_timer_minutes_title_short":"Min","countdown_timer_seconds_title_long":"Secondes","countdown_timer_seconds_title_short":"S","countdown_timer_success_title":"Réussite","milestone_marker_success_aria":"Objectif atteint","no_rewards_available_title":"Aucune récompense disponible","rewards_carousel_next":"Suivant","rewards_carousel_previous":"Précédent"},"it-IT":{"countdown_timer_days_title_long":"Giorni","countdown_timer_days_title_short":"G","countdown_timer_failure_title":"Errore","countdown_timer_header_pending_title":"Calcolo risultati in corso...","countdown_timer_header_title":"Tempo rimasto","countdown_timer_hours_title_long":"Ore","countdown_timer_hours_title_short":"O","countdown_timer_minutes_title_long":"Minuti","countdown_timer_minutes_title_short":"M","countdown_timer_seconds_title_long":"Secondi","countdown_timer_seconds_title_short":"S","countdown_timer_success_title":"Completato","milestone_marker_success_aria":"Obiettivo raggiunto","no_rewards_available_title":"Non ci sono ricompense disponibili","rewards_carousel_next":"Successivo","rewards_carousel_previous":"Precedente"},"ja-JP":{"countdown_timer_days_title_long":"日","countdown_timer_days_title_short":"日","countdown_timer_failure_title":"失敗","countdown_timer_header_pending_title":"結果を計算中...","countdown_timer_header_title":"残り時間","countdown_timer_hours_title_long":"時間","countdown_timer_hours_title_short":"時間","countdown_timer_minutes_title_long":"分","countdown_timer_minutes_title_short":"分","countdown_timer_seconds_title_long":"秒","countdown_timer_seconds_title_short":"秒","countdown_timer_success_title":"成功","milestone_marker_success_aria":"マイルストーン達成","no_rewards_available_title":"獲得可能報酬なし","rewards_carousel_next":"次","rewards_carousel_previous":"前"},"ko-KR":{"countdown_timer_days_title_long":"일","countdown_timer_days_title_short":"일","countdown_timer_failure_title":"실패","countdown_timer_header_pending_title":"결과 집계 중...","countdown_timer_header_title":"남은 시간","countdown_timer_hours_title_long":"시","countdown_timer_hours_title_short":"시","countdown_timer_minutes_title_long":"분","countdown_timer_minutes_title_short":"분","countdown_timer_seconds_title_long":"초","countdown_timer_seconds_title_short":"초","countdown_timer_success_title":"성공","milestone_marker_success_aria":"목표 달성","no_rewards_available_title":"보상 이용 불가","rewards_carousel_next":"다음","rewards_carousel_previous":"이전"},"pl-PL":{"countdown_timer_days_title_long":"Dni","countdown_timer_days_title_short":"dn.","countdown_timer_failure_title":"Porażka","countdown_timer_header_pending_title":"Obliczanie wyników...","countdown_timer_header_title":"Pozostały czas","countdown_timer_hours_title_long":"Godziny","countdown_timer_hours_title_short":"godz.","countdown_timer_minutes_title_long":"Minuty","countdown_timer_minutes_title_short":"min.","countdown_timer_seconds_title_long":"Sekundy","countdown_timer_seconds_title_short":"sek.","countdown_timer_success_title":"Sukces","milestone_marker_success_aria":"Kamień milowy osiągnięty","no_rewards_available_title":"Brak dostępnych nagród","rewards_carousel_next":"Dalej","rewards_carousel_previous":"Poprzednie"},"pt-BR":{"countdown_timer_days_title_long":"dias","countdown_timer_days_title_short":"d","countdown_timer_failure_title":"Fracasso","countdown_timer_header_pending_title":"Calculando resultados...","countdown_timer_header_title":"Tempo restante","countdown_timer_hours_title_long":"horas","countdown_timer_hours_title_short":"h","countdown_timer_minutes_title_long":"minutos","countdown_timer_minutes_title_short":"m","countdown_timer_seconds_title_long":"segundos","countdown_timer_seconds_title_short":"s","countdown_timer_success_title":"Sucesso","milestone_marker_success_aria":"Marco alcançado","no_rewards_available_title":"Nenhuma recompensa disponível","rewards_carousel_next":"Seguinte","rewards_carousel_previous":"Anterior"},"ru-RU":{"countdown_timer_days_title_long":"Дней","countdown_timer_days_title_short":"Дн.","countdown_timer_failure_title":"Провал","countdown_timer_header_pending_title":"Оценка результатов...","countdown_timer_header_title":"Осталось времени","countdown_timer_hours_title_long":"Часов","countdown_timer_hours_title_short":"Ч.","countdown_timer_minutes_title_long":"Минут","countdown_timer_minutes_title_short":"Мин.","countdown_timer_seconds_title_long":"Секунд","countdown_timer_seconds_title_short":"Сек.","countdown_timer_success_title":"Успех","milestone_marker_success_aria":"Этап пройден","no_rewards_available_title":"Нет доступных наград","rewards_carousel_next":"Далее","rewards_carousel_previous":"Назад"},"zh-CN":{"countdown_timer_days_title_long":"天","countdown_timer_days_title_short":"天","countdown_timer_failure_title":"失败","countdown_timer_header_pending_title":"正在计算结果……","countdown_timer_header_title":"剩余时间","countdown_timer_hours_title_long":"小时","countdown_timer_hours_title_short":"小时","countdown_timer_minutes_title_long":"分钟","countdown_timer_minutes_title_short":"分钟","countdown_timer_seconds_title_long":"秒","countdown_timer_seconds_title_short":"秒","countdown_timer_success_title":"成功","milestone_marker_success_aria":"已达成里程碑","no_rewards_available_title":"无可用奖励","rewards_carousel_next":"下一个","rewards_carousel_previous":"上一个"},"zh-TW":{"countdown_timer_days_title_long":"天","countdown_timer_days_title_short":"天","countdown_timer_failure_title":"失敗","countdown_timer_header_pending_title":"正在計算結果…","countdown_timer_header_title":"剩餘時間","countdown_timer_hours_title_long":"小時","countdown_timer_hours_title_short":"小時","countdown_timer_minutes_title_long":"分鐘","countdown_timer_minutes_title_short":"分鐘","countdown_timer_seconds_title_long":"秒","countdown_timer_seconds_title_short":"秒","countdown_timer_success_title":"成功","milestone_marker_success_aria":"已達成里程碑","no_rewards_available_title":"無可用獎勵","rewards_carousel_next":"下一個","rewards_carousel_previous":"上一個"}}'),
        F = (0, u.withIntl)(({
          banner: e,
          countdown: t,
          rewards: s,
          milestoneIndicator: n
        }) => (0, a.jsx)("div", {
          className: R.communityChallenges,
          children: (0, a.jsxs)("div", {
            className: R.wrapper,
            children: [e && (0, a.jsx)(d, {
              ...e
            }), (0, a.jsxs)("div", {
              className: R.content,
              children: [t?.timer && (0, a.jsx)(w, {
                ...t.timer
              }), n && (0, a.jsx)(j, {
                ...n
              }), s && (0, a.jsx)("section", {
                className: R.rewardsSection,
                children: (0, a.jsx)(G, {
                  ...s
                })
              })]
            })]
          })
        }), L)
    }
  }
]);