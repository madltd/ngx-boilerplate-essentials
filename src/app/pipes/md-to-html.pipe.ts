import { Pipe, PipeTransform } from '@angular/core';
import marked, { MarkedOptions } from 'marked';

@Pipe({
  name: 'mdToHtml'
})
export class MdToHtmlPipe implements PipeTransform {

  public static setOptions(options: MarkedOptions): void {
    marked.setOptions(options);
  }

  public transform(markdown: string, options?: MarkedOptions): string {
    if (markdown == null) {
      return '';
    }
    return marked(markdown, options);
  }

}
