﻿/**
 * Class: SuperMap.ThemeGraphText
 * 统计图文字标注风格类。
 * 通过该类可以设置统计图表中文字可见性以及标注风格。
 */
require('../REST');
var SuperMap = require('../SuperMap');
var ServerTextStyle = require('./ServerTextStyle');
SuperMap.ThemeGraphText = SuperMap.Class({

    /**
     * APIProperty: graphTextDisplayed
     * {Boolean} 是否显示统计图上的文字标注。默认为 false，即不显示。
     */
    graphTextDisplayed: false,

    /**
     * APIProperty: graphTextFormat
     * {<SuperMap.ThemeGraphTextFormat>} 统计专题图文本显示格式。
     * 文本显示格式包括百分数、真实数值、标题、标题+百分数、标题+真实数值。默认为 SuperMap.ThemeGraphTextFormat.CAPTION。
     */
    graphTextFormat: SuperMap.ThemeGraphTextFormat.CAPTION,

    /**
     * APIProperty: graphTextStyle
     * {<SuperMap.ServerTextStyle>}统计图上的文字标注风格。
     */
    graphTextStyle: null,
    /**
     * Constructor: SuperMap.ThemeGraphText
     * 统计图文字标注风格类构造函数。
     *
     * Parameters:
     * options - {Object} 参数。
     *
     * Allowed options properties:
     * graphTextDisplayed - {Boolean} 是否显示统计图上的文字标注。
     * graphTextFormat - {<SuperMap.ThemeGraphTextFormat>} 统计专题图文本显示格式。
     * graphTextStyle - {<SuperMap.ServerTextStyle>} 统计图上的文字标注风格。
     */
    initialize: function (options) {
        var me = this;
        me.graphTextStyle = new ServerTextStyle();
        if (options) {
            SuperMap.Util.extend(this, options);
        }
    },

    /**
     * APIMethod: destroy
     * 释放资源，将引用资源的属性置空。
     */
    destroy: function () {
        var me = this;
        me.graphTextDisplayed = null;
        me.graphTextFormat = null;
        if (me.graphTextStyle) {
            me.graphTextStyle.destroy();
            me.graphTextStyle = null;
        }
    },

    CLASS_NAME: "SuperMap.ThemeGraphText"
});
SuperMap.ThemeGraphText.fromObj = function (obj) {
    var res = new SuperMap.ThemeGraphText();
    SuperMap.Util.copy(res, obj);
    res.graphTextStyle = SuperMap.ServerTextStyle.fromObj(obj.graphTextStyle);
    return res;

};
module.exports = SuperMap.ThemeGraphText;
