try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "b8aac9e7-375c-4fbb-972d-5cacd377c7c1", e._sentryDebugIdIdentifier = "sentry-dbid-b8aac9e7-375c-4fbb-972d-5cacd377c7c1")
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
  [4323], {
    33054: (e, t, s) => {
      s.r(t), s.d(t, {
        default: () => E
      });
      var n = s(42295),
        a = s(1556),
        o = s.n(a),
        i = s(22030),
        r = s(34725);
      const c = ({
        backgroundImage: e,
        image: t,
        logoHorizontalPosition: s,
        logoVerticalPosition: a,
        enableOverlay: c = !1,
        overlayBackground: l = "rgba(0,0,0,0.25)"
      }) => {
        const d = (0, r.S1)(t ?? {}),
          _ = (0, i.useGetCdnSource)(e?.mobile ?? null),
          u = (0, i.useGetCdnSource)(e?.desktop ?? _),
          m = d?.src?.mobile,
          g = d?.src?.desktop ?? m;
        return (0, n.jsx)("div", {
          className: o()("rockstargames-sites-gta-gen9dd3eed68318843fe25f147a11901017e", c ? "rockstargames-sites-gta-gen9d1ac49cbb3da8269c13f1ccc1b515fb4" : ""),
          style: {
            "--overlay-background-color": l
          },
          children: (0, n.jsx)("div", {
            className: "rockstargames-sites-gta-gen9b5e649bc428f66ddfa8db02936f5b69d",
            style: {
              "--background-image-mobile": `url(${_})`,
              "--background-image-desktop": `url(${u})`,
              "--logo-justify-position": s ?? "normal",
              "--logo-align-position": a ?? "normal"
            },
            children: g && (0, n.jsx)("img", {
              src: g,
              className: "rockstargames-sites-gta-gen9dab7157848250d13aea143ea8b7fae16",
              alt: d?.alt ?? ""
            })
          })
        })
      };
      var l = s(71127),
        d = s(42735),
        _ = s(77044);

      function u(e, t) {
        return (0, _.w)(t || e, e)
      }

      function m(e, t, s) {
        const n = function(e, t) {
          return +u(e) - +u(t)
        }(e, t) / 1e3;
        return (0, d.u)(s?.roundingMethod)(n)
      }
      var g = s(58136),
        w = s(56990);
      const f = (0, w.defineMessages)({
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
        b = {
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
        h = ({
          targetDate: e,
          status: t = "active",
          theme: s,
          includeSeconds: a = !1,
          showBackground: r,
          backgroundColor: c,
          successBgImages: d,
          failureBgImages: _
        }) => {
          const {
            isMobile: u
          } = (0, g.useWindowResize)(), [h, p] = (0, l.useState)(!1), x = (0, i.useGetCdnSource)(d?.imageLeft?.mobile ?? null), k = (0, i.useGetCdnSource)(d?.imageLeft?.desktop ?? x), v = (0, i.useGetCdnSource)(d?.imageRight?.mobile ?? null), j = (0, i.useGetCdnSource)(d?.imageRight?.desktop ?? v), y = (0, i.useGetCdnSource)(_?.imageLeft?.mobile ?? null), N = (0, i.useGetCdnSource)(_?.imageLeft?.desktop ?? y), M = (0, i.useGetCdnSource)(_?.imageRight?.mobile ?? null), S = (0, i.useGetCdnSource)(_?.imageRight?.desktop ?? M), C = (0, l.useCallback)((e, t) => {
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
          }, []), [T, B] = (0, l.useState)(() => C(e, a));
          return (0, l.useEffect)(() => {
            const t = setInterval(() => {
              B(C(e, a))
            }, a ? 1e3 : 6e4);
            return () => clearInterval(t)
          }, [e, a, C]), (0, n.jsxs)("div", {
            className: o()(b.countdownContainer, t),
            style: {
              "--counter-text-color": s?.enableTextGradient ? "transparent" : s?.textColor,
              "--counter-text-stroke-color": s?.enableTextStroke ? s?.textStrokeColor : "unset",
              "--counter-text-stroke-width": s?.enableTextStroke ? s?.textStrokeWidth : "unset",
              "--counter-text-shadow": s?.enableTextShadow ? s.textShadow : "unset",
              "--counter-text-gradient": s?.enableTextGradient ? s.textGradient : "none",
              "--counter-background-color": r ? c : "none",
              "--counter-orientation": "vertical" === s?.counterOrientation ? "column" : "row"
            },
            children: ["active" === t && (0, n.jsxs)(n.Fragment, {
              children: [(0, n.jsx)("h1", {
                className: b.countdownHeader,
                children: (0, n.jsx)(w.FormattedMessage, {
                  ...f.countdown_timer_header_title
                })
              }), "active" === t && h && (0, n.jsx)("div", {
                "data-testid": "pendingResults",
                className: b.pendingResults,
                children: (0, n.jsx)("p", {
                  children: (0, n.jsx)(w.FormattedMessage, {
                    ...f.countdown_timer_header_pending_title
                  })
                })
              }), (0, n.jsxs)("ul", {
                "data-testid": "countdownTimer",
                className: o()(b.countDownTimer),
                children: [(0, n.jsx)("li", {
                  children: (0, n.jsxs)("div", {
                    className: b.countdownBlock,
                    children: [(0, n.jsx)("span", {
                      className: o()(b.counter, s?.textGlow ? b.textGlow : ""),
                      children: T.days
                    }), (0, n.jsx)("div", {
                      className: b.countdownLabel,
                      children: u ? (0, n.jsx)(w.FormattedMessage, {
                        ...f.countdown_timer_days_title_short
                      }) : (0, n.jsx)(w.FormattedMessage, {
                        ...f.countdown_timer_days_title_long
                      })
                    })]
                  })
                }), (0, n.jsx)("li", {
                  children: (0, n.jsxs)("div", {
                    className: b.countdownBlock,
                    children: [(0, n.jsx)("span", {
                      className: o()(b.counter, s?.textGlow ? b.textGlow : ""),
                      children: T.hours
                    }), (0, n.jsx)("div", {
                      className: b.countdownLabel,
                      children: u ? (0, n.jsx)(w.FormattedMessage, {
                        ...f.countdown_timer_hours_title_short
                      }) : (0, n.jsx)(w.FormattedMessage, {
                        ...f.countdown_timer_hours_title_long
                      })
                    })]
                  })
                }), (0, n.jsx)("li", {
                  children: (0, n.jsxs)("div", {
                    className: b.countdownBlock,
                    children: [(0, n.jsx)("span", {
                      className: o()(b.counter, s?.textGlow ? b.textGlow : ""),
                      children: T.minutes
                    }), (0, n.jsx)("div", {
                      className: b.countdownLabel,
                      children: u ? (0, n.jsx)(w.FormattedMessage, {
                        ...f.countdown_timer_minutes_title_short
                      }) : (0, n.jsx)(w.FormattedMessage, {
                        ...f.countdown_timer_minutes_title_long
                      })
                    })]
                  })
                }), a && (0, n.jsx)("li", {
                  children: (0, n.jsxs)("div", {
                    className: o()(b.countdownBlock, b.secondsCounter),
                    children: [(0, n.jsx)("span", {
                      className: o()(b.counter, s?.textGlow ? b.textGlow : ""),
                      children: T.seconds
                    }), (0, n.jsx)("div", {
                      className: b.countdownLabel,
                      children: u ? (0, n.jsx)(w.FormattedMessage, {
                        ...f.countdown_timer_seconds_title_short
                      }) : (0, n.jsx)(w.FormattedMessage, {
                        ...f.countdown_timer_seconds_title_long
                      })
                    })]
                  })
                })]
              })]
            }), "success" === t && (0, n.jsxs)("div", {
              className: b.container,
              style: {
                display: "flex",
                alignItems: "center"
              },
              children: [k && (0, n.jsx)("img", {
                className: b.accentImage,
                src: k,
                alt: d?.imageLeft?.altText
              }), (0, n.jsx)("div", {
                "data-testid": "successMessage",
                className: b.successLabel,
                children: (0, n.jsx)(w.FormattedMessage, {
                  ...f.countdown_timer_success_title
                })
              }), j && (0, n.jsx)("img", {
                className: b.accentImage,
                src: j,
                alt: d?.imageRight?.altText
              })]
            }), "failure" === t && (0, n.jsxs)("div", {
              className: b.container,
              style: {
                display: "flex",
                alignItems: "center"
              },
              children: [N && (0, n.jsx)("img", {
                className: b.accentImage,
                src: N,
                alt: _?.imageLeft?.altText
              }), (0, n.jsx)("div", {
                "data-testid": "failureMessage",
                className: b.failureLabel,
                children: (0, n.jsx)(w.FormattedMessage, {
                  ...f.countdown_timer_failure_title
                })
              }), S && (0, n.jsx)("img", {
                className: b.accentImage,
                src: S,
                alt: _?.imageRight?.altText
              })]
            })]
          })
        };
      var p = s(34232),
        x = s(56088);
      const k = ({
          milestones: e,
          incompleteImage: t,
          completedImage: s
        }) => {
          const a = (e.findLastIndex(e => e.active) + 1) / e.length,
            r = 100 / a;
          return (0, n.jsxs)("div", {
            className: "rockstargames-sites-gta-gen9db9153ad1fcdaae879f0cebf75ad5f67",
            children: [(0, n.jsx)("div", {
              className: "rockstargames-sites-gta-gen9df5cc11b5bcabefeb20bc0f9747ebc07",
              style: {
                backgroundImage: `url(${(0,i.useGetCdnSource)(t)})`
              },
              "data-testid": "incompleteImage"
            }), (0, n.jsx)("div", {
              className: "rockstargames-sites-gta-gen9eeebadb0565e0016deb8d8f50394c921",
              style: {
                backgroundImage: `url(${(0,i.useGetCdnSource)(s)})`,
                backgroundSize: `${r}%`,
                width: 100 * a + "%"
              },
              "data-testid": "completedImage"
            }), e.map((t, s) => (0, n.jsx)("div", {
              className: o()("rockstargames-sites-gta-gen9faa53fa77749f0a05f711222185919e1", 0 === s ? "rockstargames-sites-gta-gen9fa6e2e8d17c632ef7af31fdfa3511bf4" : "", s === e.length - 1 ? "rockstargames-sites-gta-gen9b39f693a40f75244b1c104b8d83064e5" : ""),
              "data-testid": "milestoneBox",
              children: (0, n.jsx)("div", {
                className: "rockstargames-sites-gta-gen9b1177fbd4e3bcda4051638d86044b957"
              })
            }, s))]
          })
        },
        v = (0, w.defineMessages)({
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
          final: a
        }) => {
          const i = (0, w.useIntl)(),
            r = s ? "rockstargames-sites-gta-gen9a237ddf12d1e317c6389b99dab0ebaaf" : "",
            c = a ? "rockstargames-sites-gta-gen9cf16fb2f605281b22e08858bd0b10be8" : "";
          return (0, n.jsx)("div", {
            className: "rockstargames-sites-gta-gen9ea109f400f7e49404883a62664e5c4f9",
            children: (0, n.jsxs)("div", {
              className: o()("rockstargames-sites-gta-gen9a4776cf49ea083284f9d403b204c9b78", r, c),
              children: [(0, n.jsxs)("div", {
                className: "rockstargames-sites-gta-gen9fe16bcb2866e77749008c06e96e776c2",
                children: [(0, n.jsx)("h4", {
                  children: e
                }), s && (0, n.jsx)(p.Check, {
                  label: i.formatMessage(v.milestone_marker_success_aria),
                  className: "rockstargames-sites-gta-gen9d3b0319ef5d65d06d7e7fbe51cdc50c2",
                  testId: "checkmark"
                })]
              }), t && (0, n.jsx)("p", {
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
        }) => (0, n.jsxs)("svg", {
          className: t,
          version: "1.1",
          width: "15",
          height: "11",
          viewBox: "0 0 15 11",
          xmlns: "http://www.w3.org/2000/svg",
          children: [(0, n.jsx)("title", {
            children: e
          }), (0, n.jsx)("path", {
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
          milestones: a,
          initialTitle: o,
          initialDate: i
        }) => {
          const r = (0, l.useRef)(null),
            c = (0, l.useRef)(null),
            [d, _] = (0, l.useState)(!1),
            {
              isMobile: u
            } = (0, x.G4)();
          if ((0, x.T0)(r), (0, l.useEffect)(() => {
              u && r.current && c.current && (r.current.scrollLeft = c.current.getBoundingClientRect().left - window.innerWidth / 2, r.current.addEventListener("scroll", e => {
                const t = e.target;
                t && Math.ceil(t.scrollLeft + t.clientWidth) >= t.scrollWidth ? _(!0) : _(!1)
              }))
            }, [u]), !a || 0 === a.length) return null;
          const m = a.findLastIndex(e => e.active),
            g = a[a.length - 1].title;
          return (0, n.jsxs)("section", {
            className: N.milestoneIndicators,
            children: [(0, n.jsxs)("div", {
              className: N.milestoneHeading,
              children: [(0, n.jsx)("h3", {
                className: N.milestoneTitle,
                children: e
              }), !d && (0, n.jsxs)("div", {
                className: N.milestoneGoal,
                "data-testid": "milestone-goal",
                children: [g, (0, n.jsx)(p.ArrowRight, {
                  label: "",
                  size: "MD"
                })]
              })]
            }), (0, n.jsx)("div", {
              className: N.milestoneScroll,
              ref: r,
              children: (0, n.jsxs)("div", {
                className: N.milestoneGroup,
                children: [(0, n.jsxs)("div", {
                  className: N.milestoneFlags,
                  children: [-1 === m ? (0, n.jsx)("div", {
                    ref: c,
                    className: N.milestoneFlag,
                    "data-testid": "marker",
                    children: (0, n.jsx)(y, {})
                  }) : (0, n.jsx)("div", {
                    className: N.milestoneFlag
                  }), a.map((e, t) => t === m ? (0, n.jsx)("div", {
                    ref: c,
                    className: N.milestoneFlag,
                    "data-testid": "marker",
                    children: (0, n.jsx)(y, {})
                  }, t) : (0, n.jsx)("div", {
                    className: N.milestoneFlag
                  }, t))]
                }), (0, n.jsx)(k, {
                  milestones: a,
                  incompleteImage: s,
                  completedImage: t
                }), (0, n.jsxs)("div", {
                  className: N.milestoneMarkers,
                  children: [(0, n.jsx)(j, {
                    title: o,
                    date: i,
                    active: !0
                  }), a.map((e, t) => (0, n.jsx)(j, {
                    title: e.title,
                    date: e.date,
                    active: e.active,
                    final: t === a.length - 1
                  }, t))]
                })]
              })
            })]
          })
        };
      var S = s(85827),
        C = s(24162),
        T = s(61874);
      const B = (0, w.defineMessages)({
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
      var I = s(26732);
      const G = ({
          heading: e,
          description: t,
          ctaText: s,
          ctaLink: a
        }) => {
          const {
            track: o
          } = (0, T.useGtmTrack)();
          return (0, n.jsxs)("div", {
            className: "rockstargames-sites-gta-gen9c4cf0ba33588235c64debc11db928235",
            children: [e && (0, n.jsx)("h1", {
              className: "rockstargames-sites-gta-gen9cb4ee19aff83d215fef2225f96d83b6b",
              children: e
            }), (0, n.jsxs)("div", {
              className: "rockstargames-sites-gta-gen9aab3e05951ac3213b454f7eb3fad51ec",
              children: [t && (0, n.jsx)("p", {
                className: "rockstargames-sites-gta-gen9a84f1187295a03fc3589a99cb998488e",
                children: t
              }), s && (0, n.jsx)(I.A, {
                className: "rockstargames-sites-gta-gen9ae32e8cef2d804e10a42e71b2cc21178",
                text: s,
                to: a,
                onClick: () => o({
                  event: "cta_learn",
                  element_placement: "community challenge cta",
                  link_url: a,
                  text: s?.toLowerCase()
                })
              })]
            })]
          })
        },
        R = ({
          title: e,
          subTitle: t,
          rewardsBgImage: s
        }) => {
          const a = (0, i.useGetCdnSource)(s?.mobile ?? null),
            o = (0, i.useGetCdnSource)(s?.desktop ?? a);
          return (0, n.jsx)("div", {
            className: "rockstargames-sites-gta-gen9b2b3a24de3089dd7ee6d7f8761856ec7",
            style: {
              "--rewards-background-image": `url(${o})`
            },
            children: (0, n.jsxs)("div", {
              className: "rockstargames-sites-gta-gen9d8be908607e3f417a121c4f517eabb8a",
              children: [(0, n.jsx)("div", {
                className: "rockstargames-sites-gta-gen9d285d31afa0ea914d77450534007eac1",
                children: t
              }), (0, n.jsx)("div", {
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
          } = (0, g.useWindowResize)(), a = (0, w.useIntl)(), i = (0, l.useRef)(null), r = (0, l.useRef)(null), c = (0, l.useRef)(null), d = (0, l.useRef)(), [_, u] = (0, l.useState)(!1), [m, f] = (0, l.useState)(), [b, h] = (0, l.useState)(!1), [p, x] = (0, l.useState)(!1), {
            track: k
          } = (0, T.useGtmTrack)(), v = d?.current?.swiper, j = e?.heading, y = e?.cards;
          (0, l.useEffect)(() => {
            if (v && "number" == typeof v?.params?.slidesPerView) {
              const e = v.slides?.length;
              u(e > v.params.slidesPerView)
            }
          }, [y, v?.params.slidesPerView]), (0, l.useEffect)(() => {
            f({
              nextEl: r.current,
              prevEl: i.current
            })
          }, [r, i]);
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
            I = e => {
              if ("Tab" === e.key && !e.shiftKey) {
                const t = v?.slides[v?.activeIndex].querySelector('a, button, [role="button"]');
                t && t?.tabIndex > -1 && (e.preventDefault(), t.focus())
              }
            };
          return (0, n.jsxs)("div", {
            className: L.rewardPanel,
            children: [(0, n.jsx)("div", {
              className: L.leftColumn,
              children: (0, n.jsx)(G, {
                ...t
              })
            }), (0, n.jsx)("div", {
              ref: c,
              className: L.rightColumn,
              children: y?.length ? (0, n.jsxs)(n.Fragment, {
                children: [(0, n.jsxs)("div", {
                  className: L.navControl,
                  children: [(0, n.jsx)("h1", {
                    className: L.titleHeading,
                    children: j
                  }), !s && _ && (0, n.jsxs)("div", {
                    className: L.btnArea,
                    children: [(0, n.jsx)("button", {
                      "data-testid": "prevBtn",
                      ref: i,
                      className: o()(L.prevBtn, b ? L.disabled : ""),
                      onClick: N,
                      "aria-label": a.formatMessage(B.rewards_carousel_previous),
                      type: "button",
                      disabled: b
                    }), (0, n.jsx)("button", {
                      "data-testid": "nextBtn",
                      ref: r,
                      className: o()(L.nextBtn, p ? L.disabled : ""),
                      onClick: M,
                      onKeyDown: I,
                      "aria-label": a.formatMessage(B.rewards_carousel_next),
                      type: "button",
                      disabled: p
                    })]
                  })]
                }), (0, n.jsxs)(C.RC, {
                  slidesPerView: 1.25,
                  ref: d,
                  onSlideChange: e => {
                    h(e.isBeginning), x(e.isEnd)
                  },
                  onSlidesUpdated: e => {
                    h(e.isBeginning), x(e.isEnd)
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
                  children: [s && (0, n.jsxs)("div", {
                    className: L.btnArea,
                    children: [(0, n.jsx)("button", {
                      "data-testid": "prevBtn",
                      ref: i,
                      className: o()(L.prevBtn, b ? L.disabled : ""),
                      onClick: N,
                      "aria-label": a.formatMessage(B.rewards_carousel_previous),
                      type: "button",
                      disabled: b
                    }), (0, n.jsx)("button", {
                      "data-testid": "nextBtn",
                      ref: r,
                      className: o()(L.nextBtn, p ? L.disabled : ""),
                      onClick: M,
                      onKeyDown: I,
                      "aria-label": a.formatMessage(B.rewards_carousel_next),
                      type: "button",
                      disabled: p
                    })]
                  }), y.map((e, t) => {
                    const s = e?.title,
                      a = e?.subTitle,
                      o = e?.rewardsBgImage;
                    return (0, n.jsx)(C.qr, {
                      className: L.slide,
                      onFocus: () => (e => {
                        v?.slideTo(e)
                      })(t),
                      children: (0, n.jsx)(R, {
                        title: s,
                        subTitle: a,
                        rewardsBgImage: o
                      })
                    }, t)
                  })]
                })]
              }) : (0, n.jsx)("div", {
                className: L.noRewardsAvailable,
                children: (0, n.jsx)(w.FormattedMessage, {
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
        D = JSON.parse('{"de-DE":{"countdown_timer_days_title_long":"Tage","countdown_timer_days_title_short":"T.","countdown_timer_failure_title":"Niederlage","countdown_timer_header_pending_title":"Ergebnisse werden berechnet …","countdown_timer_header_title":"Verbleibende Zeit","countdown_timer_hours_title_long":"Stunden","countdown_timer_hours_title_short":"STD.","countdown_timer_minutes_title_long":"Minuten","countdown_timer_minutes_title_short":"MIN.","countdown_timer_seconds_title_long":"Sekunden","countdown_timer_seconds_title_short":"SEK.","countdown_timer_success_title":"Erfolg","milestone_marker_success_aria":"Meilenstein erreicht","no_rewards_available_title":"Keine Belohnungen verfügbar","rewards_carousel_next":"Weiter","rewards_carousel_previous":"Zurück"},"en-US":{"countdown_timer_days_title_long":"Days","countdown_timer_days_title_short":"D","countdown_timer_failure_title":"Failure","countdown_timer_header_pending_title":"Calculating Results...","countdown_timer_header_title":"Time Remaining","countdown_timer_hours_title_long":"Hours","countdown_timer_hours_title_short":"H","countdown_timer_minutes_title_long":"Minutes","countdown_timer_minutes_title_short":"M","countdown_timer_seconds_title_long":"Seconds","countdown_timer_seconds_title_short":"S","countdown_timer_success_title":"Success","milestone_marker_success_aria":"Milestone achieved","no_rewards_available_title":"No rewards available","rewards_carousel_next":"Next","rewards_carousel_previous":"Previous"},"es-ES":{"countdown_timer_days_title_long":"días","countdown_timer_days_title_short":"D","countdown_timer_failure_title":"Fracaso","countdown_timer_header_pending_title":"Calculando resultados...","countdown_timer_header_title":"Tiempo restante","countdown_timer_hours_title_long":"horas","countdown_timer_hours_title_short":"H","countdown_timer_minutes_title_long":"minutos","countdown_timer_minutes_title_short":"M","countdown_timer_seconds_title_long":"segundos","countdown_timer_seconds_title_short":"S","countdown_timer_success_title":"Éxito","milestone_marker_success_aria":"Hito","no_rewards_available_title":"No hay recompensas disponibles","rewards_carousel_next":"Siguiente","rewards_carousel_previous":"Anterior"},"es-MX":{"countdown_timer_days_title_long":"Días","countdown_timer_days_title_short":"D","countdown_timer_failure_title":"Fracaso","countdown_timer_header_pending_title":"Calculando resultados...","countdown_timer_header_title":"Tiempo restante","countdown_timer_hours_title_long":"Horas","countdown_timer_hours_title_short":"H","countdown_timer_minutes_title_long":"Minutos","countdown_timer_minutes_title_short":"M","countdown_timer_seconds_title_long":"Segundos","countdown_timer_seconds_title_short":"S","countdown_timer_success_title":"Éxito","milestone_marker_success_aria":"Logro alcanzado","no_rewards_available_title":"No hay recompensas disponibles","rewards_carousel_next":"Siguiente","rewards_carousel_previous":"Anterior"},"fr-FR":{"countdown_timer_days_title_long":"Jours","countdown_timer_days_title_short":"J","countdown_timer_failure_title":"Échec","countdown_timer_header_pending_title":"Calcul des résultats...","countdown_timer_header_title":"Temps restant","countdown_timer_hours_title_long":"Heures","countdown_timer_hours_title_short":"H","countdown_timer_minutes_title_long":"Minutes","countdown_timer_minutes_title_short":"Min","countdown_timer_seconds_title_long":"Secondes","countdown_timer_seconds_title_short":"S","countdown_timer_success_title":"Réussite","milestone_marker_success_aria":"Objectif atteint","no_rewards_available_title":"Aucune récompense disponible","rewards_carousel_next":"Suivant","rewards_carousel_previous":"Précédent"},"it-IT":{"countdown_timer_days_title_long":"Giorni","countdown_timer_days_title_short":"G","countdown_timer_failure_title":"Errore","countdown_timer_header_pending_title":"Calcolo risultati in corso...","countdown_timer_header_title":"Tempo rimasto","countdown_timer_hours_title_long":"Ore","countdown_timer_hours_title_short":"O","countdown_timer_minutes_title_long":"Minuti","countdown_timer_minutes_title_short":"M","countdown_timer_seconds_title_long":"Secondi","countdown_timer_seconds_title_short":"S","countdown_timer_success_title":"Completato","milestone_marker_success_aria":"Obiettivo raggiunto","no_rewards_available_title":"Non ci sono ricompense disponibili","rewards_carousel_next":"Successivo","rewards_carousel_previous":"Precedente"},"ja-JP":{"countdown_timer_days_title_long":"日","countdown_timer_days_title_short":"日","countdown_timer_failure_title":"失敗","countdown_timer_header_pending_title":"結果を計算中...","countdown_timer_header_title":"残り時間","countdown_timer_hours_title_long":"時間","countdown_timer_hours_title_short":"時間","countdown_timer_minutes_title_long":"分","countdown_timer_minutes_title_short":"分","countdown_timer_seconds_title_long":"秒","countdown_timer_seconds_title_short":"秒","countdown_timer_success_title":"成功","milestone_marker_success_aria":"マイルストーン達成","no_rewards_available_title":"獲得可能報酬なし","rewards_carousel_next":"次","rewards_carousel_previous":"前"},"ko-KR":{"countdown_timer_days_title_long":"일","countdown_timer_days_title_short":"일","countdown_timer_failure_title":"실패","countdown_timer_header_pending_title":"결과 집계 중...","countdown_timer_header_title":"남은 시간","countdown_timer_hours_title_long":"시","countdown_timer_hours_title_short":"시","countdown_timer_minutes_title_long":"분","countdown_timer_minutes_title_short":"분","countdown_timer_seconds_title_long":"초","countdown_timer_seconds_title_short":"초","countdown_timer_success_title":"성공","milestone_marker_success_aria":"목표 달성","no_rewards_available_title":"보상 이용 불가","rewards_carousel_next":"다음","rewards_carousel_previous":"이전"},"pl-PL":{"countdown_timer_days_title_long":"Dni","countdown_timer_days_title_short":"dn.","countdown_timer_failure_title":"Porażka","countdown_timer_header_pending_title":"Obliczanie wyników...","countdown_timer_header_title":"Pozostały czas","countdown_timer_hours_title_long":"Godziny","countdown_timer_hours_title_short":"godz.","countdown_timer_minutes_title_long":"Minuty","countdown_timer_minutes_title_short":"min.","countdown_timer_seconds_title_long":"Sekundy","countdown_timer_seconds_title_short":"sek.","countdown_timer_success_title":"Sukces","milestone_marker_success_aria":"Kamień milowy osiągnięty","no_rewards_available_title":"Brak dostępnych nagród","rewards_carousel_next":"Dalej","rewards_carousel_previous":"Poprzednie"},"pt-BR":{"countdown_timer_days_title_long":"dias","countdown_timer_days_title_short":"d","countdown_timer_failure_title":"Fracasso","countdown_timer_header_pending_title":"Calculando resultados...","countdown_timer_header_title":"Tempo restante","countdown_timer_hours_title_long":"horas","countdown_timer_hours_title_short":"h","countdown_timer_minutes_title_long":"minutos","countdown_timer_minutes_title_short":"m","countdown_timer_seconds_title_long":"segundos","countdown_timer_seconds_title_short":"s","countdown_timer_success_title":"Sucesso","milestone_marker_success_aria":"Marco alcançado","no_rewards_available_title":"Nenhuma recompensa disponível","rewards_carousel_next":"Seguinte","rewards_carousel_previous":"Anterior"},"ru-RU":{"countdown_timer_days_title_long":"Дней","countdown_timer_days_title_short":"Дн.","countdown_timer_failure_title":"Провал","countdown_timer_header_pending_title":"Оценка результатов...","countdown_timer_header_title":"Осталось времени","countdown_timer_hours_title_long":"Часов","countdown_timer_hours_title_short":"Ч.","countdown_timer_minutes_title_long":"Минут","countdown_timer_minutes_title_short":"Мин.","countdown_timer_seconds_title_long":"Секунд","countdown_timer_seconds_title_short":"Сек.","countdown_timer_success_title":"Успех","milestone_marker_success_aria":"Этап пройден","no_rewards_available_title":"Нет доступных наград","rewards_carousel_next":"Далее","rewards_carousel_previous":"Назад"},"zh-CN":{"countdown_timer_days_title_long":"天","countdown_timer_days_title_short":"天","countdown_timer_failure_title":"失败","countdown_timer_header_pending_title":"正在计算结果……","countdown_timer_header_title":"剩余时间","countdown_timer_hours_title_long":"小时","countdown_timer_hours_title_short":"小时","countdown_timer_minutes_title_long":"分钟","countdown_timer_minutes_title_short":"分钟","countdown_timer_seconds_title_long":"秒","countdown_timer_seconds_title_short":"秒","countdown_timer_success_title":"成功","milestone_marker_success_aria":"已达成里程碑","no_rewards_available_title":"无可用奖励","rewards_carousel_next":"下一个","rewards_carousel_previous":"上一个"},"zh-TW":{"countdown_timer_days_title_long":"天","countdown_timer_days_title_short":"天","countdown_timer_failure_title":"失敗","countdown_timer_header_pending_title":"正在計算結果…","countdown_timer_header_title":"剩餘時間","countdown_timer_hours_title_long":"小時","countdown_timer_hours_title_short":"小時","countdown_timer_minutes_title_long":"分鐘","countdown_timer_minutes_title_short":"分鐘","countdown_timer_seconds_title_long":"秒","countdown_timer_seconds_title_short":"秒","countdown_timer_success_title":"成功","milestone_marker_success_aria":"已達成里程碑","no_rewards_available_title":"無可用獎勵","rewards_carousel_next":"下一個","rewards_carousel_previous":"上一個"}}'),
        E = (0, w.withIntl)(({
          banner: e,
          countdown: t,
          rewards: s,
          milestoneIndicator: a
        }) => (0, n.jsx)("div", {
          className: P.communityChallenges,
          children: (0, n.jsxs)("div", {
            className: P.wrapper,
            children: [e && (0, n.jsx)(c, {
              ...e
            }), (0, n.jsxs)("div", {
              className: P.content,
              children: [t?.timer && (0, n.jsx)(h, {
                ...t.timer
              }), a && (0, n.jsx)(M, {
                ...a
              }), s && (0, n.jsx)("section", {
                className: P.rewardsSection,
                children: (0, n.jsx)(F, {
                  ...s
                })
              })]
            })]
          })
        }), D)
    },
    42735: (e, t, s) => {
      function n(e) {
        return t => {
          const s = (e ? Math[e] : Math.trunc)(t);
          return 0 === s ? 0 : s
        }
      }
      s.d(t, {
        u: () => n
      })
    },
    77044: (e, t, s) => {
      s.d(t, {
        w: () => a
      });
      var n = s(77984);

      function a(e, t) {
        return "function" == typeof e ? e(t) : e && "object" == typeof e && n._P in e ? e[n._P](t) : e instanceof Date ? new e.constructor(t) : new Date(t)
      }
    },
    77984: (e, t, s) => {
      s.d(t, {
        _P: () => a,
        s0: () => n
      }), Math.pow(10, 8);
      const n = 36e5,
        a = Symbol.for("constructDateFrom")
    },
    95362: (e, t, s) => {
      s.d(t, {
        s: () => i,
        t: () => o
      });
      var n = s(71127);

      function a(e, t) {
        if ("function" == typeof e) return e(t);
        null != e && (e.current = t)
      }

      function o(...e) {
        return t => {
          let s = !1;
          const n = e.map(e => {
            const n = a(e, t);
            return s || "function" != typeof n || (s = !0), n
          });
          if (s) return () => {
            for (let t = 0; t < n.length; t++) {
              const s = n[t];
              "function" == typeof s ? s() : a(e[t], null)
            }
          }
        }
      }

      function i(...e) {
        return n.useCallback(o(...e), e)
      }
    }
  }
]);