'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MyPage = function (_wepy$component) {
  _inherits(MyPage, _wepy$component);

  function MyPage() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, MyPage);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = MyPage.__proto__ || Object.getPrototypeOf(MyPage)).call.apply(_ref, [this].concat(args))), _this), _this.props = {
      params: {
        type: Object,
        default: {
          animate: 'bounceIn',
          activeColor: 'red',
          color: '#999999',
          enableCancel: true
        },
        twoWay: true
      },
      active: {
        type: Boolean,
        default: false,
        twoWay: true
      }
    }, _this.customData = {}, _this.config = {}, _this.data = {
      animatePalying: false
    }, _this.components = {}, _this.mixins = [], _this.computed = {}, _this.watch = {
      params: function params(newValue, oldValue) {
        newValue.animate = newValue.animate ? newValue.animate : 'bounceIn';
        newValue.activeColor = newValue.activeColor ? newValue.activeColor : 'red';
        newValue.color = newValue.color ? newValue.color : '#999999';
        newValue.enableCancel = newValue.enableCancel ? newValue.enableCancel : true;
      }
    }, _this.methods = {
      toggle: function toggle() {
        var _this2 = this;

        var isToggleStatus = new Promise(function (resolve, reject) {
          if (_this2.params.enableCancel) {
            resolve();
          } else {
            if (_this2.active) {
              reject();
            } else {
              resolve();
            }
          }
        });
        isToggleStatus.then(function () {
          _this2.active = !_this2.active;
          _this2.$apply();
          if (_this2.active) {
            _this2.animatePalying = true;
            _this2.$apply();
            var self = _this2;
            setTimeout(function () {
              self.animatePalying = false;
              self.$apply();
            }, 1000);
          }
        }, function () {
          return false;
        });
      },
      confirm: function confirm() {}

    }, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(MyPage, [{
    key: 'customFunction',
    // 自定义数据

    value: function customFunction() {} // 自定义方法

  }, {
    key: 'onLoad',
    value: function onLoad() {} // 在Page和Component共用的生命周期函数

  }, {
    key: 'onShow',
    // 声明组件之间的事件处理函数
    value: function onShow() {} // 只在Page中存在的页面生命周期函数

    // 只在Page实例中存在的配置数据，对应于原生的page.json文件

    // 页面所需数据均需在这里声明，可用于模板数据绑定

    // 声明页面中所引用的组件，或声明组件中所引用的子组件

    // 声明页面所引用的Mixin实例

    // 声明计算属性（详见后文介绍）

    // 声明数据watcher（详见后文介绍）

    // 声明页面wxml中标签的事件处理函数。注意，此处只用于声明页面wxml中标签的bind、catch事件，自定义方法需以自定义方法的方式声明

  }]);

  return MyPage;
}(_wepy2.default.component);

