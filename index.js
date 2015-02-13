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

  app: {
    host: '192.168.1.50',
    port: 3010,
    domain: 'boss.zzlx.me',
    context: '/'
  },

  api: {
    url: 'http://192.168.1.50:3010/api'
  },

  logging: {
    reloadSecs: 0, //INFO: set 0 could let nodeunit tests which use log4js exit properly
    level: 'INFO'
  },

  redis:{
    mode:'single',
    host: '192.168.1.50',
    port: 6379,
    auth:'',
    sentinel: {
      hosts:[{host: '192.168.1.50', port: 26379}],
      masterName:'mymaster'
    }
  },

  mongo: {
    host: "192.168.1.50",
    port: 27017,
    db: "seedtrip"
  },

  session: {
    secretKey: 'quick',
    expires: 60 // minutes
  },

  qiniu: {
    appKey: '',
    appSecret: ''
  },

  weixin: {
    appKey: 'wxa1bfbb003f402f4e',
    appSecret: '8e96e0ec8de23cda1a2e68a12720fbb7'
  },
  
  resources: {
    app: {
      name: "种子旅行"
    }
  }

};

settings.root_url = 'http://' + settings.hostname;
if (settings.env.PORT && settings.env.PORT !== 80) {
  settings.root_url += ':' + settings.env.PORT;
}
settings.cookie_secret = settings.session_secret;
