---
title: 'Bienvenue'
description: 'Apprenons à Developer des choses incroyable.'
navigation:
  title: 'Bienvenue monter'
  icon: 'material-symbols:home-repair-service'
---

# titre 1

## Titre 2

### titre 3

#### titre 4

##### titre 5

###### titre 6


Bold	**bold text**

Italic	*italicized text*

Blockquote	> blockquote

Ordered List	1. First item

2. Second item

3. Third item

Unordered List	- First item

- Second item

- Third item



```ts [nuxt.config.ts]
// code api firebase get
import { useQuery, useBody } from "h3";
import { add } from "../lib/firebase/firestore";

export default defineEventHandler(async (event) => {
  try {
    const query = useQuery(event.req);
    const body = await useBody(event.req);

    const docRef = await add(query.col as string, body);

    return { result: docRef };
  } catch (error) {
    return { error: error.message }
  } 
});

```



Horizontal Rule	---

Link	[title](https://www.example.com)


The Content module parses .md and .yaml files inside the content/ directory and provides paths according to the directory structure.
