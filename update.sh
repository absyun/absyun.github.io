bundle exec jekyll build
git add .
git commit -m "update"
git push origin master
git subtree push --prefix _site/ hosting master
