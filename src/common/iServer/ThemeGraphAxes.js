﻿/**
 * Class: SuperMap.ThemeGraphAxes
 * 统计专题图坐标轴样式类。
 * 该类用于设置统计图中坐标轴样式相关信息，如坐标轴颜色、是否显示、坐标文本样式等。
 */

require('./ServerColor');
require('./ServerTextStyle');
SuperMap.ThemeGraphAxes = SuperMap.Class({

    /**
     * APIProperty: axesColor
     * {<SuperMap.ServerColor>} 坐标轴颜色，默认为黑色。当 axesDisplayed = true 时有效。
     */
    axesColor: null,

    /**
     * APIProperty: axesDisplayed
     * {Boolean} 是否显示坐标轴。默认为 false，即不显示。
     * 由于饼状图和环状图无坐标轴，故该属性以及所有与坐标轴设置相关的属性都不适用于它们。并且只有当该值为 true 时，其它设置坐标轴的属性才起作用。
     */
    axesDisplayed: false,

    /**
     * APIProperty: axesGridDisplayed
     * {Boolean} 是否在统计图坐标轴上显示网格。默认为 false，即不显示。
     */
    axesGridDisplayed: false,

    /**
     * APIProperty: axesTextDisplayed
     * {Boolean} 是否显示坐标轴的文本标注。默认为 false，即不显示。
     */
    axesTextDisplayed: false,

    /**
     * APIProperty: axesTextStyle
     * {<SuperMap.ServerTextStyle>} 坐标轴文本风格。当 axesTextDisplayed = true 时有效。
     */
    axesTextStyle: null,

    /**
     * Constructor: SuperMap.ThemeGraphAxes
     * 统计专题图坐标轴样式类构造函数。
     *
     * Parameters:
     * options - {Object} 参数。
     *
     * Allowed options properties:
     * axesColor - {<SuperMap.ServerColor>} 坐标轴颜色。
     * axesDisplayed - {Boolean} 是否显示坐标轴。
     * axesGridDisplayed - {Boolean} 是否在统计图坐标轴上显示网格。
     * axesTextDisplayed - {Boolean} 是否显示坐标轴的文本标注。
     * axesTextStyle - {<SuperMap.ServerTextStyle>} 统计符号的最大最小尺寸。
     */
    initialize: function (options) {
        var me = this;
        me.axesColor = new SuperMap.ServerColor(0, 0, 0);
        me.axesTextStyle = new SuperMap.ServerTextStyle();
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
        if (me.axesColor) {
            me.axesColor.destroy();
            me.axesColor = null;
        }
        me.axesDisplayed = null;
        me.axesGridDisplayed = null;
        me.axesTextDisplayed = null;
        if (me.axesTextStyle) {
            me.axesTextStyle.destroy();
            me.axesTextStyle = null;
        }
    },

    CLASS_NAME: "SuperMap.ThemeGraphAxes"
});
SuperMap.ThemeGraphAxes.fromObj = function (obj) {
    if (!obj) return;
    var res = new SuperMap.ThemeGraphAxes();
    SuperMap.Util.copy(res, obj);
    res.axesColor = SuperMap.ServerColor.fromJson(obj.axesColor);
    res.axesTextStyle = SuperMap.ServerTextStyle.fromObj(obj.axesTextStyle);
    return res;
};
module.exports = function (options) {
    return new SuperMap.ThemeGraphAxes(options);
};
