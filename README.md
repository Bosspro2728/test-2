# test-2

## Phase 1: Desktop page
- [X] First I wrote the Html structure(I split it into header 6 sections and footer)
- [X] I used icons from font awesome ad placeholders and downloaded the necesary images exept the ones that font awesome was replacing
- [x] Then i started to write the styles for desktop
- [X] I used grid for the images in section 5
- [X] Used flex for the row of images in section 4 as well as all the other sections,footer,header
      
## Phase 2: Glide js Carusel
- [X] I checked the glide js doocumentation and applyed it to the website (I needed the styles and the js files do I used npm to install them, since there weren't many files in the node_modules I did not use a gitignore for it)
- [X] Than I cleanded up my css and also applyed some js to make it look better(like if you click the retail on the header the css clsss will toggle to it)
- [X] I fixed a bug with glide js so it looks good on full screen
      
## Phase 3: Mobile page and responsivnes
- [X] I saw that I would have to remove and add a lot of Html elements when we change the width for mobile so I used a hidden class ad using js based on the width applyed it to the proper elements
- [X] I used media query for fixing the sizes of the text
- [X] I used a mobile and desktop class to destinguish the elements needed on mobile and on desktop(This solution is similar to conditional rendering, it is a little slow but it works, and the time it takes it is barely visible)
- [X] Than I added  eventListener listening to the screen resize and based on the widht adding and removing the hidden class but there was a problem that when the resize event happened, after one two resizes it would show both mobile elements and desktop elements so to fix that  we would have to refresh every time, so we called the function twice to not need reloding and fixes this problem.
- [X] Than I adedd some other media queries beaacuse at a certain width the desktop styles would break.
- [X] Cleand up more of my css because some styles were used in a lot of places
- [X] Removed the font-awwsome placeholders and replaced them for imges used in the figma file.(except for the social media icons:facebook,pinterst,instagram,twitter,(also added youtube) because they looked the same as the ones used on the figma file)

## Phase 4: Bugs
- [X] I started resizing the window to check for width-s where my css wouldn't work
- [X] Found many bugs on the width between desktop page and mobile that I tried fixed one by one
- [X] Bug 1: The text on top of the image in section 1 had a position absolute and was positioned using left and top. but when the width would change so would the left and top properties. To fix it I removed the left property added position:relative; to the section tag and on different width-s the size of the text would change. 
- [X] Bug 2: The grid images had the same size they had on ful screen so they overflowed. I asked for help and got shown the aspect-ratio property witch worked great
- [X] Bug 3: The row of images in section 4 was not addapting to the size of the window. The images had the same size they had on ful screen so we had a lot of overflow, I used the same solution as for the grid items
- [X] Bug 4: the search icon was not inside the input box. I fixed that by putting the nav and the icon inside of a div and making the div look like the input box
- [X] Bug 5: At a certain width beacuese of the padding of the header the nav oervflowed but it didn't look bad bnecause only the padding was overflowing. To fix that at that certain width I put a media query and removed the padding and added overflow hidden
- [X] Bug 6: The images on section 3 didn't start at the same level at a certain width beacuse the text below the image didn't allow it. To fix it I removed the align-content: center; and only let justify-content: center;
- [X] Bug 7: I had the same problem as bug 6 in the footer I fixed it the same way.
- [X] Bug 8: The last section (6) was not very responsive especaily the iframe I gave both the div and iframe width 100% and the iframe a height of 100% also gave them the proper aspect-ratio and remove the default width and height of the iframe(map)
- [X] Bug 9: The glide js carusel is not responsive. The next image on the carusel after a certain width starts getting on top of the current image. With some help and a lot tries using height:auto; and overflow-x:hidden; it worked but a new bug was introduced.
- [X] Bug 10: Even though the overflow was fixed another bug appired. This time when we decrees the width of the window the image doesn't decress and since we are using overflow hidden it hudes a part of the image.I fixed it using media queries for specific width-s of the screen and in those media queries changing the width-s of the two images.

## Phase 5: Refactoring my Html,Css,JS(makeing the code more readable)
- [X] I started with my html, I had used two of every section(including header,footer) one for mobile and one for desktop as I have explained in Phase 3, but some of the sections didn't need it because they were almost identical.
- [X] Section 1 was the only one I hadn't done two copies of.
- [X] Section 3 mobile was very similar to desktop so i deleted the mobile and only added justify-content: center; align-items: center; flex-direction: column;(in media query)
- [X] Section 4 I also removed the mobile section and only added flex-direction: column; to both section-4 class and price-div(in menida query)
- [X] Section 5 I only added the flex-direction: column; to the section-5 class.
- [x] Section 6 I also only added the flex-direction: column; to the section-6 class.
- [X] I put all my js in for the desktop-mobile logic in one file. Glide js code inside of a script in the html.

## Phase 6: Adding Extra functionality
- [X] I added a nav sideBar the styles of it are in a sepret file the js is in a script in the html
- [X] I also added a dropdown effect but it has no animation.
