! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      s = (new Error).stack;
    s && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[s] = "c1dc642a-f884-4dd1-94d7-008e6a6da4d4", e._sentryDebugIdIdentifier = "sentry-dbid-c1dc642a-f884-4dd1-94d7-008e6a6da4d4")
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
  [7327], {
    5772: (e, s, a) => {
      a.r(s), a.d(s, {
        default: () => R
      });
      var t = a(24036),
        n = a.n(t),
        c = a(92440),
        r = a(13916);
      var d = a(98096);
      const i = e => {
        let {
          backgroundImage: s,
          image: a,
          logoHorizontalPosition: t,
          logoVerticalPosition: i,
          enableOverlay: l = !1,
          overlayBackground: o = "rgba(0,0,0,0.25)"
        } = e;
        const g = (0, r.S1)(a ?? {}),
          m = (0, c.useGetCdnSource)(s?.mobile ?? null),
          u = (0, c.useGetCdnSource)(s?.desktop ?? m),
          f = g?.src?.mobile,
          b = g?.src?.desktop ?? f;
        return (0, d.jsx)("div", {
          className: n()("rockstargames-sites-gta-gen9dd3eed68318843fe25f147a11901017e", l ? "rockstargames-sites-gta-gen9d1ac49cbb3da8269c13f1ccc1b515fb4" : ""),
          style: {
            "--overlay-background-color": o
          },
          children: (0, d.jsx)("div", {
            className: "rockstargames-sites-gta-gen9b5e649bc428f66ddfa8db02936f5b69d",
            style: {
              "--background-image-mobile": `url(${m})`,
              "--background-image-desktop": `url(${u})`,
              "--logo-justify-position": t ?? "normal",
              "--logo-align-position": i ?? "normal"
            },
            children: b && (0, d.jsx)("img", {
              src: b,
              className: "rockstargames-sites-gta-gen9dab7157848250d13aea143ea8b7fae16",
              alt: g?.alt ?? ""
            })
          })
        })
      };
      var l = a(62229),
        o = a(26089),
        g = a(95966),
        m = a(81788);
      const u = (0, m.defineMessages)({
          countdown_timer_header_title: {
            id: "countdown_timer_header_title",
            defaultMessage: "Time Remaining"
          },
          countdown_timer_header_pending_title: {
            id: "countdown_timer_header_pending_title",
            defaultMessage: "Calculating Results..."
          },
          countdown_timer_days_title_long: {
            id: "countdown_timer_days_title_long",
            defaultMessage: "Days"
          },
          countdown_timer_hours_title_long: {
            id: "countdown_timer_hours_title_long",
            defaultMessage: "Hours"
          },
          countdown_timer_minutes_title_long: {
            id: "countdown_timer_minutes_title_long",
            defaultMessage: "Minutes"
          },
          countdown_timer_seconds_title_long: {
            id: "countdown_timer_seconds_title_long",
            defaultMessage: "Seconds"
          },
          countdown_timer_days_title_short: {
            id: "countdown_timer_days_title_short",
            defaultMessage: "D"
          },
          countdown_timer_hours_title_short: {
            id: "countdown_timer_hours_title_short",
            defaultMessage: "H"
          },
          countdown_timer_minutes_title_short: {
            id: "countdown_timer_minutes_title_short",
            defaultMessage: "M"
          },
          countdown_timer_seconds_title_short: {
            id: "countdown_timer_seconds_title_short",
            defaultMessage: "S"
          },
          countdown_timer_success_title: {
            id: "countdown_timer_success_title",
            defaultMessage: "Success"
          },
          countdown_timer_failure_title: {
            id: "countdown_timer_failure_title",
            defaultMessage: "Failure"
          }
        }),
        f = {
          pillBtn: "rockstargames-sites-gta-gen9df86d9e7034d0c18169eb37da1a92a19",
          selected: "rockstargames-sites-gta-gen9c0b2094d0e834c542f0d5aeda45d8fe8",
          countdownContainer: "rockstargames-sites-gta-gen9c383d665f5c3b266cdb191ceba0489eb",
          countdownHeader: "rockstargames-sites-gta-gen9af4f1876dc568b373e66363449a4238b",
          pendingResults: "rockstargames-sites-gta-gen9e2dec301204f8ebc6324d2bcebb0d5b1",
          countDownTimer: "rockstargames-sites-gta-gen9b33d322809ec0b09aef851e6dca73b11",
          countdownBlock: "rockstargames-sites-gta-gen9e0fd6be5b6c035a755dcccc738b8ae79",
          counter: "rockstargames-sites-gta-gen9db9851183ab6187e0a5b811dc868935e",
          countdownLabel: "rockstargames-sites-gta-gen9a5a92f35bc1b4a4dda2ba9cadb782fb9",
          container: "rockstargames-sites-gta-gen9a75315a80b4a2127779c1d0656a37dcb",
          accentImage: "rockstargames-sites-gta-gen9c7cc81d743042cdf8330175fbdc237c8",
          failureLabel: "rockstargames-sites-gta-gen9e04fcb94de64602e9bc436cf6f2e2c66",
          successLabel: "rockstargames-sites-gta-gen9d0a5db0538a803db976bde1b24a12b01",
          textGlow: "rockstargames-sites-gta-gen9c68be925ad17db7ea5e2493bd07891bf",
          glow: "rockstargames-sites-gta-gen9c3d444564997451d6a645f7c8a74329a"
        },
        b = e => {
          let {
            targetDate: s,
            status: a = "active",
            theme: t,
            includeSeconds: r = !1,
            showBackground: i,
            backgroundColor: b,
            successBgImages: _,
            failureBgImages: x
          } = e;
          const {
            isMobile: h
          } = (0, g.useWindowResize)(), [w, k] = (0, l.useState)(!1), j = (0, c.useGetCdnSource)(_?.imageLeft?.mobile ?? null), p = (0, c.useGetCdnSource)(_?.imageLeft?.desktop ?? j), v = (0, c.useGetCdnSource)(_?.imageRight?.mobile ?? null), N = (0, c.useGetCdnSource)(_?.imageRight?.desktop ?? v), M = (0, c.useGetCdnSource)(x?.imageLeft?.mobile ?? null), y = (0, c.useGetCdnSource)(x?.imageLeft?.desktop ?? M), S = (0, c.useGetCdnSource)(x?.imageRight?.mobile ?? null), C = (0, c.useGetCdnSource)(x?.imageRight?.desktop ?? S), B = (0, l.useCallback)(((e, s) => {
            const a = new Date,
              t = (0, o.O)(e, a);
            return t <= 0 ? (k(!0), {
              days: "00",
              hours: "00",
              minutes: "00",
              seconds: "00"
            }) : {
              days: String(Math.floor(t / 86400)).padStart(2, "0"),
              hours: String(Math.floor(t % 86400 / 3600)).padStart(2, "0"),
              minutes: String(Math.floor(t % 3600 / 60)).padStart(2, "0"),
              seconds: s ? String(Math.floor(t % 60)).padStart(2, "0") : "00"
            }
          }), []), [I, G] = (0, l.useState)((() => B(s, r)));
          return (0, l.useEffect)((() => {
            const e = setInterval((() => {
              G(B(s, r))
            }), r ? 1e3 : 6e4);
            return () => clearInterval(e)
          }), [s, r, B]), (0, d.jsxs)("div", {
            className: n()(f.countdownContainer, a),
            style: {
              "--counter-text-color": t?.enableTextGradient ? "transparent" : t?.textColor,
              "--counter-text-stroke-color": t?.enableTextStroke ? t?.textStrokeColor : "unset",
              "--counter-text-stroke-width": t?.enableTextStroke ? t?.textStrokeWidth : "unset",
              "--counter-text-shadow": t?.enableTextShadow ? t.textShadow : "unset",
              "--counter-text-gradient": t?.enableTextGradient ? t.textGradient : "none",
              "--counter-background-color": i ? b : "none",
              "--counter-orientation": "vertical" === t?.counterOrientation ? "column" : "row"
            },
            children: ["active" === a && (0, d.jsxs)(d.Fragment, {
              children: [(0, d.jsx)("h1", {
                className: f.countdownHeader,
                children: (0, d.jsx)(m.FormattedMessage, {
                  ...u.countdown_timer_header_title
                })
              }), "active" === a && w && (0, d.jsx)("div", {
                "data-testid": "pendingResults",
                className: f.pendingResults,
                children: (0, d.jsx)("p", {
                  children: (0, d.jsx)(m.FormattedMessage, {
                    ...u.countdown_timer_header_pending_title
                  })
                })
              }), (0, d.jsxs)("ul", {
                "data-testid": "countdownTimer",
                className: n()(f.countDownTimer),
                children: [(0, d.jsx)("li", {
                  children: (0, d.jsxs)("div", {
                    className: f.countdownBlock,
                    children: [(0, d.jsx)("span", {
                      className: n()(f.counter, t?.textGlow ? f.textGlow : ""),
                      children: I.days
                    }), (0, d.jsx)("div", {
                      className: f.countdownLabel,
                      children: h ? (0, d.jsx)(m.FormattedMessage, {
                        ...u.countdown_timer_days_title_short
                      }) : (0, d.jsx)(m.FormattedMessage, {
                        ...u.countdown_timer_days_title_long
                      })
                    })]
                  })
                }), (0, d.jsx)("li", {
                  children: (0, d.jsxs)("div", {
                    className: f.countdownBlock,
                    children: [(0, d.jsx)("span", {
                      className: n()(f.counter, t?.textGlow ? f.textGlow : ""),
                      children: I.hours
                    }), (0, d.jsx)("div", {
                      className: f.countdownLabel,
                      children: h ? (0, d.jsx)(m.FormattedMessage, {
                        ...u.countdown_timer_hours_title_short
                      }) : (0, d.jsx)(m.FormattedMessage, {
                        ...u.countdown_timer_hours_title_long
                      })
                    })]
                  })
                }), (0, d.jsx)("li", {
                  children: (0, d.jsxs)("div", {
                    className: f.countdownBlock,
                    children: [(0, d.jsx)("span", {
                      className: n()(f.counter, t?.textGlow ? f.textGlow : ""),
                      children: I.minutes
                    }), (0, d.jsx)("div", {
                      className: f.countdownLabel,
                      children: h ? (0, d.jsx)(m.FormattedMessage, {
                        ...u.countdown_timer_minutes_title_short
                      }) : (0, d.jsx)(m.FormattedMessage, {
                        ...u.countdown_timer_minutes_title_long
                      })
                    })]
                  })
                }), r && (0, d.jsx)("li", {
                  children: (0, d.jsxs)("div", {
                    className: n()(f.countdownBlock, f.secondsCounter),
                    children: [(0, d.jsx)("span", {
                      className: n()(f.counter, t?.textGlow ? f.textGlow : ""),
                      children: I.seconds
                    }), (0, d.jsx)("div", {
                      className: f.countdownLabel,
                      children: h ? (0, d.jsx)(m.FormattedMessage, {
                        ...u.countdown_timer_seconds_title_short
                      }) : (0, d.jsx)(m.FormattedMessage, {
                        ...u.countdown_timer_seconds_title_long
                      })
                    })]
                  })
                })]
              })]
            }), "success" === a && (0, d.jsxs)("div", {
              className: f.container,
              style: {
                display: "flex",
                alignItems: "center"
              },
              children: [p && (0, d.jsx)("img", {
                className: f.accentImage,
                src: p,
                alt: _?.imageLeft?.altText
              }), (0, d.jsx)("div", {
                "data-testid": "successMessage",
                className: f.successLabel,
                children: (0, d.jsx)(m.FormattedMessage, {
                  ...u.countdown_timer_success_title
                })
              }), N && (0, d.jsx)("img", {
                className: f.accentImage,
                src: N,
                alt: _?.imageRight?.altText
              })]
            }), "failure" === a && (0, d.jsxs)("div", {
              className: f.container,
              style: {
                display: "flex",
                alignItems: "center"
              },
              children: [y && (0, d.jsx)("img", {
                className: f.accentImage,
                src: y,
                alt: x?.imageLeft?.altText
              }), (0, d.jsx)("div", {
                "data-testid": "failureMessage",
                className: f.failureLabel,
                children: (0, d.jsx)(m.FormattedMessage, {
                  ...u.countdown_timer_failure_title
                })
              }), C && (0, d.jsx)("img", {
                className: f.accentImage,
                src: C,
                alt: x?.imageRight?.altText
              })]
            })]
          })
        };
      var _ = a(29866),
        x = a(86082);
      const h = e => {
          let {
            milestones: s,
            incompleteImage: a,
            completedImage: t
          } = e;
          const n = (s.findLastIndex((e => e.active)) + 1) / s.length,
            r = 100 / n;
          return (0, d.jsxs)("div", {
            className: "rockstargames-sites-gta-gen9db9153ad1fcdaae879f0cebf75ad5f67",
            children: [(0, d.jsx)("div", {
              className: "rockstargames-sites-gta-gen9df5cc11b5bcabefeb20bc0f9747ebc07",
              style: {
                backgroundImage: `url(${(0,c.useGetCdnSource)(a)})`
              },
              "data-testid": "incompleteImage"
            }), (0, d.jsx)("div", {
              className: "rockstargames-sites-gta-gen9eeebadb0565e0016deb8d8f50394c921",
              style: {
                backgroundImage: `url(${(0,c.useGetCdnSource)(t)})`,
                backgroundSize: `${r}%`,
                width: 100 * n + "%"
              },
              "data-testid": "completedImage"
            }), s.map(((e, a) => (0, d.jsx)("div", {
              className: (0, g.classList)("rockstargames-sites-gta-gen9faa53fa77749f0a05f711222185919e1", 0 === a ? "rockstargames-sites-gta-gen9fa6e2e8d17c632ef7af31fdfa3511bf4" : "", a === s.length - 1 ? "rockstargames-sites-gta-gen9b39f693a40f75244b1c104b8d83064e5" : ""),
              "data-testid": "milestoneBox",
              children: (0, d.jsx)("div", {
                className: "rockstargames-sites-gta-gen9b1177fbd4e3bcda4051638d86044b957"
              })
            }, a)))]
          })
        },
        w = (0, m.defineMessages)({
          milestone_marker_success_aria: {
            id: "milestone_marker_success_aria",
            defaultMessage: "Milestone achieved"
          }
        }),
        k = e => {
          let {
            title: s,
            date: a,
            active: t,
            final: c
          } = e;
          const r = (0, m.useIntl)(),
            i = t ? "rockstargames-sites-gta-gen9a237ddf12d1e317c6389b99dab0ebaaf" : "",
            l = c ? "rockstargames-sites-gta-gen9cf16fb2f605281b22e08858bd0b10be8" : "";
          return (0, d.jsx)("div", {
            className: "rockstargames-sites-gta-gen9ea109f400f7e49404883a62664e5c4f9",
            children: (0, d.jsxs)("div", {
              className: n()("rockstargames-sites-gta-gen9a4776cf49ea083284f9d403b204c9b78", i, l),
              children: [(0, d.jsxs)("div", {
                className: "rockstargames-sites-gta-gen9fe16bcb2866e77749008c06e96e776c2",
                children: [(0, d.jsx)("h4", {
                  children: s
                }), t && (0, d.jsx)(_.Jl, {
                  label: r.formatMessage(w.milestone_marker_success_aria),
                  className: "rockstargames-sites-gta-gen9d3b0319ef5d65d06d7e7fbe51cdc50c2",
                  testId: "checkmark"
                })]
              }), a && (0, d.jsx)("p", {
                className: "rockstargames-sites-gta-gen9f60607590769030728c7c9c3ea4fa883",
                children: r.formatDate(a, {
                  month: "short",
                  day: "numeric"
                })
              })]
            })
          })
        },
        j = e => {
          let {
            alt: s = "",
            className: a = "",
            fill: t = "#E0330E"
          } = e;
          return (0, d.jsxs)("svg", {
            className: a,
            version: "1.1",
            width: "15",
            height: "11",
            viewBox: "0 0 15 11",
            xmlns: "http://www.w3.org/2000/svg",
            children: [(0, d.jsx)("title", {
              children: s
            }), (0, d.jsx)("path", {
              d: "M7.5 10.5166L0.138783 0.0166029L14.8612 0.0166017L7.5 10.5166Z",
              fill: t
            })]
          })
        },
        p = {
          pillBtn: "rockstargames-sites-gta-gen9ebc4e231a51238d29d0da502c76f23af",
          selected: "rockstargames-sites-gta-gen9b04a37e9b4523cd2a2628caa89e8e528",
          milestoneHeading: "rockstargames-sites-gta-gen9f02d923d7ef81a5816b78333bee9bfed",
          milestoneTitle: "rockstargames-sites-gta-gen9b192823eeef7fdd1f705b53709557681",
          milestoneGoal: "rockstargames-sites-gta-gen9c9ad62964ed8042657279d9d5377a47e",
          milestoneScroll: "rockstargames-sites-gta-gen9e8a44929efe1e0c9f7d362ffdece627b",
          milestoneGroup: "rockstargames-sites-gta-gen9a5f5de9a7b0a3e41830f238970d1da21",
          milestoneFlags: "rockstargames-sites-gta-gen9e6a44f2f6ba92288d38d5986f4ce5f05",
          milestoneMarkers: "rockstargames-sites-gta-gen9afc78b3a561d73d7cdd269dfecc370ef",
          milestoneFlag: "rockstargames-sites-gta-gen9e539ff2b75992a174908cc993833ae90"
        },
        v = e => {
          let {
            heading: s,
            completedMilestoneImage: a,
            incompleteMilestoneImage: t,
            milestones: n,
            initialTitle: c,
            initialDate: r
          } = e;
          const i = (0, l.useRef)(null),
            o = (0, l.useRef)(null),
            [g, m] = (0, l.useState)(!1),
            {
              isMobile: u
            } = (0, x.G4)();
          if ((0, x.T0)(i), (0, l.useEffect)((() => {
              u && i.current && o.current && (i.current.scrollLeft = o.current.getBoundingClientRect().left - window.innerWidth / 2, i.current.addEventListener("scroll", (e => {
                const s = e.target;
                s && Math.ceil(s.scrollLeft + s.clientWidth) >= s.scrollWidth ? m(!0) : m(!1)
              })))
            }), [u]), !n || 0 === n.length) return null;
          const f = n.findLastIndex((e => e.active)),
            b = n[n.length - 1].title;
          return (0, d.jsxs)("section", {
            className: p.milestoneIndicators,
            children: [(0, d.jsxs)("div", {
              className: p.milestoneHeading,
              children: [(0, d.jsx)("h3", {
                className: p.milestoneTitle,
                children: s
              }), !g && (0, d.jsxs)("div", {
                className: p.milestoneGoal,
                "data-testid": "milestone-goal",
                children: [b, (0, d.jsx)(_.Qp, {
                  label: "",
                  size: "MD"
                })]
              })]
            }), (0, d.jsx)("div", {
              className: p.milestoneScroll,
              ref: i,
              children: (0, d.jsxs)("div", {
                className: p.milestoneGroup,
                children: [(0, d.jsxs)("div", {
                  className: p.milestoneFlags,
                  children: [-1 === f ? (0, d.jsx)("div", {
                    ref: o,
                    className: p.milestoneFlag,
                    "data-testid": "marker",
                    children: (0, d.jsx)(j, {})
                  }) : (0, d.jsx)("div", {
                    className: p.milestoneFlag
                  }), n.map(((e, s) => s === f ? (0, d.jsx)("div", {
                    ref: o,
                    className: p.milestoneFlag,
                    "data-testid": "marker",
                    children: (0, d.jsx)(j, {})
                  }, s) : (0, d.jsx)("div", {
                    className: p.milestoneFlag
                  }, s)))]
                }), (0, d.jsx)(h, {
                  milestones: n,
                  incompleteImage: t,
                  completedImage: a
                }), (0, d.jsxs)("div", {
                  className: p.milestoneMarkers,
                  children: [(0, d.jsx)(k, {
                    title: c,
                    date: r,
                    active: !0
                  }), n.map(((e, s) => (0, d.jsx)(k, {
                    title: e.title,
                    date: e.date,
                    active: e.active,
                    final: s === n.length - 1
                  }, s)))]
                })]
              })
            })]
          })
        };
      var N = a(7545),
        M = a(24162),
        y = a(2918);
      const S = (0, m.defineMessages)({
        no_rewards_available_title: {
          id: "no_rewards_available_title",
          defaultMessage: "No rewards available"
        },
        rewards_carousel_previous: {
          id: "rewards_carousel_previous",
          defaultMessage: "Previous"
        },
        rewards_carousel_next: {
          id: "rewards_carousel_next",
          defaultMessage: "Next"
        }
      });
      var C = a(14818);
      const B = e => {
          let {
            heading: s,
            description: a,
            ctaText: t,
            ctaLink: n
          } = e;
          const {
            track: c
          } = (0, y.useGtmTrack)();
          return (0, d.jsxs)("div", {
            className: "rockstargames-sites-gta-gen9c4cf0ba33588235c64debc11db928235",
            children: [s && (0, d.jsx)("h1", {
              className: "rockstargames-sites-gta-gen9cb4ee19aff83d215fef2225f96d83b6b",
              children: s
            }), (0, d.jsxs)("div", {
              className: "rockstargames-sites-gta-gen9aab3e05951ac3213b454f7eb3fad51ec",
              children: [a && (0, d.jsx)("p", {
                className: "rockstargames-sites-gta-gen9a84f1187295a03fc3589a99cb998488e",
                children: a
              }), t && (0, d.jsx)(C.A, {
                className: "rockstargames-sites-gta-gen9ae32e8cef2d804e10a42e71b2cc21178",
                text: t,
                to: n,
                onClick: () => c({
                  event: "cta_learn",
                  element_placement: "community challenge cta",
                  link_url: n,
                  text: t?.toLowerCase()
                })
              })]
            })]
          })
        },
        I = e => {
          let {
            title: s,
            subTitle: a,
            rewardsBgImage: t
          } = e;
          const n = (0, c.useGetCdnSource)(t?.mobile ?? null),
            r = (0, c.useGetCdnSource)(t?.desktop ?? n);
          return (0, d.jsx)("div", {
            className: "rockstargames-sites-gta-gen9b2b3a24de3089dd7ee6d7f8761856ec7",
            style: {
              "--rewards-background-image": `url(${r})`
            },
            children: (0, d.jsxs)("div", {
              className: "rockstargames-sites-gta-gen9d8be908607e3f417a121c4f517eabb8a",
              children: [(0, d.jsx)("div", {
                className: "rockstargames-sites-gta-gen9d285d31afa0ea914d77450534007eac1",
                children: a
              }), (0, d.jsx)("div", {
                className: "rockstargames-sites-gta-gen9f5b76a553164a72970797171c62d4cee",
                children: s
              })]
            })
          })
        },
        G = {
          pillBtn: "rockstargames-sites-gta-gen9edff349918119db50cbffaffc9b1ba1b",
          selected: "rockstargames-sites-gta-gen9c9f8fb57a3f3eb56b7cba86102b43710",
          rewardsWrapper: "rockstargames-sites-gta-gen9b3747a28c2a053e6e1362ac3c8ea7d45",
          rewardPanel: "rockstargames-sites-gta-gen9aed1683fb6745e40f5f6dad85f78495d",
          leftColumn: "rockstargames-sites-gta-gen9c50f481110cd058d98a7cba076dce1d9",
          rightColumn: "rockstargames-sites-gta-gen9d4c1df6801986642b147b49eebfa62fa",
          noRewardsAvailable: "rockstargames-sites-gta-gen9fa90b4db18401a13c12bc6318fc904fa",
          titleHeading: "rockstargames-sites-gta-gen9d819c49ab450182c509e6c373f1e405f",
          navControl: "rockstargames-sites-gta-gen9c172cadbafd0b3109750a2288b5b2739",
          btnArea: "rockstargames-sites-gta-gen9ec2f4f73ee41d2c305de300fe2a1067c",
          nextBtn: "rockstargames-sites-gta-gen9fce09b6c7a9b72ebfe18b5c063345dfd",
          prevBtn: "rockstargames-sites-gta-gen9d6923e3577aef4f61913c9e70d0402e9",
          disabled: "rockstargames-sites-gta-gen9e8928322f161c546fe04da38db46b921",
          "swiper-preloader-spin": "rockstargames-sites-gta-gen9b69ff206cfb10a6b2701490c988d9582"
        },
        L = e => {
          let {
            deck: s,
            detail: a
          } = e;
          const {
            isMobile: t
          } = (0, g.useWindowResize)(), n = (0, m.useIntl)(), c = (0, l.useRef)(null), r = (0, l.useRef)(null), i = (0, l.useRef)(null), o = (0, l.useRef)(), [u, f] = (0, l.useState)(!1), [b, _] = (0, l.useState)(), [x, h] = (0, l.useState)(!1), [w, k] = (0, l.useState)(!1), {
            track: j
          } = (0, y.useGtmTrack)(), p = o?.current?.swiper, v = s?.heading, C = s?.cards;
          (0, l.useEffect)((() => {
            if (p && "number" == typeof p?.params?.slidesPerView) {
              const e = p.slides?.length;
              f(e > p.params.slidesPerView)
            }
          }), [C, p?.params.slidesPerView]), (0, l.useEffect)((() => {
            _({
              nextEl: r.current,
              prevEl: c.current
            })
          }), [r, c]);
          const L = () => {
              p?.slidePrev(300, !1), j({
                event: "carousel_prev",
                element_placement: "community challenge rewards"
              })
            },
            T = () => {
              p?.slideNext(300, !1), j({
                event: "carousel_next",
                element_placement: "community challenge rewards"
              })
            },
            R = e => {
              if ("Tab" === e.key && !e.shiftKey) {
                const s = p?.slides[p?.activeIndex].querySelector('a, button, [role="button"]');
                s && s?.tabIndex > -1 && (e.preventDefault(), s.focus())
              }
            };
          return (0, d.jsxs)("div", {
            className: G.rewardPanel,
            children: [(0, d.jsx)("div", {
              className: G.leftColumn,
              children: (0, d.jsx)(B, {
                ...a
              })
            }), (0, d.jsx)("div", {
              ref: i,
              className: G.rightColumn,
              children: C?.length ? (0, d.jsxs)(d.Fragment, {
                children: [(0, d.jsxs)("div", {
                  className: G.navControl,
                  children: [(0, d.jsx)("h1", {
                    className: G.titleHeading,
                    children: v
                  }), !t && u && (0, d.jsxs)("div", {
                    className: G.btnArea,
                    children: [(0, d.jsx)("button", {
                      "data-testid": "prevBtn",
                      ref: c,
                      className: (0, g.classList)(G.prevBtn, x ? G.disabled : ""),
                      onClick: L,
                      "aria-label": n.formatMessage(S.rewards_carousel_previous),
                      type: "button",
                      disabled: x
                    }), (0, d.jsx)("button", {
                      "data-testid": "nextBtn",
                      ref: r,
                      className: (0, g.classList)(G.nextBtn, w ? G.disabled : ""),
                      onClick: T,
                      onKeyDown: R,
                      "aria-label": n.formatMessage(S.rewards_carousel_next),
                      type: "button",
                      disabled: w
                    })]
                  })]
                }), (0, d.jsxs)(M.RC, {
                  slidesPerView: 1.25,
                  ref: o,
                  onSlideChange: e => {
                    h(e.isBeginning), k(e.isEnd)
                  },
                  onSlidesUpdated: e => {
                    h(e.isBeginning), k(e.isEnd)
                  },
                  modules: [N.Vx],
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
                  navigation: b,
                  slideClass: "swiper-slide",
                  onSlideChangeTransitionEnd: () => {
                    j({
                      event: "carousel_swipe",
                      element_placement: "community challenge rewards"
                    })
                  },
                  children: [t && (0, d.jsxs)("div", {
                    className: G.btnArea,
                    children: [(0, d.jsx)("button", {
                      "data-testid": "prevBtn",
                      ref: c,
                      className: (0, g.classList)(G.prevBtn, x ? G.disabled : ""),
                      onClick: L,
                      "aria-label": n.formatMessage(S.rewards_carousel_previous),
                      type: "button",
                      disabled: x
                    }), (0, d.jsx)("button", {
                      "data-testid": "nextBtn",
                      ref: r,
                      className: (0, g.classList)(G.nextBtn, w ? G.disabled : ""),
                      onClick: T,
                      onKeyDown: R,
                      "aria-label": n.formatMessage(S.rewards_carousel_next),
                      type: "button",
                      disabled: w
                    })]
                  }), C.map(((e, s) => {
                    const a = e?.title,
                      t = e?.subTitle,
                      n = e?.rewardsBgImage;
                    return (0, d.jsx)(M.qr, {
                      className: G.slide,
                      onFocus: () => (e => {
                        p?.slideTo(e)
                      })(s),
                      children: (0, d.jsx)(I, {
                        title: a,
                        subTitle: t,
                        rewardsBgImage: n
                      })
                    }, s)
                  }))]
                })]
              }) : (0, d.jsx)("div", {
                className: G.noRewardsAvailable,
                children: (0, d.jsx)(m.FormattedMessage, {
                  ...S.no_rewards_available_title
                })
              })
            })]
          })
        },
        T = {
          pillBtn: "rockstargames-sites-gta-gen9c60c1ea7626c520b2211fa5f0b18061b",
          selected: "rockstargames-sites-gta-gen9b58652ec7e005a714810a11cc4b2bb7f",
          communityChallenges: "rockstargames-sites-gta-gen9dc0abf139506d2de9a4ec791e49331ef",
          wrapper: "rockstargames-sites-gta-gen9e3332f7d8fb8c01ce3af42b2fd4aebed",
          communityChallengeInfoPanel: "rockstargames-sites-gta-gen9df615cfc52fdd4ced7efec100c0504c6",
          content: "rockstargames-sites-gta-gen9b3af9e460a0d8d3aafdf3f71d795c94d"
        },
        R = e => {
          let {
            banner: s,
            countdown: a,
            rewards: t,
            milestoneIndicator: n
          } = e;
          return (0, d.jsx)("div", {
            className: T.communityChallenges,
            children: (0, d.jsxs)("div", {
              className: T.wrapper,
              children: [s && (0, d.jsx)(i, {
                ...s
              }), (0, d.jsxs)("div", {
                className: T.content,
                children: [a?.timer && (0, d.jsx)(b, {
                  ...a.timer
                }), n && (0, d.jsx)(v, {
                  ...n
                }), t && (0, d.jsx)("section", {
                  className: T.rewardsSection,
                  children: (0, d.jsx)(L, {
                    ...t
                  })
                })]
              })]
            })
          })
        }
    }
  }
]);