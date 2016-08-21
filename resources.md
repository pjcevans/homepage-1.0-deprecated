---
layout: page
title: About
permalink: /about/
---
Everything below this text is pulled in from a _resources markdown file.

{% capture resources-include %}{% include pre-course-resources.md %}{% endcapture %}
{{ resources-include | markdownify }}
