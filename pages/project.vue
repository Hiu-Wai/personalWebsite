<template>
    <body class="d-flex h-100 text-center text-white custom-bg">
      <div class="cover-container d-flex vw-100 vh-90 p-3 mx-auto flex-column">
        <div class="d-flex justify-content-center">
        <div class="p-5 mb-4 rounded-3 text-center bg-2" style = "width: 75%; background-color: #00312F;">
        <div class="container-fluid py-5">
            <h1 class="display-5 fw-bold">Projects</h1>
        </div>
        </div>
        </div>

        <main class="px-3">
            <div class="album py-5">
            <div class="container">
            <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                <div class="col">
                <div class="card h-100">
                    <img class="bd-placeholder-img card-img-top img-fluid custom-size rounded mx-auto d-block" 
                        width="100%" height="300" src = "images\fashtrack_logo.png" role="img" aria-label="Placeholder: Thumbnail" 
                        preserveAspectRatio="xMidYMid slice" focusable="false" style= "background-color: #C7FFED;">
                        <title>Placeholder</title><rect width="100%" height="100%" fill="#F5F9E9"></rect>
                    </img>

                    <div class="card-body">
                    <p class="card-text">Fash track is a website that was built during Culturehack 2024. <br> It aims to simplify job applications and provide mentorship opportunities</p>
                    <div class="d-flex justify-content-between align-items-center">
                        <div class="btn-group">
                        <NuxtLink to="/projects/fashtrack">
                        <button type="button" class="btn btn-outline-secondary">Learn more</button>
                        </NuxtLink>
                        </div>
                    </div>
                    </div>
                </div>
                </div>  
                <div class="col">
                <div class="card h-100">
                    <img class="bd-placeholder-img card-img-top img-fluid custom-size rounded mx-auto d-block" 
                            width="100%" height="300" src = "images\holystick_logo.png" role="img" aria-label="Placeholder: Thumbnail" 
                            preserveAspectRatio="xMidYMid slice" focusable="false" style= "background-color: #C7FFED;">
                            <title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect>
                        </img> 

                    <div class="card-body">
                    <p class="card-text">Holystick is a website that was built during UCL AI Hackathon 2024. <br> It aims to provide different AI models to access whether a client is eligible for a loan.</p>
                    <div class="d-flex justify-content-between align-items-center">
                        <div class="btn-group">
                        <NuxtLink to="/projects/holystick">
                        <button type="button" class="btn btn-outline-secondary learn-more">Learn more</button>
                        </NuxtLink>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
        </div>
        </div>
    </div>
        </main>

      </div>    
    </body>
</template>

<style>
    .custom-size{
        max-width:75%;
        height: auto;
    }
    .card{
        background-color: #D1FFFD;
    }
    .container{
        display: flex;
        flex-wrap: wrap;
        align-items: stretch;
    }
    .btn{
        background-color: #d1ffd7;
    }
    .btn:hover, .btn:focus, .btn:active, .btn.active, .open>.dropdown-toggle.btn {
    background-color: #B2DDF7;
    }   
    .bg-2{
        background-image: url('C:\\Users\\Chloe\\Desktop\\Coding\\personalWebsite\\images\\background-image2.jpg'); /* Path to your image */
            background-size: cover; /* Make the image cover the whole page */
            background-repeat: no-repeat; /* Prevent repeating */
            background-position: center center; /* Center the image */
            margin: 0; /* Remove default margins */
    }
</style>