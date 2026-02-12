---
title: "Moving to Python"
description: "A Journey to the Scripting Side"
date: 2015-05-23
tags: []
draft: false
---

Currently I have been doing most of my development work in python.
Prior to Python, my main language was Java.
This post is mostly notes of what I learned (not) to do in Python while switching from Java.
This is a list of things I would like my Java minded co-workers to know if they ever worked on the same python packages as myself.
This is in no way a comprehensive guide as I will mostly focus on styling.
I will be making comparisons to Java, yet knowledge of it is not required.

## Styling matters

Anyone who writes collaborative code in Java knows to never to mention where the curly braces go.
Doing so will only aggravate everyone else; No one can decide where things really should go or how things
should be formatted. Most companies have actually made their own style requirements in order to prevent
any arguments from breaking out in the work place.

Python however, does have a strict style guide. There is a common styling that every seasoned python developer follows.
There is even official documentation on python styling: [PEP8](https://www.python.org/dev/peps/pep-0008/).
This post will contain some things which are covered in PEP8. For a further understanding, you could always [go read it](https://www.python.org/dev/peps/pep-0008/).

## Ditch the Camel; Embrace the Snake

The most drastic change from Java for me was the lack of semi-colons and curly braces everywhere.
The next was the naming style. Now, I cringe when names in python code are *java-ish*.
Here is a list of python naming conventions:

| Type | Style |
|------|-------|
| Classes | UpperCamelCase |
| File Names/modules | lowercase |
| functions | snake_case |
| variables | snake_case |
| Constants | ALL_CAPITALS |

**Java Example**

```java
public class HelloWorld {
    public static final String HELLO_GREETING = "Hello";
    public void sayHello(String userName) {
        System.out.println(HELLO_GREETING + " " + userName);
```

**Python Example**

```python
class HelloWorld():
    HELLO_GREETING = 'Hello'
    def say_hello(user_name):
        print(HELLO_GREETING, user_name)
```

## File Structure

In python you can practically use any file structure you want, but here is the most common file structure.

**Java Example**

```
project/
  src/
    main/
      java/
        com/
          mycompany/
            package/
              helloworld
      test/
        com/
          ..
    resources/
      static/
build.script
```

**Python Example**

```
project/
  bin/
  static/
  projectname/
    package/
      helloworld/
  test/
setup.py
```

## Can I Get That?

If you are familiar with Java at all, you are well aware of using getters and setters.
Using getters and setters is a very good practice for Java and most OOP languages.
The reason why getters and setters are important in Java is so you can add/change behaviour without breaking your API.
For this reason, in Java you are told to keep your properties private;
if others access your properties directly, you are not able to change how the property is used or set.
A common example is adding validation.

For example, imagine I had the the following class in Java:

```java
class Person {
    private String id;

    public String getId() { return this.id; }
    public void setId(String id) { this.id = id; }
}

// Calling the setter from some other section of code
Person p = new Person();
p.setId("1234");
```

Now, if we wanted to add validation, we just add it to the setter and everything is good.

```java
class Person {
    private String id;

    public String getId() { return this.id; }
    public void setId(String id) {
        if (!id.matches(SOME_REGEX)) {
            throw new InvalidIDException();
        }
        this.id = id;
    }
}

// Calling the setter from some other section of code
Person p = new Person();
p.setId("1234");
```

If python however you do not need `getId` and `setId` methods. In fact, please dont ever use them.
You can make all of your attributes public, because you to change how those attributes are set latter if you decide to do so.

The same person class in Python:

```python
class Person():
    def __init__():
        self.id = None

# Calling the setter from some other section of code
p = Person()
p.id = '1234'
```

If you want to add validation like in the previous example you can add a setter and getter method.

```python
class Person():
    def __init__(self):
        self.id = None

    @property
    def id(self):  # This is the getter
        return self.__id

    @id.setter
    def id(self, id):  # This is the setter
        if not re.match(SOME_REGEX, id):
            raise InvalidIDException()
        self.__id = id

# Calling the setter from some other section of code
p = Person()
p.id = '1234'
```

Since we can add getters and setters after the fact, there is really no reason to do so initially.
Also, by using python's `@property` decorator, we can still have a clean API without needing to call `p.set_id`.

## Hey, don't touch that, it's private!

You might be wondering what is up with the `__id` that we used in the previous section.
Using two underscores is how to make a method/property private in python.
That being said, Python's public/protected/private is more of a guideline.
Even if a method is marked protected or private, anyone can still access it (This is actually possible in Java as well).
Python drops all false security pretences and just says, "Don't touch".

| Access level | Name |
|:------------:|:----:|
| Public | `name` |
| Protected | `_name` |
| Private | `__name` |
| Python Internal | `__name__` |

Private methods are actually slightly more complicated to access outside the class then protected ones are.
I wont touch on why for now, but because of this, it is typical to use private sparingly.
Typically, most of your class specific methods should just be marked as protected.
