Package.describe({
  summary: "Bullets Guide"
});

Package.on_use(function (api, where) {
  api.add_files('server/watch.js', 'server');
});
