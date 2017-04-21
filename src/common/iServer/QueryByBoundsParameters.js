﻿/**
 * Class: SuperMap.QueryByBoundsParameters
 * Bounds 查询参数类。
 * 该类用于设置 Bounds 查询的相关参数。
 *
 * Inherits from:
 *  - <SuperMap.QueryParameters>
 */

require('./QueryParameters');
require('./FilterParameter');
SuperMap.QueryByBoundsParameters = SuperMap.Class(SuperMap.QueryParameters, {

    /**
     * APIProperty: returnContent
     * {Boolean} 是否立即返回新创建资源的表述还是返回新资源的 URI。
     * 如果为 true，则直接返回新创建资源，即查询结果的表述。
     * 为 false，则返回的是查询结果资源的 URI。默认为 true。
     */
    returnContent: true,

    /**
     * APIProperty: bounds
     * {<SuperMap.Bounds>} 指定的查询范围。
     */
    bounds: null,

    /**
     * Constructor: SuperMap.QueryByBoundsParameters
     * Bounds 查询参数类构造函数。
     *
     * Parameters:
     * options - {Object} 参数。
     *
     * Allowed options properties:
     * customParams - {String} 自定义参数，供扩展使用。
     * expectCount - {Integer} 期望返回结果记录个数。
     * networkType - {<SuperMap.GeometryType>} 网络数据集对应的查询类型。
     * queryOption - {<SuperMap.QueryOption>} 查询结果类型枚举类。
     * queryParams -  {Array(<SuperMap.FilterParameter>)} 查询过滤条件参数数组。
     * startRecord - {Integer} 查询起始记录号。
     * holdTime - {Integer} 资源在服务端保存的时间。
     * returnContent - {Boolean} 是否立即返回新创建资源的表述还是返回新资源的 URI。
     * bounds - {<SuperMap.Bounds>} 指定的查询范围。
     */
    initialize: function (options) {
        SuperMap.QueryParameters.prototype.initialize.apply(this, arguments);
        if (!options) {
            return;
        }
        SuperMap.Util.extend(this, options);
    },

    /**
     * APIMethod: destroy
     * 释放资源，将引用资源的属性置空。
     */
    destroy: function () {
        SuperMap.QueryParameters.prototype.destroy.apply(this, arguments);
        var me = this;
        me.returnContent = null;
        if (me.bounds) {
            me.bounds = null;
        }

    },

    CLASS_NAME: "SuperMap.QueryByBoundsParameters"
});
module.exports = function (options) {
    return new SuperMap.QueryByBoundsParameters(options);
};