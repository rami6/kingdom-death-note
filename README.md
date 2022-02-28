# Kingdom Death Note

This is a project to make experiences of a board game ["Kingdom Death: Monster"](https://shop.kingdomdeath.com/collections/in-stock/products/kingdom-death-monster-1-5) play better.

## Problems to be solved
The game goes with a story and requires a long play time. Record sheets are provided to keep track of a lot of information - this is the hardest part. Since the information changes as we play, we needed to write and erase with pencils and erasers repeatedly. After a while, we started to use Excel sheet while sharing it on a TV. However, this solution still had a problem:

- Each player cannot update their own information individually because there is an only device for that, which is a laptop sharing its screen on the TV.
- The way of updating information is still "write and erase". The interface is not user friendly.

This application's goal is to allow each player to update their own information via friendly UI using either a laptop or a phone.

## Tech stack
- React
- Next.js
- Sass
- Prisma
- PostgreSQL

## Features

### Resource Tracker (WIP)

- When a player gains/loses a resource, click on "+"/"-" button in the resource's row. Database is updated by clicking on "Confirm" button. Before doing that, the player can make use of "Diff" column to ensure the update to be committed is correct.  
    <img width="844" alt="image" src="https://user-images.githubusercontent.com/30137645/155921841-2510c09a-22d1-4ac8-8807-13a9fdcb6d4e.png">

- When a player gains a resource that is not on the table, click on the yellow "+" button on the top-left of the table. A dialog shows up to register a new resource. "Add Fields" button generates another set of a text field and checkboxes so multiple resources can be registered at once.  
  
    <img width="768" alt="image" src="https://user-images.githubusercontent.com/30137645/155922020-82a652ff-6a2e-45e7-9078-7535a1c82129.png">  
      
    Potential enhancement: Store all the resource information in database, then allow players to search and add to their table.

## Road map
Add features for information other than resources.  
However, unfortunately I and my friends have not played this board game for a while and I do not own it... it's my friend's. Whether this project continues to be developed is depending on whether we start playing it again or not😜 I enjoyed the development though!


## How to run
1. Install dependencies.
    ```bash
    yarn install
    ```

1. Run the development server.

    ```bash
    yarn dev
    ```

1. Open [http://localhost:3000](http://localhost:3000) with your browser.

