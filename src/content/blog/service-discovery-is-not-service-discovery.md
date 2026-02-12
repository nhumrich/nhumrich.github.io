---
title: "Your 'Service Discovery' is Not Service Discovery"
date: 2019-04-23
tags: [microservices, architecture, dns]
heroImage: /media/medium/1_DxXUeHQEhH7UJzYJmBzCgA.jpg
draft: false
---

The term *service discovery* is likely not new to you. The term is at least as old as google search trends data. Service discovery can mean a lot of things, and if you look it up on wikipedia, you get a list of many different protocols and technologies for service discovery. A lot of the things listed, are in fact, service discovery, but I want to focus on the most recent trend of the term: service discovery in regards to microservices.

If you use or have heard about microservices and their cluster tools, there are many service discovery tools out there. To name a few: kubernetes services, consul, and Netflix's eureka. All of these tools promise one thing: to find the final location of an actual service listener. They argue that because of containers, and the dynamic nature of microservice infrastructure, you can't use basic routing, and need something more powerful. This is all true. All these services are great, and do what they claim to do. I am not trying to bash on any of these tools. The problem, however, is that they simply aren't solving service discovery, they are solving routing.

How these services work is, you have a name, say *foobar-service*, which represents the service you want to call and you use the service discovery mechanism to find a final IP address of where you should send your request. Then you send it to that IP address. So, in quick terms, these *service discovery* tools take a name, and return an IP address. Does this sound familiar? It's DNS. Most of these tools even expose a DNS interface for finding the services. Some may say that it isn't DNS because DNS is cached and not as dynamic. DNS can be dynamic, DNS can round robin, and DNS can have multiple entries for a single name. Microservice service discovery is not service discovery, it is just a new implementation on DNS.

![What is service discovery?](/media/medium/1_JrohRIOJiwPd2Wbgqd0KzA.jpg)

## So what, pray tell, is service discovery then?

The definition at the top of Wikipedia is:

> **Service discovery** is the automatic detection of devices and services offered by devices on a computer network

You should note that this definition does not say "address lookup". The important part of this definition is "…and services offered by devices". Service discovery is not about finding a location, it's about finding out what is even available. For a deeper dive, let's take a look at some other forms of service discovery outside of microservices.

**Bluetooth SDP (service discovery protocol):** In this protocol, a bluetooth device discovers what other devices exist, and what functionality they support. For example, a phone would connect to headphones and discover what profiles exist (headset profile, advanced audio, etc.). You do not need to already know the name of the intended destination in order to connect to it. You can discover what devices and names exist.

**DHCP:** DHCP might feel like simple addressing, but multiple servers can broadcast, and the client can accept any offer from any DHCP server. The client only needs to know the gateway IP address, it doesn't need to know the name or IP of the DHCP server.

In other words, service discovery is not about discovering **where** a specific service exists, it's about discovering **what** services exist.

Bringing this back to microservices, a true service-registry would not contain a list of service names to IP addresses, it would contain a list of routes/APIs to service names. The goal would be to discover which endpoints exist, and which service currently handles that endpoint.

## Why does any of this matter?

I am not just trying to be pedantic here, using actual service discovery is actually a really great idea for microservices. The reason why is mainly because we never design a distributed architecture correctly the first time. Let's take our standard DNS example. I have a service which wants to call another service *foobar-service.* This means that in my code, I have the service name hard-coded. This could be part of the URL, as in */api/foobar/baz/2,* or you could even connect to *foobar* directly as if it's the hostname. It doesn't really matter how you specify the service, the point is that its name is hardcoded in your service, or client.

On the flip side, you could instead have a URL such as */api/baz/2.* As a consumer of this API, you don't know (nor do you really care) which service handles it. Instead of hardcoding the service name in your code, you just hardcode the URL itself. When you go to make the call, your service looks up the service-registry and figures out which service should handle it.

The reason why this distinction matters is mainly because we never get our system boundaries correct the first time. As a system grows, we merge services and we split services apart. We also introduce new services. By having a single service hardcoded, we prevent merging or splitting out services. In order to move an endpoint from one service to another, it requires changing every client, which is often not feasible, especially if you have 3rd party clients.

An added benefit to this service discovery is you also have an easy way to see all endpoints that exist, so that you can discover new endpoints you might find interesting.

Anyways, the point of this article is this: please stop using the term "service discovery" when what you really mean is DNS. I realize this one blog post probably wont change anything, but here is wishing.

---

*Originally published on [Medium](https://medium.com/@nhumrich/your-service-discovery-is-not-service-discovery-f5a2c04bc986)*
