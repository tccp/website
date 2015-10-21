# TCC Website built with Jekyll
[![Build Status](https://travis-ci.org/tccp/website.svg)](https://travis-ci.org/tccp/website)

## Quick Reference 
Deploy in `/`

    sh deploy.sh
Jekyll Build in `/tcc/`

    jekyll build
Jekyll Serve in `/tcc/` (`/tcc/_config.yml needs to be have prefix as dev)

    jekyll serve 
Grunt Production build
    
    grunt build
Grunt Dev Watch

    grunt watch

## Deploy
After you are satisfied with your site you can run an automated deploy process that will run `scp` and create a symbolic link to the new deploy. 
Command ran in root of repo `/`

    sh deploy.sh
    
## Content Management 
For content manage see the [Jekyll Documentation](http://jekyllrb.com/docs/home/)

### Posts
Posts live in `tcc/_posts`. The Naming convention of the files must be kept: `YYYY-MM-DD-POSTTITLE.markdown`

All posts can be viewed by going to the `/blog/` directory. 

    ---
    layout: post
    title:  "Custom Post Name"
    date:  Date String (ex 2015-09-28 21:12:52)
    categories: spaced delimited categories  (ex collaborative chemistry)
    ---
    <Any Valid Markdown can go here>...

### News
News lives in `tcc/_news`. The Naming convention of the files must be kept: `YYYY-MM-DD-NEWSTITLE.markdown`

	---
    layout: post
    title:  "Custom News Title"
    date:  Date String (ex 2015-09-28 21:12:52)
    categories: spaced delimited categories  (ex collaborative chemistry)
    link: mwtcc (Link to that directory)
    external_link: false (If it's an external page true)
    ---
    <Any Valid Markdown can go here>...


### Groups
Groups live in `tcc/_groups`. Naming convention isn't important. 
    
    ---
    layout: group
    title:  "John Doe"
    image:   "images/Lambrecht.png" (Must be local)
    categories: groups professor
    short_bio: "reduced-scaling approaches and functional materials" (Areas of Research)
    link: "http://lambrecht.chem.pitt.edu/" (External Link)
    ---
	<Any Valid Markdown can go here>...

### Assets
Images can be stored in the `tcc/images` directory. When linking to local assets you must put `{{site.prefix}}` before the link. This will add `/~tcp/` if on the tcp server or `/` if in local development. You must define this in the `tcc/_config.ym` file. 
Example local link: `<img src="{{site.prefix}}images/test-image" alt='image alt'>`

Styles and formats are done via Grunt and use Sass.

### Building
[Download Jekyll](http://jekyllrb.com/docs/installation/)

Once you make changes to any files you must run `jeykll build` **in the `tcc` directory** to compile everything and add it all to the `tcc/_site` directory. **Important: Do not make any changes in the `tcc/_site/` directory!! These files are deleted and recreated when you build the project.**
The `tcc/_site` directory is the only directory that gets upload to the server once you build the site. 

### Additional Notes
`Jekyll serve` in the `tcc` directory 

## Development 


### Requirements 
* Ruby + Jekyll
* Node and NPM
* Bower
* Grunt

### Install 
1. `git clone git@github.com:tccp/website.git`
2. `npm install`
3. `bower install`
4. `grunt watch`
4. `cd tcc && jekyll build`

To install the grunt modules run `npm install` (assuming node is installed on your local machine). See package.json to see what will be installed. Additionally vendors must be installed with bower package manager `bower install`. 

### Build & Watch
To build any changes to the assets directory `grunt` should be used. While developing browser sync automatically injects new compiled css and js. 
