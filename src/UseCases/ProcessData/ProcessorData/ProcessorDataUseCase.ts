
export class ProcessorData{
  static Process(data:(string | undefined)):( Array<any> | NodeJS.ErrnoException){
    if(data) return data.replace(/['\r']/g, '').split('\n')
    throw new Error('error processing data, probaly data is undefined.')
  }
}