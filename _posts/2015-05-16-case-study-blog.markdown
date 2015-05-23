---
layout: post
title:  "Case Study: Jekyll Blog"
date:   2015-05-16
categories: case study
image:	/images/2015-05-16-case-study-blog/casestudy-blog-3.png
---

A case study about the blog you're currently viewing. Designed and implemented a blog using [Jekyll](http://jekyllrb.com/).

<img class="lazy" data-original="{{ "/images/2015-05-16-case-study-blog/casestudy-blog-1.png" | prepend: site.baseurl }}" alt="photo"/>

## Why Jekyll?

I was deciding between three different blogging platforms: Tumblr, Wordpress, and Jekyll. I've been using Tumblr for a number of years already and have made numerous custom themes from scratch on that platform, but Tumblr blogs had to be formatted a certain way and their different post types felt too constricting for the type of posts I wanted to create. I next tried Wordpress, but it  seemed too complex for the simple blog I wanted to create. That's what brought me to Jekyll. A straight-forward blogging platform that was easy to integrate. I especially loved the use of the front matter which made it extremely easy to add custom fields to each post.

The page loading speed of the Jekyll blog hosted on Github Pages is also much faster than loading a Tumblr blog.

<img class="lazy" data-original="{{ "/images/2015-05-16-case-study-blog/casestudy-blog-2.png" | prepend: site.baseurl }}" alt="photo"/>

## Design Process

Simplicity was always the major focus to the design. I wanted the photos on the blog to stand out from the other content. The posts I wanted to create were going to be fairly long form so at the same time as a user is scrolling down, I didn't want them to miss any of the text in between the photos.

Each page is a single post. Since some of the posts will be long, the user might loose context if they're still reading the same post they started on or might skip over a post. Also since there will be a lot of photos on this website, having one post a page will speed up page loading speeds.

I first sketched layouts in a notebook and then took them to the Sketch app where I played around more with font choices and alignment.

<img class="lazy" data-original="{{ "/images/2015-05-16-case-study-blog/casestudy-blog-6.png" | prepend: site.baseurl }}" alt="photo"/>

##Color Palette

Font: Varela Round *(served by Google Fonts)*

<img class="lazy" data-original="{{ "/images/2015-05-16-case-study-blog/casestudy-blog-3.png" | prepend: site.baseurl }}" alt="photo"/>

## Responsiveness

The site is fully responsive so it'll look great whether the site is going to be viewed on a phone, tablet, or desktop.

<img class="lazy" data-original="{{ "/images/2015-05-16-case-study-blog/casestudy-blog-5.png" | prepend: site.baseurl }}" alt="photo"/>

## User Experience

To make all the posts more cohesive, arrows are added to easily navigate between each post. Once you reach the end of the page, the footer previews the next post to read along with a full width background image.

Also when the article is scrolled down past the title, the title appears on the navigation bar to give context on what post the user is currently viewing.

The archive page is a simple listing of all the posts.

<img class="lazy" data-original="{{ "/images/2015-05-16-case-study-blog/casestudy-blog-4.png" | prepend: site.baseurl }}" alt="photo"/>

## Future Improvements

The pagination arrows are still vague. To give more understanding to what the arrows actually do, I'm planning to implement a hover animation that will read "previous post" or "next post" with the respective post title and date.

Optimize images to compress them to a smaller size taking up less disk space and increase loading speeds.

Implement [pjax]("https://github.com/defunkt/jquery-pjax") when changing pages within the website. Removes unnecessary reloading of elements constant across every page.

<br/>

## Credits

iPhone and iPad devices created by [Robbie Pearce](http://robbiepearce.com/devices).