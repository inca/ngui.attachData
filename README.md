# Angular UI Commons

A set of common directives for non-SPA built with AngularJS.

## Directive `ui-hl`

Gives a class to all elements which match a selector.
Useful in highlighting navigation links.

```
<nav>
  <a id='nav-1' href='#'>One</a>
  <a id='nav-2' href='#'>Two</a>
  <a id='nav-3' href='#'>Three</a>
</nav>
<div ui-hl='#nav-1'>Page one</div>
```

In this example the first element will receive the `active` class.
By default the `active` class is added. Use `ui-hl-class` attribute to override it.

When removing the element using Angular, the class will be automatically removed.

## Directive `ui-focus`

Sets the focus on input elements on load.

```
<input ui-focus/>
```

# License

MIT License © Boris Okunskiy 2014
