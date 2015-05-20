var settings = module.exports = {
  env: {
    name: 'ci',
    mode: 'development',
    host: '127.0.0.1',
    port: 3010,
    bindIp: "0.0.0.0",

    NODE_ENV: 'development',
    PORT: 3010,
    BINDIP: "0.0.0.0"
  },

  secretKey: 'quick',

  app: {
    protocol: 'http',
    host: '127.0.0.1',
    port: 3010,
    domain: 'ci.boss.zz365.com.cn',
    domainPort: 8000,
    context: '/'
  },

  api: {
    url: 'http://ci.boss.zz365.com.cn:8000/api'
  },

  logging: {
    reloadSecs: 0, //INFO: set 0 could let nodeunit tests which use log4js exit properly
    level: 'DEBUG'
  },

  redis:{
    mode:'single',
    host: '127.0.0.1',
    port: 6379,
    auth:'Zhongjing',
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
    appKey: 'wxa51b0be8694ba7b5',
    appSecret: '23c92d23482f991426894c40dcf07452'
  },

  qiniu: {
    appKey: '',
    appSecret: ''
  },

  wechat: {
    appKey: 'wxa51b0be8694ba7b5',
    appSecret: '23c92d23482f991426894c40dcf07452'
  },

  locationServer: {
    host: 'api.map.baidu.com',
    port: 80,
    ak: 'PwCZ3FQOyXeHDQKRQZvsrL8k'

  },

  resources: {
    app: {
      name: "快乐种子"
    }
  }
};
