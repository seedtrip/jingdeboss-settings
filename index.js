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
  client_id: 'leport',
  client_secret: '2zBR8KSn',

  secretKey: 'quick',

  api: {
    url: 'http://127.0.0.1:3010/api'
  },

  logging: {
    reloadSecs: 0, //INFO: set 0 could let nodeunit tests which use log4js exit properly
    level: 'INFO'
  },

  redis:{
    mode:'single',
    host: '127.0.0.1',
    port: 6379,
    auth:'',
    sentinel: {
      hosts:[{host: '127.0.0.1', port: 26379}],
      masterName:'mymaster'
    }
  },

  mongo: {
    host: "127.0.0.1",
    port: 27017,
    db: "seedtrip"
  },

  session: {
    secretKey: 'quick',
    expires: 60 // minutes
  }
};

settings.root_url = 'http://' + settings.hostname;
if (settings.env.PORT && settings.env.PORT !== 80) {
  settings.root_url += ':' + settings.env.PORT;
}
settings.cookie_secret = settings.session_secret;
