---
title: 'Bienvenue'
description: 'Apprenons à Developer des choses incroyable.'
navigation:
  title: 'Bienvenue'
  icon: 'mdi:home-circle-outline'
---


The Content module parses .md and .yaml files inside the content/ directory and provides paths according to the directory structure.

## Paths

Nuxt Content will automatically generate paths for your content files.

| File | Internal path |
| ----------------- | :-------- |
| `content/index.md` | `/` |
| `content/about.md` | `/about` |
| `content/blog/index.md` | `/blog` |
| `content/blog/hello.md` | `/blog/hello` |
| `content/1.guide/2.installation` | `/guide/installation` |


The module creates [REST `GET` endpoints](/guide/displaying/querying#API) for every document in the `content/` directory reachable with the `/api/_content/query` route.

Components and pages can query contents using [queryContent()](/guide/displaying/querying).

## Ordering

Add numeric prefixes to files and directories inside the `content/` directory to specify an order.
Nuxt Content uses these numbers to order content lists.

```[Directory structure]
content/
  1.frameworks/
    1.vue.md
    2.nuxt.md
  2.examples/
    1.vercel.md
    2.netlify.md
    3.heroku.md
    index.md
```


## Ignoring

Content module will ignore files and folders starting with a `.`.

```[Directory structure]
content/
  1.frameworks/
    .1.vue.md              // Ignored content
    2.nuxt.md
  .2.translation/          // Ignored directory
    1.fa/
      1.messages.md        // Ignored content because of its grand parent
    2.fr/
      1.messages.md        // Ignored content because of its grand parent
```

## Partials

Adding `_` prefix to files will mark them as partial contents.

Partial contents are accessible in search and content lists but are not displayed in content navigation.

```[Directory structure]
content/
  1.frameworks/
    _1.vue.md              // Partial content
    2.nuxt.md
  _2.translation/          // Partial directory
    1.fa/
      1.messages.md        // Partial content because of its grand parent
    2.fr/
      1.messages.md        // Partial content because of its grand parent
```



You can query partials by using `queryContent().where({ _partial: true })`{lang=ts}.

{
    "title": "Bienvenue sur Documentation",
    "_path": "/documentation",
    "children": [
      {
        "title": "Bienvenue sur Documentation",
        "_path": "/documentation"
      },
      {
        "title": "Comment creer ca premiere page web",
        "_path": "/documentation/pageweb"
      }
    ]
  }
]