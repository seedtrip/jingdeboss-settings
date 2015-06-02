var settings = module.exports = {
  env: {
    name: 'prd',
    mode: 'production',
    host: '127.0.0.1',
    port: 3010,
    bindIp: "0.0.0.0",

    NODE_ENV: 'production',
    PORT: 3010,
    BINDIP: "0.0.0.0"
  },

  secretKey: 'quick',

  app: {
    protocol: 'http',
    host: '127.0.0.1',
    port: 3010,
    domain: 'boss.zz365.com.cn',
    domainPort: 80,
    context: '/'
  },

  api: {
    url: 'http://boss.zz365.com.cn/api'
  },

  logging: {
    reloadSecs: 0, //INFO: set 0 could let nodeunit tests which use log4js exit properly
    level: 'INFO'
  },

  redis:{
    mode:'single',
    host: '127.0.0.1',
    port: 6379,
    auth:'easyway123',
    sentinel: {
      hosts:[{host: '127.0.0.1', port: 26379}],
      masterName:'mymaster'
    }
  },

  mongo: {
    host: "127.0.0.1",
    port: 27017,
    db: "seedtrip",
    username: 'seedtrip',
    password: 'Zhongjing'
  },

  session: {
    secretKey: 'quick',
    expires: 60 // minutes
  },

  weixin: {
    appKey: 'wxa1bfbb003f402f4e',
    appSecret: '8e96e0ec8de23cda1a2e68a12720fbb7'
  },

  qiniu: {
    appKey: '',
    appSecret: ''
  },

  wechat: {
    appKey: 'wxa1bfbb003f402f4e',
    appSecret: '8e96e0ec8de23cda1a2e68a12720fbb7'
  },
  
  locationServer: {
    host: 'api.map.baidu.com',
    port: 80,
    ak: 'PwCZ3FQOyXeHDQKRQZvsrL8k'

  },

  resources: {
    app: {
      name: "快乐种子BOSS"
    }
  }
};
