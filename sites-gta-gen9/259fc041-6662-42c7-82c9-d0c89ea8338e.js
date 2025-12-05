try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "259fc041-6662-42c7-82c9-d0c89ea8338e", e._sentryDebugIdIdentifier = "sentry-dbid-259fc041-6662-42c7-82c9-d0c89ea8338e")
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
  [4544], {
    33054: (e, t, s) => {
      s.r(t), s.d(t, {
        default: () => D
      });
      var a = s(42295),
        n = s(4572),
        r = s.n(n),
        i = s(92440),
        c = s(34725);
      const o = ({
        backgroundImage: e,
        image: t,
        logoHorizontalPosition: s,
        logoVerticalPosition: n,
        enableOverlay: o = !1,
        overlayBackground: l = "rgba(0,0,0,0.25)"
      }) => {
        const d = (0, c.S1)(t ?? {}),
          g = (0, i.useGetCdnSource)(e?.mobile ?? null),
          u = (0, i.useGetCdnSource)(e?.desktop ?? g),
          m = d?.src?.mobile,
          f = d?.src?.desktop ?? m;
        return (0, a.jsx)("div", {
          className: r()("rockstargames-sites-gta-gen9dd3eed68318843fe25f147a11901017e", o ? "rockstargames-sites-gta-gen9d1ac49cbb3da8269c13f1ccc1b515fb4" : ""),
          style: {
            "--overlay-background-color": l
          },
          children: (0, a.jsx)("div", {
            className: "rockstargames-sites-gta-gen9b5e649bc428f66ddfa8db02936f5b69d",
            style: {
              "--background-image-mobile": `url(${g})`,
              "--background-image-desktop": `url(${u})`,
              "--logo-justify-position": s ?? "normal",
              "--logo-align-position": n ?? "normal"
            },
            children: f && (0, a.jsx)("img", {
              src: f,
              className: "rockstargames-sites-gta-gen9dab7157848250d13aea143ea8b7fae16",
              alt: d?.alt ?? ""
            })
          })
        })
      };
      var l = s(62229),
        d = s(42735),
        g = s(77044);

      function u(e, t) {
        return (0, g.w)(t || e, e)
      }

      function m(e, t, s) {
        const a = function(e, t) {
          return +u(e) - +u(t)
        }(e, t) / 1e3;
        return (0, d.u)(s?.roundingMethod)(a)
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
          backgroundColor: o,
          successBgImages: d,
          failureBgImages: g
        }) => {
          const {
            isMobile: u
          } = (0, f.useWindowResize)(), [w, p] = (0, l.useState)(!1), x = (0, i.useGetCdnSource)(d?.imageLeft?.mobile ?? null), k = (0, i.useGetCdnSource)(d?.imageLeft?.desktop ?? x), v = (0, i.useGetCdnSource)(d?.imageRight?.mobile ?? null), j = (0, i.useGetCdnSource)(d?.imageRight?.desktop ?? v), y = (0, i.useGetCdnSource)(g?.imageLeft?.mobile ?? null), N = (0, i.useGetCdnSource)(g?.imageLeft?.desktop ?? y), M = (0, i.useGetCdnSource)(g?.imageRight?.mobile ?? null), S = (0, i.useGetCdnSource)(g?.imageRight?.desktop ?? M), C = (0, l.useCallback)((e, t) => {
            const s = m(e, new Date);
            return s <= 0 ? (p(!0), {
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
          }, []), [I, B] = (0, l.useState)(() => C(e, n));
          return (0, l.useEffect)(() => {
            const t = setInterval(() => {
              B(C(e, n))
            }, n ? 1e3 : 6e4);
            return () => clearInterval(t)
          }, [e, n, C]), (0, a.jsxs)("div", {
            className: r()(h.countdownContainer, t),
            style: {
              "--counter-text-color": s?.enableTextGradient ? "transparent" : s?.textColor,
              "--counter-text-stroke-color": s?.enableTextStroke ? s?.textStrokeColor : "unset",
              "--counter-text-stroke-width": s?.enableTextStroke ? s?.textStrokeWidth : "unset",
              "--counter-text-shadow": s?.enableTextShadow ? s.textShadow : "unset",
              "--counter-text-gradient": s?.enableTextGradient ? s.textGradient : "none",
              "--counter-background-color": c ? o : "none",
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
                      children: u ? (0, a.jsx)(b.FormattedMessage, {
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
                      children: u ? (0, a.jsx)(b.FormattedMessage, {
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
                      children: u ? (0, a.jsx)(b.FormattedMessage, {
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
                      children: u ? (0, a.jsx)(b.FormattedMessage, {
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
              children: [k && (0, a.jsx)("img", {
                className: h.accentImage,
                src: k,
                alt: d?.imageLeft?.altText
              }), (0, a.jsx)("div", {
                "data-testid": "successMessage",
                className: h.successLabel,
                children: (0, a.jsx)(b.FormattedMessage, {
                  ..._.countdown_timer_success_title
                })
              }), j && (0, a.jsx)("img", {
                className: h.accentImage,
                src: j,
                alt: d?.imageRight?.altText
              })]
            }), "failure" === t && (0, a.jsxs)("div", {
              className: h.container,
              style: {
                display: "flex",
                alignItems: "center"
              },
              children: [N && (0, a.jsx)("img", {
                className: h.accentImage,
                src: N,
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
      var p = s(45021),
        x = s(56088);
      const k = ({
          milestones: e,
          incompleteImage: t,
          completedImage: s
        }) => {
          const n = (e.findLastIndex(e => e.active) + 1) / e.length,
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
            }), e.map((t, s) => (0, a.jsx)("div", {
              className: r()("rockstargames-sites-gta-gen9faa53fa77749f0a05f711222185919e1", 0 === s ? "rockstargames-sites-gta-gen9fa6e2e8d17c632ef7af31fdfa3511bf4" : "", s === e.length - 1 ? "rockstargames-sites-gta-gen9b39f693a40f75244b1c104b8d83064e5" : ""),
              "data-testid": "milestoneBox",
              children: (0, a.jsx)("div", {
                className: "rockstargames-sites-gta-gen9b1177fbd4e3bcda4051638d86044b957"
              })
            }, s))]
          })
        },
        v = (0, b.defineMessages)({
          milestone_marker_success_aria: {
            id: "milestone_marker_success_aria",
            description: "Aria label for check mark in milestone",
            defaultMessage: "Milestone achieved"
          }
        }),
        j = ({
          title: e,
          date: t,
          active: s,
          final: n
        }) => {
          const i = (0, b.useIntl)(),
            c = s ? "rockstargames-sites-gta-gen9a237ddf12d1e317c6389b99dab0ebaaf" : "",
            o = n ? "rockstargames-sites-gta-gen9cf16fb2f605281b22e08858bd0b10be8" : "";
          return (0, a.jsx)("div", {
            className: "rockstargames-sites-gta-gen9ea109f400f7e49404883a62664e5c4f9",
            children: (0, a.jsxs)("div", {
              className: r()("rockstargames-sites-gta-gen9a4776cf49ea083284f9d403b204c9b78", c, o),
              children: [(0, a.jsxs)("div", {
                className: "rockstargames-sites-gta-gen9fe16bcb2866e77749008c06e96e776c2",
                children: [(0, a.jsx)("h4", {
                  children: e
                }), s && (0, a.jsx)(p.Check, {
                  label: i.formatMessage(v.milestone_marker_success_aria),
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
        y = ({
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
        N = {
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
          const c = (0, l.useRef)(null),
            o = (0, l.useRef)(null),
            [d, g] = (0, l.useState)(!1),
            {
              isMobile: u
            } = (0, x.G4)();
          if ((0, x.T0)(c), (0, l.useEffect)(() => {
              u && c.current && o.current && (c.current.scrollLeft = o.current.getBoundingClientRect().left - window.innerWidth / 2, c.current.addEventListener("scroll", e => {
                const t = e.target;
                t && Math.ceil(t.scrollLeft + t.clientWidth) >= t.scrollWidth ? g(!0) : g(!1)
              }))
            }, [u]), !n || 0 === n.length) return null;
          const m = n.findLastIndex(e => e.active),
            f = n[n.length - 1].title;
          return (0, a.jsxs)("section", {
            className: N.milestoneIndicators,
            children: [(0, a.jsxs)("div", {
              className: N.milestoneHeading,
              children: [(0, a.jsx)("h3", {
                className: N.milestoneTitle,
                children: e
              }), !d && (0, a.jsxs)("div", {
                className: N.milestoneGoal,
                "data-testid": "milestone-goal",
                children: [f, (0, a.jsx)(p.ArrowRight, {
                  label: "",
                  size: "MD"
                })]
              })]
            }), (0, a.jsx)("div", {
              className: N.milestoneScroll,
              ref: c,
              children: (0, a.jsxs)("div", {
                className: N.milestoneGroup,
                children: [(0, a.jsxs)("div", {
                  className: N.milestoneFlags,
                  children: [-1 === m ? (0, a.jsx)("div", {
                    ref: o,
                    className: N.milestoneFlag,
                    "data-testid": "marker",
                    children: (0, a.jsx)(y, {})
                  }) : (0, a.jsx)("div", {
                    className: N.milestoneFlag
                  }), n.map((e, t) => t === m ? (0, a.jsx)("div", {
                    ref: o,
                    className: N.milestoneFlag,
                    "data-testid": "marker",
                    children: (0, a.jsx)(y, {})
                  }, t) : (0, a.jsx)("div", {
                    className: N.milestoneFlag
                  }, t))]
                }), (0, a.jsx)(k, {
                  milestones: n,
                  incompleteImage: s,
                  completedImage: t
                }), (0, a.jsxs)("div", {
                  className: N.milestoneMarkers,
                  children: [(0, a.jsx)(j, {
                    title: r,
                    date: i,
                    active: !0
                  }), n.map((e, t) => (0, a.jsx)(j, {
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
      var S = s(85827),
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
      const R = ({
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
        G = ({
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
        L = {
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
          } = (0, f.useWindowResize)(), n = (0, b.useIntl)(), i = (0, l.useRef)(null), c = (0, l.useRef)(null), o = (0, l.useRef)(null), d = (0, l.useRef)(), [g, u] = (0, l.useState)(!1), [m, _] = (0, l.useState)(), [h, w] = (0, l.useState)(!1), [p, x] = (0, l.useState)(!1), {
            track: k
          } = (0, I.useGtmTrack)(), v = d?.current?.swiper, j = e?.heading, y = e?.cards;
          (0, l.useEffect)(() => {
            if (v && "number" == typeof v?.params?.slidesPerView) {
              const e = v.slides?.length;
              u(e > v.params.slidesPerView)
            }
          }, [y, v?.params.slidesPerView]), (0, l.useEffect)(() => {
            _({
              nextEl: c.current,
              prevEl: i.current
            })
          }, [c, i]);
          const N = () => {
              v?.slidePrev(300, !1), k({
                event: "carousel_prev",
                element_placement: "community challenge rewards"
              })
            },
            M = () => {
              v?.slideNext(300, !1), k({
                event: "carousel_next",
                element_placement: "community challenge rewards"
              })
            },
            T = e => {
              if ("Tab" === e.key && !e.shiftKey) {
                const t = v?.slides[v?.activeIndex].querySelector('a, button, [role="button"]');
                t && t?.tabIndex > -1 && (e.preventDefault(), t.focus())
              }
            };
          return (0, a.jsxs)("div", {
            className: L.rewardPanel,
            children: [(0, a.jsx)("div", {
              className: L.leftColumn,
              children: (0, a.jsx)(R, {
                ...t
              })
            }), (0, a.jsx)("div", {
              ref: o,
              className: L.rightColumn,
              children: y?.length ? (0, a.jsxs)(a.Fragment, {
                children: [(0, a.jsxs)("div", {
                  className: L.navControl,
                  children: [(0, a.jsx)("h1", {
                    className: L.titleHeading,
                    children: j
                  }), !s && g && (0, a.jsxs)("div", {
                    className: L.btnArea,
                    children: [(0, a.jsx)("button", {
                      "data-testid": "prevBtn",
                      ref: i,
                      className: r()(L.prevBtn, h ? L.disabled : ""),
                      onClick: N,
                      "aria-label": n.formatMessage(B.rewards_carousel_previous),
                      type: "button",
                      disabled: h
                    }), (0, a.jsx)("button", {
                      "data-testid": "nextBtn",
                      ref: c,
                      className: r()(L.nextBtn, p ? L.disabled : ""),
                      onClick: M,
                      onKeyDown: T,
                      "aria-label": n.formatMessage(B.rewards_carousel_next),
                      type: "button",
                      disabled: p
                    })]
                  })]
                }), (0, a.jsxs)(C.RC, {
                  slidesPerView: 1.25,
                  ref: d,
                  onSlideChange: e => {
                    w(e.isBeginning), x(e.isEnd)
                  },
                  onSlidesUpdated: e => {
                    w(e.isBeginning), x(e.isEnd)
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
                  navigation: m,
                  slideClass: "swiper-slide",
                  onSlideChangeTransitionEnd: () => {
                    k({
                      event: "carousel_swipe",
                      element_placement: "community challenge rewards"
                    })
                  },
                  children: [s && (0, a.jsxs)("div", {
                    className: L.btnArea,
                    children: [(0, a.jsx)("button", {
                      "data-testid": "prevBtn",
                      ref: i,
                      className: r()(L.prevBtn, h ? L.disabled : ""),
                      onClick: N,
                      "aria-label": n.formatMessage(B.rewards_carousel_previous),
                      type: "button",
                      disabled: h
                    }), (0, a.jsx)("button", {
                      "data-testid": "nextBtn",
                      ref: c,
                      className: r()(L.nextBtn, p ? L.disabled : ""),
                      onClick: M,
                      onKeyDown: T,
                      "aria-label": n.formatMessage(B.rewards_carousel_next),
                      type: "button",
                      disabled: p
                    })]
                  }), y.map((e, t) => {
                    const s = e?.title,
                      n = e?.subTitle,
                      r = e?.rewardsBgImage;
                    return (0, a.jsx)(C.qr, {
                      className: L.slide,
                      onFocus: () => (e => {
                        v?.slideTo(e)
                      })(t),
                      children: (0, a.jsx)(G, {
                        title: s,
                        subTitle: n,
                        rewardsBgImage: r
                      })
                    }, t)
                  })]
                })]
              }) : (0, a.jsx)("div", {
                className: L.noRewardsAvailable,
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
        E = JSON.parse('{"en-US":{"countdown_timer_days_title_long":"Days","countdown_timer_days_title_short":"D","countdown_timer_failure_title":"Failure","countdown_timer_header_pending_title":"Calculating Results...","countdown_timer_header_title":"Time Remaining","countdown_timer_hours_title_long":"Hours","countdown_timer_hours_title_short":"H","countdown_timer_minutes_title_long":"Minutes","countdown_timer_minutes_title_short":"M","countdown_timer_seconds_title_long":"Seconds","countdown_timer_seconds_title_short":"S","countdown_timer_success_title":"Success","milestone_marker_success_aria":"Milestone achieved","no_rewards_available_title":"No rewards available","rewards_carousel_next":"Next","rewards_carousel_previous":"Previous"}}'),
        D = (0, b.withIntl)(({
          banner: e,
          countdown: t,
          rewards: s,
          milestoneIndicator: n
        }) => (0, a.jsx)("div", {
          className: P.communityChallenges,
          children: (0, a.jsxs)("div", {
            className: P.wrapper,
            children: [e && (0, a.jsx)(o, {
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
        }), E)
    },
    39447: (e, t, s) => {
      s.d(t, {
        DX: () => c,
        Dc: () => d,
        TL: () => i,
        xV: () => g
      });
      var a = s(62229),
        n = s(95362),
        r = s(42295);

      function i(e) {
        const t = o(e),
          s = a.forwardRef((e, s) => {
            const {
              children: n,
              ...i
            } = e, c = a.Children.toArray(n), o = c.find(u);
            if (o) {
              const e = o.props.children,
                n = c.map(t => t === o ? a.Children.count(e) > 1 ? a.Children.only(null) : a.isValidElement(e) ? e.props.children : null : t);
              return (0, r.jsx)(t, {
                ...i,
                ref: s,
                children: a.isValidElement(e) ? a.cloneElement(e, void 0, n) : null
              })
            }
            return (0, r.jsx)(t, {
              ...i,
              ref: s,
              children: n
            })
          });
        return s.displayName = `${e}.Slot`, s
      }
      var c = i("Slot");

      function o(e) {
        const t = a.forwardRef((e, t) => {
          const {
            children: s,
            ...r
          } = e;
          if (a.isValidElement(s)) {
            const e = function(e) {
                let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
                  s = t && "isReactWarning" in t && t.isReactWarning;
                return s ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, s = t && "isReactWarning" in t && t.isReactWarning, s ? e.props.ref : e.props.ref || e.ref)
              }(s),
              i = function(e, t) {
                const s = {
                  ...t
                };
                for (const a in t) {
                  const n = e[a],
                    r = t[a];
                  /^on[A-Z]/.test(a) ? n && r ? s[a] = (...e) => {
                    const t = r(...e);
                    return n(...e), t
                  } : n && (s[a] = n) : "style" === a ? s[a] = {
                    ...n,
                    ...r
                  } : "className" === a && (s[a] = [n, r].filter(Boolean).join(" "))
                }
                return {
                  ...e,
                  ...s
                }
              }(r, s.props);
            return s.type !== a.Fragment && (i.ref = t ? (0, n.t)(t, e) : e), a.cloneElement(s, i)
          }
          return a.Children.count(s) > 1 ? a.Children.only(null) : null
        });
        return t.displayName = `${e}.SlotClone`, t
      }
      var l = Symbol("radix.slottable");

      function d(e) {
        const t = ({
          children: e
        }) => (0, r.jsx)(r.Fragment, {
          children: e
        });
        return t.displayName = `${e}.Slottable`, t.__radixId = l, t
      }
      var g = d("Slottable");

      function u(e) {
        return a.isValidElement(e) && "function" == typeof e.type && "__radixId" in e.type && e.type.__radixId === l
      }
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
    69055: (e, t, s) => {
      s.d(t, {
        Qg: () => i,
        bL: () => o,
        s6: () => c
      });
      var a = s(62229),
        n = s(78004),
        r = s(42295),
        i = Object.freeze({
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
        c = a.forwardRef((e, t) => (0, r.jsx)(n.sG.span, {
          ...e,
          ref: t,
          style: {
            ...i,
            ...e.style
          }
        }));
      c.displayName = "VisuallyHidden";
      var o = c
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
    },
    78004: (e, t, s) => {
      s.d(t, {
        hO: () => o,
        sG: () => c
      });
      var a = s(62229),
        n = s(91082),
        r = s(39447),
        i = s(42295),
        c = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"].reduce((e, t) => {
          const s = (0, r.TL)(`Primitive.${t}`),
            n = a.forwardRef((e, a) => {
              const {
                asChild: n,
                ...r
              } = e, c = n ? s : t;
              return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, i.jsx)(c, {
                ...r,
                ref: a
              })
            });
          return n.displayName = `Primitive.${t}`, {
            ...e,
            [t]: n
          }
        }, {});

      function o(e, t) {
        e && n.flushSync(() => e.dispatchEvent(t))
      }
    },
    95362: (e, t, s) => {
      s.d(t, {
        s: () => i,
        t: () => r
      });
      var a = s(62229);

      function n(e, t) {
        if ("function" == typeof e) return e(t);
        null != e && (e.current = t)
      }

      function r(...e) {
        return t => {
          let s = !1;
          const a = e.map(e => {
            const a = n(e, t);
            return s || "function" != typeof a || (s = !0), a
          });
          if (s) return () => {
            for (let t = 0; t < a.length; t++) {
              const s = a[t];
              "function" == typeof s ? s() : n(e[t], null)
            }
          }
        }
      }

      function i(...e) {
        return a.useCallback(r(...e), e)
      }
    }
  }
]);