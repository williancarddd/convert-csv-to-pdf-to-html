import fs from 'fs'
import {} from 'fs'
import { promisify } from 'util'


export class ReaderFile{
  readonly readFile:Function

  constructor(){
    this.readFile = promisify<Function>(fs.readFile)
    
  } 
  public async Read(filePath:string):Promise<string | undefined>{
    try{
      const content: string = await this.readFile(filePath,"utf-8")
      return content
    } catch(err) {
      console.log('error at read file.')
      return undefined
    }
  }
}