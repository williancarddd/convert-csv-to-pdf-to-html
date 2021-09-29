import { writeFile } from "fs";
import { promisify } from "util";
import path from "path";


export class WriteFile {
  protected writeFilePromise: any
  public constructor(){
    this.writeFilePromise = promisify(writeFile)
  }

  public async Write(htmlDocument: string, nameDoc?: string): Promise<boolean>{
    try{
      await  this.writeFilePromise(path.resolve('src', 'Assets', `${nameDoc ? nameDoc : Date.now()}-template-table.html`), htmlDocument)
      return true
    } catch(Err) {
      console.log(Err)
      return false
    }
  }
}