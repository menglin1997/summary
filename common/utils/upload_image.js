/**
 * 图片上传类
 */
import { UPLOAD_IMAGE_URL } from '../config.js'
import { message } from './message.js'

export default class UploadImg {
  /**
   * [constructor description]
   * @param  {[Array]} files [chooseImg选中的tempFilePaths]
   * @param  {[Object]} json  [success每上传成功一张调用 complete全部上传完成调用]
   * @return {[void]}       [description]
   */
  constructor(files, json) {
    if (!Array.isArray(files)) {
      throw new Error('Class UploadImg parameter must be an array');
    }
    this.data = [];
    this.fn = json.success;
    this.complete = json.complete;
    this.files = files;
    this.fileLen = this.files.length;
    this.curIndex = 0;
    uni.showLoading({
      title: '上传中'
    });
    this.upload();
  }

  upload() {
    uni.uploadFile({
      url: UPLOAD_IMAGE_URL, //仅为示例，非真实的接口地址
      filePath: this.files[this.curIndex],
      name: 'file[]',
      // header: {
      //   'X-Access-Token': global.token
      // },
      // formData: {
      //   'file[]': this.files[this.curIndex]
      // },
      success: res => {
        let data = JSON.parse(res.data);
        if (data.code == 1) {
          this.data.push(data.data[0]);
          if(this.fn) this.fn(this.data);
        } else {
          message.info('图片上传失败，请重试')
        }
      },
      complete: () => {
        this.curIndex++; //这个图片执行完上传后，开始上传下一张
        if (this.curIndex == this.fileLen) { //当图片传完时，停止调用
          this.complete(this.data);
          uni.hideLoading()
        } else { //若图片还没有传完，则继续调用函数
          this.upload();
        }
      }
    });
  }
}



// //单图上传图片
// const chooseImage = (tps) => {
//   console.log(this.Litestore.card_image)
//   let _this = this;
//   uni.chooseImage({
//     count: 6, //默认9
//     sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
//     sourceType: ['album'], //从相册选择
//     success: function(res) {
//       const tempFilePaths = res.tempFilePaths;

//     }
//   });
// }
