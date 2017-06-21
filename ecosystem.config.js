module.exports = {
  deploy: {
    imweb: {
      user: "root",
      host: "imweb.io",
      ref: "origin/master",
      repo: "git@git.coding.net:jaychen88/imwebconf_2017.git",
      path: "/data/www/2017.imweb.io",
      //   "post-deploy": "npm install --registry=https://registry.npm.taobao.org && bower install --allow-root && gulp",
      "post-deploy": 'cd ..',
      env: {
        NODE_ENV: "production"
      }
    }
  }
}
