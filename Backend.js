const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(`<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Chef Manoj's Meals</title>
      <link rel="stylesheet" href="style.css" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Reggae+One&display=swap"
        rel="stylesheet"
      />
      <script>
        let name = prompt("Enter Your Name ", "Guest");
  
        //The window.onload is used to make the Java Script run on loading the DOM
  //       window.onload=function(){
          
       
  
  //         let button = document.getElementById('btn1');
  //         para.addEventListener('mousedown', function run(){
  //            window.location.href="order.html";
  //         });
  // }
  
  
        setTimeout(() =>{ 
          alert("Hello! We hope you enjoy the experience here "+name  );
        }, 5000);
     
      </script>
      
    </head>
    <body>
      <div id="navbar">
        <ul class="Main">
          <img src="logo.gif" alt="Logo Goes Here " />
  
          <li><a href="index.html">HOME</a></li>
          <li><a href="about.html">ABOUT</a></li>
          <li><a href="order.html">ORDER NOW </a></li>
          <li><a href="contact.html">CONTACT</a></li>
          <li><a href="#sec2  ">REVIEWS</a></li>
          <li class="right1"><a href="">LOGIN</a></li>
          <li class="right2"><a href="">SIGN UP</a></li>
        </ul>
      </div>
  
      <section id="sec1">
        <h1>Welcome to Chef Manoj's Meals</h1>
        <br />
        <p id="para"> 
          With years of experience as a chef and a nutritionist Manoj offers a
          wide variety of food spread across multiple cuisines !
        </p>
        <p>
          This website is one stop solution for all the nutritional food that you
          require. So, what are you waiting for !!?
        </p>
        <p>Hit the Button Below and order now !</p>
        <button id="btn1">ORDER NOW!</button>
      </section>
  
      <section id="sec2">
        <h2>Customer Reviews!</h2>
  
        <h4>
          Here is what our customer feels about the lip-smacking delicacies that
          we offer
        </h4>
  
        <p>
          <strong>KUMAR SAI :</strong> My Daughter loves the protein dessert to
          the core. My family emptied five tubs of it in one sitting. Will totally
          recommend this place to all my friends.
        </p>
        <p>
          <strong>ABHIJEET :</strong> The best tasting healthy food that I have
          ever eaten in my life. Absolutely loved the Rajma - Egg curry and Gluten
          Free Roti
        </p>
        <p>
          <strong>BHARATH :</strong> One of the tastiest and most nutritional
          dishes I have ever eaten. Can't believe that healthy food can be this
          tasty.
        </p>
  
        <button>Give Us A Review By Clicking Here! !</button>
      </section>
  
  
  
     
    </body>
  </html>
  `);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});