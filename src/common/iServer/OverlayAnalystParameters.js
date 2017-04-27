﻿/**
 * Class: SuperMap.OverlayAnalystParameters
 * 叠加分析参数基类，数据集叠加分析参数和几何对象叠加分析参数均继承此基类
 */
require('../REST');
var SuperMap = require('../SuperMap');
SuperMap.OverlayAnalystParameters = SuperMap.Class({

    /**
     * Property: operation
     * {<SuperMap.OverlayOperationType>}
     */
    operation: SuperMap.OverlayOperationType.UNION,

    /**
     * Constructor: OverlayAnalystParameters
     * 叠加分析参数基类构造函数构造函数。
     *
     * Parameters:
     * options - {Object} 参数。
     *
     * Allowed options properties:
     * operation - {<SuperMap.OverlayOperationType>} 指定叠加分析操作类型。
     */
    initialize: function (options) {
        var me = this;
        if (options) {
            SuperMap.Util.extend(me, options);
        }
    },

    /**
     * APIMethod: destroy
     * 释放资源，将引用资源的属性置空。
     */
    destroy: function () {
        var me = this;
        me.operation = null;
    },

    CLASS_NAME: "SuperMap.OverlayAnalystParameters"
});

module.exports = SuperMap.OverlayAnalystParameters;