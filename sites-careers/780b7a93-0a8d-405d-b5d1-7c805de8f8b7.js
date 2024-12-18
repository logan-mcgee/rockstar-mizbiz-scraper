! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      s = (new Error).stack;
    s && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[s] = "780b7a93-0a8d-405d-b5d1-7c805de8f8b7", e._sentryDebugIdIdentifier = "sentry-dbid-780b7a93-0a8d-405d-b5d1-7c805de8f8b7")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/sites-careers",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_careers = self.webpackChunk_rockstargames_sites_careers || []).push([
  [871], {
    2871: (e, s, i) => {
      "use strict";
      i.d(s, {
        A: () => ce
      });
      var n = i(1524),
        a = i(2756),
        t = i(396),
        r = i(1403),
        o = i(6864),
        c = i.n(o),
        l = i(8407),
        d = i(9460);
      var _ = i(6632);
      const u = (0, a.withTranslations)((e => {
          let {
            modalOpen: s = !1,
            closeModal: i
          } = e;
          const [a, t] = (0, r.useState)(null), o = (0, r.useRef)(), u = (0, r.useRef)(), m = (0, r.useRef)(), [p] = (0, l.useMutation)(d.ContactUs), [f, k] = (0, r.useState)(""), [b, h] = (0, r.useState)(!0);
          if (!s) return null;
          let g = null;
          return g = c(), (0, _.jsx)(g, {
            disabled: !s,
            children: (0, _.jsxs)("div", {
              children: [(0, _.jsx)("div", {
                className: "rockstargames-sites-careersa1660b7612d9d8b0557cbf6bff901618",
                onClick: () => i(),
                onKeyUp: e => {
                  "Escape" === e.key && i()
                }
              }), (0, _.jsxs)("div", {
                className: "rockstargames-sites-careersc7ab19ea6791320e666d507a4d16c94c",
                children: [(0, _.jsx)("button", {
                  className: "rockstargames-sites-careersc73d68bc5ff0e06cb68938bfb0404e4a",
                  "aria-label": "Close Contact Us Modal Button",
                  onClick: () => i(),
                  type: "button"
                }), (0, _.jsxs)("div", {
                  className: "rockstargames-sites-careersd1764020959965dae967306cb86775b6",
                  children: [(0, _.jsx)("h1", {
                    className: "rockstargames-sites-careersc5d25576ad484821a5ae4edcc0182054",
                    children: "Contact Us"
                  }), f, b && (0, _.jsxs)("form", {
                    onSubmit: e => (async e => {
                      e.preventDefault();
                      const s = {
                        recaptcha_token: a,
                        data: {
                          name: o.current.value,
                          email: u.current.value,
                          message: m.current.value
                        }
                      };
                      try {
                        k(""), await p({
                          variables: s
                        }), k("Your message has been received."), h(!1)
                      } catch ({
                        graphQLErrors: e
                      }) {
                        k(e?.[0]?.message ?? "Something went wrong. Please try again later.")
                      }
                    })(e),
                    className: "rockstargames-sites-careersa667b15d988ce9528a0a086c93d33d3b",
                    children: [(0, _.jsx)("input", {
                      type: "text",
                      id: "name",
                      name: "name",
                      placeholder: "Name",
                      ref: o,
                      required: !0
                    }), (0, _.jsx)("input", {
                      type: "email",
                      id: "email",
                      name: "email",
                      placeholder: "Email Address",
                      ref: u,
                      required: !0
                    }), (0, _.jsx)("textarea", {
                      id: "message",
                      name: "message",
                      placeholder: "Talk to Us",
                      ref: m,
                      required: !0
                    }), (0, _.jsx)(n.GoogleReCaptcha, {
                      onVerify: e => {
                        t(e)
                      }
                    }), (0, _.jsx)("input", {
                      type: "submit",
                      value: "Submit"
                    })]
                  })]
                })]
              })]
            })
          })
        })),
        m = (0, a.withTranslations)((e => {
          let {
            t: s
          } = e;
          const [i, n] = (0, r.useState)(Boolean(sessionStorage.getItem("careersHeaderMsgOpen"))), [o, c] = (0, r.useState)(!1), {
            setBodyIsLocked: l
          } = (0, a.useBodyScrollable)("NavContactModal"), d = (0, r.useCallback)((() => {
            c(!1), l(!1)
          }), []);
          return (0, t.useRockstarEventSubscriber)("careersContactUsLink", (() => {
            c(!0), l(!0)
          })), (0, r.useEffect)((() => {
            sessionStorage.setItem("careersHeaderMsgOpen", String(Boolean(i)))
          }), [i]), (0, _.jsxs)(_.Fragment, {
            children: [(0, _.jsx)("header", {
              className: "rockstargames-sites-careersd1af0829edc81288e41c1f1c80568fa6",
              children: i && (0, _.jsxs)("div", {
                className: "rockstargames-sites-careersbfbcb5a43e43e397caf7067becd1cdc8",
                children: [(0, _.jsx)("p", {
                  dangerouslySetInnerHTML: {
                    __html: s("careers.header_msg")
                  }
                }), (0, _.jsx)("button", {
                  className: "rockstargames-sites-careersd65e38c3bffe370996b7abfb96d17ee9",
                  "aria-label": "Close Banner Message Button",
                  onClick: () => n(!1),
                  type: "button"
                })]
              })
            }), (0, _.jsx)(u, {
              modalOpen: o,
              closeModal: d
            })]
          })
        }));
      var p = i(9779);
      const f = "rockstargames-sites-careersefc921382bffaff8db3c2b11b341e6c7",
        k = () => (0, _.jsxs)("div", {
          className: "rockstargames-sites-careersb04933d288c14d1c0c7308bab0b03a90",
          children: [(0, _.jsxs)("h2", {
            children: ["Accessibility Policy", (0, _.jsx)("br", {}), " ", "& Multi-Year Accessibility Plan for Rockstar Games Toronto ULC"]
          }), (0, _.jsxs)("p", {
            children: ["In 2005, the Ontario Government set the goal of a “barrier-free Ontario” for people with disabilities by creating the Accessibility for Ontarians with Disabilities Act, 2005 (“the Act” or “AODA”). Regulations were created which set out the steps that organizations, including", " ", (0, _.jsx)("span", {
              className: f,
              children: "Rockstar Games Toronto ULC (“Rockstar Toronto”)."
            }), ", must take to meet this laudable goal. These Regulations cover accessibility standards in customer service, information and communications, employment, transportation and the built environment."]
          }), (0, _.jsxs)("p", {
            children: [(0, _.jsx)("span", {
              className: f,
              children: "Rockstar Toronto"
            }), " ", "will or is in the process of creating internal policies, practices and procedures, which recognize the role", " ", (0, _.jsx)("span", {
              className: f,
              children: "Rockstar Toronto"
            }), " ", "will play in making Ontario more accessible."]
          }), (0, _.jsxs)("p", {
            children: ["This Accessibility Policy and Multi-Year Accessibility Plan outline the policies, procedures and actions that", " ", (0, _.jsx)("span", {
              className: f,
              children: "Rockstar Toronto"
            }), " ", "will put or has put in place to comply with the requirements of the Act and its Regulations"]
          }), (0, _.jsx)("h3", {
            children: "Statement of Commitment"
          }), (0, _.jsxs)("p", {
            children: [(0, _.jsx)("span", {
              className: f,
              children: "Rockstar Toronto"
            }), " ", "is committed to improving accessibility for individuals with disabilities and treating all people in a way that allows them to maintain their dignity and independence.", " ", (0, _.jsx)("span", {
              className: f,
              children: "Rockstar Toronto"
            }), " ", "will continue to meet the needs of people with disabilities in a timely manner, and will do so by preventing and removing barriers to accessibility and meeting accessibility requirements under the Act and its Regulations."]
          }), (0, _.jsx)("h3", {
            children: "Barrier Assessment"
          }), (0, _.jsxs)("p", {
            children: ["In accordance with AODA and", " ", (0, _.jsx)("span", {
              className: f,
              children: "Rockstar Toronto’s"
            }), " ", "goal of providing an inclusive workplace, this Accessibility Policy and Multi-Year Accessibility Plan seeks to eliminate and prevent barriers to accessibility. Typical barriers experienced by individuals with disabilities include physical, communication and technology, attitudinal and systemic barriers."]
          }), (0, _.jsx)("h3", {
            children: "Accessible Customer Service"
          }), (0, _.jsxs)("p", {
            children: [(0, _.jsx)("span", {
              className: f,
              children: "Rockstar Toronto"
            }), " ", "is committed to accessible customer service in keeping with the principles of dignity, independence, integration and equal opportunity."]
          }), (0, _.jsxs)("p", {
            children: ["Employees will be trained on", " ", (0, _.jsx)("span", {
              className: f,
              children: "Rockstar Toronto’s"
            }), " ", "Customer Service Standard Policy."]
          }), (0, _.jsxs)("p", {
            children: [(0, _.jsx)("span", {
              className: f,
              children: "Implementation Timeframe:"
            }), " ", (0, _.jsx)("br", {}), "Effective", " ", (0, _.jsx)("span", {
              className: f,
              children: "January 1, 2012"
            }), " ", "and ongoing."]
          }), (0, _.jsx)("h3", {
            children: "Accessible Emergency Information"
          }), (0, _.jsxs)("p", {
            children: [(0, _.jsx)("span", {
              className: f,
              children: "Rockstar Toronto"
            }), " ", "is committed to providing its customers with publicly available emergency information, in an accessible way, upon request."]
          }), (0, _.jsxs)("p", {
            children: [(0, _.jsx)("span", {
              className: f,
              children: "Rockstar Toronto"
            }), " ", "will also provide disabled employees with individualized emergency response information and create Individual Emergency Response Information Plans when necessary."]
          }), (0, _.jsxs)("p", {
            children: [(0, _.jsx)("span", {
              className: f,
              children: "Implementation Timeframe:"
            }), (0, _.jsx)("br", {}), " ", "Effective", " ", (0, _.jsx)("span", {
              className: f,
              children: "January 1, 2012"
            }), " ", "and ongoing."]
          }), (0, _.jsx)("h3", {
            children: "Training"
          }), (0, _.jsxs)("p", {
            children: [(0, _.jsx)("span", {
              className: f,
              children: "Rockstar Toronto"
            }), " ", "will provide training to employees relating to people with disabilities. Training will be provided in a way that best suits the duties of", " ", (0, _.jsx)("span", {
              className: f,
              children: "Rockstar Toronto"
            }), " ", "employees being trained."]
          }), (0, _.jsxs)("p", {
            children: [(0, _.jsx)("span", {
              className: f,
              children: "Rockstar Toronto Inc."
            }), " ", "will take the following steps to ensure employees and volunteers are provided with the training needed to meet Ontario’s accessible laws:"]
          }), (0, _.jsxs)("ul", {
            children: [(0, _.jsxs)("li", {
              children: [(0, _.jsx)("span", {
                className: f,
                children: "Rockstar Toronto"
              }), " ", "will review current training materials to determine whether any existing materials can be built upon and used for AODA training;"]
            }), (0, _.jsxs)("li", {
              children: [(0, _.jsx)("span", {
                className: f,
                children: "Rockstar Toronto"
              }), " ", "will provide Customer Service Training for all employees who deal with members of the public and/or any other third parties;"]
            }), (0, _.jsxs)("li", {
              children: [(0, _.jsx)("span", {
                className: f,
                children: "Rockstar Toronto"
              }), " ", "will provide training on:"]
            }), (0, _.jsxs)("ul", {
              children: [(0, _.jsx)("li", {
                children: "(1) The requirements of the accessibility standards referred to in the Integrated Accessibility Standard, O. Reg. 119/11; and"
              }), (0, _.jsx)("li", {
                children: "(2) The requirements of the Human Rights Code (“the Code”) as it pertains to persons with disabilities; and,"
              })]
            }), (0, _.jsxs)("li", {
              children: [(0, _.jsx)("span", {
                className: f,
                children: "Rockstar Toronto"
              }), " ", "will continue to provide training as required under AODA for all new employees and/or if there is a substantial change to", " ", (0, _.jsx)("span", {
                className: f,
                children: "Rockstar Toronto’s"
              }), " ", "Accessibility or other related policy."]
            })]
          }), (0, _.jsxs)("p", {
            children: [(0, _.jsx)("span", {
              className: f,
              children: "Implementation Timeframe:"
            }), (0, _.jsx)("br", {}), " ", "Effective", (0, _.jsx)("span", {
              className: f,
              children: "January 1, 2012"
            }), " ", "and ongoing."]
          }), (0, _.jsx)("h3", {
            children: "Information And Communications"
          }), (0, _.jsxs)("p", {
            children: [(0, _.jsx)("span", {
              className: f,
              children: "Rockstar Toronto"
            }), " ", "is committed to meeting the information and communication needs of people with disabilities."]
          }), (0, _.jsxs)("p", {
            children: [(0, _.jsx)("span", {
              className: f,
              children: "Rockstar Toronto"
            }), " ", "will take the following steps to make sure all information publically available in Ontario is made accessible upon request by", " ", (0, _.jsx)("span", {
              className: f,
              children: "January 1, 2016"
            }), ":"]
          }), (0, _.jsxs)("ul", {
            children: [(0, _.jsxs)("li", {
              children: [(0, _.jsx)("span", {
                className: f,
                children: "Rockstar Toronto"
              }), " ", "will consult with disabled customers to determine their specific needs;"]
            }), (0, _.jsxs)("li", {
              children: [(0, _.jsx)("span", {
                className: f,
                children: "Rockstar Toronto"
              }), " ", "will respond to such requests for accessible information as soon as practicable; and,"]
            }), (0, _.jsxs)("li", {
              children: [(0, _.jsx)("span", {
                className: f,
                children: "Rockstar Toronto"
              }), " ", "will provide customers with information in an accessible format, upon request."]
            })]
          }), (0, _.jsxs)("p", {
            children: [(0, _.jsx)("span", {
              className: f,
              children: "Rockstar Toronto"
            }), " ", "will take the following steps to make any new website and new web content, specific to Ontario, conform to WCAG 2.0, Level A by", " ", (0, _.jsx)("span", {
              className: f,
              children: "January 1, 2014"
            }), ":"]
          }), (0, _.jsxs)("ul", {
            children: [(0, _.jsxs)("li", {
              children: ["any new", " ", (0, _.jsx)("span", {
                className: f,
                children: "Rockstar Toronto"
              }), " ", "website applicable to Ontario will be assessed and evaluated for accessibility to ensure conformance with WCAG 2.0 Level A;"]
            }), (0, _.jsxs)("li", {
              children: ["any new", " ", (0, _.jsx)("span", {
                className: f,
                children: "Rockstar Toronto"
              }), " ", "web content applicable to Ontario will be assessed and evaluated for accessibility conformance;"]
            }), (0, _.jsxs)("li", {
              children: ["if conformance with WCAG 2.0 Level A is an issue,", " ", (0, _.jsx)("span", {
                className: f,
                children: "Rockstar Toronto"
              }), " ", "will consult with its internal IT department regarding necessary changes to its new website and new web content so as to come into compliance;"]
            }), (0, _.jsxs)("li", {
              children: [(0, _.jsx)("span", {
                className: f,
                children: "Rockstar Toronto"
              }), " ", "will engage services of its internal IT department to implement improvements to its website and web content so as to meet the compliance standards."]
            }), " "]
          }), (0, _.jsxs)("p", {
            children: [(0, _.jsx)("span", {
              className: f,
              children: "Rockstar Toronto"
            }), " ", "will take the following steps to make any public website and web content specific to Ontario conform to WCAG 2.0, Level AA by", " ", (0, _.jsx)("span", {
              className: f,
              children: "January 1, 2021"
            }), ":"]
          }), (0, _.jsxs)("ul", {
            children: [(0, _.jsxs)("li", {
              children: [(0, _.jsx)("span", {
                className: f,
                children: "Rockstar Toronto’s"
              }), " ", "Ontario web page will be assessed and evaluated for accessibility to ensure conformance with WCAG 2.0 Level A;"]
            }), (0, _.jsx)("li", {
              children: "public web content in Ontario will be assessed and evaluated for accessibility conformance;"
            }), (0, _.jsxs)("li", {
              children: ["if not in conformance with WCAG 2.0 Level A,", " ", (0, _.jsx)("span", {
                className: f,
                children: "Rockstar Toronto Inc."
              }), " ", "will consult with its internal IT department regarding necessary changes to bring to the website and web content into compliance;"]
            }), (0, _.jsx)("li", {
              children: "services of an external website consultant will be engaged to make the above improvements to the website and web content, if the internal IT department is unable to make the necessary changes; and,"
            }), (0, _.jsx)("li", {
              children: "necessary improvements to the website and content will be made to ensure compliance."
            })]
          }), (0, _.jsxs)("p", {
            children: [(0, _.jsx)("span", {
              className: f,
              children: "Implementation Timeframe:"
            }), (0, _.jsx)("br", {}), " ", "By", " ", (0, _.jsx)("span", {
              className: f,
              children: "January 1, 2014"
            }), " ", "and ongoing."]
          }), (0, _.jsx)("h3", {
            children: "Feedback"
          }), (0, _.jsxs)("p", {
            children: [(0, _.jsx)("span", {
              className: f,
              children: "Rockstar Toronto"
            }), " ", "will take the following steps to make ensure existing feedback processes are accessible to people with disabilities upon request by", " ", (0, _.jsx)("span", {
              className: f,
              children: "January 1, 2015:"
            })]
          }), (0, _.jsxs)("ul", {
            children: [(0, _.jsx)("li", {
              children: "make the provision of feedback accessible on its website or other location as appropriate;"
            }), (0, _.jsxs)("li", {
              children: ["advise customers and clients that feedback can be given in person, by mail, by phone, by fax or by e-mail to:", (0, _.jsx)("br", {}), (0, _.jsx)("br", {}), "Telephone: 905-829-2203, ext. 222", (0, _.jsx)("br", {}), "Facsimile: 905-829-2246", (0, _.jsx)("br", {}), "E-mail:", " ", (0, _.jsx)("a", {
                href: "mailto:aoda@rockstartoronto.com",
                children: "aoda@rockstartoronto.com"
              }), (0, _.jsx)("br", {}), (0, _.jsx)("br", {})]
            }), (0, _.jsx)("li", {
              children: "ensure the public that supports are available to facilitate the submission of feedback; and,"
            }), (0, _.jsx)("li", {
              children: "commit to responding to feedback as soon as practicable."
            })]
          }), (0, _.jsxs)("p", {
            children: [(0, _.jsx)("span", {
              className: f,
              children: "Rockstar Toronto"
            }), " ", "will take the following steps to make sure all publicly available information is made accessible upon request by", " ", (0, _.jsx)("span", {
              className: f,
              children: "January 1, 2016:"
            })]
          }), (0, _.jsxs)("ul", {
            children: [(0, _.jsxs)("li", {
              children: [(0, _.jsx)("span", {
                className: f,
                children: "Rockstar Toronto"
              }), " ", "will provide its customers and members of the public with information in an accessible format upon request."]
            }), (0, _.jsxs)("li", {
              children: [(0, _.jsx)("span", {
                className: f,
                children: "Rockstar Toronto"
              }), " ", "will respond to such requests as soon as practicable."]
            })]
          }), (0, _.jsxs)("p", {
            children: [(0, _.jsx)("span", {
              className: f,
              children: "Implementation Timeframe:"
            }), (0, _.jsx)("br", {}), " ", "By", (0, _.jsx)("span", {
              className: f,
              children: "January 1, 2016"
            }), " ", "and ongoing."]
          }), (0, _.jsx)("h3", {
            children: "Employment"
          }), (0, _.jsxs)("p", {
            children: [(0, _.jsx)("span", {
              className: f,
              children: "Rockstar Toronto"
            }), " ", "is committed to fair and accessible employment practices."]
          }), (0, _.jsxs)("p", {
            children: [(0, _.jsx)("span", {
              className: f,
              children: "Rockstar Toronto"
            }), " ", "will take the following steps by", (0, _.jsx)("span", {
              className: f,
              children: "January 1, 2016"
            }), " ", "to notify the public and staff that it will accommodate people with disabilities during the recruitment and assessment processes and when hired:"]
          }), (0, _.jsxs)("ul", {
            children: [(0, _.jsxs)("li", {
              children: ["include a statement in any job advertisements that", " ", (0, _.jsx)("span", {
                className: f,
                children: "Rockstar Toronto"
              }), " ", "will hire individuals with disabilities and will provide accommodations during the hiring process;"]
            }), (0, _.jsxs)("li", {
              children: ["if a job applicant requests accommodation,", " ", (0, _.jsx)("span", {
                className: f,
                children: "Rockstar Toronto"
              }), " ", "will consult with the individual and make adjustments that best suit his/her needs to the extent required by law;"]
            }), (0, _.jsxs)("li", {
              children: ["confirm, in any interview, that", " ", (0, _.jsx)("span", {
                className: f,
                children: "Rockstar Toronto"
              }), " ", "will hire individuals with disabilities;"]
            }), (0, _.jsxs)("li", {
              children: ["notify successful applicants of", " ", (0, _.jsx)("span", {
                className: f,
                children: "Rockstar Toronto’s"
              }), " ", "policies for accommodating employees with disabilities;"]
            }), (0, _.jsxs)("li", {
              children: ["include in the", " ", (0, _.jsx)("span", {
                className: f,
                children: "Rockstar Toronto new hire"
              }), " ", "training program a section on accessibility and the Code, as appropriate;"]
            }), (0, _.jsx)("li", {
              children: "advise current employees of the policies on accessibility and the Code;"
            }), (0, _.jsx)("li", {
              children: "advise employees when any changes are made to the above policies; and,"
            }), (0, _.jsx)("li", {
              children: "review existing policies and procedures, and where necessary, augment processes for people with disabilities."
            })]
          }), (0, _.jsxs)("p", {
            children: [(0, _.jsx)("span", {
              className: f,
              children: "Rockstar Toronto"
            }), " ", "will take the following steps to develop and put in place a process for designing individual accommodation plans and return-to-work policies for employees that have been absent due to a disability:"]
          }), (0, _.jsx)("ul", {
            children: (0, _.jsx)("li", {
              children: "review existing policies and procedures and if necessary, augment processes for people with disabilities on the development of accommodation plans and return to work processes."
            })
          }), (0, _.jsxs)("p", {
            children: [(0, _.jsx)("span", {
              className: f,
              children: "Rockstar Toronto"
            }), " ", "will take the following steps to ensure the accessibility needs of employees with disabilities are taken into account if", " ", (0, _.jsx)("span", {
              className: f,
              children: "Rockstar Toronto"
            }), " ", "uses a career development and redeployment processes:"]
          }), (0, _.jsx)("ul", {
            children: (0, _.jsx)("li", {
              children: "review existing policies and procedures and amend where necessary to ensure accessibility considerations."
            })
          }), (0, _.jsxs)("p", {
            children: [(0, _.jsx)("span", {
              className: f,
              children: "Rockstar Toronto"
            }), " ", "will take the following steps to prevent and remove other accessibility barriers identified:"]
          }), (0, _.jsx)("ul", {
            children: (0, _.jsx)("li", {
              children: "assess, review, and alter (if required) policies and procedures to ensure compliance with the AODA."
            })
          }), (0, _.jsxs)("p", {
            children: [(0, _.jsx)("span", {
              className: f,
              children: "Implementation Timeframe:"
            }), (0, _.jsx)("br", {}), " ", "By", (0, _.jsx)("span", {
              className: f,
              children: "January 1, 2016"
            }), " ", "and ongoing."]
          }), (0, _.jsx)("h3", {
            children: "Service Disruptions"
          }), (0, _.jsxs)("p", {
            children: [(0, _.jsx)("span", {
              className: f,
              children: "Rockstar Toronto"
            }), " ", "has put procedures in place to prevent service disruptions to its accessible parts of its public spaces."]
          }), (0, _.jsxs)("p", {
            children: ["In the event of a service disruption,", " ", (0, _.jsx)("span", {
              className: f,
              children: "Rockstar Toronto"
            }), " ", "will notify the public of the service disruption and alternatives available."]
          }), (0, _.jsxs)("p", {
            children: [(0, _.jsx)("span", {
              className: f,
              children: "Implementation Timeframe:"
            }), (0, _.jsx)("br", {}), " ", "Effective immediately and ongoing."]
          }), (0, _.jsx)("h3", {
            children: "Policy Review"
          }), (0, _.jsxs)("p", {
            children: ["The Multi-Year Accessibility Plan is a tool for", " ", (0, _.jsx)("span", {
              className: f,
              children: "Rockstar Toronto"
            }), " ", "to communicate its accessibility initiatives internally and to the public.", " ", (0, _.jsx)("span", {
              className: f,
              children: "Rockstar Toronto"
            }), " ", "will review and update this Plan at least once every five (5) years. The first version of this Plan will be reviewed no later than", " ", (0, _.jsx)("span", {
              className: f,
              children: "January 1, 2019"
            }), "."]
          }), (0, _.jsxs)("p", {
            children: [(0, _.jsx)("span", {
              className: f,
              children: "Implementation Timeframe:"
            }), (0, _.jsx)("br", {}), " ", "By", (0, _.jsx)("span", {
              className: f,
              children: "January 1, 2019"
            }), " ", "and ongoing."]
          }), (0, _.jsxs)("p", {
            children: ["For more information on this accessibility plan, please contact us at 905-829-2203, ext. 222 or", " ", (0, _.jsx)("a", {
              href: "mailto:aoda@rockstartoronto.com",
              children: "aoda@rockstartoronto.com"
            }), "."]
          }), (0, _.jsx)("p", {
            children: "Please note accessible formats of this Accessibility Policy and Multi-Year Accessibility Plan are available free upon request at the contacts listed above."
          })]
        });
      var b = i(6717);
      const h = JSON.parse('{"us":{"aria_label_open_new_window":"(Opens in a new window)","ns_already_subbed_details":"You are already receiving newsletter updates at this email address. Change your email preferences at any time on your account settings page.","ns_already_subbed_title":"Already Subscribed","ns_check_email_details":"To confirm your subscription to the Rockstar Games Email List, please verify your email address via the link sent to the email address you’ve signed up with.","ns_check_email_title":"Check Your Email","ns_confirm_after_register_details":"You did not opt-in to receive marketing emails during account creation. Would you still like to subscribe to our newsletter?","ns_confirm_after_register_title":"Confirm your subscription","ns_confirm_details":"Please confirm that you would like to subscribe to the Rockstar Games Newsletter by clicking the button below.","ns_confirm_title":"Confirm your subscription","ns_cta_button_text":"Subscribe Now","ns_cta_text":"Sign up for our email newsletter to get info on game announcements and updates, details on special events and offers, and more from Rockstar Games and our affiliates.","ns_cta_title":"Subscribe to the Rockstar Games Email List","ns_error_generic_details":"We cannot sign up this email address to our newsletter at this time.","ns_error_generic_title":"Error","ns_error_preferences_details":"We cannot sign up your email address to our newsletter at this time. Change your email preferences on your account settings page or try again later.","ns_error_preferences_title":"Error","ns_go_back_text":"No, Go Back","ns_manage_prefs_button_text":"Manage Preferences","ns_ok_button_text":"OK","ns_successfully_subscribed_details":"You are now signed up to the Rockstar Games Email List and will receive regular updates to the email address you’ve signed up with. Manage your email preferences at any time on your account settings page.","ns_successfully_subscribed_title":"Successfully Subscribed","ns_yes_subscribe_text":"Yes, Subscribe","pl_card_badge_content_complete":"Complete","plm_nav_scroll_left":"Scroll Left","plm_nav_scroll_right":"Scroll Right","language_selector_default":"Select a Language","nofications_new":"New notifications","profile_selector_mugshot":"{userName} mugshot","profile_selector_profile_card":"Profile Card","profile_selector_rp_icon":"RP Category","profile_selector_switch_character":"Switch Character","sc_link_account":"Account","sc_link_activity_feed":"Activity Feed","sc_link_cookies_policy":"Cookies Policy","sc_link_cookies_settings":"Cookies Settings","sc_link_crews":"Crews","sc_link_do_not_sell_my_information":"Do Not Sell My Information","sc_link_find_friends":"Find Friends","sc_link_friends":"Friends","sc_link_game_activation":"Game Activation","sc_link_help":"Help","sc_link_import_friends":"Import Friends","sc_link_join_social_club":"Sign Up","sc_link_legal":"Legal","sc_link_log_out":"Log Out","sc_link_messages":"Messages","sc_link_my_friends":"My Friends","sc_link_notifications":"Notifications","sc_link_privacy_policy":"Privacy Policy","sc_link_settings":"Settings","sc_link_sign_in":"Sign In","sc_link_support":"Support","sc_link_view_my_profile":"View My Profile","sc_menu_close":"Close player menu","sc_menu_drag_handle":"Drag Menu Handle","sc_menu_open":"Open player menu","components_ratings_link_alt":"Rating: {rating}. Click here learn more about rating systems","rp_icon":"RP Category","components_track_list_title":"Tracklist","next_button_label":"Next video page","previous_button_label":"Previous video page"},"de":{"aria_label_open_new_window":"(Öffnet ein neues Fenster)","ns_already_subbed_details":"Du erhältst bereits Newsletter-Updates an diese E-Mail-Adresse. Du kannst deine Präferenzen bezüglich E-Mails jederzeit in den Einstellungen deines Kontos ändern.","ns_already_subbed_title":"Bereits abonniert","ns_check_email_details":"Bitte verifiziere deine E-Mail-Adresse über den Link, der an die E-Mail-Adresse geschickt wurde, mit der du dich angemeldet hast, um dein Abo für die E-Mail-Liste von Rockstar Games zu bestätigen.","ns_check_email_title":"Überprüfe deine E-Mails","ns_confirm_after_register_details":"Du hast dich während der Kontoerstellung nicht für Werbe-E-Mails angemeldet. Möchtest du immer noch unseren Newsletter abonnieren?","ns_confirm_after_register_title":"Bestätige dein Abo","ns_confirm_details":"Bitte drücke auf den Knopf unten, um zu bestätigen, dass du den Newsletter von Rockstar Games abonnieren möchtest.","ns_confirm_title":"Bestätige dein Abo","ns_cta_button_text":"Jetzt abonnieren","ns_cta_text":"Melde dich bei unserem E-Mail-Newsletter an, um über Spielankündigungen und Updates, besondere Events, Angebote und mehr von Rockstar Games und unseren Partnern informiert zu werden.","ns_cta_title":"E-Mail-Liste von Rockstar Games beitreten","ns_error_generic_details":"Wir können diese E-Mail-Adresse derzeit nicht bei unserem Newsletter anmelden.","ns_error_generic_title":"Fehler","ns_error_preferences_details":"Wir können deine E-Mail-Adresse derzeit nicht bei unserem Newsletter anmelden. Ändere deine Präferenzen bezüglich E-Mails in den Einstellungen deines Kontos oder versuche es später erneut.","ns_error_preferences_title":"Fehler","ns_go_back_text":"Nein, zurückkehren","ns_manage_prefs_button_text":"Präferenzen verwalten","ns_ok_button_text":"Okay","ns_successfully_subscribed_details":"Du hast dich bei der E-Mail-Liste von Rockstar Games angemeldet und erhältst regelmäßig Updates an die E-Mail-Adresse, mit der du dich angemeldet hast. Verwalte deine Präferenzen bezüglich E-Mails in den Einstellungen deines Kontos.","ns_successfully_subscribed_title":"Erfolgreich abonniert","ns_yes_subscribe_text":"Ja, abonnieren","pl_card_badge_content_complete":"Abgeschlossen","plm_nav_scroll_left":"Links scrollen","plm_nav_scroll_right":"Rechts scrollen","language_selector_default":"Eine Sprache auswählen","nofications_new":"Neue Benachrichtigungen","profile_selector_mugshot":"Verbrecherfoto von {userName}","profile_selector_profile_card":"Profildaten","profile_selector_rp_icon":"RP-Kategorie","profile_selector_switch_character":"Charakter wechseln","sc_link_account":"Konto","sc_link_activity_feed":"Aktivitäten-Feed","sc_link_cookies_policy":"Cookie-Richtlinie","sc_link_cookies_settings":"Cookie-Einstellungen","sc_link_crews":"Crews","sc_link_do_not_sell_my_information":"Meine Informationen nicht verkaufen","sc_link_find_friends":"Freunde finden","sc_link_friends":"Freunde","sc_link_game_activation":"Spielaktivierung","sc_link_help":"Hilfe","sc_link_import_friends":"Freunde importieren","sc_link_join_social_club":"Registrieren","sc_link_legal":"Rechtliches","sc_link_log_out":"Abmelden","sc_link_messages":"Nachrichten","sc_link_my_friends":"Meine Freunde","sc_link_notifications":"Benachrichtigungen","sc_link_privacy_policy":"Datenschutzrichtlinien","sc_link_settings":"Einstellungen","sc_link_sign_in":"Anmelden","sc_link_support":"Support","sc_link_view_my_profile":"Mein Profil ansehen","sc_menu_close":"Spielermenü schließen","sc_menu_drag_handle":"Menü öffnen bzw. schließen","sc_menu_open":"Spielermenü öffnen","components_ratings_link_alt":"Altersfreigabe: {rating} Klicke hier, um mehr über Altersfreigaben zu erfahren.","rp_icon":"RP-Kategorie","components_track_list_title":"Trackliste","next_button_label":"Nächste Videoseite","previous_button_label":"Vorherige Videoseite"},"es":{"aria_label_open_new_window":"(Se abre en una ventana nueva)","ns_already_subbed_details":"Ya recibes actualizaciones del boletín de noticias en este correo electrónico. Cambia tus preferencias de correos electrónicos en cualquier momento en la página de ajustes de tu cuenta.","ns_already_subbed_title":"Ya tienes una suscripción","ns_check_email_details":"Para confirmar tu suscripción a la lista de correo de Rockstar Games, verifica tu correo electrónico a través del enlace enviado al correo electrónico con el que te has suscrito.","ns_check_email_title":"Comprueba tu correo electrónico","ns_confirm_after_register_details":"No te has suscrito a los correos electrónicos comerciales al crear tu cuenta. ¿Quieres suscribirte a nuestro boletín de noticias?","ns_confirm_after_register_title":"Confirma tu suscripción","ns_confirm_details":"Haz click en el botón para confirmar que quieres suscribirte al boletín de noticias de Rockstar Games.","ns_confirm_title":"Confirma tu suscripción","ns_cta_button_text":"Suscríbete ya","ns_cta_text":"Suscríbete a nuestro boletín de noticias para obtener información sobre los anuncios y actualizaciones de juegos, detalles sobre eventos especiales, ofertas y mucho más sobre Rockstar Games y sus afiliados.","ns_cta_title":"Suscríbete a la lista de correo de Rockstar Games","ns_error_generic_details":"En este momento no puedes sucribirte a nuestro boletín de noticias con este correo electrónico.","ns_error_generic_title":"Error","ns_error_preferences_details":"En este momento no puedes sucribirte a nuestro boletín de noticias con tu correo electrónico. Cambia tus preferencias de correos electrónicos en la página de ajustes de tu cuenta o inténtalo más tarde.","ns_error_preferences_title":"Error","ns_go_back_text":"No, volver","ns_manage_prefs_button_text":"Gestionar preferencias","ns_ok_button_text":"Aceptar","ns_successfully_subscribed_details":"Te has suscrito a la lista de correo de Rockstar Games y recibirás actualizaciones en el correo electrónico con el que te has suscrito. Cambia tus preferencias de correos electrónicos en cualquier momento en la página de ajustes de tu cuenta.","ns_successfully_subscribed_title":"Te has suscrito","ns_yes_subscribe_text":"Sí, suscríbete","pl_card_badge_content_complete":"Completado","plm_nav_scroll_left":"Desplazar hacia la izquierda","plm_nav_scroll_right":"Desplazar hacia la derecha","language_selector_default":"Selecciona un idioma","nofications_new":"Nuevas notificaciones","profile_selector_mugshot":"Foto de {userName}","profile_selector_profile_card":"Tarjeta de perfil","profile_selector_rp_icon":"Categoría de RP","profile_selector_switch_character":"Cambiar personaje","sc_link_account":"Cuenta","sc_link_activity_feed":"Actividades","sc_link_cookies_policy":"Política de cookies","sc_link_cookies_settings":"Ajustes de cookies","sc_link_crews":"Crews","sc_link_do_not_sell_my_information":"No quiero que vendáis mis datos","sc_link_find_friends":"Buscar amigos","sc_link_friends":"Amigos","sc_link_game_activation":"Activación del juego","sc_link_help":"Ayuda","sc_link_import_friends":"Importar amigos","sc_link_join_social_club":"Registrarse","sc_link_legal":"Aviso legal","sc_link_log_out":"Cerrar sesión","sc_link_messages":"Mensajes","sc_link_my_friends":"Mis amigos","sc_link_notifications":"Notificaciones","sc_link_privacy_policy":"Política de privacidad","sc_link_settings":"Ajustes","sc_link_sign_in":"Iniciar sesión","sc_link_support":"Asistencia técnica","sc_link_view_my_profile":"Ver mi perfil","sc_menu_close":"Cerrar menú de jugador","sc_menu_drag_handle":"Arrastrar el controlador del menú","sc_menu_open":"Abrir menú de jugador","components_ratings_link_alt":"Clasificación: {rating}. Haz clic aquí para obtener más información sobre los sistemas de clasificación.","rp_icon":"Categoría de RP","components_track_list_title":"Lista de pistas","next_button_label":"Página de vídeo siguiente","previous_button_label":"Página de vídeo anterior"},"mx":{"aria_label_open_new_window":"(Se abre en una ventana nueva)","ns_already_subbed_details":"Ya recibes actualizaciones del boletín en esta dirección de correo electrónico. Modifica las preferencias de tu correo cuando quieras desde la página de ajustes de la cuenta.","ns_already_subbed_title":"Ya cuentas con una suscripción","ns_check_email_details":"Verifica tu dirección de correo electrónico mediante el enlace que enviamos al correo con el que te registraste para confirmar la suscripción a la lista de correos de Rockstar Games.","ns_check_email_title":"Comprueba tu correo","ns_confirm_after_register_details":"No optaste por recibir correos con publicidad durante la creación de la cuenta. ¿Quieres suscribirte a nuestro boletín de todos modos?","ns_confirm_after_register_title":"Confirmar suscripción","ns_confirm_details":"Haz clic en el botón a continuación para confirmar que quieres suscribirte al boletín de Rockstar Games.","ns_confirm_title":"Confirmar suscripción","ns_cta_button_text":"Suscribirse ahora","ns_cta_text":"Regístrate para recibir nuestro boletín por correo electrónico y recibir información sobre anuncios y actualizaciones de juegos, detalles sobre eventos y ofertas especiales, y mucho más de Rockstar Games y sus afiliados.","ns_cta_title":"Suscríbete a la lista de correos de Rockstar Games","ns_error_generic_details":"En este momento, no podemos registrar esta dirección de correo electrónico a nuestro boletín.","ns_error_generic_title":"Error","ns_error_preferences_details":"En este momento, no podemos registrar tu dirección de correo electrónico a nuestro boletín. Modifica las preferencias de tu correo desde la página de ajustes de la cuenta o inténtalo de nuevo más tarde.","ns_error_preferences_title":"Error","ns_go_back_text":"No, volver","ns_manage_prefs_button_text":"Gestionar preferencias","ns_ok_button_text":"Aceptar","ns_successfully_subscribed_details":"Cuentas con una suscripción a la lista de correos de Rockstar Games y recibirás actualizaciones habituales a la dirección de correo electrónico con la que te registraste. Gestiona las preferencias de tu correo cuando quieras desde la página de ajustes de la cuenta.","ns_successfully_subscribed_title":"Suscripción exitosa","ns_yes_subscribe_text":"Sí, suscribirse","pl_card_badge_content_complete":"Completado","plm_nav_scroll_left":"Desplazarse hacia la izquierda","plm_nav_scroll_right":"Desplazarse hacia la derecha","language_selector_default":"Seleccionar un idioma","nofications_new":"Nuevas notificaciones","profile_selector_mugshot":"Foto de {userName}","profile_selector_profile_card":"Tarjeta del perfil","profile_selector_rp_icon":"Categoría de RP","profile_selector_switch_character":"Cambiar personaje","sc_link_account":"Cuenta","sc_link_activity_feed":"Muro de actividades","sc_link_cookies_policy":"Política de cookies","sc_link_cookies_settings":"Configuración de cookies","sc_link_crews":"Crews","sc_link_do_not_sell_my_information":"No quiero que vendan mis datos","sc_link_find_friends":"Encontrar amigos","sc_link_friends":"Amigos","sc_link_game_activation":"Activación de juegos","sc_link_help":"Ayuda","sc_link_import_friends":"Importar amigos","sc_link_join_social_club":"Registro","sc_link_legal":"Legal","sc_link_log_out":"Cerrar sesión","sc_link_messages":"Mensajes","sc_link_my_friends":"Mis amigos","sc_link_notifications":"Notificaciones","sc_link_privacy_policy":"Política de privacidad","sc_link_settings":"Configuración","sc_link_sign_in":"Iniciar sesión","sc_link_support":"Soporte","sc_link_view_my_profile":"Ver mi perfil","sc_menu_close":"Cerrar menú del jugador","sc_menu_drag_handle":"Mover el handle del menú","sc_menu_open":"Abrir menú del jugador","components_ratings_link_alt":"Clasificación: {rating}. Haz clic aquí para obtener más información sobre el sistema de clasificación.","rp_icon":"Categoría de RP","components_track_list_title":"Lista de canciones","next_button_label":"Página de video siguiente","previous_button_label":"Página de video anterior"},"fr":{"aria_label_open_new_window":"(S’ouvre dans une nouvelle fenêtre)","ns_already_subbed_details":"Vous êtes déjà abonné(e) à la newsletter avec cette adresse e-mail. Modifiez vos préférences concernant les e-mails à tout moment sur la page des paramètres de votre compte.","ns_already_subbed_title":"Vous êtes déjà abonné(e)","ns_check_email_details":"Pour confirmer votre abonnement à la liste de diffusion de Rockstar Games, veuillez vérifier votre adresse e-mail en cliquant sur le lien envoyé à l\'adresse e-mail avec laquelle vous vous êtes abonné(e).","ns_check_email_title":"Vérifiez votre adresse e-mail","ns_confirm_after_register_details":"Vous avez choisi de ne pas recevoir d\'e-mails publicitaires lors de la création de votre compte. Voulez-vous toujours vous abonner à notre newsletter ?","ns_confirm_after_register_title":"Confirmez votre abonnement","ns_confirm_details":"Veuillez confirmer que vous souhaitez vous abonner à la newsletter de Rockstar Games en cliquant sur le bouton ci-dessous.","ns_confirm_title":"Confirmer votre abonnement","ns_cta_button_text":"S\'abonner","ns_cta_text":"Abonnez-vous à la newsletter pour recevoir par e-mail des infos relatives à nos jeux et aux mises à jour, aux évènements spéciaux et aux offres, et plus de la part de Rockstar Games et nos affiliés.","ns_cta_title":"S\'abonner à la liste de diffusion de Rockstar Games ","ns_error_generic_details":"Nous ne pouvons pas abonner cette adresse e-mail à notre newsletter pour l\'instant.","ns_error_generic_title":"Erreur","ns_error_preferences_details":"Nous ne pouvons pas abonner votre adresse e-mail à notre newsletter pour l\'instant. Modifiez vos préférences concernant les e-mails sur la page des paramètres de votre compte ou réessayez plus tard.","ns_error_preferences_title":"Erreur","ns_go_back_text":"Non, retour","ns_manage_prefs_button_text":"Gérer vos préférences","ns_ok_button_text":"OK","ns_successfully_subscribed_details":"Vous êtes désormais abonné(e) à la liste de diffusion de Rockstar Games. Vous recevrez des e-mails régulièrement à l\'adresse e-mail avec laquelle vous vous êtes abonné(e). Gérez vos préférences concernant les e-mails à tout moment sur la page des paramètres de votre compte.","ns_successfully_subscribed_title":"Abonnement effectué","ns_yes_subscribe_text":"Oui, je m\'abonne","pl_card_badge_content_complete":"Terminé","plm_nav_scroll_left":"Faire défiler vers la gauche","plm_nav_scroll_right":"Faire défiler vers la droite","language_selector_default":"Sélectionner une langue","nofications_new":"Nouvelles notifications","profile_selector_mugshot":"Photo d\'identité : {userName}","profile_selector_profile_card":"Carte du profil","profile_selector_rp_icon":"Catégorie de RP","profile_selector_switch_character":"Changer de personnage","sc_link_account":"Compte","sc_link_activity_feed":"Fil d\'activités","sc_link_cookies_policy":"Politique en matière de cookies","sc_link_cookies_settings":"Paramètres des cookies","sc_link_crews":"Crews","sc_link_do_not_sell_my_information":"Ne pas vendre mes informations","sc_link_find_friends":"Trouver des amis","sc_link_friends":"Amis","sc_link_game_activation":"Activation de jeux","sc_link_help":"Aide","sc_link_import_friends":"Importer des amis","sc_link_join_social_club":"S’abonner","sc_link_legal":"Mentions légales","sc_link_log_out":"Se déconnecter","sc_link_messages":"Messages","sc_link_my_friends":"Mes amis","sc_link_notifications":"Notifications","sc_link_privacy_policy":"Charte de confidentialité","sc_link_settings":"Paramètres","sc_link_sign_in":"Se connecter","sc_link_support":"Assistance","sc_link_view_my_profile":"Voir mon profil","sc_menu_close":"Fermer le menu Joueur","sc_menu_drag_handle":"Drag Menu Handle","sc_menu_open":"Ouvrir le menu Joueur","components_ratings_link_alt":"Classification : {rating}. Cliquez ici pour en savoir plus sur les systèmes de classification.","rp_icon":"Catégorie : RP","components_track_list_title":"Liste des morceaux","next_button_label":"Page vidéo suivante","previous_button_label":"Page vidéo précédente"},"it":{"aria_label_open_new_window":"(Apri in una nuova finestra)","ns_already_subbed_details":"Stai già usando questo indirizzo email per ricevere la newsletter. Puoi modificare le preferenze delle email in qualsiasi momento nella pagina delle impostazioni dell’account.","ns_already_subbed_title":"Sei già iscritto","ns_check_email_details":"Per confermare la tua iscrizione alla mailing list di Rockstar Games, verifica il tuo indirizzo email tramite il link che ti abbiamo inviato all’indirizzo email che hai usato per iscriverti.","ns_check_email_title":"Controlla la tua mail","ns_confirm_after_register_details":"Non hai acconsentito a ricevere le email di marketing durante la creazione dell\'account. Vuoi ancora iscriverti alla nostra newsletter?","ns_confirm_after_register_title":"Conferma la tua iscrizione","ns_confirm_details":"Conferma che vuoi iscriverti alla Newsletter di Rockstar Games cliccando sul pulsanto qui sotto.","ns_confirm_title":"Conferma la tua iscrizione","ns_cta_button_text":"Iscriviti","ns_cta_text":"Iscriviti alla nostra newsletter via email per ricevere i dettagli, gli annunci e gli aggiornamenti sui giochi, i dettagli sugli eventi speciali e sulle offerte, e altro da parte di Rockstar Games e dai nostri soci.","ns_cta_title":"Iscriviti alla mailing list di Rockstar Games","ns_error_generic_details":"Non è stato possibile procedere con l’iscrizione di questo indirizzo email alla nostra newsletter in questo momento.","ns_error_generic_title":"Errore","ns_error_preferences_details":"Non è stato possibile procedere con l’iscrizione di questo indirizzo email alla nostra newsletter in questo momento. Modifica le preferenze della tua email nella pagina delle impostazioni dell’account o riprova più tardi.","ns_error_preferences_title":"Errore","ns_go_back_text":"No, torna indietro","ns_manage_prefs_button_text":"Gestisci le preferenze","ns_ok_button_text":"OK","ns_successfully_subscribed_details":"Hai effettuato l’iscrizione alla mailing list di Rockstar Games e riceverai regolarmente gli aggiornamenti all’indirizzo email che hai usato per iscriverti. Puoi modificare le preferenze delle email in qualsiasi momento nella pagina delle impostazioni dell’account.","ns_successfully_subscribed_title":"Iscrizione effettuata con successo","ns_yes_subscribe_text":"Sì, iscriviti","pl_card_badge_content_complete":"Completa","plm_nav_scroll_left":"Scorri a sinistra","plm_nav_scroll_right":"Scorri a destra","language_selector_default":"Seleziona una lingua","nofications_new":"Nuove notifiche","profile_selector_mugshot":"Foto segnaletica di {userName}","profile_selector_profile_card":"Scheda del profilo","profile_selector_rp_icon":"Categoria RP","profile_selector_switch_character":"Cambia personaggio","sc_link_account":"Account","sc_link_activity_feed":"Feed attività","sc_link_cookies_policy":"Politica sui cookie","sc_link_cookies_settings":"Impostazioni dei cookie","sc_link_crews":"Crew","sc_link_do_not_sell_my_information":"Non vendere le mie informazioni","sc_link_find_friends":"Trova amici","sc_link_friends":"Amici","sc_link_game_activation":"Attivazione gioco","sc_link_help":"Assistenza","sc_link_import_friends":"Importa amici","sc_link_join_social_club":"Registrati","sc_link_legal":"Note legali","sc_link_log_out":"Esci","sc_link_messages":"Messaggi","sc_link_my_friends":"I miei amici","sc_link_notifications":"Notifiche","sc_link_privacy_policy":"Politica sulla privacy","sc_link_settings":"Impostazioni","sc_link_sign_in":"Accedi","sc_link_support":"Supporto","sc_link_view_my_profile":"Visualizza il mio profilo","sc_menu_close":"Chiudi Menu giocatore","sc_menu_drag_handle":"Drag Menu Handle","sc_menu_open":"Apri Menu giocatore","components_ratings_link_alt":"Classificazione: {rating}. Clicca qui per scoprire di più sui sistemi di classificazione","rp_icon":"Categoria RP","components_track_list_title":"Tracklist","next_button_label":"Pagina di video successiva","previous_button_label":"Pagina di video precedente"},"jp":{"aria_label_open_new_window":"(新しいウィンドウで開きます)","ns_already_subbed_details":"このメールアドレスで既にニュースレターアップデートを受け取っています。アカウント設定のページからいつでもメール受信設定を変更できます。","ns_already_subbed_title":"サブスクリプション登録済み","ns_check_email_details":"ロックスター・ゲームスのメールリストへのサブスクリプション登録を確認するため、登録に使用したメールアドレスに送られたリンクからメールアドレスを認証してください。","ns_check_email_title":"メールを確認してください","ns_confirm_after_register_details":"アカウント作成時にマーケティングメールを受け取ることを選択していません。ニュースレターのサブスクリプション登録をしますか？","ns_confirm_after_register_title":"サブスクリプション登録を承認してください","ns_confirm_details":"下のボタンをクリックすることでロックスター・ゲームスのニュースレターにサブスクリプション登録をすることを承認してください。","ns_confirm_title":"サブスクリプション登録を承認する","ns_cta_button_text":"サブスクリプション登録をしましょう","ns_cta_text":"メールニュースレターに登録して、ゲーム発表やアップデート、特別イベントやオファーの詳細など、ロックスター・ゲームスと関連会社からの情報を受け取りましょう。","ns_cta_title":"ロックスター・ゲームスのメールリストへのサブスクリプション登録","ns_error_generic_details":"現在このメールアドレスでニュースレターに登録することはできません。","ns_error_generic_title":"エラー","ns_error_preferences_details":"現在このメールアドレスでニュースレターに登録することはできません。アカウント設定のページからメール受信設定を変更するか、後ほど再度お試しください。","ns_error_preferences_title":"エラー","ns_go_back_text":"戻ります","ns_manage_prefs_button_text":"設定を管理する","ns_ok_button_text":"OK","ns_successfully_subscribed_details":"ロックスター・ゲームスのメールリストに登録されました。登録したメールアドレスに定期的にアップデートが送信されます。アカウント設定のページからいつでもメール受信設定を管理できます。","ns_successfully_subscribed_title":"サブスクリプション登録が完了しました","ns_yes_subscribe_text":"サブスクリプション登録します","pl_card_badge_content_complete":"完了","plm_nav_scroll_left":"左にスクロール","plm_nav_scroll_right":"右にスクロール","language_selector_default":"言語を選択","nofications_new":"新しいお知らせ","profile_selector_mugshot":"{userName}顔写真","profile_selector_profile_card":"プロフィールカード","profile_selector_rp_icon":"RPカテゴリー","profile_selector_switch_character":"キャラクター変更","sc_link_account":"アカウント","sc_link_activity_feed":"アクティビティフィード","sc_link_cookies_policy":"クッキーポリシー","sc_link_cookies_settings":"クッキー設定","sc_link_crews":"クルー","sc_link_do_not_sell_my_information":"個人情報を売らないでください","sc_link_find_friends":"フレンドを検索","sc_link_friends":"フレンド","sc_link_game_activation":"ゲームアクティベーション","sc_link_help":"ヘルプ","sc_link_import_friends":"フレンドをインポート","sc_link_join_social_club":"サインアップ","sc_link_legal":"利用規約","sc_link_log_out":"ログアウト","sc_link_messages":"メッセージ","sc_link_my_friends":"フレンド","sc_link_notifications":"通知","sc_link_privacy_policy":"プライバシーポリシー","sc_link_settings":"設定","sc_link_sign_in":"サインイン","sc_link_support":"サポート","sc_link_view_my_profile":"プロフィールを表示","sc_menu_close":"プレイヤーメニューを閉じる","sc_menu_drag_handle":"Drag Menu Handle","sc_menu_open":"プレイヤーメニューを開く","components_ratings_link_alt":"レーティング：{rating}レーティングについての詳細はこちらをクリックしてください","rp_icon":"RPカテゴリー","components_track_list_title":"トラックリスト","next_button_label":"次のビデオページ","previous_button_label":"前のビデオページ"},"kr":{"aria_label_open_new_window":"(새 창에서 열기)","ns_already_subbed_details":"이미 이 이메일 주소로 뉴스레터 최신 정보를 수신하고 있습니다. 계정 설정 페이지에서 언제든지 이메일 설정을 변경할 수 있습니다.","ns_already_subbed_title":"이미 구독하고 있음","ns_check_email_details":"Rockstar Games 이메일 리스트 구독 상황을 확인하려면 가입 시 사용한 이메일 주소로 전송된 링크를 통해 이메일 주소를 인증하십시오.","ns_check_email_title":"이메일 확인하기","ns_confirm_after_register_details":"계정 생성 시 마케팅 이메일 수신 동의을 선택하지 않았습니다. 그래도 뉴스레터를 구독하시겠습니까?","ns_confirm_after_register_title":"구독 확인하기","ns_confirm_details":"아래 버튼을 클릭하여 Rockstar Games 뉴스레터 구독 여부를 확인하십시오.","ns_confirm_title":"구독 확인하기","ns_cta_button_text":"지금 구독하기","ns_cta_text":"이메일 뉴스레터를 구독하면 Rockstar Games 및 관련 제휴사로부터 게임 공지 사항, 업데이트, 특별 이벤트 및 혜택에 관한 세부 정보 등 다양한 정보를 받아보실 수 있습니다.","ns_cta_title":"Rockstar Games 이메일 리스트 구독하기","ns_error_generic_details":"현재 이 이메일 주소로 뉴스레터를 구독할 수 없습니다.","ns_error_generic_title":"오류","ns_error_preferences_details":"현재 해당 이메일 주소로 뉴스레터를 구독할 수 없습니다. 계정 설정 페이지에서 이메일 설정을 변경하거나 나중에 다시 시도하십시오.","ns_error_preferences_title":"오류","ns_go_back_text":"아니오, 뒤로 갑니다","ns_manage_prefs_button_text":"설정 관리","ns_ok_button_text":"확인","ns_successfully_subscribed_details":"Rockstar Games 이메일 리스트를 구독합니다. 가입하신 이메일 주소로 최신 정보가 정기적으로 전달됩니다. 계정 설정 페이지에서 언제든지 이메일 설정을 관리할 수 있습니다.","ns_successfully_subscribed_title":"구독 완료","ns_yes_subscribe_text":"네, 구독합니다","pl_card_badge_content_complete":"완료","plm_nav_scroll_left":"왼쪽 스크롤","plm_nav_scroll_right":"오른쪽 스크롤","language_selector_default":"언어 선택","nofications_new":"새 알림","profile_selector_mugshot":"{userName} 머그샷","profile_selector_profile_card":"프로필 카드","profile_selector_rp_icon":"RP 카테고리","profile_selector_switch_character":"캐릭터 교체","sc_link_account":"계정","sc_link_activity_feed":"활동 피드","sc_link_cookies_policy":"쿠키 정책","sc_link_cookies_settings":"쿠키 설정","sc_link_crews":"조직","sc_link_do_not_sell_my_information":"내 정보 판매 안 함","sc_link_find_friends":"친구 찾기","sc_link_friends":"친구","sc_link_game_activation":"게임 활성화","sc_link_help":"도움말","sc_link_import_friends":"친구 불러오기","sc_link_join_social_club":"가입","sc_link_legal":"법률 관련","sc_link_log_out":"로그아웃","sc_link_messages":"메시지","sc_link_my_friends":"내 친구","sc_link_notifications":"알림","sc_link_privacy_policy":"개인 정보 보호 정책","sc_link_settings":"설정","sc_link_sign_in":"로그인","sc_link_support":"지원","sc_link_view_my_profile":"내 프로필 보기","sc_menu_close":"플레이어 메뉴 닫기","sc_menu_drag_handle":"드래그 메뉴 핸들","sc_menu_open":"플레이어 메뉴 열기","components_ratings_link_alt":"등급 분류: {rating}. 등급 분류 제도에 대해 더 자세히 알아보려면 여기를 클릭하십시오","rp_icon":"RP 카테고리","components_track_list_title":"트랙리스트","next_button_label":"다음 비디오 페이지","previous_button_label":"이전 비디오 페이지"},"pl":{"aria_label_open_new_window":"(Otwórz w nowym oknie)","ns_already_subbed_details":"Już otrzymujesz powiadomienia o nowościach na ten adres e-mail. Zmień swoje preferencje w dowolnym momencie w ustawieniach swojego konta.","ns_already_subbed_title":"Subskrypcja jest już aktywna","ns_check_email_details":"Aby potwierdzić swoją subskrypcję listy mailingowej Rockstar Games, zweryfikuj swój adres e-mail poprzez link wysłany do twojej skrzynki odbiorczej.","ns_check_email_title":"Sprawdź swoją pocztę","ns_confirm_after_register_details":"Nie udzielono zgody na otrzymywanie powiadomień marketingowych przy zakładaniu konta. Czy chcesz subskrybować naszą listę mailingową?","ns_confirm_after_register_title":"Potwierdź swoją subskrypcję","ns_confirm_details":"Należy potwierdzić swoją subskrypcję listy mailingowej Rockstar Games poprzez kliknięcie poniższego przycisku.","ns_confirm_title":"Potwierdź swoją subskrypcję","ns_cta_button_text":"Subskrybuj teraz","ns_cta_text":"Zapisz się, aby otrzymywać powiadomienia o nowościach dotyczących gier i aktualizacji, a także informacje na temat specjalnych wydarzeń i ofert oraz więcej od Rockstar Games i naszych oddziałów.","ns_cta_title":"Subskrybuj listę mailingową Rockstar Games","ns_error_generic_details":"Nie możemy w tym momencie dodać twojego adresu do listy mailingowej Rockstar Games.","ns_error_generic_title":"Błąd","ns_error_preferences_details":"Nie możemy w tym momencie dodać twojego adresu do listy mailingowej Rockstar Games. Zmień swoje preferencje w ustawieniach swojego konta lub spróbuj ponownie później.","ns_error_preferences_title":"Błąd","ns_go_back_text":"Nie, cofnij","ns_manage_prefs_button_text":"Aktualizuj swoje preferencje","ns_ok_button_text":"OK","ns_successfully_subscribed_details":"Aby potwierdzić swoją subskrypcję listy mailingowej Rockstar Games, zweryfikuj swój adres e-mail poprzez link wysłany do twojej skrzynki odbiorczej. Zmień swoje preferencje w dowolnym momencie w ustawieniach swojego konta.","ns_successfully_subscribed_title":"Pomyślnie zasubskrybowano","ns_yes_subscribe_text":"Tak, subskrybuj","pl_card_badge_content_complete":"Ukończono","plm_nav_scroll_left":"Przesuń w lewo","plm_nav_scroll_right":"Przesuń w prawo","language_selector_default":"Wybierz język","nofications_new":"Nowe powiadomienia","profile_selector_mugshot":"Zdjęcie – {userName}","profile_selector_profile_card":"Karta profilu","profile_selector_rp_icon":"Poziom RP","profile_selector_switch_character":"Zmień postać","sc_link_account":"Konto","sc_link_activity_feed":"Zajęcia","sc_link_cookies_policy":"Polityka plików cookie","sc_link_cookies_settings":"Ustawienia plików cookie","sc_link_crews":"Ekipy","sc_link_do_not_sell_my_information":"Zabraniam sprzedaży moich danych","sc_link_find_friends":"Szukaj znajomych","sc_link_friends":"Znajomi","sc_link_game_activation":"Aktywacja gry","sc_link_help":"Pomoc","sc_link_import_friends":"Importuj znajomych","sc_link_join_social_club":"Zarejestruj się","sc_link_legal":"Informacje prawne","sc_link_log_out":"Wyloguj się","sc_link_messages":"Wiadomości","sc_link_my_friends":"Moi znajomi","sc_link_notifications":"Powiadomienia","sc_link_privacy_policy":"Polityka prywatności","sc_link_settings":"Ustawienia","sc_link_sign_in":"Zaloguj się","sc_link_support":"Wsparcie","sc_link_view_my_profile":"Przeglądaj profil","sc_menu_close":"Zamknij menu gracza","sc_menu_drag_handle":"Przeciągnij uchwyt menu","sc_menu_open":"Otwórz menu gracza","components_ratings_link_alt":"Klasyfikacja wiekowa: {rating}. Kliknij tutaj, aby dowiedzieć się więcej o systemie klasyfikacji wiekowej","rp_icon":"Poziom RP","components_track_list_title":"Lista utworów","next_button_label":"Następna strona z filmami","previous_button_label":"Poprzednia strona z filmami"},"br":{"aria_label_open_new_window":"(Abre em uma nova janela)","ns_already_subbed_details":"Você já está recebendo atualizações do newsletter neste endereço de e-mail. Mude suas preferências de e-mail a qualquer momento na página de configurações da sua conta.","ns_already_subbed_title":"Já está inscrito","ns_check_email_details":"Para confirmar sua inscrição na lista de e-mails da Rockstar Games, verifique seu endereço de e-mail pelo link enviado para o endereço que você usou para se inscrever.","ns_check_email_title":"Verifique seu e-mail","ns_confirm_after_register_details":"Você escolheu não receber e-mails de marketing quando criou a sua conta. Deseja se inscrever no nosso newsletter?","ns_confirm_after_register_title":"Confirme sua inscrição","ns_confirm_details":"Confirme que você deseja se inscrever no newsletter na Rockstar Games clicando no botão abaixo.","ns_confirm_title":"Confirme sua inscrição","ns_cta_button_text":"Inscrever-se","ns_cta_text":"Inscreva-se no nosso newsletter para receber informações sobre atualizações e anúncios, detalhes sobre eventos e ofertas especiais e mais da Rockstar Games e afiliadas.","ns_cta_title":"Inscreva-se na lista de e-mails da Rockstar Games","ns_error_generic_details":"No momento, não é possível se inscrever no nosso newsletter usando este endereço de e-mail.","ns_error_generic_title":"Erro","ns_error_preferences_details":"No momento, não é possível se inscrever no nosso newsletter usando o seu endereço de e-mail. Mude suas preferências de e-mail a qualquer momento na página de configurações da sua conta ou tente novamente mais tarde.","ns_error_preferences_title":"Erro","ns_go_back_text":"Não, voltar","ns_manage_prefs_button_text":"Gerenciar preferências","ns_ok_button_text":"OK","ns_successfully_subscribed_details":"Você está inscrito na lista de e-mails da Rockstar Games e receberá atualizações periódicas no endereço de e-mail que usou para se inscrever. Gerencie suas preferências de e-mail a qualquer momento na página de configurações da sua conta.","ns_successfully_subscribed_title":"Inscrição efetuada","ns_yes_subscribe_text":"Sim, fazer inscrição","pl_card_badge_content_complete":"Concluiu","plm_nav_scroll_left":"Rolar para a esquerda","plm_nav_scroll_right":"Rolar para a direita","language_selector_default":"Selecione um idioma","nofications_new":"Novas notificações","profile_selector_mugshot":"Foto de {userName}","profile_selector_profile_card":"Cartão de perfil","profile_selector_rp_icon":"Categoria de RP","profile_selector_switch_character":"Alternar personagem","sc_link_account":"Conta","sc_link_activity_feed":"Feed de atividade","sc_link_cookies_policy":"Política de cookies","sc_link_cookies_settings":"Configurações de cookies","sc_link_crews":"Comandos","sc_link_do_not_sell_my_information":"Não vendam a minha informação","sc_link_find_friends":"Encontrar amigos","sc_link_friends":"Amigos","sc_link_game_activation":"Ativação de jogos","sc_link_help":"Ajuda","sc_link_import_friends":"Importar amigos","sc_link_join_social_club":"Inscrever-se","sc_link_legal":"Aviso legal","sc_link_log_out":"Sair","sc_link_messages":"Mensagens","sc_link_my_friends":"Meus amigos","sc_link_notifications":"Notificações","sc_link_privacy_policy":"Política de Privacidade","sc_link_settings":"Configurações","sc_link_sign_in":"Iniciar sessão","sc_link_support":"Suporte","sc_link_view_my_profile":"Visualizar meu perfil","sc_menu_close":"Fechar menu de jogador","sc_menu_drag_handle":"Arrastar título do menu","sc_menu_open":"Abrir menu de jogador","components_ratings_link_alt":"Classificação Indicativa: {rating}. Clique aqui para saber mais sobre sistemas de classificação indicativa.","rp_icon":"Categoria de RP","components_track_list_title":"Lista de faixas","next_button_label":"Próxima página de vídeos","previous_button_label":"Página anterior de vídeos"},"ru":{"aria_label_open_new_window":"(ссылка откроется в новом окне)","ns_already_subbed_details":"Вы уже получаете письма по рассылке на этот адрес электронной почты. Вы можете изменить настройки электронной почты в любое время на странице настроек учетной записи.","ns_already_subbed_title":"Подписка уже оформлена","ns_check_email_details":"Чтобы подтвердить подписку на рассылку электронных писем Rockstar Games, пожалуйста, подтвердите адрес электронной почты, нажав на ссылку в письме, полученном на адрес электронной почты, который вы указали при оформлении подписки.","ns_check_email_title":"Проверьте электронную почту","ns_confirm_after_register_details":"Вы не дали согласия на получение рекламных писем во время создания учетной записи. Вы все еще хотите оформить подписку на нашу рассылку?","ns_confirm_after_register_title":"Подтвердите подписку","ns_confirm_details":"Пожалуйста, подтвердите, что вы хотите подписаться на рассылку электронных писем Rockstar Games, нажав на кнопку ниже.","ns_confirm_title":"Подтвердите подписку","ns_cta_button_text":"Оформить подписку","ns_cta_text":"Подпишитесь на нашу рассылку электронных писем, чтобы получать анонсы и информацию об обновлении игр, подробности о специальных событиях и скидках, а также другую информацию от Rockstar Games и наших партнеров.","ns_cta_title":"Подпишитесь на рассылку электронных писем Rockstar Games","ns_error_generic_details":"Невозможно оформить подписку на нашу рассылку для этого адреса электронной почты в данный момент.","ns_error_generic_title":"Ошибка","ns_error_preferences_details":"Невозможно оформить подписку на нашу рассылку для этого адреса электронной почты в данный момент. Вы можете изменить настройки электронной почты на странице настроек учетной записи или повторить попытку позже.","ns_error_preferences_title":"Ошибка","ns_go_back_text":"Нет, вернуться","ns_manage_prefs_button_text":"Изменить настройки учетной записи","ns_ok_button_text":"OK","ns_successfully_subscribed_details":"Подписка на рассылку электронных писем Rockstar Games оформлена, и вы будете регулярно получать новости на адрес электронной почты, указанный при оформлении. Вы можете изменить настройки электронной почты в любое время на странице настроек учетной записи.","ns_successfully_subscribed_title":"Подписка оформлена","ns_yes_subscribe_text":"Да, подписаться","pl_card_badge_content_complete":"Завершено","plm_nav_scroll_left":"Пролистать влево","plm_nav_scroll_right":"Пролистать вправо","language_selector_default":"Выбрать язык","nofications_new":"Новые уведомления","profile_selector_mugshot":"Фотография игрока {userName}","profile_selector_profile_card":"Карта профиля","profile_selector_rp_icon":"Категория опыта","profile_selector_switch_character":"Сменить персонажа","sc_link_account":"Учетная запись","sc_link_activity_feed":"Лента событий","sc_link_cookies_policy":"Политика использования файлов Cookie","sc_link_cookies_settings":"Настройки файлов Cookie","sc_link_crews":"Банды","sc_link_do_not_sell_my_information":"Я запрещаю продавать мою личную информацию","sc_link_find_friends":"Поиск друзей","sc_link_friends":"Друзья","sc_link_game_activation":"Активация игры","sc_link_help":"Помощь","sc_link_import_friends":"Импорт друзей","sc_link_join_social_club":"Регистрация","sc_link_legal":"Юридическая информация","sc_link_log_out":"Выход","sc_link_messages":"Сообщения","sc_link_my_friends":"Мои друзья","sc_link_notifications":"Уведомления","sc_link_privacy_policy":"Политика конфиденциальности","sc_link_settings":"Настройки","sc_link_sign_in":"Войти","sc_link_support":"Поддержка","sc_link_view_my_profile":"Моя учетная запись","sc_menu_close":"Закрыть меню игрока","sc_menu_drag_handle":"Перенести маркер меню","sc_menu_open":"Открыть меню игрока","components_ratings_link_alt":"Рейтинг: {rating}. Нажмите, чтобы узнать больше о системе рейтинга","rp_icon":"Категория опыта","components_track_list_title":"Список песен","next_button_label":"Следующая страница с видео","previous_button_label":"Предыдущая страница с видео"},"hans":{"aria_label_open_new_window":"（在新窗口中打开）","ns_already_subbed_details":"您的电子邮件地址已在接收新闻通讯更新。您可以在账户设置页面随时修改电子邮件偏好。","ns_already_subbed_title":"已订阅","ns_check_email_details":"要确认您已订阅 Rockstar Games 电子邮件列表，请通过发送到您订阅时使用的电子邮件地址中的链接验证邮箱。","ns_check_email_title":"检查您的电子邮箱","ns_confirm_after_register_details":"您在创建账户时没有选择接收营销邮件。您还想要订阅我们的新闻通讯吗？","ns_confirm_after_register_title":"确认您的订阅","ns_confirm_details":"请点击下方按钮以确认您想订阅 Rockstar Games 新闻通讯。","ns_confirm_title":"确认您的订阅","ns_cta_button_text":"立即订阅","ns_cta_text":"订阅我们的电子邮件新闻通讯，以获得来自 Rockstar Games 以及我们附属公司的游戏公告和更新、特殊活动与优惠的信息，及更多内容。","ns_cta_title":"订阅 Rockstar Games 电子邮件列表","ns_error_generic_details":"我们目前无法用此电子邮件地址订阅新闻通讯。","ns_error_generic_title":"错误","ns_error_preferences_details":"我们目前无法用您的电子邮件地址订阅新闻通讯。请在账户设置页面中修改电子邮件偏好，或稍后再试。","ns_error_preferences_title":"错误","ns_go_back_text":"不，返回","ns_manage_prefs_button_text":"管理偏好","ns_ok_button_text":"好的","ns_successfully_subscribed_details":"您现已订阅 Rockstar Games 电子邮件列表，您将会在您订阅时使用的电子邮件地址中收到定期更新。您可以在账户设置页面随时管理电子邮件偏好。","ns_successfully_subscribed_title":"订阅成功","ns_yes_subscribe_text":"是，订阅","pl_card_badge_content_complete":"完成","plm_nav_scroll_left":"向左滚动","plm_nav_scroll_right":"向右滚动","language_selector_default":"选择一种语言","nofications_new":"新通知","profile_selector_mugshot":"{userName} 面部照片","profile_selector_profile_card":"档案卡","profile_selector_rp_icon":"声望值类别","profile_selector_switch_character":"切换角色","sc_link_account":"账户","sc_link_activity_feed":"活动动态","sc_link_cookies_policy":"Cookie 政策","sc_link_cookies_settings":"Cookie 设置","sc_link_crews":"帮会","sc_link_do_not_sell_my_information":"请勿出售我的信息","sc_link_find_friends":"查找好友","sc_link_friends":"好友","sc_link_game_activation":"游戏激活","sc_link_help":"帮助","sc_link_import_friends":"导入好友","sc_link_join_social_club":"注册","sc_link_legal":"法律声明","sc_link_log_out":"登出","sc_link_messages":"信息","sc_link_my_friends":"我的好友","sc_link_notifications":"通知","sc_link_privacy_policy":"隐私政策","sc_link_settings":"设置","sc_link_sign_in":"登录","sc_link_support":"支持","sc_link_view_my_profile":"查看我的档案","sc_menu_close":"关闭玩家菜单","sc_menu_drag_handle":"拖动菜单处理","sc_menu_open":"打开玩家菜单","components_ratings_link_alt":"评级：{rating}。点击此处了解评级系统的更多详情。","rp_icon":"声望值类别","components_track_list_title":"曲目列表","next_button_label":"下一页视频","previous_button_label":"上一页视频"},"tw":{"aria_label_open_new_window":"（在新視窗開啟）","ns_already_subbed_details":"電子報更新已以此電子郵件地址寄送給您。您可以在帳戶設定頁面隨時變更您的電子郵件偏好設定。","ns_already_subbed_title":"已經訂閱","ns_check_email_details":"為了確認您的 Rockstar Games 電子郵件通知訂閱，請以寄送到您訂閱電子郵件地址的連結，驗證您的電子郵件地址。","ns_check_email_title":"檢查您的電子郵件","ns_confirm_after_register_details":"在建立帳戶時，您並沒有選擇可接收行銷電子郵件。您仍想訂閱我們的電子報？","ns_confirm_after_register_title":"確認您的訂閱","ns_confirm_details":"請點擊以下按鈕，以確認您想訂閱 Rockstar Games 電子報。","ns_confirm_title":"確認您的訂閱","ns_cta_button_text":"立刻訂閱","ns_cta_text":"訂閱我們的電子報，以獲得遊戲公告與更新、特殊活動與優惠的詳情，以及更多來自 Rockstar Games 與相關單位的各式資訊。","ns_cta_title":"訂閱 Rockstar Games 電子郵件通知","ns_error_generic_details":"我們現在無法將此電子郵件地址訂閱到我們的電子報。","ns_error_generic_title":"錯誤","ns_error_preferences_details":"我們現在無法將此電子郵件地址訂閱到我們的電子報。在帳戶設定頁面變更您的電子郵件偏好設定，或稍後再試。","ns_error_preferences_title":"錯誤","ns_go_back_text":"否，返回","ns_manage_prefs_button_text":"管理偏好","ns_ok_button_text":"好","ns_successfully_subscribed_details":"您現在已訂閱 Rockstar Games 電子郵件通知，將會在訂閱的電子郵件地址收到定期更新。您可以在帳戶設定頁面隨時管理您的電子郵件偏好設定。","ns_successfully_subscribed_title":"成功訂閱","ns_yes_subscribe_text":"是的，訂閱","pl_card_badge_content_complete":"完成","plm_nav_scroll_left":"向左捲動","plm_nav_scroll_right":"向右捲動","language_selector_default":"選擇語言","nofications_new":"新通知","profile_selector_mugshot":"{userName} 罪犯檔案照","profile_selector_profile_card":"資料卡","profile_selector_rp_icon":"聲望值類別","profile_selector_switch_character":"切換角色","sc_link_account":"帳戶","sc_link_activity_feed":"動態活動","sc_link_cookies_policy":"Cookie 政策","sc_link_cookies_settings":"Cookie 設定","sc_link_crews":"幫會","sc_link_do_not_sell_my_information":"不要販售我的個人資料","sc_link_find_friends":"尋找好友","sc_link_friends":"好友","sc_link_game_activation":"遊戲啟用","sc_link_help":"幫助","sc_link_import_friends":"匯入好友","sc_link_join_social_club":"訂閱","sc_link_legal":"法律聲明","sc_link_log_out":"登出","sc_link_messages":"訊息","sc_link_my_friends":"我的好友","sc_link_notifications":"通知","sc_link_privacy_policy":"隱私權政策","sc_link_settings":"設定","sc_link_sign_in":"登入","sc_link_support":"支援","sc_link_view_my_profile":"查看我的設定檔","sc_menu_close":"關閉玩家選單","sc_menu_drag_handle":"拖曳選單控點","sc_menu_open":"開啟玩家選單","components_ratings_link_alt":"評分：{rating}。點擊此處以更加了解評分系統","rp_icon":"聲望值類別","components_track_list_title":"曲目清單","next_button_label":"下一個影片頁面","previous_button_label":"上一個影片頁面"}}'),
        g = (0, b.defineMessages)({
          aria_label_open_new_window: {
            id: "aria_label_open_new_window",
            defaultMessage: "(Opens in a new window)"
          }
        }),
        v = "rockstargames-sites-careersff481c537a56a6fcdb1be85dfbc8944e",
        y = (0, b.withIntl)((e => {
          let {
            children: s,
            to: i = "#",
            reloadDocument: n = !1,
            alt: a = "",
            autoBlank: t = !1,
            onClick: o = (() => {}),
            focused: c = !1,
            ...l
          } = e;
          const d = (0, r.useRef)(null),
            u = (0, b.useIntl)(),
            m = !/^(https?|mailto):/i.test(i),
            f = /^#/.test(i),
            k = l?.target ?? (t ? "_blank" : "_self");
          let {
            ...h
          } = l, y = "";
          if ("aria-label" in h && h["aria-label"] && (y = "_blank" === k ? `${h["aria-label"]} ${u.formatMessage(g.aria_label_open_new_window)}` : h["aria-label"]), (0, r.useEffect)((() => {
              c && d?.current && d.current.focus()
            }), [d?.current, c]), f) {
            const e = e => {
              e.preventDefault(), document?.querySelector(`[id='${i.replace("#","")}']`)?.scrollIntoView({
                behavior: "smooth",
                block: "center"
              }), o && o(e)
            };
            return (0, _.jsxs)("a", {
              title: a,
              href: i,
              onClick: e,
              ...h,
              "aria-label": y,
              ref: d,
              children: [s, "_blank" === k && !y && (0, _.jsx)("span", {
                className: v,
                children: u.formatMessage(g.aria_label_open_new_window)
              })]
            })
          }
          if (m) return (0, _.jsxs)(p.NavLink, {
            title: a,
            to: i,
            onClick: o,
            ...h,
            "aria-label": y,
            ref: d,
            reloadDocument: n,
            children: [s, "_blank" === k && !y && (0, _.jsx)("span", {
              className: v,
              children: u.formatMessage(g.aria_label_open_new_window)
            })]
          });
          const w = Object.keys(h).filter((e => !["activeClassName", "key", "end"].includes(e))).reduce(((e, s) => ({
            ...e,
            [s]: l[s]
          })), {});
          return "function" == typeof w?.className && delete w.className, (0, _.jsxs)("a", {
            href: i,
            title: a,
            onClick: o,
            target: k,
            ...w,
            "aria-label": y,
            ref: d,
            children: [s, "_blank" === k && !y && (0, _.jsx)("span", {
              className: v,
              children: u.formatMessage(g.aria_label_open_new_window)
            })]
          })
        }), h);
      var w = i(4566),
        j = i(7768);
      const x = {
          home: "rockstargames-sites-careersdcf817f11d19ae0ef32bf4b753d292a2",
          offices: "rockstargames-sites-careersdfa78440e609539a6d5eeca25c4ca08b",
          blurb: "rockstargames-sites-careersb76f323a7b8cda1218249dd765293574",
          viewOpeningsButtonContainer: "rockstargames-sites-careersc0c88f1a633625ccd041c29a75c24460",
          viewOpeningsButton: "rockstargames-sites-careersc5be62ee13e9d538f71f7749612aab18",
          secondary: "rockstargames-sites-careersb4a3bce7cee9a5b16f904a9d0a548e6a"
        },
        N = () => {
          const {
            formatMessage: e
          } = (0, b.useIntl)(), {
            data: s
          } = (0, l.useQuery)(j.HomeData);
          return s ? (0, _.jsxs)("div", {
            className: x.home,
            children: [(0, _.jsxs)("div", {
              className: x.offices,
              children: [s.jobsOffices.map((e => (0, _.jsxs)(y, {
                to: `./offices/${e.seo_url}`,
                className: x.office,
                children: [(0, _.jsx)("dt", {
                  children: e.name
                }), (0, _.jsx)("dd", {
                  children: e.location
                })]
              }, e.name))), (0, _.jsx)(y, {
                className: x.viewOpeningsButtonContainer,
                to: "./openings",
                children: (0, _.jsx)("button", {
                  className: x.viewOpeningsButton,
                  type: "button",
                  children: "View All Openings"
                })
              })]
            }), (0, _.jsx)("div", {
              className: x.blurb,
              dangerouslySetInnerHTML: {
                __html: e(w.sitesCareers.careers_home_msg)
              }
            })]
          }) : null
        },
        S = e => {
          let {
            headType: s,
            positions: i,
            title: n,
            openingsLinkRelative: a = "./",
            positionLinkRelative: t = "./",
            officesLinkRelative: r = "../"
          } = e;
          return (0, _.jsxs)("div", {
            className: "rockstargames-sites-careerseaeeb9897e04ec9a73cda75eb72e48cf",
            children: [(0, _.jsx)("h4", {
              children: (0, _.jsx)(y, {
                to: "department" === s ? `${a}?department=${encodeURIComponent(n)}` : `${r}offices/${i[0].company.seo_url}`,
                children: n
              })
            }), (0, _.jsx)("div", {
              className: "rockstargames-sites-careerseed8de799b71fdd0d767f2c184145b96",
              children: i.map((e => {
                let {
                  id: s,
                  title: i
                } = e;
                return (0, _.jsx)(y, {
                  to: `${t}position/${s}`,
                  children: i
                }, s)
              }))
            })]
          })
        };
      var C = i(4252),
        R = i.n(C);
      const z = e => {
          let {
            positions: s,
            key: i
          } = e;
          return R()(s).groupBy((e => e[i])).map(((e, s) => ({
            [i]: s,
            positions: e
          }))).value()
        },
        A = e => {
          let {
            positions: s,
            key: i
          } = e;
          return R().orderBy(s, [i], ["asc"])
        };
      var E = i(4329);
      const P = {
          positionGroups: "rockstargames-sites-careersabafe83bdbbc12323cfebd8be1c20549",
          positionGroupsRendered: "rockstargames-sites-careersf559486307c49de485c57f86a4da2322",
          mapImg: "rockstargames-sites-careersee42d230cd52ae95f8134611fc94dab3",
          office: "rockstargames-sites-careersc299e3a3cc95d7389dab026e87979b05"
        },
        T = () => {
          const {
            office_seo: e
          } = (0, p.useParams)(), {
            data: s,
            loading: i
          } = (0, l.useQuery)(E.OfficeData, {
            variables: {
              companySlug: e
            }
          }), [n, a] = (0, r.useState)(null), [t, o] = (0, r.useState)(!1);
          return (0, r.useEffect)((() => {
            o(!1), setTimeout((() => {
              o(!0)
            }), 1e3)
          }), [i]), (0, r.useEffect)((() => {
            if (!s) return;
            const e = z({
                key: "department",
                positions: s.jobsPositionList
              }),
              i = A({
                key: "department",
                positions: e
              });
            a(i)
          }), [s]), n ? (0, _.jsxs)("div", {
            className: P.office,
            children: [(0, _.jsx)("h2", {
              children: s?.jobsOffices[0]?.name
            }), (0, _.jsx)("div", {
              className: [P.positionGroups, t ? P.positionGroupsRendered : ""].join(" "),
              children: n.map((e => {
                let {
                  department: s,
                  positions: i
                } = e;
                return (0, _.jsx)(S, {
                  positions: i,
                  title: s,
                  headType: "department",
                  openingsLinkRelative: "../openings/",
                  positionLinkRelative: "../openings/"
                }, s)
              }))
            })]
          }) : null
        };
      var q = i(5094);
      const D = {
          openings: "rockstargames-sites-careersfdd3ce2327c428e90f9498b0aacd2539",
          queryDiv: "rockstargames-sites-careerse8ab013c7edb78b2289c7f8b4bc4cb05",
          sort: "rockstargames-sites-careersb13b211510b84af63fc0bf8395815da9",
          sortButtons: "rockstargames-sites-careersd1e52125b0950bb04c5158d98215d480",
          secondary: "rockstargames-sites-careersbc5c5c2ffb0031b9b2c7c45ef6acd164",
          activeSort: "rockstargames-sites-careersf69a400ce8c3921945bb2e7ec38c3d47",
          heirarchy: "rockstargames-sites-careersfed954ab279c3107eda875b77e640b82",
          heirarchyRendered: "rockstargames-sites-careersc413963e668c0bf80f2e8fa4be32f81e",
          primaryGrid: "rockstargames-sites-careersc1dc1a50d1c10ce6c2c06399d7777fd6",
          primaryHeaderH: "rockstargames-sites-careersbb48d81dfac0684dc23e69886f6a0641",
          primaryIsCompany: "rockstargames-sites-careersdd0db63c03ffb3caf75ef50dc5ae525b",
          searchHeader: "rockstargames-sites-careersd7409d086e9a1a3f0e2010f33b772cd0",
          viewOpeningsButton: "rockstargames-sites-careerse26218cfb1830fc390f0a271002ee58c"
        },
        F = e => {
          let {
            positions: s,
            key: i
          } = e;
          return A({
            positions: z({
              positions: s,
              key: i
            }),
            key: i
          })
        },
        G = () => {
          const [e, s] = (0, r.useState)("companyName"), [i, n] = (0, r.useState)("department"), [a, t] = (0, r.useState)(null), [o, c] = (0, r.useState)(null), [d, u] = (0, r.useState)(null), [m, f] = (0, r.useState)(null), [k, b] = (0, r.useState)(!0), {
            refetch: h
          } = (0, l.useQuery)(q.OpeningsData, {
            skip: !0
          }), [g] = (0, p.useSearchParams)(), v = g.get("q"), w = (0, r.useRef)(), j = (0, p.useNavigate)(), x = g.get("department"), N = g.get("q"), C = e => {
            s(e), n("companyName" === e ? "department" : "companyName")
          }, [R, z] = (0, r.useState)(!1);
          return (0, r.useEffect)((() => {
            z(!1), setTimeout((() => {
              z(!0)
            }), 1e3)
          }), [k, e]), (0, r.useEffect)((() => {
            u({
              department: x ?? null,
              query: N ?? null
            })
          }), [x, N]), (0, r.useEffect)((() => {
            d && (c(null), f(null), b(!0), (async () => {
              try {
                const {
                  data: e
                } = await h(d);
                c(e.jobsPositionList ?? [])
              } catch (e) {
                f(String(e))
              }
            })(), b(!1))
          }), [d]), (0, r.useEffect)((() => {
            o && t((e => {
              let {
                positions: s,
                primary: i,
                secondary: n,
                rendered: a
              } = e;
              return (0, _.jsx)("div", {
                className: [D.heirarchy, a ? D.heirarchyRendered : ""].join(" "),
                children: F({
                  key: i,
                  positions: s
                }).map((e => {
                  let {
                    [i]: s, positions: a
                  } = e;
                  return (0, _.jsxs)("div", {
                    className: D.primaryGrid,
                    children: [(0, _.jsx)("h3", {
                      className: [D.primaryHeaderH, "companyName" === i ? D.primaryIsCompany : ""].join(" "),
                      children: (0, _.jsx)(y, {
                        to: "companyName" === i ? `../offices/${a[0].company.seo_url}` : `?department=${escape(a[0].department)}`,
                        children: s
                      })
                    }), F({
                      key: n,
                      positions: a
                    }).map((e => {
                      let {
                        [n]: i, positions: a
                      } = e;
                      return (0, _.jsx)(S, {
                        positions: a,
                        title: i,
                        headType: n,
                        openingsLinkRelative: "",
                        positionLinkRelative: "./",
                        officesLinkRelative: "../"
                      }, `${s}-${i}`)
                    }))]
                  }, s)
                }))
              })
            })({
              positions: o,
              primary: e,
              secondary: i,
              rendered: R
            }))
          }), [o, e, i, R]), (0, _.jsxs)("div", {
            className: D.openings,
            "data-testid": "careers-openings",
            children: [m || "", !m && k ? "Searching..." : "", m || k || !o || !x && !N ? "" : (0, _.jsxs)("p", {
              className: D.searchHeader,
              children: [`${o.length} positions found ${N?` matching "${N}"`:""}${x?` in the ${x} department`:""}.`, (0, _.jsx)(y, {
                to: "./",
                children: (0, _.jsx)("button", {
                  className: D.viewOpeningsButton,
                  type: "button",
                  children: "View All Openings"
                })
              })]
            }), (0, _.jsxs)("div", {
              className: D.queryDiv,
              children: [!k && (0, _.jsx)("form", {
                onSubmit: e => (e => {
                  e.preventDefault();
                  const s = w.current.value ?? null,
                    i = "/careers/openings" + (s ? `?q=${s}` : "");
                  document.activeElement.blur(), j(i)
                })(e),
                children: (0, _.jsx)("input", {
                  placeholder: "Search",
                  ref: w,
                  defaultValue: v,
                  enterKeyHint: "search"
                })
              }), o?.length && (0, _.jsxs)("div", {
                className: D.sort,
                children: [(0, _.jsx)("span", {
                  children: "Sort by:"
                }), (0, _.jsxs)("div", {
                  className: D.sortButtons,
                  children: [(0, _.jsx)("button", {
                    className: "companyName" === e ? D.activeSort : "",
                    onClick: () => C("companyName"),
                    type: "button",
                    children: "Location"
                  }), (0, _.jsx)("button", {
                    className: "department" === e ? D.activeSort : "",
                    onClick: () => C("department"),
                    type: "button",
                    children: "Department"
                  })]
                })]
              })]
            }), o?.length && a ? a : ""]
          })
        };
      class M extends r.Component {
        constructor(e) {
          super(e), this.state = {
            header: e.header ?? null,
            hidden: e.hidden ?? !1
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
          return this?.state?.error?.message && this?.state?.hidden ? null : this?.state?.error?.message ? (0, _.jsxs)("div", {
            className: "rockstargames-sites-careersf903c45f8ecc18bd55f702e202f3763a",
            children: [(0, _.jsx)("h1", {
              children: this.state.header ?? "An error occurred."
            }), (0, _.jsx)("span", {
              children: this.state.error.message
            })]
          }) : this.props.children
        }
      }
      var L = i(6908);
      const O = "rockstargames-sites-careersd609da80d38334b92bc11246a08e7e4d",
        I = "rockstargames-sites-careersa675aaaf52c42c894d21af4fd47c1658",
        V = e => {
          let {
            position: s
          } = e;
          return (0, _.jsxs)(_.Fragment, {
            children: [(0, _.jsx)(y, {
              to: s.apply_href,
              target: "_blank",
              className: "rockstargames-sites-careersdbb902e05f92f9e0488c3bfa0a389510",
              children: "Apply now"
            }), (0, _.jsxs)("footer", {
              className: "rockstargames-sites-careersd3ccb05b214f2af996e2f515fb0aa3be",
              children: [(0, _.jsxs)(y, {
                to: `../offices/${s.company.seo_url}`,
                className: I,
                children: ["See all", (0, _.jsx)("b", {
                  children: s.company.name
                }), "positions"]
              }), (0, _.jsxs)(y, {
                to: `../openings?department=${encodeURIComponent(s.department)}`,
                className: I,
                children: ["See all", (0, _.jsx)("b", {
                  children: s.department
                }), "positions"]
              })]
            })]
          })
        },
        H = function(e) {
          let s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
            i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          return function(n) {
            return (0, _.jsx)(M, {
              header: s,
              hidden: i,
              children: (0, _.jsx)(e, {
                ...n
              })
            })
          }
        }((() => {
          const {
            position_id: e
          } = (0, p.useParams)(), {
            data: s
          } = (0, l.useQuery)(L.PositionData, {
            variables: {
              positionId: Number(e)
            }
          });
          if (!s) return (0, _.jsx)("div", {
            className: O,
            children: "Loading..."
          });
          const {
            jobsPosition: i
          } = s;
          return (0, _.jsxs)("div", {
            className: O,
            "data-testid": "career-position",
            children: [(0, _.jsxs)("header", {
              className: "rockstargames-sites-careersb6ff0681d1861708f1329d3c69c33457",
              children: [(0, _.jsxs)("div", {
                className: "rockstargames-sites-careersc00e9b9bac3ddb18cb0e1bbeeb26d94c",
                children: [(0, _.jsx)(y, {
                  to: `../offices/${i.company.seo_url}`,
                  children: i.company.name
                }), (0, _.jsx)(y, {
                  to: `../openings?department=${encodeURIComponent(i.department)}`,
                  children: i.department
                })]
              }), (0, _.jsx)("h1", {
                children: i.title
              })]
            }), (0, _.jsx)("div", {
              className: "rockstargames-sites-careersc64e7796247d489417e8ec65a5b59e3d",
              dangerouslySetInnerHTML: {
                __html: i.description
              }
            }), (0, _.jsx)(V, {
              position: i
            })]
          })
        }), "That position was not found."),
        $ = () => (0, _.jsxs)("svg", {
          width: "100",
          height: "92",
          viewBox: "0 0 100 92",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: [(0, _.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M98.1426 88.6095C98.0342 88.5468 97.8592 88.5168 97.6074 88.5168H97.2245V89.4122H97.6268C97.8157 89.4122 97.9592 89.3946 98.0546 89.354C98.2301 89.2908 98.3162 89.1603 98.3162 88.9712C98.3162 88.7894 98.2588 88.6713 98.1426 88.6095ZM97.6634 88.2012C97.9791 88.2012 98.2102 88.2317 98.3551 88.2935C98.6176 88.4024 98.7453 88.6127 98.7453 88.9283C98.7453 89.1511 98.6694 89.3185 98.4995 89.4251C98.4129 89.4772 98.2907 89.5206 98.137 89.5446C98.3342 89.5745 98.4759 89.6548 98.5676 89.7877C98.6583 89.9205 98.7064 90.0478 98.7064 90.1724V90.3546C98.7064 90.4137 98.7111 90.4755 98.7129 90.5433C98.7129 90.6097 98.7222 90.6498 98.7282 90.6706L98.7453 90.7024H98.3352C98.3342 90.6969 98.3342 90.6849 98.3301 90.6808C98.3301 90.6706 98.3264 90.6632 98.3264 90.6498L98.3162 90.5719V90.3763C98.3162 90.0875 98.2375 89.8938 98.0731 89.8047C97.9791 89.7521 97.8157 89.724 97.5791 89.724H97.2245V90.7024H96.7842V88.2012H97.6634ZM96.3088 88.073C95.9291 88.4568 95.7384 88.92 95.7384 89.4597C95.7384 90.0049 95.9245 90.4695 96.3088 90.8528C96.6944 91.2389 97.1537 91.4308 97.7074 91.4308C98.256 91.4308 98.7222 91.2389 99.1051 90.8528C99.4842 90.4695 99.6764 90.0049 99.6764 89.4597C99.6764 88.92 99.4842 88.4568 99.1051 88.073C98.7171 87.6915 98.256 87.4982 97.7074 87.4982C97.1639 87.4982 96.6953 87.6915 96.3088 88.073ZM99.3277 91.0733C98.8842 91.5226 98.3426 91.7454 97.7074 91.7454C97.0727 91.7454 96.531 91.5226 96.0916 91.0733C95.649 90.6291 95.4236 90.0917 95.4236 89.4583C95.4236 88.8305 95.649 88.2935 96.094 87.8479C96.5398 87.406 97.0777 87.185 97.7074 87.185C98.3426 87.185 98.8842 87.406 99.3277 87.8479C99.7759 88.2935 100 88.8277 100 89.4583C100 90.0875 99.7759 90.6291 99.3277 91.0733Z",
            fill: "#FFFFFE"
          }), (0, _.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M98.0292 74.7408C98.0292 83.2121 91.1838 89.8466 82.4426 89.8466H17.5532C8.81667 89.8466 1.96898 83.2121 1.96898 74.7408V17.303C1.96898 8.8026 8.8875 2.14784 17.7139 2.14784H82.6065C91.2537 2.14784 98.0292 8.8026 98.0292 17.303V74.7408ZM82.6065 0.184998H17.7139C7.94722 0.184998 0 7.868 0 17.3067V74.744C0 84.3147 7.70741 91.8117 17.5532 91.8117H82.4426C92.2884 91.8117 100 84.3147 100 74.744V17.3067C100 7.707 92.362 0.184998 82.6065 0.184998Z",
            fill: "black"
          }), (0, _.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M82.6065 2.14782H17.7139C8.88751 2.14782 1.96899 8.80258 1.96899 17.303V74.7407C1.96899 83.2121 8.81668 89.8466 17.5533 89.8466H82.4426C91.1838 89.8466 98.0292 83.2121 98.0292 74.7407V17.303C98.0292 8.80258 91.2537 2.14782 82.6065 2.14782Z",
            fill: "#FCAF17"
          }), (0, _.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M50.094 33.3356H42.238L44.12 24.3956H51.4292C54.0315 24.3956 56.738 25.0695 56.738 28.2428C56.738 32.2423 53.6556 33.3356 50.094 33.3356ZM85.8769 54.7128H73.3487L71.3616 42.2673L64.0195 54.6257H62.6464C61.8139 53.1952 61.4834 51.1004 61.4834 49.8189C61.4834 47.6927 61.6371 45.6187 61.6371 42.9215C61.6371 39.3427 60.5815 37.4223 57.7639 36.7474V36.6408C63.7561 35.8114 66.4723 31.8613 66.4723 26.3003C66.4723 18.4 61.1973 16.6867 54.2857 16.6867H35.6866L27.8269 53.7736H37.7102L40.5709 40.2791H47.1408C50.645 40.2791 52.0783 41.9887 52.0783 45.258C52.0783 47.7453 51.8186 49.7146 51.8186 51.6309C51.8186 52.3394 51.9792 53.9863 52.4598 54.6257C52.4542 54.6257 59.6038 62.1375 59.6038 62.1375L53.457 75.3068C53.457 75.3068 53.457 75.3068 66.6033 67.5241L76.3991 75.0231L74.5709 62.5979L85.8769 54.7128Z",
            fill: "black"
          }), (0, _.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M80.1088 56.5253H71.7944L70.3588 47.5147L65.0579 56.4372H56.6782L61.775 61.7855L57.5833 70.7537L66.7398 65.3366L73.9523 70.863L72.6129 61.7514L80.1088 56.5253Z",
            fill: "white"
          })]
        }),
        B = "rockstargames-sites-careersd7320ade289756fc8512a8cb4fd1e271",
        J = "rockstargames-sites-careerseb5fe5fd94a29526f4335437ca1b9cc9",
        U = "rockstargames-sites-careersdfdb9cd846ad174704743fe5d9ce1f51",
        K = e => {
          let {
            label: s,
            clarification: i,
            name: n,
            placeholder: a,
            type: t = "text",
            required: r = !0,
            onChange: o
          } = e;
          return r ? (0, _.jsxs)(_.Fragment, {
            children: [(0, _.jsxs)("label", {
              htmlFor: s,
              className: B,
              children: [s, (0, _.jsx)("span", {
                className: "rockstargames-sites-careersc856ba13adaa342ef50d10c65eba2b3b",
                children: "*"
              })]
            }), i && (0, _.jsx)("span", {
              className: J,
              children: i
            }), (0, _.jsx)("input", {
              type: t,
              name: n,
              placeholder: a,
              className: U,
              required: !0,
              onChange: o
            })]
          }) : (0, _.jsxs)(_.Fragment, {
            children: [(0, _.jsx)("label", {
              htmlFor: s,
              className: B,
              children: s
            }), i && (0, _.jsx)("span", {
              className: J,
              children: i
            }), (0, _.jsx)("input", {
              type: t,
              name: s,
              placeholder: a,
              className: U,
              onChange: o
            })]
          })
        };
      var W = i(343),
        Y = i.n(W);
      const Z = e => {
          let {
            label: s,
            clarification: i,
            name: n,
            data: a,
            placeholder: t,
            required: o = !0,
            update: c,
            isMulti: l
          } = e;
          const d = (0, r.useRef)(),
            [u, m] = (0, r.useState)("");
          return (0, _.jsxs)(_.Fragment, {
            children: [(0, _.jsxs)("label", {
              htmlFor: n,
              className: "rockstargames-sites-careersec0f6c66c9a7e7b2f5e23c7d2c57e2d5",
              children: [s, o && (0, _.jsx)("span", {
                className: "rockstargames-sites-careersa0dca8a51f5263442ee347a5ff9a7d59",
                children: "*"
              })]
            }), i && (0, _.jsx)("span", {
              className: "rockstargames-sites-careerse0502b8009cf94dce559b89e1d6deb84",
              children: i
            }), (0, _.jsx)(Y(), {
              className: "rockstargames-sites-careersaad57dc707acdff4b20fadf065eb7a22",
              isClearable: !0,
              isSearchable: !0,
              styles: {
                placeholder: e => ({
                  ...e,
                  color: "#747474",
                  opacity: "0.8"
                })
              },
              name: n,
              placeholder: t,
              isOptionDisabled: e => "Loading..." === e.label,
              options: a ?? [{
                value: void 0,
                label: "Loading..."
              }],
              ref: d,
              onChange: e => (e => {
                m(e || ""), c(e)
              })(e),
              isMulti: l || !1
            }), o && (0, _.jsx)("input", {
              tabIndex: -1,
              autoComplete: "off",
              style: {
                opacity: 0,
                width: "100%",
                height: 0,
                position: "absolute",
                padding: 0,
                border: 0
              },
              onChange: () => null,
              value: u,
              onFocus: () => {
                d.current && d.current.focus()
              },
              required: o
            })]
          })
        },
        Q = e => {
          let {
            data: s,
            update: i
          } = e;
          const [n, a] = (0, r.useState)(Array(s?.length).fill(!1)), [t, o] = (0, r.useState)(!1);
          (0, r.useEffect)((() => {
            3 === n.filter((e => e)).length ? o(!0) : t && o(!1);
            const e = s?.custom_field_options?.filter(((e, s) => n[s])).map((e => {
              let {
                value: s
              } = e;
              return s
            }));
            i && i({
              selectedSkills: e
            })
          }), [n]);
          const c = s?.custom_field_options?.map(((e, s) => {
            let {
              label: i,
              value: r
            } = e;
            return (0, _.jsxs)("div", {
              className: "rockstargames-sites-careersd2a73e2d3255d44d41f077f562949f0f",
              children: [(0, _.jsx)("input", {
                type: "checkbox",
                id: i.toLowerCase(),
                name: i.toLowerCase(),
                value: r,
                defaultChecked: n[s],
                onClick: () => (e => {
                  if (n[e]) {
                    const s = [...n];
                    return s[e] = !1, void a([...s])
                  }
                  if (!n[e] && 3 === n.filter((e => e)).length) return;
                  const s = [...n];
                  s[e] = !0, a([...s])
                })(s),
                disabled: !n[s] && t
              }), (0, _.jsx)("label", {
                className: "rockstargames-sites-careersf2b644d433a5fc2109297c8fa997e82c",
                htmlFor: i.toLowerCase(),
                children: i
              })]
            }, i.toLowerCase())
          }));
          return (0, _.jsxs)(_.Fragment, {
            children: [(0, _.jsxs)("legend", {
              className: "rockstargames-sites-careerscd7f1583af3e41d0c10d8fd0675867a2",
              children: ["Which option(s) best represents your strongest skillset? Choose up to 3", (0, _.jsx)("span", {
                className: "rockstargames-sites-careersda5bb73168905a55b819e071b8957d62",
                children: "*"
              })]
            }), (0, _.jsx)("div", {
              className: "rockstargames-sites-careersd099082f2f305ec5f3abeb119e5d6fa4",
              children: c
            })]
          })
        },
        X = "rockstargames-sites-careersd5506aa3a5b4592eb47ac7c0a60fedcc",
        ee = e => {
          let {
            label: s,
            seasonsData: i,
            required: n = !0,
            updateSeason: a,
            updateYear: t
          } = e;
          const o = (0, r.useRef)(),
            c = (0, r.useRef)(),
            [l, d] = (0, r.useState)(""),
            [u, m] = (0, r.useState)(""),
            p = function() {
              let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 10;
              const s = (new Date).getFullYear(),
                i = [];
              for (let n = s + e; n >= s - e; n -= 1) i.push({
                label: `${n}`,
                value: n
              });
              return i
            }(),
            f = {
              opacity: 0,
              width: "100%",
              height: 0,
              position: "absolute",
              padding: 0,
              border: 0
            };
          return (0, _.jsxs)(_.Fragment, {
            children: [(0, _.jsxs)("label", {
              className: "rockstargames-sites-careersbc12b10cc755ff4301d52a74a82ccc14",
              htmlFor: "anticipated_graduation",
              children: [s, n && (0, _.jsx)("span", {
                className: "rockstargames-sites-careersa185d14e06ab300bd9abdf3be2a9223e",
                children: "*"
              })]
            }), (0, _.jsxs)("div", {
              className: "rockstargames-sites-careersa64250e56c3da9b4e8d35dc6a12c64d5",
              children: [(0, _.jsx)(Y(), {
                className: X,
                isClearable: !0,
                isSearchable: !0,
                styles: {
                  placeholder: e => ({
                    ...e,
                    color: "#747474",
                    opacity: "0.8"
                  })
                },
                name: "anticipated_graduation_season",
                placeholder: "Select season",
                options: i,
                ref: o,
                onChange: e => (e => {
                  a(e), d(e ?? "")
                })(e)
              }), (0, _.jsx)(Y(), {
                className: X,
                isClearable: !0,
                isSearchable: !0,
                styles: {
                  placeholder: e => ({
                    ...e,
                    color: "#747474",
                    opacity: "0.8"
                  })
                },
                name: "anticipated_graduation_year",
                placeholder: "Select year",
                options: p,
                ref: c,
                onChange: e => (e => {
                  t(e), m(e ?? "")
                })(e)
              }), n && (0, _.jsxs)(_.Fragment, {
                children: [(0, _.jsx)("input", {
                  tabIndex: -1,
                  autoComplete: "off",
                  style: f,
                  onChange: () => null,
                  value: l,
                  onFocus: () => {
                    o.current && o.current.focus()
                  },
                  required: n
                }), (0, _.jsx)("input", {
                  tabIndex: -1,
                  autoComplete: "off",
                  style: f,
                  onChange: () => null,
                  value: u,
                  onFocus: () => {
                    c.current && c.current.focus()
                  },
                  required: n
                })]
              })]
            })]
          })
        };
      var se = i(2919);
      const ie = "rockstargames-sites-careerscc195f280984da7e156baea83a20e7dc",
        ne = () => (0, _.jsxs)(_.Fragment, {
          children: [(0, _.jsx)($, {}), (0, _.jsxs)("div", {
            className: "rockstargames-sites-careersb500b0ca7184e89c9d09bf1c6ce62525",
            children: [(0, _.jsxs)("p", {
              className: "rockstargames-sites-careersd7d667278bcf29d3327fef5ffcb8659a",
              children: ["Thank you for your interest in Rockstar Games. If you'd like us to stay in touch with you regarding future opportunities, please submit your information below. To view our current job openings, please", " ", (0, _.jsx)(y, {
                to: "../openings",
                className: ie,
                children: "visit our careers site"
              }), "."]
            }), (0, _.jsxs)("p", {
              className: "rockstargames-sites-careersb8a116287e1d33d4f9f2f44ebccec4dd",
              children: [(0, _.jsx)("span", {
                className: "rockstargames-sites-careersabcf7c17c455744ab02384e56efd1a7f",
                children: "*"
              }), "indicates a required field"]
            })]
          })]
        }),
        ae = () => (0, _.jsxs)("p", {
          className: "rockstargames-sites-careersf740c9ee6bc2d9d32ea69b59df0678e6",
          children: ["For all information on how we use your personal data please see our", " ", (0, _.jsx)(y, {
            to: "https://www.rockstargames.com/careers-privacy",
            className: ie,
            children: "applicant privacy policy"
          }), "."]
        }),
        te = () => (0, _.jsxs)("span", {
          children: ["Thank you for your interest in Rockstar Games. Your information has submitted successfully. To view our current job openings, please", " ", (0, _.jsx)(y, {
            to: "../openings",
            className: ie,
            children: "visit our careers site"
          }), "."]
        }),
        re = () => {
          const [e, s] = (0, r.useState)(null), [i, a] = (0, r.useState)({}), [t, o] = (0, r.useState)(!1), [c, d] = (0, r.useState)(!1), [u, m] = (0, r.useState)(""), [p, f] = (0, r.useState)(!1), [k, b] = (0, r.useState)(!1), [h, g] = (0, r.useState)(!1), {
            data: v
          } = (0, l.useQuery)(se.greenhouseData), [y] = (0, l.useMutation)(se.AddProspect), w = n => {
            let {
              key: a,
              value: t
            } = n;
            const r = [...e?.custom_fields?.filter((e => e.id && e.id !== i[a]?.id)) ?? []];
            j(i[a]?.id, t), s({
              ...e,
              custom_fields: [...r, {
                id: i[a]?.id,
                value: t
              }]
            })
          }, j = (e, s) => {
            const n = i.university_sponsored_event?.id,
              a = i.university_sponsored_event?.custom_field_options.find((e => "Project Review" === e.label)).value;
            n && e === n && (a && s === a ? d(!0) : (d(!1), w({
              key: "project_review_game_name",
              value: void 0
            })))
          };
          (0, r.useEffect)((() => {
            if (!v) return;
            const {
              greenhouseApiCustomFields: e
            } = v;
            a({
              anticipated_graduation_season: e.find((e => {
                let {
                  name_key: s
                } = e;
                return "anticipated_graduation_season" === s
              })),
              anticipated_graduation_year: e.find((e => {
                let {
                  name_key: s
                } = e;
                return "anticipated_graduation_year" === s
              })),
              degree: e.find((e => {
                let {
                  name_key: s
                } = e;
                return "degree__university_" === s
              })),
              discipline: e.find((e => {
                let {
                  name_key: s
                } = e;
                return "current_major__university__candidate_1663010161.6894388" === s
              })),
              school_name: e.find((e => {
                let {
                  name_key: s
                } = e;
                return "school_name" === s
              })),
              skills: e.find((e => {
                let {
                  name_key: s
                } = e;
                return "skills" === s
              })),
              university_sponsored_event: e.find((e => {
                let {
                  name_key: s
                } = e;
                return "university_sponsored_event" === s
              })),
              project_review_game_name: e.find((e => {
                let {
                  name_key: s
                } = e;
                return "project_review_game_name" === s
              })),
              preferred_work_location: e.find((e => {
                let {
                  name_key: s
                } = e;
                return "preferred_location__university_multi_" === s
              })),
              attended_university_event: e.find((e => {
                let {
                  name_key: s
                } = e;
                return "attended_university_event___university_" === s
              }))
            })
          }), [v]), (0, r.useEffect)((() => {
            v && (t || w({
              key: "university_sponsored_event",
              value: void 0
            }))
          }), [t]);
          const x = (0, r.useCallback)((e => {
            m(e)
          }), []);
          return v || i ? k ? (0, _.jsx)(te, {}) : (0, _.jsxs)("form", {
            className: "rockstargames-sites-careersd592d267686feae7252dba7a67902673",
            onSubmit: s => (async s => {
              s.preventDefault();
              const i = {
                recaptcha_token: u,
                data: e
              };
              if (i.recaptcha_token) try {
                g(!0), await y({
                  variables: i
                }), f((e => !e)), g(!1), b(!0)
              } catch (e) {
                console.error(e)
              }
            })(s),
            "data-testid": "careers-register",
            children: [(0, _.jsx)(ne, {}), (0, _.jsx)(K, {
              label: "First Name",
              placeholder: "Enter first name",
              name: "first_name",
              onChange: i => s({
                ...e,
                first_name: i.target.value
              })
            }), (0, _.jsx)(K, {
              label: "Last Name",
              placeholder: "Enter last name",
              name: "last_name",
              onChange: i => s({
                ...e,
                last_name: i.target.value
              })
            }), (0, _.jsx)(K, {
              label: "Email Address",
              placeholder: "Enter email address",
              name: "email",
              type: "email_addresses",
              onChange: i => s({
                ...e,
                email_addresses: [{
                  type: "personal",
                  value: i.target.value
                }]
              })
            }), (0, _.jsx)(Z, {
              label: "Please indicate your preferred studio location.",
              clarification: "Note: Please only select locations where you currently have a legal right to work.",
              placeholder: "Select your preferred work location",
              name: "preferred_location__university_multi_",
              data: i.preferred_work_location?.custom_field_options,
              update: e => {
                w({
                  key: "preferred_work_location",
                  value: e.length && e[0].value ? e.map((e => {
                    let {
                      value: s
                    } = e;
                    return s
                  })) : []
                })
              },
              isMulti: !0
            }), (0, _.jsx)(Z, {
              label: "What school do you currently attend?",
              placeholder: "Select your school",
              name: "school_name",
              data: i.school_name?.custom_field_options,
              update: i => i ? s({
                ...e,
                educations: [{
                  ...e?.educations?.[0] ?? {},
                  school_id: i.value
                }]
              }) : null
            }), (0, _.jsx)(K, {
              label: i.discipline?.description,
              placeholder: "Enter major/course subject",
              name: "discipline",
              onChange: e => w({
                key: "discipline",
                value: e.target.value
              })
            }), (0, _.jsx)(Z, {
              label: i.degree?.description,
              placeholder: "Select your degree level",
              name: "degree",
              data: i.degree?.custom_field_options,
              update: e => w({
                key: "degree",
                value: e ? e.value : void 0
              })
            }), (0, _.jsx)(ee, {
              label: "When do you anticipate graduating?",
              seasonsData: i.anticipated_graduation_season?.custom_field_options,
              updateSeason: e => w({
                key: "anticipated_graduation_season",
                value: e ? e.value : void 0
              }),
              updateYear: e => w({
                key: "anticipated_graduation_year",
                value: e ? e.value : void 0
              })
            }), (0, _.jsx)(Z, {
              label: "Have you recently attended a university-sponsored event with Rockstar Games?",
              placeholder: "Select yes or no",
              name: "attended_university_event",
              data: i.attended_university_event?.custom_field_options,
              update: e => {
                o(!!e && "Yes" === e.label), w({
                  key: "attended_university_event",
                  value: e ? e.value : void 0
                })
              }
            }), t && (0, _.jsx)(Z, {
              label: "What event did you attend?",
              data: i.university_sponsored_event?.custom_field_options,
              name: "university_sponsored_event",
              placeholder: "Select a Rockstar event",
              update: e => w({
                key: "university_sponsored_event",
                value: e ? e.value : void 0
              })
            }), t && c && (0, _.jsx)(K, {
              label: "What is the game you are working on?",
              placeholder: "Enter game name",
              name: "project_review_game_name",
              onChange: e => w({
                key: "project_review_game_name",
                value: e ? e?.target?.value : void 0
              })
            }), (0, _.jsx)(Q, {
              data: i.skills,
              update: e => {
                let {
                  selectedSkills: s
                } = e;
                return w({
                  key: "skills",
                  value: s
                })
              }
            }), (0, _.jsx)(K, {
              label: "Please submit a link to your website/portfolio.",
              placeholder: "Enter URL",
              name: "website_addresses",
              required: !1,
              type: "url",
              onChange: i => s({
                ...e,
                website_addresses: [{
                  type: "personal",
                  value: i.target.value
                }]
              })
            }), (0, _.jsx)(ae, {}), (0, _.jsx)(n.GoogleReCaptcha, {
              onVerify: x,
              refreshReCaptcha: p
            }), (0, _.jsx)("input", {
              type: "submit",
              className: "rockstargames-sites-careersa031cdac97dbcae4203ebae66bcc7411",
              disabled: h
            })]
          }) : "Loading..."
        },
        oe = () => {
          const e = [{
            path: "/",
            element: (0, _.jsx)(N, {})
          }, {
            path: "/accessibility",
            element: (0, _.jsx)(k, {})
          }, {
            path: "/offices/:office_seo",
            element: (0, _.jsx)(T, {})
          }, {
            path: "/openings",
            element: (0, _.jsx)(G, {})
          }, {
            path: "/openings/position/:position_id",
            element: (0, _.jsx)(H, {})
          }, {
            path: "/register",
            element: (0, _.jsx)(re, {})
          }];
          return (0, p.useRoutes)(e)
        },
        ce = () => (0, _.jsx)(n.GoogleReCaptchaProvider, {
          reCaptchaKey: "6LcY_tohAAAAACJJTRGxlkVO89ud1jP0WbeHftvL",
          children: (0, _.jsx)("div", {
            className: "rockstargames-sites-careersfcabccb77d3afc104ec677b683d15f2d",
            children: (0, _.jsxs)("div", {
              className: "rockstargames-sites-careersf5df5c42f1b4ecb3eea339f0101d7bc9",
              children: [(0, _.jsx)(m, {}), (0, _.jsx)("div", {
                className: "rockstargames-sites-careersa089b814cf413051c57d2f057374d046",
                children: (0, _.jsx)(oe, {})
              })]
            })
          })
        })
    },
    9460: e => {
      var s = {
        kind: "Document",
        definitions: [{
          kind: "OperationDefinition",
          operation: "mutation",
          name: {
            kind: "Name",
            value: "ContactUs"
          },
          variableDefinitions: [{
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "data"
              }
            },
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "RockstarGames_Jobs_Form_ContactForm_i"
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
                value: "recaptcha_token"
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
                value: "careersContactUs"
              },
              arguments: [{
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "data"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "data"
                  }
                }
              }, {
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "recaptcha_token"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "recaptcha_token"
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
                    value: "sent"
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
          end: 178
        }
      };

      function i(e, s) {
        if ("FragmentSpread" === e.kind) s.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var n = e.type;
          "NamedType" === n.kind && s.add(n.name.value)
        }
        e.selectionSet && e.selectionSet.selections.forEach((function(e) {
          i(e, s)
        })), e.variableDefinitions && e.variableDefinitions.forEach((function(e) {
          i(e, s)
        })), e.definitions && e.definitions.forEach((function(e) {
          i(e, s)
        }))
      }
      s.loc.source = {
        body: "mutation ContactUs($data: RockstarGames_Jobs_Form_ContactForm_i!, $recaptcha_token: String!) {\n  careersContactUs(data: $data, recaptcha_token: $recaptcha_token) {\n    sent\n  }\n}",
        name: "GraphQL request",
        locationOffset: {
          line: 1,
          column: 1
        }
      };
      var n = {};

      function a(e, s) {
        for (var i = 0; i < e.definitions.length; i++) {
          var n = e.definitions[i];
          if (n.name && n.name.value == s) return n
        }
      }
      s.definitions.forEach((function(e) {
        if (e.name) {
          var s = new Set;
          i(e, s), n[e.name.value] = s
        }
      })), e.exports = s, e.exports.ContactUs = function(e, s) {
        var i = {
          kind: e.kind,
          definitions: [a(e, s)]
        };
        e.hasOwnProperty("loc") && (i.loc = e.loc);
        var t = n[s] || new Set,
          r = new Set,
          o = new Set;
        for (t.forEach((function(e) {
            o.add(e)
          })); o.size > 0;) {
          var c = o;
          o = new Set, c.forEach((function(e) {
            r.has(e) || (r.add(e), (n[e] || new Set).forEach((function(e) {
              o.add(e)
            })))
          }))
        }
        return r.forEach((function(s) {
          var n = a(e, s);
          n && i.definitions.push(n)
        })), i
      }(s, "ContactUs")
    },
    7768: e => {
      var s = {
        kind: "Document",
        definitions: [{
          kind: "OperationDefinition",
          operation: "query",
          name: {
            kind: "Name",
            value: "HomeData"
          },
          variableDefinitions: [],
          directives: [],
          selectionSet: {
            kind: "SelectionSet",
            selections: [{
              kind: "Field",
              name: {
                kind: "Name",
                value: "jobsOffices"
              },
              arguments: [],
              directives: [],
              selectionSet: {
                kind: "SelectionSet",
                selections: [{
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "name"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "location"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "seo_url"
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
          end: 89
        }
      };

      function i(e, s) {
        if ("FragmentSpread" === e.kind) s.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var n = e.type;
          "NamedType" === n.kind && s.add(n.name.value)
        }
        e.selectionSet && e.selectionSet.selections.forEach((function(e) {
          i(e, s)
        })), e.variableDefinitions && e.variableDefinitions.forEach((function(e) {
          i(e, s)
        })), e.definitions && e.definitions.forEach((function(e) {
          i(e, s)
        }))
      }
      s.loc.source = {
        body: "query HomeData {\n    jobsOffices {\n        name\n        location\n        seo_url\n    }\n}\n",
        name: "GraphQL request",
        locationOffset: {
          line: 1,
          column: 1
        }
      };
      var n = {};

      function a(e, s) {
        for (var i = 0; i < e.definitions.length; i++) {
          var n = e.definitions[i];
          if (n.name && n.name.value == s) return n
        }
      }
      s.definitions.forEach((function(e) {
        if (e.name) {
          var s = new Set;
          i(e, s), n[e.name.value] = s
        }
      })), e.exports = s, e.exports.HomeData = function(e, s) {
        var i = {
          kind: e.kind,
          definitions: [a(e, s)]
        };
        e.hasOwnProperty("loc") && (i.loc = e.loc);
        var t = n[s] || new Set,
          r = new Set,
          o = new Set;
        for (t.forEach((function(e) {
            o.add(e)
          })); o.size > 0;) {
          var c = o;
          o = new Set, c.forEach((function(e) {
            r.has(e) || (r.add(e), (n[e] || new Set).forEach((function(e) {
              o.add(e)
            })))
          }))
        }
        return r.forEach((function(s) {
          var n = a(e, s);
          n && i.definitions.push(n)
        })), i
      }(s, "HomeData")
    },
    4329: e => {
      var s = {
        kind: "Document",
        definitions: [{
          kind: "OperationDefinition",
          operation: "query",
          name: {
            kind: "Name",
            value: "OfficeData"
          },
          variableDefinitions: [{
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "companySlug"
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
                value: "jobsOffices"
              },
              arguments: [{
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "company_slug"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "companySlug"
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
                    value: "name"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "location"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "seo_url"
                  },
                  arguments: [],
                  directives: []
                }]
              }
            }, {
              kind: "Field",
              name: {
                kind: "Name",
                value: "jobsPositionList"
              },
              arguments: [{
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "company_slug"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "companySlug"
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
                    value: "department"
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
                }]
              }
            }]
          }
        }],
        loc: {
          start: 0,
          end: 243
        }
      };

      function i(e, s) {
        if ("FragmentSpread" === e.kind) s.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var n = e.type;
          "NamedType" === n.kind && s.add(n.name.value)
        }
        e.selectionSet && e.selectionSet.selections.forEach((function(e) {
          i(e, s)
        })), e.variableDefinitions && e.variableDefinitions.forEach((function(e) {
          i(e, s)
        })), e.definitions && e.definitions.forEach((function(e) {
          i(e, s)
        }))
      }
      s.loc.source = {
        body: "query OfficeData($companySlug: String!) {\n    jobsOffices(company_slug: $companySlug) {\n        name\n        location\n        seo_url\n    }\n    jobsPositionList(company_slug: $companySlug) {\n        department\n        id\n        title\n    }\n}\n",
        name: "GraphQL request",
        locationOffset: {
          line: 1,
          column: 1
        }
      };
      var n = {};

      function a(e, s) {
        for (var i = 0; i < e.definitions.length; i++) {
          var n = e.definitions[i];
          if (n.name && n.name.value == s) return n
        }
      }
      s.definitions.forEach((function(e) {
        if (e.name) {
          var s = new Set;
          i(e, s), n[e.name.value] = s
        }
      })), e.exports = s, e.exports.OfficeData = function(e, s) {
        var i = {
          kind: e.kind,
          definitions: [a(e, s)]
        };
        e.hasOwnProperty("loc") && (i.loc = e.loc);
        var t = n[s] || new Set,
          r = new Set,
          o = new Set;
        for (t.forEach((function(e) {
            o.add(e)
          })); o.size > 0;) {
          var c = o;
          o = new Set, c.forEach((function(e) {
            r.has(e) || (r.add(e), (n[e] || new Set).forEach((function(e) {
              o.add(e)
            })))
          }))
        }
        return r.forEach((function(s) {
          var n = a(e, s);
          n && i.definitions.push(n)
        })), i
      }(s, "OfficeData")
    },
    5094: e => {
      var s = {
        kind: "Document",
        definitions: [{
          kind: "OperationDefinition",
          operation: "query",
          name: {
            kind: "Name",
            value: "OpeningsData"
          },
          variableDefinitions: [{
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "department"
              }
            },
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String"
              }
            },
            directives: []
          }, {
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "query"
              }
            },
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String"
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
                value: "jobsPositionList"
              },
              arguments: [{
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "department"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "department"
                  }
                }
              }, {
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "q"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "query"
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
                    value: "company"
                  },
                  arguments: [],
                  directives: [],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "seo_url"
                      },
                      arguments: [],
                      directives: []
                    }]
                  }
                }, {
                  kind: "Field",
                  alias: {
                    kind: "Name",
                    value: "companyName"
                  },
                  name: {
                    kind: "Name",
                    value: "company_name"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "department"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "department_slug"
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
                }]
              }
            }]
          }
        }],
        loc: {
          start: 0,
          end: 275
        }
      };

      function i(e, s) {
        if ("FragmentSpread" === e.kind) s.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var n = e.type;
          "NamedType" === n.kind && s.add(n.name.value)
        }
        e.selectionSet && e.selectionSet.selections.forEach((function(e) {
          i(e, s)
        })), e.variableDefinitions && e.variableDefinitions.forEach((function(e) {
          i(e, s)
        })), e.definitions && e.definitions.forEach((function(e) {
          i(e, s)
        }))
      }
      s.loc.source = {
        body: "query OpeningsData($department: String, $query: String) {\n    jobsPositionList(department: $department, q: $query) {\n        company {\n            seo_url\n        }\n        companyName: company_name\n        department\n        department_slug\n        id\n        title\n    }\n}\n",
        name: "GraphQL request",
        locationOffset: {
          line: 1,
          column: 1
        }
      };
      var n = {};

      function a(e, s) {
        for (var i = 0; i < e.definitions.length; i++) {
          var n = e.definitions[i];
          if (n.name && n.name.value == s) return n
        }
      }
      s.definitions.forEach((function(e) {
        if (e.name) {
          var s = new Set;
          i(e, s), n[e.name.value] = s
        }
      })), e.exports = s, e.exports.OpeningsData = function(e, s) {
        var i = {
          kind: e.kind,
          definitions: [a(e, s)]
        };
        e.hasOwnProperty("loc") && (i.loc = e.loc);
        var t = n[s] || new Set,
          r = new Set,
          o = new Set;
        for (t.forEach((function(e) {
            o.add(e)
          })); o.size > 0;) {
          var c = o;
          o = new Set, c.forEach((function(e) {
            r.has(e) || (r.add(e), (n[e] || new Set).forEach((function(e) {
              o.add(e)
            })))
          }))
        }
        return r.forEach((function(s) {
          var n = a(e, s);
          n && i.definitions.push(n)
        })), i
      }(s, "OpeningsData")
    },
    6908: e => {
      var s = {
        kind: "Document",
        definitions: [{
          kind: "OperationDefinition",
          operation: "query",
          name: {
            kind: "Name",
            value: "PositionData"
          },
          variableDefinitions: [{
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "positionId"
              }
            },
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "Float"
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
                value: "jobsPosition"
              },
              arguments: [{
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "id"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "positionId"
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
                    value: "apply_href"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "company"
                  },
                  arguments: [],
                  directives: [],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "name"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "seo_url"
                      },
                      arguments: [],
                      directives: []
                    }]
                  }
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "department"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "description"
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
                }]
              }
            }]
          }
        }],
        loc: {
          start: 0,
          end: 223
        }
      };

      function i(e, s) {
        if ("FragmentSpread" === e.kind) s.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var n = e.type;
          "NamedType" === n.kind && s.add(n.name.value)
        }
        e.selectionSet && e.selectionSet.selections.forEach((function(e) {
          i(e, s)
        })), e.variableDefinitions && e.variableDefinitions.forEach((function(e) {
          i(e, s)
        })), e.definitions && e.definitions.forEach((function(e) {
          i(e, s)
        }))
      }
      s.loc.source = {
        body: "query PositionData($positionId: Float!) {\n    jobsPosition(id: $positionId) {\n        apply_href\n        company {\n            name\n            seo_url\n        }\n        department\n        description\n        title\n    }\n}\n",
        name: "GraphQL request",
        locationOffset: {
          line: 1,
          column: 1
        }
      };
      var n = {};

      function a(e, s) {
        for (var i = 0; i < e.definitions.length; i++) {
          var n = e.definitions[i];
          if (n.name && n.name.value == s) return n
        }
      }
      s.definitions.forEach((function(e) {
        if (e.name) {
          var s = new Set;
          i(e, s), n[e.name.value] = s
        }
      })), e.exports = s, e.exports.PositionData = function(e, s) {
        var i = {
          kind: e.kind,
          definitions: [a(e, s)]
        };
        e.hasOwnProperty("loc") && (i.loc = e.loc);
        var t = n[s] || new Set,
          r = new Set,
          o = new Set;
        for (t.forEach((function(e) {
            o.add(e)
          })); o.size > 0;) {
          var c = o;
          o = new Set, c.forEach((function(e) {
            r.has(e) || (r.add(e), (n[e] || new Set).forEach((function(e) {
              o.add(e)
            })))
          }))
        }
        return r.forEach((function(s) {
          var n = a(e, s);
          n && i.definitions.push(n)
        })), i
      }(s, "PositionData")
    },
    2919: e => {
      var s = {
        kind: "Document",
        definitions: [{
          kind: "OperationDefinition",
          operation: "query",
          name: {
            kind: "Name",
            value: "greenhouseData"
          },
          variableDefinitions: [],
          directives: [],
          selectionSet: {
            kind: "SelectionSet",
            selections: [{
              kind: "Field",
              name: {
                kind: "Name",
                value: "greenhouseApiCustomFields"
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
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "name"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "description"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "name_key"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "custom_field_options"
                  },
                  arguments: [],
                  directives: [],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                      kind: "Field",
                      alias: {
                        kind: "Name",
                        value: "value"
                      },
                      name: {
                        kind: "Name",
                        value: "id"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      alias: {
                        kind: "Name",
                        value: "label"
                      },
                      name: {
                        kind: "Name",
                        value: "name"
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
          operation: "mutation",
          name: {
            kind: "Name",
            value: "AddProspect"
          },
          variableDefinitions: [{
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "data"
              }
            },
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "RockstarGames_Jobs_GreenhouseResponseTypes_Prospect_i"
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
                value: "recaptcha_token"
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
                value: "greenhouseApiAddProspect"
              },
              arguments: [{
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "data"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "data"
                  }
                }
              }, {
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "recaptcha_token"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "recaptcha_token"
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
                    value: "id"
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
          end: 432
        }
      };

      function i(e, s) {
        if ("FragmentSpread" === e.kind) s.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var n = e.type;
          "NamedType" === n.kind && s.add(n.name.value)
        }
        e.selectionSet && e.selectionSet.selections.forEach((function(e) {
          i(e, s)
        })), e.variableDefinitions && e.variableDefinitions.forEach((function(e) {
          i(e, s)
        })), e.definitions && e.definitions.forEach((function(e) {
          i(e, s)
        }))
      }
      s.loc.source = {
        body: "query greenhouseData {\n    greenhouseApiCustomFields {\n        id\n        name\n        description\n        name_key\n        custom_field_options {\n            value: id\n            label: name\n        }\n    }\n}\n\nmutation AddProspect(\n    $data: RockstarGames_Jobs_GreenhouseResponseTypes_Prospect_i!\n    $recaptcha_token: String!\n) {\n    greenhouseApiAddProspect(data: $data, recaptcha_token: $recaptcha_token) {\n        id\n    }\n}\n",
        name: "GraphQL request",
        locationOffset: {
          line: 1,
          column: 1
        }
      };
      var n = {};

      function a(e, s) {
        for (var i = 0; i < e.definitions.length; i++) {
          var n = e.definitions[i];
          if (n.name && n.name.value == s) return n
        }
      }

      function t(e, s) {
        var i = {
          kind: e.kind,
          definitions: [a(e, s)]
        };
        e.hasOwnProperty("loc") && (i.loc = e.loc);
        var t = n[s] || new Set,
          r = new Set,
          o = new Set;
        for (t.forEach((function(e) {
            o.add(e)
          })); o.size > 0;) {
          var c = o;
          o = new Set, c.forEach((function(e) {
            r.has(e) || (r.add(e), (n[e] || new Set).forEach((function(e) {
              o.add(e)
            })))
          }))
        }
        return r.forEach((function(s) {
          var n = a(e, s);
          n && i.definitions.push(n)
        })), i
      }
      s.definitions.forEach((function(e) {
        if (e.name) {
          var s = new Set;
          i(e, s), n[e.name.value] = s
        }
      })), e.exports = s, e.exports.greenhouseData = t(s, "greenhouseData"), e.exports.AddProspect = t(s, "AddProspect")
    }
  }
]);