import {create} from 'html-pdf'
export class WritePdf{
  public static WritePdf(fileName:string, htmlDocument:string): void{
    create(htmlDocument, {}).toFile('./src/assets/' + `${Date.now()}-${fileName}.pdf`, () => {})
  }
}