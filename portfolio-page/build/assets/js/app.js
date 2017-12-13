'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(function () {
  'use strict';

  svg4everybody();

  var first = 'Oleg';
  var name = 'Your name is ' + first + '.';

  var baseModel = function () {
    function baseModel() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

      _classCallCheck(this, baseModel);

      // class constructor
      this.name = 'Base';
      this.url = 'http://azat.co/api';
      this.data = data;
      this.options = options;
    }

    _createClass(baseModel, [{
      key: 'getName',
      value: function getName() {
        // class method
        console.log('Class name: ' + this.name);
      }
    }]);

    return baseModel;
  }();

  var obj = new baseModel();

  console.log('es6' + obj.getName() + ' ' + name);

  setTimeout(function () {
    document.querySelector('.greating_picture').classList.add('m--show');
  }, 1000);
})();
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJzdmc0ZXZlcnlib2R5IiwiZmlyc3QiLCJuYW1lIiwiYmFzZU1vZGVsIiwib3B0aW9ucyIsImRhdGEiLCJ1cmwiLCJjb25zb2xlIiwibG9nIiwib2JqIiwiZ2V0TmFtZSIsInNldFRpbWVvdXQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJjbGFzc0xpc3QiLCJhZGQiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLENBQUMsWUFBVztBQUNaOztBQUVBQTs7QUFFQSxNQUFJQyxRQUFRLE1BQVo7QUFDQSxNQUFJQyx5QkFBdUJELEtBQXZCLE1BQUo7O0FBTlksTUFRTkUsU0FSTTtBQVNaLHlCQUFxQztBQUFBLFVBQXpCQyxPQUF5Qix1RUFBZixFQUFlO0FBQUEsVUFBWEMsSUFBVyx1RUFBSixFQUFJOztBQUFBOztBQUFFO0FBQ3ZDLFdBQUtILElBQUwsR0FBWSxNQUFaO0FBQ0EsV0FBS0ksR0FBTCxHQUFXLG9CQUFYO0FBQ0EsV0FBS0QsSUFBTCxHQUFZQSxJQUFaO0FBQ0EsV0FBS0QsT0FBTCxHQUFlQSxPQUFmO0FBQ0M7O0FBZFc7QUFBQTtBQUFBLGdDQWdCRjtBQUFFO0FBQ1pHLGdCQUFRQyxHQUFSLGtCQUEyQixLQUFLTixJQUFoQztBQUNDO0FBbEJXOztBQUFBO0FBQUE7O0FBcUJaLE1BQUlPLE1BQU0sSUFBSU4sU0FBSixFQUFWOztBQUVBSSxVQUFRQyxHQUFSLENBQVksUUFBUUMsSUFBSUMsT0FBSixFQUFSLEdBQXdCLEdBQXhCLEdBQThCUixJQUExQzs7QUFFQVMsYUFBVyxZQUFXO0FBQ3RCQyxhQUFTQyxhQUFULENBQXVCLG1CQUF2QixFQUE0Q0MsU0FBNUMsQ0FBc0RDLEdBQXRELENBQTBELFNBQTFEO0FBQ0MsR0FGRCxFQUVHLElBRkg7QUFHQyxDQTVCRCIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKSB7XG4ndXNlIHN0cmljdCc7XG5cbnN2ZzRldmVyeWJvZHkoKTtcblxudmFyIGZpcnN0ID0gJ09sZWcnXG52YXIgbmFtZSA9IGBZb3VyIG5hbWUgaXMgJHtmaXJzdH0uYFxuXG5jbGFzcyBiYXNlTW9kZWwge1xuY29uc3RydWN0b3Iob3B0aW9ucyA9IHt9LCBkYXRhID0gW10pIHsgLy8gY2xhc3MgY29uc3RydWN0b3JcbnRoaXMubmFtZSA9ICdCYXNlJ1xudGhpcy51cmwgPSAnaHR0cDovL2F6YXQuY28vYXBpJ1xudGhpcy5kYXRhID0gZGF0YVxudGhpcy5vcHRpb25zID0gb3B0aW9uc1xufVxuXG5nZXROYW1lKCkgeyAvLyBjbGFzcyBtZXRob2RcbmNvbnNvbGUubG9nKGBDbGFzcyBuYW1lOiAke3RoaXMubmFtZX1gKVxufVxufVxuXG52YXIgb2JqID0gbmV3IGJhc2VNb2RlbCgpO1xuXG5jb25zb2xlLmxvZygnZXM2JyArIG9iai5nZXROYW1lKCkgKyAnICcgKyBuYW1lKTtcblxuc2V0VGltZW91dChmdW5jdGlvbigpIHtcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ncmVhdGluZ19waWN0dXJlJykuY2xhc3NMaXN0LmFkZCgnbS0tc2hvdycpO1xufSwgMTAwMCk7XG59KSgpOyJdfQ==
