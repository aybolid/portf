---
layout: ../../md-page-layout.astro
title: Wishbot

type: bot

description: >
  A wishlist bot for Telegram. Helps you keep track of your wishes and easily share them with your friends.

links:
  - label: source code
    url: https://github.com/aybolid/wishbot

tags:
  - go
  - sqlite
  - docker
---

# Wishbot: A Wishlist Bot for Telegram

A Telegram bot written in Go that helps you keep track of your wishes and easily share them with your friends.

### Why?

I wanted to create something that would simplify life for my girlfriend and me by helping us choose gifts for different occasions. So, I decided to write a bot to assist us with that.

### Technologies

As mentioned earlier, the bot is written in Go, which is a great choice for a project involving networking and communication. For example, when a user adds a wish, the bot notifies interested users, and using goroutines for this is ideal.

Storage is handled by SQLite. I chose SQLite because it's easy to use, and this type of app doesn’t require advanced database features. Since I wanted to self-host the bot, having a single-file database is incredibly convenient.

Docker is used for deployment to ensure the bot is easy to set up. With Docker, the entire environment is containerized, making it simple to run the bot on any server without worrying about dependencies or configuration issues. This allows for quick and hassle-free deployment, whether on a personal server or a cloud platform.
