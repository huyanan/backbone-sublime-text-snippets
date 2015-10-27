\$http({
  method: 'get',
  url: '/proxy-${1:api}.ezijing.com/${2:user/info}',
  params: {
    '${3:foo}': ${4:bar}
  },
  headers: {
    'token': tokenService.getToken()
  }
})
.success(function(result, status, headers, config) {
  ${5:new}Service.data = result.data;
})
.error(function(result, status, headers, config) {
  \$log.log(status);
});
