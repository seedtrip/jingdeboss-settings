var settings = module.exports = {
  env: {
    NODE_ENV: 'development',
    PORT: 3010,
    BINDIP: "0.0.0.0"
  },
  title: '',
  hostname: 'localhost',
  auth_prefix: '/auth',
  controller_prefix: '/controller',
  session_name: 'hwEyBWJX',
  session_secret: 'QysQcRcr',
  session_store: 'connect-mongo',
  session_store_settings: {
    url: 'mongodb://localhost:27017/seedtrip-session'
  },
  client_id: 'leport',
  client_secret: '2zBR8KSn',

  logging: {
    reloadSecs: 0, //INFO: set 0 could let nodeunit tests which use log4js exit properly
    level: 'INFO'
  },

  mongo: {
    host: "localhost",
    port: 27017,
    db: "seedtrip"
  }
  
};

settings.root_url = 'http://' + settings.hostname;
if (settings.env.PORT && settings.env.PORT !== 80) {
  settings.root_url += ':' + settings.env.PORT;
}
settings.cookie_secret = settings.session_secret;
