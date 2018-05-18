'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _wepyNices = require('./../../npm/wepy-nices/wepy-nices.js');

var _wepyNices2 = _interopRequireDefault(_wepyNices);

var _api = require('./../../config/api.js');

var _api2 = _interopRequireDefault(_api);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ArticleDetail = function (_wepy$page) {
  _inherits(ArticleDetail, _wepy$page);

  function ArticleDetail() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, ArticleDetail);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ArticleDetail.__proto__ || Object.getPrototypeOf(ArticleDetail)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '文章内容'
    }, _this.data = {
      active: false, //必填    状态 true 已点赞 false为点赞
      params: { //选填    动画效果配置
        animate: 'bounceIn', //选填    点赞图标动画
        activeColor: '#999', //选填    已点赞图标颜色
        color: '#999', //选填    未点赞图标颜色
        enableCancel: true //选填    是否可取消点赞
      },
      starCount: 1,
      id: "",
      title: "",
      content: ""
    }, _this.$props = { "nices": { "xmlns:v-bind": "", "v-bind:active.sync": "active", "v-bind:params.sync": "params" } }, _this.$events = {}, _this.components = { nices: _wepyNices2.default }, _this.methods = {
      postLike: function postLike(e) {
        if (!this.active) {
          this.starCount++;
        } else {
          this.starCount--;
        }
      },

      onShareAppMessage: function onShareAppMessage(res) {
        return {
          title: this.title,
          path: '/pages/article/detail?id=' + this.id,
          //imageUrl:this.courseDetail&&(this.courseDetail.coverOss?this.courseDetail.coverOss:""),
          success: function success(res) {
            // 转发成功
          },
          fail: function fail(res) {
            // 转发失败
          }
        };
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(ArticleDetail, [{
    key: 'onLoad',
    value: function onLoad(option) {
      var self = this;
      this.id = option.id;
      _wepy2.default.request({
        url: _api2.default.articleById,
        method: 'get',
        data: {
          id: option.id
        },
        success: function success(res) {
          console.dir(res);
          self.title = res.data.title;
          self.content = res.data.content;
          self.$apply();
        }
      });
    }
  }]);

  return ArticleDetail;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(ArticleDetail , 'pages/article/detail'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRldGFpbC5qcyJdLCJuYW1lcyI6WyJBcnRpY2xlRGV0YWlsIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJhY3RpdmUiLCJwYXJhbXMiLCJhbmltYXRlIiwiYWN0aXZlQ29sb3IiLCJjb2xvciIsImVuYWJsZUNhbmNlbCIsInN0YXJDb3VudCIsImlkIiwidGl0bGUiLCJjb250ZW50IiwiJHByb3BzIiwiJGV2ZW50cyIsImNvbXBvbmVudHMiLCJuaWNlcyIsIm1ldGhvZHMiLCJwb3N0TGlrZSIsImUiLCJvblNoYXJlQXBwTWVzc2FnZSIsInJlcyIsInBhdGgiLCJzdWNjZXNzIiwiZmFpbCIsIm9wdGlvbiIsInNlbGYiLCJ3ZXB5IiwicmVxdWVzdCIsInVybCIsImFwaSIsImFydGljbGVCeUlkIiwibWV0aG9kIiwiY29uc29sZSIsImRpciIsIiRhcHBseSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNFOzs7O0FBRUE7Ozs7QUFFQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxhOzs7Ozs7Ozs7Ozs7OztvTUFDakJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUlUQyxJLEdBQU87QUFDTEMsY0FBTyxLQURGLEVBQ2lCO0FBQ3RCQyxjQUFPLEVBQWU7QUFDcEJDLGlCQUFRLFVBREgsRUFDZTtBQUNwQkMscUJBQVksTUFGUCxFQUVnQjtBQUNyQkMsZUFBTSxNQUhELEVBR2U7QUFDcEJDLHNCQUFhLElBSlIsQ0FJZTtBQUpmLE9BRkY7QUFRTEMsaUJBQVUsQ0FSTDtBQVNMQyxVQUFHLEVBVEU7QUFVTEMsYUFBTSxFQVZEO0FBV0xDLGVBQVE7QUFYSCxLLFFBYVJDLE0sR0FBUyxFQUFDLFNBQVEsRUFBQyxnQkFBZSxFQUFoQixFQUFtQixzQkFBcUIsUUFBeEMsRUFBaUQsc0JBQXFCLFFBQXRFLEVBQVQsRSxRQUNkQyxPLEdBQVUsRSxRQUNUQyxVLEdBQWEsRUFBQ0MsMEJBQUQsRSxRQUNSQyxPLEdBQVU7QUFDUkMsY0FEUSxvQkFDQ0MsQ0FERCxFQUNHO0FBQ1QsWUFBRyxDQUFDLEtBQUtoQixNQUFULEVBQWdCO0FBQ2QsZUFBS00sU0FBTDtBQUNELFNBRkQsTUFFSztBQUNILGVBQUtBLFNBQUw7QUFDRDtBQUNGLE9BUE87O0FBUVJXLHlCQUFtQiwyQkFBVUMsR0FBVixFQUFlO0FBQ2hDLGVBQU87QUFDTFYsaUJBQU0sS0FBS0EsS0FETjtBQUVMVyxnQkFBTSw4QkFBNEIsS0FBS1osRUFGbEM7QUFHTDtBQUNBYSxtQkFBUyxpQkFBU0YsR0FBVCxFQUFjO0FBQ3JCO0FBQ0QsV0FOSTtBQU9MRyxnQkFBTSxjQUFTSCxHQUFULEVBQWM7QUFDbEI7QUFDRDtBQVRJLFNBQVA7QUFXRDtBQXBCTyxLOzs7OzsyQkF1QkhJLE0sRUFBTztBQUNWLFVBQUlDLE9BQU8sSUFBWDtBQUNBLFdBQUtoQixFQUFMLEdBQVVlLE9BQU9mLEVBQWpCO0FBQ0FpQixxQkFBS0MsT0FBTCxDQUFhO0FBQ1RDLGFBQUlDLGNBQUlDLFdBREM7QUFFVEMsZ0JBQU8sS0FGRTtBQUdUOUIsY0FBSztBQUNGUSxjQUFHZSxPQUFPZjtBQURSLFNBSEk7QUFNVGEsaUJBQVEsaUJBQVNGLEdBQVQsRUFBYTtBQUNqQlksa0JBQVFDLEdBQVIsQ0FBWWIsR0FBWjtBQUNESyxlQUFLZixLQUFMLEdBQWFVLElBQUluQixJQUFKLENBQVNTLEtBQXRCO0FBQ0FlLGVBQUtkLE9BQUwsR0FBZVMsSUFBSW5CLElBQUosQ0FBU1UsT0FBeEI7QUFDQWMsZUFBS1MsTUFBTDtBQUNGO0FBWFEsT0FBYjtBQWFIOzs7O0VBNUR1Q1IsZUFBS1MsSTs7a0JBQTVCckMsYSIsImZpbGUiOiJkZXRhaWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSc7XG5cbiAgaW1wb3J0IG5pY2VzIGZyb20gJ3dlcHktbmljZXMnO1xuXG4gIGltcG9ydCBhcGkgZnJvbSAnLi4vLi4vY29uZmlnL2FwaSdcblxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBBcnRpY2xlRGV0YWlsIGV4dGVuZHMgIHdlcHkucGFnZXtcbiAgICAgIGNvbmZpZyA9IHtcbiAgICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+aWh+eroOWGheWuuSdcbiAgICAgIH1cblxuICAgICAgZGF0YSA9IHtcbiAgICAgICAgYWN0aXZlOmZhbHNlLCAgICAgICAgIC8v5b+F5aGrICAgIOeKtuaAgSB0cnVlIOW3sueCuei1niBmYWxzZeS4uueCuei1nlxuICAgICAgICBwYXJhbXM6eyAgICAgICAgICAgICAgLy/pgInloasgICAg5Yqo55S75pWI5p6c6YWN572uXG4gICAgICAgICAgYW5pbWF0ZTonYm91bmNlSW4nLCAvL+mAieWhqyAgICDngrnotZ7lm77moIfliqjnlLtcbiAgICAgICAgICBhY3RpdmVDb2xvcjonIzk5OScsICAvL+mAieWhqyAgICDlt7LngrnotZ7lm77moIfpopzoibJcbiAgICAgICAgICBjb2xvcjonIzk5OScsICAgICAgIC8v6YCJ5aGrICAgIOacqueCuei1nuWbvuagh+minOiJslxuICAgICAgICAgIGVuYWJsZUNhbmNlbDp0cnVlICAgLy/pgInloasgICAg5piv5ZCm5Y+v5Y+W5raI54K56LWeXG4gICAgICAgIH0sXG4gICAgICAgIHN0YXJDb3VudDoxLFxuICAgICAgICBpZDpcIlwiLFxuICAgICAgICB0aXRsZTpcIlwiLFxuICAgICAgICBjb250ZW50OlwiXCJcbiAgICAgIH1cbiAgICAgJHByb3BzID0ge1wibmljZXNcIjp7XCJ4bWxuczp2LWJpbmRcIjpcIlwiLFwidi1iaW5kOmFjdGl2ZS5zeW5jXCI6XCJhY3RpdmVcIixcInYtYmluZDpwYXJhbXMuc3luY1wiOlwicGFyYW1zXCJ9fTtcclxuJGV2ZW50cyA9IHt9O1xyXG4gY29tcG9uZW50cyA9IHtuaWNlc31cbiAgICAgIG1ldGhvZHMgPSB7XG4gICAgICAgIHBvc3RMaWtlKGUpe1xuICAgICAgICAgIGlmKCF0aGlzLmFjdGl2ZSl7XG4gICAgICAgICAgICB0aGlzLnN0YXJDb3VudCsrO1xuICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgdGhpcy5zdGFyQ291bnQtLTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIG9uU2hhcmVBcHBNZXNzYWdlOiBmdW5jdGlvbiAocmVzKSB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHRpdGxlOnRoaXMudGl0bGUsXG4gICAgICAgICAgICBwYXRoOiAnL3BhZ2VzL2FydGljbGUvZGV0YWlsP2lkPScrdGhpcy5pZCxcbiAgICAgICAgICAgIC8vaW1hZ2VVcmw6dGhpcy5jb3Vyc2VEZXRhaWwmJih0aGlzLmNvdXJzZURldGFpbC5jb3Zlck9zcz90aGlzLmNvdXJzZURldGFpbC5jb3Zlck9zczpcIlwiKSxcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xuICAgICAgICAgICAgICAvLyDovazlj5HmiJDlip9cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBmYWlsOiBmdW5jdGlvbihyZXMpIHtcbiAgICAgICAgICAgICAgLy8g6L2s5Y+R5aSx6LSlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgfVxuXG4gICAgICBvbkxvYWQob3B0aW9uKXtcbiAgICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgICAgICAgdGhpcy5pZCA9IG9wdGlvbi5pZDtcbiAgICAgICAgICB3ZXB5LnJlcXVlc3Qoe1xuICAgICAgICAgICAgICB1cmw6YXBpLmFydGljbGVCeUlkLFxuICAgICAgICAgICAgICBtZXRob2Q6J2dldCcsXG4gICAgICAgICAgICAgIGRhdGE6e1xuICAgICAgICAgICAgICAgICBpZDpvcHRpb24uaWRcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgc3VjY2VzczpmdW5jdGlvbihyZXMpe1xuICAgICAgICAgICAgICAgICAgY29uc29sZS5kaXIocmVzKTtcbiAgICAgICAgICAgICAgICAgc2VsZi50aXRsZSA9IHJlcy5kYXRhLnRpdGxlO1xuICAgICAgICAgICAgICAgICBzZWxmLmNvbnRlbnQgPSByZXMuZGF0YS5jb250ZW50O1xuICAgICAgICAgICAgICAgICBzZWxmLiRhcHBseSgpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgIH1cbiAgfVxuIl19