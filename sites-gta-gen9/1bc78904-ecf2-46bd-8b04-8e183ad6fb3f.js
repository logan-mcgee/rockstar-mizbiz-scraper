try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "1bc78904-ecf2-46bd-8b04-8e183ad6fb3f", e._sentryDebugIdIdentifier = "sentry-dbid-1bc78904-ecf2-46bd-8b04-8e183ad6fb3f")
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
  [9646], {
    49646(e, t, s) {
      s.r(t), s.d(t, {
        default: () => D
      });
      var a = s(39793),
        n = s(81270),
        o = s(17301),
        i = s(25993);
      const r = ({
        backgroundImage: e,
        image: t,
        logoHorizontalPosition: s,
        logoVerticalPosition: r,
        enableOverlay: d = !1,
        overlayBackground: l = "rgba(0,0,0,0.25)"
      }) => {
        const c = (0, i.S1)(t ?? {}),
          _ = (0, o.useGetCdnSource)(e?.mobile ?? null),
          u = (0, o.useGetCdnSource)(e?.desktop ?? _),
          m = c?.src?.mobile,
          g = c?.src?.desktop ?? m;
        return (0, a.jsx)("div", {
          className: (0, n.default)("rockstargames-sites-gta-gen9dd3eed68318843fe25f147a11901017e", d ? "rockstargames-sites-gta-gen9d1ac49cbb3da8269c13f1ccc1b515fb4" : ""),
          style: {
            "--overlay-background-color": l
          },
          children: (0, a.jsx)("div", {
            className: "rockstargames-sites-gta-gen9b5e649bc428f66ddfa8db02936f5b69d",
            style: {
              "--background-image-mobile": `url(${_})`,
              "--background-image-desktop": `url(${u})`,
              "--logo-justify-position": s ?? "normal",
              "--logo-align-position": r ?? "normal"
            },
            children: g && (0, a.jsx)("img", {
              src: g,
              className: "rockstargames-sites-gta-gen9dab7157848250d13aea143ea8b7fae16",
              alt: c?.alt ?? ""
            })
          })
        })
      };
      var d = s(93082),
        l = s(60958),
        c = s(46863);

      function _(e, t) {
        return (0, c.w)(t || e, e)
      }

      function u(e, t, s) {
        const a = function(e, t) {
          return +_(e) - +_(t)
        }(e, t) / 1e3;
        return (0, l.u)(s?.roundingMethod)(a)
      }
      var m = s(13331),
        g = s(42909);
      const w = (0, g.defineMessages)({
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
        f = {
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
        b = ({
          targetDate: e,
          status: t = "active",
          theme: s,
          includeSeconds: i = !1,
          showBackground: r,
          backgroundColor: l,
          successBgImages: c,
          failureBgImages: _
        }) => {
          const {
            isMobile: b
          } = (0, m.useWindowResize)(), [h, p] = (0, d.useState)(!1), x = (0, o.useGetCdnSource)(c?.imageLeft?.mobile ?? null), k = (0, o.useGetCdnSource)(c?.imageLeft?.desktop ?? x), v = (0, o.useGetCdnSource)(c?.imageRight?.mobile ?? null), j = (0, o.useGetCdnSource)(c?.imageRight?.desktop ?? v), y = (0, o.useGetCdnSource)(_?.imageLeft?.mobile ?? null), N = (0, o.useGetCdnSource)(_?.imageLeft?.desktop ?? y), M = (0, o.useGetCdnSource)(_?.imageRight?.mobile ?? null), S = (0, o.useGetCdnSource)(_?.imageRight?.desktop ?? M), C = (0, d.useCallback)((e, t) => {
            const s = u(e, new Date);
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
          }, []), [T, B] = (0, d.useState)(() => C(e, i));
          return (0, d.useEffect)(() => {
            const t = setInterval(() => {
              B(C(e, i))
            }, i ? 1e3 : 6e4);
            return () => clearInterval(t)
          }, [e, i, C]), (0, a.jsxs)("div", {
            className: (0, n.default)(f.countdownContainer, t),
            style: {
              "--counter-text-color": s?.enableTextGradient ? "transparent" : s?.textColor,
              "--counter-text-stroke-color": s?.enableTextStroke ? s?.textStrokeColor : "unset",
              "--counter-text-stroke-width": s?.enableTextStroke ? s?.textStrokeWidth : "unset",
              "--counter-text-shadow": s?.enableTextShadow ? s.textShadow : "unset",
              "--counter-text-gradient": s?.enableTextGradient ? s.textGradient : "none",
              "--counter-background-color": r ? l : "none",
              "--counter-orientation": "vertical" === s?.counterOrientation ? "column" : "row"
            },
            children: ["active" === t && (0, a.jsxs)(a.Fragment, {
              children: [(0, a.jsx)("h1", {
                className: f.countdownHeader,
                children: (0, a.jsx)(g.FormattedMessage, {
                  ...w.countdown_timer_header_title
                })
              }), "active" === t && h && (0, a.jsx)("div", {
                "data-testid": "pendingResults",
                className: f.pendingResults,
                children: (0, a.jsx)("p", {
                  children: (0, a.jsx)(g.FormattedMessage, {
                    ...w.countdown_timer_header_pending_title
                  })
                })
              }), (0, a.jsxs)("ul", {
                "data-testid": "countdownTimer",
                className: (0, n.default)(f.countDownTimer),
                children: [(0, a.jsx)("li", {
                  children: (0, a.jsxs)("div", {
                    className: f.countdownBlock,
                    children: [(0, a.jsx)("span", {
                      className: (0, n.default)(f.counter, s?.textGlow ? f.textGlow : ""),
                      children: T.days
                    }), (0, a.jsx)("div", {
                      className: f.countdownLabel,
                      children: b ? (0, a.jsx)(g.FormattedMessage, {
                        ...w.countdown_timer_days_title_short
                      }) : (0, a.jsx)(g.FormattedMessage, {
                        ...w.countdown_timer_days_title_long
                      })
                    })]
                  })
                }), (0, a.jsx)("li", {
                  children: (0, a.jsxs)("div", {
                    className: f.countdownBlock,
                    children: [(0, a.jsx)("span", {
                      className: (0, n.default)(f.counter, s?.textGlow ? f.textGlow : ""),
                      children: T.hours
                    }), (0, a.jsx)("div", {
                      className: f.countdownLabel,
                      children: b ? (0, a.jsx)(g.FormattedMessage, {
                        ...w.countdown_timer_hours_title_short
                      }) : (0, a.jsx)(g.FormattedMessage, {
                        ...w.countdown_timer_hours_title_long
                      })
                    })]
                  })
                }), (0, a.jsx)("li", {
                  children: (0, a.jsxs)("div", {
                    className: f.countdownBlock,
                    children: [(0, a.jsx)("span", {
                      className: (0, n.default)(f.counter, s?.textGlow ? f.textGlow : ""),
                      children: T.minutes
                    }), (0, a.jsx)("div", {
                      className: f.countdownLabel,
                      children: b ? (0, a.jsx)(g.FormattedMessage, {
                        ...w.countdown_timer_minutes_title_short
                      }) : (0, a.jsx)(g.FormattedMessage, {
                        ...w.countdown_timer_minutes_title_long
                      })
                    })]
                  })
                }), i && (0, a.jsx)("li", {
                  children: (0, a.jsxs)("div", {
                    className: (0, n.default)(f.countdownBlock, f.secondsCounter),
                    children: [(0, a.jsx)("span", {
                      className: (0, n.default)(f.counter, s?.textGlow ? f.textGlow : ""),
                      children: T.seconds
                    }), (0, a.jsx)("div", {
                      className: f.countdownLabel,
                      children: b ? (0, a.jsx)(g.FormattedMessage, {
                        ...w.countdown_timer_seconds_title_short
                      }) : (0, a.jsx)(g.FormattedMessage, {
                        ...w.countdown_timer_seconds_title_long
                      })
                    })]
                  })
                })]
              })]
            }), "success" === t && (0, a.jsxs)("div", {
              className: f.container,
              style: {
                display: "flex",
                alignItems: "center"
              },
              children: [k && (0, a.jsx)("img", {
                className: f.accentImage,
                src: k,
                alt: c?.imageLeft?.altText
              }), (0, a.jsx)("div", {
                "data-testid": "successMessage",
                className: f.successLabel,
                children: (0, a.jsx)(g.FormattedMessage, {
                  ...w.countdown_timer_success_title
                })
              }), j && (0, a.jsx)("img", {
                className: f.accentImage,
                src: j,
                alt: c?.imageRight?.altText
              })]
            }), "failure" === t && (0, a.jsxs)("div", {
              className: f.container,
              style: {
                display: "flex",
                alignItems: "center"
              },
              children: [N && (0, a.jsx)("img", {
                className: f.accentImage,
                src: N,
                alt: _?.imageLeft?.altText
              }), (0, a.jsx)("div", {
                "data-testid": "failureMessage",
                className: f.failureLabel,
                children: (0, a.jsx)(g.FormattedMessage, {
                  ...w.countdown_timer_failure_title
                })
              }), S && (0, a.jsx)("img", {
                className: f.accentImage,
                src: S,
                alt: _?.imageRight?.altText
              })]
            })]
          })
        };
      var h = s(8830),
        p = s(85997);
      const x = ({
          milestones: e,
          incompleteImage: t,
          completedImage: s
        }) => {
          const i = (e.findLastIndex(e => e.active) + 1) / e.length,
            r = 100 / i;
          return (0, a.jsxs)("div", {
            className: "rockstargames-sites-gta-gen9db9153ad1fcdaae879f0cebf75ad5f67",
            children: [(0, a.jsx)("div", {
              className: "rockstargames-sites-gta-gen9df5cc11b5bcabefeb20bc0f9747ebc07",
              style: {
                backgroundImage: `url(${(0,o.useGetCdnSource)(t)})`
              },
              "data-testid": "incompleteImage"
            }), (0, a.jsx)("div", {
              className: "rockstargames-sites-gta-gen9eeebadb0565e0016deb8d8f50394c921",
              style: {
                backgroundImage: `url(${(0,o.useGetCdnSource)(s)})`,
                backgroundSize: `${r}%`,
                width: 100 * i + "%"
              },
              "data-testid": "completedImage"
            }), e.map((t, s) => (0, a.jsx)("div", {
              className: (0, n.default)("rockstargames-sites-gta-gen9faa53fa77749f0a05f711222185919e1", 0 === s ? "rockstargames-sites-gta-gen9fa6e2e8d17c632ef7af31fdfa3511bf4" : "", s === e.length - 1 ? "rockstargames-sites-gta-gen9b39f693a40f75244b1c104b8d83064e5" : ""),
              "data-testid": "milestoneBox",
              children: (0, a.jsx)("div", {
                className: "rockstargames-sites-gta-gen9b1177fbd4e3bcda4051638d86044b957"
              })
            }, s))]
          })
        },
        k = (0, g.defineMessages)({
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
          final: o
        }) => {
          const i = (0, g.useIntl)(),
            r = s ? "rockstargames-sites-gta-gen9a237ddf12d1e317c6389b99dab0ebaaf" : "",
            d = o ? "rockstargames-sites-gta-gen9cf16fb2f605281b22e08858bd0b10be8" : "";
          return (0, a.jsx)("div", {
            className: "rockstargames-sites-gta-gen9ea109f400f7e49404883a62664e5c4f9",
            children: (0, a.jsxs)("div", {
              className: (0, n.default)("rockstargames-sites-gta-gen9a4776cf49ea083284f9d403b204c9b78", r, d),
              children: [(0, a.jsxs)("div", {
                className: "rockstargames-sites-gta-gen9fe16bcb2866e77749008c06e96e776c2",
                children: [(0, a.jsx)("h4", {
                  children: e
                }), s && (0, a.jsx)(h.Check, {
                  label: i.formatMessage(k.milestone_marker_success_aria),
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
        j = ({
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
        N = ({
          heading: e,
          completedMilestoneImage: t,
          incompleteMilestoneImage: s,
          milestones: n,
          initialTitle: o,
          initialDate: i
        }) => {
          const r = (0, d.useRef)(null),
            l = (0, d.useRef)(null),
            [c, _] = (0, d.useState)(!1),
            {
              isMobile: u
            } = (0, p.G4)();
          if ((0, p.T0)(r), (0, d.useEffect)(() => {
              u && r.current && l.current && (r.current.scrollLeft = l.current.getBoundingClientRect().left - window.innerWidth / 2, r.current.addEventListener("scroll", e => {
                const t = e.target;
                t && Math.ceil(t.scrollLeft + t.clientWidth) >= t.scrollWidth ? _(!0) : _(!1)
              }))
            }, [u]), !n || 0 === n.length) return null;
          const m = n.findLastIndex(e => e.active),
            g = n[n.length - 1].title;
          return (0, a.jsxs)("section", {
            className: y.milestoneIndicators,
            children: [(0, a.jsxs)("div", {
              className: y.milestoneHeading,
              children: [(0, a.jsx)("h3", {
                className: y.milestoneTitle,
                children: e
              }), !c && (0, a.jsxs)("div", {
                className: y.milestoneGoal,
                "data-testid": "milestone-goal",
                children: [g, (0, a.jsx)(h.ArrowRight, {
                  label: "",
                  size: "MD"
                })]
              })]
            }), (0, a.jsx)("div", {
              className: y.milestoneScroll,
              ref: r,
              children: (0, a.jsxs)("div", {
                className: y.milestoneGroup,
                children: [(0, a.jsxs)("div", {
                  className: y.milestoneFlags,
                  children: [-1 === m ? (0, a.jsx)("div", {
                    ref: l,
                    className: y.milestoneFlag,
                    "data-testid": "marker",
                    children: (0, a.jsx)(j, {})
                  }) : (0, a.jsx)("div", {
                    className: y.milestoneFlag
                  }), n.map((e, t) => t === m ? (0, a.jsx)("div", {
                    ref: l,
                    className: y.milestoneFlag,
                    "data-testid": "marker",
                    children: (0, a.jsx)(j, {})
                  }, t) : (0, a.jsx)("div", {
                    className: y.milestoneFlag
                  }, t))]
                }), (0, a.jsx)(x, {
                  milestones: n,
                  incompleteImage: s,
                  completedImage: t
                }), (0, a.jsxs)("div", {
                  className: y.milestoneMarkers,
                  children: [(0, a.jsx)(v, {
                    title: o,
                    date: i,
                    active: !0
                  }), n.map((e, t) => (0, a.jsx)(v, {
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
      var M = s(50662),
        S = s(14653),
        C = s(82199);
      const T = (0, g.defineMessages)({
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
      var B = s(22682);
      const I = ({
          heading: e,
          description: t,
          ctaText: s,
          ctaLink: n
        }) => {
          const {
            track: o
          } = (0, C.useGtmTrack)();
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
              }), s && (0, a.jsx)(B.A, {
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
        G = ({
          title: e,
          subTitle: t,
          rewardsBgImage: s
        }) => {
          const n = (0, o.useGetCdnSource)(s?.mobile ?? null),
            i = (0, o.useGetCdnSource)(s?.desktop ?? n);
          return (0, a.jsx)("div", {
            className: "rockstargames-sites-gta-gen9b2b3a24de3089dd7ee6d7f8761856ec7",
            style: {
              "--rewards-background-image": `url(${i})`
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
        L = ({
          deck: e,
          detail: t
        }) => {
          const {
            isMobile: s
          } = (0, m.useWindowResize)(), o = (0, g.useIntl)(), i = (0, d.useRef)(null), r = (0, d.useRef)(null), l = (0, d.useRef)(null), c = (0, d.useRef)(), [_, u] = (0, d.useState)(!1), [w, f] = (0, d.useState)(), [b, h] = (0, d.useState)(!1), [p, x] = (0, d.useState)(!1), {
            track: k
          } = (0, C.useGtmTrack)(), v = c?.current?.swiper, j = e?.heading, y = e?.cards;
          (0, d.useEffect)(() => {
            if (v && "number" == typeof v?.params?.slidesPerView) {
              const e = v.slides?.length;
              u(e > v.params.slidesPerView)
            }
          }, [y, v?.params.slidesPerView]), (0, d.useEffect)(() => {
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
            B = () => {
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
            className: R.rewardPanel,
            children: [(0, a.jsx)("div", {
              className: R.leftColumn,
              children: (0, a.jsx)(I, {
                ...t
              })
            }), (0, a.jsx)("div", {
              ref: l,
              className: R.rightColumn,
              children: y?.length ? (0, a.jsxs)(a.Fragment, {
                children: [(0, a.jsxs)("div", {
                  className: R.navControl,
                  children: [(0, a.jsx)("h1", {
                    className: R.titleHeading,
                    children: j
                  }), !s && _ && (0, a.jsxs)("div", {
                    className: R.btnArea,
                    children: [(0, a.jsx)("button", {
                      "data-testid": "prevBtn",
                      ref: i,
                      className: (0, n.default)(R.prevBtn, b ? R.disabled : ""),
                      onClick: N,
                      "aria-label": o.formatMessage(T.rewards_carousel_previous),
                      type: "button",
                      disabled: b
                    }), (0, a.jsx)("button", {
                      "data-testid": "nextBtn",
                      ref: r,
                      className: (0, n.default)(R.nextBtn, p ? R.disabled : ""),
                      onClick: B,
                      onKeyDown: L,
                      "aria-label": o.formatMessage(T.rewards_carousel_next),
                      type: "button",
                      disabled: p
                    })]
                  })]
                }), (0, a.jsxs)(S.RC, {
                  slidesPerView: 1.25,
                  ref: c,
                  onSlideChange: e => {
                    h(e.isBeginning), x(e.isEnd)
                  },
                  onSlidesUpdated: e => {
                    h(e.isBeginning), x(e.isEnd)
                  },
                  modules: [M.Vx],
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
                    className: R.btnArea,
                    children: [(0, a.jsx)("button", {
                      "data-testid": "prevBtn",
                      ref: i,
                      className: (0, n.default)(R.prevBtn, b ? R.disabled : ""),
                      onClick: N,
                      "aria-label": o.formatMessage(T.rewards_carousel_previous),
                      type: "button",
                      disabled: b
                    }), (0, a.jsx)("button", {
                      "data-testid": "nextBtn",
                      ref: r,
                      className: (0, n.default)(R.nextBtn, p ? R.disabled : ""),
                      onClick: B,
                      onKeyDown: L,
                      "aria-label": o.formatMessage(T.rewards_carousel_next),
                      type: "button",
                      disabled: p
                    })]
                  }), y.map((e, t) => {
                    const s = e?.title,
                      n = e?.subTitle,
                      o = e?.rewardsBgImage;
                    return (0, a.jsx)(S.qr, {
                      className: R.slide,
                      onFocus: () => (e => {
                        v?.slideTo(e)
                      })(t),
                      children: (0, a.jsx)(G, {
                        title: s,
                        subTitle: n,
                        rewardsBgImage: o
                      })
                    }, t)
                  })]
                })]
              }) : (0, a.jsx)("div", {
                className: R.noRewardsAvailable,
                children: (0, a.jsx)(g.FormattedMessage, {
                  ...T.no_rewards_available_title
                })
              })
            })]
          })
        },
        F = {
          communityChallengeInfoPanel: "rockstargames-sites-gta-gen9df615cfc52fdd4ced7efec100c0504c6",
          communityChallenges: "rockstargames-sites-gta-gen9dc0abf139506d2de9a4ec791e49331ef",
          content: "rockstargames-sites-gta-gen9b3af9e460a0d8d3aafdf3f71d795c94d",
          pillBtn: "rockstargames-sites-gta-gen9c60c1ea7626c520b2211fa5f0b18061b",
          selected: "rockstargames-sites-gta-gen9b58652ec7e005a714810a11cc4b2bb7f",
          wrapper: "rockstargames-sites-gta-gen9e3332f7d8fb8c01ce3af42b2fd4aebed"
        },
        P = JSON.parse('{"de-DE":{"countdown_timer_days_title_long":"Tage","countdown_timer_days_title_short":"T.","countdown_timer_failure_title":"Niederlage","countdown_timer_header_pending_title":"Ergebnisse werden berechnet …","countdown_timer_header_title":"Verbleibende Zeit","countdown_timer_hours_title_long":"Stunden","countdown_timer_hours_title_short":"STD.","countdown_timer_minutes_title_long":"Minuten","countdown_timer_minutes_title_short":"MIN.","countdown_timer_seconds_title_long":"Sekunden","countdown_timer_seconds_title_short":"SEK.","countdown_timer_success_title":"Erfolg","milestone_marker_success_aria":"Meilenstein erreicht","no_rewards_available_title":"Keine Belohnungen verfügbar","rewards_carousel_next":"Weiter","rewards_carousel_previous":"Zurück"},"en-US":{"countdown_timer_days_title_long":"Days","countdown_timer_days_title_short":"D","countdown_timer_failure_title":"Failure","countdown_timer_header_pending_title":"Calculating Results...","countdown_timer_header_title":"Time Remaining","countdown_timer_hours_title_long":"Hours","countdown_timer_hours_title_short":"H","countdown_timer_minutes_title_long":"Minutes","countdown_timer_minutes_title_short":"M","countdown_timer_seconds_title_long":"Seconds","countdown_timer_seconds_title_short":"S","countdown_timer_success_title":"Success","milestone_marker_success_aria":"Milestone achieved","no_rewards_available_title":"No rewards available","rewards_carousel_next":"Next","rewards_carousel_previous":"Previous"},"es-ES":{"countdown_timer_days_title_long":"días","countdown_timer_days_title_short":"D","countdown_timer_failure_title":"Fracaso","countdown_timer_header_pending_title":"Calculando resultados...","countdown_timer_header_title":"Tiempo restante","countdown_timer_hours_title_long":"horas","countdown_timer_hours_title_short":"H","countdown_timer_minutes_title_long":"minutos","countdown_timer_minutes_title_short":"M","countdown_timer_seconds_title_long":"segundos","countdown_timer_seconds_title_short":"S","countdown_timer_success_title":"Éxito","milestone_marker_success_aria":"Hito","no_rewards_available_title":"No hay recompensas disponibles","rewards_carousel_next":"Siguiente","rewards_carousel_previous":"Anterior"},"es-MX":{"countdown_timer_days_title_long":"Días","countdown_timer_days_title_short":"D","countdown_timer_failure_title":"Fracaso","countdown_timer_header_pending_title":"Calculando resultados...","countdown_timer_header_title":"Tiempo restante","countdown_timer_hours_title_long":"Horas","countdown_timer_hours_title_short":"H","countdown_timer_minutes_title_long":"Minutos","countdown_timer_minutes_title_short":"M","countdown_timer_seconds_title_long":"Segundos","countdown_timer_seconds_title_short":"S","countdown_timer_success_title":"Éxito","milestone_marker_success_aria":"Logro alcanzado","no_rewards_available_title":"No hay recompensas disponibles","rewards_carousel_next":"Siguiente","rewards_carousel_previous":"Anterior"},"fr-FR":{"countdown_timer_days_title_long":"Jours","countdown_timer_days_title_short":"J","countdown_timer_failure_title":"Échec","countdown_timer_header_pending_title":"Calcul des résultats...","countdown_timer_header_title":"Temps restant","countdown_timer_hours_title_long":"Heures","countdown_timer_hours_title_short":"H","countdown_timer_minutes_title_long":"Minutes","countdown_timer_minutes_title_short":"Min","countdown_timer_seconds_title_long":"Secondes","countdown_timer_seconds_title_short":"S","countdown_timer_success_title":"Réussite","milestone_marker_success_aria":"Objectif atteint","no_rewards_available_title":"Aucune récompense disponible","rewards_carousel_next":"Suivant","rewards_carousel_previous":"Précédent"},"it-IT":{"countdown_timer_days_title_long":"Giorni","countdown_timer_days_title_short":"G","countdown_timer_failure_title":"Errore","countdown_timer_header_pending_title":"Calcolo risultati in corso...","countdown_timer_header_title":"Tempo rimasto","countdown_timer_hours_title_long":"Ore","countdown_timer_hours_title_short":"O","countdown_timer_minutes_title_long":"Minuti","countdown_timer_minutes_title_short":"M","countdown_timer_seconds_title_long":"Secondi","countdown_timer_seconds_title_short":"S","countdown_timer_success_title":"Completato","milestone_marker_success_aria":"Obiettivo raggiunto","no_rewards_available_title":"Non ci sono ricompense disponibili","rewards_carousel_next":"Successivo","rewards_carousel_previous":"Precedente"},"ja-JP":{"countdown_timer_days_title_long":"日","countdown_timer_days_title_short":"日","countdown_timer_failure_title":"失敗","countdown_timer_header_pending_title":"結果を計算中...","countdown_timer_header_title":"残り時間","countdown_timer_hours_title_long":"時間","countdown_timer_hours_title_short":"時間","countdown_timer_minutes_title_long":"分","countdown_timer_minutes_title_short":"分","countdown_timer_seconds_title_long":"秒","countdown_timer_seconds_title_short":"秒","countdown_timer_success_title":"成功","milestone_marker_success_aria":"マイルストーン達成","no_rewards_available_title":"獲得可能報酬なし","rewards_carousel_next":"次","rewards_carousel_previous":"前"},"ko-KR":{"countdown_timer_days_title_long":"일","countdown_timer_days_title_short":"일","countdown_timer_failure_title":"실패","countdown_timer_header_pending_title":"결과 집계 중...","countdown_timer_header_title":"남은 시간","countdown_timer_hours_title_long":"시","countdown_timer_hours_title_short":"시","countdown_timer_minutes_title_long":"분","countdown_timer_minutes_title_short":"분","countdown_timer_seconds_title_long":"초","countdown_timer_seconds_title_short":"초","countdown_timer_success_title":"성공","milestone_marker_success_aria":"목표 달성","no_rewards_available_title":"보상 이용 불가","rewards_carousel_next":"다음","rewards_carousel_previous":"이전"},"pl-PL":{"countdown_timer_days_title_long":"Dni","countdown_timer_days_title_short":"dn.","countdown_timer_failure_title":"Porażka","countdown_timer_header_pending_title":"Obliczanie wyników...","countdown_timer_header_title":"Pozostały czas","countdown_timer_hours_title_long":"Godziny","countdown_timer_hours_title_short":"godz.","countdown_timer_minutes_title_long":"Minuty","countdown_timer_minutes_title_short":"min.","countdown_timer_seconds_title_long":"Sekundy","countdown_timer_seconds_title_short":"sek.","countdown_timer_success_title":"Sukces","milestone_marker_success_aria":"Kamień milowy osiągnięty","no_rewards_available_title":"Brak dostępnych nagród","rewards_carousel_next":"Dalej","rewards_carousel_previous":"Poprzednie"},"pt-BR":{"countdown_timer_days_title_long":"dias","countdown_timer_days_title_short":"d","countdown_timer_failure_title":"Fracasso","countdown_timer_header_pending_title":"Calculando resultados...","countdown_timer_header_title":"Tempo restante","countdown_timer_hours_title_long":"horas","countdown_timer_hours_title_short":"h","countdown_timer_minutes_title_long":"minutos","countdown_timer_minutes_title_short":"m","countdown_timer_seconds_title_long":"segundos","countdown_timer_seconds_title_short":"s","countdown_timer_success_title":"Sucesso","milestone_marker_success_aria":"Marco alcançado","no_rewards_available_title":"Nenhuma recompensa disponível","rewards_carousel_next":"Seguinte","rewards_carousel_previous":"Anterior"},"ru-RU":{"countdown_timer_days_title_long":"Дней","countdown_timer_days_title_short":"Дн.","countdown_timer_failure_title":"Провал","countdown_timer_header_pending_title":"Оценка результатов...","countdown_timer_header_title":"Осталось времени","countdown_timer_hours_title_long":"Часов","countdown_timer_hours_title_short":"Ч.","countdown_timer_minutes_title_long":"Минут","countdown_timer_minutes_title_short":"Мин.","countdown_timer_seconds_title_long":"Секунд","countdown_timer_seconds_title_short":"Сек.","countdown_timer_success_title":"Успех","milestone_marker_success_aria":"Этап пройден","no_rewards_available_title":"Нет доступных наград","rewards_carousel_next":"Далее","rewards_carousel_previous":"Назад"},"zh-CN":{"countdown_timer_days_title_long":"天","countdown_timer_days_title_short":"天","countdown_timer_failure_title":"失败","countdown_timer_header_pending_title":"正在计算结果……","countdown_timer_header_title":"剩余时间","countdown_timer_hours_title_long":"小时","countdown_timer_hours_title_short":"小时","countdown_timer_minutes_title_long":"分钟","countdown_timer_minutes_title_short":"分钟","countdown_timer_seconds_title_long":"秒","countdown_timer_seconds_title_short":"秒","countdown_timer_success_title":"成功","milestone_marker_success_aria":"已达成里程碑","no_rewards_available_title":"无可用奖励","rewards_carousel_next":"下一个","rewards_carousel_previous":"上一个"},"zh-TW":{"countdown_timer_days_title_long":"天","countdown_timer_days_title_short":"天","countdown_timer_failure_title":"失敗","countdown_timer_header_pending_title":"正在計算結果…","countdown_timer_header_title":"剩餘時間","countdown_timer_hours_title_long":"小時","countdown_timer_hours_title_short":"小時","countdown_timer_minutes_title_long":"分鐘","countdown_timer_minutes_title_short":"分鐘","countdown_timer_seconds_title_long":"秒","countdown_timer_seconds_title_short":"秒","countdown_timer_success_title":"成功","milestone_marker_success_aria":"已達成里程碑","no_rewards_available_title":"無可用獎勵","rewards_carousel_next":"下一個","rewards_carousel_previous":"上一個"}}'),
        D = (0, g.withIntl)(({
          banner: e,
          countdown: t,
          rewards: s,
          milestoneIndicator: n
        }) => (0, a.jsx)("div", {
          className: F.communityChallenges,
          children: (0, a.jsxs)("div", {
            className: F.wrapper,
            children: [e && (0, a.jsx)(r, {
              ...e
            }), (0, a.jsxs)("div", {
              className: F.content,
              children: [t?.timer && (0, a.jsx)(b, {
                ...t.timer
              }), n && (0, a.jsx)(N, {
                ...n
              }), s && (0, a.jsx)("section", {
                className: F.rewardsSection,
                children: (0, a.jsx)(L, {
                  ...s
                })
              })]
            })]
          })
        }), P)
    },
    60958(e, t, s) {
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
    13319(e, t, s) {
      s.d(t, {
        _P: () => n,
        s0: () => a
      }), Math.pow(10, 8);
      const a = 36e5,
        n = Symbol.for("constructDateFrom")
    },
    46863(e, t, s) {
      s.d(t, {
        w: () => n
      });
      var a = s(13319);

      function n(e, t) {
        return "function" == typeof e ? e(t) : e && "object" == typeof e && a._P in e ? e[a._P](t) : e instanceof Date ? new e.constructor(t) : new Date(t)
      }
    }
  }
]);