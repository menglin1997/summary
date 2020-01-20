<script>
	export default {
		globalData:{
			a: '12'
		},
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	
	/*每个页面公共css */
/* #ifndef APP-PLUS-NVUE */
  @import "./common/css/base.css";
  @import "./common/css/icon.css";
  @import "./common/css/main.css";
  @import "./common/css/animation.css";
  @import "./common/css/font/iconfont.css";
  /* #endif */

	/*每个页面公共css */
  /*修改复选框样式*/


  /* radio::before, checkbox::before{
    top: 51%;
    right: 3px;
  } */

	/* #ifdef H5 */
	checkbox .uni-checkbox-input {
		width: 38upx;
		height: 38upx;
		border-radius: 50%;
	}
	checkbox .uni-checkbox-input.uni-checkbox-input-checked {
		border: 1px solid #477bff;
		background: #477bff;
		color: #fff !important;
	}
	checkbox .uni-checkbox-input.uni-checkbox-input-checked:before {
		font-size: 18px;
	}
	radio .uni-radio-input {
		width: 38upx;
		height: 38upx;
		border-radius: 50%;
	}
	radio .uni-radio-input.uni-radio-input-checked {
		border: 1px solid #477bff;
		background: #477bff;
		color: #fff !important;
	}
	radio .uni-radio-input.uni-radio-input-checked:before {
		font-size: 18px;
	}
	/* #endif */

	/* #ifndef APP-PLUS-NVUE */
	checkbox .wx-checkbox-input {
		width: 38upx;
		height: 38upx;
		border-radius: 50%;
	}
	checkbox .wx-checkbox-input.wx-checkbox-input-checked {
		border: 1px solid #477bff;
		background: #477bff;
		color: #fff !important;
	}
	checkbox .wx-checkbox-input.wx-checkbox-input-checked::before {
		font-size: 18px;
	}
	radio .wx-radio-input {
		width: 38upx;
		height: 38upx;
		border-radius: 50%;
	}
	radio .wx-radio-input.wx-radio-input-checked {
		border: 1px solid #477bff;
		background: #477bff;
		color: #fff !important;
	}
	radio .wx-radio-input.wx-radio-input-checked::before {
		font-size: 18px;
  }
  uni-switch .uni-switch-input.uni-switch-input-checked{
    background-color: #1649A7 !important;
  }
  /* #endif */


  /* #ifndef APP-PLUS-NVUE */
  .loading-wapper {
    text-align: center;
    padding: 30upx;
  }

  .loading-icon {
    margin: 0 10upx;
    width: 40upx;
    height: 40upx;
    display: inline-block;
    vertical-align: middle;
    -webkit-animation: a 1s steps(12) infinite;
    animation: a 1s steps(12) infinite;
    background: transparent url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjAiIGhlaWdodD0iMTIwIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCI+PHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgxMDB2MTAwSDB6Ii8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMjAiIHg9IjQ2LjUiIHk9IjQwIiBmaWxsPSIjRTlFOUU5IiByeD0iNSIgcnk9IjUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgLTMwKSIvPjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiB4PSI0Ni41IiB5PSI0MCIgZmlsbD0iIzk4OTY5NyIgcng9IjUiIHJ5PSI1IiB0cmFuc2Zvcm09InJvdGF0ZSgzMCAxMDUuOTggNjUpIi8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMjAiIHg9IjQ2LjUiIHk9IjQwIiBmaWxsPSIjOUI5OTlBIiByeD0iNSIgcnk9IjUiIHRyYW5zZm9ybT0icm90YXRlKDYwIDc1Ljk4IDY1KSIvPjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiB4PSI0Ni41IiB5PSI0MCIgZmlsbD0iI0EzQTFBMiIgcng9IjUiIHJ5PSI1IiB0cmFuc2Zvcm09InJvdGF0ZSg5MCA2NSA2NSkiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgeD0iNDYuNSIgeT0iNDAiIGZpbGw9IiNBQkE5QUEiIHJ4PSI1IiByeT0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoMTIwIDU4LjY2IDY1KSIvPjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiB4PSI0Ni41IiB5PSI0MCIgZmlsbD0iI0IyQjJCMiIgcng9IjUiIHJ5PSI1IiB0cmFuc2Zvcm09InJvdGF0ZSgxNTAgNTQuMDIgNjUpIi8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMjAiIHg9IjQ2LjUiIHk9IjQwIiBmaWxsPSIjQkFCOEI5IiByeD0iNSIgcnk9IjUiIHRyYW5zZm9ybT0icm90YXRlKDE4MCA1MCA2NSkiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgeD0iNDYuNSIgeT0iNDAiIGZpbGw9IiNDMkMwQzEiIHJ4PSI1IiByeT0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoLTE1MCA0NS45OCA2NSkiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgeD0iNDYuNSIgeT0iNDAiIGZpbGw9IiNDQkNCQ0IiIHJ4PSI1IiByeT0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoLTEyMCA0MS4zNCA2NSkiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgeD0iNDYuNSIgeT0iNDAiIGZpbGw9IiNEMkQyRDIiIHJ4PSI1IiByeT0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoLTkwIDM1IDY1KSIvPjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiB4PSI0Ni41IiB5PSI0MCIgZmlsbD0iI0RBREFEQSIgcng9IjUiIHJ5PSI1IiB0cmFuc2Zvcm09InJvdGF0ZSgtNjAgMjQuMDIgNjUpIi8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMjAiIHg9IjQ2LjUiIHk9IjQwIiBmaWxsPSIjRTJFMkUyIiByeD0iNSIgcnk9IjUiIHRyYW5zZm9ybT0icm90YXRlKC0zMCAtNS45OCA2NSkiLz48L3N2Zz4=) no-repeat;
    background-size: 100%
  }

  .loading-txt {
    font-size: 24upx;
    font-weight: normal;
    line-height: 40upx;
    color: #999999;
  }

  @-webkit-keyframes a {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg)
    }

    to {
      -webkit-transform: rotate(1turn);
      transform: rotate(1turn)
    }
  }

  @keyframes a {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg)
    }

    to {
      -webkit-transform: rotate(1turn);
      transform: rotate(1turn)
    }
  }
  /* #endif */
</style>
