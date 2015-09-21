---
layout: default
---

Lorem Dicksum is a jquery plugin that allows you to generate filthy filler content for your development site. (NSFW, Obviously).

## Let's get dirty

To get started, include loremDicksum.js in the footer of your page:

```<script src="loremDicksum.js"></script>```

loremDicksum.js will automatically fill in any element that has the 'dicksum' class:

```<h2 class="dicksum"></h2>``` 
```<p class="dicksum"></p>```

Alternatively, you can call loremDicksum in your own javascript using any selector you wish:

```$( 'p, .mySelector' ).loremDicksum();```

That's it!


## See it in Action
<section id ="generator">
  <label for="paragraphs">Enter the number of paragraphs to generate: </label>
  <input name="paragraphs" type="number" value="2"> <button class="dicksum" id="generate"></button>
</section>
<section id="example"></section>