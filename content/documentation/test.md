---
title: 'test page'
description: "Apprenons à Developer des choses incroyable."
navigation:
  title: 'Home'
  icon: 'jam:write'
---

# Content directory

The Content module parses .md and .yaml files inside the content/ directory and provides paths according to the directory structure.

          {
  "_path": "/documentation",
  "_draft": false,
  "_partial": false,
  "_locale": "en",
  "_empty": false,
  "title": "Bienvenue",
  "description": "Apprenons à Developer des choses incroyable.",
  "excerpt": {
    "type": "root",
    "children": [
      {
        "type": "element",
        "tag": "p",
        "props": {},
        "children": [
          {
            "type": "text",
            "value": "The Content module parses .md and .yaml files inside the content/ directory and provides paths according to the directory structure."
          }
        ]
      },
      {
        "type": "element",
        "tag": "h2",
        "props": {
          "id": "paths"
        },
        "children": [
          {
            "type": "text",
            "value": "Paths"
          }
        ]
      },
      {
        "type": "element",
        "tag": "p",
        "props": {},
        "children": [
          {
            "type": "text",
            "value": "Nuxt Content will automatically generate paths for your content files."
          }
        ]
      },
      {
        "type": "element",
        "tag": "table",
        "props": {},
        "children": [
          {
            "type": "element",
            "tag": "thead",
            "props": {},
            "children": [
              {
                "type": "element",
                "tag": "tr",
                "props": {},
                "children": [
                  {
                    "type": "element",
                    "tag": "th",
                    "props": {
                      "align": null
                    },
                    "children": [
                      {
                        "type": "text",
                        "value": "File"
                      }
                    ]
                  },
                  {
                    "type": "element",
                    "tag": "th",
                    "props": {
                      "align": "left"
                    },
                    "children": [
                      {
                        "type": "text",
                        "value": "Internal path"
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "type": "element",
            "tag": "tbody",
            "props": {},
            "children": [
              {
                "type": "element",
                "tag": "tr",
                "props": {},
                "children": [
                  {
                    "type": "element",
                    "tag": "td",
                    "props": {
                      "align": null
                    },
                    "children": [
                      {
                        "type": "element",
                        "tag": "code-inline",
                        "props": {},
                        "children": [
                          {
                            "type": "text",
                            "value": "content/index.md"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "element",
                    "tag": "td",
                    "props": {
                      "align": "left"
                    },
                    "children": [
                      {
                        "type": "element",
                        "tag": "code-inline",
                        "props": {},
                        "children": [
                          {
                            "type": "text",
                            "value": "/"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "type": "element",
                "tag": "tr",
                "props": {},
                "children": [
                  {
                    "type": "element",
                    "tag": "td",
                    "props": {
                      "align": null
                    },
                    "children": [
                      {
                        "type": "element",
                        "tag": "code-inline",
                        "props": {},
                        "children": [
                          {
                            "type": "text",
                            "value": "content/about.md"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "element",
                    "tag": "td",
                    "props": {
                      "align": "left"
                    },
                    "children": [
                      {
                        "type": "element",
                        "tag": "code-inline",
                        "props": {},
                        "children": [
                          {
                            "type": "text",
                            "value": "/about"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "type": "element",
                "tag": "tr",
                "props": {},
                "children": [
                  {
                    "type": "element",
                    "tag": "td",
                    "props": {
                      "align": null
                    },
                    "children": [
                      {
                        "type": "element",
                        "tag": "code-inline",
                        "props": {},
                        "children": [
                          {
                            "type": "text",
                            "value": "content/blog/index.md"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "element",
                    "tag": "td",
                    "props": {
                      "align": "left"
                    },
                    "children": [
                      {
                        "type": "element",
                        "tag": "code-inline",
                        "props": {},
                        "children": [
                          {
                            "type": "text",
                            "value": "/blog"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "type": "element",
                "tag": "tr",
                "props": {},
                "children": [
                  {
                    "type": "element",
                    "tag": "td",
                    "props": {
                      "align": null
                    },
                    "children": [
                      {
                        "type": "element",
                        "tag": "code-inline",
                        "props": {},
                        "children": [
                          {
                            "type": "text",
                            "value": "content/blog/hello.md"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "element",
                    "tag": "td",
                    "props": {
                      "align": "left"
                    },
                    "children": [
                      {
                        "type": "element",
                        "tag": "code-inline",
                        "props": {},
                        "children": [
                          {
                            "type": "text",
                            "value": "/blog/hello"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "type": "element",
                "tag": "tr",
                "props": {},
                "children": [
                  {
                    "type": "element",
                    "tag": "td",
                    "props": {
                      "align": null
                    },
                    "children": [
                      {
                        "type": "element",
                        "tag": "code-inline",
                        "props": {},
                        "children": [
                          {
                            "type": "text",
                            "value": "content/1.guide/2.installation"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "element",
                    "tag": "td",
                    "props": {
                      "align": "left"
                    },
                    "children": [
                      {
                        "type": "element",
                        "tag": "code-inline",
                        "props": {},
                        "children": [
                          {
                            "type": "text",
                            "value": "/guide/installation"
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "type": "element",
        "tag": "p",
        "props": {},
        "children": [
          {
            "type": "text",
            "value": "The module creates "
          },
          {
            "type": "element",
            "tag": "a",
            "props": {
              "href": "/guide/displaying/querying#API"
            },
            "children": [
              {
                "type": "text",
                "value": "REST "
              },
              {
                "type": "element",
                "tag": "code-inline",
                "props": {},
                "children": [
                  {
                    "type": "text",
                    "value": "GET"
                  }
                ]
              },
              {
                "type": "text",
                "value": " endpoints"
              }
            ]
          },
          {
            "type": "text",
            "value": " for every document in the "
          },
          {
            "type": "element",
            "tag": "code-inline",
            "props": {},
            "children": [
              {
                "type": "text",
                "value": "content/"
              }
            ]
          },
          {
            "type": "text",
            "value": " directory reachable with the "
          },
          {
            "type": "element",
            "tag": "code-inline",
            "props": {},
            "children": [
              {
                "type": "text",
                "value": "/api/_content/query"
              }
            ]
          },
          {
            "type": "text",
            "value": " route."
          }
        ]
      },
      {
        "type": "element",
        "tag": "p",
        "props": {},
        "children": [
          {
            "type": "text",
            "value": "Components and pages can query contents using "
          },
          {
            "type": "element",
            "tag": "a",
            "props": {
              "href": "/guide/displaying/querying"
            },
            "children": [
              {
                "type": "text",
                "value": "queryContent()"
              }
            ]
          },
          {
            "type": "text",
            "value": "."
          }
        ]
      },
      {
        "type": "element",
        "tag": "h2",
        "props": {
          "id": "ordering"
        },
        "children": [
          {
            "type": "text",
            "value": "Ordering"
          }
        ]
      },
      {
        "type": "element",
        "tag": "p",
        "props": {},
        "children": [
          {
            "type": "text",
            "value": "Add numeric prefixes to files and directories inside the "
          },
          {
            "type": "element",
            "tag": "code-inline",
            "props": {},
            "children": [
              {
                "type": "text",
                "value": "content/"
              }
            ]
          },
          {
            "type": "text",
            "value": " directory to specify an order.\nNuxt Content uses these numbers to order content lists."
          }
        ]
      },
      {
        "type": "element",
        "tag": "code",
        "props": {
          "code": "content/\n  1.frameworks/\n    1.vue.md\n    2.nuxt.md\n  2.examples/\n    1.vercel.md\n    2.netlify.md\n    3.heroku.md\n    index.md\n",
          "filename": "Directory structure"
        },
        "children": [
          {
            "type": "element",
            "tag": "pre",
            "props": {},
            "children": [
              {
                "type": "element",
                "tag": "code",
                "props": {
                  "__ignoreMap": ""
                },
                "children": [
                  {
                    "type": "text",
                    "value": "content/\n  1.frameworks/\n    1.vue.md\n    2.nuxt.md\n  2.examples/\n    1.vercel.md\n    2.netlify.md\n    3.heroku.md\n    index.md\n"
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "type": "element",
        "tag": "h2",
        "props": {
          "id": "ignoring"
        },
        "children": [
          {
            "type": "text",
            "value": "Ignoring"
          }
        ]
      },
      {
        "type": "element",
        "tag": "p",
        "props": {},
        "children": [
          {
            "type": "text",
            "value": "Content module will ignore files and folders starting with a "
          },
          {
            "type": "element",
            "tag": "code-inline",
            "props": {},
            "children": [
              {
                "type": "text",
                "value": "."
              }
            ]
          },
          {
            "type": "text",
            "value": "."
          }
        ]
      },
      {
        "type": "element",
        "tag": "code",
        "props": {
          "code": "content/\n  1.frameworks/\n    .1.vue.md              // Ignored content\n    2.nuxt.md\n  .2.translation/          // Ignored directory\n    1.fa/\n      1.messages.md        // Ignored content because of its grand parent\n    2.fr/\n      1.messages.md        // Ignored content because of its grand parent\n",
          "filename": "Directory structure"
        },
        "children": [
          {
            "type": "element",
            "tag": "pre",
            "props": {},
            "children": [
              {
                "type": "element",
                "tag": "code",
                "props": {
                  "__ignoreMap": ""
                },
                "children": [
                  {
                    "type": "text",
                    "value": "content/\n  1.frameworks/\n    .1.vue.md              // Ignored content\n    2.nuxt.md\n  .2.translation/          // Ignored directory\n    1.fa/\n      1.messages.md        // Ignored content because of its grand parent\n    2.fr/\n      1.messages.md        // Ignored content because of its grand parent\n"
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "type": "element",
        "tag": "h2",
        "props": {
          "id": "partials"
        },
        "children": [
          {
            "type": "text",
            "value": "Partials"
          }
        ]
      },
      {
        "type": "element",
        "tag": "p",
        "props": {},
        "children": [
          {
            "type": "text",
            "value": "Adding "
          },
          {
            "type": "element",
            "tag": "code-inline",
            "props": {},
            "children": [
              {
                "type": "text",
                "value": "_"
              }
            ]
          },
          {
            "type": "text",
            "value": " prefix to files will mark them as partial contents."
          }
        ]
      },
      {
        "type": "element",
        "tag": "p",
        "props": {},
        "children": [
          {
            "type": "text",
            "value": "Partial contents are accessible in search and content lists but are not displayed in content navigation."
          }
        ]
      },
      {
        "type": "element",
        "tag": "code",
        "props": {
          "code": "content/\n  1.frameworks/\n    _1.vue.md              // Partial content\n    2.nuxt.md\n  _2.translation/          // Partial directory\n    1.fa/\n      1.messages.md        // Partial content because of its grand parent\n    2.fr/\n      1.messages.md        // Partial content because of its grand parent\n",
          "filename": "Directory structure"
        },
        "children": [
          {
            "type": "element",
            "tag": "pre",
            "props": {},
            "children": [
              {
                "type": "element",
                "tag": "code",
                "props": {
                  "__ignoreMap": ""
                },
                "children": [
                  {
                    "type": "text",
                    "value": "content/\n  1.frameworks/\n    _1.vue.md              // Partial content\n    2.nuxt.md\n  _2.translation/          // Partial directory\n    1.fa/\n      1.messages.md        // Partial content because of its grand parent\n    2.fr/\n      1.messages.md        // Partial content because of its grand parent\n"
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "type": "element",
        "tag": "p",
        "props": {},
        "children": [
          {
            "type": "text",
            "value": "You can query partials by using "
          },
          {
            "type": "element",
            "tag": "code-inline",
            "props": {
              "lang": "ts"
            },
            "children": [
              {
                "type": "text",
                "value": "queryContent().where({ _partial: true })"
              }
            ]
          },
          {
            "type": "text",
            "value": "."
          }
        ]
      }
    ]
  },
  "navigation": {
    "title": "Bienvenue",
    "icon": "mdi:home-circle-outline"
  },
  "body": {
    "type": "root",
    "children": [
      {
        "type": "element",
        "tag": "p",
        "props": {},
        "children": [
          {
            "type": "text",
            "value": "The Content module parses .md and .yaml files inside the content/ directory and provides paths according to the directory structure."
          }
        ]
      },
      {
        "type": "element",
        "tag": "h2",
        "props": {
          "id": "paths"
        },
        "children": [
          {
            "type": "text",
            "value": "Paths"
          }
        ]
      },
      {
        "type": "element",
        "tag": "p",
        "props": {},
        "children": [
          {
            "type": "text",
            "value": "Nuxt Content will automatically generate paths for your content files."
          }
        ]
      },
      {
        "type": "element",
        "tag": "table",
        "props": {},
        "children": [
          {
            "type": "element",
            "tag": "thead",
            "props": {},
            "children": [
              {
                "type": "element",
                "tag": "tr",
                "props": {},
                "children": [
                  {
                    "type": "element",
                    "tag": "th",
                    "props": {
                      "align": null
                    },
                    "children": [
                      {
                        "type": "text",
                        "value": "File"
                      }
                    ]
                  },
                  {
                    "type": "element",
                    "tag": "th",
                    "props": {
                      "align": "left"
                    },
                    "children": [
                      {
                        "type": "text",
                        "value": "Internal path"
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "type": "element",
            "tag": "tbody",
            "props": {},
            "children": [
              {
                "type": "element",
                "tag": "tr",
                "props": {},
                "children": [
                  {
                    "type": "element",
                    "tag": "td",
                    "props": {
                      "align": null
                    },
                    "children": [
                      {
                        "type": "element",
                        "tag": "code-inline",
                        "props": {},
                        "children": [
                          {
                            "type": "text",
                            "value": "content/index.md"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "element",
                    "tag": "td",
                    "props": {
                      "align": "left"
                    },
                    "children": [
                      {
                        "type": "element",
                        "tag": "code-inline",
                        "props": {},
                        "children": [
                          {
                            "type": "text",
                            "value": "/"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "type": "element",
                "tag": "tr",
                "props": {},
                "children": [
                  {
                    "type": "element",
                    "tag": "td",
                    "props": {
                      "align": null
                    },
                    "children": [
                      {
                        "type": "element",
                        "tag": "code-inline",
                        "props": {},
                        "children": [
                          {
                            "type": "text",
                            "value": "content/about.md"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "element",
                    "tag": "td",
                    "props": {
                      "align": "left"
                    },
                    "children": [
                      {
                        "type": "element",
                        "tag": "code-inline",
                        "props": {},
                        "children": [
                          {
                            "type": "text",
                            "value": "/about"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "type": "element",
                "tag": "tr",
                "props": {},
                "children": [
                  {
                    "type": "element",
                    "tag": "td",
                    "props": {
                      "align": null
                    },
                    "children": [
                      {
                        "type": "element",
                        "tag": "code-inline",
                        "props": {},
                        "children": [
                          {
                            "type": "text",
                            "value": "content/blog/index.md"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "element",
                    "tag": "td",
                    "props": {
                      "align": "left"
                    },
                    "children": [
                      {
                        "type": "element",
                        "tag": "code-inline",
                        "props": {},
                        "children": [
                          {
                            "type": "text",
                            "value": "/blog"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "type": "element",
                "tag": "tr",
                "props": {},
                "children": [
                  {
                    "type": "element",
                    "tag": "td",
                    "props": {
                      "align": null
                    },
                    "children": [
                      {
                        "type": "element",
                        "tag": "code-inline",
                        "props": {},
                        "children": [
                          {
                            "type": "text",
                            "value": "content/blog/hello.md"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "element",
                    "tag": "td",
                    "props": {
                      "align": "left"
                    },
                    "children": [
                      {
                        "type": "element",
                        "tag": "code-inline",
                        "props": {},
                        "children": [
                          {
                            "type": "text",
                            "value": "/blog/hello"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "type": "element",
                "tag": "tr",
                "props": {},
                "children": [
                  {
                    "type": "element",
                    "tag": "td",
                    "props": {
                      "align": null
                    },
                    "children": [
                      {
                        "type": "element",
                        "tag": "code-inline",
                        "props": {},
                        "children": [
                          {
                            "type": "text",
                            "value": "content/1.guide/2.installation"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "type": "element",
                    "tag": "td",
                    "props": {
                      "align": "left"
                    },
                    "children": [
                      {
                        "type": "element",
                        "tag": "code-inline",
                        "props": {},
                        "children": [
                          {
                            "type": "text",
                            "value": "/guide/installation"
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "type": "element",
        "tag": "p",
        "props": {},
        "children": [
          {
            "type": "text",
            "value": "The module creates "
          },
          {
            "type": "element",
            "tag": "a",
            "props": {
              "href": "/guide/displaying/querying#API"
            },
            "children": [
              {
                "type": "text",
                "value": "REST "
              },
              {
                "type": "element",
                "tag": "code-inline",
                "props": {},
                "children": [
                  {
                    "type": "text",
                    "value": "GET"
                  }
                ]
              },
              {
                "type": "text",
                "value": " endpoints"
              }
            ]
          },
          {
            "type": "text",
            "value": " for every document in the "
          },
          {
            "type": "element",
            "tag": "code-inline",
            "props": {},
            "children": [
              {
                "type": "text",
                "value": "content/"
              }
            ]
          },
          {
            "type": "text",
            "value": " directory reachable with the "
          },
          {
            "type": "element",
            "tag": "code-inline",
            "props": {},
            "children": [
              {
                "type": "text",
                "value": "/api/_content/query"
              }
            ]
          },
          {
            "type": "text",
            "value": " route."
          }
        ]
      },
      {
        "type": "element",
        "tag": "p",
        "props": {},
        "children": [
          {
            "type": "text",
            "value": "Components and pages can query contents using "
          },
          {
            "type": "element",
            "tag": "a",
            "props": {
              "href": "/guide/displaying/querying"
            },
            "children": [
              {
                "type": "text",
                "value": "queryContent()"
              }
            ]
          },
          {
            "type": "text",
            "value": "."
          }
        ]
      },
      {
        "type": "element",
        "tag": "h2",
        "props": {
          "id": "ordering"
        },
        "children": [
          {
            "type": "text",
            "value": "Ordering"
          }
        ]
      },
      {
        "type": "element",
        "tag": "p",
        "props": {},
        "children": [
          {
            "type": "text",
            "value": "Add numeric prefixes to files and directories inside the "
          },
          {
            "type": "element",
            "tag": "code-inline",
            "props": {},
            "children": [
              {
                "type": "text",
                "value": "content/"
              }
            ]
          },
          {
            "type": "text",
            "value": " directory to specify an order.\nNuxt Content uses these numbers to order content lists."
          }
        ]
      },
      {
        "type": "element",
        "tag": "code",
        "props": {
          "code": "content/\n  1.frameworks/\n    1.vue.md\n    2.nuxt.md\n  2.examples/\n    1.vercel.md\n    2.netlify.md\n    3.heroku.md\n    index.md\n",
          "filename": "Directory structure"
        },
        "children": [
          {
            "type": "element",
            "tag": "pre",
            "props": {},
            "children": [
              {
                "type": "element",
                "tag": "code",
                "props": {
                  "__ignoreMap": ""
                },
                "children": [
                  {
                    "type": "text",
                    "value": "content/\n  1.frameworks/\n    1.vue.md\n    2.nuxt.md\n  2.examples/\n    1.vercel.md\n    2.netlify.md\n    3.heroku.md\n    index.md\n"
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "type": "element",
        "tag": "h2",
        "props": {
          "id": "ignoring"
        },
        "children": [
          {
            "type": "text",
            "value": "Ignoring"
          }
        ]
      },
      {
        "type": "element",
        "tag": "p",
        "props": {},
        "children": [
          {
            "type": "text",
            "value": "Content module will ignore files and folders starting with a "
          },
          {
            "type": "element",
            "tag": "code-inline",
            "props": {},
            "children": [
              {
                "type": "text",
                "value": "."
              }
            ]
          },
          {
            "type": "text",
            "value": "."
          }
        ]
      },
      {
        "type": "element",
        "tag": "code",
        "props": {
          "code": "content/\n  1.frameworks/\n    .1.vue.md              // Ignored content\n    2.nuxt.md\n  .2.translation/          // Ignored directory\n    1.fa/\n      1.messages.md        // Ignored content because of its grand parent\n    2.fr/\n      1.messages.md        // Ignored content because of its grand parent\n",
          "filename": "Directory structure"
        },
        "children": [
          {
            "type": "element",
            "tag": "pre",
            "props": {},
            "children": [
              {
                "type": "element",
                "tag": "code",
                "props": {
                  "__ignoreMap": ""
                },
                "children": [
                  {
                    "type": "text",
                    "value": "content/\n  1.frameworks/\n    .1.vue.md              // Ignored content\n    2.nuxt.md\n  .2.translation/          // Ignored directory\n    1.fa/\n      1.messages.md        // Ignored content because of its grand parent\n    2.fr/\n      1.messages.md        // Ignored content because of its grand parent\n"
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "type": "element",
        "tag": "h2",
        "props": {
          "id": "partials"
        },
        "children": [
          {
            "type": "text",
            "value": "Partials"
          }
        ]
      },
      {
        "type": "element",
        "tag": "p",
        "props": {},
        "children": [
          {
            "type": "text",
            "value": "Adding "
          },
          {
            "type": "element",
            "tag": "code-inline",
            "props": {},
            "children": [
              {
                "type": "text",
                "value": "_"
              }
            ]
          },
          {
            "type": "text",
            "value": " prefix to files will mark them as partial contents."
          }
        ]
      },
      {
        "type": "element",
        "tag": "p",
        "props": {},
        "children": [
          {
            "type": "text",
            "value": "Partial contents are accessible in search and content lists but are not displayed in content navigation."
          }
        ]
      },
      {
        "type": "element",
        "tag": "code",
        "props": {
          "code": "content/\n  1.frameworks/\n    _1.vue.md              // Partial content\n    2.nuxt.md\n  _2.translation/          // Partial directory\n    1.fa/\n      1.messages.md        // Partial content because of its grand parent\n    2.fr/\n      1.messages.md        // Partial content because of its grand parent\n",
          "filename": "Directory structure"
        },
        "children": [
          {
            "type": "element",
            "tag": "pre",
            "props": {},
            "children": [
              {
                "type": "element",
                "tag": "code",
                "props": {
                  "__ignoreMap": ""
                },
                "children": [
                  {
                    "type": "text",
                    "value": "content/\n  1.frameworks/\n    _1.vue.md              // Partial content\n    2.nuxt.md\n  _2.translation/          // Partial directory\n    1.fa/\n      1.messages.md        // Partial content because of its grand parent\n    2.fr/\n      1.messages.md        // Partial content because of its grand parent\n"
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "type": "element",
        "tag": "p",
        "props": {},
        "children": [
          {
            "type": "text",
            "value": "You can query partials by using "
          },
          {
            "type": "element",
            "tag": "code-inline",
            "props": {
              "lang": "ts"
            },
            "children": [
              {
                "type": "text",
                "value": "queryContent().where({ _partial: true })"
              }
            ]
          },
          {
            "type": "text",
            "value": "."
          }
        ]
      }
    ],
    "toc": {
      "title": "",
      "searchDepth": 2,
      "depth": 2,
      "links": [
        {
          "id": "paths",
          "depth": 2,
          "text": "Paths"
        },
        {
          "id": "ordering",
          "depth": 2,
          "text": "Ordering"
        },
        {
          "id": "ignoring",
          "depth": 2,
          "text": "Ignoring"
        },
        {
          "id": "partials",
          "depth": 2,
          "text": "Partials"
        }
      ]
    }
  },
  "_type": "markdown",
  "_id": "content:documentation:index.md",
  "_source": "content",
  "_file": "documentation/index.md",
  "_extension": "md"
}
                
© Damien chapart - 2022. Tous droits réservés.
Fait a brest avec
Nous contacter
+33 6 52 28 05 05
contact@damienchapart.fr
Ou suis-je ?
France : Brest, Rennes, Lorient, Quimper, Nantes, Angers
