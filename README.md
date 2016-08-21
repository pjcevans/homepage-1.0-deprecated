# pjcevans.github.io
### What
This repo is a sandbox for testing Jekyll features. The site can be served locally and can be deployed to pjcevans.github.io

There are several pages being used for different purposes.

Posts have tags which can be used to define which pages they appear on.

Contributions that are explained or commented and don't break the site too badly are welcome :)

### Why
Because learning is fun... and sometimes destructive.

### How
The site is hosted on github-pages and uses the static site generator Jekyll.

This site has two main branches - master and gh-pages: master is the current working branch, gh-pages is the deploy branch. Changes pushed to gh-pages trigger a Jekyll deploy to github pages. The current workflow (though possibly unwise) is to submit pull requests on new branches to master and merge them. In order to then deploy these changes to github pages the gh-pages branch is brought up to date with master and pushed.

### Site log

* Used http://veithen.github.io/2015/03/26/jekyll-bootstrap.html for adding bootstrap Sass port to Jekyll
* Sass variables are defined in `_sass/_variables.scss` so that they can be included for use in all new stylesheets.
* The Sass bootstrap port repo has been cloned to css/bootstrap-sass and is only used for updating bootstrap sass. To update bootstrap sass version cd into the `/css/bootstrap-sass` repo, checkout the latest release branch and pull. Then copy `css/bootstrap-sass/assets/stylesheets/_bootstrap.scss` and the sibling `bootstrap` directory to `/_sass`. Other than easy access to this functionality the bootstrap-sass repo is not used by Jekyll and could be removed.


### Potentially useful tutorials etc

* For working on a resources page [this](http://stackoverflow.com/questions/17118551/generating-a-list-of-pages-not-posts-in-a-given-category) is someone trying to produce a similar [result](http://mrenaud.ca/resources/)
