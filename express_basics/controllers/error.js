exports.error = (request, response) => {
    // response.status(404).send("<html><head>404 Page not found</head></html>");
    // response.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
    response.render(
        '404', // Name of the View. 
        {title: "Oops! Page not found"} // Data to be passed on.
    );
}