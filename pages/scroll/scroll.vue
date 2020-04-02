<template>
	<!-- 新品首发 -->
	<view v-if="newGoodsList.length > 0">
		<view class="card">
			<view class="header">
				<view class="title">这个头部</view>
			</view>
			<view class="mj-nav-wapper">
				
				<view class="mj-nav-content mj-nav-content-fixed">
					<scroll-view scroll-x="true" class="bg-white nav">
					<view class="cu-item" v-for="(item, index) in newGoodsList" :key="index">
						<view class="a-swiper-dot">
							<image class="img" :src="item.picUrl" mode="scaleToFill"></image>
						</view>
					</view>
					</scroll-view>
				</view>
				</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				newGoodsList: [{
                "id":69,
                "goodsSn":"202",
                "name":"4G儿童手表专用 语音卡",
                "categoryId":53,
                "brandId":12,
                "gallery":[
                    "http://wx.szcoolfish.com/filedata/appfiles/storage/xp2dsdg82cx2xcc9wz60.jpg"
                ],
                "keywords":"",
                "brief":"4G儿童手表专用 语音卡",
                "isOnSale":true,
                "sortOrder":100,
                "picUrl":"http://wx.szcoolfish.com/filedata/appfiles/storage/78cgb43rlxa8o4zrvpqb.jpg",
                "shareUrl":"",
                "isNew":true,
                "isHot":true,
                "unit":"件",
                "counterPrice":159,
                "retailPrice":99,
                "addTime":"2020-03-24 18:05:24",
                "deleted":false,
                "version":0,
                "lang":1
            },
            {
                "id":68,
                "goodsSn":"201",
                "name":"2G儿童手表专用 语音卡",
                "categoryId":53,
                "brandId":12,
                "gallery":[
                    "http://wx.szcoolfish.com/filedata/appfiles/storage/x0qvevv1nacjka2cg1tc.jpg"
                ],
                "keywords":"",
                "brief":"2G儿童手表专用 语音卡",
                "isOnSale":true,
                "sortOrder":100,
                "picUrl":"http://wx.szcoolfish.com/filedata/appfiles/storage/ulkdmlt4zwagn9342lub.jpg",
                "shareUrl":"",
                "isNew":true,
                "isHot":true,
                "unit":"件",
                "counterPrice":99,
                "retailPrice":68,
                "addTime":"2020-03-24 18:03:30",
                "deleted":false,
                "version":0,
                "lang":1
            },
            {
                "id":67,
                "goodsSn":"254",
                "name":"酷鱼智能家庭盒KY520，电视盒+CPE",
                "categoryId":54,
                "brandId":11,
                "gallery":[
                    "http://wx.szcoolfish.com/filedata/appfiles/storage/jhmqmf8au2x50ukss7uk.png"
                ],
                "keywords":"",
                "brief":"酷鱼智能家庭盒KY520，电视盒+CPE",
                "isOnSale":true,
                "sortOrder":100,
                "picUrl":"http://wx.szcoolfish.com/filedata/appfiles/storage/sgtnxxzidjb24q10lkff.png",
                "shareUrl":"",
                "isNew":true,
                "isHot":true,
                "unit":"’件‘",
                "counterPrice":450,
                "retailPrice":299,
                "addTime":"2020-02-27 16:01:00",
                "deleted":false,
                "version":0,
                "collectNum":6,
                "lang":1
            },
            {
                "id":32,
                "goodsSn":"01111",
                "name":"电信升级卡※49块包500G",
                "categoryId":10,
                "brandId":3,
                "gallery":[
                    "http://112.74.198.2:9000/wx/storage/fetch/2mtha3sgaynysnurje4g.jpg"
                ],
                "keywords":"",
                "brief":"电信升级卡※49块包500G",
                "isOnSale":true,
                "sortOrder":100,
                "picUrl":"http://112.74.198.2:9000/wx/storage/fetch/68klybbkt4tly0u2fuv3.jpg",
                "shareUrl":"",
                "isNew":true,
                "isHot":false,
                "unit":"’件‘",
                "counterPrice":200,
                "retailPrice":88,
                "addTime":"2018-12-25 12:01:13",
                "deleted":false,
                "version":0,
                "targetUrl":"",
                "collectNum":21,
                "lang":1
            }
        ],
			}
		}
	}
</script>

<style>
/* 	.card {
		margin-top: 20rpx;
		padding-bottom: 25rpx;
	
		.header {
			justify-content: space-between;
			align-items: center;
			margin-bottom: 30rpx;
	
			.title {
				font-size: 30rpx;
				color: @black333;
				font-weight: bold;
			}
	
			.more {
				font-size: 24rpx;
				color: @black999;
	
				.img {
					width: 10rpx;
					height: 19rpx;
					margin-left: 12rpx;
				}
			}
		}
	
		.content {
			height: 348rpx;
	
			.left {
				position: relative;
				width: 276rpx;
				margin-right: 50rpx;
				background-color: white;
				box-shadow: 0 3rpx 10rpx 3rpx rgba(228, 228, 228, 1);
				border-radius: 10rpx;
				flex-shrink: 0;
				text-align: center;
				padding-top: 90rpx;
				box-sizing: border-box;
				overflow: hidden;
	
				.img {
					width: 163rpx;
					height: 163rpx;
				}
			}
	
			.right {
				flex: 1;
	
				.right-card {
					height: 165rpx;
					position: relative;
					background-color: white;
					box-shadow: 0 3rpx 10rpx 3rpx rgba(228, 228, 228, 1);
					border-radius: 10rpx;
					margin-bottom: 20rpx;
					text-align: center;
					overflow: hidden;
	
					.img {
						width: 300rpx;
						height: 85rpx;
						margin: 38rpx;
					}
				}
			}
	
			.text {
				position: absolute;
				bottom: 0;
				font-size: 26rpx;
				width: 100%;
				height: 63rpx;
				background-color: rgba(0, 0, 0, 0.5);
				text-align: center;
				line-height: 63rpx;
				color: white;
				margin-top: 30rpx;
			}
		}
	}
	
	 */
	
</style>
