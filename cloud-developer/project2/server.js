import express from 'express';
import bodyParser from 'body-parser';
import {filterImageFromURL, deleteLocalFiles} from './util/util.js';



  // Init the Express application
  const app = express();

  // Set the network port
  const port = process.env.PORT || 8082;

  //keep track of filtered images
  const filteredImages = []
  
  // Use the body parser middleware for post requests
  app.use(bodyParser.json());

  // @TODO1 IMPLEMENT A RESTFUL ENDPOINT
  // GET /filteredimage?image_url={{URL}}
  // endpoint to filter an image from a public url.
  // IT SHOULD
  //    1
  //    1. validate the image_url query
  //    2. call filterImageFromURL(image_url) to filter the image
  //    3. send the resulting file in the response
  //    4. deletes any files on the server on finish of the response
  // QUERY PARAMATERS
  //    image_url: URL of a publicly accessible image
  // RETURNS
  //   the filtered image file [!!TIP res.sendFile(filteredpath); might be useful]

    /**************************************************************************** */

  //! END @TODO1
  
  // Root Endpoint
  // Displays a simple message to the user
  app.get( "/", async (req, res) => {
    res.status(200).send("Welcome to the Cloud!")
  } );
  
  app.get("/filteredimage/", async (req, res) => {
    let { image_url } = req.query;

    try {
      new URL(image_url);
      try {
        var filteredPath = await filterImageFromURL(image_url)
        console.log(filteredPath)
        filteredImages.push(filteredPath)
        res.status(200).sendFile(filteredPath, () => deleteLocalFiles(filteredImages))
        console.log(filteredPath)
      }
      catch (err) {
        res.status(400).send(`Unable to filter image: ${err}`)
      }
    } catch (err) {
      res.status(422).send(`Invalid URL ${err}`)
    }
    
  } );

  // Start the Server
  app.listen( port, () => {
      console.log( `server running http://localhost:${ port }` );
      console.log( `press CTRL+C to stop server` );
  } );
