/*
 * Notes
 * Backend app with Notes and Notetasks
 *
 * OpenAPI spec version: 1.0.0
 * Contact: staske11111@gmail.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 3.0.34
 *
 * Do not edit the class manually.
 *
 */
import {ApiClient} from '../ApiClient';

/**
 * The UpdateNoteTaskVm model module.
 * @module model/UpdateNoteTaskVm
 * @version 1.0.0
 */
export class UpdateNoteTaskVm {
  /**
   * Constructs a new <code>UpdateNoteTaskVm</code>.
   * @alias module:model/UpdateNoteTaskVm
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>UpdateNoteTaskVm</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UpdateNoteTaskVm} obj Optional instance to populate.
   * @return {module:model/UpdateNoteTaskVm} The populated <code>UpdateNoteTaskVm</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new UpdateNoteTaskVm();
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'String');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('text'))
        obj.text = ApiClient.convertToType(data['text'], 'String');
      if (data.hasOwnProperty('seconds'))
        obj.seconds = ApiClient.convertToType(data['seconds'], 'Number');
      if (data.hasOwnProperty('date'))
        obj._date = ApiClient.convertToType(data['date'], 'Date');
      if (data.hasOwnProperty('matrixId'))
        obj.matrixId = ApiClient.convertToType(data['matrixId'], 'Number');
      if (data.hasOwnProperty('progressConditionId'))
        obj.progressConditionId = ApiClient.convertToType(data['progressConditionId'], 'Number');
    }
    return obj;
  }
}

/**
 * @member {String} id
 */
UpdateNoteTaskVm.prototype.id = undefined;

/**
 * @member {String} name
 */
UpdateNoteTaskVm.prototype.name = undefined;

/**
 * @member {String} text
 */
UpdateNoteTaskVm.prototype.text = undefined;

/**
 * @member {Number} seconds
 */
UpdateNoteTaskVm.prototype.seconds = undefined;

/**
 * @member {Date} _date
 */
UpdateNoteTaskVm.prototype._date = undefined;

/**
 * @member {Number} matrixId
 */
UpdateNoteTaskVm.prototype.matrixId = undefined;

/**
 * @member {Number} progressConditionId
 */
UpdateNoteTaskVm.prototype.progressConditionId = undefined;
