# Self-Checkout 🍓🥝🍍

## Introduction

This repo is a Test-Driven Development (TDD) exercise.

The aim was to fulfil the following user story using TDD:

>1. As a user, I would like to be able to scan an item using barcode so its details can be found from products list (test data).
>2. As a user, I would like to be able to add an item to basket.
>3. As a user, I would like to be able to see the total price of all items in my basket.
>4. As a user, I would like to be able to remove an item from my basket.

---

## Tools
- Written in JavaScript
- Tested using the Jest testing library.

---

## Approach

- An object was used to encapsulate the functionality required by the user story. This object was asigned to the variable `selfCheckout`.
- A <span style="color:red">Red</span>, <span style="color:green">Green</span>, <span style="color:yellow">Refactor</span> development cycle was employed. For each part of the user story...
    1. A test was written for that requirement
    2. The `selfCheckout` object was modified to pass that test
    3. The solution was refactored

- The result is a `selfCheckout` object that meets the requirements of the user story.

---
## Installation

This repo can be installed locally.

1. Clone [this repo](https://github.com/DevArrowsmith/self-checkout) (Here's [a guide on cloning repos](https://docs.github.com/en/enterprise/2.13/user/articles/cloning-a-repository)).
2. In the terminal navigate to the root directory of the cloned repo.
3. Run `npm i` to install node packages including Jest.

---
## Use

Run `npm t` from root to run the test suite.

The [official Jest docs](https://jestjs.io/) explain how to write your own tests should you want to expand this project.

---

## Acknowledgements

- Project: [Jest](https://github.com/facebook/jest)  
  Copyright (c) Facebook, Inc. and its affiliates.  
  License: [MIT](https://github.com/facebook/jest/blob/master/LICENSE)