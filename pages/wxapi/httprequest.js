export default function network(arg_url, arg_opts) {
  return new Promise(
    (resolve, reject) => {
      wx.request({
        url: arg_url,
        data: arg_opts.data || '',
        header: arg_opts.header || {},
        method: arg_opts.method || 'GET',
        dataType: arg_opts.dataType || 'json',
        responseType: arg_opts.responseType || 'text',

        success: function (res) { resolve(res); },
        fail: function (res) { reject(res); },
        complete: function (res) { resolve(res); },
      });
    }
  );
};