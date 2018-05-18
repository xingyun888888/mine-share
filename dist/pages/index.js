"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _api = require('./../config/api.js');

var _api2 = _interopRequireDefault(_api);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var wxDraw = require('./../utils/wxdraw.min.js').wxDraw;
var Shape = require('./../utils/wxdraw.min.js').Shape;

var Index = function (_wepy$page) {
  _inherits(Index, _wepy$page);

  function Index() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Index);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: 'mine分享'
    }, _this.components = {}, _this.data = {
      wxCanvas: null, //    需要创建一个对象来接受wxDraw对象
      nodes: "",
      userInfo: {
        nickName: '加载中...'
      },
      networkType: ""
    }, _this.computed = {}, _this.methods = {
      makePhone: function makePhone(e) {
        wx.makePhoneCall({
          phoneNumber: "33333333"
        });
      }
    }, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: "onShow",
    value: function onShow() {}
  }, {
    key: "onLoad",
    value: function onLoad() {
      var self = this;
      // 打开调试
      wx.setEnableDebug({
        enableDebug: true
      });
      this.$parent.getUserInfo(function (userInfo) {
        if (userInfo) {
          self.userInfo = userInfo;
        }

        self.$apply();
      });

      _wepy2.default.request({
        url: _api2.default.articleList,
        success: function success(res) {
          console.log(res);
          console.log(res.data.data[0].content);
          self.notes = res.data.data[0].content;
          self.$apply();
        }
      });

      wx.getNetworkType({
        success: function success(res) {
          // 返回网络类型, 有效值：
          // wifi/2g/3g/4g/unknown(Android下不常见的网络类型)/none(无网络)
          var networkType = res.networkType;
          switch (networkType) {
            case "wifi":
              self.networkType = "wifi网络";
              break;
            case "4g":
              self.networkType = "4g网络";
              break;
            default:
              self.networkType = "无网络";
          }
        }
      });
    }
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbInd4RHJhdyIsInJlcXVpcmUiLCJTaGFwZSIsIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImNvbXBvbmVudHMiLCJkYXRhIiwid3hDYW52YXMiLCJub2RlcyIsInVzZXJJbmZvIiwibmlja05hbWUiLCJuZXR3b3JrVHlwZSIsImNvbXB1dGVkIiwibWV0aG9kcyIsIm1ha2VQaG9uZSIsImUiLCJ3eCIsIm1ha2VQaG9uZUNhbGwiLCJwaG9uZU51bWJlciIsImV2ZW50cyIsInNlbGYiLCJzZXRFbmFibGVEZWJ1ZyIsImVuYWJsZURlYnVnIiwiJHBhcmVudCIsImdldFVzZXJJbmZvIiwiJGFwcGx5Iiwid2VweSIsInJlcXVlc3QiLCJ1cmwiLCJhcGkiLCJhcnRpY2xlTGlzdCIsInN1Y2Nlc3MiLCJyZXMiLCJjb25zb2xlIiwibG9nIiwiY29udGVudCIsIm5vdGVzIiwiZ2V0TmV0d29ya1R5cGUiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFFRTs7OztBQUNBOzs7Ozs7Ozs7Ozs7QUFDQSxJQUFJQSxTQUFTQyxRQUFRLDBCQUFSLEVBQW9DRCxNQUFqRDtBQUNBLElBQUlFLFFBQVFELFFBQVEsMEJBQVIsRUFBb0NDLEtBQWhEOztJQUVxQkMsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFHVEMsVSxHQUFhLEUsUUFFYkMsSSxHQUFPO0FBQ0xDLGdCQUFTLElBREosRUFDVTtBQUNmQyxhQUFNLEVBRkQ7QUFHTEMsZ0JBQVU7QUFDUkMsa0JBQVU7QUFERixPQUhMO0FBTUxDLG1CQUFZO0FBTlAsSyxRQVNQQyxRLEdBQVcsRSxRQUdYQyxPLEdBQVU7QUFDUkMsZUFEUSxxQkFDRUMsQ0FERixFQUNJO0FBQ1ZDLFdBQUdDLGFBQUgsQ0FBaUI7QUFDZkMsdUJBQVk7QUFERyxTQUFqQjtBQUdEO0FBTE8sSyxRQVFWQyxNLEdBQVMsRTs7Ozs7NkJBR0QsQ0FFUDs7OzZCQUVRO0FBQ1AsVUFBSUMsT0FBTyxJQUFYO0FBQ0E7QUFDQUosU0FBR0ssY0FBSCxDQUFrQjtBQUNoQkMscUJBQWE7QUFERyxPQUFsQjtBQUdBLFdBQUtDLE9BQUwsQ0FBYUMsV0FBYixDQUF5QixVQUFTZixRQUFULEVBQW1CO0FBQzFDLFlBQUlBLFFBQUosRUFBYztBQUNaVyxlQUFLWCxRQUFMLEdBQWdCQSxRQUFoQjtBQUNEOztBQUVEVyxhQUFLSyxNQUFMO0FBQ0QsT0FORDs7QUFRQUMscUJBQUtDLE9BQUwsQ0FBYTtBQUNUQyxhQUFJQyxjQUFJQyxXQURDO0FBRVRDLGlCQUFRLGlCQUFTQyxHQUFULEVBQWE7QUFDbkJDLGtCQUFRQyxHQUFSLENBQVlGLEdBQVo7QUFDQUMsa0JBQVFDLEdBQVIsQ0FBWUYsSUFBSTFCLElBQUosQ0FBU0EsSUFBVCxDQUFjLENBQWQsRUFBaUI2QixPQUE3QjtBQUNBZixlQUFLZ0IsS0FBTCxHQUFhSixJQUFJMUIsSUFBSixDQUFTQSxJQUFULENBQWMsQ0FBZCxFQUFpQjZCLE9BQTlCO0FBQ0FmLGVBQUtLLE1BQUw7QUFDRDtBQVBRLE9BQWI7O0FBV0FULFNBQUdxQixjQUFILENBQWtCO0FBQ2hCTixpQkFBUyxpQkFBU0MsR0FBVCxFQUFjO0FBQ3JCO0FBQ0E7QUFDQSxjQUFJckIsY0FBY3FCLElBQUlyQixXQUF0QjtBQUNBLGtCQUFPQSxXQUFQO0FBQ0UsaUJBQUssTUFBTDtBQUNLUyxtQkFBS1QsV0FBTCxHQUFtQixRQUFuQjtBQUNBO0FBQ0wsaUJBQUssSUFBTDtBQUNLUyxtQkFBS1QsV0FBTCxHQUFtQixNQUFuQjtBQUNBO0FBQ0w7QUFBU1MsbUJBQUtULFdBQUwsR0FBbUIsS0FBbkI7QUFQWDtBQVVEO0FBZmUsT0FBbEI7QUFpQkQ7Ozs7RUEzRWdDZSxlQUFLWSxJOztrQkFBbkJwQyxLIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5cbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbiAgaW1wb3J0IGFwaSBmcm9tIFwiLi4vY29uZmlnL2FwaVwiXG4gIHZhciB3eERyYXcgPSByZXF1aXJlKFwiLi8uLi91dGlscy93eGRyYXcubWluLmpzXCIpLnd4RHJhdztcbiAgdmFyIFNoYXBlID0gcmVxdWlyZShcIi4vLi4vdXRpbHMvd3hkcmF3Lm1pbi5qc1wiKS5TaGFwZTtcblxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgY29uZmlnID0ge1xuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ21pbmXliIbkuqsnXG4gICAgfVxuICAgIGNvbXBvbmVudHMgPSB7XG4gICAgfVxuICAgIGRhdGEgPSB7XG4gICAgICB3eENhbnZhczpudWxsLCAvLyAgICDpnIDopoHliJvlu7rkuIDkuKrlr7nosaHmnaXmjqXlj5d3eERyYXflr7nosaFcbiAgICAgIG5vZGVzOlwiXCIsXG4gICAgICB1c2VySW5mbzoge1xuICAgICAgICBuaWNrTmFtZTogJ+WKoOi9veS4rS4uLidcbiAgICAgIH0sXG4gICAgICBuZXR3b3JrVHlwZTpcIlwiXG4gICAgfVxuXG4gICAgY29tcHV0ZWQgPSB7XG4gICAgfVxuXG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIG1ha2VQaG9uZShlKXtcbiAgICAgICAgd3gubWFrZVBob25lQ2FsbCh7XG4gICAgICAgICAgcGhvbmVOdW1iZXI6XCIzMzMzMzMzM1wiXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgZXZlbnRzID0ge1xuICAgIH1cblxuICAgIG9uU2hvdygpe1xuXG4gICAgfVxuXG4gICAgb25Mb2FkKCkge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgICAvLyDmiZPlvIDosIPor5VcbiAgICAgIHd4LnNldEVuYWJsZURlYnVnKHtcbiAgICAgICAgZW5hYmxlRGVidWc6IHRydWVcbiAgICAgIH0pXG4gICAgICB0aGlzLiRwYXJlbnQuZ2V0VXNlckluZm8oZnVuY3Rpb24odXNlckluZm8pIHtcbiAgICAgICAgaWYgKHVzZXJJbmZvKSB7XG4gICAgICAgICAgc2VsZi51c2VySW5mbyA9IHVzZXJJbmZvXG4gICAgICAgIH1cblxuICAgICAgICBzZWxmLiRhcHBseSgpXG4gICAgICB9KVxuXG4gICAgICB3ZXB5LnJlcXVlc3Qoe1xuICAgICAgICAgIHVybDphcGkuYXJ0aWNsZUxpc3QsXG4gICAgICAgICAgc3VjY2VzczpmdW5jdGlvbihyZXMpe1xuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcy5kYXRhLmRhdGFbMF0uY29udGVudCk7XG4gICAgICAgICAgICBzZWxmLm5vdGVzID0gcmVzLmRhdGEuZGF0YVswXS5jb250ZW50O1xuICAgICAgICAgICAgc2VsZi4kYXBwbHkoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIClcblxuICAgICAgd3guZ2V0TmV0d29ya1R5cGUoe1xuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcbiAgICAgICAgICAvLyDov5Tlm57nvZHnu5znsbvlnossIOacieaViOWAvO+8mlxuICAgICAgICAgIC8vIHdpZmkvMmcvM2cvNGcvdW5rbm93bihBbmRyb2lk5LiL5LiN5bi46KeB55qE572R57uc57G75Z6LKS9ub25lKOaXoOe9kee7nClcbiAgICAgICAgICB2YXIgbmV0d29ya1R5cGUgPSByZXMubmV0d29ya1R5cGU7XG4gICAgICAgICAgc3dpdGNoKG5ldHdvcmtUeXBlKXtcbiAgICAgICAgICAgIGNhc2UgXCJ3aWZpXCI6XG4gICAgICAgICAgICAgICAgIHNlbGYubmV0d29ya1R5cGUgPSBcIndpZmnnvZHnu5xcIjtcbiAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiNGdcIjpcbiAgICAgICAgICAgICAgICAgc2VsZi5uZXR3b3JrVHlwZSA9IFwiNGfnvZHnu5xcIjtcbiAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OiBzZWxmLm5ldHdvcmtUeXBlID0gXCLml6DnvZHnu5xcIjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gIH1cbiJdfQ==