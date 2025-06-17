! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
      t = (new e.Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "b348375a-a68f-4ee1-a90f-4207551507f6", e._sentryDebugIdIdentifier = "sentry-dbid-b348375a-a68f-4ee1-a90f-4207551507f6")
  } catch (e) {}
}();
var _sentryModuleMetadataGlobal = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
_sentryModuleMetadataGlobal._sentryModuleMetadata = _sentryModuleMetadataGlobal._sentryModuleMetadata || {}, _sentryModuleMetadataGlobal._sentryModuleMetadata[(new _sentryModuleMetadataGlobal.Error).stack] = Object.assign({}, _sentryModuleMetadataGlobal._sentryModuleMetadata[(new _sentryModuleMetadataGlobal.Error).stack], {
  release: "sentry-release-id",
  packageName: "@rockstargames/sites-gta-gen9",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
});
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_gta_gen9 = self.webpackChunk_rockstargames_sites_gta_gen9 || []).push([
  [1085, 3466], {
    6565: (e, t, s) => {
      s.r(t), s.d(t, {
        default: () => E
      });
      var a = s(24036),
        n = s.n(a),
        r = s(92440),
        c = s(38558);
      var i = s(25854);
      const l = e => {
        let {
          backgroundImage: t,
          image: s,
          logoHorizontalPosition: a,
          logoVerticalPosition: l,
          enableOverlay: o = !1,
          overlayBackground: d = "rgba(0,0,0,0.25)"
        } = e;
        const g = (0, c.S1)(s ?? {}),
          m = (0, r.useGetCdnSource)(t?.mobile ?? null),
          u = (0, r.useGetCdnSource)(t?.desktop ?? m),
          b = g?.src?.mobile,
          f = g?.src?.desktop ?? b;
        return (0, i.jsx)("div", {
          className: n()("rockstargames-sites-gta-gen9dd3eed68318843fe25f147a11901017e", o ? "rockstargames-sites-gta-gen9d1ac49cbb3da8269c13f1ccc1b515fb4" : ""),
          style: {
            "--overlay-background-color": d
          },
          children: (0, i.jsx)("div", {
            className: "rockstargames-sites-gta-gen9b5e649bc428f66ddfa8db02936f5b69d",
            style: {
              "--background-image-mobile": `url(${m})`,
              "--background-image-desktop": `url(${u})`,
              "--logo-justify-position": a ?? "normal",
              "--logo-align-position": l ?? "normal"
            },
            children: f && (0, i.jsx)("img", {
              src: f,
              className: "rockstargames-sites-gta-gen9dab7157848250d13aea143ea8b7fae16",
              alt: g?.alt ?? ""
            })
          })
        })
      };
      var o = s(62229),
        d = s(78170),
        g = s(74523);

      function m(e, t) {
        return (0, g.w)(t || e, e)
      }

      function u(e, t, s) {
        const a = function(e, t) {
          return +m(e) - +m(t)
        }(e, t) / 1e3;
        return (0, d.u)(s?.roundingMethod)(a)
      }
      var b = s(95966),
        f = s(81788);
      const _ = (0, f.defineMessages)({
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
        h = {
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
        x = e => {
          let {
            targetDate: t,
            status: s = "active",
            theme: a,
            includeSeconds: c = !1,
            showBackground: l,
            backgroundColor: d,
            successBgImages: g,
            failureBgImages: m
          } = e;
          const {
            isMobile: x
          } = (0, b.useWindowResize)(), [w, k] = (0, o.useState)(!1), p = (0, r.useGetCdnSource)(g?.imageLeft?.mobile ?? null), v = (0, r.useGetCdnSource)(g?.imageLeft?.desktop ?? p), j = (0, r.useGetCdnSource)(g?.imageRight?.mobile ?? null), N = (0, r.useGetCdnSource)(g?.imageRight?.desktop ?? j), y = (0, r.useGetCdnSource)(m?.imageLeft?.mobile ?? null), M = (0, r.useGetCdnSource)(m?.imageLeft?.desktop ?? y), C = (0, r.useGetCdnSource)(m?.imageRight?.mobile ?? null), S = (0, r.useGetCdnSource)(m?.imageRight?.desktop ?? C), B = (0, o.useCallback)(((e, t) => {
            const s = u(e, new Date);
            return s <= 0 ? (k(!0), {
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
          }), []), [I, L] = (0, o.useState)((() => B(t, c)));
          return (0, o.useEffect)((() => {
            const e = setInterval((() => {
              L(B(t, c))
            }), c ? 1e3 : 6e4);
            return () => clearInterval(e)
          }), [t, c, B]), (0, i.jsxs)("div", {
            className: n()(h.countdownContainer, s),
            style: {
              "--counter-text-color": a?.enableTextGradient ? "transparent" : a?.textColor,
              "--counter-text-stroke-color": a?.enableTextStroke ? a?.textStrokeColor : "unset",
              "--counter-text-stroke-width": a?.enableTextStroke ? a?.textStrokeWidth : "unset",
              "--counter-text-shadow": a?.enableTextShadow ? a.textShadow : "unset",
              "--counter-text-gradient": a?.enableTextGradient ? a.textGradient : "none",
              "--counter-background-color": l ? d : "none",
              "--counter-orientation": "vertical" === a?.counterOrientation ? "column" : "row"
            },
            children: ["active" === s && (0, i.jsxs)(i.Fragment, {
              children: [(0, i.jsx)("h1", {
                className: h.countdownHeader,
                children: (0, i.jsx)(f.FormattedMessage, {
                  ..._.countdown_timer_header_title
                })
              }), "active" === s && w && (0, i.jsx)("div", {
                "data-testid": "pendingResults",
                className: h.pendingResults,
                children: (0, i.jsx)("p", {
                  children: (0, i.jsx)(f.FormattedMessage, {
                    ..._.countdown_timer_header_pending_title
                  })
                })
              }), (0, i.jsxs)("ul", {
                "data-testid": "countdownTimer",
                className: n()(h.countDownTimer),
                children: [(0, i.jsx)("li", {
                  children: (0, i.jsxs)("div", {
                    className: h.countdownBlock,
                    children: [(0, i.jsx)("span", {
                      className: n()(h.counter, a?.textGlow ? h.textGlow : ""),
                      children: I.days
                    }), (0, i.jsx)("div", {
                      className: h.countdownLabel,
                      children: x ? (0, i.jsx)(f.FormattedMessage, {
                        ..._.countdown_timer_days_title_short
                      }) : (0, i.jsx)(f.FormattedMessage, {
                        ..._.countdown_timer_days_title_long
                      })
                    })]
                  })
                }), (0, i.jsx)("li", {
                  children: (0, i.jsxs)("div", {
                    className: h.countdownBlock,
                    children: [(0, i.jsx)("span", {
                      className: n()(h.counter, a?.textGlow ? h.textGlow : ""),
                      children: I.hours
                    }), (0, i.jsx)("div", {
                      className: h.countdownLabel,
                      children: x ? (0, i.jsx)(f.FormattedMessage, {
                        ..._.countdown_timer_hours_title_short
                      }) : (0, i.jsx)(f.FormattedMessage, {
                        ..._.countdown_timer_hours_title_long
                      })
                    })]
                  })
                }), (0, i.jsx)("li", {
                  children: (0, i.jsxs)("div", {
                    className: h.countdownBlock,
                    children: [(0, i.jsx)("span", {
                      className: n()(h.counter, a?.textGlow ? h.textGlow : ""),
                      children: I.minutes
                    }), (0, i.jsx)("div", {
                      className: h.countdownLabel,
                      children: x ? (0, i.jsx)(f.FormattedMessage, {
                        ..._.countdown_timer_minutes_title_short
                      }) : (0, i.jsx)(f.FormattedMessage, {
                        ..._.countdown_timer_minutes_title_long
                      })
                    })]
                  })
                }), c && (0, i.jsx)("li", {
                  children: (0, i.jsxs)("div", {
                    className: n()(h.countdownBlock, h.secondsCounter),
                    children: [(0, i.jsx)("span", {
                      className: n()(h.counter, a?.textGlow ? h.textGlow : ""),
                      children: I.seconds
                    }), (0, i.jsx)("div", {
                      className: h.countdownLabel,
                      children: x ? (0, i.jsx)(f.FormattedMessage, {
                        ..._.countdown_timer_seconds_title_short
                      }) : (0, i.jsx)(f.FormattedMessage, {
                        ..._.countdown_timer_seconds_title_long
                      })
                    })]
                  })
                })]
              })]
            }), "success" === s && (0, i.jsxs)("div", {
              className: h.container,
              style: {
                display: "flex",
                alignItems: "center"
              },
              children: [v && (0, i.jsx)("img", {
                className: h.accentImage,
                src: v,
                alt: g?.imageLeft?.altText
              }), (0, i.jsx)("div", {
                "data-testid": "successMessage",
                className: h.successLabel,
                children: (0, i.jsx)(f.FormattedMessage, {
                  ..._.countdown_timer_success_title
                })
              }), N && (0, i.jsx)("img", {
                className: h.accentImage,
                src: N,
                alt: g?.imageRight?.altText
              })]
            }), "failure" === s && (0, i.jsxs)("div", {
              className: h.container,
              style: {
                display: "flex",
                alignItems: "center"
              },
              children: [M && (0, i.jsx)("img", {
                className: h.accentImage,
                src: M,
                alt: m?.imageLeft?.altText
              }), (0, i.jsx)("div", {
                "data-testid": "failureMessage",
                className: h.failureLabel,
                children: (0, i.jsx)(f.FormattedMessage, {
                  ..._.countdown_timer_failure_title
                })
              }), S && (0, i.jsx)("img", {
                className: h.accentImage,
                src: S,
                alt: m?.imageRight?.altText
              })]
            })]
          })
        };
      var w = s(23299),
        k = s(98397);
      const p = e => {
          let {
            milestones: t,
            incompleteImage: s,
            completedImage: a
          } = e;
          const n = (t.findLastIndex((e => e.active)) + 1) / t.length,
            c = 100 / n;
          return (0, i.jsxs)("div", {
            className: "rockstargames-sites-gta-gen9db9153ad1fcdaae879f0cebf75ad5f67",
            children: [(0, i.jsx)("div", {
              className: "rockstargames-sites-gta-gen9df5cc11b5bcabefeb20bc0f9747ebc07",
              style: {
                backgroundImage: `url(${(0,r.useGetCdnSource)(s)})`
              },
              "data-testid": "incompleteImage"
            }), (0, i.jsx)("div", {
              className: "rockstargames-sites-gta-gen9eeebadb0565e0016deb8d8f50394c921",
              style: {
                backgroundImage: `url(${(0,r.useGetCdnSource)(a)})`,
                backgroundSize: `${c}%`,
                width: 100 * n + "%"
              },
              "data-testid": "completedImage"
            }), t.map(((e, s) => (0, i.jsx)("div", {
              className: (0, b.classList)("rockstargames-sites-gta-gen9faa53fa77749f0a05f711222185919e1", 0 === s ? "rockstargames-sites-gta-gen9fa6e2e8d17c632ef7af31fdfa3511bf4" : "", s === t.length - 1 ? "rockstargames-sites-gta-gen9b39f693a40f75244b1c104b8d83064e5" : ""),
              "data-testid": "milestoneBox",
              children: (0, i.jsx)("div", {
                className: "rockstargames-sites-gta-gen9b1177fbd4e3bcda4051638d86044b957"
              })
            }, s)))]
          })
        },
        v = (0, f.defineMessages)({
          milestone_marker_success_aria: {
            id: "milestone_marker_success_aria",
            defaultMessage: "Milestone achieved"
          }
        }),
        j = e => {
          let {
            title: t,
            date: s,
            active: a,
            final: r
          } = e;
          const c = (0, f.useIntl)(),
            l = a ? "rockstargames-sites-gta-gen9a237ddf12d1e317c6389b99dab0ebaaf" : "",
            o = r ? "rockstargames-sites-gta-gen9cf16fb2f605281b22e08858bd0b10be8" : "";
          return (0, i.jsx)("div", {
            className: "rockstargames-sites-gta-gen9ea109f400f7e49404883a62664e5c4f9",
            children: (0, i.jsxs)("div", {
              className: n()("rockstargames-sites-gta-gen9a4776cf49ea083284f9d403b204c9b78", l, o),
              children: [(0, i.jsxs)("div", {
                className: "rockstargames-sites-gta-gen9fe16bcb2866e77749008c06e96e776c2",
                children: [(0, i.jsx)("h4", {
                  children: t
                }), a && (0, i.jsx)(w.Check, {
                  label: c.formatMessage(v.milestone_marker_success_aria),
                  className: "rockstargames-sites-gta-gen9d3b0319ef5d65d06d7e7fbe51cdc50c2",
                  testId: "checkmark"
                })]
              }), s && (0, i.jsx)("p", {
                className: "rockstargames-sites-gta-gen9f60607590769030728c7c9c3ea4fa883",
                children: c.formatDate(s, {
                  month: "short",
                  day: "numeric"
                })
              })]
            })
          })
        },
        N = e => {
          let {
            alt: t = "",
            className: s = "",
            fill: a = "#E0330E"
          } = e;
          return (0, i.jsxs)("svg", {
            className: s,
            version: "1.1",
            width: "15",
            height: "11",
            viewBox: "0 0 15 11",
            xmlns: "http://www.w3.org/2000/svg",
            children: [(0, i.jsx)("title", {
              children: t
            }), (0, i.jsx)("path", {
              d: "M7.5 10.5166L0.138783 0.0166029L14.8612 0.0166017L7.5 10.5166Z",
              fill: a
            })]
          })
        },
        y = {
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
        M = e => {
          let {
            heading: t,
            completedMilestoneImage: s,
            incompleteMilestoneImage: a,
            milestones: n,
            initialTitle: r,
            initialDate: c
          } = e;
          const l = (0, o.useRef)(null),
            d = (0, o.useRef)(null),
            [g, m] = (0, o.useState)(!1),
            {
              isMobile: u
            } = (0, k.G4)();
          if ((0, k.T0)(l), (0, o.useEffect)((() => {
              u && l.current && d.current && (l.current.scrollLeft = d.current.getBoundingClientRect().left - window.innerWidth / 2, l.current.addEventListener("scroll", (e => {
                const t = e.target;
                t && Math.ceil(t.scrollLeft + t.clientWidth) >= t.scrollWidth ? m(!0) : m(!1)
              })))
            }), [u]), !n || 0 === n.length) return null;
          const b = n.findLastIndex((e => e.active)),
            f = n[n.length - 1].title;
          return (0, i.jsxs)("section", {
            className: y.milestoneIndicators,
            children: [(0, i.jsxs)("div", {
              className: y.milestoneHeading,
              children: [(0, i.jsx)("h3", {
                className: y.milestoneTitle,
                children: t
              }), !g && (0, i.jsxs)("div", {
                className: y.milestoneGoal,
                "data-testid": "milestone-goal",
                children: [f, (0, i.jsx)(w.ArrowRight, {
                  label: "",
                  size: "MD"
                })]
              })]
            }), (0, i.jsx)("div", {
              className: y.milestoneScroll,
              ref: l,
              children: (0, i.jsxs)("div", {
                className: y.milestoneGroup,
                children: [(0, i.jsxs)("div", {
                  className: y.milestoneFlags,
                  children: [-1 === b ? (0, i.jsx)("div", {
                    ref: d,
                    className: y.milestoneFlag,
                    "data-testid": "marker",
                    children: (0, i.jsx)(N, {})
                  }) : (0, i.jsx)("div", {
                    className: y.milestoneFlag
                  }), n.map(((e, t) => t === b ? (0, i.jsx)("div", {
                    ref: d,
                    className: y.milestoneFlag,
                    "data-testid": "marker",
                    children: (0, i.jsx)(N, {})
                  }, t) : (0, i.jsx)("div", {
                    className: y.milestoneFlag
                  }, t)))]
                }), (0, i.jsx)(p, {
                  milestones: n,
                  incompleteImage: a,
                  completedImage: s
                }), (0, i.jsxs)("div", {
                  className: y.milestoneMarkers,
                  children: [(0, i.jsx)(j, {
                    title: r,
                    date: c,
                    active: !0
                  }), n.map(((e, t) => (0, i.jsx)(j, {
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
      var C = s(52066),
        S = s(43851),
        B = s(2918);
      const I = (0, f.defineMessages)({
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
      var L = s(10619);
      const G = e => {
          let {
            heading: t,
            description: s,
            ctaText: a,
            ctaLink: n
          } = e;
          const {
            track: r
          } = (0, B.useGtmTrack)();
          return (0, i.jsxs)("div", {
            className: "rockstargames-sites-gta-gen9c4cf0ba33588235c64debc11db928235",
            children: [t && (0, i.jsx)("h1", {
              className: "rockstargames-sites-gta-gen9cb4ee19aff83d215fef2225f96d83b6b",
              children: t
            }), (0, i.jsxs)("div", {
              className: "rockstargames-sites-gta-gen9aab3e05951ac3213b454f7eb3fad51ec",
              children: [s && (0, i.jsx)("p", {
                className: "rockstargames-sites-gta-gen9a84f1187295a03fc3589a99cb998488e",
                children: s
              }), a && (0, i.jsx)(L.A, {
                className: "rockstargames-sites-gta-gen9ae32e8cef2d804e10a42e71b2cc21178",
                text: a,
                to: n,
                onClick: () => r({
                  event: "cta_learn",
                  element_placement: "community challenge cta",
                  link_url: n,
                  text: a?.toLowerCase()
                })
              })]
            })]
          })
        },
        T = e => {
          let {
            title: t,
            subTitle: s,
            rewardsBgImage: a
          } = e;
          const n = (0, r.useGetCdnSource)(a?.mobile ?? null),
            c = (0, r.useGetCdnSource)(a?.desktop ?? n);
          return (0, i.jsx)("div", {
            className: "rockstargames-sites-gta-gen9b2b3a24de3089dd7ee6d7f8761856ec7",
            style: {
              "--rewards-background-image": `url(${c})`
            },
            children: (0, i.jsxs)("div", {
              className: "rockstargames-sites-gta-gen9d8be908607e3f417a121c4f517eabb8a",
              children: [(0, i.jsx)("div", {
                className: "rockstargames-sites-gta-gen9d285d31afa0ea914d77450534007eac1",
                children: s
              }), (0, i.jsx)("div", {
                className: "rockstargames-sites-gta-gen9f5b76a553164a72970797171c62d4cee",
                children: t
              })]
            })
          })
        },
        P = {
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
        R = e => {
          let {
            deck: t,
            detail: s
          } = e;
          const {
            isMobile: a
          } = (0, b.useWindowResize)(), n = (0, f.useIntl)(), r = (0, o.useRef)(null), c = (0, o.useRef)(null), l = (0, o.useRef)(null), d = (0, o.useRef)(), [g, m] = (0, o.useState)(!1), [u, _] = (0, o.useState)(), [h, x] = (0, o.useState)(!1), [w, k] = (0, o.useState)(!1), {
            track: p
          } = (0, B.useGtmTrack)(), v = d?.current?.swiper, j = t?.heading, N = t?.cards;
          (0, o.useEffect)((() => {
            if (v && "number" == typeof v?.params?.slidesPerView) {
              const e = v.slides?.length;
              m(e > v.params.slidesPerView)
            }
          }), [N, v?.params.slidesPerView]), (0, o.useEffect)((() => {
            _({
              nextEl: c.current,
              prevEl: r.current
            })
          }), [c, r]);
          const y = () => {
              v?.slidePrev(300, !1), p({
                event: "carousel_prev",
                element_placement: "community challenge rewards"
              })
            },
            M = () => {
              v?.slideNext(300, !1), p({
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
          return (0, i.jsxs)("div", {
            className: P.rewardPanel,
            children: [(0, i.jsx)("div", {
              className: P.leftColumn,
              children: (0, i.jsx)(G, {
                ...s
              })
            }), (0, i.jsx)("div", {
              ref: l,
              className: P.rightColumn,
              children: N?.length ? (0, i.jsxs)(i.Fragment, {
                children: [(0, i.jsxs)("div", {
                  className: P.navControl,
                  children: [(0, i.jsx)("h1", {
                    className: P.titleHeading,
                    children: j
                  }), !a && g && (0, i.jsxs)("div", {
                    className: P.btnArea,
                    children: [(0, i.jsx)("button", {
                      "data-testid": "prevBtn",
                      ref: r,
                      className: (0, b.classList)(P.prevBtn, h ? P.disabled : ""),
                      onClick: y,
                      "aria-label": n.formatMessage(I.rewards_carousel_previous),
                      type: "button",
                      disabled: h
                    }), (0, i.jsx)("button", {
                      "data-testid": "nextBtn",
                      ref: c,
                      className: (0, b.classList)(P.nextBtn, w ? P.disabled : ""),
                      onClick: M,
                      onKeyDown: L,
                      "aria-label": n.formatMessage(I.rewards_carousel_next),
                      type: "button",
                      disabled: w
                    })]
                  })]
                }), (0, i.jsxs)(S.RC, {
                  slidesPerView: 1.25,
                  ref: d,
                  onSlideChange: e => {
                    x(e.isBeginning), k(e.isEnd)
                  },
                  onSlidesUpdated: e => {
                    x(e.isBeginning), k(e.isEnd)
                  },
                  modules: [C.Vx],
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
                  children: [a && (0, i.jsxs)("div", {
                    className: P.btnArea,
                    children: [(0, i.jsx)("button", {
                      "data-testid": "prevBtn",
                      ref: r,
                      className: (0, b.classList)(P.prevBtn, h ? P.disabled : ""),
                      onClick: y,
                      "aria-label": n.formatMessage(I.rewards_carousel_previous),
                      type: "button",
                      disabled: h
                    }), (0, i.jsx)("button", {
                      "data-testid": "nextBtn",
                      ref: c,
                      className: (0, b.classList)(P.nextBtn, w ? P.disabled : ""),
                      onClick: M,
                      onKeyDown: L,
                      "aria-label": n.formatMessage(I.rewards_carousel_next),
                      type: "button",
                      disabled: w
                    })]
                  }), N.map(((e, t) => {
                    const s = e?.title,
                      a = e?.subTitle,
                      n = e?.rewardsBgImage;
                    return (0, i.jsx)(S.qr, {
                      className: P.slide,
                      onFocus: () => (e => {
                        v?.slideTo(e)
                      })(t),
                      children: (0, i.jsx)(T, {
                        title: s,
                        subTitle: a,
                        rewardsBgImage: n
                      })
                    }, t)
                  }))]
                })]
              }) : (0, i.jsx)("div", {
                className: P.noRewardsAvailable,
                children: (0, i.jsx)(f.FormattedMessage, {
                  ...I.no_rewards_available_title
                })
              })
            })]
          })
        },
        F = {
          pillBtn: "rockstargames-sites-gta-gen9c60c1ea7626c520b2211fa5f0b18061b",
          selected: "rockstargames-sites-gta-gen9b58652ec7e005a714810a11cc4b2bb7f",
          communityChallenges: "rockstargames-sites-gta-gen9dc0abf139506d2de9a4ec791e49331ef",
          wrapper: "rockstargames-sites-gta-gen9e3332f7d8fb8c01ce3af42b2fd4aebed",
          communityChallengeInfoPanel: "rockstargames-sites-gta-gen9df615cfc52fdd4ced7efec100c0504c6",
          content: "rockstargames-sites-gta-gen9b3af9e460a0d8d3aafdf3f71d795c94d"
        },
        D = JSON.parse('{"en-US":{"countdown_timer_days_title_long":"Days","countdown_timer_days_title_short":"D","countdown_timer_failure_title":"Failure","countdown_timer_header_pending_title":"Calculating Results...","countdown_timer_header_title":"Time Remaining","countdown_timer_hours_title_long":"Hours","countdown_timer_hours_title_short":"H","countdown_timer_minutes_title_long":"Minutes","countdown_timer_minutes_title_short":"M","countdown_timer_seconds_title_long":"Seconds","countdown_timer_seconds_title_short":"S","countdown_timer_success_title":"Success","milestone_marker_success_aria":"Milestone achieved","no_rewards_available_title":"No rewards available","rewards_carousel_next":"Next","rewards_carousel_previous":"Previous"}}'),
        E = (0, f.withIntl)((e => {
          let {
            banner: t,
            countdown: s,
            rewards: a,
            milestoneIndicator: n
          } = e;
          return (0, i.jsx)("div", {
            className: F.communityChallenges,
            children: (0, i.jsxs)("div", {
              className: F.wrapper,
              children: [t && (0, i.jsx)(l, {
                ...t
              }), (0, i.jsxs)("div", {
                className: F.content,
                children: [s?.timer && (0, i.jsx)(x, {
                  ...s.timer
                }), n && (0, i.jsx)(M, {
                  ...n
                }), a && (0, i.jsx)("section", {
                  className: F.rewardsSection,
                  children: (0, i.jsx)(R, {
                    ...a
                  })
                })]
              })]
            })
          })
        }), D)
    },
    10619: (e, t, s) => {
      s.d(t, {
        A: () => l
      });
      var a = s(9623);
      const n = {
        pillBtn: "rockstargames-sites-gta-gen9a76545929bba4f1522661c9f297ea3c5",
        selected: "rockstargames-sites-gta-gen9e5b12527bec7eae7fce9642c9827cc3b",
        plusButton: "rockstargames-sites-gta-gen9b35e9ba36ecaabe08c02c44808110761",
        small: "rockstargames-sites-gta-gen9b3ba679464048120f8440e7ae0d14086",
        btnText: "rockstargames-sites-gta-gen9e146813e6b911567a15379239351bb9f",
        btnTexticon: "rockstargames-sites-gta-gen9add785fa73d6a7f8cdf490add2819974",
        whiteBtn: "rockstargames-sites-gta-gen9d94aba4fb4bae812e14f8715816752c2",
        blackBtn: "rockstargames-sites-gta-gen9d3207a3907ff5e6cc1498c67d5562087",
        transparentBtn: "rockstargames-sites-gta-gen9d4515b6bf9a4c714239cac9e27932235",
        iconBtn: "rockstargames-sites-gta-gen9a305be36306fd7f0977b052ccab54910",
        link: "rockstargames-sites-gta-gen9a73b743df91203999c432aceb1093e62",
        xboxone: "rockstargames-sites-gta-gen9cadebea37980f01b56560143374013b3",
        xboxseriesxs: "rockstargames-sites-gta-gen9c28e2bcbd4ed4fc95b67860cb7033999",
        ps4: "rockstargames-sites-gta-gen9af1b302b53e77d0da20f92de2973fd29",
        ps5: "rockstargames-sites-gta-gen9b5164622a2b180ed2b04eab4d489763b",
        pc: "rockstargames-sites-gta-gen9c4a7b17bb99afb02a9f9b9b133be7844"
      };
      var r = s(25854);
      const c = e => {
          let {
            children: t,
            className: s,
            onClick: a,
            style: n,
            ariaLabel: c
          } = e;
          return (0, r.jsx)("button", {
            className: s,
            onClick: a,
            style: n,
            type: "button",
            "aria-label": c,
            children: t
          })
        },
        i = e => {
          let {
            children: t,
            className: s,
            onClick: n,
            style: c,
            to: i,
            ariaLabel: l
          } = e;
          return (0, r.jsx)(a.NavLink, {
            className: s,
            onClick: n,
            style: c,
            to: i,
            "aria-label": l,
            children: t
          })
        },
        l = e => {
          let {
            btnColor: t = "#fff",
            className: s = "",
            consoleBtn: a,
            icon: l = "",
            img: o,
            labelColor: d = "#000",
            onClick: g,
            secondText: m,
            size: u,
            text: b,
            to: f,
            type: _ = "",
            ariaLabel: h
          } = e;
          const x = [n.plusButton, n[_] ?? "", n[u] ?? "", n[a] ?? "", s].join(" "),
            w = {
              "--hvr-color": t ?? d,
              "--hvr-bg-color": d ?? t,
              "--hvr-border-color": t ?? d
            },
            k = (0, r.jsxs)(r.Fragment, {
              children: [o ? (0, r.jsx)("img", {
                src: o,
                alt: ""
              }) : "", (0, r.jsxs)("div", {
                className: n.btnText,
                icon: l,
                children: [b, m ? (0, r.jsx)("span", {
                  children: m
                }) : ""]
              })]
            });
          if (f) {
            if (f.startsWith("http")) {
              const e = f.startsWith(document.location.origin) ? "_self" : "_blank";
              return (0, r.jsx)("span", {
                onClick: g,
                onKeyDown: g,
                className: x,
                role: "button",
                "aria-label": h,
                tabIndex: 0,
                children: (0, r.jsx)("a", {
                  href: f,
                  target: e,
                  children: k
                })
              })
            }
            return (0, r.jsx)(i, {
              className: x,
              onClick: g,
              style: {
                ...w
              },
              to: f,
              ariaLabel: h,
              children: k
            })
          }
          return (0, r.jsx)(c, {
            className: x,
            onClick: g,
            style: {
              ...w
            },
            ariaLabel: h,
            children: k
          })
        }
    },
    27538: (e, t, s) => {
      s.d(t, {
        i: () => o,
        o: () => l
      });
      var a = s(62229),
        n = s(95966),
        r = s(25854);
      const c = (0, n.setContextItem)({
          context: (0, a.createContext)(),
          key: "tinaPayloadContext"
        }),
        {
          Provider: i
        } = c,
        l = e => {
          let {
            children: t,
            payload: s
          } = e;
          return (0, r.jsx)(i, {
            value: s,
            children: t
          })
        },
        o = () => (0, a.useContext)(c)
    },
    38558: (e, t, s) => {
      s.d(t, {
        C1: () => l,
        S1: () => i,
        XC: () => m,
        jS: () => o,
        qg: () => d,
        z0: () => g
      });
      var a = s(62229),
        n = s(95966),
        r = s(27538);
      const c = e => {
          if (!e) return null;
          const {
            hostname: t,
            pathname: s
          } = new URL(e, (0, n.getCdnPrefix)(!0));
          return "/" === s ? null : (t.endsWith(".akamaized.net"), e)
        },
        i = e => {
          let {
            alt: t = null,
            mobile: s = null,
            desktop: i = null,
            ariaLabel: l = null,
            sources: o = null,
            prod: d = null
          } = e;
          const g = (0, n.useLocale)(),
            {
              meta: m = {}
            } = (0, r.i)() ?? {},
            [u, b] = (0, a.useState)(d ?? m?.cdn ?? m?.prod ?? !0);
          (0, a.useEffect)((() => {
            b(d ?? m?.cdn ?? m?.prod ?? !0)
          }), [d, m]);
          const f = (0, a.useCallback)((e => {
            const t = null !== o,
              s = e?.previewSrc ?? e ?? null;
            if (null === s || "string" != typeof s) return null;
            if (s.startsWith("http")) return c(s);
            const a = `${t?(0,n.getCdnPrefix)(u):""}${s}`;
            return c(a)
          }), [u, o]);
          return {
            alt: t,
            ariaLabel: l,
            src: {
              mobile: f(o?.[g]?.mobile ?? o?.en_us?.mobile ?? s),
              desktop: f(o?.[g]?.desktop ?? o?.en_us?.desktop ?? i)
            }
          }
        },
        l = e => {
          const t = (0, r.i)() ?? {},
            {
              meta: s = {}
            } = t,
            [i, l] = (0, a.useState)(s?.cdn ?? s?.prod ?? !1);
          return (0, a.useEffect)((() => {
            l(s?.cdn ?? s?.prod ?? !1)
          }), [s]), e ? e?.startsWith("http") ? c(e) : c(`${(0,n.getCdnPrefix)(i)}${e}`) : null
        },
        o = () => {
          const e = (0, r.i)() ?? {},
            {
              meta: t = {}
            } = e,
            s = (0, a.useMemo)((() => t?.cdn ?? t?.prod ?? !1), [t]);
          return (0, a.useCallback)((function(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            const a = t?.prod ?? s;
            return e ? e?.startsWith("http") ? c(e) : c(`${(0,n.getCdnPrefix)(a)}${e}`) : null
          }), [s])
        },
        d = e => e.full_src,
        g = e => {
          const t = e?.previewSrc ?? e?.preview_src ?? e;
          return t?.startsWith("http") ? t : `${(0,n.getCdnPrefix)(!1)}${t}`
        },
        m = e => e.meta.uploads_directory
    },
    66603: (e, t, s) => {
      s.d(t, {
        _P: () => n,
        s0: () => a
      }), Math.pow(10, 8);
      const a = 36e5,
        n = Symbol.for("constructDateFrom")
    },
    74523: (e, t, s) => {
      s.d(t, {
        w: () => n
      });
      var a = s(66603);

      function n(e, t) {
        return "function" == typeof e ? e(t) : e && "object" == typeof e && a._P in e ? e[a._P](t) : e instanceof Date ? new e.constructor(t) : new Date(t)
      }
    },
    78170: (e, t, s) => {
      function a(e) {
        return t => {
          const s = (e ? Math[e] : Math.trunc)(t);
          return 0 === s ? 0 : s
        }
      }
      s.d(t, {
        u: () => a
      })
    }
  }
]);