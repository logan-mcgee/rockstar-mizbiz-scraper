! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
      a = (new e.Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "7ebe2a06-1b22-43df-85ff-fdc2fe7bdd5c", e._sentryDebugIdIdentifier = "sentry-dbid-7ebe2a06-1b22-43df-85ff-fdc2fe7bdd5c")
  } catch (e) {}
}();
var _sentryModuleMetadataGlobal = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
_sentryModuleMetadataGlobal._sentryModuleMetadata = _sentryModuleMetadataGlobal._sentryModuleMetadata || {}, _sentryModuleMetadataGlobal._sentryModuleMetadata[(new _sentryModuleMetadataGlobal.Error).stack] = Object.assign({}, _sentryModuleMetadataGlobal._sentryModuleMetadata[(new _sentryModuleMetadataGlobal.Error).stack], {
  release: "sentry-release-id",
  packageName: "@rockstargames/sites-careers",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
});
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_careers = self.webpackChunk_rockstargames_sites_careers || []).push([
  [434], {
    434: (e, a, s) => {
      "use strict";
      s.d(a, {
        A: () => le
      });
      var n = s(2933),
        i = s(5966),
        t = s(8397),
        r = s(2229),
        o = s(5945),
        l = s.n(o),
        c = s(6371);
      var d = s(5854);
      const u = (0, i.withTranslations)((e => {
          let {
            modalOpen: a = !1,
            closeModal: s
          } = e;
          const [t, o] = (0, r.useState)(null), u = (0, r.useRef)(), m = (0, r.useRef)(), _ = (0, r.useRef)(), [p] = (0, i.useMutation)(c.ContactUs), [f, b] = (0, r.useState)(""), [h, g] = (0, r.useState)(!0);
          if (!a) return null;
          let k = null;
          return k = l(), (0, d.jsx)(k, {
            disabled: !a,
            children: (0, d.jsxs)("div", {
              children: [(0, d.jsx)("div", {
                className: "rockstargames-sites-careersedf8f247f7f9e7cee4edeabf4dcca8c2",
                onClick: () => s(),
                onKeyUp: e => {
                  "Escape" === e.key && s()
                }
              }), (0, d.jsxs)("div", {
                className: "rockstargames-sites-careerse641dac8f18282c57137d07bbfa94618",
                children: [(0, d.jsx)("button", {
                  className: "rockstargames-sites-careersc36525dc968532f0ddca40ca8227ef77",
                  "aria-label": "Close Contact Us Modal Button",
                  onClick: () => s(),
                  type: "button"
                }), (0, d.jsxs)("div", {
                  className: "rockstargames-sites-careersa3f0ebb19991c16debead5d5a43fb90d",
                  children: [(0, d.jsx)("h1", {
                    className: "rockstargames-sites-careersf3432af3fe6ccfeab33cbc9aa95ce4d6",
                    children: "Contact Us"
                  }), f, h && (0, d.jsxs)("form", {
                    onSubmit: e => (async e => {
                      e.preventDefault();
                      const a = {
                        recaptcha_token: t,
                        data: {
                          name: u.current.value,
                          email: m.current.value,
                          message: _.current.value
                        }
                      };
                      try {
                        b(""), await p({
                          variables: a
                        }), b("Your message has been received."), g(!1)
                      } catch ({
                        graphQLErrors: e
                      }) {
                        b(e?.[0]?.message ?? "Something went wrong. Please try again later.")
                      }
                    })(e),
                    className: "rockstargames-sites-careersaa60d0ddc98ed4604d32597d5cc66090",
                    children: [(0, d.jsx)("input", {
                      type: "text",
                      id: "name",
                      name: "name",
                      placeholder: "Name",
                      ref: u,
                      required: !0
                    }), (0, d.jsx)("input", {
                      type: "email",
                      id: "email",
                      name: "email",
                      placeholder: "Email Address",
                      ref: m,
                      required: !0
                    }), (0, d.jsx)("textarea", {
                      id: "message",
                      name: "message",
                      placeholder: "Talk to Us",
                      ref: _,
                      required: !0
                    }), (0, d.jsx)(n.GoogleReCaptcha, {
                      onVerify: e => {
                        o(e)
                      }
                    }), (0, d.jsx)("input", {
                      type: "submit",
                      value: "Submit"
                    })]
                  })]
                })]
              })]
            })
          })
        })),
        m = (0, i.withTranslations)((e => {
          let {
            t: a
          } = e;
          const [s, n] = (0, r.useState)(Boolean(sessionStorage.getItem("careersHeaderMsgOpen"))), [o, l] = (0, r.useState)(!1), {
            setBodyIsLocked: c
          } = (0, i.useBodyScrollable)("NavContactModal"), m = (0, r.useCallback)((() => {
            l(!1), c(!1)
          }), []);
          return (0, t.zP)("careersContactUsLink", (() => {
            l(!0), c(!0)
          })), (0, r.useEffect)((() => {
            sessionStorage.setItem("careersHeaderMsgOpen", String(Boolean(s)))
          }), [s]), (0, d.jsxs)(d.Fragment, {
            children: [(0, d.jsx)("header", {
              className: "rockstargames-sites-careersf15a54704dae31427161eac6a6db7489",
              children: s && (0, d.jsxs)("div", {
                className: "rockstargames-sites-careerse94eb81cd8849bf3b1e105f0e988b9ae",
                children: [(0, d.jsx)("p", {
                  dangerouslySetInnerHTML: {
                    __html: a("careers.header_msg")
                  }
                }), (0, d.jsx)("button", {
                  className: "rockstargames-sites-careersd2f5f6dd3ac5cfbdc9b086d6b6fb8b68",
                  "aria-label": "Close Banner Message Button",
                  onClick: () => n(!1),
                  type: "button"
                })]
              })
            }), (0, d.jsx)(u, {
              modalOpen: o,
              closeModal: m
            })]
          })
        }));
      var _ = s(9623);
      const p = "rockstargames-sites-careersd7c026d5f799931e28a6299151e808fa",
        f = () => (0, d.jsxs)("div", {
          className: "rockstargames-sites-careersde7b07f58e2d2c2c5fa38f42c4dd7c1a",
          children: [(0, d.jsxs)("h2", {
            children: ["Accessibility Policy", (0, d.jsx)("br", {}), " ", "& Multi-Year Accessibility Plan for Rockstar Games Toronto ULC"]
          }), (0, d.jsxs)("p", {
            children: ["In 2005, the Ontario Government set the goal of a “barrier-free Ontario” for people with disabilities by creating the Accessibility for Ontarians with Disabilities Act, 2005 (“the Act” or “AODA”). Regulations were created which set out the steps that organizations, including", " ", (0, d.jsx)("span", {
              className: p,
              children: "Rockstar Games Toronto ULC (“Rockstar Toronto”)."
            }), ", must take to meet this laudable goal. These Regulations cover accessibility standards in customer service, information and communications, employment, transportation and the built environment."]
          }), (0, d.jsxs)("p", {
            children: [(0, d.jsx)("span", {
              className: p,
              children: "Rockstar Toronto"
            }), " ", "will or is in the process of creating internal policies, practices and procedures, which recognize the role", " ", (0, d.jsx)("span", {
              className: p,
              children: "Rockstar Toronto"
            }), " ", "will play in making Ontario more accessible."]
          }), (0, d.jsxs)("p", {
            children: ["This Accessibility Policy and Multi-Year Accessibility Plan outline the policies, procedures and actions that", " ", (0, d.jsx)("span", {
              className: p,
              children: "Rockstar Toronto"
            }), " ", "will put or has put in place to comply with the requirements of the Act and its Regulations"]
          }), (0, d.jsx)("h3", {
            children: "Statement of Commitment"
          }), (0, d.jsxs)("p", {
            children: [(0, d.jsx)("span", {
              className: p,
              children: "Rockstar Toronto"
            }), " ", "is committed to improving accessibility for individuals with disabilities and treating all people in a way that allows them to maintain their dignity and independence.", " ", (0, d.jsx)("span", {
              className: p,
              children: "Rockstar Toronto"
            }), " ", "will continue to meet the needs of people with disabilities in a timely manner, and will do so by preventing and removing barriers to accessibility and meeting accessibility requirements under the Act and its Regulations."]
          }), (0, d.jsx)("h3", {
            children: "Barrier Assessment"
          }), (0, d.jsxs)("p", {
            children: ["In accordance with AODA and", " ", (0, d.jsx)("span", {
              className: p,
              children: "Rockstar Toronto’s"
            }), " ", "goal of providing an inclusive workplace, this Accessibility Policy and Multi-Year Accessibility Plan seeks to eliminate and prevent barriers to accessibility. Typical barriers experienced by individuals with disabilities include physical, communication and technology, attitudinal and systemic barriers."]
          }), (0, d.jsx)("h3", {
            children: "Accessible Customer Service"
          }), (0, d.jsxs)("p", {
            children: [(0, d.jsx)("span", {
              className: p,
              children: "Rockstar Toronto"
            }), " ", "is committed to accessible customer service in keeping with the principles of dignity, independence, integration and equal opportunity."]
          }), (0, d.jsxs)("p", {
            children: ["Employees will be trained on", " ", (0, d.jsx)("span", {
              className: p,
              children: "Rockstar Toronto’s"
            }), " ", "Customer Service Standard Policy."]
          }), (0, d.jsxs)("p", {
            children: [(0, d.jsx)("span", {
              className: p,
              children: "Implementation Timeframe:"
            }), " ", (0, d.jsx)("br", {}), "Effective", " ", (0, d.jsx)("span", {
              className: p,
              children: "January 1, 2012"
            }), " ", "and ongoing."]
          }), (0, d.jsx)("h3", {
            children: "Accessible Emergency Information"
          }), (0, d.jsxs)("p", {
            children: [(0, d.jsx)("span", {
              className: p,
              children: "Rockstar Toronto"
            }), " ", "is committed to providing its customers with publicly available emergency information, in an accessible way, upon request."]
          }), (0, d.jsxs)("p", {
            children: [(0, d.jsx)("span", {
              className: p,
              children: "Rockstar Toronto"
            }), " ", "will also provide disabled employees with individualized emergency response information and create Individual Emergency Response Information Plans when necessary."]
          }), (0, d.jsxs)("p", {
            children: [(0, d.jsx)("span", {
              className: p,
              children: "Implementation Timeframe:"
            }), (0, d.jsx)("br", {}), " ", "Effective", " ", (0, d.jsx)("span", {
              className: p,
              children: "January 1, 2012"
            }), " ", "and ongoing."]
          }), (0, d.jsx)("h3", {
            children: "Training"
          }), (0, d.jsxs)("p", {
            children: [(0, d.jsx)("span", {
              className: p,
              children: "Rockstar Toronto"
            }), " ", "will provide training to employees relating to people with disabilities. Training will be provided in a way that best suits the duties of", " ", (0, d.jsx)("span", {
              className: p,
              children: "Rockstar Toronto"
            }), " ", "employees being trained."]
          }), (0, d.jsxs)("p", {
            children: [(0, d.jsx)("span", {
              className: p,
              children: "Rockstar Toronto Inc."
            }), " ", "will take the following steps to ensure employees and volunteers are provided with the training needed to meet Ontario’s accessible laws:"]
          }), (0, d.jsxs)("ul", {
            children: [(0, d.jsxs)("li", {
              children: [(0, d.jsx)("span", {
                className: p,
                children: "Rockstar Toronto"
              }), " ", "will review current training materials to determine whether any existing materials can be built upon and used for AODA training;"]
            }), (0, d.jsxs)("li", {
              children: [(0, d.jsx)("span", {
                className: p,
                children: "Rockstar Toronto"
              }), " ", "will provide Customer Service Training for all employees who deal with members of the public and/or any other third parties;"]
            }), (0, d.jsxs)("li", {
              children: [(0, d.jsx)("span", {
                className: p,
                children: "Rockstar Toronto"
              }), " ", "will provide training on:"]
            }), (0, d.jsxs)("ul", {
              children: [(0, d.jsx)("li", {
                children: "(1) The requirements of the accessibility standards referred to in the Integrated Accessibility Standard, O. Reg. 119/11; and"
              }), (0, d.jsx)("li", {
                children: "(2) The requirements of the Human Rights Code (“the Code”) as it pertains to persons with disabilities; and,"
              })]
            }), (0, d.jsxs)("li", {
              children: [(0, d.jsx)("span", {
                className: p,
                children: "Rockstar Toronto"
              }), " ", "will continue to provide training as required under AODA for all new employees and/or if there is a substantial change to", " ", (0, d.jsx)("span", {
                className: p,
                children: "Rockstar Toronto’s"
              }), " ", "Accessibility or other related policy."]
            })]
          }), (0, d.jsxs)("p", {
            children: [(0, d.jsx)("span", {
              className: p,
              children: "Implementation Timeframe:"
            }), (0, d.jsx)("br", {}), " ", "Effective", (0, d.jsx)("span", {
              className: p,
              children: "January 1, 2012"
            }), " ", "and ongoing."]
          }), (0, d.jsx)("h3", {
            children: "Information And Communications"
          }), (0, d.jsxs)("p", {
            children: [(0, d.jsx)("span", {
              className: p,
              children: "Rockstar Toronto"
            }), " ", "is committed to meeting the information and communication needs of people with disabilities."]
          }), (0, d.jsxs)("p", {
            children: [(0, d.jsx)("span", {
              className: p,
              children: "Rockstar Toronto"
            }), " ", "will take the following steps to make sure all information publically available in Ontario is made accessible upon request by", " ", (0, d.jsx)("span", {
              className: p,
              children: "January 1, 2016"
            }), ":"]
          }), (0, d.jsxs)("ul", {
            children: [(0, d.jsxs)("li", {
              children: [(0, d.jsx)("span", {
                className: p,
                children: "Rockstar Toronto"
              }), " ", "will consult with disabled customers to determine their specific needs;"]
            }), (0, d.jsxs)("li", {
              children: [(0, d.jsx)("span", {
                className: p,
                children: "Rockstar Toronto"
              }), " ", "will respond to such requests for accessible information as soon as practicable; and,"]
            }), (0, d.jsxs)("li", {
              children: [(0, d.jsx)("span", {
                className: p,
                children: "Rockstar Toronto"
              }), " ", "will provide customers with information in an accessible format, upon request."]
            })]
          }), (0, d.jsxs)("p", {
            children: [(0, d.jsx)("span", {
              className: p,
              children: "Rockstar Toronto"
            }), " ", "will take the following steps to make any new website and new web content, specific to Ontario, conform to WCAG 2.0, Level A by", " ", (0, d.jsx)("span", {
              className: p,
              children: "January 1, 2014"
            }), ":"]
          }), (0, d.jsxs)("ul", {
            children: [(0, d.jsxs)("li", {
              children: ["any new", " ", (0, d.jsx)("span", {
                className: p,
                children: "Rockstar Toronto"
              }), " ", "website applicable to Ontario will be assessed and evaluated for accessibility to ensure conformance with WCAG 2.0 Level A;"]
            }), (0, d.jsxs)("li", {
              children: ["any new", " ", (0, d.jsx)("span", {
                className: p,
                children: "Rockstar Toronto"
              }), " ", "web content applicable to Ontario will be assessed and evaluated for accessibility conformance;"]
            }), (0, d.jsxs)("li", {
              children: ["if conformance with WCAG 2.0 Level A is an issue,", " ", (0, d.jsx)("span", {
                className: p,
                children: "Rockstar Toronto"
              }), " ", "will consult with its internal IT department regarding necessary changes to its new website and new web content so as to come into compliance;"]
            }), (0, d.jsxs)("li", {
              children: [(0, d.jsx)("span", {
                className: p,
                children: "Rockstar Toronto"
              }), " ", "will engage services of its internal IT department to implement improvements to its website and web content so as to meet the compliance standards."]
            }), " "]
          }), (0, d.jsxs)("p", {
            children: [(0, d.jsx)("span", {
              className: p,
              children: "Rockstar Toronto"
            }), " ", "will take the following steps to make any public website and web content specific to Ontario conform to WCAG 2.0, Level AA by", " ", (0, d.jsx)("span", {
              className: p,
              children: "January 1, 2021"
            }), ":"]
          }), (0, d.jsxs)("ul", {
            children: [(0, d.jsxs)("li", {
              children: [(0, d.jsx)("span", {
                className: p,
                children: "Rockstar Toronto’s"
              }), " ", "Ontario web page will be assessed and evaluated for accessibility to ensure conformance with WCAG 2.0 Level A;"]
            }), (0, d.jsx)("li", {
              children: "public web content in Ontario will be assessed and evaluated for accessibility conformance;"
            }), (0, d.jsxs)("li", {
              children: ["if not in conformance with WCAG 2.0 Level A,", " ", (0, d.jsx)("span", {
                className: p,
                children: "Rockstar Toronto Inc."
              }), " ", "will consult with its internal IT department regarding necessary changes to bring to the website and web content into compliance;"]
            }), (0, d.jsx)("li", {
              children: "services of an external website consultant will be engaged to make the above improvements to the website and web content, if the internal IT department is unable to make the necessary changes; and,"
            }), (0, d.jsx)("li", {
              children: "necessary improvements to the website and content will be made to ensure compliance."
            })]
          }), (0, d.jsxs)("p", {
            children: [(0, d.jsx)("span", {
              className: p,
              children: "Implementation Timeframe:"
            }), (0, d.jsx)("br", {}), " ", "By", " ", (0, d.jsx)("span", {
              className: p,
              children: "January 1, 2014"
            }), " ", "and ongoing."]
          }), (0, d.jsx)("h3", {
            children: "Feedback"
          }), (0, d.jsxs)("p", {
            children: [(0, d.jsx)("span", {
              className: p,
              children: "Rockstar Toronto"
            }), " ", "will take the following steps to make ensure existing feedback processes are accessible to people with disabilities upon request by", " ", (0, d.jsx)("span", {
              className: p,
              children: "January 1, 2015:"
            })]
          }), (0, d.jsxs)("ul", {
            children: [(0, d.jsx)("li", {
              children: "make the provision of feedback accessible on its website or other location as appropriate;"
            }), (0, d.jsxs)("li", {
              children: ["advise customers and clients that feedback can be given in person, by mail, by phone, by fax or by e-mail to:", (0, d.jsx)("br", {}), (0, d.jsx)("br", {}), "Telephone: 905-829-2203, ext. 222", (0, d.jsx)("br", {}), "Facsimile: 905-829-2246", (0, d.jsx)("br", {}), "E-mail:", " ", (0, d.jsx)("a", {
                href: "mailto:aoda@rockstartoronto.com",
                children: "aoda@rockstartoronto.com"
              }), (0, d.jsx)("br", {}), (0, d.jsx)("br", {})]
            }), (0, d.jsx)("li", {
              children: "ensure the public that supports are available to facilitate the submission of feedback; and,"
            }), (0, d.jsx)("li", {
              children: "commit to responding to feedback as soon as practicable."
            })]
          }), (0, d.jsxs)("p", {
            children: [(0, d.jsx)("span", {
              className: p,
              children: "Rockstar Toronto"
            }), " ", "will take the following steps to make sure all publicly available information is made accessible upon request by", " ", (0, d.jsx)("span", {
              className: p,
              children: "January 1, 2016:"
            })]
          }), (0, d.jsxs)("ul", {
            children: [(0, d.jsxs)("li", {
              children: [(0, d.jsx)("span", {
                className: p,
                children: "Rockstar Toronto"
              }), " ", "will provide its customers and members of the public with information in an accessible format upon request."]
            }), (0, d.jsxs)("li", {
              children: [(0, d.jsx)("span", {
                className: p,
                children: "Rockstar Toronto"
              }), " ", "will respond to such requests as soon as practicable."]
            })]
          }), (0, d.jsxs)("p", {
            children: [(0, d.jsx)("span", {
              className: p,
              children: "Implementation Timeframe:"
            }), (0, d.jsx)("br", {}), " ", "By", (0, d.jsx)("span", {
              className: p,
              children: "January 1, 2016"
            }), " ", "and ongoing."]
          }), (0, d.jsx)("h3", {
            children: "Employment"
          }), (0, d.jsxs)("p", {
            children: [(0, d.jsx)("span", {
              className: p,
              children: "Rockstar Toronto"
            }), " ", "is committed to fair and accessible employment practices."]
          }), (0, d.jsxs)("p", {
            children: [(0, d.jsx)("span", {
              className: p,
              children: "Rockstar Toronto"
            }), " ", "will take the following steps by", (0, d.jsx)("span", {
              className: p,
              children: "January 1, 2016"
            }), " ", "to notify the public and staff that it will accommodate people with disabilities during the recruitment and assessment processes and when hired:"]
          }), (0, d.jsxs)("ul", {
            children: [(0, d.jsxs)("li", {
              children: ["include a statement in any job advertisements that", " ", (0, d.jsx)("span", {
                className: p,
                children: "Rockstar Toronto"
              }), " ", "will hire individuals with disabilities and will provide accommodations during the hiring process;"]
            }), (0, d.jsxs)("li", {
              children: ["if a job applicant requests accommodation,", " ", (0, d.jsx)("span", {
                className: p,
                children: "Rockstar Toronto"
              }), " ", "will consult with the individual and make adjustments that best suit his/her needs to the extent required by law;"]
            }), (0, d.jsxs)("li", {
              children: ["confirm, in any interview, that", " ", (0, d.jsx)("span", {
                className: p,
                children: "Rockstar Toronto"
              }), " ", "will hire individuals with disabilities;"]
            }), (0, d.jsxs)("li", {
              children: ["notify successful applicants of", " ", (0, d.jsx)("span", {
                className: p,
                children: "Rockstar Toronto’s"
              }), " ", "policies for accommodating employees with disabilities;"]
            }), (0, d.jsxs)("li", {
              children: ["include in the", " ", (0, d.jsx)("span", {
                className: p,
                children: "Rockstar Toronto new hire"
              }), " ", "training program a section on accessibility and the Code, as appropriate;"]
            }), (0, d.jsx)("li", {
              children: "advise current employees of the policies on accessibility and the Code;"
            }), (0, d.jsx)("li", {
              children: "advise employees when any changes are made to the above policies; and,"
            }), (0, d.jsx)("li", {
              children: "review existing policies and procedures, and where necessary, augment processes for people with disabilities."
            })]
          }), (0, d.jsxs)("p", {
            children: [(0, d.jsx)("span", {
              className: p,
              children: "Rockstar Toronto"
            }), " ", "will take the following steps to develop and put in place a process for designing individual accommodation plans and return-to-work policies for employees that have been absent due to a disability:"]
          }), (0, d.jsx)("ul", {
            children: (0, d.jsx)("li", {
              children: "review existing policies and procedures and if necessary, augment processes for people with disabilities on the development of accommodation plans and return to work processes."
            })
          }), (0, d.jsxs)("p", {
            children: [(0, d.jsx)("span", {
              className: p,
              children: "Rockstar Toronto"
            }), " ", "will take the following steps to ensure the accessibility needs of employees with disabilities are taken into account if", " ", (0, d.jsx)("span", {
              className: p,
              children: "Rockstar Toronto"
            }), " ", "uses a career development and redeployment processes:"]
          }), (0, d.jsx)("ul", {
            children: (0, d.jsx)("li", {
              children: "review existing policies and procedures and amend where necessary to ensure accessibility considerations."
            })
          }), (0, d.jsxs)("p", {
            children: [(0, d.jsx)("span", {
              className: p,
              children: "Rockstar Toronto"
            }), " ", "will take the following steps to prevent and remove other accessibility barriers identified:"]
          }), (0, d.jsx)("ul", {
            children: (0, d.jsx)("li", {
              children: "assess, review, and alter (if required) policies and procedures to ensure compliance with the AODA."
            })
          }), (0, d.jsxs)("p", {
            children: [(0, d.jsx)("span", {
              className: p,
              children: "Implementation Timeframe:"
            }), (0, d.jsx)("br", {}), " ", "By", (0, d.jsx)("span", {
              className: p,
              children: "January 1, 2016"
            }), " ", "and ongoing."]
          }), (0, d.jsx)("h3", {
            children: "Service Disruptions"
          }), (0, d.jsxs)("p", {
            children: [(0, d.jsx)("span", {
              className: p,
              children: "Rockstar Toronto"
            }), " ", "has put procedures in place to prevent service disruptions to its accessible parts of its public spaces."]
          }), (0, d.jsxs)("p", {
            children: ["In the event of a service disruption,", " ", (0, d.jsx)("span", {
              className: p,
              children: "Rockstar Toronto"
            }), " ", "will notify the public of the service disruption and alternatives available."]
          }), (0, d.jsxs)("p", {
            children: [(0, d.jsx)("span", {
              className: p,
              children: "Implementation Timeframe:"
            }), (0, d.jsx)("br", {}), " ", "Effective immediately and ongoing."]
          }), (0, d.jsx)("h3", {
            children: "Policy Review"
          }), (0, d.jsxs)("p", {
            children: ["The Multi-Year Accessibility Plan is a tool for", " ", (0, d.jsx)("span", {
              className: p,
              children: "Rockstar Toronto"
            }), " ", "to communicate its accessibility initiatives internally and to the public.", " ", (0, d.jsx)("span", {
              className: p,
              children: "Rockstar Toronto"
            }), " ", "will review and update this Plan at least once every five (5) years. The first version of this Plan will be reviewed no later than", " ", (0, d.jsx)("span", {
              className: p,
              children: "January 1, 2019"
            }), "."]
          }), (0, d.jsxs)("p", {
            children: [(0, d.jsx)("span", {
              className: p,
              children: "Implementation Timeframe:"
            }), (0, d.jsx)("br", {}), " ", "By", (0, d.jsx)("span", {
              className: p,
              children: "January 1, 2019"
            }), " ", "and ongoing."]
          }), (0, d.jsxs)("p", {
            children: ["For more information on this accessibility plan, please contact us at 905-829-2203, ext. 222 or", " ", (0, d.jsx)("a", {
              href: "mailto:aoda@rockstartoronto.com",
              children: "aoda@rockstartoronto.com"
            }), "."]
          }), (0, d.jsx)("p", {
            children: "Please note accessible formats of this Accessibility Policy and Multi-Year Accessibility Plan are available free upon request at the contacts listed above."
          })]
        });
      var b = s(1788);
      const h = (0, b.defineMessages)({
          aria_label_open_new_window: {
            id: "aria_label_open_new_window",
            defaultMessage: "(Opens in a new window)"
          }
        }),
        g = "rockstargames-sites-careersea8cf4797c830e5b5dad68b2ec814e67",
        k = JSON.parse('{"de-DE":{"aria_label_open_new_window":"(Öffnet ein neues Fenster)","carousel_learn_more":"Mehr erfahren","carousel_watch_more":"Jetzt anschauen","components_ratings_link_alt":"Altersfreigabe: {rating} Klicke hier, um mehr über Altersfreigaben zu erfahren.","components_track_list_title":"Trackliste","next_button_label":"Nächste Videoseite","ns_already_subbed_details":"Du erhältst bereits Newsletter-Updates an diese E-Mail-Adresse. Du kannst deine Präferenzen bezüglich E-Mails jederzeit in den Einstellungen deines Kontos ändern.","ns_already_subbed_title":"Bereits abonniert","ns_check_email_details":"Bitte verifiziere deine E-Mail-Adresse über den Link, der an die E-Mail-Adresse geschickt wurde, mit der du dich angemeldet hast, um dein Abo für die E-Mail-Liste von Rockstar Games zu bestätigen.","ns_check_email_title":"Überprüfe deine E-Mails","ns_confirm_after_register_details":"Du hast dich während der Kontoerstellung nicht für Werbe-E-Mails angemeldet. Möchtest du immer noch unseren Newsletter abonnieren?","ns_confirm_after_register_title":"Bestätige dein Abo","ns_confirm_details":"Bitte drücke auf den Knopf unten, um zu bestätigen, dass du den Newsletter von Rockstar Games abonnieren möchtest.","ns_confirm_title":"Bestätige dein Abo","ns_cta_button_text":"Jetzt abonnieren","ns_cta_text":"Melde dich bei unserem E-Mail-Newsletter an, um über Spielankündigungen und Updates, besondere Events, Angebote und mehr von Rockstar Games und unseren Partnern informiert zu werden.","ns_cta_title":"E-Mail-Liste von Rockstar Games beitreten","ns_cta_title_twitchdrops":"Verpass nicht dein nächstes Gratisgeschenk in GTA Online.","ns_error_generic_details":"Wir können diese E-Mail-Adresse derzeit nicht bei unserem Newsletter anmelden.","ns_error_generic_title":"Fehler","ns_error_preferences_details":"Wir können deine E-Mail-Adresse derzeit nicht bei unserem Newsletter anmelden. Ändere deine Präferenzen bezüglich E-Mails in den Einstellungen deines Kontos oder versuche es später erneut.","ns_error_preferences_title":"Fehler","ns_go_back_text":"Nein, zurückkehren","ns_manage_prefs_button_text":"Präferenzen verwalten","ns_ok_button_text":"OKAY","ns_successfully_subscribed_details":"Du hast dich bei der E-Mail-Liste von Rockstar Games angemeldet und erhältst regelmäßig Updates an die E-Mail-Adresse, mit der du dich angemeldet hast. Verwalte deine Präferenzen bezüglich E-Mails in den Einstellungen deines Kontos.","ns_successfully_subscribed_title":"Erfolgreich abonniert","ns_yes_subscribe_text":"Ja, abonnieren","previous_button_label":"Vorherige Videoseite","profile_silhouette_mugshot":"Verbrecherfoto mit Silhouette","rp_icon":"RP-Kategorie","wasted_error_404_new":"Die Seite, die du suchst, existiert nicht, oder es ist ein anderer Fehler aufgetreten.","wasted_home":"Startseite"},"en-US":{"aria_label_open_new_window":"(Opens in a new window)","carousel_learn_more":"Learn More","carousel_watch_more":"Watch Now","components_ratings_link_alt":"Rating: {rating}. Click here learn more about rating systems","components_track_list_title":"Tracklist","next_button_label":"Next video page","ns_already_subbed_details":"You are already receiving newsletter updates at this email address. Change your email preferences at any time on your account settings page.","ns_already_subbed_title":"Already Subscribed","ns_check_email_details":"To confirm your subscription to the Rockstar Games Email List, please verify your email address via the link sent to the email address you’ve signed up with.","ns_check_email_title":"Check Your Email","ns_confirm_after_register_details":"You did not opt-in to receive marketing emails during account creation. Would you still like to subscribe to our newsletter?","ns_confirm_after_register_title":"Confirm your subscription","ns_confirm_details":"Please confirm that you would like to subscribe to the Rockstar Games Newsletter by clicking the button below.","ns_confirm_title":"Confirm your subscription","ns_cta_button_text":"Subscribe Now","ns_cta_text":"Sign up for our email newsletter to get info on game announcements and updates, details on special events and offers, and more from Rockstar Games and our affiliates.","ns_cta_title":"Subscribe to the Rockstar Games Email List","ns_cta_title_twitchdrops":"Don\'t miss the next free GTA Online gift","ns_error_generic_details":"We cannot sign up this email address to our newsletter at this time.","ns_error_generic_title":"Error","ns_error_preferences_details":"We cannot sign up your email address to our newsletter at this time. Change your email preferences on your account settings page or try again later.","ns_error_preferences_title":"Error","ns_go_back_text":"No, Go Back","ns_manage_prefs_button_text":"Manage Preferences","ns_ok_button_text":"OK","ns_successfully_subscribed_details":"You are now signed up to the Rockstar Games Email List and will receive regular updates to the email address you’ve signed up with. Manage your email preferences at any time on your account settings page.","ns_successfully_subscribed_title":"Successfully Subscribed","ns_yes_subscribe_text":"Yes, Subscribe","previous_button_label":"Previous video page","profile_silhouette_mugshot":"Silhouette mugshot","rp_icon":"RP Category","wasted_error_404_new":"The page you\'re looking for doesn\'t exist or another error occurred.","wasted_home":"Home"},"es-ES":{"aria_label_open_new_window":"(Se abre en una ventana nueva)","carousel_learn_more":"Más información","carousel_watch_more":"Ya disponible","components_ratings_link_alt":"Clasificación: {rating}. Haz clic aquí para obtener más información sobre los sistemas de clasificación.","components_track_list_title":"Lista de pistas","next_button_label":"Página de vídeo siguiente","ns_already_subbed_details":"Ya recibes actualizaciones del boletín de noticias en este correo electrónico. Cambia tus preferencias de correos electrónicos en cualquier momento en la página de ajustes de tu cuenta.","ns_already_subbed_title":"Ya tienes una suscripción","ns_check_email_details":"Para confirmar tu suscripción a la lista de correo de Rockstar Games, verifica tu correo electrónico a través del enlace enviado al correo electrónico con el que te has suscrito.","ns_check_email_title":"Comprueba tu correo electrónico","ns_confirm_after_register_details":"No te has suscrito a los correos electrónicos comerciales al crear tu cuenta. ¿Quieres suscribirte a nuestro boletín de noticias?","ns_confirm_after_register_title":"Confirma tu suscripción","ns_confirm_details":"Haz click en el botón para confirmar que quieres suscribirte al boletín de noticias de Rockstar Games.","ns_confirm_title":"Confirma tu suscripción","ns_cta_button_text":"Suscríbete ya","ns_cta_text":"Suscríbete a nuestro boletín de noticias para obtener información sobre los anuncios y actualizaciones de juegos, detalles sobre eventos especiales, ofertas y mucho más sobre Rockstar Games y sus afiliados.","ns_cta_title":"Suscríbete a la lista de correo de Rockstar Games","ns_cta_title_twitchdrops":"No te pierdas el próximo regalo de GTA Online","ns_error_generic_details":"En este momento no puedes suscribirte a nuestro boletín de noticias con este correo electrónico.","ns_error_generic_title":"Error","ns_error_preferences_details":"En este momento no puedes suscribirte a nuestro boletín de noticias con tu correo electrónico. Cambia tus preferencias de correos electrónicos en la página de ajustes de tu cuenta o inténtalo más tarde.","ns_error_preferences_title":"Error","ns_go_back_text":"No, volver","ns_manage_prefs_button_text":"Gestionar preferencias","ns_ok_button_text":"ACEPTAR","ns_successfully_subscribed_details":"Te has suscrito a la lista de correo de Rockstar Games y recibirás actualizaciones en el correo electrónico con el que te has suscrito. Cambia tus preferencias de correos electrónicos en cualquier momento en la página de ajustes de tu cuenta.","ns_successfully_subscribed_title":"Te has suscrito","ns_yes_subscribe_text":"Sí, suscribirse","previous_button_label":"Página de vídeo anterior","profile_silhouette_mugshot":"Foto de silueta","rp_icon":"Categoría de RP","wasted_error_404_new":"La página que buscas no existe o ha habido otro error.","wasted_home":"Inicio"},"es-MX":{"aria_label_open_new_window":"(Se abre en una ventana nueva)","carousel_learn_more":"Más información","carousel_watch_more":"Ya disponible","components_ratings_link_alt":"Clasificación: {rating}. Haz clic aquí para obtener más información sobre el sistema de clasificación.","components_track_list_title":"Lista de canciones","next_button_label":"Página de video siguiente","ns_already_subbed_details":"Ya recibes actualizaciones del boletín en esta dirección de correo electrónico. Modifica las preferencias de tu correo cuando quieras desde la página de ajustes de la cuenta.","ns_already_subbed_title":"Ya cuentas con una suscripción","ns_check_email_details":"Verifica tu dirección de correo electrónico mediante el enlace que enviamos al correo con el que te registraste para confirmar la suscripción a la lista de correos de Rockstar Games.","ns_check_email_title":"Verifica tu dirección de correo electrónico","ns_confirm_after_register_details":"No optaste por recibir correos con publicidad durante la creación de la cuenta. ¿Quieres suscribirte a nuestro boletín de todos modos?","ns_confirm_after_register_title":"Confirmar suscripción","ns_confirm_details":"Haz clic en el botón a continuación para confirmar que quieres suscribirte al boletín de Rockstar Games.","ns_confirm_title":"Confirmar suscripción","ns_cta_button_text":"Suscribirse ahora","ns_cta_text":"Regístrate para recibir nuestro boletín por correo electrónico y recibir información sobre anuncios y actualizaciones de juegos, detalles sobre eventos y ofertas especiales, y mucho más de Rockstar Games y sus afiliados.","ns_cta_title":"Suscríbete a la lista de correos de Rockstar Games","ns_cta_title_twitchdrops":"No te pierdas el próximo regalo de GTA Online","ns_error_generic_details":"En este momento, no podemos registrar esta dirección de correo electrónico a nuestro boletín.","ns_error_generic_title":"Error","ns_error_preferences_details":"En este momento, no podemos registrar tu dirección de correo electrónico a nuestro boletín. Modifica las preferencias de tu correo desde la página de ajustes de la cuenta o inténtalo de nuevo más tarde.","ns_error_preferences_title":"Error","ns_go_back_text":"No, volver","ns_manage_prefs_button_text":"Gestionar preferencias","ns_ok_button_text":"ACEPTAR","ns_successfully_subscribed_details":"Cuentas con una suscripción a la lista de correos de Rockstar Games y recibirás actualizaciones habituales a la dirección de correo electrónico con la que te registraste. Gestiona las preferencias de tu correo cuando quieras desde la página de ajustes de la cuenta.","ns_successfully_subscribed_title":"Suscripción exitosa","ns_yes_subscribe_text":"Sí, suscribirse","previous_button_label":"Página de video anterior","profile_silhouette_mugshot":"Foto de una silueta","rp_icon":"Categoría de RP","wasted_error_404_new":"Ocurrió un problema o la página que estás buscando no existe.","wasted_home":"Inicio"},"fr-FR":{"aria_label_open_new_window":"(S’ouvre dans une nouvelle fenêtre)","carousel_learn_more":"En savoir plus","carousel_watch_more":"Visionner maintenant","components_ratings_link_alt":"Classification : {rating}. Cliquez ici pour en savoir plus sur les systèmes de classification.","components_track_list_title":"Liste des morceaux","next_button_label":"Page vidéo suivante","ns_already_subbed_details":"Vous êtes déjà abonné(e) à la newsletter avec cette adresse e-mail. Modifiez vos préférences concernant les e-mails à tout moment sur la page des paramètres de votre compte.","ns_already_subbed_title":"Vous êtes déjà abonné(e)","ns_check_email_details":"Pour confirmer votre abonnement à la liste de diffusion de Rockstar Games, veuillez vérifier votre adresse e-mail en cliquant sur le lien envoyé à l\'adresse e-mail avec laquelle vous vous êtes abonné(e).","ns_check_email_title":"Vérifiez votre adresse e-mail","ns_confirm_after_register_details":"Vous avez choisi de ne pas recevoir d\'e-mails publicitaires lors de la création de votre compte. Voulez-vous toujours vous abonner à notre newsletter ?","ns_confirm_after_register_title":"Confirmer votre abonnement","ns_confirm_details":"Veuillez confirmer que vous souhaitez vous abonner à la newsletter de Rockstar Games en cliquant sur le bouton ci-dessous.","ns_confirm_title":"Confirmez votre abonnement","ns_cta_button_text":"S\'abonner","ns_cta_text":"Abonnez-vous à la newsletter pour recevoir par e-mail des infos relatives à nos jeux et aux mises à jour, aux évènements spéciaux et aux offres, et plus de la part de Rockstar Games et nos affiliés.","ns_cta_title":"S\'abonner à la liste de diffusion de Rockstar Games ","ns_cta_title_twitchdrops":"Ne manquez pas le prochain cadeau gratuit dans GTA Online.","ns_error_generic_details":"Nous ne pouvons pas abonner cette adresse e-mail à notre newsletter pour l\'instant.","ns_error_generic_title":"Erreur","ns_error_preferences_details":"Nous ne pouvons pas abonner votre adresse e-mail à notre newsletter pour l\'instant. Modifiez vos préférences concernant les e-mails sur la page des paramètres de votre compte ou réessayez plus tard.","ns_error_preferences_title":"Erreur","ns_go_back_text":"Non, retour","ns_manage_prefs_button_text":"Gérer vos préférences","ns_ok_button_text":"OK","ns_successfully_subscribed_details":"Vous êtes désormais abonné(e) à la liste de diffusion de Rockstar Games. Vous recevrez des e-mails régulièrement à l\'adresse e-mail avec laquelle vous vous êtes abonné(e). Gérez vos préférences concernant les e-mails à tout moment sur la page des paramètres de votre compte.","ns_successfully_subscribed_title":"Abonnement effectué","ns_yes_subscribe_text":"Oui, je m\'abonne","previous_button_label":"Page vidéo précédente","profile_silhouette_mugshot":"Photo d\'identité : silhouette","rp_icon":"Catégorie : RP","wasted_error_404_new":"La page que vous recherchez n\'existe pas ou une autre erreur est survenue.","wasted_home":"Accueil"},"it-IT":{"aria_label_open_new_window":"(Apri in una nuova finestra)","carousel_learn_more":"Altre informazioni","carousel_watch_more":"Guarda ora","components_ratings_link_alt":"Classificazione: {rating}. Clicca qui per scoprire di più sui sistemi di classificazione","components_track_list_title":"Tracklist","next_button_label":"Pagina di video successiva","ns_already_subbed_details":"Stai già usando questo indirizzo email per ricevere la newsletter. Puoi modificare le preferenze delle email in qualsiasi momento nella pagina delle impostazioni dell’account.","ns_already_subbed_title":"Sei già iscritto","ns_check_email_details":"Per confermare la tua iscrizione alla mailing list di Rockstar Games, verifica il tuo indirizzo email tramite il link che ti abbiamo inviato all’indirizzo email che hai usato per iscriverti.","ns_check_email_title":"Controlla la tua mail","ns_confirm_after_register_details":"Non hai acconsentito a ricevere le email di marketing durante la creazione dell\'account. Vuoi ancora iscriverti alla nostra newsletter?","ns_confirm_after_register_title":"Conferma la tua iscrizione","ns_confirm_details":"Conferma che vuoi iscriverti alla Newsletter di Rockstar Games cliccando sul pulsanto qui sotto.","ns_confirm_title":"Conferma la tua iscrizione","ns_cta_button_text":"Iscriviti","ns_cta_text":"Iscriviti alla nostra newsletter via email per ricevere i dettagli, gli annunci e gli aggiornamenti sui giochi, i dettagli sugli eventi speciali e sulle offerte, e altro da parte di Rockstar Games e dai nostri soci.","ns_cta_title":"Iscriviti alla mailing list di Rockstar Games","ns_cta_title_twitchdrops":"Non perdere il prossimo omaggio di GTA Online","ns_error_generic_details":"Non è stato possibile procedere con l’iscrizione di questo indirizzo email alla nostra newsletter in questo momento.","ns_error_generic_title":"Errore","ns_error_preferences_details":"Non è stato possibile procedere con l’iscrizione di questo indirizzo email alla nostra newsletter in questo momento. Modifica le preferenze della tua email nella pagina delle impostazioni dell’account o riprova più tardi.","ns_error_preferences_title":"Errore","ns_go_back_text":"No, torna indietro","ns_manage_prefs_button_text":"Gestisci le preferenze","ns_ok_button_text":"OK","ns_successfully_subscribed_details":"Hai effettuato l’iscrizione alla mailing list di Rockstar Games e riceverai regolarmente gli aggiornamenti all’indirizzo email che hai usato per iscriverti. Puoi modificare le preferenze delle email in qualsiasi momento nella pagina delle impostazioni dell’account.","ns_successfully_subscribed_title":"Iscrizione effettuata con successo","ns_yes_subscribe_text":"Sì, iscriviti","previous_button_label":"Pagina di video precedente","profile_silhouette_mugshot":"Foto segnaletica silhouette","rp_icon":"Categoria RP","wasted_error_404_new":"La pagina che stai cercando non esiste o si è verificato un altro errore.","wasted_home":"Home"},"ja-JP":{"aria_label_open_new_window":"(新しいウィンドウで開きます)","carousel_learn_more":"詳細を見る","carousel_watch_more":"今すぐ視聴","components_ratings_link_alt":"レーティング：{rating}レーティングについての詳細はこちらをクリックしてください","components_track_list_title":"トラックリスト","next_button_label":"次のビデオページ","ns_already_subbed_details":"このメールアドレスで既にニュースレターアップデートを受け取っています。アカウント設定のページからいつでもメール受信設定を変更できます。","ns_already_subbed_title":"サブスクリプション登録済み","ns_check_email_details":"ロックスター・ゲームスのメールリストへのサブスクリプション登録を確認するため、登録に使用したメールアドレスに送られたリンクからメールアドレスを認証してください。","ns_check_email_title":"メールを確認してください","ns_confirm_after_register_details":"アカウント作成時にマーケティングメールを受け取ることを選択していません。ニュースレターのサブスクリプション登録をしますか？","ns_confirm_after_register_title":"サブスクリプション登録を承認する","ns_confirm_details":"下のボタンをクリックすることでロックスター・ゲームスのニュースレターにサブスクリプション登録をすることを承認してください。","ns_confirm_title":"サブスクリプション登録を承認してください","ns_cta_button_text":"サブスクリプション登録をしましょう","ns_cta_text":"メールニュースレターに登録して、ゲーム発表やアップデート、特別イベントやオファーの詳細など、ロックスター・ゲームスと関連会社からの情報を受け取りましょう。","ns_cta_title":"ロックスター・ゲームスのメールリストへのサブスクリプション登録","ns_cta_title_twitchdrops":"次回の「GTAオンライン」の無料ギフトをお見逃しなく","ns_error_generic_details":"現在このメールアドレスでニュースレターに登録することはできません。","ns_error_generic_title":"エラー","ns_error_preferences_details":"現在このメールアドレスでニュースレターに登録することはできません。アカウント設定のページからメール受信設定を変更するか、後ほど再度お試しください。","ns_error_preferences_title":"エラー","ns_go_back_text":"戻ります","ns_manage_prefs_button_text":"設定を管理する","ns_ok_button_text":"OK","ns_successfully_subscribed_details":"ロックスター・ゲームスのメールリストに登録されました。登録したメールアドレスに定期的にアップデートが送信されます。アカウント設定のページからいつでもメール受信設定を管理できます。","ns_successfully_subscribed_title":"サブスクリプション登録が完了しました","ns_yes_subscribe_text":"サブスクリプション登録します","previous_button_label":"前のビデオページ","profile_silhouette_mugshot":"シルエット顔写真","rp_icon":"RPカテゴリー","wasted_error_404_new":"お探しのページが存在しない、もしくはエラーが起こりました。","wasted_home":"ホーム"},"ko-KR":{"aria_label_open_new_window":"(새 창에서 열기)","carousel_learn_more":"더 알아보기","carousel_watch_more":"지금 감상하기","components_ratings_link_alt":"등급 분류: {rating}. 등급 분류 제도에 대해 더 자세히 알아보려면 여기를 클릭하십시오","components_track_list_title":"트랙리스트","next_button_label":"다음 비디오 페이지","ns_already_subbed_details":"이미 이 이메일 주소로 뉴스레터 최신 정보를 수신하고 있습니다. 계정 설정 페이지에서 언제든지 이메일 설정을 변경할 수 있습니다.","ns_already_subbed_title":"이미 구독하고 있음","ns_check_email_details":"Rockstar Games 이메일 리스트 구독 상황을 확인하려면 가입 시 사용한 이메일 주소로 전송된 링크를 통해 이메일 주소를 인증하십시오.","ns_check_email_title":"이메일 확인하기","ns_confirm_after_register_details":"계정 생성 시 마케팅 이메일 수신 동의을 선택하지 않았습니다. 그래도 뉴스레터를 구독하시겠습니까?","ns_confirm_after_register_title":"구독 확인하기","ns_confirm_details":"아래 버튼을 클릭하여 Rockstar Games 뉴스레터 구독 여부를 확인하십시오.","ns_confirm_title":"구독 확인하기","ns_cta_button_text":"지금 구독하기","ns_cta_text":"이메일 뉴스레터를 구독하면 Rockstar Games 및 관련 제휴사로부터 게임 공지 사항, 업데이트, 특별 이벤트 및 혜택에 관한 세부 정보 등 다양한 정보를 받아보실 수 있습니다.","ns_cta_title":"Rockstar Games 이메일 리스트 구독하기","ns_cta_title_twitchdrops":"다음 무료 GTA 온라인 선물을 놓치지 마십시오","ns_error_generic_details":"현재 이 이메일 주소로 뉴스레터를 구독할 수 없습니다.","ns_error_generic_title":"오류","ns_error_preferences_details":"현재 해당 이메일 주소로 뉴스레터를 구독할 수 없습니다. 계정 설정 페이지에서 이메일 설정을 변경하거나 나중에 다시 시도하십시오.","ns_error_preferences_title":"오류","ns_go_back_text":"아니오, 뒤로 갑니다","ns_manage_prefs_button_text":"설정 관리","ns_ok_button_text":"확인","ns_successfully_subscribed_details":"Rockstar Games 이메일 리스트를 구독합니다. 가입하신 이메일 주소로 최신 정보가 정기적으로 전달됩니다. 계정 설정 페이지에서 언제든지 이메일 설정을 관리할 수 있습니다.","ns_successfully_subscribed_title":"구독 완료","ns_yes_subscribe_text":"네, 구독합니다","previous_button_label":"이전 비디오 페이지","profile_silhouette_mugshot":"실루엣 머그샷","rp_icon":"RP 카테고리","wasted_error_404_new":"찾고 계신 페이지가 존재하지 않거나 오류가 발생했습니다.","wasted_home":"홈"},"pl-PL":{"aria_label_open_new_window":"(Otwórz w nowym oknie)","carousel_learn_more":"Dowiedz się więcej","carousel_watch_more":"Obejrzyj","components_ratings_link_alt":"Klasyfikacja wiekowa: {rating}. Kliknij tutaj, aby dowiedzieć się więcej o systemie klasyfikacji wiekowej","components_track_list_title":"Lista utworów","next_button_label":"Następna strona z filmami","ns_already_subbed_details":"Już otrzymujesz powiadomienia o nowościach na ten adres e-mail. Zmień swoje preferencje w dowolnym momencie w ustawieniach swojego konta.","ns_already_subbed_title":"Subskrypcja jest już aktywna","ns_check_email_details":"Aby potwierdzić swoją subskrypcję listy mailingowej Rockstar Games, zweryfikuj swój adres e-mail poprzez link wysłany do twojej skrzynki odbiorczej.","ns_check_email_title":"Sprawdź swoją pocztę","ns_confirm_after_register_details":"Nie udzielono zgody na otrzymywanie powiadomień marketingowych przy zakładaniu konta. Czy chcesz subskrybować naszą listę mailingową?","ns_confirm_after_register_title":"Potwierdź swoją subskrypcję","ns_confirm_details":"Należy potwierdzić swoją subskrypcję listy mailingowej Rockstar Games poprzez kliknięcie poniższego przycisku.","ns_confirm_title":"Potwierdź swoją subskrypcję","ns_cta_button_text":"Subskrybuj teraz","ns_cta_text":"Zapisz się, aby otrzymywać powiadomienia o nowościach dotyczących gier i aktualizacji, a także informacje na temat specjalnych wydarzeń i ofert oraz więcej od Rockstar Games i naszych oddziałów.","ns_cta_title":"Subskrybuj listę mailingową Rockstar Games","ns_cta_title_twitchdrops":"Nie przegap kolejnych darmowych korzyści w GTA Online","ns_error_generic_details":"Nie możemy w tym momencie dodać twojego adresu do listy mailingowej Rockstar Games.","ns_error_generic_title":"Błąd","ns_error_preferences_details":"Nie możemy w tym momencie dodać twojego adresu do listy mailingowej Rockstar Games. Zmień swoje preferencje w ustawieniach swojego konta lub spróbuj ponownie później.","ns_error_preferences_title":"Błąd","ns_go_back_text":"Nie, cofnij","ns_manage_prefs_button_text":"Aktualizuj swoje preferencje","ns_ok_button_text":"OK","ns_successfully_subscribed_details":"Aby potwierdzić swoją subskrypcję listy mailingowej Rockstar Games, zweryfikuj swój adres e-mail poprzez link wysłany do twojej skrzynki odbiorczej. Zmień swoje preferencje w dowolnym momencie w ustawieniach swojego konta.","ns_successfully_subscribed_title":"Pomyślnie zasubskrybowano","ns_yes_subscribe_text":"Tak, subskrybuj","previous_button_label":"Poprzednia strona z filmami","profile_silhouette_mugshot":"Zdjęcie sylwetki","rp_icon":"Poziom RP","wasted_error_404_new":"Strona, której szukasz, nie istnieje lub wystąpił inny błąd.","wasted_home":"Strona główna"},"pt-BR":{"aria_label_open_new_window":"(Abre em uma nova janela)","carousel_learn_more":"Saiba mais","carousel_watch_more":"Assistir agora","components_ratings_link_alt":"Classificação Indicativa: {rating}. Clique aqui para saber mais sobre sistemas de classificação indicativa.","components_track_list_title":"Lista de faixas","next_button_label":"Próxima página de vídeos","ns_already_subbed_details":"Você já está recebendo atualizações do newsletter neste endereço de e-mail. Mude suas preferências de e-mail a qualquer momento na página de configurações da sua conta.","ns_already_subbed_title":"Já está inscrito","ns_check_email_details":"Para confirmar sua inscrição na lista de e-mails da Rockstar Games, verifique seu endereço de e-mail pelo link enviado para o endereço que você usou para se inscrever.","ns_check_email_title":"Verifique seu e-mail","ns_confirm_after_register_details":"Você escolheu não receber e-mails de marketing quando criou a sua conta. Deseja se inscrever no nosso newsletter?","ns_confirm_after_register_title":"Confirme sua inscrição","ns_confirm_details":"Confirme que você deseja se inscrever no newsletter da Rockstar Games clicando no botão abaixo.","ns_confirm_title":"Confirme sua inscrição","ns_cta_button_text":"Inscrever-se","ns_cta_text":"Inscreva-se no nosso newsletter para receber informações sobre atualizações e anúncios, detalhes sobre eventos e ofertas especiais e mais da Rockstar Games e afiliadas.","ns_cta_title":"Inscreva-se na lista de e-mails da Rockstar Games","ns_cta_title_twitchdrops":"Não perca o próximo presente gratuito do GTA Online","ns_error_generic_details":"No momento, não é possível se inscrever no nosso newsletter usando este endereço de e-mail.","ns_error_generic_title":"Erro","ns_error_preferences_details":"No momento, não é possível se inscrever no nosso newsletter usando o seu endereço de e-mail. Mude suas preferências de e-mail a qualquer momento na página de configurações da sua conta ou tente novamente mais tarde.","ns_error_preferences_title":"Erro","ns_go_back_text":"Não, voltar","ns_manage_prefs_button_text":"Gerenciar preferências","ns_ok_button_text":"OK","ns_successfully_subscribed_details":"Você está inscrito na lista de e-mails da Rockstar Games e receberá atualizações periódicas no endereço de e-mail que usou para se inscrever. Gerencie suas preferências de e-mail a qualquer momento na página de configurações da sua conta.","ns_successfully_subscribed_title":"Inscrição efetuada","ns_yes_subscribe_text":"Sim, fazer inscrição","previous_button_label":"Página anterior de vídeos","profile_silhouette_mugshot":"Foto da silhueta","rp_icon":"Categoria de RP","wasted_error_404_new":"A página que você procura não existe ou ocorreu um erro.","wasted_home":"Início"},"ru-RU":{"aria_label_open_new_window":"(ссылка откроется в новом окне)","carousel_learn_more":"Подробности","carousel_watch_more":"Смотреть сейчас","components_ratings_link_alt":"Рейтинг: {rating}. Нажмите, чтобы узнать больше о системе рейтинга","components_track_list_title":"Список песен","next_button_label":"Следующая страница с видео","ns_already_subbed_details":"Вы уже получаете письма по рассылке на этот адрес электронной почты. Вы можете изменить настройки электронной почты в любое время на странице настроек учетной записи.","ns_already_subbed_title":"Подписка уже оформлена","ns_check_email_details":"Чтобы подтвердить подписку на рассылку электронных писем Rockstar Games, пожалуйста, подтвердите адрес электронной почты, нажав на ссылку в письме, полученном на адрес электронной почты, который вы указали при оформлении подписки.","ns_check_email_title":"Проверьте электронную почту","ns_confirm_after_register_details":"Вы не дали согласия на получение рекламных писем во время создания учетной записи. Вы все еще хотите оформить подписку на нашу рассылку?","ns_confirm_after_register_title":"Подтвердите подписку","ns_confirm_details":"Пожалуйста, подтвердите, что вы хотите подписаться на рассылку электронных писем Rockstar Games, нажав на кнопку ниже.","ns_confirm_title":"Подтвердите подписку","ns_cta_button_text":"Оформить подписку","ns_cta_text":"Подпишитесь на нашу рассылку электронных писем, чтобы получать анонсы и информацию об обновлении игр, подробности о специальных событиях и скидках, а также другую информацию от Rockstar Games и наших партнеров.","ns_cta_title":"Подпишитесь на рассылку электронных писем Rockstar Games","ns_cta_title_twitchdrops":"Не пропустите следующий подарок в GTA Online","ns_error_generic_details":"Невозможно оформить подписку на нашу рассылку для этого адреса электронной почты в данный момент.","ns_error_generic_title":"Ошибка","ns_error_preferences_details":"Невозможно оформить подписку на нашу рассылку для этого адреса электронной почты в данный момент. Вы можете изменить настройки электронной почты на странице настроек учетной записи или повторить попытку позже.","ns_error_preferences_title":"Ошибка","ns_go_back_text":"Нет, вернуться","ns_manage_prefs_button_text":"Изменить настройки учетной записи","ns_ok_button_text":"OK","ns_successfully_subscribed_details":"Подписка на рассылку электронных писем Rockstar Games оформлена, и вы будете регулярно получать новости на адрес электронной почты, указанный при оформлении. Вы можете изменить настройки электронной почты в любое время на странице настроек учетной записи.","ns_successfully_subscribed_title":"Подписка оформлена","ns_yes_subscribe_text":"Да, подписаться","previous_button_label":"Предыдущая страница с видео","profile_silhouette_mugshot":"Силуэт игрока","rp_icon":"Категория опыта","wasted_error_404_new":"Запрашиваемой вами страницы не существует, или возникла ошибка.","wasted_home":"Главная страница"},"zh-CN":{"aria_label_open_new_window":"（在新窗口中打开）","carousel_learn_more":"了解更多","carousel_watch_more":"马上观看","components_ratings_link_alt":"评级：{rating}。点击此处了解评级系统的更多详情。","components_track_list_title":"曲目列表","next_button_label":"下一页视频","ns_already_subbed_details":"您的电子邮件地址已在接收新闻通讯更新。您可以在账户设置页面随时修改电子邮件偏好。","ns_already_subbed_title":"已订阅","ns_check_email_details":"要确认您已订阅 Rockstar Games 电子邮件列表，请通过发送到您订阅时使用的电子邮件地址中的链接验证邮箱。","ns_check_email_title":"检查您的电子邮箱","ns_confirm_after_register_details":"您在创建账户时没有选择接收营销邮件。您还想要订阅我们的新闻通讯吗？","ns_confirm_after_register_title":"确认您的订阅","ns_confirm_details":"请点击下方按钮以确认您想订阅 Rockstar Games 新闻通讯。","ns_confirm_title":"确认您的订阅","ns_cta_button_text":"立即订阅","ns_cta_text":"订阅我们的电子邮件新闻通讯，以获得来自 Rockstar Games 以及我们附属公司的游戏公告和更新、特殊活动与优惠的信息，及更多内容。","ns_cta_title":"订阅 Rockstar Games 电子邮件列表","ns_cta_title_twitchdrops":"不要错过下一份 GTA 在线模式免费礼物","ns_error_generic_details":"我们目前无法用此电子邮件地址订阅新闻通讯。","ns_error_generic_title":"错误","ns_error_preferences_details":"我们目前无法用您的电子邮件地址订阅新闻通讯。请在账户设置页面中修改电子邮件偏好，或稍后再试。","ns_error_preferences_title":"错误","ns_go_back_text":"不，返回","ns_manage_prefs_button_text":"管理偏好","ns_ok_button_text":"好的","ns_successfully_subscribed_details":"您现已订阅 Rockstar Games 电子邮件列表，您将会在您订阅时使用的电子邮件地址中收到定期更新。您可以在账户设置页面随时管理电子邮件偏好。","ns_successfully_subscribed_title":"订阅成功","ns_yes_subscribe_text":"是，订阅","previous_button_label":"上一页视频","profile_silhouette_mugshot":"剪影面部照片","rp_icon":"声望值类别","wasted_error_404_new":"您想找的页面不存在，或者出现了其他错误。","wasted_home":"主页"},"zh-TW":{"aria_label_open_new_window":"（在新視窗開啟）","carousel_learn_more":"了解更多","carousel_watch_more":"馬上觀看","components_ratings_link_alt":"評分：{rating}。點擊此處以更加了解評分系統","components_track_list_title":"曲目清單","next_button_label":"下一個影片頁面","ns_already_subbed_details":"電子報更新已以此電子郵件地址寄送給您。您可以在帳戶設定頁面隨時變更您的電子郵件偏好設定。","ns_already_subbed_title":"已經訂閱","ns_check_email_details":"為了確認您的 Rockstar Games 電子郵件通知訂閱，請以寄送到您訂閱電子郵件地址的連結，驗證您的電子郵件地址。","ns_check_email_title":"檢查您的電子郵件","ns_confirm_after_register_details":"在建立帳戶時，您並沒有選擇可接收行銷電子郵件。您仍想訂閱我們的電子報？","ns_confirm_after_register_title":"確認您的訂閱","ns_confirm_details":"請點擊以下按鈕，以確認您想訂閱 Rockstar Games 電子報。","ns_confirm_title":"確認您的訂閱","ns_cta_button_text":"立刻訂閱","ns_cta_text":"訂閱我們的電子報，以獲得遊戲公告與更新、特殊活動與優惠的詳情，以及更多來自 Rockstar Games 與相關單位的各式資訊。","ns_cta_title":"訂閱 Rockstar Games 電子郵件通知","ns_cta_title_twitchdrops":"別錯過下一個免費的 GTA 線上模式好禮","ns_error_generic_details":"我們現在無法將此電子郵件地址訂閱到我們的電子報。","ns_error_generic_title":"錯誤","ns_error_preferences_details":"我們現在無法將此電子郵件地址訂閱到我們的電子報。在帳戶設定頁面變更您的電子郵件偏好設定，或稍後再試。","ns_error_preferences_title":"錯誤","ns_go_back_text":"否，返回","ns_manage_prefs_button_text":"管理偏好","ns_ok_button_text":"好","ns_successfully_subscribed_details":"您現在已訂閱 Rockstar Games 電子郵件通知，將會在訂閱的電子郵件地址收到定期更新。您可以在帳戶設定頁面隨時管理您的電子郵件偏好設定。","ns_successfully_subscribed_title":"成功訂閱","ns_yes_subscribe_text":"是的，訂閱","previous_button_label":"上一個影片頁面","profile_silhouette_mugshot":"罪犯檔案照剪影","rp_icon":"聲望值類別","wasted_error_404_new":"您所找的頁面不存在，或者發生了其他錯誤。","wasted_home":"首頁"}}'),
        v = (y = e => {
          let {
            children: a,
            to: s = "#",
            reloadDocument: n = !1,
            alt: i = "",
            autoBlank: t = !1,
            role: o = "link",
            onClick: l = () => {},
            focused: c = !1,
            ...u
          } = e;
          const m = (0, r.useRef)(null),
            p = (0, b.useIntl)(),
            f = !/^(https?|mailto):/i.test(s),
            k = /^#/.test(s),
            v = u?.target ?? (t ? "_blank" : "_self"),
            {
              ...y
            } = u;
          let w = "";
          if ("aria-label" in y && y["aria-label"] && (w = "_blank" === v ? `${y["aria-label"]} ${p.formatMessage(h.aria_label_open_new_window)}` : y["aria-label"]), (0, r.useEffect)((() => {
              c && m?.current && m.current.focus()
            }), [m?.current, c]), k) {
            const e = e => {
              e.preventDefault(), document?.querySelector(`[id='${s.replace("#","")}']`)?.scrollIntoView({
                behavior: "smooth",
                block: "center"
              }), l && l(e)
            };
            return (0, d.jsxs)("a", {
              title: i,
              href: s,
              onClick: e,
              ...y,
              "aria-label": w,
              ref: m,
              role: o,
              children: [a, "_blank" === v && !w && (0, d.jsx)("span", {
                className: g,
                children: p.formatMessage(h.aria_label_open_new_window)
              })]
            })
          }
          if (f) return (0, d.jsxs)(_.NavLink, {
            title: i,
            to: s,
            onClick: l,
            ...y,
            "aria-label": w,
            ref: m,
            reloadDocument: n,
            children: [a, "_blank" === v && !w && (0, d.jsx)("span", {
              className: g,
              children: p.formatMessage(h.aria_label_open_new_window)
            })]
          });
          const x = Object.keys(y).filter((e => !["activeClassName", "key", "end"].includes(e))).reduce(((e, a) => ({
            ...e,
            [a]: u[a]
          })), {});
          return "function" == typeof x?.className && delete x.className, (0, d.jsxs)("a", {
            href: s,
            title: i,
            onClick: l,
            target: v,
            ...x,
            "aria-label": w,
            ref: m,
            role: o,
            children: [a, "_blank" === v && !w && (0, d.jsx)("span", {
              className: g,
              children: p.formatMessage(h.aria_label_open_new_window)
            })]
          })
        }, (0, b.withIntl)(y, k));
      var y;
      const w = (0, b.defineMessages)({
        careers_home_msg: {
          id: "careers_home_msg",
          defaultMessage: "<p>Join a tight-knit team responsible for creating and publishing some of the most popular, innovative and critically acclaimed interactive entertainment in the world including the Grand Theft Auto series, the Red Dead series and many more.</p><p>Known for our dedication to quality and authenticity, a career at Rockstar Games is an opportunity to work on some of the most cutting edge, creatively rewarding and challenging projects available in any entertainment medium with some of the most talented people in the industry.</p><p>We offer successful candidates highly competitive salary and compensation packages, including a comprehensive benefits package for all eligible employees. Rockstar Games is an equal opportunity employer.</p>"
        }
      });
      var x = s(7325);
      const j = {
          home: "rockstargames-sites-careersa9f290c70f40a29f685537afe8addab4",
          offices: "rockstargames-sites-careerscb31b21b304f27356834c830c939fe44",
          blurb: "rockstargames-sites-careersbf96699adbb2d8f39242c31a50a6b3fb",
          viewOpeningsButtonContainer: "rockstargames-sites-careersa9c8763fde24cac6bf8dd12a8db05d4d",
          viewOpeningsButton: "rockstargames-sites-careersd3e7af1440a94eb870954a8bc30658c3",
          secondary: "rockstargames-sites-careerse5d8e8ab8335f4c5511cf1080b54cb12"
        },
        N = () => {
          const {
            formatMessage: e
          } = (0, b.useIntl)(), {
            data: a
          } = (0, i.useQuery)(x.HomeData);
          return a ? (0, d.jsxs)("div", {
            className: j.home,
            children: [(0, d.jsxs)("div", {
              className: j.offices,
              children: [a.jobsOffices.map((e => (0, d.jsxs)(v, {
                to: `./offices/${e.seo_url}`,
                className: j.office,
                children: [(0, d.jsx)("dt", {
                  children: e.name
                }), (0, d.jsx)("dd", {
                  children: e.location
                })]
              }, e.name))), (0, d.jsx)(v, {
                className: j.viewOpeningsButtonContainer,
                to: "./openings",
                children: (0, d.jsx)("button", {
                  className: j.viewOpeningsButton,
                  type: "button",
                  children: "View All Openings"
                })
              })]
            }), (0, d.jsx)("div", {
              className: j.blurb,
              dangerouslySetInnerHTML: {
                __html: e(w.careers_home_msg)
              }
            })]
          }) : null
        },
        S = e => {
          let {
            headType: a,
            positions: s,
            title: n,
            openingsLinkRelative: i = "./",
            positionLinkRelative: t = "./",
            officesLinkRelative: r = "../"
          } = e;
          return (0, d.jsxs)("div", {
            className: "rockstargames-sites-careersbf41a2b448756d36d98fb0d8b685e79b",
            children: [(0, d.jsx)("h4", {
              children: (0, d.jsx)(v, {
                to: "department" === a ? `${i}?department=${encodeURIComponent(n)}` : `${r}offices/${s[0].company.seo_url}`,
                children: n
              })
            }), (0, d.jsx)("div", {
              className: "rockstargames-sites-careerse7587538c824a10b06f6295cd541f3a7",
              children: s.map((e => {
                let {
                  id: a,
                  title: s
                } = e;
                return (0, d.jsx)(v, {
                  to: `${t}position/${a}`,
                  children: s
                }, a)
              }))
            })]
          })
        };
      var R = s(6188),
        C = s.n(R);
      const T = e => {
          let {
            positions: a,
            key: s
          } = e;
          return C()(a).groupBy((e => e[s])).map(((e, a) => ({
            [s]: a,
            positions: e
          }))).value()
        },
        z = e => {
          let {
            positions: a,
            key: s
          } = e;
          return C().orderBy(a, [s], ["asc"])
        };
      var E = s(5162);
      const G = {
          positionGroups: "rockstargames-sites-careersa81b259b43f352936ee5d249dbb5bbe1",
          positionGroupsRendered: "rockstargames-sites-careersf7371914d6acac14ab4f08c52d6a5773",
          mapImg: "rockstargames-sites-careersfdb84f3aa1ad7b7952ec543f563931b6",
          office: "rockstargames-sites-careersa03133f7d49bd723ef44fab0355a6d45"
        },
        A = () => {
          const {
            office_seo: e
          } = (0, _.useParams)(), {
            data: a,
            loading: s
          } = (0, i.useQuery)(E.OfficeData, {
            variables: {
              companySlug: e
            }
          }), [n, t] = (0, r.useState)(null), [o, l] = (0, r.useState)(!1);
          return (0, r.useEffect)((() => {
            l(!1), setTimeout((() => {
              l(!0)
            }), 1e3)
          }), [s]), (0, r.useEffect)((() => {
            if (!a) return;
            const e = T({
                key: "department",
                positions: a.jobsPositionList
              }),
              s = z({
                key: "department",
                positions: e
              });
            t(s)
          }), [a]), n ? (0, d.jsxs)("div", {
            className: G.office,
            children: [(0, d.jsx)("h2", {
              children: a?.jobsOffices[0]?.name
            }), (0, d.jsx)("div", {
              className: [G.positionGroups, o ? G.positionGroupsRendered : ""].join(" "),
              children: n.map((e => {
                let {
                  department: a,
                  positions: s
                } = e;
                return (0, d.jsx)(S, {
                  positions: s,
                  title: a,
                  headType: "department",
                  openingsLinkRelative: "../openings/",
                  positionLinkRelative: "../openings/"
                }, a)
              }))
            })]
          }) : null
        };
      var q = s(4815);
      const D = {
          openings: "rockstargames-sites-careersaaf93337298bc4b3291bef25ea017fc6",
          queryDiv: "rockstargames-sites-careersa1498f400114bf9094b88c7ebe474ab9",
          sort: "rockstargames-sites-careersca1cce2b2b233ebeadcedd113fcc44e7",
          sortButtons: "rockstargames-sites-careersb3d351206fb190173e6b62d98eb395f7",
          secondary: "rockstargames-sites-careersb6cef4321769f9ed8506f4644b18aa24",
          activeSort: "rockstargames-sites-careersf4494b5f322191780f662b9830130c3e",
          heirarchy: "rockstargames-sites-careersc2a50983f46d7b4cdf8c28a73d8d1e89",
          heirarchyRendered: "rockstargames-sites-careersc4fb17fb5d82f7ab0980429e906115fd",
          primaryGrid: "rockstargames-sites-careersb06cde13a855f6a71edc76dab7989c53",
          primaryHeaderH: "rockstargames-sites-careersf421caaae0c6ef2f8fc29b25bb33c678",
          primaryIsCompany: "rockstargames-sites-careersfdc960f16fdfc81d4a8a1928ccd6d3f7",
          searchHeader: "rockstargames-sites-careersac689b82e9685d57ce0cb4610f6a4b55",
          viewOpeningsButton: "rockstargames-sites-careersf96cf546e98b2b407f2235204b1b6de1"
        },
        P = e => {
          let {
            positions: a,
            key: s
          } = e;
          return z({
            positions: T({
              positions: a,
              key: s
            }),
            key: s
          })
        },
        F = () => {
          const [e, a] = (0, r.useState)("companyName"), [s, n] = (0, r.useState)("department"), [t, o] = (0, r.useState)(null), [l, c] = (0, r.useState)(null), [u, m] = (0, r.useState)(null), [p, f] = (0, r.useState)(null), [b, h] = (0, r.useState)(!0), {
            refetch: g
          } = (0, i.useQuery)(q.OpeningsData, {
            skip: !0
          }), [k] = (0, _.useSearchParams)(), y = k.get("q"), w = (0, r.useRef)(), x = (0, _.useNavigate)(), j = k.get("department"), N = k.get("q"), R = e => {
            a(e), n("companyName" === e ? "department" : "companyName")
          }, [C, T] = (0, r.useState)(!1);
          return (0, r.useEffect)((() => {
            T(!1), setTimeout((() => {
              T(!0)
            }), 1e3)
          }), [b, e]), (0, r.useEffect)((() => {
            m({
              department: j ?? null,
              query: N ?? null
            })
          }), [j, N]), (0, r.useEffect)((() => {
            u && (c(null), f(null), h(!0), (async () => {
              try {
                const {
                  data: e
                } = await g(u);
                c(e.jobsPositionList ?? [])
              } catch (e) {
                f(String(e))
              }
            })(), h(!1))
          }), [u]), (0, r.useEffect)((() => {
            l && o((e => {
              let {
                positions: a,
                primary: s,
                secondary: n,
                rendered: i
              } = e;
              return (0, d.jsx)("div", {
                className: [D.heirarchy, i ? D.heirarchyRendered : ""].join(" "),
                children: P({
                  key: s,
                  positions: a
                }).map((e => {
                  let {
                    [s]: a, positions: i
                  } = e;
                  return (0, d.jsxs)("div", {
                    className: D.primaryGrid,
                    children: [(0, d.jsx)("h3", {
                      className: [D.primaryHeaderH, "companyName" === s ? D.primaryIsCompany : ""].join(" "),
                      children: (0, d.jsx)(v, {
                        to: "companyName" === s ? `../offices/${i[0].company.seo_url}` : `?department=${escape(i[0].department)}`,
                        children: a
                      })
                    }), P({
                      key: n,
                      positions: i
                    }).map((e => {
                      let {
                        [n]: s, positions: i
                      } = e;
                      return (0, d.jsx)(S, {
                        positions: i,
                        title: s,
                        headType: n,
                        openingsLinkRelative: "",
                        positionLinkRelative: "./",
                        officesLinkRelative: "../"
                      }, `${a}-${s}`)
                    }))]
                  }, a)
                }))
              })
            })({
              positions: l,
              primary: e,
              secondary: s,
              rendered: C
            }))
          }), [l, e, s, C]), (0, d.jsxs)("div", {
            className: D.openings,
            "data-testid": "careers-openings",
            children: [p || "", !p && b ? "Searching..." : "", p || b || !l || !j && !N ? "" : (0, d.jsxs)("p", {
              className: D.searchHeader,
              children: [`${l.length} positions found ${N?` matching "${N}"`:""}${j?` in the ${j} department`:""}.`, (0, d.jsx)(v, {
                to: "./",
                children: (0, d.jsx)("button", {
                  className: D.viewOpeningsButton,
                  type: "button",
                  children: "View All Openings"
                })
              })]
            }), (0, d.jsxs)("div", {
              className: D.queryDiv,
              children: [!b && (0, d.jsx)("form", {
                onSubmit: e => (e => {
                  e.preventDefault();
                  const a = w.current.value ?? null,
                    s = "/careers/openings" + (a ? `?q=${a}` : "");
                  document.activeElement.blur(), x(s)
                })(e),
                children: (0, d.jsx)("input", {
                  placeholder: "Search",
                  ref: w,
                  defaultValue: y,
                  enterKeyHint: "search"
                })
              }), l?.length && (0, d.jsxs)("div", {
                className: D.sort,
                children: [(0, d.jsx)("span", {
                  children: "Sort by:"
                }), (0, d.jsxs)("div", {
                  className: D.sortButtons,
                  children: [(0, d.jsx)("button", {
                    className: "companyName" === e ? D.activeSort : "",
                    onClick: () => R("companyName"),
                    type: "button",
                    children: "Location"
                  }), (0, d.jsx)("button", {
                    className: "department" === e ? D.activeSort : "",
                    onClick: () => R("department"),
                    type: "button",
                    children: "Department"
                  })]
                })]
              })]
            }), l?.length && t ? t : ""]
          })
        };
      class O extends r.Component {
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
          return this?.state?.error?.message && this?.state?.hidden ? null : this?.state?.error?.message ? (0, d.jsxs)("div", {
            className: "rockstargames-sites-careersd5c408a8b618087ef4bb452f96526b2b",
            children: [(0, d.jsx)("h1", {
              children: this.state.header ?? "An error occurred."
            }), (0, d.jsx)("span", {
              children: this.state.error.message
            })]
          }) : this.props.children
        }
      }
      var M = s(549);
      const L = "rockstargames-sites-careersb6989a5f80571f3520ddd9a4b38be7dd",
        V = "rockstargames-sites-careerseba69e1361068718abd2d11178522fd2",
        I = e => {
          let {
            position: a
          } = e;
          return (0, d.jsxs)(d.Fragment, {
            children: [(0, d.jsx)(v, {
              to: a.apply_href,
              target: "_blank",
              className: "rockstargames-sites-careersc2a919eface7612cebd931cbcb707548",
              children: "Apply now"
            }), (0, d.jsxs)("footer", {
              className: "rockstargames-sites-careersb41e4ac3ccce72e0910ef5cce67d8885",
              children: [(0, d.jsxs)(v, {
                to: `../offices/${a.company.seo_url}`,
                className: V,
                children: ["See all", (0, d.jsx)("b", {
                  children: a.company.name
                }), "positions"]
              }), (0, d.jsxs)(v, {
                to: `../openings?department=${encodeURIComponent(a.department)}`,
                className: V,
                children: ["See all", (0, d.jsx)("b", {
                  children: a.department
                }), "positions"]
              })]
            })]
          })
        },
        H = function(e) {
          let a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
            s = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          return function(n) {
            return (0, d.jsx)(O, {
              header: a,
              hidden: s,
              children: (0, d.jsx)(e, {
                ...n
              })
            })
          }
        }((() => {
          const {
            position_id: e
          } = (0, _.useParams)(), {
            data: a
          } = (0, i.useQuery)(M.PositionData, {
            variables: {
              positionId: Number(e)
            }
          });
          if (!a) return (0, d.jsx)("div", {
            className: L,
            children: "Loading..."
          });
          const {
            jobsPosition: s
          } = a;
          return (0, d.jsxs)("div", {
            className: L,
            "data-testid": "career-position",
            children: [(0, d.jsxs)("header", {
              className: "rockstargames-sites-careersbec0703b542b5179f8d788521d504601",
              children: [(0, d.jsxs)("div", {
                className: "rockstargames-sites-careersfe76418aa4c17a950081bfc2273534b4",
                children: [(0, d.jsx)(v, {
                  to: `../offices/${s.company.seo_url}`,
                  children: s.company.name
                }), (0, d.jsx)(v, {
                  to: `../openings?department=${encodeURIComponent(s.department)}`,
                  children: s.department
                })]
              }), (0, d.jsx)("h1", {
                children: s.title
              })]
            }), (0, d.jsx)("div", {
              className: "rockstargames-sites-careersccd97d1de3be5296e1eb4acdf488f769",
              dangerouslySetInnerHTML: {
                __html: s.description
              }
            }), (0, d.jsx)(I, {
              position: s
            })]
          })
        }), "That position was not found."),
        $ = () => (0, d.jsxs)("svg", {
          width: "100",
          height: "92",
          viewBox: "0 0 100 92",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: [(0, d.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M98.1426 88.6095C98.0342 88.5468 97.8592 88.5168 97.6074 88.5168H97.2245V89.4122H97.6268C97.8157 89.4122 97.9592 89.3946 98.0546 89.354C98.2301 89.2908 98.3162 89.1603 98.3162 88.9712C98.3162 88.7894 98.2588 88.6713 98.1426 88.6095ZM97.6634 88.2012C97.9791 88.2012 98.2102 88.2317 98.3551 88.2935C98.6176 88.4024 98.7453 88.6127 98.7453 88.9283C98.7453 89.1511 98.6694 89.3185 98.4995 89.4251C98.4129 89.4772 98.2907 89.5206 98.137 89.5446C98.3342 89.5745 98.4759 89.6548 98.5676 89.7877C98.6583 89.9205 98.7064 90.0478 98.7064 90.1724V90.3546C98.7064 90.4137 98.7111 90.4755 98.7129 90.5433C98.7129 90.6097 98.7222 90.6498 98.7282 90.6706L98.7453 90.7024H98.3352C98.3342 90.6969 98.3342 90.6849 98.3301 90.6808C98.3301 90.6706 98.3264 90.6632 98.3264 90.6498L98.3162 90.5719V90.3763C98.3162 90.0875 98.2375 89.8938 98.0731 89.8047C97.9791 89.7521 97.8157 89.724 97.5791 89.724H97.2245V90.7024H96.7842V88.2012H97.6634ZM96.3088 88.073C95.9291 88.4568 95.7384 88.92 95.7384 89.4597C95.7384 90.0049 95.9245 90.4695 96.3088 90.8528C96.6944 91.2389 97.1537 91.4308 97.7074 91.4308C98.256 91.4308 98.7222 91.2389 99.1051 90.8528C99.4842 90.4695 99.6764 90.0049 99.6764 89.4597C99.6764 88.92 99.4842 88.4568 99.1051 88.073C98.7171 87.6915 98.256 87.4982 97.7074 87.4982C97.1639 87.4982 96.6953 87.6915 96.3088 88.073ZM99.3277 91.0733C98.8842 91.5226 98.3426 91.7454 97.7074 91.7454C97.0727 91.7454 96.531 91.5226 96.0916 91.0733C95.649 90.6291 95.4236 90.0917 95.4236 89.4583C95.4236 88.8305 95.649 88.2935 96.094 87.8479C96.5398 87.406 97.0777 87.185 97.7074 87.185C98.3426 87.185 98.8842 87.406 99.3277 87.8479C99.7759 88.2935 100 88.8277 100 89.4583C100 90.0875 99.7759 90.6291 99.3277 91.0733Z",
            fill: "#FFFFFE"
          }), (0, d.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M98.0292 74.7408C98.0292 83.2121 91.1838 89.8466 82.4426 89.8466H17.5532C8.81667 89.8466 1.96898 83.2121 1.96898 74.7408V17.303C1.96898 8.8026 8.8875 2.14784 17.7139 2.14784H82.6065C91.2537 2.14784 98.0292 8.8026 98.0292 17.303V74.7408ZM82.6065 0.184998H17.7139C7.94722 0.184998 0 7.868 0 17.3067V74.744C0 84.3147 7.70741 91.8117 17.5532 91.8117H82.4426C92.2884 91.8117 100 84.3147 100 74.744V17.3067C100 7.707 92.362 0.184998 82.6065 0.184998Z",
            fill: "black"
          }), (0, d.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M82.6065 2.14782H17.7139C8.88751 2.14782 1.96899 8.80258 1.96899 17.303V74.7407C1.96899 83.2121 8.81668 89.8466 17.5533 89.8466H82.4426C91.1838 89.8466 98.0292 83.2121 98.0292 74.7407V17.303C98.0292 8.80258 91.2537 2.14782 82.6065 2.14782Z",
            fill: "#FCAF17"
          }), (0, d.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M50.094 33.3356H42.238L44.12 24.3956H51.4292C54.0315 24.3956 56.738 25.0695 56.738 28.2428C56.738 32.2423 53.6556 33.3356 50.094 33.3356ZM85.8769 54.7128H73.3487L71.3616 42.2673L64.0195 54.6257H62.6464C61.8139 53.1952 61.4834 51.1004 61.4834 49.8189C61.4834 47.6927 61.6371 45.6187 61.6371 42.9215C61.6371 39.3427 60.5815 37.4223 57.7639 36.7474V36.6408C63.7561 35.8114 66.4723 31.8613 66.4723 26.3003C66.4723 18.4 61.1973 16.6867 54.2857 16.6867H35.6866L27.8269 53.7736H37.7102L40.5709 40.2791H47.1408C50.645 40.2791 52.0783 41.9887 52.0783 45.258C52.0783 47.7453 51.8186 49.7146 51.8186 51.6309C51.8186 52.3394 51.9792 53.9863 52.4598 54.6257C52.4542 54.6257 59.6038 62.1375 59.6038 62.1375L53.457 75.3068C53.457 75.3068 53.457 75.3068 66.6033 67.5241L76.3991 75.0231L74.5709 62.5979L85.8769 54.7128Z",
            fill: "black"
          }), (0, d.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M80.1088 56.5253H71.7944L70.3588 47.5147L65.0579 56.4372H56.6782L61.775 61.7855L57.5833 70.7537L66.7398 65.3366L73.9523 70.863L72.6129 61.7514L80.1088 56.5253Z",
            fill: "white"
          })]
        }),
        B = "rockstargames-sites-careerse3bd61283dea7c829abcc7da73c54d68",
        J = "rockstargames-sites-careersc92cd37fa92cef71c53e496484a01c30",
        Y = "rockstargames-sites-careersd18e91b47575286953c9ebc9d8235ce2",
        U = e => {
          let {
            label: a,
            clarification: s,
            name: n,
            placeholder: i,
            type: t = "text",
            required: r = !0,
            onChange: o
          } = e;
          return r ? (0, d.jsxs)(d.Fragment, {
            children: [(0, d.jsxs)("label", {
              htmlFor: a,
              className: B,
              children: [a, (0, d.jsx)("span", {
                className: "rockstargames-sites-careerse9b91854f097416ee4f1b6851f4946ee",
                children: "*"
              })]
            }), s && (0, d.jsx)("span", {
              className: J,
              children: s
            }), (0, d.jsx)("input", {
              type: t,
              name: n,
              placeholder: i,
              className: Y,
              required: !0,
              onChange: o
            })]
          }) : (0, d.jsxs)(d.Fragment, {
            children: [(0, d.jsx)("label", {
              htmlFor: a,
              className: B,
              children: a
            }), s && (0, d.jsx)("span", {
              className: J,
              children: s
            }), (0, d.jsx)("input", {
              type: t,
              name: a,
              placeholder: i,
              className: Y,
              onChange: o
            })]
          })
        };
      var K = s(969),
        W = s.n(K);
      const Z = e => {
          let {
            label: a,
            clarification: s,
            name: n,
            data: i,
            placeholder: t,
            required: o = !0,
            update: l,
            isMulti: c
          } = e;
          const u = (0, r.useRef)(),
            [m, _] = (0, r.useState)("");
          return (0, d.jsxs)(d.Fragment, {
            children: [(0, d.jsxs)("label", {
              htmlFor: n,
              className: "rockstargames-sites-careersaf8917c0f38d4719ce7864533c29aaba",
              children: [a, o && (0, d.jsx)("span", {
                className: "rockstargames-sites-careersd99c7f3899ff4304952835b7e74a246d",
                children: "*"
              })]
            }), s && (0, d.jsx)("span", {
              className: "rockstargames-sites-careersb574bed8b8d8260461cf76980d3d97a9",
              children: s
            }), (0, d.jsx)(W(), {
              className: "rockstargames-sites-careersc69a6849f5255a862224daa265010e5c",
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
              options: i ?? [{
                value: void 0,
                label: "Loading..."
              }],
              ref: u,
              onChange: e => (e => {
                _(e || ""), l(e)
              })(e),
              isMulti: c || !1
            }), o && (0, d.jsx)("input", {
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
              value: m,
              onFocus: () => {
                u.current && u.current.focus()
              },
              required: o
            })]
          })
        },
        Q = e => {
          let {
            data: a,
            update: s
          } = e;
          const [n, i] = (0, r.useState)(Array(a?.length).fill(!1)), [t, o] = (0, r.useState)(!1);
          (0, r.useEffect)((() => {
            3 === n.filter((e => e)).length ? o(!0) : t && o(!1);
            const e = a?.custom_field_options?.filter(((e, a) => n[a])).map((e => {
              let {
                value: a
              } = e;
              return a
            }));
            s && s({
              selectedSkills: e
            })
          }), [n]);
          const l = a?.custom_field_options?.map(((e, a) => {
            let {
              label: s,
              value: r
            } = e;
            return (0, d.jsxs)("div", {
              className: "rockstargames-sites-careerse00dc86b00fda6540d57f1f23ef8f27f",
              children: [(0, d.jsx)("input", {
                type: "checkbox",
                id: s.toLowerCase(),
                name: s.toLowerCase(),
                value: r,
                defaultChecked: n[a],
                onClick: () => (e => {
                  if (n[e]) {
                    const a = [...n];
                    return a[e] = !1, void i([...a])
                  }
                  if (!n[e] && 3 === n.filter((e => e)).length) return;
                  const a = [...n];
                  a[e] = !0, i([...a])
                })(a),
                disabled: !n[a] && t
              }), (0, d.jsx)("label", {
                className: "rockstargames-sites-careersd1595bba349ac9562964a7a153a663c5",
                htmlFor: s.toLowerCase(),
                children: s
              })]
            }, s.toLowerCase())
          }));
          return (0, d.jsxs)(d.Fragment, {
            children: [(0, d.jsxs)("legend", {
              className: "rockstargames-sites-careersecb3cfde7bc2fedb608dd19545e20bca",
              children: ["Which option(s) best represents your strongest skillset? Choose up to 3", (0, d.jsx)("span", {
                className: "rockstargames-sites-careersd690338d93acfd799a9d2eefe7622737",
                children: "*"
              })]
            }), (0, d.jsx)("div", {
              className: "rockstargames-sites-careerse4a45778856d715f4c72e3912802fc82",
              children: l
            })]
          })
        },
        X = "rockstargames-sites-careersf597a2c6c75bcc5ad5e52d6d71b0b443",
        ee = e => {
          let {
            label: a,
            seasonsData: s,
            required: n = !0,
            updateSeason: i,
            updateYear: t
          } = e;
          const o = (0, r.useRef)(),
            l = (0, r.useRef)(),
            [c, u] = (0, r.useState)(""),
            [m, _] = (0, r.useState)(""),
            p = function() {
              let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 10;
              const a = (new Date).getFullYear(),
                s = [];
              for (let n = a + e; n >= a - e; n -= 1) s.push({
                label: `${n}`,
                value: n
              });
              return s
            }(),
            f = {
              opacity: 0,
              width: "100%",
              height: 0,
              position: "absolute",
              padding: 0,
              border: 0
            };
          return (0, d.jsxs)(d.Fragment, {
            children: [(0, d.jsxs)("label", {
              className: "rockstargames-sites-careersf8dc2d5ed2cbbccbef0c89cb53a39724",
              htmlFor: "anticipated_graduation",
              children: [a, n && (0, d.jsx)("span", {
                className: "rockstargames-sites-careerse78cf5de326fc7af0192e20cad462705",
                children: "*"
              })]
            }), (0, d.jsxs)("div", {
              className: "rockstargames-sites-careersfa0860f0d39860404f57cb30df1c6063",
              children: [(0, d.jsx)(W(), {
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
                options: s,
                ref: o,
                onChange: e => (e => {
                  i(e), u(e ?? "")
                })(e)
              }), (0, d.jsx)(W(), {
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
                ref: l,
                onChange: e => (e => {
                  t(e), _(e ?? "")
                })(e)
              }), n && (0, d.jsxs)(d.Fragment, {
                children: [(0, d.jsx)("input", {
                  tabIndex: -1,
                  autoComplete: "off",
                  style: f,
                  onChange: () => null,
                  value: c,
                  onFocus: () => {
                    o.current && o.current.focus()
                  },
                  required: n
                }), (0, d.jsx)("input", {
                  tabIndex: -1,
                  autoComplete: "off",
                  style: f,
                  onChange: () => null,
                  value: m,
                  onFocus: () => {
                    l.current && l.current.focus()
                  },
                  required: n
                })]
              })]
            })]
          })
        };
      var ae = s(8930);
      const se = "rockstargames-sites-careersebcbfd45730eb5d64a7d824a18595f39",
        ne = () => (0, d.jsxs)(d.Fragment, {
          children: [(0, d.jsx)($, {}), (0, d.jsxs)("div", {
            className: "rockstargames-sites-careersd4f97b06dd53577b55a68bfe8a3f2ebb",
            children: [(0, d.jsxs)("p", {
              className: "rockstargames-sites-careersa7c9a12d11eb4800c8a6c6057c7db8ec",
              children: ["Thank you for your interest in Rockstar Games. If you'd like us to stay in touch with you regarding future opportunities, please submit your information below. To view our current job openings, please", " ", (0, d.jsx)(v, {
                to: "../openings",
                className: se,
                children: "visit our careers site"
              }), "."]
            }), (0, d.jsxs)("p", {
              className: "rockstargames-sites-careersb8047efacfb74010d58e3ca7cca5d636",
              children: [(0, d.jsx)("span", {
                className: "rockstargames-sites-careersbff7979a92eb6f05b3ffdbfece0a052d",
                children: "*"
              }), "indicates a required field"]
            })]
          })]
        }),
        ie = () => (0, d.jsxs)("p", {
          className: "rockstargames-sites-careerse3683bd2e5dd63fda7b57304e5b2c4c3",
          children: ["For all information on how we use your personal data please see our", " ", (0, d.jsx)(v, {
            to: "https://www.rockstargames.com/careers-privacy",
            className: se,
            children: "applicant privacy policy"
          }), "."]
        }),
        te = () => (0, d.jsxs)("span", {
          children: ["Thank you for your interest in Rockstar Games. Your information has submitted successfully. To view our current job openings, please", " ", (0, d.jsx)(v, {
            to: "../openings",
            className: se,
            children: "visit our careers site"
          }), "."]
        }),
        re = () => {
          const [e, a] = (0, r.useState)(null), [s, t] = (0, r.useState)({}), [o, l] = (0, r.useState)(!1), [c, u] = (0, r.useState)(!1), [m, _] = (0, r.useState)(""), [p, f] = (0, r.useState)(!1), [b, h] = (0, r.useState)(!1), [g, k] = (0, r.useState)(!1), {
            data: v
          } = (0, i.useQuery)(ae.greenhouseData), [y] = (0, i.useMutation)(ae.AddProspect), w = n => {
            let {
              key: i,
              value: t
            } = n;
            const r = [...e?.custom_fields?.filter((e => e.id && e.id !== s[i]?.id)) ?? []];
            x(s[i]?.id, t), a({
              ...e,
              custom_fields: [...r, {
                id: s[i]?.id,
                value: t
              }]
            })
          }, x = (e, a) => {
            const n = s.university_sponsored_event?.id,
              i = s.university_sponsored_event?.custom_field_options.find((e => "Project Review" === e.label)).value;
            n && e === n && (i && a === i ? u(!0) : (u(!1), w({
              key: "project_review_game_name",
              value: void 0
            })))
          };
          (0, r.useEffect)((() => {
            if (!v) return;
            const {
              greenhouseApiCustomFields: e
            } = v;
            t({
              anticipated_graduation_season: e.find((e => {
                let {
                  name_key: a
                } = e;
                return "anticipated_graduation_season" === a
              })),
              anticipated_graduation_year: e.find((e => {
                let {
                  name_key: a
                } = e;
                return "anticipated_graduation_year" === a
              })),
              degree: e.find((e => {
                let {
                  name_key: a
                } = e;
                return "degree__university_" === a
              })),
              discipline: e.find((e => {
                let {
                  name_key: a
                } = e;
                return "current_major__university__candidate_1663010161.6894388" === a
              })),
              school_name: e.find((e => {
                let {
                  name_key: a
                } = e;
                return "school_name" === a
              })),
              skills: e.find((e => {
                let {
                  name_key: a
                } = e;
                return "skills" === a
              })),
              university_sponsored_event: e.find((e => {
                let {
                  name_key: a
                } = e;
                return "university_sponsored_event" === a
              })),
              project_review_game_name: e.find((e => {
                let {
                  name_key: a
                } = e;
                return "project_review_game_name" === a
              })),
              preferred_work_location: e.find((e => {
                let {
                  name_key: a
                } = e;
                return "preferred_location__university_multi_" === a
              })),
              attended_university_event: e.find((e => {
                let {
                  name_key: a
                } = e;
                return "attended_university_event___university_" === a
              }))
            })
          }), [v]), (0, r.useEffect)((() => {
            v && (o || w({
              key: "university_sponsored_event",
              value: void 0
            }))
          }), [o]);
          const j = (0, r.useCallback)((e => {
            _(e)
          }), []);
          return v || s ? b ? (0, d.jsx)(te, {}) : (0, d.jsxs)("form", {
            className: "rockstargames-sites-careersca0903240df6174fa0c5f5abcd7eecd7",
            onSubmit: a => (async a => {
              a.preventDefault();
              const s = {
                recaptcha_token: m,
                data: e
              };
              if (s.recaptcha_token) try {
                k(!0), await y({
                  variables: s
                }), f((e => !e)), k(!1), h(!0)
              } catch (e) {
                console.error(e)
              }
            })(a),
            "data-testid": "careers-register",
            children: [(0, d.jsx)(ne, {}), (0, d.jsx)(U, {
              label: "First Name",
              placeholder: "Enter first name",
              name: "first_name",
              onChange: s => a({
                ...e,
                first_name: s.target.value
              })
            }), (0, d.jsx)(U, {
              label: "Last Name",
              placeholder: "Enter last name",
              name: "last_name",
              onChange: s => a({
                ...e,
                last_name: s.target.value
              })
            }), (0, d.jsx)(U, {
              label: "Email Address",
              placeholder: "Enter email address",
              name: "email",
              type: "email_addresses",
              onChange: s => a({
                ...e,
                email_addresses: [{
                  type: "personal",
                  value: s.target.value
                }]
              })
            }), (0, d.jsx)(Z, {
              label: "Please indicate your preferred studio location.",
              clarification: "Note: Please only select locations where you currently have a legal right to work.",
              placeholder: "Select your preferred work location",
              name: "preferred_location__university_multi_",
              data: s.preferred_work_location?.custom_field_options,
              update: e => {
                w({
                  key: "preferred_work_location",
                  value: e.length && e[0].value ? e.map((e => {
                    let {
                      value: a
                    } = e;
                    return a
                  })) : []
                })
              },
              isMulti: !0
            }), (0, d.jsx)(Z, {
              label: "What school do you currently attend?",
              placeholder: "Select your school",
              name: "school_name",
              data: s.school_name?.custom_field_options,
              update: s => s ? a({
                ...e,
                educations: [{
                  ...e?.educations?.[0] ?? {},
                  school_id: s.value
                }]
              }) : null
            }), (0, d.jsx)(U, {
              label: s.discipline?.description,
              placeholder: "Enter major/course subject",
              name: "discipline",
              onChange: e => w({
                key: "discipline",
                value: e.target.value
              })
            }), (0, d.jsx)(Z, {
              label: s.degree?.description,
              placeholder: "Select your degree level",
              name: "degree",
              data: s.degree?.custom_field_options,
              update: e => w({
                key: "degree",
                value: e ? e.value : void 0
              })
            }), (0, d.jsx)(ee, {
              label: "When do you anticipate graduating?",
              seasonsData: s.anticipated_graduation_season?.custom_field_options,
              updateSeason: e => w({
                key: "anticipated_graduation_season",
                value: e ? e.value : void 0
              }),
              updateYear: e => w({
                key: "anticipated_graduation_year",
                value: e ? e.value : void 0
              })
            }), (0, d.jsx)(Z, {
              label: "Have you recently attended a university-sponsored event with Rockstar Games?",
              placeholder: "Select yes or no",
              name: "attended_university_event",
              data: s.attended_university_event?.custom_field_options,
              update: e => {
                l(!!e && "Yes" === e.label), w({
                  key: "attended_university_event",
                  value: e ? e.value : void 0
                })
              }
            }), o && (0, d.jsx)(Z, {
              label: "What event did you attend?",
              data: s.university_sponsored_event?.custom_field_options,
              name: "university_sponsored_event",
              placeholder: "Select a Rockstar event",
              update: e => w({
                key: "university_sponsored_event",
                value: e ? e.value : void 0
              })
            }), o && c && (0, d.jsx)(U, {
              label: "What is the game you are working on?",
              placeholder: "Enter game name",
              name: "project_review_game_name",
              onChange: e => w({
                key: "project_review_game_name",
                value: e ? e?.target?.value : void 0
              })
            }), (0, d.jsx)(Q, {
              data: s.skills,
              update: e => {
                let {
                  selectedSkills: a
                } = e;
                return w({
                  key: "skills",
                  value: a
                })
              }
            }), (0, d.jsx)(U, {
              label: "Please submit a link to your website/portfolio.",
              placeholder: "Enter URL",
              name: "website_addresses",
              required: !1,
              type: "url",
              onChange: s => a({
                ...e,
                website_addresses: [{
                  type: "personal",
                  value: s.target.value
                }]
              })
            }), (0, d.jsx)(ie, {}), (0, d.jsx)(n.GoogleReCaptcha, {
              onVerify: j,
              refreshReCaptcha: p
            }), (0, d.jsx)("input", {
              type: "submit",
              className: "rockstargames-sites-careersd7471cfc34a828a435a38bf41fc16fce",
              disabled: g
            })]
          }) : "Loading..."
        },
        oe = () => {
          const e = [{
            path: "/",
            element: (0, d.jsx)(N, {})
          }, {
            path: "/accessibility",
            element: (0, d.jsx)(f, {})
          }, {
            path: "/offices/:office_seo",
            element: (0, d.jsx)(A, {})
          }, {
            path: "/openings",
            element: (0, d.jsx)(F, {})
          }, {
            path: "/openings/position/:position_id",
            element: (0, d.jsx)(H, {})
          }, {
            path: "/register",
            element: (0, d.jsx)(re, {})
          }];
          return (0, _.useRoutes)(e)
        },
        le = () => (0, d.jsx)(n.GoogleReCaptchaProvider, {
          reCaptchaKey: "6LcY_tohAAAAACJJTRGxlkVO89ud1jP0WbeHftvL",
          children: (0, d.jsx)("div", {
            className: "rockstargames-sites-careersc3b126aad3fb8a458d027138e7beb708",
            children: (0, d.jsxs)("div", {
              className: "rockstargames-sites-careersa1abc388b89589494df434c53aaf3198",
              children: [(0, d.jsx)(m, {}), (0, d.jsx)("div", {
                className: "rockstargames-sites-careersd4698361acb311054e478e1413357320",
                children: (0, d.jsx)(oe, {})
              })]
            })
          })
        })
    },
    549: e => {
      var a = {
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

      function s(e, a) {
        if ("FragmentSpread" === e.kind) a.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var n = e.type;
          "NamedType" === n.kind && a.add(n.name.value)
        }
        e.selectionSet && e.selectionSet.selections.forEach((function(e) {
          s(e, a)
        })), e.variableDefinitions && e.variableDefinitions.forEach((function(e) {
          s(e, a)
        })), e.definitions && e.definitions.forEach((function(e) {
          s(e, a)
        }))
      }
      a.loc.source = {
        body: "query PositionData($positionId: Float!) {\n    jobsPosition(id: $positionId) {\n        apply_href\n        company {\n            name\n            seo_url\n        }\n        department\n        description\n        title\n    }\n}\n",
        name: "GraphQL request",
        locationOffset: {
          line: 1,
          column: 1
        }
      };
      var n = {};

      function i(e, a) {
        for (var s = 0; s < e.definitions.length; s++) {
          var n = e.definitions[s];
          if (n.name && n.name.value == a) return n
        }
      }
      a.definitions.forEach((function(e) {
        if (e.name) {
          var a = new Set;
          s(e, a), n[e.name.value] = a
        }
      })), e.exports = a, e.exports.PositionData = function(e, a) {
        var s = {
          kind: e.kind,
          definitions: [i(e, a)]
        };
        e.hasOwnProperty("loc") && (s.loc = e.loc);
        var t = n[a] || new Set,
          r = new Set,
          o = new Set;
        for (t.forEach((function(e) {
            o.add(e)
          })); o.size > 0;) {
          var l = o;
          o = new Set, l.forEach((function(e) {
            r.has(e) || (r.add(e), (n[e] || new Set).forEach((function(e) {
              o.add(e)
            })))
          }))
        }
        return r.forEach((function(a) {
          var n = i(e, a);
          n && s.definitions.push(n)
        })), s
      }(a, "PositionData")
    },
    4815: e => {
      var a = {
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

      function s(e, a) {
        if ("FragmentSpread" === e.kind) a.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var n = e.type;
          "NamedType" === n.kind && a.add(n.name.value)
        }
        e.selectionSet && e.selectionSet.selections.forEach((function(e) {
          s(e, a)
        })), e.variableDefinitions && e.variableDefinitions.forEach((function(e) {
          s(e, a)
        })), e.definitions && e.definitions.forEach((function(e) {
          s(e, a)
        }))
      }
      a.loc.source = {
        body: "query OpeningsData($department: String, $query: String) {\n    jobsPositionList(department: $department, q: $query) {\n        company {\n            seo_url\n        }\n        companyName: company_name\n        department\n        department_slug\n        id\n        title\n    }\n}\n",
        name: "GraphQL request",
        locationOffset: {
          line: 1,
          column: 1
        }
      };
      var n = {};

      function i(e, a) {
        for (var s = 0; s < e.definitions.length; s++) {
          var n = e.definitions[s];
          if (n.name && n.name.value == a) return n
        }
      }
      a.definitions.forEach((function(e) {
        if (e.name) {
          var a = new Set;
          s(e, a), n[e.name.value] = a
        }
      })), e.exports = a, e.exports.OpeningsData = function(e, a) {
        var s = {
          kind: e.kind,
          definitions: [i(e, a)]
        };
        e.hasOwnProperty("loc") && (s.loc = e.loc);
        var t = n[a] || new Set,
          r = new Set,
          o = new Set;
        for (t.forEach((function(e) {
            o.add(e)
          })); o.size > 0;) {
          var l = o;
          o = new Set, l.forEach((function(e) {
            r.has(e) || (r.add(e), (n[e] || new Set).forEach((function(e) {
              o.add(e)
            })))
          }))
        }
        return r.forEach((function(a) {
          var n = i(e, a);
          n && s.definitions.push(n)
        })), s
      }(a, "OpeningsData")
    },
    5162: e => {
      var a = {
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

      function s(e, a) {
        if ("FragmentSpread" === e.kind) a.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var n = e.type;
          "NamedType" === n.kind && a.add(n.name.value)
        }
        e.selectionSet && e.selectionSet.selections.forEach((function(e) {
          s(e, a)
        })), e.variableDefinitions && e.variableDefinitions.forEach((function(e) {
          s(e, a)
        })), e.definitions && e.definitions.forEach((function(e) {
          s(e, a)
        }))
      }
      a.loc.source = {
        body: "query OfficeData($companySlug: String!) {\n    jobsOffices(company_slug: $companySlug) {\n        name\n        location\n        seo_url\n    }\n    jobsPositionList(company_slug: $companySlug) {\n        department\n        id\n        title\n    }\n}\n",
        name: "GraphQL request",
        locationOffset: {
          line: 1,
          column: 1
        }
      };
      var n = {};

      function i(e, a) {
        for (var s = 0; s < e.definitions.length; s++) {
          var n = e.definitions[s];
          if (n.name && n.name.value == a) return n
        }
      }
      a.definitions.forEach((function(e) {
        if (e.name) {
          var a = new Set;
          s(e, a), n[e.name.value] = a
        }
      })), e.exports = a, e.exports.OfficeData = function(e, a) {
        var s = {
          kind: e.kind,
          definitions: [i(e, a)]
        };
        e.hasOwnProperty("loc") && (s.loc = e.loc);
        var t = n[a] || new Set,
          r = new Set,
          o = new Set;
        for (t.forEach((function(e) {
            o.add(e)
          })); o.size > 0;) {
          var l = o;
          o = new Set, l.forEach((function(e) {
            r.has(e) || (r.add(e), (n[e] || new Set).forEach((function(e) {
              o.add(e)
            })))
          }))
        }
        return r.forEach((function(a) {
          var n = i(e, a);
          n && s.definitions.push(n)
        })), s
      }(a, "OfficeData")
    },
    6371: e => {
      var a = {
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

      function s(e, a) {
        if ("FragmentSpread" === e.kind) a.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var n = e.type;
          "NamedType" === n.kind && a.add(n.name.value)
        }
        e.selectionSet && e.selectionSet.selections.forEach((function(e) {
          s(e, a)
        })), e.variableDefinitions && e.variableDefinitions.forEach((function(e) {
          s(e, a)
        })), e.definitions && e.definitions.forEach((function(e) {
          s(e, a)
        }))
      }
      a.loc.source = {
        body: "mutation ContactUs($data: RockstarGames_Jobs_Form_ContactForm_i!, $recaptcha_token: String!) {\n  careersContactUs(data: $data, recaptcha_token: $recaptcha_token) {\n    sent\n  }\n}",
        name: "GraphQL request",
        locationOffset: {
          line: 1,
          column: 1
        }
      };
      var n = {};

      function i(e, a) {
        for (var s = 0; s < e.definitions.length; s++) {
          var n = e.definitions[s];
          if (n.name && n.name.value == a) return n
        }
      }
      a.definitions.forEach((function(e) {
        if (e.name) {
          var a = new Set;
          s(e, a), n[e.name.value] = a
        }
      })), e.exports = a, e.exports.ContactUs = function(e, a) {
        var s = {
          kind: e.kind,
          definitions: [i(e, a)]
        };
        e.hasOwnProperty("loc") && (s.loc = e.loc);
        var t = n[a] || new Set,
          r = new Set,
          o = new Set;
        for (t.forEach((function(e) {
            o.add(e)
          })); o.size > 0;) {
          var l = o;
          o = new Set, l.forEach((function(e) {
            r.has(e) || (r.add(e), (n[e] || new Set).forEach((function(e) {
              o.add(e)
            })))
          }))
        }
        return r.forEach((function(a) {
          var n = i(e, a);
          n && s.definitions.push(n)
        })), s
      }(a, "ContactUs")
    },
    7325: e => {
      var a = {
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

      function s(e, a) {
        if ("FragmentSpread" === e.kind) a.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var n = e.type;
          "NamedType" === n.kind && a.add(n.name.value)
        }
        e.selectionSet && e.selectionSet.selections.forEach((function(e) {
          s(e, a)
        })), e.variableDefinitions && e.variableDefinitions.forEach((function(e) {
          s(e, a)
        })), e.definitions && e.definitions.forEach((function(e) {
          s(e, a)
        }))
      }
      a.loc.source = {
        body: "query HomeData {\n    jobsOffices {\n        name\n        location\n        seo_url\n    }\n}\n",
        name: "GraphQL request",
        locationOffset: {
          line: 1,
          column: 1
        }
      };
      var n = {};

      function i(e, a) {
        for (var s = 0; s < e.definitions.length; s++) {
          var n = e.definitions[s];
          if (n.name && n.name.value == a) return n
        }
      }
      a.definitions.forEach((function(e) {
        if (e.name) {
          var a = new Set;
          s(e, a), n[e.name.value] = a
        }
      })), e.exports = a, e.exports.HomeData = function(e, a) {
        var s = {
          kind: e.kind,
          definitions: [i(e, a)]
        };
        e.hasOwnProperty("loc") && (s.loc = e.loc);
        var t = n[a] || new Set,
          r = new Set,
          o = new Set;
        for (t.forEach((function(e) {
            o.add(e)
          })); o.size > 0;) {
          var l = o;
          o = new Set, l.forEach((function(e) {
            r.has(e) || (r.add(e), (n[e] || new Set).forEach((function(e) {
              o.add(e)
            })))
          }))
        }
        return r.forEach((function(a) {
          var n = i(e, a);
          n && s.definitions.push(n)
        })), s
      }(a, "HomeData")
    },
    8930: e => {
      var a = {
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

      function s(e, a) {
        if ("FragmentSpread" === e.kind) a.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var n = e.type;
          "NamedType" === n.kind && a.add(n.name.value)
        }
        e.selectionSet && e.selectionSet.selections.forEach((function(e) {
          s(e, a)
        })), e.variableDefinitions && e.variableDefinitions.forEach((function(e) {
          s(e, a)
        })), e.definitions && e.definitions.forEach((function(e) {
          s(e, a)
        }))
      }
      a.loc.source = {
        body: "query greenhouseData {\n    greenhouseApiCustomFields {\n        id\n        name\n        description\n        name_key\n        custom_field_options {\n            value: id\n            label: name\n        }\n    }\n}\n\nmutation AddProspect(\n    $data: RockstarGames_Jobs_GreenhouseResponseTypes_Prospect_i!\n    $recaptcha_token: String!\n) {\n    greenhouseApiAddProspect(data: $data, recaptcha_token: $recaptcha_token) {\n        id\n    }\n}\n",
        name: "GraphQL request",
        locationOffset: {
          line: 1,
          column: 1
        }
      };
      var n = {};

      function i(e, a) {
        for (var s = 0; s < e.definitions.length; s++) {
          var n = e.definitions[s];
          if (n.name && n.name.value == a) return n
        }
      }

      function t(e, a) {
        var s = {
          kind: e.kind,
          definitions: [i(e, a)]
        };
        e.hasOwnProperty("loc") && (s.loc = e.loc);
        var t = n[a] || new Set,
          r = new Set,
          o = new Set;
        for (t.forEach((function(e) {
            o.add(e)
          })); o.size > 0;) {
          var l = o;
          o = new Set, l.forEach((function(e) {
            r.has(e) || (r.add(e), (n[e] || new Set).forEach((function(e) {
              o.add(e)
            })))
          }))
        }
        return r.forEach((function(a) {
          var n = i(e, a);
          n && s.definitions.push(n)
        })), s
      }
      a.definitions.forEach((function(e) {
        if (e.name) {
          var a = new Set;
          s(e, a), n[e.name.value] = a
        }
      })), e.exports = a, e.exports.greenhouseData = t(a, "greenhouseData"), e.exports.AddProspect = t(a, "AddProspect")
    }
  }
]);