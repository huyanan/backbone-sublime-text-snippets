\$http({
  method: 'post',
  url: '/proxy-${1:api}.ezijing.com/${2:sso/v1/tickets}',
  data: {
    '${3:foo}': ${4:bar}
  },
  headers: {
    'token': tokenService.getToken(),
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  transformRequest: function(data) {
    return \$.param(data);
  }
})
.success(function(result, status, headers, config) {
  ${5:new}Service.data = result.data;
})
.error(function(result, status, headers, config) {
  \$log.log(status);
});
