window.onload = function() {
  //<editor-fold desc="Changeable Configuration Block">

  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  var yaml = urlParams.get('yaml')
  if (!yaml) { yaml = queryString.substring(1) }
  if (!yaml) { yaml = 'https://raw.githubusercontent.com/eliona-smart-building-assistant/eliona-api/master/openapi.yaml' }
  
  // the following lines will be replaced by docker/configurator, when it runs in a docker-container  
  window.ui = SwaggerUIBundle({
    url: yaml,
    dom_id: '#swagger-ui',
    deepLinking: true,
    presets: [
      SwaggerUIBundle.presets.apis,
      SwaggerUIStandalonePreset.slice(1)
    ],
    plugins: [
      SwaggerUIBundle.plugins.DownloadUrl
    ],
    layout: "StandaloneLayout"
  });

  //</editor-fold>
};
