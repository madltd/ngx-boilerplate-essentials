import { Injectable } from '@angular/core';
import { DatePipe } from '@angular/common';
import { union, intersection, random } from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class HelperService {

  constructor(
    private datePipe: DatePipe
  ) { }

  /**
   * @description converts any string to a camelCase string (mutates)
   * @returns original string mutated to camelCase string
   * @param {string} str string that needs tobe converted to camelCase string
   */
  camelize(str: string): string {
    // Replace special characters with a space
    str = str.replace(/[^a-zA-Z0-9 ]/g, ' ');
    // put a space before an uppercase letter
    str = str.replace(/([a-z](?=[A-Z]))/g, '$1 ');

    // Lower case first character and some other stuff
    str = str.replace(/([^a-zA-Z0-9 ])|^[0-9]+/g, '').trim().toLowerCase();

    // uppercase characters preceded by a space or number
    str = str.replace(/([ 0-9]+)([a-zA-Z])/g, function (a, b, c) {
      return b.trim() + c.toUpperCase();
    });

    return str;
  }

  /**
   * @description reverse of camilze
   * @param {string} str camelCase string that needs tobe converted to 'normal' string
   */
  decamelize(str: string): string {
    return str
      .replace(/([A-Z])/g, (match) => ` ${match}`)
      .replace(/^./, (match) => match.toUpperCase());
  }

  /**
   * @description transforms strigng or Date using provided format and returns formated date string using Angular Date Pipe
   * @param {string | Date} date date that needs to be transformed to another format
   * @param {string} format format of transformation, defaults to 'dd/MM/yy'
   */
  transformDate(date: string | Date, format: string = 'dd/MM/yy'): string {
    return this.datePipe.transform(date, format);
  }

  randomItemFromArray<T>(array: T[]): T {
    return array[Math.floor(Math.random() * (array.length))];
  }

  /**
   * @returns new array which contains values from all arrays without duplicates
   * @param {T[]} arrays arrays that need to be combined into one without duplicates
   */
  unionArray<T>(...arrays: T[]): T[] {
    return union(arrays);
  }

  /**
   * @returns new array of only repeated values in two or more arrays
   * @param {T[]} arrays arrays that need to be combined into one leaving only duplicated (aka intersections) values
   */
  intersectionArray<T>(...arrays: T[]): T[] {
    return intersection(arrays);
  }

  randomNumber(min: number, max: number): number {
    return random(min, max);
  }
}
