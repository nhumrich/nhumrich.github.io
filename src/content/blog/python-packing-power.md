---
title: "Python Packing Power"
description: "Tuples can be so much fun"
date: 2016-03-19
tags:
  - python
draft: false
---

Not unique to python but still cool is the concept of a tuple. A tuple is basically a list that cant be modified. Tuples are also a tad bit easier to use ah hoc. Lets say I wanted some type of list of objects usually because I want a pair of things. For example, I want to store an item price, and a name together.
Your first option is you could create an object, set the properties on the object, then store the object. But often objects are just too heavy for simple things.
The next option is use a list. Typically with lists, you have to create a list first, then add the objects to it.

```python
item = list()
item.append(50)
item.append('sunglasses')

print(item)  # [50, 'sunglasses']
print(item[0])  # 50
```

Thats a lot of work for what supposed to be an easy solution. Python also has a tuple type. A tuple is also an iterable, so it can be looped over like a list.
Tuples can be specified in line.

```python
item = (50, 'sunglasses')

print(item)  # (50, 'sunglasses')
print(item[0])  # 50
```

Really the only difference between a tuple and a list is the `()` instead of the `[]`, well, and the fact that tuples cant be modified once created. The power of tuples is that you can do them in one line, with any object.
Where tuples get really cool is with automatic packing and unpacking.

## Pack your bags!

Python has this cool little thing called "packing". This is where python automatically packs multiple objects into a Tuple.
Python can pack, but it can also unpack, and it does this all automatically. Packing is usually used when you want to return multiple things.
Since its not really possible for languages to return multiple things (due to how low level programming and call stacks work), python achieves this by "packing" the objects into a tuple.

```python
def get_sunglasses():
  return 50, 'sunglasses'
```

Using this syntax, we are essentually returning multiple things. What python is actually doing is packing these two things into a single tuple.
Now the caller of the function can either use a single variable for the return value, in which case they will get a tuple, or they can
use two variables, in which case python will automatically unpack them and assign the tuple values to the variables.

```python
# Using a single variable
item = get_sunglasses()
print(item)  # (50, 'sunglasses')

# Using multiple variables, thus causing python to unpack
value, item_name = get_sunglasses()
print(value)  # 50
print(item_name)  # 'sunglasses'
```

Unpacking also works on any type of list/iterable. The only rule is that your number of variables has to either be 1, or match the number of items in the list exactly or you will get a "too many values to unpack" error message.


## Signatures

Another spot where packing/unpacking can be useful is for function signatures. For example, imagine that an add function takes two arguments, and you happen to have a tuple of arguments. Instead of unpacking the tuples yourself for the function, you can use the unpacking operator `*`.

```python
my_tuple = (1, 4)
def add(x, y):
    return x + y

# Without unpacking
add(mytuple[0], mytuple[1])

# With unpacking operator
add(*mytuple)
```

You can also do things the other way around. Lets say you want to change add so that it adds up all the arguments, and takes an infinite amount of arguments. When the `*` is used in a function definition, it means to take in a number of arguments, and convert it to a list. For example, our add function would work like this:

```python
def add(*args):
    total = 0
    for i in args:
        total += i

# calling function normally
add(1, 3, 5, 6, 7, 8, 14, 16, 20, 25)

# Calling it by unpacking
numbers = (1, 3, 5, 6, 7, 8, 14, 16, 20, 25)
add(*numbers)
```

This is how the print statement works in python3. You can pass in any number of arguments and it will space seperate all arguments for you.


## Dont leave out the dictionaries

You can also pack and unpack dictionaries by using two stars `**`. This can be useful when you want to programatically set the keyword args in a function call. For example:

```python
# The bad way
if color:
    paint('hello', color=color)
else:
    paint('hello')

# The better way
kwargs = {}
if color:
    kwargs['color'] = color
paint('hello', **kwargs)
```

Another great usecase for this is the `format` function for strings. There is a method in python called `locals()` that gives you a dictionary of all local variables. When using the `format` function on strings, you can just pass in this dictionary for the keyword arguments.

```python
name = 'bob'
greeting = 'hello'
print('{greeting} {name}'.format(**locals()))
```

And just as you can with lists, you can use packing for function definitions as well. For example, if we were going to write our own version of `format`, the keyword arguments would need to be dynamic, that is, we dont know what keys are needed, because they can be anything.

```python
def format(string,**kwargs):
    for key, value in kwargs.items():
        string.replace('{' + key + '}', value)

format('hello {name} have a good {day}', name='bob', day='tuesday')
```
