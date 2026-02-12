---
title: "Args and Kwargs"
description: "functions made easy"
date: 2016-01-22
tags:
  - python
draft: false
---

One of the biggest constraints on software engineering is a function signature. A signature is the name and arguments required of a function in order to call it. If a function is highly used in large code base, changing the signature can be a pain. Python can solve a lot of this pain with keyword arguments. Keyword arguments are basically optional arguments, that you specify based on keyname.

## Refactor magic

Ok lets take a simple example of changing a signature. For this example we will have the following simple function.

```python
def greet(name):
    print('Hello ' + name)
```

Now, lets assume we want to add the ability to change the greeting. We could refactor all the current code to pass in the string and a null value. Not only is that painful, but it just smells nasty! In the java world, the normal way to refactor this function is to create a second function, and then the original passes things to the new function. For example:

```python
def greet(name):
	return greet_custom(name, None)

def greet_custom(name, greeting):
	if greeting is None:
    	greeting = 'Hello '
    print(greeting + name)
```

This is better than changing the whole code base, but still pretty nasty; it's checking for None (null), *Yuck!* If we keep changing things, we could have lots of signatures for one real function. I have seen code bases in where this goes like 10 functions deep.
With the introduction of keyword arguments we can rewrite this to be much simpler. A keyword arg (commonly referred to as kwarg) can be written by giving the name of the variable and the default value as a key-value pair like such `argname=default`. Lets now refactor our example using kwargs.

```python
def greet(name, greeting='Hello'):
    print(greeting + ' ' + name)
```

Woa, check that out. We still have an awesome simple function and we dont even have to check for None. `greeting` is optional, so the function is completely backwards compatible.

## Format it

In out previous example, we are concatenating strings. This is not really good practice in python because the objects might not be strings. How do we make the function work on more than just strings? We can use `format`. Python strings have a method called `format` that replaces all instances of `{}` with the arguments provided.

```python
print('This {} a format {} which prints a number: {}'.format('is', 'example', 5))
```

notice we passed in multiple arguments, one for each `{}`. Now lets fix our function to use `format`.

```python
def greet(name, greeting='Hello'):
	print('{} {}'.format(greeting, name)
```

Looks pretty nice, and we got rid of the stupid `+ ' ' +` that always feels so dirty. You probably saw this coming but format can also take kwargs. You can put a identifier name in format by placing it between the brackets. Lets rewrite our example to use keyword args.

```python
def greet(name, greeting='Hello'):
	print('{hello} {world}'.format(hello=greeting, world=name)
```

Ok this is a somewhat convoluted example for showing another example, but hey, now you have learned `format` and we are ready for some more cool examples.

## Out of order

Since keyword arguments are specified by name, there is no requirement that they be called in order. If we had a function that took three keyword arguments `a`, `b`, and `c` in that order, we could call them in any order we wanted, such as `my_function(c='c', a='a', b='b')` and everything would work great.

Another nice feature is that you can use the keyword syntax even for required arguments. So we can call our function with keyword syntax. And since we can, lets do it out of order.

```python
greet(geeting='Howdy', name='Billy')
```
The main reason to do things out of order is mostly just so you dont have to worry or think about what order things go in. It can also improve readability to always use keyword syntax on functions that have multiple arguments.

## Set it free

Now we have one required argument, and one optional argument. We could also make both arguments optional. Keyword arguments have the ability to be called with either
a keyword or not, just like non-optional can be called either way. For example, you could use our greeting string with format without the key-value pair syntax as long as order is maintained.

```python
print('{hello} {world}'.format(greeting, name)
```

You probably shouldn't do this, but you can if you wanted too. What this also means is that we can turn a required argument into an optional one. So now the `name` argument can be optional.

```python
def greet(name='World', greeting='Hello'):
    print('{hello} {world}'.format(hello=greeting, world=name)
```

And now we have a beautiful refactored function that doesnt require any arguments. Its just one function, and yet, we can use it in so many ways.

```python
greet('Joe')
# Hello Joe

greet()
# Hello World

greet(greeting='Howdy')
# Howdy World

greet('Joe', 'Howdy')
# Howdy Joe

greet(greeting='Howdy', name='Joe')
# Howdy Joe
```