exports.default = MyPage;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlcHktbmljZXMuanMiXSwibmFtZXMiOlsiTXlQYWdlIiwicHJvcHMiLCJwYXJhbXMiLCJ0eXBlIiwiT2JqZWN0IiwiZGVmYXVsdCIsImFuaW1hdGUiLCJhY3RpdmVDb2xvciIsImNvbG9yIiwiZW5hYmxlQ2FuY2VsIiwidHdvV2F5IiwiYWN0aXZlIiwiQm9vbGVhbiIsImN1c3RvbURhdGEiLCJjb25maWciLCJkYXRhIiwiYW5pbWF0ZVBhbHlpbmciLCJjb21wb25lbnRzIiwibWl4aW5zIiwiY29tcHV0ZWQiLCJ3YXRjaCIsIm5ld1ZhbHVlIiwib2xkVmFsdWUiLCJtZXRob2RzIiwidG9nZ2xlIiwiaXNUb2dnbGVTdGF0dXMiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInRoZW4iLCIkYXBwbHkiLCJzZWxmIiwic2V0VGltZW91dCIsImNvbmZpcm0iLCJldmVudHMiLCJ3ZXB5IiwiY29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDRTs7Ozs7Ozs7Ozs7O0lBRXFCQSxNOzs7Ozs7Ozs7Ozs7OztzTEFFbkJDLEssR0FBUTtBQUNOQyxjQUFPO0FBQ0xDLGNBQUtDLE1BREE7QUFFTEMsaUJBQVE7QUFDTkMsbUJBQVEsVUFERjtBQUVOQyx1QkFBWSxLQUZOO0FBR05DLGlCQUFNLFNBSEE7QUFJTkMsd0JBQWE7QUFKUCxTQUZIO0FBUUxDLGdCQUFRO0FBUkgsT0FERDtBQVdOQyxjQUFPO0FBQ0xSLGNBQUtTLE9BREE7QUFFTFAsaUJBQVEsS0FGSDtBQUdMSyxnQkFBUTtBQUhIO0FBWEQsSyxRQWlCUkcsVSxHQUFhLEUsUUFhYkMsTSxHQUFTLEUsUUFFVEMsSSxHQUFPO0FBQ0xDLHNCQUFlO0FBRFYsSyxRQUlQQyxVLEdBQWEsRSxRQUViQyxNLEdBQVMsRSxRQUVUQyxRLEdBQVcsRSxRQUVYQyxLLEdBQVE7QUFDTmxCLFlBRE0sa0JBQ0VtQixRQURGLEVBQ1lDLFFBRFosRUFDc0I7QUFDMUJELGlCQUFTZixPQUFULEdBQWlCZSxTQUFTZixPQUFULEdBQWlCZSxTQUFTZixPQUExQixHQUFrQyxVQUFuRDtBQUNBZSxpQkFBU2QsV0FBVCxHQUFxQmMsU0FBU2QsV0FBVCxHQUFxQmMsU0FBU2QsV0FBOUIsR0FBMEMsS0FBL0Q7QUFDQWMsaUJBQVNiLEtBQVQsR0FBZWEsU0FBU2IsS0FBVCxHQUFlYSxTQUFTYixLQUF4QixHQUE4QixTQUE3QztBQUNBYSxpQkFBU1osWUFBVCxHQUFzQlksU0FBU1osWUFBVCxHQUFzQlksU0FBU1osWUFBL0IsR0FBNEMsSUFBbEU7QUFDRDtBQU5LLEssUUFVUmMsTyxHQUFVO0FBQ1JDLGNBQU8sa0JBQVk7QUFBQTs7QUFDakIsWUFBSUMsaUJBQWUsSUFBSUMsT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBU0MsTUFBVCxFQUFrQjtBQUMvQyxjQUFHLE9BQUsxQixNQUFMLENBQVlPLFlBQWYsRUFBNEI7QUFDMUJrQjtBQUNELFdBRkQsTUFFTTtBQUNKLGdCQUFHLE9BQUtoQixNQUFSLEVBQWU7QUFDYmlCO0FBQ0QsYUFGRCxNQUVLO0FBQ0hEO0FBQ0Q7QUFDRjtBQUNGLFNBVmtCLENBQW5CO0FBV0FGLHVCQUFlSSxJQUFmLENBQW9CLFlBQUk7QUFDdEIsaUJBQUtsQixNQUFMLEdBQVksQ0FBQyxPQUFLQSxNQUFsQjtBQUNBLGlCQUFLbUIsTUFBTDtBQUNBLGNBQUcsT0FBS25CLE1BQVIsRUFBZTtBQUNiLG1CQUFLSyxjQUFMLEdBQW9CLElBQXBCO0FBQ0EsbUJBQUtjLE1BQUw7QUFDQSxnQkFBSUMsT0FBSyxNQUFUO0FBQ0FDLHVCQUFXLFlBQVk7QUFDckJELG1CQUFLZixjQUFMLEdBQW9CLEtBQXBCO0FBQ0FlLG1CQUFLRCxNQUFMO0FBQ0QsYUFIRCxFQUdFLElBSEY7QUFJRDtBQUNGLFNBWkQsRUFZRSxZQUFJO0FBQ0osaUJBQU8sS0FBUDtBQUNELFNBZEQ7QUFnQkQsT0E3Qk87QUE4QlJHLGVBQVEsbUJBQVksQ0FFbkI7O0FBaENPLEssUUFvQ1ZDLE0sR0FBUyxFOzs7OztBQXZFUTs7cUNBRUEsQ0FDaEIsQyxDQUFFOzs7OzZCQUVNLENBRVIsQyxDQUFFOzs7O0FBZ0VXOzZCQTlETCxDQUVSLEMsQ0FBRTs7QUFFVzs7QUFJVjs7QUFFYzs7QUFFSjs7QUFFRTs7QUFVWjs7QUFvQ0E7Ozs7O0VBeEY4QkMsZUFBS0MsUzs7a0JBQXBCcEMsTSIsImZpbGUiOiJ3ZXB5LW5pY2VzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5cbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgTXlQYWdlIGV4dGVuZHMgd2VweS5jb21wb25lbnQge1xuXG4gICAgcHJvcHMgPSB7XG4gICAgICBwYXJhbXM6e1xuICAgICAgICB0eXBlOk9iamVjdCxcbiAgICAgICAgZGVmYXVsdDp7XG4gICAgICAgICAgYW5pbWF0ZTonYm91bmNlSW4nLFxuICAgICAgICAgIGFjdGl2ZUNvbG9yOidyZWQnLFxuICAgICAgICAgIGNvbG9yOicjOTk5OTk5JyxcbiAgICAgICAgICBlbmFibGVDYW5jZWw6dHJ1ZVxuICAgICAgICB9LFxuICAgICAgICB0d29XYXk6IHRydWVcbiAgICAgIH0sXG4gICAgICBhY3RpdmU6e1xuICAgICAgICB0eXBlOkJvb2xlYW4sXG4gICAgICAgIGRlZmF1bHQ6ZmFsc2UsXG4gICAgICAgIHR3b1dheTogdHJ1ZVxuICAgICAgfVxuICAgIH1cbiAgICBjdXN0b21EYXRhID0ge30gIC8vIOiHquWumuS5ieaVsOaNrlxuXG4gICAgY3VzdG9tRnVuY3Rpb24oKSB7XG4gICAgfSAgLy8g6Ieq5a6a5LmJ5pa55rOVXG5cbiAgICBvbkxvYWQoKSB7XG5cbiAgICB9ICAvLyDlnKhQYWdl5ZKMQ29tcG9uZW505YWx55So55qE55Sf5ZG95ZGo5pyf5Ye95pWwXG5cbiAgICBvblNob3coKSB7XG5cbiAgICB9ICAvLyDlj6rlnKhQYWdl5Lit5a2Y5Zyo55qE6aG16Z2i55Sf5ZG95ZGo5pyf5Ye95pWwXG5cbiAgICBjb25maWcgPSB7fTsgIC8vIOWPquWcqFBhZ2Xlrp7kvovkuK3lrZjlnKjnmoTphY3nva7mlbDmja7vvIzlr7nlupTkuo7ljp/nlJ/nmoRwYWdlLmpzb27mlofku7ZcblxuICAgIGRhdGEgPSB7XG4gICAgICBhbmltYXRlUGFseWluZzpmYWxzZVxuICAgIH07ICAvLyDpobXpnaLmiYDpnIDmlbDmja7lnYfpnIDlnKjov5nph4zlo7DmmI7vvIzlj6/nlKjkuo7mqKHmnb/mlbDmja7nu5HlrppcblxuICAgIGNvbXBvbmVudHMgPSB7fTsgIC8vIOWjsOaYjumhtemdouS4reaJgOW8leeUqOeahOe7hOS7tu+8jOaIluWjsOaYjue7hOS7tuS4reaJgOW8leeUqOeahOWtkOe7hOS7tlxuXG4gICAgbWl4aW5zID0gW107ICAvLyDlo7DmmI7pobXpnaLmiYDlvJXnlKjnmoRNaXhpbuWunuS+i1xuXG4gICAgY29tcHV0ZWQgPSB7fTsgIC8vIOWjsOaYjuiuoeeul+WxnuaAp++8iOivpuingeWQjuaWh+S7i+e7je+8iVxuXG4gICAgd2F0Y2ggPSB7XG4gICAgICBwYXJhbXMgKG5ld1ZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICBuZXdWYWx1ZS5hbmltYXRlPW5ld1ZhbHVlLmFuaW1hdGU/bmV3VmFsdWUuYW5pbWF0ZTonYm91bmNlSW4nO1xuICAgICAgICBuZXdWYWx1ZS5hY3RpdmVDb2xvcj1uZXdWYWx1ZS5hY3RpdmVDb2xvcj9uZXdWYWx1ZS5hY3RpdmVDb2xvcjoncmVkJztcbiAgICAgICAgbmV3VmFsdWUuY29sb3I9bmV3VmFsdWUuY29sb3I/bmV3VmFsdWUuY29sb3I6JyM5OTk5OTknO1xuICAgICAgICBuZXdWYWx1ZS5lbmFibGVDYW5jZWw9bmV3VmFsdWUuZW5hYmxlQ2FuY2VsP25ld1ZhbHVlLmVuYWJsZUNhbmNlbDp0cnVlO1xuICAgICAgfSxcblxuICAgIH07ICAvLyDlo7DmmI7mlbDmja53YXRjaGVy77yI6K+m6KeB5ZCO5paH5LuL57uN77yJXG5cbiAgICBtZXRob2RzID0ge1xuICAgICAgdG9nZ2xlOmZ1bmN0aW9uICgpIHtcbiAgICAgICAgbGV0IGlzVG9nZ2xlU3RhdHVzPW5ldyBQcm9taXNlKChyZXNvbHZlLHJlamVjdCk9PntcbiAgICAgICAgICBpZih0aGlzLnBhcmFtcy5lbmFibGVDYW5jZWwpe1xuICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgIH1lbHNlIHtcbiAgICAgICAgICAgIGlmKHRoaXMuYWN0aXZlKXtcbiAgICAgICAgICAgICAgcmVqZWN0KCk7XG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgcmVzb2x2ZSgpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICBpc1RvZ2dsZVN0YXR1cy50aGVuKCgpPT57XG4gICAgICAgICAgdGhpcy5hY3RpdmU9IXRoaXMuYWN0aXZlO1xuICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgICAgaWYodGhpcy5hY3RpdmUpe1xuICAgICAgICAgICAgdGhpcy5hbmltYXRlUGFseWluZz10cnVlO1xuICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgICAgIGxldCBzZWxmPXRoaXM7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgc2VsZi5hbmltYXRlUGFseWluZz1mYWxzZTtcbiAgICAgICAgICAgICAgc2VsZi4kYXBwbHkoKTtcbiAgICAgICAgICAgIH0sMTAwMCk7XG4gICAgICAgICAgfVxuICAgICAgICB9LCgpPT57XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9KVxuXG4gICAgICB9LFxuICAgICAgY29uZmlybTpmdW5jdGlvbiAoKSB7XG5cbiAgICAgIH0sXG5cbiAgICB9OyAgLy8g5aOw5piO6aG16Z2id3htbOS4reagh+etvueahOS6i+S7tuWkhOeQhuWHveaVsOOAguazqOaEj++8jOatpOWkhOWPqueUqOS6juWjsOaYjumhtemdond4bWzkuK3moIfnrb7nmoRiaW5k44CBY2F0Y2jkuovku7bvvIzoh6rlrprkuYnmlrnms5XpnIDku6Xoh6rlrprkuYnmlrnms5XnmoTmlrnlvI/lo7DmmI5cblxuICAgIGV2ZW50cyA9IHt9OyAgLy8g5aOw5piO57uE5Lu25LmL6Ze055qE5LqL5Lu25aSE55CG5Ye95pWwXG4gIH1cbiJdfQ==