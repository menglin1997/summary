const message = {
  success(params) {
    if(typeof params === 'string') params = { content: params }
    uni.showToast({
      title: params.content || '操作成功~',
      icon: 'success',
      duration: params.time || 1500,
      success: params.resolve
    })
    return true
  },

  error(params) {
    if(typeof params === 'string') params = { content: params }
    uni.showToast({
      title: params.content || '哪里不对了~',
      image: '../../../static/images/warning.png',
      duration: params.time || 1500,
      success: params.resolve
    })
    return true
  },

  info(params) {
    if(typeof params === 'string') params = { content: params }
    uni.showToast({
      title: params.content || '哪里不对了~',
      icon: 'none',
      position: 'bottom',
      duration: params.time || 1500,
      success: params.resolve
    })
    return true
  }
}

export {
  message
};
