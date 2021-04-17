# CS52 Frontend Starterpack

Today I set up a front-end web development starterpack! This allows us to manage libraries and start including module dependencies to make our websites more beautiful and complex. We used NPM, the dependency package manager for Node.js, and the javascript ecosystem. This is what we can use to install various packages. We then have node.js in the environment, which allows us to run javascript without a browser. We then set up everything webpack, which is a build tool that takes all dependencies and bundles them up into static assets. Since it works only with .js files, we had to install an html plug-in and loaders for the css and scss. We set up babel to output browser-friendly js and we installed a linter to parse code and check for errors and mistakes. Finally, we configured image loaders and autoprefixing, set up on netlify to deploy! 

[deployed url](http://url-if-deployed-here)

## What Worked Well
NPM worked really well! I really understood the environment we set up and can see how this starterpack will be improved and used throughout the term. The loaders worked well and I also understood what they were doing!

## What Didn't
I found it incredibly annoying to deal with some of the eslint errors. Specifically, LF vs. CRLF, which is a windows specific line break problem. I eventually found a way to turn that setting off in the eslintrc file. I also found it annoying to set up actions on save for the editor. I finally got it working after using a settimeout so there was time for the actions to happen. Not entirely sure why that was? But we good now

## Extra Credit
Okay, extra credit was kinda cool. Here we go. SO I focused on compressing and optimizing images in webpack. After having done some research, I found out that images take up more than half of the size of an average webpage, which is a fair amount of traffic. I first started with url-loader to embed small PNG, JPG, and GIF images into the bundle. It apparently conversts a file into a Base64 URL and then inserts that url into the bundle, which helps avoid extra image requests. This did well, but I was using an SVG. Next, I used svg-url-loader to embed small SVG images. And this was doing the exact same thing but it encodes files using the URL endcoding isntead of Base64 (URL smaller because svg is text). Also worked well. Finally, I optimized image size with image-webpack-laoder to make images smaller, which apparently compresses png, jpg, gif, svg, and more filetypes by passing them through optimizers. It pipes images through itself, so it needs to follow url/svg-url-loader so that it is put into the webpack bundle. Here are some screenshots illustrating the resulting decrease in image size:
![image info](./src/img/ss1.jpg)
![image info](./src/img/ss2.jpg)
![image info](./src/img/ss3.jpg)

## Screenshots
Here we have a screenshot of the website!
![image info](./src/img/ss4.jpg)

## References
For extra credit:
https://iamakulov.com/notes/optimize-images-webpack/
https://webpack.js.org/loaders/

