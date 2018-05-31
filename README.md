## Est-ce que c'est du travail

Personal web site, based off the http://html5up.net/spectral design by
[@ajlkn](http://twitter.com/ajlkn).
The site uses jekyll, a method of creating and maintaining a web site,
which works by using local templates to generate static files that you upload
and sync with your remote site.

## With thanks to
Loïc Sander at Velvetyne foundry for the [Fengardo Neue font](http://velvetyne.fr/fonts/fengardo-neue/).

## Under [Creative Commons license CC BY-NC](https://creativecommons.org/licenses)
**English**  
This license lets others remix, tweak, and build upon your work non-commercially, and although their new works must also acknowledge you and be non-commercial, they don’t have to license their derivative works on the same terms.

**French**  
Cette licence permet aux autres de remixer, arranger, et adapter votre œuvre à des fins non commerciales et, bien que les nouvelles œuvres doivent vous créditer en citant votre nom et ne pas constituer une utilisation commerciale, elles n’ont pas à être diffusées selon les mêmes conditions.

### If you clone or fork this repo to use it:

0. Install [Jekyll](https://jekyllrb.com/) (version 3.1.2 or higher).

0. Tweak the site to make it your own. Jekyll uses [YAML files](http://www.yaml.org/start.html)
   for its site variables:

   a. Edit the `_config.yml` file, replacing the values for each key with your info.

   b. Add a `_data/tokens.yml` file with your IDs & mail program.
      See the `_data/tokens-template.yml.` file for example entries.

   c. Add author info for yourself in `_data/authors.yml` as the first
      author entry in the file.

   d. Provide your own images.

   e. Continue tweaking to your heart's desire, or not.

0. Create your posts:

   a. Use the posts in the 31st century as guides for yours. They're built by jekyll only when
      the `--future` option is used.

   b. You can run `ruby compose.rb` to create new draft posts.

0. Test and publish your site:

   If you're building your site on Windows (like me) and you use WinSCP to sync with your
   remote site, you can use the `site.bat` file. Set up a `_site.env` file
   as described in the comments of `site.bat` and change the excludes list for your site.

   `site dev` runs `jekyll serve --future --drafts` in development mode.  
   `site devnof` runs `jekyll serve --drafts` in development mode.  
   `site preview` runs `jekyll serve` in production mode.  
   `site prod` simply builds with `jekyll build` in production mode (no serve).  
   `site publish` uses WinSCP's `synchronize` feature to mirror to a remote site.
