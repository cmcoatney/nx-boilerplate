# Posts

Posts is an example of a feature or routed section of app and contains everything related to itself which is not shared across features or projects. There are four folder types associated with Posts. Not all of these are used in every situation:

## Data-Access

Contains services and state/store and anything related to accessing data for this feature, in this case Posts.

## Feature

Responsible for holding the smart/routed components for this feature. Routed components are those which are activated by going to a particular route. There may be multiple smart components within a feature folder related to the feature such as detail and list. The feature component is a smart component (See Smart Components)

feature-shell for features with multiple routes, the shell feature is used to set up routing for that feature. The main app routing file points to the shell module.

## ui

Dumb components or presentation components.

## utils

Simple helper functions for the feature

https://www.youtube.com/watch?v=7SDpTOLeqHE

# Shared

A non-feature sibling of the App which contains anything which is shared between features

# Smart Components

- complex logic
- dependency injection
- setting up streams
- other controller type behavior
- "Knows" things about the apps structure
