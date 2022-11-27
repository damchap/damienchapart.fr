---
title: 'Le Markdown'
description: ''
navigation:
  title: 'Markdown'
  icon: 'icon-park-solid:api'
---

## Makdown, qu'est-ce c'est ?

> [Markdown](https://fr.wikipedia.org/wiki/Markdown)
est un langage de balisage *léger* pour la rédaction de documents.  
Son but est d'offrir une syntaxe facile à lire et à écrire. Un document balisé
par Markdown peut être lu en l'état sans donner l’impression d'avoir été balisé
ou formaté par des instructions particulières.

## Pourquoi utiliser Markdown ?

Mardown permet de rédiger la documentation en se concentrant sur le contenu
plutôt que la mise en forme.

Pour un développeur, je trouve que la rédaction d'un document est plus naturelle
et agréable. Je me suis même surpris à prendre du plaisir à rédiger de la
documentation. L'apprentissage du langage est très rapide. Il est possible de
gérer le copier/coller d'une image (ou le glisser/déposer).

Son utilisation nous permet d'améliorer la gestion de notre documentation (plutôt
que d'utiliser un format propriétaire). Le document Markdown reste simplement du
texte qui peut être lu directement (toutes plateformes, depuis smartphone) dont
le traitement peut être automatiser (facile à parser). Le format est pérenne et
intégré dans une multitude d'outils. Le risque de corruption de fichier est
diminué et les fichiers sont légers.

Il est parfaitement intégrable à notre écosystème de développement
[Microsoft](https://docs.microsoft.com/fr-fr/contribute/how-to-write-use-markdown)
(Microsoft a racheté Github qui utilise Markdown).  

Le document peut être rédiger avec l'éditeur de son choix. Cet éditeur peut être
celui avec lequel nous éditons notre code Vue. De ce fait, la rédaction de la
documentation est facilitée.  

L'historisation des modifications peut se faire directement avec un dépôt git.

 Un wiki (voir celui de AzureDevOps ou 
[gollum](https://github.com/gollum/gollum) ou [gitit](https://github.com/jgm/gitit))
peut être déployer pour faciliter la rédaction.

## Comment ça marche ?

### Documentation

Voici quelques liens :
* [Essentiel Markdown (en)](http://daringfireball.net/projects/markdown/basics)
* [Syntaxe élémentaire (en)](https://www.markdownguide.org/basic-syntax/)
* [Microsoft](https://docs.microsoft.com/fr-fr/contribute/markdown-reference)
* [Wikipedia](https://fr.wikipedia.org/wiki/Markdown#Quelques_exemples)

### Éditeurs pour markdown

* Microsoft Visual Studio ([voir par exemple extension](https://marketplace.visualstudio.com/items?itemName=MadsKristensen.MarkdownEditor))
* Notepad++ ([exemple de projet](https://github.com/Edditoria/markdown-plus-plus)
  pour améliorer l'intégration du markdown)
* [Visual Stutio Code](https://code.visualstudio.com/Docs/languages/markdown)
* [...](https://www.shopify.com/partners/blog/10-of-the-best-markdown-editors)

## Pandoc

[Pandoc](https://pandoc.org) est un outil pour convertir des fichiers Markdown
vers d'autres formats de documentation comme le document Word

```bash
documentation/export$ pandoc --reference-docx=ma-reference.docx --toc -S -f markdown ../src/monDocument.md -o monDocument.docx
```