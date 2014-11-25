require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"./src/index.js":[function(require,module,exports){
var React = require('react');
var Header = require('./Header');


var Index = React.createClass({displayName: 'Index',

  render: function () {
    return (
      React.createElement("div", null, 
        React.createElement(Header, null), 
        React.createElement("div", {className: "pageBody", id: "body"}, 
          React.createElement("div", {className: "contents"}, 
            React.createElement("div", {dangerouslySetInnerHTML: {__html:

("<article class=\"markdown-body entry-content\" itemprop=\"mainContentOfPage\"><h1>\n<a name=\"user-content-immutable-data-collections\" class=\"anchor\" href=\"#immutable-data-collections\" aria-hidden=\"true\"><span class=\"octicon octicon-link\"></span></a>Immutable Data Collections</h1>\n\n<p><strong>Converting to v3 from v2? Check out the <a href=\"https://github.com/facebook/immutable-js/wiki/Upgrading-to-Immutable-v3\">upgrade guide</a>.</strong></p>\n\n<p>Immutable data cannot be changed once created, leading to much simpler\napplication development, no defensive copying, and enabling advanced memoization\ntechniques.</p>\n\n<p><code>Immutable</code> provides <code>List</code>, <code>Stack</code>, <code>Map</code>,\n<code>OrderedMap</code>, and <code>Set</code> by using persistent <a href=\"http://en.wikipedia.org/wiki/Hash_array_mapped_trie\">hash maps tries</a>\nand <a href=\"http://hypirion.com/musings/understanding-persistent-vector-pt-1\">vector tries</a>\nas popularized by Clojure and Scala. They achieve efficiency on modern\nJavaScript VMs by using structural sharing and minimizing the need to copy or\ncache data.</p>\n\n<p><code>Immutable</code> also provides a lazy <code>Seq</code>, allowing efficient\nchaining of collection methods like <code>map</code> and <code>filter</code> without creating\nintermediate representations. Create some <code>Seq</code> with <code>Range</code> and <code>Repeat</code>.</p>\n\n<h2>\n<a name=\"user-content-getting-started\" class=\"anchor\" href=\"#getting-started\" aria-hidden=\"true\"><span class=\"octicon octicon-link\"></span></a>Getting started</h2>\n\n<p>Install <code>immutable</code> using npm.</p>\n\n<div class=\"highlight highlight-shell\"><pre>npm install immutable\n</pre></div>\n\n<p>Then require it into any module.</p>\n\n<div class=\"highlight highlight-javascript\"><pre><span class=\"kd\">var</span> <span class=\"nx\">Immutable</span> <span class=\"o\">=</span> <span class=\"nx\">require</span><span class=\"p\">(</span><span class=\"s1\">'immutable'</span><span class=\"p\">);</span>\n<span class=\"kd\">var</span> <span class=\"nx\">map</span> <span class=\"o\">=</span> <span class=\"nx\">Immutable</span><span class=\"p\">.</span><span class=\"nx\">Map</span><span class=\"p\">({</span><span class=\"nx\">a</span><span class=\"o\">:</span><span class=\"mi\">1</span><span class=\"p\">,</span> <span class=\"nx\">b</span><span class=\"o\">:</span><span class=\"mi\">2</span><span class=\"p\">,</span> <span class=\"nx\">c</span><span class=\"o\">:</span><span class=\"mi\">3</span><span class=\"p\">});</span>\n</pre></div>\n\n<h3>\n<a name=\"user-content-browser\" class=\"anchor\" href=\"#browser\" aria-hidden=\"true\"><span class=\"octicon octicon-link\"></span></a>Browser</h3>\n\n<p>To use <code>immutable</code> from a browser, download <a href=\"https://github.com/facebook/immutable-js/blob/master/dist/immutable.min.js\">dist/immutable.min.js</a>\nor use a CDN such as <a href=\"https://cdnjs.com/libraries/immutable\">CDNJS</a>\nor <a href=\"http://www.jsdelivr.com/#!immutable.js\">jsDelivr</a>.</p>\n\n<p>Then, add it as a script tag to your page:</p>\n\n<div class=\"highlight highlight-html\"><pre><span class=\"nt\">&lt;script </span><span class=\"na\">src=</span><span class=\"s\">\"immutable.min.js\"</span><span class=\"nt\">&gt;&lt;/script&gt;</span>\n<span class=\"nt\">&lt;script&gt;</span>\n    <span class=\"kd\">var</span> <span class=\"nx\">map</span> <span class=\"o\">=</span> <span class=\"nx\">Immutable</span><span class=\"p\">.</span><span class=\"nx\">Map</span><span class=\"p\">({</span><span class=\"nx\">a</span><span class=\"o\">:</span><span class=\"mi\">1</span><span class=\"p\">,</span> <span class=\"nx\">b</span><span class=\"o\">:</span><span class=\"mi\">2</span><span class=\"p\">,</span> <span class=\"nx\">c</span><span class=\"o\">:</span><span class=\"mi\">3</span><span class=\"p\">});</span>\n    <span class=\"nx\">map</span> <span class=\"o\">=</span> <span class=\"nx\">map</span><span class=\"p\">.</span><span class=\"nx\">set</span><span class=\"p\">(</span><span class=\"s1\">'b'</span><span class=\"p\">,</span> <span class=\"mi\">20</span><span class=\"p\">);</span>\n    <span class=\"nx\">map</span><span class=\"p\">.</span><span class=\"nx\">get</span><span class=\"p\">(</span><span class=\"s1\">'b'</span><span class=\"p\">);</span> <span class=\"c1\">// 20</span>\n<span class=\"nt\">&lt;/script&gt;</span>\n</pre></div>\n\n<p>Or use an AMD loader (such as <a href=\"http://requirejs.org/\">RequireJS</a>):</p>\n\n<div class=\"highlight highlight-javascript\"><pre><span class=\"nx\">require</span><span class=\"p\">([</span><span class=\"s1\">'./immutable.min.js'</span><span class=\"p\">],</span> <span class=\"kd\">function</span> <span class=\"p\">(</span><span class=\"nx\">Immutable</span><span class=\"p\">)</span> <span class=\"p\">{</span>\n    <span class=\"kd\">var</span> <span class=\"nx\">map</span> <span class=\"o\">=</span> <span class=\"nx\">Immutable</span><span class=\"p\">.</span><span class=\"nx\">Map</span><span class=\"p\">({</span><span class=\"nx\">a</span><span class=\"o\">:</span><span class=\"mi\">1</span><span class=\"p\">,</span> <span class=\"nx\">b</span><span class=\"o\">:</span><span class=\"mi\">2</span><span class=\"p\">,</span> <span class=\"nx\">c</span><span class=\"o\">:</span><span class=\"mi\">3</span><span class=\"p\">});</span>\n    <span class=\"nx\">map</span> <span class=\"o\">=</span> <span class=\"nx\">map</span><span class=\"p\">.</span><span class=\"nx\">set</span><span class=\"p\">(</span><span class=\"s1\">'b'</span><span class=\"p\">,</span> <span class=\"mi\">20</span><span class=\"p\">);</span>\n    <span class=\"nx\">map</span><span class=\"p\">.</span><span class=\"nx\">get</span><span class=\"p\">(</span><span class=\"s1\">'b'</span><span class=\"p\">);</span> <span class=\"c1\">// 20</span>\n<span class=\"p\">});</span>\n</pre></div>\n\n<p>If you're using <a href=\"http://browserify.org/\">browserify</a>, the <code>immutable</code> npm module\nalso works from the browser.</p>\n\n<h3>\n<a name=\"user-content-typescript\" class=\"anchor\" href=\"#typescript\" aria-hidden=\"true\"><span class=\"octicon octicon-link\"></span></a>TypeScript</h3>\n\n<p>Use these Immutable collections and sequences as you would use native\ncollections in your <a href=\"http://typescriptlang.org\">TypeScript</a> programs while still taking\nadvantage of type generics, error detection, and auto-complete in your IDE.</p>\n\n<p>Just add a reference with a relative path to the type declarations at the top\nof your file.</p>\n\n<div class=\"highlight highlight-javascript\"><pre><span class=\"c1\">///&lt;reference path='./node_modules/immutable/dist/Immutable.d.ts'/&gt;</span>\n<span class=\"kr\">import</span> <span class=\"nx\">Immutable</span> <span class=\"o\">=</span> <span class=\"nx\">require</span><span class=\"p\">(</span><span class=\"s1\">'immutable'</span><span class=\"p\">);</span>\n<span class=\"kd\">var</span> <span class=\"nx\">map</span><span class=\"o\">:</span> <span class=\"nx\">Immutable</span><span class=\"p\">.</span><span class=\"nx\">Map</span><span class=\"o\">&lt;</span><span class=\"nx\">string</span><span class=\"p\">,</span> <span class=\"nx\">number</span><span class=\"o\">&gt;</span><span class=\"p\">;</span>\n<span class=\"nx\">map</span> <span class=\"o\">=</span> <span class=\"nx\">Immutable</span><span class=\"p\">.</span><span class=\"nx\">Map</span><span class=\"p\">({</span><span class=\"nx\">a</span><span class=\"o\">:</span><span class=\"mi\">1</span><span class=\"p\">,</span> <span class=\"nx\">b</span><span class=\"o\">:</span><span class=\"mi\">2</span><span class=\"p\">,</span> <span class=\"nx\">c</span><span class=\"o\">:</span><span class=\"mi\">3</span><span class=\"p\">});</span>\n<span class=\"nx\">map</span> <span class=\"o\">=</span> <span class=\"nx\">map</span><span class=\"p\">.</span><span class=\"nx\">set</span><span class=\"p\">(</span><span class=\"s1\">'b'</span><span class=\"p\">,</span> <span class=\"mi\">20</span><span class=\"p\">);</span>\n<span class=\"nx\">map</span><span class=\"p\">.</span><span class=\"nx\">get</span><span class=\"p\">(</span><span class=\"s1\">'b'</span><span class=\"p\">);</span> <span class=\"c1\">// 20</span>\n</pre></div>\n\n<h2>\n<a name=\"user-content-the-case-for-immutability\" class=\"anchor\" href=\"#the-case-for-immutability\" aria-hidden=\"true\"><span class=\"octicon octicon-link\"></span></a>The case for Immutability</h2>\n\n<p>Much of what makes application development difficult is tracking mutation and\nmaintaining state. Developing with immutable data encourages you to think\ndifferently about how data flows through your application.</p>\n\n<p>Subscribing to data events throughout your application, by using\n<code>Object.observe</code>, or any other mechanism, creates a huge overhead of\nbook-keeping which can hurt performance, sometimes dramatically, and creates\nopportunities for areas of your application to get out of sync with each other\ndue to easy to make programmer error. Since immutable data never changes,\nsubscribing to changes throughout the model is a dead-end and new data can only\never be passed from above.</p>\n\n<p>This model of data flow aligns well with the architecture of <a href=\"http://facebook.github.io/react/\">React</a>\nand especially well with an application designed using the ideas of <a href=\"http://facebook.github.io/flux/docs/overview.html\">Flux</a>.</p>\n\n<p>When data is passed from above rather than being subscribed to, and you're only\ninterested in doing work when something has changed, you can use equality.\n<code>Immutable</code> always returns itself when a mutation results in an identical\ncollection, allowing for using <code>===</code> equality to determine if something\nhas changed.</p>\n\n<div class=\"highlight highlight-javascript\"><pre><span class=\"kd\">var</span> <span class=\"nx\">map1</span> <span class=\"o\">=</span> <span class=\"nx\">Immutable</span><span class=\"p\">.</span><span class=\"nx\">Map</span><span class=\"p\">({</span><span class=\"nx\">a</span><span class=\"o\">:</span><span class=\"mi\">1</span><span class=\"p\">,</span> <span class=\"nx\">b</span><span class=\"o\">:</span><span class=\"mi\">2</span><span class=\"p\">,</span> <span class=\"nx\">c</span><span class=\"o\">:</span><span class=\"mi\">3</span><span class=\"p\">});</span>\n<span class=\"kd\">var</span> <span class=\"nx\">map2</span> <span class=\"o\">=</span> <span class=\"nx\">map1</span><span class=\"p\">.</span><span class=\"nx\">set</span><span class=\"p\">(</span><span class=\"s1\">'b'</span><span class=\"p\">,</span> <span class=\"mi\">2</span><span class=\"p\">);</span>\n<span class=\"nx\">assert</span><span class=\"p\">(</span><span class=\"nx\">map1</span> <span class=\"o\">===</span> <span class=\"nx\">map2</span><span class=\"p\">);</span>\n</pre></div>\n\n<p>If an object is immutable, it can be \"copied\" simply by making another reference\nto it instead of copying the entire object. Because a reference is much smaller\nthan the object itself, this results in memory savings and a potential boost in\nexecution speed for programs which rely on copies (such as an undo-stack).</p>\n\n<div class=\"highlight highlight-javascript\"><pre><span class=\"kd\">var</span> <span class=\"nx\">map1</span> <span class=\"o\">=</span> <span class=\"nx\">Immutable</span><span class=\"p\">.</span><span class=\"nx\">Map</span><span class=\"p\">({</span><span class=\"nx\">a</span><span class=\"o\">:</span><span class=\"mi\">1</span><span class=\"p\">,</span> <span class=\"nx\">b</span><span class=\"o\">:</span><span class=\"mi\">2</span><span class=\"p\">,</span> <span class=\"nx\">c</span><span class=\"o\">:</span><span class=\"mi\">3</span><span class=\"p\">});</span>\n<span class=\"kd\">var</span> <span class=\"nx\">clone</span> <span class=\"o\">=</span> <span class=\"nx\">map1</span><span class=\"p\">;</span>\n</pre></div>\n\n<h2>\n<a name=\"user-content-javascript-first-api\" class=\"anchor\" href=\"#javascript-first-api\" aria-hidden=\"true\"><span class=\"octicon octicon-link\"></span></a>JavaScript-first API</h2>\n\n<p>While <code>immutable</code> is inspired by Clojure, Scala, Haskell and other functional\nprogramming environments, it's designed to bring these powerful concepts to\nJavaScript, and therefore has an Object-Oriented API that closely mirrors that\nof ES6 <a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array\">Array</a>,\n<a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map\">Map</a>, and\n<a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set\">Set</a>.</p>\n\n<p>The difference for the immutable collections is that methods which would mutate\nthe collection, like <code>push</code>, <code>set</code>, <code>unshift</code> or <code>splice</code> instead return a new\nimmutable collection. Methods which return new arrays like <code>slice</code> or <code>concat</code>\ninstead return new immutable collections.</p>\n\n<div class=\"highlight highlight-javascript\"><pre><span class=\"kd\">var</span> <span class=\"nx\">list1</span> <span class=\"o\">=</span> <span class=\"nx\">Immutable</span><span class=\"p\">.</span><span class=\"nx\">List</span><span class=\"p\">.</span><span class=\"nx\">of</span><span class=\"p\">(</span><span class=\"mi\">1</span><span class=\"p\">,</span> <span class=\"mi\">2</span><span class=\"p\">);</span>\n<span class=\"kd\">var</span> <span class=\"nx\">list2</span> <span class=\"o\">=</span> <span class=\"nx\">list1</span><span class=\"p\">.</span><span class=\"nx\">push</span><span class=\"p\">(</span><span class=\"mi\">3</span><span class=\"p\">,</span> <span class=\"mi\">4</span><span class=\"p\">,</span> <span class=\"mi\">5</span><span class=\"p\">);</span>\n<span class=\"kd\">var</span> <span class=\"nx\">list3</span> <span class=\"o\">=</span> <span class=\"nx\">list2</span><span class=\"p\">.</span><span class=\"nx\">unshift</span><span class=\"p\">(</span><span class=\"mi\">0</span><span class=\"p\">);</span>\n<span class=\"kd\">var</span> <span class=\"nx\">list4</span> <span class=\"o\">=</span> <span class=\"nx\">list1</span><span class=\"p\">.</span><span class=\"nx\">concat</span><span class=\"p\">(</span><span class=\"nx\">list2</span><span class=\"p\">,</span> <span class=\"nx\">list3</span><span class=\"p\">);</span>\n<span class=\"nx\">assert</span><span class=\"p\">(</span><span class=\"nx\">list1</span><span class=\"p\">.</span><span class=\"nx\">size</span> <span class=\"o\">===</span> <span class=\"mi\">2</span><span class=\"p\">);</span>\n<span class=\"nx\">assert</span><span class=\"p\">(</span><span class=\"nx\">list2</span><span class=\"p\">.</span><span class=\"nx\">size</span> <span class=\"o\">===</span> <span class=\"mi\">5</span><span class=\"p\">);</span>\n<span class=\"nx\">assert</span><span class=\"p\">(</span><span class=\"nx\">list3</span><span class=\"p\">.</span><span class=\"nx\">size</span> <span class=\"o\">===</span> <span class=\"mi\">6</span><span class=\"p\">);</span>\n<span class=\"nx\">assert</span><span class=\"p\">(</span><span class=\"nx\">list4</span><span class=\"p\">.</span><span class=\"nx\">size</span> <span class=\"o\">===</span> <span class=\"mi\">13</span><span class=\"p\">);</span>\n<span class=\"nx\">assert</span><span class=\"p\">(</span><span class=\"nx\">list4</span><span class=\"p\">.</span><span class=\"nx\">get</span><span class=\"p\">(</span><span class=\"mi\">0</span><span class=\"p\">)</span> <span class=\"o\">===</span> <span class=\"mi\">1</span><span class=\"p\">);</span>\n</pre></div>\n\n<p>Almost all of the methods on <code>Array</code> will be found in similar form on\n<code>Immutable.List</code>, those of <code>Map</code> found on <code>Immutable.Map</code>, and those of <code>Set</code>\nfound on <code>Immutable.Set</code>, including collection operations like <code>forEach()</code>\nand <code>map()</code>.</p>\n\n<div class=\"highlight highlight-javascript\"><pre><span class=\"kd\">var</span> <span class=\"nx\">alpha</span> <span class=\"o\">=</span> <span class=\"nx\">Immutable</span><span class=\"p\">.</span><span class=\"nx\">Map</span><span class=\"p\">({</span><span class=\"nx\">a</span><span class=\"o\">:</span><span class=\"mi\">1</span><span class=\"p\">,</span> <span class=\"nx\">b</span><span class=\"o\">:</span><span class=\"mi\">2</span><span class=\"p\">,</span> <span class=\"nx\">c</span><span class=\"o\">:</span><span class=\"mi\">3</span><span class=\"p\">,</span> <span class=\"nx\">d</span><span class=\"o\">:</span><span class=\"mi\">4</span><span class=\"p\">});</span>\n<span class=\"nx\">alpha</span><span class=\"p\">.</span><span class=\"nx\">map</span><span class=\"p\">((</span><span class=\"nx\">v</span><span class=\"p\">,</span> <span class=\"nx\">k</span><span class=\"p\">)</span> <span class=\"o\">=&gt;</span> <span class=\"nx\">k</span><span class=\"p\">.</span><span class=\"nx\">toUpperCase</span><span class=\"p\">()).</span><span class=\"nx\">join</span><span class=\"p\">();</span>\n<span class=\"c1\">// 'A,B,C,D'</span>\n</pre></div>\n\n<h3>\n<a name=\"user-content-accepts-raw-javascript-objects\" class=\"anchor\" href=\"#accepts-raw-javascript-objects\" aria-hidden=\"true\"><span class=\"octicon octicon-link\"></span></a>Accepts raw JavaScript objects.</h3>\n\n<p>Designed to inter-operate with your existing JavaScript, <code>immutable</code>\naccepts plain JavaScript Arrays and Objects anywhere a method expects an\n<code>Iterable</code> with no performance penalty.</p>\n\n<div class=\"highlight highlight-javascript\"><pre><span class=\"kd\">var</span> <span class=\"nx\">map1</span> <span class=\"o\">=</span> <span class=\"nx\">Immutable</span><span class=\"p\">.</span><span class=\"nx\">Map</span><span class=\"p\">({</span><span class=\"nx\">a</span><span class=\"o\">:</span><span class=\"mi\">1</span><span class=\"p\">,</span> <span class=\"nx\">b</span><span class=\"o\">:</span><span class=\"mi\">2</span><span class=\"p\">,</span> <span class=\"nx\">c</span><span class=\"o\">:</span><span class=\"mi\">3</span><span class=\"p\">,</span> <span class=\"nx\">d</span><span class=\"o\">:</span><span class=\"mi\">4</span><span class=\"p\">});</span>\n<span class=\"kd\">var</span> <span class=\"nx\">map2</span> <span class=\"o\">=</span> <span class=\"nx\">Immutable</span><span class=\"p\">.</span><span class=\"nx\">Map</span><span class=\"p\">({</span><span class=\"nx\">c</span><span class=\"o\">:</span><span class=\"mi\">10</span><span class=\"p\">,</span> <span class=\"nx\">a</span><span class=\"o\">:</span><span class=\"mi\">20</span><span class=\"p\">,</span> <span class=\"nx\">t</span><span class=\"o\">:</span><span class=\"mi\">30</span><span class=\"p\">});</span>\n<span class=\"kd\">var</span> <span class=\"nx\">obj</span> <span class=\"o\">=</span> <span class=\"p\">{</span><span class=\"nx\">d</span><span class=\"o\">:</span><span class=\"mi\">100</span><span class=\"p\">,</span> <span class=\"nx\">o</span><span class=\"o\">:</span><span class=\"mi\">200</span><span class=\"p\">,</span> <span class=\"nx\">g</span><span class=\"o\">:</span><span class=\"mi\">300</span><span class=\"p\">};</span>\n<span class=\"kd\">var</span> <span class=\"nx\">map3</span> <span class=\"o\">=</span> <span class=\"nx\">map1</span><span class=\"p\">.</span><span class=\"nx\">merge</span><span class=\"p\">(</span><span class=\"nx\">map2</span><span class=\"p\">,</span> <span class=\"nx\">obj</span><span class=\"p\">);</span>\n<span class=\"c1\">// Map { a: 20, b: 2, c: 10, d: 100, t: 30, o: 200, g: 300 }</span>\n</pre></div>\n\n<p>This is possible because <code>immutable</code> can treat any JavaScript Array or Object\nas an Iterable. You can take advantage of this in order to get sophisticated\ncollection methods on JavaScript Objects, which otherwise have a very sparse\nnative API. Because Seq evaluates lazily and does not cache intermediate\nresults, these operations can be extremely efficient.</p>\n\n<div class=\"highlight highlight-javascript\"><pre><span class=\"kd\">var</span> <span class=\"nx\">myObject</span> <span class=\"o\">=</span> <span class=\"p\">{</span><span class=\"nx\">a</span><span class=\"o\">:</span><span class=\"mi\">1</span><span class=\"p\">,</span><span class=\"nx\">b</span><span class=\"o\">:</span><span class=\"mi\">2</span><span class=\"p\">,</span><span class=\"nx\">c</span><span class=\"o\">:</span><span class=\"mi\">3</span><span class=\"p\">};</span>\n<span class=\"nx\">Seq</span><span class=\"p\">(</span><span class=\"nx\">myObject</span><span class=\"p\">).</span><span class=\"nx\">map</span><span class=\"p\">(</span><span class=\"nx\">x</span> <span class=\"o\">=&gt;</span> <span class=\"nx\">x</span> <span class=\"o\">*</span> <span class=\"nx\">x</span><span class=\"p\">).</span><span class=\"nx\">toObject</span><span class=\"p\">();</span>\n<span class=\"c1\">// { a: 1, b: 4, c: 9 }</span>\n</pre></div>\n\n<h3>\n<a name=\"user-content-converts-back-to-raw-javascript-objects\" class=\"anchor\" href=\"#converts-back-to-raw-javascript-objects\" aria-hidden=\"true\"><span class=\"octicon octicon-link\"></span></a>Converts back to raw JavaScript objects.</h3>\n\n<p>All <code>immutable</code> Iterables can be converted to plain JavaScript Arrays and\nObjects shallowly with <code>toArray()</code> and <code>toObject()</code> or deeply with <code>toJS()</code>.\nAll Immutable Iterables also implement <code>toJSON()</code> allowing them to be passed to\n<code>JSON.stringify</code> directly.</p>\n\n<div class=\"highlight highlight-javascript\"><pre><span class=\"kd\">var</span> <span class=\"nx\">deep</span> <span class=\"o\">=</span> <span class=\"nx\">Immutable</span><span class=\"p\">.</span><span class=\"nx\">Map</span><span class=\"p\">({</span> <span class=\"nx\">a</span><span class=\"o\">:</span> <span class=\"mi\">1</span><span class=\"p\">,</span> <span class=\"nx\">b</span><span class=\"o\">:</span> <span class=\"mi\">2</span><span class=\"p\">,</span> <span class=\"nx\">c</span><span class=\"o\">:</span> <span class=\"nx\">Immutable</span><span class=\"p\">.</span><span class=\"nx\">List</span><span class=\"p\">.</span><span class=\"nx\">of</span><span class=\"p\">(</span><span class=\"mi\">3</span><span class=\"p\">,</span> <span class=\"mi\">4</span><span class=\"p\">,</span> <span class=\"mi\">5</span><span class=\"p\">)</span> <span class=\"p\">});</span>\n<span class=\"nx\">deep</span><span class=\"p\">.</span><span class=\"nx\">toObject</span><span class=\"p\">()</span> <span class=\"c1\">// { a: 1, b: 2, c: List [ 3, 4, 5 ] }</span>\n<span class=\"nx\">deep</span><span class=\"p\">.</span><span class=\"nx\">toArray</span><span class=\"p\">()</span> <span class=\"c1\">// [ 1, 2, List [ 3, 4, 5 ] ]</span>\n<span class=\"nx\">deep</span><span class=\"p\">.</span><span class=\"nx\">toJS</span><span class=\"p\">()</span> <span class=\"c1\">// { a: 1, b: 2, c: [ 3, 4, 5 ] }</span>\n<span class=\"nx\">JSON</span><span class=\"p\">.</span><span class=\"nx\">stringify</span><span class=\"p\">(</span><span class=\"nx\">deep</span><span class=\"p\">)</span> <span class=\"c1\">// '{\"a\":1,\"b\":2,\"c\":[3,4,5]}'</span>\n</pre></div>\n\n<h2>\n<a name=\"user-content-nested-structures\" class=\"anchor\" href=\"#nested-structures\" aria-hidden=\"true\"><span class=\"octicon octicon-link\"></span></a>Nested Structures</h2>\n\n<p>The collections in <code>immutable</code> are intended to be nested, allowing for deep\ntrees of data, similar to JSON.</p>\n\n<div class=\"highlight highlight-javascript\"><pre><span class=\"kd\">var</span> <span class=\"nx\">nested</span> <span class=\"o\">=</span> <span class=\"nx\">Immutable</span><span class=\"p\">.</span><span class=\"nx\">fromJS</span><span class=\"p\">({</span><span class=\"nx\">a</span><span class=\"o\">:</span><span class=\"p\">{</span><span class=\"nx\">b</span><span class=\"o\">:</span><span class=\"p\">{</span><span class=\"nx\">c</span><span class=\"o\">:</span><span class=\"p\">[</span><span class=\"mi\">3</span><span class=\"p\">,</span><span class=\"mi\">4</span><span class=\"p\">,</span><span class=\"mi\">5</span><span class=\"p\">]}}});</span>\n<span class=\"c1\">// Map { a: Map { b: Map { c: List [ 3, 4, 5 ] } } }</span>\n</pre></div>\n\n<p>A few power-tools allow for reading and operating on nested data. The\nmost useful are <code>mergeDeep</code>, <code>getIn</code>, <code>setIn</code>, and <code>updateIn</code>, found on <code>List</code>,\n<code>Map</code> and <code>OrderedMap</code>.</p>\n\n<div class=\"highlight highlight-javascript\"><pre><span class=\"kd\">var</span> <span class=\"nx\">nested2</span> <span class=\"o\">=</span> <span class=\"nx\">nested</span><span class=\"p\">.</span><span class=\"nx\">mergeDeep</span><span class=\"p\">({</span><span class=\"nx\">a</span><span class=\"o\">:</span><span class=\"p\">{</span><span class=\"nx\">b</span><span class=\"o\">:</span><span class=\"p\">{</span><span class=\"nx\">d</span><span class=\"o\">:</span><span class=\"mi\">6</span><span class=\"p\">}}});</span>\n<span class=\"c1\">// Map { a: Map { b: Map { c: List [ 3, 4, 5 ], d: 6 } } }</span>\n</pre></div>\n\n<div class=\"highlight highlight-javascript\"><pre><span class=\"nx\">nested2</span><span class=\"p\">.</span><span class=\"nx\">getIn</span><span class=\"p\">([</span><span class=\"s1\">'a'</span><span class=\"p\">,</span> <span class=\"s1\">'b'</span><span class=\"p\">,</span> <span class=\"s1\">'d'</span><span class=\"p\">]);</span> <span class=\"c1\">// 6</span>\n\n<span class=\"kd\">var</span> <span class=\"nx\">nested3</span> <span class=\"o\">=</span> <span class=\"nx\">nested2</span><span class=\"p\">.</span><span class=\"nx\">updateIn</span><span class=\"p\">([</span><span class=\"s1\">'a'</span><span class=\"p\">,</span> <span class=\"s1\">'b'</span><span class=\"p\">,</span> <span class=\"s1\">'d'</span><span class=\"p\">],</span> <span class=\"nx\">value</span> <span class=\"o\">=&gt;</span> <span class=\"nx\">value</span> <span class=\"o\">+</span> <span class=\"mi\">1</span><span class=\"p\">);</span>\n<span class=\"c1\">// Map { a: Map { b: Map { c: List [ 3, 4, 5 ], d: 7 } } }</span>\n\n<span class=\"kd\">var</span> <span class=\"nx\">nested4</span> <span class=\"o\">=</span> <span class=\"nx\">nested3</span><span class=\"p\">.</span><span class=\"nx\">updateIn</span><span class=\"p\">([</span><span class=\"s1\">'a'</span><span class=\"p\">,</span> <span class=\"s1\">'b'</span><span class=\"p\">,</span> <span class=\"s1\">'c'</span><span class=\"p\">],</span> <span class=\"nx\">list</span> <span class=\"o\">=&gt;</span> <span class=\"nx\">list</span><span class=\"p\">.</span><span class=\"nx\">push</span><span class=\"p\">(</span><span class=\"mi\">6</span><span class=\"p\">));</span>\n<span class=\"c1\">// Map { a: Map { b: Map { c: List [ 3, 4, 5, 6 ], d: 7 } } }</span>\n</pre></div>\n\n<h2>\n<a name=\"user-content-lazy-seq\" class=\"anchor\" href=\"#lazy-seq\" aria-hidden=\"true\"><span class=\"octicon octicon-link\"></span></a>Lazy Seq</h2>\n\n<p><code>Seq</code> describes a lazy operation, allowing them to efficiently chain\nuse of all the Iterable methods (such as <code>map</code> and <code>filter</code>).</p>\n\n<p><strong>Seq is immutable</strong> — Once a Seq is created, it cannot be\nchanged, appended to, rearranged or otherwise modified. Instead, any mutative\nmethod called on a Seq will return a new Seq.</p>\n\n<p><strong>Seq is lazy</strong> — Seq does as little work as necessary to respond to any\nmethod call.</p>\n\n<p>For example, the following does not perform any work, because the resulting\nSeq is never used:</p>\n\n<pre><code>var oddSquares = Immutable.Sequence.of(1,2,3,4,5,6,7,8)\n  .filter(x =&gt; x % 2).map(x =&gt; x * x);\n</code></pre>\n\n<p>Once the Seq is used, it performs only the work necessary. In this\nexample, no intermediate arrays are ever created, filter is called three times\ntwice, and map is only called two times:</p>\n\n<pre><code>console.log(oddSquares.get(1)); // 9\n</code></pre>\n\n<p>Any collection can be converted to a lazy Seq with <code>.toSeq()</code>.</p>\n\n<pre><code>var seq = Immutable.Map({a:1, b:1, c:1}).toSeq();\n</code></pre>\n\n<p>Seq allow for the efficient chaining of sequence operations, especially when\nconverting to a different concrete type (such as to a JS object):</p>\n\n<pre><code>seq.flip().map(key =&gt; key.toUpperCase()).flip().toObject();\n// Map { A: 1, B: 1, C: 1 }\n</code></pre>\n\n<p>As well as expressing logic that would otherwise seem memory-limited:</p>\n\n<pre><code>Immutable.Range(1, Infinity)\n  .skip(1000)\n  .map(n =&gt; -n)\n  .filter(n =&gt; n % 2 === 0)\n  .take(2)\n  .reduce((r, n) =&gt; r * n, 1);\n// 1006008\n</code></pre>\n\n<p>Note: An iterable is always iterated in the same order, however that order may\nnot always be well defined, as is the case for the <code>Map</code>.</p>\n\n<h2>\n<a name=\"user-content-equality-treats-collections-as-data\" class=\"anchor\" href=\"#equality-treats-collections-as-data\" aria-hidden=\"true\"><span class=\"octicon octicon-link\"></span></a>Equality treats Collections as Data</h2>\n\n<p><code>Immutable</code> provides equality which treats immutable data structures as pure\ndata, performing a deep equality check if necessary.</p>\n\n<div class=\"highlight highlight-javascript\"><pre><span class=\"kd\">var</span> <span class=\"nx\">map1</span> <span class=\"o\">=</span> <span class=\"nx\">Immutable</span><span class=\"p\">.</span><span class=\"nx\">Map</span><span class=\"p\">({</span><span class=\"nx\">a</span><span class=\"o\">:</span><span class=\"mi\">1</span><span class=\"p\">,</span> <span class=\"nx\">b</span><span class=\"o\">:</span><span class=\"mi\">1</span><span class=\"p\">,</span> <span class=\"nx\">c</span><span class=\"o\">:</span><span class=\"mi\">1</span><span class=\"p\">});</span>\n<span class=\"kd\">var</span> <span class=\"nx\">map2</span> <span class=\"o\">=</span> <span class=\"nx\">Immutable</span><span class=\"p\">.</span><span class=\"nx\">Map</span><span class=\"p\">({</span><span class=\"nx\">a</span><span class=\"o\">:</span><span class=\"mi\">1</span><span class=\"p\">,</span> <span class=\"nx\">b</span><span class=\"o\">:</span><span class=\"mi\">1</span><span class=\"p\">,</span> <span class=\"nx\">c</span><span class=\"o\">:</span><span class=\"mi\">1</span><span class=\"p\">});</span>\n<span class=\"nx\">assert</span><span class=\"p\">(</span><span class=\"nx\">map1</span> <span class=\"o\">!==</span> <span class=\"nx\">map2</span><span class=\"p\">);</span>\n<span class=\"nx\">assert</span><span class=\"p\">(</span><span class=\"nx\">Immutable</span><span class=\"p\">.</span><span class=\"nx\">is</span><span class=\"p\">(</span><span class=\"nx\">map1</span><span class=\"p\">,</span> <span class=\"nx\">map2</span><span class=\"p\">)</span> <span class=\"o\">===</span> <span class=\"kc\">true</span><span class=\"p\">);</span>\n</pre></div>\n\n<p><code>Immutable.is()</code> uses the same measure of equality as <a href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is\">Object.is</a>\nincluding if both are immutable and all keys and values are equal\nusing the same measure of equality.</p>\n\n<h2>\n<a name=\"user-content-batching-mutations\" class=\"anchor\" href=\"#batching-mutations\" aria-hidden=\"true\"><span class=\"octicon octicon-link\"></span></a>Batching Mutations</h2>\n\n<blockquote>\n<p>If a tree falls in the woods, does it make a sound?</p>\n\n<p>If a pure function mutates some local data in order to produce an immutable\nreturn value, is that ok?</p>\n\n<p>— Rich Hickey, Clojure</p>\n</blockquote>\n\n<p>Applying a mutation to create a new immutable object results in some overhead,\nwhich can add up to a performance penalty. If you need to apply a series of\nmutations locally before returning, <code>Immutable</code> gives you the ability to create\na temporary mutable (transient) copy of a collection and apply a batch of\nmutations in a performant manner by using <code>withMutations</code>. In fact, this is\nexactly how  <code>Immutable</code> applies complex mutations itself.</p>\n\n<p>As an example, building <code>list2</code> results in the creation of 1, not 3, new\nimmutable Lists.</p>\n\n<div class=\"highlight highlight-javascript\"><pre><span class=\"kd\">var</span> <span class=\"nx\">list1</span> <span class=\"o\">=</span> <span class=\"nx\">Immutable</span><span class=\"p\">.</span><span class=\"nx\">List</span><span class=\"p\">.</span><span class=\"nx\">of</span><span class=\"p\">(</span><span class=\"mi\">1</span><span class=\"p\">,</span><span class=\"mi\">2</span><span class=\"p\">,</span><span class=\"mi\">3</span><span class=\"p\">);</span>\n<span class=\"kd\">var</span> <span class=\"nx\">list2</span> <span class=\"o\">=</span> <span class=\"nx\">list1</span><span class=\"p\">.</span><span class=\"nx\">withMutations</span><span class=\"p\">(</span><span class=\"kd\">function</span> <span class=\"p\">(</span><span class=\"nx\">list</span><span class=\"p\">)</span> <span class=\"p\">{</span>\n  <span class=\"nx\">list</span><span class=\"p\">.</span><span class=\"nx\">push</span><span class=\"p\">(</span><span class=\"mi\">4</span><span class=\"p\">).</span><span class=\"nx\">push</span><span class=\"p\">(</span><span class=\"mi\">5</span><span class=\"p\">).</span><span class=\"nx\">push</span><span class=\"p\">(</span><span class=\"mi\">6</span><span class=\"p\">);</span>\n<span class=\"p\">});</span>\n<span class=\"nx\">assert</span><span class=\"p\">(</span><span class=\"nx\">list1</span><span class=\"p\">.</span><span class=\"nx\">size</span> <span class=\"o\">===</span> <span class=\"mi\">3</span><span class=\"p\">);</span>\n<span class=\"nx\">assert</span><span class=\"p\">(</span><span class=\"nx\">list2</span><span class=\"p\">.</span><span class=\"nx\">size</span> <span class=\"o\">===</span> <span class=\"mi\">6</span><span class=\"p\">);</span>\n</pre></div>\n\n<p>Note: <code>immutable</code> also provides <code>asMutable</code> and <code>asImmutable</code>, but only\nencourages their use when <code>withMutations</code> will not suffice. Use caution to not\nreturn a mutable copy, which could result in undesired behavior.</p>\n\n<h2>\n<a name=\"user-content-api-documentation\" class=\"anchor\" href=\"#api-documentation\" aria-hidden=\"true\"><span class=\"octicon octicon-link\"></span></a>API Documentation</h2>\n\n<p>All documentation is contained within the type definition file, <a href=\"https://github.com/facebook/immutable-js/blob/master/type-definitions/Immutable.d.ts\">Immutable.d.ts</a>.</p>\n\n<h2>\n<a name=\"user-content-contribution\" class=\"anchor\" href=\"#contribution\" aria-hidden=\"true\"><span class=\"octicon octicon-link\"></span></a>Contribution</h2>\n\n<p>Use <a href=\"https://github.com/facebook/immutable-js/issues\">Github issues</a> for requests.</p>\n\n<p>We actively welcome pull requests, learn how to <a href=\"https://github.com/facebook/immutable-js/blob/master/CONTRIBUTING.md\">contribute</a>.</p>\n\n<h2>\n<a name=\"user-content-thanks\" class=\"anchor\" href=\"#thanks\" aria-hidden=\"true\"><span class=\"octicon octicon-link\"></span></a>Thanks</h2>\n\n<p><a href=\"https://github.com/hughfdjackson/\">Hugh Jackson</a>, for providing the npm package\nname. If you're looking for his unsupported package, see <a href=\"https://www.npmjs.org/package/immutable/1.4.1\">v1.4.1</a>.</p>\n\n<p><a href=\"https://www.youtube.com/watch?v=K2NYwP90bNs\">Phil Bagwell</a>, for his inspiration\nand research in persistent data structures.</p>\n\n<h2>\n<a name=\"user-content-license\" class=\"anchor\" href=\"#license\" aria-hidden=\"true\"><span class=\"octicon octicon-link\"></span></a>License</h2>\n\n<p><code>Immutable</code> is <a href=\"https://github.com/facebook/immutable-js/blob/master/LICENSE\">BSD-licensed</a>. We also provide an additional <a href=\"https://github.com/facebook/immutable-js/blob/master/PATENTS\">patent grant</a>.</p>\n</article>"





























































































































































































































































































































































)


            }})
          )
        )
      )
    );
  }
});


module.exports = Index;

},{"./Header":1,"react":undefined}],1:[function(require,module,exports){
var React = require('react');
var SVGSet = require('./SVGSet');
var Logo = require('./Logo');
var StarBtn = require('./StarBtn');


var fixed = window.matchMedia && window.matchMedia('(max-device-width: 680px)');
fixed = fixed && fixed.matches;

var Header = React.createClass({displayName: 'Header',

  getInitialState: function() {
    return { scroll: 0 };
  },

  componentDidMount: function () {
    this.offsetHeight = this.getDOMNode().offsetHeight;
    window.addEventListener('scroll', this.handleScroll);
    window.addEventListener('resize', this.handleResize);
  },

  componentWillUnmount: function () {
    window.removeEventListener('scroll', this.handleScroll);
    window.removeEventListener('resize', this.handleResize);
  },

  handleResize: function (event) {
    this.offsetHeight = this.getDOMNode().offsetHeight;
  },

  handleScroll: function (event) {
    var scrollPos = window.scrollY;
    if (scrollPos < this.offsetHeight) {
      this.setState({ scroll: scrollPos });
    }
  },

  render: function() {
    var neg = this.state.scroll < 0;
    var s = neg ? 0 : this.state.scroll;
    var sp = fixed ? 35 : 70;

    var miniHeaderContents =
      React.createElement("div", {className: "miniHeaderContents"}, 
        React.createElement("a", {href: "docs/", target: "_self"}, "Documentation"), 
        React.createElement("a", {href: "https://github.com/facebook/immutable-js/issues/"}, "Support"), 
        React.createElement("a", {href: "https://github.com/facebook/immutable-js/"}, "Github")
      );

    return (
      React.createElement("div", {className: "header"}, 
        React.createElement("div", {className: "miniHeader"}, 
          miniHeaderContents
        ), 
        React.createElement("div", {className: "cover"}, 
        React.createElement("div", {className: "coverFixed" + (fixed ? ' fixed' : ''), style: fixed ? {}: t(s, 1)}, 
          React.createElement("div", {className: "filler"}, 
            miniHeaderContents
          ), 
          React.createElement("div", {className: "synopsis"}, 
            React.createElement("div", {className: "logo"}, 
              (fixed ? [0,0,0,0,0,0,0] : [0,0,0,0,0,0,0,0,0,0,0,0]).map(function(_, i) 
                {return React.createElement(SVGSet, {key: i, style: t(y(s, i * sp), z(s, i * sp))}, 
                  React.createElement(Logo, {color: "#d7dadb"}), 
                  React.createElement(Logo, {color: "#6dbcdb", opacity: o(s, i * sp)})
                );}
              ), 
              React.createElement(SVGSet, {style: t(s * -0.55, 1)}, 
                React.createElement(Logo, {color: "#FC4349"}), 
                React.createElement(Logo, {color: "#2C3E50", inline: true})
              )
            )
          ), 
          React.createElement("div", {className: "buttons"}, 
            React.createElement(StarBtn, null)
          )
        )
        )
      )
    );
  }
});


function y(s, p) {
  return ((p < s ? p : s) * -0.55);
}

function o(s, p) {
  return Math.max(0, s > p ? 1 - (s - p)/350 : 1);
}

function z(s, p) {
  return Math.max(0, s > p ? 1 - (s - p)/20000 : 1);
}

function t(y, z) {
  var transform = 'translate3d(0, '+y+'px, 0) scale('+z+')';
  return {
    transform: transform,
    WebkitTransform: transform,
    MozTransform: transform,
    msTransform: transform,
    OTransform: transform,
  };
}


module.exports = Header;

},{"./Logo":2,"./SVGSet":3,"./StarBtn":4,"react":undefined}],2:[function(require,module,exports){
var React = require('react');


var Logo = React.createClass({displayName: 'Logo',

  shouldComponentUpdate: function(nextProps) {
    return nextProps.opacity !== this.props.opacity;
  },

  render: function() {
    var opacity = this.props.opacity;
    if (opacity === undefined) {
      opacity = 1;
    }
    return !this.props.inline ? (
      React.createElement("g", {fill: this.props.color, style: { opacity: this.props.opacity}}, 
        React.createElement("path", {d: "M0,0l13.9,0v41.1H0L0,0z"}), 
        React.createElement("path", {d: "M18.2,0L29,0l10.7,15.8L50.4,0l10.9,0v41.1H48.1V26.3l-8.4,12.3l-8.4-12.3v14.8H18.2V0z"}), 
        React.createElement("path", {d: "M65.5,0l10.9,0L87,15.8L97.7,0l10.9,0v41.1H95.4V26.3L87,38.7l-8.4-12.3v14.8H65.5V0z"}), 
        React.createElement("path", {d: "M128.6,42.2c-2.6,0-4.9-0.3-7-1c-2.1-0.7-3.9-1.6-5.4-3c-1.5-1.3-2.6-3-3.4-5c-0.8-2-1.2-4.4-1.2-7.1V0" + ' ' +
          "l13.1,0v25.6c0,1.4,0.3,2.5,0.9,3.3c0.6,0.8,1.6,1.1,3,1.1c1.4,0,2.4-0.4,3-1.1c0.6-0.8,0.9-1.9,0.9-3.3V0l13.2,0v26.1" + ' ' +
          "c0,2.7-0.4,5.1-1.2,7.1c-0.8,2-2,3.7-3.5,5c-1.5,1.3-3.3,2.3-5.4,3C133.5,41.8,131.2,42.2,128.6,42.2z"}), 
        React.createElement("path", {d: "M155.4,10.8h-7.6V0l28.7,0v10.8h-7.6v30.3h-13.6V10.8z"}), 
        React.createElement("path", {d: "M186.4,0l9.9,0l15.6,41.1h-12.9l-1.4-3.7h-12.5l-1.4,3.7h-12.9L186.4,0z M194.1,28.4l-2.8-7.2l-2.8,7.2" + ' ' +
          "H194.1z"}), 
        React.createElement("path", {d: "M212.9,0L229,0c2.1,0,3.9,0.2,5.6,0.7c1.7,0.5,3.2,1.2,4.4,2.1s2.2,2.1,2.8,3.5c0.7,1.4,1,3,1,4.8" + ' ' +
          "c0,1.3-0.2,2.4-0.5,3.4c-0.3,0.9-0.7,1.7-1,2.3c-0.5,0.7-1,1.4-1.5,1.8c0.9,0.6,1.7,1.3,2.5,2.2c0.6,0.8,1.2,1.8,1.7,3" + ' ' +
          "c0.5,1.2,0.8,2.7,0.8,4.4c0,2-0.3,3.8-1,5.4c-0.7,1.6-1.7,3-3,4.1c-1.3,1.1-2.9,2-4.7,2.6c-1.9,0.6-4,0.9-6.3,0.9h-16.8V0z" + ' ' +
           "M230.2,12.5c0-1.9-1-2.8-3.1-2.8h-1.5v5.7h1.5C229.2,15.4,230.2,14.4,230.2,12.5z M227.1,31.4c3.1,0,4.7-1.2,4.7-3.6" + ' ' +
          "c0-2.4-1.6-3.6-4.7-3.6h-1.5v7.2H227.1z"}), 
        React.createElement("path", {d: "M248.3,0L262,0v30.3h11.3v10.8h-25V0z"}), 
        React.createElement("path", {d: "M275.3,0l24.2,0v10.8h-11.1v4.6h10.9v10.2h-10.9v4.7H300v10.8h-24.7V0z"})
      )
    ) : (
      React.createElement("g", {fill: this.props.color, style: { opacity: this.props.opacity}}, 
        React.createElement("path", {d: "M0,0l13.9,0v41.1H0L0,0z M7.8,36.2V4.9H6.2v31.3H7.8z"}), 
        React.createElement("path", {d: "M18.2,0L29,0l10.7,15.8L50.4,0l10.9,0v41.1H48.1V26.3l-8.4,12.3l-8.4-12.3v14.8H18.2V0z M25.9,36.2V7.9" + ' ' +
          "L39.7,28L53.5,7.9v28.3h1.6V4.9h-1.6L39.7,25.2L25.9,4.9h-1.6v31.3H25.9z"}), 
        React.createElement("path", {d: "M65.5,0l10.9,0L87,15.8L97.7,0l10.9,0v41.1H95.4V26.3L87,38.7l-8.4-12.3v14.8H65.5V0z M73.2,36.2V7.9" + ' ' +
          "L87,28l13.7-20.1v28.3h1.6V4.9h-1.6L87,25.2L73.2,4.9h-1.6v31.3H73.2z"}), 
        React.createElement("path", {d: "M128.6,42.2c-2.6,0-4.9-0.3-7-1c-2.1-0.7-3.9-1.6-5.4-3c-1.5-1.3-2.6-3-3.4-5c-0.8-2-1.2-4.4-1.2-7.1V0" + ' ' +
          "l13.1,0v25.6c0,1.4,0.3,2.5,0.9,3.3c0.6,0.8,1.6,1.1,3,1.1c1.4,0,2.4-0.4,3-1.1c0.6-0.8,0.9-1.9,0.9-3.3V0l13.2,0v26.1" + ' ' +
          "c0,2.7-0.4,5.1-1.2,7.1c-0.8,2-2,3.7-3.5,5c-1.5,1.3-3.3,2.3-5.4,3C133.5,41.8,131.2,42.2,128.6,42.2z M128.6,34.8" + ' ' +
          "c-6.2,0-9.2-3-9.2-9.1V4.9h-1.6v20.8c0,3.5,0.9,6.1,2.8,7.9c1.9,1.8,4.6,2.7,8,2.7c3.5,0,6.2-0.9,8.1-2.7c1.9-1.8,2.8-4.5,2.8-7.9" + ' ' +
          "V4.9h-1.7v20.8C137.8,31.7,134.8,34.8,128.6,34.8z"}), 
        React.createElement("path", {d: "M155.4,10.8h-7.6V0l28.7,0v10.8h-7.6v30.3h-13.6V10.8z M163,36.2V6.4h8.8V4.9h-19.2v1.5h8.8v29.8H163z"}), 
        React.createElement("path", {d: "M186.4,0l9.9,0l15.6,41.1h-12.9l-1.4-3.7h-12.5l-1.4,3.7h-12.9L186.4,0z M180,36.2l1.2-3.1h20.3l1.2,3.1" + ' ' +
          "h1.7L192.5,4.9h-2.3l-11.9,31.3H180z M191.3,6.4l9.6,25.2h-19.2L191.3,6.4z M194.1,28.4l-2.8-7.2l-2.8,7.2H194.1z"}), 
        React.createElement("path", {d: "M212.9,0L229,0c2.1,0,3.9,0.2,5.6,0.7c1.7,0.5,3.2,1.2,4.4,2.1s2.2,2.1,2.8,3.5c0.7,1.4,1,3,1,4.8" + ' ' +
          "c0,1.3-0.2,2.4-0.5,3.4c-0.3,0.9-0.7,1.7-1,2.3c-0.5,0.7-1,1.4-1.5,1.8c0.9,0.6,1.7,1.3,2.5,2.2c0.6,0.8,1.2,1.8,1.7,3" + ' ' +
          "c0.5,1.2,0.8,2.7,0.8,4.4c0,2-0.3,3.8-1,5.4c-0.7,1.6-1.7,3-3,4.1c-1.3,1.1-2.9,2-4.7,2.6c-1.9,0.6-4,0.9-6.3,0.9h-16.8V0z" + ' ' +
           "M228,36.2c3.6,0,6.3-0.8,8-2.3c1.7-1.6,2.6-3.6,2.6-6.2c0-1.7-0.4-3-1.1-4c-0.7-1-1.5-1.8-2.3-2.4c-1-0.7-2.2-1.1-3.4-1.4" + ' ' +
          "c1-0.3,1.9-0.7,2.7-1.4c0.7-0.5,1.3-1.3,1.9-2.2s0.8-2.1,0.8-3.5c0-2.6-0.8-4.5-2.5-5.9c-1.6-1.3-3.9-2-6.7-2h-8.9v31.3H228z" + ' ' +
           "M220.7,19.1V6.4l7.3,0c2.7,0,4.6,0.6,5.8,1.8c1.2,1.2,1.8,2.7,1.8,4.6c0,1.9-0.6,3.4-1.8,4.6c-1.2,1.2-3.1,1.8-5.8,1.8H220.7z" + ' ' +
           "M220.7,34.7V20.6h7.2c1.3,0,2.5,0.1,3.5,0.4c1.1,0.3,2,0.7,2.9,1.2c0.8,0.6,1.5,1.3,1.9,2.2c0.5,0.9,0.7,2,0.7,3.2" + ' ' +
          "c0,2.5-0.8,4.3-2.5,5.4c-1.7,1.1-3.9,1.7-6.6,1.7H220.7z M230.2,12.5c0-1.9-1-2.8-3.1-2.8h-1.5v5.7h1.5" + ' ' +
          "C229.2,15.4,230.2,14.4,230.2,12.5z M227.1,31.4c3.1,0,4.7-1.2,4.7-3.6c0-2.4-1.6-3.6-4.7-3.6h-1.5v7.2H227.1z"}), 
        React.createElement("path", {d: "M248.3,0L262,0v30.3h11.3v10.8h-25V0z M269.9,36.2v-1.5h-13.8V4.9h-1.6v31.3H269.9z"}), 
        React.createElement("path", {d: "M275.3,0l24.2,0v10.8h-11.1v4.6h10.9v10.2h-10.9v4.7H300v10.8h-24.7V0z M295.4,36.2v-1.5h-12.3V21.2h11.7" + ' ' +
          "v-1.5h-11.7V6.4h12.3V4.9h-13.9v31.3H295.4z"})
      )
    );
  }
});


module.exports = Logo;

},{"react":undefined}],3:[function(require,module,exports){
var React = require('react');


var SVGSet = React.createClass({displayName: 'SVGSet',
  render: function() {
    return (
      React.createElement("svg", {className: "svg", style: this.props.style, viewBox: "0 0 300 42.2"}, 
        this.props.children
      )
    );
  }
});


module.exports = SVGSet;

},{"react":undefined}],4:[function(require,module,exports){
var React = require('react');
var loadJSON = require('./loadJSON');


// API endpoints
// https://registry.npmjs.org/immutable/latest
// https://api.github.com/repos/facebook/immutable-js

var StarBtn = React.createClass({displayName: 'StarBtn',

  getInitialState: function() {
    return { stars: null };
  },

  componentDidMount: function () {
    loadJSON('https://api.github.com/repos/facebook/immutable-js', function(value)  {
      value && value.stargazers_count &&
        this.setState({stars: value.stargazers_count});
    }.bind(this));
  },

  render: function() {
    return (
      React.createElement("span", {className: "github-btn"}, 
        React.createElement("a", {className: "gh-btn", id: "gh-btn", href: "https://github.com/facebook/immutable-js/"}, 
          React.createElement("span", {className: "gh-ico"}), 
          React.createElement("span", {className: "gh-text"}, "Star")
        ), 
        this.state.stars &&
          React.createElement("a", {className: "gh-count", href: "https://github.com/facebook/immutable-js/stargazers"}, 
            this.state.stars
          )
        
      )
    );
  }

});

module.exports = StarBtn;

},{"./loadJSON":5,"react":undefined}],5:[function(require,module,exports){
module.exports = loadJSON;

function loadJSON(url, then) {
  var oReq = new XMLHttpRequest();
  oReq.onload = function(event)  {
    var json;
    try {
      json = JSON.parse(event.target.responseText);
    } catch (e) {}
    then(json);
  }
  oReq.open("get", url, true);
  oReq.send();
}

},{}],"react":[function(require,module,exports){
(function (global){
module.exports = global.React;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}]},{},["./src/index.js"])


//# sourceMappingURL=maps/bundle.js.map