const http = require('http')    //Pull in a useful node package
                                
const hostname = process.env.hostname || '127.0.0.1'    //get our ip address from the environment
const port = process.env.port || 3001               //and the port

const server =
  http.createServer(            //Creates the response loop
    (req,res)=> {               //Anonymous function to handle the request
      res.statusCode = 200      //code for OK
      res.setHeader('Content-Type', 'text/html') //Set the mime type HTML

      res.write('<html> <head> <title> Served </title> </head>')
      res.write('<body>')
      res.write('<table border=1>')
      res.write('<tr><th>Location</th><th>Number of hours</th><th>Estimated cost</th></tr>')
      res.write('<tr><td>Mahabalipuram</td><td>3 hours</td><td>$200/day</td></tr>')  
      res.write('<tr><td>Marina Beach</td><td>5 hours</td><td>$100/day</td></tr>')  
      res.write('<tr><td>Pondicherry</td><td>6 hours</td><td>$100/day</td></tr>')
      res.write('<tr><td>Pichavram</td><td>4 hours</td><td>$300/day</td></tr>')
      res.write('<tr><td>Yelagiri</td><td>9 hours</td><td>$250/day</td></tr>')
      res.end('</table></body></html>')
      //Close the response
    }                           
)

server.listen(port, hostname, () => {   //Start the server
  console.log(`Server running at http://${hostname}:${port}/`)  //Log the request
})