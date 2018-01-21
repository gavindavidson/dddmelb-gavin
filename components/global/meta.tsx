import * as React from'react';
import Head from 'next/head';
import { Fragment } from 'react';
const stylesheet = require('styles/screen.scss');

export default () => (
  <Fragment>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <link rel="shortcut icon" type="image/x-icon" href="/static/favicon.ico" />
      {/*
        <meta name="apple-mobile-web-app-title" content="DDD Melbourne">
        <meta name="format-detection" content="telephone=no">
        <!-- Site Title, Description, Author, and Favicon -->
        {{- with .Title | default "Home" }}
        <title>{{ . }} - {{$.Site.Title}} | {{dateFormat $.Site.Params.dateFormat $.Site.Data.event.date}}</title>
        <meta property="og:title" content="{{ . }}" />
        <meta name="twitter:title" content="{{ . | truncate 70 }}" />
        {{- end }}
        {{- with .Description | default .Params.subtitle | default .Summary }}
        <meta name="description" content="{{ . }}">
        <meta property="og:description" content="{{ . }}">
        <meta name="twitter:description" content="{{ . | truncate 200 }}">
        {{- end }}
        <meta name="author" content="{{ .Site.Author.name }}"/>
        <!-- Social Media Tags -->
        {{- with .Params.share_img | default .Params.image | default .Site.Params.logo }}
        <meta property="og:image" content="{{ . | absURL }}" />
        <meta name="twitter:image" content="{{ . | absURL }}" />
        {{- end }}
        <meta name="twitter:card" content="summary" />
        {{- with .Site.Author.twitter }}
        <meta name="twitter:site" content="@{{ . }}" />
        <meta name="twitter:creator" content="@{{ . }}" />
        {{- end }}
        <meta property="og:url" content="{{ .URL | absLangURL }}" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="{{ .Site.Title }}" />
        <link rel="canonical" href="{{ .URL | absLangURL }}" />
        */}
        <link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossOrigin="anonymous" />
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossOrigin="anonymous" />
        <link rel="stylesheet" href="//fonts.googleapis.com/css?family=Open+Sans:300,400,600,700"  />
        <link rel="stylesheet" href="//fonts.googleapis.com/css?family=Montserrat:700" />
        <link rel="stylesheet" href="//fonts.googleapis.com/css?family=Overpass+Mono:700" />
        <style type="text/css" dangerouslySetInnerHTML={{ __html: stylesheet }}></style>
    </Head>
    <style jsx global>{`
      body {
      }
    `}</style>
  </Fragment>
);
