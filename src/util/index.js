// 验证手机号格式
export const validatePhone = phone => {
  if (typeof phone === 'number') {
    phone += '';
  }

  if (phone.length !== 11) {
    return false;
  }

  // China Mobile
  // 134,135,136,137,138,139,147(数据卡),150,151,152,157,158,159,170[5],178,182,183,184,187,188
  const CM_Reg = /^((13[4-9])|(147)|(15[0-2, 7-9])|(179)|(18[2-4,7-8]))\d{8}|(1705)\d{7}$/;

  // China Unicom
  // 130,131,132,145(数据卡),155,156,170[4,7-9],171,175,176,185,186
  const CU_Reg = /^((13[0-2])|(145)|(15[5-6])|(17[156])|(18[5-6]))\d{8}|(170[4,7-9])\d{7}$/;

  // China Telecom
  // 133,149(数据卡),153,170[0-2],173,177,180,181,189
  const CT_Reg = /^((133)|(149)|(153)|(17[3,7])|(18[0,1,9]))\d{8}|(170[0-2])\d{7}$/;

  const is_CM = CM_Reg.test(phone);
  const is_CU = CU_Reg.test(phone);
  const is_CT = CT_Reg.test(phone);

  return is_CM || is_CU || is_CT;
};

// 获取 cookie

export const getCookie = cname => {
  const name = cname + '=';
  const ca = document.cookie.split(';');
  for (let i = 0, len = ca.length; i < len; i++) {
    let c = ca[i].trim();
    if (c.indexOf(name) === 0) return c.substring(name.length, c.length);
  }
  return '';
};

// 获取查询参数
export const getParameterByName = (name, url) => {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, '\\$&');
  const regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
    results = regex.exec(url);

  if (!results) return null;
  if (!results[2]) return '';

  return decodeURIComponent(results[2].replace(/\+/g, ' '));
};

// 头部加载 JS
// export const loadJS = urls => {
//   const _ = (url) => {
//     return new Promise((resolve, reject) => {
//       const script = document.createElement('script');

//       script.onload = function () {
//         this.onload = null;
//         this.onerror = null;
//         resolve(this);
//       };
//       script.onerror = err => reject(err);
//       script.src = url;
//       document.head.appendChild(script);
//     });
//   };

//   if (Array.isArray(urls)) {
//     return Promise.all((() => {
//       return urls.map(url => _(url));
//     })());
//   } else if (typeof urls === 'string') {
//     return _(urls);
//   } else {
//     throw 'parameter error';
//   }
// };

// 时间填充，小于 10 补 0
export const paddingTime = time => {
  if (time < 10) {
    return `0${time}`;
  }
  return String(time);
};